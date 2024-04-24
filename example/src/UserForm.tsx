import React from "react";
import classnames from 'classnames';
import {Field,Card,JsonViewer, Button} from "@speedform/demo-components";
import { useForm } from "@speedform/core";

 


const FormDemo:React.FC = ()=>{
    
    const User = useForm(()=>{
        return {
            fields: {
                firstName: {
                    value: "zhang",
                    placeholder: "",
                    title: "姓", 
                    validate: (value: string) => value.length > 3,
                },
                lastName: {
                    value: "fisher",
                    placeholder: "",
                    title: "名", 
                    validate: (value: string) => value.length > 3,
                },
                fullName:(scope:any)=>{
                    return scope.firstName.value+scope.lastName.value
                }
            }
        }})
    const [state] = User.useState()

    const { run } = User.useAction(async (scope,opts)=>{
        console.log("scope=",scope,opts)
    },{})


    return (
        <div style={{display:"flex",flexDirection:'row',padding:"8px",margin:"8px"}}>
            <div style={{padding:"8px",margin:'8px',width:'60%'}}>              
                <User.Form className="panel">
                <div data-loader="circle"></div>
                    <Card title="帐号">
                        <User.Field<typeof User.fields.firstName> name="firstName">                      
                                {({title,value,visible,validate,placeholder,sync})=>{ 
                                    return <Field visible={visible} label={title} validate={validate}>
                                        <input className={classnames({invalid:!validate})} placeholder={placeholder} value={value} onChange={sync()}/>
                                    </Field>
                                } }
                        </User.Field>             
                        <User.Field<typeof User.fields.lastName> name="lastName">                      
                            {({title,value,visible,validate,placeholder,sync})=>{ 
                                return <Field visible={visible} label={title} validate={validate}>
                                    <input className={classnames({invalid:!validate})} placeholder={placeholder} value={value} onChange={sync()}/>
                                </Field>
                            } }
                        </User.Field> 
                        <div>FullName:{state.fields.fullName}</div>
                        <Button onClick={()=>run()}>执行Action</Button>                        
                    </Card>
                </User.Form>        
            </div>
            <div style={{padding:"8px",margin:'8px',width:'40%'}}> 
                <Card title="表单数据">
                    <JsonViewer data={User.state}/> 
                </Card>
            </div>
            
        </div>
        
    )
 } 



 export default FormDemo