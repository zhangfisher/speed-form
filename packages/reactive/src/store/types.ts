import { ISharedCtx} from "helux"
import { ComputedState,  StateComputedType } from '../computed/types';
import { type ComputedObjects, ComputedOptions } from '../computed';
import type { WatchObjects, createUseWatch, createWatch } from "../watch";
import { computedObjectCreator } from "../computed/create";
import { Dict } from "../types"; 
import type { createUseState } from "./useState";
import type  { createSetState } from "./setState";
import { Emitter } from "mitt";
import { IReactive } from "../reactive";
import { Reactiveable } from "../reactives";
import { ComputedObject } from "../computed/computedObject";


export type StoreDefine<State extends Dict = Dict> = State



export enum ComputedScopeRef{
    Root    = 'root',
    Current = 'current',
    Parent  = 'parent',  
    Depends = 'depends',                // 指向依赖数组
    Self    = 'self'                    // 指向自身，默认值
} 
 

 

// 指定Store中计算函数的上下文,如果是字符串代表是当前对象的指定键，如果是string[]，则代表是当前Store对象的完整路径
// 当ComputedContext是一个字符串并且以@开头时，有个特殊含义，即是一个路径指向：
// 如：{fields:{ user:"address",address:"user" }}，如果scope=@user，代表的当前scope对象指向的user属性的值所指向的对象，在这里实质传入的是address
export type ComputedScope  =  ComputedScopeRef | string | string[] | ((state:any)=>string | string[] | ComputedScopeRef)

export type StateGetter<State,Value=any> = (state:State)=>Value
export type StateSetter<State,Value=any> = (state:State,value:Value)=>void



export interface StoreOptions<T extends StoreDefine= StoreDefine>{
    id:string
    // 是否开启调试模式，开启后会打印出一些的信息
    debug:boolean
    // 计算函数的默认上下文，即传入的给计算函数的draft对象是根state还是所在的对象或父对象
    // 如果未指定时，同步计算的上下文指向current，异步指定的上下文指向root
    // computedThis:(computedType:StateComputedType)=>ComputedContext
    scope:(computedType:StateComputedType)=> ComputedScope 
    // 是否是单例模式，如果是单例模式，那么所有的计算属性都是共享的，否则每个实例都有自己的计算属性
    // =false时会对传入的data进行深度克隆，这样就可以创建多个互相不干扰的实例
    singleton:boolean    
    /**
     * 当创建计算属性前调用
     * 
     *  - 可以返回一个新的getter来代替默认的
     *  - 也可以直接修改ComputedOptions
     * 
     * @param keyPath 
     * @param getter 
     * @param options 
     * @returns 
     */
    onCreateComputed:(this:IStore<T>,keyPath:string[],getter:Function,options:ComputedOptions)=> void | (()=>any)
    
    /**
     * 在传递给计算函数的scope时调用
     * 可以返回一个新的scope来代替默认的
     */
    onComputedContext(draft:any,options:{computedType:StateComputedType, valuePath:string[]}):any
    // 输出日志信息
    log:(message:any,level?:'log' | 'error' | 'warn')=>void
    /**
     * 当计算对象创建时调用
     */
    onCreateComputedObject(keyPath:string[],computedObject:ComputedObject<T>):void
    /**
     * 提供一个响应式核心
     */
    reactiveable?:Reactiveable
}


export type StoreEvents = {
    created: undefined;             // 响应对象创建后    
    computed:{path:string[],id:string}             // 当计算函数执行成功后
    'computed:done':{path:string[],id:string}             // 当计算函数执行成功后
    'computed:error':{path:string[],id:string}             // 当计算函数执行出错时
};


// 用于在在创建动态计算时，提供一个简单的state对象供将计算结果回写到state上 
export type ITargetState<T extends Dict = Dict> = {
    setState:(draft:ComputedState<T>)=>void
}

export type IStore<T extends Dict = Dict> = {
    state          : ComputedState<T>
    useState       : ReturnType<typeof createUseState<T>>
    setState       : ReturnType<typeof createSetState<T>>  // (updater:(draft:T)=>void)=>void
    // 启用与停止计算
    enableComputed : (value:boolean)=>void
    options        : StoreOptions<T>
    reactiveable   : Reactiveable<T>
    reactive       : IReactive<T>
    // 计算
    createComputed : ReturnType<typeof computedObjectCreator>    
    computedObjects: ComputedObjects<T>
    // 侦测
    watch          : ReturnType<typeof createWatch<T>>
    useWatch       : ReturnType<typeof createUseWatch<T>>
    watchObjects   : WatchObjects<T>

    // 用来同步表单时使用
    sync           : ISharedCtx<ComputedState<T>>['sync'] 
    // 简单事件触发与侦听
    on             : Emitter<StoreEvents>['on']
    off            : Emitter<StoreEvents>['off']
    emit           : Emitter<StoreEvents>['emit']
    // 
    _replacedKeys   : Dict

} 



export type StateUpdater<State=any> = (state:State)=>any
