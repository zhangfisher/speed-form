---
group:
  title: 高级
  order: 2
order: 0  
demo:
  tocDepth: 5
---

# 响应式系统

## 介绍

`SpeedForm`底层数据由`helux-store`提供响应式系统驱动，它可以让你在表单开发中更加灵活、快速地处理数据。

- `helux-store`底层的响应式系统由[helux](https://heluxjs.github.io/helux/guide)驱动，`helux`是一个具备派生计算、依赖收集、信号的响应式状态管理库，它的设计理念与`SpeedForm`的设计理念高度契合，为`SpeedForm`提供了强大的数据驱动能力。
- `helux-store`是在`helux`的基础上，封装了用来提供更加易用友好的状态库管理。
- 作为`SpeedForm`的底层依赖，了解和掌握`helux-store`的原理和使用方法，可以让你更加深入理解`SpeedForm`的设计理念和使用方法。


## 安装

`SpeedForm`依赖于`helux-store`，安装`SpeedForm`后就已经安装了`helux-store`，也可以独立安装使用`helux-store`。

```shell

pnpm add helux-store
npm install helux-store
yarn add helux-store

```


## Store

创建`SpeedForm`时对应创建一个`Store`对象,就如同`Redux`中的`Store`一样,`Store`本质上就是受控的状态数据对象，使用`helux`的`atom/share`创建。

典型的`Store`结构如下：

![](./store.png)

- `Store`对象中会定义`State`数据结构，一般情况下不允许直接修改`State`数据，而是通过`Action`来修改`State`数据。
- `Action`是一个普通的函数，一般会实现某种业务逻辑，可以是同步函数，也可以是异步函数。执行成功会修改`State`数据。
- 计算属性会侦听`State`的数据变化，当`State`数据变化时，会自动重新计算计算属性的值。

### 创建

`helux-store`提供了`createStore`方法用来创建`Store`对象。

```ts 
const user = {
  firstName:"Zhang",
  lastName:"Fisher",
  age:18
}
 
const store = createStore({
  state:user,       // 声明状态数据
  actions:{},     // 声明状态数据更新方法
},{
  // ...配置参数
})

```

### 配置

`createStore`方法的第二个参数是配置，用来配置`Store`的行为。

```ts
export interface StoreOptions{    
    // 计算函数的默认上下文，即传入的给计算函数的draft对象是根state还是所在的对象或父对象
    // 如果未指定时，同步计算的上下文指向current，异步指定的上下文指向root
    computedThis?: StoreComputedContext
    computedScope?: StoreComputedScope
    // 当创建计算属性前调用
    onCreateComputed?:(keyPath:string[],getter:Function,options:ComputedOptions)=>Function | void    
}
```

## 状态

`helux-store`提供了三种不同的方式来存取状态。

- `useState`: 用来在组件中访问和更新`Store`的状态数据，更新时会导致重新渲染。
- `store.state`: 直接读写`Store`的状态数据，`store.state`返回的是一个响应式对象`reactive`，其实质是通过`Proxy`实现的，当读写`store.state`时，会触发内部的依赖收集，相关计算属性的运行，配合`signal`机制可以自动触发组件的细粒度重新渲染。
- `Action`：通过派发执行`Action`来更新状态。


### 读写状态

当创建好`Store`后,你可以在存取`State`用来驱动组件细粒度渲染。

`Store`对象提供了`useState`方法，用来在组件中访问和更新`Store`的状态数据。其使用方式与`React`的`useState`方法类似。


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
      <button onClick={()=>setState(state=>state.age+=1)}>+Age</button>
    </div>
}

``` 

`useState`还可以接受`getter` 和`setter`两个函数参数，用来获取和设置`State`中的某个属性。


```tsx 
import { createStore } from 'helux-store';
import { ColorBlock }  from "speedform-docs"
const state = {
  firstName:"Zhang",
  lastName:"Fisher",
  fullName:(state)=>state.firstName+state.lastName,
}
const store = createStore<typeof state>({state})

const FirstName = React.memo(()=>{
  const [first] = store.useState((state)=>state.firstName)
  return <ColorBlock name="FirstName" value={first}/>
})
const LastName = React.memo(()=>{
  const [last] = store.useState((state)=>state.lastName)
  return <ColorBlock name="LastName" value={last}></ColorBlock>
})

