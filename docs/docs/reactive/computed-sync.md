---
group:
  title: 计算属性
  order: 2
order: 0  
title: 同步计算
demo:
  tocDepth: 5
---


## 介绍
  
同步计算属性直接声明在状态中，本质上是一个普通的函数，,当`State`中的数据变化时，会自动触发计算属性的重新计算，将计算结果赋值给`State`中的对应属性。

## 依赖收集

同步计算属性的依赖收集是自动的，不需要显式指定依赖参数，当`State`中的所依赖的数据变化时，会自动触发计算属性的重新计算。 

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
上例中，`fullName`是一个计算属性，其依赖于`firstName`和`lastName`,内部的实现机制是这样的：

- 首先整个`state`已经被包装为一个深层的`proxy`对象
- 当第一次运行时会自动执行`fullName`这个函数，然后会触发读取`firstName`和`lastName`的`proxy`，在读取`firstName`和`lastName`的`proxy`时，会自动收集`fullName`的依赖并保存起来，这样就可以自动获取到`fullName`的依赖了。
- 以上仅仅依赖收集的是一个基本思路，实际上`@speedform/reactive`的依赖收集机制是非常复杂的，它可以自动处理`Array`和`Object`等等，其核心是由`helux`提供的支持。


## 快速声明

可以直接在`State`中声明同步计算函数。

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


## `computed`

直接在`State`中声明同步计算函数的方式，有一个缺点，就是无法指定计算函数的`this`和`作用域`，因此`@speedform/reactive`提供了`computed`函数来声明同步计算函数,允许做更多的控制。


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
import { createStore,ComputedScopeRef } from '@speedform/reactive';

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

## 计算结果

同步计算属性在声明时是一个函数，经过`createStore`处理后，会自动转换为一个属性，其值是计算结果。

因此，在上例中，`fullName`是一个函数，但是在使用时，`fullName`是一个属性，其值是计算结果。详见上一节计算属性的说明。

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
