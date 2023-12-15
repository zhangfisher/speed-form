/**
 *
 * const MyComponent = ()=>{
 *
 * // 用来保存表单数据
 * const Book = useFrom({
 *          name:"书籍名称"
 *          author:{
 *              value:0,
 *              default:10,
 *              visible:(book)=>{},
 *              enable:(book)=>{},
 *              validate:(book)=>{},
 *              enum:async (book)=>{}
 *          },
 *          category:async((book)=>{
 *              return await getBookCategorys()
 *          }),
 *          price:100
 * })
 *
 *
 * return (
 *      <Book.Form>
 *          <Book.Field name={Book.name}>
 *              {({value,enable,visible,default})=>{
 *                  return <input value={value}/>
 *              }}
 *          </Book.Field>
 *          <Book.Field name={newBook.state.price}>
 *               {({value,enable,visible,default})=>{
 *                  return <input value={value}/>
 *              }}
 *          </Book.Field>
 *      </Book.Form>
 *   )
 * }
 *
 */

import React, {	ReactNode, useCallback } from "react";
import { type StoreDefine, createStore } from "./store";
import type { ReactFC, RequiredComputedState } from "./types";
import { getVal, setVal } from "@helux/utils";
import { AsyncComputedReturns, ComputedReturns } from "./computed"; 

export type FormData = Record<string, any>;


export type FieldRender<Value=any> = (props: RequiredComputedState<Field<Value>>) => ReactNode

export type FieldProps<Value=any> = {
	name: string 
	children: FieldRender<Value> | FieldRender<Value>[];
} & Record<string,any>


// 用来声明表单字段的元数据
export type FieldSchema<R=any> = R  | ComputedReturns<R> | AsyncComputedReturns<R>;
        


export type FieldComponent = React.FC<FieldProps>;

 
export interface Field<Value = any> extends Record<string, any>{  
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
  sync	  	  : ()=> ()=>void	   		  		        // 同步状态
  update	  	: ()=> (value:Value)=>void	   		  		  // 更新值
}
 



export type ComputedField<T extends FormData> = RequiredComputedState<T>
    

export type FormProps<State extends FormData = FormData> = React.PropsWithChildren<{
	onSubmit?: (value: RequiredComputedState<State>) => void;
	onReset?: (value: RequiredComputedState<State>) => void;
}>;

// 表单组件
export type FormComponent<State extends Record<string, any>> = ReactFC<FormProps<State>>;

// 表单对象
export interface FormObject<State extends Record<string, any>> {
	Form: FormComponent<State>;
	Field: FieldComponent;
  	fields:State
  	// 表单状态
  	status:{
    	valid:boolean			// 表单数据是否有效
    	dirty:boolean			// 数据已经更新过
  	}
}

export function createForm<State extends FormData>(state: State) {
	const store = createStore<StoreDefine<State>>({ state },{computedContext:'root'});  
	return {
		Form: createFormElement<State>(store),
		Field: createFieldElement(store),	
    	fields:store.state,
		store:store    
	};
}

function createFormElement<State extends FormData>(store: any): FormComponent<State> {
	return (props: FormProps<State>) => {
		const { children } = props; 
		const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    
		},[]);
		const onReset = useCallback((e: React.FormEvent<HTMLFormElement>) => {

		},[]);
		return (
			<form onSubmit={onSubmit} onReset={onReset}>
				{children}
			</form>
		);
	};
}

/**
 * 判断是否是表单字段是否是一个简单的字段
 * 
 * 简单的字段没有{value:<>}形式


 * @param obj
 */
function isSimpleField(value: any): boolean {
	return !(typeof value === "object" && "value" in value)
}

function createFieldElement(store: any) {
	return (props: FieldProps) => {
		const { name } = props; 
		let filedContext : RequiredComputedState<Field> 				       
		const [state,setState] = store.useState()
		const value = getVal(state, name.split("."))
    const isSimple = isSimpleField(value)
    const valuePath = isSimple ?  name.split(".") :[...name.split("."),'value']
		if (isSimple) {
			filedContext  ={				      
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
