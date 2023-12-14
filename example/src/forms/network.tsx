
import { createForm,computed,type Field} from "helux-store"


type IP = `${number}.${number}.${number}.${number}`

type NetworkType={
    interface:Field<'wifi' | 'ethernet'>    
    ip:Field<IP>
    gateway:string
    dhcp:Field<boolean>
    dhcpStart:Field<string>
    dhcpEnd:Field<string>
    dns:string[]
    subnetMask:string
    mac:string
    wifi:{
        title:string
        visible:any
        ssid:string
        password:Field<string>
    }
}


// 声明表单数据
const formDefine ={ 
    interface:{
        value:"wifi",
        title:"网卡类型",
        select:(d:any)=>{
            console.log("interface=",d)
            return [{value:"wifi",title:"无线网卡"},{value:"ethernet",title:"有线网卡"}]
        }
    },
    ip:{
        value:"1.1.1.1"
    },
    gateway:"",
    dhcp:{
        title:"自动获取IP地址",
        value:false,      
        visible:computed<boolean>(()=>{return true})
    },
    dhcpStart:{
        value:"192.168.1.2",
        visible:(net:NetworkType)=>net.dhcp.value as boolean
    },
    dhcpEnd:{
        value:"",
        visible:(net:NetworkType)=>net.dhcp.value
    }, 
    wifi:{
        title:"无线配置",
        visible:(net:NetworkType)=>net.interface.value==="wifi",
        ssid:"",
        password:{
            value:"",
            validate:(net:NetworkType)=>net.wifi.password.value.length>0
        }
    },
    dns:[""],
    subnetMask:"",
    mac:""        
}


const Network = createForm<typeof formDefine>(formDefine)
// @ts-ignore
globalThis.Network = Network
export default Network