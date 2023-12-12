import { useStore } from "helux-store"



const FormDemo = ()=>{
    
    // 用来保存表单数据
    const MyForm = useStore({
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
            }),
            price:100               // 定价
        },
        actions:{
            submit(){
                // 提交数据
            }
        }
    })
    
    return (
        <MyForm.Form handler={addBookHandler}>
            <MyForm.Field name="name">  
                {({value,enable,visible,default,validate})=>{
                    return <input value={value}/>
                }}
            </MyForm.Field>
            <MyForm.Field name="price">  
                {({value,enable,visible,default})=>{
                    return <input value={value}/>
                }}
            </MyForm.Field>
        </MyForm.Form>
    )
 } 