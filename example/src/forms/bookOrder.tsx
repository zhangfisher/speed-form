
import { computed} from "helux-store"
import { createForm } from "speed-form"
import { Project, getProjects } from "../api/getProjects"
import { delay } from "flex-tools/async/delay"



// type NetworkType={
//     title:Field<string>
//     interface:Field<'wifi' | 'ethernet'>    
//     ip:Field<IP>
//     gateway:string
//     dhcp:Field<boolean>
//     dhcpStart:Field<string>
//     dhcpEnd:Field<string>
//     dns:string[]
//     subnetMask:string
//     mac:string
//     wifi:{
//         ssid:Field<string>
//         password:Field<string>
//     }
// }


// 声明表单数据
const orderFormSchema ={ 
    title:{
        value:"React-Helux-Form",
        placeholder:"订单名称",
        title:"网络名称",
        validate:(orders:any)=>(orders as BookOrdersType).title.value.length>3
    },
    id:{
        value:"",
        title:"订单号",
        select:()=>{
            return [{value:"wifi",title:"无线网卡"},{value:"ethernet",title:"有线网卡"}]
        }
    }, 
    orders:[
        {
            url:"wwww.ddd",
            valid:"",
            fields:{
                book:{title:"书名"},
                count:{title:"数量"},
                prict:{title:"单价"},
                sum:{title:"小计"}
            }            
        },  
    ],  
    total:{
        title:"总金额",
        value:100
    }     
} 

type BookOrdersType = typeof orderFormSchema
const BookOrders = createForm<BookOrdersType>(orderFormSchema,{
    actions:{
        addOrder:{
            title:"添加订单",
            scope:()=>['orders'],
            visible:(orders:any)=>(orders as BookOrdersType).orders.length<10,
            enable:(orders:any)=>(orders as BookOrdersType).orders.length<10,                        
            submit:async (order:any)=>{
                await delay(1000)
                // post(order)
            }
        }
    }
})


// @ts-ignore
globalThis.BookOrders = BookOrders
export default BookOrders