import { test,expect, describe, beforeAll } from "vitest"
import { createStore,ComputedScopeRef,computed, IStore } from ".."
import { ComputedObject } from "../computed/computedObject"

 

describe("异步计算",()=>{

    test("默认异步计算",()=>{
        let count:number =0 
        let results:number[] = []
        return new Promise<void>((resolve)=>{
            const store = createStore({
                price:2,
                count:3,
                total:computed(async (scope)=>{
                    count++
                    return scope.price * scope.count
                },['price','count'])
            },{    
                onceComputed:true               // 遍历对象，从而导致计算属性被读取而立刻创建
            }) 
            store.on("computed:done",({path})=>{
                results.push(store.state.total.result)
                if(results.length===3){
                    expect(count).toBe(3)         
                    // 为什么是10,10,10，而不是6,8,10?
                    // 创建计算属性时，会立即执行一次计算函数，所以第一次是2*3=6，然后setState(count=4)时，会再次执行计算函数，所以是2*4=8
                    // 最后一次是2*5=10? 但是结果是10,10,10?
                    // 因为setState是同步操作，而计算函数是异步的，所以在执行setState后，计算函数并没有立即执行，而是在下一个事件循环中执行
                    expect(results).toEqual([10,10,10]) 
                    resolve()        
                }                
            })   
            store.setState((draft)=>draft.count = 4)
            store.setState((draft)=>draft.count = 5)
        })
    })  
    test("创建计算对象实例",()=>{
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

    test("全局控制启用与停止计算",()=>{
        let count = 0
        return new Promise<void>((resolve)=>{
            const store = createStore({
                price:2,
                count:3,
                total:computed(async (scope)=>{
                    count++       
                    return scope.price * scope.count
                },['price','count'],{id:'x'})
            },{
                onceComputed:true,
                enableComputed:false
            })
            store.setState((draft)=>draft.count = 4)
            store.setState((draft)=>draft.count = 5)                
            store.setState((draft)=>draft.count = 4)
            store.setState((draft)=>draft.count = 5)
            store.enableComputed(true)                        
            store.on("computed:done",({path})=>{ 
                expect(count).toBe(1)
                resolve()
            })
            store.setState((draft)=>draft.count = 100) 
        })
    })
    test("单独控制计算属性的启用与停止计算",()=>{
        let count = 0
        return new Promise<void>((resolve)=>{
            const store = createStore({
                price:2,
                count:3,
                total1:computed(async (scope)=>{
                    return scope.price * scope.count
                },['price','count'],{id:'x',enable:false,initial:100}),         // 默认禁用
                total2:computed(async (scope)=>{                    
                    return scope.price * scope.count
                },['price','count'],{id:'y'})
            },{                                
                onceComputed:true
            })            
            store.on("computed:done",({path})=>{ 
                count++
                if(count===2){
                    expect(store.state.total1.result).toBe(100)
                    expect(store.state.total2.result).toBe(8)
                    resolve()
                }               
                
            })
            store.setState((draft)=>draft.count = 4)
        })
    })
    test("通过计算属性对象手动执行计算函数",()=>{
        let count = 0
        return new Promise<void>((resolve)=>{
            const store = createStore({
                price:2,
                count:3,
                total:computed(async (scope)=>{
                    return scope.price * scope.count
                },['price','count'],{id:'x'}),         
            },{                                
                onceComputed:true
            })                        
            store.on("computed:done",()=>{
                count++
                if(count===2){ // 第一次是创建时执行，第二次是手动执行
                    resolve()
                }
            })
            store.computedObjects.get("x")!.run({
                extras:1
           })
        })        
    })


    test("",()=>{
        let count:number =0 
        let results:number[] = []
        return new Promise<void>((resolve)=>{
            const store = createStore({
                price:2,
                count:3,
                total1:computed(async (scope)=>{
                    count++
                    return scope.price * scope.count
                },['price','count']),
                total2:1
            },{    
                onceComputed:true               // 遍历对象，从而导致计算属性被读取而立刻创建
            }) 
            store.on("computed:done",({path})=>{
                results.push(store.state.total2 )
                if(results.length===3){
                    expect(count).toBe(3)         
                    // 为什么是10,10,10，而不是6,8,10?
                    // 创建计算属性时，会立即执行一次计算函数，所以第一次是2*3=6，然后setState(count=4)时，会再次执行计算函数，所以是2*4=8
                    // 最后一次是2*5=10? 但是结果是10,10,10?
                    // 因为setState是同步操作，而计算函数是异步的，所以在执行setState后，计算函数并没有立即执行，而是在下一个事件循环中执行
                    expect(results).toEqual([10,10,10]) 
                    resolve()        
                }                
            })   
            //store.setState((draft)=>draft.count = 4) 
        })
    })  


})