import React from "react";
import User from './forms/user';
import classnames from 'classnames';
import {Field,Card,JsonViewer} from "@speedform/demo-components";


 
const UserForm = ()=>{     
    const [state] = User.useState() 

    return <User.Form className="panel">
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
        </Card>
    </User.Form>        
}


const FormDemo:React.FC = ()=>{
    // 如果缺少以下两句，则state.select无法触发setOnReadHook 
    const [state] = User.useState() 

   

    return (
        <div style={{display:"flex",flexDirection:'row',padding:"8px",margin:"8px"}}>
            <div style={{padding:"8px",margin:'8px',width:'60%'}}>
                <UserForm/>                 
                <div>
                    <h2>提交数据</h2>
                    <textarea></textarea>
                </div>
            </div>
            <div style={{padding:"8px",margin:'8px',width:'40%'}}> 
                <Card title="表单数据">
                    <JsonViewer data={state}/> 
                </Card>
            </div>
            
        </div>
        
    )
 } 



 export default FormDemo