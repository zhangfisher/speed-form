/**

    createStore({
        state:{
            user:{
                id:'2123',
                firstName:'tom',
                lastName:'zhang',
                fullname:(state)=>state.user.firstName+state.user.lastName,
                age:18,
                addresss:[
                    {city:'北京',street:'朝阳区'},
                    {city:'上海',street:'浦东区'},
                    {city:'广州',street:'天河区'},
                ]
            },
            books:[
                {name:'张三',price:18,author:'tom'},
                {name:'李四',price:19,author:'jack'},
                {name:'王五',price:20,author:'bob'}
            ],
            orders:[],
            sales:{
                total:0,
            }
        },
        computed:{
            // 同步计算属性
            "user.fullname":()=>{
                doSomething()
                return (state)=>state.user.firstName+state.user.lastName
            },
            // 异步计算属性,需要指定依赖
            "sales.total":[
                async ()=>{
                    await getOrders()
                    return (state)=>state.books.reduce((total,book)=>total+book.price,0)
                },["books"]
            ]
        },
        actions:{
            add(arg1,arg2){
                return state=>state.count++
            },
            async addAsync(arg1,arg2){
                await doSomething()
                return state=>state.count++
            }
        }


    } as const)
 */

import { ISharedCtx, model  } from "helux"
import { createActions } from './action';
import { Actions, ComputedState, RequiredComputedState } from "./types";
import { type ComputedOptions, createComputed } from "./computed";
import { deepClone } from "flex-tools/object/deepClone";


export interface StoreDefine<State>{
    state:State
    actions?:Actions<State>
}

export enum ComputedScopeRef{
    Root = 0,
    Current = 1,
    Parent = 2,
    Depends = 3          // 指向依赖数组
}
export type NonDependsScopeRef = Exclude<ComputedScopeRef, ComputedScopeRef.Depends>;
// 指定Store中计算函数的上下文,如果是字符串代表是当前对象的指定键，如果是string[]，则代表是当前Store对象的完整路径
export type StoreComputedScope  =  ComputedScopeRef | string | string[] | ((state:any)=>string | string[] | ComputedScopeRef)
export type StoreComputedContext  = NonDependsScopeRef | string | string[] | ((state:any)=>string | string[] | NonDependsScopeRef)

export type StateGetter<State,Value=any> = (state:State)=>Value
export type StateSetter<State,Value=any> = (state:State,value:Value)=>void


/**
 *  StateGetter函数返回
 *
 *  [ fullName,setFullName ] = useState<string,[string,string]>((state)=>state.user.firstName+state.user.lastName,(state,fullName:[string,string])=>{
 *        state.user.firstName = fullName[0]
 *        state.user.lastName = fullName[1]
 *  })
 *
 *
 * @param useState
 */
function wrapperUseState<Store extends StoreDefine<any>>(stateCtx:ISharedCtx<Store["state"]>){
    return function<Value=any,SetValue=Value>(getter?:StateGetter<RequiredComputedState<Store>,Value>,setter?:StateSetter<RequiredComputedState<Store>,SetValue>){
        const useState = stateCtx.useState
        if(getter==undefined){
            return useState()
        }
        const [ state,setState ] = useState()
        const value = getter(state)
        let setValue = undefined
        if( typeof(setter)=='function' ){
            setValue=(value:SetValue)=>{
                // @ts-ignore
                setState((draft)=>{
                    setter.call(draft,draft,value)
                })                
            }
        }
        return [ value,setValue ]
    }
}



export interface StoreOptions{
    // 计算函数的默认上下文，即传入的给计算函数的draft对象是根state还是所在的对象或父对象
    // 如果未指定时，同步计算的上下文指向current，异步指定的上下文指向root
    computedThis?: StoreComputedContext
    computedScope?: StoreComputedScope
    // 当创建计算属性前调用
    onCreateComputed?:(keyPath:string[],getter:Function,options:ComputedOptions)=>Function | void
    // 是否是单例模式，如果是单例模式，那么所有的计算属性都是共享的，否则每个实例都有自己的计算属性
    // =false时会对传入的data进行深度克隆，这样就可以创建多个互相不干扰的实例
    singleton?:boolean

}
export function createStore<T extends StoreDefine<any>>(data:T,options?:StoreOptions){
    const opts = Object.assign({
        computedThis:ComputedScopeRef.Root,
        computedScope:ComputedScopeRef.Current,
        singleton:true
    },options) as Required<StoreOptions>
    const storeData = opts.singleton ? data : deepClone(data)
    return  model((api) => { // api对象 有详细的类型提示
        const stateCtx = api.sharex<ComputedState<T['state']>>(storeData.state as any,{
            stopArrDep: false
        })
        // 1. 创建Actions
        const actions = createActions<T>(storeData.actions,stateCtx,api)

        // 2. 处理Computed属性
        createComputed<T['state']>(stateCtx,api,opts)!

        // 3. 处理useState
        const useState = wrapperUseState<T['state']>(stateCtx)

        return {
          actions,
          ...stateCtx,
          state:stateCtx.reactive,
          useState
        }
      });

}
