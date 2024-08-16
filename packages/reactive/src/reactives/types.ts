/**
 * 
 * 对sharex的简单封装
 * 
 * @param options 
 * @returns 
 */

import { ComputedOptions, ComputedState, Dict, RequiredComputedState, RuntimeComputedOptions, StateGetter, StateSetter } from "../types"
 

export type CreateAsyncComputedOptions<T extends ComputedState<Dict> =ComputedState<Dict>>= {
    depends:(state:T)=>any[]        // 依赖的计算属性
    initial(state:T,params:any):void                  // 首次计算时执行 
    onComputed(params:{
        draft:T,                        // 草稿对象
        setState:(state:T)=>void,       // 更新状态
        values:any[],                    // 所依赖的值
        options?: ComputedOptions
    }):void                  // 当依赖变化时执行
    options:ComputedOptions
}

export type CreateComputedOptions<T extends ComputedState<Dict> =ComputedState<Dict>>= {
    onComputed(params:{
        draft:T,                        // 草稿对象
        setState:(state:T)=>void,       // 更新状态
        values:any[],                    // 输入参数，即依赖变化后的值[] 
        options:ComputedOptions
    }):void                             // 当依赖变化时执行
    options:ComputedOptions
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
    onRead?(params: IReactiveReadHookParams):void
} 

export class Reactiveable<State extends Dict = Dict>{
    constructor(state:State,options?:IReactiveableOptions){

    }     
    get state():ComputedState<State>{
        throw new Error("state not implemented.")
    }
    useState<Value=State>(getter?:StateGetter<RequiredComputedState<State>,Value>):[Value,(updater:(draft:State)=>void)=>void]        {
        throw new Error("useState not implemented.")
    }
    /**
     * 
     * @param fn 
     */
    setState(fn:(draft:ComputedState<State>)=>void):void{
        throw new Error("setState not implemented.")
    }        
    /**
     * 创建计算属性
     */
    createAsyncComputed(params:CreateAsyncComputedOptions<ComputedState<State>>):string{
        throw new Error("createAsyncComputed not implemented.")
    }
    createComputed(params:CreateComputedOptions<ComputedState<State>>):string{
        throw new Error("createComputed not implemented.")
    }
    /**
     * 手动运行计算函数
     * @param id 
     * @param options 
     */
    runComputed(id:string,options?:RuntimeComputedOptions):void{
        throw new Error("runComputed not implemented.")
    }
    /**
     * 用在input的onChange事件中，用于同步输入框的值到状态
     * <input onChange={store.sync(['user','name'])} />
     * 
     * @param path 
     */
    sync(path:string[]):((event:any)=>void){
        throw new Error("sync not implemented.")
    } 


    markRaw<V=any>(value:V):V{
        throw new Error("makeRaw not implemented.")
    }
    /**
     * 创建一个watch
     * 
     * 如果没有指定依赖，则监听所有的状态变化
     * 
     * @param listener 
     * @param depends   依赖的字段，为空时监听所有的状态变化
     * @returns 返回取消监听的方法
     */
    createWatch(listener:(changedPaths:string[][])=>void,depends?:(string | string[])[]):()=>void{
        throw new Error("createWatch not implemented.")
    }

}

 