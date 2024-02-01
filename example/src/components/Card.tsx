/**
 * 每次渲染时变化颜色
 */


import React, { ReactNode } from "react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { ReactFC } from "../types";

export type CardProps = React.PropsWithChildren<{
  title?:string
  buttons?:{onClick:()=>void,title:string}[],
  visible?:boolean
  enable?:boolean
  footer?:ReactNode
}>

const Card:ReactFC<CardProps> = (props)=>{
  const { title,enable=true,visible=true,buttons=[] } =props

        return (
          <div style={{ 
              border:`1px solid #bbb`,
              background: enable ? "white" : 'gray',
              margin:"8px" ,
              display: visible ? 'flex' : 'none',
              flexDirection:"column",              
          }}>
            <div style={{display:"flex",flexDirection:"row",backgroundColor:"#ebebeb",padding:"6px",lineHeight:"150%"}}>
                <span style={{flexGrow:1,color:enable ? "#222" : 'gray'}}>{title}</span>
                <span style={{}}>
                  {buttons.map((btn,index)=>{
                    return <span key={index} className="button" style={{padding:"4px",margin:"4px",cursor:'pointer'}} onClick={btn.onClick}>{btn.title}</span>
                  })}
                </span>
            </div>
            <div style={{ padding:"12px" }}>
                {props.children}
            </div>
          </div>
        );
      };
      

export default Card