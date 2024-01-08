/**
 *
 * 计算属性
 *
 * 即派生属性


 *
 */

import { HeluxApi, IOperateParams, ISharedCtx,markRaw } from "helux";
import type { StoreDefine, StoreComputedScope, StoreOptions } from './store';
import { ComputedScopeRef } from './store';
import { getVal, setVal } from "@helux/utils";
import { isAsyncFunction } from "flex-tools/typecheck/isAsyncFunction";
import { isPlainObject } from "flex-tools/typecheck/isPlainObject";
import { skipComputed,isSkipComputed } from "./utils"

export interface ComputedParams extends Record<string,any>{
  // 获取一个进度条，用来显示异步计算的进度
  getProgressbar?:(progress:number)=>void
}

export type ComputedOptions<T=any,Params extends ComputedParams= ComputedParams> = {
  context?:StoreComputedScope             // 计算函数的this
  scope?:StoreComputedScope               // 计算函数的第一个参数
  initial?:T
  // 异步计算,默认情况下，通过typeof(fn)=="async function"来判断是否是异步计算函数
  // 但是在返回Promise等情况下，无法判断，此时需要手动指定async=true
  async?:boolean
  // 指定依赖，例如["key","a.b.c"]等形式
  depends?:string[]
  // 当执行计算getter函数出错时的回回调
  onError?:(e:Error)=>void
  // 作为计算函数的第二个参数传入
  params?:Params
};

export type ComputedDepends = Array<string> | Array<Array<string>> | ((draft: any) => any[])
export type ComputedGetter<R> = (scopeDraft: any) => Exclude<R,Promise<any>>
export type AsyncComputedGetter<R> = (scopeDraft:any,options:ComputedParams) => Promise<R>

export interface AsyncComputedObject<V=any>{
  loading:boolean
  progress?:number            // 进度值
  error?:any
  value:V,
  keyPath?:string[]
  reset:()=>{}                // 重新执行任务
}




export interface AsyncComputedParams<R>  {
  getter:()=>Promise<R> | R
  options:{
    async:true
    depends:ComputedDepends
    context:StoreComputedScope
    scope:StoreComputedScope
    initial:R
  }
}

// 计算属性的声明形式
export type Computed<R> = (...args:any)=> R          // 同步计算函数
export type AsyncComputed<R> = (...args:any)=> Promise<R>  // 异步计算函数
export type ComputedAsyncReturns<R> = (...args:any)=>  AsyncComputedParams<R>   // 使用computed函数创建的计算属性
export type ComputedSyncReturns<R> = (...args:any)=>  AsyncComputedParams<R>   // 使用computed函数创建的计算属性


/**
 * 根据输入的context参数获取计算属性的上下文
 * @param draft
 * @param param1
 * @returns
 */
function getComputedContextDraft(draft:any,{context,keyPath,fullKeyPath,depends}:{context?:StoreComputedScope,keyPath:string[],fullKeyPath:string[],parent:any,depends?:readonly any[]}){
  try{
    const ctx = typeof(context)=='function' ? context(draft) : context

    if(ctx === ComputedScopeRef.Current){
        return  keyPath.length==0 ? draft : getVal(draft, keyPath)
    }else if(ctx === ComputedScopeRef.Parent){
      const paths = fullKeyPath.slice(0,fullKeyPath.length-2)
        return paths.length > 0 ? getVal(draft,paths) : draft
    }else if(ctx === ComputedScopeRef.Root){
        return draft
    }else if(ctx === ComputedScopeRef.Depends){ // 异步计算的依赖值
      return Array.isArray(depends) ? depends : []
    }else if(typeof(ctx)=='string'){ // 当前对象的指定键
      return getVal(draft,[...keyPath,...ctx.split(".")])
    }else if(Array.isArray(ctx)){
      return ctx.length > 0 ? getVal(draft,ctx) : draft
    }else if(typeof(ctx)=='number'){
      const endIndex = ctx > fullKeyPath.length-2 ? fullKeyPath.length-ctx-1 : 0
      const paths =   fullKeyPath.slice(0,endIndex)
      return paths.length>0 ?  getVal(draft,paths) : draft
    }else{
      return draft
    }
  }catch(e){
        return draft
  }
}

