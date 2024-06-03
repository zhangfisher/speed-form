/**
 * 
 * 对sharex的简单封装
 * 
 * @param options 
 * @returns 
 */

import { ComputedDepends, ComputedOptions, ComputedState, Dict, RequiredComputedState, RuntimeComputedOptions, StateGetter, StateSetter } from "../types"
 

export type CreateComputedOptions<T extends ComputedState<Dict> =ComputedState<Dict>>= {
    depends?:ComputedDepends        // 依赖的计算属性
    initial(state:T,params:any):void                  // 首次计算时执行
    getter():void                   // 计算函数
    // 当依赖变化时执行
    onComputed(params:{
        draft:T,
        setState:(state:T)=>void,
        input:any,
        options?: ComputedOptions
    }):void                  // 当依赖变化时执行
    options:ComputedOptions         // 计算属性的选项
}

export type IReactiveReadHookParams ={ path: string[], value: any, parent:any; replaceValue: (newValue: any) => void; }

export type IReactiveableOptions = {
    id?:string
    /**
     *  响应对象的读取回调
     * @param params  { 
     *      path: string[],                         // 读取的路径
     *      value: any,                             // 读取的值
     *      parent: any;                             // 父对象引用
     *      replaceValue: (newValue: any) => void;  // 提供一个方法用来替换值原始值
     * }
     *    
     */
    onRead(params: IReactiveReadHookParams):void
} 

export class Reactiveable<T extends Dict = Dict>{
    constructor(state:T,options:IReactiveableOptions){

    }     
    get state():ComputedState<T>{
        throw new Error("Method not implemented.")
    }
    useState<Value=T,SetValue=Value>(
        getter?:StateGetter<RequiredComputedState<T>,Value>,
        setter?:StateSetter<RequiredComputedState<T>,SetValue>
    ):[Value,(value:SetValue)=>void]        {
        throw new Error("Method not implemented.")
    }
    /**
     * 
     * @param fn 
     */
    setState(fn:(draft:ComputedState<T>)=>void):void{
        throw new Error("Method not implemented.")
    }        
    /**
     * 创建计算属性
     */
    createComputed(params:CreateComputedOptions<ComputedState<T>>):string{
        throw new Error("Method not implemented.")
    }
    /**
     * 手动运行计算函数
     * @param id 
     * @param options 
     */
    runComputed(id:string,options?:RuntimeComputedOptions):void{
        throw new Error("Method not implemented.")
    }

}

