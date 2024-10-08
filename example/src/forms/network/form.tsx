import { computed,ComputedScopeRef, Dict } from "@speedform/reactive";
import { action, createForm } from "@speedform/core";
import { delay } from "flex-tools/async/delay";
import validator from "validator";

let count = 0

 

const Network = createForm({
	title: "网络配置",
	fields: {
		title: {
			value: "React-Helux-Form",
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
			validate: computed(async (value) => {
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
			submit: action(async (wifi:any)=>{
				await delay(2000)
				console.log("提交wifi=",wifi)
			},{
				title: "提交wifi",
				enable: (net: any) => net.interface.value === "wifi"
			}),
			timeoutSubmit: action(async (wifi:any)=>{
				await delay(6000)
				console.log("提交wifi=",wifi)
			},{
				title: "提交超时",
				timeout:[5 * 1000,5]					
			}),
			progressSubmit: action(async (fields:any,{getProgressbar,getSnap})=>{
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
			},{title: "提交进度"}),
			retrySubmit: action(async ()=>{
				throw new Error("ERROR"+count++)
			},{					
				title: "提交出错重试",
				retry:[5,1000]	// 重试5次，每次间隔1秒					
			}),
			progressSubmit2: action(async (fields,{getProgressbar})=>{
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
			},{
				title: "提交进度2"
			}),
			standardSubmit: action(async (fields)=>{
				console.log("formData=",fields)
			},{
				title: "标准提交"				
			}),
			cancelableSubmit:action(async (fields,{abortSignal})=>{
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
				title: "可取消的提交", 
				scope:["dhcp"],
			}) 
		}
	},
	actions: {
		submit: action(async (_:any,{abortSignal}) => {		
			return new Promise<number>((resolve,reject)=>{
				setTimeout(()=>{
					resolve(count++)
				},2000)
				abortSignal.addEventListener("abort",()=>{
					reject("cancelled")
				})
			})			 
		},{
			title: "提交",
			enable: (root: any) => {
				return root.fields.wifi.ssid.value.length > 3
			}
		}),
		errorSubmit: action(async () => {
			await delay(1000);
			throw new Error("提交错误"+count++);
		},{
			title: "提交错误" 
		}),		
		timeoutSubmit: action(async (scope: Dict) => {
			console.log("ping=",Object.assign({},scope));
			await delay(5000);								
		},{title: "提交超时倒计时",timeout:2000}),
		ping: action(async (a: Dict) => {
			await delay(1000);
			console.log("ping=",Object.assign({},a));
		},{
			title: "测试网络连通性",
			enable: computed((wifi: any) => {
				return wifi.ssid.value.length > 0
			},{
				scope:"fields.wifi"
			})
		}),		
        // 向导表单:上一步
        previous:action<Dict>(async (scope)=>{
			return scope
		},{
			enable: (wifi: any) => wifi.ssid.value.length > 0
		}),
        // 向导表单:下一步        
        next:action(async () => {
			await delay(1000)
			return 2
		},{
			enable: (wifi: any) => wifi.ssid.value.length > 0,
			visible:(scope:any)=>scope.orders.length<10,
		})
	},
},{debug:true});

Network.fields.title
Network.fields.ip.validate
Network.fields.wifi.title
Network.fields.wifi.ssid.validate
Network.fields.wifi.progressSubmit.execute
Network.fields.wifi.timeoutSubmit.execute
Network.fields.wifi.cancelableSubmit.execute

// @ts-ignore
globalThis.Network = Network;
export default Network;
 
 


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