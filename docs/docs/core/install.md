---
group:
  title: 开始
  order: 0
order: 1  
---

# 安装

`SpeedForm`核心由两个包组成：`@speedform/core`和`@speedform/reactive`。

- `@speedform/reactive`是基于[helux](https://heluxjs.github.io/helux/)的响应式状态管理库，用来管理和驱动`Form`组件的状态，是`SpeedForm`功能强大的基础。`@speedform/reactive`可以作为替代`redux`、`mobx`、`zstuand`、`Jotai`的状态管理库独立使用，其本质上是对`helux`状态管理库的封装。
- `@speedform/core`是`SpeedForm`的核心库，它提供了`Form`组件和`Field`组件,本质上是一个`headless`组件库,只负责表单的逻辑处理，不负责具体的渲染。
- `@speedform/antd`是基于`SpeedForm`的`antd`渲染组件库，它提供了`Form`组件和`Field`组件的`antd`版本。



```shell
pnpm install @speedform/core @speedform/reactive
yarn add @speedform/core @speedform/reactive
npm install @speedform/core @speedform/reactive
```

