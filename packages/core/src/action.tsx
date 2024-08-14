/**
 * 
 *   表单动作
 * <Network.Form>
 * 	   <Network.Field name="ssid"></Network.Field>			// 声明字段
 * 	   <Network.Action type="submit" scope="current" params={}>
 *        {({type,title,enable,visible,tips,params,submit,reset,scope})=>{
 * 			retrun <button ref={ref} onClick={submit()}></button>
 *        }}
 *     </Network.Action> 
 * 	   <Network.Action type="reset" scope="current" params={}>
 *        {({type,title,enable,visible,tips,params,submit,reset,scope})=>{
 * 			retrun <button ref={ref} onClick={submit()}></button>
 *        }}
 *     </Network.Action>
 *     <Network.Action type="addOrder" scope="orders.[1]">
 *        {({type,title,enable,visible,tips,params,loading,scope,submit,reset})=>{
 *            当执行submit时会更新runCount值从而触发execute函数的执行
 * 			retrun <button ref={ref} enable={enable} loading={loading} onClick={submit()}></button>
 *        }}
 *     </Network.Action>
 *     // 当scope变化时重新渲染
 *     <Network.Action type="addOrder">
 *        {({type,title,enable,visible,tips,params,submit,reset,scope})=>{
 * 			retrun <button ref={ref} onClick={submit()}></button>
 *        }}
 *     </Network.Action>
* </Network.Form>		
 * 
 * 
 */


import { ReactNode, useCallback, useRef, RefObject,useState} from "react";
import React from "react";
import type { RequiredFormOptions } from "./form";
import {  AsyncComputedGetter, AsyncComputedObject, ComputedDescriptorDefine, ComputedOptions, ComputedParams,  Dict, IStore, RuntimeComputedOptions, computed, getValueByPath} from '@speedform/reactive'; 
import { omit } from "flex-tools/object/omit"; 
import { getFormData } from "./serialize"; 
import { getId } from "./utils";
import { FIELDS_STATE_KEY } from "./consts";

export type ActionComputedAttr<R=unknown,Fields=any> = ((fields:Fields)=>R)  
  | ((fields:Fields)=>Promise<R>) 
  | ComputedDescriptorDefine<R>
  | R  


export type DefaultActionRenderProps={
    title  : string
    help   : string
    tips   : string
    visible: boolean
    enable : boolean
    count  :number                                                            
} 

export type ActionRunOptions = {    
    preventDefault?:boolean
} & RuntimeComputedOptions




export type FormActionExecutor<Scope extends Dict=Dict,Result =any> =(scope:Scope,options?:ComputedParams)=> Promise<void | Result> 

// 动作声明，供createForm时使用来声明动作
/**
 * Scope:动作作用域，用来指定动作作用的表单数据范围
 * Result: 动作函数execute执行结果返回值类型
 */
export interface FormActionDefine<Scope extends Dict=Dict,Result =any>{
    scope?  : string | string[] | (()=>string | string[])                   // 动作提交范围
    title?  : ActionComputedAttr<string,Scope>					            // 动作标题    
    help?   : ActionComputedAttr<string,Scope>					            // 动作帮助
    tips?   : ActionComputedAttr<string,Scope>					            // 动作提示
    visible?: ActionComputedAttr<boolean,Scope>					            // 是否可见
    enable? : ActionComputedAttr<boolean,Scope>					            // 是否可用	            
    count:number
    execute :FormActionExecutor<Scope,Result>                               // 执行动作，用来对表单数据进行处理
} 


// 表单基本属性
export interface FormActionExtra{    
    $action  : true                                  // 是否是动作，用来标识该字段是动作 
    title   : string					            // 动作标题    
    help    : string					            // 动作帮助
    tips    : string					            // 动作提示
    visible : boolean					            // 是否可见
    enable  : boolean					            // 是否可用	            
    validate: boolean
    count   : number
} 
 

 // 经过创建表单后的动作对象,  execute
export type FormAction<T extends FormActionDefine> =ComputedDescriptorDefine<{
    [Key in keyof T]: Key extends 'execute' ? never : T[Key]
}>

export type FormActions<T extends FormActionDefines = FormActionDefines> = {
    [Key in keyof T]: FormAction<T[Key]>
}


 
// 动作状态，必须包含一个名称为execute的异步计算属性
export type FormActionState = {
    execute:AsyncComputedObject
} 

 

// 表单动作
export type FormActionDefines<Fields extends Dict=Dict> = Record<string,FormActionDefine<Fields>>
 

export interface ActionRunCancelOptions {
    preventDefault?:boolean 
}

