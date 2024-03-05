/**
    用来声明一个监听函数，当监听的值发生变化时，会触发监听函数的执行
    并将监听的返回值回写入所声明的位置状态中



 * 
 * 
 */
import { ISharedCtx, watch as heluxWatch, IOperateParams,  getSnap } from 'helux';
import { ComputedScopeRef, type ComputedScope, type StateValueDescriptor, type StateValueDescriptorParams, type StoreDefine, type StoreOptions } from "./store";
import { StoreExtendContext } from "./extends"; 
import { getVal, getValueByPath, setVal } from "./utils"; 
import { OBJECT_PATH_DELIMITER } from './consts';
import { Dict } from './types';
import { useEffect } from 'react';
import { getComputedContext } from './context';




export interface WatchOptions<R=any>{ 
    // 指定额外的过滤条件，如果返回true，才会触发listener的执行
    // 此函数会在表单中的每一个值发生变化时执行，如果返回true，则会触发listener的执行  
    // 由于此函数会在表单中的每一个值发生变化时均会执行，所以此函数应该尽量简单，不要有复杂的逻辑      
    // 如果大量的表单字段均需要监听，则可能会有性能问题
    // 一般在动态依赖时使用
    on?:(path:string[],value:any)=>boolean,
    context?  : ComputedScope
    scope?  : ComputedScope               // 计算函数的第一个参数
    initial?:R,  
    /**
     * 用来对表单内的watch进行分组，以便能按组进行enable或disable或其他操作
     */  
    group?:string
    /**
     * 启用或禁用watch，默认为true
     */
    enable?:boolean
}
 
/**
 * selfPath=当前watch函数所在的位置
 * triggerPath=watch函数侦听的位置，即发生变化的源路径
 */
export type WatchListenerOptions<Result=any> = {getSelfValue:()=>Result ,selfPath:string[] ,triggerPath:string[],getCache:()=>Dict,state:any}
export type WatchListener<Value=any, Result= Value> = (value:Value,options:WatchListenerOptions<Result>)=>(Exclude<Result,Promise<any>> | undefined)
export type WatchDepends = (value:any,path:string[])=>boolean


export type WatchDescriptorParams<Value = any,Result=Value>  = StateValueDescriptorParams<WatchListener<Value,Result>,WatchOptions>


export type WatchDescriptor<Value = any,Result=Value> = StateValueDescriptor<WatchListener<Value,Result>,WatchOptions<Result>> 
 /* 
 *  watch函数用来声明一个监听函数，当监听的值发生变化时，会触发监听函数的执行
 *  并将监听的返回值回写入所声明的位置状态中
 * 
 *  如:以下在validate属性中声明了一个监听函数，当侦听到表单中所有validate发生变化时，会触发监听函数的执行
 *  然后将监听函数的返回值回写到validate属性中
 * 
 * {
 *     validate:watch<boolean,stirng>((value:string,oldValue:boolean)=>{
 *          return value.length>0
 *    },{
 *     on:(path:string[],value:any)=>{
 *          return path[path.length-1]=='validate'
 *      }
 *    })
 * 
 * @param listener  监听函数,只能是同步函数
 * @param options 
 * @returns 
 */
export function watch<Value = any,Result=Value>(listener:WatchListener<Value,Result>,on:WatchOptions['on'],options?:WatchOptions<Result>):WatchDescriptor<Value,Result>{
    const opts : WatchOptions = Object.assign({
        on,
        enable:true,
        scope:ComputedScopeRef.Depends          // 默认传入的是所侦听项的值
    },options)
    const descriptor:WatchDescriptor<Value,Result> = () => {
        return {
          fn: listener,
          options: opts,
        };
      };    
    descriptor.__COMPUTED__ = 'watch'
    return descriptor        
}


export interface RegisteredWatchListener{
    fn:WatchListener                // 侦听函数       
    options:WatchOptions            // 侦听函数的选项
}

export interface WatcherObject extends WatchOptions{
    path:string[]
    run:(triggerPath:string[])=>void
    listener:(...args:any[])=>any
}

