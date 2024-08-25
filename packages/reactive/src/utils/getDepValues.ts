import { getRelValuePath } from "./getRelValuePath"
import { getVal } from "./getVal"


/**
 * depends:["./first/cc/fff","../","/sss",'self']
 *  
 * 
 */
export function getDepValues(deps:any[],draft:any,curValuePath:string[]){
    return deps.map((dep)=>{ 
        try{
            return getVal(draft,getRelValuePath(curValuePath,dep))
        }catch(e){
            console.warn(e)
            return undefined
        }        
    }).filter((v)=>v!==undefined)
}

