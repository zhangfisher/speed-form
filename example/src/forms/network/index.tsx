import React, { useCallback, useState } from "react";
import Network from './form';
import classnames from 'classnames';
import {Card,JsonViewer, Button,Divider,Field,Input  } from "@speedform/demo-components";
 
 
const NetworkForm = ()=>{         
    Network.state.fields.wifi.password.value
    return <Network.Form className="panel">
       <div data-loader="circle"></div>
        <Card title="网络配置">
             <Network.Field<typeof Network.fields.interface> name="interface">                      
                {({name,title,required,visible,validate,enable,value,initial,select,sync})=>{     
                    console.log(name,required,visible,validate,enable,initial)
                    return <Field name="interface" label={title}>                        
                        <select name={name} value={value} onChange={sync()}>
                            {select.map((item:any, index:number) => (
                                <option  key={index} value={item.value}>{item.title}</option>
                            ))}
                        </select>
                    </Field>
                }}
            </Network.Field> 
             <Network.Field<typeof Network.fields.ip> name="ip">                      
                {({name,title,value,visible,validate,placeholder,sync})=>{ 
                    return <Field  name="ip" visible={visible} label={title} validate={validate}>
                         <Input name={name} validate={validate.result}  className={classnames({invalid:validate.result===false})} placeholder={placeholder} value={value} onChange={sync(100)}/>
                    </Field> 
                } }
            </Network.Field>
            <Network.Field<typeof Network.fields.gateway> name="gateway">                      
                {({name,title,value,visible,validate,update,placeholder,sync})=>{ 
                    return <Field name="gateway" visible={visible} label={title} validate={validate} >
                        <Input name={name}   validate={validate.result}  className={classnames({invalid:validate.result===false})} placeholder={placeholder} value={value} onChange={sync()}/>
                        <button onClick={update((state:any)=>{
                                state.gateway.value='192.168.1.2'
                            })}>恢复</button>
                        <button onClick={update('192.168.1.1')}>更新值</button>
                    </Field>
                } }
            </Network.Field>
          <Network.Group<typeof Network.fields.wifi> name="wifi">
            {({name,title,visible} )=>{ 
                return (
                <Card title={title}  visible={visible}>
                    <Network.Field name="wifi.ssid">                      
                            {({value,required,visible,validate,enable,initial,sync})=>{ 
                                console.log(required,visible,validate,enable,initial)
                                return  <Field  name="wifi.ssid" label="SSID" enable={enable}> 
                                         <Input name={name}  className={classnames({invalid:validate===false})} value={value} onChange={sync()} />
                                </Field>
                            } }
                        </Network.Field>      
                        <Network.Field name="wifi.password">                      
                            {({value,enable,validate,placeholder,help,sync})=>{ 
                                return  <Field name="wifi.password" label="密码" enable={enable} className={classnames({invalid:validate===false})} > 
                                         <Input name={name}  validate={validate} className={classnames({invalid:validate===false})} data-help={help} value={value} placeholder={placeholder} onChange={sync()} readOnly={!enable}/>                               
                                </Field>
                            } }
                        </Network.Field> 
                </Card>)
            }}
         </Network.Group>                
           <Network.Field<typeof Network.fields.dhcp.enable> name="dhcp.enable" >                                       
                {({name,title,visible,value,validate,sync})=>{     
                    return <Field  name='dhcp.enable' visible={visible} label={title}>
                         <input name={name}  className={classnames({invalid:validate===false})} type='checkbox' checked={value}  onChange={sync()}/>
                    </Field>
                }}
            </Network.Field> 
           <Network.Field<typeof Network.fields.dhcp.start> name="dhcp.start">                      
                {({name,value,validate,visible,title,enable,sync})=>{ 
                    return  <Field name="dhcp.start"  enable={enable} visible={visible} label={title}>
                        <Input name={name}  enable={enable}  className={classnames({invalid:validate===false})} value={value} onChange={sync()}/>
                    </Field>
                } }
            </Network.Field>
            <Network.Field<typeof Network.fields.dhcp.end> name="dhcp.end">                      
                {({name,value,validate,visible,title,enable,sync})=>{     
                    return <Field name="dhcp.end" enable={enable} visible={visible} label={title}>
                        <Input name={name}  enable={enable}  className={classnames({invalid:validate===false})} value={value} onChange={sync()}/>
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
                            <Input type="submit" value="提交"/>
                            <Button loading={loading} cancel={cancel} timeout={progress} visible={visible} enable={enable} error={error} onClick={run()}>{title}</Button>
                        </>
                    }}
                </Network.Action>     
                {/* <Network.Submit>
                    {({title,dirty,validate})=>{ 
                        return <>
                             <button type="submit" value={title}/>
                             dirty={String(dirty)},validate={String(validate)}
                        </>
                    }}
                </Network.Submit>       */}
                
                <Network.Action<typeof Network.actions.timeoutSubmit> name="actions.timeoutSubmit" >
                    {({title,visible,loading,enable,run,cancel,error,progress})=>{ 
                        return <>
                            <Button loading={loading} cancel={cancel} timeout={progress} visible={visible} enable={enable} error={error} onClick={run()}>{title}</Button>
                        </>
                    }}
                </Network.Action>        
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

    const { run } = Network.useAction(async (scope:any,params)=>{
        console.log("scope=",scope,params)
    })


 
    return (
        <div style={{display:"flex",flexDirection:'row',padding:"8px",margin:"8px"}}>
            <div style={{padding:"8px",margin:'8px',width:'60%'}}>
                <NetworkForm/>
                {/* <NetworkForm/> */}
                <button onClick={()=>submit(Network.state.actions.next)}>提交</button>
                <button onClick={()=>submit(Network.state.actions.timeoutSubmit)}>提交超时</button>
                <span>
                <button onClick={()=>run()}>UseAction</button>
                </span> 
            </div>
            <div style={{padding:"8px",margin:'8px',width:'40%'}}> 
                <Card title="表单状态" buttons={[
                    {title:'Save',onClick:()=>setFormData(Network.getValues())},
                    {title:'Load',onClick:()=>Network.load(formData)},
                ]}>
                     <Field name="dirty" label="dirty">{String(fState.dirty)}</Field>
                    <Field name="validate" label="validate">{String(fState.validate)}</Field>
                    <textarea 
                        style={{width:"100%",height:"200px"}} 
                        value={JSON.stringify(formData)}
                        onChange={(e)=>setFormData(JSON.parse(e.target.value))}
                    ></textarea>
                    <div>Save: 获取表单数据</div>
                    <div>Load: 修改以上数据后，将数据加载到表单中</div>
                </Card>                
                <Card title="表单结构" buttons={[
                    {title:"更新",onClick:()=>setFormState(JSON.parse(JSON.stringify(Network.state)))}
                ]}>
                    <JsonViewer data={formState}/> 
                </Card>
            </div>
            
        </div>
        
    )
 } 



 export default FormDemo