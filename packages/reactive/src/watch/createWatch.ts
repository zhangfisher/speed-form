/**
    声明一个监听函数 
 * store.watch(()=>{},["Ddd"])

 */

import type {  IStore, StoreDefine } from "../store/types"; 
import { getVal, normalizeDeps } from "../utils";


/**
 * 创建一个侦听器，用来侦听状态变化
 * 
 * store.watch(()=>{},["Ddd"])

    * @param stateCtx 
    * @returns 
    */
export function createWatch<T extends StoreDefine>(store:IStore<T>){
    return (listener:(changedPaths:string[][])=>void,depends?:(string | string[])[],options?:{lazy:boolean})=>{
        const { lazy } = Object.assign({lazy:false},options)
        if(lazy){
            const deps = normalizeDeps(depends)
            // 检查依赖的项是否是计算函数
            const computeds = deps.map(dep=>{
                if(Array.isArray(dep)){
                    if(typeof(getVal(store.state,dep))==='function'){
                        return dep
                    }
                }                
            }).filter(dep=>dep)
        }
        // 如果依赖的项是计算函数，则说明还没有被computed处理成computedObject
        // 需要等待computed:created事件，才可以进行侦听

        return store.reactiveable.createWatch(listener,depends)
    }
}

    