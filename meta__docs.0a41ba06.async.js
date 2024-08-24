"use strict";(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[904],{33353:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(24908),H={}},12621:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(78719),H={}},35706:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(58839),H={}},40305:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(43230),H={}},38139:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(64010),H={}},98157:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(90938),H={}},93797:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(97278),H={}},535:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(83975),H={}},6892:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(82376),H={}},69581:function(J,i,e){e.r(i),e.d(i,{demos:function(){return U}});var K=e(28633),o=e.n(K),H=e(29008),k=e.n(H),T=e(70958),L=e.n(T),t=e(92379),G=e(59147),U={"docs-core-form-action-demo-0":{component:t.memo(t.lazy(L()(k()().mark(function j(){var d,O,v,l,g,a,R,u,D,E;return k()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.bind(e,6244));case 2:return d=P.sent,O=d.createForm,v=d.action,P.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return l=P.sent,g=l.Row,a=l.Col,R=l.Button,u=l.Input,D={fields:{username:{value:"fisher",required:!0,title:"\u59D3\u540D"},password:{value:"123",required:!0,title:"\u5BC6\u7801"}},actions:{login:{title:"\u767B\u5F55",execute:v(function(){var C=L()(k()().mark(function w(s,c){return k()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:console.log("\u767B\u5F55",s);case 1:case"end":return y.stop()}},w)}));return function(w,s){return C.apply(this,arguments)}}())}}},E=O(D,{debug:!0}),P.abrupt("return",{default:function(){var w=useState(""),s=o()(w,2),c=s[0],r=s[1];return t.createElement(g,null,t.createElement(a,null,t.createElement(E.Field,{name:"username"},function(y){var S=y.value,N=y.sync;return t.createElement("div",null,"\u7528\u6237\u540D\uFF1A",t.createElement("input",{value:S,onChange:N()}))}),t.createElement(E.Field,{name:"password"},function(y){var S=y.value,N=y.sync;return t.createElement("div",null,"\u5BC6\u7801\uFF1A",t.createElement("input",{value:S,onChange:N()}))}),t.createElement(E.Action,{name:"login"},function(y){var S=y.title,N=y.visible,F=y.loading,V=y.enable,Q=y.run,Z=y.cancel,ee=y.error,te=y.progress;return t.createElement(t.Fragment,null,t.createElement(u,{type:"submit",value:"\u63D0\u4EA4"}),t.createElement(R,{loading:F,cancel:Z,timeout:te,visible:N,enable:V,error:ee,onClick:Q()},S))})),t.createElement(a,null,"dsdsd"))}});case 15:case"end":return P.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-core-form-action-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createForm,action }  from "@speedform/core"
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
}`},"@speedform/core":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/core":e(6244),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var j=L()(k()().mark(function O(){var v,l=arguments;return k()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}}}},70250:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(76726),H={}},56105:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(88209),H={}},81911:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(14741),H={}},3228:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(97630),H={}},78016:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(72e3),H={}},71229:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(27548),H={}},97521:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(31430),H={}},37013:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(48566),H={}},37763:function(J,i,e){e.r(i),e.d(i,{demos:function(){return t}});var K=e(29008),o=e.n(K),H=e(70958),k=e.n(H),T=e(92379),L=e(25248),t={"docs-core-quick-start-demo-0":{component:T.memo(T.lazy(k()(o()().mark(function G(){var U,j,d,O,v,l,g,a,R,u,D,E,x;return o()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,21970));case 2:return U=C.sent,j=U.forms,C.next=6,Promise.resolve().then(e.t.bind(e,26372,23));case 6:return d=C.sent,O=d.default,C.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return v=C.sent,l=v.Card,g=v.Field,a=v.Input,R=v.ValidResult,C.next=17,Promise.resolve().then(e.t.bind(e,92379,19));case 17:return u=C.sent,D=u.useCallback,E=u.useRef,x=j.Network,C.abrupt("return",{default:function(){var s=E(),c=D(function(){return alert("submit"),console.log("submit"),!1},[]);return T.createElement(l,{title:"\u7F51\u7EDC\u914D\u7F6E\u8868\u5355"},T.createElement(x.Form,{onSubmit:c,action:"/api",ref:s},T.createElement(x.Field,{name:"title"},function(r){var y=r.name,S=r.title,N=r.value,F=r.visible,V=r.validate,Q=r.placeholder,Z=r.sync;return T.createElement(g,{name:"title",visible:F,label:S,validate:V},T.createElement(a,{name:y,className:O({invalid:!V}),placeholder:Q,value:N,onChange:Z()}))}),T.createElement(x.Field,{name:"interface"},function(r){var y=r.name,S=r.title,N=r.required,F=r.visible,V=r.validate,Q=r.enable,Z=r.value,ee=r.initial,te=r.select,de=r.sync;return T.createElement(g,{name:"interface",label:S},T.createElement("select",{value:Z,onChange:de()},te.map(function(re,ie){return T.createElement("option",{key:ie,value:re.value},re.title)})))}),T.createElement(x.Field,{name:"ip"},function(r){var y=r.name,S=r.title,N=r.value,F=r.visible,V=r.validate,Q=r.placeholder,Z=r.sync;return T.createElement(g,{name:"ip",visible:F,label:S,validate:V,memo:"\u4FEE\u6539\u8FDB\u884C\u5F02\u6B65\u6821\u9A8C"},T.createElement(a,{name:y,validate:V.result,placeholder:Q,value:N,onChange:Z(100)}))}),T.createElement(x.Field,{name:"gateway"},function(r){var y=r.name,S=r.title,N=r.value,F=r.required,V=r.visible,Q=r.validate,Z=r.update,ee=r.enable,te=r.placeholder,de=r.sync;return T.createElement(g,{name:"gateway",visible:V,label:S},T.createElement(a,{name:y,validate:Q,placeholder:te,value:N,onChange:de()}),T.createElement("button",{onClick:Z(function(re){re.gateway.value="192.168.1.2"})},"\u6062\u590D"),T.createElement("button",{onClick:Z("192.168.1.1")},"\u66F4\u65B0\u503C"))}),T.createElement(x.Group,{name:"wifi"},function(r){var y=r.title,S=r.visible;return T.createElement(l,{title:y+"(\u4EC5interfact=wifi\u65F6\u663E\u793A)",visible:S},T.createElement(x.Field,{name:"wifi.ssid"},function(N){var F=N.name,V=N.value,Q=N.required,Z=N.visible,ee=N.validate,te=N.enable,de=N.initial,re=N.sync;return T.createElement(g,{name:"wifi.ssid",label:"SSID",enable:te},T.createElement(a,{name:F,className:O({invalid:!ee}),value:V,onChange:re()}))}),T.createElement(x.Field,{name:"wifi.password"},function(N){var F=N.name,V=N.value,Q=N.enable,Z=N.validate,ee=N.placeholder,te=N.help,de=N.sync;return T.createElement(g,{name:"wifi.password",label:"\u5BC6\u7801",enable:Q,className:O({invalid:!Z})},T.createElement(a,{name:F,style:{border:Z?"1px solid #ccc":"1px solid red"},"data-help":te,value:V,placeholder:ee,onChange:de(),readOnly:!Q}),T.createElement(R,{validate:Z,help:te}))}))}),T.createElement(x.Field,{name:"dhcp.enable"},function(r){var y=r.name,S=r.title,N=r.visible,F=r.value,V=r.validate,Q=r.sync;return T.createElement(g,{name:"dhcp.enable",visible:N,label:S},T.createElement("input",{name:y,className:O({invalid:!V}),type:"checkbox",checked:F,onChange:Q()}))}),T.createElement(x.Field,{name:"dhcp.start"},function(r){var y=r.name,S=r.value,N=r.validate,F=r.enable,V=r.visible,Q=r.title,Z=r.sync;return T.createElement(g,{name:"dhcp.start",label:Q,enable:F},T.createElement(a,{name:y,enable:F,className:O({invalid:!N}),value:S,onChange:Z()}))}),T.createElement(x.Field,{name:"dhcp.end"},function(r){var y=r.name,S=r.value,N=r.validate,F=r.visible,V=r.title,Q=r.enable,Z=r.sync;return T.createElement(g,{name:"dhcp.end",enable:Q,label:V},T.createElement(a,{name:y,enable:Q,className:O({invalid:!N}),value:S,onChange:Z()}))}),T.createElement(x.Submit,null),T.createElement(x.Reset,null)))}});case 22:case"end":return C.stop()}},G)})))),asset:{type:"BLOCK",id:"docs-core-quick-start-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { forms } from 'speedform-docs'
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
}`},"speedform-docs":{type:"NPM",value:"1.0.0"},classnames:{type:"NPM",value:"2.3.2"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"speedform-docs":e(21970),classnames:e(26372),"@speedform/demo-components":e(48398),react:e(92379)},renderOpts:{compile:function(){var G=k()(o()().mark(function j(){var d,O=arguments;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(660).then(e.bind(e,7660));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,O));case 3:case"end":return l.stop()}},j)}));function U(){return G.apply(this,arguments)}return U}()}}}},66027:function(J,i,e){e.r(i),e.d(i,{demos:function(){return t}});var K=e(29008),o=e.n(K),H=e(70958),k=e.n(H),T=e(92379),L=e(48101),t={"docs-core-tutorial-demo-0":{component:T.memo(T.lazy(k()(o()().mark(function G(){var U,j,d,O,v,l,g,a,R,u,D,E,x;return o()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,21970));case 2:return U=C.sent,j=U.forms,C.next=6,Promise.resolve().then(e.t.bind(e,26372,23));case 6:return d=C.sent,O=d.default,C.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return v=C.sent,l=v.Card,g=v.Field,a=v.Input,R=v.ValidResult,C.next=17,Promise.resolve().then(e.t.bind(e,92379,19));case 17:return u=C.sent,D=u.useCallback,E=u.useRef,x=j.Network,C.abrupt("return",{default:function(){var s=E(),c=D(function(){return alert("submit"),console.log("submit"),!1},[]);return T.createElement(l,{title:"\u7F51\u7EDC\u914D\u7F6E\u8868\u5355"},T.createElement(x.Form,{onSubmit:c,action:"/api",ref:s},T.createElement(x.Field,{name:"title"},function(r){var y=r.name,S=r.title,N=r.value,F=r.visible,V=r.validate,Q=r.placeholder,Z=r.sync;return T.createElement(g,{name:"title",visible:F,label:S,validate:V},T.createElement(a,{name:y,className:O({invalid:!V}),placeholder:Q,value:N,onChange:Z()}))}),T.createElement(x.Field,{name:"interface"},function(r){var y=r.name,S=r.title,N=r.required,F=r.visible,V=r.validate,Q=r.enable,Z=r.value,ee=r.initial,te=r.select,de=r.sync;return T.createElement(g,{name:"interface",label:S},T.createElement("select",{value:Z,onChange:de()},te.map(function(re,ie){return T.createElement("option",{key:ie,value:re.value},re.title)})))}),T.createElement(x.Field,{name:"ip"},function(r){var y=r.name,S=r.title,N=r.value,F=r.visible,V=r.validate,Q=r.placeholder,Z=r.sync;return T.createElement(g,{name:"ip",visible:F,label:S,validate:V,memo:"\u4FEE\u6539\u8FDB\u884C\u5F02\u6B65\u6821\u9A8C"},T.createElement(a,{name:y,validate:V.result,placeholder:Q,value:N,onChange:Z(100)}))}),T.createElement(x.Field,{name:"gateway"},function(r){var y=r.name,S=r.title,N=r.value,F=r.required,V=r.visible,Q=r.validate,Z=r.update,ee=r.enable,te=r.placeholder,de=r.sync;return T.createElement(g,{name:"gateway",visible:V,label:S},T.createElement(a,{name:y,validate:Q,placeholder:te,value:N,onChange:de()}),T.createElement("button",{onClick:Z(function(re){re.gateway.value="192.168.1.2"})},"\u6062\u590D"),T.createElement("button",{onClick:Z("192.168.1.1")},"\u66F4\u65B0\u503C"))}),T.createElement(x.Group,{name:"wifi"},function(r){var y=r.title,S=r.visible;return T.createElement(l,{title:y+"(\u4EC5interfact=wifi\u65F6\u663E\u793A)",visible:S},T.createElement(x.Field,{name:"wifi.ssid"},function(N){var F=N.name,V=N.value,Q=N.required,Z=N.visible,ee=N.validate,te=N.enable,de=N.initial,re=N.sync;return T.createElement(g,{name:"wifi.ssid",label:"SSID",enable:te},T.createElement(a,{name:F,className:O({invalid:!ee}),value:V,onChange:re()}))}),T.createElement(x.Field,{name:"wifi.password"},function(N){var F=N.name,V=N.value,Q=N.enable,Z=N.validate,ee=N.placeholder,te=N.help,de=N.sync;return T.createElement(g,{name:"wifi.password",label:"\u5BC6\u7801",enable:Q,className:O({invalid:!Z})},T.createElement(a,{name:F,style:{border:Z?"1px solid #ccc":"1px solid red"},"data-help":te,value:V,placeholder:ee,onChange:de(),readOnly:!Q}),T.createElement(R,{validate:Z,help:te}))}))}),T.createElement(x.Field,{name:"dhcp.enable"},function(r){var y=r.name,S=r.title,N=r.visible,F=r.value,V=r.validate,Q=r.sync;return T.createElement(g,{name:"dhcp.enable",visible:N,label:S},T.createElement("input",{name:y,className:O({invalid:!V}),type:"checkbox",checked:F,onChange:Q()}))}),T.createElement(x.Field,{name:"dhcp.start"},function(r){var y=r.name,S=r.value,N=r.validate,F=r.enable,V=r.visible,Q=r.title,Z=r.sync;return T.createElement(g,{name:"dhcp.start",label:Q,enable:F},T.createElement(a,{name:y,enable:F,className:O({invalid:!N}),value:S,onChange:Z()}))}),T.createElement(x.Field,{name:"dhcp.end"},function(r){var y=r.name,S=r.value,N=r.validate,F=r.visible,V=r.title,Q=r.enable,Z=r.sync;return T.createElement(g,{name:"dhcp.end",enable:Q,label:V},T.createElement(a,{name:y,enable:Q,className:O({invalid:!N}),value:S,onChange:Z()}))}),T.createElement(x.Submit,null),T.createElement(x.Reset,null)))}});case 22:case"end":return C.stop()}},G)})))),asset:{type:"BLOCK",id:"docs-core-tutorial-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { forms } from 'speedform-docs'
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
}`},"speedform-docs":{type:"NPM",value:"1.0.0"},classnames:{type:"NPM",value:"2.3.2"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"speedform-docs":e(21970),classnames:e(26372),"@speedform/demo-components":e(48398),react:e(92379)},renderOpts:{compile:function(){var G=k()(o()().mark(function j(){var d,O=arguments;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(660).then(e.bind(e,7660));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,O));case 3:case"end":return l.stop()}},j)}));function U(){return G.apply(this,arguments)}return U}()}}}},84867:function(J,i,e){e.r(i),e.d(i,{demos:function(){return U}});var K=e(28633),o=e.n(K),H=e(29008),k=e.n(H),T=e(70958),L=e.n(T),t=e(92379),G=e(59856),U={"docs-reactive-computed-async-demo-0":{component:t.memo(t.lazy(L()(k()().mark(function j(){var d,O,v,l,g,a;return k()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=u.sent,O=d.createStore,v=d.computed,u.next=7,Promise.resolve().then(e.bind(e,21970));case 7:return l=u.sent,g=l.delay,a=O({user:{firstName:"Zhang",lastName:"Fisher",fullName:v(function(){var D=L()(k()().mark(function E(x){return k()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,g();case 2:return C.abrupt("return",x.firstName+x.lastName);case 3:case"end":return C.stop()}},E)}));return function(E){return D.apply(this,arguments)}}(),["user.firstName","./lastName"])}}),u.abrupt("return",{default:function(){var E=a.useState(),x=o()(E,1),P=x[0];return t.createElement(t.Fragment,null,t.createElement("div",null,"firstName:",t.createElement("input",{value:P.user.firstName,onChange:a.sync(["user","firstName"])})),t.createElement("div",null,"lastName:",t.createElement("input",{value:P.user.lastName,onChange:a.sync(["user","lastName"])})),t.createElement("div",null,"fullName:",P.user.fullName.loading?"\u91CD\u65B0\u8BA1\u7B97...":P.user.fullName.result))}});case 11:case"end":return u.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap,$} from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),"speedform-docs":e(21970)},renderOpts:{compile:function(){var j=L()(k()().mark(function O(){var v,l=arguments;return k()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-1":{component:t.memo(t.lazy(L()(k()().mark(function j(){var d,O,v,l,g,a;return k()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=u.sent,O=d.computed,v=d.createStore,u.next=7,Promise.resolve().then(e.bind(e,21970));case 7:return l=u.sent,g=l.api,a=v({user:{repo:"https://api.github.com/users/zhangfisher/repos",projects:O(function(){var D=L()(k()().mark(function E(x){var P,C;return k()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return P=o()(x,1),C=P[0],s.next=3,new Promise(function(c){return setTimeout(c,2e3)});case 3:return s.next=5,g.getProjects(C);case 5:return s.abrupt("return",s.sent);case 6:case"end":return s.stop()}},E)}));return function(E){return D.apply(this,arguments)}}(),["user.repo"],{scope:"depends"})}}),u.abrupt("return",{default:function(){var E=a.useState(),x=o()(E,1),P=x[0];return t.createElement("div",null,t.createElement("p",null,t.createElement("b",null,"\u4FEE\u6539\u4ED3\u5E93\u5730\u5740\u5C06\u89E6\u53D1\u91CD\u65B0\u52A0\u8F7D\u8BE5\u4ED3\u5E93\u9879\u76EE\u5217\u8868")),"\u4ED3\u5E93\u5730\u5740\uFF1A",t.createElement("input",{value:P.user.repo,onChange:a.sync(["user","repo"])}),t.createElement("button",{onClick:function(){return a.state.user.projects.run()}},"\u91CD\u8BD5"),t.createElement("button",{onClick:function(){return a.state.user.repo="https://api.github.com/users/zhangfisher/repos"}},"\u6062\u590D"),t.createElement("table",{className:"projects-list"},t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"3"},"\u4EE5\u4E0B\u662F\u6211\u7684\u5F00\u6E90\u9879\u76EE\uFF0C\u611F\u8C22\u652F\u6301\uFF01")),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u9879\u76EE\u540D\u79F0")),t.createElement("td",null,t.createElement("b",null,"\u8BF4\u660E")),t.createElement("td",null,t.createElement("b",null,"\u661F")))),t.createElement("tbody",null,P.user.projects.loading?t.createElement("tr",null,t.createElement("td",{colSpan:3},"\u6B63\u5728\u52A0\u8F7D...:")):P.user.projects.error?t.createElement("tr",null,t.createElement("td",{colSpan:2},"\u52A0\u8F7D\u9519\u8BEF:",P.user.projects.error)):P.user.projects&&P.user.projects.result.map(function(C,w){return t.createElement("tr",{key:w},t.createElement("td",null,t.createElement("a",{href:C.url,target:"__blank"},C.name)),t.createElement("td",null,C.description),t.createElement("td",null,C.stars))}))))}});case 11:case"end":return u.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { computed,createStore } from "@speedform/reactive"
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

}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),"speedform-docs":e(21970)},renderOpts:{compile:function(){var j=L()(k()().mark(function O(){var v,l=arguments;return k()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-2":{component:t.memo(t.lazy(L()(k()().mark(function j(){var d,O,v,l,g,a;return k()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=u.sent,O=d.createStore,v=d.computed,l=d.ComputedScopeRef,g={user:{firstName:"zhang",lastName:"fisher",fullName:v(function(){var D=L()(k()().mark(function E(x){var P,C,w;return k()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return P=o()(x,2),C=P[0],w=P[1],c.abrupt("return",C+w);case 2:case"end":return c.stop()}},E)}));return function(E){return D.apply(this,arguments)}}(),["user.firstName","user.lastName"],{scope:l.Depends}),fullName1:v(function(){var D=L()(k()().mark(function E(x){var P,C,w;return k()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return P=o()(x,2),C=P[0],w=P[1],c.abrupt("return",C+w);case 2:case"end":return c.stop()}},E)}));return function(E){return D.apply(this,arguments)}}(),["./firstName","./lastName"],{scope:l.Depends})},other:{fullName2:v(function(){var D=L()(k()().mark(function E(x){var P,C,w;return k()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return P=o()(x,2),C=P[0],w=P[1],c.abrupt("return",C+w);case 2:case"end":return c.stop()}},E)}));return function(E){return D.apply(this,arguments)}}(),["../user.firstName","../user.lastName"],{scope:l.Depends})}},a=O(g),u.abrupt("return",{default:function(){var E=a.useState(),x=o()(E,1),P=x[0];return t.createElement("div",null,t.createElement("div",null,"firstName=",P.user.firstName),t.createElement("div",null,"lastName=",P.user.lastName),t.createElement("div",null,"fullName=",P.user.fullName.result),t.createElement("div",null,"fullName1=",P.user.fullName1.result),t.createElement("div",null,"fullName2=",P.other.fullName2.result))}});case 9:case"end":return u.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef } from "@speedform/reactive" 

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458)},renderOpts:{compile:function(){var j=L()(k()().mark(function O(){var v,l=arguments;return k()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-3":{component:t.memo(t.lazy(L()(k()().mark(function j(){var d,O,v,l,g,a,R,u,D,E,x,P;return k()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=w.sent,O=d.createStore,v=d.computed,w.next=7,Promise.resolve().then(e.t.bind(e,92379,19));case 7:return l=w.sent,g=l.useRef,a=l.useEffect,w.next=12,Promise.resolve().then(e.bind(e,21970));case 12:return R=w.sent,u=R.delay,w.next=16,Promise.resolve().then(e.bind(e,48398));case 16:return D=w.sent,E=D.Box,x={user:{firstName:"Zhang",lastName:"Fisher",fullName:v(function(){var s=L()(k()().mark(function c(r){return k()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,u();case 2:return S.abrupt("return",r.firstName+r.lastName);case 3:case"end":return S.stop()}},c)}));return function(c){return s.apply(this,arguments)}}(),["user.firstName","user.lastName"])}},P=O(x),w.abrupt("return",{default:function(){var c=g(0),r=P.useState(),y=o()(r,2),S=y[0],N=y[1];return a(function(){c.current++},[]),t.createElement(E,null,t.createElement("div",null,t.createElement("div",null,"FirstName:",S.user.firstName),t.createElement("div",null,"LastName:",S.user.lastName),t.createElement("div",null,"FullName:",S.user.fullName.loading?"\u6B63\u5728\u8BA1\u7B97...":S.user.fullName.error?"ERROR:".concat(S.user.fullName.error):S.user.fullName.result),t.createElement("button",{onClick:function(){return N(function(V){return V.user.firstName="ZHANG "+c.current++})}},"\u4FEE\u6539FirstName"),t.createElement("button",{onClick:function(){return N(function(V){return V.user.lastName="FISHER"+c.current++})}},"\u4FEE\u6539LastName"),t.createElement("button",{onClick:function(){return S.user.fullName.run()}},"\u91CD\u65B0\u8BA1\u7B97")),t.createElement("div",null,JSON.stringify(S.user.fullName)))}});case 21:case"end":return w.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),react:e(92379),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var j=L()(k()().mark(function O(){var v,l=arguments;return k()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-4":{component:t.memo(t.lazy(L()(k()().mark(function j(){var d,O,v,l,g,a,R,u,D;return k()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=x.sent,O=d.createStore,v=d.computed,l=d.ComputedScopeRef,x.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return g=x.sent,a=g.delay,x.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return R=x.sent,u=R.Box,D=O({order:{bookName:"ZhangFisher",price:100,count:1,total:v(function(){var P=L()(k()().mark(function C(w,s){var c,r,y,S,N;return k()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return c=o()(w,2),r=c[0],y=c[1],S=s.getProgressbar,N=S(),V.abrupt("return",new Promise(function(){var Q=L()(k()().mark(function Z(ee){var te;return k()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:te=1;case 1:if(!(te<=100)){re.next=8;break}return re.next=4,a(20);case 4:N.value(te);case 5:te++,re.next=1;break;case 8:N.end(),ee(r*y);case 10:case"end":return re.stop()}},Z)}));return function(Z){return Q.apply(this,arguments)}}()));case 4:case"end":return V.stop()}},C)}));return function(C,w){return P.apply(this,arguments)}}(),["order.count","order.price"],{scope:l.Depends})}}),x.abrupt("return",{default:function(){var C=D.useState(),w=o()(C,2),s=w[0],c=w[1];return t.createElement(u,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,s.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,s.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return c(function(y){return y.order.count=y.order.count-1})}},"-"),t.createElement("input",{value:s.order.count,onChange:D.sync(function(r){return r.order.count})}),t.createElement("button",{onClick:function(){return c(function(y){return y.order.count=y.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,s.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...".concat(s.order.total.progress,"%"):s.order.total.error?"ERROR:".concat(s.order.total.error):s.order.total.result)))),t.createElement("div",null,JSON.stringify(s.order.total)))}});case 16:case"end":return x.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var j=L()(k()().mark(function O(){var v,l=arguments;return k()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-5":{component:t.memo(t.lazy(L()(k()().mark(function j(){var d,O,v,l,g,a,R,u,D;return k()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=x.sent,O=d.createStore,v=d.computed,l=d.ComputedScopeRef,x.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return g=x.sent,a=g.delay,x.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return R=x.sent,u=R.Box,D=O({order:{bookName:"ZhangFisher",price:100,count:1,total:v(function(){var P=L()(k()().mark(function C(w){var s,c,r;return k()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return s=o()(w,2),c=s[0],r=s[1],S.next=3,a(2e3);case 3:return S.abrupt("return",c*r);case 4:case"end":return S.stop()}},C)}));return function(C){return P.apply(this,arguments)}}(),["order.count","order.price"],{timeout:1e3,scope:l.Depends})}}),x.abrupt("return",{default:function(){var C=D.useState(),w=o()(C,2),s=w[0],c=w[1];return t.createElement(u,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,s.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,s.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return c(function(y){return y.order.count=y.order.count-1})}},"-"),t.createElement("input",{value:s.order.count,onChange:D.sync(function(r){return r.order.count})}),t.createElement("button",{onClick:function(){return c(function(y){return y.order.count=y.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,s.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...(\u8D85\u65F6:".concat(s.order.total.timeout,")"):s.order.total.error?"ERROR:".concat(s.order.total.error):s.order.total.result)))),t.createElement("div",null,JSON.stringify(s.order.total)))}});case 16:case"end":return x.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var j=L()(k()().mark(function O(){var v,l=arguments;return k()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-6":{component:t.memo(t.lazy(L()(k()().mark(function j(){var d,O,v,l,g,a,R,u,D;return k()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=x.sent,O=d.createStore,v=d.computed,l=d.ComputedScopeRef,x.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return g=x.sent,a=g.delay,x.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return R=x.sent,u=R.Box,D=O({order:{bookName:"ZhangFisher",price:100,count:1,total:v(function(){var P=L()(k()().mark(function C(w){var s,c,r;return k()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return s=o()(w,2),c=s[0],r=s[1],S.next=3,a(1e5);case 3:return S.abrupt("return",c*r);case 4:case"end":return S.stop()}},C)}));return function(C){return P.apply(this,arguments)}}(),["order.count","order.price"],{timeout:[5*1e3,5],scope:l.Depends})}}),x.abrupt("return",{default:function(){var C=D.useState(),w=o()(C,2),s=w[0],c=w[1];return t.createElement(u,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,s.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,s.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return c(function(y){return y.order.count=y.order.count-1})}},"-"),t.createElement("input",{value:s.order.count,onChange:D.sync(function(r){return r.order.count})}),t.createElement("button",{onClick:function(){return c(function(y){return y.order.count=y.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,s.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...(\u5012\u8BA1\u65F6:".concat(s.order.total.timeout,")"):s.order.total.error?"ERROR:".concat(s.order.total.error):s.order.total.result)))),t.createElement("div",null,JSON.stringify(s.order.total)))}});case 16:case"end":return x.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var j=L()(k()().mark(function O(){var v,l=arguments;return k()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-7":{component:t.memo(t.lazy(L()(k()().mark(function j(){var d,O,v,l,g,a,R,u,D,E;return k()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=P.sent,O=d.createStore,v=d.computed,l=d.ComputedScopeRef,P.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return g=P.sent,a=g.delay,P.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return R=P.sent,u=R.Box,D=0,E=O({order:{bookName:"ZhangFisher",price:100,count:1,total:v(function(){var C=L()(k()().mark(function w(s){var c,r,y;return k()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return c=o()(s,2),r=c[0],y=c[1],++r,N.next=4,a();case 4:throw new Error("\u8BA1\u7B97\u51FA\u9519"+r);case 5:case"end":return N.stop()}},w)}));return function(w){return C.apply(this,arguments)}}(),["order.count","order.price"],{retry:[5,1e3],scope:l.Depends})}}),P.abrupt("return",{default:function(){var w=E.useState(),s=o()(w,2),c=s[0],r=s[1];return t.createElement(u,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,c.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,c.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return r(function(S){return S.order.count=S.order.count-1})}},"-"),t.createElement("input",{value:c.order.count,onChange:E.sync(function(y){return y.order.count})}),t.createElement("button",{onClick:function(){return r(function(S){D=0,S.order.count=S.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,c.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...":c.order.total.error?"ERROR:".concat(c.order.total.error):c.order.total.result,c.order.total.retry>0?"\u91CD\u8BD5:".concat(c.order.total.retry):"")))),t.createElement("div",null,JSON.stringify(c.order.total)))}});case 17:case"end":return P.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var j=L()(k()().mark(function O(){var v,l=arguments;return k()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-8":{component:t.memo(t.lazy(L()(k()().mark(function j(){var d,O,v,l,g,a,R;return k()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=D.sent,O=d.createStore,v=d.computed,l=d.ComputedScopeRef,D.next=8,Promise.resolve().then(e.bind(e,48398));case 8:return g=D.sent,a=g.Box,R=O({order:{bookName:"ZhangFisher",price:100,count:1,total:v(function(){var E=L()(k()().mark(function x(P,C){var w,s,c,r;return k()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return w=o()(P,2),s=w[0],c=w[1],r=C.abortSignal,S.abrupt("return",new Promise(function(N,F){setTimeout(function(){N(s*c)},1e4),r.addEventListener("abort",function(){F("cancelled")})}));case 3:case"end":return S.stop()}},x)}));return function(x,P){return E.apply(this,arguments)}}(),["order.count","order.price"],{timeout:[10*1e3,10],scope:l.Depends})}}),D.abrupt("return",{default:function(){var x=R.useState(),P=o()(x,2),C=P[0],w=P[1];return t.createElement(a,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,C.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,C.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return w(function(c){return c.order.count=c.order.count-1})}},"-"),t.createElement("input",{value:C.order.count,onChange:R.sync(function(s){return s.order.count})}),t.createElement("button",{onClick:function(){return w(function(c){c.order.count=c.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,C.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...".concat(C.order.total.timeout):C.order.total.error?"ERROR:".concat(C.order.total.error):C.order.total.result,C.order.total.loading?t.createElement("button",{onClick:function(){return C.order.total.cancel()}},"\u53D6\u6D88"):"")))),t.createElement("div",null,JSON.stringify(C.order.total)))}});case 12:case"end":return D.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var j=L()(k()().mark(function O(){var v,l=arguments;return k()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-9":{component:t.memo(t.lazy(L()(k()().mark(function j(){var d,O,v,l;return k()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=a.sent,O=d.createStore,v=d.computed,l=O({bookName:"ZhangFisher",price:100,count:3,total:v(function(){var R=L()(k()().mark(function u(D){return k()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",D.price*D.count);case 1:case"end":return x.stop()}},u)}));return function(u){return R.apply(this,arguments)}}(),[])}),a.abrupt("return",{default:function(){var u=l.useState(),D=o()(u,1),E=D[0];return t.createElement("div",null,t.createElement("div",null,"\u4E66\u540D:",E.bookName),t.createElement("div",null,"\u4EF7\u683C:",E.price),t.createElement("div",null,"\u6570\u91CF:",E.count),t.createElement("div",null,"\u603B\u4EF7:",E.total.result))}});case 7:case"end":return a.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed} from "@speedform/reactive"

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458)},renderOpts:{compile:function(){var j=L()(k()().mark(function O(){var v,l=arguments;return k()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-10":{component:t.memo(t.lazy(L()(k()().mark(function j(){var d,O,v;return k()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=g.sent,O=d.createStore,v=O({bookName:"ZhangFisher",price:100,count:3,total:function(){var a=L()(k()().mark(function u(D){return k()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",D.price*D.count);case 1:case"end":return x.stop()}},u)}));function R(u){return a.apply(this,arguments)}return R}()}),g.abrupt("return",{default:function(){var R=v.useState(),u=o()(R,1),D=u[0];return t.createElement("div",null,t.createElement("div",null,"\u4E66\u540D:",D.bookName),t.createElement("div",null,"\u4EF7\u683C:",D.price),t.createElement("div",null,"\u6570\u91CF:",D.count),t.createElement("div",null,"\u603B\u4EF7:",D.total.result),t.createElement("div",null,"state.total=",String(D.total)))}});case 6:case"end":return g.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore} from "@speedform/reactive"

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458)},renderOpts:{compile:function(){var j=L()(k()().mark(function O(){var v,l=arguments;return k()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}}}},96412:function(J,i,e){e.r(i),e.d(i,{demos:function(){return d}});var K=e(29008),o=e.n(K),H=e(34180),k=e.n(H),T=e(28633),L=e.n(T),t=e(70958),G=e.n(t),U=e(92379),j=e(75394),d={"docs-reactive-computed-intro-demo-0":{component:U.memo(U.lazy(G()(o()().mark(function O(){var v,l,g,a,R,u;return o()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,458));case 2:return v=E.sent,l=v.createStore,E.next=6,Promise.resolve().then(e.bind(e,48398));case 6:return g=E.sent,a=g.Divider,R={firstName:"Zhang",lastName:"Fisher",fullName:function(P){return P.firstName+P.lastName}},u=l(R,{singleton:!1}),E.abrupt("return",{default:function(){var P=u.useState(),C=L()(P,2),w=C[0],s=C[1];return U.createElement("div",null,U.createElement("h4",null,"\u58F0\u660E\u65F6fullName\u662F\u4E00\u4E2A\u51FD\u6570"),U.createElement("div",null,"typeof(user.fullName)=",k()(R.fullName)),U.createElement(a,null),U.createElement("h4",null,"\u521B\u5EFAStore\u540E,state.fullName\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32"),U.createElement("div",null,"typeof(store.state.fullName)=",k()(w.fullName)),U.createElement("div",null,"store.state.fullName==",w.fullName))}});case 11:case"end":return E.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive'; 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var O=G()(o()().mark(function l(){var g,a=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(660).then(e.bind(e,7660));case 2:return u.abrupt("return",(g=u.sent).default.apply(g,a));case 3:case"end":return u.stop()}},l)}));function v(){return O.apply(this,arguments)}return v}()}},"docs-reactive-computed-intro-demo-1":{component:U.memo(U.lazy(G()(o()().mark(function O(){var v,l,g,a,R;return o()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,458));case 2:return v=D.sent,l=v.createStore,g=v.ComputedScopeRef,a={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(x){return x.firstName+x.lastName}}},R=l(a,{scope:function(){return g.Current}}),D.abrupt("return",{default:function(){var x=R.useState(),P=L()(x,2),C=P[0],w=P[1];return U.createElement("div",null,U.createElement("div",null,"FullName:",C.user.fullName))}});case 8:case"end":return D.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive'; 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"store.options.scope==ComputedScopeRef.Current,",title:"ComputedScopeRef.Current"},context:{"@speedform/reactive":e(458)},renderOpts:{compile:function(){var O=G()(o()().mark(function l(){var g,a=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(660).then(e.bind(e,7660));case 2:return u.abrupt("return",(g=u.sent).default.apply(g,a));case 3:case"end":return u.stop()}},l)}));function v(){return O.apply(this,arguments)}return v}()}},"docs-reactive-computed-intro-demo-2":{component:U.memo(U.lazy(G()(o()().mark(function O(){var v,l,g,a;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,458));case 2:return v=u.sent,l=v.createStore,g=v.ComputedScopeRef,a=l({user:{firstName:"Zhang",lastName:"Fisher",fullName:function(E){return E.user.firstName+E.user.lastName}}},{scope:function(){return g.Root}}),u.abrupt("return",{default:function(){var E=a.useState(),x=L()(E,2),P=x[0],C=x[1];return U.createElement("div",null,U.createElement("div",null,"FullName:",P.user.fullName))}});case 7:case"end":return u.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive'; 
 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"store.options.scope==ComputedScopeRef.Root,",title:"ComputedScopeRef.Root"},context:{"@speedform/reactive":e(458)},renderOpts:{compile:function(){var O=G()(o()().mark(function l(){var g,a=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(660).then(e.bind(e,7660));case 2:return u.abrupt("return",(g=u.sent).default.apply(g,a));case 3:case"end":return u.stop()}},l)}));function v(){return O.apply(this,arguments)}return v}()}},"docs-reactive-computed-intro-demo-3":{component:U.memo(U.lazy(G()(o()().mark(function O(){var v,l,g,a,R;return o()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,458));case 2:return v=D.sent,l=v.createStore,g=v.ComputedScopeRef,a={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(x){return x.user.firstName+x.user.lastName}}},R=l(a,{scope:function(){return g.Parent}}),D.abrupt("return",{default:function(){var x=R.useState(),P=L()(x,2),C=P[0],w=P[1];return U.createElement("div",null,U.createElement("div",null,"FullName:",C.user.fullName))}});case 8:case"end":return D.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive'; 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"scope==ComputedScopeRef.Parent",title:"ComputedScopeRef.Parent"},context:{"@speedform/reactive":e(458)},renderOpts:{compile:function(){var O=G()(o()().mark(function l(){var g,a=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(660).then(e.bind(e,7660));case 2:return u.abrupt("return",(g=u.sent).default.apply(g,a));case 3:case"end":return u.stop()}},l)}));function v(){return O.apply(this,arguments)}return v}()}},"docs-reactive-computed-intro-demo-4":{component:U.memo(U.lazy(G()(o()().mark(function O(){var v,l,g,a;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,458));case 2:return v=u.sent,l=v.createStore,g={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(E){return E},address:{city:"Quanzhou"}}},a=l(g,{scope:function(){return"firstName"}}),u.abrupt("return",{default:function(){var E=a.useState(),x=L()(E,2),P=x[0],C=x[1];return U.createElement("div",null,U.createElement("div",null,"FullName:",P.user.fullName))}});case 7:case"end":return u.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive'; 

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"store.options.scope==<\u5B57\u7B26\u4E32>",title:"<\u5B57\u7B26\u4E32>"},context:{"@speedform/reactive":e(458)},renderOpts:{compile:function(){var O=G()(o()().mark(function l(){var g,a=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(660).then(e.bind(e,7660));case 2:return u.abrupt("return",(g=u.sent).default.apply(g,a));case 3:case"end":return u.stop()}},l)}));function v(){return O.apply(this,arguments)}return v}()}},"docs-reactive-computed-intro-demo-5":{component:U.memo(U.lazy(G()(o()().mark(function O(){var v,l,g,a;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,458));case 2:return v=u.sent,l=v.createStore,g={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(E){return E},address:{city:"Quanzhou"}}},a=l(g,{scope:function(){return["user","address","city"]}}),u.abrupt("return",{default:function(){var E=a.useState(),x=L()(E,2),P=x[0],C=x[1];return U.createElement("div",null,U.createElement("div",null,"FullName:",P.user.fullName))}});case 7:case"end":return u.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive'; 

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",title:"<\u5B57\u7B26\u4E32\u6570\u7EC4>"},context:{"@speedform/reactive":e(458)},renderOpts:{compile:function(){var O=G()(o()().mark(function l(){var g,a=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(660).then(e.bind(e,7660));case 2:return u.abrupt("return",(g=u.sent).default.apply(g,a));case 3:case"end":return u.stop()}},l)}));function v(){return O.apply(this,arguments)}return v}()}},"docs-reactive-computed-intro-demo-6":{component:U.memo(U.lazy(G()(o()().mark(function O(){var v,l,g,a,R,u;return o()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,458));case 2:return v=E.sent,l=v.createStore,g=v.computed,a=v.ComputedScopeRef,R={user:{firstName:"Zhang",lastName:"Fisher",fullName:g(function(){var x=G()(o()().mark(function P(C){return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",C[0]+C[1]);case 1:case"end":return s.stop()}},P)}));return function(P){return x.apply(this,arguments)}}(),["user.firstName","user.lastName"],{async:!0,scope:a.Depends})}},u=l(R),E.abrupt("return",{default:function(){var P=u.useState(),C=L()(P,2),w=C[0],s=C[1];return U.createElement("div",null,U.createElement("div",null,"FullName:",w.user.fullName.result))}});case 9:case"end":return E.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef  } from '@speedform/reactive'; 

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",title:"<\u5B57\u7B26\u4E32\u6570\u7EC4>"},context:{"@speedform/reactive":e(458)},renderOpts:{compile:function(){var O=G()(o()().mark(function l(){var g,a=arguments;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(660).then(e.bind(e,7660));case 2:return u.abrupt("return",(g=u.sent).default.apply(g,a));case 3:case"end":return u.stop()}},l)}));function v(){return O.apply(this,arguments)}return v}()}}}},46206:function(J,i,e){e.r(i),e.d(i,{demos:function(){return v}});var K=e(12027),o=e.n(K),H=e(34180),k=e.n(H),T=e(28633),L=e.n(T),t=e(29008),G=e.n(t),U=e(70958),j=e.n(U),d=e(92379),O=e(83818),v={"docs-reactive-computed-objects-demo-0":{component:d.memo(d.lazy(j()(G()().mark(function l(){var g,a,R,u,D,E,x,P,C;return G()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,458));case 2:return g=s.sent,a=g.createStore,R=g.computed,s.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return u=s.sent,D=u.Divider,E=u.ColorBlock,x=0,P={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(r){return r.firstName+r.lastName+" (".concat(++x,")")},fullName2:R(function(){var c=j()(G()().mark(function r(y){return G()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.abrupt("return",y.firstName+y.lastName+" (".concat(++x,")"));case 1:case"end":return N.stop()}},r)}));return function(r){return c.apply(this,arguments)}}(),[],{async:!0})}},C=a(P),s.abrupt("return",{default:function(){var r=C.useState(),y=L()(r,1),S=y[0];return d.createElement("div",null,d.createElement("div",null,"FirstName =",S.user.firstName),d.createElement("div",null,"LastName =",S.user.lastName),d.createElement(E,{name:"FullName",value:S.user.fullName}),d.createElement(E,{name:"FullName2",value:S.user.fullName2.result}),d.createElement(D,null),d.createElement("div",null,"typeof(store.computedObjects)==",k()(C.computedObjects)),d.createElement("div",null,"store.computedObjects instanceof Map=",String(C.computedObjects instanceof Map)),d.createElement("div",null,"store.computedObjects.size=",C.computedObjects.size),d.createElement("div",null,"store.computedObjects.size=",C.computedObjects.size),d.createElement("div",null,"store.computedObjects.keys()=",o()(C.computedObjects.keys()).join(" , ")),d.createElement("button",{onClick:function(){return C.computedObjects.get("user/fullName").run()}},"\u6267\u884CfullName\u8BA1\u7B97\u51FD\u6570"),d.createElement("button",{onClick:function(){return C.computedObjects.get("user/fullName2").run()}},"\u6267\u884CfullName2\u8BA1\u7B97\u51FD\u6570"),d.createElement("button",{onClick:function(){return C.state.user.fullName2.run()}},"\u6267\u884CfullName2\u8BA1\u7B97\u51FD\u6570"))}});case 14:case"end":return s.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var l=j()(G()().mark(function a(){var R,u=arguments;return G()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(660).then(e.bind(e,7660));case 2:return E.abrupt("return",(R=E.sent).default.apply(R,u));case 3:case"end":return E.stop()}},a)}));function g(){return l.apply(this,arguments)}return g}()}},"docs-reactive-computed-objects-demo-1":{component:d.memo(d.lazy(j()(G()().mark(function l(){var g,a,R,u,D,E,x,P,C,w;return G()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,458));case 2:return g=c.sent,a=g.createStore,R=g.computed,c.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return u=c.sent,D=u.Divider,c.next=11,Promise.resolve().then(e.bind(e,21970));case 11:return E=c.sent,x=E.delay,P=0,C={book:{name:"Zhang",count:4,price:100,total1:R(function(){var r=j()(G()().mark(function y(S){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.count*S.price);case 3:case"end":return F.stop()}},y)}));return function(y){return r.apply(this,arguments)}}(),[],{async:!0,group:"total"}),total2:R(function(){var r=j()(G()().mark(function y(S){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.count*S.price);case 3:case"end":return F.stop()}},y)}));return function(y){return r.apply(this,arguments)}}(),[],{async:!0,group:"total"}),total3:R(function(){var r=j()(G()().mark(function y(S){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.count*S.price);case 3:case"end":return F.stop()}},y)}));return function(y){return r.apply(this,arguments)}}(),[],{async:!0,group:"total"}),average1:R(function(){var r=j()(G()().mark(function y(S){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.price/S.count);case 3:case"end":return F.stop()}},y)}));return function(y){return r.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average2:R(function(){var r=j()(G()().mark(function y(S){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.price/S.count);case 3:case"end":return F.stop()}},y)}));return function(y){return r.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average3:R(function(){var r=j()(G()().mark(function y(S){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.price/S.count);case 3:case"end":return F.stop()}},y)}));return function(y){return r.apply(this,arguments)}}(),[],{async:!0,group:"average"})}},w=a(C),c.abrupt("return",{default:function(){var y=w.useState(),S=L()(y,1),N=S[0];return d.createElement("div",null,d.createElement("div",null,"BookName =",N.book.name),d.createElement("div",null,"count = ",d.createElement("input",{value:N.book.count,onChange:w.sync(["book","count"])})),d.createElement("div",null,"price = ",d.createElement("input",{value:N.book.price,onChange:w.sync(["book","price"])})),d.createElement(D,{title:"Total Group"}),d.createElement("div",null,"Total1 =",N.book.total1.loading?"\u8BA1\u7B97\u4E2D...":N.book.total1.result),d.createElement("div",null,"Total2 =",N.book.total2.loading?"\u8BA1\u7B97\u4E2D...":N.book.total2.result),d.createElement("div",null,"Total3 =",N.book.total3.loading?"\u8BA1\u7B97\u4E2D...":N.book.total3.result),d.createElement("button",{onClick:function(){return w.computedObjects.runGroup("total")}},"\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570"),d.createElement(D,{title:"Average Group"}),d.createElement("div",null,"Average1 =",N.book.average1.loading?"\u8BA1\u7B97\u4E2D...":N.book.average1.result),d.createElement("div",null,"Average2 =",N.book.average2.loading?"\u8BA1\u7B97\u4E2D...":N.book.average2.result),d.createElement("div",null,"Average3 =",N.book.average3.loading?"\u8BA1\u7B97\u4E2D...":N.book.average3.result),d.createElement("button",{onClick:function(){return w.computedObjects.runGroup("average")}},"\u6267\u884C\u7EC4average\u8BA1\u7B97\u51FD\u6570"))}});case 17:case"end":return c.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),"@speedform/demo-components":e(48398),"speedform-docs":e(21970)},renderOpts:{compile:function(){var l=j()(G()().mark(function a(){var R,u=arguments;return G()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(660).then(e.bind(e,7660));case 2:return E.abrupt("return",(R=E.sent).default.apply(R,u));case 3:case"end":return E.stop()}},a)}));function g(){return l.apply(this,arguments)}return g}()}},"docs-reactive-computed-objects-demo-2":{component:d.memo(d.lazy(j()(G()().mark(function l(){var g,a,R,u,D,E,x,P,C,w;return G()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,458));case 2:return g=c.sent,a=g.createStore,R=g.computed,c.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return u=c.sent,D=u.Divider,c.next=11,Promise.resolve().then(e.bind(e,21970));case 11:return E=c.sent,x=E.delay,P=0,C={book:{name:"Zhang",count:4,price:100,total1:R(function(){var r=j()(G()().mark(function y(S){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.count*S.price);case 3:case"end":return F.stop()}},y)}));return function(y){return r.apply(this,arguments)}}(),["book.count","book.price"],{async:!0,group:"total"}),total2:R(function(){var r=j()(G()().mark(function y(S){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.count*S.price);case 3:case"end":return F.stop()}},y)}));return function(y){return r.apply(this,arguments)}}(),["book.count","book.price"],{async:!0,group:"total",initial:100,enable:!1}),total3:R(function(){var r=j()(G()().mark(function y(S){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.count*S.price);case 3:case"end":return F.stop()}},y)}));return function(y){return r.apply(this,arguments)}}(),[],{async:!0,group:"total"}),average1:R(function(){var r=j()(G()().mark(function y(S){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.price/S.count);case 3:case"end":return F.stop()}},y)}));return function(y){return r.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average2:R(function(){var r=j()(G()().mark(function y(S){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.price/S.count);case 3:case"end":return F.stop()}},y)}));return function(y){return r.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average3:R(function(){var r=j()(G()().mark(function y(S){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.price/S.count);case 3:case"end":return F.stop()}},y)}));return function(y){return r.apply(this,arguments)}}(),[],{async:!0,group:"average"})}},w=a(C),c.abrupt("return",{default:function(){var y=w.useState(),S=L()(y,1),N=S[0];return d.createElement("div",null,d.createElement("div",null,"BookName =",N.book.name),d.createElement("div",null,"count = ",d.createElement("input",{value:N.book.count,onChange:w.sync(["book","count"])})),d.createElement("div",null,"price = ",d.createElement("input",{value:N.book.price,onChange:w.sync(["book","price"])})),d.createElement(D,{title:"Total Group"}),d.createElement("table",null,d.createElement("tbody",null,d.createElement("tr",null,d.createElement("td",null,"Total1 ="),d.createElement("td",null,N.book.total1.loading?"\u8BA1\u7B97\u4E2D...":N.book.total1.result),d.createElement("td",null,"\u9ED8\u8BA4\u81EA\u52A8\u8BA1\u7B97")),d.createElement("tr",null,d.createElement("td",null,"Total2 ="),d.createElement("td",null,N.book.total2.loading?"\u8BA1\u7B97\u4E2D...":N.book.total2.result),d.createElement("td",null,"\u7981\u7528\u8BA1\u7B97\uFF0C\u6307\u5B9A\u4E86\u9ED8\u8BA4\u503C(",d.createElement("input",{type:"checkbox",checked:w.computedObjects.get("book/total2"),onChange:function(V){console.log("ff=,",V.target,w.computedObjects.get("book/total2"))}}),")")),d.createElement("tr",null,d.createElement("td",null,"Total3 ="),d.createElement("td",null,N.book.total3.loading?"\u8BA1\u7B97\u4E2D...":N.book.total3.result),d.createElement("td",null,"\u65E0\u4F9D\u8D56\uFF0C\u9700\u8981\u624B\u52A8\u8BA1\u7B97")))),d.createElement("button",{onClick:function(){return w.computedObjects.runGroup("total")}},"\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570"),d.createElement(D,{title:"Average Group"}),d.createElement("div",null,"Average1 =",N.book.average1.loading?"\u8BA1\u7B97\u4E2D...":N.book.average1.result),d.createElement("div",null,"Average2 =",N.book.average2.loading?"\u8BA1\u7B97\u4E2D...":N.book.average2.result),d.createElement("div",null,"Average3 =",N.book.average3.loading?"\u8BA1\u7B97\u4E2D...":N.book.average3.result),d.createElement("button",{onClick:function(){return w.computedObjects.runGroup("average")}},"\u6267\u884C\u7EC4average\u8BA1\u7B97\u51FD\u6570"))}});case 17:case"end":return c.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),"@speedform/demo-components":e(48398),"speedform-docs":e(21970)},renderOpts:{compile:function(){var l=j()(G()().mark(function a(){var R,u=arguments;return G()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(660).then(e.bind(e,7660));case 2:return E.abrupt("return",(R=E.sent).default.apply(R,u));case 3:case"end":return E.stop()}},a)}));function g(){return l.apply(this,arguments)}return g}()}},"docs-reactive-computed-objects-demo-3":{component:d.memo(d.lazy(j()(G()().mark(function l(){var g,a,R,u,D,E,x,P;return G()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,Promise.resolve().then(e.bind(e,458));case 2:return g=w.sent,a=g.createStore,R=g.computed,w.next=7,Promise.resolve().then(e.bind(e,21970));case 7:return u=w.sent,D=u.delay,E=0,x={book:{name:"Zhang",count:4,price:100,total:R(function(){var s=j()(G()().mark(function c(r){return G()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,D();case 2:return S.abrupt("return",r.count*r.price);case 3:case"end":return S.stop()}},c)}));return function(c){return s.apply(this,arguments)}}(),[],{async:!0,group:"total"})}},P=a(x),w.abrupt("return",{default:function(){var c=P.useState(),r=L()(c,1),y=r[0];return d.createElement("div",null,d.createElement("div",null,"BookName =",y.book.name),d.createElement("div",null,"count = ",d.createElement("input",{value:y.book.count,onChange:P.sync(["book","count"])})),d.createElement("div",null,"price = ",d.createElement("input",{value:y.book.price,onChange:P.sync(["book","price"])})),d.createElement("div",null,"Total =",y.book.total.loading?"\u8BA1\u7B97\u4E2D...":y.book.total.result),d.createElement("button",{onClick:function(){return P.computedObjects.runGroup("total")}},"\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570"))}});case 13:case"end":return w.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),"speedform-docs":e(21970)},renderOpts:{compile:function(){var l=j()(G()().mark(function a(){var R,u=arguments;return G()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(660).then(e.bind(e,7660));case 2:return E.abrupt("return",(R=E.sent).default.apply(R,u));case 3:case"end":return E.stop()}},a)}));function g(){return l.apply(this,arguments)}return g}()}}}},31992:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(46489),H={}},57190:function(J,i,e){e.r(i),e.d(i,{demos:function(){return U}});var K=e(29008),o=e.n(K),H=e(28633),k=e.n(H),T=e(70958),L=e.n(T),t=e(92379),G=e(63035),U={"docs-reactive-computed-sync-demo-0":{component:t.memo(t.lazy(L()(o()().mark(function j(){var d,O,v,l;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=a.sent,O=d.createStore,v={books:[{name:"\u5F20\u4E09",price:18,author:"tom",count:2,total:function(u){return u.price*u.count}},{name:"\u674E\u56DB",price:19,author:"jack",count:3,total:function(u){return u.price*u.count}}],total:function(u){return u.books.reduce(function(D,E){return D+E.total},0)}},l=O(v),a.abrupt("return",{default:function(){var u=l.useState(),D=k()(u,2),E=D[0],x=D[1];return t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"\u4E66\u540D"),t.createElement("th",null,"\u4F5C\u8005"),t.createElement("th",null,"\u5355\u4EF7"),t.createElement("th",null,"\u6570\u91CF"),t.createElement("th",null,"\u5C0F\u8BA1"))),t.createElement("tbody",null,E.books.map(function(P,C){return t.createElement("tr",{key:C},t.createElement("td",null,P.name),t.createElement("td",null,P.author),t.createElement("td",null,P.price),t.createElement("td",null,t.createElement("button",{onClick:function(){return l.state.books[C].count=l.state.books[C].count-1}},"-"),P.count,t.createElement("button",{onClick:function(){return l.state.books[C].count=l.state.books[C].count+1}},"+")),t.createElement("td",null,P.total))}),t.createElement("tr",null,t.createElement("td",{colSpan:4},"\u603B\u8BA1"),t.createElement("td",null,E.total))))}});case 7:case"end":return a.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-sync-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive';

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458)},renderOpts:{compile:function(){var j=L()(o()().mark(function O(){var v,l=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}}}},12655:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(5757),H={}},24968:function(J,i,e){e.r(i),e.d(i,{demos:function(){return U}});var K=e(29008),o=e.n(K),H=e(28633),k=e.n(H),T=e(70958),L=e.n(T),t=e(92379),G=e(85164),U={"docs-reactive-render-demo-0":{component:t.memo(t.lazy(L()(o()().mark(function j(){var d,O,v,l,g,a,R,u,D,E;return o()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.t.bind(e,92379,19));case 2:return d=P.sent,O=d.default,v=d.createContext,l=d.useContext,g=d.useState,P.next=9,Promise.resolve().then(e.bind(e,48398));case 9:return a=P.sent,R=a.Block,u=v({firstName:"Zhang",lastName:"Fisher",age:18}),D=O.memo(function(C){var w=l(u);return O.createElement(R,{name:"\u5B50\u7EC4\u4EF6:".concat(C.name)},O.createElement("span",null,"Hello :",w.firstName," ",w.lastName))}),E=0,P.abrupt("return",{default:function(){var w=g({firstName:"Zhang",lastName:"Fisher",age:18}),s=k()(w,2),c=s[0],r=s[1];return O.createElement(u.Provider,{value:c},O.createElement("div",null,"\u6839\u7EC4\u4EF6"),O.createElement("div",null,"Hello :",c.firstName," ",c.lastName),O.createElement("div",null,"Age :",c.age),O.createElement("button",{onClick:function(){r({firstName:"Zhang",lastName:"Fisher",age:++E})}},"+Age"),O.createElement(D,{name:"A"}),O.createElement(D,{name:"B"}))}});case 15:case"end":return P.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-render-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},react:{type:"NPM",value:"18.3.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{react:e(92379),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var j=L()(o()().mark(function O(){var v,l=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}},"docs-reactive-render-demo-1":{component:t.memo(t.lazy(L()(o()().mark(function j(){var d,O,v,l,g,a,R,u,D,E,x;return o()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=C.sent,O=d.createStore,C.next=6,Promise.resolve().then(e.t.bind(e,92379,19));case 6:return v=C.sent,l=v.default,C.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return g=C.sent,a=g.Block,R={firstName:"Zhang",lastName:"Fisher",age:18},u=O(R),D=l.memo(function(w){var s=u.useState(),c=k()(s,2),r=c[0],y=c[1],S=r.firstName;return l.createElement(a,{name:"\u5B50\u7EC4\u4EF6:FirstName"},l.createElement("span",null,"Hello :",S))}),E=l.memo(function(w){var s=u.useState(),c=k()(s,2),r=c[0],y=c[1],S=r.lastName;return l.createElement(a,{name:"\u5B50\u7EC4\u4EF6:lastName"},l.createElement("span",null,"Hello :",S))}),x=0,C.abrupt("return",{default:function(){var s=u.useState(),c=k()(s,2),r=c[0],y=c[1];return l.createElement(l.Fragment,null,l.createElement("div",null,"\u6839\u7EC4\u4EF6"),l.createElement("div",null,"Hello :",r.firstName," ",r.lastName),l.createElement("div",null,"Age ",++x,":",r.age),l.createElement("button",{onClick:function(){return y(function(N){return N.age=N.age+1})}},"+Age"),l.createElement("button",{onClick:function(){return y(function(N){return N.firstName=N.firstName+"r"})}},"Change FirstName"),l.createElement(D,null),l.createElement(E,null))}});case 18:case"end":return C.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-render-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),react:e(92379),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var j=L()(o()().mark(function O(){var v,l=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}},"docs-reactive-render-demo-2":{component:t.memo(t.lazy(L()(o()().mark(function j(){var d,O,v,l,g,a,R,u,D,E,x,P,C;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=s.sent,O=d.createStore,s.next=6,Promise.resolve().then(e.t.bind(e,92379,19));case 6:return v=s.sent,l=v.default,s.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return g=s.sent,a=g.Block,s.next=14,Promise.resolve().then(e.bind(e,13834));case 14:return R=s.sent,u=R.$,D={firstName:"Zhang",lastName:"Fisher",age:18},E=O(D),x=l.memo(function(c){return l.createElement(a,{name:"\u5B50\u7EC4\u4EF6:FirstName"},l.createElement("span",null,"Hello :",E.state.firstName," ",E.state.lastName,"(\u6CA1\u6709\u4F7F\u7528Signal)"))}),P=l.memo(function(c){return l.createElement(a,{name:"\u5B50\u7EC4\u4EF6:LastName"},l.createElement("span",null,"Hello :",u(E.state.firstName)," ",E.state.lastName))}),C=0,s.abrupt("return",{default:function(){return l.createElement(l.Fragment,null,l.createElement("div",null,"\u6839\u7EC4\u4EF6"),l.createElement("div",null,"Hello :",E.state.firstName," ",E.state.lastName),l.createElement("div",null,"Age ",++C,":",u(E.state.age)),l.createElement("button",{onClick:function(){return E.state.age=E.state.age+1}},"+Age"),l.createElement("button",{onClick:function(){return E.state.firstName=E.state.firstName+"r"}},"Change FirstName"),l.createElement(x,null),l.createElement(P,null))}});case 22:case"end":return s.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-render-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},helux:{type:"NPM",value:"4.3.2"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),react:e(92379),"@speedform/demo-components":e(48398),helux:e(13834)},renderOpts:{compile:function(){var j=L()(o()().mark(function O(){var v,l=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}}}},75158:function(J,i,e){e.r(i),e.d(i,{demos:function(){return U}});var K=e(29008),o=e.n(K),H=e(28633),k=e.n(H),T=e(70958),L=e.n(T),t=e(92379),G=e(90054),U={"docs-reactive-state-demo-0":{component:t.memo(t.lazy(L()(o()().mark(function j(){var d,O,v,l;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=a.sent,O=d.createStore,v={firstName:"Zhang",lastName:"Fisher",age:18},l=O(v),a.abrupt("return",{default:function(){var u=l.useState(),D=k()(u,2),E=D[0],x=D[1];return t.createElement("div",null,t.createElement("div",null,"Hello :",E.firstName," ",E.lastName),t.createElement("div",null,"Age :",E.age),t.createElement("button",{onClick:function(){return x(function(C){return C.age+=1})}},"+Age"))}});case 7:case"end":return a.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-state-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458)},renderOpts:{compile:function(){var j=L()(o()().mark(function O(){var v,l=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}},"docs-reactive-state-demo-1":{component:t.memo(t.lazy(L()(o()().mark(function j(){var d,O,v,l,g,a,R,u;return o()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=E.sent,O=d.createStore,E.next=6,Promise.resolve().then(e.bind(e,48398));case 6:return v=E.sent,l=v.ColorBlock,g={firstName:"Zhang",lastName:"Fisher",fullName:function(P){return P.firstName+P.lastName}},a=O(g),R=t.memo(function(){var x=a.useState(function(w){return w.firstName}),P=k()(x,1),C=P[0];return t.createElement(l,{name:"FirstName",value:C})}),u=t.memo(function(){var x=a.useState(function(w){return w.lastName}),P=k()(x,1),C=P[0];return t.createElement(l,{name:"LastName",value:C})}),E.abrupt("return",{default:function(){var P=a.useState(function(N){return N.firstName},function(N,F){return N.firstName=F}),C=k()(P,2),w=C[0],s=C[1],c=a.useState(function(N){return N.fullName},function(N,F){var V=k()(F,2),Q=V[0],Z=V[1];N.firstName=Q,N.lastName=Z}),r=k()(c,2),y=r[0],S=r[1];return t.createElement("div",null,t.createElement(R,null),t.createElement(u,null),t.createElement("div",null,"FullName :",y),t.createElement("button",{onClick:function(){return s(w+"r")}},"change FirstName"),t.createElement("button",{onClick:function(){return S(["Hello","Voerkai18n"])}},"change FullName"))}});case 13:case"end":return E.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-state-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var j=L()(o()().mark(function O(){var v,l=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}},"docs-reactive-state-demo-2":{component:t.memo(t.lazy(L()(o()().mark(function j(){var d,O,v,l,g,a;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=u.sent,O=d.createStore,u.next=6,Promise.resolve().then(e.bind(e,13834));case 6:return v=u.sent,l=v.$,g={firstName:"Zhang",lastName:"Fisher",age:18},a=O(g),u.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement("div",null,"Hello :",a.state.firstName," ",a.state.lastName),t.createElement("div",null,"Age+Signal :",l(a.state.age)),t.createElement("div",null,"Age :",a.state.age),t.createElement("button",{onClick:function(){return a.state.age=a.state.age+1}},"+Age"))}});case 11:case"end":return u.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-state-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},helux:{type:"NPM",value:"4.3.2"}},entry:"index.tsx",description:"\u901A\u8FC7store.state.firstName\u76F4\u63A5\u8BFB\u53D6\u72B6\u6001,\u4E0D\u901A\u8FC7useState\u65B9\u6CD5",title:"\u8BFB\u53D6\u72B6\u6001"},context:{"@speedform/reactive":e(458),helux:e(13834)},renderOpts:{compile:function(){var j=L()(o()().mark(function O(){var v,l=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}}}},21476:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(54862),H={}},53348:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(28794),H={}},66903:function(J,i,e){e.r(i),e.d(i,{demos:function(){return U}});var K=e(29008),o=e.n(K),H=e(28633),k=e.n(H),T=e(70958),L=e.n(T),t=e(92379),G=e(44834),U={"docs-reactive-watch-objects-demo-0":{component:t.memo(t.lazy(L()(o()().mark(function j(){var d,O,v,l,g,a,R,u,D;return o()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return R=function(C){return v(function(w,s){var c=s.state;return c.price*w},function(w){return w[w.length-1]==="count"},{initial:2,group:C})},x.next=3,Promise.resolve().then(e.bind(e,458));case 3:return d=x.sent,O=d.createStore,v=d.watch,x.next=8,Promise.resolve().then(e.bind(e,48398));case 8:return l=x.sent,g=l.ColorBlock,a=l.Divider,u={bookName:"zhang",price:2,count:1,total1:R("a"),total2:R("a"),total3:R("b"),total4:R("b"),total5:R("b")},D=O({state:u}),globalThis.Store=D,x.abrupt("return",{default:function(){var C=D.useState(),w=k()(C,2),s=w[0],c=w[1];return typeof s.total1=="function"&&console.warn("state.total1 is function"),t.createElement("div",null,t.createElement("div",null,"bookName=",s.bookName),t.createElement("div",null,"price=",s.price),t.createElement("div",null,"count=",t.createElement("button",{onClick:function(){return c(function(y){return y.count=y.count-1})}},"-"),t.createElement("input",{value:s.count,onChange:D.sync(function(r){return r.count})}),t.createElement("button",{onClick:function(){return c(function(y){return y.count=y.count+1})}},"+")),t.createElement(a,{name:"A Group"}),t.createElement(g,{name:"Total-1",value:s.total1}),t.createElement(g,{name:"Total-2",value:s.total2}),t.createElement("button",{onClick:function(){return D.watchObjects.enableGroup("a",!0)}},"Enable A Group"),t.createElement("button",{onClick:function(){return D.watchObjects.enableGroup("a",!1)}},"Disable A Group"),t.createElement("div",null,"\u5F53\u7981\u7528A Group\u65F6\uFF0C\u4FEE\u6539count\u65F6\u4E0D\u4F1A\u5BFC\u81F4total\u53D8\u5316\uFF0C\u56E0\u4E3A\u8BE5\u7EC4\u88AB\u7981\u6B62\u6267\u884C\u4E86"),t.createElement(a,{name:"B Group"}),t.createElement(g,{name:"Total-3",value:s.total3}),t.createElement(g,{name:"Total-4",value:s.total4}),t.createElement(g,{name:"Total-5",value:s.total5}),t.createElement("button",{onClick:function(){return D.watchObjects.enableGroup("b",!0)}},"Enable B Group"),t.createElement("button",{onClick:function(){return D.watchObjects.enableGroup("b",!1)}},"Disable B Group"))}});case 15:case"end":return x.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-objects-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,watch } from "@speedform/reactive" 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var j=L()(o()().mark(function O(){var v,l=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}}}},51088:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(3955),H={}},49056:function(J,i,e){e.r(i),e.d(i,{demos:function(){return U}});var K=e(29008),o=e.n(K),H=e(28633),k=e.n(H),T=e(70958),L=e.n(T),t=e(92379),G=e(7070),U={"docs-reactive-watch-demo-0":{component:t.memo(t.lazy(L()(o()().mark(function j(){var d,O,v,l,g;return o()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=R.sent,O=d.createStore,v=d.watch,l={orders:[{bookName:"SpeedForm Quick-Start",price:100,count:1,total:function(D){return D.price*D.count}},{bookName:"Helux",price:98,count:1,total:function(D){return D.price*D.count}}],total:v(function(u){return g.state.orders.reduce(function(D,E){return D+E.count*E.price},0)},function(u){return u[u.length-1]==="count"},{initial:198})},g=O({state:l},{singleton:!1}),R.abrupt("return",{default:function(){var D=g.useState(),E=k()(D,1),x=E[0];return t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"BookName"),t.createElement("th",null,"Price"),t.createElement("th",null,"Count"),t.createElement("th",null,"Total"))),t.createElement("tbody",null,x.orders.map(function(P,C){return t.createElement("tr",{key:C},t.createElement("td",null,P.bookName),t.createElement("td",null,P.price),t.createElement("td",null,t.createElement("input",{value:P.count,onChange:g.sync(function(w){return w.orders[C].count})})),t.createElement("td",null,P.total))}),t.createElement("tr",null,t.createElement("td",{colSpan:3},"Total"),t.createElement("td",null,x.total))))}});case 8:case"end":return R.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,watch } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458)},renderOpts:{compile:function(){var j=L()(o()().mark(function O(){var v,l=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}},"docs-reactive-watch-demo-1":{component:t.memo(t.lazy(L()(o()().mark(function j(){var d,O,v,l,g,a,R,u,D;return o()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=x.sent,O=d.createStore,v=d.computed,l=d.ComputedScopeRef,x.next=8,Promise.resolve().then(e.t.bind(e,92379,19));case 8:return g=x.sent,a=g.useEffect,R=g.useState,u={user:{firstName:"zhang",lastName:"fisher",fullName:v(function(){var P=L()(o()().mark(function C(w){var s,c,r;return o()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return s=k()(w,2),c=s[0],r=s[1],S.abrupt("return",c+r);case 2:case"end":return S.stop()}},C)}));return function(C){return P.apply(this,arguments)}}(),["user/firstName","user/lastName"],{scope:l.Depends})}},D=O({state:u}),x.abrupt("return",{default:function(){var C=D.useState(),w=k()(C,1),s=w[0],c=R(""),r=k()(c,2),y=r[0],S=r[1];return a(function(){var N=D.watch(function(F){S(F.map(function(V){return V.join("/")}).join(","))},["user/firstName","user/lastName"]);return N},[]),t.createElement("div",null,t.createElement("div",null,"watch: ",y),t.createElement("div",null,"firstName=",t.createElement("input",{value:s.user.firstName,onChange:D.sync(function(N){return N.user.firstName})})),t.createElement("div",null,"lastName=",t.createElement("input",{value:s.user.lastName,onChange:D.sync(function(N){return N.user.lastName})})),t.createElement("div",null,"fullName=",s.user.fullName.result))}});case 14:case"end":return x.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef } from "@speedform/reactive" 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),react:e(92379)},renderOpts:{compile:function(){var j=L()(o()().mark(function O(){var v,l=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}},"docs-reactive-watch-demo-2":{component:t.memo(t.lazy(L()(o()().mark(function j(){var d,O,v,l,g,a,R,u;return o()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,458));case 2:return d=E.sent,O=d.createStore,v=d.computed,l=d.ComputedScopeRef,E.next=8,Promise.resolve().then(e.t.bind(e,92379,19));case 8:return g=E.sent,a=g.useState,R={user:{firstName:"zhang",lastName:"fisher",fullName:v(function(){var x=L()(o()().mark(function P(C){var w,s,c;return o()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return w=k()(C,2),s=w[0],c=w[1],y.abrupt("return",s+c);case 2:case"end":return y.stop()}},P)}));return function(P){return x.apply(this,arguments)}}(),["user/firstName","user/lastName"],{scope:l.Depends})}},u=O({state:R}),E.abrupt("return",{default:function(){var P=u.useState(),C=k()(P,1),w=C[0],s=a(""),c=k()(s,2),r=c[0],y=c[1],S=a("user/firstName"),N=k()(S,2),F=N[0],V=N[1],Q=a(""),Z=k()(Q,2),ee=Z[0],te=Z[1];return u.useWatch(function(de,re){return y(re.join("/")),te(de),de},F,{id:"use1"}),t.createElement("div",null,t.createElement("div",null,"watch for: ",F),t.createElement("div",null,"Watch value:",ee),t.createElement("div",null,"firstName=",t.createElement("input",{value:w.user.firstName,onChange:u.sync(function(de){return de.user.firstName})})),t.createElement("div",null,"lastName=",t.createElement("input",{value:w.user.lastName,onChange:u.sync(function(de){return de.user.lastName})})),t.createElement("div",null,"fullName=",w.user.fullName.result),t.createElement("button",{onClick:function(){return V("user/firstName")}},"watch firstName"),t.createElement("button",{onClick:function(){return V("user/lastName")}},"watch lastName"))}});case 13:case"end":return E.stop()}},j)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef } from "@speedform/reactive" 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@speedform/reactive":e(458),react:e(92379)},renderOpts:{compile:function(){var j=L()(o()().mark(function O(){var v,l=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(v=a.sent).default.apply(v,l));case 3:case"end":return a.stop()}},O)}));function d(){return j.apply(this,arguments)}return d}()}}}},93079:function(J,i,e){e.r(i),e.d(i,{demos:function(){return H}});var K=e(92379),o=e(64100),H={}},21970:function(J,i,e){e.r(i),e.d(i,{api:function(){return K},delay:function(){return U},forms:function(){return o}});var K={};e.r(K),e.d(K,{getProjects:function(){return t}});var o={};e.r(o),e.d(o,{Network:function(){return g},schema:function(){return l}});var H=e(29008),k=e.n(H),T=e(70958),L=e.n(T);function t(a){return G.apply(this,arguments)}function G(){return G=L()(k()().mark(function a(R){var u,D,E;return k()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,fetch(R);case 2:if(u=P.sent,!u.ok){P.next=11;break}return P.next=6,u.json();case 6:return D=P.sent,E=D.map(function(C){return{name:C.name,url:C.html_url,description:C.description,stars:C.stargazers_count}}),P.abrupt("return",E);case 11:throw new Error("".concat(u.status," - ").concat(u.statusText));case 12:case"end":return P.stop()}},a)})),G.apply(this,arguments)}var U=function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(u){setTimeout(u,R)})},j=e(458),d=e(6244),O=e(99166),v=e.n(O),l={title:"\u7F51\u7EDC\u914D\u7F6E",fields:{title:{value:"React-Helux-Form",placeholder:"\u8F93\u5165\u7F51\u7EDC\u914D\u7F6E\u540D\u79F0",title:"\u7F51\u7EDC\u540D\u79F0",validate:function(R){return R.length>3}},interface:{value:"wifi",title:"\u7F51\u5361\u7C7B\u578B",select:function(){return[{value:"wifi",title:"\u65E0\u7EBF\u7F51\u5361"},{value:"ethernet",title:"\u6709\u7EBF\u7F51\u5361"}]}},ip:{value:"1.1.1.1",title:"IP\u5730\u5740",validate:(0,j.computed)(function(){var a=L()(k()().mark(function R(u){return k()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,U(2e3);case 2:return E.abrupt("return",v().isIP(String(u)));case 3:case"end":return E.stop()}},R)}));return function(R){return a.apply(this,arguments)}}(),[],{async:!0})},gateway:{value:"1.1.1.1",title:"\u7F51\u5173\u5730\u5740",validate:function(R){return v().isIP(R)}},dhcp:{enable:{title:"\u81EA\u52A8\u83B7\u53D6IP\u5730\u5740",value:!0},start:{title:"\u8D77\u59CB\u5730\u5740",value:"192.168.1.1",enable:(0,j.computed)(function(a){return a.enable.value},{scope:j.ComputedScopeRef.Parent}),validate:function(R){return v().isIP(R)}},end:{title:"\u7ED3\u675F\u5730\u5740",value:"192.168.1.100",enable:(0,j.computed)(function(a){return a.dhcp.enable.value},{scope:j.ComputedScopeRef.Root}),validate:function(R){return v().isIP(R)}}},wifi:{title:"\u65E0\u7EBF\u914D\u7F6E",visible:(0,j.computed)(function(a){return a.interface.value==="wifi"},{scope:j.ComputedScopeRef.Root}),ssid:{value:"fast",placeholder:"\u65E0\u7EBF\u7F51\u7EDC",validate:function(R){return R.length>3}},password:{value:"123",placeholder:"\u8F93\u5165\u65E0\u7EBF\u5BC6\u7801",help:"\u5BC6\u7801\u957F\u5EA6\u5E94\u4E0D\u5C0F\u4E8E6\u4F4D",enable:function(R){return R.interface.value==="wifi"},validate:function(R){return R.length>=6}}}}},g=(0,d.createForm)(l,{debug:!0});globalThis.Network=g},48398:function(J,i,e){e.r(i),e.d(i,{Block:function(){return D},Box:function(){return H},Button:function(){return L},Card:function(){return t},Col:function(){return E},ColorBlock:function(){return u},Divider:function(){return g},Field:function(){return l},Input:function(){return P},JsonViewer:function(){return O},Loading:function(){return T},Row:function(){return x},Tips:function(){return C},ValidResult:function(){return v}});var K=e(92379),o=e(651),H=function(s){var c=s.title,r=s.enable,y=r===void 0?!0:r,S=s.visible,N=S===void 0?!0:S;return(0,o.jsxs)("div",{style:{display:N?"flex":"none",position:"relative",flexDirection:"column",padding:"8px",margin:"16px 4px 4px 4px",boxSizing:"border-box",border:"1px solid #bbb"},children:[(0,o.jsx)("span",{style:{position:"absolute",padding:"2px 4px 2px 4px",top:"-16px",background:"white",left:"8px",color:y?"#bbb":"gray"},children:c||""}),s.children]})},k=e(11363),T=function(s){var c=s.size,r=c===void 0?20:c,y=s.visible,S=y===void 0?!0:y,N=s.color,F=s.tips,V=F===void 0?"loading...":F;return(0,o.jsx)("span",{title:V,style:{display:S?"inline-block":"none",cursor:"pointer",padding:"2px"},children:(0,o.jsx)(k.Z1,{width:r,height:r,color:N})})},L=function(s){var c=s.visible,r=c===void 0?!0:c,y=s.loading,S=s.timeout,N=S===void 0?0:S,F=s.progress,V=F===void 0?0:F,Q=s.cancel,Z=s.onClick,ee=(0,K.useRef)(null);return(0,K.useEffect)(function(){ee.current&&(ee.current.style.display=r?"flex":"none")}),(0,o.jsxs)("div",{ref:ee,className:"speed-button",onClick:Z,style:{padding:"8px",margin:"4px",cursor:"pointer",display:r?"flex":"none",flexDirection:"row",borderRadius:"6px",alignItems:"center",border:"1px solid #bbb",background:"#eee",textAlign:"center"},children:[y?(0,o.jsx)(T,{}):null,(0,o.jsx)("div",{style:{flexGrow:1,backgroundColor:"transparent"},children:s.children}),N>0?(0,o.jsx)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:N}):"",V>0?(0,o.jsxs)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:[V,"%"]}):"",s.error?(0,o.jsx)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:s.error}):"",s.loading&&typeof Q=="function"?(0,o.jsx)("button",{onClick:Q,style:{padding:"4px",color:"red",margin:"2px",fontSize:"10px",backgroundColor:"#eee",borderRadius:"4px",cursor:"pointer"},children:" \u5355\u51FB\u53D6\u6D88"}):""]})},t=function(s){var c=s.title,r=s.enable,y=r===void 0?!0:r,S=s.visible,N=S===void 0?!0:S,F=s.buttons,V=F===void 0?[]:F,Q=Array.isArray(s.children)?s.children:[s.children];return(0,o.jsxs)("div",{className:"card",style:{border:"1px solid #ccc",background:y?"white":"gray",margin:"8px",display:N?"flex":"none",flexDirection:"column"},children:[(0,o.jsxs)("div",{className:"header",style:{display:"flex",flexDirection:"row",backgroundColor:"#eee",padding:"6px",lineHeight:"150%"},children:[(0,o.jsx)("span",{style:{flexGrow:1,color:y?"#222":"gray"},children:c}),(0,o.jsx)("span",{style:{},children:V.map(function(Z,ee){return(0,o.jsx)("span",{className:"button",style:{padding:"4px",margin:"4px",cursor:"pointer"},onClick:Z.onClick,children:Z.title},ee)})})]}),(0,o.jsx)("div",{style:{padding:"12px"},children:Q.map(function(Z,ee){return Q.length>1&&ee==Q.length-1&&Z.classList&&Z.classList.contains("footer")?(0,o.jsx)("div",{className:"footer",style:{borderTop:"1px solid #ccc",padding:"8px"},children:Z}):Z})})]})},G=e(24325),U=e.n(G),j=e(82719),d={scheme:"monokai",author:"wimer hazenberg (http://www.monokai.nl)",base00:"white",base01:"#383830",base02:"#49483e",base03:"#75715e",base04:"#a59f85",base05:"#f8f8f2",base06:"#f5f4f1",base07:"#f9f8f5",base08:"#f92672",base09:"#fd971f",base0A:"#f4bf75",base0B:"#444444",base0C:"#a1efe4",base0D:"#018ba7",base0E:"#81a9ff",base0F:"#cc6633"},O=function(s){return(0,o.jsx)(j.L,U()(U()({getItemString:function(){return""},hideRoot:!0,shouldExpandNodeInitially:function(){return!0}},s),{},{theme:d}))},v=function(s){var c=s.validate,r=s.help;if(c!=null){var y=typeof c!="boolean",S=y?c==null?void 0:c.result:c,N=y?c==null?void 0:c.loading:!1,F=y?c==null?void 0:c.error:r;return(0,o.jsxs)("span",{style:{color:"red",display:N||!S?"flex":"none"},children:[(0,o.jsx)(T,{visible:N,tips:"\u6B63\u5728\u9A8C\u8BC1..."}),!N&&(S?"":F)]})}},l=function(s){var c=s.enable,r=c===void 0?!0:c,y=s.visible,S=y===void 0?!0:y,N=s.label,F=N===void 0?"":N,V=s.children,Q=V===void 0?"":V,Z=s.memo;return(0,o.jsxs)("div",{className:"field",style:{position:"relative",display:S===!1?"none":"flex",boxSizing:"border-box",flexDirection:"row",width:"100%",alignItems:"center",padding:"8px"},children:[(0,o.jsxs)("label",{className:"field-label",style:{minWidth:"160px",fontWeight:"bold",color:r===!1?"gray":"inherit"},children:[F,":"]}),(0,o.jsxs)("span",{className:"field-value",style:{flexGrow:1,display:"flex",flexDirection:"row",alignItems:"center",color:r===!1?"gray":"inherit"},children:[typeof Q=="function"?"":Q,Z&&(0,o.jsx)("span",{style:{color:"gray"},children:Z})]}),(0,o.jsx)(v,U()({},s))]})},g=function(s){var c=s.title,r=s.visible,y=r===void 0?!0:r;return(0,o.jsx)("div",{style:{height:"36px",borderBottom:"1px solid #eee",marginBottom:"16px",display:y?"flex":"none"},children:(0,o.jsx)("h4",{style:{position:"absolute",background:"white",padding:"4px",color:"#bbb"},children:c})})},a=e(47851);function R(){var w="".concat(Math.floor(Math.random()*16777215).toString(16));return"#".concat(w.padStart(6,"0"))}var u=K.memo(function(w){var s=(0,K.useRef)(0),c=w.name,r=w.value,y=r===void 0?"":r,S=R(),N="block";return a.rgb(S).isDark()?N="white":N="block",(0,K.useEffect)(function(){s.current++}),(0,o.jsxs)("div",U()(U()({},w),{},{style:U()(U()({backgroundColor:S,padding:"4px",color:N,display:"flex"},w.style),{},{alignItems:"center"}),children:[(0,o.jsxs)("span",{style:{flexGrow:1},children:[c?(0,o.jsxs)("span",{style:{padding:"2px"},children:[c,"="]}):"",(0,o.jsxs)("span",{style:{padding:"2px"},children:[String(y),w.children]})]}),(0,o.jsx)("span",{style:{fontSize:"8px"},children:s.current})]}))},function(w,s){return w.name===s.name&&w.value===s.value}),D=function(s){var c=(0,K.useRef)(0),r=s.name,y=s.value,S=y===void 0?"":y,N=R(),F="block";return a.rgb(N).isDark()?F="white":F="block",(0,K.useEffect)(function(){c.current++}),(0,o.jsxs)("div",U()(U()({},s),{},{style:U()(U()({backgroundColor:N,padding:"4px",color:F,display:"flex"},s.style),{},{alignItems:"center"}),children:[(0,o.jsxs)("span",{style:{flexGrow:1},children:[r?(0,o.jsxs)("span",{style:{padding:"2px"},children:[r,"="]}):"",(0,o.jsxs)("span",{style:{padding:"2px"},children:[String(S),s.children]})]}),(0,o.jsx)("span",{style:{fontSize:"8px"},children:c.current})]}))},E=function(s){var c=s.visible,r=c===void 0?!0:c,y=s.border,S=y===void 0?!0:y,N=s.padding,F=N===void 0?"8px":N,V=s.margin,Q=V===void 0?"0px":V,Z=s.grow,ee=Z===void 0?1:Z;return(0,o.jsx)("div",{className:"layout-col",style:{display:r?"flex":"none",position:"relative",flexDirection:"column",padding:F,flexGrow:ee,margin:Q,boxSizing:"border-box",border:S?"1px solid #eee":"none"},children:s.children})},x=function(s){var c=s.visible,r=c===void 0?!0:c,y=s.border,S=y===void 0?!0:y,N=s.padding,F=N===void 0?"8px":N,V=s.grow,Q=V===void 0?1:V;return(0,o.jsx)("div",{className:"layout-row",style:{display:r?"flex":"none",position:"relative",flexDirection:"row",flexGrow:Q,padding:F,margin:"4px",boxSizing:"border-box",border:S?"1px solid #eee":"none"},children:s.children})},P=function(s){var c=s.name,r=s.enable,y=r===void 0?!0:r,S=s.type,N=S===void 0?"text":S,F=s.validate,V=F===void 0?!0:F,Q=s.visible,Z=Q===void 0?!0:Q,ee=s.placeholder,te=s.onChange,de=te===void 0?function(){}:te,re=s.value,ie=s.style;return(0,o.jsx)("input",{style:Object.assign({border:V===!1?"1px solid red":"1px solid #bbb",borderRadius:"4px",background:y?"white":"gray",margin:"4px",padding:"8px",display:Z?"block":"none"},ie),type:N,name:c,placeholder:ee,value:re!=null?re:"",readOnly:!y,onChange:de})},C=function(s){var c=s.text,r=s.color,y=r===void 0?"#ff6c00":r,S=typeof y=="string"?{default:y}:Object.assign({default:""},y),N=c.replace(/\{\s?(.*?)\s?\}/gm,function(F,V){return"<span style='color: ".concat(V in S?S[V]:S.default,"'>").concat(V,"</span>")}).replaceAll("undefined","\u7A7A\u503C");return(0,o.jsx)("div",{style:{backgroundColor:"#fffcda",borderLeft:"2px solid rgb(253, 138, 6)",boxSizing:"border-box",padding:"8px",margin:"4px"},children:(0,o.jsx)("span",{dangerouslySetInnerHTML:{__html:N}})})}},6244:function(J,i,e){e.r(i),e.d(i,{$:function(){return c.$},ActionChildren:function(){return Ce},ComputedObjects:function(){return c.ComputedObjects},ComputedScopeRef:function(){return c.ComputedScopeRef},FieldChildren:function(){return F},OBJECT_PATH_DELIMITER:function(){return c.OBJECT_PATH_DELIMITER},SKIP_COMPUTED:function(){return c.SKIP_COMPUTED},ValidationError:function(){return xt},WatchObject:function(){return c.WatchObject},WatchObjects:function(){return c.WatchObjects},action:function(){return Se},asyncComputedObject:function(){return c.asyncComputedObject},computed:function(){return c.computed},createActionComponent:function(){return me},createAsyncComputedMutate:function(){return c.createAsyncComputedMutate},createComputedMutate:function(){return c.createComputedMutate},createFieldComponent:function(){return V},createFieldGroupComponent:function(){return Ne},createForm:function(){return m},createObject:function(){return c.createObject},createStore:function(){return c.createStore},createUseAction:function(){return Oe},createUseWatch:function(){return c.createUseWatch},createWatch:function(){return c.createWatch},defaultFormProps:function(){return et},getAction:function(){return we},getFieldName:function(){return at},getSnap:function(){return c.getSnap},getVal:function(){return c.getVal},getValueByPath:function(){return c.getValueByPath},installComputed:function(){return c.installComputed},installWatch:function(){return c.installWatch},isIncludePath:function(){return c.isIncludePath},isSkipComputed:function(){return c.isSkipComputed},markRaw:function(){return c.markRaw},setAsyncComputedObject:function(){return c.setAsyncComputedObject},setVal:function(){return c.setVal},skipComputed:function(){return c.skipComputed},useLatest:function(){return h},useStore:function(){return c.useStore},useUnmount:function(){return b},useUnmountedRef:function(){return M},watch:function(){return c.watch}});var K=e(12027),o=e.n(K),H=e(28633),k=e.n(H),T=e(24325),L=e.n(T),t=e(92379),G=e(34180),U=e.n(G),j=e(59166);function d(n){var I=_typeof(n);return n==null||I=="boolean"||I=="number"||I=="string"||I==null}function O(n){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,p=0,A,$=!0,_=function B(){if(A==null){$=!0,clearTimeout(p),p=0;return}try{var W=A;A=void 0,n.apply(void 0,o()(W)),p=setTimeout(function(){return B()},I)}finally{}};return function(){for(var B=arguments.length,W=new Array(B),z=0;z<B;z++)W[z]=arguments[z];if(I==0)return n.apply(void 0,W);A=W,($||p==0)&&($=!1,_())}}function v(n,I){var p={};for(var A in n)n[A]!==I[A]&&(p[A]=I[A]);return p}function l(){return Math.random().toString(36).substring(2)}function g(n){return new Proxy({},{get:function(p,A,$){return n()[A]}})}function a(n){return(0,j.P)(n)&&"execute"in n&&(0,j.P)(n.execute)&&"loading"in n.execute}function R(n){return(0,j.P)(n)&&"value"in n}function u(n){return Array.isArray(n)}function D(n){return(0,j.P)(n)&&!R(n)&&!a(n)}function E(){return!1}var x="fields",P="actions",C="validate",w="$submit",s="$reset",c=e(458),r=e(651);function y(n,I,p,A){return Object.assign({name:n,help:"",initial:void 0,oldValue:void 0,visible:!0,required:!1,readonly:!1,validate:null,enable:!0,placeholder:""},L()(L()({},I),{},{sync:p,update:A}))}function S(n,I){var p=(0,t.useRef)(null);return(0,t.useCallback)(function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;if(p.current==null){var $=n.sync(I);p.current=A==0?$:O($,A)}return p.current},[])}function N(n,I){var p=(0,t.useRef)(null),A=(0,t.useState)(0),$=k()(A,2),_=$[0],B=$[1];return(0,t.useCallback)(function(W,z){var q=Object.assign({debounce:0},z),Y=q.debounce;if(p.current==null||_!==Y){_!==Y&&Y>0&&B(Y);var X=function(ae){return function(le){I(typeof ae=="function"?function(oe){return ae.call(oe,oe.fields)}:function(oe){return(0,c.setVal)(oe,n,ae)}),typeof le.preventDefault=="function"&&le.preventDefault()}};p.current=Y>0?X:O(X,Y)}return p.current(W)},[])}var F=t.memo(function(n){return(0,r.jsx)(r.Fragment,{children:typeof n.children=="function"&&n.children(n.fieldProps)})},function(n,I){return Object.entries(n.fieldProps).every(function(p){var A=k()(p,2),$=A[0],_=A[1];return["children","sync","update"].includes($)?!0:_===I.fieldProps[$]})});function V(n,I){return t.memo(function(p){var A=p.name,$=Array.isArray(A)?A:A.split("."),_=[x].concat(o()($)),B=[x].concat(o()($));$.push("value"),B.push("value");var W=n.useState(function(le){return(0,c.getVal)(le,_)}),z=k()(W,2),q=z[0],Y=z[1],X=N(B,Y),ne=S(n,B),ae=y(I.getFieldName($),q,ne,X);return p.render?(0,r.jsx)(F,{fieldProps:ae,children:p.render}):Array.isArray(p.children)?p.children.map(function(le,oe){return(0,r.jsx)(F,{fieldProps:ae,children:le},oe)}):(0,r.jsx)(F,{fieldProps:ae,children:p.children})},function(p,A){return p.name===A.name})}var Q=e(29008),Z=e.n(Q),ee=e(70958),te=e.n(ee),de=e(58048);function re(n,I){return(0,t.useCallback)(function(p){I(function(A){p.call(A,(0,c.getVal)(A,n))})},[])}function ie(n,I,p){return(0,de.w)({name:n,help:"",visible:!0,required:!1,readonly:!1,validate:!0,enable:!0,update:p},I)}function Ne(n,I){return t.memo(function(p){var A=p.name,$=n.useState(),_=k()($,2),B=_[0],W=_[1],z=Array.isArray(A)?A:A.split("."),q=["fields"].concat(o()(z)),Y=(0,c.getVal)(B,q),X=re(q,W),ne=(0,t.useState)(function(){return ie(I.getFieldName(z),Y,X)}),ae=k()(ne,2),le=ae[0],oe=ae[1];return(0,t.useEffect)(function(){oe(ie(I.getFieldName(z),Y,X))},[Y]),Array.isArray(p.children)?p.children.map(function(We){return We(le)}):p.children(le)},function(p,A){return p.name===A.name})}var ot=e(6597);function se(n){return n.value}function Re(n){var I={};return Object.entries(n).forEach(function(p){var A=k()(p,2),$=A[0],_=A[1];if(typeof $=="string")if(R(_))I[$]=se(_);else if(D(_)){var B=Re(_);B&&Object.keys(B).length>0&&(I[$]=B)}else u(_)&&(I[$]=pe(_))}),I}function pe(n){var I=[];return n.forEach(function(p){R(p)?I.push(se(p)):D(p)?I.push(Re(p)):u(p)?I.push(pe(p)):I.push(p)}),I}function dt(n,I,p){var A=Object.assign({},p),$=A.onNotMatch,_=$===void 0?function(){}:$;function B(W,z){var q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];Object.entries(W).forEach(function(Y){var X=k()(Y,2),ne=X[0],ae=X[1];if(typeof ne=="string"){var le=[].concat(o()(q),[ne]);if(ne in z){var oe=z[ne];R(oe)?oe.value=ae:D(oe)?(0,j.P)(ae)?B(ae,oe,le):_(le):u(oe)?Array.isArray(ae)?B(ae,oe):_(le):z[ne]=ae}else _(le)}})}B(n,I)}function he(n,I){var p=new FormData,A=Object.assign({getItemName:function(W){return W.join(".")}},I),$=A.getItemName;function _(B,W){if(W!=null){var z=$?$(B):B.join(".");Array.isArray(W)?W.forEach(function(q,Y){_([].concat(_toConsumableArray(B),[String(Y)]),q)}):isPlainObject(W)?Object.entries(W).forEach(function(q){var Y=_slicedToArray(q,2),X=Y[0],ne=Y[1];_([].concat(_toConsumableArray(B),[X]),ne)}):p.append(z,W)}}return _([],n),p}function ce(n,I){return function(A,$){var _=Object.assign({validate:!0},$);try{n.enableComputed(!1),dt(A,n.state.fields),n.setState(function(B){B.dirty=!1,B.validate=null})}catch(B){console.error(B)}finally{n.enableComputed(!0),_!=null&&_.validate&&n.computedObjects.runGroup(C)}}}function Ve(n,I){return Re(n)}function lt(n,I){return function(A){var $=Object.assign({},A);return Ve((0,c.getSnap)(n.state).fields)}}function we(n,I){return function(){var p=te()(Z()().mark(function A($){var _;return Z()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return _=Object.assign({},I,$),Array.isArray(_.scope)&&_.scope.length>0&&_.scope[0]!==x&&_.scope.unshift(x),W.next=4,n.execute.run(_);case 4:if(!n.execute.error){W.next=8;break}throw new Error(n.execute.error);case 8:return W.abrupt("return",n.execute.result);case 9:case"end":return W.stop()}},A)}));return function(A){return p.apply(this,arguments)}}()}function ye(n,I){return(0,t.useCallback)(function(p){var A=Object.assign({},{noReentry:!0,preventDefault:!0},I,p),$=we(n,A);return function(_){$(),_&&A.preventDefault&&typeof _.preventDefault=="function"&&_.preventDefault()}},[n])}function ut(n,I){return(0,t.useCallback)(function(p){var A=(0,c.getValueByPath)(n,[].concat(o()(Array.isArray(I)?I:I.split(".")),["execute"]));A.cancel(),p&&typeof p.preventDefault=="function"&&p.preventDefault()},[])}function De(n,I,p,A){return Object.assign({help:"",title:"",visible:!0,enable:!0},(0,ot.C)(n,"execute"),L()(L()({},n.execute),{},{run:I,cancel:p,ref:A}))}var Ce=t.memo(function(n){return(0,r.jsx)(r.Fragment,{children:typeof n.children=="function"&&n.children(n.actionProps)})},function(n,I){return Object.entries(n.actionProps).every(function(p){var A=k()(p,2),$=A[0],_=A[1];return["children","run","cancel"].includes($)?!0:_===I.actionProps[$]})});function me(n){function I(p){var A=n.useState(),$=k()(A,1),_=$[0],B=p.name;B.includes(".")||(B="actions.".concat(B));var W=(0,c.getValueByPath)(_,B);if(W==null)return n.options.log("Action ".concat(B," is not defined"),"error"),(0,r.jsx)(r.Fragment,{children:p.children});var z=ye(W,p),q=ut(_,B),Y=(0,t.useRef)(null),X=De(W,z,q,Y);return typeof p.render=="function"?(0,r.jsx)(Ce,{actionProps:X,children:p.render}):p.children?Array.isArray(p.children)?p.children.map(function(ne,ae){return(0,r.jsx)(Ce,{actionProps:X,children:ne},ae)}):(0,r.jsx)(Ce,{actionProps:X,children:p.children}):(0,r.jsx)(r.Fragment,{})}return t.memo(I,function(p,A){return p.name===A.name})}function Se(n,I){return(0,c.computed)(function(){var p=te()(Z()().mark(function A($,_){var B;return Z()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return B=Ve(Object.assign({},$)),z.next=3,n(B,_);case 3:return z.abrupt("return",z.sent);case 4:case"end":return z.stop()}},A)}));return function(A,$){return p.apply(this,arguments)}}(),[],Object.assign({},I,{async:!0}))}function Oe(n){return function(p,A){var $=(0,t.useRef)(),_=n.useState(),B=k()(_,2),W=B[0],z=B[1],q=(0,t.useState)(function(){return A!=null&&A.name?A==null?void 0:A.name:l()}),Y=k()(q,1),X=Y[0];return $.current||(X in W.actions||z(function(ne){ne.actions[X]={execute:Se(p,A)}}),$.current=X),(0,c.getValueByPath)(W,["actions",X]).execute}}var Fe=e(20842),st=e(14582),_e=e.n(st),ct=e(6270),be=e.n(ct),it=e(93949),pt=e.n(it),vt=e(77701),mt=e.n(vt),It=e(28249),Me=e.n(It),ft=e(5672),je=e.n(ft),xt=function(n){mt()(p,n);var I=Me()(p);function p(A){var $;return pt()(this,p),$=I.call(this,A),$.name="ValidationError",$}return be()(p)}(je()(Error));function $e(n){return n.length>1&&n[0]==x&&(n[n.length-1]==="validate"||n.length>=2&&n[n.length-2]=="validate"&&n[n.length-1]=="result")&&!(n.length==2&&n[1]=="validate")&&!(n.length==3&&n[1]=="validate"&&n[2]=="result")}function ke(n){var I=Object.assign({},n),p=I.entry;return(0,c.watch)(function(A,$,_){if((0,c.isIncludePath)(p||_.path,A)){if(typeof $=="boolean"){var B=A.join(c.OBJECT_PATH_DELIMITER);$?delete _.cache[B]:_.cache[B]=$}return Object.keys(_.cache).length==0}},function(A){return $e(A)},{initial:!0})}function Te(n,I){var p=typeof n=="function"?n():n;if(!p)throw new ValidationError(typeof I=="function"?I():I)}function ht(n){return function(){var I=te()(Z()().mark(function p(A){var $,_,B,W,z,q;return Z()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:if(Array.isArray(A)&&A.length>0){$=A.join(c.OBJECT_PATH_DELIMITER),_=_e()(n.computedObjects);try{for(_.s();!(B=_.n()).done;)W=k()(B.value,2),z=W[0],q=W[1],z.startsWith($)&&q.run()}catch(ne){_.e(ne)}finally{_.f()}}else n.computedObjects.runGroup(C);case 1:case"end":return X.stop()}},p)}));return function(p){return I.apply(this,arguments)}}()}var ze=e(92980);function yt(n){var I={};return Object.entries(n||{}).forEach(function(p){var A=_slicedToArray(p,2),$=A[0],_=A[1];isFieldValue(_)||isFieldGroup(_)||isFieldList(_)||(I[$]=_)}),I}function Ze(n){return Object.assign({type:"submit",help:"",title:"",dirty:!1,validate:!0,visible:!0,enable:!0,readOnly:!0},yt(n))}var Pe=null,He=(0,ze.zo)(function(n,I){var p,A=I.className;return(0,r.jsx)("input",{className:A+" "+n.className,style:n.style,type:(p=n.type)!==null&&p!==void 0?p:"submit",value:n.title})},{cursor:"pointer",width:"100%",display:"block",boxSizing:"border-box",padding:"8px",borderRadius:"8px",transition:"filter 0.3s","&:hover":{filter:"brightness(1.2)"},"&.speedform-submit":{backgroundColor:"#54b2ff",color:"white",border:"1px solid #1e5786"}});function At(n,I,p){var A=Object.assign({preventDefault:!1},I);function $(_){var B=n.useState(),W=_slicedToArray(B,1),z=W[0],q=_.scope,Y=getValueByPath(z,q),X=Ze(Y),ne=typeof _.render=="function"?1:Array.isArray(_.children)?2:typeof _.children=="function"?3:0;return _jsxs(_Fragment,{children:[_jsx(He,_objectSpread({visible:ne==0},A)),ne===1?_jsx(Pe,{submitProps:X,children:_.render}):ne===2?_.children.map(function(ae,le){return _jsx(Pe,{submitProps:X,children:ae},le)}):_jsx(Pe,{submitProps:X,children:_.children})]})}return React.memo($,function(_,B){return _.scope===B.scope})}function Be(n,I){var p=me(n);return function(A){var $=(0,t.useRef)(null),_=(0,t.useCallback)(function(B){if(I.validAt!=="submit"){var W;(W=$.current)===null||W===void 0||W.click()}B.preventDefault()},[]);return(0,r.jsx)(p,L()(L()({},A),{},{name:w,children:function(W){var z=W.loading,q=W.title,Y=W.run;return(0,r.jsxs)("div",{className:"speedform-submit",children:[(0,r.jsx)("input",{ref:$,type:"submit",style:{display:"none"},value:A.label||q}),(0,r.jsxs)("button",{type:"submit",onClick:Y({extras:1}),children:["==",A.label||q," =="]}),(0,r.jsx)("span",{children:z?"\u63D0\u4EA4\u4E2D2":""})]})}}))}}var Je={title:"\u63D0\u4EA4",help:"",tips:"\u63D0\u4EA4",visible:!0,enable:!0,validate:!0,readonly:!1,execute:Se(function(){var n=te()(Z()().mark(function I(p,A){return Z()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:console.log("scope=",p,"options=",A);debugger;case 2:case"end":return _.stop()}},I)}));return function(I,p){return n.apply(this,arguments)}}())};function Qe(n,I){return action(function(){var p=_asyncToGenerator(_regeneratorRuntime().mark(function A($,_){var B;return _regeneratorRuntime().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return B=new FormData,z.next=3,n(B,_);case 3:return z.abrupt("return",z.sent);case 4:case"end":return z.stop()}},A)}));return function(A,$){return p.apply(this,arguments)}}(),I)}function Xe(n,I){var p=me(n);return function(A){return(0,r.jsx)(p,L()(L()({},A),{},{name:s,children:function(_){var B=_.loading,W=_.title;return(0,r.jsxs)("div",{className:"speedform-reset",children:[(0,r.jsx)("input",{type:"reset",value:A.label||W}),(0,r.jsx)("span",{children:B?"\u63D0\u4EA4\u4E2D":"\u5DF2\u63D0\u4EA4"})]})}}))}}var Le={title:"\u91CD\u7F6E",help:"",tips:"\u91CD\u7F6E",visible:!0,enable:!0,validate:!0,readonly:!1,execute:Se(te()(Z()().mark(function n(){return Z()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:case"end":return p.stop()}},n)})))};function Ye(n){return n.length>1&&n[0]==x&&n[n.length-1]=="value"}function qe(n){return(0,c.watch)(function(I,p,A){if((0,c.isIncludePath)(n||A.path,I)&&!A.value)return!0},function(I){return Ye(I)},{initial:!1})}var et={name:"SpeedForm",title:"SpeedForm",help:"",tips:"",status:"idle",dirty:qe(["fields"]),validate:ke({entry:["fields"]}),readonly:!1,enable:!0,visible:!0,fields:{},actions:{$submit:Je,$reset:Le}};function bt(n,I){n.length>=2&&n[0]==x&&n[n.length-1]==C&&(I.scope||(I.scope="./value"),I.depends||(I.depends=[]),I.depends.push([].concat(o()(n.slice(0,-1)),["value"])),I.initial=null,I.group=C,I.enable=!0)}function gt(n){return(0,Fe.w)(n,et)}function Et(n,I){n.length>1&&n[n.length-1]=="execute"&&(I.immediate=!1,I.scope?Array.isArray(I.scope)&&I.scope.length>0&&I.scope[0]!=x&&I.scope.unshift(x):I.scope=[x],I.noReentry=!0)}function Nt(n,I){n.length>0&&n[0]==x&&I.depends&&I.depends.forEach(function(p,A){Array.isArray(p)&&p.length>0&&p[0]!=x?I.depends[A]=[x].concat(o()(p)):typeof p=="string"&&!p.startsWith("".concat(x,"."))&&(I.depends[A]="".concat(x,".").concat(p))})}function tt(n){return function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;n.enableComputed(I)}}function at(n){return n.length>0?n[n.length-1]==="value"?n.slice(0,-1).join("."):n.join("."):""}function m(n,I){var p=(0,de.w)({getFieldName:at,validAt:"once"},I);gt(n);var A=(0,c.createStore)(n,{debug:p.debug,scope:function(){return[x]},onCreateComputed:function(B,W,z){bt(B,z),Nt(B,z),Et(B,z)},onComputedDraft:function(B,W){var z=W.computedType,q=W.valuePath;if(z==="Computed"&&q.length>0&&q[0]==x)return B.fields},immediate:!0});A.on("computed:created",function(_){$e(_.path)&&(_.options.enable=p.validAt==="once")});var $=A;return{state:$.state,useState:$.useState,setState:$.setState,Form:f($,p),Field:V($,p),Group:Ne($,p),Action:me($),Submit:Be($,p),Reset:Xe($,p),useAction:Oe($),fields:g(function(){return $.state.fields}),actions:g(function(){return $.state.actions}),getAction:we,freeze:tt(A),load:ce($,p),getValues:lt($,p),computedObjects:$.computedObjects,watchObjects:$.watchObjects,validate:ht($)}}function f(n,I){return t.forwardRef(function(p,A){var $=p.children,_=(0,t.useCallback)(function(){var W=te()(Z()().mark(function z(q){return Z()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:if(I.validAt!=="submit"){X.next=3;break}return X.next=3,n.computedObjects.runGroup(C);case 3:debugger;return X.next=6,n.computedObjects.runGroup(C);case 6:if(q.preventDefault(),!n.state.validate){X.next=11;break}return X.abrupt("return",!0);case 11:return X.abrupt("return",!1);case 12:case"end":return X.stop()}},z)}));return function(z){return W.apply(this,arguments)}}(),[]),B=(0,t.useCallback)(function(W){},[]);return(0,r.jsx)("form",L()(L()({ref:A,className:"speedform"},p),{},{onSubmit:_,onReset:B,children:$}))})}function h(n){var I=(0,t.useRef)(n);return I.current=n,I}function b(n){E()&&typeof n!="function"&&console.error("useUnmount expected parameter is a function, got ".concat(U()(n)));var I=h(n);(0,t.useEffect)(function(){return function(){I.current()}},[])}function M(){var n=(0,t.useRef)(!1);return(0,t.useEffect)(function(){return n.current=!1,function(){n.current=!0}},[]),n}},458:function(J,i,e){e.r(i),e.d(i,{$:function(){return ce.$},ComputedObjects:function(){return Pe},ComputedScopeRef:function(){return K},OBJECT_PATH_DELIMITER:function(){return T},SKIP_COMPUTED:function(){return L},WatchObject:function(){return Ye},WatchObjects:function(){return qe},asyncComputedObject:function(){return Se},computed:function(){return ke},createAsyncComputedMutate:function(){return me},createComputedMutate:function(){return Ne},createObject:function(){return ce.share},createStore:function(){return tt},createUseWatch:function(){return Xe},createWatch:function(){return Be},getSnap:function(){return ce.getSnap},getVal:function(){return v},getValueByPath:function(){return w},installComputed:function(){return Fe},installWatch:function(){return Qe},isIncludePath:function(){return E},isSkipComputed:function(){return t},markRaw:function(){return ce.markRaw},setAsyncComputedObject:function(){return lt},setVal:function(){return P},skipComputed:function(){return C},useStore:function(){return at},watch:function(){return At}});var K=function(m){return m.Root="root",m.Current="current",m.Parent="parent",m.Depends="depends",m.Self="self",m}({});function o(m){return(m||["ROOT"]).map(function(f){return Array.isArray(f)?f.join("."):f}).join("_")}function H(m,f){var h="";return f.id?h=f.id:h=o(m),h}function k(m){return m instanceof Error?m:new Error(m)}var T=".",L=Symbol("SKIP_COMPUTED");function t(m){return m[L]===!0}var G=e(12027),U=e.n(G);function j(m,f,h){if(!Array.isArray(m))throw new Error("curPath must be an array");return f==="self"?m:f==="root"?[]:f==="parent"?m.slice(0,-2):f==="current"?m.slice(0,-1):typeof f=="string"?f.startsWith("./")?[].concat(U()(m.slice(0,-1)),U()(f.slice(2).split(T))):f.startsWith("../")?j(m.slice(0,-1),f.slice(3),!0):f.startsWith("/")?(f=f.replace(/^(\/)*/,""),f.split(T)):h?[].concat(U()(m.slice(0,-1)),U()(f.split(T))):U()(f.split(T)):Array.isArray(f)?f:m}function d(m,f){var h=m.get(f);if(h!==void 0)return h;var b=m.get(Number(f)||f);if(b!==void 0)return b}function O(m){return toString.call(m)==="[object Map]"}function v(m,f){if(f.length===0)return m;var h,b=m;return f.forEach(function(M){if(O(b))h=d(b,M);else if(M in b)h=b[M];else throw new Error("key ".concat(M," not in object ").concat(b))}),h}function l(m,f,h){return m.map(function(b){return v(f,j(h,b))})}function g(m){return(m||[]).map(function(f){return Array.isArray(f)?f:typeof f=="string"?["/","./","../"].some(function(h){return f.startsWith(h)})?f:f.includes(T)?f.split(T):f.split("."):[]})}var a=e(34180),R=e.n(a);function u(m){return _typeof(m)=="object"&&m.hasOwnProperty("__COMPUTED__")&&["async","sync"].includes(m.__COMPUTED__)&&m.hasOwnProperty("fn")&&typeof m.fn=="function"&&m.hasOwnProperty("options")&&_typeof(m.options)=="object"}function D(m){return _typeof(m)=="object"&&["result","loading","timeout","retry","run"].every(function(f){return m.hasOwnProperty(f)})}function E(m,f){return m.length>f.length?!1:m.every(function(h,b){return h===f[b]})}function x(m){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"log",h=typeof m=="function"?m():m instanceof Error?m.stack:m;try{var b;(b=console)[f].apply(b,["[@speedform/reactive] "].concat(U()(Array.isArray(h)?h:[h])))}catch(M){}}function P(m,f,h){var b=m,M=f.length-1;f.forEach(function(n,I){var p=O(b);if(I===M){p?b.set(n,h):b[n]=h;return}var A=p?d(b,n):b[n];b=A})}function C(m){return m[L]=!0,m}function w(m,f){var h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:T,b=[];try{return typeof f=="function"&&(f=f.call(m,m)),b=Array.isArray(f)?f:typeof f=="string"?f.split(h):[],b.length>0?v(m,b):m}catch(M){return m}}function s(m,f){function h(b,M){for(var n in b){var I=b[n];typeof f=="function"&&f({value:I,key:n,parent:b,path:M.concat(n)}),R()(I)==="object"&&h(I,M.concat(n))}}h(m,[])}var c=e(24325),r=e.n(c);function y(m,f,h,b){var M=h==null?b:h;if(typeof M=="function")try{M=M.call(m,m)}catch(n){}return M==null?b==null?K.Current:b:M}function S(m,f,h){var b=h.draft,M=h.dependValues,n=h.valuePath,I=h.computedType,p=b;if(typeof m.options.onComputedDraft=="function"){var A=m.options.onComputedDraft.call(b,b,{computedType:I,valuePath:n});A!==void 0&&(p=A)}var $=n.length>=1?n.slice(0,n.length-1):[],_=y(b,n,f.scope,m.options.scope&&m.options.scope(I,n));try{if(_===K.Current)return w(b,$);if(_===K.Parent)return w(b,n.slice(0,n.length-2));if(_===K.Root)return p;if(_===K.Depends)return Array.isArray(M)?M.map(function(W){return typeof W=="function"?W():W}):[];if(typeof _=="string")return _.startsWith("@")?S(m,r()(r()({},f),{},{scope:_.slice(1)}),{draft:b,dependValues:M,valuePath:n,computedType:I}):w(b,j(n,_));if(Array.isArray(_))return w(b,_);if(typeof _=="number"){var B=_>n.length-2?n.length-_-1:0;return w(b,n.slice(0,B))}else return b}catch(W){return b}}var N=e(93949),F=e.n(N),V=e(6270),Q=e.n(V),Z=e(29861),ee=e.n(Z),te=function(){function m(f,h,b,M){F()(this,m),ee()(this,"options",void 0),this.store=f,this.selfReactiveable=h,this.path=b,this.options=Object.assign({},M)}return Q()(m,[{key:"id",get:function(){return this.options.id}},{key:"enable",get:function(){return this.options.enable},set:function(h){this.options.enable=h}},{key:"group",get:function(){return this.options.group}},{key:"async",get:function(){return this.options.async}},{key:"depends",get:function(){return this.options.depends}},{key:"value",get:function(){var h;return v(this.selfReactiveable?(h=this.selfReactiveable)===null||h===void 0?void 0:h.state:this.store.state,this.path)}},{key:"run",value:function(h){var b;return(b=this.store.reactiveable)===null||b===void 0?void 0:b.runComputed(this.id,h)}},{key:"cancel",value:function(){if(this.async)this.value.cancel();else throw new Error("cancel only works for async computed")}}]),m}();function de(m,f,h,b){var M=h.options.onCreateComputed;if(typeof M=="function"&&typeof f=="function"){var n=M.call(h,m,f,b);b.scope||(b.scope=K.Current),typeof n=="function"&&(f=n)}}function re(m,f,h){return Object.assign({loading:!1,timeout:0,retry:0,error:null,result:void 0,progress:0,run:m.reactiveable.markRaw(C(function(b){return m.reactiveable.runComputed(f,Object.assign({},b))})),cancel:m.reactiveable.markRaw(C(function(){console.log("cancel")}))},h)}function ie(m,f,h){var b=m.valuePath,M=m.id,n=m.desc,I=m.resultPath,p=m.getter,A=f.selfReactiveable;h.reactiveable.createComputed({onComputed:function(_){var B=_.draft,W=_.values,z=_.options;if(!h.options.enableComputed||!f.enable&&(z==null?void 0:z.enable)!==!0){h.options.log("Sync computed <".concat(n,"> is disabled"),"warn");return}h.options.log("Run sync computed for : ".concat(n)),m.dependValues=W;var q=Object.assign({},f,z),Y=B,X=S(h,q,{draft:B,dependValues:W,valuePath:b,computedType:"Computed"}),ne=f.initial;try{ne=p.call(h,X),h.emit("computed:done",{path:b,id:M,value:ne})}catch(ae){h.emit("computed:error",{path:b,id:M,error:ae})}A?A.setState(function(ae){P(ae,I,ne)}):P(B,I,ne)},options:f})}function Ne(m,f){var h=m.path,b=m.parent,M=m.value;if(!(b&&!Object.hasOwn(b,h[h.length-1]))){var n=M(),I=n.getter,p=n.options;de(h,I,f,p);var A=p.selfReactiveable,$=h,_=H(h,p),B=h.join(T);f.options.log("Create sync computed: ".concat(B));var W={id:_,desc:B,resultPath:$,isComputedRunning:!1,dependValues:[],valuePath:h,deps:[],getter:I};ie(W,p,f),A||m.replaceValue(v(f.state,h));var z=new te(f,A,h,p);return p.save&&f.computedObjects.set(_,z),z}}var ot=e(29008),se=e.n(ot),Re=e(70958),pe=e.n(Re),dt=e(28633),he=e.n(dt),ce=e(13834),Ve=e(56041);function lt(m,f,h,b,M){var n=re(m,b,M),I=v(f,h);Object.assign(I,n,M)}function we(m,f,h){var b=Object.assign({},h),M=b.max,n=M===void 0?100:M,I=b.min,p=I===void 0?0:I,A=b.value,$=A===void 0?0:A;return m(function(_){return P(_,[].concat(U()(f),["progress"]),$)}),{value:function(B){B>n&&(B=n),B<p&&(B=p),m(function(W){return P(W,[].concat(U()(f),["progress"]),B)})},end:function(){this.value(n)}}}function ye(m,f,h){m(function(b){Object.entries(h).forEach(function(M){var n=he()(M,2),I=n[0],p=n[1];P(b,[].concat(U()(f),[I]),p)})})}function ut(m,f,h,b){return De.apply(this,arguments)}function De(){return De=pe()(se()().mark(function m(f,h,b,M){var n,I,p,A,$,_,B,W,z,q,Y,X,ne,ae,le,oe,We,Ke,Rt,Ue,ve,Ie,Ct,wt,fe;return se()().wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:n=h.id,I=h.valuePath,p=h.getter,A=h.resultPath,$=h.dependValues,_=b.timeout,B=_===void 0?0:_,W=b.retry,z=W===void 0?[0,0]:W,q=b.selfReactiveable,Y=q?q.setState.bind(q):M.setState,X=S(M,b,{draft:f,dependValues:$,valuePath:I,computedType:"Computed"}),ne=Array.isArray(z)?z:[Number(z),0],ae=he()(ne,2),le=ae[0],oe=ae[1],Ke=new AbortController,Rt={onTimeout:function(xe){return We=xe},getProgressbar:function(xe){return we(Y,I,xe)},getSnap:function(xe){return(0,ce.getSnap)(xe,!1)},abortSignal:Ke.signal,cancel:Ke.abort,extras:b.extras},Ue=!1,ye(Y,A,{cancel:(0,ce.markRaw)(C(function(){return Ke.abort()}))}),Ke.signal.addEventListener("abort",function(){Ue=!0}),ve=!1,Ie=!1,wt=se()().mark(function nt(){var xe,rt,ge,Dt,St,Ot,Ge,Pt,Ee;return se()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:if(ve=!1,Ie=!1,ge={},ue.prev=3,Dt=Array.isArray(B)?B:[B,0],St=he()(Dt,2),Ot=St[0],Ge=Ot===void 0?0:Ot,Pt=St[1],Ee=Pt===void 0?0:Pt,ye(Y,A,{loading:!0,error:null,retry:fe>0?le-fe:0,timeout:Ee>1?Ee:Ge,progress:0}),!Ue){ue.next=8;break}throw new Error("Abort");case 8:return Ge>0&&(xe=setTimeout(function(){Ie=!0,typeof We=="function"&&We(),ve||(clearInterval(rt),ye(Y,A,{loading:!1,error:"TIMEOUT",timeout:0}))},Ge),Ee>1&&(rt=setInterval(function(){ye(Y,A,{timeout:Ee--}),Ee===0&&clearInterval(rt)},Ge/(Ee+1)))),ue.next=11,p.call(M,X,Rt);case 11:if(Ct=ue.sent,!Ue){ue.next=14;break}throw new Error("Abort");case 14:Ie||Object.assign(ge,{result:Ct,error:null,timeout:0}),ue.next=22;break;case 17:ue.prev=17,ue.t0=ue.catch(3),ve=!0,Ie||Object.assign(ge,{error:k(ue.t0).message,timeout:0}),le>0&&Object.assign(ge,{retry:le-fe});case 22:return ue.prev=22,clearTimeout(xe),clearInterval(rt),(!ve||fe==le)&&Object.assign(ge,{loading:!1}),!ve&&!Ie&&Object.assign(ge,{error:null}),ye(Y,A,ge),ue.finish(22);case 29:if(!ve){ue.next=33;break}if(!(le>0&&oe>0&&fe<le)){ue.next=33;break}return ue.next=33,(0,Ve.g)(oe);case 33:case"end":return ue.stop()}},nt,null,[[3,17,22,29]])}),fe=0;case 14:if(!(fe<le+1)){Ae.next=19;break}return Ae.delegateYield(wt(),"t0",16);case 16:fe++,Ae.next=14;break;case 19:Ue||Ie?M.emit("computed:cancel",{path:I,id:n,reason:Ie?"timeout":"abort"}):ve?M.emit("computed:error",{path:I,id:n,error:ve}):M.emit("computed:done",{path:I,id:n,value:Ct});case 20:case"end":return Ae.stop()}},m)})),De.apply(this,arguments)}function Ce(m,f,h){var b=m.valuePath,M=m.id,n=m.deps,I=m.desc,p=f.selfReactiveable,A=f.initial,$=f.noReentry;h.reactiveable.createAsyncComputed({depends:function(B){return l(n,B,b)},initial:function(B){p?p.setState(function(W){P(W,b,re(h,M,{result:A}))}):P(B,b,re(h,M,{result:A}))},onComputed:function(){var _=pe()(se()().mark(function W(z){var q,Y,X,ne,ae;return se()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:if(q=z.draft,Y=z.values,X=z.options,!(!h.options.enableComputed||!f.enable&&(X==null?void 0:X.enable)!==!0)){oe.next=4;break}return h.options.log("Async computed <".concat(I,"> is disabled"),"warn"),oe.abrupt("return");case 4:if(h.options.log("Run async computed for : ".concat(I)),ne=Object.assign({},f,X),!($&&m.isComputedRunning)){oe.next=10;break}return h.options.debug&&h.options.log("Reentry async computed: ".concat(I),"warn"),h.emit("computed:cancel",{path:b,id:M,reason:"reentry"}),oe.abrupt("return");case 10:return m.isComputedRunning=!0,m.dependValues=Y,oe.prev=12,oe.next=15,ut(q,m,ne,h);case 15:return ae=oe.sent,oe.abrupt("return",ae);case 17:return oe.prev=17,m.isComputedRunning=!1,oe.finish(17);case 20:case"end":return oe.stop()}},W,null,[[12,,17,20]])}));function B(W){return _.apply(this,arguments)}return B}(),options:f})}function me(m,f){var h=m.path,b=m.parent,M=m.value;if(!(b&&!Object.hasOwn(b,h[h.length-1]))){var n=M(),I=n.getter,p=n.options;p.async=!0,de(h,I,f,p);var A=p.depends,$=A===void 0?[]:A,_=p.selfReactiveable,B=h;$.length==0&&f.options.log("async computed <".concat(h.join("."),"> should specify depends"),"warn");var W=H(h,p);p.id=W;var z=h.join(T);f.options.log("Create async computed: ".concat(z," (depends=").concat($.length==0?"None":o($),")"));var q={id:W,desc:z,resultPath:B,isComputedRunning:!1,dependValues:[],valuePath:h,deps:$,getter:I};Ce(q,p,f),_||m.replaceValue(v(f.state,h));var Y=new te(f,_,h,p);return p.save&&f.computedObjects.set(W,Y),Y}}function Se(m){return Object.assign({loading:!1,timeout:0,retry:0,error:null,result:void 0,progress:0,run:(0,ce.markRaw)(C(function(f){})),cancel:(0,ce.markRaw)(C(function(){}))},m)}var Oe=e(36711);function Fe(m,f){var h=m.value,b;return h.__COMPUTED__=="async"?b=me(m,f):h.__COMPUTED__=="sync"?b=Ne(m,f):(0,Oe.$)(h)?(m.value=function(){return{getter:h,options:{depends:[],initial:void 0,immediate:!0,enable:!0}}},b=me(m,f)):(m.value=function(){return{getter:h,options:{initial:void 0,enable:!0}}},b=Ne(m,f)),b&&setTimeout(function(){f.emit("computed:created",b)}),b}var st=e(14582),_e=e.n(st),ct=e(28810),be=e.n(ct),it=e(48510),pt=e.n(it),vt=e(30790),mt=e.n(vt),It=e(77701),Me=e.n(It),ft=e(28249),je=e.n(ft),xt=e(5672),$e=e.n(xt);function ke(m,f,h){if(typeof m!="function")throw new Error("computed getter must be a function");var b=[],M={async:!1,enable:!0,timeout:0,depends:[],immediate:!0,save:!0};if(arguments.length==1)b=[];else if(arguments.length==2)if(Array.isArray(arguments[1]))b=arguments[1];else if(R()(arguments[1])=="object")Object.assign(M,arguments[1]);else throw new Error("invalid arguments");else arguments.length>=3&&(b=arguments[1],Object.assign(M,arguments[2]));var n=M.async===!0||(0,Oe.$)(m)||arguments.length>=2&&Array.isArray(f);M.async=n,M.depends=g(b);var I=function(){return{getter:m,options:M}};return I.__COMPUTED__=n?"async":"sync",I}function Te(){return Math.random().toString(36).slice(2)}var ht=function(){function m(f,h){F()(this,m)}return Q()(m,[{key:"state",get:function(){throw new Error("state not implemented.")}},{key:"useState",value:function(h){throw new Error("useState not implemented.")}},{key:"setState",value:function(h){throw new Error("setState not implemented.")}},{key:"createAsyncComputed",value:function(h){throw new Error("createAsyncComputed not implemented.")}},{key:"createComputed",value:function(h){throw new Error("createComputed not implemented.")}},{key:"runComputed",value:function(h,b){throw new Error("runComputed not implemented.")}},{key:"sync",value:function(h){throw new Error("sync not implemented.")}},{key:"markRaw",value:function(h){throw new Error("makeRaw not implemented.")}},{key:"createWatch",value:function(h,b){throw new Error("createWatch not implemented.")}}]),m}(),ze=function(m){Me()(h,m);var f=je()(h);function h(b,M){var n,I;return F()(this,h),I=f.call(this,b,M),ee()(be()(I),"_stateCtx",void 0),I._stateCtx=(0,ce.sharex)(b,{stopArrDep:!1,moduleName:(n=M==null?void 0:M.id)!==null&&n!==void 0?n:Te(),onRead:function(A){M!=null&&M.onRead&&M.onRead({path:A.fullKeyPath,value:A.value,parent:A.parent,replaceValue:A.replaceValue})}}),I}return Q()(h,[{key:"state",get:function(){return this._stateCtx.reactive}},{key:"useState",value:function(M){var n=this._stateCtx.useState(),I=he()(n,2),p=I[0],A=I[1],$=typeof M=="function"?M(p):p;return[$,A]}},{key:"setState",value:function(M){this._stateCtx.setState(M)}},{key:"sync",value:function(M){return this._stateCtx.sync(M)}},{key:"createAsyncComputed",value:function(M){var n=M.initial,I=M.onComputed,p=M.depends,A=M.options;return this._stateCtx.mutate({deps:function(_){return typeof p=="function"?p(_):null},fn:function(_,B){B.isFirstCall&&typeof n=="function"&&n(_,B)},task:function(){var $=pe()(se()().mark(function B(W){var z,q,Y,X;return se()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:if(z=W.draft,q=W.setState,Y=W.input,X=W.extraArgs,typeof I!="function"){ae.next=3;break}return ae.abrupt("return",I({draft:z,setState:q,values:Y,options:Object.assign({},X)}));case 3:case"end":return ae.stop()}},B)}));function _(B){return $.apply(this,arguments)}return _}(),immediate:A.immediate,desc:A.id,checkDeadCycle:!1}),A.id}},{key:"createComputed",value:function(M){var n=M.onComputed,I=M.options;return this._stateCtx.mutate({fn:function(A,$){var _=$.input;typeof n=="function"&&n({draft:A,values:_})},task:function(){var p=pe()(se()().mark(function $(_){var B,W,z;return se()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:B=_.draft,W=_.input,z=_.extraArgs,typeof n=="function"&&n({draft:B,values:W,options:z});case 2:case"end":return Y.stop()}},$)}));function A($){return p.apply(this,arguments)}return A}(),desc:I.id,checkDeadCycle:!1}),I.id}},{key:"runComputed",value:function(M,n){var I={desc:M,extraArgs:n};return this._stateCtx.runMutateTask(I)}},{key:"markRaw",value:function(M){return(0,ce.markRaw)(M)}},{key:"createWatch",value:function(M,n){var I=this,p=(0,ce.watch)(function($){var _=$.triggerReasons,B=_.map(function(W){return W.keyPath});M(B)},typeof n=="function"?n:function(){return(n==null?void 0:n.length)==0?[I._stateCtx.state]:n==null?void 0:n.map(function($){return w(I._stateCtx.state,$)})}),A=p.unwatch;return A}}]),h}(ht),yt=e(59166);function Ze(m){function f(h,b,M){var n=Object.assign({id:Te(),save:!1},(0,yt.P)(arguments[1])?arguments[1]:arguments[2]);n.depends=Array.isArray(arguments[1])?arguments[1]:[];var I=n.async===!0||(0,Oe.$)(h)||Array.isArray(arguments[1]);n.selfReactiveable=new ze({value:I?re(m,n.id,{}):n.initial});var p;I?p={path:["value"],parent:null,value:ke(h,n.depends,n)}:p={path:["value"],parent:null,value:ke(h,n)};var A=Fe(p,m);return A}return f}var Pe=function(m){Me()(h,m);var f=je()(h);function h(b){var M;return F()(this,h),M=f.call(this),ee()(be()(M),"_createComputed",void 0),M.store=b,M}return Q()(h,[{key:"runGroup",value:function(){var b=pe()(se()().mark(function n(I,p){return se()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.abrupt("return",Promise.all(U()(this.values()).filter(function(_){return _.group==I}).map(function(_){return _.async,_.run(p)})));case 1:case"end":return $.stop()}},n,this)}));function M(n,I){return b.apply(this,arguments)}return M}()},{key:"enableGroup",value:function(){var b=pe()(se()().mark(function n(I){var p,A,$;return se()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:p=_e()(this.values());try{for(p.s();!(A=p.n()).done;)$=A.value,$.options.enable=I}catch(W){p.e(W)}finally{p.f()}case 2:case"end":return B.stop()}},n,this)}));function M(n){return b.apply(this,arguments)}return M}()},{key:"delete",value:function(M){return pt()(mt()(h.prototype),"delete",this).call(this,M)}},{key:"create",get:function(){return this._createComputed||(this._createComputed=Ze(this.store)),this._createComputed}}]),h}($e()(Map));function He(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return typeof m=="function"?m:typeof m=="string"?function(f){return o(f)==o(m.split(T))}:Array.isArray(m)?m.length===0?function(){return!0}:function(f){return m.map(function(h){return typeof h=="string"?h.split(T):Array.isArray(h)?h:[String(h)]}).some(function(h){return o(f)==o(h)})}:function(){return!1}}function At(m,f,h){var b=Object.assign({depends:He(f),enable:!0},h),M=function(){return{listener:m,options:b}};return M.__COMPUTED__="watch",M}function Be(m){return function(f,h){if(h=g(h),h.length===0)return m.reactiveable.createWatch(f);if(h.some(function(b){return typeof b=="string"&&b.startsWith(".")}))throw new Error("watch depends can not start with '.'");return m.reactiveable.createWatch(f,h)}}var Je=e(92379);function Qe(m,f){f.options.log("install watch for <".concat(m.path.length==0?"Dynamic":m.path.join(T),">"));var h=m.value();h.options.path=m.path;var b=f.watchObjects.add(h),M=h.options.context;return M?M.setState(function(n){n.value=h.options.initial}):(m.replaceValue(h.options.initial),f.setState(function(n){P(n,m.path,h.options.initial)})),b}function Xe(m){return function(f,h,b){(0,Je.useEffect)(function(){var M={path:["value"],parent:void 0,value:function(){var p={listener:f,options:Object.assign({depends:He(h),context:(0,ce.sharex)({value:0}),selfPath:["value"],initial:0,enable:!0,scope:K.Depends},b)};return p}},n=Qe(M,m);return function(){m.watchObjects.delete(n.id)}},[h])}}function Le(m,f){if(m===f)return!0;if(m==null||f==null||R()(m)!==R()(f))return!1;if(R()(m)==="object"){if(Array.isArray(m)&&Array.isArray(f))return m.length!==f.length?!1:m.every(function(b,M){return Le(b,f[M])});if(!Array.isArray(m)&&!Array.isArray(f)){var h=Object.keys(m);return h.length!==Object.keys(f).length?!1:h.every(function(b){return Le(m[b],f[b])})}else return!1}return!1}var Ye=function(){function m(f,h){if(F()(this,m),ee()(this,"_cache",void 0),ee()(this,"_listener",void 0),ee()(this,"_options",void 0),this.store=f,this._options=Object.assign({enable:!0,selfPath:[],group:void 0,context:void 0,initial:void 0},h.options),typeof this._options.depends!="function")throw new Error("watch options.depends must be a function");if(!this._options.id){var b=this._options.path;this._options.id=this._options.id||this._options.context?Te():o(b)}this._listener=h.listener}return Q()(m,[{key:"id",get:function(){return this._options.id}},{key:"options",get:function(){return this._options}},{key:"path",get:function(){return this._options.path}},{key:"depends",get:function(){return this._options.depends}},{key:"enable",get:function(){return this._options.enable},set:function(h){this._options.enable=h}},{key:"cache",get:function(){return this._cache||(this._cache={}),this._cache}},{key:"value",get:function(){var h=this._options.context?this._options.context:this.store.state;return v((0,ce.getSnap)(h),this.path)}},{key:"getName",value:function(){return this._options.context?this.id:this.path.join(T)}},{key:"isDepends",value:function(h,b){return Le(h,this.path)?!1:this.depends(h,b)}},{key:"reset",value:function(){this._cache={}}},{key:"run",value:function(h,b){var M=this;if(!this.enable){this.store.options.log("WatchObject <".concat(this.getName(),"> is disabled"));return}try{var n=this._listener.call(this,h,b,this);n!==void 0&&(this._options.context?this._options.context.setState(function(I){I.value=n}):this.store.setState(function(I){P(I,M.path,n)}))}catch(I){}}}]),m}(),qe=function(m){Me()(h,m);var f=je()(h);function h(b){var M;return F()(this,h),M=f.call(this),ee()(be()(M),"_off",void 0),ee()(be()(M),"_enable",!0),M.store=b,b.on("created",M.onStateCreated.bind(be()(M))),M}return Q()(h,[{key:"onStateCreated",value:function(){this.createWacher()}},{key:"enable",get:function(){return this._enable},set:function(M){this._enable=M}},{key:"createWacher",value:function(){var M=this,n=this.store.reactiveable.createWatch(function(I){M._enable&&I.forEach(function(p){var A=v(M.store.state,p),$=_e()(M.values()),_;try{for($.s();!(_=$.n()).done;){var B=_.value;B.isDepends(p,A)&&B.run(p,A)}}catch(W){$.e(W)}finally{$.f()}})},[]);this._off=n}},{key:"reset",value:function(){this._off&&this._off(),this.createWacher()}},{key:"add",value:function(M){var n=new Ye(this.store,M);return this.set(n.id,n),n}},{key:"enableGroup",value:function(M){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,I=_e()(this.values()),p;try{for(I.s();!(p=I.n()).done;){var A=p.value;A.options.group==M&&(A.options.enable=n)}}catch($){I.e($)}finally{I.f()}}}]),h}($e()(Map));function et(m,f){var h=m.path,b=m.value,M=o(h);typeof b=="function"&&!f._replacedKeys[M]&&!t(b)&&(f._replacedKeys[M]=!0,b.__COMPUTED__=="watch"?Qe(m,f):Fe(m,f))}function bt(m){return function(f,h){var b=m.reactiveable.useState.bind(m.reactiveable);if(f==null)return b();var M=b(),n=he()(M,2),I=n[0],p=n[1],A=f(I),$=p;return typeof h=="function"&&($=function(B){p(function(W){h.call(W,W,B)})}),[A,$]}}function gt(m){return function(f){m.reactiveable.setState(function(h){f(h)})}}var Et=e(24222);function Nt(m){var f=(0,Et.Z)();m._emitter=f,m.on=f.on,m.off=f.off,m.emit=f.emit,m.once=function(h,b){var M=function n(I){try{b(I)}finally{f.off(h,n)}};f.on(h,M)}}function tt(m,f){var h=Object.assign({id:Te(),debug:!0,immediate:!1,enableComputed:!0,scope:function(){return K.Current}},f);h.log=function(){h.debug&&x.apply(void 0,arguments)};var b={options:h,_replacedKeys:{}};return Nt(b),b.computedObjects=new Pe(b),b.watchObjects=new qe(b),b.reactiveable=new ze(m,{id:h.id,onRead:function(n){et(n,b)}}),b.state=b.reactiveable.state,b.emit("created"),b.useState=bt(b),b.setState=gt(b),b.enableComputed=function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return b.options.enableComputed=M},b.sync=b.reactiveable.sync.bind(b.reactiveable),b.watch=Be(b),b.useWatch=Xe(b),b.watch=Be(b),b.createComputed=Ze(b),h.immediate&&s(b.state),b}function at(m,f){var h=(0,Je.useState)(function(){return tt(m,Object.assign({immediate:!0},f))}),b=he()(h,1),M=b[0];return M}},20043:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(24908);const o=[{value:"This is a API example.",paraId:0}]},78282:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(78719);const o=[]},41987:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(58839);const o=[]},58425:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(43230);const o=[]},55481:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(64010);const o=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0}]},26708:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(90938);const o=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0}]},91561:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(97278);const o=[]},39508:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(83975);const o=[]},76567:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(82376);const o=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0}]},1607:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(59147);const o=[{value:"\u8868\u5355\u52A8\u4F5C\u7528\u6765\u5B9A\u4E49\u8868\u5355\u7684\u63D0\u4EA4\u3001\u91CD\u7F6E,\u6216\u8005\u4EFB\u610F\u884C\u4E3A\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8868\u5355\u52A8\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u901A\u4FD7\u5730\u8BF4\uFF0C\u8868\u5355\u52A8\u4F5C\u5C31\u662F\u58F0\u660E\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u5BF9\u8868\u5355\u6570\u636E\u8FDB\u884C\u5904\u7406\u3002",paraId:1,tocIndex:0},{value:"\u5728\u8868\u5355\u7684",paraId:2,tocIndex:1},{value:"actions",paraId:2,tocIndex:1},{value:"\u4E2D\u5B9A\u4E49\u8868\u5355\u52A8\u4F5C\uFF0C",paraId:2,tocIndex:1},{value:"actions",paraId:2,tocIndex:1},{value:"\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0Caction\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A\u3002",paraId:2,tocIndex:1},{value:`export interface FormActionDefine<Scope extends Dict=Dict,Result =any>{
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

`,paraId:4,tocIndex:1},{value:"\u8BF4\u660E",paraId:5,tocIndex:1},{value:"\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u8868\u5355",paraId:6,tocIndex:1},{value:"action",paraId:6,tocIndex:1},{value:"\u58F0\u660E\u5728",paraId:6,tocIndex:1},{value:"actions",paraId:6,tocIndex:1},{value:"\u3002",paraId:6,tocIndex:1},{value:"\u6BCF\u4E2A",paraId:6,tocIndex:1},{value:"Action",paraId:6,tocIndex:1},{value:"\u5747\u53EF\u4EE5\u6307\u5B9A",paraId:6,tocIndex:1},{value:"scope",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"title",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"help",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"tips",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"visible",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"enable",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"count",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"execute",paraId:6,tocIndex:1},{value:"\u7B49\u5C5E\u6027\uFF0C\u9664\u4E86",paraId:6,tocIndex:1},{value:"execute",paraId:6,tocIndex:1},{value:"\u5916\uFF0C\u5176\u4ED6\u5747\u662F\u53EF\u9009\u7684\u3002",paraId:6,tocIndex:1},{value:"\u6BCF\u4E2A",paraId:7,tocIndex:2},{value:"Action",paraId:7,tocIndex:2},{value:"\u5747\u53EF\u4EE5\u6307\u5B9A",paraId:7,tocIndex:2},{value:"execute",paraId:7,tocIndex:2},{value:"\u5C5E\u6027\uFF0C\u7528\u6765\u6267\u884C\u52A8\u4F5C\uFF0C",paraId:7,tocIndex:2},{value:"execute",paraId:7,tocIndex:2},{value:"\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u5BF9\u8868\u5355\u6570\u636E\u8FDB\u884C\u5904\u7406\u3002",paraId:7,tocIndex:2},{value:"execute",paraId:8,tocIndex:2},{value:"\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E00\u822C\u662F\u5F02\u6B65\u51FD\u6570\uFF0C\u6BD5\u7ADF\u8981\u5E72\u70B9\u4EC0\u4E48\u4E8B\u561B\uFF0C\u4E5F\u53EF\u4EE5\u662F\u540C\u6B65\u51FD\u6570\uFF0C\u53EF\u4EE5\u6709\u4EE5\u4E0B\u51E0\u79CD\u58F0\u660E\u65B9\u5F0F\uFF1A",paraId:8,tocIndex:2},{value:"\u76F4\u63A5\u4F7F\u7528\u5F02\u6B65\u51FD\u6570\u58F0\u660E",paraId:9,tocIndex:3},{value:"\u9996\u9009\u662F\u4F7F\u7528",paraId:10,tocIndex:4},{value:"action",paraId:10,tocIndex:4},{value:"\u65B9\u6CD5\u8FDB\u884C\u58F0\u660E\uFF0C",paraId:10,tocIndex:4},{value:"action",paraId:10,tocIndex:4},{value:"\u65B9\u6CD5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u58F0\u660E\u4E00\u4E2A\u52A8\u4F5C\u3002",paraId:10,tocIndex:4},{value:"",paraId:11,tocIndex:4},{value:"scope",paraId:12,tocIndex:5},{value:"\uFF1A\u52A8\u4F5C\u63D0\u4EA4\u8303\u56F4\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u52A8\u6001\u8BA1\u7B97\u63D0\u4EA4\u8303\u56F4\u3002",paraId:12,tocIndex:5}]},39778:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(76726);const o=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0},{value:"\u4E00\u822C\u5728\u72EC\u7ACB\u7684\u6587\u4EF6\u4E2D\u4F7F\u7528",paraId:1,tocIndex:1},{value:"createForm",paraId:1,tocIndex:1},{value:"\u6765\u521B\u5EFA\u4E00\u4E2A\u8868\u5355\u5BF9\u8C61\uFF08\u4E0D\u662F\u5728\u7EC4\u4EF6\u5185\uFF09\u3002",paraId:1,tocIndex:1},{value:`import { createForm }  from "@speedform/core"
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
`,paraId:16,tocIndex:3},{value:"createForm",paraId:17,tocIndex:4},{value:"\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u8868\u5355\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5305\u62EC\u4E86\u4E00\u4E9B\u7528\u6765\u64CD\u4F5C\u8868\u5355\u7684",paraId:17,tocIndex:4},{value:"API",paraId:17,tocIndex:4},{value:"\u3002",paraId:17,tocIndex:4},{value:"\u540D\u79F0",paraId:18,tocIndex:4},{value:"\u7C7B\u578B",paraId:18,tocIndex:4},{value:"\u8BF4\u660E",paraId:18,tocIndex:4},{value:"Form",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Field",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u5B57\u6BB5\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Group",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u5B57\u6BB5\u7EC4\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Action",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u52A8\u4F5C\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Submit",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u63D0\u4EA4\u52A8\u4F5C\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Reset",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u91CD\u7F6E\u52A8\u4F5C\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"getAction",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u7528\u6765\u83B7\u53D6\u5728\u8868\u5355\u5B57\u6BB5\u58F0\u660E\u7684",paraId:18,tocIndex:4},{value:"Action",paraId:18,tocIndex:4},{value:"fields",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355",paraId:18,tocIndex:4},{value:"fields",paraId:18,tocIndex:4},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"actions",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355",paraId:18,tocIndex:4},{value:"actions",paraId:18,tocIndex:4},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"state",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355\u6570\u636E\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"computedObjects",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355\u4E2D\u7684\u6240\u6709\u8BA1\u7B97\u5C5E\u6027\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"watchObjects",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355\u4E2D\u7684\u6240\u6709",paraId:18,tocIndex:4},{value:"Watch",paraId:18,tocIndex:4},{value:"\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"freeze",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u51BB\u7ED3\u8868\u5355\u7981\u6B62\u7F16\u8F91",paraId:18,tocIndex:4},{value:"load",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u52A0\u8F7DJSON\u6570\u636E\u5230\u8868\u5355\u5B9E\u4F8B",paraId:18,tocIndex:4},{value:"getValues",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u83B7\u53D6\u8868\u5355\u6570\u636E(\u53EA\u5305\u62EC\u8868\u5355\u5B57\u6BB5",paraId:18,tocIndex:4},{value:"value",paraId:18,tocIndex:4},{value:")",paraId:18,tocIndex:4},{value:"validate",paraId:18,tocIndex:4},{value:"'\u65B9\u6CD5'",paraId:18,tocIndex:4},{value:"\u6821\u9A8C\u6574\u4E2A\u8868\u5355",paraId:18,tocIndex:4},{value:"useState",paraId:18,tocIndex:4},{value:"hook",paraId:18,tocIndex:4},{value:"\u5728\u7EC4\u4EF6\u4E2D\u8BBF\u95EE",paraId:18,tocIndex:4},{value:"state",paraId:18,tocIndex:4},{value:"createForm",paraId:19,tocIndex:5},{value:"\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A\u6CDB\u578B\u53C2\u6570\uFF0C\u7528\u4E8E\u5B9A\u4E49\u8868\u5355\u7684",paraId:19,tocIndex:5},{value:"schema",paraId:19,tocIndex:5},{value:"\u5BF9\u8C61\u7C7B\u578B\u3002\u4F46\u662F\u8BE5\u6CDB\u578B\u53C2\u6570\u4E00\u822C\u53EF\u4EE5\u91C7\u7528",paraId:19,tocIndex:5},{value:"typeof <schema>",paraId:19,tocIndex:5},{value:"\u6765\u81EA\u52A8\u63A8\u65AD\uFF0C\u8FD9\u6837\u5C31\u4E0D\u9700\u8981\u624B\u52A8\u5B9A\u4E49\u7C7B\u578B\u4E86\u3002",paraId:19,tocIndex:5}]},42066:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(88209);const o=[]},56148:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(14741);const o=[]},62925:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(97630);const o=[]},23331:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(72e3);const o=[]},48099:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(27548);const o=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u975E\u5E38\u5F3A\u5927\u7684",paraId:0,tocIndex:0},{value:"React",paraId:0,tocIndex:0},{value:"\u8868\u5355\u7EC4\u4EF6\uFF0C\u5B83\u7684\u76EE\u6807\u662F\u8BA9",paraId:0,tocIndex:0},{value:"React",paraId:0,tocIndex:0},{value:"\u8868\u5355\u5F00\u53D1\u53D8\u5F97\u66F4\u52A0\u7B80\u5355\u3001\u5FEB\u901F\u3001\u7075\u6D3B\u3002",paraId:0,tocIndex:0}]},28519:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(31430);const o=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u6838\u5FC3\u7531\u4E24\u4E2A\u5305\u7EC4\u6210\uFF1A",paraId:0,tocIndex:0},{value:"@speedform/core",paraId:0,tocIndex:0},{value:"\u548C",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u662F\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u7684\u54CD\u5E94\u5F0F\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u7528\u6765\u7BA1\u7406\u548C\u9A71\u52A8",paraId:1,tocIndex:0},{value:"Form",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u662F",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u529F\u80FD\u5F3A\u5927\u7684\u57FA\u7840\u3002",paraId:1,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u4F5C\u4E3A\u66FF\u4EE3",paraId:1,tocIndex:0},{value:"redux",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"mobx",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"zstuand",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"Jotai",paraId:1,tocIndex:0},{value:"\u7684\u72B6\u6001\u7BA1\u7406\u5E93\u72EC\u7ACB\u4F7F\u7528\uFF0C\u5176\u672C\u8D28\u4E0A\u662F\u5BF9",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u72B6\u6001\u7BA1\u7406\u5E93\u7684\u5C01\u88C5\u3002",paraId:1,tocIndex:0},{value:"@speedform/core",paraId:1,tocIndex:0},{value:"\u662F",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u6838\u5FC3\u5E93\uFF0C\u5B83\u63D0\u4F9B\u4E86",paraId:1,tocIndex:0},{value:"Form",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u548C",paraId:1,tocIndex:0},{value:"Field",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6,\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A",paraId:1,tocIndex:0},{value:"headless",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u5E93,\u53EA\u8D1F\u8D23\u8868\u5355\u7684\u903B\u8F91\u5904\u7406\uFF0C\u4E0D\u8D1F\u8D23\u5177\u4F53\u7684\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"@speedform/antd",paraId:1,tocIndex:0},{value:"\u662F\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u6E32\u67D3\u7EC4\u4EF6\u5E93\uFF0C\u5B83\u63D0\u4F9B\u4E86",paraId:1,tocIndex:0},{value:"Form",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u548C",paraId:1,tocIndex:0},{value:"Field",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u7684",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7248\u672C\u3002",paraId:1,tocIndex:0},{value:`pnpm install @speedform/core @speedform/reactive
yarn add @speedform/core @speedform/reactive
npm install @speedform/core @speedform/reactive
`,paraId:2,tocIndex:0}]},61022:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(48566);const o=[]},7019:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(25248);const o=[{value:"\u672C\u8282\u5C06\u901A\u8FC7\u5F00\u53D1\u4E00\u4E2A\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\uFF0C\u4F53\u9A8C",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u7684\u5F3A\u5927\u4E0E\u7075\u6D3B\u3002",paraId:0,tocIndex:0},{value:"\u8BE5\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A",paraId:1,tocIndex:0},{value:"\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\u7ED3\u6784\u5982\u4E0B\uFF1A",paraId:2,tocIndex:0},{value:`{
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
`,paraId:73,tocIndex:18},{value:"\u8BF4\u660E",paraId:74,tocIndex:18},{value:":",paraId:74,tocIndex:18},{value:"Network.Submit",paraId:75,tocIndex:18},{value:"\u7EC4\u4EF6\u7684",paraId:75,tocIndex:18},{value:"children",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u6E32\u67D3\u63D0\u4EA4\u6309\u94AE\u7684\u5177\u4F53\u5185\u5BB9\uFF0C\u4F20\u5165",paraId:75,tocIndex:18},{value:"props",paraId:75,tocIndex:18},{value:"\u662F\u4E00\u4E2A\u63D0\u4EA4\u6309\u94AE\u7684\u63A7\u5236\u5C5E\u6027\uFF0C\u5305\u62EC",paraId:75,tocIndex:18},{value:"title",paraId:75,tocIndex:18},{value:"\u3001",paraId:75,tocIndex:18},{value:"dirty",paraId:75,tocIndex:18},{value:"\u3001",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u7B49\u3002",paraId:75,tocIndex:18},{value:"title",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u5B9A\u63D0\u4EA4\u6309\u94AE\u7684\u6807\u9898\u3002",paraId:75,tocIndex:18},{value:"dirty",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u793A\u8868\u5355\u662F\u5426\u5DF2\u7ECF\u88AB\u7F16\u8F91\u8FC7\u3002",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u793A\u8868\u5355\u662F\u5426\u6709\u6548\uFF0C\u5176\u503C\u662F\u7531\u6240\u6709\u5B57\u6BB5\u7684",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u8BA1\u7B97\u5C5E\u6027\u7684\u7ED3\u679C\u51B3\u5B9A\u7684\u3002",paraId:75,tocIndex:18},{value:"",paraId:76,tocIndex:19},{value:"",paraId:77,tocIndex:20},{value:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u7F51\u7EDC\u914D\u7F6E\u8868\u5355",paraId:78,tocIndex:21}]},3050:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(48101);const o=[{value:"\u672C\u8282\u5C06\u901A\u8FC7\u5F00\u53D1\u4E00\u4E2A\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\uFF0C\u4F53\u9A8C",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u7684\u5F3A\u5927\u4E0E\u7075\u6D3B\u3002",paraId:0,tocIndex:0},{value:"\u8BE5\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A",paraId:1,tocIndex:0},{value:"\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\u7ED3\u6784\u5982\u4E0B\uFF1A",paraId:2,tocIndex:0},{value:`{
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
`,paraId:73,tocIndex:18},{value:"\u8BF4\u660E",paraId:74,tocIndex:18},{value:":",paraId:74,tocIndex:18},{value:"Network.Submit",paraId:75,tocIndex:18},{value:"\u7EC4\u4EF6\u7684",paraId:75,tocIndex:18},{value:"children",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u6E32\u67D3\u63D0\u4EA4\u6309\u94AE\u7684\u5177\u4F53\u5185\u5BB9\uFF0C\u4F20\u5165",paraId:75,tocIndex:18},{value:"props",paraId:75,tocIndex:18},{value:"\u662F\u4E00\u4E2A\u63D0\u4EA4\u6309\u94AE\u7684\u63A7\u5236\u5C5E\u6027\uFF0C\u5305\u62EC",paraId:75,tocIndex:18},{value:"title",paraId:75,tocIndex:18},{value:"\u3001",paraId:75,tocIndex:18},{value:"dirty",paraId:75,tocIndex:18},{value:"\u3001",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u7B49\u3002",paraId:75,tocIndex:18},{value:"title",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u5B9A\u63D0\u4EA4\u6309\u94AE\u7684\u6807\u9898\u3002",paraId:75,tocIndex:18},{value:"dirty",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u793A\u8868\u5355\u662F\u5426\u5DF2\u7ECF\u88AB\u7F16\u8F91\u8FC7\u3002",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u793A\u8868\u5355\u662F\u5426\u6709\u6548\uFF0C\u5176\u503C\u662F\u7531\u6240\u6709\u5B57\u6BB5\u7684",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u8BA1\u7B97\u5C5E\u6027\u7684\u7ED3\u679C\u51B3\u5B9A\u7684\u3002",paraId:75,tocIndex:18},{value:"",paraId:76,tocIndex:19},{value:"",paraId:77,tocIndex:20},{value:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u7F51\u7EDC\u914D\u7F6E\u8868\u5355",paraId:78,tocIndex:21}]},62095:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(59856);const o=[{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u5F53\u6240\u4F9D\u8D56\u7684\u72B6\u6001\u503C\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u3002",paraId:0,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A",paraId:1,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\u6216\u8005\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A",paraId:2,tocIndex:0},{value:"Promise",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\u3002",paraId:2,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u7684\u5FC5\u987B\u663E\u5F0F\u6307\u5B9A\u4F9D\u8D56,\u4E0D\u80FD\u50CF\u540C\u6B65\u8BA1\u7B97\u4E00\u6837\u81EA\u52A8\u6536\u96C6\u4F9D\u8D56\u3002",paraId:2,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u4F1A\u88AB\u66FF\u6362\u4E3A",paraId:2,tocIndex:0},{value:"AsyncComputedObject",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\uFF0C\u901A\u8FC7\u8BE5\u5BF9\u8C61\u53EF\u4EE5\u8BFB\u53D6\u5230\u5F02\u6B65\u8BA1\u7B97\u7684\u8FDB\u5EA6\u4EE5\u53CA\u7ED3\u679C\u7B49\u3002",paraId:2,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u4F7F\u7528",paraId:3,tocIndex:1},{value:"computed",paraId:3,tocIndex:1},{value:"\u8FDB\u884C\u58F0\u660E\uFF0C\u65B9\u5F0F\u5982\u4E0B\uFF1A",paraId:3,tocIndex:1},{value:"\u4EE5\u4E0A",paraId:4},{value:"fullName",paraId:4},{value:"\u662F\u4E00\u4E2A\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u4F9D\u8D56\u4E8E",paraId:4},{value:"firstName",paraId:4},{value:"\u548C",paraId:4},{value:"lastName",paraId:4},{value:"\u3002",paraId:4},{value:"computed",paraId:4},{value:"\u51FD\u6570\u7528\u6765\u5C01\u88C5\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\uFF0C\u7528\u6765\u6307\u5B9A\u4F9D\u8D56\u7684\u72B6\u6001\u8DEF\u5F84\u3002",paraId:4},{value:"\u4F9D\u8D56\u53EF\u4EE5\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u6216\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4F7F\u7528",paraId:4},{value:".",paraId:4},{value:"\u4F5C\u4E3A\u8DEF\u5F84\u5206\u5272\u7B26\uFF0C",paraId:4},{value:"./",paraId:4},{value:"\u6307\u7684\u662F\u5F53\u524D\u5BF9\u8C61\uFF0C",paraId:4},{value:"../",paraId:4},{value:"\u6307\u7684\u662F\u7236\u5BF9\u8C61\u3002",paraId:4},{value:"\u5F53\u6211\u4EEC\u66F4\u65B0",paraId:4},{value:"firstName",paraId:4},{value:"\u6216",paraId:4},{value:"lastName",paraId:4},{value:"\u65F6\uFF0C",paraId:4},{value:"fullName",paraId:4},{value:"\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u3002",paraId:4},{value:"\u8BA1\u7B97\u5C5E\u6027\u7684\u7ED3\u679C\u4FDD\u5B58\u5728",paraId:4},{value:"state.user.fullName.result",paraId:4},{value:"\u4E2D\u3002",paraId:4},{value:"\u5F53\u8BA1\u7B97\u5C5E\u6027\u6B63\u5728\u8BA1\u7B97\u65F6\uFF0C",paraId:4},{value:"state.user.fullName.loading",paraId:4},{value:"\u4E3A",paraId:4},{value:"true",paraId:4},{value:"\u3002\u8BA1\u7B97\u5B8C\u6210\u540E\uFF0C",paraId:4},{value:"state.user.fullName.loading",paraId:4},{value:"\u4E3A",paraId:4},{value:"false",paraId:4},{value:"\u3002",paraId:4},{value:"\u4E0B\u9762\u662F\u4E00\u4E2A\u66F4\u52A0\u5B8C\u6574\u7684\u4F8B\u5B50\uFF1A",paraId:5},{value:"\u8BF4\u660E",paraId:6},{value:"\u4F7F\u7528",paraId:7},{value:"computed",paraId:7},{value:"\u51FD\u6570\u58F0\u660E\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C",paraId:7},{value:"computed",paraId:7},{value:`\u53C2\u6570\uFF1A
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
`,paraId:78},{value:"\u8FD9\u5BFC\u81F4",paraId:79},{value:"Speedform",paraId:79},{value:"\u5C06\u5176\u8BC6\u522B\u4E3A\u5F02\u6B65\u51FD\u6570\uFF0C\u4E5F\u5C31\u4E0D\u80FD\u76F8\u5E94\u5730\u521B\u5EFA\u5F02\u6B65",paraId:79},{value:"AsyncComputedObject",paraId:79},{value:"\uFF0C\u800C\u53EA\u662F\u5C06\u5176\u5F53\u4F5C\u4E00\u4E2A\u666E\u901A\u7684\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\u3002",paraId:79},{value:"\u89E3\u51B3\u65B9\u6CD5\u662F\u663E\u5F0F\u6307\u5B9A",paraId:80},{value:"computed(async ()=>{...},[...],{async:true})",paraId:80},{value:"\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u6B63\u786E\u8BC6\u522B\u4E3A\u5F02\u6B65\u51FD\u6570\u3002",paraId:80}]},28460:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(75394);const o=[{value:"\u7EC6\u5FC3\u7684\u670B\u53CB\u53EF\u80FD\u53D1\u73B0\uFF0C\u5728\u4E0A\u9762\u7684",paraId:0,tocIndex:0},{value:"createStore",paraId:0,tocIndex:0},{value:"\u4E2D\u6211\u4EEC\u6CA1\u6709\u58F0\u660E\u4EFB\u4F55\u7684\u8BA1\u7B97\u5C5E\u6027\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u662F\u4E0D\u652F\u6301\u8BA1\u7B97\u5C5E\u6027\uFF0C\u800C\u662F",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u4E86",paraId:0,tocIndex:0},{value:"\u72EC\u7279\u7684\u8BA1\u7B97\u5C5E\u6027\u7684\u58F0\u660E\u65B9\u5F0F",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u7684\u8BA1\u7B97\u5C5E\u6027\u7684\u58F0\u660E\u65B9\u5F0F\u662F",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u4E4B\u6240\u4EE5\u80FD\u63D0\u4F9B\u65E0\u4EE5\u4F26\u6BD4\u7528\u6237\u5F00\u53D1\u4F53\u9A8C\u7684\u5173\u952E\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:1},{value:"\u5B9E\u73B0\u4E86\u6700\u72EC\u7279\u7684\u79FB\u82B1\u63A5\u6728\u5F0F\u7684\u8BA1\u7B97\u5C5E\u6027\u5B9E\u73B0\u65B9\u5F0F",paraId:1},{value:"\u57FA\u672C\u8FC7\u7A0B\u5982\u4E0B\uFF1A",paraId:2},{value:"\u9996\u5148\u76F4\u63A5\u5728",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u58F0\u660E\u8BA1\u7B97\u5C5E\u6027\u51FD\u6570\uFF0C\u5982",paraId:3},{value:"fullName=(user)=>user.first+user.last",paraId:3},{value:"\u3002",paraId:3},{value:"\u8C03\u7528",paraId:3},{value:"createStore",paraId:3},{value:"\u521B\u5EFA",paraId:3},{value:"Store",paraId:3},{value:"\u65F6\uFF0C\u4F1A\u6839\u636E",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u7684\u51FD\u6570\u6765\u521B\u5EFA",paraId:3},{value:"mutate",paraId:3},{value:"\u6216",paraId:3},{value:"computed",paraId:3},{value:"(\u5728",paraId:3},{value:"helux",paraId:3},{value:"\u4E2D\u53EB\u6D3E\u751F\u5BF9\u8C61\uFF0C\u5728\u5176\u4ED6\u72B6\u6001\u5E93\u4E2D\u53EF\u80FD\u53EB\u8BA1\u7B97\u7B97\u5C5E\u6027)\u3002",paraId:3},{value:"\u5982\u6B64\uFF0C\u5F53",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1\u8BA1\u7B97\u5C5E\u6027\u7684\u91CD\u65B0\u8BA1\u7B97\uFF0C\u5C06\u8BA1\u7B97\u7ED3\u679C\u8D4B\u503C\u7ED9",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u7684\u5BF9\u5E94\u5C5E\u6027\u3002\u5728\u4E0A\u56FE\u4E2D\uFF0C\u5F53",paraId:3},{value:"firstName",paraId:3},{value:"\u548C",paraId:3},{value:"lastName",paraId:3},{value:"\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1",paraId:3},{value:"fullName(mutate)",paraId:3},{value:"\u7684\u91CD\u65B0\u8BA1\u7B97\uFF0C\u5C06\u8BA1\u7B97\u7ED3\u679C\u8D4B\u503C\u7ED9",paraId:3},{value:"user.fullName",paraId:3},{value:"\u5C5E\u6027\u3002\u8FD9\u6837\uFF0C\u5F53\u6211\u4EEC\u8BBF\u95EE",paraId:3},{value:"state.fullName",paraId:3},{value:"\u65F6,\u5C31\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E86\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u51FD\u6570\u4E86\u3002",paraId:3},{value:"\u4EE5\u4E0A\u5C31\u662F",paraId:4},{value:"@speedform/reactive",paraId:4},{value:"\u8BA1\u7B97\u5C5E\u6027\u79FB\u82B1\u63A5\u6728\u7684\u8FC7\u7A0B\u539F\u7406,\u5927\u5BB6\u53EF\u4EE5\u4ECE\u4E0B\u9762\u793A\u5217\u4E2D\u52A0\u6DF1\u7406\u89E3\u3002",paraId:4},{value:"\u5728\u4E0A\u4F8B\u4E2D\uFF1A",paraId:5},{value:"user.fullName",paraId:6},{value:"\u662F\u4E00\u4E2A\u51FD\u6570",paraId:6},{value:"store.state.fullName",paraId:6},{value:"\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32",paraId:6},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",paraId:6},{value:"createStore",paraId:6},{value:"\u76F4\u63A5\u5728\u8F93\u5165\u7684",paraId:6},{value:"user",paraId:6},{value:"\u4E0A\u8FDB\u884C\u521B\u5EFA\uFF0C\u6307\u5B9A",paraId:6},{value:"singleton:false",paraId:6},{value:"\u65F6\u4F1A\u6DF1\u62F7\u8D1D\u4E00\u4EFD",paraId:6},{value:"user",paraId:6},{value:"\uFF0C\u7136\u540E\u5728\u62F7\u8D1D\u7684",paraId:6},{value:"user",paraId:6},{value:"\u4E0A\u521B\u5EFA",paraId:6},{value:"mutate",paraId:6},{value:"\u6216",paraId:6},{value:"computed",paraId:6},{value:"\u3002",paraId:6},{value:"\u5728\u5B66\u4E60\u5982\u4F55\u58F0\u660E\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u6765\u4E86\u89E3\u4E00\u4E0B",paraId:7,tocIndex:2},{value:"\u8BA1\u7B97\u4F5C\u7528\u57DF - Scope",paraId:7,tocIndex:2},{value:"\u7684\u6982\u5FF5\u3002",paraId:7,tocIndex:2},{value:"\u8BA1\u7B97\u4F5C\u7528\u57DF",paraId:8},{value:"\u6307\u7684\u662F\u4F20\u9012\u7ED9\u8BA1\u7B97\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570",paraId:8},{value:"@speedform/reactive",paraId:9},{value:"\u5728\u521B\u5EFA",paraId:9},{value:"Store",paraId:9},{value:"\u65F6\uFF0C\u652F\u6301\u914D\u7F6E",paraId:9},{value:"scope",paraId:9},{value:"\u53C2\u6570\u6765\u6307\u5B9A\u8BA1\u7B97\u5C5E\u6027\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5982\u4E0B\uFF1A",paraId:9},{value:`export enum ComputedScopeRef{
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

`,paraId:10},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",paraId:11,tocIndex:3},{value:"scope==ComputedScopeRef.Current",paraId:11,tocIndex:3},{value:"\u65F6\uFF0C\u8BA1\u7B97\u51FD\u6570\u7684",paraId:11,tocIndex:3},{value:"this",paraId:11,tocIndex:3},{value:"\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u7684\u5BF9\u8C61\u3002",paraId:11,tocIndex:3},{value:"@speedform/reactive",paraId:12,tocIndex:5},{value:"\u4F1A\u5C06\u8BA1\u7B97\u5C5E\u51FD\u6570\u7684",paraId:12,tocIndex:5},{value:"scope",paraId:12,tocIndex:5},{value:"\u6307\u5411",paraId:12,tocIndex:5},{value:"ComputedScopeRef.Root",paraId:12,tocIndex:5},{value:"\uFF0C\u5373\u5F53\u524D\u7684",paraId:12,tocIndex:5},{value:"State",paraId:12,tocIndex:5},{value:"\u6839\u5BF9\u8C61\uFF0C\u5982\u4E0B\uFF1A",paraId:12,tocIndex:5},{value:"\u5F53",paraId:13,tocIndex:7},{value:"scope==ComputedScopeRef.Parent",paraId:13,tocIndex:7},{value:"\u65F6\uFF0C\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u7684\u5BF9\u8C61\u7684\u7236\u5BF9\u8C61\u3002",paraId:13,tocIndex:7},{value:"\u5F53",paraId:14,tocIndex:9},{value:"store.options.scope==<\u5B57\u7B26\u4E32>",paraId:14,tocIndex:9},{value:"\u65F6\uFF0C\u6B64\u65F6",paraId:14,tocIndex:9},{value:"<\u5B57\u7B26\u4E32>",paraId:14,tocIndex:9},{value:"\u5C31\u662F\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61\u7684\u952E\u540D\u79F0\u3002",paraId:14,tocIndex:9},{value:"computedThis='firstName'",paraId:15},{value:"\u4EE3\u8868",paraId:15},{value:"this",paraId:15},{value:"\u6307\u5411",paraId:15},{value:"user.firstName",paraId:15},{value:",\u4E5F\u5C31\u662F\u5F53\u524D\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61\u7684",paraId:15},{value:"firstName",paraId:15},{value:"\u6210\u5458\u3002",paraId:15},{value:"computedThis='address.city'",paraId:15},{value:"\u4EE3\u8868",paraId:15},{value:"this",paraId:15},{value:"\u6307\u5411",paraId:15},{value:"user.address.city",paraId:15},{value:"\u603B\u4E4B\uFF0C\u5F53",paraId:15},{value:"computedThis",paraId:15},{value:"\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u65F6\uFF0C\u4EE3\u8868\u662F",paraId:15},{value:"\u5F53\u524D\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61\u7684\u6307\u5B9A\u952E\u540D\u79F0",paraId:15},{value:"\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u952E\u540D\u79F0\u53EF\u4EE5\u662F\u591A\u7EA7\u7684\uFF0C\u5982",paraId:15},{value:"address.city",paraId:15},{value:"\u3002",paraId:15},{value:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",paraId:16},{value:"\u4E0E",paraId:16},{value:"scope==<\u5B57\u7B26\u4E32>",paraId:16},{value:"\u7684\u533A\u522B\u5728\u4E8E:",paraId:16},{value:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",paraId:17},{value:"\u4EE3\u8868\u662F\u4EE5",paraId:17},{value:"\u6839\u5BF9\u8C61",paraId:17},{value:"\u4E3A\u8D77\u70B9\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8DEF\u5F84\u53EF\u4EE5\u662F\u591A\u7EA7\u7684\uFF0C\u5982",paraId:17},{value:"['user','address','city']",paraId:17},{value:"\u3002",paraId:17},{value:"scope==<\u5B57\u7B26\u4E32>",paraId:17},{value:"\u4EE3\u8868\u662F\u4EE5",paraId:17},{value:"\u5F53\u524D\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61",paraId:17},{value:"\u4E3A\u8D77\u70B9\u7684\u8DEF\u5F84\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u952E\u540D\u79F0\u53EF\u4EE5\u662F\u591A\u7EA7\u7684\uFF0C\u5982",paraId:17},{value:"address.city",paraId:17},{value:"\u3002",paraId:17},{value:"\u5F53",paraId:18,tocIndex:13},{value:"scope==ComputedScopeRef.Depends",paraId:18,tocIndex:13},{value:"\u65F6\uFF0C\u8BA1\u7B97\u51FD\u6570\u7684",paraId:18,tocIndex:13},{value:"this",paraId:18,tocIndex:13},{value:"\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u7684\u4F9D\u8D56\u9879\u7684\u503C\u3002",paraId:18,tocIndex:13},{value:"ComputedScopeRef.Depends",paraId:19,tocIndex:13},{value:"\u4EC5\u5728\u5F02\u6B65\u8BA1\u7B97\u65F6\u751F\u6548,\u800C\u5F02\u6B65\u8BA1\u7B97\u5FC5\u987B\u901A\u8FC7computed\u51FD\u6570\u6765\u6307\u5B9A\u4F9D\u8D56",paraId:19,tocIndex:13}]},34957:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(83818);const o=[{value:"\u5F53\u4F7F\u7528",paraId:0,tocIndex:0},{value:"computed",paraId:0,tocIndex:0},{value:"\u521B\u5EFA\u597D\u8BA1\u7B97\u5C5E\u6027\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7",paraId:0,tocIndex:0},{value:"store.computedObjects",paraId:0,tocIndex:0},{value:"\u6765\u7BA1\u7406\u6240\u6709",paraId:0,tocIndex:0},{value:"store",paraId:0,tocIndex:0},{value:"\u5185\u7684\u8BA1\u7B97\u5C5E\u6027\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7",paraId:1,tocIndex:0},{value:"store.computedObjects",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u8BBF\u95EE\u5230\u6240\u6709\u7684\u8BA1\u7B97\u5BF9\u8C61\uFF0C\u8BA1\u7B97\u5BF9\u8C61\u662F\u4E00\u4E2A",paraId:1,tocIndex:0},{value:"Map",paraId:1,tocIndex:0},{value:"\u5BF9\u8C61\uFF0C\u5176\u4E2D\u7684",paraId:1,tocIndex:0},{value:"key",paraId:1,tocIndex:0},{value:"\u662F\u8BA1\u7B97\u5BF9\u8C61\u7684",paraId:1,tocIndex:0},{value:"name",paraId:1,tocIndex:0},{value:"\uFF0C",paraId:1,tocIndex:0},{value:"value",paraId:1,tocIndex:0},{value:"\u662F\u8BA1\u7B97\u5BF9\u8C61\u7684",paraId:1,tocIndex:0},{value:"value",paraId:1,tocIndex:0},{value:"\u3002",paraId:1,tocIndex:0},{value:"\u8BF4\u660E",paraId:2},{value:":",paraId:2},{value:"\u4EE5\u4E0A\u521B\u5EFA\u4E86\u4E00",paraId:3},{value:"fullName",paraId:3},{value:"\u548C",paraId:3},{value:"fullName2",paraId:3},{value:"\u4E24\u4E2A\u8BA1\u7B97\u5C5E\u6027",paraId:3},{value:"store.computedObjects",paraId:3},{value:"\u662F\u4E00\u4E2A",paraId:3},{value:"Map",paraId:3},{value:"\u5BF9\u8C61,\u53EF\u4EE5\u901A\u8FC7",paraId:3},{value:'store.computedObjects.get("user/fullName")',paraId:3},{value:"\u6765\u83B7\u53D6",paraId:3},{value:"fullName",paraId:3},{value:"\u7684\u8BA1\u7B97\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u662F\u4E00\u4E2A",paraId:3},{value:"ComputedObject",paraId:3},{value:"\u5B9E\u4F8B\u3002",paraId:3},{value:"ComputedObject",paraId:3},{value:"\u5B9E\u4F8B\u6709\u4E00\u4E2A",paraId:3},{value:"run",paraId:3},{value:"\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\u3002",paraId:3},{value:"\u5BF9\u4E8E\u5F02\u6B65\u8BA1\u7B97\u5373\u53EF\u4EE5\u901A\u8FC7",paraId:3},{value:'store.computedObjects.get("user/fullName2").run()',paraId:3},{value:"\u6765\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7",paraId:3},{value:"store.state.user.fullName2.run()",paraId:3},{value:"\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\u3002\u800C\u540C\u6B65\u8BA1\u7B97\u53EA\u80FD\u901A\u8FC7",paraId:3},{value:'store.computedObjects.get("user/fullName").run()',paraId:3},{value:"\u6765\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\u3002",paraId:3},{value:"\u6BCF\u4E00\u4E2A\u8BA1\u7B97\u51FD\u6570\u5747\u4F1A\u521B\u5EFA\u4E00\u4E2A",paraId:4,tocIndex:1},{value:"ComputedObject",paraId:4,tocIndex:1},{value:"\u5B9E\u4F8B\uFF0C\u4FDD\u5B58\u5728",paraId:4,tocIndex:1},{value:"store.computedObjects",paraId:4,tocIndex:1},{value:",\u8BE5\u5BF9\u8C61\u6709\u4EE5\u4E0B\u5C5E\u6027\u548C\u65B9\u6CD5:",paraId:4,tocIndex:1},{value:`export interface ComputedObject<T=Dict> {
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
\u5F53\u4F7F\u7528`,paraId:7,tocIndex:2},{value:"computed",paraId:7,tocIndex:2},{value:"\u65B9\u6CD5\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u65F6\uFF0C\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A",paraId:7,tocIndex:2},{value:"group",paraId:7,tocIndex:2},{value:"\u53C2\u6570\uFF0C\u7528\u6765\u4E3A\u8BA1\u7B97\u5C5E\u6027\u5206\u7EC4\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u901A\u8FC7",paraId:7,tocIndex:2},{value:"runGroup",paraId:7,tocIndex:2},{value:"\u65B9\u6CD5\uFF0C\u7528\u6765\u624B\u52A8\u6267\u884C\u8BE5\u5206\u7EC4\u8BA1\u7B97\u51FD\u6570\u3002",paraId:7,tocIndex:2},{value:"\u4EE5\u4E0A\u6211\u4EEC\u5C06\u6240\u6709\u8BA1\u7B97\u51FD\u6570\u7684\u4F9D\u8D56\u5747\u8BBE\u4E3A",paraId:8},{value:"[]",paraId:8},{value:"\uFF0C\u4E5F\u5C31\u662F\u65E0\u4F9D\u8D56\uFF0C\u56E0\u6B64\u5F53",paraId:8},{value:"book.price",paraId:8},{value:",",paraId:8},{value:"book.count",paraId:8},{value:"\u7684\u503C\u53D8\u5316\u65F6\uFF0C",paraId:8},{value:"Total Group",paraId:8},{value:"\u548C",paraId:8},{value:"Average Group",paraId:8},{value:"\u7684\u8BA1\u7B97\u5C5E\u6027\u5E76\u4E0D\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\uFF0C\u6B64\u65F6\u5C31\u9700\u8981\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u3002",paraId:8},{value:"Q",paraId:9},{value:": \u4E3A\u4EC0\u4E48\u6B64\u5904\u8981\u6307\u5B9A",paraId:9},{value:"async=true",paraId:9},{value:"?",paraId:9},{value:"A",paraId:9},{value:": \u56E0\u6B64\u672C\u7AD9\u4F7F\u7528",paraId:9},{value:"webpack/babel",paraId:9},{value:"\u8FDB\u884C\u8F6C\u7801\uFF0C\u5F02\u6B65\u51FD\u6570\u4F1A\u88AB\u8F6C\u7801\u4E3A\u540C\u6B65\u51FD\u6570\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u81EA\u52A8\u8BC6\u522B",paraId:9},{value:"async",paraId:9},{value:"\u51FD\u6570\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u6307\u5B9A",paraId:9},{value:"async=true",paraId:9},{value:"computed",paraId:10,tocIndex:3},{value:"\u63D0\u4F9B\u4E86\u4E00\u4E2A",paraId:10,tocIndex:3},{value:"enable",paraId:10,tocIndex:3},{value:"\u5C5E\u6027\u7528\u6765\u63A7\u5236\u662F\u5426\u8FDB\u884C\u8BA1\u7B97\u3002\u5F53",paraId:10,tocIndex:3},{value:"enable=false",paraId:10,tocIndex:3},{value:"\u65F6\uFF0C\u5F53\u4F9D\u8D56\u53D8\u5316\u65F6\u4E0D\u4F1A\u8FDB\u884C\u8BA1\u7B97\uFF0C\u76F4\u81F3",paraId:10,tocIndex:3},{value:"enable=true",paraId:10,tocIndex:3},{value:"\u3002",paraId:10,tocIndex:3},{value:"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u6CD5\u6765\u542F\u7528/\u7981\u7528\u8BA1\u7B97\u3002",paraId:11,tocIndex:3},{value:"\u53EF\u4EE5\u5728\u4F7F\u7528",paraId:12,tocIndex:3},{value:"computed",paraId:12,tocIndex:3},{value:"\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u65F6\uFF0C\u4F20\u5165",paraId:12,tocIndex:3},{value:"enable",paraId:12,tocIndex:3},{value:"\u6765\u6307\u5B9A\u8BA1\u7B97\u5C5E\u6027\u7684\u9ED8\u8BA4\u72B6\u6001\u3002",paraId:12,tocIndex:3},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:12,tocIndex:3},{value:"ComputedObjects.get(<\u8DEF\u5F84\u540D\u79F0>)",paraId:12,tocIndex:3},{value:"\u6765\u542F\u7528/\u7981\u7528\u8BA1\u7B97\u3002",paraId:12,tocIndex:3},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:12,tocIndex:3},{value:"ComputedObjects.enableGroup(<true/false>)",paraId:12,tocIndex:3},{value:"\u6765\u542F\u7528/\u7981\u7528\u67D0\u4E2A\u7EC4\u7684\u8BA1\u7B97\u3002",paraId:12,tocIndex:3},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528",paraId:13,tocIndex:4},{value:"computed(getter,deps,options)",paraId:13,tocIndex:4},{value:"\u65B9\u6CD5\u6765\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027,\u901A\u8FC7",paraId:13,tocIndex:4},{value:'store.computedObject.get("<\u8DEF\u5F84>")',paraId:13,tocIndex:4},{value:"\u83B7\u53D6\u5230",paraId:13,tocIndex:4},{value:"ComputedObject",paraId:13,tocIndex:4},{value:"\u5B9E\u4F8B\uFF0C\u7136\u540E\u901A\u8FC7",paraId:13,tocIndex:4},{value:"ComputedObject",paraId:13,tocIndex:4},{value:"\u5B9E\u4F8B\u6765\u8BFB\u53D6\u548C\u4FEE\u6539\u8BA1\u7B97\u5C5E\u6027\u7684\u53C2\u6570\u3002",paraId:13,tocIndex:4}]},72773:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(46489);const o=[{value:"\u65E0\u8BBA\u662F\u540C\u6B65\u6216\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u5747\u63A8\u8350\u4F7F\u7528",paraId:0},{value:"computed",paraId:0},{value:"\u51FD\u6570\u6765\u58F0\u660E\u3002",paraId:0},{value:"computed",paraId:1,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u4E8E\u58F0\u660E\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u51FD\u6570\u7B7E\u540D\u58F0\u660E\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:`export function computed<R = any,ExtraAttrs extends Dict = {}>( getter: AsyncComputedGetter<R>,depends?:ComputedDepends,options?: ComputedOptions<R,ExtraAttrs>): ComputedDescriptor<R & ExtraAttrs>;
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

`,paraId:7,tocIndex:2}]},22426:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(63035);const o=[{value:"\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\u76F4\u63A5\u58F0\u660E\u5728\u72B6\u6001\u4E2D\uFF0C\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u666E\u901A\u7684\u51FD\u6570\uFF0C,\u5F53",paraId:0,tocIndex:0},{value:"State",paraId:0,tocIndex:0},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1\u8BA1\u7B97\u5C5E\u6027\u7684\u91CD\u65B0\u8BA1\u7B97\uFF0C\u5C06\u8BA1\u7B97\u7ED3\u679C\u8D4B\u503C\u7ED9",paraId:0,tocIndex:0},{value:"State",paraId:0,tocIndex:0},{value:"\u4E2D\u7684\u5BF9\u5E94\u5C5E\u6027\u3002",paraId:0,tocIndex:0},{value:"\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\u7684\u4F9D\u8D56\u6536\u96C6\u662F\u81EA\u52A8\u7684\uFF0C\u4E0D\u9700\u8981\u663E\u5F0F\u6307\u5B9A\u4F9D\u8D56\u53C2\u6570\uFF0C\u5F53",paraId:1,tocIndex:1},{value:"State",paraId:1,tocIndex:1},{value:"\u4E2D\u7684\u6240\u4F9D\u8D56\u7684\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1\u8BA1\u7B97\u5C5E\u6027\u7684\u91CD\u65B0\u8BA1\u7B97\u3002",paraId:1,tocIndex:1},{value:`const state = {
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

`,paraId:17,tocIndex:4}]},24143:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(5757);const o=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u5E95\u5C42\u7684\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7531",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u9A71\u52A8\uFF0C",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u5177\u5907\u6D3E\u751F\u8BA1\u7B97\u3001\u4F9D\u8D56\u6536\u96C6\u3001\u4FE1\u53F7\u7684\u54CD\u5E94\u5F0F\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u5B83\u7684\u8BBE\u8BA1\u7406\u5FF5\u4E0E",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u8BBE\u8BA1\u7406\u5FF5\u9AD8\u5EA6\u5951\u5408\uFF0C\u4E3A",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u6570\u636E\u9A71\u52A8\u80FD\u529B\u3002",paraId:1,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u662F\u5728",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u7684\u57FA\u7840\u4E0A\uFF0C\u5C01\u88C5\u4E86\u7528\u6765\u63D0\u4F9B\u66F4\u52A0\u6613\u7528\u53CB\u597D\u7684\u72B6\u6001\u5E93\u7BA1\u7406\u3002",paraId:1,tocIndex:0},{value:"\u4F5C\u4E3A",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u5E95\u5C42\u4F9D\u8D56\uFF0C\u4E86\u89E3\u548C\u638C\u63E1",paraId:1,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u7684\u539F\u7406\u548C\u4F7F\u7528\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8BA9\u4F60\u66F4\u52A0\u6DF1\u5165\u7406\u89E3",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u8BBE\u8BA1\u7406\u5FF5\u548C\u4F7F\u7528\u65B9\u6CD5\u3002",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:2,tocIndex:1},{value:"\u4F9D\u8D56\u4E8E",paraId:2,tocIndex:1},{value:"@speedform/reactive",paraId:2,tocIndex:1},{value:"\uFF0C\u5B89\u88C5",paraId:2,tocIndex:1},{value:"SpeedForm",paraId:2,tocIndex:1},{value:"\u540E\u5C31\u5DF2\u7ECF\u5B89\u88C5\u4E86",paraId:2,tocIndex:1},{value:"@speedform/reactive",paraId:2,tocIndex:1},{value:"\uFF0C\u4E5F\u53EF\u4EE5\u72EC\u7ACB\u5B89\u88C5\u4F7F\u7528",paraId:2,tocIndex:1},{value:"@speedform/reactive",paraId:2,tocIndex:1},{value:"\u3002",paraId:2,tocIndex:1},{value:`
pnpm add @speedform/reactive
npm install @speedform/reactive
yarn add @speedform/reactive

`,paraId:3,tocIndex:1}]},98036:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(85164);const o=[{value:"\u5F53\u72B6\u6001\u53D8\u5316\u65F6\u5C06\u89E6\u53D1\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\uFF0C",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u63D0\u4F9B\u66F4\u52A0\u7EC6\u7C92\u5EA6\u7684\u6E32\u67D3\u3002",paraId:0,tocIndex:0},{value:"\u4F5C\u4E3A\u5BF9\u6BD4\uFF0C\u6211\u4EEC\u5148\u770B\u4E00\u4E2A\u4F20\u7EDF\u7684",paraId:1,tocIndex:1},{value:"Context",paraId:1,tocIndex:1},{value:"\u7684\u6E32\u67D3\u4F8B\u5B50\u3002",paraId:1,tocIndex:1},{value:"\u4ECE\u4E0A\u9762\u7684\u4F8B\u5B50\u53EF\u770B\u5230\uFF0C\u5F53\u66F4\u65B0",paraId:2},{value:"Context.age",paraId:2},{value:"\u65F6\uFF0C\u6240\u6709\u7684\u5B50\u7EC4\u4EF6\u4E0D\u7BA1\u662F\u5426\u6709\u4F7F\u7528",paraId:2},{value:"Age",paraId:2},{value:"\u5747\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C\u8FD9\u662F\u4E0D\u5FC5\u8981\u7684\uFF0C\u56E0\u4E3A\u5B50\u7EC4\u4EF6\u5E76\u6CA1\u6709\u4F7F\u7528\u5230",paraId:2},{value:"Context",paraId:2},{value:"\u7684\u6570\u636E\uFF0C\u4E3A\u6B64\u6211\u4EEC\u4E00\u822C\u9700\u8981\u4F7F\u7528",paraId:2},{value:"React.memo",paraId:2},{value:"\u6216\u4E00\u4E9B\u7B2C\u4E09\u65B9\u5E93\u6765\u8FDB\u884C\u4F18\u5316\u6E32\u67D3\u3002",paraId:2},{value:"\u6700\u5927\u7684\u95EE\u9898\u5728\u4E8E\uFF0C\u5F53\u66F4\u65B0\u6839Context\u65F6\uFF0C\u6240\u6709\u7684\u5B50\u7EC4\u4EF6\u90FD\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u8FD9\u662F\u4E0D\u5FC5\u8981\u7684\uFF0C\u56E0\u4E3A\u5B50\u7EC4\u4EF6\u5E76\u6CA1\u6709\u4F7F\u7528\u5230\u6839Context\u7684\u6570\u636E\u3002\u6211\u4EEC\u5E0C\u671B\u80FD\u5B9E\u73B0\u66F4\u7EC6\u7C92\u5EA6\u7684\u6E32\u67D3\uFF0C\u53EA\u6709\u5F53\u5B50\u7EC4\u4EF6\u4F7F\u7528\u5230\u7684\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:3},{value:"\u4F7F\u7528",paraId:4,tocIndex:2},{value:"@speedform/reactive",paraId:4,tocIndex:2},{value:"\u7684",paraId:4,tocIndex:2},{value:"useState",paraId:4,tocIndex:2},{value:"\u53EF\u4EE5\u4F7F",paraId:4,tocIndex:2},{value:"\u6E32\u67D3\u9897\u7C92\u5EA6\u9650\u5B9A\u5728\u7EC4\u4EF6\u8303\u56F4",paraId:4,tocIndex:2},{value:"\uFF0C\u53EA\u6709\u4F7F\u7528\u5230\u6570\u636E\u7684\u7EC4\u4EF6\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:4,tocIndex:2},{value:"\u5728\u4E0A\u4F8B\u4E2D\uFF0C\u5F53\u66F4\u65B0",paraId:5},{value:"Age",paraId:5},{value:"\u65F6\uFF0C\u4EC5\u6839\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C",paraId:5},{value:"FirstName",paraId:5},{value:"\u548C",paraId:5},{value:"LastName",paraId:5},{value:"\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5E76\u6CA1\u6709\u4F7F\u7528\u5230",paraId:5},{value:"Age",paraId:5},{value:"\u3002",paraId:5},{value:"\u5F53\u5728\u6839\u7EC4\u4EF6\u4E2D\u66F4\u65B0",paraId:5},{value:"FirstName",paraId:5},{value:"\u65F6\uFF0C\u4EC5",paraId:5},{value:"FirstName",paraId:5},{value:"\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002\u800C",paraId:5},{value:"LastName",paraId:5},{value:"\u7EC4\u4EF6\u4E2D\u6CA1\u6709",paraId:5},{value:"FirstName",paraId:5},{value:"\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:5},{value:"@speedform/reactive",paraId:6,tocIndex:3},{value:"\u63D0\u4F9B\u7684",paraId:6,tocIndex:3},{value:"state",paraId:6,tocIndex:3},{value:"\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u914D\u7F6E",paraId:6,tocIndex:3},{value:"signal",paraId:6,tocIndex:3},{value:"\u673A\u5236\u53EF\u4EE5\u76F4\u63A5\u8FDB\u884C\u8BFB\u53D6",paraId:6,tocIndex:3},{value:"\u6E32\u67D3\u9897\u7C92\u5EA6\u9650\u5B9A\u5728\u7EC4\u4EF6\u8303\u56F4",paraId:6,tocIndex:3},{value:"\uFF0C\u53EA\u6709\u4F7F\u7528\u5230\u6570\u636E\u7684\u7EC4\u4EF6\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:6,tocIndex:3},{value:"\u57FA\u4E8E",paraId:7,tocIndex:3},{value:"Signal",paraId:7,tocIndex:3},{value:",",paraId:7,tocIndex:3},{value:"\u6E32\u67D3\u9897\u7C92\u5EA6\u53EF\u4EE5\u662F\u7EC4\u4EF6\u4E2D\u7684\u4E00\u4E2A\u7247\u6BB5",paraId:7,tocIndex:3},{value:"\uFF0C\u66F4\u52A0\u7CBE\u7EC6\uFF0C\u66F4\u52A0\u9AD8\u6548\u3002",paraId:7,tocIndex:3},{value:"\u5728\u4E0A\u4F8B\u4E2D\uFF0C\u5F53\u66F4\u65B0",paraId:8},{value:"Age",paraId:8},{value:"\u65F6\uFF0C\u4EC5\u6839\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C",paraId:8},{value:"FirstName",paraId:8},{value:"\u548C",paraId:8},{value:"LastName",paraId:8},{value:"\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5E76\u6CA1\u6709\u4F7F\u7528\u5230",paraId:8},{value:"Age",paraId:8},{value:"\u3002",paraId:8},{value:"\u5F53\u66F4\u65B0",paraId:8},{value:"FirstName",paraId:8},{value:"\u65F6\uFF0C\u4EC5",paraId:8},{value:"FirstName",paraId:8},{value:"\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002\u800C",paraId:8},{value:"LastName",paraId:8},{value:"\u7EC4\u4EF6\u4E2D\u867D\u7136\u7528\u5230\u4E86",paraId:8},{value:"FirstName",paraId:8},{value:"\uFF0C\u4F46\u662F\u6CA1\u6709\u4F7F\u7528",paraId:8},{value:"$(FirstName)",paraId:8},{value:"\uFF0C\u4E5F\u5C31\u662F\u4F7F\u7528\u4FE1\u53F7\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:8},{value:"store.state",paraId:8},{value:"\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:8},{value:"reactive",paraId:8},{value:",\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A",paraId:8},{value:"Proxy",paraId:8},{value:"\u5BF9\u8C61\u6765\u6536\u96C6\u4F9D\u8D56\u3002\u7136\u540E\u4F7F\u7528",paraId:8},{value:"$(<reactive>)",paraId:8},{value:"\u6570\u636E\u53D8\u66F4\u4EC5\u89E6\u53D1",paraId:8},{value:"$",paraId:8},{value:"\u7B26\u53F7\u533A\u57DF\u5185\u91CD\u6E32\u67D3\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6700\u7EC6\u7C92\u5EA6\u7684\u6E32\u67D3\u3002",paraId:8},{value:"\u5173\u4E8E",paraId:8},{value:"Signal",paraId:8},{value:"\u673A\u5236\u7684\u66F4\u591A\u5185\u5BB9\u8BF7\u53C2\u8003",paraId:8},{value:"helux/Signal",paraId:8},{value:"\u3002",paraId:8}]},72048:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(90054);const o=[{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u4E86\u4E09\u79CD\u4E0D\u540C\u7684\u65B9\u5F0F\u6765\u5B58\u53D6\u72B6\u6001\u3002",paraId:0,tocIndex:0},{value:"useState",paraId:1,tocIndex:0},{value:": \u7528\u6765\u5728\u7EC4\u4EF6\u4E2D\u8BBF\u95EE\u548C\u66F4\u65B0",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"\u7684\u72B6\u6001\u6570\u636E\uFF0C\u66F4\u65B0\u65F6\u4F1A\u5BFC\u81F4\u91CD\u65B0\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"store.state",paraId:1,tocIndex:0},{value:": \u76F4\u63A5\u8BFB\u5199",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"\u7684\u72B6\u6001\u6570\u636E\uFF0C",paraId:1,tocIndex:0},{value:"store.state",paraId:1,tocIndex:0},{value:"\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:1,tocIndex:0},{value:"reactive",paraId:1,tocIndex:0},{value:"\uFF0C\u5176\u5B9E\u8D28\u662F\u901A\u8FC7",paraId:1,tocIndex:0},{value:"Proxy",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u7684\uFF0C\u5F53\u8BFB\u5199",paraId:1,tocIndex:0},{value:"store.state",paraId:1,tocIndex:0},{value:"\u65F6\uFF0C\u4F1A\u89E6\u53D1\u5185\u90E8\u7684\u4F9D\u8D56\u6536\u96C6\uFF0C\u76F8\u5173\u8BA1\u7B97\u5C5E\u6027\u7684\u8FD0\u884C\uFF0C\u914D\u5408",paraId:1,tocIndex:0},{value:"signal",paraId:1,tocIndex:0},{value:"\u673A\u5236\u53EF\u4EE5\u81EA\u52A8\u89E6\u53D1\u7EC4\u4EF6\u7684\u7EC6\u7C92\u5EA6\u91CD\u65B0\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"\u5F53\u521B\u5EFA\u597D",paraId:2,tocIndex:1},{value:"Store",paraId:2,tocIndex:1},{value:"\u540E,\u4F60\u53EF\u4EE5\u5728\u5B58\u53D6",paraId:2,tocIndex:1},{value:"State",paraId:2,tocIndex:1},{value:"\u7528\u6765\u9A71\u52A8\u7EC4\u4EF6\u7EC6\u7C92\u5EA6\u6E32\u67D3\u3002",paraId:2,tocIndex:1},{value:"Store",paraId:3,tocIndex:1},{value:"\u5BF9\u8C61\u63D0\u4F9B\u4E86",paraId:3,tocIndex:1},{value:"useState",paraId:3,tocIndex:1},{value:"\u65B9\u6CD5\uFF0C\u7528\u6765\u5728\u7EC4\u4EF6\u4E2D\u8BBF\u95EE\u548C\u66F4\u65B0",paraId:3,tocIndex:1},{value:"Store",paraId:3,tocIndex:1},{value:"\u7684\u72B6\u6001\u6570\u636E\u3002\u5176\u4F7F\u7528\u65B9\u5F0F\u4E0E",paraId:3,tocIndex:1},{value:"React",paraId:3,tocIndex:1},{value:"\u7684",paraId:3,tocIndex:1},{value:"useState",paraId:3,tocIndex:1},{value:"\u65B9\u6CD5\u7C7B\u4F3C\u3002",paraId:3,tocIndex:1},{value:"useState",paraId:4},{value:"\u8FD8\u53EF\u4EE5\u63A5\u53D7",paraId:4},{value:"getter",paraId:4},{value:" \u548C",paraId:4},{value:"setter",paraId:4},{value:"\u4E24\u4E2A\u51FD\u6570\u53C2\u6570\uFF0C\u7528\u6765\u83B7\u53D6\u548C\u8BBE\u7F6E",paraId:4},{value:"State",paraId:4},{value:"\u4E2D\u7684\u67D0\u4E2A\u5C5E\u6027\u3002",paraId:4},{value:"\u9664\u4E86\u4F7F\u7528",paraId:5,tocIndex:2},{value:"useState",paraId:5,tocIndex:2},{value:"\u65B9\u6CD5\u8BFB\u5199\u72B6\u6001\u5916\uFF0C",paraId:5,tocIndex:2},{value:"sotre.state",paraId:5,tocIndex:2},{value:"\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A",paraId:5,tocIndex:2},{value:"reactive",paraId:5,tocIndex:2},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u8BFB\u5199\u5B83\u7684\u5C5E\u6027\u3002",paraId:5,tocIndex:2},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:6},{value:"\u6307\u7684\u662F\u53EF\u4EE5\u5BF9\u8BE5\u5BF9\u8C61\u8FDB\u884C\u8BFB\u53D6\uFF0C\u5176\u4FEE\u6539\u884C\u4E3A\u4F1A\u89E6\u53D1\u5185\u90E8\u7684\u4F9D\u8D56\u6536\u96C6\uFF0C\u76F8\u5173\u8BA1\u7B97\u5C5E\u6027\u7684\u8FD0\u884C\uFF0C\u5F53\u7136\u4E5F\u4F1A\u81EA\u52A8\u89E6\u53D1\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u3002",paraId:6}]},97336:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(54862);const o=[{value:"\u521B\u5EFA",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u65F6\u5BF9\u5E94\u521B\u5EFA\u4E00\u4E2A",paraId:0,tocIndex:0},{value:"Store",paraId:0,tocIndex:0},{value:"\u5BF9\u8C61,\u5C31\u5982\u540C",paraId:0,tocIndex:0},{value:"Redux",paraId:0,tocIndex:0},{value:"\u4E2D\u7684",paraId:0,tocIndex:0},{value:"Store",paraId:0,tocIndex:0},{value:"\u4E00\u6837,",paraId:0,tocIndex:0},{value:"Store",paraId:0,tocIndex:0},{value:"\u672C\u8D28\u4E0A\u5C31\u662F\u53D7\u63A7\u7684\u72B6\u6001\u6570\u636E\u5BF9\u8C61\uFF0C\u4F7F\u7528",paraId:0,tocIndex:0},{value:"helux",paraId:0,tocIndex:0},{value:"\u7684",paraId:0,tocIndex:0},{value:"atomx/sharex",paraId:0,tocIndex:0},{value:"\u521B\u5EFA\u3002",paraId:0,tocIndex:0},{value:"\u5178\u578B\u7684",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"\u7ED3\u6784\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"Store",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\u4E2D\u4F1A\u5B9A\u4E49",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u7ED3\u6784\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u4E0D\u5141\u8BB8\u76F4\u63A5\u4FEE\u6539",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\uFF0C\u800C\u662F\u901A\u8FC7",paraId:2,tocIndex:0},{value:"Action",paraId:2,tocIndex:0},{value:"\u6765\u4FEE\u6539",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u3002",paraId:2,tocIndex:0},{value:"Action",paraId:2,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u666E\u901A\u7684\u51FD\u6570\uFF0C\u4E00\u822C\u4F1A\u5B9E\u73B0\u67D0\u79CD\u4E1A\u52A1\u903B\u8F91\uFF0C\u53EF\u4EE5\u662F\u540C\u6B65\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5F02\u6B65\u51FD\u6570\u3002\u6267\u884C\u6210\u529F\u4F1A\u4FEE\u6539",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u3002",paraId:2,tocIndex:0},{value:"\u8BA1\u7B97\u5C5E\u6027\u4F1A\u4FA6\u542C",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u7684\u6570\u636E\u53D8\u5316\uFF0C\u5F53",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u8BA1\u7B97\u5C5E\u6027\u7684\u503C\u3002",paraId:2,tocIndex:0},{value:"@speedform/reactive",paraId:3,tocIndex:1},{value:"\u63D0\u4F9B\u4E86",paraId:3,tocIndex:1},{value:"createStore",paraId:3,tocIndex:1},{value:"\u65B9\u6CD5\u7528\u6765\u521B\u5EFA",paraId:3,tocIndex:1},{value:"Store",paraId:3,tocIndex:1},{value:"\u5BF9\u8C61\u3002",paraId:3,tocIndex:1},{value:`const user = {
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
`,paraId:6,tocIndex:2}]},20445:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(28794);const o=[{value:"watch",paraId:0},{value:"\u51FD\u6570\u4E0E",paraId:0},{value:"computed",paraId:0},{value:"\u51FD\u6570\u529F\u80FD\u7684\u533A\u522B\u5982\u4E0B\uFF1A",paraId:0},{value:"computed",paraId:1},{value:"\u51FD\u6570\u662F\u7528\u6765\u58F0\u660E\u8BA1\u7B97\u5C5E\u6027\u7684\uFF0C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u662F\u7528\u6765\u4FA6\u542C",paraId:1},{value:"State",paraId:1},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u7684\u3002",paraId:1},{value:"computed",paraId:1},{value:"\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u5199\u5165",paraId:1},{value:"State",paraId:1},{value:"\u4E2D\u7684\u5BF9\u5E94\u5C5E\u6027\uFF0C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u5199\u5165",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u6240\u5728\u7684\u4F4D\u7F6E\u3002",paraId:1},{value:"computed",paraId:1},{value:"\u51FD\u6570\u7684\u521B\u5EFA\u7684\u8BA1\u7B97\u5C5E\u6027\u662F\u57FA\u4E8E\u4F9D\u8D56\u6536\u96C6\u7684\uFF0C\u800C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u662F\u57FA\u4E8E\u4FA6\u542C\u7684,\u6BCF\u5F53",paraId:1},{value:"State",paraId:1},{value:"\u72B6\u6001\u53D8\u5316\u65F6\u5747\u4F1A\u8C03\u7528",paraId:1},{value:"watchOptions.on",paraId:1},{value:"\u8FC7\u6EE4\u51FD\u6570\u6765\u5339\u914D\u4FA6\u542C\u51FD\u6570\uFF0C\u56E0\u6B64\u7406\u8BBA\u4E0A\uFF0C",paraId:1},{value:"computed",paraId:1},{value:"\u51FD\u6570\u7684\u6027\u80FD\u66F4\u597D\uFF0C\u800C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u6027\u80FD\u4F1A\u5DEE\u4E9B\u3002",paraId:1},{value:"watch",paraId:1},{value:"\u53EA\u80FD\u662F\u540C\u6B65\u4FA6\u542C\u51FD\u6570\uFF0C\u800C",paraId:1},{value:"computed",paraId:1},{value:"\u53EF\u4EE5\u662F\u5F02\u6B65\u51FD\u6570\u3002",paraId:1}]},40074:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(44834);const o=[{value:"\u5982\u540C",paraId:0,tocIndex:0},{value:"ComputedObject",paraId:0,tocIndex:0},{value:"\u4E00\u6837\uFF0C\u6BCF\u4E00\u4E2A\u4F7F\u7528",paraId:0,tocIndex:0},{value:"watch",paraId:0,tocIndex:0},{value:"\u5305\u88C5\u7684\u8BA1\u7B97\u51FD\u6570\u5747\u521B\u5EFA\u4E00\u4E2A",paraId:0,tocIndex:0},{value:"WatchObject",paraId:0,tocIndex:0},{value:"\u5BF9\u8C61\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7",paraId:1,tocIndex:0},{value:"Store.watchObjects",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u8BBF\u95EE\u6240\u6709\u58F0\u660E\u7684",paraId:1,tocIndex:0},{value:"WatchObject",paraId:1,tocIndex:0},{value:"\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u8FDB\u884C\u76F8\u5173\u7684\u52A8\u6001\u79FB\u9664/\u7981\u7528\u7B49\u64CD\u4F5C\u3002",paraId:1,tocIndex:0},{value:`export interface WatchObject extends WatchOptions>{ 
    path:string[]
    run:(fromPath:string[])=>void
    listener:(...args:any[])=>any
}
`,paraId:2,tocIndex:0},{value:"\u6240\u6709\u521B\u5EFA\u7684",paraId:3,tocIndex:0},{value:"WatchObject",paraId:3,tocIndex:0},{value:"\u5BF9\u8C61\u4FDD\u5B58\u5728",paraId:3,tocIndex:0},{value:"Store.watchObjects",paraId:3,tocIndex:0},{value:` class WatchObjects extends Map{
    enable:boolean
    reset(){}
    enableGroup(groupName:string,value:boolean=true){}
 }

`,paraId:4,tocIndex:0}]},8996:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(3955);const o=[{value:"\u5927\u90E8\u4EFD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5E94\u8BE5\u4F7F\u7528",paraId:0},{value:"computed",paraId:0},{value:"\u51FD\u6570\u6765\u58F0\u660E\u8BA1\u7B97\u5C5E\u6027\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528",paraId:0},{value:"watch",paraId:0},{value:"\u51FD\u6570\u6765\u4FA6\u542C",paraId:0},{value:"State",paraId:0},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002\u4F46\u662F\u5728\u4E00\u4E9B\u7279\u6B8A\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u4F7F\u7528",paraId:0},{value:"watch",paraId:0},{value:"\u51FD\u6570\uFF0C\u4E3B\u8981\u5728\u4E8E\uFF1A",paraId:0},{value:"\u52A8\u6001\u4F9D\u8D56",paraId:1},{value:"computed",paraId:2},{value:"\u8BA1\u7B97\u51FD\u6570\u7684\u4F9D\u8D56\u4E00\u822C\u662F\u786E\u5B9A\u7684\uFF0C\u800C",paraId:2},{value:"watch",paraId:2},{value:"\u51FD\u6570\u7684\u4F9D\u8D56\u662F\u52A8\u6001\u7684\u3002\u8FD9\u6BD4\u8F83\u9002\u5408\u4E00\u4E9B\u9700\u8981\u52A8\u6001\u4FA6\u542C\u7684\u573A\u666F\uFF0C\u6BD4\u5982\u4E0A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u52A8\u6001\u4FA6\u542C",paraId:2},{value:"orders[].count",paraId:2},{value:"\u7684\u53D8\u5316\u6765\u8BA1\u7B97",paraId:2},{value:"total",paraId:2},{value:"\u3002\u800C",paraId:2},{value:"computed",paraId:2},{value:"\u51FD\u6570\u7684\u4F9D\u8D56\u662F\u9759\u6001\u7684\uFF0C\u4E00\u65E6\u58F0\u660E\u5C31\u4E0D\u4F1A\u53D8\u5316\u3002",paraId:2},{value:"\u591A\u5B57\u6BB5\u590D\u5408\u8BA1\u7B97",paraId:3},{value:"\u5F53\u67D0\u4E2A\u5B57\u6BB5\u9700\u8981\u8FDB\u884C\u590D\u5408\u8BA1\u7B97\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528",paraId:4},{value:"watch",paraId:4},{value:"\u51FD\u6570\u6765\u5B9E\u73B0\u3002\u6BD4\u5982\u5728",paraId:4},{value:"SpeedForm",paraId:4},{value:"\u5B9E\u73B0\u8868\u5355\u7684",paraId:4},{value:"validate",paraId:4},{value:"\u548C",paraId:4},{value:"dirty",paraId:4},{value:"\u5C5E\u6027\u7684\u8BA1\u7B97\u65F6\uFF0C\u5C31\u662F\u4F7F\u7528",paraId:4},{value:"watch",paraId:4},{value:"\u5B9E\u73B0\u3002",paraId:4},{value:"\u6BD4\u5982\u8FD9\u662F\u8868\u5355",paraId:5},{value:"validate",paraId:5},{value:"\u68C0\u6D4B\u7684\u5B9E\u73B0\u4EE3\u7801\uFF1A",paraId:5},{value:`export function validate<T=any>(options?:ValidateOptions){
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
`,paraId:8},{value:"value",paraId:9},{value:"\uFF1A\u53D8\u5316\u7684\u503C",paraId:9},{value:"fromPath",paraId:10},{value:"\uFF1A\u6307\u7684\u662F\u54EA\u91CC\u53D1\u751F\u53D8\u5316\u7684\u8DEF\u5F84",paraId:10},{value:"getCache",paraId:11},{value:"\uFF1A\u7528\u6765\u83B7\u53D6\u5F53\u524D",paraId:11},{value:"watch",paraId:11},{value:"\u7684",paraId:11},{value:"cache",paraId:11},{value:"\u5BF9\u8C61\uFF0C\u7528\u6765\u4FDD\u5B58\u6821\u9A8C\u503C\u3002",paraId:11},{value:"\u5728",paraId:12},{value:"cache",paraId:12},{value:"\u91CC\u9762\u6211\u4EEC\u4FDD\u5B58\u4ECE\u6821\u9A8C\u8303\u56F4\u5185\u6240\u6709",paraId:12},{value:"value=false",paraId:12},{value:"\uFF0C\u5982\u679C",paraId:12},{value:"Object.keys(selfCache).length==0",paraId:12},{value:"\u5C31\u4EE3\u8868\u5728\u8BE5\u6821\u9A8C\u8303\u56F4\u5185\u6240\u6709\u5B57\u6BB5\u5747\u6709\u6548\u3002",paraId:12}]},7546:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(7070);const o=[{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B",paraId:0,tocIndex:0},{value:"watch",paraId:0,tocIndex:0},{value:"\u529F\u80FD\uFF0C\u7528\u6765\u76D1\u89C6",paraId:0,tocIndex:0},{value:"State",paraId:0,tocIndex:0},{value:"\u6570\u636E\u7684\u53D8\u5316,\u5F53\u6240\u76D1\u89C6\u7684\u6570\u636E\u53D1\u751F\u65F6\uFF0C\u53EF\u4EE5\u6267\u884C\u4FA6\u542C\u5668\u51FD\u6570\u3002",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u4E09\u79CD\u4F7F\u7528",paraId:1,tocIndex:0},{value:"watch",paraId:1,tocIndex:0},{value:"\u7684\u65B9\u5F0F\uFF1A",paraId:1,tocIndex:0},{value:"\u76F4\u63A5\u5728",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u4E2D\u58F0\u660E",paraId:2,tocIndex:0},{value:"watch",paraId:2,tocIndex:0},{value:"\u51FD\u6570,\u7136\u540E\u5C06\u4FA6\u542C\u5668\u8FD4\u56DE\u503C\u5199\u5165\u58F0\u660E",paraId:2,tocIndex:0},{value:"watch",paraId:2,tocIndex:0},{value:"\u51FD\u6570\u6240\u5728\u7684\u4F4D\u7F6E\u3002",paraId:2,tocIndex:0},{value:"\u8C03\u7528",paraId:2,tocIndex:0},{value:"store.watch",paraId:2,tocIndex:0},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002",paraId:2,tocIndex:0},{value:"\u5728\u7EC4\u4EF6\u4E2D\u8C03\u7528",paraId:2,tocIndex:0},{value:"store.useWatch",paraId:2,tocIndex:0},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:2,tocIndex:0},{value:"store",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\u7684\u53D8\u5316,\u5F53\u7EC4\u4EF6\u9500\u6BC1\u81EA\u52A8\u53D6\u6D88\u8BA2\u9605\u3002",paraId:2,tocIndex:0},{value:"@speedform/reactive",paraId:3,tocIndex:1},{value:"\u63D0\u4F9B\u4E86",paraId:3,tocIndex:1},{value:"watch",paraId:3,tocIndex:1},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u5728",paraId:3,tocIndex:1},{value:"state",paraId:3,tocIndex:1},{value:"\u58F0\u660E\u6765\u4FA6\u542C",paraId:3,tocIndex:1},{value:"State",paraId:3,tocIndex:1},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002",paraId:3,tocIndex:1},{value:"watch",paraId:4,tocIndex:1},{value:"\u51FD\u6570\u7684\u57FA\u672C\u7279\u6027\u5982\u4E0B\uFF1A",paraId:4,tocIndex:1},{value:"watch",paraId:5,tocIndex:1},{value:"\u53EF\u4EE5\u7528\u6765\u4FA6\u542C\u6574\u4E2A",paraId:5,tocIndex:1},{value:"store",paraId:5,tocIndex:1},{value:"\u5BF9\u8C61\u7684\u53D8\u5316\uFF0C\u5F53\u4FA6\u542C\u5230\u53D8\u5316\u65F6\u4F1A\u6267\u884C\u4FA6\u542C\u5668\u51FD\u6570\u3002",paraId:5,tocIndex:1},{value:"\u4FA6\u542C\u5668\u51FD\u6570\u53EA\u80FD\u662F\u4E00\u4E2A\u540C\u6B65\u51FD\u6570\u3002",paraId:5,tocIndex:1},{value:"\u4FA6\u542C\u5668\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u5199\u5165",paraId:5,tocIndex:1},{value:"watch",paraId:5,tocIndex:1},{value:"\u51FD\u6570\u6240\u5728\u7684\u4F4D\u7F6E\u3002",paraId:5,tocIndex:1},{value:"watch",paraId:6,tocIndex:2},{value:"\u51FD\u6570\u7B7E\u540D\u5982\u4E0B\uFF1A",paraId:6,tocIndex:2},{value:`function watch<Value = any,Result=Value>(
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
`,paraId:20,tocIndex:4},{value:"\u5728\u8FDB\u884C\u8868\u5355\u9A8C\u8BC1\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528",paraId:21,tocIndex:4},{value:"formState.validate",paraId:21,tocIndex:4},{value:"\u6765\u83B7\u53D6\u6574\u4E2A\u8868\u5355\u7684\u9A8C\u8BC1\u7ED3\u679C\u3002",paraId:21,tocIndex:4},{value:"\u9664\u4E86\u53EF\u4EE5\u5728",paraId:22,tocIndex:5},{value:"State",paraId:22,tocIndex:5},{value:"\u4E2D\u58F0\u660E",paraId:22,tocIndex:5},{value:"watch",paraId:22,tocIndex:5},{value:"\u51FD\u6570\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u5728",paraId:22,tocIndex:5},{value:"Store",paraId:22,tocIndex:5},{value:"\u5BF9\u8C61\u4E2D\u58F0\u660E",paraId:22,tocIndex:5},{value:"watch",paraId:22,tocIndex:5},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:22,tocIndex:5},{value:"State",paraId:22,tocIndex:5},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002",paraId:22,tocIndex:5},{value:"\u5728\u7EC4\u4EF6\u5185\u4FA6\u542C\u53EF\u4EE5\u4F7F\u7528",paraId:23,tocIndex:6},{value:"store.useWatch",paraId:23,tocIndex:6},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:23,tocIndex:6},{value:"store",paraId:23,tocIndex:6},{value:"\u5BF9\u8C61\u7684\u53D8\u5316,\u5F53\u7EC4\u4EF6\u9500\u6BC1\u81EA\u52A8\u53D6\u6D88\u8BA2\u9605\u3002",paraId:23,tocIndex:6}]},81820:function(J,i,e){e.r(i),e.d(i,{texts:function(){return o}});var K=e(64100);const o=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u975E\u5E38\u8F7B\u91CF\u7EA7\u7684\u8868\u5355\u7EC4\u4EF6\uFF0C\u5B83\u7684\u76EE\u6807\u662F\u8BA9\u8868\u5355\u5F00\u53D1\u53D8\u5F97\u66F4\u52A0\u7B80\u5355\u3001\u5FEB\u901F\u3001\u7075\u6D3B\u3002",paraId:0,tocIndex:0},{value:"@speed-form/antd",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/element-ui",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"element-ui",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"element-ui",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/iview",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"iview",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"iview",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/vuetify",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"vuetify",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"vuetify",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/element-plus",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"element-plus",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"element-plus",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/ant-design-vue",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"ant-design-vue",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"ant-design-vue",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/naive-ui",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"naive-ui",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"naive-ui",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/element3",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"element3",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"element3",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0}]}}]);
