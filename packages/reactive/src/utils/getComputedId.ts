import { ComputedOptions } from "../computed/types"
import { joinValuePath } from "./joinValuePath"


/**
 * 生成计算属性的id
 * @param valuePath 
 * @param idArg 
 * @returns 
 */
export function getComputedId(valuePath:string[],idArg:ComputedOptions['id']){
    let id = ''
    if(typeof idArg == 'function'){
      id = idArg(valuePath)
    }else if(typeof idArg == 'string' ) {
      id = idArg
    }else{
      id = joinValuePath(valuePath)
    }
    return id 
  }