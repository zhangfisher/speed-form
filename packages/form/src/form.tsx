/**
 *
 * const MyComponent = ()=>{
 *
 * // 用来保存表单数据
 * const Book = useFrom({
 *          name:"书籍名称"
 *          author:{
 *              value:0,
 *              default:10,
 *              visible:(book)=>{},
 *              enable:(book)=>{},
 *              validate:(book)=>{},
 *              enum:async (book)=>{}
 *          },
 *          category:async((book)=>{
 *              return await getBookCategorys()
 *          }),
 *          price:100
 * })
 *
 *
 * return (
 *      <Book.Form>
 *          <Book.Field name={Book.name}>
 *              {({value,enable,visible,default})=>{
 *                  return <input value={value}/>
 *              }}
 *          </Book.Field>
 *          <Book.Field name={newBook.state.price}>
 *               {({value,enable,visible,default})=>{
 *                  return <input value={value}/>
 *              }}
 *          </Book.Field>
 *      </Book.Form>
 *   )
 * }
 *
 */

import React, {	useCallback } from "react";
import { type StoreDefine, createStore,RequiredComputedState, AsyncComputedObject, ComputedContextTarget } from "helux-store";
import type { ReactFC,  FormData, Dict, ChangeFieldType} from "./types";
import { FieldComponent,  createFieldComponent } from "./field"; 
import { FieldGroupComponent, createFieldGroupComponent } from "./fieldGroup";


export type FormProps<State extends FormData = FormData> = React.PropsWithChildren<{
	onSubmit?: (value: RequiredComputedState<State>) => void;
	onReset?: (value: RequiredComputedState<State>) => void;
}>;


// 表单组件
export type FormComponent<State extends Record<string, any>> = ReactFC<FormProps<State>>;

// 表单对象
export interface FormObject<State extends Record<string, any>> {
	Form: FormComponent<State>;
	Field: FieldComponent;
	Group: FieldGroupComponent
  	fields:State
	submit:()=>void
	reset:()=>{}
	load:(data:Dict)=>void							// 加载表单数据
  	// 表单状态
  	status:{
    	valid:boolean								// 表单数据是否有效
    	dirty:boolean								// 数据已经更新过
  	}	  
}

export function createForm<State extends FormData>(state: State) {
	const store = createStore<StoreDefine<State>>({ state },{
		computedContext: ComputedContextTarget.Root,
		onCreateComputed({keyPath,getter}) {
			//将校验参数的计算上下文更改为			
			if(keyPath[keyPath.length-1]=='validate'){
				const r = {context:"value"}
				// 将同步校验处理成与异步计算相同的返回值，以便在Field组件中统一处理 
				if(typeof(getter)=='function'){					
					// @ts-ignore
					const computedType = getter.__COMPUTED__ 					
					if(computedType!=="async"){						
						// @ts-ignore
						r.getter = function(this:any,...args:any){
							const result =  {
								value:true,
								loading:false,
								process:100,
								error:null
							}
							try{
								result.value = getter.call(this,...args)								
							}catch(e:any){
								result.error=e.message
							}
							return result							
						} 
					}
				}
				return r
			}
		},
	});  
	return {
		Form: createFormComponent<State>(store),
		Field: createFieldComponent(store),	
		Group: createFieldGroupComponent(store),	
    	fields:store.state,
		store:store    
	};
}

function createFormComponent<State extends FormData>(store: any): FormComponent<State> {
	return (props: FormProps<State>) => {
		const { children } = props; 
		const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    
		},[]);
		const onReset = useCallback((e: React.FormEvent<HTMLFormElement>) => {

		},[]);
		return (
			<form onSubmit={onSubmit} onReset={onReset}>
				{children}
			</form>
		);
	};
}


