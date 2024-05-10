/**
 * 同步计算
 */
import { IOperateParams, ISharedCtx } from 'helux';
import type { StoreDefine, StoreOptions } from "../store";
import { ComputedScopeRef } from "../store"; 
import { getComputedId, getVal, setVal  } from "../utils";
import { OBJECT_PATH_DELIMITER } from '../consts';
import { ComputedDescriptorParams, ComputedObject, RuntimeComputedOptions } from './types';
import { getComputedRefDraft } from "../context"
import { ComputedObjects } from './computedObject';

/**
 * 为同步计算属性生成mutate
 * @param stateCtx
 * @param computedParams
 */

export function createComputedMutate<Store extends StoreDefine<any>>(stateCtx: ISharedCtx<Store["state"]>, computedParams: IOperateParams,computeObjects:ComputedObjects<Store["state"]>, storeOptions: Required<StoreOptions>):ComputedObject | undefined{

    const { fullKeyPath:valuePath, parent,value } = computedParams;
    const { onCreateComputed } = storeOptions;
    let { fn: getter, options: computedOptions }  = value() as ComputedDescriptorParams<any>
    
    // 排除掉所有非own属性,例如valueOf等
    if (parent && !Object.hasOwn(parent, valuePath[valuePath.length - 1])) {
      return;
    }
  
    // 当创建计算属性前时运行hook，本Hook的目的是允许重新指定computedThis或者重新包装原始计算函数
    if (typeof onCreateComputed == "function" && typeof getter === "function") {
      const newGetter = onCreateComputed.call( stateCtx,valuePath, getter,computedOptions);    
      if(!computedOptions.scope) computedOptions.scope = ComputedScopeRef.Current
      if(!computedOptions.context) computedOptions.context = ComputedScopeRef.Root
      if (typeof newGetter == "function") getter = newGetter;
    }
    const strValuePath = valuePath.join(OBJECT_PATH_DELIMITER)
    storeOptions.log(`Create sync computed: ${strValuePath}`);
    
    const mutateId = getComputedId(valuePath,computedOptions.id)
    
    const mutate = stateCtx.mutate({
      fn: (draft, params) => {
        if(!computedOptions.enable){
          storeOptions.log(`Async computed <${strValuePath}> is disabled`,'warn')
          return 
        }
        storeOptions.log(`Run sync computed for : ${strValuePath}`);
        const { input } = params;
        // 1. 根据配置参数获取计算函数的上下文对象      
        const thisDraft = getComputedRefDraft(draft,{input,computedOptions,computedContext: computedParams,storeOptions,type:"context"})
        const scopeDraft= getComputedRefDraft(draft,{input,computedOptions,computedContext: computedParams,storeOptions,type:"scope"})      
        // 2. 执行getter函数
        let computedResult = computedOptions.initial;
        try {
          computedResult = getter.call(thisDraft,scopeDraft);
        } catch (e: any) {// 如果执行计算函数出错,则调用        
          if (typeof computedOptions.onError === "function") {
            try {
              computedOptions.onError?.call(thisDraft, e);
            } catch { }
          }
        }
        // 3. 将getter的返回值替换到状态中的,完成移花接木
        setVal(draft, valuePath, computedResult);
      },
      desc: mutateId,
      // 关闭死循环检测，信任开发者
      checkDeadCycle: false,
    });
    computedParams.replaceValue(getVal(stateCtx.state, valuePath));
    const computeObject = {
      mutate,
      group:computedOptions.group,
      async:false,
      options:computedOptions,
      get enable(){return computedOptions.enable as boolean},
      set enable(val:boolean){computedOptions.enable=val},
      run:(options?:RuntimeComputedOptions)=> stateCtx.runMutateTask({desc:mutateId,extraArgs:options})   
    }
    computeObjects!.set(strValuePath,computeObject)   
    return  computeObject
  }