/**
 * 
 * 计算属性
 * 
 * 即派生属性
  
 
更新到 3.4.12，示例代码如下

const [shared, setShared, ctx] = share({
  a: {
    b: { c: 1 },
    b1: { c1: 1 },
  },
  info: { name: 'helux', age: 1 },
  desc: 'awesome lib',
  extra: {
    mark: 'extra',
    c: (draft: any, state: any) => draft.extra.c = state.a.b.c + 103,
  }
}, {
  stopArrDep: true,
  enableDraftDep:true
});

// 记录是否已替换
const replacedMap: any = {};
ctx.setOnReadHook((params) => {
  const key = params.fullKeyPath.join('.');
  if (typeof params.value === 'function' && !replacedMap[key]) {
    replacedMap[key] = true;
    // 注册 mutate
    const witness = ctx.mutate((draft) => {
      params.value(draft, shared);
    });
    return getVal(witness.snap, params.fullKeyPath);
  }
})

钟正楷:
你可以基于此封装试试

钟正楷:
用到这些导入
import { share } from 'helux';
import { getVal } from '@helux/utils';

 * 
 */

import { HeluxApi, ISharedCtx } from "helux" 
import type { StoreOptions } from "./store";
import { getVal } from '@helux/utils';
import {set as setByPath} from "flex-tools/object/set"

/**
 * 创建计算属性
 * @param options 
 * @returns 
 */
export function createComputed<Store extends StoreOptions<any>>(computed:Store['computed'],stateCtx:ISharedCtx<Store['state']>,api:HeluxApi){
  
  // 1. 为state中的计算属性自动创建mutate
  const replacedMap: any = {};
  stateCtx.setOnReadHook((params) => {
    const key = params.fullKeyPath.join('.');
    if (typeof params.value === 'function' && !replacedMap[key]) {
      replacedMap[key] = true;
      const witness = stateCtx.mutate((draft) => {
        setByPath(draft,key,params.value(draft))
      });
      return getVal(witness.snap, params.fullKeyPath);
    }
  })

  if(!computed) return  

  // 2. 创建计算属性
  return Object.entries(computed).reduce((results:any ,[key,getter])=>{
      results[key] = api.mutate(stateCtx.state)(getter)
      return results
  },{})

}