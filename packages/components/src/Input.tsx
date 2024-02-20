 

import React, { CSSProperties } from "react"
import { ReactFC } from "./types";
import { validate } from '../../core/src/validate';

export type InputProps = React.PropsWithChildren<Partial<HTMLInputElement> & {
  name?:string
  visible?:boolean
  enable?:boolean
  validate?:boolean
  placeholder?:string
  onChange?:any
  value?:string
  style?:Partial<CSSProperties>
}>

export const Input:ReactFC<InputProps> = (props:InputProps)=>{
    const { name,enable=true,validate=true,visible=true,placeholder,onChange,value,style} =props

    return (
        <input style={Object.assign({ 
            border:validate ? `1px solid #bbb`: `1px solid red` ,
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
        readOnly={!enable}
        onChange={onChange} 
        />
    );
};
      
 