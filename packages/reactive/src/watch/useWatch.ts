import { useEffect } from "react"
import { ComputedScopeRef, IComputeParams, IStore, StoreDefine } from "../types"
import { sharex } from "helux"
import { installWatch } from "./install"
import { WatchDescriptor,  WatchDependParams, WatchListener, WatchOptions } from "./types" 
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
            const params = {
                fullKeyPath: ['value'],
                keyPath: [],
                parent: undefined,
                value: () => {
                    const descr = {
                        listener,
                        options: Object.assign({
                            depends: normalizedWatchFilter(depends),
                            context : sharex({value: 0 }),
                            selfPath: ['value'],
                            initial : 0,
                            enable  : true,
                            scope   : ComputedScopeRef.Depends         
                        },options)
                    } as WatchDescriptor 
                    return descr
                }
            } as unknown as IComputeParams
            // 安装
            const watchObject = installWatch(params,store)
            return ()=>{ 
                store.watchObjects.delete(watchObject.id)
            }             
        },[depends])        
    }
}
