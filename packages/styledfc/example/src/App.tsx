import { useState } from 'react' 
import './App.css'
import { styled } from "styledfc"

type  CardProps = React.PropsWithChildren<{
  title?:string
  footer?:React.ReactNode
}>
const Card = styled<CardProps>((props,className)=>{
  const { title } =props
  return (
    <div className={className}>
      <div className="title">{title}</div>
      <div className="content">{props.children}</div>
      <div className="footer">{props.children}</div>
    </div>
  )
},{
  position:"relative",
  display:"block",
  width:"100%",
  fontSize:"border-box",
  border:"1px solid #ccc",
  textAlign:"left",
  ">.title":{
    padding:"8px",
    background:"#eee",
    fontSize:"18px",
    fontWeight:"bold"
  }
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width:"600px"}}>
      <Card title="StyledFC">
                fdfdfdfdf 
        </Card>
    </div>
  )
}

export default App
