---
group:
  title: 高级
  order: 2
order: 0  
---

# 响应式系统

## 介绍

`SpeedForm`底层数据由一个响应式系统驱动，它可以让你在表单开发中更加灵活、快速地处理数据。

- 目前`SpeedForm`底层的响应式系统由[helux](https://heluxjs.github.io/helux/guide)驱动，`helux`是一个具备派生计算、依赖收集、信号的响应式状态管理库，它的设计理念与`SpeedForm`的设计理念高度契合，为`SpeedForm`提供了强大的数据驱动能力。
- `SpeedForm`底层的响应式系统由库`helux-store`提供技术实现，在`helux`的基础上，封装了库`helux-store`用来提供更加易用友好的状态库管理。


## Store

创建`SpeedForm`时对应创建一个`Store`对象,就如同`Redux`中的`Store`一样,`Store`本质上就是受控的状态数据对象，使用`helux`的`atom/share`创建。

典型的`Store`结构如下：

![](/store.png)

- `Store`对象中会定义`State`数据结构，一般情况下不允许直接修改`State`数据，而是通过`Action`来修改`State`数据。
- `Action`是一个普通的函数，一般会实现某种业务逻辑，可以是同步函数，也可以是异步函数。执行成功会修改`State`数据。
- 计算属性会侦听`State`的数据变化，当`State`数据变化时，会自动重新计算计算属性的值。

### 创建

`helux-store`提供了`createStore`方法用来创建`Store`对象。

```ts

const store = createStore({
  state:{},       // 声明状态数据
  actions:{},     // 声明状态数据更新方法
})

```
## 状态

### 状态存取

当创建好`Store`后,你可以在存取`State`用来驱动组件细粒度渲染。

`Store`对象提供了`useState`方法，用来在组件中访问和更新`Store`的状态数据。

```tsx
import { createStore } from 'helux-store';

const state = {
  firstName:"Zhang",
  lastName:"Fisher",
  age:18
}

const store = createStore<typeof state>({state})

export default () => {
  const [state,setState] = store.useState() 
  return <div>
      <div>Hello :{state.firstName}{' '}{state.lastName}</div>
      <div>Age :{state.age}</div>
      <button onClick={()=>setState(draft=>draft.age+=1)}>+Age</button>
    </div>
}

``` 

### 响应式读写

除了使用`useState`方法读写状态外，`Store`对象还提供了`state`属性用来读取状态。

`sotre.state`返回的是一个`reactive`响应式对象，你可以直接读写它的属性。

所谓的`响应式对象`指的是可以对该对象进行读取，其修改行为会触发内部的依赖收集，相关计算属性的运行，当然也会自动触发组件的重新渲染。



```tsx
/**
* title: 读取状态
* description: 通过`store.state.firstName`直接读取状态,不通过`useState`方法
*/
import { createStore } from 'helux-store';
const state = {
  firstName:"Zhang",
  lastName:"Fisher",
  age:18
}

const store = createStore<typeof state>({state})

export default () => {
  return <div>
      <div>Hello :{store.state.firstName}{' '}{store.state.lastName}</div>
      <div>Age :{store.state.age}</div>
      <button onClick={()=>setState(draft=>draft.age+=1)}>+Age</button>
    </div>
}

``` 

### 信号

直接通过`store.state.firstName`的方式来读取状态数据，当状态变化时并不会导致组件重新渲染，这是因为`store.state.firstName`并不是一个响应式的数据，它只是一个普通的数据。此时可以使用`helux`提供的信号机制来实现组件的细粒度渲染。

```tsx
import { createStore } from 'helux-store';
import { $ } from 'helux';
import { ColorBlock,Divider } from "speedform-docs"
import { useRef,useEffect } from "react"

const state = {
  firstName:"Zhang",
  lastName:"Fisher",
  age:18
}

const store = createStore<typeof state>({state})

export default () => {
  const renderCount = useRef(0)
  useEffect(()=>{
      renderCount.current++
  })
  
  const [state,setState] = store.useState() 
  const {age} = state

  return <div> 
      <div>组件渲染次数: {renderCount.current}</div>
      <Divider title='基于Signal的细粒度更新，只渲染更新的内容'/>      
      <div>FirstName = {$(store.state.firstName)}</div>
      <div>LastName ={$(store.state.lastName)}</div>
      <div>Age :{$(store.state.age)}</div>
      <button onClick={()=>store.state.age+=1}>+Age</button>
      <button onClick={()=>store.state.firstName=store.state.firstName+'g'}>Change FirstName</button>
      <button onClick={()=>store.state.lastName=store.state.lastName+'r'}>Change LastName</button>
       <button onClick={()=>{store.state.firstName='Zhang';store.state.lastName='Fisher';}}>Reset</button>
      <Divider title='使用setState更新，粗粒度，导致整个组件重新渲染'/>
      <div>Age :{age}</div>
      <button onClick={()=>setState(draft=>draft.age+=1)}>+Age</button>
    </div>
}
```
 

## 计算属性

细心的朋友可能发现，在上面的`createStore`中我们没有声明任何的计算属性，但这并不是不支持计算属性，而是`helux-store`提供了**独特的计算属性的声明方式*。`helux-store`提供的计算属性的声明方式是`SpeedForm`之所以能提供无以伦比用户开发体验的关键。

### 基本原理

> **`helux-store`实现了最独特的移花接木式的计算属性实现方式**

![](/computed.png)

```ts

const user = {
  firstName:"Zhang",
  lastName:"Fisher",
  fullName: (user)=>user.firstName+user.lastName
}

const store = createStore<typeof user>({state:user})

store.state.fullName // "ZhangFisher"

```

以上`fullName`就是一个计算属性，它的值是由`firstName`和`lastName`计算得来的。

`helux-store`的计算属性可以直接声明在状态中，这是与其他状态库最大的不同。







 