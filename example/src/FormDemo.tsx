import Card from "./components/Card"  
import Network from './forms/network';
import JsonViewer from "./components/JsonViewer" 
import { AsyncComputedObject } from "helux-store"; 
import { field } from '../../packages/form/src/field';

const FieldRow:React.FC<React.PropsWithChildren<{label?:string,visible?:boolean,enable?:boolean}>> = ({enable,visible,label,children})=>{
    return  (
        <div  className="field"  style={{
                display: visible===false ? 'none' : 'flex',
                boxSizing:"border-box",
                flexDirection:"row",
                width:'100%',
                padding:"8px"
        }}>
            <label  className="field-label"  style={{
                minWidth:'160px',
                fontWeight:'bold',
                color: enable===false ? 'gray' : 'inherit'
            }}>{label}:</label>
            <span className="field-value" style={{
                flexGrow:1,
                display:'flex',
                flexDirection:'row',
                color: enable===false ? 'gray' : 'inherit'
            }}>{children}</span>            
        </div>   
    )
}
const ValidResult:React.FC<React.PropsWithChildren<{result:boolean | AsyncComputedObject}>> = ({result})=>{
    const isValid = typeof(result)=='boolean' ? result : result.value
    const isAsyncValid = typeof(result)!='boolean'
    const isValiding = typeof(result)!='boolean' && result.loading
    return <span style={{
        color:'red',
        display: isValiding || !isValid ? 'flex' : 'none'
    }}>{
        isAsyncValid ? (isValiding ? '正在校验...' : result.error) : "错误"
    }</span>
}

const FieldGroup:React.FC<{title?:string}> = ({title})=>{
    return (<div style={{
        height: "36px",
        borderBottom:"1px solid #eee",
        marginBottom:"16px"
    }}><h4 style={{position:'absolute',background:'white',padding:"4px",color:"#005bc3"}}>{title}</h4></div>)
}

const NetworkForm = ()=>{
    return <Network.Form className="panel">
        <Card title="网络配置">
            <Network.Field name="title">                      
                {({title,value,visible,validate,placeholder,sync})=>{ 
                return <FieldRow visible={visible} label={title}>
                    <input placeholder={placeholder} value={value} onChange={sync}/>
                    <ValidResult result={validate}/>
                    </FieldRow>
                } }
            </Network.Field>
            <Network.Field name="interface">                      
                {({title,value,select,sync})=>{     
                    return <FieldRow label={title}>
                        <select value={value} onChange={sync}>
                            {select.map((item:any, index:number) => (
                                <option  key={index} value={item.value}>{item.title}</option>
                            ))}
                            {value}
                        </select>({value})                         
                    </FieldRow>
                }}
            </Network.Field>
            
            <Network.Field name="wifi.ssid">                      
                {({value,enable,sync})=>{ 
                    return  <FieldRow label="SSID" enable={enable}> 
                         <input value={value} onChange={sync} readOnly={!enable}/>
                    </FieldRow>

                } }
            </Network.Field>          
            
            <Network.Field name="wifi.password">                      
                {({value,enable,placeholder,sync})=>{ 
                    return  <FieldRow label="密码" enable={enable}> 
                         <input value={value} placeholder={placeholder} onChange={sync} readOnly={!enable}/>
                         {value}
                    </FieldRow>
                } }
            </Network.Field>   
            <Network.Field<boolean> name="dhcp" >                                       
                {({title,value,visible,sync})=>{    
                    return <FieldRow visible={visible} label={title}>
                        <input type='checkbox' checked={value}  onChange={sync}/>
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
             <FieldGroup title="开源项目"/>
                <Network.Field<typeof Network.fields.openSource.project> name="openSource.project">                     
                {({title,visible})=>{ 
                    return <FieldRow visible={visible} label={title}>  
                        <Network.Field name="dhcpStart">                      
                            {({value,sync})=>{ 
                                 return  <span><input value={value} onChange={sync}/></span>
                            } }
                        </Network.Field>
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
    JSON.stringify(state.interface.value)
    JSON.stringify(state.dhcp.value)
    JSON.stringify(state.openSource.project.select)
    JSON.stringify(state.openSource.project2.select)

    return (
        <div style={{display:"flex",flexDirection:'row',padding:"8px",margin:"8px"}}>
            <div style={{padding:"8px",margin:'8px',width:'60%'}}>
                <NetworkForm/>
                <NetworkForm/>
            </div>
            <div style={{padding:"8px",margin:'8px',width:'40%'}}> 
                <Card title="表单数据">
                    <JsonViewer data={state}/> 
                </Card>
            </div>
        </div>
        
    )
 } 



 export default FormDemo