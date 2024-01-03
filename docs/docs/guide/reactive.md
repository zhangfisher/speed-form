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

```ts

const store = createStore({
  state:{},       // 声明状态数据
  actions:{},     // 声明状态数据更新方法
})

```

当创建好`Store`后,你可以在组件中用来驱动组件细粒度渲染。

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
  
更多的`Store`使用方法请参考[helux](https://heluxjs.github.io/helux/guide)。

## 计算属性

细心的朋友可能发现，在上面的`createStore`中我们没有声明任何的计算属性，但这并不是不支持计算属性，而是`helux-store`提供了**独特的计算属性的声明方式*。`helux-store`提供的计算属性的声明方式是`SpeedForm`之所以能提供无以伦比用户开发体验的关键。

### 基本原理

> **`helux-store`实现了最独特的移花接木式的计算属性实现方式**

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







 