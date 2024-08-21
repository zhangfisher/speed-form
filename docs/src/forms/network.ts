import { computed,ComputedScopeRef } from "@speedform/reactive";
import { createForm } from "@speedform/core";
import { delay } from "speedform-docs/utils";
import validator from "validator";

export const schema = {
	title: "网络配置",
	fields: {
		title: {
			value: "React-Helux-Form",
			placeholder: "输入网络配置名称",
			title: "网络名称",
			validate: (value: string) => value.length > 3,
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
			validate: computed(async (value: any) => {
				await delay(2000);
				return validator.isIP(String(value));
			},[],{async:true}),
		},
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
				enable: computed<boolean>((dhcp: any) => {
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
				enable: computed<boolean>((fields: any) => {
						return fields.dhcp.enable.value;
					},{
						scope: ComputedScopeRef.Root
					}
				),
				validate: (value: any) => validator.isIP(value),
			},
		},
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
			password: {
				value: "123",
				placeholder: "输入无线密码",
				help: "密码长度应不小于6位",
				enable: (net: any) => (net as NetworkType).interface.value === "wifi",
				validate: (value: string) => value.length >= 6,
			}
    }
  }
}




export const Network = createForm(schema,{debug:true});


export type NetworkFormType = typeof schema;
export type NetworkType = (typeof Network.state)['fields'];


// @ts-ignore
globalThis.Network = Network;


