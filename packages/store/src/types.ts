export type StateUpdater<State=any> = (state:State)=>any
export type Action<State> = (...args:any[])=>StateUpdater<State>
export type AsyncAction<State> = (...args:any[])=>Promise<StateUpdater<State>>
export type Actions<State=any>  = Record<string,Action<State> | AsyncAction<State>>
import type { Computed,AsyncComputed,ComputedAsyncReturns,AsyncComputedObject } from "./computed"
/**
 * 返回函数的返回值类型
 * 支持返回()=>Promise<R>中的R类型 
 */
export type AsyncReturnType<T extends (...args: any) => any> = T extends (...args: any) => Promise<infer R> ? R : (
    T extends (...args: any) => infer R ? R : any)
    
// 用来提前计算属性函数的返回值
export type PickComputedResult<T> = T extends ComputedAsyncReturns<infer X> ? AsyncComputedObject<X> : 
                                    (T extends AsyncComputed<infer X> ? AsyncComputedObject<X>: 
                                    (T extends Computed<infer R> ? R : T) ) 
                                    

// 转换状态中的计算属性函数
// 将状态中的计算属性函数转换为计算属性函数的返回值类型
// 如：{count:()=>1} => {count:number}
// 如：{count:async ()=>1} => {count:number}
export type ComputedState<T extends Record<string, any>> = {
      [K in keyof T]: T[K] extends (...args:any) => any ? PickComputedResult<T[K]> : T[K] extends Record<string, any> ? ComputedState<T[K]> : T[K];
};


// 在ComputedState的基础上，排除了undefined的类型
export type RequiredComputedState<T extends Record<string, any>> = {
    [K in keyof T]-?: Exclude<T[K],undefined> extends (...args:any) => any ? PickComputedResult<Exclude<T[K],undefined>> : Required<T[K]>extends Record<string, any> ? ComputedState<Exclude<T[K],undefined> > : Exclude<T[K],undefined> ;
};


 