/**
 * 
 * 对sharex的简单封装
 * 
 * @param options 
 * @returns 
 */

import { sharex } from "helux"
import { createUseState } from "./store/useState"
import { ComputedState, Dict } from "./types"

export function reactive<T extends Dict=Dict>(data:T) {
    const stateCtx = sharex<ComputedState<T>>(data) 
    return {
        ...stateCtx,
        useState:createUseState<T>(stateCtx)
    }
        
}

 

