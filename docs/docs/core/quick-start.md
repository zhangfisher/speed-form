---
group:
  title: 开始
  order: 0
order: 1

---
# 快速入门

本节将通过开发一个网络配置表单，体验`SpeedForm`的强大与灵活。

该网络配置表单具有以下特性：

- 网络配置表单结构如下：

```js
{
  "title":"网络配置名称",
  "interface":"接口类型",
  "ip":"IP地址",
  "gateway":"网关地址",
  "dhcp":{
    "enable":true,          //自动获取IP地址
    "start":"起始地址",
    "end":"结束地址"
  },
  "wifi":{
    "ssid":"无线网络",
    "password":"无线密码"
  }
}

```

- 表单字段具有以下特性：

  - `title`字段为必填字段，长度不小于3。
  - `interface`字段为下拉选择字段，可选有线网卡或无线网卡。
  - `ip`字段为IP地址字段，需要进行异步校验，用来验证IP地址的有效性。
  - `gateway`字段为IP地址字段。
  - `dhcp`字段为对象类型，包含`enable`、`start`、`end`字段,当`enable=false`，`start`、`end`字段禁用。
  - `wifi`字段为对象类型，包含`ssid`、`password`字段，仅在显示`interface= "wifi"`时显示。 

- `SpeedForm`是一个`headless`组件库，不负责具体的渲染，所以我们在本例中我们使用标准的html组件来渲染表单。

<Divider></Divider>

## 第1步: 安装

`SpeedForm`核心由两个包组成：`@speedform/core`和`@speedform/reactive`。

```shell
pnpm install @speedform/core @speedform/reactive
yarn add @speedform/core @speedform/reactive
npm install @speedform/core @speedform/reactive
```
<Divider></Divider>
## 第2步：声明表单

`SpeedForm`表单使用一个普通`JSON`对象来声明表单元数据，即表单`Schema`。

我们使用一个独立的文件(`network/schema.ts`)来声明表单，这样可以更好地组织表单的结构和便以引用。

```ts | pure
// network/schema.ts

const schema = { 
  title: "网络配置",
  // ....
  // 表单属性
  fields: { 
    // 表单字段声明
  },
  actions:{
    // 表单动作声明
  } 
}
```

表单`Schema`是一个普通的`JSON`对象，它由以下几个部分组成：

- `表单属性`：表单的一些基本属性，如`title`、`description`等。
- `fields`：用来声明本表单的所有字段。
- `actions`：用来声明表单的所有动作,用来进行表单提交等。

<Divider></Divider>

### 声明字段

接下来我们来详细解释一下如何`SpeedForm`表单中声明一个字段。

一个最简单的字段只需要包括一个`value`的属性,如下：

```ts
{  
  title:{
    value: "React-Helux-Form"    
  }
}
```

当然，实际情况我们一般还会声明一些其他额外属性，如`title`、`placeholder`等。因此，一个完整的`title`字段可能会声明如下：


```ts | pure
{  
  title:{
    value: "React-Helux-Form",
    placeholder: "输入网络配置名称",
    title: "网络名称",
    // ...
    // 可以添加任意额外属性
  }
} 
```
<Divider></Divider>
### 字段验证

`SpeedForm`表单中的字段验证是通过`validate`属性来声明的。`validate`属性值是一个函数（可以是`同步函数`，也可以是`异步函数`），其返回值用来验证字段的有效性。

```ts | pure
import { assert } from "@speedform/core"
{  
  title:{
    value: "React-Helux-Form",
    placeholder: "输入网络配置名称",
    title: "网络名称",
    help:"网络名称不能小于3",
    validate:(value)=>{
        return value.length > 3
    }
  }
} 
```
:::info
`SpeedForm`没有内置的验证规则，你可以使用任何你喜欢的验证库，如`yup`、`joi`、`zod`,`validator`等。
:::

<Divider></Divider>

### 同步计算属性

