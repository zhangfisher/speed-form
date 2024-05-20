import { ISharedCtx, getSnap } from "helux"
import { ComputedScopeRef } from "../store/types"
import { setVal } from "../utils/setVal"
import { WatchListener, WatchOptions, WatchDescriptor } from './watch';
import { Dict, IStore, StoreDefine } from "../types"
import { getVal } from "../utils/getVal"
import { OBJECT_PATH_DELIMITER } from "../consts"
import { getComputedContext } from "../context"

export interface RegisteredWatchListener{
    fn:WatchListener                // 侦听函数       
    options:WatchOptions            // 侦听函数的选项
}



export interface WatchObject extends WatchOptions{
    key:string
    target:WatchTarget
    path:string[]
    run:(this:WatchObject,triggerPath:string[])=>void
    listener:(...args:any[])=>any
}


export type WatchTarget<T extends Dict = Dict > ={
    stateCtx: ISharedCtx<T>
  }


export class WatchObjects<T extends StoreDefine> extends Map<string,WatchObject>{
    private _off?:()=>{} 
    private _enable:boolean=true                            // 是否启用侦听器
    // key=triggerPath value=WatcherObject
    // 为了避免每次发生heluxWatch时进行遍历所有的监听函数，这里缓存起来，当对应的triggerPath触发变化时，可以从缓存中读取直接运行相应的watcher
    private cache=new Map<string,WatchObject[]>()         
    private watcherCache?:Map <string,Dict>                 // 每个watcher的自我缓存
    constructor(public store:IStore<T>){
        super()   
    }  
    init(){ 
        this.createWacher() 
    }
    get enable(){
        return this._enable
    }
    set enable(value:boolean){
        this._enable = value
    }     
    
    private getValueKey(valuePath:string | string[]){
        return JSON.stringify(valuePath)
    }  
    /**
     * 创建全局侦听器,
     * 此侦听器会侦听根对象，当对象所有的状态变化,会执行所有监听过滤函数，如果返回true，则执行对应的监听函数
     * 负责处理动态侦听
     */
    private createWacher(){
        // @ts-ignore
        const {unwatch} = heluxWatch(({triggerReasons})=>{
            if(!this._enable) return 
            const triggerPaths:string[][] = triggerReasons.map((reason:any)=>reason.keyPath) 
            triggerPaths.forEach((triggerPath)=>{  
                // 从缓存中读取能匹配的watchers
                const matchedWatchers:WatchObject[] = this.getCachedWatchers(triggerPath)!
                // 读取发生变化的值
                const triggerValue = getVal(this.store.state,triggerPath)
                // 如果没有缓存，则需要直接从缓存中取值                    
                if(matchedWatchers.length===0){    
                    // 没有缓存时，需要遍历所有的监听函数，找到匹配的监听函数
                    for(const watcher of this.values()){
                        if(this.isMatchWatcher(triggerPath,triggerValue,watcher)){                            
                            // 添加到缓存中
                            this.addWatcherToCache(triggerPath,watcher.path,watcher)
                            matchedWatchers.push(watcher)
                        }
                    } 
                } 
                // 执行所有的监听函数
                for(const watcher of matchedWatchers){
                    try{
                        watcher.run.call(watcher,triggerPath)
                    }catch(e:any){
                        console.warn("Error while run watchLisenter("+triggerPath.join(OBJECT_PATH_DELIMITER)+"->"+watcher.path.join(OBJECT_PATH_DELIMITER)+")",e.stack)
                    }
                } 
                
            })
        },()=>[this.store.state])
        this._off = unwatch
    }
    /**
     * 重置侦听器
     */
    reset(){
        this.cache.clear()
        this._off && this._off()
        this.watcherCache?.clear()
        this.createWacher()
    }
    /**
     * 找到匹配的侦听器
     * 优先从缓存中获取匹配的侦听器
     * @param srcPath 
     * @returns 
     */
    private getCachedWatchers(triggerPath:string[]){
        const key = this.getValueKey(triggerPath)
        if(this.cache.has(key)){
            return this.cache.get(key)
        }else{
            return []
        }
    }
    /**
     * 缓存侦听函数
     * 当匹配到过滤条件时，进行缓存以便下次当匹配的路径变化时可以直接执行侦听函数,而不是遍历所有的侦听过滤函数
     * @param triggerPath 
     * @param destPath 
     * @param listener 
     * @param listenerOpts 
     */
    private addWatcherToCache(triggerPath:string[],watchPath:string[],watcher:WatchObject){
        const key = this.getValueKey(triggerPath)
        if(!this.cache.has(key)){
            this.cache.set(key,[])
        }
        const watcherCache = this.cache.get(key)
        watcherCache!.push(watcher)
    }

