/**
 * 
 * 计算属性
 * 
 * 即派生属性
   

 * 
 */

import { HeluxApi, IOperateParams, ISharedCtx } from "helux";
import type { StoreDefine, StoreOptions } from "./store";
import { getVal, setVal } from "@helux/utils";
import { isAsyncFunction } from "flex-tools/typecheck/isAsyncFunction";

export type ComputedOptions<T=any> = {
  // current： 指向当前对象，如state = {user:{first,last,fullName:(state:user)=>{user.first+user.last}}}
  // parent： 指向当前对象的父，如state = {user:{first,last,fullName:(state)=>{state.user.first+state.user.last}}}
	context?:'root' | 'parent'  | 'current' 
  initial?:T
};

export type ComputedDepends = string[] | ((draft: any) => any[]);
export type ComputedGetter<R> = (ctxDraft: any) => Exclude<R,Promise<any>>
export type AsyncComputedGetter<R> = (depends:any[],ctxDraft:any,draft:any) => Promise<R>

export interface AsyncComputedObject<V=any>{
  loading:boolean
  progress?:number      // 进度值
  error?:any
  value:V,
  reset:()=>{}      // 重新执行任务    
}

export type ComputedReturns<R> = (...args:any)=> R
export type ComputedAsyncReturns<R> = (...args:any)=> Promise<R>
export type AsyncComputedReturns<R> = (...args:any)=> AsyncComputedParams<R>


export interface AsyncComputedParams<R>  {
  getter:()=>Promise<R>
  depends:ComputedDepends
  // 默认上下文，0代表当前对象,1代表父对象，2代表祖先,....依次递归,
  context:'root' | 'parent'  | 'current' |  number
  initial:R
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
 * 
 *
 * @param contextstate
 */

export function computed<R=any>(getter:AsyncComputedGetter<R>,depends:ComputedDepends,options?: ComputedOptions<R>):AsyncComputedReturns<R> 
export function computed<R=any>(getter:ComputedGetter<R>,options?: ComputedOptions<R>):ComputedReturns<R>
export function computed<R=any>(getter:Function,depends:any,options?: ComputedOptions<R>):Function {
	const { context,initial } = Object.assign({ context: 'root' }, options) as Required<ComputedOptions<R>>
  if(arguments.length>=1 && isAsyncFunction(getter)){
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
    return fn  as AsyncComputedReturns<R> 
  }else{  // 同步计算
    return (ctxDraft: any,draft: any):R => {
      return getter(context === "root"  ? draft : ctxDraft) 
    };
  }	
} 


/** 
 * 根据输入的context参数获取计算属性的上下文
 * @param draft 
 * @param param1 
 * @returns 
 */
function getComputedContextDraft(draft:any,{context,keyPath,fullKeyPath}:{context?:string,keyPath:string[],fullKeyPath:string[]}){
  try{
    return context=='root' ? draft : 
      ( context==undefined || context=='current' ? getVal(draft, keyPath) :     
        (context=='parent' ?  getVal(draft,fullKeyPath.slice(0,keyPath.length-2)) :  draft))
  }catch(e){
        return draft
  }
}
 
/**
 * 为同步计算属性生成mutate
 * @param stateCtx 
 * @param params 
 */
function createComputedMutate<Store extends StoreDefine<any>>(stateCtx: ISharedCtx<Store["state"]>,params:IOperateParams,options:StoreOptions){
  const { fullKeyPath, value:getter,keyPath } = params;
  const { computedContext:context } = options
  const witness = stateCtx.mutate((draft) => {        
      const ctxDraft = getComputedContextDraft(draft,{context,fullKeyPath,keyPath}) 
      setVal(draft,fullKeyPath,getter(ctxDraft,draft));
  })  
  params.replaceValue(getVal(witness.snap, fullKeyPath));        
}

/**
 * 为异步计算属性生成mutate
 * @param stateCtx 
 * @param params 
 */
function createAsyncComputedMutate<Store extends StoreDefine<any>>(stateCtx: ISharedCtx<Store["state"]>,params:IOperateParams,options?:StoreOptions){
  const { fullKeyPath, keyPath,value } = params;
  const {getter,depends,context,initial} = value()
  const desc = depends.join("_")+"_computed"
  stateCtx.mutate({
    // 声明依赖
    deps:(state: any)=>(depends || []).map((deps:any)=>getVal(state,deps.split("."))),
    fn:(draft)=>{
      setVal(draft,fullKeyPath,{
        value:initial,
        __$COMPUTED__:true,
        loading:false,
        error:null,
        progress:0,
        reset:()=>{
          stateCtx.runMutateTask(desc)
        }
      })
    },
    // 此函数在依赖变化时执行，用来异步计算
    task:async ({draft,setState,input})=>{      
      const ctxDraft = getComputedContextDraft(draft,{context,fullKeyPath,keyPath}) 
      try{
        // @ts-ignore
        setState((draft)=>{
          setVal(draft,[...fullKeyPath,'loading'],true)
        })
        const result = await getter(input,ctxDraft,draft) 
        // @ts-ignore
        setState((draft)=>{
          setVal(draft,[...fullKeyPath,'value'],result)
          setVal(draft,[...fullKeyPath,'error'],null)
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
    immediate:true,
    desc
  })  
}


/**
 * 创建计算属性
 * @param options
 * @returns
 */
export function createComputed<Store extends StoreDefine<any>>(stateCtx: ISharedCtx<Store["state"]>,api: HeluxApi,options:StoreOptions) {
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
      }else if(isAsyncFunction(value)){
        params.value =()=>({  // 为了支持异步计算属性，需要将函数转换为对象 {
          getter:value,
          depends:[],
          initial:undefined,
          context:options?.computedContext
        })
        createAsyncComputedMutate<Store>(stateCtx,params,options)     
      }else{
        createComputedMutate<Store>(stateCtx,params,options)        
      }
		}
	}); 
}
