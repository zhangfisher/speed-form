import { useEffect } from "react"
import { ComputedScopeRef, IComputeParams, IStore, StoreDefine } from "../types"
import { sharex } from "helux"
import { installWatch } from "./install"
import { WatchTarget } from "./watchObjects"
import { WatchFilter, WatchListener, WatchOptions } from "./types"
import { createWatchFilter } from "./utils"

/**
 * createWatch的hook版本 
 * 
   let { dd } = store.useWatch(()=>{

   },[])



 * 
 * 
 * @returns 
 */
export function createUseWatch<T extends StoreDefine>(store:IStore<T>){
    return <Value = any,Result=Value>(listener:WatchListener<Value,Result>,on:WatchFilter,options?:WatchOptions<Result>)=>{
        useEffect(() => {
            const watchTo = {
                stateCtx: sharex({
                    value: 0
                })
            } as WatchTarget
            const params = {
                fullKeyPath: [],
                keyPath: [],
                parent: undefined,
                value: () => ({
                    listener,
                    options: Object.assign({
                        on:createWatchFilter(on),
                        initial: 0,
                        enable:true,
                        scope:ComputedScopeRef.Depends         
                    },options) as WatchOptions
                })
            } as unknown as IComputeParams
            // 安装
            const watchObject = installWatch(params,store,watchTo)
            return ()=>{ 
                store.watchObjects.delete(watchObject.id)
            }             
        },typeof(on) =='function' ? [on] : (typeof(on)=='string' ? [on] : on))        
    }
}
