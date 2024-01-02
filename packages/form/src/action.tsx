/**
 * 
 *   表单动作
 * <Network.Form<typeof Network.wifi> scope="wifi">
 * 	   <Network.Field name="ssid"></Network.Field>			// 声明字段
 *  //  自定义渲染
 * 	   <Network.Action type="submit" params={}>
 *        {({type,title,enable,visible,ref,tips,params})=>{
 * 			retrun <button ref={ref} onClick={execute((scope,params)=>{})}></button>
 *        }}
 *     </Network.Action>
 *  // 默认渲染*      
 *      <Network.Action type="submit" scope="current" params={}/>
 * 
 * </Network.Form>			// 声明子表单
 * 
 * 
 */


import { ReactNode, useCallback,useState,useEffect, useRef, RefObject} from "react";
import { Dict, HttpFormEnctype, HttpMethod } from "./types";
import { getVal } from "@helux/utils";
import React from "react";
import { assignObject } from "flex-tools/object/assignObject";
import type { FormOptions } from "./form";
import { AsyncComputedObject, AsyncComputedReturns } from "helux-store";
import { Element } from "./element"

export type ActionComputedAttr<R=unknown,Fields=any> = ((fields:Fields)=>R)  
  | ((fields:Fields)=>Promise<R>)
  | AsyncComputedObject<R>
  | AsyncComputedReturns<R>
  | R  


// 动作声明，供createForm时使用来声明动作
export interface FormAction<Scope extends Dict=Dict,Params extends Dict=Dict>{
	title?:ActionComputedAttr<string,Scope>					    // 动作标题
    help?:ActionComputedAttr<string,Scope>					    // 动作帮助
    tips?:ActionComputedAttr<string,Scope>					    // 动作提示
 	visible?:ActionComputedAttr<boolean,Scope>					// 是否可见
	enable?:ActionComputedAttr<boolean,Scope>					// 是否可用		
    params?:Params                                              // 额外参数
	[key:string]:ActionComputedAttr<unknown,Scope>			    // 其他可扩展的动作参数
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
export type FormActions<Fields extends Dict=Dict> = Record<string,FormAction<Fields> | StandardSubmitAction<Fields> | ApiSubmitAction<Fields>>


export type ActionExecutor<Scope extends Dict = Dict,Params extends Dict = Dict> = (scope:Scope,params:Params)=>void

export type ActionRenderProps<Scope extends Dict = Dict,Params extends Dict = Dict>= FormAction<Scope,Params> &  {
    submit?:()=>void                                        // 提交表单
    reset?:()=>void                                         // 重置表单
    ref: RefObject<HTMLElement>                             // 动作元素引用
} 

export type ActionRender<PropTypes extends Dict,Params extends Dict = Dict>= (props: ActionRenderProps<PropTypes>) => ReactNode

export type ActionProps<PropTypes extends Dict = Dict,Params extends Dict = Dict> = {
    // 动作类型名称
    type:string  
    // 动作作用域
    scope?:string | string[]
    // HTML元素标签名称，如果为空则需要完全自渲染
    tagName?:string  
    // 动作元素引用
    ref: RefObject<HTMLElement>
    // 当执行动作时用来传递给表单的额外参数
    params?:Dict                       

    children: ActionRender<PropTypes,Params>  
} 
  
export type ActionComponent = React.FC<ActionProps>;
  
function useActionExecutor(valuePath:string[],setState:any){
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
        execute    : executor,
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

        const scopePath = ['fields',...Array.isArray(scope) ? scope : scope.split(".")]                
        const fieldScopeValue =scopePath.length==0 ? state : getVal(state,scopePath)
        const actionValue =  getVal(state,['actions',type])

        // 用来指定
        const ref = useRef<HTMLElement>(null)

        // 执行当前动作, 如execute({})
        const actionExecutor = useActionExecutor(scopePath,setState)

        // 创建动作组件的Props
        const [ActionProps,setActionProps] = useState(()=>createActionProps(props,actionValue,actionExecutor,ref))
        useEffect(()=>{
            setActionProps(createActionProps(props,actionValue,actionExecutor,ref))
          },[actionValue,fieldScopeValue,scope,params])
 

        // 执行渲染
        return <Element type="div" ref={ref} className="speed-form-action">
            {  props.children && props.children(ActionProps as any) }
        </Element>

    }


    return React.memo(Action,(oldProps:any, newProps:any)=>{
        return oldProps.name === newProps.name
    }) as (<T extends Dict=Dict>(props: ActionProps<T>)=>ReactNode)
}



