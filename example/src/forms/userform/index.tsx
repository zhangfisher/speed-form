import React ,{useState} from "react";
import classnames from 'classnames';
import {Field,Card,JsonViewer, Button} from "@speedform/demo-components";
import { delay } from "flex-tools/async/delay";
import validator from 'validator';

 


const FormDemo:React.FC = ()=>{
    const  [ formData ,setFormData] = useState('')
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

    const { run,loading,progress } = User.useAction(async (scope,{getProgressbar})=>{
        setFormData(JSON.stringify(scope))
        const progressbar = getProgressbar()
        return new Promise((resolve)=>{            
            (async ()=>{
                for(let i=1;i<=100;i++){
                    await delay(20)
                    progressbar.value(i)
                }
                progressbar.end()            
                resolve(scope)
            })()            
        }) 
    },{name:"x"})
    const { run : timeoutRun,timeout } = User.useAction(async (scope)=>{
        setFormData(JSON.stringify(scope))
        await delay(100000)
    },{name:"y",timeout:[2500,5]})
    // @ts-ignore 方便调试用
    globalThis.User = User

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
                        <Button onClick={()=>run()} loading={loading}>执行Action - 执行中状态</Button>                        
                        <Button onClick={()=>run()} progress={progress}>执行Action - 显示进度</Button>                        
                        <Button onClick={()=>timeoutRun()} timeout={timeout}>执行Action - 倒计时</Button>      
                    </Card>
                </User.Form>    
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