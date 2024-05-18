import type { StoreOptions, StoreDefine, IStore } from "./types/store"
import { Dict, StateUpdater  } from "./types"
import { isPromise } from "./utils" 



export type ActionDefines<State extends Dict=Dict>  = Record<string,Action<State> | AsyncAction<State>>
export type Action<State,Args extends any[]= any[]> = (...args:Args)=>StateUpdater<State>
export type AsyncAction<State,Args extends any[]= any[]> = (...args:Args)=>Promise<StateUpdater<State>>
export type Actions<State extends Dict,Fields>  = {
    [key in keyof Fields]: Fields[key] extends (...args:any[])=>Promise<any> ? 
        AsyncAction<State,Parameters<Fields[key]>> : (
            Fields[key] extends (...args:any)=>any ? Action<State,Parameters<Fields[key]>> : never
        )
}


/**
 * 创建Action
 * @param actions
 * @param state
 * @param api
 * @returns
 */
export function createActions<T extends StoreDefine>(actions:T['actions'],store:IStore<T>,options?:StoreOptions<T>){
    return Object.entries(actions||{}).reduce((results:any,[key,action])=>{
        results[key] =  createAction(action as Action<any> ,store.stateCtx.setState)
        return results
    },{}) as Actions<T['state'],T['actions']>
}


export function createAction(action: Action<any>,setState:any){
    const updateState = (updater:any)=>{
        if(typeof(updater)=='function'){               
            setState((draft:any)=>{
                updater(draft)            
            })
        }
    }
    return (...args:any)=>{
        const result = action(...args)    
        if(isPromise(result)){
            // @ts-ignore
            return result.then((updater:any)=>{
                updateState(updater)
            })
        }else{
            updateState(result)
        }        
    }    
} 