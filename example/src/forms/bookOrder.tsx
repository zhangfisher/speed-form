
import { computed} from "helux-store"
import { createForm } from "helux-form"
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
const formSchema ={ 
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
            book:{title:"书名"},
            count:{title:"数量"},
            prict:{title:"单价"},
            sum:{title:"小计"}
        }
    ],    
    total:{
        title:"总金额",
        value:100
    }     
} 

type BookOrdersType = typeof formSchema
const BookOrders = createForm<BookOrdersType>(formSchema)


// @ts-ignore
globalThis.BookOrders = BookOrders
export default BookOrders