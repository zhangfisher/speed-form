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
import { type StoreDefine, createStore,RequiredComputedState, ComputedContextRef, ComputedOptions, AsyncComputedReturns, AsyncComputedObject } from "helux-store";
import type { ReactFC, Dict } from "./types";
import { FieldComponent,  createFieldComponent } from "./field"; 
import { FieldGroupComponent, createFieldGroupComponent } from "./fieldGroup";
import { assignObject } from "flex-tools/object/assignObject";
import { createActionComponent } from "./action";


export type FormProps<State extends Dict = Dict> = React.PropsWithChildren<{
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
	actions:FormActions<State>	
	submit:()=>void
	reset:()=>{}
	load:(data:Dict)=>void							// 加载表单数据
  	// 表单状态
  	status:{
    	valid:boolean								// 表单数据是否有效
    	dirty:boolean								// 数据已经更新过
  	}	  
}

export type ActionComputedAttr<R=unknown,Fields=any> = ((fields:Fields)=>R)  
  | ((fields:Fields)=>Promise<R>)
  | AsyncComputedObject<R>
  | AsyncComputedReturns<R>
  | R  

export interface FormActionOptions<Fields extends Dict=Dict>{
	name?:string					// 动作名称，如submit,reset,snap
	title?:ActionComputedAttr<string,Fields>					// 动作标题
 	visible?:ActionComputedAttr<boolean,Fields>					// 是否可见
	enable?:ActionComputedAttr<boolean,Fields>					// 是否可用		
	[key:string]:ActionComputedAttr< unknown,Fields>			// 其他可扩展的动作参数
}

export interface FormOptions<Fields = Dict>{
	// 何时进行数据验证, once=实时校验, lost-focus=失去焦点时校验, submit=提交时校验
	validateAt?: 'once' | 'lost-focus' | 'submit'
	// 用来生成字段名，如果不指定，则使用默认的字段名生成规则
	// 默认的字段名生成规则是: 字段名 = 字段路径.join('.'),
	// 当字段名称含有.时，可能会有岐义,此时可以自行更改字段名称规则
	getFieldName:(valuePath:string[])=>string
	// 声明表单动作，如{submit:{title:"提交"}}
	actions:Record<string,FormActionOptions>
}

export type FormActions<State> = {}



/**
 * 表单数据
 */
export interface FormData<Fields,Actions>{
	name?:string,
	title?:string,	
	submits:{},
	fields:Fields
	actions:Actions
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
	options.initial = true	// 初始化true
}


export function createForm<Fields extends Dict>(fields: Fields,options?:FormOptions<Fields>) {
	const opts = assignObject({
		getFieldName:(valuePath:string[])=>valuePath.join(".")
	},options) as Required<FormOptions>
	const store = createStore<StoreDefine<Fields>>({ state:fields },{
		computedContext: ComputedContextRef.Root,
		onCreateComputed(keyPath,getter,options) {			
			if(keyPath[keyPath.length-1]=='validate'){	// 只对validator进行处理
				return createValidatorHook(keyPath,getter,options)
			}
		},
	});  
	return {
		Form: createFormComponent.call<FormOptions,any[],FormComponent<Fields>>(opts,store),
		Field: createFieldComponent.call(opts,store),	
		Group: createFieldGroupComponent.call(opts,store),	
		Action: createActionComponent.call(opts,store),	
    	fields:store.state,
		store:store    
	};
}

function createFormComponent<Fields extends Dict>(this:FormOptions,store: any): FormComponent<Fields> {
	return (props: FormProps<Fields>) => {
		const { children } = props; 
		const onSubmit = useCallback((ev: React.FormEvent<HTMLFormElement>) => {
			console.log("submit:",ev)
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


