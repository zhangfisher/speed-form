/**
 * 异步计算
 */
import { markRaw, getSnap,  } from 'helux';
import type { StoreDefine,   IStore } from "../store/types";
import { ComputedScopeRef } from "../store/types";
import { skipComputed,  joinValuePath, getError, getDeps, getDepValues,getVal, setVal, getComputedId  } from "../utils";
import { switchValue } from "flex-tools/misc/switchValue"; 
import { Dict  } from "../types";
import { delay } from 'flex-tools/async/delay'; 
import { OBJECT_PATH_DELIMITER } from '../consts';
import { getComputedRefDraft } from '../context';
import { AsyncComputedGetter, AsyncComputedObject,  ComputedOptions, ComputedParams, ComputedProgressbar, RuntimeComputedOptions } from './types';
import type  { ComputedDescriptor, ComputedObject,  ComputedTarget, IComputeParams } from './types';
import { IReactiveReadHookParams } from '../reactives/types';


/** 
 * 创建异步计算属性的数据结构
 * 
*/
export function createAsyncComputedObject(stateCtx:any,mutateId:string,valueObj:Partial<AsyncComputedObject>){
    return Object.assign({
      // value   : undefined,  
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
        console.log("cancel")       // 此命令会取消异步计算，仅在执行时有效。     
      }))
    },valueObj)
  }
  
