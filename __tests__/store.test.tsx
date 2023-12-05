import React from 'react'
import { test,describe,expect,beforeEach,afterEach } from "vitest"
import { StoreOptions, createStore } from "../src/store"
import { render, renderHook,screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { delay } from "flex-tools/async/delay" 

const storeDefine= {
    state:{
        user:{
            id:'2123',
            firstName:'zhang',
            lastName:'tom',
            fullname:(draft)=> (draft.user.firstName+draft.user.lastName) as string,
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
        async addBookAsync(name:string,price:number,author:string){
            await delay(1)
            return state=>state.books.push({name,price,author})
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
describe("Action",()=>{
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

    test("异步Action",()=>{
        const { addBookAsync } = store.actions
        return new Promise<void>((resolve)=>{    
            store.watch(()=>{
                expect(store.state.books.length).toBe(4)               
            },()=>[store.state.books])
            addBookAsync('三国演义',100,'罗贯中').then(()=>{
                expect(store.state.books.length).toBe(4)
                resolve()
            })
        })
    })



    test("声明在state中的计算属性",()=>{
        const Cmp = ()=>{
            const [state] = store.useState()
            return <div data-testid='a'>{state.user.fullname}</div>
        }
        const { rerender } = render(<Cmp/>);
        expect(screen.getByTestId('a')).toHaveTextContent('zhangtom')    
    })
   

})
