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
import { type StoreSchema, createStore,RequiredComputedState, ComputedScopeRef, ComputedOptions, IStore, computed, AsyncComputedParams, AsyncComputedObject } from "helux-store";
import type { ReactFC, Dict, ComputedAttr } from "./types";
import { FieldComponent, createFieldComponent  } from './field'; 
import { FieldGroupComponent, createFieldGroupComponent } from "./fieldGroup";
import { assignObject } from "flex-tools/object/assignObject";
import { ActionRecords, FormActions, createActionComponent, createFormActions } from './action';
import { ACTIONS_STATE_KEY, FIELDS_STATE_KEY } from "./consts";
import { defaultObject } from "flex-tools/object/defaultObject";
import { markRaw } from 'helux';


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
	actions:FormActions,
	submit:()=>void
	reset:()=>{}
	load:(data:Dict)=>void							// 加载表单数据
  	// 表单状态
  	status:{
    	valid:boolean								// 表单数据是否有效
    	dirty:boolean								// 数据已经更新过
  	}	  
}

// 表单元数据
export interface FormSchemaBase extends Record<string, any> {
	title?:ComputedAttr<string>					    // 动作标题    
    help?:ComputedAttr<string>					    // 动作帮助
    tips?:ComputedAttr<string>					    // 动作提示
 	visible?:ComputedAttr<boolean>					// 是否可见
	enable?:ComputedAttr<boolean>					// 是否可用		
	valid?:ComputedAttr<boolean>					// 是否有效
	readonly?:ComputedAttr<boolean>				    // 是否只读	  
	dirty?:ComputedAttr<boolean>					// 数据已经更新过	
}

export interface FormSchema extends FormSchemaBase{
	fields:Dict
	actions:Dict
}

// 创建表单时的参数
export interface FormOptions<Schema=Dict>{
	/**
	 * 何时进行数据验证
	 * - once : 实时校验 
	 * - lost-focus : 失去焦点时校验 
	 * - submit : 提交时校验
	 */
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
	| 'loading'				// 正在加载数据
	| 'validating' 			// 正在校验数据
	| 'submiting'  			// 正在提交中	
	| 'error'				// 表单错误
 


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
	if(options.depends==undefined) options.depends=[]
	options.depends.push([...keyPath.slice(0,-1),"value"])
	options.initial = true		// 初始化true
}


/**
 *  设置表单默认属性
 * 	title?:ComputedAttr<string>					    // 动作标题    
    help?:ComputedAttr<string>					    // 动作帮助
    tips?:ComputedAttr<string>					    // 动作提示
 	visible?:ComputedAttr<boolean>					// 是否可见
	enable?:ComputedAttr<boolean>					// 是否可用		
	valid?:ComputedAttr<boolean>					// 是否有效
	readonly?:ComputedAttr<boolean>				    // 是否只读	  
 * @param define 
 */
function setFormDefault(define:any){
	defaultObject(define,{
		title:"SpeedForm",
		help:"",
		tips:"",
		status:"idle",
		dirty:false,
		valid:true,
		readonly:false,
		enable:true,
		visible:true
	})
	// 为Actions提供默认值
	if(define.actions){
		Object.entries(define.actions).forEach(([name,action])=>{
			if(action && typeof(action)=='object' ){
				defaultObject(action,{
					loading:false,
					enable:true,
					visible:true,
					title:name,
					help:"",
					tips:"",					
					count:0,
					progress:0,
					error:null
				})
			}			
		})
	}
}

/**
 * 加载表单数据
 */ 
function loadFormData(store:any){ 

}

function filterFormActions<Schema extends Dict=Dict>(define: Schema): Record<string, Function> {
	return Object.entries(define.actions || {}).reduce((actions: Record<string, Function>, [name, action]: [string, any]) => {
		const executor = action.execute
		actions[name] = executor;		
		const actionDeps = [
			[ACTIONS_STATE_KEY,name,"count"],
			[ACTIONS_STATE_KEY,name,"scope"]	
		]
		// 使用原始的async方式声明动作
		if(action.execute.__COMPUTED__ == undefined){		
			action.execute = computed(executor,actionDeps,
			{
				// 动作的上下文总是指向scope所描述的路径
				// 例：  scope="wifi"，则动作的上下文总是指向state.actions.wifi,将作为第一个参数传入execute函数
				scope:"@scope",	
				toComputedResult:'current'
			})
		}else{ // 使用computed方式声明动作
			const executorParms = action.execute as  AsyncComputedParams<any>
			executorParms.options.scope = "@scope"
			executorParms.options.toComputedResult = 'current'
			if(!Array.isArray(executorParms.options.depends)) executorParms.options.depends = []
			executorParms.options.depends.push(...actionDeps)
		}
		return actions;
	}, {});
}

 

