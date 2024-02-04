/**
 * Submit组件与Form组件配合使用，用于提交当前表单数据
 * 
 * 
 * 
 * application/x-www-form-urlencoded	formdata
application/json	request payload
multipart/form-data	request payload

<Submit>
    {({submit,valatide,visible,dirty})=>{
        return <input type='submit' onClick={submit}>提交</input>
    }}
</Submit>



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





 * 
 */

import { Dict, getValueByPath } from "helux-store"; 
import type { FormOptions, FormSchemaBase } from "./form";
import React,{ ReactNode, RefObject, useCallback, useRef } from "react";
 import { isFieldGroup, isFieldList, isFieldValue } from "./utils";

// 动作状态，必须包含一个名称为execute的异步计算属性
export interface FormSubmitState extends FormSchemaBase{
    
} 

 
 export type DefaultSubmitRenderProps={
    title  : string
    help   : string
    tips   : string
    visible: boolean
    dirty  : boolean
    enable : boolean
} 

export type SubmitRenderProps<State extends Dict> = 
    DefaultSubmitRenderProps 
    & State 
    & {
        submit:()=>void;			                        // 提交表单
        valatide:()=>void;			                        // 验证表单
        ref: RefObject<HTMLElement>                         // 动作元素引用
    } 

export type SubmitRender<State extends Dict,Params extends Dict = Dict>= (props: SubmitRenderProps<State>) => ReactNode


export type SubmitProps<State extends FormSubmitState=FormSubmitState,PropTypes extends Dict = Dict,Params extends Dict = Dict> = {
    scope:string | string[]              // 声明该动作对应的状态路径
    render?: SubmitRender<State,Params>  
    children?: SubmitRender<State,Params>  
}    
 


const SubmitChildren = React.memo((props:{submitProps:SubmitRenderProps<any>,children:any})=>{
    return <>{
      typeof(props.children)=='function' && props.children(props.submitProps as any)  
    }</>
  },(oldProps, newProps)=>{  
    return  Object.entries(oldProps.submitProps).every(([key,value]:[key:string,value:any])=>{
      return ['children','render'].includes(key) ? true: value===newProps.submitProps[key]
    }) 
  })     
  
  

export interface SubmitOptions{
}

function getFormAttrs(formState:Dict){
    const result:Dict = {}
    Object.entries(formState || {}).forEach(([key,value])=>{
        if(!(isFieldValue(value) || isFieldGroup(value) || isFieldList(value))){
            result[key] = value      
        }
    })
    return result
}


function useFormSubmit<State extends FormSubmitState=FormSubmitState>(formState:State,submitOptions?:SubmitOptions){
    return useCallback((options:SubmitOptions)=>{
     
    },[])
}

function createSubmitRenderProps<State extends FormSubmitState=FormSubmitState>(formState:State,submitFn:any,ref:RefObject<HTMLElement>){  
    return Object.assign({            
        help       : "",
        title      : "",
        dirty      : false,
        validate   : true,        
        visible    : true,    
        enable     : true,
        readOnly   : true
    },
    getFormAttrs(formState),
    {
        submit:submitFn,
        ref,
    })
} 

export function createSubmitComponent<Store extends Dict = Dict>(store:Store,submitOptions?:SubmitOptions,formOptions?:Required<FormOptions>) {
    function Submit<State extends FormSubmitState=FormSubmitState,Scope extends Dict=Dict>(props: SubmitProps<State,Scope>):ReactNode{
        const [state] = store.useState()  

        const { scope } = props  

        const formState = getValueByPath(state,scope)
        const submit = useFormSubmit(formState,submitOptions)
        // 用来引用当前动作
        const ref = useRef<HTMLElement>(null)

        // 创建动作组件的Props
        const submitRenderProps = createSubmitRenderProps(formState,submit,ref)        

        // 执行渲染动作组件
        if(typeof(props.render)==='function'){
            return <SubmitChildren {...{actionProps:submitRenderProps,children:props.render}} />
        }else if(props.children){
            if(Array.isArray(props.children)){
                return (props.children as any).map((children:any)=>{
                    return <SubmitChildren {...{actionProps:actionRenderProps,children:children}} />
                })
            }else{
                return <SubmitChildren {...{actionProps:actionRenderProps,children:props.children}} />
            }            
        } 
    }
    return React.memo(Action,(oldProps:any, newProps:any)=>{
        return oldProps.name === newProps.name  
    }) as (<State extends FormActionState=FormActionState,Scope extends Dict=Dict>(props: ActionProps<State,Scope>)=>ReactNode)

}