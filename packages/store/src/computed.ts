/**
 * 
 * 计算属性
 * 
 * 即派生属性
   

 * 
 */

import { HeluxApi, IOperateParams, ISharedCtx } from "helux";
import { type StoreDefine, type StoreOptions,type StoreComputedContext, ComputedContextTarget } from "./store";
import { getVal, setVal } from "@helux/utils";
import { isAsyncFunction } from "flex-tools/typecheck/isAsyncFunction";

export type ComputedOptions<T=any> = {
  // current： 指向当前对象，如state = {user:{first,last,fullName:(state:user)=>{user.first+user.last}}}
  // parent： 指向当前对象的父，如state = {user:{first,last,fullName:(state)=>{state.user.first+state.user.last}}}
	context?:StoreComputedContext
  initial?:T
  // 异步计算,默认情况下，通过typeof(fn)=="async function"来判断是否是异步计算函数
  // 但是在返回Promise等情况下，无法判断，此时需要手动指定async=true
  async?:boolean 
  // 指定依赖，例如["key","a.b.c"]等形式
  depends?:any[]    
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
  context:StoreComputedContext 
  initial:R
}

/** 
 * 根据输入的context参数获取计算属性的上下文
 * @param draft 
 * @param param1 
 * @returns 
 */
function getComputedContextDraft(draft:any,{context,keyPath,fullKeyPath}:{context?:StoreComputedContext,keyPath:string[],fullKeyPath:string[]}){
  try{
    const ctx = typeof(context)=='function' ? context(draft) : context

    if(ctx === ComputedContextTarget.Current){
        return  getVal(draft, keyPath)
    }else if(ctx === ComputedContextTarget.Parent){
        return getVal(draft,fullKeyPath.slice(0,keyPath.length-2))
    }else if(ctx === ComputedContextTarget.Root){
        return draft
    }else if(typeof(ctx)=='string'){
      return getVal(draft,[...keyPath,...ctx.split(".")])
    }else if(Array.isArray(ctx)){
      return getVal(draft,ctx)
    }else if(typeof(ctx)=='number'){
      const endIndex = ctx > fullKeyPath.length-2 ? fullKeyPath.length-ctx-1 : 0
      return endIndex==0 ? draft : getVal(draft,fullKeyPath.slice(0,endIndex))
    }else{
      return draft
    }
  }catch(e){
        return draft
  }
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
 *    context:""      // 指定异步计算函数的传入的上下文
 * })
 * }
 * 
 * 
 *
 * @param getter
 * @param depends
 * @param options
 * @returns
 * 
 */
export function computed<R=any>(getter:AsyncComputedGetter<R>,depends:ComputedDepends,options?: ComputedOptions<R>):AsyncComputedReturns<R> 
export function computed<R=any>(getter:ComputedGetter<R>,options?: ComputedOptions<R>):ComputedReturns<R>
export function computed<R=any>(getter:Function,depends:any,options?: ComputedOptions<R>):Function {

	if(typeof(getter)!="function") throw new Error("getter must be a function")
  const opts =Object.assign({}, arguments.length >= 3 ? arguments[2] : (arguments.length==2 ? arguments[1] : {}))
  const { context = ComputedContextTarget.Root, initial,async=false } = opts
  
  // 是否是异步计算函数
  const isAsync = async===true || isAsyncFunction(getter)

  if(arguments.length==1){
    depends = []
  }else if(arguments.length==2){  // 同步
    if(isAsync){
      if(!(Array.isArray(depends) || typeof(depends)=="function")){
        throw new Error("async computed must specify depends")
      }
    }else{
      depends = []
    }
  }

  if(isAsync && depends.length==0) throw new Error("async computed must specify depends")

  const fn =  () => {
    return {
      getter,
      depends,
      initial,
      context,
      async
    }
  }

  // @ts-ignore
  fn.__COMPUTED__ = isAsync ? 'async' : 'sync'

  return fn
} 

