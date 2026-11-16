function b(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var M={exports:{}},o={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),B=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),X=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),Q=Symbol.for("react.view_transition"),w=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=w&&t[w]||t["@@iterator"],typeof t=="function"?t:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,P={};function _(t,e,n){this.props=t,this.context=e,this.refs=P,this.updater=n||x}_.prototype.isReactComponent={};_.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function H(){}H.prototype=_.prototype;function h(t,e,n){this.props=t,this.context=e,this.refs=P,this.updater=n||x}var R=h.prototype=new H;R.constructor=h;O(R,_.prototype);R.isPureReactComponent=!0;var g=Array.isArray;function m(){}var f={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function C(t,e,n){var r=n.ref;return{$$typeof:T,type:t,key:e,ref:r!==void 0?r:null,props:n}}function V(t,e){return C(t.type,e,t.props)}function k(t){return typeof t=="object"&&t!==null&&t.$$typeof===T}function F(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var A=/\/+/g;function d(t,e){return typeof t=="object"&&t!==null&&t.key!=null?F(""+t.key):e.toString(36)}function tt(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(m,m):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function l(t,e,n,r,u){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var i=!1;if(t===null)i=!0;else switch(s){case"bigint":case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case T:case D:i=!0;break;case j:return i=t._init,l(i(t._payload),e,n,r,u)}}if(i)return u=u(t),i=r===""?"."+d(t,0):r,g(u)?(n="",i!=null&&(n=i.replace(A,"$&/")+"/"),l(u,e,n,"",function(v){return v})):u!=null&&(k(u)&&(u=V(u,n+(u.key==null||t&&t.key===u.key?"":(""+u.key).replace(A,"$&/")+"/")+i)),e.push(u)),1;i=0;var a=r===""?".":r+":";if(g(t))for(var c=0;c<t.length;c++)r=t[c],s=a+d(r,c),i+=l(r,e,n,s,u);else if(c=J(t),typeof c=="function")for(t=c.call(t),c=0;!(r=t.next()).done;)r=r.value,s=a+d(r,c++),i+=l(r,e,n,s,u);else if(s==="object"){if(typeof t.then=="function")return l(tt(t),e,n,r,u);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return i}function E(t,e,n){if(t==null)return t;var r=[],u=0;return l(t,r,"","",function(s){return e.call(n,s,u++)}),r}function et(t){if(t._status===-1){var e=t._result,n=e();n.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r,n.status===void 0&&(n.status="fulfilled",n.value=r))},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r,n.status===void 0&&(n.status="rejected",n.reason=r))}),t._status===-1&&(t._status=0,t._result=n)}if(t._status===1)return t._result.default;throw t._result}var S=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function N(t){var e=f.T,n={};n.types=e!==null?e.types:null,f.T=n;try{var r=t(),u=f.S;u!==null&&u(n,r),typeof r=="object"&&r!==null&&typeof r.then=="function"&&r.then(m,S)}catch(s){S(s)}finally{e!==null&&n.types!==null&&(e.types=n.types),f.T=e}}function I(t){var e=f.T;if(e!==null){var n=e.types;n===null?e.types=[t]:n.indexOf(t)===-1&&n.push(t)}else N(I.bind(null,t))}var nt={map:E,forEach:function(t,e,n){E(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return E(t,function(){e++}),e},toArray:function(t){return E(t,function(e){return e})||[]},only:function(t){if(!k(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};o.Activity=Z;o.Children=nt;o.Component=_;o.Fragment=U;o.Profiler=z;o.PureComponent=h;o.StrictMode=q;o.Suspense=W;o.ViewTransition=Q;o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f;o.__COMPILER_RUNTIME={__proto__:null,c:function(t){return f.H.useMemoCache(t)}};o.addTransitionType=I;o.cache=function(t){return function(){return t.apply(null,arguments)}};o.cacheSignal=function(){return null};o.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var r=O({},t.props),u=t.key;if(e!=null)for(s in e.key!==void 0&&(u=""+e.key),e)!$.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(r[s]=e[s]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var i=Array(s),a=0;a<s;a++)i[a]=arguments[a+2];r.children=i}return C(t.type,u,r)};o.createContext=function(t){return t={$$typeof:B,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:G,_context:t},t};o.createElement=function(t,e,n){var r,u={},s=null;if(e!=null)for(r in e.key!==void 0&&(s=""+e.key),e)$.call(e,r)&&r!=="key"&&r!=="__self"&&r!=="__source"&&(u[r]=e[r]);var i=arguments.length-2;if(i===1)u.children=n;else if(1<i){for(var a=Array(i),c=0;c<i;c++)a[c]=arguments[c+2];u.children=a}if(t&&t.defaultProps)for(r in i=t.defaultProps,i)u[r]===void 0&&(u[r]=i[r]);return C(t,s,u)};o.createRef=function(){return{current:null}};o.forwardRef=function(t){return{$$typeof:K,render:t}};o.isValidElement=k;o.lazy=function(t){return{$$typeof:j,_payload:{_status:-1,_result:t},_init:et}};o.memo=function(t,e){return{$$typeof:X,type:t,compare:e===void 0?null:e}};o.startTransition=N;o.unstable_useCacheRefresh=function(){return f.H.useCacheRefresh()};o.use=function(t){return f.H.use(t)};o.useActionState=function(t,e,n){return f.H.useActionState(t,e,n)};o.useCallback=function(t,e){return f.H.useCallback(t,e)};o.useContext=function(t){return f.H.useContext(t)};o.useDebugValue=function(){};o.useDeferredValue=function(t,e){return f.H.useDeferredValue(t,e)};o.useEffect=function(t,e){return f.H.useEffect(t,e)};o.useEffectEvent=function(t){return f.H.useEffectEvent(t)};o.useId=function(){return f.H.useId()};o.useImperativeHandle=function(t,e,n){return f.H.useImperativeHandle(t,e,n)};o.useInsertionEffect=function(t,e){return f.H.useInsertionEffect(t,e)};o.useLayoutEffect=function(t,e){return f.H.useLayoutEffect(t,e)};o.useMemo=function(t,e){return f.H.useMemo(t,e)};o.useOptimistic=function(t,e){return f.H.useOptimistic(t,e)};o.useReducer=function(t,e,n){return f.H.useReducer(t,e,n)};o.useRef=function(t){return f.H.useRef(t)};o.useState=function(t){return f.H.useState(t)};o.useSyncExternalStore=function(t,e,n){return f.H.useSyncExternalStore(t,e,n)};o.useTransition=function(){return f.H.useTransition()};o.version="19.3.1";M.exports=o;var y=M.exports;const st=b(y);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),L=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ot={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=y.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:u="",children:s,iconNode:i,...a},c)=>y.createElement("svg",{ref:c,...ot,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:L("lucide",u),...a},[...i.map(([v,Y])=>y.createElement(v,Y)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(t,e)=>{const n=y.forwardRef(({className:r,...u},s)=>y.createElement(ut,{ref:s,iconNode:e,className:L(`lucide-${rt(t)}`,r),...u}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=p("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=p("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=p("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=p("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=p("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=p("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=p("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=p("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);export{it as D,ft as G,ct as L,lt as M,st as R,yt as S,_t as X,pt as a,at as b,b as g,y as r};
