import Card from "./components/Card"  
import Network from './forms/network';
import JsonViewer from "./components/JsonViewer" 

const FieldRow:React.FC<React.PropsWithChildren<{label?:string,visible?:boolean,enable?:boolean}>> = ({enable,visible,label,children})=>{
    return  (
        <div style={{
                display: visible===false ? 'none' : 'flex',
                boxSizing:"border-box",
                flexDirection:"row",
                width:'100%',
                padding:"8px"
        }}>
            <label style={{
                minWidth:'160px',
                fontWeight:'bold',
                color: enable===false ? 'gray' : 'inherit'
            }}>{label}:</label>
            <span style={{
                flexGrow:1,
                display:'flex',
                flexDirection:'row',
                color: enable===false ? 'gray' : 'inherit'
            }}>{children}</span>            
        </div>   
    )
}

const NetworkForm = ()=>{
    return <Network.Form className="panel">
        <Card title="网络配置">
            <Network.Field name="title">                      
                {({title,value,visible,placeholder,sync})=>{ 
                return <FieldRow visible={visible} label={title}>
                    <input placeholder={placeholder} value={value} onChange={sync}/>
                    </FieldRow>
                } }
            </Network.Field>
            <Network.Field name="interface">                      
                {({title,value,select,sync})=>{     
                    return <FieldRow label={title}>
                        <select value={value} onChange={sync}>
                            {select.map((item, index) => (
                                <option  key={index} value={item.value}>{item.title}</option>
                            ))}
                            {value}
                        </select>({value})                         
                    </FieldRow>
                }}
            </Network.Field>
            <Network.Field name="dhcp" >                                       
                {({title,value,visible,update})=>{    
                    return <FieldRow visible={visible} label={title}>
                        <input type='checkbox' checked={value}  onChange={()=>update(!value)}/>
                        {value}
                    </FieldRow>
                }}
            </Network.Field>
            <Network.Field name="dhcpStart">                      
                {({visible})=>{ 
                    return <FieldRow visible={visible} label="DHCP地址池">  
                        <Network.Field name="dhcpStart">                      
                            {({value,sync})=>{ 
                                 return  <span><input value={value} onChange={sync}/></span>
                            } }
                        </Network.Field>
                        <Network.Field name="dhcpEnd">                      
                            {({value,sync})=>{     
                                return <><span style={{padding:"0 4px 0 4px"}}>-</span><span><input value={value} onChange={sync}/></span></>
                            }}
                        </Network.Field>
                    </FieldRow>
                }}            
            </Network.Field>  
            
            <Network.Field name="wifi.ssid">                      
                {({value,enable,sync})=>{ 
                    return  <FieldRow label="SSID" enable={enable}> 
                         <input value={value} onChange={sync}/>
                    </FieldRow>

                } }
            </Network.Field>          
            
            <Network.Field name="wifi.password">                      
                {({value,enable,placeholder,sync})=>{ 
                    return  <FieldRow label="密码" enable={enable}> 
                         <input value={value} placeholder={placeholder} onChange={sync}/>
                         {value}
                    </FieldRow>
                } }
            </Network.Field>   


        </Card>
    </Network.Form>        
}

const FormDemo:React.FC = ()=>{
    // 如果缺少以下两句，则state.select无法触发setOnReadHook 
    const [state] = Network.store.useState()
    JSON.stringify(state.interface.select)

    return (
        <div style={{display:"flex",flexDirection:'row',padding:"8px",margin:"8px"}}>
            <div style={{padding:"8px",margin:'8px',width:'50%'}}>
                <NetworkForm/>
                <NetworkForm/>
            </div>
            <div style={{padding:"8px",margin:'8px',width:'50%'}}> 
                <Card title="表单数据">
                    <JsonViewer data={state}/> 
                </Card>
            </div>
        </div>
        
    )
 } 



 export default FormDemo