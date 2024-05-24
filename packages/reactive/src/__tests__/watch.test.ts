import { test,expect, describe, beforeAll, beforeEach } from "vitest"
import { watch,createStore,IStore, Dict, StoreDefine} from "../"
import { delay } from "flex-tools/async/delay"
import { isFunction } from "flex-tools/typecheck/isFunction"

type watchParams = Parameters<typeof watch>

function getBookShop(opts?: {listener?:watchParams[0],on?:watchParams[1],options?:watchParams[2]}){
    const {listener=()=>100,on,options}  =  Object.assign({},opts)
    return {
        state:{ 
            books:{            
                price:10,
                count:10,
                total:watch((value,opts)=>{  
                    return listener(value,opts) 
                },(path:string[],value:any)=>{
                    return isFunction(listener) ? on!(path,value) : path[path.length-1]=='count'
                },{                
                    initial:1,
                    group:'x',
                    ...options
                }),
            }
        }
    }

}
const BookShop = {
    state:{ 
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
            }),
            
        }
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
        expect(store.watchObjects.get(watchId)?.path).toEqual(['books','total'])
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
        const bookShop= getBookShop({
            listener:(value:any,opts:any)=>{
                return value
            }
        })
        store = createStore<typeof bookShop>(bookShop)
        store.state.books.total  


        const watchObj = store.watchObjects.get('books.total')!
        for(let i =0;i<10;i++){
            watchObj.options.enable = i%2==0
            store.setState(draft=>{
                draft.books.count++ 
            }) 
        }

        
        expect(store.state.books.total).toBe(100)

    })






})