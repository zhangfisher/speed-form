import { createStore  } from "helux-store"
 
type MyStateType = {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      fullName: (draft: MyStateType) =>string;
      age: number;
      addresss: {
        city: string;
        street: string;
      }[];
    };
    books: {
      name: string;
      price: number;
      author: string;
    }[];
    orders: ({id:number,bookId:string,price:number,count:number})[]
    sales: {
      total: number;
    };
  };
   

const storeDefine= {
    state:{
        user:{
            id:'2123',
            firstName:'zhang',
            lastName:'tom',
            fullName:(draft:MyStateType)=> {
               return (draft.user.firstName+draft.user.lastName) as string
            },
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
    actions:{
        addBook(name:string,price:number,author:string){
            return (state:MyStateType)=>state.books.push({name,price,author})
        },
        async addBookAsync(name:string,price:number,author:string){
            return (state:MyStateType)=>state.books.push({name,price,author})
        }
    }
}   



 
export const store =  createStore<typeof storeDefine>(storeDefine)  


// store.state.user.firstName