import { test,expect, describe, beforeAll } from "vitest"
import { createStore,ComputedScopeRef,computed, IStore, Dict } from ".."
import { delay } from  "flex-tools/async/delay"

describe("异步计算",()=>{

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

    test("异步计算初始化时不执行,提供初始始值",async ()=>{
        return new Promise<void>(async (resolve)=>{
            const store = createStore({
                price:2,
                count:3,
                total:computed(async (scope:any)=>{
                    return scope.price * scope.count
                },['price','count'],{
                    immediate:false, // 不马上执行，需要等等依赖变化多端时再执行
                    initial:100
                })
            })
            expect(store.state.total.loading).toBe(false)            
            expect(store.state.total.result).toBe(100)            
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
                },['price','count'])
            })   
            store.state.total  // 由于读取时才会创建计算属性，所以需要读取一次，如果缺少这一步，计算属性不会创建
            store.setState(draft=>draft.count++)
            store.setState(draft=>draft.price++) 
            // 当计算函数执行完成后的回调
            store.on("computed",()=>{
                results.push(store.state.total.result)
                // 为什么会有三个结果？
                // 第一次创建计算属性时，会执行一次，当更新count和price时，由于依赖会再次执行2次。   
                if(results.length===3){
                    expect(results).toEqual([12,12,12])
                    resolve()
                }
            })
        })            
    })  
    test("通过多种方式指定异步依赖参数",async ()=>{
        return new Promise<void>((resolve)=>{
            const results:number[] = []
            const store = createStore({
                root:{
                    parent:{
                        price:2,
                        count:3,
                        total:computed<number>(async (scope:any)=>{
                            return scope.price * scope.count 
                        },['root.parent.price']),    // 使用字符串路径数组指定依赖
                        total2:computed<number>(async (scope:any)=>{
                            return scope.price * scope.count 
                        },[['root','parent','price']]),   // 使用字符串数组指定依赖
                        total3:computed<number>(async (scope:any)=>{
                            return scope.price * scope.count 
                        },["./price"])   // total3所在对象的相对路径
                    }
                },                
            })   


        })
    })


})
 
