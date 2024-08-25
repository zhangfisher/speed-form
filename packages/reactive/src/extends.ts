/**
 * 利用helux提供的各种hook接口进行扩展
 * 
 * 
 * 1. 提供computed支持
 * 2. 提供watch支持
 * 
 */

import type {  IStore } from "./store/types";
import { isSkipComputed, joinValuePath } from "./utils";
import {  installComputed } from "./computed"; 
import { installWatch } from "./watch"; 
import { IReactiveReadHookParams } from "./reactives/types";
import { Dict } from "./types";
import { isValidPath } from "./utils/isValidPath";
 

// export function installExtends<T extends Dict>(computedParams:IComputeParams,store:IStore<T>) {    
//     // 拦截读取state的操作，在第一次读取时，
//     // - 为计算函数创建mutate
//     // - 将原始属性替换为计算属性值或异步对象
//       const { fullKeyPath:valuePath, value } = computedParams;
//       const key = valuePath.join(".");
//       if ( typeof value === "function" && !store._replacedKeys[key] && !isSkipComputed(value) ) {
//         store._replacedKeys[key] = true;    
//         if(value.__COMPUTED__=='watch'){
//             installWatch<T>(computedParams,store)
//         }else{  
//             installComputed<T>(computedParams,store)
//         } 
//       }
// }


export function installExtends<State extends Dict>(computedParams:IReactiveReadHookParams,store:IStore<State>) {    
  // 拦截读取state的操作，在第一次读取时， 
    const { path, value } = computedParams;
    if(!isValidPath(path)) return 
    const key = joinValuePath(path);
    if ( typeof value === "function" && !store._replacedKeys[key] && !isSkipComputed(value) ) {
      store._replacedKeys[key] = true;    
      if(value.__COMPUTED__=='watch'){
          installWatch<State>(computedParams,store)
      }else{  
          installComputed<State>(computedParams,store)
      } 
    }
}



