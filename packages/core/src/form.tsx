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
import React, { ReactNode, useId, useRef, useState } from 'react'
import  { useCallback } from "react";
import type {  Dict,RequiredComputedState, ComputedOptions, IStore, StoreOptions, ComputedState } from "@speedform/reactive";
import { createStore, OBJECT_PATH_DELIMITER, pathStartsWith  } from "@speedform/reactive";
import type { ReactFC,  ComputableAttr } from "./types";
import { createFieldComponent, FormFields  } from './field'; 
import { createFieldGroupComponent } from "./fieldGroup";
import { assignObject } from "flex-tools/object/assignObject";
import { ActionRenderProps,  FormActions, createActionComponent, createUseAction, getAction } from './action';
import { FIELDS_STATE_KEY, VALIDATE_COMPUTED_GROUP } from './consts';
import { defaultObject } from "flex-tools/object/defaultObject";
import { createObjectProxy } from "./utils";
import { createLoadApi, createGetValuesApi } from "./serialize"; 
import { createValidator, isValidateField, validate } from "./validate";
import { createSubmitComponent } from './submit';
import { $reset, createResetComponent } from "./reset"; 
import { dirty } from "./dirty"; 
import { ValidationError } from './errors';

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
	actions  : { 
		$reset
	}
}  
    
export type FormEnctypeType = 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'

export type FormTarget = '_self' | '_blank' | '_parent' | '_top'

export type FormState<State extends Dict> = ComputedState<typeof defaultFormProps & State> 
export type FormStore<State extends Dict> = IStore<typeof defaultFormProps & State> 




// 表单组件
export type FormComponent<State extends Record<string, any>> = ReactFC<FormProps<State>>;