`SpeedForm`表单中的字段的任意元属性（如`select`,`visible`等）是可以直接声明为一个同步或异步函数。

在本例中，`interface.select`是一个同步计算属性，用来返回`interface`的下拉选择的选项。

```ts | pure
{
	interface: {
			value: "wifi",
			title: "网卡类型",
			select: () => {
				return [
					{ value: "wifi", title: "无线网卡" },
					{ value: "ethernet", title: "有线网卡" },
				];
			},
		}
}
```
<Divider></Divider>

### 异步计算属性

`SpeedForm`表单也支持异步计算方式，即通过异步函数来获取数据。

以下为`ip`字段添加异步校验功能，用来验证IP地址的有效性,当`ip`地址的值变化时会自动调用`validate`函数进行校验。


```ts | pure
{
		ip: {
			value: "1.1.1.1",
			title: "IP地址",
			validate: async (value: any) => {
				await delay(2000);
				return validator.isIP(value);
			},
		},
}
```


### 字段显示控制

在本例中，当`interface.value`的值为`wifi`时，`wifi`相关字段才会显示，否则隐藏。

这可以通过为`wifi`字段组提供一个`visible`计算属性来实现。

```ts | pure
{
    wifi: {
      visible: (net: any) => net.interface.value === "wifi",      
      ssid: {
        value: "ssid",
        title: "无线网络",
      },
      password: {
        value: "password",
        title: "无线密码",
      }
    }
}
```

### 字段有效控制

在本例中，当`dhcp.enable`的值为`false`时，`dhcp.start`、`dhcp.end`字段禁用。

这可以通过为字段提供一个`enable`计算属性来实现，当`dhcp.enable`为`false`时，`dhcp.start`和`dhcp.end`字段禁用。
 
```ts | pure
{
  dhcp: {
    enable: {
      title: "自动获取IP地址",
      value: true,
    },
    start: {
      title: "起始地址",
      value: "192.168.1.1",
      enable: computed<boolean>((dhcp: any) => {
          return dhcp.enable.value;
        },{ 
          scope: ComputedScopeRef.Parent
        }
      )
    },
    end: {
      title: "结束地址",
      value: "192.168.1.100", 
      enable: computed<boolean>((fields: any) => {
          return fields.dhcp.enable.value;
        },
        ["dhcp.enable.value"],
        { 
          scope: ComputedScopeRef.Root ,
        }
      )
    },
  }
}
```

### 异步高级控制

在实际场景下，字段中异步计算函数的执行可能会需要进行`加载指示`、`超时`、`不可重入`、`进度显示`、`重试`、`取消`等高级控制。`SpeedForm`支持通过`computed`函数来实现这些高级控制。

比如，我们可以为ip字段的`validate`属性添加`computed`函数来实现`超时`控制。

```ts | pure

{
		ip: {
			value: "1.1.1.1",
			title: "IP地址",
			validate: computed(async (value: any) => {
				await delay(2000);
				return validator.isIP(value);
			},['value'],{
        timeout:1000,
      })
		},
}
```

以上代表`computed`函数声明的`validate`属性是一个异步计算属性，其依赖于`value`值，当`ip.value`值变化时会自动执行`validate`函数。同时设定了执行超时限制。

更多的异步高级控制功能请参考后续字段高级控制以及[@speedform/reactive](/reactive/computed-async)。

### 字段属性

`SpeedForm`表单中的每个字段均可以声明以下属性：

```ts | pure
{
  value        : any                   // 字段值
  defaultValue?: any                   // 默认值
  oldValue?    : any                   // 原始值 
  title?       : string;               // 标题
  help?        : string;               // 提示信息
  placeholder? : string;               // 占位符
  required?    : boolean;              // 是否必填
  readonly?    : boolean;              // 是否只读
  visible?     : boolean;              // 是否可见
  enable?      : boolean               // 是否可用
  dirty?      : boolean                // 数据已经更新过
  validate?    : boolean;              // 验证
  select?      : any[]                 // 枚举值
}  
```

