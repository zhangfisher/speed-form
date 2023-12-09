/**
 * 
 * 计算属性
 * 
 * 即派生属性
   

 * 
 */

import { HeluxApi, IOperateParams, ISharedCtx,getMutateLoading } from "helux";
import type { StoreOptions } from "./store";
import { getVal, setVal } from "@helux/utils";
import { isAsyncFunction } from "flex-tools/typecheck/isAsyncFunction";

export type ComputedOptions = {
	context?: "state" | "parent";
  initial?:any
};

export type ComputedDepends = string[] | ((draft: any) => any[]);
export type ComputedGetter = ((context: any) => any) | ((depends:any[],context:any) => Promise<any>)

export interface AsyncComputedObject<Value=any>{
  loading:boolean
  progress?:number
  error?:any
  value:Value    
}


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


export function computed<R=any>(getter:(depends:any[],context:any) => Promise<any>,depends:ComputedDepends,options?: ComputedOptions):Function 
export function computed<R=any>(getter:(context: any) => Exclude<R,Promise<any>>,options?: ComputedOptions):Function
export function computed<R=any>(getter:Function,depends:any,options?: ComputedOptions):Function {
	const { context,initial } = Object.assign({ context: "state" }, options);
  if(arguments.length>=2 && isAsyncFunction(getter)){
    let fn =  () => {
      return {
        getter,
        depends,
        initial,
        context
      }
    }  
    // @ts-ignore
    fn.__ASYNC_COMPUTED__=true       
    return fn 
  }else{
    return (parent: any,draft: any):R => {
      return getter(context === "state"  ? draft : parent) 
    };
  }	
} 

 
/**
 * 为同步计算属性生成mutate
 * @param stateCtx 
 * @param params 
 */
function createComputedMutate<Store extends StoreOptions<any>>(stateCtx: ISharedCtx<Store["state"]>,params:IOperateParams){
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
function createAsyncComputedMutate<Store extends StoreOptions<any>>(stateCtx: ISharedCtx<Store["state"]>,params:IOperateParams){
  const { fullKeyPath, value } = params;
  const {getter,depends,context,initial} = value()
  stateCtx.mutate({
    // 声明依赖
    deps:(state)=>depends.map((deps:any)=>getVal(state,deps.split("."))),
    // 此函数在依赖变化时执行，用来异步计算
    task:async ({draft,setState,input})=>{
      try{
        // @ts-ignore
        setState((draft)=>{
          setVal(draft,[...fullKeyPath,'loading'],true)
        })
        const result = await getter(input,draft) 
        // @ts-ignore
        setState((draft)=>{
          setVal(draft,[...fullKeyPath,'value'],result)
        })
      }catch(e){
         // @ts-ignore
        setState((draft)=>{
          setVal(draft,[...fullKeyPath,'error'],e)
        })
      }finally{
        // @ts-ignore
        setState((draft)=>{
          setVal(draft,[...fullKeyPath,'loading'],false)
        })
      }      
    },
    immediate:true

  })
  params.replaceValue({
    value:initial,
    loading:false,
    error:null,
    progress:0
  })
}


/**
 * 创建计算属性
 * @param options
 * @returns
 */
export function createComputed<Store extends StoreOptions<any>>(stateCtx: ISharedCtx<Store["state"]>,api: HeluxApi) {
	// 1. 为state中的计算属性自动创建mutate
	const replacedMap: any = {};
	stateCtx.setOnReadHook((params) => {
		const { fullKeyPath, value } = params;
		const key = fullKeyPath.join(".");
		if (typeof value === "function" && !replacedMap[key]) {
			replacedMap[key] = true;
      // 将声明在state里面的计算函数转换为helux的mutate
      if(value.__ASYNC_COMPUTED__){   // 异步属性
        createAsyncComputedMutate<Store>(stateCtx,params)     
      }else{
        createComputedMutate<Store>(stateCtx,params)        
      }
		}
	}); 
}
