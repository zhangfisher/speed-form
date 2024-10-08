import { createStore,computed, ComputedScopeRef  } from "@speedform/reactive"
import { delay }  from "flex-tools/async/delay"
import { getProjects,type Project } from "../../api/getProjects";
   
 
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
      repo:string
      projects:()=>Project[]      
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
  total:number
}

const storeDefine= { 
        user:{
            id:'zhangfisher',
            firstName:'zhang',
            lastName:'tom',
            fullName:(user:MyStateType['user'])=> {
               return (user.firstName+user.lastName) as string
            },            
            repo:"https://api.github.com/users/zhangfisher/repos",
            projects:computed<Project[]>(async ([repoUrl])=>{
              await delay(1000)  
              return await getProjects(repoUrl) 
            },["user.repo"],{
              initial:[],
              scope:ComputedScopeRef.Depends
            }),
            level:3,
            github:"https://github.com/zhangfisher",
            age:18, 
            sex:1,    
            addresss:[
                {city:'北京',street:'朝阳区'},
                {city:'上海',street:'浦东区'},
                {city:'广州',street:'天河区'},
            ],
            // 异步计算，由于没有指定依赖，所以只会运行一次,如果要重新计算需要手动调用
            avatar:async ()=>{
              await delay(1000)
              return "User Avatar"
            }
        },
        books:[
            {name:'张三',price:18,author:'tom',count:2,total:(book:BookType)=>book.price*book.count},
            {name:'李四',price:19,author:'jack',count:3,total:(book:BookType)=>book.price*book.count},
            {name:'王五',price:20,author:'bob',count:4,total:(book:BookType)=>book.price*book.count}                
        ],
        orders:[],
        sales:{
            total:0,
        },
        // actions:{
        //     addBook(name:string,author:string,price:number,count:number){
        //       return (state:MyStateType)=>state.books.push({
        //         name,
        //         price,
        //         author,
        //         count,
        //         // @ts-ignore
        //         total:(book:any)=>book.price*book.count
        //       })
        //     },  
        //     async addBookAsync(data:{name:string,price:number,author:string,count:number}){
        //         await delay(1000)
        //         // @ts-ignore
        //         data.total =(book:any)=>book.price*book.count
        //         // 模拟异步请求
        //         return (state:MyStateType)=>state.books.push(data)
        //     }
        // }
}   

const store =  createStore(storeDefine)  



// @ts-ignore
globalThis.Store = store

export default store