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
    
    test("手动执行同步计算属性的计算函数",()=>{
        return new Promise<void>((resolve)=>{
            const results:any[]=[]
            const store = createStore({
                price:2,
                count:3,
                total:computed((scope)=>{
                    results.push(scope)
                    if(results.length===2){
                        resolve()
                    }
                    return scope.price * scope.count
                },{id:'x',immediate:false}),         
            },{immediate:true})                                    
            store.on("computed:created",async ()=>{
                await store.computedObjects.get("x")!.run()
                expect(store.state.total).toBe(6)
                resolve()
            })
        })
    })
    test("手动传参覆盖默认的计算属性参数，然后运行",()=>{
        return new Promise<void>((resolve)=>{
            const results:any[]=[]
            // 同步计算在创建时会先执行一次用于自动收集依赖，此时的scope是默认指向的
            // 然后第二次是手动执行,此时的scope是通过run传入的。
            const store = createStore({
                price:2,
                count:3,
                total:computed((scope)=>{
                    results.push(scope)
                    if(results.length===2){
                        expect(results[1]).toBe(2)                        
                        resolve()
                    }else{
                        scope.price * scope.count
                    }
                },{id:'x',immediate:false}),         
            },{immediate:true})                                    
            store.on("computed:created",()=>{
                setTimeout(()=>{
                    store.computedObjects.get("x")!.run({scope:"price"})
                })
            })
        })
    })

})
