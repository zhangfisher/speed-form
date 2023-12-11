import { useStore } from "helux-store"

const AddBookForm = ()=>{
 
 // 用来保存表单数据
 const addBookHandler = useStore({
      state:{
          name:"",
          author:{
              value:0,
              default:10,
              visible:(book)=>{},
              enable:(book)=>{},
              validate:(book)=>{},
              enum:(book)=>{}              
          },
          category:async((book)=>{
              return await getBookCategorys()              
          })
          price:100               // 定价
      },
      actions:{
          submit(){
              // 提交数据
          }
      }
 })
 
 return (
      <Form handler={addBookHandler}>
          <Field name={newBook.state.name}>  
              {({value,enable,visible,default})=>{
                  return <input value={value}/>
              }}
          </Field>
          <Field name={newBook.state.price}>  
               {({value,enable,visible,default})=>{
                  return <input value={value}/>
              }}
          </Field>
      </Form>
   )
 } 