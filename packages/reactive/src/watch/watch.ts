import { ComputedScope, ComputedScopeRef, StateValueDescriptor, StateValueDescriptorParams } from "../store/types"
import { Dict } from "../types"

/**
 * selfPath=当前watch函数所在的位置
 * triggerPath=watch函数侦听的位置，即发生变化的源路径
 */
export type WatchListenerOptions<Result=any> = {getSelfValue:()=>Result ,selfPath:string[] ,triggerPath:string[],getCache:()=>Dict,state:any}
export type WatchListener<Value=any, Result= Value> = (value:Value,options:WatchListenerOptions<Result>)=>(Exclude<Result,Promise<any>> | undefined)
export type WatchDepends = (value:any,path:string[])=>boolean


 
export type WatchDescriptorParams<Value = any,Result=Value>  = StateValueDescriptorParams<WatchListener<Value,Result>,WatchOptions>


// export type WatchDescriptor<Value = any,Result=Value> = StateValueDescriptor<WatchListener<Value,Result>,WatchOptions<Result>> 

export interface WatchDescriptor<Value = any,Result=Value> {
  ():{
    fn: WatchListener<Value,Result>;
    options: WatchOptions<Result>;
  }
  __COMPUTED__: 'sync' | 'async' | 'watch' 
} 



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
