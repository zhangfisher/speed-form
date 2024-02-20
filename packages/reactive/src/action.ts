import { HeluxApi,ISharedCtx } from "helux"
import type { StoreOptions, StoreSchema } from "./store"
import { ComputedState, StateUpdater } from "./types"
import { isAsyncFunction } from "flex-tools/typecheck/isAsyncFunction"


export type Action<State> = (...args:any[])=>StateUpdater<State>
export type AsyncAction<State> = (...args:any[])=>Promise<StateUpdater<State>>
export type Actions<State=any>  = Record<string,Action<State> | AsyncAction<State>>

/**
 * 创建Action
 * @param actions
 * @param state
 * @param api
 * @returns
 */
export function createActions<Store extends StoreSchema<any>>(actions:Store['actions'],ctx:ISharedCtx<ComputedState<Store['State']>>,api:HeluxApi,options?:StoreOptions){
    return Object.entries(actions||{}).reduce((results:any,[key,action])=>{
        if(isAsyncFunction(action)){
            results[key] =createAsyncAction(action as AsyncAction<any>,ctx.state,api)
        }else{
            results[key] =createAction(action as Action<any> ,ctx.state,api)
        }
        return results
    },{}) 
}


export function createAction(action: Action<any>,state:any,api:HeluxApi){
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