export type FormSchemaBase = {
	name   	: ComputableAttr<string>							    
	title   : ComputableAttr<string>							    
    help 	: ComputableAttr<string>							    
    tips 	: ComputableAttr<string>							    
 	visible : ComputableAttr<boolean>					
    url 	: ComputableAttr<string>					    		
	enable  : ComputableAttr<boolean>					
	validate: ComputableAttr<boolean>
	readonly: ComputableAttr<boolean>			
	dirty   : ComputableAttr<boolean>	 
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
 * 
 * 
 * 我们约定，每一个动作均由一个{execute:computed(async ()=>{})}对象来描述
 *  
 * - scope总是指定scope为fields
 * 
 */
function createActionHook(valuePath:string[],options:ComputedOptions){
	if(valuePath.length>1 ){
		if(valuePath[valuePath.length-1]=='execute'){
			// 默认不自动执行,需要手动调用action.execute.run()来执行
			options.immediate = false			
			// 如果没有指定scope，则默认指向fields,这样就可以直接使用fields下的字段,而不需要fields前缀
			if(options.scope){
				if(Array.isArray(options.scope)){
					// 如果scope中没有fields,则添加fields,并且保证fields在第一个位置
					if(options.scope.length>0 && options.scope[0]!=FIELDS_STATE_KEY){
						options.scope.unshift(FIELDS_STATE_KEY)
					}				
				}else if(typeof(options.scope) === 'string'){
					if(!options.scope.startsWith(FIELDS_STATE_KEY)){
						options.scope = `${FIELDS_STATE_KEY}.${options.scope}`
					}
				}
			}else{// 如果没有指定scope,则默认指向fields		
				options.scope = [FIELDS_STATE_KEY]
			}
			options.noReentry = true			// 禁止重入
		}		
	}

}
/**
 *  对所有位于fields下的的依赖均自动添加fields前缀，这样在声明依赖时就可以省略fields前缀
 * 
 * @param valuePath 
 * @param getter 
 * @param options 
 */
function createDepsHook(valuePath:string[],options:ComputedOptions){
	if(valuePath.length > 0 && valuePath[0]==FIELDS_STATE_KEY && options.depends){ 
		options.depends.forEach((depend,i)=>{
			if(Array.isArray(depend) && (depend.length>0 && depend[0]!=FIELDS_STATE_KEY)){
				options.depends![i] = [FIELDS_STATE_KEY,...depend]
			}else if(typeof(depend) === 'string' && !depend.startsWith(`${FIELDS_STATE_KEY}.`)){
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


export function getFieldName(valuePath:string[]){
	return valuePath.length > 0 ? 
		valuePath[valuePath.length-1]==='value' ? 
			valuePath.slice(0,-1).join(".") : valuePath.join(".") : ''
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
		getFieldName,
		validAt:'once',
	},options) as RequiredFormOptions<State>
 
	// 注入表单默认属性
	setFormDefault(schema)  
	
	// 创建表单Store对象实例
	const store = createStore(schema ,{
		debug:opts.debug,		
		immediate:true,					// 默认立即执行完成所有计算属性的初始化 
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
		getRootScope(draft,{computedType,valuePath}){
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
	type UseActionType = ReturnType<typeof createUseAction>
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
		Submit         : createSubmitComponent<State>(formStore,opts),
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
	}   
}

export type FormIndicatorRenderProps =ActionRenderProps
// 表单状态指示器，用来显示表单提交状态，包括超时/加载中/错误/倒计时等等等等等等
export type FormIndicatorRender  = (props: FormIndicatorRenderProps) => ReactNode

export type FormProps<State extends Dict = Dict,Scope extends Dict = State> = React.PropsWithChildren<{		
	name?     : string;													// 表单名称,同时表示表单作用域，即提交范围，默认是整个表单fields		
	enctype?  : FormEnctypeType;										// 表单编码加密方式			
	method?   : 'get' | 'post' | 'dialog'  								// 表单提交方式
	action?   : string;													// 表单提交地址
	scope?    : string | string[]										// 提交范围， 默认是整个表单fields,也可以指定某个字段或字段组
	valid?    : boolean													// 是否进行校验
	mode?     : 'ajax' | 'standard'										// 提交模式
	indicator?: FormIndicatorRender							   			// 提交指示器
	onSubmit? : (value: RequiredComputedState<Scope>) => void;
	onReset?  : (value: RequiredComputedState<State>) => void;
}>;
  
/**
 * 创建表单组件
 * 
 * 当使用标准的表单提交模式时,使用该组件
 *  
 *  <Network.Form 
 * 		scope="wifi" 
 * 		action="/api/wifi"
 * 		method="post"
 * 		enctype="application/x-www-form-urlencoded"
 * 		onSubmit={(data)=>{  // 如果提供此函数
 * 			console.log(data)
 * 		}}
 * 		提交指示元素
 * 		indicator={({timeout,loading,})=>{
 * 			return <div className={loading ? 'submiting' : ''}></>
 * 		}}
 *  >
 * 	<Network.Field name="username"></Network.Field>
 * 	<Network.Field name="password"></Network.Field>
 * 	<Network.Submit>提交</Network.Submit> 
 *  </Network.Form> 
 * 
 * 
 * 两种提交方式：
 *  标准提交方式：使用form.submit方式提交
 *  AJAX提交方式：AJAX提交，需要自行处理提交逻辑
 * 
 * 
 * @param this 
 * @param store 
 * @returns 
 */
function createFormComponent<State extends FormDefine>(store: FormStore<State>,formOptions:RequiredFormOptions<State>): FormComponent<State['fields']> {
	const useAction =  createUseAction<State>(store)
	const Action =  createActionComponent<State>(store)
	// 局部提交时，用来指定Scope范围，如<Network.Form<typeof Network.fields.wifi> scope="wifi"
	return <Scope extends Dict = State['fields']>(props: FormProps<State['fields'],Scope>) => {
		const {scope, children,indicator } = props; 

		const ref = useRef<HTMLFormElement>(null)
		
		// 正在提交中的状态
		const [submiting,setSubmiting] = useState(false) 
 
		const actionId =  useId()
		const actionArgs = useAction<Scope>(async (data:Scope)=>{ 	
			// 运行表单校验
			if(formOptions.validAt==='submit' || props.valid!==false){
				if(scope && scope.length>0){  // 指定了提交范围			
					const scopeValue = typeof(scope) === 'string' ? scope.split(OBJECT_PATH_DELIMITER) : scope
					await store.computedObjects.run((cobj)=>{
						if(cobj.path.length>1 && cobj.path[0]==FIELDS_STATE_KEY && cobj.path[cobj.path.length-1]==='validate'){

						}
						return pathStartsWith(scopeValue,cobj.path)
					},undefined,{wait:true})	
					// 
					if('validate' in data && data.validate===false){
						throw new ValidationError()
					}

				}else{  // 全局提交
					await store.computedObjects.runGroup(VALIDATE_COMPUTED_GROUP,undefined,{wait:true})	
					// 表单的validate计算属性=校验表单数据是否有效
					if(!store.state.validate){
						throw new ValidationError()
					}
				}
				// 检查校验结果


				data
			}

		},{id: actionId,scope})	
		
		// 提交表单
		const onSubmitCallback = useCallback(async (ev: React.FormEvent<HTMLFormElement>) => {
			setSubmiting(true)
			// 运行表单校参
			actionArgs.run({
				onDone:()=>{
					console.log("提交成功")
					ref.current?.submit()
					setSubmiting(false)					
				}
			})
			ev.preventDefault(); 
			// 总是拒绝提交，因为需要等到校验通过后才能提交,而运行校验可能是异步的
			return false 
		},[]);

		// 重置表单
		const onReset = useCallback((e: React.FormEvent<HTMLFormElement>) => {

		},[]);

		return <Action name={actionId}>
			{(args)=>{
				return <form ref={ref} 	// 标准提交					
						className={"speedform" + (submiting ? " submiting" : "")}  
						action={props.action}
						method={props.method}
						encType={props.enctype}
						onSubmit={(ev:any)=>onSubmitCallback(ev)} 
						onReset={onReset}
					>
					{ indicator ? indicator(args) : null}
					{children}
				</form>
			}}				
		</Action>
	} 
}


 

