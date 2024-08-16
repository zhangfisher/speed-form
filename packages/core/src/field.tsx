import React, {	 ChangeEventHandler, ReactNode, useCallback,useRef,useState  } from "react";  
import { debounce as debounceWrapper } from './utils';
import { ComputedAttr, ComputedAttr1 } from "./types";   
import type { FormStore, RequiredFormOptions } from "./form";
import { FIELDS_STATE_KEY } from "./consts"; 
import { ComputedDescriptor, Dict,getVal, setVal } from "@speedform/reactive";  
import type { FormAction, FormActionDefine } from "./action";


// 默认同步字段属性
export interface DefaultFieldPropTypes{
  name         : string
  value        : any
  initial?: any
  oldValue?    : any
  title?       : string;               // 标题
  help?        : string;               // 提示信息
  placeholder? : string;               // 占位符
  required?    : boolean;              // 是否必填
  readonly?    : boolean;              // 是否只读
  visible?     : boolean;              // 是否可见
  enable?      : boolean               // 是否可用
  validate?    : boolean | null;       // 验证,null表示还没有验证, true=验证通过,false=验证失败
  select?      : any[]                 // 枚举值
}  


 // 完整的字段描述
export type Value = {value:any}


// 传递给字段组件的渲染参数
export type FieldRenderProps<PropTypes extends Dict>= Required<Omit<DefaultFieldPropTypes,keyof PropTypes> & PropTypes> & {
  sync	  	    : (debounce?:number)=>ChangeEventHandler	   		  		                    // 同步状态表单计算
  update	  	  : (valueOrUpdater:PropTypes['value'] | ((field:PropTypes)=>void),options?:{debounce?:number})=>any
  cancel        : ()=>void        	  	   
  initial       : PropTypes['value'] | undefined
  oldValue      : PropTypes['value'] 
} 


// 用来传递给字段组件进行渲染
export type FieldRender<PropTypes extends Dict>= (props: FieldRenderProps<PropTypes>) => ReactNode

export type FieldProps<PropTypes extends Dict = Dict> = {
	name: string | string[]
  render?:FieldRender<PropTypes> 
	children?: FieldRender<PropTypes> | FieldRender<PropTypes>[];
} 
      

export type FieldComponent = React.FC<FieldProps>;


function createFieldProps(name:string,value:any,syncer:any,filedUpdater:any){  
  return Object.assign({
    name,
    help        : "",
    initial     : undefined,
    oldValue    : undefined,
    visible     : true,
    required    : false,
    readonly    : false,
    validate    : null,        
    enable      : true, 
    placeholder : ""
  },{
    ...value,    
    sync:syncer,
    update:filedUpdater 
  })   
}

function useFieldSyncer(store: any,valuePath:string[]){
  const sync = useRef<null | Function>(null)
  return useCallback((debounce:number=0)=>{      
    if(sync.current==null){
      const syncFn = store.sync(valuePath) 
      sync.current  =  debounce==0 ? syncFn :debounceWrapper(syncFn,debounce)
    }
    return sync.current      
  },[]) 
}
 
/**
 * 
 * 字段更新器，用来对表单数据进行更新
 * 
 * 在更新表单时支持两种调用方式
 * 传入一个函数: update((state)=>state.xxx.xxx)
 * 传入一个值: update(value,{debounce:100}) 指定防抖参数
 * 
 * @param store 
 * @param valuePath 
 * @param setState 
 * @returns 
 */
function useFieldUpdater(valuePath:string[],setState:any){
  const update = useRef<null | ((updater:Function | Record<string,any>)=>any)>(null)  
  const [debounceValue,setDebounce] = useState(0)
  return useCallback(function(updater:any,options?:{debounce:number}){      
    const { debounce } = Object.assign({debounce:0},options)
    if(update.current==null || debounceValue!==debounce){
      if(debounceValue!==debounce && debounce>0) setDebounce(debounce)
      const updateFn = (updater:any)=>{
        return (ev:any)=>{
          if(typeof(updater)=="function"){
            setState((draft:any)=>updater.call(draft,draft.fields))
          }else{
            setState((draft:any)=>setVal(draft,valuePath,updater))
          }  
          if(typeof(ev.preventDefault)=='function'){
            ev.preventDefault()
          }
        }               
      }        
      update.current = debounce > 0 ? updateFn : debounceWrapper(updateFn,debounce)      
    }      
    return update.current(updater)
  },[])
}
/**
 *  渲染字段的子组件,子组件负责字段UI的渲染
 * @param this 
 * @param props 
 */
