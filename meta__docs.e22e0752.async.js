"use strict";(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[904],{33353:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(24908),z={}},12621:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(78719),z={}},35706:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(58839),z={}},40305:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(43230),z={}},38139:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(64010),z={}},98157:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(90938),z={}},93797:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(97278),z={}},535:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(83975),z={}},6892:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(82376),z={}},69581:function(H,I,e){e.r(I),e.d(I,{demos:function(){return V}});var W=e(28633),l=e.n(W),z=e(29008),j=e.n(z),k=e(70958),L=e.n(k),t=e(92379),U=e(59147),V={"docs-core-form-action-demo-0":{component:t.memo(t.lazy(L()(j()().mark(function M(){var s,O,h,u,E,n,w,c,D,N;return j()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.bind(e,6244));case 2:return s=A.sent,O=s.createForm,h=s.action,A.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return u=A.sent,E=u.Row,n=u.Col,w=u.Button,c=u.Input,D={fields:{username:{value:"fisher",required:!0,title:"\u59D3\u540D"},password:{value:"123",required:!0,title:"\u5BC6\u7801"}},actions:{login:{title:"\u767B\u5F55",execute:h(function(){var C=L()(j()().mark(function R(i,p){return j()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:console.log("\u767B\u5F55",i);case 1:case"end":return b.stop()}},R)}));return function(R,i){return C.apply(this,arguments)}}())}}},N=O(D,{debug:!0}),A.abrupt("return",{default:function(){var R=useState(""),i=l()(R,2),p=i[0],r=i[1];return t.createElement(E,null,t.createElement(n,null,t.createElement(N.Field,{name:"username"},function(b){var S=b.value,g=b.sync;return t.createElement("div",null,"\u7528\u6237\u540D\uFF1A",t.createElement("input",{value:S,onChange:g()}))}),t.createElement(N.Field,{name:"password"},function(b){var S=b.value,g=b.sync;return t.createElement("div",null,"\u5BC6\u7801\uFF1A",t.createElement("input",{value:S,onChange:g()}))}),t.createElement(N.Action,{name:"login"},function(b){var S=b.title,g=b.visible,F=b.loading,K=b.enable,J=b.run,G=b.cancel,ae=b.error,q=b.progress;return t.createElement(t.Fragment,null,t.createElement(c,{type:"submit",value:"\u63D0\u4EA4"}),t.createElement(w,{loading:F,cancel:G,timeout:q,visible:g,enable:K,error:ae,onClick:J()},S))})),t.createElement(n,null,"dsdsd"))}});case 15:case"end":return A.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-core-form-action-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createForm,action }  from "@speedform/core"
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
}`},"@speedform/core":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/core":e(6244),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var h,u=arguments;return j()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}}}},70250:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(76726),z={}},56105:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(88209),z={}},81911:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(14741),z={}},3228:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(97630),z={}},78016:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(72e3),z={}},71229:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(27548),z={}},97521:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(31430),z={}},37013:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(48566),z={}},37763:function(H,I,e){e.r(I),e.d(I,{demos:function(){return t}});var W=e(29008),l=e.n(W),z=e(70958),j=e.n(z),k=e(92379),L=e(25248),t={"docs-core-quick-start-demo-0":{component:k.memo(k.lazy(j()(l()().mark(function U(){var V,M,s,O,h,u,E,n,w,c,D,N,x;return l()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,21970));case 2:return V=C.sent,M=V.forms,C.next=6,Promise.resolve().then(e.t.bind(e,26372,23));case 6:return s=C.sent,O=s.default,C.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return h=C.sent,u=h.Card,E=h.Field,n=h.Input,w=h.ValidResult,C.next=17,Promise.resolve().then(e.t.bind(e,92379,19));case 17:return c=C.sent,D=c.useCallback,N=c.useRef,x=M.Network,C.abrupt("return",{default:function(){var i=N(),p=D(function(){return alert("submit"),console.log("submit"),!1},[]);return k.createElement(u,{title:"\u7F51\u7EDC\u914D\u7F6E\u8868\u5355"},k.createElement(x.Form,{onSubmit:p,action:"/api",ref:i},k.createElement(x.Field,{name:"title"},function(r){var b=r.name,S=r.title,g=r.value,F=r.visible,K=r.validate,J=r.placeholder,G=r.sync;return k.createElement(E,{name:"title",visible:F,label:S,validate:K},k.createElement(n,{name:b,className:O({invalid:!K}),placeholder:J,value:g,onChange:G()}))}),k.createElement(x.Field,{name:"interface"},function(r){var b=r.name,S=r.title,g=r.required,F=r.visible,K=r.validate,J=r.enable,G=r.value,ae=r.initial,q=r.select,ne=r.sync;return k.createElement(E,{name:"interface",label:S},k.createElement("select",{value:G,onChange:ne()},q.map(function(re,ie){return k.createElement("option",{key:ie,value:re.value},re.title)})))}),k.createElement(x.Field,{name:"ip"},function(r){var b=r.name,S=r.title,g=r.value,F=r.visible,K=r.validate,J=r.placeholder,G=r.sync;return k.createElement(E,{name:"ip",visible:F,label:S,validate:K,memo:"\u4FEE\u6539\u8FDB\u884C\u5F02\u6B65\u6821\u9A8C"},k.createElement(n,{name:b,validate:K.result,placeholder:J,value:g,onChange:G(100)}))}),k.createElement(x.Field,{name:"gateway"},function(r){var b=r.name,S=r.title,g=r.value,F=r.required,K=r.visible,J=r.validate,G=r.update,ae=r.enable,q=r.placeholder,ne=r.sync;return k.createElement(E,{name:"gateway",visible:K,label:S},k.createElement(n,{name:b,validate:J,placeholder:q,value:g,onChange:ne()}),k.createElement("button",{onClick:G(function(re){re.gateway.value="192.168.1.2"})},"\u6062\u590D"),k.createElement("button",{onClick:G("192.168.1.1")},"\u66F4\u65B0\u503C"))}),k.createElement(x.Group,{name:"wifi"},function(r){var b=r.title,S=r.visible;return k.createElement(u,{title:b+"(\u4EC5interfact=wifi\u65F6\u663E\u793A)",visible:S},k.createElement(x.Field,{name:"wifi.ssid"},function(g){var F=g.name,K=g.value,J=g.required,G=g.visible,ae=g.validate,q=g.enable,ne=g.initial,re=g.sync;return k.createElement(E,{name:"wifi.ssid",label:"SSID",enable:q},k.createElement(n,{name:F,className:O({invalid:!ae}),value:K,onChange:re()}))}),k.createElement(x.Field,{name:"wifi.password"},function(g){var F=g.name,K=g.value,J=g.enable,G=g.validate,ae=g.placeholder,q=g.help,ne=g.sync;return k.createElement(E,{name:"wifi.password",label:"\u5BC6\u7801",enable:J,className:O({invalid:!G})},k.createElement(n,{name:F,style:{border:G?"1px solid #ccc":"1px solid red"},"data-help":q,value:K,placeholder:ae,onChange:ne(),readOnly:!J}),k.createElement(w,{validate:G,help:q}))}))}),k.createElement(x.Field,{name:"dhcp.enable"},function(r){var b=r.name,S=r.title,g=r.visible,F=r.value,K=r.validate,J=r.sync;return k.createElement(E,{name:"dhcp.enable",visible:g,label:S},k.createElement("input",{name:b,className:O({invalid:!K}),type:"checkbox",checked:F,onChange:J()}))}),k.createElement(x.Field,{name:"dhcp.start"},function(r){var b=r.name,S=r.value,g=r.validate,F=r.enable,K=r.visible,J=r.title,G=r.sync;return k.createElement(E,{name:"dhcp.start",label:J,enable:F},k.createElement(n,{name:b,enable:F,className:O({invalid:!g}),value:S,onChange:G()}))}),k.createElement(x.Field,{name:"dhcp.end"},function(r){var b=r.name,S=r.value,g=r.validate,F=r.visible,K=r.title,J=r.enable,G=r.sync;return k.createElement(E,{name:"dhcp.end",enable:J,label:K},k.createElement(n,{name:b,enable:J,className:O({invalid:!g}),value:S,onChange:G()}))}),k.createElement(x.Submit,null),k.createElement(x.Reset,null)))}});case 22:case"end":return C.stop()}},U)})))),asset:{type:"BLOCK",id:"docs-core-quick-start-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { forms } from 'speedform-docs'
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
}`},"speedform-docs":{type:"NPM",value:"1.0.0"},classnames:{type:"NPM",value:"2.3.2"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"speedform-docs":e(21970),classnames:e(26372),"@speedform/demo-components":e(48398),react:e(92379)},renderOpts:{compile:function(){var U=j()(l()().mark(function M(){var s,O=arguments;return l()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(660).then(e.bind(e,7660));case 2:return u.abrupt("return",(s=u.sent).default.apply(s,O));case 3:case"end":return u.stop()}},M)}));function V(){return U.apply(this,arguments)}return V}()}}}},66027:function(H,I,e){e.r(I),e.d(I,{demos:function(){return t}});var W=e(29008),l=e.n(W),z=e(70958),j=e.n(z),k=e(92379),L=e(48101),t={"docs-core-tutorial-demo-0":{component:k.memo(k.lazy(j()(l()().mark(function U(){var V,M,s,O,h,u,E,n,w,c,D,N,x;return l()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,21970));case 2:return V=C.sent,M=V.forms,C.next=6,Promise.resolve().then(e.t.bind(e,26372,23));case 6:return s=C.sent,O=s.default,C.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return h=C.sent,u=h.Card,E=h.Field,n=h.Input,w=h.ValidResult,C.next=17,Promise.resolve().then(e.t.bind(e,92379,19));case 17:return c=C.sent,D=c.useCallback,N=c.useRef,x=M.Network,C.abrupt("return",{default:function(){var i=N(),p=D(function(){return alert("submit"),console.log("submit"),!1},[]);return k.createElement(u,{title:"\u7F51\u7EDC\u914D\u7F6E\u8868\u5355"},k.createElement(x.Form,{onSubmit:p,action:"/api",ref:i},k.createElement(x.Field,{name:"title"},function(r){var b=r.name,S=r.title,g=r.value,F=r.visible,K=r.validate,J=r.placeholder,G=r.sync;return k.createElement(E,{name:"title",visible:F,label:S,validate:K},k.createElement(n,{name:b,className:O({invalid:!K}),placeholder:J,value:g,onChange:G()}))}),k.createElement(x.Field,{name:"interface"},function(r){var b=r.name,S=r.title,g=r.required,F=r.visible,K=r.validate,J=r.enable,G=r.value,ae=r.initial,q=r.select,ne=r.sync;return k.createElement(E,{name:"interface",label:S},k.createElement("select",{value:G,onChange:ne()},q.map(function(re,ie){return k.createElement("option",{key:ie,value:re.value},re.title)})))}),k.createElement(x.Field,{name:"ip"},function(r){var b=r.name,S=r.title,g=r.value,F=r.visible,K=r.validate,J=r.placeholder,G=r.sync;return k.createElement(E,{name:"ip",visible:F,label:S,validate:K,memo:"\u4FEE\u6539\u8FDB\u884C\u5F02\u6B65\u6821\u9A8C"},k.createElement(n,{name:b,validate:K.result,placeholder:J,value:g,onChange:G(100)}))}),k.createElement(x.Field,{name:"gateway"},function(r){var b=r.name,S=r.title,g=r.value,F=r.required,K=r.visible,J=r.validate,G=r.update,ae=r.enable,q=r.placeholder,ne=r.sync;return k.createElement(E,{name:"gateway",visible:K,label:S},k.createElement(n,{name:b,validate:J,placeholder:q,value:g,onChange:ne()}),k.createElement("button",{onClick:G(function(re){re.gateway.value="192.168.1.2"})},"\u6062\u590D"),k.createElement("button",{onClick:G("192.168.1.1")},"\u66F4\u65B0\u503C"))}),k.createElement(x.Group,{name:"wifi"},function(r){var b=r.title,S=r.visible;return k.createElement(u,{title:b+"(\u4EC5interfact=wifi\u65F6\u663E\u793A)",visible:S},k.createElement(x.Field,{name:"wifi.ssid"},function(g){var F=g.name,K=g.value,J=g.required,G=g.visible,ae=g.validate,q=g.enable,ne=g.initial,re=g.sync;return k.createElement(E,{name:"wifi.ssid",label:"SSID",enable:q},k.createElement(n,{name:F,className:O({invalid:!ae}),value:K,onChange:re()}))}),k.createElement(x.Field,{name:"wifi.password"},function(g){var F=g.name,K=g.value,J=g.enable,G=g.validate,ae=g.placeholder,q=g.help,ne=g.sync;return k.createElement(E,{name:"wifi.password",label:"\u5BC6\u7801",enable:J,className:O({invalid:!G})},k.createElement(n,{name:F,style:{border:G?"1px solid #ccc":"1px solid red"},"data-help":q,value:K,placeholder:ae,onChange:ne(),readOnly:!J}),k.createElement(w,{validate:G,help:q}))}))}),k.createElement(x.Field,{name:"dhcp.enable"},function(r){var b=r.name,S=r.title,g=r.visible,F=r.value,K=r.validate,J=r.sync;return k.createElement(E,{name:"dhcp.enable",visible:g,label:S},k.createElement("input",{name:b,className:O({invalid:!K}),type:"checkbox",checked:F,onChange:J()}))}),k.createElement(x.Field,{name:"dhcp.start"},function(r){var b=r.name,S=r.value,g=r.validate,F=r.enable,K=r.visible,J=r.title,G=r.sync;return k.createElement(E,{name:"dhcp.start",label:J,enable:F},k.createElement(n,{name:b,enable:F,className:O({invalid:!g}),value:S,onChange:G()}))}),k.createElement(x.Field,{name:"dhcp.end"},function(r){var b=r.name,S=r.value,g=r.validate,F=r.visible,K=r.title,J=r.enable,G=r.sync;return k.createElement(E,{name:"dhcp.end",enable:J,label:K},k.createElement(n,{name:b,enable:J,className:O({invalid:!g}),value:S,onChange:G()}))}),k.createElement(x.Submit,null),k.createElement(x.Reset,null)))}});case 22:case"end":return C.stop()}},U)})))),asset:{type:"BLOCK",id:"docs-core-tutorial-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { forms } from 'speedform-docs'
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
}`},"speedform-docs":{type:"NPM",value:"1.0.0"},classnames:{type:"NPM",value:"2.3.2"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"speedform-docs":e(21970),classnames:e(26372),"@speedform/demo-components":e(48398),react:e(92379)},renderOpts:{compile:function(){var U=j()(l()().mark(function M(){var s,O=arguments;return l()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(660).then(e.bind(e,7660));case 2:return u.abrupt("return",(s=u.sent).default.apply(s,O));case 3:case"end":return u.stop()}},M)}));function V(){return U.apply(this,arguments)}return V}()}}}},84867:function(H,I,e){e.r(I),e.d(I,{demos:function(){return V}});var W=e(28633),l=e.n(W),z=e(29008),j=e.n(z),k=e(70958),L=e.n(k),t=e(92379),U=e(59856),V={"docs-reactive-computed-async-demo-0":{component:t.memo(t.lazy(L()(j()().mark(function M(){var s,O,h,u,E,n;return j()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=c.sent,O=s.createStore,h=s.computed,c.next=7,Promise.resolve().then(e.bind(e,21970));case 7:return u=c.sent,E=u.delay,n=O({user:{firstName:"Zhang",lastName:"Fisher",fullName:h(function(){var D=L()(j()().mark(function N(x){return j()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,E();case 2:return C.abrupt("return",x.firstName+x.lastName);case 3:case"end":return C.stop()}},N)}));return function(N){return D.apply(this,arguments)}}(),["user.firstName","./lastName"])}}),c.abrupt("return",{default:function(){var N=n.useState(),x=l()(N,1),A=x[0];return t.createElement(t.Fragment,null,t.createElement("div",null,"firstName:",t.createElement("input",{value:A.user.firstName,onChange:n.sync(["user","firstName"])})),t.createElement("div",null,"lastName:",t.createElement("input",{value:A.user.lastName,onChange:n.sync(["user","lastName"])})),t.createElement("div",null,"fullName:",A.user.fullName.loading?"\u91CD\u65B0\u8BA1\u7B97...":A.user.fullName.result))}});case 11:case"end":return c.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap,$} from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),"speedform-docs":e(21970)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var h,u=arguments;return j()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}},"docs-reactive-computed-async-demo-1":{component:t.memo(t.lazy(L()(j()().mark(function M(){var s,O,h,u,E,n;return j()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=c.sent,O=s.computed,h=s.createStore,c.next=7,Promise.resolve().then(e.bind(e,21970));case 7:return u=c.sent,E=u.api,n=h({user:{repo:"https://api.github.com/users/zhangfisher/repos",projects:O(function(){var D=L()(j()().mark(function N(x){var A,C;return j()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return A=l()(x,1),C=A[0],i.next=3,new Promise(function(p){return setTimeout(p,2e3)});case 3:return i.next=5,E.getProjects(C);case 5:return i.abrupt("return",i.sent);case 6:case"end":return i.stop()}},N)}));return function(N){return D.apply(this,arguments)}}(),["user.repo"],{scope:"depends"})}}),c.abrupt("return",{default:function(){var N=n.useState(),x=l()(N,1),A=x[0];return t.createElement("div",null,t.createElement("p",null,t.createElement("b",null,"\u4FEE\u6539\u4ED3\u5E93\u5730\u5740\u5C06\u89E6\u53D1\u91CD\u65B0\u52A0\u8F7D\u8BE5\u4ED3\u5E93\u9879\u76EE\u5217\u8868")),"\u4ED3\u5E93\u5730\u5740\uFF1A",t.createElement("input",{value:A.user.repo,onChange:n.sync(["user","repo"])}),t.createElement("button",{onClick:function(){return n.state.user.projects.run()}},"\u91CD\u8BD5"),t.createElement("button",{onClick:function(){return n.state.user.repo="https://api.github.com/users/zhangfisher/repos"}},"\u6062\u590D"),t.createElement("table",{className:"projects-list"},t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"3"},"\u4EE5\u4E0B\u662F\u6211\u7684\u5F00\u6E90\u9879\u76EE\uFF0C\u611F\u8C22\u652F\u6301\uFF01")),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u9879\u76EE\u540D\u79F0")),t.createElement("td",null,t.createElement("b",null,"\u8BF4\u660E")),t.createElement("td",null,t.createElement("b",null,"\u661F")))),t.createElement("tbody",null,A.user.projects.loading?t.createElement("tr",null,t.createElement("td",{colSpan:3},"\u6B63\u5728\u52A0\u8F7D...:")):A.user.projects.error?t.createElement("tr",null,t.createElement("td",{colSpan:2},"\u52A0\u8F7D\u9519\u8BEF:",A.user.projects.error)):A.user.projects&&A.user.projects.result.map(function(C,R){return t.createElement("tr",{key:R},t.createElement("td",null,t.createElement("a",{href:C.url,target:"__blank"},C.name)),t.createElement("td",null,C.description),t.createElement("td",null,C.stars))}))))}});case 11:case"end":return c.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { computed,createStore } from "@speedform/reactive"
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

}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),"speedform-docs":e(21970)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var h,u=arguments;return j()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}},"docs-reactive-computed-async-demo-2":{component:t.memo(t.lazy(L()(j()().mark(function M(){var s,O,h,u,E,n;return j()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=c.sent,O=s.createStore,h=s.computed,u=s.ComputedScopeRef,E={user:{firstName:"zhang",lastName:"fisher",fullName:h(function(){var D=L()(j()().mark(function N(x){var A,C,R;return j()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return A=l()(x,2),C=A[0],R=A[1],p.abrupt("return",C+R);case 2:case"end":return p.stop()}},N)}));return function(N){return D.apply(this,arguments)}}(),["user.firstName","user.lastName"],{scope:u.Depends}),fullName1:h(function(){var D=L()(j()().mark(function N(x){var A,C,R;return j()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return A=l()(x,2),C=A[0],R=A[1],p.abrupt("return",C+R);case 2:case"end":return p.stop()}},N)}));return function(N){return D.apply(this,arguments)}}(),["./firstName","./lastName"],{scope:u.Depends})},other:{fullName2:h(function(){var D=L()(j()().mark(function N(x){var A,C,R;return j()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return A=l()(x,2),C=A[0],R=A[1],p.abrupt("return",C+R);case 2:case"end":return p.stop()}},N)}));return function(N){return D.apply(this,arguments)}}(),["../user.firstName","../user.lastName"],{scope:u.Depends})}},n=O(E),c.abrupt("return",{default:function(){var N=n.useState(),x=l()(N,1),A=x[0];return t.createElement("div",null,t.createElement("div",null,"firstName=",A.user.firstName),t.createElement("div",null,"lastName=",A.user.lastName),t.createElement("div",null,"fullName=",A.user.fullName.result),t.createElement("div",null,"fullName1=",A.user.fullName1.result),t.createElement("div",null,"fullName2=",A.other.fullName2.result))}});case 9:case"end":return c.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef } from "@speedform/reactive" 

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var h,u=arguments;return j()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}},"docs-reactive-computed-async-demo-3":{component:t.memo(t.lazy(L()(j()().mark(function M(){var s,O,h,u,E,n,w,c,D,N,x,A;return j()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=R.sent,O=s.createStore,h=s.computed,R.next=7,Promise.resolve().then(e.t.bind(e,92379,19));case 7:return u=R.sent,E=u.useRef,n=u.useEffect,R.next=12,Promise.resolve().then(e.bind(e,21970));case 12:return w=R.sent,c=w.delay,R.next=16,Promise.resolve().then(e.bind(e,48398));case 16:return D=R.sent,N=D.Box,x={user:{firstName:"Zhang",lastName:"Fisher",fullName:h(function(){var i=L()(j()().mark(function p(r){return j()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,c();case 2:return S.abrupt("return",r.firstName+r.lastName);case 3:case"end":return S.stop()}},p)}));return function(p){return i.apply(this,arguments)}}(),["user.firstName","user.lastName"])}},A=O(x),R.abrupt("return",{default:function(){var p=E(0),r=A.useState(),b=l()(r,2),S=b[0],g=b[1];return n(function(){p.current++},[]),t.createElement(N,null,t.createElement("div",null,t.createElement("div",null,"FirstName:",S.user.firstName),t.createElement("div",null,"LastName:",S.user.lastName),t.createElement("div",null,"FullName:",S.user.fullName.loading?"\u6B63\u5728\u8BA1\u7B97...":S.user.fullName.error?"ERROR:".concat(S.user.fullName.error):S.user.fullName.result),t.createElement("button",{onClick:function(){return g(function(K){return K.user.firstName="ZHANG "+p.current++})}},"\u4FEE\u6539FirstName"),t.createElement("button",{onClick:function(){return g(function(K){return K.user.lastName="FISHER"+p.current++})}},"\u4FEE\u6539LastName"),t.createElement("button",{onClick:function(){return S.user.fullName.run()}},"\u91CD\u65B0\u8BA1\u7B97")),t.createElement("div",null,JSON.stringify(S.user.fullName)))}});case 21:case"end":return R.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),react:e(92379),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var h,u=arguments;return j()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}},"docs-reactive-computed-async-demo-4":{component:t.memo(t.lazy(L()(j()().mark(function M(){var s,O,h,u,E,n,w,c,D;return j()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=x.sent,O=s.createStore,h=s.computed,u=s.ComputedScopeRef,x.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return E=x.sent,n=E.delay,x.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return w=x.sent,c=w.Box,D=O({order:{bookName:"ZhangFisher",price:100,count:1,total:h(function(){var A=L()(j()().mark(function C(R,i){var p,r,b,S,g;return j()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return p=l()(R,2),r=p[0],b=p[1],S=i.getProgressbar,g=S(),K.abrupt("return",new Promise(function(){var J=L()(j()().mark(function G(ae){var q;return j()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:q=1;case 1:if(!(q<=100)){re.next=8;break}return re.next=4,n(20);case 4:g.value(q);case 5:q++,re.next=1;break;case 8:g.end(),ae(r*b);case 10:case"end":return re.stop()}},G)}));return function(G){return J.apply(this,arguments)}}()));case 4:case"end":return K.stop()}},C)}));return function(C,R){return A.apply(this,arguments)}}(),["order.count","order.price"],{scope:u.Depends})}}),x.abrupt("return",{default:function(){var C=D.useState(),R=l()(C,2),i=R[0],p=R[1];return t.createElement(c,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,i.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,i.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return p(function(b){return b.order.count=b.order.count-1})}},"-"),t.createElement("input",{value:i.order.count,onChange:D.sync(function(r){return r.order.count})}),t.createElement("button",{onClick:function(){return p(function(b){return b.order.count=b.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,i.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...".concat(i.order.total.progress,"%"):i.order.total.error?"ERROR:".concat(i.order.total.error):i.order.total.result)))),t.createElement("div",null,JSON.stringify(i.order.total)))}});case 16:case"end":return x.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var h,u=arguments;return j()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}},"docs-reactive-computed-async-demo-5":{component:t.memo(t.lazy(L()(j()().mark(function M(){var s,O,h,u,E,n,w,c,D;return j()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=x.sent,O=s.createStore,h=s.computed,u=s.ComputedScopeRef,x.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return E=x.sent,n=E.delay,x.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return w=x.sent,c=w.Box,D=O({order:{bookName:"ZhangFisher",price:100,count:1,total:h(function(){var A=L()(j()().mark(function C(R){var i,p,r;return j()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return i=l()(R,2),p=i[0],r=i[1],S.next=3,n(2e3);case 3:return S.abrupt("return",p*r);case 4:case"end":return S.stop()}},C)}));return function(C){return A.apply(this,arguments)}}(),["order.count","order.price"],{timeout:1e3,scope:u.Depends})}}),x.abrupt("return",{default:function(){var C=D.useState(),R=l()(C,2),i=R[0],p=R[1];return t.createElement(c,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,i.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,i.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return p(function(b){return b.order.count=b.order.count-1})}},"-"),t.createElement("input",{value:i.order.count,onChange:D.sync(function(r){return r.order.count})}),t.createElement("button",{onClick:function(){return p(function(b){return b.order.count=b.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,i.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...(\u8D85\u65F6:".concat(i.order.total.timeout,")"):i.order.total.error?"ERROR:".concat(i.order.total.error):i.order.total.result)))),t.createElement("div",null,JSON.stringify(i.order.total)))}});case 16:case"end":return x.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var h,u=arguments;return j()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}},"docs-reactive-computed-async-demo-6":{component:t.memo(t.lazy(L()(j()().mark(function M(){var s,O,h,u,E,n,w,c,D;return j()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=x.sent,O=s.createStore,h=s.computed,u=s.ComputedScopeRef,x.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return E=x.sent,n=E.delay,x.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return w=x.sent,c=w.Box,D=O({order:{bookName:"ZhangFisher",price:100,count:1,total:h(function(){var A=L()(j()().mark(function C(R){var i,p,r;return j()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return i=l()(R,2),p=i[0],r=i[1],S.next=3,n(1e5);case 3:return S.abrupt("return",p*r);case 4:case"end":return S.stop()}},C)}));return function(C){return A.apply(this,arguments)}}(),["order.count","order.price"],{timeout:[5*1e3,5],scope:u.Depends})}}),x.abrupt("return",{default:function(){var C=D.useState(),R=l()(C,2),i=R[0],p=R[1];return t.createElement(c,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,i.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,i.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return p(function(b){return b.order.count=b.order.count-1})}},"-"),t.createElement("input",{value:i.order.count,onChange:D.sync(function(r){return r.order.count})}),t.createElement("button",{onClick:function(){return p(function(b){return b.order.count=b.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,i.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...(\u5012\u8BA1\u65F6:".concat(i.order.total.timeout,")"):i.order.total.error?"ERROR:".concat(i.order.total.error):i.order.total.result)))),t.createElement("div",null,JSON.stringify(i.order.total)))}});case 16:case"end":return x.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var h,u=arguments;return j()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}},"docs-reactive-computed-async-demo-7":{component:t.memo(t.lazy(L()(j()().mark(function M(){var s,O,h,u,E,n,w,c,D,N;return j()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=A.sent,O=s.createStore,h=s.computed,u=s.ComputedScopeRef,A.next=8,Promise.resolve().then(e.bind(e,21970));case 8:return E=A.sent,n=E.delay,A.next=12,Promise.resolve().then(e.bind(e,48398));case 12:return w=A.sent,c=w.Box,D=0,N=O({order:{bookName:"ZhangFisher",price:100,count:1,total:h(function(){var C=L()(j()().mark(function R(i){var p,r,b;return j()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return p=l()(i,2),r=p[0],b=p[1],++r,g.next=4,n();case 4:throw new Error("\u8BA1\u7B97\u51FA\u9519"+r);case 5:case"end":return g.stop()}},R)}));return function(R){return C.apply(this,arguments)}}(),["order.count","order.price"],{retry:[5,1e3],scope:u.Depends})}}),A.abrupt("return",{default:function(){var R=N.useState(),i=l()(R,2),p=i[0],r=i[1];return t.createElement(c,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,p.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,p.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return r(function(S){return S.order.count=S.order.count-1})}},"-"),t.createElement("input",{value:p.order.count,onChange:N.sync(function(b){return b.order.count})}),t.createElement("button",{onClick:function(){return r(function(S){D=0,S.order.count=S.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,p.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...":p.order.total.error?"ERROR:".concat(p.order.total.error):p.order.total.result,p.order.total.retry>0?"\u91CD\u8BD5:".concat(p.order.total.retry):"")))),t.createElement("div",null,JSON.stringify(p.order.total)))}});case 17:case"end":return A.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),"speedform-docs":e(21970),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var h,u=arguments;return j()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}},"docs-reactive-computed-async-demo-8":{component:t.memo(t.lazy(L()(j()().mark(function M(){var s,O,h,u,E,n,w;return j()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=D.sent,O=s.createStore,h=s.computed,u=s.ComputedScopeRef,D.next=8,Promise.resolve().then(e.bind(e,48398));case 8:return E=D.sent,n=E.Box,w=O({order:{bookName:"ZhangFisher",price:100,count:1,total:h(function(){var N=L()(j()().mark(function x(A,C){var R,i,p,r;return j()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return R=l()(A,2),i=R[0],p=R[1],r=C.abortSignal,S.abrupt("return",new Promise(function(g,F){setTimeout(function(){g(i*p)},1e4),r.addEventListener("abort",function(){F("cancelled")})}));case 3:case"end":return S.stop()}},x)}));return function(x,A){return N.apply(this,arguments)}}(),["order.count","order.price"],{timeout:[10*1e3,10],scope:u.Depends})}}),D.abrupt("return",{default:function(){var x=w.useState(),A=l()(x,2),C=A[0],R=A[1];return t.createElement(n,null,t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("td",{colSpan:"2"},"\u8BA2\u5355\u4FE1\u606F"))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4E66\u540D")),t.createElement("td",null,C.order.bookName)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u4EF7\u683C")),t.createElement("td",null,C.order.price)),t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u6570\u91CF")),t.createElement("td",null,t.createElement("button",{onClick:function(){return R(function(p){return p.order.count=p.order.count-1})}},"-"),t.createElement("input",{value:C.order.count,onChange:w.sync(function(i){return i.order.count})}),t.createElement("button",{onClick:function(){return R(function(p){p.order.count=p.order.count+1})}},"+")))),t.createElement("tfoot",null,t.createElement("tr",null,t.createElement("td",null,t.createElement("b",null,"\u603B\u4EF7")),t.createElement("td",null,C.order.total.loading?"\u6B63\u5728\u8BA1\u7B97...".concat(C.order.total.timeout):C.order.total.error?"ERROR:".concat(C.order.total.error):C.order.total.result,C.order.total.loading?t.createElement("button",{onClick:function(){return C.order.total.cancel()}},"\u53D6\u6D88"):"")))),t.createElement("div",null,JSON.stringify(C.order.total)))}});case 12:case"end":return D.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,getSnap } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var h,u=arguments;return j()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}},"docs-reactive-computed-async-demo-9":{component:t.memo(t.lazy(L()(j()().mark(function M(){var s,O,h,u;return j()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=n.sent,O=s.createStore,h=s.computed,u=O({bookName:"ZhangFisher",price:100,count:3,total:h(function(){var w=L()(j()().mark(function c(D){return j()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",D.price*D.count);case 1:case"end":return x.stop()}},c)}));return function(c){return w.apply(this,arguments)}}(),[])}),n.abrupt("return",{default:function(){var c=u.useState(),D=l()(c,1),N=D[0];return t.createElement("div",null,t.createElement("div",null,"\u4E66\u540D:",N.bookName),t.createElement("div",null,"\u4EF7\u683C:",N.price),t.createElement("div",null,"\u6570\u91CF:",N.count),t.createElement("div",null,"\u603B\u4EF7:",N.total.result))}});case 7:case"end":return n.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed} from "@speedform/reactive"

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var h,u=arguments;return j()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}},"docs-reactive-computed-async-demo-10":{component:t.memo(t.lazy(L()(j()().mark(function M(){var s,O,h;return j()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=E.sent,O=s.createStore,h=O({bookName:"ZhangFisher",price:100,count:3,total:function(){var n=L()(j()().mark(function c(D){return j()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",D.price*D.count);case 1:case"end":return x.stop()}},c)}));function w(c){return n.apply(this,arguments)}return w}()}),E.abrupt("return",{default:function(){var w=h.useState(),c=l()(w,1),D=c[0];return t.createElement("div",null,t.createElement("div",null,"\u4E66\u540D:",D.bookName),t.createElement("div",null,"\u4EF7\u683C:",D.price),t.createElement("div",null,"\u6570\u91CF:",D.count),t.createElement("div",null,"\u603B\u4EF7:",D.total.result),t.createElement("div",null,"state.total=",String(D.total)))}});case 6:case"end":return E.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-async-demo-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore} from "@speedform/reactive"

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209)},renderOpts:{compile:function(){var M=L()(j()().mark(function O(){var h,u=arguments;return j()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}}}},96412:function(H,I,e){e.r(I),e.d(I,{demos:function(){return s}});var W=e(29008),l=e.n(W),z=e(34180),j=e.n(z),k=e(28633),L=e.n(k),t=e(70958),U=e.n(t),V=e(92379),M=e(75394),s={"docs-reactive-computed-intro-demo-0":{component:V.memo(V.lazy(U()(l()().mark(function O(){var h,u,E,n,w,c;return l()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return h=N.sent,u=h.createStore,N.next=6,Promise.resolve().then(e.bind(e,48398));case 6:return E=N.sent,n=E.Divider,w={firstName:"Zhang",lastName:"Fisher",fullName:function(A){return A.firstName+A.lastName}},c=u(w,{singleton:!1}),N.abrupt("return",{default:function(){var A=c.useState(),C=L()(A,2),R=C[0],i=C[1];return V.createElement("div",null,V.createElement("h4",null,"\u58F0\u660E\u65F6fullName\u662F\u4E00\u4E2A\u51FD\u6570"),V.createElement("div",null,"typeof(user.fullName)=",j()(w.fullName)),V.createElement(n,null),V.createElement("h4",null,"\u521B\u5EFAStore\u540E,state.fullName\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32"),V.createElement("div",null,"typeof(store.state.fullName)=",j()(R.fullName)),V.createElement("div",null,"store.state.fullName==",R.fullName))}});case 11:case"end":return N.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive'; 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var O=U()(l()().mark(function u(){var E,n=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(660).then(e.bind(e,7660));case 2:return c.abrupt("return",(E=c.sent).default.apply(E,n));case 3:case"end":return c.stop()}},u)}));function h(){return O.apply(this,arguments)}return h}()}},"docs-reactive-computed-intro-demo-1":{component:V.memo(V.lazy(U()(l()().mark(function O(){var h,u,E,n,w;return l()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return h=D.sent,u=h.createStore,E=h.ComputedScopeRef,n={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(x){return x.firstName+x.lastName}}},w=u(n,{scope:function(){return E.Current}}),D.abrupt("return",{default:function(){var x=w.useState(),A=L()(x,2),C=A[0],R=A[1];return V.createElement("div",null,V.createElement("div",null,"FullName:",C.user.fullName))}});case 8:case"end":return D.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive'; 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"store.options.scope==ComputedScopeRef.Current,",title:"ComputedScopeRef.Current"},context:{"@speedform/reactive":e(34209)},renderOpts:{compile:function(){var O=U()(l()().mark(function u(){var E,n=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(660).then(e.bind(e,7660));case 2:return c.abrupt("return",(E=c.sent).default.apply(E,n));case 3:case"end":return c.stop()}},u)}));function h(){return O.apply(this,arguments)}return h}()}},"docs-reactive-computed-intro-demo-2":{component:V.memo(V.lazy(U()(l()().mark(function O(){var h,u,E,n;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return h=c.sent,u=h.createStore,E=h.ComputedScopeRef,n=u({user:{firstName:"Zhang",lastName:"Fisher",fullName:function(N){return N.user.firstName+N.user.lastName}}},{scope:function(){return E.Root}}),c.abrupt("return",{default:function(){var N=n.useState(),x=L()(N,2),A=x[0],C=x[1];return V.createElement("div",null,V.createElement("div",null,"FullName:",A.user.fullName))}});case 7:case"end":return c.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive'; 
 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"store.options.scope==ComputedScopeRef.Root,",title:"ComputedScopeRef.Root"},context:{"@speedform/reactive":e(34209)},renderOpts:{compile:function(){var O=U()(l()().mark(function u(){var E,n=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(660).then(e.bind(e,7660));case 2:return c.abrupt("return",(E=c.sent).default.apply(E,n));case 3:case"end":return c.stop()}},u)}));function h(){return O.apply(this,arguments)}return h}()}},"docs-reactive-computed-intro-demo-3":{component:V.memo(V.lazy(U()(l()().mark(function O(){var h,u,E,n,w;return l()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return h=D.sent,u=h.createStore,E=h.ComputedScopeRef,n={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(x){return x.user.firstName+x.user.lastName}}},w=u(n,{scope:function(){return E.Parent}}),D.abrupt("return",{default:function(){var x=w.useState(),A=L()(x,2),C=A[0],R=A[1];return V.createElement("div",null,V.createElement("div",null,"FullName:",C.user.fullName))}});case 8:case"end":return D.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive'; 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"scope==ComputedScopeRef.Parent",title:"ComputedScopeRef.Parent"},context:{"@speedform/reactive":e(34209)},renderOpts:{compile:function(){var O=U()(l()().mark(function u(){var E,n=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(660).then(e.bind(e,7660));case 2:return c.abrupt("return",(E=c.sent).default.apply(E,n));case 3:case"end":return c.stop()}},u)}));function h(){return O.apply(this,arguments)}return h}()}},"docs-reactive-computed-intro-demo-4":{component:V.memo(V.lazy(U()(l()().mark(function O(){var h,u,E,n;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return h=c.sent,u=h.createStore,E={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(N){return N},address:{city:"Quanzhou"}}},n=u(E,{scope:function(){return"firstName"}}),c.abrupt("return",{default:function(){var N=n.useState(),x=L()(N,2),A=x[0],C=x[1];return V.createElement("div",null,V.createElement("div",null,"FullName:",A.user.fullName))}});case 7:case"end":return c.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive'; 

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"store.options.scope==<\u5B57\u7B26\u4E32>",title:"<\u5B57\u7B26\u4E32>"},context:{"@speedform/reactive":e(34209)},renderOpts:{compile:function(){var O=U()(l()().mark(function u(){var E,n=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(660).then(e.bind(e,7660));case 2:return c.abrupt("return",(E=c.sent).default.apply(E,n));case 3:case"end":return c.stop()}},u)}));function h(){return O.apply(this,arguments)}return h}()}},"docs-reactive-computed-intro-demo-5":{component:V.memo(V.lazy(U()(l()().mark(function O(){var h,u,E,n;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return h=c.sent,u=h.createStore,E={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(N){return N},address:{city:"Quanzhou"}}},n=u(E,{scope:function(){return["user","address","city"]}}),c.abrupt("return",{default:function(){var N=n.useState(),x=L()(N,2),A=x[0],C=x[1];return V.createElement("div",null,V.createElement("div",null,"FullName:",A.user.fullName))}});case 7:case"end":return c.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive'; 

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",title:"<\u5B57\u7B26\u4E32\u6570\u7EC4>"},context:{"@speedform/reactive":e(34209)},renderOpts:{compile:function(){var O=U()(l()().mark(function u(){var E,n=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(660).then(e.bind(e,7660));case 2:return c.abrupt("return",(E=c.sent).default.apply(E,n));case 3:case"end":return c.stop()}},u)}));function h(){return O.apply(this,arguments)}return h}()}},"docs-reactive-computed-intro-demo-6":{component:V.memo(V.lazy(U()(l()().mark(function O(){var h,u,E,n,w,c;return l()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return h=N.sent,u=h.createStore,E=h.computed,n=h.ComputedScopeRef,w={user:{firstName:"Zhang",lastName:"Fisher",fullName:E(function(){var x=U()(l()().mark(function A(C){return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",C[0]+C[1]);case 1:case"end":return i.stop()}},A)}));return function(A){return x.apply(this,arguments)}}(),["user.firstName","user.lastName"],{async:!0,scope:n.Depends})}},c=u(w),N.abrupt("return",{default:function(){var A=c.useState(),C=L()(A,2),R=C[0],i=C[1];return V.createElement("div",null,V.createElement("div",null,"FullName:",R.user.fullName.result))}});case 9:case"end":return N.stop()}},O)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-intro-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef  } from '@speedform/reactive'; 

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",description:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",title:"<\u5B57\u7B26\u4E32\u6570\u7EC4>"},context:{"@speedform/reactive":e(34209)},renderOpts:{compile:function(){var O=U()(l()().mark(function u(){var E,n=arguments;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(660).then(e.bind(e,7660));case 2:return c.abrupt("return",(E=c.sent).default.apply(E,n));case 3:case"end":return c.stop()}},u)}));function h(){return O.apply(this,arguments)}return h}()}}}},46206:function(H,I,e){e.r(I),e.d(I,{demos:function(){return h}});var W=e(12027),l=e.n(W),z=e(34180),j=e.n(z),k=e(28633),L=e.n(k),t=e(29008),U=e.n(t),V=e(70958),M=e.n(V),s=e(92379),O=e(83818),h={"docs-reactive-computed-objects-demo-0":{component:s.memo(s.lazy(M()(U()().mark(function u(){var E,n,w,c,D,N,x,A,C;return U()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return E=i.sent,n=E.createStore,w=E.computed,i.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return c=i.sent,D=c.Divider,N=c.ColorBlock,x=0,A={user:{firstName:"Zhang",lastName:"Fisher",fullName:function(r){return r.firstName+r.lastName+" (".concat(++x,")")},fullName2:w(function(){var p=M()(U()().mark(function r(b){return U()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",b.firstName+b.lastName+" (".concat(++x,")"));case 1:case"end":return g.stop()}},r)}));return function(r){return p.apply(this,arguments)}}(),[],{async:!0})}},C=n(A),i.abrupt("return",{default:function(){var r=C.useState(),b=L()(r,1),S=b[0];return s.createElement("div",null,s.createElement("div",null,"FirstName =",S.user.firstName),s.createElement("div",null,"LastName =",S.user.lastName),s.createElement(N,{name:"FullName",value:S.user.fullName}),s.createElement(N,{name:"FullName2",value:S.user.fullName2.result}),s.createElement(D,null),s.createElement("div",null,"typeof(store.computedObjects)==",j()(C.computedObjects)),s.createElement("div",null,"store.computedObjects instanceof Map=",String(C.computedObjects instanceof Map)),s.createElement("div",null,"store.computedObjects.size=",C.computedObjects.size),s.createElement("div",null,"store.computedObjects.size=",C.computedObjects.size),s.createElement("div",null,"store.computedObjects.keys()=",l()(C.computedObjects.keys()).join(" , ")),s.createElement("button",{onClick:function(){return C.computedObjects.get("user/fullName").run()}},"\u6267\u884CfullName\u8BA1\u7B97\u51FD\u6570"),s.createElement("button",{onClick:function(){return C.computedObjects.get("user/fullName2").run()}},"\u6267\u884CfullName2\u8BA1\u7B97\u51FD\u6570"),s.createElement("button",{onClick:function(){return C.state.user.fullName2.run()}},"\u6267\u884CfullName2\u8BA1\u7B97\u51FD\u6570"))}});case 14:case"end":return i.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var u=M()(U()().mark(function n(){var w,c=arguments;return U()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,e.e(660).then(e.bind(e,7660));case 2:return N.abrupt("return",(w=N.sent).default.apply(w,c));case 3:case"end":return N.stop()}},n)}));function E(){return u.apply(this,arguments)}return E}()}},"docs-reactive-computed-objects-demo-1":{component:s.memo(s.lazy(M()(U()().mark(function u(){var E,n,w,c,D,N,x,A,C,R;return U()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return E=p.sent,n=E.createStore,w=E.computed,p.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return c=p.sent,D=c.Divider,p.next=11,Promise.resolve().then(e.bind(e,21970));case 11:return N=p.sent,x=N.delay,A=0,C={book:{name:"Zhang",count:4,price:100,total1:w(function(){var r=M()(U()().mark(function b(S){return U()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.count*S.price);case 3:case"end":return F.stop()}},b)}));return function(b){return r.apply(this,arguments)}}(),[],{async:!0,group:"total"}),total2:w(function(){var r=M()(U()().mark(function b(S){return U()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.count*S.price);case 3:case"end":return F.stop()}},b)}));return function(b){return r.apply(this,arguments)}}(),[],{async:!0,group:"total"}),total3:w(function(){var r=M()(U()().mark(function b(S){return U()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.count*S.price);case 3:case"end":return F.stop()}},b)}));return function(b){return r.apply(this,arguments)}}(),[],{async:!0,group:"total"}),average1:w(function(){var r=M()(U()().mark(function b(S){return U()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.price/S.count);case 3:case"end":return F.stop()}},b)}));return function(b){return r.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average2:w(function(){var r=M()(U()().mark(function b(S){return U()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.price/S.count);case 3:case"end":return F.stop()}},b)}));return function(b){return r.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average3:w(function(){var r=M()(U()().mark(function b(S){return U()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.price/S.count);case 3:case"end":return F.stop()}},b)}));return function(b){return r.apply(this,arguments)}}(),[],{async:!0,group:"average"})}},R=n(C),p.abrupt("return",{default:function(){var b=R.useState(),S=L()(b,1),g=S[0];return s.createElement("div",null,s.createElement("div",null,"BookName =",g.book.name),s.createElement("div",null,"count = ",s.createElement("input",{value:g.book.count,onChange:R.sync(["book","count"])})),s.createElement("div",null,"price = ",s.createElement("input",{value:g.book.price,onChange:R.sync(["book","price"])})),s.createElement(D,{title:"Total Group"}),s.createElement("div",null,"Total1 =",g.book.total1.loading?"\u8BA1\u7B97\u4E2D...":g.book.total1.result),s.createElement("div",null,"Total2 =",g.book.total2.loading?"\u8BA1\u7B97\u4E2D...":g.book.total2.result),s.createElement("div",null,"Total3 =",g.book.total3.loading?"\u8BA1\u7B97\u4E2D...":g.book.total3.result),s.createElement("button",{onClick:function(){return R.computedObjects.runGroup("total")}},"\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570"),s.createElement(D,{title:"Average Group"}),s.createElement("div",null,"Average1 =",g.book.average1.loading?"\u8BA1\u7B97\u4E2D...":g.book.average1.result),s.createElement("div",null,"Average2 =",g.book.average2.loading?"\u8BA1\u7B97\u4E2D...":g.book.average2.result),s.createElement("div",null,"Average3 =",g.book.average3.loading?"\u8BA1\u7B97\u4E2D...":g.book.average3.result),s.createElement("button",{onClick:function(){return R.computedObjects.runGroup("average")}},"\u6267\u884C\u7EC4average\u8BA1\u7B97\u51FD\u6570"))}});case 17:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),"@speedform/demo-components":e(48398),"speedform-docs":e(21970)},renderOpts:{compile:function(){var u=M()(U()().mark(function n(){var w,c=arguments;return U()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,e.e(660).then(e.bind(e,7660));case 2:return N.abrupt("return",(w=N.sent).default.apply(w,c));case 3:case"end":return N.stop()}},n)}));function E(){return u.apply(this,arguments)}return E}()}},"docs-reactive-computed-objects-demo-2":{component:s.memo(s.lazy(M()(U()().mark(function u(){var E,n,w,c,D,N,x,A,C,R;return U()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return E=p.sent,n=E.createStore,w=E.computed,p.next=7,Promise.resolve().then(e.bind(e,48398));case 7:return c=p.sent,D=c.Divider,p.next=11,Promise.resolve().then(e.bind(e,21970));case 11:return N=p.sent,x=N.delay,A=0,C={book:{name:"Zhang",count:4,price:100,total1:w(function(){var r=M()(U()().mark(function b(S){return U()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.count*S.price);case 3:case"end":return F.stop()}},b)}));return function(b){return r.apply(this,arguments)}}(),["book.count","book.price"],{async:!0,group:"total"}),total2:w(function(){var r=M()(U()().mark(function b(S){return U()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.count*S.price);case 3:case"end":return F.stop()}},b)}));return function(b){return r.apply(this,arguments)}}(),["book.count","book.price"],{async:!0,group:"total",initial:100,enable:!1}),total3:w(function(){var r=M()(U()().mark(function b(S){return U()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.count*S.price);case 3:case"end":return F.stop()}},b)}));return function(b){return r.apply(this,arguments)}}(),[],{async:!0,group:"total"}),average1:w(function(){var r=M()(U()().mark(function b(S){return U()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.price/S.count);case 3:case"end":return F.stop()}},b)}));return function(b){return r.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average2:w(function(){var r=M()(U()().mark(function b(S){return U()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.price/S.count);case 3:case"end":return F.stop()}},b)}));return function(b){return r.apply(this,arguments)}}(),[],{async:!0,group:"average"}),average3:w(function(){var r=M()(U()().mark(function b(S){return U()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,x();case 2:return F.abrupt("return",S.price/S.count);case 3:case"end":return F.stop()}},b)}));return function(b){return r.apply(this,arguments)}}(),[],{async:!0,group:"average"})}},R=n(C),p.abrupt("return",{default:function(){var b=R.useState(),S=L()(b,1),g=S[0];return s.createElement("div",null,s.createElement("div",null,"BookName =",g.book.name),s.createElement("div",null,"count = ",s.createElement("input",{value:g.book.count,onChange:R.sync(["book","count"])})),s.createElement("div",null,"price = ",s.createElement("input",{value:g.book.price,onChange:R.sync(["book","price"])})),s.createElement(D,{title:"Total Group"}),s.createElement("table",null,s.createElement("tbody",null,s.createElement("tr",null,s.createElement("td",null,"Total1 ="),s.createElement("td",null,g.book.total1.loading?"\u8BA1\u7B97\u4E2D...":g.book.total1.result),s.createElement("td",null,"\u9ED8\u8BA4\u81EA\u52A8\u8BA1\u7B97")),s.createElement("tr",null,s.createElement("td",null,"Total2 ="),s.createElement("td",null,g.book.total2.loading?"\u8BA1\u7B97\u4E2D...":g.book.total2.result),s.createElement("td",null,"\u7981\u7528\u8BA1\u7B97\uFF0C\u6307\u5B9A\u4E86\u9ED8\u8BA4\u503C(",s.createElement("input",{type:"checkbox",checked:R.computedObjects.get("book/total2"),onChange:function(K){console.log("ff=,",K.target,R.computedObjects.get("book/total2"))}}),")")),s.createElement("tr",null,s.createElement("td",null,"Total3 ="),s.createElement("td",null,g.book.total3.loading?"\u8BA1\u7B97\u4E2D...":g.book.total3.result),s.createElement("td",null,"\u65E0\u4F9D\u8D56\uFF0C\u9700\u8981\u624B\u52A8\u8BA1\u7B97")))),s.createElement("button",{onClick:function(){return R.computedObjects.runGroup("total")}},"\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570"),s.createElement(D,{title:"Average Group"}),s.createElement("div",null,"Average1 =",g.book.average1.loading?"\u8BA1\u7B97\u4E2D...":g.book.average1.result),s.createElement("div",null,"Average2 =",g.book.average2.loading?"\u8BA1\u7B97\u4E2D...":g.book.average2.result),s.createElement("div",null,"Average3 =",g.book.average3.loading?"\u8BA1\u7B97\u4E2D...":g.book.average3.result),s.createElement("button",{onClick:function(){return R.computedObjects.runGroup("average")}},"\u6267\u884C\u7EC4average\u8BA1\u7B97\u51FD\u6570"))}});case 17:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),"@speedform/demo-components":e(48398),"speedform-docs":e(21970)},renderOpts:{compile:function(){var u=M()(U()().mark(function n(){var w,c=arguments;return U()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,e.e(660).then(e.bind(e,7660));case 2:return N.abrupt("return",(w=N.sent).default.apply(w,c));case 3:case"end":return N.stop()}},n)}));function E(){return u.apply(this,arguments)}return E}()}},"docs-reactive-computed-objects-demo-3":{component:s.memo(s.lazy(M()(U()().mark(function u(){var E,n,w,c,D,N,x,A;return U()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return E=R.sent,n=E.createStore,w=E.computed,R.next=7,Promise.resolve().then(e.bind(e,21970));case 7:return c=R.sent,D=c.delay,N=0,x={book:{name:"Zhang",count:4,price:100,total:w(function(){var i=M()(U()().mark(function p(r){return U()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,D();case 2:return S.abrupt("return",r.count*r.price);case 3:case"end":return S.stop()}},p)}));return function(p){return i.apply(this,arguments)}}(),[],{async:!0,group:"total"})}},A=n(x),R.abrupt("return",{default:function(){var p=A.useState(),r=L()(p,1),b=r[0];return s.createElement("div",null,s.createElement("div",null,"BookName =",b.book.name),s.createElement("div",null,"count = ",s.createElement("input",{value:b.book.count,onChange:A.sync(["book","count"])})),s.createElement("div",null,"price = ",s.createElement("input",{value:b.book.price,onChange:A.sync(["book","price"])})),s.createElement("div",null,"Total =",b.book.total.loading?"\u8BA1\u7B97\u4E2D...":b.book.total.result),s.createElement("button",{onClick:function(){return A.computedObjects.runGroup("total")}},"\u6267\u884C\u7EC4total\u8BA1\u7B97\u51FD\u6570"))}});case 13:case"end":return R.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-objects-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"speedform-docs":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),"speedform-docs":e(21970)},renderOpts:{compile:function(){var u=M()(U()().mark(function n(){var w,c=arguments;return U()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,e.e(660).then(e.bind(e,7660));case 2:return N.abrupt("return",(w=N.sent).default.apply(w,c));case 3:case"end":return N.stop()}},n)}));function E(){return u.apply(this,arguments)}return E}()}}}},31992:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(46489),z={}},57190:function(H,I,e){e.r(I),e.d(I,{demos:function(){return V}});var W=e(29008),l=e.n(W),z=e(28633),j=e.n(z),k=e(70958),L=e.n(k),t=e(92379),U=e(63035),V={"docs-reactive-computed-sync-demo-0":{component:t.memo(t.lazy(L()(l()().mark(function M(){var s,O,h,u;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=n.sent,O=s.createStore,h={books:[{name:"\u5F20\u4E09",price:18,author:"tom",count:2,total:function(c){return c.price*c.count}},{name:"\u674E\u56DB",price:19,author:"jack",count:3,total:function(c){return c.price*c.count}}],total:function(c){return c.books.reduce(function(D,N){return D+N.total},0)}},u=O(h),n.abrupt("return",{default:function(){var c=u.useState(),D=j()(c,2),N=D[0],x=D[1];return t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"\u4E66\u540D"),t.createElement("th",null,"\u4F5C\u8005"),t.createElement("th",null,"\u5355\u4EF7"),t.createElement("th",null,"\u6570\u91CF"),t.createElement("th",null,"\u5C0F\u8BA1"))),t.createElement("tbody",null,N.books.map(function(A,C){return t.createElement("tr",{key:C},t.createElement("td",null,A.name),t.createElement("td",null,A.author),t.createElement("td",null,A.price),t.createElement("td",null,t.createElement("button",{onClick:function(){return u.state.books[C].count=u.state.books[C].count-1}},"-"),A.count,t.createElement("button",{onClick:function(){return u.state.books[C].count=u.state.books[C].count+1}},"+")),t.createElement("td",null,A.total))}),t.createElement("tr",null,t.createElement("td",{colSpan:4},"\u603B\u8BA1"),t.createElement("td",null,N.total))))}});case 7:case"end":return n.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-computed-sync-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,ComputedScopeRef } from '@speedform/reactive';

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209)},renderOpts:{compile:function(){var M=L()(l()().mark(function O(){var h,u=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}}}},12655:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(5757),z={}},24968:function(H,I,e){e.r(I),e.d(I,{demos:function(){return V}});var W=e(29008),l=e.n(W),z=e(28633),j=e.n(z),k=e(70958),L=e.n(k),t=e(92379),U=e(85164),V={"docs-reactive-render-demo-0":{component:t.memo(t.lazy(L()(l()().mark(function M(){var s,O,h,u,E,n,w,c,D,N;return l()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.t.bind(e,92379,19));case 2:return s=A.sent,O=s.default,h=s.createContext,u=s.useContext,E=s.useState,A.next=9,Promise.resolve().then(e.bind(e,48398));case 9:return n=A.sent,w=n.Block,c=h({firstName:"Zhang",lastName:"Fisher",age:18}),D=O.memo(function(C){var R=u(c);return O.createElement(w,{name:"\u5B50\u7EC4\u4EF6:".concat(C.name)},O.createElement("span",null,"Hello :",R.firstName," ",R.lastName))}),N=0,A.abrupt("return",{default:function(){var R=E({firstName:"Zhang",lastName:"Fisher",age:18}),i=j()(R,2),p=i[0],r=i[1];return O.createElement(c.Provider,{value:p},O.createElement("div",null,"\u6839\u7EC4\u4EF6"),O.createElement("div",null,"Hello :",p.firstName," ",p.lastName),O.createElement("div",null,"Age :",p.age),O.createElement("button",{onClick:function(){r({firstName:"Zhang",lastName:"Fisher",age:++N})}},"+Age"),O.createElement(D,{name:"A"}),O.createElement(D,{name:"B"}))}});case 15:case"end":return A.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-render-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},react:{type:"NPM",value:"18.3.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{react:e(92379),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(l()().mark(function O(){var h,u=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}},"docs-reactive-render-demo-1":{component:t.memo(t.lazy(L()(l()().mark(function M(){var s,O,h,u,E,n,w,c,D,N,x;return l()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=C.sent,O=s.createStore,C.next=6,Promise.resolve().then(e.t.bind(e,92379,19));case 6:return h=C.sent,u=h.default,C.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return E=C.sent,n=E.Block,w={firstName:"Zhang",lastName:"Fisher",age:18},c=O(w),D=u.memo(function(R){var i=c.useState(),p=j()(i,2),r=p[0],b=p[1],S=r.firstName;return u.createElement(n,{name:"\u5B50\u7EC4\u4EF6:FirstName"},u.createElement("span",null,"Hello :",S))}),N=u.memo(function(R){var i=c.useState(),p=j()(i,2),r=p[0],b=p[1],S=r.lastName;return u.createElement(n,{name:"\u5B50\u7EC4\u4EF6:lastName"},u.createElement("span",null,"Hello :",S))}),x=0,C.abrupt("return",{default:function(){var i=c.useState(),p=j()(i,2),r=p[0],b=p[1];return u.createElement(u.Fragment,null,u.createElement("div",null,"\u6839\u7EC4\u4EF6"),u.createElement("div",null,"Hello :",r.firstName," ",r.lastName),u.createElement("div",null,"Age ",++x,":",r.age),u.createElement("button",{onClick:function(){return b(function(g){return g.age=g.age+1})}},"+Age"),u.createElement("button",{onClick:function(){return b(function(g){return g.firstName=g.firstName+"r"})}},"Change FirstName"),u.createElement(D,null),u.createElement(N,null))}});case 18:case"end":return C.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-render-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),react:e(92379),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(l()().mark(function O(){var h,u=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}},"docs-reactive-render-demo-2":{component:t.memo(t.lazy(L()(l()().mark(function M(){var s,O,h,u,E,n,w,c,D,N,x,A,C;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=i.sent,O=s.createStore,i.next=6,Promise.resolve().then(e.t.bind(e,92379,19));case 6:return h=i.sent,u=h.default,i.next=10,Promise.resolve().then(e.bind(e,48398));case 10:return E=i.sent,n=E.Block,i.next=14,Promise.resolve().then(e.bind(e,13834));case 14:return w=i.sent,c=w.$,D={firstName:"Zhang",lastName:"Fisher",age:18},N=O(D),x=u.memo(function(p){return u.createElement(n,{name:"\u5B50\u7EC4\u4EF6:FirstName"},u.createElement("span",null,"Hello :",N.state.firstName," ",N.state.lastName,"(\u6CA1\u6709\u4F7F\u7528Signal)"))}),A=u.memo(function(p){return u.createElement(n,{name:"\u5B50\u7EC4\u4EF6:LastName"},u.createElement("span",null,"Hello :",c(N.state.firstName)," ",N.state.lastName))}),C=0,i.abrupt("return",{default:function(){return u.createElement(u.Fragment,null,u.createElement("div",null,"\u6839\u7EC4\u4EF6"),u.createElement("div",null,"Hello :",N.state.firstName," ",N.state.lastName),u.createElement("div",null,"Age ",++C,":",c(N.state.age)),u.createElement("button",{onClick:function(){return N.state.age=N.state.age+1}},"+Age"),u.createElement("button",{onClick:function(){return N.state.firstName=N.state.firstName+"r"}},"Change FirstName"),u.createElement(x,null),u.createElement(A,null))}});case 22:case"end":return i.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-render-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"},helux:{type:"NPM",value:"4.3.2"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),react:e(92379),"@speedform/demo-components":e(48398),helux:e(13834)},renderOpts:{compile:function(){var M=L()(l()().mark(function O(){var h,u=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}}}},75158:function(H,I,e){e.r(I),e.d(I,{demos:function(){return V}});var W=e(29008),l=e.n(W),z=e(28633),j=e.n(z),k=e(70958),L=e.n(k),t=e(92379),U=e(90054),V={"docs-reactive-state-demo-0":{component:t.memo(t.lazy(L()(l()().mark(function M(){var s,O,h,u;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=n.sent,O=s.createStore,h={firstName:"Zhang",lastName:"Fisher",age:18},u=O(h),n.abrupt("return",{default:function(){var c=u.useState(),D=j()(c,2),N=D[0],x=D[1];return t.createElement("div",null,t.createElement("div",null,"Hello :",N.firstName," ",N.lastName),t.createElement("div",null,"Age :",N.age),t.createElement("button",{onClick:function(){return x(function(C){return C.age+=1})}},"+Age"))}});case 7:case"end":return n.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-state-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';

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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209)},renderOpts:{compile:function(){var M=L()(l()().mark(function O(){var h,u=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}},"docs-reactive-state-demo-1":{component:t.memo(t.lazy(L()(l()().mark(function M(){var s,O,h,u,E,n,w,c;return l()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=N.sent,O=s.createStore,N.next=6,Promise.resolve().then(e.bind(e,48398));case 6:return h=N.sent,u=h.ColorBlock,E={firstName:"Zhang",lastName:"Fisher",fullName:function(A){return A.firstName+A.lastName}},n=O(E),w=t.memo(function(){var x=n.useState(function(R){return R.firstName}),A=j()(x,1),C=A[0];return t.createElement(u,{name:"FirstName",value:C})}),c=t.memo(function(){var x=n.useState(function(R){return R.lastName}),A=j()(x,1),C=A[0];return t.createElement(u,{name:"LastName",value:C})}),N.abrupt("return",{default:function(){var A=n.useState(function(g){return g.firstName},function(g,F){return g.firstName=F}),C=j()(A,2),R=C[0],i=C[1],p=n.useState(function(g){return g.fullName},function(g,F){var K=j()(F,2),J=K[0],G=K[1];g.firstName=J,g.lastName=G}),r=j()(p,2),b=r[0],S=r[1];return t.createElement("div",null,t.createElement(w,null),t.createElement(c,null),t.createElement("div",null,"FullName :",b),t.createElement("button",{onClick:function(){return i(R+"r")}},"change FirstName"),t.createElement("button",{onClick:function(){return S(["Hello","Voerkai18n"])}},"change FullName"))}});case 13:case"end":return N.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-state-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(l()().mark(function O(){var h,u=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}},"docs-reactive-state-demo-2":{component:t.memo(t.lazy(L()(l()().mark(function M(){var s,O,h,u,E,n;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=c.sent,O=s.createStore,c.next=6,Promise.resolve().then(e.bind(e,13834));case 6:return h=c.sent,u=h.$,E={firstName:"Zhang",lastName:"Fisher",age:18},n=O(E),c.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement("div",null,"Hello :",n.state.firstName," ",n.state.lastName),t.createElement("div",null,"Age+Signal :",u(n.state.age)),t.createElement("div",null,"Age :",n.state.age),t.createElement("button",{onClick:function(){return n.state.age=n.state.age+1}},"+Age"))}});case 11:case"end":return c.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-state-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},helux:{type:"NPM",value:"4.3.2"}},entry:"index.tsx",description:"\u901A\u8FC7store.state.firstName\u76F4\u63A5\u8BFB\u53D6\u72B6\u6001,\u4E0D\u901A\u8FC7useState\u65B9\u6CD5",title:"\u8BFB\u53D6\u72B6\u6001"},context:{"@speedform/reactive":e(34209),helux:e(13834)},renderOpts:{compile:function(){var M=L()(l()().mark(function O(){var h,u=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}}}},21476:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(54862),z={}},53348:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(28794),z={}},66903:function(H,I,e){e.r(I),e.d(I,{demos:function(){return V}});var W=e(29008),l=e.n(W),z=e(28633),j=e.n(z),k=e(70958),L=e.n(k),t=e(92379),U=e(44834),V={"docs-reactive-watch-objects-demo-0":{component:t.memo(t.lazy(L()(l()().mark(function M(){var s,O,h,u,E,n,w,c,D;return l()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return w=function(C){return h(function(R,i){var p=i.state;return p.price*R},function(R){return R[R.length-1]==="count"},{initial:2,group:C})},x.next=3,Promise.resolve().then(e.bind(e,34209));case 3:return s=x.sent,O=s.createStore,h=s.watch,x.next=8,Promise.resolve().then(e.bind(e,48398));case 8:return u=x.sent,E=u.ColorBlock,n=u.Divider,c={bookName:"zhang",price:2,count:1,total1:w("a"),total2:w("a"),total3:w("b"),total4:w("b"),total5:w("b")},D=O({state:c}),globalThis.Store=D,x.abrupt("return",{default:function(){var C=D.useState(),R=j()(C,2),i=R[0],p=R[1];return typeof i.total1=="function"&&console.warn("state.total1 is function"),t.createElement("div",null,t.createElement("div",null,"bookName=",i.bookName),t.createElement("div",null,"price=",i.price),t.createElement("div",null,"count=",t.createElement("button",{onClick:function(){return p(function(b){return b.count=b.count-1})}},"-"),t.createElement("input",{value:i.count,onChange:D.sync(function(r){return r.count})}),t.createElement("button",{onClick:function(){return p(function(b){return b.count=b.count+1})}},"+")),t.createElement(n,{name:"A Group"}),t.createElement(E,{name:"Total-1",value:i.total1}),t.createElement(E,{name:"Total-2",value:i.total2}),t.createElement("button",{onClick:function(){return D.watchObjects.enableGroup("a",!0)}},"Enable A Group"),t.createElement("button",{onClick:function(){return D.watchObjects.enableGroup("a",!1)}},"Disable A Group"),t.createElement("div",null,"\u5F53\u7981\u7528A Group\u65F6\uFF0C\u4FEE\u6539count\u65F6\u4E0D\u4F1A\u5BFC\u81F4total\u53D8\u5316\uFF0C\u56E0\u4E3A\u8BE5\u7EC4\u88AB\u7981\u6B62\u6267\u884C\u4E86"),t.createElement(n,{name:"B Group"}),t.createElement(E,{name:"Total-3",value:i.total3}),t.createElement(E,{name:"Total-4",value:i.total4}),t.createElement(E,{name:"Total-5",value:i.total5}),t.createElement("button",{onClick:function(){return D.watchObjects.enableGroup("b",!0)}},"Enable B Group"),t.createElement("button",{onClick:function(){return D.watchObjects.enableGroup("b",!1)}},"Disable B Group"))}});case 15:case"end":return x.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-objects-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef,watch } from "@speedform/reactive" 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},"@speedform/demo-components":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),"@speedform/demo-components":e(48398)},renderOpts:{compile:function(){var M=L()(l()().mark(function O(){var h,u=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}}}},51088:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(3955),z={}},49056:function(H,I,e){e.r(I),e.d(I,{demos:function(){return V}});var W=e(29008),l=e.n(W),z=e(28633),j=e.n(z),k=e(70958),L=e.n(k),t=e(92379),U=e(7070),V={"docs-reactive-watch-demo-0":{component:t.memo(t.lazy(L()(l()().mark(function M(){var s,O,h,u,E;return l()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=w.sent,O=s.createStore,h=s.watch,u={orders:[{bookName:"SpeedForm Quick-Start",price:100,count:1,total:function(D){return D.price*D.count}},{bookName:"Helux",price:98,count:1,total:function(D){return D.price*D.count}}],total:h(function(c){return E.state.orders.reduce(function(D,N){return D+N.count*N.price},0)},function(c){return c[c.length-1]==="count"},{initial:198})},E=O({state:u},{singleton:!1}),w.abrupt("return",{default:function(){var D=E.useState(),N=j()(D,1),x=N[0];return t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"BookName"),t.createElement("th",null,"Price"),t.createElement("th",null,"Count"),t.createElement("th",null,"Total"))),t.createElement("tbody",null,x.orders.map(function(A,C){return t.createElement("tr",{key:C},t.createElement("td",null,A.bookName),t.createElement("td",null,A.price),t.createElement("td",null,t.createElement("input",{value:A.count,onChange:E.sync(function(R){return R.orders[C].count})})),t.createElement("td",null,A.total))}),t.createElement("tr",null,t.createElement("td",{colSpan:3},"Total"),t.createElement("td",null,x.total))))}});case 8:case"end":return w.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,watch } from '@speedform/reactive';
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209)},renderOpts:{compile:function(){var M=L()(l()().mark(function O(){var h,u=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}},"docs-reactive-watch-demo-1":{component:t.memo(t.lazy(L()(l()().mark(function M(){var s,O,h,u,E,n,w,c,D;return l()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=x.sent,O=s.createStore,h=s.computed,u=s.ComputedScopeRef,x.next=8,Promise.resolve().then(e.t.bind(e,92379,19));case 8:return E=x.sent,n=E.useEffect,w=E.useState,c={user:{firstName:"zhang",lastName:"fisher",fullName:h(function(){var A=L()(l()().mark(function C(R){var i,p,r;return l()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return i=j()(R,2),p=i[0],r=i[1],S.abrupt("return",p+r);case 2:case"end":return S.stop()}},C)}));return function(C){return A.apply(this,arguments)}}(),["user/firstName","user/lastName"],{scope:u.Depends})}},D=O({state:c}),x.abrupt("return",{default:function(){var C=D.useState(),R=j()(C,1),i=R[0],p=w(""),r=j()(p,2),b=r[0],S=r[1];return n(function(){var g=D.watch(function(F){S(F.map(function(K){return K.join("/")}).join(","))},["user/firstName","user/lastName"]);return g},[]),t.createElement("div",null,t.createElement("div",null,"watch: ",b),t.createElement("div",null,"firstName=",t.createElement("input",{value:i.user.firstName,onChange:D.sync(function(g){return g.user.firstName})})),t.createElement("div",null,"lastName=",t.createElement("input",{value:i.user.lastName,onChange:D.sync(function(g){return g.user.lastName})})),t.createElement("div",null,"fullName=",i.user.fullName.result))}});case 14:case"end":return x.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef } from "@speedform/reactive" 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),react:e(92379)},renderOpts:{compile:function(){var M=L()(l()().mark(function O(){var h,u=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}},"docs-reactive-watch-demo-2":{component:t.memo(t.lazy(L()(l()().mark(function M(){var s,O,h,u,E,n,w,c;return l()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.bind(e,34209));case 2:return s=N.sent,O=s.createStore,h=s.computed,u=s.ComputedScopeRef,N.next=8,Promise.resolve().then(e.t.bind(e,92379,19));case 8:return E=N.sent,n=E.useState,w={user:{firstName:"zhang",lastName:"fisher",fullName:h(function(){var x=L()(l()().mark(function A(C){var R,i,p;return l()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return R=j()(C,2),i=R[0],p=R[1],b.abrupt("return",i+p);case 2:case"end":return b.stop()}},A)}));return function(A){return x.apply(this,arguments)}}(),["user/firstName","user/lastName"],{scope:u.Depends})}},c=O({state:w}),N.abrupt("return",{default:function(){var A=c.useState(),C=j()(A,1),R=C[0],i=n(""),p=j()(i,2),r=p[0],b=p[1],S=n("user/firstName"),g=j()(S,2),F=g[0],K=g[1],J=n(""),G=j()(J,2),ae=G[0],q=G[1];return c.useWatch(function(ne,re){return b(re.join("/")),q(ne),ne},F,{id:"use1"}),t.createElement("div",null,t.createElement("div",null,"watch for: ",F),t.createElement("div",null,"Watch value:",ae),t.createElement("div",null,"firstName=",t.createElement("input",{value:R.user.firstName,onChange:c.sync(function(ne){return ne.user.firstName})})),t.createElement("div",null,"lastName=",t.createElement("input",{value:R.user.lastName,onChange:c.sync(function(ne){return ne.user.lastName})})),t.createElement("div",null,"fullName=",R.user.fullName.result),t.createElement("button",{onClick:function(){return K("user/firstName")}},"watch firstName"),t.createElement("button",{onClick:function(){return K("user/lastName")}},"watch lastName"))}});case 13:case"end":return N.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-reactive-watch-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { createStore,computed,ComputedScopeRef } from "@speedform/reactive" 
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
}`},"@speedform/reactive":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@speedform/reactive":e(34209),react:e(92379)},renderOpts:{compile:function(){var M=L()(l()().mark(function O(){var h,u=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(660).then(e.bind(e,7660));case 2:return n.abrupt("return",(h=n.sent).default.apply(h,u));case 3:case"end":return n.stop()}},O)}));function s(){return M.apply(this,arguments)}return s}()}}}},93079:function(H,I,e){e.r(I),e.d(I,{demos:function(){return z}});var W=e(92379),l=e(64100),z={}},21970:function(H,I,e){e.r(I),e.d(I,{api:function(){return W},delay:function(){return V},forms:function(){return l}});var W={};e.r(W),e.d(W,{getProjects:function(){return t}});var l={};e.r(l),e.d(l,{Network:function(){return E},schema:function(){return u}});var z=e(29008),j=e.n(z),k=e(70958),L=e.n(k);function t(n){return U.apply(this,arguments)}function U(){return U=L()(j()().mark(function n(w){var c,D,N;return j()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch(w);case 2:if(c=A.sent,!c.ok){A.next=11;break}return A.next=6,c.json();case 6:return D=A.sent,N=D.map(function(C){return{name:C.name,url:C.html_url,description:C.description,stars:C.stargazers_count}}),A.abrupt("return",N);case 11:throw new Error("".concat(c.status," - ").concat(c.statusText));case 12:case"end":return A.stop()}},n)})),U.apply(this,arguments)}var V=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(c){setTimeout(c,w)})},M=e(34209),s=e(6244),O=e(99166),h=e.n(O),u={title:"\u7F51\u7EDC\u914D\u7F6E",fields:{title:{value:"React-Helux-Form",placeholder:"\u8F93\u5165\u7F51\u7EDC\u914D\u7F6E\u540D\u79F0",title:"\u7F51\u7EDC\u540D\u79F0",validate:function(w){return w.length>3}},interface:{value:"wifi",title:"\u7F51\u5361\u7C7B\u578B",select:function(){return[{value:"wifi",title:"\u65E0\u7EBF\u7F51\u5361"},{value:"ethernet",title:"\u6709\u7EBF\u7F51\u5361"}]}},ip:{value:"1.1.1.1",title:"IP\u5730\u5740",validate:(0,M.computed)(function(){var n=L()(j()().mark(function w(c){return j()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,V(2e3);case 2:return N.abrupt("return",h().isIP(String(c)));case 3:case"end":return N.stop()}},w)}));return function(w){return n.apply(this,arguments)}}(),[],{async:!0})},gateway:{value:"1.1.1.1",title:"\u7F51\u5173\u5730\u5740",validate:function(w){return h().isIP(w)}},dhcp:{enable:{title:"\u81EA\u52A8\u83B7\u53D6IP\u5730\u5740",value:!0},start:{title:"\u8D77\u59CB\u5730\u5740",value:"192.168.1.1",enable:(0,M.computed)(function(n){return n.enable.value},{scope:M.ComputedScopeRef.Parent}),validate:function(w){return h().isIP(w)}},end:{title:"\u7ED3\u675F\u5730\u5740",value:"192.168.1.100",enable:(0,M.computed)(function(n){return n.dhcp.enable.value},{scope:M.ComputedScopeRef.Root}),validate:function(w){return h().isIP(w)}}},wifi:{title:"\u65E0\u7EBF\u914D\u7F6E",visible:(0,M.computed)(function(n){return n.interface.value==="wifi"},{scope:M.ComputedScopeRef.Root}),ssid:{value:"fast",placeholder:"\u65E0\u7EBF\u7F51\u7EDC",validate:function(w){return w.length>3}},password:{value:"123",placeholder:"\u8F93\u5165\u65E0\u7EBF\u5BC6\u7801",help:"\u5BC6\u7801\u957F\u5EA6\u5E94\u4E0D\u5C0F\u4E8E6\u4F4D",enable:function(w){return w.interface.value==="wifi"},validate:function(w){return w.length>=6}}}}},E=(0,s.createForm)(u,{debug:!0});globalThis.Network=E},48398:function(H,I,e){e.r(I),e.d(I,{Block:function(){return D},Box:function(){return z},Button:function(){return L},Card:function(){return t},Col:function(){return N},ColorBlock:function(){return c},Divider:function(){return E},Field:function(){return u},Input:function(){return A},JsonViewer:function(){return O},Loading:function(){return k},Row:function(){return x},Tips:function(){return C},ValidResult:function(){return h}});var W=e(92379),l=e(651),z=function(i){var p=i.title,r=i.enable,b=r===void 0?!0:r,S=i.visible,g=S===void 0?!0:S;return(0,l.jsxs)("div",{style:{display:g?"flex":"none",position:"relative",flexDirection:"column",padding:"8px",margin:"16px 4px 4px 4px",boxSizing:"border-box",border:"1px solid #bbb"},children:[(0,l.jsx)("span",{style:{position:"absolute",padding:"2px 4px 2px 4px",top:"-16px",background:"white",left:"8px",color:b?"#bbb":"gray"},children:p||""}),i.children]})},j=e(11363),k=function(i){var p=i.size,r=p===void 0?20:p,b=i.visible,S=b===void 0?!0:b,g=i.color,F=i.tips,K=F===void 0?"loading...":F;return(0,l.jsx)("span",{title:K,style:{display:S?"inline-block":"none",cursor:"pointer",padding:"2px"},children:(0,l.jsx)(j.Z1,{width:r,height:r,color:g})})},L=function(i){var p=i.visible,r=p===void 0?!0:p,b=i.loading,S=i.timeout,g=S===void 0?0:S,F=i.progress,K=F===void 0?0:F,J=i.cancel,G=i.onClick,ae=(0,W.useRef)(null);return(0,W.useEffect)(function(){ae.current&&(ae.current.style.display=r?"flex":"none")}),(0,l.jsxs)("div",{ref:ae,className:"speed-button",onClick:G,style:{padding:"8px",margin:"4px",cursor:"pointer",display:r?"flex":"none",flexDirection:"row",borderRadius:"6px",alignItems:"center",border:"1px solid #bbb",background:"#eee",textAlign:"center"},children:[b?(0,l.jsx)(k,{}):null,(0,l.jsx)("div",{style:{flexGrow:1,backgroundColor:"transparent"},children:i.children}),g>0?(0,l.jsx)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:g}):"",K>0?(0,l.jsxs)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:[K,"%"]}):"",i.error?(0,l.jsx)("span",{style:{padding:"4px",color:"red",backgroundColor:"#eee",borderRadius:"4px"},children:i.error}):"",i.loading&&typeof J=="function"?(0,l.jsx)("button",{onClick:J,style:{padding:"4px",color:"red",margin:"2px",fontSize:"10px",backgroundColor:"#eee",borderRadius:"4px",cursor:"pointer"},children:" \u5355\u51FB\u53D6\u6D88"}):""]})},t=function(i){var p=i.title,r=i.enable,b=r===void 0?!0:r,S=i.visible,g=S===void 0?!0:S,F=i.buttons,K=F===void 0?[]:F,J=Array.isArray(i.children)?i.children:[i.children];return(0,l.jsxs)("div",{className:"card",style:{border:"1px solid #ccc",background:b?"white":"gray",margin:"8px",display:g?"flex":"none",flexDirection:"column"},children:[(0,l.jsxs)("div",{className:"header",style:{display:"flex",flexDirection:"row",backgroundColor:"#eee",padding:"6px",lineHeight:"150%"},children:[(0,l.jsx)("span",{style:{flexGrow:1,color:b?"#222":"gray"},children:p}),(0,l.jsx)("span",{style:{},children:K.map(function(G,ae){return(0,l.jsx)("span",{className:"button",style:{padding:"4px",margin:"4px",cursor:"pointer"},onClick:G.onClick,children:G.title},ae)})})]}),(0,l.jsx)("div",{style:{padding:"12px"},children:J.map(function(G,ae){return J.length>1&&ae==J.length-1&&G.classList&&G.classList.contains("footer")?(0,l.jsx)("div",{className:"footer",style:{borderTop:"1px solid #ccc",padding:"8px"},children:G}):G})})]})},U=e(24325),V=e.n(U),M=e(82719),s={scheme:"monokai",author:"wimer hazenberg (http://www.monokai.nl)",base00:"white",base01:"#383830",base02:"#49483e",base03:"#75715e",base04:"#a59f85",base05:"#f8f8f2",base06:"#f5f4f1",base07:"#f9f8f5",base08:"#f92672",base09:"#fd971f",base0A:"#f4bf75",base0B:"#444444",base0C:"#a1efe4",base0D:"#018ba7",base0E:"#81a9ff",base0F:"#cc6633"},O=function(i){return(0,l.jsx)(M.L,V()(V()({getItemString:function(){return""},hideRoot:!0,shouldExpandNodeInitially:function(){return!0}},i),{},{theme:s}))},h=function(i){var p=i.validate,r=i.help;if(p!=null){var b=typeof p!="boolean",S=b?p==null?void 0:p.result:p,g=b?p==null?void 0:p.loading:!1,F=b?p==null?void 0:p.error:r;return(0,l.jsxs)("span",{style:{color:"red",display:g||!S?"flex":"none"},children:[(0,l.jsx)(k,{visible:g,tips:"\u6B63\u5728\u9A8C\u8BC1..."}),!g&&(S?"":F)]})}},u=function(i){var p=i.enable,r=p===void 0?!0:p,b=i.visible,S=b===void 0?!0:b,g=i.label,F=g===void 0?"":g,K=i.children,J=K===void 0?"":K,G=i.memo;return(0,l.jsxs)("div",{className:"field",style:{position:"relative",display:S===!1?"none":"flex",boxSizing:"border-box",flexDirection:"row",width:"100%",alignItems:"center",padding:"8px"},children:[(0,l.jsxs)("label",{className:"field-label",style:{minWidth:"160px",fontWeight:"bold",color:r===!1?"gray":"inherit"},children:[F,":"]}),(0,l.jsxs)("span",{className:"field-value",style:{flexGrow:1,display:"flex",flexDirection:"row",alignItems:"center",color:r===!1?"gray":"inherit"},children:[typeof J=="function"?"":J,G&&(0,l.jsx)("span",{style:{color:"gray"},children:G})]}),(0,l.jsx)(h,V()({},i))]})},E=function(i){var p=i.title,r=i.visible,b=r===void 0?!0:r;return(0,l.jsx)("div",{style:{height:"36px",borderBottom:"1px solid #eee",marginBottom:"16px",display:b?"flex":"none"},children:(0,l.jsx)("h4",{style:{position:"absolute",background:"white",padding:"4px",color:"#bbb"},children:p})})},n=e(47851);function w(){var R="".concat(Math.floor(Math.random()*16777215).toString(16));return"#".concat(R.padStart(6,"0"))}var c=W.memo(function(R){var i=(0,W.useRef)(0),p=R.name,r=R.value,b=r===void 0?"":r,S=w(),g="block";return n.rgb(S).isDark()?g="white":g="block",(0,W.useEffect)(function(){i.current++}),(0,l.jsxs)("div",V()(V()({},R),{},{style:V()(V()({backgroundColor:S,padding:"4px",color:g,display:"flex"},R.style),{},{alignItems:"center"}),children:[(0,l.jsxs)("span",{style:{flexGrow:1},children:[p?(0,l.jsxs)("span",{style:{padding:"2px"},children:[p,"="]}):"",(0,l.jsxs)("span",{style:{padding:"2px"},children:[String(b),R.children]})]}),(0,l.jsx)("span",{style:{fontSize:"8px"},children:i.current})]}))},function(R,i){return R.name===i.name&&R.value===i.value}),D=function(i){var p=(0,W.useRef)(0),r=i.name,b=i.value,S=b===void 0?"":b,g=w(),F="block";return n.rgb(g).isDark()?F="white":F="block",(0,W.useEffect)(function(){p.current++}),(0,l.jsxs)("div",V()(V()({},i),{},{style:V()(V()({backgroundColor:g,padding:"4px",color:F,display:"flex"},i.style),{},{alignItems:"center"}),children:[(0,l.jsxs)("span",{style:{flexGrow:1},children:[r?(0,l.jsxs)("span",{style:{padding:"2px"},children:[r,"="]}):"",(0,l.jsxs)("span",{style:{padding:"2px"},children:[String(S),i.children]})]}),(0,l.jsx)("span",{style:{fontSize:"8px"},children:p.current})]}))},N=function(i){var p=i.visible,r=p===void 0?!0:p,b=i.border,S=b===void 0?!0:b,g=i.padding,F=g===void 0?"8px":g,K=i.margin,J=K===void 0?"0px":K,G=i.grow,ae=G===void 0?1:G;return(0,l.jsx)("div",{className:"layout-col",style:{display:r?"flex":"none",position:"relative",flexDirection:"column",padding:F,flexGrow:ae,margin:J,boxSizing:"border-box",border:S?"1px solid #eee":"none"},children:i.children})},x=function(i){var p=i.visible,r=p===void 0?!0:p,b=i.border,S=b===void 0?!0:b,g=i.padding,F=g===void 0?"8px":g,K=i.grow,J=K===void 0?1:K;return(0,l.jsx)("div",{className:"layout-row",style:{display:r?"flex":"none",position:"relative",flexDirection:"row",flexGrow:J,padding:F,margin:"4px",boxSizing:"border-box",border:S?"1px solid #eee":"none"},children:i.children})},A=function(i){var p=i.name,r=i.enable,b=r===void 0?!0:r,S=i.type,g=S===void 0?"text":S,F=i.validate,K=F===void 0?!0:F,J=i.visible,G=J===void 0?!0:J,ae=i.placeholder,q=i.onChange,ne=q===void 0?function(){}:q,re=i.value,ie=i.style;return(0,l.jsx)("input",{style:Object.assign({border:K===!1?"1px solid red":"1px solid #bbb",borderRadius:"4px",background:b?"white":"gray",margin:"4px",padding:"8px",display:G?"block":"none"},ie),type:g,name:p,placeholder:ae,value:re!=null?re:"",readOnly:!b,onChange:ne})},C=function(i){var p=i.text,r=i.color,b=r===void 0?"#ff6c00":r,S=typeof b=="string"?{default:b}:Object.assign({default:""},b),g=p.replace(/\{\s?(.*?)\s?\}/gm,function(F,K){return"<span style='color: ".concat(K in S?S[K]:S.default,"'>").concat(K,"</span>")}).replaceAll("undefined","\u7A7A\u503C");return(0,l.jsx)("div",{style:{backgroundColor:"#fffcda",borderLeft:"2px solid rgb(253, 138, 6)",boxSizing:"border-box",padding:"8px",margin:"4px"},children:(0,l.jsx)("span",{dangerouslySetInnerHTML:{__html:g}})})}},6244:function(H,I,e){e.r(I),e.d(I,{$:function(){return p.$},ActionChildren:function(){return Ie},ComputedObjects:function(){return p.ComputedObjects},ComputedScopeRef:function(){return p.ComputedScopeRef},EMPTY_DEPENDS:function(){return p.EMPTY_DEPENDS},FieldChildren:function(){return F},OBJECT_PATH_DELIMITER:function(){return p.OBJECT_PATH_DELIMITER},SKIP_COMPUTED:function(){return p.SKIP_COMPUTED},ValidationError:function(){return je},WatchObject:function(){return p.WatchObject},WatchObjects:function(){return p.WatchObjects},action:function(){return fe},asyncComputedObject:function(){return p.asyncComputedObject},computed:function(){return p.computed},createActionComponent:function(){return ge},createAsyncComputedMutate:function(){return p.createAsyncComputedMutate},createComputedMutate:function(){return p.createComputedMutate},createFieldComponent:function(){return K},createFieldGroupComponent:function(){return Ue},createForm:function(){return et},createObject:function(){return p.createObject},createStore:function(){return p.createStore},createUseAction:function(){return we},createUseWatch:function(){return p.createUseWatch},createWatch:function(){return p.createWatch},defaultFormProps:function(){return Be},getAction:function(){return Re},getFieldName:function(){return qe},getSnap:function(){return p.getSnap},getVal:function(){return p.getVal},getValueByPath:function(){return p.getValueByPath},installComputed:function(){return p.installComputed},installWatch:function(){return p.installWatch},isIncludePath:function(){return p.isIncludePath},isSkipComputed:function(){return p.isSkipComputed},markRaw:function(){return p.markRaw},setAsyncComputedObject:function(){return p.setAsyncComputedObject},setVal:function(){return p.setVal},skipComputed:function(){return p.skipComputed},useLatest:function(){return v},useStore:function(){return p.useStore},useUnmount:function(){return m},useUnmountedRef:function(){return f},watch:function(){return p.watch}});var W=e(12027),l=e.n(W),z=e(28633),j=e.n(z),k=e(24325),L=e.n(k),t=e(92379),U=e(34180),V=e.n(U),M=e(59166);function s(a){var o=_typeof(a);return a==null||o=="boolean"||o=="number"||o=="string"||o==null}function O(a){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,d=0,y,P=!0,_=function $(){if(y==null){P=!0,clearTimeout(d),d=0;return}try{var T=y;y=void 0,a.apply(void 0,l()(T)),d=setTimeout(function(){return $()},o)}finally{}};return function(){for(var $=arguments.length,T=new Array($),B=0;B<$;B++)T[B]=arguments[B];if(o==0)return a.apply(void 0,T);y=T,(P||d==0)&&(P=!1,_())}}function h(a,o){var d={};for(var y in a)a[y]!==o[y]&&(d[y]=o[y]);return d}function u(){return Math.random().toString(36).substring(2)}function E(a){return new Proxy({},{get:function(d,y,P){return a()[y]}})}function n(a){return(0,M.P)(a)&&"execute"in a&&(0,M.P)(a.execute)&&"loading"in a.execute}function w(a){return(0,M.P)(a)&&"value"in a}function c(a){return Array.isArray(a)}function D(a){return(0,M.P)(a)&&!w(a)&&!n(a)}function N(){return!1}var x="fields",A="actions",C="validate",R="$submit",i="$reset",p=e(34209),r=e(651);function b(a,o,d,y){return Object.assign({name:a,help:"",initial:void 0,oldValue:void 0,visible:!0,required:!1,readonly:!1,validate:null,enable:!0,placeholder:""},L()(L()({},o),{},{sync:d,update:y}))}function S(a,o){var d=(0,t.useRef)(null);return(0,t.useCallback)(function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;if(d.current==null){var P=a.sync(o);d.current=y==0?P:O(P,y)}return d.current},[])}function g(a,o){var d=(0,t.useRef)(null),y=(0,t.useState)(0),P=j()(y,2),_=P[0],$=P[1];return(0,t.useCallback)(function(T,B){var Z=Object.assign({debounce:0},B),Q=Z.debounce;if(d.current==null||_!==Q){_!==Q&&Q>0&&$(Q);var Y=function(te){return function(oe){o(typeof te=="function"?function(ee){return te.call(ee,ee.fields)}:function(ee){return(0,p.setVal)(ee,a,te)}),typeof oe.preventDefault=="function"&&oe.preventDefault()}};d.current=Q>0?Y:O(Y,Q)}return d.current(T)},[])}var F=t.memo(function(a){return(0,r.jsx)(r.Fragment,{children:typeof a.children=="function"&&a.children(a.fieldProps)})},function(a,o){return Object.entries(a.fieldProps).every(function(d){var y=j()(d,2),P=y[0],_=y[1];return["children","sync","update"].includes(P)?!0:_===o.fieldProps[P]})});function K(a,o){return t.memo(function(d){var y=d.name,P=Array.isArray(y)?y:y.split("."),_=[x].concat(l()(P)),$=[x].concat(l()(P));P.push("value"),$.push("value");var T=a.useState(function(oe){return(0,p.getVal)(oe,_)}),B=j()(T,2),Z=B[0],Q=B[1],Y=g($,Q),X=S(a,$),te=b(o.getFieldName(P),Z,X,Y);return d.render?(0,r.jsx)(F,{fieldProps:te,children:d.render}):Array.isArray(d.children)?d.children.map(function(oe,ee){return(0,r.jsx)(F,{fieldProps:te,children:oe},ee)}):(0,r.jsx)(F,{fieldProps:te,children:d.children})},function(d,y){return d.name===y.name})}var J=e(29008),G=e.n(J),ae=e(70958),q=e.n(ae),ne=e(58048);function re(a,o){return(0,t.useCallback)(function(d){o(function(y){d.call(y,(0,p.getVal)(y,a))})},[])}function ie(a,o,d){return(0,ne.w)({name:a,help:"",visible:!0,required:!1,readonly:!1,validate:!0,enable:!0,update:d},o)}function Ue(a,o){return t.memo(function(d){var y=d.name,P=a.useState(),_=j()(P,2),$=_[0],T=_[1],B=Array.isArray(y)?y:y.split("."),Z=["fields"].concat(l()(B)),Q=(0,p.getVal)($,Z),Y=re(Z,T),X=(0,t.useState)(function(){return ie(o.getFieldName(B),Q,Y)}),te=j()(X,2),oe=te[0],ee=te[1];return(0,t.useEffect)(function(){ee(ie(o.getFieldName(B),Q,Y))},[Q]),Array.isArray(d.children)?d.children.map(function(ce){return ce(oe)}):d.children(oe)},function(d,y){return d.name===y.name})}var Ae=e(6597);function Ge(a){return a.value}function le(a){var o={};return Object.entries(a).forEach(function(d){var y=j()(d,2),P=y[0],_=y[1];if(typeof P=="string")if(w(_))o[P]=Ge(_);else if(D(_)){var $=le(_);$&&Object.keys($).length>0&&(o[P]=$)}else c(_)&&(o[P]=Ve(_))}),o}function Ve(a){var o=[];return a.forEach(function(d){w(d)?o.push(Ge(d)):D(d)?o.push(le(d)):c(d)?o.push(Ve(d)):o.push(d)}),o}function pe(a,o,d){var y=Object.assign({},d),P=y.onNotMatch,_=P===void 0?function(){}:P;function $(T,B){var Z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];Object.entries(T).forEach(function(Q){var Y=j()(Q,2),X=Y[0],te=Y[1];if(typeof X=="string"){var oe=[].concat(l()(Z),[X]);if(X in B){var ee=B[X];w(ee)?ee.value=te:D(ee)?(0,M.P)(te)?$(te,ee,oe):_(oe):c(ee)?Array.isArray(te)?$(te,ee):_(oe):B[X]=te}else _(oe)}})}$(a,o)}function wt(a,o){var d=new FormData,y=Object.assign({getItemName:function(T){return T.join(".")}},o),P=y.getItemName;function _($,T){if(T!=null){var B=P?P($):$.join(".");Array.isArray(T)?T.forEach(function(Z,Q){_([].concat(_toConsumableArray($),[String(Q)]),Z)}):isPlainObject(T)?Object.entries(T).forEach(function(Z){var Q=_slicedToArray(Z,2),Y=Q[0],X=Q[1];_([].concat(_toConsumableArray($),[Y]),X)}):d.append(B,T)}}return _([],a),d}function me(a,o){return function(y,P){var _=Object.assign({validate:!0},P);try{a.enableComputed(!1),pe(y,a.state.fields),a.setState(function($){$.dirty=!1,$.validate=null})}catch($){console.error($)}finally{a.enableComputed(!0),_!=null&&_.validate&&a.computedObjects.runGroup(C)}}}function se(a,o){return le(a)}function nt(a,o){return function(y){var P=Object.assign({},y);return se((0,p.getSnap)(a.state).fields)}}function Re(a,o){return function(){var d=q()(G()().mark(function y(P){var _;return G()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return _=Object.assign({},o,P),Array.isArray(_.scope)&&_.scope.length>0&&_.scope[0]!==x&&_.scope.unshift(x),T.next=4,a.execute.run(_);case 4:if(!a.execute.error){T.next=8;break}throw new Error(a.execute.error);case 8:return T.abrupt("return",a.execute.result);case 9:case"end":return T.stop()}},y)}));return function(y){return d.apply(this,arguments)}}()}function rt(a,o){return(0,t.useCallback)(function(d){var y=Object.assign({},{noReentry:!0,preventDefault:!0},o,d),P=Re(a,y);return function(_){P(),_&&y.preventDefault&&typeof _.preventDefault=="function"&&_.preventDefault()}},[a])}function be(a,o){return(0,t.useCallback)(function(d){var y=(0,p.getValueByPath)(a,[].concat(l()(Array.isArray(o)?o:o.split(".")),["execute"]));y.cancel(),d&&typeof d.preventDefault=="function"&&d.preventDefault()},[])}function ot(a,o,d,y){return Object.assign({help:"",title:"",visible:!0,enable:!0},(0,Ae.C)(a,"execute"),L()(L()({},a.execute),{},{run:o,cancel:d,ref:y}))}var Ie=t.memo(function(a){return(0,r.jsx)(r.Fragment,{children:typeof a.children=="function"&&a.children(a.actionProps)})},function(a,o){return Object.entries(a.actionProps).every(function(d){var y=j()(d,2),P=y[0],_=y[1];return["children","run","cancel"].includes(P)?!0:_===o.actionProps[P]})});function ge(a){function o(d){var y=a.useState(),P=j()(y,1),_=P[0],$=d.name;$.includes(".")||($="actions.".concat($));var T=(0,p.getValueByPath)(_,$);if(T==null)return a.options.log("Action ".concat($," is not defined"),"error"),(0,r.jsx)(r.Fragment,{children:d.children});var B=rt(T,d),Z=be(_,$),Q=(0,t.useRef)(null),Y=ot(T,B,Z,Q);return typeof d.render=="function"?(0,r.jsx)(Ie,{actionProps:Y,children:d.render}):d.children?Array.isArray(d.children)?d.children.map(function(X,te){return(0,r.jsx)(Ie,{actionProps:Y,children:X},te)}):(0,r.jsx)(Ie,{actionProps:Y,children:d.children}):(0,r.jsx)(r.Fragment,{})}return t.memo(o,function(d,y){return d.name===y.name})}function fe(a,o){return(0,p.computed)(function(){var d=q()(G()().mark(function y(P,_){var $;return G()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return $=se(Object.assign({},P)),B.next=3,a($,_);case 3:return B.abrupt("return",B.sent);case 4:case"end":return B.stop()}},y)}));return function(y,P){return d.apply(this,arguments)}}(),[],Object.assign({},o,{async:!0}))}function we(a){return function(d,y){var P=(0,t.useRef)(),_=a.useState(),$=j()(_,2),T=$[0],B=$[1],Z=(0,t.useState)(function(){return y!=null&&y.name?y==null?void 0:y.name:u()}),Q=j()(Z,1),Y=Q[0];return P.current||(Y in T.actions||(B(function(X){X.actions[Y]={execute:fe(d,y)}}),(0,p.getValueByPath)(T,["actions",Y])),P.current=Y),(0,p.getValueByPath)(T,["actions",Y]).execute}}var De=e(20842),Fe=e(14582),lt=e.n(Fe),_e=e(6270),dt=e.n(_e),Ee=e(93949),ut=e.n(Ee),st=e(77701),ct=e.n(st),it=e(28249),pt=e.n(it),Me=e(5672),vt=e.n(Me),je=function(a){ct()(d,a);var o=pt()(d);function d(y){var P;return ut()(this,d),P=o.call(this,y),P.name="ValidationError",P}return dt()(d)}(vt()(Error));function ze(a){return a.length>1&&a[0]==x&&(a[a.length-1]==="validate"||a.length>=2&&a[a.length-2]=="validate"&&a[a.length-1]=="result")&&!(a.length==2&&a[1]=="validate")&&!(a.length==3&&a[1]=="validate"&&a[2]=="result")}function Ze(a){var o=Object.assign({},a),d=o.entry;return(0,p.watch)(function(y,P,_){if((0,p.isIncludePath)(d||_.path,y)){if(typeof P=="boolean"){var $=y.join(p.OBJECT_PATH_DELIMITER);P?delete _.cache[$]:_.cache[$]=P}return Object.keys(_.cache).length==0}},function(y){return ze(y)},{initial:!0})}function He(a,o){var d=typeof a=="function"?a():a;if(!d)throw new ValidationError(typeof o=="function"?o():o)}function Se(a){return function(){var o=q()(G()().mark(function d(y){var P,_,$,T,B,Z;return G()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:if(Array.isArray(y)&&y.length>0){P=y.join(p.OBJECT_PATH_DELIMITER),_=lt()(a.computedObjects);try{for(_.s();!($=_.n()).done;)T=j()($.value,2),B=T[0],Z=T[1],B.startsWith(P)&&Z.run()}catch(X){_.e(X)}finally{_.f()}}else a.computedObjects.runGroup(C);case 1:case"end":return Y.stop()}},d)}));return function(d){return o.apply(this,arguments)}}()}var mt=e(92980);function Je(a){var o={};return Object.entries(a||{}).forEach(function(d){var y=_slicedToArray(d,2),P=y[0],_=y[1];isFieldValue(_)||isFieldGroup(_)||isFieldList(_)||(o[P]=_)}),o}function It(a){return Object.assign({type:"submit",help:"",title:"",dirty:!1,validate:!0,visible:!0,enable:!0,readOnly:!0},Je(a))}var Oe=null,Qe=(0,mt.zo)(function(a,o){var d,y=o.className;return(0,r.jsx)("input",{className:y+" "+a.className,style:a.style,type:(d=a.type)!==null&&d!==void 0?d:"submit",value:a.title})},{cursor:"pointer",width:"100%",display:"block",boxSizing:"border-box",padding:"8px",borderRadius:"8px",transition:"filter 0.3s","&:hover":{filter:"brightness(1.2)"},"&.speedform-submit":{backgroundColor:"#54b2ff",color:"white",border:"1px solid #1e5786"}});function ft(a,o,d){var y=Object.assign({preventDefault:!1},o);function P(_){var $=a.useState(),T=_slicedToArray($,1),B=T[0],Z=_.scope,Q=getValueByPath(B,Z),Y=It(Q),X=typeof _.render=="function"?1:Array.isArray(_.children)?2:typeof _.children=="function"?3:0;return _jsxs(_Fragment,{children:[_jsx(Qe,_objectSpread({visible:X==0},y)),X===1?_jsx(Oe,{submitProps:Y,children:_.render}):X===2?_.children.map(function(te,oe){return _jsx(Oe,{submitProps:Y,children:te},oe)}):_jsx(Oe,{submitProps:Y,children:_.children})]})}return React.memo(P,function(_,$){return _.scope===$.scope})}function xt(a,o){var d=ge(a);return function(y){var P=(0,t.useRef)(null),_=(0,t.useCallback)(function($){if(o.validAt!=="submit"){var T;(T=P.current)===null||T===void 0||T.click()}$.preventDefault()},[]);return(0,r.jsx)(d,L()(L()({},y),{},{name:R,children:function(T){var B=T.loading,Z=T.title,Q=T.run;return(0,r.jsxs)("div",{className:"speedform-submit",children:[(0,r.jsx)("input",{ref:P,type:"submit",style:{display:"none"},value:y.label||Z}),(0,r.jsxs)("button",{type:"submit",onClick:Q({extras:1}),children:["==",y.label||Z," =="]}),(0,r.jsx)("span",{children:B?"\u63D0\u4EA4\u4E2D2":""})]})}}))}}var $e={title:"\u63D0\u4EA4",help:"",tips:"\u63D0\u4EA4",visible:!0,enable:!0,validate:!0,readonly:!1,execute:fe(function(){var a=q()(G()().mark(function o(d,y){return G()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:console.log("scope=",d,"options=",y);debugger;case 2:case"end":return _.stop()}},o)}));return function(o,d){return a.apply(this,arguments)}}())};function ht(a,o){return action(function(){var d=_asyncToGenerator(_regeneratorRuntime().mark(function y(P,_){var $;return _regeneratorRuntime().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return $=new FormData,B.next=3,a($,_);case 3:return B.abrupt("return",B.sent);case 4:case"end":return B.stop()}},y)}));return function(y,P){return d.apply(this,arguments)}}(),o)}function ke(a,o){var d=ge(a);return function(y){return(0,r.jsx)(d,L()(L()({},y),{},{name:i,children:function(_){var $=_.loading,T=_.title;return(0,r.jsxs)("div",{className:"speedform-reset",children:[(0,r.jsx)("input",{type:"reset",value:y.label||T}),(0,r.jsx)("span",{children:$?"\u63D0\u4EA4\u4E2D":"\u5DF2\u63D0\u4EA4"})]})}}))}}var Ye={title:"\u91CD\u7F6E",help:"",tips:"\u91CD\u7F6E",visible:!0,enable:!0,validate:!0,readonly:!1,execute:fe(q()(G()().mark(function a(){return G()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:case"end":return d.stop()}},a)})))};function Te(a){return a.length>1&&a[0]==x&&a[a.length-1]=="value"}function Xe(a){return(0,p.watch)(function(o,d,y){if((0,p.isIncludePath)(a||y.path,o)&&!y.value)return!0},function(o){return Te(o)},{initial:!1})}var Be={name:"SpeedForm",title:"SpeedForm",help:"",tips:"",status:"idle",dirty:Xe(["fields"]),validate:Ze({entry:["fields"]}),readonly:!1,enable:!0,visible:!0,fields:{},actions:{$submit:$e,$reset:Ye}};function yt(a){return(0,De.w)(a,Be)}function bt(a,o){a.length>=2&&a[0]==x&&a[a.length-1]==C&&(o.scope||(o.scope="./value"),o.depends||(o.depends=[]),o.depends.push([].concat(l()(a.slice(0,-1)),["value"])),o.initial=null,o.group=C,o.enable=!0)}function gt(a,o){a.length>1&&a[a.length-1]=="execute"&&(o.immediate=!1,o.scope?Array.isArray(o.scope)&&o.scope.length>0&&o.scope[0]!=x&&o.scope.unshift(x):o.scope=[x],o.noReentry=!0)}function Et(a,o){a.length>0&&a[0]==x&&o.depends&&o.depends.forEach(function(d,y){Array.isArray(d)&&d.length>0&&d[0]!=x?o.depends[y]=[x].concat(l()(d)):typeof d=="string"&&!d.startsWith("".concat(x,"."))&&(o.depends[y]="".concat(x,".").concat(d))})}function Nt(a){return function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;a.enableComputed(o)}}function qe(a){return a.length>0?a[a.length-1]==="value"?a.slice(0,-1).join("."):a.join("."):""}function et(a,o){var d=(0,ne.w)({getFieldName:qe,validAt:"once"},o);yt(a);var y=(0,p.createStore)(a,{debug:d.debug,immediate:!0,scope:function(){return[x]},onCreateComputed:function($,T,B){bt($,B),Et($,B),gt($,B)},getRootScope:function($,T){var B=T.computedType,Z=T.valuePath;if(B==="Computed"&&Z.length>0&&Z[0]==x)return $.fields}});y.on("computed:created",function(_){ze(_.path)&&(_.options.enable=d.validAt==="once")});var P=y;return{state:P.state,useState:P.useState,setState:P.setState,Form:Ct(P,d),Field:K(P,d),Group:Ue(P,d),Action:ge(P),Submit:xt(P,d),Reset:ke(P,d),useAction:we(P),fields:E(function(){return P.state.fields}),actions:E(function(){return P.state.actions}),getAction:Re,freeze:Nt(y),load:me(P,d),getValues:nt(P,d),computedObjects:P.computedObjects,watchObjects:P.watchObjects,validate:Se(P)}}function Ct(a,o){var d=ge(a),y=we(a);return t.forwardRef(function(P,_){var $=P.children,T=y(function(){var Y=q()(G()().mark(function X(te,oe){return G()().wrap(function(ce){for(;;)switch(ce.prev=ce.next){case 0:return ce.next=2,a.computedObjects.runGroup(C);case 2:case"end":return ce.stop()}},X)}));return function(X,te){return Y.apply(this,arguments)}}(),{save:!1}),B=T.run,Z=(0,t.useCallback)(function(){var Y=q()(G()().mark(function X(te){return G()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:if(B(),o.validAt!=="submit"){ee.next=4;break}return ee.next=4,a.computedObjects.runGroup(C);case 4:return ee.next=6,a.computedObjects.runGroup(C);case 6:te.preventDefault();case 7:case"end":return ee.stop()}},X)}));return function(X){return Y.apply(this,arguments)}}(),[]),Q=(0,t.useCallback)(function(Y){},[]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("form",L()(L()({ref:_,className:"speedform"},P),{},{onSubmit:Z,onReset:Q,children:$}))})})}function v(a){var o=(0,t.useRef)(a);return o.current=a,o}function m(a){N()&&typeof a!="function"&&console.error("useUnmount expected parameter is a function, got ".concat(V()(a)));var o=v(a);(0,t.useEffect)(function(){return function(){o.current()}},[])}function f(){var a=(0,t.useRef)(!1);return(0,t.useEffect)(function(){return a.current=!1,function(){a.current=!0}},[]),a}},34209:function(H,I,e){e.r(I),e.d(I,{$:function(){return se.$},ComputedObjects:function(){return Qe},ComputedScopeRef:function(){return W},EMPTY_DEPENDS:function(){return t},OBJECT_PATH_DELIMITER:function(){return k},SKIP_COMPUTED:function(){return L},WatchObject:function(){return Xe},WatchObjects:function(){return Be},asyncComputedObject:function(){return we},computed:function(){return He},createAsyncComputedMutate:function(){return fe},createComputedMutate:function(){return Ae},createObject:function(){return se.share},createStore:function(){return et},createUseWatch:function(){return Ye},createWatch:function(){return $e},getSnap:function(){return se.getSnap},getVal:function(){return u},getValueByPath:function(){return i},installComputed:function(){return Fe},installWatch:function(){return ke},isIncludePath:function(){return x},isSkipComputed:function(){return U},markRaw:function(){return se.markRaw},setAsyncComputedObject:function(){return Re},setVal:function(){return C},skipComputed:function(){return R},useStore:function(){return Ct},watch:function(){return xt}});var W=function(v){return v.Root="root",v.Current="current",v.Parent="parent",v.Depends="depends",v.Self="self",v}({});function l(v){return(v||["ROOT"]).map(function(m){return Array.isArray(m)?m.join("."):m}).join("_")}function z(v,m){var f="";return m.id?f=m.id:f=l(v),f}function j(v){return v instanceof Error?v:new Error(v)}var k=".",L=Symbol("SKIP_COMPUTED"),t=Symbol("EMPTY_DEPENDS");function U(v){return v[L]===!0}var V=e(12027),M=e.n(V);function s(v,m,f){if(!Array.isArray(v))throw new Error("curPath must be an array");return m==="self"?v:m==="root"?[]:m==="parent"?v.slice(0,-2):m==="current"?v.slice(0,-1):typeof m=="string"?m.startsWith("./")?[].concat(M()(v.slice(0,-1)),M()(m.slice(2).split(k))):m.startsWith("../")?s(v.slice(0,-1),m.slice(3),!0):m.startsWith("/")?(m=m.replace(/^(\/)*/,""),m.split(k)):f?[].concat(M()(v.slice(0,-1)),M()(m.split(k))):M()(m.split(k)):Array.isArray(m)?m:v}function O(v,m){var f=v.get(m);if(f!==void 0)return f;var a=v.get(Number(m)||m);if(a!==void 0)return a}function h(v){return toString.call(v)==="[object Map]"}function u(v,m){if(m.length===0)return v;var f,a=v;return m.forEach(function(o){if(h(a))f=O(a,o);else if(o in a)f=a[o];else throw new Error("invalid keypath: ".concat(m.join(".")));a=f}),f}function E(v,m,f){return v.map(function(a){try{return u(m,s(f,a))}catch(o){console.warn(o);return}}).filter(function(a){return a!==void 0})}function n(v){return(v||[]).map(function(m){return Array.isArray(m)?m:typeof m=="string"?["/","./","../"].some(function(f){return m.startsWith(f)})?m:m.includes(k)?m.split(k):m.split("."):[]})}var w=e(34180),c=e.n(w);function D(v){return _typeof(v)=="object"&&v.hasOwnProperty("__COMPUTED__")&&["async","sync"].includes(v.__COMPUTED__)&&v.hasOwnProperty("fn")&&typeof v.fn=="function"&&v.hasOwnProperty("options")&&_typeof(v.options)=="object"}function N(v){return _typeof(v)=="object"&&["result","loading","timeout","retry","run"].every(function(m){return v.hasOwnProperty(m)})}function x(v,m){return v.length>m.length?!1:v.every(function(f,a){return f===m[a]})}function A(v){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"log",f=typeof v=="function"?v():v instanceof Error?v.stack:v;try{var a;(a=console)[m].apply(a,["[@speedform/reactive] "].concat(M()(Array.isArray(f)?f:[f])))}catch(o){}}function C(v,m,f){var a=v,o=m.length-1;m.forEach(function(d,y){var P=h(a);if(y===o){P?a.set(d,f):a[d]=f;return}var _=P?O(a,d):a[d];a=_})}function R(v){return v[L]=!0,v}function i(v,m){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:k,a=[];try{return typeof m=="function"&&(m=m.call(v,v)),a=Array.isArray(m)?m:typeof m=="string"?m.split(f):[],a.length>0?u(v,a):v}catch(o){return console.warn(o),v}}function p(v,m){function f(a,o){for(var d in a){var y=a[d];typeof m=="function"&&m({value:y,key:d,parent:a,path:o.concat(d)}),c()(y)==="object"&&f(y,o.concat(d))}}f(v,[])}var r=e(24325),b=e.n(r);function S(v,m,f,a){var o=f==null?a:f;if(typeof o=="function")try{o=o.call(v,v)}catch(d){}return o==null?a==null?W.Current:a:o}function g(v,m,f){var a=f.draft,o=f.dependValues,d=f.valuePath,y=f.computedType,P=a;if(typeof v.options.getRootScope=="function"){var _=v.options.getRootScope.call(a,a,{computedType:y,valuePath:d});_!==void 0&&(P=_)}var $=d.length>=1?d.slice(0,d.length-1):[],T=S(a,d,m.scope,v.options.scope&&v.options.scope(y,d)),B=a;try{T===W.Current?B=i(a,$):T===W.Parent?B=i(a,d.slice(0,d.length-2)):T===W.Root?B=P:T===W.Depends?B=Array.isArray(o)?o.map(function(Z){return typeof Z=="function"?Z():Z}):[]:typeof T=="string"?T.startsWith("@")?B=g(v,b()(b()({},m),{},{scope:g(v,b()(b()({},m),{},{scope:T.slice(1)}),f)}),f):B=i(a,s(d,T)):Array.isArray(T)&&(B=i(a,T))}catch(Z){v.options.log("Error while getting computed scope ".concat(d.join(k),": ").concat(Z.message))}return B}var F=e(93949),K=e.n(F),J=e(6270),G=e.n(J),ae=e(29861),q=e.n(ae),ne=function(){function v(m,f,a,o){K()(this,v),q()(this,"options",void 0),this.store=m,this.selfReactiveable=f,this.path=a,this.options=Object.assign({},o)}return G()(v,[{key:"id",get:function(){return this.options.id}},{key:"enable",get:function(){return this.options.enable},set:function(f){this.options.enable=f}},{key:"group",get:function(){return this.options.group}},{key:"async",get:function(){return this.options.async}},{key:"depends",get:function(){return this.options.depends}},{key:"value",get:function(){var f;return u(this.selfReactiveable?(f=this.selfReactiveable)===null||f===void 0?void 0:f.state:this.store.state,this.path)}},{key:"run",value:function(f){var a;return(a=this.store.reactiveable)===null||a===void 0?void 0:a.runComputed(this.id,f)}},{key:"cancel",value:function(){if(this.async)this.value.cancel();else throw new Error("cancel only works for async computed")}}]),v}();function re(v,m,f,a){var o=f.options.onCreateComputed;if(typeof o=="function"&&typeof m=="function"){var d=o.call(f,v,m,a);a.scope||(a.scope=W.Current),typeof d=="function"&&(m=d)}}function ie(v,m,f){return Object.assign({loading:!1,timeout:0,retry:0,error:null,result:void 0,progress:0,run:v.reactiveable.markRaw(R(function(a){return v.reactiveable.runComputed(m,Object.assign({},a))})),cancel:v.reactiveable.markRaw(R(function(){console.log("cancel")}))},f)}function Ue(v,m,f){var a=v.valuePath,o=v.id,d=v.desc,y=v.resultPath,P=v.getter,_=m.selfReactiveable;f.reactiveable.createComputed({onComputed:function(T){var B=T.draft,Z=T.values,Q=T.options;if(!f.options.enableComputed||!m.enable&&(Q==null?void 0:Q.enable)!==!0){f.options.log("Sync computed <".concat(d,"> is disabled"),"warn");return}f.options.log("Run sync computed for : ".concat(d)),v.dependValues=Z;var Y=Object.assign({},m,Q),X=B,te=g(f,Y,{draft:B,dependValues:Z,valuePath:a,computedType:"Computed"}),oe=m.initial;try{oe=P.call(f,te),f.emit("computed:done",{path:a,id:o,value:oe})}catch(ee){f.emit("computed:error",{path:a,id:o,error:ee})}_?_.setState(function(ee){C(ee,y,oe)}):C(B,y,oe)},options:m})}function Ae(v,m){var f=v.path,a=v.parent,o=v.value;if(!(a&&!Object.hasOwn(a,f[f.length-1]))){var d=o(),y=d.getter,P=d.options;re(f,y,m,P);var _=P.selfReactiveable,$=f,T=z(f,P),B=f.join(k);m.options.log(function(){return"Create sync computed: ".concat(B," (scope=").concat(P.scope,")")});var Z={id:T,desc:B,resultPath:$,isComputedRunning:!1,dependValues:[],valuePath:f,deps:[],getter:y};Ue(Z,P,m),_||v.replaceValue(u(m.state,f));var Q=new ne(m,_,f,P);return P.save&&m.computedObjects.set(T,Q),Q}}var Ge=e(29008),le=e.n(Ge),Ve=e(70958),pe=e.n(Ve),wt=e(28633),me=e.n(wt),se=e(13834),nt=e(56041);function Re(v,m,f,a,o){var d=ie(v,a,o),y=u(m,f);Object.assign(y,d,o)}function rt(v,m,f){var a=Object.assign({},f),o=a.max,d=o===void 0?100:o,y=a.min,P=y===void 0?0:y,_=a.value,$=_===void 0?0:_;return v(function(T){return C(T,[].concat(M()(m),["progress"]),$)}),{value:function(B){B>d&&(B=d),B<P&&(B=P),v(function(Z){return C(Z,[].concat(M()(m),["progress"]),B)})},end:function(){this.value(d)}}}function be(v,m,f){v(function(a){Object.entries(f).forEach(function(o){var d=me()(o,2),y=d[0],P=d[1];C(a,[].concat(M()(m),[y]),P)})})}function ot(v,m,f,a){return Ie.apply(this,arguments)}function Ie(){return Ie=pe()(le()().mark(function v(m,f,a,o){var d,y,P,_,$,T,B,Z,Q,Y,X,te,oe,ee,ce,ue,St,Le,Dt,We,ve,xe,Ot,Ft,he;return le()().wrap(function(Pe){for(;;)switch(Pe.prev=Pe.next){case 0:d=f.id,y=f.valuePath,P=f.getter,_=f.resultPath,$=f.dependValues,T=a.timeout,B=T===void 0?0:T,Z=a.retry,Q=Z===void 0?[0,0]:Z,Y=a.selfReactiveable,X=Y?Y.setState.bind(Y):o.setState,te=g(o,a,{draft:m,dependValues:$,valuePath:y,computedType:"Computed"}),oe=Array.isArray(Q)?Q:[Number(Q),0],ee=me()(oe,2),ce=ee[0],ue=ee[1],Le=new AbortController,Dt={onTimeout:function(ye){return St=ye},getProgressbar:function(ye){return rt(X,y,ye)},getSnap:function(ye){return(0,se.getSnap)(ye,!1)},abortSignal:Le.signal,cancel:Le.abort,extras:a.extras},We=!1,be(X,_,{cancel:(0,se.markRaw)(R(function(){return Le.abort()}))}),Le.signal.addEventListener("abort",function(){We=!0}),ve=!1,xe=!1,Ft=le()().mark(function tt(){var ye,at,Ne,_t,Pt,At,Ke,Rt,Ce;return le()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:if(ve=!1,xe=!1,Ne={},de.prev=3,_t=Array.isArray(B)?B:[B,0],Pt=me()(_t,2),At=Pt[0],Ke=At===void 0?0:At,Rt=Pt[1],Ce=Rt===void 0?0:Rt,be(X,_,{loading:!0,error:null,retry:he>0?ce-he:0,timeout:Ce>1?Ce:Ke,progress:0}),!We){de.next=8;break}throw new Error("Abort");case 8:return Ke>0&&(ye=setTimeout(function(){xe=!0,typeof St=="function"&&St(),ve||(clearInterval(at),be(X,_,{loading:!1,error:"TIMEOUT",timeout:0}))},Ke),Ce>1&&(at=setInterval(function(){be(X,_,{timeout:Ce--}),Ce===0&&clearInterval(at)},Ke/(Ce+1)))),de.next=11,P.call(o,te,Dt);case 11:if(Ot=de.sent,!We){de.next=14;break}throw new Error("Abort");case 14:xe||Object.assign(Ne,{result:Ot,error:null,timeout:0}),de.next=22;break;case 17:de.prev=17,de.t0=de.catch(3),ve=!0,xe||Object.assign(Ne,{error:j(de.t0).message,timeout:0}),ce>0&&Object.assign(Ne,{retry:ce-he});case 22:return de.prev=22,clearTimeout(ye),clearInterval(at),(!ve||he==ce)&&Object.assign(Ne,{loading:!1}),!ve&&!xe&&Object.assign(Ne,{error:null}),be(X,_,Ne),de.finish(22);case 29:if(!ve){de.next=33;break}if(!(ce>0&&ue>0&&he<ce)){de.next=33;break}return de.next=33,(0,nt.g)(ue);case 33:case"end":return de.stop()}},tt,null,[[3,17,22,29]])}),he=0;case 14:if(!(he<ce+1)){Pe.next=19;break}return Pe.delegateYield(Ft(),"t0",16);case 16:he++,Pe.next=14;break;case 19:We||xe?o.emit("computed:cancel",{path:y,id:d,reason:xe?"timeout":"abort"}):ve?o.emit("computed:error",{path:y,id:d,error:ve}):o.emit("computed:done",{path:y,id:d,value:Ot});case 20:case"end":return Pe.stop()}},v)})),Ie.apply(this,arguments)}function ge(v,m,f){var a=v.valuePath,o=v.id,d=v.deps,y=v.desc,P=m.selfReactiveable,_=m.initial,$=m.noReentry;f.reactiveable.createAsyncComputed({depends:function(B){return E(d,B,a)},initial:function(B){P?P.setState(function(Z){C(Z,a,ie(f,o,{result:_}))}):C(B,a,ie(f,o,{result:_}))},onComputed:function(){var T=pe()(le()().mark(function Z(Q){var Y,X,te,oe,ee;return le()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:if(Y=Q.draft,X=Q.values,te=Q.options,!(!f.options.enableComputed||!m.enable&&(te==null?void 0:te.enable)!==!0)){ue.next=4;break}return f.options.log("Async computed <".concat(y,"> is disabled"),"warn"),ue.abrupt("return");case 4:if(f.options.log("Run async computed for : ".concat(y)),oe=Object.assign({},m,te),!($&&v.isComputedRunning)){ue.next=10;break}return f.options.debug&&f.options.log("Reentry async computed: ".concat(y),"warn"),f.emit("computed:cancel",{path:a,id:o,reason:"reentry"}),ue.abrupt("return");case 10:return v.isComputedRunning=!0,v.dependValues=X,ue.prev=12,ue.next=15,ot(Y,v,oe,f);case 15:return ee=ue.sent,ue.abrupt("return",ee);case 17:return ue.prev=17,v.isComputedRunning=!1,ue.finish(17);case 20:case"end":return ue.stop()}},Z,null,[[12,,17,20]])}));function B(Z){return T.apply(this,arguments)}return B}(),options:m})}function fe(v,m){var f=v.path,a=v.parent,o=v.value;if(!(a&&!Object.hasOwn(a,f[f.length-1]))){var d=o(),y=d.getter,P=d.options;P.async=!0,re(f,y,m,P);var _=P.depends,$=_===void 0?[]:_,T=P.selfReactiveable,B=f;$.length==0&&m.options.log("async computed <".concat(f.join("."),"> should specify depends"),"warn");var Z=z(f,P);P.id=Z;var Q=f.join(k);m.options.log(function(){return"Create async computed: ".concat(Q," (depends=").concat($.length==0?"None":l($),",scope=").concat(P.scope,")")});var Y={id:Z,desc:Q,resultPath:B,isComputedRunning:!1,dependValues:[],valuePath:f,deps:$,getter:y};ge(Y,P,m),T||v.replaceValue(u(m.state,f));var X=new ne(m,T,f,P);return P.save&&m.computedObjects.set(Z,X),X}}function we(v){return Object.assign({loading:!1,timeout:0,retry:0,error:null,result:void 0,progress:0,run:(0,se.markRaw)(R(function(m){})),cancel:(0,se.markRaw)(R(function(){}))},v)}var De=e(36711);function Fe(v,m){var f=v.value,a;return f.__COMPUTED__=="async"?a=fe(v,m):f.__COMPUTED__=="sync"?a=Ae(v,m):(0,De.$)(f)?(v.value=function(){return{getter:f,options:{depends:[],initial:void 0,immediate:!0,enable:!0}}},a=fe(v,m)):(v.value=function(){return{getter:f,options:{initial:void 0,enable:!0}}},a=Ae(v,m)),a&&setTimeout(function(){m.emit("computed:created",a)}),a}var lt=e(14582),_e=e.n(lt),dt=e(28810),Ee=e.n(dt),ut=e(48510),st=e.n(ut),ct=e(30790),it=e.n(ct),pt=e(77701),Me=e.n(pt),vt=e(28249),je=e.n(vt),ze=e(5672),Ze=e.n(ze);function He(v,m,f){if(typeof v!="function")throw new Error("computed getter must be a function");var a=[],o={async:!1,enable:!0,timeout:0,depends:[],immediate:!0,save:!0};if(arguments.length==1)a=[];else if(arguments.length==2)if(Array.isArray(arguments[1]))a=arguments[1];else if(c()(arguments[1])=="object")Object.assign(o,arguments[1]);else throw new Error("invalid arguments");else arguments.length>=3&&(a=arguments[1],Object.assign(o,arguments[2]));var d=o.async===!0||(0,De.$)(v)||arguments.length>=2&&Array.isArray(m);o.async=d,o.depends=n(a);var y=function(){return{getter:v,options:o}};return y.__COMPUTED__=d?"async":"sync",y}function Se(){return Math.random().toString(36).slice(2)}var mt=function(){function v(m,f){K()(this,v)}return G()(v,[{key:"state",get:function(){throw new Error("state not implemented.")}},{key:"useState",value:function(f){throw new Error("useState not implemented.")}},{key:"setState",value:function(f){throw new Error("setState not implemented.")}},{key:"createAsyncComputed",value:function(f){throw new Error("createAsyncComputed not implemented.")}},{key:"createComputed",value:function(f){throw new Error("createComputed not implemented.")}},{key:"runComputed",value:function(f,a){throw new Error("runComputed not implemented.")}},{key:"sync",value:function(f){throw new Error("sync not implemented.")}},{key:"markRaw",value:function(f){throw new Error("makeRaw not implemented.")}},{key:"createWatch",value:function(f,a){throw new Error("createWatch not implemented.")}}]),v}(),Je=function(v){Me()(f,v);var m=je()(f);function f(a,o){var d,y;return K()(this,f),y=m.call(this,a,o),q()(Ee()(y),"_stateCtx",void 0),y._stateCtx=(0,se.sharex)(a,{stopArrDep:!1,moduleName:(d=o==null?void 0:o.id)!==null&&d!==void 0?d:Se(),onRead:function(_){o!=null&&o.onRead&&o.onRead({path:_.fullKeyPath,value:_.value,parent:_.parent,replaceValue:_.replaceValue})}}),y}return G()(f,[{key:"state",get:function(){return this._stateCtx.reactive}},{key:"useState",value:function(o){var d=this._stateCtx.useState(),y=me()(d,2),P=y[0],_=y[1],$=typeof o=="function"?o(P):P;return[$,_]}},{key:"setState",value:function(o){this._stateCtx.setState(o)}},{key:"sync",value:function(o){return this._stateCtx.sync(o)}},{key:"createAsyncComputed",value:function(o){var d=o.initial,y=o.onComputed,P=o.depends,_=o.options;return this._stateCtx.mutate({deps:function(T){return typeof P=="function"?P(T):null},fn:function(T,B){B.isFirstCall&&typeof d=="function"&&d(T,B)},task:function(){var $=pe()(le()().mark(function B(Z){var Q,Y,X,te;return le()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:if(Q=Z.draft,Y=Z.setState,X=Z.input,te=Z.extraArgs,typeof y!="function"){ee.next=3;break}return ee.abrupt("return",y({draft:Q,setState:Y,values:X,options:Object.assign({},te)}));case 3:case"end":return ee.stop()}},B)}));function T(B){return $.apply(this,arguments)}return T}(),immediate:_.immediate,desc:_.id,checkDeadCycle:!1}),_.id}},{key:"createComputed",value:function(o){var d=o.onComputed,y=o.options;return this._stateCtx.mutate({fn:function(_,$){var T=$.input;typeof d=="function"&&d({draft:_,values:T})},task:function(){var P=pe()(le()().mark(function $(T){var B,Z,Q;return le()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:B=T.draft,Z=T.input,Q=T.extraArgs,typeof d=="function"&&d({draft:B,values:Z,options:Q});case 2:case"end":return X.stop()}},$)}));function _($){return P.apply(this,arguments)}return _}(),desc:y.id,checkDeadCycle:!1}),y.id}},{key:"runComputed",value:function(o,d){var y={desc:o,extraArgs:d};return this._stateCtx.runMutateTask(y)}},{key:"markRaw",value:function(o){return(0,se.markRaw)(o)}},{key:"createWatch",value:function(o,d){var y=this,P=(0,se.watch)(function($){var T=$.triggerReasons,B=T.map(function(Z){return Z.keyPath});o(B)},typeof d=="function"?d:function(){return(d==null?void 0:d.length)==0?[y._stateCtx.state]:d==null?void 0:d.map(function($){return i(y._stateCtx.state,$)})}),_=P.unwatch;return _}}]),f}(mt),It=e(59166);function Oe(v){function m(f,a,o){var d=Object.assign({id:Se(),save:!1},(0,It.P)(arguments[1])?arguments[1]:arguments[2]);d.depends=Array.isArray(arguments[1])?arguments[1]:[];var y=d.async===!0||(0,De.$)(f)||Array.isArray(arguments[1]);d.selfReactiveable=new Je({value:y?ie(v,d.id,{}):d.initial});var P;y?P={path:["value"],parent:null,value:He(f,d.depends,d)}:P={path:["value"],parent:null,value:He(f,d)};var _=Fe(P,v);return _}return m}var Qe=function(v){Me()(f,v);var m=je()(f);function f(a){var o;return K()(this,f),o=m.call(this),q()(Ee()(o),"_createComputed",void 0),o.store=a,o}return G()(f,[{key:"runGroup",value:function(){var a=pe()(le()().mark(function d(y,P){return le()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.abrupt("return",Promise.all(M()(this.values()).filter(function(T){return T.group==y}).map(function(T){return T.async,T.run(P)})));case 1:case"end":return $.stop()}},d,this)}));function o(d,y){return a.apply(this,arguments)}return o}()},{key:"run",value:function(){var a=pe()(le()().mark(function d(){var y,P,_,$=arguments;return le()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:if($.length!=0){B.next=2;break}return B.abrupt("return",Promise.all(M()(this.values()).map(function(Z){return Z.run()})));case 2:return P="",typeof $[0]=="function"?y=$[0]:typeof $[0]=="string"&&(P=$[0]),_=$[1],B.abrupt("return",Promise.all(M()(this.values()).filter(y).map(function(Z){return Z.run(_)})));case 6:case"end":return B.stop()}},d,this)}));function o(){return a.apply(this,arguments)}return o}()},{key:"enableGroup",value:function(){var a=pe()(le()().mark(function d(y){var P,_,$;return le()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:P=_e()(this.values());try{for(P.s();!(_=P.n()).done;)$=_.value,$.options.enable=y}catch(Z){P.e(Z)}finally{P.f()}case 2:case"end":return B.stop()}},d,this)}));function o(d){return a.apply(this,arguments)}return o}()},{key:"delete",value:function(o){return st()(it()(f.prototype),"delete",this).call(this,o)}},{key:"create",get:function(){return this._createComputed||(this._createComputed=Oe(this.store)),this._createComputed}}]),f}(Ze()(Map));function ft(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return typeof v=="function"?v:typeof v=="string"?function(m){return l(m)==l(v.split(k))}:Array.isArray(v)?v.length===0?function(){return!0}:function(m){return v.map(function(f){return typeof f=="string"?f.split(k):Array.isArray(f)?f:[String(f)]}).some(function(f){return l(m)==l(f)})}:function(){return!1}}function xt(v,m,f){var a=Object.assign({depends:ft(m),enable:!0},f),o=function(){return{listener:v,options:a}};return o.__COMPUTED__="watch",o}function $e(v){return function(m,f){if(f=n(f),f.length===0)return v.reactiveable.createWatch(m);if(f.some(function(a){return typeof a=="string"&&a.startsWith(".")}))throw new Error("watch depends can not start with '.'");return v.reactiveable.createWatch(m,f)}}var ht=e(92379);function ke(v,m){m.options.log("install watch for <".concat(v.path.length==0?"Dynamic":v.path.join(k),">"));var f=v.value();f.options.path=v.path;var a=m.watchObjects.add(f),o=f.options.context;return o?o.setState(function(d){d.value=f.options.initial}):(v.replaceValue(f.options.initial),m.setState(function(d){C(d,v.path,f.options.initial)})),a}function Ye(v){return function(m,f,a){(0,ht.useEffect)(function(){var o={path:["value"],parent:void 0,value:function(){var P={listener:m,options:Object.assign({depends:ft(f),context:(0,se.sharex)({value:0}),selfPath:["value"],initial:0,enable:!0,scope:W.Depends},a)};return P}},d=ke(o,v);return function(){v.watchObjects.delete(d.id)}},[f])}}function Te(v,m){if(v===m)return!0;if(v==null||m==null||c()(v)!==c()(m))return!1;if(c()(v)==="object"){if(Array.isArray(v)&&Array.isArray(m))return v.length!==m.length?!1:v.every(function(a,o){return Te(a,m[o])});if(!Array.isArray(v)&&!Array.isArray(m)){var f=Object.keys(v);return f.length!==Object.keys(m).length?!1:f.every(function(a){return Te(v[a],m[a])})}else return!1}return!1}var Xe=function(){function v(m,f){if(K()(this,v),q()(this,"_cache",void 0),q()(this,"_listener",void 0),q()(this,"_options",void 0),this.store=m,this._options=Object.assign({enable:!0,selfPath:[],group:void 0,context:void 0,initial:void 0},f.options),typeof this._options.depends!="function")throw new Error("watch options.depends must be a function");if(!this._options.id){var a=this._options.path;this._options.id=this._options.id||this._options.context?Se():l(a)}this._listener=f.listener}return G()(v,[{key:"id",get:function(){return this._options.id}},{key:"options",get:function(){return this._options}},{key:"path",get:function(){return this._options.path}},{key:"depends",get:function(){return this._options.depends}},{key:"enable",get:function(){return this._options.enable},set:function(f){this._options.enable=f}},{key:"cache",get:function(){return this._cache||(this._cache={}),this._cache}},{key:"value",get:function(){var f=this._options.context?this._options.context:this.store.state;return u((0,se.getSnap)(f),this.path)}},{key:"getName",value:function(){return this._options.context?this.id:this.path.join(k)}},{key:"isDepends",value:function(f,a){return Te(f,this.path)?!1:this.depends(f,a)}},{key:"reset",value:function(){this._cache={}}},{key:"run",value:function(f,a){var o=this;if(!this.enable){this.store.options.log("WatchObject <".concat(this.getName(),"> is disabled"));return}try{var d=this._listener.call(this,f,a,this);d!==void 0&&(this._options.context?this._options.context.setState(function(y){y.value=d}):this.store.setState(function(y){C(y,o.path,d)}))}catch(y){}}}]),v}(),Be=function(v){Me()(f,v);var m=je()(f);function f(a){var o;return K()(this,f),o=m.call(this),q()(Ee()(o),"_off",void 0),q()(Ee()(o),"_enable",!0),o.store=a,a.on("created",o.onStateCreated.bind(Ee()(o))),o}return G()(f,[{key:"onStateCreated",value:function(){this.createWacher()}},{key:"enable",get:function(){return this._enable},set:function(o){this._enable=o}},{key:"createWacher",value:function(){var o=this,d=this.store.reactiveable.createWatch(function(y){o._enable&&y.forEach(function(P){var _=u(o.store.state,P),$=_e()(o.values()),T;try{for($.s();!(T=$.n()).done;){var B=T.value;B.isDepends(P,_)&&B.run(P,_)}}catch(Z){$.e(Z)}finally{$.f()}})},[]);this._off=d}},{key:"reset",value:function(){this._off&&this._off(),this.createWacher()}},{key:"add",value:function(o){var d=new Xe(this.store,o);return this.set(d.id,d),d}},{key:"enableGroup",value:function(o){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,y=_e()(this.values()),P;try{for(y.s();!(P=y.n()).done;){var _=P.value;_.options.group==o&&(_.options.enable=d)}}catch($){y.e($)}finally{y.f()}}}]),f}(Ze()(Map));function yt(v){return typeof v=="string"?v.length>0:Array.isArray(v)?v.every(function(m){return typeof m=="string"&&m.length>0}):!0}function bt(v,m){var f=v.path,a=v.value;if(yt(f)){var o=l(f);typeof a=="function"&&!m._replacedKeys[o]&&!U(a)&&(m._replacedKeys[o]=!0,a.__COMPUTED__=="watch"?ke(v,m):Fe(v,m))}}function gt(v){return function(m,f){var a=v.reactiveable.useState.bind(v.reactiveable);if(m==null)return a();var o=a(),d=me()(o,2),y=d[0],P=d[1],_=m(y),$=P;return typeof f=="function"&&($=function(B){P(function(Z){f.call(Z,Z,B)})}),[_,$]}}function Et(v){return function(m){v.reactiveable.setState(function(f){m(f)})}}var Nt=e(24222);function qe(v){var m=(0,Nt.Z)();v._emitter=m,v.on=m.on,v.off=m.off,v.emit=m.emit,v.once=function(f,a){var o=function d(y){try{a(y)}finally{m.off(f,d)}};m.on(f,o)}}function et(v,m){var f=Object.assign({id:Se(),debug:!0,immediate:!1,enableComputed:!0,scope:function(){return W.Current}},m);f.log=function(){f.debug&&A.apply(void 0,arguments)};var a={options:f,_replacedKeys:{}};return qe(a),a.computedObjects=new Qe(a),a.watchObjects=new Be(a),a.reactiveable=new Je(v,{id:f.id,onRead:function(d){bt(d,a)}}),a.state=a.reactiveable.state,a.emit("created"),a.useState=gt(a),a.setState=Et(a),a.enableComputed=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return a.options.enableComputed=o},a.sync=a.reactiveable.sync.bind(a.reactiveable),a.watch=$e(a),a.useWatch=Ye(a),a.watch=$e(a),a.createComputed=Oe(a),f.immediate&&p(a.state),a}function Ct(v,m){var f=(0,ht.useState)(function(){return et(v,Object.assign({immediate:!0},m))}),a=me()(f,1),o=a[0];return o}},20043:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(24908);const l=[{value:"This is a API example.",paraId:0}]},78282:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(78719);const l=[]},41987:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(58839);const l=[]},58425:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(43230);const l=[]},55481:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(64010);const l=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0}]},26708:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(90938);const l=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0}]},91561:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(97278);const l=[]},39508:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(83975);const l=[]},76567:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(82376);const l=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0}]},1607:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(59147);const l=[{value:"\u8868\u5355\u52A8\u4F5C\u7528\u6765\u5B9A\u4E49\u8868\u5355\u7684\u63D0\u4EA4\u3001\u91CD\u7F6E,\u6216\u8005\u4EFB\u610F\u884C\u4E3A\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8868\u5355\u52A8\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u901A\u4FD7\u5730\u8BF4\uFF0C\u8868\u5355\u52A8\u4F5C\u5C31\u662F\u58F0\u660E\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u5BF9\u8868\u5355\u6570\u636E\u8FDB\u884C\u5904\u7406\u3002",paraId:1,tocIndex:0},{value:"\u5728\u8868\u5355\u7684",paraId:2,tocIndex:1},{value:"actions",paraId:2,tocIndex:1},{value:"\u4E2D\u5B9A\u4E49\u8868\u5355\u52A8\u4F5C\uFF0C",paraId:2,tocIndex:1},{value:"actions",paraId:2,tocIndex:1},{value:"\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0Caction\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A\u3002",paraId:2,tocIndex:1},{value:`export interface FormActionDefine<Scope extends Dict=Dict,Result =any>{
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

