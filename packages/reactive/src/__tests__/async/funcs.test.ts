/**
 * 
 * 测试计算属性的getter的第二个参数的各项功能
 * 
 */


import { test,expect, describe, beforeAll } from "vitest"
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
})