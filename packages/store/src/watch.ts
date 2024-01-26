/**

 * } 
 * 
 * 
 * 
 */
import { ISharedCtx, watch as heluxWatch,addMiddleware, IOperateParams } from "helux";
import type { StateValueDescriptor, StateValueDescriptorParams, StoreSchema } from "./store";
import { StoreExtendContext } from "./extends";
import { ComputedDescriptor } from "./computed";
import { Dict } from "./types";
import { getVal } from "@helux/utils";





export interface WatchOptions<R=any>{ 
    // 指定额外的过滤条件，如果返回true，才会触发listener的执行
    on?:(path:string[],value:any)=>boolean
}
 
export type WatchListener<Result=any,Value = Result> = (relValue:Value,relPath:string[],curValue:Result)=>Result | void
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




class StoreWatcher<Store extends StoreSchema<any>>{
    watchListeners:Dict<WatchDescriptorParams> = {} 
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
    private createWacher(){
        // @ts-ignore
        storeWatcher = heluxWatch(({triggerReasons})=>{
            const valuePaths:string[][] = triggerReasons.map((reason:any)=>reason.keyPath)
            valuePaths.forEach((path)=>{
                Object.entries(this.watchListeners).forEach(([key,watchListener])=>{
                    try{
                        this.executeListener(key,path,watchListener)
                    }catch(e){
                    }
                })
            })
        },()=>[this.stateCtx.state])
    }
    /**
     * 当srcPath指向的值变化时,运行watchListener函数,其返回值更新到destPath指向的值中
     * @param destPath 
     * @param srcPath 
     * @param watchListener 
     */
    private executeListener(destPath:string,srcPath:string[],watchListener:WatchDescriptorParams){
        const { fn:listener,options } = watchListener
        const filter = options.on
        if(typeof(filter)=='function'){
            const srcValue = getVal(this.stateCtx.state,srcPath)
            try{
                if(filter(srcPath,srcValue)==true){            
                    const destValue = getVal(this.stateCtx.state,destPath)
                    const result = listener(srcValue,srcPath,destPath)
                    
                }
            }catch(e){
            }
        }        
    }
    off(){
    }
    add(descriptor:WatchDescriptorParams,params:IOperateParams){
        const {fullKeyPath:valuePath} = params
        const key = valuePath.join('.')
        this.watchListeners[key] = descriptor 
    }
    remove(keyPath:string[]){
        delete this.watchListeners[keyPath.join('.')]
    }
}

let storeWatcher:StoreWatcher<StoreSchema<any>> | undefined  

 

 
export function installWatch<Store extends StoreSchema<any>>(options:StoreExtendContext<ISharedCtx<Store["state"]>>) {
    const { stateCtx,descriptor,params,storeOptions,extendObjects} =options
    
    if(!storeWatcher){
        storeWatcher=new StoreWatcher<Store>({
            stateCtx,storeOptions,extendObjects
        })
    } 
    storeWatcher.add(descriptor as unknown as WatchDescriptorParams,params    )
    return  
}



// */
// export function watch(listener:(params:any)=>void,options?:WatchOptions):()=>void{
//     const opts=Object.assign({
//         immediate:true,
//         depends:()=>[]
//     },options)

//     // @ts-ignore
//     const {unwatch} = heluxWatch(({triggerReasons})=>{
//         const valuePaths:string[][] = triggerReasons.map((reason:any)=>reason.keyPath)
//         listener(triggerReasons)
//     },opts.depends)
//     return unwatch
// }