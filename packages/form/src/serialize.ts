/**
 * 序列化表单数据
 * 
 * 负责从表单schema中读取数据，生成表单数据
 * 
 * 
 */

import { Dict } from "./types"
import { isPlainObject } from "flex-tools/typecheck/isPlainObject" 

function isFormAction(data:Dict){
    return 'execute' in data && !isFieldValue(data)
}
function isFieldValue(data:Dict){
    return isPlainObject(data) && 'value' in data
}

function isFieldList(data:Dict){
    return Array.isArray(data)
}

/**
 * 
 * 组类型，
 * 
 *  - 是一个{}
 *  - 没有value字段
 *  
 * 
 * 
 * 
 * @param data  * 
 * @returns 
 */
function isFieldGroup(data:Dict){
    return isPlainObject(data) && !isFieldValue(data) && !isFormAction(data)
}


export interface GetFormDataOptions{
    entry?:string[]    
}


function getFieldValue(data:Dict){
    return data.value
}

function getFiledGroupValue(data:Dict){
    const result:Dict = {}
    Object.entries(data).forEach(([key,value])=>{
        if(isFieldValue(value)){
            result[key] = getFieldValue(value)
        }else if(isFieldGroup(value)){
            result[key] = getFiledGroupValue(value)
        }else if(isFieldList(value)){
            
        }else{
            result[key] = value
        }        
    })
    return result
}
function getFiledListValue(data:Dict){

}
/**
 * 指定一个入口路径，获取指定路径下表单数据
 * @param state 
 * @param entryPath 
 */
export function getFormData(state:Dict,options?:GetFormDataOptions):Record<string,any>{
    return getFiledGroupValue(state)
}