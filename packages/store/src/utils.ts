import { getVal } from '@helux/utils'
import type { ComputedDepends } from './computed'



export function getValueByPath(state:any,path?:string | string[] | ((state:any)=>string | string[])){
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

export function log(message:any,level:'log' | 'error' | 'warn'='log'){
    let msg = typeof(message) === 'function' ? message() : (message instanceof Error ? message.stack : message)
    try{
        console[level]("[helux-store] ",...Array.isArray(msg) ? msg : [msg])
    }catch{}
}


/**
 * 根据相对路径获取值的路径
 * 
 * 如valuePath = ['a','b','c','d']   
 *  relPath = 'default'  则返回 ['a','b','c','d']
 *  relPath = 'root'     则返回 []
 *  relPath = 'parent'   则返回 ['a','b']
 *  relPath = 'current'  则返回 ['a','b','c']
 *  relPath = ['a','b']  则返回 ['a','b']
 *  relPath = 'x'        则返回 ['a','b','c','x']
 * 
 * 
 * @param path 
 * @param relPath 
 * @returns 
 */
export function getRelValuePath(path:string[],relPath:'self' | 'root' | 'parent' | 'current' | string[] | string ){
    if(relPath  === 'self'){
        return path
    }else if(relPath === 'root'){
        return []
    }else if(relPath === 'parent'){
        return path.slice(0,-2)
    }else if(relPath === 'current'){
        return path.slice(0,-1)
    }else if(typeof(relPath) === 'string'){
        return [...path.slice(0,-1),relPath.split(".")]
    }else if(Array.isArray(relPath)){
        return relPath
    }
    return path    
}


export function joinValuePath(paths:(string | string[])[]):string{
    return paths.map((p)=>{
        return Array.isArray(p) ? p.join(".") : p
    }).join('_')
}
 

export function getError(e:any):Error{
    return  e instanceof Error ? e : new Error(e)
}

/**
 * 用来将依赖参数转换为数组
 * @param arg 
 */
export function getDeps(arg:ComputedDepends | undefined,ctx?:any):(string[])[]{
    let deps:(string[])[]= (arg || []).map((d: any) =>Array.isArray(d) ? d : (typeof(d)=='string' ? d.split(".") : []))
    return deps
}