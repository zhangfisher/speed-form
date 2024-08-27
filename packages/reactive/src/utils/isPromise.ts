export function isPromise(obj:any){
    return (typeof(obj) === 'function' && obj.then && typeof(obj.then) === 'function') || (obj && obj instanceof Promise)

}