`,paraId:4,tocIndex:1},{value:"\u8BF4\u660E",paraId:5,tocIndex:1},{value:"\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u8868\u5355",paraId:6,tocIndex:1},{value:"action",paraId:6,tocIndex:1},{value:"\u58F0\u660E\u5728",paraId:6,tocIndex:1},{value:"actions",paraId:6,tocIndex:1},{value:"\u3002",paraId:6,tocIndex:1},{value:"\u6BCF\u4E2A",paraId:6,tocIndex:1},{value:"Action",paraId:6,tocIndex:1},{value:"\u5747\u53EF\u4EE5\u6307\u5B9A",paraId:6,tocIndex:1},{value:"scope",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"title",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"help",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"tips",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"visible",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"enable",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"count",paraId:6,tocIndex:1},{value:"\u3001",paraId:6,tocIndex:1},{value:"execute",paraId:6,tocIndex:1},{value:"\u7B49\u5C5E\u6027\uFF0C\u9664\u4E86",paraId:6,tocIndex:1},{value:"execute",paraId:6,tocIndex:1},{value:"\u5916\uFF0C\u5176\u4ED6\u5747\u662F\u53EF\u9009\u7684\u3002",paraId:6,tocIndex:1},{value:"\u6BCF\u4E2A",paraId:7,tocIndex:2},{value:"Action",paraId:7,tocIndex:2},{value:"\u5747\u53EF\u4EE5\u6307\u5B9A",paraId:7,tocIndex:2},{value:"execute",paraId:7,tocIndex:2},{value:"\u5C5E\u6027\uFF0C\u7528\u6765\u6267\u884C\u52A8\u4F5C\uFF0C",paraId:7,tocIndex:2},{value:"execute",paraId:7,tocIndex:2},{value:"\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u5BF9\u8868\u5355\u6570\u636E\u8FDB\u884C\u5904\u7406\u3002",paraId:7,tocIndex:2},{value:"execute",paraId:8,tocIndex:2},{value:"\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E00\u822C\u662F\u5F02\u6B65\u51FD\u6570\uFF0C\u6BD5\u7ADF\u8981\u5E72\u70B9\u4EC0\u4E48\u4E8B\u561B\uFF0C\u4E5F\u53EF\u4EE5\u662F\u540C\u6B65\u51FD\u6570\uFF0C\u53EF\u4EE5\u6709\u4EE5\u4E0B\u51E0\u79CD\u58F0\u660E\u65B9\u5F0F\uFF1A",paraId:8,tocIndex:2},{value:"\u76F4\u63A5\u4F7F\u7528\u5F02\u6B65\u51FD\u6570\u58F0\u660E",paraId:9,tocIndex:3},{value:"\u9996\u9009\u662F\u4F7F\u7528",paraId:10,tocIndex:4},{value:"action",paraId:10,tocIndex:4},{value:"\u65B9\u6CD5\u8FDB\u884C\u58F0\u660E\uFF0C",paraId:10,tocIndex:4},{value:"action",paraId:10,tocIndex:4},{value:"\u65B9\u6CD5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u58F0\u660E\u4E00\u4E2A\u52A8\u4F5C\u3002",paraId:10,tocIndex:4},{value:"",paraId:11,tocIndex:4},{value:"scope",paraId:12,tocIndex:5},{value:"\uFF1A\u52A8\u4F5C\u63D0\u4EA4\u8303\u56F4\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u52A8\u6001\u8BA1\u7B97\u63D0\u4EA4\u8303\u56F4\u3002",paraId:12,tocIndex:5}]},39778:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(76726);const l=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0},{value:"\u4E00\u822C\u5728\u72EC\u7ACB\u7684\u6587\u4EF6\u4E2D\u4F7F\u7528",paraId:1,tocIndex:1},{value:"createForm",paraId:1,tocIndex:1},{value:"\u6765\u521B\u5EFA\u4E00\u4E2A\u8868\u5355\u5BF9\u8C61\uFF08\u4E0D\u662F\u5728\u7EC4\u4EF6\u5185\uFF09\u3002",paraId:1,tocIndex:1},{value:`import { createForm }  from "@speedform/core"
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
`,paraId:16,tocIndex:3},{value:"createForm",paraId:17,tocIndex:4},{value:"\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u8868\u5355\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5305\u62EC\u4E86\u4E00\u4E9B\u7528\u6765\u64CD\u4F5C\u8868\u5355\u7684",paraId:17,tocIndex:4},{value:"API",paraId:17,tocIndex:4},{value:"\u3002",paraId:17,tocIndex:4},{value:"\u540D\u79F0",paraId:18,tocIndex:4},{value:"\u7C7B\u578B",paraId:18,tocIndex:4},{value:"\u8BF4\u660E",paraId:18,tocIndex:4},{value:"Form",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Field",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u5B57\u6BB5\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Group",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u5B57\u6BB5\u7EC4\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Action",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u52A8\u4F5C\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Submit",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u63D0\u4EA4\u52A8\u4F5C\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"Reset",paraId:18,tocIndex:4},{value:"\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"\u8868\u5355\u91CD\u7F6E\u52A8\u4F5C\u7EC4\u4EF6",paraId:18,tocIndex:4},{value:"getAction",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u7528\u6765\u83B7\u53D6\u5728\u8868\u5355\u5B57\u6BB5\u58F0\u660E\u7684",paraId:18,tocIndex:4},{value:"Action",paraId:18,tocIndex:4},{value:"fields",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355",paraId:18,tocIndex:4},{value:"fields",paraId:18,tocIndex:4},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"actions",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355",paraId:18,tocIndex:4},{value:"actions",paraId:18,tocIndex:4},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"state",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355\u6570\u636E\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"computedObjects",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355\u4E2D\u7684\u6240\u6709\u8BA1\u7B97\u5C5E\u6027\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"watchObjects",paraId:18,tocIndex:4},{value:"Object",paraId:18,tocIndex:4},{value:"\u8FD4\u56DE\u8868\u5355\u4E2D\u7684\u6240\u6709",paraId:18,tocIndex:4},{value:"Watch",paraId:18,tocIndex:4},{value:"\u5BF9\u8C61",paraId:18,tocIndex:4},{value:"freeze",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u51BB\u7ED3\u8868\u5355\u7981\u6B62\u7F16\u8F91",paraId:18,tocIndex:4},{value:"load",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u52A0\u8F7DJSON\u6570\u636E\u5230\u8868\u5355\u5B9E\u4F8B",paraId:18,tocIndex:4},{value:"getValues",paraId:18,tocIndex:4},{value:"\u65B9\u6CD5",paraId:18,tocIndex:4},{value:"\u83B7\u53D6\u8868\u5355\u6570\u636E(\u53EA\u5305\u62EC\u8868\u5355\u5B57\u6BB5",paraId:18,tocIndex:4},{value:"value",paraId:18,tocIndex:4},{value:")",paraId:18,tocIndex:4},{value:"validate",paraId:18,tocIndex:4},{value:"'\u65B9\u6CD5'",paraId:18,tocIndex:4},{value:"\u6821\u9A8C\u6574\u4E2A\u8868\u5355",paraId:18,tocIndex:4},{value:"useState",paraId:18,tocIndex:4},{value:"hook",paraId:18,tocIndex:4},{value:"\u5728\u7EC4\u4EF6\u4E2D\u8BBF\u95EE",paraId:18,tocIndex:4},{value:"state",paraId:18,tocIndex:4},{value:"createForm",paraId:19,tocIndex:5},{value:"\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A\u6CDB\u578B\u53C2\u6570\uFF0C\u7528\u4E8E\u5B9A\u4E49\u8868\u5355\u7684",paraId:19,tocIndex:5},{value:"schema",paraId:19,tocIndex:5},{value:"\u5BF9\u8C61\u7C7B\u578B\u3002\u4F46\u662F\u8BE5\u6CDB\u578B\u53C2\u6570\u4E00\u822C\u53EF\u4EE5\u91C7\u7528",paraId:19,tocIndex:5},{value:"typeof <schema>",paraId:19,tocIndex:5},{value:"\u6765\u81EA\u52A8\u63A8\u65AD\uFF0C\u8FD9\u6837\u5C31\u4E0D\u9700\u8981\u624B\u52A8\u5B9A\u4E49\u7C7B\u578B\u4E86\u3002",paraId:19,tocIndex:5}]},42066:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(88209);const l=[]},56148:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(14741);const l=[]},62925:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(97630);const l=[]},23331:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(72e3);const l=[]},48099:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(27548);const l=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u975E\u5E38\u5F3A\u5927\u7684",paraId:0,tocIndex:0},{value:"React",paraId:0,tocIndex:0},{value:"\u8868\u5355\u7EC4\u4EF6\uFF0C\u5B83\u7684\u76EE\u6807\u662F\u8BA9",paraId:0,tocIndex:0},{value:"React",paraId:0,tocIndex:0},{value:"\u8868\u5355\u5F00\u53D1\u53D8\u5F97\u66F4\u52A0\u7B80\u5355\u3001\u5FEB\u901F\u3001\u7075\u6D3B\u3002",paraId:0,tocIndex:0}]},28519:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(31430);const l=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u6838\u5FC3\u7531\u4E24\u4E2A\u5305\u7EC4\u6210\uFF1A",paraId:0,tocIndex:0},{value:"@speedform/core",paraId:0,tocIndex:0},{value:"\u548C",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u662F\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u7684\u54CD\u5E94\u5F0F\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u7528\u6765\u7BA1\u7406\u548C\u9A71\u52A8",paraId:1,tocIndex:0},{value:"Form",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u662F",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u529F\u80FD\u5F3A\u5927\u7684\u57FA\u7840\u3002",paraId:1,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u4F5C\u4E3A\u66FF\u4EE3",paraId:1,tocIndex:0},{value:"redux",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"mobx",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"zstuand",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"Jotai",paraId:1,tocIndex:0},{value:"\u7684\u72B6\u6001\u7BA1\u7406\u5E93\u72EC\u7ACB\u4F7F\u7528\uFF0C\u5176\u672C\u8D28\u4E0A\u662F\u5BF9",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u72B6\u6001\u7BA1\u7406\u5E93\u7684\u5C01\u88C5\u3002",paraId:1,tocIndex:0},{value:"@speedform/core",paraId:1,tocIndex:0},{value:"\u662F",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u6838\u5FC3\u5E93\uFF0C\u5B83\u63D0\u4F9B\u4E86",paraId:1,tocIndex:0},{value:"Form",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u548C",paraId:1,tocIndex:0},{value:"Field",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6,\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A",paraId:1,tocIndex:0},{value:"headless",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u5E93,\u53EA\u8D1F\u8D23\u8868\u5355\u7684\u903B\u8F91\u5904\u7406\uFF0C\u4E0D\u8D1F\u8D23\u5177\u4F53\u7684\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"@speedform/antd",paraId:1,tocIndex:0},{value:"\u662F\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u6E32\u67D3\u7EC4\u4EF6\u5E93\uFF0C\u5B83\u63D0\u4F9B\u4E86",paraId:1,tocIndex:0},{value:"Form",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u548C",paraId:1,tocIndex:0},{value:"Field",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u7684",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7248\u672C\u3002",paraId:1,tocIndex:0},{value:`pnpm install @speedform/core @speedform/reactive
yarn add @speedform/core @speedform/reactive
npm install @speedform/core @speedform/reactive
`,paraId:2,tocIndex:0}]},61022:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(48566);const l=[]},7019:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(25248);const l=[{value:"\u672C\u8282\u5C06\u901A\u8FC7\u5F00\u53D1\u4E00\u4E2A\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\uFF0C\u4F53\u9A8C",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u7684\u5F3A\u5927\u4E0E\u7075\u6D3B\u3002",paraId:0,tocIndex:0},{value:"\u8BE5\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A",paraId:1,tocIndex:0},{value:"\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\u7ED3\u6784\u5982\u4E0B\uFF1A",paraId:2,tocIndex:0},{value:`{
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
`,paraId:73,tocIndex:18},{value:"\u8BF4\u660E",paraId:74,tocIndex:18},{value:":",paraId:74,tocIndex:18},{value:"Network.Submit",paraId:75,tocIndex:18},{value:"\u7EC4\u4EF6\u7684",paraId:75,tocIndex:18},{value:"children",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u6E32\u67D3\u63D0\u4EA4\u6309\u94AE\u7684\u5177\u4F53\u5185\u5BB9\uFF0C\u4F20\u5165",paraId:75,tocIndex:18},{value:"props",paraId:75,tocIndex:18},{value:"\u662F\u4E00\u4E2A\u63D0\u4EA4\u6309\u94AE\u7684\u63A7\u5236\u5C5E\u6027\uFF0C\u5305\u62EC",paraId:75,tocIndex:18},{value:"title",paraId:75,tocIndex:18},{value:"\u3001",paraId:75,tocIndex:18},{value:"dirty",paraId:75,tocIndex:18},{value:"\u3001",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u7B49\u3002",paraId:75,tocIndex:18},{value:"title",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u5B9A\u63D0\u4EA4\u6309\u94AE\u7684\u6807\u9898\u3002",paraId:75,tocIndex:18},{value:"dirty",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u793A\u8868\u5355\u662F\u5426\u5DF2\u7ECF\u88AB\u7F16\u8F91\u8FC7\u3002",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u793A\u8868\u5355\u662F\u5426\u6709\u6548\uFF0C\u5176\u503C\u662F\u7531\u6240\u6709\u5B57\u6BB5\u7684",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u8BA1\u7B97\u5C5E\u6027\u7684\u7ED3\u679C\u51B3\u5B9A\u7684\u3002",paraId:75,tocIndex:18},{value:"",paraId:76,tocIndex:19},{value:"",paraId:77,tocIndex:20},{value:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u7F51\u7EDC\u914D\u7F6E\u8868\u5355",paraId:78,tocIndex:21}]},3050:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(48101);const l=[{value:"\u672C\u8282\u5C06\u901A\u8FC7\u5F00\u53D1\u4E00\u4E2A\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\uFF0C\u4F53\u9A8C",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u7684\u5F3A\u5927\u4E0E\u7075\u6D3B\u3002",paraId:0,tocIndex:0},{value:"\u8BE5\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A",paraId:1,tocIndex:0},{value:"\u7F51\u7EDC\u914D\u7F6E\u8868\u5355\u7ED3\u6784\u5982\u4E0B\uFF1A",paraId:2,tocIndex:0},{value:`{
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
`,paraId:73,tocIndex:18},{value:"\u8BF4\u660E",paraId:74,tocIndex:18},{value:":",paraId:74,tocIndex:18},{value:"Network.Submit",paraId:75,tocIndex:18},{value:"\u7EC4\u4EF6\u7684",paraId:75,tocIndex:18},{value:"children",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u6E32\u67D3\u63D0\u4EA4\u6309\u94AE\u7684\u5177\u4F53\u5185\u5BB9\uFF0C\u4F20\u5165",paraId:75,tocIndex:18},{value:"props",paraId:75,tocIndex:18},{value:"\u662F\u4E00\u4E2A\u63D0\u4EA4\u6309\u94AE\u7684\u63A7\u5236\u5C5E\u6027\uFF0C\u5305\u62EC",paraId:75,tocIndex:18},{value:"title",paraId:75,tocIndex:18},{value:"\u3001",paraId:75,tocIndex:18},{value:"dirty",paraId:75,tocIndex:18},{value:"\u3001",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u7B49\u3002",paraId:75,tocIndex:18},{value:"title",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u5B9A\u63D0\u4EA4\u6309\u94AE\u7684\u6807\u9898\u3002",paraId:75,tocIndex:18},{value:"dirty",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u793A\u8868\u5355\u662F\u5426\u5DF2\u7ECF\u88AB\u7F16\u8F91\u8FC7\u3002",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u5C5E\u6027\u7528\u6765\u6307\u793A\u8868\u5355\u662F\u5426\u6709\u6548\uFF0C\u5176\u503C\u662F\u7531\u6240\u6709\u5B57\u6BB5\u7684",paraId:75,tocIndex:18},{value:"validate",paraId:75,tocIndex:18},{value:"\u8BA1\u7B97\u5C5E\u6027\u7684\u7ED3\u679C\u51B3\u5B9A\u7684\u3002",paraId:75,tocIndex:18},{value:"",paraId:76,tocIndex:19},{value:"",paraId:77,tocIndex:20},{value:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u7F51\u7EDC\u914D\u7F6E\u8868\u5355",paraId:78,tocIndex:21}]},62095:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(59856);const l=[{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u5F53\u6240\u4F9D\u8D56\u7684\u72B6\u6001\u503C\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u3002",paraId:0,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u5177\u6709\u4EE5\u4E0B\u7279\u6027\uFF1A",paraId:1,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\u6216\u8005\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A",paraId:2,tocIndex:0},{value:"Promise",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\u3002",paraId:2,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u7684\u5FC5\u987B\u663E\u5F0F\u6307\u5B9A\u4F9D\u8D56,\u4E0D\u80FD\u50CF\u540C\u6B65\u8BA1\u7B97\u4E00\u6837\u81EA\u52A8\u6536\u96C6\u4F9D\u8D56\u3002",paraId:2,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u4F1A\u88AB\u66FF\u6362\u4E3A",paraId:2,tocIndex:0},{value:"AsyncComputedObject",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\uFF0C\u901A\u8FC7\u8BE5\u5BF9\u8C61\u53EF\u4EE5\u8BFB\u53D6\u5230\u5F02\u6B65\u8BA1\u7B97\u7684\u8FDB\u5EA6\u4EE5\u53CA\u7ED3\u679C\u7B49\u3002",paraId:2,tocIndex:0},{value:"\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u4F7F\u7528",paraId:3,tocIndex:1},{value:"computed",paraId:3,tocIndex:1},{value:"\u8FDB\u884C\u58F0\u660E\uFF0C\u65B9\u5F0F\u5982\u4E0B\uFF1A",paraId:3,tocIndex:1},{value:"\u4EE5\u4E0A",paraId:4},{value:"fullName",paraId:4},{value:"\u662F\u4E00\u4E2A\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u4F9D\u8D56\u4E8E",paraId:4},{value:"firstName",paraId:4},{value:"\u548C",paraId:4},{value:"lastName",paraId:4},{value:"\u3002",paraId:4},{value:"computed",paraId:4},{value:"\u51FD\u6570\u7528\u6765\u5C01\u88C5\u5F02\u6B65\u8BA1\u7B97\u51FD\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\uFF0C\u7528\u6765\u6307\u5B9A\u4F9D\u8D56\u7684\u72B6\u6001\u8DEF\u5F84\u3002",paraId:4},{value:"\u4F9D\u8D56\u53EF\u4EE5\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u6216\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4F7F\u7528",paraId:4},{value:".",paraId:4},{value:"\u4F5C\u4E3A\u8DEF\u5F84\u5206\u5272\u7B26\uFF0C",paraId:4},{value:"./",paraId:4},{value:"\u6307\u7684\u662F\u5F53\u524D\u5BF9\u8C61\uFF0C",paraId:4},{value:"../",paraId:4},{value:"\u6307\u7684\u662F\u7236\u5BF9\u8C61\u3002",paraId:4},{value:"\u5F53\u6211\u4EEC\u66F4\u65B0",paraId:4},{value:"firstName",paraId:4},{value:"\u6216",paraId:4},{value:"lastName",paraId:4},{value:"\u65F6\uFF0C",paraId:4},{value:"fullName",paraId:4},{value:"\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u3002",paraId:4},{value:"\u8BA1\u7B97\u5C5E\u6027\u7684\u7ED3\u679C\u4FDD\u5B58\u5728",paraId:4},{value:"state.user.fullName.result",paraId:4},{value:"\u4E2D\u3002",paraId:4},{value:"\u5F53\u8BA1\u7B97\u5C5E\u6027\u6B63\u5728\u8BA1\u7B97\u65F6\uFF0C",paraId:4},{value:"state.user.fullName.loading",paraId:4},{value:"\u4E3A",paraId:4},{value:"true",paraId:4},{value:"\u3002\u8BA1\u7B97\u5B8C\u6210\u540E\uFF0C",paraId:4},{value:"state.user.fullName.loading",paraId:4},{value:"\u4E3A",paraId:4},{value:"false",paraId:4},{value:"\u3002",paraId:4},{value:"\u4E0B\u9762\u662F\u4E00\u4E2A\u66F4\u52A0\u5B8C\u6574\u7684\u4F8B\u5B50\uFF1A",paraId:5},{value:"\u8BF4\u660E",paraId:6},{value:"\u4F7F\u7528",paraId:7},{value:"computed",paraId:7},{value:"\u51FD\u6570\u58F0\u660E\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\uFF0C",paraId:7},{value:"computed",paraId:7},{value:`\u53C2\u6570\uFF1A
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
`,paraId:78},{value:"\u8FD9\u5BFC\u81F4",paraId:79},{value:"Speedform",paraId:79},{value:"\u5C06\u5176\u8BC6\u522B\u4E3A\u5F02\u6B65\u51FD\u6570\uFF0C\u4E5F\u5C31\u4E0D\u80FD\u76F8\u5E94\u5730\u521B\u5EFA\u5F02\u6B65",paraId:79},{value:"AsyncComputedObject",paraId:79},{value:"\uFF0C\u800C\u53EA\u662F\u5C06\u5176\u5F53\u4F5C\u4E00\u4E2A\u666E\u901A\u7684\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\u3002",paraId:79},{value:"\u89E3\u51B3\u65B9\u6CD5\u662F\u663E\u5F0F\u6307\u5B9A",paraId:80},{value:"computed(async ()=>{...},[...],{async:true})",paraId:80},{value:"\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u6B63\u786E\u8BC6\u522B\u4E3A\u5F02\u6B65\u51FD\u6570\u3002",paraId:80}]},28460:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(75394);const l=[{value:"\u7EC6\u5FC3\u7684\u670B\u53CB\u53EF\u80FD\u53D1\u73B0\uFF0C\u5728\u4E0A\u9762\u7684",paraId:0,tocIndex:0},{value:"createStore",paraId:0,tocIndex:0},{value:"\u4E2D\u6211\u4EEC\u6CA1\u6709\u58F0\u660E\u4EFB\u4F55\u7684\u8BA1\u7B97\u5C5E\u6027\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u662F\u4E0D\u652F\u6301\u8BA1\u7B97\u5C5E\u6027\uFF0C\u800C\u662F",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u4E86",paraId:0,tocIndex:0},{value:"\u72EC\u7279\u7684\u8BA1\u7B97\u5C5E\u6027\u7684\u58F0\u660E\u65B9\u5F0F",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u7684\u8BA1\u7B97\u5C5E\u6027\u7684\u58F0\u660E\u65B9\u5F0F\u662F",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u4E4B\u6240\u4EE5\u80FD\u63D0\u4F9B\u65E0\u4EE5\u4F26\u6BD4\u7528\u6237\u5F00\u53D1\u4F53\u9A8C\u7684\u5173\u952E\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:1},{value:"\u5B9E\u73B0\u4E86\u6700\u72EC\u7279\u7684\u79FB\u82B1\u63A5\u6728\u5F0F\u7684\u8BA1\u7B97\u5C5E\u6027\u5B9E\u73B0\u65B9\u5F0F",paraId:1},{value:"\u57FA\u672C\u8FC7\u7A0B\u5982\u4E0B\uFF1A",paraId:2},{value:"\u9996\u5148\u76F4\u63A5\u5728",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u58F0\u660E\u8BA1\u7B97\u5C5E\u6027\u51FD\u6570\uFF0C\u5982",paraId:3},{value:"fullName=(user)=>user.first+user.last",paraId:3},{value:"\u3002",paraId:3},{value:"\u8C03\u7528",paraId:3},{value:"createStore",paraId:3},{value:"\u521B\u5EFA",paraId:3},{value:"Store",paraId:3},{value:"\u65F6\uFF0C\u4F1A\u6839\u636E",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u7684\u51FD\u6570\u6765\u521B\u5EFA",paraId:3},{value:"mutate",paraId:3},{value:"\u6216",paraId:3},{value:"computed",paraId:3},{value:"(\u5728",paraId:3},{value:"helux",paraId:3},{value:"\u4E2D\u53EB\u6D3E\u751F\u5BF9\u8C61\uFF0C\u5728\u5176\u4ED6\u72B6\u6001\u5E93\u4E2D\u53EF\u80FD\u53EB\u8BA1\u7B97\u7B97\u5C5E\u6027)\u3002",paraId:3},{value:"\u5982\u6B64\uFF0C\u5F53",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1\u8BA1\u7B97\u5C5E\u6027\u7684\u91CD\u65B0\u8BA1\u7B97\uFF0C\u5C06\u8BA1\u7B97\u7ED3\u679C\u8D4B\u503C\u7ED9",paraId:3},{value:"State",paraId:3},{value:"\u4E2D\u7684\u5BF9\u5E94\u5C5E\u6027\u3002\u5728\u4E0A\u56FE\u4E2D\uFF0C\u5F53",paraId:3},{value:"firstName",paraId:3},{value:"\u548C",paraId:3},{value:"lastName",paraId:3},{value:"\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1",paraId:3},{value:"fullName(mutate)",paraId:3},{value:"\u7684\u91CD\u65B0\u8BA1\u7B97\uFF0C\u5C06\u8BA1\u7B97\u7ED3\u679C\u8D4B\u503C\u7ED9",paraId:3},{value:"user.fullName",paraId:3},{value:"\u5C5E\u6027\u3002\u8FD9\u6837\uFF0C\u5F53\u6211\u4EEC\u8BBF\u95EE",paraId:3},{value:"state.fullName",paraId:3},{value:"\u65F6,\u5C31\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E86\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u51FD\u6570\u4E86\u3002",paraId:3},{value:"\u4EE5\u4E0A\u5C31\u662F",paraId:4},{value:"@speedform/reactive",paraId:4},{value:"\u8BA1\u7B97\u5C5E\u6027\u79FB\u82B1\u63A5\u6728\u7684\u8FC7\u7A0B\u539F\u7406,\u5927\u5BB6\u53EF\u4EE5\u4ECE\u4E0B\u9762\u793A\u5217\u4E2D\u52A0\u6DF1\u7406\u89E3\u3002",paraId:4},{value:"\u5728\u4E0A\u4F8B\u4E2D\uFF1A",paraId:5},{value:"user.fullName",paraId:6},{value:"\u662F\u4E00\u4E2A\u51FD\u6570",paraId:6},{value:"store.state.fullName",paraId:6},{value:"\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32",paraId:6},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",paraId:6},{value:"createStore",paraId:6},{value:"\u76F4\u63A5\u5728\u8F93\u5165\u7684",paraId:6},{value:"user",paraId:6},{value:"\u4E0A\u8FDB\u884C\u521B\u5EFA\uFF0C\u6307\u5B9A",paraId:6},{value:"singleton:false",paraId:6},{value:"\u65F6\u4F1A\u6DF1\u62F7\u8D1D\u4E00\u4EFD",paraId:6},{value:"user",paraId:6},{value:"\uFF0C\u7136\u540E\u5728\u62F7\u8D1D\u7684",paraId:6},{value:"user",paraId:6},{value:"\u4E0A\u521B\u5EFA",paraId:6},{value:"mutate",paraId:6},{value:"\u6216",paraId:6},{value:"computed",paraId:6},{value:"\u3002",paraId:6},{value:"\u5728\u5B66\u4E60\u5982\u4F55\u58F0\u660E\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u6765\u4E86\u89E3\u4E00\u4E0B",paraId:7,tocIndex:2},{value:"\u8BA1\u7B97\u4F5C\u7528\u57DF - Scope",paraId:7,tocIndex:2},{value:"\u7684\u6982\u5FF5\u3002",paraId:7,tocIndex:2},{value:"\u8BA1\u7B97\u4F5C\u7528\u57DF",paraId:8},{value:"\u6307\u7684\u662F\u4F20\u9012\u7ED9\u8BA1\u7B97\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570",paraId:8},{value:"@speedform/reactive",paraId:9},{value:"\u5728\u521B\u5EFA",paraId:9},{value:"Store",paraId:9},{value:"\u65F6\uFF0C\u652F\u6301\u914D\u7F6E",paraId:9},{value:"scope",paraId:9},{value:"\u53C2\u6570\u6765\u6307\u5B9A\u8BA1\u7B97\u5C5E\u6027\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5982\u4E0B\uFF1A",paraId:9},{value:`export enum ComputedScopeRef{
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

`,paraId:10},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",paraId:11,tocIndex:3},{value:"scope==ComputedScopeRef.Current",paraId:11,tocIndex:3},{value:"\u65F6\uFF0C\u8BA1\u7B97\u51FD\u6570\u7684",paraId:11,tocIndex:3},{value:"this",paraId:11,tocIndex:3},{value:"\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u7684\u5BF9\u8C61\u3002",paraId:11,tocIndex:3},{value:"@speedform/reactive",paraId:12,tocIndex:5},{value:"\u4F1A\u5C06\u8BA1\u7B97\u5C5E\u51FD\u6570\u7684",paraId:12,tocIndex:5},{value:"scope",paraId:12,tocIndex:5},{value:"\u6307\u5411",paraId:12,tocIndex:5},{value:"ComputedScopeRef.Root",paraId:12,tocIndex:5},{value:"\uFF0C\u5373\u5F53\u524D\u7684",paraId:12,tocIndex:5},{value:"State",paraId:12,tocIndex:5},{value:"\u6839\u5BF9\u8C61\uFF0C\u5982\u4E0B\uFF1A",paraId:12,tocIndex:5},{value:"\u5F53",paraId:13,tocIndex:7},{value:"scope==ComputedScopeRef.Parent",paraId:13,tocIndex:7},{value:"\u65F6\uFF0C\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u7684\u5BF9\u8C61\u7684\u7236\u5BF9\u8C61\u3002",paraId:13,tocIndex:7},{value:"\u5F53",paraId:14,tocIndex:9},{value:"store.options.scope==<\u5B57\u7B26\u4E32>",paraId:14,tocIndex:9},{value:"\u65F6\uFF0C\u6B64\u65F6",paraId:14,tocIndex:9},{value:"<\u5B57\u7B26\u4E32>",paraId:14,tocIndex:9},{value:"\u5C31\u662F\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61\u7684\u952E\u540D\u79F0\u3002",paraId:14,tocIndex:9},{value:"computedThis='firstName'",paraId:15},{value:"\u4EE3\u8868",paraId:15},{value:"this",paraId:15},{value:"\u6307\u5411",paraId:15},{value:"user.firstName",paraId:15},{value:",\u4E5F\u5C31\u662F\u5F53\u524D\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61\u7684",paraId:15},{value:"firstName",paraId:15},{value:"\u6210\u5458\u3002",paraId:15},{value:"computedThis='address.city'",paraId:15},{value:"\u4EE3\u8868",paraId:15},{value:"this",paraId:15},{value:"\u6307\u5411",paraId:15},{value:"user.address.city",paraId:15},{value:"\u603B\u4E4B\uFF0C\u5F53",paraId:15},{value:"computedThis",paraId:15},{value:"\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u65F6\uFF0C\u4EE3\u8868\u662F",paraId:15},{value:"\u5F53\u524D\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61\u7684\u6307\u5B9A\u952E\u540D\u79F0",paraId:15},{value:"\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u952E\u540D\u79F0\u53EF\u4EE5\u662F\u591A\u7EA7\u7684\uFF0C\u5982",paraId:15},{value:"address.city",paraId:15},{value:"\u3002",paraId:15},{value:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",paraId:16},{value:"\u4E0E",paraId:16},{value:"scope==<\u5B57\u7B26\u4E32>",paraId:16},{value:"\u7684\u533A\u522B\u5728\u4E8E:",paraId:16},{value:"scope==<\u5B57\u7B26\u4E32\u6570\u7EC4>",paraId:17},{value:"\u4EE3\u8868\u662F\u4EE5",paraId:17},{value:"\u6839\u5BF9\u8C61",paraId:17},{value:"\u4E3A\u8D77\u70B9\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8DEF\u5F84\u53EF\u4EE5\u662F\u591A\u7EA7\u7684\uFF0C\u5982",paraId:17},{value:"['user','address','city']",paraId:17},{value:"\u3002",paraId:17},{value:"scope==<\u5B57\u7B26\u4E32>",paraId:17},{value:"\u4EE3\u8868\u662F\u4EE5",paraId:17},{value:"\u5F53\u524D\u8BA1\u7B97\u51FD\u6570\u6240\u5728\u5BF9\u8C61",paraId:17},{value:"\u4E3A\u8D77\u70B9\u7684\u8DEF\u5F84\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u952E\u540D\u79F0\u53EF\u4EE5\u662F\u591A\u7EA7\u7684\uFF0C\u5982",paraId:17},{value:"address.city",paraId:17},{value:"\u3002",paraId:17},{value:"\u5F53",paraId:18,tocIndex:13},{value:"scope==ComputedScopeRef.Depends",paraId:18,tocIndex:13},{value:"\u65F6\uFF0C\u8BA1\u7B97\u51FD\u6570\u7684",paraId:18,tocIndex:13},{value:"this",paraId:18,tocIndex:13},{value:"\u6307\u5411\u8BA1\u7B97\u51FD\u6570\u7684\u4F9D\u8D56\u9879\u7684\u503C\u3002",paraId:18,tocIndex:13},{value:"ComputedScopeRef.Depends",paraId:19,tocIndex:13},{value:"\u4EC5\u5728\u5F02\u6B65\u8BA1\u7B97\u65F6\u751F\u6548,\u800C\u5F02\u6B65\u8BA1\u7B97\u5FC5\u987B\u901A\u8FC7computed\u51FD\u6570\u6765\u6307\u5B9A\u4F9D\u8D56",paraId:19,tocIndex:13}]},34957:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(83818);const l=[{value:"\u5F53\u4F7F\u7528",paraId:0,tocIndex:0},{value:"computed",paraId:0,tocIndex:0},{value:"\u521B\u5EFA\u597D\u8BA1\u7B97\u5C5E\u6027\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7",paraId:0,tocIndex:0},{value:"store.computedObjects",paraId:0,tocIndex:0},{value:"\u6765\u7BA1\u7406\u6240\u6709",paraId:0,tocIndex:0},{value:"store",paraId:0,tocIndex:0},{value:"\u5185\u7684\u8BA1\u7B97\u5C5E\u6027\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7",paraId:1,tocIndex:0},{value:"store.computedObjects",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u8BBF\u95EE\u5230\u6240\u6709\u7684\u8BA1\u7B97\u5BF9\u8C61\uFF0C\u8BA1\u7B97\u5BF9\u8C61\u662F\u4E00\u4E2A",paraId:1,tocIndex:0},{value:"Map",paraId:1,tocIndex:0},{value:"\u5BF9\u8C61\uFF0C\u5176\u4E2D\u7684",paraId:1,tocIndex:0},{value:"key",paraId:1,tocIndex:0},{value:"\u662F\u8BA1\u7B97\u5BF9\u8C61\u7684",paraId:1,tocIndex:0},{value:"name",paraId:1,tocIndex:0},{value:"\uFF0C",paraId:1,tocIndex:0},{value:"value",paraId:1,tocIndex:0},{value:"\u662F\u8BA1\u7B97\u5BF9\u8C61\u7684",paraId:1,tocIndex:0},{value:"value",paraId:1,tocIndex:0},{value:"\u3002",paraId:1,tocIndex:0},{value:"\u8BF4\u660E",paraId:2},{value:":",paraId:2},{value:"\u4EE5\u4E0A\u521B\u5EFA\u4E86\u4E00",paraId:3},{value:"fullName",paraId:3},{value:"\u548C",paraId:3},{value:"fullName2",paraId:3},{value:"\u4E24\u4E2A\u8BA1\u7B97\u5C5E\u6027",paraId:3},{value:"store.computedObjects",paraId:3},{value:"\u662F\u4E00\u4E2A",paraId:3},{value:"Map",paraId:3},{value:"\u5BF9\u8C61,\u53EF\u4EE5\u901A\u8FC7",paraId:3},{value:'store.computedObjects.get("user/fullName")',paraId:3},{value:"\u6765\u83B7\u53D6",paraId:3},{value:"fullName",paraId:3},{value:"\u7684\u8BA1\u7B97\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u662F\u4E00\u4E2A",paraId:3},{value:"ComputedObject",paraId:3},{value:"\u5B9E\u4F8B\u3002",paraId:3},{value:"ComputedObject",paraId:3},{value:"\u5B9E\u4F8B\u6709\u4E00\u4E2A",paraId:3},{value:"run",paraId:3},{value:"\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\u3002",paraId:3},{value:"\u5BF9\u4E8E\u5F02\u6B65\u8BA1\u7B97\u5373\u53EF\u4EE5\u901A\u8FC7",paraId:3},{value:'store.computedObjects.get("user/fullName2").run()',paraId:3},{value:"\u6765\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7",paraId:3},{value:"store.state.user.fullName2.run()",paraId:3},{value:"\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\u3002\u800C\u540C\u6B65\u8BA1\u7B97\u53EA\u80FD\u901A\u8FC7",paraId:3},{value:'store.computedObjects.get("user/fullName").run()',paraId:3},{value:"\u6765\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u51FD\u6570\u3002",paraId:3},{value:"\u6BCF\u4E00\u4E2A\u8BA1\u7B97\u51FD\u6570\u5747\u4F1A\u521B\u5EFA\u4E00\u4E2A",paraId:4,tocIndex:1},{value:"ComputedObject",paraId:4,tocIndex:1},{value:"\u5B9E\u4F8B\uFF0C\u4FDD\u5B58\u5728",paraId:4,tocIndex:1},{value:"store.computedObjects",paraId:4,tocIndex:1},{value:",\u8BE5\u5BF9\u8C61\u6709\u4EE5\u4E0B\u5C5E\u6027\u548C\u65B9\u6CD5:",paraId:4,tocIndex:1},{value:`export interface ComputedObject<T=Dict> {
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
\u5F53\u4F7F\u7528`,paraId:7,tocIndex:2},{value:"computed",paraId:7,tocIndex:2},{value:"\u65B9\u6CD5\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u65F6\uFF0C\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A",paraId:7,tocIndex:2},{value:"group",paraId:7,tocIndex:2},{value:"\u53C2\u6570\uFF0C\u7528\u6765\u4E3A\u8BA1\u7B97\u5C5E\u6027\u5206\u7EC4\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u901A\u8FC7",paraId:7,tocIndex:2},{value:"runGroup",paraId:7,tocIndex:2},{value:"\u65B9\u6CD5\uFF0C\u7528\u6765\u624B\u52A8\u6267\u884C\u8BE5\u5206\u7EC4\u8BA1\u7B97\u51FD\u6570\u3002",paraId:7,tocIndex:2},{value:"\u4EE5\u4E0A\u6211\u4EEC\u5C06\u6240\u6709\u8BA1\u7B97\u51FD\u6570\u7684\u4F9D\u8D56\u5747\u8BBE\u4E3A",paraId:8},{value:"[]",paraId:8},{value:"\uFF0C\u4E5F\u5C31\u662F\u65E0\u4F9D\u8D56\uFF0C\u56E0\u6B64\u5F53",paraId:8},{value:"book.price",paraId:8},{value:",",paraId:8},{value:"book.count",paraId:8},{value:"\u7684\u503C\u53D8\u5316\u65F6\uFF0C",paraId:8},{value:"Total Group",paraId:8},{value:"\u548C",paraId:8},{value:"Average Group",paraId:8},{value:"\u7684\u8BA1\u7B97\u5C5E\u6027\u5E76\u4E0D\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\uFF0C\u6B64\u65F6\u5C31\u9700\u8981\u624B\u52A8\u6267\u884C\u8BA1\u7B97\u3002",paraId:8},{value:"Q",paraId:9},{value:": \u4E3A\u4EC0\u4E48\u6B64\u5904\u8981\u6307\u5B9A",paraId:9},{value:"async=true",paraId:9},{value:"?",paraId:9},{value:"A",paraId:9},{value:": \u56E0\u6B64\u672C\u7AD9\u4F7F\u7528",paraId:9},{value:"webpack/babel",paraId:9},{value:"\u8FDB\u884C\u8F6C\u7801\uFF0C\u5F02\u6B65\u51FD\u6570\u4F1A\u88AB\u8F6C\u7801\u4E3A\u540C\u6B65\u51FD\u6570\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u81EA\u52A8\u8BC6\u522B",paraId:9},{value:"async",paraId:9},{value:"\u51FD\u6570\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u6307\u5B9A",paraId:9},{value:"async=true",paraId:9},{value:"computed",paraId:10,tocIndex:3},{value:"\u63D0\u4F9B\u4E86\u4E00\u4E2A",paraId:10,tocIndex:3},{value:"enable",paraId:10,tocIndex:3},{value:"\u5C5E\u6027\u7528\u6765\u63A7\u5236\u662F\u5426\u8FDB\u884C\u8BA1\u7B97\u3002\u5F53",paraId:10,tocIndex:3},{value:"enable=false",paraId:10,tocIndex:3},{value:"\u65F6\uFF0C\u5F53\u4F9D\u8D56\u53D8\u5316\u65F6\u4E0D\u4F1A\u8FDB\u884C\u8BA1\u7B97\uFF0C\u76F4\u81F3",paraId:10,tocIndex:3},{value:"enable=true",paraId:10,tocIndex:3},{value:"\u3002",paraId:10,tocIndex:3},{value:"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u6CD5\u6765\u542F\u7528/\u7981\u7528\u8BA1\u7B97\u3002",paraId:11,tocIndex:3},{value:"\u53EF\u4EE5\u5728\u4F7F\u7528",paraId:12,tocIndex:3},{value:"computed",paraId:12,tocIndex:3},{value:"\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027\u65F6\uFF0C\u4F20\u5165",paraId:12,tocIndex:3},{value:"enable",paraId:12,tocIndex:3},{value:"\u6765\u6307\u5B9A\u8BA1\u7B97\u5C5E\u6027\u7684\u9ED8\u8BA4\u72B6\u6001\u3002",paraId:12,tocIndex:3},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:12,tocIndex:3},{value:"ComputedObjects.get(<\u8DEF\u5F84\u540D\u79F0>)",paraId:12,tocIndex:3},{value:"\u6765\u542F\u7528/\u7981\u7528\u8BA1\u7B97\u3002",paraId:12,tocIndex:3},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:12,tocIndex:3},{value:"ComputedObjects.enableGroup(<true/false>)",paraId:12,tocIndex:3},{value:"\u6765\u542F\u7528/\u7981\u7528\u67D0\u4E2A\u7EC4\u7684\u8BA1\u7B97\u3002",paraId:12,tocIndex:3},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528",paraId:13,tocIndex:4},{value:"computed(getter,deps,options)",paraId:13,tocIndex:4},{value:"\u65B9\u6CD5\u6765\u521B\u5EFA\u8BA1\u7B97\u5C5E\u6027,\u901A\u8FC7",paraId:13,tocIndex:4},{value:'store.computedObject.get("<\u8DEF\u5F84>")',paraId:13,tocIndex:4},{value:"\u83B7\u53D6\u5230",paraId:13,tocIndex:4},{value:"ComputedObject",paraId:13,tocIndex:4},{value:"\u5B9E\u4F8B\uFF0C\u7136\u540E\u901A\u8FC7",paraId:13,tocIndex:4},{value:"ComputedObject",paraId:13,tocIndex:4},{value:"\u5B9E\u4F8B\u6765\u8BFB\u53D6\u548C\u4FEE\u6539\u8BA1\u7B97\u5C5E\u6027\u7684\u53C2\u6570\u3002",paraId:13,tocIndex:4}]},72773:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(46489);const l=[{value:"\u65E0\u8BBA\u662F\u540C\u6B65\u6216\u5F02\u6B65\u8BA1\u7B97\u5C5E\u6027\u5747\u63A8\u8350\u4F7F\u7528",paraId:0},{value:"computed",paraId:0},{value:"\u51FD\u6570\u6765\u58F0\u660E\u3002",paraId:0},{value:"computed",paraId:1,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u4E8E\u58F0\u660E\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5176\u51FD\u6570\u7B7E\u540D\u58F0\u660E\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:`export function computed<R = any,ExtraAttrs extends Dict = {}>( getter: AsyncComputedGetter<R>,depends?:ComputedDepends,options?: ComputedOptions<R,ExtraAttrs>): ComputedDescriptor<R & ExtraAttrs>;
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

`,paraId:7,tocIndex:2}]},22426:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(63035);const l=[{value:"\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\u76F4\u63A5\u58F0\u660E\u5728\u72B6\u6001\u4E2D\uFF0C\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u666E\u901A\u7684\u51FD\u6570\uFF0C,\u5F53",paraId:0,tocIndex:0},{value:"State",paraId:0,tocIndex:0},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1\u8BA1\u7B97\u5C5E\u6027\u7684\u91CD\u65B0\u8BA1\u7B97\uFF0C\u5C06\u8BA1\u7B97\u7ED3\u679C\u8D4B\u503C\u7ED9",paraId:0,tocIndex:0},{value:"State",paraId:0,tocIndex:0},{value:"\u4E2D\u7684\u5BF9\u5E94\u5C5E\u6027\u3002",paraId:0,tocIndex:0},{value:"\u540C\u6B65\u8BA1\u7B97\u5C5E\u6027\u7684\u4F9D\u8D56\u6536\u96C6\u662F\u81EA\u52A8\u7684\uFF0C\u4E0D\u9700\u8981\u663E\u5F0F\u6307\u5B9A\u4F9D\u8D56\u53C2\u6570\uFF0C\u5F53",paraId:1,tocIndex:1},{value:"State",paraId:1,tocIndex:1},{value:"\u4E2D\u7684\u6240\u4F9D\u8D56\u7684\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E6\u53D1\u8BA1\u7B97\u5C5E\u6027\u7684\u91CD\u65B0\u8BA1\u7B97\u3002",paraId:1,tocIndex:1},{value:`const state = {
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

`,paraId:17,tocIndex:4}]},24143:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(5757);const l=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u5E95\u5C42\u6570\u636E\u7531",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u9A71\u52A8\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u8868\u5355\u5F00\u53D1\u4E2D\u66F4\u52A0\u7075\u6D3B\u3001\u5FEB\u901F\u5730\u5904\u7406\u6570\u636E\u3002",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u5E95\u5C42\u7684\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7531",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u9A71\u52A8\uFF0C",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u5177\u5907\u6D3E\u751F\u8BA1\u7B97\u3001\u4F9D\u8D56\u6536\u96C6\u3001\u4FE1\u53F7\u7684\u54CD\u5E94\u5F0F\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u5B83\u7684\u8BBE\u8BA1\u7406\u5FF5\u4E0E",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u8BBE\u8BA1\u7406\u5FF5\u9AD8\u5EA6\u5951\u5408\uFF0C\u4E3A",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u6570\u636E\u9A71\u52A8\u80FD\u529B\u3002",paraId:1,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u662F\u5728",paraId:1,tocIndex:0},{value:"helux",paraId:1,tocIndex:0},{value:"\u7684\u57FA\u7840\u4E0A\uFF0C\u5C01\u88C5\u4E86\u7528\u6765\u63D0\u4F9B\u66F4\u52A0\u6613\u7528\u53CB\u597D\u7684\u72B6\u6001\u5E93\u7BA1\u7406\u3002",paraId:1,tocIndex:0},{value:"\u4F5C\u4E3A",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u5E95\u5C42\u4F9D\u8D56\uFF0C\u4E86\u89E3\u548C\u638C\u63E1",paraId:1,tocIndex:0},{value:"@speedform/reactive",paraId:1,tocIndex:0},{value:"\u7684\u539F\u7406\u548C\u4F7F\u7528\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8BA9\u4F60\u66F4\u52A0\u6DF1\u5165\u7406\u89E3",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:1,tocIndex:0},{value:"\u7684\u8BBE\u8BA1\u7406\u5FF5\u548C\u4F7F\u7528\u65B9\u6CD5\u3002",paraId:1,tocIndex:0},{value:"SpeedForm",paraId:2,tocIndex:1},{value:"\u4F9D\u8D56\u4E8E",paraId:2,tocIndex:1},{value:"@speedform/reactive",paraId:2,tocIndex:1},{value:"\uFF0C\u5B89\u88C5",paraId:2,tocIndex:1},{value:"SpeedForm",paraId:2,tocIndex:1},{value:"\u540E\u5C31\u5DF2\u7ECF\u5B89\u88C5\u4E86",paraId:2,tocIndex:1},{value:"@speedform/reactive",paraId:2,tocIndex:1},{value:"\uFF0C\u4E5F\u53EF\u4EE5\u72EC\u7ACB\u5B89\u88C5\u4F7F\u7528",paraId:2,tocIndex:1},{value:"@speedform/reactive",paraId:2,tocIndex:1},{value:"\u3002",paraId:2,tocIndex:1},{value:`
pnpm add @speedform/reactive
npm install @speedform/reactive
yarn add @speedform/reactive

`,paraId:3,tocIndex:1}]},98036:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(85164);const l=[{value:"\u5F53\u72B6\u6001\u53D8\u5316\u65F6\u5C06\u89E6\u53D1\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\uFF0C",paraId:0,tocIndex:0},{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u63D0\u4F9B\u66F4\u52A0\u7EC6\u7C92\u5EA6\u7684\u6E32\u67D3\u3002",paraId:0,tocIndex:0},{value:"\u4F5C\u4E3A\u5BF9\u6BD4\uFF0C\u6211\u4EEC\u5148\u770B\u4E00\u4E2A\u4F20\u7EDF\u7684",paraId:1,tocIndex:1},{value:"Context",paraId:1,tocIndex:1},{value:"\u7684\u6E32\u67D3\u4F8B\u5B50\u3002",paraId:1,tocIndex:1},{value:"\u4ECE\u4E0A\u9762\u7684\u4F8B\u5B50\u53EF\u770B\u5230\uFF0C\u5F53\u66F4\u65B0",paraId:2},{value:"Context.age",paraId:2},{value:"\u65F6\uFF0C\u6240\u6709\u7684\u5B50\u7EC4\u4EF6\u4E0D\u7BA1\u662F\u5426\u6709\u4F7F\u7528",paraId:2},{value:"Age",paraId:2},{value:"\u5747\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C\u8FD9\u662F\u4E0D\u5FC5\u8981\u7684\uFF0C\u56E0\u4E3A\u5B50\u7EC4\u4EF6\u5E76\u6CA1\u6709\u4F7F\u7528\u5230",paraId:2},{value:"Context",paraId:2},{value:"\u7684\u6570\u636E\uFF0C\u4E3A\u6B64\u6211\u4EEC\u4E00\u822C\u9700\u8981\u4F7F\u7528",paraId:2},{value:"React.memo",paraId:2},{value:"\u6216\u4E00\u4E9B\u7B2C\u4E09\u65B9\u5E93\u6765\u8FDB\u884C\u4F18\u5316\u6E32\u67D3\u3002",paraId:2},{value:"\u6700\u5927\u7684\u95EE\u9898\u5728\u4E8E\uFF0C\u5F53\u66F4\u65B0\u6839Context\u65F6\uFF0C\u6240\u6709\u7684\u5B50\u7EC4\u4EF6\u90FD\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u8FD9\u662F\u4E0D\u5FC5\u8981\u7684\uFF0C\u56E0\u4E3A\u5B50\u7EC4\u4EF6\u5E76\u6CA1\u6709\u4F7F\u7528\u5230\u6839Context\u7684\u6570\u636E\u3002\u6211\u4EEC\u5E0C\u671B\u80FD\u5B9E\u73B0\u66F4\u7EC6\u7C92\u5EA6\u7684\u6E32\u67D3\uFF0C\u53EA\u6709\u5F53\u5B50\u7EC4\u4EF6\u4F7F\u7528\u5230\u7684\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:3},{value:"\u4F7F\u7528",paraId:4,tocIndex:2},{value:"@speedform/reactive",paraId:4,tocIndex:2},{value:"\u7684",paraId:4,tocIndex:2},{value:"useState",paraId:4,tocIndex:2},{value:"\u53EF\u4EE5\u4F7F",paraId:4,tocIndex:2},{value:"\u6E32\u67D3\u9897\u7C92\u5EA6\u9650\u5B9A\u5728\u7EC4\u4EF6\u8303\u56F4",paraId:4,tocIndex:2},{value:"\uFF0C\u53EA\u6709\u4F7F\u7528\u5230\u6570\u636E\u7684\u7EC4\u4EF6\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:4,tocIndex:2},{value:"\u5728\u4E0A\u4F8B\u4E2D\uFF0C\u5F53\u66F4\u65B0",paraId:5},{value:"Age",paraId:5},{value:"\u65F6\uFF0C\u4EC5\u6839\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C",paraId:5},{value:"FirstName",paraId:5},{value:"\u548C",paraId:5},{value:"LastName",paraId:5},{value:"\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5E76\u6CA1\u6709\u4F7F\u7528\u5230",paraId:5},{value:"Age",paraId:5},{value:"\u3002",paraId:5},{value:"\u5F53\u5728\u6839\u7EC4\u4EF6\u4E2D\u66F4\u65B0",paraId:5},{value:"FirstName",paraId:5},{value:"\u65F6\uFF0C\u4EC5",paraId:5},{value:"FirstName",paraId:5},{value:"\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002\u800C",paraId:5},{value:"LastName",paraId:5},{value:"\u7EC4\u4EF6\u4E2D\u6CA1\u6709",paraId:5},{value:"FirstName",paraId:5},{value:"\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:5},{value:"@speedform/reactive",paraId:6,tocIndex:3},{value:"\u63D0\u4F9B\u7684",paraId:6,tocIndex:3},{value:"state",paraId:6,tocIndex:3},{value:"\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u914D\u7F6E",paraId:6,tocIndex:3},{value:"signal",paraId:6,tocIndex:3},{value:"\u673A\u5236\u53EF\u4EE5\u76F4\u63A5\u8FDB\u884C\u8BFB\u53D6",paraId:6,tocIndex:3},{value:"\u6E32\u67D3\u9897\u7C92\u5EA6\u9650\u5B9A\u5728\u7EC4\u4EF6\u8303\u56F4",paraId:6,tocIndex:3},{value:"\uFF0C\u53EA\u6709\u4F7F\u7528\u5230\u6570\u636E\u7684\u7EC4\u4EF6\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:6,tocIndex:3},{value:"\u57FA\u4E8E",paraId:7,tocIndex:3},{value:"Signal",paraId:7,tocIndex:3},{value:",",paraId:7,tocIndex:3},{value:"\u6E32\u67D3\u9897\u7C92\u5EA6\u53EF\u4EE5\u662F\u7EC4\u4EF6\u4E2D\u7684\u4E00\u4E2A\u7247\u6BB5",paraId:7,tocIndex:3},{value:"\uFF0C\u66F4\u52A0\u7CBE\u7EC6\uFF0C\u66F4\u52A0\u9AD8\u6548\u3002",paraId:7,tocIndex:3},{value:"\u5728\u4E0A\u4F8B\u4E2D\uFF0C\u5F53\u66F4\u65B0",paraId:8},{value:"Age",paraId:8},{value:"\u65F6\uFF0C\u4EC5\u6839\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C",paraId:8},{value:"FirstName",paraId:8},{value:"\u548C",paraId:8},{value:"LastName",paraId:8},{value:"\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5E76\u6CA1\u6709\u4F7F\u7528\u5230",paraId:8},{value:"Age",paraId:8},{value:"\u3002",paraId:8},{value:"\u5F53\u66F4\u65B0",paraId:8},{value:"FirstName",paraId:8},{value:"\u65F6\uFF0C\u4EC5",paraId:8},{value:"FirstName",paraId:8},{value:"\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002\u800C",paraId:8},{value:"LastName",paraId:8},{value:"\u7EC4\u4EF6\u4E2D\u867D\u7136\u7528\u5230\u4E86",paraId:8},{value:"FirstName",paraId:8},{value:"\uFF0C\u4F46\u662F\u6CA1\u6709\u4F7F\u7528",paraId:8},{value:"$(FirstName)",paraId:8},{value:"\uFF0C\u4E5F\u5C31\u662F\u4F7F\u7528\u4FE1\u53F7\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:8},{value:"store.state",paraId:8},{value:"\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:8},{value:"reactive",paraId:8},{value:",\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A",paraId:8},{value:"Proxy",paraId:8},{value:"\u5BF9\u8C61\u6765\u6536\u96C6\u4F9D\u8D56\u3002\u7136\u540E\u4F7F\u7528",paraId:8},{value:"$(<reactive>)",paraId:8},{value:"\u6570\u636E\u53D8\u66F4\u4EC5\u89E6\u53D1",paraId:8},{value:"$",paraId:8},{value:"\u7B26\u53F7\u533A\u57DF\u5185\u91CD\u6E32\u67D3\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6700\u7EC6\u7C92\u5EA6\u7684\u6E32\u67D3\u3002",paraId:8},{value:"\u5173\u4E8E",paraId:8},{value:"Signal",paraId:8},{value:"\u673A\u5236\u7684\u66F4\u591A\u5185\u5BB9\u8BF7\u53C2\u8003",paraId:8},{value:"helux/Signal",paraId:8},{value:"\u3002",paraId:8}]},72048:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(90054);const l=[{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u4E86\u4E09\u79CD\u4E0D\u540C\u7684\u65B9\u5F0F\u6765\u5B58\u53D6\u72B6\u6001\u3002",paraId:0,tocIndex:0},{value:"useState",paraId:1,tocIndex:0},{value:": \u7528\u6765\u5728\u7EC4\u4EF6\u4E2D\u8BBF\u95EE\u548C\u66F4\u65B0",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"\u7684\u72B6\u6001\u6570\u636E\uFF0C\u66F4\u65B0\u65F6\u4F1A\u5BFC\u81F4\u91CD\u65B0\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"store.state",paraId:1,tocIndex:0},{value:": \u76F4\u63A5\u8BFB\u5199",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"\u7684\u72B6\u6001\u6570\u636E\uFF0C",paraId:1,tocIndex:0},{value:"store.state",paraId:1,tocIndex:0},{value:"\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:1,tocIndex:0},{value:"reactive",paraId:1,tocIndex:0},{value:"\uFF0C\u5176\u5B9E\u8D28\u662F\u901A\u8FC7",paraId:1,tocIndex:0},{value:"Proxy",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u7684\uFF0C\u5F53\u8BFB\u5199",paraId:1,tocIndex:0},{value:"store.state",paraId:1,tocIndex:0},{value:"\u65F6\uFF0C\u4F1A\u89E6\u53D1\u5185\u90E8\u7684\u4F9D\u8D56\u6536\u96C6\uFF0C\u76F8\u5173\u8BA1\u7B97\u5C5E\u6027\u7684\u8FD0\u884C\uFF0C\u914D\u5408",paraId:1,tocIndex:0},{value:"signal",paraId:1,tocIndex:0},{value:"\u673A\u5236\u53EF\u4EE5\u81EA\u52A8\u89E6\u53D1\u7EC4\u4EF6\u7684\u7EC6\u7C92\u5EA6\u91CD\u65B0\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"\u5F53\u521B\u5EFA\u597D",paraId:2,tocIndex:1},{value:"Store",paraId:2,tocIndex:1},{value:"\u540E,\u4F60\u53EF\u4EE5\u5728\u5B58\u53D6",paraId:2,tocIndex:1},{value:"State",paraId:2,tocIndex:1},{value:"\u7528\u6765\u9A71\u52A8\u7EC4\u4EF6\u7EC6\u7C92\u5EA6\u6E32\u67D3\u3002",paraId:2,tocIndex:1},{value:"Store",paraId:3,tocIndex:1},{value:"\u5BF9\u8C61\u63D0\u4F9B\u4E86",paraId:3,tocIndex:1},{value:"useState",paraId:3,tocIndex:1},{value:"\u65B9\u6CD5\uFF0C\u7528\u6765\u5728\u7EC4\u4EF6\u4E2D\u8BBF\u95EE\u548C\u66F4\u65B0",paraId:3,tocIndex:1},{value:"Store",paraId:3,tocIndex:1},{value:"\u7684\u72B6\u6001\u6570\u636E\u3002\u5176\u4F7F\u7528\u65B9\u5F0F\u4E0E",paraId:3,tocIndex:1},{value:"React",paraId:3,tocIndex:1},{value:"\u7684",paraId:3,tocIndex:1},{value:"useState",paraId:3,tocIndex:1},{value:"\u65B9\u6CD5\u7C7B\u4F3C\u3002",paraId:3,tocIndex:1},{value:"useState",paraId:4},{value:"\u8FD8\u53EF\u4EE5\u63A5\u53D7",paraId:4},{value:"getter",paraId:4},{value:" \u548C",paraId:4},{value:"setter",paraId:4},{value:"\u4E24\u4E2A\u51FD\u6570\u53C2\u6570\uFF0C\u7528\u6765\u83B7\u53D6\u548C\u8BBE\u7F6E",paraId:4},{value:"State",paraId:4},{value:"\u4E2D\u7684\u67D0\u4E2A\u5C5E\u6027\u3002",paraId:4},{value:"\u9664\u4E86\u4F7F\u7528",paraId:5,tocIndex:2},{value:"useState",paraId:5,tocIndex:2},{value:"\u65B9\u6CD5\u8BFB\u5199\u72B6\u6001\u5916\uFF0C",paraId:5,tocIndex:2},{value:"sotre.state",paraId:5,tocIndex:2},{value:"\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A",paraId:5,tocIndex:2},{value:"reactive",paraId:5,tocIndex:2},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u8BFB\u5199\u5B83\u7684\u5C5E\u6027\u3002",paraId:5,tocIndex:2},{value:"\u54CD\u5E94\u5F0F\u5BF9\u8C61",paraId:6},{value:"\u6307\u7684\u662F\u53EF\u4EE5\u5BF9\u8BE5\u5BF9\u8C61\u8FDB\u884C\u8BFB\u53D6\uFF0C\u5176\u4FEE\u6539\u884C\u4E3A\u4F1A\u89E6\u53D1\u5185\u90E8\u7684\u4F9D\u8D56\u6536\u96C6\uFF0C\u76F8\u5173\u8BA1\u7B97\u5C5E\u6027\u7684\u8FD0\u884C\uFF0C\u5F53\u7136\u4E5F\u4F1A\u81EA\u52A8\u89E6\u53D1\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u3002",paraId:6}]},97336:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(54862);const l=[{value:"\u521B\u5EFA",paraId:0,tocIndex:0},{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u65F6\u5BF9\u5E94\u521B\u5EFA\u4E00\u4E2A",paraId:0,tocIndex:0},{value:"Store",paraId:0,tocIndex:0},{value:"\u5BF9\u8C61,\u5C31\u5982\u540C",paraId:0,tocIndex:0},{value:"Redux",paraId:0,tocIndex:0},{value:"\u4E2D\u7684",paraId:0,tocIndex:0},{value:"Store",paraId:0,tocIndex:0},{value:"\u4E00\u6837,",paraId:0,tocIndex:0},{value:"Store",paraId:0,tocIndex:0},{value:"\u672C\u8D28\u4E0A\u5C31\u662F\u53D7\u63A7\u7684\u72B6\u6001\u6570\u636E\u5BF9\u8C61\uFF0C\u4F7F\u7528",paraId:0,tocIndex:0},{value:"helux",paraId:0,tocIndex:0},{value:"\u7684",paraId:0,tocIndex:0},{value:"atomx/sharex",paraId:0,tocIndex:0},{value:"\u521B\u5EFA\u3002",paraId:0,tocIndex:0},{value:"\u5178\u578B\u7684",paraId:1,tocIndex:0},{value:"Store",paraId:1,tocIndex:0},{value:"\u7ED3\u6784\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"Store",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\u4E2D\u4F1A\u5B9A\u4E49",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u7ED3\u6784\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u4E0D\u5141\u8BB8\u76F4\u63A5\u4FEE\u6539",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\uFF0C\u800C\u662F\u901A\u8FC7",paraId:2,tocIndex:0},{value:"Action",paraId:2,tocIndex:0},{value:"\u6765\u4FEE\u6539",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u3002",paraId:2,tocIndex:0},{value:"Action",paraId:2,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u666E\u901A\u7684\u51FD\u6570\uFF0C\u4E00\u822C\u4F1A\u5B9E\u73B0\u67D0\u79CD\u4E1A\u52A1\u903B\u8F91\uFF0C\u53EF\u4EE5\u662F\u540C\u6B65\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5F02\u6B65\u51FD\u6570\u3002\u6267\u884C\u6210\u529F\u4F1A\u4FEE\u6539",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u3002",paraId:2,tocIndex:0},{value:"\u8BA1\u7B97\u5C5E\u6027\u4F1A\u4FA6\u542C",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u7684\u6570\u636E\u53D8\u5316\uFF0C\u5F53",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u81EA\u52A8\u91CD\u65B0\u8BA1\u7B97\u8BA1\u7B97\u5C5E\u6027\u7684\u503C\u3002",paraId:2,tocIndex:0},{value:"@speedform/reactive",paraId:3,tocIndex:1},{value:"\u63D0\u4F9B\u4E86",paraId:3,tocIndex:1},{value:"createStore",paraId:3,tocIndex:1},{value:"\u65B9\u6CD5\u7528\u6765\u521B\u5EFA",paraId:3,tocIndex:1},{value:"Store",paraId:3,tocIndex:1},{value:"\u5BF9\u8C61\u3002",paraId:3,tocIndex:1},{value:`const user = {
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
`,paraId:6,tocIndex:2}]},20445:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(28794);const l=[{value:"watch",paraId:0},{value:"\u51FD\u6570\u4E0E",paraId:0},{value:"computed",paraId:0},{value:"\u51FD\u6570\u529F\u80FD\u7684\u533A\u522B\u5982\u4E0B\uFF1A",paraId:0},{value:"computed",paraId:1},{value:"\u51FD\u6570\u662F\u7528\u6765\u58F0\u660E\u8BA1\u7B97\u5C5E\u6027\u7684\uFF0C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u662F\u7528\u6765\u4FA6\u542C",paraId:1},{value:"State",paraId:1},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u7684\u3002",paraId:1},{value:"computed",paraId:1},{value:"\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u5199\u5165",paraId:1},{value:"State",paraId:1},{value:"\u4E2D\u7684\u5BF9\u5E94\u5C5E\u6027\uFF0C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u5199\u5165",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u6240\u5728\u7684\u4F4D\u7F6E\u3002",paraId:1},{value:"computed",paraId:1},{value:"\u51FD\u6570\u7684\u521B\u5EFA\u7684\u8BA1\u7B97\u5C5E\u6027\u662F\u57FA\u4E8E\u4F9D\u8D56\u6536\u96C6\u7684\uFF0C\u800C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u662F\u57FA\u4E8E\u4FA6\u542C\u7684,\u6BCF\u5F53",paraId:1},{value:"State",paraId:1},{value:"\u72B6\u6001\u53D8\u5316\u65F6\u5747\u4F1A\u8C03\u7528",paraId:1},{value:"watchOptions.on",paraId:1},{value:"\u8FC7\u6EE4\u51FD\u6570\u6765\u5339\u914D\u4FA6\u542C\u51FD\u6570\uFF0C\u56E0\u6B64\u7406\u8BBA\u4E0A\uFF0C",paraId:1},{value:"computed",paraId:1},{value:"\u51FD\u6570\u7684\u6027\u80FD\u66F4\u597D\uFF0C\u800C",paraId:1},{value:"watch",paraId:1},{value:"\u51FD\u6570\u6027\u80FD\u4F1A\u5DEE\u4E9B\u3002",paraId:1},{value:"watch",paraId:1},{value:"\u53EA\u80FD\u662F\u540C\u6B65\u4FA6\u542C\u51FD\u6570\uFF0C\u800C",paraId:1},{value:"computed",paraId:1},{value:"\u53EF\u4EE5\u662F\u5F02\u6B65\u51FD\u6570\u3002",paraId:1}]},40074:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(44834);const l=[{value:"\u5982\u540C",paraId:0,tocIndex:0},{value:"ComputedObject",paraId:0,tocIndex:0},{value:"\u4E00\u6837\uFF0C\u6BCF\u4E00\u4E2A\u4F7F\u7528",paraId:0,tocIndex:0},{value:"watch",paraId:0,tocIndex:0},{value:"\u5305\u88C5\u7684\u8BA1\u7B97\u51FD\u6570\u5747\u521B\u5EFA\u4E00\u4E2A",paraId:0,tocIndex:0},{value:"WatchObject",paraId:0,tocIndex:0},{value:"\u5BF9\u8C61\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7",paraId:1,tocIndex:0},{value:"Store.watchObjects",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u8BBF\u95EE\u6240\u6709\u58F0\u660E\u7684",paraId:1,tocIndex:0},{value:"WatchObject",paraId:1,tocIndex:0},{value:"\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u8FDB\u884C\u76F8\u5173\u7684\u52A8\u6001\u79FB\u9664/\u7981\u7528\u7B49\u64CD\u4F5C\u3002",paraId:1,tocIndex:0},{value:`export interface WatchObject extends WatchOptions>{ 
    path:string[]
    run:(fromPath:string[])=>void
    listener:(...args:any[])=>any
}
`,paraId:2,tocIndex:0},{value:"\u6240\u6709\u521B\u5EFA\u7684",paraId:3,tocIndex:0},{value:"WatchObject",paraId:3,tocIndex:0},{value:"\u5BF9\u8C61\u4FDD\u5B58\u5728",paraId:3,tocIndex:0},{value:"Store.watchObjects",paraId:3,tocIndex:0},{value:` class WatchObjects extends Map{
    enable:boolean
    reset(){}
    enableGroup(groupName:string,value:boolean=true){}
 }

`,paraId:4,tocIndex:0}]},8996:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(3955);const l=[{value:"\u5927\u90E8\u4EFD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5E94\u8BE5\u4F7F\u7528",paraId:0},{value:"computed",paraId:0},{value:"\u51FD\u6570\u6765\u58F0\u660E\u8BA1\u7B97\u5C5E\u6027\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528",paraId:0},{value:"watch",paraId:0},{value:"\u51FD\u6570\u6765\u4FA6\u542C",paraId:0},{value:"State",paraId:0},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002\u4F46\u662F\u5728\u4E00\u4E9B\u7279\u6B8A\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u4F7F\u7528",paraId:0},{value:"watch",paraId:0},{value:"\u51FD\u6570\uFF0C\u4E3B\u8981\u5728\u4E8E\uFF1A",paraId:0},{value:"\u52A8\u6001\u4F9D\u8D56",paraId:1},{value:"computed",paraId:2},{value:"\u8BA1\u7B97\u51FD\u6570\u7684\u4F9D\u8D56\u4E00\u822C\u662F\u786E\u5B9A\u7684\uFF0C\u800C",paraId:2},{value:"watch",paraId:2},{value:"\u51FD\u6570\u7684\u4F9D\u8D56\u662F\u52A8\u6001\u7684\u3002\u8FD9\u6BD4\u8F83\u9002\u5408\u4E00\u4E9B\u9700\u8981\u52A8\u6001\u4FA6\u542C\u7684\u573A\u666F\uFF0C\u6BD4\u5982\u4E0A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u52A8\u6001\u4FA6\u542C",paraId:2},{value:"orders[].count",paraId:2},{value:"\u7684\u53D8\u5316\u6765\u8BA1\u7B97",paraId:2},{value:"total",paraId:2},{value:"\u3002\u800C",paraId:2},{value:"computed",paraId:2},{value:"\u51FD\u6570\u7684\u4F9D\u8D56\u662F\u9759\u6001\u7684\uFF0C\u4E00\u65E6\u58F0\u660E\u5C31\u4E0D\u4F1A\u53D8\u5316\u3002",paraId:2},{value:"\u591A\u5B57\u6BB5\u590D\u5408\u8BA1\u7B97",paraId:3},{value:"\u5F53\u67D0\u4E2A\u5B57\u6BB5\u9700\u8981\u8FDB\u884C\u590D\u5408\u8BA1\u7B97\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528",paraId:4},{value:"watch",paraId:4},{value:"\u51FD\u6570\u6765\u5B9E\u73B0\u3002\u6BD4\u5982\u5728",paraId:4},{value:"SpeedForm",paraId:4},{value:"\u5B9E\u73B0\u8868\u5355\u7684",paraId:4},{value:"validate",paraId:4},{value:"\u548C",paraId:4},{value:"dirty",paraId:4},{value:"\u5C5E\u6027\u7684\u8BA1\u7B97\u65F6\uFF0C\u5C31\u662F\u4F7F\u7528",paraId:4},{value:"watch",paraId:4},{value:"\u5B9E\u73B0\u3002",paraId:4},{value:"\u6BD4\u5982\u8FD9\u662F\u8868\u5355",paraId:5},{value:"validate",paraId:5},{value:"\u68C0\u6D4B\u7684\u5B9E\u73B0\u4EE3\u7801\uFF1A",paraId:5},{value:`export function validate<T=any>(options?:ValidateOptions){
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
`,paraId:8},{value:"value",paraId:9},{value:"\uFF1A\u53D8\u5316\u7684\u503C",paraId:9},{value:"fromPath",paraId:10},{value:"\uFF1A\u6307\u7684\u662F\u54EA\u91CC\u53D1\u751F\u53D8\u5316\u7684\u8DEF\u5F84",paraId:10},{value:"getCache",paraId:11},{value:"\uFF1A\u7528\u6765\u83B7\u53D6\u5F53\u524D",paraId:11},{value:"watch",paraId:11},{value:"\u7684",paraId:11},{value:"cache",paraId:11},{value:"\u5BF9\u8C61\uFF0C\u7528\u6765\u4FDD\u5B58\u6821\u9A8C\u503C\u3002",paraId:11},{value:"\u5728",paraId:12},{value:"cache",paraId:12},{value:"\u91CC\u9762\u6211\u4EEC\u4FDD\u5B58\u4ECE\u6821\u9A8C\u8303\u56F4\u5185\u6240\u6709",paraId:12},{value:"value=false",paraId:12},{value:"\uFF0C\u5982\u679C",paraId:12},{value:"Object.keys(selfCache).length==0",paraId:12},{value:"\u5C31\u4EE3\u8868\u5728\u8BE5\u6821\u9A8C\u8303\u56F4\u5185\u6240\u6709\u5B57\u6BB5\u5747\u6709\u6548\u3002",paraId:12}]},7546:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(7070);const l=[{value:"@speedform/reactive",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B",paraId:0,tocIndex:0},{value:"watch",paraId:0,tocIndex:0},{value:"\u529F\u80FD\uFF0C\u7528\u6765\u76D1\u89C6",paraId:0,tocIndex:0},{value:"State",paraId:0,tocIndex:0},{value:"\u6570\u636E\u7684\u53D8\u5316,\u5F53\u6240\u76D1\u89C6\u7684\u6570\u636E\u53D1\u751F\u65F6\uFF0C\u53EF\u4EE5\u6267\u884C\u4FA6\u542C\u5668\u51FD\u6570\u3002",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u4E09\u79CD\u4F7F\u7528",paraId:1,tocIndex:0},{value:"watch",paraId:1,tocIndex:0},{value:"\u7684\u65B9\u5F0F\uFF1A",paraId:1,tocIndex:0},{value:"\u76F4\u63A5\u5728",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u4E2D\u58F0\u660E",paraId:2,tocIndex:0},{value:"watch",paraId:2,tocIndex:0},{value:"\u51FD\u6570,\u7136\u540E\u5C06\u4FA6\u542C\u5668\u8FD4\u56DE\u503C\u5199\u5165\u58F0\u660E",paraId:2,tocIndex:0},{value:"watch",paraId:2,tocIndex:0},{value:"\u51FD\u6570\u6240\u5728\u7684\u4F4D\u7F6E\u3002",paraId:2,tocIndex:0},{value:"\u8C03\u7528",paraId:2,tocIndex:0},{value:"store.watch",paraId:2,tocIndex:0},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:2,tocIndex:0},{value:"State",paraId:2,tocIndex:0},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002",paraId:2,tocIndex:0},{value:"\u5728\u7EC4\u4EF6\u4E2D\u8C03\u7528",paraId:2,tocIndex:0},{value:"store.useWatch",paraId:2,tocIndex:0},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:2,tocIndex:0},{value:"store",paraId:2,tocIndex:0},{value:"\u5BF9\u8C61\u7684\u53D8\u5316,\u5F53\u7EC4\u4EF6\u9500\u6BC1\u81EA\u52A8\u53D6\u6D88\u8BA2\u9605\u3002",paraId:2,tocIndex:0},{value:"@speedform/reactive",paraId:3,tocIndex:1},{value:"\u63D0\u4F9B\u4E86",paraId:3,tocIndex:1},{value:"watch",paraId:3,tocIndex:1},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u5728",paraId:3,tocIndex:1},{value:"state",paraId:3,tocIndex:1},{value:"\u58F0\u660E\u6765\u4FA6\u542C",paraId:3,tocIndex:1},{value:"State",paraId:3,tocIndex:1},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002",paraId:3,tocIndex:1},{value:"watch",paraId:4,tocIndex:1},{value:"\u51FD\u6570\u7684\u57FA\u672C\u7279\u6027\u5982\u4E0B\uFF1A",paraId:4,tocIndex:1},{value:"watch",paraId:5,tocIndex:1},{value:"\u53EF\u4EE5\u7528\u6765\u4FA6\u542C\u6574\u4E2A",paraId:5,tocIndex:1},{value:"store",paraId:5,tocIndex:1},{value:"\u5BF9\u8C61\u7684\u53D8\u5316\uFF0C\u5F53\u4FA6\u542C\u5230\u53D8\u5316\u65F6\u4F1A\u6267\u884C\u4FA6\u542C\u5668\u51FD\u6570\u3002",paraId:5,tocIndex:1},{value:"\u4FA6\u542C\u5668\u51FD\u6570\u53EA\u80FD\u662F\u4E00\u4E2A\u540C\u6B65\u51FD\u6570\u3002",paraId:5,tocIndex:1},{value:"\u4FA6\u542C\u5668\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u5199\u5165",paraId:5,tocIndex:1},{value:"watch",paraId:5,tocIndex:1},{value:"\u51FD\u6570\u6240\u5728\u7684\u4F4D\u7F6E\u3002",paraId:5,tocIndex:1},{value:"watch",paraId:6,tocIndex:2},{value:"\u51FD\u6570\u7B7E\u540D\u5982\u4E0B\uFF1A",paraId:6,tocIndex:2},{value:`function watch<Value = any,Result=Value>(
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
`,paraId:20,tocIndex:4},{value:"\u5728\u8FDB\u884C\u8868\u5355\u9A8C\u8BC1\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528",paraId:21,tocIndex:4},{value:"formState.validate",paraId:21,tocIndex:4},{value:"\u6765\u83B7\u53D6\u6574\u4E2A\u8868\u5355\u7684\u9A8C\u8BC1\u7ED3\u679C\u3002",paraId:21,tocIndex:4},{value:"\u9664\u4E86\u53EF\u4EE5\u5728",paraId:22,tocIndex:5},{value:"State",paraId:22,tocIndex:5},{value:"\u4E2D\u58F0\u660E",paraId:22,tocIndex:5},{value:"watch",paraId:22,tocIndex:5},{value:"\u51FD\u6570\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u5728",paraId:22,tocIndex:5},{value:"Store",paraId:22,tocIndex:5},{value:"\u5BF9\u8C61\u4E2D\u58F0\u660E",paraId:22,tocIndex:5},{value:"watch",paraId:22,tocIndex:5},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:22,tocIndex:5},{value:"State",paraId:22,tocIndex:5},{value:"\u4E2D\u7684\u6570\u636E\u53D8\u5316\u3002",paraId:22,tocIndex:5},{value:"\u5728\u7EC4\u4EF6\u5185\u4FA6\u542C\u53EF\u4EE5\u4F7F\u7528",paraId:23,tocIndex:6},{value:"store.useWatch",paraId:23,tocIndex:6},{value:"\u51FD\u6570\uFF0C\u7528\u6765\u4FA6\u542C",paraId:23,tocIndex:6},{value:"store",paraId:23,tocIndex:6},{value:"\u5BF9\u8C61\u7684\u53D8\u5316,\u5F53\u7EC4\u4EF6\u9500\u6BC1\u81EA\u52A8\u53D6\u6D88\u8BA2\u9605\u3002",paraId:23,tocIndex:6}]},81820:function(H,I,e){e.r(I),e.d(I,{texts:function(){return l}});var W=e(64100);const l=[{value:"SpeedForm",paraId:0,tocIndex:0},{value:"\u662F\u4E00\u4E2A\u975E\u5E38\u8F7B\u91CF\u7EA7\u7684\u8868\u5355\u7EC4\u4EF6\uFF0C\u5B83\u7684\u76EE\u6807\u662F\u8BA9\u8868\u5355\u5F00\u53D1\u53D8\u5F97\u66F4\u52A0\u7B80\u5355\u3001\u5FEB\u901F\u3001\u7075\u6D3B\u3002",paraId:0,tocIndex:0},{value:"@speed-form/antd",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/element-ui",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"element-ui",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"element-ui",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/iview",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"iview",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"iview",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/vuetify",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"vuetify",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"vuetify",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/element-plus",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"element-plus",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"element-plus",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/ant-design-vue",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"ant-design-vue",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"ant-design-vue",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/naive-ui",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"naive-ui",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"naive-ui",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"@speed-form/element3",paraId:1,tocIndex:0},{value:"\uFF1A\u57FA\u4E8E",paraId:1,tocIndex:0},{value:"element3",paraId:1,tocIndex:0},{value:"\u7684\u6E32\u67D3\u5E93\uFF0C\u652F\u6301",paraId:1,tocIndex:0},{value:"element3",paraId:1,tocIndex:0},{value:"\u7684\u6240\u6709\u8868\u5355\u7EC4\u4EF6",paraId:1,tocIndex:0}]}}]);
