import { AsyncComputedObject,ComputedDescriptor } from "@speedform/reactive";


// 用来声明表单定义中的动态计算属性
export type ComputableAttr<R=unknown,Args extends any[]=any[]> = ((...args:Args)=>R)  
  | ((...args:Args)=>Promise<R>)
  // | AsyncComputedObject<R>
  | ComputedDescriptor<R>
  | R  

 
export type ReactFC<Props=unknown> = React.FC<React.PropsWithChildren<
    Pick<React.HTMLAttributes<HTMLElement>,'className' | 'style'> & Props>> 

export type FormData = Record<string, any>;
 
 
export type Primitive = number | boolean | string | null | undefined 

// 指定字符串路径来提取对象类型中的类型，如GetTypeByPath<{a:{b:number}},"a.b"> == number
export type GetTypeByPath<T ,P extends string> = P extends `${infer K}.${infer R}` 
  ? K extends keyof T     
    ? GetTypeByPath<T[K],R> : never : P extends keyof T 
      ? T[P] : any   

// 移除对象中的never类型
export type RemoveNeverItem<T extends Record<string, any>> = {
        [K in keyof T as T[K] extends never ? never : K]: T[K]
      }