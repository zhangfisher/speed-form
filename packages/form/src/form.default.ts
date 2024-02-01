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



function createDirtyProp(){
    return watch<boolean>((value,{ getSelfValue })=>{
        const selfValue = getSelfValue()
        if(typeof(value)=='boolean' && value!==selfValue) return value
    },(path)=>isFieldValue(path),{
        initial:false
    })
}

function createValidateProp(){
    return watch<Dict,boolean>((value,{ getSelfValue,srcPath })=>{
        const selfValue = getSelfValue() 
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
    