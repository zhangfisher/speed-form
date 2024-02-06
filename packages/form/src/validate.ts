import { Dict, OBJECT_PATH_DELIMITER, isIncludePath, watch } from "helux-store";
import { FIELDS_STATE_KEY } from "./consts"; 

export function isValidateField(path:string[]){
    return path.length>1 && path[0]== FIELDS_STATE_KEY && (
        path[path.length-1] ==='validate' 
        || (path.length>=2 && path[path.length-1]=='result' && path[path.length-2]=='validate')
    ) 
    && !(path.length==2 && path[1]=='validate')
    && !(path.length==3 && path[1]=='validate' && path[2]=='result')    
}



/**
 *  侦听表单中entryPath下所有字段的validate属性，当任何一个字段的validate属性发生变化时，都会触发监听函数的执行并更新validate()所在的值
 *  只要有一个字段的validate为false，则整个表单的validate为false
 *  表单的validate = field1.validate && field2.validate && field3.validate ..... && fieldN.validate
 * 
 *  这样就需要侦听到所有字段的validate属性时进行计算
 * 
 *  因此,表单的validate属性值是一个Dict={字段1:字段1的validate,字段2:字段2的validate,字段3:字段3的validate,....字段N:字段N的validate}
 *  当任何一个字段的validate属性发生变化时，都会触发监听函数的执行,将其值回写到validate属性Dict中
 * 
 * 
 * @returns 
 */
export function validate(entryPath?:string[]){
    return watch<boolean,Dict>((value,{ getSelfValue,srcPath,selfPath})=>{
        if(!isIncludePath(entryPath ? entryPath : selfPath,srcPath)) return       
        const selfValue = getSelfValue()  // 得到的是一个Dict用来保存所有字段的validate属性值
        if(typeof(value)=='boolean'){
            selfValue[srcPath.join(OBJECT_PATH_DELIMITER)] = value
        }
        return selfValue
    },(path)=>isValidateField(path),{
        initial:{}
    })
}
 