/**
 * 为同步计算属性生成mutate
 * @param stateCtx 
 * @param params 
 */
function createComputedMutate<Store extends StoreDefine<any>>(stateCtx: ISharedCtx<Store["state"]>,params:IOperateParams,options:StoreOptions){
  let { fullKeyPath, value:getter,keyPath } = params;
  let { computedContext:context,onCreateComputed } = options
  const witness = stateCtx.mutate({
    fn: (draft, params) => {
      // // 运行hook，允许重新指定computedContext，或者包装原始计算函数
      // if(typeof(onCreateComputed)=='function'){
      //   const result = onCreateComputed.call(draft,{keyPath:fullKeyPath,context,getter})
      //   if(result){
      //     if(result.context) context = result.context
      //     if(typeof(result.getter)=='function') getter = result.getter        
      //   }
      // }
      // 根据配置参数获取计算属性的上下文
      const ctxDraft = getComputedContextDraft(draft, { context, fullKeyPath, keyPath })
      // 第一次执行执行函数进行替换原始对象的值
      setVal(draft, fullKeyPath, getter.call(draft,ctxDraft));
    },
    desc: fullKeyPath.join('.'),
    // 关闭死循环检测，信任开发者
    checkDeadCycle: false,
  })
  params.replaceValue(getVal(witness.snap, fullKeyPath));        
}

/**
 * 为异步计算属性生成mutate
 * @param stateCtx 
 * @param params 
 */
function createAsyncComputedMutate<Store extends StoreDefine<any>>(stateCtx: ISharedCtx<Store["state"]>,params:IOperateParams,options:StoreOptions){
  const { fullKeyPath, keyPath,value } = params;
  const {getter,depends,context,initial } = value()
  const desc = depends.join("_")+"_computed"
  stateCtx.mutate({
    // 声明依赖
    deps:(state: any)=>(depends || []).map((deps:any)=>getVal(state,deps.split("."))),
    fn:(draft)=>{
      // 将异步计算属性更一个计算属性对象
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
        const result = await getter.call(draft,input,ctxDraft) 
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
 * 为state中的计算属性自动创建mutate
 * @param options
 * @returns
 */
export function createComputed<Store extends StoreDefine<any>>(stateCtx: ISharedCtx<Store["state"]>,api: HeluxApi,options:StoreOptions) {
 
	  const replacedMap: any = {};
    // 拦截读取state的操作，在第一次读取时，
    // - 为计算函数创建mutate
    // - 将原始属性替换为计算属性值或异步对象
	  stateCtx.setOnReadHook((params) => {
      const { fullKeyPath,keyPath, value } = params;
      const key = fullKeyPath.join(".");
      if (typeof value === "function" && !replacedMap[key]) {
        replacedMap[key] = true;
        // 将声明在state里面的计算函数转换为helux的mutate
        if(value.__COMPUTED__=='async'){   // 异步属性
          createAsyncComputedMutate<Store>(stateCtx,params,options)     
        }else if(isAsyncFunction(value)){   // 简单的异步计算函数，没有通过computed函数创建，此时由于没有指定依赖，所以只会执行一次          
          params.value =()=>({  
            getter:value,
            depends:[],         // 未指定依赖
            initial:undefined,  // 也没有初始化值
            context:options.computedContext   // 只能指定默认上下文
          })
          createAsyncComputedMutate<Store>(stateCtx,params,options)     
        }else if(value.__COMPUTED__=='sync'){    // 通过computed函数创建的同步计算属性，允许重新指定上下文
          const {getter,context = options.computedContext } = value()
          params.value = getter
          createComputedMutate<Store>(stateCtx,params,Object.assign({},options,{
            computedContext:context
          }))
        }else{                // 直接声明同步计算函数,使用全局配置的计算上下文        
          createComputedMutate<Store>(stateCtx,params,options)        
        }
      }
    }); 
}
