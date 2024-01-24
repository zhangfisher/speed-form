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


import { ReactNode, useCallback,useState,useEffect, useRef, RefObject, useMemo} from "react";
import { Dict  } from "./types"; 
import React from "react";
import type { FormOptions } from "./form";
import {  AsyncComputedGetter, AsyncComputedObject, ComputedAsyncReturns, ComputedOptions, ComputedParams,  IStore, RuntimeComputedOptions, computed, getValueByPath, watch } from 'helux-store'; 
import { omit } from "flex-tools/object/omit"; 
import { getFormData } from "./serialize";
import { getSnap } from "helux"

export type ActionComputedAttr<R=unknown,Fields=any> = ((fields:Fields)=>R)  
  | ((fields:Fields)=>Promise<R>) 
  | ComputedAsyncReturns<R>
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
    abortController?:AbortController
} & RuntimeComputedOptions


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
    execute :(scope:any,options?:ComputedParams)=> Promise<void | Result>   // 执行动作，用来对表单数据进行处理
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
export type FormAction<T extends FormActionDefine> =ComputedAsyncReturns<{
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
        cancel:()=>()=>any                                   // 取消动作的执行，当动作是可取消的时候
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
export type ActionProps<State extends FormActionState=FormActionState,PropTypes extends Dict = Dict,Params extends Dict = Dict> = {
    name:string | string[]              // 声明该动作对应的状态路径
    children: ActionRender<State,Params>  
}    
 

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
        await actionState.execute.run(finalOpts)      
        return actionState.execute.value
    } 
}

 /**
 *  在组件中运行Action
 * 
 * const [run,cancel] = useActionRunner()
 * 
 * <button onClick={run({
 *      abortable:true,
 *      preventDefault:true,
 *      ...options  传递给计算函数的其他配置参数
 * })}>提交</button>
 * 
 * @param actionState 
 * @returns 
 */
function useActionRunner<State extends FormActionState=FormActionState>(actionState:State){
    const controller = useRef<AbortController>() 
    const runner = useCallback((options?:ActionRunOptions & {abortable?:boolean,preventDefault?:boolean})=>{ 
        const opts = Object.assign({},{noReentry:true,preventDefault:true,abortable:false},options)       
        if(!controller.current || (controller.current && controller.current.signal.aborted)){
            const abortController =  new AbortController()
            controller.current =  abortController
        }
        opts.abortSignal = () => controller.current?.signal
        const run = getAction<State>(actionState,opts)
        return (event:any)=>{
            run().then(()=>{
            //controller.current = new AbortController()
            })            
            if(event && opts.preventDefault && typeof(event.preventDefault)=='function'){
                event.preventDefault()
            }
        }
    },[])         
    const canceller = useCallback((event:any)=>{        
        controller.current?.abort()
        if(event && typeof(event.preventDefault)=='function'){
            event.preventDefault()
        }
    },[])
    return [runner,canceller]
}





function createActionRenderProps<State extends FormActionState=FormActionState>(actionState:State,actionRunner:any,actionCanceller:any,ref:RefObject<HTMLElement>){  
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
        ref,
        
    })
} 


  
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
export function createActionComponent<Store extends Dict = Dict>(store:Store,formOptions:Required<FormOptions>,) {

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

        const { name:actionKey } = props  

        const actionState = getValueByPath(state,actionKey)
        const [actionRunner,actionCanceller] = useActionRunner(actionState)
        // 用来引用当前动作
        const ref = useRef<HTMLElement>(null)

        // 创建动作组件的Props
        const [renderProps,setActionProps] = useState(()=>createActionRenderProps(actionState,actionRunner,actionCanceller,ref))
        useEffect(()=>{
            setActionProps(createActionRenderProps(actionState,actionRunner,actionCanceller,ref))
        },[actionKey,actionState])

        // 执行渲染动作组件
        if(props.children){
            if(Array.isArray(props.children)){
                return useMemo(()=>(props.children as any).map((child:any)=>child(renderProps as any)),[renderProps])
            }else{
                return useMemo(()=>props.children(renderProps as any),[renderProps])    
            }            
        }else{
            return
        }
    }
    return React.memo(Action,(oldProps:any, newProps:any)=>{
        return oldProps.name === newProps.name  
    }) as (<State extends FormActionState=FormActionState,Scope extends Dict=Dict>(props: ActionProps<State,Scope>)=>ReactNode)
}
 
/**
 * 声明action函数，实现表单
 * @param getter 
 * @param options 
 */
export function action<Values extends Dict=Dict,R=any>(getter: AsyncComputedGetter<R,Values>,options?: ComputedOptions<R>){
    return computed<R>(async (scope:any,opts)=>{
        const data = getFormData(getSnap(scope,false).fields)
        return await (getter as unknown as AsyncComputedGetter<R>)(data,opts)
    },options)

}

export type SubmitAsyncComputedGetter<R> = AsyncComputedGetter<R,FormData>

/**
 * 将传一个FormData对象
 * @param getter 
 * @param options 
 * @returns 
 */
export function submit<R=any>(getter: SubmitAsyncComputedGetter<R>,options?: ComputedOptions<R>){
    return action<Dict,R>(async (data:Dict,opts)=>{
        const formData = new FormData()
        return await (getter as unknown as SubmitAsyncComputedGetter<R>)(formData,opts)
    },options)

}




// // 标准表单提交
// export interface StandardSubmitAction<Fields extends Dict=Dict> extends FormActionDefine<Fields>{
// 	url?:ActionComputedAttr<string,Fields>						    // 提交的URL
//     method?:ActionComputedAttr<HttpMethod,Fields>					// 提交的方法
//     enctype?:ActionComputedAttr<HttpFormEnctype,Fields>				// 是否包含文件，此表单中的
// }

// // API提交
// export interface ApiSubmitAction<Fields extends Dict=Dict> extends FormActionDefine<Fields>{
// 	url?:ActionComputedAttr<string,Fields>						// 提交的URL
//     method?:ActionComputedAttr<HttpMethod,Fields>		        // 提交的方法
//     params?:ActionComputedAttr<Dict,Fields>						// 提交的参数
//     data?:ActionComputedAttr<Dict,Fields>						// 提交的Body数据
//     headers?:ActionComputedAttr<Dict,Fields>					// 提交的头信息
// }




