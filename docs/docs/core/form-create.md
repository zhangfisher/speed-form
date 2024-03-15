---
group:
  title: 表单
  order: 2
order: 1  
---

# 创建表单

`SpeedForm`底层数据由一个响应式系统驱动，它可以让你在表单开发中更加灵活、快速地处理数据。

## 创建

一般在独立的文件中使用`createForm`来创建一个表单对象（不是在组件内）。

```tsx | pure
import { createForm }  from "@speedform/core"
export const schema = {
  // 表单属性
  title: "登录表单",
  // 表单字段
  fields:{  
    name: {
      value: "fisher",
      required: true,
      title: "姓名"
    },
    password: {
      value: "123",
      required: true,
      title: "年龄"
    }
    // ...
  },
  // 表单动作
  actions:{
    //
  }
}

export const Login=createForm<typeof schema>(schema,options)


```
创建表单对象时，可以传入`schema`对象，用于配置表单数据和行为。`schema`对象是一个普通的`JSON`数据对象，由以下几部分组件：

- **表单属性**

包括表单标题，状态，脏等表单全局数据。

- **表单字段**

包括表单字段的值，校验，等表单字段数据，并且支持嵌套字段结构。详见[字段](./field.md)。

- **表单动作**

定义表单提交，重置等表单动作。

## 创建参数

`createForm`函数的第二个参数用于配置表单的一些行为。

```tsx | pure
export interface FormOptions{
  /**
    是否调试模式
    启用调试模式后，会在控制台输出一些调试信息
   * */ 
	debug?:boolean										
	/**
	  何时进行数据校验
	  - once : 实时校验
	  - lost-focus : 失去焦点时校验 
	  - submit : 提交时校验
	 */
	validAt?: 'once' | 'lost-focus' | 'submit'	
	/**
   * 
   * 当启用常规提供时用来生成字段名称
   * 
	* 用来生成字段名，如果不指定，则使用默认的字段名生成规则
	* 默认的字段名生成规则是: 字段名 = 字段路径.join('.'),
	* 当字段名称含有.时，可能会有岐义,此时可以自行更改字段名称规则
	* @param valuePath 
	* @returns  {string}
	*/
	getFieldName?:(valuePath:string[])=>string,
	/**
	 * 单例模式
	 * = true时，所有的计算属性都是共享的，否则每个实例都有自己的计算属性	
	 * = false时，会在创建表单时进行深度克隆，这样就可以创建多个互相不干扰的实例
	 */
	singleton?:boolean
}

```
## **表单属性**

我们可以在表单`schema`对象根中声明任意属性，用来表示表单的全局属性。

表单除了`fields`属性外，其他属性均是可选的，一般会包括：

```tsx | pure
import { dirty, validation} from "@speedform/core"
const schema = {
  // 表单属性
  title:"表单标题",
  help:"帮助信息",
  url:"提交目标",
  dirty:dirty(),
  validation:validation(),
  //... 
  fields:{....},
  actions:{...}
}
```
## 表单对象

`createForm`函数返回一个表单对象，该对象包括了一些用来操作表单的`API`。

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `Form` | `组件` | 表单组件 |
| `Field` | `组件` | 表单字段组件 |
| `Group` | `组件` | 表单字段组组件 |
| `Action` | `组件` | 表单动作组件 |
| `Submit` | `组件` | 表单提交动作组件 |
| `Reset` | `组件` | 表单重置动作组件 |
| `getAction` | `方法` | 用来获取在表单字段声明的`Action` |
| `fields` | `Object`  | 返回表单`fields`响应式对象 |
| `actions`| `Object` |  返回表单`actions`响应式对象 |
| `state`|`Object` | 返回表单数据响应式对象 |
| `computedObjects` | `Object` | 返回表单中的所有计算属性对象 |
| `watchObjects` | `Object` | 返回表单中的所有`Watch`对象 |
| `freeze` | `方法` | 冻结表单禁止编辑 |
| `load` | `方法` | 加载JSON数据到表单实例 |
| `getValues` | `方法` | 获取表单数据(只包括表单字段`value`) |
| `validate` | '方法' | 校验整个表单 |
| `useState` | `hook` | 在组件中访问`state` |


## 类型


`createForm`函数接受一个泛型参数，用于定义表单的`schema`对象类型。但是该泛型参数一般可以采用`typeof <schema>`来自动推断，这样就不需要手动定义类型了。
 

