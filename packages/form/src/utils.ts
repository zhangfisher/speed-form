
/**
 * 判断是否是表单字段是否是一个简单的字段
 * 
 * 简单的字段没有{value:<>}形式


 * @param obj
 */
export function isLiteField(value: any): boolean {
	return !(typeof value === "object" && "value" in value)
}



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
 * 1. 用于防止在短时间内多次触发
 * 2. 总是确保最后一次调用被执行
 * 
 * @param fn   函数
 */
export function debounce(fn:Function,interval:number=0){
	let timer:any = 0
	let lastCallArgs:any[] | undefined   // 调用参数
	let first:boolean = true

	const run = ()=>{
		// 已经没有再调用了
		if(lastCallArgs==undefined) {
			first = true
			clearTimeout(timer)
			timer = 0
			return
		}
		try{
			const args = lastCallArgs
			lastCallArgs = undefined
			console.log("--")
			fn(...args)
			timer = setTimeout(()=>run(),interval)
		}finally{
			
		}					
	}

	return function(...args:any[]){		
		if(interval==0){
			fn(...args)
		}else{
			lastCallArgs = args
			if(first || timer==0){ 
				first = false
				run()
			}	 
		}
		
		
	}
}


// function fn(n:number){
// 	console.log(n,' - ',new Date().getMilliseconds())
// }

// const dfn = debounce(fn,2000)
// let count=0
// setInterval(()=>{
// 	dfn(++count)
// },100)




