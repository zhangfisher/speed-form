/**
 *
 * 计算属性
 *
 * 即派生属性


 *
 */

import { IOperateParams, ISharedCtx, markRaw, getSnap, IMutateWitness } from 'helux';
import type { StoreDefine, ComputedScope, StoreOptions, ComputedContext, IStore, StoreExtendObjects, StateValueDescriptorParams, StateValueDescriptor } from "./store";
import { ComputedScopeRef } from "./store"; 
import { isAsyncFunction } from "flex-tools/typecheck/isAsyncFunction";
import { skipComputed, getValueByPath, joinValuePath, getError, getDeps, getDepValues,getVal, setVal  } from "./utils";
import { switchValue } from "flex-tools/misc/switchValue"; 
import { Dict } from "./types";
import { delay } from 'flex-tools/async/delay'; 
import { type StoreExtendContext } from './extends';
import { OBJECT_PATH_DELIMITER } from './consts';
import { getComputedContext } from './context';
 

export interface ComputedProgressbar{
  value:(num:number)=>void
  end:()=>void
}

// 作为计算函数的第二个参数传入
export interface ComputedParams extends Record<string,any>{
  // 获取一个进度条，用来显示异步计算的进度
  getProgressbar?:(opts?:{max?:number,min?:number,value?:number})=>ComputedProgressbar
  // 当计算函数启用超时时，可以指定一个cb，在超时后会调用此函数
  onTimeout?:(cb:()=>void)=>void    
  /**
   * 
   * 提供一个函数用来获取当前Scope的快照
   * 传入的scope是一个经过Proxy处理的响应式对象，此方法可以对scope进行转换为普通对象   
   */
  getSnap?:<T=Dict>(scope:any)=>T  
  /**
   * 在执行计算函数时，如果传入AbortController.signal可以用来传递给异步计算函数，用来取消异步计算
   * 例如：fetch(url,{signal:signal})
   */
  abortSignal:AbortSignal  
  /**
   * 用来取消操作正在执行的异步计算函数
   * 异步函数可以通过此方法来取消异步计算
   * 
   * @returns 
   */
  cancel:()=>void
}

export interface ComputedOptions<Value=any,Extras extends Dict={}> {
  // 计算函数的唯一标识，如果未指定，则自动生成一个唯一标识
  id?:string | ((path:string[])=>string)                         
  context?: ComputedContext             // 计算函数的this
  scope?  : ComputedScope               // 计算函数的第一个参数
  initial?: Value
  // 异步计算,默认情况下，通过typeof(fn)=="async function"来判断是否是异步计算函数
  // 但是在返回Promise或者Babel转码等情况下，判断可能失效时，需要手动指定async=true
  async?:boolean
  // 指定依赖，例如["key","a.b.c"]等形式
  depends?:ComputedDepends
  /**
   * 指定超时时间，当计算函数执行超过指定时间后，会自动设置loading为false
   * 如果timeout是一个数组，则第一个值表示超时时间，第二个值表示超时期的倒计时间隔
   * 例如：[1000,10]表示1000ms代表1s后超时并置loading=false
   * 10代表setInterval(1000/100), 每次执行时-1，直到为0时停止
   * 这样就可以通过绑定timeout值来实现倒计时的效果
   * 如果要实现60秒倒计时，可以这样写：[60*1000,60],这样value.timeout就会从60开始递减
   */
  timeout?:number  | [number,number]
  // 是否立刻计算，默认为true，在创建时马上进行计算，=false,则只有在依赖变化时才会执行，或者手动调用reset方法
  immediate?:boolean                     
  /**
   *  计算函数不可重入，即同一个计算函数在执行过程中，不会再次执行   
   *  如果重入时，则在debug=true时会在控制台打印出警告信息
   */
  noReentry?:boolean
  /**
   * 提供一个异步信号，用来传递给异步计算函数以便可以取消异步计算
   */
  abortSignal?:()=>AbortSignal | null | void | undefined
  /**
   * 当计算函数执行出错时的重试次数
   * 
   * retry:3  表示最多重试3次,重试间隔为0，加上第1次执行，总共执行4次
   * retry:[3,1000] 表示最多重试3次，重试间隔为1000ms，加上第1次执行，总共执行4次
   * 
   * 重试数据可以通过AsyncComputedObject.retry获取
   * 当首次执行失败时触发重试，此时AsyncComputedObject.retry=3，然后每次重试-1，直到为0时停止重试
   * 可以在UI中通过AsyncComputedObject.retry来实时显示重试次数
   * 
   */
  retry?:number | [number,number]
  /**
   * 当执行计算getter函数出错时的回调
   */
  onError?:(e:Error)=>void              
  /**
   * 指定计算结果更新到哪里
   * 
   * self: 默认，原地替换，异步计算属性会将计算函数转换成一AsyncComputedObject对象，此对象包含value,loading,error等属性
   * root: 更新到根对象中
   * parent: 更新到父对象中
   * current: 更新到当前对象中
   * none: 不更新到任何对象中
   * {String} 当前对象的指定键
   * {Array} 从根对象开始的完整路径
   * 
   */
  toComputedResult?: 'self' | 'root' | 'parent' | 'current' | 'none' | string[] | string 
  /**
   * 为该计算函数指定一个分组名
   * 
   * 此属性用来将计算函数分组，比如一个store中具有相同group的计算函数
   * 
   * 然后就可以启用/关闭/运行指定分组的计算函数
   * 
   * 在表单中通过为所有validate指定统一的分组名称，这样就可以统一控制表单的验证是否计算
   * 
   * 
   * store.computedObjects.get(["a","b"]).run() // 重新启动
   * 
   * 马上重新运行指定组的计算函数
   * store.computedObjects.getGroup("a"]).run() // 运行组
   * // 启用/禁用指定组的计算函数 =false 代表禁用计算 =true开启动计算
   * store.computedObjects.enableGroup("b"]) 
   * 
   */
  group?:string
  /**
   * 计算开关
   * 当=false时不会执行计算
   * 
   */

