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

import React, {	useCallback } from "react";
import { type StoreDefine, createStore,RequiredComputedState, AsyncComputedObject, ComputedContextTarget, ComputedOptions } from "helux-store";
import type { ReactFC,  FormData, Dict, ChangeFieldType} from "./types";
import { FieldComponent,  createFieldComponent } from "./field"; 
import { FieldGroupComponent, createFieldGroupComponent } from "./fieldGroup";


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
	Group: FieldGroupComponent
  	fields:State
	submit:()=>void
	reset:()=>{}
	load:(data:Dict)=>void							// 加载表单数据
  	// 表单状态
  	status:{
    	valid:boolean								// 表单数据是否有效
    	dirty:boolean								// 数据已经更新过
  	}	  
}

export interface FormOptions{
	// 何时进行数据验证, once=实时校验, lost-focus=失去焦点时校验, submit=提交时校验
	validateAt?: 'once' | 'lost-focus' | 'submit'
}


/**
 * 对表单字段中的validator属性进行处理,使用该属性的传入参数总是当前字段的值
 * 
 * 经过处理后
 * 
 * 如果validator是由computed函数创建的,由于computed函数可以指定依赖和计算上下文,有较强的自由度,因此不做任何处理
 * 仅当validator是一个普通的同步函数和异步函数时,才进行处理
 * 
 * 处理方式:
 *  - 同步计算函数的context指向当前字段值
 *  - 异步函数的第一个依赖指向当前字段的值value
 * 
 */
function createValidatorHook(keyPath:string[],getter:Function,options:ComputedOptions){		
	if(options.async){	// 异步计算函数
		// 异步计算的输入参数是([depends],ctx),如果异步计算函数不是使用computed声明的,没有指定依赖，则自动将对对段值value作为第一个依赖
		const deps = options.depends || []
		if(Array.isArray(deps)) deps.splice(0,0,[...keyPath.slice(0,keyPath.length-1),'value'])
		options.depends = deps
	}else{//同步计算函数
		//同步计算函数将从默认的根状态对象更改为当前字段的值
		options.context = 'value'  // == 上下文总是指向当前字段的值
	}  
}


export function createForm<State extends FormData>(state: State,options?:FormOptions) {
	const store = createStore<StoreDefine<State>>({ state },{
		computedContext: ComputedContextTarget.Root,
		onCreateComputed(keyPath,getter,options) {
			// 只对validator进行处理
			if(keyPath[keyPath.length-1]=='validate'){
				return createValidatorHook(keyPath,getter,options)
			}
		},
	});  
	return {
		Form: createFormComponent<State>(store),
		Field: createFieldComponent(store),	
		Group: createFieldGroupComponent(store),	
    	fields:store.state,
		store:store    
	};
}

function createFormComponent<State extends FormData>(store: any): FormComponent<State> {
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


