/**
 * 同步计算
 */
import { StoreDefine } from "../store/types";
import { getComputedId, getVal, setVal  } from "../utils"; 
import { ComputedDescriptorParams, ComputedGetter, ComputedOptions,  ComputedRunContext,  RuntimeComputedOptions } from './types';
import { getComputedScope } from '../context';
import { IStore } from '../store/types';
import { IReactiveReadHookParams } from "../reactives/types";
import { ComputedObject } from "./computedObject";
import { executeStoreHooks } from "./utils";
import { OBJECT_PATH_DELIMITER } from "../consts";




function createComputed<T extends StoreDefine>(computedRunContext:ComputedRunContext,computedOptions:ComputedOptions,store:IStore<T>){
  const { valuePath, id:computedId,desc:computedDesc,resultPath,getter } = computedRunContext
  const { selfReactiveable } = computedOptions

    store.reactiveable.createComputed({
      onComputed:({draft,values,options})=>{
        if(!store.options.enableComputed || (!computedOptions.enable && options?.enable!==true)){
          store.options.log(`Sync computed <${computedDesc}> is disabled`,'warn')
          return 
        }


        store.options.log(`Run sync computed for : ${computedDesc}`); 

        computedRunContext.dependValues = values
        const finalComputedOptions = Object.assign({},computedOptions,options) as Required<ComputedOptions>

        // 1. 根据配置参数获取计算函数的上下文对象      
        const thisDraft = draft 
        const scopeDraft = getComputedScope(store,finalComputedOptions,{draft,dependValues:values,valuePath,computedType:"Computed"} )  

        // 2. 执行getter函数
        let computedResult = computedOptions.initial;
        try {
          computedResult = (getter as ComputedGetter<any>).call(thisDraft,scopeDraft);
          store.emit("computed:done",{ path:valuePath,id: computedId,value:computedResult})
        } catch (e: any) {// 如果执行计算函数出错,则调用        
          store.emit("computed:error", { path:valuePath,id: computedId, error: e })
        }
        // 3. 将getter的返回值替换到状态中的,完成移花接木
        if(selfReactiveable){
          // @ts-ignore
          selfReactiveable.setState((draft:any)=>{ 
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

export  function createComputedMutate<T extends StoreDefine,R=any>(computedParams:IReactiveReadHookParams,store:IStore<T>) :ComputedObject<T> {
    
  // 1. 获取计算属性的描述
  const {path:valuePath, parent,value } = computedParams;       
  // if (parent && !Object.hasOwn(parent, valuePath[valuePath.length - 1])) {
  //   return;         // 排除掉所有非own属性,例如valueOf等
  // }
  // 2. 获取到计算属性描述信息：  包括getter和配置。 此时value是一个函数

  let { getter, options: computedOptions }  = value() as ComputedDescriptorParams<any>    
   
  
    // 2. 运行Hook:  当创建计算属性前时运行hook，本Hook的目的是允许重新指定computedThis或者重新包装原始计算函数
    // 3.运行Hook: 用来在创建computed前运行,允许拦截更改计算函数的依赖,上下文,以及getter等    
    //  运行hook会修改计算配置，所以在hook运行后再读取配置
    executeStoreHooks(valuePath,getter,store,computedOptions)
    const {  selfReactiveable } = computedOptions
    const computedResultPath:string[] =  valuePath 

    // 3. 参数解析:  

    // 计算对象的id和name，name用于打印日志时提供更多信息
    const computedId = getComputedId(valuePath,computedOptions)
    const computedDesc = `${computedId}_${valuePath.join(OBJECT_PATH_DELIMITER)}`
  

    store.options.log(`Create sync computed: ${computedDesc}`);    
    
    const computedRunContext:ComputedRunContext = {
      id             : computedId,
      desc           : computedDesc,
      resultPath     : computedResultPath,
      isComputedRunning: false,
      dependValues   : [],
      valuePath,      
      deps           : [],
      getter
    }    

    createComputed(computedRunContext,computedOptions,store)     

    // 移花接木原地替换
    if(!selfReactiveable) computedParams.replaceValue(getVal(store.state, valuePath));
    
    // 5. 创建计算对象实例
    const computedObject = new ComputedObject<T,R>(store,selfReactiveable,valuePath,computedOptions) 
    if(computedOptions.save) store.computedObjects.set(computedId,computedObject)
    return  computedObject
  }