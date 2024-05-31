import { OBJECT_PATH_DELIMITER } from "../consts";
import { WatchFilter,WatchOptions } from "./types";



/**
 * 
 * 在指定on参数时，取值可以是
 * - 动态侦听  (path:string[],value:any)=>boolean
 * - 静态侦听  指定要侦听的路径
 *      string | (string,string[])[]
 *   如果是string，则使用OBJECT_PATH_DELIMITER分割成数组
 *   最后形式是string[][]
 * 
 * 
 * 
 * 
 * @param on 
 * @returns 
 */
// export function normalizedWatchFilter(on:WatchOptions['on']): WatchFilter{
//     if(typeof on === 'function'){
//         return on
//     }else if(typeof(on)==='string'){
//         return [on.split(OBJECT_PATH_DELIMITER)]
//     }else if(Array.isArray(on)){
//         return on.map(item=>typeof(item)=='string' ? item.split(OBJECT_PATH_DELIMITER) : item )
//     }else{
//         return []
//     }
// }
 