import { IStore, OBJECT_PATH_DELIMITER, isIncludePath, watch } from "@speedform/reactive";
import { FIELDS_STATE_KEY, VALIDATE_COMPUTED_GROUP } from "./consts";  
import { ValidationError } from "./errors";

export function isValidateField(path:string[]){
    return path.length>1 && path[0]== FIELDS_STATE_KEY && (
        path[path.length-1] ==='validate' 
        || (path.length>=2 && path[path.length-2]=='validate' && path[path.length-1]=='result')
    ) // 以下排除根对象的validate属性
    && !(path.length==2 && path[1]=='validate')
    && !(path.length==3 && path[1]=='validate' && path[2]=='result')    
}


export type ValidateOptions<T=any> = {
    entry?:string[]                 // 指定入口 
}

/**
 * 
 * 用来标识表单的validate属性
 *  如下：
 *  {
 *     myValidate:validate({
        entry:['fields']
    }),
 * 
     代表validate属性侦听fields下所有字段的validate属性,并计算所有字段的validate属性值进行计算

     当entry范围内的所有字段的validate均为true时，myValidate的值才为true    
 * 
 * 
 *  侦听表单中entryPath下所有字段的validate属性，当任何一个字段的validate属性发生变化时，都会触发监听函数的执行并更新validate()所在的值
 *  只要有一个字段的validate为false，则整个表单的validate为false
 *  表单的validate = field1.validate && field2.validate && field3.validate ..... && fieldN.validate
 * 
 *  这样就需要侦听到所有字段的validate属性时进行计算
 *  
 * 逻辑如下：
 * 
 * - 侦听到字段的validate属性时，如果=false则写入ListenerCache，=true则从ListenerCache移除对应的字段，这样当ListenerCache中不为空时，代表表单的validate=false
 * - 如果ListenerCache为空则代表表单的validate=true
 * 
 * 
 * @returns 
 */
export function validate<T=any>(options?:ValidateOptions){
    const { entry  } = Object.assign({},options)
    return watch<boolean,boolean>((value,path, watchObject)=>{        
        // 只侦听entry下的所有字段
        if(!isIncludePath(entry ? entry : watchObject.selfPath,path)) return   
        const selfCache = watchObject.cache // 得到的是一个Dict用来保存所有字段的validate属性值
        // validate属性是一个boolean
        if(typeof(value)=='boolean'){
            const srcKey = path.join(OBJECT_PATH_DELIMITER)
            if(value){
                delete watchObject.cache[srcKey]
            }else{
                watchObject.cache[srcKey] = value
            }
        }
        // 由于cache里面只记录validate=false的值，所以如果cache不为空则代表有字段的validate=false
        return Object.keys(watchObject.cache).length==0
    },(path)=>isValidateField(path),{
        initial:true
    })
}
 

/**
 * 用在validate中执行进行字段断言，当
 * @param expresstion 
 * @param tips 
 */
export function assert(condition:boolean | ((...args:any[])=>boolean),tips:string | (()=>string)){
    const cond = typeof(condition)=='function' ? condition() : condition
    if(!cond){
        throw new ValidationError(typeof(tips)=='function' ? tips() : tips)
    }
}


/**
 * 创建校验函数
 * 
 * createValidate(store)(['fields']代表校验所以fields下的字段
 * 也就是fields,x
 * 
 * 
 * @param store 
 * @returns 
 */
export function createValidator(store:IStore){
    return  async (scope?:string[])=>{
        if(Array.isArray(scope) && scope.length>0){        
            let key= scope.join(OBJECT_PATH_DELIMITER)    
            for(let [valuePath,obj] of store.computedObjects){
                if(valuePath.startsWith(key)){
                    obj.run()
                }
            }
        }else{
            store.computedObjects.runGroup(VALIDATE_COMPUTED_GROUP)
        }        
    }
}