export type ActionRenderProps<State extends Dict> = 
    DefaultActionRenderProps 
    & State 
    & Required<Omit<AsyncComputedObject,'run'>> 
    & {
        run:(options?:ActionRunOptions)=>()=>any          // 运行提交表单动作Action
        cancel:()=>()=>any                                // 取消动作的执行，当动作是可取消的时候
        ref: RefObject<HTMLElement>                       // 动作元素引用
    } 

export type ActionRender<State extends Dict,Params extends Dict = Dict>= (props: ActionRenderProps<State>) => ReactNode


/**
 * 类型定义:
 * State: 表单动作状态类型，即form.state.actions.xxxx的类型
 * PropTypes: 表单动作属性类型，即form.actions.xxxx的类型
 * 
 * 
 */
export type ActionProps<State extends FormActionState=FormActionState,Params extends Dict = Dict> = {
    name:string | string[]                      // 声明该动作对应的状态路径
    // 动作作用域，用来指定动作作用的表单数据范围,用来传递数据给动作
    scope?:string[]                             
    render?: ActionRender<State,Params>  
    children?: ActionRender<State,Params>  
}  & ActionRunOptions
 

/**
 * 根据表单动作的状态数据创建动作运行函数
 * 
 *  const run  = getAction<typeof Network.actions.submit>(Network.actions.submit,{...options...})
 * 
 *  run({..计算函数的配置参数，覆盖上面的配置...
 *     abortable?:boolean           // 是否可取消,如果可取消
 *     abortController?:AbortController  // 传入一个AbortController用来传递给动作计算函数
 *   })
 * 
 * 
 * 
 * @param actionState 
 * @returns 
 */
export function getAction<State extends FormActionState=FormActionState>(actionState:State,options?:ActionRunOptions){         
    return async (opts?:ActionRunOptions)=>{     
        const finalOpts = Object.assign({},options,opts) as Required<ActionRunOptions>        
        if(Array.isArray(finalOpts.scope) && finalOpts.scope.length>0 && finalOpts.scope[0]!==FIELDS_STATE_KEY){
            finalOpts.scope.unshift(FIELDS_STATE_KEY)
        }
        await actionState.execute.run(finalOpts)      
        if(actionState.execute.error){
            throw new Error(actionState.execute.error)
        }else{
            return actionState.execute.result
        }
    } 
}
 
 /**
 *  在组件中运行Action
 * 
 * const [run,cancel] = useActionRunner()
 * 
 * <button onClick={run({
 *      preventDefault:true,
 *      ...options  传递给计算函数的其他配置参数
 * })}>提交</button>
 * 
 * @param actionState 
 * @returns 
 */
function useActionRunner<State extends FormActionState=FormActionState>(actionState:State,actionOptions?:ActionRunOptions){
    return useCallback((options?:ActionRunOptions )=>{ 
        const opts = Object.assign({},{noReentry:true,preventDefault:true},actionOptions,options)       
        const run = getAction<State>(actionState,opts)
        return (event:any)=>{
            run()          
            if(event && opts.preventDefault && typeof(event.preventDefault)=='function'){
                event.preventDefault()
            }
        }
    },[actionState])          
}



function useActionCanceller<State extends FormActionState=FormActionState>(state:State,valuePath:string | string[]){
    return useCallback((event:any)=>{  
        const execute = getValueByPath(state,[...Array.isArray(valuePath) ? valuePath : valuePath.split(".") ,'execute'])      
        execute.cancel()
        if(event && typeof(event.preventDefault)=='function'){
            event.preventDefault()
        }
    },[])
}


function createActionRenderProps<State extends FormActionState=FormActionState>(actionState:State,actionRunner:any,actionCanceller:any,ref?:RefObject<HTMLElement>){  
    return Object.assign({            
        help       : "",
        title      : "",
        visible    : true,    
        enable     : true
    },
    omit(actionState,"execute"),
    {
        ...actionState.execute,
        run:actionRunner,
        cancel:actionCanceller,
        ref
    })
} 

export const ActionChildren = React.memo((props: {actionProps:ActionRenderProps<any>,children:any})=>{
    return <>{
      typeof(props.children)=='function' && props.children(props.actionProps as any)  
    }</>
  },(oldProps, newProps)=>{  
    return  Object.entries(oldProps.actionProps).every(([key,value]:[key:string,value:any])=>{
      return ['children','run','cancel'].includes(key) ? true: value===newProps.actionProps[key]
    }) 
  })     
  
  
/**
 * 创建动作组件
 * 
 * 
 * 用于创建动作组件，动作组件用于提交表单，重置表单，校验表单以及自定义等操作
 * 
 * @param this 
 * @param store 
 * @returns 
 */
