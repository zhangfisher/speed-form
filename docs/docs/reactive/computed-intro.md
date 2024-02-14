---
group:
  title: 计算属性
  order: 2
title: 入门
order: 0  
demo:
  tocDepth: 5
---

## 介绍

细心的朋友可能发现，在上面的`createStore`中我们没有声明任何的计算属性，但这并不是不支持计算属性，而是`@speedform/reactive`提供了**独特的计算属性的声明方式**。`@speedform/reactive`提供的计算属性的声明方式是`SpeedForm`之所以能提供无以伦比用户开发体验的关键。

## 基本原理

:::info
**`@speedform/reactive`实现了最独特的移花接木式的计算属性实现方式**
:::

![](./computed.png)

**基本过程如下：**

1. 首先直接在`State`中声明计算属性函数，如`fullName=(user)=>user.first+user.last`。
2. 调用`createStore`创建`Store`时，会根据`State`中的函数来创建`mutate`或`computed`(在`helux`中叫派生对象，在其他状态库中可能叫计算算属性)。
3. 如此，当`State`中的数据变化时，会自动触发计算属性的重新计算，将计算结果赋值给`State`中的对应属性。在上图中，当`firstName`和`lastName`变化时，会自动触发`fullName(mutate)`的重新计算，将计算结果赋值给`user.fullName`属性。这样，当我们访问`state.fullName`时,就是一个字符串了，而不是一个函数了。

**以上就是`@speedform/reactive`计算属性移花接木的过程原理,大家可以从下面示列中加深理解。**

```tsx
/**
 * defaultShowCode: true
 */
import { createStore } from '@speedform/reactive'; 
import { Divider} from "@speedform/demo-components"

const user = {
  firstName:"Zhang",
  lastName:"Fisher",
  fullName: (user)=>{ 
    return user.firstName+user.lastName
  }
}

const store = createStore<typeof user>({state:user},{singleton:false})
 
export default ()=>{
  const [state,setState] = store.useState()
  return (<div>
    <h4>声明时fullName是一个函数</h4>
    <div>typeof(user.fullName)={typeof(user.fullName)}</div>
    <Divider />
    <h4>创建Store后,state.fullName是一个字符串</h4>
    <div>typeof(store.state.fullName)={typeof(state.fullName)}</div>
    <div>store.state.fullName=={state.fullName}</div> 
  </div>)
}
```

在上例中：
- `user.fullName`是一个函数
- `store.state.fullName`是一个字符串
- 默认情况下，`createStore`直接在输入的`user`上进行创建，指定`singleton:false`时会深拷贝一份`user`，然后在拷贝的`user`上创建`mutate`或`computed`。

## 上下文

在学习如何声明创建计算属性之前，我们先来了解一下`计算上下文`的概念。

:::info
 **`计算上下文`指的是计算属性函数执行时的上下文对象，即`this`指向的对象。**
:::

`@speedform/reactive`在创建`Store`时，支持配置`computedThis`参数来指定计算属性函数的默认`this`上下文，`computedThis`取值如下：

```ts
export enum ComputedScopeRef{
  None = 'none',                      // 不指定上下文
  Root = 'root',                      // 指向State根对象
  Current = 'current',                // 指向计算属性所在的对象
  Parent = 'parent',                  // 指向计算属性所在对象的父对象
  Depends = 'depends'                 // 指向异步计算的依赖数组，仅在异步计算时生效
  Self    = 'self'                    // 指向自身，默认值   
}

// 指定Store中计算函数的上下文,如果是字符串代表是当前对象的指定键，如果是string[]，则代表是当前Store对象的完整路径
export type StoreComputedScope  = ComputedScopeRef | string | string[] | ((state:any)=>string | string[] | ComputedScopeRef)

```

### Root

默认情况下，`@speedform/reactive`会将计算属函数的上下文指向`ComputedScopeRef.Root`，即当前的`State`根对象，如下：

```tsx 
/**
 * title: ComputedScopeRef.Root
 * description: store.computedThis==ComputedScopeRef.Root,
 */
import { createStore } from '@speedform/reactive'; 
const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: function(user){
      // this指向State根对象      
      return this.user.firstName+this.user.lastName
    }
  }
} 
const store = createStore<typeof user>({state})

export default ()=>{
  const [state,setState] = store.useState()
  return <div> 
    <div>FullName:{state.user.fullName}</div>
  </div>
}

``` 

### Current

当`computedThis==ComputedScopeRef.Current`时，计算函数的`this`指向计算函数所在的对象。

