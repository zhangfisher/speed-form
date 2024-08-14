import { useRef } from "react"
import { Dict } from ".."
import { createForm, FormOptions } from "../form"


/**
 * 在组件中使用
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
export function useForm<State extends Dict=Dict>(schema:()=>State,options?:FormOptions<State>) {
	const ref = useRef<>()
	if(ref.current==null){
		ref.current = createForm<ReturnType<typeof schema>>(schema(),options)
	}
	return ref.current
}