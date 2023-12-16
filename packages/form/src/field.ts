import React, {	ReactNode  } from "react";  
import { getVal, setVal } from "@helux/utils";
import {  RequiredComputedState } from "helux-store"; 
import { isSimpleField } from "./utils";
 

export type FieldRender<Value=any> = (props: RequiredComputedState<FieldSchema<Value>>) => ReactNode

export type FieldProps<Value=any> = {
	name: string 
	children: FieldRender<Value> | FieldRender<Value>[];
} & Record<string,any>


// 用来声明表单字段的元数据
// export type FieldSchema<R=any> = R  | ComputedReturns<R> | AsyncComputedReturns<R>;
        


export type FieldComponent = React.FC<FieldProps>;

 
export interface FieldSchema<Value = any> extends Record<string, any>{  
  __HELUX_FIELD__:true
  value: Value;
  title?      : string;                           // 标题
  default?    : Value;                            // 默认值
  tips?       : string;                           // 提示信息
  placeholder?: string;                           // 占位符
  required?   : (...args:any)=>boolean;           // 是否必填
  readonly?   : (...args:any)=>boolean;           // 是否只读
  visible?    : (...args:any)=>boolean;           // 是否可见
  enable?     : (...args:any)=>boolean;           // 是否可用
  validate?   : (...args:any)=>boolean;           // 验证
  select?     : (...args:any)=>any[]              // 枚举值
  sync	  	  : ()=> ()=>void	   		  		  // 同步状态
  update	  	: ()=> (value:Value)=>void	   	  // 更新值
}
export interface FieldGroupSchema extends Record<string, any>{  
    __HELUX_FIELD_GROUP__:true
}
 
export type ComputedField<T extends FormData> = RequiredComputedState<T>
    



export function createFieldComponent(store: any) {
	return (props: FieldProps) => {
		const { name } = props; 
		let filedContext : RequiredComputedState<FieldSchema> 				       
		const [state,setState] = store.useState()
		const value = getVal(state, name.split("."))
        const isSimple = isSimpleField(value)
        const valuePath = isSimple ?  name.split(".") :[...name.split("."),'value']
		if (isSimple) {
			filedContext  ={	
                __HELUX_FIELD__:true,			      
				value,
				title      : name,
				tips       : "",
				default    : undefined,
				visible    : true,
				required   : false,
				readonly   : false,
				validate   : true,        
				enable     : true,
				placeholder: "",        
				select     : [],
				sync       : ()=>{},
        update     : (value:any)=>{setState((draft:any)=>setVal(draft,valuePath,value))}
			};	
		}else {
			filedContext = value
		} 
		return Array.isArray(props.children) ? 
			props.children.map(children=>children({
          ...filedContext,
          sync:store.sync(valuePath),
          update:(value:any)=>{setState((draft:any)=>setVal(draft,valuePath,value)
        )}
      }))
			: props.children({
          ...filedContext,
          sync:store.sync(valuePath),
          update:(value:any)=>{setState((draft:any)=>setVal(draft,valuePath,value))}
      })
	};
}


/**
 * 声明表单字段
 */
export function field<Value=any>(schema:FieldSchema<Value>):FieldSchema<Value>{
    return Object.assign({
        // 特殊标记，用来标记该对象是一个表单字段
        __HELUX_FIELD__:true,                     
        value:''
    },schema) 
}

/**
 * 声明表单字段
 * 
 * ddd:group([
 *  children:[
 *     f1:field(),
 *     f1:field(),
 *     f1:field(),
 *  ]
  * ])
 * 
 */
export function group(schema:FieldGroupSchema){

}