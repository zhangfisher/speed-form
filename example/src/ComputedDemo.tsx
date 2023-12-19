import store  from "./store" 
import ColorBlock from './components/ColorBlock'
import { $  } from "helux" 
import Card from "./components/Card" 
import { Tips } from "./Tips"

 
function ComputedDemo() {
  const [state] = store.useState()   
 
  // useEffect(()=>{
  //   const tid = setInterval(()=>{
  //       store.state.books[0].count++
  //       store.state.books[2].count++
  //   },2000)
  //   return ()=>clearInterval(tid)
  // },[]) 
  return (    
      <div className="read-the-docs">
        
        <Card title="同步计算属性">
            <Tips text="修改{firstName}会引起同步计算属性{FullName}更新"/>
            <div>
                <div>firstName=<input value={store.state.user.firstName} onChange={store.sync(["user","firstName"])}/>
                <button onClick={()=>store.state.user.firstName="Zhang"}>恢复</button>
                </div>
                <ColorBlock name="FirstName" value={state.user.firstName}/>
            </div>
            <ColorBlock name="LastName" value={state.user.lastName}/>
            <ColorBlock  name="FullName" value={state.user.fullName}/>
            <div>Age=<input value={state.user.age} onChange={store.sync(["user","age"])}/><button onClick={()=>store.state.user.age=100}>恢复</button></div>
            <ColorBlock name="Age" value={$(state.user.age)}/>                   
        </Card>

        <Card title="异步加载项目">
            <div>
                <Tips text="修改仓库地址将触发重新加载该仓库项目列表到{projects}"/>
                仓库地址：<input value={state.user.repo} onChange={store.sync(["user","repo"])}/>
                <button onClick={()=>store.state.user.repo = "https://api.github.com/users/zhangfisher/repos"}>加载</button>                
                <button onClick={()=>store.state.user.projects.reset()}>重试</button> 
            </div>
            <div>loading={store.state.user.repo}</div>
            <table className="projects-list">
                <thead>
                    <tr><td>项目名称</td><td>星</td></tr>
                </thead>                    
                <tbody>
                {
                    state.user.projects.loading ? 
                    (<tr><td colSpan={2}>正在加载...:</td></tr>)
                    :
                    (
                        state.user.projects.error? (<tr><td colSpan={2}>加载错误:{state.user.projects.error.message}</td></tr>)
                        : (
                          state.user.projects && state.user.projects.value.map((project,index)=>{
                                return <tr key={index}><td>{project.name}</td><td>{project.stars}</td></tr>
                            })
                        )
                    )
                }
                </tbody>
            </table>

        </Card>

        <Card title="书目数组计算属性">
        <div style={{display:"flex",flexDirection:'column'}}>
            <div style={{width:'100%',display:'flex',flexDirection:"row"}}>
              <ColorBlock  style={{flexGrow:1}} inline value="名称"/>
              <ColorBlock style={{width:80}}  inline value="作者"/>
              <ColorBlock style={{width:80}}  inline value="单价"/>
              <ColorBlock style={{width:80}}  inline value="数量"/>
              <ColorBlock style={{width:80}}  inline value="总价"/>
            </div>
                  
            {
              state.books.map((book,index)=>{
                return <div key={index} style={{width:'100%',display:'flex',flexDirection:"row"}}>
                  <ColorBlock style={{flexGrow:1}} inline value={$(book.name)}/>
                  <ColorBlock style={{width:80}} inline value={$(book.author)}/>
                  <ColorBlock style={{width:80}} inline value={`￥${$(book.price)}`}/>
                  <ColorBlock style={{width:80}} inline value={$(book.count)}/>
                  <ColorBlock style={{width:80}} inline value={`￥${$(book.total)}`}/>
                </div>
              })
            }

            <div style={{width:'100%',display:'flex',flexDirection:"row",paddingTop:'12px'}}> 
                <input  style={{flexGrow:1}}  value={state.user.age} onChange={store.sync(["user","age"])}/>
                <input  style={{width:80}} value={state.user.age} onChange={store.sync(["user","age"])}/>
                <input  style={{width:80}} value={state.user.age} onChange={store.sync(["user","age"])}/>
                <input  style={{width:80}} value={state.user.age} onChange={store.sync(["user","age"])}/>
                <input  style={{width:80}} value={state.user.age} onChange={store.sync(["user","age"])}/>
            </div>
            <button onClick={()=>store.state.user.age=100}>添加书籍</button>  
            

          </div>  

        </Card> 
          
    </div>
  )
}

export default ComputedDemo
