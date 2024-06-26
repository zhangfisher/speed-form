import { isAsyncFunction } from "flex-tools/typecheck/isAsyncFunction";
import { IStore, StoreDefine } from "../store/types";
import { AsyncComputedObject, ComputedTarget } from "./types";
import { createAsyncComputedMutate } from "./async";
import { createComputedMutate } from "./sync"; 
import { IReactiveReadHookParams } from "../reactives/types";
import { ComputedObject } from "./computedObject";

/**
 * 安装计算函数
 * @param options 
 */
 

export function installComputed<T extends StoreDefine,R=any>(params:IReactiveReadHookParams,store:IStore<T>):ComputedObject<T,R> | ComputedObject<T,AsyncComputedObject<R>> {
    const descriptor = params.value
    let computedObject:ComputedObject<T,R >  | ComputedObject<T,AsyncComputedObject<R>>  
    //@ts-ignore
    if (descriptor.__COMPUTED__=='async') {
      computedObject = createAsyncComputedMutate<T,R>(params,store);
    //@ts-ignore
    }else if (descriptor.__COMPUTED__=='sync') {
      computedObject = createComputedMutate<T>(params,store);
    }else if (isAsyncFunction(descriptor)) { // 简单的异步计算函数，没有通过computed函数创建，此时由于没有指定依赖，所以只会执行一次   
        params.value = () => ({
          getter: descriptor,
          options: {
            depends  : [],                    // 未指定依赖
            initial  : undefined,             // 也没有初始化值
            immediate: true,                  // 立即执行
            enable   : true,
        },
        });
        computedObject = createAsyncComputedMutate<T,R>(params,store);
    }else {       // 简单的同步计算函数，没有通过computed函数创建
      params.value = () => ({
        getter: descriptor,
        options: {
          initial  : undefined, 
          enable   : true,
        }
      })
      // 直接声明同步计算函数,使用全局配置的计算上下文
      computedObject = createComputedMutate<T,R>(params,store);
    }
    // 当创建计算完毕后的回调
    if(computedObject){
      setTimeout(()=>{
        store.emit("computed:created",computedObject as any)
      })
    }
    return computedObject
  }