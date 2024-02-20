/**
    用来声明一个监听函数，当监听的值发生变化时，会触发监听函数的执行
    并将监听的返回值回写入所声明的位置状态中



 * 
 * 
 */
import { ISharedCtx, watch as heluxWatch, IOperateParams,  getSnap } from 'helux';
import type { StateValueDescriptor, StateValueDescriptorParams, StoreSchema } from "./store";
import { StoreExtendContext } from "./extends"; 
import { getVal, setVal } from "./utils"; 
import { OBJECT_PATH_DELIMITER } from './consts';
import { Dict } from './types';




export interface WatchOptions<R=any>{ 
    // 指定额外的过滤条件，如果返回true，才会触发listener的执行
    // 此函数会在表单中的每一个值发生变化时执行，如果返回true，则会触发listener的执行  
    // 由于此函数会在表单中的每一个值发生变化时均会执行，所以此函数应该尽量简单，不要有复杂的逻辑      
    // 如果大量的表单字段均需要监听，则可能会有性能问题
    // 一般在动态依赖时使用
    on?:(path:string[],value:any)=>boolean 
    initial?:R,    
}
 
/**
 * curPath=当前watch函数所在的位置
 * srcPath=watch函数侦听的位置，即发生变化的源路径
 */
export type WatchListenerOptions<Result=any> = {getSelfValue:()=>Result ,selfPath:string[] ,srcPath:string[],getCache:()=>Dict}
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
        on
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
    fn:WatchListener        // 侦听函数   
    options:WatchOptions          // 侦听函数的选项
}

