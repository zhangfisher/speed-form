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
import { defaultObject } from "flex-tools/object/defaultObject";
import type { FormOptions } from "./form";
import { AsyncComputedObject, AsyncComputedReturns, ComputedParams, ComputedScopeRef, computed } from "helux-store"; 
import { ChangeFieldType, assignObject } from "flex-tools";

export type ActionComputedAttr<R=unknown,Fields=any> = ((fields:Fields)=>R)  
  | ((fields:Fields)=>Promise<R>) 
  | AsyncComputedReturns<R>
  | R  


// 动作声明，供createForm时使用来声明动作
export interface FormAction<Scope extends Dict=Dict>{
    name?:string
    scope?:string | string[] | (()=>string | string[])          // 动作提交范围
	title?:ActionComputedAttr<string,Scope>					    // 动作标题    
    help?:ActionComputedAttr<string,Scope>					    // 动作帮助
    tips?:ActionComputedAttr<string,Scope>					    // 动作提示
 	visible?:ActionComputedAttr<boolean,Scope>					// 是否可见
	enable?:ActionComputedAttr<boolean,Scope>					// 是否可用		
    count?:number                                               // 动作执行计数
    // 动作执行标识，=true代表正在执行，=false代表未在执行,如果=1000代表倒计时1秒，1秒后变成false
    loading?:boolean | number
    error?:string | null                                        // 执行错误信息
    // 执行动作，用来对表单数据进行处理
    execute:(scope:Dict,options?:ComputedParams)=> Promise<void> | void
	[key:string]:ActionComputedAttr<unknown,Scope>			    // 其他可扩展的动作参数
}

export type ffFormAction = ChangeFieldType<FormAction,'execute',any>


function  wrapperActionExecute(action:Required<FormAction>){
    if(typeof(action.execute)!='function') return 

    action.execute = computed(async function (this:any,action:FormAction,options:ComputedParams){
        const formData = this           // 指向的是表单数据对象
        action.loading = true
        try{
            // 读取作用域表单数据
            let scopePath = typeof(action.scope)=="function" ? action.scope() : action.scope
            scopePath = (Array.isArray(action.scope) ? action.scope : (typeof(action.scope) =='string' ? action.scope.split(".") : [])) 
            scopePath.splice(0,0,'fields')
            const scopeValue = getVal(formData.fields,scopePath)

            // 执行动作函数
            await action.execute.call(this,scopeValue,options)
            action.error = null
        }catch(e:any){
            action.error = e.message
        }finally{
            action.loading = false
        }
    },['actions',action.name,'count'],{  
        scope:action.scope,                // 指向scope动作的scope参数指定的表单数据 
        context:ComputedScopeRef.Current
    } )  
}

/**
 * 
 * 初始化表单动作
 * 
 * 
 * 
 * @param data 
 * @returns 
 */
export function initFormActions(actions:FormActions):FormActions{
    
    Object.entries(actions).forEach(([name,action])=>{        
        defaultObject(action,{            
            title:'',
            help:'',
            visible:true,
            enable:true,
            readonly:false,
            count:0, 
            execute:(scope:any)=>Promise.resolve(scope) 
        })
        action.name=name 
        wrapperActionExecute(action as Required<FormAction>)
    })

    return actions

}


// 标准表单提交
export interface StandardSubmitAction<Fields extends Dict=Dict> extends FormAction<Fields>{
	url?:ActionComputedAttr<string,Fields>						    // 提交的URL
    method?:ActionComputedAttr<HttpMethod,Fields>					// 提交的方法
    enctype?:ActionComputedAttr<HttpFormEnctype,Fields>				// 是否包含文件，此表单中的
}

// API提交
export interface ApiSubmitAction<Fields extends Dict=Dict> extends FormAction<Fields>{
	url?:ActionComputedAttr<string,Fields>						// 提交的URL
    method?:ActionComputedAttr<HttpMethod,Fields>		        // 提交的方法
    params?:ActionComputedAttr<Dict,Fields>						// 提交的参数
    data?:ActionComputedAttr<Dict,Fields>						// 提交的Body数据
    headers?:ActionComputedAttr<Dict,Fields>					// 提交的头信息
}

// 表单动作
export type FormActions<Fields extends Dict=Dict> = Record<string,FormAction<Fields>>


export type ActionExecutor<Scope extends Dict = Dict,Params extends Dict = Dict> = (scope:Scope,params:Params)=>void

export type ActionRenderProps<Scope extends Dict = Dict,Params extends Dict = Dict>= FormAction<Scope> &  {
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
        scopePath = ['fields',...Array.isArray(scope) ? scope : String(scope).split(".")]                
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



