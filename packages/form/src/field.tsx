import React, {	 ChangeEventHandler, ReactNode, useCallback, useEffect,useRef,useState  } from "react";  
import { getVal, setVal } from "@helux/utils";
import { isLiteField, debounce as debounceWrapper, debounce } from './utils';
import { Dict, FieldComputedProp } from "./types";  
import { assignObject } from "flex-tools/object/assignObject";
 
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

export interface Field{
  name         : string
  value        : any;
  title?       : FieldComputedProp<string>;                       // 标题
  defaultValue?: FieldComputedProp<any>;                          // 默认值
  oldValue?    : FieldComputedProp<any>;                          // 默认值
  help?        : FieldComputedProp<string>;                       // 提示信息
  placeholder? : FieldComputedProp<string>;                       // 占位符
  required?    : FieldComputedProp<boolean>;                      // 是否必填
  readonly?    : FieldComputedProp<boolean>;                      // 是否只读
  visible?     : FieldComputedProp<boolean>;                      // 是否可见
  enable?      : FieldComputedProp<boolean>;                      // 是否可用
  validate?    : FieldComputedProp<boolean>;                      // 验证
  select?      : FieldComputedProp<any[]>                         // 枚举值
}

 

 // 完整的字段描述
export type Value = {value:any}


// 传递给字段组件的渲染参数
export type FieldRenderProps<PropTypes extends Dict>= Required<Omit<DefaultFieldPropTypes,keyof PropTypes> & PropTypes> & {
  sync	  	    : (debounce?:number)=>ChangeEventHandler	   		  		                    // 同步状态表单计算
  update	  	  : (valueOrUpdater:PropTypes['value'] | ((field:PropTypes)=>void))=>void	  	   
  defaultValue  : PropTypes['value'] | undefined
  oldValue      : PropTypes['value'] 
} 


// 用来传递给字段组件进行渲染
export type FieldRender<PropTypes extends Dict>= (props: FieldRenderProps<PropTypes>) => ReactNode

export type FieldProps<PropTypes extends Dict = Dict> = {
	name: string 
  render?:FieldRender<PropTypes> 
	children?: FieldRender<PropTypes> | FieldRender<PropTypes>[];
} 
      

export type FieldComponent = React.FC<FieldProps>;


function createFieldProps(name:string,value:any,syncer:any,filedUpdater:any){
  
  const isLite = isLiteField(value)

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
    sync       : ()=>{},
  },{
    ...isLite ? {value} : value,
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
 * 
 * 字段更新器，用来对表单数据进行更新
 * 
 * 在更新表单时支持两种调用方式
 * 传入一个函数: update((state)=>state.xxx.xxx)
 * 传入一个值: update(value) 
 * 
 * @param store 
 * @param valuePath 
 * @param setState 
 * @returns 
 */
function useFieldUpdater(store: any,valuePath:string[],setState:any){
  const update = useRef<null | Function>(null)
  if(update.current==null){
    const updateFn = (updater:any,options?:{debounce:number})=>{
      if(typeof(updater)=="function"){
          setState((draft:any)=>updater.call(draft,getVal(draft,valuePath)))
      }else{
        setState((draft:any)=>setVal(draft,valuePath,updater))
      }
    }
    update.current = options.debounce > 0 ? updateFn : debounceWrapper(updateFn,options.debounce)
  }
  return update.current 
}


export function createFieldComponent(store: any) {    
  return React.memo(<T=Value>(props: T extends Value? FieldProps<T> :  FieldProps<{value:T}>):ReactNode=>{
		const { name } = props; 
    const valuePath = Array.isArray(name) ? name : name.split(".")  
		const [state,setState] = store.useState()
		const value = getVal(state,valuePath)
    const isLite = isLiteField(value)
    console.log("field render",name)
    if(!isLite) {
      valuePath.push("value") 
    }

    // 更新当前字段信息，如update(field=>field.enable=true)
    const filedUpdater = useCallback((updater:any)=>{
      if(typeof(updater)=="function"){
        setState((draft:any)=>updater.call(draft,getVal(draft,valuePath)))
      }else{
        setState((draft:any)=>setVal(draft,valuePath,updater))
      }
    },[])

    // 表单字段同步，允许指定防抖参数
    const syncer = useFieldSyncer(store,valuePath)

    const [fieldProps,setFieldProps] = useState(()=>createFieldProps(name,value,syncer,filedUpdater))
 
    useEffect(()=>{
      setFieldProps(createFieldProps(name,value,syncer,filedUpdater))
    },[value])
 
    // 调用渲染字段UI 
    if(props.render){ 
      return  props.render(fieldProps as any)
    }else{
      if(props.children){
        return Array.isArray(props.children) ? 
          props.children.map((children:any)=>children(fieldProps as any) )
          : props.children(fieldProps as any) 
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

 
