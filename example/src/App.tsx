import './App.css'
import { useState } from 'react' 
import classnames from "classnames"
// import UseStateDemo from './UseStateDemo'
// import ComputedDemo from './ComputedDemo'
import NetworkForm from './networkForm'
import UserForm from './UserForm'


const menuItems=[
  // {id:"render",title:"useState",component:<UseStateDemo/>},
  // {id:"computed",title:"计算属性",component:<ComputedDemo/>},
  // {id:"user",title:"用户",component:<UserForm/>},
  {id:"network",title:"网络",component:<NetworkForm/>,default:true},  
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
