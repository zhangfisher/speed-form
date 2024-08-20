
import { createForm } from "@speedform/core"
import { delay } from "flex-tools/async/delay"
import { Paths} from "type-fest"



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
const orderForm ={ 
    title:"订单管理",
    visible:(orders:any)=>orders.orders.length<10,
    enable:(orders:any)=>orders.orders.length<10,
    valid:(orders:any)=>orders.orders.length<10,
    readonly:(orders:any)=>(orders).orders.length<10,    
    fields:{
    
        title:{
            value:"React-Helux-Form",
            placeholder:"订单名称",
            title:"网络名称",
            validate:(orders:any)=>orders.title.value.length>3
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
                book : {value:"AA"},
                count: {title:"数量",value:1},
                prict: {title:"单价",value:12},
                sum  : {title:"小计",value:12}
            },            
            {
                book : {value:"BB"},
                count: {title:"数量",value:2},
                prict: {title:"单价",value:56},
                sum  : {title:"小计",value:112}
            },
        ],  
        total:{
            title:"总金额",
            value:100
        }     
    },
    actions:{
        addBook:{
            title:"添加书籍",
            execute:async (scope:any)=>{
                console.log(scope)
            }
        },
        submit:{
            title:"添加订单",
            visible:(scope:any)=>scope.orders.length<10,
            enable:(scope:any)=>scope.orders.length<10, 
            // 提交数据
            execute:async (scope:any)=>{
                await delay(1000)
                await fetch(scope)
            }
        }
    }
}  as const
 



const BookOrders = createForm(orderForm,{
    debug:true    
})

   
// @ts-ignore
globalThis.BookOrders = BookOrders
export default BookOrders
 