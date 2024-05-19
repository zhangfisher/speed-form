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
            // 如果路径中包含"."，则自动转换为"/"并给出警告
            // 使用/路径分割符的原因是，可以使用./或../等相对路径语法
            if(relPath.includes(".")){
                console.warn('[@speedform/reactive] The dependency path uses "/" as the separator, and will automatically convert')
                relPath=relPath.replaceAll(".","/")
            }
            return [...path.slice(0,-1),...relPath.split(OBJECT_PATH_DELIMITER)]
        }
    }else if(Array.isArray(relPath)){
        return relPath
    }
    return path    
}