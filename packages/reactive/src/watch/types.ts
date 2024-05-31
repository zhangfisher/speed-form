import { ComputedScope, Dict } from "../types"


export type WatchFilter = (path:string[],value:any)=>boolean


/**
 * selfPath=当前watch函数所在的位置
 * fromPath=watch函数侦听的位置，即发生变化的源路径
 */
export type WatchListenerOptions<Result=any> = {getSelfValue:()=>Result ,selfPath:string[] ,fromPath:string[],getCache:()=>Dict,state:any}
export type WatchListener<Value=any, Result= Value> = (value:Value,options:WatchListenerOptions<Result>)=>(Exclude<Result,Promise<any>> | undefined)
export type WatchDepends = (value:any,path:string[])=>boolean

 
export type WatchDescriptor<Value=any, Result=Value> = {
    listener : WatchListener<Value,Result>;
    options  : WatchOptions<Result>;
    context? : any                    // 指               
  }

export interface WatchDescriptorCreator<Value = any,Result=Value> {
  ():WatchDescriptor<Value,Result>;
  __COMPUTED__: 'sync' | 'async' | 'watch' 
} 



export interface WatchOptions<R=any>{ 
    id?:string         
    on         : WatchFilter
    context?  : ComputedScope
    scope?  : ComputedScope               // 计算函数的第一个参数
    initial?:R,                           // 初始值
    /**
     * 用来对表单内的watch进行分组，以便能按组进行enable或disable或其他操作
     */  
    group?:string
    /**
     * 启用或禁用watch，默认为true
     */
    enable?:boolean
}

                   
    // // 指定额外的过滤条件，如果返回true，才会触发listener的执行
    // // 此函数会在表单中的每一个值发生变化时执行，如果返回true，则会触发listener的执行  
    // // 由于此函数会在表单中的每一个值发生变化时均会执行，所以此函数应该尽量简单，不要有复杂的逻辑      
    // // 如果大量的表单字段均需要监听，则可能会有性能问题
    // // 一般在动态依赖时使用
    // on?: WatchFilter,