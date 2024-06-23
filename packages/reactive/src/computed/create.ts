/**
 * 
 * 创建独立的计算对象
 * 
 * 
 */

import { StoreDefine } from "../store/types"
import { ComputedDepends, ComputedGetter, Dict, IStore } from "../types"
import { AsyncComputedGetter,  ComputedOptions, ComputedParams, IComputeParams } from "../computed/types"
import { computed } from "./computed"
import { installComputed } from "./install" 
import { getRndId } from "../utils/getRndId"
import { IReactiveReadHookParams } from "../reactives/types"
import { HeluxReactiveable } from "../reactives/helux"
import { isAsyncFunction } from 'flex-tools/typecheck/isAsyncFunction'; 
import { createAsyncComputedObject } from "./utils"
import { ComputedObject } from "./computedObject"
import { isPlainObject } from 'flex-tools/typecheck/isPlainObject';



export type ComputedObjectCreateOptions<R = any,ExtraAttrs extends Dict = {}> = ComputedOptions<R,ExtraAttrs> & {
     id:string              // 必须指定一个id
     depends: string[]      // 依赖的字段 

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
   * const computedObject = store.computedObject.create(async (scope:any,options)=>{
   * 
   * },{
   *    id:"指定一个有意义的名称"   
   *    depends:["依赖的字段"]   必须指定依赖字段，当所依赖的字段变化时执行计算函数
   *    ...其他参数
   * })
   * 
   * computedObject.run()  // 运行计算函数
   * 
   * 
   * 特殊注意： 采用此方法创建的计算对象的scope，
   * 
   * 由于不是根据其的state中创建，而无法自动计算scope和this,但是可以通过options传递手动指定
   * 
   * 如果没有指定scope和context，那么默认是当前对象
   * 
   * 
   */
export function computedObjectCreator<T extends StoreDefine>(store:IStore<T>){    
    function creatorComputedObject<R = any>(getter:ComputedGetter<R>,options?:ComputedObjectCreateOptions<R>):ComputedObject<T,R>
    function creatorComputedObject<R = any>(getter:AsyncComputedGetter<R>,depends:ComputedDepends,options?:ComputedObjectCreateOptions<R>):ComputedObject<T,R>
    function creatorComputedObject<R = any>(getter:any,depends:any,options?:any){ 

      let opts =Object.assign({
          id:getRndId(), 
      },isPlainObject(arguments[1]) ? arguments[1] : arguments[2]) as Required<ComputedOptions<R>>
      opts.depends = Array.isArray(arguments[1]) ? arguments[1] : []
      const isAsync = opts.async===true ||  isAsyncFunction(getter) 

        // 创建Reactiveable实例
      opts.selfReactiveable = new HeluxReactiveable<Dict>({
         value: isAsync ? createAsyncComputedObject(store,opts.id,{}) : opts.initial
      }) 
      
      let computedParams:IReactiveReadHookParams
      if(opts.async){
        computedParams = {
          path: ['value'],
          parent: null,
          value: computed(getter as AsyncComputedGetter<R>, opts.depends, opts)
        } as unknown  as IReactiveReadHookParams
      }else{
        computedParams = {
          path: ['value'],
          parent: null,
          value: computed(getter as ComputedGetter<R>,opts)
        } as unknown  as IReactiveReadHookParams
      } 
      const computedObject = installComputed<T,R>(computedParams,store)      
      return  computedObject
    }

    return creatorComputedObject
  
}