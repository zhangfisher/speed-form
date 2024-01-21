import React, {	 ChangeEventHandler, ReactNode, useCallback, useEffect, useMemo,useRef,useState  } from "react";  
import { getVal, setVal } from "@helux/utils";
import { debounce as debounceWrapper } from './utils';
import { ComputedAttr, Dict } from "./types";  
import { assignObject } from "flex-tools/object/assignObject"; 
import type { FormOptions } from "./form";
import { FIELDS_STATE_KEY } from "./consts"; 

// 默认同步字段属性
export interface DefaultFieldPropTypes{
  value        : any
  defaultValue?: any
  oldValue?    : any
  title?       : string;               // 标题
  help?        : string;               // 提示信息
  placeholder? : string;               // 占位符
  required?    : boolean;              // 是否必填
  readonly?    : boolean;              // 是否只读
  visible?     : boolean;              // 是否可见
  enable?      : boolean               // 是否可用
  validate?    : boolean;              // 验证
  select?      : any[]                 // 枚举值
}  


 // 完整的字段描述
export type Value = {value:any}


// 传递给字段组件的渲染参数
export type FieldRenderProps<PropTypes extends Dict>= Required<Omit<DefaultFieldPropTypes,keyof PropTypes> & PropTypes> & {
  sync	  	    : (debounce?:number)=>ChangeEventHandler	   		  		                    // 同步状态表单计算
  update	  	  : (valueOrUpdater:PropTypes['value'] | ((field:PropTypes)=>void),options?:{debounce?:number})=>any
  cancel        : ()=>void        	  	   
  defaultValue  : PropTypes['value'] | undefined
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
  return assignObject({
    name,
    help       : "",
    defaultValue: undefined,
    oldValue   : undefined,
    visible    : true,
    required   : false,
    readonly   : false,
    validate   : true,        
    enable     : true,
    placeholder: "",        
    select     : [] as any,
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
      sync.current  = debounce==0 ? syncFn :debounceWrapper(syncFn,debounce)
    }
    return sync.current      
  },[]) 
}

/**
 * 提供一个函数，当调用此函数时，会取消正在执行的异步计算函数
 * 取消的机制是:
 *  
 *  
 * 
 */
function useCancel(){
  return useCallback(()=>{
  
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
function useFieldUpdater(store: any,valuePath:string[],setState:any){
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


export function createFieldComponent(this:Required<FormOptions>,store: any) {    
  const self = this
  return React.memo(<T=Value>(props: T extends Value? FieldProps<T> :  FieldProps<{value:T}>):ReactNode=>{
		const { name } = props; 
    // 不含fields前缀的字段路径
    const fieldPath = Array.isArray(name) ? name : name.split(".")  
    // 含fields前缀的字段路径
    const fullFieldPath:string[] = [FIELDS_STATE_KEY,...fieldPath]
    const valueFieldPath:string[] = [FIELDS_STATE_KEY,...fieldPath]

		const [state,setState] = store.useState() 

		const value = getVal(state,fullFieldPath)
    fieldPath.push("value") 
    valueFieldPath.push("value")

    // 更新当前字段信息，如update(field=>field.enable=true)
    const filedUpdater = useFieldUpdater(store,valueFieldPath,setState)

    // 表单字段同步，允许指定防抖参数
    const syncer = useFieldSyncer(store,valueFieldPath)

    const [fieldProps,setFieldProps] = useState(()=>createFieldProps(self.getFieldName(fieldPath),value,syncer,filedUpdater))
 
    useEffect(()=>{
      setFieldProps(createFieldProps(self.getFieldName(fieldPath),value,syncer,filedUpdater))
    },[value])
 

    // 调用渲染字段UI 
    if(props.render){ 
      return props.render(fieldProps as any)
    }else{
      if(props.children){
        return Array.isArray(props.children) ? 
          props.children.map((children:any)=>{
            return useMemo(()=>children(fieldProps as any) ,[fieldProps])
          })
          : useMemo(()=>{
              return typeof(props.children)=='function' && props.children(fieldProps as any) //props.children(fieldProps as any) 
            },[fieldProps])
      }else{
        return 
      }      
    }
  },(oldProps:any, newProps:any)=>{
      return oldProps.name === newProps.name
  }) as {
    <T = Value>(props: T extends Value ? FieldProps<T> : FieldProps<{ value: T }>): React.ReactNode;
  };
}

 



export interface Field<T=any>{
  value        : T;
  title?       : ComputedAttr<string>;                       // 标题
  defaultValue?: ComputedAttr<T>;                          // 默认值
  oldValue?    : ComputedAttr<T>;                          // 默认值
  help?        : ComputedAttr<string>;                       // 提示信息
  placeholder? : ComputedAttr<string>;                       // 占位符
  required?    : ComputedAttr<boolean>;                      // 是否必填
  readonly?    : ComputedAttr<boolean>;                      // 是否只读
  visible?     : ComputedAttr<boolean>;                      // 是否可见
  enable?      : ComputedAttr<boolean>;                      // 是否可用
  validate?    : ComputedAttr<boolean>;                      // 验证
  select?      : ComputedAttr<any[]>                         // 枚举值  
}
 

export type Fields={
  [name:string]:Record<string,Field>               
              | Array<Field> 
              | Array<Fields>
              | Record<string,Fields> 
}