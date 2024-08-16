import { ISharedCtx} from "helux"
import { ComputedState,  StateComputedType } from '../computed/types';
import { type ComputedObjects, ComputedOptions } from '../computed';
import type { WatchObjects, createUseWatch, createWatch } from "../watch";
import { computedObjectCreator } from "../computed/create";
import type { createUseState } from "./useState";
import type  { createSetState } from "./setState";
import { Emitter } from "mitt";
import { IReactive } from "../reactive";
import { Reactiveable } from "../reactives";
import { StoreEvents } from "../events/types";
import { Dict } from "../types";




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



export interface StoreOptions<State extends Dict= Dict>{
    id:string
    /**
     * 是否开启调试模式，开启后会打印出一些的信息
     */
    debug:boolean
    /**
     * 计算函数的默认上下文，即传入的给计算函数的draft对象是根state还是所在的对象或父对象
     * 如果未指定时，同步计算的上下文指向current，异步指定的上下文指向root
     * computedThis:(computedType:StateComputedType)=>ComputedContext
     * @param computedType 
     * @returns 
     */
    scope:(computedType:StateComputedType)=> ComputedScope 
     /**
     * 提供一个响应式核心
     */
     reactiveable?:Reactiveable<State>
     /**
      * 默认计算函数仅在第一次读取时执行
      * 如果immediate=true时，则在创建对象时马上创建计算对象
      */
     immediate:boolean 
     /**
      * 默认启用计算属性
      * enableComputed=false时，会创建计算属性，但不会执行计算函数
      * 可以通过enableComputed方法启用
      */
     enableComputed:boolean
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
    onCreateComputed:(this:IStore<State>,keyPath:string[],getter:Function,options:ComputedOptions)=> void | (()=>any)
    
    /**
     * 在传递给计算函数的scope时调用
     * 默认draft指向的是当前根对象，可以在此返回一个新的draft指向
     * 
     * 比如,return  draft.fields，代表计算函数的draft指向state.fields
     * 
     */
    onComputedDraft(draft:any,options:{computedType:StateComputedType, valuePath:string[]}):any
    // 输出日志信息
    log:(message:any,level?:'log' | 'error' | 'warn')=>void 
   
}





// 用于在在创建动态计算时，提供一个简单的state对象供将计算结果回写到state上 
export type ITargetState<T extends Dict = Dict> = {
    setState:(draft:ComputedState<T>)=>void
}

export type IStore<State extends Dict = Dict> = {
    state          : ComputedState<State>
    useState       : ReturnType<typeof createUseState<State>>
    setState       : ReturnType<typeof createSetState<State>>  // (updater:(draft:T)=>void)=>void
    // 启用与停止计算
    enableComputed : (value:boolean)=>void
    options        : StoreOptions<State>
    reactiveable   : Reactiveable<State>
    reactive       : IReactive<State>
    // 计算
    createComputed : ReturnType<typeof computedObjectCreator<State>>    
    computedObjects: ComputedObjects<State>
    // 侦测
    watch          : ReturnType<typeof createWatch<State>>
    useWatch       : ReturnType<typeof createUseWatch<State>>
    watchObjects   : WatchObjects<State>

    // 用来同步表单时使用
    sync           : (path:string[])=>((event:any)=>void) 
    // 简单事件触发与侦听
    on             : Emitter<StoreEvents>['on']
    off            : Emitter<StoreEvents>['off']
    once           : <T extends keyof StoreEvents>(type: T,handler: (payload:StoreEvents[T]) => void)=>void
    emit           : Emitter<StoreEvents>['emit']
    _emitter       : Emitter<StoreEvents>
    // 保存已经替换过的key
    _replacedKeys   : Dict 
} 



export type StateUpdater<State=any> = (state:State)=>any
