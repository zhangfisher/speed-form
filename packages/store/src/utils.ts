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