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

import { model } from "helux" 
import { isAsyncFunction } from "flex-tools/typecheck/isAsyncFunction"

// Action必须返回一个同步更新函数用来更新state
export type ActionUpdater<State=any> = (state:State)=>any
// Action声明,用来创建Action
export type ActionDefine<State=any> = (...args:any)=>(ActionUpdater<State> | Promise<ActionUpdater<State>>)



export interface CreateStoreOptions<Actions=Record<string,any>>{    
    state:Record<string,any>
    actions?:Record<string,ActionDefine>
    computed?:Record<string,any>   
}

export interface HeluxStore{

}

export function createStore<T extends CreateStoreOptions>(options:T){

    return  model((api) => { // api对象 有详细的类型提示        
        const stateCtx = api.shareState<typeof options['state'] >(options.state);
        const { state, setState,syncer,useState } = stateCtx
        // 1. 定义Action
        let actions:typeof options['actions'] = {}        
        if(options.actions){
            actions = Object.entries(options.actions).reduce((results,[key,action])=>{           
                if(isAsyncFunction(action)){
                    results[key] = api.action(state)<any>(async ({setState,args,draft})=>{
                        const updater = action(args)
                        if(updater instanceof Function){
                            updater(draft)
                        }else{
                            console.warn('action must return a function similar to (state)=>state')
                        }
                    })
                }else{
                    results[key] = api.actionAsync(state)<any>(async ({setState,args})=>{
                        const updater = await action(args)
                        if(updater instanceof Function){
                            setState(updater)
                        }else{
                            console.warn('action must return a function similar to (state)=>state')
                        }
                    })
                }                
                return results
            },{})
        } 
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



 