```tsx 
/**
 * title: ComputedScopeRef.Current
 * description: store.computedThis==ComputedScopeRef.Current,
 */
import { createStore,ComputedScopeRef } from '@speedform/reactive'; 
const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: function(user){
      // this指向user对象      
      return this.firstName+this.lastName
    }
  }
} 
const store = createStore<typeof user>({state},{
  // 指定计算属性的默认上下文指向计算函数所有的当前对象
  computedThis: ComputedScopeRef.Current,
})

export default ()=>{
  const [state,setState] = store.useState()
  return <div> 
    <div>FullName:{state.user.fullName}</div>
  </div>
}
```


#### Parent

当`computedThis==ComputedScopeRef.Parent`时，计算函数的`this`指向计算函数所在的对象的父对象。

```tsx 
/**
 * title: ComputedScopeRef.Parent
 * description: store.computedThis==ComputedScopeRef.Parent
 */
import { createStore,ComputedScopeRef } from '@speedform/reactive'; 
const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: function(user){
      // this指向user对象的父对象，即根
      return this.user.firstName+this.user.lastName
    }
  }
} 
const store = createStore<typeof user>({state},{
  // 指定计算属性的默认上下文指向计算函数所有的当前对象
  computedThis: ComputedScopeRef.Parent,
})

export default ()=>{
  const [state,setState] = store.useState()
  return <div> 
    <div>FullName:{state.user.fullName}</div>
  </div>
}
```


### 字符串

当`computedThis==<字符串>`时，此时`<字符串>`就是指向计算函数所在对象的键名称，`this`指向计算函数所在对象成员。

```tsx
/**
 * title: <字符串>
 * description: store.computedThis==<字符串>
 */
import { createStore } from '@speedform/reactive'; 

const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: function(){
      // this指向user对象的firstName
      return this
    },
    address:{
      city:"Quanzhou",
    }
  }
} 
const store = createStore<typeof user>({state},{
  computedThis: 'firstName'
})

export default ()=>{
  const [state,setState] = store.useState()
  return <div> 
    <div>FullName:{state.user.fullName}</div>
  </div>
}

```

- `computedThis='firstName'`代表`this`指向`user.firstName`,也就是当前计算函数所在对象的`firstName`成员。
- `computedThis='address.city'`代表`this`指向`user.address.city`
- 总之，当`computedThis`是一个字符串时，代表是**当前计算函数所在对象的指定键名称**，并且这个键名称可以是多级的，如`address.city`。

### 字符串数组 

```tsx
/**
 * title: <字符串数组>
 * description: store.computedThis==<字符串数组>
 */
import { createStore } from '@speedform/reactive'; 

const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: function(){
      // this指向user对象的firstName
      return this
    },
    address:{
      city:"Quanzhou",
    }
  }
} 
const store = createStore<typeof user>({state},{
  computedThis: ['user','address','city']
})

export default ()=>{
  const [state,setState] = store.useState()
  return <div> 
    <div>FullName:{state.user.fullName}</div>
  </div>
}

```
`computedThis==<字符串数组>`与`computedThis==<字符串>`的区别在于:
- `computedThis==<字符串数组>`代表是以**根对象**为起点的完整路径，并且这个路径可以是多级的，如`['user','address','city']`。
- `computedThis==<字符串>`代表是以**当前计算函数所在对象**为起点的路径，并且这个键名称可以是多级的，如`address.city`。


### Depends

当`computedThis==ComputedScopeRef.Depends`时，计算函数的`this`指向计算函数的依赖数组。

:::warn
**`ComputedScopeRef.Depends`仅在异步计算时生效,而异步计算必须通过computed函数来指定依赖**
:::

```tsx
/**
 * title: <字符串数组>
 * description: store.computedThis==<字符串数组>
 */
import { createStore,computed,ComputedScopeRef  } from '@speedform/reactive'; 

const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: computed(async (deps)=>{ 
      return deps[0] + deps[1]
    },
      // 声明依赖
      ['user/firstName','user/lastName'], 
    {      
      async:true,
      scope:ComputedScopeRef.Depends
    }) 
  }
} 
const store = createStore<typeof user>({state})

export default ()=>{
  const [state,setState] = store.useState()
  return <div> 
    <div>FullName:{state.user.fullName.result}</div>
  </div>
}

```

## 作用域

计算属性的`作用域`指的是传递给**计算函数的第一个参数**,取值与上下文`computedThis`相同。

- `@speedform/reactive`提供了`computedScope`参数来指定计算函数的全局默认作用域。
- 计算函数也可以在创建时指定作用域(通过`computed`指定，见后续介绍)，优先级高于全局`computedScope`参数。
- `computedScope`取值与`computedThis`基本一样。

 
 
