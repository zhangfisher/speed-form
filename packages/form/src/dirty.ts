import { isIncludePath, watch } from "helux-store" 

/**
 * 根据字段路径判定是否是字段值
 * @param path 
 * @returns 
 */
function isFieldValue(path:string[]){
    return path[path.length-1]=='value'
}

 
/**
 * 只要有一个字段的dirty为true，则整个表单的dirty为true
 * 表单的dirty = field1.dirty || field2.dirty || field3.dirty ..... || fieldN.dirty
 * 
 */
export function dirty(){
    return watch<boolean>((value,{ getSelfValue,srcPath,selfPath })=>{
        if(!isIncludePath(selfPath,srcPath)) return       
        const selfValue = getSelfValue()
        if(!selfValue) return true
    },(path)=>isFieldValue(path),{
        initial:false
    })
}
 