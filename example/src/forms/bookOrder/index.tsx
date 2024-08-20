import React, { MouseEvent } from "react";
import classnames from 'classnames';
import { Field,JsonViewer,Card } from "@speedform/demo-components";
import BookOrders from "./form";





const NetworkForm = ()=>{    
    return <BookOrders.Form className="panel">
       <div data-loader="circle"></div>
        <Card title="网络配置">
          <BookOrders.Field<string> name="title">                      
                {({title,value,required,visible,validate,enable,placeholder,sync})=>{ 
                    console.log(required,visible,validate,enable)
                    return <Field visible={visible} label={title}>
                         <input className={classnames({invalid:!validate})} placeholder={placeholder} value={value} onChange={sync()}/>
                    </Field>
                } }
            </BookOrders.Field>
             <BookOrders.Field<typeof BookOrders.fields.interface> name="interface">                      
                {({title,required,visible,validate,enable,value,initial,select,sync})=>{     
                    console.log(required,visible,validate,enable,initial)
                    return <Field label={title}>                        
                        <select value={value} onChange={sync()}>
                            {select.map((item:any, index:number) => (
                                <option  key={index} value={item.value}>{item.title}</option>
                            ))}
                            {value}
                        </select>({value})       
                    </Field>
                }}
            </BookOrders.Field> 
            <BookOrders.Field<typeof BookOrders.fields.ip> name="ip">                      
                {({title,value,visible,validate,placeholder,sync})=>{ 
                    return <Field visible={visible} label={title}>
                         <input className={classnames({invalid:!validate.result})} placeholder={placeholder} value={value} onChange={sync(100)}/>
                    </Field> 
                } }
            </BookOrders.Field>
            <BookOrders.Field<typeof BookOrders.fields.gateway> name="gateway">                      
                {({title,value,required,visible,validate,update,enable,placeholder,sync})=>{ 
                    console.log(required,visible,validate,enable)
                    return <Field visible={visible} label={title}>
                        <input className={classnames({invalid:!validate})} placeholder={placeholder} value={value} onChange={sync()}/>
                        <button onClick={(event:MouseEvent)=>{
                            update((state:any)=>{
                                state.gateway.value='192.168.1.2'
                            })
                            event.preventDefault();
                        }}>恢复</button>
                        <button onClick={(event:MouseEvent)=>{
                            update('192.168.1.1');
                            event.preventDefault(); 
                        }}>更新值</button>
                    </Field>
                } }
            </BookOrders.Field>
          <BookOrders.Group<typeof BookOrders.fields.wifi> name="wifi">
            {({title,visible} )=>{ 
                return (
                <Card title={title}  visible={visible}>
                    <BookOrders.Field name="wifi.ssid">                      
                            {({value,required,visible,validate,enable,initial,sync})=>{ 
                                console.log(required,visible,validate,enable,initial)
                                return  <Field label="SSID" enable={enable}> 
                                         <input className={classnames({invalid:!validate})} value={value} onChange={sync()} />
                                </Field>
                            } }
                        </BookOrders.Field>      
                        <BookOrders.Field name="wifi.password">                      
                            {({value,enable,validate,placeholder,help,sync})=>{ 
                                return  <Field label="密码" enable={enable} className={classnames({invalid:!validate})} > 
                                         <input className={classnames({invalid:!validate})} data-help={help} value={value} placeholder={placeholder} onChange={sync()} readOnly={!enable}/>                               
                                </Field>
                            } }
                        </BookOrders.Field> 
                </Card>)
            }}
         </BookOrders.Group>  
         <BookOrders.Field<typeof BookOrders.fields.dhcp.enable> 
            name="dhcp.enable"
            render={({title,visible,value,validate,sync})=>{     
                    return <Field visible={visible} label={title}>
                         <input className={classnames({invalid:!validate})} type='checkbox' checked={value}  onChange={sync()}/>
                    </Field>
                }}            
            >                                       
            
            </BookOrders.Field> 
             
           <BookOrders.Field<typeof BookOrders.fields.dhcp.enable> name="dhcp.enable" >                                       
                {({title,visible,value,validate,sync})=>{     
                    return <Field visible={visible} label={title}>
                         <input className={classnames({invalid:!validate})} type='checkbox' checked={value}  onChange={sync()}/>
                    </Field>
                }}
            </BookOrders.Field> 
           <BookOrders.Field<typeof BookOrders.fields.dhcp.start> name="dhcp.start">                      
                {({value,validate,visible,title,sync})=>{ 
                    return  <Field visible={visible} label={title}>
                        <input className={classnames({invalid:!validate})} value={value} onChange={sync()}/>
                    </Field>
                } }
            </BookOrders.Field>
            <BookOrders.Field<typeof BookOrders.fields.dhcp.end> name="dhcp.end">                      
                {({value,validate,visible,title,sync})=>{     
                    return <Field visible={visible} label={title}>
                        <input className={classnames({invalid:!validate})} value={value} onChange={sync()}/>
                    </Field>
                }}
            </BookOrders.Field>   
        </Card>
    </BookOrders.Form>        
}



const FormDemo:React.FC = ()=>{
    // 如果缺少以下两句，则state.select无法触发setOnReadHook 
    const [state] = BookOrders.useState()
    // useEffect(()=>{
    //  JSON.stringify(state.interface.select)
    // })
    
    // state.dhcp.start.validate.value

    return (
        <div style={{display:"flex",flexDirection:'row',padding:"8px",margin:"8px"}}>
            <div style={{padding:"8px",margin:'8px',width:'60%'}}>
                <NetworkForm/>
                {/* <NetworkForm/> */}
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