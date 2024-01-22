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
 * 
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