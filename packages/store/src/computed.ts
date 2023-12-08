/**
 * 
 * 计算属性
 * 
 * 即派生属性
   

 * 
 */

import { HeluxApi, ISharedCtx } from "helux";
import type { StoreOptions } from "./store";
import { getVal, setVal } from "@helux/utils";
import { isAsyncFunction } from "flex-tools";

export type ComputedOptions = {
	context: "state" | "parent";
};

/**
 * 用来封装状态的计算函数，使用计算函数的传入的是当前对象
 *
 * {
 *  books:[
 *     {name,price,count,total:computed(draft=>draft.books[0].price*draft.books[0].count)}
 
 *     第2个参数，可以进行异步计算
 *     {name,price,count,total:computed(draft=>draft.books[0].price*draft.books[0].count),async ()=>{}}
 *  ],
 *  url:"",
 *  data:computed(async (url)=>{ 
 *    当url变化时从网络加载数据，然后放到data
 *    return await load(url)  
 * },
 * ['url'],     // 指定依赖
 * {
 *    initial:<初始值>,
 *    dict:"" 
 * })
 * }
 *
 * @param contextstate
 */
export function computed<R=any>(getter: (context: any) => any,depends?:string[],options?: ComputedOptions) {
	const { context } = Object.assign({ context: "state" }, options);
  let fn
  if(isAsyncFunction(getter)){
    fn=  (parent: any,draft: any) => {
      return {
        getter:(context === "state"  ? draft : parent) as R
      }
    };
    // @ts-ignore
    fn.__ASYNC_COMPUTED__=true    
  }else{
    return (parent: any,draft: any) => {
      return getter(context === "state"  ? draft : parent) as R
    };
  }	
  return fn
}


/**
 * 为同步计算属性生成mutate
 * @param stateCtx 
 * @param params 
 */
function createComputedMutate<Store extends StoreOptions<any>,P>(stateCtx: ISharedCtx<Store["state"]>,params:IOperateParams){
  const { fullKeyPath, value,keyPath } = params;
  const witness = stateCtx.mutate((draft) => {
      setVal(draft,fullKeyPath,value(getVal(draft, keyPath),draft));
  })
  params.replaceValue(getVal(witness.snap, fullKeyPath));        
}

/**
 * 为异步计算属性生成mutate
 * @param stateCtx 
 * @param params 
 */
function createAsyncComputedMutate<Store extends StoreOptions<any>,P>(stateCtx: ISharedCtx<Store["state"]>,params:IOperateParams){
  const { fullKeyPath, value } = params;
  const witness = stateCtx.mutate({
    deps:()=>[""],
    fn:(draft) => {
      const { fullKeyPath, value,keyPath } = params;
      setVal(draft,fullKeyPath,value(getVal(draft, keyPath),draft));
    },
    // 此函数在依赖变化时执行，用来异步计算
    task:async ()=>{
      
    }
  })
}


/**
 * 创建计算属性
 * @param options
 * @returns
 */
export function createComputed<Store extends StoreOptions<any>>(computed: Store["computed"],stateCtx: ISharedCtx<Store["state"]>,api: HeluxApi) {
	// 1. 为state中的计算属性自动创建mutate
	const replacedMap: any = {};
	stateCtx.setOnReadHook((params) => {
		const { fullKeyPath, value } = params;
		const key = fullKeyPath.join(".");
		if (typeof value === "function" && !replacedMap[key]) {
			replacedMap[key] = true;
      // 将声明在state里面的计算函数转换为helux的mutate
      if(value.__ASYNC_COMPUTED__){   // 异步属性
        createAsyncComputedMutate<Store,typeof params>(stateCtx,params)     

      }else{
        createComputedMutate<Store,typeof params>(stateCtx,params)        
      }
		}
	}); 
}
