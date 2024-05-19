/**
    用来声明一个监听函数，当监听的值发生变化时，会触发监听函数的执行
    并将监听的返回值回写入所声明的位置状态中
* 
 * 
 */

import { ISharedCtx, watch as heluxWatch, getSnap, flush } from 'helux';
import type { ComputedScopeRef, IStore, ComputedScope, StateValueDescriptor, StateValueDescriptorParams,  StoreDefine, StoreOptions } from "../store/types";
import { getVal, getValueByPath, setVal } from "../utils"; 
import { OBJECT_PATH_DELIMITER } from '../consts';
import { getComputedContext } from '../context';
import { ComputedTarget, IComputeParams } from '../computed/types';





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
        const {unwatch} = heluxWatch(({triggerReasons})=>{
            const valuePaths:string[][] = triggerReasons.map((reason:any)=>reason.keyPath) 
            listener(valuePaths)            
        },()=>{
            return deps?.map(dep=>getValueByPath(store.stateCtx.state,dep))
        })
        return unwatch
    }
}

    