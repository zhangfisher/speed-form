/**
 * 
 * 对sharex的简单封装
 * 
 * @param options 
 * @returns 
 */

import { sharex } from "helux"
import { useStateWrapper } from "./utils"
import { Dict } from "./types"

export function reactive<State extends Dict=Dict>(data:State) {
    const stateCx = sharex<State>(data)
    return {
        ...stateCx,
        useState:useStateWrapper<{state:State}>(stateCx)
    }
        
}

 

