/**
 * 每次渲染时变化颜色
 */


import React from "react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { ReactFC } from "./types";

const Card:ReactFC<React.PropsWithChildren<{title?:string}>> = ({ title,...props })=>{
        return (
          <div {...props} style={{ border:"1px solid #bbb",margin:"8px" }}>
            <div  style={{ backgroundColor:"#ebebeb",padding:"6px",lineHeight:"150%"}}>
                {title}
            </div>
            <div style={{ padding:"12px" }}>
                {props.children}
            </div>
          </div>
        );
      };
      

export default Card