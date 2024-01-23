import React from 'react'
import { Loading } from './Loading'

export type ButtonProps =React.PropsWithChildren<
    React.ButtonHTMLAttributes<any> 
    & {
        visible?:boolean
        enable?:boolean,
        loading?:boolean
        timeout?:number
        error?:string
        cancel?:()=>any
    }>

export const Button:React.FC<ButtonProps> = (props)=>{
    const { visible=true,enable=true,loading,timeout=0 } =props

    
    return (
    <>
    <button style={{
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
        <span style={{flexGrow:1}}>{props.children}        </span>
        {timeout >0 ? <span style={{
            padding:"4px",
            color:"red",
            backgroundColor:"#eee",
            borderRadius:"4px",
        }}>{timeout}</span> : '' }
        {
            props.error ? <span style={{
                padding:"4px",
                color:"red",
                backgroundColor:"#eee",
                borderRadius:"4px",
            }}>{props.error}</span> : ''
        }
    </button>    
    {props.loading && props.cancel ? 
        <button onClick={props.cancel} style={{            
                padding:"4px",
                color:"red",
                margin:"2px",
                fontSize:"10px",
                backgroundColor:"#eee",
                borderRadius:"4px",
                cursor:"pointer"
            }}> 取消</button> : ''}
    </>
    )
}
