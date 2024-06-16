import { test,expect, describe, beforeAll } from "vitest"
import { createStore,ComputedScopeRef,computed, IStore, StoreEvents} from ".."
import { ComputedObject } from "../computed/computedObject"

 

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
    test("Store对象触发属性计算相关事件",()=>{
        const doned:StoreEvents['computed:done'][]=[]
        const created:StoreEvents['computed:created'][]=[]
        const errors:StoreEvents['computed:error'][]=[]
        return new Promise<void>((resolve)=>{
            const store = createStore({
                    price:2,
                    count:3,
                    total1:computed(function (){
                        return 1
                    },{id:"a"}),
                    total2:computed(function (scope){                        
                        throw new Error()
                    },{id:"b"}),                
                    total3:computed(async ()=>{
                        return 1
                    },['price','count'],{id:"c"}),
                    total4:computed(async (scope)=>{                        
                        throw new Error()
                    },['price','count'],{id:"d"})                
            } )       
            store.on("computed:created",(obj)=>{created.push(obj)})
            store.on("computed:done",(args)=>{doned.push(args)})
            store.on("computed:error",(args)=>{errors.push(args)})

            store.state.total1
            store.state.total2
            store.state.total3
            store.state.total4
            store.setState(draft=>{
                draft.count++
            })
            setTimeout(()=>{
                expect(created.length).toBe(4)
                expect(doned.length).toBe(3)  // total3 2次,total1 1次 
                expect(errors.length).toBe(3)
                const ids= ["a","b","c","d"]
                ids.forEach((id,i)=>{
                    expect(created[i]).toBeInstanceOf(ComputedObject)
                    expect(created[i].id).toBe(id)
                    expect(created[i]).toBe(store.computedObjects.get(id))
                    expect(created[i].path).toEqual([`total${i+1}`])
                })
                //  total1 1 次， total3 2次 异步计算会在初始化时先执行一次，然后在依赖数据变更时再次执行
                const doneIds = [["a",1],["c",3],["c",3]]  
                doneIds.forEach(([id,i],index)=>{
                    expect(doned[index].id).toBe(id)
                    expect(doned[index].path).toEqual([`total${i}`])
                })

                const errIds = [["b",2],["d",4],["d",4]]  
                errIds.forEach(([id,i],index)=>{
                    expect(errors[index].id).toBe(id)
                    expect(errors[index].path).toEqual([`total${i}`])
                    expect(errors[index].error).toBeInstanceOf(Error)
                })


                
                resolve()
            })
            

        })
        

    })


})
