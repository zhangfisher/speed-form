/**
 * 
 * 对sharex的简单封装
 * 
 * @param options 
 * @returns 
 */


import { Dict, RuntimeComputedOptions } from "./types"

export interface IReactive<T extends Dict = Dict>{
    useState(fn:(draft:T)=>void):void        
    setState(fn:(draft:T)=>void):void        
    createMutate(fn:(draft:T)=>void):string
    runMutate(id:string,params?:RuntimeComputedOptions):void
}