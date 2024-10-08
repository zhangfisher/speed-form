/**
 * 
 * 本文件的目标是实现一个字段组件，
 *  根据props.name属性自动推断value的类型，
 *  但是碰到一个困难，无法处理字段数组嵌套的推断
 * 
 *  因此，暂时放弃
 *  
 * 
 * 
 */

import React from 'react'
import { Dict, getVal, setVal } from "@speedform/reactive";
import { FIELDS_STATE_KEY } from "./consts";
import { ReactNode, useCallback, useRef, useState } from "react";
import { debounce as debounceWrapper } from './utils';
import { FormState, FormStore, RequiredFormOptions } from './form';
import { GetTypeByPath } from './types';
import { Paths } from "type-fest";
import { MutableRecord  } from "flex-tools/types"
import { FieldChildren,  FieldProps,  FieldRender, FormFieldBase } from "./field";


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
            if(typeof(updater) === "function"){
              setState((draft:any)=>updater.call(draft,draft.fields))
            }else{
              setState((draft:any)=>setVal(draft,valuePath,updater))
            }  
            if(typeof(ev.preventDefault) === 'function'){
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
 * 
 * 实现一个字段组件根据name属性自动推断children的类型
 * 
 * 比较复杂，思路如下：
 * 
 * 1. 首先是Name泛型 = Paths<FormFinalState<State>['fields']>，根据状态推断出所有的字段路径，比如
 *   {fields:{name:{value:"zhang"},age:{value:18}}} => "fields.name" | "fields.age"
 * 2. 使用FormFieldState将State转换为只包含字段值的对象，如{fields:{name:string,age:number}}
 * 3. FormFieldNames用来生成每一个字段路径对应的声明类型,如{fields.xxx:{value,...}}
 * 4. MutableRecord<FormFieldNames,'name'>用根据name值推断FormFieldNames成员的类型
 * 
 */



// 将表单中的所有字段转提取表单中的的有效字段，如fields.xxx={value} => fields.xxx，用在Field.props.name是指定字段

/**
 * 
 *  提取表单中的所有字段的类型
 *  字段是一个对象，具有特征：{value:any}
 * 
 *  { name:{value:""},
 *    age:{value:18},
 *    check:{execute:()=>{...}}}  // 移
 *  } 
 *  ===
 *  {
 *    name: string
 *    age: number 
 *  }
 * 
 */
// 主类型，用于从数组中提取每个对象的 `value` 类型，并将其组合成一个元组类型
type PickArrayItem<T extends { value: any }[]> = {
  [K in keyof T]: T[K] extends { value: infer V } ? V : never
};
type FormFieldState<Fields extends Dict> = {
    [Name in keyof Fields
      as Fields[Name] extends { execute: any } ?  never :  Name  
    ]: 
      Fields[Name] extends readonly any[]
        ? PickArrayItem<Fields[Name]>
        : ( 
            Fields[Name] extends Dict 
              ? (
                  Fields[Name] extends FormFieldBase<infer V> 
                  ?  V : FormFieldState<Fields[Name]>
                )
              : never
        ) 
}

// 生成每一个字段路径对应的声明类型,如{fields.xxx:{value,...}}
type FormFieldNames<State extends Dict> =  { 
    [Key in keyof Record<Paths<FormFieldState<State['fields']>> ,any>]: {      
      render?  : FieldRender<GetTypeByPath<State,`fields.${Key}`>> 
      children?: FieldRender<GetTypeByPath<State,`fields.${Key}`> >  
                | FieldRender<GetTypeByPath<State,`fields.${Key}`>>[];    
    }  
} 

// 根据输入的props.name自动推断children的类型，主要是value类型
export type FieldAutoInferProps<State extends Dict,V=undefined> = V extends undefined ?
  MutableRecord<FormFieldNames<State>,'name'> 
  : FieldProps<{value:V}>

export function createFieldComponent2<State extends Dict >(store: FormStore<State>,formOptions:RequiredFormOptions<State>) {    
    type FieldType = <V=undefined>(props:  FieldAutoInferProps<FormState<State>,V>)=>ReactNode
    return React.memo(<V=undefined>(props: FieldAutoInferProps<FormState<State>,V>):ReactNode=>{
      const { name } = props;  
      // 不含fields前缀的字段路径
      const fieldPath = Array.isArray(name) ? name : String(name).split(".")  
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
        return <FieldChildren {...{fieldProps,children:props.render}}/>
      }else if(Array.isArray(props.children)){
          return props.children.map((children:any,index:any)=>{
            return <FieldChildren key={index} {...{fieldProps,children:children} }/>
          })
        }else{
          return <FieldChildren {...{fieldProps,children:props.children} }/>
      }
    },(oldProps:any, newProps:any)=>{
        return oldProps.name === newProps.name
    })  as unknown as FieldType
  }
  
  
const f={ 
  fields:{
    ss1:{execute:1},
    name:{value:"zhang"},
    age:{value:18},
    wifi:{
      ssid:{value:""},
      password:{value:1},
      ss1:{execute:1},
      ss2:{execute:1}
    },
    dns:[
      {value:"192.168.1.1",a:1},
      {value:1,a:2},
      {
        a:{value:1,a:2},
        b:{value:1,a:2},
      }
    ]   
  }
} 
// type Net = FormFieldState<typeof f>
// type NETL = Paths<FormFieldState<typeof f>['fields']>  
// type NETL2 = FormFieldNames<FormFieldState<typeof f>>



// function test<T = undefined,S extends Record<string,any>=Record<string,any>>(a:S): T extends undefined ? S['name'] : T {
//   return a.name 
// }

// const r1 = test({name:1,age:18})         
// const r2 = test<string>({name:"zhang",age:18})         
