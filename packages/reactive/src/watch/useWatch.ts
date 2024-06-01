import { useEffect } from "react"
import { ComputedScopeRef, IComputeParams, IStore, StoreDefine } from "../types"
import { sharex } from "helux"
import { installWatch } from "./install"
import { WatchTarget } from "./watchObjects"
import { WatchDescriptor, WatchDepends, WatchDependParams, WatchListener, WatchOptions } from "./types" 
import { normalizedWatchFilter } from "./utils"
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
    return <Value = any,Result=Value>(listener:WatchListener<Value,Result>,depends:WatchDependParams<Value>,options?:WatchOptions<Result>)=>{
        useEffect(() => {
            const watchTo = {
                stateCtx: sharex({
                    value: 0                        // 值
                })
            } as WatchTarget
            
            const params = {
                fullKeyPath: ['value'],
                keyPath: [],
                parent: undefined,
                value: () => {
                    const descr = {
                        listener,
                        options: Object.assign({
                            depends,
                            initial: 0,
                            enable:true,
                            scope:ComputedScopeRef.Depends         
                        },options)
                    } as WatchDescriptor
                    // 规范depends参数形式
                    descr.options.depends = normalizedWatchFilter(descr.options.depends)
                    return descr
                }
            } as unknown as IComputeParams
            // 安装
            const watchObject = installWatch(params,store,watchTo)
            return ()=>{ 
                store.watchObjects.delete(watchObject.id)
            }             
        },[depends])        
    }
}
