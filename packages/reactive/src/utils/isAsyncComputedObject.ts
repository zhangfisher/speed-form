
/**
 * 判断是否是一个异步计算对象
 * @param obj 
 * @returns 
 */
export function isAsyncComputedObject(obj:any){
    return typeof(obj)=='object' && ["result","loading","timeout","retry","run"].every(s=>obj.hasOwnProperty(s))
}