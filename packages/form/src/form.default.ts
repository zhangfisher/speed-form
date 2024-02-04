import { Dict, watch } from "helux-store"

function isValidateField(path:string[]){
    return (
        path[path.length-1] ==='validate' 
        || (path.length>=2 && path[path.length-1]=='result' && path[path.length-2]=='validate')
    ) && !(path.length==1 && path[0]=='validate')
    && !(path.length==2 && path[0]=='validate' && path[1]=='result')

    
}
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
function createDirtyProp(){
    return watch<boolean>((value,{ getSelfValue })=>{
        const selfValue = getSelfValue()
        if(!selfValue) return true
    },(path)=>isFieldValue(path),{
        initial:false
    })
}

/**
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
function createValidateProp(){
    return watch<boolean,Dict>((value,{ getSelfValue,srcPath })=>{
        const selfValue = getSelfValue()  // 得到的是一个Dict用来保存所有字段的validate属性值
        if(typeof(value)=='boolean'){
            selfValue[srcPath.join(".")] = value
        }
        return selfValue
    },(path)=>isValidateField(path),{
        initial:{}
    })
}

export default {
    title:"SpeedForm",
    help:"",
    tips:"",
    status:"idle",
    // 跟踪字段值,当值发生变化时，将dirty设置为true
    dirty:createDirtyProp(),
    validate:createValidateProp(),
    readonly:false,
    enable:true,
    visible:true
}
    