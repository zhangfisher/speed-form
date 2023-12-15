import Card from "./components/Card"  
import Network from './forms/network';
import JsonViewer from "./components/JsonViewer" 

const FieldRow:React.FC<React.PropsWithChildren<{label?:string,visible?:boolean}>> = ({visible,label,children})=>{
    return Array.isArray(children) ?(
        <div style={{display: visible===false ? 'none' : 'flex',flexDirection:"row",width:'100%',padding:"8px"}}>
            <label style={{minWidth:'160px',fontWeight:'bold'}}>{label}:</label>
            <span style={{flexGrow:1}}>{children}</span>            
        </div>
        ) : (
            <div style={{display: visible===false ? 'none' : 'flex',flexDirection:"row",width:'100%',padding:"8px"}}>
                <label style={{minWidth:'160px',fontWeight:'bold'}}>{label}:</label>
                <span style={{flexGrow:1}}>{children}</span>            
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
                        </select>                            
                    </FieldRow>
                }}
            </Network.Field>
            <Network.Field name="dhcp" >                                       
                {({title,value,visible,sync})=>{    
                    return <FieldRow visible={visible} label={title}>
                        <input type='checkbox' checked={value}  onChange={()=>value='off'}/>
                        {value}
                    </FieldRow>
                }}
            </Network.Field>
            <Network.Field name="dhcpStart">                      
                {({title,value,visible,sync})=>{ 
                return <FieldRow visible={visible} label={title}>
                    <input value={value} onChange={sync}/>
                    </FieldRow>
                } }
            </Network.Field>
            <Network.Field name="dhcpEnd">                      
                {({title,value,visible,sync})=>{     
                  return <FieldRow visible={visible} label={title}>
                    <input value={value} onChange={sync}/>
                    </FieldRow>              
                }}
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
                    <JsonViewer data={Network.fields}/> 
                </Card>
            </div>
        </div>
        
    )
 } 



 export default FormDemo