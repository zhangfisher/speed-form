"use strict";(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[904],{33353:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(24908),J={}},12621:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(78719),J={}},35706:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(58839),J={}},40305:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(43230),J={}},38139:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(64010),J={}},98157:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(90938),J={}},93797:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(97278),J={}},535:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(83975),J={}},6892:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(82376),J={}},69581:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return U}});var K=e(28633),r=e.n(K),J=e(29008),j=e.n(J),T=e(70958),L=e.n(T),t=e(92379),G=e(59147),U={"docs-core-form-action-demo-0":{component:t.memo(t.lazy(L()(j()().mark(function M(){var d,O,p,l,h,a,w,u,D,y;return j()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.bind(e,6244));case 2:return d=A.sent,O=d.createForm,p=d.action,A.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return l=A.sent,h=l.Row,a=l.Col,w=l.Button,u=l.Input,D={fields:{username:{value:"fisher",required:!0,title:"\u59D3\u540D"},password:{value:"123",required:!0,title:"\u5BC6\u7801"}},actions:{login:{title:"\u767B\u5F55",execute:p(function(){var N=L()(j()().mark(function R(s,c){return j()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:console.log("\u767B\u5F55",s);case 1:case"end":return x.stop()}},R)}));return function(R,s){return N.apply(this,arguments)}}())}}},y=O(D,{debug:!0}),A.abrupt("return",{default:function(){var R=useState(""),s=r()(R,2),c=s[0],n=s[1];return t.createElement(h,null,t.createElement(a,null,t.createElement(y.Field,{name:"username"},function(x){var E=x.value,g=x.sync;return t.createElement("div",null,"\u7528\u6237\u540D\uFF1A",t.createElement("input",{value:E,onChange:g()}))}),t.createElement(y.Field,{name:"password"},function(x){var E=x.value,g=x.sync;return t.createElement("div",null,"\u5BC6\u7801\uFF1A",t.createElement("input",{value:E,onChange:g()}))}),t.createElement(y.Action,{name:"login"},function(x){var E=x.title,g=x.visible,F=x.loading,V=x.enable,X=x.run,Z=x.cancel,re=x.error,te=x.progress;return t.createElement(t.Fragment,null,t.createElement(u,{type:"submit",value:"\u63D0\u4EA4"}),t.createElement(w,{loading:F,cancel:Z,timeout:te,visible:g,enable:V,error:re,onClick:X()},E))})),t.createElement(a,null,"dsdsd"))}});case 15:case"end":return A.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-core-form-action-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createForm,action }  from "@speedform/core"
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
}`},"@speedform/core":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/core":e(6244),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var p,l=arguments;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}}}},70250:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(76726),J={}},56105:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(88209),J={}},81911:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(14741),J={}},3228:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(97630),J={}},78016:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(72e3),J={}},71229:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(27548),J={}},97521:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(31430),J={}},37013:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(48566),J={}},37763:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return t}});var K=e(29008),r=e.n(K),J=e(70958),j=e.n(J),T=e(92379),L=e(25248),t={"docs-core-quick-start-demo-0":{component:T.memo(T.lazy(j()(r()().mark(function G(){var U,M,d,O,p,l,h,a,w,u,D,y,I;return r()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.bind(e,21970));case 2:return U=N.sent,M=U.forms,N.next=6,Promise.resolve().then(e.t.bind(e,26372,23));case 6:return d=N.sent,O=d.default,N.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return p=N.sent,l=p.Card,h=p.Field,a=p.Input,w=p.ValidResult,N.next=17,Promise.resolve().then(e.t.bind(e,92379,19));case 17:return u=N.sent,D=u.useCallback,y=u.useRef,I=M.Network,N.abrupt("return",{default:function(){var s=y(),c=D(function(){return alert("submit"),console.log("submit"),!1},[]);return T.createElement(l,{title:"\u7F51\u7EDC\u914D\u7F6E\u8868\u5355"},T.createElement(I.Form,{onSubmit:c,action:"/api",ref:s},T.createElement(I.Field,{name:"title"},function(n){var x=n.name,E=n.title,g=n.value,F=n.visible,V=n.validate,X=n.placeholder,Z=n.sync;return T.createElement(h,{name:"title",visible:F,label:E,validate:V},T.createElement(a,{name:x,className:O({invalid:!V}),placeholder:X,value:g,onChange:Z()}))}),T.createElement(I.Field,{name:"interface"},function(n){var x=n.name,E=n.title,g=n.required,F=n.visible,V=n.validate,X=n.enable,Z=n.value,re=n.initial,te=n.select,de=n.sync;return T.createElement(h,{name:"interface",label:E},T.createElement("select",{value:Z,onChange:de()},te.map(function(oe,ve){return T.createElement("option",{key:ve,value:oe.value},oe.title)})))}),T.createElement(I.Field,{name:"ip"},function(n){var x=n.name,E=n.title,g=n.value,F=n.visible,V=n.validate,X=n.placeholder,Z=n.sync;return T.createElement(h,{name:"ip",visible:F,label:E,validate:V,memo:"\u4FEE\u6539\u8FDB\u884C\u5F02\u6B65\u6821\u9A8C"},T.createElement(a,{name:x,validate:V.result,placeholder:X,value:g,onChange:Z(100)}))}),T.createElement(I.Field,{name:"gateway"},function(n){var x=n.name,E=n.title,g=n.value,F=n.required,V=n.visible,X=n.validate,Z=n.update,re=n.enable,te=n.placeholder,de=n.sync;return T.createElement(h,{name:"gateway",visible:V,label:E},T.createElement(a,{name:x,validate:X,placeholder:te,value:g,onChange:de()}),T.createElement("button",{onClick:Z(function(oe){oe.gateway.value="192.168.1.2"})},"\u6062\u590D"),T.createElement("button",{onClick:Z("192.168.1.1")},"\u66F4\u65B0\u503C"))}),T.createElement(I.Group,{name:"wifi"},function(n){var x=n.title,E=n.visible;return T.createElement(l,{title:x+"(\u4EC5interfact=wifi\u65F6\u663E\u793A)",visible:E},T.createElement(I.Field,{name:"wifi.ssid"},function(g){var F=g.name,V=g.value,X=g.required,Z=g.visible,re=g.validate,te=g.enable,de=g.initial,oe=g.sync;return T.createElement(h,{name:"wifi.ssid",label:"SSID",enable:te},T.createElement(a,{name:F,className:O({invalid:!re}),value:V,onChange:oe()}))}),T.createElement(I.Field,{name:"wifi.password"},function(g){var F=g.name,V=g.value,X=g.enable,Z=g.validate,re=g.placeholder,te=g.help,de=g.sync;return T.createElement(h,{name:"wifi.password",label:"\u5BC6\u7801",enable:X,className:O({invalid:!Z})},T.createElement(a,{name:F,style:{border:Z?"1px solid #ccc":"1px solid red"},"data-help":te,value:V,placeholder:re,onChange:de(),readOnly:!X}),T.createElement(w,{validate:Z,help:te}))}))}),T.createElement(I.Field,{name:"dhcp.enable"},function(n){var x=n.name,E=n.title,g=n.visible,F=n.value,V=n.validate,X=n.sync;return T.createElement(h,{name:"dhcp.enable",visible:g,label:E},T.createElement("input",{name:x,className:O({invalid:!V}),type:"checkbox",checked:F,onChange:X()}))}),T.createElement(I.Field,{name:"dhcp.start"},function(n){var x=n.name,E=n.value,g=n.validate,F=n.enable,V=n.visible,X=n.title,Z=n.sync;return T.createElement(h,{name:"dhcp.start",label:X,enable:F},T.createElement(a,{name:x,enable:F,className:O({invalid:!g}),value:E,onChange:Z()}))}),T.createElement(I.Field,{name:"dhcp.end"},function(n){var x=n.name,E=n.value,g=n.validate,F=n.visible,V=n.title,X=n.enable,Z=n.sync;return T.createElement(h,{name:"dhcp.end",enable:X,label:V},T.createElement(a,{name:x,enable:X,className:O({invalid:!g}),value:E,onChange:Z()}))}),T.createElement(I.Submit,null),T.createElement(I.Reset,null)))}});case 22:case"end":return N.stop()}},G)})))),asset:{type:"BLOCK",id:"docs-core-quick-start-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { forms } from 'speedform-docs'
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
}`},"speedform-docs":{type:"NPM",value:"1.0.0"},classnames:{type:"NPM",value:"2.3.2"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"speedform-docs":e(21970),classnames:e(26372),"@speedform/demo-components":e(48398),react:e(92379)},renderOpts:{compile:function(){var G=j()(r()().mark(function M(){var d,O=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(660).then(e.bind(e,7660));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,O));case 3:case"end":return l.stop()}},M)}));function U(){return G.apply(this,arguments)}return U}()}}}},66027:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return t}});var K=e(29008),r=e.n(K),J=e(70958),j=e.n(J),T=e(92379),L=e(48101),t={"docs-core-tutorial-demo-0":{component:T.memo(T.lazy(j()(r()().mark(function G(){var U,M,d,O,p,l,h,a,w,u,D,y,I;return r()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.bind(e,21970));case 2:return U=N.sent,M=U.forms,N.next=6,Promise.resolve().then(e.t.bind(e,26372,23));case 6:return d=N.sent,O=d.default,N.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return p=N.sent,l=p.Card,h=p.Field,a=p.Input,w=p.ValidResult,N.next=17,Promise.resolve().then(e.t.bind(e,92379,19));case 17:return u=N.sent,D=u.useCallback,y=u.useRef,I=M.Network,N.abrupt("return",{default:function(){var s=y(),c=D(function(){return alert("submit"),console.log("submit"),!1},[]);return T.createElement(l,{title:"\u7F51\u7EDC\u914D\u7F6E\u8868\u5355"},T.createElement(I.Form,{onSubmit:c,action:"/api",ref:s},T.createElement(I.Field,{name:"title"},function(n){var x=n.name,E=n.title,g=n.value,F=n.visible,V=n.validate,X=n.placeholder,Z=n.sync;return T.createElement(h,{name:"title",visible:F,label:E,validate:V},T.createElement(a,{name:x,className:O({invalid:!V}),placeholder:X,value:g,onChange:Z()}))}),T.createElement(I.Field,{name:"interface"},function(n){var x=n.name,E=n.title,g=n.required,F=n.visible,V=n.validate,X=n.enable,Z=n.value,re=n.initial,te=n.select,de=n.sync;return T.createElement(h,{name:"interface",label:E},T.createElement("select",{value:Z,onChange:de()},te.map(function(oe,ve){return T.createElement("option",{key:ve,value:oe.value},oe.title)})))}),T.createElement(I.Field,{name:"ip"},function(n){var x=n.name,E=n.title,g=n.value,F=n.visible,V=n.validate,X=n.placeholder,Z=n.sync;return T.createElement(h,{name:"ip",visible:F,label:E,validate:V,memo:"\u4FEE\u6539\u8FDB\u884C\u5F02\u6B65\u6821\u9A8C"},T.createElement(a,{name:x,validate:V.result,placeholder:X,value:g,onChange:Z(100)}))}),T.createElement(I.Field,{name:"gateway"},function(n){var x=n.name,E=n.title,g=n.value,F=n.required,V=n.visible,X=n.validate,Z=n.update,re=n.enable,te=n.placeholder,de=n.sync;return T.createElement(h,{name:"gateway",visible:V,label:E},T.createElement(a,{name:x,validate:X,placeholder:te,value:g,onChange:de()}),T.createElement("button",{onClick:Z(function(oe){oe.gateway.value="192.168.1.2"})},"\u6062\u590D"),T.createElement("button",{onClick:Z("192.168.1.1")},"\u66F4\u65B0\u503C"))}),T.createElement(I.Group,{name:"wifi"},function(n){var x=n.title,E=n.visible;return T.createElement(l,{title:x+"(\u4EC5interfact=wifi\u65F6\u663E\u793A)",visible:E},T.createElement(I.Field,{name:"wifi.ssid"},function(g){var F=g.name,V=g.value,X=g.required,Z=g.visible,re=g.validate,te=g.enable,de=g.initial,oe=g.sync;return T.createElement(h,{name:"wifi.ssid",label:"SSID",enable:te},T.createElement(a,{name:F,className:O({invalid:!re}),value:V,onChange:oe()}))}),T.createElement(I.Field,{name:"wifi.password"},function(g){var F=g.name,V=g.value,X=g.enable,Z=g.validate,re=g.placeholder,te=g.help,de=g.sync;return T.createElement(h,{name:"wifi.password",label:"\u5BC6\u7801",enable:X,className:O({invalid:!Z})},T.createElement(a,{name:F,style:{border:Z?"1px solid #ccc":"1px solid red"},"data-help":te,value:V,placeholder:re,onChange:de(),readOnly:!X}),T.createElement(w,{validate:Z,help:te}))}))}),T.createElement(I.Field,{name:"dhcp.enable"},function(n){var x=n.name,E=n.title,g=n.visible,F=n.value,V=n.validate,X=n.sync;return T.createElement(h,{name:"dhcp.enable",visible:g,label:E},T.createElement("input",{name:x,className:O({invalid:!V}),type:"checkbox",checked:F,onChange:X()}))}),T.createElement(I.Field,{name:"dhcp.start"},function(n){var x=n.name,E=n.value,g=n.validate,F=n.enable,V=n.visible,X=n.title,Z=n.sync;return T.createElement(h,{name:"dhcp.start",label:X,enable:F},T.createElement(a,{name:x,enable:F,className:O({invalid:!g}),value:E,onChange:Z()}))}),T.createElement(I.Field,{name:"dhcp.end"},function(n){var x=n.name,E=n.value,g=n.validate,F=n.visible,V=n.title,X=n.enable,Z=n.sync;return T.createElement(h,{name:"dhcp.end",enable:X,label:V},T.createElement(a,{name:x,enable:X,className:O({invalid:!g}),value:E,onChange:Z()}))}),T.createElement(I.Submit,null),T.createElement(I.Reset,null)))}});case 22:case"end":return N.stop()}},G)})))),asset:{type:"BLOCK",id:"docs-core-tutorial-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { forms } from 'speedform-docs'
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
}`},"speedform-docs":{type:"NPM",value:"1.0.0"},classnames:{type:"NPM",value:"2.3.2"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"speedform-docs":e(21970),classnames:e(26372),"@speedform/demo-components":e(48398),react:e(92379)},renderOpts:{compile:function(){var G=j()(r()().mark(function M(){var d,O=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(660).then(e.bind(e,7660));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,O));case 3:case"end":return l.stop()}},M)}));function U(){return G.apply(this,arguments)}return U}()}}}},84867:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return U}});var K=e(28633),r=e.n(K),J=e(29008),j=e.n(J),T=e(70958),L=e.n(T),t=e(92379),G=e(59856),U={"docs-reactive-computed-async-demo-0":{component:t.memo(t.lazy(L()(j()().mark(function M(){var d,O,p,l,h,a;return j()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=u.sent,O=d.createStore,p=d.computed,u.next=7,Promise.resolve().then(e.bind(e,21970));case 7:return l=u.sent,h=l.delay,a=O({user:{firstName:"Zhang",lastName:"Fisher",fullName:p(function(){var D=L()(j()().mark(function y(I){return j()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,h();case 2:return N.abrupt("return",I.firstName+I.lastName);case 3:case"end":return N.stop()}},y)}));return function(y){return D.apply(this,arguments)}}(),["user.firstName","./lastName"])}}),u.abrupt("return",{default:function(){var y=a.useState(),I=r()(y,1),A=I[0];return t.createElement(t.Fragment,null,t.createElement("div",null,"firstName:",t.createElement("input",{value:A.user.firstName,onChange:a.sync(["user","firstName"])})),t.createElement("div",null,"lastName:",t.createElement("input",{value:A.user.lastName,onChange:a.sync(["user","lastName"])})),t.createElement("div",null,"fullName:",A.user.fullName.loading?"\u91CD\u65B0\u8BA1\u7B97...":A.user.fullName.result))}});case 11:case"end":return u.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap,$} from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var p,l=arguments;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-1":{component:t.memo(t.lazy(L()(j()().mark(function M(){var d,O,p,l,h,a;return j()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=u.sent,O=d.computed,p=d.createStore,u.next=7,Promise.resolve().then(e.bind(e,21970));case 7:return l=u.sent,h=l.api,a=p({user:{repo:"https://api.github.com/users/zhangfisher/repos",projects:O(function(){var D=L()(j()().mark(function y(I){var A,N;return j()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return A=r()(I,1),N=A[0],s.next=3,new Promise(function(c){return setTimeout(c,2e3)});case 3:return s.next=5,h.getProjects(N);case 5:return s.abrupt("return",s.sent);case 6:case"end":return s.stop()}},y)}));return function(y){return D.apply(this,arguments)}}(),["user.repo"],{scope:"depends"})}}),u.abrupt("return",{default:function(){var y=a.useState(),I=r()(y,1),A=I[0];return t.createElement("div",null,t.createElement("p",null,t.createElement("b",null,"\u4FEE\u6539\u4ED3\u5E93\u5730\u5740\u5C06\u89E6\u53D1\u91CD\u65B0\u52A0\u8F7D\u8BE5\u4ED3\u5E93\u9879\u76EE\u5217\u8868")),"\u4ED3\u5E93\u5730\u5740\uFF1A",t.createElement("input",{value:A.user.repo,onChange:a.sync(["user","repo"])}),t.createElement("button",{onClick:function(){return a.state.user.projects.run()}},"\u91CD\u8BD5"),t.createElement("button",{onClick:function(){return a.state.user.repo="https://api.github.com/users/zhangfisher/repos"}},"\u6062\u590D"),t.createElement("table",{className:"projects-list"},t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"3"},"\u4EE5\u4E0B\u662F\u6211\u7684\u5F00\u6E90\u9879\u76EE\uFF0C\u611F\u8C22\u652F\u6301\uFF01")),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u9879\u76EE\u540D\u79F0")),t.createElement("td",null,t.createElement("b",null,"\u8BF4\u660E")),t.createElement("td",null,t.createElement("b",null,"\u661F")))),t.createElement("tbody",null,A.user.projects.loading?t.createElement("tr",null,t.createElement("td",{colSpan:3},"\u6B63\u5728\u52A0\u8F7D...:")):A.user.projects.error?t.createElement("tr",null,t.createElement("td",{colSpan:2},"\u52A0\u8F7D\u9519\u8BEF:",A.user.projects.error)):A.user.projects&&A.user.projects.result.map(function(N,R){return t.createElement("tr",{key:R},t.createElement("td",null,t.createElement("a",{href:N.url,target:"__blank"},N.name)),t.createElement("td",null,N.description),t.createElement("td",null,N.stars))}))))}});case 11:case"end":return u.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { computed,createStore } from "@speedform/reactive"
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

}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var p,l=arguments;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-2":{component:t.memo(t.lazy(L()(j()().mark(function M(){var d,O,p,l,h,a;return j()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=u.sent,O=d.createStore,p=d.computed,l=d.ComputedScopeRef,h={user:{firstName:"zhang",lastName:"fisher",fullName:p(function(){var D=L()(j()().mark(function y(I){var A,N,R;return j()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return A=r()(I,2),N=A[0],R=A[1],c.abrupt("return",N+R);case 2:case"end":return c.stop()}},y)}));return function(y){return D.apply(this,arguments)}}(),["user.firstName","user.lastName"],{scope:l.Depends}),fullName1:p(function(){var D=L()(j()().mark(function y(I){var A,N,R;return j()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return A=r()(I,2),N=A[0],R=A[1],c.abrupt("return",N+R);case 2:case"end":return c.stop()}},y)}));return function(y){return D.apply(this,arguments)}}(),["./firstName","./lastName"],{scope:l.Depends})},other:{fullName2:p(function(){var D=L()(j()().mark(function y(I){var A,N,R;return j()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return A=r()(I,2),N=A[0],R=A[1],c.abrupt("return",N+R);case 2:case"end":return c.stop()}},y)}));return function(y){return D.apply(this,arguments)}}(),["../user.firstName","../user.lastName"],{scope:l.Depends})}},a=O(h),u.abrupt("return",{default:function(){var y=a.useState(),I=r()(y,1),A=I[0];return t.createElement("div",null,t.createElement("div",null,"firstName=",A.user.firstName),t.createElement("div",null,"lastName=",A.user.lastName),t.createElement("div",null,"fullName=",A.user.fullName.result),t.createElement("div",null,"fullName1=",A.user.fullName1.result),t.createElement("div",null,"fullName2=",A.other.fullName2.result))}});case 9:case"end":return u.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef } from "@speedform/reactive" 

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var p,l=arguments;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-3":{component:t.memo(t.lazy(L()(j()().mark(function M(){var d,O,p,l,h,a,w,u,D,y,I,A;return j()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=R.sent,O=d.createStore,p=d.computed,R.next=7,Promise.resolve().then(e.t.bind(e,92379,19));case 7:return l=R.sent,h=l.useRef,a=l.useEffect,R.next=12,Promise.resolve().then(e.bind(e,21970));case 12:return w=R.sent,u=w.delay,R.next=16,Promise.resolve().then(e.bind(e,48398));case 16:return D=R.sent,y=D.Box,I={user:{firstName:"Zhang",lastName:"Fisher",fullName:p(function(){var s=L()(j()().mark(function c(n){return j()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,u();case 2:return E.abrupt("return",n.firstName+n.lastName);case 3:case"end":return E.stop()}},c)}));return function(c){return s.apply(this,arguments)}}(),["user.firstName","user.lastName"])}},A=O(I),R.abrupt("return",{default:function(){var c=h(0),n=A.useState(),x=r()(n,2),E=x[0],g=x[1];return a(function(){c.current++},[]),t.createElement(y,null,t.createElement("div",null,t.createElement("div",null,"FirstName:",E.user.firstName),t.createElement("div",null,"LastName:",E.user.lastName),t.createElement("div",null,"FullName:",E.user.fullName.loading?"\u6B63\u5728\u8BA1\u7B97...":E.user.fullName.error?"ERROR:".concat(E.user.fullName.error):E.user.fullName.result),t.createElement("button",{onClick:function(){return g(function(V){return V.user.firstName="ZHANG "+c.current++})}},"\u4FEE\u6539FirstName"),t.createElement("button",{onClick:function(){return g(function(V){return V.user.lastName="FISHER"+c.current++})}},"\u4FEE\u6539LastName"),t.createElement("button",{onClick:function(){return E.user.fullName.run()}},"\u91CD\u65B0\u8BA1\u7B97")),t.createElement("div",null,JSON.stringify(E.user.fullName)))}});case 21:case"end":return R.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),react:e(92379),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var p,l=arguments;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-4":{component:t.memo(t.lazy(L()(j()().mark(function M(){var d,O,p,l,h,a,w,u,D;return j()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=I.sent,O=d.createStore,p=d.computed,l=d.ComputedScopeRef,I.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return h=I.sent,a=h.delay,I.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return w=I.sent,u=w.Box,D=O({order:{bookName:"ZhangFisher",price:100,count:1,total:p(function(){var A=L()(j()().mark(function N(R,s){var c,n,x,E,g;return j()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return c=r()(R,2),n=c[0],x=c[1],E=s.getProgressbar,g=E(),V.abrupt("return",new Promise(function(){var X=L()(j()().mark(function Z(re){var te;return j()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:te=1;case 1:if(!(te<=100)){oe.next=8;break}return oe.next=4,a(20);case 4:g.value(te);case 5:te++,oe.next=1;break;case 8:g.end(),re(n*x);case 10:case"end":return oe.stop()}},Z)}));return function(Z){return X.apply(this,arguments)}}()));case 4:case"end":return V.stop()}},N)}));return function(N,R){return A.apply(this,arguments)}}(),["order.count","order.price"],{scope:l.Depends})}}),I.abrupt("return",{default:function(){var N=D.useState(),R=r()(N,2),s=R[0],c=R[1];return t.createElement(u,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,s.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,s.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return c(function(x){return x.order.count=x.order.count-1})}},"-"),t.createElement("input",{value:s.order.count,onChange:D.sync(function(n){return n.order.count})}),t.createElement("button",{onClick:function(){return c(function(x){return x.order.count=x.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,s.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...".concat(s.order.total.progress,"%"):s.order.total.error?"ERROR:".concat(s.order.total.error):s.order.total.result)))),t.createElement("div",null,JSON.stringify(s.order.total)))}});case 16:case"end":return I.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var p,l=arguments;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-5":{component:t.memo(t.lazy(L()(j()().mark(function M(){var d,O,p,l,h,a,w,u,D;return j()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=I.sent,O=d.createStore,p=d.computed,l=d.ComputedScopeRef,I.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return h=I.sent,a=h.delay,I.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return w=I.sent,u=w.Box,D=O({order:{bookName:"ZhangFisher",price:100,count:1,total:p(function(){var A=L()(j()().mark(function N(R){var s,c,n;return j()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return s=r()(R,2),c=s[0],n=s[1],E.next=3,a(2e3);case 3:return E.abrupt("return",c*n);case 4:case"end":return E.stop()}},N)}));return function(N){return A.apply(this,arguments)}}(),["order.count","order.price"],{timeout:1e3,scope:l.Depends})}}),I.abrupt("return",{default:function(){var N=D.useState(),R=r()(N,2),s=R[0],c=R[1];return t.createElement(u,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,s.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,s.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return c(function(x){return x.order.count=x.order.count-1})}},"-"),t.createElement("input",{value:s.order.count,onChange:D.sync(function(n){return n.order.count})}),t.createElement("button",{onClick:function(){return c(function(x){return x.order.count=x.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,s.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...(\u8D85\u65F6:".concat(s.order.total.timeout,")"):s.order.total.error?"ERROR:".concat(s.order.total.error):s.order.total.result)))),t.createElement("div",null,JSON.stringify(s.order.total)))}});case 16:case"end":return I.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var p,l=arguments;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-6":{component:t.memo(t.lazy(L()(j()().mark(function M(){var d,O,p,l,h,a,w,u,D;return j()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=I.sent,O=d.createStore,p=d.computed,l=d.ComputedScopeRef,I.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return h=I.sent,a=h.delay,I.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return w=I.sent,u=w.Box,D=O({order:{bookName:"ZhangFisher",price:100,count:1,total:p(function(){var A=L()(j()().mark(function N(R){var s,c,n;return j()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return s=r()(R,2),c=s[0],n=s[1],E.next=3,a(1e5);case 3:return E.abrupt("return",c*n);case 4:case"end":return E.stop()}},N)}));return function(N){return A.apply(this,arguments)}}(),["order.count","order.price"],{timeout:[5*1e3,5],scope:l.Depends})}}),I.abrupt("return",{default:function(){var N=D.useState(),R=r()(N,2),s=R[0],c=R[1];return t.createElement(u,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,s.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,s.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return c(function(x){return x.order.count=x.order.count-1})}},"-"),t.createElement("input",{value:s.order.count,onChange:D.sync(function(n){return n.order.count})}),t.createElement("button",{onClick:function(){return c(function(x){return x.order.count=x.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,s.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...(\u5012\u8BA1\u65F6:".concat(s.order.total.timeout,")"):s.order.total.error?"ERROR:".concat(s.order.total.error):s.order.total.result)))),t.createElement("div",null,JSON.stringify(s.order.total)))}});case 16:case"end":return I.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var p,l=arguments;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-7":{component:t.memo(t.lazy(L()(j()().mark(function M(){var d,O,p,l,h,a,w,u,D,y;return j()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=A.sent,O=d.createStore,p=d.computed,l=d.ComputedScopeRef,A.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return h=A.sent,a=h.delay,A.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return w=A.sent,u=w.Box,D=0,y=O({order:{bookName:"ZhangFisher",price:100,count:1,total:p(function(){var N=L()(j()().mark(function R(s){var c,n,x;return j()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return c=r()(s,2),n=c[0],x=c[1],++n,g.next=4,a();case 4:throw new Error("\u8BA1\u7B97\u51FA\u9519"+n);case 5:case"end":return g.stop()}},R)}));return function(R){return N.apply(this,arguments)}}(),["order.count","order.price"],{retry:[5,1e3],scope:l.Depends})}}),A.abrupt("return",{default:function(){var R=y.useState(),s=r()(R,2),c=s[0],n=s[1];return t.createElement(u,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,c.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,c.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return n(function(E){return E.order.count=E.order.count-1})}},"-"),t.createElement("input",{value:c.order.count,onChange:y.sync(function(x){return x.order.count})}),t.createElement("button",{onClick:function(){return n(function(E){D=0,E.order.count=E.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,c.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...":c.order.total.error?"ERROR:".concat(c.order.total.error):c.order.total.result,c.order.total.retry>0?"\u91CD\u8BD5:".concat(c.order.total.retry):"")))),t.createElement("div",null,JSON.stringify(c.order.total)))}});case 17:case"end":return A.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var p,l=arguments;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-8":{component:t.memo(t.lazy(L()(j()().mark(function M(){var d,O,p,l,h,a,w;return j()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=D.sent,O=d.createStore,p=d.computed,l=d.ComputedScopeRef,D.next=8,Promise.resolve().then(e.bind(e,48398));case 8:return h=D.sent,a=h.Box,w=O({order:{bookName:"ZhangFisher",price:100,count:1,total:p(function(){var y=L()(j()().mark(function I(A,N){var R,s,c,n;return j()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return R=r()(A,2),s=R[0],c=R[1],n=N.abortSignal,E.abrupt("return",new Promise(function(g,F){setTimeout(function(){g(s*c)},1e4),n.addEventListener("abort",function(){F("cancelled")})}));case 3:case"end":return E.stop()}},I)}));return function(I,A){return y.apply(this,arguments)}}(),["order.count","order.price"],{timeout:[10*1e3,10],scope:l.Depends})}}),D.abrupt("return",{default:function(){var I=w.useState(),A=r()(I,2),N=A[0],R=A[1];return t.createElement(a,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,N.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,N.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return R(function(c){return c.order.count=c.order.count-1})}},"-"),t.createElement("input",{value:N.order.count,onChange:w.sync(function(s){return s.order.count})}),t.createElement("button",{onClick:function(){return R(function(c){c.order.count=c.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,N.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...".concat(N.order.total.timeout):N.order.total.error?"ERROR:".concat(N.order.total.error):N.order.total.result,N.order.total.loading?t.createElement("button",{onClick:function(){return N.order.total.cancel()}},"\u53D6\u6D88"):"")))),t.createElement("div",null,JSON.stringify(N.order.total)))}});case 12:case"end":return D.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var p,l=arguments;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-9":{component:t.memo(t.lazy(L()(j()().mark(function M(){var d,O,p,l;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=a.sent,O=d.createStore,p=d.computed,l=O({bookName:"ZhangFisher",price:100,count:3,total:p(function(){var w=L()(j()().mark(function u(D){return j()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.abrupt("return",D.price*D.count);case 1:case"end":return I.stop()}},u)}));return function(u){return w.apply(this,arguments)}}(),[])}),a.abrupt("return",{default:function(){var u=l.useState(),D=r()(u,1),y=D[0];return t.createElement("div",null,t.createElement("div",null,"\u4E66\u540D:",y.bookName),t.createElement("div",null,"\u4EF7\u683C:",y.price),t.createElement("div",null,"\u6570\u91CF:",y.count),t.createElement("div",null,"\u603B\u4EF7:",y.total.result))}});case 7:case"end":return a.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed} from "@speedform/reactive"

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var p,l=arguments;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}},"docs-reactive-computed-async-demo-10":{component:t.memo(t.lazy(L()(j()().mark(function M(){var d,O,p;return j()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=h.sent,O=d.createStore,p=O({bookName:"ZhangFisher",price:100,count:3,total:function(){var a=L()(j()().mark(function u(D){return j()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.abrupt("return",D.price*D.count);case 1:case"end":return I.stop()}},u)}));function w(u){return a.apply(this,arguments)}return w}()}),h.abrupt("return",{default:function(){var w=p.useState(),u=r()(w,1),D=u[0];return t.createElement("div",null,t.createElement("div",null,"\u4E66\u540D:",D.bookName),t.createElement("div",null,"\u4EF7\u683C:",D.price),t.createElement("div",null,"\u6570\u91CF:",D.count),t.createElement("div",null,"\u603B\u4EF7:",D.total.result),t.createElement("div",null,"state.total=",String(D.total)))}});case 6:case"end":return h.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore} from "@speedform/reactive"

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var p,l=arguments;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}}}},96412:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return d}});var K=e(29008),r=e.n(K),J=e(34180),j=e.n(J),T=e(28633),L=e.n(T),t=e(70958),G=e.n(t),U=e(92379),M=e(75394),d={"docs-reactive-computed-intro-demo-0":{component:U.memo(U.lazy(G()(r()().mark(function O(){var p,l,h,a,w,u;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return p=y.sent,l=p.createStore,y.next=6,Promise.resolve().then(e.bind(e,48398));case 6:return h=y.sent,a=h.Divider,w={firstName:"Zhang",lastName:"Fisher",fullName:function(A){return A.firstName+A.lastName}},u=l(w,{singleton:!1}),y.abrupt("return",{default:function(){var A=u.useState(),N=L()(A,2),R=N[0],s=N[1];return U.createElement("div",null,U.createElement("h4",null,"\u58F0\u660E\u65F6fullName\u662F\u4E00\u4E2A\u51FD\u6570"),U.createElement("div",null,"typeof(user.fullName)=",j()(w.fullName)),U.createElement(a,null),U.createElement("h4",null,"\u521B\u5EFAStore\u540E,state.fullName\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32"),U.createElement("div",null,"typeof(store.state.fullName)=",j()(R.fullName)),U.createElement("div",null,"store.state.fullName==",R.fullName))}});case 11:case"end":return y.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive'; 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var O=G()(r()().mark(function l(){var h,a=arguments;return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(660).then(e.bind(e,7660));case 2:return u.abrupt("return",(h=u.sent).default.apply(h,a));case 3:case"end":return u.stop()}},l)}));function p(){return O.apply(this,arguments)}return p}()}},"docs-reactive-computed-intro-demo-1":{component:U.memo(U.lazy(G()(r()().mark(function O(){var p,l,h,a,w;return r()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return p=D.sent,l=p.createStore,h=p.ComputedScopeRef,a={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(I){return I.firstName+I.lastName}}},w=l(a,{scope:function(){return h.Current}}),D.abrupt("return",{default:function(){var I=w.useState(),A=L()(I,2),N=A[0],R=A[1];return U.createElement("div",null,U.createElement("div",null,"FullName:",N.user.fullName))}});case 8:case"end":return D.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive'; 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"store.options.scope==ComputedScopeRef.Current,",title:"ComputedScopeRef.Current"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=G()(r()().mark(function l(){var h,a=arguments;return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(660).then(e.bind(e,7660));case 2:return u.abrupt("return",(h=u.sent).default.apply(h,a));case 3:case"end":return u.stop()}},l)}));function p(){return O.apply(this,arguments)}return p}()}},"docs-reactive-computed-intro-demo-2":{component:U.memo(U.lazy(G()(r()().mark(function O(){var p,l,h,a;return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return p=u.sent,l=p.createStore,h=p.ComputedScopeRef,a=l({user:{firstName:"Zhang",lastName:"Fisher",fullName:function(y){return y.user.firstName+y.user.lastName}}},{scope:function(){return h.Root}}),u.abrupt("return",{default:function(){var y=a.useState(),I=L()(y,2),A=I[0],N=I[1];return U.createElement("div",null,U.createElement("div",null,"FullName:",A.user.fullName))}});case 7:case"end":return u.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive'; 
 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"store.options.scope==ComputedScopeRef.Root,",title:"ComputedScopeRef.Root"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=G()(r()().mark(function l(){var h,a=arguments;return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(660).then(e.bind(e,7660));case 2:return u.abrupt("return",(h=u.sent).default.apply(h,a));case 3:case"end":return u.stop()}},l)}));function p(){return O.apply(this,arguments)}return p}()}},"docs-reactive-computed-intro-demo-3":{component:U.memo(U.lazy(G()(r()().mark(function O(){var p,l,h,a,w;return r()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return p=D.sent,l=p.createStore,h=p.ComputedScopeRef,a={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(I){return I.user.firstName+I.user.lastName}}},w=l(a,{scope:function(){return h.Parent}}),D.abrupt("return",{default:function(){var I=w.useState(),A=L()(I,2),N=A[0],R=A[1];return U.createElement("div",null,U.createElement("div",null,"FullName:",N.user.fullName))}});case 8:case"end":return D.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive'; 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"scope==ComputedScopeRef.Parent",title:"ComputedScopeRef.Parent"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=G()(r()().mark(function l(){var h,a=arguments;return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(660).then(e.bind(e,7660));case 2:return u.abrupt("return",(h=u.sent).default.apply(h,a));case 3:case"end":return u.stop()}},l)}));function p(){return O.apply(this,arguments)}return p}()}},"docs-reactive-computed-intro-demo-4":{component:U.memo(U.lazy(G()(r()().mark(function O(){var p,l,h,a;return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return p=u.sent,l=p.createStore,h={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(y){return y},address:{city:"Quanzhou"}}},a=l(h,{scope:function(){return"firstName"}}),u.abrupt("return",{default:function(){var y=a.useState(),I=L()(y,2),A=I[0],N=I[1];return U.createElement("div",null,U.createElement("div",null,"FullName:",A.user.fullName))}});case 7:case"end":return u.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive'; 

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"store.options.scope==<\u5B57\u7B26\u4E32>",title:"<\u5B57\u7B26\u4E32>"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=G()(r()().mark(function l(){var h,a=arguments;return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(660).then(e.bind(e,7660));case 2:return u.abrupt("return",(h=u.sent).default.apply(h,a));case 3:case"end":return u.stop()}},l)}));function p(){return O.apply(this,arguments)}return p}()}},"docs-reactive-computed-intro-demo-5":{component:U.memo(U.lazy(G()(r()().mark(function O(){var p,l,h,a;return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return p=u.sent,l=p.createStore,h={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(y){return y},address:{city:"Quanzhou"}}},a=l(h,{scope:function(){return["user","address","city"]}}),u.abrupt("return",{default:function(){var y=a.useState(),I=L()(y,2),A=I[0],N=I[1];return U.createElement("div",null,U.createElement("div",null,"FullName:",A.user.fullName))}});case 7:case"end":return u.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive'; 

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",title:"<\u5B57\u7B26\u4E32\u6570\u7EC4>"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=G()(r()().mark(function l(){var h,a=arguments;return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(660).then(e.bind(e,7660));case 2:return u.abrupt("return",(h=u.sent).default.apply(h,a));case 3:case"end":return u.stop()}},l)}));function p(){return O.apply(this,arguments)}return p}()}},"docs-reactive-computed-intro-demo-6":{component:U.memo(U.lazy(G()(r()().mark(function O(){var p,l,h,a,w,u;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return p=y.sent,l=p.createStore,h=p.computed,a=p.ComputedScopeRef,w={user:{firstName:"Zhang",lastName:"Fisher",fullName:h(function(){var I=G()(r()().mark(function A(N){return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",N[0]+N[1]);case 1:case"end":return s.stop()}},A)}));return function(A){return I.apply(this,arguments)}}(),["user.firstName","user.lastName"],{async:!0,scope:a.Depends})}},u=l(w),y.abrupt("return",{default:function(){var A=u.useState(),N=L()(A,2),R=N[0],s=N[1];return U.createElement("div",null,U.createElement("div",null,"FullName:",R.user.fullName.result))}});case 9:case"end":return y.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef  } from '@speedform/reactive'; 

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",title:"<\u5B57\u7B26\u4E32\u6570\u7EC4>"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var O=G()(r()().mark(function l(){var h,a=arguments;return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(660).then(e.bind(e,7660));case 2:return u.abrupt("return",(h=u.sent).default.apply(h,a));case 3:case"end":return u.stop()}},l)}));function p(){return O.apply(this,arguments)}return p}()}}}},46206:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return p}});var K=e(12027),r=e.n(K),J=e(34180),j=e.n(J),T=e(28633),L=e.n(T),t=e(29008),G=e.n(t),U=e(70958),M=e.n(U),d=e(92379),O=e(83818),p={"docs-reactive-computed-objects-demo-0":{component:d.memo(d.lazy(M()(G()().mark(function l(){var h,a,w,u,D,y,I,A,N;return G()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return h=s.sent,a=h.createStore,w=h.computed,s.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return u=s.sent,D=u.Divider,y=u.ColorBlock,I=0,A={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(n){return n.firstName+n.lastName+" (".concat(++I,")")},fullName2:w(function(){var c=M()(G()().mark(function n(x){return G()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",x.firstName+x.lastName+" (".concat(++I,")"));case 1:case"end":return g.stop()}},n)}));return function(n){return c.apply(this,arguments)}}(),[],{async:!0})}},N=a(A),s.abrupt("return",{default:function(){var n=N.useState(),x=L()(n,1),E=x[0];return d.createElement("div",null,d.createElement("div",null,"FirstName =",E.user.firstName),d.createElement("div",null,"LastName =",E.user.lastName),d.createElement(y,{name:"FullName",value:E.user.fullName}),d.createElement(y,{name:"FullName2",value:E.user.fullName2.result}),d.createElement(D,null),d.createElement("div",null,"typeof(store.computedObjects)==",j()(N.computedObjects)),d.createElement("div",null,"store.computedObjects instanceof Map=",String(N.computedObjects instanceof Map)),d.createElement("div",null,"store.computedObjects.size=",N.computedObjects.size),d.createElement("div",null,"store.computedObjects.size=",N.computedObjects.size),d.createElement("div",null,"store.computedObjects.keys()=",r()(N.computedObjects.keys()).join(" , ")),d.createElement("button",{onClick:function(){return N.computedObjects.get("user/fullName").run()}},"\u6267\u884CfullName\u8BA1\u7B97\u51FD\u6570"),d.createElement("button",{onClick:function(){return N.computedObjects.get("user/fullName2").run()}},"\u6267\u884CfullName2\u8BA1\u7B97\u51FD\u6570"),d.createElement("button",{onClick:function(){return N.state.user.fullName2.run()}},"\u6267\u884CfullName2\u8BA1\u7B97\u51FD\u6570"))}});case 14:case"end":return s.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var l=M()(G()().mark(function a(){var w,u=arguments;return G()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(660).then(e.bind(e,7660));case 2:return y.abrupt("return",(w=y.sent).default.apply(w,u));case 3:case"end":return y.stop()}},a)}));function h(){return l.apply(this,arguments)}return h}()}},"docs-reactive-computed-objects-demo-1":{component:d.memo(d.lazy(M()(G()().mark(function l(){var h,a,w,u,D,y,I,A,N,R;return G()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return h=c.sent,a=h.createStore,w=h.computed,c.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return u=c.sent,D=u.Divider,c.next=11,Promise.resolve().then(e.bind(e,21970));case 11:return y=c.sent,I=y.delay,A=0,N={book:{name:"Zhang",count:4,price:100,total1:w(function(){var n=M()(G()().mark(function x(E){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,I();case 2:return F.abrupt("return",E.count*E.price);case 3:case"end":return F.stop()}},x)}));return function(x){return n.apply(this,arguments)}}(),[],{async:!0,group:"total"}),total2:w(function(){var n=M()(G()().mark(function x(E){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,I();case 2:return F.abrupt("return",E.count*E.price);case 3:case"end":return F.stop()}},x)}));return function(x){return n.apply(this,arguments)}}(),[],{async:!0,group:"total"}),total3:w(function(){var n=M()(G()().mark(function x(E){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,I();case 2:return F.abrupt("return",E.count*E.price);case 3:case"end":return F.stop()}},x)}));return function(x){return n.apply(this,arguments)}}(),[],{async:!0,group:"total"}),average1:w(function(){var n=M()(G()().mark(function x(E){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,I();case 2:return F.abrupt("return",E.price/E.count);case 3:case"end":return F.stop()}},x)}));return function(x){return n.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average2:w(function(){var n=M()(G()().mark(function x(E){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,I();case 2:return F.abrupt("return",E.price/E.count);case 3:case"end":return F.stop()}},x)}));return function(x){return n.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average3:w(function(){var n=M()(G()().mark(function x(E){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,I();case 2:return F.abrupt("return",E.price/E.count);case 3:case"end":return F.stop()}},x)}));return function(x){return n.apply(this,arguments)}}(),[],{async:!0,group:"average"})}},R=a(N),c.abrupt("return",{default:function(){var x=R.useState(),E=L()(x,1),g=E[0];return d.createElement("div",null,d.createElement("div",null,"BookName =",g.book.name),d.createElement("div",null,"count = ",d.createElement("input",{value:g.book.count,onChange:R.sync(["book","count"])})),d.createElement("div",null,"price = ",d.createElement("input",{value:g.book.price,onChange:R.sync(["book","price"])})),d.createElement(D,{title:"Total Group"}),d.createElement("div",null,"Total1 =",g.book.total1.loading?"\u8BA1\u7B97\u4E2D...":g.book.total1.result),d.createElement("div",null,"Total2 =",g.book.total2.loading?"\u8BA1\u7B97\u4E2D...":g.book.total2.result),d.createElement("div",null,"Total3 =",g.book.total3.loading?"\u8BA1\u7B97\u4E2D...":g.book.total3.result),d.createElement("button",{onClick:function(){return R.computedObjects.runGroup("total")}},"\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570"),d.createElement(D,{title:"Average Group"}),d.createElement("div",null,"Average1 =",g.book.average1.loading?"\u8BA1\u7B97\u4E2D...":g.book.average1.result),d.createElement("div",null,"Average2 =",g.book.average2.loading?"\u8BA1\u7B97\u4E2D...":g.book.average2.result),d.createElement("div",null,"Average3 =",g.book.average3.loading?"\u8BA1\u7B97\u4E2D...":g.book.average3.result),d.createElement("button",{onClick:function(){return R.computedObjects.runGroup("average")}},"\u6267\u884C\u7EC4average\u8BA1\u7B97\u51FD\u6570"))}});case 17:case"end":return c.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398),"speedform-docs":e(21970)},renderOpts:{compile:function(){var l=M()(G()().mark(function a(){var w,u=arguments;return G()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(660).then(e.bind(e,7660));case 2:return y.abrupt("return",(w=y.sent).default.apply(w,u));case 3:case"end":return y.stop()}},a)}));function h(){return l.apply(this,arguments)}return h}()}},"docs-reactive-computed-objects-demo-2":{component:d.memo(d.lazy(M()(G()().mark(function l(){var h,a,w,u,D,y,I,A,N,R;return G()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return h=c.sent,a=h.createStore,w=h.computed,c.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return u=c.sent,D=u.Divider,c.next=11,Promise.resolve().then(e.bind(e,21970));case 11:return y=c.sent,I=y.delay,A=0,N={book:{name:"Zhang",count:4,price:100,total1:w(function(){var n=M()(G()().mark(function x(E){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,I();case 2:return F.abrupt("return",E.count*E.price);case 3:case"end":return F.stop()}},x)}));return function(x){return n.apply(this,arguments)}}(),["book.count","book.price"],{async:!0,group:"total"}),total2:w(function(){var n=M()(G()().mark(function x(E){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,I();case 2:return F.abrupt("return",E.count*E.price);case 3:case"end":return F.stop()}},x)}));return function(x){return n.apply(this,arguments)}}(),["book.count","book.price"],{async:!0,group:"total",initial:100,enable:!1}),total3:w(function(){var n=M()(G()().mark(function x(E){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,I();case 2:return F.abrupt("return",E.count*E.price);case 3:case"end":return F.stop()}},x)}));return function(x){return n.apply(this,arguments)}}(),[],{async:!0,group:"total"}),average1:w(function(){var n=M()(G()().mark(function x(E){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,I();case 2:return F.abrupt("return",E.price/E.count);case 3:case"end":return F.stop()}},x)}));return function(x){return n.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average2:w(function(){var n=M()(G()().mark(function x(E){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,I();case 2:return F.abrupt("return",E.price/E.count);case 3:case"end":return F.stop()}},x)}));return function(x){return n.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average3:w(function(){var n=M()(G()().mark(function x(E){return G()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,I();case 2:return F.abrupt("return",E.price/E.count);case 3:case"end":return F.stop()}},x)}));return function(x){return n.apply(this,arguments)}}(),[],{async:!0,group:"average"})}},R=a(N),c.abrupt("return",{default:function(){var x=R.useState(),E=L()(x,1),g=E[0];return d.createElement("div",null,d.createElement("div",null,"BookName =",g.book.name),d.createElement("div",null,"count = ",d.createElement("input",{value:g.book.count,onChange:R.sync(["book","count"])})),d.createElement("div",null,"price = ",d.createElement("input",{value:g.book.price,onChange:R.sync(["book","price"])})),d.createElement(D,{title:"Total Group"}),d.createElement("table",null,d.createElement("tbody",null,d.createElement("tr",null,d.createElement("td",null,"Total1 ="),d.createElement("td",null,g.book.total1.loading?"\u8BA1\u7B97\u4E2D...":g.book.total1.result),d.createElement("td",null,"\u9ED8\u8BA4\u81EA\u52A8\u8BA1\u7B97")),d.createElement("tr",null,d.createElement("td",null,"Total2 ="),d.createElement("td",null,g.book.total2.loading?"\u8BA1\u7B97\u4E2D...":g.book.total2.result),d.createElement("td",null,"\u7981\u7528\u8BA1\u7B97\uFF0C\u6307\u5B9A\u4E86\u9ED8\u8BA4\u503C(",d.createElement("input",{type:"checkbox",checked:R.computedObjects.get("book/total2"),onChange:function(V){console.log("ff=,",V.target,R.computedObjects.get("book/total2"))}}),")")),d.createElement("tr",null,d.createElement("td",null,"Total3 ="),d.createElement("td",null,g.book.total3.loading?"\u8BA1\u7B97\u4E2D...":g.book.total3.result),d.createElement("td",null,"\u65E0\u4F9D\u8D56\uFF0C\u9700\u8981\u624B\u52A8\u8BA1\u7B97")))),d.createElement("button",{onClick:function(){return R.computedObjects.runGroup("total")}},"\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570"),d.createElement(D,{title:"Average Group"}),d.createElement("div",null,"Average1 =",g.book.average1.loading?"\u8BA1\u7B97\u4E2D...":g.book.average1.result),d.createElement("div",null,"Average2 =",g.book.average2.loading?"\u8BA1\u7B97\u4E2D...":g.book.average2.result),d.createElement("div",null,"Average3 =",g.book.average3.loading?"\u8BA1\u7B97\u4E2D...":g.book.average3.result),d.createElement("button",{onClick:function(){return R.computedObjects.runGroup("average")}},"\u6267\u884C\u7EC4average\u8BA1\u7B97\u51FD\u6570"))}});case 17:case"end":return c.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398),"speedform-docs":e(21970)},renderOpts:{compile:function(){var l=M()(G()().mark(function a(){var w,u=arguments;return G()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(660).then(e.bind(e,7660));case 2:return y.abrupt("return",(w=y.sent).default.apply(w,u));case 3:case"end":return y.stop()}},a)}));function h(){return l.apply(this,arguments)}return h}()}},"docs-reactive-computed-objects-demo-3":{component:d.memo(d.lazy(M()(G()().mark(function l(){var h,a,w,u,D,y,I,A;return G()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return h=R.sent,a=h.createStore,w=h.computed,R.next=7,Promise.resolve().then(e.bind(e,21970));case 7:return u=R.sent,D=u.delay,y=0,I={book:{name:"Zhang",count:4,price:100,total:w(function(){var s=M()(G()().mark(function c(n){return G()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,D();case 2:return E.abrupt("return",n.count*n.price);case 3:case"end":return E.stop()}},c)}));return function(c){return s.apply(this,arguments)}}(),[],{async:!0,group:"total"})}},A=a(I),R.abrupt("return",{default:function(){var c=A.useState(),n=L()(c,1),x=n[0];return d.createElement("div",null,d.createElement("div",null,"BookName =",x.book.name),d.createElement("div",null,"count = ",d.createElement("input",{value:x.book.count,onChange:A.sync(["book","count"])})),d.createElement("div",null,"price = ",d.createElement("input",{value:x.book.price,onChange:A.sync(["book","price"])})),d.createElement("div",null,"Total =",x.book.total.loading?"\u8BA1\u7B97\u4E2D...":x.book.total.result),d.createElement("button",{onClick:function(){return A.computedObjects.runGroup("total")}},"\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570"))}});case 13:case"end":return R.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"speedform-docs":e(21970)},renderOpts:{compile:function(){var l=M()(G()().mark(function a(){var w,u=arguments;return G()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(660).then(e.bind(e,7660));case 2:return y.abrupt("return",(w=y.sent).default.apply(w,u));case 3:case"end":return y.stop()}},a)}));function h(){return l.apply(this,arguments)}return h}()}}}},31992:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(46489),J={}},57190:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return U}});var K=e(29008),r=e.n(K),J=e(28633),j=e.n(J),T=e(70958),L=e.n(T),t=e(92379),G=e(63035),U={"docs-reactive-computed-sync-demo-0":{component:t.memo(t.lazy(L()(r()().mark(function M(){var d,O,p,l;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=a.sent,O=d.createStore,p={books:[{name:"\u5F20\u4E09",price:18,author:"tom",count:2,total:function(u){return u.price*u.count}},{name:"\u674E\u56DB",price:19,author:"jack",count:3,total:function(u){return u.price*u.count}}],total:function(u){return u.books.reduce(function(D,y){return D+y.total},0)}},l=O(p),a.abrupt("return",{default:function(){var u=l.useState(),D=j()(u,2),y=D[0],I=D[1];return t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"\u4E66\u540D"),t.createElement("th",null,"\u4F5C\u8005"),t.createElement("th",null,"\u5355\u4EF7"),t.createElement("th",null,"\u6570\u91CF"),t.createElement("th",null,"\u5C0F\u8BA1"))),t.createElement("tbody",null,y.books.map(function(A,N){return t.createElement("tr",{key:N},t.createElement("td",null,A.name),t.createElement("td",null,A.author),t.createElement("td",null,A.price),t.createElement("td",null,t.createElement("button",{onClick:function(){return l.state.books[N].count=l.state.books[N].count-1}},"-"),A.count,t.createElement("button",{onClick:function(){return l.state.books[N].count=l.state.books[N].count+1}},"+")),t.createElement("td",null,A.total))}),t.createElement("tr",null,t.createElement("td",{colSpan:4},"\u603B\u8BA1"),t.createElement("td",null,y.total))))}});case 7:case"end":return a.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-sync-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive';

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var M=L()(r()().mark(function O(){var p,l=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}}}},12655:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(5757),J={}},24968:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return U}});var K=e(29008),r=e.n(K),J=e(28633),j=e.n(J),T=e(70958),L=e.n(T),t=e(92379),G=e(85164),U={"docs-reactive-render-demo-0":{component:t.memo(t.lazy(L()(r()().mark(function M(){var d,O,p,l,h,a,w,u,D,y;return r()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.t.bind(e,92379,19));case 2:return d=A.sent,O=d.default,p=d.createContext,l=d.useContext,h=d.useState,A.next=9,Promise.resolve().then(e.bind(e,48398));case 9:return a=A.sent,w=a.Block,u=p({firstName:"Zhang",lastName:"Fisher",age:18}),D=O.memo(function(N){var R=l(u);return O.createElement(w,{name:"\u5B50\u7EC4\u4EF6:".concat(N.name)},O.createElement("span",null,"Hello :",R.firstName," ",R.lastName))}),y=0,A.abrupt("return",{default:function(){var R=h({firstName:"Zhang",lastName:"Fisher",age:18}),s=j()(R,2),c=s[0],n=s[1];return O.createElement(u.Provider,{value:c},O.createElement("div",null,"\u6839\u7EC4\u4EF6"),O.createElement("div",null,"Hello :",c.firstName," ",c.lastName),O.createElement("div",null,"Age :",c.age),O.createElement("button",{onClick:function(){n({firstName:"Zhang",lastName:"Fisher",age:++y})}},"+Age"),O.createElement(D,{name:"A"}),O.createElement(D,{name:"B"}))}});case 15:case"end":return A.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-render-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},react:{type:"NPM",value:"18.3.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{react:e(92379),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(r()().mark(function O(){var p,l=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}},"docs-reactive-render-demo-1":{component:t.memo(t.lazy(L()(r()().mark(function M(){var d,O,p,l,h,a,w,u,D,y,I;return r()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=N.sent,O=d.createStore,N.next=6,Promise.resolve().then(e.t.bind(e,92379,19));case 6:return p=N.sent,l=p.default,N.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return h=N.sent,a=h.Block,w={firstName:"Zhang",lastName:"Fisher",age:18},u=O(w),D=l.memo(function(R){var s=u.useState(),c=j()(s,2),n=c[0],x=c[1],E=n.firstName;return l.createElement(a,{name:"\u5B50\u7EC4\u4EF6:FirstName"},l.createElement("span",null,"Hello :",E))}),y=l.memo(function(R){var s=u.useState(),c=j()(s,2),n=c[0],x=c[1],E=n.lastName;return l.createElement(a,{name:"\u5B50\u7EC4\u4EF6:lastName"},l.createElement("span",null,"Hello :",E))}),I=0,N.abrupt("return",{default:function(){var s=u.useState(),c=j()(s,2),n=c[0],x=c[1];return l.createElement(l.Fragment,null,l.createElement("div",null,"\u6839\u7EC4\u4EF6"),l.createElement("div",null,"Hello :",n.firstName," ",n.lastName),l.createElement("div",null,"Age ",++I,":",n.age),l.createElement("button",{onClick:function(){return x(function(g){return g.age=g.age+1})}},"+Age"),l.createElement("button",{onClick:function(){return x(function(g){return g.firstName=g.firstName+"r"})}},"Change FirstName"),l.createElement(D,null),l.createElement(y,null))}});case 18:case"end":return N.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-render-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),react:e(92379),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(r()().mark(function O(){var p,l=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}},"docs-reactive-render-demo-2":{component:t.memo(t.lazy(L()(r()().mark(function M(){var d,O,p,l,h,a,w,u,D,y,I,A,N;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=s.sent,O=d.createStore,s.next=6,Promise.resolve().then(e.t.bind(e,92379,19));case 6:return p=s.sent,l=p.default,s.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return h=s.sent,a=h.Block,s.next=14,Promise.resolve().then(e.bind(e,13834));case 14:return w=s.sent,u=w.$,D={firstName:"Zhang",lastName:"Fisher",age:18},y=O(D),I=l.memo(function(c){return l.createElement(a,{name:"\u5B50\u7EC4\u4EF6:FirstName"},l.createElement("span",null,"Hello :",y.state.firstName," ",y.state.lastName,"(\u6CA1\u6709\u4F7F\u7528Signal)"))}),A=l.memo(function(c){return l.createElement(a,{name:"\u5B50\u7EC4\u4EF6:LastName"},l.createElement("span",null,"Hello :",u(y.state.firstName)," ",y.state.lastName))}),N=0,s.abrupt("return",{default:function(){return l.createElement(l.Fragment,null,l.createElement("div",null,"\u6839\u7EC4\u4EF6"),l.createElement("div",null,"Hello :",y.state.firstName," ",y.state.lastName),l.createElement("div",null,"Age ",++N,":",u(y.state.age)),l.createElement("button",{onClick:function(){return y.state.age=y.state.age+1}},"+Age"),l.createElement("button",{onClick:function(){return y.state.firstName=y.state.firstName+"r"}},"Change FirstName"),l.createElement(I,null),l.createElement(A,null))}});case 22:case"end":return s.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-render-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},helux:{type:"NPM",value:"4.3.2"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),react:e(92379),"@speedform/demo-components":e(48398),helux:e(13834)},renderOpts:{compile:function(){var M=L()(r()().mark(function O(){var p,l=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}}}},75158:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return U}});var K=e(29008),r=e.n(K),J=e(28633),j=e.n(J),T=e(70958),L=e.n(T),t=e(92379),G=e(90054),U={"docs-reactive-state-demo-0":{component:t.memo(t.lazy(L()(r()().mark(function M(){var d,O,p,l;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=a.sent,O=d.createStore,p={firstName:"Zhang",lastName:"Fisher",age:18},l=O(p),a.abrupt("return",{default:function(){var u=l.useState(),D=j()(u,2),y=D[0],I=D[1];return t.createElement("div",null,t.createElement("div",null,"Hello :",y.firstName," ",y.lastName),t.createElement("div",null,"Age :",y.age),t.createElement("button",{onClick:function(){return I(function(N){return N.age+=1})}},"+Age"))}});case 7:case"end":return a.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-state-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var M=L()(r()().mark(function O(){var p,l=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}},"docs-reactive-state-demo-1":{component:t.memo(t.lazy(L()(r()().mark(function M(){var d,O,p,l,h,a,w,u;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=y.sent,O=d.createStore,y.next=6,Promise.resolve().then(e.bind(e,48398));case 6:return p=y.sent,l=p.ColorBlock,h={firstName:"Zhang",lastName:"Fisher",fullName:function(A){return A.firstName+A.lastName}},a=O(h),w=t.memo(function(){var I=a.useState(function(R){return R.firstName}),A=j()(I,1),N=A[0];return t.createElement(l,{name:"FirstName",value:N})}),u=t.memo(function(){var I=a.useState(function(R){return R.lastName}),A=j()(I,1),N=A[0];return t.createElement(l,{name:"LastName",value:N})}),y.abrupt("return",{default:function(){var A=a.useState(function(g){return g.firstName},function(g,F){return g.firstName=F}),N=j()(A,2),R=N[0],s=N[1],c=a.useState(function(g){return g.fullName},function(g,F){var V=j()(F,2),X=V[0],Z=V[1];g.firstName=X,g.lastName=Z}),n=j()(c,2),x=n[0],E=n[1];return t.createElement("div",null,t.createElement(w,null),t.createElement(u,null),t.createElement("div",null,"FullName :",x),t.createElement("button",{onClick:function(){return s(R+"r")}},"change FirstName"),t.createElement("button",{onClick:function(){return E(["Hello","Voerkai18n"])}},"change FullName"))}});case 13:case"end":return y.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-state-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(r()().mark(function O(){var p,l=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}},"docs-reactive-state-demo-2":{component:t.memo(t.lazy(L()(r()().mark(function M(){var d,O,p,l,h,a;return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=u.sent,O=d.createStore,u.next=6,Promise.resolve().then(e.bind(e,13834));case 6:return p=u.sent,l=p.$,h={firstName:"Zhang",lastName:"Fisher",age:18},a=O(h),u.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement("div",null,"Hello :",a.state.firstName," ",a.state.lastName),t.createElement("div",null,"Age+Signal :",l(a.state.age)),t.createElement("div",null,"Age :",a.state.age),t.createElement("button",{onClick:function(){return a.state.age=a.state.age+1}},"+Age"))}});case 11:case"end":return u.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-state-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},helux:{type:"NPM",value:"4.3.2"}},entry:"index.tsx",description:"\u901A\u8FC7store.state.firstName\u76F4\u63A5\u8BFB\u53D6\u72B6\u6001,\u4E0D\u901A\u8FC7useState\u65B9\u6CD5",title:"\u8BFB\u53D6\u72B6\u6001"},context:{"@speedform/reactive":e(1808),helux:e(13834)},renderOpts:{compile:function(){var M=L()(r()().mark(function O(){var p,l=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}}}},21476:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(54862),J={}},53348:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(28794),J={}},66903:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return U}});var K=e(29008),r=e.n(K),J=e(28633),j=e.n(J),T=e(70958),L=e.n(T),t=e(92379),G=e(44834),U={"docs-reactive-watch-objects-demo-0":{component:t.memo(t.lazy(L()(r()().mark(function M(){var d,O,p,l,h,a,w,u,D;return r()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return w=function(N){return p(function(R,s){var c=s.state;return c.price*R},function(R){return R[R.length-1]==="count"},{initial:2,group:N})},I.next=3,Promise.resolve().then(e.bind(e,1808));case 3:return d=I.sent,O=d.createStore,p=d.watch,I.next=8,Promise.resolve().then(e.bind(e,48398));case 8:return l=I.sent,h=l.ColorBlock,a=l.Divider,u={bookName:"zhang",price:2,count:1,total1:w("a"),total2:w("a"),total3:w("b"),total4:w("b"),total5:w("b")},D=O({state:u}),globalThis.Store=D,I.abrupt("return",{default:function(){var N=D.useState(),R=j()(N,2),s=R[0],c=R[1];return typeof s.total1=="function"&&console.warn("state.total1 is function"),t.createElement("div",null,t.createElement("div",null,"bookName=",s.bookName),t.createElement("div",null,"price=",s.price),t.createElement("div",null,"count=",t.createElement("button",{onClick:function(){return c(function(x){return x.count=x.count-1})}},"-"),t.createElement("input",{value:s.count,onChange:D.sync(function(n){return n.count})}),t.createElement("button",{onClick:function(){return c(function(x){return x.count=x.count+1})}},"+")),t.createElement(a,{name:"A Group"}),t.createElement(h,{name:"Total-1",value:s.total1}),t.createElement(h,{name:"Total-2",value:s.total2}),t.createElement("button",{onClick:function(){return D.watchObjects.enableGroup("a",!0)}},"Enable A Group"),t.createElement("button",{onClick:function(){return D.watchObjects.enableGroup("a",!1)}},"Disable A Group"),t.createElement("div",null,"\u5F53\u7981\u7528A Group\u65F6\uFF0C\u4FEE\u6539count\u65F6\u4E0D\u4F1A\u5BFC\u81F4total\u53D8\u5316\uFF0C\u56E0\u4E3A\u8BE5\u7EC4\u88AB\u7981\u6B62\u6267\u884C\u4E86"),t.createElement(a,{name:"B Group"}),t.createElement(h,{name:"Total-3",value:s.total3}),t.createElement(h,{name:"Total-4",value:s.total4}),t.createElement(h,{name:"Total-5",value:s.total5}),t.createElement("button",{onClick:function(){return D.watchObjects.enableGroup("b",!0)}},"Enable B Group"),t.createElement("button",{onClick:function(){return D.watchObjects.enableGroup("b",!1)}},"Disable B Group"))}});case 15:case"end":return I.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-objects-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,watch } from "@speedform/reactive" 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(r()().mark(function O(){var p,l=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}}}},51088:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(3955),J={}},49056:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return U}});var K=e(29008),r=e.n(K),J=e(28633),j=e.n(J),T=e(70958),L=e.n(T),t=e(92379),G=e(7070),U={"docs-reactive-watch-demo-0":{component:t.memo(t.lazy(L()(r()().mark(function M(){var d,O,p,l,h;return r()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=w.sent,O=d.createStore,p=d.watch,l={orders:[{bookName:"SpeedForm Quick-Start",price:100,count:1,total:function(D){return D.price*D.count}},{bookName:"Helux",price:98,count:1,total:function(D){return D.price*D.count}}],total:p(function(u){return h.state.orders.reduce(function(D,y){return D+y.count*y.price},0)},function(u){return u[u.length-1]==="count"},{initial:198})},h=O({state:l},{singleton:!1}),w.abrupt("return",{default:function(){var D=h.useState(),y=j()(D,1),I=y[0];return t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"BookName"),t.createElement("th",null,"Price"),t.createElement("th",null,"Count"),t.createElement("th",null,"Total"))),t.createElement("tbody",null,I.orders.map(function(A,N){return t.createElement("tr",{key:N},t.createElement("td",null,A.bookName),t.createElement("td",null,A.price),t.createElement("td",null,t.createElement("input",{value:A.count,onChange:h.sync(function(R){return R.orders[N].count})})),t.createElement("td",null,A.total))}),t.createElement("tr",null,t.createElement("td",{colSpan:3},"Total"),t.createElement("td",null,I.total))))}});case 8:case"end":return w.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,watch } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808)},renderOpts:{compile:function(){var M=L()(r()().mark(function O(){var p,l=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}},"docs-reactive-watch-demo-1":{component:t.memo(t.lazy(L()(r()().mark(function M(){var d,O,p,l,h,a,w,u,D;return r()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=I.sent,O=d.createStore,p=d.computed,l=d.ComputedScopeRef,I.next=8,Promise.resolve().then(e.t.bind(e,92379,19));case 8:return h=I.sent,a=h.useEffect,w=h.useState,u={user:{firstName:"zhang",lastName:"fisher",fullName:p(function(){var A=L()(r()().mark(function N(R){var s,c,n;return r()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return s=j()(R,2),c=s[0],n=s[1],E.abrupt("return",c+n);case 2:case"end":return E.stop()}},N)}));return function(N){return A.apply(this,arguments)}}(),["user/firstName","user/lastName"],{scope:l.Depends})}},D=O({state:u}),I.abrupt("return",{default:function(){var N=D.useState(),R=j()(N,1),s=R[0],c=w(""),n=j()(c,2),x=n[0],E=n[1];return a(function(){var g=D.watch(function(F){E(F.map(function(V){return V.join("/")}).join(","))},["user/firstName","user/lastName"]);return g},[]),t.createElement("div",null,t.createElement("div",null,"watch: ",x),t.createElement("div",null,"firstName=",t.createElement("input",{value:s.user.firstName,onChange:D.sync(function(g){return g.user.firstName})})),t.createElement("div",null,"lastName=",t.createElement("input",{value:s.user.lastName,onChange:D.sync(function(g){return g.user.lastName})})),t.createElement("div",null,"fullName=",s.user.fullName.result))}});case 14:case"end":return I.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef } from "@speedform/reactive" 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),react:e(92379)},renderOpts:{compile:function(){var M=L()(r()().mark(function O(){var p,l=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}},"docs-reactive-watch-demo-2":{component:t.memo(t.lazy(L()(r()().mark(function M(){var d,O,p,l,h,a,w,u;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,1808));case 2:return d=y.sent,O=d.createStore,p=d.computed,l=d.ComputedScopeRef,y.next=8,Promise.resolve().then(e.t.bind(e,92379,19));case 8:return h=y.sent,a=h.useState,w={user:{firstName:"zhang",lastName:"fisher",fullName:p(function(){var I=L()(r()().mark(function A(N){var R,s,c;return r()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return R=j()(N,2),s=R[0],c=R[1],x.abrupt("return",s+c);case 2:case"end":return x.stop()}},A)}));return function(A){return I.apply(this,arguments)}}(),["user/firstName","user/lastName"],{scope:l.Depends})}},u=O({state:w}),y.abrupt("return",{default:function(){var A=u.useState(),N=j()(A,1),R=N[0],s=a(""),c=j()(s,2),n=c[0],x=c[1],E=a("user/firstName"),g=j()(E,2),F=g[0],V=g[1],X=a(""),Z=j()(X,2),re=Z[0],te=Z[1];return u.useWatch(function(de,oe){return x(oe.join("/")),te(de),de},F,{id:"use1"}),t.createElement("div",null,t.createElement("div",null,"watch for: ",F),t.createElement("div",null,"Watch value:",re),t.createElement("div",null,"firstName=",t.createElement("input",{value:R.user.firstName,onChange:u.sync(function(de){return de.user.firstName})})),t.createElement("div",null,"lastName=",t.createElement("input",{value:R.user.lastName,onChange:u.sync(function(de){return de.user.lastName})})),t.createElement("div",null,"fullName=",R.user.fullName.result),t.createElement("button",{onClick:function(){return V("user/firstName")}},"watch firstName"),t.createElement("button",{onClick:function(){return V("user/lastName")}},"watch lastName"))}});case 13:case"end":return y.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef } from "@speedform/reactive" 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@speedform/reactive":e(1808),react:e(92379)},renderOpts:{compile:function(){var M=L()(r()().mark(function O(){var p,l=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(660).then(e.bind(e,7660));case 2:return a.abrupt("return",(p=a.sent).default.apply(p,l));case 3:case"end":return a.stop()}},O)}));function d(){return M.apply(this,arguments)}return d}()}}}},93079:function(Q,i,e){e.r(i),e.d(i,{demos:function(){return J}});var K=e(92379),r=e(64100),J={}},21970:function(Q,i,e){e.r(i),e.d(i,{api:function(){return K},delay:function(){return U},forms:function(){return r}});var K={};e.r(K),e.d(K,{getProjects:function(){return t}});var r={};e.r(r),e.d(r,{Network:function(){return h},schema:function(){return l}});var J=e(29008),j=e.n(J),T=e(70958),L=e.n(T);function t(a){return G.apply(this,arguments)}function G(){return G=L()(j()().mark(function a(w){var u,D,y;return j()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch(w);case 2:if(u=A.sent,!u.ok){A.next=11;break}return A.next=6,u.json();case 6:return D=A.sent,y=D.map(function(N){return{name:N.name,url:N.html_url,description:N.description,stars:N.stargazers_count}}),A.abrupt("return",y);case 11:throw new Error("".concat(u.status," - ").concat(u.statusText));case 12:case"end":return A.stop()}},a)})),G.apply(this,arguments)}var U=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(u){setTimeout(u,w)})},M=e(1808),d=e(6244),O=e(99166),p=e.n(O),l={title:"\u7F51\u7EDC\u914D\u7F6E",fields:{title:{value:"React-Helux-Form",placeholder:"\u8F93\u5165\u7F51\u7EDC\u914D\u7F6E\u540D\u79F0",title:"\u7F51\u7EDC\u540D\u79F0",validate:function(w){return w.length>3}},interface:{value:"wifi",title:"\u7F51\u5361\u7C7B\u578B",select:function(){return[{value:"wifi",title:"\u65E0\u7EBF\u7F51\u5361"},{value:"ethernet",title:"\u6709\u7EBF\u7F51\u5361"}]}},ip:{value:"1.1.1.1",title:"IP\u5730\u5740",validate:(0,M.computed)(function(){var a=L()(j()().mark(function w(u){return j()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,U(2e3);case 2:return y.abrupt("return",p().isIP(String(u)));case 3:case"end":return y.stop()}},w)}));return function(w){return a.apply(this,arguments)}}(),[],{async:!0})},gateway:{value:"1.1.1.1",title:"\u7F51\u5173\u5730\u5740",validate:function(w){return p().isIP(w)}},dhcp:{enable:{title:"\u81EA\u52A8\u83B7\u53D6IP\u5730\u5740",value:!0},start:{title:"\u8D77\u59CB\u5730\u5740",value:"192.168.1.1",enable:(0,M.computed)(function(a){return a.enable.value},{scope:M.ComputedScopeRef.Parent}),validate:function(w){return p().isIP(w)}},end:{title:"\u7ED3\u675F\u5730\u5740",value:"192.168.1.100",enable:(0,M.computed)(function(a){return a.dhcp.enable.value},{scope:M.ComputedScopeRef.Root}),validate:function(w){return p().isIP(w)}}},wifi:{title:"\u65E0\u7EBF\u914D\u7F6E",visible:(0,M.computed)(function(a){return a.interface.value==="wifi"},{scope:M.ComputedScopeRef.Root}),ssid:{value:"fast",placeholder:"\u65E0\u7EBF\u7F51\u7EDC",validate:function(w){return w.length>3}},password:{value:"123",placeholder:"\u8F93\u5165\u65E0\u7EBF\u5BC6\u7801",help:"\u5BC6\u7801\u957F\u5EA6\u5E94\u4E0D\u5C0F\u4E8E6\u4F4D",enable:function(w){return w.interface.value==="wifi"},validate:function(w){return w.length>=6}}}}},h=(0,d.createForm)(l,{debug:!0});globalThis.Network=h},48398:function(Q,i,e){e.r(i),e.d(i,{Block:function(){return D},Box:function(){return J},Button:function(){return L},Card:function(){return t},Col:function(){return y},ColorBlock:function(){return u},Divider:function(){return h},Field:function(){return l},Input:function(){return A},JsonViewer:function(){return O},Loading:function(){return T},Row:function(){return I},Tips:function(){return N},ValidResult:function(){return p}});var K=e(92379),r=e(651),J=function(s){var c=s.title,n=s.enable,x=n===void 0?!0:n,E=s.visible,g=E===void 0?!0:E;return(0,r.jsxs)("div",{style:{display:g?"flex":"none",position:"relative",flexDirection:"column",padding:"8px",margin:"16px 4px 4px 4px",boxSizing:"border-box",border:"1px solid #bbb"},children:[(0,r.jsx)("span",{style:{position:"absolute",padding:"2px 4px 2px 4px",top:"-16px",background:"white",left:"8px",color:x?"#bbb":"gray"},children:c||""}),s.children]})},j=e(11363),T=function(s){var c=s.size,n=c===void 0?20:c,x=s.visible,E=x===void 0?!0:x,g=s.color,F=s.tips,V=F===void 0?"loading...":F;return(0,r.jsx)("span",{title:V,style:{display:E?"inline-block":"none",cursor:"pointer",padding:"2px"},children:(0,r.jsx)(j.Z1,{width:n,height:n,color:g})})},L=function(s){var c=s.visible,n=c===void 0?!0:c,x=s.loading,E=s.timeout,g=E===void 0?0:E,F=s.progress,V=F===void 0?0:F,X=s.cancel,Z=s.onClick,re=(0,K.useRef)(null);return(0,K.useEffect)(function(){re.current&&(re.current.style.display=n?"flex":"none")}),(0,r.jsxs)("div",{ref:re,className:"speed-button",onClick:Z,style:{padding:"8px",margin:"4px",cursor:"pointer",display:n?"flex":"none",flexDirection:"row",borderRadius:"6px",alignItems:"center",border:"1px solid #bbb",background:"#eee",textAlign:"center"},children:[x?(0,r.jsx)(T,{}):null,(0,r.jsx)("div",{style:{flexGrow:1,backgroundColor:"transparent"},children:s.children}),g>0?(0,r.jsx)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:g}):"",V>0?(0,r.jsxs)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:[V,"%"]}):"",s.error?(0,r.jsx)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:s.error}):"",s.loading&&typeof X=="function"?(0,r.jsx)("button",{onClick:X,style:{padding:"4px",color:"red",margin:"2px",fontSize:"10px",backgroundColor:"#eee",borderRadius:"4px",cursor:"pointer"},children:" \u5355\u51FB\u53D6\u6D88"}):""]})},t=function(s){var c=s.title,n=s.enable,x=n===void 0?!0:n,E=s.visible,g=E===void 0?!0:E,F=s.buttons,V=F===void 0?[]:F,X=Array.isArray(s.children)?s.children:[s.children];return(0,r.jsxs)("div",{className:"card",style:{border:"1px solid #ccc",background:x?"white":"gray",margin:"8px",display:g?"flex":"none",flexDirection:"column"},children:[(0,r.jsxs)("div",{className:"header",style:{display:"flex",flexDirection:"row",backgroundColor:"#eee",padding:"6px",lineHeight:"150%"},children:[(0,r.jsx)("span",{style:{flexGrow:1,color:x?"#222":"gray"},children:c}),(0,r.jsx)("span",{style:{},children:V.map(function(Z,re){return(0,r.jsx)("span",{className:"button",style:{padding:"4px",margin:"4px",cursor:"pointer"},onClick:Z.onClick,children:Z.title},re)})})]}),(0,r.jsx)("div",{style:{padding:"12px"},children:X.map(function(Z,re){return X.length>1&&re==X.length-1&&Z.classList&&Z.classList.contains("footer")?(0,r.jsx)("div",{className:"footer",style:{borderTop:"1px solid #ccc",padding:"8px"},children:Z}):Z})})]})},G=e(24325),U=e.n(G),M=e(82719),d={scheme:"monokai",author:"wimer hazenberg (http://www.monokai.nl)",base00:"white",base01:"#383830",base02:"#49483e",base03:"#75715e",base04:"#a59f85",base05:"#f8f8f2",base06:"#f5f4f1",base07:"#f9f8f5",base08:"#f92672",base09:"#fd971f",base0A:"#f4bf75",base0B:"#444444",base0C:"#a1efe4",base0D:"#018ba7",base0E:"#81a9ff",base0F:"#cc6633"},O=function(s){return(0,r.jsx)(M.L,U()(U()({getItemString:function(){return""},hideRoot:!0,shouldExpandNodeInitially:function(){return!0}},s),{},{theme:d}))},p=function(s){var c=s.validate,n=s.help;if(c!=null){var x=typeof c!="boolean",E=x?c==null?void 0:c.result:c,g=x?c==null?void 0:c.loading:!1,F=x?c==null?void 0:c.error:n;return(0,r.jsxs)("span",{style:{color:"red",display:g||!E?"flex":"none"},children:[(0,r.jsx)(T,{visible:g,tips:"\u6B63\u5728\u9A8C\u8BC1..."}),!g&&(E?"":F)]})}},l=function(s){var c=s.enable,n=c===void 0?!0:c,x=s.visible,E=x===void 0?!0:x,g=s.label,F=g===void 0?"":g,V=s.children,X=V===void 0?"":V,Z=s.memo;return(0,r.jsxs)("div",{className:"field",style:{position:"relative",display:E===!1?"none":"flex",boxSizing:"border-box",flexDirection:"row",width:"100%",alignItems:"center",padding:"8px"},children:[(0,r.jsxs)("label",{className:"field-label",style:{minWidth:"160px",fontWeight:"bold",color:n===!1?"gray":"inherit"},children:[F,":"]}),(0,r.jsxs)("span",{className:"field-value",style:{flexGrow:1,display:"flex",flexDirection:"row",alignItems:"center",color:n===!1?"gray":"inherit"},children:[typeof X=="function"?"":X,Z&&(0,r.jsx)("span",{style:{color:"gray"},children:Z})]}),(0,r.jsx)(p,U()({},s))]})},h=function(s){var c=s.title,n=s.visible,x=n===void 0?!0:n;return(0,r.jsx)("div",{style:{height:"36px",borderBottom:"1px solid #eee",marginBottom:"16px",display:x?"flex":"none"},children:(0,r.jsx)("h4",{style:{position:"absolute",background:"white",padding:"4px",color:"#bbb"},children:c})})},a=e(47851);function w(){var R="".concat(Math.floor(Math.random()*16777215).toString(16));return"#".concat(R.padStart(6,"0"))}var u=K.memo(function(R){var s=(0,K.useRef)(0),c=R.name,n=R.value,x=n===void 0?"":n,E=w(),g="block";return a.rgb(E).isDark()?g="white":g="block",(0,K.useEffect)(function(){s.current++}),(0,r.jsxs)("div",U()(U()({},R),{},{style:U()(U()({backgroundColor:E,padding:"4px",color:g,display:"flex"},R.style),{},{alignItems:"center"}),children:[(0,r.jsxs)("span",{style:{flexGrow:1},children:[c?(0,r.jsxs)("span",{style:{padding:"2px"},children:[c,"="]}):"",(0,r.jsxs)("span",{style:{padding:"2px"},children:[String(x),R.children]})]}),(0,r.jsx)("span",{style:{fontSize:"8px"},children:s.current})]}))},function(R,s){return R.name===s.name&&R.value===s.value}),D=function(s){var c=(0,K.useRef)(0),n=s.name,x=s.value,E=x===void 0?"":x,g=w(),F="block";return a.rgb(g).isDark()?F="white":F="block",(0,K.useEffect)(function(){c.current++}),(0,r.jsxs)("div",U()(U()({},s),{},{style:U()(U()({backgroundColor:g,padding:"4px",color:F,display:"flex"},s.style),{},{alignItems:"center"}),children:[(0,r.jsxs)("span",{style:{flexGrow:1},children:[n?(0,r.jsxs)("span",{style:{padding:"2px"},children:[n,"="]}):"",(0,r.jsxs)("span",{style:{padding:"2px"},children:[String(E),s.children]})]}),(0,r.jsx)("span",{style:{fontSize:"8px"},children:c.current})]}))},y=function(s){var c=s.visible,n=c===void 0?!0:c,x=s.border,E=x===void 0?!0:x,g=s.padding,F=g===void 0?"8px":g,V=s.margin,X=V===void 0?"0px":V,Z=s.grow,re=Z===void 0?1:Z;return(0,r.jsx)("div",{className:"layout-col",style:{display:n?"flex":"none",position:"relative",flexDirection:"column",padding:F,flexGrow:re,margin:X,boxSizing:"border-box",border:E?"1px solid #eee":"none"},children:s.children})},I=function(s){var c=s.visible,n=c===void 0?!0:c,x=s.border,E=x===void 0?!0:x,g=s.padding,F=g===void 0?"8px":g,V=s.grow,X=V===void 0?1:V;return(0,r.jsx)("div",{className:"layout-row",style:{display:n?"flex":"none",position:"relative",flexDirection:"row",flexGrow:X,padding:F,margin:"4px",boxSizing:"border-box",border:E?"1px solid #eee":"none"},children:s.children})},A=function(s){var c=s.name,n=s.enable,x=n===void 0?!0:n,E=s.type,g=E===void 0?"text":E,F=s.validate,V=F===void 0?!0:F,X=s.visible,Z=X===void 0?!0:X,re=s.placeholder,te=s.onChange,de=te===void 0?function(){}:te,oe=s.value,ve=s.style;return(0,r.jsx)("input",{style:Object.assign({border:V===!1?"1px solid red":"1px solid #bbb",borderRadius:"4px",background:x?"white":"gray",margin:"4px",padding:"8px",display:Z?"block":"none"},ve),type:g,name:c,placeholder:re,value:oe!=null?oe:"",readOnly:!x,onChange:de})},N=function(s){var c=s.text,n=s.color,x=n===void 0?"#ff6c00":n,E=typeof x=="string"?{default:x}:Object.assign({default:""},x),g=c.replace(/\{\s?(.*?)\s?\}/gm,function(F,V){return"<span style='color: ".concat(V in E?E[V]:E.default,"'>").concat(V,"</span>")}).replaceAll("undefined","\u7A7A\u503C");return(0,r.jsx)("div",{style:{backgroundColor:"#fffcda",borderLeft:"2px solid rgb(253, 138, 6)",boxSizing:"border-box",padding:"8px",margin:"4px"},children:(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:g}})})}},6244:function(Q,i,e){e.r(i),e.d(i,{$:function(){return c.$},ActionChildren:function(){return Ae},ComputedObjects:function(){return c.ComputedObjects},ComputedScopeRef:function(){return c.ComputedScopeRef},FieldChildren:function(){return F},OBJECT_PATH_DELIMITER:function(){return c.OBJECT_PATH_DELIMITER},SKIP_COMPUTED:function(){return c.SKIP_COMPUTED},ValidationError:function(){return we},WatchObject:function(){return c.WatchObject},WatchObjects:function(){return c.WatchObjects},action:function(){return Ee},asyncComputedObject:function(){return c.asyncComputedObject},computed:function(){return c.computed},createActionComponent:function(){return xe},createAsyncComputedMutate:function(){return c.createAsyncComputedMutate},createComputedMutate:function(){return c.createComputedMutate},createFieldComponent:function(){return V},createFieldGroupComponent:function(){return ie},createForm:function(){return f},createObject:function(){return c.createObject},createStore:function(){return c.createStore},createUseAction:function(){return Re},createUseWatch:function(){return c.createUseWatch},createWatch:function(){return c.createWatch},defaultFormProps:function(){return et},getAction:function(){return _e},getFieldName:function(){return v},getSnap:function(){return c.getSnap},getVal:function(){return c.getVal},getValueByPath:function(){return c.getValueByPath},installComputed:function(){return c.installComputed},installWatch:function(){return c.installWatch},isIncludePath:function(){return c.isIncludePath},isSkipComputed:function(){return c.isSkipComputed},markRaw:function(){return c.markRaw},setAsyncComputedObject:function(){return c.setAsyncComputedObject},setVal:function(){return c.setVal},skipComputed:function(){return c.skipComputed},submit:function(){return lt},useLatest:function(){return $},useStore:function(){return c.useStore},useUnmount:function(){return B},useUnmountedRef:function(){return z},watch:function(){return c.watch}});var K=e(12027),r=e.n(K),J=e(28633),j=e.n(J),T=e(24325),L=e.n(T),t=e(92379),G=e(34180),U=e.n(G),M=e(59166);function d(o){var S=_typeof(o);return o==null||S=="boolean"||S=="number"||S=="string"||S==null}function O(o){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,C=0,P,_=!0,k=function W(){if(P==null){_=!0,clearTimeout(C),C=0;return}try{var Y=P;P=void 0,o.apply(void 0,r()(Y)),C=setTimeout(function(){return W()},S)}finally{}};return function(){for(var W=arguments.length,Y=new Array(W),H=0;H<W;H++)Y[H]=arguments[H];if(S==0)return o.apply(void 0,Y);P=Y,(_||C==0)&&(_=!1,k())}}function p(o,S){var C={};for(var P in o)o[P]!==S[P]&&(C[P]=S[P]);return C}function l(){return Math.random().toString(36).substring(2)}function h(o){return new Proxy({},{get:function(C,P,_){return o()[P]}})}function a(o){return(0,M.P)(o)&&"execute"in o&&(0,M.P)(o.execute)&&"loading"in o.execute}function w(o){return(0,M.P)(o)&&"value"in o}function u(o){return Array.isArray(o)}function D(o){return(0,M.P)(o)&&!w(o)&&!a(o)}function y(){return!1}var I="fields",A="actions",N="validate",R="$submit",s="$reset",c=e(1808),n=e(651);function x(o,S,C,P){return Object.assign({name:o,help:"",initial:void 0,oldValue:void 0,visible:!0,required:!1,readonly:!1,validate:null,enable:!0,placeholder:""},L()(L()({},S),{},{sync:C,update:P}))}function E(o,S){var C=(0,t.useRef)(null);return(0,t.useCallback)(function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;if(C.current==null){var _=o.sync(S);C.current=P==0?_:O(_,P)}return C.current},[])}function g(o,S){var C=(0,t.useRef)(null),P=(0,t.useState)(0),_=j()(P,2),k=_[0],W=_[1];return(0,t.useCallback)(function(Y,H){var ae=Object.assign({debounce:0},H),ne=ae.debounce;if(C.current==null||k!==ne){k!==ne&&ne>0&&W(ne);var q=function(ee){return function(ue){S(typeof ee=="function"?function(se){return ee.call(se,se.fields)}:function(se){return(0,c.setVal)(se,o,ee)}),typeof ue.preventDefault=="function"&&ue.preventDefault()}};C.current=ne>0?q:O(q,ne)}return C.current(Y)},[])}var F=t.memo(function(o){return(0,n.jsx)(n.Fragment,{children:typeof o.children=="function"&&o.children(o.fieldProps)})},function(o,S){return Object.entries(o.fieldProps).every(function(C){var P=j()(C,2),_=P[0],k=P[1];return["children","sync","update"].includes(_)?!0:k===S.fieldProps[_]})});function V(o,S){return t.memo(function(C){var P=C.name,_=Array.isArray(P)?P:P.split("."),k=[I].concat(r()(_)),W=[I].concat(r()(_));_.push("value"),W.push("value");var Y=o.useState(function(ue){return(0,c.getVal)(ue,k)}),H=j()(Y,2),ae=H[0],ne=H[1],q=g(W,ne),le=E(o,W),ee=x(S.getFieldName(_),ae,le,q);return C.render?(0,n.jsx)(F,{fieldProps:ee,children:C.render}):Array.isArray(C.children)?C.children.map(function(ue,se){return(0,n.jsx)(F,{fieldProps:ee,children:ue},se)}):(0,n.jsx)(F,{fieldProps:ee,children:C.children})},function(C,P){return C.name===P.name})}var X=e(29008),Z=e.n(X),re=e(70958),te=e.n(re),de=e(58048);function oe(o,S){return(0,t.useCallback)(function(C){S(function(P){C.call(P,(0,c.getVal)(P,o))})},[])}function ve(o,S,C){return(0,de.w)({name:o,help:"",visible:!0,required:!1,readonly:!1,validate:!0,enable:!0,update:C},S)}function ie(o,S){return t.memo(function(C){var P=C.name,_=o.useState(),k=j()(_,2),W=k[0],Y=k[1],H=Array.isArray(P)?P:P.split("."),ae=["fields"].concat(r()(H)),ne=(0,c.getVal)(W,ae),q=oe(ae,Y),le=(0,t.useState)(function(){return ve(S.getFieldName(H),ne,q)}),ee=j()(le,2),ue=ee[0],se=ee[1];return(0,t.useEffect)(function(){se(ve(S.getFieldName(H),ne,q))},[ne]),Array.isArray(C.children)?C.children.map(function(Se){return Se(ue)}):C.children(ue)},function(C,P){return C.name===P.name})}var rt=e(6597);function me(o){return o.value}function Fe(o){var S={};return Object.entries(o).forEach(function(C){var P=j()(C,2),_=P[0],k=P[1];if(typeof _=="string")if(w(k))S[_]=me(k);else if(D(k)){var W=Fe(k);W&&Object.keys(W).length>0&&(S[_]=W)}else u(k)&&(S[_]=Ie(k))}),S}function Ie(o){var S=[];return o.forEach(function(C){w(C)?S.push(me(C)):D(C)?S.push(Fe(C)):u(C)?S.push(Ie(C)):S.push(C)}),S}function pe(o,S,C){var P=Object.assign({},C),_=P.onNotMatch,k=_===void 0?function(){}:_;function W(Y,H){var ae=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];Object.entries(Y).forEach(function(ne){var q=j()(ne,2),le=q[0],ee=q[1];if(typeof le=="string"){var ue=[].concat(r()(ae),[le]);if(le in H){var se=H[le];w(se)?se.value=ee:D(se)?(0,M.P)(ee)?W(ee,se,ue):k(ue):u(se)?Array.isArray(ee)?W(ee,se):k(ue):H[le]=ee}else k(ue)}})}W(o,S)}function Ot(o,S){var C=new FormData,P=Object.assign({getItemName:function(Y){return Y.join(".")}},S),_=P.getItemName;function k(W,Y){if(Y!=null){var H=_?_(W):W.join(".");Array.isArray(Y)?Y.forEach(function(ae,ne){k([].concat(_toConsumableArray(W),[String(ne)]),ae)}):isPlainObject(Y)?Object.entries(Y).forEach(function(ae){var ne=_slicedToArray(ae,2),q=ne[0],le=ne[1];k([].concat(_toConsumableArray(W),[q]),le)}):C.append(H,Y)}}return k([],o),C}function ot(o,S){return function(P,_){var k=Object.assign({validate:!0},_);try{o.enableComputed(!1),pe(P,o.state.fields),o.setState(function(W){W.dirty=!1,W.validate=null})}catch(W){console.error(W)}finally{o.enableComputed(!0),k!=null&&k.validate&&o.computedObjects.runGroup(N)}}}function Ke(o,S){return Fe(o)}function ge(o,S){return function(P){var _=Object.assign({},P);return Ke((0,c.getSnap)(o.state).fields)}}function _e(o,S){return function(){var C=te()(Z()().mark(function P(_){var k;return Z()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return k=Object.assign({},S,_),Array.isArray(k.scope)&&k.scope.length>0&&k.scope[0]!==I&&k.scope.unshift(I),Y.next=4,o.execute.run(k);case 4:if(!o.execute.error){Y.next=8;break}throw new Error(o.execute.error);case 8:return Y.abrupt("return",o.execute.result);case 9:case"end":return Y.stop()}},P)}));return function(P){return C.apply(this,arguments)}}()}function Me(o,S){return(0,t.useCallback)(function(C){var P=Object.assign({},{noReentry:!0,preventDefault:!0},S,C),_=_e(o,P);return function(k){_(),k&&P.preventDefault&&typeof k.preventDefault=="function"&&k.preventDefault()}},[o])}function dt(o,S){return(0,t.useCallback)(function(C){var P=(0,c.getValueByPath)(o,[].concat(r()(Array.isArray(S)?S:S.split(".")),["execute"]));P.cancel(),C&&typeof C.preventDefault=="function"&&C.preventDefault()},[])}function je(o,S,C,P){return Object.assign({help:"",title:"",visible:!0,enable:!0},(0,rt.C)(o,"execute"),L()(L()({},o.execute),{},{run:S,cancel:C,ref:P}))}var Ae=t.memo(function(o){return(0,n.jsx)(n.Fragment,{children:typeof o.children=="function"&&o.children(o.actionProps)})},function(o,S){return Object.entries(o.actionProps).every(function(C){var P=j()(C,2),_=P[0],k=P[1];return["children","run","cancel"].includes(_)?!0:k===S.actionProps[_]})});function xe(o){function S(C){var P=o.useState(),_=j()(P,1),k=_[0],W=C.name;W.includes(".")||(W="actions.".concat(W));var Y=(0,c.getValueByPath)(k,W,".");if(Y==null)return o.options.log("Action ".concat(W," is not defined"),"error"),(0,n.jsx)(n.Fragment,{children:C.children});var H=Me(Y,C),ae=dt(k,W),ne=(0,t.useRef)(null),q=je(Y,H,ae,ne);if(typeof C.render=="function")return(0,n.jsx)(Ae,{actionProps:q,children:C.render});if(C.children)return Array.isArray(C.children)?C.children.map(function(le,ee){return(0,n.jsx)(Ae,{actionProps:q,children:le},ee)}):(0,n.jsx)(Ae,{actionProps:q,children:C.children})}return t.memo(S,function(C,P){return C.name===P.name})}function Ee(o,S){return(0,c.computed)(function(){var C=te()(Z()().mark(function P(_,k){var W;return Z()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return W=Ke(Object.assign({},_)),H.next=3,o(W,k);case 3:return H.abrupt("return",H.sent);case 4:case"end":return H.stop()}},P)}));return function(P,_){return C.apply(this,arguments)}}(),[],S)}function lt(o,S){return Ee(function(){var C=te()(Z()().mark(function P(_,k){var W;return Z()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return W=new FormData,H.next=3,o(W,k);case 3:return H.abrupt("return",H.sent);case 4:case"end":return H.stop()}},P)}));return function(P,_){return C.apply(this,arguments)}}(),S)}function Re(o){return function(C,P){var _=(0,t.useRef)(),k=o.useState(),W=j()(k,2),Y=W[0],H=W[1],ae=(0,t.useState)(function(){return P!=null&&P.name?P==null?void 0:P.name:l()}),ne=j()(ae,1),q=ne[0];return _.current||(q in Y.actions||H(function(le){le.actions[q]={execute:Ee(C,P)}}),_.current=q),(0,c.getValueByPath)(Y,["actions",q]).execute}}var ut=e(20842),Ne=e(14582),st=e.n(Ne),ct=e(6270),it=e.n(ct),pt=e(93949),vt=e.n(pt),$e=e(77701),mt=e.n($e),ke=e(28249),It=e.n(ke),Ue=e(5672),Te=e.n(Ue),we=function(o){mt()(C,o);var S=It()(C);function C(P){var _;return vt()(this,C),_=S.call(this,P),_.name="ValidationError",_}return it()(C)}(Te()(Error));function Ge(o){return o.length>1&&o[0]==I&&(o[o.length-1]==="validate"||o.length>=2&&o[o.length-2]=="validate"&&o[o.length-1]=="result")&&!(o.length==2&&o[1]=="validate")&&!(o.length==3&&o[1]=="validate"&&o[2]=="result")}function Ve(o){var S=Object.assign({},o),C=S.entry;return(0,c.watch)(function(P,_,k){if((0,c.isIncludePath)(C||k.path,P)){if(typeof _=="boolean"){var W=P.join(c.OBJECT_PATH_DELIMITER);_?delete k.cache[W]:k.cache[W]=_}return Object.keys(k.cache).length==0}},function(P){return Ge(P)},{initial:!0})}function Pt(o,S){var C=typeof o=="function"?o():o;if(!C)throw new ValidationError(typeof S=="function"?S():S)}function ze(o){return function(){var S=te()(Z()().mark(function C(P){var _,k,W,Y,H,ae;return Z()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:if(Array.isArray(P)&&P.length>0){_=P.join(c.OBJECT_PATH_DELIMITER),k=st()(o.computedObjects);try{for(k.s();!(W=k.n()).done;)Y=j()(W.value,2),H=Y[0],ae=Y[1],H.startsWith(_)&&ae.run()}catch(le){k.e(le)}finally{k.f()}}else o.computedObjects.runGroup(N);case 1:case"end":return q.stop()}},C)}));return function(C){return S.apply(this,arguments)}}()}var Ze=e(92980);function He(o){var S={};return Object.entries(o||{}).forEach(function(C){var P=_slicedToArray(C,2),_=P[0],k=P[1];isFieldValue(k)||isFieldGroup(k)||isFieldList(k)||(S[_]=k)}),S}function ft(o){return Object.assign({type:"submit",help:"",title:"",dirty:!1,validate:!0,visible:!0,enable:!0,readOnly:!0},He(o))}var Ce=null,Je=(0,Ze.zo)(function(o,S){var C,P=S.className;return(0,n.jsx)("input",{className:P+" "+o.className,style:o.style,type:(C=o.type)!==null&&C!==void 0?C:"submit",value:o.title})},{cursor:"pointer",width:"100%",display:"block",boxSizing:"border-box",padding:"8px",borderRadius:"8px",transition:"filter 0.3s","&:hover":{filter:"brightness(1.2)"},"&.speedform-submit":{backgroundColor:"#54b2ff",color:"white",border:"1px solid #1e5786"}});function Qe(o,S,C){var P=Object.assign({preventDefault:!1},S);function _(k){var W=o.useState(),Y=_slicedToArray(W,1),H=Y[0],ae=k.scope,ne=getValueByPath(H,ae),q=ft(ne),le=typeof k.render=="function"?1:Array.isArray(k.children)?2:typeof k.children=="function"?3:0;return _jsxs(_Fragment,{children:[_jsx(Je,_objectSpread({visible:le==0},P)),le===1?_jsx(Ce,{submitProps:q,children:k.render}):le===2?k.children.map(function(ee,ue){return _jsx(Ce,{submitProps:q,children:ee},ue)}):_jsx(Ce,{submitProps:q,children:k.children})]})}return React.memo(_,function(k,W){return k.scope===W.scope})}function Xe(o){var S=xe(o);return function(C){var P=(0,t.useRef)(null),_=function(W){W.preventDefault()};return(0,n.jsx)(S,L()(L()({},C),{},{name:R,children:function(W){var Y=W.loading,H=W.title;return(0,n.jsxs)("div",{className:"speedform-submit",children:[(0,n.jsx)("input",{ref:P,type:"submit",value:C.label||H}),(0,n.jsxs)("button",{type:"submit",onClick:_,children:[C.label||H," "]}),(0,n.jsx)("span",{children:Y?"\u63D0\u4EA4\u4E2D2":""})]})}}))}}var Be={title:"\u63D0\u4EA4",help:"",tips:"\u63D0\u4EA4",visible:!0,enable:!0,validate:!0,readonly:!1,execute:function(){var o=te()(Z()().mark(function C(){return Z()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:case"end":return _.stop()}},C)}));function S(){return o.apply(this,arguments)}return S}()};function Ye(o,S){var C=xe(o);return function(P){return(0,n.jsx)(C,L()(L()({},P),{},{name:s,children:function(k){var W=k.loading,Y=k.title;return(0,n.jsxs)("div",{className:"speedform-reset",children:[(0,n.jsx)("input",{type:"reset",value:P.label||Y}),(0,n.jsx)("span",{children:W?"\u63D0\u4EA4\u4E2D":"\u5DF2\u63D0\u4EA4"})]})}}))}}var qe={title:"\u91CD\u7F6E",help:"",tips:"\u91CD\u7F6E",visible:!0,enable:!0,validate:!0,readonly:!1,execute:function(){var o=te()(Z()().mark(function C(){return Z()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:case"end":return _.stop()}},C)}));function S(){return o.apply(this,arguments)}return S}()};function xt(o){return o.length>1&&o[0]==I&&o[o.length-1]=="value"}function ht(o){return(0,c.watch)(function(S,C,P){if((0,c.isIncludePath)(o||P.path,S)&&!P.value)return!0},function(S){return xt(S)},{initial:!1})}var et={name:"SpeedForm",title:"SpeedForm",help:"",tips:"",status:"idle",dirty:ht(["fields"]),validate:Ve({entry:["fields"]}),readonly:!1,enable:!0,visible:!0,fields:{},actions:{$submit:Be,$reset:qe}};function yt(o,S){o.length>=2&&o[0]==I&&o[o.length-1]==N&&(S.scope||(S.scope="./value"),S.depends||(S.depends=[]),S.depends.push([].concat(r()(o.slice(0,-1)),["value"])),S.initial=null,S.group=N,S.enable=!0)}function bt(o){return(0,ut.w)(o,et)}function tt(o,S){o.length>1&&o[o.length-1]=="execute"&&(S.immediate=!1,S.scope?Array.isArray(S.scope)&&S.scope.length>0&&S.scope[0]!=I&&S.scope.unshift(I):S.scope=[I],S.noReentry=!0)}function gt(o,S){o.length>0&&o[0]==I&&S.depends&&S.depends.forEach(function(C,P){Array.isArray(C)&&C.length>0&&C[0]!=I?S.depends[P]=[I].concat(r()(C)):typeof C=="string"&&!C.startsWith("".concat(I,"."))&&(S.depends[P]="".concat(I,".").concat(C))})}function m(o){return function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;o.enableComputed(S)}}function v(o){return o.length>0?o[o.length-1]==="value"?o.slice(0,-1).join("."):o.join("."):""}function f(o,S){var C=(0,de.w)({getFieldName:v,validAt:"once"},S);bt(o);var P=(0,c.createStore)(o,{debug:C.debug,scope:function(){return[I]},onCreateComputed:function(W,Y,H){yt(W,H),gt(W,H),tt(W,H)},onComputedDraft:function(W,Y){var H=Y.computedType,ae=Y.valuePath;if(H==="Computed"&&ae.length>0&&ae[0]==I)return W.fields}});P.on("computed:created",function(k){Ge(k.path)&&(k.options.enable=C.validAt==="once")});var _=P;return{state:_.state,useState:_.useState,setState:_.setState,Form:b(_,C),Field:V(_,C),Group:ie(_,C),Action:xe(_),Submit:Xe(_),Reset:Ye(_,C),useAction:Re(_),fields:h(function(){return _.state.fields}),actions:h(function(){return _.state.actions}),getAction:_e,freeze:m(P),load:ot(_,C),getValues:ge(_,C),computedObjects:_.computedObjects,watchObjects:_.watchObjects,validate:ze(_)}}function b(o,S){return t.forwardRef(function(C,P){var _=C.children,k=(0,t.useCallback)(function(){var Y=te()(Z()().mark(function H(ae){return Z()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:if(S.validAt!=="submit"){q.next=3;break}return q.next=3,o.computedObjects.runGroup(N);case 3:debugger;return q.next=6,o.computedObjects.runGroup(N);case 6:if(ae.preventDefault(),!o.state.validate){q.next=11;break}return q.abrupt("return",!0);case 11:return q.abrupt("return",!1);case 12:case"end":return q.stop()}},H)}));return function(H){return Y.apply(this,arguments)}}(),[]),W=(0,t.useCallback)(function(Y){},[]);return(0,n.jsx)("form",L()(L()({ref:P,className:"speedform"},C),{},{onSubmit:k,onReset:W,children:_}))})}function $(o){var S=(0,t.useRef)(o);return S.current=o,S}function B(o){y()&&typeof o!="function"&&console.error("useUnmount expected parameter is a function, got ".concat(U()(o)));var S=$(o);(0,t.useEffect)(function(){return function(){S.current()}},[])}function z(){var o=(0,t.useRef)(!1);return(0,t.useEffect)(function(){return o.current=!1,function(){o.current=!0}},[]),o}},1808:function(Q,i,e){e.r(i),e.d(i,{$:function(){return pe.$},ComputedObjects:function(){return Ze},ComputedScopeRef:function(){return K},OBJECT_PATH_DELIMITER:function(){return T},SKIP_COMPUTED:function(){return L},WatchObject:function(){return Ye},WatchObjects:function(){return qe},asyncComputedObject:function(){return Ae},computed:function(){return Te},createAsyncComputedMutate:function(){return je},createComputedMutate:function(){return oe},createObject:function(){return pe.share},createStore:function(){return tt},createUseWatch:function(){return Xe},createWatch:function(){return Ce},getSnap:function(){return pe.getSnap},getVal:function(){return p},getValueByPath:function(){return R},installComputed:function(){return Ee},installWatch:function(){return Qe},isIncludePath:function(){return y},isSkipComputed:function(){return t},markRaw:function(){return pe.markRaw},setAsyncComputedObject:function(){return ot},setVal:function(){return A},skipComputed:function(){return N},useStore:function(){return gt},watch:function(){return ft}});var K=function(m){return m.Root="root",m.Current="current",m.Parent="parent",m.Depends="depends",m.Self="self",m}({});function r(m){return(m||["ROOT"]).map(function(v){return Array.isArray(v)?v.join("."):v}).join("_")}function J(m,v){var f="";return v.id?f=v.id:f=r(m),f}function j(m){return m instanceof Error?m:new Error(m)}var T=".",L=Symbol("SKIP_COMPUTED");function t(m){return m[L]===!0}var G=e(12027),U=e.n(G);function M(m,v,f){if(!Array.isArray(m))throw new Error("curPath must be an array");return v==="self"?m:v==="root"?[]:v==="parent"?m.slice(0,-2):v==="current"?m.slice(0,-1):typeof v=="string"?v.startsWith("./")?[].concat(U()(m.slice(0,-1)),U()(v.slice(2).split(T))):v.startsWith("../")?M(m.slice(0,-1),v.slice(3),!0):v.startsWith("/")?(v=v.replace(/^(\/)*/,""),v.split(T)):f?[].concat(U()(m.slice(0,-1)),U()(v.split(T))):U()(v.split(T)):Array.isArray(v)?v:m}function d(m,v){var f=m.get(v);if(f!==void 0)return f;var b=m.get(Number(v)||v);if(b!==void 0)return b}function O(m){return toString.call(m)==="[object Map]"}function p(m,v){if(v.length===0)return m;var f,b=m;return v.forEach(function($){f=O(b)?d(b,$):b[$],b=f}),f}function l(m,v,f){return m.map(function(b){return p(v,M(f,b))})}function h(m){return(m||[]).map(function(v){return Array.isArray(v)?v:typeof v=="string"?["/","./","../"].some(function(f){return v.startsWith(f)})?v:v.includes(T)?v.split(T):v.split("."):[]})}var a=e(34180),w=e.n(a);function u(m){return _typeof(m)=="object"&&m.hasOwnProperty("__COMPUTED__")&&["async","sync"].includes(m.__COMPUTED__)&&m.hasOwnProperty("fn")&&typeof m.fn=="function"&&m.hasOwnProperty("options")&&_typeof(m.options)=="object"}function D(m){return _typeof(m)=="object"&&["result","loading","timeout","retry","run"].every(function(v){return m.hasOwnProperty(v)})}function y(m,v){return m.length>v.length?!1:m.every(function(f,b){return f===v[b]})}function I(m){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"log",f=typeof m=="function"?m():m instanceof Error?m.stack:m;try{var b;(b=console)[v].apply(b,["[@speedform/reactive] "].concat(U()(Array.isArray(f)?f:[f])))}catch($){}}function A(m,v,f){var b=m,$=v.length-1;v.forEach(function(B,z){var o=O(b);if(z===$){o?b.set(B,f):b[B]=f;return}var S=o?d(b,B):b[B];b=S})}function N(m){return m[L]=!0,m}function R(m,v){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:T,b=[];try{return typeof v=="function"&&(v=v.call(m,m)),b=Array.isArray(v)?v:typeof v=="string"?v.split(f):[],b.length>0?p(m,b):m}catch($){return m}}function s(m,v){function f(b,$){for(var B in b){var z=b[B];typeof v=="function"&&v({value:z,key:B,parent:b,path:$.concat(B)}),w()(z)==="object"&&f(z,$.concat(B))}}f(m,[])}function c(m,v,f){var b=v==null?f:v;if(typeof b=="function")try{b=b.call(m,m)}catch($){}return b==null?f==null?K.Current:f:b}function n(m,v,f){var b=f.draft,$=f.dependValues,B=f.valuePath,z=f.computedType,o=b;if(typeof m.options.onComputedDraft=="function"){var S=m.options.onComputedDraft.call(b,b,{computedType:z,valuePath:B});S!==void 0&&(o=S)}var C=B.length>=1?B.slice(0,B.length-1):[],P=c(b,v.scope,m.options.scope&&m.options.scope(z));try{if(P===K.Current)return R(b,C);if(P===K.Parent)return R(b,B.slice(0,B.length-2));if(P===K.Root)return o;if(P===K.Depends)return Array.isArray($)?$.map(function(W){return typeof W=="function"?W():W}):[];if(typeof P=="string")return R(b,M(B,P));if(Array.isArray(P))if(P.length>0&&P[0].startsWith("@")){var _=R(b,[].concat(U()(P[0].substring(1).split(T)),U()(P.slice(1))));return R(b,_)}else return R(b,P);else if(typeof P=="number"){var k=P>B.length-2?B.length-P-1:0;return R(b,B.slice(0,k))}else return b}catch(W){return b}}var x=e(93949),E=e.n(x),g=e(6270),F=e.n(g),V=e(29861),X=e.n(V),Z=function(){function m(v,f,b,$){E()(this,m),X()(this,"options",void 0),this.store=v,this.selfReactiveable=f,this.path=b,this.options=Object.assign({},$)}return F()(m,[{key:"id",get:function(){return this.options.id}},{key:"enable",get:function(){return this.options.enable},set:function(f){this.options.enable=f}},{key:"group",get:function(){return this.options.group}},{key:"async",get:function(){return this.options.async}},{key:"depends",get:function(){return this.options.depends}},{key:"value",get:function(){var f;return p(this.selfReactiveable?(f=this.selfReactiveable)===null||f===void 0?void 0:f.state:this.store.state,this.path)}},{key:"run",value:function(f){var b;return(b=this.store.reactiveable)===null||b===void 0?void 0:b.runComputed(this.id,f)}},{key:"cancel",value:function(){if(this.async)this.value.cancel();else throw new Error("cancel only works for async computed")}}]),m}();function re(m,v,f,b){var $=f.options.onCreateComputed;if(typeof $=="function"&&typeof v=="function"){var B=$.call(f,m,v,b);b.scope||(b.scope=K.Current),typeof B=="function"&&(v=B)}}function te(m,v,f){return Object.assign({loading:!1,timeout:0,retry:0,error:null,result:void 0,progress:0,run:m.reactiveable.markRaw(N(function(b){return m.reactiveable.runComputed(v,Object.assign({},b))})),cancel:m.reactiveable.markRaw(N(function(){console.log("cancel")}))},f)}function de(m,v,f){var b=m.valuePath,$=m.id,B=m.desc,z=m.resultPath,o=m.getter,S=v.selfReactiveable;f.reactiveable.createComputed({onComputed:function(P){var _=P.draft,k=P.values,W=P.options;if(!f.options.enableComputed||!v.enable&&(W==null?void 0:W.enable)!==!0){f.options.log("Sync computed <".concat(B,"> is disabled"),"warn");return}f.options.log("Run sync computed for : ".concat(B)),m.dependValues=k;var Y=Object.assign({},v,W),H=_,ae=n(f,Y,{draft:_,dependValues:k,valuePath:b,computedType:"Computed"}),ne=v.initial;try{ne=o.call(H,ae),f.emit("computed:done",{path:b,id:$,value:ne})}catch(q){f.emit("computed:error",{path:b,id:$,error:q})}S?S.setState(function(q){A(q,z,ne)}):A(_,z,ne)},options:v})}function oe(m,v){var f=m.path,b=m.parent,$=m.value,B=$(),z=B.getter,o=B.options;re(f,z,v,o);var S=o.selfReactiveable,C=f,P=J(f,o),_=f.join(T);v.options.log("Create sync computed: ".concat(_));var k={id:P,desc:_,resultPath:C,isComputedRunning:!1,dependValues:[],valuePath:f,deps:[],getter:z};de(k,o,v),S||m.replaceValue(p(v.state,f));var W=new Z(v,S,f,o);return o.save&&v.computedObjects.set(P,W),W}var ve=e(29008),ie=e.n(ve),rt=e(70958),me=e.n(rt),Fe=e(28633),Ie=e.n(Fe),pe=e(13834),Ot=e(56041);function ot(m,v,f,b,$){var B=te(m,b,$),z=p(v,f);Object.assign(z,B,$)}function Ke(m,v,f){var b=Object.assign({},f),$=b.max,B=$===void 0?100:$,z=b.min,o=z===void 0?0:z,S=b.value,C=S===void 0?0:S;return m(function(P){return A(P,[].concat(U()(v),["progress"]),C)}),{value:function(_){_>B&&(_=B),_<o&&(_=o),m(function(k){return A(k,[].concat(U()(v),["progress"]),_)})},end:function(){this.value(B)}}}function ge(m,v,f){m(function(b){Object.entries(f).forEach(function($){var B=Ie()($,2),z=B[0],o=B[1];A(b,[].concat(U()(v),[z]),o)})})}function _e(m,v,f,b){return Me.apply(this,arguments)}function Me(){return Me=me()(ie()().mark(function m(v,f,b,$){var B,z,o,S,C,P,_,k,W,Y,H,ae,ne,q,le,ee,ue,se,Se,At,Le,fe,he,Et,Rt,ye;return ie()().wrap(function(De){for(;;)switch(De.prev=De.next){case 0:B=f.id,z=f.valuePath,o=f.getter,S=f.resultPath,C=f.dependValues,P=b.timeout,_=P===void 0?0:P,k=b.retry,W=k===void 0?[0,0]:k,Y=b.selfReactiveable,H=Y?Y.setState.bind(Y):$.setState,ae=v,ne=n($,b,{draft:v,dependValues:C,valuePath:z,computedType:"Computed"}),q=Array.isArray(W)?W:[Number(W),0],le=Ie()(q,2),ee=le[0],ue=le[1],Se=new AbortController,At={onTimeout:function(be){return se=be},getProgressbar:function(be){return Ke(H,z,be)},getSnap:function(be){return(0,pe.getSnap)(be,!1)},abortSignal:Se.signal,cancel:Se.abort},Le=!1,ge(H,S,{cancel:(0,pe.markRaw)(N(function(){return Se.abort()}))}),Se.signal.addEventListener("abort",function(){Le=!0}),fe=!1,he=!1,Rt=ie()().mark(function at(){var be,nt,Oe,wt,Nt,Ct,We,St,Pe;return ie()().wrap(function(ce){for(;;)switch(ce.prev=ce.next){case 0:if(fe=!1,he=!1,Oe={},ce.prev=3,wt=Array.isArray(_)?_:[_,0],Nt=Ie()(wt,2),Ct=Nt[0],We=Ct===void 0?0:Ct,St=Nt[1],Pe=St===void 0?0:St,ge(H,S,{loading:!0,error:null,retry:ye>0?ee-ye:0,timeout:Pe>1?Pe:We,progress:0}),!Le){ce.next=8;break}throw new Error("Abort");case 8:return We>0&&(be=setTimeout(function(){he=!0,typeof se=="function"&&se(),fe||(clearInterval(nt),ge(H,S,{loading:!1,error:"TIMEOUT",timeout:0}))},We),Pe>1&&(nt=setInterval(function(){ge(H,S,{timeout:Pe--}),Pe===0&&clearInterval(nt)},We/(Pe+1)))),ce.next=11,o.call(ae,ne,At);case 11:if(Et=ce.sent,!Le){ce.next=14;break}throw new Error("Abort");case 14:he||Object.assign(Oe,{result:Et,error:null,timeout:0}),ce.next=22;break;case 17:ce.prev=17,ce.t0=ce.catch(3),fe=!0,he||Object.assign(Oe,{error:j(ce.t0).message,timeout:0}),ee>0&&Object.assign(Oe,{retry:ee-ye});case 22:return ce.prev=22,clearTimeout(be),clearInterval(nt),(!fe||ye==ee)&&Object.assign(Oe,{loading:!1}),!fe&&!he&&Object.assign(Oe,{error:null}),ge(H,S,Oe),ce.finish(22);case 29:if(!fe){ce.next=33;break}if(!(ee>0&&ue>0&&ye<ee)){ce.next=33;break}return ce.next=33,(0,Ot.g)(ue);case 33:case"end":return ce.stop()}},at,null,[[3,17,22,29]])}),ye=0;case 15:if(!(ye<ee+1)){De.next=20;break}return De.delegateYield(Rt(),"t0",17);case 17:ye++,De.next=15;break;case 20:Le||he?$.emit("computed:cancel",{path:z,id:B,reason:he?"timeout":"abort"}):fe?$.emit("computed:error",{path:z,id:B,error:fe}):$.emit("computed:done",{path:z,id:B,value:Et});case 21:case"end":return De.stop()}},m)})),Me.apply(this,arguments)}function dt(m,v,f){var b=m.valuePath,$=m.id,B=m.deps,z=m.desc,o=v.selfReactiveable,S=v.initial,C=v.noReentry;f.reactiveable.createAsyncComputed({depends:function(_){return l(B,_,b)},initial:function(_){o?o.setState(function(k){A(k,b,te(f,$,{result:S}))}):A(_,b,te(f,$,{result:S}))},onComputed:function(){var P=me()(ie()().mark(function k(W){var Y,H,ae,ne,q;return ie()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:if(Y=W.draft,H=W.values,ae=W.options,!(!f.options.enableComputed||!v.enable&&(ae==null?void 0:ae.enable)!==!0)){ee.next=4;break}return f.options.log("Async computed <".concat(z,"> is disabled"),"warn"),ee.abrupt("return");case 4:if(f.options.log("Run async computed for : ".concat(z)),ne=Object.assign({},v,ae),!(C&&m.isComputedRunning)){ee.next=10;break}return f.options.debug&&f.options.log("Reentry async computed: ".concat(z),"warn"),f.emit("computed:cancel",{path:b,id:$,reason:"reentry"}),ee.abrupt("return");case 10:return m.isComputedRunning=!0,m.dependValues=H,ee.prev=12,ee.next=15,_e(Y,m,ne,f);case 15:return q=ee.sent,ee.abrupt("return",q);case 17:return ee.prev=17,m.isComputedRunning=!1,ee.finish(17);case 20:case"end":return ee.stop()}},k,null,[[12,,17,20]])}));function _(k){return P.apply(this,arguments)}return _}(),options:v})}function je(m,v){var f=m.path,b=m.parent,$=m.value,B=$(),z=B.getter,o=B.options;o.async=!0,re(f,z,v,o);var S=o.depends,C=S===void 0?[]:S,P=o.selfReactiveable,_=f;C.length==0&&v.options.log("async computed <".concat(f.join("."),"> should specify depends"),"warn");var k=J(f,o);o.id=k;var W="".concat(k,"_").concat(f.join(T));v.options.log("Create async computed: ".concat(W," (depends=").concat(C.length==0?"None":r(C),")"));var Y={id:k,desc:W,resultPath:_,isComputedRunning:!1,dependValues:[],valuePath:f,deps:C,getter:z};dt(Y,o,v),P||m.replaceValue(p(v.state,f));var H=new Z(v,P,f,o);return o.save&&v.computedObjects.set(k,H),H}function Ae(m){return Object.assign({loading:!1,timeout:0,retry:0,error:null,result:void 0,progress:0,run:(0,pe.markRaw)(N(function(v){})),cancel:(0,pe.markRaw)(N(function(){}))},m)}var xe=e(36711);function Ee(m,v){var f=m.value,b;return f.__COMPUTED__=="async"?b=je(m,v):f.__COMPUTED__=="sync"?b=oe(m,v):(0,xe.$)(f)?(m.value=function(){return{getter:f,options:{depends:[],initial:void 0,immediate:!0,enable:!0}}},b=je(m,v)):(m.value=function(){return{getter:f,options:{initial:void 0,enable:!0}}},b=oe(m,v)),b&&setTimeout(function(){v.emit("computed:created",b)}),b}var lt=e(14582),Re=e.n(lt),ut=e(28810),Ne=e.n(ut),st=e(48510),ct=e.n(st),it=e(30790),pt=e.n(it),vt=e(77701),$e=e.n(vt),mt=e(28249),ke=e.n(mt),It=e(5672),Ue=e.n(It);function Te(m,v,f){if(typeof m!="function")throw new Error("computed getter must be a function");var b=[],$={async:!1,enable:!0,timeout:0,depends:[],immediate:!0,save:!0};if(arguments.length==1)b=[];else if(arguments.length==2)if(Array.isArray(arguments[1]))b=arguments[1];else if(w()(arguments[1])=="object")Object.assign($,arguments[1]);else throw new Error("invalid arguments");else arguments.length>=3&&(b=arguments[1],Object.assign($,arguments[2]));var B=$.async===!0||(0,xe.$)(m)||arguments.length>=2&&Array.isArray(v);$.async=B,$.depends=h(b);var z=function(){return{getter:m,options:$}};return z.__COMPUTED__=B?"async":"sync",z}function we(){return Math.random().toString(36).slice(2)}var Ge=function(){function m(v,f){E()(this,m)}return F()(m,[{key:"state",get:function(){throw new Error("state not implemented.")}},{key:"useState",value:function(f){throw new Error("useState not implemented.")}},{key:"setState",value:function(f){throw new Error("setState not implemented.")}},{key:"createAsyncComputed",value:function(f){throw new Error("createAsyncComputed not implemented.")}},{key:"createComputed",value:function(f){throw new Error("createComputed not implemented.")}},{key:"runComputed",value:function(f,b){throw new Error("runComputed not implemented.")}},{key:"sync",value:function(f){throw new Error("sync not implemented.")}},{key:"markRaw",value:function(f){throw new Error("makeRaw not implemented.")}},{key:"createWatch",value:function(f,b){throw new Error("createWatch not implemented.")}}]),m}(),Ve=function(m){$e()(f,m);var v=ke()(f);function f(b,$){var B,z;return E()(this,f),z=v.call(this,b,$),X()(Ne()(z),"_stateCtx",void 0),z._stateCtx=(0,pe.sharex)(b,{stopArrDep:!1,moduleName:(B=$==null?void 0:$.id)!==null&&B!==void 0?B:we(),onRead:function(S){$!=null&&$.onRead&&$.onRead({path:S.fullKeyPath,value:S.value,parent:S.parent,replaceValue:S.replaceValue})}}),z}return F()(f,[{key:"state",get:function(){return this._stateCtx.reactive}},{key:"useState",value:function($){var B=this._stateCtx.useState(),z=Ie()(B,2),o=z[0],S=z[1],C=typeof $=="function"?$(o):o;return[C,S]}},{key:"setState",value:function($){this._stateCtx.setState($)}},{key:"sync",value:function($){return this._stateCtx.sync($)}},{key:"createAsyncComputed",value:function($){var B=$.initial,z=$.onComputed,o=$.depends,S=$.options;return this._stateCtx.mutate({deps:function(P){return typeof o=="function"?o(P):null},fn:function(P,_){_.isFirstCall&&typeof B=="function"&&B(P,_)},task:function(){var C=me()(ie()().mark(function _(k){var W,Y,H,ae;return ie()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:if(W=k.draft,Y=k.setState,H=k.input,ae=k.extraArgs,typeof B!="function"){q.next=3;break}return q.abrupt("return",z({draft:W,setState:Y,values:H,options:Object.assign({},ae)}));case 3:case"end":return q.stop()}},_)}));function P(_){return C.apply(this,arguments)}return P}(),immediate:S.immediate,desc:S.id,checkDeadCycle:!1}),S.id}},{key:"createComputed",value:function($){var B=$.onComputed,z=$.options;return this._stateCtx.mutate({fn:function(S,C){var P=C.input;typeof B=="function"&&B({draft:S,values:P})},task:function(){var o=me()(ie()().mark(function C(P){var _,k,W;return ie()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:_=P.draft,k=P.input,W=P.extraArgs,typeof B=="function"&&B({draft:_,values:k,options:W});case 2:case"end":return H.stop()}},C)}));function S(C){return o.apply(this,arguments)}return S}(),desc:z.id,checkDeadCycle:!1}),z.id}},{key:"runComputed",value:function($,B){var z={desc:$,extraArgs:B};return this._stateCtx.runMutateTask(z)}},{key:"markRaw",value:function($){return(0,pe.markRaw)($)}},{key:"createWatch",value:function($,B){var z=this,o=(0,pe.watch)(function(C){var P=C.triggerReasons,_=P.map(function(k){return k.keyPath});$(_)},function(){return(B==null?void 0:B.length)==0?[z._stateCtx.state]:B==null?void 0:B.map(function(C){return R(z._stateCtx.state,C)})}),S=o.unwatch;return S}}]),f}(Ge),Pt=e(59166);function ze(m){function v(f,b,$){var B=Object.assign({id:we(),save:!1},(0,Pt.P)(arguments[1])?arguments[1]:arguments[2]);B.depends=Array.isArray(arguments[1])?arguments[1]:[];var z=B.async===!0||(0,xe.$)(f)||Array.isArray(arguments[1]);B.selfReactiveable=new Ve({value:z?te(m,B.id,{}):B.initial});var o;z?o={path:["value"],parent:null,value:Te(f,B.depends,B)}:o={path:["value"],parent:null,value:Te(f,B)};var S=Ee(o,m);return S}return v}var Ze=function(m){$e()(f,m);var v=ke()(f);function f(b){var $;return E()(this,f),$=v.call(this),X()(Ne()($),"_createComputed",void 0),$.store=b,$}return F()(f,[{key:"runGroup",value:function(){var b=me()(ie()().mark(function B(z,o){return ie()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.abrupt("return",Promise.all(U()(this.values()).filter(function(P){return P.group==z}).map(function(P){return P.async,P.run(o)})));case 1:case"end":return C.stop()}},B,this)}));function $(B,z){return b.apply(this,arguments)}return $}()},{key:"enableGroup",value:function(){var b=me()(ie()().mark(function B(z){var o,S,C;return ie()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:o=Re()(this.values());try{for(o.s();!(S=o.n()).done;)C=S.value,C.options.enable=z}catch(k){o.e(k)}finally{o.f()}case 2:case"end":return _.stop()}},B,this)}));function $(B){return b.apply(this,arguments)}return $}()},{key:"delete",value:function($){return ct()(pt()(f.prototype),"delete",this).call(this,$)}},{key:"create",get:function(){return this._createComputed||(this._createComputed=ze(this.store)),this._createComputed}}]),f}(Ue()(Map));function He(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return typeof m=="function"?m:typeof m=="string"?function(v){return r(v)==r(m.split(T))}:Array.isArray(m)?m.length===0?function(){return!0}:function(v){return m.map(function(f){return typeof f=="string"?f.split(T):Array.isArray(f)?f:[String(f)]}).some(function(f){return r(v)==r(f)})}:function(){return!1}}function ft(m,v,f){var b=Object.assign({depends:He(v),enable:!0},f),$=function(){return{listener:m,options:b}};return $.__COMPUTED__="watch",$}function Ce(m){return function(v,f){if(f=h(f),f.length===0)return m.reactiveable.createWatch(v);if(f.some(function(b){return typeof b=="string"&&b.startsWith(".")}))throw new Error("watch depends can not start with '.'");return m.reactiveable.createWatch(v,f)}}var Je=e(92379);function Qe(m,v){v.options.log("install watch for <".concat(m.path.length==0?"Dynamic":m.path.join(T),">"));var f=m.value();f.options.path=m.path;var b=v.watchObjects.add(f),$=f.options.context;return $?$.setState(function(B){B.value=f.options.initial}):(m.replaceValue(f.options.initial),v.setState(function(B){A(B,m.path,f.options.initial)})),b}function Xe(m){return function(v,f,b){(0,Je.useEffect)(function(){var $={path:["value"],parent:void 0,value:function(){var o={listener:v,options:Object.assign({depends:He(f),context:(0,pe.sharex)({value:0}),selfPath:["value"],initial:0,enable:!0,scope:K.Depends},b)};return o}},B=Qe($,m);return function(){m.watchObjects.delete(B.id)}},[f])}}function Be(m,v){if(m===v)return!0;if(m==null||v==null||w()(m)!==w()(v))return!1;if(w()(m)==="object"){if(Array.isArray(m)&&Array.isArray(v))return m.length!==v.length?!1:m.every(function(b,$){return Be(b,v[$])});if(!Array.isArray(m)&&!Array.isArray(v)){var f=Object.keys(m);return f.length!==Object.keys(v).length?!1:f.every(function(b){return Be(m[b],v[b])})}else return!1}return!1}var Ye=function(){function m(v,f){if(E()(this,m),X()(this,"_cache",void 0),X()(this,"_listener",void 0),X()(this,"_options",void 0),this.store=v,this._options=Object.assign({enable:!0,selfPath:[],group:void 0,context:void 0,initial:void 0},f.options),typeof this._options.depends!="function")throw new Error("watch options.depends must be a function");if(!this._options.id){var b=this._options.path;this._options.id=this._options.id||this._options.context?we():r(b)}this._listener=f.listener}return F()(m,[{key:"id",get:function(){return this._options.id}},{key:"options",get:function(){return this._options}},{key:"path",get:function(){return this._options.path}},{key:"depends",get:function(){return this._options.depends}},{key:"enable",get:function(){return this._options.enable},set:function(f){this._options.enable=f}},{key:"cache",get:function(){return this._cache||(this._cache={}),this._cache}},{key:"value",get:function(){var f=this._options.context?this._options.context:this.store.state;return p((0,pe.getSnap)(f),this.path)}},{key:"getName",value:function(){return this._options.context?this.id:this.path.join(T)}},{key:"isDepends",value:function(f,b){return Be(f,this.path)?!1:this.depends(f,b)}},{key:"reset",value:function(){this._cache={}}},{key:"run",value:function(f,b){var $=this;if(!this.enable){this.store.options.log("WatchObject <".concat(this.getName(),"> is disabled"));return}try{var B=this._listener.call(this,f,b,this);B!==void 0&&(this._options.context?this._options.context.setState(function(z){z.value=B}):this.store.setState(function(z){A(z,$.path,B)}))}catch(z){}}}]),m}(),qe=function(m){$e()(f,m);var v=ke()(f);function f(b){var $;return E()(this,f),$=v.call(this),X()(Ne()($),"_off",void 0),X()(Ne()($),"_enable",!0),$.store=b,b.on("created",$.onStateCreated.bind(Ne()($))),$}return F()(f,[{key:"onStateCreated",value:function(){this.createWacher()}},{key:"enable",get:function(){return this._enable},set:function($){this._enable=$}},{key:"createWacher",value:function(){var $=this,B=this.store.reactiveable.createWatch(function(z){$._enable&&z.forEach(function(o){var S=p($.store.state,o),C=Re()($.values()),P;try{for(C.s();!(P=C.n()).done;){var _=P.value;_.isDepends(o,S)&&_.run(o,S)}}catch(k){C.e(k)}finally{C.f()}})},[]);this._off=B}},{key:"reset",value:function(){this._off&&this._off(),this.createWacher()}},{key:"add",value:function($){var B=new Ye(this.store,$);return this.set(B.id,B),B}},{key:"enableGroup",value:function($){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,z=Re()(this.values()),o;try{for(z.s();!(o=z.n()).done;){var S=o.value;S.options.group==$&&(S.options.enable=B)}}catch(C){z.e(C)}finally{z.f()}}}]),f}(Ue()(Map));function xt(m,v){var f=m.path,b=m.value,$=r(f);typeof b=="function"&&!v._replacedKeys[$]&&!t(b)&&(v._replacedKeys[$]=!0,b.__COMPUTED__=="watch"?Qe(m,v):Ee(m,v))}function ht(m){return function(v,f){var b=m.reactiveable.useState.bind(m.reactiveable);if(v==null)return b();var $=b(),B=Ie()($,2),z=B[0],o=B[1],S=v(z),C=o;return typeof f=="function"&&(C=function(_){o(function(k){f.call(k,k,_)})}),[S,C]}}function et(m){return function(v){m.reactiveable.setState(function(f){v(f)})}}var yt=e(24222);function bt(m){var v=(0,yt.Z)();m._emitter=v,m.on=v.on,m.off=v.off,m.emit=v.emit,m.once=function(f,b){var $=function B(z){try{b(z)}finally{v.off(f,B)}};v.on(f,$)}}function tt(m,v){var f=Object.assign({id:we(),debug:!0,immediate:!1,enableComputed:!0,scope:function(){return K.Current}},v);f.log=function(){f.debug&&I.apply(void 0,arguments)};var b={options:f,_replacedKeys:{}};return bt(b),b.computedObjects=new Ze(b),b.watchObjects=new qe(b),b.reactiveable=new Ve(m,{id:f.id,onRead:function(B){xt(B,b)}}),b.state=b.reactiveable.state,b.emit("created"),b.useState=ht(b),b.setState=et(b),b.enableComputed=function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return b.options.enableComputed=$},b.sync=b.reactiveable.sync.bind(b.reactiveable),b.watch=Ce(b),b.useWatch=Xe(b),b.watch=Ce(b),b.createComputed=ze(b),f.immediate&&s(b.state),b}function gt(m,v){var f=(0,Je.useState)(function(){return tt(m,Object.assign({immediate:!0},v))}),b=Ie()(f,1),$=b[0];return $}},20043:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(24908);const r=[{value:"This is a API example.",paraId:0}]},78282:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(78719);const r=[]},41987:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(58839);const r=[]},58425:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(43230);const r=[]},55481:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(64010);const r=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0}]},26708:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(90938);const r=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0}]},91561:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(97278);const r=[]},39508:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(83975);const r=[]},76567:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(82376);const r=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0}]},1607:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(59147);const r=[{value:"\u8868\u5355\u52A8\u4F5C\u7528\u6765\u5B9A\u4E49\u8868\u5355\u7684\u63D0\u4EA4\u3001\u91CD\u7F6E,\u6216\u8005\u4EFB\u610F\u884C\u4E3A\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8868\u5355\u52A8\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u901A\u4FD7\u5730\u8BF4\uFF0C\u8868\u5355\u52A8\u4F5C\u5C31\u662F\u58F0\u660E\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u5BF9\u8868\u5355\u6570\u636E\u8FDB\u884C\u5904\u7406\u3002",paraId:1,tocIndex:0},{value:"\u5728\u8868\u5355\u7684",paraId:2,tocIndex:1},{value:"actions",paraId:2,tocIndex:1},{value:"\u4E2D\u5B9A\u4E49\u8868\u5355\u52A8\u4F5C\uFF0C",paraId:2,tocIndex:1},{value:"actions",paraId:2,tocIndex:1},{value:"\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0Caction\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A\u3002",paraId:2,tocIndex:1},{value:`export interface FormActionDefine<Scope extends Dict=Dict,Result =any>{
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

`,paraId:4,tocIndex:1},{value:"\u8BF4\u660E",paraId:5,tocIndex:1},{value:"\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u8868\u5355",paraId:6,tocIndex:1},{value:"action",paraId:6,tocIndex:1},{value:"\u58F0\u660E\u5728",paraId:6,tocIndex:1},{value:"actions",paraId:6,tocIndex:1},{value:"\u3002",paraId:6,tocIndex:1},{value:"\u6BCF\u4E2A",paraId:6,tocIndex:1},{value:"Action",paraId:6,tocIndex:1},{value:"\u5747\u53EF\u4EE5\u6307\u5B9A",paraId:6,tocIndex:1},{value:"scope",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"title",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"help",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"tips",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"visible",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"enable",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"count",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"execute",paraId:6,tocIndex:1},{value:"\u7B49\u5C5E\u6027\uFF0C\u9664\u4E86",paraId:6,tocIndex:1},{value:"execute",paraId:6,tocIndex:1},{value:"\u5916\uFF0C\u5176\u4ED6\u5747\u662F\u53EF\u9009\u7684\u3002",paraId:6,tocIndex:1},{value:"\u6BCF\u4E2A",paraId:7,tocIndex:2},{value:"Action",paraId:7,tocIndex:2},{value:"\u5747\u53EF\u4EE5\u6307\u5B9A",paraId:7,tocIndex:2},{value:"execute",paraId:7,tocIndex:2},{value:"\u5C5E\u6027\uFF0C\u7528\u6765\u6267\u884C\u52A8\u4F5C\uFF0C",paraId:7,tocIndex:2},{value:"execute",paraId:7,tocIndex:2},{value:"\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u5BF9\u8868\u5355\u6570\u636E\u8FDB\u884C\u5904\u7406\u3002",paraId:7,tocIndex:2},{value:"execute",paraId:8,tocIndex:2},{value:"\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E00\u822C\u662F\u5F02\u6B65\u51FD\u6570\uFF0C\u6BD5\u7ADF\u8981\u5E72\u70B9\u4EC0\u4E48\u4E8B\u561B\uFF0C\u4E5F\u53EF\u4EE5\u662F\u540C\u6B65\u51FD\u6570\uFF0C\u53EF\u4EE5\u6709\u4EE5\u4E0B\u51E0\u79CD\u58F0\u660E\u65B9\u5F0F\uFF1A",paraId:8,tocIndex:2},{value:"\u76F4\u63A5\u4F7F\u7528\u5F02\u6B65\u51FD\u6570\u58F0\u660E",paraId:9,tocIndex:3},{value:"\u9996\u9009\u662F\u4F7F\u7528",paraId:10,tocIndex:4},{value:"action",paraId:10,tocIndex:4},{value:"\u65B9\u6CD5\u8FDB\u884C\u58F0\u660E\uFF0C",paraId:10,tocIndex:4},{value:"action",paraId:10,tocIndex:4},{value:"\u65B9\u6CD5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u58F0\u660E\u4E00\u4E2A\u52A8\u4F5C\u3002",paraId:10,tocIndex:4},{value:"",paraId:11,tocIndex:4},{value:"scope",paraId:12,tocIndex:5},{value:"\uFF1A\u52A8\u4F5C\u63D0\u4EA4\u8303\u56F4\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u52A8\u6001\u8BA1\u7B97\u63D0\u4EA4\u8303\u56F4\u3002",paraId:12,tocIndex:5}]},39778:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(76726);const r=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0},{value:"\u4E00\u822C\u5728\u72EC\u7ACB\u7684\u6587\u4EF6\u4E2D\u4F7F\u7528",paraId:1,tocIndex:1},{value:"createForm",paraId:1,tocIndex:1},{value:"\u6765\u521B\u5EFA\u4E00\u4E2A\u8868\u5355\u5BF9\u8C61\uFF08\u4E0D\u662F\u5728\u7EC4\u4EF6\u5185\uFF09\u3002",paraId:1,tocIndex:1},{value:`import { createForm }  from "@speedform/core"
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
`,paraId:16,tocIndex:3},{value:"createForm",paraId:17,tocIndex:4},{value:"\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u8868\u5355\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5305\u62EC\u4E86\u4E00\u4E9B\u7528\u6765\u64CD\u4F5C\u8868\u5355\u7684",paraId:17,tocIndex:4},{value:"API",paraId:17,tocIndex:4},{value:"\u3002",paraId:17,tocIndex:4},{value:"\u540D\u79F0",paraId:18,tocIndex:4},{value:"\u7C7B\u578B",paraId:18,tocIndex:4},{value:"\u8BF4\u660E",paraId:18,tocIndex:4},{value:"Form",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Field",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u5B57\u6BB5\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Group",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u5B57\u6BB5\u7EC4\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Action",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u52A8\u4F5C\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Submit",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u63D0\u4EA4\u52A8\u4F5C\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Reset",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u91CD\u7F6E\u52A8\u4F5C\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"getAction",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u7528\u6765\u83B7\u53D6\u5728\u8868\u5355\u5B57\u6BB5\u58F0\u660E\u7684",paraId:18,tocIndex:4},{value:"Action",paraId:18,tocIndex:4},{value:"fields",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355",paraId:18,tocIndex:4},{value:"fields",paraId:18,tocIndex:4},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"actions",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355",paraId:18,tocIndex:4},{value:"actions",paraId:18,tocIndex:4},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"state",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355\u6570\u636E\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"computedObjects",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355\u4E2D\u7684\u6240\u6709\u8BA1\u7B97\u5C5E\u6027\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"watchObjects",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355\u4E2D\u7684\u6240\u6709",paraId:18,tocIndex:4},{value:"Watch",paraId:18,tocIndex:4},{value:"\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"freeze",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u51BB\u7ED3\u8868\u5355\u7981\u6B62\u7F16\u8F91",paraId:18,tocIndex:4},{value:"load",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u52A0\u8F7DJSON\u6570\u636E\u5230\u8868\u5355\u5B9E\u4F8B",paraId:18,tocIndex:4},{value:"getValues",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u83B7\u53D6\u8868\u5355\u6570\u636E(\u53EA\u5305\u62EC\u8868\u5355\u5B57\u6BB5",paraId:18,tocIndex:4},{value:"value",paraId:18,tocIndex:4},{value:")",paraId:18,tocIndex:4},{value:"validate",paraId:18,tocIndex:4},{value:"'\u65B9\u6CD5'",paraId:18,tocIndex:4},{value:"\u6821\u9A8C\u6574\u4E2A\u8868\u5355",paraId:18,tocIndex:4},{value:"useState",paraId:18,tocIndex:4},{value:"hook",paraId:18,tocIndex:4},{value:"\u5728\u7EC4\u4EF6\u4E2D\u8BBF\u95EE",paraId:18,tocIndex:4},{value:"state",paraId:18,tocIndex:4},{value:"createForm",paraId:19,tocIndex:5},{value:"\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A\u6CDB\u578B\u53C2\u6570\uFF0C\u7528\u4E8E\u5B9A\u4E49\u8868\u5355\u7684",paraId:19,tocIndex:5},{value:"schema",paraId:19,tocIndex:5},{value:"\u5BF9\u8C61\u7C7B\u578B\u3002\u4F46\u662F\u8BE5\u6CDB\u578B\u53C2\u6570\u4E00\u822C\u53EF\u4EE5\u91C7\u7528",paraId:19,tocIndex:5},{value:"typeof <schema>",paraId:19,tocIndex:5},{value:"\u6765\u81EA\u52A8\u63A8\u65AD\uFF0C\u8FD9\u6837\u5C31\u4E0D\u9700\u8981\u624B\u52A8\u5B9A\u4E49\u7C7B\u578B\u4E86\u3002",paraId:19,tocIndex:5}]},42066:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(88209);const r=[]},56148:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(14741);const r=[]},62925:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(97630);const r=[]},23331:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(72e3);const r=[]},48099:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(27548);const r=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u975E\u5E38\u5F3A\u5927\u7684",paraId:0,tocIndex:0},{value:"React",paraId:0,tocIndex:0},{value:"\u8868\u5355\u7EC4\u4EF6\uFF0C\u5B83\u7684\u76EE\u6807\u662F\u8BA9",paraId:0,tocIndex:0},{value:"React",paraId:0,tocIndex:0},{value:"\u8868\u5355\u5F00\u53D1\u53D8\u5F97\u66F4\u52A0\u7B80\u5355\u3001\u5FEB\u901F\u3001\u7075\u6D3B\u3002",paraId:0,tocIndex:0}]},28519:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(31430);const r=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u6838\u5FC3\u7531\u4E24\u4E2A\u5305\u7EC4\u6210\uFF1A",paraId:0,tocIndex:0},{value:"@speedform/core",paraId:0,tocIndex:0},{value:"\u548C",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u662F\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u7684\u54CD\u5E94\u5F0F\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u7528\u6765\u7BA1\u7406\u548C\u9A71\u52A8",paraId:1,tocIndex:0},{value:"Form",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u662F",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u529F\u80FD\u5F3A\u5927\u7684\u57FA\u7840\u3002",paraId:1,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u4F5C\u4E3A\u66FF\u4EE3",paraId:1,tocIndex:0},{value:"redux",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"mobx",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"zstuand",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"Jotai",paraId:1,tocIndex:0},{value:"\u7684\u72B6\u6001\u7BA1\u7406\u5E93\u72EC\u7ACB\u4F7F\u7528\uFF0C\u5176\u672C\u8D28\u4E0A\u662F\u5BF9",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u72B6\u6001\u7BA1\u7406\u5E93\u7684\u5C01\u88C5\u3002",paraId:1,tocIndex:0},{value:"@speedform/core",paraId:1,tocIndex:0},{value:"\u662F",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u6838\u5FC3\u5E93\uFF0C\u5B83\u63D0\u4F9B\u4E86",paraId:1,tocIndex:0},{value:"Form",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u548C",paraId:1,tocIndex:0},{value:"Field",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6,\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A",paraId:1,tocIndex:0},{value:"headless",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u5E93,\u53EA\u8D1F\u8D23\u8868\u5355\u7684\u903B\u8F91\u5904\u7406\uFF0C\u4E0D\u8D1F\u8D23\u5177\u4F53\u7684\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"@speedform/antd",paraId:1,tocIndex:0},{value:"\u662F\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u6E32\u67D3\u7EC4\u4EF6\u5E93\uFF0C\u5B83\u63D0\u4F9B\u4E86",paraId:1,tocIndex:0},{value:"Form",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u548C",paraId:1,tocIndex:0},{value:"Field",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u7684",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7248\u672C\u3002",paraId:1,tocIndex:0},{value:`pnpm install @speedform/core @speedform/reactive
yarn add @speedform/core @speedform/reactive
npm install @speedform/core @speedform/reactive
`,paraId:2,tocIndex:0}]},61022:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(48566);const r=[]},7019:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(25248);const r=[{value:"\u672C\u8282\u5C06\u901A\u8FC7\u5F00\u53D1\u4E00\u4E2A\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\uFF0C\u4F53\u9A8C",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u7684\u5F3A\u5927\u4E0E\u7075\u6D3B\u3002",paraId:0,tocIndex:0},{value:"\u8BE5\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A",paraId:1,tocIndex:0},{value:"\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\u7ED3\u6784\u5982\u4E0B\uFF1A",paraId:2,tocIndex:0},{value:`{
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
`,paraId:73,tocIndex:18},{value:"\u8BF4\u660E",paraId:74,tocIndex:18},{value:":",paraId:74,tocIndex:18},{value:"Network.Submit",paraId:75,tocIndex:18},{value:"\u7EC4\u4EF6\u7684",paraId:75,tocIndex:18},{value:"children",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u6E32\u67D3\u63D0\u4EA4\u6309\u94AE\u7684\u5177\u4F53\u5185\u5BB9\uFF0C\u4F20\u5165",paraId:75,tocIndex:18},{value:"props",paraId:75,tocIndex:18},{value:"\u662F\u4E00\u4E2A\u63D0\u4EA4\u6309\u94AE\u7684\u63A7\u5236\u5C5E\u6027\uFF0C\u5305\u62EC",paraId:75,tocIndex:18},{value:"title",paraId:75,tocIndex:18},{value:"\u3001",paraId:75,tocIndex:18},{value:"dirty",paraId:75,tocIndex:18},{value:"\u3001",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u7B49\u3002",paraId:75,tocIndex:18},{value:"title",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u5B9A\u63D0\u4EA4\u6309\u94AE\u7684\u6807\u9898\u3002",paraId:75,tocIndex:18},{value:"dirty",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u793A\u8868\u5355\u662F\u5426\u5DF2\u7ECF\u88AB\u7F16\u8F91\u8FC7\u3002",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u793A\u8868\u5355\u662F\u5426\u6709\u6548\uFF0C\u5176\u503C\u662F\u7531\u6240\u6709\u5B57\u6BB5\u7684",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u8BA1\u7B97\u5C5E\u6027\u7684\u7ED3\u679C\u51B3\u5B9A\u7684\u3002",paraId:75,tocIndex:18},{value:"",paraId:76,tocIndex:19},{value:"",paraId:77,tocIndex:20},{value:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u7F51\u7EDC\u914D\u7F6E\u8868\u5355",paraId:78,tocIndex:21}]},3050:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(48101);const r=[{value:"\u672C\u8282\u5C06\u901A\u8FC7\u5F00\u53D1\u4E00\u4E2A\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\uFF0C\u4F53\u9A8C",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u7684\u5F3A\u5927\u4E0E\u7075\u6D3B\u3002",paraId:0,tocIndex:0},{value:"\u8BE5\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A",paraId:1,tocIndex:0},{value:"\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\u7ED3\u6784\u5982\u4E0B\uFF1A",paraId:2,tocIndex:0},{value:`{
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
`,paraId:73,tocIndex:18},{value:"\u8BF4\u660E",paraId:74,tocIndex:18},{value:":",paraId:74,tocIndex:18},{value:"Network.Submit",paraId:75,tocIndex:18},{value:"\u7EC4\u4EF6\u7684",paraId:75,tocIndex:18},{value:"children",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u6E32\u67D3\u63D0\u4EA4\u6309\u94AE\u7684\u5177\u4F53\u5185\u5BB9\uFF0C\u4F20\u5165",paraId:75,tocIndex:18},{value:"props",paraId:75,tocIndex:18},{value:"\u662F\u4E00\u4E2A\u63D0\u4EA4\u6309\u94AE\u7684\u63A7\u5236\u5C5E\u6027\uFF0C\u5305\u62EC",paraId:75,tocIndex:18},{value:"title",paraId:75,tocIndex:18},{value:"\u3001",paraId:75,tocIndex:18},{value:"dirty",paraId:75,tocIndex:18},{value:"\u3001",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u7B49\u3002",paraId:75,tocIndex:18},{value:"title",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u5B9A\u63D0\u4EA4\u6309\u94AE\u7684\u6807\u9898\u3002",paraId:75,tocIndex:18},{value:"dirty",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u793A\u8868\u5355\u662F\u5426\u5DF2\u7ECF\u88AB\u7F16\u8F91\u8FC7\u3002",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u793A\u8868\u5355\u662F\u5426\u6709\u6548\uFF0C\u5176\u503C\u662F\u7531\u6240\u6709\u5B57\u6BB5\u7684",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u8BA1\u7B97\u5C5E\u6027\u7684\u7ED3\u679C\u51B3\u5B9A\u7684\u3002",paraId:75,tocIndex:18},{value:"",paraId:76,tocIndex:19},{value:"",paraId:77,tocIndex:20},{value:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u7F51\u7EDC\u914D\u7F6E\u8868\u5355",paraId:78,tocIndex:21}]},62095:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(59856);const r=[{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u5F53\u6240\u4F9D\u8D56\u7684\u72B6\u6001\u503C\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u3002",paraId:0,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A",paraId:1,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\u6216\u8005\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A",paraId:2,tocIndex:0},{value:"Promise",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\u3002",paraId:2,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u7684\u5FC5\u987B\u663E\u5F0F\u6307\u5B9A\u4F9D\u8D56,\u4E0D\u80FD\u50CF\u540C\u6B65\u8BA1\u7B97\u4E00\u6837\u81EA\u52A8\u6536\u96C6\u4F9D\u8D56\u3002",paraId:2,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u4F1A\u88AB\u66FF\u6362\u4E3A",paraId:2,tocIndex:0},{value:"AsyncComputedObject",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\uFF0C\u901A\u8FC7\u8BE5\u5BF9\u8C61\u53EF\u4EE5\u8BFB\u53D6\u5230\u5F02\u6B65\u8BA1\u7B97\u7684\u8FDB\u5EA6\u4EE5\u53CA\u7ED3\u679C\u7B49\u3002",paraId:2,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u4F7F\u7528",paraId:3,tocIndex:1},{value:"computed",paraId:3,tocIndex:1},{value:"\u8FDB\u884C\u58F0\u660E\uFF0C\u65B9\u5F0F\u5982\u4E0B\uFF1A",paraId:3,tocIndex:1},{value:"\u4EE5\u4E0A",paraId:4},{value:"fullName",paraId:4},{value:"\u662F\u4E00\u4E2A\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u4F9D\u8D56\u4E8E",paraId:4},{value:"firstName",paraId:4},{value:"\u548C",paraId:4},{value:"lastName",paraId:4},{value:"\u3002",paraId:4},{value:"computed",paraId:4},{value:"\u51FD\u6570\u7528\u6765\u5C01\u88C5\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\uFF0C\u7528\u6765\u6307\u5B9A\u4F9D\u8D56\u7684\u72B6\u6001\u8DEF\u5F84\u3002",paraId:4},{value:"\u4F9D\u8D56\u53EF\u4EE5\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u6216\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4F7F\u7528",paraId:4},{value:".",paraId:4},{value:"\u4F5C\u4E3A\u8DEF\u5F84\u5206\u5272\u7B26\uFF0C",paraId:4},{value:"./",paraId:4},{value:"\u6307\u7684\u662F\u5F53\u524D\u5BF9\u8C61\uFF0C",paraId:4},{value:"../",paraId:4},{value:"\u6307\u7684\u662F\u7236\u5BF9\u8C61\u3002",paraId:4},{value:"\u5F53\u6211\u4EEC\u66F4\u65B0",paraId:4},{value:"firstName",paraId:4},{value:"\u6216",paraId:4},{value:"lastName",paraId:4},{value:"\u65F6\uFF0C",paraId:4},{value:"fullName",paraId:4},{value:"\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u3002",paraId:4},{value:"\u8BA1\u7B97\u5C5E\u6027\u7684\u7ED3\u679C\u4FDD\u5B58\u5728",paraId:4},{value:"state.user.fullName.result",paraId:4},{value:"\u4E2D\u3002",paraId:4},{value:"\u5F53\u8BA1\u7B97\u5C5E\u6027\u6B63\u5728\u8BA1\u7B97\u65F6\uFF0C",paraId:4},{value:"state.user.fullName.loading",paraId:4},{value:"\u4E3A",paraId:4},{value:"true",paraId:4},{value:"\u3002\u8BA1\u7B97\u5B8C\u6210\u540E\uFF0C",paraId:4},{value:"state.user.fullName.loading",paraId:4},{value:"\u4E3A",paraId:4},{value:"false",paraId:4},{value:"\u3002",paraId:4},{value:"\u4E0B\u9762\u662F\u4E00\u4E2A\u66F4\u52A0\u5B8C\u6574\u7684\u4F8B\u5B50\uFF1A",paraId:5},{value:"\u8BF4\u660E",paraId:6},{value:"\u4F7F\u7528",paraId:7},{value:"computed",paraId:7},{value:"\u51FD\u6570\u58F0\u660E\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C",paraId:7},{value:"computed",paraId:7},{value:`\u53C2\u6570\uFF1A
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
`,paraId:78},{value:"\u8FD9\u5BFC\u81F4",paraId:79},{value:"Speedform",paraId:79},{value:"\u5C06\u5176\u8BC6\u522B\u4E3A\u5F02\u6B65\u51FD\u6570\uFF0C\u4E5F\u5C31\u4E0D\u80FD\u76F8\u5E94\u5730\u521B\u5EFA\u5F02\u6B65",paraId:79},{value:"AsyncComputedObject",paraId:79},{value:"\uFF0C\u800C\u53EA\u662F\u5C06\u5176\u5F53\u4F5C\u4E00\u4E2A\u666E\u901A\u7684\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\u3002",paraId:79},{value:"\u89E3\u51B3\u65B9\u6CD5\u662F\u663E\u5F0F\u6307\u5B9A",paraId:80},{value:"computed(async ()=>{...},[...],{async:true})",paraId:80},{value:"\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u6B63\u786E\u8BC6\u522B\u4E3A\u5F02\u6B65\u51FD\u6570\u3002",paraId:80}]},28460:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(75394);const r=[{value:"\u7EC6\u5FC3\u7684\u670B\u53CB\u53EF\u80FD\u53D1\u73B0\uFF0C\u5728\u4E0A\u9762\u7684",paraId:0,tocIndex:0},{value:"createStore",paraId:0,tocIndex:0},{value:"\u4E2D\u6211\u4EEC\u6CA1\u6709\u58F0\u660E\u4EFB\u4F55\u7684\u8BA1\u7B97\u5C5E\u6027\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u662F\u4E0D\u652F\u6301\u8BA1\u7B97\u5C5E\u6027\uFF0C\u800C\u662F",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u4E86",paraId:0,tocIndex:0},{value:"\u72EC\u7279\u7684\u8BA1\u7B97\u5C5E\u6027\u7684\u58F0\u660E\u65B9\u5F0F",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u7684\u8BA1\u7B97\u5C5E\u6027\u7684\u58F0\u660E\u65B9\u5F0F\u662F",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u4E4B\u6240\u4EE5\u80FD\u63D0\u4F9B\u65E0\u4EE5\u4F26\u6BD4\u7528\u6237\u5F00\u53D1\u4F53\u9A8C\u7684\u5173\u952E\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:1},{value:"\u5B9E\u73B0\u4E86\u6700\u72EC\u7279\u7684\u79FB\u82B1\u63A5\u6728\u5F0F\u7684\u8BA1\u7B97\u5C5E\u6027\u5B9E\u73B0\u65B9\u5F0F",paraId:1},{value:"\u57FA\u672C\u8FC7\u7A0B\u5982\u4E0B\uFF1A",paraId:2},{value:"\u9996\u5148\u76F4\u63A5\u5728",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u58F0\u660E\u8BA1\u7B97\u5C5E\u6027\u51FD\u6570\uFF0C\u5982",paraId:3},{value:"fullName=(user)=>user.first+user.last",paraId:3},{value:"\u3002",paraId:3},{value:"\u8C03\u7528",paraId:3},{value:"createStore",paraId:3},{value:"\u521B\u5EFA",paraId:3},{value:"Store",paraId:3},{value:"\u65F6\uFF0C\u4F1A\u6839\u636E",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u7684\u51FD\u6570\u6765\u521B\u5EFA",paraId:3},{value:"mutate",paraId:3},{value:"\u6216",paraId:3},{value:"computed",paraId:3},{value:"(\u5728",paraId:3},{value:"helux",paraId:3},{value:"\u4E2D\u53EB\u6D3E\u751F\u5BF9\u8C61\uFF0C\u5728\u5176\u4ED6\u72B6\u6001\u5E93\u4E2D\u53EF\u80FD\u53EB\u8BA1\u7B97\u7B97\u5C5E\u6027)\u3002",paraId:3},{value:"\u5982\u6B64\uFF0C\u5F53",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1\u8BA1\u7B97\u5C5E\u6027\u7684\u91CD\u65B0\u8BA1\u7B97\uFF0C\u5C06\u8BA1\u7B97\u7ED3\u679C\u8D4B\u503C\u7ED9",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u7684\u5BF9\u5E94\u5C5E\u6027\u3002\u5728\u4E0A\u56FE\u4E2D\uFF0C\u5F53",paraId:3},{value:"firstName",paraId:3},{value:"\u548C",paraId:3},{value:"lastName",paraId:3},{value:"\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1",paraId:3},{value:"fullName(mutate)",paraId:3},{value:"\u7684\u91CD\u65B0\u8BA1\u7B97\uFF0C\u5C06\u8BA1\u7B97\u7ED3\u679C\u8D4B\u503C\u7ED9",paraId:3},{value:"user.fullName",paraId:3},{value:"\u5C5E\u6027\u3002\u8FD9\u6837\uFF0C\u5F53\u6211\u4EEC\u8BBF\u95EE",paraId:3},{value:"state.fullName",paraId:3},{value:"\u65F6,\u5C31\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E86\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u51FD\u6570\u4E86\u3002",paraId:3},{value:"\u4EE5\u4E0A\u5C31\u662F",paraId:4},{value:"@speedform/reactive",paraId:4},{value:"\u8BA1\u7B97\u5C5E\u6027\u79FB\u82B1\u63A5\u6728\u7684\u8FC7\u7A0B\u539F\u7406,\u5927\u5BB6\u53EF\u4EE5\u4ECE\u4E0B\u9762\u793A\u5217\u4E2D\u52A0\u6DF1\u7406\u89E3\u3002",paraId:4},{value:"\u5728\u4E0A\u4F8B\u4E2D\uFF1A",paraId:5},{value:"user.fullName",paraId:6},{value:"\u662F\u4E00\u4E2A\u51FD\u6570",paraId:6},{value:"store.state.fullName",paraId:6},{value:"\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32",paraId:6},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",paraId:6},{value:"createStore",paraId:6},{value:"\u76F4\u63A5\u5728\u8F93\u5165\u7684",paraId:6},{value:"user",paraId:6},{value:"\u4E0A\u8FDB\u884C\u521B\u5EFA\uFF0C\u6307\u5B9A",paraId:6},{value:"singleton:false",paraId:6},{value:"\u65F6\u4F1A\u6DF1\u62F7\u8D1D\u4E00\u4EFD",paraId:6},{value:"user",paraId:6},{value:"\uFF0C\u7136\u540E\u5728\u62F7\u8D1D\u7684",paraId:6},{value:"user",paraId:6},{value:"\u4E0A\u521B\u5EFA",paraId:6},{value:"mutate",paraId:6},{value:"\u6216",paraId:6},{value:"computed",paraId:6},{value:"\u3002",paraId:6},{value:"\u5728\u5B66\u4E60\u5982\u4F55\u58F0\u660E\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u6765\u4E86\u89E3\u4E00\u4E0B",paraId:7,tocIndex:2},{value:"\u8BA1\u7B97\u4F5C\u7528\u57DF - Scope",paraId:7,tocIndex:2},{value:"\u7684\u6982\u5FF5\u3002",paraId:7,tocIndex:2},{value:"\u8BA1\u7B97\u4F5C\u7528\u57DF",paraId:8},{value:"\u6307\u7684\u662F\u4F20\u9012\u7ED9\u8BA1\u7B97\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570",paraId:8},{value:"@speedform/reactive",paraId:9},{value:"\u5728\u521B\u5EFA",paraId:9},{value:"Store",paraId:9},{value:"\u65F6\uFF0C\u652F\u6301\u914D\u7F6E",paraId:9},{value:"scope",paraId:9},{value:"\u53C2\u6570\u6765\u6307\u5B9A\u8BA1\u7B97\u5C5E\u6027\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5982\u4E0B\uFF1A",paraId:9},{value:`export enum ComputedScopeRef{
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

`,paraId:10},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",paraId:11,tocIndex:3},{value:"scope==ComputedScopeRef.Current",paraId:11,tocIndex:3},{value:"\u65F6\uFF0C\u8BA1\u7B97\u51FD\u6570\u7684",paraId:11,tocIndex:3},{value:"this",paraId:11,tocIndex:3},{value:"\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u7684\u5BF9\u8C61\u3002",paraId:11,tocIndex:3},{value:"@speedform/reactive",paraId:12,tocIndex:5},{value:"\u4F1A\u5C06\u8BA1\u7B97\u5C5E\u51FD\u6570\u7684",paraId:12,tocIndex:5},{value:"scope",paraId:12,tocIndex:5},{value:"\u6307\u5411",paraId:12,tocIndex:5},{value:"ComputedScopeRef.Root",paraId:12,tocIndex:5},{value:"\uFF0C\u5373\u5F53\u524D\u7684",paraId:12,tocIndex:5},{value:"State",paraId:12,tocIndex:5},{value:"\u6839\u5BF9\u8C61\uFF0C\u5982\u4E0B\uFF1A",paraId:12,tocIndex:5},{value:"\u5F53",paraId:13,tocIndex:7},{value:"scope==ComputedScopeRef.Parent",paraId:13,tocIndex:7},{value:"\u65F6\uFF0C\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u7684\u5BF9\u8C61\u7684\u7236\u5BF9\u8C61\u3002",paraId:13,tocIndex:7},{value:"\u5F53",paraId:14,tocIndex:9},{value:"store.options.scope==<\u5B57\u7B26\u4E32>",paraId:14,tocIndex:9},{value:"\u65F6\uFF0C\u6B64\u65F6",paraId:14,tocIndex:9},{value:"<\u5B57\u7B26\u4E32>",paraId:14,tocIndex:9},{value:"\u5C31\u662F\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61\u7684\u952E\u540D\u79F0\u3002",paraId:14,tocIndex:9},{value:"computedThis='firstName'",paraId:15},{value:"\u4EE3\u8868",paraId:15},{value:"this",paraId:15},{value:"\u6307\u5411",paraId:15},{value:"user.firstName",paraId:15},{value:",\u4E5F\u5C31\u662F\u5F53\u524D\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61\u7684",paraId:15},{value:"firstName",paraId:15},{value:"\u6210\u5458\u3002",paraId:15},{value:"computedThis='address.city'",paraId:15},{value:"\u4EE3\u8868",paraId:15},{value:"this",paraId:15},{value:"\u6307\u5411",paraId:15},{value:"user.address.city",paraId:15},{value:"\u603B\u4E4B\uFF0C\u5F53",paraId:15},{value:"computedThis",paraId:15},{value:"\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u65F6\uFF0C\u4EE3\u8868\u662F",paraId:15},{value:"\u5F53\u524D\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61\u7684\u6307\u5B9A\u952E\u540D\u79F0",paraId:15},{value:"\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u952E\u540D\u79F0\u53EF\u4EE5\u662F\u591A\u7EA7\u7684\uFF0C\u5982",paraId:15},{value:"address.city",paraId:15},{value:"\u3002",paraId:15},{value:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",paraId:16},{value:"\u4E0E",paraId:16},{value:"scope==<\u5B57\u7B26\u4E32>",paraId:16},{value:"\u7684\u533A\u522B\u5728\u4E8E:",paraId:16},{value:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",paraId:17},{value:"\u4EE3\u8868\u662F\u4EE5",paraId:17},{value:"\u6839\u5BF9\u8C61",paraId:17},{value:"\u4E3A\u8D77\u70B9\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8DEF\u5F84\u53EF\u4EE5\u662F\u591A\u7EA7\u7684\uFF0C\u5982",paraId:17},{value:"['user','address','city']",paraId:17},{value:"\u3002",paraId:17},{value:"scope==<\u5B57\u7B26\u4E32>",paraId:17},{value:"\u4EE3\u8868\u662F\u4EE5",paraId:17},{value:"\u5F53\u524D\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61",paraId:17},{value:"\u4E3A\u8D77\u70B9\u7684\u8DEF\u5F84\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u952E\u540D\u79F0\u53EF\u4EE5\u662F\u591A\u7EA7\u7684\uFF0C\u5982",paraId:17},{value:"address.city",paraId:17},{value:"\u3002",paraId:17},{value:"\u5F53",paraId:18,tocIndex:13},{value:"scope==ComputedScopeRef.Depends",paraId:18,tocIndex:13},{value:"\u65F6\uFF0C\u8BA1\u7B97\u51FD\u6570\u7684",paraId:18,tocIndex:13},{value:"this",paraId:18,tocIndex:13},{value:"\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u7684\u4F9D\u8D56\u9879\u7684\u503C\u3002",paraId:18,tocIndex:13},{value:"ComputedScopeRef.Depends",paraId:19,tocIndex:13},{value:"\u4EC5\u5728\u5F02\u6B65\u8BA1\u7B97\u65F6\u751F\u6548,\u800C\u5F02\u6B65\u8BA1\u7B97\u5FC5\u987B\u901A\u8FC7computed\u51FD\u6570\u6765\u6307\u5B9A\u4F9D\u8D56",paraId:19,tocIndex:13}]},34957:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(83818);const r=[{value:"\u5F53\u4F7F\u7528",paraId:0,tocIndex:0},{value:"computed",paraId:0,tocIndex:0},{value:"\u521B\u5EFA\u597D\u8BA1\u7B97\u5C5E\u6027\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7",paraId:0,tocIndex:0},{value:"store.computedObjects",paraId:0,tocIndex:0},{value:"\u6765\u7BA1\u7406\u6240\u6709",paraId:0,tocIndex:0},{value:"store",paraId:0,tocIndex:0},{value:"\u5185\u7684\u8BA1\u7B97\u5C5E\u6027\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7",paraId:1,tocIndex:0},{value:"store.computedObjects",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u8BBF\u95EE\u5230\u6240\u6709\u7684\u8BA1\u7B97\u5BF9\u8C61\uFF0C\u8BA1\u7B97\u5BF9\u8C61\u662F\u4E00\u4E2A",paraId:1,tocIndex:0},{value:"Map",paraId:1,tocIndex:0},{value:"\u5BF9\u8C61\uFF0C\u5176\u4E2D\u7684",paraId:1,tocIndex:0},{value:"key",paraId:1,tocIndex:0},{value:"\u662F\u8BA1\u7B97\u5BF9\u8C61\u7684",paraId:1,tocIndex:0},{value:"name",paraId:1,tocIndex:0},{value:"\uFF0C",paraId:1,tocIndex:0},{value:"value",paraId:1,tocIndex:0},{value:"\u662F\u8BA1\u7B97\u5BF9\u8C61\u7684",paraId:1,tocIndex:0},{value:"value",paraId:1,tocIndex:0},{value:"\u3002",paraId:1,tocIndex:0},{value:"\u8BF4\u660E",paraId:2},{value:":",paraId:2},{value:"\u4EE5\u4E0A\u521B\u5EFA\u4E86\u4E00",paraId:3},{value:"fullName",paraId:3},{value:"\u548C",paraId:3},{value:"fullName2",paraId:3},{value:"\u4E24\u4E2A\u8BA1\u7B97\u5C5E\u6027",paraId:3},{value:"store.computedObjects",paraId:3},{value:"\u662F\u4E00\u4E2A",paraId:3},{value:"Map",paraId:3},{value:"\u5BF9\u8C61,\u53EF\u4EE5\u901A\u8FC7",paraId:3},{value:'store.computedObjects.get("user/fullName")',paraId:3},{value:"\u6765\u83B7\u53D6",paraId:3},{value:"fullName",paraId:3},{value:"\u7684\u8BA1\u7B97\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u662F\u4E00\u4E2A",paraId:3},{value:"ComputedObject",paraId:3},{value:"\u5B9E\u4F8B\u3002",paraId:3},{value:"ComputedObject",paraId:3},{value:"\u5B9E\u4F8B\u6709\u4E00\u4E2A",paraId:3},{value:"run",paraId:3},{value:"\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\u3002",paraId:3},{value:"\u5BF9\u4E8E\u5F02\u6B65\u8BA1\u7B97\u5373\u53EF\u4EE5\u901A\u8FC7",paraId:3},{value:'store.computedObjects.get("user/fullName2").run()',paraId:3},{value:"\u6765\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7",paraId:3},{value:"store.state.user.fullName2.run()",paraId:3},{value:"\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\u3002\u800C\u540C\u6B65\u8BA1\u7B97\u53EA\u80FD\u901A\u8FC7",paraId:3},{value:'store.computedObjects.get("user/fullName").run()',paraId:3},{value:"\u6765\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\u3002",paraId:3},{value:"\u6BCF\u4E00\u4E2A\u8BA1\u7B97\u51FD\u6570\u5747\u4F1A\u521B\u5EFA\u4E00\u4E2A",paraId:4,tocIndex:1},{value:"ComputedObject",paraId:4,tocIndex:1},{value:"\u5B9E\u4F8B\uFF0C\u4FDD\u5B58\u5728",paraId:4,tocIndex:1},{value:"store.computedObjects",paraId:4,tocIndex:1},{value:",\u8BE5\u5BF9\u8C61\u6709\u4EE5\u4E0B\u5C5E\u6027\u548C\u65B9\u6CD5:",paraId:4,tocIndex:1},{value:`export interface ComputedObject<T=Dict> {
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
\u5F53\u4F7F\u7528`,paraId:7,tocIndex:2},{value:"computed",paraId:7,tocIndex:2},{value:"\u65B9\u6CD5\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u65F6\uFF0C\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A",paraId:7,tocIndex:2},{value:"group",paraId:7,tocIndex:2},{value:"\u53C2\u6570\uFF0C\u7528\u6765\u4E3A\u8BA1\u7B97\u5C5E\u6027\u5206\u7EC4\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u901A\u8FC7",paraId:7,tocIndex:2},{value:"runGroup",paraId:7,tocIndex:2},{value:"\u65B9\u6CD5\uFF0C\u7528\u6765\u624B\u52A8\u6267\u884C\u8BE5\u5206\u7EC4\u8BA1\u7B97\u51FD\u6570\u3002",paraId:7,tocIndex:2},{value:"\u4EE5\u4E0A\u6211\u4EEC\u5C06\u6240\u6709\u8BA1\u7B97\u51FD\u6570\u7684\u4F9D\u8D56\u5747\u8BBE\u4E3A",paraId:8},{value:"[]",paraId:8},{value:"\uFF0C\u4E5F\u5C31\u662F\u65E0\u4F9D\u8D56\uFF0C\u56E0\u6B64\u5F53",paraId:8},{value:"book.price",paraId:8},{value:",",paraId:8},{value:"book.count",paraId:8},{value:"\u7684\u503C\u53D8\u5316\u65F6\uFF0C",paraId:8},{value:"Total Group",paraId:8},{value:"\u548C",paraId:8},{value:"Average Group",paraId:8},{value:"\u7684\u8BA1\u7B97\u5C5E\u6027\u5E76\u4E0D\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\uFF0C\u6B64\u65F6\u5C31\u9700\u8981\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u3002",paraId:8},{value:"Q",paraId:9},{value:": \u4E3A\u4EC0\u4E48\u6B64\u5904\u8981\u6307\u5B9A",paraId:9},{value:"async=true",paraId:9},{value:"?",paraId:9},{value:"A",paraId:9},{value:": \u56E0\u6B64\u672C\u7AD9\u4F7F\u7528",paraId:9},{value:"webpack/babel",paraId:9},{value:"\u8FDB\u884C\u8F6C\u7801\uFF0C\u5F02\u6B65\u51FD\u6570\u4F1A\u88AB\u8F6C\u7801\u4E3A\u540C\u6B65\u51FD\u6570\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u81EA\u52A8\u8BC6\u522B",paraId:9},{value:"async",paraId:9},{value:"\u51FD\u6570\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u6307\u5B9A",paraId:9},{value:"async=true",paraId:9},{value:"computed",paraId:10,tocIndex:3},{value:"\u63D0\u4F9B\u4E86\u4E00\u4E2A",paraId:10,tocIndex:3},{value:"enable",paraId:10,tocIndex:3},{value:"\u5C5E\u6027\u7528\u6765\u63A7\u5236\u662F\u5426\u8FDB\u884C\u8BA1\u7B97\u3002\u5F53",paraId:10,tocIndex:3},{value:"enable=false",paraId:10,tocIndex:3},{value:"\u65F6\uFF0C\u5F53\u4F9D\u8D56\u53D8\u5316\u65F6\u4E0D\u4F1A\u8FDB\u884C\u8BA1\u7B97\uFF0C\u76F4\u81F3",paraId:10,tocIndex:3},{value:"enable=true",paraId:10,tocIndex:3},{value:"\u3002",paraId:10,tocIndex:3},{value:"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u6CD5\u6765\u542F\u7528/\u7981\u7528\u8BA1\u7B97\u3002",paraId:11,tocIndex:3},{value:"\u53EF\u4EE5\u5728\u4F7F\u7528",paraId:12,tocIndex:3},{value:"computed",paraId:12,tocIndex:3},{value:"\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u65F6\uFF0C\u4F20\u5165",paraId:12,tocIndex:3},{value:"enable",paraId:12,tocIndex:3},{value:"\u6765\u6307\u5B9A\u8BA1\u7B97\u5C5E\u6027\u7684\u9ED8\u8BA4\u72B6\u6001\u3002",paraId:12,tocIndex:3},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:12,tocIndex:3},{value:"ComputedObjects.get(<\u8DEF\u5F84\u540D\u79F0>)",paraId:12,tocIndex:3},{value:"\u6765\u542F\u7528/\u7981\u7528\u8BA1\u7B97\u3002",paraId:12,tocIndex:3},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:12,tocIndex:3},{value:"ComputedObjects.enableGroup(<true/false>)",paraId:12,tocIndex:3},{value:"\u6765\u542F\u7528/\u7981\u7528\u67D0\u4E2A\u7EC4\u7684\u8BA1\u7B97\u3002",paraId:12,tocIndex:3},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528",paraId:13,tocIndex:4},{value:"computed(getter,deps,options)",paraId:13,tocIndex:4},{value:"\u65B9\u6CD5\u6765\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027,\u901A\u8FC7",paraId:13,tocIndex:4},{value:'store.computedObject.get("<\u8DEF\u5F84>")',paraId:13,tocIndex:4},{value:"\u83B7\u53D6\u5230",paraId:13,tocIndex:4},{value:"ComputedObject",paraId:13,tocIndex:4},{value:"\u5B9E\u4F8B\uFF0C\u7136\u540E\u901A\u8FC7",paraId:13,tocIndex:4},{value:"ComputedObject",paraId:13,tocIndex:4},{value:"\u5B9E\u4F8B\u6765\u8BFB\u53D6\u548C\u4FEE\u6539\u8BA1\u7B97\u5C5E\u6027\u7684\u53C2\u6570\u3002",paraId:13,tocIndex:4}]},72773:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(46489);const r=[{value:"\u65E0\u8BBA\u662F\u540C\u6B65\u6216\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u5747\u63A8\u8350\u4F7F\u7528",paraId:0},{value:"computed",paraId:0},{value:"\u51FD\u6570\u6765\u58F0\u660E\u3002",paraId:0},{value:"computed",paraId:1,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u4E8E\u58F0\u660E\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u51FD\u6570\u7B7E\u540D\u58F0\u660E\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:`export function computed<R = any,ExtraAttrs extends Dict = {}>( getter: AsyncComputedGetter<R>,depends?:ComputedDepends,options?: ComputedOptions<R,ExtraAttrs>): ComputedDescriptor<R & ExtraAttrs>;
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

`,paraId:7,tocIndex:2}]},22426:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(63035);const r=[{value:"\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\u76F4\u63A5\u58F0\u660E\u5728\u72B6\u6001\u4E2D\uFF0C\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u666E\u901A\u7684\u51FD\u6570\uFF0C,\u5F53",paraId:0,tocIndex:0},{value:"State",paraId:0,tocIndex:0},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1\u8BA1\u7B97\u5C5E\u6027\u7684\u91CD\u65B0\u8BA1\u7B97\uFF0C\u5C06\u8BA1\u7B97\u7ED3\u679C\u8D4B\u503C\u7ED9",paraId:0,tocIndex:0},{value:"State",paraId:0,tocIndex:0},{value:"\u4E2D\u7684\u5BF9\u5E94\u5C5E\u6027\u3002",paraId:0,tocIndex:0},{value:"\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\u7684\u4F9D\u8D56\u6536\u96C6\u662F\u81EA\u52A8\u7684\uFF0C\u4E0D\u9700\u8981\u663E\u5F0F\u6307\u5B9A\u4F9D\u8D56\u53C2\u6570\uFF0C\u5F53",paraId:1,tocIndex:1},{value:"State",paraId:1,tocIndex:1},{value:"\u4E2D\u7684\u6240\u4F9D\u8D56\u7684\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1\u8BA1\u7B97\u5C5E\u6027\u7684\u91CD\u65B0\u8BA1\u7B97\u3002",paraId:1,tocIndex:1},{value:`const state = {
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

`,paraId:17,tocIndex:4}]},24143:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(5757);const r=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u5E95\u5C42\u7684\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7531",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u9A71\u52A8\uFF0C",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u5177\u5907\u6D3E\u751F\u8BA1\u7B97\u3001\u4F9D\u8D56\u6536\u96C6\u3001\u4FE1\u53F7\u7684\u54CD\u5E94\u5F0F\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u5B83\u7684\u8BBE\u8BA1\u7406\u5FF5\u4E0E",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u8BBE\u8BA1\u7406\u5FF5\u9AD8\u5EA6\u5951\u5408\uFF0C\u4E3A",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u6570\u636E\u9A71\u52A8\u80FD\u529B\u3002",paraId:1,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u662F\u5728",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u7684\u57FA\u7840\u4E0A\uFF0C\u5C01\u88C5\u4E86\u7528\u6765\u63D0\u4F9B\u66F4\u52A0\u6613\u7528\u53CB\u597D\u7684\u72B6\u6001\u5E93\u7BA1\u7406\u3002",paraId:1,tocIndex:0},{value:"\u4F5C\u4E3A",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u5E95\u5C42\u4F9D\u8D56\uFF0C\u4E86\u89E3\u548C\u638C\u63E1",paraId:1,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u7684\u539F\u7406\u548C\u4F7F\u7528\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8BA9\u4F60\u66F4\u52A0\u6DF1\u5165\u7406\u89E3",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u8BBE\u8BA1\u7406\u5FF5\u548C\u4F7F\u7528\u65B9\u6CD5\u3002",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:2,tocIndex:1},{value:"\u4F9D\u8D56\u4E8E",paraId:2,tocIndex:1},{value:"@speedform/reactive",paraId:2,tocIndex:1},{value:"\uFF0C\u5B89\u88C5",paraId:2,tocIndex:1},{value:"SpeedForm",paraId:2,tocIndex:1},{value:"\u540E\u5C31\u5DF2\u7ECF\u5B89\u88C5\u4E86",paraId:2,tocIndex:1},{value:"@speedform/reactive",paraId:2,tocIndex:1},{value:"\uFF0C\u4E5F\u53EF\u4EE5\u72EC\u7ACB\u5B89\u88C5\u4F7F\u7528",paraId:2,tocIndex:1},{value:"@speedform/reactive",paraId:2,tocIndex:1},{value:"\u3002",paraId:2,tocIndex:1},{value:`
pnpm add @speedform/reactive
npm install @speedform/reactive
yarn add @speedform/reactive

`,paraId:3,tocIndex:1}]},98036:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(85164);const r=[{value:"\u5F53\u72B6\u6001\u53D8\u5316\u65F6\u5C06\u89E6\u53D1\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\uFF0C",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u63D0\u4F9B\u66F4\u52A0\u7EC6\u7C92\u5EA6\u7684\u6E32\u67D3\u3002",paraId:0,tocIndex:0},{value:"\u4F5C\u4E3A\u5BF9\u6BD4\uFF0C\u6211\u4EEC\u5148\u770B\u4E00\u4E2A\u4F20\u7EDF\u7684",paraId:1,tocIndex:1},{value:"Context",paraId:1,tocIndex:1},{value:"\u7684\u6E32\u67D3\u4F8B\u5B50\u3002",paraId:1,tocIndex:1},{value:"\u4ECE\u4E0A\u9762\u7684\u4F8B\u5B50\u53EF\u770B\u5230\uFF0C\u5F53\u66F4\u65B0",paraId:2},{value:"Context.age",paraId:2},{value:"\u65F6\uFF0C\u6240\u6709\u7684\u5B50\u7EC4\u4EF6\u4E0D\u7BA1\u662F\u5426\u6709\u4F7F\u7528",paraId:2},{value:"Age",paraId:2},{value:"\u5747\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C\u8FD9\u662F\u4E0D\u5FC5\u8981\u7684\uFF0C\u56E0\u4E3A\u5B50\u7EC4\u4EF6\u5E76\u6CA1\u6709\u4F7F\u7528\u5230",paraId:2},{value:"Context",paraId:2},{value:"\u7684\u6570\u636E\uFF0C\u4E3A\u6B64\u6211\u4EEC\u4E00\u822C\u9700\u8981\u4F7F\u7528",paraId:2},{value:"React.memo",paraId:2},{value:"\u6216\u4E00\u4E9B\u7B2C\u4E09\u65B9\u5E93\u6765\u8FDB\u884C\u4F18\u5316\u6E32\u67D3\u3002",paraId:2},{value:"\u6700\u5927\u7684\u95EE\u9898\u5728\u4E8E\uFF0C\u5F53\u66F4\u65B0\u6839Context\u65F6\uFF0C\u6240\u6709\u7684\u5B50\u7EC4\u4EF6\u90FD\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u8FD9\u662F\u4E0D\u5FC5\u8981\u7684\uFF0C\u56E0\u4E3A\u5B50\u7EC4\u4EF6\u5E76\u6CA1\u6709\u4F7F\u7528\u5230\u6839Context\u7684\u6570\u636E\u3002\u6211\u4EEC\u5E0C\u671B\u80FD\u5B9E\u73B0\u66F4\u7EC6\u7C92\u5EA6\u7684\u6E32\u67D3\uFF0C\u53EA\u6709\u5F53\u5B50\u7EC4\u4EF6\u4F7F\u7528\u5230\u7684\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:3},{value:"\u4F7F\u7528",paraId:4,tocIndex:2},{value:"@speedform/reactive",paraId:4,tocIndex:2},{value:"\u7684",paraId:4,tocIndex:2},{value:"useState",paraId:4,tocIndex:2},{value:"\u53EF\u4EE5\u4F7F",paraId:4,tocIndex:2},{value:"\u6E32\u67D3\u9897\u7C92\u5EA6\u9650\u5B9A\u5728\u7EC4\u4EF6\u8303\u56F4",paraId:4,tocIndex:2},{value:"\uFF0C\u53EA\u6709\u4F7F\u7528\u5230\u6570\u636E\u7684\u7EC4\u4EF6\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:4,tocIndex:2},{value:"\u5728\u4E0A\u4F8B\u4E2D\uFF0C\u5F53\u66F4\u65B0",paraId:5},{value:"Age",paraId:5},{value:"\u65F6\uFF0C\u4EC5\u6839\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C",paraId:5},{value:"FirstName",paraId:5},{value:"\u548C",paraId:5},{value:"LastName",paraId:5},{value:"\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5E76\u6CA1\u6709\u4F7F\u7528\u5230",paraId:5},{value:"Age",paraId:5},{value:"\u3002",paraId:5},{value:"\u5F53\u5728\u6839\u7EC4\u4EF6\u4E2D\u66F4\u65B0",paraId:5},{value:"FirstName",paraId:5},{value:"\u65F6\uFF0C\u4EC5",paraId:5},{value:"FirstName",paraId:5},{value:"\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002\u800C",paraId:5},{value:"LastName",paraId:5},{value:"\u7EC4\u4EF6\u4E2D\u6CA1\u6709",paraId:5},{value:"FirstName",paraId:5},{value:"\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:5},{value:"@speedform/reactive",paraId:6,tocIndex:3},{value:"\u63D0\u4F9B\u7684",paraId:6,tocIndex:3},{value:"state",paraId:6,tocIndex:3},{value:"\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u914D\u7F6E",paraId:6,tocIndex:3},{value:"signal",paraId:6,tocIndex:3},{value:"\u673A\u5236\u53EF\u4EE5\u76F4\u63A5\u8FDB\u884C\u8BFB\u53D6",paraId:6,tocIndex:3},{value:"\u6E32\u67D3\u9897\u7C92\u5EA6\u9650\u5B9A\u5728\u7EC4\u4EF6\u8303\u56F4",paraId:6,tocIndex:3},{value:"\uFF0C\u53EA\u6709\u4F7F\u7528\u5230\u6570\u636E\u7684\u7EC4\u4EF6\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:6,tocIndex:3},{value:"\u57FA\u4E8E",paraId:7,tocIndex:3},{value:"Signal",paraId:7,tocIndex:3},{value:",",paraId:7,tocIndex:3},{value:"\u6E32\u67D3\u9897\u7C92\u5EA6\u53EF\u4EE5\u662F\u7EC4\u4EF6\u4E2D\u7684\u4E00\u4E2A\u7247\u6BB5",paraId:7,tocIndex:3},{value:"\uFF0C\u66F4\u52A0\u7CBE\u7EC6\uFF0C\u66F4\u52A0\u9AD8\u6548\u3002",paraId:7,tocIndex:3},{value:"\u5728\u4E0A\u4F8B\u4E2D\uFF0C\u5F53\u66F4\u65B0",paraId:8},{value:"Age",paraId:8},{value:"\u65F6\uFF0C\u4EC5\u6839\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C",paraId:8},{value:"FirstName",paraId:8},{value:"\u548C",paraId:8},{value:"LastName",paraId:8},{value:"\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5E76\u6CA1\u6709\u4F7F\u7528\u5230",paraId:8},{value:"Age",paraId:8},{value:"\u3002",paraId:8},{value:"\u5F53\u66F4\u65B0",paraId:8},{value:"FirstName",paraId:8},{value:"\u65F6\uFF0C\u4EC5",paraId:8},{value:"FirstName",paraId:8},{value:"\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002\u800C",paraId:8},{value:"LastName",paraId:8},{value:"\u7EC4\u4EF6\u4E2D\u867D\u7136\u7528\u5230\u4E86",paraId:8},{value:"FirstName",paraId:8},{value:"\uFF0C\u4F46\u662F\u6CA1\u6709\u4F7F\u7528",paraId:8},{value:"$(FirstName)",paraId:8},{value:"\uFF0C\u4E5F\u5C31\u662F\u4F7F\u7528\u4FE1\u53F7\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:8},{value:"store.state",paraId:8},{value:"\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:8},{value:"reactive",paraId:8},{value:",\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A",paraId:8},{value:"Proxy",paraId:8},{value:"\u5BF9\u8C61\u6765\u6536\u96C6\u4F9D\u8D56\u3002\u7136\u540E\u4F7F\u7528",paraId:8},{value:"$(<reactive>)",paraId:8},{value:"\u6570\u636E\u53D8\u66F4\u4EC5\u89E6\u53D1",paraId:8},{value:"$",paraId:8},{value:"\u7B26\u53F7\u533A\u57DF\u5185\u91CD\u6E32\u67D3\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6700\u7EC6\u7C92\u5EA6\u7684\u6E32\u67D3\u3002",paraId:8},{value:"\u5173\u4E8E",paraId:8},{value:"Signal",paraId:8},{value:"\u673A\u5236\u7684\u66F4\u591A\u5185\u5BB9\u8BF7\u53C2\u8003",paraId:8},{value:"helux/Signal",paraId:8},{value:"\u3002",paraId:8}]},72048:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(90054);const r=[{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u4E86\u4E09\u79CD\u4E0D\u540C\u7684\u65B9\u5F0F\u6765\u5B58\u53D6\u72B6\u6001\u3002",paraId:0,tocIndex:0},{value:"useState",paraId:1,tocIndex:0},{value:": \u7528\u6765\u5728\u7EC4\u4EF6\u4E2D\u8BBF\u95EE\u548C\u66F4\u65B0",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"\u7684\u72B6\u6001\u6570\u636E\uFF0C\u66F4\u65B0\u65F6\u4F1A\u5BFC\u81F4\u91CD\u65B0\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"store.state",paraId:1,tocIndex:0},{value:": \u76F4\u63A5\u8BFB\u5199",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"\u7684\u72B6\u6001\u6570\u636E\uFF0C",paraId:1,tocIndex:0},{value:"store.state",paraId:1,tocIndex:0},{value:"\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:1,tocIndex:0},{value:"reactive",paraId:1,tocIndex:0},{value:"\uFF0C\u5176\u5B9E\u8D28\u662F\u901A\u8FC7",paraId:1,tocIndex:0},{value:"Proxy",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u7684\uFF0C\u5F53\u8BFB\u5199",paraId:1,tocIndex:0},{value:"store.state",paraId:1,tocIndex:0},{value:"\u65F6\uFF0C\u4F1A\u89E6\u53D1\u5185\u90E8\u7684\u4F9D\u8D56\u6536\u96C6\uFF0C\u76F8\u5173\u8BA1\u7B97\u5C5E\u6027\u7684\u8FD0\u884C\uFF0C\u914D\u5408",paraId:1,tocIndex:0},{value:"signal",paraId:1,tocIndex:0},{value:"\u673A\u5236\u53EF\u4EE5\u81EA\u52A8\u89E6\u53D1\u7EC4\u4EF6\u7684\u7EC6\u7C92\u5EA6\u91CD\u65B0\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"\u5F53\u521B\u5EFA\u597D",paraId:2,tocIndex:1},{value:"Store",paraId:2,tocIndex:1},{value:"\u540E,\u4F60\u53EF\u4EE5\u5728\u5B58\u53D6",paraId:2,tocIndex:1},{value:"State",paraId:2,tocIndex:1},{value:"\u7528\u6765\u9A71\u52A8\u7EC4\u4EF6\u7EC6\u7C92\u5EA6\u6E32\u67D3\u3002",paraId:2,tocIndex:1},{value:"Store",paraId:3,tocIndex:1},{value:"\u5BF9\u8C61\u63D0\u4F9B\u4E86",paraId:3,tocIndex:1},{value:"useState",paraId:3,tocIndex:1},{value:"\u65B9\u6CD5\uFF0C\u7528\u6765\u5728\u7EC4\u4EF6\u4E2D\u8BBF\u95EE\u548C\u66F4\u65B0",paraId:3,tocIndex:1},{value:"Store",paraId:3,tocIndex:1},{value:"\u7684\u72B6\u6001\u6570\u636E\u3002\u5176\u4F7F\u7528\u65B9\u5F0F\u4E0E",paraId:3,tocIndex:1},{value:"React",paraId:3,tocIndex:1},{value:"\u7684",paraId:3,tocIndex:1},{value:"useState",paraId:3,tocIndex:1},{value:"\u65B9\u6CD5\u7C7B\u4F3C\u3002",paraId:3,tocIndex:1},{value:"useState",paraId:4},{value:"\u8FD8\u53EF\u4EE5\u63A5\u53D7",paraId:4},{value:"getter",paraId:4},{value:" \u548C",paraId:4},{value:"setter",paraId:4},{value:"\u4E24\u4E2A\u51FD\u6570\u53C2\u6570\uFF0C\u7528\u6765\u83B7\u53D6\u548C\u8BBE\u7F6E",paraId:4},{value:"State",paraId:4},{value:"\u4E2D\u7684\u67D0\u4E2A\u5C5E\u6027\u3002",paraId:4},{value:"\u9664\u4E86\u4F7F\u7528",paraId:5,tocIndex:2},{value:"useState",paraId:5,tocIndex:2},{value:"\u65B9\u6CD5\u8BFB\u5199\u72B6\u6001\u5916\uFF0C",paraId:5,tocIndex:2},{value:"sotre.state",paraId:5,tocIndex:2},{value:"\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A",paraId:5,tocIndex:2},{value:"reactive",paraId:5,tocIndex:2},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u8BFB\u5199\u5B83\u7684\u5C5E\u6027\u3002",paraId:5,tocIndex:2},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:6},{value:"\u6307\u7684\u662F\u53EF\u4EE5\u5BF9\u8BE5\u5BF9\u8C61\u8FDB\u884C\u8BFB\u53D6\uFF0C\u5176\u4FEE\u6539\u884C\u4E3A\u4F1A\u89E6\u53D1\u5185\u90E8\u7684\u4F9D\u8D56\u6536\u96C6\uFF0C\u76F8\u5173\u8BA1\u7B97\u5C5E\u6027\u7684\u8FD0\u884C\uFF0C\u5F53\u7136\u4E5F\u4F1A\u81EA\u52A8\u89E6\u53D1\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u3002",paraId:6}]},97336:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(54862);const r=[{value:"\u521B\u5EFA",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u65F6\u5BF9\u5E94\u521B\u5EFA\u4E00\u4E2A",paraId:0,tocIndex:0},{value:"Store",paraId:0,tocIndex:0},{value:"\u5BF9\u8C61,\u5C31\u5982\u540C",paraId:0,tocIndex:0},{value:"Redux",paraId:0,tocIndex:0},{value:"\u4E2D\u7684",paraId:0,tocIndex:0},{value:"Store",paraId:0,tocIndex:0},{value:"\u4E00\u6837,",paraId:0,tocIndex:0},{value:"Store",paraId:0,tocIndex:0},{value:"\u672C\u8D28\u4E0A\u5C31\u662F\u53D7\u63A7\u7684\u72B6\u6001\u6570\u636E\u5BF9\u8C61\uFF0C\u4F7F\u7528",paraId:0,tocIndex:0},{value:"helux",paraId:0,tocIndex:0},{value:"\u7684",paraId:0,tocIndex:0},{value:"atomx/sharex",paraId:0,tocIndex:0},{value:"\u521B\u5EFA\u3002",paraId:0,tocIndex:0},{value:"\u5178\u578B\u7684",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"\u7ED3\u6784\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"Store",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\u4E2D\u4F1A\u5B9A\u4E49",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u7ED3\u6784\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u4E0D\u5141\u8BB8\u76F4\u63A5\u4FEE\u6539",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\uFF0C\u800C\u662F\u901A\u8FC7",paraId:2,tocIndex:0},{value:"Action",paraId:2,tocIndex:0},{value:"\u6765\u4FEE\u6539",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u3002",paraId:2,tocIndex:0},{value:"Action",paraId:2,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u666E\u901A\u7684\u51FD\u6570\uFF0C\u4E00\u822C\u4F1A\u5B9E\u73B0\u67D0\u79CD\u4E1A\u52A1\u903B\u8F91\uFF0C\u53EF\u4EE5\u662F\u540C\u6B65\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5F02\u6B65\u51FD\u6570\u3002\u6267\u884C\u6210\u529F\u4F1A\u4FEE\u6539",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u3002",paraId:2,tocIndex:0},{value:"\u8BA1\u7B97\u5C5E\u6027\u4F1A\u4FA6\u542C",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u7684\u6570\u636E\u53D8\u5316\uFF0C\u5F53",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u8BA1\u7B97\u5C5E\u6027\u7684\u503C\u3002",paraId:2,tocIndex:0},{value:"@speedform/reactive",paraId:3,tocIndex:1},{value:"\u63D0\u4F9B\u4E86",paraId:3,tocIndex:1},{value:"createStore",paraId:3,tocIndex:1},{value:"\u65B9\u6CD5\u7528\u6765\u521B\u5EFA",paraId:3,tocIndex:1},{value:"Store",paraId:3,tocIndex:1},{value:"\u5BF9\u8C61\u3002",paraId:3,tocIndex:1},{value:`const user = {
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
`,paraId:6,tocIndex:2}]},20445:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(28794);const r=[{value:"watch",paraId:0},{value:"\u51FD\u6570\u4E0E",paraId:0},{value:"computed",paraId:0},{value:"\u51FD\u6570\u529F\u80FD\u7684\u533A\u522B\u5982\u4E0B\uFF1A",paraId:0},{value:"computed",paraId:1},{value:"\u51FD\u6570\u662F\u7528\u6765\u58F0\u660E\u8BA1\u7B97\u5C5E\u6027\u7684\uFF0C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u662F\u7528\u6765\u4FA6\u542C",paraId:1},{value:"State",paraId:1},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u7684\u3002",paraId:1},{value:"computed",paraId:1},{value:"\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u5199\u5165",paraId:1},{value:"State",paraId:1},{value:"\u4E2D\u7684\u5BF9\u5E94\u5C5E\u6027\uFF0C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u5199\u5165",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u6240\u5728\u7684\u4F4D\u7F6E\u3002",paraId:1},{value:"computed",paraId:1},{value:"\u51FD\u6570\u7684\u521B\u5EFA\u7684\u8BA1\u7B97\u5C5E\u6027\u662F\u57FA\u4E8E\u4F9D\u8D56\u6536\u96C6\u7684\uFF0C\u800C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u662F\u57FA\u4E8E\u4FA6\u542C\u7684,\u6BCF\u5F53",paraId:1},{value:"State",paraId:1},{value:"\u72B6\u6001\u53D8\u5316\u65F6\u5747\u4F1A\u8C03\u7528",paraId:1},{value:"watchOptions.on",paraId:1},{value:"\u8FC7\u6EE4\u51FD\u6570\u6765\u5339\u914D\u4FA6\u542C\u51FD\u6570\uFF0C\u56E0\u6B64\u7406\u8BBA\u4E0A\uFF0C",paraId:1},{value:"computed",paraId:1},{value:"\u51FD\u6570\u7684\u6027\u80FD\u66F4\u597D\uFF0C\u800C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u6027\u80FD\u4F1A\u5DEE\u4E9B\u3002",paraId:1},{value:"watch",paraId:1},{value:"\u53EA\u80FD\u662F\u540C\u6B65\u4FA6\u542C\u51FD\u6570\uFF0C\u800C",paraId:1},{value:"computed",paraId:1},{value:"\u53EF\u4EE5\u662F\u5F02\u6B65\u51FD\u6570\u3002",paraId:1}]},40074:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(44834);const r=[{value:"\u5982\u540C",paraId:0,tocIndex:0},{value:"ComputedObject",paraId:0,tocIndex:0},{value:"\u4E00\u6837\uFF0C\u6BCF\u4E00\u4E2A\u4F7F\u7528",paraId:0,tocIndex:0},{value:"watch",paraId:0,tocIndex:0},{value:"\u5305\u88C5\u7684\u8BA1\u7B97\u51FD\u6570\u5747\u521B\u5EFA\u4E00\u4E2A",paraId:0,tocIndex:0},{value:"WatchObject",paraId:0,tocIndex:0},{value:"\u5BF9\u8C61\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7",paraId:1,tocIndex:0},{value:"Store.watchObjects",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u8BBF\u95EE\u6240\u6709\u58F0\u660E\u7684",paraId:1,tocIndex:0},{value:"WatchObject",paraId:1,tocIndex:0},{value:"\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u8FDB\u884C\u76F8\u5173\u7684\u52A8\u6001\u79FB\u9664/\u7981\u7528\u7B49\u64CD\u4F5C\u3002",paraId:1,tocIndex:0},{value:`export interface WatchObject extends WatchOptions>{ 
    path:string[]
    run:(fromPath:string[])=>void
    listener:(...args:any[])=>any
}
`,paraId:2,tocIndex:0},{value:"\u6240\u6709\u521B\u5EFA\u7684",paraId:3,tocIndex:0},{value:"WatchObject",paraId:3,tocIndex:0},{value:"\u5BF9\u8C61\u4FDD\u5B58\u5728",paraId:3,tocIndex:0},{value:"Store.watchObjects",paraId:3,tocIndex:0},{value:` class WatchObjects extends Map{
    enable:boolean
    reset(){}
    enableGroup(groupName:string,value:boolean=true){}
 }

`,paraId:4,tocIndex:0}]},8996:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(3955);const r=[{value:"\u5927\u90E8\u4EFD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5E94\u8BE5\u4F7F\u7528",paraId:0},{value:"computed",paraId:0},{value:"\u51FD\u6570\u6765\u58F0\u660E\u8BA1\u7B97\u5C5E\u6027\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528",paraId:0},{value:"watch",paraId:0},{value:"\u51FD\u6570\u6765\u4FA6\u542C",paraId:0},{value:"State",paraId:0},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002\u4F46\u662F\u5728\u4E00\u4E9B\u7279\u6B8A\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u4F7F\u7528",paraId:0},{value:"watch",paraId:0},{value:"\u51FD\u6570\uFF0C\u4E3B\u8981\u5728\u4E8E\uFF1A",paraId:0},{value:"\u52A8\u6001\u4F9D\u8D56",paraId:1},{value:"computed",paraId:2},{value:"\u8BA1\u7B97\u51FD\u6570\u7684\u4F9D\u8D56\u4E00\u822C\u662F\u786E\u5B9A\u7684\uFF0C\u800C",paraId:2},{value:"watch",paraId:2},{value:"\u51FD\u6570\u7684\u4F9D\u8D56\u662F\u52A8\u6001\u7684\u3002\u8FD9\u6BD4\u8F83\u9002\u5408\u4E00\u4E9B\u9700\u8981\u52A8\u6001\u4FA6\u542C\u7684\u573A\u666F\uFF0C\u6BD4\u5982\u4E0A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u52A8\u6001\u4FA6\u542C",paraId:2},{value:"orders[].count",paraId:2},{value:"\u7684\u53D8\u5316\u6765\u8BA1\u7B97",paraId:2},{value:"total",paraId:2},{value:"\u3002\u800C",paraId:2},{value:"computed",paraId:2},{value:"\u51FD\u6570\u7684\u4F9D\u8D56\u662F\u9759\u6001\u7684\uFF0C\u4E00\u65E6\u58F0\u660E\u5C31\u4E0D\u4F1A\u53D8\u5316\u3002",paraId:2},{value:"\u591A\u5B57\u6BB5\u590D\u5408\u8BA1\u7B97",paraId:3},{value:"\u5F53\u67D0\u4E2A\u5B57\u6BB5\u9700\u8981\u8FDB\u884C\u590D\u5408\u8BA1\u7B97\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528",paraId:4},{value:"watch",paraId:4},{value:"\u51FD\u6570\u6765\u5B9E\u73B0\u3002\u6BD4\u5982\u5728",paraId:4},{value:"SpeedForm",paraId:4},{value:"\u5B9E\u73B0\u8868\u5355\u7684",paraId:4},{value:"validate",paraId:4},{value:"\u548C",paraId:4},{value:"dirty",paraId:4},{value:"\u5C5E\u6027\u7684\u8BA1\u7B97\u65F6\uFF0C\u5C31\u662F\u4F7F\u7528",paraId:4},{value:"watch",paraId:4},{value:"\u5B9E\u73B0\u3002",paraId:4},{value:"\u6BD4\u5982\u8FD9\u662F\u8868\u5355",paraId:5},{value:"validate",paraId:5},{value:"\u68C0\u6D4B\u7684\u5B9E\u73B0\u4EE3\u7801\uFF1A",paraId:5},{value:`export function validate<T=any>(options?:ValidateOptions){
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
`,paraId:8},{value:"value",paraId:9},{value:"\uFF1A\u53D8\u5316\u7684\u503C",paraId:9},{value:"fromPath",paraId:10},{value:"\uFF1A\u6307\u7684\u662F\u54EA\u91CC\u53D1\u751F\u53D8\u5316\u7684\u8DEF\u5F84",paraId:10},{value:"getCache",paraId:11},{value:"\uFF1A\u7528\u6765\u83B7\u53D6\u5F53\u524D",paraId:11},{value:"watch",paraId:11},{value:"\u7684",paraId:11},{value:"cache",paraId:11},{value:"\u5BF9\u8C61\uFF0C\u7528\u6765\u4FDD\u5B58\u6821\u9A8C\u503C\u3002",paraId:11},{value:"\u5728",paraId:12},{value:"cache",paraId:12},{value:"\u91CC\u9762\u6211\u4EEC\u4FDD\u5B58\u4ECE\u6821\u9A8C\u8303\u56F4\u5185\u6240\u6709",paraId:12},{value:"value=false",paraId:12},{value:"\uFF0C\u5982\u679C",paraId:12},{value:"Object.keys(selfCache).length==0",paraId:12},{value:"\u5C31\u4EE3\u8868\u5728\u8BE5\u6821\u9A8C\u8303\u56F4\u5185\u6240\u6709\u5B57\u6BB5\u5747\u6709\u6548\u3002",paraId:12}]},7546:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(7070);const r=[{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B",paraId:0,tocIndex:0},{value:"watch",paraId:0,tocIndex:0},{value:"\u529F\u80FD\uFF0C\u7528\u6765\u76D1\u89C6",paraId:0,tocIndex:0},{value:"State",paraId:0,tocIndex:0},{value:"\u6570\u636E\u7684\u53D8\u5316,\u5F53\u6240\u76D1\u89C6\u7684\u6570\u636E\u53D1\u751F\u65F6\uFF0C\u53EF\u4EE5\u6267\u884C\u4FA6\u542C\u5668\u51FD\u6570\u3002",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u4E09\u79CD\u4F7F\u7528",paraId:1,tocIndex:0},{value:"watch",paraId:1,tocIndex:0},{value:"\u7684\u65B9\u5F0F\uFF1A",paraId:1,tocIndex:0},{value:"\u76F4\u63A5\u5728",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u4E2D\u58F0\u660E",paraId:2,tocIndex:0},{value:"watch",paraId:2,tocIndex:0},{value:"\u51FD\u6570,\u7136\u540E\u5C06\u4FA6\u542C\u5668\u8FD4\u56DE\u503C\u5199\u5165\u58F0\u660E",paraId:2,tocIndex:0},{value:"watch",paraId:2,tocIndex:0},{value:"\u51FD\u6570\u6240\u5728\u7684\u4F4D\u7F6E\u3002",paraId:2,tocIndex:0},{value:"\u8C03\u7528",paraId:2,tocIndex:0},{value:"store.watch",paraId:2,tocIndex:0},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002",paraId:2,tocIndex:0},{value:"\u5728\u7EC4\u4EF6\u4E2D\u8C03\u7528",paraId:2,tocIndex:0},{value:"store.useWatch",paraId:2,tocIndex:0},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:2,tocIndex:0},{value:"store",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\u7684\u53D8\u5316,\u5F53\u7EC4\u4EF6\u9500\u6BC1\u81EA\u52A8\u53D6\u6D88\u8BA2\u9605\u3002",paraId:2,tocIndex:0},{value:"@speedform/reactive",paraId:3,tocIndex:1},{value:"\u63D0\u4F9B\u4E86",paraId:3,tocIndex:1},{value:"watch",paraId:3,tocIndex:1},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u5728",paraId:3,tocIndex:1},{value:"state",paraId:3,tocIndex:1},{value:"\u58F0\u660E\u6765\u4FA6\u542C",paraId:3,tocIndex:1},{value:"State",paraId:3,tocIndex:1},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002",paraId:3,tocIndex:1},{value:"watch",paraId:4,tocIndex:1},{value:"\u51FD\u6570\u7684\u57FA\u672C\u7279\u6027\u5982\u4E0B\uFF1A",paraId:4,tocIndex:1},{value:"watch",paraId:5,tocIndex:1},{value:"\u53EF\u4EE5\u7528\u6765\u4FA6\u542C\u6574\u4E2A",paraId:5,tocIndex:1},{value:"store",paraId:5,tocIndex:1},{value:"\u5BF9\u8C61\u7684\u53D8\u5316\uFF0C\u5F53\u4FA6\u542C\u5230\u53D8\u5316\u65F6\u4F1A\u6267\u884C\u4FA6\u542C\u5668\u51FD\u6570\u3002",paraId:5,tocIndex:1},{value:"\u4FA6\u542C\u5668\u51FD\u6570\u53EA\u80FD\u662F\u4E00\u4E2A\u540C\u6B65\u51FD\u6570\u3002",paraId:5,tocIndex:1},{value:"\u4FA6\u542C\u5668\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u5199\u5165",paraId:5,tocIndex:1},{value:"watch",paraId:5,tocIndex:1},{value:"\u51FD\u6570\u6240\u5728\u7684\u4F4D\u7F6E\u3002",paraId:5,tocIndex:1},{value:"watch",paraId:6,tocIndex:2},{value:"\u51FD\u6570\u7B7E\u540D\u5982\u4E0B\uFF1A",paraId:6,tocIndex:2},{value:`function watch<Value = any,Result=Value>(
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
`,paraId:20,tocIndex:4},{value:"\u5728\u8FDB\u884C\u8868\u5355\u9A8C\u8BC1\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528",paraId:21,tocIndex:4},{value:"formState.validate",paraId:21,tocIndex:4},{value:"\u6765\u83B7\u53D6\u6574\u4E2A\u8868\u5355\u7684\u9A8C\u8BC1\u7ED3\u679C\u3002",paraId:21,tocIndex:4},{value:"\u9664\u4E86\u53EF\u4EE5\u5728",paraId:22,tocIndex:5},{value:"State",paraId:22,tocIndex:5},{value:"\u4E2D\u58F0\u660E",paraId:22,tocIndex:5},{value:"watch",paraId:22,tocIndex:5},{value:"\u51FD\u6570\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u5728",paraId:22,tocIndex:5},{value:"Store",paraId:22,tocIndex:5},{value:"\u5BF9\u8C61\u4E2D\u58F0\u660E",paraId:22,tocIndex:5},{value:"watch",paraId:22,tocIndex:5},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:22,tocIndex:5},{value:"State",paraId:22,tocIndex:5},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002",paraId:22,tocIndex:5},{value:"\u5728\u7EC4\u4EF6\u5185\u4FA6\u542C\u53EF\u4EE5\u4F7F\u7528",paraId:23,tocIndex:6},{value:"store.useWatch",paraId:23,tocIndex:6},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:23,tocIndex:6},{value:"store",paraId:23,tocIndex:6},{value:"\u5BF9\u8C61\u7684\u53D8\u5316,\u5F53\u7EC4\u4EF6\u9500\u6BC1\u81EA\u52A8\u53D6\u6D88\u8BA2\u9605\u3002",paraId:23,tocIndex:6}]},81820:function(Q,i,e){e.r(i),e.d(i,{texts:function(){return r}});var K=e(64100);const r=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u975E\u5E38\u8F7B\u91CF\u7EA7\u7684\u8868\u5355\u7EC4\u4EF6\uFF0C\u5B83\u7684\u76EE\u6807\u662F\u8BA9\u8868\u5355\u5F00\u53D1\u53D8\u5F97\u66F4\u52A0\u7B80\u5355\u3001\u5FEB\u901F\u3001\u7075\u6D3B\u3002",paraId:0,tocIndex:0},{value:"@speed-form/antd",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/element-ui",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"element-ui",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"element-ui",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/iview",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"iview",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"iview",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/vuetify",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"vuetify",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"vuetify",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/element-plus",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"element-plus",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"element-plus",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/ant-design-vue",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"ant-design-vue",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"ant-design-vue",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/naive-ui",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"naive-ui",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"naive-ui",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/element3",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"element3",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"element3",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0}]}}]);
