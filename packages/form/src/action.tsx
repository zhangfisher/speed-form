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
import { AsyncComputed, AsyncComputedObject, ComputedAsyncReturns, ComputedParams,  IStore } from 'helux-store'; 
import { assignObject } from "flex-tools/object/assignObject";
import { FIELDS_STATE_KEY } from "./consts";
import { debounce } from './utils';
import { timeout as timeoutWrapper } from "flex-tools/func/timeout";
import { noReentry } from "flex-tools/func/noReentry";


export type ActionComputedAttr<R=unknown,Fields=any> = ((fields:Fields)=>R)  
  | ((fields:Fields)=>Promise<R>) 
  | ComputedAsyncReturns<R>
  | R  


export type DefaultActionRenderProps={
    title  : string
    help   : string
    tips   : string
    visible: boolean
    enable : boolean
    count  :number                                                            
}


export type ActionExecuteOptions = {
    debounce?:number,
    timeout?:number
    noReentry?:boolean
}


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
    count:number
    execute :(scope:any,options?:ComputedParams)=> Promise<void | Result>   // 执行动作，用来对表单数据进行处理
} 

// 经过创建表单后的动作对象,  execute
export type FormAction<T extends FormActionDefine> =ComputedAsyncReturns<{
    [Key in keyof T]: Key extends 'execute' ? never : T[Key]
}>

export type FormActions<T extends FormActionDefines = FormActionDefines> = {
    [Key in keyof T]: FormAction<T[Key]>
}

// 动作记录，即form.actions的类型，不同于from.state.actions
export type ActionRecords<Actions extends Record<string,any>> = {
	[Name in keyof Actions]: (options?:ActionExecuteOptions)=>Promise<void>
}



function  createFormAction<Scope extends Dict = Dict,Result=any>(name:string,setState:any){       
    return async (options?:ActionExecuteOptions)=>{
        // action.execute依赖于scope和count两个属性，当变化时会触发重新执行
        // 由于action.execute依赖于count，所以当count++时会触发动作执行        
        const opts = Object.assign({timeout:0,debounce:0,noReentry:false},options)

        let fn = async ()=> setState((state:any)=>state.actions[name].count++)
        if(opts.noReentry){
            fn = noReentry(fn)
        }  
        if(opts.timeout>0){
            fn = timeoutWrapper(fn,{value:opts.timeout})
        }    
        if(opts.debounce>0){
            fn = debounce(fn,opts.debounce)
        }          
        return await fn()        
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
        actions[name]= createFormAction.call(store,name,store.setState)
    })
    return actions as ActionRecords<ActionStates>
}
 

// 表单动作
export type FormActionDefines<Fields extends Dict=Dict> = Record<string,FormActionDefine<Fields>>

export interface ActionExecutorParams{
    getProgressbar:()=>any
    onTimeout:(timeout:number)=>void
}

export type ActionExecutor<Scope extends Dict = Dict,Params extends Dict = Dict> = ()=>void
export type ActionExecutors = Record<string,ActionExecutor<Dict,Dict>>


export type ActionRenderProps<State extends Dict> = 
    DefaultActionRenderProps 
    & State 
    & Required<AsyncComputedObject> 
    & {
        execute:(options?:ActionExecuteOptions)=>()=>any                                           // 提交表单
        ref: RefObject<HTMLElement>                                            // 动作元素引用
    } 

export type ActionRender<State extends Dict,Params extends Dict = Dict>= (props: ActionRenderProps<State>) => ReactNode


/**
 * 类型定义:
 * State: 表单动作状态类型，即form.state.actions.xxxx的类型
 * PropTypes: 表单动作属性类型，即form.actions.xxxx的类型
 * 
 * 
 */
export type ActionProps<State extends Dict = Dict,PropTypes extends Dict = Dict,Params extends Dict = Dict,ActionKeys extends string = string> = {
    // 动作类型名称
    type:ActionKeys              
    scope?: string | string[]    
    children: ActionRender<State,Params>  
} 
   
  


function useResetAction(valuePath:string[],setState:any){
    return useCallback((updater:(group:any)=>void)=>{
        setState((draft:any)=>{
            updater.call(draft,getVal(draft,valuePath))
        })
    },[])
}

function useActionExecutor(executor:ActionExecutor,props:ActionProps,setState:any){
    // 因为execute依赖scope和count，所以只需要更新scope或者count即可触发动作执行
    return useCallback((options?:ActionExecuteOptions)=>{               
       return createFormAction(props.type,setState)(options)
    },[])
}


function createActionRenderProps(props:ActionProps,store:any,actionState:string,actionExecutor:ActionExecutor,ref:RefObject<HTMLElement>){  
    const [state,setState] = store.useState()  
    const execute= useActionExecutor(actionExecutor,props,setState)
    return assignObject({    
        help       : "",
        visible    : true,    
        enable     : true,
        execute    : execute,
        ref
    },actionState)
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
export function createActionComponent<Store extends Dict = Dict,ActionStates extends Dict = Dict>(store:Store,actionStates:ActionStates,actionExecutors:ActionExecutors,formOptions:Required<FormOptions>,) {
    
    type ActionKeys =Exclude<keyof ActionStates,number | symbol>


    /**
     * ActionState:  指的是动作的状态类型<Action<typeof form.state.actions.xxxx>>
     * Params: 指的execute的入参，即动作的参数，  execute:(scope:any,{params})=>void,或者form.actions.xxxx.execute:(params)
     * Scope: 当前动作的作用域，用来指定动作作用的表单数据范围,如typeof form.fields.xxx，默认指向form.fields
     * 
     * @param props 
     * @returns 
     */
    function Action<Type extends string=string,Params extends Dict=Dict,Scope extends Dict=Dict>(props: ActionProps<Store['state']['actions'][Type],Scope,Params,ActionKeys>):ReactNode{
        const [state,setState] = store.useState()  

        const { type:actionKey,scope } = props  

        const [ actionState ]  = useState(()=>getVal(state,['actions',actionKey]))

        // 用来引用当前动作
        const ref = useRef<HTMLElement>(null)

        // 创建动作组件的Props
        const [renderProps,setActionProps] = useState(()=>createActionRenderProps(props,store,actionState,actionExecutors[actionKey], ref))
        useEffect(()=>{
            setActionProps(createActionRenderProps(props,store,actionState,actionExecutors[actionKey],ref))
        },[actionKey,actionState,scope])
 

        // 执行渲染动作组件
        return  <>{ props.children && props.children(renderProps as any) }</>

    }
    return React.memo(Action,(oldProps:any, newProps:any)=>{
        return oldProps.type === newProps.type || oldProps.scope === newProps.scope
    }) as (<Type extends string=string,Params extends Dict=Dict,Scope extends Dict=Dict>(props: ActionProps<Store['state']['actions'][Type],Scope,Params,ActionKeys>)=>ReactNode)
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
