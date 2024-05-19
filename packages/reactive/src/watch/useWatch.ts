import { useEffect } from "react"
import { Dict } from "../types"
import { createWatch } from "./createWatch"

/**
 * createWatch的hook版本
 * @param stateCtx 
 * @returns 
 */
export function createUseWatch<State extends Dict>(stateCtx:ISharedCtx<State["state"]>,options?:StoreOptions){
    return (listener:(changedPaths:string[][])=>void,deps?:(string | string[])[])=>{
        useEffect(()=>{
            return createWatch(stateCtx,options)(listener,deps)
        },[])        
    }
}
