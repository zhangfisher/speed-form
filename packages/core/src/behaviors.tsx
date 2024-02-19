/**
 * 表单的行为组件
 * 
 *  - submit
 *  - reset
 * 
 *  

 * 
 */

import { Dict, getValueByPath } from "@speedform/reactive"; 
import type { FormOptions, FormSchemaBase } from "./form";
import React,{ CSSProperties, ReactNode,  useRef } from "react";
import { isFieldGroup, isFieldList, isFieldValue } from "./utils";
import { styled } from  "styledfc"
// 动作状态，必须包含一个名称为execute的异步计算属性
export interface FormBehaviorState extends FormSchemaBase{
    
} 

 
 export type DefaultBehaviorRenderProps={
    title  : string
    help   : string
    tips   : string
    visible: boolean
    dirty  : boolean
    enable : boolean
} 

export type BehaviorRenderProps<State extends Dict> = 
    DefaultBehaviorRenderProps 
    & State 
    & { 
        valatide:()=>void;			                        // 验证表单 
    } 

export type BehaviorRender<State extends Dict,Params extends Dict = Dict>= (props: BehaviorRenderProps<State>) => ReactNode


export type BehaviorProps<State extends FormBehaviorState=FormBehaviorState,PropTypes extends Dict = Dict,Params extends Dict = Dict> = {
    scope? :string | string[]              // 声明该动作对应的状态路径
    render? : BehaviorRender<State,Params>  
    children?: BehaviorRender<State,Params>  
}    
 

export interface BehaviorOptions{
    preventDefault?:boolean
    type?:"submit" | 'reset'
    title?:string    
    style?:CSSProperties    
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

function createBehaviorRenderProps<State extends FormBehaviorState=FormBehaviorState>(formState:State){  
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
const BehaviorChildren = React.memo((props:{submitProps:BehaviorRenderProps<any>,children:any})=>{
    return <>{
      typeof(props.children)=='function' && props.children(props.submitProps as any)  
    }</>
  },(oldProps, newProps)=>{  
    return  Object.entries(oldProps.submitProps).every(([key,value]:[key:string,value:any])=>{
      return ['children','render'].includes(key) ? true: value===newProps.submitProps[key]
    }) 
  })     

  
interface DefaultBehaviorButtonProps{
    title?:string
    type?:'submit' | 'reset'
    visible?:boolean
    style?:CSSProperties
}

// const DefaultFormBehaviorButton = React.forwardRef<HTMLInputElement,DefaultBehaviorButtonProps>((props:DefaultBehaviorButtonProps,ref)=>{
//     const {visible} = props
//     return 
 


const DefaultFormBehaviorButton =styled<DefaultBehaviorButtonProps>((props,{ref})=>{
    const {visible} = props
    return <input ref={ref} 
        style={{display:visible ? 'inline-block':'none'}}
        type={ props.type ?? 'submit'} value={props.title ?? '提交'}
    />
},{
    minWidth:'80px',
    cursor: 'pointer',
    boxSizing: 'border-box',
    margin:"2px" 
})

export function createFromBehaviorComponent<Store extends Dict = Dict>(store:Store,behaviorOptions?:BehaviorOptions,formOptions?:Required<FormOptions>) {
    const behaviorOpts = Object.assign({
        preventDefault:false
    },behaviorOptions) as Required<BehaviorOptions>
    function Behavior<State extends FormBehaviorState=FormBehaviorState,Scope extends Dict=Dict>(props: BehaviorProps<State,Scope>):ReactNode{
        const [state] = store.useState()  
        const inputRef = useRef<HTMLInputElement>(null)
        const { scope } = props  

        const formState =getValueByPath(state,scope)  
        // 创建动作组件的Props
        const submitRenderProps = createBehaviorRenderProps(formState)        
        // 0-无子组件 1-渲染函数 2-组件数组 3-单个组件
        const childrenType = typeof(props.render)==='function' ? 1 : (Array.isArray(props.children) ? 2 : (typeof(props.children)==='function' ? 3 : 0))
        return <>
            {/* 默认提交按钮，当没有指定子组件时显示 */}
            <DefaultFormBehaviorButton 
                ref={inputRef} 
                visible={childrenType == 0} 
                {...behaviorOpts}
            />
            {/* 执行渲染动作组件 */}
            {childrenType===1 ?
                <BehaviorChildren {...{submitProps:submitRenderProps,children:props.render}} />
                : ( childrenType===2 ? 
                    (props.children as any).map((children:any)=>{
                        return <BehaviorChildren {...{submitProps:submitRenderProps,children:children}} />
                    })
                    : <BehaviorChildren {...{submitProps:submitRenderProps,children:props.children}} />
               )
            }   
        </>        
    }

    return React.memo(Behavior,(oldProps:any, newProps:any)=>{
        return oldProps.name === newProps.name  
    }) as (<State extends FormBehaviorState=FormBehaviorState,Scope extends Dict=Dict>(props: BehaviorProps<State,Scope>)=>ReactNode)

}
export function createSubmitComponent<Store extends Dict = Dict>(store:Store,submitOptions?:BehaviorOptions,formOptions?:Required<FormOptions>) {
    return createFromBehaviorComponent(store,{
        type:'submit',
        title:"提交",
        style:{
            borderRadius:"4px",
            padding:"8px",
            background:"#1c8ceb",
            border:"1px solid #1c8ceb",
            color:"#fff" 
        },
        ...submitOptions},formOptions)
}

export function createResetComponent<Store extends Dict = Dict>(store:Store,submitOptions?:BehaviorOptions,formOptions?:Required<FormOptions>) {
    return createFromBehaviorComponent(store,{
        type:'reset',
        title:"重置",
        style:{
            borderRadius:"4px",
            padding:"8px",
            background:"#eee",            
            border:"1px solid #bbb",
        },
        ...submitOptions,
        formOptions)
}

