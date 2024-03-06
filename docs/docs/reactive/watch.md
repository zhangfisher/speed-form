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

`@speedform/reactive`提供`watch`功能，用来监视`State`数据的变化,当所监视的数据发生时，可以执行侦听器函数。


提供三种使用`watch`的方式：

- 直接在`State`中声明`watch`函数,然后将侦听器返回值写入声明`watch`函数所在的位置。
- 调用`store.watch`函数，用来侦听`State`中的数据变化。
- 在组件中调用`store.useWatch`函数，用来侦听`store`对象的变化,当组件销毁自动取消订阅。


## 状态内侦听

`@speedform/reactive`提供了`watch`函数，用来在`state`声明来侦听`State`中的数据变化。

`watch`函数的基本特性如下：

- `watch`可以用来侦听整个`store`对象的变化，当侦听到变化时会执行侦听器函数。
- 侦听器函数只能是一个同步函数。
- 侦听器函数的返回值会写入`watch`函数所在的位置。 


### 基本用法

`watch`函数签名如下：

```typescript
function watch<Value = any,Result=Value>(
  listener:WatchListener<Value,Result>,
  on:WatchOptions['on'],
  options?:WatchOptions<Result>):WatchDescriptor<Value,Result>

  
export interface WatchOptions<R=any>{ 
    // 指定额外的过滤条件，如果返回true，才会触发listener的执行
    // 此函数会在表单中的每一个值发生变化时执行，如果返回true，则会触发listener的执行  
    // 由于此函数会在表单中的每一个值发生变化时均会执行，所以此函数应该尽量简单，不要有复杂的逻辑      
    // 如果大量的表单字段均需要监听，则可能会有性能问题
    // 一般在动态依赖时使用
    on?:(path:string[],value:any)=>boolean 
    initial?:R,  
    /**
     * 用来对表单内的watch进行分组，以便能按组进行enable或disable或其他操作
     */  
    group?:string
    /**
     *  启用或禁用watch，默认为true
     */
    enable?:boolean
}
 
```

`watch`函数基本使用如下：


```tsx 
import { createStore,watch } from '@speedform/reactive';
import { Divider,Field } from "@speedform/demo-components"

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
- ``

### 侦听函数

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
- `getSelfValue`参数用来读取当前`watch`所在位置的当前值。
- `selfPath`参数用来读取当前`watch`所在位置的路径。
- `srcPath`参数用来读取发生变化的值所在的路径。
- `getCache`参数用来读取当前`watch`所在位置的缓存对象，供保存一些临时值。

### 缓存对象

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




## 侦听状态

除了可以在`State`中声明`watch`函数外，我们还可以在`Store`对象中声明`watch`函数，用来侦听`State`中的数据变化。

```tsx 
import { createStore,computed,ComputedScopeRef } from "@speedform/reactive" 
import { useEffect,useState } from "react"
const user = {
  user:{
    firstName:"zhang",
    lastName:"fisher",
    fullName: computed(async ([first,last])=>{ 
      return first + last
    },[
      "user/firstName",
      "user/lastName"
    ],{   
      scope:ComputedScopeRef.Depends
    }) 
  } 
}

const store = createStore({state:user})


export default ()=>{
  const [state]=store.useState()
  const [watchKey,setWatchKey] = useState('')
  useEffect(()=>{
    const unwatch = store.watch((valuePaths:string[])=>{
      setWatchKey(valuePaths.map(p=>p.join("/")).join(","))
    },[
      "user/firstName",
      "user/lastName"
    ])
    return unwatch
  },[])

  return  (<div>
      <div>watch: {watchKey}</div>
      <div>firstName=<input value={state.user.firstName} onChange={store.sync(to=>to.user.firstName)}/></div>
      <div>lastName=<input value={state.user.lastName} onChange={store.sync(to=>to.user.lastName)}/></div>
      <div>fullName={state.user.fullName.result}</div> 
    </div>)
}

```
## 组件内侦听

在组件内侦听可以使用`store.useWatch`函数，用来侦听`store`对象的变化,当组件销毁自动取消订阅。
 
```tsx 
import { createStore,computed,ComputedScopeRef } from "@speedform/reactive" 
import { useEffect,useState } from "react"
const user = {
  user:{
    firstName:"zhang",
    lastName:"fisher",
    fullName: computed(async ([first,last])=>{ 
      return first + last
    },[
      "user/firstName",
      "user/lastName"
    ],{   
      scope:ComputedScopeRef.Depends
    }) 
  } 
}

const store = createStore({state:user})


export default ()=>{
  const [state]=store.useState()
  const [watchKey,setWatchKey] = useState('')

  store.useWatch((valuePaths:string[])=>{
      setWatchKey(valuePaths.map(p=>p.join("/")).join(","))
    },[
      "user/firstName",
      "user/lastName"
  ]) 

  return  (<div>
      <div>watch: {watchKey}</div>
      <div>firstName=<input value={state.user.firstName} onChange={store.sync(to=>to.user.firstName)}/></div>
      <div>lastName=<input value={state.user.lastName} onChange={store.sync(to=>to.user.lastName)}/></div>
      <div>fullName={state.user.fullName.result}</div> 
    </div>)
}

