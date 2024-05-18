import { isAsyncFunction } from "flex-tools/typecheck/isAsyncFunction";
import { IStore, StoreDefine, StoreOptions } from "../types/store";
import { ComputedObject, ComputedTarget } from "./types";
import { createAsyncComputedMutate } from "./async";
import { createComputedMutate } from "./sync";
import { IComputeParams } from "./types";

/**
 * 安装计算函数
 * @param options 
 */
 

export function installComputed<T extends StoreDefine>(params:IComputeParams,store:IStore<T>,storeOptions: Required<StoreOptions<T>>,computedTo?:ComputedTarget) {

    const descriptor = params.value
    let computedObject:ComputedObject | undefined
    //@ts-ignore
    if (descriptor.__COMPUTED__=='async') {
      computedObject = createAsyncComputedMutate<T>(params,store,computedTo,storeOptions);
    //@ts-ignore
    }else if (descriptor.__COMPUTED__=='sync') {
      computedObject = createComputedMutate<T>(params,store,computedTo,storeOptions);
    }else if (isAsyncFunction(descriptor)) { // 简单的异步计算函数，没有通过computed函数创建，此时由于没有指定依赖，所以只会执行一次   
        params.value = () => ({
          fn: descriptor,
          options: {
            depends  : [],                    // 未指定依赖
            initial  : undefined,             // 也没有初始化值
            immediate: true,                  // 立即执行
            enable   : true,
            context  :storeOptions.computedThis && storeOptions.computedThis('Computed'),  
        },
        });
        computedObject = createAsyncComputedMutate<T>(params,store,computedTo,storeOptions);
    }else { // 简单的同步计算函数，没有通过computed函数创建
      params.value = () => ({
        fn: descriptor,
        options: {
          initial  : undefined, 
          enable   : true,
          context  : storeOptions.computedThis && storeOptions.computedThis('Computed'), 
        }
      })
      // 直接声明同步计算函数,使用全局配置的计算上下文
      computedObject = createComputedMutate<T>(params,store,computedTo,storeOptions);
    }
    // 当创建计算完毕后的回调
    if(computedObject && typeof(storeOptions.onCreateComputedObject)=='function'){
      try{
        storeOptions.onCreateComputedObject(params.fullKeyPath,computedObject)
      }catch(e:any){
        storeOptions.log(e.stack,'error')
      }     
    }  
  }