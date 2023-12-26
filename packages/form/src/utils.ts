
/**
 * 判断是否是表单字段是否是一个简单的字段
 * 
 * 简单的字段没有{value:<>}形式


 * @param obj
 */
export function isLiteField(value: any): boolean {
	return !(typeof value === "object" && "value" in value)
}



export function isAtomType(value:any){
	const t = typeof(value)
	if(t=='boolean'
		|| t =='number'
		|| t == 'string'
		|| t == undefined	
	) return true
}