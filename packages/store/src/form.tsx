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
import { useStore, type StoreOptions } from "./store";
import type { ComputedState, ReactFC, RequiredComputedState } from "./types";
import { getVal } from "@helux/utils";
import { AsyncComputedReturns, ComputedReturns } from "./computed";
import { RequiredDeep } from "type-fest"


export type FieldProps<Value=any> = {
	name: string  
	children: (props: RequiredDeep<ComputedState<Field<Value>>>) => ReactNode;
} & Record<string,any>

// 用来声明表单字段的元数据
export type FieldSchema<R=any> = R  | ComputedReturns<R> | AsyncComputedReturns<R>;
        


export type FieldComponent = React.FC<FieldProps>;

 
export interface Field<Value = any> extends Record<string, any>{  
  value: Value;
  title?: any;                              // 标题
  default?: Value;                          // 默认值
  tips?: string;                            // 提示信息
  placeholder?: string;                     // 占位符
  required?: FieldSchema<boolean>;          // 是否必填
  readonly?: FieldSchema<boolean>;          // 是否只读
  visible?: (...args:any)=>boolean;           // 是否可见
  enable?: FieldSchema<boolean>;            // 是否可用
  validate?: FieldSchema<boolean>;          // 验证
  enum?: FieldSchema                        // 枚举值
}

export type ComputedField<T extends FormData> = RequiredDeep<RequiredComputedState<T>>
    
export type FormData = Record<string, any>;

export type FormProps<State extends FormData = FormData> =
	React.PropsWithChildren<{
		onSubmit?: (value: ComputedState<State>) => void;
		onReset?: (value: ComputedState<State>) => void;
	}>;

// 表单组件
export type FormComponent<State extends Record<string, any>> = ReactFC<FormProps<State>>;

// 表单对象
export interface FormObject<State extends Record<string, any>> {
	Form: FormComponent<State>;
	Field: FieldComponent;
  fields:State
}

export function useForm<State extends FormData>(state: State) {
	// 创建响应式对象用来保存表单数据
	const store = useStore<StoreOptions<State>>({ state });
	return {
		Form: createForm<State>(store),
		Field: createField<ComputedState<State>>(store),
    fields:store.state as RequiredComputedState<State>
	};
}

function createForm<State extends FormData>(store: any): FormComponent<State> {
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
 * 判断是否是表单字段元数据
 * @param obj
 */
function isFieldSchema(obj: any): boolean {
	return typeof obj === "object" ? "value" in obj : false;
}

function createField<State extends FormData>(store: any) {
	return (props: FieldProps) => {
		const { name } = props;
		// 获取表单字段的值
		const value = getVal(store.state, name.split("."));
    // 
		let filedSchema 


		if (isFieldSchema(value)) {
			filedSchema = value;
		}else {
			filedSchema = {
				value,        
        title: name,
        tips: "",
        placeholder: "",        
        default: value,
				visible: true,
				validate: true,        
				enable: true,
        enum: [],
			};
			return props.children(filedSchema)
		}
	};
}
