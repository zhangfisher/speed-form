import React, {	ReactElement, ReactNode  } from "react";  
import { getVal, setVal } from "@helux/utils";
import {   RequiredComputedState } from "helux-store"; 
import { isSimpleField } from "./utils";
import {  FieldComputedProp } from "./types";  
 


export type FPT = Record<string,any> // 字段属性类型集

export interface FieldSchema<PropTypes extends FPT>{
  value        : PropTypes['value'];
  title?       : FieldComputedProp<PropTypes['title']>;                      // 标题
  defaultValue?: FieldComputedProp<PropTypes['value'] | undefined>;          // 默认值
  help?        : FieldComputedProp<PropTypes['help']>;                       // 提示信息
  placeholder? : FieldComputedProp<PropTypes['placeholder']>;                // 占位符
  required?    : FieldComputedProp<PropTypes['required']>;                   // 是否必填
  readonly?    : FieldComputedProp<PropTypes['readonly']>;                   // 是否只读
  visible?     : FieldComputedProp<PropTypes['visible']>;                    // 是否可见
  enable?      : FieldComputedProp<PropTypes['enable']>;                     // 是否可用
  validate?    : FieldComputedProp<PropTypes['validate']>;                   // 验证
  select?      : FieldComputedProp<PropTypes['select']>                      // 枚举值

}
export type Field<PropTypes extends FPT = {
  value        : any
  title?       : string;               // 标题
  defaultValue?: any;                  // 默认值
  help?        : string;               // 提示信息
  placeholder? : string;               // 占位符
  required?    : boolean;              // 是否必填
  readonly?    : boolean;              // 是否只读
  visible?     : boolean;              // 是否可见
  enable?      : boolean               // 是否可用
  validate?    : boolean;              // 验证
  select?      : any[]                 // 枚举值
}>=FieldSchema<PropTypes>


// 默认同步字段属性
export interface DefaultFieldPropTypes{
  value        : any
  title?       : string;               // 标题
  help?        : string;               // 提示信息
  placeholder? : string;               // 占位符
  required?    : boolean;              // 是否必填
  readonly?    : boolean;              // 是否只读
  visible?     : boolean;              // 是否可见
  enable?      : boolean               // 是否可用
  validate?    : boolean;              // 验证
  select?      : any[]                 // 枚举值
} 

 // 完整的字段描述
export type Value = {value:any}

// 传递给字段组件的渲染参数
export type FieldRenderProps<PropTypes extends FPT>= Required<Omit<DefaultFieldPropTypes,keyof PropTypes> & PropTypes> & {
  sync	  	    : ()=>void	   		  		                    // 同步状态
  update	  	  : (value:PropTypes['value'])=>void	   	    // 更新值
  defaultValue  : PropTypes['value'] | undefined
} 

// 用来传递给字段组件进行渲染
export type FieldRender<PropTypes extends FPT>= (props: FieldRenderProps<PropTypes>) => ReactNode

export type FieldProps<PropTypes extends FPT = FPT> = {
	name: string 
	children: FieldRender<PropTypes> | FieldRender<PropTypes>[];
} 
  
// 用来声明表单字段的元数据
// export type Field<R=any> = R  | ComputedReturns<R> | AsyncComputedReturns<R>;        

export type FieldComponent = React.FC<FieldProps>;


export function createFieldComponent(store: any) {  
  

  // function component<Value=any,Select extends any[]=any[]>(props: FieldProps<{value:Value,select:Select}>):ReactNode
  //   function component<PropTypes extends FPT>(props:FieldProps<PropTypes>):ReactNode
  //   function component(props: any): any 
    
  function component<T=Value>(props: T extends Value? FieldProps<T> :  FieldProps<{value:T}>):ReactNode{//T extends FValue ? AsyncFieldComponent<T> : DefaultFieldComponent<T>{
		const { name } = props; 
		let filedContext:any 				       
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
			    props.children.map((children:any)=>children({
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