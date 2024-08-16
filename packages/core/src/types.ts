import { AsyncComputedObject,ComputedDescriptor } from "@speedform/reactive";


// 用来声明表单定义中的动态计算属性
export type ComputedAttr<R=unknown,Args extends any[]=any[]> = ((...args:Args)=>R)  
  | ((...args:Args)=>Promise<R>)
  | AsyncComputedObject<R>
  | ComputedDescriptor<R>
  | R  

export type ComputedAttr1<R=unknown,Scope=any> = ((scope:Scope)=>R)  
  | ((scope:Scope)=>Promise<R>)
  | AsyncComputedObject<R>
  | ComputedDescriptor<R>
  | R  
 
export type ReactFC<Props=unknown> = React.FC<React.PropsWithChildren<
    Pick<React.HTMLAttributes<HTMLElement>,'className' | 'style'> & Props>> 

export type FormData = Record<string, any>;
 
 
export type Primitive = number | boolean | string | null | undefined 


 /**
 * 
 * 根据路径提取对象类型中的类型
 * 
 * PickByPath<{a:boolean},"a">  == boolean
 * PickByPath<{a:boolean},["a"]>  == boolean
 * PickByPath<{a:{b:number}},["a","b"]>  == number
 * 
 * 
 */
export type PickByPath<T extends Record<string, any>, P extends string | string[]> = 
  P extends string 
    ? T[P] 
    : P extends [infer First, ...infer Rest]
      ? First extends keyof T
        ? Rest extends []
          ? T[First]
          : Rest extends string[]
            ? PickByPath<T[First], Rest>
            : never
        : never
      : never;

// 测试用例
type Test1 = PickByPath<{a: boolean}, "a">; // boolean
type Test2 = PickByPath<{a: boolean}, ["a"]>; // boolean
type Test3 = PickByPath<{a: {b: number}}, ["a", "b"]>; // number
type Test4 = PickByPath<{a: {b: number,c:string[]}}, ["a", "c"]>; // string[]