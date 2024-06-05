import { Dict, ITargetState } from "../types"
import type { WatchObject } from "./watchObject"


export type WatchDepends<T=any> = (path:string[],value:T)=>boolean
export type WatchDependParams<T=any> =string | (string | string[])[] | WatchDepends<T>

/**
 * selfPath=当前watch函数所在的位置
 * fromPath=watch函数侦听的位置，即发生变化的源路径
 */
export type WatchListenerOptions<Result=any> = {getSelfValue:()=>Result ,selfPath:string[] ,fromPath:string[],getCache:()=>Dict,state:any}
export type WatchListener<Value=any, Result= Value> = (value:Value,path:string[],watchObject:WatchObject<any>)=>(Exclude<Result,Promise<any>> | undefined)

 
export type WatchDescriptor<Value=any, Result=Value> = {
    listener : WatchListener<Value,Result>;
    options  : WatchOptions<Result>;              
  }

export interface WatchDescriptorCreator<Value = any,Result=Value> {
  ():WatchDescriptor<Value,Result>;
  __COMPUTED__: 'sync' | 'async' | 'watch' 
} 



export interface WatchOptions<R=any>{ 
    id?      : string                        // watch的id
    selfPath?: string[],                     // 指的是watch()包装的所在的路径，如果使用useWatch则为[]
    depends? : WatchDepends                  // 依赖
    context? : ITargetState,                       // 当执行listener的结果回写到此状态中，即调用state.setState方法来将listener的结果回写到此状态中
    initial? : R,                            // 初始值
    group?   : string                        // 用来对表单内的watch进行分组，以便能按组进行enable或disable或其他操作
    enable?  : boolean                       // 启用或禁用watch，默认为true
}
 