**说明**

- `value`：必须的，代表字段的值。
- 其他字段属性均是可选的
- 所有字段属性均可以是一个同步或异步函数或是通过`computed`包装的计算属性，用来动态计算字段的属性值。


<Divider></Divider>

### 完整表单

以下是完整的表单声明:

```ts | pure
const schema = {
	title: "网络配置",
  // 以下是字段声明
	fields: {
		title: {
			value: "React-Helux-Form",
			placeholder: "输入网络配置名称",
			title: "网络名称",
			validate: (value: string) => value.length > 3,
		},
		interface: {
			value: "wifi",
			title: "网卡类型",
			select: () => {
				return [
					{ value: "wifi", title: "无线网卡" },
					{ value: "ethernet", title: "有线网卡" },
				];
			},
		},
		ip: {
			value: "1.1.1.1",
			title: "IP地址",
			validate: async (value: any) => {
				await delay(2000);
				return validator.isIP(value);
			},
		},
		spareIps:[
			{
				value: "1.1.1.2",
				title: "备用IP地址1"
			},
			{
				value: "1.1.1.3",
				title: "备用IP地址2"
			},
		],
		gateway: {
			value: "1.1.1.1",
			title: "网关地址",
			validate: (value: any) => validator.isIP(value),
		},
		dhcp: {
			enable: {
				title: "自动获取IP地址",
				value: true,
			},
			start: {
				title: "起始地址",
				value: "192.168.1.1",        
				visible: computed<boolean>((dhcp: any) => {
						return dhcp.enable.value;
					},
          ["dhcp/enable/value"],
          { // visible默认scope指向start,此处将其指向父对象即dhcp
						scope: ComputedScopeRef.Parent
					}
				),
				validate: (value: any) => validator.isIP(value),
			},
			end: {
				title: "结束地址",
				value: "192.168.1.100",
				// 将visible的scope指向父对象即dhcp
				visible: computed<boolean>((fields: any) => {
						return fields.dhcp.enable.value;
					},
					["dhcp/enable/value"],
					{  // visible默认scope指向start,此处将其指向根对象
						scope: ComputedScopeRef.Root ,
					}
				),
				validate: (value: any) => validator.isIP(value),
			},
		},
		wifi: {
			title: "无线配置",
			visible: (net: any) => (net as NetworkType).interface.value === "wifi",
			ssid: {
				value: "fast",
				placeholder: "无线网络",
				validate: (value: string) => value.length > 3,
			},
			password: {
				value: "123",
				placeholder: "输入无线密码",
				help: "密码长度应不小于6位",
				validate: (value: string) => value.length >= 6
			}
    }
  }
```

**说明**

- `fields`属性用来声明表单的所有字段。
- 该表单的字段包括`title`、`interface`、`ip`、`gateway`、`dhcp`、`wifi`等字段。
- 每个字段均可以声明`value`、`title`、`placeholder`、`validate`等属性。
- `dhcp`、`wifi`字段是对象类型，包含`enable`、`start`、`end`、`ssid`、`password`等子字段。
- `wifi`字段的`visible`属性是一个同步计算属性，用来控制`wifi`字段组的显示。

<Divider></Divider>

## 第3步：创建表单

在`SpeedForm`中，我们使用`createForm`函数来创建表单对象。

```tsx | pure
// network/schema.ts
import { createForm } from '@speedform/core'
const schema = {...}  // 完整声明见下例
const Network = createForm<typeof networkSchema>(networkSchema,{debug:true})
export default Network

```

<Divider></Divider>

## 第4步：渲染表单

接下来我们就可以在组件中使用`Network`表单对象来渲染表单。

<Divider></Divider>

### 字段组件

通过表单对象的`Field`组件用来渲染表单字段，如上例中的`Network.Field`。

