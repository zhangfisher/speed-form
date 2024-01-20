import React, { useCallback } from "react";
import Card from "./components/Card"  
import Network from './forms/network';
import JsonViewer from "./components/JsonViewer" 
import { AsyncComputedObject } from "helux-store";  
import classnames from 'classnames';
import { ReactFC } from "./types"; 
import ColorBlock from "./components/ColorBlock";
import { Loading } from "./components/Loading";  
import { Button } from "./components/Button";
import { ActionRunOptions } from '../../packages/form/src/action';

const FieldRow:ReactFC<{label?:string,visible?:boolean,enable?:boolean}> = ({enable,visible,label,children})=>{
    return  (
        <div  className="field"  style={{
            position:'relative',
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
            <ColorBlock style={{
                position:'absolute',
                right:0,
                fontSize:'10px',
                borderRadius: '4px',
            }}  title="渲染计数"/>     
        </div>   
    )
}

const ValidResult:React.FC<React.PropsWithChildren<{validate: boolean | AsyncComputedObject<boolean>,help?:string}>> = ({validate,help})=>{
    // 如果是同步校验，则validate是一个boolean
    const isAsycValidate = typeof(validate)!=='boolean'
    //
    const isValid = isAsycValidate ? validate.value :  validate 
    
    const isValiding = isAsycValidate ? validate.loading: false
    
    // 无效时的提示
    const invalidTips:string= isAsycValidate ? validate.error : help
    return <span style={{
        color:'red',
        display: isValiding || !isValid ? 'flex'  : 'none' 
    }}>         
    <Loading visible={isValiding} tips="正在验证..."/>
    { !isValiding && (isValid ?  '' : invalidTips ) }
</span>
}

const NetworkForm = ()=>{     
    
    return <Network.Form className="panel">
       <div data-loader="circle"></div>
        <Card title="网络配置">
          <Network.Field<string> name="title">                      
                {({title,value,required,visible,validate,enable,placeholder,sync})=>{ 
                    console.log(required,visible,validate,enable)
                    return <FieldRow visible={visible} label={title}>
                         <input className={classnames({invalid:!validate})} placeholder={placeholder} value={value} onChange={sync()}/>
                        <ValidResult validate={validate}/>
                    </FieldRow>
                } }
            </Network.Field>
             <Network.Field<typeof Network.fields.interface> name="interface">                      
                {({title,required,visible,validate,enable,value,defaultValue,select,sync})=>{     
                    console.log(required,visible,validate,enable,defaultValue)
                    return <FieldRow label={title}>                        
                        <select value={value} onChange={sync()}>
                            {select.map((item:any, index:number) => (
                                <option  key={index} value={item.value}>{item.title}</option>
                            ))}
                            {value}
                        </select>({value})       
                    </FieldRow>
                }}
            </Network.Field> 
             <Network.Field<typeof Network.fields.ip> name="ip">                      
                {({title,value,visible,validate,placeholder,sync})=>{ 
                    return <FieldRow visible={visible} label={title}>
                         <input className={classnames({invalid:!validate.value})} placeholder={placeholder} value={value} onChange={sync(100)}/>
                        <ValidResult validate={validate}/> 
                    </FieldRow> 
                } }
            </Network.Field>
            <Network.Field<typeof Network.fields.gateway> name="gateway">                      
                {({title,value,required,visible,validate,update,enable,placeholder,sync})=>{ 
                    console.log("更新网关地址：",required,visible,validate,enable)
                    return <FieldRow visible={visible} label={title}>
                        <input className={classnames({invalid:!validate})} placeholder={placeholder} value={value} onChange={sync()}/>
                        <button onClick={update((state:any)=>{
                                state.gateway.value='192.168.1.2'
                            })}>恢复</button>
                        <button onClick={update('192.168.1.1')}>更新值</button>
                        <ValidResult validate={validate}/>
                    </FieldRow>
                } }
            </Network.Field>
          <Network.Group<typeof Network.fields.wifi> name="wifi">
            {({title,visible} )=>{ 
                return (
                <Card title={title}  visible={visible}>
                    <Network.Field name="wifi.ssid">                      
                            {({value,required,visible,validate,enable,defaultValue,sync})=>{ 
                                console.log(required,visible,validate,enable,defaultValue)
                                return  <FieldRow label="SSID" enable={enable}> 
                                         <input className={classnames({invalid:!validate})} value={value} onChange={sync()} />
                                </FieldRow>
                            } }
                        </Network.Field>      
                        <Network.Field name="wifi.password">                      
                            {({value,enable,validate,placeholder,help,sync})=>{ 
                                return  <FieldRow label="密码" enable={enable} className={classnames({invalid:!validate})} > 
                                         <input className={classnames({invalid:!validate})} data-help={help} value={value} placeholder={placeholder} onChange={sync()} readOnly={!enable}/>                               
                                         <ValidResult help={help} validate={validate}/>
                                </FieldRow>
                            } }
                        </Network.Field> 
                </Card>)
            }}
         </Network.Group>                
           <Network.Field<typeof Network.fields.dhcp.enable> name="dhcp.enable" >                                       
                {({title,visible,value,validate,sync})=>{     
                    return <FieldRow visible={visible} label={title}>
                         <input className={classnames({invalid:!validate})} type='checkbox' checked={value}  onChange={sync()}/>
                    </FieldRow>
                }}
            </Network.Field> 
           <Network.Field<typeof Network.fields.dhcp.start> name="dhcp.start">                      
                {({value,validate,visible,title,sync})=>{ 
                    return  <FieldRow visible={visible.value} label={title}>
                        <input className={classnames({invalid:!validate})} value={value} onChange={sync()}/>
                    </FieldRow>
                } }
            </Network.Field>
            <Network.Field<typeof Network.fields.dhcp.end> name="dhcp.end">                      
                {({value,validate,visible,title,sync})=>{     
                    return <FieldRow visible={visible.value} label={title}>
                        <input className={classnames({invalid:!validate})} value={value} onChange={sync()}/>
                    </FieldRow>
                }}
            </Network.Field>   
            <Network.Action<typeof Network.fields.wifi.submit> name="fields.wifi.submit" >
                {({title,visible,loading,enable,run,timeout,error,value})=>{ 
                    console.log("action submit",loading,enable,timeout,error,value)
                    return <Button loading={loading} timeout={timeout} visible={visible} enable={enable} onClick={run()}>{title}</Button>
                }}
            </Network.Action>
            <Network.Action<typeof Network.fields.wifi.timeoutSubmit> name="fields.wifi.timeoutSubmit" >
                {({title,visible,loading,enable,run,error,timeout})=>{ 
                    return <Button loading={loading} timeout={timeout} visible={visible} enable={enable} onClick={run()}>{title}{error}</Button>
                }}
            </Network.Action>
            <Network.Action<typeof Network.fields.wifi.progressSubmit> name="fields.wifi.progressSubmit" >
                {({title,visible,loading,enable,run,error,progress})=>{ 
                    return <Button loading={loading} timeout={progress} visible={visible} enable={enable} onClick={run()}>{title}{error}</Button>
                }}
            </Network.Action>
            <Network.Action<typeof Network.fields.wifi.progressSubmit2> name="fields.wifi.progressSubmit2" >
                {({title,visible,loading,enable,run,error,progress})=>{ 
                    return <Button loading={loading} timeout={progress} visible={visible} enable={enable} onClick={run()}>{title}{error}</Button>
                }}
            </Network.Action>
        </Card>
    </Network.Form>        
}


const FormDemo:React.FC = ()=>{
    // 如果缺少以下两句，则state.select无法触发setOnReadHook 
    const [state] = Network.useState()
 
    const submit = useCallback((options?:ActionRunOptions)=>{
        Network.actions.submit(options).then((result)=>{
            console.log("提交结果：",result)
        }).catch((error)=>{
            console.log("提交错误：",error)
        })
    },[])
  
    // Network.state.actions.ping.execute

    // state.dhcp.start.validate.value

    return (
        <div style={{display:"flex",flexDirection:'row',padding:"8px",margin:"8px"}}>
            <div style={{padding:"8px",margin:'8px',width:'60%'}}>
                <NetworkForm/>
                {/* <NetworkForm/> */}
                <button onClick={()=>submit()}>提交</button>
                <button onClick={()=>submit({timeout:1000})}>提交超时</button>
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