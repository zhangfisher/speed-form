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
import { getVal } from "@helux/utils";
import { Dict } from "helux-store";

export type DefaultFieldListPropTypes = Omit<DefaultFieldPropTypes,'value' | 'oldValue' | 'defaultValue' | 'validate'>

export type FieldListRenderProps<PropTypes extends Dict>= Required<DefaultFieldListPropTypes & PropTypes> & {
    update: (fn: (group: Required<DefaultFieldListPropTypes & PropTypes> )=>void)=>void	   	   
  } 

export type FieldListRender<PropTypes extends Dict>= (props: FieldListRenderProps<PropTypes>) => ReactNode
export type FieldListProps<PropTypes extends Dict = Dict> = {
	name: string 
	children: FieldListRender<PropTypes> | FieldListRender<PropTypes>[];
} 
  
export type FieldListComponent = React.FC<FieldListProps>;
  
export function createFieldListComponent(store: any) {
    return <T extends Dict=Dict>(props: FieldListProps<T>):ReactNode=>{
        const { name } = props;  	       
        const [state,setState] = store.useState()
        const valuePath =name.split(".")  
        const groupContext = getVal(state, valuePath)        
        // 更新当前组信息，如update(group=>group.enable=true)
        const updater = (updater:(group:any)=>void)=>{
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