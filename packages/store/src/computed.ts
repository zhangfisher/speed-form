/**
 *
 * 计算属性
 *
 * 即派生属性


 *
 */

import { HeluxApi, IOperateParams, ISharedCtx, markRaw } from "helux";
import type { StoreSchema, ComputedScope, StoreOptions, ComputedContext } from "./store";
import { ComputedScopeRef } from "./store";
import { getVal, setVal } from "@helux/utils";
import { isAsyncFunction } from "flex-tools/typecheck/isAsyncFunction";
import { isPlainObject } from "flex-tools/typecheck/isPlainObject";
import { skipComputed, isSkipComputed, getValue } from "./utils";
import { switchValue } from "flex-tools/misc/switchValue";


// 作为计算函数的第二个参数传入
export interface ComputedParams extends Record<string,any>{
  // 获取一个进度条，用来显示异步计算的进度
  getProgressbar?:(opts:{max?:number,min?:number,value?:number})=>void
  // 当计算函数启用超时时，可以指定一个cb，在超时后会调用此函数
  onTimeout?:(cb:()=>void)=>void
}

export interface ComputedOptions<Value=any> {
  context?: ComputedContext             // 计算函数的this
  scope?  : ComputedScope               // 计算函数的第一个参数
  initial?: Value
  // 异步计算,默认情况下，通过typeof(fn)=="async function"来判断是否是异步计算函数
  // 但是在返回Promise或者Babel转码等情况下，判断可能失效时，需要手动指定async=true
  async?:boolean
  // 指定依赖，例如["key","a.b.c"]等形式
  depends?:Array<Array<string>|string>
  /**
   * 指定超时时间，当计算函数执行超过指定时间后，会自动设置loading为false
   * 如果timeout是一个数组，则第一个值表示超时时间，第二个值表示超时期的倒计时间隔
   * 例如：[1000,10]表示1000ms代表1s后超时并置loading=false
   * 10代表setInterval(1000/100), 每次执行时-1，直到为0时停止
   * 这样就可以通过绑定timeout值来实现倒计时的效果
   * 如果要实现60秒倒计时，可以这样写：[60*1000,60],这样value.timeout就会从60开始递减
   */
  timeout?:number  | [number,number]
  onError?:(e:Error)=>void              // 当执行计算getter函数出错时的回调
  // 默认情况下，异步计算属性会将计算函数转换成一AsyncComputedObject对象，此对象包含value,loading,error等属性
  // 但是有时候我们希望直接返回计算函数的返回值/loading/error等属性，被更新到其他对象中，此时可以通过参数来指定
  // 如果指定了computedObjectKey,则会将计算函数的返回值更新到指定的对象中，而不是原地的AsyncComputedObject对象
  // 默认值是sefl，表示不指定，会原地更新到原地的AsyncComputedObject对象
  toComputedResult?: 'self' | 'root' | 'parent' | 'current' | string[] 
};

export type ComputedDepends = Array<string> | Array<Array<string>> | ((draft: any) => any[])
export type ComputedGetter<R> = (scopeDraft: any) => Exclude<R,Promise<any>>
export type AsyncComputedGetter<R> = (scopeDraft:any,options:ComputedParams) => Promise<R>

export type AsyncComputedObject<Value= any,Attrs extends Record<string,any>=Record<string,any>> ={
  loading  : boolean;
  progress?: number;                // 进度值    
  timeout? : number ;               // 超时时间，单位ms，当启用超时时进行倒计时
  error?   : any;
  value    : Value;
  path?    : string[];              // 计算属性的完整路径
  reset    : () => {};              // 重新执行任务
} & Attrs

export interface AsyncComputedParams<R> {
  getter: () => Promise<R> | R;
  options: ComputedOptions<R>
}

