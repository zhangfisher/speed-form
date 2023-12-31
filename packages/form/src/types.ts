import { AsyncComputedObject, AsyncComputedReturns, ComputedState,PickComputedReturns,RequiredComputedState } from "helux-store";


// 用来声明表单定义中的动态计算属性
export type FieldComputedProp<R=unknown> = ((...args:any)=>R)  
  | ((...args:any)=>Promise<R>)
  | AsyncComputedObject<R>
  | AsyncComputedReturns<R>
  | R  

 


export type ReactFC<Props=unknown> = React.FC<React.PropsWithChildren<
    Pick<React.HTMLAttributes<HTMLElement>,'className' | 'style'> & Props>> 

export type FormData = Record<string, any>;

export type Dict = Record<string,any> // 字段属性类型集

 

// export type PickFieldPropValue<T> = T extends (...args:any)=> Promise<infer R1> ? R1 :
//   (
//     T extends (...args:any)=> infer R2 ? R2 :
//     (
//       T extends AsyncComputedObject<infer R3> ? R3 :
//       (
//         T extends AsyncComputedReturns<infer R4>  ?  AsyncComputedObject<R4> :
//         T
//       )
//     )
//   )



// export type PickFieldPropValue<T> = T extends (...args:any)=> Promise<infer R>  ? R : 
//     (T extends AsyncComputedReturns<infer R1> ? R1 :
//         (
//             T extends (...args:any)=> infer R2 ? R2 :
//             (
//             T extends AsyncComputedObject<infer R3> ? R3 : T
//             )
//         )
// )

// // 使字段中的所有字段都是必填的
// export type RequiredComputedField<T extends Record<string, any>> = {
//     [K in keyof T]-?: Exclude<T[K],undefined> extends FieldComputedProp<any> ? PickFieldPropValue<Exclude<T[K],undefined>> : Required<T[K]> extends Record<string, any> ? RequiredComputedState<Exclude<T[K],undefined> > : Exclude<T[K],undefined> ;
// };

 

// 
export type PickAsyncFieldPropValue<T> = T extends (...args:any)=> Promise<infer R>  ? AsyncComputedObject<R> : 
    (
        T extends AsyncComputedReturns<infer R1> ? AsyncComputedObject<R1> :
        (
            T extends (...args:any)=> infer R2 ? R2 : T
        )
    )
 

// 使字段中的所有字段都是必填的，并且将异步计算属性转换为AsyncComputedObject
export type RequiredComputedAsyncField<T extends Record<string, any>> = {
    [K in keyof T]-?: Exclude<T[K],undefined> extends (...args:any)=>any 
        ? PickComputedReturns<Exclude<T[K],undefined>> 
        : (Required<T[K]> extends Record<string, any> ? RequiredComputedAsyncField<Exclude<T[K],undefined> > : Exclude<T[K],undefined>)
};




export type Primitive = number | boolean | string | null | undefined 