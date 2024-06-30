/**
    声明一个监听函数 
 * store.watch(()=>{},["Ddd"])

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
    return (listener:(changedPaths:string[][])=>void,depends?:(string | string[])[])=>{
        // @ts-ignore
        const { unwatch } = heluxWatch(({triggerReasons})=>{
            const valuePaths:string[][] = triggerReasons.map((reason:any)=>reason.keyPath) 
            listener(valuePaths)            
        },()=>{
            return depends?.map(dep=>getValueByPath(store.state,dep))
        })
        return unwatch
    }
}

    