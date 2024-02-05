/**
 * 利用helux提供的各种hook接口进行扩展
 * 
 * 
 * 1. 提供computed支持
 * 2. 提供watch支持
 * 
 */

import { IOperateParams, ISharedCtx } from "helux";
import type { StoreExtendObjects, StoreOptions, StoreSchema } from "./store";
import { isSkipComputed } from "./utils";
import {  installComputed } from "./computed"; 
import { installWatch } from "./watch";

export interface StoreExtendContext<Ctx>{
    stateCtx:Ctx
    extendObjects:StoreExtendObjects
    storeOptions: Required<StoreOptions>
    params:IOperateParams
}

const replacedMap: any = {};
export function installExtends<Store extends StoreSchema<any>>(params:IOperateParams,stateCtx: ISharedCtx<Store["state"]>,extendObjects:StoreExtendObjects,storeOptions: Required<StoreOptions>) {    
    // 拦截读取state的操作，在第一次读取时，
    // - 为计算函数创建mutate
    // - 将原始属性替换为计算属性值或异步对象
      const { fullKeyPath:valuePath, value } = params;
      const key = valuePath.join(".");
      if ( typeof value === "function" && !replacedMap[key] && !isSkipComputed(value) ) {
        if(typeof value === "function") replacedMap[key] = true;        
        const ctx:StoreExtendContext<ISharedCtx<Store["state"]>>= {
            stateCtx,
            extendObjects,
            storeOptions,
            params
        }
        if(value.__COMPUTED__=='watch'){
            installWatch<Store>(ctx)
        }else{  
            installComputed<Store>(ctx)
        } 
      }
}




