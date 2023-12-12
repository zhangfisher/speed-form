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
 *      <Book.Form handler={addBookHandler}>
 *          <Book.Field name={newBook.state.name}>  
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

import React, { ReactNode, createContext, useContext, useEffect } from "react";
import { useStore,type StoreOptions } from "./store";
import { ComputedState } from "./types";

export interface Form{
  Form:React.FC<React.PropsWithChildren<FormProps>>
  Field:React.FC<React.PropsWithChildren<FieldProps>>
}


export function useForm<T extends Record<string,any>>(state:T){
  // 创建一个响应式对象
  const store = useStore<StoreOptions<T>>({state})
  // 创建表单上下文
  const context = createContext<ComputedState<T>>(store.state)
  return {
      Form:createForm<T>(context,store.state),
      Field:createField(context,store),
  }
}


export interface FormProps<State=any>{
    onSubmit?:(value:State)=>void
    onReset?:(value:State)=>void
}


function createForm<T>(context:React.Context<ComputedState<T>>,store:StoreOptions<T>):React.FC<React.PropsWithChildren<FormProps>>{   
 return (props:React.PropsWithChildren<FormProps>)=>{
    const {  children } = props;
    useEffect(() => {
      const handleFormChange = () => {
         
      };  
      const formElement = document.getElementById('form');
  
      if (formElement) {
        formElement.addEventListener('change', handleFormChange);
      }
  
      return () => {
        if (formElement) {
          formElement.removeEventListener('change', handleFormChange);
        }
      };
    }, []);
  
    return (
      <context.Provider value={store}>
        <form onSubmit={props.onSubmit} onReset={props.onReset}>
          {children}
        </form>
      </context.Provider>
    )
  }
}

/**
 * 
 * <Form state={state}>
 *      <Field name={state.user.firstName}>  
 *          {({value,enable,visible})=>{
 *              
 *          }}
 *      </Field>
 *      <Field name={state.user.firstName}>  
 *          {({value,enable,visible})=>{
 *              
 *          }}
 *      </Field>
 * </Form>
 */

export interface FieldProps<T=any>  {
    name: T;
    children: (props: { value: T; enable: boolean; visible: boolean,validate:()=>boolean }) => ReactNode;
}


function createField(context:React.Context<any>,store:any){   
  const ctx = useContext(context)
  return (props)=>{    
    store
    return 
    
        {props.children()}
    
  }
}
 