    /**
     * 每个watcher可以通过getCache获取到一个独立的缓存用来保存一些信息
     * 
     * 
     * @param watchPath 
     * @returns 
     */
    private getWatcherCache(watchPath:string[]){
        if(!this.watcherCache) this.watcherCache = new Map()
        const key = watchPath.join(".")
        if(!this.watcherCache.has(key)){
            this.watcherCache.set(key,{})
        }
        return this.watcherCache.get(key)!
    }
    /**
     * 检测是否匹配watcher
     * @param srcPath 
     * @param destPath 
     * @param watchListener 
     * @returns 
     */
    private isMatchWatcher(triggerPath:string[],triggerValue:any,watcher:WatchObject ){
        if(this._enable===false || watcher.enable===false) return
        if(typeof(watcher.on)=='function'){
            return watcher.on(triggerPath,triggerValue)
        }
    }
    /**
     * 当srcPath指向的值变化时,运行watchListener函数,其返回值更新到destPath指向的值中
     * @param toPath       指的是watch函数所在的位置
     * @param fromPath    指的是watch函数侦听的位置,即发生变化的源路径
     * @param watchListener 
     */
    private executeListener(fromPath:string[],toPath:string[],watchObject:WatchObject ){
        if(!watchObject.enable) {
            this.store.options.log!(`watcher <${toPath.join(OBJECT_PATH_DELIMITER)}> is disabled`)
            return 
        }
        const watchTo = watchObject.target
        const watchListener = watchObject.listener

        // 1. 构建参数
        const listenerOpts = {
            getSelfValue : ()=> getVal(getSnap(this.store.state),toPath),
            getCache:()=>this.getWatcherCache(toPath),
            triggerPath: fromPath,
            selfPath: toPath,
            state:this.store.state
        }                 
        
        // 2. 构建监听函数的作用域Scope,默认是所侦听的项的值
        const scope = getComputedContext(this.store.state,{
            computedType:'Watch',
            input:[()=>getVal(this.store.state,fromPath)],
            type:'scope',
            valuePath:toPath,
            funcOptions:{ 
                scope:watchObject.scope
            },
            storeOptions:this.store.options
        })

        const value =(watchObject.scope==ComputedScopeRef.Depends && Array.isArray(scope)) ? scope[0] : scope

        // 3.  执行监听函数
        const result = watchListener.call(this.store.state,value,listenerOpts)    

        // 4. 将返回值回写到状态中
        if(result!==undefined){
             if(watchTo){
                watchTo.stateCtx.setState(draft=>{
                    draft.value=result
                })
            }else{
                this.store.setState( (draft:any)=>{
                    setVal(draft,toPath,result)
                })
            }            
        }    
    }
    /**
     * 添加一个侦听器对象  
     * @param selfPath              侦听函数所在的路径,用来接收侦听函数的返回值
     * @param listener              侦听函数 
     * @param options               参数
     * @param watchTo               侦听结果写到处下载
     * @returns 
     */

    add1(watchDescriptor:WatchDescriptor){
        watchDescriptor.options = watchDescriptor.options || {}
    }

    add(selfPath:string[],listener:(...args:any[])=>any,options:WatchOptions & {key?:string,watchTo?:WatchTarget}){
        const watchObject = {            
            key:this.getValueKey(selfPath),
            path:selfPath,
            listener,
            target:watchTo,
            ...options
        } as WatchObject
        watchObject.run = (fromPath:string[])=>this.executeListener(fromPath,selfPath,watchObject)
        this.set(this.getValueKey(selfPath),watchObject)
        return watchObject
    }

    remove(keyPath:string | string[]){
        this.delete(this.getValueKey(keyPath))
    }
    /**
     * 控制某个组的侦听器是否启用
     * @param groupName 
     * @param value 
     */
    enableGroup(groupName:string,value:boolean=true){
        for(const watcher of this.values()){
            if(watcher.group==groupName){
                watcher.enable = value
            }
        }
    }



}