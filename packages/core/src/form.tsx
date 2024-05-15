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

import React, {	useCallback, useRef } from "react";
import type {  StoreDefine,RequiredComputedState, ComputedOptions, Dict, IStore } from "@speedform/reactive";
import { createStore ,ComputedScopeRef } from "@speedform/reactive";
import type { ReactFC,  ComputedAttr } from "./types";
import { createFieldComponent  } from './field'; 
import { createFieldGroupComponent } from "./fieldGroup";
import { assignObject } from "flex-tools/object/assignObject";
import {   UseActionType, createActionComponent, createUseAction, getAction } from './action';
import { FIELDS_STATE_KEY, VALIDATE_COMPUTED_GROUP } from './consts';
import { defaultObject } from "flex-tools/object/defaultObject";
import { createObjectProxy } from "./utils";
import defaultFormProps from "./form.default"
import { createLoadApi, createGetValuesApi } from "./serialize"; 
import { createValidator, isValidateField } from "./validate";
import { createSubmitComponent } from "./submit";
import { createResetComponent } from "./reset";


export type FormEnctypeType = 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'

export type FormTarget = '_self' | '_blank' | '_parent' | '_top'


export type FormProps<State extends Dict = Dict> = React.PropsWithChildren<{		
	name?:string;													// 表单名称,同时表示表单作用域，即提交范围，默认是整个表单fields		
	enctype?:FormEnctypeType;										// 表单加密方式			
	method?: 'get' | 'post' | 'dialog'  							// 表单提交方式
	action?: string;												// 表单提交地址
	onSubmit?: (value: RequiredComputedState<State>) => void;
	onReset?: (value: RequiredComputedState<State>) => void;
}>;


// 表单组件
export type FormComponent<State extends Record<string, any>> = ReactFC<FormProps<State>>;

export type FormSchemaBase = {
	title?:string					    
    help?:string					    
    tips?:string					    
 	visible?:boolean					
	enable?:boolean					
	validate?:boolean					
	readonly?:boolean			
	dirty?:boolean					
}

// 表单元数据
export type FormSchema<State extends Dict=Dict> = State & Omit<FormSchemaBase,keyof State>

