(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[98],{73894:function(mt,I,d){"use strict";d.r(I),d.d(I,{$:function(){return O.$},ComputedObjects:function(){return Vt},ComputedScopeRef:function(){return j},OBJECT_PATH_DELIMITER:function(){return g},SKIP_COMPUTED:function(){return at},WatchObject:function(){return Dt},WatchObjects:function(){return $t},computed:function(){return kt},createAsyncComputedMutate:function(){return ot},createAsyncComputedObject:function(){return _},createComputedMutate:function(){return ut},createObject:function(){return O.share},createStore:function(){return Ee},createUseWatch:function(){return Rt},createWatch:function(){return pt},getSnap:function(){return O.getSnap},getVal:function(){return M},getValueByPath:function(){return T},installComputed:function(){return ct},installWatch:function(){return vt},isIncludePath:function(){return zt},isSkipComputed:function(){return Ct},markRaw:function(){return O.markRaw},setAsyncComputedObject:function(){return Mt},setVal:function(){return P},skipComputed:function(){return q},watch:function(){return me}});var j=function(e){return e.Root="root",e.Current="current",e.Parent="parent",e.Depends="depends",e.Self="self",e}({}),Ut=d(70125),N=d.n(Ut);function R(e){return(e||["ROOT"]).map(function(t){return Array.isArray(t)?t.join("."):t}).join("_")}function B(e,t){var n="";return typeof t=="function"?n=t(e):typeof t=="string"?n=t:n=R(e),n}function Nt(e){return e instanceof Error?e:new Error(e)}var g=".",at=Symbol("SKIP_COMPUTED");function Ct(e){return e[at]===!0}var Gt=d(79664),S=d.n(Gt);function it(e,t,n){if(!Array.isArray(e))throw new Error("curPath must be an array");return t==="self"?e:t==="root"?[]:t==="parent"?e.slice(0,-2):t==="current"?e.slice(0,-1):typeof t=="string"?t.startsWith("./")?[].concat(S()(e.slice(0,-1)),S()(t.slice(2).split(g))):t.startsWith("../")?it(e.slice(0,-1),t.slice(3),!0):t.startsWith("/")?(t=t.replace(/^(\/)*/,""),S()(t.split(g))):n?[].concat(S()(e.slice(0,-1)),S()(t.split(g))):S()(t.split(g)):Array.isArray(t)?t:e}function bt(e,t){var n=e.get(t);if(n!==void 0)return n;var r=e.get(Number(t)||t);if(r!==void 0)return r}function St(e){return toString.call(e)==="[object Map]"}function M(e,t){if(t.length===0)return e;var n,r=e;return t.forEach(function(a){n=St(r)?bt(r,a):r[a],r=n}),n}function Kt(e,t,n){return e.map(function(r){return M(t,it(n,r))})}function Ht(e){return(e||[]).map(function(t){return Array.isArray(t)?t:typeof t=="string"?["/","./","../"].some(function(n){return t.startsWith(n)})?t:t.includes(g)?t.split(g):t.split("."):[]})}var Ft=d(26851),Ot=d.n(Ft);function Pe(e){return _typeof(e)=="object"&&e.hasOwnProperty("__COMPUTED__")&&["async","sync"].includes(e.__COMPUTED__)&&e.hasOwnProperty("fn")&&typeof e.fn=="function"&&e.hasOwnProperty("options")&&_typeof(e.options)=="object"}function Te(e){return _typeof(e)=="object"&&["result","loading","timeout","retry","run"].every(function(t){return e.hasOwnProperty(t)})}function zt(e,t){return e.length>t.length?!1:e.every(function(n,r){return n===t[r]})}function Bt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"log",n=typeof e=="function"?e():e instanceof Error?e.stack:e;try{var r;(r=console)[t].apply(r,["[@speedform/reactive] "].concat(S()(Array.isArray(n)?n:[n])))}catch(a){}}function P(e,t,n){var r=e,a=t.length-1;t.forEach(function(i,u){var s=St(r);if(u===a){s?r.set(i,n):r[i]=n;return}var o=s?bt(r,i):r[i];r=o})}function q(e){return e[at]=!0,e}function T(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:g,r=[];try{return typeof t=="function"&&(t=t.call(e,e)),r=Array.isArray(t)?t:typeof t=="string"?t.split(n):[],r.length>0?M(e,r):e}catch(a){return e}}function Lt(e,t){function n(r,a){for(var i in r){var u=r[i];typeof t=="function"&&t({value:u,key:i,parent:r,path:a.concat(i)}),Ot()(u)==="object"&&n(u,a.concat(i))}}n(e,[])}function Jt(e,t,n){var r=t==null?n:t;if(typeof r=="function")try{r=r.call(e,e)}catch(a){}return r==null?n==null?j.Root:n:r}function Yt(e,t){var n=t.dependValues,r=t.valuePath,a=t.funcOptions,i=t.storeOptions,u=t.computedType,s=e;if(typeof i.onComputedContext=="function"){var o=i.onComputedContext.call(e,e,{computedType:u,valuePath:r});o!==void 0&&(s=o)}var l=r.length>=1?r.slice(0,r.length-1):[],c=Jt(e,a.scope,i.scope&&i.scope(u));try{if(c===j.Current)return T(e,l);if(c===j.Parent)return T(e,r.slice(0,r.length-2));if(c===j.Root)return s;if(c===j.Depends)return Array.isArray(n)?n.map(function(v){return typeof v=="function"?v():v}):[];if(typeof c=="string")return T(e,it(r,c));if(Array.isArray(c))if(c.length>0&&c[0].startsWith("@")){var f=T(e,[].concat(S()(c[0].substring(1).split(g)),S()(c.slice(1))));return T(e,f)}else return T(e,c);else if(typeof c=="number"){var p=c>r.length-2?r.length-c-1:0;return T(e,r.slice(0,p))}else return e}catch(v){return e}}function jt(e,t,n,r){var a=n.valuePath,i=n.dependValues;return Yt(t,{dependValues:i,valuePath:a,funcOptions:r,storeOptions:e.options,computedType:"Computed"})}var Zt=d(77937),G=d.n(Zt),Qt=d(41176),K=d.n(Qt),Xt=d(79862),D=d.n(Xt),At=function(){function e(t,n,r,a){G()(this,e),D()(this,"options",void 0),this.store=t,this.selfState=n,this.path=r,this.options=Object.assign({},a)}return K()(e,[{key:"id",get:function(){return B(this.options.selfPath,this.options.id)}},{key:"enable",get:function(){return this.options.enable},set:function(n){this.options.enable=n}},{key:"group",get:function(){return this.options.group}},{key:"async",get:function(){return this.options.async}},{key:"depends",get:function(){return this.options.depends}},{key:"run",value:function(n){var r;return(r=this.store.reactiveable)===null||r===void 0?void 0:r.runComputed(this.id,n)}},{key:"cancel",value:function(){}}]),e}(),wt=d(44340);function Et(e,t,n,r){var a=n.options.onCreateComputed;if(typeof a=="function"&&typeof t=="function"){var i=a.call(n,e,t,r);r.scope||(r.scope=j.Current),r.context||(r.context=j.Root),typeof i=="function"&&(t=i)}}function qt(e,t){var n=t.id||B(e,t.id),r=t.selfState?n:e.join(g);return[n,r]}function _t(e,t){var n=e.path,r=t.selfState,a=t.toComputedResult,i=a===void 0?"self":a;return r?[n]:(0,wt.d)(i,{self:n,root:[],parent:n.slice(0,n.length-2),current:n.slice(0,n.length-1),Array:i,String:[].concat(S()(n.slice(0,n.length-1)),[String(i).split(g)])},{defaultValue:n})}function te(e,t,n){var r=e.valuePath,a=e.id,i=e.name,u=e.resultPath,s=e.getter,o=t.selfState;n.reactiveable.createComputed({onComputed:function(c){var f=c.draft,p=c.values;if(!t.enable){n.options.log("Sync computed <".concat(i,"> is disabled"),"warn");return}n.options.log("Run sync computed for : ".concat(i)),e.dependValues=p;var v=o||f,y=o?f:jt(n,f,e,t),h=t.initial;try{h=s.call(v,y)}catch(w){if(typeof t.onError=="function")try{var A;(A=t.onError)===null||A===void 0||A.call(v,w)}catch(m){}}o?o.setState(function(w){P(w,u,h)}):P(f,u,h)},options:t})}function ut(e,t){var n=e.path,r=e.parent,a=e.value;if(!(r&&!Object.hasOwn(r,n[n.length-1]))){var i=a(),u=i.getter,s=i.options;Et(n,u,t,s);var o=s.selfState,l=_t(e,s),c=qt(n,s),f=N()(c,2),p=f[0],v=f[1];t.options.log("Create sync computed: ".concat(v));var y={id:s.id||B(n,s.id),name:o?p:n.join(g),resultPath:l,isMutateRunning:!1,dependValues:[],valuePath:n,deps:[],getter:u};te(y,s,t),o||e.replaceValue(M(t.state,n));var h=new At(t,o,n,s);return t.computedObjects.set(v,h),h}}var ee=d(90393),E=d.n(ee),ne=d(7392),L=d.n(ne),O=d(67687),re=d(10346);function _(e,t,n){return Object.assign({loading:!1,timeout:0,retry:0,error:null,result:void 0,progress:0,run:(0,O.markRaw)(q(function(r){return e.reactiveable.runComputed(t,Object.assign({},r))})),cancel:(0,O.markRaw)(q(function(){console.log("cancel")}))},n)}function Mt(e,t,n,r,a){var i=_(e,r,a),u=M(t,n);Object.assign(u,i,a)}function ae(e,t,n){var r=Object.assign({},n),a=r.max,i=a===void 0?100:a,u=r.min,s=u===void 0?0:u,o=r.value,l=o===void 0?0:o;return e(function(c){return P(c,[].concat(S()(t),["progress"]),l)}),{value:function(f){f>i&&(f=i),f<s&&(f=s),e(function(p){return P(p,[].concat(S()(t),["progress"]),f)})},end:function(){this.value(i)}}}function J(e,t,n){e(function(r){Object.entries(n).forEach(function(a){var i=N()(a,2),u=i[0],s=i[1];P(r,[].concat(S()(t),[u]),s)})})}function ie(e,t,n,r){return st.apply(this,arguments)}function st(){return st=L()(E()().mark(function e(t,n,r,a){var i,u,s,o,l,c,f,p,v,y,h,A,w,m,H,k,$,Z,et,b,V;return E()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:i=n.valuePath,u=n.getter,s=n.resultPath,o=r.timeout,l=o===void 0?0:o,c=r.retry,f=c===void 0?[0,0]:c,p=r.selfState,v=p?p.setState:a.setState,y=p||t,h=p?t:jt(a,t,n,r),A=Array.isArray(f)?f:[Number(f),0],w=N()(A,2),m=w[0],H=w[1],$=new AbortController,Z={onTimeout:function(W){return k=W},getProgressbar:function(W){return ae(v,i,W)},getSnap:function(W){return(0,O.getSnap)(W,!1)},abortSignal:$.signal,cancel:$.abort},et=!1,J(v,s,{cancel:(0,O.markRaw)(q(function(){return $.abort()}))}),$.signal.addEventListener("abort",function(){et=!0}),b=E()().mark(function nt(){var W,rt,z,Q,Me,x,Wt,ht,gt,X,yt,U,xt;return E()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(z=!1,Q=!1,Me=V>0,x={},C.prev=2,Wt=Array.isArray(l)?l:[l,0],ht=N()(Wt,2),gt=ht[0],X=gt===void 0?0:gt,yt=ht[1],U=yt===void 0?0:yt,J(v,s,{loading:!0,error:null,retry:V>0?m-V:0,timeout:U>1?U:X,progress:0}),!et){C.next=7;break}throw new Error("Aborted");case 7:return X>0&&(W=setTimeout(function(){Q=!0,typeof k=="function"&&k(),z||(clearInterval(rt),J(v,s,{loading:!1,error:"TIMEOUT",timeout:0}))},X),U>1&&(rt=setInterval(function(){J(v,s,{timeout:U--}),U===0&&clearInterval(rt)},X/U))),C.next=10,u.call(y,h,Z);case 10:xt=C.sent,Q||Object.assign(x,{result:xt,error:null,timeout:0}),C.next=21;break;case 14:if(C.prev=14,C.t0=C.catch(2),z=!0,typeof r.onError=="function")try{r.onError.call(y,C.t0)}catch(Ie){}Q||Object.assign(x,{error:Nt(C.t0).message,timeout:0}),m>0&&Object.assign(x,{retry:m-V}),a.emit("computed:error",{path:i,id:n.id});case 21:return C.prev=21,clearTimeout(W),clearInterval(rt),(!z||V==m)&&Object.assign(x,{loading:!1}),!z&&!Q&&Object.assign(x,{error:null}),J(v,s,x),C.finish(21);case 28:if(!z){C.next=32;break}if(!(m>0&&H>0&&V<m)){C.next=32;break}return C.next=32,(0,re.g)(H);case 32:case"end":return C.stop()}},nt,null,[[2,14,21,28]])}),V=0;case 13:if(!(V<m+1)){F.next=18;break}return F.delegateYield(b(),"t0",15);case 15:V++,F.next=13;break;case 18:case"end":return F.stop()}},e)})),st.apply(this,arguments)}function ue(e,t,n){var r=e.valuePath,a=e.id,i=e.deps,u=e.name,s=e.resultPath,o=e.isMutateRunning,l=e.getter,c=t.toComputedResult,f=t.selfState,p=t.initial,v=t.noReentry;n.reactiveable.createAsyncComputed({depends:function(h){return Kt(i,h,r)},initial:function(h){if(f)f.setState(function(w){Object.assign(w,_(n,a,{result:p}))});else if(c=="self")P(h,r,_(n,a,{result:p}));else{Mt(n,h,s,a,{result:p});var A=M(h,r.slice(0,r.length-1));delete A[r[r.length-1]]}},onComputed:function(){var y=L()(E()().mark(function A(w){var m,H,k,$,Z;return E()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(m=w.draft,H=w.values,k=w.options,!(!n.options.enableComputed||!t.enable&&(k==null?void 0:k.enable)!==!0)){b.next=4;break}return n.options.log("Async computed <".concat(u,"> is disabled"),"warn"),b.abrupt("return");case 4:if(n.options.log("Run async computed for : ".concat(u)),$=Object.assign({},t,k),!(v&&o&&n.options.debug)){b.next=9;break}return n.options.log("Reentry async computed: ".concat(u),"warn"),b.abrupt("return");case 9:return e.isMutateRunning=!0,e.dependValues=H,b.prev=11,b.next=14,ie(m,e,$,n);case 14:return Z=b.sent,n.emit("computed:done",{path:r,id:a}),b.abrupt("return",Z);case 17:return b.prev=17,e.isMutateRunning=!1,b.finish(17);case 20:case"end":return b.stop()}},A,null,[[11,,17,20]])}));function h(A){return y.apply(this,arguments)}return h}(),options:t})}function se(e,t){var n=e.path,r=t.selfState,a=t.toComputedResult,i=a===void 0?"self":a;return r?[n]:(0,wt.d)(i,{self:n,root:[],parent:n.slice(0,n.length-2),current:n.slice(0,n.length-1),Array:i,String:[].concat(S()(n.slice(0,n.length-1)),[String(i).split(g)])},{defaultValue:n})}function ot(e,t){var n=e.path,r=e.parent,a=e.value;if(!(r&&!Object.hasOwn(r,n[n.length-1]))){var i=a(),u=i.getter,s=i.options;s.async=!0,Et(n,u,t,s);var o=s.depends,l=o===void 0?[]:o,c=s.selfState,f=se(e,s);l.length==0&&t.options.log("async computed <".concat(n.join("."),"> should specify depends"),"warn");var p=s.id||B(n,s.id),v=c?p:n.join(g);t.options.log("Create async computed: ".concat(v," (depends=").concat(l.length==0?"None":R(l),")"));var y={id:s.id||B(n,s.id),name:c?p:n.join(g),resultPath:f,isMutateRunning:!1,dependValues:[],valuePath:n,deps:l,getter:u};ue(y,s,t),c||e.replaceValue(M(t.state,n));var h=new At(t,c,n,s);return t.computedObjects.set(p,h),t.emit("computed:new",{id:p}),h}}var Pt=d(20649);function ct(e,t,n){var r=e.value,a;if(r.__COMPUTED__=="async"?a=ot(e,t):r.__COMPUTED__=="sync"?a=ut(e,t):(0,Pt.$)(r)?(e.value=function(){return{getter:r,options:{depends:[],initial:void 0,immediate:!0,enable:!0}}},a=ot(e,t)):(e.value=function(){return{getter:r,options:{initial:void 0,enable:!0}}},a=ut(e,t)),a&&typeof t.options.onCreateComputedObject=="function")try{t.options.onCreateComputedObject(e.path,a)}catch(i){t.options.log(i.stack,"error")}}var oe=d(71698),lt=d.n(oe),ce=d(44114),Y=d.n(ce),le=d(19365),fe=d.n(le),de=d(72904),pe=d.n(de),ve=d(65523),ft=d.n(ve),he=d(7122),dt=d.n(he),ge=d(19108),Tt=d.n(ge);function kt(e,t,n){if(typeof e!="function")throw new Error("computed getter must be a function");var r=[],a={async:!1,enable:!0,timeout:0,depends:[],toComputedResult:j.Self,immediate:!0};if(arguments.length==1)r=[];else if(arguments.length==2)if(Array.isArray(arguments[1]))r=arguments[1];else if(Ot()(arguments[1])=="object")Object.assign(a,arguments[1]);else throw new Error("invalid arguments");else arguments.length>=3&&(r=arguments[1],Object.assign(a,arguments[2]));var i=a.async===!0||(0,Pt.$)(e)||arguments.length>=2&&Array.isArray(t);a.async=i,a.depends=Ht(r);var u=function(){return{getter:e,options:a}};return u.__COMPUTED__=i?"async":"sync",u}function tt(){return Math.random().toString(36).slice(2)}function ye(e){return function(t,n){var r=Object.assign({id:tt(),scope:e.stateCtx.state,context:e.stateCtx.state},n);if(!Array.isArray(r.depends)||r.depends.length==0)throw new Error("options.depends must be an array and not empty");var a=(0,O.sharex)({}),i={path:[],parent:null,value:kt(t,r.depends,n)};return ct(i,e),a}}var Vt=function(e){ft()(n,e);var t=dt()(n);function n(r){var a;return G()(this,n),a=t.call(this),D()(Y()(a),"_createComputed",void 0),a.store=r,a}return K()(n,[{key:"runGroup",value:function(){var r=L()(E()().mark(function i(u){return E()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Promise.all(S()(this.values()).filter(function(l){return l.group==u}).map(function(l){return l.async,l.run()})));case 1:case"end":return o.stop()}},i,this)}));function a(i){return r.apply(this,arguments)}return a}()},{key:"enableGroup",value:function(){var r=L()(E()().mark(function i(u){var s,o,l;return E()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:s=lt()(this.values());try{for(s.s();!(o=s.n()).done;)l=o.value,l.options.enable=u}catch(p){s.e(p)}finally{s.f()}case 2:case"end":return f.stop()}},i,this)}));function a(i){return r.apply(this,arguments)}return a}()},{key:"delete",value:function(a){return fe()(pe()(n.prototype),"delete",this).call(this,a)}},{key:"new",get:function(){return this._createComputed||(this._createComputed=ye(this.store)),this._createComputed}}]),n}(Tt()(Map));function It(e){return typeof e=="function"?e:typeof e=="string"?function(t){return R(t)==R(e.split(g))}:Array.isArray(e)?function(t){return e.map(function(n){return typeof n=="string"?n.split(g):Array.isArray(n)?n:[String(n)]}).some(function(n){return R(t)==R(n)})}:function(){return!1}}function me(e,t,n){var r=Object.assign({depends:It(t),enable:!0},n),a=function(){return{listener:e,options:r}};return a.__COMPUTED__="watch",a}function pt(e){return function(t,n){var r=(0,O.watch)(function(i){var u=i.triggerReasons,s=u.map(function(o){return o.keyPath});t(s)},function(){return n==null?void 0:n.map(function(i){return T(e.stateCtx.state,i)})}),a=r.unwatch;return a}}var Ce=d(70079);function vt(e,t){t.options.log("install watch for <".concat(e.path.length==0?"Dynamic":e.path.join(g),">"));var n=e.value();n.options.selfPath=e.path;var r=t.watchObjects.add(n),a=n.options.context;return a?a.setState(function(i){i.value=n.options.initial}):(e.replaceValue(n.options.initial),t.stateCtx.setState(function(i){P(i,e.path,n.options.initial)}),(0,O.flush)(t.stateCtx.state)),r}function Rt(e){return function(t,n,r){(0,Ce.useEffect)(function(){var a={path:["value"],parent:void 0,value:function(){var s={listener:t,options:Object.assign({depends:It(n),context:(0,O.sharex)({value:0}),selfPath:["value"],initial:0,enable:!0,scope:j.Depends},r)};return s}},i=vt(a,e);return function(){e.watchObjects.delete(i.id)}},[n])}}var Dt=function(){function e(t,n){if(G()(this,e),D()(this,"_cache",void 0),D()(this,"_listener",void 0),D()(this,"_options",void 0),this.store=t,this._options=Object.assign({enable:!0,selfPath:[],group:void 0,context:void 0,initial:void 0},n.options),typeof this._options.depends!="function")throw new Error("watch options.depends must be a function");if(!this._options.id){var r=this._options.selfPath;this._options.id=this._options.id||this._options.context?tt():R(r)}this._listener=n.listener}return K()(e,[{key:"id",get:function(){return this._options.id}},{key:"options",get:function(){return this._options}},{key:"selfPath",get:function(){return this._options.selfPath}},{key:"depends",get:function(){return this._options.depends}},{key:"enable",get:function(){return this._options.enable},set:function(n){this._options.enable=n}},{key:"cache",get:function(){return this._cache||(this._cache={}),this._cache}},{key:"value",get:function(){var n=this._options.context?this._options.context:this.store.state;return M((0,O.getSnap)(n),this.selfPath)}},{key:"getName",value:function(){return this._options.context?this.id:this.selfPath.join(g)}},{key:"reset",value:function(){this._cache={}}},{key:"run",value:function(n,r){var a=this;if(!this.enable){this.store.options.log("WatchObject <".concat(this.getName(),"> is disabled"));return}try{var i=this._listener.call(this,r,n,this);i!==void 0&&(this._options.context?this._options.context.setState(function(u){u.value=i}):this.store.setState(function(u){P(u,a.selfPath,i)}))}catch(u){}}}]),e}(),$t=function(e){ft()(n,e);var t=dt()(n);function n(r){var a;return G()(this,n),a=t.call(this),D()(Y()(a),"_off",void 0),D()(Y()(a),"_enable",!0),a.store=r,r.on("created",a.onStateCreated.bind(Y()(a))),a}return K()(n,[{key:"onStateCreated",value:function(){this.createWacher()}},{key:"enable",get:function(){return this._enable},set:function(a){this._enable=a}},{key:"createWacher",value:function(){var a=this,i=(0,O.watch)(function(s){var o=s.triggerReasons;if(a._enable){var l=o.map(function(c){return c.keyPath});l.forEach(function(c){var f=M(a.store.state,c),p=lt()(a.values()),v;try{for(p.s();!(v=p.n()).done;){var y=v.value;y.depends(c,f)&&y.run(c,f)}}catch(h){p.e(h)}finally{p.f()}})}},function(){return[a.store.state]}),u=i.unwatch;this._off=u}},{key:"reset",value:function(){this._off&&this._off(),this.createWacher()}},{key:"add",value:function(a){var i=new Dt(this.store,a);return this.set(i.id,i),i}},{key:"enableGroup",value:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,u=lt()(this.values()),s;try{for(u.s();!(s=u.n()).done;){var o=s.value;o.options.group==a&&(o.options.enable=i)}}catch(l){u.e(l)}finally{u.f()}}}]),n}(Tt()(Map));function be(e,t){var n=e.path,r=e.value,a=R(n);typeof r=="function"&&!t._replacedKeys[a]&&!Ct(r)&&(t._replacedKeys[a]=!0,r.__COMPUTED__=="watch"?vt(e,t):ct(e,t))}function Se(e){return function(t,n){var r=e.stateCtx.useState;if(t==null)return r();var a=r(),i=N()(a,2),u=i[0],s=i[1],o=t(u),l=s;return typeof n=="function"&&(l=function(f){s(function(p){n.call(p,p,f)})}),[o,l]}}function Oe(e){return function(t){e.reactiveable.setState(function(n){t(n)})}}var je=d(24222),Ae=function(){function e(t,n){G()(this,e)}return K()(e,[{key:"state",get:function(){throw new Error("Method not implemented.")}},{key:"useState",value:function(n,r){throw new Error("Method not implemented.")}},{key:"setState",value:function(n){throw new Error("Method not implemented.")}},{key:"createAsyncComputed",value:function(n){throw new Error("Method not implemented.")}},{key:"createComputed",value:function(n){throw new Error("Method not implemented.")}},{key:"runComputed",value:function(n,r){throw new Error("Method not implemented.")}}]),e}(),we=function(e){ft()(n,e);var t=dt()(n);function n(r,a){var i,u;return G()(this,n),u=t.call(this,r,a),D()(Y()(u),"_stateCtx",void 0),u._stateCtx=(0,O.sharex)(r,{stopArrDep:!1,moduleName:(i=a.id)!==null&&i!==void 0?i:tt(),onRead:function(o){a.onRead({path:o.fullKeyPath,value:o.value,parent:o.parent,replaceValue:o.replaceValue})}}),u}return K()(n,[{key:"state",get:function(){return this._stateCtx.reactive}},{key:"useState",value:function(a,i){var u=this._stateCtx.useState(),s=N()(u,2),o=s[0],l=s[1],c=typeof a=="function"?a(o):o,f=typeof i=="function"?function(p){l(function(v){i.call(v,v,p)})}:l;return[c,f]}},{key:"setState",value:function(a){this._stateCtx.setState(a)}},{key:"createAsyncComputed",value:function(a){var i=a.initial,u=a.onComputed,s=a.depends,o=a.options;return this._stateCtx.mutate({deps:function(c){return typeof s=="function"?s(c):null},fn:function(c,f){f.isFirstCall&&typeof i=="function"&&i(c,f)},task:function(){var l=L()(E()().mark(function f(p){var v,y,h,A;return E()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(v=p.draft,y=p.setState,h=p.input,A=p.extraArgs,typeof i!="function"){m.next=3;break}return m.abrupt("return",u({draft:v,setState:y,values:h,options:Object.assign({},A)}));case 3:case"end":return m.stop()}},f)}));function c(f){return l.apply(this,arguments)}return c}(),immediate:o.immediate,desc:o.id,checkDeadCycle:!1}),o.id}},{key:"createComputed",value:function(a){var i=a.onComputed,u=a.options;return this._stateCtx.mutate({fn:function(o,l){var c=l.input;typeof i=="function"&&i({draft:o,values:c})},desc:u.id,checkDeadCycle:!1}),u.id}},{key:"runComputed",value:function(a,i){var u={desc:a,extraArgs:i};this._stateCtx.runMutateTask(u)}}]),n}(Ae);function Ee(e,t){var n=Object.assign({id:tt(),debug:!0,singleton:!0,onceComputed:!1,enableComputed:!0,scope:function(){return j.Current}},t);n.log=function(){n.debug&&Bt.apply(void 0,arguments)};var r=(0,je.Z)(),a={options:n,on:r.on,off:r.off,emit:r.emit,_replacedKeys:{}};return a.computedObjects=new Vt(a),a.watchObjects=new $t(a),a.reactiveable=new we(e,{id:n.id,onRead:function(u){be(u,a)}}),a.state=a.reactiveable.state,a.emit("created"),a.useState=Se(a),a.setState=Oe(a),a.enableComputed=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return a.options.enableComputed=i},a.watch=pt(a),a.useWatch=Rt(a),a.watch=pt(a),n.onceComputed&&Lt(a.state),a}},43095:function(mt){function I(d){var j=new Error("Cannot find module '"+d+"'");throw j.code="MODULE_NOT_FOUND",j}I.keys=function(){return[]},I.resolve=I,I.id=43095,mt.exports=I}}]);
