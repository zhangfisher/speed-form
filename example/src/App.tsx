import './App.css'
import { useState } from 'react' 
import classnames from "classnames"
// import UseStateDemo from './UseStateDemo'
import ComputedDemo from './computeds/basic'
import NetworkForm from './forms/network'
// import UserForm from './forms/userform/UserForm'
// import UserFormWithValidate from "./UserFormValidate"

const menuItems=[
  {id:"computed",title:"计算属性",component:<ComputedDemo/>},
  {id:"NetworkForm",title:"网络配置",component:<NetworkForm/>,default:true},

  // {id:"render",title:"useState",component:<UseStateDemo/>},  
  // {id:"user",title:"用户",component:<UserForm/>},
  // {id:"user_valid",title:"校验",component:<UserFormWithValidate/>,default:true},
  // {id:"network",title:"网络",component:<NetworkForm/>},  
] 

function App() { 
  const [menuItem,setMenuItem]= useState(menuItems.find(item=>item.default)?.id) 

  return (
    <div id="app">      
      <ul className="navbar">
        {menuItems.map((item,index)=>{
          return <li key={index} className={ classnames({selected:item.id==menuItem})}
            onClick={()=>setMenuItem(item.id)}
          >{item.title}</li>
        })}
      </ul>
      <div className='tabs'>
        {menuItems.map((item,index)=>{
          return <div  key={index} className={classnames({selected:item.id==menuItem,tab:true})}>{item.component}</div>
        })}
      </div>       
    </div>
  )
}

export default App
