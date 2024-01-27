/**
 
 * 
 * 
 */
import { ISharedCtx, watch as heluxWatch,addMiddleware, IOperateParams } from "helux";
import type { StateValueDescriptor, StateValueDescriptorParams, StoreSchema } from "./store";
import { StoreExtendContext } from "./extends";
import { Dict } from "./types";
import { getVal, setVal } from "@helux/utils";
import { ComputedDepends } from "./computed";
import { getDeps } from "./utils";





export interface WatchOptions<R=any>{ 
    // 指定额外的过滤条件，如果返回true，才会触发listener的执行
    // 此函数会在表单中的每一个值发生变化时执行，如果返回true，则会触发listener的执行  
    // 由于此函数会在表单中的每一个值发生变化时均会执行，所以此函数应该尽量简单，不要有复杂的逻辑      
    // 如果大量的表单字段均需要监听，则可能会有性能问题
    // 一般在动态依赖时使用
    on?:(path:string[],value:any)=>boolean
    // on函数是一个全局过滤器，而也可以指定依赖的值发生变化时，才会触发listener的执行
    // 此函数只会在依赖的值发生变化时执行，如果返回true，则会触发listener的执行
    // 相对于on参数，此参数可以精准执行，会有更佳的性能,在具备明确的依赖关系时，应该使用此参数
    depends?:ComputedDepends
}
 
export type WatchListener<Result=any,Value = Result> = (value:Value,options:{getSelfValue:()=>Result,srcPath:string[]})=>(Exclude<Result,Promise<any>>)
export type WatchDepends = (value:any,path:string[])=>boolean


export type WatchDescriptorParams<Value = any,Result=Value>  = StateValueDescriptorParams<WatchListener<Value,Result>,WatchOptions>

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
export function watch<Value = any,Result=Value>(listener:WatchListener<Value,Result>,on:WatchOptions['on'],options?:WatchOptions):StateValueDescriptor<WatchListener,WatchOptions>{
    const opts : WatchOptions = Object.assign({
        on
    },options)
    const descriptor:StateValueDescriptor<WatchListener,WatchOptions> = () => {
        return {
          fn: listener,
          options: opts,
        };
      };    
    descriptor.__COMPUTED__ = 'watch'
    return descriptor        
}


export interface RegisteredWatchListener{
    listener:WatchListener        // 侦听函数  
    watcher:{off:()=>void} & Dict   // 
}

class StoreWatcher<Store extends StoreSchema<any>>{
    listeners = new Map<any,RegisteredWatchListener>()
    private _off:()=>void = ()=>{}
    private wachers = new Map<string,{off:()=>void}>()
    private _enable:boolean=true            // 是否启用侦听器
    constructor(private options:Omit<StoreExtendContext<ISharedCtx<Store["state"]>>,'params' | 'descriptor'>){
        this.createRootWacher()
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
    private createRootWacher(){
        // @ts-ignore
        const {unwatch} = heluxWatch(({triggerReasons})=>{
            const valuePaths:string[][] = triggerReasons.map((reason:any)=>reason.keyPath)
            // 遍历所有的监听函数,如果监听函数的过滤条件返回true,则执行监听函数
            // TODO：此处可能会有性能问题？优化
            valuePaths.forEach((path)=>{                
                Object.entries(this.listeners).forEach(([key,listener])=>{
                    try{
                        this.executeListener(key,path,listener)
                    }catch(e){
                    }
                })
            })
        },()=>[this.stateCtx.state])
        this.wachers.set("ROOT",{off:unwatch})
    }
    private createWacher(deps:any[]){
        // @ts-ignore
        const {unwatch} = heluxWatch(({triggerReasons})=>{
            const valuePaths:string[][] = triggerReasons.map((reason:any)=>reason.keyPath)
            const values = valuePaths.map((path)=>getVal(this.stateCtx.state,path))                          
            try{
                this.executeListener(key,path,watchListener)
            }catch(e){

            } 
        },()=>[...deps]) 
        this.wachers.set(deps.join('.'),{off:unwatch})
    }
    /**
     * 当srcPath指向的值变化时,运行watchListener函数,其返回值更新到destPath指向的值中
     * @param destPath 
     * @param srcPath 
     * @param watchListener 
     */
    private executeListener(destPath:string,srcPath:string[],watchListener:WatchDescriptorParams & {valuePath:string[]}){
        const { fn:listener,options,valuePath } = watchListener
        const filter = options.on
        if(typeof(filter)=='function'){
            const srcValue = getVal(this.stateCtx.state,srcPath)
            try{
                if(filter(srcPath,srcValue)==true){            
                    const getSelfValue = ()=> getVal(this.stateCtx.state,valuePath)
                    const result = listener(srcValue,{srcPath,getSelfValue})             
                    // 回写到状态中
                    if(result!==undefined){
                        // @ts-ignore
                        this.stateCtx.setState((draft:any)=>{
                            setVal(draft,valuePath,result)
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

        const { depends }   =descriptor.options     
        // 指定了依赖时，创建独立的监听器进行精确侦听
        if(depends){
            const deps = getDeps(depends) 
            this.createWacher(deps)
        }

        const key = valuePath.join('.')
        this.listeners[key] = {valuePath,...descriptor} 
    }
    remove(keyPath:string[]){
        delete this.listeners[keyPath.join('.')]
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
    storeWatcher.add(params.value() as unknown as WatchDescriptorParams,params    )
    return  
}

 