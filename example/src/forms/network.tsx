
import { ComputedScopeRef, computed} from "helux-store"
import { createForm } from "speed-form"
import { Project, getProjects } from "../api/getProjects"
import { delay } from "flex-tools/async/delay"
import validator from "validator"

// 声明表单数据
const formSchema ={ 
    title:{
        value:"React-Helux-Form",
        placeholder:"输入网络配置名称",
        title:"网络名称",
        validate:(value:string)=>value.length>3,
        validate1:computed((value:string)=>value.length>3,{}),
        validate2:computed(async (value:string)=>value.length>3,[]),
        validate3:computed(async (value:string)=>value.length>3,[],{})
    },
    interface:{
        value:"wifi",
        title:"网卡类型",
        select:()=>{
            return [{value:"wifi",title:"无线网卡"},{value:"ethernet",title:"有线网卡"}]
        }
    },
    ip:{
        value:"1.1.1.1",
        title:"IP地址",
        validate:async ([value]:any)=>{
            await delay(2000)
            return validator.isIP(value)
        }
    },    
    gateway:{
        value:"1.1.1.1",
        title:"网关地址",        
        validate:(value:any)=>validator.isIP(value)
    },
    dhcp:{        
        enable:{        
            title:"自动获取IP地址",
            value:true
        },        
        start:{
            title:"起始地址",
            value:"192.168.1.1",
            visible:computed<boolean>((dhcp:any)=>{
                return dhcp.enable.value
            },{context:ComputedScopeRef.Parent}),
            validate:(value:any)=>validator.isIP(value)
        },
        end:{
            title:"结束地址",
            value:"192.168.1.100",
            // 将visible的context指向父对象即dhcp
            visible:computed<boolean>((state:any)=>{
                return state.dhcp.enable.value
            },{context:ComputedScopeRef.Root}),
            validate:(value:any)=>validator.isIP(value)
        } 
    },    
    wifi:{
        title:"无线配置",
        visible:(net:any)=>(net as NetworkType).interface.value==="wifi",
        ssid:{
            value:"fast",
            placeholder:"无线网络",
            validate:(value:string)=>value.length>3
        },
        password:{
            value:"123",
            placeholder:"输入无线密码",
            help:"密码长度应不小于6位",
            enable:(net:any)=>(net as NetworkType).interface.value==="wifi",
            validate:(value:string)=>value.length>6
        }
    },
    // dns:[],
    // subnetMask:"",
    // mac:"",
    // openSource:{
    //     repo:{
    //         value:"",
    //         title:"项目仓库地址",                      
    //     },
    //     project:{
    //         value:"",
    //         title:"项目名称",
    //         select:computed<Project[]>(async ([repoUrl])=>{
    //             await delay(1000)  
    //             return await getProjects(repoUrl) 
    //         },["openSource.repo.value"],{initial:[]}),
    //     } 
    // }     network.actions.ping.run.loading
}  

type NetworkType = typeof formSchema
const Network = createForm<NetworkType>(formSchema,{
    actions:{
        ping:{
            title:"测试网络连通性", 
            scope:"wifi",// 表示该动作的上下文是wifi这个子表单
            execute:async (a:NetworkType)=>{
                await delay(100)
            }
        }
    }
})
 

// @ts-ignore
globalThis.Network = Network
export default Network