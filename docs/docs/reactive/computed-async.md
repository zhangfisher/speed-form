---
group:
  title: 计算属性
  order: 2
order: 0  
title: 异步计算
demo:
  tocDepth: 5
---


## 介绍
 
异步计算属性是一个异步函数，当状态变化时，会自动重新计算。跟同步计算属性有一个很大的不同在于：

## 理解异步计算

- 同步计算属性会将计算结果回写到状态中的原位置，如下

```ts {11}
const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: (user)=>{
      return user.firstName+user.lastName
    }
  }
}  
const store = createStore<typeof state>({state})
store.state.user.fullName=="ZhangFisher" // 计算结果

```

- 而异步计算属性则会在状态的原位置写入一个`AsyncComputedObject`对象，通过该对象可以读取到异步计算的进度以及结果等，如下

```ts {13-20}
const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: async (user)=>{
      // await some async code
      return user.firstName+user.lastName
    } 
  }
}  
const store = createStore<typeof state>({state})
// 此时的fullName是一个AsyncComputedObject对象
store.state.user.fullName={
  loading:false,        // 是否正在计算
  error:null,           // 计算错误信息
  value:"ZhangFisher",  // 计算结果
  progress:0,           // 计算进度
  keyPath:["fullName"]  // 计算属性的路径
  reset:()=>{},         // 重新执行计算
}
```

以下是一个异步计算的例子：


```tsx

import { createStore,computed,ComputedScopeRef } from 'helux-store';
import { useRef,useEffect } from "react"
const delay = (ms:number=1000)=>new Promise(resolve=>setTimeout(resolve,ms))
const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: computed(async (user)=>{
      await delay()
      return user.firstName+user.lastName  
    },["user.firstName","user.lastName"]) 
  }
}  
const store = createStore<typeof state>({state})

export default ()=>{
  const count = useRef(0)
  const [state,setState] = store.useState()
  useEffect(()=>{count.current++},[])
  return (<div>
    <div>FirstName:{state.user.firstName}</div>
    <div>LastName:{state.user.lastName}</div> 
    <div>FullName:{state.user.fullName.loading ? '正在计算...' : (state.user.fullName.error ? `ERROR:${state.user.fullName.error}`: state.user.fullName.value)}</div>
    {/* <div>error:{state.user.fullName.error}</div> */}
    <button onClick={()=>setState((state)=>state.user.firstName='ZHANG '+count.current++)}>修改FirstName</button>
    <button onClick={()=>setState((state)=>state.user.lastName='FISHER'+count.current++)}>修改LastName</button>
    <button onClick={()=>state.user.fullName.reset()}>重新计算</button>
  </div>)
}
```
 


## 快速声明

直接在`State`中声明异步计算函数


## `computed`声明


## computed 
