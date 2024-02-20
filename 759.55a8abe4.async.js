"use strict";(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[759],{58759:function(Ie,I,o){o.r(I),o.d(I,{api:function(){return S},delay:function(){return w},forms:function(){return x}});var S={};o.r(S),o.d(S,{getProjects:function(){return k}});var x={};o.r(x),o.d(x,{Network:function(){return Q},schema:function(){return J}});var X=o(90393),P=o.n(X),Z=o(7392),R=o.n(Z);function k(e){return V.apply(this,arguments)}function V(){return V=R()(P()().mark(function e(t){var r,n,a;return P()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,fetch(t);case 2:if(r=u.sent,!r.ok){u.next=11;break}return u.next=6,r.json();case 6:return n=u.sent,a=n.map(function(l){return{name:l.name,url:l.html_url,description:l.description,stars:l.stargazers_count}}),u.abrupt("return",a);case 11:throw new Error("".concat(r.status," - ").concat(r.statusText));case 12:case"end":return u.stop()}},e)})),V.apply(this,arguments)}var w=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(r){setTimeout(r,t)})},d=o(99660),q=o(79664),A=o.n(q),_=o(70125),F=o.n(_),ee=o(39114),C=o.n(ee),c=o(70079),we=o(26851),B=o(13192);function Be(e){var t=_typeof(e);return e==null||t=="boolean"||t=="number"||t=="string"||t==null}function L(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=0,n,a=!0,i=function u(){if(n==null){a=!0,clearTimeout(r),r=0;return}try{var l=n;n=void 0,e.apply(void 0,A()(l)),r=setTimeout(function(){return u()},t)}finally{}};return function(){for(var u=arguments.length,l=new Array(u),s=0;s<u;s++)l[s]=arguments[s];if(t==0)return e.apply(void 0,l);n=l,(a||r==0)&&(a=!1,i())}}function Le(e,t){var r={};for(var n in e)e[n]!==t[n]&&(r[n]=t[n]);return r}function H(e){return new Proxy({},{get:function(r,n,a){return e()[n]}})}function re(e){return"execute"in e&&!E(e)}function E(e){return(0,B.P)(e)&&"value"in e}function te(e){return Array.isArray(e)}function ne(e){return(0,B.P)(e)&&!E(e)&&!re(e)}function He(e,t){}var j="fields",ze="actions",m=o(35250);function ae(e,t,r,n){return Object.assign({name:e,help:"",defaultValue:void 0,oldValue:void 0,visible:!0,required:!1,readonly:!1,validate:!0,enable:!0,dirty:!1,placeholder:""},C()(C()({},t),{},{sync:r,update:n}))}function ie(e,t){var r=(0,c.useRef)(null);return(0,c.useCallback)(function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;if(r.current==null){var a=e.sync(t);r.current=n==0?a:L(a,n)}return r.current},[])}function ue(e,t){var r=(0,c.useRef)(null),n=(0,c.useState)(0),a=F()(n,2),i=a[0],u=a[1];return(0,c.useCallback)(function(l,s){var v=Object.assign({debounce:0},s),f=v.debounce;if(r.current==null||i!==f){i!==f&&f>0&&u(f);var g=function(h){return function(b){t(typeof h=="function"?function(y){return h.call(y,y.fields)}:function(y){return(0,d.setVal)(y,e,h)}),typeof b.preventDefault=="function"&&b.preventDefault()}};r.current=f>0?g:L(g,f)}return r.current(l)},[])}var D=c.memo(function(e){return(0,m.jsx)(m.Fragment,{children:typeof e.children=="function"&&e.children(e.fieldProps)})},function(e,t){return Object.entries(e.fieldProps).every(function(r){var n=F()(r,2),a=n[0],i=n[1];return["children","sync","update"].includes(a)?!0:i===t.fieldProps[a]})});function le(e){var t=this;return c.memo(function(r){var n=r.name,a=Array.isArray(n)?n:n.split("."),i=[j].concat(A()(a)),u=[j].concat(A()(a));a.push("value"),u.push("value");var l=e.useState(function(b){return(0,d.getVal)(b,i)}),s=F()(l,2),v=s[0],f=s[1],g=ue(u,f),p=ie(e,u),h=ae(t.getFieldName(a),v,p,g);return r.render?(0,m.jsx)(D,{fieldProps:h,children:r.render}):Array.isArray(r.children)?r.children.map(function(b){return(0,m.jsx)(D,{fieldProps:h,children:b})}):(0,m.jsx)(D,{fieldProps:h,children:r.children})},function(r,n){return r.name===n.name})}var z=o(23893);function se(e,t){return(0,c.useCallback)(function(r){t(function(n){r.call(n,(0,d.getVal)(n,e))})},[])}function K(e,t,r){return(0,z.w)({name:e,help:"",visible:!0,required:!1,readonly:!1,validate:!0,enable:!0,update:r},t)}function oe(e){var t=this;return c.memo(function(n){var a=n.name,i=e.useState(),u=F()(i,2),l=u[0],s=u[1],v=Array.isArray(a)?a:a.split("."),f=["fields"].concat(A()(v)),g=(0,d.getVal)(l,f),p=se(f,s),h=(0,c.useState)(function(){return K(t.getFieldName(v),g,p)}),b=F()(h,2),y=b[0],G=b[1];return(0,c.useEffect)(function(){G(K(t.getFieldName(v),g,p))},[g]),Array.isArray(n.children)?n.children.map(function(Ge){return Ge(y)}):n.children(y)},function(r,n){return r.name===n.name})}var ce=o(76120);function M(e){return e.value}function T(e){var t={};return Object.entries(e).forEach(function(r){var n=_slicedToArray(r,2),a=n[0],i=n[1];typeof a=="string"&&(isFieldValue(i)?t[a]=M(i):isFieldGroup(i)?t[a]=T(i):isFieldList(i)?t[a]=U(i):t[a]=i)}),t}function U(e){var t=[];return e.forEach(function(r){isFieldValue(r)?t.push(M(r)):isFieldGroup(r)?t.push(T(r)):isFieldList(r)?t.push(U(r)):t.push(r)}),t}function Ke(e,t){return T(e)}function Me(e,t,r){var n=Object.assign({},r),a=n.onNotMatch,i=a===void 0?function(){}:a;function u(l,s){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];Object.entries(l).forEach(function(f){var g=_slicedToArray(f,2),p=g[0],h=g[1];if(typeof p=="string"){var b=[].concat(_toConsumableArray(v),[p]);if(p in s){var y=s[p];isFieldValue(y)?y.value=h:isFieldGroup(y)?isPlainObject(h)?u(h,y,b):i(b):isFieldList(y)?Array.isArray(h)?u(h,y):i(b):s[p]=h}else i(b)}})}u(t,e)}function Ue(e,t){var r=new FormData,n=Object.assign({getItemName:function(l){return l.join(".")}},t),a=n.getItemName;function i(u,l){if(l!=null){var s=a?a(u):u.join(".");Array.isArray(l)?l.forEach(function(v,f){i([].concat(_toConsumableArray(u),[String(f)]),v)}):isPlainObject(l)?Object.entries(l).forEach(function(v){var f=_slicedToArray(v,2),g=f[0],p=f[1];i([].concat(_toConsumableArray(u),[g]),p)}):r.append(s,l)}}return i([],e),r}function W(e,t){return function(){var r=R()(P()().mark(function n(a){var i;return P()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=Object.assign({},t,a),l.next=3,e.execute.run(i);case 3:if(!e.execute.error){l.next=7;break}throw new Error(e.execute.error);case 7:return l.abrupt("return",e.execute.result);case 8:case"end":return l.stop()}},n)}));return function(n){return r.apply(this,arguments)}}()}function fe(e,t){var r=(0,c.useCallback)(function(a){var i=Object.assign({},{noReentry:!0,preventDefault:!0},t,a),u=W(e,i);return function(l){u(),l&&i.preventDefault&&typeof l.preventDefault=="function"&&l.preventDefault()}},[]),n=(0,c.useCallback)(function(a){e.execute.cancel(),a&&typeof a.preventDefault=="function"&&a.preventDefault()},[]);return[r,n]}function de(e,t){return(0,c.useCallback)(function(r){var n=(0,d.getValueByPath)(e,[].concat(A()(Array.isArray(t)?t:t.split(".")),["execute"]));n.cancel(),r&&typeof r.preventDefault=="function"&&r.preventDefault()},[])}function ve(e,t,r,n){return Object.assign({help:"",title:"",visible:!0,enable:!0},(0,ce.C)(e,"execute"),C()(C()({},e.execute),{},{run:t,cancel:r,ref:n}))}var N=c.memo(function(e){return(0,m.jsx)(m.Fragment,{children:typeof e.children=="function"&&e.children(e.actionProps)})},function(e,t){return Object.entries(e.actionProps).every(function(r){var n=F()(r,2),a=n[0],i=n[1];return["children","run","cancel"].includes(a)?!0:i===t.actionProps[a]})});function me(e,t,r){function n(a){var i=e.useState(),u=F()(i,1),l=u[0],s=a.name,v=(0,d.getValueByPath)(l,s,"."),f=fe(v,t),g=F()(f,1),p=g[0],h=de(l,s),b=(0,c.useRef)(null),y=ve(v,p,h,b);if(typeof a.render=="function")return(0,m.jsx)(N,{actionProps:y,children:a.render});if(a.children)return Array.isArray(a.children)?a.children.map(function(G){return(0,m.jsx)(N,{actionProps:y,children:G})}):(0,m.jsx)(N,{actionProps:y,children:a.children})}return c.memo(n,function(a,i){return a.name===i.name})}function he(e,t){return computed(function(){var r=_asyncToGenerator(_regeneratorRuntime().mark(function n(a,i){var u;return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return u=getFormData(getSnap(a,!1).fields),s.next=3,e(u,i);case 3:return s.abrupt("return",s.sent);case 4:case"end":return s.stop()}},n)}));return function(n,a){return r.apply(this,arguments)}}(),[],t)}function We(e,t){return he(function(){var r=_asyncToGenerator(_regeneratorRuntime().mark(function n(a,i){var u;return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return u=new FormData,s.next=3,e(u,i);case 3:return s.abrupt("return",s.sent);case 4:case"end":return s.stop()}},n)}));return function(n,a){return r.apply(this,arguments)}}(),t)}var ge=o(83443);function pe(e){return e.length>1&&e[0]==j&&e[e.length-1]=="value"}function ye(e){return(0,d.watch)(function(t,r){var n=r.getSelfValue,a=r.srcPath,i=r.selfPath;if((0,d.isIncludePath)(e||i,a)){var u=n();if(!u)return!0}},function(t){return pe(t)},{initial:!1})}var Ye=o(41176),Je=o(77937),Qe=o(65523),Xe=o(7122),Ze=o(19108),ke=null;function be(e){return e.length>1&&e[0]==j&&(e[e.length-1]==="validate"||e.length>=2&&e[e.length-2]=="validate"&&e[e.length-1]=="result")&&!(e.length==2&&e[1]=="validate")&&!(e.length==3&&e[1]=="validate"&&e[2]=="result")}function je(e){var t=Object.assign({},e),r=t.entry;return(0,d.watch)(function(n,a){var i=a.srcPath,u=a.selfPath,l=a.getCache;if((0,d.isIncludePath)(r||u,i)){var s=l();if(typeof n=="boolean"){var v=i.join(d.OBJECT_PATH_DELIMITER);n?delete s[v]:s[v]=n}return Object.keys(s).length==0}},function(n){return be(n)},{initial:!0})}function qe(e,t){var r=typeof e=="function"?e():e;if(!r)throw new ValidationError(typeof t=="function"?t():t)}var Fe={title:"SpeedForm",help:"",tips:"",status:"idle",dirty:ye(["fields"]),validate:je({entry:["fields"]}),readonly:!1,enable:!0,visible:!0},Ce=o(83038);function Ae(e){var t={};return Object.entries(e||{}).forEach(function(r){var n=F()(r,2),a=n[0],i=n[1];E(i)||ne(i)||te(i)||(t[a]=i)}),t}function Pe(e){return Object.assign({type:"submit",help:"",title:"",dirty:!1,validate:!0,visible:!0,enable:!0,readOnly:!0},Ae(e))}var $=c.memo(function(e){return(0,m.jsx)(m.Fragment,{children:typeof e.children=="function"&&e.children(e.submitProps)})},function(e,t){return Object.entries(e.submitProps).every(function(r){var n=F()(r,2),a=n[0],i=n[1];return["children","render"].includes(a)?!0:i===t.submitProps[a]})}),Oe=(0,Ce.zo)(function(e,t){var r,n,a=t.className,i=e.visible;return(0,m.jsx)("input",{className:a,style:Object.assign({display:i?"inline-block":"none"},e.style),type:(r=e.type)!==null&&r!==void 0?r:"submit",value:(n=e.title)!==null&&n!==void 0?n:"\u63D0\u4EA4"})},{minWidth:"80px",cursor:"pointer",boxSizing:"border-box",margin:"2px",transition:"filter 0.3s","&:hover":{filter:"brightness(1.2)"}});function Y(e,t,r){var n=Object.assign({preventDefault:!1},t);function a(i){var u=e.useState(),l=F()(u,1),s=l[0],v=i.scope,f=(0,d.getValueByPath)(s,v),g=Pe(f),p=typeof i.render=="function"?1:Array.isArray(i.children)?2:typeof i.children=="function"?3:0;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Oe,C()({visible:p==0},n)),p===1?(0,m.jsx)($,{submitProps:g,children:i.render}):p===2?i.children.map(function(h){return(0,m.jsx)($,{submitProps:g,children:h})}):(0,m.jsx)($,{submitProps:g,children:i.children})]})}return c.memo(a,function(i,u){return i.name===u.name})}function Se(e,t,r){return Y(e,C()({type:"submit",title:"\u63D0\u4EA4",style:{borderRadius:"4px",padding:"8px",background:"#1c8ceb",border:"1px solid #1c8ceb",color:"#fff"}},t),r)}function xe(e,t,r){return Y(e,C()({type:"reset",title:"\u91CD\u7F6E",style:{borderRadius:"4px",padding:"8px",background:"#eee",border:"1px solid #bbb"}},t),r)}function Re(e,t,r){e.length>=2&&e[0]==j&&e[e.length-1]=="validate"&&(r.scope||(r.scope="value"),r.depends||(r.depends=[]),r.depends.push([].concat(A()(e.slice(0,-1)),["value"])),r.initial=!0)}function Ve(e){(0,ge.w)(e,Fe)}function Ee(e,t,r){e.length>1&&e[e.length-1]=="execute"&&(r.immediate=!1,r.scope=[j],r.noReentry=!0)}function De(e,t,r){e.length>0&&e[0]==j&&r.depends&&r.depends.forEach(function(n,a){Array.isArray(n)&&n.length>0&&n[0]!=j?r.depends[a]=[j].concat(A()(n)):typeof n=="string"&&!n.startsWith("".concat(j,"."))&&(r.depends[a]="".concat(j,".").concat(n))})}function Te(e,t){var r=(0,z.w)({getFieldName:function(i){return i.length>0?i[i.length-1]==="value"?i.slice(0,-1).join("."):i.join("."):""},singleton:!0},t);Ve(e);var n=(0,d.createStore)({state:e},{debug:r.debug,singleton:r.singleton,computedThis:d.ComputedScopeRef.Root,computedScope:[j],onCreateComputed:function(i,u,l){Re(i,u,l),De(i,u,l),Ee(i,u,l)},onComputedContext:function(i,u){var l=u.type,s=u.valuePath;if(l=="scope"&&s.length>0&&s[0]==j)return i.fields}});return{Form:Ne.call(r,n),Field:le.call(r,n),Group:oe.call(r,n),Action:me(n,{},r),Submit:Se(n,{},r),Reset:xe(n,{},r),getAction:W,fields:H(function(){return n.state.fields}),actions:H(function(){return n.state.actions}),state:n.state,useState:n.useState}}function Ne(e){return c.forwardRef(function(t,r){var n=t.children,a=(0,c.useCallback)(function(u){},[]),i=(0,c.useCallback)(function(u){},[]);return(0,m.jsx)("form",C()(C()({ref:r,className:"speedform-form"},t),{},{onSubmit:a,onReset:i,children:n}))})}var $e=o(99166),O=o.n($e),J={title:"\u7F51\u7EDC\u914D\u7F6E",fields:{title:{value:"React-Helux-Form",placeholder:"\u8F93\u5165\u7F51\u7EDC\u914D\u7F6E\u540D\u79F0",title:"\u7F51\u7EDC\u540D\u79F0",validate:function(t){return t.length>3}},interface:{value:"wifi",title:"\u7F51\u5361\u7C7B\u578B",select:function(){return[{value:"wifi",title:"\u65E0\u7EBF\u7F51\u5361"},{value:"ethernet",title:"\u6709\u7EBF\u7F51\u5361"}]}},ip:{value:"1.1.1.1",title:"IP\u5730\u5740",validate:(0,d.computed)(function(){var e=R()(P()().mark(function t(r){return P()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w(2e3);case 2:return a.abrupt("return",O().isIP(String(r)));case 3:case"end":return a.stop()}},t)}));return function(t){return e.apply(this,arguments)}}(),[],{async:!0})},gateway:{value:"1.1.1.1",title:"\u7F51\u5173\u5730\u5740",validate:function(t){return O().isIP(t)}},dhcp:{enable:{title:"\u81EA\u52A8\u83B7\u53D6IP\u5730\u5740",value:!0},start:{title:"\u8D77\u59CB\u5730\u5740",value:"192.168.1.1",enable:(0,d.computed)(function(e){return e.enable.value},{scope:d.ComputedScopeRef.Parent}),validate:function(t){return O().isIP(t)}},end:{title:"\u7ED3\u675F\u5730\u5740",value:"192.168.1.100",enable:(0,d.computed)(function(e){return e.dhcp.enable.value},{scope:d.ComputedScopeRef.Root}),validate:function(t){return O().isIP(t)}}},wifi:{title:"\u65E0\u7EBF\u914D\u7F6E",visible:(0,d.computed)(function(e){return e.interface.value==="wifi"},{scope:d.ComputedScopeRef.Root}),ssid:{value:"fast",placeholder:"\u65E0\u7EBF\u7F51\u7EDC",validate:function(t){return t.length>3}},password:{value:"123",placeholder:"\u8F93\u5165\u65E0\u7EBF\u5BC6\u7801",help:"\u5BC6\u7801\u957F\u5EA6\u5E94\u4E0D\u5C0F\u4E8E6\u4F4D",enable:function(t){return t.interface.value==="wifi"},validate:function(t){return t.length>=6}}}}},Q=Te(J,{debug:!0});globalThis.Network=Q}}]);
