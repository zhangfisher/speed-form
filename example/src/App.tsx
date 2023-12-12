import { useState } from 'react' 
import './App.css'
import AccountCard from './AccountCard'
import ComputedCard from './ComputedCard'
import classnames from "classnames"

const menuItems=[
  {id:"render",title:"useState",component:<AccountCard/>},
  {id:"computed",title:"计算属性",component:<ComputedCard/>},
] 

function App() { 
  const [menuItem,setMenuItem]= useState("computed")
  

  // useEffect(()=>{
  //   const tid = setInterval(()=>{
  //       store.state.books[0].count++
  //       store.state.books[2].count++
  //   },2000)
  //   return ()=>clearInterval(tid)
  // },[])
  
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
