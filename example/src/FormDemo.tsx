import { useForm,Field, ComputedField } from "helux-store"
import Card from "./Card" 


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

const FieldRow:React.FC<React.PropsWithChildren<{label?:string,visible?:boolean}>> = ({visible,label,children})=>{
    return (
        <div style={{display: visible===false ? 'none' : 'flex',flexDirection:"row",width:'100%',padding:"4px;"}}>
            <label style={{minWidth:'80px',fontWeight:'bold'}}>{label}:</label>
            <span style={{flexGrow:1}}>{children}</span>            
        </div>    
    )
}


export const FormDemo = ()=>{
    
    // 用来保存表单数据
    const Network = useForm<NetworkType>({
        interface:{
            value:"wifi",
            title:"网卡类型",
            enum:()=>[{value:"wifi",title:"无线网卡"},{value:"ethernet",title:"有线网卡"}]
        },
        ip:{
            value:"1.1.1.1"
        },
        gateway:"",
        dhcp:{
            title:"自动获取IP地址",
            value:false,            
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
    })
    
    return (
        <Network.Form className="panel">
            <Card title="网络配置">
                <Network.Field name="interface">                      
                    {({title,value})=>{     
                        return <FieldRow label={title}>
                            <input value={value.value} onChange={()=>value.value}/>
                        </FieldRow>
                    }}
                </Network.Field>
                <Network.Field name="dhcp">                      
                    {({title,value})=>{     
                        return <FieldRow label={title}><input type='checkbox' value={value.value}/></FieldRow>
                    }}
                </Network.Field>
                <Network.Field name="dhcpStart">                      
                    {({title,value,visible}:ComputedField<typeof Network.fields.interface>)=>{ 
                    Network.fields.dhcpStart.value=""
                    Network.fields.dhcpStart.visible
                    return <FieldRow visible={visible} label={title}><input type='checkbox' value={value.value}/></FieldRow>
                    }}
                </Network.Field>
                <Network.Field name="dhcpEnd">                      
                    {({title,value,visible})=>{     
                        return <FieldRow  visible={visible} label={title}><input type='checkbox' value={value.value}/></FieldRow>
                    }}
                </Network.Field>

              
            </Card>
        </Network.Form>        
    )
 } 