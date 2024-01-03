---
group:
  title: 高级
  order: 2
order: 0  
---

# 响应式系统

## 介绍

`SpeedForm`底层数据由一个响应式系统驱动，它可以让你在表单开发中更加灵活、快速地处理数据。

目前`SpeedForm`底层的响应式系统由[helux](https://heluxjs.github.io/helux/guide)驱动，`helux`是一个具备派生计算、依赖收集、信号的响应式状态管理库，它的设计理念与`SpeedForm`的设计理念高度契合，为`SpeedForm`提供了强大的数据驱动能力。


## Store

创建`SpeedForm`时对应创建一个`Store`对象,就如同`Redux`中的`Store`一样,`Store`本质上就是受控的数据对象，使用`helux`的`atom/share`创建。

```ts

const store = createStore({
  state:{},
  actions:{},
})

```

当创建好`Store`后,你可以在组件中用来驱动组件细粒度渲染。

```tsx

import { createStore } from 'speed-form';
import React from 'react'; 

const state = {

}

const store = createStore<typeof state>({state})

export default () => <div>Hello dumi!</div>;

``` 
 



## 计算属性

