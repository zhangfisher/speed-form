"use strict";(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[904],{54618:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(81972),G={}},41514:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(76883),G={}},43371:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(5849),G={}},80425:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(3996),G={}},62682:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(37077),G={}},42831:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(12879),G={}},84346:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(99653),G={}},39040:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(39498),G={}},7146:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(85731),G={}},36823:function(V,i,e){e.r(i),e.d(i,{demos:function(){return W}});var B=e(28633),o=e.n(B),G=e(29008),$=e.n(G),K=e(70958),L=e.n(K),t=e(92379),U=e(15099),W={"docs-core-form-action-demo-0":{component:t.memo(t.lazy(L()($()().mark(function F(){var l,O,I,c,b,n,R,s,D,g;return $()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,6244));case 2:return l=C.sent,O=l.createForm,I=l.action,C.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return c=C.sent,b=c.Row,n=c.Col,R=c.Button,s=c.Input,D={fields:{username:{value:"fisher",required:!0,title:"\u59D3\u540D"},password:{value:"123",required:!0,title:"\u5BC6\u7801"}},actions:{login:{title:"\u767B\u5F55",execute:I(function(){var N=L()($()().mark(function _(r,f){return $()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:console.log("\u767B\u5F55",r);case 1:case"end":return E.stop()}},_)}));return function(_,r){return N.apply(this,arguments)}}())}}},g=O(D,{debug:!0}),C.abrupt("return",{default:function(){var _=useState(""),r=o()(_,2),f=r[0],v=r[1];return t.createElement(b,null,t.createElement(n,null,t.createElement(g.Field,{name:"username"},function(E){var S=E.value,A=E.sync;return t.createElement("div",null,"\u7528\u6237\u540D\uFF1A",t.createElement("input",{value:S,onChange:A()}))}),t.createElement(g.Field,{name:"password"},function(E){var S=E.value,A=E.sync;return t.createElement("div",null,"\u5BC6\u7801\uFF1A",t.createElement("input",{value:S,onChange:A()}))}),t.createElement(g.Action,{name:"login"},function(E){var S=E.title,A=E.visible,j=E.loading,z=E.enable,J=E.run,Q=E.cancel,te=E.error,re=E.progress;return t.createElement(t.Fragment,null,t.createElement(s,{type:"submit",value:"\u63D0\u4EA4"}),t.createElement(R,{loading:j,cancel:Q,timeout:re,visible:A,enable:z,error:te,onClick:J()},S))})),t.createElement(n,null,"dsdsd"))}});case 15:case"end":return C.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-core-form-action-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createForm,action }  from "@speedform/core"
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
}`},"@speedform/core":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/core":e(6244),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=L()($()().mark(function O(){var I,c=arguments;return $()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}}}},60:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(59378),G={}},90780:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(44833),G={}},26004:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(21955),G={}},17148:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(45620),G={}},19361:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(90751),G={}},48692:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(31673),G={}},69874:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(65864),G={}},42540:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(56343),G={}},94122:function(V,i,e){e.r(i),e.d(i,{demos:function(){return t}});var B=e(29008),o=e.n(B),G=e(70958),$=e.n(G),K=e(92379),L=e(26807),t={"docs-core-quick-start-demo-0":{component:K.memo(K.lazy($()(o()().mark(function U(){var W,F,l,O,I,c,b,n,R,s,D,g,x;return o()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.bind(e,21970));case 2:return W=N.sent,F=W.forms,N.next=6,Promise.resolve().then(e.t.bind(e,26372,23));case 6:return l=N.sent,O=l.default,N.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return I=N.sent,c=I.Card,b=I.Field,n=I.Input,R=I.ValidResult,N.next=17,Promise.resolve().then(e.t.bind(e,92379,19));case 17:return s=N.sent,D=s.useCallback,g=s.useRef,x=F.Network,N.abrupt("return",{default:function(){var r=g(),f=D(function(){return alert("submit"),console.log("submit"),!1},[]);return K.createElement(c,{title:"\u7F51\u7EDC\u914D\u7F6E\u8868\u5355"},K.createElement(x.Form,{onSubmit:f,action:"/api",ref:r},K.createElement(x.Field,{name:"title"},function(v){var E=v.name,S=v.title,A=v.value,j=v.visible,z=v.validate,J=v.placeholder,Q=v.sync;return K.createElement(b,{name:"title",visible:j,label:S,validate:z},K.createElement(n,{name:E,className:O({invalid:!z}),placeholder:J,value:A,onChange:Q()}))}),K.createElement(x.Field,{name:"interface"},function(v){var E=v.name,S=v.title,A=v.required,j=v.visible,z=v.validate,J=v.enable,Q=v.value,te=v.initial,re=v.select,ae=v.sync;return K.createElement(b,{name:"interface",label:S},K.createElement("select",{value:Q,onChange:ae()},re.map(function(oe,ce){return K.createElement("option",{key:ce,value:oe.value},oe.title)})))}),K.createElement(x.Field,{name:"ip"},function(v){var E=v.name,S=v.title,A=v.value,j=v.visible,z=v.validate,J=v.placeholder,Q=v.sync;return K.createElement(b,{name:"ip",visible:j,label:S,validate:z,memo:"\u4FEE\u6539\u8FDB\u884C\u5F02\u6B65\u6821\u9A8C"},K.createElement(n,{name:E,validate:z.result,placeholder:J,value:A,onChange:Q(100)}))}),K.createElement(x.Field,{name:"gateway"},function(v){var E=v.name,S=v.title,A=v.value,j=v.required,z=v.visible,J=v.validate,Q=v.update,te=v.enable,re=v.placeholder,ae=v.sync;return K.createElement(b,{name:"gateway",visible:z,label:S},K.createElement(n,{name:E,validate:J,placeholder:re,value:A,onChange:ae()}),K.createElement("button",{onClick:Q(function(oe){oe.gateway.value="192.168.1.2"})},"\u6062\u590D"),K.createElement("button",{onClick:Q("192.168.1.1")},"\u66F4\u65B0\u503C"))}),K.createElement(x.Group,{name:"wifi"},function(v){var E=v.title,S=v.visible;return K.createElement(c,{title:E+"(\u4EC5interfact=wifi\u65F6\u663E\u793A)",visible:S},K.createElement(x.Field,{name:"wifi.ssid"},function(A){var j=A.name,z=A.value,J=A.required,Q=A.visible,te=A.validate,re=A.enable,ae=A.initial,oe=A.sync;return K.createElement(b,{name:"wifi.ssid",label:"SSID",enable:re},K.createElement(n,{name:j,className:O({invalid:!te}),value:z,onChange:oe()}))}),K.createElement(x.Field,{name:"wifi.password"},function(A){var j=A.name,z=A.value,J=A.enable,Q=A.validate,te=A.placeholder,re=A.help,ae=A.sync;return K.createElement(b,{name:"wifi.password",label:"\u5BC6\u7801",enable:J,className:O({invalid:!Q})},K.createElement(n,{name:j,style:{border:Q?"1px solid #ccc":"1px solid red"},"data-help":re,value:z,placeholder:te,onChange:ae(),readOnly:!J}),K.createElement(R,{validate:Q,help:re}))}))}),K.createElement(x.Field,{name:"dhcp.enable"},function(v){var E=v.name,S=v.title,A=v.visible,j=v.value,z=v.validate,J=v.sync;return K.createElement(b,{name:"dhcp.enable",visible:A,label:S},K.createElement("input",{name:E,className:O({invalid:!z}),type:"checkbox",checked:j,onChange:J()}))}),K.createElement(x.Field,{name:"dhcp.start"},function(v){var E=v.name,S=v.value,A=v.validate,j=v.enable,z=v.visible,J=v.title,Q=v.sync;return K.createElement(b,{name:"dhcp.start",label:J,enable:j},K.createElement(n,{name:E,enable:j,className:O({invalid:!A}),value:S,onChange:Q()}))}),K.createElement(x.Field,{name:"dhcp.end"},function(v){var E=v.name,S=v.value,A=v.validate,j=v.visible,z=v.title,J=v.enable,Q=v.sync;return K.createElement(b,{name:"dhcp.end",enable:J,label:z},K.createElement(n,{name:E,enable:J,className:O({invalid:!A}),value:S,onChange:Q()}))}),K.createElement(x.Submit,null),K.createElement(x.Reset,null)))}});case 22:case"end":return N.stop()}},U)})))),asset:{type:"BLOCK",id:"docs-core-quick-start-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { forms } from 'speedform-docs'
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
}`},"speedform-docs":{type:"NPM",value:"0.0.1"},classnames:{type:"NPM",value:"2.3.2"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"speedform-docs":e(21970),classnames:e(26372),"@speedform/demo-components":e(48398),react:e(92379)},renderOpts:{compile:function(){var U=$()(o()().mark(function F(){var l,O=arguments;return o()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(408).then(e.bind(e,28408));case 2:return c.abrupt("return",(l=c.sent).default.apply(l,O));case 3:case"end":return c.stop()}},F)}));function W(){return U.apply(this,arguments)}return W}()}}}},31657:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(80619),G={}},51608:function(V,i,e){e.r(i),e.d(i,{demos:function(){return W}});var B=e(28633),o=e.n(B),G=e(29008),$=e.n(G),K=e(70958),L=e.n(K),t=e(92379),U=e(23752),W={"docs-reactive-computed-async-demo-0":{component:t.memo(t.lazy(L()($()().mark(function F(){var l,O,I,c,b,n;return $()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=s.sent,O=l.createStore,I=l.computed,s.next=7,Promise.resolve().then(e.bind(e,21970));case 7:return c=s.sent,b=c.delay,n=O({user:{firstName:"Zhang",lastName:"Fisher",fullName:I(function(){var D=L()($()().mark(function g(x){return $()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,b();case 2:return N.abrupt("return",x.firstName+x.lastName);case 3:case"end":return N.stop()}},g)}));return function(g){return D.apply(this,arguments)}}(),["user.firstName","./lastName"])}}),s.abrupt("return",{default:function(){var g=n.useState(),x=o()(g,1),C=x[0];return t.createElement(t.Fragment,null,t.createElement("div",null,"firstName:",t.createElement("input",{value:C.user.firstName,onChange:n.sync(["user","firstName"])})),t.createElement("div",null,"lastName:",t.createElement("input",{value:C.user.lastName,onChange:n.sync(["user","lastName"])})),t.createElement("div",null,"fullName:",C.user.fullName.loading?"\u91CD\u65B0\u8BA1\u7B97...":C.user.fullName.result))}});case 11:case"end":return s.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap,$} from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970)},renderOpts:{compile:function(){var F=L()($()().mark(function O(){var I,c=arguments;return $()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}},"docs-reactive-computed-async-demo-1":{component:t.memo(t.lazy(L()($()().mark(function F(){var l,O,I,c,b,n;return $()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=s.sent,O=l.computed,I=l.createStore,s.next=7,Promise.resolve().then(e.bind(e,21970));case 7:return c=s.sent,b=c.api,n=I({user:{repo:"https://api.github.com/users/zhangfisher/repos",projects:O(function(){var D=L()($()().mark(function g(x){var C,N;return $()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return C=o()(x,1),N=C[0],r.next=3,new Promise(function(f){return setTimeout(f,2e3)});case 3:return r.next=5,b.getProjects(N);case 5:return r.abrupt("return",r.sent);case 6:case"end":return r.stop()}},g)}));return function(g){return D.apply(this,arguments)}}(),["user.repo"],{scope:"depends"})}}),s.abrupt("return",{default:function(){var g=n.useState(),x=o()(g,1),C=x[0];return t.createElement("div",null,t.createElement("p",null,t.createElement("b",null,"\u4FEE\u6539\u4ED3\u5E93\u5730\u5740\u5C06\u89E6\u53D1\u91CD\u65B0\u52A0\u8F7D\u8BE5\u4ED3\u5E93\u9879\u76EE\u5217\u8868")),"\u4ED3\u5E93\u5730\u5740\uFF1A",t.createElement("input",{value:C.user.repo,onChange:n.sync(["user","repo"])}),t.createElement("button",{onClick:function(){return n.state.user.projects.run()}},"\u91CD\u8BD5"),t.createElement("button",{onClick:function(){return n.state.user.repo="https://api.github.com/users/zhangfisher/repos"}},"\u6062\u590D"),t.createElement("table",{className:"projects-list"},t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"3"},"\u4EE5\u4E0B\u662F\u6211\u7684\u5F00\u6E90\u9879\u76EE\uFF0C\u611F\u8C22\u652F\u6301\uFF01")),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u9879\u76EE\u540D\u79F0")),t.createElement("td",null,t.createElement("b",null,"\u8BF4\u660E")),t.createElement("td",null,t.createElement("b",null,"\u661F")))),t.createElement("tbody",null,C.user.projects.loading?t.createElement("tr",null,t.createElement("td",{colSpan:3},"\u6B63\u5728\u52A0\u8F7D...:")):C.user.projects.error?t.createElement("tr",null,t.createElement("td",{colSpan:2},"\u52A0\u8F7D\u9519\u8BEF:",C.user.projects.error)):C.user.projects&&C.user.projects.result.map(function(N,_){return t.createElement("tr",{key:_},t.createElement("td",null,t.createElement("a",{href:N.url,target:"__blank"},N.name)),t.createElement("td",null,N.description),t.createElement("td",null,N.stars))}))))}});case 11:case"end":return s.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { computed,createStore } from "@speedform/reactive"
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

}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970)},renderOpts:{compile:function(){var F=L()($()().mark(function O(){var I,c=arguments;return $()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}},"docs-reactive-computed-async-demo-2":{component:t.memo(t.lazy(L()($()().mark(function F(){var l,O,I,c,b,n;return $()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=s.sent,O=l.createStore,I=l.computed,c=l.ComputedScopeRef,b={user:{firstName:"zhang",lastName:"fisher",fullName:I(function(){var D=L()($()().mark(function g(x){var C,N,_;return $()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return C=o()(x,2),N=C[0],_=C[1],f.abrupt("return",N+_);case 2:case"end":return f.stop()}},g)}));return function(g){return D.apply(this,arguments)}}(),["user.firstName","user.lastName"],{scope:c.Depends}),fullName1:I(function(){var D=L()($()().mark(function g(x){var C,N,_;return $()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return C=o()(x,2),N=C[0],_=C[1],f.abrupt("return",N+_);case 2:case"end":return f.stop()}},g)}));return function(g){return D.apply(this,arguments)}}(),["./firstName","./lastName"],{scope:c.Depends})},other:{fullName2:I(function(){var D=L()($()().mark(function g(x){var C,N,_;return $()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return C=o()(x,2),N=C[0],_=C[1],f.abrupt("return",N+_);case 2:case"end":return f.stop()}},g)}));return function(g){return D.apply(this,arguments)}}(),["../user.firstName","../user.lastName"],{scope:c.Depends})}},n=O(b),s.abrupt("return",{default:function(){var g=n.useState(),x=o()(g,1),C=x[0];return t.createElement("div",null,t.createElement("div",null,"firstName=",C.user.firstName),t.createElement("div",null,"lastName=",C.user.lastName),t.createElement("div",null,"fullName=",C.user.fullName.result),t.createElement("div",null,"fullName1=",C.user.fullName1.result),t.createElement("div",null,"fullName2=",C.other.fullName2.result))}});case 9:case"end":return s.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef } from "@speedform/reactive" 

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var F=L()($()().mark(function O(){var I,c=arguments;return $()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}},"docs-reactive-computed-async-demo-3":{component:t.memo(t.lazy(L()($()().mark(function F(){var l,O,I,c,b,n,R,s,D,g,x,C;return $()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=_.sent,O=l.createStore,I=l.computed,_.next=7,Promise.resolve().then(e.t.bind(e,92379,19));case 7:return c=_.sent,b=c.useRef,n=c.useEffect,_.next=12,Promise.resolve().then(e.bind(e,21970));case 12:return R=_.sent,s=R.delay,_.next=16,Promise.resolve().then(e.bind(e,48398));case 16:return D=_.sent,g=D.Box,x={user:{firstName:"Zhang",lastName:"Fisher",fullName:I(function(){var r=L()($()().mark(function f(v){return $()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,s();case 2:return S.abrupt("return",v.firstName+v.lastName);case 3:case"end":return S.stop()}},f)}));return function(f){return r.apply(this,arguments)}}(),["user.firstName","user.lastName"])}},C=O(x),_.abrupt("return",{default:function(){var f=b(0),v=C.useState(),E=o()(v,2),S=E[0],A=E[1];return n(function(){f.current++},[]),t.createElement(g,null,t.createElement("div",null,t.createElement("div",null,"FirstName:",S.user.firstName),t.createElement("div",null,"LastName:",S.user.lastName),t.createElement("div",null,"FullName:",S.user.fullName.loading?"\u6B63\u5728\u8BA1\u7B97...":S.user.fullName.error?"ERROR:".concat(S.user.fullName.error):S.user.fullName.result),t.createElement("button",{onClick:function(){return A(function(z){return z.user.firstName="ZHANG "+f.current++})}},"\u4FEE\u6539FirstName"),t.createElement("button",{onClick:function(){return A(function(z){return z.user.lastName="FISHER"+f.current++})}},"\u4FEE\u6539LastName"),t.createElement("button",{onClick:function(){return S.user.fullName.run()}},"\u91CD\u65B0\u8BA1\u7B97")),t.createElement("div",null,JSON.stringify(S.user.fullName)))}});case 21:case"end":return _.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"speedform-docs":{type:"NPM",value:"0.0.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),react:e(92379),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=L()($()().mark(function O(){var I,c=arguments;return $()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}},"docs-reactive-computed-async-demo-4":{component:t.memo(t.lazy(L()($()().mark(function F(){var l,O,I,c,b,n,R,s,D;return $()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=x.sent,O=l.createStore,I=l.computed,c=l.ComputedScopeRef,x.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return b=x.sent,n=b.delay,x.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return R=x.sent,s=R.Box,D=O({order:{bookName:"ZhangFisher",price:100,count:1,total:I(function(){var C=L()($()().mark(function N(_,r){var f,v,E,S,A;return $()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return f=o()(_,2),v=f[0],E=f[1],S=r.getProgressbar,A=S(),z.abrupt("return",new Promise(function(){var J=L()($()().mark(function Q(te){var re;return $()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:re=1;case 1:if(!(re<=100)){oe.next=8;break}return oe.next=4,n(20);case 4:A.value(re);case 5:re++,oe.next=1;break;case 8:A.end(),te(v*E);case 10:case"end":return oe.stop()}},Q)}));return function(Q){return J.apply(this,arguments)}}()));case 4:case"end":return z.stop()}},N)}));return function(N,_){return C.apply(this,arguments)}}(),["order.count","order.price"],{scope:c.Depends})}}),x.abrupt("return",{default:function(){var N=D.useState(),_=o()(N,2),r=_[0],f=_[1];return t.createElement(s,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,r.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,r.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return f(function(E){return E.order.count=E.order.count-1})}},"-"),t.createElement("input",{value:r.order.count,onChange:D.sync(function(v){return v.order.count})}),t.createElement("button",{onClick:function(){return f(function(E){return E.order.count=E.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,r.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...".concat(r.order.total.progress,"%"):r.order.total.error?"ERROR:".concat(r.order.total.error):r.order.total.result)))),t.createElement("div",null,JSON.stringify(r.order.total)))}});case 16:case"end":return x.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"0.0.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=L()($()().mark(function O(){var I,c=arguments;return $()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}},"docs-reactive-computed-async-demo-5":{component:t.memo(t.lazy(L()($()().mark(function F(){var l,O,I,c,b,n,R,s,D;return $()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=x.sent,O=l.createStore,I=l.computed,c=l.ComputedScopeRef,x.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return b=x.sent,n=b.delay,x.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return R=x.sent,s=R.Box,D=O({order:{bookName:"ZhangFisher",price:100,count:1,total:I(function(){var C=L()($()().mark(function N(_){var r,f,v;return $()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return r=o()(_,2),f=r[0],v=r[1],S.next=3,n(2e3);case 3:return S.abrupt("return",f*v);case 4:case"end":return S.stop()}},N)}));return function(N){return C.apply(this,arguments)}}(),["order.count","order.price"],{timeout:1e3,scope:c.Depends})}}),x.abrupt("return",{default:function(){var N=D.useState(),_=o()(N,2),r=_[0],f=_[1];return t.createElement(s,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,r.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,r.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return f(function(E){return E.order.count=E.order.count-1})}},"-"),t.createElement("input",{value:r.order.count,onChange:D.sync(function(v){return v.order.count})}),t.createElement("button",{onClick:function(){return f(function(E){return E.order.count=E.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,r.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...(\u8D85\u65F6:".concat(r.order.total.timeout,")"):r.order.total.error?"ERROR:".concat(r.order.total.error):r.order.total.result)))),t.createElement("div",null,JSON.stringify(r.order.total)))}});case 16:case"end":return x.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"0.0.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=L()($()().mark(function O(){var I,c=arguments;return $()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}},"docs-reactive-computed-async-demo-6":{component:t.memo(t.lazy(L()($()().mark(function F(){var l,O,I,c,b,n,R,s,D;return $()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=x.sent,O=l.createStore,I=l.computed,c=l.ComputedScopeRef,x.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return b=x.sent,n=b.delay,x.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return R=x.sent,s=R.Box,D=O({order:{bookName:"ZhangFisher",price:100,count:1,total:I(function(){var C=L()($()().mark(function N(_){var r,f,v;return $()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return r=o()(_,2),f=r[0],v=r[1],S.next=3,n(1e5);case 3:return S.abrupt("return",f*v);case 4:case"end":return S.stop()}},N)}));return function(N){return C.apply(this,arguments)}}(),["order.count","order.price"],{timeout:[5*1e3,5],scope:c.Depends})}}),x.abrupt("return",{default:function(){var N=D.useState(),_=o()(N,2),r=_[0],f=_[1];return t.createElement(s,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,r.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,r.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return f(function(E){return E.order.count=E.order.count-1})}},"-"),t.createElement("input",{value:r.order.count,onChange:D.sync(function(v){return v.order.count})}),t.createElement("button",{onClick:function(){return f(function(E){return E.order.count=E.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,r.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...(\u5012\u8BA1\u65F6:".concat(r.order.total.timeout,")"):r.order.total.error?"ERROR:".concat(r.order.total.error):r.order.total.result)))),t.createElement("div",null,JSON.stringify(r.order.total)))}});case 16:case"end":return x.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"0.0.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=L()($()().mark(function O(){var I,c=arguments;return $()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}},"docs-reactive-computed-async-demo-7":{component:t.memo(t.lazy(L()($()().mark(function F(){var l,O,I,c,b,n,R,s,D,g;return $()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=C.sent,O=l.createStore,I=l.computed,c=l.ComputedScopeRef,C.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return b=C.sent,n=b.delay,C.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return R=C.sent,s=R.Box,D=0,g=O({order:{bookName:"ZhangFisher",price:100,count:1,total:I(function(){var N=L()($()().mark(function _(r){var f,v,E;return $()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return f=o()(r,2),v=f[0],E=f[1],++v,A.next=4,n();case 4:throw new Error("\u8BA1\u7B97\u51FA\u9519"+v);case 5:case"end":return A.stop()}},_)}));return function(_){return N.apply(this,arguments)}}(),["order.count","order.price"],{retry:[5,1e3],scope:c.Depends})}}),C.abrupt("return",{default:function(){var _=g.useState(),r=o()(_,2),f=r[0],v=r[1];return t.createElement(s,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,f.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,f.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return v(function(S){return S.order.count=S.order.count-1})}},"-"),t.createElement("input",{value:f.order.count,onChange:g.sync(function(E){return E.order.count})}),t.createElement("button",{onClick:function(){return v(function(S){D=0,S.order.count=S.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,f.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...":f.order.total.error?"ERROR:".concat(f.order.total.error):f.order.total.result,f.order.total.retry>0?"\u91CD\u8BD5:".concat(f.order.total.retry):"")))),t.createElement("div",null,JSON.stringify(f.order.total)))}});case 17:case"end":return C.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"0.0.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=L()($()().mark(function O(){var I,c=arguments;return $()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}},"docs-reactive-computed-async-demo-8":{component:t.memo(t.lazy(L()($()().mark(function F(){var l,O,I,c,b,n,R;return $()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=D.sent,O=l.createStore,I=l.computed,c=l.ComputedScopeRef,D.next=8,Promise.resolve().then(e.bind(e,48398));case 8:return b=D.sent,n=b.Box,R=O({order:{bookName:"ZhangFisher",price:100,count:1,total:I(function(){var g=L()($()().mark(function x(C,N){var _,r,f,v;return $()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return _=o()(C,2),r=_[0],f=_[1],v=N.abortSignal,S.abrupt("return",new Promise(function(A,j){setTimeout(function(){A(r*f)},1e4),v.addEventListener("abort",function(){j("cancelled")})}));case 3:case"end":return S.stop()}},x)}));return function(x,C){return g.apply(this,arguments)}}(),["order.count","order.price"],{timeout:[10*1e3,10],scope:c.Depends})}}),D.abrupt("return",{default:function(){var x=R.useState(),C=o()(x,2),N=C[0],_=C[1];return t.createElement(n,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,N.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,N.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return _(function(f){return f.order.count=f.order.count-1})}},"-"),t.createElement("input",{value:N.order.count,onChange:R.sync(function(r){return r.order.count})}),t.createElement("button",{onClick:function(){return _(function(f){f.order.count=f.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,N.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...".concat(N.order.total.timeout):N.order.total.error?"ERROR:".concat(N.order.total.error):N.order.total.result,N.order.total.loading?t.createElement("button",{onClick:function(){return N.order.total.cancel()}},"\u53D6\u6D88"):"")))),t.createElement("div",null,JSON.stringify(N.order.total)))}});case 12:case"end":return D.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=L()($()().mark(function O(){var I,c=arguments;return $()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}},"docs-reactive-computed-async-demo-9":{component:t.memo(t.lazy(L()($()().mark(function F(){var l,O,I,c;return $()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=n.sent,O=l.createStore,I=l.computed,c=O({bookName:"ZhangFisher",price:100,count:3,total:I(function(){var R=L()($()().mark(function s(D){return $()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",D.price*D.count);case 1:case"end":return x.stop()}},s)}));return function(s){return R.apply(this,arguments)}}(),[])}),n.abrupt("return",{default:function(){var s=c.useState(),D=o()(s,1),g=D[0];return t.createElement("div",null,t.createElement("div",null,"\u4E66\u540D:",g.bookName),t.createElement("div",null,"\u4EF7\u683C:",g.price),t.createElement("div",null,"\u6570\u91CF:",g.count),t.createElement("div",null,"\u603B\u4EF7:",g.total.result))}});case 7:case"end":return n.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed} from "@speedform/reactive"

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var F=L()($()().mark(function O(){var I,c=arguments;return $()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}},"docs-reactive-computed-async-demo-10":{component:t.memo(t.lazy(L()($()().mark(function F(){var l,O,I;return $()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=b.sent,O=l.createStore,I=O({bookName:"ZhangFisher",price:100,count:3,total:function(){var n=L()($()().mark(function s(D){return $()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",D.price*D.count);case 1:case"end":return x.stop()}},s)}));function R(s){return n.apply(this,arguments)}return R}()}),b.abrupt("return",{default:function(){var R=I.useState(),s=o()(R,1),D=s[0];return t.createElement("div",null,t.createElement("div",null,"\u4E66\u540D:",D.bookName),t.createElement("div",null,"\u4EF7\u683C:",D.price),t.createElement("div",null,"\u6570\u91CF:",D.count),t.createElement("div",null,"\u603B\u4EF7:",D.total.result),t.createElement("div",null,"state.total=",String(D.total)))}});case 6:case"end":return b.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore} from "@speedform/reactive"

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var F=L()($()().mark(function O(){var I,c=arguments;return $()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}}}},75004:function(V,i,e){e.r(i),e.d(i,{demos:function(){return l}});var B=e(29008),o=e.n(B),G=e(34180),$=e.n(G),K=e(28633),L=e.n(K),t=e(70958),U=e.n(t),W=e(92379),F=e(69180),l={"docs-reactive-computed-intro-demo-0":{component:W.memo(W.lazy(U()(o()().mark(function O(){var I,c,b,n,R,s;return o()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return I=g.sent,c=I.createStore,g.next=6,Promise.resolve().then(e.bind(e,48398));case 6:return b=g.sent,n=b.Divider,R={firstName:"Zhang",lastName:"Fisher",fullName:function(C){return C.firstName+C.lastName}},s=c(R,{singleton:!1}),g.abrupt("return",{default:function(){var C=s.useState(),N=L()(C,2),_=N[0],r=N[1];return W.createElement("div",null,W.createElement("h4",null,"\u58F0\u660E\u65F6fullName\u662F\u4E00\u4E2A\u51FD\u6570"),W.createElement("div",null,"typeof(user.fullName)=",$()(R.fullName)),W.createElement(n,null),W.createElement("h4",null,"\u521B\u5EFAStore\u540E,state.fullName\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32"),W.createElement("div",null,"typeof(store.state.fullName)=",$()(_.fullName)),W.createElement("div",null,"store.state.fullName==",_.fullName))}});case 11:case"end":return g.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive'; 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var O=U()(o()().mark(function c(){var b,n=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(408).then(e.bind(e,28408));case 2:return s.abrupt("return",(b=s.sent).default.apply(b,n));case 3:case"end":return s.stop()}},c)}));function I(){return O.apply(this,arguments)}return I}()}},"docs-reactive-computed-intro-demo-1":{component:W.memo(W.lazy(U()(o()().mark(function O(){var I,c,b,n,R;return o()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return I=D.sent,c=I.createStore,b=I.ComputedScopeRef,n={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(x){return x.firstName+x.lastName}}},R=c(n,{scope:function(){return b.Current}}),D.abrupt("return",{default:function(){var x=R.useState(),C=L()(x,2),N=C[0],_=C[1];return W.createElement("div",null,W.createElement("div",null,"FullName:",N.user.fullName))}});case 8:case"end":return D.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive'; 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"store.options.scope==ComputedScopeRef.Current,",title:"ComputedScopeRef.Current"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=U()(o()().mark(function c(){var b,n=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(408).then(e.bind(e,28408));case 2:return s.abrupt("return",(b=s.sent).default.apply(b,n));case 3:case"end":return s.stop()}},c)}));function I(){return O.apply(this,arguments)}return I}()}},"docs-reactive-computed-intro-demo-2":{component:W.memo(W.lazy(U()(o()().mark(function O(){var I,c,b,n;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return I=s.sent,c=I.createStore,b=I.ComputedScopeRef,n=c({user:{firstName:"Zhang",lastName:"Fisher",fullName:function(g){return g.user.firstName+g.user.lastName}}},{scope:function(){return b.Root}}),s.abrupt("return",{default:function(){var g=n.useState(),x=L()(g,2),C=x[0],N=x[1];return W.createElement("div",null,W.createElement("div",null,"FullName:",C.user.fullName))}});case 7:case"end":return s.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive'; 
 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"store.options.scope==ComputedScopeRef.Root,",title:"ComputedScopeRef.Root"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=U()(o()().mark(function c(){var b,n=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(408).then(e.bind(e,28408));case 2:return s.abrupt("return",(b=s.sent).default.apply(b,n));case 3:case"end":return s.stop()}},c)}));function I(){return O.apply(this,arguments)}return I}()}},"docs-reactive-computed-intro-demo-3":{component:W.memo(W.lazy(U()(o()().mark(function O(){var I,c,b,n,R;return o()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return I=D.sent,c=I.createStore,b=I.ComputedScopeRef,n={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(x){return x.user.firstName+x.user.lastName}}},R=c(n,{scope:function(){return b.Parent}}),D.abrupt("return",{default:function(){var x=R.useState(),C=L()(x,2),N=C[0],_=C[1];return W.createElement("div",null,W.createElement("div",null,"FullName:",N.user.fullName))}});case 8:case"end":return D.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive'; 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"scope==ComputedScopeRef.Parent",title:"ComputedScopeRef.Parent"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=U()(o()().mark(function c(){var b,n=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(408).then(e.bind(e,28408));case 2:return s.abrupt("return",(b=s.sent).default.apply(b,n));case 3:case"end":return s.stop()}},c)}));function I(){return O.apply(this,arguments)}return I}()}},"docs-reactive-computed-intro-demo-4":{component:W.memo(W.lazy(U()(o()().mark(function O(){var I,c,b,n;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return I=s.sent,c=I.createStore,b={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(g){return g},address:{city:"Quanzhou"}}},n=c(b,{scope:function(){return"firstName"}}),s.abrupt("return",{default:function(){var g=n.useState(),x=L()(g,2),C=x[0],N=x[1];return W.createElement("div",null,W.createElement("div",null,"FullName:",C.user.fullName))}});case 7:case"end":return s.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive'; 

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"store.options.scope==<\u5B57\u7B26\u4E32>",title:"<\u5B57\u7B26\u4E32>"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=U()(o()().mark(function c(){var b,n=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(408).then(e.bind(e,28408));case 2:return s.abrupt("return",(b=s.sent).default.apply(b,n));case 3:case"end":return s.stop()}},c)}));function I(){return O.apply(this,arguments)}return I}()}},"docs-reactive-computed-intro-demo-5":{component:W.memo(W.lazy(U()(o()().mark(function O(){var I,c,b,n;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return I=s.sent,c=I.createStore,b={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(g){return g},address:{city:"Quanzhou"}}},n=c(b,{scope:function(){return["user","address","city"]}}),s.abrupt("return",{default:function(){var g=n.useState(),x=L()(g,2),C=x[0],N=x[1];return W.createElement("div",null,W.createElement("div",null,"FullName:",C.user.fullName))}});case 7:case"end":return s.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive'; 

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",title:"<\u5B57\u7B26\u4E32\u6570\u7EC4>"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=U()(o()().mark(function c(){var b,n=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(408).then(e.bind(e,28408));case 2:return s.abrupt("return",(b=s.sent).default.apply(b,n));case 3:case"end":return s.stop()}},c)}));function I(){return O.apply(this,arguments)}return I}()}},"docs-reactive-computed-intro-demo-6":{component:W.memo(W.lazy(U()(o()().mark(function O(){var I,c,b,n,R,s;return o()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return I=g.sent,c=I.createStore,b=I.computed,n=I.ComputedScopeRef,R={user:{firstName:"Zhang",lastName:"Fisher",fullName:b(function(){var x=U()(o()().mark(function C(N){return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",N[0]+N[1]);case 1:case"end":return r.stop()}},C)}));return function(C){return x.apply(this,arguments)}}(),["user.firstName","user.lastName"],{async:!0,scope:n.Depends})}},s=c(R),g.abrupt("return",{default:function(){var C=s.useState(),N=L()(C,2),_=N[0],r=N[1];return W.createElement("div",null,W.createElement("div",null,"FullName:",_.user.fullName.result))}});case 9:case"end":return g.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef  } from '@speedform/reactive'; 

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",title:"<\u5B57\u7B26\u4E32\u6570\u7EC4>"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=U()(o()().mark(function c(){var b,n=arguments;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(408).then(e.bind(e,28408));case 2:return s.abrupt("return",(b=s.sent).default.apply(b,n));case 3:case"end":return s.stop()}},c)}));function I(){return O.apply(this,arguments)}return I}()}}}},43639:function(V,i,e){e.r(i),e.d(i,{demos:function(){return I}});var B=e(12027),o=e.n(B),G=e(34180),$=e.n(G),K=e(28633),L=e.n(K),t=e(29008),U=e.n(t),W=e(70958),F=e.n(W),l=e(92379),O=e(68282),I={"docs-reactive-computed-objects-demo-0":{component:l.memo(l.lazy(F()(U()().mark(function c(){var b,n,R,s,D,g,x,C,N;return U()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return b=r.sent,n=b.createStore,R=b.computed,r.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return s=r.sent,D=s.Divider,g=s.ColorBlock,x=0,C={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(v){return v.firstName+v.lastName+" (".concat(++x,")")},fullName2:R(function(){var f=F()(U()().mark(function v(E){return U()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",E.firstName+E.lastName+" (".concat(++x,")"));case 1:case"end":return A.stop()}},v)}));return function(v){return f.apply(this,arguments)}}(),[],{async:!0})}},N=n(C),r.abrupt("return",{default:function(){var v=N.useState(),E=L()(v,1),S=E[0];return l.createElement("div",null,l.createElement("div",null,"FirstName =",S.user.firstName),l.createElement("div",null,"LastName =",S.user.lastName),l.createElement(g,{name:"FullName",value:S.user.fullName}),l.createElement(g,{name:"FullName2",value:S.user.fullName2.result}),l.createElement(D,null),l.createElement("div",null,"typeof(store.computedObjects)==",$()(N.computedObjects)),l.createElement("div",null,"store.computedObjects instanceof Map=",String(N.computedObjects instanceof Map)),l.createElement("div",null,"store.computedObjects.size=",N.computedObjects.size),l.createElement("div",null,"store.computedObjects.size=",N.computedObjects.size),l.createElement("div",null,"store.computedObjects.keys()=",o()(N.computedObjects.keys()).join(" , ")),l.createElement("button",{onClick:function(){return N.computedObjects.get("user/fullName").run()}},"\u6267\u884CfullName\u8BA1\u7B97\u51FD\u6570"),l.createElement("button",{onClick:function(){return N.computedObjects.get("user/fullName2").run()}},"\u6267\u884CfullName2\u8BA1\u7B97\u51FD\u6570"),l.createElement("button",{onClick:function(){return N.state.user.fullName2.run()}},"\u6267\u884CfullName2\u8BA1\u7B97\u51FD\u6570"))}});case 14:case"end":return r.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var c=F()(U()().mark(function n(){var R,s=arguments;return U()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(408).then(e.bind(e,28408));case 2:return g.abrupt("return",(R=g.sent).default.apply(R,s));case 3:case"end":return g.stop()}},n)}));function b(){return c.apply(this,arguments)}return b}()}},"docs-reactive-computed-objects-demo-1":{component:l.memo(l.lazy(F()(U()().mark(function c(){var b,n,R,s,D,g,x,C,N,_;return U()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return b=f.sent,n=b.createStore,R=b.computed,f.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return s=f.sent,D=s.Divider,f.next=11,Promise.resolve().then(e.bind(e,21970));case 11:return g=f.sent,x=g.delay,C=0,N={book:{name:"Zhang",count:4,price:100,total1:R(function(){var v=F()(U()().mark(function E(S){return U()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,x();case 2:return j.abrupt("return",S.count*S.price);case 3:case"end":return j.stop()}},E)}));return function(E){return v.apply(this,arguments)}}(),[],{async:!0,group:"total"}),total2:R(function(){var v=F()(U()().mark(function E(S){return U()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,x();case 2:return j.abrupt("return",S.count*S.price);case 3:case"end":return j.stop()}},E)}));return function(E){return v.apply(this,arguments)}}(),[],{async:!0,group:"total"}),total3:R(function(){var v=F()(U()().mark(function E(S){return U()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,x();case 2:return j.abrupt("return",S.count*S.price);case 3:case"end":return j.stop()}},E)}));return function(E){return v.apply(this,arguments)}}(),[],{async:!0,group:"total"}),average1:R(function(){var v=F()(U()().mark(function E(S){return U()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,x();case 2:return j.abrupt("return",S.price/S.count);case 3:case"end":return j.stop()}},E)}));return function(E){return v.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average2:R(function(){var v=F()(U()().mark(function E(S){return U()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,x();case 2:return j.abrupt("return",S.price/S.count);case 3:case"end":return j.stop()}},E)}));return function(E){return v.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average3:R(function(){var v=F()(U()().mark(function E(S){return U()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,x();case 2:return j.abrupt("return",S.price/S.count);case 3:case"end":return j.stop()}},E)}));return function(E){return v.apply(this,arguments)}}(),[],{async:!0,group:"average"})}},_=n(N),f.abrupt("return",{default:function(){var E=_.useState(),S=L()(E,1),A=S[0];return l.createElement("div",null,l.createElement("div",null,"BookName =",A.book.name),l.createElement("div",null,"count = ",l.createElement("input",{value:A.book.count,onChange:_.sync(["book","count"])})),l.createElement("div",null,"price = ",l.createElement("input",{value:A.book.price,onChange:_.sync(["book","price"])})),l.createElement(D,{title:"Total Group"}),l.createElement("div",null,"Total1 =",A.book.total1.loading?"\u8BA1\u7B97\u4E2D...":A.book.total1.result),l.createElement("div",null,"Total2 =",A.book.total2.loading?"\u8BA1\u7B97\u4E2D...":A.book.total2.result),l.createElement("div",null,"Total3 =",A.book.total3.loading?"\u8BA1\u7B97\u4E2D...":A.book.total3.result),l.createElement("button",{onClick:function(){return _.computedObjects.runGroup("total")}},"\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570"),l.createElement(D,{title:"Average Group"}),l.createElement("div",null,"Average1 =",A.book.average1.loading?"\u8BA1\u7B97\u4E2D...":A.book.average1.result),l.createElement("div",null,"Average2 =",A.book.average2.loading?"\u8BA1\u7B97\u4E2D...":A.book.average2.result),l.createElement("div",null,"Average3 =",A.book.average3.loading?"\u8BA1\u7B97\u4E2D...":A.book.average3.result),l.createElement("button",{onClick:function(){return _.computedObjects.runGroup("average")}},"\u6267\u884C\u7EC4average\u8BA1\u7B97\u51FD\u6570"))}});case 17:case"end":return f.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398),"speedform-docs":e(21970)},renderOpts:{compile:function(){var c=F()(U()().mark(function n(){var R,s=arguments;return U()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(408).then(e.bind(e,28408));case 2:return g.abrupt("return",(R=g.sent).default.apply(R,s));case 3:case"end":return g.stop()}},n)}));function b(){return c.apply(this,arguments)}return b}()}},"docs-reactive-computed-objects-demo-2":{component:l.memo(l.lazy(F()(U()().mark(function c(){var b,n,R,s,D,g,x,C,N,_;return U()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return b=f.sent,n=b.createStore,R=b.computed,f.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return s=f.sent,D=s.Divider,f.next=11,Promise.resolve().then(e.bind(e,21970));case 11:return g=f.sent,x=g.delay,C=0,N={book:{name:"Zhang",count:4,price:100,total1:R(function(){var v=F()(U()().mark(function E(S){return U()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,x();case 2:return j.abrupt("return",S.count*S.price);case 3:case"end":return j.stop()}},E)}));return function(E){return v.apply(this,arguments)}}(),["book.count","book.price"],{async:!0,group:"total"}),total2:R(function(){var v=F()(U()().mark(function E(S){return U()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,x();case 2:return j.abrupt("return",S.count*S.price);case 3:case"end":return j.stop()}},E)}));return function(E){return v.apply(this,arguments)}}(),["book.count","book.price"],{async:!0,group:"total",initial:100,enable:!1}),total3:R(function(){var v=F()(U()().mark(function E(S){return U()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,x();case 2:return j.abrupt("return",S.count*S.price);case 3:case"end":return j.stop()}},E)}));return function(E){return v.apply(this,arguments)}}(),[],{async:!0,group:"total"}),average1:R(function(){var v=F()(U()().mark(function E(S){return U()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,x();case 2:return j.abrupt("return",S.price/S.count);case 3:case"end":return j.stop()}},E)}));return function(E){return v.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average2:R(function(){var v=F()(U()().mark(function E(S){return U()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,x();case 2:return j.abrupt("return",S.price/S.count);case 3:case"end":return j.stop()}},E)}));return function(E){return v.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average3:R(function(){var v=F()(U()().mark(function E(S){return U()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,x();case 2:return j.abrupt("return",S.price/S.count);case 3:case"end":return j.stop()}},E)}));return function(E){return v.apply(this,arguments)}}(),[],{async:!0,group:"average"})}},_=n(N),f.abrupt("return",{default:function(){var E=_.useState(),S=L()(E,1),A=S[0];return l.createElement("div",null,l.createElement("div",null,"BookName =",A.book.name),l.createElement("div",null,"count = ",l.createElement("input",{value:A.book.count,onChange:_.sync(["book","count"])})),l.createElement("div",null,"price = ",l.createElement("input",{value:A.book.price,onChange:_.sync(["book","price"])})),l.createElement(D,{title:"Total Group"}),l.createElement("table",null,l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"Total1 ="),l.createElement("td",null,A.book.total1.loading?"\u8BA1\u7B97\u4E2D...":A.book.total1.result),l.createElement("td",null,"\u9ED8\u8BA4\u81EA\u52A8\u8BA1\u7B97")),l.createElement("tr",null,l.createElement("td",null,"Total2 ="),l.createElement("td",null,A.book.total2.loading?"\u8BA1\u7B97\u4E2D...":A.book.total2.result),l.createElement("td",null,"\u7981\u7528\u8BA1\u7B97\uFF0C\u6307\u5B9A\u4E86\u9ED8\u8BA4\u503C(",l.createElement("input",{type:"checkbox",checked:_.computedObjects.get("book/total2"),onChange:function(z){console.log("ff=,",z.target,_.computedObjects.get("book/total2"))}}),")")),l.createElement("tr",null,l.createElement("td",null,"Total3 ="),l.createElement("td",null,A.book.total3.loading?"\u8BA1\u7B97\u4E2D...":A.book.total3.result),l.createElement("td",null,"\u65E0\u4F9D\u8D56\uFF0C\u9700\u8981\u624B\u52A8\u8BA1\u7B97")))),l.createElement("button",{onClick:function(){return _.computedObjects.runGroup("total")}},"\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570"),l.createElement(D,{title:"Average Group"}),l.createElement("div",null,"Average1 =",A.book.average1.loading?"\u8BA1\u7B97\u4E2D...":A.book.average1.result),l.createElement("div",null,"Average2 =",A.book.average2.loading?"\u8BA1\u7B97\u4E2D...":A.book.average2.result),l.createElement("div",null,"Average3 =",A.book.average3.loading?"\u8BA1\u7B97\u4E2D...":A.book.average3.result),l.createElement("button",{onClick:function(){return _.computedObjects.runGroup("average")}},"\u6267\u884C\u7EC4average\u8BA1\u7B97\u51FD\u6570"))}});case 17:case"end":return f.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398),"speedform-docs":e(21970)},renderOpts:{compile:function(){var c=F()(U()().mark(function n(){var R,s=arguments;return U()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(408).then(e.bind(e,28408));case 2:return g.abrupt("return",(R=g.sent).default.apply(R,s));case 3:case"end":return g.stop()}},n)}));function b(){return c.apply(this,arguments)}return b}()}},"docs-reactive-computed-objects-demo-3":{component:l.memo(l.lazy(F()(U()().mark(function c(){var b,n,R,s,D,g,x,C;return U()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return b=_.sent,n=b.createStore,R=b.computed,_.next=7,Promise.resolve().then(e.bind(e,21970));case 7:return s=_.sent,D=s.delay,g=0,x={book:{name:"Zhang",count:4,price:100,total:R(function(){var r=F()(U()().mark(function f(v){return U()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,D();case 2:return S.abrupt("return",v.count*v.price);case 3:case"end":return S.stop()}},f)}));return function(f){return r.apply(this,arguments)}}(),[],{async:!0,group:"total"})}},C=n(x),_.abrupt("return",{default:function(){var f=C.useState(),v=L()(f,1),E=v[0];return l.createElement("div",null,l.createElement("div",null,"BookName =",E.book.name),l.createElement("div",null,"count = ",l.createElement("input",{value:E.book.count,onChange:C.sync(["book","count"])})),l.createElement("div",null,"price = ",l.createElement("input",{value:E.book.price,onChange:C.sync(["book","price"])})),l.createElement("div",null,"Total =",E.book.total.loading?"\u8BA1\u7B97\u4E2D...":E.book.total.result),l.createElement("button",{onClick:function(){return C.computedObjects.runGroup("total")}},"\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570"))}});case 13:case"end":return _.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970)},renderOpts:{compile:function(){var c=F()(U()().mark(function n(){var R,s=arguments;return U()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(408).then(e.bind(e,28408));case 2:return g.abrupt("return",(R=g.sent).default.apply(R,s));case 3:case"end":return g.stop()}},n)}));function b(){return c.apply(this,arguments)}return b}()}}}},30031:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(22421),G={}},24795:function(V,i,e){e.r(i),e.d(i,{demos:function(){return W}});var B=e(29008),o=e.n(B),G=e(28633),$=e.n(G),K=e(70958),L=e.n(K),t=e(92379),U=e(69),W={"docs-reactive-computed-sync-demo-0":{component:t.memo(t.lazy(L()(o()().mark(function F(){var l,O,I,c;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=n.sent,O=l.createStore,I={books:[{name:"\u5F20\u4E09",price:18,author:"tom",count:2,total:function(s){return s.price*s.count}},{name:"\u674E\u56DB",price:19,author:"jack",count:3,total:function(s){return s.price*s.count}}],total:function(s){return s.books.reduce(function(D,g){return D+g.total},0)}},c=O(I),n.abrupt("return",{default:function(){var s=c.useState(),D=$()(s,2),g=D[0],x=D[1];return t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"\u4E66\u540D"),t.createElement("th",null,"\u4F5C\u8005"),t.createElement("th",null,"\u5355\u4EF7"),t.createElement("th",null,"\u6570\u91CF"),t.createElement("th",null,"\u5C0F\u8BA1"))),t.createElement("tbody",null,g.books.map(function(C,N){return t.createElement("tr",{key:N},t.createElement("td",null,C.name),t.createElement("td",null,C.author),t.createElement("td",null,C.price),t.createElement("td",null,t.createElement("button",{onClick:function(){return c.state.books[N].count=c.state.books[N].count-1}},"-"),C.count,t.createElement("button",{onClick:function(){return c.state.books[N].count=c.state.books[N].count+1}},"+")),t.createElement("td",null,C.total))}),t.createElement("tr",null,t.createElement("td",{colSpan:4},"\u603B\u8BA1"),t.createElement("td",null,g.total))))}});case 7:case"end":return n.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-sync-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive';

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var F=L()(o()().mark(function O(){var I,c=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}}}},86452:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(15101),G={}},6532:function(V,i,e){e.r(i),e.d(i,{demos:function(){return W}});var B=e(29008),o=e.n(B),G=e(28633),$=e.n(G),K=e(70958),L=e.n(K),t=e(92379),U=e(18395),W={"docs-reactive-render-demo-0":{component:t.memo(t.lazy(L()(o()().mark(function F(){var l,O,I,c,b,n,R,s,D,g;return o()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,92379,19));case 2:return l=C.sent,O=l.default,I=l.createContext,c=l.useContext,b=l.useState,C.next=9,Promise.resolve().then(e.bind(e,48398));case 9:return n=C.sent,R=n.Block,s=I({firstName:"Zhang",lastName:"Fisher",age:18}),D=O.memo(function(N){var _=c(s);return O.createElement(R,{name:"\u5B50\u7EC4\u4EF6:".concat(N.name)},O.createElement("span",null,"Hello :",_.firstName," ",_.lastName))}),g=0,C.abrupt("return",{default:function(){var _=b({firstName:"Zhang",lastName:"Fisher",age:18}),r=$()(_,2),f=r[0],v=r[1];return O.createElement(s.Provider,{value:f},O.createElement("div",null,"\u6839\u7EC4\u4EF6"),O.createElement("div",null,"Hello :",f.firstName," ",f.lastName),O.createElement("div",null,"Age :",f.age),O.createElement("button",{onClick:function(){v({firstName:"Zhang",lastName:"Fisher",age:++g})}},"+Age"),O.createElement(D,{name:"A"}),O.createElement(D,{name:"B"}))}});case 15:case"end":return C.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-render-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},react:{type:"NPM",value:"18.3.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{react:e(92379),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=L()(o()().mark(function O(){var I,c=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}},"docs-reactive-render-demo-1":{component:t.memo(t.lazy(L()(o()().mark(function F(){var l,O,I,c,b,n,R,s,D,g,x;return o()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=N.sent,O=l.createStore,N.next=6,Promise.resolve().then(e.t.bind(e,92379,19));case 6:return I=N.sent,c=I.default,N.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return b=N.sent,n=b.Block,R={firstName:"Zhang",lastName:"Fisher",age:18},s=O(R),D=c.memo(function(_){var r=s.useState(),f=$()(r,2),v=f[0],E=f[1],S=v.firstName;return c.createElement(n,{name:"\u5B50\u7EC4\u4EF6:FirstName"},c.createElement("span",null,"Hello :",S))}),g=c.memo(function(_){var r=s.useState(),f=$()(r,2),v=f[0],E=f[1],S=v.lastName;return c.createElement(n,{name:"\u5B50\u7EC4\u4EF6:lastName"},c.createElement("span",null,"Hello :",S))}),x=0,N.abrupt("return",{default:function(){var r=s.useState(),f=$()(r,2),v=f[0],E=f[1];return c.createElement(c.Fragment,null,c.createElement("div",null,"\u6839\u7EC4\u4EF6"),c.createElement("div",null,"Hello :",v.firstName," ",v.lastName),c.createElement("div",null,"Age ",++x,":",v.age),c.createElement("button",{onClick:function(){return E(function(A){return A.age=A.age+1})}},"+Age"),c.createElement("button",{onClick:function(){return E(function(A){return A.firstName=A.firstName+"r"})}},"Change FirstName"),c.createElement(D,null),c.createElement(g,null))}});case 18:case"end":return N.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-render-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),react:e(92379),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=L()(o()().mark(function O(){var I,c=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}},"docs-reactive-render-demo-2":{component:t.memo(t.lazy(L()(o()().mark(function F(){var l,O,I,c,b,n,R,s,D,g,x,C,N;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=r.sent,O=l.createStore,r.next=6,Promise.resolve().then(e.t.bind(e,92379,19));case 6:return I=r.sent,c=I.default,r.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return b=r.sent,n=b.Block,r.next=14,Promise.resolve().then(e.bind(e,13834));case 14:return R=r.sent,s=R.$,D={firstName:"Zhang",lastName:"Fisher",age:18},g=O(D),x=c.memo(function(f){return c.createElement(n,{name:"\u5B50\u7EC4\u4EF6:FirstName"},c.createElement("span",null,"Hello :",g.state.firstName," ",g.state.lastName,"(\u6CA1\u6709\u4F7F\u7528Signal)"))}),C=c.memo(function(f){return c.createElement(n,{name:"\u5B50\u7EC4\u4EF6:LastName"},c.createElement("span",null,"Hello :",s(g.state.firstName)," ",g.state.lastName))}),N=0,r.abrupt("return",{default:function(){return c.createElement(c.Fragment,null,c.createElement("div",null,"\u6839\u7EC4\u4EF6"),c.createElement("div",null,"Hello :",g.state.firstName," ",g.state.lastName),c.createElement("div",null,"Age ",++N,":",s(g.state.age)),c.createElement("button",{onClick:function(){return g.state.age=g.state.age+1}},"+Age"),c.createElement("button",{onClick:function(){return g.state.firstName=g.state.firstName+"r"}},"Change FirstName"),c.createElement(x,null),c.createElement(C,null))}});case 22:case"end":return r.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-render-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},helux:{type:"NPM",value:"4.3.2"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),react:e(92379),"@speedform/demo-components":e(48398),helux:e(13834)},renderOpts:{compile:function(){var F=L()(o()().mark(function O(){var I,c=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}}}},638:function(V,i,e){e.r(i),e.d(i,{demos:function(){return W}});var B=e(29008),o=e.n(B),G=e(28633),$=e.n(G),K=e(70958),L=e.n(K),t=e(92379),U=e(58578),W={"docs-reactive-state-demo-0":{component:t.memo(t.lazy(L()(o()().mark(function F(){var l,O,I,c;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=n.sent,O=l.createStore,I={firstName:"Zhang",lastName:"Fisher",age:18},c=O(I),n.abrupt("return",{default:function(){var s=c.useState(),D=$()(s,2),g=D[0],x=D[1];return t.createElement("div",null,t.createElement("div",null,"Hello :",g.firstName," ",g.lastName),t.createElement("div",null,"Age :",g.age),t.createElement("button",{onClick:function(){return x(function(N){return N.age+=1})}},"+Age"))}});case 7:case"end":return n.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-state-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var F=L()(o()().mark(function O(){var I,c=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}},"docs-reactive-state-demo-1":{component:t.memo(t.lazy(L()(o()().mark(function F(){var l,O,I,c,b,n,R,s;return o()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=g.sent,O=l.createStore,g.next=6,Promise.resolve().then(e.bind(e,48398));case 6:return I=g.sent,c=I.ColorBlock,b={firstName:"Zhang",lastName:"Fisher",fullName:function(C){return C.firstName+C.lastName}},n=O(b),R=t.memo(function(){var x=n.useState(function(_){return _.firstName}),C=$()(x,1),N=C[0];return t.createElement(c,{name:"FirstName",value:N})}),s=t.memo(function(){var x=n.useState(function(_){return _.lastName}),C=$()(x,1),N=C[0];return t.createElement(c,{name:"LastName",value:N})}),g.abrupt("return",{default:function(){var C=n.useState(function(A){return A.firstName},function(A,j){return A.firstName=j}),N=$()(C,2),_=N[0],r=N[1],f=n.useState(function(A){return A.fullName},function(A,j){var z=$()(j,2),J=z[0],Q=z[1];A.firstName=J,A.lastName=Q}),v=$()(f,2),E=v[0],S=v[1];return t.createElement("div",null,t.createElement(R,null),t.createElement(s,null),t.createElement("div",null,"FullName :",E),t.createElement("button",{onClick:function(){return r(_+"r")}},"change FirstName"),t.createElement("button",{onClick:function(){return S(["Hello","Voerkai18n"])}},"change FullName"))}});case 13:case"end":return g.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-state-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=L()(o()().mark(function O(){var I,c=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}},"docs-reactive-state-demo-2":{component:t.memo(t.lazy(L()(o()().mark(function F(){var l,O,I,c,b,n;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=s.sent,O=l.createStore,s.next=6,Promise.resolve().then(e.bind(e,13834));case 6:return I=s.sent,c=I.$,b={firstName:"Zhang",lastName:"Fisher",age:18},n=O(b),s.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement("div",null,"Hello :",n.state.firstName," ",n.state.lastName),t.createElement("div",null,"Age+Signal :",c(n.state.age)),t.createElement("div",null,"Age :",n.state.age),t.createElement("button",{onClick:function(){return n.state.age=n.state.age+1}},"+Age"))}});case 11:case"end":return s.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-state-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},helux:{type:"NPM",value:"4.3.2"}},entry:"index.tsx",description:"\u901A\u8FC7store.state.firstName\u76F4\u63A5\u8BFB\u53D6\u72B6\u6001,\u4E0D\u901A\u8FC7useState\u65B9\u6CD5",title:"\u8BFB\u53D6\u72B6\u6001"},context:{"@speedform/reactive":e(1808),helux:e(13834)},renderOpts:{compile:function(){var F=L()(o()().mark(function O(){var I,c=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}}}},72244:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(14989),G={}},37374:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(91352),G={}},41015:function(V,i,e){e.r(i),e.d(i,{demos:function(){return W}});var B=e(29008),o=e.n(B),G=e(28633),$=e.n(G),K=e(70958),L=e.n(K),t=e(92379),U=e(67690),W={"docs-reactive-watch-objects-demo-0":{component:t.memo(t.lazy(L()(o()().mark(function F(){var l,O,I,c,b,n,R,s,D;return o()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return R=function(N){return I(function(_,r){var f=r.state;return f.price*_},function(_){return _[_.length-1]==="count"},{initial:2,group:N})},x.next=3,Promise.resolve().then(e.bind(e,1808));case 3:return l=x.sent,O=l.createStore,I=l.watch,x.next=8,Promise.resolve().then(e.bind(e,48398));case 8:return c=x.sent,b=c.ColorBlock,n=c.Divider,s={bookName:"zhang",price:2,count:1,total1:R("a"),total2:R("a"),total3:R("b"),total4:R("b"),total5:R("b")},D=O({state:s}),globalThis.Store=D,x.abrupt("return",{default:function(){var N=D.useState(),_=$()(N,2),r=_[0],f=_[1];return typeof r.total1=="function"&&console.warn("state.total1 is function"),t.createElement("div",null,t.createElement("div",null,"bookName=",r.bookName),t.createElement("div",null,"price=",r.price),t.createElement("div",null,"count=",t.createElement("button",{onClick:function(){return f(function(E){return E.count=E.count-1})}},"-"),t.createElement("input",{value:r.count,onChange:D.sync(function(v){return v.count})}),t.createElement("button",{onClick:function(){return f(function(E){return E.count=E.count+1})}},"+")),t.createElement(n,{name:"A Group"}),t.createElement(b,{name:"Total-1",value:r.total1}),t.createElement(b,{name:"Total-2",value:r.total2}),t.createElement("button",{onClick:function(){return D.watchObjects.enableGroup("a",!0)}},"Enable A Group"),t.createElement("button",{onClick:function(){return D.watchObjects.enableGroup("a",!1)}},"Disable A Group"),t.createElement("div",null,"\u5F53\u7981\u7528A Group\u65F6\uFF0C\u4FEE\u6539count\u65F6\u4E0D\u4F1A\u5BFC\u81F4total\u53D8\u5316\uFF0C\u56E0\u4E3A\u8BE5\u7EC4\u88AB\u7981\u6B62\u6267\u884C\u4E86"),t.createElement(n,{name:"B Group"}),t.createElement(b,{name:"Total-3",value:r.total3}),t.createElement(b,{name:"Total-4",value:r.total4}),t.createElement(b,{name:"Total-5",value:r.total5}),t.createElement("button",{onClick:function(){return D.watchObjects.enableGroup("b",!0)}},"Enable B Group"),t.createElement("button",{onClick:function(){return D.watchObjects.enableGroup("b",!1)}},"Disable B Group"))}});case 15:case"end":return x.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-objects-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,watch } from "@speedform/reactive" 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var F=L()(o()().mark(function O(){var I,c=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}}}},33354:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(3466),G={}},6732:function(V,i,e){e.r(i),e.d(i,{demos:function(){return W}});var B=e(29008),o=e.n(B),G=e(28633),$=e.n(G),K=e(70958),L=e.n(K),t=e(92379),U=e(77044),W={"docs-reactive-watch-demo-0":{component:t.memo(t.lazy(L()(o()().mark(function F(){var l,O,I,c,b;return o()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=R.sent,O=l.createStore,I=l.watch,c={orders:[{bookName:"SpeedForm Quick-Start",price:100,count:1,total:function(D){return D.price*D.count}},{bookName:"Helux",price:98,count:1,total:function(D){return D.price*D.count}}],total:I(function(s){return b.state.orders.reduce(function(D,g){return D+g.count*g.price},0)},function(s){return s[s.length-1]==="count"},{initial:198})},b=O({state:c},{singleton:!1}),R.abrupt("return",{default:function(){var D=b.useState(),g=$()(D,1),x=g[0];return t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"BookName"),t.createElement("th",null,"Price"),t.createElement("th",null,"Count"),t.createElement("th",null,"Total"))),t.createElement("tbody",null,x.orders.map(function(C,N){return t.createElement("tr",{key:N},t.createElement("td",null,C.bookName),t.createElement("td",null,C.price),t.createElement("td",null,t.createElement("input",{value:C.count,onChange:b.sync(function(_){return _.orders[N].count})})),t.createElement("td",null,C.total))}),t.createElement("tr",null,t.createElement("td",{colSpan:3},"Total"),t.createElement("td",null,x.total))))}});case 8:case"end":return R.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,watch } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var F=L()(o()().mark(function O(){var I,c=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}},"docs-reactive-watch-demo-1":{component:t.memo(t.lazy(L()(o()().mark(function F(){var l,O,I,c,b,n,R,s,D;return o()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=x.sent,O=l.createStore,I=l.computed,c=l.ComputedScopeRef,x.next=8,Promise.resolve().then(e.t.bind(e,92379,19));case 8:return b=x.sent,n=b.useEffect,R=b.useState,s={user:{firstName:"zhang",lastName:"fisher",fullName:I(function(){var C=L()(o()().mark(function N(_){var r,f,v;return o()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return r=$()(_,2),f=r[0],v=r[1],S.abrupt("return",f+v);case 2:case"end":return S.stop()}},N)}));return function(N){return C.apply(this,arguments)}}(),["user/firstName","user/lastName"],{scope:c.Depends})}},D=O({state:s}),x.abrupt("return",{default:function(){var N=D.useState(),_=$()(N,1),r=_[0],f=R(""),v=$()(f,2),E=v[0],S=v[1];return n(function(){var A=D.watch(function(j){S(j.map(function(z){return z.join("/")}).join(","))},["user/firstName","user/lastName"]);return A},[]),t.createElement("div",null,t.createElement("div",null,"watch: ",E),t.createElement("div",null,"firstName=",t.createElement("input",{value:r.user.firstName,onChange:D.sync(function(A){return A.user.firstName})})),t.createElement("div",null,"lastName=",t.createElement("input",{value:r.user.lastName,onChange:D.sync(function(A){return A.user.lastName})})),t.createElement("div",null,"fullName=",r.user.fullName.result))}});case 14:case"end":return x.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef } from "@speedform/reactive" 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),react:e(92379)},renderOpts:{compile:function(){var F=L()(o()().mark(function O(){var I,c=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}},"docs-reactive-watch-demo-2":{component:t.memo(t.lazy(L()(o()().mark(function F(){var l,O,I,c,b,n,R,s;return o()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return l=g.sent,O=l.createStore,I=l.computed,c=l.ComputedScopeRef,g.next=8,Promise.resolve().then(e.t.bind(e,92379,19));case 8:return b=g.sent,n=b.useState,R={user:{firstName:"zhang",lastName:"fisher",fullName:I(function(){var x=L()(o()().mark(function C(N){var _,r,f;return o()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return _=$()(N,2),r=_[0],f=_[1],E.abrupt("return",r+f);case 2:case"end":return E.stop()}},C)}));return function(C){return x.apply(this,arguments)}}(),["user/firstName","user/lastName"],{scope:c.Depends})}},s=O({state:R}),g.abrupt("return",{default:function(){var C=s.useState(),N=$()(C,1),_=N[0],r=n(""),f=$()(r,2),v=f[0],E=f[1],S=n("user/firstName"),A=$()(S,2),j=A[0],z=A[1],J=n(""),Q=$()(J,2),te=Q[0],re=Q[1];return s.useWatch(function(ae,oe){return E(oe.join("/")),re(ae),ae},j,{id:"use1"}),t.createElement("div",null,t.createElement("div",null,"watch for: ",j),t.createElement("div",null,"Watch value:",te),t.createElement("div",null,"firstName=",t.createElement("input",{value:_.user.firstName,onChange:s.sync(function(ae){return ae.user.firstName})})),t.createElement("div",null,"lastName=",t.createElement("input",{value:_.user.lastName,onChange:s.sync(function(ae){return ae.user.lastName})})),t.createElement("div",null,"fullName=",_.user.fullName.result),t.createElement("button",{onClick:function(){return z("user/firstName")}},"watch firstName"),t.createElement("button",{onClick:function(){return z("user/lastName")}},"watch lastName"))}});case 13:case"end":return g.stop()}},F)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef } from "@speedform/reactive" 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),react:e(92379)},renderOpts:{compile:function(){var F=L()(o()().mark(function O(){var I,c=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(408).then(e.bind(e,28408));case 2:return n.abrupt("return",(I=n.sent).default.apply(I,c));case 3:case"end":return n.stop()}},O)}));function l(){return F.apply(this,arguments)}return l}()}}}},24394:function(V,i,e){e.r(i),e.d(i,{demos:function(){return G}});var B=e(92379),o=e(25773),G={}},21970:function(V,i,e){e.r(i),e.d(i,{api:function(){return B},delay:function(){return W},forms:function(){return o}});var B={};e.r(B),e.d(B,{getProjects:function(){return t}});var o={};e.r(o),e.d(o,{Network:function(){return b},schema:function(){return c}});var G=e(29008),$=e.n(G),K=e(70958),L=e.n(K);function t(n){return U.apply(this,arguments)}function U(){return U=L()($()().mark(function n(R){var s,D,g;return $()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,fetch(R);case 2:if(s=C.sent,!s.ok){C.next=11;break}return C.next=6,s.json();case 6:return D=C.sent,g=D.map(function(N){return{name:N.name,url:N.html_url,description:N.description,stars:N.stargazers_count}}),C.abrupt("return",g);case 11:throw new Error("".concat(s.status," - ").concat(s.statusText));case 12:case"end":return C.stop()}},n)})),U.apply(this,arguments)}var W=function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(s){setTimeout(s,R)})},F=e(1808),l=e(6244),O=e(99166),I=e.n(O),c={title:"\u7F51\u7EDC\u914D\u7F6E",fields:{title:{value:"React-Helux-Form",placeholder:"\u8F93\u5165\u7F51\u7EDC\u914D\u7F6E\u540D\u79F0",title:"\u7F51\u7EDC\u540D\u79F0",validate:function(R){return R.length>3}},interface:{value:"wifi",title:"\u7F51\u5361\u7C7B\u578B",select:function(){return[{value:"wifi",title:"\u65E0\u7EBF\u7F51\u5361"},{value:"ethernet",title:"\u6709\u7EBF\u7F51\u5361"}]}},ip:{value:"1.1.1.1",title:"IP\u5730\u5740",validate:(0,F.computed)(function(){var n=L()($()().mark(function R(s){return $()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,W(2e3);case 2:return g.abrupt("return",I().isIP(String(s)));case 3:case"end":return g.stop()}},R)}));return function(R){return n.apply(this,arguments)}}(),[],{async:!0})},gateway:{value:"1.1.1.1",title:"\u7F51\u5173\u5730\u5740",validate:function(R){return I().isIP(R)}},dhcp:{enable:{title:"\u81EA\u52A8\u83B7\u53D6IP\u5730\u5740",value:!0},start:{title:"\u8D77\u59CB\u5730\u5740",value:"192.168.1.1",enable:(0,F.computed)(function(n){return n.enable.value},{scope:F.ComputedScopeRef.Parent}),validate:function(R){return I().isIP(R)}},end:{title:"\u7ED3\u675F\u5730\u5740",value:"192.168.1.100",enable:(0,F.computed)(function(n){return n.dhcp.enable.value},{scope:F.ComputedScopeRef.Root}),validate:function(R){return I().isIP(R)}}},wifi:{title:"\u65E0\u7EBF\u914D\u7F6E",visible:(0,F.computed)(function(n){return n.interface.value==="wifi"},{scope:F.ComputedScopeRef.Root}),ssid:{value:"fast",placeholder:"\u65E0\u7EBF\u7F51\u7EDC",validate:function(R){return R.length>3}},password:{value:"123",placeholder:"\u8F93\u5165\u65E0\u7EBF\u5BC6\u7801",help:"\u5BC6\u7801\u957F\u5EA6\u5E94\u4E0D\u5C0F\u4E8E6\u4F4D",enable:function(R){return R.interface.value==="wifi"},validate:function(R){return R.length>=6}}}}},b=(0,l.createForm)(c,{debug:!0});globalThis.Network=b},48398:function(V,i,e){e.r(i),e.d(i,{Block:function(){return D},Box:function(){return G},Button:function(){return L},Card:function(){return t},Col:function(){return g},ColorBlock:function(){return s},Divider:function(){return b},Field:function(){return c},Input:function(){return C},JsonViewer:function(){return O},Loading:function(){return K},Row:function(){return x},Tips:function(){return N},ValidResult:function(){return I}});var B=e(92379),o=e(651),G=function(r){var f=r.title,v=r.enable,E=v===void 0?!0:v,S=r.visible,A=S===void 0?!0:S;return(0,o.jsxs)("div",{style:{display:A?"flex":"none",position:"relative",flexDirection:"column",padding:"8px",margin:"16px 4px 4px 4px",boxSizing:"border-box",border:"1px solid #bbb"},children:[(0,o.jsx)("span",{style:{position:"absolute",padding:"2px 4px 2px 4px",top:"-16px",background:"white",left:"8px",color:E?"#bbb":"gray"},children:f||""}),r.children]})},$=e(11363),K=function(r){var f=r.size,v=f===void 0?20:f,E=r.visible,S=E===void 0?!0:E,A=r.color,j=r.tips,z=j===void 0?"loading...":j;return(0,o.jsx)("span",{title:z,style:{display:S?"inline-block":"none",cursor:"pointer",padding:"2px"},children:(0,o.jsx)($.Z1,{width:v,height:v,color:A})})},L=function(r){var f=r.visible,v=f===void 0?!0:f,E=r.loading,S=r.timeout,A=S===void 0?0:S,j=r.progress,z=j===void 0?0:j,J=r.cancel,Q=r.onClick,te=(0,B.useRef)(null);return(0,B.useEffect)(function(){te.current&&(te.current.style.display=v?"flex":"none")}),(0,o.jsxs)("div",{ref:te,className:"speed-button",onClick:Q,style:{padding:"8px",margin:"4px",cursor:"pointer",display:v?"flex":"none",flexDirection:"row",borderRadius:"6px",alignItems:"center",border:"1px solid #bbb",background:"#eee",textAlign:"center"},children:[E?(0,o.jsx)(K,{}):null,(0,o.jsx)("div",{style:{flexGrow:1,backgroundColor:"transparent"},children:r.children}),A>0?(0,o.jsx)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:A}):"",z>0?(0,o.jsxs)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:[z,"%"]}):"",r.error?(0,o.jsx)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:r.error}):"",r.loading&&typeof J=="function"?(0,o.jsx)("button",{onClick:J,style:{padding:"4px",color:"red",margin:"2px",fontSize:"10px",backgroundColor:"#eee",borderRadius:"4px",cursor:"pointer"},children:" \u5355\u51FB\u53D6\u6D88"}):""]})},t=function(r){var f=r.title,v=r.enable,E=v===void 0?!0:v,S=r.visible,A=S===void 0?!0:S,j=r.buttons,z=j===void 0?[]:j,J=Array.isArray(r.children)?r.children:[r.children];return(0,o.jsxs)("div",{className:"card",style:{border:"1px solid #ccc",background:E?"white":"gray",margin:"8px",display:A?"flex":"none",flexDirection:"column"},children:[(0,o.jsxs)("div",{className:"header",style:{display:"flex",flexDirection:"row",backgroundColor:"#eee",padding:"6px",lineHeight:"150%"},children:[(0,o.jsx)("span",{style:{flexGrow:1,color:E?"#222":"gray"},children:f}),(0,o.jsx)("span",{style:{},children:z.map(function(Q,te){return(0,o.jsx)("span",{className:"button",style:{padding:"4px",margin:"4px",cursor:"pointer"},onClick:Q.onClick,children:Q.title},te)})})]}),(0,o.jsx)("div",{style:{padding:"12px"},children:J.map(function(Q,te){return J.length>1&&te==J.length-1&&Q.classList&&Q.classList.contains("footer")?(0,o.jsx)("div",{className:"footer",style:{borderTop:"1px solid #ccc",padding:"8px"},children:Q}):Q})})]})},U=e(24325),W=e.n(U),F=e(21966),l={scheme:"monokai",author:"wimer hazenberg (http://www.monokai.nl)",base00:"white",base01:"#383830",base02:"#49483e",base03:"#75715e",base04:"#a59f85",base05:"#f8f8f2",base06:"#f5f4f1",base07:"#f9f8f5",base08:"#f92672",base09:"#fd971f",base0A:"#f4bf75",base0B:"#444444",base0C:"#a1efe4",base0D:"#018ba7",base0E:"#81a9ff",base0F:"#cc6633"},O=function(r){return(0,o.jsx)(F.L,W()(W()({getItemString:function(){return""},hideRoot:!0,shouldExpandNodeInitially:function(){return!0}},r),{},{theme:l}))},I=function(r){var f=r.validate,v=r.help;if(f!=null){var E=typeof f!="boolean",S=E?f==null?void 0:f.result:f,A=E?f==null?void 0:f.loading:!1,j=E?f==null?void 0:f.error:v;return(0,o.jsxs)("span",{style:{color:"red",display:A||!S?"flex":"none"},children:[(0,o.jsx)(K,{visible:A,tips:"\u6B63\u5728\u9A8C\u8BC1..."}),!A&&(S?"":j)]})}},c=function(r){var f=r.enable,v=f===void 0?!0:f,E=r.visible,S=E===void 0?!0:E,A=r.label,j=A===void 0?"":A,z=r.children,J=z===void 0?"":z,Q=r.memo;return(0,o.jsxs)("div",{className:"field",style:{position:"relative",display:S===!1?"none":"flex",boxSizing:"border-box",flexDirection:"row",width:"100%",alignItems:"center",padding:"8px"},children:[(0,o.jsxs)("label",{className:"field-label",style:{minWidth:"160px",fontWeight:"bold",color:v===!1?"gray":"inherit"},children:[j,":"]}),(0,o.jsxs)("span",{className:"field-value",style:{flexGrow:1,display:"flex",flexDirection:"row",alignItems:"center",color:v===!1?"gray":"inherit"},children:[typeof J=="function"?"":J,Q&&(0,o.jsx)("span",{style:{color:"gray"},children:Q})]}),(0,o.jsx)(I,W()({},r))]})},b=function(r){var f=r.title,v=r.visible,E=v===void 0?!0:v;return(0,o.jsx)("div",{style:{height:"36px",borderBottom:"1px solid #eee",marginBottom:"16px",display:E?"flex":"none"},children:(0,o.jsx)("h4",{style:{position:"absolute",background:"white",padding:"4px",color:"#bbb"},children:f})})},n=e(47851);function R(){var _="".concat(Math.floor(Math.random()*16777215).toString(16));return"#".concat(_.padStart(6,"0"))}var s=B.memo(function(_){var r=(0,B.useRef)(0),f=_.name,v=_.value,E=v===void 0?"":v,S=R(),A="block";return n.rgb(S).isDark()?A="white":A="block",(0,B.useEffect)(function(){r.current++}),(0,o.jsxs)("div",W()(W()({},_),{},{style:W()(W()({backgroundColor:S,padding:"4px",color:A,display:"flex"},_.style),{},{alignItems:"center"}),children:[(0,o.jsxs)("span",{style:{flexGrow:1},children:[f?(0,o.jsxs)("span",{style:{padding:"2px"},children:[f,"="]}):"",(0,o.jsxs)("span",{style:{padding:"2px"},children:[String(E),_.children]})]}),(0,o.jsx)("span",{style:{fontSize:"8px"},children:r.current})]}))},function(_,r){return _.name===r.name&&_.value===r.value}),D=function(r){var f=(0,B.useRef)(0),v=r.name,E=r.value,S=E===void 0?"":E,A=R(),j="block";return n.rgb(A).isDark()?j="white":j="block",(0,B.useEffect)(function(){f.current++}),(0,o.jsxs)("div",W()(W()({},r),{},{style:W()(W()({backgroundColor:A,padding:"4px",color:j,display:"flex"},r.style),{},{alignItems:"center"}),children:[(0,o.jsxs)("span",{style:{flexGrow:1},children:[v?(0,o.jsxs)("span",{style:{padding:"2px"},children:[v,"="]}):"",(0,o.jsxs)("span",{style:{padding:"2px"},children:[String(S),r.children]})]}),(0,o.jsx)("span",{style:{fontSize:"8px"},children:f.current})]}))},g=function(r){var f=r.visible,v=f===void 0?!0:f,E=r.border,S=E===void 0?!0:E,A=r.padding,j=A===void 0?"8px":A,z=r.margin,J=z===void 0?"0px":z,Q=r.grow,te=Q===void 0?1:Q;return(0,o.jsx)("div",{className:"layout-col",style:{display:v?"flex":"none",position:"relative",flexDirection:"column",padding:j,flexGrow:te,margin:J,boxSizing:"border-box",border:S?"1px solid #eee":"none"},children:r.children})},x=function(r){var f=r.visible,v=f===void 0?!0:f,E=r.border,S=E===void 0?!0:E,A=r.padding,j=A===void 0?"8px":A,z=r.grow,J=z===void 0?1:z;return(0,o.jsx)("div",{className:"layout-row",style:{display:v?"flex":"none",position:"relative",flexDirection:"row",flexGrow:J,padding:j,margin:"4px",boxSizing:"border-box",border:S?"1px solid #eee":"none"},children:r.children})},C=function(r){var f=r.name,v=r.enable,E=v===void 0?!0:v,S=r.type,A=S===void 0?"text":S,j=r.validate,z=j===void 0?!0:j,J=r.visible,Q=J===void 0?!0:J,te=r.placeholder,re=r.onChange,ae=re===void 0?function(){}:re,oe=r.value,ce=r.style;return(0,o.jsx)("input",{style:Object.assign({border:z===!1?"1px solid red":"1px solid #bbb",borderRadius:"4px",background:E?"white":"gray",margin:"4px",padding:"8px",display:Q?"block":"none"},ce),type:A,name:f,placeholder:te,value:oe!=null?oe:"",readOnly:!E,onChange:ae})},N=function(r){var f=r.text,v=r.color,E=v===void 0?"#ff6c00":v,S=typeof E=="string"?{default:E}:Object.assign({default:""},E),A=f.replace(/\{\s?(.*?)\s?\}/gm,function(j,z){return"<span style='color: ".concat(z in S?S[z]:S.default,"'>").concat(z,"</span>")}).replaceAll("undefined","\u7A7A\u503C");return(0,o.jsx)("div",{style:{backgroundColor:"#fffcda",borderLeft:"2px solid rgb(253, 138, 6)",boxSizing:"border-box",padding:"8px",margin:"4px"},children:(0,o.jsx)("span",{dangerouslySetInnerHTML:{__html:A}})})}},6244:function(V,i,e){e.r(i),e.d(i,{$:function(){return r.$},ActionChildren:function(){return Ie},ComputedObjects:function(){return r.ComputedObjects},ComputedScopeRef:function(){return r.ComputedScopeRef},FieldChildren:function(){return A},OBJECT_PATH_DELIMITER:function(){return r.OBJECT_PATH_DELIMITER},SKIP_COMPUTED:function(){return r.SKIP_COMPUTED},ValidationError:function(){return Me},WatchObject:function(){return r.WatchObject},WatchObjects:function(){return r.WatchObjects},action:function(){return ye},asyncComputedObject:function(){return r.asyncComputedObject},computed:function(){return r.computed},createActionComponent:function(){return Ne},createAsyncComputedMutate:function(){return r.createAsyncComputedMutate},createComputedMutate:function(){return r.createComputedMutate},createFieldComponent:function(){return j},createFieldGroupComponent:function(){return te},createForm:function(){return Ye},createObject:function(){return r.createObject},createStore:function(){return r.createStore},createUseAction:function(){return Ge},createUseWatch:function(){return r.createUseWatch},createWatch:function(){return r.createWatch},defaultFormProps:function(){return Te},getAction:function(){return pe},getSnap:function(){return r.getSnap},getVal:function(){return r.getVal},getValueByPath:function(){return r.getValueByPath},installComputed:function(){return r.installComputed},installWatch:function(){return r.installWatch},isIncludePath:function(){return r.isIncludePath},isSkipComputed:function(){return r.isSkipComputed},markRaw:function(){return r.markRaw},setAsyncComputedObject:function(){return r.setAsyncComputedObject},setVal:function(){return r.setVal},skipComputed:function(){return r.skipComputed},submit:function(){return _e},useLatest:function(){return p},useStore:function(){return r.useStore},useUnmount:function(){return m},useUnmountedRef:function(){return h},watch:function(){return r.watch}});var B=e(12027),o=e.n(B),G=e(28633),$=e.n(G),K=e(24325),L=e.n(K),t=e(92379),U=e(34180),W=e.n(U),F=e(59166);function l(a){var d=_typeof(a);return a==null||d=="boolean"||d=="number"||d=="string"||d==null}function O(a){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,u=0,y,P=!0,M=function w(){if(y==null){P=!0,clearTimeout(u),u=0;return}try{var T=y;y=void 0,a.apply(void 0,o()(T)),u=setTimeout(function(){return w()},d)}finally{}};return function(){for(var w=arguments.length,T=new Array(w),k=0;k<w;k++)T[k]=arguments[k];if(d==0)return a.apply(void 0,T);y=T,(P||u==0)&&(P=!1,M())}}function I(a,d){var u={};for(var y in a)a[y]!==d[y]&&(u[y]=d[y]);return u}function c(){return Math.random().toString(36).substring(2)}function b(a){return new Proxy({},{get:function(u,y,P){return a()[y]}})}function n(a){return(0,F.P)(a)&&"execute"in a&&(0,F.P)(a.execute)&&"loading"in a.execute}function R(a){return(0,F.P)(a)&&"value"in a}function s(a){return Array.isArray(a)}function D(a){return(0,F.P)(a)&&!R(a)&&!n(a)}function g(){return!1}var x="fields",C="actions",N="validate",_="$submit",r=e(1808),f=e(651);function v(a,d,u,y){return Object.assign({name:a,help:"",initial:void 0,oldValue:void 0,visible:!0,required:!1,readonly:!1,validate:null,enable:!0,placeholder:""},L()(L()({},d),{},{sync:u,update:y}))}function E(a,d){var u=(0,t.useRef)(null);return(0,t.useCallback)(function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;if(u.current==null){var P=a.sync(d);u.current=y==0?P:O(P,y)}return u.current},[])}function S(a,d){var u=(0,t.useRef)(null),y=(0,t.useState)(0),P=$()(y,2),M=P[0],w=P[1];return(0,t.useCallback)(function(T,k){var Z=Object.assign({debounce:0},k),H=Z.debounce;if(u.current==null||M!==H){M!==H&&H>0&&w(H);var Y=function(q){return function(ne){d(typeof q=="function"?function(ee){return q.call(ee,ee.fields)}:function(ee){return(0,r.setVal)(ee,a,q)}),typeof ne.preventDefault=="function"&&ne.preventDefault()}};u.current=H>0?Y:O(Y,H)}return u.current(T)},[])}var A=t.memo(function(a){return(0,f.jsx)(f.Fragment,{children:typeof a.children=="function"&&a.children(a.fieldProps)})},function(a,d){return Object.entries(a.fieldProps).every(function(u){var y=$()(u,2),P=y[0],M=y[1];return["children","sync","update"].includes(P)?!0:M===d.fieldProps[P]})});function j(a,d){return t.memo(function(u){var y=u.name,P=Array.isArray(y)?y:y.split("."),M=[x].concat(o()(P)),w=[x].concat(o()(P));P.push("value"),w.push("value");var T=a.useState(function(ne){return(0,r.getVal)(ne,M)}),k=$()(T,2),Z=k[0],H=k[1],Y=S(w,H),X=E(a,w),q=v(d.getFieldName(P),Z,X,Y);return u.render?(0,f.jsx)(A,{fieldProps:q,children:u.render}):Array.isArray(u.children)?u.children.map(function(ne,ee){return(0,f.jsx)(A,{fieldProps:q,children:ne},ee)}):(0,f.jsx)(A,{fieldProps:q,children:u.children})},function(u,y){return u.name===y.name})}var z=e(58048);function J(a,d){return(0,t.useCallback)(function(u){d(function(y){u.call(y,(0,r.getVal)(y,a))})},[])}function Q(a,d,u){return(0,z.w)({name:a,help:"",visible:!0,required:!1,readonly:!1,validate:!0,enable:!0,update:u},d)}function te(a,d){return t.memo(function(u){var y=u.name,P=a.useState(),M=$()(P,2),w=M[0],T=M[1],k=Array.isArray(y)?y:y.split("."),Z=["fields"].concat(o()(k)),H=(0,r.getVal)(w,Z),Y=J(Z,T),X=(0,t.useState)(function(){return Q(d.getFieldName(k),H,Y)}),q=$()(X,2),ne=q[0],ee=q[1];return(0,t.useEffect)(function(){ee(Q(d.getFieldName(k),H,Y))},[H]),Array.isArray(u.children)?u.children.map(function(Se){return Se(ne)}):u.children(ne)},function(u,y){return u.name===y.name})}var re=e(29008),ae=e.n(re),oe=e(70958),ce=e.n(oe),le=e(6597);function We(a){return a.value}function ie(a){var d={};return Object.entries(a).forEach(function(u){var y=$()(u,2),P=y[0],M=y[1];if(typeof P=="string")if(R(M))d[P]=We(M);else if(D(M)){var w=ie(M);w&&Object.keys(w).length>0&&(d[P]=w)}else s(M)&&(d[P]=Ke(M))}),d}function Ke(a){var d=[];return a.forEach(function(u){R(u)?d.push(We(u)):D(u)?d.push(ie(u)):s(u)?d.push(Ke(u)):d.push(u)}),d}function ve(a,d,u){var y=Object.assign({},u),P=y.onNotMatch,M=P===void 0?function(){}:P;function w(T,k){var Z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];Object.entries(T).forEach(function(H){var Y=$()(H,2),X=Y[0],q=Y[1];if(typeof X=="string"){var ne=[].concat(o()(Z),[X]);if(X in k){var ee=k[X];R(ee)?ee.value=q:D(ee)?(0,F.P)(q)?w(q,ee,ne):M(ne):s(ee)?Array.isArray(q)?w(q,ee):M(ne):k[X]=q}else M(ne)}})}w(a,d)}function se(a,d){var u=new FormData,y=Object.assign({getItemName:function(T){return T.join(".")}},d),P=y.getItemName;function M(w,T){if(T!=null){var k=P?P(w):w.join(".");Array.isArray(T)?T.forEach(function(Z,H){M([].concat(_toConsumableArray(w),[String(H)]),Z)}):isPlainObject(T)?Object.entries(T).forEach(function(Z){var H=_slicedToArray(Z,2),Y=H[0],X=H[1];M([].concat(_toConsumableArray(w),[Y]),X)}):u.append(k,T)}}return M([],a),u}function et(a,d){return function(y,P){var M=Object.assign({validate:!0},P);try{a.enableComputed(!1),ve(y,a.state.fields),a.setState(function(w){w.dirty=!1,w.validate=null})}catch(w){console.error(w)}finally{a.enableComputed(!0),M!=null&&M.validate&&a.computedObjects.runGroup(N)}}}function Ue(a,d){return ie(a)}function tt(a,d){return function(y){var P=Object.assign({},y);return Ue((0,r.getSnap)(a.state).fields)}}function pe(a,d){return function(){var u=ce()(ae()().mark(function y(P){var M;return ae()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return M=Object.assign({},d,P),Array.isArray(M.scope)&&M.scope.length>0&&M.scope[0]!==x&&M.scope.unshift(x),T.next=4,a.execute.run(M);case 4:if(!a.execute.error){T.next=8;break}throw new Error(a.execute.error);case 8:return T.abrupt("return",a.execute.result);case 9:case"end":return T.stop()}},y)}));return function(y){return u.apply(this,arguments)}}()}function at(a,d){return(0,t.useCallback)(function(u){var y=Object.assign({},{noReentry:!0,preventDefault:!0},d,u),P=pe(a,y);return function(M){P(),M&&y.preventDefault&&typeof M.preventDefault=="function"&&M.preventDefault()}},[a])}function Pe(a,d){return(0,t.useCallback)(function(u){var y=(0,r.getValueByPath)(a,[].concat(o()(Array.isArray(d)?d:d.split(".")),["execute"]));y.cancel(),u&&typeof u.preventDefault=="function"&&u.preventDefault()},[])}function nt(a,d,u,y){return Object.assign({help:"",title:"",visible:!0,enable:!0},(0,le.C)(a,"execute"),L()(L()({},a.execute),{},{run:d,cancel:u,ref:y}))}var Ie=t.memo(function(a){return(0,f.jsx)(f.Fragment,{children:typeof a.children=="function"&&a.children(a.actionProps)})},function(a,d){return Object.entries(a.actionProps).every(function(u){var y=$()(u,2),P=y[0],M=y[1];return["children","run","cancel"].includes(P)?!0:M===d.actionProps[P]})});function Ne(a){function d(u){var y=a.useState(),P=$()(y,1),M=P[0],w=u.name;w.includes(".")||(w="actions.".concat(w));var T=(0,r.getValueByPath)(M,w,"."),k=at(T,u),Z=Pe(M,w),H=(0,t.useRef)(null),Y=nt(T,k,Z,H);if(typeof u.render=="function")return(0,f.jsx)(Ie,{actionProps:Y,children:u.render});if(u.children)return Array.isArray(u.children)?u.children.map(function(X,q){return(0,f.jsx)(Ie,{actionProps:Y,children:X},q)}):(0,f.jsx)(Ie,{actionProps:Y,children:u.children})}return t.memo(d,function(u,y){return u.name===y.name})}function ye(a,d){return(0,r.computed)(function(){var u=ce()(ae()().mark(function y(P,M){var w;return ae()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return w=Ue(Object.assign({},P)),k.next=3,a(w,M);case 3:return k.abrupt("return",k.sent);case 4:case"end":return k.stop()}},y)}));return function(y,P){return u.apply(this,arguments)}}(),[],d)}function _e(a,d){return ye(function(){var u=ce()(ae()().mark(function y(P,M){var w;return ae()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return w=new FormData,k.next=3,a(w,M);case 3:return k.abrupt("return",k.sent);case 4:case"end":return k.stop()}},y)}));return function(y,P){return u.apply(this,arguments)}}(),d)}function Ge(a){return function(u,y){var P=(0,t.useRef)(),M=a.useState(),w=$()(M,2),T=w[0],k=w[1],Z=(0,t.useState)(function(){return y!=null&&y.name?y==null?void 0:y.name:c()}),H=$()(Z,1),Y=H[0];return P.current||(Y in T.actions||k(function(X){X.actions[Y]={execute:ye(u,y)}}),P.current=Y),(0,r.getValueByPath)(T,["actions",Y]).execute}}var Ae=e(20842),rt=e(14582),ge=e.n(rt),ot=e(6270),dt=e.n(ot),ut=e(93949),lt=e.n(ut),st=e(77701),Re=e.n(st),ct=e(28249),De=e.n(ct),it=e(5672),Ve=e.n(it),Me=function(a){Re()(u,a);var d=De()(u);function u(y){var P;return lt()(this,u),P=d.call(this,y),P.name="ValidationError",P}return dt()(u)}(Ve()(Error));function be(a){return a.length>1&&a[0]==x&&(a[a.length-1]==="validate"||a.length>=2&&a[a.length-2]=="validate"&&a[a.length-1]=="result")&&!(a.length==2&&a[1]=="validate")&&!(a.length==3&&a[1]=="validate"&&a[2]=="result")}function pt(a){var d=Object.assign({},a),u=d.entry;return(0,r.watch)(function(y,P,M){if((0,r.isIncludePath)(u||M.path,y)){if(typeof P=="boolean"){var w=y.join(r.OBJECT_PATH_DELIMITER);P?delete M.cache[w]:M.cache[w]=P}return Object.keys(M.cache).length==0}},function(y){return be(y)},{initial:!0})}function mt(a,d){var u=typeof a=="function"?a():a;if(!u)throw new ValidationError(typeof d=="function"?d():d)}function vt(a){return function(){var d=ce()(ae()().mark(function u(y){var P,M,w,T,k,Z;return ae()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:if(Array.isArray(y)&&y.length>0){P=y.join(r.OBJECT_PATH_DELIMITER),M=ge()(a.computedObjects);try{for(M.s();!(w=M.n()).done;)T=$()(w.value,2),k=T[0],Z=T[1],k.startsWith(P)&&Z.run()}catch(X){M.e(X)}finally{M.f()}}else a.computedObjects.runGroup(N);case 1:case"end":return Y.stop()}},u)}));return function(u){return d.apply(this,arguments)}}()}var ze=e(92980);function Ze(a){var d={};return Object.entries(a||{}).forEach(function(u){var y=_slicedToArray(u,2),P=y[0],M=y[1];isFieldValue(M)||isFieldGroup(M)||isFieldList(M)||(d[P]=M)}),d}function He(a){return Object.assign({type:"submit",help:"",title:"",dirty:!1,validate:!0,visible:!0,enable:!0,readOnly:!0},Ze(a))}var je=null,Fe=(0,ze.zo)(function(a,d){var u,y=d.className;return(0,f.jsx)("input",{className:y+" "+a.className,style:a.style,type:(u=a.type)!==null&&u!==void 0?u:"submit",value:a.title})},{cursor:"pointer",width:"100%",display:"block",boxSizing:"border-box",padding:"8px",borderRadius:"8px",transition:"filter 0.3s","&:hover":{filter:"brightness(1.2)"},"&.speedform-submit":{backgroundColor:"#54b2ff",color:"white",border:"1px solid #1e5786"}});function It(a,d,u){var y=Object.assign({preventDefault:!1},d);function P(M){var w=a.useState(),T=_slicedToArray(w,1),k=T[0],Z=M.scope,H=getValueByPath(k,Z),Y=He(H),X=typeof M.render=="function"?1:Array.isArray(M.children)?2:typeof M.children=="function"?3:0;return _jsxs(_Fragment,{children:[_jsx(Fe,_objectSpread({visible:X==0},y)),X===1?_jsx(je,{submitProps:Y,children:M.render}):X===2?M.children.map(function(q,ne){return _jsx(je,{submitProps:Y,children:q},ne)}):_jsx(je,{submitProps:Y,children:M.children})]})}return React.memo(P,function(M,w){return M.scope===w.scope})}function $e(a){var d=Ne(a);return function(u){return(0,f.jsx)(d,L()(L()({},u),{},{name:_,children:function(P){var M=P.title,w=P.visible,T=P.loading,k=P.enable,Z=P.run,H=P.cancel,Y=P.error,X=P.progress;return(0,f.jsxs)("div",{className:"speedform-submit",children:["\u63D0\u4EA4",(0,f.jsx)("input",{type:"submit"}),(0,f.jsx)("span",{children:T?"\u63D0\u4EA4\u4E2D":"\u5DF2\u63D0\u4EA4"})]})}}))}}function Je(a,d){var u=Ne(a);return function(y){return(0,f.jsx)(u,{name:"ffff",children:function(M){return(0,f.jsx)("input",{type:"submit",value:y.title})}})}}function we(a){return a.length>1&&a[0]==x&&a[a.length-1]=="value"}function Qe(a){return(0,r.watch)(function(d,u,y){if((0,r.isIncludePath)(a||y.path,d)&&!y.value)return!0},function(d){return we(d)},{initial:!1})}var Te={name:"SpeedForm",title:"SpeedForm",help:"",tips:"",status:"idle",dirty:Qe(["fields"]),validate:pt({entry:["fields"]}),readonly:!1,enable:!0,visible:!0,fields:{},actions:{}};function ft(a,d){a.length>=2&&a[0]==x&&a[a.length-1]==N&&(d.scope||(d.scope="./value"),d.depends||(d.depends=[]),d.depends.push([].concat(o()(a.slice(0,-1)),["value"])),d.initial=null,d.group=N,d.enable=!0)}function ht(a){return(0,Ae.w)(a,Te)}function xt(a,d){a.length>1&&a[a.length-1]=="execute"&&(d.immediate=!1,d.scope?Array.isArray(d.scope)&&d.scope.length>0&&d.scope[0]!=x&&d.scope.unshift(x):d.scope=[x],d.noReentry=!0)}function yt(a,d){a.length>0&&a[0]==x&&d.depends&&d.depends.forEach(function(u,y){Array.isArray(u)&&u.length>0&&u[0]!=x?d.depends[y]=[x].concat(o()(u)):typeof u=="string"&&!u.startsWith("".concat(x,"."))&&(d.depends[y]="".concat(x,".").concat(u))})}function gt(a){return function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;a.enableComputed(d)}}function Ye(a,d){var u=(0,z.w)({getFieldName:function(w){return w.length>0?w[w.length-1]==="value"?w.slice(0,-1).join("."):w.join("."):""},validAt:"once"},d);ht(a);var y=(0,r.createStore)(a,{debug:u.debug,scope:function(){return[x]},onCreateComputed:function(w,T,k){ft(w,k),yt(w,k),xt(w,k)},onComputedDraft:function(w,T){var k=T.computedType,Z=T.valuePath;if(k==="Computed"&&Z.length>0&&Z[0]==x)return w.fields}});y.on("computed:created",function(M){be(M.path)&&(M.options.enable=u.validAt==="once")});var P=y;return{state:P.state,useState:P.useState,setState:P.setState,Form:bt(P,u),Field:j(P,u),Group:te(P,u),Action:Ne(P),Submit:$e(P),Reset:Je(P,u),useAction:Ge(P),fields:b(function(){return P.state.fields}),actions:b(function(){return P.state.actions}),getAction:pe,freeze:gt(y),load:et(P,u),getValues:tt(P,u),computedObjects:P.computedObjects,watchObjects:P.watchObjects,validate:vt(P)}}function bt(a,d){return t.forwardRef(function(u,y){var P=u.children,M=(0,t.useCallback)(function(T){d.validAt==="submit"&&a.computedObjects.runGroup(N)},[]),w=(0,t.useCallback)(function(T){},[]);return(0,f.jsx)("form",L()(L()({ref:y,className:"speedform"},u),{},{onSubmit:M,onReset:w,children:P}))})}function p(a){var d=(0,t.useRef)(a);return d.current=a,d}function m(a){g()&&typeof a!="function"&&console.error("useUnmount expected parameter is a function, got ".concat(W()(a)));var d=p(a);(0,t.useEffect)(function(){return function(){d.current()}},[])}function h(){var a=(0,t.useRef)(!1);return(0,t.useEffect)(function(){return a.current=!1,function(){a.current=!0}},[]),a}},1808:function(V,i,e){e.r(i),e.d(i,{$:function(){return se.$},ComputedObjects:function(){return Ze},ComputedScopeRef:function(){return B},OBJECT_PATH_DELIMITER:function(){return K},SKIP_COMPUTED:function(){return L},WatchObject:function(){return Qe},WatchObjects:function(){return Te},asyncComputedObject:function(){return Ne},computed:function(){return Me},createAsyncComputedMutate:function(){return Ie},createComputedMutate:function(){return oe},createObject:function(){return se.share},createStore:function(){return Ye},createUseWatch:function(){return Je},createWatch:function(){return Fe},getSnap:function(){return se.getSnap},getVal:function(){return I},getValueByPath:function(){return _},installComputed:function(){return _e},installWatch:function(){return $e},isIncludePath:function(){return g},isSkipComputed:function(){return t},markRaw:function(){return se.markRaw},setAsyncComputedObject:function(){return Ue},setVal:function(){return C},skipComputed:function(){return N},useStore:function(){return bt},watch:function(){return je}});var B=function(p){return p.Root="root",p.Current="current",p.Parent="parent",p.Depends="depends",p.Self="self",p}({});function o(p){return(p||["ROOT"]).map(function(m){return Array.isArray(m)?m.join("."):m}).join("_")}function G(p,m){var h="";return m.id?h=m.id:h=o(p),h}function $(p){return p instanceof Error?p:new Error(p)}var K=".",L=Symbol("SKIP_COMPUTED");function t(p){return p[L]===!0}var U=e(12027),W=e.n(U);function F(p,m,h){if(!Array.isArray(p))throw new Error("curPath must be an array");return m==="self"?p:m==="root"?[]:m==="parent"?p.slice(0,-2):m==="current"?p.slice(0,-1):typeof m=="string"?m.startsWith("./")?[].concat(W()(p.slice(0,-1)),W()(m.slice(2).split(K))):m.startsWith("../")?F(p.slice(0,-1),m.slice(3),!0):m.startsWith("/")?(m=m.replace(/^(\/)*/,""),m.split(K)):h?[].concat(W()(p.slice(0,-1)),W()(m.split(K))):W()(m.split(K)):Array.isArray(m)?m:p}function l(p,m){var h=p.get(m);if(h!==void 0)return h;var a=p.get(Number(m)||m);if(a!==void 0)return a}function O(p){return toString.call(p)==="[object Map]"}function I(p,m){if(m.length===0)return p;var h,a=p;return m.forEach(function(d){h=O(a)?l(a,d):a[d],a=h}),h}function c(p,m,h){return p.map(function(a){return I(m,F(h,a))})}function b(p){return(p||[]).map(function(m){return Array.isArray(m)?m:typeof m=="string"?["/","./","../"].some(function(h){return m.startsWith(h)})?m:m.includes(K)?m.split(K):m.split("."):[]})}var n=e(34180),R=e.n(n);function s(p){return _typeof(p)=="object"&&p.hasOwnProperty("__COMPUTED__")&&["async","sync"].includes(p.__COMPUTED__)&&p.hasOwnProperty("fn")&&typeof p.fn=="function"&&p.hasOwnProperty("options")&&_typeof(p.options)=="object"}function D(p){return _typeof(p)=="object"&&["result","loading","timeout","retry","run"].every(function(m){return p.hasOwnProperty(m)})}function g(p,m){return p.length>m.length?!1:p.every(function(h,a){return h===m[a]})}function x(p){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"log",h=typeof p=="function"?p():p instanceof Error?p.stack:p;try{var a;(a=console)[m].apply(a,["[@speedform/reactive] "].concat(W()(Array.isArray(h)?h:[h])))}catch(d){}}function C(p,m,h){var a=p,d=m.length-1;m.forEach(function(u,y){var P=O(a);if(y===d){P?a.set(u,h):a[u]=h;return}var M=P?l(a,u):a[u];a=M})}function N(p){return p[L]=!0,p}function _(p,m){var h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:K,a=[];try{return typeof m=="function"&&(m=m.call(p,p)),a=Array.isArray(m)?m:typeof m=="string"?m.split(h):[],a.length>0?I(p,a):p}catch(d){return p}}function r(p,m){function h(a,d){for(var u in a){var y=a[u];typeof m=="function"&&m({value:y,key:u,parent:a,path:d.concat(u)}),R()(y)==="object"&&h(y,d.concat(u))}}h(p,[])}function f(p,m,h){var a=m==null?h:m;if(typeof a=="function")try{a=a.call(p,p)}catch(d){}return a==null?h==null?B.Current:h:a}function v(p,m,h){var a=h.draft,d=h.dependValues,u=h.valuePath,y=h.computedType,P=a;if(typeof p.options.onComputedDraft=="function"){var M=p.options.onComputedDraft.call(a,a,{computedType:y,valuePath:u});M!==void 0&&(P=M)}var w=u.length>=1?u.slice(0,u.length-1):[],T=f(a,m.scope,p.options.scope&&p.options.scope(y));try{if(T===B.Current)return _(a,w);if(T===B.Parent)return _(a,u.slice(0,u.length-2));if(T===B.Root)return P;if(T===B.Depends)return Array.isArray(d)?d.map(function(H){return typeof H=="function"?H():H}):[];if(typeof T=="string")return _(a,F(u,T));if(Array.isArray(T))if(T.length>0&&T[0].startsWith("@")){var k=_(a,[].concat(W()(T[0].substring(1).split(K)),W()(T.slice(1))));return _(a,k)}else return _(a,T);else if(typeof T=="number"){var Z=T>u.length-2?u.length-T-1:0;return _(a,u.slice(0,Z))}else return a}catch(H){return a}}var E=e(93949),S=e.n(E),A=e(6270),j=e.n(A),z=e(29861),J=e.n(z),Q=function(){function p(m,h,a,d){S()(this,p),J()(this,"options",void 0),this.store=m,this.selfReactiveable=h,this.path=a,this.options=Object.assign({},d)}return j()(p,[{key:"id",get:function(){return this.options.id}},{key:"enable",get:function(){return this.options.enable},set:function(h){this.options.enable=h}},{key:"group",get:function(){return this.options.group}},{key:"async",get:function(){return this.options.async}},{key:"depends",get:function(){return this.options.depends}},{key:"value",get:function(){var h;return I(this.selfReactiveable?(h=this.selfReactiveable)===null||h===void 0?void 0:h.state:this.store.state,this.path)}},{key:"run",value:function(h){var a;return(a=this.store.reactiveable)===null||a===void 0?void 0:a.runComputed(this.id,h)}},{key:"cancel",value:function(){if(this.async)this.value.cancel();else throw new Error("cancel only works for async computed")}}]),p}();function te(p,m,h,a){var d=h.options.onCreateComputed;if(typeof d=="function"&&typeof m=="function"){var u=d.call(h,p,m,a);a.scope||(a.scope=B.Current),typeof u=="function"&&(m=u)}}function re(p,m,h){return Object.assign({loading:!1,timeout:0,retry:0,error:null,result:void 0,progress:0,run:p.reactiveable.markRaw(N(function(a){return p.reactiveable.runComputed(m,Object.assign({},a))})),cancel:p.reactiveable.markRaw(N(function(){console.log("cancel")}))},h)}function ae(p,m,h){var a=p.valuePath,d=p.id,u=p.desc,y=p.resultPath,P=p.getter,M=m.selfReactiveable;h.reactiveable.createComputed({onComputed:function(T){var k=T.draft,Z=T.values,H=T.options;if(!h.options.enableComputed||!m.enable&&(H==null?void 0:H.enable)!==!0){h.options.log("Sync computed <".concat(u,"> is disabled"),"warn");return}h.options.log("Run sync computed for : ".concat(u)),p.dependValues=Z;var Y=Object.assign({},m,H),X=k,q=v(h,Y,{draft:k,dependValues:Z,valuePath:a,computedType:"Computed"}),ne=m.initial;try{ne=P.call(X,q),h.emit("computed:done",{path:a,id:d,value:ne})}catch(ee){h.emit("computed:error",{path:a,id:d,error:ee})}M?M.setState(function(ee){C(ee,y,ne)}):C(k,y,ne)},options:m})}function oe(p,m){var h=p.path,a=p.parent,d=p.value,u=d(),y=u.getter,P=u.options;te(h,y,m,P);var M=P.selfReactiveable,w=h,T=G(h,P),k="".concat(T,"_").concat(h.join(K));m.options.log("Create sync computed: ".concat(k));var Z={id:T,desc:k,resultPath:w,isComputedRunning:!1,dependValues:[],valuePath:h,deps:[],getter:y};ae(Z,P,m),M||p.replaceValue(I(m.state,h));var H=new Q(m,M,h,P);return P.save&&m.computedObjects.set(T,H),H}var ce=e(29008),le=e.n(ce),We=e(70958),ie=e.n(We),Ke=e(28633),ve=e.n(Ke),se=e(13834),et=e(56041);function Ue(p,m,h,a,d){var u=re(p,a,d),y=I(m,h);Object.assign(y,u,d)}function tt(p,m,h){var a=Object.assign({},h),d=a.max,u=d===void 0?100:d,y=a.min,P=y===void 0?0:y,M=a.value,w=M===void 0?0:M;return p(function(T){return C(T,[].concat(W()(m),["progress"]),w)}),{value:function(k){k>u&&(k=u),k<P&&(k=P),p(function(Z){return C(Z,[].concat(W()(m),["progress"]),k)})},end:function(){this.value(u)}}}function pe(p,m,h){p(function(a){Object.entries(h).forEach(function(d){var u=ve()(d,2),y=u[0],P=u[1];C(a,[].concat(W()(m),[y]),P)})})}function at(p,m,h,a){return Pe.apply(this,arguments)}function Pe(){return Pe=ie()(le()().mark(function p(m,h,a,d){var u,y,P,M,w,T,k,Z,H,Y,X,q,ne,ee,Se,de,Et,Ct,Be,_t,Le,me,fe,Nt,At,he;return le()().wrap(function(Oe){for(;;)switch(Oe.prev=Oe.next){case 0:u=h.id,y=h.valuePath,P=h.getter,M=h.resultPath,w=h.dependValues,T=a.timeout,k=T===void 0?0:T,Z=a.retry,H=Z===void 0?[0,0]:Z,Y=a.selfReactiveable,X=Y?Y.setState.bind(Y):d.setState,q=m,ne=v(d,a,{draft:m,dependValues:w,valuePath:y,computedType:"Computed"}),ee=Array.isArray(H)?H:[Number(H),0],Se=ve()(ee,2),de=Se[0],Et=Se[1],Be=new AbortController,_t={onTimeout:function(xe){return Ct=xe},getProgressbar:function(xe){return tt(X,y,xe)},getSnap:function(xe){return(0,se.getSnap)(xe,!1)},abortSignal:Be.signal,cancel:Be.abort},Le=!1,pe(X,M,{cancel:(0,se.markRaw)(N(function(){return Be.abort()}))}),Be.signal.addEventListener("abort",function(){Le=!0}),me=!1,fe=!1,At=le()().mark(function Xe(){var xe,qe,Ee,Rt,St,Ot,ke,Pt,Ce;return le()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:if(me=!1,fe=!1,Ee={},ue.prev=3,Rt=Array.isArray(k)?k:[k,0],St=ve()(Rt,2),Ot=St[0],ke=Ot===void 0?0:Ot,Pt=St[1],Ce=Pt===void 0?0:Pt,pe(X,M,{loading:!0,error:null,retry:he>0?de-he:0,timeout:Ce>1?Ce:ke,progress:0}),!Le){ue.next=8;break}throw new Error("Abort");case 8:return ke>0&&(xe=setTimeout(function(){fe=!0,typeof Ct=="function"&&Ct(),me||(clearInterval(qe),pe(X,M,{loading:!1,error:"TIMEOUT",timeout:0}))},ke),Ce>1&&(qe=setInterval(function(){pe(X,M,{timeout:Ce--}),Ce===0&&clearInterval(qe)},ke/(Ce+1)))),ue.next=11,P.call(q,ne,_t);case 11:if(Nt=ue.sent,!Le){ue.next=14;break}throw new Error("Abort");case 14:fe||Object.assign(Ee,{result:Nt,error:null,timeout:0}),ue.next=22;break;case 17:ue.prev=17,ue.t0=ue.catch(3),me=!0,fe||Object.assign(Ee,{error:$(ue.t0).message,timeout:0}),de>0&&Object.assign(Ee,{retry:de-he});case 22:return ue.prev=22,clearTimeout(xe),clearInterval(qe),(!me||he==de)&&Object.assign(Ee,{loading:!1}),!me&&!fe&&Object.assign(Ee,{error:null}),pe(X,M,Ee),ue.finish(22);case 29:if(!me){ue.next=33;break}if(!(de>0&&Et>0&&he<de)){ue.next=33;break}return ue.next=33,(0,et.g)(Et);case 33:case"end":return ue.stop()}},Xe,null,[[3,17,22,29]])}),he=0;case 15:if(!(he<de+1)){Oe.next=20;break}return Oe.delegateYield(At(),"t0",17);case 17:he++,Oe.next=15;break;case 20:Le||fe?d.emit("computed:cancel",{path:y,id:u,reason:fe?"timeout":"abort"}):me?d.emit("computed:error",{path:y,id:u,error:me}):d.emit("computed:done",{path:y,id:u,value:Nt});case 21:case"end":return Oe.stop()}},p)})),Pe.apply(this,arguments)}function nt(p,m,h){var a=p.valuePath,d=p.id,u=p.deps,y=p.desc,P=m.selfReactiveable,M=m.initial,w=m.noReentry;h.reactiveable.createAsyncComputed({depends:function(k){return c(u,k,a)},initial:function(k){P?P.setState(function(Z){C(Z,a,re(h,d,{result:M}))}):C(k,a,re(h,d,{result:M}))},onComputed:function(){var T=ie()(le()().mark(function Z(H){var Y,X,q,ne,ee;return le()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:if(Y=H.draft,X=H.values,q=H.options,!(!h.options.enableComputed||!m.enable&&(q==null?void 0:q.enable)!==!0)){de.next=4;break}return h.options.log("Async computed <".concat(y,"> is disabled"),"warn"),de.abrupt("return");case 4:if(h.options.log("Run async computed for : ".concat(y)),ne=Object.assign({},m,q),!(w&&p.isComputedRunning)){de.next=10;break}return h.options.debug&&h.options.log("Reentry async computed: ".concat(y),"warn"),h.emit("computed:cancel",{path:a,id:d,reason:"reentry"}),de.abrupt("return");case 10:return p.isComputedRunning=!0,p.dependValues=X,de.prev=12,de.next=15,at(Y,p,ne,h);case 15:return ee=de.sent,de.abrupt("return",ee);case 17:return de.prev=17,p.isComputedRunning=!1,de.finish(17);case 20:case"end":return de.stop()}},Z,null,[[12,,17,20]])}));function k(Z){return T.apply(this,arguments)}return k}(),options:m})}function Ie(p,m){var h=p.path,a=p.parent,d=p.value,u=d(),y=u.getter,P=u.options;P.async=!0,te(h,y,m,P);var M=P.depends,w=M===void 0?[]:M,T=P.selfReactiveable,k=h;w.length==0&&m.options.log("async computed <".concat(h.join("."),"> should specify depends"),"warn");var Z=G(h,P);P.id=Z;var H="".concat(Z,"_").concat(h.join(K));m.options.log("Create async computed: ".concat(H," (depends=").concat(w.length==0?"None":o(w),")"));var Y={id:Z,desc:H,resultPath:k,isComputedRunning:!1,dependValues:[],valuePath:h,deps:w,getter:y};nt(Y,P,m),T||p.replaceValue(I(m.state,h));var X=new Q(m,T,h,P);return P.save&&m.computedObjects.set(Z,X),X}function Ne(p){return Object.assign({loading:!1,timeout:0,retry:0,error:null,result:void 0,progress:0,run:(0,se.markRaw)(N(function(m){})),cancel:(0,se.markRaw)(N(function(){}))},p)}var ye=e(36711);function _e(p,m){var h=p.value,a;return h.__COMPUTED__=="async"?a=Ie(p,m):h.__COMPUTED__=="sync"?a=oe(p,m):(0,ye.$)(h)?(p.value=function(){return{getter:h,options:{depends:[],initial:void 0,immediate:!0,enable:!0}}},a=Ie(p,m)):(p.value=function(){return{getter:h,options:{initial:void 0,enable:!0}}},a=oe(p,m)),a&&setTimeout(function(){m.emit("computed:created",a)}),a}var Ge=e(14582),Ae=e.n(Ge),rt=e(28810),ge=e.n(rt),ot=e(48510),dt=e.n(ot),ut=e(30790),lt=e.n(ut),st=e(77701),Re=e.n(st),ct=e(28249),De=e.n(ct),it=e(5672),Ve=e.n(it);function Me(p,m,h){if(typeof p!="function")throw new Error("computed getter must be a function");var a=[],d={async:!1,enable:!0,timeout:0,depends:[],immediate:!0,save:!0};if(arguments.length==1)a=[];else if(arguments.length==2)if(Array.isArray(arguments[1]))a=arguments[1];else if(R()(arguments[1])=="object")Object.assign(d,arguments[1]);else throw new Error("invalid arguments");else arguments.length>=3&&(a=arguments[1],Object.assign(d,arguments[2]));var u=d.async===!0||(0,ye.$)(p)||arguments.length>=2&&Array.isArray(m);d.async=u,d.depends=b(a);var y=function(){return{getter:p,options:d}};return y.__COMPUTED__=u?"async":"sync",y}function be(){return Math.random().toString(36).slice(2)}var pt=function(){function p(m,h){S()(this,p)}return j()(p,[{key:"state",get:function(){throw new Error("state not implemented.")}},{key:"useState",value:function(h){throw new Error("useState not implemented.")}},{key:"setState",value:function(h){throw new Error("setState not implemented.")}},{key:"createAsyncComputed",value:function(h){throw new Error("createAsyncComputed not implemented.")}},{key:"createComputed",value:function(h){throw new Error("createComputed not implemented.")}},{key:"runComputed",value:function(h,a){throw new Error("runComputed not implemented.")}},{key:"sync",value:function(h){throw new Error("sync not implemented.")}},{key:"markRaw",value:function(h){throw new Error("makeRaw not implemented.")}},{key:"createWatch",value:function(h,a){throw new Error("createWatch not implemented.")}}]),p}(),mt=function(p){Re()(h,p);var m=De()(h);function h(a,d){var u,y;return S()(this,h),y=m.call(this,a,d),J()(ge()(y),"_stateCtx",void 0),y._stateCtx=(0,se.sharex)(a,{stopArrDep:!1,moduleName:(u=d==null?void 0:d.id)!==null&&u!==void 0?u:be(),onRead:function(M){d!=null&&d.onRead&&d.onRead({path:M.fullKeyPath,value:M.value,parent:M.parent,replaceValue:M.replaceValue})}}),y}return j()(h,[{key:"state",get:function(){return this._stateCtx.reactive}},{key:"useState",value:function(d){var u=this._stateCtx.useState(),y=ve()(u,2),P=y[0],M=y[1],w=typeof d=="function"?d(P):P;return[w,M]}},{key:"setState",value:function(d){this._stateCtx.setState(d)}},{key:"sync",value:function(d){return this._stateCtx.sync(d)}},{key:"createAsyncComputed",value:function(d){var u=d.initial,y=d.onComputed,P=d.depends,M=d.options;return this._stateCtx.mutate({deps:function(T){return typeof P=="function"?P(T):null},fn:function(T,k){k.isFirstCall&&typeof u=="function"&&u(T,k)},task:function(){var w=ie()(le()().mark(function k(Z){var H,Y,X,q;return le()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:if(H=Z.draft,Y=Z.setState,X=Z.input,q=Z.extraArgs,typeof u!="function"){ee.next=3;break}return ee.abrupt("return",y({draft:H,setState:Y,values:X,options:Object.assign({},q)}));case 3:case"end":return ee.stop()}},k)}));function T(k){return w.apply(this,arguments)}return T}(),immediate:M.immediate,desc:M.id,checkDeadCycle:!1}),M.id}},{key:"createComputed",value:function(d){var u=d.onComputed,y=d.options;return this._stateCtx.mutate({fn:function(M,w){var T=w.input;typeof u=="function"&&u({draft:M,values:T})},task:function(){var P=ie()(le()().mark(function w(T){var k,Z,H;return le()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:k=T.draft,Z=T.input,H=T.extraArgs,typeof u=="function"&&u({draft:k,values:Z,options:H});case 2:case"end":return X.stop()}},w)}));function M(w){return P.apply(this,arguments)}return M}(),desc:y.id,checkDeadCycle:!1}),y.id}},{key:"runComputed",value:function(d,u){var y={desc:d,extraArgs:u};return this._stateCtx.runMutateTask(y)}},{key:"markRaw",value:function(d){return(0,se.markRaw)(d)}},{key:"createWatch",value:function(d,u){var y=this,P=(0,se.watch)(function(w){var T=w.triggerReasons,k=T.map(function(Z){return Z.keyPath});d(k)},function(){return(u==null?void 0:u.length)==0?[y._stateCtx.state]:u==null?void 0:u.map(function(w){return _(y._stateCtx.state,w)})}),M=P.unwatch;return M}}]),h}(pt),vt=e(59166);function ze(p){function m(h,a,d){var u=Object.assign({id:be(),save:!1},(0,vt.P)(arguments[1])?arguments[1]:arguments[2]);u.depends=Array.isArray(arguments[1])?arguments[1]:[];var y=u.async===!0||(0,ye.$)(h)||Array.isArray(arguments[1]);u.selfReactiveable=new mt({value:y?re(p,u.id,{}):u.initial});var P;y?P={path:["value"],parent:null,value:Me(h,u.depends,u)}:P={path:["value"],parent:null,value:Me(h,u)};var M=_e(P,p);return M}return m}var Ze=function(p){Re()(h,p);var m=De()(h);function h(a){var d;return S()(this,h),d=m.call(this),J()(ge()(d),"_createComputed",void 0),d.store=a,d}return j()(h,[{key:"runGroup",value:function(){var a=ie()(le()().mark(function u(y,P){return le()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.abrupt("return",Promise.all(W()(this.values()).filter(function(T){return T.group==y}).map(function(T){return T.async,T.run(P)})));case 1:case"end":return w.stop()}},u,this)}));function d(u,y){return a.apply(this,arguments)}return d}()},{key:"enableGroup",value:function(){var a=ie()(le()().mark(function u(y){var P,M,w;return le()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:P=Ae()(this.values());try{for(P.s();!(M=P.n()).done;)w=M.value,w.options.enable=y}catch(Z){P.e(Z)}finally{P.f()}case 2:case"end":return k.stop()}},u,this)}));function d(u){return a.apply(this,arguments)}return d}()},{key:"delete",value:function(d){return dt()(lt()(h.prototype),"delete",this).call(this,d)}},{key:"create",get:function(){return this._createComputed||(this._createComputed=ze(this.store)),this._createComputed}}]),h}(Ve()(Map));function He(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return typeof p=="function"?p:typeof p=="string"?function(m){return o(m)==o(p.split(K))}:Array.isArray(p)?p.length===0?function(){return!0}:function(m){return p.map(function(h){return typeof h=="string"?h.split(K):Array.isArray(h)?h:[String(h)]}).some(function(h){return o(m)==o(h)})}:function(){return!1}}function je(p,m,h){var a=Object.assign({depends:He(m),enable:!0},h),d=function(){return{listener:p,options:a}};return d.__COMPUTED__="watch",d}function Fe(p){return function(m,h){if(h=b(h),h.length===0)return p.reactiveable.createWatch(m);if(h.some(function(a){return typeof a=="string"&&a.startsWith(".")}))throw new Error("watch depends can not start with '.'");return p.reactiveable.createWatch(m,h)}}var It=e(92379);function $e(p,m){m.options.log("install watch for <".concat(p.path.length==0?"Dynamic":p.path.join(K),">"));var h=p.value();h.options.path=p.path;var a=m.watchObjects.add(h),d=h.options.context;return d?d.setState(function(u){u.value=h.options.initial}):(p.replaceValue(h.options.initial),m.setState(function(u){C(u,p.path,h.options.initial)})),a}function Je(p){return function(m,h,a){(0,It.useEffect)(function(){var d={path:["value"],parent:void 0,value:function(){var P={listener:m,options:Object.assign({depends:He(h),context:(0,se.sharex)({value:0}),selfPath:["value"],initial:0,enable:!0,scope:B.Depends},a)};return P}},u=$e(d,p);return function(){p.watchObjects.delete(u.id)}},[h])}}function we(p,m){if(p===m)return!0;if(p==null||m==null||R()(p)!==R()(m))return!1;if(R()(p)==="object"){if(Array.isArray(p)&&Array.isArray(m))return p.length!==m.length?!1:p.every(function(a,d){return we(a,m[d])});if(!Array.isArray(p)&&!Array.isArray(m)){var h=Object.keys(p);return h.length!==Object.keys(m).length?!1:h.every(function(a){return we(p[a],m[a])})}else return!1}return!1}var Qe=function(){function p(m,h){if(S()(this,p),J()(this,"_cache",void 0),J()(this,"_listener",void 0),J()(this,"_options",void 0),this.store=m,this._options=Object.assign({enable:!0,selfPath:[],group:void 0,context:void 0,initial:void 0},h.options),typeof this._options.depends!="function")throw new Error("watch options.depends must be a function");if(!this._options.id){var a=this._options.path;this._options.id=this._options.id||this._options.context?be():o(a)}this._listener=h.listener}return j()(p,[{key:"id",get:function(){return this._options.id}},{key:"options",get:function(){return this._options}},{key:"path",get:function(){return this._options.path}},{key:"depends",get:function(){return this._options.depends}},{key:"enable",get:function(){return this._options.enable},set:function(h){this._options.enable=h}},{key:"cache",get:function(){return this._cache||(this._cache={}),this._cache}},{key:"value",get:function(){var h=this._options.context?this._options.context:this.store.state;return I((0,se.getSnap)(h),this.path)}},{key:"getName",value:function(){return this._options.context?this.id:this.path.join(K)}},{key:"isDepends",value:function(h,a){return we(h,this.path)?!1:this.depends(h,a)}},{key:"reset",value:function(){this._cache={}}},{key:"run",value:function(h,a){var d=this;if(!this.enable){this.store.options.log("WatchObject <".concat(this.getName(),"> is disabled"));return}try{var u=this._listener.call(this,h,a,this);u!==void 0&&(this._options.context?this._options.context.setState(function(y){y.value=u}):this.store.setState(function(y){C(y,d.path,u)}))}catch(y){}}}]),p}(),Te=function(p){Re()(h,p);var m=De()(h);function h(a){var d;return S()(this,h),d=m.call(this),J()(ge()(d),"_off",void 0),J()(ge()(d),"_enable",!0),d.store=a,a.on("created",d.onStateCreated.bind(ge()(d))),d}return j()(h,[{key:"onStateCreated",value:function(){this.createWacher()}},{key:"enable",get:function(){return this._enable},set:function(d){this._enable=d}},{key:"createWacher",value:function(){var d=this,u=this.store.reactiveable.createWatch(function(y){d._enable&&y.forEach(function(P){var M=I(d.store.state,P),w=Ae()(d.values()),T;try{for(w.s();!(T=w.n()).done;){var k=T.value;k.isDepends(P,M)&&k.run(P,M)}}catch(Z){w.e(Z)}finally{w.f()}})},[]);this._off=u}},{key:"reset",value:function(){this._off&&this._off(),this.createWacher()}},{key:"add",value:function(d){var u=new Qe(this.store,d);return this.set(u.id,u),u}},{key:"enableGroup",value:function(d){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,y=Ae()(this.values()),P;try{for(y.s();!(P=y.n()).done;){var M=P.value;M.options.group==d&&(M.options.enable=u)}}catch(w){y.e(w)}finally{y.f()}}}]),h}(Ve()(Map));function ft(p,m){var h=p.path,a=p.value,d=o(h);typeof a=="function"&&!m._replacedKeys[d]&&!t(a)&&(m._replacedKeys[d]=!0,a.__COMPUTED__=="watch"?$e(p,m):_e(p,m))}function ht(p){return function(m,h){var a=p.reactiveable.useState.bind(p.reactiveable);if(m==null)return a();var d=a(),u=ve()(d,2),y=u[0],P=u[1],M=m(y),w=P;return typeof h=="function"&&(w=function(k){P(function(Z){h.call(Z,Z,k)})}),[M,w]}}function xt(p){return function(m){p.reactiveable.setState(function(h){m(h)})}}var yt=e(24222);function gt(p){var m=(0,yt.Z)();p._emitter=m,p.on=m.on,p.off=m.off,p.emit=m.emit,p.once=function(h,a){var d=function u(y){try{a(y)}finally{m.off(h,u)}};m.on(h,d)}}function Ye(p,m){var h=Object.assign({id:be(),debug:!0,immediate:!1,enableComputed:!0,scope:function(){return B.Current}},m);h.log=function(){h.debug&&x.apply(void 0,arguments)};var a={options:h,_replacedKeys:{}};return gt(a),a.computedObjects=new Ze(a),a.watchObjects=new Te(a),a.reactiveable=new mt(p,{id:h.id,onRead:function(u){ft(u,a)}}),a.state=a.reactiveable.state,a.emit("created"),a.useState=ht(a),a.setState=xt(a),a.enableComputed=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return a.options.enableComputed=d},a.sync=a.reactiveable.sync.bind(a.reactiveable),a.watch=Fe(a),a.useWatch=Je(a),a.watch=Fe(a),a.createComputed=ze(a),h.immediate&&r(a.state),a}function bt(p,m){var h=(0,It.useState)(function(){return Ye(p,Object.assign({immediate:!0},m))}),a=ve()(h,1),d=a[0];return d}},90076:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(81972);const o=[{value:"This is a API example.",paraId:0}]},67077:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(76883);const o=[]},85749:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(5849);const o=[]},82387:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(3996);const o=[]},86547:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(37077);const o=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0}]},56554:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(12879);const o=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0}]},5670:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(99653);const o=[]},12316:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(39498);const o=[]},2400:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(85731);const o=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0}]},74814:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(15099);const o=[{value:"\u8868\u5355\u52A8\u4F5C\u7528\u6765\u5B9A\u4E49\u8868\u5355\u7684\u63D0\u4EA4\u3001\u91CD\u7F6E,\u6216\u8005\u4EFB\u610F\u884C\u4E3A\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8868\u5355\u52A8\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u901A\u4FD7\u5730\u8BF4\uFF0C\u8868\u5355\u52A8\u4F5C\u5C31\u662F\u58F0\u660E\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u5BF9\u8868\u5355\u6570\u636E\u8FDB\u884C\u5904\u7406\u3002",paraId:1,tocIndex:0},{value:"\u5728\u8868\u5355\u7684",paraId:2,tocIndex:1},{value:"actions",paraId:2,tocIndex:1},{value:"\u4E2D\u5B9A\u4E49\u8868\u5355\u52A8\u4F5C\uFF0C",paraId:2,tocIndex:1},{value:"actions",paraId:2,tocIndex:1},{value:"\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0Caction\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A\u3002",paraId:2,tocIndex:1},{value:`export interface FormActionDefine<Scope extends Dict=Dict,Result =any>{
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

`,paraId:4,tocIndex:1},{value:"\u8BF4\u660E",paraId:5,tocIndex:1},{value:"\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u8868\u5355",paraId:6,tocIndex:1},{value:"action",paraId:6,tocIndex:1},{value:"\u58F0\u660E\u5728",paraId:6,tocIndex:1},{value:"actions",paraId:6,tocIndex:1},{value:"\u3002",paraId:6,tocIndex:1},{value:"\u6BCF\u4E2A",paraId:6,tocIndex:1},{value:"Action",paraId:6,tocIndex:1},{value:"\u5747\u53EF\u4EE5\u6307\u5B9A",paraId:6,tocIndex:1},{value:"scope",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"title",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"help",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"tips",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"visible",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"enable",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"count",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"execute",paraId:6,tocIndex:1},{value:"\u7B49\u5C5E\u6027\uFF0C\u9664\u4E86",paraId:6,tocIndex:1},{value:"execute",paraId:6,tocIndex:1},{value:"\u5916\uFF0C\u5176\u4ED6\u5747\u662F\u53EF\u9009\u7684\u3002",paraId:6,tocIndex:1},{value:"\u6BCF\u4E2A",paraId:7,tocIndex:2},{value:"Action",paraId:7,tocIndex:2},{value:"\u5747\u53EF\u4EE5\u6307\u5B9A",paraId:7,tocIndex:2},{value:"execute",paraId:7,tocIndex:2},{value:"\u5C5E\u6027\uFF0C\u7528\u6765\u6267\u884C\u52A8\u4F5C\uFF0C",paraId:7,tocIndex:2},{value:"execute",paraId:7,tocIndex:2},{value:"\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u5BF9\u8868\u5355\u6570\u636E\u8FDB\u884C\u5904\u7406\u3002",paraId:7,tocIndex:2},{value:"execute",paraId:8,tocIndex:2},{value:"\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E00\u822C\u662F\u5F02\u6B65\u51FD\u6570\uFF0C\u6BD5\u7ADF\u8981\u5E72\u70B9\u4EC0\u4E48\u4E8B\u561B\uFF0C\u4E5F\u53EF\u4EE5\u662F\u540C\u6B65\u51FD\u6570\uFF0C\u53EF\u4EE5\u6709\u4EE5\u4E0B\u51E0\u79CD\u58F0\u660E\u65B9\u5F0F\uFF1A",paraId:8,tocIndex:2},{value:"\u76F4\u63A5\u4F7F\u7528\u5F02\u6B65\u51FD\u6570\u58F0\u660E",paraId:9,tocIndex:3},{value:"\u9996\u9009\u662F\u4F7F\u7528",paraId:10,tocIndex:4},{value:"action",paraId:10,tocIndex:4},{value:"\u65B9\u6CD5\u8FDB\u884C\u58F0\u660E\uFF0C",paraId:10,tocIndex:4},{value:"action",paraId:10,tocIndex:4},{value:"\u65B9\u6CD5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u58F0\u660E\u4E00\u4E2A\u52A8\u4F5C\u3002",paraId:10,tocIndex:4},{value:"",paraId:11,tocIndex:4},{value:"scope",paraId:12,tocIndex:5},{value:"\uFF1A\u52A8\u4F5C\u63D0\u4EA4\u8303\u56F4\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u52A8\u6001\u8BA1\u7B97\u63D0\u4EA4\u8303\u56F4\u3002",paraId:12,tocIndex:5}]},54347:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(59378);const o=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0},{value:"\u4E00\u822C\u5728\u72EC\u7ACB\u7684\u6587\u4EF6\u4E2D\u4F7F\u7528",paraId:1,tocIndex:1},{value:"createForm",paraId:1,tocIndex:1},{value:"\u6765\u521B\u5EFA\u4E00\u4E2A\u8868\u5355\u5BF9\u8C61\uFF08\u4E0D\u662F\u5728\u7EC4\u4EF6\u5185\uFF09\u3002",paraId:1,tocIndex:1},{value:`import { createForm }  from "@speedform/core"
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
`,paraId:16,tocIndex:3},{value:"createForm",paraId:17,tocIndex:4},{value:"\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u8868\u5355\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5305\u62EC\u4E86\u4E00\u4E9B\u7528\u6765\u64CD\u4F5C\u8868\u5355\u7684",paraId:17,tocIndex:4},{value:"API",paraId:17,tocIndex:4},{value:"\u3002",paraId:17,tocIndex:4},{value:"\u540D\u79F0",paraId:18,tocIndex:4},{value:"\u7C7B\u578B",paraId:18,tocIndex:4},{value:"\u8BF4\u660E",paraId:18,tocIndex:4},{value:"Form",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Field",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u5B57\u6BB5\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Group",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u5B57\u6BB5\u7EC4\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Action",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u52A8\u4F5C\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Submit",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u63D0\u4EA4\u52A8\u4F5C\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Reset",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u91CD\u7F6E\u52A8\u4F5C\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"getAction",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u7528\u6765\u83B7\u53D6\u5728\u8868\u5355\u5B57\u6BB5\u58F0\u660E\u7684",paraId:18,tocIndex:4},{value:"Action",paraId:18,tocIndex:4},{value:"fields",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355",paraId:18,tocIndex:4},{value:"fields",paraId:18,tocIndex:4},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"actions",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355",paraId:18,tocIndex:4},{value:"actions",paraId:18,tocIndex:4},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"state",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355\u6570\u636E\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"computedObjects",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355\u4E2D\u7684\u6240\u6709\u8BA1\u7B97\u5C5E\u6027\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"watchObjects",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355\u4E2D\u7684\u6240\u6709",paraId:18,tocIndex:4},{value:"Watch",paraId:18,tocIndex:4},{value:"\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"freeze",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u51BB\u7ED3\u8868\u5355\u7981\u6B62\u7F16\u8F91",paraId:18,tocIndex:4},{value:"load",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u52A0\u8F7DJSON\u6570\u636E\u5230\u8868\u5355\u5B9E\u4F8B",paraId:18,tocIndex:4},{value:"getValues",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u83B7\u53D6\u8868\u5355\u6570\u636E(\u53EA\u5305\u62EC\u8868\u5355\u5B57\u6BB5",paraId:18,tocIndex:4},{value:"value",paraId:18,tocIndex:4},{value:")",paraId:18,tocIndex:4},{value:"validate",paraId:18,tocIndex:4},{value:"'\u65B9\u6CD5'",paraId:18,tocIndex:4},{value:"\u6821\u9A8C\u6574\u4E2A\u8868\u5355",paraId:18,tocIndex:4},{value:"useState",paraId:18,tocIndex:4},{value:"hook",paraId:18,tocIndex:4},{value:"\u5728\u7EC4\u4EF6\u4E2D\u8BBF\u95EE",paraId:18,tocIndex:4},{value:"state",paraId:18,tocIndex:4},{value:"createForm",paraId:19,tocIndex:5},{value:"\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A\u6CDB\u578B\u53C2\u6570\uFF0C\u7528\u4E8E\u5B9A\u4E49\u8868\u5355\u7684",paraId:19,tocIndex:5},{value:"schema",paraId:19,tocIndex:5},{value:"\u5BF9\u8C61\u7C7B\u578B\u3002\u4F46\u662F\u8BE5\u6CDB\u578B\u53C2\u6570\u4E00\u822C\u53EF\u4EE5\u91C7\u7528",paraId:19,tocIndex:5},{value:"typeof <schema>",paraId:19,tocIndex:5},{value:"\u6765\u81EA\u52A8\u63A8\u65AD\uFF0C\u8FD9\u6837\u5C31\u4E0D\u9700\u8981\u624B\u52A8\u5B9A\u4E49\u7C7B\u578B\u4E86\u3002",paraId:19,tocIndex:5}]},34126:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(44833);const o=[]},73360:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(21955);const o=[]},26170:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(45620);const o=[]},90847:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(90751);const o=[]},82697:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(31673);const o=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u975E\u5E38\u5F3A\u5927\u7684",paraId:0,tocIndex:0},{value:"React",paraId:0,tocIndex:0},{value:"\u8868\u5355\u7EC4\u4EF6\uFF0C\u5B83\u7684\u76EE\u6807\u662F\u8BA9",paraId:0,tocIndex:0},{value:"React",paraId:0,tocIndex:0},{value:"\u8868\u5355\u5F00\u53D1\u53D8\u5F97\u66F4\u52A0\u7B80\u5355\u3001\u5FEB\u901F\u3001\u7075\u6D3B\u3002",paraId:0,tocIndex:0}]},26279:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(65864);const o=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u6838\u5FC3\u7531\u4E24\u4E2A\u5305\u7EC4\u6210\uFF1A",paraId:0,tocIndex:0},{value:"@speedform/core",paraId:0,tocIndex:0},{value:"\u548C",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u662F\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u7684\u54CD\u5E94\u5F0F\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u7528\u6765\u7BA1\u7406\u548C\u9A71\u52A8",paraId:1,tocIndex:0},{value:"Form",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u662F",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u529F\u80FD\u5F3A\u5927\u7684\u57FA\u7840\u3002",paraId:1,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u4F5C\u4E3A\u66FF\u4EE3",paraId:1,tocIndex:0},{value:"redux",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"mobx",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"zstuand",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"Jotai",paraId:1,tocIndex:0},{value:"\u7684\u72B6\u6001\u7BA1\u7406\u5E93\u72EC\u7ACB\u4F7F\u7528\uFF0C\u5176\u672C\u8D28\u4E0A\u662F\u5BF9",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u72B6\u6001\u7BA1\u7406\u5E93\u7684\u5C01\u88C5\u3002",paraId:1,tocIndex:0},{value:"@speedform/core",paraId:1,tocIndex:0},{value:"\u662F",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u6838\u5FC3\u5E93\uFF0C\u5B83\u63D0\u4F9B\u4E86",paraId:1,tocIndex:0},{value:"Form",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u548C",paraId:1,tocIndex:0},{value:"Field",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6,\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A",paraId:1,tocIndex:0},{value:"headless",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u5E93,\u53EA\u8D1F\u8D23\u8868\u5355\u7684\u903B\u8F91\u5904\u7406\uFF0C\u4E0D\u8D1F\u8D23\u5177\u4F53\u7684\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"@speedform/antd",paraId:1,tocIndex:0},{value:"\u662F\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u6E32\u67D3\u7EC4\u4EF6\u5E93\uFF0C\u5B83\u63D0\u4F9B\u4E86",paraId:1,tocIndex:0},{value:"Form",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u548C",paraId:1,tocIndex:0},{value:"Field",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u7684",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7248\u672C\u3002",paraId:1,tocIndex:0},{value:`pnpm install @speedform/core @speedform/reactive
yarn add @speedform/core @speedform/reactive
npm install @speedform/core @speedform/reactive
`,paraId:2,tocIndex:0}]},12958:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(56343);const o=[]},56494:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(26807);const o=[{value:"\u672C\u8282\u5C06\u901A\u8FC7\u5F00\u53D1\u4E00\u4E2A\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\uFF0C\u4F53\u9A8C",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u7684\u5F3A\u5927\u4E0E\u7075\u6D3B\u3002",paraId:0,tocIndex:0},{value:"\u8BE5\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A",paraId:1,tocIndex:0},{value:"\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\u7ED3\u6784\u5982\u4E0B\uFF1A",paraId:2,tocIndex:0},{value:`{
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

`,paraId:3,tocIndex:0},{value:"\u8868\u5355\u5B57\u6BB5\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A",paraId:4,tocIndex:0},{value:"title",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5\u4E3A\u5FC5\u586B\u5B57\u6BB5\uFF0C\u957F\u5EA6\u4E0D\u5C0F\u4E8E3\u3002",paraId:5,tocIndex:0},{value:"interface",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5\u4E3A\u4E0B\u62C9\u9009\u62E9\u5B57\u6BB5\uFF0C\u53EF\u9009\u6709\u7EBF\u7F51\u5361\u6216\u65E0\u7EBF\u7F51\u5361\u3002",paraId:5,tocIndex:0},{value:"ip",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5\u4E3AIP\u5730\u5740\u5B57\u6BB5\uFF0C\u9700\u8981\u8FDB\u884C\u5F02\u6B65\u6821\u9A8C\uFF0C\u7528\u6765\u9A8C\u8BC1IP\u5730\u5740\u7684\u6709\u6548\u6027\u3002",paraId:5,tocIndex:0},{value:"gateway",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5\u4E3AIP\u5730\u5740\u5B57\u6BB5\u3002",paraId:5,tocIndex:0},{value:"dhcp",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5\u4E3A\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5305\u542B",paraId:5,tocIndex:0},{value:"enable",paraId:5,tocIndex:0},{value:"\u3001",paraId:5,tocIndex:0},{value:"start",paraId:5,tocIndex:0},{value:"\u3001",paraId:5,tocIndex:0},{value:"end",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5,\u5F53",paraId:5,tocIndex:0},{value:"enable=false",paraId:5,tocIndex:0},{value:"\uFF0C",paraId:5,tocIndex:0},{value:"start",paraId:5,tocIndex:0},{value:"\u3001",paraId:5,tocIndex:0},{value:"end",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5\u7981\u7528\u3002",paraId:5,tocIndex:0},{value:"wifi",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5\u4E3A\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5305\u542B",paraId:5,tocIndex:0},{value:"ssid",paraId:5,tocIndex:0},{value:"\u3001",paraId:5,tocIndex:0},{value:"password",paraId:5,tocIndex:0},{value:"\u5B57\u6BB5\uFF0C\u4EC5\u5728\u663E\u793A",paraId:5,tocIndex:0},{value:'interface= "wifi"',paraId:5,tocIndex:0},{value:"\u65F6\u663E\u793A\u3002",paraId:5,tocIndex:0},{value:"SpeedForm",paraId:6,tocIndex:0},{value:"\u662F\u4E00\u4E2A",paraId:6,tocIndex:0},{value:"headless",paraId:6,tocIndex:0},{value:"\u7EC4\u4EF6\u5E93\uFF0C\u4E0D\u8D1F\u8D23\u5177\u4F53\u7684\u6E32\u67D3\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u672C\u4F8B\u4E2D\u6211\u4EEC\u4F7F\u7528\u6807\u51C6\u7684html\u7EC4\u4EF6\u6765\u6E32\u67D3\u8868\u5355\u3002",paraId:6,tocIndex:0},{value:"SpeedForm",paraId:7,tocIndex:1},{value:"\u6838\u5FC3\u7531\u4E24\u4E2A\u5305\u7EC4\u6210\uFF1A",paraId:7,tocIndex:1},{value:"@speedform/core",paraId:7,tocIndex:1},{value:"\u548C",paraId:7,tocIndex:1},{value:"@speedform/reactive",paraId:7,tocIndex:1},{value:"\u3002",paraId:7,tocIndex:1},{value:`pnpm install @speedform/core @speedform/reactive
yarn add @speedform/core @speedform/reactive
npm install @speedform/core @speedform/reactive
`,paraId:8,tocIndex:1},{value:"SpeedForm",paraId:9,tocIndex:2},{value:"\u8868\u5355\u4F7F\u7528\u4E00\u4E2A\u666E\u901A",paraId:9,tocIndex:2},{value:"JSON",paraId:9,tocIndex:2},{value:"\u5BF9\u8C61\u6765\u58F0\u660E\u8868\u5355\u5143\u6570\u636E\uFF0C\u5373\u8868\u5355",paraId:9,tocIndex:2},{value:"Schema",paraId:9,tocIndex:2},{value:"\u3002",paraId:9,tocIndex:2},{value:"\u6211\u4EEC\u4F7F\u7528\u4E00\u4E2A\u72EC\u7ACB\u7684\u6587\u4EF6(",paraId:10,tocIndex:2},{value:"network/schema.ts",paraId:10,tocIndex:2},{value:")\u6765\u58F0\u660E\u8868\u5355\uFF0C\u8FD9\u6837\u53EF\u4EE5\u66F4\u597D\u5730\u7EC4\u7EC7\u8868\u5355\u7684\u7ED3\u6784\u548C\u4FBF\u4EE5\u5F15\u7528\u3002",paraId:10,tocIndex:2},{value:`// network/schema.ts

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
`,paraId:11,tocIndex:2},{value:"\u8868\u5355",paraId:12,tocIndex:2},{value:"Schema",paraId:12,tocIndex:2},{value:"\u662F\u4E00\u4E2A\u666E\u901A\u7684",paraId:12,tocIndex:2},{value:"JSON",paraId:12,tocIndex:2},{value:"\u5BF9\u8C61\uFF0C\u5B83\u7531\u4EE5\u4E0B\u51E0\u4E2A\u90E8\u5206\u7EC4\u6210\uFF1A",paraId:12,tocIndex:2},{value:"\u8868\u5355\u5C5E\u6027",paraId:13,tocIndex:2},{value:"\uFF1A\u8868\u5355\u7684\u4E00\u4E9B\u57FA\u672C\u5C5E\u6027\uFF0C\u5982",paraId:13,tocIndex:2},{value:"title",paraId:13,tocIndex:2},{value:"\u3001",paraId:13,tocIndex:2},{value:"description",paraId:13,tocIndex:2},{value:"\u7B49\u3002",paraId:13,tocIndex:2},{value:"fields",paraId:13,tocIndex:2},{value:"\uFF1A\u7528\u6765\u58F0\u660E\u672C\u8868\u5355\u7684\u6240\u6709\u5B57\u6BB5\u3002",paraId:13,tocIndex:2},{value:"actions",paraId:13,tocIndex:2},{value:"\uFF1A\u7528\u6765\u58F0\u660E\u8868\u5355\u7684\u6240\u6709\u52A8\u4F5C,\u7528\u6765\u8FDB\u884C\u8868\u5355\u63D0\u4EA4\u7B49\u3002",paraId:13,tocIndex:2},{value:"\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u8BE6\u7EC6\u89E3\u91CA\u4E00\u4E0B\u5982\u4F55",paraId:14,tocIndex:3},{value:"SpeedForm",paraId:14,tocIndex:3},{value:"\u8868\u5355\u4E2D\u58F0\u660E\u4E00\u4E2A\u5B57\u6BB5\u3002",paraId:14,tocIndex:3},{value:"\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u5B57\u6BB5\u53EA\u9700\u8981\u5305\u62EC\u4E00\u4E2A",paraId:15,tocIndex:3},{value:"value",paraId:15,tocIndex:3},{value:"\u7684\u5C5E\u6027,\u5982\u4E0B\uFF1A",paraId:15,tocIndex:3},{value:`{  
  title:{
    value: "React-Helux-Form"    
  }
}
`,paraId:16,tocIndex:3},{value:"\u5F53\u7136\uFF0C\u5B9E\u9645\u60C5\u51B5\u6211\u4EEC\u4E00\u822C\u8FD8\u4F1A\u58F0\u660E\u4E00\u4E9B\u5176\u4ED6\u989D\u5916\u5C5E\u6027\uFF0C\u5982",paraId:17,tocIndex:3},{value:"title",paraId:17,tocIndex:3},{value:"\u3001",paraId:17,tocIndex:3},{value:"placeholder",paraId:17,tocIndex:3},{value:"\u7B49\u3002\u56E0\u6B64\uFF0C\u4E00\u4E2A\u5B8C\u6574\u7684",paraId:17,tocIndex:3},{value:"title",paraId:17,tocIndex:3},{value:"\u5B57\u6BB5\u53EF\u80FD\u4F1A\u58F0\u660E\u5982\u4E0B\uFF1A",paraId:17,tocIndex:3},{value:`{  
  title:{
    value: "React-Helux-Form",
    placeholder: "\u8F93\u5165\u7F51\u7EDC\u914D\u7F6E\u540D\u79F0",
    title: "\u7F51\u7EDC\u540D\u79F0",
    // ...
    // \u53EF\u4EE5\u6DFB\u52A0\u4EFB\u610F\u989D\u5916\u5C5E\u6027
  }
} 
`,paraId:18,tocIndex:3},{value:"\u5728\u5B9E\u9645\u573A\u666F\u4E2D\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u5C06\u4E00\u4E9B\u76F8\u5173\u7684\u5B57\u6BB5\u7EC4\u5408\u6210\u4E00\u4E2A\u5B57\u6BB5\u7EC4\uFF0C\u5982",paraId:19,tocIndex:4},{value:"wifi",paraId:19,tocIndex:4},{value:"\u5B57\u6BB5\u7EC4\u3002",paraId:19,tocIndex:4},{value:`{
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
`,paraId:20,tocIndex:4},{value:"SpeedForm",paraId:21,tocIndex:5},{value:"\u8868\u5355\u4E2D\u7684\u5B57\u6BB5\u9A8C\u8BC1\u662F\u901A\u8FC7",paraId:21,tocIndex:5},{value:"validate",paraId:21,tocIndex:5},{value:"\u5C5E\u6027\u6765\u58F0\u660E\u7684\u3002",paraId:21,tocIndex:5},{value:"validate",paraId:21,tocIndex:5},{value:"\u5C5E\u6027\u503C\u662F\u4E00\u4E2A\u51FD\u6570\uFF08\u53EF\u4EE5\u662F",paraId:21,tocIndex:5},{value:"\u540C\u6B65\u51FD\u6570",paraId:21,tocIndex:5},{value:"\uFF0C\u4E5F\u53EF\u4EE5\u662F",paraId:21,tocIndex:5},{value:"\u5F02\u6B65\u51FD\u6570",paraId:21,tocIndex:5},{value:"\uFF09\uFF0C\u5176\u8FD4\u56DE\u503C\u7528\u6765\u9A8C\u8BC1\u5B57\u6BB5\u7684\u6709\u6548\u6027\u3002",paraId:21,tocIndex:5},{value:`import { assert } from "@speedform/core"
{  
  title:{
    value: "React-Helux-Form",
    placeholder: "\u8F93\u5165\u7F51\u7EDC\u914D\u7F6E\u540D\u79F0",
    title: "\u7F51\u7EDC\u540D\u79F0",
    help:"\u7F51\u7EDC\u540D\u79F0\u4E0D\u80FD\u5C0F\u4E8E3",
    validate:(value)=>{
        return value.length > 3
    }
  }
} 

\`validate\`\u5C5E\u6027\u662F\u4E00\u4E2A\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u5165\u53C2\u662F\u5B57\u6BB5\u7684\`value\`\u503C\uFF0C\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\`boolean\`\u503C\uFF0C\u7528\u6765\u8868\u793A\u5B57\u6BB5\u7684\u6709\u6548\u6027\u3002


`,paraId:22,tocIndex:5},{value:"SpeedForm",paraId:23},{value:"\u6CA1\u6709\u5185\u7F6E\u7684\u9A8C\u8BC1\u89C4\u5219\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55\u4F60\u559C\u6B22\u7684\u9A8C\u8BC1\u5E93\uFF0C\u5982",paraId:23},{value:"yup",paraId:23},{value:"\u3001",paraId:23},{value:"joi",paraId:23},{value:"\u3001",paraId:23},{value:"zod",paraId:23},{value:",",paraId:23},{value:"validator",paraId:23},{value:"\u7B49\u3002",paraId:23},{value:"\u63A5\u4E0B\u6765\u6211\u4EEC\u6DFB\u52A0",paraId:24,tocIndex:6},{value:"interface",paraId:24,tocIndex:6},{value:"\u5B57\u6BB5\uFF0C\u53EF\u4EE5\u6307\u5B9A",paraId:24,tocIndex:6},{value:"wifi",paraId:24,tocIndex:6},{value:"\u6216",paraId:24,tocIndex:6},{value:"ethernet",paraId:24,tocIndex:6},{value:"\u4E24\u79CD\u7F51\u5361\u7C7B\u578B\u3002",paraId:24,tocIndex:6},{value:"\u5B57\u6BB5\u7684\u9009\u62E9\u7531",paraId:25,tocIndex:6},{value:"select",paraId:25,tocIndex:6},{value:"\u5C5E\u6027\u6307\u5B9A\uFF0C",paraId:25,tocIndex:6},{value:"interface.select",paraId:25,tocIndex:6},{value:"\u662F\u4E00\u4E2A\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF08\u53EF\u4EE5\u662F",paraId:25,tocIndex:6},{value:"\u540C\u6B65\u51FD\u6570",paraId:25,tocIndex:6},{value:"\uFF0C\u4E5F\u53EF\u4EE5\u662F",paraId:25,tocIndex:6},{value:"\u5F02\u6B65\u51FD\u6570",paraId:25,tocIndex:6},{value:"\uFF0C\u4E8B\u5B9E\u4E0A\u6240\u6709\u5B57\u6BB5\u7684\u5C5E\u6027\u5747\u53EF\u4EE5\u662F\u540C\u6B65\u6216\u5F02\u6B65\u7684\uFF09\uFF0C\u7528\u6765\u8FD4\u56DE",paraId:25,tocIndex:6},{value:"interface",paraId:25,tocIndex:6},{value:"\u7684\u4E0B\u62C9\u9009\u62E9\u7684\u9009\u9879\u3002",paraId:25,tocIndex:6},{value:`{
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
`,paraId:26,tocIndex:6},{value:"\u63A5\u4E0B\u6765\u6211\u4EEC\u4E3A",paraId:27,tocIndex:7},{value:"ip",paraId:27,tocIndex:7},{value:"\u5B57\u6BB5\u6DFB\u52A0\u5F02\u6B65\u6821\u9A8C\u529F\u80FD\uFF0C\u7528\u6765\u9A8C\u8BC1IP\u5730\u5740\u7684\u6709\u6548\u6027\u3002\u5F53",paraId:27,tocIndex:7},{value:"ip",paraId:27,tocIndex:7},{value:"\u5730\u5740\u7684\u503C\u53D8\u5316\u65F6\u4F1A\u81EA\u52A8\u8C03\u7528",paraId:27,tocIndex:7},{value:"validate",paraId:27,tocIndex:7},{value:"\u51FD\u6570\u8FDB\u884C\u6821\u9A8C\u3002",paraId:27,tocIndex:7},{value:`{
		ip: {
			value: "1.1.1.1",
			title: "IP\u5730\u5740",
			validate: async (value: any) => {
				await delay(2000);
				return validator.isIP(value);
			},
		},
}
`,paraId:28,tocIndex:7},{value:"\u5728\u5B9E\u9645\u573A\u666F\u4E2D\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u5BF9",paraId:29,tocIndex:7},{value:"ip",paraId:29,tocIndex:7},{value:"\u5730\u5740\u8FDB\u884C",paraId:29,tocIndex:7},{value:"ping",paraId:29,tocIndex:7},{value:"\u7B49\u5F02\u6B65\u64CD\u4F5C\uFF0C\u672C\u4F8B\u4E2D\u6211\u4EEC\u4F7F\u7528",paraId:29,tocIndex:7},{value:"delay",paraId:29,tocIndex:7},{value:"\u51FD\u6570\u6765\u6A21\u62DF\u5F02\u6B65\u64CD\u4F5C\u3002",paraId:29,tocIndex:7},{value:"\u5728\u672C\u4F8B\u4E2D\uFF0C\u5F53",paraId:30,tocIndex:8},{value:"interface.value",paraId:30,tocIndex:8},{value:"\u7684\u503C\u4E3A",paraId:30,tocIndex:8},{value:"wifi",paraId:30,tocIndex:8},{value:"\u65F6\uFF0C",paraId:30,tocIndex:8},{value:"wifi",paraId:30,tocIndex:8},{value:"\u76F8\u5173\u5B57\u6BB5\uFF08",paraId:30,tocIndex:8},{value:"ssid",paraId:30,tocIndex:8},{value:"\u548C",paraId:30,tocIndex:8},{value:"password",paraId:30,tocIndex:8},{value:"\uFF09\u624D\u4F1A\u663E\u793A\uFF0C\u5426\u5219\u9690\u85CF\u3002",paraId:30,tocIndex:8},{value:"\u8FD9\u53EF\u4EE5\u901A\u8FC7\u4E3A",paraId:31,tocIndex:8},{value:"wifi",paraId:31,tocIndex:8},{value:"\u5B57\u6BB5\u7EC4\u63D0\u4F9B\u4E00\u4E2A",paraId:31,tocIndex:8},{value:"visible",paraId:31,tocIndex:8},{value:"\u8BA1\u7B97\u5C5E\u6027\u6765\u5B9E\u73B0\u3002",paraId:31,tocIndex:8},{value:`{
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
`,paraId:32,tocIndex:8},{value:"\u4EE5\u4E0A\u6211\u4EEC\u5C06",paraId:33,tocIndex:8},{value:"visible",paraId:33,tocIndex:8},{value:"\u58F0\u660E\u4E3A\u4E00\u4E2A\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u5165\u53C2(",paraId:33,tocIndex:8},{value:"scope",paraId:33,tocIndex:8},{value:")\u662F\u8868\u5355\u6839\u5BF9\u8C61",paraId:33,tocIndex:8},{value:"fields",paraId:33,tocIndex:8},{value:"\uFF0C\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A",paraId:33,tocIndex:8},{value:"boolean",paraId:33,tocIndex:8},{value:"\u503C\uFF0C\u7528\u6765\u63A7\u5236",paraId:33,tocIndex:8},{value:"wifi",paraId:33,tocIndex:8},{value:"\u5B57\u6BB5\u7EC4\u7684\u663E\u793A\u3002",paraId:33,tocIndex:8},{value:"Q:",paraId:34},{value:" \u4E3A\u4EC0\u4E48",paraId:34},{value:"visible",paraId:34},{value:"\u7684\u8BA1\u7B97\u51FD\u6570\u7684\u5165\u53C2(",paraId:34},{value:"scope",paraId:34},{value:")\u662F\u8868\u5355\u6839\u5BF9\u8C61",paraId:34},{value:"fields",paraId:34},{value:"\uFF0C\u800C",paraId:34},{value:"validate",paraId:34},{value:"\u8BA1\u7B97\u51FD\u6570\u7684\u5165\u53C2\u662F\u5B57\u6BB5\u7684",paraId:34},{value:"value",paraId:34},{value:"\u503C\uFF1F",paraId:34},{value:"A:",paraId:35},{value:" \u8BA1\u7B97\u51FD\u6570\u7684\u5165\u53C2(",paraId:35},{value:"scope",paraId:35},{value:")\u9ED8\u8BA4\u662F\u5F53\u524D\u6240\u5728\u7684\u5BF9\u8C61\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7",paraId:35},{value:"computed",paraId:35},{value:"\u8FDB\u884C\u914D\u7F6E\u3002",paraId:35},{value:"validate",paraId:35},{value:"\u8BA1\u7B97\u51FD\u6570\u7684\u5165\u53C2\u7ECF\u8FC7",paraId:35},{value:"createForm",paraId:35},{value:"\u5904\u7406\u4E3A\u9ED8\u8BA4\u6307\u5B9A\u6240\u5728\u5B57\u6BB5\u7684",paraId:35},{value:"value",paraId:35},{value:"\u503C\u3002",paraId:35},{value:"\u5728\u672C\u4F8B\u4E2D\uFF0C\u5F53\u542F\u7528\u81EA\u52A8\u83B7\u53D6IP\u5730\u5740\uFF0C\u5373",paraId:36,tocIndex:9},{value:"dhcp.enable",paraId:36,tocIndex:9},{value:"\u7684\u503C\u4E3A",paraId:36,tocIndex:9},{value:"false",paraId:36,tocIndex:9},{value:"\u65F6\uFF0C",paraId:36,tocIndex:9},{value:"dhcp.start",paraId:36,tocIndex:9},{value:"\u3001",paraId:36,tocIndex:9},{value:"dhcp.end",paraId:36,tocIndex:9},{value:"\u5B57\u6BB5\u7981\u7528\u3002",paraId:36,tocIndex:9},{value:"\u8FD9\u53EF\u4EE5\u901A\u8FC7\u4E3A\u5B57\u6BB5\u63D0\u4F9B\u4E00\u4E2A",paraId:37,tocIndex:9},{value:"enable",paraId:37,tocIndex:9},{value:"\u8BA1\u7B97\u5C5E\u6027\u6765\u5B9E\u73B0\uFF0C\u5F53",paraId:37,tocIndex:9},{value:"dhcp.enable",paraId:37,tocIndex:9},{value:"\u4E3A",paraId:37,tocIndex:9},{value:"false",paraId:37,tocIndex:9},{value:"\u65F6\uFF0C",paraId:37,tocIndex:9},{value:"dhcp.start",paraId:37,tocIndex:9},{value:"\u548C",paraId:37,tocIndex:9},{value:"dhcp.end",paraId:37,tocIndex:9},{value:"\u5B57\u6BB5\u7981\u7528\u3002",paraId:37,tocIndex:9},{value:`{
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
`,paraId:38,tocIndex:9},{value:'\u8BF4\u660E"',paraId:39,tocIndex:9},{value:"\u4EE5\u4E0A",paraId:40,tocIndex:9},{value:"dhcp.start",paraId:40,tocIndex:9},{value:"\u3001",paraId:40,tocIndex:9},{value:"dhcp.end",paraId:40,tocIndex:9},{value:"\u5B57\u6BB5\u7684",paraId:40,tocIndex:9},{value:"enable",paraId:40,tocIndex:9},{value:"\u5C5E\u6027\u88AB\u914D\u7F6E\u4E3A\u8BA1\u7B97\u5C5E\u6027\uFF0C\u4F46\u662F\u5176\u4F9D\u8D56\u4E8E",paraId:40,tocIndex:9},{value:"fields.dhcp.enable.value",paraId:40,tocIndex:9},{value:"\uFF0C\u7531\u4E8E\u662F\u540C\u6B65\u8BA1\u7B97\uFF0C\u6240\u4EE5\u4F9D\u8D56\u662F\u81EA\u52A8\u6536\u96C6\u7684\uFF0C\u5373\u5F53",paraId:40,tocIndex:9},{value:"fields.dhcp.enable.value",paraId:40,tocIndex:9},{value:"\u53D8\u66F4\u65F6\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97",paraId:40,tocIndex:9},{value:"fields.dhcp.start.enable",paraId:40,tocIndex:9},{value:"\u548C",paraId:40,tocIndex:9},{value:"fields.dhcp.end.enable",paraId:40,tocIndex:9},{value:"\u7684\u503C\u3002",paraId:40,tocIndex:9},{value:"\u6211\u4EEC\u8FD8\u53EF\u4EE5\u770B\u5230",paraId:40,tocIndex:9},{value:"dhcp.start",paraId:40,tocIndex:9},{value:"\u3001",paraId:40,tocIndex:9},{value:"dhcp.end",paraId:40,tocIndex:9},{value:"\u5B57\u6BB5\u7684",paraId:40,tocIndex:9},{value:"enable",paraId:40,tocIndex:9},{value:"\u5C5E\u6027\u58F0\u660E\u7684",paraId:40,tocIndex:9},{value:"scope",paraId:40,tocIndex:9},{value:"\u53C2\u6570\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u6B64\u53C2\u6570\u51B3\u5B9A\u4E86\u8BA1\u7B97\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u6307\u5411\u3002\u8BE6\u89C1",paraId:40,tocIndex:9},{value:"\u4E0A\u4E0B\u6587",paraId:41,tocIndex:9},{value:"\u3002",paraId:40,tocIndex:9},{value:"\u5728\u5B9E\u9645\u573A\u666F\u4E0B\uFF0C\u5B57\u6BB5\u4E2D\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570\u7684\u6267\u884C\u53EF\u80FD\u4F1A\u9700\u8981\u8FDB\u884C",paraId:42,tocIndex:10},{value:"\u52A0\u8F7D\u6307\u793A",paraId:42,tocIndex:10},{value:"\u3001",paraId:42,tocIndex:10},{value:"\u8D85\u65F6",paraId:42,tocIndex:10},{value:"\u3001",paraId:42,tocIndex:10},{value:"\u4E0D\u53EF\u91CD\u5165",paraId:42,tocIndex:10},{value:"\u3001",paraId:42,tocIndex:10},{value:"\u8FDB\u5EA6\u663E\u793A",paraId:42,tocIndex:10},{value:"\u3001",paraId:42,tocIndex:10},{value:"\u91CD\u8BD5",paraId:42,tocIndex:10},{value:"\u3001",paraId:42,tocIndex:10},{value:"\u53D6\u6D88",paraId:42,tocIndex:10},{value:"\u7B49\u9AD8\u7EA7\u63A7\u5236\u3002",paraId:42,tocIndex:10},{value:"SpeedForm",paraId:42,tocIndex:10},{value:"\u652F\u6301\u901A\u8FC7",paraId:42,tocIndex:10},{value:"computed",paraId:42,tocIndex:10},{value:"\u51FD\u6570\u6765\u5B9E\u73B0\u8FD9\u4E9B\u9AD8\u7EA7\u63A7\u5236\u3002",paraId:42,tocIndex:10},{value:"\u6BD4\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4E3Aip\u5B57\u6BB5\u7684",paraId:43,tocIndex:10},{value:"validate",paraId:43,tocIndex:10},{value:"\u5C5E\u6027\u6DFB\u52A0",paraId:43,tocIndex:10},{value:"computed",paraId:43,tocIndex:10},{value:"\u51FD\u6570\u6765\u5B9E\u73B0",paraId:43,tocIndex:10},{value:"\u8D85\u65F6",paraId:43,tocIndex:10},{value:"\u63A7\u5236\u3002",paraId:43,tocIndex:10},{value:`
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
`,paraId:44,tocIndex:10},{value:"\u4EE5\u4E0A\u4EE3\u8868",paraId:45,tocIndex:10},{value:"computed",paraId:45,tocIndex:10},{value:"\u51FD\u6570\u58F0\u660E\u7684",paraId:45,tocIndex:10},{value:"validate",paraId:45,tocIndex:10},{value:"\u5C5E\u6027\u662F\u4E00\u4E2A\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u4F9D\u8D56\u4E8E",paraId:45,tocIndex:10},{value:"value",paraId:45,tocIndex:10},{value:"\u503C\uFF0C\u5F53",paraId:45,tocIndex:10},{value:"ip.value",paraId:45,tocIndex:10},{value:"\u503C\u53D8\u5316\u65F6\u4F1A\u81EA\u52A8\u6267\u884C",paraId:45,tocIndex:10},{value:"validate",paraId:45,tocIndex:10},{value:"\u51FD\u6570\u3002\u540C\u65F6\u8BBE\u5B9A\u4E86\u6267\u884C\u8D85\u65F6\u9650\u5236\u3002",paraId:45,tocIndex:10},{value:"\u66F4\u591A\u7684\u5F02\u6B65\u9AD8\u7EA7\u63A7\u5236\u529F\u80FD\u8BF7\u53C2\u8003\u540E\u7EED\u5B57\u6BB5\u9AD8\u7EA7\u63A7\u5236\u4EE5\u53CA",paraId:46,tocIndex:10},{value:"@speedform/reactive",paraId:47,tocIndex:10},{value:"\u3002",paraId:46,tocIndex:10},{value:"SpeedForm",paraId:48,tocIndex:11},{value:"\u8868\u5355\u4E2D\u7684\u6BCF\u4E2A\u5B57\u6BB5\u5747\u53EF\u4EE5\u58F0\u660E\u4EE5\u4E0B\u5C5E\u6027\uFF1A",paraId:48,tocIndex:11},{value:`{
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
`,paraId:49,tocIndex:11},{value:"\u8BF4\u660E",paraId:50,tocIndex:11},{value:"value",paraId:51,tocIndex:11},{value:"\uFF1A\u5FC5\u987B\u7684\uFF0C\u4EE3\u8868\u5B57\u6BB5\u7684\u503C\u3002",paraId:51,tocIndex:11},{value:"\u5176\u4ED6\u5B57\u6BB5\u5C5E\u6027\u5747\u662F\u53EF\u9009\u7684",paraId:51,tocIndex:11},{value:"\u6240\u6709\u5B57\u6BB5\u5C5E\u6027\u5747\u53EF\u4EE5\u662F\u4E00\u4E2A\u540C\u6B65\u6216\u5F02\u6B65\u51FD\u6570\u6216\u662F\u901A\u8FC7",paraId:51,tocIndex:11},{value:"computed",paraId:51,tocIndex:11},{value:"\u5305\u88C5\u7684\u8BA1\u7B97\u5C5E\u6027\uFF0C\u7528\u6765\u52A8\u6001\u8BA1\u7B97\u5B57\u6BB5\u7684\u5C5E\u6027\u503C\u3002",paraId:51,tocIndex:11},{value:"\u4EE5\u4E0B\u662F\u5B8C\u6574\u7684\u8868\u5355\u58F0\u660E:",paraId:52,tocIndex:12},{value:`import { computed,ComputedScopeRef } from "@speedform/reactive";
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
`,paraId:53,tocIndex:12},{value:"\u8BF4\u660E",paraId:54,tocIndex:12},{value:"fields",paraId:55,tocIndex:12},{value:"\u5C5E\u6027\u7528\u6765\u58F0\u660E\u8868\u5355\u7684\u6240\u6709\u5B57\u6BB5\u3002",paraId:55,tocIndex:12},{value:"\u8BE5\u8868\u5355\u7684\u5B57\u6BB5\u5305\u62EC",paraId:55,tocIndex:12},{value:"title",paraId:55,tocIndex:12},{value:"\u3001",paraId:55,tocIndex:12},{value:"interface",paraId:55,tocIndex:12},{value:"\u3001",paraId:55,tocIndex:12},{value:"ip",paraId:55,tocIndex:12},{value:"\u3001",paraId:55,tocIndex:12},{value:"gateway",paraId:55,tocIndex:12},{value:"\u3001",paraId:55,tocIndex:12},{value:"dhcp",paraId:55,tocIndex:12},{value:"\u3001",paraId:55,tocIndex:12},{value:"wifi",paraId:55,tocIndex:12},{value:"\u7B49\u5B57\u6BB5\u3002",paraId:55,tocIndex:12},{value:"\u6BCF\u4E2A\u5B57\u6BB5\u5747\u53EF\u4EE5\u58F0\u660E",paraId:55,tocIndex:12},{value:"value",paraId:55,tocIndex:12},{value:"\u3001",paraId:55,tocIndex:12},{value:"title",paraId:55,tocIndex:12},{value:"\u3001",paraId:55,tocIndex:12},{value:"placeholder",paraId:55,tocIndex:12},{value:"\u3001",paraId:55,tocIndex:12},{value:"validate",paraId:55,tocIndex:12},{value:"\u7B49\u5C5E\u6027\u3002",paraId:55,tocIndex:12},{value:"dhcp",paraId:55,tocIndex:12},{value:"\u3001",paraId:55,tocIndex:12},{value:"wifi",paraId:55,tocIndex:12},{value:"\u5B57\u6BB5\u662F\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5305\u542B",paraId:55,tocIndex:12},{value:"enable",paraId:55,tocIndex:12},{value:"\u3001",paraId:55,tocIndex:12},{value:"start",paraId:55,tocIndex:12},{value:"\u3001",paraId:55,tocIndex:12},{value:"end",paraId:55,tocIndex:12},{value:"\u3001",paraId:55,tocIndex:12},{value:"ssid",paraId:55,tocIndex:12},{value:"\u3001",paraId:55,tocIndex:12},{value:"password",paraId:55,tocIndex:12},{value:"\u7B49\u5B50\u5B57\u6BB5\u3002",paraId:55,tocIndex:12},{value:"wifi",paraId:55,tocIndex:12},{value:"\u5B57\u6BB5\u7684",paraId:55,tocIndex:12},{value:"visible",paraId:55,tocIndex:12},{value:"\u5C5E\u6027\u662F\u4E00\u4E2A\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u7528\u6765\u63A7\u5236",paraId:55,tocIndex:12},{value:"wifi",paraId:55,tocIndex:12},{value:"\u5B57\u6BB5\u7EC4\u7684\u663E\u793A\u3002",paraId:55,tocIndex:12},{value:"\u5728",paraId:56,tocIndex:13},{value:"SpeedForm",paraId:56,tocIndex:13},{value:"\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528",paraId:56,tocIndex:13},{value:"createForm",paraId:56,tocIndex:13},{value:"\u51FD\u6570\u6765\u521B\u5EFA\u8868\u5355\u5BF9\u8C61\u3002",paraId:56,tocIndex:13},{value:`// network/schema.ts
import { createForm } from '@speedform/core'
const schema = {...}  // \u5B8C\u6574\u58F0\u660E\u89C1\u4E0B\u4F8B
const Network = createForm<typeof networkSchema>(networkSchema,{debug:true})
export default Network

`,paraId:57,tocIndex:13},{value:"\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528",paraId:58,tocIndex:14},{value:"Network",paraId:58,tocIndex:14},{value:"\u8868\u5355\u5BF9\u8C61\u6765\u6E32\u67D3\u8868\u5355\u3002",paraId:58,tocIndex:14},{value:"@speedform/core",paraId:59},{value:"\u662F\u4E00\u4E2A",paraId:59},{value:"headless",paraId:59},{value:"\u7EC4\u4EF6\u5E93\uFF0C\u53EA\u63D0\u4F9B\u8868\u5355\u903B\u8F91\u63A7\u5236\uFF0C\u4E0D\u8D1F\u8D23\u5177\u4F53\u7684\u6E32\u67D3\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u672C\u4F8B\u4E2D\u6211\u4EEC\u4F7F\u7528\u6807\u51C6\u7684html\u7EC4\u4EF6\u6765\u6E32\u67D3\u8868\u5355\u3002\u7528\u6237\u53EF\u4EE5\u5F88\u5BB9\u6613\u5C31\u5F15\u5165\u5176\u4ED6UI\u7EC4\u4EF6\u5E93\u6765\u8FDB\u884C\u6E32\u67D3\u3002",paraId:59},{value:"\u901A\u8FC7\u8868\u5355\u5BF9\u8C61\u7684",paraId:60,tocIndex:15},{value:"Field",paraId:60,tocIndex:15},{value:"\u7EC4\u4EF6\u7528\u6765\u6E32\u67D3\u8868\u5355\u5B57\u6BB5\uFF0C\u5982\u4E0A\u4F8B\u4E2D\u7684",paraId:60,tocIndex:15},{value:"Network.Field",paraId:60,tocIndex:15},{value:"\u3002",paraId:60,tocIndex:15},{value:`
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
`,paraId:61,tocIndex:15},{value:"\u8BF4\u660E\uFF1A",paraId:62,tocIndex:15},{value:"Network.Field",paraId:63,tocIndex:15},{value:"\u7EC4\u4EF6\u7528\u6765\u63A7\u5236\u5982\u4F55\u8FDB\u884C\u8868\u5355\u5B57\u6BB5\u7684\u6E32\u67D3\u3002",paraId:63,tocIndex:15},{value:"Network.Field",paraId:63,tocIndex:15},{value:"\u7EC4\u4EF6\u7684",paraId:63,tocIndex:15},{value:"name",paraId:63,tocIndex:15},{value:"\u5C5E\u6027\u7528\u6765\u6307\u5B9A\u5B57\u6BB5\u7684\u8DEF\u5F84,\u53EF\u4EE5\u662F\u5D4C\u5957\u8DEF\u5F84\uFF0C\u5982",paraId:63,tocIndex:15},{value:"Network.fields.wifi.ssid",paraId:63,tocIndex:15},{value:"\u3002",paraId:63,tocIndex:15},{value:"\u53EF\u4EE5\u4E3A",paraId:63,tocIndex:15},{value:"Network.Field",paraId:63,tocIndex:15},{value:"\u7EC4\u4EF6\u6307\u5B9A\u7C7B\u578B\uFF0C\u4EE5\u4FBF\u5728",paraId:63,tocIndex:15},{value:"children",paraId:63,tocIndex:15},{value:"\u5C5E\u6027\u4E2D\u83B7\u5F97\u5B57\u6BB5\u7684\u7C7B\u578B\u63D0\u793A\u3002",paraId:63,tocIndex:15},{value:"Network.Field",paraId:63,tocIndex:15},{value:"\u7EC4\u4EF6\u7684",paraId:63,tocIndex:15},{value:"children",paraId:63,tocIndex:15},{value:"\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F20\u5165",paraId:63,tocIndex:15},{value:"props",paraId:63,tocIndex:15},{value:"\u662F\u4E00\u4E2A\u5B57\u6BB5\u7684\u63A7\u5236\u5C5E\u6027\uFF0C\u5305\u62EC",paraId:63,tocIndex:15},{value:"value",paraId:63,tocIndex:15},{value:"\u3001",paraId:63,tocIndex:15},{value:"required",paraId:63,tocIndex:15},{value:"\u3001",paraId:63,tocIndex:15},{value:"visible",paraId:63,tocIndex:15},{value:"\u3001",paraId:63,tocIndex:15},{value:"validate",paraId:63,tocIndex:15},{value:"\u3001",paraId:63,tocIndex:15},{value:"enable",paraId:63,tocIndex:15},{value:"\u3001",paraId:63,tocIndex:15},{value:"initial",paraId:63,tocIndex:15},{value:"\u3001",paraId:63,tocIndex:15},{value:"sync",paraId:63,tocIndex:15},{value:"\u7B49\u3002\u5E76\u4E14\u8FD9\u4E9B\u5B57\u6BB5\u63A7\u5236\u5C5E\u6027\u5747\u53EF\u4EE5\u662F\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u503C\u6765\u81EA\u5176\u4ED6\u5B57\u6BB5\u7684\u6D3E\u751F\u8BA1\u7B97\u7ED3\u679C\u3002",paraId:63,tocIndex:15},{value:"sync",paraId:63,tocIndex:15},{value:"\u51FD\u6570\u7528\u6765\u540C\u6B65\u5B57\u6BB5\u7684\u503C\u3002",paraId:63,tocIndex:15},{value:"\u5F53\u9700\u8981\u8FDB\u884C\u6807\u51C6\u8868\u5355\u63D0\u4EA4\u65F6\uFF0C\u9700\u8981\u4F7F\u7528\u4E00\u4E2A",paraId:64,tocIndex:16},{value:"Form",paraId:64,tocIndex:16},{value:"\u7EC4\u4EF6\u6765\u5305\u88F9\u6240\u6709\u7684",paraId:64,tocIndex:16},{value:"Field",paraId:64,tocIndex:16},{value:"\u7EC4\u4EF6\u3002",paraId:64,tocIndex:16},{value:`
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

`,paraId:65,tocIndex:16},{value:"\u8BF4\u660E\uFF1A",paraId:66,tocIndex:16},{value:"Network.Form",paraId:67,tocIndex:16},{value:"\u8868\u5355\u7EC4\u4EF6\u4EC5\u5728\u8FDB\u884C",paraId:67,tocIndex:16},{value:"\u6807\u51C6\u8868\u5355",paraId:67,tocIndex:16},{value:"\u63D0\u4EA4\u65F6\u4F7F\u7528\u3002",paraId:67,tocIndex:16},{value:"SpeedForm",paraId:67,tocIndex:16},{value:"\u652F\u6301\u8FDB\u884C",paraId:67,tocIndex:16},{value:"API",paraId:67,tocIndex:16},{value:"\u65B9\u5F0F\u91C7\u7528",paraId:67,tocIndex:16},{value:"AJAX",paraId:67,tocIndex:16},{value:"\u63D0\u4EA4\uFF0C\u6B64\u65F6\u53EF\u4EE5\u4E0D\u4F7F\u7528",paraId:67,tocIndex:16},{value:"Form",paraId:67,tocIndex:16},{value:"\u7EC4\u4EF6\u3002",paraId:67,tocIndex:16},{value:"\u6700\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u6DFB\u52A0",paraId:68,tocIndex:17},{value:"Network.Submit",paraId:68,tocIndex:17},{value:"\u7EC4\u4EF6\u6765\u8FDB\u884C\u63D0\u4EA4\u64CD\u4F5C\u3002",paraId:68,tocIndex:17},{value:"SpeedForm",paraId:68,tocIndex:17},{value:"\u652F\u6301\u6807\u51C6\u63D0\u4EA4\u6216",paraId:68,tocIndex:17},{value:"AJAX/API",paraId:68,tocIndex:17},{value:"\u65B9\u5F0F\u63D0\u4EA4\u8868\u5355\u3002",paraId:68,tocIndex:17},{value:"\u6807\u51C6\u63D0\u4EA4",paraId:69,tocIndex:18},{value:`<Network.Form action="/api/settings" method="post">
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

`,paraId:70,tocIndex:18},{value:"\u8BF4\u660E:",paraId:71,tocIndex:18},{value:"\u6807\u51C6\u63D0\u4EA4\u65F6\uFF0C\u9700\u8981\u5C06\u6240\u6709\u5B57\u6BB5\u5305\u88F9\u5728",paraId:72,tocIndex:18},{value:"Network.Form",paraId:72,tocIndex:18},{value:"\u7EC4\u4EF6\u5185\u90E8\u3002",paraId:72,tocIndex:18},{value:"Network.Submit",paraId:72,tocIndex:18},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E00\u4E2A\u9ED8\u8BA4\u7684\u63D0\u4EA4\u6309\u94AE\uFF0C\u7528\u6765\u63A7\u5236\u8868\u5355\u7684\u63D0\u4EA4\u64CD\u4F5C\u903B\u8F91\uFF0C\u4F46\u4E0D\u8D1F\u8D23\u5177\u4F53\u7684UI\u6E32\u67D3\u3002",paraId:72,tocIndex:18},{value:"\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4F1A\u4F7F\u7528",paraId:73,tocIndex:18},{value:"Network.Submit",paraId:73,tocIndex:18},{value:"\u7EC4\u4EF6\u7684",paraId:73,tocIndex:18},{value:"children",paraId:73,tocIndex:18},{value:"\u5C5E\u6027\u6765\u81EA\u5B9A\u4E49\u63D0\u4EA4\u6309\u94AE\u7684UI\u6E32\u67D3\u3002\u6BD5\u7ADF\u9ED8\u8BA4\u7684\u63D0\u4EA4\u6309\u94AE\u6837\u5F0F\u4E0D\u592A\u7B26\u5408\u8981\u6C42",paraId:73,tocIndex:18},{value:`<Network.Form url="api/settings">
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
`,paraId:74,tocIndex:18},{value:"\u8BF4\u660E",paraId:75,tocIndex:18},{value:":",paraId:75,tocIndex:18},{value:"Network.Submit",paraId:76,tocIndex:18},{value:"\u7EC4\u4EF6\u7684",paraId:76,tocIndex:18},{value:"children",paraId:76,tocIndex:18},{value:"\u5C5E\u6027\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u6E32\u67D3\u63D0\u4EA4\u6309\u94AE\u7684\u5177\u4F53\u5185\u5BB9\uFF0C\u4F20\u5165",paraId:76,tocIndex:18},{value:"props",paraId:76,tocIndex:18},{value:"\u662F\u4E00\u4E2A\u63D0\u4EA4\u6309\u94AE\u7684\u63A7\u5236\u5C5E\u6027\uFF0C\u5305\u62EC",paraId:76,tocIndex:18},{value:"title",paraId:76,tocIndex:18},{value:"\u3001",paraId:76,tocIndex:18},{value:"dirty",paraId:76,tocIndex:18},{value:"\u3001",paraId:76,tocIndex:18},{value:"validate",paraId:76,tocIndex:18},{value:"\u7B49\u3002",paraId:76,tocIndex:18},{value:"title",paraId:76,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u5B9A\u63D0\u4EA4\u6309\u94AE\u7684\u6807\u9898\u3002",paraId:76,tocIndex:18},{value:"dirty",paraId:76,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u793A\u8868\u5355\u662F\u5426\u5DF2\u7ECF\u88AB\u7F16\u8F91\u8FC7\u3002",paraId:76,tocIndex:18},{value:"validate",paraId:76,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u793A\u8868\u5355\u662F\u5426\u6709\u6548\uFF0C\u5176\u503C\u662F\u7531\u6240\u6709\u5B57\u6BB5\u7684",paraId:76,tocIndex:18},{value:"validate",paraId:76,tocIndex:18},{value:"\u8BA1\u7B97\u5C5E\u6027\u7684\u7ED3\u679C\u51B3\u5B9A\u7684\u3002",paraId:76,tocIndex:18},{value:"",paraId:77,tocIndex:19},{value:"",paraId:78,tocIndex:20},{value:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u7F51\u7EDC\u914D\u7F6E\u8868\u5355",paraId:79,tocIndex:21}]},60831:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(80619);const o=[{value:"Speed",paraId:0}]},21803:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(23752);const o=[{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u5F53\u6240\u4F9D\u8D56\u7684\u72B6\u6001\u503C\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u3002",paraId:0,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A",paraId:1,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\u6216\u8005\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A",paraId:2,tocIndex:0},{value:"Promise",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\u3002",paraId:2,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u7684\u5FC5\u987B\u663E\u5F0F\u6307\u5B9A\u4F9D\u8D56,\u4E0D\u80FD\u50CF\u540C\u6B65\u8BA1\u7B97\u4E00\u6837\u81EA\u52A8\u6536\u96C6\u4F9D\u8D56\u3002",paraId:2,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u4F1A\u88AB\u66FF\u6362\u4E3A",paraId:2,tocIndex:0},{value:"AsyncComputedObject",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\uFF0C\u901A\u8FC7\u8BE5\u5BF9\u8C61\u53EF\u4EE5\u8BFB\u53D6\u5230\u5F02\u6B65\u8BA1\u7B97\u7684\u8FDB\u5EA6\u4EE5\u53CA\u7ED3\u679C\u7B49\u3002",paraId:2,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u4F7F\u7528",paraId:3,tocIndex:1},{value:"computed",paraId:3,tocIndex:1},{value:"\u8FDB\u884C\u58F0\u660E\uFF0C\u65B9\u5F0F\u5982\u4E0B\uFF1A",paraId:3,tocIndex:1},{value:"\u4EE5\u4E0A",paraId:4},{value:"fullName",paraId:4},{value:"\u662F\u4E00\u4E2A\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u4F9D\u8D56\u4E8E",paraId:4},{value:"firstName",paraId:4},{value:"\u548C",paraId:4},{value:"lastName",paraId:4},{value:"\u3002",paraId:4},{value:"computed",paraId:4},{value:"\u51FD\u6570\u7528\u6765\u5C01\u88C5\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\uFF0C\u7528\u6765\u6307\u5B9A\u4F9D\u8D56\u7684\u72B6\u6001\u8DEF\u5F84\u3002",paraId:4},{value:"\u4F9D\u8D56\u53EF\u4EE5\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u6216\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4F7F\u7528",paraId:4},{value:".",paraId:4},{value:"\u4F5C\u4E3A\u8DEF\u5F84\u5206\u5272\u7B26\uFF0C",paraId:4},{value:"./",paraId:4},{value:"\u6307\u7684\u662F\u5F53\u524D\u5BF9\u8C61\uFF0C",paraId:4},{value:"../",paraId:4},{value:"\u6307\u7684\u662F\u7236\u5BF9\u8C61\u3002",paraId:4},{value:"\u5F53\u6211\u4EEC\u66F4\u65B0",paraId:4},{value:"firstName",paraId:4},{value:"\u6216",paraId:4},{value:"lastName",paraId:4},{value:"\u65F6\uFF0C",paraId:4},{value:"fullName",paraId:4},{value:"\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u3002",paraId:4},{value:"\u8BA1\u7B97\u5C5E\u6027\u7684\u7ED3\u679C\u4FDD\u5B58\u5728",paraId:4},{value:"state.user.fullName.result",paraId:4},{value:"\u4E2D\u3002",paraId:4},{value:"\u5F53\u8BA1\u7B97\u5C5E\u6027\u6B63\u5728\u8BA1\u7B97\u65F6\uFF0C",paraId:4},{value:"state.user.fullName.loading",paraId:4},{value:"\u4E3A",paraId:4},{value:"true",paraId:4},{value:"\u3002\u8BA1\u7B97\u5B8C\u6210\u540E\uFF0C",paraId:4},{value:"state.user.fullName.loading",paraId:4},{value:"\u4E3A",paraId:4},{value:"false",paraId:4},{value:"\u3002",paraId:4},{value:"\u4E0B\u9762\u662F\u4E00\u4E2A\u66F4\u52A0\u5B8C\u6574\u7684\u4F8B\u5B50\uFF1A",paraId:5},{value:"\u8BF4\u660E",paraId:6},{value:"\u4F7F\u7528",paraId:7},{value:"computed",paraId:7},{value:"\u51FD\u6570\u58F0\u660E\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C",paraId:7},{value:"computed",paraId:7},{value:`\u53C2\u6570\uFF1A
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
`,paraId:29,tocIndex:4},{value:"\u4F9D\u8D56\u53D6\u503C\u662F\u63D0\u5B9A\u5176\u5728\u72B6\u6001\u5BF9\u8C61\u7684\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u5B57\u7B26\u4E32\u6570\u7EC4\u3002",paraId:30,tocIndex:4},{value:"\u7EDD\u5BF9\u8DEF\u5F84",paraId:31,tocIndex:4},{value:"\u5F53\u4F9D\u8D56\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\u65F6\uFF0C\u4EE3\u8868\u5176\u5728\u5BF9\u8C61\u4E2D\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002\u5982",paraId:32,tocIndex:4},{value:'depends=[["a","b","c"],["x",1]]',paraId:32,tocIndex:4},{value:"\u4EE3\u8868\u5176\u4F9D\u8D56\u5BF9\u8C61\u4E2D\u7684",paraId:32,tocIndex:4},{value:"a.b.c",paraId:32,tocIndex:4},{value:"\uFF0C\u548C",paraId:32,tocIndex:4},{value:"x.1(x\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4F9D\u8D56\u5176\u7B2C1\u9879)",paraId:32,tocIndex:4},{value:"\u540C\u6837\u7684\u4F9D\u8D56\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u5F62\u5F0F\uFF0C\u4F7F\u7528",paraId:33,tocIndex:4},{value:"/",paraId:33,tocIndex:4},{value:"\u4F5C\u4E3A\u5206\u5272\u7B26\uFF0C",paraId:33,tocIndex:4},{value:'depends=["a/b/c","x/1"]',paraId:33,tocIndex:4},{value:"\u76F8\u5BF9\u8DEF\u5F84",paraId:34,tocIndex:4},{value:"\u4F9D\u8D56\u4E5F\u53EF\u4EE5\u662F\u6307\u5B9A\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u5C31\u5982\u540C\u6587\u4EF6\u5939\u8DEF\u5F84\u4E00\u6837\uFF0C\u4F7F\u7528",paraId:35,tocIndex:4},{value:"./",paraId:35,tocIndex:4},{value:"\u4EE3\u8868\u5F53\u524D\u8DEF\u5F84\uFF0C",paraId:35,tocIndex:4},{value:"../",paraId:35,tocIndex:4},{value:"\u4EE3\u8868\u7236\u8DEF\u5F84\u3002",paraId:35,tocIndex:4},{value:"\u91CD\u70B9\u5728\u4E8E\u8FD9\u4E2A\u76F8\u5BF9\u662F\u76F8\u5BF9\u8C01\uFF0C\u6211\u4EEC\u7528\u4E00\u4E2A\u4F8B\u5B50\u6765\u8BF4\u660E\u3002",paraId:36,tocIndex:4},{value:"\u6CE8\u610F\uFF1A",paraId:37},{value:"\u76F8\u5BF9\u8DEF\u5F84\u7684\u76F8\u5BF9\u6307\u7684\u662F",paraId:38},{value:"\u76F8\u5BF9\u4F7F\u7528",paraId:38},{value:"computed",paraId:38},{value:"\u58F0\u660E\u7684\u6570\u636E\u9879\u6240\u5728\u7684\u5BF9\u8C61",paraId:38},{value:"\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528",paraId:38},{value:"computed",paraId:38},{value:"\u58F0\u660E\u7684\u6570\u636E\u9879",paraId:38},{value:"\u4F9D\u8D56\u5206\u5272\u7B26\u4F7F\u7528",paraId:38},{value:".",paraId:38},{value:"\u5982\u679C\u5F02\u6B65\u8BA1\u7B97\u6CA1\u6709\u6307\u5B9A\u4F9D\u8D56\uFF0C\u5219\u8BE5\u8BA1\u7B97\u5C5E\u6027\u4E0D\u4F1A\u88AB\u89E6\u53D1\u91CD\u65B0\u8BA1\u7B97\uFF0C\u4F1A\u5728\u63A7\u5236\u53F0\u7ED9\u51FA\u4E00\u4E2A\u8B66\u544A\uFF0C\u4E5F\u53EF\u4EE5\u624B\u52A8\u6267\u884C\u3002",paraId:38},{value:"\u4E0D\u540C\u4E8E\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u6BCF\u4E00\u4E2A\u4FBF\u7528",paraId:39,tocIndex:5},{value:"computed",paraId:39,tocIndex:5},{value:"\u58F0\u660E\u7684\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u5747\u4F1A\u88AB\u66FF\u6362\u6210",paraId:39,tocIndex:5},{value:"AsyncComputedObject",paraId:39,tocIndex:5},{value:"\u5BF9\u8C61\uFF08\u539F\u5730\u79FB\u82B1\u63A5\u6728\uFF09\uFF0C\u901A\u8FC7\u8BE5\u5BF9\u8C61\uFF1A",paraId:39,tocIndex:5},{value:"\u53EF\u4EE5\u8BFB\u53D6\u5230\u5F02\u6B65\u8BA1\u7B97\u7684\u8FDB\u5EA6\u4EE5\u53CA\u7ED3\u679C\u7B49",paraId:40,tocIndex:5},{value:"\u63D0\u4F9B\u8D85\u65F6\u3001\u91CD\u8BD5\u7B49\u529F\u80FD",paraId:40,tocIndex:5},{value:"\u63D0\u4F9B\u5F02\u6B65\u8BA1\u7B97\u8FDB\u5EA6\u7B49\u529F\u80FD",paraId:40,tocIndex:5},{value:"AsyncComputedObject",paraId:41,tocIndex:5},{value:"\u5BF9\u8C61\u58F0\u660E\u5982\u4E0B\uFF1A",paraId:41,tocIndex:5},{value:`export type AsyncComputedObject<Result= any,ExtAttrs extends Dict = {}> ={
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
`,paraId:42,tocIndex:5},{value:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF0C",paraId:43,tocIndex:5},{value:"state.user.fullName",paraId:43,tocIndex:5},{value:"\u662F\u4E00\u4E2A",paraId:43,tocIndex:5},{value:"AsyncComputedObject",paraId:43,tocIndex:5},{value:"\u5BF9\u8C61\uFF0C\u901A\u8FC7\u8BE5\u5BF9\u8C61\u53EF\u4EE5\u8BFB\u53D6\u5230\u5F02\u6B65\u8BA1\u7B97\u7684\u8FDB\u5EA6\u4EE5\u53CA\u7ED3\u679C\u7B49\u3002",paraId:43,tocIndex:5},{value:`
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
`,paraId:44,tocIndex:5},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u7684\u52A0\u8F7D\u72B6\u6001\u4FDD\u5B58\u5728",paraId:45,tocIndex:6},{value:"AsyncComputedObject",paraId:45,tocIndex:6},{value:"\u5BF9\u8C61\u7684",paraId:45,tocIndex:6},{value:"loading",paraId:45,tocIndex:6},{value:"\u5C5E\u6027\u4E2D\uFF0C\u5F53",paraId:45,tocIndex:6},{value:"loading",paraId:45,tocIndex:6},{value:"\u4E3A",paraId:45,tocIndex:6},{value:"true",paraId:45,tocIndex:6},{value:"\u65F6\uFF0C\u4EE3\u8868\u5F02\u6B65\u8BA1\u7B97\u6B63\u5728\u8FDB\u884C\u4E2D\u3002",paraId:45,tocIndex:6},{value:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5F02\u6B65\u8BA1\u7B97\u52A0\u8F7D\u72B6\u6001\u7684\u4F8B\u5B50\uFF1A",paraId:46,tocIndex:6},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u7684\u6267\u884C\u8FDB\u5EA6\u4FDD\u5B58\u5728",paraId:47,tocIndex:7},{value:"AsyncComputedObject",paraId:47,tocIndex:7},{value:"\u5BF9\u8C61\u7684",paraId:47,tocIndex:7},{value:"progress",paraId:47,tocIndex:7},{value:"\u5C5E\u6027\u4E2D\uFF0C\u5F53",paraId:47,tocIndex:7},{value:"progress",paraId:47,tocIndex:7},{value:"\u4E3A",paraId:47,tocIndex:7},{value:"0-100",paraId:47,tocIndex:7},{value:"\u65F6\uFF0C\u4EE3\u8868\u5F02\u6B65\u8BA1\u7B97\u7684\u8FDB\u5EA6\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u6839\u636E\u8FDB\u5EA6\u503C\u6765\u5C55\u793A\u8FDB\u5EA6\u6761\u7B49\u3002",paraId:47,tocIndex:7},{value:"\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A",paraId:48,tocIndex:7},{value:"\u5728\u521B\u5EFA",paraId:49,tocIndex:8},{value:"computed",paraId:49,tocIndex:8},{value:"\u65F6\u53EF\u4EE5\u6307\u5B9A\u8D85\u65F6\u53C2\u6570(\u5355\u4F4D\u4E3A",paraId:49,tocIndex:8},{value:"ms",paraId:49,tocIndex:8},{value:")\uFF0C\u5B9E\u73B0",paraId:49,tocIndex:8},{value:"\u8D85\u65F6\u5904\u7406",paraId:49,tocIndex:8},{value:"\u548C",paraId:49,tocIndex:8},{value:"\u5012\u8BA1\u65F6",paraId:49,tocIndex:8},{value:"\u529F\u80FD\u3002\u57FA\u672C\u8FC7\u7A0B\u662F\u8FD9\u6837\u7684\u3002",paraId:49,tocIndex:8},{value:"\u6307\u5B9A",paraId:50,tocIndex:8},{value:"options.timeout=\u8D85\u65F6\u65F6\u95F4",paraId:50,tocIndex:8},{value:"\u5F53\u5F02\u6B65\u8BA1\u7B97\u5F00\u59CB\u65F6\uFF0C\u4F1A\u542F\u52A8\u4E00\u4E2A\u5B9A\u65F6\u5668\u65F6\uFF0C\u5E76\u66F4\u65B0",paraId:50,tocIndex:8},{value:"AsyncComputedObject",paraId:50,tocIndex:8},{value:"\u5BF9\u8C61\u7684",paraId:50,tocIndex:8},{value:"timeout",paraId:50,tocIndex:8},{value:"\u5C5E\u6027\u3002",paraId:50,tocIndex:8},{value:"\u5F53\u8D85\u65F6\u89E6\u53D1\u65F6\u4F1A\u89E6\u53D1",paraId:50,tocIndex:8},{value:"TIMEOUT",paraId:50,tocIndex:8},{value:"\u9519\u8BEF\uFF0C\u5C06\u9519\u8BEF\u66F4\u65B0\u5230",paraId:50,tocIndex:8},{value:"AsyncComputedObject.error",paraId:50,tocIndex:8},{value:"\u5C5E\u6027\u4E2D\u3002",paraId:50,tocIndex:8},{value:"\u5728",paraId:51,tocIndex:9},{value:"\u8D85\u65F6",paraId:51,tocIndex:9},{value:"\u529F\u80FD\u4E2D\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0",paraId:51,tocIndex:9},{value:"timeout",paraId:51,tocIndex:9},{value:"\u5C5E\u6027\uFF0C\u53EF\u4EE5\u901A\u8FC7",paraId:51,tocIndex:9},{value:"timeout=[\u8D85\u65F6\u65F6\u95F4,\u95F4\u9694\u66F4\u65B0\u65F6\u957F]",paraId:51,tocIndex:9},{value:"\u6765\u542F\u7528\u5012\u8BA1\u65F6\u529F\u80FD\u3002",paraId:51,tocIndex:9},{value:"\u57FA\u672C\u8FC7\u7A0B\u5982\u4E0B\uFF1A",paraId:52,tocIndex:9},{value:"\u6307\u5B9A",paraId:53,tocIndex:9},{value:"options.timoeut=[\u8D85\u65F6\u65F6\u95F4,\u95F4\u9694\u66F4\u65B0\u65F6\u957F]",paraId:53,tocIndex:9},{value:"\u5F53\u5F02\u6B65\u8BA1\u7B97\u5F00\u59CB\u65F6\uFF0C\u4F1A\u542F\u52A8\u4E00\u4E2A\u5B9A\u65F6\u5668\uFF0C\u66F4\u65B0",paraId:53,tocIndex:9},{value:"AsyncComputedObject",paraId:53,tocIndex:9},{value:"\u5BF9\u8C61\u7684",paraId:53,tocIndex:9},{value:"timeout",paraId:53,tocIndex:9},{value:"\u5C5E\u6027\u3002",paraId:53,tocIndex:9},{value:"\u7136\u540E\u6BCF\u9694",paraId:53,tocIndex:9},{value:"\u95F4\u9694\u66F4\u65B0\u65F6\u957F",paraId:53,tocIndex:9},{value:"\u7684\uFF0C\u5C31\u66F4\u65B0\u4E00\u6B21",paraId:53,tocIndex:9},{value:"AsyncComputedObject.timoeut",paraId:53,tocIndex:9},{value:"\u5F53\u8D85\u65F6\u89E6\u53D1\u65F6\u4F1A\u89E6\u53D1",paraId:53,tocIndex:9},{value:"TIMEOUT",paraId:53,tocIndex:9},{value:"\u9519\u8BEF\uFF0C\u5C06\u9519\u8BEF\u66F4\u65B0\u5230",paraId:53,tocIndex:9},{value:"AsyncComputedObject.error",paraId:53,tocIndex:9},{value:"\u5C5E\u6027\u4E2D\u3002",paraId:53,tocIndex:9},{value:"\u4F8B\u5982\uFF1A",paraId:54,tocIndex:9},{value:"options.timoeut=[5*1000,5]",paraId:54,tocIndex:9},{value:"\u4EE3\u8868\u8D85\u65F6\u65F6\u95F4\u4E3A5\u79D2\uFF0C\u6BCF1000ms\u66F4\u65B0\u4E00\u6B21",paraId:54,tocIndex:9},{value:"timeout",paraId:54,tocIndex:9},{value:"\u5C5E\u6027\uFF0C\u5012\u8BA1\u65F6",paraId:54,tocIndex:9},{value:"5",paraId:54,tocIndex:9},{value:"\u6B21\u3002",paraId:54,tocIndex:9},{value:"\u5728\u521B\u5EFA",paraId:55,tocIndex:10},{value:"computed",paraId:55,tocIndex:10},{value:"\u65F6\u53EF\u4EE5\u6307\u5B9A\u91CD\u8BD5\u53C2\u6570\uFF0C\u5B9E\u73B0",paraId:55,tocIndex:10},{value:"\u51FA\u9519\u91CD\u8BD5\u6267\u884C",paraId:55,tocIndex:10},{value:"\u7684\u529F\u80FD\u3002\u57FA\u672C\u8FC7\u7A0B\u662F\u8FD9\u6837\u7684\u3002",paraId:55,tocIndex:10},{value:"\u6307\u5B9A",paraId:56,tocIndex:10},{value:"options.retry=[\u91CD\u8BD5\u6B21\u6570,\u91CD\u8BD5\u95F4\u9694ms]",paraId:56,tocIndex:10},{value:"\u5F53\u5F00\u59CB\u6267\u884C\u5F02\u6B65\u8BA1\u7B97\u524D\uFF0C\u4F1A\u66F4\u65B0",paraId:56,tocIndex:10},{value:"AsyncComputedObject.retry",paraId:56,tocIndex:10},{value:"\u5C5E\u6027\u3002",paraId:56,tocIndex:10},{value:"\u5F53\u6267\u884C\u51FA\u9519\u65F6\uFF0C\u4F1A\u540C\u6B65\u66F4\u65B0",paraId:56,tocIndex:10},{value:"AsyncComputedObject.retry",paraId:56,tocIndex:10},{value:"\u5C5E\u6027\u4E3A\u91CD\u8BD5\u6B21\u6570\u3002",paraId:56,tocIndex:10},{value:"\u8BF4\u660E",paraId:57},{value:"\u91CD\u8BD5\u671F\u95F4",paraId:58},{value:"loading",paraId:58},{value:"\u4F1A\u4FDD\u6301\u4E3A",paraId:58},{value:"true",paraId:58},{value:"\u91CD\u8BD5\u6B21\u6570\u4E3A0\u65F6\uFF0C\u4E0D\u4F1A\u518D\u6B21\u91CD\u8BD5\u3002\u91CD\u8BD5\u6B21\u6570\u4E3A",paraId:58},{value:"N",paraId:58},{value:"\u65F6\uFF0C\u5B9E\u9645\u4F1A\u6267\u884C",paraId:58},{value:"N+1",paraId:58},{value:"\u6B21\u3002",paraId:58},{value:"\u91CD\u8BD5\u671F\u95F4",paraId:58},{value:"error",paraId:58},{value:"\u4F1A\u66F4\u65B0\u4E3A\u6700\u540E\u4E00\u6B21\u9519\u8BEF\u4FE1\u606F\u3002",paraId:58},{value:"\u5728\u521B\u5EFA",paraId:59,tocIndex:11},{value:"computed",paraId:59,tocIndex:11},{value:"\u65F6\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A",paraId:59,tocIndex:11},{value:"abortSignal",paraId:59,tocIndex:11},{value:"\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u8FD4\u56DE\u4E00\u4E2A",paraId:59,tocIndex:11},{value:"AbortSignal",paraId:59,tocIndex:11},{value:"\uFF0C\u7528\u6765\u53D6\u6D88\u8BA1\u7B97\u64CD\u4F5C\u3002",paraId:59,tocIndex:11},{value:"\u57FA\u672C\u64CD\u4F5C\u65B9\u6CD5\u662F\uFF1A",paraId:60,tocIndex:11},{value:"\u5728",paraId:61,tocIndex:11},{value:"computed",paraId:61,tocIndex:11},{value:"\u4E2D\u4F20\u5165",paraId:61,tocIndex:11},{value:"abortSignal",paraId:61,tocIndex:11},{value:"\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u662F\u4E00\u4E2A",paraId:61,tocIndex:11},{value:"AbortSignal",paraId:61,tocIndex:11},{value:"\uFF0C\u53EF\u7528\u6765\u8BA2\u9605",paraId:61,tocIndex:11},{value:"abort",paraId:61,tocIndex:11},{value:"\u4FE1\u53F7\u6216\u8005\u4F20\u9012\u7ED9",paraId:61,tocIndex:11},{value:"fetch",paraId:61,tocIndex:11},{value:"\u6216",paraId:61,tocIndex:11},{value:"axios",paraId:61,tocIndex:11},{value:"\u7B49\u3002",paraId:61,tocIndex:11},{value:"\u53D6\u6D88\u65F6\u53EF\u4EE5\u8C03\u7528",paraId:62,tocIndex:11},{value:"AsyncComputedObject.cancel()",paraId:62,tocIndex:11},{value:"\u65B9\u6CD5\u6765\u89E6\u53D1\u4E00\u4E2A",paraId:62,tocIndex:11},{value:"AbortSignal",paraId:62,tocIndex:11},{value:"\u4FE1\u53F7\u3002\u5982\u4E0B\u4F8B\u4E2D\u8C03\u7528",paraId:62,tocIndex:11},{value:"state.order.total.cancel()",paraId:62,tocIndex:11},{value:"\u6CE8\u610F",paraId:63},{value:"\uFF1A",paraId:63},{value:"abortSignal",paraId:64},{value:"\u53C2\u6570\u662F\u4E00\u4E2A",paraId:64},{value:"AbortSignal",paraId:64},{value:"\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u7528\u6765\u8BA2\u9605",paraId:64},{value:"abort",paraId:64},{value:"\u4FE1\u53F7\u6216\u8005\u4F20\u9012\u7ED9",paraId:64},{value:"fetch",paraId:64},{value:"\u6216",paraId:64},{value:"axios",paraId:64},{value:"\u7B49\u3002",paraId:64},{value:"\u9700\u8981\u6CE8\u610F\u7684\uFF0C\u5F53\u8C03\u7528",paraId:64},{value:"AsyncComputedObject.cancel()",paraId:64},{value:"\u65F6\uFF0C\u8BA1\u7B97\u51FD\u6570\u5982\u679C\u8BA2\u9605\u5E76\u63A5\u6536\u5230",paraId:64},{value:"abort",paraId:64},{value:"\u4FE1\u53F7\u65F6\uFF0C\u5E94\u8BE5\u4E3B\u52A8\u7ED3\u675F\u9000\u51FA\u8BA1\u7B97\u51FD\u6570\u3002\u5982\u679C\u8BA1\u7B97\u51FD\u6570\u6CA1\u6709\u8BA2\u9605",paraId:64},{value:"abort",paraId:64},{value:"\u4FE1\u53F7\uFF0C\u8C03\u7528",paraId:64},{value:"AsyncComputedObject.cancel()",paraId:64},{value:"\u662F\u4E0D\u4F1A\u751F\u6548\u7684\u3002",paraId:64},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u5F53\u4F9D\u8D56\u53D1\u751F\u53D8\u5316\u65F6\u5747\u4F1A\u6267\u884C\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570\uFF0C\u5728\u8FDE\u7EED\u53D8\u5316\u65F6\u5C31\u4F1A\u91CD\u590D\u6267\u884C\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570\u3002",paraId:65,tocIndex:12},{value:"\u5728\u58F0\u660E\u65F6\uFF0C\u5141\u8BB8\u6307\u5B9A",paraId:66,tocIndex:12},{value:"options.noReentry=true",paraId:66,tocIndex:12},{value:"\u6765\u9632\u6B62\u91CD\u5165\uFF0C\u5982\u679C\u91CD\u5165\u5219\u53EA\u4F1A\u5728\u63A7\u5236\u53F0\u663E\u793A\u4E00\u4E2A\u8B66\u544A\u3002",paraId:66,tocIndex:12},{value:"\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u5747\u5E94\u8BE5\u4F7F\u7528",paraId:67,tocIndex:13},{value:"computed",paraId:67,tocIndex:13},{value:"\u8FDB\u884C\u58F0\u660E\uFF0C\u4F46\u662F\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\u3002",paraId:67,tocIndex:13},{value:`const order = {
    bookName:"ZhangFisher",
    price:100,
    count:3,
    total:async (order)=>{
      return order.price*order.count
    }
} 
`,paraId:68,tocIndex:13},{value:"\u4E0A\u8FF0\u7B80\u5355\u7684\u5F02\u6B65\u58F0\u660E\u65B9\u5F0F\u7B49\u6548\u4E8E\u4EE5\u4E0B\u65B9\u5F0F\uFF1A",paraId:69,tocIndex:13},{value:"\u5F53\u4E0D\u4F7F\u7528",paraId:70},{value:"computed",paraId:70},{value:"\u8FDB\u884C\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u58F0\u660E\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9\uFF1A",paraId:70},{value:"\u9ED8\u8BA4",paraId:71},{value:"scope",paraId:71},{value:"\u6307\u5411\u7684\u662F",paraId:71},{value:"current",paraId:71},{value:"\uFF0C\u5373",paraId:71},{value:"total",paraId:71},{value:"\u6240\u5728\u7684\u5BF9\u8C61\u3002",paraId:71},{value:"\u5176\u4F9D\u8D56\u662F\u7A7A\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u81EA\u52A8\u6536\u96C6\u4F9D\u8D56\uFF0C\u4E5F\u4E0D\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u3002\u4E5F\u5C31\u662F\u8BF4\u4E0A\u4F8B\u4E2D\u7684",paraId:71},{value:"price",paraId:71},{value:"\u548C",paraId:71},{value:"count",paraId:71},{value:"\u53D8\u5316\u65F6\uFF0C",paraId:71},{value:"total",paraId:71},{value:"\u4E0D\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u3002\u4F46\u662F\u5728\u4F1A\u5728\u7B2C\u4E00\u6B21\u8BBF\u95EE\u65F6\u81EA\u52A8\u8BA1\u7B97\u4E00\u6B21\u3002",paraId:71},{value:"\u7279\u522B\u6CE8\u610F",paraId:72},{value:"\uFF1A\u7531\u4E8E\u5728\u4E0D\u540C\u7684\u6784\u5EFA\u73AF\u5883\u4E0B\uFF0C\u6BD4\u5982\u4F7F\u7528babel\u8F6C\u7801\u65F6\uFF0C\u53EF\u80FD\u4F1A\u5C06\u5F02\u6B65\u51FD\u6570\u8F6C\u7801\u4E3A\u540C\u6B65\u51FD\u6570\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u8BC6\u522B\u4E3A\u5F02\u6B65\u51FD\u6570\u800C\u51FA\u73B0\u95EE\u9898\u3002",paraId:72},{value:"\u770B\u770B\u4EE5\u4E0B\u4F8B\u5B50\uFF1A",paraId:73},{value:"\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u6B63\u786E\u8BA1\u7B97\u51FA",paraId:74},{value:"total",paraId:74},{value:"\u7684\u503C\uFF1F",paraId:74},{value:"\u53EF\u4EE5\u770B\u5230\u4E0A\u8FF0\u4F8B\u5B50\u4E2D",paraId:75},{value:"state.total",paraId:75},{value:"\u7684\u503C\u662F",paraId:75},{value:"[object Promise]",paraId:75},{value:`\u3002
\u8FD9\u662F\u56E0\u4E3A\u5728\u672C\u7AD9\u4F7F\u7528\u7684\u6784\u5EFA\u5DE5\u5177`,paraId:75},{value:"webpack",paraId:75},{value:"\u4F7F\u7528",paraId:75},{value:"babel",paraId:75},{value:"\u8FDB\u884C\u8F6C\u7801\uFF0C\u4EE5\u4E0A\u7684\u5F02\u6B65\u51FD\u6570\u88AB\u8F6C\u7801\u4E3A\u540C\u6B65\u51FD\u6570\uFF0C\u7C7B\u4F3C\u8FD9\u6837\u7684\u5F62\u5F0F\uFF1A",paraId:75},{value:`total(_x15) {
  return _total.apply(this, arguments);
}
`,paraId:76},{value:"\u8FD9\u5BFC\u81F4",paraId:77},{value:"Speedform",paraId:77},{value:"\u5C06\u5176\u8BC6\u522B\u4E3A\u5F02\u6B65\u51FD\u6570\uFF0C\u4E5F\u5C31\u4E0D\u80FD\u76F8\u5E94\u5730\u521B\u5EFA\u5F02\u6B65",paraId:77},{value:"AsyncComputedObject",paraId:77},{value:"\uFF0C\u800C\u53EA\u662F\u5C06\u5176\u5F53\u4F5C\u4E00\u4E2A\u666E\u901A\u7684\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\u3002",paraId:77},{value:"\u89E3\u51B3\u65B9\u6CD5\u662F\u663E\u5F0F\u6307\u5B9A",paraId:78},{value:"computed(async ()=>{...},[...],{async:true})",paraId:78},{value:"\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u6B63\u786E\u8BC6\u522B\u4E3A\u5F02\u6B65\u51FD\u6570\u3002",paraId:78}]},41820:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(69180);const o=[{value:"\u7EC6\u5FC3\u7684\u670B\u53CB\u53EF\u80FD\u53D1\u73B0\uFF0C\u5728\u4E0A\u9762\u7684",paraId:0,tocIndex:0},{value:"createStore",paraId:0,tocIndex:0},{value:"\u4E2D\u6211\u4EEC\u6CA1\u6709\u58F0\u660E\u4EFB\u4F55\u7684\u8BA1\u7B97\u5C5E\u6027\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u662F\u4E0D\u652F\u6301\u8BA1\u7B97\u5C5E\u6027\uFF0C\u800C\u662F",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u4E86",paraId:0,tocIndex:0},{value:"\u72EC\u7279\u7684\u8BA1\u7B97\u5C5E\u6027\u7684\u58F0\u660E\u65B9\u5F0F",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u7684\u8BA1\u7B97\u5C5E\u6027\u7684\u58F0\u660E\u65B9\u5F0F\u662F",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u4E4B\u6240\u4EE5\u80FD\u63D0\u4F9B\u65E0\u4EE5\u4F26\u6BD4\u7528\u6237\u5F00\u53D1\u4F53\u9A8C\u7684\u5173\u952E\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:1},{value:"\u5B9E\u73B0\u4E86\u6700\u72EC\u7279\u7684\u79FB\u82B1\u63A5\u6728\u5F0F\u7684\u8BA1\u7B97\u5C5E\u6027\u5B9E\u73B0\u65B9\u5F0F",paraId:1},{value:"\u57FA\u672C\u8FC7\u7A0B\u5982\u4E0B\uFF1A",paraId:2},{value:"\u9996\u5148\u76F4\u63A5\u5728",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u58F0\u660E\u8BA1\u7B97\u5C5E\u6027\u51FD\u6570\uFF0C\u5982",paraId:3},{value:"fullName=(user)=>user.first+user.last",paraId:3},{value:"\u3002",paraId:3},{value:"\u8C03\u7528",paraId:3},{value:"createStore",paraId:3},{value:"\u521B\u5EFA",paraId:3},{value:"Store",paraId:3},{value:"\u65F6\uFF0C\u4F1A\u6839\u636E",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u7684\u51FD\u6570\u6765\u521B\u5EFA",paraId:3},{value:"mutate",paraId:3},{value:"\u6216",paraId:3},{value:"computed",paraId:3},{value:"(\u5728",paraId:3},{value:"helux",paraId:3},{value:"\u4E2D\u53EB\u6D3E\u751F\u5BF9\u8C61\uFF0C\u5728\u5176\u4ED6\u72B6\u6001\u5E93\u4E2D\u53EF\u80FD\u53EB\u8BA1\u7B97\u7B97\u5C5E\u6027)\u3002",paraId:3},{value:"\u5982\u6B64\uFF0C\u5F53",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1\u8BA1\u7B97\u5C5E\u6027\u7684\u91CD\u65B0\u8BA1\u7B97\uFF0C\u5C06\u8BA1\u7B97\u7ED3\u679C\u8D4B\u503C\u7ED9",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u7684\u5BF9\u5E94\u5C5E\u6027\u3002\u5728\u4E0A\u56FE\u4E2D\uFF0C\u5F53",paraId:3},{value:"firstName",paraId:3},{value:"\u548C",paraId:3},{value:"lastName",paraId:3},{value:"\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1",paraId:3},{value:"fullName(mutate)",paraId:3},{value:"\u7684\u91CD\u65B0\u8BA1\u7B97\uFF0C\u5C06\u8BA1\u7B97\u7ED3\u679C\u8D4B\u503C\u7ED9",paraId:3},{value:"user.fullName",paraId:3},{value:"\u5C5E\u6027\u3002\u8FD9\u6837\uFF0C\u5F53\u6211\u4EEC\u8BBF\u95EE",paraId:3},{value:"state.fullName",paraId:3},{value:"\u65F6,\u5C31\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E86\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u51FD\u6570\u4E86\u3002",paraId:3},{value:"\u4EE5\u4E0A\u5C31\u662F",paraId:4},{value:"@speedform/reactive",paraId:4},{value:"\u8BA1\u7B97\u5C5E\u6027\u79FB\u82B1\u63A5\u6728\u7684\u8FC7\u7A0B\u539F\u7406,\u5927\u5BB6\u53EF\u4EE5\u4ECE\u4E0B\u9762\u793A\u5217\u4E2D\u52A0\u6DF1\u7406\u89E3\u3002",paraId:4},{value:"\u5728\u4E0A\u4F8B\u4E2D\uFF1A",paraId:5},{value:"user.fullName",paraId:6},{value:"\u662F\u4E00\u4E2A\u51FD\u6570",paraId:6},{value:"store.state.fullName",paraId:6},{value:"\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32",paraId:6},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",paraId:6},{value:"createStore",paraId:6},{value:"\u76F4\u63A5\u5728\u8F93\u5165\u7684",paraId:6},{value:"user",paraId:6},{value:"\u4E0A\u8FDB\u884C\u521B\u5EFA\uFF0C\u6307\u5B9A",paraId:6},{value:"singleton:false",paraId:6},{value:"\u65F6\u4F1A\u6DF1\u62F7\u8D1D\u4E00\u4EFD",paraId:6},{value:"user",paraId:6},{value:"\uFF0C\u7136\u540E\u5728\u62F7\u8D1D\u7684",paraId:6},{value:"user",paraId:6},{value:"\u4E0A\u521B\u5EFA",paraId:6},{value:"mutate",paraId:6},{value:"\u6216",paraId:6},{value:"computed",paraId:6},{value:"\u3002",paraId:6},{value:"\u5728\u5B66\u4E60\u5982\u4F55\u58F0\u660E\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u6765\u4E86\u89E3\u4E00\u4E0B",paraId:7,tocIndex:2},{value:"\u8BA1\u7B97\u4F5C\u7528\u57DF - Scope",paraId:7,tocIndex:2},{value:"\u7684\u6982\u5FF5\u3002",paraId:7,tocIndex:2},{value:"\u8BA1\u7B97\u4F5C\u7528\u57DF",paraId:8},{value:"\u6307\u7684\u662F\u4F20\u9012\u7ED9\u8BA1\u7B97\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570",paraId:8},{value:"@speedform/reactive",paraId:9},{value:"\u5728\u521B\u5EFA",paraId:9},{value:"Store",paraId:9},{value:"\u65F6\uFF0C\u652F\u6301\u914D\u7F6E",paraId:9},{value:"scope",paraId:9},{value:"\u53C2\u6570\u6765\u6307\u5B9A\u8BA1\u7B97\u5C5E\u6027\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5982\u4E0B\uFF1A",paraId:9},{value:`export enum ComputedScopeRef{
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

`,paraId:10},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",paraId:11,tocIndex:3},{value:"scope==ComputedScopeRef.Current",paraId:11,tocIndex:3},{value:"\u65F6\uFF0C\u8BA1\u7B97\u51FD\u6570\u7684",paraId:11,tocIndex:3},{value:"this",paraId:11,tocIndex:3},{value:"\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u7684\u5BF9\u8C61\u3002",paraId:11,tocIndex:3},{value:"@speedform/reactive",paraId:12,tocIndex:5},{value:"\u4F1A\u5C06\u8BA1\u7B97\u5C5E\u51FD\u6570\u7684",paraId:12,tocIndex:5},{value:"scope",paraId:12,tocIndex:5},{value:"\u6307\u5411",paraId:12,tocIndex:5},{value:"ComputedScopeRef.Root",paraId:12,tocIndex:5},{value:"\uFF0C\u5373\u5F53\u524D\u7684",paraId:12,tocIndex:5},{value:"State",paraId:12,tocIndex:5},{value:"\u6839\u5BF9\u8C61\uFF0C\u5982\u4E0B\uFF1A",paraId:12,tocIndex:5},{value:"\u5F53",paraId:13,tocIndex:7},{value:"scope==ComputedScopeRef.Parent",paraId:13,tocIndex:7},{value:"\u65F6\uFF0C\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u7684\u5BF9\u8C61\u7684\u7236\u5BF9\u8C61\u3002",paraId:13,tocIndex:7},{value:"\u5F53",paraId:14,tocIndex:9},{value:"store.options.scope==<\u5B57\u7B26\u4E32>",paraId:14,tocIndex:9},{value:"\u65F6\uFF0C\u6B64\u65F6",paraId:14,tocIndex:9},{value:"<\u5B57\u7B26\u4E32>",paraId:14,tocIndex:9},{value:"\u5C31\u662F\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61\u7684\u952E\u540D\u79F0\u3002",paraId:14,tocIndex:9},{value:"computedThis='firstName'",paraId:15},{value:"\u4EE3\u8868",paraId:15},{value:"this",paraId:15},{value:"\u6307\u5411",paraId:15},{value:"user.firstName",paraId:15},{value:",\u4E5F\u5C31\u662F\u5F53\u524D\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61\u7684",paraId:15},{value:"firstName",paraId:15},{value:"\u6210\u5458\u3002",paraId:15},{value:"computedThis='address.city'",paraId:15},{value:"\u4EE3\u8868",paraId:15},{value:"this",paraId:15},{value:"\u6307\u5411",paraId:15},{value:"user.address.city",paraId:15},{value:"\u603B\u4E4B\uFF0C\u5F53",paraId:15},{value:"computedThis",paraId:15},{value:"\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u65F6\uFF0C\u4EE3\u8868\u662F",paraId:15},{value:"\u5F53\u524D\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61\u7684\u6307\u5B9A\u952E\u540D\u79F0",paraId:15},{value:"\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u952E\u540D\u79F0\u53EF\u4EE5\u662F\u591A\u7EA7\u7684\uFF0C\u5982",paraId:15},{value:"address.city",paraId:15},{value:"\u3002",paraId:15},{value:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",paraId:16},{value:"\u4E0E",paraId:16},{value:"scope==<\u5B57\u7B26\u4E32>",paraId:16},{value:"\u7684\u533A\u522B\u5728\u4E8E:",paraId:16},{value:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",paraId:17},{value:"\u4EE3\u8868\u662F\u4EE5",paraId:17},{value:"\u6839\u5BF9\u8C61",paraId:17},{value:"\u4E3A\u8D77\u70B9\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8DEF\u5F84\u53EF\u4EE5\u662F\u591A\u7EA7\u7684\uFF0C\u5982",paraId:17},{value:"['user','address','city']",paraId:17},{value:"\u3002",paraId:17},{value:"scope==<\u5B57\u7B26\u4E32>",paraId:17},{value:"\u4EE3\u8868\u662F\u4EE5",paraId:17},{value:"\u5F53\u524D\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61",paraId:17},{value:"\u4E3A\u8D77\u70B9\u7684\u8DEF\u5F84\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u952E\u540D\u79F0\u53EF\u4EE5\u662F\u591A\u7EA7\u7684\uFF0C\u5982",paraId:17},{value:"address.city",paraId:17},{value:"\u3002",paraId:17},{value:"\u5F53",paraId:18,tocIndex:13},{value:"scope==ComputedScopeRef.Depends",paraId:18,tocIndex:13},{value:"\u65F6\uFF0C\u8BA1\u7B97\u51FD\u6570\u7684",paraId:18,tocIndex:13},{value:"this",paraId:18,tocIndex:13},{value:"\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u7684\u4F9D\u8D56\u9879\u7684\u503C\u3002",paraId:18,tocIndex:13},{value:"ComputedScopeRef.Depends",paraId:19,tocIndex:13},{value:"\u4EC5\u5728\u5F02\u6B65\u8BA1\u7B97\u65F6\u751F\u6548,\u800C\u5F02\u6B65\u8BA1\u7B97\u5FC5\u987B\u901A\u8FC7computed\u51FD\u6570\u6765\u6307\u5B9A\u4F9D\u8D56",paraId:19,tocIndex:13}]},40508:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(68282);const o=[{value:"\u5F53\u4F7F\u7528",paraId:0,tocIndex:0},{value:"computed",paraId:0,tocIndex:0},{value:"\u521B\u5EFA\u597D\u8BA1\u7B97\u5C5E\u6027\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7",paraId:0,tocIndex:0},{value:"store.computedObjects",paraId:0,tocIndex:0},{value:"\u6765\u7BA1\u7406\u6240\u6709",paraId:0,tocIndex:0},{value:"store",paraId:0,tocIndex:0},{value:"\u5185\u7684\u8BA1\u7B97\u5C5E\u6027\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7",paraId:1,tocIndex:0},{value:"store.computedObjects",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u8BBF\u95EE\u5230\u6240\u6709\u7684\u8BA1\u7B97\u5BF9\u8C61\uFF0C\u8BA1\u7B97\u5BF9\u8C61\u662F\u4E00\u4E2A",paraId:1,tocIndex:0},{value:"Map",paraId:1,tocIndex:0},{value:"\u5BF9\u8C61\uFF0C\u5176\u4E2D\u7684",paraId:1,tocIndex:0},{value:"key",paraId:1,tocIndex:0},{value:"\u662F\u8BA1\u7B97\u5BF9\u8C61\u7684",paraId:1,tocIndex:0},{value:"name",paraId:1,tocIndex:0},{value:"\uFF0C",paraId:1,tocIndex:0},{value:"value",paraId:1,tocIndex:0},{value:"\u662F\u8BA1\u7B97\u5BF9\u8C61\u7684",paraId:1,tocIndex:0},{value:"value",paraId:1,tocIndex:0},{value:"\u3002",paraId:1,tocIndex:0},{value:"\u8BF4\u660E",paraId:2},{value:":",paraId:2},{value:"\u4EE5\u4E0A\u521B\u5EFA\u4E86\u4E00",paraId:3},{value:"fullName",paraId:3},{value:"\u548C",paraId:3},{value:"fullName2",paraId:3},{value:"\u4E24\u4E2A\u8BA1\u7B97\u5C5E\u6027",paraId:3},{value:"store.computedObjects",paraId:3},{value:"\u662F\u4E00\u4E2A",paraId:3},{value:"Map",paraId:3},{value:"\u5BF9\u8C61,\u53EF\u4EE5\u901A\u8FC7",paraId:3},{value:'store.computedObjects.get("user/fullName")',paraId:3},{value:"\u6765\u83B7\u53D6",paraId:3},{value:"fullName",paraId:3},{value:"\u7684\u8BA1\u7B97\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u662F\u4E00\u4E2A",paraId:3},{value:"ComputedObject",paraId:3},{value:"\u5B9E\u4F8B\u3002",paraId:3},{value:"ComputedObject",paraId:3},{value:"\u5B9E\u4F8B\u6709\u4E00\u4E2A",paraId:3},{value:"run",paraId:3},{value:"\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\u3002",paraId:3},{value:"\u5BF9\u4E8E\u5F02\u6B65\u8BA1\u7B97\u5373\u53EF\u4EE5\u901A\u8FC7",paraId:3},{value:'store.computedObjects.get("user/fullName2").run()',paraId:3},{value:"\u6765\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7",paraId:3},{value:"store.state.user.fullName2.run()",paraId:3},{value:"\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\u3002\u800C\u540C\u6B65\u8BA1\u7B97\u53EA\u80FD\u901A\u8FC7",paraId:3},{value:'store.computedObjects.get("user/fullName").run()',paraId:3},{value:"\u6765\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\u3002",paraId:3},{value:"\u6BCF\u4E00\u4E2A\u8BA1\u7B97\u51FD\u6570\u5747\u4F1A\u521B\u5EFA\u4E00\u4E2A",paraId:4,tocIndex:1},{value:"ComputedObject",paraId:4,tocIndex:1},{value:"\u5B9E\u4F8B\uFF0C\u4FDD\u5B58\u5728",paraId:4,tocIndex:1},{value:"store.computedObjects",paraId:4,tocIndex:1},{value:",\u8BE5\u5BF9\u8C61\u6709\u4EE5\u4E0B\u5C5E\u6027\u548C\u65B9\u6CD5:",paraId:4,tocIndex:1},{value:`export interface ComputedObject<T=Dict> {
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
\u5F53\u4F7F\u7528`,paraId:7,tocIndex:2},{value:"computed",paraId:7,tocIndex:2},{value:"\u65B9\u6CD5\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u65F6\uFF0C\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A",paraId:7,tocIndex:2},{value:"group",paraId:7,tocIndex:2},{value:"\u53C2\u6570\uFF0C\u7528\u6765\u4E3A\u8BA1\u7B97\u5C5E\u6027\u5206\u7EC4\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u901A\u8FC7",paraId:7,tocIndex:2},{value:"runGroup",paraId:7,tocIndex:2},{value:"\u65B9\u6CD5\uFF0C\u7528\u6765\u624B\u52A8\u6267\u884C\u8BE5\u5206\u7EC4\u8BA1\u7B97\u51FD\u6570\u3002",paraId:7,tocIndex:2},{value:"\u4EE5\u4E0A\u6211\u4EEC\u5C06\u6240\u6709\u8BA1\u7B97\u51FD\u6570\u7684\u4F9D\u8D56\u5747\u8BBE\u4E3A",paraId:8},{value:"[]",paraId:8},{value:"\uFF0C\u4E5F\u5C31\u662F\u65E0\u4F9D\u8D56\uFF0C\u56E0\u6B64\u5F53",paraId:8},{value:"book.price",paraId:8},{value:",",paraId:8},{value:"book.count",paraId:8},{value:"\u7684\u503C\u53D8\u5316\u65F6\uFF0C",paraId:8},{value:"Total Group",paraId:8},{value:"\u548C",paraId:8},{value:"Average Group",paraId:8},{value:"\u7684\u8BA1\u7B97\u5C5E\u6027\u5E76\u4E0D\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\uFF0C\u6B64\u65F6\u5C31\u9700\u8981\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u3002",paraId:8},{value:"Q",paraId:9},{value:": \u4E3A\u4EC0\u4E48\u6B64\u5904\u8981\u6307\u5B9A",paraId:9},{value:"async=true",paraId:9},{value:"?",paraId:9},{value:"A",paraId:9},{value:": \u56E0\u6B64\u672C\u7AD9\u4F7F\u7528",paraId:9},{value:"webpack/babel",paraId:9},{value:"\u8FDB\u884C\u8F6C\u7801\uFF0C\u5F02\u6B65\u51FD\u6570\u4F1A\u88AB\u8F6C\u7801\u4E3A\u540C\u6B65\u51FD\u6570\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u81EA\u52A8\u8BC6\u522B",paraId:9},{value:"async",paraId:9},{value:"\u51FD\u6570\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u6307\u5B9A",paraId:9},{value:"async=true",paraId:9},{value:"computed",paraId:10,tocIndex:3},{value:"\u63D0\u4F9B\u4E86\u4E00\u4E2A",paraId:10,tocIndex:3},{value:"enable",paraId:10,tocIndex:3},{value:"\u5C5E\u6027\u7528\u6765\u63A7\u5236\u662F\u5426\u8FDB\u884C\u8BA1\u7B97\u3002\u5F53",paraId:10,tocIndex:3},{value:"enable=false",paraId:10,tocIndex:3},{value:"\u65F6\uFF0C\u5F53\u4F9D\u8D56\u53D8\u5316\u65F6\u4E0D\u4F1A\u8FDB\u884C\u8BA1\u7B97\uFF0C\u76F4\u81F3",paraId:10,tocIndex:3},{value:"enable=true",paraId:10,tocIndex:3},{value:"\u3002",paraId:10,tocIndex:3},{value:"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u6CD5\u6765\u542F\u7528/\u7981\u7528\u8BA1\u7B97\u3002",paraId:11,tocIndex:3},{value:"\u53EF\u4EE5\u5728\u4F7F\u7528",paraId:12,tocIndex:3},{value:"computed",paraId:12,tocIndex:3},{value:"\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u65F6\uFF0C\u4F20\u5165",paraId:12,tocIndex:3},{value:"enable",paraId:12,tocIndex:3},{value:"\u6765\u6307\u5B9A\u8BA1\u7B97\u5C5E\u6027\u7684\u9ED8\u8BA4\u72B6\u6001\u3002",paraId:12,tocIndex:3},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:12,tocIndex:3},{value:"ComputedObjects.get(<\u8DEF\u5F84\u540D\u79F0>)",paraId:12,tocIndex:3},{value:"\u6765\u542F\u7528/\u7981\u7528\u8BA1\u7B97\u3002",paraId:12,tocIndex:3},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:12,tocIndex:3},{value:"ComputedObjects.enableGroup(<true/false>)",paraId:12,tocIndex:3},{value:"\u6765\u542F\u7528/\u7981\u7528\u67D0\u4E2A\u7EC4\u7684\u8BA1\u7B97\u3002",paraId:12,tocIndex:3},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528",paraId:13,tocIndex:4},{value:"computed(getter,deps,options)",paraId:13,tocIndex:4},{value:"\u65B9\u6CD5\u6765\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027,\u901A\u8FC7",paraId:13,tocIndex:4},{value:'store.computedObject.get("<\u8DEF\u5F84>")',paraId:13,tocIndex:4},{value:"\u83B7\u53D6\u5230",paraId:13,tocIndex:4},{value:"ComputedObject",paraId:13,tocIndex:4},{value:"\u5B9E\u4F8B\uFF0C\u7136\u540E\u901A\u8FC7",paraId:13,tocIndex:4},{value:"ComputedObject",paraId:13,tocIndex:4},{value:"\u5B9E\u4F8B\u6765\u8BFB\u53D6\u548C\u4FEE\u6539\u8BA1\u7B97\u5C5E\u6027\u7684\u53C2\u6570\u3002",paraId:13,tocIndex:4}]},27828:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(22421);const o=[{value:"\u65E0\u8BBA\u662F\u540C\u6B65\u6216\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u5747\u63A8\u8350\u4F7F\u7528",paraId:0},{value:"computed",paraId:0},{value:"\u51FD\u6570\u6765\u58F0\u660E\u3002",paraId:0},{value:"computed",paraId:1,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u4E8E\u58F0\u660E\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u51FD\u6570\u7B7E\u540D\u58F0\u660E\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:`export function computed<R = any,ExtraAttrs extends Dict = {}>( getter: AsyncComputedGetter<R>,depends?:ComputedDepends,options?: ComputedOptions<R,ExtraAttrs>): ComputedDescriptor<R & ExtraAttrs>;
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

`,paraId:7,tocIndex:2}]},31516:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(69);const o=[{value:"\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\u76F4\u63A5\u58F0\u660E\u5728\u72B6\u6001\u4E2D\uFF0C\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u666E\u901A\u7684\u51FD\u6570\uFF0C,\u5F53",paraId:0,tocIndex:0},{value:"State",paraId:0,tocIndex:0},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1\u8BA1\u7B97\u5C5E\u6027\u7684\u91CD\u65B0\u8BA1\u7B97\uFF0C\u5C06\u8BA1\u7B97\u7ED3\u679C\u8D4B\u503C\u7ED9",paraId:0,tocIndex:0},{value:"State",paraId:0,tocIndex:0},{value:"\u4E2D\u7684\u5BF9\u5E94\u5C5E\u6027\u3002",paraId:0,tocIndex:0},{value:"\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\u7684\u4F9D\u8D56\u6536\u96C6\u662F\u81EA\u52A8\u7684\uFF0C\u4E0D\u9700\u8981\u663E\u5F0F\u6307\u5B9A\u4F9D\u8D56\u53C2\u6570\uFF0C\u5F53",paraId:1,tocIndex:1},{value:"State",paraId:1,tocIndex:1},{value:"\u4E2D\u7684\u6240\u4F9D\u8D56\u7684\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1\u8BA1\u7B97\u5C5E\u6027\u7684\u91CD\u65B0\u8BA1\u7B97\u3002",paraId:1,tocIndex:1},{value:`const state = {
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

`,paraId:17,tocIndex:4}]},49170:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(15101);const o=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u5E95\u5C42\u7684\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7531",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u9A71\u52A8\uFF0C",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u5177\u5907\u6D3E\u751F\u8BA1\u7B97\u3001\u4F9D\u8D56\u6536\u96C6\u3001\u4FE1\u53F7\u7684\u54CD\u5E94\u5F0F\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u5B83\u7684\u8BBE\u8BA1\u7406\u5FF5\u4E0E",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u8BBE\u8BA1\u7406\u5FF5\u9AD8\u5EA6\u5951\u5408\uFF0C\u4E3A",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u6570\u636E\u9A71\u52A8\u80FD\u529B\u3002",paraId:1,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u662F\u5728",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u7684\u57FA\u7840\u4E0A\uFF0C\u5C01\u88C5\u4E86\u7528\u6765\u63D0\u4F9B\u66F4\u52A0\u6613\u7528\u53CB\u597D\u7684\u72B6\u6001\u5E93\u7BA1\u7406\u3002",paraId:1,tocIndex:0},{value:"\u4F5C\u4E3A",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u5E95\u5C42\u4F9D\u8D56\uFF0C\u4E86\u89E3\u548C\u638C\u63E1",paraId:1,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u7684\u539F\u7406\u548C\u4F7F\u7528\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8BA9\u4F60\u66F4\u52A0\u6DF1\u5165\u7406\u89E3",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u8BBE\u8BA1\u7406\u5FF5\u548C\u4F7F\u7528\u65B9\u6CD5\u3002",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:2,tocIndex:1},{value:"\u4F9D\u8D56\u4E8E",paraId:2,tocIndex:1},{value:"@speedform/reactive",paraId:2,tocIndex:1},{value:"\uFF0C\u5B89\u88C5",paraId:2,tocIndex:1},{value:"SpeedForm",paraId:2,tocIndex:1},{value:"\u540E\u5C31\u5DF2\u7ECF\u5B89\u88C5\u4E86",paraId:2,tocIndex:1},{value:"@speedform/reactive",paraId:2,tocIndex:1},{value:"\uFF0C\u4E5F\u53EF\u4EE5\u72EC\u7ACB\u5B89\u88C5\u4F7F\u7528",paraId:2,tocIndex:1},{value:"@speedform/reactive",paraId:2,tocIndex:1},{value:"\u3002",paraId:2,tocIndex:1},{value:`
pnpm add @speedform/reactive
npm install @speedform/reactive
yarn add @speedform/reactive

`,paraId:3,tocIndex:1}]},19752:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(18395);const o=[{value:"\u5F53\u72B6\u6001\u53D8\u5316\u65F6\u5C06\u89E6\u53D1\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\uFF0C",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u63D0\u4F9B\u66F4\u52A0\u7EC6\u7C92\u5EA6\u7684\u6E32\u67D3\u3002",paraId:0,tocIndex:0},{value:"\u4F5C\u4E3A\u5BF9\u6BD4\uFF0C\u6211\u4EEC\u5148\u770B\u4E00\u4E2A\u4F20\u7EDF\u7684",paraId:1,tocIndex:1},{value:"Context",paraId:1,tocIndex:1},{value:"\u7684\u6E32\u67D3\u4F8B\u5B50\u3002",paraId:1,tocIndex:1},{value:"\u4ECE\u4E0A\u9762\u7684\u4F8B\u5B50\u53EF\u770B\u5230\uFF0C\u5F53\u66F4\u65B0",paraId:2},{value:"Context.age",paraId:2},{value:"\u65F6\uFF0C\u6240\u6709\u7684\u5B50\u7EC4\u4EF6\u4E0D\u7BA1\u662F\u5426\u6709\u4F7F\u7528",paraId:2},{value:"Age",paraId:2},{value:"\u5747\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C\u8FD9\u662F\u4E0D\u5FC5\u8981\u7684\uFF0C\u56E0\u4E3A\u5B50\u7EC4\u4EF6\u5E76\u6CA1\u6709\u4F7F\u7528\u5230",paraId:2},{value:"Context",paraId:2},{value:"\u7684\u6570\u636E\uFF0C\u4E3A\u6B64\u6211\u4EEC\u4E00\u822C\u9700\u8981\u4F7F\u7528",paraId:2},{value:"React.memo",paraId:2},{value:"\u6216\u4E00\u4E9B\u7B2C\u4E09\u65B9\u5E93\u6765\u8FDB\u884C\u4F18\u5316\u6E32\u67D3\u3002",paraId:2},{value:"\u6700\u5927\u7684\u95EE\u9898\u5728\u4E8E\uFF0C\u5F53\u66F4\u65B0\u6839Context\u65F6\uFF0C\u6240\u6709\u7684\u5B50\u7EC4\u4EF6\u90FD\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u8FD9\u662F\u4E0D\u5FC5\u8981\u7684\uFF0C\u56E0\u4E3A\u5B50\u7EC4\u4EF6\u5E76\u6CA1\u6709\u4F7F\u7528\u5230\u6839Context\u7684\u6570\u636E\u3002\u6211\u4EEC\u5E0C\u671B\u80FD\u5B9E\u73B0\u66F4\u7EC6\u7C92\u5EA6\u7684\u6E32\u67D3\uFF0C\u53EA\u6709\u5F53\u5B50\u7EC4\u4EF6\u4F7F\u7528\u5230\u7684\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:3},{value:"\u4F7F\u7528",paraId:4,tocIndex:2},{value:"@speedform/reactive",paraId:4,tocIndex:2},{value:"\u7684",paraId:4,tocIndex:2},{value:"useState",paraId:4,tocIndex:2},{value:"\u53EF\u4EE5\u4F7F",paraId:4,tocIndex:2},{value:"\u6E32\u67D3\u9897\u7C92\u5EA6\u9650\u5B9A\u5728\u7EC4\u4EF6\u8303\u56F4",paraId:4,tocIndex:2},{value:"\uFF0C\u53EA\u6709\u4F7F\u7528\u5230\u6570\u636E\u7684\u7EC4\u4EF6\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:4,tocIndex:2},{value:"\u5728\u4E0A\u4F8B\u4E2D\uFF0C\u5F53\u66F4\u65B0",paraId:5},{value:"Age",paraId:5},{value:"\u65F6\uFF0C\u4EC5\u6839\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C",paraId:5},{value:"FirstName",paraId:5},{value:"\u548C",paraId:5},{value:"LastName",paraId:5},{value:"\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5E76\u6CA1\u6709\u4F7F\u7528\u5230",paraId:5},{value:"Age",paraId:5},{value:"\u3002",paraId:5},{value:"\u5F53\u5728\u6839\u7EC4\u4EF6\u4E2D\u66F4\u65B0",paraId:5},{value:"FirstName",paraId:5},{value:"\u65F6\uFF0C\u4EC5",paraId:5},{value:"FirstName",paraId:5},{value:"\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002\u800C",paraId:5},{value:"LastName",paraId:5},{value:"\u7EC4\u4EF6\u4E2D\u6CA1\u6709",paraId:5},{value:"FirstName",paraId:5},{value:"\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:5},{value:"@speedform/reactive",paraId:6,tocIndex:3},{value:"\u63D0\u4F9B\u7684",paraId:6,tocIndex:3},{value:"state",paraId:6,tocIndex:3},{value:"\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u914D\u7F6E",paraId:6,tocIndex:3},{value:"signal",paraId:6,tocIndex:3},{value:"\u673A\u5236\u53EF\u4EE5\u76F4\u63A5\u8FDB\u884C\u8BFB\u53D6",paraId:6,tocIndex:3},{value:"\u6E32\u67D3\u9897\u7C92\u5EA6\u9650\u5B9A\u5728\u7EC4\u4EF6\u8303\u56F4",paraId:6,tocIndex:3},{value:"\uFF0C\u53EA\u6709\u4F7F\u7528\u5230\u6570\u636E\u7684\u7EC4\u4EF6\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:6,tocIndex:3},{value:"\u57FA\u4E8E",paraId:7,tocIndex:3},{value:"Signal",paraId:7,tocIndex:3},{value:",",paraId:7,tocIndex:3},{value:"\u6E32\u67D3\u9897\u7C92\u5EA6\u53EF\u4EE5\u662F\u7EC4\u4EF6\u4E2D\u7684\u4E00\u4E2A\u7247\u6BB5",paraId:7,tocIndex:3},{value:"\uFF0C\u66F4\u52A0\u7CBE\u7EC6\uFF0C\u66F4\u52A0\u9AD8\u6548\u3002",paraId:7,tocIndex:3},{value:"\u5728\u4E0A\u4F8B\u4E2D\uFF0C\u5F53\u66F4\u65B0",paraId:8},{value:"Age",paraId:8},{value:"\u65F6\uFF0C\u4EC5\u6839\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C",paraId:8},{value:"FirstName",paraId:8},{value:"\u548C",paraId:8},{value:"LastName",paraId:8},{value:"\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5E76\u6CA1\u6709\u4F7F\u7528\u5230",paraId:8},{value:"Age",paraId:8},{value:"\u3002",paraId:8},{value:"\u5F53\u66F4\u65B0",paraId:8},{value:"FirstName",paraId:8},{value:"\u65F6\uFF0C\u4EC5",paraId:8},{value:"FirstName",paraId:8},{value:"\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002\u800C",paraId:8},{value:"LastName",paraId:8},{value:"\u7EC4\u4EF6\u4E2D\u867D\u7136\u7528\u5230\u4E86",paraId:8},{value:"FirstName",paraId:8},{value:"\uFF0C\u4F46\u662F\u6CA1\u6709\u4F7F\u7528",paraId:8},{value:"$(FirstName)",paraId:8},{value:"\uFF0C\u4E5F\u5C31\u662F\u4F7F\u7528\u4FE1\u53F7\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:8},{value:"store.state",paraId:8},{value:"\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:8},{value:"reactive",paraId:8},{value:",\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A",paraId:8},{value:"Proxy",paraId:8},{value:"\u5BF9\u8C61\u6765\u6536\u96C6\u4F9D\u8D56\u3002\u7136\u540E\u4F7F\u7528",paraId:8},{value:"$(<reactive>)",paraId:8},{value:"\u6570\u636E\u53D8\u66F4\u4EC5\u89E6\u53D1",paraId:8},{value:"$",paraId:8},{value:"\u7B26\u53F7\u533A\u57DF\u5185\u91CD\u6E32\u67D3\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6700\u7EC6\u7C92\u5EA6\u7684\u6E32\u67D3\u3002",paraId:8},{value:"\u5173\u4E8E",paraId:8},{value:"Signal",paraId:8},{value:"\u673A\u5236\u7684\u66F4\u591A\u5185\u5BB9\u8BF7\u53C2\u8003",paraId:8},{value:"helux/Signal",paraId:8},{value:"\u3002",paraId:8}]},64005:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(58578);const o=[{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u4E86\u4E09\u79CD\u4E0D\u540C\u7684\u65B9\u5F0F\u6765\u5B58\u53D6\u72B6\u6001\u3002",paraId:0,tocIndex:0},{value:"useState",paraId:1,tocIndex:0},{value:": \u7528\u6765\u5728\u7EC4\u4EF6\u4E2D\u8BBF\u95EE\u548C\u66F4\u65B0",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"\u7684\u72B6\u6001\u6570\u636E\uFF0C\u66F4\u65B0\u65F6\u4F1A\u5BFC\u81F4\u91CD\u65B0\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"store.state",paraId:1,tocIndex:0},{value:": \u76F4\u63A5\u8BFB\u5199",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"\u7684\u72B6\u6001\u6570\u636E\uFF0C",paraId:1,tocIndex:0},{value:"store.state",paraId:1,tocIndex:0},{value:"\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:1,tocIndex:0},{value:"reactive",paraId:1,tocIndex:0},{value:"\uFF0C\u5176\u5B9E\u8D28\u662F\u901A\u8FC7",paraId:1,tocIndex:0},{value:"Proxy",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u7684\uFF0C\u5F53\u8BFB\u5199",paraId:1,tocIndex:0},{value:"store.state",paraId:1,tocIndex:0},{value:"\u65F6\uFF0C\u4F1A\u89E6\u53D1\u5185\u90E8\u7684\u4F9D\u8D56\u6536\u96C6\uFF0C\u76F8\u5173\u8BA1\u7B97\u5C5E\u6027\u7684\u8FD0\u884C\uFF0C\u914D\u5408",paraId:1,tocIndex:0},{value:"signal",paraId:1,tocIndex:0},{value:"\u673A\u5236\u53EF\u4EE5\u81EA\u52A8\u89E6\u53D1\u7EC4\u4EF6\u7684\u7EC6\u7C92\u5EA6\u91CD\u65B0\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"\u5F53\u521B\u5EFA\u597D",paraId:2,tocIndex:1},{value:"Store",paraId:2,tocIndex:1},{value:"\u540E,\u4F60\u53EF\u4EE5\u5728\u5B58\u53D6",paraId:2,tocIndex:1},{value:"State",paraId:2,tocIndex:1},{value:"\u7528\u6765\u9A71\u52A8\u7EC4\u4EF6\u7EC6\u7C92\u5EA6\u6E32\u67D3\u3002",paraId:2,tocIndex:1},{value:"Store",paraId:3,tocIndex:1},{value:"\u5BF9\u8C61\u63D0\u4F9B\u4E86",paraId:3,tocIndex:1},{value:"useState",paraId:3,tocIndex:1},{value:"\u65B9\u6CD5\uFF0C\u7528\u6765\u5728\u7EC4\u4EF6\u4E2D\u8BBF\u95EE\u548C\u66F4\u65B0",paraId:3,tocIndex:1},{value:"Store",paraId:3,tocIndex:1},{value:"\u7684\u72B6\u6001\u6570\u636E\u3002\u5176\u4F7F\u7528\u65B9\u5F0F\u4E0E",paraId:3,tocIndex:1},{value:"React",paraId:3,tocIndex:1},{value:"\u7684",paraId:3,tocIndex:1},{value:"useState",paraId:3,tocIndex:1},{value:"\u65B9\u6CD5\u7C7B\u4F3C\u3002",paraId:3,tocIndex:1},{value:"useState",paraId:4},{value:"\u8FD8\u53EF\u4EE5\u63A5\u53D7",paraId:4},{value:"getter",paraId:4},{value:" \u548C",paraId:4},{value:"setter",paraId:4},{value:"\u4E24\u4E2A\u51FD\u6570\u53C2\u6570\uFF0C\u7528\u6765\u83B7\u53D6\u548C\u8BBE\u7F6E",paraId:4},{value:"State",paraId:4},{value:"\u4E2D\u7684\u67D0\u4E2A\u5C5E\u6027\u3002",paraId:4},{value:"\u9664\u4E86\u4F7F\u7528",paraId:5,tocIndex:2},{value:"useState",paraId:5,tocIndex:2},{value:"\u65B9\u6CD5\u8BFB\u5199\u72B6\u6001\u5916\uFF0C",paraId:5,tocIndex:2},{value:"sotre.state",paraId:5,tocIndex:2},{value:"\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A",paraId:5,tocIndex:2},{value:"reactive",paraId:5,tocIndex:2},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u8BFB\u5199\u5B83\u7684\u5C5E\u6027\u3002",paraId:5,tocIndex:2},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:6},{value:"\u6307\u7684\u662F\u53EF\u4EE5\u5BF9\u8BE5\u5BF9\u8C61\u8FDB\u884C\u8BFB\u53D6\uFF0C\u5176\u4FEE\u6539\u884C\u4E3A\u4F1A\u89E6\u53D1\u5185\u90E8\u7684\u4F9D\u8D56\u6536\u96C6\uFF0C\u76F8\u5173\u8BA1\u7B97\u5C5E\u6027\u7684\u8FD0\u884C\uFF0C\u5F53\u7136\u4E5F\u4F1A\u81EA\u52A8\u89E6\u53D1\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u3002",paraId:6}]},73689:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(14989);const o=[{value:"\u521B\u5EFA",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u65F6\u5BF9\u5E94\u521B\u5EFA\u4E00\u4E2A",paraId:0,tocIndex:0},{value:"Store",paraId:0,tocIndex:0},{value:"\u5BF9\u8C61,\u5C31\u5982\u540C",paraId:0,tocIndex:0},{value:"Redux",paraId:0,tocIndex:0},{value:"\u4E2D\u7684",paraId:0,tocIndex:0},{value:"Store",paraId:0,tocIndex:0},{value:"\u4E00\u6837,",paraId:0,tocIndex:0},{value:"Store",paraId:0,tocIndex:0},{value:"\u672C\u8D28\u4E0A\u5C31\u662F\u53D7\u63A7\u7684\u72B6\u6001\u6570\u636E\u5BF9\u8C61\uFF0C\u4F7F\u7528",paraId:0,tocIndex:0},{value:"helux",paraId:0,tocIndex:0},{value:"\u7684",paraId:0,tocIndex:0},{value:"atomx/sharex",paraId:0,tocIndex:0},{value:"\u521B\u5EFA\u3002",paraId:0,tocIndex:0},{value:"\u5178\u578B\u7684",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"\u7ED3\u6784\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"Store",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\u4E2D\u4F1A\u5B9A\u4E49",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u7ED3\u6784\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u4E0D\u5141\u8BB8\u76F4\u63A5\u4FEE\u6539",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\uFF0C\u800C\u662F\u901A\u8FC7",paraId:2,tocIndex:0},{value:"Action",paraId:2,tocIndex:0},{value:"\u6765\u4FEE\u6539",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u3002",paraId:2,tocIndex:0},{value:"Action",paraId:2,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u666E\u901A\u7684\u51FD\u6570\uFF0C\u4E00\u822C\u4F1A\u5B9E\u73B0\u67D0\u79CD\u4E1A\u52A1\u903B\u8F91\uFF0C\u53EF\u4EE5\u662F\u540C\u6B65\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5F02\u6B65\u51FD\u6570\u3002\u6267\u884C\u6210\u529F\u4F1A\u4FEE\u6539",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u3002",paraId:2,tocIndex:0},{value:"\u8BA1\u7B97\u5C5E\u6027\u4F1A\u4FA6\u542C",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u7684\u6570\u636E\u53D8\u5316\uFF0C\u5F53",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u8BA1\u7B97\u5C5E\u6027\u7684\u503C\u3002",paraId:2,tocIndex:0},{value:"@speedform/reactive",paraId:3,tocIndex:1},{value:"\u63D0\u4F9B\u4E86",paraId:3,tocIndex:1},{value:"createStore",paraId:3,tocIndex:1},{value:"\u65B9\u6CD5\u7528\u6765\u521B\u5EFA",paraId:3,tocIndex:1},{value:"Store",paraId:3,tocIndex:1},{value:"\u5BF9\u8C61\u3002",paraId:3,tocIndex:1},{value:`const user = {
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
`,paraId:6,tocIndex:2}]},5160:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(91352);const o=[{value:"watch",paraId:0},{value:"\u51FD\u6570\u4E0E",paraId:0},{value:"computed",paraId:0},{value:"\u51FD\u6570\u529F\u80FD\u7684\u533A\u522B\u5982\u4E0B\uFF1A",paraId:0},{value:"computed",paraId:1},{value:"\u51FD\u6570\u662F\u7528\u6765\u58F0\u660E\u8BA1\u7B97\u5C5E\u6027\u7684\uFF0C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u662F\u7528\u6765\u4FA6\u542C",paraId:1},{value:"State",paraId:1},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u7684\u3002",paraId:1},{value:"computed",paraId:1},{value:"\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u5199\u5165",paraId:1},{value:"State",paraId:1},{value:"\u4E2D\u7684\u5BF9\u5E94\u5C5E\u6027\uFF0C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u5199\u5165",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u6240\u5728\u7684\u4F4D\u7F6E\u3002",paraId:1},{value:"computed",paraId:1},{value:"\u51FD\u6570\u7684\u521B\u5EFA\u7684\u8BA1\u7B97\u5C5E\u6027\u662F\u57FA\u4E8E\u4F9D\u8D56\u6536\u96C6\u7684\uFF0C\u800C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u662F\u57FA\u4E8E\u4FA6\u542C\u7684,\u6BCF\u5F53",paraId:1},{value:"State",paraId:1},{value:"\u72B6\u6001\u53D8\u5316\u65F6\u5747\u4F1A\u8C03\u7528",paraId:1},{value:"watchOptions.on",paraId:1},{value:"\u8FC7\u6EE4\u51FD\u6570\u6765\u5339\u914D\u4FA6\u542C\u51FD\u6570\uFF0C\u56E0\u6B64\u7406\u8BBA\u4E0A\uFF0C",paraId:1},{value:"computed",paraId:1},{value:"\u51FD\u6570\u7684\u6027\u80FD\u66F4\u597D\uFF0C\u800C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u6027\u80FD\u4F1A\u5DEE\u4E9B\u3002",paraId:1},{value:"watch",paraId:1},{value:"\u53EA\u80FD\u662F\u540C\u6B65\u4FA6\u542C\u51FD\u6570\uFF0C\u800C",paraId:1},{value:"computed",paraId:1},{value:"\u53EF\u4EE5\u662F\u5F02\u6B65\u51FD\u6570\u3002",paraId:1}]},90612:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(67690);const o=[{value:"\u5982\u540C",paraId:0,tocIndex:0},{value:"ComputedObject",paraId:0,tocIndex:0},{value:"\u4E00\u6837\uFF0C\u6BCF\u4E00\u4E2A\u4F7F\u7528",paraId:0,tocIndex:0},{value:"watch",paraId:0,tocIndex:0},{value:"\u5305\u88C5\u7684\u8BA1\u7B97\u51FD\u6570\u5747\u521B\u5EFA\u4E00\u4E2A",paraId:0,tocIndex:0},{value:"WatchObject",paraId:0,tocIndex:0},{value:"\u5BF9\u8C61\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7",paraId:1,tocIndex:0},{value:"Store.watchObjects",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u8BBF\u95EE\u6240\u6709\u58F0\u660E\u7684",paraId:1,tocIndex:0},{value:"WatchObject",paraId:1,tocIndex:0},{value:"\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u8FDB\u884C\u76F8\u5173\u7684\u52A8\u6001\u79FB\u9664/\u7981\u7528\u7B49\u64CD\u4F5C\u3002",paraId:1,tocIndex:0},{value:`export interface WatchObject extends WatchOptions>{ 
    path:string[]
    run:(fromPath:string[])=>void
    listener:(...args:any[])=>any
}
`,paraId:2,tocIndex:0},{value:"\u6240\u6709\u521B\u5EFA\u7684",paraId:3,tocIndex:0},{value:"WatchObject",paraId:3,tocIndex:0},{value:"\u5BF9\u8C61\u4FDD\u5B58\u5728",paraId:3,tocIndex:0},{value:"Store.watchObjects",paraId:3,tocIndex:0},{value:` class WatchObjects extends Map{
    enable:boolean
    reset(){}
    enableGroup(groupName:string,value:boolean=true){}
 }

`,paraId:4,tocIndex:0}]},8763:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(3466);const o=[{value:"\u5927\u90E8\u4EFD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5E94\u8BE5\u4F7F\u7528",paraId:0},{value:"computed",paraId:0},{value:"\u51FD\u6570\u6765\u58F0\u660E\u8BA1\u7B97\u5C5E\u6027\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528",paraId:0},{value:"watch",paraId:0},{value:"\u51FD\u6570\u6765\u4FA6\u542C",paraId:0},{value:"State",paraId:0},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002\u4F46\u662F\u5728\u4E00\u4E9B\u7279\u6B8A\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u4F7F\u7528",paraId:0},{value:"watch",paraId:0},{value:"\u51FD\u6570\uFF0C\u4E3B\u8981\u5728\u4E8E\uFF1A",paraId:0},{value:"\u52A8\u6001\u4F9D\u8D56",paraId:1},{value:"computed",paraId:2},{value:"\u8BA1\u7B97\u51FD\u6570\u7684\u4F9D\u8D56\u4E00\u822C\u662F\u786E\u5B9A\u7684\uFF0C\u800C",paraId:2},{value:"watch",paraId:2},{value:"\u51FD\u6570\u7684\u4F9D\u8D56\u662F\u52A8\u6001\u7684\u3002\u8FD9\u6BD4\u8F83\u9002\u5408\u4E00\u4E9B\u9700\u8981\u52A8\u6001\u4FA6\u542C\u7684\u573A\u666F\uFF0C\u6BD4\u5982\u4E0A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u52A8\u6001\u4FA6\u542C",paraId:2},{value:"orders[].count",paraId:2},{value:"\u7684\u53D8\u5316\u6765\u8BA1\u7B97",paraId:2},{value:"total",paraId:2},{value:"\u3002\u800C",paraId:2},{value:"computed",paraId:2},{value:"\u51FD\u6570\u7684\u4F9D\u8D56\u662F\u9759\u6001\u7684\uFF0C\u4E00\u65E6\u58F0\u660E\u5C31\u4E0D\u4F1A\u53D8\u5316\u3002",paraId:2},{value:"\u591A\u5B57\u6BB5\u590D\u5408\u8BA1\u7B97",paraId:3},{value:"\u5F53\u67D0\u4E2A\u5B57\u6BB5\u9700\u8981\u8FDB\u884C\u590D\u5408\u8BA1\u7B97\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528",paraId:4},{value:"watch",paraId:4},{value:"\u51FD\u6570\u6765\u5B9E\u73B0\u3002\u6BD4\u5982\u5728",paraId:4},{value:"SpeedForm",paraId:4},{value:"\u5B9E\u73B0\u8868\u5355\u7684",paraId:4},{value:"validate",paraId:4},{value:"\u548C",paraId:4},{value:"dirty",paraId:4},{value:"\u5C5E\u6027\u7684\u8BA1\u7B97\u65F6\uFF0C\u5C31\u662F\u4F7F\u7528",paraId:4},{value:"watch",paraId:4},{value:"\u5B9E\u73B0\u3002",paraId:4},{value:"\u6BD4\u5982\u8FD9\u662F\u8868\u5355",paraId:5},{value:"validate",paraId:5},{value:"\u68C0\u6D4B\u7684\u5B9E\u73B0\u4EE3\u7801\uFF1A",paraId:5},{value:`export function validate<T=any>(options?:ValidateOptions){
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
`,paraId:8},{value:"value",paraId:9},{value:"\uFF1A\u53D8\u5316\u7684\u503C",paraId:9},{value:"fromPath",paraId:10},{value:"\uFF1A\u6307\u7684\u662F\u54EA\u91CC\u53D1\u751F\u53D8\u5316\u7684\u8DEF\u5F84",paraId:10},{value:"getCache",paraId:11},{value:"\uFF1A\u7528\u6765\u83B7\u53D6\u5F53\u524D",paraId:11},{value:"watch",paraId:11},{value:"\u7684",paraId:11},{value:"cache",paraId:11},{value:"\u5BF9\u8C61\uFF0C\u7528\u6765\u4FDD\u5B58\u6821\u9A8C\u503C\u3002",paraId:11},{value:"\u5728",paraId:12},{value:"cache",paraId:12},{value:"\u91CC\u9762\u6211\u4EEC\u4FDD\u5B58\u4ECE\u6821\u9A8C\u8303\u56F4\u5185\u6240\u6709",paraId:12},{value:"value=false",paraId:12},{value:"\uFF0C\u5982\u679C",paraId:12},{value:"Object.keys(selfCache).length==0",paraId:12},{value:"\u5C31\u4EE3\u8868\u5728\u8BE5\u6821\u9A8C\u8303\u56F4\u5185\u6240\u6709\u5B57\u6BB5\u5747\u6709\u6548\u3002",paraId:12}]},55425:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(77044);const o=[{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B",paraId:0,tocIndex:0},{value:"watch",paraId:0,tocIndex:0},{value:"\u529F\u80FD\uFF0C\u7528\u6765\u76D1\u89C6",paraId:0,tocIndex:0},{value:"State",paraId:0,tocIndex:0},{value:"\u6570\u636E\u7684\u53D8\u5316,\u5F53\u6240\u76D1\u89C6\u7684\u6570\u636E\u53D1\u751F\u65F6\uFF0C\u53EF\u4EE5\u6267\u884C\u4FA6\u542C\u5668\u51FD\u6570\u3002",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u4E09\u79CD\u4F7F\u7528",paraId:1,tocIndex:0},{value:"watch",paraId:1,tocIndex:0},{value:"\u7684\u65B9\u5F0F\uFF1A",paraId:1,tocIndex:0},{value:"\u76F4\u63A5\u5728",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u4E2D\u58F0\u660E",paraId:2,tocIndex:0},{value:"watch",paraId:2,tocIndex:0},{value:"\u51FD\u6570,\u7136\u540E\u5C06\u4FA6\u542C\u5668\u8FD4\u56DE\u503C\u5199\u5165\u58F0\u660E",paraId:2,tocIndex:0},{value:"watch",paraId:2,tocIndex:0},{value:"\u51FD\u6570\u6240\u5728\u7684\u4F4D\u7F6E\u3002",paraId:2,tocIndex:0},{value:"\u8C03\u7528",paraId:2,tocIndex:0},{value:"store.watch",paraId:2,tocIndex:0},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002",paraId:2,tocIndex:0},{value:"\u5728\u7EC4\u4EF6\u4E2D\u8C03\u7528",paraId:2,tocIndex:0},{value:"store.useWatch",paraId:2,tocIndex:0},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:2,tocIndex:0},{value:"store",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\u7684\u53D8\u5316,\u5F53\u7EC4\u4EF6\u9500\u6BC1\u81EA\u52A8\u53D6\u6D88\u8BA2\u9605\u3002",paraId:2,tocIndex:0},{value:"@speedform/reactive",paraId:3,tocIndex:1},{value:"\u63D0\u4F9B\u4E86",paraId:3,tocIndex:1},{value:"watch",paraId:3,tocIndex:1},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u5728",paraId:3,tocIndex:1},{value:"state",paraId:3,tocIndex:1},{value:"\u58F0\u660E\u6765\u4FA6\u542C",paraId:3,tocIndex:1},{value:"State",paraId:3,tocIndex:1},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002",paraId:3,tocIndex:1},{value:"watch",paraId:4,tocIndex:1},{value:"\u51FD\u6570\u7684\u57FA\u672C\u7279\u6027\u5982\u4E0B\uFF1A",paraId:4,tocIndex:1},{value:"watch",paraId:5,tocIndex:1},{value:"\u53EF\u4EE5\u7528\u6765\u4FA6\u542C\u6574\u4E2A",paraId:5,tocIndex:1},{value:"store",paraId:5,tocIndex:1},{value:"\u5BF9\u8C61\u7684\u53D8\u5316\uFF0C\u5F53\u4FA6\u542C\u5230\u53D8\u5316\u65F6\u4F1A\u6267\u884C\u4FA6\u542C\u5668\u51FD\u6570\u3002",paraId:5,tocIndex:1},{value:"\u4FA6\u542C\u5668\u51FD\u6570\u53EA\u80FD\u662F\u4E00\u4E2A\u540C\u6B65\u51FD\u6570\u3002",paraId:5,tocIndex:1},{value:"\u4FA6\u542C\u5668\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u5199\u5165",paraId:5,tocIndex:1},{value:"watch",paraId:5,tocIndex:1},{value:"\u51FD\u6570\u6240\u5728\u7684\u4F4D\u7F6E\u3002",paraId:5,tocIndex:1},{value:"watch",paraId:6,tocIndex:2},{value:"\u51FD\u6570\u7B7E\u540D\u5982\u4E0B\uFF1A",paraId:6,tocIndex:2},{value:`function watch<Value = any,Result=Value>(
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
`,paraId:20,tocIndex:4},{value:"\u5728\u8FDB\u884C\u8868\u5355\u9A8C\u8BC1\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528",paraId:21,tocIndex:4},{value:"formState.validate",paraId:21,tocIndex:4},{value:"\u6765\u83B7\u53D6\u6574\u4E2A\u8868\u5355\u7684\u9A8C\u8BC1\u7ED3\u679C\u3002",paraId:21,tocIndex:4},{value:"\u9664\u4E86\u53EF\u4EE5\u5728",paraId:22,tocIndex:5},{value:"State",paraId:22,tocIndex:5},{value:"\u4E2D\u58F0\u660E",paraId:22,tocIndex:5},{value:"watch",paraId:22,tocIndex:5},{value:"\u51FD\u6570\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u5728",paraId:22,tocIndex:5},{value:"Store",paraId:22,tocIndex:5},{value:"\u5BF9\u8C61\u4E2D\u58F0\u660E",paraId:22,tocIndex:5},{value:"watch",paraId:22,tocIndex:5},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:22,tocIndex:5},{value:"State",paraId:22,tocIndex:5},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002",paraId:22,tocIndex:5},{value:"\u5728\u7EC4\u4EF6\u5185\u4FA6\u542C\u53EF\u4EE5\u4F7F\u7528",paraId:23,tocIndex:6},{value:"store.useWatch",paraId:23,tocIndex:6},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:23,tocIndex:6},{value:"store",paraId:23,tocIndex:6},{value:"\u5BF9\u8C61\u7684\u53D8\u5316,\u5F53\u7EC4\u4EF6\u9500\u6BC1\u81EA\u52A8\u53D6\u6D88\u8BA2\u9605\u3002",paraId:23,tocIndex:6}]},15789:function(V,i,e){e.r(i),e.d(i,{texts:function(){return o}});var B=e(25773);const o=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u975E\u5E38\u8F7B\u91CF\u7EA7\u7684\u8868\u5355\u7EC4\u4EF6\uFF0C\u5B83\u7684\u76EE\u6807\u662F\u8BA9\u8868\u5355\u5F00\u53D1\u53D8\u5F97\u66F4\u52A0\u7B80\u5355\u3001\u5FEB\u901F\u3001\u7075\u6D3B\u3002",paraId:0,tocIndex:0},{value:"@speed-form/antd",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/element-ui",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"element-ui",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"element-ui",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/iview",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"iview",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"iview",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/vuetify",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"vuetify",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"vuetify",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/element-plus",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"element-plus",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"element-plus",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/ant-design-vue",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"ant-design-vue",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"ant-design-vue",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/naive-ui",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"naive-ui",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"naive-ui",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/element3",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"element3",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"element3",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0}]}}]);