export class StoreWatcher<Store extends StoreDefine<any>> extends Map<string,WatcherObject>{
    private _off?:()=>{} 
    private _ctx?:ISharedCtx<Store["state"]>
    private _storeOptions:StoreOptions
    private _enable:boolean=true                            // 是否启用侦听器
    // key=triggerPath value=WatcherObject
    // 为了避免每次发生heluxWatch时进行遍历所有的监听函数，这里缓存起来，当对应的triggerPath触发变化时，可以从缓存中读取直接运行相应的watcher
    private cache=new Map<string,WatcherObject[]>()         
    private watcherCache?:Map <string,Dict>                 // 每个watcher的自我缓存
    constructor(storeOptions:StoreOptions){
        super()
        this._storeOptions = storeOptions        
    }  
    bind(ctx:ISharedCtx<Store["state"]>){
        if(!this._ctx) this._ctx = ctx
        this.createWacher()
    }
    get enable(){
        return this._enable
    }
    set enable(value:boolean){
        this._enable = value
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
                const matchedWatchers:WatcherObject[] = this.getCachedWatchers(triggerPath)!
                // 读取发生变化的值
                const triggerValue = getVal(this._ctx!.state,triggerPath)
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
                        watcher.run(triggerPath)
                    }catch(e:any){
                        console.warn("Error while run watchLisenter("+triggerPath.join(OBJECT_PATH_DELIMITER)+"->"+watcher.path.join(OBJECT_PATH_DELIMITER)+")",e.stack)
                    }
                } 
                
            })
        },()=>[this._ctx!.state])
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
    private addWatcherToCache(triggerPath:string[],watchPath:string[],watcher:WatcherObject){
        const key = this.getValueKey(triggerPath)
        if(!this.cache.has(key)){
            this.cache.set(key,[])
        }
        const watcherCache = this.cache.get(key)
        watcherCache!.push(watcher)
    }

    private getValueKey(valuePath:string | string[]){
        return JSON.stringify(valuePath)
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
    private isMatchWatcher(triggerPath:string[],triggerValue:any,watcher:WatcherObject ){
        if(this._enable===false || watcher.enable===false) return
        if(typeof(watcher.on)=='function'){
            return watcher.on(triggerPath,triggerValue)
        }
    }
    /**
     * 当srcPath指向的值变化时,运行watchListener函数,其返回值更新到destPath指向的值中
     * @param watchedPath       指的是watch函数所在的位置
     * @param triggerPath    指的是watch函数侦听的位置,即发生变化的源路径
     * @param watchListener 
     */
    private executeListener(triggerPath:string[],watchedPath:string[],watchListener:Function,options:WatchOptions ){
        // 1. 构建参数
        const listenerOpts = {
            getSelfValue : ()=> getVal(getSnap(this._ctx!.state),watchedPath),
            getCache:()=>this.getWatcherCache(watchedPath),
            triggerPath,
            selfPath:watchedPath,
            state:this._ctx!.state
        }                 
        // 2. 构建监听函数的作用域Scope,默认是所侦听的项的值
        const scope = getComputedContext(this._ctx!.state,{
            computedType:'Watch',
            input:[()=>getVal(this._ctx!.state,triggerPath)],
            type:'scope',
            valuePath:watchedPath,
            funcOptions:{ 
                scope:options.scope
            },
            storeOptions:this._storeOptions
        })
        const value =(options.scope==ComputedScopeRef.Depends && Array.isArray(scope)) ? scope[0] : scope
        // 3.  执行监听函数
        const result = watchListener.call(this._ctx!.state,value,listenerOpts)             
        // 4. 将返回值回写到状态中
        if(result!==undefined){
            // @ts-ignore
            this._ctx.setState((draft:any)=>{
                setVal(draft,watchedPath,result)
            })
        }    
    }
    /**
     * 添加一个侦听器对象
     * @param descriptor 
     * @param params 
     */
    add(watchPath:string[],listener:(...args:any[])=>any,options:WatchOptions){
        this.set(this.getValueKey(watchPath),{
            path:watchPath,
            listener,
            ...options,
            run:(triggerPath:string[])=>this.executeListener(triggerPath,watchPath,listener,options)
        })
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

// let storeWatcher:StoreWatcher<StoreDefine<any>> | undefined  
 
export function installWatch<Store extends StoreDefine<any>>(options:StoreExtendContext<ISharedCtx<Store["state"]>>) {
    const { stateCtx,params,storeOptions,extendObjects } =options    
    const { watchObjects } = extendObjects
    watchObjects?.bind(stateCtx)
    storeOptions.log(`install watch for <${params.fullKeyPath.join(OBJECT_PATH_DELIMITER)}>`)
    const watchDescriptor = params.value() as unknown as WatchDescriptorParams
    watchObjects!.add(params.fullKeyPath,watchDescriptor.fn,watchDescriptor.options)
    // params.replaceValue(watchDescriptor.options.initial)
    // @ts-ignore
    stateCtx.setState((draft)=>{
        setVal(draft,params.fullKeyPath,watchDescriptor.options.initial)
    })    
    
}

 


/**
 * 创建一个侦听器，用来侦听状态变化
 * 
 * store.watch(()=>{},["Ddd"])

 * @param stateCtx 
 * @returns 
 */
export function createWatch<State extends Dict>(stateCtx:ISharedCtx<State["state"]>){
    return (listener:(changedPaths:string[][])=>void,deps?:(string | string[])[])=>{
        // @ts-ignore
        const {unwatch} = heluxWatch(({triggerReasons})=>{
            const valuePaths:string[][] = triggerReasons.map((reason:any)=>reason.keyPath) 
            listener(valuePaths)            
        },()=>{
            return deps?.map(dep=>getValueByPath(stateCtx.state,dep))
        })
        return unwatch
    }
}
/**
 * createWatch的hook版本
 * @param stateCtx 
 * @returns 
 */
export function createUseWatch<State extends Dict>(stateCtx:ISharedCtx<State["state"]>){
    return (listener:(changedPaths:string[][])=>void,deps?:(string | string[])[])=>{
        useEffect(()=>{
            return createWatch(stateCtx)(listener,deps)
        },[])        
    }
}
