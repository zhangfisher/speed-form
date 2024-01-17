import { addPlugin ,atom } from "helux"
import { HeluxPluginDevtool } from '@helux/plugin-devtool';
addPlugin(HeluxPluginDevtool);

const a = atom(1)
console.log(a)


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
