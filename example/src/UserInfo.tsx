/**
 * 每次渲染时变化颜色
 */


import React from "react"
import { ReactFC } from "./types";
import store from "./store"
import ColorBlock from "./ColorBlock";

const UserInfo:ReactFC<React.PropsWithChildren> = ()=>{   
    const [state] = store.useState()
    return (          
        <table style={{padding:'4px'}}>            
            <tbody>
                <tr><td>用户:</td><td><ColorBlock value={state.user.id}/></td></tr>
                <tr><td>全称:</td><td><ColorBlock value={state.user.fullName}/></td></tr>
                <tr><td>性别:</td><td><ColorBlock value={state.user.sex}/></td></tr>
                <tr><td>年龄:</td><td><ColorBlock value={state.user.age}/></td></tr>
                <tr><td>级别:</td><td><ColorBlock value={state.user.level}/></td></tr>
            </tbody>
        </table>
        
    );
};
      

export default UserInfo