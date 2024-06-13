import { switchValue } from "flex-tools/misc/switchValue";
import { OBJECT_PATH_DELIMITER } from "../consts";
import { IReactiveReadHookParams } from "../reactives/types";
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
      if (typeof newGetter == "function") getter = newGetter 
    }
}


export function getMutateId(valuePath:string[],computedOptions:ComputedOptions){
      const mutateId = computedOptions.id || getComputedId(valuePath,computedOptions.id)
      const mutateName =computedOptions.selfState ? mutateId : valuePath.join(OBJECT_PATH_DELIMITER)
    return [ mutateId, mutateName ]
}


// /**
//  * 
//  * 返回计算属性的目标路径
//  * 
//  * 即计算结果要写到目标state中的哪一个位置
//  * 
//  * 计算目标
//  * 
//  * @param computedParams 
//  * @param computedOptions 
//  * @returns 
//  */
// export function getComputedTargetPath(computedParams:IReactiveReadHookParams,computedOptions:ComputedOptions){
//   const { path:valuePath } = computedParams;
//   const {selfState,toComputedResult='self' } = computedOptions
  
//   // 如果指定了selfState,即计算结果要写到外部状态中
//   return selfState ? [valuePath ] : switchValue(toComputedResult,{
//     self   : valuePath,
//     root   : [],
//     parent : valuePath.slice(0,valuePath.length-2),
//     current: valuePath.slice(0,valuePath.length-1),
//     Array  : toComputedResult,    // 指定一个数组，表示完整路径
//     String : [...valuePath.slice(0,valuePath.length-1),String(toComputedResult).split(OBJECT_PATH_DELIMITER)],
//   },{defaultValue:valuePath})    

// }


