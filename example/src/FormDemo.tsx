import Card from "./Card"  
import Network from  "./forms/network"
 
const FieldRow:React.FC<React.PropsWithChildren<{label?:string,visible?:boolean}>> = ({visible,label,children})=>{
    return (
        <div style={{display: visible===false ? 'none' : 'flex',flexDirection:"row",width:'100%',padding:"4px"}}>
            <label style={{minWidth:'80px',fontWeight:'bold'}}>{label}:</label>
            <span style={{flexGrow:1}}>{children}</span>            
        </div>    
    )
}


 const FormDemo:React.FC = ()=>{
    // 如果缺少以下两句，则state.select无法触发setOnReadHook 
    const [state] = Network.store.useState()
    console.log(JSON.stringify(state.interface.select))
    return (
        <div style={{display:"flex",flexDirection:'row',padding:"8px",margin:"8px"}}>
            <div style={{padding:"8px",margin:'8px',width:'50%'}}>
            <Network.Form className="panel">
                <Card title="网络配置">
                    {Network.fields.interface.value}
                    {JSON.stringify(Network.fields.interface.select)}
                    {/* <Network.Field name="interface">                      
                        {({title,value,select}:typeof Network.fields.interface)=>{     
                            return <FieldRow label={title}>
                            <select value={value}>
                                {select.map((item, index) => (
                                    <option  key={index} value={item.value}>{item.title}</option>
                                ))}
                            </select>                            
                            </FieldRow>
                        }}
                    </Network.Field> */}
                    <Network.Field name="dhcp">                                       
                        {({title,value,visible})=>{    
                            return <FieldRow visible={visible} label={title}>
                                <input type='checkbox' value={String(value)}/>
                            </FieldRow>
                        }}
                    </Network.Field>
                    {/* <Network.Field name="dhcpStart">                      
                        {({title,value,visible})=>{ 
                        return <FieldRow visible={visible} label={title}><input type='checkbox' value={value.value}/></FieldRow>
                        } }
                    </Network.Field>
                    <Network.Field name="dhcpEnd">                      
                        {({title,value,visible})=>{     
                            return <FieldRow  visible={visible} label={title}><input type='checkbox' value={value.value}/></FieldRow>
                        }}
                    </Network.Field> */}
                </Card>
            </Network.Form>        
            </div>
            <div style={{padding:"8px",margin:'8px',width:'50%'}}> 
                {JSON.stringify(Network.fields)}
            </div>
        </div>
        
    )
 } 



 export default FormDemo