---
group:
  title: 计算属性
  order: 2
title: 计算对象
order: 4 
demo:
  tocDepth: 5
---

## 介绍

当使用`computed`创建好计算属性后，我们可以通过`store.computedObjects`来管理所有`store`内的计算属性。

通过`store.computedObjects`可以访问到所有的计算对象，计算对象是一个`Map`对象，其中的`key`是计算对象的`name`，`value`是计算对象的`value`。

```tsx

import { createStore,computed } from '@speedform/reactive';
import { Divider,ColorBlock } from "@speedform/demo-components"
let count=0
const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: (user)=>{
      return user.firstName+user.lastName + ` (${++count})`
    },
    fullName2: computed(async (user)=>{
      return user.firstName+user.lastName+ ` (${++count})`
    },[],{async:true})
    // Q: 为什么此处要指定async=true?
    // A: 因此本站使用webpack/babel进行转码，因此无法自动识别async函数，因此需要手动指定async=true
  }
} 

const store = createStore<typeof state>({state})

export default ()=>{
  const [state] = store.useState()

  return (<div>
    <div>FirstName ={state.user.firstName}</div>
    <div>LastName ={state.user.lastName}</div>
    <ColorBlock name="FullName"  value={state.user.fullName}/>
    <ColorBlock name="FullName2"  value={state.user.fullName2.result}/>
    <Divider/>
    <div>typeof(store.computedObjects)=={typeof(store.computedObjects)}</div>
    <div>store.computedObjects instanceof Map={String(store.computedObjects instanceof Map)}</div>
    <div>store.computedObjects.size={store.computedObjects.size}</div>
    <div>store.computedObjects.size={store.computedObjects.size}</div>
    <div>store.computedObjects.keys()={[...store.computedObjects.keys()].join(" , ")}</div>
    <button onClick={()=>store.computedObjects.get("user/fullName").run()}>执行fullName计算函数</button>
    <button onClick={()=>store.computedObjects.get("user/fullName2").run()}>执行fullName2计算函数</button>
    <button onClick={()=>store.state.user.fullName2.run()}>执行fullName2计算函数</button>
  </div>)
}

```

**说明**:

- 以上创建了一`fullName`和`fullName2`两个计算属性
- `store.computedObjects`是一个`Map`对象,可以通过`store.computedObjects.get("user/fullName")`来获取`fullName`的计算对象，该对象是一个`ComputedObject`实例。
- `ComputedObject`实例有一个`run`方法，可以手动执行计算函数。
- 对于异步计算即可以通过`store.computedObjects.get("user/fullName2").run()`来手动执行计算函数，也可以通过`store.state.user.fullName2.run()`手动执行计算函数。而同步计算只能通过`store.computedObjects.get("user/fullName").run()`来手动执行计算函数。

## 计算对象

每一个计算函数均会创建一个`ComputedObject`实例，保存在`store.computedObjects`,该对象有以下属性和方法:

```tsx | pure
export interface ComputedObject<T=Dict> extends ComputedOptions{
  mutate:IMutateWitness<T> 
  run:(throwError?:boolean)=>Promise<any> | any
}
export class ComputedObjects<T=Dict> extends Map<string,ComputedObject<T>>{  
  async runGroup(group:string)
}
```

- `ComputedObject`是一个普通的`{}`,里面保存了所有`ComputedOptions`，因此通过`ComputedObject`实例可以读取到计算函数的所有属性。
- `ComputedObject`提供了一个`run`方法用来手动执行计算函数。
- `ComputedObjects`是一个`Map`对象，其中的`key`是计算对象的`valuePath`，`value`是的`ComputedObject`。
- 在使用`computed(getter,deps,options)`创建计算属性时，`options`可以通过`ComputedObject`读取和修改

## 计算分组

`ComputedObjects`提供了一个`runGroup`方法，用来执行分组计算。
当使用`computed`方法创建计算属性时，可以传入一个`group`参数，用来为计算属性分组，然后就可以通过`runGroup`方法，用来手动执行该分组计算函数。

```tsx 
import { createStore,computed } from '@speedform/reactive';
import { Divider,ColorBlock } from "@speedform/demo-components"
import { delay } from "speedform-docs"

let count=0
const state = {
  book:{
    name:"Zhang",
    count:4,
    price: 100,
    total1: computed(async (book)=>{
      await delay()
      return book.count*book.price 
    },[],{async:true,group:"total"}),
    total2: computed(async (book)=>{
      await delay()
      return book.count*book.price 
    },[],{async:true,group:"total"}),
    total3: computed(async (book)=>{
      await delay()
      return book.count*book.price 
    },[],{async:true,group:"total"}),
    average1: computed(async (book)=>{
      await delay()
      return book.price/book.count
    },[],{async:true,group:"average"}),
    average2: computed(async (book)=>{
      await delay()
      return book.price/book.count
    },[],{async:true,group:"average"}),
    average3: computed(async (book)=>{
      await delay()
      return book.price/book.count
    },[],{async:true,group:"average"})

    // Q: 为什么此处要指定async=true?
    // A: 因此本站使用webpack/babel进行转码，因此无法自动识别async函数，因此需要手动指定async=true
  }
} 

const store = createStore<typeof state>({state})

export default ()=>{
  const [state] = store.useState()

  return (<div>
    <div>BookName ={state.book.name}</div>
    <div>count = <input value={state.book.count} onChange={store.sync(["book","count"])}/></div>
    <div>price = <input value={state.book.price} onChange={store.sync(["book","price"])}/></div>
    <Divider title="Total Group"/>
    <div>Total1 ={state.book.total1.loading ? '计算中...' : state.book.total1.result}</div> 
    <div>Total2 ={state.book.total2.loading ? '计算中...' : state.book.total2.result}</div> 
    <div>Total3 ={state.book.total3.loading ? '计算中...' : state.book.total3.result}</div> 
    <button onClick={()=>store.computedObjects.runGroup("total")}>执行组total计算函数</button> 
    <Divider title="Average Group"/>
    <div>Average1 ={state.book.average1.loading ? '计算中...' : state.book.average1.result}</div> 
    <div>Average2 ={state.book.average2.loading ? '计算中...' : state.book.average2.result}</div> 
    <div>Average3 ={state.book.average3.loading ? '计算中...' : state.book.average3.result}</div> 
    <button onClick={()=>store.computedObjects.runGroup("average")}>执行组average计算函数</button> 
  </div>)
}


```

## 计算参数

默认情况下，我们推荐使用`computed(getter,deps,options)`方法来创建计算属性,通过`store.computedObject.get("<路径>")`获取到`ComputedObject`实例，然后通过`ComputedObject`实例来读取和修改计算属性的参数。

```tsx
import { createStore,computed } from '@speedform/reactive';
import { Divider,ColorBlock } from "@speedform/demo-components"
import { delay } from "speedform-docs"

let count=0
const state = {
  book:{
    name:"Zhang",
    count:4,
    price: 100,
    total: computed(async (book)=>{
      await delay()
      return book.count*book.price 
    },[],{async:true,group:"total"})
  }
} 

const store = createStore<typeof state>({state})

export default ()=>{
  const [state] = store.useState()

  return (<div>
    <div>BookName ={state.book.name}</div>
    <div>count = <input value={state.book.count} onChange={store.sync(["book","count"])}/></div>
    <div>price = <input value={state.book.price} onChange={store.sync(["book","price"])}/></div> 
    <div>Total ={state.book.total.loading ? '计算中...' : state.book.total.result}</div> 
    
    <button onClick={()=>store.computedObjects.runGroup("total")}>执行组total计算函数</button>   
  </div>)
}

```




