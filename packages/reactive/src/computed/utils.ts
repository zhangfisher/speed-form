import { OBJECT_PATH_DELIMITER } from "../consts";
import { ComputedOptions, ComputedScopeRef, Dict, IStore } from "../types";
import { getComputedId } from "../utils";

 

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
      if(!computedOptions.context) computedOptions.context = ComputedScopeRef.Root
      if (typeof newGetter == "function") getter = newGetter 
    }
}


export function getMutateId(valuePath:string[],computedOptions:ComputedOptions){
      const mutateId = computedOptions.id || getComputedId(valuePath,computedOptions.id)
      const mutateName =computedOptions.selfState ? mutateId : valuePath.join(OBJECT_PATH_DELIMITER)
    return [ mutateId, mutateName ]
}