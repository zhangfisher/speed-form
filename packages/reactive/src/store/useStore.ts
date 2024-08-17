/**
 * 
 * 
 * 
 */

import { useState } from "react"
import { createStore } from "./store"
import { Dict, IStore, StoreOptions } from "../types"


export function useStore<T extends Dict>(schema:T,options?:Partial<StoreOptions<T>>):IStore<T>{    
    const [ store ] = useState(()=>createStore<T>(schema,Object.assign({
        immediate:true
    },options)))
    return  store
}