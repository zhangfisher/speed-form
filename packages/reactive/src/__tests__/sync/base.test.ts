import { test,expect, describe, beforeAll } from "vitest"
import { createStore,ComputedScopeRef,computed, IStore } from "../.."

 

describe("基本同步计算属性",()=>{

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
    
    test("不使用computed函数的同步计算",async ()=>{
        const store = createStore({
            price:2,
            count:3,
            total:(scope:any)=>{
                return scope.price * scope.count
            }
        })
        store.setState((draft)=>draft.count = 4)
        expect(store.state.total).toBe(8)
    })  
    test("默认this指向state",()=>{
        return new Promise<void>((resolve)=>{
            const store = createStore({
                order:{                
                    price:2,
                    count:3,
                    total:computed(function(this:any){ 
                        expect(this.order.price).toBe(2)
                        expect(this.order.count).toBe(3)
                        resolve()
                    })
                }
            })
            store.state.order.total // 读取操作时创建计算属性
        })        
    }) 
    test("通过计算对象实例读取同步计算值",async ()=>{
        const store = createStore({
            price:2,
            count:3,
            total:computed<number>((scope)=>{
                return scope.price * scope.count
            },{id:"a"})
        })
        store.setState((draft)=>draft.count = 4)
        expect(store.state.total).toBe(8)
        expect(store.computedObjects.get("a")?.value).toBe(8)
    }) 
    

})