  enable?:boolean

  /**
   * 额外合并到计算结果AsyncComputedObject中的属性
   */
  extras?:Extras
};

export type ComputedDepends =Array<string | Array<string>> 
export type ComputedGetter<R,Scope=any> = (scopeDraft: Scope) => Exclude<R,Promise<any>>
export type AsyncComputedGetter<R,Scope=any> = (scopeDraft:Scope,options:Required<ComputedParams>) => Promise<R>

// 当调用run方法时，用来传参覆盖原始的计算参数
export type RuntimeComputedOptions = Pick<ComputedOptions,'abortSignal' | 'noReentry' | 'retry' | 'onError' | 'timeout' | 'extras'>

export type AsyncComputedObject<Result= any,ExtAttrs extends Dict = {}> ={
  loading? : boolean;
  progress?: number;                // 进度值    
  timeout? : number ;               // 超时时间，单位ms，当启用超时时进行倒计时
  error?   : any;
  retry?   : number                 // 重试次数，当执行重试操作时，会进行倒计时，每次重试-1，直到为0时停止重试
  result   : Result;                // 计算结果保存到此处
  run      : (options?:RuntimeComputedOptions) => {};        // 重新执行任务
  cancel    : ()=>void                                         // 中止正在执行的异步计算
} & ExtAttrs

 
type ComputedDescriptorParams<R>  = StateValueDescriptorParams<(scope:any) => Promise<R> | R,ComputedOptions<R>>

// 计算属性的声明形式
export type Computed<T=any> = (...args: any) => T; // 同步计算函数
export type AsyncComputed<T=any> = (...args: any) => Promise<T>; // 异步计算函数

// 使用computed函数创建的计算属性
// export type ComputedDescriptor<T=any> = ((...args: any) => ComputedDescriptorParams<T>) 
//                                         & {__COMPUTED__: 'sync' | 'async' | 'watch'};
                                        
export type ComputedDescriptor<R=any> = StateValueDescriptor<(scope:any) => Promise<R> | R,ComputedOptions<R>>

export type ComputedSyncReturns<T=any> = (...args: any) => Exclude<T,Promise<any>>;  
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
  return getComputedContext(draft,{
    input:depends,
    contextType:type,
    value:computedContext,
    funcOptions:computedOptions,
    storeOptions,
    computedType:'Computed'
  })
}
 

/**
 * 用来封装状态的计算函数，使用计算函数的传入的是当前对象
 *
 *  类型声明：
 *   R: 计算函数的返回值类型,该值会回写入声明的计算属性中，如果是异步计算函数，会回写入AsyncComputedObject.value中
 *   ExtraAttrs: 额外的属性，会合并到AsyncComputedObject中
 *
 * @param getter
 * @param depends
 * @param options
 * @returns
 *
 */