```

## 侦听对象

通过`Store.watchObjects`可以访问所有声明的`watch`对象，可以进行相关的动态移除/禁用等操作。


```tsx 
import { createStore,computed,ComputedScopeRef,watch } from "@speedform/reactive" 
import { useEffect,useState } from "react"
import { ColorBlock,Divider } from "@speedform/demo-components"

function createTotalWatch(group){
  return watch((count,{state})=>{ 
      return state.price * count
    },(valuePath:string[])=>{
      return valuePath[valuePath.length-1]==='count'
    },{
      initial:2,
      group
    }) 
}


const user = {
    bookName:"zhang",
    price:2,
    count:1,
    total1: createTotalWatch("a"),
    total2: createTotalWatch("a"),
    total3: createTotalWatch("b"),
    total4: createTotalWatch("b"),
    total5: createTotalWatch("b")
  } 

const store = createStore({state:user})

globalThis.Store = store

export default ()=>{
  const [state,setState]=store.useState()
  if(typeof(state.total1)==='function'){
   console.warn("state.total1 is function")
   
  }
  return  (<div>
      <div>bookName={state.bookName}</div>
      <div>price={state.price}</div>
      <div>count=
        <button onClick={()=>setState(book=>book.count=book.count-1)}>-</button>
        <input value={state.count} onChange={store.sync(to=>to.count)}/>
        <button onClick={()=>setState(book=>book.count=book.count+1)}>+</button>
      </div>
      <Divider name="A Group"/>
      <ColorBlock name="Total-1" value={state.total1}/>
      <ColorBlock name="Total-2" value={state.total2}/>
      <button onClick={()=>store.watchObjects.enableGroup("a",true)}>Enable A Group</button>
      <button onClick={()=>store.watchObjects.enableGroup("a",false)}>Disable A Group</button>
      <div>当禁用A Group时，修改count时不会导致total变化，因为该组被禁止执行了</div>
      <Divider name="B Group"/>
      <ColorBlock name="Total-3" value={state.total3}/>
      <ColorBlock name="Total-4" value={state.total4}/>
      <ColorBlock name="Total-5" value={state.total5}/>      
      <button onClick={()=>store.watchObjects.enableGroup("b",true)}>Enable B Group</button>
      <button onClick={()=>store.watchObjects.enableGroup("b",false)}>Disable B Group</button>
    </div>)
}
```

## 与计算属性区别

:::info

本节请在阅读完计算属性一节后再阅读。 

:::

`watch`函数与`computed`函数功能的区别如下：

- `computed`函数是用来声明计算属性的，`watch`函数是用来侦听`State`中的数据变化的。
- `computed`函数的返回值会写入`State`中的对应属性，`watch`函数的返回值会写入`watch`函数所在的位置。
- `computed`函数的创建的计算属性是基于依赖收集的，而`watch`函数是基于侦听的,每当`State`状态变化时均会调用`watchOptions.on`过滤函数来匹配侦听函数，因此理论上，`computed`函数的性能更好，而`watch`函数性能会差些。
- `watch`只能是同步侦听函数，而`computed`可以是异步函数。

## 适用范围

大部份情况下，我们应该使用`computed`函数来声明计算属性，而不是使用`watch`函数来侦听`State`中的数据变化。但是在一些特殊情况下，我们可能需要使用`watch`函数，主要在于：

- **指定动态依赖**

`computed`计算函数的依赖一般是确定的，而`watch`函数的依赖是动态的。这比较适合一些需要动态侦听的场景，比如上例中，我们动态侦听`orders[].count`的变化来计算`total`。而`computed`函数的依赖是静态的，一旦声明就不会变化。

- **多字段复合计算**

当某个字段需要进行复合计算时，我们可以使用`watch`函数来实现。比如在`SpeedForm`实现表单的`validate`和`dirty`属性的计算时，就是使用`watch`实现。

比如这是检测表单`validate`计算：

```tsx | pure
export function validate<T=any>(options?:ValidateOptions){
    const { entry  } = Object.assign({},options)
    return watch<boolean,boolean>((value,{ triggerPath,selfPath,getCache})=>{        
        // 只侦听entry下的所有字段
        if(!isIncludePath(entry ? entry : selfPath,triggerPath)) return   
        const selfCache = getCache()  // 得到的是一个Dict用来保存所有字段的validate属性值
        // validate属性是一个boolean
        if(typeof(value)=='boolean'){
            const srcKey = triggerPath.join(OBJECT_PATH_DELIMITER)
            if(value){
                delete selfCache[srcKey]
            }else{
                selfCache[srcKey] = value
            }
        }
        // 由于cache里面只记录validate=false的值，所以如果cache不为空则代表有字段的validate=false
        return Object.keys(selfCache).length==0
    },(path)=>isValidateField(path),{
        initial:true
    })
}
 
```



