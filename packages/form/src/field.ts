import React, {	ReactNode  } from "react";  
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




export interface Field<Value = any,Select extends any[] = any[]> extends Record<string, any>{  
  __HELUX_FIELD__?:true
  value: Value;
  title?      : FieldComputedProp<string>;              // 标题
  default?    : FieldComputedProp<Value | undefined>;   // 默认值
  help?       : FieldComputedProp<string>;              // 提示信息
  placeholder?: FieldComputedProp<string>;              // 占位符
  required?   : FieldComputedProp<boolean>;             // 是否必填
  readonly?   : FieldComputedProp<boolean>;             // 是否只读
  visible?    : FieldComputedProp<boolean>;             // 是否可见
  enable?     : FieldComputedProp<boolean>;             // 是否可用
  validate?   : FieldComputedProp<boolean>;             // 验证
  select?     : FieldComputedProp<Select>               // 枚举值
}


// 传递给字段组件的渲染参数
export type FieldRenderProps<Value,Select extends any[]=any[]>= RequiredComputedField<Field<Value,Select>> & {
  sync	  	  : ()=>void	   		  		        // 同步状态
  update	  	: (value:Value)=>void	   	    // 更新值
}

// 用来传递给字段组件进行渲染
export type FieldRender<Value,Select extends any[]=any[]>= (props: FieldRenderProps<Value,Select>) => ReactNode

export type FieldProps<Value = any,Select extends any[]=any[]> = {
	name: string 
	children: FieldRender<Value,Select> | FieldRender<Value,Select>[];
} 


//------------异步字段--------------
export type AsyncFieldRenderProps<FieldObject extends Record<string,any>>= 
  RequiredComputedAsyncField<Field> & {
  sync	  	  : ()=>void	   		  		        // 同步状态
  update	  	: (value:FieldObject['value'])=>void	   	    // 更新值
} & FieldObject

// 异步字段渲染指的是字段中的select或其他属性是异步计算函数时
export type AsyncFieldRender<FieldObject extends Record<string,any>>=
   (props: AsyncFieldRenderProps<FieldObject>) => ReactNode

/**
 * 当字段中包括异步计算字段时，命名用
 */
export type AsyncFieldProps<FieldObject extends Record<string,any>> = {
	name: string 
	children: AsyncFieldRender<FieldObject> | AsyncFieldRender<FieldObject>[];
} 

//------------

// 用来声明表单字段的元数据
// export type Field<R=any> = R  | ComputedReturns<R> | AsyncComputedReturns<R>;        

export type FieldComponent<Value=any> = React.FC<FieldProps<Value>>;

  
export type ComputedField<T extends FormData> = RequiredComputedState<T>
    
export function createFieldComponent(store: any) {
  function f<FieldObject extends Record<string,any>= Record<string,any>>(props:FieldProps<FieldObject['value']>):ReactNode 
  function f<Value=any,Select extends any[]=any[]>(props: FieldProps<Value,Select>):ReactNode 
  function f<Value=any,Select extends any[]=any[]>(props: React.PropsWithChildren<any>):ReactNode  {
		const { name } = props; 
		let filedContext : RequiredComputedField<Field<Value,Select>> 				       
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
        update     : (value:Value)=>{setState((draft:any)=>setVal(draft,valuePath,value))}
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
  return f
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