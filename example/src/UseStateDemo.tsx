/**
 * 每次渲染时变化颜色
 */


import React from "react"
import { ReactFC } from "./types"; 
import {ColorBlock} from "@speedform/demo-components";
import { createStore } from "@speedform/reactive";

 
export type AccountStateType = {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      fullName: (user:any) =>string; 
    };
} 
const storeDefine= {
    state:{
        user:{
            id:'zhangfisher',
            firstName:'zhang',
            lastName:'tom',
            fullName:(user:AccountStateType['user'])=> {
               return (user.firstName+user.lastName) as string
            }
        }          
    }
}

const accountStore = createStore<typeof storeDefine>(storeDefine)

const UseInfo:ReactFC<React.PropsWithChildren> =React.memo(()=>{   
    const [state] = accountStore.useState()
    return (       
        <>
        <div>firstName=<input value={state.user.firstName} onChange={accountStore.sync(["user","firstName"])}/></div>
        <ColorBlock name="firstName" value={state.user.firstName}/>
        </>
    );
})
      
const LoginInfo:ReactFC<React.PropsWithChildren> = React.memo(()=>{   
    const [state] = accountStore.useState()
    return (       
        <ColorBlock name="lastName" value={state.user.lastName}/>
    );
})


const UseStateDemo:ReactFC<React.PropsWithChildren> = ()=>{   
    const [state] = accountStore.useState()
    return (   
        <div style={{padding:"4px",border:"1px solid #666"}}>
            <div style={{padding:"4px",border:"1px solid #666",margin:"4px"}}>
                <h4>父组件</h4>
                <ColorBlock name="firstName" value={state.user.firstName}/>
                <ColorBlock name="lastName" value={state.user.lastName}/>
            </div>
            <div style={{padding:"4px",border:"1px solid #666",margin:"4px"}}> 
            <h4>子组件</h4>
            更新firstName时只有父组件和FirstName组件会重新渲染
            <UseInfo/>
            <LoginInfo/>
            </div> 
        </div>    
    );
};
      

export default UseStateDemo