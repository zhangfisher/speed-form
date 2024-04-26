import React ,{useState} from "react";
import classnames from 'classnames';
import {Field,Card,JsonViewer, Button} from "@speedform/demo-components";
import { useForm } from "@speedform/core";
import { delay } from "flex-tools/async/delay";
import validator from 'validator';

 


const FormDemo:React.FC = ()=>{
    const  [ formData ,setFormData] = useState('')
    const  [ validateAt ,setValidateAt] = useState('realtime')
    
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
                    value: "fr",
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

    const { run } = User.useAction(async (scope,{getProgressbar})=>{
        setFormData(JSON.stringify(scope))
        const progressbar = getProgressbar()
        return new Promise(async (resolve)=>{            
            for(let i=1;i<=100;i++){
                await delay(20)
                progressbar.value(i)
            }
            progressbar.end()            
            resolve(scope)
        }) 
    },{name:"x"}) 
    const handleValidateAtChange = (event) => {
        setValidateAt(event.target.value);
      };
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
                        <div>Validate:{String(state.validate)}</div>
                        <Button onClick={()=>run()}>执行Action</Button>                         
                    </Card>
                </User.Form>    
                    
                {/* 单选组件，可选: 实时校验，编辑时校验，提交时校验， */}
                <div>               
                    {validateAt}
                    <input type="radio" id="optionA1" name="validateAt"  value="realtime"   onChange={handleValidateAtChange} />  
                    <label htmlFor="optionA1">实时校验</label>              
                    <input type="radio" id="optionB1" name="validateAt" value="lose-focus"  onChange={handleValidateAtChange}/>  
                    <label htmlFor="optionB1">丢失焦点时校验</label>  
                    <input type="radio" id="optionC1" name="validateAt" value="submit"   onChange={handleValidateAtChange}/>  
                    <label htmlFor="optionC1">提交时校验</label>
                </div>    
                <textarea style={{width:'100%',height:"5em"}} value={formData}></textarea>
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