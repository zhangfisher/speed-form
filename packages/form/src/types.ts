import { AsyncComputedObject, AsyncComputedParams, AsyncComputedReturns, ComputedAsyncReturns, ComputedReturns, ComputedState } from "helux-store";
import { FieldComputedProp } from "./field";


export type ReactFC<Props=unknown> = React.FC<React.PropsWithChildren<
    Pick<React.HTMLAttributes<HTMLElement>,'className' | 'style'> & Props>> 

export type FormData = Record<string, any>;

// 原子类型
export type AtomType = string | number | boolean | null | undefined
 

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


export type PickFieldPropValue<T> =T extends (...args:any)=> Promise<infer R>  ? R : 
    (T extends AsyncComputedReturns<infer R1> ? R1 :
        (
            T extends (...args:any)=> infer R2 ? R2 :
            (
            T extends AsyncComputedObject<infer R3> ? R3 :
                (
                    T
                )
            )
        )
)

export type RequiredComputedField<T extends Record<string, any>> = {
    [K in keyof T]-?: Exclude<T[K],undefined> extends FieldComputedProp<any> ? PickFieldPropValue<Exclude<T[K],undefined>> : Required<T[K]>extends Record<string, any> ? ComputedState<Exclude<T[K],undefined> > : Exclude<T[K],undefined> ;
};
