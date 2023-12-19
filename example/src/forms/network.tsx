
import { computed} from "helux-store"
import { createForm,type Field, field} from "helux-form"
import { Project, getProjects } from "../api/getProjects"
import { delay } from "flex-tools/async/delay"


type IP = `${number}.${number}.${number}.${number}`

type NetworkType={
    title:Field<string>
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
        ssid:Field<string>
        password:Field<string>
    }
}


// 声明表单数据
const formDefine ={ 
    title:{
        value:"React-Helux-Form",
        placeholder:"输入网络配置名称",
        title:"网络名称",
        validate:(net:NetworkType)=>net.title.value.length>3
    },
    interface:{
        value:"wifi",
        title:"网卡类型",
        select:()=>{
            return [{value:"wifi",title:"无线网卡"},{value:"ethernet",title:"有线网卡"}]
        }
    },
    ip:field({
        value:"1.1.1.1"
    }),
    gateway:field(""),
    dhcp:field({
        title:"自动获取IP地址",
        value:true,      
        visible:computed<boolean>(()=>{return true})
    }),
    dhcpStart:{
        title:"起始地址",
        value:"192.168.1.1",
        visible:(net:NetworkType)=>net.dhcp.value as boolean
    },
    dhcpEnd:{
        title:"结束地址",
        value:"192.168.1.100",
        visible:(net:NetworkType)=>net.dhcp.value
    }, 
    wifi:{
        title:"无线配置",
        visible:(net:NetworkType)=>net.interface.value==="wifi",
        ssid:field(""),
        password:{
            value:"123",
            placeholder:"输入无线密码",
            enable:(net:NetworkType)=>net.interface.value==="wifi",
            validate:(net:NetworkType)=>net.wifi.password.value.length>0
        }
    },
    dns:[],
    subnetMask:"",
    mac:"",
    openSource:{
        repo:field({
            value:"",
            title:"项目仓库地址",                        
        }),
        project:{
            value:"",
            title:"项目名称",
            select:computed<Project[]>(async ([repoUrl])=>{
                await delay(1000)  
                return await getProjects(repoUrl) 
              },["openSource.repo.value"],{initial:[]})               
        } 
    }     
}


const Network = createForm<typeof formDefine>(formDefine)

 
// @ts-ignore
globalThis.Network = Network
export default Network