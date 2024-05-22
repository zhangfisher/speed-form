import { test,expect, describe, beforeAll, beforeEach } from "vitest"
import { watch,createStore,IStore, Dict, StoreDefine} from "../"
import { delay } from "flex-tools/async/delay"


function getBookShop(){


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
        store.state.books.total // 注意：watch仅在第一次读取时创建
        store.setState(draft=>{
            draft.books.count = 11
        }) 
        expect(store.state.books.total).toBe(100)
    })






})