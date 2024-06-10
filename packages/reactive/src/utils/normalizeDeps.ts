import { ComputedDepends } from "../computed/types"
import { OBJECT_PATH_DELIMITER } from "../consts"

/**
 * 
 * 规范化依赖参数
 * 用来将依赖参数转换为数组
 * 
 * @param arg 返回 [[],[],[],"./ddd","../../xxxxx",[]]
 */
export function normalizeDeps(arg:ComputedDepends | undefined):(string | string[])[]{
    return (arg || []).map((dep: any) =>{
        if(Array.isArray(dep)){
            return dep
        }else if(typeof(dep)=='string'){
            if(['/',"./","../"].some(c=>dep.startsWith(c))){
                return dep
            }else{
                return dep.includes(OBJECT_PATH_DELIMITER) ? dep.split(OBJECT_PATH_DELIMITER) : dep.split(".")
            } 
        }else{
            return []
        }
    })
}