```tsx | pure

import Network from './network/schema'

export default ()=>{

  return (
    <Network.Field<typeof Network.fields.title> name="Network.fields.title">
      {({value,required,visible,validate,enable,defaultValue,sync})=>(
        // 此处负责渲染字段的具体内容
        return <Input value={value} onChange={sync()}/>
      )}
    </Network.Field>
  )
}
```

**说明：**
- `Network.Field`组件用来控制如何进行表单字段的渲染。
- `Network.Field`组件的`name`属性用来指定字段的路径,可以是嵌套路径，如`Network.fields.wifi.ssid`。
- 可以为`Network.Field`组件指定类型，以便在`children`属性中获得字段的类型提示。
- `Network.Field`组件的`children`属性是一个函数，用来渲染字段的具体内容，传入`props`是一个字段的控制属性，包括`value`、`required`、`visible`、`validate`、`enable`、`defaultValue`、`sync`等。并且这些字段控制属性均可以是一个计算属性，其值来自其他字段的派生计算结果。
- `sync`函数用来同步字段的值。

<Divider></Divider>

### 表单组件

当需要进行标准表单提交时，需要使用一个`Form`组件来包裹所有的`Field`组件。

```tsx | pure

<Network.Form>
    {/* 声明所有需要的字段 */}
    <Network.Field<typeof Network.fields.title> name="Network.fields.title">
      {({name,value,required,visible,validate,enable,defaultValue,sync})=>(
        // 此处负责渲染字段的具体内容
      )}
    </Network.Field>
    
    <Network.Field>....</Network.Field>
    <Network.Field>....</Network.Field>
    <Network.Field>....</Network.Field>
</Network.Form>

```

**说明：**

- `Network.Form`表单组件仅在进行标准表单提交时使用。
- `SpeedForm`支持进行`API`方式采用`AJAX`提交，此时可以不使用`Form`组件。

<Divider></Divider>

## 第5步：提交表单

最后，我们需要添加`Network.Submit`组件来进行提交操作。

```ts | pure
<Network.Form>
    {/* 声明所有需要的字段 */}
    <Network.Field<typeof Network.fields.title> name="Network.fields.title">
      {({name,value,required,visible,validate,enable,defaultValue,sync})=>(
        // 此处负责渲染字段的具体内容
      )}
    </Network.Field>    
    <Network.Submit>
      {({title,dirty,validate})=>{ 
      return <>
            <Input type="submit" value={title}/>
            dirty={String(dirty)},validate={String(validate)}
      </>
  }}
    </Network.Submit>
</Network.Form>

```

**说明:**

- `Network.Submit`组件用来控制表单的提交操作逻辑，但不负责具体的UI渲染。,
- `Network.Submit`组件的`children`属性是一个函数，用来渲染提交按钮的具体内容，传入`props`是一个提交按钮的控制属性，包括`title`、`dirty`、`validate`等。
- `title`属性用来指定提交按钮的标题。
- `dirty`属性用来指示表单是否已经被编辑过。
- `validate`属性用来指示表单是否有效，其值是由所有字段的`validate`计算属性的结果决定的。

<Divider></Divider>

## 第6步：完整表单

以下是一个完整的网络配置表单

