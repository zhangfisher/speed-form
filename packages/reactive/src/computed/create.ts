/**
 * 
 * 创建独立的计算对象
 * 
 * 
 */

import { IOperateParams, ISharedCtx, sharex } from "helux"
import { StoreDefine, StoreExtendObjects, StoreOptions } from "../types/store"
import { Dict } from "../types"
import { AsyncComputedGetter,  ComputedOptions } from "../computed/types"
import { computed } from "./computed"
import { StoreExtendContext } from "../extends"
import { installComputed } from "./install" 



export type ComputedObjectCreateOptions<R = any,ExtraAttrs extends Dict = {}> = ComputedOptions<R,ExtraAttrs> & {
     id:string              // 必须指定一个id
     depends: string[]      // 依赖的字段
     scope?:string[]
     context?:string[]
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
   * const computedObject = store.computedObject.new(async (scope:any,options)=>{
   * 
   * },{
   *    id:"指定一个有意义的名称"   
   *    depends:["依赖的字段"]   必须指定依赖字段，当所依赖的字段变化时执行计算函数
   *    scope:<>
   *    context:<>
   *  
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
  export function computedObjectCreator<Store extends StoreDefine<any>>(stateCtx: ISharedCtx<Store["state"]>,extendObjects:StoreExtendObjects<Store["state"]>,storeOptions:Required<StoreOptions>){
    
    return <R = any,ExtraAttrs extends Dict = {}>(getter:AsyncComputedGetter<R>,options?:ComputedObjectCreateOptions<R,ExtraAttrs>)=>{
        const opts = Object.assign({
            id:"s"+Math.random().toString(16).substring(2),
            // 由于计算函数不是声明在状态中，没有所谓的valuePath,scope取值Self,Parent,Root等无效，因此需要手动指定
            // 否则默认指向的是stateCtx.state
            scope:stateCtx.state,
            context:stateCtx.state
        },options) as ComputedObjectCreateOptions<R,ExtraAttrs>

        if(!Array.isArray(opts.depends) || opts.depends.length==0){
            throw new Error("options.depends must be an array and not empty")
        }
      
      // 异步对象信息回写到此
      const targetCtx = sharex({}) as ISharedCtx 
      
      // 模拟helux的IOperateParams，因为只用到了fullKeyPath,parent,value
      // 当computed在state中声明时可以获取所在位置的fullKeyPath,parent,而使用createComputed时就没有这些信息
      // 需要自行构建，并传递一个targetCtx,
      const computedParams = { 
        fullKeyPath:[],
        parent:null,                
        value:computed(getter,opts.depends,options) 
      }

      const ctx:StoreExtendContext<ISharedCtx<Store["state"]>>= {
        stateCtx,
        extendObjects,
        storeOptions,
        params:computedParams as unknown as IOperateParams,
        computedTarget:{
            stateCtx:targetCtx
        }
      }
      installComputed(ctx)
      return targetCtx
    }
  
  }