import { isAsyncFunction } from "flex-tools/typecheck/isAsyncFunction"
import { HeluxApi,ISharedCtx } from "helux" 
import type { StoreDefine } from "./store"
import { Action, AsyncAction } from "."



/**
 * 创建Action
 * @param actions 
 * @param state 
 * @param api 
 * @returns 
 */
export function createActions<Store extends StoreDefine<any>>(actions:Store['actions'],ctx:ISharedCtx<Store['state']>,api:HeluxApi){
    return Object.entries(actions||{}).reduce((results:any,[key,action])=>{           
        if(isAsyncFunction(action)){
            results[key] =createAsyncAction(action as AsyncAction<any>,ctx.state,api)
        }else{
            results[key] =createAction(action as Action<any> ,ctx.state,api)
        }                
        return results
    },{}) as Store['actions']
}


export function createAction(action: Action<any>  ,state:any,api:HeluxApi){
    return api.action(state)<any>(async ({payload,draft})=>{
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
    return api.action(state)<any>(async ({setState,payload})=>{
        const updater = await action(...payload)
        if(updater instanceof Function){
            setState(updater)
        }
    })
}
