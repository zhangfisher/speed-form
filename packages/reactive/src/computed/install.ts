import { isAsyncFunction } from "flex-tools/typecheck/isAsyncFunction";
import { StoreExtendContext } from "../extends";
import { StoreDefine } from "../store";
import { ComputedObject } from "./types";
import { createAsyncComputedMutate } from "./async";
import { createComputedMutate } from "./sync";


export function installComputed<Store extends StoreDefine<any>>(options:StoreExtendContext<Store["state"]>) {
    const { stateCtx,params,storeOptions,extendObjects} = options
    const descriptor = params.value
    let computedObject:ComputedObject | undefined
    //@ts-ignore
    if (descriptor.__COMPUTED__=='async') {
      computedObject = createAsyncComputedMutate<Store>(stateCtx,params,extendObjects.computedObjects, storeOptions);
    //@ts-ignore
    }else if (descriptor.__COMPUTED__=='sync') {
      computedObject = createComputedMutate<Store>(stateCtx, params,extendObjects.computedObjects!, storeOptions);
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
        computedObject = createAsyncComputedMutate<Store>(stateCtx,params,extendObjects.computedObjects, storeOptions);
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
      computedObject = createComputedMutate<Store>(stateCtx, params, extendObjects.computedObjects!, storeOptions);
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