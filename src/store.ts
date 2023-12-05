/**
    
    createStore({
        state:{
            user:{
                id:'2123',
                firstName:'tom',
                lastName:'zhang',
                fullname:"",
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

import { model,HeluxApi } from "helux" 
import { createActions } from './action';

// Action必须返回一个同步更新函数用来更新state
export type ActionUpdater<State=any> = (state:State)=>any
// Action声明,用来创建Action
export type ActionDefine<State=any> = (...args:any)=>(ActionUpdater<State> | Promise<ActionUpdater<State>>)



export interface CreateStoreOptions{    
    state:Record<string,any>
    actions?:Record<string,ActionDefine<CreateStoreOptions['state']>>
    computed?:Record<string,any>   
}

 
type ChangeReturns<T, R> = T extends (...args:infer P)=>any ? (...args:P) => R : never

export type ChangeActionReturns<T extends Record<string, (...args:any)=>any>,State> = {
    [key in keyof T] :  ChangeReturns<T[key],ActionUpdater<State>>
}
 
export interface HeluxStore{

}

export function createStore<T extends CreateStoreOptions>(options:T){
    
    return  model((api:HeluxApi) => {     
        const stateCtx = api.shareState<typeof options['state'] >(options.state);
        const { state, setState,syncer,useState } = stateCtx
        type ActionsType=Exclude<typeof options['actions'],undefined>

        // 1. 创建所有Actions        
        const actions= createActions(options.actions,state,api) as ChangeActionReturns<ActionsType,typeof options['state']>
         
        // 2. 声明Computed属性
        if(options.computed){

        }
  
        return {
          state,
          actions,
          useState,
          setState,
          ...api
        }
      });
      
}



 