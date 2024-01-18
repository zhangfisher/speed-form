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


import { ReactNode, useCallback,useState,useEffect, useRef, RefObject, useMemo} from "react";
import { Dict, HttpFormEnctype, HttpMethod } from "./types";
import { getVal } from "@helux/utils";
import React from "react";
import type { FormOptions } from "./form";
import {  AsyncComputedObject, ComputedAsyncReturns, ComputedDepends, ComputedOptions, ComputedParams,  IStore, computed, getValueByPath } from 'helux-store'; 
import { debounce } from './utils';
import { timeout as timeoutWrapper } from "flex-tools/func/timeout";
import { noReentry } from "flex-tools/func/noReentry";
import { omit } from "flex-tools/object/omit"; 

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


export type ActionRunOptions = {
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


// 表单基本属性
export interface FormActionExtra{    
    $action  : true                                  // 是否是动作，用来标识该字段是动作 
    title   : string					            // 动作标题    
    help    : string					            // 动作帮助
    tips    : string					            // 动作提示
    visible : boolean					            // 是否可见
    enable  : boolean					            // 是否可用	            
    validate: boolean
    count   : number
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
	[Name in keyof Actions]: (options?:ActionRunOptions)=>Promise<void>
}

// 动作状态，必须包含一个名称为execute的异步计算属性
export type FormActionState = {
    execute:AsyncComputedObject
} 

function  createFormAction<Scope extends Dict = Dict,Result=any>(name:string,setState:any){       
    return async (options?:ActionRunOptions)=>{
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
    // Object.entries(actionExecutors).forEach(([name,actionExecutor])=>{      
    //     actions[name]= createFormAction.call(store,name,store.setState)
    // })
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
    & Required<Omit<AsyncComputedObject,'run'>> 
    & {
        run:(options?:ActionRunOptions)=>()=>any                                           // 提交表单
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
export type ActionProps<State extends FormActionState=FormActionState,PropTypes extends Dict = Dict,Params extends Dict = Dict> = {
    name:string | string[]              // 声明该动作对应的状态路径
    children: ActionRender<State,Params>  
}    

function useResetAction(valuePath:string[],setState:any){
    return useCallback((updater:(group:any)=>void)=>{
        setState((draft:any)=>{
            updater.call(draft,getVal(draft,valuePath))
        })
    },[])
}

 

function useActionRunner<State extends FormActionState=FormActionState>(actionState:State){
    return useCallback((options?:ActionRunOptions)=>{
        return (ev:any)=>{            
            actionState.execute.run()
            if(typeof(ev.preventDefault)=='function'){
                ev.preventDefault()
            }
        }        
    },[actionState])
}

function createActionRenderProps<State extends FormActionState=FormActionState>(actionState:State,actionRunner:any,ref:RefObject<HTMLElement>){  
    return Object.assign({            
        help       : "",
        title      : "",
        visible    : true,    
        enable     : true
    },
    omit(actionState,"execute"),
    {
        ...actionState.execute,
        run:actionRunner,
        ref,
        
    })
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
    
    // type ActionKeys =Exclude<keyof ActionStates,number | symbol>


    /**
     * State:  指的是动作的对应状态数据，在schema中就是具有execute的一个对象
     * Params: 指的execute的入参，即动作的参数，  execute:(scope:any,{params})=>void,或者form.actions.xxxx.execute:(params)
     * Scope: 当前动作的作用域，用来指定动作作用的表单数据范围,如typeof form.fields.xxx，默认指向form.fields
     * 
     * @param props 
     * @returns 
     */
    function Action<State extends FormActionState=FormActionState,Scope extends Dict=Dict>(props: ActionProps<State,Scope>):ReactNode{
        const [state] = store.useState()  

        const { name:actionKey } = props  

        const actionState = getValueByPath(state,actionKey)
        const actionRunner = useActionRunner(actionState)
        // 用来引用当前动作
        const ref = useRef<HTMLElement>(null)

        // 创建动作组件的Props
        const [renderProps,setActionProps] = useState(()=>createActionRenderProps(actionState,actionRunner,ref))
        useEffect(()=>{
            setActionProps(createActionRenderProps(actionState,actionRunner,ref))
        },[actionKey,actionState])

        // 执行渲染动作组件
        if(props.children){
            if(Array.isArray(props.children)){
                return useMemo(()=>(props.children as any).map((child:any)=>child(renderProps as any)),[renderProps])
            }else{
                return useMemo(()=>props.children(renderProps as any),[renderProps])    
            }            
        }else{
            return
        }
    }
    return React.memo(Action,(oldProps:any, newProps:any)=>{
        return oldProps.name === newProps.name  
    }) as (<State extends FormActionState=FormActionState,Scope extends Dict=Dict>(props: ActionProps<State,Scope>)=>ReactNode)
}
 





// // 标准表单提交
// export interface StandardSubmitAction<Fields extends Dict=Dict> extends FormActionDefine<Fields>{
// 	url?:ActionComputedAttr<string,Fields>						    // 提交的URL
//     method?:ActionComputedAttr<HttpMethod,Fields>					// 提交的方法
//     enctype?:ActionComputedAttr<HttpFormEnctype,Fields>				// 是否包含文件，此表单中的
// }

// // API提交
// export interface ApiSubmitAction<Fields extends Dict=Dict> extends FormActionDefine<Fields>{
// 	url?:ActionComputedAttr<string,Fields>						// 提交的URL
//     method?:ActionComputedAttr<HttpMethod,Fields>		        // 提交的方法
//     params?:ActionComputedAttr<Dict,Fields>						// 提交的参数
//     data?:ActionComputedAttr<Dict,Fields>						// 提交的Body数据
//     headers?:ActionComputedAttr<Dict,Fields>					// 提交的头信息
// }




