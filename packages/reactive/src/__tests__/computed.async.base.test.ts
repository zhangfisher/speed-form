import { test,expect, describe, beforeAll } from "vitest"
import { createStore,ComputedScopeRef,computed, IStore, Dict } from ".."
import { delay } from  "flex-tools/async/delay"

describe("简单异步计算",()=>{

    test("异步计算原地替换创建AsyncComputed数据结构",async ()=>{
        return new Promise<void>((resolve)=>{
            const store = createStore({
                price:2,
                count:3,
                total:async (scope:any)=>{
                    await delay(10)
                    return scope.price * scope.count
                }
            })
            store.state.total
            expect(store.state.total.loading).toBe(true) // 由于计算属性会马上执行一次，所以loading=true
            expect(store.state.total.cancel).toBeDefined()
            expect(store.state.total.error).toBeDefined()
            expect(store.state.total.loading).toBeDefined()
            expect(store.state.total.progress).toBeDefined()
            expect(store.state.total.result).toBeUndefined()
            expect(store.state.total.retry).toBeDefined()
            expect(store.state.total.run).toBeDefined()
            expect(store.state.total.timeout).toBeDefined()
            resolve()
        })                
    })  

    test("异步计算初始化时不执行",async ()=>{
        return new Promise<void>(async (resolve)=>{
            const store = createStore({
                price:2,
                count:3,
                total:computed(async (scope:any)=>{
                    return scope.price * scope.count
                },['price','count'],{
                    immediate:false // 不马上执行，需要等等依赖变化多端时再执行
                })
            })
            expect(store.state.total.loading).toBe(false)            
            await delay(10)
            resolve()
        })                
    })  
    test("当异步计算属性依赖变化时自动重新计算",async ()=>{
        return new Promise<void>((resolve)=>{
            const results:number[] = []
            const store = createStore({
                price:2,
                count:3,
                total:computed<number>(async (scope:any)=>{
                    return scope.price * scope.count 
                },['price','count'],{
                    immediate:false // 不马上执行，需要等等依赖变化多端时再执行
                })
            })      
            store.setState(draft=>draft.count++)
            store.setState(draft=>draft.price++) 
            // 当计算函数执行完成后的回调
            store.on("computed",({path})=>{
                results.push(store.state.total.result)
                
            resolve()
            })
        })            
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

    

})
 
