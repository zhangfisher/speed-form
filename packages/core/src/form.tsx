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
import React from 'react'
import  { useCallback } from "react";
import type {  Dict,RequiredComputedState, ComputedOptions, IStore, StoreOptions, ComputedState } from "@speedform/reactive";
import { createStore  } from "@speedform/reactive";
import type { ReactFC,  ComputedAttr } from "./types";
import { createFieldComponent, FormFields  } from './field'; 
import { createFieldGroupComponent } from "./fieldGroup";
import { assignObject } from "flex-tools/object/assignObject";
import {   FormActions, UseActionType, createActionComponent, createUseAction, getAction } from './action';
import { FIELDS_STATE_KEY, VALIDATE_COMPUTED_GROUP } from './consts';
import { defaultObject } from "flex-tools/object/defaultObject";
import { createObjectProxy } from "./utils";
import { createLoadApi, createGetValuesApi } from "./serialize"; 
import { createValidator, isValidateField, validate } from "./validate";
import { createSubmitComponent } from "./submit";
import { createResetComponent } from "./reset"; 
import { dirty } from "./dirty"; 

export const defaultFormProps =  {
    name     : "SpeedForm",
    title    : "SpeedForm",
    help     : "",
    tips     : "",
    status   : "idle",    
    dirty    : dirty(['fields']),               
    validate : validate({entry: ['fields']}),
    readonly : false,
    enable   : true,
    visible  : true,
	fields   : {},
	actions  : {}
}  
    
export type FormEnctypeType = 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'

export type FormTarget = '_self' | '_blank' | '_parent' | '_top'

export type FormState<State extends Dict> = ComputedState<typeof defaultFormProps & State> 
export type FormStore<State extends Dict> = IStore<typeof defaultFormProps & State> 

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
	name   	: ComputedAttr<string>							    
	title   : ComputedAttr<string>							    
    help 	: ComputedAttr<string>							    
    tips 	: ComputedAttr<string>							    
 	visible : ComputedAttr<boolean>					
    url 	: ComputedAttr<string>					    		
	enable  : ComputedAttr<boolean>					
	validate: ComputedAttr<boolean>
	readonly: ComputedAttr<boolean>			
	dirty   : ComputedAttr<boolean>	 
}

export type FormDefine = Partial<FormSchemaBase> & {
	fields: FormFields
	actions?: FormActions
} 
 
export type FormSchema<State extends FormDefine = FormDefine> = FormSchemaBase & {
	fields : State['fields']
	actions: State['actions']
} 
 

