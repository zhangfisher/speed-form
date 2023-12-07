import { useState } from 'react' 
import './App.css'
import { store } from "./store"

function App() {
  const [count, setCount] = useState(0)
  const [state] = store.useState()  

  return (
    <> 
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="read-the-docs">
          <button onClick={()=>state.user.firstName="hello"}>改变firstName</button>
          <div>firstName=<input value={state.user.firstName}></input></div>
          <input value={state.user.firstName} onChange={store.sync(to=>{
                  return to.user.firstName
            })
          } />;
          <div>firstName=<input value={state.user.firstName}></input></div>
          <div>lastName=<input value={state.user.lastName}></input></div>
          <div>Fullname={state.user.fullName}</div>
      </div>
    </>
  )
}

export default App
