import { getMapVal } from "./getMapVal";
import { isMap } from "./isMap";

export function getVal(obj: any, keyPath: string[]): any {
    if(keyPath.length === 0) return obj
    let val;
    let parent = obj;
    keyPath.forEach((key) => {
      // console.log('\nisMap(parent)', isMap(parent));
      // console.log('parent', parent);
      // console.log('key', key);
      val = isMap(parent) ? getMapVal(parent, key) : parent[key];
      // val = parent[key];
      // console.log('val', val);
      parent = val;
    });
    return val;
  }