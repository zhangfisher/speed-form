import { test,expect, describe, beforeAll } from "vitest"
import { createStore,ComputedScopeRef,computed, IStore } from ".."


const Account = {     
        order:{
            price:2,
            count:3,
            total:computed((scope)=>{
                return scope.price * scope.count
            },{
                id:"total",
            })
        }
}
  

describe("基本同步计算",()=>{

    test("默认同步计算",async ()=>{
        const store = createStore({
            price:2,
            count:3,
            total:computed((scope)=>{
                return scope.price * scope.count
            })
        })
        store.setState((draft)=>draft.count = 4)
        expect(store.state.total).toBe(8)
    }) 
})

describe("Scope指向",()=>{

    test("默认Scope指向Current=order",()=>{
        return new Promise<void>((resolve)=>{
            const store = createStore({
                order:{                
                    price:2,
                    count:3,
                    total:computed((scope)=>{ 
                        expect(scope.price).toBe(2)
                        expect(scope.count).toBe(3)
                        resolve()
                    })
                }
            })
            store.state.order.total // 读取操作时创建计算属性
        })
        
    })
    test("Scope指向Root",()=>{
        return new Promise<void>((resolve)=>{
            const store = createStore({
                    order:{                
                        price:2,
                        count:3,
                        total:computed<number>((scope)=>{ 
                            expect(scope.order.price).toBe(2)
                            expect(scope.order.count).toBe(3)
                            resolve()
                            return scope.order.price * scope.order.count
                        }) 
                    }
                },{
                    computedScope:()=>ComputedScopeRef.Root
                })
            
            store.state.order.total // 读取操作时创建计算属性
        }) 
    })
})