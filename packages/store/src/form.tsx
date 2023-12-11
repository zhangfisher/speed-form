/**
 * 
 * const MyComponent = ()=>{
 * 
 * // 用来保存表单数据
 * const addBookHandler = useStore({
 *      state:{
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
 *          price:100               // 定价
 *          
 *      },
 *      actions:{
 *          async submit(url:string){
 *              // 提交数据
 *          },
 *          reset(){
 *              
 *          }
 *      }
 * })
 * 
 * return (
 *      <Form handler={addBookHandler}>
 *          <Field name={newBook.state.name}>  
 *              {({value,enable,visible,default})=>{
 *                  return <input value={value}/>
 *              }}
 *          </Field>
 *          <Field name={newBook.state.price}>  
 *               {({value,enable,visible,default})=>{
 *                  return <input value={value}/>
 *              }}
 *          </Field>
 *      </Form>
 *   )
 * }
 * 
 */

import { ReactNode, useEffect } from "react";

export function useForm(){
    
}


export interface FormProps<State>{
    onSubmit?:(value:State)=>void
    onReset?:(value:State)=>void
}

export const Form:React.FC<React.PropsWithChildren<FormProps>> = (props)=>{
    const { onFormChange, children } = props;

    useEffect(() => {
      const handleFormChange = () => {
        if (onFormChange) {
          onFormChange();
        }
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
    }, [onFormChange]);
  
    return <form id="form">{children}</form>;
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
export interface FieldProps<T>  {
    name: T;
    children: (props: { value: T; enable: boolean; visible: boolean }) => ReactNode;
}
export const Field:React.FC<React.PropsWithChildren<FieldProps>> = (props)=>{
    return <form>
        {props.children}
    </form>
}
 