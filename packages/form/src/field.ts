import React, {	ReactNode  } from "react";  
import { getVal, setVal } from "@helux/utils";
import {  AsyncComputedObject, AsyncComputedReturns, RequiredComputedState } from "helux-store"; 
import { isSimpleField } from "./utils";
import { AtomType, RequiredComputedField } from "./types"; 
 
// 用来声明表单定义中的动态计算属性
export type FieldComputedProp<R=unknown> = ((...args:any)=>R)  
  | ((...args:any)=>Promise<R>)
  | AsyncComputedObject<R>
  | AsyncComputedReturns<R>
  | R




export interface Field<Value = any> extends Record<string, any>{  
  __HELUX_FIELD__?:true
  value: Value;
  title?      : FieldComputedProp<string>;            // 标题
  default?    : FieldComputedProp<Value>;             // 默认值
  help?       : FieldComputedProp<string>;            // 提示信息
  placeholder?: FieldComputedProp<string>;            // 占位符
  required?   : FieldComputedProp<boolean>;           // 是否必填
  readonly?   : FieldComputedProp<boolean>;           // 是否只读
  visible?    : FieldComputedProp<boolean>;           // 是否可见
  enable?     : FieldComputedProp<boolean>;           // 是否可用
  validate?   : FieldComputedProp<boolean>;           // 验证
  select?     : FieldComputedProp<any[]>              // 枚举值
}


let F:RequiredComputedField<Field<string>>={
  value:"",
  __HELUX_FIELD__:true,
  title      :"",
  default    : "",
  help       : "true",
  placeholder: "true",
  required   : true,
  readonly   : true,
  visible    : true,
  enable     : true,
  validate   : true,
  select    : []
}

// 传递给字段组件的渲染参数
export type FieldRenderProps= RequiredComputedField<Field> & {
  sync	  	  : ()=>void	   		  		        // 同步状态
  update	  	: (value:any)=>void	   	    // 更新值
}

// 用来传递给字段组件进行渲染
export type FieldRender= (props: FieldRenderProps) => ReactNode

export type FieldProps = {
	name: string 
	children: FieldRender | FieldRender[];
} 



// 用来声明表单字段的元数据
// export type Field<R=any> = R  | ComputedReturns<R> | AsyncComputedReturns<R>;        

export type FieldComponent = React.FC<FieldProps>;

  
export type ComputedField<T extends FormData> = RequiredComputedState<T>
    
export function createFieldComponent(store: any) {
	return (props: FieldProps) => {
		const { name } = props; 
		let filedContext : RequiredComputedField<Field> 				       
		const [state,setState] = store.useState()
		const value = getVal(state, name.split("."))
        const isSimple = isSimpleField(value)
        const valuePath = isSimple ?  name.split(".") :[...name.split("."),'value']
		if (isSimple) {
			filedContext  ={	
        __HELUX_FIELD__:true,			      
				value,
				title      : name,
				help       : "",
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
 * 
 */
export function field<Value=string>(schema:Field<Value> | AtomType | AtomType[]) : RequiredComputedField<Field<Value>>{
  let value =(schema && typeof(schema)=='object' && 'value' in schema) ? schema.value : schema
    return Object.assign({
      __HELUX_FIELD__: true,
      value
    }, typeof (schema) == 'object' ? schema : {})   as RequiredComputedField<Field<Value>>
       
}