export const FieldChildren = React.memo((props: {fieldProps:FieldRenderProps<any>  ,children:any})=>{
  return <>{
    typeof(props.children)=='function' && props.children(props.fieldProps as any)  
  }</>
},(oldProps, newProps)=>{  
  return  Object.entries(oldProps.fieldProps).every(([key,value]:[key:string,value:any])=>{
    return ['children','sync','update'].includes(key) ? true: value===newProps.fieldProps[key]
  }) 
})     

export function createFieldComponent<State extends Dict = Dict>(store: FormStore<State>,formOptions:RequiredFormOptions<State>) {    
  return React.memo(<T=Value>(props: T extends Value ? FieldProps<T> :  FieldProps<{value:T}>):ReactNode=>{
		const { name } = props;  
    // 不含fields前缀的字段路径
    const fieldPath = Array.isArray(name) ? name : name.split(".")  
    // 含fields前缀的字段路径
    const fullFieldPath:string[] = [FIELDS_STATE_KEY,...fieldPath]
    const valueFieldPath:string[] = [FIELDS_STATE_KEY,...fieldPath]
    fieldPath.push("value") 
    valueFieldPath.push("value") 
    // 读取字段值,指整个字段对象{value,...}
		const [value,setValue] = store.useState((draft:any)=>getVal(draft,fullFieldPath))  
    
    // 更新当前字段信息，如update(field=>field.enable=true)
    const filedUpdater = useFieldUpdater(valueFieldPath,setValue)

    // 表单字段同步，允许指定防抖参数
    const syncer = useFieldSyncer(store,valueFieldPath)
  
    const fieldProps = createFieldProps(formOptions.getFieldName(fieldPath),value,syncer,filedUpdater)
    
    // 调用渲染字段UI 
    if(props.render){ 
      return <FieldChildren {...{fieldProps,children:props.render} as any}/>
    }else if(Array.isArray(props.children)){
        return props.children.map((children:any,index)=>{
          return <FieldChildren key={index} {...{fieldProps,children:children} as any}/>
        })
      }else{
        return <FieldChildren {...{fieldProps,children:props.children} as any}/>
    }
  },(oldProps:any, newProps:any)=>{
      return oldProps.name === newProps.name
  }) as {
    <T = Value>(props: T extends Value ? FieldProps<T> : FieldProps<{ value: T }>): React.ReactNode;
  };
}

 



export interface IFieldProps<T=any>{
  value        : T;
  title?       : string;                       // 标题
  initial?     : T;                            // 默认值
  oldValue?    : T;                            // 默认值
  help?        : string;                       // 提示信息
  placeholder? : string;                       // 占位符
  required?    : boolean;                      // 是否必填
  readonly?    : boolean;                      // 是否只读
  visible?     : boolean;                      // 是否可见
  enable?      : boolean;                      // 是否可用
  validate?    : boolean;                      // 验证
  select?      : any[]                         // 枚举值  
}
 

export interface FormField<T>{
  value        : T;
  title?       : ComputedAttr<string>;                       // 标题
  initial?     : ComputedAttr<T>;                            // 默认值
  oldValue?    : ComputedAttr<T>;                            // 默认值
  help?        : ComputedAttr<string>;                       // 提示信息
  placeholder? : ComputedAttr<string>;                       // 占位符
  required?    : ComputedAttr<boolean>;                      // 是否必填
  readonly?    : ComputedAttr<boolean>;                      // 是否只读
  visible?     : ComputedAttr<boolean>;                      // 是否可见
  enable?      : ComputedAttr<boolean>;                      // 是否可用
  validate?    : ComputedAttr<boolean>;                   // 验证
  select?      : ComputedAttr<any[]>                         // 枚举值  
}

export type FormFieldBase<T=any> = {
  value: T 
} 

export type FormFieldArray<T extends Dict[] = Dict[]> = {
  [index:number]: T[number] extends FormFieldBase<infer V> ? FormField<V> 
    : T[number] extends Dict ?
      FormFields<T[number]> 
      : T[number] extends any[] ? 
      FormFieldArray<T[number]> : never
}

// 表单字段中允许声明动作，即FormAction
export type FormFields<T extends Dict = Dict> = {
  [name in keyof T]: T[name] extends FormFieldBase<infer V>
    ? FormField<V>
    : ( T[name] extends FormActionDefine ? FormAction<T[name]>
        : ( T[name] extends Dict ? FormFields<T[name]>
            : (              
              T[name] extends any[] ? FormFieldArray<T[name]> : T[name]
            )
          )
      )
}

 