/**
 * 
 * 异步计算
 * 
 * 
 * 
 * 
 * 
 */
import { markRaw, getSnap,  } from 'helux';
import type { StoreDefine,   IStore } from "../store/types";
import { skipComputed,  joinValuePath, getError, normalizeDeps, getDepValues,getVal, setVal, getComputedId  } from "../utils";
import { switchValue } from "flex-tools/misc/switchValue"; 
import { Dict  } from "../types";
import { delay } from 'flex-tools/async/delay'; 
import { OBJECT_PATH_DELIMITER } from '../consts';
import { getComputedScopeDraft } from '../context';
import {  AsyncComputedObject,  ComputedOptions, ComputedParams, ComputedProgressbar } from './types';
import type  { ComputedDescriptor, ComputedRunContext } from './types';
import { IReactiveReadHookParams } from '../reactives/types';
import { ComputedObject } from './computedObject';
import { executeStoreHooks } from './utils';

 
/** 
 * 创建异步计算属性的数据结构
 * 
*/
export function createAsyncComputedObject<T extends Dict=Dict>(store:IStore<T>,mutateId:string,valueObj:Partial<AsyncComputedObject>){
    return Object.assign({
      loading : false,
      timeout : 0,
      retry   : 0,          // 重试次数，3表示最多重试3次
      error   : null,
      result  : undefined,
      progress: 0,
      run     : markRaw(skipComputed((args:Dict) => {
                  return store.reactiveable.runComputed(mutateId,Object.assign({},args));
                })),
      cancel  : markRaw(skipComputed(() => {
        console.log("cancel")       // 此命令会取消异步计算，仅在执行时有效。     
      }))
    },valueObj)
  }
  