export default () => { 
  const [firstName,setFirstName] = store.useState((state)=>state.firstName,(state,firstName)=>state.firstName=firstName)
  const [fullName,setFullName] = store.useState<string,[string,string]>(
      (state)=>state.fullName,       // getter
      (state,[first,last])=>{        // 可选,setter
        state.firstName=first
        state.lastName=last
      }
  )
  return <div>
      <FirstName/>
      <LastName/> 
      <div>FullName :{fullName}</div>
      <button onClick={()=>setFirstName(firstName+'r')}>change FirstName</button>
      <button onClick={()=>setFullName(["Hello","Voerkai18n"])}>change FullName</button>
    </div>
}

``` 


### 响应式读写

除了使用`useState`方法读写状态外，`sotre.state`返回的是一个`reactive`响应式对象，你可以直接读写它的属性。

:::info
`响应式对象`指的是可以对该对象进行读取，其修改行为会触发内部的依赖收集，相关计算属性的运行，当然也会自动触发组件的重新渲染。因此，当您使用`store.state.xxx=<value>`直接修改状态时，就绕过了通过`Action`修改`State`的限制。
:::


```tsx
/**
* title: 读取状态
* description: 通过`store.state.firstName`直接读取状态,不通过`useState`方法
*/
import { createStore } from 'helux-store';
import { $ } from "helux"

const state = {
  firstName:"Zhang",
  lastName:"Fisher",
  age:18
}

const store = createStore<typeof state>({state})

export default () => {

  return <div>
      <div>Hello :{store.state.firstName}{' '}{store.state.lastName}</div>
      {/* 引入Signal机制，可以局部更新Age */}
      <div>Age+Signal :{$(store.state.age)}</div>
      {/* 当直接更新Age时，仅在组件当重新渲染时更新 */}
      <div>Age :{store.state.age}</div>
      <button onClick={()=>store.state.age=store.state.age+1}>+Age</button>
    </div>
}

``` 

## 细粒度渲染

使用上述`helux-store`提供的方法更新状态后会导致组件重新渲染，其可以提供更加细粒度的渲染。

###  Context

作为对比，我们先看一个传统的`Context`的渲染例子。

```tsx
import { createStore } from 'helux-store';
import React,{createContext,useContext,useState} from "react"
import { ColorBlock } from "speedform-docs"
 
const ctx = createContext({
  firstName:"Zhang",
  lastName:"Fisher",
  age:18
})

const Child = React.memo((props)=>{
    const context=useContext(ctx)
    return <ColorBlock name={`子组件:${props.name}`}>
      <div>Hello :{context.firstName}{' '}{context.lastName}</div> 
    </ColorBlock>
})
let count:number = 0
export default ()=>{
  const [user,setUser] = useState({
    firstName:"Zhang",
    lastName:"Fisher",
    age:18
  })
  return <ctx.Provider value={user}>
      <div>根组件</div>
      <div>Hello :{user.firstName}{' '}{user.lastName}</div>
      <div>Age :{user.age}</div>
      <button onClick={()=>{
        setUser({firstName:"Zhang",lastName:"Fisher",age:++count})
      }}>+Age</button>
      <Child name="A"/>
      <Child name="B"/>
    </ctx.Provider>
}

```

从上面的例子可看到，当更新`Context.age`时，所有的子组件不管是否有使用`Age`均会重新渲染，而这是不必要的，因为子组件并没有使用到`Context`的数据，为些我们需要使用一些第三方库来解决此问题。

:::info
**最大的问题在于，当更新根Context时，所有的子组件都会重新渲染，这是不必要的，因为子组件并没有使用到根Context的数据。我们希望能实现更细粒度的渲染，只有当子组件使用到的数据发生变化时，才会重新渲染。**
::: 

### useState

使用`helux-store`的`useState`可以使**渲染颗粒度限定在组件范围**，只有使用到数据的组件才会重新渲染。

```tsx
import { createStore } from 'helux-store';
import React,{createContext,useContext,useState} from "react"
import { ColorBlock } from "speedform-docs"
import { $ } from "helux"

