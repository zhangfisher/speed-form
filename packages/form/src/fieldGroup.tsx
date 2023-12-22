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


import { ReactNode } from "react";
import { DefaultFieldPropTypes } from "./field";
import { Dict } from "./types";
import { getVal } from "@helux/utils";

export type DefaultFieldGroupPropTypes = Omit<DefaultFieldPropTypes,'value' | 'oldValue' | 'defaultValue' | 'validate'>

export type FieldGroupRenderProps<PropTypes extends Dict>= Required<Omit<DefaultFieldGroupPropTypes,keyof PropTypes> & PropTypes> & {
    update	  	  : (valueOrUpdater:PropTypes['value'] | ((updater:PropTypes)=>void))=>void	   	    // 更新值 
  } 

export type FieldGroupRender<PropTypes extends Dict>= (props: FieldGroupRenderProps<PropTypes>) => ReactNode
export type FieldGroupProps<PropTypes extends Dict = Dict> = {
	name: string 
	children: FieldGroupRender<PropTypes> | FieldGroupRender<PropTypes>[];
} 
  
export type FieldGroupComponent = React.FC<FieldGroupProps>;
  
export function createFieldGroupComponent(store: any) {
    return <T extends Dict=Dict>(props: FieldGroupProps<T>):ReactNode=>{
        const { name } = props;  	       
        const [state,setState] = store.useState()
        const valuePath =name.split(".")  
        const groupContext = getVal(state, valuePath)        
        // 允许更新当前组信息
        const updater = (updater:(group:T)=>void)=>{
            setState((draft:any)=>{
                updater.call(draft,getVal(draft,valuePath))
            })
        }
        return Array.isArray(props.children) ? 
            props.children.map((children:any)=>children({
                ...groupContext, 
                update:updater
            }))
            : props.children({
                ...groupContext, 
                update:updater
            })
    } 
}