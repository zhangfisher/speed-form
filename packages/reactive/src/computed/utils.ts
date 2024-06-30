import { AsyncComputedObject, ComputedOptions, ComputedScopeRef, Dict, IStore } from "../types";
import { skipComputed } from "../utils";

 

/**
 * 执行Store中声明的钩子
 * @param valuePath 
 * @param getter 
 * @param store 
 * @param computedOptions 
 */
export function executeStoreHooks<T extends Dict>(valuePath:string[],getter:any,store:IStore<T>,computedOptions:ComputedOptions){
    const { onCreateComputed } = store.options;     
    if (typeof onCreateComputed == "function" && typeof getter === "function") {
      const newGetter = onCreateComputed.call(store,valuePath, getter, computedOptions);
      if(!computedOptions.scope) computedOptions.scope = ComputedScopeRef.Current
      if (typeof newGetter == "function") getter = newGetter 
    }
}
 
 
/** 
 * 创建异步计算属性的数据结构
 * 
*/
export function createAsyncComputedObject<T extends Dict=Dict>(store:IStore<T>,computedId:string,valueObj:Partial<AsyncComputedObject>){
  return Object.assign({
    loading : false,
    timeout : 0,
    retry   : 0,          // 重试次数，3表示最多重试3次
    error   : null,
    result  : undefined,
    progress: 0,
    run     : store.reactiveable.markRaw(skipComputed((args:Dict) => {
                return store.reactiveable.runComputed(computedId,Object.assign({},args));
              })),
    cancel  : store.reactiveable.markRaw(skipComputed(() => {
      console.log("cancel")       // 此命令会取消异步计算，仅在执行时有效。     
    }))
  },valueObj)
}
