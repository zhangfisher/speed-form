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
 
异步计算属性是一个异步函数，当所依赖的状态值变化时，会自动重新计算。

异步计算属性具有以下特性：

- 异步计算属性是一个异步函数或者返回值是一个`Promise`对象。
- 异步计算属性的依赖收集需要手动显式指定。
- 异步计算属性会被替换为`AsyncComputedObject`对象，通过该对象可以读取到异步计算的进度以及结果等。

<Divider></Divider>

## 基本用法

异步计算属性使用`computed`进行声明，方式如下：

```tsx 
import { computed,createStore } from "helux-store"
import { api } from "speedform-docs"

const mygithub = {
  user:{
    repo:"https://api.github.com/users/zhangfisher/repos",
    projects:computed<Project[]>(async ([repoUrl])=>{
      await new Promise(resolve=>setTimeout(resolve,2000))
        return await api.getProjects(repoUrl) 
     },
     ["user/repo"],
     {
      scope:"depends"
     })
  }
}

const store = createStore<typeof mygithub>({state:mygithub})

export default ()=>{
  const [state] = store.useState()
  globalThis.MyGithub=state
  return <div>
      <p><b>修改仓库地址将触发重新加载该仓库项目列表</b></p>
      仓库地址：<input value={state.user.repo} onChange={store.sync(["user","repo"])}/>
      <button onClick={()=>store.state.user.projects.run()}>重试</button> 
      <button onClick={()=>store.state.user.repo = "https://api.github.com/users/zhangfisher/repos"}>恢复</button>    

      <table className="projects-list">
          <thead><tr><td colSpan="3">以下是我的开源项目，感谢支持！</td></tr>
          <tr><td><b>项目名称</b></td><td><b>说明</b></td><td><b>星</b></td></tr></thead>                    
          <tbody>
          {
              state.user.projects.loading ? 
              (<tr><td colSpan={3}>正在加载...:</td></tr>)
              :
              (
                  state.user.projects.error? (<tr><td colSpan={2}>加载错误:{state.user.projects.error}</td></tr>)
                  : (
                    state.user.projects && state.user.projects.result.map((project,index)=>{
                          return <tr key={index}>
                            <td><a href={project.url} target="__blank">{project.name}</a></td>
                            <td>{project.description}</td>
                            <td>{project.stars}</td>
                            </tr>
                      })
                  )
              )
          }
          </tbody>
      </table>
  </div>

}

```

**说明**

- 使用`computed`函数声明异步计算属性，`computed`参数：
  - 第一个参数是一个异步函数，或者返回值是一个`Promise`对象,可以在此函数中编写业务逻辑，在本例中从`github`加载项目列表。
  - 第二个参数是一个字符串数组，用来指定依赖的状态路径。可以指定多个依赖路径。
  - 第三个参数是一个`ComputedOptions`对象，用来指定计算属性的一些选项。

- **重点：经过`createStore`处理后，`state.user.projects`转换为一个`AsyncComputedObject`对象，通过该对象可以读取到异步计算的进度以及结果等。**

**在上例中`state.user.projects`值为**

```js
  {
    "loading":false,  // 是否正在计算
    "timeout":0,
    "retry":0,
    "error":null,
    "progress":0,
    "result":/**此处就是异步计算函数的返回值**/
  }
```

<Divider></Divider>

## computed

`computed`函数用来声明一个异步计算属性或异步计算属性，其签名如下：

```ts | pure 
// 异步计算属性
function computed<R = any,ExtraAttrs extends Dict = {}>( 
  getter: AsyncComputedGetter<R>,
  depends?:ComputedDepends,
  options?: ComputedOptions<R,ExtraAttrs>): ComputedDescriptor<R & ExtraAttrs>;

// 也可以用来声明一个同步计算属性，此时不需要指定`depends`参数

export function computed<R = any,ExtraAttrs extends Dict = {}>( 
  getter: ComputedGetter<R>, 
  options?: ComputedOptions<R,ExtraAttrs>): R

```

**computed支持三个参数：**

-  `getter`：异步计算函数，或者返回值是一个`Promise`对象。
- `depends`：可选，依赖收集，用来指定依赖的状态路径。当用来声明同步计算时不需要指定。
- `options`：可选，计算属性的一些选项。

**computed支持2泛型类型：**
- `R`：计算函数的返回值类型。
- `ExtraAttrs`：额外属性类型，被合并到`AsyncComputedObject`的额外属性。

<Divider></Divider>

## 计算函数

`computed`函数的第一个参数，当依赖的状态值变化时，会自动重新计算的函数，可以是同步的，也可以是异步的，其签名如下：

- **异步计算函数**

```ts | pure  
type AsyncComputedGetter<R = any> = (scope: any, options: AsyncComputedGetterOptions) => R | Promise<R>;
```

**注意：**
  1. 如果传入的是一个返回`Promise`的同步函数，需要显式指定`options.async=true`，否则会被认为是同步函数。
  2. dd 



- **同步计算函数**

```ts | pure 
export type ComputedGetter<R,Scope=any> = (scope: Scope) => Exclude<R,Promise<any>>
```
<Divider></Divider>

## 依赖收集

不同于同步计算,异步计算属性的依赖收集需要在`computed`的第二个参数中手动显式指定.

依赖参数是一个`ComputedDepends`类型.

```ts | pure
export type ComputedDepends =Array<string | Array<string>> 
```



<Divider></Divider>

## 异步计算对象

不同于同步计算属性，异步计算属性则会在状态的原位置写入一个`AsyncComputedObject`对象，通过该对象：
- 可以读取到异步计算的进度以及结果等
- 提供超时、重试等功能
- 提供异步计算进度等功能

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
// 经createStore处理后的fullName是一个AsyncComputedObject对象
store.state.user.fullName={
  loading:false,          // 是否正在计算
  error:null,             // 计算错误信息
  timout:0,               // 超时计算相关
  retry:0,                // 重试次数
  result:"ZhangFisher",   // 计算结果
  progress:0,             // 计算进度
  run:()=>{},             // 重新执行计算
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
    },["user/firstName","user/lastName"]) 
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
    <div>FullName:{state.user.fullName.loading ? '正在计算...' : (state.user.fullName.error ? `ERROR:${state.user.fullName.error}`: state.user.fullName.result)}</div>
    {/* <div>error:{state.user.fullName.error}</div> */}
    <button onClick={()=>setState((state)=>state.user.firstName='ZHANG '+count.current++)}>修改FirstName</button>
    <button onClick={()=>setState((state)=>state.user.lastName='FISHER'+count.current++)}>修改LastName</button>
    <button onClick={()=>state.user.fullName.run()}>重新计算</button>
  </div>)
}
```
 
<Divider></Divider>

## 快速声明

直接在`State`中声明异步计算函数

 
 