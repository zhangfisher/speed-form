/**
 * 
 * 使用动态参数的创建的异步计算属性
 * 
 * 
 */



import { test,expect, describe, beforeAll } from "vitest"
import { createStore,ComputedScopeRef,computed, IStore } from "../"


const Account = { 
    state:{
        user:{
            firstName:"zhang",
            lastName:"fisher" 
        }
    }
}
  


describe("动态创建计算属性",()=>{
    let store:IStore<typeof Account>
    beforeAll(()=>{
        store = createStore<typeof Account>(Account)
    })

    test("指定依赖作为scope",()=>{
        return new Promise<void>(resolve=>{
            // store.computedObjects.new(async (scope,params)=>{
            //     console.log(scope,params)
            // },{
            //     id:"fullName",
            //     depends:[
            //         "user.firstName",
            //         "user.lastName"
            //     ],
            //     async:true
            // })

            const fullNameComputed = store.createComputed(async (scope,params)=>{
                console.log(scope,params)
            },{
                id:"fullName",
                depends:[
                    "user.firstName",
                    "user.lastName"
                ],
                async:true
            })
            
            store.setState(state=>{
                state.user.firstName = "zhang100"                
            })

        })

        
      

    })

})