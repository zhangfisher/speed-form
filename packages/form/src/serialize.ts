/**
 * 序列化表单数据
 * 
 * 1. 负责从表单状态中读取数据，用于生成表单对象或提交API
 * 2. 将表单数据转换为表单状态
 * 
 * getFormData 从表单状态中生成表单数据
 * loadDataToForm 将表单数据加载到表单状态中
 * 
 */

import type { Dict } from "helux-store"
import { isFieldGroup, isFieldList, isFieldValue } from "./utils"
import { isPlainObject } from "flex-tools/typecheck/isPlainObject"
 

function getFieldValue(data:Dict){
    return data.value
}

function getFiledGroupValue(data:Dict){
    const result:Dict = {}
    Object.entries(data).forEach(([key,value])=>{        
        if(typeof(key) !== 'string'){
            return
        }
        if(isFieldValue(value)){
            result[key] = getFieldValue(value)
        }else if(isFieldGroup(value)){
            result[key] = getFiledGroupValue(value)
        }else if(isFieldList(value)){
            result[key] = getFieldListValue(value)
        }else{
            result[key] = value
        }        
    })
    return result
}
function getFieldListValue(data:Dict){
    const result:any[] = []
    data.forEach((item:Dict)=>{    
        if(isFieldValue(item)){
            result.push(getFieldValue(item))
        }else if(isFieldGroup(item)){
            result.push(getFiledGroupValue(item))
        }else if(isFieldList(item)){
            result.push(getFieldListValue(item))
        }else{
            result.push(item)
        }        
    })
    return result
}


export interface GetFormDataOptions{
    entry?:string[]    
}

/**
 * 指定一个入口路径，获取指定路径下表单数据
 * @param snap 
 * @param entryPath 
 */
export function getFormData(snap:Dict,options?:GetFormDataOptions):Record<string,any>{
    return getFiledGroupValue(snap)
}


export interface LoadFormDataOptions{
    onNotMatch(keyPath:string[]):any
}

/**
 * 
 * 加载表单数据到指定的表单状态入口
 * 
 * 由于可能存在数据结构与表单结构不匹配的情况，所以需要提供一个onNotMatch回调来处理
 *  
 * 注意：加载时建议关闭依赖收集
 * 
 */ 
export function loadDataToForm( toFormState:Dict,fromData:Dict,options?:LoadFormDataOptions){ 
    const { onNotMatch=()=>{}  } = Object.assign({},options)    
    function loadFromGroup(data:Dict,groupState:Dict,parentKeys:string[]=[]){    
        Object.entries(data).forEach(([key,value])=>{
            if(typeof(key) !== 'string') return
            const curKeys = [...parentKeys,key]
            if(key in groupState){                
                const itemState = groupState[key]
                if(isFieldValue(itemState)){
                    itemState.value = value
                }else if(isFieldGroup(itemState)){
                    if(isPlainObject(value)){
                        loadFromGroup(value,itemState,curKeys)
                    }else{ 
                        onNotMatch(curKeys)// 不匹配
                    }
                }else if(isFieldList(itemState)){
                    if(Array.isArray(value)){
                        loadFromGroup(value,itemState)
                    }else{  
                        onNotMatch(curKeys)// 不匹配
                    }                 
                }else{
                    groupState[key] = value
                }
            }else{
                onNotMatch(curKeys)
            }
        })
    }
    loadFromGroup(fromData,toFormState)
}
 
export interface CreateFormDataOptions{
    // 用来实现将keyPath转换为表单项名称
    getItemName?:(keyPath:string[])=>string
    /**
     * 处理值
     */
    getItemValue?:(keyPath:string[],type?:'array' | 'object' | '')=>string
}
 


/**
 * 
 * 根据一个Dict生成一个表单数据对象，用来提交
 *  
 * @param data 
 */
export function createFormData(data:Dict,options?:CreateFormDataOptions):FormData{

    const formData = new FormData()
    const { getItemName } = Object.assign({
        getItemName:(keyPath:string[])=>keyPath.join('.')

    },options)

    function append(keyPath:string[],value:any){
        if(value==undefined){
            return
        }
        const name = getItemName ? getItemName(keyPath) : keyPath.join('.')
        if(Array.isArray(value)){
            value.forEach((item,index)=>{
                append([...keyPath,String(index)],item)
            })
        }else if(isPlainObject(value)){
            Object.entries(value).forEach(([key,value])=>{
                append([...keyPath,key],value)
            })
        }else{
            formData.append(name,value)
        }
    }
    append([],data)
    return formData

}