/**
 * 
 * 测试计算属性的getter的第二个参数的各项功能
 * 
 */


import { test,expect, describe, beforeAll, vi } from "vitest"
import { createStore,ComputedScopeRef,computed, IStore } from "../.."
import { delay } from "flex-tools/async/delay"



describe("异步计算控制功能",()=>{
    // 注意：重入时仅会被忽略而不是产生错误
    test("控制计算函数的执行的不允许重入执行",()=>{
        let cancelCount:number =0 
        let calcCount:number = 0
        return new Promise<void>((resolve)=>{
            const store = createStore({
                price:2,
                count:3,
                total:computed(async (scope)=>{ 
                    calcCount++
                    await delay(1000)
                    return scope.price * scope.count
                },['price','count'],{ noReentry:true})
            }) 
            store.on("computed:cancel",()=>{
                cancelCount++
                if(cancelCount===9){
                    expect(calcCount).toBe(1)
                    resolve()        
                }
            })   
            store.on("computed:created",()=>{
                // 连接执行多次依赖更新,但是由于noReentry=false,所以只会执行一次，其它的会被忽略
                setTimeout(()=>{
                    for(let i=0;i<10;i++){
                        store.setState((draft)=>draft.count += i)
                    }
                })
            })
            store.state.total
        })
    })


    test("通过abortSignal来中止计算函数的执行",()=>{
        return new Promise<void>((resolve)=>{
            const fn = vi.fn()
            const store = createStore({
                price:2,
                count:3,
                total:computed(async (scope,{abortSignal})=>{ 
                    return new Promise<number>((resolve,reject)=>{
                        // 当接收到中止信号时，必须主动reject或者resolve，否则会被视为正常执行
                        abortSignal.addEventListener("abort",()=>{
                            fn()
                            reject("cancelled") 
                        })
                        // 模拟一个耗时的异步操作                        
                        setTimeout(()=>{
                            resolve(scope.count*scope.price)
                        },10 *1000)
                        
                    })	
                },['price','count'],{id:'x'})
            }) 
            store.on("computed:cancel",({reason})=>{
                expect(reason).toBe("abort")
                expect(fn).toHaveBeenCalled()                
                resolve()
            })   
            store.on("computed:created",()=>{
                setTimeout(()=>{
                   store.computedObjects.get("x")!.cancel()
                })
            })
            store.state.total
        })
    })

    test("当执行计算函数出错时,自动重试5次",()=>{
        let count = 0
        return new Promise<void>((resolve)=>{
            const store = createStore({
                price:2,
                count:3,
                total:computed(async (scope,{})=>{ 
                    count++
                    if(count===6){ // 第一次执行失败，然后重试5次，共执行6次
                        resolve()
                    }else{
                        throw new Error("error")
                    }
                    return scope.price * scope.count
                },['price','count'],{id:'x',retry:5})
            })  
            store.state.total
        })
    })
    test("当执行计算函数出错时自动重试5次并且指定重试间隔",()=>{
        let count = 0
        let times:number[] = []
        return new Promise<void>((resolve)=>{
            const store = createStore({
                price:2,
                count:3,
                total:computed(async (scope,{})=>{ 
                    times.push(Date.now())
                    count++
                    if(count===6){
                        times.forEach((time,index)=>{
                            if(index>0){
                                expect(time-times[index-1]).toBeGreaterThanOrEqual(100)
                            }
                        })
                        resolve()
                    }else{
                        throw new Error("error")
                    }
                    return scope.price * scope.count
                },['price','count'],{id:'x',retry:[5,100]})
            })  
            store.state.total
        })
    })



})