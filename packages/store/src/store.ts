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

import { model  } from "helux" 
import { createActions } from './action';
import { Actions, ComputedState } from "./types";
import { type ComputedOptions, createComputed } from "./computed"; 
 

export interface StoreDefine<State>{    
    state:State 
    actions?:Actions<State>
}
export enum ComputedContextRef{
    Root = 0,
    Current = 1,
    Parent = 2
}

// 指定Store中计算函数的上下文,如果是字符串代表是当前对象的指定键，如果是string[]，则代表是当前Store对象的完整路径
export type StoreComputedContext  = ComputedContextRef | string | string[] | ((state:any)=>string | string[] | ComputedContextRef)

export interface StoreOptions{    
    // 计算函数的默认上下文，即传入的给计算函数的draft对象是根state还是所在的对象或父对象
    // 如果未指定时，同步计算的上下文指向current，异步指定的上下文指向root
    computedContext?: StoreComputedContext
    // 当创建计算属性前调用
    onCreateComputed?:(keyPath:string[],getter:Function,options:ComputedOptions)=>Function | void
    
}
export function createStore<T extends StoreDefine<any>>(data:T,options?:StoreOptions){
    const opts = Object.assign({
        computedContext:ComputedContextRef.Current
    },options)
    return  model((api) => { // api对象 有详细的类型提示 
        const stateCtx = api.sharex<ComputedState<T['state']>>(data.state as any,{
            stopArrDep: false           
        })        
        // 1. 创建Actions        
        const actions = createActions<T>(data.actions,stateCtx,api) 

        // 2. 处理Computed属性 
        createComputed<T['state']>(stateCtx,api,opts)!
        return { 
          actions,               
          ...stateCtx,
          state:stateCtx.reactive
        }  
      });
      
}
 