export function setAsyncComputedObject<T extends Dict=Dict>(store:IStore<T>,draft:any,resultPath:string[],mutateId:string,valueObj:Partial<AsyncComputedObject>){
    const asyncObj = createAsyncComputedObject(store,mutateId,valueObj)
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
async function executeComputedGetter<T extends StoreDefine>(draft:any,computedRunContext:ComputedRunContext,computedOptions:ComputedOptions,store:IStore<T>){
   
    const { valuePath,getter,resultPath } = computedRunContext;  
    const { timeout=0,retry=[0,0],selfState }  = computedOptions  
    const setState  = selfState ? selfState.setState : store.setState
    // 
    const thisDraft = selfState ? selfState: draft
    const scopeDraft = selfState ? draft : getComputedScopeDraft(store,draft,computedRunContext, computedOptions)  

     
    const [retryCount,retryInterval] = Array.isArray(retry) ? retry : [Number(retry),0]
  
    let timeoutCallback:Function 
  
  
    const abortController = new AbortController()
    const computedParams:Required<ComputedParams> ={
      onTimeout     : (cb:Function)=>timeoutCallback=cb,
      getProgressbar: (options)=>createComputeProgressbar(setState,valuePath,options),
      getSnap       : (scope:any)=>getSnap(scope,false),
      abortSignal   : abortController.signal,
      cancel        : abortController.abort
    }   
    let hasAbort=false  // 是否接收到可中止信号
  
    // 配置可中止信号，以便可以取消计算
    updateAsyncComputedState(setState,resultPath,{cancel:markRaw(skipComputed(()=>abortController.abort())) as any}) 
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
        updateAsyncComputedState(setState,resultPath,{loading:true,error:null,retry:i>0 ? retryCount- i : 0,timeout:countdown > 1 ? countdown :timeoutValue,progress:0})
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
              updateAsyncComputedState(setState,resultPath,{loading:false,error:"TIMEOUT",timeout:0})            
            }                    
          },timeoutValue)        
          // 启用设置倒计时:  比如timeout= 6*1000, countdown= 6
          if(countdown>1){
            countdownId = setInterval(()=>{
              updateAsyncComputedState(setState,resultPath,{timeout:countdown--})    
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
        updateAsyncComputedState(setState,resultPath,afterUpdated)
  
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

  

function createComputed<T extends StoreDefine>(computedRunContext:ComputedRunContext,computedOptions:ComputedOptions,store:IStore<T>){
  const { valuePath, id:mutateId,deps,name:mutateName,resultPath,isMutateRunning,getter } = computedRunContext
  const { toComputedResult,selfState,initial,noReentry } = computedOptions

  store.reactiveable.createAsyncComputed({
    // 指定依赖
    depends:(draft)=>getDepValues(deps,draft, valuePath),
    // 初始化计算函数
    initial:(draft)=>{
      if(selfState){
        // @ts-ignore
        selfState.setState((draft)=>{
          Object.assign(draft,createAsyncComputedObject(store,mutateId,{result: initial}))
        })
      }else{
        if(toComputedResult=='self'){ // 原地替换
          setVal(draft, valuePath, createAsyncComputedObject(store, mutateId,{result: initial}))
        }else{  // 更新到其他地方
          setAsyncComputedObject(store,draft,resultPath, mutateId,{result: initial})
          // 删除原始的计算属性
          const p = getVal(draft,valuePath.slice(0,valuePath.length-1))
          delete p[valuePath[valuePath.length-1]]
        }
      }          
    },
    onComputed:async ({draft,values,options})=>{
      if(!computedOptions.enable && options?.enable!==true){
        store.options.log(`Async computed <${mutateName}> is disabled`,'warn')
        return 
      }
      store.options.log(`Run async computed for : ${mutateName}`);

      const finalComputedOptions = Object.assign({},computedOptions,options) as Required<ComputedOptions>
      if(noReentry && isMutateRunning && store.options.debug) {
        store.options.log(`Reentry async computed: ${mutateName}`,'warn');
        return
      }
      computedRunContext.isMutateRunning=true
      computedRunContext.dependValues = values        // 即所依赖项的值
      try{
        const r= await executeComputedGetter(draft,computedRunContext,finalComputedOptions,store)
        store.emit("computed",{path:valuePath,id:mutateId})
        return r
      }finally{
        computedRunContext.isMutateRunning=false
      }
    },
    options:computedOptions
  })  
}


/**
 * 
 * 返回计算属性的目标路径
 * 
 * 即计算结果要写到目标state中的哪一个位置
 * 
 * 计算目标
 * 
 * @param computedParams 
 * @param computedOptions 
 * @returns 
 */
function getComputedTargetPath(computedParams:IReactiveReadHookParams,computedOptions:ComputedOptions){
  const { path:valuePath } = computedParams;
  const {selfState,toComputedResult='self' } = computedOptions
  
  // 如果指定了selfState,即计算结果要写到外部状态中
  return selfState ? [valuePath ] : switchValue(toComputedResult,{
    self   : valuePath,
    root   : [],
    parent : valuePath.slice(0,valuePath.length-2),
    current: valuePath.slice(0,valuePath.length-1),
    Array  : toComputedResult,    // 指定一个数组，表示完整路径
    String : [...valuePath.slice(0,valuePath.length-1),String(toComputedResult).split(OBJECT_PATH_DELIMITER)],
  },{defaultValue:valuePath})    

}

  

/**
 * 为异步计算属性生成mutate
 * @param stateCtx
 * @param params
 */
export  function createAsyncComputedMutate<T extends StoreDefine>(computedParams:IReactiveReadHookParams,store:IStore<T>) :ComputedObject<T> | undefined{
    
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
    //  运行hook会修改计算配置，所以在hook运行后再读取配置
    executeStoreHooks(valuePath,getter,store,computedOptions)

    // 4. 读取解构计算参数：   由于hook可能会修改计算配置，所以在hook运行后再读取配置
    const { depends =[], selfState } = computedOptions

    // 5. 解析计算目标路径：  即计算函数的返回值到更新到哪里
    const computedResultPath:string[] = getComputedTargetPath(computedParams,computedOptions)
  
    // 6. 解析依赖参数 
    if(depends.length==0){
      store.options.log(`async computed <${valuePath.join(".")}> should specify depends`,'warn')
    }
    // 计算对象的id和name，name用于显示
    const mutateId = computedOptions.id || getComputedId(valuePath,computedOptions.id)
    const mutateName =selfState ? mutateId : valuePath.join(OBJECT_PATH_DELIMITER)
  
    store.options.log(`Create async computed: ${mutateName} (depends=${depends.length==0 ? 'None' : joinValuePath(depends)})`);
    
    // 7. 创建mutate
    const computedRunContext:ComputedRunContext = {
      id             : computedOptions.id || getComputedId(valuePath,computedOptions.id),
      name           : selfState ? mutateId : valuePath.join(OBJECT_PATH_DELIMITER),
      resultPath     : computedResultPath,
      isMutateRunning: false,
      dependValues   : [],
      valuePath,      
      deps:depends,
      getter
    }    
    createComputed(computedRunContext,computedOptions,store)     
    // 移花接木原地替换
    if(!selfState) computedParams.replaceValue(getVal(store.state, valuePath));

    // 8. 创建计算对象实例
    const computedObject = new ComputedObject<T>(store,selfState,computedOptions) 
    store.computedObjects.set(mutateId,computedObject)  
    return  computedObject
  }
  