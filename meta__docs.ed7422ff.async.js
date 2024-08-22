"use strict";(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[904],{54618:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(81972),z={}},41514:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(76883),z={}},43371:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(5849),z={}},80425:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(3996),z={}},62682:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(37077),z={}},42831:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(12879),z={}},84346:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(99653),z={}},39040:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(39498),z={}},7146:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(85731),z={}},36823:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return K}});var W=e(28633),n=e.n(W),z=e(29008),T=e.n(z),U=e(70958),k=e.n(U),t=e(92379),G=e(15099),K={"docs-core-form-action-demo-0":{component:t.memo(t.lazy(k()(T()().mark(function F(){var o,O,v,c,b,a,A,d,M,g;return T()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,6244));case 2:return o=C.sent,O=o.createForm,v=o.action,C.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return c=C.sent,b=c.Row,a=c.Col,A=c.Button,d=c.Input,M={fields:{username:{value:"fisher",required:!0,title:"\u59D3\u540D"},password:{value:"123",required:!0,title:"\u5BC6\u7801"}},actions:{login:{title:"\u767B\u5F55",execute:v(function(){var N=k()(T()().mark(function P(l,s){return T()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:console.log("\u767B\u5F55",l);case 1:case"end":return E.stop()}},P)}));return function(P,l){return N.apply(this,arguments)}}())}}},g=O(M,{debug:!0}),C.abrupt("return",{default:function(){var P=useState(""),l=n()(P,2),s=l[0],u=l[1];return t.createElement(b,null,t.createElement(a,null,t.createElement(g.Field,{name:"username"},function(E){var S=E.value,_=E.sync;return t.createElement("div",null,"\u7528\u6237\u540D\uFF1A",t.createElement("input",{value:S,onChange:_()}))}),t.createElement(g.Field,{name:"password"},function(E){var S=E.value,_=E.sync;return t.createElement("div",null,"\u5BC6\u7801\uFF1A",t.createElement("input",{value:S,onChange:_()}))}),t.createElement(g.Action,{name:"login"},function(E){var S=E.title,_=E.visible,j=E.loading,H=E.enable,Q=E.run,Y=E.cancel,re=E.error,oe=E.progress;return t.createElement(t.Fragment,null,t.createElement(d,{type:"submit",value:"\u63D0\u4EA4"}),t.createElement(A,{loading:j,cancel:Y,timeout:oe,visible:_,enable:H,error:re,onClick:Q()},S))})),t.createElement(a,null,"dsdsd"))}});case 15:case"end":return C.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-core-form-action-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createForm,action }  from "@speedform/core"
import { Row, Col,Button, Input} from "@speedform/demo-components"

const schema = { 
  fields:{  
    username: {
      value: "fisher",
      required: true,
      title: "\u59D3\u540D"
    },
    password: {
      value: "123",
      required: true,
      title: "\u5BC6\u7801"
    } 
  },
  // \u8868\u5355\u52A8\u4F5C
  actions:{
    login:{
      title:"\u767B\u5F55",
      execute:action(async (scope,options)=>{
        console.log("\u767B\u5F55",scope)
      })
    }
  }
}

const Login = createForm<typeof schema>(schema,{debug:true})

export default ()=>{
  const [ formData,setFormData ] = useState('')
  return (<Row>
      <Col>
          <Login.Field name="username">{
            ({value,sync})=>{
              return <div>\u7528\u6237\u540D\uFF1A<input value={value} onChange={sync()}/></div>
            }
          }</Login.Field> 
          <Login.Field name="password">{
            ({value,sync})=>{
              return <div>\u5BC6\u7801\uFF1A<input value={value} onChange={sync()}/></div>
            }
          }</Login.Field>       
          <Login.Action<typeof Login.actions.login> name="login" >
              {({title,visible,loading,enable,run,cancel,error,progress})=>{ 
                  return <>
                      <Input type="submit" value="\u63D0\u4EA4"/>
                      <Button loading={loading} cancel={cancel} timeout={progress} visible={visible} enable={enable} error={error} onClick={ run()}>{title}</Button>
                  </>
              }}
          </Login.Action> 
        </Col>  
        <Col>
        dsdsd
        </Col>
    </Row>)
}`},"@speedform/core":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/core":e(6244),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=k()(T()().mark(function O(){var v,c=arguments;return T()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}}}},60:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(59378),z={}},90780:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(44833),z={}},26004:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(21955),z={}},17148:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(45620),z={}},37229:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(90751),z={}},48692:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(31673),z={}},69874:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(65864),z={}},42540:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(56343),z={}},94122:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return t}});var W=e(29008),n=e.n(W),z=e(70958),T=e.n(z),U=e(92379),k=e(26807),t={"docs-core-quick-start-demo-0":{component:U.memo(U.lazy(T()(n()().mark(function G(){var K,F,o,O,v,c,b,a,A,d,M,g,y;return n()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.bind(e,21970));case 2:return K=N.sent,F=K.forms,N.next=6,Promise.resolve().then(e.t.bind(e,26372,23));case 6:return o=N.sent,O=o.default,N.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return v=N.sent,c=v.Card,b=v.Field,a=v.Input,A=v.ValidResult,N.next=17,Promise.resolve().then(e.t.bind(e,92379,19));case 17:return d=N.sent,M=d.useCallback,g=d.useRef,y=F.Network,N.abrupt("return",{default:function(){var l=g(),s=M(function(){return alert("submit"),console.log("submit"),!1},[]);return U.createElement(c,{title:"\u7F51\u7EDC\u914D\u7F6E\u8868\u5355"},U.createElement(y.Form,{onSubmit:s,action:"/api",ref:l},U.createElement(y.Field,{name:"title"},function(u){var E=u.name,S=u.title,_=u.value,j=u.visible,H=u.validate,Q=u.placeholder,Y=u.sync;return U.createElement(b,{name:"title",visible:j,label:S,validate:H},U.createElement(a,{name:E,className:O({invalid:!H}),placeholder:Q,value:_,onChange:Y()}))}),U.createElement(y.Field,{name:"interface"},function(u){var E=u.name,S=u.title,_=u.required,j=u.visible,H=u.validate,Q=u.enable,Y=u.value,re=u.initial,oe=u.select,le=u.sync;return U.createElement(b,{name:"interface",label:S},U.createElement("select",{value:Y,onChange:le()},oe.map(function(ne,ye){return U.createElement("option",{key:ye,value:ne.value},ne.title)})))}),U.createElement(y.Field,{name:"ip"},function(u){var E=u.name,S=u.title,_=u.value,j=u.visible,H=u.validate,Q=u.placeholder,Y=u.sync;return U.createElement(b,{name:"ip",visible:j,label:S,validate:H,memo:"\u4FEE\u6539\u8FDB\u884C\u5F02\u6B65\u6821\u9A8C"},U.createElement(a,{name:E,validate:H.result,placeholder:Q,value:_,onChange:Y(100)}))}),U.createElement(y.Field,{name:"gateway"},function(u){var E=u.name,S=u.title,_=u.value,j=u.required,H=u.visible,Q=u.validate,Y=u.update,re=u.enable,oe=u.placeholder,le=u.sync;return U.createElement(b,{name:"gateway",visible:H,label:S},U.createElement(a,{name:E,validate:Q,placeholder:oe,value:_,onChange:le()}),U.createElement("button",{onClick:Y(function(ne){ne.gateway.value="192.168.1.2"})},"\u6062\u590D"),U.createElement("button",{onClick:Y("192.168.1.1")},"\u66F4\u65B0\u503C"))}),U.createElement(y.Group,{name:"wifi"},function(u){var E=u.title,S=u.visible;return U.createElement(c,{title:E+"(\u4EC5interfact=wifi\u65F6\u663E\u793A)",visible:S},U.createElement(y.Field,{name:"wifi.ssid"},function(_){var j=_.name,H=_.value,Q=_.required,Y=_.visible,re=_.validate,oe=_.enable,le=_.initial,ne=_.sync;return U.createElement(b,{name:"wifi.ssid",label:"SSID",enable:oe},U.createElement(a,{name:j,className:O({invalid:!re}),value:H,onChange:ne()}))}),U.createElement(y.Field,{name:"wifi.password"},function(_){var j=_.name,H=_.value,Q=_.enable,Y=_.validate,re=_.placeholder,oe=_.help,le=_.sync;return U.createElement(b,{name:"wifi.password",label:"\u5BC6\u7801",enable:Q,className:O({invalid:!Y})},U.createElement(a,{name:j,style:{border:Y?"1px solid #ccc":"1px solid red"},"data-help":oe,value:H,placeholder:re,onChange:le(),readOnly:!Q}),U.createElement(A,{validate:Y,help:oe}))}))}),U.createElement(y.Field,{name:"dhcp.enable"},function(u){var E=u.name,S=u.title,_=u.visible,j=u.value,H=u.validate,Q=u.sync;return U.createElement(b,{name:"dhcp.enable",visible:_,label:S},U.createElement("input",{name:E,className:O({invalid:!H}),type:"checkbox",checked:j,onChange:Q()}))}),U.createElement(y.Field,{name:"dhcp.start"},function(u){var E=u.name,S=u.value,_=u.validate,j=u.enable,H=u.visible,Q=u.title,Y=u.sync;return U.createElement(b,{name:"dhcp.start",label:Q,enable:j},U.createElement(a,{name:E,enable:j,className:O({invalid:!_}),value:S,onChange:Y()}))}),U.createElement(y.Field,{name:"dhcp.end"},function(u){var E=u.name,S=u.value,_=u.validate,j=u.visible,H=u.title,Q=u.enable,Y=u.sync;return U.createElement(b,{name:"dhcp.end",enable:Q,label:H},U.createElement(a,{name:E,enable:Q,className:O({invalid:!_}),value:S,onChange:Y()}))}),U.createElement(y.Submit,null),U.createElement(y.Reset,null)))}});case 22:case"end":return N.stop()}},G)})))),asset:{type:"BLOCK",id:"docs-core-quick-start-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { forms } from 'speedform-docs'
import classnames from 'classnames';
import { Card,Field,Row,Col,Input,Button,ValidResult} from "@speedform/demo-components"
import { useCallback,useRef } from "react"

const { Network } = forms

export default ()=>{        
  const ref = useRef()
  const onSubmit=useCallback(()=>{
    alert("submit")
    console.log("submit")
    return false  //\u8FD4\u56DEfalse\u963B\u6B62\u8868\u5355\u63D0\u4EA4
  },[])
  return  (<Card title="\u7F51\u7EDC\u914D\u7F6E\u8868\u5355"> 
    <Network.Form onSubmit={onSubmit} action="/api" ref={ref}>       
        <Network.Field<string> name="title">                      
              {({name,title,value,visible,validate,placeholder,sync})=>{         
                  return <Field  name="title" visible={visible} label={title} validate={validate}>
                        <Input 
                          name={name} 
                          className={classnames({invalid:!validate})} 
                          placeholder={placeholder} 
                          value={value} 
                          onChange={sync()}
                        />
                  </Field>
              } }
        </Network.Field>
        <Network.Field<typeof Network.fields.interface> name="interface">                      
              {({name,title,required,visible,validate,enable,value,initial,select,sync})=>{     
                  return <Field name="interface" label={title}>                        
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
                  return <Field  name="ip" visible={visible} label={title} validate={validate} memo="\u4FEE\u6539\u8FDB\u884C\u5F02\u6B65\u6821\u9A8C">
                        <Input name={name} validate={validate.result} placeholder={placeholder} value={value} onChange={sync(100)}/>
                  </Field> 
              } }
        </Network.Field>
        <Network.Field<typeof Network.fields.gateway> name="gateway">                      
              {({name,title,value,required,visible,validate,update,enable,placeholder,sync})=>{ 
                  return <Field name="gateway" visible={visible} label={title}>
                      <Input name={name}   validate={validate}  placeholder={placeholder} value={value} onChange={sync()}/>
                      <button onClick={update((state:any)=>{
                              state.gateway.value='192.168.1.2'
                          })}>\u6062\u590D</button>
                      <button onClick={update('192.168.1.1')}>\u66F4\u65B0\u503C</button>
                  </Field>
              } }
        </Network.Field>
        <Network.Group<typeof Network.fields.wifi> name="wifi">
          {({title,visible} )=>{ 
              return (  <Card title={title+"(\u4EC5interfact=wifi\u65F6\u663E\u793A)"}  visible={visible}>
                  <Network.Field name="wifi.ssid">                      
                          {({name,value,required,visible,validate,enable,initial,sync})=>{ 
                              return  <Field  name="wifi.ssid" label="SSID" enable={enable}> 
                                        <Input name={name}   className={classnames({invalid:!validate})} value={value} onChange={sync()} />
                              </Field>
                          } }
                      </Network.Field>      
                      <Network.Field name="wifi.password">                      
                          {({name,value,enable,validate,placeholder,help,sync})=>{ 
                              return  <Field name="wifi.password" label="\u5BC6\u7801" enable={enable} className={classnames({invalid:!validate})} > 
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
                  return <Field  name='dhcp.enable' visible={visible} label={title}>
                        <input name={name}  className={classnames({invalid:!validate})} type='checkbox' checked={value}  onChange={sync()}/>
                  </Field>
              }}
        </Network.Field> 
        <Network.Field<typeof Network.fields.dhcp.start> name="dhcp.start">                      
              {({name,value,validate,enable,visible,title,sync})=>{ 
                  return  <Field name="dhcp.start" label={title} enable={enable} >
                      <Input name={name}  enable={enable}  className={classnames({invalid:!validate})} value={value} onChange={sync()}/>
                  </Field>
              } }
        </Network.Field>
        <Network.Field<typeof Network.fields.dhcp.end> name="dhcp.end">                      
              {({name,value,validate,visible,title,enable,sync})=>{     
                  return <Field name="dhcp.end" enable={enable} label={title}>
                      <Input name={name} enable={enable} className={classnames({invalid:!validate})} value={value} onChange={sync()}/>
                  </Field>
              }}
        </Network.Field>             
        <Network.Submit/>       
        <Network.Reset/>
      </Network.Form>   
    </Card>)
}`},"speedform-docs":{type:"NPM",value:"1.0.0"},classnames:{type:"NPM",value:"2.3.2"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"speedform-docs":e(21970),classnames:e(26372),"@speedform/demo-components":e(48398),react:e(92379)},renderOpts:{compile:function(){var G=T()(n()().mark(function F(){var o,O=arguments;return n()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(408).then(e.bind(e,28408));case 2:return c.abrupt("return",(o=c.sent).default.apply(o,O));case 3:case"end":return c.stop()}},F)}));function K(){return G.apply(this,arguments)}return K}()}}}},51608:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return K}});var W=e(28633),n=e.n(W),z=e(29008),T=e.n(z),U=e(70958),k=e.n(U),t=e(92379),G=e(23752),K={"docs-reactive-computed-async-demo-0":{component:t.memo(t.lazy(k()(T()().mark(function F(){var o,O,v,c,b,a;return T()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=d.sent,O=o.createStore,v=o.computed,d.next=7,Promise.resolve().then(e.bind(e,21970));case 7:return c=d.sent,b=c.delay,a=O({user:{firstName:"Zhang",lastName:"Fisher",fullName:v(function(){var M=k()(T()().mark(function g(y){return T()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,b();case 2:return N.abrupt("return",y.firstName+y.lastName);case 3:case"end":return N.stop()}},g)}));return function(g){return M.apply(this,arguments)}}(),["user.firstName","./lastName"])}}),d.abrupt("return",{default:function(){var g=a.useState(),y=n()(g,1),C=y[0];return t.createElement(t.Fragment,null,t.createElement("div",null,"firstName:",t.createElement("input",{value:C.user.firstName,onChange:a.sync(["user","firstName"])})),t.createElement("div",null,"lastName:",t.createElement("input",{value:C.user.lastName,onChange:a.sync(["user","lastName"])})),t.createElement("div",null,"fullName:",C.user.fullName.loading?"\u91CD\u65B0\u8BA1\u7B97...":C.user.fullName.result))}});case 11:case"end":return d.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap,$} from '@speedform/reactive';
import { useRef,useEffect } from "react" 
import { delay } from "speedform-docs"

const store = createStore({
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: computed(async (user)=>{
      await delay()       
      return user.firstName+user.lastName  
    },["user.firstName","./lastName"]) 
  }
})

export default ()=>{ 
  const [state] = store.useState() 
  return <>
    <div>
      firstName:          
      <input value={state.user.firstName} onChange={store.sync(['user','firstName'])} />
    </div>
    <div>
      lastName:          
      <input value={state.user.lastName} onChange={store.sync(['user','lastName'])} />
    </div>
    <div>fullName:{state.user.fullName.loading ? '\u91CD\u65B0\u8BA1\u7B97...' : state.user.fullName.result}</div>
    </>
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970)},renderOpts:{compile:function(){var F=k()(T()().mark(function O(){var v,c=arguments;return T()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}},"docs-reactive-computed-async-demo-1":{component:t.memo(t.lazy(k()(T()().mark(function F(){var o,O,v,c,b,a;return T()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=d.sent,O=o.computed,v=o.createStore,d.next=7,Promise.resolve().then(e.bind(e,21970));case 7:return c=d.sent,b=c.api,a=v({user:{repo:"https://api.github.com/users/zhangfisher/repos",projects:O(function(){var M=k()(T()().mark(function g(y){var C,N;return T()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return C=n()(y,1),N=C[0],l.next=3,new Promise(function(s){return setTimeout(s,2e3)});case 3:return l.next=5,b.getProjects(N);case 5:return l.abrupt("return",l.sent);case 6:case"end":return l.stop()}},g)}));return function(g){return M.apply(this,arguments)}}(),["user.repo"],{scope:"depends"})}}),d.abrupt("return",{default:function(){var g=a.useState(),y=n()(g,1),C=y[0];return t.createElement("div",null,t.createElement("p",null,t.createElement("b",null,"\u4FEE\u6539\u4ED3\u5E93\u5730\u5740\u5C06\u89E6\u53D1\u91CD\u65B0\u52A0\u8F7D\u8BE5\u4ED3\u5E93\u9879\u76EE\u5217\u8868")),"\u4ED3\u5E93\u5730\u5740\uFF1A",t.createElement("input",{value:C.user.repo,onChange:a.sync(["user","repo"])}),t.createElement("button",{onClick:function(){return a.state.user.projects.run()}},"\u91CD\u8BD5"),t.createElement("button",{onClick:function(){return a.state.user.repo="https://api.github.com/users/zhangfisher/repos"}},"\u6062\u590D"),t.createElement("table",{className:"projects-list"},t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"3"},"\u4EE5\u4E0B\u662F\u6211\u7684\u5F00\u6E90\u9879\u76EE\uFF0C\u611F\u8C22\u652F\u6301\uFF01")),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u9879\u76EE\u540D\u79F0")),t.createElement("td",null,t.createElement("b",null,"\u8BF4\u660E")),t.createElement("td",null,t.createElement("b",null,"\u661F")))),t.createElement("tbody",null,C.user.projects.loading?t.createElement("tr",null,t.createElement("td",{colSpan:3},"\u6B63\u5728\u52A0\u8F7D...:")):C.user.projects.error?t.createElement("tr",null,t.createElement("td",{colSpan:2},"\u52A0\u8F7D\u9519\u8BEF:",C.user.projects.error)):C.user.projects&&C.user.projects.result.map(function(N,P){return t.createElement("tr",{key:P},t.createElement("td",null,t.createElement("a",{href:N.url,target:"__blank"},N.name)),t.createElement("td",null,N.description),t.createElement("td",null,N.stars))}))))}});case 11:case"end":return d.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { computed,createStore } from "@speedform/reactive"
import { api } from "speedform-docs"
 
const store = createStore({
  user:{
    repo:"https://api.github.com/users/zhangfisher/repos",
    projects:computed<Project[]>(async ([repoUrl])=>{
      await new Promise(resolve=>setTimeout(resolve,2000))
        return await api.getProjects(repoUrl) 
     },
     ["user.repo"],
     {
      scope:"depends"
     })
  }
})

export default ()=>{
  const [state] = store.useState() 
  return <div>
      <p><b>\u4FEE\u6539\u4ED3\u5E93\u5730\u5740\u5C06\u89E6\u53D1\u91CD\u65B0\u52A0\u8F7D\u8BE5\u4ED3\u5E93\u9879\u76EE\u5217\u8868</b></p>
      \u4ED3\u5E93\u5730\u5740\uFF1A<input value={state.user.repo} onChange={store.sync(["user","repo"])}/>
      <button onClick={()=>store.state.user.projects.run()}>\u91CD\u8BD5</button> 
      <button onClick={()=>store.state.user.repo = "https://api.github.com/users/zhangfisher/repos"}>\u6062\u590D</button>    

      <table className="projects-list">
          <thead><tr><td colSpan="3">\u4EE5\u4E0B\u662F\u6211\u7684\u5F00\u6E90\u9879\u76EE\uFF0C\u611F\u8C22\u652F\u6301\uFF01</td></tr>
          <tr><td><b>\u9879\u76EE\u540D\u79F0</b></td><td><b>\u8BF4\u660E</b></td><td><b>\u661F</b></td></tr></thead>                    
          <tbody>
          {
              state.user.projects.loading ? 
              (<tr><td colSpan={3}>\u6B63\u5728\u52A0\u8F7D...:</td></tr>)
              :
              (
                  state.user.projects.error? (<tr><td colSpan={2}>\u52A0\u8F7D\u9519\u8BEF:{state.user.projects.error}</td></tr>)
                  : (
                    state.user.projects && state.user.projects.result.map((project,index)=>{
                          return <tr key={index}>
                            <td><a href={project.url} target="__blank">{project.name}</a></td>
                            <td>{project.description}</td>
                            <td>{project.stars}</td>
                            </tr>
                      })
                  )
              )
          }
          </tbody>
      </table>
  </div>

}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970)},renderOpts:{compile:function(){var F=k()(T()().mark(function O(){var v,c=arguments;return T()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}},"docs-reactive-computed-async-demo-2":{component:t.memo(t.lazy(k()(T()().mark(function F(){var o,O,v,c,b,a;return T()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=d.sent,O=o.createStore,v=o.computed,c=o.ComputedScopeRef,b={user:{firstName:"zhang",lastName:"fisher",fullName:v(function(){var M=k()(T()().mark(function g(y){var C,N,P;return T()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return C=n()(y,2),N=C[0],P=C[1],s.abrupt("return",N+P);case 2:case"end":return s.stop()}},g)}));return function(g){return M.apply(this,arguments)}}(),["user.firstName","user.lastName"],{scope:c.Depends}),fullName1:v(function(){var M=k()(T()().mark(function g(y){var C,N,P;return T()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return C=n()(y,2),N=C[0],P=C[1],s.abrupt("return",N+P);case 2:case"end":return s.stop()}},g)}));return function(g){return M.apply(this,arguments)}}(),["./firstName","./lastName"],{scope:c.Depends})},other:{fullName2:v(function(){var M=k()(T()().mark(function g(y){var C,N,P;return T()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return C=n()(y,2),N=C[0],P=C[1],s.abrupt("return",N+P);case 2:case"end":return s.stop()}},g)}));return function(g){return M.apply(this,arguments)}}(),["../user.firstName","../user.lastName"],{scope:c.Depends})}},a=O(b),d.abrupt("return",{default:function(){var g=a.useState(),y=n()(g,1),C=y[0];return t.createElement("div",null,t.createElement("div",null,"firstName=",C.user.firstName),t.createElement("div",null,"lastName=",C.user.lastName),t.createElement("div",null,"fullName=",C.user.fullName.result),t.createElement("div",null,"fullName1=",C.user.fullName1.result),t.createElement("div",null,"fullName2=",C.other.fullName2.result))}});case 9:case"end":return d.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef } from "@speedform/reactive" 

const user = {
  user:{
    firstName:"zhang",
    lastName:"fisher",
    fullName: computed(async ([first,last])=>{ 
      return first + last
    },[
      "user.firstName",
      "user.lastName"
    ],{  
      // \u9ED8\u8BA4scope\u6307\u5411\u7684\u662Fcurrent\uFF0C\u5373fullName\u6240\u5728\u7684\u5BF9\u8C61
      // \u8FD9\u91CC\u6307\u5B9Ascope\u4E3ADepends\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u4F20\u5165
      scope:ComputedScopeRef.Depends
    }),    
    fullName1: computed(async ([first,last])=>{ 
      return first + last
    },[// \u4F7F\u7528\u76F8\u5BF9\u4F9D\u8D56,./\u6307\u7684\u662F\u5F53\u524D\u5BF9\u8C61user
      "./firstName",
      "./lastName"
    ],{   
      scope:ComputedScopeRef.Depends
    })
  },
  other:{ 
    fullName2: computed(async ([first,last])=>{ 
      return first + last
    },[
    // \u4F7F\u7528\u76F8\u5BF9\u4F9D\u8D56\uFF0C../\u7236\u5BF9\u8C61\u6307\u5411\u7684\u662Fother\u7684\u7236\u5BF9\u8C61
    // ../user\u5C31\u6307\u5411user\u5BF9\u8C61
      "../user.firstName",
      "../user.lastName"
    ],{   
      scope:ComputedScopeRef.Depends
    })
  }

}

const store = createStore(user)

export default ()=>{
  const [state]=store.useState()
  return (<div>
      <div>firstName={state.user.firstName}</div>
      <div>lastName={state.user.lastName}</div>
      <div>fullName={state.user.fullName.result}</div>
      <div>fullName1={state.user.fullName1.result}</div>
      <div>fullName2={state.other.fullName2.result}</div>
    </div> )
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var F=k()(T()().mark(function O(){var v,c=arguments;return T()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}},"docs-reactive-computed-async-demo-3":{component:t.memo(t.lazy(k()(T()().mark(function F(){var o,O,v,c,b,a,A,d,M,g,y,C;return T()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=P.sent,O=o.createStore,v=o.computed,P.next=7,Promise.resolve().then(e.t.bind(e,92379,19));case 7:return c=P.sent,b=c.useRef,a=c.useEffect,P.next=12,Promise.resolve().then(e.bind(e,21970));case 12:return A=P.sent,d=A.delay,P.next=16,Promise.resolve().then(e.bind(e,48398));case 16:return M=P.sent,g=M.Box,y={user:{firstName:"Zhang",lastName:"Fisher",fullName:v(function(){var l=k()(T()().mark(function s(u){return T()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,d();case 2:return S.abrupt("return",u.firstName+u.lastName);case 3:case"end":return S.stop()}},s)}));return function(s){return l.apply(this,arguments)}}(),["user.firstName","user.lastName"])}},C=O(y),P.abrupt("return",{default:function(){var s=b(0),u=C.useState(),E=n()(u,2),S=E[0],_=E[1];return a(function(){s.current++},[]),t.createElement(g,null,t.createElement("div",null,t.createElement("div",null,"FirstName:",S.user.firstName),t.createElement("div",null,"LastName:",S.user.lastName),t.createElement("div",null,"FullName:",S.user.fullName.loading?"\u6B63\u5728\u8BA1\u7B97...":S.user.fullName.error?"ERROR:".concat(S.user.fullName.error):S.user.fullName.result),t.createElement("button",{onClick:function(){return _(function(H){return H.user.firstName="ZHANG "+s.current++})}},"\u4FEE\u6539FirstName"),t.createElement("button",{onClick:function(){return _(function(H){return H.user.lastName="FISHER"+s.current++})}},"\u4FEE\u6539LastName"),t.createElement("button",{onClick:function(){return S.user.fullName.run()}},"\u91CD\u65B0\u8BA1\u7B97")),t.createElement("div",null,JSON.stringify(S.user.fullName)))}});case 21:case"end":return P.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
import { useRef,useEffect } from "react"
import { delay } from "speedform-docs"
import { Box} from "@speedform/demo-components"

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
const store = createStore(state)

export default ()=>{
  const count = useRef(0)
  const [state,setState] = store.useState()
  useEffect(()=>{count.current++},[])
  return (<Box><div>
    <div>FirstName:{state.user.firstName}</div>
    <div>LastName:{state.user.lastName}</div> 
    <div>FullName:{
      state.user.fullName.loading ? '\u6B63\u5728\u8BA1\u7B97...' : (
        state.user.fullName.error ? \`ERROR:\${state.user.fullName.error}\`: 
        state.user.fullName.result
      )}</div>
    {/* <div>error:{state.user.fullName.error}</div> */}
    <button onClick={()=>setState((state)=>state.user.firstName='ZHANG '+count.current++)}>\u4FEE\u6539FirstName</button>
    <button onClick={()=>setState((state)=>state.user.lastName='FISHER'+count.current++)}>\u4FEE\u6539LastName</button>
    <button onClick={()=>state.user.fullName.run()}>\u91CD\u65B0\u8BA1\u7B97</button>
  </div>
  <div>
    {JSON.stringify(state.user.fullName)}
  </div>
  </Box>
  )
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),react:e(92379),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=k()(T()().mark(function O(){var v,c=arguments;return T()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}},"docs-reactive-computed-async-demo-4":{component:t.memo(t.lazy(k()(T()().mark(function F(){var o,O,v,c,b,a,A,d,M;return T()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=y.sent,O=o.createStore,v=o.computed,c=o.ComputedScopeRef,y.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return b=y.sent,a=b.delay,y.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return A=y.sent,d=A.Box,M=O({order:{bookName:"ZhangFisher",price:100,count:1,total:v(function(){var C=k()(T()().mark(function N(P,l){var s,u,E,S,_;return T()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return s=n()(P,2),u=s[0],E=s[1],S=l.getProgressbar,_=S(),H.abrupt("return",new Promise(function(){var Q=k()(T()().mark(function Y(re){var oe;return T()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:oe=1;case 1:if(!(oe<=100)){ne.next=8;break}return ne.next=4,a(20);case 4:_.value(oe);case 5:oe++,ne.next=1;break;case 8:_.end(),re(u*E);case 10:case"end":return ne.stop()}},Y)}));return function(Y){return Q.apply(this,arguments)}}()));case 4:case"end":return H.stop()}},N)}));return function(N,P){return C.apply(this,arguments)}}(),["order.count","order.price"],{scope:c.Depends})}}),y.abrupt("return",{default:function(){var N=M.useState(),P=n()(N,2),l=P[0],s=P[1];return t.createElement(d,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,l.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,l.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return s(function(E){return E.order.count=E.order.count-1})}},"-"),t.createElement("input",{value:l.order.count,onChange:M.sync(function(u){return u.order.count})}),t.createElement("button",{onClick:function(){return s(function(E){return E.order.count=E.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,l.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...".concat(l.order.total.progress,"%"):l.order.total.error?"ERROR:".concat(l.order.total.error):l.order.total.result)))),t.createElement("div",null,JSON.stringify(l.order.total)))}});case 16:case"end":return y.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
import { useRef,useEffect } from "react"
import { delay } from "speedform-docs"
import { Box} from "@speedform/demo-components"

 
const store = createStore({
  order:{
    bookName:"ZhangFisher",
    price:100,
    count:1,
    total: computed(async ([count,price],{getProgressbar})=>{
      const progressbar = getProgressbar()
      return new Promise(async (resolve)=>{
        for(let i=1;i<=100;i++){
          await delay(20)
          progressbar.value(i)
        }
        progressbar.end()
        resolve(count*price)
      }) 
    },
    ["order.count","order.price"],
    {scope:ComputedScopeRef.Depends}) 
  }
}  )

export default ()=>{
  const [state,setState] = store.useState()
  return (<Box>
    <table>
      <thead><tr><td colSpan="2">\u8BA2\u5355\u4FE1\u606F</td></tr></thead>
      <tbody>
        <tr><td><b>\u4E66\u540D</b></td><td>{state.order.bookName}</td></tr>
        <tr><td><b>\u4EF7\u683C</b></td><td>{state.order.price}</td></tr>
        <tr><td><b>\u6570\u91CF</b></td><td>
          <button onClick={()=>setState(draft=>draft.order.count=draft.order.count-1)}>-</button>
          <input value={state.order.count} onChange={store.sync(to=>to.order.count)}/>
          <button  onClick={()=>setState(draft=>draft.order.count=draft.order.count+1)}>+</button>
        </td></tr>        
      </tbody>
      <tfoot>
        <tr><td><b>\u603B\u4EF7</b></td><td>
         {
        state.order.total.loading ? \`\u6B63\u5728\u8BA1\u7B97...\${state.order.total.progress}%\`  
        : (
          state.order.total.error ? \`ERROR:\${state.order.total.error}\`: state.order.total.result
        )}
        </td></tr>
        </tfoot>
      </table>
    
    <div>
      {JSON.stringify(state.order.total)}
    </div>
  </Box>)
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=k()(T()().mark(function O(){var v,c=arguments;return T()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}},"docs-reactive-computed-async-demo-5":{component:t.memo(t.lazy(k()(T()().mark(function F(){var o,O,v,c,b,a,A,d,M;return T()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=y.sent,O=o.createStore,v=o.computed,c=o.ComputedScopeRef,y.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return b=y.sent,a=b.delay,y.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return A=y.sent,d=A.Box,M=O({order:{bookName:"ZhangFisher",price:100,count:1,total:v(function(){var C=k()(T()().mark(function N(P){var l,s,u;return T()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return l=n()(P,2),s=l[0],u=l[1],S.next=3,a(2e3);case 3:return S.abrupt("return",s*u);case 4:case"end":return S.stop()}},N)}));return function(N){return C.apply(this,arguments)}}(),["order.count","order.price"],{timeout:1e3,scope:c.Depends})}}),y.abrupt("return",{default:function(){var N=M.useState(),P=n()(N,2),l=P[0],s=P[1];return t.createElement(d,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,l.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,l.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return s(function(E){return E.order.count=E.order.count-1})}},"-"),t.createElement("input",{value:l.order.count,onChange:M.sync(function(u){return u.order.count})}),t.createElement("button",{onClick:function(){return s(function(E){return E.order.count=E.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,l.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...(\u8D85\u65F6:".concat(l.order.total.timeout,")"):l.order.total.error?"ERROR:".concat(l.order.total.error):l.order.total.result)))),t.createElement("div",null,JSON.stringify(l.order.total)))}});case 16:case"end":return y.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
import { useRef,useEffect } from "react"
import { delay } from "speedform-docs"
import { Box} from "@speedform/demo-components"
 
const store = createStore({
  order:{
    bookName:"ZhangFisher",
    price:100,
    count:1,
    total: computed(async ([count,price])=>{
        await delay(2000)    // \u6A21\u62DF\u957F\u65F6\u95F4\u8BA1\u7B97
        return count*price
    },
    ["order.count","order.price"],
    {
      timeout:1000 ,
      scope:ComputedScopeRef.Depends
    })
  }
}  )

export default ()=>{
  const [state,setState] = store.useState()
  return (<Box>
    <table>
      <thead><tr><td colSpan="2">\u8BA2\u5355\u4FE1\u606F</td></tr></thead>
      <tbody>
        <tr><td><b>\u4E66\u540D</b></td><td>{state.order.bookName}</td></tr>
        <tr><td><b>\u4EF7\u683C</b></td><td>{state.order.price}</td></tr>
        <tr><td><b>\u6570\u91CF</b></td><td>
          <button onClick={()=>setState(draft=>draft.order.count=draft.order.count-1)}>-</button>
          <input value={state.order.count} onChange={store.sync(to=>to.order.count)}/>
          <button  onClick={()=>setState(draft=>draft.order.count=draft.order.count+1)}>+</button>
        </td></tr>        
      </tbody>
      <tfoot>
        <tr><td><b>\u603B\u4EF7</b></td><td>
         {
        state.order.total.loading ? \`\u6B63\u5728\u8BA1\u7B97...(\u8D85\u65F6:\${state.order.total.timeout})\`  
        : (
          state.order.total.error ? \`ERROR:\${state.order.total.error}\`: state.order.total.result
        )}
        </td></tr>
        </tfoot>
      </table>
    
    <div>
      {JSON.stringify(state.order.total)}
    </div>
  </Box>)
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=k()(T()().mark(function O(){var v,c=arguments;return T()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}},"docs-reactive-computed-async-demo-6":{component:t.memo(t.lazy(k()(T()().mark(function F(){var o,O,v,c,b,a,A,d,M;return T()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=y.sent,O=o.createStore,v=o.computed,c=o.ComputedScopeRef,y.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return b=y.sent,a=b.delay,y.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return A=y.sent,d=A.Box,M=O({order:{bookName:"ZhangFisher",price:100,count:1,total:v(function(){var C=k()(T()().mark(function N(P){var l,s,u;return T()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return l=n()(P,2),s=l[0],u=l[1],S.next=3,a(1e5);case 3:return S.abrupt("return",s*u);case 4:case"end":return S.stop()}},N)}));return function(N){return C.apply(this,arguments)}}(),["order.count","order.price"],{timeout:[5*1e3,5],scope:c.Depends})}}),y.abrupt("return",{default:function(){var N=M.useState(),P=n()(N,2),l=P[0],s=P[1];return t.createElement(d,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,l.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,l.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return s(function(E){return E.order.count=E.order.count-1})}},"-"),t.createElement("input",{value:l.order.count,onChange:M.sync(function(u){return u.order.count})}),t.createElement("button",{onClick:function(){return s(function(E){return E.order.count=E.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,l.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...(\u5012\u8BA1\u65F6:".concat(l.order.total.timeout,")"):l.order.total.error?"ERROR:".concat(l.order.total.error):l.order.total.result)))),t.createElement("div",null,JSON.stringify(l.order.total)))}});case 16:case"end":return y.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
import { useRef,useEffect } from "react"
import { delay } from "speedform-docs"
import { Box} from "@speedform/demo-components"
 
const store = createStore({
  order:{
    bookName:"ZhangFisher",
    price:100,
    count:1,
    total: computed(async ([count,price])=>{
        await delay(100000)    // \u6A21\u62DF\u957F\u65F6\u95F4\u8BA1\u7B97
        return count*price
    },
    ["order.count","order.price"],
    {
      timeout:[5*1000,5] ,
      scope:ComputedScopeRef.Depends
    })
  }
}  )

export default ()=>{
  const [state,setState] = store.useState()
  return (<Box>
    <table>
      <thead><tr><td colSpan="2">\u8BA2\u5355\u4FE1\u606F</td></tr></thead>
      <tbody>
        <tr><td><b>\u4E66\u540D</b></td><td>{state.order.bookName}</td></tr>
        <tr><td><b>\u4EF7\u683C</b></td><td>{state.order.price}</td></tr>
        <tr><td><b>\u6570\u91CF</b></td><td>
          <button onClick={()=>setState(draft=>draft.order.count=draft.order.count-1)}>-</button>
          <input value={state.order.count} onChange={store.sync(to=>to.order.count)}/>
          <button  onClick={()=>setState(draft=>draft.order.count=draft.order.count+1)}>+</button>
        </td></tr>        
      </tbody>
      <tfoot>
        <tr><td><b>\u603B\u4EF7</b></td><td>
         {
        state.order.total.loading ? \`\u6B63\u5728\u8BA1\u7B97...(\u5012\u8BA1\u65F6:\${state.order.total.timeout})\`  
        : (
          state.order.total.error ? \`ERROR:\${state.order.total.error}\`: state.order.total.result
        )}
        </td></tr>
        </tfoot>
      </table>
    
    <div>
      {JSON.stringify(state.order.total)}
    </div>
  </Box>)
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=k()(T()().mark(function O(){var v,c=arguments;return T()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}},"docs-reactive-computed-async-demo-7":{component:t.memo(t.lazy(k()(T()().mark(function F(){var o,O,v,c,b,a,A,d,M,g;return T()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=C.sent,O=o.createStore,v=o.computed,c=o.ComputedScopeRef,C.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return b=C.sent,a=b.delay,C.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return A=C.sent,d=A.Box,M=0,g=O({order:{bookName:"ZhangFisher",price:100,count:1,total:v(function(){var N=k()(T()().mark(function P(l){var s,u,E;return T()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return s=n()(l,2),u=s[0],E=s[1],++u,_.next=4,a();case 4:throw new Error("\u8BA1\u7B97\u51FA\u9519"+u);case 5:case"end":return _.stop()}},P)}));return function(P){return N.apply(this,arguments)}}(),["order.count","order.price"],{retry:[5,1e3],scope:c.Depends})}}),C.abrupt("return",{default:function(){var P=g.useState(),l=n()(P,2),s=l[0],u=l[1];return t.createElement(d,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,s.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,s.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return u(function(S){return S.order.count=S.order.count-1})}},"-"),t.createElement("input",{value:s.order.count,onChange:g.sync(function(E){return E.order.count})}),t.createElement("button",{onClick:function(){return u(function(S){M=0,S.order.count=S.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,s.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...":s.order.total.error?"ERROR:".concat(s.order.total.error):s.order.total.result,s.order.total.retry>0?"\u91CD\u8BD5:".concat(s.order.total.retry):"")))),t.createElement("div",null,JSON.stringify(s.order.total)))}});case 17:case"end":return C.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
import { useRef,useEffect } from "react"
import { delay } from "speedform-docs"
import { Box } from "@speedform/demo-components"
let count = 0 
const store = createStore( {
  order:{
    bookName:"ZhangFisher",
    price:100,
    count:1,
    total: computed(async ([count,price])=>{ 
        ++count
        await delay()
        throw new Error("\u8BA1\u7B97\u51FA\u9519"+(count))
    },
    ["order.count","order.price"],
    {
      retry:[5,1000] ,// \u91CD\u8BD55\u6B21\uFF0C\u6BCF\u6B21\u95F4\u96941\u79D2
      scope:ComputedScopeRef.Depends
    })
  }
}  )

export default ()=>{
  const [state,setState] = store.useState()
  return (<Box>
    <table>
      <thead><tr><td colSpan="2">\u8BA2\u5355\u4FE1\u606F</td></tr></thead>
      <tbody>
        <tr><td><b>\u4E66\u540D</b></td><td>{state.order.bookName}</td></tr>
        <tr><td><b>\u4EF7\u683C</b></td><td>{state.order.price}</td></tr>
        <tr><td><b>\u6570\u91CF</b></td><td>
          <button onClick={()=>setState(draft=>draft.order.count=draft.order.count-1)}>-</button>
          <input value={state.order.count} onChange={store.sync(to=>to.order.count)}/>
          <button  onClick={()=>setState(draft=>{count=0;draft.order.count=draft.order.count+1})}>+</button>
        </td></tr>        
      </tbody>
      <tfoot>
        <tr><td><b>\u603B\u4EF7</b></td><td>
         {
        state.order.total.loading ? \`\u6B63\u5728\u8BA1\u7B97...\`  
        : (
          state.order.total.error ? \`ERROR:\${state.order.total.error}\`: state.order.total.result
        )}
        {state.order.total.retry >0 ? \`\u91CD\u8BD5:\${state.order.total.retry}\` : ''}
        </td></tr>
        </tfoot>
      </table>
    
    <div>
      {JSON.stringify(state.order.total)}
    </div>
  </Box>)
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=k()(T()().mark(function O(){var v,c=arguments;return T()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}},"docs-reactive-computed-async-demo-8":{component:t.memo(t.lazy(k()(T()().mark(function F(){var o,O,v,c,b,a,A;return T()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=M.sent,O=o.createStore,v=o.computed,c=o.ComputedScopeRef,M.next=8,Promise.resolve().then(e.bind(e,48398));case 8:return b=M.sent,a=b.Box,A=O({order:{bookName:"ZhangFisher",price:100,count:1,total:v(function(){var g=k()(T()().mark(function y(C,N){var P,l,s,u;return T()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return P=n()(C,2),l=P[0],s=P[1],u=N.abortSignal,S.abrupt("return",new Promise(function(_,j){setTimeout(function(){_(l*s)},1e4),u.addEventListener("abort",function(){j("cancelled")})}));case 3:case"end":return S.stop()}},y)}));return function(y,C){return g.apply(this,arguments)}}(),["order.count","order.price"],{timeout:[10*1e3,10],scope:c.Depends})}}),M.abrupt("return",{default:function(){var y=A.useState(),C=n()(y,2),N=C[0],P=C[1];return t.createElement(a,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,N.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,N.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return P(function(s){return s.order.count=s.order.count-1})}},"-"),t.createElement("input",{value:N.order.count,onChange:A.sync(function(l){return l.order.count})}),t.createElement("button",{onClick:function(){return P(function(s){s.order.count=s.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,N.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...".concat(N.order.total.timeout):N.order.total.error?"ERROR:".concat(N.order.total.error):N.order.total.result,N.order.total.loading?t.createElement("button",{onClick:function(){return N.order.total.cancel()}},"\u53D6\u6D88"):"")))),t.createElement("div",null,JSON.stringify(N.order.total)))}});case 12:case"end":return M.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
import { useRef,useEffect } from "react"
import { delay } from "speedform-docs"
import { Box} from "@speedform/demo-components"

 
const store = createStore({
  order:{
    bookName:"ZhangFisher",
    price:100,
    count:1,
    total: computed(async ([count,price],{abortSignal})=>{
        return new Promise<number>((resolve,reject)=>{
					setTimeout(()=>{
						resolve(count*price)
					},10 *1000)
					abortSignal.addEventListener("abort",()=>{
						reject("cancelled")
					})
				})	
    },
    ["order.count","order.price"],
    {
      timeout:[10*1000,10] ,
      scope:ComputedScopeRef.Depends
    })
  }
}  )

export default ()=>{
  const [state,setState] = store.useState()
  return (<Box>
    <table>
      <thead><tr><td colSpan="2">\u8BA2\u5355\u4FE1\u606F</td></tr></thead>
      <tbody>
        <tr><td><b>\u4E66\u540D</b></td><td>{state.order.bookName}</td></tr>
        <tr><td><b>\u4EF7\u683C</b></td><td>{state.order.price}</td></tr>
        <tr><td><b>\u6570\u91CF</b></td><td>
          <button onClick={()=>setState(draft=>draft.order.count=draft.order.count-1)}>-</button>
          <input value={state.order.count} onChange={store.sync(to=>to.order.count)}/>
          <button  onClick={()=>setState(draft=>{draft.order.count=draft.order.count+1})}>+</button>
        </td></tr>        
      </tbody>
      <tfoot>
        <tr><td><b>\u603B\u4EF7</b></td><td>
          
         {
        state.order.total.loading ? \`\u6B63\u5728\u8BA1\u7B97...\${state.order.total.timeout}\`  
        : (
          state.order.total.error ? \`ERROR:\${state.order.total.error}\`: state.order.total.result
        )}
        {state.order.total.loading ? <button  onClick={()=>state.order.total.cancel()}>\u53D6\u6D88</button> : ''  }
        </td></tr>
        </tfoot>
      </table>
    
    <div>
      {JSON.stringify(state.order.total)}
    </div>
  </Box>)
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=k()(T()().mark(function O(){var v,c=arguments;return T()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}},"docs-reactive-computed-async-demo-9":{component:t.memo(t.lazy(k()(T()().mark(function F(){var o,O,v,c;return T()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=a.sent,O=o.createStore,v=o.computed,c=O({bookName:"ZhangFisher",price:100,count:3,total:v(function(){var A=k()(T()().mark(function d(M){return T()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",M.price*M.count);case 1:case"end":return y.stop()}},d)}));return function(d){return A.apply(this,arguments)}}(),[])}),a.abrupt("return",{default:function(){var d=c.useState(),M=n()(d,1),g=M[0];return t.createElement("div",null,t.createElement("div",null,"\u4E66\u540D:",g.bookName),t.createElement("div",null,"\u4EF7\u683C:",g.price),t.createElement("div",null,"\u6570\u91CF:",g.count),t.createElement("div",null,"\u603B\u4EF7:",g.total.result))}});case 7:case"end":return a.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed} from "@speedform/reactive"

const store = createStore({
    bookName:"ZhangFisher",
    price:100,
    count:3,
    total:computed(async (order)=>{
      return order.price*order.count
    },[]) // \u4F9D\u8D56\u662F\u7A7A\u7684
}
 )

export default ()=>{
  const [state] = store.useState()
  return (<div>
    <div>\u4E66\u540D:{state.bookName}</div>
    <div>\u4EF7\u683C:{state.price}</div>
    <div>\u6570\u91CF:{state.count}</div>
    <div>\u603B\u4EF7:{state.total.result}</div>
  </div>)
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var F=k()(T()().mark(function O(){var v,c=arguments;return T()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}},"docs-reactive-computed-async-demo-10":{component:t.memo(t.lazy(k()(T()().mark(function F(){var o,O,v;return T()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=b.sent,O=o.createStore,v=O({bookName:"ZhangFisher",price:100,count:3,total:function(){var a=k()(T()().mark(function d(M){return T()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",M.price*M.count);case 1:case"end":return y.stop()}},d)}));function A(d){return a.apply(this,arguments)}return A}()}),b.abrupt("return",{default:function(){var A=v.useState(),d=n()(A,1),M=d[0];return t.createElement("div",null,t.createElement("div",null,"\u4E66\u540D:",M.bookName),t.createElement("div",null,"\u4EF7\u683C:",M.price),t.createElement("div",null,"\u6570\u91CF:",M.count),t.createElement("div",null,"\u603B\u4EF7:",M.total.result),t.createElement("div",null,"state.total=",String(M.total)))}});case 6:case"end":return b.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore} from "@speedform/reactive"

const store = createStore({
    bookName:"ZhangFisher",
    price:100,
    count:3,
    total:async (order)=>{
      return order.price*order.count
    }
}   
)

export default ()=>{
  const [state] = store.useState()
  return (<div>
    <div>\u4E66\u540D:{state.bookName}</div>
    <div>\u4EF7\u683C:{state.price}</div>
    <div>\u6570\u91CF:{state.count}</div>
    <div>\u603B\u4EF7:{state.total.result}</div>
    <div>state.total={String(state.total)}</div>
  </div>)
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var F=k()(T()().mark(function O(){var v,c=arguments;return T()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}}}},75004:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return o}});var W=e(29008),n=e.n(W),z=e(34180),T=e.n(z),U=e(28633),k=e.n(U),t=e(70958),G=e.n(t),K=e(92379),F=e(69180),o={"docs-reactive-computed-intro-demo-0":{component:K.memo(K.lazy(G()(n()().mark(function O(){var v,c,b,a,A,d;return n()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return v=g.sent,c=v.createStore,g.next=6,Promise.resolve().then(e.bind(e,48398));case 6:return b=g.sent,a=b.Divider,A={firstName:"Zhang",lastName:"Fisher",fullName:function(C){return C.firstName+C.lastName}},d=c(A,{singleton:!1}),g.abrupt("return",{default:function(){var C=d.useState(),N=k()(C,2),P=N[0],l=N[1];return K.createElement("div",null,K.createElement("h4",null,"\u58F0\u660E\u65F6fullName\u662F\u4E00\u4E2A\u51FD\u6570"),K.createElement("div",null,"typeof(user.fullName)=",T()(A.fullName)),K.createElement(a,null),K.createElement("h4",null,"\u521B\u5EFAStore\u540E,state.fullName\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32"),K.createElement("div",null,"typeof(store.state.fullName)=",T()(P.fullName)),K.createElement("div",null,"store.state.fullName==",P.fullName))}});case 11:case"end":return g.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive'; 
import { Divider} from "@speedform/demo-components"

const user = {
  firstName:"Zhang",
  lastName:"Fisher",
  fullName: (user)=>{ 
    return user.firstName+user.lastName
  }
}

const store = createStore(user,{singleton:false})
 
export default ()=>{
  const [state,setState] = store.useState()
  return (<div>
    <h4>\u58F0\u660E\u65F6fullName\u662F\u4E00\u4E2A\u51FD\u6570</h4>
    <div>typeof(user.fullName)={typeof(user.fullName)}</div>
    <Divider />
    <h4>\u521B\u5EFAStore\u540E,state.fullName\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32</h4>
    <div>typeof(store.state.fullName)={typeof(state.fullName)}</div>
    <div>store.state.fullName=={state.fullName}</div> 
  </div>)
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var O=G()(n()().mark(function c(){var b,a=arguments;return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(408).then(e.bind(e,28408));case 2:return d.abrupt("return",(b=d.sent).default.apply(b,a));case 3:case"end":return d.stop()}},c)}));function v(){return O.apply(this,arguments)}return v}()}},"docs-reactive-computed-intro-demo-1":{component:K.memo(K.lazy(G()(n()().mark(function O(){var v,c,b,a,A;return n()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return v=M.sent,c=v.createStore,b=v.ComputedScopeRef,a={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(y){return y.firstName+y.lastName}}},A=c(a,{scope:function(){return b.Current}}),M.abrupt("return",{default:function(){var y=A.useState(),C=k()(y,2),N=C[0],P=C[1];return K.createElement("div",null,K.createElement("div",null,"FullName:",N.user.fullName))}});case 8:case"end":return M.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive'; 
const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: function(scope){
      // scope\u6307\u5411user\u5BF9\u8C61      
      return scope.firstName+scope.lastName
    }
  }
} 
const store = createStore(state,{
  // \u6307\u5B9A\u8BA1\u7B97\u5C5E\u6027\u7684\u9ED8\u8BA4\u4E0A\u4E0B\u6587\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u6240\u6709\u7684\u5F53\u524D\u5BF9\u8C61
  scope: ()=>ComputedScopeRef.Current,
})

export default ()=>{
  const [state,setState] = store.useState()
  return <div> 
    <div>FullName:{state.user.fullName}</div>
  </div>
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"store.options.scope==ComputedScopeRef.Current,",title:"ComputedScopeRef.Current"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=G()(n()().mark(function c(){var b,a=arguments;return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(408).then(e.bind(e,28408));case 2:return d.abrupt("return",(b=d.sent).default.apply(b,a));case 3:case"end":return d.stop()}},c)}));function v(){return O.apply(this,arguments)}return v}()}},"docs-reactive-computed-intro-demo-2":{component:K.memo(K.lazy(G()(n()().mark(function O(){var v,c,b,a;return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return v=d.sent,c=v.createStore,b=v.ComputedScopeRef,a=c({user:{firstName:"Zhang",lastName:"Fisher",fullName:function(g){return g.user.firstName+g.user.lastName}}},{scope:function(){return b.Root}}),d.abrupt("return",{default:function(){var g=a.useState(),y=k()(g,2),C=y[0],N=y[1];return K.createElement("div",null,K.createElement("div",null,"FullName:",C.user.fullName))}});case 7:case"end":return d.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive'; 
 
const store = createStore({
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: function(scope){
      // scope\u6307\u5411State\u6839\u5BF9\u8C61      
      return scope.user.firstName+scope.user.lastName
    }
  }
},{
  // \u6307\u5B9A\u8BA1\u7B97\u5C5E\u6027\u7684\u9ED8\u8BA4\u4E0A\u4E0B\u6587\u6307\u5411State\u6839\u5BF9\u8C61
  scope: () => ComputedScopeRef.Root
})

export default ()=>{
  const [state,setState] = store.useState()
  return <div> 
    <div>FullName:{state.user.fullName}</div>
  </div>
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"store.options.scope==ComputedScopeRef.Root,",title:"ComputedScopeRef.Root"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=G()(n()().mark(function c(){var b,a=arguments;return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(408).then(e.bind(e,28408));case 2:return d.abrupt("return",(b=d.sent).default.apply(b,a));case 3:case"end":return d.stop()}},c)}));function v(){return O.apply(this,arguments)}return v}()}},"docs-reactive-computed-intro-demo-3":{component:K.memo(K.lazy(G()(n()().mark(function O(){var v,c,b,a,A;return n()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return v=M.sent,c=v.createStore,b=v.ComputedScopeRef,a={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(y){return y.user.firstName+y.user.lastName}}},A=c(a,{scope:function(){return b.Parent}}),M.abrupt("return",{default:function(){var y=A.useState(),C=k()(y,2),N=C[0],P=C[1];return K.createElement("div",null,K.createElement("div",null,"FullName:",N.user.fullName))}});case 8:case"end":return M.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive'; 
const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: function(scope){
      // scope\u6307\u5411user\u5BF9\u8C61\u7684\u7236\u5BF9\u8C61\uFF0C\u5373\u6839
      return scope.user.firstName+scope.user.lastName
    }
  }
} 
const store = createStore(state,{
  // \u6307\u5B9A\u8BA1\u7B97\u5C5E\u6027\u7684\u9ED8\u8BA4\u4E0A\u4E0B\u6587\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u6240\u6709\u7684\u5F53\u524D\u5BF9\u8C61
  scope: ()=>ComputedScopeRef.Parent,
})

export default ()=>{
  const [state,setState] = store.useState()
  return <div> 
    <div>FullName:{state.user.fullName}</div>
  </div>
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"scope==ComputedScopeRef.Parent",title:"ComputedScopeRef.Parent"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=G()(n()().mark(function c(){var b,a=arguments;return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(408).then(e.bind(e,28408));case 2:return d.abrupt("return",(b=d.sent).default.apply(b,a));case 3:case"end":return d.stop()}},c)}));function v(){return O.apply(this,arguments)}return v}()}},"docs-reactive-computed-intro-demo-4":{component:K.memo(K.lazy(G()(n()().mark(function O(){var v,c,b,a;return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return v=d.sent,c=v.createStore,b={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(g){return g},address:{city:"Quanzhou"}}},a=c(b,{scope:function(){return"firstName"}}),d.abrupt("return",{default:function(){var g=a.useState(),y=k()(g,2),C=y[0],N=y[1];return K.createElement("div",null,K.createElement("div",null,"FullName:",C.user.fullName))}});case 7:case"end":return d.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive'; 

const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: function(scope){
      // this\u6307\u5411user\u5BF9\u8C61\u7684firstName
      return scope
    },
    address:{
      city:"Quanzhou",
    }
  }
} 
const store = createStore(state,{
  scope: ()=>'firstName'
})

export default ()=>{
  const [state,setState] = store.useState()
  return <div> 
    <div>FullName:{state.user.fullName}</div>
  </div>
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"store.options.scope==<\u5B57\u7B26\u4E32>",title:"<\u5B57\u7B26\u4E32>"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=G()(n()().mark(function c(){var b,a=arguments;return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(408).then(e.bind(e,28408));case 2:return d.abrupt("return",(b=d.sent).default.apply(b,a));case 3:case"end":return d.stop()}},c)}));function v(){return O.apply(this,arguments)}return v}()}},"docs-reactive-computed-intro-demo-5":{component:K.memo(K.lazy(G()(n()().mark(function O(){var v,c,b,a;return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return v=d.sent,c=v.createStore,b={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(g){return g},address:{city:"Quanzhou"}}},a=c(b,{scope:function(){return["user","address","city"]}}),d.abrupt("return",{default:function(){var g=a.useState(),y=k()(g,2),C=y[0],N=y[1];return K.createElement("div",null,K.createElement("div",null,"FullName:",C.user.fullName))}});case 7:case"end":return d.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive'; 

const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: function(scope){ 
      return scope
    },
    address:{
      city:"Quanzhou",
    }
  }
} 
const store = createStore(state,{
  scope: ()=>['user','address','city']
})

export default ()=>{
  const [state,setState] = store.useState()
  return <div> 
    <div>FullName:{state.user.fullName}</div>
  </div>
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",title:"<\u5B57\u7B26\u4E32\u6570\u7EC4>"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=G()(n()().mark(function c(){var b,a=arguments;return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(408).then(e.bind(e,28408));case 2:return d.abrupt("return",(b=d.sent).default.apply(b,a));case 3:case"end":return d.stop()}},c)}));function v(){return O.apply(this,arguments)}return v}()}},"docs-reactive-computed-intro-demo-6":{component:K.memo(K.lazy(G()(n()().mark(function O(){var v,c,b,a,A,d;return n()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return v=g.sent,c=v.createStore,b=v.computed,a=v.ComputedScopeRef,A={user:{firstName:"Zhang",lastName:"Fisher",fullName:b(function(){var y=G()(n()().mark(function C(N){return n()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",N[0]+N[1]);case 1:case"end":return l.stop()}},C)}));return function(C){return y.apply(this,arguments)}}(),["user.firstName","user.lastName"],{async:!0,scope:a.Depends})}},d=c(A),g.abrupt("return",{default:function(){var C=d.useState(),N=k()(C,2),P=N[0],l=N[1];return K.createElement("div",null,K.createElement("div",null,"FullName:",P.user.fullName.result))}});case 9:case"end":return g.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef  } from '@speedform/reactive'; 

const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: computed(async (deps)=>{ 
      return deps[0] + deps[1]
    },
      // \u58F0\u660E\u4F9D\u8D56
      ['user.firstName','user.lastName'], 
    {      
      async:true,
      scope:ComputedScopeRef.Depends
    }) 
  }
} 
const store = createStore(state)

export default ()=>{
  const [state,setState] = store.useState()
  return <div> 
    <div>FullName:{state.user.fullName.result}</div>
  </div>
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",title:"<\u5B57\u7B26\u4E32\u6570\u7EC4>"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=G()(n()().mark(function c(){var b,a=arguments;return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(408).then(e.bind(e,28408));case 2:return d.abrupt("return",(b=d.sent).default.apply(b,a));case 3:case"end":return d.stop()}},c)}));function v(){return O.apply(this,arguments)}return v}()}}}},43639:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return v}});var W=e(12027),n=e.n(W),z=e(34180),T=e.n(z),U=e(28633),k=e.n(U),t=e(29008),G=e.n(t),K=e(70958),F=e.n(K),o=e(92379),O=e(68282),v={"docs-reactive-computed-objects-demo-0":{component:o.memo(o.lazy(F()(G()().mark(function c(){var b,a,A,d,M,g,y,C,N;return G()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return b=l.sent,a=b.createStore,A=b.computed,l.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return d=l.sent,M=d.Divider,g=d.ColorBlock,y=0,C={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(u){return u.firstName+u.lastName+" (".concat(++y,")")},fullName2:A(function(){var s=F()(G()().mark(function u(E){return G()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",E.firstName+E.lastName+" (".concat(++y,")"));case 1:case"end":return _.stop()}},u)}));return function(u){return s.apply(this,arguments)}}(),[],{async:!0})}},N=a(C),l.abrupt("return",{default:function(){var u=N.useState(),E=k()(u,1),S=E[0];return o.createElement("div",null,o.createElement("div",null,"FirstName =",S.user.firstName),o.createElement("div",null,"LastName =",S.user.lastName),o.createElement(g,{name:"FullName",value:S.user.fullName}),o.createElement(g,{name:"FullName2",value:S.user.fullName2.result}),o.createElement(M,null),o.createElement("div",null,"typeof(store.computedObjects)==",T()(N.computedObjects)),o.createElement("div",null,"store.computedObjects instanceof Map=",String(N.computedObjects instanceof Map)),o.createElement("div",null,"store.computedObjects.size=",N.computedObjects.size),o.createElement("div",null,"store.computedObjects.size=",N.computedObjects.size),o.createElement("div",null,"store.computedObjects.keys()=",n()(N.computedObjects.keys()).join(" , ")),o.createElement("button",{onClick:function(){return N.computedObjects.get("user/fullName").run()}},"\u6267\u884CfullName\u8BA1\u7B97\u51FD\u6570"),o.createElement("button",{onClick:function(){return N.computedObjects.get("user/fullName2").run()}},"\u6267\u884CfullName2\u8BA1\u7B97\u51FD\u6570"),o.createElement("button",{onClick:function(){return N.state.user.fullName2.run()}},"\u6267\u884CfullName2\u8BA1\u7B97\u51FD\u6570"))}});case 14:case"end":return l.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
import { Divider,ColorBlock } from "@speedform/demo-components"
let count=0
const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: (user)=>{
      return user.firstName+user.lastName + \` (\${++count})\`
    },
    fullName2: computed(async (user)=>{
      return user.firstName+user.lastName+ \` (\${++count})\`
    },[],{async:true})
    // Q: \u4E3A\u4EC0\u4E48\u6B64\u5904\u8981\u6307\u5B9Aasync=true?
    // A: \u56E0\u6B64\u672C\u7AD9\u4F7F\u7528webpack/babel\u8FDB\u884C\u8F6C\u7801\uFF0C\u56E0\u6B64\u65E0\u6CD5\u81EA\u52A8\u8BC6\u522Basync\u51FD\u6570\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u6307\u5B9Aasync=true
  }
} 

const store = createStore(state)

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
    <button onClick={()=>store.computedObjects.get("user/fullName").run()}>\u6267\u884CfullName\u8BA1\u7B97\u51FD\u6570</button>
    <button onClick={()=>store.computedObjects.get("user/fullName2").run()}>\u6267\u884CfullName2\u8BA1\u7B97\u51FD\u6570</button>
    <button onClick={()=>store.state.user.fullName2.run()}>\u6267\u884CfullName2\u8BA1\u7B97\u51FD\u6570</button>
  </div>)
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var c=F()(G()().mark(function a(){var A,d=arguments;return G()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(408).then(e.bind(e,28408));case 2:return g.abrupt("return",(A=g.sent).default.apply(A,d));case 3:case"end":return g.stop()}},a)}));function b(){return c.apply(this,arguments)}return b}()}},"docs-reactive-computed-objects-demo-1":{component:o.memo(o.lazy(F()(G()().mark(function c(){var b,a,A,d,M,g,y,C,N,P;return G()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return b=s.sent,a=b.createStore,A=b.computed,s.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return d=s.sent,M=d.Divider,s.next=11,Promise.resolve().then(e.bind(e,21970));case 11:return g=s.sent,y=g.delay,C=0,N={book:{name:"Zhang",count:4,price:100,total1:A(function(){var u=F()(G()().mark(function E(S){return G()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,y();case 2:return j.abrupt("return",S.count*S.price);case 3:case"end":return j.stop()}},E)}));return function(E){return u.apply(this,arguments)}}(),[],{async:!0,group:"total"}),total2:A(function(){var u=F()(G()().mark(function E(S){return G()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,y();case 2:return j.abrupt("return",S.count*S.price);case 3:case"end":return j.stop()}},E)}));return function(E){return u.apply(this,arguments)}}(),[],{async:!0,group:"total"}),total3:A(function(){var u=F()(G()().mark(function E(S){return G()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,y();case 2:return j.abrupt("return",S.count*S.price);case 3:case"end":return j.stop()}},E)}));return function(E){return u.apply(this,arguments)}}(),[],{async:!0,group:"total"}),average1:A(function(){var u=F()(G()().mark(function E(S){return G()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,y();case 2:return j.abrupt("return",S.price/S.count);case 3:case"end":return j.stop()}},E)}));return function(E){return u.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average2:A(function(){var u=F()(G()().mark(function E(S){return G()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,y();case 2:return j.abrupt("return",S.price/S.count);case 3:case"end":return j.stop()}},E)}));return function(E){return u.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average3:A(function(){var u=F()(G()().mark(function E(S){return G()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,y();case 2:return j.abrupt("return",S.price/S.count);case 3:case"end":return j.stop()}},E)}));return function(E){return u.apply(this,arguments)}}(),[],{async:!0,group:"average"})}},P=a(N),s.abrupt("return",{default:function(){var E=P.useState(),S=k()(E,1),_=S[0];return o.createElement("div",null,o.createElement("div",null,"BookName =",_.book.name),o.createElement("div",null,"count = ",o.createElement("input",{value:_.book.count,onChange:P.sync(["book","count"])})),o.createElement("div",null,"price = ",o.createElement("input",{value:_.book.price,onChange:P.sync(["book","price"])})),o.createElement(M,{title:"Total Group"}),o.createElement("div",null,"Total1 =",_.book.total1.loading?"\u8BA1\u7B97\u4E2D...":_.book.total1.result),o.createElement("div",null,"Total2 =",_.book.total2.loading?"\u8BA1\u7B97\u4E2D...":_.book.total2.result),o.createElement("div",null,"Total3 =",_.book.total3.loading?"\u8BA1\u7B97\u4E2D...":_.book.total3.result),o.createElement("button",{onClick:function(){return P.computedObjects.runGroup("total")}},"\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570"),o.createElement(M,{title:"Average Group"}),o.createElement("div",null,"Average1 =",_.book.average1.loading?"\u8BA1\u7B97\u4E2D...":_.book.average1.result),o.createElement("div",null,"Average2 =",_.book.average2.loading?"\u8BA1\u7B97\u4E2D...":_.book.average2.result),o.createElement("div",null,"Average3 =",_.book.average3.loading?"\u8BA1\u7B97\u4E2D...":_.book.average3.result),o.createElement("button",{onClick:function(){return P.computedObjects.runGroup("average")}},"\u6267\u884C\u7EC4average\u8BA1\u7B97\u51FD\u6570"))}});case 17:case"end":return s.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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

    // Q: \u4E3A\u4EC0\u4E48\u6B64\u5904\u8981\u6307\u5B9Aasync=true?
    // A: \u56E0\u6B64\u672C\u7AD9\u4F7F\u7528webpack/babel\u8FDB\u884C\u8F6C\u7801\uFF0C\u56E0\u6B64\u65E0\u6CD5\u81EA\u52A8\u8BC6\u522Basync\u51FD\u6570\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u6307\u5B9Aasync=true
  }
} 

const store = createStore(state)

export default ()=>{
  const [state] = store.useState()

  return (<div>
    <div>BookName ={state.book.name}</div>
    <div>count = <input value={state.book.count} onChange={store.sync(["book","count"])}/></div>
    <div>price = <input value={state.book.price} onChange={store.sync(["book","price"])}/></div>
    <Divider title="Total Group"/>
    <div>Total1 ={state.book.total1.loading ? '\u8BA1\u7B97\u4E2D...' : state.book.total1.result}</div> 
    <div>Total2 ={state.book.total2.loading ? '\u8BA1\u7B97\u4E2D...' : state.book.total2.result}</div> 
    <div>Total3 ={state.book.total3.loading ? '\u8BA1\u7B97\u4E2D...' : state.book.total3.result}</div> 
    <button onClick={()=>store.computedObjects.runGroup("total")}>\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570</button> 
    <Divider title="Average Group"/>
    <div>Average1 ={state.book.average1.loading ? '\u8BA1\u7B97\u4E2D...' : state.book.average1.result}</div> 
    <div>Average2 ={state.book.average2.loading ? '\u8BA1\u7B97\u4E2D...' : state.book.average2.result}</div> 
    <div>Average3 ={state.book.average3.loading ? '\u8BA1\u7B97\u4E2D...' : state.book.average3.result}</div> 
    <button onClick={()=>store.computedObjects.runGroup("average")}>\u6267\u884C\u7EC4average\u8BA1\u7B97\u51FD\u6570</button> 
  </div>)
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398),"speedform-docs":e(21970)},renderOpts:{compile:function(){var c=F()(G()().mark(function a(){var A,d=arguments;return G()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(408).then(e.bind(e,28408));case 2:return g.abrupt("return",(A=g.sent).default.apply(A,d));case 3:case"end":return g.stop()}},a)}));function b(){return c.apply(this,arguments)}return b}()}},"docs-reactive-computed-objects-demo-2":{component:o.memo(o.lazy(F()(G()().mark(function c(){var b,a,A,d,M,g,y,C,N,P;return G()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return b=s.sent,a=b.createStore,A=b.computed,s.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return d=s.sent,M=d.Divider,s.next=11,Promise.resolve().then(e.bind(e,21970));case 11:return g=s.sent,y=g.delay,C=0,N={book:{name:"Zhang",count:4,price:100,total1:A(function(){var u=F()(G()().mark(function E(S){return G()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,y();case 2:return j.abrupt("return",S.count*S.price);case 3:case"end":return j.stop()}},E)}));return function(E){return u.apply(this,arguments)}}(),["book.count","book.price"],{async:!0,group:"total"}),total2:A(function(){var u=F()(G()().mark(function E(S){return G()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,y();case 2:return j.abrupt("return",S.count*S.price);case 3:case"end":return j.stop()}},E)}));return function(E){return u.apply(this,arguments)}}(),["book.count","book.price"],{async:!0,group:"total",initial:100,enable:!1}),total3:A(function(){var u=F()(G()().mark(function E(S){return G()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,y();case 2:return j.abrupt("return",S.count*S.price);case 3:case"end":return j.stop()}},E)}));return function(E){return u.apply(this,arguments)}}(),[],{async:!0,group:"total"}),average1:A(function(){var u=F()(G()().mark(function E(S){return G()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,y();case 2:return j.abrupt("return",S.price/S.count);case 3:case"end":return j.stop()}},E)}));return function(E){return u.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average2:A(function(){var u=F()(G()().mark(function E(S){return G()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,y();case 2:return j.abrupt("return",S.price/S.count);case 3:case"end":return j.stop()}},E)}));return function(E){return u.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average3:A(function(){var u=F()(G()().mark(function E(S){return G()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,y();case 2:return j.abrupt("return",S.price/S.count);case 3:case"end":return j.stop()}},E)}));return function(E){return u.apply(this,arguments)}}(),[],{async:!0,group:"average"})}},P=a(N),s.abrupt("return",{default:function(){var E=P.useState(),S=k()(E,1),_=S[0];return o.createElement("div",null,o.createElement("div",null,"BookName =",_.book.name),o.createElement("div",null,"count = ",o.createElement("input",{value:_.book.count,onChange:P.sync(["book","count"])})),o.createElement("div",null,"price = ",o.createElement("input",{value:_.book.price,onChange:P.sync(["book","price"])})),o.createElement(M,{title:"Total Group"}),o.createElement("table",null,o.createElement("tbody",null,o.createElement("tr",null,o.createElement("td",null,"Total1 ="),o.createElement("td",null,_.book.total1.loading?"\u8BA1\u7B97\u4E2D...":_.book.total1.result),o.createElement("td",null,"\u9ED8\u8BA4\u81EA\u52A8\u8BA1\u7B97")),o.createElement("tr",null,o.createElement("td",null,"Total2 ="),o.createElement("td",null,_.book.total2.loading?"\u8BA1\u7B97\u4E2D...":_.book.total2.result),o.createElement("td",null,"\u7981\u7528\u8BA1\u7B97\uFF0C\u6307\u5B9A\u4E86\u9ED8\u8BA4\u503C(",o.createElement("input",{type:"checkbox",checked:P.computedObjects.get("book/total2"),onChange:function(H){console.log("ff=,",H.target,P.computedObjects.get("book/total2"))}}),")")),o.createElement("tr",null,o.createElement("td",null,"Total3 ="),o.createElement("td",null,_.book.total3.loading?"\u8BA1\u7B97\u4E2D...":_.book.total3.result),o.createElement("td",null,"\u65E0\u4F9D\u8D56\uFF0C\u9700\u8981\u624B\u52A8\u8BA1\u7B97")))),o.createElement("button",{onClick:function(){return P.computedObjects.runGroup("total")}},"\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570"),o.createElement(M,{title:"Average Group"}),o.createElement("div",null,"Average1 =",_.book.average1.loading?"\u8BA1\u7B97\u4E2D...":_.book.average1.result),o.createElement("div",null,"Average2 =",_.book.average2.loading?"\u8BA1\u7B97\u4E2D...":_.book.average2.result),o.createElement("div",null,"Average3 =",_.book.average3.loading?"\u8BA1\u7B97\u4E2D...":_.book.average3.result),o.createElement("button",{onClick:function(){return P.computedObjects.runGroup("average")}},"\u6267\u884C\u7EC4average\u8BA1\u7B97\u51FD\u6570"))}});case 17:case"end":return s.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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
    },['book.count','book.price'],{async:true,group:"total"}),
    total2: computed(async (book)=>{
      await delay()
      return book.count*book.price 
    },['book.count','book.price'],{async:true,group:"total",initial:100,enable:false}),
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


  }
} 

const store = createStore(state)

export default ()=>{
  const [state] = store.useState()

  return (<div>
    <div>BookName ={state.book.name}</div>
    <div>count = <input value={state.book.count} onChange={store.sync(["book","count"])}/></div>
    <div>price = <input value={state.book.price} onChange={store.sync(["book","price"])}/></div>
    <Divider title="Total Group"/>
    <table>
      <tbody>
        <tr>
          <td>Total1 =</td>
          <td>{state.book.total1.loading ? '\u8BA1\u7B97\u4E2D...' : state.book.total1.result}</td>
          <td>\u9ED8\u8BA4\u81EA\u52A8\u8BA1\u7B97</td>
        </tr>
        <tr>
          <td>Total2 =</td>
          <td>{state.book.total2.loading ? '\u8BA1\u7B97\u4E2D...' : state.book.total2.result}</td>
          <td>\u7981\u7528\u8BA1\u7B97\uFF0C\u6307\u5B9A\u4E86\u9ED8\u8BA4\u503C(<input type="checkbox" checked={store.computedObjects.get("book/total2")} onChange={(e)=>{
            console.log("ff=,",e.target,store.computedObjects.get("book/total2"))
          }} />)</td>
        </tr>        
        <tr>
          <td>Total3 =</td>
          <td>{state.book.total3.loading ? '\u8BA1\u7B97\u4E2D...' : state.book.total3.result}</td>
          <td>\u65E0\u4F9D\u8D56\uFF0C\u9700\u8981\u624B\u52A8\u8BA1\u7B97</td>
        </tr>
      </tbody>
    </table> 
    <button onClick={()=>store.computedObjects.runGroup("total")}>\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570</button> 
    <Divider title="Average Group"/>
    <div>Average1 ={state.book.average1.loading ? '\u8BA1\u7B97\u4E2D...' : state.book.average1.result}</div> 
    <div>Average2 ={state.book.average2.loading ? '\u8BA1\u7B97\u4E2D...' : state.book.average2.result}</div> 
    <div>Average3 ={state.book.average3.loading ? '\u8BA1\u7B97\u4E2D...' : state.book.average3.result}</div> 
    <button onClick={()=>store.computedObjects.runGroup("average")}>\u6267\u884C\u7EC4average\u8BA1\u7B97\u51FD\u6570</button> 
  </div>)
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398),"speedform-docs":e(21970)},renderOpts:{compile:function(){var c=F()(G()().mark(function a(){var A,d=arguments;return G()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(408).then(e.bind(e,28408));case 2:return g.abrupt("return",(A=g.sent).default.apply(A,d));case 3:case"end":return g.stop()}},a)}));function b(){return c.apply(this,arguments)}return b}()}},"docs-reactive-computed-objects-demo-3":{component:o.memo(o.lazy(F()(G()().mark(function c(){var b,a,A,d,M,g,y,C;return G()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return b=P.sent,a=b.createStore,A=b.computed,P.next=7,Promise.resolve().then(e.bind(e,21970));case 7:return d=P.sent,M=d.delay,g=0,y={book:{name:"Zhang",count:4,price:100,total:A(function(){var l=F()(G()().mark(function s(u){return G()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,M();case 2:return S.abrupt("return",u.count*u.price);case 3:case"end":return S.stop()}},s)}));return function(s){return l.apply(this,arguments)}}(),[],{async:!0,group:"total"})}},C=a(y),P.abrupt("return",{default:function(){var s=C.useState(),u=k()(s,1),E=u[0];return o.createElement("div",null,o.createElement("div",null,"BookName =",E.book.name),o.createElement("div",null,"count = ",o.createElement("input",{value:E.book.count,onChange:C.sync(["book","count"])})),o.createElement("div",null,"price = ",o.createElement("input",{value:E.book.price,onChange:C.sync(["book","price"])})),o.createElement("div",null,"Total =",E.book.total.loading?"\u8BA1\u7B97\u4E2D...":E.book.total.result),o.createElement("button",{onClick:function(){return C.computedObjects.runGroup("total")}},"\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570"))}});case 13:case"end":return P.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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

const store = createStore(state)

export default ()=>{
  const [state] = store.useState()

  return (<div>
    <div>BookName ={state.book.name}</div>
    <div>count = <input value={state.book.count} onChange={store.sync(["book","count"])}/></div>
    <div>price = <input value={state.book.price} onChange={store.sync(["book","price"])}/></div> 
    <div>Total ={state.book.total.loading ? '\u8BA1\u7B97\u4E2D...' : state.book.total.result}</div> 
    
    <button onClick={()=>store.computedObjects.runGroup("total")}>\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570</button>   
  </div>)
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970)},renderOpts:{compile:function(){var c=F()(G()().mark(function a(){var A,d=arguments;return G()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(408).then(e.bind(e,28408));case 2:return g.abrupt("return",(A=g.sent).default.apply(A,d));case 3:case"end":return g.stop()}},a)}));function b(){return c.apply(this,arguments)}return b}()}}}},30031:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(22421),z={}},24795:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return K}});var W=e(29008),n=e.n(W),z=e(28633),T=e.n(z),U=e(70958),k=e.n(U),t=e(92379),G=e(69),K={"docs-reactive-computed-sync-demo-0":{component:t.memo(t.lazy(k()(n()().mark(function F(){var o,O,v,c;return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=a.sent,O=o.createStore,v={books:[{name:"\u5F20\u4E09",price:18,author:"tom",count:2,total:function(d){return d.price*d.count}},{name:"\u674E\u56DB",price:19,author:"jack",count:3,total:function(d){return d.price*d.count}}],total:function(d){return d.books.reduce(function(M,g){return M+g.total},0)}},c=O(v),a.abrupt("return",{default:function(){var d=c.useState(),M=T()(d,2),g=M[0],y=M[1];return t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"\u4E66\u540D"),t.createElement("th",null,"\u4F5C\u8005"),t.createElement("th",null,"\u5355\u4EF7"),t.createElement("th",null,"\u6570\u91CF"),t.createElement("th",null,"\u5C0F\u8BA1"))),t.createElement("tbody",null,g.books.map(function(C,N){return t.createElement("tr",{key:N},t.createElement("td",null,C.name),t.createElement("td",null,C.author),t.createElement("td",null,C.price),t.createElement("td",null,t.createElement("button",{onClick:function(){return c.state.books[N].count=c.state.books[N].count-1}},"-"),C.count,t.createElement("button",{onClick:function(){return c.state.books[N].count=c.state.books[N].count+1}},"+")),t.createElement("td",null,C.total))}),t.createElement("tr",null,t.createElement("td",{colSpan:4},"\u603B\u8BA1"),t.createElement("td",null,g.total))))}});case 7:case"end":return a.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-sync-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive';

const state = {
  books:[
    {name:'\u5F20\u4E09',price:18,author:'tom',count:2,total:(book)=>book.price*book.count},
    {name:'\u674E\u56DB',price:19,author:'jack',count:3,total:(book)=>book.price*book.count}
  ],
  total:(state)=>state.books.reduce((total,book)=>total+book.total,0)
}

const store = createStore(state)

export default ()=>{
  const [state,setState] = store.useState()
  return <table>
    <thead>
      <tr>
        <th>\u4E66\u540D</th>
        <th>\u4F5C\u8005</th>
        <th>\u5355\u4EF7</th>
        <th>\u6570\u91CF</th>
        <th>\u5C0F\u8BA1</th>
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
        <td colSpan={4}>\u603B\u8BA1</td>
        <td>{state.total}</td>
        </tr>
    </tbody>
  </table>
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var F=k()(n()().mark(function O(){var v,c=arguments;return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}}}},86452:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(15101),z={}},6532:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return K}});var W=e(29008),n=e.n(W),z=e(28633),T=e.n(z),U=e(70958),k=e.n(U),t=e(92379),G=e(18395),K={"docs-reactive-render-demo-0":{component:t.memo(t.lazy(k()(n()().mark(function F(){var o,O,v,c,b,a,A,d,M,g;return n()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,92379,19));case 2:return o=C.sent,O=o.default,v=o.createContext,c=o.useContext,b=o.useState,C.next=9,Promise.resolve().then(e.bind(e,48398));case 9:return a=C.sent,A=a.Block,d=v({firstName:"Zhang",lastName:"Fisher",age:18}),M=O.memo(function(N){var P=c(d);return O.createElement(A,{name:"\u5B50\u7EC4\u4EF6:".concat(N.name)},O.createElement("span",null,"Hello :",P.firstName," ",P.lastName))}),g=0,C.abrupt("return",{default:function(){var P=b({firstName:"Zhang",lastName:"Fisher",age:18}),l=T()(P,2),s=l[0],u=l[1];return O.createElement(d.Provider,{value:s},O.createElement("div",null,"\u6839\u7EC4\u4EF6"),O.createElement("div",null,"Hello :",s.firstName," ",s.lastName),O.createElement("div",null,"Age :",s.age),O.createElement("button",{onClick:function(){u({firstName:"Zhang",lastName:"Fisher",age:++g})}},"+Age"),O.createElement(M,{name:"A"}),O.createElement(M,{name:"B"}))}});case 15:case"end":return C.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-render-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
import React,{createContext,useContext,useState} from "react"
import { Block } from "@speedform/demo-components"

const ctx = createContext({
  firstName:"Zhang",
  lastName:"Fisher",
  age:18
})

const Child = React.memo((props)=>{
    const context=useContext(ctx)
    return <Block name={\`\u5B50\u7EC4\u4EF6:\${props.name}\`}>
      <span>Hello :{context.firstName}{' '}{context.lastName}</span> 
    </Block>
})
let count:number = 0
export default ()=>{
  const [user,setUser] = useState({
    firstName:"Zhang",
    lastName:"Fisher",
    age:18
  })
  return <ctx.Provider value={user}>
      <div>\u6839\u7EC4\u4EF6</div>
      <div>Hello :{user.firstName}{' '}{user.lastName}</div>
      <div>Age :{user.age}</div>
      <button onClick={()=>{
        setUser({firstName:"Zhang",lastName:"Fisher",age:++count})
      }}>+Age</button>
      <Child name="A"/>
      <Child name="B"/>
    </ctx.Provider>
}`},react:{type:"NPM",value:"18.3.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{react:e(92379),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=k()(n()().mark(function O(){var v,c=arguments;return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}},"docs-reactive-render-demo-1":{component:t.memo(t.lazy(k()(n()().mark(function F(){var o,O,v,c,b,a,A,d,M,g,y;return n()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=N.sent,O=o.createStore,N.next=6,Promise.resolve().then(e.t.bind(e,92379,19));case 6:return v=N.sent,c=v.default,N.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return b=N.sent,a=b.Block,A={firstName:"Zhang",lastName:"Fisher",age:18},d=O(A),M=c.memo(function(P){var l=d.useState(),s=T()(l,2),u=s[0],E=s[1],S=u.firstName;return c.createElement(a,{name:"\u5B50\u7EC4\u4EF6:FirstName"},c.createElement("span",null,"Hello :",S))}),g=c.memo(function(P){var l=d.useState(),s=T()(l,2),u=s[0],E=s[1],S=u.lastName;return c.createElement(a,{name:"\u5B50\u7EC4\u4EF6:lastName"},c.createElement("span",null,"Hello :",S))}),y=0,N.abrupt("return",{default:function(){var l=d.useState(),s=T()(l,2),u=s[0],E=s[1];return c.createElement(c.Fragment,null,c.createElement("div",null,"\u6839\u7EC4\u4EF6"),c.createElement("div",null,"Hello :",u.firstName," ",u.lastName),c.createElement("div",null,"Age ",++y,":",u.age),c.createElement("button",{onClick:function(){return E(function(_){return _.age=_.age+1})}},"+Age"),c.createElement("button",{onClick:function(){return E(function(_){return _.firstName=_.firstName+"r"})}},"Change FirstName"),c.createElement(M,null),c.createElement(g,null))}});case 18:case"end":return N.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-render-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
import React,{createContext,useContext,useState} from "react"
import { Block } from "@speedform/demo-components"

const state = {
  firstName:"Zhang",
  lastName:"Fisher",
  age:18
}

const store = createStore(state)

const FirstName = React.memo((props)=>{
    const [state,setState] = store.useState()
    const {firstName} = state
    return <Block name={\`\u5B50\u7EC4\u4EF6:FirstName\`}>
      <span>Hello :{firstName}</span> 
    </Block>
})
const LastName = React.memo((props)=>{
    const [state,setState] = store.useState()
    const {lastName} = state
    return <Block name={\`\u5B50\u7EC4\u4EF6:lastName\`}>
      <span>Hello :{lastName}</span> 
    </Block>
})
let count=0
export default ()=>{ 
  const [state,setState] = store.useState()
  return <>
      <div>\u6839\u7EC4\u4EF6</div>
      <div>Hello :{state.firstName}{' '}{state.lastName}</div>
      <div>Age {++count}:{state.age}</div>
      <button onClick={()=>setState(draft=>draft.age=draft.age+1)}>+Age</button>
      <button onClick={()=>setState(draft=>draft.firstName=draft.firstName+"r")}>Change FirstName</button>
      <FirstName/>
      <LastName/>
    </>
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),react:e(92379),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=k()(n()().mark(function O(){var v,c=arguments;return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}},"docs-reactive-render-demo-2":{component:t.memo(t.lazy(k()(n()().mark(function F(){var o,O,v,c,b,a,A,d,M,g,y,C,N;return n()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=l.sent,O=o.createStore,l.next=6,Promise.resolve().then(e.t.bind(e,92379,19));case 6:return v=l.sent,c=v.default,l.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return b=l.sent,a=b.Block,l.next=14,Promise.resolve().then(e.bind(e,13834));case 14:return A=l.sent,d=A.$,M={firstName:"Zhang",lastName:"Fisher",age:18},g=O(M),y=c.memo(function(s){return c.createElement(a,{name:"\u5B50\u7EC4\u4EF6:FirstName"},c.createElement("span",null,"Hello :",g.state.firstName," ",g.state.lastName,"(\u6CA1\u6709\u4F7F\u7528Signal)"))}),C=c.memo(function(s){return c.createElement(a,{name:"\u5B50\u7EC4\u4EF6:LastName"},c.createElement("span",null,"Hello :",d(g.state.firstName)," ",g.state.lastName))}),N=0,l.abrupt("return",{default:function(){return c.createElement(c.Fragment,null,c.createElement("div",null,"\u6839\u7EC4\u4EF6"),c.createElement("div",null,"Hello :",g.state.firstName," ",g.state.lastName),c.createElement("div",null,"Age ",++N,":",d(g.state.age)),c.createElement("button",{onClick:function(){return g.state.age=g.state.age+1}},"+Age"),c.createElement("button",{onClick:function(){return g.state.firstName=g.state.firstName+"r"}},"Change FirstName"),c.createElement(y,null),c.createElement(C,null))}});case 22:case"end":return l.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-render-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
import React,{createContext,useContext,useState} from "react"
import { Block } from "@speedform/demo-components"

import { $ } from "helux"

const state = {
  firstName:"Zhang",
  lastName:"Fisher",
  age:18
}

const store = createStore(state)

const FirstName = React.memo((props)=>{
    return <Block name={\`\u5B50\u7EC4\u4EF6:FirstName\`}>
      <span>Hello :{store.state.firstName}{' '}{store.state.lastName}(\u6CA1\u6709\u4F7F\u7528Signal)</span> 
    </Block>
})
const LastName = React.memo((props)=>{
    return <Block name={\`\u5B50\u7EC4\u4EF6:LastName\`}>
      <span>Hello :{$(store.state.firstName)}{' '}{store.state.lastName}</span> 
    </Block>
})
let count=0
export default ()=>{ 

  return <>
      <div>\u6839\u7EC4\u4EF6</div>
      <div>Hello :{store.state.firstName}{' '}{store.state.lastName}</div>
      <div>Age {++count}:{$(store.state.age)}</div>
      <button onClick={()=>store.state.age=store.state.age+1}>+Age</button>
      <button onClick={()=>store.state.firstName=store.state.firstName+"r"}>Change FirstName</button>
      <FirstName/>
      <LastName/>
    </>
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},helux:{type:"NPM",value:"4.3.2"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),react:e(92379),"@speedform/demo-components":e(48398),helux:e(13834)},renderOpts:{compile:function(){var F=k()(n()().mark(function O(){var v,c=arguments;return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}}}},638:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return K}});var W=e(29008),n=e.n(W),z=e(28633),T=e.n(z),U=e(70958),k=e.n(U),t=e(92379),G=e(58578),K={"docs-reactive-state-demo-0":{component:t.memo(t.lazy(k()(n()().mark(function F(){var o,O,v,c;return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=a.sent,O=o.createStore,v={firstName:"Zhang",lastName:"Fisher",age:18},c=O(v),a.abrupt("return",{default:function(){var d=c.useState(),M=T()(d,2),g=M[0],y=M[1];return t.createElement("div",null,t.createElement("div",null,"Hello :",g.firstName," ",g.lastName),t.createElement("div",null,"Age :",g.age),t.createElement("button",{onClick:function(){return y(function(N){return N.age+=1})}},"+Age"))}});case 7:case"end":return a.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-state-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';

const state = {
  firstName:"Zhang",
  lastName:"Fisher",
  age:18
}

const store = createStore(state)

export default () => {
  const [state,setState] = store.useState() 
  return <div>
      <div>Hello :{state.firstName}{' '}{state.lastName}</div>
      <div>Age :{state.age}</div>
      <button onClick={()=>setState(state=>state.age+=1)}>+Age</button>
    </div>
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var F=k()(n()().mark(function O(){var v,c=arguments;return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}},"docs-reactive-state-demo-1":{component:t.memo(t.lazy(k()(n()().mark(function F(){var o,O,v,c,b,a,A,d;return n()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=g.sent,O=o.createStore,g.next=6,Promise.resolve().then(e.bind(e,48398));case 6:return v=g.sent,c=v.ColorBlock,b={firstName:"Zhang",lastName:"Fisher",fullName:function(C){return C.firstName+C.lastName}},a=O(b),A=t.memo(function(){var y=a.useState(function(P){return P.firstName}),C=T()(y,1),N=C[0];return t.createElement(c,{name:"FirstName",value:N})}),d=t.memo(function(){var y=a.useState(function(P){return P.lastName}),C=T()(y,1),N=C[0];return t.createElement(c,{name:"LastName",value:N})}),g.abrupt("return",{default:function(){var C=a.useState(function(_){return _.firstName},function(_,j){return _.firstName=j}),N=T()(C,2),P=N[0],l=N[1],s=a.useState(function(_){return _.fullName},function(_,j){var H=T()(j,2),Q=H[0],Y=H[1];_.firstName=Q,_.lastName=Y}),u=T()(s,2),E=u[0],S=u[1];return t.createElement("div",null,t.createElement(A,null),t.createElement(d,null),t.createElement("div",null,"FullName :",E),t.createElement("button",{onClick:function(){return l(P+"r")}},"change FirstName"),t.createElement("button",{onClick:function(){return S(["Hello","Voerkai18n"])}},"change FullName"))}});case 13:case"end":return g.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-state-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
import { ColorBlock } from "@speedform/demo-components"

const state = {
  firstName:"Zhang",
  lastName:"Fisher",
  fullName:(state)=>state.firstName+state.lastName,
}
const store = createStore(state)

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
      (state,[first,last])=>{        // \u53EF\u9009,setter
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=k()(n()().mark(function O(){var v,c=arguments;return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}},"docs-reactive-state-demo-2":{component:t.memo(t.lazy(k()(n()().mark(function F(){var o,O,v,c,b,a;return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=d.sent,O=o.createStore,d.next=6,Promise.resolve().then(e.bind(e,13834));case 6:return v=d.sent,c=v.$,b={firstName:"Zhang",lastName:"Fisher",age:18},a=O(b),d.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement("div",null,"Hello :",a.state.firstName," ",a.state.lastName),t.createElement("div",null,"Age+Signal :",c(a.state.age)),t.createElement("div",null,"Age :",a.state.age),t.createElement("button",{onClick:function(){return a.state.age=a.state.age+1}},"+Age"))}});case 11:case"end":return d.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-state-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
import { $ } from "helux"

const state = {
  firstName:"Zhang",
  lastName:"Fisher",
  age:18
}

const store = createStore(state)

export default () => {

  return <div>
      <div>Hello :{store.state.firstName}{' '}{store.state.lastName}</div>
      {/* \u5F15\u5165Signal\u673A\u5236\uFF0C\u53EF\u4EE5\u5C40\u90E8\u66F4\u65B0Age */}
      <div>Age+Signal :{$(store.state.age)}</div>
      {/* \u5F53\u76F4\u63A5\u66F4\u65B0Age\u65F6\uFF0C\u4EC5\u5728\u7EC4\u4EF6\u5F53\u91CD\u65B0\u6E32\u67D3\u65F6\u66F4\u65B0 */}
      <div>Age :{store.state.age}</div>
      <button onClick={()=>store.state.age=store.state.age+1}>+Age</button>
    </div>
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},helux:{type:"NPM",value:"4.3.2"}},entry:"index.tsx",description:"\u901A\u8FC7store.state.firstName\u76F4\u63A5\u8BFB\u53D6\u72B6\u6001,\u4E0D\u901A\u8FC7useState\u65B9\u6CD5",title:"\u8BFB\u53D6\u72B6\u6001"},context:{"@speedform/reactive":e(1808),helux:e(13834)},renderOpts:{compile:function(){var F=k()(n()().mark(function O(){var v,c=arguments;return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}}}},72244:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(14989),z={}},37374:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(91352),z={}},41015:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return K}});var W=e(29008),n=e.n(W),z=e(28633),T=e.n(z),U=e(70958),k=e.n(U),t=e(92379),G=e(67690),K={"docs-reactive-watch-objects-demo-0":{component:t.memo(t.lazy(k()(n()().mark(function F(){var o,O,v,c,b,a,A,d,M;return n()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return A=function(N){return v(function(P,l){var s=l.state;return s.price*P},function(P){return P[P.length-1]==="count"},{initial:2,group:N})},y.next=3,Promise.resolve().then(e.bind(e,1808));case 3:return o=y.sent,O=o.createStore,v=o.watch,y.next=8,Promise.resolve().then(e.bind(e,48398));case 8:return c=y.sent,b=c.ColorBlock,a=c.Divider,d={bookName:"zhang",price:2,count:1,total1:A("a"),total2:A("a"),total3:A("b"),total4:A("b"),total5:A("b")},M=O({state:d}),globalThis.Store=M,y.abrupt("return",{default:function(){var N=M.useState(),P=T()(N,2),l=P[0],s=P[1];return typeof l.total1=="function"&&console.warn("state.total1 is function"),t.createElement("div",null,t.createElement("div",null,"bookName=",l.bookName),t.createElement("div",null,"price=",l.price),t.createElement("div",null,"count=",t.createElement("button",{onClick:function(){return s(function(E){return E.count=E.count-1})}},"-"),t.createElement("input",{value:l.count,onChange:M.sync(function(u){return u.count})}),t.createElement("button",{onClick:function(){return s(function(E){return E.count=E.count+1})}},"+")),t.createElement(a,{name:"A Group"}),t.createElement(b,{name:"Total-1",value:l.total1}),t.createElement(b,{name:"Total-2",value:l.total2}),t.createElement("button",{onClick:function(){return M.watchObjects.enableGroup("a",!0)}},"Enable A Group"),t.createElement("button",{onClick:function(){return M.watchObjects.enableGroup("a",!1)}},"Disable A Group"),t.createElement("div",null,"\u5F53\u7981\u7528A Group\u65F6\uFF0C\u4FEE\u6539count\u65F6\u4E0D\u4F1A\u5BFC\u81F4total\u53D8\u5316\uFF0C\u56E0\u4E3A\u8BE5\u7EC4\u88AB\u7981\u6B62\u6267\u884C\u4E86"),t.createElement(a,{name:"B Group"}),t.createElement(b,{name:"Total-3",value:l.total3}),t.createElement(b,{name:"Total-4",value:l.total4}),t.createElement(b,{name:"Total-5",value:l.total5}),t.createElement("button",{onClick:function(){return M.watchObjects.enableGroup("b",!0)}},"Enable B Group"),t.createElement("button",{onClick:function(){return M.watchObjects.enableGroup("b",!1)}},"Disable B Group"))}});case 15:case"end":return y.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-objects-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,watch } from "@speedform/reactive" 
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
      <div>\u5F53\u7981\u7528A Group\u65F6\uFF0C\u4FEE\u6539count\u65F6\u4E0D\u4F1A\u5BFC\u81F4total\u53D8\u5316\uFF0C\u56E0\u4E3A\u8BE5\u7EC4\u88AB\u7981\u6B62\u6267\u884C\u4E86</div>
      <Divider name="B Group"/>
      <ColorBlock name="Total-3" value={state.total3}/>
      <ColorBlock name="Total-4" value={state.total4}/>
      <ColorBlock name="Total-5" value={state.total5}/>      
      <button onClick={()=>store.watchObjects.enableGroup("b",true)}>Enable B Group</button>
      <button onClick={()=>store.watchObjects.enableGroup("b",false)}>Disable B Group</button>
    </div>)
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=k()(n()().mark(function O(){var v,c=arguments;return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}}}},33354:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(3466),z={}},6732:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return K}});var W=e(29008),n=e.n(W),z=e(28633),T=e.n(z),U=e(70958),k=e.n(U),t=e(92379),G=e(77044),K={"docs-reactive-watch-demo-0":{component:t.memo(t.lazy(k()(n()().mark(function F(){var o,O,v,c,b;return n()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=A.sent,O=o.createStore,v=o.watch,c={orders:[{bookName:"SpeedForm Quick-Start",price:100,count:1,total:function(M){return M.price*M.count}},{bookName:"Helux",price:98,count:1,total:function(M){return M.price*M.count}}],total:v(function(d){return b.state.orders.reduce(function(M,g){return M+g.count*g.price},0)},function(d){return d[d.length-1]==="count"},{initial:198})},b=O({state:c},{singleton:!1}),A.abrupt("return",{default:function(){var M=b.useState(),g=T()(M,1),y=g[0];return t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"BookName"),t.createElement("th",null,"Price"),t.createElement("th",null,"Count"),t.createElement("th",null,"Total"))),t.createElement("tbody",null,y.orders.map(function(C,N){return t.createElement("tr",{key:N},t.createElement("td",null,C.bookName),t.createElement("td",null,C.price),t.createElement("td",null,t.createElement("input",{value:C.count,onChange:b.sync(function(P){return P.orders[N].count})})),t.createElement("td",null,C.total))}),t.createElement("tr",null,t.createElement("td",{colSpan:3},"Total"),t.createElement("td",null,y.total))))}});case 8:case"end":return A.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,watch } from '@speedform/reactive';
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
  // \u5F53price\u6216count\u53D8\u5316\u65F6\uFF0C\u89E6\u53D1\u4FA6\u542C\u5668\u51FD\u6570\u7684\u6267\u884C
  (path:string[])=>{
      return path[path.length-1]==='count'
    },{    
    initial:198         // total\u7684\u521D\u59CB\u503C
  })
}

const store = createStore({state:book},{singleton:false})
 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var F=k()(n()().mark(function O(){var v,c=arguments;return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}},"docs-reactive-watch-demo-1":{component:t.memo(t.lazy(k()(n()().mark(function F(){var o,O,v,c,b,a,A,d,M;return n()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=y.sent,O=o.createStore,v=o.computed,c=o.ComputedScopeRef,y.next=8,Promise.resolve().then(e.t.bind(e,92379,19));case 8:return b=y.sent,a=b.useEffect,A=b.useState,d={user:{firstName:"zhang",lastName:"fisher",fullName:v(function(){var C=k()(n()().mark(function N(P){var l,s,u;return n()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return l=T()(P,2),s=l[0],u=l[1],S.abrupt("return",s+u);case 2:case"end":return S.stop()}},N)}));return function(N){return C.apply(this,arguments)}}(),["user/firstName","user/lastName"],{scope:c.Depends})}},M=O({state:d}),y.abrupt("return",{default:function(){var N=M.useState(),P=T()(N,1),l=P[0],s=A(""),u=T()(s,2),E=u[0],S=u[1];return a(function(){var _=M.watch(function(j){S(j.map(function(H){return H.join("/")}).join(","))},["user/firstName","user/lastName"]);return _},[]),t.createElement("div",null,t.createElement("div",null,"watch: ",E),t.createElement("div",null,"firstName=",t.createElement("input",{value:l.user.firstName,onChange:M.sync(function(_){return _.user.firstName})})),t.createElement("div",null,"lastName=",t.createElement("input",{value:l.user.lastName,onChange:M.sync(function(_){return _.user.lastName})})),t.createElement("div",null,"fullName=",l.user.fullName.result))}});case 14:case"end":return y.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef } from "@speedform/reactive" 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),react:e(92379)},renderOpts:{compile:function(){var F=k()(n()().mark(function O(){var v,c=arguments;return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}},"docs-reactive-watch-demo-2":{component:t.memo(t.lazy(k()(n()().mark(function F(){var o,O,v,c,b,a,A,d;return n()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return o=g.sent,O=o.createStore,v=o.computed,c=o.ComputedScopeRef,g.next=8,Promise.resolve().then(e.t.bind(e,92379,19));case 8:return b=g.sent,a=b.useState,A={user:{firstName:"zhang",lastName:"fisher",fullName:v(function(){var y=k()(n()().mark(function C(N){var P,l,s;return n()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return P=T()(N,2),l=P[0],s=P[1],E.abrupt("return",l+s);case 2:case"end":return E.stop()}},C)}));return function(C){return y.apply(this,arguments)}}(),["user/firstName","user/lastName"],{scope:c.Depends})}},d=O({state:A}),g.abrupt("return",{default:function(){var C=d.useState(),N=T()(C,1),P=N[0],l=a(""),s=T()(l,2),u=s[0],E=s[1],S=a("user/firstName"),_=T()(S,2),j=_[0],H=_[1],Q=a(""),Y=T()(Q,2),re=Y[0],oe=Y[1];return d.useWatch(function(le,ne){return E(ne.join("/")),oe(le),le},j,{id:"use1"}),t.createElement("div",null,t.createElement("div",null,"watch for: ",j),t.createElement("div",null,"Watch value:",re),t.createElement("div",null,"firstName=",t.createElement("input",{value:P.user.firstName,onChange:d.sync(function(le){return le.user.firstName})})),t.createElement("div",null,"lastName=",t.createElement("input",{value:P.user.lastName,onChange:d.sync(function(le){return le.user.lastName})})),t.createElement("div",null,"fullName=",P.user.fullName.result),t.createElement("button",{onClick:function(){return H("user/firstName")}},"watch firstName"),t.createElement("button",{onClick:function(){return H("user/lastName")}},"watch lastName"))}});case 13:case"end":return g.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef } from "@speedform/reactive" 
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
  const [watchPath,setWatchPath]=useState("user/firstName")
  const [watchValue,setWatchValue]=useState("")

  store.useWatch((value,path)=>{
      setWatchKey(path.join("/"))
      setWatchValue(value)
      return value
  },watchPath,{id:"use1"}) 



  return  (<div>
      <div>watch for: {watchPath}</div>
      <div>Watch value:{watchValue}</div>
      <div>firstName=<input value={state.user.firstName} onChange={store.sync(to=>to.user.firstName)}/></div>
      <div>lastName=<input value={state.user.lastName} onChange={store.sync(to=>to.user.lastName)}/></div>
      <div>fullName={state.user.fullName.result}</div> 
      <button onClick={()=>setWatchPath("user/firstName")}>watch firstName</button>
      <button onClick={()=>setWatchPath("user/lastName")}>watch lastName</button>      
    </div>)
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),react:e(92379)},renderOpts:{compile:function(){var F=k()(n()().mark(function O(){var v,c=arguments;return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(408).then(e.bind(e,28408));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,c));case 3:case"end":return a.stop()}},O)}));function o(){return F.apply(this,arguments)}return o}()}}}},24394:function(Z,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(92379),n=e(25773),z={}},21970:function(Z,m,e){e.r(m),e.d(m,{api:function(){return W},delay:function(){return K},forms:function(){return n}});var W={};e.r(W),e.d(W,{getProjects:function(){return t}});var n={};e.r(n),e.d(n,{Network:function(){return b},schema:function(){return c}});var z=e(29008),T=e.n(z),U=e(70958),k=e.n(U);function t(a){return G.apply(this,arguments)}function G(){return G=k()(T()().mark(function a(A){var d,M,g;return T()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,fetch(A);case 2:if(d=C.sent,!d.ok){C.next=11;break}return C.next=6,d.json();case 6:return M=C.sent,g=M.map(function(N){return{name:N.name,url:N.html_url,description:N.description,stars:N.stargazers_count}}),C.abrupt("return",g);case 11:throw new Error("".concat(d.status," - ").concat(d.statusText));case 12:case"end":return C.stop()}},a)})),G.apply(this,arguments)}var K=function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(d){setTimeout(d,A)})},F=e(1808),o=e(6244),O=e(99166),v=e.n(O),c={title:"\u7F51\u7EDC\u914D\u7F6E",fields:{title:{value:"React-Helux-Form",placeholder:"\u8F93\u5165\u7F51\u7EDC\u914D\u7F6E\u540D\u79F0",title:"\u7F51\u7EDC\u540D\u79F0",validate:function(A){return A.length>3}},interface:{value:"wifi",title:"\u7F51\u5361\u7C7B\u578B",select:function(){return[{value:"wifi",title:"\u65E0\u7EBF\u7F51\u5361"},{value:"ethernet",title:"\u6709\u7EBF\u7F51\u5361"}]}},ip:{value:"1.1.1.1",title:"IP\u5730\u5740",validate:(0,F.computed)(function(){var a=k()(T()().mark(function A(d){return T()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,K(2e3);case 2:return g.abrupt("return",v().isIP(String(d)));case 3:case"end":return g.stop()}},A)}));return function(A){return a.apply(this,arguments)}}(),[],{async:!0})},gateway:{value:"1.1.1.1",title:"\u7F51\u5173\u5730\u5740",validate:function(A){return v().isIP(A)}},dhcp:{enable:{title:"\u81EA\u52A8\u83B7\u53D6IP\u5730\u5740",value:!0},start:{title:"\u8D77\u59CB\u5730\u5740",value:"192.168.1.1",enable:(0,F.computed)(function(a){return a.enable.value},{scope:F.ComputedScopeRef.Parent}),validate:function(A){return v().isIP(A)}},end:{title:"\u7ED3\u675F\u5730\u5740",value:"192.168.1.100",enable:(0,F.computed)(function(a){return a.dhcp.enable.value},{scope:F.ComputedScopeRef.Root}),validate:function(A){return v().isIP(A)}}},wifi:{title:"\u65E0\u7EBF\u914D\u7F6E",visible:(0,F.computed)(function(a){return a.interface.value==="wifi"},{scope:F.ComputedScopeRef.Root}),ssid:{value:"fast",placeholder:"\u65E0\u7EBF\u7F51\u7EDC",validate:function(A){return A.length>3}},password:{value:"123",placeholder:"\u8F93\u5165\u65E0\u7EBF\u5BC6\u7801",help:"\u5BC6\u7801\u957F\u5EA6\u5E94\u4E0D\u5C0F\u4E8E6\u4F4D",enable:function(A){return A.interface.value==="wifi"},validate:function(A){return A.length>=6}}}}},b=(0,o.createForm)(c,{debug:!0});globalThis.Network=b},48398:function(Z,m,e){e.r(m),e.d(m,{Block:function(){return M},Box:function(){return z},Button:function(){return k},Card:function(){return t},Col:function(){return g},ColorBlock:function(){return d},Divider:function(){return b},Field:function(){return c},Input:function(){return C},JsonViewer:function(){return O},Loading:function(){return U},Row:function(){return y},Tips:function(){return N},ValidResult:function(){return v}});var W=e(92379),n=e(651),z=function(l){var s=l.title,u=l.enable,E=u===void 0?!0:u,S=l.visible,_=S===void 0?!0:S;return(0,n.jsxs)("div",{style:{display:_?"flex":"none",position:"relative",flexDirection:"column",padding:"8px",margin:"16px 4px 4px 4px",boxSizing:"border-box",border:"1px solid #bbb"},children:[(0,n.jsx)("span",{style:{position:"absolute",padding:"2px 4px 2px 4px",top:"-16px",background:"white",left:"8px",color:E?"#bbb":"gray"},children:s||""}),l.children]})},T=e(11363),U=function(l){var s=l.size,u=s===void 0?20:s,E=l.visible,S=E===void 0?!0:E,_=l.color,j=l.tips,H=j===void 0?"loading...":j;return(0,n.jsx)("span",{title:H,style:{display:S?"inline-block":"none",cursor:"pointer",padding:"2px"},children:(0,n.jsx)(T.Z1,{width:u,height:u,color:_})})},k=function(l){var s=l.visible,u=s===void 0?!0:s,E=l.loading,S=l.timeout,_=S===void 0?0:S,j=l.progress,H=j===void 0?0:j,Q=l.cancel,Y=l.onClick,re=(0,W.useRef)(null);return(0,W.useEffect)(function(){re.current&&(re.current.style.display=u?"flex":"none")}),(0,n.jsxs)("div",{ref:re,className:"speed-button",onClick:Y,style:{padding:"8px",margin:"4px",cursor:"pointer",display:u?"flex":"none",flexDirection:"row",borderRadius:"6px",alignItems:"center",border:"1px solid #bbb",background:"#eee",textAlign:"center"},children:[E?(0,n.jsx)(U,{}):null,(0,n.jsx)("div",{style:{flexGrow:1,backgroundColor:"transparent"},children:l.children}),_>0?(0,n.jsx)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:_}):"",H>0?(0,n.jsxs)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:[H,"%"]}):"",l.error?(0,n.jsx)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:l.error}):"",l.loading&&typeof Q=="function"?(0,n.jsx)("button",{onClick:Q,style:{padding:"4px",color:"red",margin:"2px",fontSize:"10px",backgroundColor:"#eee",borderRadius:"4px",cursor:"pointer"},children:" \u5355\u51FB\u53D6\u6D88"}):""]})},t=function(l){var s=l.title,u=l.enable,E=u===void 0?!0:u,S=l.visible,_=S===void 0?!0:S,j=l.buttons,H=j===void 0?[]:j,Q=Array.isArray(l.children)?l.children:[l.children];return(0,n.jsxs)("div",{className:"card",style:{border:"1px solid #ccc",background:E?"white":"gray",margin:"8px",display:_?"flex":"none",flexDirection:"column"},children:[(0,n.jsxs)("div",{className:"header",style:{display:"flex",flexDirection:"row",backgroundColor:"#eee",padding:"6px",lineHeight:"150%"},children:[(0,n.jsx)("span",{style:{flexGrow:1,color:E?"#222":"gray"},children:s}),(0,n.jsx)("span",{style:{},children:H.map(function(Y,re){return(0,n.jsx)("span",{className:"button",style:{padding:"4px",margin:"4px",cursor:"pointer"},onClick:Y.onClick,children:Y.title},re)})})]}),(0,n.jsx)("div",{style:{padding:"12px"},children:Q.map(function(Y,re){return Q.length>1&&re==Q.length-1&&Y.classList&&Y.classList.contains("footer")?(0,n.jsx)("div",{className:"footer",style:{borderTop:"1px solid #ccc",padding:"8px"},children:Y}):Y})})]})},G=e(24325),K=e.n(G),F=e(82719),o={scheme:"monokai",author:"wimer hazenberg (http://www.monokai.nl)",base00:"white",base01:"#383830",base02:"#49483e",base03:"#75715e",base04:"#a59f85",base05:"#f8f8f2",base06:"#f5f4f1",base07:"#f9f8f5",base08:"#f92672",base09:"#fd971f",base0A:"#f4bf75",base0B:"#444444",base0C:"#a1efe4",base0D:"#018ba7",base0E:"#81a9ff",base0F:"#cc6633"},O=function(l){return(0,n.jsx)(F.L,K()(K()({getItemString:function(){return""},hideRoot:!0,shouldExpandNodeInitially:function(){return!0}},l),{},{theme:o}))},v=function(l){var s=l.validate,u=l.help;if(s!=null){var E=typeof s!="boolean",S=E?s==null?void 0:s.result:s,_=E?s==null?void 0:s.loading:!1,j=E?s==null?void 0:s.error:u;return(0,n.jsxs)("span",{style:{color:"red",display:_||!S?"flex":"none"},children:[(0,n.jsx)(U,{visible:_,tips:"\u6B63\u5728\u9A8C\u8BC1..."}),!_&&(S?"":j)]})}},c=function(l){var s=l.enable,u=s===void 0?!0:s,E=l.visible,S=E===void 0?!0:E,_=l.label,j=_===void 0?"":_,H=l.children,Q=H===void 0?"":H,Y=l.memo;return(0,n.jsxs)("div",{className:"field",style:{position:"relative",display:S===!1?"none":"flex",boxSizing:"border-box",flexDirection:"row",width:"100%",alignItems:"center",padding:"8px"},children:[(0,n.jsxs)("label",{className:"field-label",style:{minWidth:"160px",fontWeight:"bold",color:u===!1?"gray":"inherit"},children:[j,":"]}),(0,n.jsxs)("span",{className:"field-value",style:{flexGrow:1,display:"flex",flexDirection:"row",alignItems:"center",color:u===!1?"gray":"inherit"},children:[typeof Q=="function"?"":Q,Y&&(0,n.jsx)("span",{style:{color:"gray"},children:Y})]}),(0,n.jsx)(v,K()({},l))]})},b=function(l){var s=l.title,u=l.visible,E=u===void 0?!0:u;return(0,n.jsx)("div",{style:{height:"36px",borderBottom:"1px solid #eee",marginBottom:"16px",display:E?"flex":"none"},children:(0,n.jsx)("h4",{style:{position:"absolute",background:"white",padding:"4px",color:"#bbb"},children:s})})},a=e(47851);function A(){var P="".concat(Math.floor(Math.random()*16777215).toString(16));return"#".concat(P.padStart(6,"0"))}var d=W.memo(function(P){var l=(0,W.useRef)(0),s=P.name,u=P.value,E=u===void 0?"":u,S=A(),_="block";return a.rgb(S).isDark()?_="white":_="block",(0,W.useEffect)(function(){l.current++}),(0,n.jsxs)("div",K()(K()({},P),{},{style:K()(K()({backgroundColor:S,padding:"4px",color:_,display:"flex"},P.style),{},{alignItems:"center"}),children:[(0,n.jsxs)("span",{style:{flexGrow:1},children:[s?(0,n.jsxs)("span",{style:{padding:"2px"},children:[s,"="]}):"",(0,n.jsxs)("span",{style:{padding:"2px"},children:[String(E),P.children]})]}),(0,n.jsx)("span",{style:{fontSize:"8px"},children:l.current})]}))},function(P,l){return P.name===l.name&&P.value===l.value}),M=function(l){var s=(0,W.useRef)(0),u=l.name,E=l.value,S=E===void 0?"":E,_=A(),j="block";return a.rgb(_).isDark()?j="white":j="block",(0,W.useEffect)(function(){s.current++}),(0,n.jsxs)("div",K()(K()({},l),{},{style:K()(K()({backgroundColor:_,padding:"4px",color:j,display:"flex"},l.style),{},{alignItems:"center"}),children:[(0,n.jsxs)("span",{style:{flexGrow:1},children:[u?(0,n.jsxs)("span",{style:{padding:"2px"},children:[u,"="]}):"",(0,n.jsxs)("span",{style:{padding:"2px"},children:[String(S),l.children]})]}),(0,n.jsx)("span",{style:{fontSize:"8px"},children:s.current})]}))},g=function(l){var s=l.visible,u=s===void 0?!0:s,E=l.border,S=E===void 0?!0:E,_=l.padding,j=_===void 0?"8px":_,H=l.margin,Q=H===void 0?"0px":H,Y=l.grow,re=Y===void 0?1:Y;return(0,n.jsx)("div",{className:"layout-col",style:{display:u?"flex":"none",position:"relative",flexDirection:"column",padding:j,flexGrow:re,margin:Q,boxSizing:"border-box",border:S?"1px solid #eee":"none"},children:l.children})},y=function(l){var s=l.visible,u=s===void 0?!0:s,E=l.border,S=E===void 0?!0:E,_=l.padding,j=_===void 0?"8px":_,H=l.grow,Q=H===void 0?1:H;return(0,n.jsx)("div",{className:"layout-row",style:{display:u?"flex":"none",position:"relative",flexDirection:"row",flexGrow:Q,padding:j,margin:"4px",boxSizing:"border-box",border:S?"1px solid #eee":"none"},children:l.children})},C=function(l){var s=l.name,u=l.enable,E=u===void 0?!0:u,S=l.type,_=S===void 0?"text":S,j=l.validate,H=j===void 0?!0:j,Q=l.visible,Y=Q===void 0?!0:Q,re=l.placeholder,oe=l.onChange,le=oe===void 0?function(){}:oe,ne=l.value,ye=l.style;return(0,n.jsx)("input",{style:Object.assign({border:H===!1?"1px solid red":"1px solid #bbb",borderRadius:"4px",background:E?"white":"gray",margin:"4px",padding:"8px",display:Y?"block":"none"},ye),type:_,name:s,placeholder:re,value:ne!=null?ne:"",readOnly:!E,onChange:le})},N=function(l){var s=l.text,u=l.color,E=u===void 0?"#ff6c00":u,S=typeof E=="string"?{default:E}:Object.assign({default:""},E),_=s.replace(/\{\s?(.*?)\s?\}/gm,function(j,H){return"<span style='color: ".concat(H in S?S[H]:S.default,"'>").concat(H,"</span>")}).replaceAll("undefined","\u7A7A\u503C");return(0,n.jsx)("div",{style:{backgroundColor:"#fffcda",borderLeft:"2px solid rgb(253, 138, 6)",boxSizing:"border-box",padding:"8px",margin:"4px"},children:(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:_}})})}},6244:function(Z,m,e){e.r(m),e.d(m,{$:function(){return s.$},ActionChildren:function(){return Oe},ComputedObjects:function(){return s.ComputedObjects},ComputedScopeRef:function(){return s.ComputedScopeRef},FieldChildren:function(){return j},OBJECT_PATH_DELIMITER:function(){return s.OBJECT_PATH_DELIMITER},SKIP_COMPUTED:function(){return s.SKIP_COMPUTED},ValidationError:function(){return Ae},WatchObject:function(){return s.WatchObject},WatchObjects:function(){return s.WatchObjects},action:function(){return be},asyncComputedObject:function(){return s.asyncComputedObject},computed:function(){return s.computed},createActionComponent:function(){return Ie},createAsyncComputedMutate:function(){return s.createAsyncComputedMutate},createComputedMutate:function(){return s.createComputedMutate},createFieldComponent:function(){return H},createFieldGroupComponent:function(){return oe},createForm:function(){return i},createObject:function(){return s.createObject},createStore:function(){return s.createStore},createUseAction:function(){return Pe},createUseWatch:function(){return s.createUseWatch},createWatch:function(){return s.createWatch},defaultFormProps:function(){return et},getAction:function(){return De},getSnap:function(){return s.getSnap},getVal:function(){return s.getVal},getValueByPath:function(){return s.getValueByPath},installComputed:function(){return s.installComputed},installWatch:function(){return s.installWatch},isIncludePath:function(){return s.isIncludePath},isSkipComputed:function(){return s.isSkipComputed},markRaw:function(){return s.markRaw},setAsyncComputedObject:function(){return s.setAsyncComputedObject},setVal:function(){return s.setVal},skipComputed:function(){return s.skipComputed},submit:function(){return lt},useLatest:function(){return h},useStore:function(){return s.useStore},useUnmount:function(){return w},useUnmountedRef:function(){return B},watch:function(){return s.watch}});var W=e(12027),n=e.n(W),z=e(28633),T=e.n(z),U=e(24325),k=e.n(U),t=e(92379),G=e(34180),K=e.n(G),F=e(59166);function o(r){var f=_typeof(r);return r==null||f=="boolean"||f=="number"||f=="string"||f==null}function O(r){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,x=0,R,D=!0,$=function L(){if(R==null){D=!0,clearTimeout(x),x=0;return}try{var V=R;R=void 0,r.apply(void 0,n()(V)),x=setTimeout(function(){return L()},f)}finally{}};return function(){for(var L=arguments.length,V=new Array(L),J=0;J<L;J++)V[J]=arguments[J];if(f==0)return r.apply(void 0,V);R=V,(D||x==0)&&(D=!1,$())}}function v(r,f){var x={};for(var R in r)r[R]!==f[R]&&(x[R]=f[R]);return x}function c(){return Math.random().toString(36).substring(2)}function b(r){return new Proxy({},{get:function(x,R,D){return r()[R]}})}function a(r){return(0,F.P)(r)&&"execute"in r&&(0,F.P)(r.execute)&&"loading"in r.execute}function A(r){return(0,F.P)(r)&&"value"in r}function d(r){return Array.isArray(r)}function M(r){return(0,F.P)(r)&&!A(r)&&!a(r)}function g(){return!1}var y="fields",C="actions",N="validate",P="$submit",l="$reset",s=e(1808),u=e(651);function E(r,f,x,R){return Object.assign({name:r,help:"",initial:void 0,oldValue:void 0,visible:!0,required:!1,readonly:!1,validate:null,enable:!0,placeholder:""},k()(k()({},f),{},{sync:x,update:R}))}function S(r,f){var x=(0,t.useRef)(null);return(0,t.useCallback)(function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;if(x.current==null){var D=r.sync(f);x.current=R==0?D:O(D,R)}return x.current},[])}function _(r,f){var x=(0,t.useRef)(null),R=(0,t.useState)(0),D=T()(R,2),$=D[0],L=D[1];return(0,t.useCallback)(function(V,J){var X=Object.assign({debounce:0},J),ee=X.debounce;if(x.current==null||$!==ee){$!==ee&&ee>0&&L(ee);var q=function(ue){return function(te){f(typeof ue=="function"?function(se){return ue.call(se,se.fields)}:function(se){return(0,s.setVal)(se,r,ue)}),typeof te.preventDefault=="function"&&te.preventDefault()}};x.current=ee>0?q:O(q,ee)}return x.current(V)},[])}var j=t.memo(function(r){return(0,u.jsx)(u.Fragment,{children:typeof r.children=="function"&&r.children(r.fieldProps)})},function(r,f){return Object.entries(r.fieldProps).every(function(x){var R=T()(x,2),D=R[0],$=R[1];return["children","sync","update"].includes(D)?!0:$===f.fieldProps[D]})});function H(r,f){return t.memo(function(x){var R=x.name,D=Array.isArray(R)?R:R.split("."),$=[y].concat(n()(D)),L=[y].concat(n()(D));D.push("value"),L.push("value");var V=r.useState(function(te){return(0,s.getVal)(te,$)}),J=T()(V,2),X=J[0],ee=J[1],q=_(L,ee),ae=S(r,L),ue=E(f.getFieldName(D),X,ae,q);return x.render?(0,u.jsx)(j,{fieldProps:ue,children:x.render}):Array.isArray(x.children)?x.children.map(function(te,se){return(0,u.jsx)(j,{fieldProps:ue,children:te},se)}):(0,u.jsx)(j,{fieldProps:ue,children:x.children})},function(x,R){return x.name===R.name})}var Q=e(58048);function Y(r,f){return(0,t.useCallback)(function(x){f(function(R){x.call(R,(0,s.getVal)(R,r))})},[])}function re(r,f,x){return(0,Q.w)({name:r,help:"",visible:!0,required:!1,readonly:!1,validate:!0,enable:!0,update:x},f)}function oe(r,f){return t.memo(function(x){var R=x.name,D=r.useState(),$=T()(D,2),L=$[0],V=$[1],J=Array.isArray(R)?R:R.split("."),X=["fields"].concat(n()(J)),ee=(0,s.getVal)(L,X),q=Y(X,V),ae=(0,t.useState)(function(){return re(f.getFieldName(J),ee,q)}),ue=T()(ae,2),te=ue[0],se=ue[1];return(0,t.useEffect)(function(){se(re(f.getFieldName(J),ee,q))},[ee]),Array.isArray(x.children)?x.children.map(function(Be){return Be(te)}):x.children(te)},function(x,R){return x.name===R.name})}var le=e(29008),ne=e.n(le),ye=e(70958),de=e.n(ye),rt=e(6597);function pe(r){return r.value}function Re(r){var f={};return Object.entries(r).forEach(function(x){var R=T()(x,2),D=R[0],$=R[1];if(typeof D=="string")if(A($))f[D]=pe($);else if(M($)){var L=Re($);L&&Object.keys(L).length>0&&(f[D]=L)}else d($)&&(f[D]=me($))}),f}function me(r){var f=[];return r.forEach(function(x){A(x)?f.push(pe(x)):M(x)?f.push(Re(x)):d(x)?f.push(me(x)):f.push(x)}),f}function ie(r,f,x){var R=Object.assign({},x),D=R.onNotMatch,$=D===void 0?function(){}:D;function L(V,J){var X=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];Object.entries(V).forEach(function(ee){var q=T()(ee,2),ae=q[0],ue=q[1];if(typeof ae=="string"){var te=[].concat(n()(X),[ae]);if(ae in J){var se=J[ae];A(se)?se.value=ue:M(se)?(0,F.P)(ue)?L(ue,se,te):$(te):d(se)?Array.isArray(ue)?L(ue,se):$(te):J[ae]=ue}else $(te)}})}L(r,f)}function Ot(r,f){var x=new FormData,R=Object.assign({getItemName:function(V){return V.join(".")}},f),D=R.getItemName;function $(L,V){if(V!=null){var J=D?D(L):L.join(".");Array.isArray(V)?V.forEach(function(X,ee){$([].concat(_toConsumableArray(L),[String(ee)]),X)}):isPlainObject(V)?Object.entries(V).forEach(function(X){var ee=_slicedToArray(X,2),q=ee[0],ae=ee[1];$([].concat(_toConsumableArray(L),[q]),ae)}):x.append(J,V)}}return $([],r),x}function ot(r,f){return function(R,D){var $=Object.assign({validate:!0},D);try{r.enableComputed(!1),ie(R,r.state.fields),r.setState(function(L){L.dirty=!1,L.validate=null})}catch(L){console.error(L)}finally{r.enableComputed(!0),$!=null&&$.validate&&r.computedObjects.runGroup(N)}}}function Ke(r,f){return Re(r)}function ge(r,f){return function(R){var D=Object.assign({},R);return Ke((0,s.getSnap)(r.state).fields)}}function De(r,f){return function(){var x=de()(ne()().mark(function R(D){var $;return ne()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return $=Object.assign({},f,D),Array.isArray($.scope)&&$.scope.length>0&&$.scope[0]!==y&&$.scope.unshift(y),V.next=4,r.execute.run($);case 4:if(!r.execute.error){V.next=8;break}throw new Error(r.execute.error);case 8:return V.abrupt("return",r.execute.result);case 9:case"end":return V.stop()}},R)}));return function(R){return x.apply(this,arguments)}}()}function Me(r,f){return(0,t.useCallback)(function(x){var R=Object.assign({},{noReentry:!0,preventDefault:!0},f,x),D=De(r,R);return function($){D(),$&&R.preventDefault&&typeof $.preventDefault=="function"&&$.preventDefault()}},[r])}function ut(r,f){return(0,t.useCallback)(function(x){var R=(0,s.getValueByPath)(r,[].concat(n()(Array.isArray(f)?f:f.split(".")),["execute"]));R.cancel(),x&&typeof x.preventDefault=="function"&&x.preventDefault()},[])}function je(r,f,x,R){return Object.assign({help:"",title:"",visible:!0,enable:!0},(0,rt.C)(r,"execute"),k()(k()({},r.execute),{},{run:f,cancel:x,ref:R}))}var Oe=t.memo(function(r){return(0,u.jsx)(u.Fragment,{children:typeof r.children=="function"&&r.children(r.actionProps)})},function(r,f){return Object.entries(r.actionProps).every(function(x){var R=T()(x,2),D=R[0],$=R[1];return["children","run","cancel"].includes(D)?!0:$===f.actionProps[D]})});function Ie(r){function f(x){var R=r.useState(),D=T()(R,1),$=D[0],L=x.name;L.includes(".")||(L="actions.".concat(L));var V=(0,s.getValueByPath)($,L,".");if(V==null)return r.options.log("Action ".concat(L," is not defined"),"error"),(0,u.jsx)(u.Fragment,{children:x.children});var J=Me(V,x),X=ut($,L),ee=(0,t.useRef)(null),q=je(V,J,X,ee);if(typeof x.render=="function")return(0,u.jsx)(Oe,{actionProps:q,children:x.render});if(x.children)return Array.isArray(x.children)?x.children.map(function(ae,ue){return(0,u.jsx)(Oe,{actionProps:q,children:ae},ue)}):(0,u.jsx)(Oe,{actionProps:q,children:x.children})}return t.memo(f,function(x,R){return x.name===R.name})}function be(r,f){return(0,s.computed)(function(){var x=de()(ne()().mark(function R(D,$){var L;return ne()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return L=Ke(Object.assign({},D)),J.next=3,r(L,$);case 3:return J.abrupt("return",J.sent);case 4:case"end":return J.stop()}},R)}));return function(R,D){return x.apply(this,arguments)}}(),[],f)}function lt(r,f){return be(function(){var x=de()(ne()().mark(function R(D,$){var L;return ne()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return L=new FormData,J.next=3,r(L,$);case 3:return J.abrupt("return",J.sent);case 4:case"end":return J.stop()}},R)}));return function(R,D){return x.apply(this,arguments)}}(),f)}function Pe(r){return function(x,R){var D=(0,t.useRef)(),$=r.useState(),L=T()($,2),V=L[0],J=L[1],X=(0,t.useState)(function(){return R!=null&&R.name?R==null?void 0:R.name:c()}),ee=T()(X,1),q=ee[0];return D.current||(q in V.actions||J(function(ae){ae.actions[q]={execute:be(x,R)}}),D.current=q),(0,s.getValueByPath)(V,["actions",q]).execute}}var dt=e(20842),Ee=e(14582),st=e.n(Ee),ct=e(6270),it=e.n(ct),pt=e(93949),mt=e.n(pt),Fe=e(77701),vt=e.n(Fe),$e=e(28249),It=e.n($e),Ue=e(5672),we=e.n(Ue),Ae=function(r){vt()(x,r);var f=It()(x);function x(R){var D;return mt()(this,x),D=f.call(this,R),D.name="ValidationError",D}return it()(x)}(we()(Error));function Ge(r){return r.length>1&&r[0]==y&&(r[r.length-1]==="validate"||r.length>=2&&r[r.length-2]=="validate"&&r[r.length-1]=="result")&&!(r.length==2&&r[1]=="validate")&&!(r.length==3&&r[1]=="validate"&&r[2]=="result")}function Ve(r){var f=Object.assign({},r),x=f.entry;return(0,s.watch)(function(R,D,$){if((0,s.isIncludePath)(x||$.path,R)){if(typeof D=="boolean"){var L=R.join(s.OBJECT_PATH_DELIMITER);D?delete $.cache[L]:$.cache[L]=D}return Object.keys($.cache).length==0}},function(R){return Ge(R)},{initial:!0})}function Pt(r,f){var x=typeof r=="function"?r():r;if(!x)throw new ValidationError(typeof f=="function"?f():f)}function ze(r){return function(){var f=de()(ne()().mark(function x(R){var D,$,L,V,J,X;return ne()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:if(Array.isArray(R)&&R.length>0){D=R.join(s.OBJECT_PATH_DELIMITER),$=st()(r.computedObjects);try{for($.s();!(L=$.n()).done;)V=T()(L.value,2),J=V[0],X=V[1],J.startsWith(D)&&X.run()}catch(ae){$.e(ae)}finally{$.f()}}else r.computedObjects.runGroup(N);case 1:case"end":return q.stop()}},x)}));return function(x){return f.apply(this,arguments)}}()}var Ze=e(92980);function He(r){var f={};return Object.entries(r||{}).forEach(function(x){var R=_slicedToArray(x,2),D=R[0],$=R[1];isFieldValue($)||isFieldGroup($)||isFieldList($)||(f[D]=$)}),f}function ft(r){return Object.assign({type:"submit",help:"",title:"",dirty:!1,validate:!0,visible:!0,enable:!0,readOnly:!0},He(r))}var Ce=null,Je=(0,Ze.zo)(function(r,f){var x,R=f.className;return(0,u.jsx)("input",{className:R+" "+r.className,style:r.style,type:(x=r.type)!==null&&x!==void 0?x:"submit",value:r.title})},{cursor:"pointer",width:"100%",display:"block",boxSizing:"border-box",padding:"8px",borderRadius:"8px",transition:"filter 0.3s","&:hover":{filter:"brightness(1.2)"},"&.speedform-submit":{backgroundColor:"#54b2ff",color:"white",border:"1px solid #1e5786"}});function Qe(r,f,x){var R=Object.assign({preventDefault:!1},f);function D($){var L=r.useState(),V=_slicedToArray(L,1),J=V[0],X=$.scope,ee=getValueByPath(J,X),q=ft(ee),ae=typeof $.render=="function"?1:Array.isArray($.children)?2:typeof $.children=="function"?3:0;return _jsxs(_Fragment,{children:[_jsx(Je,_objectSpread({visible:ae==0},R)),ae===1?_jsx(Ce,{submitProps:q,children:$.render}):ae===2?$.children.map(function(ue,te){return _jsx(Ce,{submitProps:q,children:ue},te)}):_jsx(Ce,{submitProps:q,children:$.children})]})}return React.memo(D,function($,L){return $.scope===L.scope})}function Ye(r){var f=Ie(r);return function(x){return(0,u.jsx)(f,k()(k()({},x),{},{name:P,children:function(D){var $=D.loading;return(0,u.jsxs)("div",{className:"speedform-submit",children:["\u63D0\u4EA4",(0,u.jsx)("input",{type:"submit"}),(0,u.jsx)("span",{children:$?"\u63D0\u4EA4\u4E2D":"\u5DF2\u63D0\u4EA4"})]})}}))}}var Te={title:"\u63D0\u4EA4",help:"",tips:"\u63D0\u4EA4",visible:!0,enable:!0,validate:!0,readonly:!1,execute:function(){var r=de()(ne()().mark(function x(){return ne()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:case"end":return D.stop()}},x)}));function f(){return r.apply(this,arguments)}return f}()};function Xe(r,f){var x=Ie(r);return function(R){return(0,u.jsx)(x,{name:l,children:function($){return(0,u.jsx)("input",{type:"submit",value:R.title})}})}}var qe={title:"\u91CD\u7F6E",help:"",tips:"\u91CD\u7F6E",visible:!0,enable:!0,validate:!0,readonly:!1,execute:function(){var r=de()(ne()().mark(function x(){return ne()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:case"end":return D.stop()}},x)}));function f(){return r.apply(this,arguments)}return f}()};function ht(r){return r.length>1&&r[0]==y&&r[r.length-1]=="value"}function xt(r){return(0,s.watch)(function(f,x,R){if((0,s.isIncludePath)(r||R.path,f)&&!R.value)return!0},function(f){return ht(f)},{initial:!1})}var et={name:"SpeedForm",title:"SpeedForm",help:"",tips:"",status:"idle",dirty:xt(["fields"]),validate:Ve({entry:["fields"]}),readonly:!1,enable:!0,visible:!0,fields:{},actions:{$submit:Te,$reset:qe}};function yt(r,f){r.length>=2&&r[0]==y&&r[r.length-1]==N&&(f.scope||(f.scope="./value"),f.depends||(f.depends=[]),f.depends.push([].concat(n()(r.slice(0,-1)),["value"])),f.initial=null,f.group=N,f.enable=!0)}function gt(r){return(0,dt.w)(r,et)}function tt(r,f){r.length>1&&r[r.length-1]=="execute"&&(f.immediate=!1,f.scope?Array.isArray(f.scope)&&f.scope.length>0&&f.scope[0]!=y&&f.scope.unshift(y):f.scope=[y],f.noReentry=!0)}function bt(r,f){r.length>0&&r[0]==y&&f.depends&&f.depends.forEach(function(x,R){Array.isArray(x)&&x.length>0&&x[0]!=y?f.depends[R]=[y].concat(n()(x)):typeof x=="string"&&!x.startsWith("".concat(y,"."))&&(f.depends[R]="".concat(y,".").concat(x))})}function p(r){return function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;r.enableComputed(f)}}function i(r,f){var x=(0,Q.w)({getFieldName:function(L){return L.length>0?L[L.length-1]==="value"?L.slice(0,-1).join("."):L.join("."):""},validAt:"once"},f);gt(r);var R=(0,s.createStore)(r,{debug:x.debug,scope:function(){return[y]},onCreateComputed:function(L,V,J){yt(L,J),bt(L,J),tt(L,J)},onComputedDraft:function(L,V){var J=V.computedType,X=V.valuePath;if(J==="Computed"&&X.length>0&&X[0]==y)return L.fields}});R.on("computed:created",function($){Ge($.path)&&($.options.enable=x.validAt==="once")});var D=R;return{state:D.state,useState:D.useState,setState:D.setState,Form:I(D,x),Field:H(D,x),Group:oe(D,x),Action:Ie(D),Submit:Ye(D),Reset:Xe(D,x),useAction:Pe(D),fields:b(function(){return D.state.fields}),actions:b(function(){return D.state.actions}),getAction:De,freeze:p(R),load:ot(D,x),getValues:ge(D,x),computedObjects:D.computedObjects,watchObjects:D.watchObjects,validate:ze(D)}}function I(r,f){return t.forwardRef(function(x,R){var D=x.children,$=(0,t.useCallback)(function(V){f.validAt==="submit"&&r.computedObjects.runGroup(N)},[]),L=(0,t.useCallback)(function(V){},[]);return(0,u.jsx)("form",k()(k()({ref:R,className:"speedform"},x),{},{onSubmit:$,onReset:L,children:D}))})}function h(r){var f=(0,t.useRef)(r);return f.current=r,f}function w(r){g()&&typeof r!="function"&&console.error("useUnmount expected parameter is a function, got ".concat(K()(r)));var f=h(r);(0,t.useEffect)(function(){return function(){f.current()}},[])}function B(){var r=(0,t.useRef)(!1);return(0,t.useEffect)(function(){return r.current=!1,function(){r.current=!0}},[]),r}},1808:function(Z,m,e){e.r(m),e.d(m,{$:function(){return ie.$},ComputedObjects:function(){return Ze},ComputedScopeRef:function(){return W},OBJECT_PATH_DELIMITER:function(){return U},SKIP_COMPUTED:function(){return k},WatchObject:function(){return Xe},WatchObjects:function(){return qe},asyncComputedObject:function(){return Oe},computed:function(){return we},createAsyncComputedMutate:function(){return je},createComputedMutate:function(){return ne},createObject:function(){return ie.share},createStore:function(){return tt},createUseWatch:function(){return Ye},createWatch:function(){return Ce},getSnap:function(){return ie.getSnap},getVal:function(){return v},getValueByPath:function(){return P},installComputed:function(){return be},installWatch:function(){return Qe},isIncludePath:function(){return g},isSkipComputed:function(){return t},markRaw:function(){return ie.markRaw},setAsyncComputedObject:function(){return ot},setVal:function(){return C},skipComputed:function(){return N},useStore:function(){return bt},watch:function(){return ft}});var W=function(p){return p.Root="root",p.Current="current",p.Parent="parent",p.Depends="depends",p.Self="self",p}({});function n(p){return(p||["ROOT"]).map(function(i){return Array.isArray(i)?i.join("."):i}).join("_")}function z(p,i){var I="";return i.id?I=i.id:I=n(p),I}function T(p){return p instanceof Error?p:new Error(p)}var U=".",k=Symbol("SKIP_COMPUTED");function t(p){return p[k]===!0}var G=e(12027),K=e.n(G);function F(p,i,I){if(!Array.isArray(p))throw new Error("curPath must be an array");return i==="self"?p:i==="root"?[]:i==="parent"?p.slice(0,-2):i==="current"?p.slice(0,-1):typeof i=="string"?i.startsWith("./")?[].concat(K()(p.slice(0,-1)),K()(i.slice(2).split(U))):i.startsWith("../")?F(p.slice(0,-1),i.slice(3),!0):i.startsWith("/")?(i=i.replace(/^(\/)*/,""),i.split(U)):I?[].concat(K()(p.slice(0,-1)),K()(i.split(U))):K()(i.split(U)):Array.isArray(i)?i:p}function o(p,i){var I=p.get(i);if(I!==void 0)return I;var h=p.get(Number(i)||i);if(h!==void 0)return h}function O(p){return toString.call(p)==="[object Map]"}function v(p,i){if(i.length===0)return p;var I,h=p;return i.forEach(function(w){I=O(h)?o(h,w):h[w],h=I}),I}function c(p,i,I){return p.map(function(h){return v(i,F(I,h))})}function b(p){return(p||[]).map(function(i){return Array.isArray(i)?i:typeof i=="string"?["/","./","../"].some(function(I){return i.startsWith(I)})?i:i.includes(U)?i.split(U):i.split("."):[]})}var a=e(34180),A=e.n(a);function d(p){return _typeof(p)=="object"&&p.hasOwnProperty("__COMPUTED__")&&["async","sync"].includes(p.__COMPUTED__)&&p.hasOwnProperty("fn")&&typeof p.fn=="function"&&p.hasOwnProperty("options")&&_typeof(p.options)=="object"}function M(p){return _typeof(p)=="object"&&["result","loading","timeout","retry","run"].every(function(i){return p.hasOwnProperty(i)})}function g(p,i){return p.length>i.length?!1:p.every(function(I,h){return I===i[h]})}function y(p){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"log",I=typeof p=="function"?p():p instanceof Error?p.stack:p;try{var h;(h=console)[i].apply(h,["[@speedform/reactive] "].concat(K()(Array.isArray(I)?I:[I])))}catch(w){}}function C(p,i,I){var h=p,w=i.length-1;i.forEach(function(B,r){var f=O(h);if(r===w){f?h.set(B,I):h[B]=I;return}var x=f?o(h,B):h[B];h=x})}function N(p){return p[k]=!0,p}function P(p,i){var I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:U,h=[];try{return typeof i=="function"&&(i=i.call(p,p)),h=Array.isArray(i)?i:typeof i=="string"?i.split(I):[],h.length>0?v(p,h):p}catch(w){return p}}function l(p,i){function I(h,w){for(var B in h){var r=h[B];typeof i=="function"&&i({value:r,key:B,parent:h,path:w.concat(B)}),A()(r)==="object"&&I(r,w.concat(B))}}I(p,[])}function s(p,i,I){var h=i==null?I:i;if(typeof h=="function")try{h=h.call(p,p)}catch(w){}return h==null?I==null?W.Current:I:h}function u(p,i,I){var h=I.draft,w=I.dependValues,B=I.valuePath,r=I.computedType,f=h;if(typeof p.options.onComputedDraft=="function"){var x=p.options.onComputedDraft.call(h,h,{computedType:r,valuePath:B});x!==void 0&&(f=x)}var R=B.length>=1?B.slice(0,B.length-1):[],D=s(h,i.scope,p.options.scope&&p.options.scope(r));try{if(D===W.Current)return P(h,R);if(D===W.Parent)return P(h,B.slice(0,B.length-2));if(D===W.Root)return f;if(D===W.Depends)return Array.isArray(w)?w.map(function(V){return typeof V=="function"?V():V}):[];if(typeof D=="string")return P(h,F(B,D));if(Array.isArray(D))if(D.length>0&&D[0].startsWith("@")){var $=P(h,[].concat(K()(D[0].substring(1).split(U)),K()(D.slice(1))));return P(h,$)}else return P(h,D);else if(typeof D=="number"){var L=D>B.length-2?B.length-D-1:0;return P(h,B.slice(0,L))}else return h}catch(V){return h}}var E=e(93949),S=e.n(E),_=e(6270),j=e.n(_),H=e(29861),Q=e.n(H),Y=function(){function p(i,I,h,w){S()(this,p),Q()(this,"options",void 0),this.store=i,this.selfReactiveable=I,this.path=h,this.options=Object.assign({},w)}return j()(p,[{key:"id",get:function(){return this.options.id}},{key:"enable",get:function(){return this.options.enable},set:function(I){this.options.enable=I}},{key:"group",get:function(){return this.options.group}},{key:"async",get:function(){return this.options.async}},{key:"depends",get:function(){return this.options.depends}},{key:"value",get:function(){var I;return v(this.selfReactiveable?(I=this.selfReactiveable)===null||I===void 0?void 0:I.state:this.store.state,this.path)}},{key:"run",value:function(I){var h;return(h=this.store.reactiveable)===null||h===void 0?void 0:h.runComputed(this.id,I)}},{key:"cancel",value:function(){if(this.async)this.value.cancel();else throw new Error("cancel only works for async computed")}}]),p}();function re(p,i,I,h){var w=I.options.onCreateComputed;if(typeof w=="function"&&typeof i=="function"){var B=w.call(I,p,i,h);h.scope||(h.scope=W.Current),typeof B=="function"&&(i=B)}}function oe(p,i,I){return Object.assign({loading:!1,timeout:0,retry:0,error:null,result:void 0,progress:0,run:p.reactiveable.markRaw(N(function(h){return p.reactiveable.runComputed(i,Object.assign({},h))})),cancel:p.reactiveable.markRaw(N(function(){console.log("cancel")}))},I)}function le(p,i,I){var h=p.valuePath,w=p.id,B=p.desc,r=p.resultPath,f=p.getter,x=i.selfReactiveable;I.reactiveable.createComputed({onComputed:function(D){var $=D.draft,L=D.values,V=D.options;if(!I.options.enableComputed||!i.enable&&(V==null?void 0:V.enable)!==!0){I.options.log("Sync computed <".concat(B,"> is disabled"),"warn");return}I.options.log("Run sync computed for : ".concat(B)),p.dependValues=L;var J=Object.assign({},i,V),X=$,ee=u(I,J,{draft:$,dependValues:L,valuePath:h,computedType:"Computed"}),q=i.initial;try{q=f.call(X,ee),I.emit("computed:done",{path:h,id:w,value:q})}catch(ae){I.emit("computed:error",{path:h,id:w,error:ae})}x?x.setState(function(ae){C(ae,r,q)}):C($,r,q)},options:i})}function ne(p,i){var I=p.path,h=p.parent,w=p.value,B=w(),r=B.getter,f=B.options;re(I,r,i,f);var x=f.selfReactiveable,R=I,D=z(I,f),$="".concat(D,"_").concat(I.join(U));i.options.log("Create sync computed: ".concat($));var L={id:D,desc:$,resultPath:R,isComputedRunning:!1,dependValues:[],valuePath:I,deps:[],getter:r};le(L,f,i),x||p.replaceValue(v(i.state,I));var V=new Y(i,x,I,f);return f.save&&i.computedObjects.set(D,V),V}var ye=e(29008),de=e.n(ye),rt=e(70958),pe=e.n(rt),Re=e(28633),me=e.n(Re),ie=e(13834),Ot=e(56041);function ot(p,i,I,h,w){var B=oe(p,h,w),r=v(i,I);Object.assign(r,B,w)}function Ke(p,i,I){var h=Object.assign({},I),w=h.max,B=w===void 0?100:w,r=h.min,f=r===void 0?0:r,x=h.value,R=x===void 0?0:x;return p(function(D){return C(D,[].concat(K()(i),["progress"]),R)}),{value:function($){$>B&&($=B),$<f&&($=f),p(function(L){return C(L,[].concat(K()(i),["progress"]),$)})},end:function(){this.value(B)}}}function ge(p,i,I){p(function(h){Object.entries(I).forEach(function(w){var B=me()(w,2),r=B[0],f=B[1];C(h,[].concat(K()(i),[r]),f)})})}function De(p,i,I,h){return Me.apply(this,arguments)}function Me(){return Me=pe()(de()().mark(function p(i,I,h,w){var B,r,f,x,R,D,$,L,V,J,X,ee,q,ae,ue,te,se,Be,Le,At,ke,ve,fe,Et,_t,he;return de()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:B=I.id,r=I.valuePath,f=I.getter,x=I.resultPath,R=I.dependValues,D=h.timeout,$=D===void 0?0:D,L=h.retry,V=L===void 0?[0,0]:L,J=h.selfReactiveable,X=J?J.setState.bind(J):w.setState,ee=i,q=u(w,h,{draft:i,dependValues:R,valuePath:r,computedType:"Computed"}),ae=Array.isArray(V)?V:[Number(V),0],ue=me()(ae,2),te=ue[0],se=ue[1],Le=new AbortController,At={onTimeout:function(xe){return Be=xe},getProgressbar:function(xe){return Ke(X,r,xe)},getSnap:function(xe){return(0,ie.getSnap)(xe,!1)},abortSignal:Le.signal,cancel:Le.abort},ke=!1,ge(X,x,{cancel:(0,ie.markRaw)(N(function(){return Le.abort()}))}),Le.signal.addEventListener("abort",function(){ke=!0}),ve=!1,fe=!1,_t=de()().mark(function at(){var xe,nt,Ne,Rt,Ct,Nt,We,St,Se;return de()().wrap(function(ce){for(;;)switch(ce.prev=ce.next){case 0:if(ve=!1,fe=!1,Ne={},ce.prev=3,Rt=Array.isArray($)?$:[$,0],Ct=me()(Rt,2),Nt=Ct[0],We=Nt===void 0?0:Nt,St=Ct[1],Se=St===void 0?0:St,ge(X,x,{loading:!0,error:null,retry:he>0?te-he:0,timeout:Se>1?Se:We,progress:0}),!ke){ce.next=8;break}throw new Error("Abort");case 8:return We>0&&(xe=setTimeout(function(){fe=!0,typeof Be=="function"&&Be(),ve||(clearInterval(nt),ge(X,x,{loading:!1,error:"TIMEOUT",timeout:0}))},We),Se>1&&(nt=setInterval(function(){ge(X,x,{timeout:Se--}),Se===0&&clearInterval(nt)},We/(Se+1)))),ce.next=11,f.call(ee,q,At);case 11:if(Et=ce.sent,!ke){ce.next=14;break}throw new Error("Abort");case 14:fe||Object.assign(Ne,{result:Et,error:null,timeout:0}),ce.next=22;break;case 17:ce.prev=17,ce.t0=ce.catch(3),ve=!0,fe||Object.assign(Ne,{error:T(ce.t0).message,timeout:0}),te>0&&Object.assign(Ne,{retry:te-he});case 22:return ce.prev=22,clearTimeout(xe),clearInterval(nt),(!ve||he==te)&&Object.assign(Ne,{loading:!1}),!ve&&!fe&&Object.assign(Ne,{error:null}),ge(X,x,Ne),ce.finish(22);case 29:if(!ve){ce.next=33;break}if(!(te>0&&se>0&&he<te)){ce.next=33;break}return ce.next=33,(0,Ot.g)(se);case 33:case"end":return ce.stop()}},at,null,[[3,17,22,29]])}),he=0;case 15:if(!(he<te+1)){_e.next=20;break}return _e.delegateYield(_t(),"t0",17);case 17:he++,_e.next=15;break;case 20:ke||fe?w.emit("computed:cancel",{path:r,id:B,reason:fe?"timeout":"abort"}):ve?w.emit("computed:error",{path:r,id:B,error:ve}):w.emit("computed:done",{path:r,id:B,value:Et});case 21:case"end":return _e.stop()}},p)})),Me.apply(this,arguments)}function ut(p,i,I){var h=p.valuePath,w=p.id,B=p.deps,r=p.desc,f=i.selfReactiveable,x=i.initial,R=i.noReentry;I.reactiveable.createAsyncComputed({depends:function($){return c(B,$,h)},initial:function($){f?f.setState(function(L){C(L,h,oe(I,w,{result:x}))}):C($,h,oe(I,w,{result:x}))},onComputed:function(){var D=pe()(de()().mark(function L(V){var J,X,ee,q,ae;return de()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:if(J=V.draft,X=V.values,ee=V.options,!(!I.options.enableComputed||!i.enable&&(ee==null?void 0:ee.enable)!==!0)){te.next=4;break}return I.options.log("Async computed <".concat(r,"> is disabled"),"warn"),te.abrupt("return");case 4:if(I.options.log("Run async computed for : ".concat(r)),q=Object.assign({},i,ee),!(R&&p.isComputedRunning)){te.next=10;break}return I.options.debug&&I.options.log("Reentry async computed: ".concat(r),"warn"),I.emit("computed:cancel",{path:h,id:w,reason:"reentry"}),te.abrupt("return");case 10:return p.isComputedRunning=!0,p.dependValues=X,te.prev=12,te.next=15,De(J,p,q,I);case 15:return ae=te.sent,te.abrupt("return",ae);case 17:return te.prev=17,p.isComputedRunning=!1,te.finish(17);case 20:case"end":return te.stop()}},L,null,[[12,,17,20]])}));function $(L){return D.apply(this,arguments)}return $}(),options:i})}function je(p,i){var I=p.path,h=p.parent,w=p.value,B=w(),r=B.getter,f=B.options;f.async=!0,re(I,r,i,f);var x=f.depends,R=x===void 0?[]:x,D=f.selfReactiveable,$=I;R.length==0&&i.options.log("async computed <".concat(I.join("."),"> should specify depends"),"warn");var L=z(I,f);f.id=L;var V="".concat(L,"_").concat(I.join(U));i.options.log("Create async computed: ".concat(V," (depends=").concat(R.length==0?"None":n(R),")"));var J={id:L,desc:V,resultPath:$,isComputedRunning:!1,dependValues:[],valuePath:I,deps:R,getter:r};ut(J,f,i),D||p.replaceValue(v(i.state,I));var X=new Y(i,D,I,f);return f.save&&i.computedObjects.set(L,X),X}function Oe(p){return Object.assign({loading:!1,timeout:0,retry:0,error:null,result:void 0,progress:0,run:(0,ie.markRaw)(N(function(i){})),cancel:(0,ie.markRaw)(N(function(){}))},p)}var Ie=e(36711);function be(p,i){var I=p.value,h;return I.__COMPUTED__=="async"?h=je(p,i):I.__COMPUTED__=="sync"?h=ne(p,i):(0,Ie.$)(I)?(p.value=function(){return{getter:I,options:{depends:[],initial:void 0,immediate:!0,enable:!0}}},h=je(p,i)):(p.value=function(){return{getter:I,options:{initial:void 0,enable:!0}}},h=ne(p,i)),h&&setTimeout(function(){i.emit("computed:created",h)}),h}var lt=e(14582),Pe=e.n(lt),dt=e(28810),Ee=e.n(dt),st=e(48510),ct=e.n(st),it=e(30790),pt=e.n(it),mt=e(77701),Fe=e.n(mt),vt=e(28249),$e=e.n(vt),It=e(5672),Ue=e.n(It);function we(p,i,I){if(typeof p!="function")throw new Error("computed getter must be a function");var h=[],w={async:!1,enable:!0,timeout:0,depends:[],immediate:!0,save:!0};if(arguments.length==1)h=[];else if(arguments.length==2)if(Array.isArray(arguments[1]))h=arguments[1];else if(A()(arguments[1])=="object")Object.assign(w,arguments[1]);else throw new Error("invalid arguments");else arguments.length>=3&&(h=arguments[1],Object.assign(w,arguments[2]));var B=w.async===!0||(0,Ie.$)(p)||arguments.length>=2&&Array.isArray(i);w.async=B,w.depends=b(h);var r=function(){return{getter:p,options:w}};return r.__COMPUTED__=B?"async":"sync",r}function Ae(){return Math.random().toString(36).slice(2)}var Ge=function(){function p(i,I){S()(this,p)}return j()(p,[{key:"state",get:function(){throw new Error("state not implemented.")}},{key:"useState",value:function(I){throw new Error("useState not implemented.")}},{key:"setState",value:function(I){throw new Error("setState not implemented.")}},{key:"createAsyncComputed",value:function(I){throw new Error("createAsyncComputed not implemented.")}},{key:"createComputed",value:function(I){throw new Error("createComputed not implemented.")}},{key:"runComputed",value:function(I,h){throw new Error("runComputed not implemented.")}},{key:"sync",value:function(I){throw new Error("sync not implemented.")}},{key:"markRaw",value:function(I){throw new Error("makeRaw not implemented.")}},{key:"createWatch",value:function(I,h){throw new Error("createWatch not implemented.")}}]),p}(),Ve=function(p){Fe()(I,p);var i=$e()(I);function I(h,w){var B,r;return S()(this,I),r=i.call(this,h,w),Q()(Ee()(r),"_stateCtx",void 0),r._stateCtx=(0,ie.sharex)(h,{stopArrDep:!1,moduleName:(B=w==null?void 0:w.id)!==null&&B!==void 0?B:Ae(),onRead:function(x){w!=null&&w.onRead&&w.onRead({path:x.fullKeyPath,value:x.value,parent:x.parent,replaceValue:x.replaceValue})}}),r}return j()(I,[{key:"state",get:function(){return this._stateCtx.reactive}},{key:"useState",value:function(w){var B=this._stateCtx.useState(),r=me()(B,2),f=r[0],x=r[1],R=typeof w=="function"?w(f):f;return[R,x]}},{key:"setState",value:function(w){this._stateCtx.setState(w)}},{key:"sync",value:function(w){return this._stateCtx.sync(w)}},{key:"createAsyncComputed",value:function(w){var B=w.initial,r=w.onComputed,f=w.depends,x=w.options;return this._stateCtx.mutate({deps:function(D){return typeof f=="function"?f(D):null},fn:function(D,$){$.isFirstCall&&typeof B=="function"&&B(D,$)},task:function(){var R=pe()(de()().mark(function $(L){var V,J,X,ee;return de()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:if(V=L.draft,J=L.setState,X=L.input,ee=L.extraArgs,typeof B!="function"){ae.next=3;break}return ae.abrupt("return",r({draft:V,setState:J,values:X,options:Object.assign({},ee)}));case 3:case"end":return ae.stop()}},$)}));function D($){return R.apply(this,arguments)}return D}(),immediate:x.immediate,desc:x.id,checkDeadCycle:!1}),x.id}},{key:"createComputed",value:function(w){var B=w.onComputed,r=w.options;return this._stateCtx.mutate({fn:function(x,R){var D=R.input;typeof B=="function"&&B({draft:x,values:D})},task:function(){var f=pe()(de()().mark(function R(D){var $,L,V;return de()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:$=D.draft,L=D.input,V=D.extraArgs,typeof B=="function"&&B({draft:$,values:L,options:V});case 2:case"end":return X.stop()}},R)}));function x(R){return f.apply(this,arguments)}return x}(),desc:r.id,checkDeadCycle:!1}),r.id}},{key:"runComputed",value:function(w,B){var r={desc:w,extraArgs:B};return this._stateCtx.runMutateTask(r)}},{key:"markRaw",value:function(w){return(0,ie.markRaw)(w)}},{key:"createWatch",value:function(w,B){var r=this,f=(0,ie.watch)(function(R){var D=R.triggerReasons,$=D.map(function(L){return L.keyPath});w($)},function(){return(B==null?void 0:B.length)==0?[r._stateCtx.state]:B==null?void 0:B.map(function(R){return P(r._stateCtx.state,R)})}),x=f.unwatch;return x}}]),I}(Ge),Pt=e(59166);function ze(p){function i(I,h,w){var B=Object.assign({id:Ae(),save:!1},(0,Pt.P)(arguments[1])?arguments[1]:arguments[2]);B.depends=Array.isArray(arguments[1])?arguments[1]:[];var r=B.async===!0||(0,Ie.$)(I)||Array.isArray(arguments[1]);B.selfReactiveable=new Ve({value:r?oe(p,B.id,{}):B.initial});var f;r?f={path:["value"],parent:null,value:we(I,B.depends,B)}:f={path:["value"],parent:null,value:we(I,B)};var x=be(f,p);return x}return i}var Ze=function(p){Fe()(I,p);var i=$e()(I);function I(h){var w;return S()(this,I),w=i.call(this),Q()(Ee()(w),"_createComputed",void 0),w.store=h,w}return j()(I,[{key:"runGroup",value:function(){var h=pe()(de()().mark(function B(r,f){return de()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.abrupt("return",Promise.all(K()(this.values()).filter(function(D){return D.group==r}).map(function(D){return D.async,D.run(f)})));case 1:case"end":return R.stop()}},B,this)}));function w(B,r){return h.apply(this,arguments)}return w}()},{key:"enableGroup",value:function(){var h=pe()(de()().mark(function B(r){var f,x,R;return de()().wrap(function($){for(;;)switch($.prev=$.next){case 0:f=Pe()(this.values());try{for(f.s();!(x=f.n()).done;)R=x.value,R.options.enable=r}catch(L){f.e(L)}finally{f.f()}case 2:case"end":return $.stop()}},B,this)}));function w(B){return h.apply(this,arguments)}return w}()},{key:"delete",value:function(w){return ct()(pt()(I.prototype),"delete",this).call(this,w)}},{key:"create",get:function(){return this._createComputed||(this._createComputed=ze(this.store)),this._createComputed}}]),I}(Ue()(Map));function He(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return typeof p=="function"?p:typeof p=="string"?function(i){return n(i)==n(p.split(U))}:Array.isArray(p)?p.length===0?function(){return!0}:function(i){return p.map(function(I){return typeof I=="string"?I.split(U):Array.isArray(I)?I:[String(I)]}).some(function(I){return n(i)==n(I)})}:function(){return!1}}function ft(p,i,I){var h=Object.assign({depends:He(i),enable:!0},I),w=function(){return{listener:p,options:h}};return w.__COMPUTED__="watch",w}function Ce(p){return function(i,I){if(I=b(I),I.length===0)return p.reactiveable.createWatch(i);if(I.some(function(h){return typeof h=="string"&&h.startsWith(".")}))throw new Error("watch depends can not start with '.'");return p.reactiveable.createWatch(i,I)}}var Je=e(92379);function Qe(p,i){i.options.log("install watch for <".concat(p.path.length==0?"Dynamic":p.path.join(U),">"));var I=p.value();I.options.path=p.path;var h=i.watchObjects.add(I),w=I.options.context;return w?w.setState(function(B){B.value=I.options.initial}):(p.replaceValue(I.options.initial),i.setState(function(B){C(B,p.path,I.options.initial)})),h}function Ye(p){return function(i,I,h){(0,Je.useEffect)(function(){var w={path:["value"],parent:void 0,value:function(){var f={listener:i,options:Object.assign({depends:He(I),context:(0,ie.sharex)({value:0}),selfPath:["value"],initial:0,enable:!0,scope:W.Depends},h)};return f}},B=Qe(w,p);return function(){p.watchObjects.delete(B.id)}},[I])}}function Te(p,i){if(p===i)return!0;if(p==null||i==null||A()(p)!==A()(i))return!1;if(A()(p)==="object"){if(Array.isArray(p)&&Array.isArray(i))return p.length!==i.length?!1:p.every(function(h,w){return Te(h,i[w])});if(!Array.isArray(p)&&!Array.isArray(i)){var I=Object.keys(p);return I.length!==Object.keys(i).length?!1:I.every(function(h){return Te(p[h],i[h])})}else return!1}return!1}var Xe=function(){function p(i,I){if(S()(this,p),Q()(this,"_cache",void 0),Q()(this,"_listener",void 0),Q()(this,"_options",void 0),this.store=i,this._options=Object.assign({enable:!0,selfPath:[],group:void 0,context:void 0,initial:void 0},I.options),typeof this._options.depends!="function")throw new Error("watch options.depends must be a function");if(!this._options.id){var h=this._options.path;this._options.id=this._options.id||this._options.context?Ae():n(h)}this._listener=I.listener}return j()(p,[{key:"id",get:function(){return this._options.id}},{key:"options",get:function(){return this._options}},{key:"path",get:function(){return this._options.path}},{key:"depends",get:function(){return this._options.depends}},{key:"enable",get:function(){return this._options.enable},set:function(I){this._options.enable=I}},{key:"cache",get:function(){return this._cache||(this._cache={}),this._cache}},{key:"value",get:function(){var I=this._options.context?this._options.context:this.store.state;return v((0,ie.getSnap)(I),this.path)}},{key:"getName",value:function(){return this._options.context?this.id:this.path.join(U)}},{key:"isDepends",value:function(I,h){return Te(I,this.path)?!1:this.depends(I,h)}},{key:"reset",value:function(){this._cache={}}},{key:"run",value:function(I,h){var w=this;if(!this.enable){this.store.options.log("WatchObject <".concat(this.getName(),"> is disabled"));return}try{var B=this._listener.call(this,I,h,this);B!==void 0&&(this._options.context?this._options.context.setState(function(r){r.value=B}):this.store.setState(function(r){C(r,w.path,B)}))}catch(r){}}}]),p}(),qe=function(p){Fe()(I,p);var i=$e()(I);function I(h){var w;return S()(this,I),w=i.call(this),Q()(Ee()(w),"_off",void 0),Q()(Ee()(w),"_enable",!0),w.store=h,h.on("created",w.onStateCreated.bind(Ee()(w))),w}return j()(I,[{key:"onStateCreated",value:function(){this.createWacher()}},{key:"enable",get:function(){return this._enable},set:function(w){this._enable=w}},{key:"createWacher",value:function(){var w=this,B=this.store.reactiveable.createWatch(function(r){w._enable&&r.forEach(function(f){var x=v(w.store.state,f),R=Pe()(w.values()),D;try{for(R.s();!(D=R.n()).done;){var $=D.value;$.isDepends(f,x)&&$.run(f,x)}}catch(L){R.e(L)}finally{R.f()}})},[]);this._off=B}},{key:"reset",value:function(){this._off&&this._off(),this.createWacher()}},{key:"add",value:function(w){var B=new Xe(this.store,w);return this.set(B.id,B),B}},{key:"enableGroup",value:function(w){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=Pe()(this.values()),f;try{for(r.s();!(f=r.n()).done;){var x=f.value;x.options.group==w&&(x.options.enable=B)}}catch(R){r.e(R)}finally{r.f()}}}]),I}(Ue()(Map));function ht(p,i){var I=p.path,h=p.value,w=n(I);typeof h=="function"&&!i._replacedKeys[w]&&!t(h)&&(i._replacedKeys[w]=!0,h.__COMPUTED__=="watch"?Qe(p,i):be(p,i))}function xt(p){return function(i,I){var h=p.reactiveable.useState.bind(p.reactiveable);if(i==null)return h();var w=h(),B=me()(w,2),r=B[0],f=B[1],x=i(r),R=f;return typeof I=="function"&&(R=function($){f(function(L){I.call(L,L,$)})}),[x,R]}}function et(p){return function(i){p.reactiveable.setState(function(I){i(I)})}}var yt=e(24222);function gt(p){var i=(0,yt.Z)();p._emitter=i,p.on=i.on,p.off=i.off,p.emit=i.emit,p.once=function(I,h){var w=function B(r){try{h(r)}finally{i.off(I,B)}};i.on(I,w)}}function tt(p,i){var I=Object.assign({id:Ae(),debug:!0,immediate:!1,enableComputed:!0,scope:function(){return W.Current}},i);I.log=function(){I.debug&&y.apply(void 0,arguments)};var h={options:I,_replacedKeys:{}};return gt(h),h.computedObjects=new Ze(h),h.watchObjects=new qe(h),h.reactiveable=new Ve(p,{id:I.id,onRead:function(B){ht(B,h)}}),h.state=h.reactiveable.state,h.emit("created"),h.useState=xt(h),h.setState=et(h),h.enableComputed=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return h.options.enableComputed=w},h.sync=h.reactiveable.sync.bind(h.reactiveable),h.watch=Ce(h),h.useWatch=Ye(h),h.watch=Ce(h),h.createComputed=ze(h),I.immediate&&l(h.state),h}function bt(p,i){var I=(0,Je.useState)(function(){return tt(p,Object.assign({immediate:!0},i))}),h=me()(I,1),w=h[0];return w}},90076:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(81972);const n=[{value:"This is a API example.",paraId:0}]},67077:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(76883);const n=[]},85749:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(5849);const n=[]},82387:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(3996);const n=[]},86547:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(37077);const n=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0}]},56554:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(12879);const n=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0}]},5670:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(99653);const n=[]},12316:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(39498);const n=[]},2400:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(85731);const n=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0}]},74814:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(15099);const n=[{value:"\u8868\u5355\u52A8\u4F5C\u7528\u6765\u5B9A\u4E49\u8868\u5355\u7684\u63D0\u4EA4\u3001\u91CD\u7F6E,\u6216\u8005\u4EFB\u610F\u884C\u4E3A\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8868\u5355\u52A8\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u901A\u4FD7\u5730\u8BF4\uFF0C\u8868\u5355\u52A8\u4F5C\u5C31\u662F\u58F0\u660E\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u5BF9\u8868\u5355\u6570\u636E\u8FDB\u884C\u5904\u7406\u3002",paraId:1,tocIndex:0},{value:"\u5728\u8868\u5355\u7684",paraId:2,tocIndex:1},{value:"actions",paraId:2,tocIndex:1},{value:"\u4E2D\u5B9A\u4E49\u8868\u5355\u52A8\u4F5C\uFF0C",paraId:2,tocIndex:1},{value:"actions",paraId:2,tocIndex:1},{value:"\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0Caction\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A\u3002",paraId:2,tocIndex:1},{value:`export interface FormActionDefine<Scope extends Dict=Dict,Result =any>{
    scope?  : string | string[] | (()=>string | string[])           // \u52A8\u4F5C\u63D0\u4EA4\u8303\u56F4
    title?  : ActionComputedAttr<string,Scope>					            // \u52A8\u4F5C\u6807\u9898    
    help?   : ActionComputedAttr<string,Scope>					            // \u52A8\u4F5C\u5E2E\u52A9
    tips?   : ActionComputedAttr<string,Scope>					            // \u52A8\u4F5C\u63D0\u793A
    visible?: ActionComputedAttr<boolean,Scope>					            // \u662F\u5426\u53EF\u89C1
    enable? : ActionComputedAttr<boolean,Scope>					            // \u662F\u5426\u53EF\u7528	            
    count:number
    execute :(scope:any,options?:ComputedParams)=> Promise<void | Result>   // \u6267\u884C\u52A8\u4F5C\uFF0C\u7528\u6765\u5BF9\u8868\u5355\u6570\u636E\u8FDB\u884C\u5904\u7406
} 
`,paraId:3,tocIndex:1},{value:`
import { createForm }  from "@speedform/core"
export const schema = {
  // \u8868\u5355\u5C5E\u6027
  title: "\u767B\u5F55\u8868\u5355",
  // \u8868\u5355\u5B57\u6BB5
  fields:{  
    name: {
      value: "fisher",
      required: true,
      title: "\u59D3\u540D"
    },
    password: {
      value: "123",
      required: true,
      title: "\u5E74\u9F84"
    }
    // ...
  },
  // \u8868\u5355\u52A8\u4F5C
  actions:{
    login:{
      title:"\u767B\u5F55",
      execute:async (scope,options)=>{
        console.log("\u767B\u5F55")
      }
    }
  }
}

export const Login=createForm<typeof schema>(schema,options)

`,paraId:4,tocIndex:1},{value:"\u8BF4\u660E",paraId:5,tocIndex:1},{value:"\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u8868\u5355",paraId:6,tocIndex:1},{value:"action",paraId:6,tocIndex:1},{value:"\u58F0\u660E\u5728",paraId:6,tocIndex:1},{value:"actions",paraId:6,tocIndex:1},{value:"\u3002",paraId:6,tocIndex:1},{value:"\u6BCF\u4E2A",paraId:6,tocIndex:1},{value:"Action",paraId:6,tocIndex:1},{value:"\u5747\u53EF\u4EE5\u6307\u5B9A",paraId:6,tocIndex:1},{value:"scope",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"title",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"help",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"tips",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"visible",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"enable",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"count",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"execute",paraId:6,tocIndex:1},{value:"\u7B49\u5C5E\u6027\uFF0C\u9664\u4E86",paraId:6,tocIndex:1},{value:"execute",paraId:6,tocIndex:1},{value:"\u5916\uFF0C\u5176\u4ED6\u5747\u662F\u53EF\u9009\u7684\u3002",paraId:6,tocIndex:1},{value:"\u6BCF\u4E2A",paraId:7,tocIndex:2},{value:"Action",paraId:7,tocIndex:2},{value:"\u5747\u53EF\u4EE5\u6307\u5B9A",paraId:7,tocIndex:2},{value:"execute",paraId:7,tocIndex:2},{value:"\u5C5E\u6027\uFF0C\u7528\u6765\u6267\u884C\u52A8\u4F5C\uFF0C",paraId:7,tocIndex:2},{value:"execute",paraId:7,tocIndex:2},{value:"\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u5BF9\u8868\u5355\u6570\u636E\u8FDB\u884C\u5904\u7406\u3002",paraId:7,tocIndex:2},{value:"execute",paraId:8,tocIndex:2},{value:"\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E00\u822C\u662F\u5F02\u6B65\u51FD\u6570\uFF0C\u6BD5\u7ADF\u8981\u5E72\u70B9\u4EC0\u4E48\u4E8B\u561B\uFF0C\u4E5F\u53EF\u4EE5\u662F\u540C\u6B65\u51FD\u6570\uFF0C\u53EF\u4EE5\u6709\u4EE5\u4E0B\u51E0\u79CD\u58F0\u660E\u65B9\u5F0F\uFF1A",paraId:8,tocIndex:2},{value:"\u76F4\u63A5\u4F7F\u7528\u5F02\u6B65\u51FD\u6570\u58F0\u660E",paraId:9,tocIndex:3},{value:"\u9996\u9009\u662F\u4F7F\u7528",paraId:10,tocIndex:4},{value:"action",paraId:10,tocIndex:4},{value:"\u65B9\u6CD5\u8FDB\u884C\u58F0\u660E\uFF0C",paraId:10,tocIndex:4},{value:"action",paraId:10,tocIndex:4},{value:"\u65B9\u6CD5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u58F0\u660E\u4E00\u4E2A\u52A8\u4F5C\u3002",paraId:10,tocIndex:4},{value:"",paraId:11,tocIndex:4},{value:"scope",paraId:12,tocIndex:5},{value:"\uFF1A\u52A8\u4F5C\u63D0\u4EA4\u8303\u56F4\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u52A8\u6001\u8BA1\u7B97\u63D0\u4EA4\u8303\u56F4\u3002",paraId:12,tocIndex:5}]},54347:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(59378);const n=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0},{value:"\u4E00\u822C\u5728\u72EC\u7ACB\u7684\u6587\u4EF6\u4E2D\u4F7F\u7528",paraId:1,tocIndex:1},{value:"createForm",paraId:1,tocIndex:1},{value:"\u6765\u521B\u5EFA\u4E00\u4E2A\u8868\u5355\u5BF9\u8C61\uFF08\u4E0D\u662F\u5728\u7EC4\u4EF6\u5185\uFF09\u3002",paraId:1,tocIndex:1},{value:`import { createForm }  from "@speedform/core"
export const schema = {
  // \u8868\u5355\u5C5E\u6027
  title: "\u767B\u5F55\u8868\u5355",
  // \u8868\u5355\u5B57\u6BB5
  fields:{  
    name: {
      value: "fisher",
      required: true,
      title: "\u59D3\u540D"
    },
    password: {
      value: "123",
      required: true,
      title: "\u5E74\u9F84"
    }
    // ...
  },
  // \u8868\u5355\u52A8\u4F5C
  actions:{
    //
  }
}

export const Login=createForm<typeof schema>(schema,options)


`,paraId:2,tocIndex:1},{value:"\u521B\u5EFA\u8868\u5355\u5BF9\u8C61\u65F6\uFF0C\u53EF\u4EE5\u4F20\u5165",paraId:3,tocIndex:1},{value:"schema",paraId:3,tocIndex:1},{value:"\u5BF9\u8C61\uFF0C\u7528\u4E8E\u914D\u7F6E\u8868\u5355\u6570\u636E\u548C\u884C\u4E3A\u3002",paraId:3,tocIndex:1},{value:"schema",paraId:3,tocIndex:1},{value:"\u5BF9\u8C61\u662F\u4E00\u4E2A\u666E\u901A\u7684",paraId:3,tocIndex:1},{value:"JSON",paraId:3,tocIndex:1},{value:"\u6570\u636E\u5BF9\u8C61\uFF0C\u7531\u4EE5\u4E0B\u51E0\u90E8\u5206\u7EC4\u4EF6\uFF1A",paraId:3,tocIndex:1},{value:"\u8868\u5355\u5C5E\u6027",paraId:4,tocIndex:1},{value:"\u5305\u62EC\u8868\u5355\u6807\u9898\uFF0C\u72B6\u6001\uFF0C\u810F\u7B49\u8868\u5355\u5168\u5C40\u6570\u636E\u3002",paraId:5,tocIndex:1},{value:"\u8868\u5355\u5B57\u6BB5",paraId:6,tocIndex:1},{value:"\u5305\u62EC\u8868\u5355\u5B57\u6BB5\u7684\u503C\uFF0C\u6821\u9A8C\uFF0C\u7B49\u8868\u5355\u5B57\u6BB5\u6570\u636E\uFF0C\u5E76\u4E14\u652F\u6301\u5D4C\u5957\u5B57\u6BB5\u7ED3\u6784\u3002\u8BE6\u89C1",paraId:7,tocIndex:1},{value:"\u5B57\u6BB5",paraId:8,tocIndex:1},{value:"\u3002",paraId:7,tocIndex:1},{value:"\u8868\u5355\u52A8\u4F5C",paraId:9,tocIndex:1},{value:"\u5B9A\u4E49\u8868\u5355\u63D0\u4EA4\uFF0C\u91CD\u7F6E\u7B49\u8868\u5355\u52A8\u4F5C\u3002",paraId:10,tocIndex:1},{value:"createForm",paraId:11,tocIndex:2},{value:"\u51FD\u6570\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7528\u4E8E\u914D\u7F6E\u8868\u5355\u7684\u4E00\u4E9B\u884C\u4E3A\u3002",paraId:11,tocIndex:2},{value:`export interface FormOptions{
  /**
    \u662F\u5426\u8C03\u8BD5\u6A21\u5F0F
    \u542F\u7528\u8C03\u8BD5\u6A21\u5F0F\u540E\uFF0C\u4F1A\u5728\u63A7\u5236\u53F0\u8F93\u51FA\u4E00\u4E9B\u8C03\u8BD5\u4FE1\u606F
   * */ 
	debug?:boolean										
	/**
	  \u4F55\u65F6\u8FDB\u884C\u6570\u636E\u6821\u9A8C
	  - once : \u5B9E\u65F6\u6821\u9A8C
	  - lost-focus : \u5931\u53BB\u7126\u70B9\u65F6\u6821\u9A8C 
	  - submit : \u63D0\u4EA4\u65F6\u6821\u9A8C
	 */
	validAt?: 'once' | 'lost-focus' | 'submit'	
	/**
   * 
   * \u5F53\u542F\u7528\u5E38\u89C4\u63D0\u4F9B\u65F6\u7528\u6765\u751F\u6210\u5B57\u6BB5\u540D\u79F0
   * 
	* \u7528\u6765\u751F\u6210\u5B57\u6BB5\u540D\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u5B57\u6BB5\u540D\u751F\u6210\u89C4\u5219
	* \u9ED8\u8BA4\u7684\u5B57\u6BB5\u540D\u751F\u6210\u89C4\u5219\u662F: \u5B57\u6BB5\u540D = \u5B57\u6BB5\u8DEF\u5F84.join('.'),
	* \u5F53\u5B57\u6BB5\u540D\u79F0\u542B\u6709.\u65F6\uFF0C\u53EF\u80FD\u4F1A\u6709\u5C90\u4E49,\u6B64\u65F6\u53EF\u4EE5\u81EA\u884C\u66F4\u6539\u5B57\u6BB5\u540D\u79F0\u89C4\u5219
	* @param valuePath 
	* @returns  {string}
	*/
	getFieldName?:(valuePath:string[])=>string,
	/**
	 * \u5355\u4F8B\u6A21\u5F0F
	 * = true\u65F6\uFF0C\u6240\u6709\u7684\u8BA1\u7B97\u5C5E\u6027\u90FD\u662F\u5171\u4EAB\u7684\uFF0C\u5426\u5219\u6BCF\u4E2A\u5B9E\u4F8B\u90FD\u6709\u81EA\u5DF1\u7684\u8BA1\u7B97\u5C5E\u6027	
	 * = false\u65F6\uFF0C\u4F1A\u5728\u521B\u5EFA\u8868\u5355\u65F6\u8FDB\u884C\u6DF1\u5EA6\u514B\u9686\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A\u4E92\u76F8\u4E0D\u5E72\u6270\u7684\u5B9E\u4F8B
	 */
	singleton?:boolean
}

`,paraId:12,tocIndex:2},{value:"\u8868\u5355\u5C5E\u6027",paraId:13},{value:"\u6211\u4EEC\u53EF\u4EE5\u5728\u8868\u5355",paraId:14,tocIndex:3},{value:"schema",paraId:14,tocIndex:3},{value:"\u5BF9\u8C61\u6839\u4E2D\u58F0\u660E\u4EFB\u610F\u5C5E\u6027\uFF0C\u7528\u6765\u8868\u793A\u8868\u5355\u7684\u5168\u5C40\u5C5E\u6027\u3002",paraId:14,tocIndex:3},{value:"\u8868\u5355\u9664\u4E86",paraId:15,tocIndex:3},{value:"fields",paraId:15,tocIndex:3},{value:"\u5C5E\u6027\u5916\uFF0C\u5176\u4ED6\u5C5E\u6027\u5747\u662F\u53EF\u9009\u7684\uFF0C\u4E00\u822C\u4F1A\u5305\u62EC\uFF1A",paraId:15,tocIndex:3},{value:`import { dirty, validation} from "@speedform/core"
const schema = {
  // \u8868\u5355\u5C5E\u6027
  title:"\u8868\u5355\u6807\u9898",
  help:"\u5E2E\u52A9\u4FE1\u606F",
  url:"\u63D0\u4EA4\u76EE\u6807",
  dirty:dirty(),
  validation:validation(),
  //... 
  fields:{....},
  actions:{...}
}
`,paraId:16,tocIndex:3},{value:"createForm",paraId:17,tocIndex:4},{value:"\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u8868\u5355\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5305\u62EC\u4E86\u4E00\u4E9B\u7528\u6765\u64CD\u4F5C\u8868\u5355\u7684",paraId:17,tocIndex:4},{value:"API",paraId:17,tocIndex:4},{value:"\u3002",paraId:17,tocIndex:4},{value:"\u540D\u79F0",paraId:18,tocIndex:4},{value:"\u7C7B\u578B",paraId:18,tocIndex:4},{value:"\u8BF4\u660E",paraId:18,tocIndex:4},{value:"Form",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Field",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u5B57\u6BB5\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Group",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u5B57\u6BB5\u7EC4\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Action",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u52A8\u4F5C\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Submit",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u63D0\u4EA4\u52A8\u4F5C\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Reset",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u91CD\u7F6E\u52A8\u4F5C\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"getAction",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u7528\u6765\u83B7\u53D6\u5728\u8868\u5355\u5B57\u6BB5\u58F0\u660E\u7684",paraId:18,tocIndex:4},{value:"Action",paraId:18,tocIndex:4},{value:"fields",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355",paraId:18,tocIndex:4},{value:"fields",paraId:18,tocIndex:4},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"actions",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355",paraId:18,tocIndex:4},{value:"actions",paraId:18,tocIndex:4},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"state",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355\u6570\u636E\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"computedObjects",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355\u4E2D\u7684\u6240\u6709\u8BA1\u7B97\u5C5E\u6027\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"watchObjects",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355\u4E2D\u7684\u6240\u6709",paraId:18,tocIndex:4},{value:"Watch",paraId:18,tocIndex:4},{value:"\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"freeze",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u51BB\u7ED3\u8868\u5355\u7981\u6B62\u7F16\u8F91",paraId:18,tocIndex:4},{value:"load",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u52A0\u8F7DJSON\u6570\u636E\u5230\u8868\u5355\u5B9E\u4F8B",paraId:18,tocIndex:4},{value:"getValues",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u83B7\u53D6\u8868\u5355\u6570\u636E(\u53EA\u5305\u62EC\u8868\u5355\u5B57\u6BB5",paraId:18,tocIndex:4},{value:"value",paraId:18,tocIndex:4},{value:")",paraId:18,tocIndex:4},{value:"validate",paraId:18,tocIndex:4},{value:"'\u65B9\u6CD5'",paraId:18,tocIndex:4},{value:"\u6821\u9A8C\u6574\u4E2A\u8868\u5355",paraId:18,tocIndex:4},{value:"useState",paraId:18,tocIndex:4},{value:"hook",paraId:18,tocIndex:4},{value:"\u5728\u7EC4\u4EF6\u4E2D\u8BBF\u95EE",paraId:18,tocIndex:4},{value:"state",paraId:18,tocIndex:4},{value:"createForm",paraId:19,tocIndex:5},{value:"\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A\u6CDB\u578B\u53C2\u6570\uFF0C\u7528\u4E8E\u5B9A\u4E49\u8868\u5355\u7684",paraId:19,tocIndex:5},{value:"schema",paraId:19,tocIndex:5},{value:"\u5BF9\u8C61\u7C7B\u578B\u3002\u4F46\u662F\u8BE5\u6CDB\u578B\u53C2\u6570\u4E00\u822C\u53EF\u4EE5\u91C7\u7528",paraId:19,tocIndex:5},{value:"typeof <schema>",paraId:19,tocIndex:5},{value:"\u6765\u81EA\u52A8\u63A8\u65AD\uFF0C\u8FD9\u6837\u5C31\u4E0D\u9700\u8981\u624B\u52A8\u5B9A\u4E49\u7C7B\u578B\u4E86\u3002",paraId:19,tocIndex:5}]},34126:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(44833);const n=[]},73360:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(21955);const n=[]},26170:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(45620);const n=[]},90847:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(90751);const n=[]},82697:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(31673);const n=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u975E\u5E38\u5F3A\u5927\u7684",paraId:0,tocIndex:0},{value:"React",paraId:0,tocIndex:0},{value:"\u8868\u5355\u7EC4\u4EF6\uFF0C\u5B83\u7684\u76EE\u6807\u662F\u8BA9",paraId:0,tocIndex:0},{value:"React",paraId:0,tocIndex:0},{value:"\u8868\u5355\u5F00\u53D1\u53D8\u5F97\u66F4\u52A0\u7B80\u5355\u3001\u5FEB\u901F\u3001\u7075\u6D3B\u3002",paraId:0,tocIndex:0}]},26279:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(65864);const n=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u6838\u5FC3\u7531\u4E24\u4E2A\u5305\u7EC4\u6210\uFF1A",paraId:0,tocIndex:0},{value:"@speedform/core",paraId:0,tocIndex:0},{value:"\u548C",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u662F\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u7684\u54CD\u5E94\u5F0F\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u7528\u6765\u7BA1\u7406\u548C\u9A71\u52A8",paraId:1,tocIndex:0},{value:"Form",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u662F",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u529F\u80FD\u5F3A\u5927\u7684\u57FA\u7840\u3002",paraId:1,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u4F5C\u4E3A\u66FF\u4EE3",paraId:1,tocIndex:0},{value:"redux",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"mobx",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"zstuand",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"Jotai",paraId:1,tocIndex:0},{value:"\u7684\u72B6\u6001\u7BA1\u7406\u5E93\u72EC\u7ACB\u4F7F\u7528\uFF0C\u5176\u672C\u8D28\u4E0A\u662F\u5BF9",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u72B6\u6001\u7BA1\u7406\u5E93\u7684\u5C01\u88C5\u3002",paraId:1,tocIndex:0},{value:"@speedform/core",paraId:1,tocIndex:0},{value:"\u662F",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u6838\u5FC3\u5E93\uFF0C\u5B83\u63D0\u4F9B\u4E86",paraId:1,tocIndex:0},{value:"Form",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u548C",paraId:1,tocIndex:0},{value:"Field",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6,\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A",paraId:1,tocIndex:0},{value:"headless",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u5E93,\u53EA\u8D1F\u8D23\u8868\u5355\u7684\u903B\u8F91\u5904\u7406\uFF0C\u4E0D\u8D1F\u8D23\u5177\u4F53\u7684\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"@speedform/antd",paraId:1,tocIndex:0},{value:"\u662F\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u6E32\u67D3\u7EC4\u4EF6\u5E93\uFF0C\u5B83\u63D0\u4F9B\u4E86",paraId:1,tocIndex:0},{value:"Form",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u548C",paraId:1,tocIndex:0},{value:"Field",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u7684",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7248\u672C\u3002",paraId:1,tocIndex:0},{value:`pnpm install @speedform/core @speedform/reactive
yarn add @speedform/core @speedform/reactive
npm install @speedform/core @speedform/reactive
`,paraId:2,tocIndex:0}]},12958:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(56343);const n=[]},56494:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(26807);const n=[{value:"\u672C\u8282\u5C06\u901A\u8FC7\u5F00\u53D1\u4E00\u4E2A\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\uFF0C\u4F53\u9A8C",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u7684\u5F3A\u5927\u4E0E\u7075\u6D3B\u3002",paraId:0,tocIndex:0},{value:"\u8BE5\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A",paraId:1,tocIndex:0},{value:"\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\u7ED3\u6784\u5982\u4E0B\uFF1A",paraId:2,tocIndex:0},{value:`{
  "title":"\u7F51\u7EDC\u914D\u7F6E\u540D\u79F0",
  "interface":"\u63A5\u53E3\u7C7B\u578B",
  "ip":"IP\u5730\u5740",
  "gateway":"\u7F51\u5173\u5730\u5740",
  "dhcp":{
    "enable":true,          //\u81EA\u52A8\u83B7\u53D6IP\u5730\u5740
    "start":"\u8D77\u59CB\u5730\u5740",
    "end":"\u7ED3\u675F\u5730\u5740"
  },
  "wifi":{
    "ssid":"\u65E0\u7EBF\u7F51\u7EDC",
    "password":"\u65E0\u7EBF\u5BC6\u7801"
  }
}

`,paraId:3,tocIndex:0},{value:"\u8868\u5355\u5B57\u6BB5\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A",paraId:4,tocIndex:0},{value:"title",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5\u4E3A\u5FC5\u586B\u5B57\u6BB5\uFF0C\u957F\u5EA6\u4E0D\u5C0F\u4E8E3\u3002",paraId:5,tocIndex:0},{value:"interface",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5\u4E3A\u4E0B\u62C9\u9009\u62E9\u5B57\u6BB5\uFF0C\u53EF\u9009\u6709\u7EBF\u7F51\u5361\u6216\u65E0\u7EBF\u7F51\u5361\u3002",paraId:5,tocIndex:0},{value:"ip",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5\u4E3AIP\u5730\u5740\u5B57\u6BB5\uFF0C\u9700\u8981\u8FDB\u884C\u5F02\u6B65\u6821\u9A8C\uFF0C\u7528\u6765\u9A8C\u8BC1IP\u5730\u5740\u7684\u6709\u6548\u6027\u3002",paraId:5,tocIndex:0},{value:"gateway",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5\u4E3AIP\u5730\u5740\u5B57\u6BB5\u3002",paraId:5,tocIndex:0},{value:"dhcp",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5\u4E3A\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5305\u542B",paraId:5,tocIndex:0},{value:"enable",paraId:5,tocIndex:0},{value:"\u3001",paraId:5,tocIndex:0},{value:"start",paraId:5,tocIndex:0},{value:"\u3001",paraId:5,tocIndex:0},{value:"end",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5,\u5F53",paraId:5,tocIndex:0},{value:"enable=false",paraId:5,tocIndex:0},{value:"\uFF0C",paraId:5,tocIndex:0},{value:"start",paraId:5,tocIndex:0},{value:"\u3001",paraId:5,tocIndex:0},{value:"end",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5\u7981\u7528\u3002",paraId:5,tocIndex:0},{value:"wifi",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5\u4E3A\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5305\u542B",paraId:5,tocIndex:0},{value:"ssid",paraId:5,tocIndex:0},{value:"\u3001",paraId:5,tocIndex:0},{value:"password",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5\uFF0C\u4EC5\u5728\u663E\u793A",paraId:5,tocIndex:0},{value:'interface= "wifi"',paraId:5,tocIndex:0},{value:"\u65F6\u663E\u793A\u3002",paraId:5,tocIndex:0},{value:"SpeedForm",paraId:6,tocIndex:0},{value:"\u662F\u4E00\u4E2A",paraId:6,tocIndex:0},{value:"headless",paraId:6,tocIndex:0},{value:"\u7EC4\u4EF6\u5E93\uFF0C\u4E0D\u8D1F\u8D23\u5177\u4F53\u7684\u6E32\u67D3\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u672C\u4F8B\u4E2D\u6211\u4EEC\u4F7F\u7528\u6807\u51C6\u7684html\u7EC4\u4EF6\u6765\u6E32\u67D3\u8868\u5355\u3002",paraId:6,tocIndex:0},{value:"SpeedForm",paraId:7,tocIndex:1},{value:"\u6838\u5FC3\u7531\u4E24\u4E2A\u5305\u7EC4\u6210\uFF1A",paraId:7,tocIndex:1},{value:"@speedform/core",paraId:7,tocIndex:1},{value:"\u548C",paraId:7,tocIndex:1},{value:"@speedform/reactive",paraId:7,tocIndex:1},{value:`\u3002
`,paraId:7,tocIndex:1},{value:"SpeedForm",paraId:8,tocIndex:2},{value:"\u8868\u5355\u4F7F\u7528\u4E00\u4E2A\u666E\u901A",paraId:8,tocIndex:2},{value:"JSON",paraId:8,tocIndex:2},{value:"\u5BF9\u8C61\u6765\u58F0\u660E\u8868\u5355\u5143\u6570\u636E\uFF0C\u5373\u8868\u5355",paraId:8,tocIndex:2},{value:"Schema",paraId:8,tocIndex:2},{value:"\u3002",paraId:8,tocIndex:2},{value:"\u6211\u4EEC\u4F7F\u7528\u4E00\u4E2A\u72EC\u7ACB\u7684\u6587\u4EF6(",paraId:9,tocIndex:2},{value:"network/schema.ts",paraId:9,tocIndex:2},{value:")\u6765\u58F0\u660E\u8868\u5355\uFF0C\u8FD9\u6837\u53EF\u4EE5\u66F4\u597D\u5730\u7EC4\u7EC7\u8868\u5355\u7684\u7ED3\u6784\u548C\u4FBF\u4EE5\u5F15\u7528\u3002",paraId:9,tocIndex:2},{value:`// network/schema.ts

const schema = { 
  title: "\u7F51\u7EDC\u914D\u7F6E",
  // ....
  // \u8868\u5355\u5C5E\u6027
  fields: { 
    // \u8868\u5355\u5B57\u6BB5\u58F0\u660E
  },
  actions:{
    // \u8868\u5355\u52A8\u4F5C\u58F0\u660E
  } 
}
`,paraId:10,tocIndex:2},{value:"\u8868\u5355",paraId:11,tocIndex:2},{value:"Schema",paraId:11,tocIndex:2},{value:"\u662F\u4E00\u4E2A\u666E\u901A\u7684",paraId:11,tocIndex:2},{value:"JSON",paraId:11,tocIndex:2},{value:"\u5BF9\u8C61\uFF0C\u5B83\u7531\u4EE5\u4E0B\u51E0\u4E2A\u90E8\u5206\u7EC4\u6210\uFF1A",paraId:11,tocIndex:2},{value:"\u8868\u5355\u5C5E\u6027",paraId:12,tocIndex:2},{value:"\uFF1A\u8868\u5355\u7684\u4E00\u4E9B\u57FA\u672C\u5C5E\u6027\uFF0C\u5982",paraId:12,tocIndex:2},{value:"title",paraId:12,tocIndex:2},{value:"\u3001",paraId:12,tocIndex:2},{value:"description",paraId:12,tocIndex:2},{value:"\u7B49\u3002",paraId:12,tocIndex:2},{value:"fields",paraId:12,tocIndex:2},{value:"\uFF1A\u7528\u6765\u58F0\u660E\u672C\u8868\u5355\u7684\u6240\u6709\u5B57\u6BB5\u3002",paraId:12,tocIndex:2},{value:"actions",paraId:12,tocIndex:2},{value:"\uFF1A\u7528\u6765\u58F0\u660E\u8868\u5355\u7684\u6240\u6709\u52A8\u4F5C,\u7528\u6765\u8FDB\u884C\u8868\u5355\u63D0\u4EA4\u7B49\u3002",paraId:12,tocIndex:2},{value:"\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u8BE6\u7EC6\u89E3\u91CA\u4E00\u4E0B\u5982\u4F55",paraId:13,tocIndex:3},{value:"SpeedForm",paraId:13,tocIndex:3},{value:"\u8868\u5355\u4E2D\u58F0\u660E\u4E00\u4E2A\u5B57\u6BB5\u3002",paraId:13,tocIndex:3},{value:"\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u5B57\u6BB5\u53EA\u9700\u8981\u5305\u62EC\u4E00\u4E2A",paraId:14,tocIndex:3},{value:"value",paraId:14,tocIndex:3},{value:"\u7684\u5C5E\u6027,\u5982\u4E0B\uFF1A",paraId:14,tocIndex:3},{value:`{  
  title:{
    value: "React-Speed-Form"    
  }
}
`,paraId:15,tocIndex:3},{value:"\u5F53\u7136\uFF0C\u5B9E\u9645\u60C5\u51B5\u6211\u4EEC\u4E00\u822C\u8FD8\u4F1A\u58F0\u660E\u4E00\u4E9B\u5176\u4ED6\u989D\u5916\u5C5E\u6027\uFF0C\u5982",paraId:16,tocIndex:3},{value:"title",paraId:16,tocIndex:3},{value:"\u3001",paraId:16,tocIndex:3},{value:"placeholder",paraId:16,tocIndex:3},{value:"\u7B49\u3002\u56E0\u6B64\uFF0C\u4E00\u4E2A\u5B8C\u6574\u7684",paraId:16,tocIndex:3},{value:"title",paraId:16,tocIndex:3},{value:"\u5B57\u6BB5\u53EF\u80FD\u4F1A\u58F0\u660E\u5982\u4E0B\uFF1A",paraId:16,tocIndex:3},{value:`{  
  title:{
    value: "React-Speed-Form",
    placeholder: "\u8F93\u5165\u7F51\u7EDC\u914D\u7F6E\u540D\u79F0",
    title: "\u7F51\u7EDC\u540D\u79F0",
    // ...
    // \u53EF\u4EE5\u6DFB\u52A0\u4EFB\u610F\u989D\u5916\u5C5E\u6027
  }
} 
`,paraId:17,tocIndex:3},{value:"\u5728\u5B9E\u9645\u573A\u666F\u4E2D\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u5C06\u4E00\u4E9B\u76F8\u5173\u7684\u5B57\u6BB5\u7EC4\u5408\u6210\u4E00\u4E2A\u5B57\u6BB5\u7EC4\uFF0C\u5982",paraId:18,tocIndex:4},{value:"wifi",paraId:18,tocIndex:4},{value:"\u5B57\u6BB5\u7EC4\u3002",paraId:18,tocIndex:4},{value:`{
  wifi: {
    ssid: {
      value: "ssid",
      title: "\u65E0\u7EBF\u7F51\u7EDC",
    },
    password: {
      value: "password",
      title: "\u65E0\u7EBF\u5BC6\u7801",
    }
  }
}
`,paraId:19,tocIndex:4},{value:"SpeedForm",paraId:20,tocIndex:5},{value:"\u8868\u5355\u4E2D\u7684\u5B57\u6BB5\u9A8C\u8BC1\u662F\u901A\u8FC7",paraId:20,tocIndex:5},{value:"validate",paraId:20,tocIndex:5},{value:"\u5C5E\u6027\u6765\u58F0\u660E\u7684\u3002",paraId:20,tocIndex:5},{value:"validate",paraId:20,tocIndex:5},{value:"\u5C5E\u6027\u503C\u662F\u4E00\u4E2A\u51FD\u6570\uFF08\u53EF\u4EE5\u662F",paraId:20,tocIndex:5},{value:"\u540C\u6B65\u51FD\u6570",paraId:20,tocIndex:5},{value:"\uFF0C\u4E5F\u53EF\u4EE5\u662F",paraId:20,tocIndex:5},{value:"\u5F02\u6B65\u51FD\u6570",paraId:20,tocIndex:5},{value:"\uFF09\uFF0C\u5176\u8FD4\u56DE\u503C\u7528\u6765\u9A8C\u8BC1\u5B57\u6BB5\u7684\u6709\u6548\u6027\u3002",paraId:20,tocIndex:5},{value:`import { assert } from "@speedform/core"
{  
  title:{
    value: "React-Speed-Form",
    placeholder: "\u8F93\u5165\u7F51\u7EDC\u914D\u7F6E\u540D\u79F0",
    title: "\u7F51\u7EDC\u540D\u79F0",
    help:"\u7F51\u7EDC\u540D\u79F0\u4E0D\u80FD\u5C0F\u4E8E3",
    validate:(value)=>{
        return value.length > 3
    }
  }
} 

\`validate\`\u5C5E\u6027\u662F\u4E00\u4E2A\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u5165\u53C2\u662F\u5B57\u6BB5\u7684\`value\`\u503C\uFF0C\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\`boolean\`\u503C\uFF0C\u7528\u6765\u8868\u793A\u5B57\u6BB5\u7684\u6709\u6548\u6027\u3002


`,paraId:21,tocIndex:5},{value:"SpeedForm",paraId:22},{value:"\u6CA1\u6709\u5185\u7F6E\u7684\u9A8C\u8BC1\u89C4\u5219\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55\u4F60\u559C\u6B22\u7684\u9A8C\u8BC1\u5E93\uFF0C\u5982",paraId:22},{value:"yup",paraId:22},{value:"\u3001",paraId:22},{value:"joi",paraId:22},{value:"\u3001",paraId:22},{value:"zod",paraId:22},{value:",",paraId:22},{value:"validator",paraId:22},{value:"\u7B49\u3002",paraId:22},{value:"\u63A5\u4E0B\u6765\u6211\u4EEC\u6DFB\u52A0",paraId:23,tocIndex:6},{value:"interface",paraId:23,tocIndex:6},{value:"\u5B57\u6BB5\uFF0C\u53EF\u4EE5\u6307\u5B9A",paraId:23,tocIndex:6},{value:"wifi",paraId:23,tocIndex:6},{value:"\u6216",paraId:23,tocIndex:6},{value:"ethernet",paraId:23,tocIndex:6},{value:"\u4E24\u79CD\u7F51\u5361\u7C7B\u578B\u3002",paraId:23,tocIndex:6},{value:"\u5B57\u6BB5\u7684\u9009\u62E9\u7531",paraId:24,tocIndex:6},{value:"select",paraId:24,tocIndex:6},{value:"\u5C5E\u6027\u6307\u5B9A\uFF0C",paraId:24,tocIndex:6},{value:"interface.select",paraId:24,tocIndex:6},{value:"\u662F\u4E00\u4E2A\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF08\u53EF\u4EE5\u662F",paraId:24,tocIndex:6},{value:"\u540C\u6B65\u51FD\u6570",paraId:24,tocIndex:6},{value:"\uFF0C\u4E5F\u53EF\u4EE5\u662F",paraId:24,tocIndex:6},{value:"\u5F02\u6B65\u51FD\u6570",paraId:24,tocIndex:6},{value:"\uFF0C\u4E8B\u5B9E\u4E0A\u6240\u6709\u5B57\u6BB5\u7684\u5C5E\u6027\u5747\u53EF\u4EE5\u662F\u540C\u6B65\u6216\u5F02\u6B65\u7684\uFF09\uFF0C\u7528\u6765\u8FD4\u56DE",paraId:24,tocIndex:6},{value:"interface",paraId:24,tocIndex:6},{value:"\u7684\u4E0B\u62C9\u9009\u62E9\u7684\u9009\u9879\u3002",paraId:24,tocIndex:6},{value:`{
	interface: {
    value: "wifi",
    title: "\u7F51\u5361\u7C7B\u578B",
    select: () => {
      return [
        { value: "wifi", title: "\u65E0\u7EBF\u7F51\u5361" },
        { value: "ethernet", title: "\u6709\u7EBF\u7F51\u5361" },
      ];
    },
  }
}
`,paraId:25,tocIndex:6},{value:"\u63A5\u4E0B\u6765\u6211\u4EEC\u4E3A",paraId:26,tocIndex:7},{value:"ip",paraId:26,tocIndex:7},{value:"\u5B57\u6BB5\u6DFB\u52A0\u5F02\u6B65\u6821\u9A8C\u529F\u80FD\uFF0C\u7528\u6765\u9A8C\u8BC1IP\u5730\u5740\u7684\u6709\u6548\u6027\u3002\u5F53",paraId:26,tocIndex:7},{value:"ip",paraId:26,tocIndex:7},{value:"\u5730\u5740\u7684\u503C\u53D8\u5316\u65F6\u4F1A\u81EA\u52A8\u8C03\u7528",paraId:26,tocIndex:7},{value:"validate",paraId:26,tocIndex:7},{value:"\u51FD\u6570\u8FDB\u884C\u6821\u9A8C\u3002",paraId:26,tocIndex:7},{value:`{
		ip: {
			value: "1.1.1.1",
			title: "IP\u5730\u5740",
			validate: async (value: any) => {
				await delay(2000);
				return validator.isIP(value);
			},
		},
}
`,paraId:27,tocIndex:7},{value:"\u5728\u5B9E\u9645\u573A\u666F\u4E2D\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u5BF9",paraId:28,tocIndex:7},{value:"ip",paraId:28,tocIndex:7},{value:"\u5730\u5740\u8FDB\u884C",paraId:28,tocIndex:7},{value:"ping",paraId:28,tocIndex:7},{value:"\u7B49\u5F02\u6B65\u64CD\u4F5C\uFF0C\u672C\u4F8B\u4E2D\u6211\u4EEC\u4F7F\u7528",paraId:28,tocIndex:7},{value:"delay",paraId:28,tocIndex:7},{value:"\u51FD\u6570\u6765\u6A21\u62DF\u5F02\u6B65\u64CD\u4F5C\u3002",paraId:28,tocIndex:7},{value:"\u5728\u672C\u4F8B\u4E2D\uFF0C\u5F53",paraId:29,tocIndex:8},{value:"interface.value",paraId:29,tocIndex:8},{value:"\u7684\u503C\u4E3A",paraId:29,tocIndex:8},{value:"wifi",paraId:29,tocIndex:8},{value:"\u65F6\uFF0C",paraId:29,tocIndex:8},{value:"wifi",paraId:29,tocIndex:8},{value:"\u76F8\u5173\u5B57\u6BB5\uFF08",paraId:29,tocIndex:8},{value:"ssid",paraId:29,tocIndex:8},{value:"\u548C",paraId:29,tocIndex:8},{value:"password",paraId:29,tocIndex:8},{value:"\uFF09\u624D\u4F1A\u663E\u793A\uFF0C\u5426\u5219\u9690\u85CF\u3002",paraId:29,tocIndex:8},{value:"\u8FD9\u53EF\u4EE5\u901A\u8FC7\u4E3A",paraId:30,tocIndex:8},{value:"wifi",paraId:30,tocIndex:8},{value:"\u5B57\u6BB5\u7EC4\u63D0\u4F9B\u4E00\u4E2A",paraId:30,tocIndex:8},{value:"visible",paraId:30,tocIndex:8},{value:"\u8BA1\u7B97\u5C5E\u6027\u6765\u5B9E\u73B0\u3002",paraId:30,tocIndex:8},{value:`{
    wifi: {
      visible: (net) => net.interface.value === "wifi",      
      ssid: {
        value: "ssid",
        title: "\u65E0\u7EBF\u7F51\u7EDC",
      },
      password: {
        value: "password",
        title: "\u65E0\u7EBF\u5BC6\u7801",
      }
    }
}
`,paraId:31,tocIndex:8},{value:"\u4EE5\u4E0A\u6211\u4EEC\u5C06",paraId:32,tocIndex:8},{value:"visible",paraId:32,tocIndex:8},{value:"\u58F0\u660E\u4E3A\u4E00\u4E2A\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u5165\u53C2(",paraId:32,tocIndex:8},{value:"scope",paraId:32,tocIndex:8},{value:")\u662F\u8868\u5355\u6839\u5BF9\u8C61",paraId:32,tocIndex:8},{value:"fields",paraId:32,tocIndex:8},{value:"\uFF0C\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A",paraId:32,tocIndex:8},{value:"boolean",paraId:32,tocIndex:8},{value:"\u503C\uFF0C\u7528\u6765\u63A7\u5236",paraId:32,tocIndex:8},{value:"wifi",paraId:32,tocIndex:8},{value:"\u5B57\u6BB5\u7EC4\u7684\u663E\u793A\u3002",paraId:32,tocIndex:8},{value:"Q:",paraId:33},{value:" \u4E3A\u4EC0\u4E48",paraId:33},{value:"visible",paraId:33},{value:"\u7684\u8BA1\u7B97\u51FD\u6570\u7684\u5165\u53C2(",paraId:33},{value:"scope",paraId:33},{value:")\u662F\u8868\u5355\u6839\u5BF9\u8C61",paraId:33},{value:"fields",paraId:33},{value:"\uFF0C\u800C",paraId:33},{value:"validate",paraId:33},{value:"\u8BA1\u7B97\u51FD\u6570\u7684\u5165\u53C2\u662F\u5B57\u6BB5\u7684",paraId:33},{value:"value",paraId:33},{value:"\u503C\uFF1F",paraId:33},{value:"A:",paraId:34},{value:" \u8BA1\u7B97\u51FD\u6570\u7684\u5165\u53C2(",paraId:34},{value:"scope",paraId:34},{value:")\u9ED8\u8BA4\u662F\u5F53\u524D\u6240\u5728\u7684\u5BF9\u8C61\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7",paraId:34},{value:"computed",paraId:34},{value:"\u8FDB\u884C\u914D\u7F6E\u3002",paraId:34},{value:"validate",paraId:34},{value:"\u8BA1\u7B97\u51FD\u6570\u7684\u5165\u53C2\u7ECF\u8FC7",paraId:34},{value:"createForm",paraId:34},{value:"\u5904\u7406\u4E3A\u9ED8\u8BA4\u6307\u5B9A\u6240\u5728\u5B57\u6BB5\u7684",paraId:34},{value:"value",paraId:34},{value:"\u503C\u3002",paraId:34},{value:"\u5728\u672C\u4F8B\u4E2D\uFF0C\u5F53\u542F\u7528\u81EA\u52A8\u83B7\u53D6IP\u5730\u5740\uFF0C\u5373",paraId:35,tocIndex:9},{value:"dhcp.enable",paraId:35,tocIndex:9},{value:"\u7684\u503C\u4E3A",paraId:35,tocIndex:9},{value:"false",paraId:35,tocIndex:9},{value:"\u65F6\uFF0C",paraId:35,tocIndex:9},{value:"dhcp.start",paraId:35,tocIndex:9},{value:"\u3001",paraId:35,tocIndex:9},{value:"dhcp.end",paraId:35,tocIndex:9},{value:"\u5B57\u6BB5\u7981\u7528\u3002",paraId:35,tocIndex:9},{value:"\u8FD9\u53EF\u4EE5\u901A\u8FC7\u4E3A\u5B57\u6BB5\u63D0\u4F9B\u4E00\u4E2A",paraId:36,tocIndex:9},{value:"enable",paraId:36,tocIndex:9},{value:"\u8BA1\u7B97\u5C5E\u6027\u6765\u5B9E\u73B0\uFF0C\u5F53",paraId:36,tocIndex:9},{value:"dhcp.enable",paraId:36,tocIndex:9},{value:"\u4E3A",paraId:36,tocIndex:9},{value:"false",paraId:36,tocIndex:9},{value:"\u65F6\uFF0C",paraId:36,tocIndex:9},{value:"dhcp.start",paraId:36,tocIndex:9},{value:"\u548C",paraId:36,tocIndex:9},{value:"dhcp.end",paraId:36,tocIndex:9},{value:"\u5B57\u6BB5\u7981\u7528\u3002",paraId:36,tocIndex:9},{value:`{
  dhcp: {
    enable: {
      title: "\u81EA\u52A8\u83B7\u53D6IP\u5730\u5740",
      value: true,
    },
    start: {
      title: "\u8D77\u59CB\u5730\u5740",
      value: "192.168.1.1",
      enable: computed<boolean>((dhcp: any) => {
          return dhcp.enable.value;
        },{ 
          scope: ComputedScopeRef.Parent
        }
      )
    },
    end: {
      title: "\u7ED3\u675F\u5730\u5740",
      value: "192.168.1.100", 
      enable: computed<boolean>((fields: any) => {
          return fields.dhcp.enable.value;
        }, 
        { 
          scope: ComputedScopeRef.Root ,
        }
      )
    },
  }
}
`,paraId:37,tocIndex:9},{value:'\u8BF4\u660E"',paraId:38,tocIndex:9},{value:"\u4EE5\u4E0A",paraId:39,tocIndex:9},{value:"dhcp.start",paraId:39,tocIndex:9},{value:"\u3001",paraId:39,tocIndex:9},{value:"dhcp.end",paraId:39,tocIndex:9},{value:"\u5B57\u6BB5\u7684",paraId:39,tocIndex:9},{value:"enable",paraId:39,tocIndex:9},{value:"\u5C5E\u6027\u88AB\u914D\u7F6E\u4E3A\u8BA1\u7B97\u5C5E\u6027\uFF0C\u4F46\u662F\u5176\u4F9D\u8D56\u4E8E",paraId:39,tocIndex:9},{value:"fields.dhcp.enable.value",paraId:39,tocIndex:9},{value:"\uFF0C\u7531\u4E8E\u662F\u540C\u6B65\u8BA1\u7B97\uFF0C\u6240\u4EE5\u4F9D\u8D56\u662F\u81EA\u52A8\u6536\u96C6\u7684\uFF0C\u5373\u5F53",paraId:39,tocIndex:9},{value:"fields.dhcp.enable.value",paraId:39,tocIndex:9},{value:"\u53D8\u66F4\u65F6\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97",paraId:39,tocIndex:9},{value:"fields.dhcp.start.enable",paraId:39,tocIndex:9},{value:"\u548C",paraId:39,tocIndex:9},{value:"fields.dhcp.end.enable",paraId:39,tocIndex:9},{value:"\u7684\u503C\u3002",paraId:39,tocIndex:9},{value:"\u6211\u4EEC\u8FD8\u53EF\u4EE5\u770B\u5230",paraId:39,tocIndex:9},{value:"dhcp.start",paraId:39,tocIndex:9},{value:"\u3001",paraId:39,tocIndex:9},{value:"dhcp.end",paraId:39,tocIndex:9},{value:"\u5B57\u6BB5\u7684",paraId:39,tocIndex:9},{value:"enable",paraId:39,tocIndex:9},{value:"\u5C5E\u6027\u58F0\u660E\u7684",paraId:39,tocIndex:9},{value:"scope",paraId:39,tocIndex:9},{value:"\u53C2\u6570\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u6B64\u53C2\u6570\u51B3\u5B9A\u4E86\u8BA1\u7B97\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u6307\u5411\u3002\u8BE6\u89C1",paraId:39,tocIndex:9},{value:"\u4E0A\u4E0B\u6587",paraId:40,tocIndex:9},{value:"\u3002",paraId:39,tocIndex:9},{value:"\u5728\u5B9E\u9645\u573A\u666F\u4E0B\uFF0C\u5B57\u6BB5\u4E2D\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570\u7684\u6267\u884C\u53EF\u80FD\u4F1A\u9700\u8981\u8FDB\u884C",paraId:41,tocIndex:10},{value:"\u52A0\u8F7D\u6307\u793A",paraId:41,tocIndex:10},{value:"\u3001",paraId:41,tocIndex:10},{value:"\u8D85\u65F6",paraId:41,tocIndex:10},{value:"\u3001",paraId:41,tocIndex:10},{value:"\u4E0D\u53EF\u91CD\u5165",paraId:41,tocIndex:10},{value:"\u3001",paraId:41,tocIndex:10},{value:"\u8FDB\u5EA6\u663E\u793A",paraId:41,tocIndex:10},{value:"\u3001",paraId:41,tocIndex:10},{value:"\u91CD\u8BD5",paraId:41,tocIndex:10},{value:"\u3001",paraId:41,tocIndex:10},{value:"\u53D6\u6D88",paraId:41,tocIndex:10},{value:"\u7B49\u9AD8\u7EA7\u63A7\u5236\u3002",paraId:41,tocIndex:10},{value:"SpeedForm",paraId:41,tocIndex:10},{value:"\u652F\u6301\u901A\u8FC7",paraId:41,tocIndex:10},{value:"computed",paraId:41,tocIndex:10},{value:"\u51FD\u6570\u6765\u5B9E\u73B0\u8FD9\u4E9B\u9AD8\u7EA7\u63A7\u5236\u3002",paraId:41,tocIndex:10},{value:"\u6BD4\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4E3Aip\u5B57\u6BB5\u7684",paraId:42,tocIndex:10},{value:"validate",paraId:42,tocIndex:10},{value:"\u5C5E\u6027\u6DFB\u52A0",paraId:42,tocIndex:10},{value:"computed",paraId:42,tocIndex:10},{value:"\u51FD\u6570\u6765\u5B9E\u73B0",paraId:42,tocIndex:10},{value:"\u8D85\u65F6",paraId:42,tocIndex:10},{value:"\u63A7\u5236\u3002",paraId:42,tocIndex:10},{value:`
{
		ip: {
			value: "1.1.1.1",
			title: "IP\u5730\u5740",
			validate: computed(async (value: any) => {
				await delay(2000);
				return validator.isIP(value);
			},['value'],{
        timeout:1000,
      })
		},
}
`,paraId:43,tocIndex:10},{value:"\u4EE5\u4E0A\u4EE3\u8868",paraId:44,tocIndex:10},{value:"computed",paraId:44,tocIndex:10},{value:"\u51FD\u6570\u58F0\u660E\u7684",paraId:44,tocIndex:10},{value:"validate",paraId:44,tocIndex:10},{value:"\u5C5E\u6027\u662F\u4E00\u4E2A\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u4F9D\u8D56\u4E8E",paraId:44,tocIndex:10},{value:"value",paraId:44,tocIndex:10},{value:"\u503C\uFF0C\u5F53",paraId:44,tocIndex:10},{value:"ip.value",paraId:44,tocIndex:10},{value:"\u503C\u53D8\u5316\u65F6\u4F1A\u81EA\u52A8\u6267\u884C",paraId:44,tocIndex:10},{value:"validate",paraId:44,tocIndex:10},{value:"\u51FD\u6570\u3002\u540C\u65F6\u8BBE\u5B9A\u4E86\u6267\u884C\u8D85\u65F6\u9650\u5236\u3002",paraId:44,tocIndex:10},{value:"\u66F4\u591A\u7684\u5F02\u6B65\u9AD8\u7EA7\u63A7\u5236\u529F\u80FD\u8BF7\u53C2\u8003\u540E\u7EED\u5B57\u6BB5\u9AD8\u7EA7\u63A7\u5236\u4EE5\u53CA",paraId:45,tocIndex:10},{value:"@speedform/reactive",paraId:46,tocIndex:10},{value:"\u3002",paraId:45,tocIndex:10},{value:"SpeedForm",paraId:47,tocIndex:11},{value:"\u8868\u5355\u4E2D\u7684\u6BCF\u4E2A\u5B57\u6BB5\u5747\u53EF\u4EE5\u58F0\u660E\u4EE5\u4E0B\u5C5E\u6027\uFF1A",paraId:47,tocIndex:11},{value:`{
  value        : any                   // \u5B57\u6BB5\u503C
  initial?     : any                   // \u9ED8\u8BA4\u503C
  oldValue?    : any                   // \u539F\u59CB\u503C 
  title?       : string;               // \u6807\u9898
  help?        : string;               // \u63D0\u793A\u4FE1\u606F
  placeholder? : string;               // \u5360\u4F4D\u7B26
  required?    : boolean;              // \u662F\u5426\u5FC5\u586B
  readonly?    : boolean;              // \u662F\u5426\u53EA\u8BFB
  visible?     : boolean;              // \u662F\u5426\u53EF\u89C1
  enable?      : boolean               // \u662F\u5426\u53EF\u7528
  dirty?       : boolean               // \u6570\u636E\u5DF2\u7ECF\u66F4\u65B0\u8FC7
  validate?    : boolean;              // \u9A8C\u8BC1
  select?      : any[]                 // \u679A\u4E3E\u503C
}  
`,paraId:48,tocIndex:11},{value:"\u8BF4\u660E",paraId:49,tocIndex:11},{value:"value",paraId:50,tocIndex:11},{value:"\uFF1A\u5FC5\u987B\u7684\uFF0C\u4EE3\u8868\u5B57\u6BB5\u7684\u503C\u3002",paraId:50,tocIndex:11},{value:"\u5176\u4ED6\u5B57\u6BB5\u5C5E\u6027\u5747\u662F\u53EF\u9009\u7684",paraId:50,tocIndex:11},{value:"\u6240\u6709\u5B57\u6BB5\u5C5E\u6027\u5747\u53EF\u4EE5\u662F\u4E00\u4E2A\u540C\u6B65\u6216\u5F02\u6B65\u51FD\u6570\u6216\u662F\u901A\u8FC7",paraId:50,tocIndex:11},{value:"computed",paraId:50,tocIndex:11},{value:"\u5305\u88C5\u7684\u8BA1\u7B97\u5C5E\u6027\uFF0C\u7528\u6765\u52A8\u6001\u8BA1\u7B97\u5B57\u6BB5\u7684\u5C5E\u6027\u503C\u3002",paraId:50,tocIndex:11},{value:"\u4EE5\u4E0B\u662F\u5B8C\u6574\u7684\u8868\u5355\u58F0\u660E:",paraId:51,tocIndex:12},{value:`import { computed,ComputedScopeRef } from "@speedform/reactive";
import { createForm } from "@speedform/core";
import { delay } from "speedform-docs/utils";
import validator from "validator";

export const schema = {
	title: "\u7F51\u7EDC\u914D\u7F6E",
	fields: {
		title: {
			value: "React-Helux-Form",
			placeholder: "\u8F93\u5165\u7F51\u7EDC\u914D\u7F6E\u540D\u79F0",
			title: "\u7F51\u7EDC\u540D\u79F0",
			validate: (value: string) => value.length > 3,
		},
		interface: {
			value: "wifi",
			title: "\u7F51\u5361\u7C7B\u578B",
			select: () => {
				return [
					{ value: "wifi", title: "\u65E0\u7EBF\u7F51\u5361" },
					{ value: "ethernet", title: "\u6709\u7EBF\u7F51\u5361" },
				];
			},
		},
		ip: {
			value: "1.1.1.1",
			title: "IP\u5730\u5740",
			validate: computed(async (value: any) => {
				await delay(2000);
				return validator.isIP(String(value));
			},[],{async:true}),
		},
		gateway: {
			value: "1.1.1.1",
			title: "\u7F51\u5173\u5730\u5740",
			validate: (value: any) => validator.isIP(value),
		},
		dhcp: {
			enable: {
				title: "\u81EA\u52A8\u83B7\u53D6IP\u5730\u5740",
				value: true,
			},
			start: {
				title: "\u8D77\u59CB\u5730\u5740",
				value: "192.168.1.1",
				enable: computed<boolean>((dhcp: any) => {
						return dhcp.enable.value;
					},{
						scope: ComputedScopeRef.Parent
					}
				),
				validate: (value: any) => validator.isIP(value),
			},
			end: {
				title: "\u7ED3\u675F\u5730\u5740",
				value: "192.168.1.100",
				// \u5C06visible\u7684context\u6307\u5411\u7236\u5BF9\u8C61\u5373dhcp
				enable: computed<boolean>((fields: any) => {
						return fields.dhcp.enable.value;
					},{
						scope: ComputedScopeRef.Root 
					}
				),
				validate: (value: any) => validator.isIP(value),
			},
		},
		wifi: {
			title: "\u65E0\u7EBF\u914D\u7F6E",
			visible: (net: any) => (net as NetworkType).interface.value === "wifi",
			ssid: {
				value: "fast",
				placeholder: "\u65E0\u7EBF\u7F51\u7EDC",
				validate: (value: string) => value.length > 3,
			},
			password: {
				value: "123",
				placeholder: "\u8F93\u5165\u65E0\u7EBF\u5BC6\u7801",
				help: "\u5BC6\u7801\u957F\u5EA6\u5E94\u4E0D\u5C0F\u4E8E6\u4F4D",
				enable: (net: any) => (net as NetworkType).interface.value === "wifi",
				validate: (value: string) => value.length >= 6,
			}
    }
  }
}
`,paraId:52,tocIndex:12},{value:"\u8BF4\u660E",paraId:53,tocIndex:12},{value:"fields",paraId:54,tocIndex:12},{value:"\u5C5E\u6027\u7528\u6765\u58F0\u660E\u8868\u5355\u7684\u6240\u6709\u5B57\u6BB5\u3002",paraId:54,tocIndex:12},{value:"\u8BE5\u8868\u5355\u7684\u5B57\u6BB5\u5305\u62EC",paraId:54,tocIndex:12},{value:"title",paraId:54,tocIndex:12},{value:"\u3001",paraId:54,tocIndex:12},{value:"interface",paraId:54,tocIndex:12},{value:"\u3001",paraId:54,tocIndex:12},{value:"ip",paraId:54,tocIndex:12},{value:"\u3001",paraId:54,tocIndex:12},{value:"gateway",paraId:54,tocIndex:12},{value:"\u3001",paraId:54,tocIndex:12},{value:"dhcp",paraId:54,tocIndex:12},{value:"\u3001",paraId:54,tocIndex:12},{value:"wifi",paraId:54,tocIndex:12},{value:"\u7B49\u5B57\u6BB5\u3002",paraId:54,tocIndex:12},{value:"\u6BCF\u4E2A\u5B57\u6BB5\u5747\u53EF\u4EE5\u58F0\u660E",paraId:54,tocIndex:12},{value:"value",paraId:54,tocIndex:12},{value:"\u3001",paraId:54,tocIndex:12},{value:"title",paraId:54,tocIndex:12},{value:"\u3001",paraId:54,tocIndex:12},{value:"placeholder",paraId:54,tocIndex:12},{value:"\u3001",paraId:54,tocIndex:12},{value:"validate",paraId:54,tocIndex:12},{value:"\u7B49\u5C5E\u6027\u3002",paraId:54,tocIndex:12},{value:"dhcp",paraId:54,tocIndex:12},{value:"\u3001",paraId:54,tocIndex:12},{value:"wifi",paraId:54,tocIndex:12},{value:"\u5B57\u6BB5\u662F\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5305\u542B",paraId:54,tocIndex:12},{value:"enable",paraId:54,tocIndex:12},{value:"\u3001",paraId:54,tocIndex:12},{value:"start",paraId:54,tocIndex:12},{value:"\u3001",paraId:54,tocIndex:12},{value:"end",paraId:54,tocIndex:12},{value:"\u3001",paraId:54,tocIndex:12},{value:"ssid",paraId:54,tocIndex:12},{value:"\u3001",paraId:54,tocIndex:12},{value:"password",paraId:54,tocIndex:12},{value:"\u7B49\u5B50\u5B57\u6BB5\u3002",paraId:54,tocIndex:12},{value:"wifi",paraId:54,tocIndex:12},{value:"\u5B57\u6BB5\u7684",paraId:54,tocIndex:12},{value:"visible",paraId:54,tocIndex:12},{value:"\u5C5E\u6027\u662F\u4E00\u4E2A\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u7528\u6765\u63A7\u5236",paraId:54,tocIndex:12},{value:"wifi",paraId:54,tocIndex:12},{value:"\u5B57\u6BB5\u7EC4\u7684\u663E\u793A\u3002",paraId:54,tocIndex:12},{value:"\u5728",paraId:55,tocIndex:13},{value:"SpeedForm",paraId:55,tocIndex:13},{value:"\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528",paraId:55,tocIndex:13},{value:"createForm",paraId:55,tocIndex:13},{value:"\u51FD\u6570\u6765\u521B\u5EFA\u8868\u5355\u5BF9\u8C61\u3002",paraId:55,tocIndex:13},{value:`// network/schema.ts
import { createForm } from '@speedform/core'
const schema = {...}  // \u5B8C\u6574\u58F0\u660E\u89C1\u4E0B\u4F8B
const Network = createForm<typeof networkSchema>(networkSchema,{debug:true})
export default Network

`,paraId:56,tocIndex:13},{value:"\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528",paraId:57,tocIndex:14},{value:"Network",paraId:57,tocIndex:14},{value:"\u8868\u5355\u5BF9\u8C61\u6765\u6E32\u67D3\u8868\u5355\u3002",paraId:57,tocIndex:14},{value:"@speedform/core",paraId:58},{value:"\u662F\u4E00\u4E2A",paraId:58},{value:"headless",paraId:58},{value:"\u7EC4\u4EF6\u5E93\uFF0C\u53EA\u63D0\u4F9B\u8868\u5355\u903B\u8F91\u63A7\u5236\uFF0C\u4E0D\u8D1F\u8D23\u5177\u4F53\u7684\u6E32\u67D3\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u672C\u4F8B\u4E2D\u6211\u4EEC\u4F7F\u7528\u6807\u51C6\u7684html\u7EC4\u4EF6\u6765\u6E32\u67D3\u8868\u5355\u3002\u7528\u6237\u53EF\u4EE5\u5F88\u5BB9\u6613\u5C31\u5F15\u5165\u5176\u4ED6UI\u7EC4\u4EF6\u5E93\u6765\u8FDB\u884C\u6E32\u67D3\u3002",paraId:58},{value:"\u901A\u8FC7\u8868\u5355\u5BF9\u8C61\u7684",paraId:59,tocIndex:15},{value:"Field",paraId:59,tocIndex:15},{value:"\u7EC4\u4EF6\u7528\u6765\u6E32\u67D3\u8868\u5355\u5B57\u6BB5\uFF0C\u5982\u4E0A\u4F8B\u4E2D\u7684",paraId:59,tocIndex:15},{value:"Network.Field",paraId:59,tocIndex:15},{value:"\u3002",paraId:59,tocIndex:15},{value:`
import Network from './network/schema'

export default ()=>{

  return (
    <Network.Field<typeof Network.fields.title> name="Network.fields.title">
      {({name,value,required,visible,help,validate,enable,initial,sync,update})=>(
        // \u6B64\u5904\u8D1F\u8D23\u6E32\u67D3\u5B57\u6BB5UI\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EFB\u610FHTML\u5143\u7D20\u8FDB\u884C\u6E32\u67D3\u5B57\u6BB5\u5185\u5BB9
        return <Input name={name} value={value} onChange={sync()}/>
      )}
    </Network.Field>
  )
}
`,paraId:60,tocIndex:15},{value:"\u8BF4\u660E\uFF1A",paraId:61,tocIndex:15},{value:"Network.Field",paraId:62,tocIndex:15},{value:"\u7EC4\u4EF6\u7528\u6765\u63A7\u5236\u5982\u4F55\u8FDB\u884C\u8868\u5355\u5B57\u6BB5\u7684\u6E32\u67D3\u3002",paraId:62,tocIndex:15},{value:"Network.Field",paraId:62,tocIndex:15},{value:"\u7EC4\u4EF6\u7684",paraId:62,tocIndex:15},{value:"name",paraId:62,tocIndex:15},{value:"\u5C5E\u6027\u7528\u6765\u6307\u5B9A\u5B57\u6BB5\u7684\u8DEF\u5F84,\u53EF\u4EE5\u662F\u5D4C\u5957\u8DEF\u5F84\uFF0C\u5982",paraId:62,tocIndex:15},{value:"Network.fields.wifi.ssid",paraId:62,tocIndex:15},{value:"\u3002",paraId:62,tocIndex:15},{value:"\u53EF\u4EE5\u4E3A",paraId:62,tocIndex:15},{value:"Network.Field",paraId:62,tocIndex:15},{value:"\u7EC4\u4EF6\u6307\u5B9A\u7C7B\u578B\uFF0C\u4EE5\u4FBF\u5728",paraId:62,tocIndex:15},{value:"children",paraId:62,tocIndex:15},{value:"\u5C5E\u6027\u4E2D\u83B7\u5F97\u5B57\u6BB5\u7684\u7C7B\u578B\u63D0\u793A\u3002",paraId:62,tocIndex:15},{value:"Network.Field",paraId:62,tocIndex:15},{value:"\u7EC4\u4EF6\u7684",paraId:62,tocIndex:15},{value:"children",paraId:62,tocIndex:15},{value:"\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F20\u5165",paraId:62,tocIndex:15},{value:"props",paraId:62,tocIndex:15},{value:"\u662F\u4E00\u4E2A\u5B57\u6BB5\u7684\u63A7\u5236\u5C5E\u6027\uFF0C\u5305\u62EC",paraId:62,tocIndex:15},{value:"value",paraId:62,tocIndex:15},{value:"\u3001",paraId:62,tocIndex:15},{value:"required",paraId:62,tocIndex:15},{value:"\u3001",paraId:62,tocIndex:15},{value:"visible",paraId:62,tocIndex:15},{value:"\u3001",paraId:62,tocIndex:15},{value:"validate",paraId:62,tocIndex:15},{value:"\u3001",paraId:62,tocIndex:15},{value:"enable",paraId:62,tocIndex:15},{value:"\u3001",paraId:62,tocIndex:15},{value:"initial",paraId:62,tocIndex:15},{value:"\u3001",paraId:62,tocIndex:15},{value:"sync",paraId:62,tocIndex:15},{value:"\u7B49\u3002\u5E76\u4E14\u8FD9\u4E9B\u5B57\u6BB5\u63A7\u5236\u5C5E\u6027\u5747\u53EF\u4EE5\u662F\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u503C\u6765\u81EA\u5176\u4ED6\u5B57\u6BB5\u7684\u6D3E\u751F\u8BA1\u7B97\u7ED3\u679C\u3002",paraId:62,tocIndex:15},{value:"sync",paraId:62,tocIndex:15},{value:"\u51FD\u6570\u7528\u6765\u540C\u6B65\u5B57\u6BB5\u7684\u503C\u3002",paraId:62,tocIndex:15},{value:"\u5F53\u9700\u8981\u8FDB\u884C\u6807\u51C6\u8868\u5355\u63D0\u4EA4\u65F6\uFF0C\u9700\u8981\u4F7F\u7528\u4E00\u4E2A",paraId:63,tocIndex:16},{value:"Form",paraId:63,tocIndex:16},{value:"\u7EC4\u4EF6\u6765\u5305\u88F9\u6240\u6709\u7684",paraId:63,tocIndex:16},{value:"Field",paraId:63,tocIndex:16},{value:"\u7EC4\u4EF6\u3002",paraId:63,tocIndex:16},{value:`
<Network.Form>
    {/* \u58F0\u660E\u6240\u6709\u9700\u8981\u7684\u5B57\u6BB5 */}
    <Network.Field<typeof Network.fields.title> name="Network.fields.title">
      {({name,value,required,visible,validate,enable,initial,sync})=>(
        // \u6B64\u5904\u8D1F\u8D23\u6E32\u67D3\u5B57\u6BB5\u7684\u5177\u4F53\u5185\u5BB9
      )}
    </Network.Field>    
    <Network.Field>....</Network.Field>
    <Network.Field>....</Network.Field>
    <Network.Field>....</Network.Field>
</Network.Form>

`,paraId:64,tocIndex:16},{value:"\u8BF4\u660E\uFF1A",paraId:65,tocIndex:16},{value:"Network.Form",paraId:66,tocIndex:16},{value:"\u8868\u5355\u7EC4\u4EF6\u4EC5\u5728\u8FDB\u884C",paraId:66,tocIndex:16},{value:"\u6807\u51C6\u8868\u5355",paraId:66,tocIndex:16},{value:"\u63D0\u4EA4\u65F6\u4F7F\u7528\u3002",paraId:66,tocIndex:16},{value:"SpeedForm",paraId:66,tocIndex:16},{value:"\u652F\u6301\u8FDB\u884C",paraId:66,tocIndex:16},{value:"API",paraId:66,tocIndex:16},{value:"\u65B9\u5F0F\u91C7\u7528",paraId:66,tocIndex:16},{value:"AJAX",paraId:66,tocIndex:16},{value:"\u63D0\u4EA4\uFF0C\u6B64\u65F6\u53EF\u4EE5\u4E0D\u4F7F\u7528",paraId:66,tocIndex:16},{value:"Form",paraId:66,tocIndex:16},{value:"\u7EC4\u4EF6\u3002",paraId:66,tocIndex:16},{value:"\u6700\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u6DFB\u52A0",paraId:67,tocIndex:17},{value:"Network.Submit",paraId:67,tocIndex:17},{value:"\u7EC4\u4EF6\u6765\u8FDB\u884C\u63D0\u4EA4\u64CD\u4F5C\u3002",paraId:67,tocIndex:17},{value:"SpeedForm",paraId:67,tocIndex:17},{value:"\u652F\u6301\u6807\u51C6\u63D0\u4EA4\u6216",paraId:67,tocIndex:17},{value:"AJAX/API",paraId:67,tocIndex:17},{value:"\u65B9\u5F0F\u63D0\u4EA4\u8868\u5355\u3002",paraId:67,tocIndex:17},{value:"\u6807\u51C6\u63D0\u4EA4",paraId:68,tocIndex:18},{value:`<Network.Form action="/api/settings" method="post">
    {/* \u58F0\u660E\u6240\u6709\u9700\u8981\u7684\u5B57\u6BB5 */}
    <Network.Field<typeof Network.fields.title> name="Network.fields.title">
      {({name,value,required,visible,validate,enable,initial,sync})=>(
        // \u6B64\u5904\u8D1F\u8D23\u6E32\u67D3\u5B57\u6BB5\u7684\u5177\u4F53\u5185\u5BB9
      )}
    </Network.Field>    
    {/* \u63D0\u4F9B\u9ED8\u8BA4\u7684\u63D0\u4EA4\u6309\u94AE */}
    <Network.Submit/>
    {/* \u9ED8\u8BA4\u7684\u91CD\u7F6E\u6309\u94AE */}
    <Network.Reset/>
</Network.Form>

`,paraId:69,tocIndex:18},{value:"\u8BF4\u660E:",paraId:70,tocIndex:18},{value:"\u6807\u51C6\u63D0\u4EA4\u65F6\uFF0C\u9700\u8981\u5C06\u6240\u6709\u5B57\u6BB5\u5305\u88F9\u5728",paraId:71,tocIndex:18},{value:"Network.Form",paraId:71,tocIndex:18},{value:"\u7EC4\u4EF6\u5185\u90E8\u3002",paraId:71,tocIndex:18},{value:"Network.Submit",paraId:71,tocIndex:18},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E00\u4E2A\u9ED8\u8BA4\u7684\u63D0\u4EA4\u6309\u94AE\uFF0C\u7528\u6765\u63A7\u5236\u8868\u5355\u7684\u63D0\u4EA4\u64CD\u4F5C\u903B\u8F91\uFF0C\u4F46\u4E0D\u8D1F\u8D23\u5177\u4F53\u7684UI\u6E32\u67D3\u3002",paraId:71,tocIndex:18},{value:"\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4F1A\u4F7F\u7528",paraId:72,tocIndex:18},{value:"Network.Submit",paraId:72,tocIndex:18},{value:"\u7EC4\u4EF6\u7684",paraId:72,tocIndex:18},{value:"children",paraId:72,tocIndex:18},{value:"\u5C5E\u6027\u6765\u81EA\u5B9A\u4E49\u63D0\u4EA4\u6309\u94AE\u7684UI\u6E32\u67D3\u3002\u6BD5\u7ADF\u9ED8\u8BA4\u7684\u63D0\u4EA4\u6309\u94AE\u6837\u5F0F\u4E0D\u592A\u7B26\u5408\u8981\u6C42",paraId:72,tocIndex:18},{value:`<Network.Form url="api/settings">
    {/* \u58F0\u660E\u6240\u6709\u9700\u8981\u7684\u5B57\u6BB5 */}
    <Network.Field>...</Network.Field>    
    <Network.Field>...</Network.Field>    
    <Network.Field>...</Network.Field>    
    {/* \u63D0\u4F9B\u9ED8\u8BA4\u7684\u63D0\u4EA4\u6309\u94AE */}
    <Network.Submit>
      {({title,dirty,validate})=>(
        <button disabled={!dirty || !validate}>{title}</button>
      )}
    </Network.Submit>
</Network.Form>
`,paraId:73,tocIndex:18},{value:"\u8BF4\u660E",paraId:74,tocIndex:18},{value:":",paraId:74,tocIndex:18},{value:"Network.Submit",paraId:75,tocIndex:18},{value:"\u7EC4\u4EF6\u7684",paraId:75,tocIndex:18},{value:"children",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u6E32\u67D3\u63D0\u4EA4\u6309\u94AE\u7684\u5177\u4F53\u5185\u5BB9\uFF0C\u4F20\u5165",paraId:75,tocIndex:18},{value:"props",paraId:75,tocIndex:18},{value:"\u662F\u4E00\u4E2A\u63D0\u4EA4\u6309\u94AE\u7684\u63A7\u5236\u5C5E\u6027\uFF0C\u5305\u62EC",paraId:75,tocIndex:18},{value:"title",paraId:75,tocIndex:18},{value:"\u3001",paraId:75,tocIndex:18},{value:"dirty",paraId:75,tocIndex:18},{value:"\u3001",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u7B49\u3002",paraId:75,tocIndex:18},{value:"title",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u5B9A\u63D0\u4EA4\u6309\u94AE\u7684\u6807\u9898\u3002",paraId:75,tocIndex:18},{value:"dirty",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u793A\u8868\u5355\u662F\u5426\u5DF2\u7ECF\u88AB\u7F16\u8F91\u8FC7\u3002",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u793A\u8868\u5355\u662F\u5426\u6709\u6548\uFF0C\u5176\u503C\u662F\u7531\u6240\u6709\u5B57\u6BB5\u7684",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u8BA1\u7B97\u5C5E\u6027\u7684\u7ED3\u679C\u51B3\u5B9A\u7684\u3002",paraId:75,tocIndex:18},{value:"",paraId:76,tocIndex:19},{value:"",paraId:77,tocIndex:20},{value:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u7F51\u7EDC\u914D\u7F6E\u8868\u5355",paraId:78,tocIndex:21}]},21803:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(23752);const n=[{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u5F53\u6240\u4F9D\u8D56\u7684\u72B6\u6001\u503C\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u3002",paraId:0,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A",paraId:1,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\u6216\u8005\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A",paraId:2,tocIndex:0},{value:"Promise",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\u3002",paraId:2,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u7684\u5FC5\u987B\u663E\u5F0F\u6307\u5B9A\u4F9D\u8D56,\u4E0D\u80FD\u50CF\u540C\u6B65\u8BA1\u7B97\u4E00\u6837\u81EA\u52A8\u6536\u96C6\u4F9D\u8D56\u3002",paraId:2,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u4F1A\u88AB\u66FF\u6362\u4E3A",paraId:2,tocIndex:0},{value:"AsyncComputedObject",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\uFF0C\u901A\u8FC7\u8BE5\u5BF9\u8C61\u53EF\u4EE5\u8BFB\u53D6\u5230\u5F02\u6B65\u8BA1\u7B97\u7684\u8FDB\u5EA6\u4EE5\u53CA\u7ED3\u679C\u7B49\u3002",paraId:2,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u4F7F\u7528",paraId:3,tocIndex:1},{value:"computed",paraId:3,tocIndex:1},{value:"\u8FDB\u884C\u58F0\u660E\uFF0C\u65B9\u5F0F\u5982\u4E0B\uFF1A",paraId:3,tocIndex:1},{value:"\u4EE5\u4E0A",paraId:4},{value:"fullName",paraId:4},{value:"\u662F\u4E00\u4E2A\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u4F9D\u8D56\u4E8E",paraId:4},{value:"firstName",paraId:4},{value:"\u548C",paraId:4},{value:"lastName",paraId:4},{value:"\u3002",paraId:4},{value:"computed",paraId:4},{value:"\u51FD\u6570\u7528\u6765\u5C01\u88C5\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\uFF0C\u7528\u6765\u6307\u5B9A\u4F9D\u8D56\u7684\u72B6\u6001\u8DEF\u5F84\u3002",paraId:4},{value:"\u4F9D\u8D56\u53EF\u4EE5\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u6216\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4F7F\u7528",paraId:4},{value:".",paraId:4},{value:"\u4F5C\u4E3A\u8DEF\u5F84\u5206\u5272\u7B26\uFF0C",paraId:4},{value:"./",paraId:4},{value:"\u6307\u7684\u662F\u5F53\u524D\u5BF9\u8C61\uFF0C",paraId:4},{value:"../",paraId:4},{value:"\u6307\u7684\u662F\u7236\u5BF9\u8C61\u3002",paraId:4},{value:"\u5F53\u6211\u4EEC\u66F4\u65B0",paraId:4},{value:"firstName",paraId:4},{value:"\u6216",paraId:4},{value:"lastName",paraId:4},{value:"\u65F6\uFF0C",paraId:4},{value:"fullName",paraId:4},{value:"\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u3002",paraId:4},{value:"\u8BA1\u7B97\u5C5E\u6027\u7684\u7ED3\u679C\u4FDD\u5B58\u5728",paraId:4},{value:"state.user.fullName.result",paraId:4},{value:"\u4E2D\u3002",paraId:4},{value:"\u5F53\u8BA1\u7B97\u5C5E\u6027\u6B63\u5728\u8BA1\u7B97\u65F6\uFF0C",paraId:4},{value:"state.user.fullName.loading",paraId:4},{value:"\u4E3A",paraId:4},{value:"true",paraId:4},{value:"\u3002\u8BA1\u7B97\u5B8C\u6210\u540E\uFF0C",paraId:4},{value:"state.user.fullName.loading",paraId:4},{value:"\u4E3A",paraId:4},{value:"false",paraId:4},{value:"\u3002",paraId:4},{value:"\u4E0B\u9762\u662F\u4E00\u4E2A\u66F4\u52A0\u5B8C\u6574\u7684\u4F8B\u5B50\uFF1A",paraId:5},{value:"\u8BF4\u660E",paraId:6},{value:"\u4F7F\u7528",paraId:7},{value:"computed",paraId:7},{value:"\u51FD\u6570\u58F0\u660E\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C",paraId:7},{value:"computed",paraId:7},{value:`\u53C2\u6570\uFF1A
`,paraId:7},{value:"\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u6216\u8005\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A",paraId:8},{value:"Promise",paraId:8},{value:"\u5BF9\u8C61,\u53EF\u4EE5\u5728\u6B64\u51FD\u6570\u4E2D\u7F16\u5199\u4E1A\u52A1\u903B\u8F91\uFF0C\u5728\u672C\u4F8B\u4E2D\u4ECE",paraId:8},{value:"github",paraId:8},{value:"\u52A0\u8F7D\u9879\u76EE\u5217\u8868\u3002",paraId:8},{value:"\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\uFF0C\u7528\u6765\u6307\u5B9A\u4F9D\u8D56\u7684\u72B6\u6001\u8DEF\u5F84\u3002\u53EF\u4EE5\u6307\u5B9A\u591A\u4E2A\u4F9D\u8D56\u8DEF\u5F84\u3002",paraId:8},{value:"\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A",paraId:8},{value:"ComputedOptions",paraId:8},{value:"\u5BF9\u8C61\uFF0C\u7528\u6765\u6307\u5B9A\u8BA1\u7B97\u5C5E\u6027\u7684\u4E00\u4E9B\u9009\u9879\u3002",paraId:8},{value:"\u91CD\u70B9\uFF1A\u7ECF\u8FC7",paraId:9},{value:"createStore",paraId:9},{value:"\u5904\u7406\u540E\uFF0C",paraId:9},{value:"state.user.projects",paraId:9},{value:"\u8F6C\u6362\u4E3A\u4E00\u4E2A",paraId:9},{value:"AsyncComputedObject",paraId:9},{value:"\u5BF9\u8C61\uFF0C\u901A\u8FC7\u8BE5\u5BF9\u8C61\u53EF\u4EE5\u8BFB\u53D6\u5230\u5F02\u6B65\u8BA1\u7B97\u7684\u8FDB\u5EA6\u4EE5\u53CA\u7ED3\u679C\u7B49\u4FE1\u606F\u3002",paraId:9},{value:"\u5728\u4E0A\u4F8B\u4E2D",paraId:10},{value:"state.user.projects",paraId:10},{value:"\u503C\u4E3A",paraId:10},{value:`  {
    "loading":false,  // \u662F\u5426\u6B63\u5728\u8BA1\u7B97
    "timeout":0,
    "retry":0,
    "error":null,
    "progress":0,
    "result":/**\u6B64\u5904\u5C31\u662F\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570\u7684\u8FD4\u56DE\u503C**/
  }
`,paraId:11},{value:"computed",paraId:12,tocIndex:2},{value:"\u51FD\u6570\u7528\u6765\u58F0\u660E\u4E00\u4E2A\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u6216\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u7B7E\u540D\u5982\u4E0B\uFF1A",paraId:12,tocIndex:2},{value:`// \u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027
function computed<R = any,ExtraAttrs extends Dict = {}>( 
  getter: AsyncComputedGetter<R>,
  depends?:ComputedDepends,
  options?: ComputedOptions<R,ExtraAttrs>): ComputedDescriptor<R & ExtraAttrs>;

// \u4E5F\u53EF\u4EE5\u7528\u6765\u58F0\u660E\u4E00\u4E2A\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u6B64\u65F6\u4E0D\u9700\u8981\u6307\u5B9A\`depends\`\u53C2\u6570

export function computed<R = any,ExtraAttrs extends Dict = {}>( 
  getter: ComputedGetter<R>, 
  options?: ComputedOptions<R,ExtraAttrs>): R

`,paraId:13,tocIndex:2},{value:"computed\u652F\u6301\u4E09\u4E2A\u53C2\u6570\uFF1A",paraId:14,tocIndex:2},{value:"getter",paraId:15,tocIndex:2},{value:"\uFF1A\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570\uFF0C\u6216\u8005\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A",paraId:15,tocIndex:2},{value:"Promise",paraId:15,tocIndex:2},{value:"\u5BF9\u8C61\u3002",paraId:15,tocIndex:2},{value:"depends",paraId:15,tocIndex:2},{value:"\uFF1A\u53EF\u9009\uFF0C\u4F9D\u8D56\u6536\u96C6\uFF0C\u7528\u6765\u6307\u5B9A\u4F9D\u8D56\u7684\u72B6\u6001\u8DEF\u5F84\u3002\u5F53\u7528\u6765\u58F0\u660E\u540C\u6B65\u8BA1\u7B97\u65F6\u4E0D\u9700\u8981\u6307\u5B9A\u3002",paraId:15,tocIndex:2},{value:"options",paraId:15,tocIndex:2},{value:"\uFF1A\u53EF\u9009\uFF0C\u8BA1\u7B97\u5C5E\u6027\u7684\u4E00\u4E9B\u9009\u9879\u3002",paraId:15,tocIndex:2},{value:"computed\u652F\u63012\u6CDB\u578B\u7C7B\u578B\uFF1A",paraId:16,tocIndex:2},{value:"R",paraId:17,tocIndex:2},{value:"\uFF1A\u8BA1\u7B97\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u3002",paraId:17,tocIndex:2},{value:"ExtraAttrs",paraId:17,tocIndex:2},{value:"\uFF1A\u989D\u5916\u5C5E\u6027\u7C7B\u578B\uFF0C\u88AB\u5408\u5E76\u5230",paraId:17,tocIndex:2},{value:"AsyncComputedObject",paraId:17,tocIndex:2},{value:"\u7684\u989D\u5916\u5C5E\u6027\u3002",paraId:17,tocIndex:2},{value:"computed",paraId:18,tocIndex:3},{value:"\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5F53\u4F9D\u8D56\u7684\u72B6\u6001\u503C\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u7684\u51FD\u6570\uFF0C\u53EF\u4EE5\u662F\u540C\u6B65\u7684\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5F02\u6B65\u7684\uFF0C\u5176\u7B7E\u540D\u5982\u4E0B\uFF1A",paraId:18,tocIndex:3},{value:"\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570",paraId:19,tocIndex:3},{value:`type AsyncComputedGetter<R = any> = (scope: any, options: AsyncComputedGetterOptions) => R | Promise<R>;
`,paraId:20,tocIndex:3},{value:"\u6CE8\u610F\uFF1A",paraId:21,tocIndex:3},{value:"computed",paraId:21,tocIndex:3},{value:"\u5185\u90E8\u4F7F\u7528",paraId:21,tocIndex:3},{value:"isAsync",paraId:21,tocIndex:3},{value:"\u6765\u5224\u65AD\u4F20\u5165\u7684\u662F\u5426\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u4EE5\u91C7\u53D6\u4E0D\u540C\u7684\u5904\u7406\u903B\u8F91\u3002\u7531\u4E8E\u5728\u67D0\u4E2A\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E2A\u5224\u65AD\u53EF\u80FD\u4F1A\u6709\u8BEF\uFF0C\u9700\u8981\u663E\u5F0F\u6307\u5B9A",paraId:21,tocIndex:3},{value:"options.async=true",paraId:21,tocIndex:3},{value:"\u3002",paraId:21,tocIndex:3},{value:"\u5982\u679C\u4F20\u5165\u7684\u662F\u4E00\u4E2A\u8FD4\u56DE",paraId:22,tocIndex:3},{value:"Promise",paraId:22,tocIndex:3},{value:"\u7684\u540C\u6B65\u51FD\u6570\uFF0C\u9700\u8981\u663E\u5F0F\u6307\u5B9A",paraId:22,tocIndex:3},{value:"options.async=true",paraId:22,tocIndex:3},{value:"\uFF0C\u5426\u5219\u4F1A\u88AB\u8BA4\u4E3A\u662F\u540C\u6B65\u51FD\u6570\u3002",paraId:22,tocIndex:3},{value:"\u7531\u4E8E\u6709\u4F7F\u7528",paraId:23,tocIndex:3},{value:"babel",paraId:23,tocIndex:3},{value:"\u7B49\u8F6C\u8BD1\u4E3A",paraId:23,tocIndex:3},{value:"es5",paraId:23,tocIndex:3},{value:"\u7B49\u65F6\uFF0C\u5F02\u6B65\u51FD\u6570\u6709\u53EF\u80FD\u4F1A\u88AB\u8F6C\u8BD1\u4E3A\u540C\u6B65\u51FD\u6570\uFF0C\u6B64\u65F6\u9700\u8981\u4E5F\u663E\u5F0F\u6307\u5B9A",paraId:23,tocIndex:3},{value:"options.async=true",paraId:23,tocIndex:3},{value:"\u3002",paraId:23,tocIndex:3},{value:"\u540C\u6B65\u8BA1\u7B97\u51FD\u6570",paraId:24,tocIndex:3},{value:`export type ComputedGetter<R,Scope=any> = (scope: Scope) => Exclude<R,Promise<any>>
`,paraId:25,tocIndex:3},{value:"\u4E0D\u540C\u4E8E\u540C\u6B65\u8BA1\u7B97,\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u7684\u4F9D\u8D56\u6536\u96C6\u9700\u8981\u5728",paraId:26,tocIndex:4},{value:"computed",paraId:26,tocIndex:4},{value:"\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E2D\u624B\u52A8",paraId:26,tocIndex:4},{value:"\u663E\u5F0F\u6307\u5B9A",paraId:26,tocIndex:4},{value:".",paraId:26,tocIndex:4},{value:`export function computed<R = any,ExtraAttrs extends Dict = {}>( 
  getter: AsyncComputedGetter<R>,
  depends?:ComputedDepends,   // \u58F0\u660E\u4F9D\u8D56
  options?: ComputedOptions<R,ExtraAttrs>): ComputedDescriptor<R & ExtraAttrs>;
`,paraId:27,tocIndex:4},{value:"\u4F9D\u8D56\u53C2\u6570\u662F\u4E00\u4E2A",paraId:28,tocIndex:4},{value:"ComputedDepends",paraId:28,tocIndex:4},{value:"\u7C7B\u578B.",paraId:28,tocIndex:4},{value:`export type ComputedDepends =Array<string | Array<string>> 
`,paraId:29,tocIndex:4},{value:"\u4F9D\u8D56\u53D6\u503C\u662F\u63D0\u5B9A\u5176\u5728\u72B6\u6001\u5BF9\u8C61\u7684\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u5B57\u7B26\u4E32\u6570\u7EC4\u3002",paraId:30,tocIndex:4},{value:"\u7EDD\u5BF9\u8DEF\u5F84",paraId:31,tocIndex:4},{value:"\u5F53\u4F9D\u8D56\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\u65F6\uFF0C\u4EE3\u8868\u5176\u5728\u5BF9\u8C61\u4E2D\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002\u5982",paraId:32,tocIndex:4},{value:'depends=[["a","b","c"],["x",1]]',paraId:32,tocIndex:4},{value:"\u4EE3\u8868\u5176\u4F9D\u8D56\u5BF9\u8C61\u4E2D\u7684",paraId:32,tocIndex:4},{value:"a.b.c",paraId:32,tocIndex:4},{value:"\uFF0C\u548C",paraId:32,tocIndex:4},{value:"x.1(x\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4F9D\u8D56\u5176\u7B2C1\u9879)",paraId:32,tocIndex:4},{value:"\u540C\u6837\u7684\u4F9D\u8D56\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u5F62\u5F0F\uFF0C\u4F7F\u7528",paraId:33,tocIndex:4},{value:"/",paraId:33,tocIndex:4},{value:"\u4F5C\u4E3A\u5206\u5272\u7B26\uFF0C",paraId:33,tocIndex:4},{value:'depends=["a/b/c","x/1"]',paraId:33,tocIndex:4},{value:"\u76F8\u5BF9\u8DEF\u5F84",paraId:34,tocIndex:4},{value:"\u4F9D\u8D56\u4E5F\u53EF\u4EE5\u662F\u6307\u5B9A\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u5C31\u5982\u540C\u6587\u4EF6\u5939\u8DEF\u5F84\u4E00\u6837\uFF0C\u4F7F\u7528",paraId:35,tocIndex:4},{value:"./",paraId:35,tocIndex:4},{value:"\u4EE3\u8868\u5F53\u524D\u8DEF\u5F84\uFF0C",paraId:35,tocIndex:4},{value:"../",paraId:35,tocIndex:4},{value:"\u4EE3\u8868\u7236\u8DEF\u5F84\u3002",paraId:35,tocIndex:4},{value:"\u91CD\u70B9\u5728\u4E8E\u8FD9\u4E2A\u76F8\u5BF9\u662F\u76F8\u5BF9\u8C01\uFF0C\u6211\u4EEC\u7528\u4E00\u4E2A\u4F8B\u5B50\u6765\u8BF4\u660E\u3002",paraId:36,tocIndex:4},{value:"\u6CE8\u610F\uFF1A",paraId:37},{value:"\u76F8\u5BF9\u8DEF\u5F84\u7684\u76F8\u5BF9\u6307\u7684\u662F",paraId:38},{value:"\u76F8\u5BF9\u4F7F\u7528",paraId:38},{value:"computed",paraId:38},{value:"\u58F0\u660E\u7684\u6570\u636E\u9879\u6240\u5728\u7684\u5BF9\u8C61",paraId:38},{value:"\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528",paraId:38},{value:"computed",paraId:38},{value:"\u58F0\u660E\u7684\u6570\u636E\u9879",paraId:38},{value:"\u4F9D\u8D56\u5206\u5272\u7B26\u4F7F\u7528",paraId:38},{value:".",paraId:38},{value:`\u5982\u679C\u5F02\u6B65\u8BA1\u7B97\u6CA1\u6709\u6307\u5B9A\u4F9D\u8D56\uFF0C\u5219\u8BE5\u8BA1\u7B97\u5C5E\u6027\u4E0D\u4F1A\u88AB\u89E6\u53D1\u91CD\u65B0\u8BA1\u7B97\uFF0C\u4F1A\u5728\u63A7\u5236\u53F0\u7ED9\u51FA\u4E00\u4E2A\u8B66\u544A\uFF0C\u4E5F\u53EF\u4EE5\u624B\u52A8\u6267\u884C\u3002
`,paraId:38},{value:"computed",paraId:39,tocIndex:5},{value:"\u51FD\u6570\u7684\u7B2C\u4E09\u4E2A\u53C2\u6570\u7528\u6765\u6307\u5B9A\u8BA1\u7B97\u5C5E\u6027\u7684\u4E00\u4E9B\u9009\u9879\uFF0C\u5176\u7B7E\u540D\u5982\u4E0B\uFF1A",paraId:39,tocIndex:5},{value:`
  export interface ComputedOptions<Value=any,Extras extends Dict={}> {
    // \u8BA1\u7B97\u51FD\u6570\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5219\u81EA\u52A8\u751F\u6210\u4E00\u4E2A\u552F\u4E00\u6807\u8BC6
    id?      : string                          
    scope?   : ComputedScope               // \u8BA1\u7B97\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570
    initial? : Value
    // \u5F02\u6B65\u8BA1\u7B97,\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u901A\u8FC7typeof(fn)=="async function"\u6765\u5224\u65AD\u662F\u5426\u662F\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570
    // \u4F46\u662F\u5728\u8FD4\u56DEPromise\u6216\u8005Babel\u8F6C\u7801\u7B49\u60C5\u51B5\u4E0B\uFF0C\u5224\u65AD\u53EF\u80FD\u5931\u6548\u65F6\uFF0C\u9700\u8981\u624B\u52A8\u6307\u5B9Aasync=true
    async?:boolean
    // \u6307\u5B9A\u4F9D\u8D56\uFF0C\u4F8B\u5982["key","a.b.c"]\u7B49\u5F62\u5F0F
    depends?:ComputedDepends
    /**
     * \u6307\u5B9A\u8D85\u65F6\u65F6\u95F4\uFF0C\u5F53\u8BA1\u7B97\u51FD\u6570\u6267\u884C\u8D85\u8FC7\u6307\u5B9A\u65F6\u95F4\u540E\uFF0C\u4F1A\u81EA\u52A8\u8BBE\u7F6Eloading\u4E3Afalse
     * \u5982\u679Ctimeout\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5219\u7B2C\u4E00\u4E2A\u503C\u8868\u793A\u8D85\u65F6\u65F6\u95F4\uFF0C\u7B2C\u4E8C\u4E2A\u503C\u8868\u793A\u8D85\u65F6\u671F\u7684\u5012\u8BA1\u65F6\u95F4\u9694
     * \u4F8B\u5982\uFF1A[1000,10]\u8868\u793A1000ms\u4EE3\u88681s\u540E\u8D85\u65F6\u5E76\u7F6Eloading=false
     * 10\u4EE3\u8868setInterval(1000/100), \u6BCF\u6B21\u6267\u884C\u65F6-1\uFF0C\u76F4\u5230\u4E3A0\u65F6\u505C\u6B62
     * \u8FD9\u6837\u5C31\u53EF\u4EE5\u901A\u8FC7\u7ED1\u5B9Atimeout\u503C\u6765\u5B9E\u73B0\u5012\u8BA1\u65F6\u7684\u6548\u679C
     * \u5982\u679C\u8981\u5B9E\u73B060\u79D2\u5012\u8BA1\u65F6\uFF0C\u53EF\u4EE5\u8FD9\u6837\u5199\uFF1A[60*1000,60],\u8FD9\u6837value.timeout\u5C31\u4F1A\u4ECE60\u5F00\u59CB\u9012\u51CF
     */
    timeout?:number  | [number,number]
    // \u662F\u5426\u7ACB\u523B\u8BA1\u7B97\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF0C\u5728\u521B\u5EFA\u65F6\u9A6C\u4E0A\u8FDB\u884C\u8BA1\u7B97\uFF0C=false,\u5219\u53EA\u6709\u5728\u4F9D\u8D56\u53D8\u5316\u65F6\u624D\u4F1A\u6267\u884C\uFF0C\u6216\u8005\u624B\u52A8\u8C03\u7528reset\u65B9\u6CD5
    immediate?:boolean                     
    /**
     *  \u8BA1\u7B97\u51FD\u6570\u4E0D\u53EF\u91CD\u5165\uFF0C\u5373\u540C\u4E00\u4E2A\u8BA1\u7B97\u51FD\u6570\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u4E0D\u4F1A\u518D\u6B21\u6267\u884C   
     *  \u5982\u679C\u91CD\u5165\u65F6\uFF0C\u5219\u5728debug=true\u65F6\u4F1A\u5728\u63A7\u5236\u53F0\u6253\u5370\u51FA\u8B66\u544A\u4FE1\u606F
     */
    noReentry?:boolean
    /**
     * \u63D0\u4F9B\u4E00\u4E2A\u5F02\u6B65\u4FE1\u53F7\uFF0C\u7528\u6765\u4F20\u9012\u7ED9\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570\u4EE5\u4FBF\u53EF\u4EE5\u53D6\u6D88\u5F02\u6B65\u8BA1\u7B97
     */
    abortSignal?:()=>AbortSignal | null | void | undefined
    /**
     * \u5F53\u8BA1\u7B97\u51FD\u6570\u6267\u884C\u51FA\u9519\u65F6\u7684\u91CD\u8BD5\u6B21\u6570
     * 
     * retry:3  \u8868\u793A\u6700\u591A\u91CD\u8BD53\u6B21,\u91CD\u8BD5\u95F4\u9694\u4E3A0\uFF0C\u52A0\u4E0A\u7B2C1\u6B21\u6267\u884C\uFF0C\u603B\u5171\u6267\u884C4\u6B21
     * retry:[3,1000] \u8868\u793A\u6700\u591A\u91CD\u8BD53\u6B21\uFF0C\u91CD\u8BD5\u95F4\u9694\u4E3A1000ms\uFF0C\u52A0\u4E0A\u7B2C1\u6B21\u6267\u884C\uFF0C\u603B\u5171\u6267\u884C4\u6B21
     * 
     * \u91CD\u8BD5\u6570\u636E\u53EF\u4EE5\u901A\u8FC7AsyncComputedObject.retry\u83B7\u53D6
     * \u5F53\u9996\u6B21\u6267\u884C\u5931\u8D25\u65F6\u89E6\u53D1\u91CD\u8BD5\uFF0C\u6B64\u65F6AsyncComputedObject.retry=3\uFF0C\u7136\u540E\u6BCF\u6B21\u91CD\u8BD5-1\uFF0C\u76F4\u5230\u4E3A0\u65F6\u505C\u6B62\u91CD\u8BD5
     * \u53EF\u4EE5\u5728UI\u4E2D\u901A\u8FC7AsyncComputedObject.retry\u6765\u5B9E\u65F6\u663E\u793A\u91CD\u8BD5\u6B21\u6570
     * 
     */
    retry?:number | [number,number]
    /**
     * \u5F53\u6267\u884C\u8BA1\u7B97getter\u51FD\u6570\u51FA\u9519\u65F6\u7684\u56DE\u8C03
     */
    onError?:(e:Error)=>void              
    /**
     * \u4E3A\u8BE5\u8BA1\u7B97\u51FD\u6570\u6307\u5B9A\u4E00\u4E2A\u5206\u7EC4\u540D
     * 
     * \u6B64\u5C5E\u6027\u7528\u6765\u5C06\u8BA1\u7B97\u51FD\u6570\u5206\u7EC4\uFF0C\u6BD4\u5982\u4E00\u4E2Astore\u4E2D\u5177\u6709\u76F8\u540Cgroup\u7684\u8BA1\u7B97\u51FD\u6570
     * 
     * \u7136\u540E\u5C31\u53EF\u4EE5\u542F\u7528/\u5173\u95ED/\u8FD0\u884C\u6307\u5B9A\u5206\u7EC4\u7684\u8BA1\u7B97\u51FD\u6570
     * 
     * \u5728\u8868\u5355\u4E2D\u901A\u8FC7\u4E3A\u6240\u6709validate\u6307\u5B9A\u7EDF\u4E00\u7684\u5206\u7EC4\u540D\u79F0\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u7EDF\u4E00\u63A7\u5236\u8868\u5355\u7684\u9A8C\u8BC1\u662F\u5426\u8BA1\u7B97
     * 
     * 
     * store.computedObjects.get(["a","b"]).run() // \u91CD\u65B0\u542F\u52A8
     * 
     * \u9A6C\u4E0A\u91CD\u65B0\u8FD0\u884C\u6307\u5B9A\u7EC4\u7684\u8BA1\u7B97\u51FD\u6570
     * store.computedObjects.getGroup("a"]).run() // \u8FD0\u884C\u7EC4
     * // \u542F\u7528/\u7981\u7528\u6307\u5B9A\u7EC4\u7684\u8BA1\u7B97\u51FD\u6570 =false \u4EE3\u8868\u7981\u7528\u8BA1\u7B97 =true\u5F00\u542F\u52A8\u8BA1\u7B97
     * store.computedObjects.enableGroup("b"]) 
     * 
     */
    group?:string
    /**
     * \u8BA1\u7B97\u5F00\u5173
     * \u5F53=false\u65F6\u4E0D\u4F1A\u6267\u884C\u8BA1\u7B97
     * 
     */
  
    enable?:boolean
  
    /**
     * \u989D\u5916\u5408\u5E76\u5230\u8BA1\u7B97\u7ED3\u679CAsyncComputedObject\u4E2D\u7684\u5C5E\u6027
     */
    extras?:Extras                  
    /**
     * \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8BA1\u7B97\u7ED3\u679C\u4F1A\u5199\u5165\u5230\u5F53\u524Dstore\u4E2Dcomputed\u6240\u5728\u7684\u4F4D\u7F6E,\u5373selfPath
     * \u5982\u679C\u6307\u5B9A\u6B64\u5C5E\u6027\uFF0C\u5219\u4F1A\u5C06\u8BA1\u7B97\u7ED3\u679C\u5199\u5165selfReactiveable\u6307\u5B9A\u7684\u4F4D\u7F6EselfPath
     * \u6B64\u53C2\u6570\u4EC5\u5728\u52A8\u6001\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u65F6\u4F7F\u7528
     * 
     */
    selfReactiveable?: Reactiveable
    /**
     * 
     * \u5F53\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u7684computedObject\u662F\u5426\u4FDD\u5B58\u5230store.computedObjects\u4E2D
     * 
     * \u5F53\u5728hook\u4E2D\u4F7F\u7528\u65F6\u5C31\u4E0D\u9700\u8981\u4FDD\u5B58\u5230store.computedObjects\u4E2D
     * 
     */
    save?:boolean

  };
  
`,paraId:40,tocIndex:5},{value:"\u4E0D\u540C\u4E8E\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u6BCF\u4E00\u4E2A\u4FBF\u7528",paraId:41,tocIndex:6},{value:"computed",paraId:41,tocIndex:6},{value:"\u58F0\u660E\u7684\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u5747\u4F1A\u88AB\u66FF\u6362\u6210",paraId:41,tocIndex:6},{value:"AsyncComputedObject",paraId:41,tocIndex:6},{value:"\u5BF9\u8C61\uFF08\u539F\u5730\u79FB\u82B1\u63A5\u6728\uFF09\uFF0C\u901A\u8FC7\u8BE5\u5BF9\u8C61\uFF1A",paraId:41,tocIndex:6},{value:"\u53EF\u4EE5\u8BFB\u53D6\u5230\u5F02\u6B65\u8BA1\u7B97\u7684\u8FDB\u5EA6\u4EE5\u53CA\u7ED3\u679C\u7B49",paraId:42,tocIndex:6},{value:"\u63D0\u4F9B\u8D85\u65F6\u3001\u91CD\u8BD5\u7B49\u529F\u80FD",paraId:42,tocIndex:6},{value:"\u63D0\u4F9B\u5F02\u6B65\u8BA1\u7B97\u8FDB\u5EA6\u7B49\u529F\u80FD",paraId:42,tocIndex:6},{value:"AsyncComputedObject",paraId:43,tocIndex:6},{value:"\u5BF9\u8C61\u58F0\u660E\u5982\u4E0B\uFF1A",paraId:43,tocIndex:6},{value:`export type AsyncComputedObject<Result= any,ExtAttrs extends Dict = {}> ={
  // \u662F\u5426\u6B63\u5728\u8BA1\u7B97
  loading? : boolean;               
  // \u8FDB\u5EA6\u503C    
  progress?: number;                
  // \u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4Dms\uFF0C\u5F53\u542F\u7528\u8D85\u65F6\u65F6\u8FDB\u884C\u5012\u8BA1\u65F6
  timeout? : number ;               
  // \u6267\u884C\u51FA\u9519\u65F6\u7684\u9519\u8BEF\u4FE1\u606F
  error?   : any;        
  // \u91CD\u8BD5\u6B21\u6570\uFF0C\u5F53\u6267\u884C\u91CD\u8BD5\u64CD\u4F5C\u65F6\uFF0C\u4F1A\u8FDB\u884C\u5012\u8BA1\u65F6\uFF0C\u6BCF\u6B21\u91CD\u8BD5-1\uFF0C\u76F4\u5230\u4E3A0\u65F6\u505C\u6B62\u91CD\u8BD5           
  retry?   : number                 
  // \u8BA1\u7B97\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4FDD\u5B58\u5230\u6B64\u5904
  result   : Result;                
  // \u91CD\u65B0\u8FD0\u884C\u8BA1\u7B97\u51FD\u6570
  run      : (options?:RuntimeComputedOptions) => {};    
  // \u4E2D\u6B62\u6B63\u5728\u6267\u884C\u7684\u5F02\u6B65\u8BA1\u7B97
  cancel  : ()=>void                                        
} & ExtAttrs                        // \u989D\u5916\u7684\u5C5E\u6027
`,paraId:44,tocIndex:6},{value:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF0C",paraId:45,tocIndex:6},{value:"state.user.fullName",paraId:45,tocIndex:6},{value:"\u662F\u4E00\u4E2A",paraId:45,tocIndex:6},{value:"AsyncComputedObject",paraId:45,tocIndex:6},{value:"\u5BF9\u8C61\uFF0C\u901A\u8FC7\u8BE5\u5BF9\u8C61\u53EF\u4EE5\u8BFB\u53D6\u5230\u5F02\u6B65\u8BA1\u7B97\u7684\u8FDB\u5EA6\u4EE5\u53CA\u7ED3\u679C\u7B49\u3002",paraId:45,tocIndex:6},{value:`
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
const store = createStore(state)
// \u7ECFcreateStore\u5904\u7406\u540E\u7684fullName\u662F\u4E00\u4E2AAsyncComputedObject\u5BF9\u8C61
store.state.user.fullName=={
  loading:false,          // \u662F\u5426\u6B63\u5728\u8BA1\u7B97
  error:null,             // \u8BA1\u7B97\u9519\u8BEF\u4FE1\u606F
  timout:0,               // \u8D85\u65F6\u8BA1\u7B97\u76F8\u5173
  retry:0,                // \u91CD\u8BD5\u6B21\u6570
  result:"ZhangFisher",   // \u8BA1\u7B97\u7ED3\u679C
  progress:0,             // \u8BA1\u7B97\u8FDB\u5EA6
  run:()=>{},             // \u91CD\u65B0\u6267\u884C\u8BA1\u7B97
  cancel: ()=>void 
}
`,paraId:46,tocIndex:6},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u7684\u52A0\u8F7D\u72B6\u6001\u4FDD\u5B58\u5728",paraId:47,tocIndex:7},{value:"AsyncComputedObject",paraId:47,tocIndex:7},{value:"\u5BF9\u8C61\u7684",paraId:47,tocIndex:7},{value:"loading",paraId:47,tocIndex:7},{value:"\u5C5E\u6027\u4E2D\uFF0C\u5F53",paraId:47,tocIndex:7},{value:"loading",paraId:47,tocIndex:7},{value:"\u4E3A",paraId:47,tocIndex:7},{value:"true",paraId:47,tocIndex:7},{value:"\u65F6\uFF0C\u4EE3\u8868\u5F02\u6B65\u8BA1\u7B97\u6B63\u5728\u8FDB\u884C\u4E2D\u3002",paraId:47,tocIndex:7},{value:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5F02\u6B65\u8BA1\u7B97\u52A0\u8F7D\u72B6\u6001\u7684\u4F8B\u5B50\uFF1A",paraId:48,tocIndex:7},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u7684\u6267\u884C\u8FDB\u5EA6\u4FDD\u5B58\u5728",paraId:49,tocIndex:8},{value:"AsyncComputedObject",paraId:49,tocIndex:8},{value:"\u5BF9\u8C61\u7684",paraId:49,tocIndex:8},{value:"progress",paraId:49,tocIndex:8},{value:"\u5C5E\u6027\u4E2D\uFF0C\u5F53",paraId:49,tocIndex:8},{value:"progress",paraId:49,tocIndex:8},{value:"\u4E3A",paraId:49,tocIndex:8},{value:"0-100",paraId:49,tocIndex:8},{value:"\u65F6\uFF0C\u4EE3\u8868\u5F02\u6B65\u8BA1\u7B97\u7684\u8FDB\u5EA6\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u6839\u636E\u8FDB\u5EA6\u503C\u6765\u5C55\u793A\u8FDB\u5EA6\u6761\u7B49\u3002",paraId:49,tocIndex:8},{value:"\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A",paraId:50,tocIndex:8},{value:"\u5728\u521B\u5EFA",paraId:51,tocIndex:9},{value:"computed",paraId:51,tocIndex:9},{value:"\u65F6\u53EF\u4EE5\u6307\u5B9A\u8D85\u65F6\u53C2\u6570(\u5355\u4F4D\u4E3A",paraId:51,tocIndex:9},{value:"ms",paraId:51,tocIndex:9},{value:")\uFF0C\u5B9E\u73B0",paraId:51,tocIndex:9},{value:"\u8D85\u65F6\u5904\u7406",paraId:51,tocIndex:9},{value:"\u548C",paraId:51,tocIndex:9},{value:"\u5012\u8BA1\u65F6",paraId:51,tocIndex:9},{value:"\u529F\u80FD\u3002\u57FA\u672C\u8FC7\u7A0B\u662F\u8FD9\u6837\u7684\u3002",paraId:51,tocIndex:9},{value:"\u6307\u5B9A",paraId:52,tocIndex:9},{value:"options.timeout=\u8D85\u65F6\u65F6\u95F4",paraId:52,tocIndex:9},{value:"\u5F53\u5F02\u6B65\u8BA1\u7B97\u5F00\u59CB\u65F6\uFF0C\u4F1A\u542F\u52A8\u4E00\u4E2A\u5B9A\u65F6\u5668\u65F6\uFF0C\u5E76\u66F4\u65B0",paraId:52,tocIndex:9},{value:"AsyncComputedObject",paraId:52,tocIndex:9},{value:"\u5BF9\u8C61\u7684",paraId:52,tocIndex:9},{value:"timeout",paraId:52,tocIndex:9},{value:"\u5C5E\u6027\u3002",paraId:52,tocIndex:9},{value:"\u5F53\u8D85\u65F6\u89E6\u53D1\u65F6\u4F1A\u89E6\u53D1",paraId:52,tocIndex:9},{value:"TIMEOUT",paraId:52,tocIndex:9},{value:"\u9519\u8BEF\uFF0C\u5C06\u9519\u8BEF\u66F4\u65B0\u5230",paraId:52,tocIndex:9},{value:"AsyncComputedObject.error",paraId:52,tocIndex:9},{value:"\u5C5E\u6027\u4E2D\u3002",paraId:52,tocIndex:9},{value:"\u5728",paraId:53,tocIndex:10},{value:"\u8D85\u65F6",paraId:53,tocIndex:10},{value:"\u529F\u80FD\u4E2D\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0",paraId:53,tocIndex:10},{value:"timeout",paraId:53,tocIndex:10},{value:"\u5C5E\u6027\uFF0C\u53EF\u4EE5\u901A\u8FC7",paraId:53,tocIndex:10},{value:"timeout=[\u8D85\u65F6\u65F6\u95F4,\u95F4\u9694\u66F4\u65B0\u65F6\u957F]",paraId:53,tocIndex:10},{value:"\u6765\u542F\u7528\u5012\u8BA1\u65F6\u529F\u80FD\u3002",paraId:53,tocIndex:10},{value:"\u57FA\u672C\u8FC7\u7A0B\u5982\u4E0B\uFF1A",paraId:54,tocIndex:10},{value:"\u6307\u5B9A",paraId:55,tocIndex:10},{value:"options.timoeut=[\u8D85\u65F6\u65F6\u95F4,\u95F4\u9694\u66F4\u65B0\u65F6\u957F]",paraId:55,tocIndex:10},{value:"\u5F53\u5F02\u6B65\u8BA1\u7B97\u5F00\u59CB\u65F6\uFF0C\u4F1A\u542F\u52A8\u4E00\u4E2A\u5B9A\u65F6\u5668\uFF0C\u66F4\u65B0",paraId:55,tocIndex:10},{value:"AsyncComputedObject",paraId:55,tocIndex:10},{value:"\u5BF9\u8C61\u7684",paraId:55,tocIndex:10},{value:"timeout",paraId:55,tocIndex:10},{value:"\u5C5E\u6027\u3002",paraId:55,tocIndex:10},{value:"\u7136\u540E\u6BCF\u9694",paraId:55,tocIndex:10},{value:"\u95F4\u9694\u66F4\u65B0\u65F6\u957F",paraId:55,tocIndex:10},{value:"\u7684\uFF0C\u5C31\u66F4\u65B0\u4E00\u6B21",paraId:55,tocIndex:10},{value:"AsyncComputedObject.timoeut",paraId:55,tocIndex:10},{value:"\u5F53\u8D85\u65F6\u89E6\u53D1\u65F6\u4F1A\u89E6\u53D1",paraId:55,tocIndex:10},{value:"TIMEOUT",paraId:55,tocIndex:10},{value:"\u9519\u8BEF\uFF0C\u5C06\u9519\u8BEF\u66F4\u65B0\u5230",paraId:55,tocIndex:10},{value:"AsyncComputedObject.error",paraId:55,tocIndex:10},{value:"\u5C5E\u6027\u4E2D\u3002",paraId:55,tocIndex:10},{value:"\u4F8B\u5982\uFF1A",paraId:56,tocIndex:10},{value:"options.timoeut=[5*1000,5]",paraId:56,tocIndex:10},{value:"\u4EE3\u8868\u8D85\u65F6\u65F6\u95F4\u4E3A5\u79D2\uFF0C\u6BCF1000ms\u66F4\u65B0\u4E00\u6B21",paraId:56,tocIndex:10},{value:"timeout",paraId:56,tocIndex:10},{value:"\u5C5E\u6027\uFF0C\u5012\u8BA1\u65F6",paraId:56,tocIndex:10},{value:"5",paraId:56,tocIndex:10},{value:"\u6B21\u3002",paraId:56,tocIndex:10},{value:"\u5728\u521B\u5EFA",paraId:57,tocIndex:11},{value:"computed",paraId:57,tocIndex:11},{value:"\u65F6\u53EF\u4EE5\u6307\u5B9A\u91CD\u8BD5\u53C2\u6570\uFF0C\u5B9E\u73B0",paraId:57,tocIndex:11},{value:"\u51FA\u9519\u91CD\u8BD5\u6267\u884C",paraId:57,tocIndex:11},{value:"\u7684\u529F\u80FD\u3002\u57FA\u672C\u8FC7\u7A0B\u662F\u8FD9\u6837\u7684\u3002",paraId:57,tocIndex:11},{value:"\u6307\u5B9A",paraId:58,tocIndex:11},{value:"options.retry=[\u91CD\u8BD5\u6B21\u6570,\u91CD\u8BD5\u95F4\u9694ms]",paraId:58,tocIndex:11},{value:"\u5F53\u5F00\u59CB\u6267\u884C\u5F02\u6B65\u8BA1\u7B97\u524D\uFF0C\u4F1A\u66F4\u65B0",paraId:58,tocIndex:11},{value:"AsyncComputedObject.retry",paraId:58,tocIndex:11},{value:"\u5C5E\u6027\u3002",paraId:58,tocIndex:11},{value:"\u5F53\u6267\u884C\u51FA\u9519\u65F6\uFF0C\u4F1A\u540C\u6B65\u66F4\u65B0",paraId:58,tocIndex:11},{value:"AsyncComputedObject.retry",paraId:58,tocIndex:11},{value:"\u5C5E\u6027\u4E3A\u91CD\u8BD5\u6B21\u6570\u3002",paraId:58,tocIndex:11},{value:"\u8BF4\u660E",paraId:59},{value:"\u91CD\u8BD5\u671F\u95F4",paraId:60},{value:"loading",paraId:60},{value:"\u4F1A\u4FDD\u6301\u4E3A",paraId:60},{value:"true",paraId:60},{value:"\u91CD\u8BD5\u6B21\u6570\u4E3A0\u65F6\uFF0C\u4E0D\u4F1A\u518D\u6B21\u91CD\u8BD5\u3002\u91CD\u8BD5\u6B21\u6570\u4E3A",paraId:60},{value:"N",paraId:60},{value:"\u65F6\uFF0C\u5B9E\u9645\u4F1A\u6267\u884C",paraId:60},{value:"N+1",paraId:60},{value:"\u6B21\u3002",paraId:60},{value:"\u91CD\u8BD5\u671F\u95F4",paraId:60},{value:"error",paraId:60},{value:"\u4F1A\u66F4\u65B0\u4E3A\u6700\u540E\u4E00\u6B21\u9519\u8BEF\u4FE1\u606F\u3002",paraId:60},{value:"\u5728\u521B\u5EFA",paraId:61,tocIndex:12},{value:"computed",paraId:61,tocIndex:12},{value:"\u65F6\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A",paraId:61,tocIndex:12},{value:"abortSignal",paraId:61,tocIndex:12},{value:"\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u8FD4\u56DE\u4E00\u4E2A",paraId:61,tocIndex:12},{value:"AbortSignal",paraId:61,tocIndex:12},{value:"\uFF0C\u7528\u6765\u53D6\u6D88\u8BA1\u7B97\u64CD\u4F5C\u3002",paraId:61,tocIndex:12},{value:"\u57FA\u672C\u64CD\u4F5C\u65B9\u6CD5\u662F\uFF1A",paraId:62,tocIndex:12},{value:"\u5728",paraId:63,tocIndex:12},{value:"computed",paraId:63,tocIndex:12},{value:"\u4E2D\u4F20\u5165",paraId:63,tocIndex:12},{value:"abortSignal",paraId:63,tocIndex:12},{value:"\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u662F\u4E00\u4E2A",paraId:63,tocIndex:12},{value:"AbortSignal",paraId:63,tocIndex:12},{value:"\uFF0C\u53EF\u7528\u6765\u8BA2\u9605",paraId:63,tocIndex:12},{value:"abort",paraId:63,tocIndex:12},{value:"\u4FE1\u53F7\u6216\u8005\u4F20\u9012\u7ED9",paraId:63,tocIndex:12},{value:"fetch",paraId:63,tocIndex:12},{value:"\u6216",paraId:63,tocIndex:12},{value:"axios",paraId:63,tocIndex:12},{value:"\u7B49\u3002",paraId:63,tocIndex:12},{value:"\u53D6\u6D88\u65F6\u53EF\u4EE5\u8C03\u7528",paraId:64,tocIndex:12},{value:"AsyncComputedObject.cancel()",paraId:64,tocIndex:12},{value:"\u65B9\u6CD5\u6765\u89E6\u53D1\u4E00\u4E2A",paraId:64,tocIndex:12},{value:"AbortSignal",paraId:64,tocIndex:12},{value:"\u4FE1\u53F7\u3002\u5982\u4E0B\u4F8B\u4E2D\u8C03\u7528",paraId:64,tocIndex:12},{value:"state.order.total.cancel()",paraId:64,tocIndex:12},{value:"\u6CE8\u610F",paraId:65},{value:"\uFF1A",paraId:65},{value:"abortSignal",paraId:66},{value:"\u53C2\u6570\u662F\u4E00\u4E2A",paraId:66},{value:"AbortSignal",paraId:66},{value:"\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u7528\u6765\u8BA2\u9605",paraId:66},{value:"abort",paraId:66},{value:"\u4FE1\u53F7\u6216\u8005\u4F20\u9012\u7ED9",paraId:66},{value:"fetch",paraId:66},{value:"\u6216",paraId:66},{value:"axios",paraId:66},{value:"\u7B49\u3002",paraId:66},{value:"\u9700\u8981\u6CE8\u610F\u7684\uFF0C\u5F53\u8C03\u7528",paraId:66},{value:"AsyncComputedObject.cancel()",paraId:66},{value:"\u65F6\uFF0C\u8BA1\u7B97\u51FD\u6570\u5982\u679C\u8BA2\u9605\u5E76\u63A5\u6536\u5230",paraId:66},{value:"abort",paraId:66},{value:"\u4FE1\u53F7\u65F6\uFF0C\u5E94\u8BE5\u4E3B\u52A8\u7ED3\u675F\u9000\u51FA\u8BA1\u7B97\u51FD\u6570\u3002\u5982\u679C\u8BA1\u7B97\u51FD\u6570\u6CA1\u6709\u8BA2\u9605",paraId:66},{value:"abort",paraId:66},{value:"\u4FE1\u53F7\uFF0C\u8C03\u7528",paraId:66},{value:"AsyncComputedObject.cancel()",paraId:66},{value:"\u662F\u4E0D\u4F1A\u751F\u6548\u7684\u3002",paraId:66},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u5F53\u4F9D\u8D56\u53D1\u751F\u53D8\u5316\u65F6\u5747\u4F1A\u6267\u884C\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570\uFF0C\u5728\u8FDE\u7EED\u53D8\u5316\u65F6\u5C31\u4F1A\u91CD\u590D\u6267\u884C\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570\u3002",paraId:67,tocIndex:13},{value:"\u5728\u58F0\u660E\u65F6\uFF0C\u5141\u8BB8\u6307\u5B9A",paraId:68,tocIndex:13},{value:"options.noReentry=true",paraId:68,tocIndex:13},{value:"\u6765\u9632\u6B62\u91CD\u5165\uFF0C\u5982\u679C\u91CD\u5165\u5219\u53EA\u4F1A\u5728\u63A7\u5236\u53F0\u663E\u793A\u4E00\u4E2A\u8B66\u544A\u3002",paraId:68,tocIndex:13},{value:"\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u5747\u5E94\u8BE5\u4F7F\u7528",paraId:69,tocIndex:14},{value:"computed",paraId:69,tocIndex:14},{value:"\u8FDB\u884C\u58F0\u660E\uFF0C\u4F46\u662F\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\u3002",paraId:69,tocIndex:14},{value:`const order = {
    bookName:"ZhangFisher",
    price:100,
    count:3,
    total:async (order)=>{
      return order.price*order.count
    }
} 
`,paraId:70,tocIndex:14},{value:"\u4E0A\u8FF0\u7B80\u5355\u7684\u5F02\u6B65\u58F0\u660E\u65B9\u5F0F\u7B49\u6548\u4E8E\u4EE5\u4E0B\u65B9\u5F0F\uFF1A",paraId:71,tocIndex:14},{value:"\u5F53\u4E0D\u4F7F\u7528",paraId:72},{value:"computed",paraId:72},{value:"\u8FDB\u884C\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u58F0\u660E\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9\uFF1A",paraId:72},{value:"\u9ED8\u8BA4",paraId:73},{value:"scope",paraId:73},{value:"\u6307\u5411\u7684\u662F",paraId:73},{value:"current",paraId:73},{value:"\uFF0C\u5373",paraId:73},{value:"total",paraId:73},{value:"\u6240\u5728\u7684\u5BF9\u8C61\u3002",paraId:73},{value:"\u5176\u4F9D\u8D56\u662F\u7A7A\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u81EA\u52A8\u6536\u96C6\u4F9D\u8D56\uFF0C\u4E5F\u4E0D\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u3002\u4E5F\u5C31\u662F\u8BF4\u4E0A\u4F8B\u4E2D\u7684",paraId:73},{value:"price",paraId:73},{value:"\u548C",paraId:73},{value:"count",paraId:73},{value:"\u53D8\u5316\u65F6\uFF0C",paraId:73},{value:"total",paraId:73},{value:"\u4E0D\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u3002\u4F46\u662F\u5728\u4F1A\u5728\u7B2C\u4E00\u6B21\u8BBF\u95EE\u65F6\u81EA\u52A8\u8BA1\u7B97\u4E00\u6B21\u3002",paraId:73},{value:"\u7279\u522B\u6CE8\u610F",paraId:74},{value:"\uFF1A\u7531\u4E8E\u5728\u4E0D\u540C\u7684\u6784\u5EFA\u73AF\u5883\u4E0B\uFF0C\u6BD4\u5982\u4F7F\u7528babel\u8F6C\u7801\u65F6\uFF0C\u53EF\u80FD\u4F1A\u5C06\u5F02\u6B65\u51FD\u6570\u8F6C\u7801\u4E3A\u540C\u6B65\u51FD\u6570\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u8BC6\u522B\u4E3A\u5F02\u6B65\u51FD\u6570\u800C\u51FA\u73B0\u95EE\u9898\u3002",paraId:74},{value:"\u770B\u770B\u4EE5\u4E0B\u4F8B\u5B50\uFF1A",paraId:75},{value:"\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u6B63\u786E\u8BA1\u7B97\u51FA",paraId:76},{value:"total",paraId:76},{value:"\u7684\u503C\uFF1F",paraId:76},{value:"\u53EF\u4EE5\u770B\u5230\u4E0A\u8FF0\u4F8B\u5B50\u4E2D",paraId:77},{value:"state.total",paraId:77},{value:"\u7684\u503C\u662F",paraId:77},{value:"[object Promise]",paraId:77},{value:`\u3002
\u8FD9\u662F\u56E0\u4E3A\u5728\u672C\u7AD9\u4F7F\u7528\u7684\u6784\u5EFA\u5DE5\u5177`,paraId:77},{value:"webpack",paraId:77},{value:"\u4F7F\u7528",paraId:77},{value:"babel",paraId:77},{value:"\u8FDB\u884C\u8F6C\u7801\uFF0C\u4EE5\u4E0A\u7684\u5F02\u6B65\u51FD\u6570\u88AB\u8F6C\u7801\u4E3A\u540C\u6B65\u51FD\u6570\uFF0C\u7C7B\u4F3C\u8FD9\u6837\u7684\u5F62\u5F0F\uFF1A",paraId:77},{value:`total(_x15) {
  return _total.apply(this, arguments);
}
`,paraId:78},{value:"\u8FD9\u5BFC\u81F4",paraId:79},{value:"Speedform",paraId:79},{value:"\u5C06\u5176\u8BC6\u522B\u4E3A\u5F02\u6B65\u51FD\u6570\uFF0C\u4E5F\u5C31\u4E0D\u80FD\u76F8\u5E94\u5730\u521B\u5EFA\u5F02\u6B65",paraId:79},{value:"AsyncComputedObject",paraId:79},{value:"\uFF0C\u800C\u53EA\u662F\u5C06\u5176\u5F53\u4F5C\u4E00\u4E2A\u666E\u901A\u7684\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\u3002",paraId:79},{value:"\u89E3\u51B3\u65B9\u6CD5\u662F\u663E\u5F0F\u6307\u5B9A",paraId:80},{value:"computed(async ()=>{...},[...],{async:true})",paraId:80},{value:"\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u6B63\u786E\u8BC6\u522B\u4E3A\u5F02\u6B65\u51FD\u6570\u3002",paraId:80}]},41820:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(69180);const n=[{value:"\u7EC6\u5FC3\u7684\u670B\u53CB\u53EF\u80FD\u53D1\u73B0\uFF0C\u5728\u4E0A\u9762\u7684",paraId:0,tocIndex:0},{value:"createStore",paraId:0,tocIndex:0},{value:"\u4E2D\u6211\u4EEC\u6CA1\u6709\u58F0\u660E\u4EFB\u4F55\u7684\u8BA1\u7B97\u5C5E\u6027\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u662F\u4E0D\u652F\u6301\u8BA1\u7B97\u5C5E\u6027\uFF0C\u800C\u662F",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u4E86",paraId:0,tocIndex:0},{value:"\u72EC\u7279\u7684\u8BA1\u7B97\u5C5E\u6027\u7684\u58F0\u660E\u65B9\u5F0F",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u7684\u8BA1\u7B97\u5C5E\u6027\u7684\u58F0\u660E\u65B9\u5F0F\u662F",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u4E4B\u6240\u4EE5\u80FD\u63D0\u4F9B\u65E0\u4EE5\u4F26\u6BD4\u7528\u6237\u5F00\u53D1\u4F53\u9A8C\u7684\u5173\u952E\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:1},{value:"\u5B9E\u73B0\u4E86\u6700\u72EC\u7279\u7684\u79FB\u82B1\u63A5\u6728\u5F0F\u7684\u8BA1\u7B97\u5C5E\u6027\u5B9E\u73B0\u65B9\u5F0F",paraId:1},{value:"\u57FA\u672C\u8FC7\u7A0B\u5982\u4E0B\uFF1A",paraId:2},{value:"\u9996\u5148\u76F4\u63A5\u5728",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u58F0\u660E\u8BA1\u7B97\u5C5E\u6027\u51FD\u6570\uFF0C\u5982",paraId:3},{value:"fullName=(user)=>user.first+user.last",paraId:3},{value:"\u3002",paraId:3},{value:"\u8C03\u7528",paraId:3},{value:"createStore",paraId:3},{value:"\u521B\u5EFA",paraId:3},{value:"Store",paraId:3},{value:"\u65F6\uFF0C\u4F1A\u6839\u636E",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u7684\u51FD\u6570\u6765\u521B\u5EFA",paraId:3},{value:"mutate",paraId:3},{value:"\u6216",paraId:3},{value:"computed",paraId:3},{value:"(\u5728",paraId:3},{value:"helux",paraId:3},{value:"\u4E2D\u53EB\u6D3E\u751F\u5BF9\u8C61\uFF0C\u5728\u5176\u4ED6\u72B6\u6001\u5E93\u4E2D\u53EF\u80FD\u53EB\u8BA1\u7B97\u7B97\u5C5E\u6027)\u3002",paraId:3},{value:"\u5982\u6B64\uFF0C\u5F53",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1\u8BA1\u7B97\u5C5E\u6027\u7684\u91CD\u65B0\u8BA1\u7B97\uFF0C\u5C06\u8BA1\u7B97\u7ED3\u679C\u8D4B\u503C\u7ED9",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u7684\u5BF9\u5E94\u5C5E\u6027\u3002\u5728\u4E0A\u56FE\u4E2D\uFF0C\u5F53",paraId:3},{value:"firstName",paraId:3},{value:"\u548C",paraId:3},{value:"lastName",paraId:3},{value:"\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1",paraId:3},{value:"fullName(mutate)",paraId:3},{value:"\u7684\u91CD\u65B0\u8BA1\u7B97\uFF0C\u5C06\u8BA1\u7B97\u7ED3\u679C\u8D4B\u503C\u7ED9",paraId:3},{value:"user.fullName",paraId:3},{value:"\u5C5E\u6027\u3002\u8FD9\u6837\uFF0C\u5F53\u6211\u4EEC\u8BBF\u95EE",paraId:3},{value:"state.fullName",paraId:3},{value:"\u65F6,\u5C31\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E86\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u51FD\u6570\u4E86\u3002",paraId:3},{value:"\u4EE5\u4E0A\u5C31\u662F",paraId:4},{value:"@speedform/reactive",paraId:4},{value:"\u8BA1\u7B97\u5C5E\u6027\u79FB\u82B1\u63A5\u6728\u7684\u8FC7\u7A0B\u539F\u7406,\u5927\u5BB6\u53EF\u4EE5\u4ECE\u4E0B\u9762\u793A\u5217\u4E2D\u52A0\u6DF1\u7406\u89E3\u3002",paraId:4},{value:"\u5728\u4E0A\u4F8B\u4E2D\uFF1A",paraId:5},{value:"user.fullName",paraId:6},{value:"\u662F\u4E00\u4E2A\u51FD\u6570",paraId:6},{value:"store.state.fullName",paraId:6},{value:"\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32",paraId:6},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",paraId:6},{value:"createStore",paraId:6},{value:"\u76F4\u63A5\u5728\u8F93\u5165\u7684",paraId:6},{value:"user",paraId:6},{value:"\u4E0A\u8FDB\u884C\u521B\u5EFA\uFF0C\u6307\u5B9A",paraId:6},{value:"singleton:false",paraId:6},{value:"\u65F6\u4F1A\u6DF1\u62F7\u8D1D\u4E00\u4EFD",paraId:6},{value:"user",paraId:6},{value:"\uFF0C\u7136\u540E\u5728\u62F7\u8D1D\u7684",paraId:6},{value:"user",paraId:6},{value:"\u4E0A\u521B\u5EFA",paraId:6},{value:"mutate",paraId:6},{value:"\u6216",paraId:6},{value:"computed",paraId:6},{value:"\u3002",paraId:6},{value:"\u5728\u5B66\u4E60\u5982\u4F55\u58F0\u660E\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u6765\u4E86\u89E3\u4E00\u4E0B",paraId:7,tocIndex:2},{value:"\u8BA1\u7B97\u4F5C\u7528\u57DF - Scope",paraId:7,tocIndex:2},{value:"\u7684\u6982\u5FF5\u3002",paraId:7,tocIndex:2},{value:"\u8BA1\u7B97\u4F5C\u7528\u57DF",paraId:8},{value:"\u6307\u7684\u662F\u4F20\u9012\u7ED9\u8BA1\u7B97\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570",paraId:8},{value:"@speedform/reactive",paraId:9},{value:"\u5728\u521B\u5EFA",paraId:9},{value:"Store",paraId:9},{value:"\u65F6\uFF0C\u652F\u6301\u914D\u7F6E",paraId:9},{value:"scope",paraId:9},{value:"\u53C2\u6570\u6765\u6307\u5B9A\u8BA1\u7B97\u5C5E\u6027\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5982\u4E0B\uFF1A",paraId:9},{value:`export enum ComputedScopeRef{
  Root    = 'root',                      // \u6307\u5411State\u6839\u5BF9\u8C61
  Current = 'current',                // \u6307\u5411\u8BA1\u7B97\u5C5E\u6027\u6240\u5728\u7684\u5BF9\u8C61
  Parent  = 'parent',                  // \u6307\u5411\u8BA1\u7B97\u5C5E\u6027\u6240\u5728\u5BF9\u8C61\u7684\u7236\u5BF9\u8C61
  Depends = 'depends'                 // \u6307\u5411\u5F02\u6B65\u8BA1\u7B97\u7684\u4F9D\u8D56\u6570\u7EC4\uFF0C\u4EC5\u5728\u5F02\u6B65\u8BA1\u7B97\u65F6\u751F\u6548
  Self    = 'self'                    // \u6307\u5411\u81EA\u8EAB\uFF0C\u9ED8\u8BA4\u503C   
}

// \u6307\u5B9AStore\u4E2D\u8BA1\u7B97\u51FD\u6570\u7684\u4E0A\u4E0B\u6587,\u5982\u679C\u662F\u5B57\u7B26\u4E32\u4EE3\u8868\u662F\u5F53\u524D\u5BF9\u8C61\u7684\u6307\u5B9A\u952E\uFF0C\u5982\u679C\u662Fstring[]\uFF0C\u5219\u4EE3\u8868\u662F\u5F53\u524DStore\u5BF9\u8C61\u7684\u5B8C\u6574\u8DEF\u5F84
export type ComputedScope  =  ComputedScopeRef | string | string[] | ((state:any)=>string | string[] | ComputedScopeRef)
 
const store = createStore( {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: computed((scope)=>{
      // ...
    },["user.firstName","user.lastName"])
  }
} )

`,paraId:10},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",paraId:11,tocIndex:3},{value:"scope==ComputedScopeRef.Current",paraId:11,tocIndex:3},{value:"\u65F6\uFF0C\u8BA1\u7B97\u51FD\u6570\u7684",paraId:11,tocIndex:3},{value:"this",paraId:11,tocIndex:3},{value:"\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u7684\u5BF9\u8C61\u3002",paraId:11,tocIndex:3},{value:"@speedform/reactive",paraId:12,tocIndex:5},{value:"\u4F1A\u5C06\u8BA1\u7B97\u5C5E\u51FD\u6570\u7684",paraId:12,tocIndex:5},{value:"scope",paraId:12,tocIndex:5},{value:"\u6307\u5411",paraId:12,tocIndex:5},{value:"ComputedScopeRef.Root",paraId:12,tocIndex:5},{value:"\uFF0C\u5373\u5F53\u524D\u7684",paraId:12,tocIndex:5},{value:"State",paraId:12,tocIndex:5},{value:"\u6839\u5BF9\u8C61\uFF0C\u5982\u4E0B\uFF1A",paraId:12,tocIndex:5},{value:"\u5F53",paraId:13,tocIndex:7},{value:"scope==ComputedScopeRef.Parent",paraId:13,tocIndex:7},{value:"\u65F6\uFF0C\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u7684\u5BF9\u8C61\u7684\u7236\u5BF9\u8C61\u3002",paraId:13,tocIndex:7},{value:"\u5F53",paraId:14,tocIndex:9},{value:"store.options.scope==<\u5B57\u7B26\u4E32>",paraId:14,tocIndex:9},{value:"\u65F6\uFF0C\u6B64\u65F6",paraId:14,tocIndex:9},{value:"<\u5B57\u7B26\u4E32>",paraId:14,tocIndex:9},{value:"\u5C31\u662F\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61\u7684\u952E\u540D\u79F0\u3002",paraId:14,tocIndex:9},{value:"computedThis='firstName'",paraId:15},{value:"\u4EE3\u8868",paraId:15},{value:"this",paraId:15},{value:"\u6307\u5411",paraId:15},{value:"user.firstName",paraId:15},{value:",\u4E5F\u5C31\u662F\u5F53\u524D\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61\u7684",paraId:15},{value:"firstName",paraId:15},{value:"\u6210\u5458\u3002",paraId:15},{value:"computedThis='address.city'",paraId:15},{value:"\u4EE3\u8868",paraId:15},{value:"this",paraId:15},{value:"\u6307\u5411",paraId:15},{value:"user.address.city",paraId:15},{value:"\u603B\u4E4B\uFF0C\u5F53",paraId:15},{value:"computedThis",paraId:15},{value:"\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u65F6\uFF0C\u4EE3\u8868\u662F",paraId:15},{value:"\u5F53\u524D\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61\u7684\u6307\u5B9A\u952E\u540D\u79F0",paraId:15},{value:"\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u952E\u540D\u79F0\u53EF\u4EE5\u662F\u591A\u7EA7\u7684\uFF0C\u5982",paraId:15},{value:"address.city",paraId:15},{value:"\u3002",paraId:15},{value:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",paraId:16},{value:"\u4E0E",paraId:16},{value:"scope==<\u5B57\u7B26\u4E32>",paraId:16},{value:"\u7684\u533A\u522B\u5728\u4E8E:",paraId:16},{value:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",paraId:17},{value:"\u4EE3\u8868\u662F\u4EE5",paraId:17},{value:"\u6839\u5BF9\u8C61",paraId:17},{value:"\u4E3A\u8D77\u70B9\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8DEF\u5F84\u53EF\u4EE5\u662F\u591A\u7EA7\u7684\uFF0C\u5982",paraId:17},{value:"['user','address','city']",paraId:17},{value:"\u3002",paraId:17},{value:"scope==<\u5B57\u7B26\u4E32>",paraId:17},{value:"\u4EE3\u8868\u662F\u4EE5",paraId:17},{value:"\u5F53\u524D\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61",paraId:17},{value:"\u4E3A\u8D77\u70B9\u7684\u8DEF\u5F84\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u952E\u540D\u79F0\u53EF\u4EE5\u662F\u591A\u7EA7\u7684\uFF0C\u5982",paraId:17},{value:"address.city",paraId:17},{value:"\u3002",paraId:17},{value:"\u5F53",paraId:18,tocIndex:13},{value:"scope==ComputedScopeRef.Depends",paraId:18,tocIndex:13},{value:"\u65F6\uFF0C\u8BA1\u7B97\u51FD\u6570\u7684",paraId:18,tocIndex:13},{value:"this",paraId:18,tocIndex:13},{value:"\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u7684\u4F9D\u8D56\u9879\u7684\u503C\u3002",paraId:18,tocIndex:13},{value:"ComputedScopeRef.Depends",paraId:19,tocIndex:13},{value:"\u4EC5\u5728\u5F02\u6B65\u8BA1\u7B97\u65F6\u751F\u6548,\u800C\u5F02\u6B65\u8BA1\u7B97\u5FC5\u987B\u901A\u8FC7computed\u51FD\u6570\u6765\u6307\u5B9A\u4F9D\u8D56",paraId:19,tocIndex:13}]},40508:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(68282);const n=[{value:"\u5F53\u4F7F\u7528",paraId:0,tocIndex:0},{value:"computed",paraId:0,tocIndex:0},{value:"\u521B\u5EFA\u597D\u8BA1\u7B97\u5C5E\u6027\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7",paraId:0,tocIndex:0},{value:"store.computedObjects",paraId:0,tocIndex:0},{value:"\u6765\u7BA1\u7406\u6240\u6709",paraId:0,tocIndex:0},{value:"store",paraId:0,tocIndex:0},{value:"\u5185\u7684\u8BA1\u7B97\u5C5E\u6027\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7",paraId:1,tocIndex:0},{value:"store.computedObjects",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u8BBF\u95EE\u5230\u6240\u6709\u7684\u8BA1\u7B97\u5BF9\u8C61\uFF0C\u8BA1\u7B97\u5BF9\u8C61\u662F\u4E00\u4E2A",paraId:1,tocIndex:0},{value:"Map",paraId:1,tocIndex:0},{value:"\u5BF9\u8C61\uFF0C\u5176\u4E2D\u7684",paraId:1,tocIndex:0},{value:"key",paraId:1,tocIndex:0},{value:"\u662F\u8BA1\u7B97\u5BF9\u8C61\u7684",paraId:1,tocIndex:0},{value:"name",paraId:1,tocIndex:0},{value:"\uFF0C",paraId:1,tocIndex:0},{value:"value",paraId:1,tocIndex:0},{value:"\u662F\u8BA1\u7B97\u5BF9\u8C61\u7684",paraId:1,tocIndex:0},{value:"value",paraId:1,tocIndex:0},{value:"\u3002",paraId:1,tocIndex:0},{value:"\u8BF4\u660E",paraId:2},{value:":",paraId:2},{value:"\u4EE5\u4E0A\u521B\u5EFA\u4E86\u4E00",paraId:3},{value:"fullName",paraId:3},{value:"\u548C",paraId:3},{value:"fullName2",paraId:3},{value:"\u4E24\u4E2A\u8BA1\u7B97\u5C5E\u6027",paraId:3},{value:"store.computedObjects",paraId:3},{value:"\u662F\u4E00\u4E2A",paraId:3},{value:"Map",paraId:3},{value:"\u5BF9\u8C61,\u53EF\u4EE5\u901A\u8FC7",paraId:3},{value:'store.computedObjects.get("user/fullName")',paraId:3},{value:"\u6765\u83B7\u53D6",paraId:3},{value:"fullName",paraId:3},{value:"\u7684\u8BA1\u7B97\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u662F\u4E00\u4E2A",paraId:3},{value:"ComputedObject",paraId:3},{value:"\u5B9E\u4F8B\u3002",paraId:3},{value:"ComputedObject",paraId:3},{value:"\u5B9E\u4F8B\u6709\u4E00\u4E2A",paraId:3},{value:"run",paraId:3},{value:"\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\u3002",paraId:3},{value:"\u5BF9\u4E8E\u5F02\u6B65\u8BA1\u7B97\u5373\u53EF\u4EE5\u901A\u8FC7",paraId:3},{value:'store.computedObjects.get("user/fullName2").run()',paraId:3},{value:"\u6765\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7",paraId:3},{value:"store.state.user.fullName2.run()",paraId:3},{value:"\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\u3002\u800C\u540C\u6B65\u8BA1\u7B97\u53EA\u80FD\u901A\u8FC7",paraId:3},{value:'store.computedObjects.get("user/fullName").run()',paraId:3},{value:"\u6765\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\u3002",paraId:3},{value:"\u6BCF\u4E00\u4E2A\u8BA1\u7B97\u51FD\u6570\u5747\u4F1A\u521B\u5EFA\u4E00\u4E2A",paraId:4,tocIndex:1},{value:"ComputedObject",paraId:4,tocIndex:1},{value:"\u5B9E\u4F8B\uFF0C\u4FDD\u5B58\u5728",paraId:4,tocIndex:1},{value:"store.computedObjects",paraId:4,tocIndex:1},{value:",\u8BE5\u5BF9\u8C61\u6709\u4EE5\u4E0B\u5C5E\u6027\u548C\u65B9\u6CD5:",paraId:4,tocIndex:1},{value:`export interface ComputedObject<T=Dict> {
  mutate:IMutateWitness<T> 
  run:(throwError?:boolean)=>Promise<any> | any
  async:boolean               // \u662F\u5426\u662F\u5F02\u6B65\u5C5E\u6027
  options:ComputedOptions     // \u5F02\u6B65\u53C2\u6570
}
export class ComputedObjects<T=Dict> extends Map<string,ComputedObject<T>>{  
  async runGroup(group:string)        // \u624B\u52A8\u8FD0\u884C\u6307\u5B9A\u7EC4\u7684\u8BA1\u7B97\u51FD\u6570
  enableGroup(value:boolean)          // \u542F\u7528\u6216\u7981\u7528\u6307\u5B9A\u7EC4\u7684\u8BA1\u7B97\u51FD\u6570
}
`,paraId:5,tocIndex:1},{value:"ComputedObject",paraId:6,tocIndex:1},{value:"\u662F\u4E00\u4E2A\u666E\u901A\u7684",paraId:6,tocIndex:1},{value:"{}",paraId:6,tocIndex:1},{value:",\u91CC\u9762\u4FDD\u5B58\u4E86\u6240\u6709",paraId:6,tocIndex:1},{value:"ComputedOptions",paraId:6,tocIndex:1},{value:"\uFF0C\u56E0\u6B64\u901A\u8FC7",paraId:6,tocIndex:1},{value:"ComputedObject",paraId:6,tocIndex:1},{value:"\u5B9E\u4F8B\u53EF\u4EE5\u8BFB\u53D6\u5230\u8BA1\u7B97\u51FD\u6570\u7684\u6240\u6709\u5C5E\u6027\u3002",paraId:6,tocIndex:1},{value:"ComputedObject",paraId:6,tocIndex:1},{value:"\u63D0\u4F9B\u4E86\u4E00\u4E2A",paraId:6,tocIndex:1},{value:"run",paraId:6,tocIndex:1},{value:"\u65B9\u6CD5\u7528\u6765\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\u3002",paraId:6,tocIndex:1},{value:"ComputedObjects",paraId:6,tocIndex:1},{value:"\u662F\u4E00\u4E2A",paraId:6,tocIndex:1},{value:"Map",paraId:6,tocIndex:1},{value:"\u5BF9\u8C61\uFF0C\u5176\u4E2D\u7684",paraId:6,tocIndex:1},{value:"key",paraId:6,tocIndex:1},{value:"\u662F\u8BA1\u7B97\u5BF9\u8C61\u7684",paraId:6,tocIndex:1},{value:"valuePath",paraId:6,tocIndex:1},{value:"\uFF0C",paraId:6,tocIndex:1},{value:"value",paraId:6,tocIndex:1},{value:"\u662F\u7684",paraId:6,tocIndex:1},{value:"ComputedObject",paraId:6,tocIndex:1},{value:"\u3002",paraId:6,tocIndex:1},{value:"\u5728\u4F7F\u7528",paraId:6,tocIndex:1},{value:"computed(getter,deps,options)",paraId:6,tocIndex:1},{value:"\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u65F6\uFF0C",paraId:6,tocIndex:1},{value:"options",paraId:6,tocIndex:1},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:6,tocIndex:1},{value:"ComputedObject.options",paraId:6,tocIndex:1},{value:"\u8BFB\u53D6\u548C\u4FEE\u6539\uFF0C\u6BD4\u5982\u53EF\u4EE5\u901A\u8FC7",paraId:6,tocIndex:1},{value:"ComputedObject.options.enable=false",paraId:6,tocIndex:1},{value:"\u6765\u7981\u7528\u8BA1\u7B97\u3002",paraId:6,tocIndex:1},{value:"ComputedObjects",paraId:7,tocIndex:2},{value:"\u63D0\u4F9B\u4E86\u4E00\u4E2A",paraId:7,tocIndex:2},{value:"runGroup",paraId:7,tocIndex:2},{value:`\u65B9\u6CD5\uFF0C\u7528\u6765\u6267\u884C\u5206\u7EC4\u8BA1\u7B97\u3002
\u5F53\u4F7F\u7528`,paraId:7,tocIndex:2},{value:"computed",paraId:7,tocIndex:2},{value:"\u65B9\u6CD5\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u65F6\uFF0C\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A",paraId:7,tocIndex:2},{value:"group",paraId:7,tocIndex:2},{value:"\u53C2\u6570\uFF0C\u7528\u6765\u4E3A\u8BA1\u7B97\u5C5E\u6027\u5206\u7EC4\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u901A\u8FC7",paraId:7,tocIndex:2},{value:"runGroup",paraId:7,tocIndex:2},{value:"\u65B9\u6CD5\uFF0C\u7528\u6765\u624B\u52A8\u6267\u884C\u8BE5\u5206\u7EC4\u8BA1\u7B97\u51FD\u6570\u3002",paraId:7,tocIndex:2},{value:"\u4EE5\u4E0A\u6211\u4EEC\u5C06\u6240\u6709\u8BA1\u7B97\u51FD\u6570\u7684\u4F9D\u8D56\u5747\u8BBE\u4E3A",paraId:8},{value:"[]",paraId:8},{value:"\uFF0C\u4E5F\u5C31\u662F\u65E0\u4F9D\u8D56\uFF0C\u56E0\u6B64\u5F53",paraId:8},{value:"book.price",paraId:8},{value:",",paraId:8},{value:"book.count",paraId:8},{value:"\u7684\u503C\u53D8\u5316\u65F6\uFF0C",paraId:8},{value:"Total Group",paraId:8},{value:"\u548C",paraId:8},{value:"Average Group",paraId:8},{value:"\u7684\u8BA1\u7B97\u5C5E\u6027\u5E76\u4E0D\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\uFF0C\u6B64\u65F6\u5C31\u9700\u8981\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u3002",paraId:8},{value:"Q",paraId:9},{value:": \u4E3A\u4EC0\u4E48\u6B64\u5904\u8981\u6307\u5B9A",paraId:9},{value:"async=true",paraId:9},{value:"?",paraId:9},{value:"A",paraId:9},{value:": \u56E0\u6B64\u672C\u7AD9\u4F7F\u7528",paraId:9},{value:"webpack/babel",paraId:9},{value:"\u8FDB\u884C\u8F6C\u7801\uFF0C\u5F02\u6B65\u51FD\u6570\u4F1A\u88AB\u8F6C\u7801\u4E3A\u540C\u6B65\u51FD\u6570\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u81EA\u52A8\u8BC6\u522B",paraId:9},{value:"async",paraId:9},{value:"\u51FD\u6570\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u6307\u5B9A",paraId:9},{value:"async=true",paraId:9},{value:"computed",paraId:10,tocIndex:3},{value:"\u63D0\u4F9B\u4E86\u4E00\u4E2A",paraId:10,tocIndex:3},{value:"enable",paraId:10,tocIndex:3},{value:"\u5C5E\u6027\u7528\u6765\u63A7\u5236\u662F\u5426\u8FDB\u884C\u8BA1\u7B97\u3002\u5F53",paraId:10,tocIndex:3},{value:"enable=false",paraId:10,tocIndex:3},{value:"\u65F6\uFF0C\u5F53\u4F9D\u8D56\u53D8\u5316\u65F6\u4E0D\u4F1A\u8FDB\u884C\u8BA1\u7B97\uFF0C\u76F4\u81F3",paraId:10,tocIndex:3},{value:"enable=true",paraId:10,tocIndex:3},{value:"\u3002",paraId:10,tocIndex:3},{value:"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u6CD5\u6765\u542F\u7528/\u7981\u7528\u8BA1\u7B97\u3002",paraId:11,tocIndex:3},{value:"\u53EF\u4EE5\u5728\u4F7F\u7528",paraId:12,tocIndex:3},{value:"computed",paraId:12,tocIndex:3},{value:"\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u65F6\uFF0C\u4F20\u5165",paraId:12,tocIndex:3},{value:"enable",paraId:12,tocIndex:3},{value:"\u6765\u6307\u5B9A\u8BA1\u7B97\u5C5E\u6027\u7684\u9ED8\u8BA4\u72B6\u6001\u3002",paraId:12,tocIndex:3},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:12,tocIndex:3},{value:"ComputedObjects.get(<\u8DEF\u5F84\u540D\u79F0>)",paraId:12,tocIndex:3},{value:"\u6765\u542F\u7528/\u7981\u7528\u8BA1\u7B97\u3002",paraId:12,tocIndex:3},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:12,tocIndex:3},{value:"ComputedObjects.enableGroup(<true/false>)",paraId:12,tocIndex:3},{value:"\u6765\u542F\u7528/\u7981\u7528\u67D0\u4E2A\u7EC4\u7684\u8BA1\u7B97\u3002",paraId:12,tocIndex:3},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528",paraId:13,tocIndex:4},{value:"computed(getter,deps,options)",paraId:13,tocIndex:4},{value:"\u65B9\u6CD5\u6765\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027,\u901A\u8FC7",paraId:13,tocIndex:4},{value:'store.computedObject.get("<\u8DEF\u5F84>")',paraId:13,tocIndex:4},{value:"\u83B7\u53D6\u5230",paraId:13,tocIndex:4},{value:"ComputedObject",paraId:13,tocIndex:4},{value:"\u5B9E\u4F8B\uFF0C\u7136\u540E\u901A\u8FC7",paraId:13,tocIndex:4},{value:"ComputedObject",paraId:13,tocIndex:4},{value:"\u5B9E\u4F8B\u6765\u8BFB\u53D6\u548C\u4FEE\u6539\u8BA1\u7B97\u5C5E\u6027\u7684\u53C2\u6570\u3002",paraId:13,tocIndex:4}]},27828:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(22421);const n=[{value:"\u65E0\u8BBA\u662F\u540C\u6B65\u6216\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u5747\u63A8\u8350\u4F7F\u7528",paraId:0},{value:"computed",paraId:0},{value:"\u51FD\u6570\u6765\u58F0\u660E\u3002",paraId:0},{value:"computed",paraId:1,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u4E8E\u58F0\u660E\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u51FD\u6570\u7B7E\u540D\u58F0\u660E\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:`export function computed<R = any,ExtraAttrs extends Dict = {}>( getter: AsyncComputedGetter<R>,depends?:ComputedDepends,options?: ComputedOptions<R,ExtraAttrs>): ComputedDescriptor<R & ExtraAttrs>;
export function computed<R = any,ExtraAttrs extends Dict = {}>( getter: ComputedGetter<R>, options?: ComputedOptions<R,ExtraAttrs>): R
export function computed<R = any,ExtraAttrs extends Dict = {}>( getter: any,depends?:any, options?: ComputedOptions<R,ExtraAttrs>):any {
`,paraId:2,tocIndex:0},{value:"getter",paraId:3,tocIndex:1},{value:"\u53C2\u6570\u662F\u4E00\u4E2A\u540C\u6B65\u6216\u5F02\u6B65\u7684\u8BA1\u7B97\u51FD\u6570\uFF0C\u5176\u51FD\u6570\u7B7E\u540D\u58F0\u660E\u5982\u4E0B\uFF1A",paraId:3,tocIndex:1},{value:`export type ComputedGetter<R,Scope=any> = (scopeDraft: Scope) => Exclude<R,Promise<any>>
export type AsyncComputedGetter<R,Scope=any> = (scopeDraft:Scope,options:Required<ComputedParams>) => Promise<R>
`,paraId:4,tocIndex:1},{value:"getter",paraId:5,tocIndex:1},{value:"\u51FD\u6570\u7684",paraId:5,tocIndex:1},{value:"this",paraId:5,tocIndex:1},{value:"\u9ED8\u8BA4\u6307\u5411\u6839\u72B6\u6001\u5BF9\u8C61\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7",paraId:5,tocIndex:1},{value:"options.context",paraId:5,tocIndex:1},{value:"\u6765\u91CD\u65B0\u6307\u5B9A\u3002",paraId:5,tocIndex:1},{value:"getter",paraId:5,tocIndex:1},{value:"\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u5165\u53C2",paraId:5,tocIndex:1},{value:"scopeDraft",paraId:5,tocIndex:1},{value:"\uFF0C\u5373",paraId:5,tocIndex:1},{value:"\u4F5C\u7528\u57DF",paraId:5,tocIndex:1},{value:"\uFF0C\u9ED8\u8BA4\u6307\u5411\u5F53\u524D\u72B6\u6001\u5BF9\u8C61\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7",paraId:5,tocIndex:1},{value:"options.scope",paraId:5,tocIndex:1},{value:"\u6765\u91CD\u65B0\u6307\u5B9A\u3002",paraId:5,tocIndex:1},{value:"computed",paraId:6,tocIndex:2},{value:"\u652F\u6301\u4EE5\u4E0B\u8BA1\u7B97\u914D\u7F6E\u53C2\u6570\uFF1A",paraId:6,tocIndex:2},{value:`
export interface ComputedOptions<Value=any,Extras extends Dict={}> {
  // \u8BA1\u7B97\u51FD\u6570\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5219\u81EA\u52A8\u751F\u6210\u4E00\u4E2A\u552F\u4E00\u6807\u8BC6
  id?:string | ((path:string[])=>string)                         
  context?: ComputedContext             // \u8BA1\u7B97\u51FD\u6570\u7684this
  scope?  : ComputedScope               // \u8BA1\u7B97\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570
  // \u521D\u59CB\u503C
  initial?: Value
  // \u5F02\u6B65\u8BA1\u7B97,\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u901A\u8FC7typeof(fn)=="async function"\u6765\u5224\u65AD\u662F\u5426\u662F\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570
  // \u4F46\u662F\u5728\u8FD4\u56DEPromise\u6216\u8005Babel\u8F6C\u7801\u7B49\u60C5\u51B5\u4E0B\uFF0C\u5224\u65AD\u53EF\u80FD\u5931\u6548\u65F6\uFF0C\u9700\u8981\u624B\u52A8\u6307\u5B9Aasync=true
  async?:boolean
  /**
   * \u6307\u5B9A\u8D85\u65F6\u65F6\u95F4\uFF0C\u5F53\u8BA1\u7B97\u51FD\u6570\u6267\u884C\u8D85\u8FC7\u6307\u5B9A\u65F6\u95F4\u540E\uFF0C\u4F1A\u81EA\u52A8\u8BBE\u7F6Eloading\u4E3Afalse
   * \u5982\u679Ctimeout\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5219\u7B2C\u4E00\u4E2A\u503C\u8868\u793A\u8D85\u65F6\u65F6\u95F4\uFF0C\u7B2C\u4E8C\u4E2A\u503C\u8868\u793A\u8D85\u65F6\u671F\u7684\u5012\u8BA1\u65F6\u95F4\u9694
   * \u4F8B\u5982\uFF1A[1000,10]\u8868\u793A1000ms\u4EE3\u88681s\u540E\u8D85\u65F6\u5E76\u7F6Eloading=false
   * 10\u4EE3\u8868setInterval(1000/100), \u6BCF\u6B21\u6267\u884C\u65F6-1\uFF0C\u76F4\u5230\u4E3A0\u65F6\u505C\u6B62
   * \u8FD9\u6837\u5C31\u53EF\u4EE5\u901A\u8FC7\u7ED1\u5B9Atimeout\u503C\u6765\u5B9E\u73B0\u5012\u8BA1\u65F6\u7684\u6548\u679C
   * \u5982\u679C\u8981\u5B9E\u73B060\u79D2\u5012\u8BA1\u65F6\uFF0C\u53EF\u4EE5\u8FD9\u6837\u5199\uFF1A[60*1000,60],\u8FD9\u6837value.timeout\u5C31\u4F1A\u4ECE60\u5F00\u59CB\u9012\u51CF
   */
  timeout?:number  | [number,number]
  // \u662F\u5426\u7ACB\u523B\u8BA1\u7B97\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF0C\u5728\u521B\u5EFA\u65F6\u9A6C\u4E0A\u8FDB\u884C\u8BA1\u7B97\uFF0C=false,\u5219\u53EA\u6709\u5728\u4F9D\u8D56\u53D8\u5316\u65F6\u624D\u4F1A\u6267\u884C\uFF0C\u6216\u8005\u624B\u52A8\u8C03\u7528run\u65B9\u6CD5
  immediate?:boolean                     
  /**
   *  \u8BA1\u7B97\u51FD\u6570\u4E0D\u53EF\u91CD\u5165\uFF0C\u5373\u540C\u4E00\u4E2A\u8BA1\u7B97\u51FD\u6570\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u4E0D\u4F1A\u518D\u6B21\u6267\u884C   
   *  \u5982\u679C\u91CD\u5165\u65F6\uFF0C\u5219\u5728debug=true\u65F6\u4F1A\u5728\u63A7\u5236\u53F0\u6253\u5370\u51FA\u8B66\u544A\u4FE1\u606F
   */
  noReentry?:boolean
  /**
   * \u63D0\u4F9B\u4E00\u4E2A\u5F02\u6B65\u4FE1\u53F7\uFF0C\u7528\u6765\u4F20\u9012\u7ED9\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570\u4EE5\u4FBF\u53EF\u4EE5\u53D6\u6D88\u5F02\u6B65\u8BA1\u7B97
   */
  abortSignal?:()=>AbortSignal | null | void | undefined
  /**
   * \u5F53\u8BA1\u7B97\u51FD\u6570\u6267\u884C\u51FA\u9519\u65F6\u7684\u91CD\u8BD5\u6B21\u6570
   * 
   * retry:3  \u8868\u793A\u6700\u591A\u91CD\u8BD53\u6B21,\u91CD\u8BD5\u95F4\u9694\u4E3A0\uFF0C\u52A0\u4E0A\u7B2C1\u6B21\u6267\u884C\uFF0C\u603B\u5171\u6267\u884C4\u6B21
   * retry:[3,1000] \u8868\u793A\u6700\u591A\u91CD\u8BD53\u6B21\uFF0C\u91CD\u8BD5\u95F4\u9694\u4E3A1000ms\uFF0C\u52A0\u4E0A\u7B2C1\u6B21\u6267\u884C\uFF0C\u603B\u5171\u6267\u884C4\u6B21
   * 
   * \u91CD\u8BD5\u6570\u636E\u53EF\u4EE5\u901A\u8FC7AsyncComputedObject.retry\u83B7\u53D6
   * \u5F53\u9996\u6B21\u6267\u884C\u5931\u8D25\u65F6\u89E6\u53D1\u91CD\u8BD5\uFF0C\u6B64\u65F6AsyncComputedObject.retry=3\uFF0C\u7136\u540E\u6BCF\u6B21\u91CD\u8BD5-1\uFF0C\u76F4\u5230\u4E3A0\u65F6\u505C\u6B62\u91CD\u8BD5
   * \u53EF\u4EE5\u5728UI\u4E2D\u901A\u8FC7AsyncComputedObject.retry\u6765\u5B9E\u65F6\u663E\u793A\u91CD\u8BD5\u6B21\u6570
   * 
   */
  retry?:number | [number,number]
  /**
   * \u5F53\u6267\u884C\u8BA1\u7B97getter\u51FD\u6570\u51FA\u9519\u65F6\u7684\u56DE\u8C03
   */
  onError?:(e:Error)=>void              
  /**
   * \u6307\u5B9A\u8BA1\u7B97\u7ED3\u679C\u66F4\u65B0\u5230\u54EA\u91CC
   * 
   * self: \u9ED8\u8BA4\uFF0C\u539F\u5730\u66FF\u6362\uFF0C\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u4F1A\u5C06\u8BA1\u7B97\u51FD\u6570\u8F6C\u6362\u6210\u4E00AsyncComputedObject\u5BF9\u8C61\uFF0C\u6B64\u5BF9\u8C61\u5305\u542Bvalue,loading,error\u7B49\u5C5E\u6027
   * root: \u66F4\u65B0\u5230\u6839\u5BF9\u8C61\u4E2D
   * parent: \u66F4\u65B0\u5230\u7236\u5BF9\u8C61\u4E2D
   * current: \u66F4\u65B0\u5230\u5F53\u524D\u5BF9\u8C61\u4E2D
   * none: \u4E0D\u66F4\u65B0\u5230\u4EFB\u4F55\u5BF9\u8C61\u4E2D
   * {String} \u5F53\u524D\u5BF9\u8C61\u7684\u6307\u5B9A\u952E
   * {Array} \u4ECE\u6839\u5BF9\u8C61\u5F00\u59CB\u7684\u5B8C\u6574\u8DEF\u5F84
   * 
   */
  toComputedResult?: 'self' | 'root' | 'parent' | 'current' | 'none' | string[] | string 
  /**
   * \u4E3A\u8BE5\u8BA1\u7B97\u51FD\u6570\u6307\u5B9A\u4E00\u4E2A\u5206\u7EC4\u540D
   * 
   * \u6B64\u5C5E\u6027\u7528\u6765\u5C06\u8BA1\u7B97\u51FD\u6570\u5206\u7EC4\uFF0C\u6BD4\u5982\u4E00\u4E2Astore\u4E2D\u5177\u6709\u76F8\u540Cgroup\u7684\u8BA1\u7B97\u51FD\u6570
   * 
   * \u7136\u540E\u5C31\u53EF\u4EE5\u542F\u7528/\u5173\u95ED/\u8FD0\u884C\u6307\u5B9A\u5206\u7EC4\u7684\u8BA1\u7B97\u51FD\u6570
   * 
   * \u5728\u8868\u5355\u4E2D\u901A\u8FC7\u4E3A\u6240\u6709validate\u6307\u5B9A\u7EDF\u4E00\u7684\u5206\u7EC4\u540D\u79F0\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u7EDF\u4E00\u63A7\u5236\u8868\u5355\u7684\u9A8C\u8BC1\u662F\u5426\u8BA1\u7B97
   * 
   * store.computedObjects.runGroup("a"])
   * 
   */
  group?:string
  /**
   * \u8BA1\u7B97\u5F00\u5173
   * \u5F53=false\u65F6\u4E0D\u4F1A\u6267\u884C\u8BA1\u7B97
   */

  enable?:boolean
  /**
   * \u989D\u5916\u5408\u5E76\u5230\u8BA1\u7B97\u7ED3\u679CAsyncComputedObject\u4E2D\u7684\u5C5E\u6027
   */
  extras?:Extras
};

`,paraId:7,tocIndex:2}]},31516:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(69);const n=[{value:"\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\u76F4\u63A5\u58F0\u660E\u5728\u72B6\u6001\u4E2D\uFF0C\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u666E\u901A\u7684\u51FD\u6570\uFF0C,\u5F53",paraId:0,tocIndex:0},{value:"State",paraId:0,tocIndex:0},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1\u8BA1\u7B97\u5C5E\u6027\u7684\u91CD\u65B0\u8BA1\u7B97\uFF0C\u5C06\u8BA1\u7B97\u7ED3\u679C\u8D4B\u503C\u7ED9",paraId:0,tocIndex:0},{value:"State",paraId:0,tocIndex:0},{value:"\u4E2D\u7684\u5BF9\u5E94\u5C5E\u6027\u3002",paraId:0,tocIndex:0},{value:"\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\u7684\u4F9D\u8D56\u6536\u96C6\u662F\u81EA\u52A8\u7684\uFF0C\u4E0D\u9700\u8981\u663E\u5F0F\u6307\u5B9A\u4F9D\u8D56\u53C2\u6570\uFF0C\u5F53",paraId:1,tocIndex:1},{value:"State",paraId:1,tocIndex:1},{value:"\u4E2D\u7684\u6240\u4F9D\u8D56\u7684\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1\u8BA1\u7B97\u5C5E\u6027\u7684\u91CD\u65B0\u8BA1\u7B97\u3002",paraId:1,tocIndex:1},{value:`const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: (user)=>{
      return user.firstName+user.lastName
    } 
  }
} 
`,paraId:2,tocIndex:1},{value:"\u4E0A\u4F8B\u4E2D\uFF0C",paraId:3,tocIndex:1},{value:"fullName",paraId:3,tocIndex:1},{value:"\u662F\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u4F9D\u8D56\u4E8E",paraId:3,tocIndex:1},{value:"firstName",paraId:3,tocIndex:1},{value:"\u548C",paraId:3,tocIndex:1},{value:"lastName",paraId:3,tocIndex:1},{value:",\u5185\u90E8\u7684\u5B9E\u73B0\u673A\u5236\u662F\u8FD9\u6837\u7684\uFF1A",paraId:3,tocIndex:1},{value:"\u9996\u5148\u6574\u4E2A",paraId:4,tocIndex:1},{value:"state",paraId:4,tocIndex:1},{value:"\u5DF2\u7ECF\u88AB\u5305\u88C5\u4E3A\u4E00\u4E2A\u6DF1\u5C42\u7684",paraId:4,tocIndex:1},{value:"proxy",paraId:4,tocIndex:1},{value:"\u5BF9\u8C61\u3002",paraId:4,tocIndex:1},{value:"\u5F53\u7B2C\u4E00\u6B21\u8FD0\u884C\u65F6\u8BFB\u53D6",paraId:4,tocIndex:1},{value:"fullName",paraId:4,tocIndex:1},{value:"\u65F6\uFF0C\u7136\u540E\u4F1A\u89E6\u53D1\u8BFB\u53D6",paraId:4,tocIndex:1},{value:"firstName",paraId:4,tocIndex:1},{value:"\u548C",paraId:4,tocIndex:1},{value:"lastName",paraId:4,tocIndex:1},{value:"\uFF0C\u5728",paraId:4,tocIndex:1},{value:"firstName",paraId:4,tocIndex:1},{value:"\u548C",paraId:4,tocIndex:1},{value:"lastName",paraId:4,tocIndex:1},{value:"\u7684",paraId:4,tocIndex:1},{value:"proxy",paraId:4,tocIndex:1},{value:"\u5185\u90E8\u5C31\u53EF\u4EE5\u77E5\u9053\u5176\u4F9D\u8D56",paraId:4,tocIndex:1},{value:"firstName",paraId:4,tocIndex:1},{value:"\u548C",paraId:4,tocIndex:1},{value:"lastName",paraId:4,tocIndex:1},{value:"\u4E86\u3002\u5C06\u4F9D\u8D56\u4FE1\u606F\u4FDD\u5B58\u8D77\u6765\u5C31\u53EF\u4EE5\u4E86\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u81EA\u52A8\u83B7\u53D6\u5230",paraId:4,tocIndex:1},{value:"fullName",paraId:4,tocIndex:1},{value:"\u7684\u4F9D\u8D56\u4E86\u3002",paraId:4,tocIndex:1},{value:"\u901A\u4FD7\u5730\u8BF4\uFF0C\u5C31\u662F\u8FD0\u884C\u4E00\u6B21",paraId:4,tocIndex:1},{value:"fullName",paraId:4,tocIndex:1},{value:"\u51FD\u6570\uFF0C\u5C31\u53EF\u4EE5\u81EA\u52A8\u6536\u96C6",paraId:4,tocIndex:1},{value:"firstName",paraId:4,tocIndex:1},{value:"\u548C",paraId:4,tocIndex:1},{value:"lastName",paraId:4,tocIndex:1},{value:"\u7684\u4F9D\u8D56,\u56E0\u6B64\u4E0D\u9700\u8981\u624B\u52A8\u6307\u5B9A\u4F9D\u8D56\u53C2\u6570\u3002",paraId:4,tocIndex:1},{value:"\u4EE5\u4E0A\u4EC5\u4EC5\u4F9D\u8D56\u6536\u96C6\u7684\u662F\u4E00\u4E2A\u57FA\u672C\u601D\u8DEF\uFF0C\u5B9E\u9645\u4E0A",paraId:4,tocIndex:1},{value:"@speedform/reactive",paraId:4,tocIndex:1},{value:"\u7684\u4F9D\u8D56\u6536\u96C6\u673A\u5236\u662F\u975E\u5E38\u590D\u6742\u7684\uFF0C\u5B83\u53EF\u4EE5\u81EA\u52A8\u5904\u7406",paraId:4,tocIndex:1},{value:"Array",paraId:4,tocIndex:1},{value:"\u548C",paraId:4,tocIndex:1},{value:"Object",paraId:4,tocIndex:1},{value:"\u7B49\u7B49\uFF0C\u5176\u6838\u5FC3\u662F\u7531",paraId:4,tocIndex:1},{value:"helux",paraId:4,tocIndex:1},{value:"\u63D0\u4F9B\u7684\u652F\u6301\u3002",paraId:4,tocIndex:1},{value:"\u540C\u6B65\u4F9D\u8D56\u6536\u96C6\u662F\u57FA\u4E8E",paraId:4,tocIndex:1},{value:"Proxy",paraId:4,tocIndex:1},{value:"\u5B9E\u73B0\u7684\uFF0C\u56E0\u6B64\u4E0D\u652F\u6301",paraId:4,tocIndex:1},{value:"IE",paraId:4,tocIndex:1},{value:"\u6D4F\u89C8\u5668\u3002",paraId:4,tocIndex:1},{value:"\u540C\u6B65\u81EA\u52A8\u4F9D\u8D56\u6536\u96C6\u4E5F\u6709\u4E00\u4E9B\u9650\u5236\uFF0C\u4ECE\u4E0A\u9762\u7684\u539F\u7406\u4E0A\u53EF\u4EE5\u770B\u5230\uFF0C\u4F9D\u8D56\u7684\u6536\u96C6\u662F\u901A\u8FC7\u7B2C\u4E00\u6B21\u8FD0\u884C\u4E00\u6B21\u8BA1\u7B97\u51FD\u6570\u6765\u83B7\u53D6\u7684\u3002\u56E0\u6B64\uFF0C\u5FC5\u987B\u4FDD\u8BC1\u9996\u6B21\u8FD0\u884C\u5C31\u53EF\u4EE5\u5F97\u5230\u6240\u6709\u4F9D\u8D56\uFF0C\u5982\u679C\u8BA1\u7B97\u51FD\u6570\u4E2D\u5B58\u5728\u4E00\u4E9B\u6761\u4EF6\u5206\u652F\u7B49\uFF0C\u5C31\u53EF\u80FD\u4E0D\u80FD\u6B63\u786E\u6536\u96C6\u4F9D\u8D56\u4E86\u3002",paraId:4,tocIndex:1},{value:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u9519\u8BEF\u6536\u96C6\u4F9D\u8D56\u7684\u4F8B\u5B50\uFF1A",paraId:5,tocIndex:1},{value:`const state = {
    firstName:"Zhang",
    lastName:"Fisher",
    age:18,
    fullName: (user)=>{
      if(user.age>0 ) user.firstName
      return user.firstName+user.lastName
    } 
  }
`,paraId:6,tocIndex:1},{value:"\u7531\u4E8E\u7B2C\u4E00\u6B21\u8FD0\u884C\u65F6\uFF0C",paraId:7,tocIndex:1},{value:"age",paraId:7,tocIndex:1},{value:"\u662F",paraId:7,tocIndex:1},{value:"18",paraId:7,tocIndex:1},{value:"\uFF0C\u56E0\u6B64\u53EA\u6536\u96C6\u5230",paraId:7,tocIndex:1},{value:"user.firstName",paraId:7,tocIndex:1},{value:"\u662F\u4F9D\u8D56\u7684,\u800C",paraId:7,tocIndex:1},{value:"user.lastName",paraId:7,tocIndex:1},{value:`\u6CA1\u6709\u88AB\u6536\u96C6\u5230\uFF0C\u6240\u4EE5\u4E0D\u662F\u4F9D\u8D56\u7684\u3002
\u4EE5\u4E3A`,paraId:7,tocIndex:1},{value:"fullName",paraId:7,tocIndex:1},{value:"\u4F9D\u8D56\u4E8E",paraId:7,tocIndex:1},{value:"firstName",paraId:7,tocIndex:1},{value:"\u548C",paraId:7,tocIndex:1},{value:"lastName",paraId:7,tocIndex:1},{value:"\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0A",paraId:7,tocIndex:1},{value:"fullName",paraId:7,tocIndex:1},{value:"\u53EA\u4F9D\u8D56\u4E8E",paraId:7,tocIndex:1},{value:"firstName",paraId:7,tocIndex:1},{value:"\uFF0C",paraId:7,tocIndex:1},{value:"\u53EF\u4EE5\u76F4\u63A5\u5728",paraId:8,tocIndex:2},{value:"State",paraId:8,tocIndex:2},{value:"\u4E2D\u58F0\u660E\u540C\u6B65\u8BA1\u7B97\u51FD\u6570\u3002",paraId:8,tocIndex:2},{value:`const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: (user)=>{
      return user.firstName+user.lastName
    } 
  }
} 
`,paraId:9,tocIndex:2},{value:"fullName",paraId:10,tocIndex:2},{value:"\u662F\u4E00\u4E2A\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5F53",paraId:10,tocIndex:2},{value:"firstName",paraId:10,tocIndex:2},{value:"\u6216",paraId:10,tocIndex:2},{value:"lastName",paraId:10,tocIndex:2},{value:"\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97",paraId:10,tocIndex:2},{value:"fullName",paraId:10,tocIndex:2},{value:"\u7684\u503C\u3002",paraId:10,tocIndex:2},{value:"fullName",paraId:10,tocIndex:2},{value:"\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570(\u5373",paraId:10,tocIndex:2},{value:"\u4F5C\u7528\u57DF",paraId:10,tocIndex:2},{value:")\u662F\u7531",paraId:10,tocIndex:2},{value:"createStore",paraId:10,tocIndex:2},{value:"\u65F6\u6307\u5B9A\u7684",paraId:10,tocIndex:2},{value:"computedScope",paraId:10,tocIndex:2},{value:"\u6307\u5B9A\u7684,\u9ED8\u8BA4\u6307\u5B9A\u7684",paraId:10,tocIndex:2},{value:"ComputedScopeRef.Current",paraId:10,tocIndex:2},{value:"\u3002\u56E0\u6B64\uFF0C",paraId:10,tocIndex:2},{value:"fullName",paraId:10,tocIndex:2},{value:"\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F",paraId:10,tocIndex:2},{value:"user",paraId:10,tocIndex:2},{value:"\u5BF9\u8C61\u3002",paraId:10,tocIndex:2},{value:"\u5982\u679C\u540C\u6B65\u8BA1\u7B97\u51FD\u6570\u662F\u4E00\u4E2A\u666E\u901A\u51FD\u6570\u800C\u4E0D\u662F\u7BAD\u5934\u51FD\u6570\uFF0C\u90A3\u4E48",paraId:10,tocIndex:2},{value:"this",paraId:10,tocIndex:2},{value:"\u6307\u5411\u662F\u7531",paraId:10,tocIndex:2},{value:"createStore",paraId:10,tocIndex:2},{value:"\u65F6\u6307\u5B9A\u7684",paraId:10,tocIndex:2},{value:"computedThis",paraId:10,tocIndex:2},{value:"\u786E\u5B9A\u7684\u3002",paraId:10,tocIndex:2},{value:"computed",paraId:11},{value:"\u76F4\u63A5\u5728",paraId:12,tocIndex:3},{value:"State",paraId:12,tocIndex:3},{value:"\u4E2D\u58F0\u660E\u540C\u6B65\u8BA1\u7B97\u51FD\u6570\u7684\u65B9\u5F0F\uFF0C\u6709\u4E00\u4E2A\u7F3A\u70B9\uFF0C\u5C31\u662F\u65E0\u6CD5\u6307\u5B9A\u8BA1\u7B97\u51FD\u6570\u7684",paraId:12,tocIndex:3},{value:"this",paraId:12,tocIndex:3},{value:"\u548C",paraId:12,tocIndex:3},{value:"\u4F5C\u7528\u57DF",paraId:12,tocIndex:3},{value:"\uFF0C\u56E0\u6B64",paraId:12,tocIndex:3},{value:"@speedform/reactive",paraId:12,tocIndex:3},{value:"\u63D0\u4F9B\u4E86",paraId:12,tocIndex:3},{value:"computed",paraId:12,tocIndex:3},{value:"\u51FD\u6570\u6765\u58F0\u660E\u540C\u6B65\u8BA1\u7B97\u51FD\u6570,\u5141\u8BB8\u505A\u66F4\u591A\u7684\u63A7\u5236\u3002",paraId:12,tocIndex:3},{value:`const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName:computed<string>((state)=>{
      return state.user.firstName+state.user.lastName
    },{
      context:ComputedScopeRef.Root             // \u8BA1\u7B97\u51FD\u6570\u7684this
      scope:ComputedScopeRef.Root               // \u8BA1\u7B97\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570
    }) 
  }
} 
`,paraId:13,tocIndex:3},{value:"\u7531\u4E8E\u53EF\u4EE5\u6307\u5B9A",paraId:14,tocIndex:3},{value:"computedScope",paraId:14,tocIndex:3},{value:",\u56E0\u6B64\u8BA1\u7B97\u51FD\u6570\u5C31\u53EF\u4EE5\u5B9E\u73B0\u76F8\u5BF9\u8BA1\u7B97\u3002",paraId:14,tocIndex:3},{value:"\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\u5728\u58F0\u660E\u65F6\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7ECF\u8FC7",paraId:15,tocIndex:4},{value:"createStore",paraId:15,tocIndex:4},{value:"\u5904\u7406\u540E\uFF0C\u4F1A\u81EA\u52A8\u8F6C\u6362\u4E3A\u4E00\u4E2A\u5C5E\u6027\uFF0C\u5176\u503C\u662F\u8BA1\u7B97\u7ED3\u679C\u3002",paraId:15,tocIndex:4},{value:"\u56E0\u6B64\uFF0C\u5728\u4E0A\u4F8B\u4E2D\uFF0C",paraId:16,tocIndex:4},{value:"fullName",paraId:16,tocIndex:4},{value:"\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F46\u662F\u5728\u4F7F\u7528\u65F6\uFF0C",paraId:16,tocIndex:4},{value:"fullName",paraId:16,tocIndex:4},{value:"\u662F\u4E00\u4E2A\u5C5E\u6027\uFF0C\u5176\u503C\u662F\u8BA1\u7B97\u7ED3\u679C\u3002\u8BE6\u89C1\u4E0A\u4E00\u8282\u8BA1\u7B97\u5C5E\u6027\u7684\u8BF4\u660E\u3002",paraId:16,tocIndex:4},{value:`const state = {
  user:{
    firstName:"Zhang",
    lastName:"Fisher",
    fullName: (user)=>{
      return user.firstName+user.lastName
    }
  }
}  
const store = createStore(state)
store.state.user.fullName=="ZhangFisher" // \u8BA1\u7B97\u7ED3\u679C

`,paraId:17,tocIndex:4}]},49170:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(15101);const n=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u5E95\u5C42\u7684\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7531",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u9A71\u52A8\uFF0C",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u5177\u5907\u6D3E\u751F\u8BA1\u7B97\u3001\u4F9D\u8D56\u6536\u96C6\u3001\u4FE1\u53F7\u7684\u54CD\u5E94\u5F0F\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u5B83\u7684\u8BBE\u8BA1\u7406\u5FF5\u4E0E",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u8BBE\u8BA1\u7406\u5FF5\u9AD8\u5EA6\u5951\u5408\uFF0C\u4E3A",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u6570\u636E\u9A71\u52A8\u80FD\u529B\u3002",paraId:1,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u662F\u5728",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u7684\u57FA\u7840\u4E0A\uFF0C\u5C01\u88C5\u4E86\u7528\u6765\u63D0\u4F9B\u66F4\u52A0\u6613\u7528\u53CB\u597D\u7684\u72B6\u6001\u5E93\u7BA1\u7406\u3002",paraId:1,tocIndex:0},{value:"\u4F5C\u4E3A",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u5E95\u5C42\u4F9D\u8D56\uFF0C\u4E86\u89E3\u548C\u638C\u63E1",paraId:1,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u7684\u539F\u7406\u548C\u4F7F\u7528\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8BA9\u4F60\u66F4\u52A0\u6DF1\u5165\u7406\u89E3",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u8BBE\u8BA1\u7406\u5FF5\u548C\u4F7F\u7528\u65B9\u6CD5\u3002",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:2,tocIndex:1},{value:"\u4F9D\u8D56\u4E8E",paraId:2,tocIndex:1},{value:"@speedform/reactive",paraId:2,tocIndex:1},{value:"\uFF0C\u5B89\u88C5",paraId:2,tocIndex:1},{value:"SpeedForm",paraId:2,tocIndex:1},{value:"\u540E\u5C31\u5DF2\u7ECF\u5B89\u88C5\u4E86",paraId:2,tocIndex:1},{value:"@speedform/reactive",paraId:2,tocIndex:1},{value:"\uFF0C\u4E5F\u53EF\u4EE5\u72EC\u7ACB\u5B89\u88C5\u4F7F\u7528",paraId:2,tocIndex:1},{value:"@speedform/reactive",paraId:2,tocIndex:1},{value:"\u3002",paraId:2,tocIndex:1},{value:`
pnpm add @speedform/reactive
npm install @speedform/reactive
yarn add @speedform/reactive

`,paraId:3,tocIndex:1}]},19752:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(18395);const n=[{value:"\u5F53\u72B6\u6001\u53D8\u5316\u65F6\u5C06\u89E6\u53D1\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\uFF0C",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u63D0\u4F9B\u66F4\u52A0\u7EC6\u7C92\u5EA6\u7684\u6E32\u67D3\u3002",paraId:0,tocIndex:0},{value:"\u4F5C\u4E3A\u5BF9\u6BD4\uFF0C\u6211\u4EEC\u5148\u770B\u4E00\u4E2A\u4F20\u7EDF\u7684",paraId:1,tocIndex:1},{value:"Context",paraId:1,tocIndex:1},{value:"\u7684\u6E32\u67D3\u4F8B\u5B50\u3002",paraId:1,tocIndex:1},{value:"\u4ECE\u4E0A\u9762\u7684\u4F8B\u5B50\u53EF\u770B\u5230\uFF0C\u5F53\u66F4\u65B0",paraId:2},{value:"Context.age",paraId:2},{value:"\u65F6\uFF0C\u6240\u6709\u7684\u5B50\u7EC4\u4EF6\u4E0D\u7BA1\u662F\u5426\u6709\u4F7F\u7528",paraId:2},{value:"Age",paraId:2},{value:"\u5747\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C\u8FD9\u662F\u4E0D\u5FC5\u8981\u7684\uFF0C\u56E0\u4E3A\u5B50\u7EC4\u4EF6\u5E76\u6CA1\u6709\u4F7F\u7528\u5230",paraId:2},{value:"Context",paraId:2},{value:"\u7684\u6570\u636E\uFF0C\u4E3A\u6B64\u6211\u4EEC\u4E00\u822C\u9700\u8981\u4F7F\u7528",paraId:2},{value:"React.memo",paraId:2},{value:"\u6216\u4E00\u4E9B\u7B2C\u4E09\u65B9\u5E93\u6765\u8FDB\u884C\u4F18\u5316\u6E32\u67D3\u3002",paraId:2},{value:"\u6700\u5927\u7684\u95EE\u9898\u5728\u4E8E\uFF0C\u5F53\u66F4\u65B0\u6839Context\u65F6\uFF0C\u6240\u6709\u7684\u5B50\u7EC4\u4EF6\u90FD\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u8FD9\u662F\u4E0D\u5FC5\u8981\u7684\uFF0C\u56E0\u4E3A\u5B50\u7EC4\u4EF6\u5E76\u6CA1\u6709\u4F7F\u7528\u5230\u6839Context\u7684\u6570\u636E\u3002\u6211\u4EEC\u5E0C\u671B\u80FD\u5B9E\u73B0\u66F4\u7EC6\u7C92\u5EA6\u7684\u6E32\u67D3\uFF0C\u53EA\u6709\u5F53\u5B50\u7EC4\u4EF6\u4F7F\u7528\u5230\u7684\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:3},{value:"\u4F7F\u7528",paraId:4,tocIndex:2},{value:"@speedform/reactive",paraId:4,tocIndex:2},{value:"\u7684",paraId:4,tocIndex:2},{value:"useState",paraId:4,tocIndex:2},{value:"\u53EF\u4EE5\u4F7F",paraId:4,tocIndex:2},{value:"\u6E32\u67D3\u9897\u7C92\u5EA6\u9650\u5B9A\u5728\u7EC4\u4EF6\u8303\u56F4",paraId:4,tocIndex:2},{value:"\uFF0C\u53EA\u6709\u4F7F\u7528\u5230\u6570\u636E\u7684\u7EC4\u4EF6\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:4,tocIndex:2},{value:"\u5728\u4E0A\u4F8B\u4E2D\uFF0C\u5F53\u66F4\u65B0",paraId:5},{value:"Age",paraId:5},{value:"\u65F6\uFF0C\u4EC5\u6839\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C",paraId:5},{value:"FirstName",paraId:5},{value:"\u548C",paraId:5},{value:"LastName",paraId:5},{value:"\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5E76\u6CA1\u6709\u4F7F\u7528\u5230",paraId:5},{value:"Age",paraId:5},{value:"\u3002",paraId:5},{value:"\u5F53\u5728\u6839\u7EC4\u4EF6\u4E2D\u66F4\u65B0",paraId:5},{value:"FirstName",paraId:5},{value:"\u65F6\uFF0C\u4EC5",paraId:5},{value:"FirstName",paraId:5},{value:"\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002\u800C",paraId:5},{value:"LastName",paraId:5},{value:"\u7EC4\u4EF6\u4E2D\u6CA1\u6709",paraId:5},{value:"FirstName",paraId:5},{value:"\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:5},{value:"@speedform/reactive",paraId:6,tocIndex:3},{value:"\u63D0\u4F9B\u7684",paraId:6,tocIndex:3},{value:"state",paraId:6,tocIndex:3},{value:"\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u914D\u7F6E",paraId:6,tocIndex:3},{value:"signal",paraId:6,tocIndex:3},{value:"\u673A\u5236\u53EF\u4EE5\u76F4\u63A5\u8FDB\u884C\u8BFB\u53D6",paraId:6,tocIndex:3},{value:"\u6E32\u67D3\u9897\u7C92\u5EA6\u9650\u5B9A\u5728\u7EC4\u4EF6\u8303\u56F4",paraId:6,tocIndex:3},{value:"\uFF0C\u53EA\u6709\u4F7F\u7528\u5230\u6570\u636E\u7684\u7EC4\u4EF6\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:6,tocIndex:3},{value:"\u57FA\u4E8E",paraId:7,tocIndex:3},{value:"Signal",paraId:7,tocIndex:3},{value:",",paraId:7,tocIndex:3},{value:"\u6E32\u67D3\u9897\u7C92\u5EA6\u53EF\u4EE5\u662F\u7EC4\u4EF6\u4E2D\u7684\u4E00\u4E2A\u7247\u6BB5",paraId:7,tocIndex:3},{value:"\uFF0C\u66F4\u52A0\u7CBE\u7EC6\uFF0C\u66F4\u52A0\u9AD8\u6548\u3002",paraId:7,tocIndex:3},{value:"\u5728\u4E0A\u4F8B\u4E2D\uFF0C\u5F53\u66F4\u65B0",paraId:8},{value:"Age",paraId:8},{value:"\u65F6\uFF0C\u4EC5\u6839\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C",paraId:8},{value:"FirstName",paraId:8},{value:"\u548C",paraId:8},{value:"LastName",paraId:8},{value:"\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5E76\u6CA1\u6709\u4F7F\u7528\u5230",paraId:8},{value:"Age",paraId:8},{value:"\u3002",paraId:8},{value:"\u5F53\u66F4\u65B0",paraId:8},{value:"FirstName",paraId:8},{value:"\u65F6\uFF0C\u4EC5",paraId:8},{value:"FirstName",paraId:8},{value:"\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002\u800C",paraId:8},{value:"LastName",paraId:8},{value:"\u7EC4\u4EF6\u4E2D\u867D\u7136\u7528\u5230\u4E86",paraId:8},{value:"FirstName",paraId:8},{value:"\uFF0C\u4F46\u662F\u6CA1\u6709\u4F7F\u7528",paraId:8},{value:"$(FirstName)",paraId:8},{value:"\uFF0C\u4E5F\u5C31\u662F\u4F7F\u7528\u4FE1\u53F7\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:8},{value:"store.state",paraId:8},{value:"\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:8},{value:"reactive",paraId:8},{value:",\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A",paraId:8},{value:"Proxy",paraId:8},{value:"\u5BF9\u8C61\u6765\u6536\u96C6\u4F9D\u8D56\u3002\u7136\u540E\u4F7F\u7528",paraId:8},{value:"$(<reactive>)",paraId:8},{value:"\u6570\u636E\u53D8\u66F4\u4EC5\u89E6\u53D1",paraId:8},{value:"$",paraId:8},{value:"\u7B26\u53F7\u533A\u57DF\u5185\u91CD\u6E32\u67D3\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6700\u7EC6\u7C92\u5EA6\u7684\u6E32\u67D3\u3002",paraId:8},{value:"\u5173\u4E8E",paraId:8},{value:"Signal",paraId:8},{value:"\u673A\u5236\u7684\u66F4\u591A\u5185\u5BB9\u8BF7\u53C2\u8003",paraId:8},{value:"helux/Signal",paraId:8},{value:"\u3002",paraId:8}]},64005:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(58578);const n=[{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u4E86\u4E09\u79CD\u4E0D\u540C\u7684\u65B9\u5F0F\u6765\u5B58\u53D6\u72B6\u6001\u3002",paraId:0,tocIndex:0},{value:"useState",paraId:1,tocIndex:0},{value:": \u7528\u6765\u5728\u7EC4\u4EF6\u4E2D\u8BBF\u95EE\u548C\u66F4\u65B0",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"\u7684\u72B6\u6001\u6570\u636E\uFF0C\u66F4\u65B0\u65F6\u4F1A\u5BFC\u81F4\u91CD\u65B0\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"store.state",paraId:1,tocIndex:0},{value:": \u76F4\u63A5\u8BFB\u5199",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"\u7684\u72B6\u6001\u6570\u636E\uFF0C",paraId:1,tocIndex:0},{value:"store.state",paraId:1,tocIndex:0},{value:"\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:1,tocIndex:0},{value:"reactive",paraId:1,tocIndex:0},{value:"\uFF0C\u5176\u5B9E\u8D28\u662F\u901A\u8FC7",paraId:1,tocIndex:0},{value:"Proxy",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u7684\uFF0C\u5F53\u8BFB\u5199",paraId:1,tocIndex:0},{value:"store.state",paraId:1,tocIndex:0},{value:"\u65F6\uFF0C\u4F1A\u89E6\u53D1\u5185\u90E8\u7684\u4F9D\u8D56\u6536\u96C6\uFF0C\u76F8\u5173\u8BA1\u7B97\u5C5E\u6027\u7684\u8FD0\u884C\uFF0C\u914D\u5408",paraId:1,tocIndex:0},{value:"signal",paraId:1,tocIndex:0},{value:"\u673A\u5236\u53EF\u4EE5\u81EA\u52A8\u89E6\u53D1\u7EC4\u4EF6\u7684\u7EC6\u7C92\u5EA6\u91CD\u65B0\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"\u5F53\u521B\u5EFA\u597D",paraId:2,tocIndex:1},{value:"Store",paraId:2,tocIndex:1},{value:"\u540E,\u4F60\u53EF\u4EE5\u5728\u5B58\u53D6",paraId:2,tocIndex:1},{value:"State",paraId:2,tocIndex:1},{value:"\u7528\u6765\u9A71\u52A8\u7EC4\u4EF6\u7EC6\u7C92\u5EA6\u6E32\u67D3\u3002",paraId:2,tocIndex:1},{value:"Store",paraId:3,tocIndex:1},{value:"\u5BF9\u8C61\u63D0\u4F9B\u4E86",paraId:3,tocIndex:1},{value:"useState",paraId:3,tocIndex:1},{value:"\u65B9\u6CD5\uFF0C\u7528\u6765\u5728\u7EC4\u4EF6\u4E2D\u8BBF\u95EE\u548C\u66F4\u65B0",paraId:3,tocIndex:1},{value:"Store",paraId:3,tocIndex:1},{value:"\u7684\u72B6\u6001\u6570\u636E\u3002\u5176\u4F7F\u7528\u65B9\u5F0F\u4E0E",paraId:3,tocIndex:1},{value:"React",paraId:3,tocIndex:1},{value:"\u7684",paraId:3,tocIndex:1},{value:"useState",paraId:3,tocIndex:1},{value:"\u65B9\u6CD5\u7C7B\u4F3C\u3002",paraId:3,tocIndex:1},{value:"useState",paraId:4},{value:"\u8FD8\u53EF\u4EE5\u63A5\u53D7",paraId:4},{value:"getter",paraId:4},{value:" \u548C",paraId:4},{value:"setter",paraId:4},{value:"\u4E24\u4E2A\u51FD\u6570\u53C2\u6570\uFF0C\u7528\u6765\u83B7\u53D6\u548C\u8BBE\u7F6E",paraId:4},{value:"State",paraId:4},{value:"\u4E2D\u7684\u67D0\u4E2A\u5C5E\u6027\u3002",paraId:4},{value:"\u9664\u4E86\u4F7F\u7528",paraId:5,tocIndex:2},{value:"useState",paraId:5,tocIndex:2},{value:"\u65B9\u6CD5\u8BFB\u5199\u72B6\u6001\u5916\uFF0C",paraId:5,tocIndex:2},{value:"sotre.state",paraId:5,tocIndex:2},{value:"\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A",paraId:5,tocIndex:2},{value:"reactive",paraId:5,tocIndex:2},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u8BFB\u5199\u5B83\u7684\u5C5E\u6027\u3002",paraId:5,tocIndex:2},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:6},{value:"\u6307\u7684\u662F\u53EF\u4EE5\u5BF9\u8BE5\u5BF9\u8C61\u8FDB\u884C\u8BFB\u53D6\uFF0C\u5176\u4FEE\u6539\u884C\u4E3A\u4F1A\u89E6\u53D1\u5185\u90E8\u7684\u4F9D\u8D56\u6536\u96C6\uFF0C\u76F8\u5173\u8BA1\u7B97\u5C5E\u6027\u7684\u8FD0\u884C\uFF0C\u5F53\u7136\u4E5F\u4F1A\u81EA\u52A8\u89E6\u53D1\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u3002",paraId:6}]},73689:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(14989);const n=[{value:"\u521B\u5EFA",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u65F6\u5BF9\u5E94\u521B\u5EFA\u4E00\u4E2A",paraId:0,tocIndex:0},{value:"Store",paraId:0,tocIndex:0},{value:"\u5BF9\u8C61,\u5C31\u5982\u540C",paraId:0,tocIndex:0},{value:"Redux",paraId:0,tocIndex:0},{value:"\u4E2D\u7684",paraId:0,tocIndex:0},{value:"Store",paraId:0,tocIndex:0},{value:"\u4E00\u6837,",paraId:0,tocIndex:0},{value:"Store",paraId:0,tocIndex:0},{value:"\u672C\u8D28\u4E0A\u5C31\u662F\u53D7\u63A7\u7684\u72B6\u6001\u6570\u636E\u5BF9\u8C61\uFF0C\u4F7F\u7528",paraId:0,tocIndex:0},{value:"helux",paraId:0,tocIndex:0},{value:"\u7684",paraId:0,tocIndex:0},{value:"atomx/sharex",paraId:0,tocIndex:0},{value:"\u521B\u5EFA\u3002",paraId:0,tocIndex:0},{value:"\u5178\u578B\u7684",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"\u7ED3\u6784\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"Store",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\u4E2D\u4F1A\u5B9A\u4E49",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u7ED3\u6784\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u4E0D\u5141\u8BB8\u76F4\u63A5\u4FEE\u6539",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\uFF0C\u800C\u662F\u901A\u8FC7",paraId:2,tocIndex:0},{value:"Action",paraId:2,tocIndex:0},{value:"\u6765\u4FEE\u6539",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u3002",paraId:2,tocIndex:0},{value:"Action",paraId:2,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u666E\u901A\u7684\u51FD\u6570\uFF0C\u4E00\u822C\u4F1A\u5B9E\u73B0\u67D0\u79CD\u4E1A\u52A1\u903B\u8F91\uFF0C\u53EF\u4EE5\u662F\u540C\u6B65\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5F02\u6B65\u51FD\u6570\u3002\u6267\u884C\u6210\u529F\u4F1A\u4FEE\u6539",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u3002",paraId:2,tocIndex:0},{value:"\u8BA1\u7B97\u5C5E\u6027\u4F1A\u4FA6\u542C",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u7684\u6570\u636E\u53D8\u5316\uFF0C\u5F53",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u8BA1\u7B97\u5C5E\u6027\u7684\u503C\u3002",paraId:2,tocIndex:0},{value:"@speedform/reactive",paraId:3,tocIndex:1},{value:"\u63D0\u4F9B\u4E86",paraId:3,tocIndex:1},{value:"createStore",paraId:3,tocIndex:1},{value:"\u65B9\u6CD5\u7528\u6765\u521B\u5EFA",paraId:3,tocIndex:1},{value:"Store",paraId:3,tocIndex:1},{value:"\u5BF9\u8C61\u3002",paraId:3,tocIndex:1},{value:`const user = {
  firstName:"Zhang",
  lastName:"Fisher",
  age:18
}
 
const store = createStore({
  state:user,       // \u58F0\u660E\u72B6\u6001\u6570\u636E
  actions:{},     // \u58F0\u660E\u72B6\u6001\u6570\u636E\u66F4\u65B0\u65B9\u6CD5
},{
  // ...\u914D\u7F6E\u53C2\u6570
})

`,paraId:4,tocIndex:1},{value:"createStore",paraId:5,tocIndex:2},{value:"\u65B9\u6CD5\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u914D\u7F6E\uFF0C\u7528\u6765\u914D\u7F6E",paraId:5,tocIndex:2},{value:"Store",paraId:5,tocIndex:2},{value:"\u7684\u884C\u4E3A\u3002",paraId:5,tocIndex:2},{value:`export interface StoreOptions{    
    // \u8BA1\u7B97\u51FD\u6570\u7684\u9ED8\u8BA4\u4E0A\u4E0B\u6587\uFF0C\u5373\u4F20\u5165\u7684\u7ED9\u8BA1\u7B97\u51FD\u6570\u7684draft\u5BF9\u8C61\u662F\u6839state\u8FD8\u662F\u6240\u5728\u7684\u5BF9\u8C61\u6216\u7236\u5BF9\u8C61
    // \u5982\u679C\u672A\u6307\u5B9A\u65F6\uFF0C\u540C\u6B65\u8BA1\u7B97\u7684\u4E0A\u4E0B\u6587\u6307\u5411current\uFF0C\u5F02\u6B65\u6307\u5B9A\u7684\u4E0A\u4E0B\u6587\u6307\u5411root
    computedThis?: StoreComputedContext
    computedScope?: StoreComputedScope
    // \u5F53\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u524D\u8C03\u7528
    onCreateComputed?:(keyPath:string[],getter:Function,options:ComputedOptions)=>Function | void    
}
`,paraId:6,tocIndex:2}]},5160:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(91352);const n=[{value:"watch",paraId:0},{value:"\u51FD\u6570\u4E0E",paraId:0},{value:"computed",paraId:0},{value:"\u51FD\u6570\u529F\u80FD\u7684\u533A\u522B\u5982\u4E0B\uFF1A",paraId:0},{value:"computed",paraId:1},{value:"\u51FD\u6570\u662F\u7528\u6765\u58F0\u660E\u8BA1\u7B97\u5C5E\u6027\u7684\uFF0C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u662F\u7528\u6765\u4FA6\u542C",paraId:1},{value:"State",paraId:1},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u7684\u3002",paraId:1},{value:"computed",paraId:1},{value:"\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u5199\u5165",paraId:1},{value:"State",paraId:1},{value:"\u4E2D\u7684\u5BF9\u5E94\u5C5E\u6027\uFF0C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u5199\u5165",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u6240\u5728\u7684\u4F4D\u7F6E\u3002",paraId:1},{value:"computed",paraId:1},{value:"\u51FD\u6570\u7684\u521B\u5EFA\u7684\u8BA1\u7B97\u5C5E\u6027\u662F\u57FA\u4E8E\u4F9D\u8D56\u6536\u96C6\u7684\uFF0C\u800C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u662F\u57FA\u4E8E\u4FA6\u542C\u7684,\u6BCF\u5F53",paraId:1},{value:"State",paraId:1},{value:"\u72B6\u6001\u53D8\u5316\u65F6\u5747\u4F1A\u8C03\u7528",paraId:1},{value:"watchOptions.on",paraId:1},{value:"\u8FC7\u6EE4\u51FD\u6570\u6765\u5339\u914D\u4FA6\u542C\u51FD\u6570\uFF0C\u56E0\u6B64\u7406\u8BBA\u4E0A\uFF0C",paraId:1},{value:"computed",paraId:1},{value:"\u51FD\u6570\u7684\u6027\u80FD\u66F4\u597D\uFF0C\u800C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u6027\u80FD\u4F1A\u5DEE\u4E9B\u3002",paraId:1},{value:"watch",paraId:1},{value:"\u53EA\u80FD\u662F\u540C\u6B65\u4FA6\u542C\u51FD\u6570\uFF0C\u800C",paraId:1},{value:"computed",paraId:1},{value:"\u53EF\u4EE5\u662F\u5F02\u6B65\u51FD\u6570\u3002",paraId:1}]},90612:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(67690);const n=[{value:"\u5982\u540C",paraId:0,tocIndex:0},{value:"ComputedObject",paraId:0,tocIndex:0},{value:"\u4E00\u6837\uFF0C\u6BCF\u4E00\u4E2A\u4F7F\u7528",paraId:0,tocIndex:0},{value:"watch",paraId:0,tocIndex:0},{value:"\u5305\u88C5\u7684\u8BA1\u7B97\u51FD\u6570\u5747\u521B\u5EFA\u4E00\u4E2A",paraId:0,tocIndex:0},{value:"WatchObject",paraId:0,tocIndex:0},{value:"\u5BF9\u8C61\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7",paraId:1,tocIndex:0},{value:"Store.watchObjects",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u8BBF\u95EE\u6240\u6709\u58F0\u660E\u7684",paraId:1,tocIndex:0},{value:"WatchObject",paraId:1,tocIndex:0},{value:"\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u8FDB\u884C\u76F8\u5173\u7684\u52A8\u6001\u79FB\u9664/\u7981\u7528\u7B49\u64CD\u4F5C\u3002",paraId:1,tocIndex:0},{value:`export interface WatchObject extends WatchOptions>{ 
    path:string[]
    run:(fromPath:string[])=>void
    listener:(...args:any[])=>any
}
`,paraId:2,tocIndex:0},{value:"\u6240\u6709\u521B\u5EFA\u7684",paraId:3,tocIndex:0},{value:"WatchObject",paraId:3,tocIndex:0},{value:"\u5BF9\u8C61\u4FDD\u5B58\u5728",paraId:3,tocIndex:0},{value:"Store.watchObjects",paraId:3,tocIndex:0},{value:` class WatchObjects extends Map{
    enable:boolean
    reset(){}
    enableGroup(groupName:string,value:boolean=true){}
 }

`,paraId:4,tocIndex:0}]},8763:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(3466);const n=[{value:"\u5927\u90E8\u4EFD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5E94\u8BE5\u4F7F\u7528",paraId:0},{value:"computed",paraId:0},{value:"\u51FD\u6570\u6765\u58F0\u660E\u8BA1\u7B97\u5C5E\u6027\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528",paraId:0},{value:"watch",paraId:0},{value:"\u51FD\u6570\u6765\u4FA6\u542C",paraId:0},{value:"State",paraId:0},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002\u4F46\u662F\u5728\u4E00\u4E9B\u7279\u6B8A\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u4F7F\u7528",paraId:0},{value:"watch",paraId:0},{value:"\u51FD\u6570\uFF0C\u4E3B\u8981\u5728\u4E8E\uFF1A",paraId:0},{value:"\u52A8\u6001\u4F9D\u8D56",paraId:1},{value:"computed",paraId:2},{value:"\u8BA1\u7B97\u51FD\u6570\u7684\u4F9D\u8D56\u4E00\u822C\u662F\u786E\u5B9A\u7684\uFF0C\u800C",paraId:2},{value:"watch",paraId:2},{value:"\u51FD\u6570\u7684\u4F9D\u8D56\u662F\u52A8\u6001\u7684\u3002\u8FD9\u6BD4\u8F83\u9002\u5408\u4E00\u4E9B\u9700\u8981\u52A8\u6001\u4FA6\u542C\u7684\u573A\u666F\uFF0C\u6BD4\u5982\u4E0A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u52A8\u6001\u4FA6\u542C",paraId:2},{value:"orders[].count",paraId:2},{value:"\u7684\u53D8\u5316\u6765\u8BA1\u7B97",paraId:2},{value:"total",paraId:2},{value:"\u3002\u800C",paraId:2},{value:"computed",paraId:2},{value:"\u51FD\u6570\u7684\u4F9D\u8D56\u662F\u9759\u6001\u7684\uFF0C\u4E00\u65E6\u58F0\u660E\u5C31\u4E0D\u4F1A\u53D8\u5316\u3002",paraId:2},{value:"\u591A\u5B57\u6BB5\u590D\u5408\u8BA1\u7B97",paraId:3},{value:"\u5F53\u67D0\u4E2A\u5B57\u6BB5\u9700\u8981\u8FDB\u884C\u590D\u5408\u8BA1\u7B97\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528",paraId:4},{value:"watch",paraId:4},{value:"\u51FD\u6570\u6765\u5B9E\u73B0\u3002\u6BD4\u5982\u5728",paraId:4},{value:"SpeedForm",paraId:4},{value:"\u5B9E\u73B0\u8868\u5355\u7684",paraId:4},{value:"validate",paraId:4},{value:"\u548C",paraId:4},{value:"dirty",paraId:4},{value:"\u5C5E\u6027\u7684\u8BA1\u7B97\u65F6\uFF0C\u5C31\u662F\u4F7F\u7528",paraId:4},{value:"watch",paraId:4},{value:"\u5B9E\u73B0\u3002",paraId:4},{value:"\u6BD4\u5982\u8FD9\u662F\u8868\u5355",paraId:5},{value:"validate",paraId:5},{value:"\u68C0\u6D4B\u7684\u5B9E\u73B0\u4EE3\u7801\uFF1A",paraId:5},{value:`export function validate<T=any>(options?:ValidateOptions){
    const { entry  } = Object.assign({},options)
    return watch<boolean,boolean>((value,{ fromPath,selfPath,getCache})=>{        
        // \u53EA\u4FA6\u542Centry\u4E0B\u7684\u6240\u6709\u5B57\u6BB5
        if(!isIncludePath(entry ? entry : selfPath,fromPath)) return   
        const selfCache = getCache()  // \u5F97\u5230\u7684\u662F\u4E00\u4E2ADict\u7528\u6765\u4FDD\u5B58\u6240\u6709\u5B57\u6BB5\u7684validate\u5C5E\u6027\u503C
        // validate\u5C5E\u6027\u662F\u4E00\u4E2Aboolean
        if(typeof(value)=='boolean'){
            const srcKey = fromPath.join(OBJECT_PATH_DELIMITER)
            if(value){
                delete selfCache[srcKey]
            }else{
                selfCache[srcKey] = value
            }
        }
        // \u7531\u4E8Ecache\u91CC\u9762\u53EA\u8BB0\u5F55validate=false\u7684\u503C\uFF0C\u6240\u4EE5\u5982\u679Ccache\u4E0D\u4E3A\u7A7A\u5219\u4EE3\u8868\u6709\u5B57\u6BB5\u7684validate=false
        return Object.keys(selfCache).length==0
    },(path)=>isValidateField(path),{
        initial:true
    })
}
 
`,paraId:6},{value:"*",paraId:7},{value:"\u57FA\u672C\u903B\u8F91\uFF1A",paraId:7},{value:"\u4EE5\u4E0A",paraId:8},{value:"validate",paraId:8},{value:"\u4F20\u5165\u4E00\u4E2A\u5165\u53E3\u53C2\u6570",paraId:8},{value:"entry",paraId:8},{value:",\u7528\u6765\u9650\u5B9A\u6821\u9A8C\u8303\u56F4\uFF0C\u7136\u540E\u521B\u5EFA\u4E00\u4E2A",paraId:8},{value:"watch",paraId:8},{value:"\u5BF9\u8C61\u3002",paraId:8},{value:"(path)=>isValidateField(path)",paraId:8},{value:"\u7528\u6765\u5224\u65AD\u53D1\u751F\u53D8\u5316\u7684\u8DEF\u5F84\u662F\u5426\u5305\u542B\u7684",paraId:8},{value:"validate",paraId:8},{value:"\u5B57\u6BB5\uFF0C\u5982\u679C\u662F\u5426\u5219\u4F1A\u6267\u884C",paraId:8},{value:"watch",paraId:8},{value:"\u76D1\u542C\u51FD\u6570\u3002",paraId:8},{value:"\u5728",paraId:8},{value:"watch",paraId:8},{value:`\u76D1\u542C\u51FD\u6570\u5185\uFF0C
`,paraId:8},{value:"value",paraId:9},{value:"\uFF1A\u53D8\u5316\u7684\u503C",paraId:9},{value:"fromPath",paraId:10},{value:"\uFF1A\u6307\u7684\u662F\u54EA\u91CC\u53D1\u751F\u53D8\u5316\u7684\u8DEF\u5F84",paraId:10},{value:"getCache",paraId:11},{value:"\uFF1A\u7528\u6765\u83B7\u53D6\u5F53\u524D",paraId:11},{value:"watch",paraId:11},{value:"\u7684",paraId:11},{value:"cache",paraId:11},{value:"\u5BF9\u8C61\uFF0C\u7528\u6765\u4FDD\u5B58\u6821\u9A8C\u503C\u3002",paraId:11},{value:"\u5728",paraId:12},{value:"cache",paraId:12},{value:"\u91CC\u9762\u6211\u4EEC\u4FDD\u5B58\u4ECE\u6821\u9A8C\u8303\u56F4\u5185\u6240\u6709",paraId:12},{value:"value=false",paraId:12},{value:"\uFF0C\u5982\u679C",paraId:12},{value:"Object.keys(selfCache).length==0",paraId:12},{value:"\u5C31\u4EE3\u8868\u5728\u8BE5\u6821\u9A8C\u8303\u56F4\u5185\u6240\u6709\u5B57\u6BB5\u5747\u6709\u6548\u3002",paraId:12}]},55425:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(77044);const n=[{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B",paraId:0,tocIndex:0},{value:"watch",paraId:0,tocIndex:0},{value:"\u529F\u80FD\uFF0C\u7528\u6765\u76D1\u89C6",paraId:0,tocIndex:0},{value:"State",paraId:0,tocIndex:0},{value:"\u6570\u636E\u7684\u53D8\u5316,\u5F53\u6240\u76D1\u89C6\u7684\u6570\u636E\u53D1\u751F\u65F6\uFF0C\u53EF\u4EE5\u6267\u884C\u4FA6\u542C\u5668\u51FD\u6570\u3002",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u4E09\u79CD\u4F7F\u7528",paraId:1,tocIndex:0},{value:"watch",paraId:1,tocIndex:0},{value:"\u7684\u65B9\u5F0F\uFF1A",paraId:1,tocIndex:0},{value:"\u76F4\u63A5\u5728",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u4E2D\u58F0\u660E",paraId:2,tocIndex:0},{value:"watch",paraId:2,tocIndex:0},{value:"\u51FD\u6570,\u7136\u540E\u5C06\u4FA6\u542C\u5668\u8FD4\u56DE\u503C\u5199\u5165\u58F0\u660E",paraId:2,tocIndex:0},{value:"watch",paraId:2,tocIndex:0},{value:"\u51FD\u6570\u6240\u5728\u7684\u4F4D\u7F6E\u3002",paraId:2,tocIndex:0},{value:"\u8C03\u7528",paraId:2,tocIndex:0},{value:"store.watch",paraId:2,tocIndex:0},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002",paraId:2,tocIndex:0},{value:"\u5728\u7EC4\u4EF6\u4E2D\u8C03\u7528",paraId:2,tocIndex:0},{value:"store.useWatch",paraId:2,tocIndex:0},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:2,tocIndex:0},{value:"store",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\u7684\u53D8\u5316,\u5F53\u7EC4\u4EF6\u9500\u6BC1\u81EA\u52A8\u53D6\u6D88\u8BA2\u9605\u3002",paraId:2,tocIndex:0},{value:"@speedform/reactive",paraId:3,tocIndex:1},{value:"\u63D0\u4F9B\u4E86",paraId:3,tocIndex:1},{value:"watch",paraId:3,tocIndex:1},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u5728",paraId:3,tocIndex:1},{value:"state",paraId:3,tocIndex:1},{value:"\u58F0\u660E\u6765\u4FA6\u542C",paraId:3,tocIndex:1},{value:"State",paraId:3,tocIndex:1},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002",paraId:3,tocIndex:1},{value:"watch",paraId:4,tocIndex:1},{value:"\u51FD\u6570\u7684\u57FA\u672C\u7279\u6027\u5982\u4E0B\uFF1A",paraId:4,tocIndex:1},{value:"watch",paraId:5,tocIndex:1},{value:"\u53EF\u4EE5\u7528\u6765\u4FA6\u542C\u6574\u4E2A",paraId:5,tocIndex:1},{value:"store",paraId:5,tocIndex:1},{value:"\u5BF9\u8C61\u7684\u53D8\u5316\uFF0C\u5F53\u4FA6\u542C\u5230\u53D8\u5316\u65F6\u4F1A\u6267\u884C\u4FA6\u542C\u5668\u51FD\u6570\u3002",paraId:5,tocIndex:1},{value:"\u4FA6\u542C\u5668\u51FD\u6570\u53EA\u80FD\u662F\u4E00\u4E2A\u540C\u6B65\u51FD\u6570\u3002",paraId:5,tocIndex:1},{value:"\u4FA6\u542C\u5668\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u5199\u5165",paraId:5,tocIndex:1},{value:"watch",paraId:5,tocIndex:1},{value:"\u51FD\u6570\u6240\u5728\u7684\u4F4D\u7F6E\u3002",paraId:5,tocIndex:1},{value:"watch",paraId:6,tocIndex:2},{value:"\u51FD\u6570\u7B7E\u540D\u5982\u4E0B\uFF1A",paraId:6,tocIndex:2},{value:`function watch<Value = any,Result=Value>(
  listener:WatchListener<Value,Result>,
  on:WatchOptions['on'],
  options?:WatchOptions<Result>):WatchDescriptor<Value,Result>

  
export interface WatchOptions<R=any>{ 
    // \u6307\u5B9A\u989D\u5916\u7684\u8FC7\u6EE4\u6761\u4EF6\uFF0C\u5982\u679C\u8FD4\u56DEtrue\uFF0C\u624D\u4F1A\u89E6\u53D1listener\u7684\u6267\u884C
    // \u6B64\u51FD\u6570\u4F1A\u5728\u8868\u5355\u4E2D\u7684\u6BCF\u4E00\u4E2A\u503C\u53D1\u751F\u53D8\u5316\u65F6\u6267\u884C\uFF0C\u5982\u679C\u8FD4\u56DEtrue\uFF0C\u5219\u4F1A\u89E6\u53D1listener\u7684\u6267\u884C  
    // \u7531\u4E8E\u6B64\u51FD\u6570\u4F1A\u5728\u8868\u5355\u4E2D\u7684\u6BCF\u4E00\u4E2A\u503C\u53D1\u751F\u53D8\u5316\u65F6\u5747\u4F1A\u6267\u884C\uFF0C\u6240\u4EE5\u6B64\u51FD\u6570\u5E94\u8BE5\u5C3D\u91CF\u7B80\u5355\uFF0C\u4E0D\u8981\u6709\u590D\u6742\u7684\u903B\u8F91      
    // \u5982\u679C\u5927\u91CF\u7684\u8868\u5355\u5B57\u6BB5\u5747\u9700\u8981\u76D1\u542C\uFF0C\u5219\u53EF\u80FD\u4F1A\u6709\u6027\u80FD\u95EE\u9898
    // \u4E00\u822C\u5728\u52A8\u6001\u4F9D\u8D56\u65F6\u4F7F\u7528
    on?:(path:string[],value:any)=>boolean 
    initial?:R,  
    /**
     * \u7528\u6765\u5BF9\u8868\u5355\u5185\u7684watch\u8FDB\u884C\u5206\u7EC4\uFF0C\u4EE5\u4FBF\u80FD\u6309\u7EC4\u8FDB\u884Cenable\u6216disable\u6216\u5176\u4ED6\u64CD\u4F5C
     */  
    group?:string
    /**
     *  \u542F\u7528\u6216\u7981\u7528watch\uFF0C\u9ED8\u8BA4\u4E3Atrue
     */
    enable?:boolean
}
 
`,paraId:7,tocIndex:2},{value:"watch",paraId:8,tocIndex:2},{value:"\u51FD\u6570\u57FA\u672C\u4F7F\u7528\u5982\u4E0B\uFF1A",paraId:8,tocIndex:2},{value:"\u6CE8\u610F\uFF1A\u4E8B\u5B9E\u4E0A\u4EE5\u4E0A\u793A\u4F8B\u66F4\u9002\u5408\u4F7F\u7528",paraId:9},{value:"\u8BA1\u7B97\u5C5E\u6027",paraId:9},{value:"\u7279\u6027\u6765\u5B9E\u73B0\uFF0C\u793A\u4F8B\u4EC5\u4EC5\u662F\u6F14\u793A\u5176\u53EF\u4EE5\u4FA6\u542C\u52A8\u6001\u4F9D\u8D56\u5C5E\u6027\u7684\u7279\u6027",paraId:9},{value:"\u5728\u4EE5\u4E0A\u4F8B\u5B50\u4E2D\uFF1A",paraId:10},{value:"watch",paraId:11},{value:"\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:11},{value:"State",paraId:11},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002",paraId:11},{value:"watch",paraId:11},{value:"\u51FD\u6570\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7528\u6765\u914D\u7F6E",paraId:11},{value:"watch",paraId:11},{value:"\u51FD\u6570\u7684\u884C\u4E3A\u3002",paraId:11},{value:"on",paraId:11},{value:"\u5C5E\u6027\u7528\u6765\u914D\u7F6E",paraId:11},{value:"watch",paraId:11},{value:"\u51FD\u6570\u7684\u89E6\u53D1\u6761\u4EF6\uFF0C\u4F20\u5165\u7684\u662F\u53D1\u751F\u53D8\u5316\u7684\u503C\u6240\u5728\u7684\u8DEF\u5F84\u3002",paraId:11},{value:"initial",paraId:11},{value:"\u5C5E\u6027\u7528\u6765\u914D\u7F6E",paraId:11},{value:"watch",paraId:11},{value:"\u51FD\u6570\u6240\u5728\u4F4D\u7F6E\u7684",paraId:11},{value:"total",paraId:11},{value:"\u7684\u521D\u59CB\u503C\u3002",paraId:11},{value:"``",paraId:11},{value:"watch",paraId:12,tocIndex:3},{value:"\u7684\u4FA6\u542C\u51FD\u6570\u53EA\u80FD\u662F\u4E00\u4E2A",paraId:12,tocIndex:3},{value:"\u540C\u6B65\u51FD\u6570",paraId:12,tocIndex:3},{value:"\uFF0C\u7B7E\u540D\u5982\u4E0B\uFF1A",paraId:12,tocIndex:3},{value:` type WatchListener<Value=any, Result= Value> = (value:Value,options:WatchListenerOptions<Result>)=>(Exclude<Result,Promise<any>> | undefined)

type WatchListenerOptions<Result=any> = {
  getSelfValue:()=>Result ,     // \u8FD4\u56DE\u5F53\u524Dwatch\u6240\u5728\u4F4D\u7F6E\u7684\u5F53\u524D\u503C
  selfPath:string[] ,           // \u8FD4\u56DE\u5F53\u524Dwatch\u6240\u5728\u4F4D\u7F6E\u7684\u8DEF\u5F84
  fromPath:string[],         // \u8FD4\u56DE\u53D1\u751F\u53D8\u5316\u7684\u503C\u6240\u5728\u7684\u8DEF\u5F84
  getCache:()=>Dict             // \u8FD4\u56DE\u5F53\u524Dwatch\u6240\u5728\u4F4D\u7F6E\u7684\u7F13\u5B58\u5BF9\u8C61
}
`,paraId:13,tocIndex:3},{value:"\u5F53",paraId:14,tocIndex:3},{value:"State",paraId:14,tocIndex:3},{value:"\u4E2D\u7684\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4F1A\u8C03\u7528",paraId:14,tocIndex:3},{value:"watch",paraId:14,tocIndex:3},{value:"\u7B2C\u4E8C\u4E2A\u53C2\u6570\u6307\u5B9A\u7684\u51FD\u6570\uFF0C\u5982\u679C\u8FD4\u56DE",paraId:14,tocIndex:3},{value:"true",paraId:14,tocIndex:3},{value:"\uFF0C\u5219\u4F1A\u8C03\u7528\u6267\u884C\u4FA6\u542C\u51FD\u6570\u3002",paraId:14,tocIndex:3},{value:"\u4FA6\u542C\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u5165\u53C2\u662F",paraId:14,tocIndex:3},{value:"value",paraId:14,tocIndex:3},{value:"\uFF0C\u6307\u7684\u662F\u53D1\u751F\u53D8\u5316\u7684\u65B0\u503C\u3002\u663E\u7136\uFF0C\u5982\u679C",paraId:14,tocIndex:3},{value:"watch",paraId:14,tocIndex:3},{value:"\u51FD\u6570\u7684\u4F9D\u8D56\u8303\u56F4\u5F88\u5E7F\uFF0C\u5219",paraId:14,tocIndex:3},{value:"value",paraId:14,tocIndex:3},{value:"\u7C7B\u578B\u4E5F\u53EF\u80FD\u662F\u4E0D\u56FA\u5B9A\u7684\u3002",paraId:14,tocIndex:3},{value:"getSelfValue",paraId:14,tocIndex:3},{value:"\u53C2\u6570\u7528\u6765\u8BFB\u53D6\u5F53\u524D",paraId:14,tocIndex:3},{value:"watch",paraId:14,tocIndex:3},{value:"\u6240\u5728\u4F4D\u7F6E\u7684\u5F53\u524D\u503C\u3002",paraId:14,tocIndex:3},{value:"selfPath",paraId:14,tocIndex:3},{value:"\u53C2\u6570\u7528\u6765\u8BFB\u53D6\u5F53\u524D",paraId:14,tocIndex:3},{value:"watch",paraId:14,tocIndex:3},{value:"\u6240\u5728\u4F4D\u7F6E\u7684\u8DEF\u5F84\u3002",paraId:14,tocIndex:3},{value:"fromPath",paraId:14,tocIndex:3},{value:"\u53C2\u6570\u7528\u6765\u8BFB\u53D6\u53D1\u751F\u53D8\u5316\u7684\u503C\u6240\u5728\u7684\u8DEF\u5F84\u3002",paraId:14,tocIndex:3},{value:"getCache",paraId:14,tocIndex:3},{value:"\u53C2\u6570\u7528\u6765\u8BFB\u53D6\u5F53\u524D",paraId:14,tocIndex:3},{value:"watch",paraId:14,tocIndex:3},{value:"\u6240\u5728\u4F4D\u7F6E\u7684\u7F13\u5B58\u5BF9\u8C61\uFF0C\u4F9B\u4FDD\u5B58\u4E00\u4E9B\u4E34\u65F6\u503C\u3002",paraId:14,tocIndex:3},{value:"\u4FA6\u542C\u51FD\u6570\u7684",paraId:15,tocIndex:4},{value:"getCache",paraId:15,tocIndex:4},{value:"\u53C2\u6570\u7528\u6765\u83B7\u53D6\u4E00\u4E2A\u4EC5\u4F9B\u5F53\u524D\u4FA6\u542C\u51FD\u6570\u4F7F\u7528\u7F13\u5B58\u5BF9\u8C61",paraId:15,tocIndex:4},{value:"{}",paraId:15,tocIndex:4},{value:"\uFF0C\u4F9B\u4FDD\u5B58\u4E00\u4E9B\u4E34\u65F6\u503C\u3002",paraId:15,tocIndex:4},{value:"\u4E0B\u9762\u4E3E\u4E2A\u4F8B\u5B50\u6765\u8BF4\u660E\u5176\u7528\u9014\u3002",paraId:16,tocIndex:4},{value:"\u5728",paraId:17,tocIndex:4},{value:"SpeedForm",paraId:17,tocIndex:4},{value:"\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u5B57\u6BB5\u5747\u6709\u4E00\u4E2A",paraId:17,tocIndex:4},{value:"validate",paraId:17,tocIndex:4},{value:"\u7528\u6765\u58F0\u660E\u5176\u9A8C\u8BC1\u7ED3\u679C\uFF0C\u800C\u6574\u4E2A\u8868\u5355\u6839\u5BF9\u8C61\u4E5F\u6709\u4E00\u4E2A",paraId:17,tocIndex:4},{value:"validate",paraId:17,tocIndex:4},{value:"\u7528\u6765\u8868\u793A\u8868\u5355\u662F\u5426\u6709\u6548\u3002\u5F53\u67D0\u4E2A\u5B57\u6BB5\u7684",paraId:17,tocIndex:4},{value:"validate",paraId:17,tocIndex:4},{value:"\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u91CD\u65B0\u8BA1\u7B97\u6574\u4E2A\u8868\u5355\u7684",paraId:17,tocIndex:4},{value:"validate",paraId:17,tocIndex:4},{value:"\u3002",paraId:17,tocIndex:4},{value:"\u9700\u8981\u4F7F\u7528",paraId:18,tocIndex:4},{value:"\u52A8\u6001\u4F9D\u8D56",paraId:18,tocIndex:4},{value:"\uFF0C\u5373\u4FA6\u542C\u8868\u5355\u4E2D\u7684\u6240\u6709",paraId:18,tocIndex:4},{value:"validate",paraId:18,tocIndex:4},{value:"\u7684\u503C\u3002\u6CE8\uFF1A\u5982\u7531\u4E8E\u4E00\u4E2A\u8868\u5355\u5B57\u6BB5\u53EF\u80FD\u5F88\u591A\u6216\u8005\u662F\u52A8\u6001\u751F\u6210\u7684\uFF0C\u6240\u4EE5\u5176\u4F9D\u8D56\u662F\u52A8\u6001\u7684\u3002",paraId:18,tocIndex:4},{value:"\u9700\u8981\u4F7F\u7528",paraId:18,tocIndex:4},{value:"\u7F13\u5B58\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"\uFF0C\u7528\u6765\u8BB0\u4F4F\u8868\u5355\u7F16\u8F91\u8FC7\u7A0B\u4E2D\u6240\u6709\u5B57\u6BB5\u7684",paraId:18,tocIndex:4},{value:"validate",paraId:18,tocIndex:4},{value:"\u503C\uFF0C\u4EE5\u4FBF\u773C\u540E\u8BA1\u7B97\u6574\u4E2A\u8868\u5355\u7684\u9A8C\u8BC1\u7ED3\u679C\u3002",paraId:18,tocIndex:4},{value:"\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528",paraId:19,tocIndex:4},{value:"watch",paraId:19,tocIndex:4},{value:"\u51FD\u6570\u6765\u5B9E\u73B0\u3002",paraId:19,tocIndex:4},{value:`const formState={
    validate:watch((value,{getCache,srcPath})=>{
      const cache = getCache()
      // \u5728cache\u4E2D\u4FDD\u5B58\u5B57\u6BB5\u7684validate\u503C
      cache[srcPath.join('.')]=value
      // \u6574\u4E2A\u8868\u5355\u7684validate\u503C\u662F\u7531\u6240\u6709\u5B57\u6BB5\u7684\u9A8C\u8BC1\u503C\u8FDB\u884C\u8BA1\u7B97\u800C\u6765\u7684
      return Object.values(cache).every(validate=>validate)
    },
    // \u52A8\u6001\u4F9D\u8D56
    (path)=>path[path.length-1]==='validate',
    // \u6307\u5B9A\u521D\u59CB\u503C
    {initial:true}
    )  
}
`,paraId:20,tocIndex:4},{value:"\u5728\u8FDB\u884C\u8868\u5355\u9A8C\u8BC1\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528",paraId:21,tocIndex:4},{value:"formState.validate",paraId:21,tocIndex:4},{value:"\u6765\u83B7\u53D6\u6574\u4E2A\u8868\u5355\u7684\u9A8C\u8BC1\u7ED3\u679C\u3002",paraId:21,tocIndex:4},{value:"\u9664\u4E86\u53EF\u4EE5\u5728",paraId:22,tocIndex:5},{value:"State",paraId:22,tocIndex:5},{value:"\u4E2D\u58F0\u660E",paraId:22,tocIndex:5},{value:"watch",paraId:22,tocIndex:5},{value:"\u51FD\u6570\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u5728",paraId:22,tocIndex:5},{value:"Store",paraId:22,tocIndex:5},{value:"\u5BF9\u8C61\u4E2D\u58F0\u660E",paraId:22,tocIndex:5},{value:"watch",paraId:22,tocIndex:5},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:22,tocIndex:5},{value:"State",paraId:22,tocIndex:5},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002",paraId:22,tocIndex:5},{value:"\u5728\u7EC4\u4EF6\u5185\u4FA6\u542C\u53EF\u4EE5\u4F7F\u7528",paraId:23,tocIndex:6},{value:"store.useWatch",paraId:23,tocIndex:6},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:23,tocIndex:6},{value:"store",paraId:23,tocIndex:6},{value:"\u5BF9\u8C61\u7684\u53D8\u5316,\u5F53\u7EC4\u4EF6\u9500\u6BC1\u81EA\u52A8\u53D6\u6D88\u8BA2\u9605\u3002",paraId:23,tocIndex:6}]},15789:function(Z,m,e){e.r(m),e.d(m,{texts:function(){return n}});var W=e(25773);const n=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u975E\u5E38\u8F7B\u91CF\u7EA7\u7684\u8868\u5355\u7EC4\u4EF6\uFF0C\u5B83\u7684\u76EE\u6807\u662F\u8BA9\u8868\u5355\u5F00\u53D1\u53D8\u5F97\u66F4\u52A0\u7B80\u5355\u3001\u5FEB\u901F\u3001\u7075\u6D3B\u3002",paraId:0,tocIndex:0},{value:"@speed-form/antd",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/element-ui",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"element-ui",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"element-ui",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/iview",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"iview",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"iview",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/vuetify",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"vuetify",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"vuetify",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/element-plus",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"element-plus",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"element-plus",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/ant-design-vue",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"ant-design-vue",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"ant-design-vue",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/naive-ui",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"naive-ui",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"naive-ui",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/element3",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"element3",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"element3",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0}]}}]);
