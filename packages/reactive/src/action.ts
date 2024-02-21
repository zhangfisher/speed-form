import { HeluxApi,ISharedCtx } from "helux"
import type { StoreOptions, StoreDefine } from "./store"
import { ComputedState, Dict, StateUpdater } from "./types"
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
export function createActions<Store extends StoreDefine<any>>(actions:Store['actions'],ctx:ISharedCtx<ComputedState<Store['state']>>,api:HeluxApi,options?:StoreOptions){
    return Object.entries(actions||{}).reduce((results:any,[key,action])=>{
        results[key] =  createAction(action as Action<any> ,ctx.setState,api)
        return results
    },{}) as Actions<Store['state'],Store['actions']>
}


export function createAction(action: Action<any>,setState:any,api:HeluxApi){
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