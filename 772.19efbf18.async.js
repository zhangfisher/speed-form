"use strict";(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[772],{65772:function(We,B,c){c.r(B),c.d(B,{ActionChildren:function(){return D},FieldChildren:function(){return V},ValidationError:function(){return Se},action:function(){return J},createActionComponent:function(){return Y},createFieldComponent:function(){return H},createFieldGroupComponent:function(){return z},createForm:function(){return ze},createUseActionHook:function(){return ve},getAction:function(){return $},submit:function(){return de}});var X=c(79664),O=c.n(X),Z=c(70125),j=c.n(Z),k=c(39114),C=c.n(k),f=c(70079),Ye=c(26851),x=c(13192);function Je(e){var r=_typeof(e);return e==null||r=="boolean"||r=="number"||r=="string"||r==null}function I(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=0,t,a=!0,u=function i(){if(t==null){a=!0,clearTimeout(n),n=0;return}try{var l=t;t=void 0,e.apply(void 0,O()(l)),n=setTimeout(function(){return i()},r)}finally{}};return function(){for(var i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];if(r==0)return e.apply(void 0,l);t=l,(a||n==0)&&(a=!1,u())}}function Qe(e,r){var n={};for(var t in e)e[t]!==r[t]&&(n[t]=r[t]);return n}function M(e){return new Proxy({},{get:function(n,t,a){return e()[t]}})}function q(e){return(0,x.P)(e)&&"execute"in e&&(0,x.P)(e.execute)&&"loading"in e.execute}function P(e){return(0,x.P)(e)&&"value"in e}function S(e){return Array.isArray(e)}function E(e){return(0,x.P)(e)&&!P(e)&&!q(e)}var A="fields",Xe="actions",y=c(59664),v=c(35250);function _(e,r,n,t){return Object.assign({name:e,help:"",initial:void 0,oldValue:void 0,visible:!0,required:!1,readonly:!1,validate:null,enable:!0,placeholder:""},C()(C()({},r),{},{sync:n,update:t}))}function ee(e,r){var n=(0,f.useRef)(null);return(0,f.useCallback)(function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;if(n.current==null){var a=e.sync(r);n.current=t==0?a:I(a,t)}return n.current},[])}function ne(e,r){var n=(0,f.useRef)(null),t=(0,f.useState)(0),a=j()(t,2),u=a[0],i=a[1];return(0,f.useCallback)(function(l,o){var s=Object.assign({debounce:0},o),d=s.debounce;if(n.current==null||u!==d){u!==d&&d>0&&i(d);var g=function(m){return function(b){r(typeof m=="function"?function(p){return m.call(p,p.fields)}:function(p){return(0,y.setVal)(p,e,m)}),typeof b.preventDefault=="function"&&b.preventDefault()}};n.current=d>0?g:I(g,d)}return n.current(l)},[])}var V=f.memo(function(e){return(0,v.jsx)(v.Fragment,{children:typeof e.children=="function"&&e.children(e.fieldProps)})},function(e,r){return Object.entries(e.fieldProps).every(function(n){var t=j()(n,2),a=t[0],u=t[1];return["children","sync","update"].includes(a)?!0:u===r.fieldProps[a]})});function H(e){var r=this;return f.memo(function(n){var t=n.name,a=Array.isArray(t)?t:t.split("."),u=[A].concat(O()(a)),i=[A].concat(O()(a));a.push("value"),i.push("value");var l=e.useState(function(b){return(0,y.getVal)(b,u)}),o=j()(l,2),s=o[0],d=o[1],g=ne(i,d),h=ee(e,i),m=_(r.getFieldName(a),s,h,g);return n.render?(0,v.jsx)(V,{fieldProps:m,children:n.render}):Array.isArray(n.children)?n.children.map(function(b){return(0,v.jsx)(V,{fieldProps:m,children:b})}):(0,v.jsx)(V,{fieldProps:m,children:n.children})},function(n,t){return n.name===t.name})}var te=c(90393),F=c.n(te),re=c(7392),R=c.n(re),U=c(23893);function ae(e,r){return(0,f.useCallback)(function(n){r(function(t){n.call(t,(0,y.getVal)(t,e))})},[])}function L(e,r,n){return(0,U.w)({name:e,help:"",visible:!0,required:!1,readonly:!1,validate:!0,enable:!0,update:n},r)}function z(e){var r=this;return f.memo(function(t){var a=t.name,u=e.useState(),i=j()(u,2),l=i[0],o=i[1],s=Array.isArray(a)?a:a.split("."),d=["fields"].concat(O()(s)),g=(0,y.getVal)(l,d),h=ae(d,o),m=(0,f.useState)(function(){return L(r.getFieldName(s),g,h)}),b=j()(m,2),p=b[0],G=b[1];return(0,f.useEffect)(function(){G(L(r.getFieldName(s),g,h))},[g]),Array.isArray(t.children)?t.children.map(function(we){return we(p)}):t.children(p)},function(n,t){return n.name===t.name})}var ue=c(76120);function K(e){return e.value}function T(e){var r={};return Object.entries(e).forEach(function(n){var t=j()(n,2),a=t[0],u=t[1];if(typeof a=="string")if(P(u))r[a]=K(u);else if(E(u)){var i=T(u);i&&Object.keys(i).length>0&&(r[a]=i)}else S(u)&&(r[a]=w(u))}),r}function w(e){var r=[];return e.forEach(function(n){P(n)?r.push(K(n)):E(n)?r.push(T(n)):S(n)?r.push(w(n)):r.push(n)}),r}function ie(e,r,n){var t=Object.assign({},n),a=t.onNotMatch,u=a===void 0?function(){}:a;function i(l,o){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];Object.entries(l).forEach(function(d){var g=j()(d,2),h=g[0],m=g[1];if(typeof h=="string"){var b=[].concat(O()(s),[h]);if(h in o){var p=o[h];P(p)?p.value=m:E(p)?(0,x.P)(m)?i(m,p,b):u(b):S(p)?Array.isArray(m)?i(m,p):u(b):o[h]=m}else u(b)}})}i(e,r)}function Ze(e,r){var n=new FormData,t=Object.assign({getItemName:function(l){return l.join(".")}},r),a=t.getItemName;function u(i,l){if(l!=null){var o=a?a(i):i.join(".");Array.isArray(l)?l.forEach(function(s,d){u([].concat(_toConsumableArray(i),[String(d)]),s)}):isPlainObject(l)?Object.entries(l).forEach(function(s){var d=_slicedToArray(s,2),g=d[0],h=d[1];u([].concat(_toConsumableArray(i),[g]),h)}):n.append(o,l)}}return u([],e),n}function oe(e,r){return function(t,a){var u=Object.assign({validate:!0},a);try{e.setEnableMutate(!1),ie(t,e.state.fields),e.setState(function(i){i.dirty=!1,i.validate=null})}catch(i){console.error(i)}finally{e.setEnableMutate(!0),u!=null&&u.validate&&e.computedObjects.run("@validate")}}}function W(e,r){return T(e)}function le(e,r){return function(t){var a=Object.assign({},t);return W((0,y.getSnap)(e.state).fields)}}function $(e,r){return function(){var n=R()(F()().mark(function t(a){var u;return F()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u=Object.assign({},r,a),l.next=3,e.execute.run(u);case 3:if(!e.execute.error){l.next=7;break}throw new Error(e.execute.error);case 7:return l.abrupt("return",e.execute.result);case 8:case"end":return l.stop()}},t)}));return function(t){return n.apply(this,arguments)}}()}function ce(e,r){var n=(0,f.useCallback)(function(a){var u=Object.assign({},{noReentry:!0,preventDefault:!0},r,a),i=$(e,u);return function(l){i(),l&&u.preventDefault&&typeof l.preventDefault=="function"&&l.preventDefault()}},[e]),t=(0,f.useCallback)(function(a){e.execute.cancel(),a&&typeof a.preventDefault=="function"&&a.preventDefault()},[e]);return[n,t]}function se(e,r){return(0,f.useCallback)(function(n){var t=(0,y.getValueByPath)(e,[].concat(O()(Array.isArray(r)?r:r.split(".")),["execute"]));t.cancel(),n&&typeof n.preventDefault=="function"&&n.preventDefault()},[])}function fe(e,r,n,t){return Object.assign({help:"",title:"",visible:!0,enable:!0},(0,ue.C)(e,"execute"),C()(C()({},e.execute),{},{run:r,cancel:n,ref:t}))}var D=f.memo(function(e){return(0,v.jsx)(v.Fragment,{children:typeof e.children=="function"&&e.children(e.actionProps)})},function(e,r){return Object.entries(e.actionProps).every(function(n){var t=j()(n,2),a=t[0],u=t[1];return["children","run","cancel"].includes(a)?!0:u===r.actionProps[a]})});function Y(e,r,n){function t(a){var u=e.useState(),i=j()(u,1),l=i[0],o=a.name;o.includes(".")||(o="actions.".concat(o));var s=(0,y.getValueByPath)(l,o,"."),d=ce(s,r),g=j()(d,1),h=g[0],m=se(l,o),b=(0,f.useRef)(null),p=fe(s,h,m,b);if(typeof a.render=="function")return(0,v.jsx)(D,{actionProps:p,children:a.render});if(a.children)return Array.isArray(a.children)?a.children.map(function(G){return(0,v.jsx)(D,{actionProps:p,children:G})}):(0,v.jsx)(D,{actionProps:p,children:a.children})}return f.memo(t,function(a,u){return a.name===u.name})}function J(e,r){return(0,y.computed)(function(){var n=R()(F()().mark(function t(a,u){var i;return F()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return i=W((0,y.getSnap)(a,!1).fields),o.next=3,e(i,u);case 3:return o.abrupt("return",o.sent);case 4:case"end":return o.stop()}},t)}));return function(t,a){return n.apply(this,arguments)}}(),[],r)}function de(e,r){return J(function(){var n=R()(F()().mark(function t(a,u){var i;return F()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return i=new FormData,o.next=3,e(i,u);case 3:return o.abrupt("return",o.sent);case 4:case"end":return o.stop()}},t)}));return function(t,a){return n.apply(this,arguments)}}(),r)}function ve(e,r,n){}var me=c(83443);function ge(e){return e.length>1&&e[0]==A&&e[e.length-1]=="value"}function he(e){return(0,y.watch)(function(r,n){var t=n.getSelfValue,a=n.triggerPath,u=n.selfPath;if((0,y.isIncludePath)(e||u,a)){var i=t();if(!i)return!0}},function(r){return ge(r)},{initial:!1})}var pe=c(41176),ye=c.n(pe),be=c(77937),je=c.n(be),Ae=c(65523),Ce=c.n(Ae),Oe=c(7122),Fe=c.n(Oe),xe=c(19108),Pe=c.n(xe),Se=function(e){Ce()(n,e);var r=Fe()(n);function n(t){var a;return je()(this,n),a=r.call(this,t),a.name="ValidationError",a}return ye()(n)}(Pe()(Error));function Ee(e){return e.length>1&&e[0]==A&&(e[e.length-1]==="validate"||e.length>=2&&e[e.length-2]=="validate"&&e[e.length-1]=="result")&&!(e.length==2&&e[1]=="validate")&&!(e.length==3&&e[1]=="validate"&&e[2]=="result")}function Ve(e){var r=Object.assign({},e),n=r.entry;return(0,y.watch)(function(t,a){var u=a.triggerPath,i=a.selfPath,l=a.getCache;if((0,y.isIncludePath)(n||i,u)){var o=l();if(typeof t=="boolean"){var s=u.join(y.OBJECT_PATH_DELIMITER);t?delete o[s]:o[s]=t}return Object.keys(o).length==0}},function(t){return Ee(t)},{initial:!0})}function ke(e,r){var n=typeof e=="function"?e():e;if(!n)throw new ValidationError(typeof r=="function"?r():r)}var Re={title:"SpeedForm",help:"",tips:"",status:"idle",dirty:he(["fields"]),validate:Ve({entry:["fields"]}),readonly:!1,enable:!0,visible:!0},De=c(83038);function Te(e){var r={};return Object.entries(e||{}).forEach(function(n){var t=j()(n,2),a=t[0],u=t[1];P(u)||E(u)||S(u)||(r[a]=u)}),r}function $e(e){return Object.assign({type:"submit",help:"",title:"",dirty:!1,validate:!0,visible:!0,enable:!0,readOnly:!0},Te(e))}var N=f.memo(function(e){return(0,v.jsx)(v.Fragment,{children:typeof e.children=="function"&&e.children(e.submitProps)})},function(e,r){return Object.entries(e.submitProps).every(function(n){var t=j()(n,2),a=t[0],u=t[1];return["children","render"].includes(a)?!0:u===r.submitProps[a]})}),Ne=(0,De.zo)(function(e,r){var n,t,a=r.className,u=e.visible;return(0,v.jsx)("input",{className:a,style:Object.assign({display:u?"inline-block":"none"},e.style),type:(n=e.type)!==null&&n!==void 0?n:"submit",value:(t=e.title)!==null&&t!==void 0?t:"\u63D0\u4EA4"})},{minWidth:"80px",cursor:"pointer",boxSizing:"border-box",margin:"2px",transition:"filter 0.3s","&:hover":{filter:"brightness(1.2)"}});function Q(e,r,n){var t=Object.assign({preventDefault:!1},r);function a(u){var i=e.useState(),l=j()(i,1),o=l[0],s=u.scope,d=(0,y.getValueByPath)(o,s),g=$e(d),h=typeof u.render=="function"?1:Array.isArray(u.children)?2:typeof u.children=="function"?3:0;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Ne,C()({visible:h==0},t)),h===1?(0,v.jsx)(N,{submitProps:g,children:u.render}):h===2?u.children.map(function(m){return(0,v.jsx)(N,{submitProps:g,children:m})}):(0,v.jsx)(N,{submitProps:g,children:u.children})]})}return f.memo(a,function(u,i){return u.name===i.name})}function Ge(e,r,n){return Q(e,C()({type:"submit",title:"\u63D0\u4EA4",style:{borderRadius:"4px",padding:"8px",background:"#1c8ceb",border:"1px solid #1c8ceb",color:"#fff"}},r),n)}function Be(e,r,n){return Q(e,C()({type:"reset",title:"\u91CD\u7F6E",style:{borderRadius:"4px",padding:"8px",background:"#eee",border:"1px solid #bbb"}},r),n)}function Ie(e,r,n){e.length>=2&&e[0]==A&&e[e.length-1]=="validate"&&(n.scope||(n.scope="value"),n.depends||(n.depends=[]),n.depends.push([].concat(O()(e.slice(0,-1)),["value"])),n.initial=null,n.group="validate")}function Me(e){(0,me.w)(e,Re)}function He(e,r,n){e.length>1&&e[e.length-1]=="execute"&&(n.immediate=!1,n.scope=[A],n.noReentry=!0)}function Ue(e,r,n){e.length>0&&e[0]==A&&n.depends&&n.depends.forEach(function(t,a){Array.isArray(t)&&t.length>0&&t[0]!=A?n.depends[a]=[A].concat(O()(t)):typeof t=="string"&&!t.startsWith("".concat(A,"."))&&(n.depends[a]="".concat(A,".").concat(t))})}function Le(e){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;e.setEnableMutate(r)}}function ze(e,r){var n=(0,U.w)({getFieldName:function(u){return u.length>0?u[u.length-1]==="value"?u.slice(0,-1).join("."):u.join("."):""},singleton:!0},r);Me(e);var t=(0,y.createStore)({state:e},{debug:n.debug,singleton:n.singleton,computedThis:function(){return y.ComputedScopeRef.Root},computedScope:function(){return[A]},onCreateComputed:function(u,i,l){Ie(u,i,l),Ue(u,i,l),He(u,i,l)},onComputedContext:function(u,i){var l=i.computedType,o=i.contextType,s=i.valuePath;if(l==="Computed"&&o=="scope"&&s.length>0&&s[0]==A)return u.fields}});return{Form:Ke.call(n,t),Field:H.call(n,t),Group:z.call(n,t),Action:Y(t,{},n),Submit:Ge(t,{},n),Reset:Be(t,{},n),getAction:$,fields:M(function(){return t.state.fields}),actions:M(function(){return t.state.actions}),state:t.state,useState:t.useState,freeze:Le(t),load:oe(t,n),getValues:le(t,n),computedObjects:t.computedObjects,watchObjects:t.watchObjects,store:t,validate:function(){var a=R()(F()().mark(function i(){return F()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",t.computedObjects.runGroup("validate"));case 1:case"end":return o.stop()}},i)}));function u(){return a.apply(this,arguments)}return u}()}}function Ke(e){return f.forwardRef(function(r,n){var t=r.children,a=(0,f.useCallback)(function(i){},[]),u=(0,f.useCallback)(function(i){},[]);return(0,v.jsx)("form",C()(C()({ref:n,className:"speedform-form"},r),{},{onSubmit:a,onReset:u,children:t}))})}}}]);
