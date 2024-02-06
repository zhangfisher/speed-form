import { getVal } from '@helux/utils'
import type { ComputedDepends } from './computed'
import { OBJECT_PATH_DELIMITER } from './consts'



export function getValueByPath(state:any,path?:string | string[] | ((state:any)=>string | string[])){
    let paths:string[] = []
    try{
        if(typeof(path)=== 'function'){
            path = path.call(state,state)
        }
        paths = Array.isArray(path) ? path : (typeof(path)=='string' ? path.split(OBJECT_PATH_DELIMITER) : [])    
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
如valuePath =[ 'a', 'b', 'c', 'd', 'e', 'f' ]
self =  [ 'a', 'b', 'c', 'd', 'e', 'f' ]
root =  []
parent =  [ 'a', 'b', 'c', 'd' ]
current =  [ 'a', 'b', 'c', 'd', 'e' ]
['a','b'] =  [ 'a', 'b' ]
m =  [ 'a', 'b', 'c', 'd', 'e', 'm' ]
x =  [ 'a', 'b', 'c', 'd', 'e', 'x' ]
./x =  [ 'a', 'b', 'c', 'd', 'e', 'x' ]
../x =  [ 'a', 'b', 'c', 'd', 'x' ]
../../x =  [ 'a', 'b', 'c', 'x' ]
../../../x =  [ 'a', 'b', 'x' ]
../../../../x =  [ 'a', 'x' ]
../../../../../x =  [ 'x' ]
../../../../../../x =  [ 'x' ]
 * 
 * 
 * @param path 
 * @param relPath 
 * @returns 
 */
export function getRelValuePath(path:string[],relPath:'self' | 'root' | 'parent' | 'current' | string[] | string ):string[]{
    if(!Array.isArray(path)) throw new Error('path must be an array')
    if(relPath  === 'self'){
        return path
    }else if(relPath === 'root'){
        return []
    }else if(relPath === 'parent'){
        return path.slice(0,-2)
    }else if(relPath === 'current'){
        return path.slice(0,-1)
    }else if(typeof(relPath) === 'string'){
        // 字符串支持相对路径语法，如"../" 或 "./" 或 "xxx"
        if(relPath.startsWith('./')){
            return [...path.slice(0,-1),...relPath.slice(2).split(OBJECT_PATH_DELIMITER)]
        }else if(relPath.startsWith('../')){ // 父路径
            return getRelValuePath(path.slice(0,-1),relPath.slice(3))
        }else{
            return [...path.slice(0,-1),...relPath.split(OBJECT_PATH_DELIMITER)]
        }
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
 * @param arg 返回 [[],[],[],[]]
 */
export function getDeps(arg:ComputedDepends | undefined,ctx?:any):(string[])[]{
    return (arg || []).map((d: any) =>Array.isArray(d) ? d : (typeof(d)=='string' ? d.split(OBJECT_PATH_DELIMITER) : []))   
}


/**
 * depends:["./first/cc/fff","../","/sss",'self']
 *  
 * 
 */
export function getDepValues(deps:string[],draft:any,curValuePath:string[]){
    return deps.map((dep)=>{ 
        return getVal(draft,getRelValuePath(curValuePath,dep))
    })
}