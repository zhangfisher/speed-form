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

import { model,HeluxApi } from "helux" 
import { createActions } from './action';
import { Actions, ComputedState } from "./types";
import { createComputed } from "./computed";
 

export interface StoreOptions<ACTIONS extends Actions=Actions>{    
    state:Record<string,any>
    computed?:Record<string,any>,
    actions?:ACTIONS    
}

export interface HeluxStore{

}

export function createStore<T extends StoreOptions>(options:T){

    return  model((api) => { // api对象 有详细的类型提示 
        const stateCtx = api.shareState<ComputedState<typeof options['state']>>(options.state as any,{
            stopArrDep: true,
            enableDraftDep:true             
        })
        const { state, setState,syncer,useState } = stateCtx
        // 2. 处理Computed属性 
        const computed:typeof options['computed'] = createComputed<typeof options['state']>(options.computed,state,stateCtx,api)!
        
        // 1. 创建Action        
        const actions:typeof options['actions'] = createActions(options.actions,state,api)!


        return {
          state,
          actions,
          computed, 
          useState,
          setState,
          ...api
        }
      });
      
}



 