/**
 * 
 * 创建计算属性
 * 
 * 支持传入的是异步函数，同步函数
 * 
 * 
 * 用来封装状态的计算函数，使用计算函数的传入的是当前对象
 *
 *
 * @param getter
 * @param depends
 * @param options
 * @returns
 *
 */
export function computed<R=any>(getter:AsyncComputedGetter<R>,depends:ComputedDepends,options?: ComputedOptions<R>):ComputedAsyncReturns<R>
export function computed<R=any>(getter:ComputedGetter<R>,options?: ComputedOptions<R>):R
export function computed<R=any>(getter:any,depends:any,options?: ComputedOptions<R>):ComputedAsyncReturns<R>{

	if(typeof(getter)!="function") throw new Error("getter must be a function")

  const opts:ComputedOptions<R> = {
    async:false
  }

  // 是否是异步计算函数
  const isAsync = opts.async===true
                || isAsyncFunction(getter)
                || (arguments.length==2 && Array.isArray(arguments[1]))
                || (arguments.length==3 && Array.isArray(arguments[1]) && isPlainObject(arguments[2]))

  if(isAsync){
    opts.depends = arguments[1] || []
    Object.assign(opts,{
      scope:ComputedScopeRef.Current,     // 异步计算函数的上下文指向依赖
    },arguments[2] || {})
  }else{
    opts.depends = []   // 同步计算函数不需要指定依赖
    Object.assign(opts,arguments[1] || {})
  }

  opts.async = isAsync

  const fn =  () => {
    return {
      getter,
      options:opts
    }
  }

  // @ts-ignore
  fn.__ASYNC__ = isAsync 
  return fn  as ComputedAsyncReturns<R> 
}

/**
 *
 * 计算函数的context可以在全局Store中通过computedThis参数指定
 * 也可以在computed(fn,{context})函数中指定
 *
 * computed配置的context优先级高于store配置的context
 *
 *
 *
 * @param state
 * @param computedThis
 * @param storeContext
 */
function getContextOption(state:any,computedContext?:StoreComputedScope ,storeContext?:StoreComputedScope){
  let ctx = computedContext==undefined ? storeContext : computedContext 
  if(typeof(ctx)=='function'){
    try{
      ctx = ctx.call(state,state)
    }catch{}
  }
  return ctx==undefined ? (storeContext ==undefined ? ComputedScopeRef.Root : storeContext)  : ctx 
}


/**
 * 为同步计算属性生成mutate
 * @param stateCtx
 * @param params
 */