// 创建表单时的参数
export interface FormOptions<T extends Dict> extends Partial<StoreOptions<T>>{	
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
export type RequiredFormOptions<T extends Dict = Dict>  = Required<FormOptions<T>>



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
// export interface FormState<Fields extends Dict = Dict,Actions extends Dict = Dict>{
// 	name?:string,										// 表单名称
// 	title?  : ComputedAttr<string>,						// 表单标题
// 	status?	: ComputedAttr<FormStatus>					// 表单状态
// 	dirty?  : ComputedAttr<boolean>						// 表单数据是否已脏，即已更新过
// 	valid?  : ComputedAttr<boolean>						// 表单是否有效	
// 	fields	: Fields									// 表单字段
// 	actions	: Actions									// 表单动作	
// }


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
function createValidatorHook(valuePath:string[],options:ComputedOptions){		
	if(valuePath.length>=2 && valuePath[0]==FIELDS_STATE_KEY && valuePath[valuePath.length-1]==VALIDATE_COMPUTED_GROUP){	
		// 如果没有指定scope,则默认指向当前字段的value
		if(!options.scope) options.scope="./value"
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
function setFormDefault<T extends Dict>(define:T){
	return defaultObject(define,defaultFormProps) as typeof defaultFormProps & T 
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
function createActionHook(valuePath:string[],options:ComputedOptions){
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
function createDepsHook(valuePath:string[],options:ComputedOptions){
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
		(store as IStore).enableComputed(value)
	}
}

/**
 * 创建声明表单
 * 
 * @param schema    
 * @param options 
 * @returns 
 */
export function createForm<State extends FormDefine=FormDefine>(schema: State,options?:FormOptions<FormSchema<State>>) {
	const opts = assignObject({
		getFieldName:(valuePath:string[])=>valuePath.length > 0 ? valuePath[valuePath.length-1]==='value' ? valuePath.slice(0,-1).join(".") : valuePath.join(".") : '',
		validAt:'once',
	},options) as RequiredFormOptions<State>
 
	// 注入表单默认属性
	setFormDefault(schema)  
	
	// 创建表单Store对象实例
	const store = createStore(schema ,{
		debug:opts.debug,
		// 计算函数作用域默认指向fields
		scope: ()=>[FIELDS_STATE_KEY],
		// 创建计算函数时的钩子函数，可以在创建前做一些不可描述的处理
		onCreateComputed(valuePath,_,options) {		 
			// 1. 只对validator进行处理,目的是使validate函数依赖于当前字段的值value，将使得validate函数的第一个参数总是当前字段的值
			createValidatorHook(valuePath,options)
			// 2. 对所有位于fields下的的依赖均自动添加fields前缀，这样在声明依赖时就可以省略fields前缀
			createDepsHook(valuePath,options)
			// 3. 将表单actions的execute的onComputedResult指向其current
			createActionHook(valuePath,options)
		},
		onComputedDraft(draft,{computedType,valuePath}){
			// 针对计属性
			// 修改fields下的所有计算函数的作用域根，使之总是指向fields开头
			// 这样可以保证在计算函数中,当scope->Root时，总是指向fields，否则就需要state.fields.xxx.xxx
			if(computedType==='Computed' && valuePath.length >0 && valuePath[0]==FIELDS_STATE_KEY){
				return draft.fields
			}
		} 
	}); 

	/**
	 * 当建立计算对象后时，会调用该函数
	 * 如果validAt!=once，则禁用validate的计算，需要在lost-focus或submit时手动校验 
	 */ 
	store.on("computed:created",(computedObject)=>{
		// 如果不马上校验，则禁用计算属性,需要在lost-focus或submit时手动校验
		if(isValidateField(computedObject.path)){
			computedObject.options.enable = opts.validAt==='once'
		}
	})
	type StateType = ComputedState<typeof defaultFormProps> & typeof store.state
	type StoreType = FormStore<State>
	type FieldsType = StateType['fields'] 
	type ActionsType = StateType['actions'] 
	// 将store强制转换为FormStore，因为表单的根元数据如dirty等属性需要提供默认类型提示
	const formStore = store as unknown as StoreType
	 
	return {  
		state          : formStore.state,  
		useState       : formStore.useState, 
		setState       : formStore.setState, 
		Form           : createFormComponent<State>(formStore,opts),
		Field          : createFieldComponent<State>(formStore,opts),	
		Group          : createFieldGroupComponent<State>(formStore,opts),	
		Action         : createActionComponent<State>(formStore),
		Submit         : createSubmitComponent<State>(formStore),
		Reset          : createResetComponent<State>(formStore,opts),		
		useAction      : createUseAction<State>(formStore) as UseActionType,
    	fields         : createObjectProxy(()=>formStore.state.fields) as FieldsType,		
		actions        : createObjectProxy(()=>formStore.state.actions!) as ActionsType,		
		getAction,		
		freeze         : freezeForm(store), 
		load           : createLoadApi<State>(formStore,opts), 
		getValues      : createGetValuesApi<State>(formStore ,opts), 
		computedObjects: formStore.computedObjects,
		watchObjects   : formStore.watchObjects,		 
		validate       : createValidator<State>(formStore)
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
function createFormComponent<State extends Dict>(store: FormStore<State>,formOptions:RequiredFormOptions<State>): FormComponent<State['fields']> {
		
	return React.forwardRef<HTMLFormElement>((props: FormProps<State['fields']>,ref:React.ForwardedRef<HTMLFormElement>) => {
		const {children } = props; 
		// 提交表单
		const onSubmit = useCallback((ev: React.FormEvent<HTMLFormElement>) => {
			// 手动运行校验
			if(formOptions.validAt==='submit'){
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
	}) as FormComponent<State['fields']> 
}


 

