---
title: 监视
group:
  title: 基础
  order: 1 
order: 4
demo:
  tocDepth: 5
---

## 介绍

可以在`Store`对象中声明`watch`函数，用来监视`State`数据的变化,当所监视的数据发生时，可以侦听器函数，然后将侦听器返回值写入声明`watch`函数所在的位置。

`watch`函数的基本特性如下：

- `watch`可以用来侦听整个`store`对象的变化，当侦听到变化时会执行侦听器函数。
- 侦听器函数只能是一个同步函数。
- 侦听器函数的返回值会写入`watch`函数所在的位置。 


## 基本用法

`watch`函数签名如下：

```typescript
function watch<Value = any,Result=Value>(
  listener:WatchListener<Value,Result>,
  on:WatchOptions['on'],
  options?:WatchOptions<Result>):WatchDescriptor<Value,Result>
```

`watch`函数基本使用如下：


```tsx 
import { createStore,watch } from 'helux-store';
import { Divider,Field } from "speedform-docs"

const book = {
  orders:[
    { bookName:"SpeedForm Quick-Start",
      price:100,
      count:1,
      total:(book)=>book.price*book.count
    },
    { bookName:"Helux",
      price:98,
      count:1,
      total:(book)=>book.price*book.count
    }
  ],  
  total: watch<true>((count)=>{
     return store.state.orders.reduce((total,book)=>total+book.count*book.price,0)
  },
  // 当price或count变化时，触发侦听器函数的执行
  (path:string[])=>{
      return path[path.length-1]==='count'
    },{    
    initial:198         // total的初始值
  })
}

const store = createStore<typeof book>({state:book},{singleton:false})
 
export default ()=>{
  const [state] = store.useState()
  return (<table>
      <thead>
        <tr>
          <th>BookName</th>
          <th>Price</th>
          <th>Count</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {state.orders.map((book,index)=>
          <tr key={index}>
            <td>{book.bookName}</td>
            <td>{book.price}</td>
            <td><input value={book.count} onChange={store.sync(to=>to.orders[index].count)}/></td>
            <td>{book.total}</td>
          </tr>
        )}
        <tr>
          <td colSpan={3}>Total</td>
          <td>{state.total}</td>
        </tr>
        </tbody>
    </table>)
}

```

> 注意：事实上以上示例更适合使用`计算属性`特性来实现，示例仅仅是演示其可以侦听动态依赖属性的特性


在以上例子中：

- `watch`函数的第一个参数是一个函数，用来侦听`State`中的数据变化。
- `watch`函数的第二个参数是一个对象，用来配置`watch`函数的行为。
- `on`属性用来配置`watch`函数的触发条件，传入的是发生变化的值所在的路径。
- `initial`属性用来配置`watch`函数所在位置的`total`的初始值。

## 侦听函数

`watch`的侦听函数只能是一个**同步函数**，签名如下：

```typescript
 type WatchListener<Value=any, Result= Value> = (value:Value,options:WatchListenerOptions<Result>)=>(Exclude<Result,Promise<any>> | undefined)

type WatchListenerOptions<Result=any> = {
  getSelfValue:()=>Result ,    // 返回当前watch所在位置的当前值
  selfPath:string[] ,       // 返回当前watch所在位置的路径
  srcPath:string[],       // 返回发生变化的值所在的路径
  getCache:()=>Dict       // 返回当前watch所在位置的缓存对象
}
```

- 当`State`中的数据发生变化时，会调用`watch`第二个参数指定的函数，如果返回`true`，则会调用执行侦听函数。
- 侦听函数的第一个入参是`value`，指的是发生变化的新值。显然，如果`watch`函数的依赖范围很广，则`value`类型也可能是不固定的。
- 侦听函数的`getSelfValue`参数用来读取当前`watch`所在位置的当前值。
- 侦听函数的`selfPath`参数用来读取当前`watch`所在位置的路径。
- 侦听函数的`srcPath`参数用来读取发生变化的值所在的路径。
- 侦听函数的`getCache`参数用来读取当前`watch`所在位置的缓存对象，供保存一些临时值。

## 缓存对象

侦听函数的`getCache`参数用来获取一个仅供当前侦听函数使用缓存对象`{}`，供保存一些临时值。

下面举个例子来说明其用途。

在`SpeedForm`中，每一个字段均有一个`validate`用来声明其验证结果，而整个表单根对象也有一个`validate`用来表示表单是否有效。当某个字段的`validate`发生变化时，我们需要重新计算整个表单的`validate`。

- 需要使用**动态依赖**，即侦听表单中的所有`validate`的值。注：如由于一个表单字段可能很多或者是动态生成的，所以其依赖是动态的。
- 需要使用**缓存对象**，用来记住表单编辑过程中所有字段的`validate`值，以便眼后计算整个表单的验证结果。

**我们可以使用`watch`函数来实现。**

```tsx | pure
const formState={
    validate:watch((value,{getCache,srcPath})=>{
      const cache = getCache()
      // 在cache中保存字段的validate值
      cache[srcPath.join('.')]=value
      // 整个表单的validate值是由所有字段的验证值进行计算而来的
      return Object.values(cache).every(validate=>validate)
    },
    // 动态依赖
    (path)=>path[path.length-1]==='validate',
    // 指定初始值
    {initial:true}
    )  
}
```
在进行表单验证时，我们可以使用`formState.validate`来获取整个表单的验证结果。

## 与计算属性区别

:::info

本节请在阅读完计算属性一节后再阅读。 

:::

`watch`函数与`computed`函数功能的区别如下：

- `computed`函数是用来声明计算属性的，`watch`函数是用来侦听`State`中的数据变化的。
- `computed`函数的返回值会写入`State`中的对应属性，`watch`函数的返回值会写入`watch`函数所在的位置。
- `watch`只能是同步侦听函数，而`computed`可以是异步函数。

## 适用范围

大部份情况下，我们应该使用`computed`函数来声明计算属性，而不是使用`watch`函数来侦听`State`中的数据变化。但是在一些特殊情况下，我们可能需要使用`watch`函数，主要在于：

- **指定动态依赖**

`computed`计算函数的依赖一般是显式或隐式的，而`watch`函数的依赖是动态的。这比较适合一些需要动态侦听的场景，比如上例中，我们动态侦听`orders[].count`的变化来计算`total`。而`computed`函数的依赖是静态的，一旦声明就不会变化。

- **多字段复合计算**

当某个字段需要进行复合计算时，我们可以使用`watch`函数来实现。比如在`SpeedForm`实现表单的`validate`和`dirty`属性的计算时，就是使用`watch`实现，有兴趣的朋友可以查看`SpeedForm`的源码。

