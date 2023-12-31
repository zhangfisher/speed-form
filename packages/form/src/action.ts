/**
 * 
 *   字段组
 *  字段组拥有除了Value外的所有字段的属性
 * 
 *   <Network.Action name="submit">
  *     {({title,enable,visible,help,action})=>{
 *         return <Div visibale={visible} readonly={readonly}>
 *              <Button onClick={action()}>{title}</Button>
 *              <Button onClick={action({loading:3000})}>{title}</Button>   // 显示3秒提交中
 *              <Button onClick={action({loading:3000})}>{title}</Button>   // 显示3秒提交中
 *          </Div>
 *      }
 *   </Network.Group>
 * 
 * 
 */


import { ReactNode, useCallback,useState,useEffect } from "react";
import { Dict } from "./types";
import { getVal } from "@helux/utils";
import React from "react";
import { assignObject } from "flex-tools/object/assignObject";
import type { FormOptions } from "./form";

 
export type ActionRenderProps<PropTypes extends Dict>=   {
    name:string,                                         // 动作名称，如取值：reset,submit,
    help:string,                                         // 帮助信息
    enable?:boolean                                      // 是否允许提交
    visible?:boolean                                     // 是否显示提交    
    action: ()=>void	   	                             // 用来提交的函数，一般可以传递给button的onClick事件
} 

export type ActionRender<PropTypes extends Dict>= (props: ActionRenderProps<PropTypes>) => ReactNode
export type ActionProps<PropTypes extends Dict = Dict> = {
	children: ActionRender<PropTypes> | ActionRender<PropTypes>[];
} 
  
export type ActionComponent = React.FC<ActionProps>;
  
function useActionUpdater(valuePath:string[],setState:any){
    return useCallback((updater:(group:any)=>void)=>{
        setState((draft:any)=>{
            updater.call(draft,getVal(draft,valuePath))
        })
    },[])
}
function createActionProps(name:string[],value:any,ActionUpdater:any){  
    return assignObject({
        name,
        help       : "",
        visible    : true,
        required   : false,
        readonly   : false,
        validate   : true,        
        enable     : true,
        update     : ActionUpdater
    },value)

}
export function createActionComponent(this:FormOptions,store: any) {
    return React.memo(function Action<T extends Dict=Dict>(props: ActionProps<T>):ReactNode{
        const [state,setState] = store.useState()
        const groupValue = getVal(state, valuePath)        
        // 更新当前组信息，如update(group=>group.enable=true)
        const ActionUpdater = useActionUpdater(valuePath,setState)
        const [ActionProps,setActionProps] = useState(()=>createActionProps(valuePath,groupValue,ActionUpdater))

        useEffect(()=>{
            setActionProps(createActionProps(valuePath,groupValue,ActionUpdater))
          },[groupValue])
 
        // 执行渲染
        return Array.isArray(props.children) ? 
            props.children.map((children:any)=>children(ActionProps))
            : props.children(ActionProps as any)

    },(oldProps:any, newProps:any)=>{
        return oldProps.name === newProps.name
    }) as (<T extends Dict=Dict>(props: ActionProps<T>)=>ReactNode)
}

