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

export interface IReactiveable<T extends ComputedState<Dict> =ComputedState<Dict>>{
    get state():T
    useState<Value=T,SetValue=Value>(
        getter?:StateGetter<RequiredComputedState<T>,Value>,
        setter?:StateSetter<RequiredComputedState<T>,SetValue>
    ):[Value,(value:SetValue)=>void]        
    /**
     * 
     * @param fn 
     */
    setState(fn:(draft:T)=>void):void        
    /**
     * 创建计算属性
     */
    createComputed(params:CreateComputedOptions<T>):string
    /**
     * 手动运行计算函数
     * @param id 
     * @param options 
     */
    runComputed(id:string,options?:RuntimeComputedOptions):void     
    /**
     * 当读取响应对象时的回调
     * @param params 
     */
    onRead(params:{valuePath:string[],value:any,parent:string[], replaceValue:(newValue:any)=>void}):void
}

