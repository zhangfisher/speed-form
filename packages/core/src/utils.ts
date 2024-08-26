import { isPlainObject } from "flex-tools/typecheck/isPlainObject" 
import type { Dict } from "@speedform/reactive" 

/**
 * 判定一个值是否是原子类型
 * @param value 
 * @returns 
 */
export function isPrimitive(value:any){
	const t = typeof(value)
	return value==undefined || t =='boolean' || t =='number' || t == 'string' || t == null	
} 

/**
 * 简单的防抖函数
 * 
 * 1. 用于防止在短时间内多次执行
 * 2. 总是确保最后一次调用被执行
 * 
 * @param fn   函数
 */
export function debounce(fn:Function,interval:number=0){
	let timer:any = 0
	let lastCallArgs:any[] | undefined   // 调用参数
	let first:boolean = true

	const run = ()=>{
		if(lastCallArgs==undefined) {  // 已经没有再调用了
			first = true
			clearTimeout(timer)
			timer = 0
			return
		}
		try{
			const args = lastCallArgs
			lastCallArgs = undefined
			fn(...args)
			timer = setTimeout(()=>run(),interval)
		}finally{
			
		}					
	}

	return function(...args:any[]){		
		if(interval==0){
			return fn(...args)
		}else{
			lastCallArgs = args // 记住最后一次调用的参数
			if(first || timer==0){ 
				first = false
				run()
			}	 
		}
	}
}

// 比较两个对象，返回对象中值不同的属性
export function compareObject<T extends Record<string,any>>(a:T,b:T):Partial<T>{
	const result:any = {}
	for(const key in a){
		if(a[key]!==b[key]){
			result[key] = b[key]
		}
	}
	return result
}

/**
 * 生成一个随机id
 * @returns 
 */
export function getId(){
	return Math.random().toString(36).substring(2)
}

export type CreateObjectProxyOptions = {
	onBefore(key:string):void			// 读取对象之前的回调
	onAfter(key:string):void			// 读取对象之后的回调
}
/**
 * 创建一个Proxy对象,返回对fn的调用结果的代理
 * 
 * let d = createObjectProxy(()=>({a:1,b:2}))
 * 
 * 访问d对象时，会调用fn()返回的对象
 * 
 * 
 * 
 * 
 */
export function createObjectProxy<T extends Record<string | symbol,any>=Record<string | symbol,any>>(fn: () => T): T {
	return new Proxy<T>({} as T, {
	  get: (_:T, prop: keyof T) => {
		return fn()[prop];
	  },
	});
  }



export function isFormAction(data:Dict){
    return isPlainObject(data) && ('execute' in data) && isPlainObject(data.execute) && ('loading' in data.execute)
}
export function isFieldValue(data:Dict){
    return isPlainObject(data) && 'value' in data
}

export function isFieldList(data:Dict){
    return Array.isArray(data)
}

/**
 * 
 * 组类型，
 * 
 *  - 是一个{}
 *  - 没有value字段 
 * @param data  * 
 * @returns 
 */
export function isFieldGroup(data:Dict){
    return isPlainObject(data) && !isFieldValue(data) && !isFormAction(data)
}

export function isDev(){
	// @ts-ignore
	return process.env.NODE_ENV == 'development' || process.env.NODE_ENV === 'test';
}