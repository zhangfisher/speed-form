(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[696],{17656:function(_,r,e){"use strict";e.d(r,{FZ:function(){return D},PH:function(){return O},dA:function(){return I}});var t=e(90393),u=e.n(t),o=e(79664),P=e.n(o),s=e(7392),i=e.n(s),d=e(70125),b=e.n(d),S=e(96820);function I(y,L,U,E){return Object.entries(y||{}).reduce(function(c,v){var K=b()(v,2),k=K[0],x=K[1];return(0,S.$)(x)?c[k]=D(x,L.state,U):c[k]=O(x,L.state,U),c},{})}function O(y,L,U){return U.action(L)()(function(){var E=i()(u()().mark(function c(v){var K,k,x;return u()().wrap(function($){for(;;)switch($.prev=$.next){case 0:K=v.payload,k=v.draft,x=y.apply(void 0,P()(K)),x instanceof Function&&x(k);case 3:case"end":return $.stop()}},c)}));return function(c){return E.apply(this,arguments)}}())}function D(y,L,U){return U.action(L)()(function(){var E=i()(u()().mark(function c(v){var K,k,x;return u()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return K=v.setState,k=v.payload,$.next=3,y.apply(void 0,P()(k));case 3:x=$.sent,x instanceof Function&&K(x);case 5:case"end":return $.stop()}},c)}));return function(c){return E.apply(this,arguments)}}())}},47791:function(_,r,e){"use strict";e.d(r,{D:function(){return de},F:function(){return v}});var t=e(90393),u=e.n(t),o=e(7392),P=e.n(o),s=e(70125),i=e.n(s),d=e(79664),b=e.n(d),S=e(23524),I=e(3101),O=e(51703),D=e(96820),y=e(64642),L=e(71660),U=e(23893),E=e(45727);function c(l,g){var M=g.input,p=g.type,f=g.computedContext,A=g.computedOptions,C=g.storeOptions,R=l;if(typeof C.onComputedContext=="function"){var B=C.onComputedContext.call(l,l,{type:p,valuePath:f.fullKeyPath});B!==void 0&&(R=B)}var W=f.keyPath,T=f.fullKeyPath,j=K(l,p=="context"?A.context:A.scope,p=="context"?C.computedThis:C.computedScope);try{if(j===I.K.Current)return(0,y.MU)(l,W);if(j===I.K.Parent)return(0,y.MU)(l,T.slice(0,T.length-2));if(j===I.K.Root)return R;if(j===I.K.Depends)return Array.isArray(M)?M:[];if(typeof j=="string")if(j.startsWith("@")){var n=(0,y.MU)(l,[].concat(b()(W),b()(j.substring(1).split("."))));return(0,y.MU)(l,n)}else return(0,y.MU)(l,[].concat(b()(W),b()(j.split("."))));else if(Array.isArray(j))if(j.length>0&&j[0].startsWith("@")){var a=(0,y.MU)(l,[].concat(b()(j[0].substring(1).split(".")),b()(j.slice(1))));return(0,y.MU)(l,a)}else return(0,y.MU)(l,j);else if(typeof j=="number"){var h=j>T.length-2?T.length-j-1:0;return(0,y.MU)(l,T.slice(0,h))}else return l}catch(m){return l}}function v(l,g){if(typeof l!="function")throw new Error("getter must be a function");var M=(0,U.w)({async:!1,timeout:0,depends:[],scope:I.K.Current,toComputedResult:I.K.Self,immediate:!0},g),p=M.async===!0||(0,D.$)(l);p&&Array.isArray(M.depends)&&M.depends.length==0&&console.warn("async computed function should specify depends"),M.async=p;var f=function(){return{getter:l,options:M}};return f.__COMPUTED__=p?"async":"sync",f}function K(l,g,M){var p=g==null?M:g;if(typeof p=="function")try{p=p.call(l,l)}catch(f){}return p==null?M==null?I.K.Root:M:p}function k(l,g){var M="";return typeof g=="function"?M=g(l):typeof g=="string"?M=g:M=(0,y.UQ)(l),M}function x(l,g,M,p,f){var A=g.fullKeyPath,C=g.value,R=g.parent,B=f.onCreateComputed;if(!(R&&!Object.hasOwn(R,A[A.length-1]))){if(typeof B=="function"&&typeof C=="function"){var W=B.call(l,A,C,p);typeof W=="function"&&(C=W)}f.log("Create sync computed: ".concat(A.join(".")));var T=k(A,p.id),j=l.mutate({fn:function(a,h){var m=h.input,w=c(a,{input:m,computedOptions:p,computedContext:g,storeOptions:f,type:"context"}),F=c(a,{input:m,computedOptions:p,computedContext:g,storeOptions:f,type:"scope"}),Z=p.initial;try{Z=C.call(w,F)}catch(ee){if(typeof p.onError=="function")try{var J;(J=p.onError)===null||J===void 0||J.call(w,ee)}catch(ae){}}(0,O.Y6)(a,A,Z)},desc:T,checkDeadCycle:!1});g.replaceValue((0,O.Jy)(j.snap,A)),M[T]=j}}function X(l,g,M){return Object.assign({value:void 0,loading:!1,timeout:0,retry:0,error:null,progress:0,run:(0,S.markRaw)((0,y.H9)(function(){return l.runMutateTask(g,{extraArgs:{a:1}})}))},M)}function $(l,g,M,p,f){var A=X(l,p,f),C=(0,O.Jy)(g,M);Object.assign(C,A,f)}function Q(l,g,M){var p=Object.assign({},M),f=p.max,A=f===void 0?100:f,C=p.min,R=C===void 0?0:C,B=p.value,W=B===void 0?0:B;return l(function(T){return(0,O.Y6)(T,[].concat(b()(g),["progress"]),W)}),{value:function(j){j>A&&(j=A),j<R&&(j=R),l(function(n){return(0,O.Y6)(n,[].concat(b()(g),["progress"]),j)})},end:function(){this.value(A)}}}function Y(l,g,M){l(function(p){Object.entries(M).forEach(function(f){var A=i()(f,2),C=A[0],R=A[1];(0,O.Y6)(p,[].concat(b()(g),[C]),R)})})}function ve(l,g,M){return le.apply(this,arguments)}function le(){return le=P()(u()().mark(function l(g,M,p){var f,A,C,R,B,W,T,j,n,a,h,m,w,F,Z,J,ee,ae,re,z,q,G;return u()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:f=p.input,A=p.computedOptions,C=p.computedContext,R=p.storeOptions,B=p.setState,W=p.computedResultPath,T=c(g,{input:f,computedOptions:A,computedContext:C,storeOptions:R,type:"context"}),j=c(g,{input:f,computedOptions:A,computedContext:C,storeOptions:R,type:"scope"}),n=C.fullKeyPath,a=A.timeout,h=a===void 0?0:a,m=A.retry,w=m===void 0?[0,0]:m,F=Array.isArray(w)?w:[Number(w),0],Z=i()(F,2),J=Z[0],ee=Z[1],z={onTimeout:function(H){return ae=H},getProgressbar:function(H){return Q(B,n,H)},getSnap:function(H){return(0,S.getSnap)(H,!1)},onCancel:function(H){return re=H}},q=u()().mark(function ne(){var H,ue,_e,N,Oe,se,he,pe,me,ce,ye,ie,be;return u()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return _e=!1,N=!1,Oe=!1,se={},V.prev=3,he=Array.isArray(h)?h:[h,0],pe=i()(he,2),me=pe[0],ce=me===void 0?0:me,ye=pe[1],ie=ye===void 0?0:ye,Y(B,W,{loading:!0,error:null,retry:0,timeout:ie>1?ie:ce,progress:0}),ce>0&&(H=setTimeout(function(){N=!0,typeof ae=="function"&&ae(),_e||(clearInterval(ue),Y(B,W,{loading:!1,error:"TIMEOUT",timeout:0}))},ce),ie>1&&(ue=setInterval(function(){Y(B,W,{timeout:ie--}),ie===0&&clearInterval(ue)},ce/ie))),V.next=9,M.call(T,j,z);case 9:be=V.sent,N||Object.assign(se,{value:be,error:null,timeout:0}),V.next=19;break;case 13:if(V.prev=13,V.t0=V.catch(3),_e=!0,typeof A.onError=="function")try{A.onError.call(T,V.t0)}catch(ge){}N||Object.assign(se,{error:V.t0.message,timeout:0}),J>0&&Object.assign(se,{retry:J-G});case 19:return V.prev=19,clearTimeout(H),clearInterval(ue),Object.assign(se,{loading:!1}),!_e&&!N&&Object.assign(se,{error:null}),Y(B,W,se),V.finish(19);case 26:if(!_e){V.next=30;break}if(!(J>0&&ee>0)){V.next=30;break}return V.next=30,(0,E.g)(ee);case 30:case"end":return V.stop()}},ne,null,[[3,13,19,26]])}),G=0;case 9:if(!(G<J+1)){te.next=14;break}return te.delegateYield(q(),"t0",11);case 11:G++,te.next=9;break;case 14:case"end":return te.stop()}},l)})),le.apply(this,arguments)}function fe(l,g,M,p){var f=g.fullKeyPath,A=g.value,C=g.parent,R=p.onCreateComputed;if(!(C&&!Object.hasOwn(C,f[f.length-1]))){var B=A(),W=B.getter,T=B.options;if(T.async=!0,typeof R=="function"&&typeof W=="function"){var j=R.call(l,f,W,T);typeof j=="function"&&(W=j)}var n=T.depends,a=T.initial,h=T.toComputedResult,m=h===void 0?"self":h,w=T.immediate,F=T.noReentry,Z=F===void 0?!1:F,J=!1,ee=(0,L.d)(m,{self:f,root:[],parent:f.slice(0,f.length-2),current:f.slice(0,f.length-1),Array:m,String:[].concat(b()(f.slice(0,f.length-1)),[String(m).split(".")])},{defaultValue:f}),ae=(n||[]).map(function(z){return Array.isArray(z)?z:z.split(".")}),re=k(f,T.id);return p.log("Create async computed: ".concat(f.join(".")," (depends=").concat((0,y.UQ)(ae),")")),M[re]=l.mutate({deps:function(q){return(n||[]).map(function(G){return(0,O.Jy)(q,Array.isArray(G)?G:G.split("."))})},fn:function(q,G){if(G.isFirstCall)if(m=="self")(0,O.Y6)(q,f,X(l,re,{value:a}));else{$(l,q,ee,re,{value:a});var oe=(0,O.Jy)(q,f.slice(0,f.length-1));delete oe[f[f.length-1]]}},task:function(){var z=P()(u()().mark(function G(oe){var te,ne,H,ue;return u()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:if(te=oe.draft,ne=oe.setState,H=oe.input,ue=oe.extraArgs,console.log("extraArgs=",ue),!(Z&&J)){N.next=5;break}return p.log("Reentry async computed: ".concat(f.join(".")),"warn"),N.abrupt("return");case 5:return J=!0,N.prev=6,N.next=9,ve(te,W,{computedResultPath:ee,input:H,computedOptions:T,computedContext:g,storeOptions:p,setState:ne});case 9:return N.abrupt("return",N.sent);case 10:return N.prev=10,J=!1,N.finish(10);case 13:case"end":return N.stop()}},G,null,[[6,,10,13]])}));function q(G){return z.apply(this,arguments)}return q}(),immediate:w,desc:re,checkDeadCycle:!1}),M[re]}}function de(l,g,M,p){var f={};l.setOnReadHook(function(A){var C=A.fullKeyPath,R=A.value,B=C.join(".");if(typeof R=="function"&&!f[B]&&!(0,y.Mk)(R))if(f[B]=!0,R.__COMPUTED__=="async"){var W=fe(l,A,M,p);W&&A.replaceValue((0,O.Jy)(W.snap,C))}else if((0,D.$)(R)){A.value=function(){return{getter:R,options:{depends:[],initial:void 0,immediate:!0,context:p.computedThis}}};var T=fe(l,A,M,p);T&&A.replaceValue((0,O.Jy)(T.snap,C))}else x(l,A,M,{},p)})}},24696:function(_,r,e){"use strict";e.r(r),e.d(r,{ComputedScopeRef:function(){return t.K},computed:function(){return u.F},createAction:function(){return d.PH},createActions:function(){return d.dA},createAsyncAction:function(){return d.FZ},createComputed:function(){return u.D},createStore:function(){return t.M},getValueByPath:function(){return S.MU},watch:function(){return b.Y}});var t=e(3101),u=e(47791),o=e(11037),P=e.n(o),s={};for(var i in o)["default","getValueByPath","ComputedScopeRef","createStore","computed","createComputed"].indexOf(i)<0&&(s[i]=function(I){return o[I]}.bind(0,i));e.d(r,s);var d=e(17656),b=e(73673),S=e(64642)},3101:function(_,r,e){"use strict";e.d(r,{K:function(){return I},M:function(){return D}});var t=e(39114),u=e.n(t),o=e(70125),P=e.n(o),s=e(23524),i=e(17656),d=e(47791),b=e(20458),S=e(64642),I=function(y){return y.None="none",y.Root="root",y.Current="current",y.Parent="parent",y.Depends="depends",y.Self="self",y}({});function O(y){return function(L,U){var E=y.useState;if(L==null)return E();var c=E(),v=P()(c,2),K=v[0],k=v[1],x=L(K),X=void 0;return typeof U=="function"&&(X=function(Q){k(function(Y){U.call(Y,Y,Q)})}),[x,X]}}function D(y,L){var U=Object.assign({id:Math.random().toString(16).substring(2),debug:!0,computedThis:I.Root,computedScope:I.Current,singleton:!0},L);U.log=function(){U.debug&&S.cM.apply(void 0,arguments)};var E=U.singleton?y:(0,b.I)(y),c={};return(0,s.model)(function(v){var K=v.sharex(E.state,{stopArrDep:!1,moduleName:U.id}),k=(0,i.dA)(E.actions,K,v,U);(0,d.D)(K,v,c,U);var x=O(K);return u()(u()({actions:k},K),{},{state:K.reactive,useState:x,computedObjects:{}})})}},11037:function(){},64642:function(_,r,e){"use strict";e.d(r,{H9:function(){return i},MU:function(){return P},Mk:function(){return d},UQ:function(){return I},cM:function(){return b}});var t=e(79664),u=e.n(t),o=e(51703);function P(O,D){var y=[];try{return typeof D=="function"&&(D=D.call(O,O)),y=Array.isArray(D)?D:typeof D=="string"?D.split("."):[],y.length>0?(0,o.Jy)(O,y):O}catch(L){return O}}var s=Symbol("SKIP_COMPUTED");function i(O){return O[s]=!0,O}function d(O){return O[s]===!0}function b(O){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"log",y=typeof O=="function"?O():O;try{var L;(L=console)[D].apply(L,["[helux-store] "].concat(u()(Array.isArray(y)?y:[y])))}catch(U){}}function S(O,D){return D==="self"?O:D==="root"?[]:D==="parent"?O.slice(0,-2):D==="current"?O.slice(0,-1):typeof D=="string"?[].concat(_toConsumableArray(O.slice(0,-1)),[D.split(".")]):Array.isArray(D)?D:O}function I(O){return O.map(function(D){return Array.isArray(D)?D.join("."):D}).join("_")}},73673:function(_,r,e){"use strict";e.d(r,{Y:function(){return u}});var t=e(23524);function u(o,P,s){var i=(0,t.watch)(function(){o()},{immediate:s==null?void 0:s.immediate,deps:P}),d=i.unwatch;return d}},45727:function(_,r,e){"use strict";var t=e(36057);e(99096),Object.defineProperty(r,"g",{enumerable:!0,get:function(){return t.a}})},58374:function(_,r){"use strict";function e(t,...u){if(u.length===0)return t;let o=u.map((P,s)=>{let i=Object.entries(P||{});return i.some(([d,b])=>b===void 0)?i.reduce((d,[b,S])=>(S!==void 0&&(d[b]=S),d),{}):P});return Object.assign(t,...o)}r.a=e},39533:function(_,r,e){"use strict";var t=e(9706);function u(o){return o?!!(Array.isArray(o)||o instanceof Set||o instanceof Map||t.a(o)):!1}r.a=u},7e3:function(){"use strict"},25501:function(_,r){"use strict";function e(t){if(typeof t!="function")return!1;if(Object.prototype.toString.call(t)==="[object GeneratorFunction]"||Object.getPrototypeOf(t)===Object.getPrototypeOf(function*(){})||t.constructor.name==="GeneratorFunction")return!0;let u=t.toString();return!!/^\s*(?:function)?\*/gm.test(u)}r.a=e},51449:function(_,r,e){"use strict";var t=e(95410),u=e(9706),o=e(92994);function P(s){if(o.a(s)||typeof s=="boolean"||typeof s=="function"||s instanceof Error)return!1;if(s==null||s==null||Array.isArray(s)&&s.length==0||u.a(s)&&Object.keys(s).length==0||typeof s=="string"&&s.trim()=="")return!0;try{if(t.a(s)&&s.size==0)return!0}catch(i){}return!1}r.a=P},98115:function(_,r){"use strict";function e(t){if(typeof t!="object")return!1;try{return t.constructor.toString().startsWith("class")}catch(u){return!1}}r.a=e},95410:function(_,r){"use strict";function e(t){return t!=null&&typeof t[Symbol.iterator]=="function"&&typeof t!="string"}r.a=e},9706:function(_,r){"use strict";function e(t){if(typeof t!="object"||t===null)return!1;var u=Object.getPrototypeOf(t);if(u===null)return!0;for(var o=u;Object.getPrototypeOf(o)!==null;)o=Object.getPrototypeOf(o);return u===o}r.a=e},99096:function(_,r,e){"use strict";var t=Object.defineProperty,u=Object.defineProperties,o=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,d=(E,c,v)=>c in E?t(E,c,{enumerable:!0,configurable:!0,writable:!0,value:v}):E[c]=v,b=(E,c)=>{for(var v in c||(c={}))s.call(c,v)&&d(E,v,c[v]);if(P)for(var v of P(c))i.call(c,v)&&d(E,v,c[v]);return E},S=(E,c)=>u(E,o(c)),I=(E=>e(2109))(function(E){return e(2109).apply(this,arguments)}),O=(E,c,v)=>{if(!c.has(E))throw TypeError("Cannot "+v)},D=(E,c,v)=>(O(E,c,"read from private field"),v?v.call(E):c.get(E)),y=(E,c,v)=>{if(c.has(E))throw TypeError("Cannot add the same private member more than once");c instanceof WeakSet?c.add(E):c.set(E,v)},L=(E,c,v,K)=>(O(E,c,"write to private field"),K?K.call(E,v):c.set(E,v),v),U=(E,c,v)=>new Promise((K,k)=>{var x=Q=>{try{$(v.next(Q))}catch(Y){k(Y)}},X=Q=>{try{$(v.throw(Q))}catch(Y){k(Y)}},$=Q=>Q.done?K(Q.value):Promise.resolve(Q.value).then(x,X);$((v=v.apply(E,c)).next())});r.a=b,r.b=S,r.c=I,r.d=D,r.e=y,r.f=L,r.g=U},74620:function(_,r){"use strict";function e(t,u){if(t===void 0)return!1;if(t===u)return!0;if(!("__proto__"in t))return!1;let o=t.__proto__;for(;o!=null;){if(o===u||o.name===u.name)return!0;o=o.__proto__}return!1}r.a=e},45884:function(_,r){"use strict";function e(t){return t&&typeof t=="function"}r.a=e},20391:function(_,r,e){"use strict";var t=e(68223),u=e(45884),o=e(39533);function P(s){if(s==null||t.a(s)||u.a(s))return s;if(Array.isArray(s))return s.map(i=>o.a(i)?P(i):i);if(s instanceof Set){let i=new Set;for(let d of s.values())o.a(d)?i.add(P(d)):i.add(d);return i}else if(s instanceof Map){let i=new Map;for(let[d,b]of s.entries())o.a(b)?i.set(d,P(b)):i.set(d,b);return i}else if(typeof s=="object"){let i={};return Object.entries(s).forEach(([d,b])=>{o.a(b)?i[d]=P(b):i[d]=b}),i}else return s}r.a=P},67991:function(_,r){"use strict";function e(t){return typeof t=="function"&&(t.$$isAsync||Object.prototype.toString.call(t)==="[object AsyncFunction]"||t.constructor&&t.constructor.name==="AsyncFunction")}r.a=e},92994:function(_,r){"use strict";function e(t,u=!1){if(typeof t=="number")return!0;if(typeof t!="string"||u)return!1;try{if(t.includes(".")){let o=parseFloat(t);return t.endsWith(".")?!isNaN(o)&&String(o).length===t.length-1:!isNaN(o)&&String(o).length===t.length}else{let o=parseInt(t);return!isNaN(o)&&String(o).length===t.length}}catch(o){return!1}}r.a=e},59176:function(_,r,e){"use strict";var t=e(9706);function u(o){let P=typeof o;if(o==="undefined"||o===null||P==="string"||P==="boolean"||P==="number")return!0;if(P.includes("function"))return!1;if(Array.isArray(o)){if(o.some(s=>!u(s)))return!1}else if(t.a(o)&&Object.values(o).some(s=>!u(s)))return!1;return!0}r.a=u},36057:function(_,r,e){"use strict";var t=e(99096);function u(o){return t.g(this,null,function*(){return new Promise((P,s)=>setTimeout(P,o))})}r.a=u},68223:function(_,r){"use strict";function e(t){return t==null||t==null||typeof t=="string"||typeof t=="number"||typeof t=="boolean"||typeof t=="symbol"||typeof t=="bigint"}r.a=e},12282:function(_,r){"use strict";function e(t){try{return typeof t=="object"&&t.constructor===Object}catch(u){return!1}}r.a=e},36715:function(_,r){"use strict";function e(t,u,o){let P=o==null?void 0:o.defaultValue,s={Number:"number",String:"string",Function:"function",Object:"object",Boolean:"boolean"};o!=null&&o.typeMatchers&&Object.assign(s,o.typeMatchers);let i=P;for(let[d,b]of Object.entries(u))if(Array.isArray(t)){if(d.endsWith("Array")){let S=s[d.slice(0,-5)];if(Array.isArray(t)&&t.every(I=>typeof I==S)){i=b;break}}}else if(d==t&&typeof d==typeof t){i=b;break}else if(d==t&&typeof t=="number"){i=b;break}else if(d in s){let S=s[d];if(typeof S=="function"&&S(t)){i=b;break}else if(S==typeof t){i=b;break}}else if(d=="Array"){if(Array.isArray(t)){i=b;break}}else if(d.endsWith("Array")){let S=s[d.slice(0,-5)];if(Array.isArray(t)&&t.every(I=>typeof I==S)){i=b;break}}return typeof i=="function"?i(t):i}r.a=e},61260:function(_,r){"use strict";function e(t){let u=!1;if(typeof t=="function"&&t.prototype)try{t.arguments&&t.caller}catch(o){u=!0}return u}r.a=e},13090:function(_,r){"use strict";function e(t){if(!t)return!1;if(typeof t=="number")return!0;if(typeof t!="string")return!1;try{let u=parseInt(t);return!isNaN(u)&&String(u).length===t.length}catch(u){return!1}}r.a=e},71660:function(_,r,e){"use strict";var t=e(36715);e(99096),Object.defineProperty(r,"d",{enumerable:!0,get:function(){return t.a}})},23893:function(_,r,e){"use strict";var t=e(58374);e(99096),Object.defineProperty(r,"w",{enumerable:!0,get:function(){return t.a}})},20458:function(_,r,e){"use strict";var t=e(20391);e(68223),e(45884),e(7e3),e(25501),e(98115),e(13090),e(12282),e(51449),e(95410),e(74620),e(59176),e(39533),e(67991),e(61260),e(9706),e(92994),e(99096),Object.defineProperty(r,"I",{enumerable:!0,get:function(){return t.a}})},96820:function(_,r,e){"use strict";var t=e(67991);e(99096),Object.defineProperty(r,"$",{enumerable:!0,get:function(){return t.a}})},2109:function(_){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,r.id=2109,_.exports=r},45466:function(_,r,e){var t=e(16487);function u(o){if(Array.isArray(o))return t(o)}_.exports=u,_.exports.__esModule=!0,_.exports.default=_.exports},52748:function(_){function r(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}_.exports=r,_.exports.__esModule=!0,_.exports.default=_.exports},16207:function(_){function r(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}_.exports=r,_.exports.__esModule=!0,_.exports.default=_.exports},79664:function(_,r,e){var t=e(45466),u=e(52748),o=e(91229),P=e(16207);function s(i){return t(i)||u(i)||o(i)||P()}_.exports=s,_.exports.__esModule=!0,_.exports.default=_.exports},51703:function(_,r,e){"use strict";e.d(r,{Jy:function(){return C},Y6:function(){return R}});function t(n,a){n.includes(a)||n.push(a)}function u(n,a){const h=n.indexOf(a);h>=0&&n.splice(h,1)}function o(n){return Array.from(new Set(n))}function P(n,a){let h=!1;for(const m of n)if(a.includes(m)){h=!0;break}return h}function s(n,a){let h="";const m=n.length;for(let w=0;w<m;w++){const F=n[w];if(a.startsWith(F)){h=F;break}}return h}function i(n,a){if(!n)return[];const h=n(a);return Array.isArray(h)?h:[h]}var d=function(){if(typeof globalThis!="undefined")return globalThis;if(typeof global!="undefined")return global;if(typeof window!="undefined")return window;if(this!==void 0)return this;throw new Error("no globalThis")}(),b=null;function S(...n){}var I=null;function O(...n){return n}function D(...n){return[]}var y=Object.prototype.toString,L="[object Map]";function U(n){return y.call(n)===L}function E(n){return n===Number.MAX_SAFE_INTEGER}function c(){return!(!b&&d.name!=="previewFrame"&&!d.BrowserFS)}function v(n){return n&&typeof n=="object"&&!Array.isArray(n)}function K(n){return n&&typeof n=="object"}function k(n){return typeof n=="function"}function x(n){return b?Object.prototype.toString.call(n)==="[object AsyncFunction]":!0}function X(n){return typeof n=="symbol"}function $(n){if(!n)return!1;const a=typeof n;return(a==="object"||a==="function")&&k(n.then)}function Q(n){try{return n.test,!1}catch(a){return!0}}function Y(){return typeof Proxy=="function"}function ve(n,a=!1,h=""){var F;let m=n,w=!1;if(n instanceof Error&&(w=!0,m=n.message),c()&&n&&((F=d.alert)==null||F.call(d,`${h}${m}, see details in console.`)),console.error(n),a)throw w?n:new Error(String(n))}function le(n,a=0){a===0?(console.error(n),c()&&console.trace(n)):a===1?console.error(n):console.warn(n)}function fe(n){return E(n)?1:n+1}var de=!!Reflect,l=Object.prototype.hasOwnProperty;function g(n,a){return de?Reflect.has(n,a):l.call(n,a)}function M(n,a,h){let m=n[a];return m||(m=n[a]=h),m}function p(n,a,h){let m=n.get(a);return m||(n.set(a,h),m=h),m}function f(n,a){let h="";for(const m in n)if(a.startsWith(m)){h=m;break}return h}function A(n,a){const h=n.get(a);if(h!==void 0)return h;const m=n.get(Number(a)||a);return m!==void 0?m:void 0}function C(n,a){let h,m=n;return a.forEach(w=>{h=U(m)?A(m,w):m[w],m=h}),h}function R(n,a,h){let m=n;const w=a.length-1;a.forEach((F,Z)=>{const J=U(m);if(Z===w)return void(J?m.set(F,h):m[F]=h);m=J?A(m,F):m[F]})}function B(){return le("changing shared state is invalid"),!0}function W(n){return n}function T(n,a){return`${a}/${n}`}function j(n){return n&&Y()}}}]);
