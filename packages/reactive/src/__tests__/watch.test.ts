import { test,expect, describe, beforeAll, beforeEach,vi } from "vitest"
import { watch,createStore,IStore, Dict, StoreDefine, computed} from "../"
import { delay } from "flex-tools/async/delay"
import { isFunction } from "flex-tools/typecheck/isFunction"

type watchParams = Parameters<typeof watch<number,number>>

function getBookShop(opts?: {listener?:watchParams[0],on?:watchParams[1],options?:watchParams[2]}){
    const {listener=()=>100,on,options}  =  Object.assign({},opts)
    return {
            books:{            
                price:10,
                count:10,
                total:watch<number,number>((value,opts)=>{  
                    return listener(value,opts) as number
                },(path:string[],value:any)=>{
                    return isFunction(on) ? on!(path,value) : path[path.length-1]=='count'
                },{                
                    initial:1,
                    group:'x',
                    ...options
                })
            }
        }

}
const BookShop = {
        books:{            
            price:10,
            count:10,
            total:watch((scope)=>{ 
                return  100
            },(path:string[],value:any)=>{
                return path[path.length-1]=='count'
            },{                
                initial:1,
                group:'x'
            })
            
        }
}
 

describe("静态声明watch",()=>{
    let store:IStore<typeof BookShop>
    beforeEach(()=>{
        store = createStore<typeof BookShop>(BookShop)
    })
    test("创建监视对象",async ()=>{
        store.state.books.total // 注意：watch仅在第一次读取时创建        
        const watchId = 'books.total'
        expect(store.watchObjects.size).toBe(1)
        expect(store.watchObjects.has(watchId)).toBeDefined()
        expect(store.watchObjects.get(watchId)?.id).toBe(watchId)
        expect(store.watchObjects.get(watchId)?.options.initial).toBe(1)
        expect(store.watchObjects.get(watchId)?.selfPath).toEqual(['books','total'])
        expect(store.watchObjects.get(watchId)?.options.group).toBe("x")

    })
    
    test("监视字段total的初始值为1",async ()=>{
        store.state.books.total // 注意：watch仅在第一次读取时创建        
        expect(store.state.books.total).toBe(1)
    })

    test("侦听count变化后更新total值",async ()=>{
        store.state.books.total // 注意：watch仅在第一次读取时创建
        store.setState(draft=>{
            draft.books.count = 11
        }) 
        expect(store.state.books.total).toBe(100)
    })

    test("通过enable控制total是否侦听",async ()=>{
        const listener = vi.fn()
        const bookShop= getBookShop({
            listener:(value:number,opts:any)=>{
                listener()
                return value * 100
            }
        })
        const store = createStore(bookShop)
        // 注意：watch仅在第一次读取时创建，如果没有读一下，则不会创建watch对象
        store.state.books.total   

        const watchObj = store.watchObjects.get('books.total')!
        for(let i = 0;i<10;i++){
            watchObj.options.enable = i%2==0            
            // 修改count值，导致total值变化
            store.setState(draft=>{
                draft.books.count++ 
            }) 
        }
        expect(store.state.books.total).toBe(1900)  // 1900
        expect(listener).toHaveBeenCalledTimes(5)        
        

    })






})