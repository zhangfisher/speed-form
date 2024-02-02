import { ComputedScopeRef, Dict, computed,watch } from "helux-store";
import { createForm,action } from "speed-form";
// import { Project, getProjects } from "../api/getProjects";
import { delay } from "flex-tools/async/delay";
import validator from "validator"; 
let count =1 
// 声明表单数据
const formSchema = {
	dirty:watch<boolean>((value)=>{
		return value
	},(path)=>{
		return path[path.length-1] ==='value'
	}),
	enable:1,
	visible:async (fields:any)=>{
		await delay(2000)
		return true
	},
	fields: {
		// asyncTitle: { 
		// 	value: "React-Helux-Form",
		// 	placeholder: "输入网络配置名称",
		// 	title: "网络名称",
		// 	validate:computed<boolean>(async (value: string) => value.length > 3,)
		// },
		title: {
			value: "React-Helux-Form",
			placeholder: "输入网络配置名称",
			title: "网络名称",
			// 为什么此处的validate函数的第一个参数总是当前字段的值value？
			// 因为我们在创建表单时，对validate函数(计算函数)进行了处理，使得validate函数依赖于当前字段的值value
			//validate: (value: string) => value.length > 3,
		},
		interface: {
			value: "wifi",
			title: "网卡类型",
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
			validate: async (value: any) => {
				await delay(2000);
				return validator.isIP(value);
			},
		},
		spareIps:[
			{
				value: "1.1.1.2",
				title: "备用IP地址1"
			},
			{
				value: "1.1.1.3",
				title: "备用IP地址2"
			},
		],
		gateway: {
			value: "1.1.1.1",
			title: "网关地址",
			validate: (value: any) => validator.isIP(value),
		},
		dhcp: {
			enable: {
				title: "自动获取IP地址",
				value: true,
			},
			start: {
				title: "起始地址",
				value: "192.168.1.1",
				visible: computed<boolean>((dhcp: any) => {
						return dhcp.enable.value;
					},{ 
						scope: ComputedScopeRef.Parent
					}
				),
				validate: (value: any) => validator.isIP(value),
			},
			end: {
				title: "结束地址",
				value: "192.168.1.100",
				// 将visible的context指向父对象即dhcp
				visible: computed<boolean>((fields: any) => {
						return fields.dhcp.enable.value;
					},{ 
						scope: ComputedScopeRef.Root ,
						depends:["dhcp.enable.value"]
					}
				),
				validate: (value: any) => validator.isIP(value),
			},
		},
		wifi: {
			title: "无线配置",
			visible: (net: any) => (net as NetworkType).interface.value === "wifi",
			ssid: {
				value: "fast",
				placeholder: "无线网络",
				validate: (value: string) => value.length > 3,
			},
			password: {
				value: "123",
				placeholder: "输入无线密码",
				help: "密码长度应不小于6位",
				enable: (net: any) => (net as NetworkType).interface.value === "wifi",
				validate: (value: string) => value.length > 6,
			},
			submit: { // 这是一个动作,
				title: "提交wifi",
				enable: (net: any) => (net as NetworkType).interface.value === "wifi",
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
				})
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
						abortSignal()?.addEventListener("abort",()=>{
							console.log("已取消：cancelled")
							reject("cancelled")
						})
					})					
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
			validate:computed<true>(async (root: any)=>{
				return true
			}),
			execute: action(async (scope:any,{abortSignal}) => {				
				return new Promise<number>((resolve,reject)=>{
					setTimeout(()=>{
						resolve(count++)
					},2000)
					abortSignal()?.addEventListener("abort",()=>{
						console.log("已取消: cancelled")
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
            execute: async () => {
				await delay(1000)
                return 2
            }
        }
	},
};

type NetworkFormType = typeof formSchema;
type NetworkType = NetworkFormType['fields'];

const Network = createForm<NetworkFormType>(formSchema,{debug:true});


// @ts-ignore
globalThis.Network = Network;
export default Network;

// 直接调用表单动作
//Network.actions.ping.title




// dns:[],
// subnetMask:"",
// mac:"",
// openSource:{
//     repo:{
//         value:"",
//         title:"项目仓库地址",
//     },
//     project:{
//         value:"",
//         title:"项目名称",
//         select:computed<Project[]>(async ([repoUrl])=>{
//             await delay(1000)
//             return await getProjects(repoUrl)
//         },["openSource.repo.value"],{initial:[]}),
//     }
// }     network.actions.ping.run.loading
