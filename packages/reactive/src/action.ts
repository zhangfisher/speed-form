import { HeluxApi,ISharedCtx } from "helux"
import type { StoreOptions, StoreDefine } from "./store"
import { ComputedState, Dict, StateUpdater } from "./types"
import { isAsyncFunction } from "flex-tools/typecheck/isAsyncFunction"

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
        if(isAsyncFunction(action)){
            results[key] = createAsyncAction(action as AsyncAction<any>,ctx.state,api)
        }else{
            results[key] =  createAction(action as Action<any> ,ctx.state,api)
        }
        return results
    },{}) as Actions<Store['state'],Store['actions']>
}


export function createAction<T>(action: Action<any>,state:any,api:HeluxApi){
    return api.action(state)<any>()(async ({payload,draft})=>{
        const updater = action(...payload)
        if(updater instanceof Function){
            updater(draft)
        }
    })
}

/**
 * 创建异步Action
 * @param action
 * @param state
 * @param api
 * @returns  返回一个
 */
export function createAsyncAction(action:  AsyncAction<any>,state:any,api:HeluxApi){
    return api.action(state)<any>()(async ({setState,payload})=>{
        const updater = await action(...payload)
        if(updater instanceof Function){
            setState(updater)
        }
    })
}
