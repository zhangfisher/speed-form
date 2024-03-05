import { isIncludePath, watch } from "@speedform/reactive" 
import { FIELDS_STATE_KEY } from "./consts"

/**
 * 根据字段路径判定是否是字段值
 * @param path 
 * @returns 
 */
function isFieldValue(path:string[]){
    return path.length>1 && path[0]== FIELDS_STATE_KEY &&  path[path.length-1]=='value'
}

 
/**
 * 
 * 侦听表单中entryPath下所有字段的dirty属性，当任何一个字段的dirty属性发生变化时，都会触发监听函数的执行并更新dirty()所在的值
 * 
 * 
 * 只要有一个字段的dirty为true，则整个表单的dirty为true
 * 表单的dirty = field1.dirty || field2.dirty || field3.dirty ..... || fieldN.dirty
 * 
 * 
 * 
 */
export function dirty(entryPath?:string[]){
    return watch<any,boolean>((value,{ getSelfValue,triggerPath,selfPath })=>{
        if(!isIncludePath(entryPath ? entryPath : selfPath,triggerPath)) return       
        const selfValue = getSelfValue()
        if(!selfValue) return true
    },(path)=>isFieldValue(path),{
        initial:false
    })
}
 