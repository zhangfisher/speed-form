/**
 * 
 *  动态参数的创建计算属性
 * 
 * 
 */



import { test,expect, describe, beforeAll } from "vitest"
import { createStore,ComputedScopeRef,computed, IStore } from ".."



describe("动态创建同步择计算属性",()=>{


    test("创建同步计算属性提供默认值",()=>{
        return new Promise<void>(resolve=>{
            const store = createStore({
                price:2,
                count:3
            })
            const obj = store.createComputed((scope:any)=>{
                return scope.price * scope.count
            },['price','count'])
            expect(obj.value).toBe(6)            
            resolve()
        }) 
    })
    test("动态创建的同步计算对象",()=>{
        return new Promise<void>(resolve=>{
            const store = createStore({
                price:2,
                count:3
            })
            const obj = store.createComputed<number>((scope:any)=>{
                return scope.price * scope.count
            },['price','count'])
            expect(obj.value).toBe(6)             
            expect(store.computedObjects.size).toBe(1)  
            expect(store.computedObjects.has(obj.id)).toBe(true)
            resolve()
        }) 
    })

    test("创建同步计算对象然后删除",()=>{
        return new Promise<void>(resolve=>{
            const store = createStore({
                price:2,
                count:3
            })
            const obj = store.createComputed((scope:any)=>{
                return scope.price * scope.count
            },['price','count'])
            expect(obj.value).toBe(6)                         
            
            resolve()
        }) 
    })


})