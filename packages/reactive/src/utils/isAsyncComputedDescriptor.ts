
export function isAsyncComputedDescriptor(obj:any){
    return typeof(obj) === 'object' 
        && obj.hasOwnProperty("__COMPUTED__") 
        && ["async","sync"].includes(obj.__COMPUTED__)
        && obj.hasOwnProperty("fn")  && typeof(obj.fn) === 'function'
        && obj.hasOwnProperty("options") && typeof(obj.options) === 'object'
}
