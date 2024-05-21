import { useEffect } from "react"
import { ComputedDepends, ComputedScopeRef, Dict, IComputeParams, IStore, StoreDefine } from "../types"
import { createWatch } from "./createWatch"
import { sharex } from "helux"
import { installWatch } from "./install"
import { WatchTarget } from "./watchObjects"
import { WatchListener, WatchOptions } from "./watch"

/**
 * createWatch的hook版本 
 * 
   let { dd } = store.useWatch(["a","b"],[
        'aa','bb'
   ])



 * 
 * 
 * @returns 
 */
export function createUseWatch<T extends StoreDefine>(store:IStore<T>){
    return <Value = any,Result=Value>(on:WatchOptions['on'],listener:WatchListener<Value,Result>)=>{
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
                    options: {
                        on,
                        initial: 0,
                        enable:true,
                        scope:ComputedScopeRef.Depends         
                    } as WatchOptions
                })
            } as unknown as IComputeParams
            // 安装
            const watchObject = installWatch(params,store,watchTo)
            return ()=>{ 
                store.watchObjects.delete(watchObject.id)
            }             
        },[])        
    }
}
