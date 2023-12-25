import Card from "./components/Card"  
import Network from './forms/network';
import JsonViewer from "./components/JsonViewer" 
import { AsyncComputedObject } from "helux-store";  
import Box from "./components/Box"; 
import classnames from 'classnames';

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


const NetworkForm = ()=>{
    return <Network.Form className="panel">
        <Card title="网络配置">
            {/* <Network.Field<string> name="title">                      
                {({title,value,required,visible,validate,enable,placeholder,sync})=>{ 
                    console.log(required,visible,validate,enable)
                    return <FieldRow visible={visible} label={title}>
                         <input className={classnames({invalid:!validate})} placeholder={placeholder} value={value} onChange={sync}/>
                        <ValidResult result={validate}/>
                    </FieldRow>
                } }
            </Network.Field>
            <Network.Field<typeof Network.fields.interface> name="interface">                      
                {({title,required,visible,validate,enable,value,defaultValue,select,sync})=>{     
                    console.log(required,visible,validate,enable,defaultValue)
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
           <Network.Group<typeof Network.fields.wifi> name="wifi">
                {({title,visible,enable,update})=>{ 
                    return <Box title={title} visible={visible} enable={enable}>                    
                        <Network.Field name="wifi.ssid">                      
                            {({value,required,visible,validate,enable,defaultValue,sync})=>{ 
                                console.log(required,visible,validate,enable,defaultValue)
                                return  <FieldRow label="SSID" enable={enable}> 
                                         <input className={classnames({invalid:!validate})} value={value} onChange={sync} />
                                </FieldRow>
                            } }
                        </Network.Field>      
                        <Network.Field name="wifi.password">                      
                            {({value,enable,validate,placeholder,sync})=>{ 
                                return  <FieldRow label="密码" enable={enable}> 
                                         <input className={classnames({invalid:!validate})} value={value} placeholder={placeholder} onChange={sync} readOnly={!enable}/>
                                        {value}
                                </FieldRow>
                            } }
                        </Network.Field>
                        <button onClick={()=>update(group=>group.enable=!group.enable)}></button>
                    </Box>
                }}
            </Network.Group>    */}          
              <Network.Field<typeof Network.fields.dhcp.enable> name="dhcp" >                                       
                {({title,visible,value,validate,sync})=>{     
                    return <FieldRow visible={visible} label={title}>
                         <input className={classnames({invalid:!validate})} type='checkbox' checked={value}  onChange={sync}/>
                    </FieldRow>
                }}
            </Network.Field> 
          {/*  <Network.Field name="dhcp.start">                      
                {({value,validate,visible,title,sync})=>{ 
                    return  <FieldRow visible={visible} label={title}>
                        <input className={classnames({invalid:!validate})} value={value} onChange={sync}/>
                    </FieldRow>
                } }
            </Network.Field>
            <Network.Field name="dhcp.end">                      
                {({value,validate,visible,title,sync})=>{     
                    return <FieldRow visible={visible} label={title}>
                        <input className={classnames({invalid:!validate})} value={value} onChange={sync}/>
                    </FieldRow>
                }}
            </Network.Field> */}
        </Card>
    </Network.Form>        
}



const FormDemo:React.FC = ()=>{
    // 如果缺少以下两句，则state.select无法触发setOnReadHook 
    const [state] = Network.store.useState()
    // JSON.stringify(state.interface.select)

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