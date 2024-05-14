/**
 * 异步计算
 */
import { IOperateParams, ISharedCtx, markRaw, getSnap } from 'helux';
import type { StoreDefine, StoreOptions,  IStore } from "../store";
import { ComputedScopeRef } from "../store"; 
import { skipComputed,  joinValuePath, getError, getDeps, getDepValues,getVal, setVal, getComputedId  } from "../utils";
import { switchValue } from "flex-tools/misc/switchValue"; 
import { Dict } from "../types";
import { delay } from 'flex-tools/async/delay'; 
import { OBJECT_PATH_DELIMITER } from '../consts';
import { getComputedRefDraft } from '../context';
import { AsyncComputedGetter, AsyncComputedObject, ComputedDescriptorParams, ComputedOptions, ComputedParams, ComputedProgressbar, RuntimeComputedOptions } from './types';
import { ComputedObject } from '../computed';
 

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
export  function createAsyncComputedMutate<Store extends StoreDefine<any>>(stateCtx: ISharedCtx<Store["state"]>,computedParams: IOperateParams,computeObjects:IStore['computedObjects'],storeOptions: Required<StoreOptions>) :ComputedObject | undefined{
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
      // extraArgs是在调用run方法时传入的额外参数，可用来覆盖计算参数
      task: async ({ draft, setState, input, extraArgs }) => {
        // 如果额外参数中包含enable=true，则覆盖
        if(!computedOptions.enable && extraArgs?.enable!==true){
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
    computedParams.replaceValue(getVal(stateCtx.state, valuePath));
    // 创建计算对象实例
    const computeObject = {
      id:strValuePath,
      mutate,
      group:computedOptions.group,
      async:true,
      options:computedOptions,
      get enable(){ return computedOptions.enable as boolean },
      set enable(value:boolean){ computedOptions.enable = value },
      run:(options?:RuntimeComputedOptions)=> stateCtx.runMutateTask({desc:mutateId,extraArgs:options})
    }
    computeObjects!.set(strValuePath,computeObject)  
    return  computeObject
  }
  