export function createActionComponent<State extends Dict = Dict>(store:IStore<State>,formOptions:RequiredFormOptions<State>) {

    /**
     * State:  指的是动作的对应状态数据，在schema中就是具有execute的一个对象
     * Params: 指的execute的入参，即动作的参数，  execute:(scope:any,{params})=>void,或者form.actions.xxxx.execute:(params)
     * Scope: 当前动作的作用域，用来指定动作作用的表单数据范围,如typeof form.fields.xxx，默认指向form.fields
     * 
     * @param props 
     * @returns 
     */
    function Action<State extends FormActionState=FormActionState,Scope extends Dict=Dict>(props: ActionProps<State,Scope>):ReactNode{
        const [state] = store.useState()  
        
        let { name:actionKey } = props  
        // 如果动作是声明在actions里面可以省略actions前缀
        if(!actionKey.includes(".")) actionKey = `actions.${actionKey}`

        const actionState = getValueByPath(state,actionKey,".")
        const actionRunner = useActionRunner(actionState,props)
        const actionCanceller = useActionCanceller(state,actionKey)
        // 用来引用当前动作
        const ref = useRef<HTMLElement>(null)

        // 创建动作组件的Props
        const actionRenderProps = createActionRenderProps(actionState,actionRunner,actionCanceller,ref)        

        // 执行渲染动作组件
        if(typeof(props.render)==='function'){
            return <ActionChildren {...{actionProps:actionRenderProps,children:props.render}} />
        }else if(props.children){
            if(Array.isArray(props.children)){
                return (props.children as any).map((children:any,index:any)=>{
                    return <ActionChildren key={index} {...{actionProps:actionRenderProps,children:children}} />
                })
            }else{
                return <ActionChildren {...{actionProps:actionRenderProps,children:props.children}} />
            }            
        } 
    }
    return React.memo(Action,(oldProps:any, newProps:any)=>{
        return oldProps.name === newProps.name  
    }) as (<State extends FormActionState=FormActionState,Scope extends Dict=Dict>(props: ActionProps<State,Scope>)=>ReactNode)
}
 

/**
 * 使用action来声明一个动作
 * 
 * 该函数实现以下功能:
 * - 从store中获取动作的状态数据传递给Action的getter函数 * 
 * 
 * @param getter 
 * @param options 
 */
export function action<Values extends Dict=Dict,R=any>(getter: AsyncComputedGetter<R,Values>,options?: ComputedOptions<R>){
    return computed<R>(async (scope:any,opts)=>{
        // 注意： getSnap(scope,false)无论scope是状态中的哪一个值，总是返回整个状态的快照
        // 比如 getSnap(state.fields.xxx.xxx)也是返回整个state的快照
        const data = getFormData(Object.assign({},scope))        
        return await (getter as unknown as AsyncComputedGetter<R>)(data,opts)
    },[],options)
}




export type SubmitAsyncComputedGetter<R> = AsyncComputedGetter<R,FormData>
export type SubmitActionOptions<R> =  ComputedOptions<R> 

/**
 * 
 * 特殊的对象传入一个FormData对象
 * 声明一个提交动作
 * submit动作总是返回一个FormData对象
 * 
 * @param getter 
 * @param options 
 * @returns 
 */
export function submit<R=any>(getter: SubmitAsyncComputedGetter<R>,options?: SubmitActionOptions<R>){
    return action<Dict,R>(async (data:Dict,opts)=>{
        const formData = new FormData()
        return await (getter as unknown as SubmitAsyncComputedGetter<R>)(formData,opts)
    },options)

}


export type UseActionType = <Scope extends Dict=Dict,R=any>(executor:AsyncComputedGetter<R,Scope>,options?:ComputedOptions<R> & {name?:string})=>FormActionState['execute']


/**
 * 
 * 在组件中动态创建一个使用创建一个动作
 * 在表单访问Action动作 
 * 
 * const { run } = useAction(async (scope,parmas)=>{
 *      
 * },{
        abortSignal
        name:"可选的action名称,如果没有指定则生成"

 * })
 * 
 */
export function createUseAction<Store extends Dict = Dict>(store:Store) {
    // useAction本质上就是创建一个计算属性
    return function useAction<Scope extends Dict=Dict,R=any>(executor:AsyncComputedGetter<R,Scope>,options?:ComputedOptions<R> & {name?:string}){
        const ref = useRef<string | null>()
        const [state,setState] = store.useState()        
        const [actionKey] = useState(()=>options?.name ?  options?.name : getId())
        if(!ref.current){
            setState((draft:any)=>{
                if(!(actionKey in draft.actions)){
                    draft.actions[actionKey] = {
                        execute:action(executor,options)
                    }                       
                }
            })   
            ref.current = actionKey
        } 
        return getValueByPath(state,['actions',actionKey]).execute as FormActionState['execute']
    }

}