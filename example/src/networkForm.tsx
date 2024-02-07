import React, { useCallback, useState } from "react";
import Card from "./components/Card"  
import Network from './forms/network';
import JsonViewer from "./components/JsonViewer" 
import classnames from 'classnames';
import { Button } from "./components/Button"; 
import { Divider } from "./components/Divider";
import { Field, ValidResult } from "./components/Field";
 
 
const NetworkForm = ()=>{     
    
    return <Network.Form className="panel">
       <div data-loader="circle"></div>
        <Card title="网络配置">
          <Network.Field<string> name="title">                      
                {({title,value,visible,validate,placeholder,sync})=>{                 
                    return <Field  name="title" visible={visible} title={title}>
                         <input className={classnames({invalid:!validate})} placeholder={placeholder} value={value} onChange={sync()}/>
                        <ValidResult validate={validate}/>
                    </Field>
                } }
            </Network.Field>
             <Network.Field<typeof Network.fields.interface> name="interface">                      
                {({title,required,visible,validate,enable,value,defaultValue,select,sync})=>{     
                    console.log(required,visible,validate,enable,defaultValue)
                    return <Field name="interface" title={title}>                        
                        <select value={value} onChange={sync()}>
                            {select.map((item:any, index:number) => (
                                <option  key={index} value={item.value}>{item.title}</option>
                            ))}
                            {value}
                        </select>({value})       
                    </Field>
                }}
            </Network.Field> 
             <Network.Field<typeof Network.fields.ip> name="ip">                      
                {({title,value,visible,validate,placeholder,sync})=>{ 
                    return <Field  name="ip" visible={visible} title={title}>
                         <input className={classnames({invalid:!validate.result})} placeholder={placeholder} value={value} onChange={sync(100)}/>
                        <ValidResult validate={validate}/> 
                    </Field> 
                } }
            </Network.Field>
            <Network.Field<typeof Network.fields.gateway> name="gateway">                      
                {({title,value,required,visible,validate,update,enable,placeholder,sync})=>{ 
                    console.log("更新网关地址：",required,visible,validate,enable)
                    return <Field name="gateway" visible={visible} title={title}>
                        <input className={classnames({invalid:!validate})} placeholder={placeholder} value={value} onChange={sync()}/>
                        <button onClick={update((state:any)=>{
                                state.gateway.value='192.168.1.2'
                            })}>恢复</button>
                        <button onClick={update('192.168.1.1')}>更新值</button>
                        <ValidResult validate={validate}/>
                    </Field>
                } }
            </Network.Field>
          <Network.Group<typeof Network.fields.wifi> name="wifi">
            {({title,visible} )=>{ 
                return (
                <Card title={title}  visible={visible}>
                    <Network.Field name="wifi.ssid">                      
                            {({value,required,visible,validate,enable,defaultValue,sync})=>{ 
                                console.log(required,visible,validate,enable,defaultValue)
                                return  <Field  name="wifi.ssid" title="SSID" enable={enable}> 
                                         <input className={classnames({invalid:!validate})} value={value} onChange={sync()} />
                                </Field>
                            } }
                        </Network.Field>      
                        <Network.Field name="wifi.password">                      
                            {({value,enable,validate,placeholder,help,sync})=>{ 
                                return  <Field name="wifi.password" title="密码" enable={enable} className={classnames({invalid:!validate})} > 
                                         <input className={classnames({invalid:!validate})} data-help={help} value={value} placeholder={placeholder} onChange={sync()} readOnly={!enable}/>                               
                                         <ValidResult help={help} validate={validate}/>
                                </Field>
                            } }
                        </Network.Field> 
                </Card>)
            }}
         </Network.Group>                
           <Network.Field<typeof Network.fields.dhcp.enable> name="dhcp.enable" >                                       
                {({title,visible,value,validate,sync})=>{     
                    return <Field  name='dhcp.enable' visible={visible} title={title}>
                         <input className={classnames({invalid:!validate})} type='checkbox' checked={value}  onChange={sync()}/>
                    </Field>
                }}
            </Network.Field> 
           <Network.Field<typeof Network.fields.dhcp.start> name="dhcp.start">                      
                {({value,validate,visible,title,sync})=>{ 
                    return  <Field name="dhcp.start" visible={visible} title={title}>
                        <input className={classnames({invalid:!validate})} value={value} onChange={sync()}/>
                    </Field>
                } }
            </Network.Field>
            <Network.Field<typeof Network.fields.dhcp.end> name="dhcp.end">                      
                {({value,validate,visible,title,sync})=>{     
                    return <Field name="dhcp.end" visible={visible} title={title}>
                        <input className={classnames({invalid:!validate})} value={value} onChange={sync()}/>
                    </Field>
                }}
            </Network.Field>   
            <Divider title='提交'></Divider>
            <div style={{display:'flex',flexDirection:'column'}}>
                <Network.Action<typeof Network.fields.wifi.submit> name="fields.wifi.submit" >
                    {({title,visible,loading,enable,run,timeout})=>{ 
                        return <Button loading={loading} timeout={timeout} visible={visible} enable={enable} onClick={run()}>{title}</Button>
                    }}
                </Network.Action>
                <Network.Action<typeof Network.fields.wifi.timeoutSubmit> name="fields.wifi.timeoutSubmit" >
                    {({title,visible,loading,enable,run,error,timeout})=>{ 
                        return <Button loading={loading} timeout={timeout} visible={visible} enable={enable}  error={error} onClick={run()}>{title}</Button>
                    }}
                </Network.Action>
                <Network.Action<typeof Network.fields.wifi.progressSubmit> name="fields.wifi.progressSubmit" >
                    {({title,visible,loading,enable,run,error,progress})=>{ 
                        return <Button loading={loading} progress={progress} visible={visible} enable={enable}  error={error} onClick={run()}>{title}</Button>
                    }}
                </Network.Action>
                <Network.Action<typeof Network.fields.wifi.progressSubmit2> name="fields.wifi.progressSubmit2" >
                    {({title,visible,loading,enable,run,error,progress})=>{ 
                        return <Button loading={loading} progress={progress} visible={visible} enable={enable}  error={error} onClick={run()}>{title}</Button>
                    }}
                </Network.Action>
                <Network.Action<typeof Network.fields.wifi.retrySubmit> name="fields.wifi.retrySubmit" >
                    {({title,visible,loading,enable,run,error,retry,progress})=>{ 
                        return <>
                        <Button loading={loading} progress={progress} visible={visible} enable={enable}  error={error} onClick={run()}>{title}</Button>
                        {retry>0 && <span>重试次数：{retry}</span>}
                        </>
                    }}
                </Network.Action>
                <Network.Action<typeof Network.fields.wifi.cancelableSubmit> name="fields.wifi.cancelableSubmit" >
                    {({title,visible,loading,enable,run,cancel,error,progress})=>{ 
                        return <>
                            <input type="submit" value="提交"/>
                            <Button loading={loading} cancel={cancel} timeout={progress} visible={visible} enable={enable} error={error} onClick={run()}>{title}</Button>
                        </>
                    }}
                </Network.Action>     
                <Network.Submit>
                    {({title,dirty,validate})=>{ 
                        return <>
                             <input type="submit" value={title}/>
                             dirty={String(dirty)},validate={String(validate)}
                        </>
                    }}
                </Network.Submit>            
            </div> 
            
        </Card>
    </Network.Form>        
}


