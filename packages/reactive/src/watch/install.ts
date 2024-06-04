import { flush } from "helux"
import { OBJECT_PATH_DELIMITER } from "../consts"
import { IStore, StoreDefine } from "../store/types"
import { IComputeParams } from "../types"
import { setVal } from "../utils"
import { WatchDescriptor } from "./types" 
import { IReactiveReadHookParams } from "../reactives/types"

/**
 * 安装一个watch函数
 * @param params 
 * @param store 
 * @param watchTo 
 */ 
export function installWatch<T extends StoreDefine>(params:IReactiveReadHookParams,store:IStore<T>) {
    
    store.options.log(`install watch for <${params.path.length==0 ? "Dynamic" : params.path.join(OBJECT_PATH_DELIMITER)}>`)

    const watchDescriptor = params.value() as WatchDescriptor
    
    watchDescriptor.options.selfPath = params.path

    // 创建一个侦听对象
    const watchObject = store.watchObjects.add(watchDescriptor)    
    const watchCtx = watchDescriptor.options.context  
    // 如果有初始值，那么需要设置初始值回写到原始位置，也就是使用watch声明的位置
    if(watchCtx){
        watchCtx.setState((draft:any)=>{
            draft.value= watchDescriptor.options.initial
        })
    }else{                
        params.replaceValue(watchDescriptor.options.initial)    
        // @ts-ignore
        store.stateCtx.setState((draft)=>{
            setVal(draft,params.path,watchDescriptor.options.initial)
        })        
        flush(store.stateCtx.state as any)        
    }
    return watchObject
}

 
