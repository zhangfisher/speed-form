import { isAsyncFunction } from "flex-tools/typecheck/isAsyncFunction"
import { HeluxApi } from "helux" 
import type { CreateStoreOptions } from "./store"

export type Actions = Record<string,any>

export function createActions(actions:CreateStoreOptions['actions'],state:CreateStoreOptions['state'],api:HeluxApi){
    if(!actions) return
    return Object.entries(actions).reduce((results,[key,action])=>{           
        if(isAsyncFunction(action)){
            results[key] =createAsyncAction(action,state,api)
        }else{
            results[key] =createAction(action,state,api)
        }                
        return results
    },{})

}
export function createAction(action,state,api:HeluxApi){
    return api.action(state)<any>(async ({setState,args,draft})=>{
        const updater = action(...args)
        if(updater instanceof Function){
            updater(draft)
        }else{
            console.warn('action must return a function similar to (state)=>state')
        }
    })
}


export function createAsyncAction(action,state,api:HeluxApi){
    return api.actionAsync(state)<any>(async ({setState,args})=>{
        const updater = await action(...args)
        if(updater instanceof Function){
            setState(updater)
        }else{
            console.warn('action must return a function similar to (state)=>state')
        }
    })
}