const state = {
  firstName:"Zhang",
  lastName:"Fisher",
  age:18
}

const store = createStore<typeof state>({state})

const FirstName = React.memo((props)=>{
    const [state,setState] = store.useState()
    const {firstName} = state
    return <ColorBlock name={`子组件:FirstName`}>
      <div>Hello :{firstName}</div> 
    </ColorBlock>
})
const LastName = React.memo((props)=>{
    const [state,setState] = store.useState()
    const {lastName} = state
    return <ColorBlock name={`子组件:lastName`}>
      <div>Hello :{lastName}</div> 
    </ColorBlock>
})
let count=0
export default ()=>{ 
  const [state,setState] = store.useState()
  return <>
      <div>根组件</div>
      <div>Hello :{state.firstName}{' '}{state.lastName}</div>
      <div>Age {++count}:{state.age}</div>
      <button onClick={()=>setState(draft=>draft.age=draft.age+1)}>+Age</button>
      <button onClick={()=>setState(draft=>draft.firstName=draft.firstName+"r")}>Change FirstName</button>
      <FirstName/>
      <LastName/>
    </>
}

```

- 在上例中，当更新`Age`时，仅根组件会重新渲染，而`FirstName`和`LastName`不会重新渲染，因为它们并没有使用到`Age`。
- 当在根组件中更新`FirstName`时，仅`FirstName`会重新渲染。而`LastName`组件中没有`FirstName`，所以不会重新渲染。



### Signal

`helux-store`提供了`Signal`机制，可以实现更细粒度的渲染，可以实现仅有当变更的部分会重新渲染。
基于`Signal`,**渲染颗粒度可以是组件中的一个片段**，更加精细，更加高效。


```tsx
import { createStore } from 'helux-store';
import React,{createContext,useContext,useState} from "react"
import { ColorBlock } from "speedform-docs"
import { $ } from "helux"

const state = {
  firstName:"Zhang",
  lastName:"Fisher",
  age:18
}

const store = createStore<typeof state>({state})

const FirstName = React.memo((props)=>{
    return <ColorBlock name={`子组件:FirstName`}>
      <div>Hello :{store.state.firstName}{' '}{store.state.lastName}(没有使用Signal)</div> 
    </ColorBlock>
})
const LastName = React.memo((props)=>{
    return <ColorBlock name={`子组件:LastName`}>
      <div>Hello :{$(store.state.firstName)}{' '}{store.state.lastName}</div> 
    </ColorBlock>
})
let count=0
export default ()=>{ 

  return <>
      <div>根组件</div>
      <div>Hello :{store.state.firstName}{' '}{store.state.lastName}</div>
      <div>Age {++count}:{$(store.state.age)}</div>
      <button onClick={()=>store.state.age=store.state.age+1}>+Age</button>
      <button onClick={()=>store.state.firstName=store.state.firstName+"r"}>Change FirstName</button>
      <FirstName/>
      <LastName/>
    </>
}

```
- 在上例中，当更新`Age`时，仅根组件会重新渲染，而`FirstName`和`LastName`不会重新渲染，因为它们并没有使用到`Age`。
- 当更新`FirstName`时，仅`FirstName`会重新渲染。而`LastName`组件中虽然用到了`FirstName`，但是没有使用`$(FirstName)`，也就是使用信号，所以不会重新渲染。
- `store.state`是一个响应式对象`reactive`,本质上是一个`Proxy`对象来收集依赖。然后使用`$(<reactive>)`数据变更仅触发`$`符号区域内重渲染，从而实现最细粒度的渲染。
- 关于`Signal`的更多内容请参考[Signal](https://heluxjs.github.io/helux/guide/signal)。

## 计算属性

细心的朋友可能发现，在上面的`createStore`中我们没有声明任何的计算属性，但这并不是不支持计算属性，而是`helux-store`提供了**独特的计算属性的声明方式**。`helux-store`提供的计算属性的声明方式是`SpeedForm`之所以能提供无以伦比用户开发体验的关键。

### 基本原理

:::info
**`helux-store`实现了最独特的移花接木式的计算属性实现方式**
:::

![](./computed.png)

**基本过程如下：**

1. 首先直接在`State`中声明计算属性函数，如`fullName=(user)=>user.first+user.last`。
2. 调用`createStore`创建`Store`时，会根据`State`中的函数来创建`mutate`或`computed`(在`helux`中叫派生对象，在其他状态库中可能叫计算算属性)。
3. 如此，当`State`中的数据变化时，会自动触发计算属性的重新计算，将计算结果赋值给`State`中的对应属性。在上图中，当`firstName`和`lastName`变化时，会自动触发`fullName(mutate)`的重新计算，将计算结果赋值给`user.fullName`属性。这样，当我们访问`state.fullName`时,就是一个字符串了，而不是一个函数了。

**以上就是`helux-store`计算属性移花接木的过程原理,大家可以从下面示列中加深理解。**

```tsx
/**
 * defaultShowCode: true
 */