export function setAsyncComputedObject(stateCtx:any,draft:any,resultPath:string[],mutateDesc:string,valueObj:Partial<AsyncComputedObject>){
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
  async function executeComputedGetter<T extends StoreDefine,R>(this:IStore<T>,draft:any,getter:AsyncComputedGetter<R>,options:{computedResultPath:string[], input:any[],setState:any,computedContext: IComputeParams,computedOptions:ComputedOptions},computedTarget?:ComputedTarget<T>){
    
    const { input, computedOptions, computedContext, computedResultPath} = options;  

    const isExternal= computedTarget!==undefined

    const setState  = isExternal ? computedTarget.stateCtx.setState : options.setState

    const thisDraft =isExternal ? draft : getComputedRefDraft.call<IStore<T>,any[],any>(this,draft,{input, computedOptions, computedContext, type:"context"})
    const scopeDraft=isExternal ? draft : getComputedRefDraft.call<IStore<T>,any,any>(this,draft,{input, computedOptions, computedContext, type:"scope"})  

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
   * @param params
   */
export  function createAsyncComputedMutate<T extends StoreDefine>(computedParams:IReactiveReadHookParams,store:IStore<T>,computedTo?:ComputedTarget) :ComputedObject<T> | undefined{
    
    // 1. 参数检查
    const { path:valuePath, parent ,value } = computedParams;
    // 排除掉所有非own属性,例如valueOf等
    if (parent && !Object.hasOwn(parent, valuePath[valuePath.length - 1])) {
      return;
    }

    // 2. 获取到计算属性描述信息：  包括getter和配置。 此时value是一个函数
    let { getter, options: computedOptions }  = value() as ComputedDescriptor<any>
    computedOptions.async = true; 
   
    // 3.运行Hook: 用来在创建computed前运行,允许拦截更改计算函数的依赖,上下文,以及getter等    
    const { onCreateComputed } = store.options; 
    if (typeof onCreateComputed == "function" && typeof getter === "function") {
      const newGetter = onCreateComputed.call(store,valuePath, getter, computedOptions);
      if(!computedOptions.scope) computedOptions.scope = ComputedScopeRef.Current
      if(!computedOptions.context) computedOptions.context = ComputedScopeRef.Root
      if (typeof newGetter == "function") getter = newGetter 
    }

    // 4. 读取解构计算参数：   由于hook可能会修改计算配置，所以在hook运行后再读取配置
    const {depends =[],initial,toComputedResult='self',immediate,noReentry=false } = computedOptions
    let isMutateRunning = false // 正在运行标志
  
    // 当传入computedTarget时，代表计算结果要更新外部对象中
    const isExternal= computedTo!==undefined

    // 5. 解析计算目标路径：  根据配置读取计算函数的返回值以及状态等 应该更新到哪里
    //                      如果是外部计算属性，则不需要指定路径，否则会根据配置的toComputedResult来决定
    const computedResultPath:string[] = isExternal ? [] : switchValue(toComputedResult,{
      self:valuePath,
      root: [],
      parent: valuePath.slice(0,valuePath.length-2),
      current: valuePath.slice(0,valuePath.length-1),
      Array:toComputedResult,    // 指定一个数组，表示完整路径
      String:[...valuePath.slice(0,valuePath.length-1),String(toComputedResult).split(OBJECT_PATH_DELIMITER)],
    },{defaultValue:valuePath})    
  
    // 6. 解析依赖参数 
    const deps = getDeps(depends) //(depends || []).map((deps: any) =>Array.isArray(deps) ? deps : deps.split(OBJECT_PATH_DELIMITER))
    if(deps.length==0){
      store.options.log(`async computed <${valuePath.join(".")}> should specify depends`,'warn')
    }
    const mutateId = isExternal ? computedOptions.id as string :  getComputedId(valuePath,computedOptions.id)
    const mutateName =isExternal ? mutateId : valuePath.join(OBJECT_PATH_DELIMITER)
  
    store.options.log(`Create async computed: ${mutateName} (depends=${deps.length==0 ? 'None' : joinValuePath(deps)})`);
    
    // 7. 创建mutate

    const mutateObject = store.reactiveable.createComputed({
      // 指定依赖
      depends:(draft)=>getDepValues(deps,draft, valuePath),
      // 初始化计算函数
      initial:(draft)=>{
        if(isExternal){
          // @ts-ignore
          computedTo.stateCtx.setState((draft)=>{
            Object.assign(draft,createAsyncComputedObject(computedTo.stateCtx,mutateId,{result: initial}))
          })
        }else{
          if(toComputedResult=='self'){ // 原地替换
            setVal(draft, valuePath, createAsyncComputedObject(store.stateCtx, mutateId,{result: initial}))
          }else{  // 更新到其他地方
            setAsyncComputedObject(store.stateCtx,draft,computedResultPath, mutateId,{result: initial})
            // 删除原始的计算属性
            const p = getVal(draft,valuePath.slice(0,valuePath.length-1))
            delete p[valuePath[valuePath.length-1]]
          }
        }          
      },
      onComputed:async ({draft,setState,input,options})=>{
        if(!computedOptions.enable && input?.enable!==true){
          store.options.log(`Async computed <${mutateName}> is disabled`,'warn')
          return 
        }
        store.options.log(`Run async computed for : ${mutateName}`);
        const finalComputedOptions = Object.assign({},computedOptions,input) as Required<ComputedOptions>
        if(noReentry && isMutateRunning && store.options.debug) {
          store.options.log(`Reentry async computed: ${mutateName}`,'warn');
          return
        }
        isMutateRunning=true
        try{
          return await executeComputedGetter.call<IStore<T>,any[],any>(store,draft,getter,{
            input,
            computedResultPath,          
            computedOptions:finalComputedOptions,
            computedContext: computedParams, 
            setState
          },computedTo)
        }finally{
          isMutateRunning=false
        }
      },
      getter:()=>{},
      options:computedOptions
    })  

    const mutate =store.stateCtx.mutate({ 
      // 依赖是相于对根对象的
      deps: (state: any) =>{
        return getDepValues(deps,state, valuePath)
      },
      fn: (draft, params) => {
        if (params.isFirstCall) {     
          if(isExternal){
            // @ts-ignore
            computedTo.stateCtx.setState((draft)=>{
              Object.assign(draft,createAsyncComputedObject(computedTo.stateCtx,mutateId,{result: initial}))
            })
          }else{
            if(toComputedResult=='self'){ // 原地替换
              setVal(draft, valuePath, createAsyncComputedObject(store.stateCtx, mutateId,{result: initial}))
            }else{  // 更新到其他地方
              setAsyncComputedObject(store.stateCtx,draft,computedResultPath, mutateId,{result: initial})
              // 删除原始的计算属性
              const p = getVal(draft,valuePath.slice(0,valuePath.length-1))
              delete p[valuePath[valuePath.length-1]]
            }
          }          
        }
      },
      //  此函数在依赖变化时执行，用来异步计算
      // extraArgs是在调用run方法时传入的额外参数，可用来覆盖计算参数
      task: async ({ draft, setState, input, extraArgs }) => {
        // 如果额外参数中包含enable=true，则覆盖
        if(!computedOptions.enable && extraArgs?.enable!==true){
          store.options.log(`Async computed <${mutateName}> is disabled`,'warn')
          return 
        }
        store.options.log(`Run async computed for : ${mutateName}`);
        // 当使用run方法时可以传入参数来覆盖默认的计算函数的配置参数
        const finalComputedOptions = Object.assign({},computedOptions,extraArgs) as Required<ComputedOptions>
        if(noReentry && isMutateRunning && store.options.debug) {
          store.options.log(`Reentry async computed: ${mutateName}`,'warn');
          return
        }
        isMutateRunning=true
        try{
          return await executeComputedGetter.call<IStore<T>,any[],any>(store,draft,getter,{
            input,
            computedResultPath,          
            computedOptions:finalComputedOptions,
            computedContext: computedParams, 
            setState
          },computedTo)
        }finally{
          isMutateRunning=false
        }
      },
      immediate,
      desc:mutateId,
      checkDeadCycle: false,
    });
    // 移花接木原地替换
    if(!isExternal) computedParams.replaceValue(getVal(store.stateCtx.state, valuePath));
    // 创建计算对象实例
    const computedObject = {
      id     : mutateName,
      mutate,
      group  : computedOptions.group,
      async  : true,
      options: computedOptions,
      get enable(){ return computedOptions.enable as boolean },
      set enable(value:boolean){ computedOptions.enable = value },
      run:(options?:RuntimeComputedOptions)=> {
        const params = {desc:mutateId,extraArgs:options}
        return isExternal ? computedTo.stateCtx.runMutateTask(params) : store.stateCtx.runMutateTask(params)
      }
    }
    store.computedObjects.set(mutateName,computedObject)  
    return  computedObject
  }
  