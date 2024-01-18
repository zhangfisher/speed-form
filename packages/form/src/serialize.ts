/**
 * 序列化表单数据
 */

import { Dict } from "./types"

function isAction(data:Dict){
    return 'execute' in data && !isValue(data)
}
function isValue(data:Dict){
    return 'value' in data
}

function isGroup(data:Dict){
    return isValue(data) && !isAction(data)
}


export interface GetFormDataOptions{
    entry?:string[]    
}

/**
 * 指定一个入口路径，获取指定路径下表单数据
 * @param state 
 * @param entryPath 
 */
export function getFormData(state:Dict,options?:GetFormDataOptions){
    

     
}