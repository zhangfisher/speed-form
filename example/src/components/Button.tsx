import React from 'react'
import { Loading } from './Loading'

export type ButtonProps =React.PropsWithChildren<
    React.ButtonHTMLAttributes<any> 
    & {
        visible?:boolean
        enable?:boolean,
        loading?:boolean
        timeout?:number
    }>

export const Button:React.FC<ButtonProps> = (props)=>{
    const { visible=true,enable=true,loading,timeout=0 } =props

    
    return (<button style={{
        padding:"8px",
        margin:"4px",
        border:"1px solid #008bfdca",
        cursor:"pointer",
        display: visible ? 'flex' : 'none'
    }}
        disabled={!enable}
        {...props}
    >
        {loading ? <Loading/> : null}
        {props.children}        
        {timeout >0 ? <span style={{
            padding:"4px",
            color:"red",
            backgroundColor:"#eee",
            borderRadius:"4px",
        }}>{timeout}</span> : '' }
        
    </button>)
}
