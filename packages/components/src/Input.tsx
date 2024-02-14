 

import React from "react"
import { ReactFC } from "./types";

export type InputProps = React.PropsWithChildren<{
  name?:string
  visible?:boolean
  enable?:boolean
  placeholder?:string
  onChange?:Function
  value?:string
}>

export const Input:ReactFC<InputProps> = (props:InputProps)=>{
    const { name,enable=true,visible=true,placeholder,onChange,value} =props

    return (
        <input style={{ 
            border:`1px solid #bbb`,
            borderRadius:"2px",
            background: enable ? "white" : 'gray',
            margin:"4px" ,
            padding:"4px",
            display: visible ? 'block' : 'none',
        }}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={typeof(onChange)==='function' ? onChange() : null}
        />
    );
};
      
 