import { ComputedScope, Dict } from "../types"


export type WatchDepends<T=any> = (path:string[],value:T)=>boolean
export type WatchDependParams<T=any> =string | (string | string[])[] | WatchDepends<T>

/**
 * selfPath=当前watch函数所在的位置
 * fromPath=watch函数侦听的位置，即发生变化的源路径
 */
export type WatchListenerOptions<Result=any> = {getSelfValue:()=>Result ,selfPath:string[] ,fromPath:string[],getCache:()=>Dict,state:any}
export type WatchListener<Value=any, Result= Value> = (value:Value,options:WatchListenerOptions<Result>)=>(Exclude<Result,Promise<any>> | undefined)

 
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
    id?     : string         
    depends : WatchDepends                  // 依赖
    context?: ComputedScope
    scope?  : ComputedScope                 // 计算函数的第一个参数
    initial?: R,                            // 初始值
    /**
     * 用来对表单内的watch进行分组，以便能按组进行enable或disable或其他操作
     */  
    group?  : string
    /**
     * 启用或禁用watch，默认为true
     */
    enable? : boolean
}
 