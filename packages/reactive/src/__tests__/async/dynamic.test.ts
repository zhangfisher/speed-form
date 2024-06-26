/**
 * 
 *  动态参数的创建计算属性
 * 
 * 
 */



import { test,expect, describe, beforeAll } from "vitest"
import { createStore,ComputedScopeRef,computed, IStore } from "../.."



describe("动态创建同步择计算属性",()=>{

    test("创建同步计算属性提供默认值",()=>{
        return new Promise<void>(resolve=>{
            const store = createStore({
                price:2,
                count:3
            })
            const obj = store.createComputed((scope:any)=>{
                return scope.price * scope.count
            })
            expect(obj.value).toBe(6)            
            resolve()
        }) 
    })
    test("动态创建的同步计算对象-默认没有保存计算对象引用",()=>{
        return new Promise<void>(resolve=>{
            const store = createStore({
                price:2,
                count:3
            })
            const obj = store.createComputed<number>((scope:any)=>{
                return scope.price * scope.count
            })
            expect(obj.value).toBe(6)             
            expect(store.computedObjects.size).toBe(0)  
            expect(store.computedObjects.has(obj.id)).toBe(false)
            resolve()
        }) 
    })
    test("动态创建的同步计算对象，指定保存计算对象引用",()=>{
        return new Promise<void>(resolve=>{
            const store = createStore({
                price:2,
                count:3
            })
            const obj = store.createComputed<number>((scope:any)=>{
                return scope.price * scope.count
            },{id:"x",save:true})
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
            })
            expect(obj.value).toBe(6)    
            resolve()
        }) 
    })
    test("动态计算属性依赖变化时自动更新",()=>{
        return new Promise<void>(resolve=>{
            const store = createStore({
                price:2,
                count:3
            })
            const obj = store.createComputed((scope:any)=>{
                return scope.price * scope.count
            })
            expect(obj.value).toBe(6)            
            resolve()
        }) 
    })

})



describe("动态创建异步计算属性",()=>{

    test("创建异步计算属性提供默认值",()=>{
        return new Promise<void>(resolve=>{
            const store = createStore({
                price:2,
                count:3
            })
            store.on("computed:created",()=>{            
                expect(obj.value.result).toBe(10)            
                resolve()
            })
            const obj = store.createComputed(async (scope:any)=>{
                return scope.price * scope.count
            },["price","count"],{initial:10})
        }) 
    })
    test("动态创建的异步计算对象-默认没有保存计算对象引用",()=>{
        return new Promise<void>(resolve=>{
            const store = createStore({
                price:2,
                count:3
            })
            const obj = store.createComputed<number>(async (scope:any)=>{
                return scope.price * scope.count
            },["price","count"],{initial:10})
            store.on("computed:created",()=>{            
                expect(obj.value.result).toBe(10)                          
                expect(store.computedObjects.size).toBe(0)  
                expect(store.computedObjects.has(obj.id)).toBe(false)
                resolve()      
            })       
        }) 
    })
    test("动态创建的异步计算对象，指定保存计算对象引用",()=>{
        return new Promise<void>(resolve=>{
            const store = createStore({
                price:2,
                count:3
            })
            store.on("computed:created",()=>{         
                expect(obj.value.result).toBe(6)             
                expect(store.computedObjects.size).toBe(1)  
                expect(store.computedObjects.has(obj.id)).toBe(true)
                resolve()})
            const obj = store.createComputed<number>(async (scope:any)=>{
                return scope.price * scope.count
            },["price","count"],{id:"x",save:true,initial:6})            
        }) 
    })
    test("动态异步计算属性初始化时自动执行一次",()=>{
        return new Promise<void>(resolve=>{
            const store = createStore({
                price:2,
                count:3
            })
            store.on("computed:done",()=>{       
                expect(obj.value.result).toBe(6)  
                resolve()
            })
            const obj = store.createComputed(async (scope:any)=>{
                return scope.price * scope.count
            },["price","count"]) 
            // store.setState((draft)=>draft.count = 4)
        }) 
    })

    test("动态异步计算属性依赖变化时执行次",()=>{
        let results:number[]= []
        return new Promise<void>(resolve=>{
            const store = createStore({
                price:2,
                count:3
            })
            store.on("computed:done",()=>{     
                results.push(obj.value.result)  
                if(results.length==2){                    
                    resolve()
                }
            })
            const obj = store.createComputed(async (scope:any)=>{
                return scope.price * scope.count
            },["price","count"]) 
            store.on("computed:created",()=>{
                store.setState((draft)=>draft.count = 4)
            })
            
        }) 
    })
})