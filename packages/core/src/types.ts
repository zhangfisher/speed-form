import { AsyncComputedObject,ComputedDescriptor } from "@speedform/reactive";


// 用来声明表单定义中的动态计算属性
export type ComputedAttr<R=unknown,Args extends any[]=any[]> = ((...args:Args)=>R)  
  | ((...args:Args)=>Promise<R>)
  | AsyncComputedObject<R>
  | ComputedDescriptor<R>
  | R  

 
export type ReactFC<Props=unknown> = React.FC<React.PropsWithChildren<
    Pick<React.HTMLAttributes<HTMLElement>,'className' | 'style'> & Props>> 

export type FormData = Record<string, any>;
 
 
export type Primitive = number | boolean | string | null | undefined 


 