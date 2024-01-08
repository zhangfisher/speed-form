import React, {	 ChangeEventHandler, ReactNode, useCallback, useEffect,useRef,useState  } from "react";  
import { getVal, setVal } from "@helux/utils";
import { isLiteField, debounce as debounceWrapper } from './utils';
import { Dict } from "./types";  
import { assignObject } from "flex-tools/object/assignObject"; 
import type { FormOptions } from "./form";
 
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
  update	  	  : (valueOrUpdater:PropTypes['value'] | ((field:PropTypes)=>void),options?:{debounce?:number})=>void	  	   
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
 * 传入一个值: update(value,{debounce:100}) 指定防抖参数
 * 
 * @param store 
 * @param valuePath 
 * @param setState 
 * @returns 
 */
function useFieldUpdater(store: any,valuePath:string[],setState:any){
  const update = useRef<null | ((updater:Function | Record<string,any>)=>void)>(null)  
  const [debounceValue,setDebounce] = useState(0)
  return useCallback(function(updater:any,options?:{debounce:number}){      
    const { debounce } = Object.assign({debounce:0},options)
    if(update.current==null || debounceValue!==debounce){
      if(debounceValue!==debounce && debounce>0) setDebounce(debounce)
      const updateFn = (updater:any)=>{
        if(typeof(updater)=="function"){
          setState((draft:any)=>updater.call(draft,draft))
        }else{
          setState((draft:any)=>setVal(draft,valuePath,updater))
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
    const fullFieldPath:string[] = ['fields',...fieldPath]
    const valueFieldPath:string[] = ['fields',...fieldPath]

		const [state,setState] = store.useState() 

		const value = getVal(state,fullFieldPath)

    // 简单字段,即除了值没有任何控制属性
    const isLite = isLiteField(value) 
    if(!isLite) {
      fieldPath.push("value") 
      valueFieldPath.push("value")
    }

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

 



// export interface Field<T=any>{
//   __SPEED_FORM_FIELD__?:boolean
//   name?         : string
//   value        : T;
//   title?       : FieldComputedProp<string>;                       // 标题
//   defaultValue?: FieldComputedProp<T>;                          // 默认值
//   oldValue?    : FieldComputedProp<T>;                          // 默认值
//   help?        : FieldComputedProp<string>;                       // 提示信息
//   placeholder? : FieldComputedProp<string>;                       // 占位符
//   required?    : FieldComputedProp<boolean>;                      // 是否必填
//   readonly?    : FieldComputedProp<boolean>;                      // 是否只读
//   visible?     : FieldComputedProp<boolean>;                      // 是否可见
//   enable?      : FieldComputedProp<boolean>;                      // 是否可用
//   validate?    : FieldComputedProp<boolean>;                      // 验证
//   select?      : FieldComputedProp<any[]>                         // 枚举值  
// }

// /**
//  * 用来声明一个字段
//  * field()
//  * field("")
//  * field({value:any})
//  * 
//  * @param data 
//  * @returns 
//  */
// export function field<Value=any>(valueOrSchema?:Primitive | Field<Value>):Field<Value>{  
//   const schema = Object.assign({__SPEED_FORM_FIELD__:true,value:null},
//     isPrimitive(valueOrSchema)   ? {value:valueOrSchema}  : valueOrSchema ) as Field<Value>  
//   return schema
// } 