export function createForm<Schema extends Dict=Dict>(define: Schema,options?:FormOptions<Schema>) {
	const opts = assignObject({
		getFieldName:(valuePath:string[])=>valuePath.join(".")
	},options) as Required<FormOptions<Schema>>

	// 注入表单默认属性
	setFormDefault(define) 
	// 提取所有动作的execute函数，用来创建表单动作对象计算函数
	const actionExecutors = filterFormActions(define);

	// 创建表单Store对象实例
	const store = createStore<StoreSchema<Schema>>({state:define},{
		// 所有计算函数的上下文均指向根
		computedThis: ComputedScopeRef.Root,
		// 计算函数作用域默认指向fields
		computedScope: [FIELDS_STATE_KEY],
		// 创建计算函数时的钩子函数，可以在创建前做一些不可描述的处理
		onCreateComputed(keyPath,getter,options) {		 
			// 1. 只对validator进行处理,目的是使validate函数依赖于当前字段的值value，将使得validate函数的第一个参数总是当前字段的值
			if(keyPath.length>=2 && keyPath[0]==FIELDS_STATE_KEY && keyPath[keyPath.length-1]=='validate'){	
				createValidatorHook(keyPath,getter,options)
			}
			// 2. 对所有位于fields下的的依赖均自动添加fields前缀，这样在声明依赖时就可以省略fields前缀
			if(keyPath.length > 0 && keyPath[0]==FIELDS_STATE_KEY && options.depends){ 
				options.depends.forEach((depend,i)=>{
					if(Array.isArray(depend) && (depend.length>0 && depend[0]!=FIELDS_STATE_KEY)){
						options.depends![i] = [FIELDS_STATE_KEY,...depend]
					}else if(typeof(depend)=='string' && !depend.startsWith(`${FIELDS_STATE_KEY}.`)){
						options.depends![i] = `${FIELDS_STATE_KEY}.${depend}`
					}
				})
			}
			// 3. 将表单actions的execute的onComputedResult指向其current
			// 比如: actions.ping.execute，则执行execute时，其onComputedResult指向current,此时可以直接使用action.ping.loading来代表动作正在执行
			// action.ping.value来代表动作的返回值，action.ping.error来代表动作的错误

			if(keyPath.length==3 && keyPath[0]==ACTIONS_STATE_KEY && keyPath[2]=='execute'){
				options.toComputedResult ='current'
				options.immediate = false

			}
			// 让表单actions的scope默认指向根
			if(keyPath.length>0 && keyPath[0]==ACTIONS_STATE_KEY ){
				options.scope = ComputedScopeRef.Root
			}

		},
		onComputedContext(draft,{type,valuePath}){
			// 修改fields下的所有计算函数的作用域根，使之总是指向fields开头
			// 这样可以保证在计算函数中,当scope->Root时，总是指向fields，否则就需要state.fields.xxx.xxx
			if(type=='scope' && valuePath.length >0 && valuePath[0]==FIELDS_STATE_KEY){
				return draft.fields
			}
		}
	});  
	type StoreType = typeof store 
	type FieldsType = (typeof store.state)['fields'] 
	type ActionsType = (typeof store.state)['actions'] 
	const actions = createFormActions.call<IStore,[ActionsType],ActionRecords<Schema['actions']>>(store as unknown as IStore,actionExecutors)
	return {
		Form: createFormComponent.call<FormOptions,any[],FormComponent<Schema>>(opts,store),
		Field: createFieldComponent.call(opts,store),	
		Group: createFieldGroupComponent.call(opts,store),	
		Action: createActionComponent<StoreType,ActionsType>(store,store.state.actions,actions,opts),	
    	fields:store.state.fields as FieldsType,		
		state:store.state as (typeof store.state) & RequiredComputedState<FormSchemaBase> & {actions:ActionsType},
		useState:store.useState,
		load:loadFormData,
		actions,
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


 