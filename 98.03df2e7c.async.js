(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[98],{73894:function(Ce,D,p){"use strict";p.r(D),p.d(D,{$:function(){return C.$},ComputedObjects:function(){return Ve},ComputedScopeRef:function(){return S},OBJECT_PATH_DELIMITER:function(){return b},SKIP_COMPUTED:function(){return te},WatchObject:function(){return Ie},WatchObjects:function(){return Me},asyncComputedObject:function(){return st},computed:function(){return fe},createAsyncComputedMutate:function(){return ie},createComputedMutate:function(){return re},createObject:function(){return C.share},createStore:function(){return St},createUseWatch:function(){return We},createWatch:function(){return de},getSnap:function(){return C.getSnap},getVal:function(){return R},getValueByPath:function(){return P},installComputed:function(){return se},installWatch:function(){return pe},isIncludePath:function(){return Be},isSkipComputed:function(){return we},markRaw:function(){return C.markRaw},setAsyncComputedObject:function(){return rt},setVal:function(){return E},skipComputed:function(){return G},watch:function(){return bt}});var S=function(t){return t.Root="root",t.Current="current",t.Parent="parent",t.Depends="depends",t.Self="self",t}({});function V(t){return(t||["ROOT"]).map(function(e){return Array.isArray(e)?e.join("."):e}).join("_")}function Oe(t,e){var n="";return e.id?n=e.id:n=V(t),n}function xe(t){return t instanceof Error?t:new Error(t)}var b=".",te=Symbol("SKIP_COMPUTED");function we(t){return t[te]===!0}var Ke=p(79664),j=p.n(Ke);function ne(t,e,n){if(!Array.isArray(t))throw new Error("curPath must be an array");return e==="self"?t:e==="root"?[]:e==="parent"?t.slice(0,-2):e==="current"?t.slice(0,-1):typeof e=="string"?e.startsWith("./")?[].concat(j()(t.slice(0,-1)),j()(e.slice(2).split(b))):e.startsWith("../")?ne(t.slice(0,-1),e.slice(3),!0):e.startsWith("/")?(e=e.replace(/^(\/)*/,""),j()(e.split(b))):n?[].concat(j()(t.slice(0,-1)),j()(e.split(b))):j()(e.split(b)):Array.isArray(e)?e:t}function je(t,e){var n=t.get(e);if(n!==void 0)return n;var r=t.get(Number(e)||e);if(r!==void 0)return r}function Ae(t){return toString.call(t)==="[object Map]"}function R(t,e){if(e.length===0)return t;var n,r=t;return e.forEach(function(a){n=Ae(r)?je(r,a):r[a],r=n}),n}function He(t,e,n){return t.map(function(r){return R(e,ne(n,r))})}function Fe(t){return(t||[]).map(function(e){return Array.isArray(e)?e:typeof e=="string"?["/","./","../"].some(function(n){return e.startsWith(n)})?e:e.includes(b)?e.split(b):e.split("."):[]})}var ze=p(26851),Se=p.n(ze);function kt(t){return _typeof(t)=="object"&&t.hasOwnProperty("__COMPUTED__")&&["async","sync"].includes(t.__COMPUTED__)&&t.hasOwnProperty("fn")&&typeof t.fn=="function"&&t.hasOwnProperty("options")&&_typeof(t.options)=="object"}function Et(t){return _typeof(t)=="object"&&["result","loading","timeout","retry","run"].every(function(e){return t.hasOwnProperty(e)})}function Be(t,e){return t.length>e.length?!1:t.every(function(n,r){return n===e[r]})}function Le(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"log",n=typeof t=="function"?t():t instanceof Error?t.stack:t;try{var r;(r=console)[e].apply(r,["[@speedform/reactive] "].concat(j()(Array.isArray(n)?n:[n])))}catch(a){}}function E(t,e,n){var r=t,a=e.length-1;e.forEach(function(i,u){var s=Ae(r);if(u===a){s?r.set(i,n):r[i]=n;return}var c=s?je(r,i):r[i];r=c})}function G(t){return t[te]=!0,t}function P(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:b,r=[];try{return typeof e=="function"&&(e=e.call(t,t)),r=Array.isArray(e)?e:typeof e=="string"?e.split(n):[],r.length>0?R(t,r):t}catch(a){return t}}function Je(t,e){function n(r,a){for(var i in r){var u=r[i];typeof e=="function"&&e({value:u,key:i,parent:r,path:a.concat(i)}),Se()(u)==="object"&&n(u,a.concat(i))}}n(t,[])}function Ye(t,e,n){var r=e==null?n:e;if(typeof r=="function")try{r=r.call(t,t)}catch(a){}return r==null?n==null?S.Root:n:r}function ke(t,e,n){var r=n.draft,a=n.dependValues,i=n.valuePath,u=n.computedType,s=r;if(typeof t.options.onComputedDraft=="function"){var c=t.options.onComputedDraft.call(r,r,{computedType:u,valuePath:i});c!==void 0&&(s=c)}var f=i.length>=1?i.slice(0,i.length-1):[],o=Ye(r,e.scope,t.options.scope&&t.options.scope(u));try{if(o===S.Current)return P(r,f);if(o===S.Parent)return P(r,i.slice(0,i.length-2));if(o===S.Root)return s;if(o===S.Depends)return Array.isArray(a)?a.map(function(v){return typeof v=="function"?v():v}):[];if(typeof o=="string")return P(r,ne(i,o));if(Array.isArray(o))if(o.length>0&&o[0].startsWith("@")){var l=P(r,[].concat(j()(o[0].substring(1).split(b)),j()(o.slice(1))));return P(r,l)}else return P(r,o);else if(typeof o=="number"){var d=o>i.length-2?i.length-o-1:0;return P(r,i.slice(0,d))}else return r}catch(v){return r}}var Ze=p(77937),N=p.n(Ze),Qe=p(41176),x=p.n(Qe),Xe=p(79862),$=p.n(Xe),Ee=function(){function t(e,n,r,a){N()(this,t),$()(this,"options",void 0),this.store=e,this.selfReactiveable=n,this.path=r,this.options=Object.assign({},a)}return x()(t,[{key:"id",get:function(){return this.options.id}},{key:"enable",get:function(){return this.options.enable},set:function(n){this.options.enable=n}},{key:"group",get:function(){return this.options.group}},{key:"async",get:function(){return this.options.async}},{key:"depends",get:function(){return this.options.depends}},{key:"value",get:function(){var n;return R(this.selfReactiveable?(n=this.selfReactiveable)===null||n===void 0?void 0:n.state:this.store.state,this.path)}},{key:"run",value:function(n){var r;return(r=this.store.reactiveable)===null||r===void 0?void 0:r.runComputed(this.id,n)}},{key:"cancel",value:function(){if(this.async)this.value.cancel();else throw new Error("cancel only works for async computed")}}]),t}();function Re(t,e,n,r){var a=n.options.onCreateComputed;if(typeof a=="function"&&typeof e=="function"){var i=a.call(n,t,e,r);r.scope||(r.scope=S.Current),typeof i=="function"&&(e=i)}}function Q(t,e,n){return Object.assign({loading:!1,timeout:0,retry:0,error:null,result:void 0,progress:0,run:t.reactiveable.markRaw(G(function(r){return t.reactiveable.runComputed(e,Object.assign({},r))})),cancel:t.reactiveable.markRaw(G(function(){console.log("cancel")}))},n)}function qe(t,e,n){var r=t.valuePath,a=t.id,i=t.desc,u=t.resultPath,s=t.getter,c=e.selfReactiveable;n.reactiveable.createComputed({onComputed:function(o){var l=o.draft,d=o.values,v=o.options;if(!n.options.enableComputed||!e.enable&&(v==null?void 0:v.enable)!==!0){n.options.log("Sync computed <".concat(i,"> is disabled"),"warn");return}n.options.log("Run sync computed for : ".concat(i)),t.dependValues=d;var g=Object.assign({},e,v),h=l,A=ke(n,g,{draft:l,dependValues:d,valuePath:r,computedType:"Computed"}),k=e.initial;try{k=s.call(h,A),n.emit("computed:done",{path:r,id:a,value:k})}catch(O){n.emit("computed:error",{path:r,id:a,error:O})}c?c.setState(function(O){E(O,u,k)}):E(l,u,k)},options:e})}function re(t,e){var n=t.path,r=t.parent,a=t.value,i=a(),u=i.getter,s=i.options;Re(n,u,e,s);var c=s.selfReactiveable,f=n,o=Oe(n,s),l="".concat(o,"_").concat(n.join(b));e.options.log("Create sync computed: ".concat(l));var d={id:o,desc:l,resultPath:f,isComputedRunning:!1,dependValues:[],valuePath:n,deps:[],getter:u};qe(d,s,e),c||t.replaceValue(R(e.state,n));var v=new Ee(e,c,n,s);return s.save&&e.computedObjects.set(o,v),v}var _e=p(90393),w=p.n(_e),et=p(7392),K=p.n(et),tt=p(70125),F=p.n(tt),C=p(67687),nt=p(10346);function rt(t,e,n,r,a){var i=Q(t,r,a),u=R(e,n);Object.assign(u,i,a)}function at(t,e,n){var r=Object.assign({},n),a=r.max,i=a===void 0?100:a,u=r.min,s=u===void 0?0:u,c=r.value,f=c===void 0?0:c;return t(function(o){return E(o,[].concat(j()(e),["progress"]),f)}),{value:function(l){l>i&&(l=i),l<s&&(l=s),t(function(d){return E(d,[].concat(j()(e),["progress"]),l)})},end:function(){this.value(i)}}}function z(t,e,n){t(function(r){Object.entries(n).forEach(function(a){var i=F()(a,2),u=i[0],s=i[1];E(r,[].concat(j()(e),[u]),s)})})}function it(t,e,n,r){return ae.apply(this,arguments)}function ae(){return ae=K()(w()().mark(function t(e,n,r,a){var i,u,s,c,f,o,l,d,v,g,h,A,k,O,q,y,ve,he,L,Ue,J,T,ye,Ge,W;return w()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:i=n.id,u=n.valuePath,s=n.getter,c=n.resultPath,f=n.dependValues,o=r.timeout,l=o===void 0?0:o,d=r.retry,v=d===void 0?[0,0]:d,g=r.selfReactiveable,h=g?g.setState.bind(g):a.setState,A=e,k=ke(a,r,{draft:e,dependValues:f,valuePath:u,computedType:"Computed"}),O=Array.isArray(v)?v:[Number(v),0],q=F()(O,2),y=q[0],ve=q[1],L=new AbortController,Ue={onTimeout:function(I){return he=I},getProgressbar:function(I){return at(h,u,I)},getSnap:function(I){return(0,C.getSnap)(I,!1)},abortSignal:L.signal,cancel:L.abort},J=!1,z(h,c,{cancel:(0,C.markRaw)(G(function(){return L.abort()}))}),L.signal.addEventListener("abort",function(){J=!0}),T=!1,Ge=w()().mark(function _(){var I,ee,Y,M,Ne,ge,me,Z,be,U;return w()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(T=!1,Y=!1,M={},m.prev=3,Ne=Array.isArray(l)?l:[l,0],ge=F()(Ne,2),me=ge[0],Z=me===void 0?0:me,be=ge[1],U=be===void 0?0:be,z(h,c,{loading:!0,error:null,retry:W>0?y-W:0,timeout:U>1?U:Z,progress:0}),!J){m.next=8;break}throw new Error("Abort");case 8:return Z>0&&(I=setTimeout(function(){Y=!0,typeof he=="function"&&he(),T||(clearInterval(ee),z(h,c,{loading:!1,error:"TIMEOUT",timeout:0}))},Z),U>1&&(ee=setInterval(function(){z(h,c,{timeout:U--}),U===0&&clearInterval(ee)},Z/U))),m.next=11,s.call(A,k,Ue);case 11:if(ye=m.sent,!J){m.next=14;break}throw new Error("Abort");case 14:Y||Object.assign(M,{result:ye,error:null,timeout:0}),m.next=22;break;case 17:m.prev=17,m.t0=m.catch(3),T=!0,Y||Object.assign(M,{error:xe(m.t0).message,timeout:0}),y>0&&Object.assign(M,{retry:y-W});case 22:return m.prev=22,clearTimeout(I),clearInterval(ee),(!T||W==y)&&Object.assign(M,{loading:!1}),!T&&!Y&&Object.assign(M,{error:null}),z(h,c,M),m.finish(22);case 29:if(!T){m.next=33;break}if(!(y>0&&ve>0&&W<y)){m.next=33;break}return m.next=33,(0,nt.g)(ve);case 33:case"end":return m.stop()}},_,null,[[3,17,22,29]])}),W=0;case 14:if(!(W<y+1)){H.next=19;break}return H.delegateYield(Ge(),"t0",16);case 16:W++,H.next=14;break;case 19:J?a.emit("computed:cancel",{path:u,id:i,reason:"abort"}):T?a.emit("computed:error",{path:u,id:i,error:T}):a.emit("computed:done",{path:u,id:i,value:ye});case 20:case"end":return H.stop()}},t)})),ae.apply(this,arguments)}function ut(t,e,n){var r=t.valuePath,a=t.id,i=t.deps,u=t.desc,s=e.selfReactiveable,c=e.initial,f=e.noReentry;n.reactiveable.createAsyncComputed({depends:function(l){return He(i,l,r)},initial:function(l){s?s.setState(function(d){E(d,r,Q(n,a,{result:c}))}):E(l,r,Q(n,a,{result:c}))},onComputed:function(){var o=K()(w()().mark(function d(v){var g,h,A,k,O;return w()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(g=v.draft,h=v.values,A=v.options,!(!n.options.enableComputed||!e.enable&&(A==null?void 0:A.enable)!==!0)){y.next=4;break}return n.options.log("Async computed <".concat(u,"> is disabled"),"warn"),y.abrupt("return");case 4:if(n.options.log("Run async computed for : ".concat(u)),k=Object.assign({},e,A),!(f&&t.isComputedRunning)){y.next=10;break}return n.options.debug&&n.options.log("Reentry async computed: ".concat(u),"warn"),n.emit("computed:cancel",{path:r,id:a,reason:"reentry"}),y.abrupt("return");case 10:return t.isComputedRunning=!0,t.dependValues=h,y.prev=12,y.next=15,it(g,t,k,n);case 15:return O=y.sent,y.abrupt("return",O);case 17:return y.prev=17,t.isComputedRunning=!1,y.finish(17);case 20:case"end":return y.stop()}},d,null,[[12,,17,20]])}));function l(d){return o.apply(this,arguments)}return l}(),options:e})}function ie(t,e){var n=t.path,r=t.parent,a=t.value,i=a(),u=i.getter,s=i.options;s.async=!0,Re(n,u,e,s);var c=s.depends,f=c===void 0?[]:c,o=s.selfReactiveable,l=n;f.length==0&&e.options.log("async computed <".concat(n.join("."),"> should specify depends"),"warn");var d=Oe(n,s),v="".concat(d,"_").concat(n.join(b));e.options.log("Create async computed: ".concat(v," (depends=").concat(f.length==0?"None":V(f),")"));var g={id:d,desc:v,resultPath:l,isComputedRunning:!1,dependValues:[],valuePath:n,deps:f,getter:u};ut(g,s,e),o||t.replaceValue(R(e.state,n));var h=new Ee(e,o,n,s);return s.save&&e.computedObjects.set(d,h),h}function st(t){return Object.assign({loading:!1,timeout:0,retry:0,error:null,result:void 0,progress:0,run:(0,C.markRaw)(G(function(e){})),cancel:(0,C.markRaw)(G(function(){}))},t)}var ue=p(20649);function se(t,e){var n=t.value,r;return n.__COMPUTED__=="async"?r=ie(t,e):n.__COMPUTED__=="sync"?r=re(t,e):(0,ue.$)(n)?(t.value=function(){return{getter:n,options:{depends:[],initial:void 0,immediate:!0,enable:!0}}},r=ie(t,e)):(t.value=function(){return{getter:n,options:{initial:void 0,enable:!0}}},r=re(t,e)),r&&setTimeout(function(){e.emit("computed:created",r)}),r}var ot=p(71698),oe=p.n(ot),ct=p(44114),B=p.n(ct),lt=p(19365),ft=p.n(lt),dt=p(72904),pt=p.n(dt),vt=p(65523),ce=p.n(vt),ht=p(7122),le=p.n(ht),yt=p(19108),Pe=p.n(yt);function fe(t,e,n){if(typeof t!="function")throw new Error("computed getter must be a function");var r=[],a={async:!1,enable:!0,timeout:0,depends:[],immediate:!0,save:!0};if(arguments.length==1)r=[];else if(arguments.length==2)if(Array.isArray(arguments[1]))r=arguments[1];else if(Se()(arguments[1])=="object")Object.assign(a,arguments[1]);else throw new Error("invalid arguments");else arguments.length>=3&&(r=arguments[1],Object.assign(a,arguments[2]));var i=a.async===!0||(0,ue.$)(t)||arguments.length>=2&&Array.isArray(e);a.async=i,a.depends=Fe(r);var u=function(){return{getter:t,options:a}};return u.__COMPUTED__=i?"async":"sync",u}function X(){return Math.random().toString(36).slice(2)}var gt=function(){function t(e,n){N()(this,t)}return x()(t,[{key:"state",get:function(){throw new Error("state not implemented.")}},{key:"useState",value:function(n,r){throw new Error("useState not implemented.")}},{key:"setState",value:function(n){throw new Error("setState not implemented.")}},{key:"createAsyncComputed",value:function(n){throw new Error("createAsyncComputed not implemented.")}},{key:"createComputed",value:function(n){throw new Error("createComputed not implemented.")}},{key:"runComputed",value:function(n,r){throw new Error("runComputed not implemented.")}},{key:"markRaw",value:function(n){throw new Error("makeRaw not implemented.")}},{key:"createWatch",value:function(n,r){throw new Error("createWatch not implemented.")}}]),t}(),Te=function(t){ce()(n,t);var e=le()(n);function n(r,a){var i,u;return N()(this,n),u=e.call(this,r,a),$()(B()(u),"_stateCtx",void 0),u._stateCtx=(0,C.sharex)(r,{stopArrDep:!1,moduleName:(i=a==null?void 0:a.id)!==null&&i!==void 0?i:X(),onRead:function(c){a!=null&&a.onRead&&a.onRead({path:c.fullKeyPath,value:c.value,parent:c.parent,replaceValue:c.replaceValue})}}),u}return x()(n,[{key:"state",get:function(){return this._stateCtx.reactive}},{key:"useState",value:function(a,i){var u=this._stateCtx.useState(),s=F()(u,2),c=s[0],f=s[1],o=typeof a=="function"?a(c):c,l=typeof i=="function"?function(d){f(function(v){i.call(v,v,d)})}:f;return[o,l]}},{key:"setState",value:function(a){this._stateCtx.setState(a)}},{key:"createAsyncComputed",value:function(a){var i=a.initial,u=a.onComputed,s=a.depends,c=a.options;return this._stateCtx.mutate({deps:function(o){return typeof s=="function"?s(o):null},fn:function(o,l){l.isFirstCall&&typeof i=="function"&&i(o,l)},task:function(){var f=K()(w()().mark(function l(d){var v,g,h,A;return w()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:if(v=d.draft,g=d.setState,h=d.input,A=d.extraArgs,typeof i!="function"){O.next=3;break}return O.abrupt("return",u({draft:v,setState:g,values:h,options:Object.assign({},A)}));case 3:case"end":return O.stop()}},l)}));function o(l){return f.apply(this,arguments)}return o}(),immediate:c.immediate,desc:c.id,checkDeadCycle:!1}),c.id}},{key:"createComputed",value:function(a){var i=a.onComputed,u=a.options;return this._stateCtx.mutate({fn:function(c,f){var o=f.input;typeof i=="function"&&i({draft:c,values:o})},task:function(){var s=K()(w()().mark(function f(o){var l,d,v;return w()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:l=o.draft,d=o.input,v=o.extraArgs,typeof i=="function"&&i({draft:l,values:d,options:v});case 2:case"end":return h.stop()}},f)}));function c(f){return s.apply(this,arguments)}return c}(),desc:u.id,checkDeadCycle:!1}),u.id}},{key:"runComputed",value:function(a,i){var u={desc:a,extraArgs:i};return this._stateCtx.runMutateTask(u)}},{key:"markRaw",value:function(a){return(0,C.markRaw)(a)}},{key:"createWatch",value:function(a,i){var u=this,s=(0,C.watch)(function(f){var o=f.triggerReasons,l=o.map(function(d){return d.keyPath});a(l)},function(){return i==null?void 0:i.map(function(f){return P(u._stateCtx.state,f)})}),c=s.unwatch;return c}}]),n}(gt),mt=p(10948);function De(t){function e(n,r,a){var i=Object.assign({id:X(),save:!1},(0,mt.P)(arguments[1])?arguments[1]:arguments[2]);i.depends=Array.isArray(arguments[1])?arguments[1]:[];var u=i.async===!0||(0,ue.$)(n)||Array.isArray(arguments[1]);i.selfReactiveable=new Te({value:u?Q(t,i.id,{}):i.initial});var s;u?s={path:["value"],parent:null,value:fe(n,i.depends,i)}:s={path:["value"],parent:null,value:fe(n,i)};var c=se(s,t);return c}return e}var Ve=function(t){ce()(n,t);var e=le()(n);function n(r){var a;return N()(this,n),a=e.call(this),$()(B()(a),"_createComputed",void 0),a.store=r,a}return x()(n,[{key:"runGroup",value:function(){var r=K()(w()().mark(function i(u){return w()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Promise.all(j()(this.values()).filter(function(f){return f.group==u}).map(function(f){return f.async,f.run()})));case 1:case"end":return c.stop()}},i,this)}));function a(i){return r.apply(this,arguments)}return a}()},{key:"enableGroup",value:function(){var r=K()(w()().mark(function i(u){var s,c,f;return w()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:s=oe()(this.values());try{for(s.s();!(c=s.n()).done;)f=c.value,f.options.enable=u}catch(d){s.e(d)}finally{s.f()}case 2:case"end":return l.stop()}},i,this)}));function a(i){return r.apply(this,arguments)}return a}()},{key:"delete",value:function(a){return ft()(pt()(n.prototype),"delete",this).call(this,a)}},{key:"create",get:function(){return this._createComputed||(this._createComputed=De(this.store)),this._createComputed}}]),n}(Pe()(Map));function $e(t){return typeof t=="function"?t:typeof t=="string"?function(e){return V(e)==V(t.split(b))}:Array.isArray(t)?function(e){return t.map(function(n){return typeof n=="string"?n.split(b):Array.isArray(n)?n:[String(n)]}).some(function(n){return V(e)==V(n)})}:function(){return!1}}function bt(t,e,n){var r=Object.assign({depends:$e(e),enable:!0},n),a=function(){return{listener:t,options:r}};return a.__COMPUTED__="watch",a}function de(t){return function(e,n){return t.reactiveable.createWatch(e,n)}}var Ct=p(70079);function pe(t,e){e.options.log("install watch for <".concat(t.path.length==0?"Dynamic":t.path.join(b),">"));var n=t.value();n.options.selfPath=t.path;var r=e.watchObjects.add(n),a=n.options.context;return a?a.setState(function(i){i.value=n.options.initial}):(t.replaceValue(n.options.initial),e.stateCtx.setState(function(i){E(i,t.path,n.options.initial)}),(0,C.flush)(e.stateCtx.state)),r}function We(t){return function(e,n,r){(0,Ct.useEffect)(function(){var a={path:["value"],parent:void 0,value:function(){var s={listener:e,options:Object.assign({depends:$e(n),context:(0,C.sharex)({value:0}),selfPath:["value"],initial:0,enable:!0,scope:S.Depends},r)};return s}},i=pe(a,t);return function(){t.watchObjects.delete(i.id)}},[n])}}var Ie=function(){function t(e,n){if(N()(this,t),$()(this,"_cache",void 0),$()(this,"_listener",void 0),$()(this,"_options",void 0),this.store=e,this._options=Object.assign({enable:!0,selfPath:[],group:void 0,context:void 0,initial:void 0},n.options),typeof this._options.depends!="function")throw new Error("watch options.depends must be a function");if(!this._options.id){var r=this._options.selfPath;this._options.id=this._options.id||this._options.context?X():V(r)}this._listener=n.listener}return x()(t,[{key:"id",get:function(){return this._options.id}},{key:"options",get:function(){return this._options}},{key:"selfPath",get:function(){return this._options.selfPath}},{key:"depends",get:function(){return this._options.depends}},{key:"enable",get:function(){return this._options.enable},set:function(n){this._options.enable=n}},{key:"cache",get:function(){return this._cache||(this._cache={}),this._cache}},{key:"value",get:function(){var n=this._options.context?this._options.context:this.store.state;return R((0,C.getSnap)(n),this.selfPath)}},{key:"getName",value:function(){return this._options.context?this.id:this.selfPath.join(b)}},{key:"reset",value:function(){this._cache={}}},{key:"run",value:function(n,r){var a=this;if(!this.enable){this.store.options.log("WatchObject <".concat(this.getName(),"> is disabled"));return}try{var i=this._listener.call(this,r,n,this);i!==void 0&&(this._options.context?this._options.context.setState(function(u){u.value=i}):this.store.setState(function(u){E(u,a.selfPath,i)}))}catch(u){}}}]),t}(),Me=function(t){ce()(n,t);var e=le()(n);function n(r){var a;return N()(this,n),a=e.call(this),$()(B()(a),"_off",void 0),$()(B()(a),"_enable",!0),a.store=r,r.on("created",a.onStateCreated.bind(B()(a))),a}return x()(n,[{key:"onStateCreated",value:function(){this.createWacher()}},{key:"enable",get:function(){return this._enable},set:function(a){this._enable=a}},{key:"createWacher",value:function(){var a=this,i=(0,C.watch)(function(s){var c=s.triggerReasons;if(a._enable){var f=c.map(function(o){return o.keyPath});f.forEach(function(o){var l=R(a.store.state,o),d=oe()(a.values()),v;try{for(d.s();!(v=d.n()).done;){var g=v.value;g.depends(o,l)&&g.run(o,l)}}catch(h){d.e(h)}finally{d.f()}})}},function(){return[a.store.state]}),u=i.unwatch;this._off=u}},{key:"reset",value:function(){this._off&&this._off(),this.createWacher()}},{key:"add",value:function(a){var i=new Ie(this.store,a);return this.set(i.id,i),i}},{key:"enableGroup",value:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,u=oe()(this.values()),s;try{for(u.s();!(s=u.n()).done;){var c=s.value;c.options.group==a&&(c.options.enable=i)}}catch(f){u.e(f)}finally{u.f()}}}]),n}(Pe()(Map));function Ot(t,e){var n=t.path,r=t.value,a=V(n);typeof r=="function"&&!e._replacedKeys[a]&&!we(r)&&(e._replacedKeys[a]=!0,r.__COMPUTED__=="watch"?pe(t,e):se(t,e))}function wt(t){return function(e,n){var r=t.stateCtx.useState;if(e==null)return r();var a=r(),i=F()(a,2),u=i[0],s=i[1],c=e(u),f=s;return typeof n=="function"&&(f=function(l){s(function(d){n.call(d,d,l)})}),[c,f]}}function jt(t){return function(e){t.reactiveable.setState(function(n){e(n)})}}var At=p(24222);function St(t,e){var n=Object.assign({id:X(),debug:!0,onceComputed:!1,enableComputed:!0,scope:function(){return S.Current}},e);n.log=function(){n.debug&&Le.apply(void 0,arguments)};var r=(0,At.Z)(),a={options:n,on:r.on,off:r.off,emit:r.emit,_replacedKeys:{}};return a.computedObjects=new Ve(a),a.watchObjects=new Me(a),a.reactiveable=new Te(t,{id:n.id,onRead:function(u){Ot(u,a)}}),a.state=a.reactiveable.state,a.emit("created"),a.useState=wt(a),a.setState=jt(a),a.enableComputed=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return a.options.enableComputed=i},a.watch=de(a),a.useWatch=We(a),a.watch=de(a),a.createComputed=De(a),n.onceComputed&&Je(a.state),a}},43095:function(Ce){function D(p){var S=new Error("Cannot find module '"+p+"'");throw S.code="MODULE_NOT_FOUND",S}D.keys=function(){return[]},D.resolve=D,D.id=43095,Ce.exports=D}}]);