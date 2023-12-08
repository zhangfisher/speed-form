import { createStore,computed  } from "helux-store"
 
   
export interface UserLevel{

}
export type MyStateType = {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      fullName: (user:any) =>string;
      github:string
      age: number;
      level:number,
      sex: 1 | 0,
      addresss: {
        city: string;
        street: string;
      }[];
    };
    books: {
      name: string;
      price: number;
      author: string;
      count:number
    }[];
    orders: ({id:number,bookId:string,price:number,count:number})[]
    sales: {
      total: number;
    };
  };
   
export type BookType =  {
  name:string
  price:number
  author:string
  count:number
}

const storeDefine= {
    state:{
        user:{
            id:'zhangfisher',
            firstName:'zhang',
            lastName:'tom',
            fullName:(user:MyStateType['user'])=> {
               return (user.firstName+user.lastName) as string
            },
            level:3,
            github:"https://github.com/zhangfisher",
            age:18,          
            sex:1,      
            addresss:[
                {city:'北京',street:'朝阳区'},
                {city:'上海',street:'浦东区'},
                {city:'广州',street:'天河区'},
            ]        
        },
        books:[
            {name:'张三',price:18,author:'tom',count:2,total:(book:BookType)=>book.price*book.count},
            {name:'李四',price:19,author:'jack',count:3,total:(book:BookType)=>book.price*book.count},
            {name:'王五',price:20,author:'bob',count:4,total:computed((draft:MyStateType)=>draft.books[2].price*draft.books[2].count)}                
        ],
        orders:[],
        sales:{
            total:0,
        }          
    },
    actions:{
        addBook(data:{name:string,price:number,author:string,count:number}){
            return (state:MyStateType)=>state.books.push(data)
        },
        async addBookAsync(data:{name:string,price:number,author:string,count:number}){
            return (state:MyStateType)=>state.books.push(data)
        }
    }
}   



 
const store =  createStore<typeof storeDefine>(storeDefine)  
// @ts-ignore
globalThis.Store = store
export default store

// store.state.user.firstName