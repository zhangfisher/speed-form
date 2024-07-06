/**
    声明一个监听函数 
 * store.watch(()=>{},["Ddd"])

 */

import type {  IStore, StoreDefine } from "../store/types";


/**
 * 创建一个侦听器，用来侦听状态变化
 * 
 * store.watch(()=>{},["Ddd"])

    * @param stateCtx 
    * @returns 
    */
export function createWatch<T extends StoreDefine>(store:IStore<T>){
    return (listener:(changedPaths:string[][])=>void,depends?:(string | string[])[])=>{
        return store.reactiveable.createWatch(listener,depends)
    }
}

    