import { createStore } from 'helux-store';
import { Divider } from "speedform-docs"

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
  return <div>
    <Divider title='声明时fullName是一个函数'/>
    <div>typeof(user.fullName)={typeof(user.fullName)}</div>
    <Divider title='创建Store后,state.fullName是一个字符串'/>
    <div>typeof(store.state.fullName)={typeof(state.fullName)}</div>
    <div>store.state.fullName=={state.fullName}</div>
  </div>
}
```

在上例中：
- `user.fullName`是一个函数
- `store.state.fullName`是一个字符串
- 默认情况下，`createStore`直接在输入的`user`上进行创建，指定`singleton:false`时会深拷贝一份`user`，然后在拷贝的`user`上创建`mutate`或`computed`。

### 上下文

在学习如何声明创建计算属性之前，我们先来了解一下`计算上下文`的概念。

:::info
 **`计算上下文`指的是计算属性函数执行时的上下文对象，即`this`指向的对象。**
:::

`helux-store`在创建`Store`时，支持配置`computedThis`参数来指定计算属性函数的默认`this`上下文，`computedThis`取值如下：

```ts
export enum ComputedScopeRef{
    Root = 0,               // 指向State根对象
    Current = 1,            // 指向计算属性所在的对象
    Parent = 2,             // 指向计算属性所在对象的父对象
    Depends = 3             // 指向异步计算的依赖数组，仅在异步计算时生效
}

// 指定Store中计算函数的上下文,如果是字符串代表是当前对象的指定键，如果是string[]，则代表是当前Store对象的完整路径
export type StoreComputedScope  = ComputedScopeRef | string | string[] | ((state:any)=>string | string[] | ComputedScopeRef)

```

- **ComputedScopeRef.Root**

默认情况下，`helux-store`会将计算属函数的上下文指向`ComputedScopeRef.Root`，即当前的`State`根对象，如下：

```tsx 
/**
 * title: ComputedScopeRef.Root
 * description: store.computedThis==ComputedScopeRef.Root,
 */
import { createStore } from 'helux-store'; 
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

- **ComputedScopeRef.Current**

当`computedThis==ComputedScopeRef.Current`时，计算函数的`this`指向计算函数所在的对象。

```tsx 
/**
 * title: ComputedScopeRef.Current
 * description: store.computedThis==ComputedScopeRef.Current,
 */
import { createStore,ComputedScopeRef } from 'helux-store'; 
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


- **ComputedScopeRef.Parent**

当`computedThis==ComputedScopeRef.Parent`时，计算函数的`this`指向计算函数所在的对象的父对象。

```tsx 
/**
 * title: ComputedScopeRef.Parent
 * description: store.computedThis==ComputedScopeRef.Parent
 */
import { createStore,ComputedScopeRef } from 'helux-store'; 
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


- **字符串** 

当`computedThis==<字符串>`时，此时`<字符串>`就是指向计算函数所在对象的键名称，`this`指向计算函数所在对象成员。

```tsx
/**
 * title: <字符串>
 * description: store.computedThis==<字符串>
 */
import { createStore } from 'helux-store'; 

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

- **字符串数组** 

```tsx
/**
 * title: <字符串数组*>
 * description: store.computedThis==<字符串数组>
 */
import { createStore } from 'helux-store'; 

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


- **ComputedScopeRef.Depends**

当`computedThis==ComputedScopeRef.Depends`时，计算函数的`this`指向计算函数的依赖数组。

