/**
 * 
 *   表单动作
 * <Network.Form>
 * 	   <Network.Field name="ssid"></Network.Field>			// 声明字段
 * 	   <Network.Action type="submit" scope="current" params={}>
 *        {({type,title,enable,visible,tips,params,submit,reset,scope})=>{
 * 			retrun <button ref={ref} onClick={submit()}></button>
 *        }}
 *     </Network.Action> 
 * 	   <Network.Action type="reset" scope="current" params={}>
 *        {({type,title,enable,visible,tips,params,submit,reset,scope})=>{
 * 			retrun <button ref={ref} onClick={submit()}></button>
 *        }}
 *     </Network.Action>
 *     <Network.Action type="addOrder" scope="orders.[1]">
 *        {({type,title,enable,visible,tips,params,loading,scope,submit,reset})=>{
 *            当执行submit时会更新runCount值从而触发execute函数的执行
 * 			retrun <button ref={ref} enable={enable} loading={loading} onClick={submit()}></button>
 *        }}
 *     </Network.Action>
 *     // 当scope变化时重新渲染
 *     <Network.Action type="addOrder">
 *        {({type,title,enable,visible,tips,params,submit,reset,scope})=>{
 * 			retrun <button ref={ref} onClick={submit()}></button>
 *        }}
 *     </Network.Action>
* </Network.Form>		
 * 
 * 
 */


import { ReactNode, useCallback,useState,useEffect, useRef, RefObject} from "react";
import { Dict, HttpFormEnctype, HttpMethod } from "./types";
import { getVal } from "@helux/utils";
import React from "react";
import type { FormOptions } from "./form";
import { ComputedAsyncReturns, ComputedParams,  IStore,  watch } from 'helux-store'; 
import { assignObject } from "flex-tools/object/assignObject";
import { FIELDS_STATE_KEY } from "./consts";


export type ActionComputedAttr<R=unknown,Fields=any> = ((fields:Fields)=>R)  
  | ((fields:Fields)=>Promise<R>) 
  | ComputedAsyncReturns<R>
  | R  



// 动作声明，供createForm时使用来声明动作

/**
 * Scope:动作作用域，用来指定动作作用的表单数据范围
 * Result: 动作函数execute执行结果返回值类型
 */
export interface FormActionDefine<Scope extends Dict=Dict,Result =any>{
    scope?  : string | string[] | (()=>string | string[])                   // 动作提交范围
    title?  : ActionComputedAttr<string,Scope>					            // 动作标题    
    help?   : ActionComputedAttr<string,Scope>					            // 动作帮助
    tips?   : ActionComputedAttr<string,Scope>					            // 动作提示
    visible?: ActionComputedAttr<boolean,Scope>					            // 是否可见
    enable? : ActionComputedAttr<boolean,Scope>					            // 是否可用	        
    loading:boolean
    progress:number
    count:number
    error:string | Error
    execute :(scope:any,options?:ComputedParams)=> Promise<void | Result>   // 执行动作，用来对表单数据进行处理
	//[key:string]:ActionComputedAttr<unknown,Scope>			                // 其他可扩展的动作参数
} 

// 经过创建表单后的动作对象,  execute
export type FormAction<T extends FormActionDefine> =ComputedAsyncReturns<{
    [Key in keyof T]: Key extends 'execute' ? never : T[Key]
}>

export type FormActions<T extends FormActionDefines = FormActionDefines> = {
    [Key in keyof T]: FormAction<T[Key]>
}
// 动作
export type ActionRecords<Actions extends Record<string,any>> = {
	[Name in keyof Actions]: Actions[Name]['execute'] extends ((first:any, ...args:infer Rest)=>infer R) ? ((...args:Rest)=>R) : never
                           & Omit<FormActionDefine,'execute'> 
                           & Omit<Actions[Name],'execute'>}


function  createFormAction<Scope extends Dict = Dict,Result=any>(this:IStore,name:string,actionExecutor:FormActionDefine,setState:any){
    // action.execute的执行状态会更新到action.execute.value,action.execute.lading,action.execute.progress中
    // 因此侦听此信息来同步到action中
    watch(()=>{
        setState((state:any)=>{
            const actionState = state.actions[name]
            // const actionM = actionState.execute
            // actionState.loading = executeInfo.loading
            // actionState.progress = executeInfo.progress!
            // actionState.error = executeInfo.error!
        })     
    },()=>[getVal(this.state,["actions",name,"count"])])          
    // 执行动作时传入的额外参数
    return async (params:any)=>{
        // 由于action.execute依赖于count，所以当count++时会触发动作执行        
        setState((state:any)=>state.actions[name].count++)
    }
}


/**
 * 
 * 根据表单中的动作声明生成动作对象
 * 
 * 
 * @param actionStates 经过helux-store计算后的动作声明 
 * @returns 
 */
