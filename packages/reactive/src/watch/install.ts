import { flush } from "helux"
import { OBJECT_PATH_DELIMITER } from "../consts"
import { IStore, StoreDefine } from "../store/types"
import { IComputeParams } from "../types"
import { setVal } from "../utils"
import { WatchDescriptorParams } from "./watch"
import { WatchTarget } from "./watchObjects"

/**
 * 安装一个watch函数
 * @param params 
 * @param store 
 * @param watchTo 
 */ 
export function installWatch<T extends StoreDefine>(params:IComputeParams,store:IStore<T>,watchTo?:WatchTarget) {
    
    store.options.log(`install watch for <${params.fullKeyPath.join(OBJECT_PATH_DELIMITER)}>`)

    const watchDescriptor = params.value() as unknown as WatchDescriptorParams
    
    // 创建一个侦听对象
    const watchObject = store.watchObjects.add(params.fullKeyPath,watchDescriptor.fn,watchDescriptor.options,watchTo)
    const watchObject = store.watchObjects.add(watchDescriptor)

    // 如果有初始值，那么需要设置初始值回写到原始位置，也就是使用watch声明的位置
    if(watchTo){
        watchTo.stateCtx.setState((draft)=>{
            draft.value=watchDescriptor.options.initial
        })
    }else{
        params.replaceValue(watchDescriptor.options.initial)    
        // @ts-ignore
        store.stateCtx.setState((draft)=>{
            setVal(draft,params.fullKeyPath,watchDescriptor.options.initial)
        })        
        flush(store.stateCtx.state as any)        
    }
    return watchObject
}

 
