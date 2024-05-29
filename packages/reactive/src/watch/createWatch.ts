/**
    用来声明一个监听函数，当监听的值发生变化时，会触发监听函数的执行
    并将监听的返回值回写入所声明的位置状态中
* 
 * 
 */

import { watch as heluxWatch } from 'helux';
import type {  IStore, StoreDefine } from "../store/types";
import { getValueByPath } from "../utils";  




/**
 * 创建一个侦听器，用来侦听状态变化
 * 
 * store.watch(()=>{},["Ddd"])

    * @param stateCtx 
    * @returns 
    */
export function createWatch<T extends StoreDefine>(store:IStore<T>){
    return (listener:(changedPaths:string[][])=>void,deps?:(string | string[])[])=>{
        // @ts-ignore
        const { unwatch } = heluxWatch(({triggerReasons})=>{
            const valuePaths:string[][] = triggerReasons.map((reason:any)=>reason.keyPath) 
            listener(valuePaths)            
        },()=>{
            return deps?.map(dep=>getValueByPath(store.stateCtx.state,dep))
        })
        return unwatch
    }
}

    