// 计算属性的声明形式
export type Computed<R> = (...args: any) => R; // 同步计算函数
export type AsyncComputed<R> = (...args: any) => Promise<R>; // 异步计算函数
export type ComputedAsyncReturns<R> = (...args: any) => AsyncComputedParams<R>; // 使用computed函数创建的计算属性
export type ComputedSyncReturns<R> = (...args: any) => AsyncComputedParams<R>; // 使用computed函数创建的计算属性
 
/**
 * 
 * 根据当前计算函数的信息和配置参数获取计算函数的上下文或作用域
 * 
 * @param draft 
 * @param params 
 * @returns 
 */
function getComputedRefDraft(draft: any, params:{input:any[],type:'context' | 'scope',computedContext:IOperateParams,computedOptions: ComputedOptions, storeOptions: StoreOptions}) {

  const { input:depends, type, computedContext, computedOptions, storeOptions } = params;

  let rootDraft = draft;

  // 1. 执行hook，允许可以修改计算函数的根上下文以及相关配置参数
  if (typeof storeOptions.onComputedContext == "function") {
    const newDraft = storeOptions.onComputedContext.call(draft,draft,{type,valuePath:computedContext.fullKeyPath});
    if (newDraft !== undefined) {
      rootDraft = newDraft;
    }
  }

  const { keyPath, fullKeyPath } = computedContext;

  // 2. 读取计算函数的上下文配置参数
  const contexRef = getContextOption(draft, 
      type=='context' ? computedOptions.context : computedOptions.scope ,
      type=='context' ? storeOptions.computedThis : storeOptions.computedScope
  );

  // 3. 根据配置参数获取计算函数的上下文对象
  try { 
    if(contexRef === ComputedScopeRef.Current) {
        return getValue(draft, keyPath);
    }else if (contexRef === ComputedScopeRef.Parent) {
      return getValue(draft,fullKeyPath.slice(0, fullKeyPath.length - 2));
    }else if (contexRef === ComputedScopeRef.Root) {
        return rootDraft;
    }else if (contexRef === ComputedScopeRef.Depends) {      // 异步计算的依赖值      
      return Array.isArray(depends) ? depends : [];
    }else if (typeof contexRef == "string") {    // 当前对象的指定键      
      return getValue(draft, [...keyPath, ...contexRef.split(".")]);
    }else if (Array.isArray(contexRef)) {        // 从根对象开始的完整路径
      return getValue(draft, contexRef);
    }else if (typeof contexRef == "number") {
      const endIndex = contexRef > fullKeyPath.length - 2 ? fullKeyPath.length - contexRef - 1 : 0;
      return getValue(draft, fullKeyPath.slice(0, endIndex));
    }else {
      return draft;
    }
  }catch (e) {
        return draft;
  }
}
 

/**
 * 用来封装状态的计算函数，使用计算函数的传入的是当前对象
 *
 *
 * @param getter
 * @param depends
 * @param options
 * @returns
 *
 */
