 

import React, { CSSProperties } from "react"
import { ReactFC } from "./types";

export type InputProps = React.PropsWithChildren<HTMLInputElement & {
  name?:string
  visible?:boolean
  enable?:boolean
  placeholder?:string
  onChange?:any
  value?:string
  style?:CSSProperties
}>

export const Input:ReactFC<InputProps> = (props:InputProps)=>{
    const { name,enable=true,visible=true,placeholder,onChange,value,style} =props

    return (
        <input style={Object.assign({ 
            border:`1px solid #bbb`,
            borderRadius:"4px",
            background: enable ? "white" : 'gray',
            margin:"4px" ,
            padding:"8px",
            display: visible ? 'block' : 'none',
        },style)} 
        type="text"
        name={name}
        placeholder={placeholder}
        value={value ?? ''}
        onChange={onChange} 
        />
    );
};
      
 