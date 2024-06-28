import { test,expect, describe, beforeAll } from "vitest"
import { createStore,ComputedScopeRef,computed, IStore } from "../.."
import { ComputedObject } from "../../computed/computedObject"

 

describe("基于字段移花接木的异步计算",()=>{

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
            store.on("computed:done",()=>{
                results.push(store.state.total.result)
                if(results.length===3){
                    expect(count).toBe(3)         
                    expect(results).toEqual([6,8,10]) 
                    resolve()        
                }                
            })   
            store.setState((draft)=>draft.count = 4)
            store.setState((draft)=>draft.count = 5)
        })
    })  
    test("从异步对象实例读取计算值",()=>{
        let count:number =0 
        let results:number[] = []
        return new Promise<void>((resolve)=>{
            const store = createStore({
                price:2,
                count:3,
                total:computed(async (scope)=>{
                    count++
                    return scope.price * scope.count
                },['price','count'],{id:"x"})
            },{    
                onceComputed:true             
            }) 
            const cobj = store.computedObjects.get("x")!
            store.on("computed:done",()=>{     
                results.push(cobj.value.result)
                if(results.length===3){
                    expect(count).toBe(3)         
                    expect(results).toEqual([6,8,10]) // ?
                    resolve()        
                }                
            })   
            store.setState((draft)=>draft.count = 4)
            store.setState((draft)=>draft.count = 5)
        })
    })  


    test("异步计算生成异步计算数据对象",()=>{
        return new Promise<void>((resolve)=>{
            const store = createStore({
                price:2,
                count:3,
                total:computed(async (scope)=>{
                    return scope.price * scope.count
                },['price','count'])
            } ) 
            store.on("computed:created",(obj)=>{
                expect("result" in store.state.total).toBe(true)
                expect("error" in store.state.total).toBe(true)
                expect("loading" in store.state.total).toBe(true)
                expect("retry" in store.state.total).toBe(true)
                expect("run" in store.state.total).toBe(true)
                expect("cancel" in store.state.total).toBe(true)
                expect("progress" in store.state.total).toBe(true)
                expect("timeout" in store.state.total).toBe(true)
                resolve()        
            })   
            store.state.total
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
            store.on("computed:created",({id})=>{
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
    test("异步计算属性的计算执行次数，初始化时执行一次",()=>{
        let count = 0
        return new Promise<void>((resolve)=>{
            const store = createStore({
                price:2,
                count:3,
                total:computed(async (scope)=>{
                    return scope.price * scope.count
                },['price','count'],{id:'x'}),         
            })                        
            store.on("computed:done",()=>{
                count++             
            })
            store.state.total   // 创建计算属性时，会立即执行一次计算函数
            setTimeout(()=>{
                expect(count).toBe(1)
                store.setState((draft)=>draft.count = 4)
                setTimeout(()=>{
                    expect(count).toBe(2)
                    resolve()
                },10)
            },10)
        })        
    })


})