export function computed<R = any,Attrs extends Record<string,any> = never>( getter: AsyncComputedGetter<R>, depends: ComputedDepends, options?: ComputedOptions<R>): ComputedAsyncReturns<R & Attrs>;
export function computed<R = any,Attrs extends Record<string,any> = never>( getter: ComputedGetter<R>, options?: ComputedOptions<R>): R & Attrs;
export function computed<R = any,Attrs extends Record<string,any> = never>( getter: any,depends: any, options?: ComputedOptions<R>): ComputedAsyncReturns<R & Attrs> {
	
  if (typeof getter != "function")  throw new Error("getter must be a function");
  const opts: ComputedOptions<R> = {
    async: false,
    timeout:0,
    toComputedResult:'self'
  };

  // 是否是异步计算函数
  const isAsync = opts.async === true 
    || isAsyncFunction(getter)
    || (arguments.length == 2 && Array.isArray(arguments[1]))
    || (arguments.length == 3 && Array.isArray(arguments[1]) && isPlainObject(arguments[2]));

  if (isAsync) {
    opts.depends = arguments[1] || [];
    Object.assign(opts, {
        scope: ComputedScopeRef.Current, // 异步计算函数的上下文指向依赖
      },arguments[2] || {}
    );
  } else {
    opts.depends = []; // 同步计算函数不需要指定依赖
    Object.assign(opts,
      {  scope: ComputedScopeRef.Current }, // 异步计算函数的上下文指向依赖 
      arguments[1] || {}
    );
  }

  opts.async = isAsync;

  const fn = () => {
    return {
      getter,
      options: opts,
    };
  };

  // @ts-ignore
  fn.__ASYNC__ = isAsync;
  return fn as ComputedAsyncReturns<R & Attrs>;
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
 * @param storeCtxOption
 */
function getContextOption(state: any,computedCtxOption?: ComputedScope,storeCtxOption?: ComputedScope) {
  let ctx = computedCtxOption == undefined ? storeCtxOption : computedCtxOption;
  if (typeof ctx == "function") {
    try { ctx = ctx.call(state, state) } catch { }
  }
  return ctx == undefined ? (storeCtxOption == undefined ? ComputedScopeRef.Root: storeCtxOption) : ctx;
}

/**
 * 为同步计算属性生成mutate
 * @param stateCtx
 * @param computedContext
 */
function createComputedMutate<Store extends StoreSchema<any>>(stateCtx: ISharedCtx<Store["state"]>, computedContext: IOperateParams, computedOptions: ComputedOptions, storeOptions: StoreOptions) {

  let { fullKeyPath:valuePath, value: getter, parent } = computedContext;
  const { onCreateComputed } = storeOptions;

  // 排除掉所有非own属性,例如valueOf等
  if (parent && !Object.hasOwn(parent, valuePath[valuePath.length - 1])) {
    return;
  }

  // 当创建计算属性前时运行hook，本Hook的目的是允许重新指定computedThis或者重新包装原始计算函数
  if (typeof onCreateComputed == "function" && typeof getter === "function") {
    const newGetter = onCreateComputed.call( stateCtx,valuePath, getter,computedOptions);
    if (typeof newGetter == "function") getter = newGetter;
  }

  const witness = stateCtx.mutate({
    fn: (draft, params) => {
      const { input } = params;
      // 1. 根据配置参数获取计算函数的上下文对象      
      const thisDraft = getComputedRefDraft(draft,{input,computedOptions,computedContext,storeOptions,type:"context"})
      const scopeDraft= getComputedRefDraft(draft,{input,computedOptions,computedContext,storeOptions,type:"scope"})      
      // 2. 执行getter函数
      let computedResult = computedOptions.initial;
      try {
        computedResult = getter.call(thisDraft,scopeDraft);
      } catch (e: any) {// 如果执行计算函数出错,则调用        
        if (typeof computedOptions.onError === "function") {
          try {
            computedOptions.onError?.call(thisDraft, e);
          } catch { }
        }
      }
      // 3. 将getter的返回值替换到状态中的,完成移花接木
      setVal(draft, valuePath, computedResult);
    },
    desc: valuePath.join("."),
    // 关闭死循环检测，信任开发者
    checkDeadCycle: false,
  });
  computedContext.replaceValue(getVal(witness.snap, valuePath));
}


/** 
 * 创建异步计算属性的数据结构
 * 
*/
function createAsyncComputedObject(stateCtx:any,valueObj:Partial<AsyncComputedObject>){
  return Object.assign({
    value: undefined,
    path: [],
    loading: false,
    timeout:0,
    error: null,
    progress: 0,
    reset: markRaw(
        skipComputed(() => {
          stateCtx.runMutateTask(valueObj.desc);
        })
    )
  },valueObj)
}


/**
 * computed(async (scope,{getProgressbar})=>{
 *    const pbar = getProgressbar({max:100,min:0}) // 初始值
 *    pbar.value(12)      // 修改进度值 
 *    pbar.end()          // 结束进度条
 * })
 * 
 * @param init 
 * @returns 
 */
function createComputeProgressbar(setState:any,valuePath:string[],opts?:{max?:number,min?:number,value?:number}){
  const { max=100,min=0,value=0 } = Object.assign({},opts)
  // @ts-ignore
  setState((draft) =>setVal(draft, [...valuePath, "progress"], value))
  return {
    value(num:number){  
      if(num>max) num=max
      if(num<min) num=min
      // @ts-ignore
      setState((draft) =>setVal(draft, [...valuePath, "progress"], num))
    },
   end(){ this.value(max) }
  }
}

/**
 * 执行异步计算函数的getter方法
 * @param getter 
 * @param scopeDraft 
 * @param options 
 */
async function executeComputedGetter<R>(draft:any,getter:AsyncComputedGetter<R>,options:{input:any[],setState:any,computedContext: IOperateParams,computedOptions:ComputedOptions,storeOptions: StoreOptions}){
  const { input,computedOptions,computedContext,storeOptions,setState } = options;  
  const thisDraft = getComputedRefDraft(draft,{input,computedOptions,computedContext,storeOptions,type:"context"})
  const scopeDraft= getComputedRefDraft(draft,{input,computedOptions,computedContext,storeOptions,type:"scope"})  
  const { fullKeyPath:valuePath } = computedContext;  
  const { timeout=0,toComputedResult }  = computedOptions

  // 根据配置读取计算函数的返回值以及状态等 应该更新到哪里
  const computedResultPath:string[] =switchValue(toComputedResult,{
    self:valuePath,
    root: [],
    parent: valuePath.slice(0,valuePath.length-2),
    current: valuePath.slice(0,valuePath.length-1),
    Array:toComputedResult
  },{defaultValue:valuePath})    


  let timeoutCallback:Function
  const computedParams:ComputedParams ={
      onTimeout:(cb:Function)=>timeoutCallback=cb,
      getProgressbar:(opts?:{max?:number,min?:number,value?:number})=>createComputeProgressbar(setState,valuePath,opts)
  }  

  let timerId:any,countdownId:any,hasError=false,isTimeout=false
    try {
      // 处理超时参数和倒计时
      let [timeoutValue=0,countdown=0] = Array.isArray(timeout) ? timeout : [timeout,0]
      // @ts-ignore
      setState((draft) =>{
        setVal(draft, [...computedResultPath, "loading"], true)
        setVal(draft, [...computedResultPath, "timeout"], countdown > 1 ? countdown :timeoutValue )
      })       
      if(timeoutValue>=0){        
        timerId = setTimeout(()=>{          
          isTimeout=true
          if(!hasError){  
            // @ts-ignore
            setState((draft) =>{
              setVal(draft, [...computedResultPath, "loading"], false)
              setVal(draft, [...computedResultPath, "error"], 'TIMEOUT')
            })
          }          
          if(typeof(timeoutCallback)=='function') timeoutCallback()
        })
        // 启用设置倒计时:  比如timeout= 6*1000, countdown= 6
        if(countdown>1){
          countdownId = setInterval(()=>{
            // @ts-ignore
            setState((draft) =>{              
              setVal(draft, [...computedResultPath, "timeout"], countdown--)
              if(countdown===0) clearInterval(countdownId)
            })
          },timeoutValue/countdown)
        }
      }
      const computedResult = await getter.call(thisDraft, scopeDraft,computedParams);
      if(!isTimeout){
        // @ts-ignore
        setState((draft) => {
          setVal(draft, [...computedResultPath, "value"], computedResult);
          setVal(draft, [...computedResultPath, "error"], null);
        });
      }      
    }catch (e:any) {
      hasError = true
      if(!isTimeout){
        // @ts-ignore
        setState((draft) =>setVal(draft, [...computedResultPath, "error"], e.message));      
        if (typeof computedOptions.onError == "function") {
          try { computedOptions.onError.call(thisDraft, e)} catch { }
        }
      }
    } finally {      
      clearTimeout(timerId)
      clearInterval(countdownId)
      // @ts-ignore
      setState((draft) => {
        setVal(draft, [...computedResultPath, "loading"], false)
        if(!hasError && !isTimeout) setVal(draft, [...computedResultPath, "error"], null)
      });
    }
}

/**
 * 为异步计算属性生成mutate
 * @param stateCtx
 * @param computedContext
 */
function createAsyncComputedMutate<Store extends StoreSchema<any>>(stateCtx: ISharedCtx<Store["state"]>,computedContext: IOperateParams,storeOptions: StoreOptions) {
  const { fullKeyPath,  value, parent } = computedContext;
  const { onCreateComputed } = storeOptions;

  // 排除掉所有非own属性,例如valueOf等
  if (parent && !Object.hasOwn(parent, fullKeyPath[fullKeyPath.length - 1])) {
    return;
  }
  let { getter, options: computedOptions } = value();
  computedOptions.async = true;

  // 在创建computed前运行,允许拦截更改计算函数的依赖,上下文,以及getter等
  if (typeof onCreateComputed == "function" && typeof getter === "function") {
    const newGetter = onCreateComputed.call(stateCtx,fullKeyPath, getter, computedOptions);
    if (typeof newGetter == "function") getter = newGetter;
  }
  const {depends,initial} = computedOptions;

  const desc = depends.join("_") + "_computed";

  stateCtx.mutate({
    // 声明依赖
    deps: (state: any) =>(depends || []).map((deps: any) =>getVal(state, Array.isArray(deps) ? deps : deps.split("."))),
    fn: (draft, params) => {
      if (params.isFirstCall) {        
        setVal(draft, fullKeyPath, createAsyncComputedObject(stateCtx, {path: fullKeyPath,desc,value: initial,}))
      }
    },
    // 此函数在依赖变化时执行，用来异步计算
    task: async ({ draft, setState, input }) => {
      await executeComputedGetter(draft,getter,{input,computedOptions,computedContext,storeOptions,setState})
    },
    immediate: true,
    desc,
    checkDeadCycle: false,
  });
}


/**
 * 创建计算属性
 * 为state中的计算属性自动创建mutate
 * @param options
 * @returns
 */
export function createComputed<Store extends StoreSchema<any>>(stateCtx: ISharedCtx<Store["state"]>,api: HeluxApi, options: StoreOptions) {
	  const replacedMap: any = {};
    // 拦截读取state的操作，在第一次读取时，
    // - 为计算函数创建mutate
    // - 将原始属性替换为计算属性值或异步对象
	  stateCtx.setOnReadHook((params) => {
      const { fullKeyPath, value } = params;
      const key = fullKeyPath.join(".");
      if ( typeof value === "function" && !replacedMap[key] && !isSkipComputed(value) ) {

        replacedMap[key] = true;
        // 将声明在state里面的计算函数转换为helux的mutate
        //******** 使用computed创建 ****************** */
        if (value.__ASYNC__) {
        // 异步属性
          createAsyncComputedMutate<Store>(stateCtx, params, options);
      } else if (isAsyncFunction(value)) {
        // 简单的异步计算函数，没有通过computed函数创建，此时由于没有指定依赖，所以只会执行一次
          params.value = () => ({
            getter: value,
            options: {
              depends: [], // 未指定依赖
              initial: undefined, // 也没有初始化值
              context: options.computedThis, // 指定默认上下文
          },
          });
          createAsyncComputedMutate<Store>(stateCtx, params, options);
      } else {
        // 直接声明同步计算函数,使用全局配置的计算上下文
          createComputedMutate<Store>(stateCtx, params, {}, options);
        }
      }
    });
}
