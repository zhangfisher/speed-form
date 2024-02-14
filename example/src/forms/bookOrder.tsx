
import { computed} from "@speedform/reactive"
import { createForm } from "@speedform/core"
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
            book:{value:""},
            count:{title:"数量",value:1},
            prict:{title:"单价",value:12},
            sum:{title:"小计",value:12}
        },{
            visible:(orders:any)=>(orders as BookOrdersType).orders.length<10
        }  
    ],  
    total:{
        title:"总金额",
        value:100
    }     
} 
type BookOrdersType = typeof orderFormSchema
 


const BookOrders = createForm<BookOrdersType>(orderFormSchema,{
    title:"订单管理",
    visible:(orders:any)=>(orders as BookOrdersType).orders.length<10,
    enable:(orders:any)=>(orders as BookOrdersType).orders.length<10,
    valid:(orders:any)=>(orders as BookOrdersType).orders.length<10,
    readonly:(orders:any)=>(orders as BookOrdersType).orders.length<10,    
    actions:{
        addBook:{
            title:"添加书籍",
            execute:(scope)=>{
                console.log(scope)
            }
        },
        submit:{
            title:"添加订单",
            visible:(scope:any)=>(scope as BookOrdersType).orders.length<10,
            enable:(scope:any)=>(scope as BookOrdersType).orders.length<10,       
            // 动作正在执行，如果是数字代表是倒计时，否则会在submit提交完成后变成false         
            loading:true,                                 
            error:null,
            // 提交数据
            execute:async (scope:any)=>{
                await delay(1000)
                await fetch(scope)
            }
        }
    }
})
BookOrders.actions



// @ts-ignore
globalThis.BookOrders = BookOrders
export default BookOrders