/**
 * 每次渲染时变化颜色
 */


import React from "react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { ReactFC } from "../types";

export type CardProps = React.PropsWithChildren<{
  title?:string
  buttons?:ReactFC[]
}>

const Card:ReactFC<CardProps> = ({ buttons,title,...props })=>{
        return (
          <div {...props} style={{ border:"1px solid #bbb",background:"white",margin:"8px" }}>
            <div  style={{display:"flex",flexDirection:"row",backgroundColor:"#ebebeb",padding:"6px",lineHeight:"150%"}}>
                <span>{title}</span>
                {(buttons||[]).map(Btn=><Btn/>)}
            </div>
            <div style={{ padding:"12px" }}>
                {props.children}
            </div>
          </div>
        );
      };
      

export default Card