import React, {	 ReactNode  } from "react";  
import { getVal, setVal } from "@helux/utils";
import { isSimpleField } from "./utils";
import {  Dict, FieldComputedProp } from "./types";  
import { assignObject } from "flex-tools/object";
 



// 默认同步字段属性
export interface DefaultFieldPropTypes{
  value        : any
  defaultValue?: any
  oldValue?    : any
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

// export interface Field<PropTypes extends Dict>{
//   value        : PropTypes['value'];
//   title?       : FieldComputedProp<PropTypes['title']>;                      // 标题
//   defaultValue?: FieldComputedProp<PropTypes['value'] | undefined>;          // 默认值
//   help?        : FieldComputedProp<PropTypes['help']>;                       // 提示信息
//   placeholder? : FieldComputedProp<PropTypes['placeholder']>;                // 占位符
//   required?    : FieldComputedProp<PropTypes['required']>;                   // 是否必填
//   readonly?    : FieldComputedProp<PropTypes['readonly']>;                   // 是否只读
//   visible?     : FieldComputedProp<PropTypes['visible']>;                    // 是否可见
//   enable?      : FieldComputedProp<PropTypes['enable']>;                     // 是否可用
//   validate?    : FieldComputedProp<PropTypes['validate']>;                   // 验证
//   select?      : FieldComputedProp<PropTypes['select']>                      // 枚举值
// }


export interface Field{
  value        : any;
  title?       : FieldComputedProp<string>;                       // 标题
  defaultValue?: FieldComputedProp<any>;                          // 默认值
  oldValue?    : FieldComputedProp<any>;                          // 默认值
  help?        : FieldComputedProp<string>;                       // 提示信息
  placeholder? : FieldComputedProp<string>;                       // 占位符
  required?    : FieldComputedProp<boolean>;                      // 是否必填
  readonly?    : FieldComputedProp<boolean>;                      // 是否只读
  visible?     : FieldComputedProp<boolean>;                      // 是否可见
  enable?      : FieldComputedProp<boolean>;                      // 是否可用
  validate?    : FieldComputedProp<boolean>;                      // 验证
  select?      : FieldComputedProp<any[]>                         // 枚举值
}

 

 // 完整的字段描述
export type Value = {value:any}


// 传递给字段组件的渲染参数
export type FieldRenderProps<PropTypes extends Dict>= Required<Omit<DefaultFieldPropTypes,keyof PropTypes> & PropTypes> & {
  sync	  	    : ()=>void	   		  		                    // 同步状态
  update	  	  : (valueOrUpdater:PropTypes['value'] | ((field:PropTypes)=>void))=>void	  	    // 更新值
  defaultValue  : PropTypes['value'] | undefined
  oldValue      : PropTypes['value'] 
} 

// 用来传递给字段组件进行渲染
export type FieldRender<PropTypes extends Dict>= (props: FieldRenderProps<PropTypes>) => ReactNode

export type FieldProps<PropTypes extends Dict = Dict> = {
	name: string 
	children: FieldRender<PropTypes> | FieldRender<PropTypes>[];
} 
      

export type FieldComponent = React.FC<FieldProps>;


export function createFieldComponent(store: any) {  
  
return <T=Value>(props: T extends Value? FieldProps<T> :  FieldProps<{value:T}>):ReactNode=>{
		const { name } = props; 
		let filedContext:any 				       
		const [state,setState] = store.useState()
		const value = getVal(state, name.split("."))
    const isSimple = isSimpleField(value)
    const valuePath = isSimple ?  name.split(".") :[...name.split("."),'value']    
    // 简单字段指的是仅仅指定值而未指定enable,visible等控制信息的字段，
		if (isSimple) { 
			filedContext  ={	
        __HELUX_FIELD__:true,			      
				value,
				title      : name,
				help       : "",
				defaultValue: undefined,
        oldValue   : undefined,
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

    const filedUpdater =(updater:any)=>{
      if(typeof(updater)=="function"){
        setState((draft:any)=>{
          updater.call(draft,getVal(draft,valuePath))
        })
      }else{
        setState((draft:any)=>setVal(draft,valuePath,updater))
      }
    } 
    // 提供默认值
    const fieldProps = assignObject({
      visible    : true,
      required   : false,
      readonly   : false,
      validate   : true,        
      enable     : true,
      select     : []
    },{
      ...filedContext,
      sync:store.sync(valuePath),
      update:filedUpdater 
    }) 

    return Array.isArray(props.children) ? 
      props.children.map((children:any)=>children(fieldProps))
      : props.children(fieldProps as any)
	} 
}

 
