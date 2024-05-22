export * from "./computed/types"
export * from "./store/types"


//
export type Dict<T=any> = Record<string,T>




// /**
//  * 用来声明computed和watch函数的返回值类型
//  */
// export interface StateValueDescriptorParams<Fn extends Function,Options extends Dict = Dict> {
//     fn: Fn
//     options:Options
// } 

// /**
//  * 声明状态中的计算函数
//  */
// export interface StateValueDescriptor<Fn extends Function,Options extends Dict = Dict> {
//  (...args:any):StateValueDescriptorParams<Fn,Options>
//  __COMPUTED__: 'sync' | 'async' | 'watch' 
// }