import { isAsyncFunction } from "flex-tools/typecheck/isAsyncFunction"
import { HeluxApi } from "helux" 
import type { StoreOptions } from "./store"
import { Action, AsyncAction } from "."



/**
 * 创建Action
 * @param actions 
 * @param state 
 * @param api 
 * @returns 
 */
export function createActions<Store extends StoreOptions<any>>(actions:Store['actions'],state:Store['state'],api:HeluxApi){
    if(!actions) return {} 
    return Object.entries(actions).reduce((results,[key,action])=>{           
        if(isAsyncFunction(action)){
            results[key] =createAsyncAction(action as AsyncAction<any>,state,api)
        }else{
            results[key] =createAction(action as Action<any> ,state,api)
        }                
        return results
    },{}) as Store['actions']
}


export function createAction(action: Action<any>  ,state,api:HeluxApi){
    return api.action(state)<any>(async ({setState,args,draft})=>{
        const updater = action(...args)
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
export function createAsyncAction(action:  AsyncAction<any>,state,api:HeluxApi){
    return api.actionAsync(state)<any>(async ({setState,args})=>{
        const updater = await action(...args)
        if(updater instanceof Function){
            setState(updater)
        }
    })
}
