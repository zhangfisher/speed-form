import { useRef } from "react" 
import { createForm, FormDefine,  FormSchema,  RequiredFormOptions } from "../form"


/**
 * 在组件中使用
 * 
 * 
 * 
 * const Book = useForm<>(()=>{{
 * 		name:"书籍名称"
 * 		fields:{
 * 		}
 * }},options)
 * 
 * 
 * @param schema 
 * @param options 
 * @returns 
 */
export function useForm<State extends FormDefine=FormDefine>(schema:()=>State,options?:RequiredFormOptions<FormSchema<State>>) {
	type FormType = ReturnType<typeof createForm<State>>
	const ref = useRef<FormType>()
	if(ref.current==null){
		ref.current = createForm(schema(),options)
	}
	return ref.current  
}