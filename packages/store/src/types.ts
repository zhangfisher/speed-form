export type StateUpdater<State=any> = (state:State)=>any
export type Action<State> = (...args:any[])=>StateUpdater<State>
export type AsyncAction<State> = (...args:any[])=>Promise<StateUpdater<State>>
export type Actions<State=any>  = Record<string,Action<State> | AsyncAction<State>>
import type { ComputedReturns,ComputedAsyncReturns,AsyncComputedReturns,AsyncComputedObject } from "./computed"
/**
 * 返回函数的返回值类型
 * 支持返回()=>Promise<R>中的R类型 
 */
export type AsyncReturnType<T extends (...args: any) => any> = T extends (...args: any) => Promise<infer R> ? R : (
    T extends (...args: any) => infer R ? R : any)
    

type PickComputedReturns<T> = T extends AsyncComputedReturns<infer X> ? AsyncComputedObject<X> : 
    (T extends ComputedAsyncReturns<infer X> ? AsyncComputedObject<X>: (T extends ComputedReturns<infer X> ? X:T) ) 
    



// 转换状态中的计算属性函数
export type ComputedState<T extends Record<string, any>> = {
      [K in keyof T]: T[K] extends (...args:any) => any ? PickComputedReturns<T[K]> : T[K] extends Record<string, any> ? ComputedState<T[K]> : T[K];
};

