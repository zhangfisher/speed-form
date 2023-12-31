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
import { type StoreDefine, createStore,RequiredComputedState, ComputedScopeRef, ComputedOptions  } from "helux-store";
import type { ReactFC, Dict, ComputedAttr } from "./types";
import { FieldComponent,  createFieldComponent } from "./field"; 
import { FieldGroupComponent, createFieldGroupComponent } from "./fieldGroup";
import { assignObject } from "flex-tools/object/assignObject";
import { ActionComputedAttr, FormAction, FormActions, createActionComponent } from "./action";


export type FormProps<State extends Dict = Dict> = React.PropsWithChildren<{
	// 可选的表单名称，当用在子表单时指定
	scope?: string | string[];									
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



export interface FormOptions<Fields extends Dict = Dict>{
	// 表单数据
	title?:ActionComputedAttr<string>					    // 动作标题    
    help?:ActionComputedAttr<string>					    // 动作帮助
    tips?:ActionComputedAttr<string>					    // 动作提示
 	visible?:ActionComputedAttr<boolean>					// 是否可见
	enable?:ActionComputedAttr<boolean>						// 是否可用		
	valid?:ActionComputedAttr<boolean>						// 是否有效
	readonly?:ActionComputedAttr<boolean>				    // 是否只读	
	actions?:FormActions<Fields>							// 声明表单动作
	// 何时进行数据验证, once=实时校验, lost-focus=失去焦点时校验, submit=提交时校验
	validAt?: 'once' | 'lost-focus' | 'submit'	
	/**
	* 用来生成字段名，如果不指定，则使用默认的字段名生成规则
	* 默认的字段名生成规则是: 字段名 = 字段路径.join('.'),
	* 当字段名称含有.时，可能会有岐义,此时可以自行更改字段名称规则
	* @param valuePath 
	* @returns  {string}
	*/
	getFieldName?:(valuePath:string[])=>string	
}



export type FormStatus = 'idle' 
	| 'validating' 			// 正在校验
	| 'submiting'  			// 正在提交中	
	| 'error'				// 表单错误


/**
 * 表单基础
 */
export interface IFormState<Fields extends Dict = Dict,Actions extends Dict = Dict>{

}


/**
 * 
 * 表单状态数据==响应式数据
 * 
 */
export interface FormState<Fields extends Dict = Dict,Actions extends Dict = Dict>{
	name?:string,										// 表单名称
	title?:ComputedAttr<string>,						// 表单标题
	status?	: ComputedAttr<FormStatus>					// 表单状态
	dirty?  : ComputedAttr<boolean>						// 表单数据是否已脏，即已更新过
	valid?  : ComputedAttr<boolean>						// 表单是否有效
	actions	: Actions									// 表单动作
	fields	: Fields
	[key:string] : any
}

/**
 * 对表单字段中的validator属性进行处理,使用该属性的传入参数总是当前字段的值
 * 
 * 经过处理后
 * 
 * 如果validator是由computed函数创建的,由于computed函数可以指定依赖和计算上下文,有较强的自由度,因此不做任何处理
 * 仅当validator不是由computed函数创建时
 * 
 * 处理方式:
 *  - 同步计算函数的context指向当前字段值
 *  - 异步函数的第一个依赖指向当前字段的值value
 * 
 */
function createValidatorHook(keyPath:string[],getter:Function,options:ComputedOptions){		
	// 如果没有指定scope,则默认指向value
	if(options.scope==undefined) options.scope="value"
	options.initial = true	// 初始化true
}


export function createForm<Fields extends Dict>(fields: Fields,options?:FormOptions<Fields>) {
	const opts = assignObject({
		title:"",
		help:"",
		visible:true,
		enable:true,
		readonly:false,
		actions:{},
		getFieldName:(valuePath:string[])=>valuePath.join(".")
	},options) as Required<FormOptions>

	// 创建表单Store对象实例
	type FormStoreType = StoreDefine<FormState<Fields,(typeof opts)['actions']>>


	const store = createStore<FormStoreType>({ 
		state:{
			fields,
			actions:opts.actions
		}
	},{
		// 所有计算函数的上下文均指向根
		computedThis: ComputedScopeRef.Root,
		// 计算函数作用域默认指向fields
		computedScope: ['fields'],
		// 对validator进行特殊处理
		onCreateComputed(keyPath,getter,options) {		
			// 只对validator进行处理,目的是使validate函数的第一个参数指向当前字段的值
			if(keyPath.length>=2 && keyPath[0]=='fields' && keyPath[keyPath.length-1]=='validate'){	
				createValidatorHook(keyPath,getter,options)
			} 
			
		},
	});  
	return {
		Form: createFormComponent.call<FormOptions,any[],FormComponent<Fields>>(opts,store),
		Field: createFieldComponent.call(opts,store),	
		Group: createFieldGroupComponent.call(opts,store),	
		Action: createActionComponent.call(opts,store),	
    	fields:store.state.fields,
		actions:store.state.actions,
		store:store    
	};
}


/**
 * 创建表单组件
 * 
 * <Form></From>			// 表单组件
 * <Network.Form<typeof Network.wifi> scope="wifi">
 * 	   <Network.Field name="ssid"></Network.Field>			// 声明字段
 * 	   <Network.Action type="submit">
 *        {({action})=>{
 * 			retrun <button onClick={action()}></button>
 *        }}
 *     </Network.Action>
 * </Network.Form>			// 声明子表单
 * 
 * 
 * 
 * @param this 
 * @param store 
 * @returns 
 */
function createFormComponent<Fields extends Dict>(this:FormOptions,store: any): FormComponent<Fields> {
	return (props: FormProps<Fields>) => {
		const { children,scope } = props; 

		// 表单作用域
		

		const onSubmit = useCallback((ev: React.FormEvent<HTMLFormElement>) => {
			console.log("submit:",ev)
		},[]);
		const onReset = useCallback((e: React.FormEvent<HTMLFormElement>) => {

		},[]);


		return (
			<form onSubmit={onSubmit} onReset={onReset} className="speed-form">
				{children}
			</form>
		);
	};
}


