import { getMapVal } from "./getMapVal";
import { isMap } from "./isMap";

export function getVal(obj: any, keyPath: string[]): any {
    if(keyPath.length === 0) return obj
    let val;
    let parent = obj;
    keyPath.forEach((key) => { 
      val = isMap(parent) ? getMapVal(parent, key) : parent[key]; 
      parent = val;
    });
    return val;
  }