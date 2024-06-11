import { test,expect, describe, beforeAll } from "vitest"
import { createStore,ComputedScopeRef,computed, IStore } from ".."
import { ComputedObject } from "../computed/computedObject"

 

describe("异步计算",()=>{

    test("默认异步计算",async ()=>{
        let count:number =0 
        return new Promise<void>((resolve)=>{
            const store = createStore({
                price:2,
                count:3,
                total:computed(async (scope)=>{
                    count++
                    return scope.price * scope.count
                },['price','count'])
            })
            store.setState((draft)=>draft.count = 4)
            store.on("computed:done",({path})=>{
                expect(store.state.total).toBe(8)
                expect(count).toBe(2)         
                resolve()        
            })       
        })
    })  
    test("创建计算对象",()=>{
        return new Promise<void>((resolve)=>{
            let count:number =0 
            const store = createStore({
                price:2,
                count:3,
                total:computed(async (scope)=>{
                    count++
                    return scope.price * scope.count
                },['price','count'],{id:'x'})
            })
            store.on("computed:new",({id})=>{
                expect(store.computedObjects.has('x')).toBe(true)                   
                expect(id).toBe("x")
                const obj = store.computedObjects.get("x")!
                expect(obj).toBeInstanceOf(ComputedObject)
                expect(obj.id).toBe("x")
                expect(obj.enable).toBe(true)
                expect(obj.depends).toEqual([["price"],["count"]])
                expect(obj.path).toEqual(['total'])
                resolve()
            })
            store.state.total
        })        
    }) 

    

})