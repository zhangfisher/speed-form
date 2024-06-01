import {  ComputedScopeRef } from "../store/types"
import { WatchDependParams, WatchDescriptorCreator, WatchListener, WatchOptions } from "./types";
import { normalizedWatchFilter } from "./utils";

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
 *     depends:(path:string[],value:any)=>{
 *          return path[path.length-1]=='validate'
 *      }
 *    })
 * 
 * @param listener  监听函数,只能是同步函数
 * @param options 
 * @returns 
 */
 export function watch<Value =any,Result=Value>(listener:WatchListener<Value,Result>,depends:WatchDependParams<Value>,options?:WatchOptions<Result>):WatchDescriptorCreator<Value,Result>{
    const opts : WatchOptions<Result> = Object.assign({
        depends,
        enable:true,
        scope:ComputedScopeRef.Depends          // 默认传入的是所侦听项的值
    },options)
    opts.depends = normalizedWatchFilter(opts.depends)
    const descriptor =(() => {
      return {
        listener,
        options: opts,
      };
    }) as WatchDescriptorCreator<Value,Result>
    descriptor.__COMPUTED__ = 'watch'
    return descriptor        
}
