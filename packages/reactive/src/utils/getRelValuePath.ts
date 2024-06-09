import { OBJECT_PATH_DELIMITER } from "../consts"


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
 * @param curPath 
 * @param relPath 
 * @returns 
 */
export function getRelValuePath(curPath:string[],relPath:'self' | 'root' | 'parent' | 'current' | string[] | string,isRelPath?:boolean):string[]{
    if(!Array.isArray(curPath)) throw new Error('curPath must be an array')
    if(relPath  === 'self'){
        return curPath
    }else if(relPath === 'root'){
        return []
    }else if(relPath === 'parent'){
        return curPath.slice(0,-2)
    }else if(relPath === 'current'){
        return curPath.slice(0,-1)
    }else if(typeof(relPath) === 'string'){        
        // 字符串支持相对路径语法，如"../" 或 "./" 或 "xxx"
        if(relPath.startsWith('./')){
            return [...curPath.slice(0,-1),...relPath.slice(2).split(OBJECT_PATH_DELIMITER)]
        }else if(relPath.startsWith('../')){ // 父路径
            return getRelValuePath(curPath.slice(0,-1),relPath.slice(3),true)
        }else if(relPath.startsWith("/")){     // 绝对路径             
            relPath = relPath.replace(/^(\/)*/,"") 
            return [...relPath.split(OBJECT_PATH_DELIMITER)]
        }else{
            return isRelPath ?  [...curPath.slice(0,-1),...relPath.split(OBJECT_PATH_DELIMITER)] : [...relPath.split(OBJECT_PATH_DELIMITER)]
        }
    }else if(Array.isArray(relPath)){
        return relPath
    }
    return curPath    
}