// 创建表单时的参数
export interface FormOptions{
	debug?:boolean										// 是否调试模式
	/**
	 * 何时进行数据校验
	 * - once : 默认值：实时校验
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
	getFieldName?:(valuePath:string[])=>string,
	/**
	 * 单例模式
	 * = true时，所有的计算属性都是共享的，否则每个实例都有自己的计算属性	
	 * = false时，默认会在创建表单时进行深度克隆，这样就可以创建多个互相不干扰的实例
	 */
	singleton?:boolean
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
 * 
 * 在处理表单字段的validate属性时，对其进行处理
 * 
 * 对表单字段中的validator属性进行处理,使得用该属性的传入参数总是当前字段的值
 * 
 * 经过处理后
 * 
 * 如果validator是由computed函数创建的,由于computed函数可以指定依赖和计算上下文,有较强的自由度,因此不做任何处理
 * 仅当validator不是由computed函数创建时
 * 
 * 处理方式:
 *  - 同步计算函数的scope指向当前字段值
 *  - 异步函数的第一个依赖指向当前字段的值value
 *  - 所有validator的group名称均为validate，这样就可以调用computedObjects.runGroup("validate")实现分组验证
 *    或者调用computedObjects.enableGroup(true/false)来启用或禁用分组验证
 * 
 */
function createValidatorHook(valuePath:string[],getter:Function,options:ComputedOptions,formOptions:Required<FormOptions>){		
	if(valuePath.length>=2 && valuePath[0]==FIELDS_STATE_KEY && valuePath[valuePath.length-1]==VALIDATE_COMPUTED_GROUP){	
		// 如果没有指定scope,则默认指向value
		if(!options.scope) options.scope="value"
		if(!options.depends) options.depends=[]
		options.depends.push([...valuePath.slice(0,-1),"value"])
		// 默认=null代表还未校验
		options.initial = null	
		// 默认分组为validate
		options.group=VALIDATE_COMPUTED_GROUP	
		// 默认值
		options.enable = true
	}
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
	defaultObject(define,defaultFormProps) 
}


 
/**
 * 我们约定，每一个动作均由一个{execute:computed(async ()=>{})}对象来描述
 * 
 * 并且对其行为进行了一些约定
 * 
 * - immediate=false : 不会自动执行,需要手动调用action.execute.run()来执行
 * - 让scope默认指向fields,这样就可以直接使用fields下的字段,而不需要fields前缀
 * 
 */
function createActionHook(valuePath:string[],getter:Function,options:ComputedOptions){
	if(valuePath.length>1 && valuePath[valuePath.length-1]=='execute'){
		options.immediate = false			// 默认不自动执行,需要手动调用action.execute.run()来执行
		// 如果没有指定scope，则默认指向fields,这样就可以直接使用fields下的字段,而不需要fields前缀
		if(options.scope){
			if(Array.isArray(options.scope)){
				// 如果scope中没有fields,则添加fields,并且保证fields在第一个位置
				if(options.scope.length>0 && options.scope[0]!=FIELDS_STATE_KEY){
					options.scope.unshift(FIELDS_STATE_KEY)
				}				
			}
		}else{
			options.scope = [FIELDS_STATE_KEY]	
		}
		options.noReentry = true			// 禁止重入
	}
}
/**
 *  对所有位于fields下的的依赖均自动添加fields前缀，这样在声明依赖时就可以省略fields前缀
 * @param valuePath 
 * @param getter 
 * @param options 
 */
function createDepsHook(valuePath:string[],getter:Function,options:ComputedOptions){
	if(valuePath.length > 0 && valuePath[0]==FIELDS_STATE_KEY && options.depends){ 
		options.depends.forEach((depend,i)=>{
			if(Array.isArray(depend) && (depend.length>0 && depend[0]!=FIELDS_STATE_KEY)){
				options.depends![i] = [FIELDS_STATE_KEY,...depend]
			}else if(typeof(depend)=='string' && !depend.startsWith(`${FIELDS_STATE_KEY}.`)){
				options.depends![i] = `${FIELDS_STATE_KEY}.${depend}`
			}
		})
	}
}

/**
 * 
 * 冻结表单，即表单计算函数不再执行
 * 
 * @param value 
 */
function freezeForm(store:any){
	return (value:boolean=true)=>{
		(store as IStore).setEnableMutate(value)
	}
}

/**
 * 声明表单
 * @param schema 
 * @param options 
 * @returns 
 */
export function createForm<State extends Dict=Dict>(schema: State,options?:FormOptions) {
	const opts = assignObject({
		getFieldName:(valuePath:string[])=>valuePath.length > 0 ? valuePath[valuePath.length-1]==='value' ? valuePath.slice(0,-1).join(".") : valuePath.join(".") : '',
		singleton:true,
		validAt:'once',
	},options) as Required<FormOptions>

	// 注入表单默认属性
	setFormDefault(schema)  
	// 创建表单Store对象实例
	const store:IStore<StoreDefine<FormSchema<State>>> = createStore<StoreDefine<FormSchema<State>>>({state:schema as FormSchema<State>},{
		debug:opts.debug,
		singleton:opts.singleton,
		// 所有计算函数的上下文均指向根
		computedThis: ()=>ComputedScopeRef.Root,
		// 计算函数作用域默认指向fields
		computedScope: ()=>[FIELDS_STATE_KEY],
		// 创建计算函数时的钩子函数，可以在创建前做一些不可描述的处理
		onCreateComputed(valuePath,getter,options) {		 
			// 1. 只对validator进行处理,目的是使validate函数依赖于当前字段的值value，将使得validate函数的第一个参数总是当前字段的值
			createValidatorHook(valuePath,getter,options,opts)
			// 2. 对所有位于fields下的的依赖均自动添加fields前缀，这样在声明依赖时就可以省略fields前缀
			createDepsHook(valuePath,getter,options)
			// 3. 将表单actions的execute的onComputedResult指向其current
			createActionHook(valuePath,getter,options)
		},
		onComputedContext(draft,{computedType,contextType: type,valuePath}){
			// 针对计属性
			// 修改fields下的所有计算函数的作用域根，使之总是指向fields开头
			// 这样可以保证在计算函数中,当scope->Root时，总是指向fields，否则就需要state.fields.xxx.xxx
			if(computedType==='Computed' && type=='scope' && valuePath.length >0 && valuePath[0]==FIELDS_STATE_KEY){
				return draft.fields
			}
		},
		/**
		 * 当建立计算对象后时，会调用该函数
		 * 
		 * 如果validAt!=once，则禁用validate的计算，需要在lost-focus或submit时手动校验
		 * 
		 * @param keyPath 
		 * @param computedObject 
		 */
		onCreateComputedObject(keyPath, computedObject) {
			//  如果不马上校验，则禁用计算属性,需要在lost-focus或submit时手动校验
			if(isValidateField(keyPath)){
				computedObject.options.enable = opts.validAt==='once'
			}			
		},
	});  
	type StoreType = typeof store
	type StateType = typeof store.state
	type FieldsType = (StateType)['fields'] 
	type ActionsType = (StateType)['actions'] 
	return {
		store,
		Form: createFormComponent.call<FormOptions,any[],FormComponent<State>>(opts,store),
		Field: createFieldComponent.call(opts,store),	
		Group: createFieldGroupComponent.call(opts,store),	
		Action: createActionComponent<StoreType>(store,opts),
		Submit: createSubmitComponent<StoreType>(store,opts),
		Reset: createResetComponent<StoreType>(store,opts),
		getAction,
		useAction:createUseAction<StoreType>(store) as UseActionType,
    	fields:createObjectProxy(()=>store.state.fields) as FieldsType,		
		actions:createObjectProxy(()=>store.state.actions) as ActionsType,		
		state:store.state as FormSchema<StateType>, 
		useState:store.useState,
		// 冻结表单，即表单计算函数不再执行，当初始化表单数据后，可以调用该函数来冻结表单
		freeze:freezeForm(store),
		// 加载表单数据
		load:createLoadApi(store as IStore,opts),
		// 读取表单数据
		getValues:createGetValuesApi(store as IStore,opts),
		// 引用所有计算属性
		computedObjects:store.computedObjects,
		watchObjects:store.watchObjects,		
		// 手动执行表单校验：即运行所有校验计算函数,scope:
		validate:createValidator(store as IStore)
	};
}



/**
 * 创建表单组件
 * 
 * 当使用标准的表单提交模式时,使用该组件
 * 
 * 
 * <Form></From>			// 表单组件
 * <Network.Form<typeof Network.wifi> name="wifi">
 * 	   <Network.Field name="ssid"></Network.Field>			// 声明字段
 * 	   <Network.Submit>
 *        {({action})=>{
 * 			retrun <button onClick={action()}></button>
 *        }}
 *     </Network.Submit>
 * </Network.Form>			// 声明子表单
 * 
 * 
 * 
 * @param this 
 * @param store 
 * @returns 
 */
function createFormComponent<Fields extends Dict>(this:FormOptions,store: IStore): FormComponent<Fields> {
		
	return React.forwardRef<HTMLFormElement>((props: FormProps<Fields>,ref:React.ForwardedRef<HTMLFormElement>) => {
		const {children } = props; 
		// 提交表单
		const onSubmit = useCallback((ev: React.FormEvent<HTMLFormElement>) => {
			// 手动运行校验
			if(this.validAt==='submit'){
				store.computedObjects.runGroup(VALIDATE_COMPUTED_GROUP)
			}


		},[]);
		// 重置表单
		const onReset = useCallback((e: React.FormEvent<HTMLFormElement>) => {

		},[]);
		return (
			<form ref={ref} className="speedform"  {...props} onSubmit={onSubmit} onReset={onReset}>
				{children}
			</form>
		)
	}) as FormComponent<Fields> 
}


 
/**
 * 在组件中使用
 * 
 * const Book = useForm<>(()=>{{
 * 		name:"书籍名称"
 * 		fields:{
 * 		}
 * }},options)
 * 
 * 
 * @param schema 
 * @param options 
 * @returns 
 */
export function useForm<State extends Dict=Dict>(schema:()=>State,options?:FormOptions) {
	const ref = useRef<ReturnType<typeof createForm<ReturnType<typeof schema>>>>()
	if(ref.current==null){
		ref.current = createForm<ReturnType<typeof schema>>(schema(),options)
	}
	return ref.current
}