"use strict";(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[772],{65772:function(Qe,B,s){s.r(B),s.d(B,{$:function(){return l.$},ActionChildren:function(){return D},ComputedObjects:function(){return l.ComputedObjects},ComputedScopeRef:function(){return l.ComputedScopeRef},FieldChildren:function(){return R},OBJECT_PATH_DELIMITER:function(){return l.OBJECT_PATH_DELIMITER},ValidationError:function(){return Re},WatchObjects:function(){return l.WatchObjects},action:function(){return N},computed:function(){return l.computed},createAction:function(){return l.createAction},createActionComponent:function(){return Y},createActions:function(){return l.createActions},createFieldComponent:function(){return W},createFieldGroupComponent:function(){return H},createForm:function(){return k},createObject:function(){return l.createObject},createStore:function(){return l.createStore},createUseAction:function(){return Q},createUseWatch:function(){return l.createUseWatch},createWatch:function(){return l.createWatch},getAction:function(){return G},getSnap:function(){return l.getSnap},getVal:function(){return l.getVal},getValueByPath:function(){return l.getValueByPath},installComputed:function(){return l.installComputed},installWatch:function(){return l.installWatch},isIncludePath:function(){return l.isIncludePath},isSkipComputed:function(){return l.isSkipComputed},markRaw:function(){return l.markRaw},reactive:function(){return l.reactive},setVal:function(){return l.setVal},skipComputed:function(){return l.skipComputed},submit:function(){return ge},useForm:function(){return ze},watch:function(){return l.watch}});var q=s(79664),O=s.n(q),_=s(70125),b=s.n(_),ee=s(39114),A=s.n(ee),d=s(70079),Xe=s(26851),F=s(13192);function Ze(e){var r=_typeof(e);return e==null||r=="boolean"||r=="number"||r=="string"||r==null}function M(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=0,n,u=!0,a=function i(){if(n==null){u=!0,clearTimeout(t),t=0;return}try{var o=n;n=void 0,e.apply(void 0,O()(o)),t=setTimeout(function(){return i()},r)}finally{}};return function(){for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];if(r==0)return e.apply(void 0,o);n=o,(u||t==0)&&(u=!1,a())}}function ke(e,r){var t={};for(var n in e)e[n]!==r[n]&&(t[n]=r[n]);return t}function te(){return Math.random().toString(36).substring(2)}function U(e){return new Proxy({},{get:function(t,n,u){return e()[n]}})}function ne(e){return(0,F.P)(e)&&"execute"in e&&(0,F.P)(e.execute)&&"loading"in e.execute}function P(e){return(0,F.P)(e)&&"value"in e}function x(e){return Array.isArray(e)}function E(e){return(0,F.P)(e)&&!P(e)&&!ne(e)}function qe(){return!1}var C="fields",_e="actions",V="validate",l=s(74117),p=s(35250);function re(e,r,t,n){return Object.assign({name:e,help:"",initial:void 0,oldValue:void 0,visible:!0,required:!1,readonly:!1,validate:null,enable:!0,placeholder:""},A()(A()({},r),{},{sync:t,update:n}))}function ue(e,r){var t=(0,d.useRef)(null);return(0,d.useCallback)(function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;if(t.current==null){var u=e.sync(r);t.current=n==0?u:M(u,n)}return t.current},[])}function ae(e,r){var t=(0,d.useRef)(null),n=(0,d.useState)(0),u=b()(n,2),a=u[0],i=u[1];return(0,d.useCallback)(function(o,c){var f=Object.assign({debounce:0},c),v=f.debounce;if(t.current==null||a!==v){a!==v&&v>0&&i(v);var m=function(g){return function(y){r(typeof g=="function"?function(j){return g.call(j,j.fields)}:function(j){return(0,l.setVal)(j,e,g)}),typeof y.preventDefault=="function"&&y.preventDefault()}};t.current=v>0?m:M(m,v)}return t.current(o)},[])}var R=d.memo(function(e){return(0,p.jsx)(p.Fragment,{children:typeof e.children=="function"&&e.children(e.fieldProps)})},function(e,r){return Object.entries(e.fieldProps).every(function(t){var n=b()(t,2),u=n[0],a=n[1];return["children","sync","update"].includes(u)?!0:a===r.fieldProps[u]})});function W(e){var r=this;return d.memo(function(t){var n=t.name,u=Array.isArray(n)?n:n.split("."),a=[C].concat(O()(u)),i=[C].concat(O()(u));u.push("value"),i.push("value");var o=e.useState(function(y){return(0,l.getVal)(y,a)}),c=b()(o,2),f=c[0],v=c[1],m=ae(i,v),h=ue(e,i),g=re(r.getFieldName(u),f,h,m);return t.render?(0,p.jsx)(R,{fieldProps:g,children:t.render}):Array.isArray(t.children)?t.children.map(function(y){return(0,p.jsx)(R,{fieldProps:g,children:y})}):(0,p.jsx)(R,{fieldProps:g,children:t.children})},function(t,n){return t.name===n.name})}var ie=s(90393),S=s.n(ie),ce=s(7392),T=s.n(ce),L=s(23893);function oe(e,r){return(0,d.useCallback)(function(t){r(function(n){t.call(n,(0,l.getVal)(n,e))})},[])}function w(e,r,t){return(0,L.w)({name:e,help:"",visible:!0,required:!1,readonly:!1,validate:!0,enable:!0,update:t},r)}function H(e){var r=this;return d.memo(function(n){var u=n.name,a=e.useState(),i=b()(a,2),o=i[0],c=i[1],f=Array.isArray(u)?u:u.split("."),v=["fields"].concat(O()(f)),m=(0,l.getVal)(o,v),h=oe(v,c),g=(0,d.useState)(function(){return w(r.getFieldName(f),m,h)}),y=b()(g,2),j=y[0],Je=y[1];return(0,d.useEffect)(function(){Je(w(r.getFieldName(f),m,h))},[m]),Array.isArray(n.children)?n.children.map(function(Ye){return Ye(j)}):n.children(j)},function(t,n){return t.name===n.name})}var le=s(76120);function K(e){return e.value}function $(e){var r={};return Object.entries(e).forEach(function(t){var n=b()(t,2),u=n[0],a=n[1];if(typeof u=="string")if(P(a))r[u]=K(a);else if(E(a)){var i=$(a);i&&Object.keys(i).length>0&&(r[u]=i)}else x(a)&&(r[u]=z(a))}),r}function z(e){var r=[];return e.forEach(function(t){P(t)?r.push(K(t)):E(t)?r.push($(t)):x(t)?r.push(z(t)):r.push(t)}),r}function se(e,r,t){var n=Object.assign({},t),u=n.onNotMatch,a=u===void 0?function(){}:u;function i(o,c){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];Object.entries(o).forEach(function(v){var m=b()(v,2),h=m[0],g=m[1];if(typeof h=="string"){var y=[].concat(O()(f),[h]);if(h in c){var j=c[h];P(j)?j.value=g:E(j)?(0,F.P)(g)?i(g,j,y):a(y):x(j)?Array.isArray(g)?i(g,j):a(y):c[h]=g}else a(y)}})}i(e,r)}function et(e,r){var t=new FormData,n=Object.assign({getItemName:function(o){return o.join(".")}},r),u=n.getItemName;function a(i,o){if(o!=null){var c=u?u(i):i.join(".");Array.isArray(o)?o.forEach(function(f,v){a([].concat(_toConsumableArray(i),[String(v)]),f)}):isPlainObject(o)?Object.entries(o).forEach(function(f){var v=_slicedToArray(f,2),m=v[0],h=v[1];a([].concat(_toConsumableArray(i),[m]),h)}):t.append(c,o)}}return a([],e),t}function fe(e,r){return function(n,u){var a=Object.assign({validate:!0},u);try{e.setEnableMutate(!1),se(n,e.state.fields),e.setState(function(i){i.dirty=!1,i.validate=null})}catch(i){console.error(i)}finally{e.setEnableMutate(!0),a!=null&&a.validate&&e.computedObjects.runGroup(V)}}}function J(e,r){return $(e)}function de(e,r){return function(n){var u=Object.assign({},n);return J((0,l.getSnap)(e.state).fields)}}function G(e,r){return function(){var t=T()(S()().mark(function n(u){var a;return S()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=Object.assign({},r,u),o.next=3,e.execute.run(a);case 3:if(!e.execute.error){o.next=7;break}throw new Error(e.execute.error);case 7:return o.abrupt("return",e.execute.result);case 8:case"end":return o.stop()}},n)}));return function(n){return t.apply(this,arguments)}}()}function ve(e,r){return(0,d.useCallback)(function(t){var n=Object.assign({},{noReentry:!0,preventDefault:!0},r,t),u=G(e,n);return function(a){u(),a&&n.preventDefault&&typeof a.preventDefault=="function"&&a.preventDefault()}},[e])}function me(e,r){return(0,d.useCallback)(function(t){var n=(0,l.getValueByPath)(e,[].concat(O()(Array.isArray(r)?r:r.split(".")),["execute"]));n.cancel(),t&&typeof t.preventDefault=="function"&&t.preventDefault()},[])}function he(e,r,t,n){return Object.assign({help:"",title:"",visible:!0,enable:!0},(0,le.C)(e,"execute"),A()(A()({},e.execute),{},{run:r,cancel:t,ref:n}))}var D=d.memo(function(e){return(0,p.jsx)(p.Fragment,{children:typeof e.children=="function"&&e.children(e.actionProps)})},function(e,r){return Object.entries(e.actionProps).every(function(t){var n=b()(t,2),u=n[0],a=n[1];return["children","run","cancel"].includes(u)?!0:a===r.actionProps[u]})});function Y(e,r,t){function n(u){var a=e.useState(),i=b()(a,1),o=i[0],c=u.name;c.includes(".")||(c="actions.".concat(c));var f=(0,l.getValueByPath)(o,c,"."),v=ve(f,r),m=me(o,c),h=(0,d.useRef)(null),g=he(f,v,m,h);if(typeof u.render=="function")return(0,p.jsx)(D,{actionProps:g,children:u.render});if(u.children)return Array.isArray(u.children)?u.children.map(function(y){return(0,p.jsx)(D,{actionProps:g,children:y})}):(0,p.jsx)(D,{actionProps:g,children:u.children})}return d.memo(n,function(u,a){return u.name===a.name})}function N(e,r){return(0,l.computed)(function(){var t=T()(S()().mark(function n(u,a){var i;return S()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return i=J((0,l.getSnap)(u,!1).fields),c.next=3,e(i,a);case 3:return c.abrupt("return",c.sent);case 4:case"end":return c.stop()}},n)}));return function(n,u){return t.apply(this,arguments)}}(),[],r)}function ge(e,r){return N(function(){var t=T()(S()().mark(function n(u,a){var i;return S()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return i=new FormData,c.next=3,e(i,a);case 3:return c.abrupt("return",c.sent);case 4:case"end":return c.stop()}},n)}));return function(n,u){return t.apply(this,arguments)}}(),r)}function Q(e){return function(t,n){var u=(0,d.useRef)(),a=e.useState(),i=b()(a,2),o=i[0],c=i[1],f=(0,d.useState)(function(){return n!=null&&n.name?n==null?void 0:n.name:te()}),v=b()(f,1),m=v[0];return u.current||(c(function(h){m in h.actions||(h.actions[m]={execute:N(t,n)})}),u.current=m),(0,l.getValueByPath)(o,["actions",m]).execute}}var pe=s(83443);function ye(e){return e.length>1&&e[0]==C&&e[e.length-1]=="value"}function be(e){return(0,l.watch)(function(r,t){var n=t.getSelfValue,u=t.triggerPath,a=t.selfPath;if((0,l.isIncludePath)(e||a,u)){var i=n();if(!i)return!0}},function(r){return ye(r)},{initial:!1})}var je=s(41176),Ce=s.n(je),Ae=s(77937),Oe=s.n(Ae),Se=s(65523),Fe=s.n(Se),Pe=s(7122),xe=s.n(Pe),Ee=s(19108),Ve=s.n(Ee),Re=function(e){Fe()(t,e);var r=xe()(t);function t(n){var u;return Oe()(this,t),u=r.call(this,n),u.name="ValidationError",u}return Ce()(t)}(Ve()(Error));function X(e){return e.length>1&&e[0]==C&&(e[e.length-1]==="validate"||e.length>=2&&e[e.length-2]=="validate"&&e[e.length-1]=="result")&&!(e.length==2&&e[1]=="validate")&&!(e.length==3&&e[1]=="validate"&&e[2]=="result")}function Te(e){var r=Object.assign({},e),t=r.entry;return(0,l.watch)(function(n,u){var a=u.triggerPath,i=u.selfPath,o=u.getCache;if((0,l.isIncludePath)(t||i,a)){var c=o();if(typeof n=="boolean"){var f=a.join(l.OBJECT_PATH_DELIMITER);n?delete c[f]:c[f]=n}return Object.keys(c).length==0}},function(n){return X(n)},{initial:!0})}function tt(e,r){var t=typeof e=="function"?e():e;if(!t)throw new ValidationError(typeof r=="function"?r():r)}var De={title:"SpeedForm",help:"",tips:"",status:"idle",dirty:be(["fields"]),validate:Te({entry:["fields"]}),readonly:!1,enable:!0,visible:!0,actions:{}},$e=s(83038);function Ge(e){var r={};return Object.entries(e||{}).forEach(function(t){var n=b()(t,2),u=n[0],a=n[1];P(a)||E(a)||x(a)||(r[u]=a)}),r}function Ne(e){return Object.assign({type:"submit",help:"",title:"",dirty:!1,validate:!0,visible:!0,enable:!0,readOnly:!0},Ge(e))}var I=d.memo(function(e){return(0,p.jsx)(p.Fragment,{children:typeof e.children=="function"&&e.children(e.submitProps)})},function(e,r){return Object.entries(e.submitProps).every(function(t){var n=b()(t,2),u=n[0],a=n[1];return["children","render"].includes(u)?!0:a===r.submitProps[u]})}),Ie=(0,$e.zo)(function(e,r){var t,n,u=r.className,a=e.visible;return(0,p.jsx)("input",{className:u,style:Object.assign({display:a?"inline-block":"none"},e.style),type:(t=e.type)!==null&&t!==void 0?t:"submit",value:(n=e.title)!==null&&n!==void 0?n:"\u63D0\u4EA4"})},{minWidth:"80px",cursor:"pointer",boxSizing:"border-box",margin:"2px",transition:"filter 0.3s","&:hover":{filter:"brightness(1.2)"}});function Z(e,r,t){var n=Object.assign({preventDefault:!1},r);function u(a){var i=e.useState(),o=b()(i,1),c=o[0],f=a.scope,v=(0,l.getValueByPath)(c,f),m=Ne(v),h=typeof a.render=="function"?1:Array.isArray(a.children)?2:typeof a.children=="function"?3:0;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Ie,A()({visible:h==0},n)),h===1?(0,p.jsx)(I,{submitProps:m,children:a.render}):h===2?a.children.map(function(g){return(0,p.jsx)(I,{submitProps:m,children:g})}):(0,p.jsx)(I,{submitProps:m,children:a.children})]})}return d.memo(u,function(a,i){return a.name===i.name})}function Be(e,r,t){return Z(e,A()({type:"submit",title:"\u63D0\u4EA4",style:{borderRadius:"4px",padding:"8px",background:"#1c8ceb",border:"1px solid #1c8ceb",color:"#fff"}},r),t)}function Me(e,r,t){return Z(e,A()({type:"reset",title:"\u91CD\u7F6E",style:{borderRadius:"4px",padding:"8px",background:"#eee",border:"1px solid #bbb"}},r),t)}function Ue(e,r,t,n){e.length>=2&&e[0]==C&&e[e.length-1]==V&&(t.scope||(t.scope="value"),t.depends||(t.depends=[]),t.depends.push([].concat(O()(e.slice(0,-1)),["value"])),t.initial=null,t.group=V,t.enable=!0)}function We(e){(0,pe.w)(e,De)}function Le(e,r,t){e.length>1&&e[e.length-1]=="execute"&&(t.immediate=!1,t.scope=[C],t.noReentry=!0)}function we(e,r,t){e.length>0&&e[0]==C&&t.depends&&t.depends.forEach(function(n,u){Array.isArray(n)&&n.length>0&&n[0]!=C?t.depends[u]=[C].concat(O()(n)):typeof n=="string"&&!n.startsWith("".concat(C,"."))&&(t.depends[u]="".concat(C,".").concat(n))})}function He(e){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;e.setEnableMutate(r)}}function k(e,r){var t=(0,L.w)({getFieldName:function(a){return a.length>0?a[a.length-1]==="value"?a.slice(0,-1).join("."):a.join("."):""},singleton:!0,validAt:"once"},r);We(e);var n=(0,l.createStore)({state:e},{debug:t.debug,singleton:t.singleton,computedThis:function(){return l.ComputedScopeRef.Root},computedScope:function(){return[C]},onCreateComputed:function(a,i,o){Ue(a,i,o,t),we(a,i,o),Le(a,i,o)},onComputedContext:function(a,i){var o=i.computedType,c=i.contextType,f=i.valuePath;if(o==="Computed"&&c=="scope"&&f.length>0&&f[0]==C)return a.fields},onCreateComputedObject:function(a,i){X(a)&&(i.options.enable=t.validAt==="once")}});return{Form:Ke.call(t,n),Field:W.call(t,n),Group:H.call(t,n),Action:Y(n,{},t),Submit:Be(n,{},t),Reset:Me(n,{},t),getAction:G,useAction:Q(n),fields:U(function(){return n.state.fields}),actions:U(function(){return n.state.actions}),state:n.state,useState:n.useState,freeze:He(n),load:fe(n,t),getValues:de(n,t),computedObjects:n.computedObjects,watchObjects:n.watchObjects,store:n,validate:function(){var u=T()(S()().mark(function i(){return S()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",n.computedObjects.runGroup(V));case 1:case"end":return c.stop()}},i)}));function a(){return u.apply(this,arguments)}return a}()}}function Ke(e){return d.forwardRef(function(r,t){var n=r.children,u=(0,d.useCallback)(function(i){},[]),a=(0,d.useCallback)(function(i){},[]);return(0,p.jsx)("form",A()(A()({ref:t,className:"speedform-form"},r),{},{onSubmit:u,onReset:a,children:n}))})}function ze(e,r){var t=(0,d.useRef)();return t.current==null&&(t.current=k(e(),r)),t.current}}}]);