:::warn
**`ComputedScopeRef.Depends`仅在异步计算时生效**
:::


### 作用域

计算属性的`作用域`指的是传递给**计算函数的第一个参数**,

- `helux-store`提供了`computedScope`参数来指定计算函数的全局默认作用域。
- 计算函数也可以在创建时指定作用域(通过`computed`指定，见后续介绍)，优先级高于全局`computedScope`参数。
- `computedScope`取值与`computedThis`基本一样。


:::info   

**为什么计算函数的`this`要玩这么多花样？**

一切均是为了提供更好的开发体验，让你可以更加灵活地处理数据，更加高效地开发。

:::

 

### 同步计算

同步计算属性直接声明在状态中，本质上是一个普通的函数，当状态变化时，会自动重新计算。

要声明同步计算属性，可以有两种方式：

#### 直接在`State`中声明同步计算函数

```ts
const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: (user)=>{
      return user.firstName+user.lastName
    } 
  }
} 
```
- `fullName`是一个同步计算属性，当`firstName`或`lastName`变化时，会自动重新计算`fullName`的值。
- `fullName`的第一个参数(即`作用域`)是由`createStore`时指定的`computedScope`指定的,默认指定的`ComputedScopeRef.Current`。因此，`fullName`的第一个参数是`user`对象。
- 如果同步计算函数是一个普通函数而不是箭头函数，那么`this`指向是由`createStore`时指定的`computedThis`确定的。


#### 使用`computed`函数声明**

直接在`State`中声明同步计算函数的方式，有一个缺点，就是无法指定计算函数的`this`和`作用域`，因此`helux-store`提供了`computed`函数来声明同步计算函数,允许做更多的控制。


```ts {6,9}
const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName:computed<string>((state)=>{
      return state.user.firstName+state.user.lastName
    },{
      context:ComputedScopeRef.Root             // 计算函数的this
      scope:ComputedScopeRef.Root               // 计算函数的第一个参数
    }) 
  }
} 
```

由于可以指定`computedScope`,因此计算函数就可以实现相对计算。


```tsx
import { createStore,ComputedScopeRef } from 'helux-store';

const state = {
  books:[
    {name:'张三',price:18,author:'tom',count:2,total:(book)=>book.price*book.count},
    {name:'李四',price:19,author:'jack',count:3,total:(book)=>book.price*book.count}
  ],
  total:(state)=>state.books.reduce((total,book)=>total+book.total,0)
}

const store = createStore<typeof state>({state})

export default ()=>{
  const [state,setState] = store.useState()
  return <table>
    <thead>
      <tr>
        <th>书名</th>
        <th>作者</th>
        <th>单价</th>
        <th>数量</th>
        <th>小计</th>
      </tr>
    </thead>
    <tbody>
      {state.books.map((book,index)=>{
        return <tr key={index}>
          <td>{book.name}</td>
          <td>{book.author}</td>
          <td>{book.price}</td>
          <td>
            <button onClick={()=>store.state.books[index].count=store.state.books[index].count-1}>-</button>
            {book.count}
            <button onClick={()=>store.state.books[index].count=store.state.books[index].count+1}>+</button>
          </td>
          <td>{book.total}</td>
        </tr>
      })}
      <tr>
        <td colSpan={4}>总计</td>
        <td>{state.total}</td>
        </tr>
    </tbody>
  </table>
}
```


### 异步计算

异步计算属性是一个异步函数，当状态变化时，会自动重新计算。跟同步计算属性有一个很大的不同在于：

#### 理解异步计算

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
typeof()
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
import { createStore,computed } from 'helux-store';
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
    <div>FullName:{state.user.fullName.loading ? '正在计算...' : state.user.fullName.value}</div>
    {/* <div>error:{state.user.fullName.error}</div> */}
    <button onClick={()=>setState((state)=>state.user.firstName='ZHANG '+count.current++)}>修改FirstName</button>
    <button onClick={()=>setState((state)=>state.user.lastName='FISHER'+count.current++)}>修改LastName</button>

    {/* <button onClick={()=>state.user.fullNameX.reset()}>重新计算</button> */}
  </div>)
}
```
 


#### 直接在`State`中声明异步计算函数


#### 使用`computed`中声明异步计算函数


### computed函数