export function createFormActions<ActionStates extends Dict>(this:IStore,actionExecutors:ActionStates){
    const store = this
    const actions:Dict={}
    Object.entries(actionExecutors).forEach(([name,actionExecutor])=>{      
        actions[name]= createFormAction.call(store,name,actionExecutor,store.setState)
    })
    return actions as ActionRecords<ActionStates>
}
 
// 标准表单提交
export interface StandardSubmitAction<Fields extends Dict=Dict> extends FormActionDefine<Fields>{
	url?:ActionComputedAttr<string,Fields>						    // 提交的URL
    method?:ActionComputedAttr<HttpMethod,Fields>					// 提交的方法
    enctype?:ActionComputedAttr<HttpFormEnctype,Fields>				// 是否包含文件，此表单中的
}

// API提交
export interface ApiSubmitAction<Fields extends Dict=Dict> extends FormActionDefine<Fields>{
	url?:ActionComputedAttr<string,Fields>						// 提交的URL
    method?:ActionComputedAttr<HttpMethod,Fields>		        // 提交的方法
    params?:ActionComputedAttr<Dict,Fields>						// 提交的参数
    data?:ActionComputedAttr<Dict,Fields>						// 提交的Body数据
    headers?:ActionComputedAttr<Dict,Fields>					// 提交的头信息
}

// 表单动作
export type FormActionDefines<Fields extends Dict=Dict> = Record<string,FormActionDefine<Fields>>


export type ActionExecutor<Scope extends Dict = Dict,Params extends Dict = Dict> = (scope:Scope,params:Params)=>void

export type ActionRenderProps<Scope extends Dict = Dict,Params extends Dict = Dict>= FormActionDefine<Scope> &  {
    submit?:()=>void                                        // 提交表单
    reset?:()=>void                                         // 重置表单
    ref: RefObject<HTMLElement>                             // 动作元素引用
} 

export type ActionRender<PropTypes extends Dict,Params extends Dict = Dict>= (props: ActionRenderProps<PropTypes>) => ReactNode

export type ActionProps<PropTypes extends Dict = Dict,Params extends Dict = Dict> = {
    // 动作类型名称
    type:string  
    // 动作作用域
    scope?:string | string[] | (()=>(string | string[]))
    // 当执行动作时用来传递给表单的额外参数
    params?:Dict                       
    children: ActionRender<PropTypes,Params>  
} 
  
export type ActionComponent = React.FC<ActionProps>;
  
function useSubmitAction(valuePath:string[],setState:any){
    return useCallback((updater:(group:any)=>void)=>{
        setState((draft:any)=>{
            updater.call(draft,getVal(draft,valuePath))
        })
    },[])
}

function useResetAction(valuePath:string[],setState:any){
    return useCallback((updater:(group:any)=>void)=>{
        setState((draft:any)=>{
            updater.call(draft,getVal(draft,valuePath))
        })
    },[])
}

function createActionProps(props:any,actionValues:any,executor:Function,ref:RefObject<HTMLElement>){  
    return assignObject({    
        help       : "",
        visible    : true,    
        enable     : true,
        submit    : executor,
        ref
    },props,actionValues)

}

/**
 * 创建动作组件
 * 
 * 
 * 用于创建动作组件，动作组件用于提交表单，重置表单，校验表单以及自定义等操作
 * 
 * @param this 
 * @param store 
 * @returns 
 */
export function createActionComponent(this:Required<FormOptions>,store: any) {
    function Action<Scope extends Dict=Dict,Params extends Dict=Dict>(props: ActionProps<Scope,Params>):ReactNode{
        const [state,setState] = store.useState()  

        const { type,scope = [],params } = props 
        // 处理scope参数，用来读取字段中的数据
        let scopePath = typeof(scope)=="function" ? scope() : scope
        scopePath = [FIELDS_STATE_KEY,...Array.isArray(scope) ? scope : String(scope).split(".")]                
        const fieldScopeValue =scopePath.length==0 ? state : getVal(state,scopePath)


        const actionValue =  getVal(state,['actions',type])

        // 用来指定
        const ref = useRef<HTMLElement>(null)

        // 执行当前动作, 如execute({})
        const submitAction= useSubmitAction(scopePath,setState)

        // 创建动作组件的Props
        const [ActionProps,setActionProps] = useState(()=>createActionProps(props,actionValue,submitAction,ref))
        useEffect(()=>{
            setActionProps(createActionProps(props,actionValue,submitAction,ref))
          },[actionValue,fieldScopeValue,scope,params])
 

        // 执行渲染动作组件
        return  <>{ props.children && props.children(ActionProps as any) }</>

    }
    return React.memo(Action,(oldProps:any, newProps:any)=>{
        return oldProps.type === newProps.type || oldProps.scope === newProps.scope
    }) as (<T extends Dict=Dict>(props: ActionProps<T>)=>ReactNode)
}