const FormDemo:React.FC = ()=>{
    const [formData,setFormData] = useState({})
    const [formState,setFormState] = useState(Network.state)    
    const [fState]= Network.useState()
    const submit = useCallback((actionState:any)=>{
        Network.getAction(actionState)().then((result)=>{            
            setFormData(result)
        }).catch((error)=>{
            setFormData("Error: "+error.message)
        })
    },[])

    Network.state.dirty
    Network.state.enable
 
    return (
        <div style={{display:"flex",flexDirection:'row',padding:"8px",margin:"8px"}}>
            <div style={{padding:"8px",margin:'8px',width:'60%'}}>
                <NetworkForm/>
                {/* <NetworkForm/> */}
                <button onClick={()=>submit(Network.state.actions.next)}>提交</button>
                <button onClick={()=>submit(Network.state.actions.timeoutSubmit)}>提交超时</button>
                <span>
                <button onClick={()=>submit(Network.state.actions.errorSubmit)}>提交出错</button>
                <button onClick={()=>submit}>取消</button>
                </span> 
            </div>
            <div style={{padding:"8px",margin:'8px',width:'40%'}}> 
                <Card title="表单状态">
                     <Field name="dirty" title="dirty">{String(fState.dirty)}</Field>
                    <Field name="validate" title="validate">{String(fState.validate)}</Field>
                    <textarea style={{width:"100%",height:"80px"}} value={JSON.stringify(formData)} readOnly></textarea>
                </Card>
                <Card title="表单数据" buttons={[
                    {title:"更新",onClick:()=>setFormState(JSON.parse(JSON.stringify(Network.state)))}
                ]}>
                    <JsonViewer data={formState}/> 
                </Card>
            </div>
            
        </div>
        
    )
 } 



 export default FormDemo