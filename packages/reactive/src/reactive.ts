/**
 * 
 * 对sharex的简单封装
 * 
 * @param options 
 * @returns 
 */

import { sharex } from "helux"
import { createUseState } from "./store/useState"
import { ComputedState, Dict, RuntimeComputedOptions } from "./types"

// export function reactive<T extends Dict=Dict>(data:T) {
//     const stateCtx = sharex<ComputedState<T>>(data) 
//     return {
//         ...stateCtx,
//         useState:createUseState<T>(stateCtx)
//     }
        
// }

 



export interface IReactive<T extends Dict = Dict>{
    useState(fn:(draft:T)=>void):void        
    setState(fn:(draft:T)=>void):void        
    createMutate(fn:(draft:T)=>void):string
    runMutate(id:string,params?:RuntimeComputedOptions):void
}