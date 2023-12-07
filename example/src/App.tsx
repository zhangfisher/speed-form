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
      <p className="read-the-docs">
      <div>firstName={state.user.firstName}</div>
      <div>lastName={state.user.lastName}</div>
        <div>Fullname={state.user.fullName}</div>
      </p>
    </>
  )
}

export default App
