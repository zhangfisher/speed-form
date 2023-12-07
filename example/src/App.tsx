import { useState } from 'react' 
import './App.css'
import { store } from "./store"
import { share } from "helux"

const [sharedState, setState, ctx] = share(
  { a: 1, b: { b1: { b2: "200" } } },
  {
    moduleName: "DeriveTask" 
  }
);


function App() {
  const [count, setCount] = useState(0)
  const [state] = store.useState()  
  const [state2] = ctx.useState();

  return (
    <> 
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="read-the-docs">
          <button onClick={()=>state.user.firstName="hello"}>改变firstName</button> 
          <input value={state.user.firstName} onChange={store.sync(["user","firstName"])}/>
          <div>firstName={state.user.firstName}</div>
          <div>lastName={state.user.lastName}</div>
          <div>Fullname={state.user.fullName}</div>
          <input
        style={{ width: "300px" }}
        value={state2.b.b1.b2}
        onChange={ctx.sync(["b", "b1", "b2"])}
      /> {state2.b.b1.b2}
      </div>
    </>
  )
}

export default App
