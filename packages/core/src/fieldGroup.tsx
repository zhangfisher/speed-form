/**
 * 
 *   字段组
 *  字段组拥有除了Value外的所有字段的属性
 * 
 *   <Network.Group name={}>
  *     {({title,enable,visible,readonly,help})=>{
 *         return <Card visibale={visible} readonly={readonly}>
 *              <Network.Field></Network.Field>
 *              <Network.Field></Network.Field>
 *              <Network.Field></Network.Field>
 *              <Button onClick=(()=>update(field=>field.enable=true))>禁用</Button>
 *              <Button onClick=(()=>update(field=>field.enable=true))>隐藏</Button>
 *              <Button onClick=(()=>update(field=>field.enable=true))>隐藏</Button>
 *          </Card>
 *      }
 *   </Network.Group>
 * 
 * 
 */


import { ReactNode, useCallback,useState,useEffect } from "react";
import { DefaultFieldPropTypes } from "./field";
import React from "react";
import { assignObject } from "flex-tools/object/assignObject";
import type {  FormStore, RequiredFormOptions } from "./form";
import { Dict,getVal } from "@speedform/reactive";


export type DefaultFieldGroupPropTypes = Omit<DefaultFieldPropTypes,'value' | 'oldValue' | 'initial' | 'validate'>

export type FieldGroupRenderProps<PropTypes extends Dict>= Required<DefaultFieldGroupPropTypes & PropTypes> & {
    update: (fn: (group: Required<DefaultFieldGroupPropTypes & PropTypes> )=>void)=>void	   	   
  } 

export type FieldGroupRender<PropTypes extends Dict>= (props: FieldGroupRenderProps<PropTypes>) => ReactNode
export type FieldGroupProps<PropTypes extends Dict = Dict> = {
	name: string | string[]
	children: FieldGroupRender<PropTypes> | FieldGroupRender<PropTypes>[];
} 
  
export type FieldGroupComponent = React.FC<FieldGroupProps>;
  
function useFieldGroupUpdater(valuePath:string[],setState:any){
    return useCallback((updater:(group:any)=>void)=>{
        setState((draft:any)=>{
            updater.call(draft,getVal(draft,valuePath))
        })
    },[])
}
function createFieldGroupProps(name:string,value:any,fieldGroupUpdater:any){  
    return assignObject({
        name,
        help       : "",
        visible    : true,
        required   : false,
        readonly   : false,
        validate   : true,        
        enable     : true,
        update     : fieldGroupUpdater
    },value)

}



export function createFieldGroupComponent<State extends Dict = Dict>(store: FormStore<State>,formOptions:RequiredFormOptions<State>) {
    return React.memo(<T extends Dict=Dict>(props: FieldGroupProps<T>):ReactNode=>{
        const { name } = props;  	       
        const [state,setState] = store.useState()
        const groupPath = Array.isArray(name) ? name : name.split(".")   
        // 含fields前缀的字段路径,代表的是完整的路径
        const fullGroupPath:string[] = ['fields',...groupPath]

        const groupValue = getVal(state, fullGroupPath)        
        // 更新当前组信息，如update(group=>group.enable=true)
        const fieldGroupUpdater = useFieldGroupUpdater(fullGroupPath,setState)
        const [fieldGroupProps,setfieldGroupProps] = useState(()=>createFieldGroupProps(formOptions.getFieldName(groupPath),groupValue,fieldGroupUpdater))

        useEffect(()=>{
            setfieldGroupProps(createFieldGroupProps(formOptions.getFieldName(groupPath),groupValue,fieldGroupUpdater))
          },[groupValue])
 
        // 执行渲染
        return Array.isArray(props.children) ? 
            props.children.map((children:any)=>children(fieldGroupProps))
            : props.children(fieldGroupProps as any)

    },(oldProps:any, newProps:any)=>{
        return oldProps.name === newProps.name
    }) as (<T extends Dict=Dict>(props: FieldGroupProps<T>)=>ReactNode)
}