class StoreWatcher<Store extends StoreSchema<any>>{
    listeners = new Map<any,RegisteredWatchListener>()
    private _off:()=>void = ()=>{}
    private _wacher = {off:()=>{}} 
    private _enable:boolean=true                        // 是否启用侦听器
    private cache=new Map<any,any>()                    // 用来缓存侦听函数的返回值
    private listenerCache?:Map <string,Dict>
    constructor(private options:Omit<StoreExtendContext<ISharedCtx<Store["state"]>>,'params' | 'descriptor'>){
        this.createWacher()
    }
    get stateCtx(){
        return this.options.stateCtx
    }
    get storeOptions(){
        return this.options.storeOptions
    }
    get extendObjects(){
        return this.options.extendObjects
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
            const valuePaths:string[][] = triggerReasons.map((reason:any)=>reason.keyPath) 
            valuePaths.forEach((srcPath)=>{  
                // 如果有缓存，则直接从缓存中取值
                if(this.hitListenerFromCache(srcPath)) return        
                // 如果没有缓存，则执行所有的监听函数
                for(const [destPath,listener] of this.listeners){
                    try{
                        this.executeListener(srcPath,JSON.parse(destPath),listener)
                    }catch(e:any){
                        console.warn("Error while run watchLisenter("+srcPath+"->"+destPath+")",e.stack)
                    }
                } 
            })
        },()=>[this.stateCtx.state])
        this._wacher = {off:unwatch}
    }
    /**
     * 缓存侦听函数
     * 当匹配到过滤条件时，进行缓存以便下次当匹配的路径变化时可以直接执行侦听函数,而不是遍历所有的侦听过滤函数
     * @param srcPath 
     * @param destPath 
     * @param listener 
     * @param listenerOpts 
     */
    private addListenerToCache(srcPath:string[],destPath:string[],listener:WatchListener,listenerOpts:any){
        const srcKey = this.getValueKey(srcPath)
        if(!this.cache.has(srcKey)){
            this.cache.set(srcKey,[])
        }
        const listenerCache = this.cache.get(srcKey)
        listenerCache.push([destPath,listener,listenerOpts])
    }

    private getValueKey(valuePath:string | string[]){
        return JSON.stringify(valuePath)
    }
    /**
     * 命中匹配缓存中的侦听函数
     * @param srcPath 
     */
    private hitListenerFromCache(srcPath:string[]){
        const srcKey = this.getValueKey(srcPath)
        if(this.cache.has(srcKey)){
            const srcValue = getVal(this.stateCtx.state,srcPath)
            const listeners = this.cache.get(srcKey)
            listeners.forEach(([destPath,listener,listenerOpts]:[string[],WatchListener,any])=>{
                 const result = listener(srcValue,listenerOpts)             
                 // 将返回值回写到状态中
                 if(result!==undefined){
                     // @ts-ignore
                     this.stateCtx.setState((draft:any)=>{
                         setVal(draft,destPath,result)
                     })
                 }              
            })
            return listeners.length>0
        }
        return false
    }
    private getListenerCache(valuePath:string[]){
        if(!this.listenerCache) this.listenerCache = new Map()
        const key = valuePath.join(".")
        if(!this.listenerCache.has(key)){
            this.listenerCache.set(key,{})
        }
        return this.listenerCache.get(key)!
    }

    /**
     * 当srcPath指向的值变化时,运行watchListener函数,其返回值更新到destPath指向的值中
     * @param destPath   指的是watch函数所在的位置
     * @param srcPath      指的是watch函数侦听的位置,即发生变化的源
     * @param watchListener 
     */
    private executeListener(srcPath:string[],destPath:string[],watchListener:WatchDescriptorParams ){
        const { fn:listener,options } = watchListener
        const filter = options.on
        if(typeof(filter)=='function'){
            const srcValue = getVal(this.stateCtx.state,srcPath)
            try{
                if(filter(srcPath,srcValue)==true){    
                    // 提供一个函数用来获取自身当前的值,用函数是避免读取开销                            
                    const listenerOpts = {
                        getSelfValue : ()=> getVal(getSnap(this.stateCtx.state),destPath),
                        getCache:()=>this.getListenerCache(destPath),
                        srcPath,
                        selfPath:destPath
                    }
                    // 将监听函数添加到缓存中，以便下次可以直接执行
                    this.addListenerToCache(srcPath,destPath,listener,listenerOpts)                    
                    // 调用监听函数并获取返回值
                    const result = listener(srcValue,listenerOpts)             
                    // 将返回值回写到状态中
                    if(result!==undefined){
                        // @ts-ignore
                        this.stateCtx.setState((draft:any)=>{
                            setVal(draft,destPath,result)
                        })
                    }                    
                }
            }catch(e:any){
                this.storeOptions.log(`Error while run watchLisenter(${srcPath}->${destPath})`+e.stack,'error')
            }
        }        
    }
    /**
     * 临时关闭侦听器
     */
    off(){
        this._off()
    }
    on(){

    }

    add(descriptor:WatchDescriptorParams,params:IOperateParams){
        const {fullKeyPath:valuePath} = params
        this.listeners.set(this.getValueKey(valuePath),{
            fn:descriptor.fn, 
            options:descriptor.options

        })
    }
    remove(keyPath:string | string[]){
        this.listeners.delete(this.getValueKey(keyPath))
    }
}

let storeWatcher:StoreWatcher<StoreSchema<any>> | undefined  

 

 
export function installWatch<Store extends StoreSchema<any>>(options:StoreExtendContext<ISharedCtx<Store["state"]>>) {
    const { stateCtx,params,storeOptions,extendObjects} =options    
    if(!storeWatcher){
        storeWatcher=new StoreWatcher<Store>({
            stateCtx,storeOptions,extendObjects
        })
    }     
    storeOptions.log(`install watch for <${params.fullKeyPath.join(OBJECT_PATH_DELIMITER)}>`)
    const watchDescriptor = params.value() as unknown as WatchDescriptorParams
    storeWatcher.add(watchDescriptor,params)
    // params.replaceValue(watchDescriptor.options.initial)
    // @ts-ignore
    stateCtx.setState((draft)=>{
        setVal(draft,params.fullKeyPath,watchDescriptor.options.initial)
    })
    
    
}

 