```tsx 
import { forms } from 'speedform-docs'
import classnames from 'classnames';
import { Card,Field,Row,Col,Input,Button,ValidResult} from "@speedform/demo-components"
import { useCallback,useRef } from "react"

const { Network } = forms

export default ()=>{        
  const ref = useRef()
  const onSubmit=useCallback(()=>{
    alert("submit")
    console.log("submit")
    return false  //返回false阻止表单提交
  },[])
  return  (<Card title="网络配置表单"> 
    <Network.Form onSubmit={onSubmit} action="/api" ref={ref}>       
        <Network.Field<string> name="title">                      
              {({name,title,value,visible,validate,placeholder,sync})=>{             
                  console.log("title=",value)
                  return <Field  name="title" visible={visible} title={title} validate={validate}>
                        <Input 
                          name={name} 
                          className={classnames({invalid:!validate})} 
                          placeholder={placeholder} 
                          value={value} 
                          onChange={sync()}
                        />{value}
                  </Field>
              } }
        </Network.Field>
        <Network.Field<typeof Network.fields.interface> name="interface">                      
              {({name,title,required,visible,validate,enable,value,defaultValue,select,sync})=>{     
                  return <Field name="interface" title={title}>                        
                      <select value={value} onChange={sync()}>
                          {select.map((item:any, index:number) => (
                              <option  key={index} value={item.value}>{item.title}</option>
                          ))} 
                      </select> 
                  </Field>
              }}
        </Network.Field> 
        <Network.Field<typeof Network.fields.ip> name="ip">                      
              {({name,title,value,visible,validate,placeholder,sync})=>{ 
                  return <Field  name="ip" visible={visible} title={title} validate={validate}>
                        <Input name={name}  className={classnames({invalid:!validate.result})} placeholder={placeholder} value={value} onChange={sync(100)}/>
                  </Field> 
              } }
        </Network.Field>
        <Network.Field<typeof Network.fields.gateway> name="gateway">                      
              {({name,title,value,required,visible,validate,update,enable,placeholder,sync})=>{ 
                  return <Field name="gateway" visible={visible} title={title}>
                      <Input name={name}  className={classnames({invalid:!validate})} placeholder={placeholder} value={value} onChange={sync()}/>
                      <button onClick={update((state:any)=>{
                              state.gateway.value='192.168.1.2'
                          })}>恢复</button>
                      <button onClick={update('192.168.1.1')}>更新值</button>
                  </Field>
              } }
        </Network.Field>
        <Network.Group<typeof Network.fields.wifi> name="wifi">
          {({title,visible} )=>{ 
              return (  <Card title={title}  visible={visible}>
                  <Network.Field name="wifi.ssid">                      
                          {({name,value,required,visible,validate,enable,defaultValue,sync})=>{ 
                              return  <Field  name="wifi.ssid" title="SSID" enable={enable}> 
                                        <Input name={name}  className={classnames({invalid:!validate})} value={value} onChange={sync()} />
                              </Field>
                          } }
                      </Network.Field>      
                      <Network.Field name="wifi.password">                      
                          {({name,value,enable,validate,placeholder,help,sync})=>{ 
                              return  <Field name="wifi.password" title="密码" enable={enable} className={classnames({invalid:!validate})} > 
                                        <Input name={name} style={{
                                          border: validate ? '1px solid #ccc' : '1px solid red',                                  
                                        }} data-help={help} value={value} placeholder={placeholder} onChange={sync()} readOnly={!enable}/><ValidResult validate={validate} help={help}/>                               
                              </Field>
                          } }
                      </Network.Field> 
              </Card>)
          }}
        </Network.Group>                
        <Network.Field<typeof Network.fields.dhcp.enable> name="dhcp.enable" >                                       
              {({name,title,visible,value,validate,sync})=>{     
                  return <Field  name='dhcp.enable' visible={visible} title={title}>
                        <input name={name}  className={classnames({invalid:!validate})} type='checkbox' checked={value}  onChange={sync()}/>
                  </Field>
              }}
        </Network.Field> 
        <Network.Field<typeof Network.fields.dhcp.start> name="dhcp.start">                      
              {({name,value,validate,visible,title,sync})=>{ 
                  return  <Field name="dhcp.start" visible={visible} title={title}>
                      <Input name={name}  className={classnames({invalid:!validate})} value={value} onChange={sync()}/>
                  </Field>
              } }
        </Network.Field>
        <Network.Field<typeof Network.fields.dhcp.end> name="dhcp.end">                      
              {({name,value,validate,visible,title,sync})=>{     
                  return <Field name="dhcp.end" visible={visible} title={title}>
                      <Input name={name}  className={classnames({invalid:!validate})} value={value} onChange={sync()}/>
                  </Field>
              }}
        </Network.Field>             
        <Network.Submit/>       
      </Network.Form>   
    </Card>)
}

```

## 小结
