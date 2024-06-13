import { test,expect, describe, beforeAll } from "vitest"
import { createStore,ComputedScopeRef,computed, IStore} from ".."

 

describe("Store",()=>{

    test("创建Store实例",async ()=>{
        const store = createStore({
            price:2,
            count:3,
            total:computed((scope)=>{
                return scope.price * scope.count
            })
        },{id:"x"})         
        expect(store.options.id).toBe("x")
    })   
    test("创建计算属性时的onCreateComputed回调",()=>{
        return new Promise<void>((resolve)=>{
            const store = createStore({
                price:2,
                count:3,
                total:computed((scope)=>{
                    return scope.price * scope.count
                },{id:"x"})
            },{
                onceComputed:true,
                onCreateComputed:(valuePath, getter, computedOptions)=>{ 
                    expect(this).toBe
                    expect(valuePath).toEqual(["total"])
                    expect(getter).toBeInstanceOf(Function)
                    expect(computedOptions.id).toBe("x")
                    resolve()
                }
            })         
            expect(store.options.id).not.toBe(undefined)
        })
    })
    
    test("创建计算属性时的onComputedDraft回调修改根draft指向",()=>{
        return new Promise<void>((resolve)=>{
            // 指定scope='root'指向root,即当前Store对象state
            // 但是通过onComputedDraft回调返回draft.fields，相当于修改了Draft根对象指向
            const store = createStore({
                fields:{
                    price:2,
                    count:3,
                    total:computed(function (this:any,scope){
                        expect(scope).toBe(this.fields)
                        resolve()
                        return 1
                    },{id:"x",scope:'root'})  
                }
                
            },{
                onceComputed:true,
                onComputedDraft:(draft,{computedType,valuePath})=>{
                    expect(valuePath).toEqual(["fields","total"])
                    expect(computedType).toBe("Computed")
                    return draft.fields
                }
            })         
        })
    })
    
    test("创建计算属性时的onCreateComputedObject回调",()=>{
        return new Promise<void>((resolve)=>{
            // 指定scope='root'指向root,即当前Store对象state
            // 但是通过onComputedDraft回调返回draft.fields，相当于修改了Draft根对象指向
            const store = createStore({
                fields:{
                    price:2,
                    count:3,
                    total:computed(function (this:any,scope){
                        expect(scope).toBe(this.fields)
                        resolve()
                        return 1
                    },{id:"x",scope:'root'})  
                }
                
            },{
                onceComputed:true,
                onComputedDraft:(draft,{computedType,valuePath})=>{
                    expect(valuePath).toEqual(["fields","total"])
                    expect(computedType).toBe("Computed")
                    return draft.fields
                }
            })         
        })
    })
    

})
