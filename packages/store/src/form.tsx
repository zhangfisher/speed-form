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
import { type StoreOptions, createStore } from "./store";
import type { ReactFC, RequiredComputedState } from "./types";
import { getVal } from "@helux/utils";
import { AsyncComputedReturns, ComputedReturns } from "./computed";
import { useState } from 'react';

export type FormData = Record<string, any>;


export type FieldRender<Value=any> = (props: RequiredComputedState<Field<Value>>) => ReactNode

export type FieldProps<Value=any> = {
	name: string
	children: FieldRender<Value>;
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
	const store = createStore<StoreOptions<State>>({ state });  
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
		const state = store.useState()
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
 * 判断是否是表单字段元数据
 * @param obj
 */
function isFieldSchema(obj: any): boolean {
	return typeof obj === "object" ? "value" in obj : false;
}

function createFieldElement(store: any) {
	return (props: FieldProps) => {
		const { name } = props;
		// 获取表单字段的值
		const value = getVal(store.state, name.split("."));
    // 
		let filedSchema : RequiredComputedState<Field>

		if (isFieldSchema(value)) {
			filedSchema = value;
		}else {
			filedSchema = {
				value,        
				title      : name,
				tips       : "",
				default    : value,
				visible    : true,
				required   : false,
				readonly   : false,
				validate   : true,        
				enable     : true,
				placeholder: "",        
				select     : [],
			};			
		}
		return props.children(filedSchema)
	};
}
