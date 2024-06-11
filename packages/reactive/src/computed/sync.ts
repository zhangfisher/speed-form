/**
 * 同步计算
 */
import { StoreDefine } from "../store/types";
import { getComputedId, getVal, setVal  } from "../utils"; 
import { ComputedDescriptorParams, ComputedGetter, ComputedOptions,  ComputedRunContext,  RuntimeComputedOptions } from './types';
import { getComputedScopeDraft } from '../context';
import { IStore } from '../store/types';
import { IReactiveReadHookParams } from "../reactives/types";
import { ComputedObject } from "./computedObject";
import { executeStoreHooks, getComputedTargetPath, getMutateId } from "./utils";
import { OBJECT_PATH_DELIMITER } from "../consts";




function createComputed<T extends StoreDefine>(computedRunContext:ComputedRunContext,computedOptions:ComputedOptions,store:IStore<T>){
  const { valuePath, id:mutateId,name:mutateName,resultPath,getter } = computedRunContext
  const { selfState } = computedOptions

    store.reactiveable.createComputed({
      onComputed:({draft,values})=>{
        if(!computedOptions.enable){
          store.options.log(`Sync computed <${mutateName}> is disabled`,'warn')
          return 
        }
        store.options.log(`Run sync computed for : ${mutateName}`); 

        computedRunContext.dependValues = values
 
        // 1. 根据配置参数获取计算函数的上下文对象      
        const thisDraft = selfState ? selfState :  draft
        const scopeDraft = selfState ? draft : getComputedScopeDraft(store,draft,computedRunContext, computedOptions)  
         
        // 2. 执行getter函数
        let computedResult = computedOptions.initial;
        try {
          computedResult = (getter as ComputedGetter<any>).call(thisDraft,scopeDraft);
        } catch (e: any) {// 如果执行计算函数出错,则调用        
          if (typeof computedOptions.onError === "function") {
            try {
              computedOptions.onError?.call(thisDraft, e);
            } catch { }
          }
        }
        // 3. 将getter的返回值替换到状态中的,完成移花接木
        if(selfState){
          // @ts-ignore
          selfState.setState((draft:any)=>{ 
            setVal(draft, resultPath, computedResult);
          })
        }else{
          setVal(draft, resultPath, computedResult);
        }        
      },
      options: computedOptions,
    }); 

}

/**
 * 为同步计算属性生成mutate
 * @param stateCtx
 * @param computedParams
 */

export  function createComputedMutate<T extends StoreDefine>(computedParams:IReactiveReadHookParams,store:IStore<T>) :ComputedObject<T> | undefined{
    
  // 1. 获取计算属性的描述
  const {path:valuePath, parent,value } = computedParams;       
  if (parent && !Object.hasOwn(parent, valuePath[valuePath.length - 1])) {
    return;         // 排除掉所有非own属性,例如valueOf等
  }
  // 2. 获取到计算属性描述信息：  包括getter和配置。 此时value是一个函数

  let { getter, options: computedOptions }  = value() as ComputedDescriptorParams<any>    
   
  
    // 2. 运行Hook:  当创建计算属性前时运行hook，本Hook的目的是允许重新指定computedThis或者重新包装原始计算函数
    // 3.运行Hook: 用来在创建computed前运行,允许拦截更改计算函数的依赖,上下文,以及getter等    
    //  运行hook会修改计算配置，所以在hook运行后再读取配置
    executeStoreHooks(valuePath,getter,store,computedOptions)
    const {  selfState } = computedOptions
    const computedResultPath:string[] = getComputedTargetPath(computedParams,computedOptions)

    // 3. 参数解析:  

    const [mutateId,mutateName] = getMutateId(valuePath,computedOptions)

    store.options.log(`Create sync computed: ${mutateName}`);    
    
    const computedRunContext:ComputedRunContext = {
      id             : computedOptions.id || getComputedId(valuePath,computedOptions.id),
      name           : selfState ? mutateId : valuePath.join(OBJECT_PATH_DELIMITER),
      resultPath     : computedResultPath,
      isMutateRunning: false,
      dependValues   : [],
      valuePath,      
      deps           : [],
      getter
    }    

    createComputed(computedRunContext,computedOptions,store)     

    // 移花接木原地替换
    if(!selfState) computedParams.replaceValue(getVal(store.state, valuePath));
    
    // 5. 创建计算对象实例
    // const computedObject = {      
    //   id:mutateName,
    //   mutate,
    //   group:computedOptions.group,
    //   async:false,
    //   options:computedOptions,
    //   get enable(){return computedOptions.enable as boolean},
    //   set enable(val:boolean){computedOptions.enable=val},
    //   run:(options?:RuntimeComputedOptions)=>{
    //     const params = {desc:mutateId,extraArgs:options}
    //     return isExternal ? computedTo.stateCtx.runMutateTask(params) : store.stateCtx.runMutateTask(params)
    //   }
    // }
    const computedObject = new ComputedObject<T>(store,selfState,valuePath,computedOptions) 

    store.computedObjects.set(mutateName,computedObject)   
    return  computedObject
  }