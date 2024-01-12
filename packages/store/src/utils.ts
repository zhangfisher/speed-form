import { getVal } from '@helux/utils'

export function getValue(state:any,path:string | string[] | ((state:any)=>string | string[])){
    let paths:string[] = []
    try{
        if(typeof(path)=== 'function'){
            path = path.call(state,state)
        }
        paths = Array.isArray(path) ? path : (typeof(path)=='string' ? path.split('.') : [])    
        return paths.length > 0 ? getVal(state,paths) : state
    }catch{
        return state
    }
}


export const SKIP_COMPUTED= Symbol('SKIP_COMPUTED')
/**
 * 
 * 用来在状态中标识一个函数，该函数不会被转换为计算属性函数
 * 
 * 
 */
export function skipComputed(fn:Function){
    // @ts-ignore
    fn[SKIP_COMPUTED] = true
    return fn
}

export function isSkipComputed(fn:Function){
    // @ts-ignore
    return fn[SKIP_COMPUTED] === true

    
}


export interface SwitchValueOptions{
    typeMatchers: Record<string,string>
    defaultValue?:any
}
/**
 * 
 * switchValue(toComputedResult,{
 *      default:valuePath,
 *      root:[]
 *      parent:valuePath.slice(0,valuePath.length-1)     
 *      Array:valuePath
 *      Object:fn1
 *      Boolean:fn4
 *      Number:fn5
 *      StringArray:fn6   
 * })
 * 
 * 
 */

export function switchValue<T=any>(value:T,switchers:Record<string,any>,options?:SwitchValueOptions){
    const { typeMatchers,defaultValue } = Object.assign({
        typeMatchers:{
            Number  : 'number',
            String  : 'string',
            Function: 'function',
            Object  : 'object',
            Boolean : 'boolean'            
        }
    },options) 
    let result:any = defaultValue
    for(const [matchKey,matchValue] of Object.entries(switchers)){                    
        if(matchKey == value){
            result = matchValue
            break
        }else if(matchKey in typeMatchers && typeMatchers[matchKey] ==typeof(value)){            
            result = matchValue      
            break
        }else if(matchKey == 'Array'){
            if(Array.isArray(value)){
                result = matchValue
                break
            }
        }else if(matchKey.endsWith("Array")){
            const t = typeMatchers[matchKey.slice(0,-5)]
            if(Array.isArray(value) &&  value.every((v:any)=>typeof(v)==t)){                
                result = matchValue
                break
            }
        }
    }

    return typeof(result)=='function' ? result(value) : result        
}