export function computed<R = any,ExtraAttrs extends Dict = {}>( getter: AsyncComputedGetter<R>,depends?:ComputedDepends,options?: ComputedOptions<R,ExtraAttrs>): ComputedDescriptor<R & ExtraAttrs>;
export function computed<R = any,ExtraAttrs extends Dict = {}>( getter: ComputedGetter<R>, options?: ComputedOptions<R,ExtraAttrs>): R
export function computed<R = any,ExtraAttrs extends Dict = {}>( getter: any,depends?:any, options?: ComputedOptions<R,ExtraAttrs>):any {
	
  if (typeof getter != "function")  throw new Error("getter must be a function");
  
  // 解析参数：同时支持同步和异步计算函数两种方式声明
  let deps:ComputedDepends = []
  const opts : ComputedOptions<R,ExtraAttrs> = {
    async: false,
    enable:true,
    timeout:0,
    depends: [],
    // scope:ComputedScopeRef.Current,
    toComputedResult:ComputedScopeRef.Self,
    immediate:true,
  }

  if(arguments.length==1){
    deps = []    
  }else if(arguments.length==2){
    if(Array.isArray(arguments[1])){
      deps = arguments[1]
    }else if(typeof(arguments[1])=='object'){
      Object.assign(opts,arguments[1])
    }else{
      throw new Error("invalid arguments")
    }
  }else if(arguments.length>=3){
    deps = arguments[1]
    Object.assign(opts,arguments[2])
  }


  // 是否是异步计算函数
  const isAsync = opts.async === true 
        || isAsyncFunction(getter)
        || (arguments.length>=2 && Array.isArray(depends)) 



  opts.async = isAsync;
  
  opts.depends = deps; 

  const descriptor = () => {
    return {
      fn:getter,
      options: opts,
    };
  };

  // @ts-ignore
  descriptor.__COMPUTED__ = isAsync ? 'async' : 'sync';
  return descriptor //as ComputedDescriptor<R & ExtraAttrs>;
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
 * 生成计算属性的id
 * @param valuePath 
 * @param idArg 
 * @returns 
 */
function getComputedId(valuePath:string[],idArg:ComputedOptions['id']){
  let id = ''
  if(typeof idArg == 'function'){
    id = idArg(valuePath)
  }else if(typeof idArg == 'string' ) {
    id = idArg
  }else{
    id = joinValuePath(valuePath)
  }
  return id 
}
/**
 * 为同步计算属性生成mutate
 * @param stateCtx
 * @param computedParams
 */
function createComputedMutate<Store extends StoreDefine<any>>(stateCtx: ISharedCtx<Store["state"]>, computedParams: IOperateParams,computeObjects:ComputedObjects<Store["state"]>, storeOptions: Required<StoreOptions>) {

  const { fullKeyPath:valuePath, parent,value } = computedParams;
  const { onCreateComputed } = storeOptions;
  let { fn: getter, options: computedOptions }  = value() as ComputedDescriptorParams<any>
  
  // 排除掉所有非own属性,例如valueOf等
  if (parent && !Object.hasOwn(parent, valuePath[valuePath.length - 1])) {
    return;
  }

  // 当创建计算属性前时运行hook，本Hook的目的是允许重新指定computedThis或者重新包装原始计算函数
  if (typeof onCreateComputed == "function" && typeof getter === "function") {
    const newGetter = onCreateComputed.call( stateCtx,valuePath, getter,computedOptions);    
    if(!computedOptions.scope) computedOptions.scope = ComputedScopeRef.Current
    if(!computedOptions.context) computedOptions.context = ComputedScopeRef.Root
    if (typeof newGetter == "function") getter = newGetter;
  }
  const strValuePath = valuePath.join(OBJECT_PATH_DELIMITER)
  storeOptions.log(`Create sync computed: ${strValuePath}`);
  
  const mutateId = getComputedId(valuePath,computedOptions.id)
  
  const mutate = stateCtx.mutate({
    fn: (draft, params) => {
      if(!computedOptions.enable){
        storeOptions.log(`Async computed <${strValuePath}> is disabled`,'warn')
        return 
      }
      storeOptions.log(`Run sync computed for : ${strValuePath}`);
      const { input } = params;
      // 1. 根据配置参数获取计算函数的上下文对象      
      const thisDraft = getComputedRefDraft(draft,{input,computedOptions,computedContext: computedParams,storeOptions,type:"context"})
      const scopeDraft= getComputedRefDraft(draft,{input,computedOptions,computedContext: computedParams,storeOptions,type:"scope"})      
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
    desc: mutateId,
    // 关闭死循环检测，信任开发者
    checkDeadCycle: false,
  });
  computedParams.replaceValue(getVal(mutate.snap, valuePath));
  computeObjects!.set(strValuePath,{
    mutate,
    group:computedOptions.group,
    async:false,
    run:(throwError?)=>mutate.run(throwError)
  })   
}


/** 
 * 创建异步计算属性的数据结构
 * 
*/
function createAsyncComputedObject(stateCtx:any,mutateId:string,valueObj:Partial<AsyncComputedObject>){
  return Object.assign({
    value   : undefined, 
    loading : false,
    timeout : 0,
    retry   : 0,          // 重试次数，3表示最多重试3次
    error   : null,
    progress: 0,
    run     : markRaw(skipComputed((args:Dict) => {
          return stateCtx.runMutateTask({desc:mutateId,extraArgs:args});
        })
    ),
    cancel  : markRaw(skipComputed(() => {
      console.log("cancel")
      // 此命令会取消异步计算，仅在执行时有效。     
    }))
  },valueObj)
}

function setAsyncComputedObject(stateCtx:any,draft:any,resultPath:string[],mutateDesc:string,valueObj:Partial<AsyncComputedObject>){
  const asyncObj = createAsyncComputedObject(stateCtx,mutateDesc,valueObj)
  const reusltValue = getVal(draft,resultPath)
  Object.assign(reusltValue,asyncObj,valueObj)
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
function createComputeProgressbar(setState:any,valuePath:string[],opts?:{max?:number,min?:number,value?:number}):ComputedProgressbar{
  const { max=100, min=0, value=0 } = Object.assign({},opts)
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


function updateAsyncComputedState(setState:any,resultPath:string[],values:Partial<AsyncComputedObject>){
  setState((draft:any) => {
    Object.entries(values).forEach(([key,value])=>{
      setVal(draft, [...resultPath,key], value);  
    })
  });
}

/**
 * 执行异步计算函数的getter方法
 * @param getter 
 * @param scopeDraft 
 * @param options 
 */
async function executeComputedGetter<R>(draft:any,getter:AsyncComputedGetter<R>,options:{computedResultPath:string[], input:any[],setState:any,computedContext: IOperateParams,computedOptions:Required<ComputedOptions>,storeOptions: StoreOptions}){
  const { input, computedOptions, computedContext,storeOptions, computedResultPath, setState} = options;  
  const thisDraft = getComputedRefDraft(draft,{input, computedOptions, computedContext,storeOptions, type:"context"})
  const scopeDraft= getComputedRefDraft(draft,{input, computedOptions, computedContext,storeOptions, type:"scope"})  
  const { fullKeyPath:valuePath } = computedContext;  
  const { timeout=0,retry=[0,0] }  = computedOptions  
  const [retryCount,retryInterval] = Array.isArray(retry) ? retry : [Number(retry),0]

  let timeoutCallback:Function 


  const abortController = new AbortController()
  const computedParams:Required<ComputedParams> ={
    onTimeout:(cb:Function)=>timeoutCallback=cb,
    getProgressbar:(options)=>createComputeProgressbar(setState,valuePath,options),
    getSnap:(scope:any)=>getSnap(scope,false),
    abortSignal:abortController.signal,
    cancel:abortController.abort
  }   
  let hasAbort=false  // 是否接收到可中止信号

  // 配置可中止信号，以便可以取消计算
  updateAsyncComputedState(setState,computedResultPath,{cancel:markRaw(skipComputed(()=>abortController.abort())) as any}) 
  // 侦听中止信号，以便在中止时能停止 
  abortController.signal.addEventListener('abort',()=>{
    hasAbort=true
  })

  for(let i=0;i<retryCount+1;i++){
      
    let timerId:any,countdownId:any,hasError=false,isTimeout=false,isRetry=i>0    
  
    const afterUpdated={} // 保存执行完成后需要更新的内容，以便在最后一次执行后更新状态

    try {      
      // 处理超时参数和倒计时
      let [timeoutValue=0,countdown=0] = Array.isArray(timeout) ? timeout : [timeout,0]
      updateAsyncComputedState(setState,computedResultPath,{loading:true,error:null,retry:i>0 ? retryCount- i : 0,timeout:countdown > 1 ? countdown :timeoutValue,progress:0})
      // 如果有中止信号，则取消计算 
      if(hasAbort){
        throw new Error('Aborted')
      } 
      // 超时处理
      if(timeoutValue>0){        
        timerId = setTimeout(()=>{                    
          isTimeout=true
          if(typeof(timeoutCallback)=='function') timeoutCallback()
          if(!hasError){  
            clearInterval(countdownId)   
            updateAsyncComputedState(setState,computedResultPath,{loading:false,error:"TIMEOUT",timeout:0})            
          }                    
        },timeoutValue)        
        // 启用设置倒计时:  比如timeout= 6*1000, countdown= 6
        if(countdown>1){
          countdownId = setInterval(()=>{
            updateAsyncComputedState(setState,computedResultPath,{timeout:countdown--})    
            if(countdown===0) clearInterval(countdownId)                    
          },timeoutValue/countdown)
        }
      }      
      // 执行计算函数
      const computedResult = await getter.call(thisDraft, scopeDraft,computedParams);
      if(!isTimeout){
        Object.assign(afterUpdated,{result:computedResult,error:null,timeout:0})
      }    
    }catch (e:any) {
      hasError = true
      if (typeof computedOptions.onError == "function") {
        try { computedOptions.onError.call(thisDraft, e)} catch { }
      }
      if(!isTimeout){        
        Object.assign(afterUpdated,{error:getError(e).message,timeout:0})        
      }
      /// 启用重试
      if(retryCount>0){
        Object.assign(afterUpdated,{retry:retryCount- i })        
      }
    } finally {      
      clearTimeout(timerId)
      clearInterval(countdownId)
      // 重试时不更新loading状态
      if(!hasError || (i==retryCount))  Object.assign(afterUpdated,{loading:false})
      if((!hasError && !isTimeout)){
        Object.assign(afterUpdated,{error:null})
      }
      updateAsyncComputedState(setState,computedResultPath,afterUpdated)

    } 
    // 重试延迟
    if(hasError){
      // 最后一次不延迟
      if(retryCount>0 && retryInterval>0 && i<retryCount){
        await delay(retryInterval)
      }
    }
  }
}



/**
 * 为异步计算属性生成mutate
 * @param stateCtx
 * @param computedParams
 */
function createAsyncComputedMutate<Store extends StoreDefine<any>>(stateCtx: ISharedCtx<Store["state"]>,computedParams: IOperateParams,computeObjects:IStore['computedObjects'],storeOptions: Required<StoreOptions>) {
  const { fullKeyPath:valuePath, parent ,value } = computedParams;
  const { onCreateComputed } = storeOptions;

  // 排除掉所有非own属性,例如valueOf等
  if (parent && !Object.hasOwn(parent, valuePath[valuePath.length - 1])) {
    return;
  }
  let { fn: getter, options: computedOptions }  = value() as ComputedDescriptorParams<any>
  computedOptions.async = true; 

 
  // 在创建computed前运行,允许拦截更改计算函数的依赖,上下文,以及getter等
  if (typeof onCreateComputed == "function" && typeof getter === "function") {
    const newGetter = onCreateComputed.call(stateCtx,valuePath, getter, computedOptions);
    if(!computedOptions.scope) computedOptions.scope = ComputedScopeRef.Current
    if(!computedOptions.context) computedOptions.context = ComputedScopeRef.Root
    if (typeof newGetter == "function") getter = newGetter 
  }
  const {depends,initial,toComputedResult='self',immediate,noReentry=false } =computedOptions
  let isMutateRunning = false // 正在运行标志

  // 根据配置读取计算函数的返回值以及状态等 应该更新到哪里
  const computedResultPath:string[] = switchValue(toComputedResult,{
    self:valuePath,
    root: [],
    parent: valuePath.slice(0,valuePath.length-2),
    current: valuePath.slice(0,valuePath.length-1),
    Array:toComputedResult,    // 指定一个数组，表示完整路径
    String:[...valuePath.slice(0,valuePath.length-1),String(toComputedResult).split(OBJECT_PATH_DELIMITER)],
  },{defaultValue:valuePath})    

  const deps = getDeps(depends) //(depends || []).map((deps: any) =>Array.isArray(deps) ? deps : deps.split(OBJECT_PATH_DELIMITER))
  if(deps.length==0){
    storeOptions.log(`async computed <${valuePath.join(".")}> should specify depends`,'warn')
  } 
  const mutateId = getComputedId(valuePath,computedOptions.id)
  const strValuePath = valuePath.join(OBJECT_PATH_DELIMITER)

  storeOptions.log(`Create async computed: ${strValuePath} (depends=${deps.length==0 ? 'None' : joinValuePath(deps)})`);

  const mutate = stateCtx.mutate({ 
    // 依赖是相于对根对象的
    deps: (state: any) =>{
      return getDepValues(deps,state, valuePath)
    },
    fn: (draft, params) => {
      if (params.isFirstCall) {     
        if(toComputedResult=='self'){ // 原地替换
          setVal(draft, valuePath, createAsyncComputedObject(stateCtx, mutateId,{result: initial}))
        }else{  // 更新到其他地方
          setAsyncComputedObject(stateCtx,draft,computedResultPath, mutateId,{result: initial})
          // 删除原始的计算属性
          const p = getVal(draft,valuePath.slice(0,valuePath.length-1))
          delete p[valuePath[valuePath.length-1]]
        }
      }
    },
    //  此函数在依赖变化时执行，用来异步计算
    task: async ({ draft, setState, input, extraArgs }) => {
      if(!computedOptions.enable){
        storeOptions.log(`Async computed <${strValuePath}> is disabled`,'warn')
        return 
      }
      storeOptions.log(`Run async computed for : ${strValuePath}`);
      // 当使用run方法时可以传入参数来覆盖默认的计算函数的配置参数
      const finalComputedOptions = Object.assign({},computedOptions,extraArgs) as Required<ComputedOptions>
      if(noReentry && isMutateRunning && storeOptions.debug) {
        storeOptions.log(`Reentry async computed: ${strValuePath}`,'warn');
        return
      }
      isMutateRunning=true
      try{
        return await executeComputedGetter(draft,getter,{
          input,
          computedResultPath,          
          computedOptions:finalComputedOptions,
          computedContext: computedParams,
          storeOptions,
          setState
        })
      }finally{
        isMutateRunning=false
      }
    },
    immediate,
    desc:mutateId,
    checkDeadCycle: false,
  });
  computedParams.replaceValue(getVal(mutate.snap, valuePath));
  
  computeObjects!.set(strValuePath,{
    mutate,
    group:computedOptions.group,
    async:true,
    run:(throwError?)=>mutate.runTask(throwError)
  })   
}


export function installComputed<Store extends StoreDefine<any>>(options:StoreExtendContext<Store["state"]>) {
  const { stateCtx,params,storeOptions,extendObjects} = options
  const descriptor = params.value
  //@ts-ignore
  if (descriptor.__COMPUTED__=='async') {
    createAsyncComputedMutate<Store>(stateCtx,params,extendObjects.computedObjects, storeOptions);
  //@ts-ignore
  }else if (descriptor.__COMPUTED__=='sync') {
    createComputedMutate<Store>(stateCtx, params,extendObjects.computedObjects!, storeOptions);
  }else if (isAsyncFunction(descriptor)) { // 简单的异步计算函数，没有通过computed函数创建，此时由于没有指定依赖，所以只会执行一次   
      params.value = () => ({
        fn: descriptor,
        options: {
          depends  : [],                    // 未指定依赖
          initial  : undefined,             // 也没有初始化值
          immediate: true,                  // 立即执行
          enable   : true,
          context  : storeOptions.computedThis,  
      },
      });
      createAsyncComputedMutate<Store>(stateCtx,params,extendObjects.computedObjects, storeOptions);
  }else { // 简单的同步计算函数，没有通过computed函数创建
    params.value = () => ({
      fn: descriptor,
      options: {
        initial  : undefined, 
        enable   : true,
        context: storeOptions.computedThis, 
      }
    })
    // 直接声明同步计算函数,使用全局配置的计算上下文
    createComputedMutate<Store>(stateCtx, params, extendObjects.computedObjects!, storeOptions);
  }
}


export interface ComputedObject<T=Dict> extends ComputedOptions{
  mutate:IMutateWitness<T> 
  run:(throwError?:boolean)=>Promise<any> | any
}
 /**
  * 
  */
export class ComputedObjects<T=Dict> extends Map<string,ComputedObject<T>>{
  /**
   * 运行计算函数
   * 
   * run("a/b")  运行指定的计算函数
   * run("@groupName") 运行指定组的计算函数，组名称以'@'开头
   * 
   * @param string 
   * @param 
   * @param string 
   * @param param3 
   */
  async runGroup(group:string){       
      return Promise.all([...this.values()].filter(v=>v.group==group).map(v=> v.async ? v.mutate.runTask() : v.mutate.run()))   
  }
}