/**
 * 
 *   字段组
 * 
 *   <Network.Group>
 *     {({title,enable,visible,readonly,validate,help})=>({children})}
 *   </Network.Group>
 * 
 * 
 */


import { ReactNode } from "react";
import type { FieldComputedProp } from "./field";
import { RequiredComputedField } from "./types"





export interface FieldGroup extends Record<string, any>{  
    __HELUX_GROUP_FIELD__?:true
    title?      : FieldComputedProp<string>;            // 标题
    help?       : FieldComputedProp<string>;            // 提示信息
    readonly?   : FieldComputedProp<boolean>;           // 是否只读
    visible?    : FieldComputedProp<boolean>;           // 是否可见
    enable?     : FieldComputedProp<boolean>;           // 是否可用
    validate?   : FieldComputedProp<boolean>;           // 是否验证有效
}
  
export type FieldGroupRenderProps<T>= RequiredComputedField<FieldGroup> & {
    sync	  	: ()=>void	   		  		        // 同步状态
    update	  	: (value:T)=>void	   	    // 更新值
}
  
  // 用来传递给字段组件进行渲染
  export type FieldGroupRender<T>= (props: FieldGroupRenderProps<T>) => ReactNode
  
  export type FieldGroupProps<T> = {
      name: string 
      children: FieldGroupRender<T> | FieldGroupRender<T>[];
  } 
  
  
  
  export type FieldComponent<T=any> = React.FC<FieldGroupProps<T>>;
  
  
  
export function createFieldGroupComponent(store: any) {
}