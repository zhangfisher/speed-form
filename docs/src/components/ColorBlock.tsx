/**
 * 每次渲染时变化颜色
 */


import React,{ useRef} from "react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import * as color from "color"
import { ReactFC } from "../types";
import {useEffect} from "helux"
// const Colors:string[]=['#4bc703','#eb03c4','#1000eb',"#99170e991",'red','#778888999']
function getRandomColor(){
    const c = `${Math.floor(Math.random() * 16777215).toString(16)}`;
    return `#${c.padStart(6,'0')}`
}
const ColorBlock:ReactFC<React.PropsWithChildren<{value?:any,name?:string,title?:string,inline?:boolean}>> = (props)=>{
  const renderCount = useRef(0)
  const { name,value='',inline} = props
  const backgroundColor = getRandomColor()
  let textColor = 'block'
  if(color.rgb(backgroundColor).isDark()){
    textColor = 'white'
  }else{
    textColor ="block"
  }
  useEffect(()=>{
    renderCount.current++
  })

  return (
    <div  {...props} style={{ position:"relative", backgroundColor,padding:'4px',color:textColor,display:inline? 'inline' : 'block',...props.style || {} }}>
      {name ? (<span style={{padding:'2px'}}>{name}=</span>) : ''}<span style={{padding:'2px'}}>{String(value)}</span>
      {props.children}
      <span title='渲染计数' style={{width:"32px",fontSize:"10px",position:'absolute',top:"calc(50% - 8px)",left:"100%",marginLeft:"-32px"}}>{renderCount.current}</span>
    </div>
  );
};


export default ColorBlock
