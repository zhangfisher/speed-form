import { test,describe,expect,beforeEach,afterEach } from "vitest"
import { createStore } from "../src/store"

const storeDefine= {
    state:{
        user:{
            id:'2123',
            firstName:'tom',
            lastName:'zhang',
            fullname:"",
            age:18,                
            addresss:[
                {city:'北京',street:'朝阳区'},
                {city:'上海',street:'浦东区'},
                {city:'广州',street:'天河区'},
            ]        
        },
        books:[
            {name:'张三',price:18,author:'tom'},
            {name:'李四',price:19,author:'jack'},
            {name:'王五',price:20,author:'bob'}                
        ],
        orders:[],
        sales:{
            total:0,
        }          
    },
    computed:{
        "users.":function(){}
    },
    actions:{
        addBook(name:string,price:number,author:string){
            return state=>state.books.push({name,price,author})
        },
        async addAsync(arg1,arg2){
            return state=>state.count++
        }
    }
}  



let store:ReturnType<typeof createStore<typeof storeDefine>>

beforeEach(() => {
    store = createStore<typeof storeDefine>(storeDefine)  
})
afterEach(() => {
    store = null as any
})

test("创建store",()=>{
    expect(store).toBeDefined()
})

test("同步Action",()=>{
    const { addBook } = store.actions
    return new Promise<void>((resolve)=>{

        store.watch(()=>{
            expect(store.state.books.length).toBe(4)
            resolve()
        },()=>[store.state.books])
        addBook('三国演义',100,'罗贯中')
        store.state.books.push({name:'西游记',price:120,author:'吴承恩'})
    })
    
})