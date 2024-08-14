import mitt, { Emitter } from "mitt"
import type { IStore } from "../store/types"
import { StoreEvents } from "./types"
import { Dict } from "../types"

 
export * from "./types"

    
export function setEventEmitter<T extends Dict>(store:IStore<T>){
    const emitter:Emitter<StoreEvents> = mitt()
    store._emitter = emitter as any
    store.on = emitter.on
    store.off = emitter.off    
    store.emit = emitter.emit
    store.once = <T extends keyof StoreEvents>(event: T, handler: (payload:StoreEvents[T]) => void) => {
        const phandler =(payload:StoreEvents[T]) => {
            try{
                handler(payload)
            }finally{            
                emitter.off(event,phandler)
            }
        }
        emitter.on(event,phandler)
    }

}