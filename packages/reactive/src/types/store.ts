import { ISharedCtx} from "helux"
import type { ActionDefines, Actions } from '../action';
import { ComputedState,  StateComputedType } from '../computed/types';
import { type ComputedObject, ComputedObjects, ComputedOptions } from '../computed';
import { WatchObjects } from "../watch";
import { computedObjectCreator } from "../computed/create";
import { Dict } from "./utils";
import { useStateWrapper } from "../utils";




export interface StoreDefine<State extends Dict = Dict>{
    state:State
    actions?:ActionDefines<State>
}

/**
 * 用来声明computed和watch函数的返回值类型
 */
export interface StateValueDescriptorParams<Fn extends Function,Options extends Dict = Dict> {
    fn: Fn
    options:Options
} 

/**
 * 声明状态中的计算函数
 */
export interface StateValueDescriptor<Fn extends Function,Options extends Dict = Dict> {
 (...args:any):StateValueDescriptorParams<Fn,Options>
 __COMPUTED__: 'sync' | 'async' | 'watch' 
}

export enum ComputedScopeRef{
    Root    = 'root',
    Current = 'current',
    Parent  = 'parent',  
    Depends = 'depends',                // 指向依赖数组
    Self    = 'self'                    // 指向自身，默认值
}

export type NonDependsScopeRef = Exclude<ComputedScopeRef, ComputedScopeRef.Depends>;

// 指定Store中计算函数的上下文,如果是字符串代表是当前对象的指定键，如果是string[]，则代表是当前Store对象的完整路径
// 当ComputedContext是一个字符串并且以@开头时，有个特殊含义，即是一个路径指向：
// 如：{fields:{ user:"address",address:"user" }}，如果scope=@user，代表的当前scope对象指向的user属性的值所指向的对象，在这里实质传入的是address
export type ComputedScope  =  ComputedScopeRef | string | string[] | ((state:any)=>string | string[] | ComputedScopeRef)
export type ComputedContext  = NonDependsScopeRef | string | string[] | ((state:any)=>string | string[] | NonDependsScopeRef)

export type StateGetter<State,Value=any> = (state:State)=>Value
export type StateSetter<State,Value=any> = (state:State,value:Value)=>void



export interface StoreOptions<T extends StoreDefine= StoreDefine>{
    id?:string
    // 是否开启调试模式，开启后会打印出一些的信息
    debug?:boolean
    // 计算函数的默认上下文，即传入的给计算函数的draft对象是根state还是所在的对象或父对象
    // 如果未指定时，同步计算的上下文指向current，异步指定的上下文指向root
    computedThis?:(computedType:StateComputedType)=>ComputedContext
    computedScope?:(computedType:StateComputedType)=> ComputedScope 
    // 是否是单例模式，如果是单例模式，那么所有的计算属性都是共享的，否则每个实例都有自己的计算属性
    // =false时会对传入的data进行深度克隆，这样就可以创建多个互相不干扰的实例
    singleton?:boolean    
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
    onCreateComputed?:(this:IStore<T>,keyPath:string[],getter:Function,options:ComputedOptions)=> void | (()=>any)
    
    /**
     * 在传递给计算函数的context和scope时调用
     * 可以返回一个新的context和scope来代替默认的
     */
    onComputedContext(draft:any,options:{computedType:StateComputedType, contextType:'context' | 'scope',valuePath:string[]}):any
    // 输出日志信息
    log?:(message:any,level?:'log' | 'error' | 'warn')=>void
    /**
     * 当计算对象创建时调用
     */
    onCreateComputedObject?(keyPath:string[],computedObject:ComputedObject):void
}

 

export type IStore<T extends StoreDefine= StoreDefine> = {
    state          : ComputedState<T['state']>
    computedObjects: ComputedObjects<T>
    watchObjects   : WatchObjects<T>
    useState       : ReturnType<typeof useStateWrapper> 
    actions        : Actions<T['state'],T['actions']> 
    createComputed : ReturnType<typeof computedObjectCreator>
    options        : StoreOptions<T>
    _replacedKeys   : Dict
    stateCtx       : ISharedCtx<ComputedState<T["state"]>>

} 
