import { OBJECT_PATH_DELIMITER } from "../consts";
import { WatchFilter,WatchOptions } from "./types";


export function createWatchFilter(on:WatchFilter):WatchOptions['on']{
    if(typeof on === 'function'){
        return on
    }else if(typeof(on)==='string'){
        return (path:string[])=>path.join(OBJECT_PATH_DELIMITER)===on
    }else if(Array.isArray(on)){
        return (path:string[])=>on.some(item=>Array.isArray(item) ? item.join(OBJECT_PATH_DELIMITER)===path.join(OBJECT_PATH_DELIMITER) : item===path.join(OBJECT_PATH_DELIMITER))
    }
}
 