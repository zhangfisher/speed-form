import React, {	ReactElement, ReactNode  } from "react";  
import { getVal, setVal } from "@helux/utils";
import {  AsyncComputedObject, AsyncComputedReturns, RequiredComputedState } from "helux-store"; 
import { isSimpleField } from "./utils";
import { AtomType, RequiredComputedAsyncField, RequiredComputedField } from "./types"; 
import { ReactNode } from 'react';
 
// 用来声明表单定义中的动态计算属性
export type FieldComputedProp<R=unknown> = ((...args:any)=>R)  
  | ((...args:any)=>Promise<R>)
  | AsyncComputedObject<R>
  | AsyncComputedReturns<R>
  | R  


export type FPT = Record<string,any> // 字段属性类型集

export interface FieldPropTypes<FieldObject extends FPT>{
  value       : FieldObject['value'];
  title?      : FieldComputedProp<FieldObject['title']>;              // 标题
  default?    : FieldComputedProp<FieldObject['value'] | undefined>;   // 默认值
  help?       : FieldComputedProp<FieldObject['help']>;              // 提示信息
  placeholder?: FieldComputedProp<FieldObject['placeholder']>;              // 占位符
  required?   : FieldComputedProp<FieldObject['required']>;             // 是否必填
  readonly?   : FieldComputedProp<FieldObject['readonly']>;             // 是否只读
  visible?    : FieldComputedProp<FieldObject['visible']>;             // 是否可见
  enable?     : FieldComputedProp<FieldObject['enable']>;             // 是否可用
  validate?   : FieldComputedProp<FieldObject['validate']>;             // 验证
  select?     : FieldComputedProp<FieldObject['select']>               // 枚举值

}
export type Field<PropTypes extends FPT = {
  value:any
  title?      : string;               // 标题
  default?    : any;                  // 默认值
  help?       : string;               // 提示信息
  placeholder?: string;               // 占位符
  required?   : boolean;              // 是否必填
  readonly?   : boolean;              // 是否只读
  visible?    : boolean;              // 是否可见
  enable?     : boolean               // 是否可用
  validate?   : boolean;              // 验证
  select?     : any[]                 // 枚举值
}>=FieldPropTypes<PropTypes>


// 默认同步字段属性
export type DefaultFieldPropTypes<T=FPT> ={
  value:any
  title?      : string;               // 标题
  default?    : any;                  // 默认值
  help?       : string;               // 提示信息
  placeholder?: string;               // 占位符
  required?   : boolean;              // 是否必填
  readonly?   : boolean;              // 是否只读
  visible?    : boolean;              // 是否可见
  enable?     : boolean               // 是否可用
  validate?   : boolean;              // 验证
  select?     : any[]                 // 枚举值
} & T
 
// 传递给字段组件的渲染参数
export type FieldRenderProps<PropTypes extends FPT>= RequiredComputedField<Field<PropTypes>> & {
  sync	  	  : ()=>void	   		  		        // 同步状态
  update	  	: (value:PropTypes['value'])=>void	   	    // 更新值
}

// 用来传递给字段组件进行渲染
export type FieldRender<PropTypes extends Record<string,any>>= (props: FieldRenderProps<PropTypes>) => ReactNode

export type FieldProps<PropTypes extends FPT = FPT> = {
	name: string 
	children: FieldRender<PropTypes> | FieldRender<PropTypes>[];
} 
  
// 用来声明表单字段的元数据
// export type Field<R=any> = R  | ComputedReturns<R> | AsyncComputedReturns<R>;        

export type FieldComponent = React.FC<FieldProps>;

  
export type ComputedField<T extends FormData> = RequiredComputedState<T>
    
export type DefaultFieldProps<Value=any,Select extends any[]=any[]> = FieldProps<DefaultFieldPropTypes<{value:Value,select:Select}>>
export type AsyncFieldProps<PropTypes extends FPT = FPT> = FieldProps<PropTypes>

// 普通字段组件
export type DefaultFieldComponent<Value=any,Select extends any[]=any[]> = ReactElement<React.PropsWithChildren<RequiredComputedField<Field<DefaultFieldPropTypes<{value:Value,select:Select}>>>>>
// 有传入字段类型的异步字段组件
export type AsyncFieldComponent<PropTypes extends FPT = FPT> = ReactElement<React.PropsWithChildren<RequiredComputedField<Field<PropTypes>>>>



export function createFieldComponent(store: any) {

  function component<PropTypes extends FPT = FPT>(props:FieldProps<PropTypes>):ReactElement<React.PropsWithChildren<RequiredComputedField<Field<PropTypes>>>> 
  function component<Value=any,Select extends any[]=any[]>(props: DefaultFieldProps<Value,Select>):ReactElement<React.PropsWithChildren<RequiredComputedField<Field<DefaultFieldPropTypes<{value:Value,select:Select}>>>>> 
  function component(props: React.PropsWithChildren<any>):ReactElement {
		const { name } = props; 
		let filedContext:any //: RequiredComputedField<Field<PropTypes> > 				       
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
				select     : [] as any,
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
	} 
  return component
}


/**
 * 
 * 声明表单字段 
 * 
 */
export function field<Value=string,Select extends any[]=any[]>(schema:Field<Value,Select> | AtomType | AtomType[]) {
  let value =(schema && typeof(schema)=='object' && 'value' in schema) ? schema.value : schema
    return Object.assign({
      __HELUX_FIELD__: true,
      value
    }, typeof (schema) == 'object' ? schema : {}) as RequiredComputedField<Field<Value,Select>>
}





// let F:RequiredComputedField<Field<string>>={
//   value:"",
//   __HELUX_FIELD__:true,
//   title      :"",
//   default    : "",
//   help       : "true",
//   placeholder: "true",
//   required   : true,
//   readonly   : true,
//   visible    : true,
//   enable     : true,
//   validate   : true,
//   select    : []
// }