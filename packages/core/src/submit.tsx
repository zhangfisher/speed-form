/**
 * 标准表单的动作行为组件
 * 
 *  - submit
 *  - reset
 * 
 *  

 * 
 */
import React from 'react'
import { Dict, getValueByPath } from "@speedform/reactive"; 
import type {  FormSchemaBase, FormStore, RequiredFormOptions } from "./form";
import { CSSProperties, ReactElement, ReactNode } from "react";
import { isFieldGroup, isFieldList, isFieldValue } from "./utils";
import { ActionProps, createActionComponent } from "./action";
import { DEFAULT_SUBMIT_ACTION } from "./consts";
import { styled } from 'flexstyled';



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
    title?:string                                   // 显示的标题
    scope? :string | string[]                       // 声明该动作对应的状态路径
    render? : BehaviorRender<State,Params>          // 指定渲染函数
    children?: BehaviorRender<State,Params>  
}        
 
 
export interface BehaviorOptions{
    preventDefault?:boolean
    type?:"submit" | 'reset'
    title?:string    
    style?:CSSProperties    
    className?:string  
}   


/**
 * 
 * 提取一个字段组中除了字段的所有属性
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
    title?    : string
    type?     : 'submit' | 'reset'
    visible?  : boolean
    className?: string
    style?    : CSSProperties
}
 

const DefaultFormBehaviorButton =styled<DefaultBehaviorButtonProps>((props,{className})=>{
    return <input className={className + ' ' + props.className} 
        style={props.style}
        type={ props.type ?? 'submit'} value={props.title}
    />
},{
    cursor: 'pointer',
    width:"100%",
    display: 'block',
    boxSizing: 'border-box',
    padding:"8px",
    borderRadius:"8px",
    transition: "filter 0.3s",
    "&:hover":{
        filter: "brightness(1.2)"
    },
    "&.speedform-submit":{
        backgroundColor:"#54b2ff",
        color:"white",
        border:"1px solid #1e5786"
    }
})

export type FormBehaviorComponentProps = React.PropsWithChildren<BehaviorOptions>

export function createFormBehaviorComponent<State extends Dict = Dict>(store:FormStore<State>,behaviorOptions?:BehaviorOptions,formOptions?:RequiredFormOptions<State>) {
    const behaviorOpts = Object.assign({
        preventDefault:false,
    },behaviorOptions) as Required<BehaviorOptions>

    function Behavior<State extends FormBehaviorState=FormBehaviorState,Scope extends Dict=Dict>(props: BehaviorProps<State,Scope>):ReactNode{
        const [state] = store.useState()  
        const { scope } = props  

        const formState = getValueByPath(state,scope)  
        // 创建动作组件的Props
        const submitRenderProps = createBehaviorRenderProps(formState)        
        // 0-无子组件 1-指定渲染函数 2-组件数组 3-单个组件
        const childrenType = typeof(props.render)==='function' ? 1 : (Array.isArray(props.children) ? 2 : (typeof(props.children)==='function' ? 3 : 0))
        return <>
            {/* 默认按钮，当没有指定子组件时显示 */}
            <DefaultFormBehaviorButton 
                visible={childrenType == 0} 
                {...behaviorOpts}
            />
            {/* 也可以自定义渲染动作组件 */}
            {childrenType===1 ?
                <BehaviorChildren {...{submitProps:submitRenderProps,children:props.render}} />
                : ( childrenType===2 ? 
                    (props.children as any).map((children:any,index:any)=>{
                        return <BehaviorChildren key={index} {...{submitProps:submitRenderProps,children:children}} />
                    })
                    : <BehaviorChildren {...{submitProps:submitRenderProps,children:props.children}} />
               )
            }   
        </>        
    }

    return React.memo(Behavior,(oldProps:any, newProps:any)=>{
        return oldProps.scope === newProps.scope 
    }) as (<State extends FormBehaviorState=FormBehaviorState,Scope extends Dict=Dict>(props: BehaviorProps<State,Scope>)=>ReactElement<FormBehaviorComponentProps>)

}

export type SubmitComponentProps = React.PropsWithChildren<{
    
} & ActionProps>

/**
 *  创建一个提交组件，某行为
 * 
 * 提交整个表单
 * <Submit title="" timeout={12}></Submit>
 * 提交表单局部，scope=只能指定一个字段组
 * <Submit title="" timeout={12} scope={["xx","xx"]}></Submit>
 * 
 * @param store 
 * @param formOptions 
 * @returns 
 */
export function createSubmitComponent<State extends Dict = Dict>(store:FormStore<State>) {
    const Action = createActionComponent(store)

    return ((props:SubmitComponentProps)=>{
        return (<Action {...props} name={DEFAULT_SUBMIT_ACTION}>        
            {
                ({loading})=>{ 
                    return (
                        <div className="speedform-submit">
                            提交
                            <input type="submit"/>       
                            <span>{loading ? '提交中' : '已提交'}</span>
                        </div>
                    )
                }
            }
        </Action>)
    }) as React.FC<SubmitComponentProps>

}


// 默认的提交动作
export const $submit = {
    title: "提交",
    help: "",
    tips: "提交",
    visible: true,
    enable: true,
    validate: true,
    readonly: false,
    execute: async () => {
        
    }
} 