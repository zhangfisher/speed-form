import React ,{useCallback, useState} from "react";
import classnames from 'classnames';
import {Field,Card,JsonViewer, Button} from "@speedform/demo-components";
import { useForm,computed, action } from "@speedform/core";
import { delay } from "flex-tools/async/delay"; 

const userDefine =  {
    fields: {
        username: {
            value: "fisher",
            placeholder: "",
            title: "用户名", 
            validate: (value: string) => value.length > 3,
        },
        password: {
            value: "123",
            placeholder: "",
            title: "密码", 
            validate: async (value: string) => {
                await delay(100)
                return value.length > 3
            }
        },
        verifyCode: {
            value: "",
            placeholder: "",
            title: "验证码", 
            validate: computed(async (value: string) => { 
                return value.length > 3
            })
        },
        submit: { // 这是一个动作,
            title: "提交wifi",
            execute:action(async (data:any)=>{
                await delay(1000)
                console.log("data=",data)
            })
        },
    }

}
const FormDemo:React.FC = ()=>{
    const  [ formData ,setFormData] = useState('')

    const  [ validateAt ,setValidateAt] = useState('once')


    
    const User = useForm(()=>{
        return Object.assign({},userDefine)
    },{
        validAt:"once"
    })

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

    const submit = useCallback(()=>{
        User.getAction(User.fields.submit)().then((result)=>{            
            setFormData(result)
        }).catch((error)=>{
            setFormData("Error: "+error.message)
        })
    },[])


    const handleValidateAtChange = (event:any) => {
        setValidateAt(event.target.value);
      };
    return (
        <div style={{display:"flex",flexDirection:'row',padding:"8px",margin:"8px"}}>
            <div style={{padding:"8px",margin:'8px',width:'60%'}}>              
                <User.Form className="panel">
                <div data-loader="circle"></div>
                    <Card title={`用户 - validAt='once'`}>
                        <div>
                            <div>validate={String(User.state.validate)}</div>
                        </div>
                        <User.Field<typeof User.fields.username> name="username">                      
                                {({title,value,visible,validate,placeholder,sync})=>{ 
                                    return <Field visible={visible} label={title} validate={validate}>
                                        <input className={classnames({invalid:!validate})} placeholder={placeholder} value={value} onChange={sync()}/>
                                    </Field>
                                } }
                        </User.Field>             
                        <User.Field<typeof User.fields.password> name="password">                      
                            {({title,value,visible,validate,placeholder,sync})=>{ 
                                return <Field visible={visible} label={title} validate={validate}>
                                    <input className={classnames({invalid:!validate.result})} placeholder={placeholder} value={value} onChange={sync()}/>
                                </Field>
                            } }
                        </User.Field>  
                        <User.Field<typeof User.fields.verifyCode> name="verifyCode">                      
                            {({title,value,visible,validate,placeholder,sync})=>{ 
                                return <Field visible={visible} label={title} validate={validate}>
                                    <input className={classnames({invalid:!validate.result})} placeholder={placeholder} value={value} onChange={sync()}/>
                                </Field>
                            } } 
                        </User.Field>   
                        <Button onClick={()=>submit()}>登录</Button>    
                        <User.Submit title="确认提交" scope="dd.dd"></User.Submit>                     
                    </Card>
                </User.Form>    
                    
                {/* 单选组件，可选: 实时校验，编辑时校验，提交时校验， */}
                <div>                
                    <input type="radio" id="optionA1" name="validateAt"  value="once"   onChange={handleValidateAtChange} />  
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