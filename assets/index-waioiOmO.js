(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function l(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=l(i);fetch(i.href,r)}})();function hu(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Fc={exports:{}},On={},Uc={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rl=Symbol.for("react.element"),fu=Symbol.for("react.portal"),xu=Symbol.for("react.fragment"),gu=Symbol.for("react.strict_mode"),ju=Symbol.for("react.profiler"),_u=Symbol.for("react.provider"),yu=Symbol.for("react.context"),vu=Symbol.for("react.forward_ref"),Nu=Symbol.for("react.suspense"),bu=Symbol.for("react.memo"),ku=Symbol.for("react.lazy"),Aa=Symbol.iterator;function wu(s){return s===null||typeof s!="object"?null:(s=Aa&&s[Aa]||s["@@iterator"],typeof s=="function"?s:null)}var Vc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wc=Object.assign,Qc={};function Ot(s,t,l){this.props=s,this.context=t,this.refs=Qc,this.updater=l||Vc}Ot.prototype.isReactComponent={};Ot.prototype.setState=function(s,t){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,t,"setState")};Ot.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function Yc(){}Yc.prototype=Ot.prototype;function Rr(s,t,l){this.props=s,this.context=t,this.refs=Qc,this.updater=l||Vc}var Er=Rr.prototype=new Yc;Er.constructor=Rr;Wc(Er,Ot.prototype);Er.isPureReactComponent=!0;var Ta=Array.isArray,qc=Object.prototype.hasOwnProperty,Cr={current:null},Gc={key:!0,ref:!0,__self:!0,__source:!0};function Kc(s,t,l){var n,i={},r=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(r=""+t.key),t)qc.call(t,n)&&!Gc.hasOwnProperty(n)&&(i[n]=t[n]);var c=arguments.length-2;if(c===1)i.children=l;else if(1<c){for(var o=Array(c),m=0;m<c;m++)o[m]=arguments[m+2];i.children=o}if(s&&s.defaultProps)for(n in c=s.defaultProps,c)i[n]===void 0&&(i[n]=c[n]);return{$$typeof:Rl,type:s,key:r,ref:a,props:i,_owner:Cr.current}}function Su(s,t){return{$$typeof:Rl,type:s.type,key:t,ref:s.ref,props:s.props,_owner:s._owner}}function Ar(s){return typeof s=="object"&&s!==null&&s.$$typeof===Rl}function Ru(s){var t={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(l){return t[l]})}var Pa=/\/+/g;function ci(s,t){return typeof s=="object"&&s!==null&&s.key!=null?Ru(""+s.key):t.toString(36)}function Zl(s,t,l,n,i){var r=typeof s;(r==="undefined"||r==="boolean")&&(s=null);var a=!1;if(s===null)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(s.$$typeof){case Rl:case fu:a=!0}}if(a)return a=s,i=i(a),s=n===""?"."+ci(a,0):n,Ta(i)?(l="",s!=null&&(l=s.replace(Pa,"$&/")+"/"),Zl(i,t,l,"",function(m){return m})):i!=null&&(Ar(i)&&(i=Su(i,l+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Pa,"$&/")+"/")+s)),t.push(i)),1;if(a=0,n=n===""?".":n+":",Ta(s))for(var c=0;c<s.length;c++){r=s[c];var o=n+ci(r,c);a+=Zl(r,t,l,o,i)}else if(o=wu(s),typeof o=="function")for(s=o.call(s),c=0;!(r=s.next()).done;)r=r.value,o=n+ci(r,c++),a+=Zl(r,t,l,o,i);else if(r==="object")throw t=String(s),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Dl(s,t,l){if(s==null)return s;var n=[],i=0;return Zl(s,n,"","",function(r){return t.call(l,r,i++)}),n}function Eu(s){if(s._status===-1){var t=s._result;t=t(),t.then(function(l){(s._status===0||s._status===-1)&&(s._status=1,s._result=l)},function(l){(s._status===0||s._status===-1)&&(s._status=2,s._result=l)}),s._status===-1&&(s._status=0,s._result=t)}if(s._status===1)return s._result.default;throw s._result}var Ne={current:null},en={transition:null},Cu={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:en,ReactCurrentOwner:Cr};function Jc(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Dl,forEach:function(s,t,l){Dl(s,function(){t.apply(this,arguments)},l)},count:function(s){var t=0;return Dl(s,function(){t++}),t},toArray:function(s){return Dl(s,function(t){return t})||[]},only:function(s){if(!Ar(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};D.Component=Ot;D.Fragment=xu;D.Profiler=ju;D.PureComponent=Rr;D.StrictMode=gu;D.Suspense=Nu;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cu;D.act=Jc;D.cloneElement=function(s,t,l){if(s==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+s+".");var n=Wc({},s.props),i=s.key,r=s.ref,a=s._owner;if(t!=null){if(t.ref!==void 0&&(r=t.ref,a=Cr.current),t.key!==void 0&&(i=""+t.key),s.type&&s.type.defaultProps)var c=s.type.defaultProps;for(o in t)qc.call(t,o)&&!Gc.hasOwnProperty(o)&&(n[o]=t[o]===void 0&&c!==void 0?c[o]:t[o])}var o=arguments.length-2;if(o===1)n.children=l;else if(1<o){c=Array(o);for(var m=0;m<o;m++)c[m]=arguments[m+2];n.children=c}return{$$typeof:Rl,type:s.type,key:i,ref:r,props:n,_owner:a}};D.createContext=function(s){return s={$$typeof:yu,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},s.Provider={$$typeof:_u,_context:s},s.Consumer=s};D.createElement=Kc;D.createFactory=function(s){var t=Kc.bind(null,s);return t.type=s,t};D.createRef=function(){return{current:null}};D.forwardRef=function(s){return{$$typeof:vu,render:s}};D.isValidElement=Ar;D.lazy=function(s){return{$$typeof:ku,_payload:{_status:-1,_result:s},_init:Eu}};D.memo=function(s,t){return{$$typeof:bu,type:s,compare:t===void 0?null:t}};D.startTransition=function(s){var t=en.transition;en.transition={};try{s()}finally{en.transition=t}};D.unstable_act=Jc;D.useCallback=function(s,t){return Ne.current.useCallback(s,t)};D.useContext=function(s){return Ne.current.useContext(s)};D.useDebugValue=function(){};D.useDeferredValue=function(s){return Ne.current.useDeferredValue(s)};D.useEffect=function(s,t){return Ne.current.useEffect(s,t)};D.useId=function(){return Ne.current.useId()};D.useImperativeHandle=function(s,t,l){return Ne.current.useImperativeHandle(s,t,l)};D.useInsertionEffect=function(s,t){return Ne.current.useInsertionEffect(s,t)};D.useLayoutEffect=function(s,t){return Ne.current.useLayoutEffect(s,t)};D.useMemo=function(s,t){return Ne.current.useMemo(s,t)};D.useReducer=function(s,t,l){return Ne.current.useReducer(s,t,l)};D.useRef=function(s){return Ne.current.useRef(s)};D.useState=function(s){return Ne.current.useState(s)};D.useSyncExternalStore=function(s,t,l){return Ne.current.useSyncExternalStore(s,t,l)};D.useTransition=function(){return Ne.current.useTransition()};D.version="18.3.1";Uc.exports=D;var $=Uc.exports;const Xc=hu($);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au=$,Tu=Symbol.for("react.element"),Pu=Symbol.for("react.fragment"),zu=Object.prototype.hasOwnProperty,Lu=Au.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mu={key:!0,ref:!0,__self:!0,__source:!0};function Zc(s,t,l){var n,i={},r=null,a=null;l!==void 0&&(r=""+l),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)zu.call(t,n)&&!Mu.hasOwnProperty(n)&&(i[n]=t[n]);if(s&&s.defaultProps)for(n in t=s.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Tu,type:s,key:r,ref:a,props:i,_owner:Lu.current}}On.Fragment=Pu;On.jsx=Zc;On.jsxs=Zc;Fc.exports=On;var e=Fc.exports,Li={},eo={exports:{}},Le={},so={exports:{}},to={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(s){function t(C,L){var M=C.length;C.push(L);e:for(;0<M;){var se=M-1>>>1,oe=C[se];if(0<i(oe,L))C[se]=L,C[M]=oe,M=se;else break e}}function l(C){return C.length===0?null:C[0]}function n(C){if(C.length===0)return null;var L=C[0],M=C.pop();if(M!==L){C[0]=M;e:for(var se=0,oe=C.length,Ll=oe>>>1;se<Ll;){var $s=2*(se+1)-1,ai=C[$s],Fs=$s+1,Ml=C[Fs];if(0>i(ai,M))Fs<oe&&0>i(Ml,ai)?(C[se]=Ml,C[Fs]=M,se=Fs):(C[se]=ai,C[$s]=M,se=$s);else if(Fs<oe&&0>i(Ml,M))C[se]=Ml,C[Fs]=M,se=Fs;else break e}}return L}function i(C,L){var M=C.sortIndex-L.sortIndex;return M!==0?M:C.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;s.unstable_now=function(){return r.now()}}else{var a=Date,c=a.now();s.unstable_now=function(){return a.now()-c}}var o=[],m=[],j=1,_=null,g=3,b=!1,k=!1,S=!1,z=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var L=l(m);L!==null;){if(L.callback===null)n(m);else if(L.startTime<=C)n(m),L.sortIndex=L.expirationTime,t(o,L);else break;L=l(m)}}function y(C){if(S=!1,h(C),!k)if(l(o)!==null)k=!0,ii(R);else{var L=l(m);L!==null&&ri(y,L.startTime-C)}}function R(C,L){k=!1,S&&(S=!1,p(P),P=-1),b=!0;var M=g;try{for(h(L),_=l(o);_!==null&&(!(_.expirationTime>L)||C&&!Ue());){var se=_.callback;if(typeof se=="function"){_.callback=null,g=_.priorityLevel;var oe=se(_.expirationTime<=L);L=s.unstable_now(),typeof oe=="function"?_.callback=oe:_===l(o)&&n(o),h(L)}else n(o);_=l(o)}if(_!==null)var Ll=!0;else{var $s=l(m);$s!==null&&ri(y,$s.startTime-L),Ll=!1}return Ll}finally{_=null,g=M,b=!1}}var A=!1,T=null,P=-1,ee=5,O=-1;function Ue(){return!(s.unstable_now()-O<ee)}function Ht(){if(T!==null){var C=s.unstable_now();O=C;var L=!0;try{L=T(!0,C)}finally{L?$t():(A=!1,T=null)}}else A=!1}var $t;if(typeof u=="function")$t=function(){u(Ht)};else if(typeof MessageChannel<"u"){var Ca=new MessageChannel,pu=Ca.port2;Ca.port1.onmessage=Ht,$t=function(){pu.postMessage(null)}}else $t=function(){z(Ht,0)};function ii(C){T=C,A||(A=!0,$t())}function ri(C,L){P=z(function(){C(s.unstable_now())},L)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(C){C.callback=null},s.unstable_continueExecution=function(){k||b||(k=!0,ii(R))},s.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<C?Math.floor(1e3/C):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return l(o)},s.unstable_next=function(C){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var M=g;g=L;try{return C()}finally{g=M}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(C,L){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var M=g;g=C;try{return L()}finally{g=M}},s.unstable_scheduleCallback=function(C,L,M){var se=s.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?se+M:se):M=se,C){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=M+oe,C={id:j++,callback:L,priorityLevel:C,startTime:M,expirationTime:oe,sortIndex:-1},M>se?(C.sortIndex=M,t(m,C),l(o)===null&&C===l(m)&&(S?(p(P),P=-1):S=!0,ri(y,M-se))):(C.sortIndex=oe,t(o,C),k||b||(k=!0,ii(R))),C},s.unstable_shouldYield=Ue,s.unstable_wrapCallback=function(C){var L=g;return function(){var M=g;g=L;try{return C.apply(this,arguments)}finally{g=M}}}})(to);so.exports=to;var Du=so.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou=$,Pe=Du;function v(s){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+s,l=1;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+s+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lo=new Set,ol={};function tt(s,t){Ct(s,t),Ct(s+"Capture",t)}function Ct(s,t){for(ol[s]=t,s=0;s<t.length;s++)lo.add(t[s])}var us=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mi=Object.prototype.hasOwnProperty,Iu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,za={},La={};function Bu(s){return Mi.call(La,s)?!0:Mi.call(za,s)?!1:Iu.test(s)?La[s]=!0:(za[s]=!0,!1)}function Hu(s,t,l,n){if(l!==null&&l.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:l!==null?!l.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function $u(s,t,l,n){if(t===null||typeof t>"u"||Hu(s,t,l,n))return!0;if(n)return!1;if(l!==null)switch(l.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(s,t,l,n,i,r,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=l,this.propertyName=s,this.type=t,this.sanitizeURL=r,this.removeEmptyString=a}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){he[s]=new be(s,0,!1,s,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var t=s[0];he[t]=new be(t,1,!1,s[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(s){he[s]=new be(s,2,!1,s.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){he[s]=new be(s,2,!1,s,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){he[s]=new be(s,3,!1,s.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(s){he[s]=new be(s,3,!0,s,null,!1,!1)});["capture","download"].forEach(function(s){he[s]=new be(s,4,!1,s,null,!1,!1)});["cols","rows","size","span"].forEach(function(s){he[s]=new be(s,6,!1,s,null,!1,!1)});["rowSpan","start"].forEach(function(s){he[s]=new be(s,5,!1,s.toLowerCase(),null,!1,!1)});var Tr=/[\-:]([a-z])/g;function Pr(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var t=s.replace(Tr,Pr);he[t]=new be(t,1,!1,s,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var t=s.replace(Tr,Pr);he[t]=new be(t,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(s){var t=s.replace(Tr,Pr);he[t]=new be(t,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(s){he[s]=new be(s,1,!1,s.toLowerCase(),null,!1,!1)});he.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(s){he[s]=new be(s,1,!1,s.toLowerCase(),null,!0,!0)});function zr(s,t,l,n){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($u(t,l,i,n)&&(l=null),n||i===null?Bu(t)&&(l===null?s.removeAttribute(t):s.setAttribute(t,""+l)):i.mustUseProperty?s[i.propertyName]=l===null?i.type===3?!1:"":l:(t=i.attributeName,n=i.attributeNamespace,l===null?s.removeAttribute(t):(i=i.type,l=i===3||i===4&&l===!0?"":""+l,n?s.setAttributeNS(n,t,l):s.setAttribute(t,l))))}var fs=Ou.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ol=Symbol.for("react.element"),dt=Symbol.for("react.portal"),ut=Symbol.for("react.fragment"),Lr=Symbol.for("react.strict_mode"),Di=Symbol.for("react.profiler"),no=Symbol.for("react.provider"),io=Symbol.for("react.context"),Mr=Symbol.for("react.forward_ref"),Oi=Symbol.for("react.suspense"),Ii=Symbol.for("react.suspense_list"),Dr=Symbol.for("react.memo"),_s=Symbol.for("react.lazy"),ro=Symbol.for("react.offscreen"),Ma=Symbol.iterator;function Ft(s){return s===null||typeof s!="object"?null:(s=Ma&&s[Ma]||s["@@iterator"],typeof s=="function"?s:null)}var X=Object.assign,oi;function Kt(s){if(oi===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);oi=t&&t[1]||""}return`
`+oi+s}var di=!1;function ui(s,t){if(!s||di)return"";di=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var n=m}Reflect.construct(s,[],t)}else{try{t.call()}catch(m){n=m}s.call(t.prototype)}else{try{throw Error()}catch(m){n=m}s()}}catch(m){if(m&&n&&typeof m.stack=="string"){for(var i=m.stack.split(`
`),r=n.stack.split(`
`),a=i.length-1,c=r.length-1;1<=a&&0<=c&&i[a]!==r[c];)c--;for(;1<=a&&0<=c;a--,c--)if(i[a]!==r[c]){if(a!==1||c!==1)do if(a--,c--,0>c||i[a]!==r[c]){var o=`
`+i[a].replace(" at new "," at ");return s.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",s.displayName)),o}while(1<=a&&0<=c);break}}}finally{di=!1,Error.prepareStackTrace=l}return(s=s?s.displayName||s.name:"")?Kt(s):""}function Fu(s){switch(s.tag){case 5:return Kt(s.type);case 16:return Kt("Lazy");case 13:return Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 2:case 15:return s=ui(s.type,!1),s;case 11:return s=ui(s.type.render,!1),s;case 1:return s=ui(s.type,!0),s;default:return""}}function Bi(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case ut:return"Fragment";case dt:return"Portal";case Di:return"Profiler";case Lr:return"StrictMode";case Oi:return"Suspense";case Ii:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case io:return(s.displayName||"Context")+".Consumer";case no:return(s._context.displayName||"Context")+".Provider";case Mr:var t=s.render;return s=s.displayName,s||(s=t.displayName||t.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case Dr:return t=s.displayName||null,t!==null?t:Bi(s.type)||"Memo";case _s:t=s._payload,s=s._init;try{return Bi(s(t))}catch{}}return null}function Uu(s){var t=s.type;switch(s.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=t.render,s=s.displayName||s.name||"",t.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bi(t);case 8:return t===Lr?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zs(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function ao(s){var t=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vu(s){var t=ao(s)?"checked":"value",l=Object.getOwnPropertyDescriptor(s.constructor.prototype,t),n=""+s[t];if(!s.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,r=l.set;return Object.defineProperty(s,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,r.call(this,a)}}),Object.defineProperty(s,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){s._valueTracker=null,delete s[t]}}}}function Il(s){s._valueTracker||(s._valueTracker=Vu(s))}function co(s){if(!s)return!1;var t=s._valueTracker;if(!t)return!0;var l=t.getValue(),n="";return s&&(n=ao(s)?s.checked?"true":"false":s.value),s=n,s!==l?(t.setValue(s),!0):!1}function pn(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function Hi(s,t){var l=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??s._wrapperState.initialChecked})}function Da(s,t){var l=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;l=zs(t.value!=null?t.value:l),s._wrapperState={initialChecked:n,initialValue:l,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function oo(s,t){t=t.checked,t!=null&&zr(s,"checked",t,!1)}function $i(s,t){oo(s,t);var l=zs(t.value),n=t.type;if(l!=null)n==="number"?(l===0&&s.value===""||s.value!=l)&&(s.value=""+l):s.value!==""+l&&(s.value=""+l);else if(n==="submit"||n==="reset"){s.removeAttribute("value");return}t.hasOwnProperty("value")?Fi(s,t.type,l):t.hasOwnProperty("defaultValue")&&Fi(s,t.type,zs(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(s.defaultChecked=!!t.defaultChecked)}function Oa(s,t,l){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+s._wrapperState.initialValue,l||t===s.value||(s.value=t),s.defaultValue=t}l=s.name,l!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,l!==""&&(s.name=l)}function Fi(s,t,l){(t!=="number"||pn(s.ownerDocument)!==s)&&(l==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+l&&(s.defaultValue=""+l))}var Jt=Array.isArray;function bt(s,t,l,n){if(s=s.options,t){t={};for(var i=0;i<l.length;i++)t["$"+l[i]]=!0;for(l=0;l<s.length;l++)i=t.hasOwnProperty("$"+s[l].value),s[l].selected!==i&&(s[l].selected=i),i&&n&&(s[l].defaultSelected=!0)}else{for(l=""+zs(l),t=null,i=0;i<s.length;i++){if(s[i].value===l){s[i].selected=!0,n&&(s[i].defaultSelected=!0);return}t!==null||s[i].disabled||(t=s[i])}t!==null&&(t.selected=!0)}}function Ui(s,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function Ia(s,t){var l=t.value;if(l==null){if(l=t.children,t=t.defaultValue,l!=null){if(t!=null)throw Error(v(92));if(Jt(l)){if(1<l.length)throw Error(v(93));l=l[0]}t=l}t==null&&(t=""),l=t}s._wrapperState={initialValue:zs(l)}}function uo(s,t){var l=zs(t.value),n=zs(t.defaultValue);l!=null&&(l=""+l,l!==s.value&&(s.value=l),t.defaultValue==null&&s.defaultValue!==l&&(s.defaultValue=l)),n!=null&&(s.defaultValue=""+n)}function Ba(s){var t=s.textContent;t===s._wrapperState.initialValue&&t!==""&&t!==null&&(s.value=t)}function mo(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vi(s,t){return s==null||s==="http://www.w3.org/1999/xhtml"?mo(t):s==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var Bl,po=function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,l,n,i){MSApp.execUnsafeLocalFunction(function(){return s(t,l,n,i)})}:s}(function(s,t){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=t;else{for(Bl=Bl||document.createElement("div"),Bl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bl.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;t.firstChild;)s.appendChild(t.firstChild)}});function dl(s,t){if(t){var l=s.firstChild;if(l&&l===s.lastChild&&l.nodeType===3){l.nodeValue=t;return}}s.textContent=t}var el={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wu=["Webkit","ms","Moz","O"];Object.keys(el).forEach(function(s){Wu.forEach(function(t){t=t+s.charAt(0).toUpperCase()+s.substring(1),el[t]=el[s]})});function ho(s,t,l){return t==null||typeof t=="boolean"||t===""?"":l||typeof t!="number"||t===0||el.hasOwnProperty(s)&&el[s]?(""+t).trim():t+"px"}function fo(s,t){s=s.style;for(var l in t)if(t.hasOwnProperty(l)){var n=l.indexOf("--")===0,i=ho(l,t[l],n);l==="float"&&(l="cssFloat"),n?s.setProperty(l,i):s[l]=i}}var Qu=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wi(s,t){if(t){if(Qu[s]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,s));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function Qi(s,t){if(s.indexOf("-")===-1)return typeof t.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=null;function Or(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var qi=null,kt=null,wt=null;function Ha(s){if(s=Al(s)){if(typeof qi!="function")throw Error(v(280));var t=s.stateNode;t&&(t=Fn(t),qi(s.stateNode,s.type,t))}}function xo(s){kt?wt?wt.push(s):wt=[s]:kt=s}function go(){if(kt){var s=kt,t=wt;if(wt=kt=null,Ha(s),t)for(s=0;s<t.length;s++)Ha(t[s])}}function jo(s,t){return s(t)}function _o(){}var mi=!1;function yo(s,t,l){if(mi)return s(t,l);mi=!0;try{return jo(s,t,l)}finally{mi=!1,(kt!==null||wt!==null)&&(_o(),go())}}function ul(s,t){var l=s.stateNode;if(l===null)return null;var n=Fn(l);if(n===null)return null;l=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(s=s.type,n=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!n;break e;default:s=!1}if(s)return null;if(l&&typeof l!="function")throw Error(v(231,t,typeof l));return l}var Gi=!1;if(us)try{var Ut={};Object.defineProperty(Ut,"passive",{get:function(){Gi=!0}}),window.addEventListener("test",Ut,Ut),window.removeEventListener("test",Ut,Ut)}catch{Gi=!1}function Yu(s,t,l,n,i,r,a,c,o){var m=Array.prototype.slice.call(arguments,3);try{t.apply(l,m)}catch(j){this.onError(j)}}var sl=!1,hn=null,fn=!1,Ki=null,qu={onError:function(s){sl=!0,hn=s}};function Gu(s,t,l,n,i,r,a,c,o){sl=!1,hn=null,Yu.apply(qu,arguments)}function Ku(s,t,l,n,i,r,a,c,o){if(Gu.apply(this,arguments),sl){if(sl){var m=hn;sl=!1,hn=null}else throw Error(v(198));fn||(fn=!0,Ki=m)}}function lt(s){var t=s,l=s;if(s.alternate)for(;t.return;)t=t.return;else{s=t;do t=s,t.flags&4098&&(l=t.return),s=t.return;while(s)}return t.tag===3?l:null}function vo(s){if(s.tag===13){var t=s.memoizedState;if(t===null&&(s=s.alternate,s!==null&&(t=s.memoizedState)),t!==null)return t.dehydrated}return null}function $a(s){if(lt(s)!==s)throw Error(v(188))}function Ju(s){var t=s.alternate;if(!t){if(t=lt(s),t===null)throw Error(v(188));return t!==s?null:s}for(var l=s,n=t;;){var i=l.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){l=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===l)return $a(i),s;if(r===n)return $a(i),t;r=r.sibling}throw Error(v(188))}if(l.return!==n.return)l=i,n=r;else{for(var a=!1,c=i.child;c;){if(c===l){a=!0,l=i,n=r;break}if(c===n){a=!0,n=i,l=r;break}c=c.sibling}if(!a){for(c=r.child;c;){if(c===l){a=!0,l=r,n=i;break}if(c===n){a=!0,n=r,l=i;break}c=c.sibling}if(!a)throw Error(v(189))}}if(l.alternate!==n)throw Error(v(190))}if(l.tag!==3)throw Error(v(188));return l.stateNode.current===l?s:t}function No(s){return s=Ju(s),s!==null?bo(s):null}function bo(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var t=bo(s);if(t!==null)return t;s=s.sibling}return null}var ko=Pe.unstable_scheduleCallback,Fa=Pe.unstable_cancelCallback,Xu=Pe.unstable_shouldYield,Zu=Pe.unstable_requestPaint,te=Pe.unstable_now,em=Pe.unstable_getCurrentPriorityLevel,Ir=Pe.unstable_ImmediatePriority,wo=Pe.unstable_UserBlockingPriority,xn=Pe.unstable_NormalPriority,sm=Pe.unstable_LowPriority,So=Pe.unstable_IdlePriority,In=null,ss=null;function tm(s){if(ss&&typeof ss.onCommitFiberRoot=="function")try{ss.onCommitFiberRoot(In,s,void 0,(s.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:im,lm=Math.log,nm=Math.LN2;function im(s){return s>>>=0,s===0?32:31-(lm(s)/nm|0)|0}var Hl=64,$l=4194304;function Xt(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function gn(s,t){var l=s.pendingLanes;if(l===0)return 0;var n=0,i=s.suspendedLanes,r=s.pingedLanes,a=l&268435455;if(a!==0){var c=a&~i;c!==0?n=Xt(c):(r&=a,r!==0&&(n=Xt(r)))}else a=l&~i,a!==0?n=Xt(a):r!==0&&(n=Xt(r));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,r=t&-t,i>=r||i===16&&(r&4194240)!==0))return t;if(n&4&&(n|=l&16),t=s.entangledLanes,t!==0)for(s=s.entanglements,t&=n;0<t;)l=31-qe(t),i=1<<l,n|=s[l],t&=~i;return n}function rm(s,t){switch(s){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function am(s,t){for(var l=s.suspendedLanes,n=s.pingedLanes,i=s.expirationTimes,r=s.pendingLanes;0<r;){var a=31-qe(r),c=1<<a,o=i[a];o===-1?(!(c&l)||c&n)&&(i[a]=rm(c,t)):o<=t&&(s.expiredLanes|=c),r&=~c}}function Ji(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function Ro(){var s=Hl;return Hl<<=1,!(Hl&4194240)&&(Hl=64),s}function pi(s){for(var t=[],l=0;31>l;l++)t.push(s);return t}function El(s,t,l){s.pendingLanes|=t,t!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,t=31-qe(t),s[t]=l}function cm(s,t){var l=s.pendingLanes&~t;s.pendingLanes=t,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=t,s.mutableReadLanes&=t,s.entangledLanes&=t,t=s.entanglements;var n=s.eventTimes;for(s=s.expirationTimes;0<l;){var i=31-qe(l),r=1<<i;t[i]=0,n[i]=-1,s[i]=-1,l&=~r}}function Br(s,t){var l=s.entangledLanes|=t;for(s=s.entanglements;l;){var n=31-qe(l),i=1<<n;i&t|s[n]&t&&(s[n]|=t),l&=~i}}var U=0;function Eo(s){return s&=-s,1<s?4<s?s&268435455?16:536870912:4:1}var Co,Hr,Ao,To,Po,Xi=!1,Fl=[],ws=null,Ss=null,Rs=null,ml=new Map,pl=new Map,vs=[],om="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ua(s,t){switch(s){case"focusin":case"focusout":ws=null;break;case"dragenter":case"dragleave":Ss=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":ml.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(t.pointerId)}}function Vt(s,t,l,n,i,r){return s===null||s.nativeEvent!==r?(s={blockedOn:t,domEventName:l,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=Al(t),t!==null&&Hr(t)),s):(s.eventSystemFlags|=n,t=s.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),s)}function dm(s,t,l,n,i){switch(t){case"focusin":return ws=Vt(ws,s,t,l,n,i),!0;case"dragenter":return Ss=Vt(Ss,s,t,l,n,i),!0;case"mouseover":return Rs=Vt(Rs,s,t,l,n,i),!0;case"pointerover":var r=i.pointerId;return ml.set(r,Vt(ml.get(r)||null,s,t,l,n,i)),!0;case"gotpointercapture":return r=i.pointerId,pl.set(r,Vt(pl.get(r)||null,s,t,l,n,i)),!0}return!1}function zo(s){var t=Ws(s.target);if(t!==null){var l=lt(t);if(l!==null){if(t=l.tag,t===13){if(t=vo(l),t!==null){s.blockedOn=t,Po(s.priority,function(){Ao(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){s.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}s.blockedOn=null}function sn(s){if(s.blockedOn!==null)return!1;for(var t=s.targetContainers;0<t.length;){var l=Zi(s.domEventName,s.eventSystemFlags,t[0],s.nativeEvent);if(l===null){l=s.nativeEvent;var n=new l.constructor(l.type,l);Yi=n,l.target.dispatchEvent(n),Yi=null}else return t=Al(l),t!==null&&Hr(t),s.blockedOn=l,!1;t.shift()}return!0}function Va(s,t,l){sn(s)&&l.delete(t)}function um(){Xi=!1,ws!==null&&sn(ws)&&(ws=null),Ss!==null&&sn(Ss)&&(Ss=null),Rs!==null&&sn(Rs)&&(Rs=null),ml.forEach(Va),pl.forEach(Va)}function Wt(s,t){s.blockedOn===t&&(s.blockedOn=null,Xi||(Xi=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,um)))}function hl(s){function t(i){return Wt(i,s)}if(0<Fl.length){Wt(Fl[0],s);for(var l=1;l<Fl.length;l++){var n=Fl[l];n.blockedOn===s&&(n.blockedOn=null)}}for(ws!==null&&Wt(ws,s),Ss!==null&&Wt(Ss,s),Rs!==null&&Wt(Rs,s),ml.forEach(t),pl.forEach(t),l=0;l<vs.length;l++)n=vs[l],n.blockedOn===s&&(n.blockedOn=null);for(;0<vs.length&&(l=vs[0],l.blockedOn===null);)zo(l),l.blockedOn===null&&vs.shift()}var St=fs.ReactCurrentBatchConfig,jn=!0;function mm(s,t,l,n){var i=U,r=St.transition;St.transition=null;try{U=1,$r(s,t,l,n)}finally{U=i,St.transition=r}}function pm(s,t,l,n){var i=U,r=St.transition;St.transition=null;try{U=4,$r(s,t,l,n)}finally{U=i,St.transition=r}}function $r(s,t,l,n){if(jn){var i=Zi(s,t,l,n);if(i===null)bi(s,t,n,_n,l),Ua(s,n);else if(dm(i,s,t,l,n))n.stopPropagation();else if(Ua(s,n),t&4&&-1<om.indexOf(s)){for(;i!==null;){var r=Al(i);if(r!==null&&Co(r),r=Zi(s,t,l,n),r===null&&bi(s,t,n,_n,l),r===i)break;i=r}i!==null&&n.stopPropagation()}else bi(s,t,n,null,l)}}var _n=null;function Zi(s,t,l,n){if(_n=null,s=Or(n),s=Ws(s),s!==null)if(t=lt(s),t===null)s=null;else if(l=t.tag,l===13){if(s=vo(t),s!==null)return s;s=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;s=null}else t!==s&&(s=null);return _n=s,null}function Lo(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(em()){case Ir:return 1;case wo:return 4;case xn:case sm:return 16;case So:return 536870912;default:return 16}default:return 16}}var bs=null,Fr=null,tn=null;function Mo(){if(tn)return tn;var s,t=Fr,l=t.length,n,i="value"in bs?bs.value:bs.textContent,r=i.length;for(s=0;s<l&&t[s]===i[s];s++);var a=l-s;for(n=1;n<=a&&t[l-n]===i[r-n];n++);return tn=i.slice(s,1<n?1-n:void 0)}function ln(s){var t=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&t===13&&(s=13)):s=t,s===10&&(s=13),32<=s||s===13?s:0}function Ul(){return!0}function Wa(){return!1}function Me(s){function t(l,n,i,r,a){this._reactName=l,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var c in s)s.hasOwnProperty(c)&&(l=s[c],this[c]=l?l(r):r[c]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ul:Wa,this.isPropagationStopped=Wa,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),t}var It={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ur=Me(It),Cl=X({},It,{view:0,detail:0}),hm=Me(Cl),hi,fi,Qt,Bn=X({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vr,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==Qt&&(Qt&&s.type==="mousemove"?(hi=s.screenX-Qt.screenX,fi=s.screenY-Qt.screenY):fi=hi=0,Qt=s),hi)},movementY:function(s){return"movementY"in s?s.movementY:fi}}),Qa=Me(Bn),fm=X({},Bn,{dataTransfer:0}),xm=Me(fm),gm=X({},Cl,{relatedTarget:0}),xi=Me(gm),jm=X({},It,{animationName:0,elapsedTime:0,pseudoElement:0}),_m=Me(jm),ym=X({},It,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),vm=Me(ym),Nm=X({},It,{data:0}),Ya=Me(Nm),bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sm(s){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(s):(s=wm[s])?!!t[s]:!1}function Vr(){return Sm}var Rm=X({},Cl,{key:function(s){if(s.key){var t=bm[s.key]||s.key;if(t!=="Unidentified")return t}return s.type==="keypress"?(s=ln(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?km[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vr,charCode:function(s){return s.type==="keypress"?ln(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?ln(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),Em=Me(Rm),Cm=X({},Bn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qa=Me(Cm),Am=X({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vr}),Tm=Me(Am),Pm=X({},It,{propertyName:0,elapsedTime:0,pseudoElement:0}),zm=Me(Pm),Lm=X({},Bn,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),Mm=Me(Lm),Dm=[9,13,27,32],Wr=us&&"CompositionEvent"in window,tl=null;us&&"documentMode"in document&&(tl=document.documentMode);var Om=us&&"TextEvent"in window&&!tl,Do=us&&(!Wr||tl&&8<tl&&11>=tl),Ga=" ",Ka=!1;function Oo(s,t){switch(s){case"keyup":return Dm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Io(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var mt=!1;function Im(s,t){switch(s){case"compositionend":return Io(t);case"keypress":return t.which!==32?null:(Ka=!0,Ga);case"textInput":return s=t.data,s===Ga&&Ka?null:s;default:return null}}function Bm(s,t){if(mt)return s==="compositionend"||!Wr&&Oo(s,t)?(s=Mo(),tn=Fr=bs=null,mt=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Do&&t.locale!=="ko"?null:t.data;default:return null}}var Hm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ja(s){var t=s&&s.nodeName&&s.nodeName.toLowerCase();return t==="input"?!!Hm[s.type]:t==="textarea"}function Bo(s,t,l,n){xo(n),t=yn(t,"onChange"),0<t.length&&(l=new Ur("onChange","change",null,l,n),s.push({event:l,listeners:t}))}var ll=null,fl=null;function $m(s){Ko(s,0)}function Hn(s){var t=ft(s);if(co(t))return s}function Fm(s,t){if(s==="change")return t}var Ho=!1;if(us){var gi;if(us){var ji="oninput"in document;if(!ji){var Xa=document.createElement("div");Xa.setAttribute("oninput","return;"),ji=typeof Xa.oninput=="function"}gi=ji}else gi=!1;Ho=gi&&(!document.documentMode||9<document.documentMode)}function Za(){ll&&(ll.detachEvent("onpropertychange",$o),fl=ll=null)}function $o(s){if(s.propertyName==="value"&&Hn(fl)){var t=[];Bo(t,fl,s,Or(s)),yo($m,t)}}function Um(s,t,l){s==="focusin"?(Za(),ll=t,fl=l,ll.attachEvent("onpropertychange",$o)):s==="focusout"&&Za()}function Vm(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return Hn(fl)}function Wm(s,t){if(s==="click")return Hn(t)}function Qm(s,t){if(s==="input"||s==="change")return Hn(t)}function Ym(s,t){return s===t&&(s!==0||1/s===1/t)||s!==s&&t!==t}var Ke=typeof Object.is=="function"?Object.is:Ym;function xl(s,t){if(Ke(s,t))return!0;if(typeof s!="object"||s===null||typeof t!="object"||t===null)return!1;var l=Object.keys(s),n=Object.keys(t);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var i=l[n];if(!Mi.call(t,i)||!Ke(s[i],t[i]))return!1}return!0}function ec(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function sc(s,t){var l=ec(s);s=0;for(var n;l;){if(l.nodeType===3){if(n=s+l.textContent.length,s<=t&&n>=t)return{node:l,offset:t-s};s=n}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ec(l)}}function Fo(s,t){return s&&t?s===t?!0:s&&s.nodeType===3?!1:t&&t.nodeType===3?Fo(s,t.parentNode):"contains"in s?s.contains(t):s.compareDocumentPosition?!!(s.compareDocumentPosition(t)&16):!1:!1}function Uo(){for(var s=window,t=pn();t instanceof s.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)s=t.contentWindow;else break;t=pn(s.document)}return t}function Qr(s){var t=s&&s.nodeName&&s.nodeName.toLowerCase();return t&&(t==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||t==="textarea"||s.contentEditable==="true")}function qm(s){var t=Uo(),l=s.focusedElem,n=s.selectionRange;if(t!==l&&l&&l.ownerDocument&&Fo(l.ownerDocument.documentElement,l)){if(n!==null&&Qr(l)){if(t=n.start,s=n.end,s===void 0&&(s=t),"selectionStart"in l)l.selectionStart=t,l.selectionEnd=Math.min(s,l.value.length);else if(s=(t=l.ownerDocument||document)&&t.defaultView||window,s.getSelection){s=s.getSelection();var i=l.textContent.length,r=Math.min(n.start,i);n=n.end===void 0?r:Math.min(n.end,i),!s.extend&&r>n&&(i=n,n=r,r=i),i=sc(l,r);var a=sc(l,n);i&&a&&(s.rangeCount!==1||s.anchorNode!==i.node||s.anchorOffset!==i.offset||s.focusNode!==a.node||s.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),s.removeAllRanges(),r>n?(s.addRange(t),s.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),s.addRange(t)))}}for(t=[],s=l;s=s.parentNode;)s.nodeType===1&&t.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<t.length;l++)s=t[l],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var Gm=us&&"documentMode"in document&&11>=document.documentMode,pt=null,er=null,nl=null,sr=!1;function tc(s,t,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;sr||pt==null||pt!==pn(n)||(n=pt,"selectionStart"in n&&Qr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),nl&&xl(nl,n)||(nl=n,n=yn(er,"onSelect"),0<n.length&&(t=new Ur("onSelect","select",null,t,l),s.push({event:t,listeners:n}),t.target=pt)))}function Vl(s,t){var l={};return l[s.toLowerCase()]=t.toLowerCase(),l["Webkit"+s]="webkit"+t,l["Moz"+s]="moz"+t,l}var ht={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},_i={},Vo={};us&&(Vo=document.createElement("div").style,"AnimationEvent"in window||(delete ht.animationend.animation,delete ht.animationiteration.animation,delete ht.animationstart.animation),"TransitionEvent"in window||delete ht.transitionend.transition);function $n(s){if(_i[s])return _i[s];if(!ht[s])return s;var t=ht[s],l;for(l in t)if(t.hasOwnProperty(l)&&l in Vo)return _i[s]=t[l];return s}var Wo=$n("animationend"),Qo=$n("animationiteration"),Yo=$n("animationstart"),qo=$n("transitionend"),Go=new Map,lc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ms(s,t){Go.set(s,t),tt(t,[s])}for(var yi=0;yi<lc.length;yi++){var vi=lc[yi],Km=vi.toLowerCase(),Jm=vi[0].toUpperCase()+vi.slice(1);Ms(Km,"on"+Jm)}Ms(Wo,"onAnimationEnd");Ms(Qo,"onAnimationIteration");Ms(Yo,"onAnimationStart");Ms("dblclick","onDoubleClick");Ms("focusin","onFocus");Ms("focusout","onBlur");Ms(qo,"onTransitionEnd");Ct("onMouseEnter",["mouseout","mouseover"]);Ct("onMouseLeave",["mouseout","mouseover"]);Ct("onPointerEnter",["pointerout","pointerover"]);Ct("onPointerLeave",["pointerout","pointerover"]);tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zt));function nc(s,t,l){var n=s.type||"unknown-event";s.currentTarget=l,Ku(n,t,void 0,s),s.currentTarget=null}function Ko(s,t){t=(t&4)!==0;for(var l=0;l<s.length;l++){var n=s[l],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var a=n.length-1;0<=a;a--){var c=n[a],o=c.instance,m=c.currentTarget;if(c=c.listener,o!==r&&i.isPropagationStopped())break e;nc(i,c,m),r=o}else for(a=0;a<n.length;a++){if(c=n[a],o=c.instance,m=c.currentTarget,c=c.listener,o!==r&&i.isPropagationStopped())break e;nc(i,c,m),r=o}}}if(fn)throw s=Ki,fn=!1,Ki=null,s}function Q(s,t){var l=t[rr];l===void 0&&(l=t[rr]=new Set);var n=s+"__bubble";l.has(n)||(Jo(t,s,2,!1),l.add(n))}function Ni(s,t,l){var n=0;t&&(n|=4),Jo(l,s,n,t)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function gl(s){if(!s[Wl]){s[Wl]=!0,lo.forEach(function(l){l!=="selectionchange"&&(Xm.has(l)||Ni(l,!1,s),Ni(l,!0,s))});var t=s.nodeType===9?s:s.ownerDocument;t===null||t[Wl]||(t[Wl]=!0,Ni("selectionchange",!1,t))}}function Jo(s,t,l,n){switch(Lo(t)){case 1:var i=mm;break;case 4:i=pm;break;default:i=$r}l=i.bind(null,t,l,s),i=void 0,!Gi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?s.addEventListener(t,l,{capture:!0,passive:i}):s.addEventListener(t,l,!0):i!==void 0?s.addEventListener(t,l,{passive:i}):s.addEventListener(t,l,!1)}function bi(s,t,l,n,i){var r=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var c=n.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===i||o.nodeType===8&&o.parentNode===i))return;a=a.return}for(;c!==null;){if(a=Ws(c),a===null)return;if(o=a.tag,o===5||o===6){n=r=a;continue e}c=c.parentNode}}n=n.return}yo(function(){var m=r,j=Or(l),_=[];e:{var g=Go.get(s);if(g!==void 0){var b=Ur,k=s;switch(s){case"keypress":if(ln(l)===0)break e;case"keydown":case"keyup":b=Em;break;case"focusin":k="focus",b=xi;break;case"focusout":k="blur",b=xi;break;case"beforeblur":case"afterblur":b=xi;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Qa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Tm;break;case Wo:case Qo:case Yo:b=_m;break;case qo:b=zm;break;case"scroll":b=hm;break;case"wheel":b=Mm;break;case"copy":case"cut":case"paste":b=vm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=qa}var S=(t&4)!==0,z=!S&&s==="scroll",p=S?g!==null?g+"Capture":null:g;S=[];for(var u=m,h;u!==null;){h=u;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,p!==null&&(y=ul(u,p),y!=null&&S.push(jl(u,y,h)))),z)break;u=u.return}0<S.length&&(g=new b(g,k,null,l,j),_.push({event:g,listeners:S}))}}if(!(t&7)){e:{if(g=s==="mouseover"||s==="pointerover",b=s==="mouseout"||s==="pointerout",g&&l!==Yi&&(k=l.relatedTarget||l.fromElement)&&(Ws(k)||k[ms]))break e;if((b||g)&&(g=j.window===j?j:(g=j.ownerDocument)?g.defaultView||g.parentWindow:window,b?(k=l.relatedTarget||l.toElement,b=m,k=k?Ws(k):null,k!==null&&(z=lt(k),k!==z||k.tag!==5&&k.tag!==6)&&(k=null)):(b=null,k=m),b!==k)){if(S=Qa,y="onMouseLeave",p="onMouseEnter",u="mouse",(s==="pointerout"||s==="pointerover")&&(S=qa,y="onPointerLeave",p="onPointerEnter",u="pointer"),z=b==null?g:ft(b),h=k==null?g:ft(k),g=new S(y,u+"leave",b,l,j),g.target=z,g.relatedTarget=h,y=null,Ws(j)===m&&(S=new S(p,u+"enter",k,l,j),S.target=h,S.relatedTarget=z,y=S),z=y,b&&k)s:{for(S=b,p=k,u=0,h=S;h;h=ot(h))u++;for(h=0,y=p;y;y=ot(y))h++;for(;0<u-h;)S=ot(S),u--;for(;0<h-u;)p=ot(p),h--;for(;u--;){if(S===p||p!==null&&S===p.alternate)break s;S=ot(S),p=ot(p)}S=null}else S=null;b!==null&&ic(_,g,b,S,!1),k!==null&&z!==null&&ic(_,z,k,S,!0)}}e:{if(g=m?ft(m):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var R=Fm;else if(Ja(g))if(Ho)R=Qm;else{R=Vm;var A=Um}else(b=g.nodeName)&&b.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(R=Wm);if(R&&(R=R(s,m))){Bo(_,R,l,j);break e}A&&A(s,g,m),s==="focusout"&&(A=g._wrapperState)&&A.controlled&&g.type==="number"&&Fi(g,"number",g.value)}switch(A=m?ft(m):window,s){case"focusin":(Ja(A)||A.contentEditable==="true")&&(pt=A,er=m,nl=null);break;case"focusout":nl=er=pt=null;break;case"mousedown":sr=!0;break;case"contextmenu":case"mouseup":case"dragend":sr=!1,tc(_,l,j);break;case"selectionchange":if(Gm)break;case"keydown":case"keyup":tc(_,l,j)}var T;if(Wr)e:{switch(s){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else mt?Oo(s,l)&&(P="onCompositionEnd"):s==="keydown"&&l.keyCode===229&&(P="onCompositionStart");P&&(Do&&l.locale!=="ko"&&(mt||P!=="onCompositionStart"?P==="onCompositionEnd"&&mt&&(T=Mo()):(bs=j,Fr="value"in bs?bs.value:bs.textContent,mt=!0)),A=yn(m,P),0<A.length&&(P=new Ya(P,s,null,l,j),_.push({event:P,listeners:A}),T?P.data=T:(T=Io(l),T!==null&&(P.data=T)))),(T=Om?Im(s,l):Bm(s,l))&&(m=yn(m,"onBeforeInput"),0<m.length&&(j=new Ya("onBeforeInput","beforeinput",null,l,j),_.push({event:j,listeners:m}),j.data=T))}Ko(_,t)})}function jl(s,t,l){return{instance:s,listener:t,currentTarget:l}}function yn(s,t){for(var l=t+"Capture",n=[];s!==null;){var i=s,r=i.stateNode;i.tag===5&&r!==null&&(i=r,r=ul(s,l),r!=null&&n.unshift(jl(s,r,i)),r=ul(s,t),r!=null&&n.push(jl(s,r,i))),s=s.return}return n}function ot(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function ic(s,t,l,n,i){for(var r=t._reactName,a=[];l!==null&&l!==n;){var c=l,o=c.alternate,m=c.stateNode;if(o!==null&&o===n)break;c.tag===5&&m!==null&&(c=m,i?(o=ul(l,r),o!=null&&a.unshift(jl(l,o,c))):i||(o=ul(l,r),o!=null&&a.push(jl(l,o,c)))),l=l.return}a.length!==0&&s.push({event:t,listeners:a})}var Zm=/\r\n?/g,ep=/\u0000|\uFFFD/g;function rc(s){return(typeof s=="string"?s:""+s).replace(Zm,`
`).replace(ep,"")}function Ql(s,t,l){if(t=rc(t),rc(s)!==t&&l)throw Error(v(425))}function vn(){}var tr=null,lr=null;function nr(s,t){return s==="textarea"||s==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ir=typeof setTimeout=="function"?setTimeout:void 0,sp=typeof clearTimeout=="function"?clearTimeout:void 0,ac=typeof Promise=="function"?Promise:void 0,tp=typeof queueMicrotask=="function"?queueMicrotask:typeof ac<"u"?function(s){return ac.resolve(null).then(s).catch(lp)}:ir;function lp(s){setTimeout(function(){throw s})}function ki(s,t){var l=t,n=0;do{var i=l.nextSibling;if(s.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(n===0){s.removeChild(i),hl(t);return}n--}else l!=="$"&&l!=="$?"&&l!=="$!"||n++;l=i}while(l);hl(t)}function Es(s){for(;s!=null;s=s.nextSibling){var t=s.nodeType;if(t===1||t===3)break;if(t===8){if(t=s.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return s}function cc(s){s=s.previousSibling;for(var t=0;s;){if(s.nodeType===8){var l=s.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return s;t--}else l==="/$"&&t++}s=s.previousSibling}return null}var Bt=Math.random().toString(36).slice(2),es="__reactFiber$"+Bt,_l="__reactProps$"+Bt,ms="__reactContainer$"+Bt,rr="__reactEvents$"+Bt,np="__reactListeners$"+Bt,ip="__reactHandles$"+Bt;function Ws(s){var t=s[es];if(t)return t;for(var l=s.parentNode;l;){if(t=l[ms]||l[es]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(s=cc(s);s!==null;){if(l=s[es])return l;s=cc(s)}return t}s=l,l=s.parentNode}return null}function Al(s){return s=s[es]||s[ms],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function ft(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(v(33))}function Fn(s){return s[_l]||null}var ar=[],xt=-1;function Ds(s){return{current:s}}function q(s){0>xt||(s.current=ar[xt],ar[xt]=null,xt--)}function W(s,t){xt++,ar[xt]=s.current,s.current=t}var Ls={},je=Ds(Ls),Se=Ds(!1),Ks=Ls;function At(s,t){var l=s.type.contextTypes;if(!l)return Ls;var n=s.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},r;for(r in l)i[r]=t[r];return n&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=t,s.__reactInternalMemoizedMaskedChildContext=i),i}function Re(s){return s=s.childContextTypes,s!=null}function Nn(){q(Se),q(je)}function oc(s,t,l){if(je.current!==Ls)throw Error(v(168));W(je,t),W(Se,l)}function Xo(s,t,l){var n=s.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return l;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(v(108,Uu(s)||"Unknown",i));return X({},l,n)}function bn(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||Ls,Ks=je.current,W(je,s),W(Se,Se.current),!0}function dc(s,t,l){var n=s.stateNode;if(!n)throw Error(v(169));l?(s=Xo(s,t,Ks),n.__reactInternalMemoizedMergedChildContext=s,q(Se),q(je),W(je,s)):q(Se),W(Se,l)}var as=null,Un=!1,wi=!1;function Zo(s){as===null?as=[s]:as.push(s)}function rp(s){Un=!0,Zo(s)}function Os(){if(!wi&&as!==null){wi=!0;var s=0,t=U;try{var l=as;for(U=1;s<l.length;s++){var n=l[s];do n=n(!0);while(n!==null)}as=null,Un=!1}catch(i){throw as!==null&&(as=as.slice(s+1)),ko(Ir,Os),i}finally{U=t,wi=!1}}return null}var gt=[],jt=0,kn=null,wn=0,De=[],Oe=0,Js=null,cs=1,os="";function Us(s,t){gt[jt++]=wn,gt[jt++]=kn,kn=s,wn=t}function ed(s,t,l){De[Oe++]=cs,De[Oe++]=os,De[Oe++]=Js,Js=s;var n=cs;s=os;var i=32-qe(n)-1;n&=~(1<<i),l+=1;var r=32-qe(t)+i;if(30<r){var a=i-i%5;r=(n&(1<<a)-1).toString(32),n>>=a,i-=a,cs=1<<32-qe(t)+i|l<<i|n,os=r+s}else cs=1<<r|l<<i|n,os=s}function Yr(s){s.return!==null&&(Us(s,1),ed(s,1,0))}function qr(s){for(;s===kn;)kn=gt[--jt],gt[jt]=null,wn=gt[--jt],gt[jt]=null;for(;s===Js;)Js=De[--Oe],De[Oe]=null,os=De[--Oe],De[Oe]=null,cs=De[--Oe],De[Oe]=null}var Te=null,Ae=null,G=!1,Ye=null;function sd(s,t){var l=Ie(5,null,null,0);l.elementType="DELETED",l.stateNode=t,l.return=s,t=s.deletions,t===null?(s.deletions=[l],s.flags|=16):t.push(l)}function uc(s,t){switch(s.tag){case 5:var l=s.type;return t=t.nodeType!==1||l.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(s.stateNode=t,Te=s,Ae=Es(t.firstChild),!0):!1;case 6:return t=s.pendingProps===""||t.nodeType!==3?null:t,t!==null?(s.stateNode=t,Te=s,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(l=Js!==null?{id:cs,overflow:os}:null,s.memoizedState={dehydrated:t,treeContext:l,retryLane:1073741824},l=Ie(18,null,null,0),l.stateNode=t,l.return=s,s.child=l,Te=s,Ae=null,!0):!1;default:return!1}}function cr(s){return(s.mode&1)!==0&&(s.flags&128)===0}function or(s){if(G){var t=Ae;if(t){var l=t;if(!uc(s,t)){if(cr(s))throw Error(v(418));t=Es(l.nextSibling);var n=Te;t&&uc(s,t)?sd(n,l):(s.flags=s.flags&-4097|2,G=!1,Te=s)}}else{if(cr(s))throw Error(v(418));s.flags=s.flags&-4097|2,G=!1,Te=s}}}function mc(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;Te=s}function Yl(s){if(s!==Te)return!1;if(!G)return mc(s),G=!0,!1;var t;if((t=s.tag!==3)&&!(t=s.tag!==5)&&(t=s.type,t=t!=="head"&&t!=="body"&&!nr(s.type,s.memoizedProps)),t&&(t=Ae)){if(cr(s))throw td(),Error(v(418));for(;t;)sd(s,t),t=Es(t.nextSibling)}if(mc(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(v(317));e:{for(s=s.nextSibling,t=0;s;){if(s.nodeType===8){var l=s.data;if(l==="/$"){if(t===0){Ae=Es(s.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++}s=s.nextSibling}Ae=null}}else Ae=Te?Es(s.stateNode.nextSibling):null;return!0}function td(){for(var s=Ae;s;)s=Es(s.nextSibling)}function Tt(){Ae=Te=null,G=!1}function Gr(s){Ye===null?Ye=[s]:Ye.push(s)}var ap=fs.ReactCurrentBatchConfig;function Yt(s,t,l){if(s=l.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(v(309));var n=l.stateNode}if(!n)throw Error(v(147,s));var i=n,r=""+s;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===r?t.ref:(t=function(a){var c=i.refs;a===null?delete c[r]:c[r]=a},t._stringRef=r,t)}if(typeof s!="string")throw Error(v(284));if(!l._owner)throw Error(v(290,s))}return s}function ql(s,t){throw s=Object.prototype.toString.call(t),Error(v(31,s==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":s))}function pc(s){var t=s._init;return t(s._payload)}function ld(s){function t(p,u){if(s){var h=p.deletions;h===null?(p.deletions=[u],p.flags|=16):h.push(u)}}function l(p,u){if(!s)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function n(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function i(p,u){return p=Ps(p,u),p.index=0,p.sibling=null,p}function r(p,u,h){return p.index=h,s?(h=p.alternate,h!==null?(h=h.index,h<u?(p.flags|=2,u):h):(p.flags|=2,u)):(p.flags|=1048576,u)}function a(p){return s&&p.alternate===null&&(p.flags|=2),p}function c(p,u,h,y){return u===null||u.tag!==6?(u=Pi(h,p.mode,y),u.return=p,u):(u=i(u,h),u.return=p,u)}function o(p,u,h,y){var R=h.type;return R===ut?j(p,u,h.props.children,y,h.key):u!==null&&(u.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===_s&&pc(R)===u.type)?(y=i(u,h.props),y.ref=Yt(p,u,h),y.return=p,y):(y=un(h.type,h.key,h.props,null,p.mode,y),y.ref=Yt(p,u,h),y.return=p,y)}function m(p,u,h,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=zi(h,p.mode,y),u.return=p,u):(u=i(u,h.children||[]),u.return=p,u)}function j(p,u,h,y,R){return u===null||u.tag!==7?(u=Gs(h,p.mode,y,R),u.return=p,u):(u=i(u,h),u.return=p,u)}function _(p,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Pi(""+u,p.mode,h),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ol:return h=un(u.type,u.key,u.props,null,p.mode,h),h.ref=Yt(p,null,u),h.return=p,h;case dt:return u=zi(u,p.mode,h),u.return=p,u;case _s:var y=u._init;return _(p,y(u._payload),h)}if(Jt(u)||Ft(u))return u=Gs(u,p.mode,h,null),u.return=p,u;ql(p,u)}return null}function g(p,u,h,y){var R=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return R!==null?null:c(p,u,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ol:return h.key===R?o(p,u,h,y):null;case dt:return h.key===R?m(p,u,h,y):null;case _s:return R=h._init,g(p,u,R(h._payload),y)}if(Jt(h)||Ft(h))return R!==null?null:j(p,u,h,y,null);ql(p,h)}return null}function b(p,u,h,y,R){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(h)||null,c(u,p,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ol:return p=p.get(y.key===null?h:y.key)||null,o(u,p,y,R);case dt:return p=p.get(y.key===null?h:y.key)||null,m(u,p,y,R);case _s:var A=y._init;return b(p,u,h,A(y._payload),R)}if(Jt(y)||Ft(y))return p=p.get(h)||null,j(u,p,y,R,null);ql(u,y)}return null}function k(p,u,h,y){for(var R=null,A=null,T=u,P=u=0,ee=null;T!==null&&P<h.length;P++){T.index>P?(ee=T,T=null):ee=T.sibling;var O=g(p,T,h[P],y);if(O===null){T===null&&(T=ee);break}s&&T&&O.alternate===null&&t(p,T),u=r(O,u,P),A===null?R=O:A.sibling=O,A=O,T=ee}if(P===h.length)return l(p,T),G&&Us(p,P),R;if(T===null){for(;P<h.length;P++)T=_(p,h[P],y),T!==null&&(u=r(T,u,P),A===null?R=T:A.sibling=T,A=T);return G&&Us(p,P),R}for(T=n(p,T);P<h.length;P++)ee=b(T,p,P,h[P],y),ee!==null&&(s&&ee.alternate!==null&&T.delete(ee.key===null?P:ee.key),u=r(ee,u,P),A===null?R=ee:A.sibling=ee,A=ee);return s&&T.forEach(function(Ue){return t(p,Ue)}),G&&Us(p,P),R}function S(p,u,h,y){var R=Ft(h);if(typeof R!="function")throw Error(v(150));if(h=R.call(h),h==null)throw Error(v(151));for(var A=R=null,T=u,P=u=0,ee=null,O=h.next();T!==null&&!O.done;P++,O=h.next()){T.index>P?(ee=T,T=null):ee=T.sibling;var Ue=g(p,T,O.value,y);if(Ue===null){T===null&&(T=ee);break}s&&T&&Ue.alternate===null&&t(p,T),u=r(Ue,u,P),A===null?R=Ue:A.sibling=Ue,A=Ue,T=ee}if(O.done)return l(p,T),G&&Us(p,P),R;if(T===null){for(;!O.done;P++,O=h.next())O=_(p,O.value,y),O!==null&&(u=r(O,u,P),A===null?R=O:A.sibling=O,A=O);return G&&Us(p,P),R}for(T=n(p,T);!O.done;P++,O=h.next())O=b(T,p,P,O.value,y),O!==null&&(s&&O.alternate!==null&&T.delete(O.key===null?P:O.key),u=r(O,u,P),A===null?R=O:A.sibling=O,A=O);return s&&T.forEach(function(Ht){return t(p,Ht)}),G&&Us(p,P),R}function z(p,u,h,y){if(typeof h=="object"&&h!==null&&h.type===ut&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ol:e:{for(var R=h.key,A=u;A!==null;){if(A.key===R){if(R=h.type,R===ut){if(A.tag===7){l(p,A.sibling),u=i(A,h.props.children),u.return=p,p=u;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===_s&&pc(R)===A.type){l(p,A.sibling),u=i(A,h.props),u.ref=Yt(p,A,h),u.return=p,p=u;break e}l(p,A);break}else t(p,A);A=A.sibling}h.type===ut?(u=Gs(h.props.children,p.mode,y,h.key),u.return=p,p=u):(y=un(h.type,h.key,h.props,null,p.mode,y),y.ref=Yt(p,u,h),y.return=p,p=y)}return a(p);case dt:e:{for(A=h.key;u!==null;){if(u.key===A)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){l(p,u.sibling),u=i(u,h.children||[]),u.return=p,p=u;break e}else{l(p,u);break}else t(p,u);u=u.sibling}u=zi(h,p.mode,y),u.return=p,p=u}return a(p);case _s:return A=h._init,z(p,u,A(h._payload),y)}if(Jt(h))return k(p,u,h,y);if(Ft(h))return S(p,u,h,y);ql(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(l(p,u.sibling),u=i(u,h),u.return=p,p=u):(l(p,u),u=Pi(h,p.mode,y),u.return=p,p=u),a(p)):l(p,u)}return z}var Pt=ld(!0),nd=ld(!1),Sn=Ds(null),Rn=null,_t=null,Kr=null;function Jr(){Kr=_t=Rn=null}function Xr(s){var t=Sn.current;q(Sn),s._currentValue=t}function dr(s,t,l){for(;s!==null;){var n=s.alternate;if((s.childLanes&t)!==t?(s.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),s===l)break;s=s.return}}function Rt(s,t){Rn=s,Kr=_t=null,s=s.dependencies,s!==null&&s.firstContext!==null&&(s.lanes&t&&(we=!0),s.firstContext=null)}function $e(s){var t=s._currentValue;if(Kr!==s)if(s={context:s,memoizedValue:t,next:null},_t===null){if(Rn===null)throw Error(v(308));_t=s,Rn.dependencies={lanes:0,firstContext:s}}else _t=_t.next=s;return t}var Qs=null;function Zr(s){Qs===null?Qs=[s]:Qs.push(s)}function id(s,t,l,n){var i=t.interleaved;return i===null?(l.next=l,Zr(t)):(l.next=i.next,i.next=l),t.interleaved=l,ps(s,n)}function ps(s,t){s.lanes|=t;var l=s.alternate;for(l!==null&&(l.lanes|=t),l=s,s=s.return;s!==null;)s.childLanes|=t,l=s.alternate,l!==null&&(l.childLanes|=t),l=s,s=s.return;return l.tag===3?l.stateNode:null}var ys=!1;function ea(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rd(s,t){s=s.updateQueue,t.updateQueue===s&&(t.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function ds(s,t){return{eventTime:s,lane:t,tag:0,payload:null,callback:null,next:null}}function Cs(s,t,l){var n=s.updateQueue;if(n===null)return null;if(n=n.shared,H&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,ps(s,l)}return i=n.interleaved,i===null?(t.next=t,Zr(n)):(t.next=i.next,i.next=t),n.interleaved=t,ps(s,l)}function nn(s,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194240)!==0)){var n=t.lanes;n&=s.pendingLanes,l|=n,t.lanes=l,Br(s,l)}}function hc(s,t){var l=s.updateQueue,n=s.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var i=null,r=null;if(l=l.firstBaseUpdate,l!==null){do{var a={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};r===null?i=r=a:r=r.next=a,l=l.next}while(l!==null);r===null?i=r=t:r=r.next=t}else i=r=t;l={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,effects:n.effects},s.updateQueue=l;return}s=l.lastBaseUpdate,s===null?l.firstBaseUpdate=t:s.next=t,l.lastBaseUpdate=t}function En(s,t,l,n){var i=s.updateQueue;ys=!1;var r=i.firstBaseUpdate,a=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var o=c,m=o.next;o.next=null,a===null?r=m:a.next=m,a=o;var j=s.alternate;j!==null&&(j=j.updateQueue,c=j.lastBaseUpdate,c!==a&&(c===null?j.firstBaseUpdate=m:c.next=m,j.lastBaseUpdate=o))}if(r!==null){var _=i.baseState;a=0,j=m=o=null,c=r;do{var g=c.lane,b=c.eventTime;if((n&g)===g){j!==null&&(j=j.next={eventTime:b,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var k=s,S=c;switch(g=t,b=l,S.tag){case 1:if(k=S.payload,typeof k=="function"){_=k.call(b,_,g);break e}_=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=S.payload,g=typeof k=="function"?k.call(b,_,g):k,g==null)break e;_=X({},_,g);break e;case 2:ys=!0}}c.callback!==null&&c.lane!==0&&(s.flags|=64,g=i.effects,g===null?i.effects=[c]:g.push(c))}else b={eventTime:b,lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},j===null?(m=j=b,o=_):j=j.next=b,a|=g;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;g=c,c=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(j===null&&(o=_),i.baseState=o,i.firstBaseUpdate=m,i.lastBaseUpdate=j,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else r===null&&(i.shared.lanes=0);Zs|=a,s.lanes=a,s.memoizedState=_}}function fc(s,t,l){if(s=t.effects,t.effects=null,s!==null)for(t=0;t<s.length;t++){var n=s[t],i=n.callback;if(i!==null){if(n.callback=null,n=l,typeof i!="function")throw Error(v(191,i));i.call(n)}}}var Tl={},ts=Ds(Tl),yl=Ds(Tl),vl=Ds(Tl);function Ys(s){if(s===Tl)throw Error(v(174));return s}function sa(s,t){switch(W(vl,t),W(yl,s),W(ts,Tl),s=t.nodeType,s){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vi(null,"");break;default:s=s===8?t.parentNode:t,t=s.namespaceURI||null,s=s.tagName,t=Vi(t,s)}q(ts),W(ts,t)}function zt(){q(ts),q(yl),q(vl)}function ad(s){Ys(vl.current);var t=Ys(ts.current),l=Vi(t,s.type);t!==l&&(W(yl,s),W(ts,l))}function ta(s){yl.current===s&&(q(ts),q(yl))}var K=Ds(0);function Cn(s){for(var t=s;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break;for(;t.sibling===null;){if(t.return===null||t.return===s)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Si=[];function la(){for(var s=0;s<Si.length;s++)Si[s]._workInProgressVersionPrimary=null;Si.length=0}var rn=fs.ReactCurrentDispatcher,Ri=fs.ReactCurrentBatchConfig,Xs=0,J=null,re=null,de=null,An=!1,il=!1,Nl=0,cp=0;function fe(){throw Error(v(321))}function na(s,t){if(t===null)return!1;for(var l=0;l<t.length&&l<s.length;l++)if(!Ke(s[l],t[l]))return!1;return!0}function ia(s,t,l,n,i,r){if(Xs=r,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,rn.current=s===null||s.memoizedState===null?mp:pp,s=l(n,i),il){r=0;do{if(il=!1,Nl=0,25<=r)throw Error(v(301));r+=1,de=re=null,t.updateQueue=null,rn.current=hp,s=l(n,i)}while(il)}if(rn.current=Tn,t=re!==null&&re.next!==null,Xs=0,de=re=J=null,An=!1,t)throw Error(v(300));return s}function ra(){var s=Nl!==0;return Nl=0,s}function Ze(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?J.memoizedState=de=s:de=de.next=s,de}function Fe(){if(re===null){var s=J.alternate;s=s!==null?s.memoizedState:null}else s=re.next;var t=de===null?J.memoizedState:de.next;if(t!==null)de=t,re=s;else{if(s===null)throw Error(v(310));re=s,s={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},de===null?J.memoizedState=de=s:de=de.next=s}return de}function bl(s,t){return typeof t=="function"?t(s):t}function Ei(s){var t=Fe(),l=t.queue;if(l===null)throw Error(v(311));l.lastRenderedReducer=s;var n=re,i=n.baseQueue,r=l.pending;if(r!==null){if(i!==null){var a=i.next;i.next=r.next,r.next=a}n.baseQueue=i=r,l.pending=null}if(i!==null){r=i.next,n=n.baseState;var c=a=null,o=null,m=r;do{var j=m.lane;if((Xs&j)===j)o!==null&&(o=o.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),n=m.hasEagerState?m.eagerState:s(n,m.action);else{var _={lane:j,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};o===null?(c=o=_,a=n):o=o.next=_,J.lanes|=j,Zs|=j}m=m.next}while(m!==null&&m!==r);o===null?a=n:o.next=c,Ke(n,t.memoizedState)||(we=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=o,l.lastRenderedState=n}if(s=l.interleaved,s!==null){i=s;do r=i.lane,J.lanes|=r,Zs|=r,i=i.next;while(i!==s)}else i===null&&(l.lanes=0);return[t.memoizedState,l.dispatch]}function Ci(s){var t=Fe(),l=t.queue;if(l===null)throw Error(v(311));l.lastRenderedReducer=s;var n=l.dispatch,i=l.pending,r=t.memoizedState;if(i!==null){l.pending=null;var a=i=i.next;do r=s(r,a.action),a=a.next;while(a!==i);Ke(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),l.lastRenderedState=r}return[r,n]}function cd(){}function od(s,t){var l=J,n=Fe(),i=t(),r=!Ke(n.memoizedState,i);if(r&&(n.memoizedState=i,we=!0),n=n.queue,aa(md.bind(null,l,n,s),[s]),n.getSnapshot!==t||r||de!==null&&de.memoizedState.tag&1){if(l.flags|=2048,kl(9,ud.bind(null,l,n,i,t),void 0,null),ue===null)throw Error(v(349));Xs&30||dd(l,t,i)}return i}function dd(s,t,l){s.flags|=16384,s={getSnapshot:t,value:l},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[s]):(l=t.stores,l===null?t.stores=[s]:l.push(s))}function ud(s,t,l,n){t.value=l,t.getSnapshot=n,pd(t)&&hd(s)}function md(s,t,l){return l(function(){pd(t)&&hd(s)})}function pd(s){var t=s.getSnapshot;s=s.value;try{var l=t();return!Ke(s,l)}catch{return!0}}function hd(s){var t=ps(s,1);t!==null&&Ge(t,s,1,-1)}function xc(s){var t=Ze();return typeof s=="function"&&(s=s()),t.memoizedState=t.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bl,lastRenderedState:s},t.queue=s,s=s.dispatch=up.bind(null,J,s),[t.memoizedState,s]}function kl(s,t,l,n){return s={tag:s,create:t,destroy:l,deps:n,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=s.next=s):(l=t.lastEffect,l===null?t.lastEffect=s.next=s:(n=l.next,l.next=s,s.next=n,t.lastEffect=s)),s}function fd(){return Fe().memoizedState}function an(s,t,l,n){var i=Ze();J.flags|=s,i.memoizedState=kl(1|t,l,void 0,n===void 0?null:n)}function Vn(s,t,l,n){var i=Fe();n=n===void 0?null:n;var r=void 0;if(re!==null){var a=re.memoizedState;if(r=a.destroy,n!==null&&na(n,a.deps)){i.memoizedState=kl(t,l,r,n);return}}J.flags|=s,i.memoizedState=kl(1|t,l,r,n)}function gc(s,t){return an(8390656,8,s,t)}function aa(s,t){return Vn(2048,8,s,t)}function xd(s,t){return Vn(4,2,s,t)}function gd(s,t){return Vn(4,4,s,t)}function jd(s,t){if(typeof t=="function")return s=s(),t(s),function(){t(null)};if(t!=null)return s=s(),t.current=s,function(){t.current=null}}function _d(s,t,l){return l=l!=null?l.concat([s]):null,Vn(4,4,jd.bind(null,t,s),l)}function ca(){}function yd(s,t){var l=Fe();t=t===void 0?null:t;var n=l.memoizedState;return n!==null&&t!==null&&na(t,n[1])?n[0]:(l.memoizedState=[s,t],s)}function vd(s,t){var l=Fe();t=t===void 0?null:t;var n=l.memoizedState;return n!==null&&t!==null&&na(t,n[1])?n[0]:(s=s(),l.memoizedState=[s,t],s)}function Nd(s,t,l){return Xs&21?(Ke(l,t)||(l=Ro(),J.lanes|=l,Zs|=l,s.baseState=!0),t):(s.baseState&&(s.baseState=!1,we=!0),s.memoizedState=l)}function op(s,t){var l=U;U=l!==0&&4>l?l:4,s(!0);var n=Ri.transition;Ri.transition={};try{s(!1),t()}finally{U=l,Ri.transition=n}}function bd(){return Fe().memoizedState}function dp(s,t,l){var n=Ts(s);if(l={lane:n,action:l,hasEagerState:!1,eagerState:null,next:null},kd(s))wd(t,l);else if(l=id(s,t,l,n),l!==null){var i=ve();Ge(l,s,n,i),Sd(l,t,n)}}function up(s,t,l){var n=Ts(s),i={lane:n,action:l,hasEagerState:!1,eagerState:null,next:null};if(kd(s))wd(t,i);else{var r=s.alternate;if(s.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var a=t.lastRenderedState,c=r(a,l);if(i.hasEagerState=!0,i.eagerState=c,Ke(c,a)){var o=t.interleaved;o===null?(i.next=i,Zr(t)):(i.next=o.next,o.next=i),t.interleaved=i;return}}catch{}finally{}l=id(s,t,i,n),l!==null&&(i=ve(),Ge(l,s,n,i),Sd(l,t,n))}}function kd(s){var t=s.alternate;return s===J||t!==null&&t===J}function wd(s,t){il=An=!0;var l=s.pending;l===null?t.next=t:(t.next=l.next,l.next=t),s.pending=t}function Sd(s,t,l){if(l&4194240){var n=t.lanes;n&=s.pendingLanes,l|=n,t.lanes=l,Br(s,l)}}var Tn={readContext:$e,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},mp={readContext:$e,useCallback:function(s,t){return Ze().memoizedState=[s,t===void 0?null:t],s},useContext:$e,useEffect:gc,useImperativeHandle:function(s,t,l){return l=l!=null?l.concat([s]):null,an(4194308,4,jd.bind(null,t,s),l)},useLayoutEffect:function(s,t){return an(4194308,4,s,t)},useInsertionEffect:function(s,t){return an(4,2,s,t)},useMemo:function(s,t){var l=Ze();return t=t===void 0?null:t,s=s(),l.memoizedState=[s,t],s},useReducer:function(s,t,l){var n=Ze();return t=l!==void 0?l(t):t,n.memoizedState=n.baseState=t,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:t},n.queue=s,s=s.dispatch=dp.bind(null,J,s),[n.memoizedState,s]},useRef:function(s){var t=Ze();return s={current:s},t.memoizedState=s},useState:xc,useDebugValue:ca,useDeferredValue:function(s){return Ze().memoizedState=s},useTransition:function(){var s=xc(!1),t=s[0];return s=op.bind(null,s[1]),Ze().memoizedState=s,[t,s]},useMutableSource:function(){},useSyncExternalStore:function(s,t,l){var n=J,i=Ze();if(G){if(l===void 0)throw Error(v(407));l=l()}else{if(l=t(),ue===null)throw Error(v(349));Xs&30||dd(n,t,l)}i.memoizedState=l;var r={value:l,getSnapshot:t};return i.queue=r,gc(md.bind(null,n,r,s),[s]),n.flags|=2048,kl(9,ud.bind(null,n,r,l,t),void 0,null),l},useId:function(){var s=Ze(),t=ue.identifierPrefix;if(G){var l=os,n=cs;l=(n&~(1<<32-qe(n)-1)).toString(32)+l,t=":"+t+"R"+l,l=Nl++,0<l&&(t+="H"+l.toString(32)),t+=":"}else l=cp++,t=":"+t+"r"+l.toString(32)+":";return s.memoizedState=t},unstable_isNewReconciler:!1},pp={readContext:$e,useCallback:yd,useContext:$e,useEffect:aa,useImperativeHandle:_d,useInsertionEffect:xd,useLayoutEffect:gd,useMemo:vd,useReducer:Ei,useRef:fd,useState:function(){return Ei(bl)},useDebugValue:ca,useDeferredValue:function(s){var t=Fe();return Nd(t,re.memoizedState,s)},useTransition:function(){var s=Ei(bl)[0],t=Fe().memoizedState;return[s,t]},useMutableSource:cd,useSyncExternalStore:od,useId:bd,unstable_isNewReconciler:!1},hp={readContext:$e,useCallback:yd,useContext:$e,useEffect:aa,useImperativeHandle:_d,useInsertionEffect:xd,useLayoutEffect:gd,useMemo:vd,useReducer:Ci,useRef:fd,useState:function(){return Ci(bl)},useDebugValue:ca,useDeferredValue:function(s){var t=Fe();return re===null?t.memoizedState=s:Nd(t,re.memoizedState,s)},useTransition:function(){var s=Ci(bl)[0],t=Fe().memoizedState;return[s,t]},useMutableSource:cd,useSyncExternalStore:od,useId:bd,unstable_isNewReconciler:!1};function We(s,t){if(s&&s.defaultProps){t=X({},t),s=s.defaultProps;for(var l in s)t[l]===void 0&&(t[l]=s[l]);return t}return t}function ur(s,t,l,n){t=s.memoizedState,l=l(n,t),l=l==null?t:X({},t,l),s.memoizedState=l,s.lanes===0&&(s.updateQueue.baseState=l)}var Wn={isMounted:function(s){return(s=s._reactInternals)?lt(s)===s:!1},enqueueSetState:function(s,t,l){s=s._reactInternals;var n=ve(),i=Ts(s),r=ds(n,i);r.payload=t,l!=null&&(r.callback=l),t=Cs(s,r,i),t!==null&&(Ge(t,s,i,n),nn(t,s,i))},enqueueReplaceState:function(s,t,l){s=s._reactInternals;var n=ve(),i=Ts(s),r=ds(n,i);r.tag=1,r.payload=t,l!=null&&(r.callback=l),t=Cs(s,r,i),t!==null&&(Ge(t,s,i,n),nn(t,s,i))},enqueueForceUpdate:function(s,t){s=s._reactInternals;var l=ve(),n=Ts(s),i=ds(l,n);i.tag=2,t!=null&&(i.callback=t),t=Cs(s,i,n),t!==null&&(Ge(t,s,n,l),nn(t,s,n))}};function jc(s,t,l,n,i,r,a){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(n,r,a):t.prototype&&t.prototype.isPureReactComponent?!xl(l,n)||!xl(i,r):!0}function Rd(s,t,l){var n=!1,i=Ls,r=t.contextType;return typeof r=="object"&&r!==null?r=$e(r):(i=Re(t)?Ks:je.current,n=t.contextTypes,r=(n=n!=null)?At(s,i):Ls),t=new t(l,r),s.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wn,s.stateNode=t,t._reactInternals=s,n&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=i,s.__reactInternalMemoizedMaskedChildContext=r),t}function _c(s,t,l,n){s=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,n),t.state!==s&&Wn.enqueueReplaceState(t,t.state,null)}function mr(s,t,l,n){var i=s.stateNode;i.props=l,i.state=s.memoizedState,i.refs={},ea(s);var r=t.contextType;typeof r=="object"&&r!==null?i.context=$e(r):(r=Re(t)?Ks:je.current,i.context=At(s,r)),i.state=s.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(ur(s,t,r,l),i.state=s.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Wn.enqueueReplaceState(i,i.state,null),En(s,l,i,n),i.state=s.memoizedState),typeof i.componentDidMount=="function"&&(s.flags|=4194308)}function Lt(s,t){try{var l="",n=t;do l+=Fu(n),n=n.return;while(n);var i=l}catch(r){i=`
Error generating stack: `+r.message+`
`+r.stack}return{value:s,source:t,stack:i,digest:null}}function Ai(s,t,l){return{value:s,source:null,stack:l??null,digest:t??null}}function pr(s,t){try{console.error(t.value)}catch(l){setTimeout(function(){throw l})}}var fp=typeof WeakMap=="function"?WeakMap:Map;function Ed(s,t,l){l=ds(-1,l),l.tag=3,l.payload={element:null};var n=t.value;return l.callback=function(){zn||(zn=!0,br=n),pr(s,t)},l}function Cd(s,t,l){l=ds(-1,l),l.tag=3;var n=s.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;l.payload=function(){return n(i)},l.callback=function(){pr(s,t)}}var r=s.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(l.callback=function(){pr(s,t),typeof n!="function"&&(As===null?As=new Set([this]):As.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),l}function yc(s,t,l){var n=s.pingCache;if(n===null){n=s.pingCache=new fp;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(l)||(i.add(l),s=Cp.bind(null,s,t,l),t.then(s,s))}function vc(s){do{var t;if((t=s.tag===13)&&(t=s.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return s;s=s.return}while(s!==null);return null}function Nc(s,t,l,n,i){return s.mode&1?(s.flags|=65536,s.lanes=i,s):(s===t?s.flags|=65536:(s.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(t=ds(-1,1),t.tag=2,Cs(l,t,1))),l.lanes|=1),s)}var xp=fs.ReactCurrentOwner,we=!1;function ye(s,t,l,n){t.child=s===null?nd(t,null,l,n):Pt(t,s.child,l,n)}function bc(s,t,l,n,i){l=l.render;var r=t.ref;return Rt(t,i),n=ia(s,t,l,n,r,i),l=ra(),s!==null&&!we?(t.updateQueue=s.updateQueue,t.flags&=-2053,s.lanes&=~i,hs(s,t,i)):(G&&l&&Yr(t),t.flags|=1,ye(s,t,n,i),t.child)}function kc(s,t,l,n,i){if(s===null){var r=l.type;return typeof r=="function"&&!xa(r)&&r.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(t.tag=15,t.type=r,Ad(s,t,r,n,i)):(s=un(l.type,null,n,t,t.mode,i),s.ref=t.ref,s.return=t,t.child=s)}if(r=s.child,!(s.lanes&i)){var a=r.memoizedProps;if(l=l.compare,l=l!==null?l:xl,l(a,n)&&s.ref===t.ref)return hs(s,t,i)}return t.flags|=1,s=Ps(r,n),s.ref=t.ref,s.return=t,t.child=s}function Ad(s,t,l,n,i){if(s!==null){var r=s.memoizedProps;if(xl(r,n)&&s.ref===t.ref)if(we=!1,t.pendingProps=n=r,(s.lanes&i)!==0)s.flags&131072&&(we=!0);else return t.lanes=s.lanes,hs(s,t,i)}return hr(s,t,l,n,i)}function Td(s,t,l){var n=t.pendingProps,i=n.children,r=s!==null?s.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(vt,Ce),Ce|=l;else{if(!(l&1073741824))return s=r!==null?r.baseLanes|l:l,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:s,cachePool:null,transitions:null},t.updateQueue=null,W(vt,Ce),Ce|=s,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=r!==null?r.baseLanes:l,W(vt,Ce),Ce|=n}else r!==null?(n=r.baseLanes|l,t.memoizedState=null):n=l,W(vt,Ce),Ce|=n;return ye(s,t,i,l),t.child}function Pd(s,t){var l=t.ref;(s===null&&l!==null||s!==null&&s.ref!==l)&&(t.flags|=512,t.flags|=2097152)}function hr(s,t,l,n,i){var r=Re(l)?Ks:je.current;return r=At(t,r),Rt(t,i),l=ia(s,t,l,n,r,i),n=ra(),s!==null&&!we?(t.updateQueue=s.updateQueue,t.flags&=-2053,s.lanes&=~i,hs(s,t,i)):(G&&n&&Yr(t),t.flags|=1,ye(s,t,l,i),t.child)}function wc(s,t,l,n,i){if(Re(l)){var r=!0;bn(t)}else r=!1;if(Rt(t,i),t.stateNode===null)cn(s,t),Rd(t,l,n),mr(t,l,n,i),n=!0;else if(s===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var o=a.context,m=l.contextType;typeof m=="object"&&m!==null?m=$e(m):(m=Re(l)?Ks:je.current,m=At(t,m));var j=l.getDerivedStateFromProps,_=typeof j=="function"||typeof a.getSnapshotBeforeUpdate=="function";_||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==n||o!==m)&&_c(t,a,n,m),ys=!1;var g=t.memoizedState;a.state=g,En(t,n,a,i),o=t.memoizedState,c!==n||g!==o||Se.current||ys?(typeof j=="function"&&(ur(t,l,j,n),o=t.memoizedState),(c=ys||jc(t,l,c,n,g,o,m))?(_||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=o),a.props=n,a.state=o,a.context=m,n=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,rd(s,t),c=t.memoizedProps,m=t.type===t.elementType?c:We(t.type,c),a.props=m,_=t.pendingProps,g=a.context,o=l.contextType,typeof o=="object"&&o!==null?o=$e(o):(o=Re(l)?Ks:je.current,o=At(t,o));var b=l.getDerivedStateFromProps;(j=typeof b=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==_||g!==o)&&_c(t,a,n,o),ys=!1,g=t.memoizedState,a.state=g,En(t,n,a,i);var k=t.memoizedState;c!==_||g!==k||Se.current||ys?(typeof b=="function"&&(ur(t,l,b,n),k=t.memoizedState),(m=ys||jc(t,l,m,n,g,k,o)||!1)?(j||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,k,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,k,o)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===s.memoizedProps&&g===s.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===s.memoizedProps&&g===s.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=k),a.props=n,a.state=k,a.context=o,n=m):(typeof a.componentDidUpdate!="function"||c===s.memoizedProps&&g===s.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===s.memoizedProps&&g===s.memoizedState||(t.flags|=1024),n=!1)}return fr(s,t,l,n,r,i)}function fr(s,t,l,n,i,r){Pd(s,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&dc(t,l,!1),hs(s,t,r);n=t.stateNode,xp.current=t;var c=a&&typeof l.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,s!==null&&a?(t.child=Pt(t,s.child,null,r),t.child=Pt(t,null,c,r)):ye(s,t,c,r),t.memoizedState=n.state,i&&dc(t,l,!0),t.child}function zd(s){var t=s.stateNode;t.pendingContext?oc(s,t.pendingContext,t.pendingContext!==t.context):t.context&&oc(s,t.context,!1),sa(s,t.containerInfo)}function Sc(s,t,l,n,i){return Tt(),Gr(i),t.flags|=256,ye(s,t,l,n),t.child}var xr={dehydrated:null,treeContext:null,retryLane:0};function gr(s){return{baseLanes:s,cachePool:null,transitions:null}}function Ld(s,t,l){var n=t.pendingProps,i=K.current,r=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=s!==null&&s.memoizedState===null?!1:(i&2)!==0),c?(r=!0,t.flags&=-129):(s===null||s.memoizedState!==null)&&(i|=1),W(K,i&1),s===null)return or(t),s=t.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?(t.mode&1?s.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,s=n.fallback,r?(n=t.mode,r=t.child,a={mode:"hidden",children:a},!(n&1)&&r!==null?(r.childLanes=0,r.pendingProps=a):r=qn(a,n,0,null),s=Gs(s,n,l,null),r.return=t,s.return=t,r.sibling=s,t.child=r,t.child.memoizedState=gr(l),t.memoizedState=xr,s):oa(t,a));if(i=s.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return gp(s,t,a,n,c,i,l);if(r){r=n.fallback,a=t.mode,i=s.child,c=i.sibling;var o={mode:"hidden",children:n.children};return!(a&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=o,t.deletions=null):(n=Ps(i,o),n.subtreeFlags=i.subtreeFlags&14680064),c!==null?r=Ps(c,r):(r=Gs(r,a,l,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,n=r,r=t.child,a=s.child.memoizedState,a=a===null?gr(l):{baseLanes:a.baseLanes|l,cachePool:null,transitions:a.transitions},r.memoizedState=a,r.childLanes=s.childLanes&~l,t.memoizedState=xr,n}return r=s.child,s=r.sibling,n=Ps(r,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=l),n.return=t,n.sibling=null,s!==null&&(l=t.deletions,l===null?(t.deletions=[s],t.flags|=16):l.push(s)),t.child=n,t.memoizedState=null,n}function oa(s,t){return t=qn({mode:"visible",children:t},s.mode,0,null),t.return=s,s.child=t}function Gl(s,t,l,n){return n!==null&&Gr(n),Pt(t,s.child,null,l),s=oa(t,t.pendingProps.children),s.flags|=2,t.memoizedState=null,s}function gp(s,t,l,n,i,r,a){if(l)return t.flags&256?(t.flags&=-257,n=Ai(Error(v(422))),Gl(s,t,a,n)):t.memoizedState!==null?(t.child=s.child,t.flags|=128,null):(r=n.fallback,i=t.mode,n=qn({mode:"visible",children:n.children},i,0,null),r=Gs(r,i,a,null),r.flags|=2,n.return=t,r.return=t,n.sibling=r,t.child=n,t.mode&1&&Pt(t,s.child,null,a),t.child.memoizedState=gr(a),t.memoizedState=xr,r);if(!(t.mode&1))return Gl(s,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var c=n.dgst;return n=c,r=Error(v(419)),n=Ai(r,n,void 0),Gl(s,t,a,n)}if(c=(a&s.childLanes)!==0,we||c){if(n=ue,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==r.retryLane&&(r.retryLane=i,ps(s,i),Ge(n,s,i,-1))}return fa(),n=Ai(Error(v(421))),Gl(s,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=s.child,t=Ap.bind(null,s),i._reactRetry=t,null):(s=r.treeContext,Ae=Es(i.nextSibling),Te=t,G=!0,Ye=null,s!==null&&(De[Oe++]=cs,De[Oe++]=os,De[Oe++]=Js,cs=s.id,os=s.overflow,Js=t),t=oa(t,n.children),t.flags|=4096,t)}function Rc(s,t,l){s.lanes|=t;var n=s.alternate;n!==null&&(n.lanes|=t),dr(s.return,t,l)}function Ti(s,t,l,n,i){var r=s.memoizedState;r===null?s.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=l,r.tailMode=i)}function Md(s,t,l){var n=t.pendingProps,i=n.revealOrder,r=n.tail;if(ye(s,t,n.children,l),n=K.current,n&2)n=n&1|2,t.flags|=128;else{if(s!==null&&s.flags&128)e:for(s=t.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&Rc(s,l,t);else if(s.tag===19)Rc(s,l,t);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}n&=1}if(W(K,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(l=t.child,i=null;l!==null;)s=l.alternate,s!==null&&Cn(s)===null&&(i=l),l=l.sibling;l=i,l===null?(i=t.child,t.child=null):(i=l.sibling,l.sibling=null),Ti(t,!1,i,l,r);break;case"backwards":for(l=null,i=t.child,t.child=null;i!==null;){if(s=i.alternate,s!==null&&Cn(s)===null){t.child=i;break}s=i.sibling,i.sibling=l,l=i,i=s}Ti(t,!0,l,null,r);break;case"together":Ti(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cn(s,t){!(t.mode&1)&&s!==null&&(s.alternate=null,t.alternate=null,t.flags|=2)}function hs(s,t,l){if(s!==null&&(t.dependencies=s.dependencies),Zs|=t.lanes,!(l&t.childLanes))return null;if(s!==null&&t.child!==s.child)throw Error(v(153));if(t.child!==null){for(s=t.child,l=Ps(s,s.pendingProps),t.child=l,l.return=t;s.sibling!==null;)s=s.sibling,l=l.sibling=Ps(s,s.pendingProps),l.return=t;l.sibling=null}return t.child}function jp(s,t,l){switch(t.tag){case 3:zd(t),Tt();break;case 5:ad(t);break;case 1:Re(t.type)&&bn(t);break;case 4:sa(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;W(Sn,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(W(K,K.current&1),t.flags|=128,null):l&t.child.childLanes?Ld(s,t,l):(W(K,K.current&1),s=hs(s,t,l),s!==null?s.sibling:null);W(K,K.current&1);break;case 19:if(n=(l&t.childLanes)!==0,s.flags&128){if(n)return Md(s,t,l);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(K,K.current),n)break;return null;case 22:case 23:return t.lanes=0,Td(s,t,l)}return hs(s,t,l)}var Dd,jr,Od,Id;Dd=function(s,t){for(var l=t.child;l!==null;){if(l.tag===5||l.tag===6)s.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return;l=l.return}l.sibling.return=l.return,l=l.sibling}};jr=function(){};Od=function(s,t,l,n){var i=s.memoizedProps;if(i!==n){s=t.stateNode,Ys(ts.current);var r=null;switch(l){case"input":i=Hi(s,i),n=Hi(s,n),r=[];break;case"select":i=X({},i,{value:void 0}),n=X({},n,{value:void 0}),r=[];break;case"textarea":i=Ui(s,i),n=Ui(s,n),r=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(s.onclick=vn)}Wi(l,n);var a;l=null;for(m in i)if(!n.hasOwnProperty(m)&&i.hasOwnProperty(m)&&i[m]!=null)if(m==="style"){var c=i[m];for(a in c)c.hasOwnProperty(a)&&(l||(l={}),l[a]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(ol.hasOwnProperty(m)?r||(r=[]):(r=r||[]).push(m,null));for(m in n){var o=n[m];if(c=i!=null?i[m]:void 0,n.hasOwnProperty(m)&&o!==c&&(o!=null||c!=null))if(m==="style")if(c){for(a in c)!c.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(l||(l={}),l[a]="");for(a in o)o.hasOwnProperty(a)&&c[a]!==o[a]&&(l||(l={}),l[a]=o[a])}else l||(r||(r=[]),r.push(m,l)),l=o;else m==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,c=c?c.__html:void 0,o!=null&&c!==o&&(r=r||[]).push(m,o)):m==="children"?typeof o!="string"&&typeof o!="number"||(r=r||[]).push(m,""+o):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(ol.hasOwnProperty(m)?(o!=null&&m==="onScroll"&&Q("scroll",s),r||c===o||(r=[])):(r=r||[]).push(m,o))}l&&(r=r||[]).push("style",l);var m=r;(t.updateQueue=m)&&(t.flags|=4)}};Id=function(s,t,l,n){l!==n&&(t.flags|=4)};function qt(s,t){if(!G)switch(s.tailMode){case"hidden":t=s.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?s.tail=null:l.sibling=null;break;case"collapsed":l=s.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?t||s.tail===null?s.tail=null:s.tail.sibling=null:n.sibling=null}}function xe(s){var t=s.alternate!==null&&s.alternate.child===s.child,l=0,n=0;if(t)for(var i=s.child;i!==null;)l|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=s,i=i.sibling;else for(i=s.child;i!==null;)l|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=s,i=i.sibling;return s.subtreeFlags|=n,s.childLanes=l,t}function _p(s,t,l){var n=t.pendingProps;switch(qr(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Re(t.type)&&Nn(),xe(t),null;case 3:return n=t.stateNode,zt(),q(Se),q(je),la(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(s===null||s.child===null)&&(Yl(t)?t.flags|=4:s===null||s.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Sr(Ye),Ye=null))),jr(s,t),xe(t),null;case 5:ta(t);var i=Ys(vl.current);if(l=t.type,s!==null&&t.stateNode!=null)Od(s,t,l,n,i),s.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(v(166));return xe(t),null}if(s=Ys(ts.current),Yl(t)){n=t.stateNode,l=t.type;var r=t.memoizedProps;switch(n[es]=t,n[_l]=r,s=(t.mode&1)!==0,l){case"dialog":Q("cancel",n),Q("close",n);break;case"iframe":case"object":case"embed":Q("load",n);break;case"video":case"audio":for(i=0;i<Zt.length;i++)Q(Zt[i],n);break;case"source":Q("error",n);break;case"img":case"image":case"link":Q("error",n),Q("load",n);break;case"details":Q("toggle",n);break;case"input":Da(n,r),Q("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!r.multiple},Q("invalid",n);break;case"textarea":Ia(n,r),Q("invalid",n)}Wi(l,r),i=null;for(var a in r)if(r.hasOwnProperty(a)){var c=r[a];a==="children"?typeof c=="string"?n.textContent!==c&&(r.suppressHydrationWarning!==!0&&Ql(n.textContent,c,s),i=["children",c]):typeof c=="number"&&n.textContent!==""+c&&(r.suppressHydrationWarning!==!0&&Ql(n.textContent,c,s),i=["children",""+c]):ol.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&Q("scroll",n)}switch(l){case"input":Il(n),Oa(n,r,!0);break;case"textarea":Il(n),Ba(n);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(n.onclick=vn)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=mo(l)),s==="http://www.w3.org/1999/xhtml"?l==="script"?(s=a.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof n.is=="string"?s=a.createElement(l,{is:n.is}):(s=a.createElement(l),l==="select"&&(a=s,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):s=a.createElementNS(s,l),s[es]=t,s[_l]=n,Dd(s,t,!1,!1),t.stateNode=s;e:{switch(a=Qi(l,n),l){case"dialog":Q("cancel",s),Q("close",s),i=n;break;case"iframe":case"object":case"embed":Q("load",s),i=n;break;case"video":case"audio":for(i=0;i<Zt.length;i++)Q(Zt[i],s);i=n;break;case"source":Q("error",s),i=n;break;case"img":case"image":case"link":Q("error",s),Q("load",s),i=n;break;case"details":Q("toggle",s),i=n;break;case"input":Da(s,n),i=Hi(s,n),Q("invalid",s);break;case"option":i=n;break;case"select":s._wrapperState={wasMultiple:!!n.multiple},i=X({},n,{value:void 0}),Q("invalid",s);break;case"textarea":Ia(s,n),i=Ui(s,n),Q("invalid",s);break;default:i=n}Wi(l,i),c=i;for(r in c)if(c.hasOwnProperty(r)){var o=c[r];r==="style"?fo(s,o):r==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&po(s,o)):r==="children"?typeof o=="string"?(l!=="textarea"||o!=="")&&dl(s,o):typeof o=="number"&&dl(s,""+o):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(ol.hasOwnProperty(r)?o!=null&&r==="onScroll"&&Q("scroll",s):o!=null&&zr(s,r,o,a))}switch(l){case"input":Il(s),Oa(s,n,!1);break;case"textarea":Il(s),Ba(s);break;case"option":n.value!=null&&s.setAttribute("value",""+zs(n.value));break;case"select":s.multiple=!!n.multiple,r=n.value,r!=null?bt(s,!!n.multiple,r,!1):n.defaultValue!=null&&bt(s,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(s.onclick=vn)}switch(l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(s&&t.stateNode!=null)Id(s,t,s.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(v(166));if(l=Ys(vl.current),Ys(ts.current),Yl(t)){if(n=t.stateNode,l=t.memoizedProps,n[es]=t,(r=n.nodeValue!==l)&&(s=Te,s!==null))switch(s.tag){case 3:Ql(n.nodeValue,l,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&Ql(n.nodeValue,l,(s.mode&1)!==0)}r&&(t.flags|=4)}else n=(l.nodeType===9?l:l.ownerDocument).createTextNode(n),n[es]=t,t.stateNode=n}return xe(t),null;case 13:if(q(K),n=t.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(G&&Ae!==null&&t.mode&1&&!(t.flags&128))td(),Tt(),t.flags|=98560,r=!1;else if(r=Yl(t),n!==null&&n.dehydrated!==null){if(s===null){if(!r)throw Error(v(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(v(317));r[es]=t}else Tt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),r=!1}else Ye!==null&&(Sr(Ye),Ye=null),r=!0;if(!r)return t.flags&65536?t:null}return t.flags&128?(t.lanes=l,t):(n=n!==null,n!==(s!==null&&s.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(s===null||K.current&1?ae===0&&(ae=3):fa())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return zt(),jr(s,t),s===null&&gl(t.stateNode.containerInfo),xe(t),null;case 10:return Xr(t.type._context),xe(t),null;case 17:return Re(t.type)&&Nn(),xe(t),null;case 19:if(q(K),r=t.memoizedState,r===null)return xe(t),null;if(n=(t.flags&128)!==0,a=r.rendering,a===null)if(n)qt(r,!1);else{if(ae!==0||s!==null&&s.flags&128)for(s=t.child;s!==null;){if(a=Cn(s),a!==null){for(t.flags|=128,qt(r,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=l,l=t.child;l!==null;)r=l,s=n,r.flags&=14680066,a=r.alternate,a===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,s=a.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),l=l.sibling;return W(K,K.current&1|2),t.child}s=s.sibling}r.tail!==null&&te()>Mt&&(t.flags|=128,n=!0,qt(r,!1),t.lanes=4194304)}else{if(!n)if(s=Cn(a),s!==null){if(t.flags|=128,n=!0,l=s.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),qt(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!G)return xe(t),null}else 2*te()-r.renderingStartTime>Mt&&l!==1073741824&&(t.flags|=128,n=!0,qt(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(l=r.last,l!==null?l.sibling=a:t.child=a,r.last=a)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=te(),t.sibling=null,l=K.current,W(K,n?l&1|2:l&1),t):(xe(t),null);case 22:case 23:return ha(),n=t.memoizedState!==null,s!==null&&s.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ce&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function yp(s,t){switch(qr(t),t.tag){case 1:return Re(t.type)&&Nn(),s=t.flags,s&65536?(t.flags=s&-65537|128,t):null;case 3:return zt(),q(Se),q(je),la(),s=t.flags,s&65536&&!(s&128)?(t.flags=s&-65537|128,t):null;case 5:return ta(t),null;case 13:if(q(K),s=t.memoizedState,s!==null&&s.dehydrated!==null){if(t.alternate===null)throw Error(v(340));Tt()}return s=t.flags,s&65536?(t.flags=s&-65537|128,t):null;case 19:return q(K),null;case 4:return zt(),null;case 10:return Xr(t.type._context),null;case 22:case 23:return ha(),null;case 24:return null;default:return null}}var Kl=!1,ge=!1,vp=typeof WeakSet=="function"?WeakSet:Set,E=null;function yt(s,t){var l=s.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(n){Z(s,t,n)}else l.current=null}function _r(s,t,l){try{l()}catch(n){Z(s,t,n)}}var Ec=!1;function Np(s,t){if(tr=jn,s=Uo(),Qr(s)){if("selectionStart"in s)var l={start:s.selectionStart,end:s.selectionEnd};else e:{l=(l=s.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{l.nodeType,r.nodeType}catch{l=null;break e}var a=0,c=-1,o=-1,m=0,j=0,_=s,g=null;s:for(;;){for(var b;_!==l||i!==0&&_.nodeType!==3||(c=a+i),_!==r||n!==0&&_.nodeType!==3||(o=a+n),_.nodeType===3&&(a+=_.nodeValue.length),(b=_.firstChild)!==null;)g=_,_=b;for(;;){if(_===s)break s;if(g===l&&++m===i&&(c=a),g===r&&++j===n&&(o=a),(b=_.nextSibling)!==null)break;_=g,g=_.parentNode}_=b}l=c===-1||o===-1?null:{start:c,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(lr={focusedElem:s,selectionRange:l},jn=!1,E=t;E!==null;)if(t=E,s=t.child,(t.subtreeFlags&1028)!==0&&s!==null)s.return=t,E=s;else for(;E!==null;){t=E;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var S=k.memoizedProps,z=k.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?S:We(t.type,S),z);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(y){Z(t,t.return,y)}if(s=t.sibling,s!==null){s.return=t.return,E=s;break}E=t.return}return k=Ec,Ec=!1,k}function rl(s,t,l){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&s)===s){var r=i.destroy;i.destroy=void 0,r!==void 0&&_r(t,l,r)}i=i.next}while(i!==n)}}function Qn(s,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var l=t=t.next;do{if((l.tag&s)===s){var n=l.create;l.destroy=n()}l=l.next}while(l!==t)}}function yr(s){var t=s.ref;if(t!==null){var l=s.stateNode;switch(s.tag){case 5:s=l;break;default:s=l}typeof t=="function"?t(s):t.current=s}}function Bd(s){var t=s.alternate;t!==null&&(s.alternate=null,Bd(t)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(t=s.stateNode,t!==null&&(delete t[es],delete t[_l],delete t[rr],delete t[np],delete t[ip])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function Hd(s){return s.tag===5||s.tag===3||s.tag===4}function Cc(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||Hd(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function vr(s,t,l){var n=s.tag;if(n===5||n===6)s=s.stateNode,t?l.nodeType===8?l.parentNode.insertBefore(s,t):l.insertBefore(s,t):(l.nodeType===8?(t=l.parentNode,t.insertBefore(s,l)):(t=l,t.appendChild(s)),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=vn));else if(n!==4&&(s=s.child,s!==null))for(vr(s,t,l),s=s.sibling;s!==null;)vr(s,t,l),s=s.sibling}function Nr(s,t,l){var n=s.tag;if(n===5||n===6)s=s.stateNode,t?l.insertBefore(s,t):l.appendChild(s);else if(n!==4&&(s=s.child,s!==null))for(Nr(s,t,l),s=s.sibling;s!==null;)Nr(s,t,l),s=s.sibling}var me=null,Qe=!1;function js(s,t,l){for(l=l.child;l!==null;)$d(s,t,l),l=l.sibling}function $d(s,t,l){if(ss&&typeof ss.onCommitFiberUnmount=="function")try{ss.onCommitFiberUnmount(In,l)}catch{}switch(l.tag){case 5:ge||yt(l,t);case 6:var n=me,i=Qe;me=null,js(s,t,l),me=n,Qe=i,me!==null&&(Qe?(s=me,l=l.stateNode,s.nodeType===8?s.parentNode.removeChild(l):s.removeChild(l)):me.removeChild(l.stateNode));break;case 18:me!==null&&(Qe?(s=me,l=l.stateNode,s.nodeType===8?ki(s.parentNode,l):s.nodeType===1&&ki(s,l),hl(s)):ki(me,l.stateNode));break;case 4:n=me,i=Qe,me=l.stateNode.containerInfo,Qe=!0,js(s,t,l),me=n,Qe=i;break;case 0:case 11:case 14:case 15:if(!ge&&(n=l.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var r=i,a=r.destroy;r=r.tag,a!==void 0&&(r&2||r&4)&&_r(l,t,a),i=i.next}while(i!==n)}js(s,t,l);break;case 1:if(!ge&&(yt(l,t),n=l.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=l.memoizedProps,n.state=l.memoizedState,n.componentWillUnmount()}catch(c){Z(l,t,c)}js(s,t,l);break;case 21:js(s,t,l);break;case 22:l.mode&1?(ge=(n=ge)||l.memoizedState!==null,js(s,t,l),ge=n):js(s,t,l);break;default:js(s,t,l)}}function Ac(s){var t=s.updateQueue;if(t!==null){s.updateQueue=null;var l=s.stateNode;l===null&&(l=s.stateNode=new vp),t.forEach(function(n){var i=Tp.bind(null,s,n);l.has(n)||(l.add(n),n.then(i,i))})}}function Ve(s,t){var l=t.deletions;if(l!==null)for(var n=0;n<l.length;n++){var i=l[n];try{var r=s,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:me=c.stateNode,Qe=!1;break e;case 3:me=c.stateNode.containerInfo,Qe=!0;break e;case 4:me=c.stateNode.containerInfo,Qe=!0;break e}c=c.return}if(me===null)throw Error(v(160));$d(r,a,i),me=null,Qe=!1;var o=i.alternate;o!==null&&(o.return=null),i.return=null}catch(m){Z(i,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fd(t,s),t=t.sibling}function Fd(s,t){var l=s.alternate,n=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(Ve(t,s),Xe(s),n&4){try{rl(3,s,s.return),Qn(3,s)}catch(S){Z(s,s.return,S)}try{rl(5,s,s.return)}catch(S){Z(s,s.return,S)}}break;case 1:Ve(t,s),Xe(s),n&512&&l!==null&&yt(l,l.return);break;case 5:if(Ve(t,s),Xe(s),n&512&&l!==null&&yt(l,l.return),s.flags&32){var i=s.stateNode;try{dl(i,"")}catch(S){Z(s,s.return,S)}}if(n&4&&(i=s.stateNode,i!=null)){var r=s.memoizedProps,a=l!==null?l.memoizedProps:r,c=s.type,o=s.updateQueue;if(s.updateQueue=null,o!==null)try{c==="input"&&r.type==="radio"&&r.name!=null&&oo(i,r),Qi(c,a);var m=Qi(c,r);for(a=0;a<o.length;a+=2){var j=o[a],_=o[a+1];j==="style"?fo(i,_):j==="dangerouslySetInnerHTML"?po(i,_):j==="children"?dl(i,_):zr(i,j,_,m)}switch(c){case"input":$i(i,r);break;case"textarea":uo(i,r);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!r.multiple;var b=r.value;b!=null?bt(i,!!r.multiple,b,!1):g!==!!r.multiple&&(r.defaultValue!=null?bt(i,!!r.multiple,r.defaultValue,!0):bt(i,!!r.multiple,r.multiple?[]:"",!1))}i[_l]=r}catch(S){Z(s,s.return,S)}}break;case 6:if(Ve(t,s),Xe(s),n&4){if(s.stateNode===null)throw Error(v(162));i=s.stateNode,r=s.memoizedProps;try{i.nodeValue=r}catch(S){Z(s,s.return,S)}}break;case 3:if(Ve(t,s),Xe(s),n&4&&l!==null&&l.memoizedState.isDehydrated)try{hl(t.containerInfo)}catch(S){Z(s,s.return,S)}break;case 4:Ve(t,s),Xe(s);break;case 13:Ve(t,s),Xe(s),i=s.child,i.flags&8192&&(r=i.memoizedState!==null,i.stateNode.isHidden=r,!r||i.alternate!==null&&i.alternate.memoizedState!==null||(ma=te())),n&4&&Ac(s);break;case 22:if(j=l!==null&&l.memoizedState!==null,s.mode&1?(ge=(m=ge)||j,Ve(t,s),ge=m):Ve(t,s),Xe(s),n&8192){if(m=s.memoizedState!==null,(s.stateNode.isHidden=m)&&!j&&s.mode&1)for(E=s,j=s.child;j!==null;){for(_=E=j;E!==null;){switch(g=E,b=g.child,g.tag){case 0:case 11:case 14:case 15:rl(4,g,g.return);break;case 1:yt(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){n=g,l=g.return;try{t=n,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(S){Z(n,l,S)}}break;case 5:yt(g,g.return);break;case 22:if(g.memoizedState!==null){Pc(_);continue}}b!==null?(b.return=g,E=b):Pc(_)}j=j.sibling}e:for(j=null,_=s;;){if(_.tag===5){if(j===null){j=_;try{i=_.stateNode,m?(r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(c=_.stateNode,o=_.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,c.style.display=ho("display",a))}catch(S){Z(s,s.return,S)}}}else if(_.tag===6){if(j===null)try{_.stateNode.nodeValue=m?"":_.memoizedProps}catch(S){Z(s,s.return,S)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===s)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===s)break e;for(;_.sibling===null;){if(_.return===null||_.return===s)break e;j===_&&(j=null),_=_.return}j===_&&(j=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:Ve(t,s),Xe(s),n&4&&Ac(s);break;case 21:break;default:Ve(t,s),Xe(s)}}function Xe(s){var t=s.flags;if(t&2){try{e:{for(var l=s.return;l!==null;){if(Hd(l)){var n=l;break e}l=l.return}throw Error(v(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(dl(i,""),n.flags&=-33);var r=Cc(s);Nr(s,r,i);break;case 3:case 4:var a=n.stateNode.containerInfo,c=Cc(s);vr(s,c,a);break;default:throw Error(v(161))}}catch(o){Z(s,s.return,o)}s.flags&=-3}t&4096&&(s.flags&=-4097)}function bp(s,t,l){E=s,Ud(s)}function Ud(s,t,l){for(var n=(s.mode&1)!==0;E!==null;){var i=E,r=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||Kl;if(!a){var c=i.alternate,o=c!==null&&c.memoizedState!==null||ge;c=Kl;var m=ge;if(Kl=a,(ge=o)&&!m)for(E=i;E!==null;)a=E,o=a.child,a.tag===22&&a.memoizedState!==null?zc(i):o!==null?(o.return=a,E=o):zc(i);for(;r!==null;)E=r,Ud(r),r=r.sibling;E=i,Kl=c,ge=m}Tc(s)}else i.subtreeFlags&8772&&r!==null?(r.return=i,E=r):Tc(s)}}function Tc(s){for(;E!==null;){var t=E;if(t.flags&8772){var l=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Qn(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ge)if(l===null)n.componentDidMount();else{var i=t.elementType===t.type?l.memoizedProps:We(t.type,l.memoizedProps);n.componentDidUpdate(i,l.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var r=t.updateQueue;r!==null&&fc(t,r,n);break;case 3:var a=t.updateQueue;if(a!==null){if(l=null,t.child!==null)switch(t.child.tag){case 5:l=t.child.stateNode;break;case 1:l=t.child.stateNode}fc(t,a,l)}break;case 5:var c=t.stateNode;if(l===null&&t.flags&4){l=c;var o=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&l.focus();break;case"img":o.src&&(l.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var j=m.memoizedState;if(j!==null){var _=j.dehydrated;_!==null&&hl(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}ge||t.flags&512&&yr(t)}catch(g){Z(t,t.return,g)}}if(t===s){E=null;break}if(l=t.sibling,l!==null){l.return=t.return,E=l;break}E=t.return}}function Pc(s){for(;E!==null;){var t=E;if(t===s){E=null;break}var l=t.sibling;if(l!==null){l.return=t.return,E=l;break}E=t.return}}function zc(s){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var l=t.return;try{Qn(4,t)}catch(o){Z(t,l,o)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(o){Z(t,i,o)}}var r=t.return;try{yr(t)}catch(o){Z(t,r,o)}break;case 5:var a=t.return;try{yr(t)}catch(o){Z(t,a,o)}}}catch(o){Z(t,t.return,o)}if(t===s){E=null;break}var c=t.sibling;if(c!==null){c.return=t.return,E=c;break}E=t.return}}var kp=Math.ceil,Pn=fs.ReactCurrentDispatcher,da=fs.ReactCurrentOwner,Be=fs.ReactCurrentBatchConfig,H=0,ue=null,ie=null,pe=0,Ce=0,vt=Ds(0),ae=0,wl=null,Zs=0,Yn=0,ua=0,al=null,ke=null,ma=0,Mt=1/0,rs=null,zn=!1,br=null,As=null,Jl=!1,ks=null,Ln=0,cl=0,kr=null,on=-1,dn=0;function ve(){return H&6?te():on!==-1?on:on=te()}function Ts(s){return s.mode&1?H&2&&pe!==0?pe&-pe:ap.transition!==null?(dn===0&&(dn=Ro()),dn):(s=U,s!==0||(s=window.event,s=s===void 0?16:Lo(s.type)),s):1}function Ge(s,t,l,n){if(50<cl)throw cl=0,kr=null,Error(v(185));El(s,l,n),(!(H&2)||s!==ue)&&(s===ue&&(!(H&2)&&(Yn|=l),ae===4&&Ns(s,pe)),Ee(s,n),l===1&&H===0&&!(t.mode&1)&&(Mt=te()+500,Un&&Os()))}function Ee(s,t){var l=s.callbackNode;am(s,t);var n=gn(s,s===ue?pe:0);if(n===0)l!==null&&Fa(l),s.callbackNode=null,s.callbackPriority=0;else if(t=n&-n,s.callbackPriority!==t){if(l!=null&&Fa(l),t===1)s.tag===0?rp(Lc.bind(null,s)):Zo(Lc.bind(null,s)),tp(function(){!(H&6)&&Os()}),l=null;else{switch(Eo(n)){case 1:l=Ir;break;case 4:l=wo;break;case 16:l=xn;break;case 536870912:l=So;break;default:l=xn}l=Jd(l,Vd.bind(null,s))}s.callbackPriority=t,s.callbackNode=l}}function Vd(s,t){if(on=-1,dn=0,H&6)throw Error(v(327));var l=s.callbackNode;if(Et()&&s.callbackNode!==l)return null;var n=gn(s,s===ue?pe:0);if(n===0)return null;if(n&30||n&s.expiredLanes||t)t=Mn(s,n);else{t=n;var i=H;H|=2;var r=Qd();(ue!==s||pe!==t)&&(rs=null,Mt=te()+500,qs(s,t));do try{Rp();break}catch(c){Wd(s,c)}while(!0);Jr(),Pn.current=r,H=i,ie!==null?t=0:(ue=null,pe=0,t=ae)}if(t!==0){if(t===2&&(i=Ji(s),i!==0&&(n=i,t=wr(s,i))),t===1)throw l=wl,qs(s,0),Ns(s,n),Ee(s,te()),l;if(t===6)Ns(s,n);else{if(i=s.current.alternate,!(n&30)&&!wp(i)&&(t=Mn(s,n),t===2&&(r=Ji(s),r!==0&&(n=r,t=wr(s,r))),t===1))throw l=wl,qs(s,0),Ns(s,n),Ee(s,te()),l;switch(s.finishedWork=i,s.finishedLanes=n,t){case 0:case 1:throw Error(v(345));case 2:Vs(s,ke,rs);break;case 3:if(Ns(s,n),(n&130023424)===n&&(t=ma+500-te(),10<t)){if(gn(s,0)!==0)break;if(i=s.suspendedLanes,(i&n)!==n){ve(),s.pingedLanes|=s.suspendedLanes&i;break}s.timeoutHandle=ir(Vs.bind(null,s,ke,rs),t);break}Vs(s,ke,rs);break;case 4:if(Ns(s,n),(n&4194240)===n)break;for(t=s.eventTimes,i=-1;0<n;){var a=31-qe(n);r=1<<a,a=t[a],a>i&&(i=a),n&=~r}if(n=i,n=te()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*kp(n/1960))-n,10<n){s.timeoutHandle=ir(Vs.bind(null,s,ke,rs),n);break}Vs(s,ke,rs);break;case 5:Vs(s,ke,rs);break;default:throw Error(v(329))}}}return Ee(s,te()),s.callbackNode===l?Vd.bind(null,s):null}function wr(s,t){var l=al;return s.current.memoizedState.isDehydrated&&(qs(s,t).flags|=256),s=Mn(s,t),s!==2&&(t=ke,ke=l,t!==null&&Sr(t)),s}function Sr(s){ke===null?ke=s:ke.push.apply(ke,s)}function wp(s){for(var t=s;;){if(t.flags&16384){var l=t.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var n=0;n<l.length;n++){var i=l[n],r=i.getSnapshot;i=i.value;try{if(!Ke(r(),i))return!1}catch{return!1}}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===s)break;for(;t.sibling===null;){if(t.return===null||t.return===s)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ns(s,t){for(t&=~ua,t&=~Yn,s.suspendedLanes|=t,s.pingedLanes&=~t,s=s.expirationTimes;0<t;){var l=31-qe(t),n=1<<l;s[l]=-1,t&=~n}}function Lc(s){if(H&6)throw Error(v(327));Et();var t=gn(s,0);if(!(t&1))return Ee(s,te()),null;var l=Mn(s,t);if(s.tag!==0&&l===2){var n=Ji(s);n!==0&&(t=n,l=wr(s,n))}if(l===1)throw l=wl,qs(s,0),Ns(s,t),Ee(s,te()),l;if(l===6)throw Error(v(345));return s.finishedWork=s.current.alternate,s.finishedLanes=t,Vs(s,ke,rs),Ee(s,te()),null}function pa(s,t){var l=H;H|=1;try{return s(t)}finally{H=l,H===0&&(Mt=te()+500,Un&&Os())}}function et(s){ks!==null&&ks.tag===0&&!(H&6)&&Et();var t=H;H|=1;var l=Be.transition,n=U;try{if(Be.transition=null,U=1,s)return s()}finally{U=n,Be.transition=l,H=t,!(H&6)&&Os()}}function ha(){Ce=vt.current,q(vt)}function qs(s,t){s.finishedWork=null,s.finishedLanes=0;var l=s.timeoutHandle;if(l!==-1&&(s.timeoutHandle=-1,sp(l)),ie!==null)for(l=ie.return;l!==null;){var n=l;switch(qr(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Nn();break;case 3:zt(),q(Se),q(je),la();break;case 5:ta(n);break;case 4:zt();break;case 13:q(K);break;case 19:q(K);break;case 10:Xr(n.type._context);break;case 22:case 23:ha()}l=l.return}if(ue=s,ie=s=Ps(s.current,null),pe=Ce=t,ae=0,wl=null,ua=Yn=Zs=0,ke=al=null,Qs!==null){for(t=0;t<Qs.length;t++)if(l=Qs[t],n=l.interleaved,n!==null){l.interleaved=null;var i=n.next,r=l.pending;if(r!==null){var a=r.next;r.next=i,n.next=a}l.pending=n}Qs=null}return s}function Wd(s,t){do{var l=ie;try{if(Jr(),rn.current=Tn,An){for(var n=J.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}An=!1}if(Xs=0,de=re=J=null,il=!1,Nl=0,da.current=null,l===null||l.return===null){ae=1,wl=t,ie=null;break}e:{var r=s,a=l.return,c=l,o=t;if(t=pe,c.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var m=o,j=c,_=j.tag;if(!(j.mode&1)&&(_===0||_===11||_===15)){var g=j.alternate;g?(j.updateQueue=g.updateQueue,j.memoizedState=g.memoizedState,j.lanes=g.lanes):(j.updateQueue=null,j.memoizedState=null)}var b=vc(a);if(b!==null){b.flags&=-257,Nc(b,a,c,r,t),b.mode&1&&yc(r,m,t),t=b,o=m;var k=t.updateQueue;if(k===null){var S=new Set;S.add(o),t.updateQueue=S}else k.add(o);break e}else{if(!(t&1)){yc(r,m,t),fa();break e}o=Error(v(426))}}else if(G&&c.mode&1){var z=vc(a);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Nc(z,a,c,r,t),Gr(Lt(o,c));break e}}r=o=Lt(o,c),ae!==4&&(ae=2),al===null?al=[r]:al.push(r),r=a;do{switch(r.tag){case 3:r.flags|=65536,t&=-t,r.lanes|=t;var p=Ed(r,o,t);hc(r,p);break e;case 1:c=o;var u=r.type,h=r.stateNode;if(!(r.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(As===null||!As.has(h)))){r.flags|=65536,t&=-t,r.lanes|=t;var y=Cd(r,c,t);hc(r,y);break e}}r=r.return}while(r!==null)}qd(l)}catch(R){t=R,ie===l&&l!==null&&(ie=l=l.return);continue}break}while(!0)}function Qd(){var s=Pn.current;return Pn.current=Tn,s===null?Tn:s}function fa(){(ae===0||ae===3||ae===2)&&(ae=4),ue===null||!(Zs&268435455)&&!(Yn&268435455)||Ns(ue,pe)}function Mn(s,t){var l=H;H|=2;var n=Qd();(ue!==s||pe!==t)&&(rs=null,qs(s,t));do try{Sp();break}catch(i){Wd(s,i)}while(!0);if(Jr(),H=l,Pn.current=n,ie!==null)throw Error(v(261));return ue=null,pe=0,ae}function Sp(){for(;ie!==null;)Yd(ie)}function Rp(){for(;ie!==null&&!Xu();)Yd(ie)}function Yd(s){var t=Kd(s.alternate,s,Ce);s.memoizedProps=s.pendingProps,t===null?qd(s):ie=t,da.current=null}function qd(s){var t=s;do{var l=t.alternate;if(s=t.return,t.flags&32768){if(l=yp(l,t),l!==null){l.flags&=32767,ie=l;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{ae=6,ie=null;return}}else if(l=_p(l,t,Ce),l!==null){ie=l;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=s}while(t!==null);ae===0&&(ae=5)}function Vs(s,t,l){var n=U,i=Be.transition;try{Be.transition=null,U=1,Ep(s,t,l,n)}finally{Be.transition=i,U=n}return null}function Ep(s,t,l,n){do Et();while(ks!==null);if(H&6)throw Error(v(327));l=s.finishedWork;var i=s.finishedLanes;if(l===null)return null;if(s.finishedWork=null,s.finishedLanes=0,l===s.current)throw Error(v(177));s.callbackNode=null,s.callbackPriority=0;var r=l.lanes|l.childLanes;if(cm(s,r),s===ue&&(ie=ue=null,pe=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Jl||(Jl=!0,Jd(xn,function(){return Et(),null})),r=(l.flags&15990)!==0,l.subtreeFlags&15990||r){r=Be.transition,Be.transition=null;var a=U;U=1;var c=H;H|=4,da.current=null,Np(s,l),Fd(l,s),qm(lr),jn=!!tr,lr=tr=null,s.current=l,bp(l),Zu(),H=c,U=a,Be.transition=r}else s.current=l;if(Jl&&(Jl=!1,ks=s,Ln=i),r=s.pendingLanes,r===0&&(As=null),tm(l.stateNode),Ee(s,te()),t!==null)for(n=s.onRecoverableError,l=0;l<t.length;l++)i=t[l],n(i.value,{componentStack:i.stack,digest:i.digest});if(zn)throw zn=!1,s=br,br=null,s;return Ln&1&&s.tag!==0&&Et(),r=s.pendingLanes,r&1?s===kr?cl++:(cl=0,kr=s):cl=0,Os(),null}function Et(){if(ks!==null){var s=Eo(Ln),t=Be.transition,l=U;try{if(Be.transition=null,U=16>s?16:s,ks===null)var n=!1;else{if(s=ks,ks=null,Ln=0,H&6)throw Error(v(331));var i=H;for(H|=4,E=s.current;E!==null;){var r=E,a=r.child;if(E.flags&16){var c=r.deletions;if(c!==null){for(var o=0;o<c.length;o++){var m=c[o];for(E=m;E!==null;){var j=E;switch(j.tag){case 0:case 11:case 15:rl(8,j,r)}var _=j.child;if(_!==null)_.return=j,E=_;else for(;E!==null;){j=E;var g=j.sibling,b=j.return;if(Bd(j),j===m){E=null;break}if(g!==null){g.return=b,E=g;break}E=b}}}var k=r.alternate;if(k!==null){var S=k.child;if(S!==null){k.child=null;do{var z=S.sibling;S.sibling=null,S=z}while(S!==null)}}E=r}}if(r.subtreeFlags&2064&&a!==null)a.return=r,E=a;else e:for(;E!==null;){if(r=E,r.flags&2048)switch(r.tag){case 0:case 11:case 15:rl(9,r,r.return)}var p=r.sibling;if(p!==null){p.return=r.return,E=p;break e}E=r.return}}var u=s.current;for(E=u;E!==null;){a=E;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,E=h;else e:for(a=u;E!==null;){if(c=E,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Qn(9,c)}}catch(R){Z(c,c.return,R)}if(c===a){E=null;break e}var y=c.sibling;if(y!==null){y.return=c.return,E=y;break e}E=c.return}}if(H=i,Os(),ss&&typeof ss.onPostCommitFiberRoot=="function")try{ss.onPostCommitFiberRoot(In,s)}catch{}n=!0}return n}finally{U=l,Be.transition=t}}return!1}function Mc(s,t,l){t=Lt(l,t),t=Ed(s,t,1),s=Cs(s,t,1),t=ve(),s!==null&&(El(s,1,t),Ee(s,t))}function Z(s,t,l){if(s.tag===3)Mc(s,s,l);else for(;t!==null;){if(t.tag===3){Mc(t,s,l);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(As===null||!As.has(n))){s=Lt(l,s),s=Cd(t,s,1),t=Cs(t,s,1),s=ve(),t!==null&&(El(t,1,s),Ee(t,s));break}}t=t.return}}function Cp(s,t,l){var n=s.pingCache;n!==null&&n.delete(t),t=ve(),s.pingedLanes|=s.suspendedLanes&l,ue===s&&(pe&l)===l&&(ae===4||ae===3&&(pe&130023424)===pe&&500>te()-ma?qs(s,0):ua|=l),Ee(s,t)}function Gd(s,t){t===0&&(s.mode&1?(t=$l,$l<<=1,!($l&130023424)&&($l=4194304)):t=1);var l=ve();s=ps(s,t),s!==null&&(El(s,t,l),Ee(s,l))}function Ap(s){var t=s.memoizedState,l=0;t!==null&&(l=t.retryLane),Gd(s,l)}function Tp(s,t){var l=0;switch(s.tag){case 13:var n=s.stateNode,i=s.memoizedState;i!==null&&(l=i.retryLane);break;case 19:n=s.stateNode;break;default:throw Error(v(314))}n!==null&&n.delete(t),Gd(s,l)}var Kd;Kd=function(s,t,l){if(s!==null)if(s.memoizedProps!==t.pendingProps||Se.current)we=!0;else{if(!(s.lanes&l)&&!(t.flags&128))return we=!1,jp(s,t,l);we=!!(s.flags&131072)}else we=!1,G&&t.flags&1048576&&ed(t,wn,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;cn(s,t),s=t.pendingProps;var i=At(t,je.current);Rt(t,l),i=ia(null,t,n,s,i,l);var r=ra();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(n)?(r=!0,bn(t)):r=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ea(t),i.updater=Wn,t.stateNode=i,i._reactInternals=t,mr(t,n,s,l),t=fr(null,t,n,!0,r,l)):(t.tag=0,G&&r&&Yr(t),ye(null,t,i,l),t=t.child),t;case 16:n=t.elementType;e:{switch(cn(s,t),s=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=zp(n),s=We(n,s),i){case 0:t=hr(null,t,n,s,l);break e;case 1:t=wc(null,t,n,s,l);break e;case 11:t=bc(null,t,n,s,l);break e;case 14:t=kc(null,t,n,We(n.type,s),l);break e}throw Error(v(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:We(n,i),hr(s,t,n,i,l);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:We(n,i),wc(s,t,n,i,l);case 3:e:{if(zd(t),s===null)throw Error(v(387));n=t.pendingProps,r=t.memoizedState,i=r.element,rd(s,t),En(t,n,null,l);var a=t.memoizedState;if(n=a.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){i=Lt(Error(v(423)),t),t=Sc(s,t,n,l,i);break e}else if(n!==i){i=Lt(Error(v(424)),t),t=Sc(s,t,n,l,i);break e}else for(Ae=Es(t.stateNode.containerInfo.firstChild),Te=t,G=!0,Ye=null,l=nd(t,null,n,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Tt(),n===i){t=hs(s,t,l);break e}ye(s,t,n,l)}t=t.child}return t;case 5:return ad(t),s===null&&or(t),n=t.type,i=t.pendingProps,r=s!==null?s.memoizedProps:null,a=i.children,nr(n,i)?a=null:r!==null&&nr(n,r)&&(t.flags|=32),Pd(s,t),ye(s,t,a,l),t.child;case 6:return s===null&&or(t),null;case 13:return Ld(s,t,l);case 4:return sa(t,t.stateNode.containerInfo),n=t.pendingProps,s===null?t.child=Pt(t,null,n,l):ye(s,t,n,l),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:We(n,i),bc(s,t,n,i,l);case 7:return ye(s,t,t.pendingProps,l),t.child;case 8:return ye(s,t,t.pendingProps.children,l),t.child;case 12:return ye(s,t,t.pendingProps.children,l),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,r=t.memoizedProps,a=i.value,W(Sn,n._currentValue),n._currentValue=a,r!==null)if(Ke(r.value,a)){if(r.children===i.children&&!Se.current){t=hs(s,t,l);break e}}else for(r=t.child,r!==null&&(r.return=t);r!==null;){var c=r.dependencies;if(c!==null){a=r.child;for(var o=c.firstContext;o!==null;){if(o.context===n){if(r.tag===1){o=ds(-1,l&-l),o.tag=2;var m=r.updateQueue;if(m!==null){m=m.shared;var j=m.pending;j===null?o.next=o:(o.next=j.next,j.next=o),m.pending=o}}r.lanes|=l,o=r.alternate,o!==null&&(o.lanes|=l),dr(r.return,l,t),c.lanes|=l;break}o=o.next}}else if(r.tag===10)a=r.type===t.type?null:r.child;else if(r.tag===18){if(a=r.return,a===null)throw Error(v(341));a.lanes|=l,c=a.alternate,c!==null&&(c.lanes|=l),dr(a,l,t),a=r.sibling}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===t){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}ye(s,t,i.children,l),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Rt(t,l),i=$e(i),n=n(i),t.flags|=1,ye(s,t,n,l),t.child;case 14:return n=t.type,i=We(n,t.pendingProps),i=We(n.type,i),kc(s,t,n,i,l);case 15:return Ad(s,t,t.type,t.pendingProps,l);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:We(n,i),cn(s,t),t.tag=1,Re(n)?(s=!0,bn(t)):s=!1,Rt(t,l),Rd(t,n,i),mr(t,n,i,l),fr(null,t,n,!0,s,l);case 19:return Md(s,t,l);case 22:return Td(s,t,l)}throw Error(v(156,t.tag))};function Jd(s,t){return ko(s,t)}function Pp(s,t,l,n){this.tag=s,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(s,t,l,n){return new Pp(s,t,l,n)}function xa(s){return s=s.prototype,!(!s||!s.isReactComponent)}function zp(s){if(typeof s=="function")return xa(s)?1:0;if(s!=null){if(s=s.$$typeof,s===Mr)return 11;if(s===Dr)return 14}return 2}function Ps(s,t){var l=s.alternate;return l===null?(l=Ie(s.tag,t,s.key,s.mode),l.elementType=s.elementType,l.type=s.type,l.stateNode=s.stateNode,l.alternate=s,s.alternate=l):(l.pendingProps=t,l.type=s.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=s.flags&14680064,l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,t=s.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=s.sibling,l.index=s.index,l.ref=s.ref,l}function un(s,t,l,n,i,r){var a=2;if(n=s,typeof s=="function")xa(s)&&(a=1);else if(typeof s=="string")a=5;else e:switch(s){case ut:return Gs(l.children,i,r,t);case Lr:a=8,i|=8;break;case Di:return s=Ie(12,l,t,i|2),s.elementType=Di,s.lanes=r,s;case Oi:return s=Ie(13,l,t,i),s.elementType=Oi,s.lanes=r,s;case Ii:return s=Ie(19,l,t,i),s.elementType=Ii,s.lanes=r,s;case ro:return qn(l,i,r,t);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case no:a=10;break e;case io:a=9;break e;case Mr:a=11;break e;case Dr:a=14;break e;case _s:a=16,n=null;break e}throw Error(v(130,s==null?s:typeof s,""))}return t=Ie(a,l,t,i),t.elementType=s,t.type=n,t.lanes=r,t}function Gs(s,t,l,n){return s=Ie(7,s,n,t),s.lanes=l,s}function qn(s,t,l,n){return s=Ie(22,s,n,t),s.elementType=ro,s.lanes=l,s.stateNode={isHidden:!1},s}function Pi(s,t,l){return s=Ie(6,s,null,t),s.lanes=l,s}function zi(s,t,l){return t=Ie(4,s.children!==null?s.children:[],s.key,t),t.lanes=l,t.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},t}function Lp(s,t,l,n,i){this.tag=t,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pi(0),this.expirationTimes=pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pi(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ga(s,t,l,n,i,r,a,c,o){return s=new Lp(s,t,l,c,o),t===1?(t=1,r===!0&&(t|=8)):t=0,r=Ie(3,null,null,t),s.current=r,r.stateNode=s,r.memoizedState={element:n,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},ea(r),s}function Mp(s,t,l){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dt,key:n==null?null:""+n,children:s,containerInfo:t,implementation:l}}function Xd(s){if(!s)return Ls;s=s._reactInternals;e:{if(lt(s)!==s||s.tag!==1)throw Error(v(170));var t=s;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(s.tag===1){var l=s.type;if(Re(l))return Xo(s,l,t)}return t}function Zd(s,t,l,n,i,r,a,c,o){return s=ga(l,n,!0,s,i,r,a,c,o),s.context=Xd(null),l=s.current,n=ve(),i=Ts(l),r=ds(n,i),r.callback=t??null,Cs(l,r,i),s.current.lanes=i,El(s,i,n),Ee(s,n),s}function Gn(s,t,l,n){var i=t.current,r=ve(),a=Ts(i);return l=Xd(l),t.context===null?t.context=l:t.pendingContext=l,t=ds(r,a),t.payload={element:s},n=n===void 0?null:n,n!==null&&(t.callback=n),s=Cs(i,t,a),s!==null&&(Ge(s,i,a,r),nn(s,i,a)),a}function Dn(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function Dc(s,t){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var l=s.retryLane;s.retryLane=l!==0&&l<t?l:t}}function ja(s,t){Dc(s,t),(s=s.alternate)&&Dc(s,t)}function Dp(){return null}var eu=typeof reportError=="function"?reportError:function(s){console.error(s)};function _a(s){this._internalRoot=s}Kn.prototype.render=_a.prototype.render=function(s){var t=this._internalRoot;if(t===null)throw Error(v(409));Gn(s,t,null,null)};Kn.prototype.unmount=_a.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var t=s.containerInfo;et(function(){Gn(null,s,null,null)}),t[ms]=null}};function Kn(s){this._internalRoot=s}Kn.prototype.unstable_scheduleHydration=function(s){if(s){var t=To();s={blockedOn:null,target:s,priority:t};for(var l=0;l<vs.length&&t!==0&&t<vs[l].priority;l++);vs.splice(l,0,s),l===0&&zo(s)}};function ya(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function Jn(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function Oc(){}function Op(s,t,l,n,i){if(i){if(typeof n=="function"){var r=n;n=function(){var m=Dn(a);r.call(m)}}var a=Zd(t,n,s,0,null,!1,!1,"",Oc);return s._reactRootContainer=a,s[ms]=a.current,gl(s.nodeType===8?s.parentNode:s),et(),a}for(;i=s.lastChild;)s.removeChild(i);if(typeof n=="function"){var c=n;n=function(){var m=Dn(o);c.call(m)}}var o=ga(s,0,!1,null,null,!1,!1,"",Oc);return s._reactRootContainer=o,s[ms]=o.current,gl(s.nodeType===8?s.parentNode:s),et(function(){Gn(t,o,l,n)}),o}function Xn(s,t,l,n,i){var r=l._reactRootContainer;if(r){var a=r;if(typeof i=="function"){var c=i;i=function(){var o=Dn(a);c.call(o)}}Gn(t,a,s,i)}else a=Op(l,t,s,i,n);return Dn(a)}Co=function(s){switch(s.tag){case 3:var t=s.stateNode;if(t.current.memoizedState.isDehydrated){var l=Xt(t.pendingLanes);l!==0&&(Br(t,l|1),Ee(t,te()),!(H&6)&&(Mt=te()+500,Os()))}break;case 13:et(function(){var n=ps(s,1);if(n!==null){var i=ve();Ge(n,s,1,i)}}),ja(s,1)}};Hr=function(s){if(s.tag===13){var t=ps(s,134217728);if(t!==null){var l=ve();Ge(t,s,134217728,l)}ja(s,134217728)}};Ao=function(s){if(s.tag===13){var t=Ts(s),l=ps(s,t);if(l!==null){var n=ve();Ge(l,s,t,n)}ja(s,t)}};To=function(){return U};Po=function(s,t){var l=U;try{return U=s,t()}finally{U=l}};qi=function(s,t,l){switch(t){case"input":if($i(s,l),t=l.name,l.type==="radio"&&t!=null){for(l=s;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<l.length;t++){var n=l[t];if(n!==s&&n.form===s.form){var i=Fn(n);if(!i)throw Error(v(90));co(n),$i(n,i)}}}break;case"textarea":uo(s,l);break;case"select":t=l.value,t!=null&&bt(s,!!l.multiple,t,!1)}};jo=pa;_o=et;var Ip={usingClientEntryPoint:!1,Events:[Al,ft,Fn,xo,go,pa]},Gt={findFiberByHostInstance:Ws,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bp={bundleType:Gt.bundleType,version:Gt.version,rendererPackageName:Gt.rendererPackageName,rendererConfig:Gt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fs.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=No(s),s===null?null:s.stateNode},findFiberByHostInstance:Gt.findFiberByHostInstance||Dp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{In=Xl.inject(Bp),ss=Xl}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ip;Le.createPortal=function(s,t){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ya(t))throw Error(v(200));return Mp(s,t,null,l)};Le.createRoot=function(s,t){if(!ya(s))throw Error(v(299));var l=!1,n="",i=eu;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ga(s,1,!1,null,null,l,!1,n,i),s[ms]=t.current,gl(s.nodeType===8?s.parentNode:s),new _a(t)};Le.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var t=s._reactInternals;if(t===void 0)throw typeof s.render=="function"?Error(v(188)):(s=Object.keys(s).join(","),Error(v(268,s)));return s=No(t),s=s===null?null:s.stateNode,s};Le.flushSync=function(s){return et(s)};Le.hydrate=function(s,t,l){if(!Jn(t))throw Error(v(200));return Xn(null,s,t,!0,l)};Le.hydrateRoot=function(s,t,l){if(!ya(s))throw Error(v(405));var n=l!=null&&l.hydratedSources||null,i=!1,r="",a=eu;if(l!=null&&(l.unstable_strictMode===!0&&(i=!0),l.identifierPrefix!==void 0&&(r=l.identifierPrefix),l.onRecoverableError!==void 0&&(a=l.onRecoverableError)),t=Zd(t,null,s,1,l??null,i,!1,r,a),s[ms]=t.current,gl(s),n)for(s=0;s<n.length;s++)l=n[s],i=l._getVersion,i=i(l._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[l,i]:t.mutableSourceEagerHydrationData.push(l,i);return new Kn(t)};Le.render=function(s,t,l){if(!Jn(t))throw Error(v(200));return Xn(null,s,t,!1,l)};Le.unmountComponentAtNode=function(s){if(!Jn(s))throw Error(v(40));return s._reactRootContainer?(et(function(){Xn(null,null,s,!1,function(){s._reactRootContainer=null,s[ms]=null})}),!0):!1};Le.unstable_batchedUpdates=pa;Le.unstable_renderSubtreeIntoContainer=function(s,t,l,n){if(!Jn(l))throw Error(v(200));if(s==null||s._reactInternals===void 0)throw Error(v(38));return Xn(s,t,l,!1,n)};Le.version="18.3.1-next-f1338f8080-20240426";function su(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(su)}catch(s){console.error(s)}}su(),eo.exports=Le;var Hp=eo.exports,Ic=Hp;Li.createRoot=Ic.createRoot,Li.hydrateRoot=Ic.hydrateRoot;/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=(...s)=>s.filter((t,l,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===l).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,l,n)=>n?n.toUpperCase():l.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=s=>{const t=Fp(s);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Up={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=$.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:l=2,absoluteStrokeWidth:n,className:i="",children:r,iconNode:a,...c},o)=>$.createElement("svg",{ref:o,...Up,width:t,height:t,stroke:s,strokeWidth:n?Number(l)*24/Number(t):l,className:tu("lucide",i),...!r&&!Vp(c)&&{"aria-hidden":"true"},...c},[...a.map(([m,j])=>$.createElement(m,j)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=(s,t)=>{const l=$.forwardRef(({className:n,...i},r)=>$.createElement(Wp,{ref:r,iconNode:t,className:tu(`lucide-${$p(Bc(s))}`,`lucide-${s}`,n),...i}));return l.displayName=Bc(s),l};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Is=w("arrow-right",Qp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],qp=w("book-marked",Yp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Je=w("book-open",Gp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Sl=w("box",Kp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],Xp=w("braces",Jp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],eh=w("chevron-left",Zp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],th=w("chevron-right",sh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Pl=w("circle-alert",lh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Y=w("circle-check-big",nh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],rh=w("circle-plus",ih);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ch=w("circle-question-mark",ah);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],va=w("clipboard-list",oh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],uh=w("clock",dh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],ph=w("cloud",mh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Zn=w("code",hh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],xh=w("coffee",fh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],jh=w("compass",gh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]],lu=w("container",_h);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Na=w("cpu",yh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],le=w("database",vh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],nu=w("download",Nh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ei=w("eye",bh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],wh=w("file-pen",kh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ba=w("file-text",Sh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],Eh=w("flag",Rh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Ah=w("flask-conical",Ch);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Ph=w("folder-open",Th);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],nt=w("funnel",zh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M10.5 3 8 9l4 13 4-13-2.5-6",key:"b3dvk1"}],["path",{d:"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",key:"7w4byz"}],["path",{d:"M2 9h20",key:"16fsjt"}]],si=w("gem",Lh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],xs=w("git-branch",Mh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],it=w("globe",Dh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],ls=w("hash",Oh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],iu=w("heart",Ih);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Hh=w("house",Bh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],_e=w("layers",$h);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],ti=w("lightbulb",Fh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],ru=w("link-2",Uh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],Dt=w("link",Vh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],rt=w("list",Wh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ka=w("lock",Qh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],qh=w("mail",Yh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],au=w("map",Gh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Jh=w("message-square",Kh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["path",{d:"M5 12h14",key:"1ays0h"}]],Zh=w("minus",Xh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],cu=w("monitor",ef);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],tf=w("moon",sf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],He=w("package",lf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],rf=w("palette",nf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],ou=w("panels-top-left",af);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],wa=w("play",cf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],df=w("plus",of);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],at=w("puzzle",uf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],ze=w("refresh-cw",mf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Bs=w("rocket",pf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],zl=w("search",hf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ct=w("settings",ff);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],ce=w("shield",xf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],jf=w("smile",gf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],yf=w("square-check-big",_f);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],li=w("star",vf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],bf=w("sun",Nf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],ni=w("table",kf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],ns=w("target",wf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],st=w("terminal",Sf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],du=w("toggle-left",Rf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Cf=w("trash-2",Ef);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Sa=w("triangle-alert",Af);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],Pf=w("trophy",Tf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],Ra=w("type",zf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Ea=w("upload",Lf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],uu=w("users",Mf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]],Of=w("variable",Df);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],gs=w("wrench",If);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],V=w("zap",Bf);function Hs({slides:s}){const[t,l]=$.useState(0),[n,i]=$.useState(!1),r=$.useCallback(m=>{m>=0&&m<s.length&&!n&&(i(!0),l(m),setTimeout(()=>i(!1),300))},[n,s.length]),a=$.useCallback(()=>{r(t+1)},[t,r]),c=$.useCallback(()=>{r(t-1)},[t,r]);$.useEffect(()=>{const m=j=>{j.key==="ArrowRight"||j.key===" "?(j.preventDefault(),a()):j.key==="ArrowLeft"?(j.preventDefault(),c()):j.key==="Home"?(j.preventDefault(),r(0)):j.key==="End"&&(j.preventDefault(),r(s.length-1))};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[a,c,r,s.length]);const o=s[t].component;return e.jsxs("div",{className:"lecture-wrapper",children:[e.jsxs("nav",{className:"slide-nav",children:[e.jsxs("div",{className:"slide-nav__controls",children:[e.jsx("button",{onClick:()=>r(0),className:"slide-nav__btn",title:"На початок (Home)",children:e.jsx(Hh,{})}),e.jsx("button",{onClick:c,disabled:t===0,className:"slide-nav__btn",title:"Попередній (←)",children:e.jsx(eh,{})}),e.jsx("button",{onClick:a,disabled:t===s.length-1,className:"slide-nav__btn",title:"Наступний (→)",children:e.jsx(th,{})})]}),e.jsx("div",{className:"slide-nav__indicators",children:s.map((m,j)=>e.jsx("button",{onClick:()=>r(j),className:`slide-nav__indicator ${t===j?"slide-nav__indicator--active":"slide-nav__indicator--inactive"}`,title:m.title,children:j+1},m.id))}),e.jsxs("div",{className:"slide-nav__counter",children:[t+1," / ",s.length]})]}),e.jsx("div",{className:"slide-container",children:e.jsx("div",{className:"fade-in",children:e.jsx(o,{})},t)}),e.jsxs("div",{className:"keyboard-hints",children:[e.jsx("span",{children:"← → — навігація"}),e.jsx("span",{children:"Home — на початок"}),e.jsx("span",{children:"End — в кінець"})]})]})}function I({icon:s,title:t,subtitle:l,description:n,color:i,delay:r=1}){return e.jsxs("div",{className:`info-card info-card--top-${i} fade-in-delay-${r}`,children:[e.jsx("div",{className:`info-card__icon-wrapper info-card__icon-wrapper--${i}`,children:e.jsx(s,{className:`info-card__icon info-card__icon--${i}`})}),e.jsx("h3",{className:"info-card__title",children:t}),l&&e.jsx("p",{className:"info-card__subtitle",children:l}),e.jsx("p",{className:"info-card__text",children:n})]})}function Hf({content:s,color:t}){const[l,n]=$.useState(!1),i=$.useRef(null);return $.useEffect(()=>{function r(a){i.current&&!i.current.contains(a.target)&&n(!1)}return l&&document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[l]),e.jsxs("span",{ref:i,className:"tooltip-wrapper",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[e.jsx("span",{className:`tooltip-trigger tooltip-trigger--${t}`,onClick:()=>n(r=>!r),"aria-label":"Детальніше",children:"ⓘ"}),l&&e.jsx("div",{className:`tooltip-content tooltip-content--${t}`,children:s})]})}function N({icon:s,title:t,subtitle:l,description:n,tooltip:i,color:r,delay:a=1,style:c}){return e.jsxs("div",{className:`info-card info-card--${r} fade-in-delay-${a}`,style:c,children:[s&&e.jsx(s,{className:`icon-md text-${r} mb-sm`}),e.jsxs("div",{className:"flex items-center gap-xs",children:[e.jsx("h3",{className:"info-card__title",children:t}),i&&e.jsx(Hf,{content:i,color:r})]}),l&&e.jsx("p",{className:"info-card__subtitle",children:l}),e.jsx("p",{className:"info-card__text",children:n})]})}function ne({letter:s,title:t,subtitle:l,description:n,color:i,delay:r=1}){return e.jsxs("div",{className:`info-card info-card--${i} fade-in-delay-${r}`,children:[e.jsxs("div",{className:"flex items-center gap-sm mb-sm",children:[e.jsx("span",{className:`badge badge--solid-${i}`,children:s}),e.jsx("h3",{className:"info-card__title",children:t})]}),l&&e.jsx("p",{className:"info-card__subtitle",children:l}),e.jsx("p",{className:"info-card__text",children:n})]})}function B({color:s="orange",title:t="Rule",children:l}){return e.jsxs("div",{className:`outlined-card outlined-card--${s}`,children:[e.jsx("p",{style:{fontWeight:600,color:`var(--accent-${s}-text)`,marginBottom:"0.5rem"},children:t}),e.jsx("p",{style:{color:`var(--accent-${s}-text)`,fontSize:"0.88rem",margin:0},children:l})]})}function x({children:s}){return e.jsx("p",{className:"section-label",children:s})}function F({term:s,desc:t,color:l="blue"}){return e.jsxs("div",{className:`definition definition--${l}`,children:[e.jsx("p",{className:`definition__term definition__term--${l}`,children:s}),e.jsx("p",{className:"definition__description",children:t})]})}const Hc=()=>e.jsx("div",{style:{textAlign:"center",color:"var(--text-dark)",fontSize:"1.3rem",lineHeight:1},children:"↓"});function mn({color:s,icon:t,text:l,badge:n}){return e.jsxs("div",{className:`outlined-card outlined-card--${s}`,style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[e.jsx("span",{style:{color:`var(--accent-${s}-text)`},children:t}),e.jsx("span",{style:{color:`var(--accent-${s}-text)`,fontSize:"0.88rem",flex:1},children:l}),e.jsx("span",{className:`badge badge--${s}`,children:n})]})}function mu({color:s,badge:t,desc:l}){return e.jsxs("div",{style:{display:"flex",gap:"0.4rem",alignItems:"center",fontSize:"0.8rem"},children:[e.jsx("span",{className:`badge badge--${s}`,children:t}),e.jsx("span",{style:{color:"var(--text-muted)"},children:l})]})}function f({icon:s,title:t,subtitle:l}){return e.jsx("header",{className:"slide-header",children:e.jsxs("div",{className:"slide-header__wrapper",children:[e.jsx(s,{className:"slide-header__icon"}),e.jsxs("div",{className:"slide-header__content",children:[e.jsx("h2",{className:"slide-header__title",children:t}),e.jsx("p",{className:"slide-header__subtitle",children:l})]})]})})}const $f=[{id:0,title:"Лабораторні",component:Uf},{id:1,title:"Титульний слайд",component:Vf},{id:2,title:"Мета заняття",component:Wf},{id:3,title:"Чому Ruby?",component:Qf},{id:"3_1",title:"Філософія Matz",component:Yf},{id:4,title:"Історія Ruby",component:qf},{id:5,title:"Встановлення Ruby",component:Gf},{id:"5_1",title:"IRB — інтерактивна консоль",component:Kf},{id:"5_2",title:"Перший скрипт",component:Jf},{id:6,title:"Типи даних",component:Xf},{id:"6_1",title:"String — рядки",component:Zf},{id:"6_2",title:"Числа та Boolean",component:ex},{id:"6_3",title:"nil — відсутність значення",component:sx},{id:7,title:"Змінні",component:tx},{id:"7_1",title:"puts, print, p",component:lx},{id:"7_2",title:"Інтерполяція рядків",component:nx},{id:8,title:"Умовні конструкції",component:ix},{id:"8_1",title:"unless та тернарний оператор",component:rx},{id:9,title:"Практика: Вгадай число",component:ax},{id:10,title:"Підсумки",component:cx},{id:11,title:"Джерела",component:ox},{id:12,title:"Питання?",component:dx}];function Ff(){return e.jsx(Hs,{slides:$f})}function Uf(){const s=[{num:"1",title:"Ruby: функції + хеші + файли",desc:"CRUD-функції, хеші з символьними ключами, збереження у JSON/YAML",points:10,color:"blue"},{num:"2",title:"Ruby: консольний додаток",desc:"Меню через цикл, require_relative, автозавантаження та збереження через ensure",points:10,color:"purple"},{num:"3",title:"Rails: MVC, scaffold, маршрути",desc:"Scaffold для Category, Task вручну, enum, RuboCop",points:10,color:"green"},{num:"4",title:"Шаблони, форми, partials",desc:"Bootstrap, layout, partial для форми, helpers, Docker",points:10,color:"orange"},{num:"5",title:"Active Record: міграції та запити",desc:"Нові поля через міграції, where/order/limit, scopes, нова модель",points:15,color:"cyan"},{num:"6",title:"Асоціації та валідації",desc:"belongs_to, has_many, many-to-many через taggings, кастомні валідації",points:15,color:"pink"},{num:"7",title:"Аутентифікація та тести",desc:"Devise, авторизація через before_action, RSpec + FactoryBot",points:15,color:"yellow"},{num:"8",title:"CI/CD: GitHub Actions + Render",desc:"RSpec + RuboCop у CI, Docker образ на DockerHub, деплой на Render",points:15,color:"red"}];return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content slide__content--wide",children:[e.jsx(f,{icon:Je,title:"Лабораторні роботи",subtitle:"8 labs · 100 points total"}),e.jsx("div",{className:"slide-grid slide-grid--4col",children:s.map(t=>e.jsx(ne,{letter:t.num,title:t.title,subtitle:`${t.points} балів`,description:t.desc,color:t.color,delay:t.num},t.num))})]})})}function Vf(){return e.jsxs("div",{className:"slide slide--centered slide--gradient-blue-purple",children:[e.jsx("div",{className:"title-slide__icon-wrapper",children:e.jsx(si,{})}),e.jsx("h1",{className:"title-slide__title",children:"Знайомство з Ruby"}),e.jsx("h2",{className:"title-slide__subtitle",children:"Мова, філософія, інструменти"}),e.jsx("p",{className:"title-slide__english",children:"Introduction to Ruby Programming Language"}),e.jsx("div",{className:"title-slide__badge",children:e.jsx("p",{children:"Лекція 1"})})]})}function Wf(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ns,title:"Мета заняття",subtitle:"Learning Objectives"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx(N,{icon:nu,title:"Встановити Ruby",description:"Налаштувати середовище розробки: rbenv або asdf, IRB, текстовий редактор",color:"blue",delay:1}),e.jsx(N,{icon:iu,title:"Зрозуміти філософію",description:"Дізнатися, чому Ruby створений для щастя програмістів і що це означає на практиці",color:"purple",delay:2}),e.jsx(N,{icon:Ra,title:"Вивчити базові типи даних",description:"String, Integer, Float, Boolean, nil — основи системи типів Ruby",color:"green",delay:3}),e.jsx(N,{icon:Zn,title:"Написати першу програму",description:"Консольна гра «Вгадай число» з підказками більше/менше",color:"orange",delay:4})]})]})})}function Qf(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ch,title:"Чому Ruby?",subtitle:"Why Ruby?"}),e.jsxs("div",{className:"slide-grid slide-grid--3col",children:[e.jsx(I,{icon:jf,title:"Developer Happiness",description:"Ruby створений, щоб програмісти отримували задоволення від коду. Синтаксис читається майже як англійська мова.",color:"pink",delay:1}),e.jsx(I,{icon:Bs,title:"Ruby on Rails",description:"Один з найпопулярніших веб-фреймворків. GitHub, Shopify, Airbnb, Basecamp — побудовані на Rails.",color:"red",delay:2}),e.jsx(I,{icon:V,title:"Продуктивність",description:"Менше boilerplate-коду, потужні абстракції, величезна екосистема gems (бібліотек).",color:"yellow",delay:3})]}),e.jsx("div",{className:"outlined-card outlined-card--blue mt-xl fade-in-delay-4",children:e.jsxs("p",{className:"text-center",style:{margin:0},children:[e.jsx("span",{className:"text-blue font-semibold",children:"Факт:"})," ",e.jsx("span",{className:"text-secondary",children:"Ruby входить у ТОП-10 за рейтингом RedMonk (GitHub + Stack Overflow), а Shopify, GitHub, Basecamp продовжують масштабно інвестувати в Ruby-інфраструктуру"})]})})]})})}function Yf(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content slide__content--narrow",children:[e.jsx(f,{icon:iu,title:"Філософія Matz",subtitle:"Yukihiro Matsumoto — creator of Ruby"}),e.jsxs("div",{className:"outlined-card outlined-card--gradient-purple-pink mb-xl fade-in-delay-1",children:[e.jsxs("p",{className:"text-center fs-lg font-semibold",style:{margin:0,lineHeight:1.8},children:[e.jsx("span",{className:"text-pink",children:"«"}),"Ruby створений для щастя програмістів.",e.jsx("br",{}),"Я хочу, щоб програмування було радісним, а не болісним.",e.jsx("span",{className:"text-pink",children:"»"})]}),e.jsx("p",{className:"text-center text-muted mt-sm",style:{margin:"0.5rem 0 0 0"},children:"— Yukihiro «Matz» Matsumoto"})]}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx(N,{icon:Je,title:"Принцип найменшого здивування",subtitle:"Principle of Least Surprise",description:"Мова повинна поводитися так, як програміст інтуїтивно очікує. Мінімум сюрпризів.",color:"purple",delay:2}),e.jsx(N,{icon:xh,title:"Людина понад усе",subtitle:"Human-Oriented Design",description:"Комп'ютери мають працювати для людей, а не навпаки. Код пишеться для людей, не для машин.",color:"pink",delay:3}),e.jsx(N,{icon:ti,title:"Свобода вираження",subtitle:"Freedom & Flexibility",description:"Ruby пропонує кілька способів вирішити задачу. Програміст обирає найзручніший для себе.",color:"cyan",delay:4}),e.jsx(N,{icon:si,title:"Елегантність",subtitle:"Beautiful Code",description:"Код має бути красивим і зрозумілим. Ruby заохочує чистий, виразний стиль програмування.",color:"red",delay:5})]})]})})}function qf(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:uh,title:"Історія Ruby",subtitle:"Ruby Timeline"}),e.jsxs("div",{className:"step-list",children:[e.jsxs("div",{className:"step-list__item step-list__item--red fade-in-delay-1",children:[e.jsx("div",{className:"step-list__number step-list__number--red",children:"1"}),e.jsxs("div",{className:"step-list__content",children:[e.jsxs("h4",{className:"step-list__title step-list__title--red",children:["1993 — Ідея ",e.jsx("span",{className:"step-list__subtitle",children:"Birth of an idea"})]}),e.jsx("p",{className:"step-list__description",children:"Yukihiro Matsumoto (Matz) починає розробку Ruby. Хоче поєднати найкраще з Perl, Smalltalk, Eiffel та Lisp."})]})]}),e.jsxs("div",{className:"step-list__item step-list__item--orange fade-in-delay-2",children:[e.jsx("div",{className:"step-list__number step-list__number--orange",children:"2"}),e.jsxs("div",{className:"step-list__content",children:[e.jsxs("h4",{className:"step-list__title step-list__title--orange",children:["1995 — Перший реліз ",e.jsx("span",{className:"step-list__subtitle",children:"Public release in Japan"})]}),e.jsx("p",{className:"step-list__description",children:"Ruby 0.95 опублікований у японських новинних групах. Мова швидко набирає популярність в Японії."})]})]}),e.jsxs("div",{className:"step-list__item step-list__item--yellow fade-in-delay-3",children:[e.jsx("div",{className:"step-list__number step-list__number--yellow",children:"3"}),e.jsxs("div",{className:"step-list__content",children:[e.jsxs("h4",{className:"step-list__title step-list__title--yellow",children:["2004 — Ruby on Rails ",e.jsx("span",{className:"step-list__subtitle",children:"The framework that changed everything"})]}),e.jsx("p",{className:"step-list__description",children:"David Heinemeier Hansson випускає Rails. Ruby стає глобально популярним, вибух веб-розробки."})]})]}),e.jsxs("div",{className:"step-list__item step-list__item--green fade-in-delay-4",children:[e.jsx("div",{className:"step-list__number step-list__number--green",children:"4"}),e.jsxs("div",{className:"step-list__content",children:[e.jsxs("h4",{className:"step-list__title step-list__title--green",children:["2013 — Ruby 2.0 ",e.jsx("span",{className:"step-list__subtitle",children:"Modern Ruby era"})]}),e.jsx("p",{className:"step-list__description",children:"Keyword arguments, lazy enumerators, Module#prepend. Початок модернізації мови."})]})]}),e.jsxs("div",{className:"step-list__item step-list__item--blue fade-in-delay-5",children:[e.jsx("div",{className:"step-list__number step-list__number--blue",children:"5"}),e.jsxs("div",{className:"step-list__content",children:[e.jsxs("h4",{className:"step-list__title",children:["2020+ — Ruby 3.x ",e.jsx("span",{className:"step-list__subtitle",children:"Ruby 3x3: three times faster"})]}),e.jsx("p",{className:"step-list__description",children:"YJIT-компілятор, Ractor для паралелізму, pattern matching, типізація через RBS. Ruby стає значно швидшим."})]})]})]})]})})}function Gf(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:nu,title:"Встановлення Ruby",subtitle:"Installation & Setup"}),e.jsxs("div",{className:"slide-grid slide-grid--3col",children:[e.jsxs("div",{className:"outlined-card outlined-card--orange fade-in-delay-1",children:[e.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[e.jsx(cu,{className:"icon-md text-orange"}),e.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Windows"})]}),e.jsx("div",{className:"code-block mb-md",children:e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`# RubyInstaller (найпростіший спосіб)
# 1. Завантажити з rubyinstaller.org
# 2. Обрати "Ruby+Devkit 3.3.x (x64)"
# 3. Запустити інсталятор
# 4. Обрати "MSYS2 development toolchain"

# Або через winget:
winget install RubyInstallerTeam.Ruby.3.3`})}),e.jsx("p",{className:"text-muted fs-body-sm",style:{margin:0},children:"Включає DevKit для компіляції нативних gems"})]}),e.jsxs("div",{className:"outlined-card outlined-card--blue fade-in-delay-2",children:[e.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[e.jsx(st,{className:"icon-md text-blue"}),e.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"macOS / Linux"})]}),e.jsx("div",{className:"code-block mb-md",children:e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`# macOS — вже є системний Ruby!
ruby --version  # перевірити

# Або встановити свіжий:
brew install ruby  # macOS

# Linux (Ubuntu/Debian)
sudo apt update
sudo apt install ruby-full`})}),e.jsx("p",{className:"text-muted fs-body-sm",style:{margin:0},children:"Швидко, але без контролю версій"})]}),e.jsxs("div",{className:"outlined-card outlined-card--purple fade-in-delay-3",children:[e.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[e.jsx(ct,{className:"icon-md text-purple"}),e.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Менеджери версій"})]}),e.jsx("div",{className:"code-block mb-md",children:e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`# rbenv (рекомендовано)
brew install rbenv ruby-build
rbenv install 3.3.0
rbenv global 3.3.0

# asdf (універсальний)
brew install asdf  # або git clone
asdf plugin add ruby
asdf install ruby 3.3.0
asdf global ruby 3.3.0`})}),e.jsx("p",{className:"text-muted fs-body-sm",style:{margin:0},children:"Для роботи з кількома версіями Ruby"})]})]}),e.jsxs("div",{className:"outlined-card outlined-card--green mt-xl fade-in-delay-4",children:[e.jsxs("div",{className:"flex items-center gap-sm mb-sm",children:[e.jsx(Y,{className:"icon-md text-green"}),e.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Перевірка встановлення (всі ОС)"})]}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,lineHeight:1.7},children:`ruby --version    # → ruby 3.3.0 (...)
irb               # → інтерактивна консоль Ruby
gem --version     # → менеджер пакетів (gems)`})]})]})})}function Kf(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content slide__content--narrow",children:[e.jsx(f,{icon:st,title:"IRB — Interactive Ruby",subtitle:"Інтерактивна консоль для експериментів"}),e.jsxs("div",{className:"outlined-card outlined-card--cyan mb-xl fade-in-delay-1",children:[e.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[e.jsx(st,{className:"icon-md text-cyan"}),e.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Що таке IRB?"})]}),e.jsxs("p",{className:"text-secondary fs-body",style:{margin:0},children:[e.jsx("strong",{children:"IRB"})," (Interactive Ruby) — це REPL (Read-Eval-Print Loop). Ви вводите код → Ruby виконує → показує результат. Ідеально для навчання та швидких експериментів."]})]}),e.jsxs("div",{className:"outlined-card outlined-card--blue fade-in-delay-2",children:[e.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[e.jsx(wa,{className:"icon-md text-blue"}),e.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Приклад сесії IRB"})]}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`irb(main):001> 2 + 2
=> 4

irb(main):002> "Hello, Ruby!".upcase
=> "HELLO, RUBY!"

irb(main):003> [1, 2, 3].map { |n| n * 10 }
=> [10, 20, 30]

irb(main):004> 5.times { print "🔴 " }
🔴 🔴 🔴 🔴 🔴 => 5

irb(main):005> exit`})]}),e.jsx("div",{className:"outlined-card outlined-card--orange mt-xl fade-in-delay-3",children:e.jsxs("p",{className:"text-center",style:{margin:0},children:[e.jsx("span",{className:"text-orange font-semibold",children:"💡 Порада:"})," ",e.jsx("span",{className:"text-secondary",children:"Тримайте IRB завжди відкритим поруч з редактором — це найшвидший спосіб перевірити будь-яку ідею!"})]})})]})})}function Jf(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content slide__content--narrow",children:[e.jsx(f,{icon:ba,title:"Перший скрипт Ruby",subtitle:"Your first .rb file"}),e.jsxs("div",{className:"step-list",children:[e.jsxs("div",{className:"step-list__item step-list__item--blue fade-in-delay-1",children:[e.jsx("div",{className:"step-list__number step-list__number--blue",children:"1"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("h4",{className:"step-list__title",children:"Створіть файл"}),e.jsx("pre",{className:"font-mono fs-body-sm text-muted",style:{margin:0},children:"touch hello.rb"})]})]}),e.jsxs("div",{className:"step-list__item step-list__item--purple fade-in-delay-2",children:[e.jsx("div",{className:"step-list__number step-list__number--purple",children:"2"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("h4",{className:"step-list__title",children:"Напишіть код"}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:"0.5rem 0",whiteSpace:"pre-wrap",lineHeight:1.7},children:`# hello.rb — наша перша програма на Ruby

puts "Привіт, #{name}! 👋"
puts "Ласкаво просимо у світ Ruby!"
puts "Сьогодні: #{Time.now.strftime('%d.%m.%Y')}"  `}),e.jsxs("p",{className:"text-muted fs-body-sm",style:{margin:"0.5rem 0 0 0"},children:["💡 ",e.jsx("code",{className:"font-mono text-cyan",children:"gets"})," — зчитує введення користувача (з ",e.jsx("code",{className:"font-mono",children:"\\\\n"})," наприкінці)."," ",e.jsx("code",{className:"font-mono text-cyan",children:".chomp"})," — видаляє цей ",e.jsx("code",{className:"font-mono",children:"\\\\n"}),". Для пробілів використовують ",e.jsx("code",{className:"font-mono text-cyan",children:".strip"})]})]})]}),e.jsxs("div",{className:"step-list__item step-list__item--green fade-in-delay-3",children:[e.jsx("div",{className:"step-list__number step-list__number--green",children:"3"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("h4",{className:"step-list__title",children:"Запустіть"}),e.jsx("pre",{className:"font-mono fs-body-sm text-muted",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`ruby hello.rb
# → Як тебе звати?
# → (вводите ім'я)
# → Привіт, Олена! 👋
# → Ласкаво просимо у світ Ruby!
# → Сьогодні: 01.03.2026`})]})]})]})]})})}function Xf(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:le,title:"Типи даних у Ruby",subtitle:"Data Types Overview"}),e.jsxs("p",{className:"text-center text-muted mb-xl fade-in-delay-1",style:{margin:"0 0 1.5rem 0"},children:["Ruby — мова з ",e.jsx("strong",{className:"text-primary",children:"динамічною типізацією"}),". Тип визначається автоматично, не потрібно оголошувати."]}),e.jsxs("div",{className:"slide-grid slide-grid--3col",children:[e.jsx(I,{icon:Ra,title:"String",subtitle:"Рядки",description:`Текстові дані в лапках: "hello" або 'hello'. Підтримує інтерполяцію, багато вбудованих методів.`,color:"blue",delay:2}),e.jsx(I,{icon:ls,title:"Integer & Float",subtitle:"Числа",description:"Цілі числа (42, -7) та дробові (3.14, 2.0). Автоматична конвертація при потребі.",color:"green",delay:3}),e.jsx(I,{icon:du,title:"Boolean & nil",subtitle:"Логічні значення",description:"true / false — логічні значення. nil — спеціальне значення «нічого», відсутність об'єкта.",color:"purple",delay:4})]}),e.jsxs("div",{className:"outlined-card outlined-card--yellow mt-xl fade-in-delay-5",children:[e.jsxs("div",{className:"flex items-center gap-sm mb-sm",children:[e.jsx(ti,{className:"icon-md text-yellow"}),e.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Все є об'єктом!"})]}),e.jsxs("p",{className:"text-secondary",style:{margin:0},children:["В Ruby ",e.jsx("strong",{children:"абсолютно все"})," є об'єктом — навіть числа і nil. Це означає: ",e.jsx("code",{className:"font-mono text-cyan",children:"42.even?"})," → ",e.jsx("code",{className:"font-mono text-green",children:"true"}),","," ",e.jsx("code",{className:"font-mono text-cyan",children:"nil.nil?"})," → ",e.jsx("code",{className:"font-mono text-green",children:"true"}),","," ",e.jsx("code",{className:"font-mono text-cyan",children:'"hello".class'})," → ",e.jsx("code",{className:"font-mono text-green",children:"String"})]})]}),e.jsx("div",{className:"outlined-card outlined-card--cyan mt-base fade-in-delay-6",children:e.jsxs("p",{className:"text-center",style:{margin:0},children:[e.jsx("span",{className:"text-cyan font-semibold",children:"📌 Наступна лекція:"})," ",e.jsxs("span",{className:"text-secondary",children:["Ruby має ще важливі типи — ",e.jsx("code",{className:"font-mono text-cyan",children:"Symbol"})," (",e.jsx("code",{className:"font-mono",children:":name"}),"),"," ",e.jsx("code",{className:"font-mono text-cyan",children:"Array"})," (",e.jsx("code",{className:"font-mono",children:"[1, 2, 3]"}),"),"," ",e.jsx("code",{className:"font-mono text-cyan",children:"Hash"})," (",e.jsx("code",{className:"font-mono",children:"{ key: value }"}),") — розглянемо їх детально у Лекції 2"]})]})})]})})}function Zf(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content slide__content--narrow",children:[e.jsx(f,{icon:Ra,title:"String — рядки",subtitle:"Strings in Ruby"}),e.jsxs("div",{className:"slide-grid slide-grid--2col mb-xl",children:[e.jsxs("div",{className:"outlined-card outlined-card--blue fade-in-delay-1",children:[e.jsx("h3",{className:"font-heading font-bold text-blue mb-sm",style:{margin:"0 0 0.5rem 0"},children:'Подвійні лапки ""'}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`name = "Ruby"
puts "Hello, #{name}!"  # інтерполяція
puts "Tab:\\tNew line:\\n" # спец. символи`}),e.jsx("p",{className:"text-muted fs-body-sm mt-sm",style:{margin:"0.5rem 0 0 0"},children:"✅ Підтримує інтерполяцію та escape-послідовності"})]}),e.jsxs("div",{className:"outlined-card outlined-card--purple fade-in-delay-2",children:[e.jsx("h3",{className:"font-heading font-bold text-purple mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Одинарні лапки ''"}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`puts 'Hello, #{name}!'
# → Hello, #{name}!  (literal)

puts 'No special \\n here'
# → No special \\n here`}),e.jsx("p",{className:"text-muted fs-body-sm mt-sm",style:{margin:"0.5rem 0 0 0"},children:"❌ Без інтерполяції, без escape-послідовностей"})]})]}),e.jsxs("div",{className:"outlined-card outlined-card--green fade-in-delay-3",children:[e.jsx("h3",{className:"font-heading font-bold text-green mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Корисні методи String"}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`"hello".upcase          # → "HELLO"
"HELLO".downcase        # → "hello"
"hello".capitalize      # → "Hello"
"hello world".split     # → ["hello", "world"]
"  hello  ".strip       # → "hello"
"hello".length          # → 5
"hello".include?("ell") # → true
"hello".reverse         # → "olleh"
"hello".chars           # → ["h", "e", "l", "l", "o"]`})]})]})})}function ex(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ls,title:"Числа та Boolean",subtitle:"Numbers & Booleans"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{className:"outlined-card outlined-card--green fade-in-delay-1",children:[e.jsx("h3",{className:"font-heading font-bold text-green mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Integer — цілі числа"}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`42 + 8        # → 50
10 / 3        # → 3  (ціле ділення!)
10 % 3        # → 1  (залишок)
2 ** 10       # → 1024  (степінь)
1_000_000     # → 1000000 (читабельність)

42.even?      # → true
7.odd?        # → true
-5.abs        # → 5
42.to_f       # → 42.0`})]}),e.jsxs("div",{className:"outlined-card outlined-card--blue fade-in-delay-2",children:[e.jsx("h3",{className:"font-heading font-bold text-blue mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Float — дробові числа"}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`10.0 / 3      # → 3.3333...
3.14.round     # → 3
3.14.ceil      # → 4
3.14.floor     # → 3
3.14.round(1)  # → 3.1

# Конвертація
"42".to_i      # → 42
"3.14".to_f    # → 3.14
42.to_s        # → "42"`})]})]}),e.jsxs("div",{className:"slide-grid slide-grid--2col mt-xl",children:[e.jsxs("div",{className:"outlined-card outlined-card--purple fade-in-delay-3",children:[e.jsx("h3",{className:"font-heading font-bold text-purple mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Boolean"}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`true.class    # → TrueClass
false.class   # → FalseClass

# Логічні оператори
true && false  # → false
true || false  # → true
!true          # → false

# ⚡ && та || повертають значення, не завжди boolean!
true && "hello"   # → "hello"
nil && "hello"    # → nil
nil || "default"  # → "default"
name = nil
name ||= "Гість"  # → "Гість" (значення за замовчуванням)`})]}),e.jsxs("div",{className:"outlined-card outlined-card--red fade-in-delay-4",children:[e.jsx("h3",{className:"font-heading font-bold text-red mb-sm",style:{margin:"0 0 0.5rem 0"},children:"⚠️ Truthy / Falsy"}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`# В Ruby тільки ДВА falsy значення:
false   # → falsy
nil     # → falsy

# ВСЕ інше — truthy, навіть:
0       # → truthy! (не як JS/Python)
""      # → truthy!
[]      # → truthy!`})]})]})]})})}function sx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content slide__content--narrow",children:[e.jsx(f,{icon:Sl,title:"nil — відсутність значення",subtitle:"nil in Ruby"}),e.jsxs("div",{className:"outlined-card outlined-card--purple mb-xl fade-in-delay-1",children:[e.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[e.jsx(Sl,{className:"icon-md text-purple"}),e.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Що таке nil?"})]}),e.jsxs("p",{className:"text-secondary fs-body",style:{margin:0},children:[e.jsx("code",{className:"font-mono text-purple",children:"nil"})," — це об'єкт класу ",e.jsx("code",{className:"font-mono",children:"NilClass"}),". Означає «нічого», «порожньо», «відсутність значення». Це єдиний екземпляр свого класу."]})]}),e.jsxs("div",{className:"outlined-card outlined-card--blue fade-in-delay-2",children:[e.jsx("h3",{className:"font-heading font-bold text-blue mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Приклади роботи з nil"}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`nil.nil?       # → true
nil.to_s       # → ""  (порожній рядок)
nil.to_i       # → 0
nil.to_a       # → []  (порожній масив)
nil.inspect    # → "nil"

# Перевірка на nil
value = nil
if value.nil?
  puts "Значення відсутнє!"
end

# Safe navigation operator (&.)
name = nil
name&.upcase   # → nil  (замість NoMethodError)

name = "Ruby"
name&.upcase   # → "RUBY" (повертає результат методу)`})]}),e.jsx("div",{className:"outlined-card outlined-card--orange mt-xl fade-in-delay-3",children:e.jsxs("p",{className:"text-center",style:{margin:0},children:[e.jsx("span",{className:"text-orange font-semibold",children:"💡 Запам'ятайте:"})," ",e.jsxs("span",{className:"text-secondary",children:["В Ruby тільки ",e.jsx("code",{className:"font-mono",children:"false"})," та ",e.jsx("code",{className:"font-mono",children:"nil"}),' є falsy. Усе інше (0, "", []) — truthy!']})]})})]})})}function tx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:Of,title:"Змінні в Ruby",subtitle:"Variables"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx(N,{icon:Zn,title:"Локальна змінна",subtitle:"local_variable",description:"Починається з маленької букви або _. Видима лише всередині блоку/методу де оголошена.",tooltip:"Приклад: name = 'Ruby', _count = 0, user_age = 25",color:"blue",delay:1}),e.jsx(N,{icon:it,title:"Глобальна змінна",subtitle:"$global_variable",description:"Починається з $. Доступна звідусіль. Використовувати обережно — це антипатерн!",tooltip:"Приклад: $debug = true, $LOAD_PATH",color:"red",delay:2}),e.jsx(N,{icon:_e,title:"Змінна екземпляра",subtitle:"@instance_variable",description:"Починається з @. Належить конкретному об'єкту (instance). Основа ООП в Ruby.",tooltip:"Приклад: @name = 'Ruby', @age = 30",color:"purple",delay:3}),e.jsx(N,{icon:ce,title:"Змінна класу",subtitle:"@@class_variable",description:"Починається з @@. Спільна для всіх екземплярів класу. Використовується рідко.",tooltip:"Приклад: @@count = 0",color:"orange",delay:4}),e.jsx(N,{icon:li,title:"Константа",subtitle:"CONSTANT",description:"Починається з великої букви. Ruby попередить, але дозволить змінити (лише warning).",tooltip:"Приклад: MAX_SIZE = 100, PI = 3.14159",color:"green",delay:5})]})]})})}function lx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content slide__content--narrow",children:[e.jsx(f,{icon:Jh,title:"Виведення: puts, print, p",subtitle:"Output methods"}),e.jsxs("div",{className:"step-list",children:[e.jsxs("div",{className:"step-list__item step-list__item--blue fade-in-delay-1",children:[e.jsx("div",{className:"step-list__number step-list__number--blue",children:"1"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("h4",{className:"step-list__title",children:"puts — друк з новим рядком"}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:"0.5rem 0 0 0",whiteSpace:"pre-wrap",lineHeight:1.7},children:`puts "Hello"     # Hello\\n
puts "World"     # World\\n
# Результат:
# Hello
# World`})]})]}),e.jsxs("div",{className:"step-list__item step-list__item--green fade-in-delay-2",children:[e.jsx("div",{className:"step-list__number step-list__number--green",children:"2"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("h4",{className:"step-list__title",children:"print — друк без нового рядка"}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:"0.5rem 0 0 0",whiteSpace:"pre-wrap",lineHeight:1.7},children:`print "Hello "   # Hello ← без \\n
print "World"    # World
# Результат: Hello World`})]})]}),e.jsxs("div",{className:"step-list__item step-list__item--purple fade-in-delay-3",children:[e.jsx("div",{className:"step-list__number step-list__number--purple",children:"3"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("h4",{className:"step-list__title",children:"p — debug-друк (inspect)"}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:"0.5rem 0 0 0",whiteSpace:"pre-wrap",lineHeight:1.7},children:`p "Hello"        # "Hello"  ← з лапками
p 42             # 42
p nil            # nil
p [1, 2, 3]     # [1, 2, 3]
# Показує внутрішнє представлення об'єкта`})]})]}),e.jsxs("div",{className:"step-list__item step-list__item--orange fade-in-delay-4",children:[e.jsx("div",{className:"step-list__number step-list__number--orange",children:"4"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("h4",{className:"step-list__title",children:"pp — pretty print"}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:"0.5rem 0 0 0",whiteSpace:"pre-wrap",lineHeight:1.7},children:`pp({ name: "Ruby", version: 3.3, features: ["YJIT", "Ractor"] })
# { name: "Ruby",
#   version: 3.3,
#   features: ["YJIT", "Ractor"] }`})]})]})]})]})})}function nx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content slide__content--narrow",children:[e.jsx(f,{icon:Xp,title:"Інтерполяція рядків",subtitle:"String Interpolation"}),e.jsxs("div",{className:"outlined-card outlined-card--blue mb-xl fade-in-delay-1",children:[e.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[e.jsx(ti,{className:"icon-md text-blue"}),e.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Що це?"})]}),e.jsxs("p",{className:"text-secondary fs-body",style:{margin:0},children:["Вставка значень змінних та виразів прямо всередину рядка за допомогою ",e.jsx("code",{className:"font-mono text-blue",children:"#{...}"}),". Працює ",e.jsx("strong",{children:"тільки"})," в подвійних лапках!"]})]}),e.jsxs("div",{className:"outlined-card outlined-card--green fade-in-delay-2",children:[e.jsx("h3",{className:"font-heading font-bold text-green mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Приклади"}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`name = "Ruby"
version = 3.3

# Змінні
puts "Мова: #{name}"           # → Мова: Ruby

# Вирази
puts "2 + 2 = #{2 + 2}"       # → 2 + 2 = 4

# Виклики методів
puts "#{name.upcase} #{version}"  # → RUBY 3.3

# Багаторядкові (heredoc)
message = <<~TEXT
  Привіт, #{name}!
  Версія: #{version}
  Дата: #{Time.now.strftime('%Y-%m-%d')}
TEXT`})]}),e.jsxs("div",{className:"slide-grid slide-grid--2col mt-xl",children:[e.jsx("div",{className:"outlined-card outlined-card--green fade-in-delay-3",children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-green font-semibold",children:"✅ Правильно"}),e.jsx("br",{}),e.jsx("code",{className:"font-mono fs-body-sm text-secondary",children:'"Hello, #{name}!"'})]})}),e.jsx("div",{className:"outlined-card outlined-card--red fade-in-delay-4",children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-red font-semibold",children:"❌ Не працює"}),e.jsx("br",{}),e.jsx("code",{className:"font-mono fs-body-sm text-secondary",children:"'Hello, #{name}!'"})]})})]})]})})}function ix(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:xs,title:"Умовні конструкції",subtitle:"Conditionals: if / elsif / else"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{className:"outlined-card outlined-card--blue fade-in-delay-1",children:[e.jsx("h3",{className:"font-heading font-bold text-blue mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Базовий if / elsif / else"}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`age = 20

if age < 13
  puts "Дитина"
elsif age < 18
  puts "Підліток"
elsif age < 65
  puts "Дорослий"
else
  puts "Пенсіонер"
end
# → Дорослий`})]}),e.jsxs("div",{className:"outlined-card outlined-card--purple fade-in-delay-2",children:[e.jsx("h3",{className:"font-heading font-bold text-purple mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Однорядковий if (modifier)"}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`# Класичний спосіб
if user.admin?
  grant_access
end

# Ruby-стиль (modifier form)
grant_access if user.admin?

# Ще приклади modifier form
puts "Повнолітній" if age >= 18
log_error(msg) if debug_mode?`})]})]}),e.jsxs("div",{className:"outlined-card outlined-card--green mt-xl fade-in-delay-3",children:[e.jsx("h3",{className:"font-heading font-bold text-green mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Оператори порівняння"}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`==    рівність          5 == 5      → true
!=    нерівність        5 != 3      → true
<     менше             3 < 5       → true
>     більше            5 > 3       → true
<=    менше або дорівнює
>=    більше або дорівнює
<=>   spaceship          5 <=> 3 → 1,  3 <=> 5 → -1,  5 <=> 5 → 0,  "a" <=> 1 → nil`})]})]})})}function rx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content slide__content--narrow",children:[e.jsx(f,{icon:du,title:"unless та тернарний оператор",subtitle:"Alternative conditionals"}),e.jsxs("div",{className:"outlined-card outlined-card--pink mb-xl fade-in-delay-1",children:[e.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[e.jsx(ze,{className:"icon-md text-pink"}),e.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"unless — «якщо НЕ»"})]}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`# unless = if NOT (зворотній if)

unless user.banned?
  allow_access
end

# Або однорядково:
allow_access unless user.banned?
send_email unless email.nil?

# unless зручний, коли умова негативна
# Це читається природніше, ніж:
# if !user.banned?`})]}),e.jsxs("div",{className:"outlined-card outlined-card--cyan mb-xl fade-in-delay-2",children:[e.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[e.jsx(V,{className:"icon-md text-cyan"}),e.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Тернарний оператор"})]}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`# умова ? значення_якщо_true : значення_якщо_false

status = age >= 18 ? "дорослий" : "неповнолітній"
# → "дорослий"

greeting = user ? "Привіт, #{user.name}" : "Гість"

# Використовуйте для простих виборів
# Для складної логіки — if/elsif/else`})]}),e.jsxs("div",{className:"outlined-card outlined-card--orange fade-in-delay-3",children:[e.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[e.jsx(ti,{className:"icon-md text-orange"}),e.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"case / when"})]}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`grade = 85

result = case grade
         when 90..100 then "Відмінно"
         when 75..89  then "Добре"
         when 60..74  then "Задовільно"
         else              "Незадовільно"
         end

puts result  # → "Добре"`})]})]})})}function ax(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content slide__content--narrow",children:[e.jsx(f,{icon:Bs,title:"Практика: «Вгадай число»",subtitle:"Hands-on: Guess the Number game"}),e.jsxs("div",{className:"outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1",children:[e.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[e.jsx(ns,{className:"icon-md text-blue"}),e.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Завдання"})]}),e.jsx("p",{className:"text-secondary fs-body",style:{margin:"0 0 0.5rem 0"},children:"Написати консольну гру, де комп'ютер загадує число від 1 до 100, а гравець намагається вгадати. Програма дає підказки «більше» або «менше» після кожної спроби."})]}),e.jsxs("div",{className:"outlined-card outlined-card--green fade-in-delay-2",children:[e.jsx("h3",{className:"font-heading font-bold text-green mb-sm",style:{margin:"0 0 0.5rem 0"},children:"💎 Рішення"}),e.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`# guess_game.rb — Вгадай число!

secret = rand(1..100)
attempts = 0

puts "🎯 Я загадав число від 1 до 100. Спробуй вгадати!"
puts ""

loop do
  print "Твоя відповідь: "
  guess = gets.chomp.to_i
  attempts += 1

  if guess < secret
    puts "📈 Більше! Спробуй ще раз."
  elsif guess > secret
    puts "📉 Менше! Спробуй ще раз."
  else
    puts ""
    puts "🎉 Вітаю! Ти вгадав число #{secret}!"
    puts "   Кількість спроб: #{attempts}"
    break
  end
end`})]}),e.jsxs("div",{className:"slide-grid slide-grid--3col mt-xl",children:[e.jsxs("div",{className:"outlined-card outlined-card--blue fade-in-delay-3",style:{textAlign:"center"},children:[e.jsx("p",{className:"font-semibold text-blue",style:{margin:0},children:"rand(1..100)"}),e.jsx("p",{className:"text-muted fs-body-sm",style:{margin:"0.25rem 0 0 0"},children:"Генерація числа"})]}),e.jsxs("div",{className:"outlined-card outlined-card--purple fade-in-delay-4",style:{textAlign:"center"},children:[e.jsx("p",{className:"font-semibold text-purple",style:{margin:0},children:"gets.chomp.to_i"}),e.jsx("p",{className:"text-muted fs-body-sm",style:{margin:"0.25rem 0 0 0"},children:"Введення + конвертація"})]}),e.jsxs("div",{className:"outlined-card outlined-card--orange fade-in-delay-5",style:{textAlign:"center"},children:[e.jsx("p",{className:"font-semibold text-orange",style:{margin:0},children:"loop do ... break"}),e.jsx("p",{className:"text-muted fs-body-sm",style:{margin:"0.25rem 0 0 0"},children:"Нескінченний цикл"})]})]})]})})}function cx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:Y,title:"Підсумки",subtitle:"Summary"}),e.jsxs("div",{className:"summary-list",children:[e.jsxs("div",{className:"summary-list__item fade-in-delay-1",children:[e.jsx(Y,{className:"summary-list__icon"}),e.jsxs("p",{className:"summary-list__text",children:[e.jsx("strong",{children:"Ruby"})," — елегантна мова, створена для щастя програмістів (принцип найменшого здивування)"]})]}),e.jsxs("div",{className:"summary-list__item fade-in-delay-2",children:[e.jsx(Y,{className:"summary-list__icon"}),e.jsxs("p",{className:"summary-list__text",children:["Встановлення через ",e.jsx("strong",{children:"rbenv"})," або ",e.jsx("strong",{children:"asdf"}),", перевірка через ",e.jsx("code",{className:"font-mono",children:"ruby --version"})]})]}),e.jsxs("div",{className:"summary-list__item fade-in-delay-3",children:[e.jsx(Y,{className:"summary-list__icon"}),e.jsxs("p",{className:"summary-list__text",children:[e.jsx("strong",{children:"IRB"})," — інтерактивна консоль для швидких експериментів з кодом"]})]}),e.jsxs("div",{className:"summary-list__item fade-in-delay-4",children:[e.jsx(Y,{className:"summary-list__icon"}),e.jsxs("p",{className:"summary-list__text",children:["Базові типи: ",e.jsx("strong",{children:"String, Integer, Float, Boolean, nil"})," — все є об'єктом!"]})]}),e.jsxs("div",{className:"summary-list__item fade-in-delay-5",children:[e.jsx(Y,{className:"summary-list__icon"}),e.jsxs("p",{className:"summary-list__text",children:["Змінні, ",e.jsx("strong",{children:"puts/print/p"}),", інтерполяція рядків через ",e.jsx("code",{className:"font-mono",children:"#{...}"})]})]}),e.jsxs("div",{className:"summary-list__item fade-in-delay-6",children:[e.jsx(Y,{className:"summary-list__icon"}),e.jsxs("p",{className:"summary-list__text",children:["Умовні конструкції: ",e.jsx("strong",{children:"if/elsif/else"}),", ",e.jsx("strong",{children:"unless"}),", тернарний оператор, ",e.jsx("strong",{children:"case/when"})]})]})]}),e.jsx("div",{className:"outlined-card outlined-card--gradient-purple-pink mt-xl fade-in-delay-7",children:e.jsxs("p",{className:"text-center fs-lg",style:{margin:0},children:[e.jsx("span",{className:"text-pink font-semibold",children:"Наступна лекція:"})," ",e.jsx("span",{className:"text-primary font-semibold",children:"Масиви, хеші, цикли та ітератори"})]})})]})})}function ox(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content slide__content--narrow",children:[e.jsx(f,{icon:qp,title:"Джерела",subtitle:"Resources & References"}),e.jsxs("div",{className:"numbered-list",children:[e.jsxs("div",{className:"numbered-list__item fade-in-delay-1",children:[e.jsx("div",{className:"numbered-list__number",children:"1"}),e.jsxs("p",{className:"numbered-list__text",children:[e.jsx("strong",{children:"Ruby офіційний сайт"})," — ",e.jsx("a",{href:"https://www.ruby-lang.org",target:"_blank",rel:"noopener noreferrer",children:"ruby-lang.org"})," — документація, завантаження, новини"]})]}),e.jsxs("div",{className:"numbered-list__item fade-in-delay-2",children:[e.jsx("div",{className:"numbered-list__number",children:"2"}),e.jsxs("p",{className:"numbered-list__text",children:[e.jsx("strong",{children:"Try Ruby"})," — ",e.jsx("a",{href:"https://try.ruby-lang.org",target:"_blank",rel:"noopener noreferrer",children:"try.ruby-lang.org"})," — інтерактивний підручник прямо в браузері"]})]}),e.jsxs("div",{className:"numbered-list__item fade-in-delay-3",children:[e.jsx("div",{className:"numbered-list__number",children:"3"}),e.jsxs("p",{className:"numbered-list__text",children:[e.jsx("strong",{children:"The Well-Grounded Rubyist"})," — David A. Black — найкраща книга для початківців"]})]}),e.jsxs("div",{className:"numbered-list__item fade-in-delay-4",children:[e.jsx("div",{className:"numbered-list__number",children:"4"}),e.jsxs("p",{className:"numbered-list__text",children:[e.jsx("strong",{children:"Ruby Style Guide"})," — ",e.jsx("a",{href:"https://rubystyle.guide",target:"_blank",rel:"noopener noreferrer",children:"rubystyle.guide"})," — конвенції написання коду"]})]}),e.jsxs("div",{className:"numbered-list__item fade-in-delay-5",children:[e.jsx("div",{className:"numbered-list__number",children:"5"}),e.jsxs("p",{className:"numbered-list__text",children:[e.jsx("strong",{children:"RubyDoc"})," — ",e.jsx("a",{href:"https://ruby-doc.org",target:"_blank",rel:"noopener noreferrer",children:"ruby-doc.org"})," — повна документація всіх класів та методів"]})]})]})]})})}function dx(){return e.jsxs("div",{className:"slide slide--centered slide--gradient-purple-pink",children:[e.jsx("div",{className:"questions-slide__emoji",children:"🤔"}),e.jsx("h2",{className:"questions-slide__title",children:"Питання?"}),e.jsx("p",{className:"questions-slide__subtitle",children:"Запитуйте, обговорюємо!"}),e.jsx("div",{className:"questions-slide__next",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Наступна лекція:"})," Масиви, хеші, цикли та ітератори в Ruby"]})})]})}const ux=["puts","print","p","pp","gets","chomp","raise","require","require_relative","push","pop","shift","unshift","delete","exists?","include?","flatten","compact","uniq","map","collect","select","filter","reject","find","find_by","detect","find_all","reduce","inject","each","each_with_index","each_with_object","times","upto","downto","loop","sort","sort_by","reverse","length","size","first","last","count","sum","min","max","minimum","maximum","average","any?","all?","none?","empty?","keys","values","merge","fetch","dig","key?","value?","to_s","to_i","to_f","to_h","to_a","upcase","downcase","capitalize","strip","split","join","gsub","sub","match","freeze","frozen?","nil?","is_a?","respond_to?","even?","odd?","zero?","abs","round","floor","ceil","call","yield","group","limit","order","reorder","where","all","having","joins","includes"],mx=["def","end","do","if","elsif","else","unless","while","until","for","in","return","class","module","self","super","new","true","false","nil","and","or","not","then","begin","rescue","ensure","raise","break","next","redo","retry","lambda"];function px(s){const t=[];let l=0;for(;l<s.length;){if(s[l]==="#"){t.push({type:"comment",text:s.slice(l)});break}const n=s[l]==='"'||s[l]==="'"?s[l]:null;if(n){let r=l+1;for(;r<s.length;){if(s[r]==="\\"){r+=2;continue}if(s[r]===n){r++;break}r++}t.push({type:"string",text:s.slice(l,r)}),l=r;continue}if(s[l]==="{"||s[l]==="}"){t.push({type:"block",text:s[l]}),l++;continue}if(s[l]==="|"){let r=l+1;for(;r<s.length&&s[r]!=="|";)r++;r<s.length&&r++,t.push({type:"block",text:s.slice(l,r)}),l=r;continue}if(/[a-zA-Z_]/.test(s[l])){let r=l;for(;r<s.length&&/[\w?!]/.test(s[r]);)r++;const a=s.slice(l,r);mx.includes(a)?t.push({type:"keyword",text:a}):ux.includes(a)?t.push({type:"method",text:a}):t.push({type:"plain",text:a}),l=r;continue}let i=l+1;for(;i<s.length&&s[i]!=="#"&&s[i]!=='"'&&s[i]!=="'"&&s[i]!=="{"&&s[i]!=="}"&&s[i]!=="|"&&!/[a-zA-Z_]/.test(s[i]);)i++;t.push({type:"plain",text:s.slice(l,i)}),l=i}return t.map((n,i)=>{switch(n.type){case"comment":return e.jsx("span",{className:"code-block__comment",children:n.text},i);case"string":return e.jsx("span",{className:"code-block__string",children:n.text},i);case"keyword":return e.jsx("span",{className:"code-block__keyword",children:n.text},i);case"method":return e.jsx("strong",{style:{fontWeight:700,color:"var(--accent-cyan-text, #22d3ee)"},children:n.text},i);case"block":return e.jsx("strong",{style:{fontWeight:700,color:"var(--accent-orange-text, #fb923c)"},children:n.text},i);default:return e.jsx("span",{children:n.text},i)}})}function d({children:s}){const t=(typeof s=="string"?s:"").split(`
`);return e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:t.map((l,n)=>e.jsxs(Xc.Fragment,{children:[px(l),n<t.length-1&&`
`]},n))})})}function hx(){return e.jsxs("div",{className:"slide slide--centered slide--gradient-blue-purple",children:[e.jsx("div",{className:"title-slide__icon-wrapper",children:e.jsx(_e,{})}),e.jsx("h1",{className:"title-slide__title",children:"Ruby глибше"}),e.jsx("h2",{className:"title-slide__subtitle",children:"Колекції, цикли, методи"}),e.jsx("p",{className:"title-slide__english",children:"Ruby Deep Dive: Collections, Loops & Methods"}),e.jsx("div",{className:"title-slide__badge",children:e.jsx("p",{children:"Лекція 2"})})]})}function fx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ns,title:"Мета заняття",subtitle:"Learning Objectives"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx(N,{icon:rt,title:"Масиви",description:"Навчитися створювати масиви та використовувати потужні методи: push, pop, map, select, reject",color:"blue",delay:1}),e.jsx(N,{icon:ls,title:"Хеші",description:"Зрозуміти хеші та символи (symbols) — основу конфігурацій і структур даних у Ruby та Rails",color:"purple",delay:2}),e.jsx(N,{icon:ze,title:"Ітератори",description:"Освоїти each, map, select, reduce, times — Ruby-спосіб обходу колекцій без традиційних for-циклів",color:"green",delay:3}),e.jsx(N,{icon:gs,title:"Методи",description:"Створювати власні методи з параметрами, значеннями за замовчуванням та блоками",color:"orange",delay:4})]})]})})}function xx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:rt,title:"Масиви (Arrays)",subtitle:"Ordered collections"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary mb-base",style:{marginBottom:"1rem"},children:["Масив — впорядкований список будь-яких об'єктів. Індекс починається з ",e.jsx("span",{className:"text-blue font-semibold",children:"0"}),"."]}),e.jsx(d,{children:`# Список симптомів тварини — масив рядків
symptoms = ["кашель", "підвищена температура", "відмова від їжі"]

# Доступ за індексом
symptoms[0]   # => "кашель"
symptoms[-1]  # => "відмова від їжі" (з кінця!)
symptoms[0..1] # => ["кашель", "підвищена температура"]

# Корисні методи
symptoms.length           # => 3
symptoms.first            # => "кашель"
symptoms.last             # => "відмова від їжі"
symptoms.include?("кашель") # => true`})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-base",style:{marginBottom:"1rem"},children:"Модифікація масивів:"}),e.jsx(d,{children:`symptoms = ["кашель", "температура"]

# Додавання нових симптомів
symptoms.push("блювота")     # в кінець
symptoms << "слабкість"      # теж в кінець (скорочення!)
symptoms.unshift("біль")     # на початок

# Видалення
symptoms.pop              # => "слабкість"
symptoms.shift            # => "біль"
symptoms.delete("кашель") # за значенням

# Сортування симптомів за алфавітом
symptoms.sort
symptoms.reverse`}),e.jsx("div",{className:"outlined-card outlined-card--blue mt-xl fade-in-delay-3",style:{marginTop:"1.5rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-blue font-semibold",children:"💡 Tip:"})," ",e.jsxs("span",{className:"text-secondary",children:["Метод ",e.jsx("code",{children:"<<"})," — найпопулярніший спосіб додати елемент у Ruby. Ви побачите його скрізь!"]})]})})]})]})]})})}function gx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:V,title:"Магічні методи масивів",subtitle:"Functional Array Methods"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx("div",{children:e.jsx(d,{children:`animals = [
  { name: "Амур", species: "кіт",    weight: 4.2, vaccinated: true  },
  { name: "Рекс",   species: "собака", weight: 28.0, vaccinated: false },
  { name: "Кеша",   species: "папуга", weight: 0.4, vaccinated: true  },
  { name: "Мурчик",  species: "кіт",    weight: 3.8, vaccinated: false },
]

# map — список імен тварин
animals.map { |a| a[:name] }
# => ["Амур", "Рекс", "Кеша", "Мурчик"]

# select — тільки не вакциновані
animals.select { |a| !a[:vaccinated] }
# => [{ name: "Рекс", ... }, { name: "Мурчик", ... }]

# reject — прибрати папуг
animals.reject { |a| a[:species] == "папуга" }

# reduce — загальна вага всіх тварин
animals.reduce(0) { |sum, a| sum + a[:weight] }
# => 36.4

# Ланцюжки — імена котів відсортовані
animals
  .select { |a| a[:species] == "кіт" }
  .map    { |a| a[:name] }
  .sort
# => ["Амур", "Мурчик"]`})}),e.jsxs("div",{children:[e.jsxs("div",{className:"numbered-list",children:[e.jsxs("div",{className:"numbered-list__item",children:[e.jsx("div",{className:"numbered-list__number",children:"1"}),e.jsxs("p",{className:"numbered-list__text",children:[e.jsx("strong",{className:"text-blue",children:"map"})," — трансформує. Повертає новий масив тієї ж довжини."]})]}),e.jsxs("div",{className:"numbered-list__item",children:[e.jsx("div",{className:"numbered-list__number",children:"2"}),e.jsxs("p",{className:"numbered-list__text",children:[e.jsx("strong",{className:"text-green",children:"select"})," — фільтрує. Залишає лише елементи, де блок повертає ",e.jsx("code",{children:"true"}),"."]})]}),e.jsxs("div",{className:"numbered-list__item",children:[e.jsx("div",{className:"numbered-list__number",children:"3"}),e.jsxs("p",{className:"numbered-list__text",children:[e.jsx("strong",{className:"text-orange",children:"reject"})," — протилежність select. Відкидає елементи з ",e.jsx("code",{children:"true"}),"."]})]}),e.jsxs("div",{className:"numbered-list__item",children:[e.jsx("div",{className:"numbered-list__number",children:"4"}),e.jsxs("p",{className:"numbered-list__text",children:[e.jsx("strong",{className:"text-purple",children:"reduce"})," — акумулює. Перетворює колекцію на одне значення (суму, рядок тощо)."]})]})]}),e.jsxs("div",{className:"outlined-card outlined-card--purple fade-in-delay-4",style:{marginTop:"1.25rem"},children:[e.jsx("p",{style:{margin:"0 0 0.6rem 0"},className:"font-semibold text-purple",children:"🔀 Аліаси — те саме, інша назва:"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"1rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem"},children:"Основний"}),e.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem"},children:"Аліас"}),e.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem"},children:"Примітка"})]})}),e.jsx("tbody",{children:[{main:"map",alias:"collect",note:"однакові повністю"},{main:"select",alias:"filter",note:"filter з Ruby 2.5+"},{main:"reduce",alias:"inject",note:"однакові повністю"},{main:"find",alias:"detect",note:"повертає перший збіг"},{main:"find_all",alias:"select",note:"ще один аліас select"}].map(({main:s,alias:t,note:l})=>e.jsxs("tr",{style:{borderTop:"1px solid var(--border-subtle)"},children:[e.jsx("td",{style:{padding:"0.3rem 0.5rem 0.3rem 0"},children:e.jsx("code",{className:"text-blue",children:s})}),e.jsx("td",{style:{padding:"0.3rem 0.5rem"},children:e.jsx("code",{className:"text-purple",children:t})}),e.jsx("td",{style:{padding:"0.3rem 0",color:"var(--text-muted)",fontSize:"1.1rem"},children:l})]},s))})]})]})]})]})]})})}function jx(){return e.jsx("div",{className:"slide slide--compact",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ls,title:"Хеші (Hashes)",subtitle:"Key-Value pairs"}),e.jsx(N,{icon:ls,title:"Символи vs Рядки (Symbol vs String)",description:":name — це Symbol, не String. Незмінний, зберігається в пам'яті один раз. Саме тому символи є стандартом для ключів хешу: { name: 'Амур' } — це сучасний запис { :name => 'Амур' }.",color:"purple",delay:1}),e.jsxs("div",{className:"slide-grid slide-grid--3col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",style:{fontSize:"0.8rem",fontStyle:"italic",marginBottom:"0.5rem"},children:"📝 Картка тварини — хеш"}),e.jsx(d,{children:`# Кожна тварина — хеш
patient = {
  name:       "Амур",
  species:    "кіт",
  birth_date: "2019-03-15",
  weight:     4.2,
  symptoms:   ["кашель", "апатія"],
  last_visit: "2024-11-01",
  vaccinated: false
}

# Доступ до полів
patient[:name]       # => "Амур"
patient[:symptoms]   # => ["кашель", "апатія"]
patient[:vaccinated] # => false

# Зміна та додавання
patient[:weight] = 4.5
patient[:last_visit] = "2025-01-10"

# Перевірки
patient.key?(:name)   # => true
patient.keys          # => [:name, :species, ...]`})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",style:{fontSize:"0.8rem",fontStyle:"italic",marginBottom:"0.5rem"},children:"🗂️ База тварин — хеш хешів"}),e.jsx(d,{children:`# ID як ключ — швидкий доступ за номером
animals = {
  1 => {
    name:      "Амур",
    species:   "кіт",
    vaccinated: true
  },
  2 => {
    name:      "Рекс",
    species:   "собака",
    vaccinated: false
  }
}

# Доступ за ID
animals[1][:name]      # => "Амур"
animals[2][:vaccinated] # => false

# dig — безпечний вкладений доступ
animals.dig(1, :name)  # => "Амур"
animals.dig(99, :name) # => nil (не падає!)

# Кількість тварин
animals.keys.length    # => 2`})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",style:{fontSize:"0.8rem",fontStyle:"italic",marginBottom:"0.5rem"},children:"⚡ Корисні методи"}),e.jsx(d,{children:`animals = { 1 => { name: "Амур", ... }, ... }

# Ітерація всіх тварин
animals.each do |id, patient|
  puts "#{id}. #{patient[:name]}"
end

# Знайти всіх котів
animals.select { |_, p|
  p[:species] == "кіт"
}

# Трансформація — тільки імена
animals.map { |id, p|
  [id, p[:name]]
}.to_h
# => { 1 => "Амур", 2 => "Рекс" }

# Злиття нових даних тварини
animals[1].merge!({
  weight: 4.5,
  last_visit: "2025-01-10"
})

# Безпечне отримання з default
animals.fetch(99, "не знайдено")`})]})]})]})})}function _x(){return e.jsx("div",{className:"slide slide--compact",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ze,title:"Ітератори та Enumerable",subtitle:"Ruby way of looping"}),e.jsxs("div",{className:"slide-grid slide-grid--3col",style:{marginBottom:"1.25rem"},children:[e.jsx(N,{icon:rt,title:"Array",description:"Підключає Enumerable. Дає map, select, reject, reduce, find, each_with_index і ще 50+ методів.",color:"blue",delay:1}),e.jsx(N,{icon:ls,title:"Hash",description:"Теж включає Enumerable. Ітерує парами [key, value] — тому map на хеші повертає масив пар.",color:"purple",delay:2}),e.jsx(N,{icon:ze,title:"Range",description:"(1..10) також Enumerable. Тому (1..5).map, (1..100).select, (1..10).reduce працюють одразу.",color:"green",delay:3})]}),e.jsx("div",{className:"outlined-card outlined-card--gradient-blue-purple fade-in-delay-3",style:{marginBottom:"1.25rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-blue font-semibold",children:"📦 Модуль Enumerable:"})," ",e.jsxs("span",{className:"text-secondary",children:["Це mixin, який Ruby підключає до будь-якої колекції що реалізує метод ",e.jsx("code",{children:"each"}),". Саме він дає всім колекціям єдиний набір ітераторів — ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"select"}),", ",e.jsx("code",{children:"reduce"})," і ще десятки методів. У Лекції 3 ми побачимо як підключити його до власного класу."]})]})}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"⚡ Enumerable у вет.клініці"}),e.jsx(d,{children:`animals = { 1 => { name: "Амур", species: "кіт",
                        weight: 4.2, vaccinated: true },
            2 => { name: "Рекс", species: "собака",
                        weight: 28.0, vaccinated: false } }

# Hash#each — вивід всіх тварин
animals.each do |id, patient|
  puts "#{id}. #{patient[:name]} (#{patient[:species]})"
end

# Hash#select — не вакциновані
animals.select { |_, p| !p[:vaccinated] }

# Array#each_with_index — нумерований список
list = ["Амур", "Рекс", "Кеша"]
list.each_with_index do |name, i|
  puts "#{i + 1}. #{name}"
end

# Range — вік тварини в роках
born_year = 2019
(born_year..Date.today.year).count - 1  # => 6`})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"🔁 Цикли (коли Enumerable не підходить)"}),e.jsx(d,{children:`# times — повторити N разів
5.times { |i| puts "Спроба #{i + 1}" }

# upto / downto (на Integer)
1.upto(5)   { |i| print "#{i} " }
5.downto(1) { |i| print "#{i} " }

# while — головне меню клініки
loop do
  puts "1. Додати тварину"
  puts "2. Пошук"
  puts "0. Вийти"
  choice = gets.chomp
  break if choice == "0"
  # обробка вибору...
end`}),e.jsx("div",{className:"outlined-card outlined-card--green",style:{marginTop:"1rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-green font-semibold",children:"✅ Правило:"})," ",e.jsxs("span",{className:"text-secondary",children:["Є колекція → використовуй ",e.jsx("code",{children:"Enumerable"})," (",e.jsx("code",{children:"each"}),", ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"select"}),"). Потрібно повторити N разів → ",e.jsx("code",{children:"times"}),". Умовний цикл → ",e.jsx("code",{children:"while/loop"}),"."]})]})})]})]})]})})}function yx(){return e.jsx("div",{className:"slide slide--compact",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:He,title:"Блоки (Blocks)",subtitle:"Anonymous code chunks"}),e.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-1",style:{marginBottom:"1.25rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-blue font-semibold",children:"📌 Що таке блок:"})," ",e.jsx("span",{className:"text-secondary",children:"Блок — це анонімний шматок коду, який передається в метод як аргумент і виконується всередині нього. Блок не є об'єктом і не може бути збережений у змінну — для цього є Proc і Lambda (наступний слайд)."})]})}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"📝 Два синтаксиси блоків"}),e.jsx(d,{children:`# do...end — для багаторядкового блоку
animals.each do |id, patient|
  age = calculate_age(patient[:birth_date])
  puts "#{id}. #{patient[:name]}, #{age} р."
end

# {} — для однорядкового блоку
animals.each { |id, p| puts "#{id}. #{p[:name]}" }

# |key, value| — два параметри для хешу
# |item| — один параметр для масиву

# Блок може мати кілька параметрів
animals.each_with_object([]) do |(id, p), arr|
  arr << p[:name] if p[:vaccinated]
end
# => ["Амур", "Кеша"] — тільки вакциновані`})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"🔧 Власні методи з блоком — yield"}),e.jsx(d,{children:`# yield — викликає переданий блок
def filter_animals(animals)
  animals.select do |_, patient|
    yield(patient)  # передає тварину в блок
  end
end

# Один метод — різна логіка через блок
filter_animals(animals) { |p| p[:vaccinated] }
filter_animals(animals) { |p| p[:weight] > 10 }
filter_animals(animals) { |p| p[:species] == "кіт" }

# block_given? — блок необов'язковий
def list_animals(animals)
  animals.each do |id, patient|
    if block_given?
      puts yield(id, patient)
    else
      puts "#{id}. #{patient[:name]}"
    end
  end
end

list_animals(animals)
# 1. Барс

list_animals(animals) { |id, p| "#{id}. #{p[:name]} (#{p[:species]})" }
# 1. Барс (кіт)`}),e.jsxs("div",{className:"outlined-card outlined-card--purple",style:{marginTop:"1rem"},children:[e.jsxs("p",{style:{margin:"0 0 0.5rem 0"},className:"font-semibold text-purple",children:["📎 Іменований блок — ",e.jsx("code",{children:"&block"})]}),e.jsxs("p",{className:"text-secondary",style:{margin:"0 0 0.75rem 0",fontSize:"0.9rem"},children:["Якщо потрібно зберегти блок або передати його далі — використовують ",e.jsx("code",{children:"&block"})," в параметрах. Блок стає об'єктом Proc і викликається через ",e.jsx("code",{children:".call"})," замість ",e.jsx("code",{children:"yield"}),":"]}),e.jsx(d,{children:`# &block — блок як об'єкт, можна передати далі
def list_and_log(animals, &block)
  puts "Виводимо список..."
  list_animals(animals, &block)  # передаємо блок далі
end

# Або зберегти для пізнішого виклику
def set_formatter(animals, &block)
  @formatter = block             # зберегли як Proc
  animals.each do |id, p|
    puts @formatter.call(id, p) # викликаємо через .call
  end
end

# Без &block — якщо блок потрібен тільки тут
# yield достатньо і працює швидше`})]})]})]})]})})}function vx(){return e.jsx("div",{className:"slide slide--compact",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:V,title:"Proc і Lambda",subtitle:"Saved blocks & differences"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",style:{marginBottom:"1.25rem"},children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"📦 Proc — збережений блок"}),e.jsx(d,{children:`# Proc — збережений блок, можна перевикористати
is_vaccinated = Proc.new { |_, p| p[:vaccinated] }
is_cat        = Proc.new { |_, p| p[:species] == "кіт" }

# Передаємо в select через &
animals.select(&is_vaccinated)
animals.select(&is_cat)

# Proc м'який — зайві аргументи ігнорує
log = Proc.new { |msg, level| puts "[#{level}] #{msg}" }
log.call("Тварину додано", "INFO")  # => [INFO] Тварину додано
log.call("Помилка")                  # => [] Помилка (level = nil)`})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"⚡ Lambda — строгіший Proc"}),e.jsx(d,{children:`# Lambda для перевірки прострочення вакцинації
overdue = ->(animal) {
  return false if animal[:vaccinated]
  last = animal[:last_visit]
  return true if last.nil?
  (Date.today - Date.parse(last)).to_i > 365
}

overdue.call(animals[1])  # => true або false

# Lambda сувора — перевіряє аргументи
overdue.call()            # ArgumentError!
overdue.call(animals[1], "extra")  # ArgumentError!

# Кілька lambda — різні критерії фільтрації
filters = {
  unvaccinated: ->(p) { !p[:vaccinated] },
  overweight:   ->(p) { p[:weight] > 20 },
  new_patient:  ->(p) { p[:last_visit].nil? }
}

# Застосовуємо потрібний фільтр
animals.select { |_, p| filters[:unvaccinated].call(p) }`})]})]}),e.jsxs("div",{className:"outlined-card outlined-card--green fade-in-delay-3",style:{marginBottom:"1rem"},children:[e.jsxs("p",{style:{margin:"0 0 0.5rem 0"},className:"font-semibold text-green",children:["🔀 Symbol to Proc — ",e.jsx("code",{children:"&:method_name"})]}),e.jsxs("p",{className:"text-secondary",style:{margin:"0 0 0.75rem 0"},children:["Коли пишемо ",e.jsx("code",{children:"&:upcase"})," — Ruby перетворює символ ",e.jsx("code",{children:":upcase"})," на Proc через метод ",e.jsx("code",{children:"to_proc"}),". Тобто ",e.jsx("code",{children:"&:upcase"})," — це скорочення для ",e.jsxs("code",{children:["Proc.new ","{ |x| x.upcase }"]}),". Працює лише з методами без аргументів."]}),e.jsx(d,{children:`# Отримати імена всіх тварин
animals.values.map { |p| p[:name] }
animals.values.map(&:to_s)  # якщо метод без аргументів

# Перетворення ключів після JSON (рядки → символи)
data = { "name" => "Амур", "species" => "кіт" }
data.transform_keys(&:to_sym)
# => { name: "Амур", species: "кіт" }

# Фільтрація з predicate-методами
[1, -2, 3, -4].select(&:positive?)  # => [1, 3]
["Амур", "", "Рекс"].reject(&:empty?)  # => ["Амур", "Рекс"]`})]}),e.jsxs("div",{className:"outlined-card outlined-card--purple fade-in-delay-4",children:[e.jsx("p",{style:{margin:"0 0 0.6rem 0"},className:"font-semibold text-purple",children:"⚖️ Proc vs Lambda — ключові відмінності:"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"1rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem",width:"30%"},children:"Поведінка"}),e.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem"},children:"Proc"}),e.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem"},children:"Lambda"})]})}),e.jsx("tbody",{children:[{aspect:"Аргументи",proc:"ігнорує зайві / nil для відсутніх",lambda:"суворо перевіряє кількість"},{aspect:"return",proc:"повертає з методу що викликав",lambda:"повертає тільки з себе"},{aspect:"Синтаксис",proc:"Proc.new { }",lambda:"lambda { } або ->( ) { }"},{aspect:"Використання",proc:"гнучкі фільтри, callbacks",lambda:"валідація, строгі перевірки"}].map(({aspect:s,proc:t,lambda:l})=>e.jsxs("tr",{style:{borderTop:"1px solid var(--border-subtle)"},children:[e.jsx("td",{style:{padding:"0.3rem 0.5rem 0.3rem 0",color:"var(--text-primary)",fontWeight:600},children:s}),e.jsx("td",{style:{padding:"0.3rem 0.5rem",color:"var(--text-secondary)"},children:t}),e.jsx("td",{style:{padding:"0.3rem 0",color:"var(--text-secondary)"},children:l})]},s))})]})]})]})})}function Nx(){return e.jsx("div",{className:"slide slide--compact",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:_e,title:"Деструктуризація",subtitle:"Destructuring assignment"}),e.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-1",style:{marginBottom:"1.25rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-blue font-semibold",children:"📌 Що це таке:"})," ",e.jsx("span",{className:"text-secondary",children:"Деструктуризація — це спосіб розпакувати масив одразу в кілька змінних за одне присвоєння. Ruby дозволяє це робити як у звичайному коді, так і в параметрах блоків та методів."})]})}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"📝 Базова розпаковка"}),e.jsx(d,{children:`# Паралельне присвоєння
name, species, weight = ["Амур", "кіт", 4.2]
name    # => "Амур"
species # => "кіт"
weight  # => 4.2

# Splat * — зібрати решту в масив
first, *rest = [1, 2, 3, 4, 5]
first  # => 1
rest   # => [2, 3, 4, 5]

*head, last = [1, 2, 3, 4, 5]
head  # => [1, 2, 3, 4]
last  # => 5

# Ігнорування елементів через _
_, species, weight = ["Амур", "кіт", 4.2]
species  # => "кіт"
weight   # => 4.2

# Вкладена розпаковка
id, (name, species) = [1, ["Амур", "кіт"]]
id      # => 1
name    # => "Амур"
species # => "кіт"`})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"🔧 Де це зустрічається в Ruby та Rails"}),e.jsx(d,{children:`# В блоках — розпаковка пари хешу
animals.each do |(id, patient)|
  puts "#{id}. #{patient[:name]}"
end

# each_with_object — пара + акумулятор
animals.each_with_object([]) do |(id, p), arr|
  arr << p[:name] if p[:vaccinated]
end

# Розпаковка результату методу
def patient_info(patient)
  [patient[:name], patient[:species]]
end

name, species = patient_info(animals[1])

# В Rails — розпаковка params
first_name, last_name = params[:full_name].split(" ")

# ActiveRecord — групування
User.group(:role).count.each do |(role, count)|
  puts "#{role}: #{count} користувачів"
end`}),e.jsx("div",{className:"outlined-card outlined-card--green",style:{marginTop:"1rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-green font-semibold",children:"💡 Зв'язок з блоками:"})," ",e.jsxs("span",{className:"text-secondary",children:["Дужки в параметрах блоку ",e.jsx("code",{children:"|(id, p)|"})," — це та сама деструктуризація. Ruby бачить що елемент хешу є парою ",e.jsx("code",{children:"[key, value]"})," і розпаковує її в дві змінні автоматично."]})]})})]})]})]})})}function bx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:gs,title:"Методи (Methods)",subtitle:"def keyword & parameters"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx("div",{children:e.jsx(d,{children:`# Базовий метод — додати тварину
def add_animal(animals, name, species, weight)
  id = animals.keys.max.to_i + 1
  animals[id] = {
    name:       name,
    species:    species,
    weight:     weight,
    vaccinated: false,
    last_visit: nil
  }
  animals
end

animals = {}
add_animal(animals, "Амур", "кіт", 4.2)

# Значення за замовчуванням
def list_animals(animals, limit = 10, sort_by = :name)
  animals
    .values
    .sort_by { |a| a[sort_by] }
    .first(limit)
end

list_animals(animals)           # перші 10 за іменем
list_animals(animals, 5, :weight) # перші 5 за вагою

# Іменовані аргументи (keyword args)
def find_animals(animals, species:, vaccinated: nil)
  animals.select do |_, a|
    a[:species] == species &&
    (vaccinated.nil? || a[:vaccinated] == vaccinated)
  end
end

find_animals(animals, species: "кіт")
find_animals(animals, species: "кіт", vaccinated: false)`})}),e.jsxs("div",{children:[e.jsx(d,{children:`# Неявний return — останній вираз
def overdue_vaccination?(animal)
  return false if animal[:vaccinated]
  last = animal[:last_visit]
  return true if last.nil?
  (Date.today - Date.parse(last)).to_i > 365
end

# Методи-предикати (?)
overdue_vaccination?(animals[1])  # => true/false

# Методи-модифікатори (!)
def edit_animal!(animals, id, new_data)
  if animals[id]
    animals[id].merge!(new_data)  # ! змінює на місці
  else
    puts "Тварини з ID #{id} не знайдено"
  end
  animals
end

edit_animal!(animals, 1, { weight: 4.5, vaccinated: true })

# Splat * — довільна кількість симптомів
def add_symptoms(animal, *symptoms)
  animal[:symptoms] ||= []
  animal[:symptoms].concat(symptoms)
end

add_symptoms(animals[1], "кашель", "апатія", "відмова від їжі")`}),e.jsx("div",{className:"outlined-card outlined-card--orange fade-in-delay-3",style:{marginTop:"1rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-orange font-semibold",children:"📌 Конвенція Ruby:"})," ",e.jsxs("span",{className:"text-secondary",children:[e.jsx("code",{children:"?"})," — повертає boolean. ",e.jsx("code",{children:"!"})," — змінює об'єкт на місці або викидає виняток замість повернення nil."]})]})})]})]})]})})}function kx(){const[s,t]=$.useState("arrays"),l=[{id:"arrays",label:"Масиви",icon:rt},{id:"hashes",label:"Хеші",icon:ls},{id:"methods",label:"Методи",icon:gs}],i={arrays:{title:"Масиви в дії",code:`# Ланцюжок методів — Ruby-стиль
students = [
  { name: "Alice", grade: 92 },
  { name: "Bob",   grade: 78 },
  { name: "Carol", grade: 88 },
  { name: "Dave",  grade: 65 },
]

# Знайти відмінників (grade >= 85)
top_students = students
  .select { |s| s[:grade] >= 85 }
  .map    { |s| s[:name] }
  .sort

puts top_students
# => ["Alice", "Carol"]

# Середній бал
avg = students
  .map    { |s| s[:grade] }
  .reduce(:+) / students.length.to_f

puts "Середній бал: #{avg.round(1)}"
# => Середній бал: 80.8`,output:`["Alice", "Carol"]
Середній бал: 80.8`},hashes:{title:"Хеші в дії",code:`# Конфігурація додатку (типовий Rails-патерн)
config = {
  database: {
    host: "localhost",
    port: 5432,
    name: "myapp_development"
  },
  cache: {
    ttl: 3600,
    driver: :redis
  }
}

# Читання вкладених значень
puts config[:database][:host]   # => "localhost"
puts config[:cache][:driver]    # => redis

# Додавання нових значень
config[:app] = { version: "1.0.0", env: :development }

# Ітерація
config.each do |section, settings|
  puts "\\n[#{section}]"
  settings.each { |k, v| puts "  #{k} = #{v}" }
end`,output:`localhost
redis

[database]
  host = localhost
  port = 5432
  name = myapp_development

[cache]
  ttl = 3600
  driver = redis

[app]
  version = 1.0.0
  env = development`},methods:{title:"Методи в дії",code:`# Утилітні методи для роботи з рядками
def titleize(str)
  str.split.map(&:capitalize).join(" ")
end

def truncate(str, max: 30, suffix: "...")
  return str if str.length <= max
  str[0, max - suffix.length] + suffix
end

def word_count(text)
  text.split.length
end

# Використання
title = "ruby on rails курс для початківців"
puts titleize(title)
# => "Ruby On Rails Курс Для Початківців"

long_text = "Це дуже довгий рядок, який потрібно вкоротити"
puts truncate(long_text, max: 25)
# => "Це дуже довгий рядок, ..."

puts word_count("Ruby is beautiful language")
# => 4`,output:`Ruby On Rails Курс Для Початківців
Це дуже довгий рядок, ...
4`}}[s];return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:wa,title:"Приклади коду",subtitle:"Interactive Code Examples"}),e.jsx("div",{style:{display:"flex",gap:"0.75rem",marginBottom:"1.5rem"},children:l.map(({id:r,label:a,icon:c})=>e.jsxs("button",{onClick:()=>t(r),className:`header__toggle ${s===r?"header__toggle--active":"header__toggle--inactive"}`,style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[e.jsx(c,{style:{width:"1rem",height:"1rem"}}),a]},r))}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",style:{fontSize:"0.8rem",marginBottom:"0.5rem",fontStyle:"italic"},children:i.title}),e.jsx(d,{children:i.code})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",style:{fontSize:"0.8rem",marginBottom:"0.5rem",fontStyle:"italic"},children:"Результат виконання:"}),e.jsx("pre",{className:"code-block",style:{color:"var(--accent-green-text, #4ade80)"},children:i.output}),e.jsx("div",{className:"outlined-card outlined-card--blue",style:{marginTop:"1.5rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-blue font-semibold",children:"💻 Спробуй сам:"})," ",e.jsx("span",{className:"text-secondary",children:"Відкрий IRB або repl.it і запусти ці приклади. Модифікуй їх — що станеться, якщо змінити умову фільтрації?"})]})})]})]})]})})}function wx(){return e.jsx("div",{className:"slide slide--compact",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:gs,title:"Збереження у JSON",subtitle:"Serialization & key nuances"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"💾 Збереження та завантаження"}),e.jsx(d,{children:`require 'json'

def save_to_json(animals, filename)
  File.write(filename, JSON.pretty_generate(animals))
  puts "Збережено у #{filename}"
rescue => e
  puts "Помилка збереження: #{e.message}"
end

def load_from_json(filename)
  data = JSON.parse(File.read(filename))
  # Відновлення типів ключів після JSON
  data.transform_keys(&:to_i)
      .transform_values { |v| v.transform_keys(&:to_sym) }
rescue Errno::ENOENT
  puts "Файл #{filename} не знайдено"
  {}
end

# Використання
save_to_json(animals, "clinic.json")
loaded = load_from_json("clinic.json")`})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"⚠️ Нюанс: що JSON робить з ключами"}),e.jsx(d,{children:`# Вихідний хеш Ruby — символьні ключі
animal = { name: "Амур", species: "кіт" }
# { :name => "Амур", :species => "кіт" }

# Після збереження у JSON-файл:
# {
#   "name": "Амур",
#   "species": "кіт"
# }
# ↑ JSON не підтримує символи!
#   Всі ключі стають РЯДКАМИ

# Після JSON.parse — ключі-рядки:
loaded = JSON.parse('{"name":"Амур"}')
loaded["name"]   # => "Амур"  ✓
loaded[:name]    # => nil        ✗ символ не працює!

# Тому потрібно transform_keys(&:to_sym)
loaded.transform_keys(&:to_sym)
loaded[:name]    # => "Амур"  ✓`}),e.jsx("div",{className:"outlined-card outlined-card--orange",style:{marginTop:"1rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-orange font-semibold",children:"⚠️ Запам'ятай:"})," ",e.jsxs("span",{className:"text-secondary",children:["JSON — це текстовий формат для обміну даними між різними мовами. Він не знає про Ruby-символи, тому завжди конвертує ключі в рядки. Після ",e.jsx("code",{children:"JSON.parse"})," — завжди виконуй ",e.jsx("code",{children:"transform_keys(&:to_sym)"}),"."]})]})})]})]})]})})}function Sx(){return e.jsx("div",{className:"slide slide--compact",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:He,title:"Збереження у YAML",subtitle:"Ruby-native serialization"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"💾 Збереження та завантаження"}),e.jsx(d,{children:`require 'yaml'

def save_to_yaml(animals, filename)
  File.write(filename, animals.to_yaml)
  puts "Збережено у #{filename}"
rescue => e
  puts "Помилка збереження: #{e.message}"
end

def load_from_yaml(filename)
  YAML.load_file(filename)
rescue Errno::ENOENT
  puts "Файл #{filename} не знайдено"
  {}
end

# Використання — жодних перетворень ключів!
save_to_yaml(animals, "clinic.yml")
loaded = load_from_yaml("clinic.yml")
loaded[1][:name]  # => "Амур" ✓ одразу символи`}),e.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",marginTop:"1rem",fontSize:"0.8rem",fontStyle:"italic"},children:"📄 Як виглядає YAML-файл:"}),e.jsx(d,{children:`---
1:
  :name: Амур
  :species: кіт
  :weight: 4.2
  :vaccinated: true
  :symptoms:
  - кашель
  - апатія
2:
  :name: Рекс
  :species: собака
  :weight: 28.0
  :vaccinated: false`})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"outlined-card outlined-card--green",style:{marginBottom:"1rem"},children:[e.jsx("p",{style:{margin:"0 0 0.5rem 0"},className:"font-semibold text-green",children:"✅ Чому YAML — природний формат для Ruby"}),e.jsxs("p",{className:"text-secondary",style:{margin:0},children:["YAML розроблявся з урахуванням Ruby. Він зберігає ",e.jsx("strong",{children:"символи"})," як ",e.jsx("code",{children:":name"}),", розуміє Ruby-типи (",e.jsx("code",{children:"true"}),"/",e.jsx("code",{children:"false"}),"/",e.jsx("code",{children:"nil"}),"), масиви та вкладені хеші. Після ",e.jsx("code",{children:"YAML.load_file"})," отримуєте точно той самий Ruby-об'єкт — без жодних перетворень."]})]}),e.jsxs("div",{className:"outlined-card outlined-card--purple",style:{marginBottom:"1rem"},children:[e.jsx("p",{style:{margin:"0 0 0.6rem 0"},className:"font-semibold text-purple",children:"⚖️ JSON vs YAML — коли що використовувати:"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"1rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem"}}),e.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem"},children:"JSON"}),e.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem"},children:"YAML"})]})}),e.jsx("tbody",{children:[{aspect:"Ключі",json:"завжди рядки",yaml:"символи збережені"},{aspect:"Читабельність",json:"добра",yaml:"відмінна"},{aspect:"Інші мови",json:"✓ універсальний",yaml:"обмежено"},{aspect:"Rails config",json:"рідко",yaml:"стандарт (database.yml)"},{aspect:"API відповідь",json:"✓ завжди",yaml:"✗ не підходить"}].map(({aspect:s,json:t,yaml:l})=>e.jsxs("tr",{style:{borderTop:"1px solid var(--border-subtle)"},children:[e.jsx("td",{style:{padding:"0.3rem 0.5rem 0.3rem 0",fontWeight:600,color:"var(--text-primary)"},children:s}),e.jsx("td",{style:{padding:"0.3rem 0.5rem",color:"var(--text-secondary)"},children:t}),e.jsx("td",{style:{padding:"0.3rem 0",color:"var(--text-secondary)"},children:l})]},s))})]})]}),e.jsx("div",{className:"outlined-card outlined-card--blue",children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-blue font-semibold",children:"🚀 Rails:"})," ",e.jsxs("span",{className:"text-secondary",children:["У Rails YAML використовується скрізь — ",e.jsx("code",{children:"database.yml"}),", ",e.jsx("code",{children:"config/locales/*.yml"}),", ",e.jsx("code",{children:"credentials.yml.enc"}),". JSON — для API-відповідей і передачі даних між сервісами."]})]})})]})]})]})})}function Rx(){return e.jsx("div",{className:"slide slide--compact",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:st,title:"Практика: Вет. клініка",subtitle:"Veterinary Clinic CLI App"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:"Консольна система обліку тварин."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.6rem",marginBottom:"1rem"},children:[{icon:rt,title:"list_animals",desc:"Відобразити всіх — each з форматуванням",color:"purple"},{icon:rh,title:"add_animal",desc:"Додати тварину — хеш з усіма полями, auto-ID",color:"green"},{icon:zl,title:"find_by_name / filter_by_species",desc:"Пошук через select із блоком",color:"blue"},{icon:gs,title:"edit_animal",desc:"Оновити дані — merge! з новими полями",color:"orange"},{icon:Cf,title:"delete_animal",desc:"Видалити тварину за ID з перевіркою",color:"red"},{icon:V,title:"overdue_vaccination?",desc:"Lambda-перевірка прострочення вакцинації",color:"yellow"},{icon:He,title:"save / load",desc:"JSON + YAML збереження з обробкою помилок",color:"cyan"}].map(({icon:s,title:t,desc:l,color:n},i)=>e.jsxs("div",{className:`info-card info-card--${n}`,style:{padding:"0.5rem 0.75rem",display:"flex",alignItems:"flex-start",gap:"0.6rem"},children:[e.jsx(s,{style:{width:"1rem",height:"1rem",flexShrink:0,marginTop:"0.15rem"}}),e.jsxs("div",{children:[e.jsx("code",{style:{fontSize:"0.85rem",fontWeight:700},children:t}),e.jsx("p",{className:"info-card__text",style:{margin:0},children:l})]})]},i))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-muted",style:{fontSize:"0.8rem",marginBottom:"0.5rem",fontStyle:"italic"},children:"🎯 Головний цикл програми:"}),e.jsx(d,{children:`require 'date'
require 'json'
require 'yaml'

animals = load_from_yaml("clinic.yml")

loop do
  puts "\\n=== Вет.клініка ==="
  puts "1. Додати тварину"
  puts "2. Знайти за іменем"
  puts "3. Фільтр за видом"
  puts "4. Список всіх"
  puts "5. Не вакциновані"
  puts "6. Редагувати"
  puts "7. Видалити"
  puts "8. Зберегти (YAML)"
  puts "9. Зберегти (JSON)"
  puts "0. Вийти"

  choice = gets.chomp

  case choice
  when "1"
    print "Ім'я: "; name    = gets.chomp
    print "Вид: ";  species = gets.chomp
    print "Вага: "; weight  = gets.chomp.to_f
    add_animal(animals, name, species, weight)
  when "2"
    print "Запит: "
    puts find_by_name(animals, gets.chomp)
  when "5"
    filter_unvaccinated(animals).each do |id, p|
      status = overdue_vaccination?(p) ? "⚠️ прострочено" : "ок"
      puts "#{id}. #{p[:name]} — #{status}"
    end
  when "0" then break
  end
end`})]})]})]})})}function Ex(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:Je,title:"Підсумок лекції",subtitle:"Key Takeaways"}),e.jsxs("div",{className:"slide-grid slide-grid--3col",children:[e.jsx(I,{icon:rt,title:"Масиви + Хеші",description:"Основні структури даних. map/select/reject/reduce — функціональний стиль Ruby. Символи як ключі хешів.",color:"blue",delay:1}),e.jsx(I,{icon:ze,title:"Enumerable + Блоки",description:"Модуль Enumerable дає ітератори всім колекціям. Блоки, Proc, Lambda — способи передати логіку в метод.",color:"purple",delay:2}),e.jsx(I,{icon:He,title:"JSON + YAML",description:"JSON — для API та обміну між мовами, але губить символи. YAML — нативний формат Ruby, зберігає всі типи.",color:"green",delay:3})]}),e.jsx("div",{className:"outlined-card outlined-card--gradient-blue-purple fade-in-delay-4",style:{marginTop:"1.5rem"},children:e.jsxs("p",{className:"text-center",style:{margin:0},children:[e.jsx("span",{className:"text-blue font-semibold",children:"🚀 Наступна лекція:"})," ",e.jsxs("span",{className:"text-secondary",children:["ООП у Ruby — класи, модулі, наслідування. Перетворимо нашу вет.клініку на об'єктно-орієнтовану систему з класами ",e.jsx("code",{children:"Animal"}),", ",e.jsx("code",{children:"Clinic"}),", ",e.jsx("code",{children:"Vaccination"}),"."]})]})}),e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"1.5rem"},children:e.jsxs("div",{className:"outlined-card outlined-card--green",style:{maxWidth:"600px",width:"100%"},children:[e.jsx("p",{style:{margin:"0 0 0.5rem 0"},className:"font-semibold text-green",children:"✅ Ти вмієш:"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"1.25rem",color:"var(--text-secondary)",lineHeight:1.8},children:[e.jsx("li",{children:"Створювати масиви і хеші та маніпулювати ними"}),e.jsx("li",{children:"Застосовувати ітератори Enumerable замість циклів"}),e.jsx("li",{children:"Писати методи з параметрами, блоками та yield"}),e.jsx("li",{children:"Зберігати та завантажувати дані з JSON і YAML"}),e.jsx("li",{children:"Розрізняти Proc і Lambda та знати &:symbol"})]})]})})]})})}const Cx=[{id:0,title:"Титульний слайд",component:hx},{id:1,title:"Мета заняття",component:fx},{id:2,title:"Масиви",component:xx},{id:"2_1",title:"Методи масивів",component:gx},{id:3,title:"Хеші",component:jx},{id:4,title:"Ітератори",component:_x},{id:"4_1",title:"Деструктуризація",component:Nx},{id:5,title:"Методи",component:bx},{id:6,title:"Блоки",component:yx},{id:"6_1",title:"Proc і Lambda",component:vx},{id:7,title:"Збереження JSON",component:wx},{id:"7_1",title:"Збереження YAML",component:Sx},{id:8,title:"Приклади коду",component:kx},{id:9,title:"Практика",component:Rx},{id:10,title:"Підсумок",component:Ex}];function Ax(){return e.jsx(Hs,{slides:Cx})}function Tx(){return e.jsxs("div",{className:"slide slide--centered slide--gradient-blue-purple",children:[e.jsx("div",{className:"title-slide__icon-wrapper",children:e.jsx(Sl,{})}),e.jsx("h1",{className:"title-slide__title",children:"ООП у Ruby"}),e.jsx("h2",{className:"title-slide__subtitle",children:"Класи, модулі, наслідування"}),e.jsx("p",{className:"title-slide__english",children:"Object-Oriented Programming in Ruby"}),e.jsx("div",{className:"title-slide__badge",children:e.jsx("p",{children:"Лекція 3"})})]})}function Px(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ns,title:"Мета заняття",subtitle:"Learning Objectives"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx(N,{icon:He,title:"Класи та об'єкти",description:"initialize, @змінні, attr_accessor, методи екземпляра та класові методи, @@змінні класу",color:"blue",delay:1}),e.jsx(N,{icon:_e,title:"Наслідування",description:"Ієрархія класів, super, перевизначення методів, private/protected/public",color:"purple",delay:2}),e.jsx(N,{icon:gs,title:"Модулі та mixins",description:"include / extend / prepend, ancestors chain, Enumerable, Comparable",color:"green",delay:3}),e.jsx(N,{icon:V,title:"Метапрограмування",description:"freeze, respond_to?, method_missing, define_method, send — Ruby як жива мова",color:"orange",delay:4})]})]})})}function zx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:He,title:"initialize та @змінні екземпляра",subtitle:"Constructor & instance variables"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"1rem"},children:[e.jsx("code",{children:"initialize"})," — викликається автоматично при"," ",e.jsx("span",{className:"text-blue font-semibold",children:"Animal.new(...)"}),"."," "]}),e.jsx(d,{children:`class Animal
  def initialize(id:, name:, species:,
                 weight:, symptoms: [], vaccines: [])
    @id       = id
    @name     = name
    @species  = species
    @weight   = weight
    @symptoms = symptoms  # [] якщо не передали
    @vaccines = vaccines  # [] якщо не передали
  end
end

# Обов'язкові — треба передати
rex = Animal.new(id: 1, name: "Рекс",
                 species: "Собака", weight: 25)

# Опціональні — можна передати
luna = Animal.new(id: 2, name: "Луна",
                  species: "Кіт", weight: 4,
                  symptoms: ["кашель"])

# Кожен об'єкт — своя копія @змінних
# @name у rex  = "Рекс"
# @name у luna = "Луна"`})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary",style:{marginBottom:"1rem"},children:"Різниця між типами змінних:"}),e.jsx(d,{children:`class Demo
  def initialize(value)
    local_var = "я помру після методу"
    @instance_var = value   # живе в об'єкті
  end

  def show
    # local_var тут НЕ доступна — вже мертва
    puts @instance_var      # доступна!
  end
end`}),e.jsx("div",{className:"outlined-card outlined-card--green fade-in-delay-2",style:{marginTop:"1rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-green font-semibold",children:"✅ Ruby vs Python:"})," ",e.jsxs("span",{className:"text-secondary",children:["В Python ",e.jsx("code",{children:"def __init__(self, items=[])"})," — небезпечно: один список на всі об'єкти. В Ruby ",e.jsx("code",{children:"symptoms: []"})," створює"," ",e.jsx("strong",{children:"новий масив"})," при кожному виклику — безпечно."]})]})}),e.jsxs("div",{className:"outlined-card outlined-card--blue fade-in-delay-3",style:{marginTop:"1rem"},children:[e.jsxs("p",{style:{margin:"0 0 0.5rem"},children:[e.jsx("span",{className:"text-blue font-semibold",children:"📌 Правило:"})," ",e.jsxs("span",{className:"text-secondary",children:[e.jsx("code",{children:"@змінна"})," живе в об'єкті — доступна в будь-якому методі екземпляра, але ",e.jsx("strong",{children:"не"})," ззовні без геттера. Технічно можна обійти:"]})]}),e.jsx(d,{children:`rex.instance_variable_get(:@name)  # => "Рекс"
rex.instance_variable_set(:@name, "Бобік")
# Працює, але порушує інкапсуляцію.
# Використовується хіба що в тестах.`}),e.jsx("p",{style:{margin:"0.5rem 0 0"},children:e.jsx("span",{className:"text-secondary",children:"Саме тому і існують геттери — щоб давати контрольований доступ."})})]})]})]})]})})}function Lx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ei,title:"attr_accessor / reader / writer",subtitle:"Getters, Setters & Class-level methods"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[e.jsx("code",{children:"@змінні"})," — приватні за природою. Без геттера ззовні не дістатись:"]}),e.jsx(d,{children:`class Animal
  def initialize(name:)
    @name = name
  end
end

rex = Animal.new(name: "Рекс")
rex.name        # ❌ NoMethodError
rex.@name       # ❌ SyntaxError
rex.instance_variable_get(:@name)  # 😬 є, але некрасиво`}),e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem",marginTop:"1rem"},children:[e.jsx("code",{children:"attr_accessor, attr_reader, attr_writer"})," — це ",e.jsx("span",{className:"text-blue font-semibold",children:"методи класу"}),", які генерують певний код автоматично:"]}),e.jsx(d,{children:`# attr_accessor :name  генерує:
def name        # геттер
  @name
end

def name=(value)  # сеттер
  @name = value
end

# attr_reader :id  генерує тільки геттер:
def id
  @id
end

# attr_writer :weight  генерує тільки сетер:
def weight=(value)
  @weight = value
end`})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:"Коли потрібно якась логіка при наданні значення змінній інстансу пишемо сеттер вручну:"}),e.jsx(d,{children:`class Animal
  attr_accessor :name
  attr_reader   :id, :species   # незмінні
  attr_reader   :weight         # читати можна

  # attr_writer :weight НЕ використовуємо —
  # треба валідація!
  def weight=(value)
    raise ArgumentError, "Вага має бути > 0" if value <= 0
    @weight = value
  end

  def initialize(id:, name:, species:, weight:,
                 symptoms: [], vaccines: [])
    @id       = id
    @name     = name
    @species  = species
    self.weight = weight   # через наш сеттер з валідацією
    @symptoms = symptoms
    @vaccines = vaccines
  end
end

rex = Animal.new(id: 1, name: "Рекс",
                 species: "Собака", weight: 25)
rex.name          # => "Рекс"
rex.weight = 27   # ✅ через валідуючий сеттер
rex.weight = -1   # ❌ ArgumentError`}),e.jsxs("div",{className:"outlined-card outlined-card--cyan fade-in-delay-3",style:{marginTop:"1rem"},children:[e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-cyan font-semibold",children:"🔗 Зв'язок з Rails:"})," ",e.jsxs("span",{className:"text-secondary",children:[e.jsx("code",{children:"attr_accessor"}),", ",e.jsx("code",{children:"validates"}),", ",e.jsx("code",{children:"belongs_to"}),","," ",e.jsx("code",{children:"has_many"})," — всі це методи класу (іноді їх неформально називають макросами) генерують код. Саме тому в Rails-моделі можна писати декларативно:"]})]}),e.jsx(d,{children:`class User < ApplicationRecord
  has_many :posts        # генерує методи posts, posts=...
  validates :name, presence: true  # генерує валідацію
end`})]})]})]})]})})}function Mx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:gs,title:"Методи екземпляра та self",subtitle:"Instance methods & self keyword"}),e.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-1",style:{marginBottom:"1.5rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-blue font-semibold",children:"self"})," ",e.jsxs("span",{className:"text-secondary",children:["— це посилання на ",e.jsx("strong",{children:"поточний об'єкт"}),", тобто той екземпляр, на якому викликається метод. Якщо пишемо ",e.jsx("code",{children:"rex.update_weight(27)"})," — всередині методу ",e.jsx("code",{children:"self"})," це ",e.jsx("code",{children:"rex"}),". Якщо ",e.jsx("code",{children:"luna.update_weight(4)"})," — ",e.jsx("code",{children:"self"})," це ",e.jsx("code",{children:"luna"}),"."]})]})}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:["Звичайні методи — мають доступ до всіх ",e.jsx("code",{children:"@змінних"}),":"]}),e.jsx(d,{children:`class Animal
  attr_accessor :name, :weight, :vaccines

  def age
    born  = Date.parse(@birth_date.to_s)
    today = Date.today
    years = today.year - born.year
    years -= 1 if today < born >> (years * 12)
    years
  end

  def overdue_vaccines
    @vaccines.select(&:overdue?)
  end

  def vaccination_overdue?
    @vaccines.empty? || @vaccines.any?(&:overdue?)
  end

  def to_s
    "#{@id}. #{@name} (#{@species}) — #{age} р."
  end
end

rex.to_s              # => "1. Рекс (Собака) — 3 р."
rex.vaccination_overdue?  # => false`})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:["Коли ",e.jsx("code",{children:"self"})," ",e.jsx("strong",{children:"обов'язковий"}),":"]}),e.jsx(d,{children:`class Animal
  attr_accessor :name, :weight

  # 1. СЕТТЕР всередині методу
  def initialize(weight:, **rest)
    self.weight = weight  # ✅ викликає сеттер (з валідацією)
    # weight = weight     # ❌ локальна змінна, @weight не зміниться!
  end

  # 2. METHOD CHAINING — повернути сам об'єкт
  def update_weight(value)
    self.weight = value
    self   # ← повертаємо себе для ланцюжка викликів
  end

  def update_name(value)
    self.name = value
    self
  end

  # 3. ПЕРЕДАТИ ОБ'ЄКТ в інший метод
  def register(clinic)
    clinic.add_patient(self)  # передаємо себе
  end

  # Геттер — self НЕ потрібний
  def info
    "#{name}, #{weight} кг"   # = self.name, self.weight
  end
end

# Method chaining:
rex.update_weight(27).update_name("Рекс II").info
# => "Рекс II, 27 кг"`}),e.jsx("div",{className:"outlined-card outlined-card--orange fade-in-delay-3",style:{marginTop:"1rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-orange font-semibold",children:"⚠️ Головна пастка:"})," ",e.jsxs("span",{className:"text-secondary",children:[e.jsx("code",{children:"weight = value"})," всередині методу — це ",e.jsx("strong",{children:"нова локальна змінна"}),", не сеттер. Якщо є сеттер з валідацією — він не викличеться. Завжди пишіть ",e.jsx("code",{children:"self.weight = value"}),"."]})]})})]})]})]})})}function Dx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ka,title:"public / private / protected",subtitle:"Access modifiers"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:["За замовчуванням всі методи — ",e.jsx("span",{className:"text-green font-semibold",children:"public"}),". Модифікатори — це не ключові слова, а"," ",e.jsx("span",{className:"text-blue font-semibold",children:"методи класу"})," які змінюють видимість."]}),e.jsx(d,{children:`class Animal
  # public — доступний звідусіль (за замовчуванням)
  def to_s
    "#{@name} (#{@species})"
  end

  def vaccination_overdue?
    check_vaccines       # ✅ private можна викликати всередині
  end

  private

  # private — тільки всередині, без явного отримувача
  def check_vaccines
    @vaccines.any?(&:overdue?)
  end
end

rex.to_s                  # ✅ public
rex.vaccination_overdue?  # ✅ public (всередині — private)
rex.check_vaccines        # ❌ NoMethodError
# self.check_vaccines     # ❌ теж NoMethodError — навіть self. не можна!`}),e.jsxs("p",{className:"text-secondary",style:{margin:"1rem 0 0.75rem"},children:[e.jsx("span",{className:"text-purple font-semibold",children:"protected"})," — рідко, але корисно коли треба порівняти ",e.jsx("strong",{children:"два об'єкти одного класу"}),":"]}),e.jsx(d,{children:`class Animal
  def heavier_than?(other)
    weight > other.weight  # other — теж Animal,
  end                      # тому доступ до protected дозволений

  protected
  attr_reader :weight      # ззовні — ні, між собою — так
end

rex.heavier_than?(luna)  # ✅ — обидва Animal
rex.weight               # ❌ NoMethodError ззовні`})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"outlined-card outlined-card--purple fade-in-delay-1",style:{marginBottom:"1rem"},children:[e.jsx("p",{style:{margin:"0 0 0.5rem"},children:e.jsx("span",{className:"text-purple font-semibold",children:"📊 Ключова різниця:"})}),e.jsxs("table",{style:{width:"100%",fontSize:"0.88rem",color:"var(--text-secondary)",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"1px solid var(--bg-tertiary)"},children:[e.jsx("th",{style:{padding:"0.3rem 0.5rem",textAlign:"left"},children:"Модифікатор"}),e.jsx("th",{style:{padding:"0.3rem 0.5rem",textAlign:"center"},children:"Ззовні"}),e.jsx("th",{style:{padding:"0.3rem 0.5rem",textAlign:"center"},children:"self."}),e.jsx("th",{style:{padding:"0.3rem 0.5rem",textAlign:"center"},children:"other. (той самий клас)"})]})}),e.jsx("tbody",{children:[["public","✅","✅","✅"],["protected","❌","✅","✅"],["private","❌","❌","❌"]].map(([s,t,l,n],i)=>e.jsxs("tr",{style:{borderBottom:"1px solid var(--bg-tertiary)"},children:[e.jsx("td",{style:{padding:"0.3rem 0.5rem"},children:e.jsx("code",{style:{color:i===0?"var(--accent-green-text)":i===1?"var(--accent-purple-text)":"var(--accent-red-text)"},children:s})}),e.jsx("td",{style:{padding:"0.3rem 0.5rem",textAlign:"center"},children:t}),e.jsx("td",{style:{padding:"0.3rem 0.5rem",textAlign:"center"},children:l}),e.jsx("td",{style:{padding:"0.3rem 0.5rem",textAlign:"center"},children:n})]},i))})]})]}),e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[e.jsx("span",{className:"text-orange font-semibold",children:"protected"})," у Rails — зустрічається рідко, але є класичне місце — ",e.jsx("code",{children:"ApplicationController"}),":"]}),e.jsx(d,{children:`class ApplicationController < ActionController::Base
  protected

  # Підкласи-контролери можуть викликати,
  # але роутер (ззовні) — не може
  def current_user
    @current_user ||= User.find(session[:user_id])
  end

  private

  # Тільки всередині, навіть self. не можна
  def authenticate_user!
    redirect_to login_path unless current_user
  end
end

class PostsController < ApplicationController
  before_action :authenticate_user!  # ✅ private через before_action

  def index
    @posts = current_user.posts       # ✅ protected — доступний в підкласі
  end
end`}),e.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-4",style:{marginTop:"1rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-blue font-semibold",children:"💡 Правило на практиці:"})," ",e.jsxs("span",{className:"text-secondary",children:["Якщо метод — не частина публічного API класу, робіть ",e.jsx("code",{children:"private"}),"."," ",e.jsx("code",{children:"protected"})," — коли треба доступ між екземплярами того ж класу (порівняння, серіалізація). В Rails це трапляється, але рідко."]})]})})]})]})]})})}function Ox(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:_e,title:"Класові методи та @@змінні класу",subtitle:"Class methods & class variables"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:["Методи екземпляра викликаються на об'єкті (",e.jsx("code",{children:"rex.age"}),"). Класові методи — на самому ",e.jsx("strong",{children:"класі"})," (",e.jsx("code",{children:"Animal.from_h(...)"}),"). Позначаються ",e.jsx("span",{className:"text-blue font-semibold",children:"self."})," перед назвою:"]}),e.jsx(d,{children:`class Animal
  # Класовий метод — виклик: Animal.from_h(hash)
  def self.from_h(hash)
    hash = hash.transform_keys(&:to_sym)
    new(
      id:       hash[:id],
      name:     hash[:name],
      species:  hash[:species],
      weight:   hash[:weight],
      symptoms: hash[:symptoms] || [],
    )
  end
end

# Використання:
data = { id: 1, name: "Рекс", species: "Собака", weight: 25 }
rex = Animal.from_h(data)   # ✅ фабричний метод

# new — теж класовий метод (вбудований у Ruby)
luna = Animal.new(id: 2, name: "Луна",
                  species: "Кіт", weight: 4)`}),e.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-2",style:{marginTop:"1rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-blue font-semibold",children:"💡 Типові застосування:"})," ",e.jsxs("span",{className:"text-secondary",children:["фабричні методи (",e.jsx("code",{children:"from_h"}),", ",e.jsx("code",{children:"from_json"}),"), пошук (",e.jsx("code",{children:"Animal.find_by_name"}),"), утиліти які не потребують екземпляра. В Rails — ",e.jsx("code",{children:"User.find"}),", ",e.jsx("code",{children:"Post.where"}),"."]})]})})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[e.jsx("span",{className:"text-purple font-semibold",children:"@@змінна"})," — належить"," ",e.jsx("strong",{children:"класу"}),", спільна для всіх екземплярів. Корисна коли треба зберігати щось на рівні всього класу:"]}),e.jsx(d,{children:`class Animal
  @@species_list = []  # реєстр всіх відомих видів

  def initialize(id:, name:, species:, weight:,
                 symptoms: [], vaccines: [])
    @id       = id
    @name     = name
    @species  = species
    @weight   = weight
    @symptoms = symptoms
    @vaccines = vaccines
    # реєструємо вид якщо ще не знаємо
    @@species_list << species unless @@species_list.include?(species)
  end

  def self.known_species
    @@species_list
  end
end

Animal.new(id: 1, name: "Рекс",   species: "Собака", weight: 25)
Animal.new(id: 2, name: "Луна",   species: "Кіт",    weight: 4)
Animal.new(id: 3, name: "Мурзик", species: "Кіт",    weight: 5)

Animal.known_species  # => ["Собака", "Кіт"]`}),e.jsxs("div",{className:"outlined-card outlined-card--orange fade-in-delay-3",style:{marginTop:"1rem"},children:[e.jsxs("p",{style:{margin:"0 0 0.5rem"},children:[e.jsx("span",{className:"text-orange font-semibold",children:"⚠️ Обережно з @@:"})," ",e.jsxs("span",{className:"text-secondary",children:["Ділиться між класом і ",e.jsx("strong",{children:"всіма підкласами"})," — ",e.jsx("code",{children:"Dog.new"})," теж додасть вид до списку. В сучасному Ruby частіше використовують ",e.jsx("code",{children:"@змінну на рівні класу"}),":"]})]}),e.jsx(d,{children:`class Animal
  # @species_list тут — змінна об'єкта-класу Animal,
  # НЕ ділиться з підкласами
  def self.known_species
    @species_list ||= []
  end

  def self.register_species(species)
    known_species << species unless known_species.include?(species)
  end
end

# Dog матиме свій окремий @species_list
class Dog < Animal
end

Animal.known_species  # => []
Dog.known_species     # => []  — окремий!`})]})]})]})]})})}function Ix(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:xs,title:"Наслідування та super",subtitle:"Inheritance & method overriding"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[e.jsx("code",{children:"<"})," — успадкувати всі методи батьківського класу. Ruby підтримує тільки ",e.jsx("span",{className:"text-blue font-semibold",children:"одиночне наслідування"})," ","(один батько), але модулі дають решту."]}),e.jsx(d,{children:`class Animal
  attr_accessor :name, :species, :weight

  def initialize(name:, species:, weight:)
    @name    = name
    @species = species
    @weight  = weight
  end

  def to_s
    "#{@name} (#{@species})"
  end

  def speak
    "..."
  end
end

class Dog < Animal
  attr_accessor :breed

  def initialize(name:, weight:, breed:)
    # super передає аргументи батьківському initialize
    super(name: name, species: "Собака", weight: weight)
    @breed = breed
  end

  def speak
    "Гав!"
  end

  def to_s
    "#{super} [#{@breed}]"
  end
end

rex = Dog.new(name: "Рекс", weight: 25, breed: "Лабрадор")
rex.speak   # => "Гав!"
rex.to_s    # => "Рекс (Собака) [Лабрадор]"
rex.weight  # => 25  (успадкований від Animal)`})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[e.jsx("code",{children:"super"})," — три варіанти:"]}),e.jsx(d,{children:`class Dog < Animal
  def initialize(name:, weight:, breed:)
    # 1. super з аргументами — передаємо явно
    super(name: name, species: "Собака", weight: weight)

    # 2. super без дужок — передає ВСІ поточні аргументи
    #    (обережно — може передати зайве!)
    # super

    # 3. super() — викликає без аргументів
    # super()

    @breed = breed
  end
end`}),e.jsx("p",{className:"text-secondary",style:{margin:"1rem 0 0.75rem"},children:"Перевірка приналежності до класу:"}),e.jsx(d,{children:`rex.is_a?(Dog)        # => true
rex.is_a?(Animal)     # => true  (підклас є батьком!)
rex.is_a?(String)     # => false

rex.class             # => Dog
rex.class.superclass  # => Animal

Dog.ancestors
# => [Dog, Animal, Object, Kernel, BasicObject]`}),e.jsx("div",{className:"outlined-card outlined-card--green fade-in-delay-3",style:{marginTop:"1rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-green font-semibold",children:"💡 В Rails:"})," ",e.jsxs("span",{className:"text-secondary",children:[e.jsx("code",{children:"Наслідування багато. class PostsController < ApplicationController"}),". Кожна модель успадковує від ",e.jsx("code",{children:"ApplicationRecord"}),", кожен контролер від ",e.jsx("code",{children:"ApplicationController"}),"."]})]})})]})]})]})})}function Bx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:at,title:"Модулі як mixins",subtitle:"include / extend / prepend & ancestors chain"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:["Модуль — як клас, але без екземплярів. Використовується як"," ",e.jsx("span",{className:"text-blue font-semibold",children:"mixin"})," — додає методи до класу.",e.jsx("code",{children:"include"})," — методи стають методами ",e.jsx("strong",{children:"екземпляра"}),":"]}),e.jsx(d,{children:`require 'json'
require 'yaml'

module Exportable
  def to_json_string
    JSON.generate(to_h)
  end

  def to_yaml_string
    to_h.to_yaml
  end
end

class Animal
  include Exportable

  def to_h
    { id: @id, name: @name, species: @species }
  end
end

rex.to_json_string   # ✅ метод екземпляра через include
rex.to_yaml_string   # ✅`}),e.jsxs("p",{className:"text-secondary",style:{margin:"1rem 0 0.75rem"},children:[e.jsx("code",{children:"extend"})," — методи стають ",e.jsx("strong",{children:"класовими"}),". Зручно для валідації при створенні:"]}),e.jsx(d,{children:`module Validatable
  def validate_presence(value, field_name)
    raise ArgumentError, "#{field_name} не може бути порожнім" if value.nil? || value.to_s.strip.empty?
  end

  def validate_positive(value, field_name)
    raise ArgumentError, "#{field_name} має бути > 0" if value <= 0
  end
end

class Animal
  extend Validatable  # методи стають класовими

  def self.create(name:, weight:, species:)
    validate_presence(name,    "Ім'я")
    validate_presence(species, "Вид")
    validate_positive(weight,  "Вага")
    new(name: name, weight: weight, species: species)
  end
end

Animal.create(name: "Рекс", weight: 25, species: "Собака") # ✅
Animal.create(name: "",     weight: 25, species: "Собака") # ❌ ArgumentError`})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[e.jsx("span",{className:"text-orange font-semibold",children:"prepend"})," — вставляє модуль"," ",e.jsx("strong",{children:"перед"})," класом. Метод модуля виконується першим:"]}),e.jsx(d,{children:`module Logging
  def to_s
    puts "[LOG] to_s викликано для #{@name}"
    super   # далі — Animal#to_s
  end
end

class Animal
  prepend Logging

  def to_s
    "#{@name} (#{@species})"
  end
end

rex.to_s
# [LOG] to_s викликано для Рекс
# => "Рекс (Собака)"`}),e.jsxs("p",{className:"text-secondary",style:{margin:"1rem 0 0.75rem"},children:["Порядок пошуку методу — ",e.jsx("span",{className:"text-purple font-semibold",children:"ancestors chain"}),":"]}),e.jsx(d,{children:`class Animal
  include Exportable
  prepend Logging
end

Animal.ancestors
# => [Logging, Animal, Exportable, Object, Kernel, BasicObject]
#      ↑                   ↑
#  prepend — до         include — після
#
# Ruby шукає метод зліва направо.
# Перший хто відповість — той і виконається.`}),e.jsx("div",{className:"outlined-card outlined-card--purple fade-in-delay-4",style:{marginTop:"1rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-purple font-semibold",children:"📌 Коротко:"})," ",e.jsxs("span",{className:"text-secondary",children:[e.jsx("code",{children:"include"})," — методи екземпляру (найчастіше)."," ",e.jsx("code",{children:"extend"})," — класові методи."," ",e.jsx("code",{children:"prepend"})," — перехопити існуючі методи (логування, декоратори)."]})]})})]})]})]})})}function Hx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:at,title:"Модулі як namespace",subtitle:"Organizing code & avoiding name conflicts"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:["Друге призначення модулів — ",e.jsx("span",{className:"text-blue font-semibold",children:"простір імен"}),". Дозволяє мати класи з однаковою назвою в різних контекстах без конфліктів. Доступ через ",e.jsx("code",{children:"::"}),":"]}),e.jsx(d,{children:`module Veterinary
  class Animal
    attr_accessor :name, :species
    def initialize(name:, species:)
      @name    = name
      @species = species
    end

    def to_s
      "Пацієнт: #{@name} (#{@species})"
    end
  end

  class Doctor
    attr_reader :name
    def initialize(name:)
      @name = name
    end
  end
end

module Zoo
  class Animal    # інший клас — немає конфлікту!
    def to_s
      "Мешканець зоопарку"
    end
  end
end

vet_animal = Veterinary::Animal.new(name: "Рекс", species: "Собака")
zoo_animal = Zoo::Animal.new

vet_animal.to_s  # => "Пацієнт: Рекс (Собака)"
zoo_animal.to_s  # => "Мешканець зоопарку"`})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:"Можна вкладати модулі та класи на будь-яку глибину:"}),e.jsx(d,{children:`module Veterinary
  module Reports
    class VaccinationReport
      def initialize(animal)
        @animal = animal
      end

      def generate
        "Звіт вакцинації для #{@animal.name}"
      end
    end
  end
end

report = Veterinary::Reports::VaccinationReport.new(rex)
report.generate  # => "Звіт вакцинації для Рекс"

# Всередині модуля :: не потрібен:
module Veterinary
  module Reports
    class SummaryReport
      def initialize(animal)
        VaccinationReport.new(animal)  # без Veterinary::Reports::
      end
    end
  end
end`}),e.jsxs("div",{className:"outlined-card outlined-card--cyan fade-in-delay-3",style:{marginTop:"1rem"},children:[e.jsx("p",{style:{margin:"0 0 0.5rem"},children:e.jsx("span",{className:"text-cyan font-semibold",children:"🔗 В Rails — namespace скрізь:"})}),e.jsx(d,{children:`ActiveRecord::Base      # модуль ActiveRecord, клас Base
ActionController::Base  # модуль ActionController, клас Base
ActiveSupport::Concern  # модуль для зручного написання mixins

# Ваші власні namespace в Rails:
# app/controllers/api/v1/posts_controller.rb
module Api
  module V1
    class PostsController < ApplicationController
    end
  end
end`})]}),e.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-4",style:{marginTop:"1rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-blue font-semibold",children:"📌 Підсумок модулів:"})," ",e.jsxs("span",{className:"text-secondary",children:["Модуль в Ruby — це і ",e.jsx("strong",{children:"mixin"})," (додає поведінку), і ",e.jsx("strong",{children:"namespace"})," (організовує код). Два інструменти в одному."]})]})})]})]})]})})}function $x(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:_e,title:"Enumerable та Comparable",subtitle:"Free methods via modules"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[e.jsx("code",{children:"include Enumerable"})," — якщо визначити один метод ",e.jsx("code",{children:"each"}),", отримуєш ",e.jsx("strong",{children:"безкоштовно"})," десятки методів: ",e.jsx("code",{children:"map"}),","," ",e.jsx("code",{children:"select"}),", ",e.jsx("code",{children:"find"}),", ",e.jsx("code",{children:"sort"}),", ",e.jsx("code",{children:"min"}),","," ",e.jsx("code",{children:"count"}),", ",e.jsx("code",{children:"any?"}),", ",e.jsx("code",{children:"all?"})," та інші:"]}),e.jsx(d,{children:`class AnimalManager
    include Enumerable   # підключаємо модуль
  
    def initialize
      @collection = {}
    end
  
    # Єдиний метод який треба визначити
    def each(&block)
      @collection.each_value(&block)
    end
  
    def add(name:, species:, weight:)
      id = (@collection.keys.max || 0) + 1
      @collection[id] = Animal.new(
        id: id, name: name,
        species: species, weight: weight
      )
    end
  end
  
  manager = AnimalManager.new
  manager.add(name: "Рекс",   species: "Собака", weight: 25)
  manager.add(name: "Луна",   species: "Кіт",    weight: 4)
  manager.add(name: "Мурзик", species: "Кіт",    weight: 5)
  
  # Всі ці методи — безкоштовно від Enumerable:
  manager.count                          # => 3
  manager.select { |a| a.species == "Кіт" }  # => [Луна, Мурзик]
  manager.find   { |a| a.name == "Рекс" }    # => Рекс
  manager.any?   { |a| a.weight > 20 }       # => true
  manager.all?   { |a| a.weight > 0 }        # => true
  manager.map    { |a| a.name }              # => ["Рекс", "Луна", "Мурзик"]
  manager.min_by { |a| a.weight }            # => Луна (4 кг)
  manager.sort_by { |a| a.weight }           # за вагою`})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[e.jsx("code",{children:"include Comparable"})," — якщо визначити ",e.jsx("code",{children:"<=>"}),", отримуєш ",e.jsx("code",{children:"<"}),", ",e.jsx("code",{children:">"}),", ",e.jsx("code",{children:"<="}),","," ",e.jsx("code",{children:">="}),", ",e.jsx("code",{children:"between?"}),", ",e.jsx("code",{children:"clamp"}),":"]}),e.jsx(d,{children:`class Animal
    include Comparable
  
    attr_reader :name, :weight
  
    # Spaceship operator — основа Comparable
    # повертає -1, 0, або 1
    def <=>(other)
      weight <=> other.weight
    end
  end
  
  rex   = Animal.new(name: "Рекс",   weight: 25)
  luna  = Animal.new(name: "Луна",   weight: 4)
  bobik = Animal.new(name: "Бобік",  weight: 18)
  
  # Безкоштовно від Comparable:
  rex > luna          # => true
  luna < bobik        # => true
  rex == bobik        # => false
  
  # І на колекціях:
  animals = [rex, luna, bobik]
  animals.sort        # => [Луна(4), Бобік(18), Рекс(25)]
  animals.min         # => Луна
  animals.max         # => Рекс
  
  luna.between?(Animal.new(name: "X", weight: 1),
                Animal.new(name: "Y", weight: 10))
  # => true`}),e.jsx("div",{className:"outlined-card outlined-card--green fade-in-delay-3",style:{marginTop:"1rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-green font-semibold",children:"💡 В Rails:"})," ",e.jsxs("span",{className:"text-secondary",children:[e.jsx("code",{children:"ActiveRecord::Base"})," включає ",e.jsx("code",{children:"Enumerable"})," — тому"," ",e.jsx("code",{children:"User.all.map"}),", ",e.jsx("code",{children:"Post.where(...).select"})," працюють саме так. Це не магія Rails — це Ruby модулі."]})]})})]})]})]})})}function Fx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ce,title:"Обробка помилок",subtitle:"begin / rescue / ensure / raise & exception hierarchy"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:"Базова структура обробки помилок:"}),e.jsx(d,{children:`def load_from_json(filename = 'animals.json')
    begin # необов'язково, бо def тут як begin 
      raw = JSON.parse(File.read(filename))
      @collection = raw.transform_keys(&:to_i)
                       .transform_values { |h| Animal.from_h(h) }
      puts "Завантажено з #{filename}"
  
    rescue Errno::ENOENT
      # файл не знайдено
      puts "Файл #{filename} не знайдено"
      @collection = {}
  
    rescue JSON::ParserError => e
      puts "Помилка парсингу: #{e.message}"
      @collection = {}
      raise   # ← re-raise: перекидає той самий виняток далі
  
    rescue => e
      # StandardError та всі її нащадки
      puts "Невідома помилка: #{e.message}"
  
    ensure
      # виконується ЗАВЖДИ — і при помилці, і без
      puts "Завантаження завершено"
    end # тоді і цей end не потрібен
  end`}),e.jsxs("p",{className:"text-secondary",style:{margin:"1rem 0 0.75rem"},children:[e.jsx("code",{children:"raise"})," — три варіанти:"]}),e.jsx(d,{children:`# 1. З типом і повідомленням
  raise ArgumentError, "Вага має бути > 0"
  
  # 2. З власним класом помилки
  class InvalidWeightError < StandardError
    def initialize(value)
      super("Недійсна вага: #{value}. Має бути > 0")
    end
  end
  raise InvalidWeightError.new(value)
  
  # 3. Без аргументів:
  #   — всередині rescue: re-raise поточного винятку
  #   — поза rescue: RuntimeError з порожнім повідомленням
  raise`})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:"Ієрархія винятків у Ruby:"}),e.jsx(d,{children:`Exception                    # корінь всіх помилок
  ├── SignalException            # сигнали ОС (Ctrl+C)
  ├── SystemExit                 # exit()
  └── StandardError              # ← rescue без типу ловить ЦЕ та всіх її нащадків!
      ├── RuntimeError           # ← raise "msg" генерує RuntimeError
      ├── ArgumentError          
      ├── TypeError
      ├── NameError
      │   └── NoMethodError
      ├── IOError
      │   └── Errno::ENOENT
      ├── ZeroDivisionError
      └── JSON::ParserError      # (з гему json)`}),e.jsxs("div",{className:"outlined-card outlined-card--orange fade-in-delay-2",style:{marginTop:"1rem"},children:[e.jsx("p",{style:{margin:"0 0 0.5rem"},children:e.jsx("span",{className:"text-orange font-semibold",children:"⚠️ rescue без типу:"})}),e.jsx(d,{children:`rescue => e   # = rescue StandardError => e
                # ловить StandardError та ВСІХ нащадків
                # НЕ ловить SignalException, SystemExit!
  
  # Що доступно в rescue:
  e.message            # текст помилки
  e.class              # => ArgumentError
  e.backtrace          # масив рядків — стек викликів
  e.backtrace_locations # те саме, але об'єктами
  e.cause              # попередній виняток (якщо був)
  e.full_message       # message + backtrace разом
  
  # Зловити абсолютно все (рідко потрібно):
  rescue Exception => e   # обережно — ловить і Ctrl+C!`})]}),e.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-3",style:{marginTop:"1rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-blue font-semibold",children:"💡 В Rails:"})," ",e.jsxs("span",{className:"text-secondary",children:[e.jsx("code",{children:"ActiveRecord::RecordNotFound"}),","," ",e.jsx("code",{children:"ActiveRecord::RecordInvalid"})," — наслідують від"," ",e.jsx("code",{children:"StandardError"}),". Rails сам обробляє їх і повертає 404/422 — але знати ієрархію треба щоб писати власні rescue."]})]})})]})]})]})})}function Ux(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ka,title:"freeze, frozen?, dup та clone",subtitle:"Immutability in Ruby"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[e.jsx("code",{children:"freeze"})," — робить об'єкт ",e.jsx("strong",{children:"незмінним"}),". Будь-яка спроба змінити — ",e.jsx("code",{children:"FrozenError"}),":"]}),e.jsx(d,{children:`# frozen_string_literal: true
  # ↑ магічний коментар: всі рядки у файлі автоматично
  # freeze — краща продуктивність, захист від змін.
  # Зустрічається у всіх Rails файлах.
  
              
  species = "Собака"
  species.freeze
  
  species.upcase    # ✅ повертає новий рядок, не змінює
  species << "!"    # ❌ FrozenError: can't modify frozen String
  species.frozen?   # => true
  
  # Числа, символи, true/false, nil —
  # завжди frozen у Ruby:
  42.frozen?     # => true
  :name.frozen?  # => true
  nil.frozen?    # => true
  
  # Корисно для констант:
  SPECIES_LIST = ["Собака", "Кіт", "Птах"].freeze
  # SPECIES_LIST << "Риба"  # ❌ FrozenError
  
  # Але елементи всередині — не заморожені!
  SPECIES_LIST[0] << "!!!"  # ❌ або ✅ залежно від Ruby версії
  # Щоб заморозити глибоко:
  SPECIES_LIST = ["Собака", "Кіт"].map(&:freeze).freeze`})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[e.jsx("code",{children:"dup"})," і ",e.jsx("code",{children:"clone"})," — копіювання об'єкта. Різниця є, і вона важлива:"]}),e.jsx(d,{children:`original = "Собака".freeze
  
  # dup — знімає freeze, копія незаморожена
  copy1 = original.dup
  copy1.frozen?     # => false
  copy1 << "!!!"    # ✅ працює
  
  # clone — зберігає freeze
  copy2 = original.clone
  copy2.frozen?     # => true
  copy2 << "!!!"    # ❌ FrozenError
  
  # Обидва — поверхнева копія (shallow copy)!
  symptoms = ["кашель", "температура"]
  animal1 = Animal.new(symptoms: symptoms)
  animal2_dup = animal1.dup
  
  # @symptoms у animal2 — той самий масив!
  animal2_dup.symptoms << "блювота"
  animal1.symptoms  # => ["кашель", "температура", "блювота"] 😱
  
  # Глибока копія через Marshal:
  animal3 = Marshal.load(Marshal.dump(animal1))`}),e.jsx("div",{className:"outlined-card outlined-card--purple fade-in-delay-3",style:{marginTop:"1rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-purple font-semibold",children:"📌 Коротко:"})," ",e.jsxs("span",{className:"text-secondary",children:[e.jsx("code",{children:"freeze"})," — захист від випадкових змін (константи, конфіги)."," ",e.jsx("code",{children:"dup"})," — копія без freeze."," ",e.jsx("code",{children:"clone"})," — копія зі збереженням freeze. Обидва поверхневі — для глибокої копії є ",e.jsx("code",{children:"Marshal"}),"."]})]})})]})]})]})})}function Vx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ce,title:"Захисне програмування",subtitle:"nil?, respond_to?, is_a? & friends"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[e.jsx("code",{children:"nil?"})," — єдиний надійний спосіб перевірити nil. В Ruby тільки ",e.jsx("code",{children:"nil"})," і ",e.jsx("code",{children:"false"})," — falsy:"]}),e.jsx(d,{children:`animal = nil
  
  animal.nil?       # => true
  animal == nil     # => true, але гірший стиль
  
  # Різниця важлива:
  0.nil?            # => false  (0 — truthy в Ruby!)
  "".nil?           # => false  ("" — теж truthy!)
  false.nil?        # => false
  
  # Безпечний виклик через &. (safe navigation):
  animal&.name      # => nil  (не NoMethodError!)
  animal&.name&.upcase  # => nil
  
  rex = Animal.new(name: "Рекс", ...)
  rex&.name         # => "Рекс"`}),e.jsxs("p",{className:"text-secondary",style:{margin:"1rem 0 0.75rem"},children:[e.jsx("code",{children:"respond_to?"})," — чи має об'єкт певний метод:"]}),e.jsx(d,{children:`rex.respond_to?(:name)         # => true
  rex.respond_to?(:fly)          # => false
  rex.respond_to?(:check_vaccines) # => false (private!)
  
  # Перевірити private методи теж можна:
  rex.respond_to?(:check_vaccines, true)  # => true
  #                                 ↑ include_all = true
  
  # Типове використання — duck typing:
  def export(obj)
    if obj.respond_to?(:to_json_string)
      obj.to_json_string
    else
      obj.to_s
    end
  end`})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[e.jsx("code",{children:"is_a?"})," / ",e.jsx("code",{children:"kind_of?"})," — перевірка типу (включаючи батьків):"]}),e.jsx(d,{children:`rex = Dog.new(name: "Рекс", weight: 25, breed: "Лабрадор")
  
  rex.is_a?(Dog)        # => true
  rex.is_a?(Animal)     # => true  (підклас!)
  rex.is_a?(String)     # => false
  
  # kind_of? — синонім is_a?
  rex.kind_of?(Animal)  # => true
  
  # instance_of? — тільки точний тип, без батьків:
  rex.instance_of?(Dog)     # => true
  rex.instance_of?(Animal)  # => false ← різниця!
  
  # class — точний клас об'єкта:
  rex.class         # => Dog
  rex.class.name    # => "Dog"
  
  # Перевірка модуля:
  rex.is_a?(Comparable)   # => true (якщо включено)`}),e.jsxs("div",{className:"outlined-card outlined-card--orange fade-in-delay-3",style:{marginTop:"1rem"},children:[e.jsxs("p",{style:{margin:"0 0 0.5rem"},children:[e.jsx("span",{className:"text-orange font-semibold",children:"💡 Duck typing:"})," ",e.jsxs("span",{className:"text-secondary",children:["В Ruby рідко перевіряють тип через ",e.jsx("code",{children:"is_a?"})," — частіше використовують ",e.jsx("code",{children:"respond_to?"}),`. "Якщо об'єкт вміє крякати — це качка." Перевіряємо поведінку, а не тип.`]})]}),e.jsx(d,{children:`# Погано — жорстка прив'язка до типу:
  raise TypeError unless animal.is_a?(Animal)
  
  # Краще — duck typing:
  raise TypeError unless animal.respond_to?(:name)`})]})]})]})]})})}function Wx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ei,title:"inspect vs to_s та рівність об'єктів",subtitle:"inspect / to_s / == / eql? / equal?"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[e.jsx("code",{children:"to_s"})," — для людей. ",e.jsx("code",{children:"inspect"})," — для розробника/дебагу. Різниця суттєва:"]}),e.jsx(d,{children:`class Animal
    def to_s
      "#{@name} (#{@species})"   # читабельно для користувача
    end
  
    def inspect
      "#<Animal id=#{@id} name=#{@name.inspect} "       "species=#{@species.inspect} weight=#{@weight}>"
    end
  end
  
  rex = Animal.new(id: 1, name: "Рекс",
                   species: "Собака", weight: 25)
  
  puts rex          # "Рекс (Собака)"      ← to_s
  puts rex.inspect  # #<Animal id=1 name="Рекс" species="Собака" weight=25>
  p rex             # те саме що puts rex.inspect
  
  # p — найкращий друг при дебагу:
  p "Рекс"    # => "Рекс"  (з лапками — бачимо що це String)
  p nil       # => nil     (а не порожній рядок як puts)
  p [1, 2, 3] # => [1, 2, 3]`})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:"Три рівності — три різних питання:"}),e.jsx(d,{children:`# == : рівність за значенням (можна перевизначити)
  1 == 1.0        # => true   (різні типи, однакове значення)
  "Рекс" == "Рекс"  # => true
  
  # eql? : рівність за значенням І типом
  1.eql?(1.0)     # => false  (Integer != Float)
  1.eql?(1)       # => true
  "Рекс".eql?("Рекс")  # => true
  
  # equal? : рівність за ідентичністю (той самий об'єкт)
  a = "Рекс"
  b = "Рекс"
  c = a
  
  a == b          # => true   (однакове значення)
  a.equal?(b)     # => false  (різні об'єкти в пам'яті!)
  a.equal?(c)     # => true   (та сама адреса)
  a.object_id == c.object_id  # => true`}),e.jsx(d,{children:`# Для власних класів — перевизначаємо ==:
  class Animal
    def ==(other)
      other.is_a?(Animal) && id == other.id
    end
  end
  
  rex1 = Animal.new(id: 1, name: "Рекс", ...)
  rex2 = Animal.new(id: 1, name: "Рекс", ...)
  
  rex1 == rex2      # => true   (однаковий id)
  rex1.equal?(rex2) # => false  (різні об'єкти)`}),e.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-4",style:{marginTop:"1rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-blue font-semibold",children:"📌 Правило:"})," ",e.jsxs("span",{className:"text-secondary",children:["Майже завжди використовуємо ",e.jsx("code",{children:"=="}),"."," ",e.jsx("code",{children:"eql?"})," — у хешах та множинах (ключі)."," ",e.jsx("code",{children:"equal?"})," — тільки коли справді треба перевірити що це той самий об'єкт в пам'яті."]})]})})]})]})]})})}function Qx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:V,title:"Метапрограмування",subtitle:"define_method / method_missing / send"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[e.jsx("code",{children:"send"})," — викликати метод за назвою як рядком або символом:"]}),e.jsx(d,{children:`rex.send(:name)          # => "Рекс"  (те саме що rex.name)
rex.send(:weight=, 27)  # => 27
  
  # Навіть private методи:
  rex.send(:check_vaccines)  # ✅ обходить private!
  
  # Корисно для динамічних викликів:
  [:name, :species, :weight].each do |field|
    puts rex.send(field)
  end`}),e.jsxs("p",{className:"text-secondary",style:{margin:"1rem 0 0.75rem"},children:[e.jsx("code",{children:"define_method"})," — визначити метод динамічно під час виконання. Наприклад — залогувати ",e.jsx("strong",{children:"всі"})," методи класу:"]}),e.jsx(d,{children:`  module Logging
    def self.included(base)
      # Проходимо по всіх методах класу
      base.instance_methods(false).each do |method_name|
        original = base.instance_method(method_name)
  
        base.define_method(method_name) do |*args, &block|
          puts "[LOG] #{base}##{method_name} викликано"
          # bind прив'язує метод до поточного об'єкта
          original.bind(self).call(*args, &block)
        end
      end
    end
  end
  
  class Animal
    def name; @name; end
    def to_s; "#{@name} (#{@species})"; end
  
    include Logging   # ← ПІСЛЯ визначення методів!
  end
  
  rex.name   # [LOG] Animal#name викликано  =>  "Рекс"
  rex.to_s   # [LOG] Animal#to_s викликано  =>  "Рекс (Собака)"`})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[e.jsx("code",{children:"method_missing"})," — перехопити виклик ",e.jsx("strong",{children:"будь-якого"})," ","невідомого методу:"]}),e.jsx(d,{children:`class Animal
    def method_missing(name, *args)
      # name — символ назви методу що не знайдено
      if name.to_s.start_with?("find_by_")
        field = name.to_s.sub("find_by_", "").to_sym
        send(field) == args.first
      else
        super   # ← важливо! передати далі якщо не наш випадок
      end
    end
  
    # Завжди визначаємо разом з method_missing:
    def respond_to_missing?(name, include_private = false)
      name.to_s.start_with?("find_by_") || super
    end
  end
  
  rex.find_by_name("Рекс")     # => true
  rex.find_by_species("Собака") # => true
  rex.find_by_weight(25)        # => true
  
  # Так само працює в Rails:
  # User.find_by_email("test@test.com")
  # Post.find_by_title("Hello")`}),e.jsx("div",{className:"outlined-card outlined-card--orange fade-in-delay-3",style:{marginTop:"1rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-orange font-semibold",children:"⚠️ Правила метапрограмування:"})," ",e.jsxs("span",{className:"text-secondary",children:["1. Завжди викликати ",e.jsx("code",{children:"super"})," в кінці ",e.jsx("code",{children:"method_missing"}),"."," ","2. Завжди визначати ",e.jsx("code",{children:"respond_to_missing?"})," поруч."," ","3. ",e.jsx("code",{children:"include Logging"})," — після визначення методів, не до."," ","4. Використовувати обережно — важко дебажити."]})]})}),e.jsx("div",{className:"outlined-card outlined-card--cyan fade-in-delay-4",style:{marginTop:"1rem"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("span",{className:"text-cyan font-semibold",children:"🔗 В Rails скрізь:"})," ",e.jsxs("span",{className:"text-secondary",children:[e.jsx("code",{children:"find_by_*"}),", ",e.jsx("code",{children:"where"}),", ",e.jsx("code",{children:"has_many"}),","," ",e.jsx("code",{children:"belongs_to"}),", ",e.jsx("code",{children:"validates"})," — все це метапрограмування."]})]})})]})]})]})})}function Yx(){return e.jsx("div",{className:"slide slide--centered slide--gradient-blue-purple",children:e.jsxs("div",{className:"slide__content slide__content--narrow",style:{textAlign:"left"},children:[e.jsx(f,{icon:Sl,title:"Підсумок лекції",subtitle:"Summary"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"outlined-card outlined-card--blue",style:{marginBottom:"1rem"},children:[e.jsx("p",{className:"text-blue font-semibold",style:{margin:"0 0 0.5rem"},children:"Класи та об'єкти"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"1.2rem",color:"var(--text-secondary)",lineHeight:1.8},children:[e.jsxs("li",{children:[e.jsx("code",{children:"initialize"}),", ",e.jsx("code",{children:"@змінні"}),", keyword args"]}),e.jsxs("li",{children:[e.jsx("code",{children:"attr_accessor/reader/writer"})," — методи класу що генерують код"]}),e.jsxs("li",{children:[e.jsx("code",{children:"public/private/protected"})," — контроль доступу"]}),e.jsxs("li",{children:[e.jsx("code",{children:"self"})," — поточний об'єкт, обов'язковий у сеттерах, chaining, передачі"]}),e.jsxs("li",{children:["Класові методи (",e.jsx("code",{children:"self.метод"}),"), ",e.jsx("code",{children:"@@змінні"})," vs ",e.jsx("code",{children:"@на класі"})]})]})]}),e.jsxs("div",{className:"outlined-card outlined-card--purple",style:{marginBottom:"1rem"},children:[e.jsx("p",{className:"text-purple font-semibold",style:{margin:"0 0 0.5rem"},children:"Наслідування та модулі"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"1.2rem",color:"var(--text-secondary)",lineHeight:1.8},children:[e.jsxs("li",{children:[e.jsx("code",{children:"<"})," — одиночне наслідування, ",e.jsx("code",{children:"super"})," — три варіанти"]}),e.jsxs("li",{children:[e.jsx("code",{children:"include"})," / ",e.jsx("code",{children:"extend"})," / ",e.jsx("code",{children:"prepend"})," + ancestors chain"]}),e.jsxs("li",{children:["Модулі як namespace — ",e.jsx("code",{children:"::"}),", уникнення конфліктів імен"]}),e.jsxs("li",{children:[e.jsx("code",{children:"Enumerable"})," + ",e.jsx("code",{children:"each"})," → десятки методів безкоштовно"]}),e.jsxs("li",{children:[e.jsx("code",{children:"Comparable"})," + ",e.jsx("code",{children:"<=>"})," → сортування та порівняння"]})]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"outlined-card outlined-card--green",style:{marginBottom:"1rem"},children:[e.jsx("p",{className:"text-green font-semibold",style:{margin:"0 0 0.5rem"},children:"Надійний код"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"1.2rem",color:"var(--text-secondary)",lineHeight:1.8},children:[e.jsxs("li",{children:[e.jsx("code",{children:"begin/rescue/ensure/raise"}),", ієрархія винятків"]}),e.jsxs("li",{children:[e.jsx("code",{children:"rescue"})," без типу ловить ",e.jsx("code",{children:"StandardError"})," та нащадків"]}),e.jsxs("li",{children:[e.jsx("code",{children:"freeze"}),", ",e.jsx("code",{children:"dup"})," vs ",e.jsx("code",{children:"clone"}),", ",e.jsx("code",{children:"# frozen_string_literal"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"nil?"}),", ",e.jsx("code",{children:"respond_to?"}),", ",e.jsx("code",{children:"is_a?"})," — duck typing"]}),e.jsxs("li",{children:[e.jsx("code",{children:"=="})," vs ",e.jsx("code",{children:"eql?"})," vs ",e.jsx("code",{children:"equal?"})]})]})]}),e.jsxs("div",{className:"outlined-card outlined-card--orange",children:[e.jsx("p",{className:"text-orange font-semibold",style:{margin:"0 0 0.5rem"},children:"Метапрограмування"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"1.2rem",color:"var(--text-secondary)",lineHeight:1.8},children:[e.jsxs("li",{children:[e.jsx("code",{children:"send"})," — виклик методу за назвою"]}),e.jsxs("li",{children:[e.jsx("code",{children:"define_method"})," — визначення методу динамічно"]}),e.jsxs("li",{children:[e.jsx("code",{children:"method_missing"})," + ",e.jsx("code",{children:"respond_to_missing?"})]}),e.jsxs("li",{children:["Саме так працюють ",e.jsx("code",{children:"has_many"}),", ",e.jsx("code",{children:"find_by_*"})," в Rails"]})]})]})]})]})]})})}const qx=[{id:1,title:"Титульний слайд",component:Tx},{id:2,title:"Мета заняття",component:Px},{id:3,title:"initialize та @змінні екземпляра",component:zx},{id:4,title:"public / private / protected",component:Dx},{id:5,title:"attr_accessor / reader / writer",component:Lx},{id:6,title:"Методи екземпляра + self",component:Mx},{id:7,title:"Класові методи та @@змінні класу",component:Ox},{id:8,title:"Наслідування та super",component:Ix},{id:9,title:"Модулі як mixins",component:Bx},{id:10,title:"Модулі як namespace",component:Hx},{id:11,title:"Enumerable та Comparable",component:$x},{id:12,title:"Обробка помилок та ієрархія винятків",component:Fx},{id:13,title:"freeze, frozen?, dup та clone",component:Ux},{id:14,title:"Захисне програмування",component:Vx},{id:15,title:"inspect vs to_s та рівність об'єктів",component:Wx},{id:16,title:"Метапрограмування",component:Qx},{id:17,title:"Підсумок",component:Yx}];function Gx(){return e.jsx(Hs,{slides:qx})}function Kx(){return e.jsxs("div",{className:"slide slide--centered slide--gradient-blue-purple",children:[e.jsx("div",{className:"title-slide__icon-wrapper",children:e.jsx(Bs,{})}),e.jsx("h1",{className:"title-slide__title",children:"Привіт, Rails!"}),e.jsx("h2",{className:"title-slide__subtitle",children:"Перший додаток за 90 хвилин"}),e.jsx("p",{className:"title-slide__english",children:"Hello, Rails! Your First App in 90 Minutes"}),e.jsx("div",{className:"title-slide__badge",children:e.jsx("p",{children:"Лекція 4"})})]})}function Jx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ns,title:"Мета заняття",subtitle:"Learning Objectives"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx(N,{icon:_e,title:"Що таке Rails?",description:"Convention over Configuration — чому Rails такий продуктивний і що відрізняє його від інших фреймворків",color:"green",delay:1}),e.jsx(N,{icon:ct,title:"Встановлення та структура",description:"rails new, структура проєкту — де що лежить і чому саме так",color:"blue",delay:2}),e.jsx(N,{icon:Na,title:"MVC-архітектура",description:"Model-View-Controller: як три компоненти спілкуються і обробляють HTTP-запит",color:"purple",delay:3}),e.jsx(N,{icon:V,title:"Scaffold + WOW-ефект",description:"rails generate scaffold — повноцінний CRUD за одну команду. Від нуля до блогу за 30 хвилин",color:"orange",delay:4})]})]})})}function Xx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:Je,title:"Що таке Rails?",subtitle:"Ruby on Rails — web framework"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"highlight-box highlight-box--green mb-md",children:[e.jsx(li,{className:"highlight-box__icon"}),e.jsx("div",{children:e.jsxs("p",{className:"highlight-box__text",children:["Rails — веб-фреймворк написаний на Ruby. Створений ",e.jsx("strong",{children:"Девідом Хайнемайером Ганссоном"})," (DHH) у 2004 році під час роботи над Basecamp."]})})]}),e.jsxs("div",{className:"step-list",children:[e.jsxs("div",{className:"step-list__item step-list__item--green",children:[e.jsx("div",{className:"step-list__number step-list__number--green",children:"1"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"GitHub (куплений Microsoft у 2018)"}),e.jsx("p",{className:"step-list__text",children:"Rails-моноліт з 2008 — досі в ядрі платформи"})]})]}),e.jsxs("div",{className:"step-list__item step-list__item--blue",children:[e.jsx("div",{className:"step-list__number step-list__number--blue",children:"2"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"Shopify — $8B+ платформа"}),e.jsx("p",{className:"step-list__text",children:"Мільйони магазинів на Rails"})]})]}),e.jsxs("div",{className:"step-list__item step-list__item--purple",children:[e.jsx("div",{className:"step-list__number step-list__number--purple",children:"3"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"Airbnb, Twitch, SoundCloud"}),e.jsx("p",{className:"step-list__text",children:"Стартували і масштабувались на Rails"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-md",style:{fontSize:"var(--fs-body-sm)"},children:"Два головних принципи Rails:"}),e.jsxs("div",{className:"info-card info-card--green mb-sm",children:[e.jsx("h3",{className:"info-card__title",children:"CoC — Convention over Configuration"}),e.jsx("p",{className:"info-card__text",children:"Rails знає, як організувати проєкт. Ти не витрачаєш час на налаштування — відразу пишеш бізнес-логіку."})]}),e.jsxs("div",{className:"info-card info-card--blue",children:[e.jsx("h3",{className:"info-card__title",children:"DRY — Don't Repeat Yourself"}),e.jsx("p",{className:"info-card__text",children:"Кожна частина логіки існує в одному місці. Зміна в одному місці — зміна скрізь."})]})]})]})]})})}function Zx(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:st,title:"Встановлення Rails",subtitle:"rails new — старт проєкту"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Передумови (маємо з попередніх лекцій):"}),e.jsx(d,{language:"bash",children:`# Перевіряємо Ruby
ruby -v   # >= 3.2

# Встановлюємо Rails
gem install rails

# Перевіряємо
rails -v  # Rails 8.x`}),e.jsx("p",{className:"text-secondary mt-md mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Створюємо перший проєкт:"}),e.jsx(d,{language:"bash",children:`# Новий додаток з SQLite (за замовчуванням)
rails new blog

# Або з PostgreSQL
rails new blog --database=postgresql

# Заходимо в папку
cd blog

# Запускаємо сервер
rails server    # або просто: rails s`})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"highlight-box highlight-box--blue mb-md",children:[e.jsx(it,{className:"highlight-box__icon"}),e.jsx("div",{children:e.jsxs("p",{className:"highlight-box__text",children:["Відкрий ",e.jsx("strong",{children:"http://localhost:3000"})," — побачиш стартову сторінку Rails 🎉"]})})]}),e.jsxs("div",{className:"info-card info-card--orange",children:[e.jsx("h3",{className:"info-card__title",children:"💡 Що відбулось?"}),e.jsxs("p",{className:"info-card__text",children:["Одна команда ",e.jsx("code",{children:"rails new"})," створила повноцінний проєкт: веб-сервер, базу даних, систему роутингу, шаблонізатор, asset pipeline — всe готово до роботи."]})]}),e.jsx(d,{language:"bash",children:`blog/
├── app/
│   ├── controllers/    # логіка запитів
│   ├── models/         # робота з БД
│   ├── views/          # HTML-шаблони
│   └── assets/         # CSS, JS, зображення
├── config/
│   ├── routes.rb       # всі URL-маршрути
│   └── database.yml    # налаштування БД
├── db/
│   └── migrate/        # версії схеми БД
├── public/             # статичні файли
├── test/               # тести
├── Gemfile             # залежності
└── Gemfile.lock`}),e.jsxs("div",{className:"info-card info-card--purple mt-sm",children:[e.jsx("h3",{className:"info-card__title",children:"🛑 SQLite vs PostgreSQL"}),e.jsx("p",{className:"info-card__text",children:"SQLite — ідеально для розробки (без налаштувань). PostgreSQL — для продакшну. В Rails 8 SQLite підтримується навіть у продакшні!"})]})]})]})]})})}function eg(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:Ph,title:"Структура проєкту",subtitle:"Де що живе — і чому саме там"}),e.jsxs("div",{className:"slide-grid slide-grid--3col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-caption)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"},children:"🏗 Ядро додатку"}),e.jsx("div",{className:"step-list",children:[{dir:"app/models/",desc:"Класи моделей (Ruby + AR)",color:"blue"},{dir:"app/controllers/",desc:"Контролери — логіка запитів",color:"blue"},{dir:"app/views/",desc:"Шаблони ERB — HTML сторінки",color:"blue"},{dir:"app/helpers/",desc:"Хелпери для views",color:"blue"}].map((s,t)=>e.jsx("div",{className:`step-list__item step-list__item--${s.color}`,children:e.jsxs("div",{className:"step-list__content",children:[e.jsx("code",{style:{fontSize:"var(--fs-caption)",color:"var(--accent-blue-text)"},children:s.dir}),e.jsx("p",{className:"step-list__text",children:s.desc})]})},t))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-caption)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"},children:"⚙️ Конфігурація"}),e.jsx("div",{className:"step-list",children:[{dir:"config/routes.rb",desc:"Усі URL-маршрути",color:"purple"},{dir:"config/database.yml",desc:"Налаштування БД",color:"purple"},{dir:"db/migrate/",desc:"Міграції — версії схеми",color:"purple"},{dir:"db/schema.rb",desc:"Поточна схема БД",color:"purple"}].map((s,t)=>e.jsx("div",{className:`step-list__item step-list__item--${s.color}`,children:e.jsxs("div",{className:"step-list__content",children:[e.jsx("code",{style:{fontSize:"var(--fs-caption)",color:"var(--accent-purple-text)"},children:s.dir}),e.jsx("p",{className:"step-list__text",children:s.desc})]})},t))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-caption)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"},children:"📦 Інше"}),e.jsx("div",{className:"step-list",children:[{dir:"Gemfile",desc:"Залежності (як package.json)",color:"green"},{dir:"app/assets/",desc:"CSS, JS, зображення",color:"green"},{dir:"public/",desc:"Статичні файли",color:"green"},{dir:"test/ / spec/",desc:"Тести",color:"green"}].map((s,t)=>e.jsx("div",{className:`step-list__item step-list__item--${s.color}`,children:e.jsxs("div",{className:"step-list__content",children:[e.jsx("code",{style:{fontSize:"var(--fs-caption)",color:"var(--accent-green-text)"},children:s.dir}),e.jsx("p",{className:"step-list__text",children:s.desc})]})},t))})]})]}),e.jsxs("div",{className:"highlight-box highlight-box--yellow mt-md",children:[e.jsx(V,{className:"highlight-box__icon"}),e.jsxs("p",{className:"highlight-box__text",children:[e.jsx("strong",{children:"Конвенція:"})," Rails знає, де шукати контролер для моделі ",e.jsx("code",{children:"Post"})," — це ",e.jsx("code",{children:"app/controllers/posts_controller.rb"}),", а view — ",e.jsx("code",{children:"app/views/posts/index.html.erb"}),". Ніяких налаштувань!"]})]})]})})}function sg(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:_e,title:"MVC-архітектура",subtitle:"Model — View — Controller"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx("div",{children:e.jsxs("div",{className:"step-list",children:[e.jsxs("div",{className:"step-list__item step-list__item--blue",children:[e.jsx("div",{className:"step-list__number step-list__number--blue",children:"1"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"Браузер → Router"}),e.jsx("p",{className:"step-list__text",children:"GET /posts надходить до routes.rb"})]})]}),e.jsxs("div",{className:"step-list__item step-list__item--purple",children:[e.jsx("div",{className:"step-list__number step-list__number--purple",children:"2"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"Router → Controller"}),e.jsx("p",{className:"step-list__text",children:"routes.rb визначає: викликати PostsController#index"})]})]}),e.jsxs("div",{className:"step-list__item step-list__item--green",children:[e.jsx("div",{className:"step-list__number step-list__number--green",children:"3"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"Controller → Model"}),e.jsx("p",{className:"step-list__text",children:"PostsController#index звертається до моделі — Post.all"})]})]}),e.jsxs("div",{className:"step-list__item step-list__item--orange",children:[e.jsx("div",{className:"step-list__number step-list__number--orange",children:"4"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"Model → View → Браузер"}),e.jsx("p",{className:"step-list__text",children:"Модель повертає дані → контролер передає у index.html.erb → браузер отримує HTML"})]})]})]})}),e.jsxs("div",{children:[e.jsxs("div",{className:"info-card info-card--blue mb-sm",children:[e.jsxs("h3",{className:"info-card__title",children:[e.jsx(le,{style:{display:"inline",width:16,height:16,marginRight:6}}),"Model"]}),e.jsxs("p",{className:"info-card__text",children:["Бізнес-логіка + робота з БД. Успадковує ",e.jsx("code",{children:"ApplicationRecord"}),". Знає про таблиці, зв'язки, валідації."]})]}),e.jsxs("div",{className:"info-card info-card--purple mb-sm",children:[e.jsxs("h3",{className:"info-card__title",children:[e.jsx(Na,{style:{display:"inline",width:16,height:16,marginRight:6}}),"Controller"]}),e.jsx("p",{className:"info-card__text",children:"Диригент оркестру. Отримує запит, питає Model за даними, передає у View. Логіки — мінімум."})]}),e.jsxs("div",{className:"info-card info-card--green",children:[e.jsxs("h3",{className:"info-card__title",children:[e.jsx(ei,{style:{display:"inline",width:16,height:16,marginRight:6}}),"View"]}),e.jsx("p",{className:"info-card__text",children:"ERB-шаблони — HTML з вбудованим Ruby. Тільки відображення, жодної бізнес-логіки."})]})]})]})]})})}function tg(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:V,title:"Scaffold — магія Rails",subtitle:"Повний CRUD за одну команду"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Одна команда генерує все:"}),e.jsx(d,{language:"bash",children:`rails generate scaffold Post \\
  title:string \\
  body:text

# Що створюється:
# ✅ app/models/post.rb
# ✅ app/controllers/posts_controller.rb
# ✅ app/views/posts/ (6 шаблонів!)
# ✅ db/migrate/..._create_posts.rb
# ✅ config/routes.rb (resources :posts)
# ✅ test/...`}),e.jsx("p",{className:"text-secondary mt-md mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Запускаємо міграцію та сервер:"}),e.jsx(d,{language:"bash",children:`rails db:migrate
rails server`}),e.jsxs("div",{className:"highlight-box highlight-box--green mt-sm",children:[e.jsx(it,{className:"highlight-box__icon"}),e.jsxs("p",{className:"highlight-box__text",children:[e.jsx("strong",{children:"http://localhost:3000/posts"})," — повноцінний блог!"]})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Що ми отримали автоматично:"}),e.jsx("div",{className:"step-list",children:[{label:"GET /posts",desc:"Список усіх постів",color:"blue"},{label:"GET /posts/new",desc:"Форма створення",color:"green"},{label:"POST /posts",desc:"Збереження нового поста",color:"green"},{label:"GET /posts/:id",desc:"Сторінка одного поста",color:"purple"},{label:"GET /posts/:id/edit",desc:"Форма редагування",color:"orange"},{label:"PATCH /posts/:id",desc:"Оновлення поста",color:"orange"},{label:"DELETE /posts/:id",desc:"Видалення поста",color:"red"}].map((s,t)=>e.jsx("div",{className:`step-list__item step-list__item--${s.color}`,style:{padding:"0.4rem 0.75rem"},children:e.jsxs("div",{className:"step-list__content",children:[e.jsx("code",{style:{fontSize:"var(--fs-caption)",color:`var(--accent-${s.color}-text)`},children:s.label}),e.jsx("p",{className:"step-list__text",style:{fontSize:"var(--fs-caption)"},children:s.desc})]})},t))})]})]})]})})}function lg(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:Na,title:"Згенерований контролер",subtitle:"Що всередині posts_controller.rb"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Rails генерує готовий контролер:"}),e.jsx(d,{language:"ruby",children:`class PostsController < ApplicationController
  before_action :set_post, only: %i[show edit update destroy]

  def index
    @posts = Post.all
  end

  def show; end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to @post, notice: "Пост створено!"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit; end

  def update
    if @post.update(post_params)
      redirect_to @post, notice: "Пост оновлено!"
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
    redirect_to posts_url, notice: "Пост видалено."
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :body)
  end
end`})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"info-card info-card--blue mb-sm",children:[e.jsx("h3",{className:"info-card__title",children:"before_action"}),e.jsxs("p",{className:"info-card__text",children:["Виконується перед вказаними діями. Тут — знаходить пост по ",e.jsx("code",{children:"params[:id]"})," і зберігає в ",e.jsx("code",{children:"@post"}),"."]})]}),e.jsxs("div",{className:"info-card info-card--purple mb-sm",children:[e.jsx("h3",{className:"info-card__title",children:"Змінні з @ — передаються у View"}),e.jsxs("p",{className:"info-card__text",children:[e.jsx("code",{children:"@posts"})," у контролері автоматично доступна в ",e.jsx("code",{children:"index.html.erb"}),". Магія Rails!"]})]}),e.jsxs("div",{className:"info-card info-card--green mb-sm",children:[e.jsx("h3",{className:"info-card__title",children:"Strong Parameters"}),e.jsxs("p",{className:"info-card__text",children:[e.jsx("code",{children:"post_params"})," — захист від масового присвоєння. Дозволяємо тільки ті поля, які очікуємо."]})]}),e.jsxs("div",{className:"info-card info-card--orange",children:[e.jsx("h3",{className:"info-card__title",children:"redirect_to vs render"}),e.jsxs("p",{className:"info-card__text",children:[e.jsx("code",{children:"redirect_to"})," — новий HTTP-запит після успішної дії. Приймає об'єкт моделі, path- або url-хелпер:"]}),e.jsxs("p",{className:"info-card__text",style:{marginTop:"0.4rem"},children:[e.jsx("code",{children:"redirect_to @post"})," → show",e.jsx("br",{}),e.jsx("code",{children:"redirect_to posts_path"})," → index",e.jsx("br",{}),e.jsx("code",{children:"redirect_to posts_url"})," → index (повний URL)"]}),e.jsxs("p",{className:"info-card__text",style:{marginTop:"0.4rem"},children:[e.jsx("code",{children:"render"})," — рендерить шаблон у поточному запиті, зберігаючи ",e.jsx("code",{children:"@post"})," з помилками валідації. Використовується коли дія не вдалась."]})]})]})]})]})})}function ng(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:au,title:"Маршрути — routes.rb",subtitle:"rails routes — дивимось що є"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Один рядок коду — вісім маршрутів:"}),e.jsx(d,{language:"ruby",children:`# config/routes.rb
Rails.application.routes.draw do
  resources :posts
  root "posts#index"
end`}),e.jsx("p",{className:"text-secondary mt-md mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Переглядаємо всі маршрути:"}),e.jsx(d,{language:"bash",children:`rails routes

# Або фільтруємо:
rails routes -g posts

# Результат:
#  Prefix  Verb   URI Pattern           Controller#Action
#  posts   GET    /posts                posts#index
#          POST   /posts                posts#create
# new_post GET    /posts/new            posts#new
# edit_post GET   /posts/:id/edit       posts#edit
#  post    GET    /posts/:id            posts#show
#          PATCH  /posts/:id            posts#update
#          PUT    /posts/:id            posts#update
#          DELETE /posts/:id            posts#destroy`})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Використання маршрутів у коді:"}),e.jsx(d,{language:"erb",children:`<%# В шаблонах ERB %>
<%= link_to "Всі пости", posts_path %>
<%= link_to "Новий пост", new_post_path %>
<%= link_to "Редагувати", edit_post_path(@post) %>
<%= link_to "Переглянути", post_path(@post) %>

<%# Або коротше %>
<%= link_to "Переглянути", @post %>`}),e.jsxs("div",{className:"highlight-box highlight-box--blue mt-md",children:[e.jsx(V,{className:"highlight-box__icon"}),e.jsxs("p",{className:"highlight-box__text",children:["Rails автоматично генерує ",e.jsx("strong",{children:"path-хелпери"}),": ",e.jsx("code",{children:"posts_path"}),", ",e.jsx("code",{children:"post_path(@post)"}),", ",e.jsx("code",{children:"new_post_path"})," тощо. Ніяких URL хардкодити не треба!"]})]}),e.jsxs("div",{className:"info-card info-card--purple mt-sm",children:[e.jsx("h3",{className:"info-card__title",children:"root — головна сторінка"}),e.jsxs("p",{className:"info-card__text",children:[e.jsx("code",{children:'root "posts#index"'})," → GET / обробляє ",e.jsx("code",{children:"PostsController#index"})]})]})]})]})]})})}function ig(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ei,title:"View — ERB-шаблони",subtitle:"HTML + Ruby = ERB"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:e.jsx("code",{children:"app/views/posts/index.html.erb"})}),e.jsx(d,{language:"erb",children:`<h1>Пости блогу</h1>

<%# Цикл по всіх постах (@posts з контролера) %>
<% @posts.each do |post| %>
  <article>
    <h2><%= post.title %></h2>
    <p><%= post.body %></p>

    <%# Посилання на сторінку поста %>
    <%= link_to "Читати", post %>

    <%# Посилання на редагування %>
    <%= link_to "Редагувати", edit_post_path(post) %>
  </article>
<% end %>

<%# Кнопка "Новий пост" %>
<%= link_to "Новий пост", new_post_path %>`})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"info-card info-card--green mb-sm",children:[e.jsxs("h3",{className:"info-card__title",children:[e.jsx("code",{children:"<% %>"})," — виконати Ruby"]}),e.jsx("p",{className:"info-card__text",children:"Код виконується, але нічого не виводиться. Для циклів, умов, присвоювань."})]}),e.jsxs("div",{className:"info-card info-card--blue mb-sm",children:[e.jsxs("h3",{className:"info-card__title",children:[e.jsx("code",{children:"<%= %>"})," — вивести результат"]}),e.jsx("p",{className:"info-card__text",children:"Результат виразу вставляється в HTML. Rails автоматично екранує небезпечні символи (XSS-захист)."})]}),e.jsxs("div",{className:"info-card info-card--purple mb-sm",children:[e.jsx("h3",{className:"info-card__title",children:"Layout — спільна обгортка"}),e.jsxs("p",{className:"info-card__text",children:[e.jsx("code",{children:"app/views/layouts/application.html.erb"})," — шаблон, де є ",e.jsx("code",{children:"<%= yield %>"}),". Всі сторінки рендеряться всередині layout."]})]}),e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Типи тегів ERB:"}),e.jsx(d,{language:"erb",children:`<% ruby_code %>       <%# виконати %>
<%= ruby_expr %>      <%# вивести %>
<%# коментар %>       <%# ігнорується %>`})]})]})]})})}function rg(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:le,title:"Model — Active Record",subtitle:"Ruby-об'єкти ↔ рядки таблиці"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:["Згенерована модель ",e.jsx("code",{children:"app/models/post.rb"}),":"]}),e.jsx(d,{language:"ruby",children:`class Post < ApplicationRecord
end
# Це ВСЕ, що потрібно!
# Решту знає Active Record автоматично:
# - таблиця "posts" у БД
# - поля title, body, created_at, updated_at
# - CRUD-методи вже є`}),e.jsx("p",{className:"text-secondary mt-md mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Міграція що створює таблицю:"}),e.jsx(d,{language:"ruby",children:`class CreatePosts < ActiveRecord::Migration[8.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.timestamps  # created_at, updated_at
    end
  end
end`})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Active Record в дії (rails console):"}),e.jsx(d,{language:"ruby",children:`# Створення
post = Post.create(
  title: "Перший пост",
  body: "Hello, Rails!"
)

# Читання
Post.all          # всі пости
Post.find(1)      # по id
Post.first        # перший
Post.last         # останній
Post.where(title: "Привіт")

# Оновлення
post.update(title: "Новий заголовок")

# Видалення
post.destroy

# Кількість
Post.count`}),e.jsxs("div",{className:"highlight-box highlight-box--green mt-sm",children:[e.jsx(Y,{className:"highlight-box__icon"}),e.jsxs("p",{className:"highlight-box__text",children:[e.jsx("strong",{children:"Жодного SQL!"})," Active Record перетворює Ruby-методи на ефективні SQL-запити автоматично."]})]})]})]})]})})}function ag(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:st,title:"Rails Console",subtitle:"Інтерактивна оболонка — найкращий друг розробника"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Запускаємо та досліджуємо:"}),e.jsx(d,{language:"bash",children:`# Запуск консолі
rails console    # або: rails c

# Sandbox — зміни не збережуться
rails console --sandbox`}),e.jsx("p",{className:"text-secondary mt-md mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Практика в консолі:"}),e.jsx(d,{language:"ruby",children:`# Створюємо пости
Post.create(title: "Rails — це магія", body: "Переконаємось сьогодні")
Post.create(title: "MVC — просто", body: "Model-View-Controller")
Post.create(title: "Scaffold вражає", body: "CRUD за 1 команду!")

# Дивимось що є
Post.all
Post.count      # => 3
Post.first.title  # => "Rails — це магія"

# Знаходимо та змінюємо
post = Post.find(2)
post.update(title: "MVC — дуже просто!")

# Перевіряємо
Post.find(2).title  # => "MVC — дуже просто!"

# Видаляємо
Post.last.destroy
Post.count  # => 2`})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"highlight-box highlight-box--blue mb-md",children:[e.jsx(st,{className:"highlight-box__icon"}),e.jsx("p",{className:"highlight-box__text",children:"Rails console — це IRB, але з повним доступом до твого додатку, моделей і бази даних. Незамінний для дебагу та швидкого тестування."})]}),e.jsxs("div",{className:"step-list",children:[e.jsx("div",{className:"step-list__item step-list__item--green",children:e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"reload!"}),e.jsx("p",{className:"step-list__text",children:"Перезавантажує код без перезапуску консолі"})]})}),e.jsx("div",{className:"step-list__item step-list__item--blue",children:e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"app.get('/posts')"}),e.jsx("p",{className:"step-list__text",children:"Симулює HTTP-запит прямо з консолі"})]})}),e.jsx("div",{className:"step-list__item step-list__item--purple",children:e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"helper.link_to"}),e.jsx("p",{className:"step-list__text",children:"Тестує хелпери прямо в консолі"})]})})]}),e.jsxs("div",{className:"info-card info-card--orange mt-sm",children:[e.jsx("h3",{className:"info-card__title",children:"💡 Про середовища"}),e.jsxs("p",{className:"info-card__text",children:["Rails має три середовища: ",e.jsx("code",{children:"development"})," (за замовчуванням), ",e.jsx("code",{children:"test"})," та ",e.jsx("code",{children:"production"}),". Консоль запускається в development."]})]})]})]})]})})}function cg(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:He,title:"Генератори Rails",subtitle:"rails generate — автоматизація рутини"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Основні генератори:"}),e.jsx(d,{language:"bash",children:`# Scaffold — повний CRUD
rails g scaffold Post title:string body:text

# Тільки модель
rails g model Comment author:string body:text post:references

# Тільки контролер
rails g controller Pages home about contact

# Тільки міграція
rails g migration AddPublishedToPosts published:boolean

# Переглянути що генерує (без створення)
rails g scaffold Comment --pretend`}),e.jsx("p",{className:"text-secondary mt-md mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Скасувати генерацію:"}),e.jsx(d,{language:"bash",children:`# destroy — видаляє все що generate створив
rails destroy scaffold Post
rails d model Comment  # "d" — скорочення`})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Типи полів для міграцій:"}),e.jsx("div",{className:"step-list",children:[{type:"string",desc:"Короткий текст (до 255 символів)",color:"blue"},{type:"text",desc:"Довгий текст (без обмеження)",color:"blue"},{type:"integer",desc:"Ціле число",color:"green"},{type:"float / decimal",desc:"Дробове число",color:"green"},{type:"boolean",desc:"true / false",color:"purple"},{type:"datetime",desc:"Дата і час",color:"purple"},{type:"references",desc:"Зовнішній ключ (belongs_to)",color:"orange"}].map((s,t)=>e.jsx("div",{className:`step-list__item step-list__item--${s.color}`,style:{padding:"0.35rem 0.75rem"},children:e.jsxs("div",{className:"step-list__content",children:[e.jsx("code",{style:{fontSize:"var(--fs-caption)",color:`var(--accent-${s.color}-text)`},children:s.type}),e.jsx("p",{className:"step-list__text",style:{fontSize:"var(--fs-caption)"},children:s.desc})]})},t))})]})]})]})})}function og(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ze,title:"Міграції та Seeds",subtitle:"Керуємо схемою бази даних"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Основні команди:"}),e.jsx(d,{language:"bash",children:`# Застосувати всі незастосовані міграції
rails db:migrate

# Показати статус міграцій
rails db:migrate:status

# Відкотити останню міграцію
rails db:rollback

# Відкотити N міграцій
rails db:rollback STEP=3

# Скинути і заново створити БД
rails db:drop db:create db:migrate

# Скорочення
rails db:reset  # = drop + create + migrate + seed`}),e.jsx("p",{className:"text-secondary mt-md mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Додаємо поле до існуючої таблиці:"}),e.jsx(d,{language:"bash",children:`rails g migration AddPublishedToPosts published:boolean:index
rails db:migrate`})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:["Seeds — початкові дані (",e.jsx("code",{children:"db/seeds.rb"}),"):"]}),e.jsx(d,{language:"ruby",children:`# db/seeds.rb
puts "Створюємо тестові дані..."

# Очищаємо (для повторного запуску)
Post.destroy_all

# Створюємо пости
10.times do |i|
  Post.create!(
    title: "Пост #{i + 1}: #{Faker::Book.title}",
    body: Faker::Lorem.paragraphs(number: 3).join("

")
  )
end

puts "Готово! Створено #{Post.count} постів"

# Запуск:
# rails db:seed`}),e.jsxs("div",{className:"highlight-box highlight-box--purple mt-sm",children:[e.jsx(He,{className:"highlight-box__icon"}),e.jsxs("p",{className:"highlight-box__text",children:["Gem ",e.jsx("strong",{children:"faker"})," генерує реалістичні тестові дані — імена, тексти, адреси. Додай до Gemfile: ",e.jsx("code",{children:'gem "faker", group: :development'})]})]})]})]})]})})}function dg(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:wa,title:"Практика: Блог за 30 хвилин",subtitle:"WOW-ефект — від нуля до живого додатку"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Покроковий план:"}),e.jsxs("div",{className:"step-list",children:[e.jsxs("div",{className:"step-list__item step-list__item--green",children:[e.jsx("div",{className:"step-list__number step-list__number--green",children:"1"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"Створюємо проєкт (2 хв)"}),e.jsx(d,{language:"bash",style:{marginTop:"0.25rem"},children:"rails new blog && cd blog"})]})]}),e.jsxs("div",{className:"step-list__item step-list__item--blue",children:[e.jsx("div",{className:"step-list__number step-list__number--blue",children:"2"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"Scaffold для Post (1 хв)"}),e.jsx(d,{language:"bash",style:{marginTop:"0.25rem"},children:`rails g scaffold Post title:string body:text author:string
rails db:migrate`})]})]}),e.jsxs("div",{className:"step-list__item step-list__item--purple",children:[e.jsx("div",{className:"step-list__number step-list__number--purple",children:"3"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"Встановлюємо root (1 хв)"}),e.jsx(d,{language:"ruby",style:{marginTop:"0.25rem"},children:`# config/routes.rb
root "posts#index"`})]})]}),e.jsxs("div",{className:"step-list__item step-list__item--orange",children:[e.jsx("div",{className:"step-list__number step-list__number--orange",children:"4"}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"Додаємо дані та запускаємо"}),e.jsx(d,{language:"bash",style:{marginTop:"0.25rem"},children:`rails db:seed
rails server`})]})]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"highlight-box highlight-box--green mb-md",children:[e.jsx(Bs,{className:"highlight-box__icon"}),e.jsxs("p",{className:"highlight-box__text",children:[e.jsx("strong",{children:"Результат:"})," Повноцінний блог з можливістю створювати, редагувати, видаляти та переглядати пости. Без жодного рядка SQL. За 30 хвилин!"]})]}),e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Додаємо мінімальну валідацію:"}),e.jsx(d,{language:"ruby",children:`# app/models/post.rb
class Post < ApplicationRecord
  validates :title, presence: true,
                    length: { minimum: 5 }
  validates :body, presence: true
  validates :author, presence: true
end`}),e.jsxs("div",{className:"info-card info-card--blue mt-sm",children:[e.jsx("h3",{className:"info-card__title",children:"Що вивчаємо далі (Лекція 5)"}),e.jsx("p",{className:"info-card__text",children:"Маршрутизацію та контролери в деталях — nested routes, before_action, flash messages, respond_to."})]})]})]})]})})}function ug(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ct,title:"CoC у дії",subtitle:"Конвенція важливіша за конфігурацію"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:["Rails ",e.jsx("strong",{children:"знає"})," ці речі автоматично:"]}),e.jsx("div",{className:"step-list",children:[{label:"Модель Post",arrow:"→",result:"таблиця posts",color:"blue"},{label:"Модель BlogPost",arrow:"→",result:"таблиця blog_posts",color:"blue"},{label:"PostsController",arrow:"→",result:"posts_controller.rb",color:"purple"},{label:"posts#index",arrow:"→",result:"views/posts/index.html.erb",color:"purple"},{label:"resources :posts",arrow:"→",result:"7 RESTful маршрутів",color:"green"},{label:"Post.find(1)",arrow:"→",result:"SELECT * FROM posts WHERE id=1",color:"green"}].map((s,t)=>e.jsx("div",{className:`step-list__item step-list__item--${s.color}`,style:{padding:"0.4rem 0.75rem"},children:e.jsxs("div",{className:"step-list__content",style:{display:"flex",alignItems:"center",gap:"0.5rem",flexWrap:"wrap"},children:[e.jsx("code",{style:{fontSize:"var(--fs-caption)",color:`var(--accent-${s.color}-text)`},children:s.label}),e.jsx(Is,{style:{width:12,height:12,opacity:.5,flexShrink:0}}),e.jsx("span",{style:{fontSize:"var(--fs-caption)",color:"var(--text-secondary)"},children:s.result})]})},t))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"info-card info-card--blue mb-sm",children:[e.jsx("h3",{className:"info-card__title",children:"Без Rails (Java/Spring)"}),e.jsx("p",{className:"info-card__text",children:"Потрібно вказати: назву таблиці, маппінг полів, XML або анотації конфігурації, реєстрацію бінів, налаштування ORM..."})]}),e.jsxs("div",{className:"info-card info-card--green mb-sm",children:[e.jsx("h3",{className:"info-card__title",children:"З Rails"}),e.jsxs("p",{className:"info-card__text",children:["Просто назви клас ",e.jsx("code",{children:"Post"})," і успадкуй від ",e.jsx("code",{children:"ApplicationRecord"}),". Rails зробить решту."]})]}),e.jsxs("div",{className:"highlight-box highlight-box--orange",children:[e.jsx(li,{className:"highlight-box__icon"}),e.jsxs("p",{className:"highlight-box__text",children:[e.jsx("em",{children:'"Rails зробив мене у 10 разів продуктивнішим. Не тому що я став кращим — а тому що фреймворк перестав заважати."'}),e.jsx("br",{}),e.jsx("small",{style:{opacity:.7},children:"— типовий Rails-розробник після місяця на Java"})]})]})]})]})]})})}function mg(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ct,title:"CoC: що якщо порушити?",subtitle:"Звідки Rails знає — і що буде якщо не слідувати"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Три головні домовленості — і що доведеться писати руками:"}),e.jsxs("div",{className:"info-card info-card--blue mb-sm",children:[e.jsx("h3",{className:"info-card__title",children:"1. Модель → таблиця"}),e.jsxs("p",{className:"info-card__text",children:[e.jsx("code",{children:"Post"})," → таблиця ",e.jsx("code",{children:"posts"})," (автоматично)",e.jsx("br",{}),"Але якщо назвати ",e.jsx("code",{children:"PostModel"}),":"]}),e.jsx(d,{language:"ruby",children:`class PostModel < ApplicationRecord
    # Rails шукає таблицю "post_models"
    # Треба вказати вручну:
    self.table_name = "posts"
  end`})]}),e.jsxs("div",{className:"info-card info-card--purple mb-sm",children:[e.jsx("h3",{className:"info-card__title",children:"2. Контролер → завжди множина"}),e.jsxs("p",{className:"info-card__text",children:[e.jsx("code",{children:"PostsController"})," → норма",e.jsx("br",{}),"Але якщо назвати ",e.jsx("code",{children:"PostController"})," (без s):"]}),e.jsx(d,{language:"ruby",children:`# config/routes.rb
  # треба явно вказати контролер:
  resources :posts, controller: 'post'`})]}),e.jsxs("div",{className:"info-card info-card--green",children:[e.jsx("h3",{className:"info-card__title",children:"3. View → ім'я контролера + ім'я методу"}),e.jsxs("p",{className:"info-card__text",children:[e.jsx("code",{children:"posts#index"})," → шукає ",e.jsx("code",{children:"app/views/posts/index.html.erb"}),e.jsx("br",{}),"Якщо папка ",e.jsx("code",{children:"post/"})," або метод називається інакше:"]}),e.jsx(d,{language:"ruby",children:`def index
    @posts = Post.all
    # треба вказати шаблон явно:
    render 'post/all'
  end`})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"info-card info-card--orange mb-sm",children:[e.jsx("h3",{className:"info-card__title",children:"Звідки Rails знає ці домовленості?"}),e.jsx("p",{className:"info-card__text",children:"Все це вшито в сам фреймворк і задокументовано в офіційних гайдах. Три ключові механізми:"})]}),e.jsxs("div",{className:"step-list",children:[e.jsx("div",{className:"step-list__item step-list__item--blue",children:e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"ActiveSupport::Inflector"}),e.jsxs("p",{className:"step-list__text",children:["Відповідає за плюралізацію: ",e.jsx("code",{children:"Post"})," → ",e.jsx("code",{children:"posts"}),", ",e.jsx("code",{children:"Person"})," → ",e.jsx("code",{children:"people"}),", ",e.jsx("code",{children:"Sheep"})," → ",e.jsx("code",{children:"sheep"}),". Знає англійські винятки."]})]})}),e.jsx("div",{className:"step-list__item step-list__item--purple",children:e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"Naming Conventions"}),e.jsxs("p",{className:"step-list__text",children:["Контролери — завжди множина (",e.jsx("code",{children:"PostsController"}),"). Моделі — завжди однина (",e.jsx("code",{children:"Post"}),"). Таблиці — завжди множина (",e.jsx("code",{children:"posts"}),")."]})]})}),e.jsx("div",{className:"step-list__item step-list__item--green",children:e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"Implicit Render"}),e.jsxs("p",{className:"step-list__text",children:["Якщо метод контролера не викликає ",e.jsx("code",{children:"render"})," явно — Rails сам шукає шаблон за схемою ",e.jsx("code",{children:"views/контролер/метод.html.erb"}),"."]})]})}),e.jsx("div",{className:"step-list__item step-list__item--orange",children:e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:"Де це прописано?"}),e.jsxs("p",{className:"step-list__text",children:[e.jsx("strong",{children:"guides.rubyonrails.org"})," → Active Record Basics → Naming Conventions. Повна таблиця всіх домовленостей."]})]})})]})]})]})]})})}function pg(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:Y,title:"Підсумок лекції",subtitle:"Що ми дізналися сьогодні"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx("div",{children:e.jsx("div",{className:"step-list",children:[{title:"Rails — фреймворк для швидкої розробки",text:"Convention over Configuration, DRY — два принципи що змінюють все",color:"green"},{title:"rails new → готовий проєкт",text:"Структура, сервер, БД, маршрутизація — з коробки",color:"blue"},{title:"MVC: три ролі, чітке розділення",text:"Model — дані, Controller — логіка, View — відображення",color:"purple"},{title:"Scaffold — CRUD за одну команду",text:"7 маршрутів, контролер, 6 шаблонів, модель, міграція",color:"orange"},{title:"Active Record — SQL без SQL",text:"Post.all, Post.find(1), post.save — Ruby замість запитів",color:"cyan"}].map((s,t)=>e.jsxs("div",{className:`step-list__item step-list__item--${s.color}`,children:[e.jsx("div",{className:`step-list__number step-list__number--${s.color}`,children:t+1}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:s.title}),e.jsx("p",{className:"step-list__text",children:s.text})]})]},t))})}),e.jsxs("div",{children:[e.jsxs("div",{className:"info-card info-card--blue mb-md",children:[e.jsx("h3",{className:"info-card__title",children:"📚 Корисні ресурси"}),e.jsxs("p",{className:"info-card__text",children:[e.jsx("strong",{children:"guides.rubyonrails.org"})," — офіційні гайди (найкраща документація фреймворку)",e.jsx("p",{}),e.jsx("strong",{children:"api.rubyonrails.org"})," — повний API",e.jsx("p",{}),e.jsx("strong",{children:"gorails.com"})," — відеоскрінкасти"]})]}),e.jsxs("div",{className:"highlight-box highlight-box--purple",children:[e.jsx(Bs,{className:"highlight-box__icon"}),e.jsxs("p",{className:"highlight-box__text",children:[e.jsx("strong",{children:"Наступна лекція:"})," Маршрутизація та контролери — RESTful підхід, nested routes, before_action, strong parameters, flash messages."]})]})]})]})]})})}const hg=[{id:1,title:"Титульний слайд",component:Kx},{id:2,title:"Мета заняття",component:Jx},{id:3,title:"Що таке Rails?",component:Xx},{id:4,title:"Встановлення Rails",component:Zx},{id:5,title:"Структура проєкту",component:eg},{id:6,title:"MVC-архітектура",component:sg},{id:7,title:"Scaffold — магія Rails",component:tg},{id:8,title:"Згенерований контролер",component:lg},{id:9,title:"Маршрути — routes.rb",component:ng},{id:10,title:"View — ERB-шаблони",component:ig},{id:11,title:"Model — Active Record",component:rg},{id:12,title:"Rails Console",component:ag},{id:13,title:"Генератори Rails",component:cg},{id:14,title:"Міграції та Seeds",component:og},{id:15,title:"Практика: Блог за 30 хв",component:dg},{id:16,title:"Convention vs Config",component:ug},{id:17,title:"CoC: що якщо порушити?",component:mg},{id:18,title:"Підсумок",component:pg}];function fg(){return e.jsx(Hs,{slides:hg})}const xg=[{id:1,title:"Титульний слайд",component:jg},{id:2,title:"Мета заняття",component:_g},{id:3,title:"RuboCop — стиль коду",component:yg},{id:4,title:"Що таке маршрутизація?",component:vg},{id:5,title:"HTTP-методи та REST",component:Ng},{id:6,title:"resources — 7 маршрутів",component:bg},{id:7,title:"Вкладені маршрути",component:kg},{id:8,title:"member / collection",component:wg},{id:9,title:"namespace та concern",component:Sg},{id:10,title:"Контролер — структура",component:Rg},{id:11,title:"params — параметри запиту",component:Eg},{id:12,title:"before_action",component:Cg},{id:13,title:"Strong Parameters",component:Ag},{id:14,title:"render vs redirect_to",component:Tg},{id:15,title:"Flash-повідомлення",component:Pg},{id:16,title:"respond_to: HTML та JSON",component:zg},{id:17,title:"Підсумок",component:Lg}];function gg(){return e.jsx(Hs,{slides:xg})}function jg(){return e.jsxs("div",{className:"slide slide--centered slide--gradient-blue-purple",children:[e.jsx("div",{className:"title-slide__icon-wrapper",children:e.jsx(au,{})}),e.jsx("h1",{className:"title-slide__title",children:"Маршрутизація та контролери"}),e.jsx("h2",{className:"title-slide__subtitle",children:"Routing & Controllers"}),e.jsx("p",{className:"title-slide__english",children:"RESTful підхід, nested routes, before_action, strong parameters"}),e.jsx("div",{className:"title-slide__badge",children:e.jsx("p",{children:"Лекція 5 · Ruby on Rails"})})]})}function _g(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ns,title:"Мета заняття",subtitle:"Learning Objectives"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx(N,{icon:it,title:"REST та маршрутизація",description:"Зрозуміти RESTful підхід: чому URL — це ресурс, а HTTP-метод — це дія. resources, nested routes, member/collection",color:"blue",delay:1}),e.jsx(N,{icon:ct,title:"Контролери вручну",description:"Створити контролер Articles без scaffold: всі 7 CRUD-дій, params, render, redirect_to",color:"green",delay:2}),e.jsx(N,{icon:ce,title:"before_action та Strong Params",description:"DRY-принцип у контролері: уникнути дублювання коду та захистити додаток від масового призначення",color:"purple",delay:3}),e.jsx(N,{icon:V,title:"Flash та respond_to",description:"Сповіщати користувача про результат дії. Повертати HTML або JSON залежно від запиту",color:"orange",delay:4})]})]})})}function yg(){const s=[{color:"blue",cmd:"bundle exec rubocop",desc:"Перевірити весь проєкт"},{color:"green",cmd:"bundle exec rubocop app/",desc:"Перевірити конкретну папку"},{color:"orange",cmd:"bundle exec rubocop -a",desc:"Автовиправити безпечні порушення"},{color:"red",cmd:"bundle exec rubocop -A",desc:"Виправити всі (включно з небезпечними)"},{color:"purple",cmd:"bundle exec rubocop --only Style",desc:"Перевірити тільки один cop"}];return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:yf,title:"RuboCop — стиль коду",subtitle:"Linter & formatter built into Rails"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(F,{term:"RuboCop",desc:"Статичний аналізатор та форматер Ruby-коду. Перевіряє відповідність Ruby Style Guide — відступи, довжина рядків, пробіли, найменування та інше.",color:"blue"}),e.jsxs("div",{className:"info-card info-card--green",style:{marginTop:"0.75rem"},children:[e.jsx("h3",{className:"info-card__title",children:"🎁 rubocop-rails-omakase"}),e.jsxs("p",{className:"info-card__text",style:{marginBottom:"0.75rem"},children:["Починаючи з ",e.jsx("strong",{children:"Rails 8"}),", новий проєкт одразу містить gem",e.jsx("code",{children:" rubocop-rails-omakase"})," у Gemfile — конфігурація від ",e.jsx("strong",{children:"DHH"}),". «Omakase» (おまかせ) — японське «довірся шефу»: не витрачай час на налаштування."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("span",{className:"code-block__comment",children:"# Gemfile (генерується автоматично)"}),`
`,"group ",e.jsx("span",{className:"code-block__string",children:":development"})," ",e.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"  ","gem ",e.jsx("span",{className:"code-block__string",children:'"rubocop-rails-omakase"'}),", require: ",e.jsx("span",{className:"code-block__keyword",children:"false"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"end"})]})]}),e.jsxs("div",{className:"code-block",style:{marginTop:"0.75rem"},children:[e.jsx("span",{className:"code-block__comment",children:"# .rubocop.yml (також генерується)"}),`
`,"inherit_gem:",`
`,"  ","rubocop-rails-omakase: rubocop.yml"]}),e.jsxs("div",{className:"outlined-card outlined-card--blue",style:{marginTop:"0.75rem"},children:[e.jsxs("p",{style:{margin:0,fontSize:"0.85rem",color:"var(--text-secondary)"},children:[e.jsx("strong",{style:{color:"var(--accent-blue-text)"},children:"inherit_gem"})," — бере всі правила з gem-а як базові. У локальному ",e.jsx("code",{children:".rubocop.yml"})," можна лише перевизначити або вимкнути окремі:"]}),e.jsxs("div",{className:"code-block",style:{marginTop:"0.5rem",fontSize:"0.8rem"},children:[e.jsx("span",{className:"code-block__comment",children:"# вимкнути конкретне правило"}),`
`,"Style/StringLiterals:",`
`,"  ","Enabled: ",e.jsx("span",{className:"code-block__keyword",children:"false"})]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"info-card info-card--purple",style:{marginBottom:"0.75rem"},children:[e.jsx("h3",{className:"info-card__title",children:"⌨️ Основні команди"}),e.jsx("div",{className:"step-list",children:s.map((t,l)=>e.jsx("div",{className:`step-list__item step-list__item--${t.color}`,children:e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{style:{fontFamily:"monospace",fontSize:"0.82rem",color:"var(--text-primary)",margin:0},children:t.cmd}),e.jsx("p",{style:{fontSize:"0.82rem",color:"var(--text-muted)",margin:0},children:t.desc})]})},l))})]}),e.jsx(B,{color:"orange",title:"Типові порушення у Rails-коді",children:e.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[e.jsxs("span",{className:"code-block__comment",children:["# ❌ Довгий рядок (",">"," 120 символів)"]}),`
`,e.jsx("span",{className:"code-block__comment",children:"# ❌ Зайві пробіли в кінці рядка"}),`
`,e.jsx("span",{className:"code-block__comment",children:"# ❌ def без дужок з аргументами"}),`
`,e.jsx("span",{className:"code-block__comment",children:"# ❌ Подвійні лапки замість одинарних"}),`
`,e.jsx("span",{className:"code-block__comment",children:"# ❌ Відсутній порожній рядок після class"})]})})]})]})]})})}function vg(){const s=[{color:"blue",text:"Браузер надсилає GET /articles"},{color:"purple",text:"Router читає routes.rb"},{color:"green",text:"Викликає ArticlesController#index"},{color:"orange",text:"Контролер повертає відповідь"}];return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:it,title:"Що таке маршрутизація?",subtitle:"How Rails routes HTTP requests"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(F,{term:"Маршрутизатор (Router)",desc:"Компонент Rails, який отримує HTTP-запит і вирішує: який контролер і яку дію викликати. Налаштовується у файлі config/routes.rb.",color:"blue"}),e.jsx("div",{className:"step-list",style:{marginTop:"0.75rem"},children:s.map((t,l)=>e.jsxs("div",{className:`step-list__item step-list__item--${t.color}`,children:[e.jsx("div",{className:`step-list__number step-list__number--${t.color}`,children:l+1}),e.jsx("div",{className:"step-list__content",children:e.jsx("p",{className:"step-list__description",children:t.text})})]},l))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"info-card info-card--blue",style:{marginBottom:"0.75rem"},children:[e.jsx("h3",{className:"info-card__title",children:"📄 config/routes.rb"}),e.jsxs("div",{className:"code-block",children:[e.jsx("span",{className:"code-block__keyword",children:"Rails"}),".application.routes.draw ",e.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"  ","resources ",e.jsx("span",{className:"code-block__string",children:":articles"}),`
`,"  ","root ",e.jsx("span",{className:"code-block__string",children:"'articles#index'"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"end"})]})]}),e.jsxs("div",{className:"highlight-box highlight-box--purple",children:[e.jsx(ls,{className:"highlight-box__icon"}),e.jsxs("p",{className:"highlight-box__text",children:[e.jsx("strong",{children:"rake routes / rails routes"})," — переглянути всі маршрути додатку з префіксами, HTTP-методами та шляхами"]})]})]})]})]})})}function Ng(){const s=[{method:"GET",color:"blue",action:"Отримати дані",example:"GET /articles → список статей"},{method:"POST",color:"green",action:"Створити ресурс",example:"POST /articles → нова стаття"},{method:"PATCH",color:"orange",action:"Оновити частково",example:"PATCH /articles/1 → оновити"},{method:"PUT",color:"yellow",action:"Замінити ресурс",example:"PUT /articles/1 → повна заміна"},{method:"DELETE",color:"red",action:"Видалити ресурс",example:"DELETE /articles/1 → видалити"}];return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:Is,title:"HTTP-методи та REST",subtitle:"RESTful resource-oriented approach"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"info-card__text",style:{marginBottom:"0.75rem"},children:[e.jsx("strong",{children:"REST"})," (Representational State Transfer) — підхід, де URL описує ",e.jsx("em",{children:"ресурс"}),", а HTTP-метод описує ",e.jsx("em",{children:"дію"})," над ним. Rails побудований навколо цього принципу."]}),e.jsx("div",{className:"step-list",children:s.map((t,l)=>e.jsxs("div",{className:`step-list__item step-list__item--${t.color}`,children:[e.jsx("span",{className:`badge badge--solid-${t.color}`,style:{minWidth:70,textAlign:"center"},children:t.method}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",style:{margin:0},children:t.action}),e.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",margin:0},children:t.example})]})]},l))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"info-card info-card--green",style:{marginBottom:"0.75rem"},children:[e.jsx("h3",{className:"info-card__title",children:"💡 Ключова ідея REST"}),e.jsx("p",{className:"info-card__text",children:"URL — іменник (що?), HTTP-метод — дієслово (як?)."}),e.jsxs("div",{className:"code-block",style:{marginTop:"0.75rem"},children:[e.jsx("span",{className:"code-block__comment",children:"# НЕ-RESTful (старий стиль)"}),`
`,"GET /getArticles",`
`,"GET /deleteArticle?id=1",`

`,e.jsx("span",{className:"code-block__comment",children:"# RESTful (Rails-стиль)"}),`
`,"GET    /articles",`
`,"DELETE /articles/1"]})]}),e.jsxs("div",{className:"highlight-box highlight-box--blue",style:{marginBottom:"0.75rem"},children:[e.jsx(it,{className:"highlight-box__icon"}),e.jsxs("p",{className:"highlight-box__text",children:["HTML-форми підтримують лише GET і POST. Rails емулює PATCH/DELETE через приховане поле ",e.jsx("strong",{children:"_method"})]})]}),e.jsxs("div",{className:"highlight-box highlight-box--yellow",children:[e.jsx(Sa,{className:"highlight-box__icon"}),e.jsxs("p",{className:"highlight-box__text",children:[e.jsx("strong",{children:"PATCH vs PUT у Rails:"})," ",e.jsx("code",{children:"resources :articles"})," генерує маршрут ",e.jsx("strong",{children:"PATCH"})," для update. PUT також приймається як аліас, але PATCH — preferred з Rails 4+."]})]})]})]})]})})}function bg(){const s=[{verb:"GET",path:"/articles",action:"index",desc:"Список всіх статей",color:"blue"},{verb:"GET",path:"/articles/new",action:"new",desc:"Форма нової статті",color:"green"},{verb:"POST",path:"/articles",action:"create",desc:"Створити статтю",color:"green"},{verb:"GET",path:"/articles/:id",action:"show",desc:"Показати одну статтю",color:"blue"},{verb:"GET",path:"/articles/:id/edit",action:"edit",desc:"Форма редагування",color:"orange"},{verb:"PATCH",path:"/articles/:id",action:"update",desc:"Оновити статтю",color:"orange"},{verb:"DELETE",path:"/articles/:id",action:"destroy",desc:"Видалити статтю",color:"red"}];return e.jsx("div",{className:"slide slide--compact",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ls,title:"resources — 7 маршрутів",subtitle:"One line → full CRUD routing"}),e.jsx("div",{className:"info-card info-card--blue",style:{padding:"0.75rem 1rem",marginBottom:"0.75rem"},children:e.jsxs("div",{className:"code-block",style:{margin:0},children:["resources ",e.jsx("span",{className:"code-block__string",children:":articles"}),"  ",e.jsx("span",{className:"code-block__comment",children:"# одна лінія генерує 7 маршрутів"})]})}),e.jsxs("table",{className:"data-table",children:[e.jsx("thead",{className:"data-table__head",children:e.jsx("tr",{children:["HTTP метод","URL","Action","Призначення"].map(t=>e.jsx("th",{children:t},t))})}),e.jsx("tbody",{children:s.map((t,l)=>e.jsxs("tr",{className:`data-table__row data-table__row--${l%2===0?"even":"odd"}`,children:[e.jsx("td",{children:e.jsx("span",{className:`badge badge--solid-${t.color}`,style:{minWidth:60,textAlign:"center",fontSize:"0.75rem"},children:t.verb})}),e.jsx("td",{children:e.jsx("code",{children:t.path})}),e.jsx("td",{children:e.jsx("span",{className:`badge badge--${t.color}`,children:t.action})}),e.jsx("td",{children:t.desc})]},l))})]}),e.jsxs("div",{className:"slide-grid slide-grid--2col",style:{marginTop:"0.75rem"},children:[e.jsxs("div",{className:"highlight-box highlight-box--green",children:[e.jsx(V,{className:"highlight-box__icon"}),e.jsxs("p",{className:"highlight-box__text",children:[e.jsx("strong",{children:"Prefix-хелпери:"})," articles_path, new_article_path, edit_article_path(@article), article_path(@article) — замість хардкоду URL у шаблонах"]})]}),e.jsxs("div",{className:"info-card info-card--blue",style:{padding:"0.75rem 1rem"},children:[e.jsx("h3",{className:"info-card__title",children:"rails routes"}),e.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[e.jsx("span",{className:"code-block__comment",children:"# Всі маршрути"}),`
`,"rails routes",`

`,e.jsx("span",{className:"code-block__comment",children:"# Фільтр по контролеру"}),`
`,"rails routes -c articles",`

`,e.jsx("span",{className:"code-block__comment",children:"# Пошук по URL"}),`
`,"rails routes -g /articles"]})]})]}),e.jsxs("div",{className:"info-card info-card--orange",style:{padding:"0.75rem 1rem",marginTop:"0.75rem"},children:[e.jsx("h3",{className:"info-card__title",children:"Не потрібні всі 7?"}),e.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[e.jsx("span",{className:"code-block__comment",children:"# Лише вказані"}),`
`,"resources ",e.jsx("span",{className:"code-block__string",children:":articles"}),", only: [",e.jsx("span",{className:"code-block__string",children:":index"}),", ",e.jsx("span",{className:"code-block__string",children:":show"}),"]",`

`,e.jsx("span",{className:"code-block__comment",children:"# Всі крім вказаних"}),`
`,"resources ",e.jsx("span",{className:"code-block__string",children:":articles"}),", except: [",e.jsx("span",{className:"code-block__string",children:":destroy"}),"]",`

`,e.jsx("span",{className:"code-block__comment",children:"# Або вручну"}),`
`,"get ",e.jsx("span",{className:"code-block__string",children:"'/articles'"}),", to: ",e.jsx("span",{className:"code-block__string",children:"'articles#index'"}),`
`,"post ",e.jsx("span",{className:"code-block__string",children:"'/articles'"}),", to: ",e.jsx("span",{className:"code-block__string",children:"'articles#create'"})]})]})]})})}function kg(){const s=[{color:"blue",path:"GET  /articles/:article_id/comments",action:"comments#index"},{color:"green",path:"POST /articles/:article_id/comments",action:"comments#create"},{color:"orange",path:"DELETE /articles/:article_id/comments/:id",action:"comments#destroy"}];return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:xs,title:"Вкладені маршрути",subtitle:"Nested routes — ієрархія ресурсів"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(F,{term:"Навіщо nested routes?",desc:"Коли ресурс логічно належить іншому ресурсу. Наприклад, коментар завжди належить статті: /articles/1/comments",color:"purple"}),e.jsxs("div",{className:"code-block",style:{marginTop:"0.75rem",marginBottom:"0.75rem"},children:[e.jsx("span",{className:"code-block__comment",children:"# routes.rb"}),`
`,"resources ",e.jsx("span",{className:"code-block__string",children:":articles"})," ",e.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"  ","resources ",e.jsx("span",{className:"code-block__string",children:":comments"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"end"})]}),e.jsx("div",{className:"step-list",children:s.map((t,l)=>e.jsx("div",{className:`step-list__item step-list__item--${t.color}`,children:e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{style:{fontFamily:"monospace",fontSize:"0.8rem",color:"var(--text-primary)",margin:0},children:t.path}),e.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",margin:0},children:["→ ",t.action]})]})},l))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"info-card info-card--green",style:{marginBottom:"0.75rem"},children:[e.jsx("h3",{className:"info-card__title",children:"У контролері"}),e.jsxs("div",{className:"code-block",children:[e.jsx("span",{className:"code-block__keyword",children:"class"})," CommentsController ","<"," ApplicationController",`

`,"  ","before_action ",e.jsx("span",{className:"code-block__string",children:":set_article"}),`

`,"  ",e.jsx("span",{className:"code-block__keyword",children:"def"})," create",`
`,"    ","@comment = @article.comments.build(comment_params)",`
`,"    ","@comment.save",`
`,"    ","redirect_to @article",`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,"  ","private",`

`,"  ",e.jsx("span",{className:"code-block__keyword",children:"def"})," set_article",`
`,"    ","@article = Article.find(params[",e.jsx("span",{className:"code-block__string",children:":article_id"}),"])",`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"end"})]})]}),e.jsxs("div",{className:"highlight-box highlight-box--yellow",children:[e.jsx(Sa,{className:"highlight-box__icon"}),e.jsxs("p",{className:"highlight-box__text",children:[e.jsx("strong",{children:"Не більше 1 рівня вкладеності"})," — інакше URL стає довгим і незручним. /articles/:article_id/comments/:id — ок. Глибше — погана практика."]})]})]})]})]})})}function wg(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:nt,title:"member / collection",subtitle:"Custom routes beyond standard CRUD"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(F,{term:"collection",desc:"Дія над всією колекцією ресурсів (без :id). Наприклад: всі опубліковані статті.",color:"blue"}),e.jsxs("div",{className:"code-block",style:{marginTop:"0.75rem",marginBottom:"0.75rem"},children:["resources ",e.jsx("span",{className:"code-block__string",children:":articles"})," ",e.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"  ","collection ",e.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"    ","get ",e.jsx("span",{className:"code-block__string",children:":published"}),`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,e.jsx("span",{className:"code-block__comment",children:"# Генерує:"}),`
`,e.jsx("span",{className:"code-block__comment",children:"# GET /articles/published"}),`
`,e.jsx("span",{className:"code-block__comment",children:"# → articles#published"})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("span",{className:"code-block__comment",children:"# У шаблоні:"}),`
`,"<","%= link_to ",e.jsx("span",{className:"code-block__string",children:"'Опубліковані'"}),",",`
`,"       ","published_articles_path %",">"]})]}),e.jsxs("div",{children:[e.jsx(F,{term:"member",desc:"Дія над конкретним ресурсом (з :id). Наприклад: опублікувати одну статтю.",color:"purple"}),e.jsxs("div",{className:"code-block",style:{marginTop:"0.75rem",marginBottom:"0.75rem"},children:["resources ",e.jsx("span",{className:"code-block__string",children:":articles"})," ",e.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"  ","member ",e.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"    ","patch ",e.jsx("span",{className:"code-block__string",children:":publish"}),`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,e.jsx("span",{className:"code-block__comment",children:"# Генерує:"}),`
`,e.jsx("span",{className:"code-block__comment",children:"# PATCH /articles/:id/publish"}),`
`,e.jsx("span",{className:"code-block__comment",children:"# → articles#publish"})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("span",{className:"code-block__comment",children:"# У шаблоні:"}),`
`,"<","%= link_to ",e.jsx("span",{className:"code-block__string",children:"'Опублікувати'"}),",",`
`,"       ","publish_article_path(@article),",`
`,"       ","method: ",e.jsx("span",{className:"code-block__string",children:":patch"})," %",">"]})]})]})]})})}function Sg(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:_e,title:"namespace та concern",subtitle:"Grouping routes — адмінка та повторювані блоки"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(F,{term:"namespace",desc:"Групує маршрути під спільний префікс URL і модуль контролера. Типовий випадок — адмін-панель: /admin/articles.",color:"blue"}),e.jsxs("div",{className:"code-block",style:{marginTop:"0.75rem",marginBottom:"0.75rem"},children:[e.jsx("span",{className:"code-block__comment",children:"# routes.rb"}),`
`,"namespace ",e.jsx("span",{className:"code-block__string",children:":admin"})," ",e.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"  ","resources ",e.jsx("span",{className:"code-block__string",children:":articles"}),`
`,"  ","resources ",e.jsx("span",{className:"code-block__string",children:":users"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,e.jsx("span",{className:"code-block__comment",children:"# Генерує:"}),`
`,e.jsx("span",{className:"code-block__comment",children:"# GET /admin/articles → Admin::ArticlesController#index"}),`
`,e.jsx("span",{className:"code-block__comment",children:"# GET /admin/users   → Admin::UsersController#index"})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("span",{className:"code-block__comment",children:"# app/controllers/admin/articles_controller.rb"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"module"})," Admin",`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"class"})," ArticlesController ","<"," ApplicationController",`
`,"    ",e.jsx("span",{className:"code-block__keyword",children:"def"})," index",`
`,"      ","@articles = Article.all",`
`,"    ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"end"})]})]}),e.jsxs("div",{children:[e.jsx(F,{term:"concern",desc:"Виносить повторюваний блок маршрутів у іменований concern — щоб не дублювати однакові member/collection у кількох ресурсах.",color:"purple"}),e.jsxs("div",{className:"code-block",style:{marginTop:"0.75rem",marginBottom:"0.75rem"},children:[e.jsx("span",{className:"code-block__comment",children:"# Визначити concern"}),`
`,"concern ",e.jsx("span",{className:"code-block__string",children:":commentable"})," ",e.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"  ","resources ",e.jsx("span",{className:"code-block__string",children:":comments"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,e.jsx("span",{className:"code-block__comment",children:"# Використати у кількох ресурсах"}),`
`,"resources ",e.jsx("span",{className:"code-block__string",children:":articles"}),", concerns: ",e.jsx("span",{className:"code-block__string",children:":commentable"}),`
`,"resources ",e.jsx("span",{className:"code-block__string",children:":posts"}),",    concerns: ",e.jsx("span",{className:"code-block__string",children:":commentable"}),`

`,e.jsx("span",{className:"code-block__comment",children:"# Еквівалентно nested routes у обох"})]}),e.jsxs("div",{className:"highlight-box highlight-box--purple",children:[e.jsx(_e,{className:"highlight-box__icon"}),e.jsxs("p",{className:"highlight-box__text",children:[e.jsx("strong",{children:"namespace"})," стане в нагоді коли будете розмежовувати ролі: звичайний користувач і адміністратор мають різні контролери під різними URL"]})]})]})]})]})})}function Rg(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:Zn,title:"Контролер — структура",subtitle:"Anatomy of a Rails controller"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx("div",{children:e.jsxs("div",{className:"code-block",style:{fontSize:"0.82rem"},children:[e.jsx("span",{className:"code-block__keyword",children:"class"})," ArticlesController ","<"," ApplicationController",`

`,"  ","before_action ",e.jsx("span",{className:"code-block__string",children:":set_article"}),",",`
`,"             ","only: [",e.jsx("span",{className:"code-block__string",children:":show"}),", ",e.jsx("span",{className:"code-block__string",children:":edit"}),", ",e.jsx("span",{className:"code-block__string",children:":update"}),", ",e.jsx("span",{className:"code-block__string",children:":destroy"}),"]",`

`,"  ",e.jsx("span",{className:"code-block__comment",children:"# GET /articles"}),`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"def"})," index",`
`,"    ","@articles = Article.all",`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,"  ",e.jsx("span",{className:"code-block__comment",children:"# GET /articles/:id"}),`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"def"})," show; ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,"  ",e.jsx("span",{className:"code-block__comment",children:"# GET /articles/new"}),`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"def"})," new",`
`,"    ","@article = Article.new",`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,"  ",e.jsx("span",{className:"code-block__comment",children:"# POST /articles"}),`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"def"})," create",`
`,"    ","@article = Article.new(article_params)",`
`,"    ",e.jsx("span",{className:"code-block__keyword",children:"if"})," @article.save",`
`,"      ","redirect_to @article, notice: ",e.jsx("span",{className:"code-block__string",children:"'Створено!'"}),`
`,"    ",e.jsx("span",{className:"code-block__keyword",children:"else"}),`
`,"      ","render ",e.jsx("span",{className:"code-block__string",children:":new"}),", status: ",e.jsx("span",{className:"code-block__string",children:":unprocessable_entity"}),`
`,"    ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"end"})]})}),e.jsx("div",{children:e.jsxs("div",{className:"code-block",style:{fontSize:"0.82rem"},children:["  ",e.jsx("span",{className:"code-block__comment",children:"# PATCH /articles/:id"}),`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"def"})," update",`
`,"    ",e.jsx("span",{className:"code-block__keyword",children:"if"})," @article.update(article_params)",`
`,"      ","redirect_to @article, notice: ",e.jsx("span",{className:"code-block__string",children:"'Оновлено!'"}),`
`,"    ",e.jsx("span",{className:"code-block__keyword",children:"else"}),`
`,"      ","render ",e.jsx("span",{className:"code-block__string",children:":edit"}),", status: ",e.jsx("span",{className:"code-block__string",children:":unprocessable_entity"}),`
`,"    ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,"  ",e.jsx("span",{className:"code-block__comment",children:"# DELETE /articles/:id"}),`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"def"})," destroy",`
`,"    ","@article.destroy",`
`,"    ","redirect_to articles_path, notice: ",e.jsx("span",{className:"code-block__string",children:"'Видалено!'"}),`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,"  ","private",`

`,"  ",e.jsx("span",{className:"code-block__keyword",children:"def"})," set_article",`
`,"    ","@article = Article.find(params[",e.jsx("span",{className:"code-block__string",children:":id"}),"])",`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,"  ",e.jsx("span",{className:"code-block__keyword",children:"def"})," article_params",`
`,"    ",e.jsx("span",{className:"code-block__comment",children:"# Rails 8+"}),`
`,"    ","params.expect(article: [",e.jsx("span",{className:"code-block__string",children:":title"}),", ",e.jsx("span",{className:"code-block__string",children:":body"}),"])",`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"end"})]})})]})]})})}function Eg(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ls,title:"params — параметри запиту",subtitle:"How data reaches the controller"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(F,{term:"params",desc:"Хеш з усіма параметрами поточного запиту: з URL, query string і тіла форми. Доступний у будь-якому action контролера.",color:"blue"}),e.jsxs("div",{className:"code-block",style:{marginTop:"0.75rem",marginBottom:"0.75rem"},children:[e.jsx("span",{className:"code-block__comment",children:"# 1. URL-параметр (з маршруту)"}),`
`,e.jsx("span",{className:"code-block__comment",children:"# GET /articles/42"}),`
`,"params[",e.jsx("span",{className:"code-block__string",children:":id"}),"] ",e.jsx("span",{className:"code-block__comment",children:'# → "42"'}),`

`,e.jsx("span",{className:"code-block__comment",children:"# 2. Query string"}),`
`,e.jsx("span",{className:"code-block__comment",children:"# GET /articles?page=2&q=rails"}),`
`,"params[",e.jsx("span",{className:"code-block__string",children:":page"}),"] ",e.jsx("span",{className:"code-block__comment",children:'# → "2"'}),`
`,"params[",e.jsx("span",{className:"code-block__string",children:":q"}),"]    ",e.jsx("span",{className:"code-block__comment",children:'# → "rails"'}),`

`,e.jsx("span",{className:"code-block__comment",children:"# 3. Тіло форми (POST)"}),`
`,e.jsx("span",{className:"code-block__comment",children:"# article[title]=Hello&article[body]=World"}),`
`,"params[",e.jsx("span",{className:"code-block__string",children:":article"}),"][",e.jsx("span",{className:"code-block__string",children:":title"}),"] ",e.jsx("span",{className:"code-block__comment",children:'# → "Hello"'})]}),e.jsxs("div",{className:"highlight-box highlight-box--yellow",children:[e.jsx(Sa,{className:"highlight-box__icon"}),e.jsxs("p",{className:"highlight-box__text",children:["Всі значення params приходять як ",e.jsx("strong",{children:"рядки"})," — навіть числа.",e.jsx("code",{children:" params[:id]"})," → ",e.jsx("code",{children:'"42"'}),", не ",e.jsx("code",{children:"42"}),". ActiveRecord сам конвертує при ",e.jsx("code",{children:"find"}),"."]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"info-card info-card--green",style:{marginBottom:"0.75rem"},children:[e.jsx("h3",{className:"info-card__title",children:"form_with та params"}),e.jsxs("p",{className:"info-card__text",style:{fontSize:"0.85rem",marginBottom:"0.75rem"},children:[e.jsx("code",{children:"form_with model: @article"})," автоматично групує поля під ключем моделі. Тому params приходять як вкладений хеш:"]}),e.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[e.jsx("span",{className:"code-block__comment",children:"# params виглядає так:"}),`
`,"{",`
`,"  ","article: ","{",`
`,"    ","title: ",e.jsx("span",{className:"code-block__string",children:'"Hello"'}),",",`
`,"    ","body: ",e.jsx("span",{className:"code-block__string",children:'"World"'}),`
`,"  ","}",`
`,"}"]})]}),e.jsxs("div",{className:"info-card info-card--purple",children:[e.jsx("h3",{className:"info-card__title",children:"Дебаг params"}),e.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[e.jsx("span",{className:"code-block__comment",children:"# Зупинити і побачити що прийшло"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"def"})," create",`
`,"  ","raise params.inspect",`
`,"  ",e.jsx("span",{className:"code-block__comment",children:"# кидає виняток — у браузері видно хеш"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,e.jsx("span",{className:"code-block__comment",children:"# Або просто дивитися логи сервера —"}),`
`,e.jsx("span",{className:"code-block__comment",children:"# rails s виводить params кожного запиту"})]})]})]})]})]})})}function Cg(){const s=[{color:"blue",title:"set_article",text:"Знайти запис у БД"},{color:"green",title:"authenticate!",text:"Перевірити авторизацію"},{color:"orange",title:"set_locale",text:"Встановити мову"},{color:"purple",title:"log_activity",text:"Логувати запити"}];return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ze,title:"before_action",subtitle:"DRY — Don't Repeat Yourself у контролері"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(F,{term:"before_action",desc:"Метод-фільтр, який виконується перед вказаними (або всіма) діями контролера. Використовується для уникнення дублювання і перевірок.",color:"orange"}),e.jsxs("div",{className:"code-block",style:{marginTop:"0.75rem",marginBottom:"0.75rem"},children:[e.jsx("span",{className:"code-block__comment",children:"# Без before_action — дублювання"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"def"})," show",`
`,"  ","@article = Article.find(params[",e.jsx("span",{className:"code-block__string",children:":id"}),"])",`
`,e.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"def"})," edit",`
`,"  ","@article = Article.find(params[",e.jsx("span",{className:"code-block__string",children:":id"}),"])",`
`,e.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"def"})," update",`
`,"  ","@article = Article.find(params[",e.jsx("span",{className:"code-block__string",children:":id"}),"])",`
`,e.jsx("span",{className:"code-block__keyword",children:"end"})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("span",{className:"code-block__comment",children:"# З before_action — DRY ✅"}),`
`,"before_action ",e.jsx("span",{className:"code-block__string",children:":set_article"}),",",`
`,"  ","only: [",e.jsx("span",{className:"code-block__string",children:":show"}),", ",e.jsx("span",{className:"code-block__string",children:":edit"}),", ",e.jsx("span",{className:"code-block__string",children:":update"}),", ",e.jsx("span",{className:"code-block__string",children:":destroy"}),"]",`

`,"private",`
`,e.jsx("span",{className:"code-block__keyword",children:"def"})," set_article",`
`,"  ","@article = Article.find(params[",e.jsx("span",{className:"code-block__string",children:":id"}),"])",`
`,e.jsx("span",{className:"code-block__keyword",children:"end"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"info-card info-card--purple",style:{marginBottom:"0.75rem"},children:[e.jsx("h3",{className:"info-card__title",children:"Параметри before_action"}),e.jsxs("div",{className:"code-block",children:[e.jsx("span",{className:"code-block__comment",children:"# Для конкретних дій"}),`
`,"before_action ",e.jsx("span",{className:"code-block__string",children:":authenticate!"}),",",`
`,"  ","only: [",e.jsx("span",{className:"code-block__string",children:":create"}),", ",e.jsx("span",{className:"code-block__string",children:":update"}),"]",`

`,e.jsx("span",{className:"code-block__comment",children:"# Для всіх дій крім"}),`
`,"before_action ",e.jsx("span",{className:"code-block__string",children:":authenticate!"}),",",`
`,"  ","except: [",e.jsx("span",{className:"code-block__string",children:":index"}),", ",e.jsx("span",{className:"code-block__string",children:":show"}),"]",`

`,e.jsx("span",{className:"code-block__comment",children:"# Для всіх дій"}),`
`,"before_action ",e.jsx("span",{className:"code-block__string",children:":authenticate!"})]})]}),e.jsx("div",{className:"step-list",children:s.map((t,l)=>e.jsx("div",{className:`step-list__item step-list__item--${t.color}`,style:{padding:"0.5rem 1rem"},children:e.jsx("div",{className:"step-list__content",children:e.jsxs("p",{className:"step-list__title",style:{margin:0,fontSize:"0.9rem"},children:[e.jsx("code",{children:t.title})," — ",t.text]})})},l))})]})]})]})})}function Ag(){const s=[{color:"blue",text:"params.expect(user: [...]) — вимагає ключ :user, інакше виняток"},{color:"green",text:"Список у масиві — білий список дозволених полів"},{color:"orange",text:"Решта полів (role, admin тощо) мовчки ігнорується"}];return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ce,title:"Strong Parameters",subtitle:"Mass assignment protection"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(F,{term:"Проблема: Mass Assignment",desc:"Форма реєстрації містить лише name і email. Але модель User також має поле role. Зловмисник може вручну додати його у POST-запит — і стати адміном.",color:"red"}),e.jsxs("div",{className:"code-block",style:{marginTop:"0.75rem",marginBottom:"0.75rem"},children:[e.jsx("span",{className:"code-block__comment",children:"# Зловмисник надсилає:"}),`
`,e.jsx("span",{className:"code-block__comment",children:"# user[name]=Bob&user[email]=b@b.com&user[role]=admin"}),`

`,e.jsx("span",{className:"code-block__comment",children:"# ✅ Rails 8+ — params.expect"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"def"})," user_params",`
`,"  ","params.expect(user: [",e.jsx("span",{className:"code-block__string",children:":name"}),", ",e.jsx("span",{className:"code-block__string",children:":email"}),", ",e.jsx("span",{className:"code-block__string",children:":password"}),"])",`
`,"  ",e.jsx("span",{className:"code-block__comment",children:"# :role буде проігноровано"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"end"})]}),e.jsxs("div",{className:"outlined-card outlined-card--purple",children:[e.jsx("p",{style:{fontWeight:600,color:"var(--accent-purple-text)",marginBottom:"0.5rem",fontSize:"0.85rem"},children:"Альтернатива — require / permit (всі версії Rails)"}),e.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[e.jsx("span",{className:"code-block__keyword",children:"def"})," user_params",`
`,"  ","params.require(",e.jsx("span",{className:"code-block__string",children:":user"}),")",`
`,"        ",".permit(",e.jsx("span",{className:"code-block__string",children:":name"}),", ",e.jsx("span",{className:"code-block__string",children:":email"}),", ",e.jsx("span",{className:"code-block__string",children:":password"}),")",`
`,e.jsx("span",{className:"code-block__keyword",children:"end"})]}),e.jsx("p",{style:{margin:"0.5rem 0 0",fontSize:"0.8rem",color:"var(--text-muted)"},children:"Працює у всіх версіях Rails — часто зустрінете у документації та Stack Overflow"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"info-card info-card--blue",style:{marginBottom:"0.75rem"},children:[e.jsx("h3",{className:"info-card__title",children:"Як це працює"}),e.jsx("div",{className:"step-list",children:s.map((t,l)=>e.jsxs("div",{className:`step-list__item step-list__item--${t.color}`,style:{padding:"0.5rem 1rem"},children:[e.jsx("div",{className:`step-list__number step-list__number--${t.color}`,children:l+1}),e.jsx("div",{className:"step-list__content",children:e.jsx("p",{style:{margin:0,fontSize:"0.88rem",color:"var(--text-secondary)"},children:t.text})})]},l))})]}),e.jsxs("div",{className:"info-card info-card--purple",children:[e.jsx("h3",{className:"info-card__title",children:"Вкладені параметри"}),e.jsx("p",{className:"info-card__text",style:{fontSize:"0.85rem",marginBottom:"0.75rem"},children:"Стаття може мати масив тегів та вкладений об'єкт SEO-даних:"}),e.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[e.jsx("span",{className:"code-block__keyword",children:"def"})," article_params",`
`,"  ","params.expect(",`
`,"    ","article: [",`
`,"      ",e.jsx("span",{className:"code-block__string",children:":title"}),", ",e.jsx("span",{className:"code-block__string",children:":body"}),", ",e.jsx("span",{className:"code-block__string",children:":published"}),",",`
`,"      ","{ ","tag_ids: []"," },",`
`,"      ","{ ","seo_attributes: [",e.jsx("span",{className:"code-block__string",children:":title"}),", ",e.jsx("span",{className:"code-block__string",children:":description"}),"]"," }",`
`,"    ","]",`
`,"  ",")",`
`,e.jsx("span",{className:"code-block__keyword",children:"end"})]})]})]})]})]})})}function Tg(){const s=[{color:"green",code:"200 :ok",desc:"render за замовчуванням"},{color:"blue",code:"302 :found",desc:"redirect_to за замовчуванням"},{color:"cyan",code:"303 :see_other",desc:"redirect після POST/PATCH/DELETE (Rails 8+)"},{color:"orange",code:"422 :unprocessable_entity",desc:"render при помилці валідації"}];return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:Is,title:"render vs redirect_to",subtitle:"Two ways to respond to a request"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"info-card info-card--blue",style:{marginBottom:"0.75rem"},children:[e.jsx("h3",{className:"info-card__title",children:"render — рендер шаблону"}),e.jsxs("p",{className:"info-card__text",style:{marginBottom:"0.75rem"},children:["Повертає HTML у межах ",e.jsx("strong",{children:"одного HTTP-запиту"}),". @змінні контролера доступні у шаблоні."]}),e.jsxs("div",{className:"code-block",style:{fontSize:"0.82rem"},children:[e.jsx("span",{className:"code-block__keyword",children:"def"})," create",`
`,"  ","@article = Article.new(article_params)",`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"if"})," @article.save",`
`,"    ","redirect_to @article",`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"else"}),`
`,"    ",e.jsx("span",{className:"code-block__comment",children:"# @article зі помилками — HTTP 422"}),`
`,"    ","render ",e.jsx("span",{className:"code-block__string",children:":new"}),",",`
`,"           ","status: ",e.jsx("span",{className:"code-block__string",children:":unprocessable_entity"}),`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"end"})]})]}),e.jsxs("div",{className:"info-card info-card--purple",children:[e.jsx("h3",{className:"info-card__title",children:"HTTP-статуси"}),e.jsx("div",{className:"step-list",children:s.map((t,l)=>e.jsx("div",{className:`step-list__item step-list__item--${t.color}`,style:{padding:"0.4rem 0.75rem"},children:e.jsx("div",{className:"step-list__content",children:e.jsxs("p",{style:{margin:0,fontSize:"0.82rem"},children:[e.jsx("code",{style:{color:"var(--text-primary)"},children:t.code})," — ",e.jsx("span",{style:{color:"var(--text-muted)"},children:t.desc})]})})},l))})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"info-card info-card--green",style:{marginBottom:"0.75rem"},children:[e.jsx("h3",{className:"info-card__title",children:"redirect_to — варіанти"}),e.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[e.jsx("span",{className:"code-block__comment",children:"# AR-об'єкт → article_url(@article)"}),`
`,"redirect_to @article",`

`,e.jsx("span",{className:"code-block__comment",children:"# _url — повний URL (рекомендовано)"}),`
`,"redirect_to article_url(@article)",`

`,e.jsx("span",{className:"code-block__comment",children:"# _path — відносний (теж працює)"}),`
`,"redirect_to article_path(@article)",`

`,e.jsx("span",{className:"code-block__comment",children:"# Зовнішній URL"}),`
`,"redirect_to ",e.jsx("span",{className:"code-block__string",children:'"https://example.com"'}),`

`,e.jsx("span",{className:"code-block__comment",children:"# З flash і статусом (Rails 8+)"}),`
`,"redirect_to articles_url,",`
`,"  ","notice: ",e.jsx("span",{className:"code-block__string",children:"'Видалено!'"}),",",`
`,"  ","status: ",e.jsx("span",{className:"code-block__string",children:":see_other"})]})]}),e.jsxs(B,{color:"orange",title:"_path vs _url",children:[e.jsx("code",{children:"articles_path"})," → ",e.jsx("code",{children:"/articles"})," — відносний",`
`,e.jsx("code",{children:"articles_url"})," → ",e.jsx("code",{children:"https://example.com/articles"})," — повний",`

`,"У ",e.jsx("strong",{children:"redirect_to"})," обидва працюють однаково.",e.jsx("code",{children:"_url"})," потрібен там де Rails не знає домену:",e.jsx("strong",{children:" Action Mailer"})," та ",e.jsx("strong",{children:"API"})," (заголовок ",e.jsx("code",{children:"Location"}),")."]})]})]})]})})}function Pg(){const s=[{color:"green",key:"notice",desc:"Успішна дія (зелений)"},{color:"red",key:"alert",desc:"Помилка або попередження (червоний)"},{color:"blue",key:"info",desc:"Інформаційне повідомлення"},{color:"orange",key:"warning",desc:"Попередження (жовтий)"}];return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:V,title:"Flash-повідомлення",subtitle:"One-time messages between requests"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(F,{term:"Flash",desc:"Тимчасове повідомлення, що зберігається у сесії та доступне лише на наступному запиті. Після відображення автоматично видаляється.",color:"green"}),e.jsxs("div",{className:"code-block",style:{marginTop:"0.75rem",marginBottom:"0.75rem"},children:[e.jsx("span",{className:"code-block__comment",children:"# Вбудовані скорочення redirect_to"}),`
`,"redirect_to @article, notice: ",e.jsx("span",{className:"code-block__string",children:"'Статтю створено!'"}),`
`,"redirect_to articles_path, alert: ",e.jsx("span",{className:"code-block__string",children:"'Щось пішло не так'"}),`

`,e.jsx("span",{className:"code-block__comment",children:"# Довільні типи — явно через flash:"}),`
`,"flash[",e.jsx("span",{className:"code-block__string",children:":success"}),"] = ",e.jsx("span",{className:"code-block__string",children:"'Готово!'"}),`
`,"redirect_to root_path",`

`,e.jsx("span",{className:"code-block__comment",children:"# або в один рядок:"}),`
`,"redirect_to root_path, flash: ","{ ","success: ",e.jsx("span",{className:"code-block__string",children:"'Готово!'"})," }"]}),e.jsx(d,{language:"erb",children:`<% flash.each do |type, msg| %>
  <div class="alert alert-<%= type %>">
    <%= msg %>
  </div>
<% end %>`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Типи flash"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",marginBottom:"0.75rem"},children:s.map(t=>e.jsx(mn,{color:t.color,icon:t.color==="green"?"✓":t.color==="red"?"⚠":t.color==="blue"?"ℹ":"⚡",text:`flash[:${t.key}] — ${t.desc}`,badge:`:${t.key}`},t.key))}),e.jsxs("div",{className:"highlight-box highlight-box--green",children:[e.jsx(V,{className:"highlight-box__icon"}),e.jsxs("p",{className:"highlight-box__text",children:[e.jsx("strong",{children:"flash.now[:notice]"})," — показати повідомлення на ",e.jsx("em",{children:"поточному"})," запиті (при render, не redirect_to)"]})]})]})]})]})})}function zg(){const s=[{color:"cyan",text:"status: :see_other (303) — правильний статус після PATCH/DELETE у Rails 8+"},{color:"blue",text:"render :show — рендерить show.json.jbuilder, не повертає весь об'єкт напряму"},{color:"purple",text:"location: @article — заголовок Location вказує де знайти оновлений ресурс"}];return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:_e,title:"respond_to: HTML та JSON",subtitle:"One controller — multiple formats"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(F,{term:"respond_to",desc:"Дозволяє одному action повертати різний формат відповіді залежно від заголовка Accept або розширення у URL (/articles.json).",color:"cyan"}),e.jsxs("div",{className:"code-block",style:{marginTop:"0.75rem",marginBottom:"0.75rem",fontSize:"0.8rem"},children:[e.jsx("span",{className:"code-block__comment",children:"# Простий випадок — index"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"def"})," index",`
`,"  ","@articles = Article.all",`
`,"  ","respond_to ",e.jsx("span",{className:"code-block__keyword",children:"do"})," |format|",`
`,"    ","format.html",`
`,"    ",e.jsx("span",{className:"code-block__comment",children:"# рендерить index.html.erb"}),`
`,"    ","format.json ","{"," render json: @articles ","}",`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"end"})]}),e.jsxs("div",{className:"info-card info-card--blue",style:{padding:"0.75rem 1rem"},children:[e.jsx("h3",{className:"info-card__title",children:"Як викликати"}),e.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[e.jsx("span",{className:"code-block__comment",children:"# Браузер → HTML"}),`
`,"GET /articles",`

`,e.jsx("span",{className:"code-block__comment",children:"# JSON через розширення"}),`
`,"GET /articles.json",`

`,e.jsx("span",{className:"code-block__comment",children:"# JSON через заголовок"}),`
`,"curl -H ",e.jsx("span",{className:"code-block__string",children:'"Accept: application/json"'})," /articles"]})]})]}),e.jsx("div",{children:e.jsxs("div",{className:"info-card info-card--green",children:[e.jsx("h3",{className:"info-card__title",children:"respond_to у update (Rails 8+)"}),e.jsxs("div",{className:"code-block",style:{fontSize:"0.78rem"},children:[e.jsx("span",{className:"code-block__keyword",children:"def"})," update",`
`,"  ","respond_to ",e.jsx("span",{className:"code-block__keyword",children:"do"})," |format|",`
`,"    ",e.jsx("span",{className:"code-block__keyword",children:"if"})," @article.update(article_params)",`
`,"      ","format.html ","{",`
`,"        ","redirect_to @article,",`
`,"          ","notice: ",e.jsx("span",{className:"code-block__string",children:"'Оновлено!'"}),",",`
`,"          ","status: ",e.jsx("span",{className:"code-block__string",children:":see_other"}),`
`,"      ","}",`
`,"      ","format.json ","{",`
`,"        ","render ",e.jsx("span",{className:"code-block__string",children:":show"}),",",`
`,"          ","status: ",e.jsx("span",{className:"code-block__string",children:":ok"}),",",`
`,"          ","location: @article",`
`,"      ","}",`
`,"    ",e.jsx("span",{className:"code-block__keyword",children:"else"}),`
`,"      ","format.html ","{"," render ",e.jsx("span",{className:"code-block__string",children:":edit"}),", status: ",e.jsx("span",{className:"code-block__string",children:":unprocessable_entity"})," ","}",`
`,"      ","format.json ","{"," render json: @article.errors, status: ",e.jsx("span",{className:"code-block__string",children:":unprocessable_entity"})," ","}",`
`,"    ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,"  ",e.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,e.jsx("span",{className:"code-block__keyword",children:"end"})]}),e.jsx("div",{className:"step-list",style:{marginTop:"0.75rem"},children:s.map((t,l)=>e.jsx("div",{className:`step-list__item step-list__item--${t.color}`,style:{padding:"0.4rem 0.75rem"},children:e.jsx("div",{className:"step-list__content",children:e.jsx("p",{style:{margin:0,fontSize:"0.8rem",color:"var(--text-secondary)"},children:t.text})})},l))})]})})]})]})})}function Lg(){const s=[{title:"REST: URL — ресурс, метод — дія",text:"GET /articles — отримати список. DELETE /articles/1 — видалити один",color:"blue"},{title:"resources — 7 маршрутів, namespace, concern",text:"Повний CRUD, адмін-простір, DRY для повторюваних блоків маршрутів",color:"green"},{title:"params — три джерела",text:"URL (:id), query string (?page=2), тіло форми (article[title]=...)",color:"cyan"},{title:"before_action — DRY у контролері",text:"Виносимо повторюваний код у фільтри з only:/except:",color:"orange"},{title:"Strong Parameters — безпека",text:"params.expect(model: [:field]) — білий список захищає від mass assignment",color:"red"},{title:"render vs redirect_to та flash",text:"render при помилці (422), redirect після успіху (303) + одноразові повідомлення",color:"purple"}];return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:Y,title:"Підсумок лекції",subtitle:"Що ми дізналися сьогодні"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx("div",{children:e.jsx("div",{className:"step-list",children:s.map((t,l)=>e.jsxs("div",{className:`step-list__item step-list__item--${t.color}`,children:[e.jsx("div",{className:`step-list__number step-list__number--${t.color}`,children:l+1}),e.jsxs("div",{className:"step-list__content",children:[e.jsx("p",{className:"step-list__title",children:t.title}),e.jsx("p",{className:"step-list__text",children:t.text})]})]},l))})}),e.jsxs("div",{children:[e.jsx(N,{title:"📚 Корисні ресурси",color:"blue",delay:1,style:{marginBottom:"0.75rem"},description:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"guides.rubyonrails.org/routing.html"})," — повний гайд по маршрутизації",e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"guides.rubyonrails.org/action_controller_overview.html"})," — все про контролери",e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"rails routes"})," — завжди під рукою у терміналі"]})}),e.jsxs("div",{className:"highlight-box highlight-box--purple",children:[e.jsx(Bs,{className:"highlight-box__icon"}),e.jsxs("p",{className:"highlight-box__text",children:[e.jsx("strong",{children:"Наступна лекція:"})," Views, partials та форми — ERB-шаблони, layout, render partial, helpers, form_with та підключення Bootstrap/Tailwind."]})]})]})]})]})})}const Mg=[{id:1,title:"Титульний слайд",component:Og},{id:2,title:"Мета заняття",component:Ig},{id:3,title:"MVC — роль View",component:Bg},{id:4,title:"ERB — синтаксис шаблонів",component:Hg},{id:5,title:"Layouts та yield",component:$g},{id:6,title:"View Helpers",component:Fg},{id:7,title:"Partial",component:Ug},{id:8,title:"form_with — основи",component:Vg},{id:9,title:"Поля форми",component:Wg},{id:10,title:"Partial _form",component:Qg},{id:11,title:"Валідації та помилки",component:Yg},{id:12,title:"Flash-повідомлення",component:qg},{id:13,title:"fields_for — вкладені форми",component:Gg},{id:14,title:"Select та Collection helpers",component:Kg},{id:15,title:"Active Storage",component:Jg},{id:16,title:"Повний приклад CRUD",component:Xg},{id:17,title:"Best Practices",component:Zg},{id:19,title:"CSS-фреймворки в Rails",component:sj},{id:20,title:"Dockerfile у Rails",component:tj},{id:18,title:"Підсумок",component:ej}];function Dg(){return e.jsx(Hs,{slides:Mg})}function Og(){return e.jsxs("div",{className:"slide slide--centered slide--gradient-blue-purple",children:[e.jsx("div",{className:"title-slide__icon-wrapper",children:e.jsx(ou,{})}),e.jsx("h1",{className:"title-slide__title",children:"Представлення, Partials & Форми"}),e.jsx("p",{className:"title-slide__english",children:"ERB-шаблони · layouts · хелпери · form_with · валідації"}),e.jsx("div",{className:"title-slide__badge",children:e.jsx("p",{children:"Лекція 6 · Ruby on Rails"})})]})}function Ig(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ns,title:"Мета заняття",subtitle:"Що ти знатимеш після цієї лекції"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx(N,{icon:ou,title:"Структура Views та MVC",description:"Layout, yield, content_for — як організовані шаблони та яку роль відіграє View у MVC-патерні",color:"blue",delay:1}),e.jsx(N,{icon:Zn,title:"ERB-шаблони та хелпери",description:"Писати динамічні шаблони та використовувати link_to, image_tag, tag, number_to_currency тощо",color:"green",delay:2}),e.jsx(N,{icon:at,title:"Партіали та локальні змінні",description:"Виокремлювати повторюваний HTML у _form.html.erb та передавати locals: через render partial:",color:"purple",delay:3}),e.jsx(N,{icon:wh,title:"Форми з form_with",description:"Будувати форми: form_with model:, fields_for, select, check_box, file_field",color:"orange",delay:4}),e.jsx(N,{icon:Pl,title:"Помилки валідацій",description:"Відображати errors.full_messages, flash-повідомлення та підказки користувачу",color:"red",delay:5}),e.jsx(N,{icon:Is,title:"Маршрут форми до контролера",description:"submit → params → create/update → redirect або render — повний цикл обробки форми",color:"cyan",delay:6})]})]})})}function Bg(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:_e,title:"MVC — роль View",subtitle:"Model → Controller → View"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem"},children:[e.jsx(I,{icon:le,title:"Model",description:"Дані, бізнес-логіка, ActiveRecord",color:"orange",delay:1}),e.jsx(Hc,{}),e.jsx(I,{icon:ct,title:"Controller",description:"Отримує запит, готує @instance_variables",color:"purple",delay:2}),e.jsx(Hc,{}),e.jsx(I,{icon:rf,title:"View",description:"Рендерить HTML з ERB-шаблону",color:"blue",delay:3})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Як controller передає дані у view"}),e.jsx(d,{children:`# app/controllers/articles_controller.rb
def index
  @articles = Article.all   # instance var
  @count    = Article.count
end
# Rails автоматично рендерить:
# app/views/articles/index.html.erb`}),e.jsx(x,{children:"Структура папки views"}),e.jsx(d,{children:`app/views/
  layouts/
    application.html.erb   # main layout
  articles/
    index.html.erb
    show.html.erb
    _form.html.erb         # _ = partial
  shared/
    _navbar.html.erb`}),e.jsxs(B,{title:"Правило",children:["controller action ",e.jsx("code",{children:"index"})," → шукає"," ",e.jsx("code",{children:"views/articles/index.html.erb"})]})]})]})]})}function Hg(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:ba,title:"ERB — Embedded Ruby",subtitle:"HTML + Ruby всередині одного файлу"}),e.jsxs("div",{className:"slide-grid slide-grid--3col",children:[e.jsxs("div",{className:"outlined-card outlined-card--blue",children:[e.jsx("span",{className:"badge badge--blue",children:"Виконання"}),e.jsx(d,{children:`<% if user.admin? %>
  <p>Адмін</p>
<% end %>`}),e.jsxs("p",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:[e.jsx(d,{children:"<% %>"})," — виконує Ruby, нічого не виводить"]})]}),e.jsxs("div",{className:"outlined-card outlined-card--green",children:[e.jsx("span",{className:"badge badge--green",children:"Виведення"}),e.jsx(d,{children:`<h1>
  <%= @article.title %>
</h1>
<p>
  <%= @article.body %>
</p>`}),e.jsxs("p",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:[e.jsx(d,{children:"<%= %>"})," — виконує і ",e.jsx("strong",{children:"виводить"})," результат"]})]}),e.jsxs("div",{className:"outlined-card outlined-card--purple",children:[e.jsx("span",{className:"badge badge--purple",children:"Коментар"}),e.jsx(d,{children:`<%# це коментар
    у ERB %>
<%= # звичайний
  user.name %>`}),e.jsxs("p",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:[e.jsx(d,{children:"<%# %>"})," — коментар, не рендериться"]})]})]}),e.jsx(x,{children:"Повний приклад — index.html.erb"}),e.jsx(d,{children:`<h1>Статті <small><%= @count %></small></h1>

<% @articles.each do |article| %>
  <div class="card">
    <h2><%= article.title %></h2>
    <p><%= article.body.truncate(100) %></p>
    <%= link_to "Читати", article_path(article) %>
  </div>
<% end %>`})]})}function $g(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:_e,title:"Layouts та yield",subtitle:"Загальна оболонка для всіх сторінок"}),e.jsxs("div",{className:"slide-grid slide-grid--3col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"application.html.erb — Layout"}),e.jsx(d,{children:`<!DOCTYPE html>
<html>
<head>
  <title><%= content_for?(:title) ?
    yield(:title) : "MyApp" %></title>
  <%= csrf_meta_tags %>
  <%= stylesheet_link_tag "application" %>
</head>
<body>
  <%= render "shared/navbar" %>
  <main>
    <%= yield %>
  </main>
  <%= render "shared/footer" %>
</body>
</html>`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"admin.html.erb — інший layout"}),e.jsx(d,{children:`<!-- app/views/layouts/admin.html.erb -->
<!DOCTYPE html>
<html>
<head>
  <title>Admin Panel</title>
  <%= stylesheet_link_tag "admin" %>
</head>
<body>
  <aside>
    <%= render "admin/sidebar" %>
  </aside>
  <main class="admin-content">
    <%= yield %>
  </main>
</body>
</html>`}),e.jsx(x,{style:{marginTop:"0.75rem"},children:"Контролер — вибір layout"}),e.jsx(d,{children:`class AdminController < ApplicationController
  layout "admin"   # весь контролер

  # або для одної дії:
  def dashboard
    render layout: "admin"
  end
end`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"У конкретному view — content_for"}),e.jsx(d,{children:`<%# app/views/articles/show.html.erb %>
<% content_for :title do %>
  <%= @article.title %>
<% end %>

<h1><%= @article.title %></h1>
<p><%= @article.body %></p>`}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",marginTop:"0.75rem"},children:[e.jsx(F,{term:"yield",desc:"«Вставити сюди вміст поточного view»",color:"purple"}),e.jsx(F,{term:"content_for :block",desc:"Наповнює іменований блок у layout'і",color:"cyan"}),e.jsx(F,{term:'layout "admin"',desc:"У контролері — вибрати інший layout файл",color:"green"})]})]})]})]})}function Fg(){const s=[{color:"blue",badge:"URL / Links",code:`link_to "Edit",
  edit_article_path(@article)
# <a href="/articles/1/edit">Edit</a>

button_to "Delete",
  article_path(@article),
  method: :delete
# <form action="/articles/1" method="post">
#   <input type="hidden" name="_method" value="delete">
#   <button type="submit">Delete</button>
# </form>`},{color:"purple",badge:"Assets",code:`image_tag "logo.png", alt: "Logo"
# <img src="/assets/logo.png" alt="Logo">

stylesheet_link_tag "app"
# <link rel="stylesheet" href="/assets/app-abc123.css" />

javascript_include_tag "app"
# <script src="/assets/app.js"><\/script>`},{color:"green",badge:"Formatting",code:`number_to_currency 1500
# => "$1,500.00"

time_ago_in_words Time.now
# => "less than a minute"

truncate text, length: 50
# => "Lorem ipsum dolor si..."`},{color:"orange",badge:"HTML Tags",code:`tag.div(class: "card") do
  tag.h2 "Title"
end
# <div class="card"><h2>Title</h2></div>

content_tag :span,
  "badge", class: "badge"
# <span class="badge">badge</span>`},{color:"cyan",badge:"Sanitize / Escape",code:`html_escape "<script>alert(1)<\/script>"
# => "&lt;script&gt;alert(1)&lt;/script&gt;"
# браузер покаже: <script>alert(1)<\/script>

sanitize html, tags: ["b", "i", "p"]
# <script> буде видалено, <b> залишиться

raw "<b>Bold</b>"
# браузер покаже: Bold (жирний)
# ⚠ XSS небезпека з user input!`},{color:"yellow",badge:"Custom Helpers",code:`# app/helpers/articles_helper.rb
module ArticlesHelper
  def status_badge(art)
    klass = art.published? ?
      "green" : "red"
    tag.span art.status, class: klass
  end
end
# <span class="green">published</span>`}];return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:gs,title:"View Helpers",subtitle:"Вбудовані методи Rails для шаблонів"}),e.jsx("div",{className:"slide-grid slide-grid--3col",style:{marginBottom:"1rem"},children:s.slice(0,3).map(t=>e.jsxs("div",{className:`info-card info-card--${t.color}`,children:[e.jsx("span",{className:`badge badge--${t.color}`,children:t.badge}),e.jsx(d,{children:t.code})]},t.badge))}),e.jsx("div",{className:"slide-grid slide-grid--3col",children:s.slice(3).map(t=>e.jsxs("div",{className:`info-card info-card--${t.color}`,children:[e.jsx("span",{className:`badge badge--${t.color}`,children:t.badge}),e.jsx(d,{children:t.code})]},t.badge))})]})}function Ug(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:at,title:"Партіали (Partials)",subtitle:"Фрагменти шаблону для повторного використання"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(F,{term:"Що таке partial?",desc:"Файл _name.html.erb (з підкресленням). Рендериться через render. Не має власного маршруту.",color:"purple"}),e.jsx(x,{children:"Найпростіший render"}),e.jsx(d,{children:`# у view файлі
<%= render "shared/navbar" %>

# Rails шукає:
# views/shared/_navbar.html.erb`}),e.jsx(x,{children:"Render з локальними змінними"}),e.jsx(d,{children:`<%= render partial: "article",
         locals: { article: @article } %>

# або коротше:
<%= render "article", article: @article %>`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Колекція — render collection"}),e.jsx(d,{children:`<%# замість .each циклу: %>
<%= render @articles %>
<%# Rails шукає _article.html.erb %>
<%# і передає локальну змінну article %>

<%# що еквівалентно: %>
<% @articles.each do |article| %>
  <%= render article %>
<% end %>

<%# явно, з кастомним іменем змінної: %>
<%= render partial: "article",
         collection: @articles,
         as: :item %>`}),e.jsx(x,{children:"Вміст _article.html.erb"}),e.jsx(d,{children:`<!-- app/views/articles/_article.html.erb -->
<div id="<%= dom_id article %>">
  <h2><%= article.title %></h2>
  <p><%= article.body.truncate(80) %></p>
  <%= link_to "Детальніше", article %>
</div>`}),e.jsxs(B,{color:"green",title:"Перевага",children:["Один ",e.jsx("code",{children:"render @articles"})," ефективніший за"," ",e.jsx("code",{children:".each"})," + render — Rails оптимізує в batch."]})]})]})]})}function Vg(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:va,title:"form_with — сучасні форми Rails",subtitle:"Генерує <form> з CSRF, методом та URL автоматично"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(F,{term:"form_with model: @article",desc:"Якщо @article.new_record? → POST /articles. Якщо вже збережена → PATCH /articles/:id",color:"blue"}),e.jsx(d,{children:`<%= form_with(model: @article) do |f| %>

  <div>
    <%= f.label :title, "Заголовок" %>
    <%= f.text_field :title %>
  </div>

  <div>
    <%= f.label :body %>
    <%= f.text_area :body, rows: 5 %>
  </div>

  <%= f.submit "Зберегти" %>

<% end %>`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Що генерує Rails (HTML)"}),e.jsx(d,{children:`<form action="/articles"
      method="post">
  <input name="authenticity_token"
         value="abc123..." type="hidden"/>
  <input name="_method" value="patch"
         type="hidden"/>  <!-- для edit -->

  <label for="article_title">Заголовок</label>
  <input id="article_title"
         name="article[title]"
         type="text"/>
  ...
</form>`}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",marginTop:"0.75rem"},children:[e.jsx(F,{term:"CSRF token",desc:"Автоматичний захист від підробки запитів",color:"green"}),e.jsx(F,{term:"_method: patch",desc:"Браузер не підтримує PUT/PATCH, Rails емулює через hidden field",color:"orange"})]})]})]})]})}function Wg(){const s=[["f.text_field :title","text","f.text_field :title, placeholder: 'Заголовок'"],["f.text_area :body","textarea","f.text_area :body, rows: 5"],["f.email_field :email","email","f.email_field :email"],["f.password_field :password","password","f.password_field :password"],["f.number_field :price","number","f.number_field :price, min: 0, step: 0.01"],["f.check_box :published","checkbox","f.check_box :published"],["f.radio_button :role, 'admin'","radio","f.radio_button :role, 'user'"],["f.select :category","select","f.select :category, ['tech','life'], prompt: 'Оберіть'"],["f.collection_select","select","f.collection_select :user_id, User.all, :id, :name"],["f.file_field :avatar","file","f.file_field :avatar, accept: 'image/*'"],["f.date_field :published_at","date","f.date_field :published_at"],["f.hidden_field :source","hidden","f.hidden_field :source, value: 'web'"]];return e.jsxs("div",{className:"slide slide--compact",children:[e.jsx(f,{icon:va,title:"Поля форми form_with",subtitle:"Всі типи полів через form builder f"}),e.jsxs("table",{className:"data-table",children:[e.jsx("thead",{className:"data-table__head",children:e.jsx("tr",{children:["Helper","HTML type","Приклад"].map(t=>e.jsx("th",{children:t},t))})}),e.jsx("tbody",{children:s.map(([t,l,n],i)=>e.jsxs("tr",{className:`data-table__row data-table__row--${i%2===0?"even":"odd"}`,children:[e.jsx("td",{children:e.jsx("code",{children:t})}),e.jsx("td",{children:e.jsx("span",{className:"badge badge--purple",children:l})}),e.jsx("td",{children:n})]},i))})]})]})}function Qg(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:at,title:"Partial _form — один для new і edit",subtitle:"DRY — Don't Repeat Yourself"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"app/views/articles/_form.html.erb"}),e.jsx(d,{children:`<%= form_with(model: article) do |f| %>

  <% if article.errors.any? %>
    <div class="errors">
      <% article.errors.full_messages.each do |msg| %>
        <p><%= msg %></p>
      <% end %>
    </div>
  <% end %>

  <%= f.label :title %>
  <%= f.text_field :title %>

  <%= f.label :body %>
  <%= f.text_area :body %>

  <%= f.submit %>  <!-- "Create"/"Update" auto -->

<% end %>`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"new.html.erb"}),e.jsx(d,{children:`<h1>Нова стаття</h1>
<%= render "form",
         article: @article %>`}),e.jsx(x,{children:"edit.html.erb"}),e.jsx(d,{children:`<h1>Редагувати</h1>
<%= render "form",
         article: @article %>`}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",marginTop:"0.75rem"},children:[e.jsx(F,{term:"f.submit авто-текст",desc:"Новий об'єкт → «Create Article». Збережений → «Update Article»",color:"green"}),e.jsx(F,{term:"model: article (local)",desc:"Передаємо локальну змінну, не @instance — partial не знає про controller",color:"orange"})]})]})]})]})}function Yg(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:ce,title:"Валідації та відображення помилок",subtitle:"Model → Controller → View — повний цикл"}),e.jsxs("div",{className:"slide-grid slide-grid--3col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"1. Model — валідація"}),e.jsx(d,{children:`# app/models/article.rb
class Article < ApplicationRecord
  validates :title,
    presence: true,
    length: { minimum: 3 }
  validates :body,
    presence: true
end`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"2. Controller — render при помилці"}),e.jsx(d,{children:`def create
  @article = Article.new(article_params)
  if @article.save
    redirect_to @article,
      notice: "Збережено!"
  else
    render :new,
      status: :unprocessable_entity
    # @article.errors вже заповнені
  end
end`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"3. View — помилки зверху форми"}),e.jsx(d,{children:`<% if @article.errors.any? %>
  <div class="alert-error">
    <ul>
      <% @article.errors
        .full_messages.each do |msg| %>
        <li><%= msg %></li>
      <% end %>
    </ul>
  </div>
<% end %>`})]})]}),e.jsxs("div",{className:"slide-grid slide-grid--2col",style:{marginTop:"0.75rem"},children:[e.jsxs("div",{children:[e.jsx(x,{children:"4. View — помилки біля поля"}),e.jsx(d,{children:`<%= form.label :name, class: "form-label" %>
<%= form.text_field :name,
  class: "form-control #{
    "is-invalid" if vaccine.errors[:name].any?
  }" %>
<% if vaccine.errors[:name].any? %>
  <div class="invalid-feedback">
    <%= vaccine.errors[:name].first %>
  </div>
<% end %>`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Корисні методи errors"}),e.jsx(d,{children:`@article.errors.any?
#=> true якщо є помилки
@article.errors.full_messages
#=> ["Title can't be blank", ...]
@article.errors[:title]
#=> ["can't be blank", "is too short"]
# Поле з помилкою огортається автоматично:
<div class="field_with_errors">
  <input name="article[title]" .../>
</div>`})]})]})]})}function qg(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:V,title:"Flash-повідомлення",subtitle:"Одноразові системні повідомлення між запитами"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Controller — встановити flash"}),e.jsx(d,{children:`def create
  if @article.save
    redirect_to @article,
      notice: "Статтю створено!"  # тільки notice/alert
  else
    flash.now[:alert] = "Помилка!"
    render :new, status: :unprocessable_entity
  end
end

# Для інших типів — явно через flash:
flash[:success] = "Збережено"
redirect_to @article

# або в один рядок:
redirect_to @article,
  flash: { success: "Збережено!" }`}),e.jsx("div",{style:{marginTop:"0.75rem"},children:e.jsx(F,{term:"flash vs flash.now",desc:"flash — зберігається після redirect. flash.now — тільки для поточного render",color:"orange"})})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Layout — відображення flash"}),e.jsx(d,{children:`<!-- app/views/layouts/application.html.erb -->
<% flash.each do |type, message| %>
  <div class="flash flash--<%= type %>">
    <%= message %>
  </div>
<% end %>`}),e.jsx(x,{children:"Вбудовані скорочення redirect_to"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(mn,{color:"green",icon:"✓",text:'redirect_to @article, notice: "..."',badge:"notice"}),e.jsx(mn,{color:"red",icon:"⚠",text:'redirect_to @article, alert: "..."',badge:"alert"})]}),e.jsx(x,{children:"Довільні типи через flash"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:e.jsx(mn,{color:"cyan",icon:"ℹ",text:"flash: { success/warning/info/... }",badge:"будь-який"})})]})]})]})}function Gg(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:ru,title:"fields_for — вкладені форми",subtitle:"Редагувати пов'язані моделі в одній формі"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Model — accepts_nested_attributes_for"}),e.jsx(d,{children:`class Article < ApplicationRecord
  has_many :comments
  accepts_nested_attributes_for :comments,
    allow_destroy: true,
    reject_if: :all_blank
end`}),e.jsx(x,{children:"Controller — strong params"}),e.jsx(d,{children:`# Rails 7 і раніше
def article_params
  params.require(:article).permit(
    :title, :body,
    comments_attributes: [
      :id, :body, :_destroy
    ]
  )
end

# Rails 8 — params.expect
def article_params
  params.expect(article: [
    :title, :body,
    comments_attributes: [[
      :id, :body, :_destroy
    ]]
  ])
end`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"View — fields_for у формі"}),e.jsx(d,{children:`<%= form_with(model: @article) do |f| %>
  <%= f.text_field :title %>

  <h3>Коментарі</h3>
  <%= f.fields_for :comments do |cf| %>
    <div class="comment-fields">
      <%= cf.text_area :body %>
      <%= cf.check_box :_destroy %>
      <%= cf.label :_destroy, "Видалити" %>
    </div>
  <% end %>

  <%= f.submit %>
<% end %>`}),e.jsx("div",{style:{marginTop:"0.75rem"},children:e.jsx(F,{term:"_destroy: true",desc:"Checkbox позначає запис для видалення при збереженні батьківської моделі",color:"pink"})})]})]})]})}function Kg(){const s=[{color:"blue",badge:"f.select — статичний список",code:`f.select :category,
  ["Технології", "Наука", "Спорт"],
  { prompt: "Оберіть категорію" },
  { class: "form-select" }`},{color:"purple",badge:"f.select — масив пар",code:`f.select :status,
  [
    ["Чернетка",    "draft"],
    ["Опубліковано","published"],
    ["Архів",       "archived"],
  ]`},{color:"green",badge:"f.collection_select — з БД",code:`f.collection_select :author_id,
  User.all,      # колекція
  :id,           # value
  :full_name,    # label
  { prompt: "Автор" }`},{color:"orange",badge:"options_for_select",code:`f.select :priority,
  options_for_select(
    ["Low", "Medium", "High"],
    @article.priority   # selected
  )`},{color:"cyan",badge:"f.collection_check_boxes",code:`f.collection_check_boxes :tag_ids,
  Tag.all, :id, :name do |b|
  b.label { b.check_box + b.text }
end`},{color:"yellow",badge:"f.grouped_collection_select",code:`f.grouped_collection_select
  :city_id,
  Country.all, :cities,
  :name, :id, :name`}];return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:rt,title:"Select та Collection helpers",subtitle:"Випадаючі списки з даними"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:s.slice(0,3).map(t=>e.jsxs("div",{className:`outlined-card outlined-card--${t.color}`,children:[e.jsx("span",{className:`badge badge--${t.color}`,children:t.badge}),e.jsx(d,{children:t.code})]},t.badge))}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:s.slice(3).map(t=>e.jsxs("div",{className:`outlined-card outlined-card--${t.color}`,children:[e.jsx("span",{className:`badge badge--${t.color}`,children:t.badge}),e.jsx(d,{children:t.code})]},t.badge))})]})]})}function Jg(){const s=[{color:"blue",n:1,title:"Інсталяція",code:`rails active_storage:install
rails db:migrate`},{color:"purple",n:2,title:"Model — has_one_attached",code:`class Article < ApplicationRecord
  has_one_attached :cover_image
  has_many_attached :documents
end`},{color:"green",n:3,title:"Form — file_field",code:`<%= form_with(model: @article) do |f| %>
  <%= f.file_field :cover_image,
    accept: "image/*" %>
  <%= f.file_field :documents,
    multiple: true %>
<% end %>`},{color:"orange",n:4,title:"Controller — strong params",code:`def article_params
  params.require(:article).permit(
    :title, :body,
    :cover_image,
    documents: []
  )
end`},{color:"cyan",n:5,title:"View — відображення",code:`<% if @article.cover_image.attached? %>
  <%= image_tag @article.cover_image,
    width: 400 %>

  # або resize on-the-fly:
  <%= image_tag @article.cover_image
    .variant(resize_to_limit: [400,300]) %>
<% end %>`}];return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:Ea,title:"Active Storage — завантаження файлів",subtitle:"Завантаження зображень та файлів без сторонніх гемів"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.6rem"},children:s.slice(0,3).map(t=>e.jsx(N,{icon:Y,title:`${t.n}. ${t.title}`,description:e.jsx(d,{children:t.code}),color:t.color,delay:t.n},t.n))}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.6rem"},children:[s.slice(3).map(t=>e.jsx(N,{icon:Y,title:`${t.n}. ${t.title}`,description:e.jsx(d,{children:t.code}),color:t.color,delay:t.n},t.n)),e.jsxs(B,{color:"blue",title:"Сховища",children:["Local (розробка), Amazon S3, Google Cloud, Azure — в"," ",e.jsx("code",{children:"config/storage.yml"})]})]})]})]})}function Xg(){const s=[{color:"blue",badge:"GET /articles/new",desc:"→ new action → @article = Article.new"},{color:"purple",badge:"Рендер new.html.erb",desc:"→ render '_form' з порожнім об'єктом"},{color:"green",badge:"POST /articles",desc:"→ create action → Article.new(params)"},{color:"orange",badge:"Якщо save → redirect",desc:"→ flash notice → index"},{color:"red",badge:"Якщо помилка → render :new",desc:"→ errors відображаються у формі"}];return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:ze,title:"Повний приклад — CRUD для Article",subtitle:"Від маршруту до view — все разом"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"routes.rb"}),e.jsx(d,{children:"resources :articles"}),e.jsx(x,{children:"Controller — create"}),e.jsx(d,{children:`def new
  @article = Article.new
end

def create
  @article = Article.new(article_params)
  if @article.save
    redirect_to articles_path,
      notice: "Створено!"
  else
    render :new, status: :unprocessable_entity
  end
end

private
def article_params
  params.require(:article).permit(
    :title, :body, :published
  )
end`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Views файли"}),e.jsx(d,{children:`views/articles/
  index.html.erb    # список статей
  show.html.erb     # одна стаття
  new.html.erb      # render "form"
  edit.html.erb     # render "form"
  _form.html.erb    # форма (partial)
  _article.html.erb # картка статті`}),e.jsx(x,{children:"Маршрут нового запису"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.35rem",marginTop:"0.25rem"},children:s.map((t,l)=>e.jsx(mu,{color:t.color,badge:t.badge,desc:t.desc},l))})]})]})]})}function Zg(){const s=[{color:"green",icon:ns,title:"Skinny Views",desc:"Логіку — у model або helper, не у view. View має тільки відображати."},{color:"blue",icon:at,title:"Виносити у partial",desc:"Кожна окрема смислова частина → partial з _ префіксом."},{color:"purple",icon:ze,title:"Один _form для new/edit",desc:"DRY — render 'form', article: @article в обох views."},{color:"orange",icon:ce,title:"Завжди form_with",desc:"Ніколи raw <form>. Rails додає CSRF і правильний method."},{color:"cyan",icon:Y,title:"Валідації в моделі",desc:"Перевірка даних — у Model. View лише показує errors.full_messages."},{color:"pink",icon:V,title:"flash.now для render",desc:"flash для redirect, flash.now для render — інакше flash повторюється."},{color:"yellow",icon:Ea,title:"Active Storage",desc:"Не зберігай файли вручну. has_one_attached + file_field."},{color:"red",icon:Pl,title:"Уникай raw HTML в helpers",desc:"Використовуй content_tag, tag.div замість рядка з конкатенацією."},{color:"blue",icon:Je,title:"locals у partial",desc:"Partial приймає locals — тестується ізольовано від контролера."}];return e.jsxs("div",{className:"slide slide--compact",children:[e.jsx(f,{icon:li,title:"Best Practices — Views та Forms",subtitle:"Рекомендації для чистого коду шаблонів"}),e.jsx("div",{className:"slide-grid slide-grid--3col",children:s.map((t,l)=>e.jsx(N,{icon:t.icon,title:t.title,description:t.desc,color:t.color,delay:l%3+1},l))})]})}function ej(){const s=[{color:"blue",icon:_e,title:"MVC Views",desc:"Layout → yield → view. Instance variables з controller."},{color:"purple",icon:ba,title:"ERB синтаксис",desc:"<%= %> виводить, <% %> виконує. Основа шаблонів."},{color:"green",icon:gs,title:"View Helpers",desc:"link_to, image_tag, number_to_currency, tag.div тощо."},{color:"orange",icon:at,title:"Partials",desc:"_name.html.erb, render 'partial', locals:, render @collection."},{color:"cyan",icon:va,title:"form_with",desc:"Auto CSRF, method, URL. f.text_field, f.select, f.submit."},{color:"pink",icon:ce,title:"Validation Errors",desc:"errors.full_messages, render :new, status: :unprocessable_entity."},{color:"yellow",icon:V,title:"Flash",desc:"notice/alert між запитами. flash vs flash.now."},{color:"blue",icon:Ea,title:"Active Storage",desc:"has_one_attached, file_field, image_tag variant."},{color:"purple",icon:ru,title:"fields_for",desc:"Вкладені форми, accepts_nested_attributes_for, _destroy."},{color:"cyan",icon:He,title:"CSS-фреймворки",desc:"Bootstrap — gem + @import. Tailwind — rails new --css tailwind. Обидва використовуються прямо в ERB через CSS-класи."},{color:"green",icon:lu,title:"Dockerfile",desc:"Генерується автоматично з Rails 7.1+. Multi-stage build: gems → precompile → мінімальний prod-образ."}];return e.jsxs("div",{className:"slide slide--compact",children:[e.jsx(f,{icon:Eh,title:"Підсумок лекції",subtitle:"Views, Partials & Forms — що ти знаєш тепер"}),e.jsx("div",{className:"slide-grid slide-grid--3col",children:s.map((t,l)=>e.jsx(I,{icon:t.icon,title:t.title,description:t.desc,color:t.color,delay:l%3+1},l))}),e.jsx("div",{style:{textAlign:"center",marginTop:"1.5rem"},children:e.jsx("div",{className:"title-slide__badge",style:{display:"inline-block"},children:e.jsx("p",{children:"Наступна лекція: Active Record Associations та Queries 🔍"})})})]})}function sj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:He,title:"CSS-фреймворки в Rails",subtitle:"Bootstrap · Tailwind CSS — два основних підходи до стилізації"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Bootstrap — перевірена класика"}),e.jsxs("div",{className:"outlined-card outlined-card--purple",children:[e.jsx("span",{className:"badge badge--purple",children:"Новий проект"}),e.jsx(d,{children:`# Prerequisites: Node.js + yarn
brew install node
npm install -g yarn

# Один рядок — все автоматично
rails new myapp --css bootstrap --javascript esbuild
bin/dev`}),e.jsx("span",{className:"badge badge--purple",style:{marginTop:"0.6rem"},children:"Існуючий проект — локально"}),e.jsx(d,{children:`curl -o app/assets/stylesheets/bootstrap.min.css \\
  https://cdn.jsdelivr.net/.../bootstrap.min.css
curl -o app/assets/javascripts/bootstrap.bundle.min.js \\
  https://cdn.jsdelivr.net/.../bootstrap.bundle.min.js`}),e.jsx("span",{className:"badge badge--purple",style:{marginTop:"0.6rem"},children:"Існуючий проект — CDN"}),e.jsx(d,{children:`# app/views/layouts/application.html.erb
<link rel="stylesheet" href="https://cdn.jsdelivr.net/...">
<script src="https://cdn.jsdelivr.net/..."><\/script>`}),e.jsx("span",{className:"badge badge--orange",style:{marginTop:"0.5rem"},children:"Новий проект потребує Node.js + yarn"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem",marginTop:"0.6rem"},children:[e.jsx(F,{term:"Коли обирати Bootstrap",desc:"Адмін-панелі, CRUD-інтерфейси, прототипи — де потрібен швидкий результат з готовою дизайн-системою",color:"purple"}),e.jsx(F,{term:"Як використовується у Views",desc:'Класи прямо в ERB: class="btn btn-primary", class="container", class="form-control"',color:"blue"})]}),e.jsx(x,{children:"Приклад у ERB"}),e.jsx(d,{children:`<div class="container mt-4">
  <div class="card shadow-sm">
    <div class="card-body">
      <h5 class="card-title">
        <%= @article.title %>
      </h5>
      <%= link_to "Читати",
        article_path(@article),
        class: "btn btn-outline-primary btn-sm" %>
    </div>
  </div>
</div>`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Tailwind CSS — сучасний підхід"}),e.jsxs("div",{className:"outlined-card outlined-card--cyan",children:[e.jsx("span",{className:"badge badge--cyan",children:"Встановлення (Rails 7+/8)"}),e.jsx(d,{children:`# Новий проект
rails new myapp --css tailwind

# Існуючий проект — Gemfile
gem "tailwindcss-rails"

# Термінал
bin/bundle install
bin/rails tailwindcss:install

# Запуск (компілює + watch)
bin/dev

# Або разова збірка
bin/rails tailwindcss:build`}),e.jsx("span",{className:"badge badge--orange",style:{marginTop:"0.4rem"},children:"Без npm — gem містить Tailwind CLI"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem",marginTop:"0.6rem"},children:[e.jsx(F,{term:"Utility-first підхід",desc:'Замість написання CSS — композиція класів: class="flex items-center gap-4 rounded-lg p-3 bg-blue-50"',color:"cyan"}),e.jsx(F,{term:"Чому популярний у Rails 7+/8",desc:"Вбудований у Rails generator: rails new myapp --css tailwind. Default choice для нових проектів.",color:"green"})]}),e.jsx(x,{children:"Приклад у ERB"}),e.jsx(d,{children:`<div class="max-w-lg mx-auto mt-8">
  <div class="bg-white rounded-xl shadow p-6">
    <h2 class="text-xl font-bold text-gray-800">
      <%= @article.title %>
    </h2>
    <%= link_to "Читати",
      article_path(@article),
      class: "mt-3 inline-block text-blue-600
              hover:underline text-sm" %>
  </div>
</div>`})]})]}),e.jsx(x,{children:"Що обирають у Rails-проектах"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx(N,{icon:He,title:"Bootstrap — готова дизайн-система",description:"Ідеально для адмін-панелей, CRUD-прототипів, legacy-проектів. Велика спільнота, багато готових тем і компонентів.",color:"purple",delay:1}),e.jsx(N,{icon:He,title:"Tailwind CSS — utility-first",description:"Кастомний дизайн без написання власного CSS. Default choice у Rails 7+/8. Підходить для продуктових проектів з унікальним UI.",color:"cyan",delay:2})]})]})}function tj(){const s=[{color:"blue",badge:"FROM ruby:3.3-slim",desc:"→ базовий образ з Ruby. slim = менший розмір"},{color:"purple",badge:"WORKDIR /rails",desc:"→ робоча директорія всередині контейнера"},{color:"green",badge:"COPY Gemfile* ./ → bundle",desc:"→ встановлення гемів. Шар кешується, якщо Gemfile не змінився"},{color:"orange",badge:"COPY . .",desc:"→ копіюємо код проекту в контейнер"},{color:"cyan",badge:"assets:precompile",desc:"→ компіляція CSS/JS для production"},{color:"pink",badge:'CMD ["./bin/rails","server"]',desc:"→ команда запуску при docker run"}];return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:lu,title:"Dockerfile у Rails-проекті",subtitle:"Rails 7.1+ генерує Dockerfile автоматично при rails new"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Що генерує rails new (Dockerfile)"}),e.jsx(d,{children:`# syntax=docker/dockerfile:1
# check=error=true

ARG RUBY_VERSION=3.3.0
FROM docker.io/library/ruby:$RUBY_VERSION-slim AS base

WORKDIR /rails

# Встановлення системних залежностей
RUN apt-get update -qq && \\
    apt-get install --no-install-recommends -y \\
    curl libjemalloc2 libvips postgresql-client && \\
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

ENV RAILS_ENV="production" \\
    BUNDLE_DEPLOYMENT="1" \\
    BUNDLE_WITHOUT="development:test"

# --- Шар гемів (кешується окремо) ---
FROM base AS build
RUN apt-get update -qq && \\
    apt-get install --no-install-recommends -y \\
    build-essential git libpq-dev pkg-config node

COPY Gemfile Gemfile.lock ./
RUN bundle install && \\
    rm -rf ~/.bundle "$BUNDLE_PATH"/ruby/*/cache

COPY . .
RUN bundle exec rails assets:precompile

# --- Фінальний образ ---
FROM base
COPY --from=build /usr/local/bundle /usr/local/bundle
COPY --from=build /rails /rails

RUN useradd rails --home /rails --shell /bin/bash
USER rails

EXPOSE 3000
CMD ["./bin/rails", "server", "-b", "0.0.0.0"]`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Multi-stage build — як це працює"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.35rem",marginBottom:"0.75rem"},children:s.map((t,l)=>e.jsx(mu,{color:t.color,badge:t.badge,desc:t.desc},l))}),e.jsx(x,{children:"Як використовувати"}),e.jsxs("div",{className:"outlined-card outlined-card--blue",children:[e.jsx("span",{className:"badge badge--blue",children:"Команди"}),e.jsx(d,{children:`# Зібрати образ
docker build -t myapp .

# Запустити локально
docker run -p 3000:3000 myapp

# З env-змінними
docker run \\
  -e DATABASE_URL=postgres://... \\
  -e SECRET_KEY_BASE=abc123 \\
  -p 3000:3000 myapp

# docker-compose для dev (БД + app)
docker compose up`})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem",marginTop:"0.6rem"},children:[e.jsx(F,{term:"Multi-stage build",desc:"build-образ містить компілятори та dev-інструменти. Фінальний образ — тільки те, що потрібно для запуску. Менший і безпечніший.",color:"blue"}),e.jsx(F,{term:".dockerignore",desc:"Генерується поряд. Виключає tmp/, log/, .git, node_modules — не потрапляють в образ.",color:"green"})]}),e.jsx(B,{color:"orange",title:"Де використовується",children:"Деплой на Railway, Fly.io, Render, AWS ECS, Heroku (container stack) — всі очікують саме Dockerfile. У development зазвичай запускають без Docker."})]})]})]})}const lj=[{id:1,title:"Титульний слайд",component:ij},{id:2,title:"Мета заняття",component:rj},{id:3,title:"Що таке Active Record?",component:aj},{id:4,title:"Міграції",component:cj},{id:5,title:"Типи колонок",component:oj},{id:6,title:"ActiveRecord::Relation",component:dj},{id:7,title:"Запити — основи",component:uj},{id:8,title:"Ланцюжки запитів",component:mj},{id:9,title:"Scopes",component:pj},{id:10,title:"Валідації",component:hj},{id:11,title:"Enum",component:fj},{id:12,title:"Колбеки (Callbacks)",component:xj},{id:13,title:"CRUD у коді",component:gj},{id:14,title:"Seed-дані",component:jj},{id:15,title:"Rails Console",component:_j},{id:16,title:"Best Practices",component:yj},{id:17,title:"Підсумок",component:vj}];function nj(){return e.jsx(Hs,{slides:lj})}function ij(){return e.jsxs("div",{className:"slide slide--centered slide--gradient-blue-purple",children:[e.jsx("div",{className:"title-slide__icon-wrapper",children:e.jsx(le,{})}),e.jsx("h1",{className:"title-slide__title",children:"Моделі та Active Record"}),e.jsx("p",{className:"title-slide__english",children:"Міграції · запити · валідації · колбеки · scopes"}),e.jsx("div",{className:"title-slide__badge",children:e.jsx("p",{children:"Лекція 7 · Ruby on Rails"})})]})}function rj(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ns,title:"Мета заняття",subtitle:"Що ти знатимеш після цієї лекції"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx(N,{icon:le,title:"Active Record — що це?",description:"Зрозуміти патерн ORM та як Rails перетворює Ruby-об'єкти на рядки таблиці БД",color:"blue",delay:1}),e.jsx(N,{icon:ni,title:"Міграції",description:"Створювати та застосовувати міграції для зміни схеми бази даних безпечно і контрольовано",color:"green",delay:2}),e.jsx(N,{icon:zl,title:"Запити до БД",description:"Використовувати find, where, order, limit, select — без написання SQL вручну",color:"purple",delay:3}),e.jsx(N,{icon:nt,title:"Scopes",description:"Оголошувати іменовані scope для повторюваних умов та ланцюжків запитів",color:"orange",delay:4}),e.jsx(N,{icon:ce,title:"Валідації",description:"Захищати дані від некоректних значень на рівні моделі до збереження в БД",color:"red",delay:5}),e.jsx(N,{icon:ze,title:"Колбеки",description:"Виконувати код автоматично до або після збереження, оновлення, видалення запису",color:"cyan",delay:6})]})]})})}function aj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:le,title:"Що таке Active Record?",subtitle:"ORM — Object-Relational Mapping"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Без ORM — вручну"}),e.jsx(d,{children:`# Звичайний SQL
result = db.execute(
  "SELECT * FROM articles WHERE id = 1"
)
title = result[0]["title"]  # хеш, не об'єкт

db.execute(
  "INSERT INTO articles (title, body) VALUES (?, ?)",
  ["Привіт", "Текст статті"]
)`}),e.jsx(x,{children:"З Active Record — магія"}),e.jsx(d,{children:`# Ruby-об'єкти замість SQL
article = Article.find(1)
article.title          # => "Привіт"

Article.create!(
  title: "Привіт",
  body:  "Текст статті"
)`}),e.jsx(B,{title:"Патерн Active Record",color:"blue",children:"Кожен клас моделі = одна таблиця БД. Кожен екземпляр = один рядок. Rails сам пише SQL — ти пишеш Ruby."})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.6rem"},children:[e.jsx(x,{children:"Що дає Active Record"}),e.jsx(I,{icon:le,title:"CRUD без SQL",description:"create, read, update, delete — через Ruby-методи",color:"blue",delay:1}),e.jsx(I,{icon:ce,title:"Валідації",description:"Перевірка даних до збереження в БД",color:"green",delay:2}),e.jsx(I,{icon:ze,title:"Колбеки",description:"Автоматичний код до/після збереження",color:"purple",delay:3}),e.jsx(I,{icon:nt,title:"Запити",description:"where, order, limit, joins — зручний DSL",color:"orange",delay:4}),e.jsx(I,{icon:Is,title:"Асоціації",description:"belongs_to, has_many — зв'язки між таблицями (Лекція 8!)",color:"cyan",delay:5}),e.jsx("div",{className:"outlined-card outlined-card--green fade-in-delay-3",children:e.jsxs("p",{style:{margin:0,fontSize:"0.88rem",color:"var(--accent-green-text)"},children:["💡 ",e.jsx("strong",{children:"Конвенція:"})," клас ",e.jsx("code",{children:"Article"})," → таблиця"," ",e.jsx("code",{children:"articles"}),". Rails автоматично знаходить таблицю за назвою класу у множині."]})})]})]})]})}function cj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:ni,title:"Міграції",subtitle:"Версійний контроль для схеми бази даних"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Генерація та запуск"}),e.jsx(d,{children:`# Створити нову таблицю
rails generate model Article title:string body:text published:boolean views:integer slug:string

# Додати колонку до існуючої таблиці
rails generate migration AddViewsToArticles views:integer

# Перейменувати колонку
rails generate migration RenameBodyInArticles
rails generate migration RenameBodyInArticles body:content

# Застосувати всі нові міграції
rails db:migrate

# Відкотити останню міграцію
rails db:rollback

# Переглянути статус усіх міграцій додатку
rails db:migrate:status`}),e.jsxs(B,{title:"Правило іменування",color:"purple",children:["Назва міграції описує дію: ",e.jsx("code",{children:"Add"}),", ",e.jsx("code",{children:"Remove"}),","," ",e.jsx("code",{children:"Create"}),", ",e.jsx("code",{children:"Rename"})," + що і де. Rails сам генерує потрібний код!"," ",e.jsx("p",{}),e.jsx("a",{href:"https://guides.rubyonrails.org/active_record_migrations.html",target:"_blank",rel:"noopener noreferrer",children:"📖 Rails Guides →"})]}),e.jsxs(B,{title:"⚠️ Генератор — лише заготовка!",color:"orange",children:[e.jsx("code",{children:"null: false"}),", ",e.jsx("code",{children:"default:"})," та ",e.jsx("code",{children:"add_index"})," генератор не додає — їх потрібно дописати вручну у файлі міграції перед запуском"," ",e.jsx("code",{children:"rails db:migrate"}),"."]}),e.jsxs(B,{title:"🔧 Автоматичні колонки",color:"blue",children:["Rails додає ",e.jsx("code",{children:"id"})," (bigint, primary key) до кожної таблиці автоматично.",e.jsx("br",{}),"Генератор також додає ",e.jsx("code",{children:"t.timestamps"}),", який створює ",e.jsx("code",{children:"created_at"})," ","та ",e.jsx("code",{children:"updated_at"}),".",e.jsx("br",{}),"Щоб змінити тип id: ",e.jsx(d,{children:"create_table :articles, id: :uuid"})]})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Файл міграції"}),e.jsx(d,{children:`# db/migrate/20240315_create_articles.rb
class CreateArticles < ActiveRecord::Migration[7.1]
  def change
    create_table :articles do |t|
      t.string  :title,     null: false
      t.text    :body,      null: false
      t.boolean :published, default: false, null: false
      t.integer :views,     default: 0
      t.string  :slug

      t.datetime :updated_at, null: false  # just updated_at
    end

    add_index :articles, :slug, unique: true
    add_index :articles, :published
  end
end`}),e.jsx(x,{children:"Змінити структуру"}),e.jsx(d,{children:`class AddViewsToArticles < ActiveRecord::Migration[7.1]
  def change
    add_column :articles, :views, :integer, default: 0
    add_index  :articles, :views
  end
end

class RenameBodyInArticles < ActiveRecord::Migration[7.1]
  def change
    rename_column :articles, :body, :content
  end
end`})]})]})]})}function oj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:ni,title:"Типи колонок",subtitle:"Що можна зберігати в БД"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Основні типи"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.45rem"},children:[e.jsx(ne,{letter:"string",title:"string",description:"Короткий текст до ~255 символів: name, email, slug, title",color:"blue",delay:1}),e.jsx(ne,{letter:"text",title:"text",description:"Довгий текст без обмеження: body, description, content",color:"green",delay:2}),e.jsx(ne,{letter:"integer",title:"integer",description:"Ціле число: views, position, age, count",color:"purple",delay:3}),e.jsx(ne,{letter:"float",title:"float",description:"Наближене дробове число. Використовується лише коли невелика похибка не критична: відсотки, статистика",color:"orange",delay:4}),e.jsx(ne,{letter:"decimal",title:"decimal",description:"Точне дробове число. Використовується для price, rating, latitude, longitude",color:"orange",delay:5}),e.jsx(ne,{letter:"boolean",title:"boolean",description:"true / false: published, active, verified",color:"cyan",delay:5}),e.jsx(ne,{letter:"datetime",title:"datetime",description:"Дата і час: published_at, confirmed_at (timestamps — автоматично)",color:"red",delay:6}),e.jsx(ne,{letter:"json",title:"json / jsonb",description:"Структуровані дані — об'єкти та масиви (PostgreSQL; jsonb — з індексами)",color:"blue",delay:7})]})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Опції колонок"}),e.jsx(d,{children:`create_table :articles do |t|
  # null: false — обов'язкове поле
  t.string  :title,     null: false
  # default — значення за замовчуванням
  t.boolean :published, default: false, null: false
  t.integer :views,     default: 0
  # limit — максимальна довжина (string)
  t.string  :code,      limit: 10
  # precision та scale — для decimal
  t.decimal :price,     precision: 10, scale: 2
end`}),e.jsxs(B,{title:"💰 Для грошей та координат",color:"orange",children:["Завжди використовуй ",e.jsx("code",{children:"decimal"})," з ",e.jsx("code",{children:"precision: 10, scale: 2"})," —"," ",e.jsx("code",{children:"float"})," дає помилки округлення!"]}),e.jsxs(B,{title:"Спеціальні типи",color:"cyan",children:[e.jsx("code",{children:"references"})," — для зв'язків між таблицями. Детальніше — ",e.jsx("a",{href:"#/8",children:" Лекція 8 🔜 "}),e.jsx("br",{}),e.jsx("code",{children:"binary"})," — майже не використовується у сучасному Rails, оскільки для файлів та зображень є Active Storage."]}),e.jsxs(B,{title:"string vs text",color:"purple",children:[e.jsx("code",{children:"string"})," — до 255 символів, індексується, для коротких значень: name, email, slug.",e.jsx("br",{}),e.jsx("code",{children:"text"})," — необмежено, не індексується напряму, для довгого контенту: body, description."]}),e.jsxs(B,{title:"Основні розміри integer",color:"green",children:[e.jsx("code",{children:"limit: 4"})," → стандартний integer (за замовчуванням)",e.jsx("br",{}),e.jsx("code",{children:"limit: 8"})," → bigint — саме такий використовується для ",e.jsx("code",{children:"id"})]}),e.jsxs(B,{title:"date vs time vs datetime vs timestamp",color:"blue",children:[e.jsx("code",{children:"date"})," — тільки дата без часу: ",e.jsx("code",{children:"birthday"}),", ",e.jsx("code",{children:"expiry_date"}),e.jsx("br",{}),e.jsx("code",{children:"time"})," — тільки час без дати: ",e.jsx("code",{children:"opens_at"}),", ",e.jsx("code",{children:"closes_at"}),e.jsx("br",{}),e.jsx("code",{children:"datetime"})," — дата + час. Рекомендований тип у Rails, зберігається у UTC",e.jsx("br",{}),e.jsx("code",{children:"timestamp"})," — синонім ",e.jsx("code",{children:"datetime"})," у Rails",e.jsx("br",{}),"Для явного збереження timezone у PostgreSQL:",e.jsx("br",{}),e.jsx("code",{children:"t.column :published_at, :timestamptz"})]})]})]})]})}function dj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:le,title:"ActiveRecord::Relation",subtitle:"Запит — це об'єкт, а не результат"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Ідея"}),e.jsx(N,{icon:V,title:"Lazy evaluation",description:"Rails не йде в БД одразу. Спочатку будується об'єкт запиту — ActiveRecord::Relation. SQL виконується лише коли дані реально потрібні.",color:"blue",delay:1}),e.jsx(N,{icon:le,title:"Чому це важливо?",description:"Можна будувати запит поступово — додавати умови, сортування, обмеження. SQL буде лише один, оптимальний.",color:"green",delay:2}),e.jsx(N,{icon:ka,title:"Immutable",description:"Всі методи, що повертають Relation — immutable, вони повертають новий об'єкт, а не змінюють існуючий.",color:"cyan",delay:5}),e.jsx(N,{icon:Is,title:"Коли виконується SQL?",description:"Лише коли звертаємося до конкретних записів, рахуємо кількість.",color:"purple",delay:3}),e.jsx(N,{icon:V,title:"Кешування результату",description:"Після першого виконання Relation запам'ятовує дані. Повторні звертання не йдуть у БД — беруть з кешу.",color:"orange",delay:4})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Relation vs результат"}),e.jsx(d,{children:`# => ActiveRecord::Relation (SQL не виконався)
Article.all
Article.where(published: true)
Article.order(:title)
Article.limit(10)
Article.select(:id, :title)
Article.group(:published)

# => дані (SQL виконується)
Article.first        # => Article або nil
Article.last         # => Article або nil
Article.find(1)      # => Article або RecordNotFound
Article.find_by(...) # => Article або nil
Article.to_a         # => [Article, ...] або []
Article.exists?(1)      # => true або false
Article.count        # => 42
Article.sum(:views)  # => 1000
Article.minimum(:views)  # => 10
Article.maximum(:views)  # => 100
Article.average(:views) # => 42.5`}),e.jsx(x,{children:"Кеш Relation"}),e.jsx(d,{children:`articles = Article.where(published: true)

articles.each { |a| puts a.title }  # SQL виконується
articles.each { |a| puts a.views }  # кеш, БЕЗ SQL
articles.to_a                        # кеш, БЕЗ SQL

# АЛЕ count/sum/exists? — окремі SQL-запити!
articles.count                       # SELECT COUNT(*)
articles.count                       # ще один SELECT COUNT(*)

# Новий ланцюжок = новий Relation = новий кеш
articles.where(views: 100..)         # новий SQL при ітерації

# Явно завантажити у кеш заздалегідь
articles.load
articles.each { ... }                # вже без SQL`}),e.jsxs(B,{title:"💡 Головна ідея",color:"orange",children:[e.jsx("code",{children:"ActiveRecord::Relation"})," — це опис запиту, а не його результат. SQL виконується лише тоді, коли ти реально звертаєшся до даних."]}),e.jsxs(B,{title:"📖 Документація",color:"purple",children:["Більше можна дізнатися тут —"," ",e.jsx("a",{href:"https://guides.rubyonrails.org/active_record_querying.html",target:"_blank",rel:"noopener noreferrer",children:"ActiveRecord Querying →"})]})]})]})]})}function uj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:zl,title:"Запити — основи",subtitle:"Читаємо дані з бази"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Пошук"}),e.jsx(d,{children:`# find — повертає об'єкт або кидає RecordNotFound
Article.find(1)           # пошук за pimary key
Article.find([1, 2, 3])   # масив

# find_by — повертає об'єкт або nil (без exception)
Article.find_by(title: "Привіт")
Article.find_by(slug: "hello-world")

# find_by! — повертає об'єкт або RecordNotFound
Article.find_by!(slug: "hello-world")`}),e.jsx(x,{children:"Всі записи та умови"}),e.jsx(d,{children:`# Всі записи
Article.all            # повертає ActiveRecord::Relation

# WHERE умови - повертає Relation
Article.where(published: true)
Article.where(published: true, views: 0)

# ❌ SQL injection!
Article.where("views > #{params[:views]}")

# ✅ Параметризовані запити
Article.where("views > ?", 100)
Article.where("created_at > ?", 1.week.ago)

# ✅ Хеш-синтаксис (безпечний)
Article.where(views: 100..Float::INFINITY)`}),e.jsx(x,{children:"Витягування колонок"}),e.jsx(d,{children:`# pluck — одразу Array значень, без AR-об'єктів
Article.pluck(:title)
# => ["Привіт", "Hello", "Bonjour"]

Article.pluck(:id, :title)
# => [[1, "Привіт"], [2, "Hello"]]

# ids — скорочення для pluck(:id)
Article.where(published: true).ids

# pick — як pluck, але тільки перший рядок
Article.where(slug: "hello").pick(:title)

# select — Relation з обмеженими колонками (все ще AR-об'єкти)
Article.select(:id, :title)`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Перший, останній, агрегати"}),e.jsx(d,{children:`Article.first           # ORDER BY id ASC LIMIT 1
Article.first(3)        # перші 3
Article.last            # ORDER BY id DESC LIMIT 1

Article.count           # SELECT COUNT(*)
Article.count(:views)   # COUNT непорожніх
Article.sum(:views)     # SUM
Article.average(:views) # AVG
Article.maximum(:views) # MAX
Article.minimum(:views) # MIN`}),e.jsx(x,{children:"IN, NOT, перевірка існування"}),e.jsx(d,{children:`# IN
Article.where(id: [1, 2, 3])
Article.where(status: ["draft", "review"])

# NOT
Article.where.not(published: true)
Article.where.not(id: [1, 2, 3])

# EXISTS
Article.exists?(1)
Article.exists?(title: "Привіт")`}),e.jsxs(B,{title:"find vs find_by",color:"blue",children:["Використовуй ",e.jsx("code",{children:"find"}),", коли запис ",e.jsx("em",{children:"повинен"})," існувати (404 якщо ні). ",e.jsx("code",{children:"find_by"})," — коли результат може бути"," ",e.jsx("code",{children:"nil"}),"."]}),e.jsxs(B,{title:"pluck повертає Array, не Relation",color:"blue",children:["Після ",e.jsx("code",{children:"pluck"})," ланцюжок обривається — не можна додати"," ",e.jsx("code",{children:".where"})," чи ",e.jsx("code",{children:".order"}),". Використовуй у"," ",e.jsx("em",{children:"кінці"})," запиту, коли потрібні тільки значення, а не об'єкти."]}),e.jsxs(B,{title:"⚠️ any? / none? / many? — обережно",color:"orange",children:["Завантажують дані у Ruby і тільки потім перевіряють — повільніше ніж SQL.",e.jsx("br",{}),"Замість ",e.jsx("code",{children:"any?"})," → ",e.jsx("code",{children:"exists?"}),e.jsx("br",{}),"Замість ",e.jsx("code",{children:"none?"})," → ",e.jsx("code",{children:"!exists?"}),e.jsx("br",{}),"Замість ",e.jsx("code",{children:"many?"})," → ",e.jsxs("code",{children:["count ",">"," 1"]})]})]})]})]})}function mj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:nt,title:"Ланцюжки запитів",subtitle:"Побудова складних запитів крок за кроком"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Приклади ланцюжків"}),e.jsx(d,{children:`# Пошук + сортування + обмеження
Article
  .where(published: true)
  .order(created_at: :desc)
  .limit(10)

# ILIKE — пошук без урахування регістру (PostgreSQL)
Article
  .where("title ILIKE ?", "%rails%")
  .order(views: :desc)
  .limit(5)

# OR — опубліковані або популярні
Article
  .where(published: true)
  .or(Article.where("views > ?", 1000))
  .order(created_at: :desc)

# Перевірка існування у ланцюжку
Article
  .where(published: true)
  .where("views > ?", 100)
  .exists?     # => true або false`}),e.jsx(x,{children:"Динамічне додавання умов"}),e.jsx(d,{children:`# Типовий патерн у контролері:
# фільтри додаються тільки, якщо параметр є
def index
  @articles = Article.all
  @articles = @articles.where(published: true) if params[:published]
  @articles = @articles.where("title ILIKE ?", "%#{params[:q]}%") if params[:q].present?
  @articles = @articles.order(created_at: :desc)
end

# Працює, бо кожен .where повертає новий Relation,
# а SQL виконається тільки при рендері view`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Повний ланцюжок"}),e.jsx(d,{children:`# SQL виконується лише один раз — в кінці!
results =
  Article
    .where(published: true)
    .where("title ILIKE ?", "%ruby%")
    .where("views > ?", 100)
    .order(views: :desc)
    .limit(10)
    .offset(20)

results.each { |a| puts a.title }
results.to_a    # => [Article, ...]
results.count   # => число`}),e.jsx(x,{children:"group та having"}),e.jsx(d,{children:`# Кількість статей по місяцях
Article
  .group("DATE_TRUNC('month', created_at)")
  .count

# Лише місяці з більше ніж 5 статтями
Article
  .group("DATE_TRUNC('month', created_at)")
  .having("COUNT(*) > 5")
  .count`}),e.jsx(x,{children:"Скасування та перевизначення"}),e.jsx(d,{children:`# reorder — замінити ORDER BY
Article.order(:created_at).reorder(:title)
# ORDER BY title (created_at зникає)

# rewhere — замінити WHERE по полю
Article.where(status: "draft").rewhere(status: "published")
# WHERE status = 'published'

# unscope — прибрати частину ланцюжка
scope = Article.where(published: true).order(:views).limit(10)
scope.unscope(:limit)              # без LIMIT
scope.unscope(:order, :limit)      # без ORDER та LIMIT
scope.unscope(where: :published)   # прибрати конкретний where`})]})]})]})}function pj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:nt,title:"Scopes",subtitle:"Іменовані повторювані запити"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Оголошення scope"}),e.jsx(d,{children:`class Article < ApplicationRecord
  scope :published, -> { where(published: true) }
  scope :draft,     -> { where(published: [false, nil]) }

  # З параметром та дефолтним значенням
  scope :popular,   -> (min_views = 100) {
    where("views >= ?", min_views)
  }
  scope :recent,    -> { order(created_at: :desc) }
  scope :top,       -> (n = 5) { recent.limit(n) }
  scope :this_week, -> { where(created_at: 1.week.ago..) }
end`}),e.jsx(x,{children:"Оголошення class method"}),e.jsx(d,{children:`class Article < ApplicationRecord
  def self.search(query)
    return all if query.blank?
    where("title ILIKE ?", "%#{query}%")
  end

  def self.by_status(status)
    case status
    when "published" then published
    when "draft"     then draft
    when "popular"   then popular
    else all
    end
  end
end`}),e.jsx(x,{children:"Всередині scope — будь-який Relation-метод"}),e.jsx(d,{children:`scope :featured, -> {
  where(published: true)   # умова
    .where("views > ?", 1000)
    .order(views: :desc)   # сортування
    .limit(10)             # обмеження
    .select(:id, :title)   # колонки
    .joins(:comments)      # join
    .includes(:user)       # eager load
}`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Використання та ланцюжки"}),e.jsx(d,{children:`# Базове використання
Article.published           # WHERE published = true
Article.popular             # views >= 100
Article.popular(500)        # views >= 500

# Ланцюжки scopes між собою
Article.published.recent
Article.published.popular(678).top(10)
Article.this_week.published.order(:title)

# Scope + звичайні AR методи
Article.published.where("views > ?", 50).limit(5)

# Scope + class method — працює однаково!
Article.published.search("rails").recent.limit(10)
Article.by_status("popular").this_week`}),e.jsx(x,{children:"Scope vs class method — в чому різниця?"}),e.jsx(d,{children:`# Обидва повертають Relation і ланцюжаться однаково

# scope — лаконічний, але якщо лямбда повертає nil
# Rails автоматично замінює на all (безпечно)
scope :recent_if_published, -> {
  published.recent if published.any?
}
# Якщо умова false — повертає all, не nil!

# class method — якщо повертає nil — це nil!
def self.recent_if_published
  published.recent if published.any?
  # якщо false — повертає nil → ланцюжок зламається!
end`}),e.jsxs(B,{title:"Коли scope, коли метод?",color:"orange",children:[e.jsx("code",{children:"scope"})," — прості умови, фільтри, сортування.",e.jsx("br",{}),e.jsx("code",{children:"def self"})," — складна логіка з ",e.jsx("code",{children:"if/else"}),",",e.jsx("code",{children:"case"}),", обробка параметрів з різними типами."]})]})]})]})}function hj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:ce,title:"Валідації",subtitle:"Захист даних до збереження в БД"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Основні валідатори"}),e.jsx(d,{children:`class Article < ApplicationRecord
  # Обов'язкові поля
  validates :title, presence: true
  validates :body,  presence: true

  # Довжина
  validates :title, length: { minimum: 3, maximum: 200 }
  validates :body,  length: { minimum: 10 }

  # Унікальність
  validates :slug, uniqueness: true
  validates :email,
    uniqueness: { case_sensitive: false }

  # Формат
  validates :email,
    format: { with: URI::MailTo::EMAIL_REGEXP }

  # Числові значення
  validates :views,
    numericality: { greater_than_or_equal_to: 0 }

  # Включення у список
  validates :status,
    inclusion: { in: %w[draft review published] }
end`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Кілька валідацій на одному рядку"}),e.jsx(d,{children:`validates :title,
  presence: true,
  length: { minimum: 3, maximum: 200 },
  uniqueness: { case_sensitive: false }`}),e.jsx(x,{children:"Умовні валідації"}),e.jsx(d,{children:`# Тільки при публікації
validates :published_at,
  presence: true,
  if: :published?

# # Згода з умовами — тільки при реєстрації
validates :terms_accepted, acceptance: true, on: :create, message: "Необхідно прийняти умови використання"`}),e.jsx(x,{children:"Перевірка та помилки"}),e.jsx(d,{children:`article = Article.new(title: "")

article.valid?        # => false (запускає валідації)
article.invalid?      # => true

article.errors.full_messages
# => ["Title can't be blank",
#     "Body can't be blank"]

article.errors[:title]
# => ["can't be blank"]

# Збереження
article.save          # => false якщо невалідний
article.save!         # => кидає ActiveRecord::RecordInvalid`})]})]})]})}function fj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:_e,title:"Enum",subtitle:"Іменовані цілочисельні значення атрибута"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Міграція та оголошення"}),e.jsx(d,{children:`# Модель
class Article < ApplicationRecord
  enum status: { draft: 0, published: 1, archived: 2 }
end

# Міграція — зберігається як integer
add_column :articles, :status, :integer, default: 0, null: false`}),e.jsx(x,{children:"Методи, що генеруються автоматично"}),e.jsx(d,{children:`# Перевірка стану
article.draft?       # => true/false
article.published?   # => true/false

# Зміна стану
article.published!   # зберігає одразу в БД
article.status = "archived"
article.save

# Scopes — генеруються автоматично!
Article.draft        # WHERE status = 0
Article.published    # WHERE status = 1
Article.archived     # WHERE status = 2

# Значення
article.status       # => "published"
article.status_before_type_cast  # => 1`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Валідація та використання"}),e.jsx(d,{children:`# Валідація через inclusion
validates :status,
  inclusion: { in: Article.statuses.keys }

# Всі можливі значення
Article.statuses
# => { "draft" => 0, "published" => 1, "archived" => 2 }

# У контролері
article.update!(status: :published)

# У запитах
Article.where(status: :published)
Article.where.not(status: :archived)`}),e.jsx(x,{children:"Enum vs Константа"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(N,{icon:Y,title:"Enum",description:"Зберігається як integer у БД. Генерує scopes, методи перевірки та зміни стану. Використовується для статусів, типів, ролей.",color:"green",delay:1}),e.jsx(N,{icon:le,title:"Константа",description:"Просто масив рядків для довідки або валідації через inclusion. Не генерує методів. Використовується для списків, що не зберігаються у БД.",color:"blue",delay:2})]}),e.jsx(B,{title:"⚠️ Обережно з порядком",color:"orange",children:"Ніколи не змінюй числові значення enum після того як дані вже є в БД — це зіпсує існуючі записи. Тільки додавай нові значення в кінець."})]})]})]})}function xj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:ze,title:"Колбеки (Callbacks)",subtitle:"Автоматичний код до і після подій"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Lifecycle колбеки"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem",marginBottom:"0.75rem"},children:[e.jsx(ne,{letter:"before",title:"before_validation",description:"Перед перевіркою валідацій",color:"blue",delay:1}),e.jsx(ne,{letter:"before",title:"before_save",description:"Перед будь-яким збереженням (create/update)",color:"green",delay:2}),e.jsx(ne,{letter:"before",title:"before_create",description:"Тільки перед першим збереженням",color:"purple",delay:3}),e.jsx(ne,{letter:"after",title:"after_save",description:"Після успішного збереження",color:"orange",delay:4}),e.jsx(ne,{letter:"before",title:"before_destroy",description:"Перед видаленням запису",color:"red",delay:5}),e.jsx(ne,{letter:"after",title:"after_commit",description:"Після завершення транзакції БД",color:"cyan",delay:6})]})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Приклади у коді"}),e.jsx(d,{children:`class Article < ApplicationRecord
  before_validation :normalize_title
  before_save       :generate_slug
  after_create      :notify_subscribers
  before_destroy    :check_dependencies

  private

  def normalize_title
    self.title = title.to_s.strip.capitalize
  end

  def generate_slug
    self.slug ||= title.split.first(3).join(" ").parameterize.truncate(50, omission: "")
    # "Hello World From Rails" => "hello-world-from"
  end

  def notify_subscribers
    # Надіслати email (краще через Active Job!)
    ArticleMailer.notify_all(self).deliver_later
  end

  def check_dependencies
    if comments.any?
      errors.add(:base, "Спочатку видали коментарі")
      throw :abort  # зупиняє видалення!
    end
  end
end`}),e.jsx("div",{className:"outlined-card outlined-card--orange fade-in-delay-3",children:e.jsxs("p",{style:{margin:0,fontSize:"0.88rem",color:"var(--accent-orange-text)"},children:[e.jsx("strong",{children:"⚠️ throw :abort"})," у ",e.jsx("code",{children:"before_*"})," колбеку зупиняє збереження/видалення. Без нього колбек просто виконається."]})})]})]})]})}function gj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:ct,title:"CRUD у коді",subtitle:"Create · Read · Update · Delete"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Create — створення"}),e.jsx(d,{children:`# new + save
article = Article.new(title: "Hello", body: "...")
article.save       # => true/false
article.save!      # => true або exception

# create (new + save разом)
article = Article.create(title: "Hello", body: "...")
article = Article.create!(title: "Hello", body: "...")

# find_or_create
Article.find_or_create_by(slug: "hello") do |article|
  article.title = "Hello"
  article.body  = "..."
end
Article.find_or_initialize_by(slug: "hello")`}),e.jsx(x,{children:"Update — оновлення"}),e.jsx(d,{children:`article = Article.find(1)

# Один атрибут
article.title = "Новий заголовок"
article.save

# Кілька атрибутів
article.update(title: "Новий", published: true)
article.update!(views: 0)  # або exception

# Без колбеків та валідацій (обережно!)
article.update_column(:views, 0)
article.update_columns(views: 0, published: true)

# Масове оновлення
Article.where(published: false)
       .update_all(published: true)`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Delete — видалення"}),e.jsx(d,{children:`article = Article.find(1)

# destroy — з колбеками
article.destroy   # повертає об'єкт
article.destroy!  # або exception

# delete — без колбеків, прямий SQL
article.delete

# Масове видалення
Article.where(published: false).destroy_all  # з колбеками
Article.where(published: false).delete_all   # без колбеків`}),e.jsx(x,{children:"Атрибути та зміни"}),e.jsx(d,{children:`article = Article.find(1)
article.title = "Новий"

article.changed?           # => true
article.changes            # => { "title" => ["Старий", "Новий"] }
article.title_changed?     # => true
article.title_was          # => "Старий"

article.attributes         # => хеш всіх атрибутів
article.persisted?         # => true (збережений в БД)
article.new_record?        # => false`}),e.jsxs(B,{title:"destroy vs delete",color:"red",children:["Завжди використовуй ",e.jsx("code",{children:"destroy"})," — він запускає колбеки та видаляє залежні записи (якщо налаштовано ",e.jsx("code",{children:"dependent:"}),")."]})]})]})]})}function jj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:le,title:"Seed-дані",subtitle:"Наповнення БД тестовими даними"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"db/seeds.rb"}),e.jsx(d,{children:`# db/seeds.rb

# Очистити перед заповненням
puts "Очищаємо базу..."
Article.destroy_all

# Створити тестові дані
puts "Створюємо статті..."

10.times do |i|
  Article.create!(
    title:     "Стаття #{i + 1}",
    body:      "Текст статті #{i + 1}. " * 5,
    published: i.even?,
    views:     rand(0..1000)
  )
end

puts "Готово! Створено #{Article.count} статей."

# Запуск:
# rails db:seed
# rails db:reset  (drop + create + migrate + seed)`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Faker gem — реалістичні дані"}),e.jsx(d,{children:`# Gemfile
gem 'faker', group: :development

# db/seeds.rb
require 'faker'

20.times do
  Article.create!(
    title:     Faker::Lorem.sentence(word_count: 5),
    body:      Faker::Lorem.paragraphs(number: 3).join("\\n\\n"),
    published: Faker::Boolean.boolean(true_ratio: 0.7),
    views:     Faker::Number.between(from: 0, to: 5000),
    slug:      Faker::Internet.slug
  )
end`}),e.jsx(x,{children:"find_or_create — ідемпотентні seeds"}),e.jsx(d,{children:`# Безпечно запускати кілька разів
["rails", "ruby", "web"].each do |name|
  Tag.find_or_create_by!(name: name)
end`}),e.jsx("div",{className:"outlined-card outlined-card--cyan fade-in-delay-3",children:e.jsxs("p",{style:{margin:0,fontSize:"0.88rem",color:"var(--accent-cyan-text)"},children:["💡 ",e.jsx("code",{children:"rails db:reset"})," = ",e.jsx("code",{children:"db:drop"})," +"," ",e.jsx("code",{children:"db:create"})," + ",e.jsx("code",{children:"db:migrate"})," +"," ",e.jsx("code",{children:"db:seed"})," — зручно для чистого старту в розробці."]})})]})]})]})}function _j(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:Je,title:"Rails Console",subtitle:"Інтерактивне середовище для роботи з моделями"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Запуск та основи"}),e.jsx(d,{children:`# Запуск консолі
rails console   # або: rails c
rails c --sandbox  # зміни не зберігаються!

# Перезавантажити код без перезапуску
reload!`}),e.jsx(x,{children:"Типовий сеанс роботи"}),e.jsx(d,{children:`# Перевірити кількість записів
Article.count
# => 10

# Знайти та переглянути
a = Article.first
a.title    # => "Стаття 1"
a.published  # => true

# Створити
Article.create!(
  title: "Тест з консолі",
  body: "Перевіряємо Active Record" * 2
)

# Оновити
Article.find(1).update!(published: true)

# Видалити
Article.last.destroy`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Корисні прийоми в консолі"}),e.jsx(d,{children:`# Переглянути SQL запит
Article.where(published: true).to_sql
# => "SELECT "articles".* FROM "articles"
#     WHERE "articles"."published" = true"

# Переглянути explain
Article.where(published: true).explain

# Час виконання
Benchmark.ms { Article.all.to_a }
# => 12.4 ms

# Переглянути атрибути
Article.first.attributes
# => {"id"=>1, "title"=>"...", ...}

# Завантажити 5 перших статей разом з їх коментарями
Article.includes(:comments).first(5)
# Rails log:
# SELECT * FROM articles LIMIT 5
# SELECT * FROM comments WHERE article_id IN (1,2,3,4,5)`}),e.jsxs(B,{title:"--sandbox режим",color:"green",children:[e.jsx("code",{children:"rails c --sandbox"})," — всі зміни відкочуються при виході. Ідеально для експериментів без ризику зіпсувати дані."]}),e.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-3",style:{marginTop:"0.5rem"},children:e.jsxs("p",{style:{margin:0,fontSize:"0.88rem",color:"var(--accent-blue-text)"},children:["💡 Натисни ",e.jsx("strong",{children:"↑"})," для повторення попередньої команди.",e.jsx("br",{}),"До останнього результату можна звертатися через ",e.jsx("code",{children:"_"})," (підкреслення)",e.jsx(d,{children:`Article.find(1)  # => #<Article id: 1, ...>
_.title          # => "Hello"`})]})})]})]})]})}function yj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:Y,title:"Best Practices",subtitle:"Як писати моделі правильно"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.65rem"},children:[e.jsx(N,{icon:ce,title:"null: false у міграціях",description:"Завжди додавай null: false для обов'язкових полів — це захист на рівні БД, незалежно від Rails",color:"green",delay:1}),e.jsx(N,{icon:zl,title:"Індекси для пошуку",description:"Будь-яке поле у WHERE або ORDER — кандидат на індекс. add_index або references автоматично",color:"blue",delay:2}),e.jsx(N,{icon:nt,title:"Scopes замість дублювання",description:"Якщо один where зустрічається двічі — виноси у scope. Це DRY і самодокументуючий код",color:"purple",delay:3}),e.jsx(N,{icon:Pl,title:"Колбеки — обережно",description:"Не зловживай колбеками — вони приховують логіку. Складні операції — краще в сервісні об'єкти",color:"orange",delay:4})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.65rem"},children:[e.jsx(N,{icon:V,title:"update_column без валідацій",description:"update_column обходить валідації і колбеки — використовуй лише коли це точно потрібно",color:"red",delay:1}),e.jsx(N,{icon:le,title:"find_or_create_by у seeds",description:"Роби seeds ідемпотентними — безпечно запускати кілька разів без дублікатів",color:"cyan",delay:2}),e.jsx(N,{icon:Je,title:"Перевіряй to_sql",description:"У консолі переглядай .to_sql — розумій що Rails генерує. Несподіваний запит = проблема",color:"green",delay:3}),e.jsx(x,{children:"Структура моделі (порядок)"}),e.jsx(d,{children:`class Article < ApplicationRecord
  # 1. Constants
  STATUSES = %w[draft published].freeze

  # 2. Enums
  enum status: { draft: 0, published: 1 }

  # 3. Associations (Лекція 8!)
  belongs_to :user
  has_many   :comments

  # 4. Validations
  validates :title, presence: true

  # 5. Scopes
  scope :published, -> { where(published: true) }

  # 6. Callbacks
  before_save :generate_slug

  # 7. Class methods
  def self.search(q) = where("title ILIKE ?", "%#{q}%")

  # 8. Instance methods
  def to_s = title

  private
  def generate_slug = ...
end`})]})]})]})}function vj(){return e.jsxs("div",{className:"slide slide--centered slide--gradient-blue-purple",children:[e.jsx(f,{icon:Y,title:"Підсумок",subtitle:"Що ти сьогодні опанував(ла)"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",style:{marginTop:"1rem"},children:[e.jsx(I,{icon:le,title:"Active Record — ORM",description:"Клас = таблиця, екземпляр = рядок. Rails генерує SQL автоматично",color:"blue",delay:1}),e.jsx(I,{icon:ni,title:"Міграції",description:"Версійний контроль схеми БД — null: false, foreign_key, index",color:"green",delay:2}),e.jsx(I,{icon:zl,title:"Запити",description:"find, where, order, limit, select — без SQL, з ланцюжками",color:"purple",delay:3}),e.jsx(I,{icon:nt,title:"Scopes",description:"Іменовані повторювані запити, що можна ланцюжити",color:"orange",delay:4}),e.jsx(I,{icon:ce,title:"Валідації",description:"presence, length, uniqueness, format — захист до збереження",color:"red",delay:5}),e.jsx(I,{icon:ze,title:"Колбеки",description:"before_save, after_create — автоматичний код на події моделі",color:"cyan",delay:6})]}),e.jsx("div",{className:"outlined-card outlined-card--blue",style:{marginTop:"1.5rem",maxWidth:"700px"},children:e.jsxs("p",{style:{textAlign:"center",margin:0,color:"var(--accent-blue-text)",fontSize:"1rem"},children:["➡️ ",e.jsx("strong",{children:"Наступна лекція 8:"})," Зв'язки між моделями —"," ",e.jsx("code",{children:"belongs_to"}),", ",e.jsx("code",{children:"has_many"}),", ",e.jsx("code",{children:"has_many :through"})]})})]})}const Nj=[{id:1,title:"Титульний слайд",component:kj},{id:2,title:"Мета заняття",component:wj},{id:3,title:"Що таке associations?",component:Sj},{id:4,title:"belongs_to",component:Rj},{id:5,title:"has_many",component:Ej},{id:6,title:"has_one",component:Cj},{id:7,title:"Міграції та foreign keys",component:Aj},{id:8,title:"Методи асоціацій",component:Tj},{id:9,title:"has_many :through",component:Pj},{id:10,title:"has_and_belongs_to_many",component:zj},{id:11,title:"Dependent: destroy",component:Lj},{id:12,title:"Eager loading (N+1)",component:Mj},{id:13,title:"Валідації у зв'язках",component:Dj},{id:14,title:"Повний приклад блогу",component:Oj},{id:15,title:"Best Practices",component:Ij},{id:16,title:"Підсумок",component:Bj}];function bj(){return e.jsx(Hs,{slides:Nj})}function kj(){return e.jsxs("div",{className:"slide slide--centered slide--gradient-blue-purple",children:[e.jsx("div",{className:"title-slide__icon-wrapper",children:e.jsx(Dt,{})}),e.jsx("h1",{className:"title-slide__title",children:"Зв'язки між моделями"}),e.jsx("p",{className:"title-slide__english",children:"belongs_to · has_many · has_one · :through · eager loading"}),e.jsx("div",{className:"title-slide__badge",children:e.jsx("p",{children:"Лекція 8 · Ruby on Rails"})})]})}function wj(){return e.jsx("div",{className:"slide",children:e.jsxs("div",{className:"slide__content",children:[e.jsx(f,{icon:ns,title:"Мета заняття",subtitle:"Що ти знатимеш після цієї лекції"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsx(N,{icon:Dt,title:"belongs_to та has_many",description:"Зрозуміти базові зв'язки «один до багатьох» та як Rails автоматично генерує методи для них",color:"blue",delay:1}),e.jsx(N,{icon:xs,title:"has_many :through",description:"Реалізовувати зв'язки «багато до багатьох» через проміжну таблицю з додатковими атрибутами",color:"purple",delay:2}),e.jsx(N,{icon:le,title:"Міграції та foreign keys",description:"Правильно налаштовувати міграції з foreign_key: true та index для оптимальної роботи БД",color:"green",delay:3}),e.jsx(N,{icon:V,title:"Eager loading (N+1)",description:"Розуміти проблему N+1 запитів та вирішувати її через includes/eager_load/preload",color:"orange",delay:4}),e.jsx(N,{icon:ce,title:"dependent: :destroy",description:"Контролювати, що відбувається із залежними записами при видаленні батьківського об'єкта",color:"red",delay:5}),e.jsx(N,{icon:Je,title:"Повний приклад блогу",description:"User → Posts → Comments → Tags: зв'язати всі моделі блогу та перевірити через rails console",color:"cyan",delay:6})]})]})})}function Sj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:Dt,title:"Що таке Associations?",subtitle:"Зв'язки між таблицями бази даних"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Без асоціацій — вручну"}),e.jsx(d,{children:`# Знайти всі пости конкретного юзера
user = User.find(1)
posts = Post.where(user_id: user.id)

# Видалити юзера та всі його пости
Post.where(user_id: user.id).destroy_all
user.destroy`}),e.jsx(x,{children:"З асоціаціями — Rails-магія"}),e.jsx(d,{children:`# Знайти всі пости юзера
user = User.find(1)
posts = user.posts  # Rails сам пише WHERE

# Видалити юзера та всі його пости
user.destroy  # якщо dependent: :destroy`}),e.jsx(B,{title:"Навіщо потрібні асоціації?",color:"blue",children:"Вони дозволяють Rails автоматично генерувати SQL-запити та надають зручний Ruby API для роботи зі зв'язаними даними."}),e.jsxs(B,{title:"📖 Документація",color:"yellow",children:["Більше можна дізнатися тут —"," ",e.jsx("a",{href:"https://guides.rubyonrails.org/association_basics.html ",target:"_blank",rel:"noopener noreferrer",children:"Active Record Associations →"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsx(x,{children:"Типи зв'язків у Rails"}),e.jsx(I,{icon:Is,title:"belongs_to",description:"Цей запис належить іншому. Foreign key — тут. Наприклад: Post belongs_to User — у таблиці posts є user_id",color:"blue",delay:1}),e.jsx(I,{icon:uu,title:"has_many",description:"Цей запис має багато інших. Foreign key — там. Наприклад: User has_many Posts — у таблиці posts є user_id",color:"green",delay:2}),e.jsx(I,{icon:le,title:"has_one",description:"Цей запис має рівно один інший. Foreign key — там. Наприклад: User has_one Profile — у таблиці profiles є user_id",color:"purple",delay:3}),e.jsx(I,{icon:xs,title:"has_many :through",description:"Багато-до-багатьох через проміжну модель. Наприклад: Post has_many Tags through Taggings — можна додати атрибути до проміжної таблиці",color:"orange",delay:4}),e.jsx(I,{icon:Dt,title:"has_and_belongs_to_many",description:"Багато-до-багатьох без проміжної моделі. Наприклад: Post has_and_belongs_to_many Categories — проміжна таблиця є, але моделі для неї немає",color:"cyan",delay:5})]})]})]})}function Rj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:Is,title:"belongs_to",subtitle:"Foreign key знаходиться в цій таблиці"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Модель та міграція"}),e.jsx(d,{children:`# app/models/post.rb
class Post < ApplicationRecord
  belongs_to :user  # обов'язково за замовчуванням!
end

# db/migrate/..._create_posts.rb
class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.string  :title,   null: false
      t.text    :body
      t.references :user, null: false, foreign_key: true
      # ^ це додає user_id + index автоматично!
      t.timestamps
    end
  end
end`}),e.jsxs(B,{title:"Що додає t.references?",color:"green",children:["Автоматично створює колонку ",e.jsx("code",{children:"user_id"}),", додає індекс та опціонально foreign key constraint у БД."]})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Методи, які генерує belongs_to"}),e.jsx(d,{children:`post = Post.find(1)

post.user          # => повертає User-об'єкт
post.user_id       # => 42 (id з колонки)
post.user = User.find(2)  # змінює зв'язок
post.build_user(name: "New")  # новий User
post.create_user(name: "New") # зберігає одразу`}),e.jsx(x,{children:"optional: true"}),e.jsx(d,{children:`# Якщо зв'язок не обов'язковий:
class Post < ApplicationRecord
  belongs_to :user, optional: true
end
# Тепер post.user може бути nil
# без помилки валідації

# Перевірка
post.user.nil?     # => false
post.user?  # => true`}),e.jsx("div",{className:"outlined-card outlined-card--orange fade-in-delay-3",children:e.jsxs("p",{style:{margin:0,fontSize:"0.88rem",color:"var(--accent-orange-text)"},children:[e.jsx("strong",{children:"⚠️ Зверни увагу:"})," Rails 5+ вимагає"," ",e.jsx("code",{children:"belongs_to"})," за замовчуванням — якщо ",e.jsx("code",{children:"user_id"})," ","відсутній, валідація не пройде."]})})]})]})]})}function Ej(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:uu,title:"has_many",subtitle:"Один запис → багато залежних записів"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Оголошення зв'язку"}),e.jsx(d,{children:`# app/models/user.rb
class User < ApplicationRecord
  has_many :posts               # posts.user_id
  has_many :comments            # comments.user_id
  has_many :post_comments,
    through: :posts,
    source: :comments  # через проміжну
end`}),e.jsx(x,{children:"CRUD через асоціацію"}),e.jsx(d,{children:`user = User.find(1)

# Читання
user.posts            # => ActiveRecord::Relation
user.posts.count      # => SQL: COUNT(*)
user.posts.first      # => перший пост

# Створення (автоматично ставить user_id)
user.posts.create(title: "Новий пост", body: "...")
user.posts.build(title: "Ще не збережений")

# Умови
user.posts.where(published: true)
user.posts.order(created_at: :desc).limit(5)`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Корисні методи колекції"}),e.jsx(d,{children:`user.posts.empty?     # => true/false
user.posts.any?       # => true/false
user.posts.size       # не завантажено → COUNT(*), завантажено → з пам'яті
user.posts.length     # не завантажено → SELECT * (всі записи) і рахує через Ruby, завантажено → з пам'яті

# Додати існуючий запис до колекції
post = Post.find(5)
user.posts << post         # ставить user_id = user.id

# Видалити зі зв'язку (не видаляє запис!)
user.posts.delete(post)    # ставить user_id = nil

# Перевірити, чи є в колекції
user.posts.include?(post)  # => true/false`}),e.jsxs(B,{title:"posts vs posts.all",color:"purple",children:[e.jsx("code",{children:"user.posts"})," — це scope, не масив. SQL виконається лише коли ти ітеруєш або викликаєш ",e.jsx("code",{children:".to_a"}),"."]}),e.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-3",style:{marginTop:"0.5rem"},children:e.jsxs("p",{style:{margin:0,fontSize:"0.88rem",color:"var(--accent-blue-text)"},children:["💡 ",e.jsx("code",{children:"user.posts.build"})," — новий об'єкт в памʼяті,"," ",e.jsx("code",{children:"user.posts.create"})," — одразу зберігає в БД."]})})]})]})]})}function Cj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:le,title:"has_one",subtitle:"Рівно один пов'язаний запис"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Коли використовувати has_one?"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",marginBottom:"1rem"},children:[e.jsx(N,{icon:Y,title:"User → Profile",description:"Кожен юзер має один профіль з bio, avatar, соцмережами",color:"green",delay:1}),e.jsx(N,{icon:Y,title:"Order → Invoice",description:"Кожне замовлення має один рахунок-фактуру",color:"green",delay:2}),e.jsx(N,{icon:Y,title:"Post → Thumbnail",description:"Один головний thumbnail для поста",color:"green",delay:3})]}),e.jsxs(B,{title:"has_one vs belongs_to — де foreign key?",color:"orange",children:["Foreign key завжди в таблиці того, хто має ",e.jsx("code",{children:"belongs_to"}),". У ",e.jsx("code",{children:"profiles"})," є колонка ",e.jsx("code",{children:"user_id"}),", а не навпаки."]})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Приклад: User → Profile"}),e.jsx(d,{children:`# app/models/user.rb
class User < ApplicationRecord
  has_one :profile
  has_many :posts
end

# app/models/profile.rb
class Profile < ApplicationRecord
  belongs_to :user
end

# db/migrate/..._create_profiles.rb
create_table :profiles do |t|
  t.string :bio
  t.string :avatar_url
  t.references :user, null: false, foreign_key: true
  t.timestamps
end`}),e.jsx(x,{children:"Методи has_one"}),e.jsx(d,{children:`user = User.find(1)

user.profile              # => Profile або nil
user.profile&.bio         # safe navigation
user.build_profile(bio: "Ruby розробник")
user.create_profile!(bio: "...")

# Перевірка
user.profile.present?     # => true/false`})]})]})]})}function Aj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:le,title:"Міграції та Foreign Keys",subtitle:"Правильна структура бази даних"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Генерація через rails generate"}),e.jsx(d,{children:`# Нова таблиця з references
rails g model Comment body:text post:references user:references

# Додати колонку до існуючої таблиці
rails g migration AddUserRefToPosts user:references

# Додати foreign key окремо
rails g migration AddFkPostsUsers`}),e.jsx(x,{children:"Що генерується автоматично"}),e.jsx(d,{children:`# post:references генерує:
t.references :post, null: false, foreign_key: true

# Це рівнозначно:
t.bigint :post_id, null: false
add_index :comments, :post_id
add_foreign_key :comments, :posts`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Повна міграція Comment"}),e.jsx(d,{children:`class CreateComments < ActiveRecord::Migration[7.1]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.references :post, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end`}),e.jsx(x,{children:"Перевірка схеми (db/schema.rb)"}),e.jsx(d,{children:`create_table "comments", force: :cascade do |t|
  t.text    "body",       null: false
  t.bigint  "post_id",   null: false
  t.bigint  "user_id",   null: false
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
  t.index ["post_id"], name: "index_comments_on_post_id"
  t.index ["user_id"], name: "index_comments_on_user_id"
end`}),e.jsxs(B,{title:"Золоте правило",color:"green",children:["Завжди додавай ",e.jsx("code",{children:"null: false"})," та ",e.jsx("code",{children:"foreign_key: true"})," — це захищає цілісність даних на рівні БД, не лише Rails."]})]})]})]})}function Tj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:V,title:"Методи асоціацій",subtitle:"Rails генерує їх автоматично"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"has_many — повний список методів"}),e.jsx(d,{children:`user = User.find(1)

# Колекція
user.posts             # SELECT * WHERE user_id=1
user.posts.reload      # скидає кеш, новий запит
user.posts.count       # SELECT COUNT(*)
user.posts.size        # з кешем якщо є

# Створення
user.posts.new(title: "...")      # не збережено
user.posts.create(title: "...")   # збережено
user.posts.create!(title: "...")  # або exception

# Пошук у колекції
user.posts.find(5)         # id=5 належить user
user.posts.where(...)      # додатковий scope

# Видалення зі зв'язку
user.posts.delete(post)    # без знищення
user.posts.destroy(post)   # знищує запис

# Заміна всієї колекції
user.posts = [post1, post2]  # видаляє старі`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Перевірка стану колекції"}),e.jsx(d,{children:`user.posts.empty?         # => true/false
user.posts.any?           # => true/false
user.posts.many?          # більше одного?
user.posts.none?          # => true/false

# loaded? — чи вже завантажено з БД
user.posts.loaded?        # => false спочатку
user.posts.to_a           # завантажує
user.posts.loaded?        # => true тепер`}),e.jsx(x,{children:"Кешування асоціацій"}),e.jsx(d,{children:`# Rails кешує результат запиту!
user.posts.count   # SQL запит
user.posts.count   # теж SQL (агрегат)
user.posts.size    # перший раз SQL, потім кеш

# Якщо дані змінились — reload
user.posts.reload
# або повторно завантажити через reload
user.reload.posts`}),e.jsx("div",{className:"outlined-card outlined-card--cyan fade-in-delay-3",children:e.jsxs("p",{style:{margin:0,fontSize:"0.88rem",color:"var(--accent-cyan-text)"},children:["💡 ",e.jsx("code",{children:".size"})," використовує кешований ",e.jsx("code",{children:"length"})," якщо колекція вже завантажена. ",e.jsx("code",{children:".count"})," завжди іде в БД."]})})]})]})]})}function Pj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:xs,title:"has_many :through",subtitle:"Багато-до-багатьох через проміжну таблицю"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Схема: Post ↔ Tag через Tagging"}),e.jsx(d,{children:`# Три моделі:
# posts: id, title, body
# tags: id, name
# taggings: id, post_id, tag_id

# app/models/post.rb
class Post < ApplicationRecord
  belongs_to :user
  has_many :taggings
  has_many :tags, through: :taggings
end

# app/models/tag.rb
class Tag < ApplicationRecord
  has_many :taggings
  has_many :posts, through: :taggings
end

# app/models/tagging.rb
class Tagging < ApplicationRecord
  belongs_to :post
  belongs_to :tag
end`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Міграція для Tagging"}),e.jsx(d,{children:`class CreateTaggings < ActiveRecord::Migration[7.1]
  def change
    create_table :taggings do |t|
      t.references :post, null: false, foreign_key: true
      t.references :tag,  null: false, foreign_key: true
      t.timestamps
    end
    # Унікальність пари post+tag
    add_index :taggings, [:post_id, :tag_id], unique: true
  end
end`}),e.jsx(x,{children:"Використання"}),e.jsx(d,{children:`post = Post.find(1)

# Всі теги поста
post.tags              # => [#<Tag name="ruby">, ...]

# Додати тег
rails_tag = Tag.find_or_create_by(name: "rails")
post.tags << rails_tag

# Або через проміжну
post.taggings.create(tag: rails_tag)

# Видалити тег (видаляє Tagging, не Tag!)
post.tags.delete(rails_tag)`}),e.jsxs(B,{title:"Навіщо :through а не habtm?",color:"purple",children:["Якщо проміжній таблиці потрібні додаткові атрибути (наприклад,",e.jsx("code",{children:"position"}),", ",e.jsx("code",{children:"created_by"}),") — лише ",e.jsx("code",{children:":through"}),"."]})]})]})]})}function zj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:Dt,title:"has_and_belongs_to_many",subtitle:"Спрощений варіант many-to-many без моделі"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Коли обирати HABTM?"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",marginBottom:"1rem"},children:[e.jsx(N,{icon:Y,title:"Проміжна таблиця без атрибутів",description:"Тільки post_id + tag_id, нічого більше",color:"green",delay:1}),e.jsx(N,{icon:Y,title:"Немає потреби в моделі",description:"Не треба звертатись до проміжних записів окремо",color:"green",delay:2}),e.jsx(N,{icon:Pl,title:"Краще уникати в нових проєктах",description:"has_many :through гнучкіший і масштабованіший",color:"orange",delay:3})]}),e.jsx(x,{children:"Оголошення"}),e.jsx(d,{children:`# app/models/post.rb
class Post < ApplicationRecord
  has_and_belongs_to_many :categories
end

# app/models/category.rb
class Category < ApplicationRecord
  has_and_belongs_to_many :posts
end`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Міграція (без create_table для моделі!)"}),e.jsx(d,{children:`class CreateCategoriesPosts < ActiveRecord::Migration[7.1]
  def change
    # Таблиця з'єднання — алфавітний порядок!
    create_table :categories_posts, id: false do |t|
      t.references :category, null: false, foreign_key: true
      t.references :post,     null: false, foreign_key: true
    end

    add_index :categories_posts,
      [:category_id, :post_id], unique: true
  end
end`}),e.jsx(x,{children:"Використання (API такий самий)"}),e.jsx(d,{children:`post = Post.find(1)
cat  = Category.find_or_create_by(name: "Tech")

post.categories << cat
post.categories        # => [#<Category ...>]
post.categories.delete(cat)
post.category_ids = [1, 2, 3]  # масове оновлення`}),e.jsx("div",{className:"outlined-card outlined-card--orange fade-in-delay-3",children:e.jsxs("p",{style:{margin:0,fontSize:"0.88rem",color:"var(--accent-orange-text)"},children:[e.jsx("strong",{children:"⚠️"})," Назва таблиці — строго алфавітний порядок:"," ",e.jsx("code",{children:"categories_posts"}),", не ",e.jsx("code",{children:"posts_categories"}),"."]})})]})]})]})}function Lj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:ce,title:"dependent: — що робити із залежними?",subtitle:"Контроль над поведінкою при видаленні"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Опції dependent:"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(ne,{letter:":destroy",title:":destroy",description:"Викликає .destroy на кожному залежному (Rails-колбеки спрацюють)",color:"red",delay:1}),e.jsx(ne,{letter:":delete_all",title:":delete_all",description:"SQL DELETE без Ruby-колбеків — швидко, але небезпечно",color:"orange",delay:2}),e.jsx(ne,{letter:":nullify",title:":nullify",description:"Ставить foreign key = NULL (зв'язок розривається, запис лишається)",color:"yellow",delay:3}),e.jsx(ne,{letter:":restrict_with_error",title:":restrict_with_error",description:"Забороняє видалення якщо є залежні — повертає помилку",color:"blue",delay:4}),e.jsx(ne,{letter:":destroy_all",title:":destroy_all",description:"Те саме що :destroy — застаріла назва",color:"purple",delay:5})]})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Приклади у коді"}),e.jsx(d,{children:`class User < ApplicationRecord
  # Видалення юзера → видаляє всі пости
  has_many :posts, dependent: :destroy

  # Видалення юзера → коментарі стають "anonymous"
  has_many :comments, dependent: :nullify

  # Не можна видалити якщо є замовлення
  has_many :orders, dependent: :restrict_with_error
end

class Post < ApplicationRecord
  belongs_to :user
  # Видалення поста → видаляє всі коментарі
  has_many :comments,  dependent: :destroy
  has_many :taggings,  dependent: :destroy
  has_many :tags, through: :taggings
end`}),e.jsxs(B,{title:"Коли що обирати?",color:"green",children:[e.jsx("code",{children:":destroy"})," — якщо залежні мають свої callbacks (наприклад, видалення файлів). ",e.jsx("code",{children:":delete_all"})," — якщо треба швидко і колбеки не важливі."]}),e.jsx("div",{className:"outlined-card outlined-card--red fade-in-delay-3",style:{marginTop:"0.5rem"},children:e.jsxs("p",{style:{margin:0,fontSize:"0.88rem",color:"var(--accent-red-text)"},children:[e.jsx("strong",{children:"⚠️ Небезпека:"})," без ",e.jsx("code",{children:"dependent:"})," при видаленні батьківського запису залежні залишаться з ",e.jsx("code",{children:"user_id"}),", що вже не існує — orphan records."]})})]})]})]})}function Mj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:V,title:"Eager Loading — Проблема N+1",subtitle:"Найпоширеніша проблема продуктивності в Rails"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"❌ Проблема N+1 запитів"}),e.jsx(d,{children:`# У контролері:
@posts = Post.all  # 1 запит

# У шаблоні:
<% @posts.each do |post| %>
  <%= post.user.name %>  # +1 запит на кожен пост!
<% end %>

# Для 100 постів = 101 запит до БД!
# SELECT * FROM posts
# SELECT * FROM users WHERE id = 1
# SELECT * FROM users WHERE id = 2
# ... і так далі`}),e.jsx(x,{children:"✅ Вирішення через includes"}),e.jsx(d,{children:`# Один запит + один JOIN
@posts = Post.includes(:user).all
# SELECT * FROM posts
# SELECT * FROM users WHERE id IN (1,2,3...)`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"includes vs eager_load vs preload"}),e.jsx(d,{children:`# includes — Rails вирішує сам (2 запити або JOIN)
Post.includes(:user, :tags)

# preload — завжди 2 окремих запити
Post.preload(:user)

# eager_load — завжди LEFT OUTER JOIN
Post.eager_load(:user)

# Коли потрібен eager_load?
# Коли в where/order є умова на асоціацію:
Post.eager_load(:user)
    .where(users: { role: "admin" })
    .order("users.name")`}),e.jsx(x,{children:"Вкладені асоціації"}),e.jsx(d,{children:`# Завантажити пости з юзерами та тегами
Post.includes(:user, :tags)

# Глибоке вкладення — хеш
Post.includes(comments: :user)
# = коментарі кожного поста + юзери коментарів

# Комбінація
Post.includes(:user, comments: [:user, :likes])`}),e.jsx(B,{title:"Bullet gem",color:"cyan",children:"Встанови gem 'bullet' у development — він автоматично виявляє N+1 та попереджає у логах."})]})]})]})}function Dj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:ce,title:"Валідації у зв'язках",subtitle:"Перевірка цілісності на рівні моделі"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"validates_associated"}),e.jsx(d,{children:`class Post < ApplicationRecord
  belongs_to :user
  has_many :comments

  # Перевіряє валідність пов'язаних коментарів
  # при збереженні поста
  validates_associated :comments
end

class Comment < ApplicationRecord
  belongs_to :post
  validates :body, presence: true, length: { minimum: 3 }
end

# Якщо хоч один comment невалідний —
# post.save поверне false`}),e.jsx(x,{children:"presence у belongs_to"}),e.jsx(d,{children:`class Comment < ApplicationRecord
  belongs_to :post  # Rails 5+: обов'язково за замовч.

  # Явна валідація (надлишкова, але наочна)
  validates :post, presence: true
  validates :user, presence: true
end`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Унікальність у scope"}),e.jsx(d,{children:`class Tagging < ApplicationRecord
  belongs_to :post
  belongs_to :tag

  # Один і той самий тег не може бути
  # доданий до одного поста двічі
  validates :tag_id,
    uniqueness: { scope: :post_id,
      message: "вже додано до цього поста" }
end`}),e.jsx(x,{children:"Зворотні зв'язки (inverse_of)"}),e.jsx(d,{children:`class User < ApplicationRecord
  has_many :posts, inverse_of: :user
end

class Post < ApplicationRecord
  belongs_to :user, inverse_of: :posts
end

# Без inverse_of:
user = User.new
post = user.posts.build
post.user == user  # => false (різні об'єкти!)

# З inverse_of:
post.user == user  # => true (один об'єкт в памяті)`}),e.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-3",children:e.jsxs("p",{style:{margin:0,fontSize:"0.88rem",color:"var(--accent-blue-text)"},children:["💡 Rails 7 автоматично визначає ",e.jsx("code",{children:"inverse_of"})," для більшості стандартних зв'язків. Але для нестандартних імен — вказуй явно."]})})]})]})]})}function Oj(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:Je,title:"Повний приклад: Блог",subtitle:"User → Posts → Comments → Tags"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{children:[e.jsx(x,{children:"Всі моделі разом"}),e.jsx(d,{children:`class User < ApplicationRecord
  has_many :posts,    dependent: :destroy
  has_many :comments, dependent: :destroy
end

class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings

  validates :title, presence: true
  validates :body,  presence: true, length: { minimum: 10 }
end

class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user
  validates :body, presence: true
end

class Tag < ApplicationRecord
  has_many :taggings, dependent: :destroy
  has_many :posts, through: :taggings
  validates :name, presence: true, uniqueness: true
end

class Tagging < ApplicationRecord
  belongs_to :post
  belongs_to :tag
  validates :tag_id, uniqueness: { scope: :post_id }
end`})]}),e.jsxs("div",{children:[e.jsx(x,{children:"Rails console — перевірка"}),e.jsx(d,{children:`# Створення з асоціаціями
user = User.create!(name: "New", email: "n@ex.com")
post = user.posts.create!(
  title: "Rails Associations",
  body: "Дуже корисна тема..."
)

# Додати коментар
post.comments.create!(body: "Чудово!", user: user)

# Додати теги
rails_tag = Tag.find_or_create_by!(name: "rails")
ruby_tag  = Tag.find_or_create_by!(name: "ruby")
post.tags << [rails_tag, ruby_tag]

# Запит з eager loading
posts = Post.includes(:user, :tags, comments: :user)
            .order(created_at: :desc)

# Вивести статистику
posts.each do |p|
  puts "#{p.title} | #{p.user.name} | #{p.tags.map(&:name).join(', ')}"
  puts "  Коментарів: #{p.comments.size}"
end`}),e.jsxs(B,{title:"Перевірка у консолі",color:"green",children:["Завжди тестуй асоціації в ",e.jsx("code",{children:"rails console"})," перед написанням контролерів — видно які SQL-запити генеруються."]})]})]})]})}function Ij(){return e.jsxs("div",{className:"slide",children:[e.jsx(f,{icon:Y,title:"Best Practices",subtitle:"Як писати асоціації правильно"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.65rem"},children:[e.jsx(N,{icon:le,title:"Завжди додавай індекси",description:"references автоматично додає index, але для складних запитів додавай складові індекси вручну",color:"blue",delay:1}),e.jsx(N,{icon:ce,title:"Використовуй foreign_key: true",description:"Це захист на рівні БД — навіть якщо Rails пропустить помилку, PostgreSQL не дозволить orphan records",color:"green",delay:2}),e.jsx(N,{icon:V,title:"Завжди думай про N+1",description:"Перед кожним has_many запитай: 'Де я буду рендерити пов'язані записи? Чи потрібен includes?'",color:"orange",delay:3}),e.jsx(N,{icon:xs,title:"Обирай :through над habtm",description:"has_many :through гнучкіший — завжди можна додати атрибути до проміжної таблиці пізніше",color:"purple",delay:4})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.65rem"},children:[e.jsx(N,{icon:Pl,title:"Не забувай dependent:",description:"Кожен has_many та has_one повинен мати explicit dependent:, інакше ризик orphan records",color:"red",delay:1}),e.jsx(N,{icon:Y,title:"Перевіряй в rails console",description:"User.find(1).posts.to_sql — переглядай SQL-запити що генеруються. Bullet gem — для N+1 в dev",color:"cyan",delay:2}),e.jsx(N,{icon:Je,title:"Іменуй зв'язки говорячи",description:"has_many :published_posts, -> { where(published: true) } — scope прямо в асоціації",color:"green",delay:3}),e.jsx(x,{children:"Scope в асоціаціях"}),e.jsx(d,{children:`class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :published_posts,
    -> { where(published: true) },
    class_name: "Post"
  has_many :draft_posts,
    -> { where(published: false) },
    class_name: "Post"
end

user.published_posts  # тільки опубліковані
user.draft_posts      # тільки чернетки`})]})]})]})}function Bj(){return e.jsxs("div",{className:"slide slide--centered slide--gradient-blue-purple",children:[e.jsx(f,{icon:Y,title:"Підсумок",subtitle:"Що ти сьогодні опанував(ла)"}),e.jsxs("div",{className:"slide-grid slide-grid--2col",style:{marginTop:"1rem"},children:[e.jsx(I,{icon:Dt,title:"belongs_to / has_many / has_one",description:"Базові типи зв'язків та методи, що генеруються автоматично",color:"blue",delay:1}),e.jsx(I,{icon:xs,title:"has_many :through",description:"Many-to-many через проміжну таблицю з додатковою гнучкістю",color:"purple",delay:2}),e.jsx(I,{icon:le,title:"Міграції та foreign keys",description:"null: false, foreign_key: true, index — фундамент цілісності БД",color:"green",delay:3}),e.jsx(I,{icon:V,title:"Eager Loading",description:"includes/eager_load — вирішення N+1 для продуктивних запитів",color:"orange",delay:4}),e.jsx(I,{icon:ce,title:"dependent: :destroy",description:"Явний контроль поведінки при видаленні батьківського запису",color:"red",delay:5}),e.jsx(I,{icon:Je,title:"Практика",description:"User → Posts → Comments → Tags у реальному блог-проєкті",color:"cyan",delay:6})]}),e.jsx("div",{className:"outlined-card outlined-card--blue",style:{marginTop:"1.5rem",maxWidth:"700px"},children:e.jsxs("p",{style:{textAlign:"center",margin:0,color:"var(--accent-blue-text)",fontSize:"1rem"},children:["🎯 ",e.jsx("strong",{children:"Домашнє завдання:"})," розширити блог —"," ",e.jsx("code",{children:"User has_many Posts"}),", ",e.jsx("code",{children:"Post has_many Comments"}),","," ",e.jsx("code",{children:"Post has_many Tags through Taggings"}),". Перевірити через"," ",e.jsx("code",{children:"rails console"}),"."]})})]})}const Nt=[{id:"1",title:"Знайомство з Ruby: мова, філософія, інструменти",icon:si,component:Ff},{id:"2",title:"Ruby глибше: колекції, цикли, методи",icon:_e,component:Ax},{id:"3",title:"ООП у Ruby: класи, модулі, наслідування",icon:Sl,component:Gx},{id:"4",title:"Привіт, Rails! Перший додаток за 90 хвилин",icon:Bs,component:fg},{id:"5",title:"Маршрутизація та контролери",icon:jh,component:gg},{id:"6",title:"Views, partials та форми",icon:cu,component:Dg},{id:"7",title:"Моделі та Active Record: магія бази даних",icon:le,component:nj},{id:"8",title:"Зв'язки між моделями (Associations)",icon:xs,component:bj},{id:"9",title:"Автентифікація та авторизація",icon:ce,component:null},{id:"10",title:"Hotwire: Turbo та Stimulus — сучасний фронтенд без React",icon:V,component:null},{id:"11",title:"Тестування: TDD у Rails",icon:Ah,component:null},{id:"12",title:"API-режим: Rails як бекенд",icon:it,component:null},{id:"13",title:"Фонові завдання, email, файли",icon:qh,component:null},{id:"14",title:"Деплой та продакшн",icon:ph,component:null},{id:"15",title:"Фінальний проєкт: від ідеї до продакшн за 90 хвилин",icon:Pf,component:null}],Hj=Nt.length;function $c(){const s=window.location.hash.replace("#/","").replace("#","");if(!s)return 0;const t=Nt.findIndex(l=>l.id===s);return t>=0?t:0}function $j(s){window.location.hash=`#/${s}`}function Fj(){const s=localStorage.getItem("theme");return s==="light"||s==="dark"?s:window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function Uj(s){document.documentElement.setAttribute("data-theme",s),localStorage.setItem("theme",s)}const is=[14,15,16,17,18,20],Vj=16;function Wj(){const s=parseInt(localStorage.getItem("fontSize"),10);return is.includes(s)?s:Vj}function Qj(s){document.documentElement.style.setProperty("--base-font-size",`${s}px`),localStorage.setItem("fontSize",s)}function Yj(){var S;const[s,t]=$.useState($c),l=window.location.hash.replace("#/","").replace("#",""),[n,i]=$.useState(!l),[r,a]=$.useState(Fj),[c,o]=$.useState(Wj);$.useEffect(()=>{Uj(r)},[r]),$.useEffect(()=>{Qj(c)},[c]);const m=$.useCallback(()=>{a(z=>z==="dark"?"light":"dark")},[]),j=$.useCallback(()=>{o(z=>{const p=is.indexOf(z);return p<is.length-1?is[p+1]:z})},[]),_=$.useCallback(()=>{o(z=>{const p=is.indexOf(z);return p>0?is[p-1]:z})},[]),g=$.useCallback(z=>{t(z),$j(Nt[z].id)},[]);$.useEffect(()=>{const z=()=>{t($c())};return window.addEventListener("hashchange",z),()=>window.removeEventListener("hashchange",z)},[]);const b=(S=Nt[s])==null?void 0:S.component,k=Nt[s];return e.jsxs("div",{className:"app",children:[e.jsx("header",{className:"header",children:e.jsxs("div",{className:"header__container",children:[e.jsxs("div",{className:"header__brand",children:[e.jsx("div",{className:"header__logo",children:e.jsx(si,{})}),e.jsxs("div",{children:[e.jsx("h1",{className:"header__title",children:"Ruby on Rails"}),e.jsx("p",{className:"header__subtitle",children:"Повний курс • 15 лекцій × 90 хвилин"})]})]}),e.jsxs("div",{className:"header__controls",children:[e.jsxs("div",{className:"font-size-controls",children:[e.jsx("button",{onClick:_,disabled:c===is[0],className:"font-size-controls__btn",title:"Зменшити шрифт",children:e.jsx(Zh,{})}),e.jsx("button",{onClick:j,disabled:c===is[is.length-1],className:"font-size-controls__btn",title:"Збільшити шрифт",children:e.jsx(df,{})})]}),e.jsx("button",{onClick:m,className:"theme-toggle",title:r==="dark"?"Світла тема":"Темна тема",children:r==="dark"?e.jsx(bf,{}):e.jsx(tf,{})}),e.jsx("button",{onClick:()=>i(!n),className:`header__toggle ${n?"header__toggle--active":"header__toggle--inactive"}`,children:n?"Сховати меню":"Показати меню"})]})]})}),n&&e.jsx("nav",{className:"lecture-nav",children:e.jsx("div",{className:"lecture-nav__container",children:Nt.map((z,p)=>{const u=z.icon,h=s===p,y=z.component!==null;let R="lecture-nav__item";return h?R+=" lecture-nav__item--active":y?R+=" lecture-nav__item--available":R+=" lecture-nav__item--unavailable",e.jsxs("button",{onClick:()=>y&&g(p),disabled:!y,className:R,title:z.title,children:[e.jsx(u,{}),e.jsx("span",{children:z.id})]},z.id)})})}),e.jsx("div",{className:"lecture-info",children:e.jsxs("div",{className:"lecture-info__container",children:[e.jsx("div",{className:"lecture-info__icon",children:(()=>{const z=k.icon;return e.jsx(z,{})})()}),e.jsxs("div",{children:[e.jsxs("p",{className:"lecture-info__meta",children:["Лекція ",k.id," з ",Hj]}),e.jsx("h2",{className:"lecture-info__title",children:k.title})]})]})}),e.jsx("main",{children:b?e.jsx(b,{}):e.jsx("div",{className:"empty-state",children:e.jsxs("div",{className:"empty-state__card",children:[e.jsx(Bs,{className:"empty-state__icon"}),e.jsx("h3",{className:"empty-state__title",children:"Лекція в розробці"}),e.jsx("p",{className:"empty-state__text",children:"Ця лекція ще не готова. Поки що доступна тільки Лекція 1."})]})})}),e.jsx("footer",{className:"footer",children:e.jsx("p",{className:"footer__text",children:"Веб розробка на Ruby on Rails • 2026"})})]})}Li.createRoot(document.getElementById("root")).render(e.jsx(Xc.StrictMode,{children:e.jsx(Yj,{})}));
