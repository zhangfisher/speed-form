---
group:
  title: 表单
  order: 1
order: 2
---

# 表单动作

表单动作用来定义表单的提交、重置等行为，你也可以自定义表单动作。

通俗地说，表单动作就是声明一个函数，用来对表单数据进行处理。

## 创建动作

在表单的`actions`中定义表单动作，`actions`是一个对象，action的结构如下：。

```tsx | pure
export interface FormActionDefine<Scope extends Dict=Dict,Result =any>{
    scope?  : string | string[] | (()=>string | string[])           // 动作提交范围
    title?  : ActionComputedAttr<string,Scope>					            // 动作标题    
    help?   : ActionComputedAttr<string,Scope>					            // 动作帮助
    tips?   : ActionComputedAttr<string,Scope>					            // 动作提示
    visible?: ActionComputedAttr<boolean,Scope>					            // 是否可见
    enable? : ActionComputedAttr<boolean,Scope>					            // 是否可用	            
    count:number
    execute :(scope:any,options?:ComputedParams)=> Promise<void | Result>   // 执行动作，用来对表单数据进行处理
} 
```

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
    login:{
      title:"登录",
      execute:(scope,options)=>{
        console.log("登录")
      }
    }
  }
}

export const Login=createForm<typeof schema>(schema,options)

```

**说明**

- 一般情况下，表单`action`声明在`actions`。
- 每个`Action`均可以指定`scope`、`title`、`help`、`tips`、`visible`、`enable`、`count`、`execute`等属性，除了`execute`外，其他均是可选的。

## 执行方法

每个`Action`均可以指定`execute`属性，用来执行动作，`execute`是一个函数，用来对表单数据进行处理。

`execute`本质上是一个函数，一般是异步函数，毕竟要干点什么事嘛，也可以是同步函数，可以有以下几种声明方式：

### async

直接使用异步函数声明

```tsx | pure 

import { createForm }  from "@speedform/core"
export const schema = { 
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
  },
  // 表单动作
  actions:{
    login:{
      title:"登录",
      execute:(scope,options)=>{
        
      }
    }
  }
}

export const Login=createForm<typeof schema>(schema)

export default ()=>{
  const form=Login.useForm()
  const {login}=form.actions
  return <div>
    <div>
      <Login.Field name="username">{
        ({value,sync})=>{
          return <div>用户名：<input value={value} onChange={sync()}/></div>
        }
      }</Login.Field> 
      <Login.Field name="password">{
        ({value,sync})=>{
          return <div>密码：<input value={value} onChange={sync()}/></div>
        }
      }</Login.Field>       
      <Network.Action<typeof Network.fields.wifi.cancelableSubmit> name="" >
          {({title,visible,loading,enable,run,cancel,error,progress})=>{ 
              return <>
                  <Input type="submit" value="提交"/>
                  <Button loading={loading} cancel={cancel} timeout={progress} visible={visible} enable={enable} error={error} onClick={run()}>{title}</Button>
              </>
          }}
      </Network.Action> 
  </div>  
}

```

### action

首选是使用`action`方法进行声明，`action`方法是一个函数，用来声明一个动作。


```tsx | pure

```




## 作用范围


- `scope`：动作提交范围，可以是一个字符串，也可以是一个函数，用来动态计算提交范围。
