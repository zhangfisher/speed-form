/**
 * 
 * 对sharex的简单封装
 * 
 * @param options 
 * @returns 
 */

import { sharex } from "helux"
import { useStateWrapper } from "./store/store"
import { Dict, StoreDefine } from "./types"

export function reactive<T extends Dict=Dict>(data:T) {
    const stateCtx = sharex<T>(data)
    return {
        ...stateCtx,
        useState:useStateWrapper<StoreDefine<T>>(stateCtx)
    }
        
}

 

