/**
 * 
 * 用来获取状态中的的函数属性的
 * 
 * 1. 上下文Context  : 即函数的this指向
 * 2. 作用域Scope    : 即函数的第一个参数
 * 
 * 按照设计这两个参数均可以进行配置，
 * 
 * 以computed为例，
 * 
 * 1. context参数可以在全局Store中通过computedThis参数指定
 * 2. 也可以在computed(fn,{context})函数中指定
 * 
 * computed配置的context优先级高于store配置的context
 * 
 * scope参数的配置方式与context一致
 * 
 * 
 *  watch函数的使用方式与computed类似，使用相同的逻辑
 * 
 */
import { IOperateParams } from "helux";
import { OBJECT_PATH_DELIMITER } from "./consts";
import { type ComputedScope, ComputedScopeRef, StoreOptions, StoreDefine, IStore } from "./store/types";
import { getValueByPath } from "./utils";
import { ComputedOptions, IComputeParams, StateComputedType } from "./computed/types";
import { ComputedRunContext } from "./computed/async";

/*
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
function getContextOptions(state: any,computedCtxOption?: ComputedScope,storeCtxOption?: ComputedScope) {
 let ctx = computedCtxOption == undefined ? storeCtxOption : computedCtxOption;
 if (typeof ctx == "function") {
   try { ctx = ctx.call(state, state) } catch { }
 }
 return ctx == undefined ? (storeCtxOption == undefined ? ComputedScopeRef.Root: storeCtxOption) : ctx;
}

export type GetComputedContextOptions<T extends StoreDefine =StoreDefine> ={
    type:'context' | 'scope',                   // 要获取的是什么: context或scope
    computedType:StateComputedType,         // 取值， 'Computed' | 'Watch 
    input:any[],                                // 当前计算函数依赖值，或watch的侦听的值
    valuePath:string[],
    funcOptions: {                             // computed或者watch的配置参数
        context?:any,
        scope?:any
    }, 
    storeOptions: StoreOptions<T>                // 全局Store配置参数
}
/**
 * 
 * 获取状态中函数的上下文Context或作用域Scope
 * 
 * @param draft 
 * @param params 
 * @returns 
 */
export function getComputedContext<T extends StoreDefine = StoreDefine>(draft: any,params:GetComputedContextOptions<T>) {

    const { input:depends, type, valuePath, funcOptions, storeOptions,computedType } = params;
  
    let rootDraft = draft;
  
    // 1. 执行hook，允许可以修改计算函数的根上下文以及相关配置参数
    if (typeof storeOptions.onComputedContext == "function") {
      const newDraft = storeOptions.onComputedContext.call(draft,draft,{computedType,contextType:type,valuePath});
      if (newDraft !== undefined) {
        rootDraft = newDraft;
      }
    }
    const parentPath = valuePath.length>=1 ? valuePath.slice(0, valuePath.length - 1) : [];

   // 2. 读取计算函数的上下文配置参数
   const contexRef = getContextOptions(draft, 
        type=='context' ? funcOptions.context : funcOptions.scope,
        type=='context' ? (storeOptions.computedThis && storeOptions.computedThis(computedType)) : (storeOptions.computedScope && storeOptions.computedScope(computedType))
   )
  
    // 3. 根据配置参数获取计算函数的上下文对象
    try { 
      if(contexRef === ComputedScopeRef.Current) {
          return getValueByPath(draft, parentPath);
      }else if (contexRef === ComputedScopeRef.Parent) {
        return getValueByPath(draft,valuePath.slice(0, valuePath.length - 2));
      }else if (contexRef === ComputedScopeRef.Root) {
          return rootDraft;
      }else if (contexRef === ComputedScopeRef.Depends) {      // 异步计算的依赖值      
        return Array.isArray(depends) ? depends.map(dep=>typeof(dep)=='function' ? dep() : dep) : [];
      }else if (typeof contexRef == "string") {               // 当前对象的指定键      
        return getValueByPath(draft, [...parentPath, ...contexRef.split(OBJECT_PATH_DELIMITER)]);
      }else if (Array.isArray(contexRef)) {                   // 从根对象开始的完整路径
        if(contexRef.length>0 && contexRef[0].startsWith("@")){
          const finalKeys = getValueByPath(draft, [...contexRef[0].substring(1).split(OBJECT_PATH_DELIMITER),...contexRef.slice(1)]);
          return getValueByPath(draft,finalKeys);
        }else{
          return getValueByPath(draft, contexRef);
        }      
      }else if (typeof contexRef == "number") {
        const endIndex = contexRef > valuePath.length - 2 ? valuePath.length - contexRef - 1 : 0;
        return getValueByPath(draft, valuePath.slice(0, endIndex));
      }else {
        return draft;
      }
    }catch (e) {
          return draft;
    }
  }

  /**

 * 
 * 根据当前计算函数的信息和配置参数获取计算函数的上下文或作用域
 * 
 * @param draft 
 * @param params 
 * @returns 
 */
export function getComputedRefDraft<T extends StoreDefine>(store:IStore<T>,draft: any,computedRunContext:ComputedRunContext,computedOptions: ComputedOptions,type:'context' | 'scope') {    
  const { valuePath,dependValues } = computedRunContext
  return getComputedContext(draft,{
    input:dependValues,
    type,
    valuePath,
    funcOptions:computedOptions,
    storeOptions:store.options,
    computedType:'Computed'
  })
}
 

export function getComputedScopeDraft<T extends StoreDefine>(store:IStore<T>,draft: any,computedRunContext:ComputedRunContext,computedOptions: ComputedOptions) {    
  return getComputedRefDraft(store,draft,computedRunContext,computedOptions,'scope')
}
export function getComputedContextDraft<T extends StoreDefine>(store:IStore<T>,draft: any,computedRunContext:ComputedRunContext,computedOptions: ComputedOptions) {    
  return getComputedRefDraft(store,draft,computedRunContext,computedOptions,'context')
}