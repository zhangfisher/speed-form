/**
 * 
 * 创建独立的计算对象
 * 
 * 
 */

import { IOperateParams, ISharedCtx, sharex } from "helux"
import { StoreDefine, StoreExtendObjects, StoreOptions } from "../store"
import { Dict } from "../types"
import { AsyncComputedGetter, ComputedDepends, ComputedOptions } from "./types"
import { computed } from "./computed"
import { StoreExtendContext } from "../extends"
import { installComputed } from "./install"



export type ComputedObjectCreateOpiotns<R = any,ExtraAttrs extends Dict = {}> = ComputedOptions<R,ExtraAttrs> & {
    currentPath?:string[]
    parentPath?:string[]
  }
  
  /**
   * 
   * 创建计算对象
   * 
   * 默认情况下是根据state中的计算函数创建计算对象的，这导致所有计算对象均需要先在state中声明才可以创建。
   * 这样在组件中使用是有时会比较不方便
   * 
   * 本函数就是可以动态创建一个计算函数，而不需要在state中声明
   * 
   * 
   * 
   * 
   * 实现不需要在状态上声明就可以创建计算属性
   * 
   * const computedObject = store.createComputed(async (scope:any,options)=>{},,computedOptions)
   * 
   * computedObject.run()  // 运行计算函数
   * 
   * 
   * 
   */
  export function computedObjectCreator<Store extends StoreDefine<any>>(stateCtx: ISharedCtx<Store["state"]>,extendObjects:StoreExtendObjects<Store["state"]>,storeOptions:Required<StoreOptions>){
    
    return <R = any,ExtraAttrs extends Dict = {}>(getter:AsyncComputedGetter<R>,depends?:ComputedDepends,options?:ComputedOptions<R,ExtraAttrs>)=>{
      
      
      // 异步对象信息回写到此
      const targetCtx = sharex({}) as ISharedCtx 
      
      // 模拟helux的IOperateParams，因为只用到了fullKeyPath,parent,value
      // 当computed在state中声明时可以获取所在位置的fullKeyPath,parent,而使用createComputed时就没有这些信息
      // 需要自行构建，并传递一个targetCtx,
      const computedParams = { 
        fullKeyPath:[],
        parent:null,
        value:computed(getter,depends,options) 
      }

      const ctx:StoreExtendContext<ISharedCtx<Store["state"]>>= {
        stateCtx,
        extendObjects,
        storeOptions,
        params:computedParams as unknown as IOperateParams,
        target:{
            stateCtx:targetCtx
        }
      }
      installComputed(ctx)
      return targetCtx
    }
  
  }