function createComputedMutate<Store extends StoreDefine<any>>(stateCtx: ISharedCtx<Store["state"]>,params:IOperateParams,computedOptions: ComputedOptions,storeOptions:StoreOptions){
  let { fullKeyPath, value:getter,keyPath,parent } = params;
  const { computedThis,computedScope,onCreateComputed } = storeOptions

  // 排除掉所有非own属性,例如valueOf等
  if(parent && !Object.hasOwn(parent,fullKeyPath[fullKeyPath.length-1])){
    return
  }
  // 当创建计算属性前时运行hook，本Hook的目的是允许重新指定computedThis或者重新包装原始计算函数
  if(typeof(onCreateComputed)=='function' && typeof(getter)==='function'){
    const newGetter = onCreateComputed.call(stateCtx,fullKeyPath,getter,computedOptions)
    if(typeof(newGetter)=='function') getter = newGetter
  }
  const { context,scope,onError,initial,params:computedParams } = computedOptions


  const witness = stateCtx.mutate({
    fn: (draft, params) => {
      const { input } = params
      // 2. 根据配置参数获取计算函数的上下文对象
      const thisDraft = getComputedContextDraft(draft, { context:getContextOption(draft,context,computedThis), fullKeyPath, keyPath ,parent,depends:input})
      const scopeDraft = getComputedContextDraft(draft, { context:getContextOption(draft,scope,computedScope), fullKeyPath, keyPath ,parent,depends:input})

      // 3. 执行getter函数
      let computedValue = initial
      try{
        computedValue = getter.call(thisDraft,scopeDraft,computedParams)
      }catch(e:any){
        // 如果执行计算函数出错,则调用
        if(typeof(onError)==='function'){
          try{onError?.call(thisDraft,e)}catch{}
        }
      }
      // 4. 将getter的返回值替换到状态中的,完成移花接木
      setVal(draft, fullKeyPath,computedValue);

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
function createAsyncComputedMutate<Store extends StoreDefine<any>>(stateCtx: ISharedCtx<Store["state"]>,params:IOperateParams,storeOptions:StoreOptions){
  const { fullKeyPath, keyPath,value ,parent} = params;
  const { onCreateComputed,computedThis,computedScope } = storeOptions

  // 排除掉所有非own属性,例如valueOf等
  if(parent && !Object.hasOwn(parent,fullKeyPath[fullKeyPath.length-1])){
    return
  }
  let {getter,options:computedOptions } = value()
  computedOptions.async = true

  // 在创建computed前运行,允许拦截更改计算函数的依赖,上下文,以及getter等
  if(typeof(onCreateComputed)=='function' && typeof(getter)==='function'){
    const newGetter = onCreateComputed.call(stateCtx,fullKeyPath,getter,computedOptions)
    if(typeof(newGetter)=='function') getter = newGetter
  }

  const { depends,context,scope,onError,initial,params:computedParams  }  = computedOptions

  const desc = depends.join("_")+"_computed"

  stateCtx.mutate({
    // 声明依赖
    deps:(state: any)=>(depends || []).map((deps:any)=>getVal(state,Array.isArray(deps) ? deps : deps.split("."))),
    fn:(draft,params)=>{
      if(params.isFirstCall){      
        // 将异步计算属性转换为一个计算属性对象
        setVal(draft,fullKeyPath,{
          value:initial,
          keyPath:fullKeyPath,
          loading:false,
          error:null,
          progress:0,
          reset:markRaw(skipComputed(()=>{
            stateCtx.runMutateTask(desc)
          }))
        })
      }
    },
    // 此函数在依赖变化时执行，用来异步计算
    task:async ({draft,setState,input})=>{

      const thisDraft = getComputedContextDraft(draft, { context:getContextOption(draft,context,computedThis), fullKeyPath, keyPath ,parent,depends:input})
      const scopeDraft = getComputedContextDraft(draft, { context:getContextOption(draft,scope,computedScope), fullKeyPath, keyPath ,parent,depends:input})

      try{
        // @ts-ignore
        setState((draft)=>setVal(draft,[...fullKeyPath,'loading'],true))
        const result = await getter.call(thisDraft,scopeDraft,computedParams)
        // @ts-ignore
        setState((draft)=>{
          setVal(draft,[...fullKeyPath,'value'],result)
          setVal(draft,[...fullKeyPath,'error'],null)
        })
      }catch(e){
        if(typeof(onError)=='function'){
          try{onError.call(thisDraft,e)}catch{}
        }
         // @ts-ignore
        setState((draft)=>setVal(draft,[...fullKeyPath,'error'],e))
      }finally{
        // @ts-ignore
        setState((draft)=>setVal(draft,[...fullKeyPath,'loading'],false))
      }
    },
    immediate:true,
    desc,
    checkDeadCycle:false
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
      const { fullKeyPath, value } = params;

      const key = fullKeyPath.join(".");
      if (typeof value === "function" && !replacedMap[key] && !isSkipComputed(value)) {
        replacedMap[key] = true;
        // 将声明在state里面的计算函数转换为helux的mutate
        //******** 使用computed创建 ****************** */
        if(value.__ASYNC__){   // 异步属性
          createAsyncComputedMutate<Store>(stateCtx,params,options)
        // }
        // else if(value.__COMPUTED__=='sync'){    // 通过computed函数创建的同步计算属性，允许重新指定上下文
        //   const {getter,options:computedOptions } = value()
        //   params.value = getter
        //   createComputedMutate<Store>(stateCtx,params,computedOptions,options)
        // //******** 直接的函数声明 ****************** */
        }else if(isAsyncFunction(value)){   // 简单的异步计算函数，没有通过computed函数创建，此时由于没有指定依赖，所以只会执行一次
          params.value =()=>({
            getter:value,
            options:{
              depends:[],                       // 未指定依赖
              initial:undefined,                // 也没有初始化值
              context:options.computedThis,     // 指定默认上下文
              scope:ComputedScopeRef.Current    //
            }
          })
          createAsyncComputedMutate<Store>(stateCtx,params,options)
        }else{                // 直接声明同步计算函数,使用全局配置的计算上下文
          createComputedMutate<Store>(stateCtx,params,{},options)
        }
      }
    });
}
