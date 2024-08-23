import React from "react"
import { computed,ComputedScopeRef, Dict } from "@speedform/reactive";
import { action, createForm } from "@speedform/core";
import { delay } from "flex-tools/async/delay";
import validator from "validator";
import { useCallback, useState } from "react";
import classnames from 'classnames';
import {Card,JsonViewer, Button,Divider,Field,Input  } from "@speedform/demo-components";
 
let count = 0


const Network = createForm({
	title: "网络配置",
	fields: {
		title: {
			value: "React-Speed-Form",
			placeholder: "输入网络配置名称",
			title: "网络名称",
			validate: (value:string) => value.length > 3,
		},
		mtu:{
			value: 1500,
			title: "MTU",
			validate: (value: number) => value > 0 && value < 1500,
		},
		interface: {
			value: "wifi",
			title: "网卡类型",
			enable: true,
			select: () => {
				return [
					{ value: "wifi", title: "无线网卡" },
					{ value: "ethernet", title: "有线网卡" },
				];
			},
		},
		ip: {
			value: "1.1.1.1",
			title: "IP地址",
			validate: computed(async (value: any) => {
				await delay(2000);
				return validator.isIP(String(value));
			},[],{async:true}),
		},
		gateway: {
			value: "1.1.1.1",
			title:"网关地址",
			validate: computed(async (value: any) => {
				await delay(2000);
				return validator.isIP(value)
			},[],{async:true}),
		},
		dhcp: {
			enable: {
				title: "自动获取IP地址",
				value: true,
			},
			start: {
				title: "起始地址",
				value: "192.168.1.1",
				enable: computed<boolean>((dhcp: any) => {
						return dhcp.enable.value;
				},{
					scope: ComputedScopeRef.Parent
				}),
				validate: (value:string) => validator.isIP(value),
			},
			end: {
				title: "结束地址",				
				value: "192.168.1.100",
				// 将visible的context指向父对象即dhcp
				enable: computed<boolean>((fields: any) => {
					return fields.dhcp.enable.value;
				},{
					scope: ComputedScopeRef.Root
				}),
				validate: (value: any) => validator.isIP(value),
			},
		},
		dns:[
			{ name:"masterDns", title:"DNS服务器",value:"8.8.8.8"},
			{ name:"slaveDns" , title:"备用DNS服务器",value:"4.4.4.4"}
		] ,
		wifi: {
			title: "无线配置",
			visible: computed<boolean>((net: any) => {
				return net.interface.value === "wifi"
			},{scope:ComputedScopeRef.Root}),
			ssid: {
				value: "fast",
				placeholder: "无线网络",
				validate: (value: string) => value.length > 3,
			},
			signal: {
				value: 1,
				placeholder: "无线网络",
				validate: (value: string) => value.length > 3,
			},
			password: {
				value: "123",
				placeholder: "输入无线密码",
				help: "密码长度应不小于6位",
				validate: (value: string) => value.length >= 6,
			},
			submit: { // 这是一个动作,
				title: "提交wifi",
				enable: (net: any) => net.interface.value === "wifi",
				validate: (value: string) => value.length > 6,
				execute:async (wifi:any)=>{
					await delay(2000)
					console.log("提交wifi=",wifi)
				}
			},
			timeoutSubmit: { // 这是一个动作,
				title: "提交超时",
				execute:computed(async (wifi:any)=>{
					await delay(6000)
					console.log("提交wifi=",wifi)
				},[],{
					timeout:[5 * 1000,5]
				})
			},
			progressSubmit: { // 这是一个动作,
				title: "提交进度",
				execute:computed(async (fields:any,{getProgressbar,getSnap})=>{
					const bar = getProgressbar()
					console.log("submit fields=",getSnap(fields))
					return new Promise<void>((resolve)=>{
						let count = 0 , tmId = 0
						tmId = setInterval(()=>{
							if(count==100){
								clearInterval(tmId)
								resolve()
							}
							bar.value(count++)							
						},200)
					})					
				},[])
			},
			retrySubmit: { // 这是一个动作,
				title: "提交出错重试",
				execute:computed(async ()=>{
					throw new Error("ERROR"+count++)
				},[],{
					retry:[5,1000]	// 重试5次，每次间隔1秒
				})
			},
			progressSubmit2: { // 这是一个动作,
				title: "提交进度2",
				validate:async ()=>{
					return true
				},
				execute:action(async (fields,{getProgressbar})=>{
					console.log("submit fields=",fields)
					const bar = getProgressbar()
					return new Promise<void>((resolve)=>{
						let count = 0 , tmId = 0
						tmId = setInterval(()=>{
							if(count==100){
								clearInterval(tmId)
								resolve()
							}
							bar.value(count++)							
						},200)
					})					
				})
			},
			standardSubmit: { // 这是一个动作,
				title: "标准提交",
				execute:action(async (fields)=>{
					console.log("formData=",fields)
				})
			},
			cancelableSubmit: { // 这是一个动作,
				title: "可取消的提交", 
				execute:action(async (fields,{abortSignal})=>{
					console.log("formData=",fields)	
					return new Promise<void>((resolve,reject)=>{
						setTimeout(()=>{
							resolve()
						},10* 1000)
						abortSignal.addEventListener("abort",()=>{
							console.log("已取消：cancelled")
							reject("cancelled")
						})
					})					
				},{
					scope:["dhcp"]
				})
			}
		}
	},
	actions: {
		submit: {
			title: "提交",
			enable: (root: any) => {
				return root.fields.wifi.ssid.value.length > 3
			},
			execute: action(async (scope:any,{abortSignal}) => {		
				console.log(scope)
				return new Promise<number>((resolve,reject)=>{
					setTimeout(()=>{
						resolve(count++)
					},2000)
					abortSignal.addEventListener("abort",()=>{
						reject("cancelled")
					})
				})			 
			}),
		},
		errorSubmit: {
			title: "提交错误", 
			execute: async () => {
				await delay(1000);
				throw new Error("提交错误"+count++);
			},
		},		
		timeoutSubmit: {
			title: "提交超时倒计时", 
			execute: computed(async () => {
				await delay(5000);								
			},[],{timeout:2000}),
		},
		ping: {
			title: "测试网络连通性",
			scope: "wifi", // 表示该动作的上下文是wifi这个子表单
			enable: (wifi: any) => wifi.ssid.value.length > 0,
			execute: async (a: Dict) => {
				await delay(2000);
				console.log(a);
			},
		},		
        // 向导表单:上一步
        previous:{
            enable: (wifi: any) => wifi.ssid.value.length > 0,
			execute:async ()=>{
				return 1
			}
        },
        // 向导表单:下一步        
        next:{
            enable: (wifi: any) => wifi.ssid.value.length > 0,
			visible:(scope:any)=>scope.orders.length<10,
            execute: async () => {
				await delay(1000)
                return 2
            }
        }
	},
},{debug:true});

 
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
            {({title,visible} )=>{ 
                return (
                <Card title={title}  visible={visible}>
                    <Network.Field name="wifi.ssid">                      
                            {({name,value,required,visible,validate,enable,initial,sync})=>{ 
                                console.log(required,visible,validate,enable,initial)
                                return  <Field  name={name}  label="SSID" enable={enable}> 
                                         <Input name={name}  className={classnames({invalid:validate===false})} value={value} onChange={sync()} />
                                </Field>
                            } }
                        </Network.Field>      
                        <Network.Field name="wifi.password">                      
                            {({name,value,enable,validate,placeholder,help,sync})=>{ 
                                return  <Field name={name}  label="密码" enable={enable} className={classnames({invalid:validate===false})} > 
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


export default  ()=>{
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

    const { run } = Network.useAction(async (scope:any)=>{
        console.log("scope=",scope)
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

// const form = createForm({
// 	title:computed<string>(async ()=>"true"),
// 	// dirty:computed<boolean>(()=>true),
// 	// validate: computed(async ()=>{
// 	// 	return true
// 	// },["username"]),	
// 	fields:{
// 		username:{
// 			value:""
// 		},
// 		password:{
// 			title:'',
// 			value:""
// 		},
// 		age:{
// 			value:true,
// 			validate: computed(async ()=>{
// 				return true
// 			},["username"])
// 		},
// 		wifi:{
// 			ssid:{
// 				value:111111
// 			},
// 			password:{
// 				value:""
// 			}
// 		}
// 	},
// 	actions:{

// 	}
// })
// form.fields.username.value="123"
// form.state.fields.username.value="123"
// form.state 
// form.state.fields.age.value=true
// form.state.fields.age.validate
// form.state.fields.wifi.password.value
// form.state.fields.wifi.ssid.value
// form.state.title
// form.state.dirty = true
// form.state.fields.wifi.password.value
// form.state.validate=true
// form.fields.age.value=true 

// form.setState(draft=>{
// 	draft.fields.username.value="123"
// 	draft.fields.age.value=true
// 	draft.fields.wifi.password.value="123"
// 	draft.dirty = true
// 	form.state.fields.age.validate.loading
// }) 