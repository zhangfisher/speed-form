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


 * 
 */

import { Dict, getValueByPath } from "@speedform/reactive"; 
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
        valatide:()=>void;			                        // 验证表单 
    } 

export type SubmitRender<State extends Dict,Params extends Dict = Dict>= (props: SubmitRenderProps<State>) => ReactNode


export type SubmitProps<State extends FormSubmitState=FormSubmitState,PropTypes extends Dict = Dict,Params extends Dict = Dict> = {
    scope? :string | string[]              // 声明该动作对应的状态路径
    render? : SubmitRender<State,Params>  
    children?: SubmitRender<State,Params>  
}    
 

export interface SubmitOptions{
    preventDefault?:boolean
}


/**
 * 
 * 提取一个字段组中除了字段以后的所有属性
 * 
 * @param formState 
 * @returns 
 */
function getFormAttrs(formState:Dict){
    const result:Dict = {}
    Object.entries(formState || {}).forEach(([key,value])=>{ 
        if(!(isFieldValue(value) || isFieldGroup(value) || isFieldList(value))){
            result[key] = value      
        }
    }) 
    return result
}

function createSubmitRenderProps<State extends FormSubmitState=FormSubmitState>(formState:State){  
    return  Object.assign({      
        type      : "submit",
        help       : "",
        title      : "",
        dirty      : false,
        validate   : true,        
        visible    : true,    
        enable     : true,
        readOnly   : true
    },
    getFormAttrs(formState))  
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

  
interface DefaultSubmitButtonProps{
    visible?:boolean
}
const DefaultSubmitButton = React.forwardRef<HTMLInputElement,DefaultSubmitButtonProps>((props:DefaultSubmitButtonProps,ref)=>{
    const {visible} = props
    return <input  
        type="submit"
        ref={ref}
        value="提交"
        style={{
            display:visible ?  'block':'none',
            borderRadius:"4px",
            padding:"8px",
            background:"#1c8ceb",
            color:"#fff",
            border:"none"
        }}></input>
})

export function createSubmitComponent<Store extends Dict = Dict>(store:Store,submitOptions?:SubmitOptions,formOptions?:Required<FormOptions>) {
    function Submit<State extends FormSubmitState=FormSubmitState,Scope extends Dict=Dict>(props: SubmitProps<State,Scope>):ReactNode{
        const [state] = store.useState()  
        const inputRef = useRef<HTMLInputElement>(null)
        const { scope } = props  

        const formState =getValueByPath(state,scope) 
         

        // 创建动作组件的Props
        const submitRenderProps = createSubmitRenderProps(formState)        
        // 0-无子组件 1-渲染函数 2-组件数组 3-单个组件
        const childrenType = typeof(props.render)==='function' ? 1 : (Array.isArray(props.children) ? 2 : (typeof(props.children)==='function' ? 3 : 0))
        return <>
            {/* 默认提交按钮，当没有指定子组件时显示 */}
            <DefaultSubmitButton ref={inputRef} visible={childrenType == 0 }/>
            {/* 执行渲染动作组件 */}
            {childrenType===1 ?
                <SubmitChildren {...{submitProps:submitRenderProps,children:props.render}} />
                : ( childrenType===2 ? 
                    (props.children as any).map((children:any)=>{
                        return <SubmitChildren {...{submitProps:submitRenderProps,children:children}} />
                    })
                    : <SubmitChildren {...{submitProps:submitRenderProps,children:props.children}} />
               )
            }   
        </>
        
    }
    return React.memo(Submit,(oldProps:any, newProps:any)=>{
        return oldProps.name === newProps.name  
    }) as (<State extends FormSubmitState=FormSubmitState,Scope extends Dict=Dict>(props: SubmitProps<State,Scope>)=>ReactNode)

}