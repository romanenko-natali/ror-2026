(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function qd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ro={exports:{}},bl={},Eo={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ft=Symbol.for("react.element"),Kd=Symbol.for("react.portal"),Jd=Symbol.for("react.fragment"),Xd=Symbol.for("react.strict_mode"),Zd=Symbol.for("react.profiler"),eu=Symbol.for("react.provider"),nu=Symbol.for("react.context"),su=Symbol.for("react.forward_ref"),tu=Symbol.for("react.suspense"),lu=Symbol.for("react.memo"),iu=Symbol.for("react.lazy"),fa=Symbol.iterator;function ru(e){return e===null||typeof e!="object"?null:(e=fa&&e[fa]||e["@@iterator"],typeof e=="function"?e:null)}var Co={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zo=Object.assign,To={};function Ns(e,s,t){this.props=e,this.context=s,this.refs=To,this.updater=t||Co}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(e,s){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,s,"setState")};Ns.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Po(){}Po.prototype=Ns.prototype;function pr(e,s,t){this.props=e,this.context=s,this.refs=To,this.updater=t||Co}var hr=pr.prototype=new Po;hr.constructor=pr;zo(hr,Ns.prototype);hr.isPureReactComponent=!0;var xa=Array.isArray,Lo=Object.prototype.hasOwnProperty,fr={current:null},Mo={key:!0,ref:!0,__self:!0,__source:!0};function Ao(e,s,t){var l,i={},r=null,a=null;if(s!=null)for(l in s.ref!==void 0&&(a=s.ref),s.key!==void 0&&(r=""+s.key),s)Lo.call(s,l)&&!Mo.hasOwnProperty(l)&&(i[l]=s[l]);var o=arguments.length-2;if(o===1)i.children=t;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(l in o=e.defaultProps,o)i[l]===void 0&&(i[l]=o[l]);return{$$typeof:ft,type:e,key:r,ref:a,props:i,_owner:fr.current}}function au(e,s){return{$$typeof:ft,type:e.type,key:s,ref:e.ref,props:e.props,_owner:e._owner}}function xr(e){return typeof e=="object"&&e!==null&&e.$$typeof===ft}function ou(e){var s={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return s[t]})}var _a=/\/+/g;function Yl(e,s){return typeof e=="object"&&e!==null&&e.key!=null?ou(""+e.key):s.toString(36)}function $t(e,s,t,l,i){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ft:case Kd:a=!0}}if(a)return a=e,i=i(a),e=l===""?"."+Yl(a,0):l,xa(i)?(t="",e!=null&&(t=e.replace(_a,"$&/")+"/"),$t(i,s,t,"",function(u){return u})):i!=null&&(xr(i)&&(i=au(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(_a,"$&/")+"/")+e)),s.push(i)),1;if(a=0,l=l===""?".":l+":",xa(e))for(var o=0;o<e.length;o++){r=e[o];var c=l+Yl(r,o);a+=$t(r,s,t,c,i)}else if(c=ru(e),typeof c=="function")for(e=c.call(e),o=0;!(r=e.next()).done;)r=r.value,c=l+Yl(r,o++),a+=$t(r,s,t,c,i);else if(r==="object")throw s=String(e),Error("Objects are not valid as a React child (found: "+(s==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":s)+"). If you meant to render a collection of children, use an array instead.");return a}function kt(e,s,t){if(e==null)return e;var l=[],i=0;return $t(e,l,"","",function(r){return s.call(t,r,i++)}),l}function cu(e){if(e._status===-1){var s=e._result;s=s(),s.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=s)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Ft={transition:null},du={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Ft,ReactCurrentOwner:fr};function Oo(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:kt,forEach:function(e,s,t){kt(e,function(){s.apply(this,arguments)},t)},count:function(e){var s=0;return kt(e,function(){s++}),s},toArray:function(e){return kt(e,function(s){return s})||[]},only:function(e){if(!xr(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Ns;M.Fragment=Jd;M.Profiler=Zd;M.PureComponent=pr;M.StrictMode=Xd;M.Suspense=tu;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=du;M.act=Oo;M.cloneElement=function(e,s,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=zo({},e.props),i=e.key,r=e.ref,a=e._owner;if(s!=null){if(s.ref!==void 0&&(r=s.ref,a=fr.current),s.key!==void 0&&(i=""+s.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in s)Lo.call(s,c)&&!Mo.hasOwnProperty(c)&&(l[c]=s[c]===void 0&&o!==void 0?o[c]:s[c])}var c=arguments.length-2;if(c===1)l.children=t;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];l.children=o}return{$$typeof:ft,type:e.type,key:i,ref:r,props:l,_owner:a}};M.createContext=function(e){return e={$$typeof:nu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:eu,_context:e},e.Consumer=e};M.createElement=Ao;M.createFactory=function(e){var s=Ao.bind(null,e);return s.type=e,s};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:su,render:e}};M.isValidElement=xr;M.lazy=function(e){return{$$typeof:iu,_payload:{_status:-1,_result:e},_init:cu}};M.memo=function(e,s){return{$$typeof:lu,type:e,compare:s===void 0?null:s}};M.startTransition=function(e){var s=Ft.transition;Ft.transition={};try{e()}finally{Ft.transition=s}};M.unstable_act=Oo;M.useCallback=function(e,s){return pe.current.useCallback(e,s)};M.useContext=function(e){return pe.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};M.useEffect=function(e,s){return pe.current.useEffect(e,s)};M.useId=function(){return pe.current.useId()};M.useImperativeHandle=function(e,s,t){return pe.current.useImperativeHandle(e,s,t)};M.useInsertionEffect=function(e,s){return pe.current.useInsertionEffect(e,s)};M.useLayoutEffect=function(e,s){return pe.current.useLayoutEffect(e,s)};M.useMemo=function(e,s){return pe.current.useMemo(e,s)};M.useReducer=function(e,s,t){return pe.current.useReducer(e,s,t)};M.useRef=function(e){return pe.current.useRef(e)};M.useState=function(e){return pe.current.useState(e)};M.useSyncExternalStore=function(e,s,t){return pe.current.useSyncExternalStore(e,s,t)};M.useTransition=function(){return pe.current.useTransition()};M.version="18.3.1";Eo.exports=M;var I=Eo.exports;const Do=qd(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uu=I,mu=Symbol.for("react.element"),pu=Symbol.for("react.fragment"),hu=Object.prototype.hasOwnProperty,fu=uu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xu={key:!0,ref:!0,__self:!0,__source:!0};function Io(e,s,t){var l,i={},r=null,a=null;t!==void 0&&(r=""+t),s.key!==void 0&&(r=""+s.key),s.ref!==void 0&&(a=s.ref);for(l in s)hu.call(s,l)&&!xu.hasOwnProperty(l)&&(i[l]=s[l]);if(e&&e.defaultProps)for(l in s=e.defaultProps,s)i[l]===void 0&&(i[l]=s[l]);return{$$typeof:mu,type:e,key:r,ref:a,props:i,_owner:fu.current}}bl.Fragment=pu;bl.jsx=Io;bl.jsxs=Io;Ro.exports=bl;var n=Ro.exports,ji={},Ho={exports:{}},ke={},Bo={exports:{}},$o={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function s(S,P){var L=S.length;S.push(P);e:for(;0<L;){var q=L-1>>>1,ee=S[q];if(0<i(ee,P))S[q]=P,S[L]=ee,L=q;else break e}}function t(S){return S.length===0?null:S[0]}function l(S){if(S.length===0)return null;var P=S[0],L=S.pop();if(L!==P){S[0]=L;e:for(var q=0,ee=S.length,Nt=ee>>>1;q<Nt;){var Cn=2*(q+1)-1,Gl=S[Cn],zn=Cn+1,bt=S[zn];if(0>i(Gl,L))zn<ee&&0>i(bt,Gl)?(S[q]=bt,S[zn]=L,q=zn):(S[q]=Gl,S[Cn]=L,q=Cn);else if(zn<ee&&0>i(bt,L))S[q]=bt,S[zn]=L,q=zn;else break e}}return P}function i(S,P){var L=S.sortIndex-P.sortIndex;return L!==0?L:S.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var c=[],u=[],f=1,x=null,h=3,v=!1,N=!1,b=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var P=t(u);P!==null;){if(P.callback===null)l(u);else if(P.startTime<=S)l(u),P.sortIndex=P.expirationTime,s(c,P);else break;P=t(u)}}function _(S){if(b=!1,p(S),!N)if(t(c)!==null)N=!0,Wl(k);else{var P=t(u);P!==null&&Ql(_,P.startTime-S)}}function k(S,P){N=!1,b&&(b=!1,m(z),z=-1),v=!0;var L=h;try{for(p(P),x=t(c);x!==null&&(!(x.expirationTime>P)||S&&!Le());){var q=x.callback;if(typeof q=="function"){x.callback=null,h=x.priorityLevel;var ee=q(x.expirationTime<=P);P=e.unstable_now(),typeof ee=="function"?x.callback=ee:x===t(c)&&l(c),p(P)}else l(c);x=t(c)}if(x!==null)var Nt=!0;else{var Cn=t(u);Cn!==null&&Ql(_,Cn.startTime-P),Nt=!1}return Nt}finally{x=null,h=L,v=!1}}var E=!1,C=null,z=-1,Y=5,A=-1;function Le(){return!(e.unstable_now()-A<Y)}function Es(){if(C!==null){var S=e.unstable_now();A=S;var P=!0;try{P=C(!0,S)}finally{P?Cs():(E=!1,C=null)}}else E=!1}var Cs;if(typeof d=="function")Cs=function(){d(Es)};else if(typeof MessageChannel<"u"){var ha=new MessageChannel,Yd=ha.port2;ha.port1.onmessage=Es,Cs=function(){Yd.postMessage(null)}}else Cs=function(){T(Es,0)};function Wl(S){C=S,E||(E=!0,Cs())}function Ql(S,P){z=T(function(){S(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){N||v||(N=!0,Wl(k))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(S){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var L=h;h=P;try{return S()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,P){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var L=h;h=S;try{return P()}finally{h=L}},e.unstable_scheduleCallback=function(S,P,L){var q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?q+L:q):L=q,S){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=L+ee,S={id:f++,callback:P,priorityLevel:S,startTime:L,expirationTime:ee,sortIndex:-1},L>q?(S.sortIndex=L,s(u,S),t(c)===null&&S===t(u)&&(b?(m(z),z=-1):b=!0,Ql(_,L-q))):(S.sortIndex=ee,s(c,S),N||v||(N=!0,Wl(k))),S},e.unstable_shouldYield=Le,e.unstable_wrapCallback=function(S){var P=h;return function(){var L=h;h=P;try{return S.apply(this,arguments)}finally{h=L}}}})($o);Bo.exports=$o;var _u=Bo.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gu=I,be=_u;function y(e){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)s+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fo=new Set,Js={};function Wn(e,s){fs(e,s),fs(e+"Capture",s)}function fs(e,s){for(Js[e]=s,e=0;e<s.length;e++)Fo.add(s[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vi=Object.prototype.hasOwnProperty,yu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ga={},ya={};function ju(e){return vi.call(ya,e)?!0:vi.call(ga,e)?!1:yu.test(e)?ya[e]=!0:(ga[e]=!0,!1)}function vu(e,s,t,l){if(t!==null&&t.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return l?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nu(e,s,t,l){if(s===null||typeof s>"u"||vu(e,s,t,l))return!0;if(l)return!1;if(t!==null)switch(t.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function he(e,s,t,l,i,r,a){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=l,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=s,this.sanitizeURL=r,this.removeEmptyString=a}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var s=e[0];ie[s]=new he(s,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var _r=/[\-:]([a-z])/g;function gr(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var s=e.replace(_r,gr);ie[s]=new he(s,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var s=e.replace(_r,gr);ie[s]=new he(s,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var s=e.replace(_r,gr);ie[s]=new he(s,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function yr(e,s,t,l){var i=ie.hasOwnProperty(s)?ie[s]:null;(i!==null?i.type!==0:l||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(Nu(s,t,i,l)&&(t=null),l||i===null?ju(s)&&(t===null?e.removeAttribute(s):e.setAttribute(s,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(s=i.attributeName,l=i.attributeNamespace,t===null?e.removeAttribute(s):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,l?e.setAttributeNS(l,s,t):e.setAttribute(s,t))))}var rn=gu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wt=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),jr=Symbol.for("react.strict_mode"),Ni=Symbol.for("react.profiler"),Uo=Symbol.for("react.provider"),Vo=Symbol.for("react.context"),vr=Symbol.for("react.forward_ref"),bi=Symbol.for("react.suspense"),ki=Symbol.for("react.suspense_list"),Nr=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),Wo=Symbol.for("react.offscreen"),ja=Symbol.iterator;function zs(e){return e===null||typeof e!="object"?null:(e=ja&&e[ja]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,ql;function Is(e){if(ql===void 0)try{throw Error()}catch(t){var s=t.stack.trim().match(/\n( *(at )?)/);ql=s&&s[1]||""}return`
`+ql+e}var Kl=!1;function Jl(e,s){if(!e||Kl)return"";Kl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(u){var l=u}Reflect.construct(e,[],s)}else{try{s.call()}catch(u){l=u}e.call(s.prototype)}else{try{throw Error()}catch(u){l=u}e()}}catch(u){if(u&&l&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),r=l.stack.split(`
`),a=i.length-1,o=r.length-1;1<=a&&0<=o&&i[a]!==r[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==r[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==r[o]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=o);break}}}finally{Kl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Is(e):""}function bu(e){switch(e.tag){case 5:return Is(e.type);case 16:return Is("Lazy");case 13:return Is("Suspense");case 19:return Is("SuspenseList");case 0:case 2:case 15:return e=Jl(e.type,!1),e;case 11:return e=Jl(e.type.render,!1),e;case 1:return e=Jl(e.type,!0),e;default:return""}}function wi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Kn:return"Portal";case Ni:return"Profiler";case jr:return"StrictMode";case bi:return"Suspense";case ki:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vo:return(e.displayName||"Context")+".Consumer";case Uo:return(e._context.displayName||"Context")+".Provider";case vr:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nr:return s=e.displayName||null,s!==null?s:wi(e.type)||"Memo";case on:s=e._payload,e=e._init;try{return wi(e(s))}catch{}}return null}function ku(e){var s=e.type;switch(e.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=s.render,e=e.displayName||e.name||"",s.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wi(s);case 8:return s===jr?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qo(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function wu(e){var s=Qo(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,s),l=""+e[s];if(!e.hasOwnProperty(s)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,r=t.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return i.call(this)},set:function(a){l=""+a,r.call(this,a)}}),Object.defineProperty(e,s,{enumerable:t.enumerable}),{getValue:function(){return l},setValue:function(a){l=""+a},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function St(e){e._valueTracker||(e._valueTracker=wu(e))}function Go(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var t=s.getValue(),l="";return e&&(l=Qo(e)?e.checked?"true":"false":e.value),e=l,e!==t?(s.setValue(e),!0):!1}function Zt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Si(e,s){var t=s.checked;return Q({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function va(e,s){var t=s.defaultValue==null?"":s.defaultValue,l=s.checked!=null?s.checked:s.defaultChecked;t=Nn(s.value!=null?s.value:t),e._wrapperState={initialChecked:l,initialValue:t,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Yo(e,s){s=s.checked,s!=null&&yr(e,"checked",s,!1)}function Ri(e,s){Yo(e,s);var t=Nn(s.value),l=s.type;if(t!=null)l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}s.hasOwnProperty("value")?Ei(e,s.type,t):s.hasOwnProperty("defaultValue")&&Ei(e,s.type,Nn(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(e.defaultChecked=!!s.defaultChecked)}function Na(e,s,t){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var l=s.type;if(!(l!=="submit"&&l!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+e._wrapperState.initialValue,t||s===e.value||(e.value=s),e.defaultValue=s}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ei(e,s,t){(s!=="number"||Zt(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Hs=Array.isArray;function cs(e,s,t,l){if(e=e.options,s){s={};for(var i=0;i<t.length;i++)s["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=s.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&l&&(e[t].defaultSelected=!0)}else{for(t=""+Nn(t),s=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}s!==null||e[i].disabled||(s=e[i])}s!==null&&(s.selected=!0)}}function Ci(e,s){if(s.dangerouslySetInnerHTML!=null)throw Error(y(91));return Q({},s,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ba(e,s){var t=s.value;if(t==null){if(t=s.children,s=s.defaultValue,t!=null){if(s!=null)throw Error(y(92));if(Hs(t)){if(1<t.length)throw Error(y(93));t=t[0]}s=t}s==null&&(s=""),t=s}e._wrapperState={initialValue:Nn(t)}}function qo(e,s){var t=Nn(s.value),l=Nn(s.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),s.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),l!=null&&(e.defaultValue=""+l)}function ka(e){var s=e.textContent;s===e._wrapperState.initialValue&&s!==""&&s!==null&&(e.value=s)}function Ko(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zi(e,s){return e==null||e==="http://www.w3.org/1999/xhtml"?Ko(s):e==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rt,Jo=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,t,l,i){MSApp.execUnsafeLocalFunction(function(){return e(s,t,l,i)})}:e}(function(e,s){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=s;else{for(Rt=Rt||document.createElement("div"),Rt.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Rt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;s.firstChild;)e.appendChild(s.firstChild)}});function Xs(e,s){if(s){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=s;return}}e.textContent=s}var Fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Su=["Webkit","ms","Moz","O"];Object.keys(Fs).forEach(function(e){Su.forEach(function(s){s=s+e.charAt(0).toUpperCase()+e.substring(1),Fs[s]=Fs[e]})});function Xo(e,s,t){return s==null||typeof s=="boolean"||s===""?"":t||typeof s!="number"||s===0||Fs.hasOwnProperty(e)&&Fs[e]?(""+s).trim():s+"px"}function Zo(e,s){e=e.style;for(var t in s)if(s.hasOwnProperty(t)){var l=t.indexOf("--")===0,i=Xo(t,s[t],l);t==="float"&&(t="cssFloat"),l?e.setProperty(t,i):e[t]=i}}var Ru=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ti(e,s){if(s){if(Ru[e]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(y(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(y(61))}if(s.style!=null&&typeof s.style!="object")throw Error(y(62))}}function Pi(e,s){if(e.indexOf("-")===-1)return typeof s.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=null;function br(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mi=null,ds=null,us=null;function wa(e){if(e=gt(e)){if(typeof Mi!="function")throw Error(y(280));var s=e.stateNode;s&&(s=El(s),Mi(e.stateNode,e.type,s))}}function ec(e){ds?us?us.push(e):us=[e]:ds=e}function nc(){if(ds){var e=ds,s=us;if(us=ds=null,wa(e),s)for(e=0;e<s.length;e++)wa(s[e])}}function sc(e,s){return e(s)}function tc(){}var Xl=!1;function lc(e,s,t){if(Xl)return e(s,t);Xl=!0;try{return sc(e,s,t)}finally{Xl=!1,(ds!==null||us!==null)&&(tc(),nc())}}function Zs(e,s){var t=e.stateNode;if(t===null)return null;var l=El(t);if(l===null)return null;t=l[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(y(231,s,typeof t));return t}var Ai=!1;if(nn)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){Ai=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{Ai=!1}function Eu(e,s,t,l,i,r,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{s.apply(t,u)}catch(f){this.onError(f)}}var Us=!1,el=null,nl=!1,Oi=null,Cu={onError:function(e){Us=!0,el=e}};function zu(e,s,t,l,i,r,a,o,c){Us=!1,el=null,Eu.apply(Cu,arguments)}function Tu(e,s,t,l,i,r,a,o,c){if(zu.apply(this,arguments),Us){if(Us){var u=el;Us=!1,el=null}else throw Error(y(198));nl||(nl=!0,Oi=u)}}function Qn(e){var s=e,t=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,s.flags&4098&&(t=s.return),e=s.return;while(e)}return s.tag===3?t:null}function ic(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function Sa(e){if(Qn(e)!==e)throw Error(y(188))}function Pu(e){var s=e.alternate;if(!s){if(s=Qn(e),s===null)throw Error(y(188));return s!==e?null:e}for(var t=e,l=s;;){var i=t.return;if(i===null)break;var r=i.alternate;if(r===null){if(l=i.return,l!==null){t=l;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===t)return Sa(i),e;if(r===l)return Sa(i),s;r=r.sibling}throw Error(y(188))}if(t.return!==l.return)t=i,l=r;else{for(var a=!1,o=i.child;o;){if(o===t){a=!0,t=i,l=r;break}if(o===l){a=!0,l=i,t=r;break}o=o.sibling}if(!a){for(o=r.child;o;){if(o===t){a=!0,t=r,l=i;break}if(o===l){a=!0,l=r,t=i;break}o=o.sibling}if(!a)throw Error(y(189))}}if(t.alternate!==l)throw Error(y(190))}if(t.tag!==3)throw Error(y(188));return t.stateNode.current===t?e:s}function rc(e){return e=Pu(e),e!==null?ac(e):null}function ac(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var s=ac(e);if(s!==null)return s;e=e.sibling}return null}var oc=be.unstable_scheduleCallback,Ra=be.unstable_cancelCallback,Lu=be.unstable_shouldYield,Mu=be.unstable_requestPaint,K=be.unstable_now,Au=be.unstable_getCurrentPriorityLevel,kr=be.unstable_ImmediatePriority,cc=be.unstable_UserBlockingPriority,sl=be.unstable_NormalPriority,Ou=be.unstable_LowPriority,dc=be.unstable_IdlePriority,kl=null,We=null;function Du(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:Bu,Iu=Math.log,Hu=Math.LN2;function Bu(e){return e>>>=0,e===0?32:31-(Iu(e)/Hu|0)|0}var Et=64,Ct=4194304;function Bs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tl(e,s){var t=e.pendingLanes;if(t===0)return 0;var l=0,i=e.suspendedLanes,r=e.pingedLanes,a=t&268435455;if(a!==0){var o=a&~i;o!==0?l=Bs(o):(r&=a,r!==0&&(l=Bs(r)))}else a=t&~i,a!==0?l=Bs(a):r!==0&&(l=Bs(r));if(l===0)return 0;if(s!==0&&s!==l&&!(s&i)&&(i=l&-l,r=s&-s,i>=r||i===16&&(r&4194240)!==0))return s;if(l&4&&(l|=t&16),s=e.entangledLanes,s!==0)for(e=e.entanglements,s&=l;0<s;)t=31-He(s),i=1<<t,l|=e[t],s&=~i;return l}function $u(e,s){switch(e){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fu(e,s){for(var t=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes;0<r;){var a=31-He(r),o=1<<a,c=i[a];c===-1?(!(o&t)||o&l)&&(i[a]=$u(o,s)):c<=s&&(e.expiredLanes|=o),r&=~o}}function Di(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uc(){var e=Et;return Et<<=1,!(Et&4194240)&&(Et=64),e}function Zl(e){for(var s=[],t=0;31>t;t++)s.push(e);return s}function xt(e,s,t){e.pendingLanes|=s,s!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,s=31-He(s),e[s]=t}function Uu(e,s){var t=e.pendingLanes&~s;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=s,e.mutableReadLanes&=s,e.entangledLanes&=s,s=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-He(t),r=1<<i;s[i]=0,l[i]=-1,e[i]=-1,t&=~r}}function wr(e,s){var t=e.entangledLanes|=s;for(e=e.entanglements;t;){var l=31-He(t),i=1<<l;i&s|e[l]&s&&(e[l]|=s),t&=~i}}var H=0;function mc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pc,Sr,hc,fc,xc,Ii=!1,zt=[],hn=null,fn=null,xn=null,et=new Map,nt=new Map,dn=[],Vu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ea(e,s){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":et.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":nt.delete(s.pointerId)}}function Ps(e,s,t,l,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:s,domEventName:t,eventSystemFlags:l,nativeEvent:r,targetContainers:[i]},s!==null&&(s=gt(s),s!==null&&Sr(s)),e):(e.eventSystemFlags|=l,s=e.targetContainers,i!==null&&s.indexOf(i)===-1&&s.push(i),e)}function Wu(e,s,t,l,i){switch(s){case"focusin":return hn=Ps(hn,e,s,t,l,i),!0;case"dragenter":return fn=Ps(fn,e,s,t,l,i),!0;case"mouseover":return xn=Ps(xn,e,s,t,l,i),!0;case"pointerover":var r=i.pointerId;return et.set(r,Ps(et.get(r)||null,e,s,t,l,i)),!0;case"gotpointercapture":return r=i.pointerId,nt.set(r,Ps(nt.get(r)||null,e,s,t,l,i)),!0}return!1}function _c(e){var s=Ln(e.target);if(s!==null){var t=Qn(s);if(t!==null){if(s=t.tag,s===13){if(s=ic(t),s!==null){e.blockedOn=s,xc(e.priority,function(){hc(t)});return}}else if(s===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ut(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var t=Hi(e.domEventName,e.eventSystemFlags,s[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);Li=l,t.target.dispatchEvent(l),Li=null}else return s=gt(t),s!==null&&Sr(s),e.blockedOn=t,!1;s.shift()}return!0}function Ca(e,s,t){Ut(e)&&t.delete(s)}function Qu(){Ii=!1,hn!==null&&Ut(hn)&&(hn=null),fn!==null&&Ut(fn)&&(fn=null),xn!==null&&Ut(xn)&&(xn=null),et.forEach(Ca),nt.forEach(Ca)}function Ls(e,s){e.blockedOn===s&&(e.blockedOn=null,Ii||(Ii=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Qu)))}function st(e){function s(i){return Ls(i,e)}if(0<zt.length){Ls(zt[0],e);for(var t=1;t<zt.length;t++){var l=zt[t];l.blockedOn===e&&(l.blockedOn=null)}}for(hn!==null&&Ls(hn,e),fn!==null&&Ls(fn,e),xn!==null&&Ls(xn,e),et.forEach(s),nt.forEach(s),t=0;t<dn.length;t++)l=dn[t],l.blockedOn===e&&(l.blockedOn=null);for(;0<dn.length&&(t=dn[0],t.blockedOn===null);)_c(t),t.blockedOn===null&&dn.shift()}var ms=rn.ReactCurrentBatchConfig,ll=!0;function Gu(e,s,t,l){var i=H,r=ms.transition;ms.transition=null;try{H=1,Rr(e,s,t,l)}finally{H=i,ms.transition=r}}function Yu(e,s,t,l){var i=H,r=ms.transition;ms.transition=null;try{H=4,Rr(e,s,t,l)}finally{H=i,ms.transition=r}}function Rr(e,s,t,l){if(ll){var i=Hi(e,s,t,l);if(i===null)ci(e,s,l,il,t),Ea(e,l);else if(Wu(i,e,s,t,l))l.stopPropagation();else if(Ea(e,l),s&4&&-1<Vu.indexOf(e)){for(;i!==null;){var r=gt(i);if(r!==null&&pc(r),r=Hi(e,s,t,l),r===null&&ci(e,s,l,il,t),r===i)break;i=r}i!==null&&l.stopPropagation()}else ci(e,s,l,null,t)}}var il=null;function Hi(e,s,t,l){if(il=null,e=br(l),e=Ln(e),e!==null)if(s=Qn(e),s===null)e=null;else if(t=s.tag,t===13){if(e=ic(s),e!==null)return e;e=null}else if(t===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null);return il=e,null}function gc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Au()){case kr:return 1;case cc:return 4;case sl:case Ou:return 16;case dc:return 536870912;default:return 16}default:return 16}}var mn=null,Er=null,Vt=null;function yc(){if(Vt)return Vt;var e,s=Er,t=s.length,l,i="value"in mn?mn.value:mn.textContent,r=i.length;for(e=0;e<t&&s[e]===i[e];e++);var a=t-e;for(l=1;l<=a&&s[t-l]===i[r-l];l++);return Vt=i.slice(e,1<l?1-l:void 0)}function Wt(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function Tt(){return!0}function za(){return!1}function we(e){function s(t,l,i,r,a){this._reactName=t,this._targetInst=i,this.type=l,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Tt:za,this.isPropagationStopped=za,this}return Q(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Tt)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Tt)},persist:function(){},isPersistent:Tt}),s}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cr=we(bs),_t=Q({},bs,{view:0,detail:0}),qu=we(_t),ei,ni,Ms,wl=Q({},_t,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ms&&(Ms&&e.type==="mousemove"?(ei=e.screenX-Ms.screenX,ni=e.screenY-Ms.screenY):ni=ei=0,Ms=e),ei)},movementY:function(e){return"movementY"in e?e.movementY:ni}}),Ta=we(wl),Ku=Q({},wl,{dataTransfer:0}),Ju=we(Ku),Xu=Q({},_t,{relatedTarget:0}),si=we(Xu),Zu=Q({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),em=we(Zu),nm=Q({},bs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sm=we(nm),tm=Q({},bs,{data:0}),Pa=we(tm),lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},im={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function am(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=rm[e])?!!s[e]:!1}function zr(){return am}var om=Q({},_t,{key:function(e){if(e.key){var s=lm[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=Wt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?im[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zr,charCode:function(e){return e.type==="keypress"?Wt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cm=we(om),dm=Q({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),La=we(dm),um=Q({},_t,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zr}),mm=we(um),pm=Q({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),hm=we(pm),fm=Q({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xm=we(fm),_m=[9,13,27,32],Tr=nn&&"CompositionEvent"in window,Vs=null;nn&&"documentMode"in document&&(Vs=document.documentMode);var gm=nn&&"TextEvent"in window&&!Vs,jc=nn&&(!Tr||Vs&&8<Vs&&11>=Vs),Ma=" ",Aa=!1;function vc(e,s){switch(e){case"keyup":return _m.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function ym(e,s){switch(e){case"compositionend":return Nc(s);case"keypress":return s.which!==32?null:(Aa=!0,Ma);case"textInput":return e=s.data,e===Ma&&Aa?null:e;default:return null}}function jm(e,s){if(Xn)return e==="compositionend"||!Tr&&vc(e,s)?(e=yc(),Vt=Er=mn=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return jc&&s.locale!=="ko"?null:s.data;default:return null}}var vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oa(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!vm[e.type]:s==="textarea"}function bc(e,s,t,l){ec(l),s=rl(s,"onChange"),0<s.length&&(t=new Cr("onChange","change",null,t,l),e.push({event:t,listeners:s}))}var Ws=null,tt=null;function Nm(e){Mc(e,0)}function Sl(e){var s=ns(e);if(Go(s))return e}function bm(e,s){if(e==="change")return s}var kc=!1;if(nn){var ti;if(nn){var li="oninput"in document;if(!li){var Da=document.createElement("div");Da.setAttribute("oninput","return;"),li=typeof Da.oninput=="function"}ti=li}else ti=!1;kc=ti&&(!document.documentMode||9<document.documentMode)}function Ia(){Ws&&(Ws.detachEvent("onpropertychange",wc),tt=Ws=null)}function wc(e){if(e.propertyName==="value"&&Sl(tt)){var s=[];bc(s,tt,e,br(e)),lc(Nm,s)}}function km(e,s,t){e==="focusin"?(Ia(),Ws=s,tt=t,Ws.attachEvent("onpropertychange",wc)):e==="focusout"&&Ia()}function wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(tt)}function Sm(e,s){if(e==="click")return Sl(s)}function Rm(e,s){if(e==="input"||e==="change")return Sl(s)}function Em(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var $e=typeof Object.is=="function"?Object.is:Em;function lt(e,s){if($e(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var t=Object.keys(e),l=Object.keys(s);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var i=t[l];if(!vi.call(s,i)||!$e(e[i],s[i]))return!1}return!0}function Ha(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ba(e,s){var t=Ha(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=s&&l>=s)return{node:t,offset:s-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ha(t)}}function Sc(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?Sc(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function Rc(){for(var e=window,s=Zt();s instanceof e.HTMLIFrameElement;){try{var t=typeof s.contentWindow.location.href=="string"}catch{t=!1}if(t)e=s.contentWindow;else break;s=Zt(e.document)}return s}function Pr(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}function Cm(e){var s=Rc(),t=e.focusedElem,l=e.selectionRange;if(s!==t&&t&&t.ownerDocument&&Sc(t.ownerDocument.documentElement,t)){if(l!==null&&Pr(t)){if(s=l.start,e=l.end,e===void 0&&(e=s),"selectionStart"in t)t.selectionStart=s,t.selectionEnd=Math.min(e,t.value.length);else if(e=(s=t.ownerDocument||document)&&s.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,r=Math.min(l.start,i);l=l.end===void 0?r:Math.min(l.end,i),!e.extend&&r>l&&(i=l,l=r,r=i),i=Ba(t,r);var a=Ba(t,l);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(s=s.createRange(),s.setStart(i.node,i.offset),e.removeAllRanges(),r>l?(e.addRange(s),e.extend(a.node,a.offset)):(s.setEnd(a.node,a.offset),e.addRange(s)))}}for(s=[],e=t;e=e.parentNode;)e.nodeType===1&&s.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<s.length;t++)e=s[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zm=nn&&"documentMode"in document&&11>=document.documentMode,Zn=null,Bi=null,Qs=null,$i=!1;function $a(e,s,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;$i||Zn==null||Zn!==Zt(l)||(l=Zn,"selectionStart"in l&&Pr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Qs&&lt(Qs,l)||(Qs=l,l=rl(Bi,"onSelect"),0<l.length&&(s=new Cr("onSelect","select",null,s,t),e.push({event:s,listeners:l}),s.target=Zn)))}function Pt(e,s){var t={};return t[e.toLowerCase()]=s.toLowerCase(),t["Webkit"+e]="webkit"+s,t["Moz"+e]="moz"+s,t}var es={animationend:Pt("Animation","AnimationEnd"),animationiteration:Pt("Animation","AnimationIteration"),animationstart:Pt("Animation","AnimationStart"),transitionend:Pt("Transition","TransitionEnd")},ii={},Ec={};nn&&(Ec=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function Rl(e){if(ii[e])return ii[e];if(!es[e])return e;var s=es[e],t;for(t in s)if(s.hasOwnProperty(t)&&t in Ec)return ii[e]=s[t];return e}var Cc=Rl("animationend"),zc=Rl("animationiteration"),Tc=Rl("animationstart"),Pc=Rl("transitionend"),Lc=new Map,Fa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,s){Lc.set(e,s),Wn(s,[e])}for(var ri=0;ri<Fa.length;ri++){var ai=Fa[ri],Tm=ai.toLowerCase(),Pm=ai[0].toUpperCase()+ai.slice(1);kn(Tm,"on"+Pm)}kn(Cc,"onAnimationEnd");kn(zc,"onAnimationIteration");kn(Tc,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(Pc,"onTransitionEnd");fs("onMouseEnter",["mouseout","mouseover"]);fs("onMouseLeave",["mouseout","mouseover"]);fs("onPointerEnter",["pointerout","pointerover"]);fs("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lm=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function Ua(e,s,t){var l=e.type||"unknown-event";e.currentTarget=t,Tu(l,s,void 0,e),e.currentTarget=null}function Mc(e,s){s=(s&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],i=l.event;l=l.listeners;e:{var r=void 0;if(s)for(var a=l.length-1;0<=a;a--){var o=l[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==r&&i.isPropagationStopped())break e;Ua(i,o,u),r=c}else for(a=0;a<l.length;a++){if(o=l[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==r&&i.isPropagationStopped())break e;Ua(i,o,u),r=c}}}if(nl)throw e=Oi,nl=!1,Oi=null,e}function $(e,s){var t=s[Qi];t===void 0&&(t=s[Qi]=new Set);var l=e+"__bubble";t.has(l)||(Ac(s,e,2,!1),t.add(l))}function oi(e,s,t){var l=0;s&&(l|=4),Ac(t,e,l,s)}var Lt="_reactListening"+Math.random().toString(36).slice(2);function it(e){if(!e[Lt]){e[Lt]=!0,Fo.forEach(function(t){t!=="selectionchange"&&(Lm.has(t)||oi(t,!1,e),oi(t,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[Lt]||(s[Lt]=!0,oi("selectionchange",!1,s))}}function Ac(e,s,t,l){switch(gc(s)){case 1:var i=Gu;break;case 4:i=Yu;break;default:i=Rr}t=i.bind(null,s,t,e),i=void 0,!Ai||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(s,t,{capture:!0,passive:i}):e.addEventListener(s,t,!0):i!==void 0?e.addEventListener(s,t,{passive:i}):e.addEventListener(s,t,!1)}function ci(e,s,t,l,i){var r=l;if(!(s&1)&&!(s&2)&&l!==null)e:for(;;){if(l===null)return;var a=l.tag;if(a===3||a===4){var o=l.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=l.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;o!==null;){if(a=Ln(o),a===null)return;if(c=a.tag,c===5||c===6){l=r=a;continue e}o=o.parentNode}}l=l.return}lc(function(){var u=r,f=br(t),x=[];e:{var h=Lc.get(e);if(h!==void 0){var v=Cr,N=e;switch(e){case"keypress":if(Wt(t)===0)break e;case"keydown":case"keyup":v=cm;break;case"focusin":N="focus",v=si;break;case"focusout":N="blur",v=si;break;case"beforeblur":case"afterblur":v=si;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Ju;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=mm;break;case Cc:case zc:case Tc:v=em;break;case Pc:v=hm;break;case"scroll":v=qu;break;case"wheel":v=xm;break;case"copy":case"cut":case"paste":v=sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=La}var b=(s&4)!==0,T=!b&&e==="scroll",m=b?h!==null?h+"Capture":null:h;b=[];for(var d=u,p;d!==null;){p=d;var _=p.stateNode;if(p.tag===5&&_!==null&&(p=_,m!==null&&(_=Zs(d,m),_!=null&&b.push(rt(d,_,p)))),T)break;d=d.return}0<b.length&&(h=new v(h,N,null,t,f),x.push({event:h,listeners:b}))}}if(!(s&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&t!==Li&&(N=t.relatedTarget||t.fromElement)&&(Ln(N)||N[sn]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?(N=t.relatedTarget||t.toElement,v=u,N=N?Ln(N):null,N!==null&&(T=Qn(N),N!==T||N.tag!==5&&N.tag!==6)&&(N=null)):(v=null,N=u),v!==N)){if(b=Ta,_="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(b=La,_="onPointerLeave",m="onPointerEnter",d="pointer"),T=v==null?h:ns(v),p=N==null?h:ns(N),h=new b(_,d+"leave",v,t,f),h.target=T,h.relatedTarget=p,_=null,Ln(f)===u&&(b=new b(m,d+"enter",N,t,f),b.target=p,b.relatedTarget=T,_=b),T=_,v&&N)n:{for(b=v,m=N,d=0,p=b;p;p=qn(p))d++;for(p=0,_=m;_;_=qn(_))p++;for(;0<d-p;)b=qn(b),d--;for(;0<p-d;)m=qn(m),p--;for(;d--;){if(b===m||m!==null&&b===m.alternate)break n;b=qn(b),m=qn(m)}b=null}else b=null;v!==null&&Va(x,h,v,b,!1),N!==null&&T!==null&&Va(x,T,N,b,!0)}}e:{if(h=u?ns(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var k=bm;else if(Oa(h))if(kc)k=Rm;else{k=wm;var E=km}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Sm);if(k&&(k=k(e,u))){bc(x,k,t,f);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Ei(h,"number",h.value)}switch(E=u?ns(u):window,e){case"focusin":(Oa(E)||E.contentEditable==="true")&&(Zn=E,Bi=u,Qs=null);break;case"focusout":Qs=Bi=Zn=null;break;case"mousedown":$i=!0;break;case"contextmenu":case"mouseup":case"dragend":$i=!1,$a(x,t,f);break;case"selectionchange":if(zm)break;case"keydown":case"keyup":$a(x,t,f)}var C;if(Tr)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Xn?vc(e,t)&&(z="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(z="onCompositionStart");z&&(jc&&t.locale!=="ko"&&(Xn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Xn&&(C=yc()):(mn=f,Er="value"in mn?mn.value:mn.textContent,Xn=!0)),E=rl(u,z),0<E.length&&(z=new Pa(z,e,null,t,f),x.push({event:z,listeners:E}),C?z.data=C:(C=Nc(t),C!==null&&(z.data=C)))),(C=gm?ym(e,t):jm(e,t))&&(u=rl(u,"onBeforeInput"),0<u.length&&(f=new Pa("onBeforeInput","beforeinput",null,t,f),x.push({event:f,listeners:u}),f.data=C))}Mc(x,s)})}function rt(e,s,t){return{instance:e,listener:s,currentTarget:t}}function rl(e,s){for(var t=s+"Capture",l=[];e!==null;){var i=e,r=i.stateNode;i.tag===5&&r!==null&&(i=r,r=Zs(e,t),r!=null&&l.unshift(rt(e,r,i)),r=Zs(e,s),r!=null&&l.push(rt(e,r,i))),e=e.return}return l}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Va(e,s,t,l,i){for(var r=s._reactName,a=[];t!==null&&t!==l;){var o=t,c=o.alternate,u=o.stateNode;if(c!==null&&c===l)break;o.tag===5&&u!==null&&(o=u,i?(c=Zs(t,r),c!=null&&a.unshift(rt(t,c,o))):i||(c=Zs(t,r),c!=null&&a.push(rt(t,c,o)))),t=t.return}a.length!==0&&e.push({event:s,listeners:a})}var Mm=/\r\n?/g,Am=/\u0000|\uFFFD/g;function Wa(e){return(typeof e=="string"?e:""+e).replace(Mm,`
`).replace(Am,"")}function Mt(e,s,t){if(s=Wa(s),Wa(e)!==s&&t)throw Error(y(425))}function al(){}var Fi=null,Ui=null;function Vi(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Wi=typeof setTimeout=="function"?setTimeout:void 0,Om=typeof clearTimeout=="function"?clearTimeout:void 0,Qa=typeof Promise=="function"?Promise:void 0,Dm=typeof queueMicrotask=="function"?queueMicrotask:typeof Qa<"u"?function(e){return Qa.resolve(null).then(e).catch(Im)}:Wi;function Im(e){setTimeout(function(){throw e})}function di(e,s){var t=s,l=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(l===0){e.removeChild(i),st(s);return}l--}else t!=="$"&&t!=="$?"&&t!=="$!"||l++;t=i}while(t);st(s)}function _n(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return e}function Ga(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(s===0)return e;s--}else t==="/$"&&s++}e=e.previousSibling}return null}var ks=Math.random().toString(36).slice(2),Ve="__reactFiber$"+ks,at="__reactProps$"+ks,sn="__reactContainer$"+ks,Qi="__reactEvents$"+ks,Hm="__reactListeners$"+ks,Bm="__reactHandles$"+ks;function Ln(e){var s=e[Ve];if(s)return s;for(var t=e.parentNode;t;){if(s=t[sn]||t[Ve]){if(t=s.alternate,s.child!==null||t!==null&&t.child!==null)for(e=Ga(e);e!==null;){if(t=e[Ve])return t;e=Ga(e)}return s}e=t,t=e.parentNode}return null}function gt(e){return e=e[Ve]||e[sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ns(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function El(e){return e[at]||null}var Gi=[],ss=-1;function wn(e){return{current:e}}function F(e){0>ss||(e.current=Gi[ss],Gi[ss]=null,ss--)}function B(e,s){ss++,Gi[ss]=e.current,e.current=s}var bn={},ce=wn(bn),_e=wn(!1),In=bn;function xs(e,s){var t=e.type.contextTypes;if(!t)return bn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===s)return l.__reactInternalMemoizedMaskedChildContext;var i={},r;for(r in t)i[r]=s[r];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),i}function ge(e){return e=e.childContextTypes,e!=null}function ol(){F(_e),F(ce)}function Ya(e,s,t){if(ce.current!==bn)throw Error(y(168));B(ce,s),B(_e,t)}function Oc(e,s,t){var l=e.stateNode;if(s=s.childContextTypes,typeof l.getChildContext!="function")return t;l=l.getChildContext();for(var i in l)if(!(i in s))throw Error(y(108,ku(e)||"Unknown",i));return Q({},t,l)}function cl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,In=ce.current,B(ce,e),B(_e,_e.current),!0}function qa(e,s,t){var l=e.stateNode;if(!l)throw Error(y(169));t?(e=Oc(e,s,In),l.__reactInternalMemoizedMergedChildContext=e,F(_e),F(ce),B(ce,e)):F(_e),B(_e,t)}var Ke=null,Cl=!1,ui=!1;function Dc(e){Ke===null?Ke=[e]:Ke.push(e)}function $m(e){Cl=!0,Dc(e)}function Sn(){if(!ui&&Ke!==null){ui=!0;var e=0,s=H;try{var t=Ke;for(H=1;e<t.length;e++){var l=t[e];do l=l(!0);while(l!==null)}Ke=null,Cl=!1}catch(i){throw Ke!==null&&(Ke=Ke.slice(e+1)),oc(kr,Sn),i}finally{H=s,ui=!1}}return null}var ts=[],ls=0,dl=null,ul=0,Se=[],Re=0,Hn=null,Je=1,Xe="";function Tn(e,s){ts[ls++]=ul,ts[ls++]=dl,dl=e,ul=s}function Ic(e,s,t){Se[Re++]=Je,Se[Re++]=Xe,Se[Re++]=Hn,Hn=e;var l=Je;e=Xe;var i=32-He(l)-1;l&=~(1<<i),t+=1;var r=32-He(s)+i;if(30<r){var a=i-i%5;r=(l&(1<<a)-1).toString(32),l>>=a,i-=a,Je=1<<32-He(s)+i|t<<i|l,Xe=r+e}else Je=1<<r|t<<i|l,Xe=e}function Lr(e){e.return!==null&&(Tn(e,1),Ic(e,1,0))}function Mr(e){for(;e===dl;)dl=ts[--ls],ts[ls]=null,ul=ts[--ls],ts[ls]=null;for(;e===Hn;)Hn=Se[--Re],Se[Re]=null,Xe=Se[--Re],Se[Re]=null,Je=Se[--Re],Se[Re]=null}var Ne=null,ve=null,U=!1,Ie=null;function Hc(e,s){var t=Ee(5,null,null,0);t.elementType="DELETED",t.stateNode=s,t.return=e,s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)}function Ka(e,s){switch(e.tag){case 5:var t=e.type;return s=s.nodeType!==1||t.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(e.stateNode=s,Ne=e,ve=_n(s.firstChild),!0):!1;case 6:return s=e.pendingProps===""||s.nodeType!==3?null:s,s!==null?(e.stateNode=s,Ne=e,ve=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(t=Hn!==null?{id:Je,overflow:Xe}:null,e.memoizedState={dehydrated:s,treeContext:t,retryLane:1073741824},t=Ee(18,null,null,0),t.stateNode=s,t.return=e,e.child=t,Ne=e,ve=null,!0):!1;default:return!1}}function Yi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qi(e){if(U){var s=ve;if(s){var t=s;if(!Ka(e,s)){if(Yi(e))throw Error(y(418));s=_n(t.nextSibling);var l=Ne;s&&Ka(e,s)?Hc(l,t):(e.flags=e.flags&-4097|2,U=!1,Ne=e)}}else{if(Yi(e))throw Error(y(418));e.flags=e.flags&-4097|2,U=!1,Ne=e}}}function Ja(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function At(e){if(e!==Ne)return!1;if(!U)return Ja(e),U=!0,!1;var s;if((s=e.tag!==3)&&!(s=e.tag!==5)&&(s=e.type,s=s!=="head"&&s!=="body"&&!Vi(e.type,e.memoizedProps)),s&&(s=ve)){if(Yi(e))throw Bc(),Error(y(418));for(;s;)Hc(e,s),s=_n(s.nextSibling)}if(Ja(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,s=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(s===0){ve=_n(e.nextSibling);break e}s--}else t!=="$"&&t!=="$!"&&t!=="$?"||s++}e=e.nextSibling}ve=null}}else ve=Ne?_n(e.stateNode.nextSibling):null;return!0}function Bc(){for(var e=ve;e;)e=_n(e.nextSibling)}function _s(){ve=Ne=null,U=!1}function Ar(e){Ie===null?Ie=[e]:Ie.push(e)}var Fm=rn.ReactCurrentBatchConfig;function As(e,s,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(y(309));var l=t.stateNode}if(!l)throw Error(y(147,e));var i=l,r=""+e;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===r?s.ref:(s=function(a){var o=i.refs;a===null?delete o[r]:o[r]=a},s._stringRef=r,s)}if(typeof e!="string")throw Error(y(284));if(!t._owner)throw Error(y(290,e))}return e}function Ot(e,s){throw e=Object.prototype.toString.call(s),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e))}function Xa(e){var s=e._init;return s(e._payload)}function $c(e){function s(m,d){if(e){var p=m.deletions;p===null?(m.deletions=[d],m.flags|=16):p.push(d)}}function t(m,d){if(!e)return null;for(;d!==null;)s(m,d),d=d.sibling;return null}function l(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=vn(m,d),m.index=0,m.sibling=null,m}function r(m,d,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<d?(m.flags|=2,d):p):(m.flags|=2,d)):(m.flags|=1048576,d)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function o(m,d,p,_){return d===null||d.tag!==6?(d=gi(p,m.mode,_),d.return=m,d):(d=i(d,p),d.return=m,d)}function c(m,d,p,_){var k=p.type;return k===Jn?f(m,d,p.props.children,_,p.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===on&&Xa(k)===d.type)?(_=i(d,p.props),_.ref=As(m,d,p),_.return=m,_):(_=Xt(p.type,p.key,p.props,null,m.mode,_),_.ref=As(m,d,p),_.return=m,_)}function u(m,d,p,_){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=yi(p,m.mode,_),d.return=m,d):(d=i(d,p.children||[]),d.return=m,d)}function f(m,d,p,_,k){return d===null||d.tag!==7?(d=Dn(p,m.mode,_,k),d.return=m,d):(d=i(d,p),d.return=m,d)}function x(m,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=gi(""+d,m.mode,p),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case wt:return p=Xt(d.type,d.key,d.props,null,m.mode,p),p.ref=As(m,null,d),p.return=m,p;case Kn:return d=yi(d,m.mode,p),d.return=m,d;case on:var _=d._init;return x(m,_(d._payload),p)}if(Hs(d)||zs(d))return d=Dn(d,m.mode,p,null),d.return=m,d;Ot(m,d)}return null}function h(m,d,p,_){var k=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:o(m,d,""+p,_);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case wt:return p.key===k?c(m,d,p,_):null;case Kn:return p.key===k?u(m,d,p,_):null;case on:return k=p._init,h(m,d,k(p._payload),_)}if(Hs(p)||zs(p))return k!==null?null:f(m,d,p,_,null);Ot(m,p)}return null}function v(m,d,p,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(p)||null,o(d,m,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case wt:return m=m.get(_.key===null?p:_.key)||null,c(d,m,_,k);case Kn:return m=m.get(_.key===null?p:_.key)||null,u(d,m,_,k);case on:var E=_._init;return v(m,d,p,E(_._payload),k)}if(Hs(_)||zs(_))return m=m.get(p)||null,f(d,m,_,k,null);Ot(d,_)}return null}function N(m,d,p,_){for(var k=null,E=null,C=d,z=d=0,Y=null;C!==null&&z<p.length;z++){C.index>z?(Y=C,C=null):Y=C.sibling;var A=h(m,C,p[z],_);if(A===null){C===null&&(C=Y);break}e&&C&&A.alternate===null&&s(m,C),d=r(A,d,z),E===null?k=A:E.sibling=A,E=A,C=Y}if(z===p.length)return t(m,C),U&&Tn(m,z),k;if(C===null){for(;z<p.length;z++)C=x(m,p[z],_),C!==null&&(d=r(C,d,z),E===null?k=C:E.sibling=C,E=C);return U&&Tn(m,z),k}for(C=l(m,C);z<p.length;z++)Y=v(C,m,z,p[z],_),Y!==null&&(e&&Y.alternate!==null&&C.delete(Y.key===null?z:Y.key),d=r(Y,d,z),E===null?k=Y:E.sibling=Y,E=Y);return e&&C.forEach(function(Le){return s(m,Le)}),U&&Tn(m,z),k}function b(m,d,p,_){var k=zs(p);if(typeof k!="function")throw Error(y(150));if(p=k.call(p),p==null)throw Error(y(151));for(var E=k=null,C=d,z=d=0,Y=null,A=p.next();C!==null&&!A.done;z++,A=p.next()){C.index>z?(Y=C,C=null):Y=C.sibling;var Le=h(m,C,A.value,_);if(Le===null){C===null&&(C=Y);break}e&&C&&Le.alternate===null&&s(m,C),d=r(Le,d,z),E===null?k=Le:E.sibling=Le,E=Le,C=Y}if(A.done)return t(m,C),U&&Tn(m,z),k;if(C===null){for(;!A.done;z++,A=p.next())A=x(m,A.value,_),A!==null&&(d=r(A,d,z),E===null?k=A:E.sibling=A,E=A);return U&&Tn(m,z),k}for(C=l(m,C);!A.done;z++,A=p.next())A=v(C,m,z,A.value,_),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?z:A.key),d=r(A,d,z),E===null?k=A:E.sibling=A,E=A);return e&&C.forEach(function(Es){return s(m,Es)}),U&&Tn(m,z),k}function T(m,d,p,_){if(typeof p=="object"&&p!==null&&p.type===Jn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case wt:e:{for(var k=p.key,E=d;E!==null;){if(E.key===k){if(k=p.type,k===Jn){if(E.tag===7){t(m,E.sibling),d=i(E,p.props.children),d.return=m,m=d;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===on&&Xa(k)===E.type){t(m,E.sibling),d=i(E,p.props),d.ref=As(m,E,p),d.return=m,m=d;break e}t(m,E);break}else s(m,E);E=E.sibling}p.type===Jn?(d=Dn(p.props.children,m.mode,_,p.key),d.return=m,m=d):(_=Xt(p.type,p.key,p.props,null,m.mode,_),_.ref=As(m,d,p),_.return=m,m=_)}return a(m);case Kn:e:{for(E=p.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){t(m,d.sibling),d=i(d,p.children||[]),d.return=m,m=d;break e}else{t(m,d);break}else s(m,d);d=d.sibling}d=yi(p,m.mode,_),d.return=m,m=d}return a(m);case on:return E=p._init,T(m,d,E(p._payload),_)}if(Hs(p))return N(m,d,p,_);if(zs(p))return b(m,d,p,_);Ot(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(t(m,d.sibling),d=i(d,p),d.return=m,m=d):(t(m,d),d=gi(p,m.mode,_),d.return=m,m=d),a(m)):t(m,d)}return T}var gs=$c(!0),Fc=$c(!1),ml=wn(null),pl=null,is=null,Or=null;function Dr(){Or=is=pl=null}function Ir(e){var s=ml.current;F(ml),e._currentValue=s}function Ki(e,s,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,l!==null&&(l.childLanes|=s)):l!==null&&(l.childLanes&s)!==s&&(l.childLanes|=s),e===t)break;e=e.return}}function ps(e,s){pl=e,Or=is=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&s&&(xe=!0),e.firstContext=null)}function ze(e){var s=e._currentValue;if(Or!==e)if(e={context:e,memoizedValue:s,next:null},is===null){if(pl===null)throw Error(y(308));is=e,pl.dependencies={lanes:0,firstContext:e}}else is=is.next=e;return s}var Mn=null;function Hr(e){Mn===null?Mn=[e]:Mn.push(e)}function Uc(e,s,t,l){var i=s.interleaved;return i===null?(t.next=t,Hr(s)):(t.next=i.next,i.next=t),s.interleaved=t,tn(e,l)}function tn(e,s){e.lanes|=s;var t=e.alternate;for(t!==null&&(t.lanes|=s),t=e,e=e.return;e!==null;)e.childLanes|=s,t=e.alternate,t!==null&&(t.childLanes|=s),t=e,e=e.return;return t.tag===3?t.stateNode:null}var cn=!1;function Br(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vc(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,s){return{eventTime:e,lane:s,tag:0,payload:null,callback:null,next:null}}function gn(e,s,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,O&2){var i=l.pending;return i===null?s.next=s:(s.next=i.next,i.next=s),l.pending=s,tn(e,t)}return i=l.interleaved,i===null?(s.next=s,Hr(l)):(s.next=i.next,i.next=s),l.interleaved=s,tn(e,t)}function Qt(e,s,t){if(s=s.updateQueue,s!==null&&(s=s.shared,(t&4194240)!==0)){var l=s.lanes;l&=e.pendingLanes,t|=l,s.lanes=t,wr(e,t)}}function Za(e,s){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var i=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};r===null?i=r=a:r=r.next=a,t=t.next}while(t!==null);r===null?i=r=s:r=r.next=s}else i=r=s;t={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:l.shared,effects:l.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=s:e.next=s,t.lastBaseUpdate=s}function hl(e,s,t,l){var i=e.updateQueue;cn=!1;var r=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?r=u:a.next=u,a=c;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=c))}if(r!==null){var x=i.baseState;a=0,f=u=c=null,o=r;do{var h=o.lane,v=o.eventTime;if((l&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var N=e,b=o;switch(h=s,v=t,b.tag){case 1:if(N=b.payload,typeof N=="function"){x=N.call(v,x,h);break e}x=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=b.payload,h=typeof N=="function"?N.call(v,x,h):N,h==null)break e;x=Q({},x,h);break e;case 2:cn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[o]:h.push(o))}else v={eventTime:v,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=v,c=x):f=f.next=v,a|=h;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(c=x),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,s=i.shared.interleaved,s!==null){i=s;do a|=i.lane,i=i.next;while(i!==s)}else r===null&&(i.shared.lanes=0);$n|=a,e.lanes=a,e.memoizedState=x}}function eo(e,s,t){if(e=s.effects,s.effects=null,e!==null)for(s=0;s<e.length;s++){var l=e[s],i=l.callback;if(i!==null){if(l.callback=null,l=t,typeof i!="function")throw Error(y(191,i));i.call(l)}}}var yt={},Qe=wn(yt),ot=wn(yt),ct=wn(yt);function An(e){if(e===yt)throw Error(y(174));return e}function $r(e,s){switch(B(ct,s),B(ot,e),B(Qe,yt),e=s.nodeType,e){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:zi(null,"");break;default:e=e===8?s.parentNode:s,s=e.namespaceURI||null,e=e.tagName,s=zi(s,e)}F(Qe),B(Qe,s)}function ys(){F(Qe),F(ot),F(ct)}function Wc(e){An(ct.current);var s=An(Qe.current),t=zi(s,e.type);s!==t&&(B(ot,e),B(Qe,t))}function Fr(e){ot.current===e&&(F(Qe),F(ot))}var V=wn(0);function fl(e){for(var s=e;s!==null;){if(s.tag===13){var t=s.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var mi=[];function Ur(){for(var e=0;e<mi.length;e++)mi[e]._workInProgressVersionPrimary=null;mi.length=0}var Gt=rn.ReactCurrentDispatcher,pi=rn.ReactCurrentBatchConfig,Bn=0,W=null,X=null,ne=null,xl=!1,Gs=!1,dt=0,Um=0;function re(){throw Error(y(321))}function Vr(e,s){if(s===null)return!1;for(var t=0;t<s.length&&t<e.length;t++)if(!$e(e[t],s[t]))return!1;return!0}function Wr(e,s,t,l,i,r){if(Bn=r,W=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Gt.current=e===null||e.memoizedState===null?Gm:Ym,e=t(l,i),Gs){r=0;do{if(Gs=!1,dt=0,25<=r)throw Error(y(301));r+=1,ne=X=null,s.updateQueue=null,Gt.current=qm,e=t(l,i)}while(Gs)}if(Gt.current=_l,s=X!==null&&X.next!==null,Bn=0,ne=X=W=null,xl=!1,s)throw Error(y(300));return e}function Qr(){var e=dt!==0;return dt=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?W.memoizedState=ne=e:ne=ne.next=e,ne}function Te(){if(X===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var s=ne===null?W.memoizedState:ne.next;if(s!==null)ne=s,X=e;else{if(e===null)throw Error(y(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ne===null?W.memoizedState=ne=e:ne=ne.next=e}return ne}function ut(e,s){return typeof s=="function"?s(e):s}function hi(e){var s=Te(),t=s.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var l=X,i=l.baseQueue,r=t.pending;if(r!==null){if(i!==null){var a=i.next;i.next=r.next,r.next=a}l.baseQueue=i=r,t.pending=null}if(i!==null){r=i.next,l=l.baseState;var o=a=null,c=null,u=r;do{var f=u.lane;if((Bn&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),l=u.hasEagerState?u.eagerState:e(l,u.action);else{var x={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=x,a=l):c=c.next=x,W.lanes|=f,$n|=f}u=u.next}while(u!==null&&u!==r);c===null?a=l:c.next=o,$e(l,s.memoizedState)||(xe=!0),s.memoizedState=l,s.baseState=a,s.baseQueue=c,t.lastRenderedState=l}if(e=t.interleaved,e!==null){i=e;do r=i.lane,W.lanes|=r,$n|=r,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[s.memoizedState,t.dispatch]}function fi(e){var s=Te(),t=s.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var l=t.dispatch,i=t.pending,r=s.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do r=e(r,a.action),a=a.next;while(a!==i);$e(r,s.memoizedState)||(xe=!0),s.memoizedState=r,s.baseQueue===null&&(s.baseState=r),t.lastRenderedState=r}return[r,l]}function Qc(){}function Gc(e,s){var t=W,l=Te(),i=s(),r=!$e(l.memoizedState,i);if(r&&(l.memoizedState=i,xe=!0),l=l.queue,Gr(Kc.bind(null,t,l,e),[e]),l.getSnapshot!==s||r||ne!==null&&ne.memoizedState.tag&1){if(t.flags|=2048,mt(9,qc.bind(null,t,l,i,s),void 0,null),se===null)throw Error(y(349));Bn&30||Yc(t,s,i)}return i}function Yc(e,s,t){e.flags|=16384,e={getSnapshot:s,value:t},s=W.updateQueue,s===null?(s={lastEffect:null,stores:null},W.updateQueue=s,s.stores=[e]):(t=s.stores,t===null?s.stores=[e]:t.push(e))}function qc(e,s,t,l){s.value=t,s.getSnapshot=l,Jc(s)&&Xc(e)}function Kc(e,s,t){return t(function(){Jc(s)&&Xc(e)})}function Jc(e){var s=e.getSnapshot;e=e.value;try{var t=s();return!$e(e,t)}catch{return!0}}function Xc(e){var s=tn(e,1);s!==null&&Be(s,e,1,-1)}function no(e){var s=Ue();return typeof e=="function"&&(e=e()),s.memoizedState=s.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ut,lastRenderedState:e},s.queue=e,e=e.dispatch=Qm.bind(null,W,e),[s.memoizedState,e]}function mt(e,s,t,l){return e={tag:e,create:s,destroy:t,deps:l,next:null},s=W.updateQueue,s===null?(s={lastEffect:null,stores:null},W.updateQueue=s,s.lastEffect=e.next=e):(t=s.lastEffect,t===null?s.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,s.lastEffect=e)),e}function Zc(){return Te().memoizedState}function Yt(e,s,t,l){var i=Ue();W.flags|=e,i.memoizedState=mt(1|s,t,void 0,l===void 0?null:l)}function zl(e,s,t,l){var i=Te();l=l===void 0?null:l;var r=void 0;if(X!==null){var a=X.memoizedState;if(r=a.destroy,l!==null&&Vr(l,a.deps)){i.memoizedState=mt(s,t,r,l);return}}W.flags|=e,i.memoizedState=mt(1|s,t,r,l)}function so(e,s){return Yt(8390656,8,e,s)}function Gr(e,s){return zl(2048,8,e,s)}function ed(e,s){return zl(4,2,e,s)}function nd(e,s){return zl(4,4,e,s)}function sd(e,s){if(typeof s=="function")return e=e(),s(e),function(){s(null)};if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function td(e,s,t){return t=t!=null?t.concat([e]):null,zl(4,4,sd.bind(null,s,e),t)}function Yr(){}function ld(e,s){var t=Te();s=s===void 0?null:s;var l=t.memoizedState;return l!==null&&s!==null&&Vr(s,l[1])?l[0]:(t.memoizedState=[e,s],e)}function id(e,s){var t=Te();s=s===void 0?null:s;var l=t.memoizedState;return l!==null&&s!==null&&Vr(s,l[1])?l[0]:(e=e(),t.memoizedState=[e,s],e)}function rd(e,s,t){return Bn&21?($e(t,s)||(t=uc(),W.lanes|=t,$n|=t,e.baseState=!0),s):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=t)}function Vm(e,s){var t=H;H=t!==0&&4>t?t:4,e(!0);var l=pi.transition;pi.transition={};try{e(!1),s()}finally{H=t,pi.transition=l}}function ad(){return Te().memoizedState}function Wm(e,s,t){var l=jn(e);if(t={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null},od(e))cd(s,t);else if(t=Uc(e,s,t,l),t!==null){var i=me();Be(t,e,l,i),dd(t,s,l)}}function Qm(e,s,t){var l=jn(e),i={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null};if(od(e))cd(s,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=s.lastRenderedReducer,r!==null))try{var a=s.lastRenderedState,o=r(a,t);if(i.hasEagerState=!0,i.eagerState=o,$e(o,a)){var c=s.interleaved;c===null?(i.next=i,Hr(s)):(i.next=c.next,c.next=i),s.interleaved=i;return}}catch{}finally{}t=Uc(e,s,i,l),t!==null&&(i=me(),Be(t,e,l,i),dd(t,s,l))}}function od(e){var s=e.alternate;return e===W||s!==null&&s===W}function cd(e,s){Gs=xl=!0;var t=e.pending;t===null?s.next=s:(s.next=t.next,t.next=s),e.pending=s}function dd(e,s,t){if(t&4194240){var l=s.lanes;l&=e.pendingLanes,t|=l,s.lanes=t,wr(e,t)}}var _l={readContext:ze,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Gm={readContext:ze,useCallback:function(e,s){return Ue().memoizedState=[e,s===void 0?null:s],e},useContext:ze,useEffect:so,useImperativeHandle:function(e,s,t){return t=t!=null?t.concat([e]):null,Yt(4194308,4,sd.bind(null,s,e),t)},useLayoutEffect:function(e,s){return Yt(4194308,4,e,s)},useInsertionEffect:function(e,s){return Yt(4,2,e,s)},useMemo:function(e,s){var t=Ue();return s=s===void 0?null:s,e=e(),t.memoizedState=[e,s],e},useReducer:function(e,s,t){var l=Ue();return s=t!==void 0?t(s):s,l.memoizedState=l.baseState=s,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},l.queue=e,e=e.dispatch=Wm.bind(null,W,e),[l.memoizedState,e]},useRef:function(e){var s=Ue();return e={current:e},s.memoizedState=e},useState:no,useDebugValue:Yr,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=no(!1),s=e[0];return e=Vm.bind(null,e[1]),Ue().memoizedState=e,[s,e]},useMutableSource:function(){},useSyncExternalStore:function(e,s,t){var l=W,i=Ue();if(U){if(t===void 0)throw Error(y(407));t=t()}else{if(t=s(),se===null)throw Error(y(349));Bn&30||Yc(l,s,t)}i.memoizedState=t;var r={value:t,getSnapshot:s};return i.queue=r,so(Kc.bind(null,l,r,e),[e]),l.flags|=2048,mt(9,qc.bind(null,l,r,t,s),void 0,null),t},useId:function(){var e=Ue(),s=se.identifierPrefix;if(U){var t=Xe,l=Je;t=(l&~(1<<32-He(l)-1)).toString(32)+t,s=":"+s+"R"+t,t=dt++,0<t&&(s+="H"+t.toString(32)),s+=":"}else t=Um++,s=":"+s+"r"+t.toString(32)+":";return e.memoizedState=s},unstable_isNewReconciler:!1},Ym={readContext:ze,useCallback:ld,useContext:ze,useEffect:Gr,useImperativeHandle:td,useInsertionEffect:ed,useLayoutEffect:nd,useMemo:id,useReducer:hi,useRef:Zc,useState:function(){return hi(ut)},useDebugValue:Yr,useDeferredValue:function(e){var s=Te();return rd(s,X.memoizedState,e)},useTransition:function(){var e=hi(ut)[0],s=Te().memoizedState;return[e,s]},useMutableSource:Qc,useSyncExternalStore:Gc,useId:ad,unstable_isNewReconciler:!1},qm={readContext:ze,useCallback:ld,useContext:ze,useEffect:Gr,useImperativeHandle:td,useInsertionEffect:ed,useLayoutEffect:nd,useMemo:id,useReducer:fi,useRef:Zc,useState:function(){return fi(ut)},useDebugValue:Yr,useDeferredValue:function(e){var s=Te();return X===null?s.memoizedState=e:rd(s,X.memoizedState,e)},useTransition:function(){var e=fi(ut)[0],s=Te().memoizedState;return[e,s]},useMutableSource:Qc,useSyncExternalStore:Gc,useId:ad,unstable_isNewReconciler:!1};function Ae(e,s){if(e&&e.defaultProps){s=Q({},s),e=e.defaultProps;for(var t in e)s[t]===void 0&&(s[t]=e[t]);return s}return s}function Ji(e,s,t,l){s=e.memoizedState,t=t(l,s),t=t==null?s:Q({},s,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Tl={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,s,t){e=e._reactInternals;var l=me(),i=jn(e),r=Ze(l,i);r.payload=s,t!=null&&(r.callback=t),s=gn(e,r,i),s!==null&&(Be(s,e,i,l),Qt(s,e,i))},enqueueReplaceState:function(e,s,t){e=e._reactInternals;var l=me(),i=jn(e),r=Ze(l,i);r.tag=1,r.payload=s,t!=null&&(r.callback=t),s=gn(e,r,i),s!==null&&(Be(s,e,i,l),Qt(s,e,i))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var t=me(),l=jn(e),i=Ze(t,l);i.tag=2,s!=null&&(i.callback=s),s=gn(e,i,l),s!==null&&(Be(s,e,l,t),Qt(s,e,l))}};function to(e,s,t,l,i,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,a):s.prototype&&s.prototype.isPureReactComponent?!lt(t,l)||!lt(i,r):!0}function ud(e,s,t){var l=!1,i=bn,r=s.contextType;return typeof r=="object"&&r!==null?r=ze(r):(i=ge(s)?In:ce.current,l=s.contextTypes,r=(l=l!=null)?xs(e,i):bn),s=new s(t,r),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Tl,e.stateNode=s,s._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=r),s}function lo(e,s,t,l){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(t,l),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(t,l),s.state!==e&&Tl.enqueueReplaceState(s,s.state,null)}function Xi(e,s,t,l){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Br(e);var r=s.contextType;typeof r=="object"&&r!==null?i.context=ze(r):(r=ge(s)?In:ce.current,i.context=xs(e,r)),i.state=e.memoizedState,r=s.getDerivedStateFromProps,typeof r=="function"&&(Ji(e,s,r,t),i.state=e.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Tl.enqueueReplaceState(i,i.state,null),hl(e,t,i,l),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function js(e,s){try{var t="",l=s;do t+=bu(l),l=l.return;while(l);var i=t}catch(r){i=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:s,stack:i,digest:null}}function xi(e,s,t){return{value:e,source:null,stack:t??null,digest:s??null}}function Zi(e,s){try{console.error(s.value)}catch(t){setTimeout(function(){throw t})}}var Km=typeof WeakMap=="function"?WeakMap:Map;function md(e,s,t){t=Ze(-1,t),t.tag=3,t.payload={element:null};var l=s.value;return t.callback=function(){yl||(yl=!0,cr=l),Zi(e,s)},t}function pd(e,s,t){t=Ze(-1,t),t.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=s.value;t.payload=function(){return l(i)},t.callback=function(){Zi(e,s)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Zi(e,s),typeof l!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var a=s.stack;this.componentDidCatch(s.value,{componentStack:a!==null?a:""})}),t}function io(e,s,t){var l=e.pingCache;if(l===null){l=e.pingCache=new Km;var i=new Set;l.set(s,i)}else i=l.get(s),i===void 0&&(i=new Set,l.set(s,i));i.has(t)||(i.add(t),e=dp.bind(null,e,s,t),s.then(e,e))}function ro(e){do{var s;if((s=e.tag===13)&&(s=e.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return e;e=e.return}while(e!==null);return null}function ao(e,s,t,l,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===s?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(s=Ze(-1,1),s.tag=2,gn(t,s,1))),t.lanes|=1),e)}var Jm=rn.ReactCurrentOwner,xe=!1;function ue(e,s,t,l){s.child=e===null?Fc(s,null,t,l):gs(s,e.child,t,l)}function oo(e,s,t,l,i){t=t.render;var r=s.ref;return ps(s,i),l=Wr(e,s,t,l,r,i),t=Qr(),e!==null&&!xe?(s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~i,ln(e,s,i)):(U&&t&&Lr(s),s.flags|=1,ue(e,s,l,i),s.child)}function co(e,s,t,l,i){if(e===null){var r=t.type;return typeof r=="function"&&!sa(r)&&r.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(s.tag=15,s.type=r,hd(e,s,r,l,i)):(e=Xt(t.type,null,l,s,s.mode,i),e.ref=s.ref,e.return=s,s.child=e)}if(r=e.child,!(e.lanes&i)){var a=r.memoizedProps;if(t=t.compare,t=t!==null?t:lt,t(a,l)&&e.ref===s.ref)return ln(e,s,i)}return s.flags|=1,e=vn(r,l),e.ref=s.ref,e.return=s,s.child=e}function hd(e,s,t,l,i){if(e!==null){var r=e.memoizedProps;if(lt(r,l)&&e.ref===s.ref)if(xe=!1,s.pendingProps=l=r,(e.lanes&i)!==0)e.flags&131072&&(xe=!0);else return s.lanes=e.lanes,ln(e,s,i)}return er(e,s,t,l,i)}function fd(e,s,t){var l=s.pendingProps,i=l.children,r=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(as,je),je|=t;else{if(!(t&1073741824))return e=r!==null?r.baseLanes|t:t,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:e,cachePool:null,transitions:null},s.updateQueue=null,B(as,je),je|=e,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=r!==null?r.baseLanes:t,B(as,je),je|=l}else r!==null?(l=r.baseLanes|t,s.memoizedState=null):l=t,B(as,je),je|=l;return ue(e,s,i,t),s.child}function xd(e,s){var t=s.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(s.flags|=512,s.flags|=2097152)}function er(e,s,t,l,i){var r=ge(t)?In:ce.current;return r=xs(s,r),ps(s,i),t=Wr(e,s,t,l,r,i),l=Qr(),e!==null&&!xe?(s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~i,ln(e,s,i)):(U&&l&&Lr(s),s.flags|=1,ue(e,s,t,i),s.child)}function uo(e,s,t,l,i){if(ge(t)){var r=!0;cl(s)}else r=!1;if(ps(s,i),s.stateNode===null)qt(e,s),ud(s,t,l),Xi(s,t,l,i),l=!0;else if(e===null){var a=s.stateNode,o=s.memoizedProps;a.props=o;var c=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=ze(u):(u=ge(t)?In:ce.current,u=xs(s,u));var f=t.getDerivedStateFromProps,x=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";x||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==l||c!==u)&&lo(s,a,l,u),cn=!1;var h=s.memoizedState;a.state=h,hl(s,l,a,i),c=s.memoizedState,o!==l||h!==c||_e.current||cn?(typeof f=="function"&&(Ji(s,t,f,l),c=s.memoizedState),(o=cn||to(s,t,o,l,h,c,u))?(x||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(s.flags|=4194308)):(typeof a.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=l,s.memoizedState=c),a.props=l,a.state=c,a.context=u,l=o):(typeof a.componentDidMount=="function"&&(s.flags|=4194308),l=!1)}else{a=s.stateNode,Vc(e,s),o=s.memoizedProps,u=s.type===s.elementType?o:Ae(s.type,o),a.props=u,x=s.pendingProps,h=a.context,c=t.contextType,typeof c=="object"&&c!==null?c=ze(c):(c=ge(t)?In:ce.current,c=xs(s,c));var v=t.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==x||h!==c)&&lo(s,a,l,c),cn=!1,h=s.memoizedState,a.state=h,hl(s,l,a,i);var N=s.memoizedState;o!==x||h!==N||_e.current||cn?(typeof v=="function"&&(Ji(s,t,v,l),N=s.memoizedState),(u=cn||to(s,t,u,l,h,N,c)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(l,N,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(l,N,c)),typeof a.componentDidUpdate=="function"&&(s.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(s.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(s.flags|=1024),s.memoizedProps=l,s.memoizedState=N),a.props=l,a.state=N,a.context=c,l=u):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(s.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(s.flags|=1024),l=!1)}return nr(e,s,t,l,r,i)}function nr(e,s,t,l,i,r){xd(e,s);var a=(s.flags&128)!==0;if(!l&&!a)return i&&qa(s,t,!1),ln(e,s,r);l=s.stateNode,Jm.current=s;var o=a&&typeof t.getDerivedStateFromError!="function"?null:l.render();return s.flags|=1,e!==null&&a?(s.child=gs(s,e.child,null,r),s.child=gs(s,null,o,r)):ue(e,s,o,r),s.memoizedState=l.state,i&&qa(s,t,!0),s.child}function _d(e){var s=e.stateNode;s.pendingContext?Ya(e,s.pendingContext,s.pendingContext!==s.context):s.context&&Ya(e,s.context,!1),$r(e,s.containerInfo)}function mo(e,s,t,l,i){return _s(),Ar(i),s.flags|=256,ue(e,s,t,l),s.child}var sr={dehydrated:null,treeContext:null,retryLane:0};function tr(e){return{baseLanes:e,cachePool:null,transitions:null}}function gd(e,s,t){var l=s.pendingProps,i=V.current,r=!1,a=(s.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(r=!0,s.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(V,i&1),e===null)return qi(s),e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(s.mode&1?e.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(a=l.children,e=l.fallback,r?(l=s.mode,r=s.child,a={mode:"hidden",children:a},!(l&1)&&r!==null?(r.childLanes=0,r.pendingProps=a):r=Ml(a,l,0,null),e=Dn(e,l,t,null),r.return=s,e.return=s,r.sibling=e,s.child=r,s.child.memoizedState=tr(t),s.memoizedState=sr,e):qr(s,a));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Xm(e,s,a,l,o,i,t);if(r){r=l.fallback,a=s.mode,i=e.child,o=i.sibling;var c={mode:"hidden",children:l.children};return!(a&1)&&s.child!==i?(l=s.child,l.childLanes=0,l.pendingProps=c,s.deletions=null):(l=vn(i,c),l.subtreeFlags=i.subtreeFlags&14680064),o!==null?r=vn(o,r):(r=Dn(r,a,t,null),r.flags|=2),r.return=s,l.return=s,l.sibling=r,s.child=l,l=r,r=s.child,a=e.child.memoizedState,a=a===null?tr(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},r.memoizedState=a,r.childLanes=e.childLanes&~t,s.memoizedState=sr,l}return r=e.child,e=r.sibling,l=vn(r,{mode:"visible",children:l.children}),!(s.mode&1)&&(l.lanes=t),l.return=s,l.sibling=null,e!==null&&(t=s.deletions,t===null?(s.deletions=[e],s.flags|=16):t.push(e)),s.child=l,s.memoizedState=null,l}function qr(e,s){return s=Ml({mode:"visible",children:s},e.mode,0,null),s.return=e,e.child=s}function Dt(e,s,t,l){return l!==null&&Ar(l),gs(s,e.child,null,t),e=qr(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function Xm(e,s,t,l,i,r,a){if(t)return s.flags&256?(s.flags&=-257,l=xi(Error(y(422))),Dt(e,s,a,l)):s.memoizedState!==null?(s.child=e.child,s.flags|=128,null):(r=l.fallback,i=s.mode,l=Ml({mode:"visible",children:l.children},i,0,null),r=Dn(r,i,a,null),r.flags|=2,l.return=s,r.return=s,l.sibling=r,s.child=l,s.mode&1&&gs(s,e.child,null,a),s.child.memoizedState=tr(a),s.memoizedState=sr,r);if(!(s.mode&1))return Dt(e,s,a,null);if(i.data==="$!"){if(l=i.nextSibling&&i.nextSibling.dataset,l)var o=l.dgst;return l=o,r=Error(y(419)),l=xi(r,l,void 0),Dt(e,s,a,l)}if(o=(a&e.childLanes)!==0,xe||o){if(l=se,l!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(l.suspendedLanes|a)?0:i,i!==0&&i!==r.retryLane&&(r.retryLane=i,tn(e,i),Be(l,e,i,-1))}return na(),l=xi(Error(y(421))),Dt(e,s,a,l)}return i.data==="$?"?(s.flags|=128,s.child=e.child,s=up.bind(null,e),i._reactRetry=s,null):(e=r.treeContext,ve=_n(i.nextSibling),Ne=s,U=!0,Ie=null,e!==null&&(Se[Re++]=Je,Se[Re++]=Xe,Se[Re++]=Hn,Je=e.id,Xe=e.overflow,Hn=s),s=qr(s,l.children),s.flags|=4096,s)}function po(e,s,t){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s),Ki(e.return,s,t)}function _i(e,s,t,l,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:i}:(r.isBackwards=s,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=t,r.tailMode=i)}function yd(e,s,t){var l=s.pendingProps,i=l.revealOrder,r=l.tail;if(ue(e,s,l.children,t),l=V.current,l&2)l=l&1|2,s.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&po(e,t,s);else if(e.tag===19)po(e,t,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(B(V,l),!(s.mode&1))s.memoizedState=null;else switch(i){case"forwards":for(t=s.child,i=null;t!==null;)e=t.alternate,e!==null&&fl(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=s.child,s.child=null):(i=t.sibling,t.sibling=null),_i(s,!1,i,t,r);break;case"backwards":for(t=null,i=s.child,s.child=null;i!==null;){if(e=i.alternate,e!==null&&fl(e)===null){s.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}_i(s,!0,t,null,r);break;case"together":_i(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function qt(e,s){!(s.mode&1)&&e!==null&&(e.alternate=null,s.alternate=null,s.flags|=2)}function ln(e,s,t){if(e!==null&&(s.dependencies=e.dependencies),$n|=s.lanes,!(t&s.childLanes))return null;if(e!==null&&s.child!==e.child)throw Error(y(153));if(s.child!==null){for(e=s.child,t=vn(e,e.pendingProps),s.child=t,t.return=s;e.sibling!==null;)e=e.sibling,t=t.sibling=vn(e,e.pendingProps),t.return=s;t.sibling=null}return s.child}function Zm(e,s,t){switch(s.tag){case 3:_d(s),_s();break;case 5:Wc(s);break;case 1:ge(s.type)&&cl(s);break;case 4:$r(s,s.stateNode.containerInfo);break;case 10:var l=s.type._context,i=s.memoizedProps.value;B(ml,l._currentValue),l._currentValue=i;break;case 13:if(l=s.memoizedState,l!==null)return l.dehydrated!==null?(B(V,V.current&1),s.flags|=128,null):t&s.child.childLanes?gd(e,s,t):(B(V,V.current&1),e=ln(e,s,t),e!==null?e.sibling:null);B(V,V.current&1);break;case 19:if(l=(t&s.childLanes)!==0,e.flags&128){if(l)return yd(e,s,t);s.flags|=128}if(i=s.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(V,V.current),l)break;return null;case 22:case 23:return s.lanes=0,fd(e,s,t)}return ln(e,s,t)}var jd,lr,vd,Nd;jd=function(e,s){for(var t=s.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break;for(;t.sibling===null;){if(t.return===null||t.return===s)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};lr=function(){};vd=function(e,s,t,l){var i=e.memoizedProps;if(i!==l){e=s.stateNode,An(Qe.current);var r=null;switch(t){case"input":i=Si(e,i),l=Si(e,l),r=[];break;case"select":i=Q({},i,{value:void 0}),l=Q({},l,{value:void 0}),r=[];break;case"textarea":i=Ci(e,i),l=Ci(e,l),r=[];break;default:typeof i.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=al)}Ti(t,l);var a;t=null;for(u in i)if(!l.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Js.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in l){var c=l[u];if(o=i!=null?i[u]:void 0,l.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(t||(t={}),t[a]=c[a])}else t||(r||(r=[]),r.push(u,t)),t=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(r=r||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(r=r||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Js.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&$("scroll",e),r||o===c||(r=[])):(r=r||[]).push(u,c))}t&&(r=r||[]).push("style",t);var u=r;(s.updateQueue=u)&&(s.flags|=4)}};Nd=function(e,s,t,l){t!==l&&(s.flags|=4)};function Os(e,s){if(!U)switch(e.tailMode){case"hidden":s=e.tail;for(var t=null;s!==null;)s.alternate!==null&&(t=s),s=s.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ae(e){var s=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(s)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags&14680064,l|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=t,s}function ep(e,s,t){var l=s.pendingProps;switch(Mr(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(s),null;case 1:return ge(s.type)&&ol(),ae(s),null;case 3:return l=s.stateNode,ys(),F(_e),F(ce),Ur(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(At(s)?s.flags|=4:e===null||e.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Ie!==null&&(mr(Ie),Ie=null))),lr(e,s),ae(s),null;case 5:Fr(s);var i=An(ct.current);if(t=s.type,e!==null&&s.stateNode!=null)vd(e,s,t,l,i),e.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!l){if(s.stateNode===null)throw Error(y(166));return ae(s),null}if(e=An(Qe.current),At(s)){l=s.stateNode,t=s.type;var r=s.memoizedProps;switch(l[Ve]=s,l[at]=r,e=(s.mode&1)!==0,t){case"dialog":$("cancel",l),$("close",l);break;case"iframe":case"object":case"embed":$("load",l);break;case"video":case"audio":for(i=0;i<$s.length;i++)$($s[i],l);break;case"source":$("error",l);break;case"img":case"image":case"link":$("error",l),$("load",l);break;case"details":$("toggle",l);break;case"input":va(l,r),$("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!r.multiple},$("invalid",l);break;case"textarea":ba(l,r),$("invalid",l)}Ti(t,r),i=null;for(var a in r)if(r.hasOwnProperty(a)){var o=r[a];a==="children"?typeof o=="string"?l.textContent!==o&&(r.suppressHydrationWarning!==!0&&Mt(l.textContent,o,e),i=["children",o]):typeof o=="number"&&l.textContent!==""+o&&(r.suppressHydrationWarning!==!0&&Mt(l.textContent,o,e),i=["children",""+o]):Js.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&$("scroll",l)}switch(t){case"input":St(l),Na(l,r,!0);break;case"textarea":St(l),ka(l);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(l.onclick=al)}l=i,s.updateQueue=l,l!==null&&(s.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ko(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=a.createElement(t,{is:l.is}):(e=a.createElement(t),t==="select"&&(a=e,l.multiple?a.multiple=!0:l.size&&(a.size=l.size))):e=a.createElementNS(e,t),e[Ve]=s,e[at]=l,jd(e,s,!1,!1),s.stateNode=e;e:{switch(a=Pi(t,l),t){case"dialog":$("cancel",e),$("close",e),i=l;break;case"iframe":case"object":case"embed":$("load",e),i=l;break;case"video":case"audio":for(i=0;i<$s.length;i++)$($s[i],e);i=l;break;case"source":$("error",e),i=l;break;case"img":case"image":case"link":$("error",e),$("load",e),i=l;break;case"details":$("toggle",e),i=l;break;case"input":va(e,l),i=Si(e,l),$("invalid",e);break;case"option":i=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},i=Q({},l,{value:void 0}),$("invalid",e);break;case"textarea":ba(e,l),i=Ci(e,l),$("invalid",e);break;default:i=l}Ti(t,i),o=i;for(r in o)if(o.hasOwnProperty(r)){var c=o[r];r==="style"?Zo(e,c):r==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Jo(e,c)):r==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&Xs(e,c):typeof c=="number"&&Xs(e,""+c):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Js.hasOwnProperty(r)?c!=null&&r==="onScroll"&&$("scroll",e):c!=null&&yr(e,r,c,a))}switch(t){case"input":St(e),Na(e,l,!1);break;case"textarea":St(e),ka(e);break;case"option":l.value!=null&&e.setAttribute("value",""+Nn(l.value));break;case"select":e.multiple=!!l.multiple,r=l.value,r!=null?cs(e,!!l.multiple,r,!1):l.defaultValue!=null&&cs(e,!!l.multiple,l.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=al)}switch(t){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return ae(s),null;case 6:if(e&&s.stateNode!=null)Nd(e,s,e.memoizedProps,l);else{if(typeof l!="string"&&s.stateNode===null)throw Error(y(166));if(t=An(ct.current),An(Qe.current),At(s)){if(l=s.stateNode,t=s.memoizedProps,l[Ve]=s,(r=l.nodeValue!==t)&&(e=Ne,e!==null))switch(e.tag){case 3:Mt(l.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mt(l.nodeValue,t,(e.mode&1)!==0)}r&&(s.flags|=4)}else l=(t.nodeType===9?t:t.ownerDocument).createTextNode(l),l[Ve]=s,s.stateNode=l}return ae(s),null;case 13:if(F(V),l=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ve!==null&&s.mode&1&&!(s.flags&128))Bc(),_s(),s.flags|=98560,r=!1;else if(r=At(s),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(y(318));if(r=s.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(y(317));r[Ve]=s}else _s(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;ae(s),r=!1}else Ie!==null&&(mr(Ie),Ie=null),r=!0;if(!r)return s.flags&65536?s:null}return s.flags&128?(s.lanes=t,s):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(s.child.flags|=8192,s.mode&1&&(e===null||V.current&1?Z===0&&(Z=3):na())),s.updateQueue!==null&&(s.flags|=4),ae(s),null);case 4:return ys(),lr(e,s),e===null&&it(s.stateNode.containerInfo),ae(s),null;case 10:return Ir(s.type._context),ae(s),null;case 17:return ge(s.type)&&ol(),ae(s),null;case 19:if(F(V),r=s.memoizedState,r===null)return ae(s),null;if(l=(s.flags&128)!==0,a=r.rendering,a===null)if(l)Os(r,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=s.child;e!==null;){if(a=fl(e),a!==null){for(s.flags|=128,Os(r,!1),l=a.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),s.subtreeFlags=0,l=t,t=s.child;t!==null;)r=t,e=l,r.flags&=14680066,a=r.alternate,a===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,e=a.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return B(V,V.current&1|2),s.child}e=e.sibling}r.tail!==null&&K()>vs&&(s.flags|=128,l=!0,Os(r,!1),s.lanes=4194304)}else{if(!l)if(e=fl(a),e!==null){if(s.flags|=128,l=!0,t=e.updateQueue,t!==null&&(s.updateQueue=t,s.flags|=4),Os(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!U)return ae(s),null}else 2*K()-r.renderingStartTime>vs&&t!==1073741824&&(s.flags|=128,l=!0,Os(r,!1),s.lanes=4194304);r.isBackwards?(a.sibling=s.child,s.child=a):(t=r.last,t!==null?t.sibling=a:s.child=a,r.last=a)}return r.tail!==null?(s=r.tail,r.rendering=s,r.tail=s.sibling,r.renderingStartTime=K(),s.sibling=null,t=V.current,B(V,l?t&1|2:t&1),s):(ae(s),null);case 22:case 23:return ea(),l=s.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(s.flags|=8192),l&&s.mode&1?je&1073741824&&(ae(s),s.subtreeFlags&6&&(s.flags|=8192)):ae(s),null;case 24:return null;case 25:return null}throw Error(y(156,s.tag))}function np(e,s){switch(Mr(s),s.tag){case 1:return ge(s.type)&&ol(),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return ys(),F(_e),F(ce),Ur(),e=s.flags,e&65536&&!(e&128)?(s.flags=e&-65537|128,s):null;case 5:return Fr(s),null;case 13:if(F(V),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(y(340));_s()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return F(V),null;case 4:return ys(),null;case 10:return Ir(s.type._context),null;case 22:case 23:return ea(),null;case 24:return null;default:return null}}var It=!1,oe=!1,sp=typeof WeakSet=="function"?WeakSet:Set,w=null;function rs(e,s){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(l){G(e,s,l)}else t.current=null}function ir(e,s,t){try{t()}catch(l){G(e,s,l)}}var ho=!1;function tp(e,s){if(Fi=ll,e=Rc(),Pr(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var i=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var a=0,o=-1,c=-1,u=0,f=0,x=e,h=null;n:for(;;){for(var v;x!==t||i!==0&&x.nodeType!==3||(o=a+i),x!==r||l!==0&&x.nodeType!==3||(c=a+l),x.nodeType===3&&(a+=x.nodeValue.length),(v=x.firstChild)!==null;)h=x,x=v;for(;;){if(x===e)break n;if(h===t&&++u===i&&(o=a),h===r&&++f===l&&(c=a),(v=x.nextSibling)!==null)break;x=h,h=x.parentNode}x=v}t=o===-1||c===-1?null:{start:o,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ui={focusedElem:e,selectionRange:t},ll=!1,w=s;w!==null;)if(s=w,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,w=e;else for(;w!==null;){s=w;try{var N=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var b=N.memoizedProps,T=N.memoizedState,m=s.stateNode,d=m.getSnapshotBeforeUpdate(s.elementType===s.type?b:Ae(s.type,b),T);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=s.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(_){G(s,s.return,_)}if(e=s.sibling,e!==null){e.return=s.return,w=e;break}w=s.return}return N=ho,ho=!1,N}function Ys(e,s,t){var l=s.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var i=l=l.next;do{if((i.tag&e)===e){var r=i.destroy;i.destroy=void 0,r!==void 0&&ir(s,t,r)}i=i.next}while(i!==l)}}function Pl(e,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var t=s=s.next;do{if((t.tag&e)===e){var l=t.create;t.destroy=l()}t=t.next}while(t!==s)}}function rr(e){var s=e.ref;if(s!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof s=="function"?s(e):s.current=e}}function bd(e){var s=e.alternate;s!==null&&(e.alternate=null,bd(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&(delete s[Ve],delete s[at],delete s[Qi],delete s[Hm],delete s[Bm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kd(e){return e.tag===5||e.tag===3||e.tag===4}function fo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ar(e,s,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,s?t.nodeType===8?t.parentNode.insertBefore(e,s):t.insertBefore(e,s):(t.nodeType===8?(s=t.parentNode,s.insertBefore(e,t)):(s=t,s.appendChild(e)),t=t._reactRootContainer,t!=null||s.onclick!==null||(s.onclick=al));else if(l!==4&&(e=e.child,e!==null))for(ar(e,s,t),e=e.sibling;e!==null;)ar(e,s,t),e=e.sibling}function or(e,s,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,s?t.insertBefore(e,s):t.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(or(e,s,t),e=e.sibling;e!==null;)or(e,s,t),e=e.sibling}var te=null,Oe=!1;function an(e,s,t){for(t=t.child;t!==null;)wd(e,s,t),t=t.sibling}function wd(e,s,t){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(kl,t)}catch{}switch(t.tag){case 5:oe||rs(t,s);case 6:var l=te,i=Oe;te=null,an(e,s,t),te=l,Oe=i,te!==null&&(Oe?(e=te,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):te.removeChild(t.stateNode));break;case 18:te!==null&&(Oe?(e=te,t=t.stateNode,e.nodeType===8?di(e.parentNode,t):e.nodeType===1&&di(e,t),st(e)):di(te,t.stateNode));break;case 4:l=te,i=Oe,te=t.stateNode.containerInfo,Oe=!0,an(e,s,t),te=l,Oe=i;break;case 0:case 11:case 14:case 15:if(!oe&&(l=t.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){i=l=l.next;do{var r=i,a=r.destroy;r=r.tag,a!==void 0&&(r&2||r&4)&&ir(t,s,a),i=i.next}while(i!==l)}an(e,s,t);break;case 1:if(!oe&&(rs(t,s),l=t.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=t.memoizedProps,l.state=t.memoizedState,l.componentWillUnmount()}catch(o){G(t,s,o)}an(e,s,t);break;case 21:an(e,s,t);break;case 22:t.mode&1?(oe=(l=oe)||t.memoizedState!==null,an(e,s,t),oe=l):an(e,s,t);break;default:an(e,s,t)}}function xo(e){var s=e.updateQueue;if(s!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new sp),s.forEach(function(l){var i=mp.bind(null,e,l);t.has(l)||(t.add(l),l.then(i,i))})}}function Me(e,s){var t=s.deletions;if(t!==null)for(var l=0;l<t.length;l++){var i=t[l];try{var r=e,a=s,o=a;e:for(;o!==null;){switch(o.tag){case 5:te=o.stateNode,Oe=!1;break e;case 3:te=o.stateNode.containerInfo,Oe=!0;break e;case 4:te=o.stateNode.containerInfo,Oe=!0;break e}o=o.return}if(te===null)throw Error(y(160));wd(r,a,i),te=null,Oe=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){G(i,s,u)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Sd(s,e),s=s.sibling}function Sd(e,s){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(s,e),Fe(e),l&4){try{Ys(3,e,e.return),Pl(3,e)}catch(b){G(e,e.return,b)}try{Ys(5,e,e.return)}catch(b){G(e,e.return,b)}}break;case 1:Me(s,e),Fe(e),l&512&&t!==null&&rs(t,t.return);break;case 5:if(Me(s,e),Fe(e),l&512&&t!==null&&rs(t,t.return),e.flags&32){var i=e.stateNode;try{Xs(i,"")}catch(b){G(e,e.return,b)}}if(l&4&&(i=e.stateNode,i!=null)){var r=e.memoizedProps,a=t!==null?t.memoizedProps:r,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&r.type==="radio"&&r.name!=null&&Yo(i,r),Pi(o,a);var u=Pi(o,r);for(a=0;a<c.length;a+=2){var f=c[a],x=c[a+1];f==="style"?Zo(i,x):f==="dangerouslySetInnerHTML"?Jo(i,x):f==="children"?Xs(i,x):yr(i,f,x,u)}switch(o){case"input":Ri(i,r);break;case"textarea":qo(i,r);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!r.multiple;var v=r.value;v!=null?cs(i,!!r.multiple,v,!1):h!==!!r.multiple&&(r.defaultValue!=null?cs(i,!!r.multiple,r.defaultValue,!0):cs(i,!!r.multiple,r.multiple?[]:"",!1))}i[at]=r}catch(b){G(e,e.return,b)}}break;case 6:if(Me(s,e),Fe(e),l&4){if(e.stateNode===null)throw Error(y(162));i=e.stateNode,r=e.memoizedProps;try{i.nodeValue=r}catch(b){G(e,e.return,b)}}break;case 3:if(Me(s,e),Fe(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{st(s.containerInfo)}catch(b){G(e,e.return,b)}break;case 4:Me(s,e),Fe(e);break;case 13:Me(s,e),Fe(e),i=e.child,i.flags&8192&&(r=i.memoizedState!==null,i.stateNode.isHidden=r,!r||i.alternate!==null&&i.alternate.memoizedState!==null||(Xr=K())),l&4&&xo(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(oe=(u=oe)||f,Me(s,e),oe=u):Me(s,e),Fe(e),l&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(w=e,f=e.child;f!==null;){for(x=w=f;w!==null;){switch(h=w,v=h.child,h.tag){case 0:case 11:case 14:case 15:Ys(4,h,h.return);break;case 1:rs(h,h.return);var N=h.stateNode;if(typeof N.componentWillUnmount=="function"){l=h,t=h.return;try{s=l,N.props=s.memoizedProps,N.state=s.memoizedState,N.componentWillUnmount()}catch(b){G(l,t,b)}}break;case 5:rs(h,h.return);break;case 22:if(h.memoizedState!==null){go(x);continue}}v!==null?(v.return=h,w=v):go(x)}f=f.sibling}e:for(f=null,x=e;;){if(x.tag===5){if(f===null){f=x;try{i=x.stateNode,u?(r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(o=x.stateNode,c=x.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Xo("display",a))}catch(b){G(e,e.return,b)}}}else if(x.tag===6){if(f===null)try{x.stateNode.nodeValue=u?"":x.memoizedProps}catch(b){G(e,e.return,b)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;f===x&&(f=null),x=x.return}f===x&&(f=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Me(s,e),Fe(e),l&4&&xo(e);break;case 21:break;default:Me(s,e),Fe(e)}}function Fe(e){var s=e.flags;if(s&2){try{e:{for(var t=e.return;t!==null;){if(kd(t)){var l=t;break e}t=t.return}throw Error(y(160))}switch(l.tag){case 5:var i=l.stateNode;l.flags&32&&(Xs(i,""),l.flags&=-33);var r=fo(e);or(e,r,i);break;case 3:case 4:var a=l.stateNode.containerInfo,o=fo(e);ar(e,o,a);break;default:throw Error(y(161))}}catch(c){G(e,e.return,c)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function lp(e,s,t){w=e,Rd(e)}function Rd(e,s,t){for(var l=(e.mode&1)!==0;w!==null;){var i=w,r=i.child;if(i.tag===22&&l){var a=i.memoizedState!==null||It;if(!a){var o=i.alternate,c=o!==null&&o.memoizedState!==null||oe;o=It;var u=oe;if(It=a,(oe=c)&&!u)for(w=i;w!==null;)a=w,c=a.child,a.tag===22&&a.memoizedState!==null?yo(i):c!==null?(c.return=a,w=c):yo(i);for(;r!==null;)w=r,Rd(r),r=r.sibling;w=i,It=o,oe=u}_o(e)}else i.subtreeFlags&8772&&r!==null?(r.return=i,w=r):_o(e)}}function _o(e){for(;w!==null;){var s=w;if(s.flags&8772){var t=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:oe||Pl(5,s);break;case 1:var l=s.stateNode;if(s.flags&4&&!oe)if(t===null)l.componentDidMount();else{var i=s.elementType===s.type?t.memoizedProps:Ae(s.type,t.memoizedProps);l.componentDidUpdate(i,t.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var r=s.updateQueue;r!==null&&eo(s,r,l);break;case 3:var a=s.updateQueue;if(a!==null){if(t=null,s.child!==null)switch(s.child.tag){case 5:t=s.child.stateNode;break;case 1:t=s.child.stateNode}eo(s,a,t)}break;case 5:var o=s.stateNode;if(t===null&&s.flags&4){t=o;var c=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var u=s.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var x=f.dehydrated;x!==null&&st(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}oe||s.flags&512&&rr(s)}catch(h){G(s,s.return,h)}}if(s===e){w=null;break}if(t=s.sibling,t!==null){t.return=s.return,w=t;break}w=s.return}}function go(e){for(;w!==null;){var s=w;if(s===e){w=null;break}var t=s.sibling;if(t!==null){t.return=s.return,w=t;break}w=s.return}}function yo(e){for(;w!==null;){var s=w;try{switch(s.tag){case 0:case 11:case 15:var t=s.return;try{Pl(4,s)}catch(c){G(s,t,c)}break;case 1:var l=s.stateNode;if(typeof l.componentDidMount=="function"){var i=s.return;try{l.componentDidMount()}catch(c){G(s,i,c)}}var r=s.return;try{rr(s)}catch(c){G(s,r,c)}break;case 5:var a=s.return;try{rr(s)}catch(c){G(s,a,c)}}}catch(c){G(s,s.return,c)}if(s===e){w=null;break}var o=s.sibling;if(o!==null){o.return=s.return,w=o;break}w=s.return}}var ip=Math.ceil,gl=rn.ReactCurrentDispatcher,Kr=rn.ReactCurrentOwner,Ce=rn.ReactCurrentBatchConfig,O=0,se=null,J=null,le=0,je=0,as=wn(0),Z=0,pt=null,$n=0,Ll=0,Jr=0,qs=null,fe=null,Xr=0,vs=1/0,qe=null,yl=!1,cr=null,yn=null,Ht=!1,pn=null,jl=0,Ks=0,dr=null,Kt=-1,Jt=0;function me(){return O&6?K():Kt!==-1?Kt:Kt=K()}function jn(e){return e.mode&1?O&2&&le!==0?le&-le:Fm.transition!==null?(Jt===0&&(Jt=uc()),Jt):(e=H,e!==0||(e=window.event,e=e===void 0?16:gc(e.type)),e):1}function Be(e,s,t,l){if(50<Ks)throw Ks=0,dr=null,Error(y(185));xt(e,t,l),(!(O&2)||e!==se)&&(e===se&&(!(O&2)&&(Ll|=t),Z===4&&un(e,le)),ye(e,l),t===1&&O===0&&!(s.mode&1)&&(vs=K()+500,Cl&&Sn()))}function ye(e,s){var t=e.callbackNode;Fu(e,s);var l=tl(e,e===se?le:0);if(l===0)t!==null&&Ra(t),e.callbackNode=null,e.callbackPriority=0;else if(s=l&-l,e.callbackPriority!==s){if(t!=null&&Ra(t),s===1)e.tag===0?$m(jo.bind(null,e)):Dc(jo.bind(null,e)),Dm(function(){!(O&6)&&Sn()}),t=null;else{switch(mc(l)){case 1:t=kr;break;case 4:t=cc;break;case 16:t=sl;break;case 536870912:t=dc;break;default:t=sl}t=Ad(t,Ed.bind(null,e))}e.callbackPriority=s,e.callbackNode=t}}function Ed(e,s){if(Kt=-1,Jt=0,O&6)throw Error(y(327));var t=e.callbackNode;if(hs()&&e.callbackNode!==t)return null;var l=tl(e,e===se?le:0);if(l===0)return null;if(l&30||l&e.expiredLanes||s)s=vl(e,l);else{s=l;var i=O;O|=2;var r=zd();(se!==e||le!==s)&&(qe=null,vs=K()+500,On(e,s));do try{op();break}catch(o){Cd(e,o)}while(!0);Dr(),gl.current=r,O=i,J!==null?s=0:(se=null,le=0,s=Z)}if(s!==0){if(s===2&&(i=Di(e),i!==0&&(l=i,s=ur(e,i))),s===1)throw t=pt,On(e,0),un(e,l),ye(e,K()),t;if(s===6)un(e,l);else{if(i=e.current.alternate,!(l&30)&&!rp(i)&&(s=vl(e,l),s===2&&(r=Di(e),r!==0&&(l=r,s=ur(e,r))),s===1))throw t=pt,On(e,0),un(e,l),ye(e,K()),t;switch(e.finishedWork=i,e.finishedLanes=l,s){case 0:case 1:throw Error(y(345));case 2:Pn(e,fe,qe);break;case 3:if(un(e,l),(l&130023424)===l&&(s=Xr+500-K(),10<s)){if(tl(e,0)!==0)break;if(i=e.suspendedLanes,(i&l)!==l){me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Wi(Pn.bind(null,e,fe,qe),s);break}Pn(e,fe,qe);break;case 4:if(un(e,l),(l&4194240)===l)break;for(s=e.eventTimes,i=-1;0<l;){var a=31-He(l);r=1<<a,a=s[a],a>i&&(i=a),l&=~r}if(l=i,l=K()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*ip(l/1960))-l,10<l){e.timeoutHandle=Wi(Pn.bind(null,e,fe,qe),l);break}Pn(e,fe,qe);break;case 5:Pn(e,fe,qe);break;default:throw Error(y(329))}}}return ye(e,K()),e.callbackNode===t?Ed.bind(null,e):null}function ur(e,s){var t=qs;return e.current.memoizedState.isDehydrated&&(On(e,s).flags|=256),e=vl(e,s),e!==2&&(s=fe,fe=t,s!==null&&mr(s)),e}function mr(e){fe===null?fe=e:fe.push.apply(fe,e)}function rp(e){for(var s=e;;){if(s.flags&16384){var t=s.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var l=0;l<t.length;l++){var i=t[l],r=i.getSnapshot;i=i.value;try{if(!$e(r(),i))return!1}catch{return!1}}}if(t=s.child,s.subtreeFlags&16384&&t!==null)t.return=s,s=t;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function un(e,s){for(s&=~Jr,s&=~Ll,e.suspendedLanes|=s,e.pingedLanes&=~s,e=e.expirationTimes;0<s;){var t=31-He(s),l=1<<t;e[t]=-1,s&=~l}}function jo(e){if(O&6)throw Error(y(327));hs();var s=tl(e,0);if(!(s&1))return ye(e,K()),null;var t=vl(e,s);if(e.tag!==0&&t===2){var l=Di(e);l!==0&&(s=l,t=ur(e,l))}if(t===1)throw t=pt,On(e,0),un(e,s),ye(e,K()),t;if(t===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=s,Pn(e,fe,qe),ye(e,K()),null}function Zr(e,s){var t=O;O|=1;try{return e(s)}finally{O=t,O===0&&(vs=K()+500,Cl&&Sn())}}function Fn(e){pn!==null&&pn.tag===0&&!(O&6)&&hs();var s=O;O|=1;var t=Ce.transition,l=H;try{if(Ce.transition=null,H=1,e)return e()}finally{H=l,Ce.transition=t,O=s,!(O&6)&&Sn()}}function ea(){je=as.current,F(as)}function On(e,s){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Om(t)),J!==null)for(t=J.return;t!==null;){var l=t;switch(Mr(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ol();break;case 3:ys(),F(_e),F(ce),Ur();break;case 5:Fr(l);break;case 4:ys();break;case 13:F(V);break;case 19:F(V);break;case 10:Ir(l.type._context);break;case 22:case 23:ea()}t=t.return}if(se=e,J=e=vn(e.current,null),le=je=s,Z=0,pt=null,Jr=Ll=$n=0,fe=qs=null,Mn!==null){for(s=0;s<Mn.length;s++)if(t=Mn[s],l=t.interleaved,l!==null){t.interleaved=null;var i=l.next,r=t.pending;if(r!==null){var a=r.next;r.next=i,l.next=a}t.pending=l}Mn=null}return e}function Cd(e,s){do{var t=J;try{if(Dr(),Gt.current=_l,xl){for(var l=W.memoizedState;l!==null;){var i=l.queue;i!==null&&(i.pending=null),l=l.next}xl=!1}if(Bn=0,ne=X=W=null,Gs=!1,dt=0,Kr.current=null,t===null||t.return===null){Z=1,pt=s,J=null;break}e:{var r=e,a=t.return,o=t,c=s;if(s=le,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=o,x=f.tag;if(!(f.mode&1)&&(x===0||x===11||x===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=ro(a);if(v!==null){v.flags&=-257,ao(v,a,o,r,s),v.mode&1&&io(r,u,s),s=v,c=u;var N=s.updateQueue;if(N===null){var b=new Set;b.add(c),s.updateQueue=b}else N.add(c);break e}else{if(!(s&1)){io(r,u,s),na();break e}c=Error(y(426))}}else if(U&&o.mode&1){var T=ro(a);if(T!==null){!(T.flags&65536)&&(T.flags|=256),ao(T,a,o,r,s),Ar(js(c,o));break e}}r=c=js(c,o),Z!==4&&(Z=2),qs===null?qs=[r]:qs.push(r),r=a;do{switch(r.tag){case 3:r.flags|=65536,s&=-s,r.lanes|=s;var m=md(r,c,s);Za(r,m);break e;case 1:o=c;var d=r.type,p=r.stateNode;if(!(r.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(yn===null||!yn.has(p)))){r.flags|=65536,s&=-s,r.lanes|=s;var _=pd(r,o,s);Za(r,_);break e}}r=r.return}while(r!==null)}Pd(t)}catch(k){s=k,J===t&&t!==null&&(J=t=t.return);continue}break}while(!0)}function zd(){var e=gl.current;return gl.current=_l,e===null?_l:e}function na(){(Z===0||Z===3||Z===2)&&(Z=4),se===null||!($n&268435455)&&!(Ll&268435455)||un(se,le)}function vl(e,s){var t=O;O|=2;var l=zd();(se!==e||le!==s)&&(qe=null,On(e,s));do try{ap();break}catch(i){Cd(e,i)}while(!0);if(Dr(),O=t,gl.current=l,J!==null)throw Error(y(261));return se=null,le=0,Z}function ap(){for(;J!==null;)Td(J)}function op(){for(;J!==null&&!Lu();)Td(J)}function Td(e){var s=Md(e.alternate,e,je);e.memoizedProps=e.pendingProps,s===null?Pd(e):J=s,Kr.current=null}function Pd(e){var s=e;do{var t=s.alternate;if(e=s.return,s.flags&32768){if(t=np(t,s),t!==null){t.flags&=32767,J=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,J=null;return}}else if(t=ep(t,s,je),t!==null){J=t;return}if(s=s.sibling,s!==null){J=s;return}J=s=e}while(s!==null);Z===0&&(Z=5)}function Pn(e,s,t){var l=H,i=Ce.transition;try{Ce.transition=null,H=1,cp(e,s,t,l)}finally{Ce.transition=i,H=l}return null}function cp(e,s,t,l){do hs();while(pn!==null);if(O&6)throw Error(y(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var r=t.lanes|t.childLanes;if(Uu(e,r),e===se&&(J=se=null,le=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ht||(Ht=!0,Ad(sl,function(){return hs(),null})),r=(t.flags&15990)!==0,t.subtreeFlags&15990||r){r=Ce.transition,Ce.transition=null;var a=H;H=1;var o=O;O|=4,Kr.current=null,tp(e,t),Sd(t,e),Cm(Ui),ll=!!Fi,Ui=Fi=null,e.current=t,lp(t),Mu(),O=o,H=a,Ce.transition=r}else e.current=t;if(Ht&&(Ht=!1,pn=e,jl=i),r=e.pendingLanes,r===0&&(yn=null),Du(t.stateNode),ye(e,K()),s!==null)for(l=e.onRecoverableError,t=0;t<s.length;t++)i=s[t],l(i.value,{componentStack:i.stack,digest:i.digest});if(yl)throw yl=!1,e=cr,cr=null,e;return jl&1&&e.tag!==0&&hs(),r=e.pendingLanes,r&1?e===dr?Ks++:(Ks=0,dr=e):Ks=0,Sn(),null}function hs(){if(pn!==null){var e=mc(jl),s=Ce.transition,t=H;try{if(Ce.transition=null,H=16>e?16:e,pn===null)var l=!1;else{if(e=pn,pn=null,jl=0,O&6)throw Error(y(331));var i=O;for(O|=4,w=e.current;w!==null;){var r=w,a=r.child;if(w.flags&16){var o=r.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(w=u;w!==null;){var f=w;switch(f.tag){case 0:case 11:case 15:Ys(8,f,r)}var x=f.child;if(x!==null)x.return=f,w=x;else for(;w!==null;){f=w;var h=f.sibling,v=f.return;if(bd(f),f===u){w=null;break}if(h!==null){h.return=v,w=h;break}w=v}}}var N=r.alternate;if(N!==null){var b=N.child;if(b!==null){N.child=null;do{var T=b.sibling;b.sibling=null,b=T}while(b!==null)}}w=r}}if(r.subtreeFlags&2064&&a!==null)a.return=r,w=a;else e:for(;w!==null;){if(r=w,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Ys(9,r,r.return)}var m=r.sibling;if(m!==null){m.return=r.return,w=m;break e}w=r.return}}var d=e.current;for(w=d;w!==null;){a=w;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,w=p;else e:for(a=d;w!==null;){if(o=w,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Pl(9,o)}}catch(k){G(o,o.return,k)}if(o===a){w=null;break e}var _=o.sibling;if(_!==null){_.return=o.return,w=_;break e}w=o.return}}if(O=i,Sn(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(kl,e)}catch{}l=!0}return l}finally{H=t,Ce.transition=s}}return!1}function vo(e,s,t){s=js(t,s),s=md(e,s,1),e=gn(e,s,1),s=me(),e!==null&&(xt(e,1,s),ye(e,s))}function G(e,s,t){if(e.tag===3)vo(e,e,t);else for(;s!==null;){if(s.tag===3){vo(s,e,t);break}else if(s.tag===1){var l=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(yn===null||!yn.has(l))){e=js(t,e),e=pd(s,e,1),s=gn(s,e,1),e=me(),s!==null&&(xt(s,1,e),ye(s,e));break}}s=s.return}}function dp(e,s,t){var l=e.pingCache;l!==null&&l.delete(s),s=me(),e.pingedLanes|=e.suspendedLanes&t,se===e&&(le&t)===t&&(Z===4||Z===3&&(le&130023424)===le&&500>K()-Xr?On(e,0):Jr|=t),ye(e,s)}function Ld(e,s){s===0&&(e.mode&1?(s=Ct,Ct<<=1,!(Ct&130023424)&&(Ct=4194304)):s=1);var t=me();e=tn(e,s),e!==null&&(xt(e,s,t),ye(e,t))}function up(e){var s=e.memoizedState,t=0;s!==null&&(t=s.retryLane),Ld(e,t)}function mp(e,s){var t=0;switch(e.tag){case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(y(314))}l!==null&&l.delete(s),Ld(e,t)}var Md;Md=function(e,s,t){if(e!==null)if(e.memoizedProps!==s.pendingProps||_e.current)xe=!0;else{if(!(e.lanes&t)&&!(s.flags&128))return xe=!1,Zm(e,s,t);xe=!!(e.flags&131072)}else xe=!1,U&&s.flags&1048576&&Ic(s,ul,s.index);switch(s.lanes=0,s.tag){case 2:var l=s.type;qt(e,s),e=s.pendingProps;var i=xs(s,ce.current);ps(s,t),i=Wr(null,s,l,e,i,t);var r=Qr();return s.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,ge(l)?(r=!0,cl(s)):r=!1,s.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Br(s),i.updater=Tl,s.stateNode=i,i._reactInternals=s,Xi(s,l,e,t),s=nr(null,s,l,!0,r,t)):(s.tag=0,U&&r&&Lr(s),ue(null,s,i,t),s=s.child),s;case 16:l=s.elementType;e:{switch(qt(e,s),e=s.pendingProps,i=l._init,l=i(l._payload),s.type=l,i=s.tag=hp(l),e=Ae(l,e),i){case 0:s=er(null,s,l,e,t);break e;case 1:s=uo(null,s,l,e,t);break e;case 11:s=oo(null,s,l,e,t);break e;case 14:s=co(null,s,l,Ae(l.type,e),t);break e}throw Error(y(306,l,""))}return s;case 0:return l=s.type,i=s.pendingProps,i=s.elementType===l?i:Ae(l,i),er(e,s,l,i,t);case 1:return l=s.type,i=s.pendingProps,i=s.elementType===l?i:Ae(l,i),uo(e,s,l,i,t);case 3:e:{if(_d(s),e===null)throw Error(y(387));l=s.pendingProps,r=s.memoizedState,i=r.element,Vc(e,s),hl(s,l,null,t);var a=s.memoizedState;if(l=a.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},s.updateQueue.baseState=r,s.memoizedState=r,s.flags&256){i=js(Error(y(423)),s),s=mo(e,s,l,t,i);break e}else if(l!==i){i=js(Error(y(424)),s),s=mo(e,s,l,t,i);break e}else for(ve=_n(s.stateNode.containerInfo.firstChild),Ne=s,U=!0,Ie=null,t=Fc(s,null,l,t),s.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(_s(),l===i){s=ln(e,s,t);break e}ue(e,s,l,t)}s=s.child}return s;case 5:return Wc(s),e===null&&qi(s),l=s.type,i=s.pendingProps,r=e!==null?e.memoizedProps:null,a=i.children,Vi(l,i)?a=null:r!==null&&Vi(l,r)&&(s.flags|=32),xd(e,s),ue(e,s,a,t),s.child;case 6:return e===null&&qi(s),null;case 13:return gd(e,s,t);case 4:return $r(s,s.stateNode.containerInfo),l=s.pendingProps,e===null?s.child=gs(s,null,l,t):ue(e,s,l,t),s.child;case 11:return l=s.type,i=s.pendingProps,i=s.elementType===l?i:Ae(l,i),oo(e,s,l,i,t);case 7:return ue(e,s,s.pendingProps,t),s.child;case 8:return ue(e,s,s.pendingProps.children,t),s.child;case 12:return ue(e,s,s.pendingProps.children,t),s.child;case 10:e:{if(l=s.type._context,i=s.pendingProps,r=s.memoizedProps,a=i.value,B(ml,l._currentValue),l._currentValue=a,r!==null)if($e(r.value,a)){if(r.children===i.children&&!_e.current){s=ln(e,s,t);break e}}else for(r=s.child,r!==null&&(r.return=s);r!==null;){var o=r.dependencies;if(o!==null){a=r.child;for(var c=o.firstContext;c!==null;){if(c.context===l){if(r.tag===1){c=Ze(-1,t&-t),c.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}r.lanes|=t,c=r.alternate,c!==null&&(c.lanes|=t),Ki(r.return,t,s),o.lanes|=t;break}c=c.next}}else if(r.tag===10)a=r.type===s.type?null:r.child;else if(r.tag===18){if(a=r.return,a===null)throw Error(y(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Ki(a,t,s),a=r.sibling}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===s){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}ue(e,s,i.children,t),s=s.child}return s;case 9:return i=s.type,l=s.pendingProps.children,ps(s,t),i=ze(i),l=l(i),s.flags|=1,ue(e,s,l,t),s.child;case 14:return l=s.type,i=Ae(l,s.pendingProps),i=Ae(l.type,i),co(e,s,l,i,t);case 15:return hd(e,s,s.type,s.pendingProps,t);case 17:return l=s.type,i=s.pendingProps,i=s.elementType===l?i:Ae(l,i),qt(e,s),s.tag=1,ge(l)?(e=!0,cl(s)):e=!1,ps(s,t),ud(s,l,i),Xi(s,l,i,t),nr(null,s,l,!0,e,t);case 19:return yd(e,s,t);case 22:return fd(e,s,t)}throw Error(y(156,s.tag))};function Ad(e,s){return oc(e,s)}function pp(e,s,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,s,t,l){return new pp(e,s,t,l)}function sa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hp(e){if(typeof e=="function")return sa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vr)return 11;if(e===Nr)return 14}return 2}function vn(e,s){var t=e.alternate;return t===null?(t=Ee(e.tag,s,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=s,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,s=e.dependencies,t.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Xt(e,s,t,l,i,r){var a=2;if(l=e,typeof e=="function")sa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Jn:return Dn(t.children,i,r,s);case jr:a=8,i|=8;break;case Ni:return e=Ee(12,t,s,i|2),e.elementType=Ni,e.lanes=r,e;case bi:return e=Ee(13,t,s,i),e.elementType=bi,e.lanes=r,e;case ki:return e=Ee(19,t,s,i),e.elementType=ki,e.lanes=r,e;case Wo:return Ml(t,i,r,s);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Uo:a=10;break e;case Vo:a=9;break e;case vr:a=11;break e;case Nr:a=14;break e;case on:a=16,l=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return s=Ee(a,t,s,i),s.elementType=e,s.type=l,s.lanes=r,s}function Dn(e,s,t,l){return e=Ee(7,e,l,s),e.lanes=t,e}function Ml(e,s,t,l){return e=Ee(22,e,l,s),e.elementType=Wo,e.lanes=t,e.stateNode={isHidden:!1},e}function gi(e,s,t){return e=Ee(6,e,null,s),e.lanes=t,e}function yi(e,s,t){return s=Ee(4,e.children!==null?e.children:[],e.key,s),s.lanes=t,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}function fp(e,s,t,l,i){this.tag=s,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=l,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ta(e,s,t,l,i,r,a,o,c){return e=new fp(e,s,t,o,c),s===1?(s=1,r===!0&&(s|=8)):s=0,r=Ee(3,null,null,s),e.current=r,r.stateNode=e,r.memoizedState={element:l,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Br(r),e}function xp(e,s,t){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:l==null?null:""+l,children:e,containerInfo:s,implementation:t}}function Od(e){if(!e)return bn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(y(170));var s=e;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(ge(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(y(171))}if(e.tag===1){var t=e.type;if(ge(t))return Oc(e,t,s)}return s}function Dd(e,s,t,l,i,r,a,o,c){return e=ta(t,l,!0,e,i,r,a,o,c),e.context=Od(null),t=e.current,l=me(),i=jn(t),r=Ze(l,i),r.callback=s??null,gn(t,r,i),e.current.lanes=i,xt(e,i,l),ye(e,l),e}function Al(e,s,t,l){var i=s.current,r=me(),a=jn(i);return t=Od(t),s.context===null?s.context=t:s.pendingContext=t,s=Ze(r,a),s.payload={element:e},l=l===void 0?null:l,l!==null&&(s.callback=l),e=gn(i,s,a),e!==null&&(Be(e,i,a,r),Qt(e,i,a)),a}function Nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function No(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<s?t:s}}function la(e,s){No(e,s),(e=e.alternate)&&No(e,s)}function _p(){return null}var Id=typeof reportError=="function"?reportError:function(e){console.error(e)};function ia(e){this._internalRoot=e}Ol.prototype.render=ia.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(y(409));Al(e,s,null,null)};Ol.prototype.unmount=ia.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;Fn(function(){Al(null,e,null,null)}),s[sn]=null}};function Ol(e){this._internalRoot=e}Ol.prototype.unstable_scheduleHydration=function(e){if(e){var s=fc();e={blockedOn:null,target:e,priority:s};for(var t=0;t<dn.length&&s!==0&&s<dn[t].priority;t++);dn.splice(t,0,e),t===0&&_c(e)}};function ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bo(){}function gp(e,s,t,l,i){if(i){if(typeof l=="function"){var r=l;l=function(){var u=Nl(a);r.call(u)}}var a=Dd(s,l,e,0,null,!1,!1,"",bo);return e._reactRootContainer=a,e[sn]=a.current,it(e.nodeType===8?e.parentNode:e),Fn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof l=="function"){var o=l;l=function(){var u=Nl(c);o.call(u)}}var c=ta(e,0,!1,null,null,!1,!1,"",bo);return e._reactRootContainer=c,e[sn]=c.current,it(e.nodeType===8?e.parentNode:e),Fn(function(){Al(s,c,t,l)}),c}function Il(e,s,t,l,i){var r=t._reactRootContainer;if(r){var a=r;if(typeof i=="function"){var o=i;i=function(){var c=Nl(a);o.call(c)}}Al(s,a,e,i)}else a=gp(t,s,e,i,l);return Nl(a)}pc=function(e){switch(e.tag){case 3:var s=e.stateNode;if(s.current.memoizedState.isDehydrated){var t=Bs(s.pendingLanes);t!==0&&(wr(s,t|1),ye(s,K()),!(O&6)&&(vs=K()+500,Sn()))}break;case 13:Fn(function(){var l=tn(e,1);if(l!==null){var i=me();Be(l,e,1,i)}}),la(e,1)}};Sr=function(e){if(e.tag===13){var s=tn(e,134217728);if(s!==null){var t=me();Be(s,e,134217728,t)}la(e,134217728)}};hc=function(e){if(e.tag===13){var s=jn(e),t=tn(e,s);if(t!==null){var l=me();Be(t,e,s,l)}la(e,s)}};fc=function(){return H};xc=function(e,s){var t=H;try{return H=e,s()}finally{H=t}};Mi=function(e,s,t){switch(s){case"input":if(Ri(e,t),s=t.name,t.type==="radio"&&s!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<t.length;s++){var l=t[s];if(l!==e&&l.form===e.form){var i=El(l);if(!i)throw Error(y(90));Go(l),Ri(l,i)}}}break;case"textarea":qo(e,t);break;case"select":s=t.value,s!=null&&cs(e,!!t.multiple,s,!1)}};sc=Zr;tc=Fn;var yp={usingClientEntryPoint:!1,Events:[gt,ns,El,ec,nc,Zr]},Ds={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jp={bundleType:Ds.bundleType,version:Ds.version,rendererPackageName:Ds.rendererPackageName,rendererConfig:Ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rc(e),e===null?null:e.stateNode},findFiberByHostInstance:Ds.findFiberByHostInstance||_p,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bt.isDisabled&&Bt.supportsFiber)try{kl=Bt.inject(jp),We=Bt}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yp;ke.createPortal=function(e,s){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ra(s))throw Error(y(200));return xp(e,s,null,t)};ke.createRoot=function(e,s){if(!ra(e))throw Error(y(299));var t=!1,l="",i=Id;return s!=null&&(s.unstable_strictMode===!0&&(t=!0),s.identifierPrefix!==void 0&&(l=s.identifierPrefix),s.onRecoverableError!==void 0&&(i=s.onRecoverableError)),s=ta(e,1,!1,null,null,t,!1,l,i),e[sn]=s.current,it(e.nodeType===8?e.parentNode:e),new ia(s)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=rc(s),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Fn(e)};ke.hydrate=function(e,s,t){if(!Dl(s))throw Error(y(200));return Il(null,e,s,!0,t)};ke.hydrateRoot=function(e,s,t){if(!ra(e))throw Error(y(405));var l=t!=null&&t.hydratedSources||null,i=!1,r="",a=Id;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),s=Dd(s,null,e,1,t??null,i,!1,r,a),e[sn]=s.current,it(e),l)for(e=0;e<l.length;e++)t=l[e],i=t._getVersion,i=i(t._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[t,i]:s.mutableSourceEagerHydrationData.push(t,i);return new Ol(s)};ke.render=function(e,s,t){if(!Dl(s))throw Error(y(200));return Il(null,e,s,!1,t)};ke.unmountComponentAtNode=function(e){if(!Dl(e))throw Error(y(40));return e._reactRootContainer?(Fn(function(){Il(null,null,e,!1,function(){e._reactRootContainer=null,e[sn]=null})}),!0):!1};ke.unstable_batchedUpdates=Zr;ke.unstable_renderSubtreeIntoContainer=function(e,s,t,l){if(!Dl(t))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Il(e,s,t,!1,l)};ke.version="18.3.1-next-f1338f8080-20240426";function Hd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hd)}catch(e){console.error(e)}}Hd(),Ho.exports=ke;var vp=Ho.exports,ko=vp;ji.createRoot=ko.createRoot,ji.hydrateRoot=ko.hydrateRoot;/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=(...e)=>e.filter((s,t,l)=>!!s&&s.trim()!==""&&l.indexOf(s)===t).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,t,l)=>l?l.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=e=>{const s=bp(e);return s.charAt(0).toUpperCase()+s.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=e=>{for(const s in e)if(s.startsWith("aria-")||s==="role"||s==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=I.forwardRef(({color:e="currentColor",size:s=24,strokeWidth:t=2,absoluteStrokeWidth:l,className:i="",children:r,iconNode:a,...o},c)=>I.createElement("svg",{ref:c,...kp,width:s,height:s,stroke:e,strokeWidth:l?Number(t)*24/Number(s):t,className:Bd("lucide",i),...!r&&!wp(o)&&{"aria-hidden":"true"},...o},[...a.map(([u,f])=>I.createElement(u,f)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=(e,s)=>{const t=I.forwardRef(({className:l,...i},r)=>I.createElement(Sp,{ref:r,iconNode:s,className:Bd(`lucide-${Np(wo(e))}`,`lucide-${e}`,l),...i}));return t.displayName=wo(e),t};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],aa=R("arrow-right",Rp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Cp=R("book-marked",Ep);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Hl=R("book-open",zp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],ht=R("box",Tp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],Lp=R("braces",Pp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ap=R("chevron-left",Mp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Dp=R("chevron-right",Op);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],De=R("circle-check-big",Ip);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Bp=R("circle-plus",Hp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Fp=R("circle-question-mark",$p);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Vp=R("clock",Up);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],Qp=R("cloud",Wp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],oa=R("code",Gp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],qp=R("coffee",Yp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Jp=R("compass",Kp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],ca=R("cpu",Xp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Bl=R("database",Zp);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],$d=R("download",eh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],$l=R("eye",nh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],th=R("file-text",sh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],ih=R("flask-conical",lh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],ah=R("folder-open",rh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],ch=R("funnel",oh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"M10.5 3 8 9l4 13 4-13-2.5-6",key:"b3dvk1"}],["path",{d:"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",key:"7w4byz"}],["path",{d:"M2 9h20",key:"16fsjt"}]],Fl=R("gem",dh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],Ul=R("git-branch",uh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Gn=R("globe",mh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Ge=R("hash",ph);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Fd=R("heart",hh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],xh=R("house",fh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Pe=R("layers",_h);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Vl=R("lightbulb",gh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],ws=R("list",yh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Ud=R("lock",jh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Nh=R("mail",vh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Vd=R("map",bh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],wh=R("message-square",kh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["path",{d:"M5 12h14",key:"1ays0h"}]],Rh=R("minus",Sh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Wd=R("monitor",Eh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],zh=R("moon",Ch);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Rn=R("package",Th);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],da=R("play",Ph);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Mh=R("plus",Lh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],Qd=R("puzzle",Ah);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Un=R("refresh-cw",Oh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],En=R("rocket",Dh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Hh=R("search",Ih);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],jt=R("settings",Bh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Ss=R("shield",$h);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],Uh=R("smile",Fh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Wh=R("square-check-big",Vh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],ua=R("star",Qh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Yh=R("sun",Gh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Rs=R("target",qh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Vn=R("terminal",Kh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],Gd=R("toggle-left",Jh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Zh=R("trash-2",Xh);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ma=R("triangle-alert",ef);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],sf=R("trophy",nf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],pa=R("type",tf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]],rf=R("variable",lf);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Yn=R("wrench",af);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],de=R("zap",of);function vt({slides:e}){const[s,t]=I.useState(0),[l,i]=I.useState(!1),r=I.useCallback(u=>{u>=0&&u<e.length&&!l&&(i(!0),t(u),setTimeout(()=>i(!1),300))},[l,e.length]),a=I.useCallback(()=>{r(s+1)},[s,r]),o=I.useCallback(()=>{r(s-1)},[s,r]);I.useEffect(()=>{const u=f=>{f.key==="ArrowRight"||f.key===" "?(f.preventDefault(),a()):f.key==="ArrowLeft"?(f.preventDefault(),o()):f.key==="Home"?(f.preventDefault(),r(0)):f.key==="End"&&(f.preventDefault(),r(e.length-1))};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[a,o,r,e.length]);const c=e[s].component;return n.jsxs("div",{className:"lecture-wrapper",children:[n.jsxs("nav",{className:"slide-nav",children:[n.jsxs("div",{className:"slide-nav__controls",children:[n.jsx("button",{onClick:()=>r(0),className:"slide-nav__btn",title:"На початок (Home)",children:n.jsx(xh,{})}),n.jsx("button",{onClick:o,disabled:s===0,className:"slide-nav__btn",title:"Попередній (←)",children:n.jsx(Ap,{})}),n.jsx("button",{onClick:a,disabled:s===e.length-1,className:"slide-nav__btn",title:"Наступний (→)",children:n.jsx(Dp,{})})]}),n.jsx("div",{className:"slide-nav__indicators",children:e.map((u,f)=>n.jsx("button",{onClick:()=>r(f),className:`slide-nav__indicator ${s===f?"slide-nav__indicator--active":"slide-nav__indicator--inactive"}`,title:u.title,children:f+1},u.id))}),n.jsxs("div",{className:"slide-nav__counter",children:[s+1," / ",e.length]})]}),n.jsx("div",{className:"slide-container",children:n.jsx("div",{className:"fade-in",children:n.jsx(c,{})},s)}),n.jsxs("div",{className:"keyboard-hints",children:[n.jsx("span",{children:"← → — навігація"}),n.jsx("span",{children:"Home — на початок"}),n.jsx("span",{children:"End — в кінець"})]})]})}function en({icon:e,title:s,subtitle:t,description:l,color:i,delay:r=1}){return n.jsxs("div",{className:`info-card info-card--top-${i} fade-in-delay-${r}`,children:[n.jsx("div",{className:`info-card__icon-wrapper info-card__icon-wrapper--${i}`,children:n.jsx(e,{className:`info-card__icon info-card__icon--${i}`})}),n.jsx("h3",{className:"info-card__title",children:s}),t&&n.jsx("p",{className:"info-card__subtitle",children:t}),n.jsx("p",{className:"info-card__text",children:l})]})}function cf({content:e,color:s}){const[t,l]=I.useState(!1),i=I.useRef(null);return I.useEffect(()=>{function r(a){i.current&&!i.current.contains(a.target)&&l(!1)}return t&&document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[t]),n.jsxs("span",{ref:i,className:"tooltip-wrapper",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[n.jsx("span",{className:`tooltip-trigger tooltip-trigger--${s}`,onClick:()=>l(r=>!r),"aria-label":"Детальніше",children:"ⓘ"}),t&&n.jsx("div",{className:`tooltip-content tooltip-content--${s}`,children:e})]})}function D({icon:e,title:s,subtitle:t,description:l,tooltip:i,color:r,delay:a=1}){return n.jsxs("div",{className:`info-card info-card--${r} fade-in-delay-${a}`,children:[e&&n.jsx(e,{className:`icon-md text-${r} mb-sm`}),n.jsxs("div",{className:"flex items-center gap-xs",children:[n.jsx("h3",{className:"info-card__title",children:s}),i&&n.jsx(cf,{content:i,color:r})]}),t&&n.jsx("p",{className:"info-card__subtitle",children:t}),n.jsx("p",{className:"info-card__text",children:l})]})}function df({letter:e,title:s,subtitle:t,description:l,color:i,delay:r=1}){return n.jsxs("div",{className:`info-card info-card--${i} fade-in-delay-${r}`,children:[n.jsxs("div",{className:"flex items-center gap-sm mb-sm",children:[n.jsx("span",{className:`badge badge--solid-${i}`,children:e}),n.jsx("h3",{className:"info-card__title",children:s})]}),t&&n.jsx("p",{className:"info-card__subtitle",children:t}),n.jsx("p",{className:"info-card__text",children:l})]})}function j({icon:e,title:s,subtitle:t}){return n.jsx("header",{className:"slide-header",children:n.jsxs("div",{className:"slide-header__wrapper",children:[n.jsx(e,{className:"slide-header__icon"}),n.jsxs("div",{className:"slide-header__content",children:[n.jsx("h2",{className:"slide-header__title",children:s}),n.jsx("p",{className:"slide-header__subtitle",children:t})]})]})})}const uf=[{id:0,title:"Лабораторні",component:pf},{id:1,title:"Титульний слайд",component:hf},{id:2,title:"Мета заняття",component:ff},{id:3,title:"Чому Ruby?",component:xf},{id:"3_1",title:"Філософія Matz",component:_f},{id:4,title:"Історія Ruby",component:gf},{id:5,title:"Встановлення Ruby",component:yf},{id:"5_1",title:"IRB — інтерактивна консоль",component:jf},{id:"5_2",title:"Перший скрипт",component:vf},{id:6,title:"Типи даних",component:Nf},{id:"6_1",title:"String — рядки",component:bf},{id:"6_2",title:"Числа та Boolean",component:kf},{id:"6_3",title:"nil — відсутність значення",component:wf},{id:7,title:"Змінні",component:Sf},{id:"7_1",title:"puts, print, p",component:Rf},{id:"7_2",title:"Інтерполяція рядків",component:Ef},{id:8,title:"Умовні конструкції",component:Cf},{id:"8_1",title:"unless та тернарний оператор",component:zf},{id:9,title:"Практика: Вгадай число",component:Tf},{id:10,title:"Підсумки",component:Pf},{id:11,title:"Джерела",component:Lf},{id:12,title:"Питання?",component:Mf}];function mf(){return n.jsx(vt,{slides:uf})}function pf(){const e=[{num:"1",title:"Ruby: функції + хеші + файли",desc:"CRUD-функції, хеші з символьними ключами, збереження у JSON/YAML",points:10,color:"blue"},{num:"2",title:"Ruby: консольний додаток",desc:"Меню через цикл, require_relative, автозавантаження та збереження через ensure",points:10,color:"purple"},{num:"3",title:"Rails: MVC, scaffold, маршрути",desc:"Scaffold для Category, Task вручну, enum, RuboCop",points:10,color:"green"},{num:"4",title:"Шаблони, форми, partials",desc:"Bootstrap, layout, partial для форми, helpers, Docker",points:10,color:"orange"},{num:"5",title:"Active Record: міграції та запити",desc:"Нові поля через міграції, where/order/limit, scopes, нова модель",points:15,color:"cyan"},{num:"6",title:"Асоціації та валідації",desc:"belongs_to, has_many, many-to-many через taggings, кастомні валідації",points:15,color:"pink"},{num:"7",title:"Аутентифікація та тести",desc:"Devise, авторизація через before_action, RSpec + FactoryBot",points:15,color:"yellow"},{num:"8",title:"CI/CD: GitHub Actions + Render",desc:"RSpec + RuboCop у CI, Docker образ на DockerHub, деплой на Render",points:15,color:"red"}];return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content slide__content--wide",children:[n.jsx(j,{icon:Hl,title:"Лабораторні роботи",subtitle:"8 labs · 100 points total"}),n.jsx("div",{className:"slide-grid slide-grid--4col",children:e.map(s=>n.jsx(df,{letter:s.num,title:s.title,subtitle:`${s.points} балів`,description:s.desc,color:s.color,delay:s.num},s.num))})]})})}function hf(){return n.jsxs("div",{className:"slide slide--centered slide--gradient-blue-purple",children:[n.jsx("div",{className:"title-slide__icon-wrapper",children:n.jsx(Fl,{})}),n.jsx("h1",{className:"title-slide__title",children:"Знайомство з Ruby"}),n.jsx("h2",{className:"title-slide__subtitle",children:"Мова, філософія, інструменти"}),n.jsx("p",{className:"title-slide__english",children:"Introduction to Ruby Programming Language"}),n.jsx("div",{className:"title-slide__badge",children:n.jsx("p",{children:"Лекція 1"})})]})}function ff(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Rs,title:"Мета заняття",subtitle:"Learning Objectives"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsx(D,{icon:$d,title:"Встановити Ruby",description:"Налаштувати середовище розробки: rbenv або asdf, IRB, текстовий редактор",color:"blue",delay:1}),n.jsx(D,{icon:Fd,title:"Зрозуміти філософію",description:"Дізнатися, чому Ruby створений для щастя програмістів і що це означає на практиці",color:"purple",delay:2}),n.jsx(D,{icon:pa,title:"Вивчити базові типи даних",description:"String, Integer, Float, Boolean, nil — основи системи типів Ruby",color:"green",delay:3}),n.jsx(D,{icon:oa,title:"Написати першу програму",description:"Консольна гра «Вгадай число» з підказками більше/менше",color:"orange",delay:4})]})]})})}function xf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Fp,title:"Чому Ruby?",subtitle:"Why Ruby?"}),n.jsxs("div",{className:"slide-grid slide-grid--3col",children:[n.jsx(en,{icon:Uh,title:"Developer Happiness",description:"Ruby створений, щоб програмісти отримували задоволення від коду. Синтаксис читається майже як англійська мова.",color:"pink",delay:1}),n.jsx(en,{icon:En,title:"Ruby on Rails",description:"Один з найпопулярніших веб-фреймворків. GitHub, Shopify, Airbnb, Basecamp — побудовані на Rails.",color:"red",delay:2}),n.jsx(en,{icon:de,title:"Продуктивність",description:"Менше boilerplate-коду, потужні абстракції, величезна екосистема gems (бібліотек).",color:"yellow",delay:3})]}),n.jsx("div",{className:"outlined-card outlined-card--blue mt-xl fade-in-delay-4",children:n.jsxs("p",{className:"text-center",style:{margin:0},children:[n.jsx("span",{className:"text-blue font-semibold",children:"Факт:"})," ",n.jsx("span",{className:"text-secondary",children:"Ruby входить у ТОП-10 за рейтингом RedMonk (GitHub + Stack Overflow), а Shopify, GitHub, Basecamp продовжують масштабно інвестувати в Ruby-інфраструктуру"})]})})]})})}function _f(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content slide__content--narrow",children:[n.jsx(j,{icon:Fd,title:"Філософія Matz",subtitle:"Yukihiro Matsumoto — creator of Ruby"}),n.jsxs("div",{className:"outlined-card outlined-card--gradient-purple-pink mb-xl fade-in-delay-1",children:[n.jsxs("p",{className:"text-center fs-lg font-semibold",style:{margin:0,lineHeight:1.8},children:[n.jsx("span",{className:"text-pink",children:"«"}),"Ruby створений для щастя програмістів.",n.jsx("br",{}),"Я хочу, щоб програмування було радісним, а не болісним.",n.jsx("span",{className:"text-pink",children:"»"})]}),n.jsx("p",{className:"text-center text-muted mt-sm",style:{margin:"0.5rem 0 0 0"},children:"— Yukihiro «Matz» Matsumoto"})]}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsx(D,{icon:Hl,title:"Принцип найменшого здивування",subtitle:"Principle of Least Surprise",description:"Мова повинна поводитися так, як програміст інтуїтивно очікує. Мінімум сюрпризів.",color:"purple",delay:2}),n.jsx(D,{icon:qp,title:"Людина понад усе",subtitle:"Human-Oriented Design",description:"Комп'ютери мають працювати для людей, а не навпаки. Код пишеться для людей, не для машин.",color:"pink",delay:3}),n.jsx(D,{icon:Vl,title:"Свобода вираження",subtitle:"Freedom & Flexibility",description:"Ruby пропонує кілька способів вирішити задачу. Програміст обирає найзручніший для себе.",color:"cyan",delay:4}),n.jsx(D,{icon:Fl,title:"Елегантність",subtitle:"Beautiful Code",description:"Код має бути красивим і зрозумілим. Ruby заохочує чистий, виразний стиль програмування.",color:"red",delay:5})]})]})})}function gf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Vp,title:"Історія Ruby",subtitle:"Ruby Timeline"}),n.jsxs("div",{className:"step-list",children:[n.jsxs("div",{className:"step-list__item step-list__item--red fade-in-delay-1",children:[n.jsx("div",{className:"step-list__number step-list__number--red",children:"1"}),n.jsxs("div",{className:"step-list__content",children:[n.jsxs("h4",{className:"step-list__title step-list__title--red",children:["1993 — Ідея ",n.jsx("span",{className:"step-list__subtitle",children:"Birth of an idea"})]}),n.jsx("p",{className:"step-list__description",children:"Yukihiro Matsumoto (Matz) починає розробку Ruby. Хоче поєднати найкраще з Perl, Smalltalk, Eiffel та Lisp."})]})]}),n.jsxs("div",{className:"step-list__item step-list__item--orange fade-in-delay-2",children:[n.jsx("div",{className:"step-list__number step-list__number--orange",children:"2"}),n.jsxs("div",{className:"step-list__content",children:[n.jsxs("h4",{className:"step-list__title step-list__title--orange",children:["1995 — Перший реліз ",n.jsx("span",{className:"step-list__subtitle",children:"Public release in Japan"})]}),n.jsx("p",{className:"step-list__description",children:"Ruby 0.95 опублікований у японських новинних групах. Мова швидко набирає популярність в Японії."})]})]}),n.jsxs("div",{className:"step-list__item step-list__item--yellow fade-in-delay-3",children:[n.jsx("div",{className:"step-list__number step-list__number--yellow",children:"3"}),n.jsxs("div",{className:"step-list__content",children:[n.jsxs("h4",{className:"step-list__title step-list__title--yellow",children:["2004 — Ruby on Rails ",n.jsx("span",{className:"step-list__subtitle",children:"The framework that changed everything"})]}),n.jsx("p",{className:"step-list__description",children:"David Heinemeier Hansson випускає Rails. Ruby стає глобально популярним, вибух веб-розробки."})]})]}),n.jsxs("div",{className:"step-list__item step-list__item--green fade-in-delay-4",children:[n.jsx("div",{className:"step-list__number step-list__number--green",children:"4"}),n.jsxs("div",{className:"step-list__content",children:[n.jsxs("h4",{className:"step-list__title step-list__title--green",children:["2013 — Ruby 2.0 ",n.jsx("span",{className:"step-list__subtitle",children:"Modern Ruby era"})]}),n.jsx("p",{className:"step-list__description",children:"Keyword arguments, lazy enumerators, Module#prepend. Початок модернізації мови."})]})]}),n.jsxs("div",{className:"step-list__item step-list__item--blue fade-in-delay-5",children:[n.jsx("div",{className:"step-list__number step-list__number--blue",children:"5"}),n.jsxs("div",{className:"step-list__content",children:[n.jsxs("h4",{className:"step-list__title",children:["2020+ — Ruby 3.x ",n.jsx("span",{className:"step-list__subtitle",children:"Ruby 3x3: three times faster"})]}),n.jsx("p",{className:"step-list__description",children:"YJIT-компілятор, Ractor для паралелізму, pattern matching, типізація через RBS. Ruby стає значно швидшим."})]})]})]})]})})}function yf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:$d,title:"Встановлення Ruby",subtitle:"Installation & Setup"}),n.jsxs("div",{className:"slide-grid slide-grid--3col",children:[n.jsxs("div",{className:"outlined-card outlined-card--orange fade-in-delay-1",children:[n.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[n.jsx(Wd,{className:"icon-md text-orange"}),n.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Windows"})]}),n.jsx("div",{className:"code-block mb-md",children:n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`# RubyInstaller (найпростіший спосіб)
# 1. Завантажити з rubyinstaller.org
# 2. Обрати "Ruby+Devkit 3.3.x (x64)"
# 3. Запустити інсталятор
# 4. Обрати "MSYS2 development toolchain"

# Або через winget:
winget install RubyInstallerTeam.Ruby.3.3`})}),n.jsx("p",{className:"text-muted fs-body-sm",style:{margin:0},children:"Включає DevKit для компіляції нативних gems"})]}),n.jsxs("div",{className:"outlined-card outlined-card--blue fade-in-delay-2",children:[n.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[n.jsx(Vn,{className:"icon-md text-blue"}),n.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"macOS / Linux"})]}),n.jsx("div",{className:"code-block mb-md",children:n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`# macOS — вже є системний Ruby!
ruby --version  # перевірити

# Або встановити свіжий:
brew install ruby  # macOS

# Linux (Ubuntu/Debian)
sudo apt update
sudo apt install ruby-full`})}),n.jsx("p",{className:"text-muted fs-body-sm",style:{margin:0},children:"Швидко, але без контролю версій"})]}),n.jsxs("div",{className:"outlined-card outlined-card--purple fade-in-delay-3",children:[n.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[n.jsx(jt,{className:"icon-md text-purple"}),n.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Менеджери версій"})]}),n.jsx("div",{className:"code-block mb-md",children:n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`# rbenv (рекомендовано)
brew install rbenv ruby-build
rbenv install 3.3.0
rbenv global 3.3.0

# asdf (універсальний)
brew install asdf  # або git clone
asdf plugin add ruby
asdf install ruby 3.3.0
asdf global ruby 3.3.0`})}),n.jsx("p",{className:"text-muted fs-body-sm",style:{margin:0},children:"Для роботи з кількома версіями Ruby"})]})]}),n.jsxs("div",{className:"outlined-card outlined-card--green mt-xl fade-in-delay-4",children:[n.jsxs("div",{className:"flex items-center gap-sm mb-sm",children:[n.jsx(De,{className:"icon-md text-green"}),n.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Перевірка встановлення (всі ОС)"})]}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,lineHeight:1.7},children:`ruby --version    # → ruby 3.3.0 (...)
irb               # → інтерактивна консоль Ruby
gem --version     # → менеджер пакетів (gems)`})]})]})})}function jf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content slide__content--narrow",children:[n.jsx(j,{icon:Vn,title:"IRB — Interactive Ruby",subtitle:"Інтерактивна консоль для експериментів"}),n.jsxs("div",{className:"outlined-card outlined-card--cyan mb-xl fade-in-delay-1",children:[n.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[n.jsx(Vn,{className:"icon-md text-cyan"}),n.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Що таке IRB?"})]}),n.jsxs("p",{className:"text-secondary fs-body",style:{margin:0},children:[n.jsx("strong",{children:"IRB"})," (Interactive Ruby) — це REPL (Read-Eval-Print Loop). Ви вводите код → Ruby виконує → показує результат. Ідеально для навчання та швидких експериментів."]})]}),n.jsxs("div",{className:"outlined-card outlined-card--blue fade-in-delay-2",children:[n.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[n.jsx(da,{className:"icon-md text-blue"}),n.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Приклад сесії IRB"})]}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`irb(main):001> 2 + 2
=> 4

irb(main):002> "Hello, Ruby!".upcase
=> "HELLO, RUBY!"

irb(main):003> [1, 2, 3].map { |n| n * 10 }
=> [10, 20, 30]

irb(main):004> 5.times { print "🔴 " }
🔴 🔴 🔴 🔴 🔴 => 5

irb(main):005> exit`})]}),n.jsx("div",{className:"outlined-card outlined-card--orange mt-xl fade-in-delay-3",children:n.jsxs("p",{className:"text-center",style:{margin:0},children:[n.jsx("span",{className:"text-orange font-semibold",children:"💡 Порада:"})," ",n.jsx("span",{className:"text-secondary",children:"Тримайте IRB завжди відкритим поруч з редактором — це найшвидший спосіб перевірити будь-яку ідею!"})]})})]})})}function vf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content slide__content--narrow",children:[n.jsx(j,{icon:th,title:"Перший скрипт Ruby",subtitle:"Your first .rb file"}),n.jsxs("div",{className:"step-list",children:[n.jsxs("div",{className:"step-list__item step-list__item--blue fade-in-delay-1",children:[n.jsx("div",{className:"step-list__number step-list__number--blue",children:"1"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("h4",{className:"step-list__title",children:"Створіть файл"}),n.jsx("pre",{className:"font-mono fs-body-sm text-muted",style:{margin:0},children:"touch hello.rb"})]})]}),n.jsxs("div",{className:"step-list__item step-list__item--purple fade-in-delay-2",children:[n.jsx("div",{className:"step-list__number step-list__number--purple",children:"2"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("h4",{className:"step-list__title",children:"Напишіть код"}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:"0.5rem 0",whiteSpace:"pre-wrap",lineHeight:1.7},children:`# hello.rb — наша перша програма на Ruby

puts "Привіт, #{name}! 👋"
puts "Ласкаво просимо у світ Ruby!"
puts "Сьогодні: #{Time.now.strftime('%d.%m.%Y')}"  `}),n.jsxs("p",{className:"text-muted fs-body-sm",style:{margin:"0.5rem 0 0 0"},children:["💡 ",n.jsx("code",{className:"font-mono text-cyan",children:"gets"})," — зчитує введення користувача (з ",n.jsx("code",{className:"font-mono",children:"\\\\n"})," наприкінці)."," ",n.jsx("code",{className:"font-mono text-cyan",children:".chomp"})," — видаляє цей ",n.jsx("code",{className:"font-mono",children:"\\\\n"}),". Для пробілів використовують ",n.jsx("code",{className:"font-mono text-cyan",children:".strip"})]})]})]}),n.jsxs("div",{className:"step-list__item step-list__item--green fade-in-delay-3",children:[n.jsx("div",{className:"step-list__number step-list__number--green",children:"3"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("h4",{className:"step-list__title",children:"Запустіть"}),n.jsx("pre",{className:"font-mono fs-body-sm text-muted",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`ruby hello.rb
# → Як тебе звати?
# → (вводите ім'я)
# → Привіт, Олена! 👋
# → Ласкаво просимо у світ Ruby!
# → Сьогодні: 01.03.2026`})]})]})]})]})})}function Nf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Bl,title:"Типи даних у Ruby",subtitle:"Data Types Overview"}),n.jsxs("p",{className:"text-center text-muted mb-xl fade-in-delay-1",style:{margin:"0 0 1.5rem 0"},children:["Ruby — мова з ",n.jsx("strong",{className:"text-primary",children:"динамічною типізацією"}),". Тип визначається автоматично, не потрібно оголошувати."]}),n.jsxs("div",{className:"slide-grid slide-grid--3col",children:[n.jsx(en,{icon:pa,title:"String",subtitle:"Рядки",description:`Текстові дані в лапках: "hello" або 'hello'. Підтримує інтерполяцію, багато вбудованих методів.`,color:"blue",delay:2}),n.jsx(en,{icon:Ge,title:"Integer & Float",subtitle:"Числа",description:"Цілі числа (42, -7) та дробові (3.14, 2.0). Автоматична конвертація при потребі.",color:"green",delay:3}),n.jsx(en,{icon:Gd,title:"Boolean & nil",subtitle:"Логічні значення",description:"true / false — логічні значення. nil — спеціальне значення «нічого», відсутність об'єкта.",color:"purple",delay:4})]}),n.jsxs("div",{className:"outlined-card outlined-card--yellow mt-xl fade-in-delay-5",children:[n.jsxs("div",{className:"flex items-center gap-sm mb-sm",children:[n.jsx(Vl,{className:"icon-md text-yellow"}),n.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Все є об'єктом!"})]}),n.jsxs("p",{className:"text-secondary",style:{margin:0},children:["В Ruby ",n.jsx("strong",{children:"абсолютно все"})," є об'єктом — навіть числа і nil. Це означає: ",n.jsx("code",{className:"font-mono text-cyan",children:"42.even?"})," → ",n.jsx("code",{className:"font-mono text-green",children:"true"}),","," ",n.jsx("code",{className:"font-mono text-cyan",children:"nil.nil?"})," → ",n.jsx("code",{className:"font-mono text-green",children:"true"}),","," ",n.jsx("code",{className:"font-mono text-cyan",children:'"hello".class'})," → ",n.jsx("code",{className:"font-mono text-green",children:"String"})]})]}),n.jsx("div",{className:"outlined-card outlined-card--cyan mt-base fade-in-delay-6",children:n.jsxs("p",{className:"text-center",style:{margin:0},children:[n.jsx("span",{className:"text-cyan font-semibold",children:"📌 Наступна лекція:"})," ",n.jsxs("span",{className:"text-secondary",children:["Ruby має ще важливі типи — ",n.jsx("code",{className:"font-mono text-cyan",children:"Symbol"})," (",n.jsx("code",{className:"font-mono",children:":name"}),"),"," ",n.jsx("code",{className:"font-mono text-cyan",children:"Array"})," (",n.jsx("code",{className:"font-mono",children:"[1, 2, 3]"}),"),"," ",n.jsx("code",{className:"font-mono text-cyan",children:"Hash"})," (",n.jsx("code",{className:"font-mono",children:"{ key: value }"}),") — розглянемо їх детально у Лекції 2"]})]})})]})})}function bf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content slide__content--narrow",children:[n.jsx(j,{icon:pa,title:"String — рядки",subtitle:"Strings in Ruby"}),n.jsxs("div",{className:"slide-grid slide-grid--2col mb-xl",children:[n.jsxs("div",{className:"outlined-card outlined-card--blue fade-in-delay-1",children:[n.jsx("h3",{className:"font-heading font-bold text-blue mb-sm",style:{margin:"0 0 0.5rem 0"},children:'Подвійні лапки ""'}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`name = "Ruby"
puts "Hello, #{name}!"  # інтерполяція
puts "Tab:\\tNew line:\\n" # спец. символи`}),n.jsx("p",{className:"text-muted fs-body-sm mt-sm",style:{margin:"0.5rem 0 0 0"},children:"✅ Підтримує інтерполяцію та escape-послідовності"})]}),n.jsxs("div",{className:"outlined-card outlined-card--purple fade-in-delay-2",children:[n.jsx("h3",{className:"font-heading font-bold text-purple mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Одинарні лапки ''"}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`puts 'Hello, #{name}!'
# → Hello, #{name}!  (literal)

puts 'No special \\n here'
# → No special \\n here`}),n.jsx("p",{className:"text-muted fs-body-sm mt-sm",style:{margin:"0.5rem 0 0 0"},children:"❌ Без інтерполяції, без escape-послідовностей"})]})]}),n.jsxs("div",{className:"outlined-card outlined-card--green fade-in-delay-3",children:[n.jsx("h3",{className:"font-heading font-bold text-green mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Корисні методи String"}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`"hello".upcase          # → "HELLO"
"HELLO".downcase        # → "hello"
"hello".capitalize      # → "Hello"
"hello world".split     # → ["hello", "world"]
"  hello  ".strip       # → "hello"
"hello".length          # → 5
"hello".include?("ell") # → true
"hello".reverse         # → "olleh"
"hello".chars           # → ["h", "e", "l", "l", "o"]`})]})]})})}function kf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Ge,title:"Числа та Boolean",subtitle:"Numbers & Booleans"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{className:"outlined-card outlined-card--green fade-in-delay-1",children:[n.jsx("h3",{className:"font-heading font-bold text-green mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Integer — цілі числа"}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`42 + 8        # → 50
10 / 3        # → 3  (ціле ділення!)
10 % 3        # → 1  (залишок)
2 ** 10       # → 1024  (степінь)
1_000_000     # → 1000000 (читабельність)

42.even?      # → true
7.odd?        # → true
-5.abs        # → 5
42.to_f       # → 42.0`})]}),n.jsxs("div",{className:"outlined-card outlined-card--blue fade-in-delay-2",children:[n.jsx("h3",{className:"font-heading font-bold text-blue mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Float — дробові числа"}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`10.0 / 3      # → 3.3333...
3.14.round     # → 3
3.14.ceil      # → 4
3.14.floor     # → 3
3.14.round(1)  # → 3.1

# Конвертація
"42".to_i      # → 42
"3.14".to_f    # → 3.14
42.to_s        # → "42"`})]})]}),n.jsxs("div",{className:"slide-grid slide-grid--2col mt-xl",children:[n.jsxs("div",{className:"outlined-card outlined-card--purple fade-in-delay-3",children:[n.jsx("h3",{className:"font-heading font-bold text-purple mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Boolean"}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`true.class    # → TrueClass
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
name ||= "Гість"  # → "Гість" (значення за замовчуванням)`})]}),n.jsxs("div",{className:"outlined-card outlined-card--red fade-in-delay-4",children:[n.jsx("h3",{className:"font-heading font-bold text-red mb-sm",style:{margin:"0 0 0.5rem 0"},children:"⚠️ Truthy / Falsy"}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`# В Ruby тільки ДВА falsy значення:
false   # → falsy
nil     # → falsy

# ВСЕ інше — truthy, навіть:
0       # → truthy! (не як JS/Python)
""      # → truthy!
[]      # → truthy!`})]})]})]})})}function wf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content slide__content--narrow",children:[n.jsx(j,{icon:ht,title:"nil — відсутність значення",subtitle:"nil in Ruby"}),n.jsxs("div",{className:"outlined-card outlined-card--purple mb-xl fade-in-delay-1",children:[n.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[n.jsx(ht,{className:"icon-md text-purple"}),n.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Що таке nil?"})]}),n.jsxs("p",{className:"text-secondary fs-body",style:{margin:0},children:[n.jsx("code",{className:"font-mono text-purple",children:"nil"})," — це об'єкт класу ",n.jsx("code",{className:"font-mono",children:"NilClass"}),". Означає «нічого», «порожньо», «відсутність значення». Це єдиний екземпляр свого класу."]})]}),n.jsxs("div",{className:"outlined-card outlined-card--blue fade-in-delay-2",children:[n.jsx("h3",{className:"font-heading font-bold text-blue mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Приклади роботи з nil"}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`nil.nil?       # → true
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
name&.upcase   # → "RUBY" (повертає результат методу)`})]}),n.jsx("div",{className:"outlined-card outlined-card--orange mt-xl fade-in-delay-3",children:n.jsxs("p",{className:"text-center",style:{margin:0},children:[n.jsx("span",{className:"text-orange font-semibold",children:"💡 Запам'ятайте:"})," ",n.jsxs("span",{className:"text-secondary",children:["В Ruby тільки ",n.jsx("code",{className:"font-mono",children:"false"})," та ",n.jsx("code",{className:"font-mono",children:"nil"}),' є falsy. Усе інше (0, "", []) — truthy!']})]})})]})})}function Sf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:rf,title:"Змінні в Ruby",subtitle:"Variables"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsx(D,{icon:oa,title:"Локальна змінна",subtitle:"local_variable",description:"Починається з маленької букви або _. Видима лише всередині блоку/методу де оголошена.",tooltip:"Приклад: name = 'Ruby', _count = 0, user_age = 25",color:"blue",delay:1}),n.jsx(D,{icon:Gn,title:"Глобальна змінна",subtitle:"$global_variable",description:"Починається з $. Доступна звідусіль. Використовувати обережно — це антипатерн!",tooltip:"Приклад: $debug = true, $LOAD_PATH",color:"red",delay:2}),n.jsx(D,{icon:Pe,title:"Змінна екземпляра",subtitle:"@instance_variable",description:"Починається з @. Належить конкретному об'єкту (instance). Основа ООП в Ruby.",tooltip:"Приклад: @name = 'Ruby', @age = 30",color:"purple",delay:3}),n.jsx(D,{icon:Ss,title:"Змінна класу",subtitle:"@@class_variable",description:"Починається з @@. Спільна для всіх екземплярів класу. Використовується рідко.",tooltip:"Приклад: @@count = 0",color:"orange",delay:4}),n.jsx(D,{icon:ua,title:"Константа",subtitle:"CONSTANT",description:"Починається з великої букви. Ruby попередить, але дозволить змінити (лише warning).",tooltip:"Приклад: MAX_SIZE = 100, PI = 3.14159",color:"green",delay:5})]})]})})}function Rf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content slide__content--narrow",children:[n.jsx(j,{icon:wh,title:"Виведення: puts, print, p",subtitle:"Output methods"}),n.jsxs("div",{className:"step-list",children:[n.jsxs("div",{className:"step-list__item step-list__item--blue fade-in-delay-1",children:[n.jsx("div",{className:"step-list__number step-list__number--blue",children:"1"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("h4",{className:"step-list__title",children:"puts — друк з новим рядком"}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:"0.5rem 0 0 0",whiteSpace:"pre-wrap",lineHeight:1.7},children:`puts "Hello"     # Hello\\n
puts "World"     # World\\n
# Результат:
# Hello
# World`})]})]}),n.jsxs("div",{className:"step-list__item step-list__item--green fade-in-delay-2",children:[n.jsx("div",{className:"step-list__number step-list__number--green",children:"2"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("h4",{className:"step-list__title",children:"print — друк без нового рядка"}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:"0.5rem 0 0 0",whiteSpace:"pre-wrap",lineHeight:1.7},children:`print "Hello "   # Hello ← без \\n
print "World"    # World
# Результат: Hello World`})]})]}),n.jsxs("div",{className:"step-list__item step-list__item--purple fade-in-delay-3",children:[n.jsx("div",{className:"step-list__number step-list__number--purple",children:"3"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("h4",{className:"step-list__title",children:"p — debug-друк (inspect)"}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:"0.5rem 0 0 0",whiteSpace:"pre-wrap",lineHeight:1.7},children:`p "Hello"        # "Hello"  ← з лапками
p 42             # 42
p nil            # nil
p [1, 2, 3]     # [1, 2, 3]
# Показує внутрішнє представлення об'єкта`})]})]}),n.jsxs("div",{className:"step-list__item step-list__item--orange fade-in-delay-4",children:[n.jsx("div",{className:"step-list__number step-list__number--orange",children:"4"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("h4",{className:"step-list__title",children:"pp — pretty print"}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:"0.5rem 0 0 0",whiteSpace:"pre-wrap",lineHeight:1.7},children:`pp({ name: "Ruby", version: 3.3, features: ["YJIT", "Ractor"] })
# { name: "Ruby",
#   version: 3.3,
#   features: ["YJIT", "Ractor"] }`})]})]})]})]})})}function Ef(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content slide__content--narrow",children:[n.jsx(j,{icon:Lp,title:"Інтерполяція рядків",subtitle:"String Interpolation"}),n.jsxs("div",{className:"outlined-card outlined-card--blue mb-xl fade-in-delay-1",children:[n.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[n.jsx(Vl,{className:"icon-md text-blue"}),n.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Що це?"})]}),n.jsxs("p",{className:"text-secondary fs-body",style:{margin:0},children:["Вставка значень змінних та виразів прямо всередину рядка за допомогою ",n.jsx("code",{className:"font-mono text-blue",children:"#{...}"}),". Працює ",n.jsx("strong",{children:"тільки"})," в подвійних лапках!"]})]}),n.jsxs("div",{className:"outlined-card outlined-card--green fade-in-delay-2",children:[n.jsx("h3",{className:"font-heading font-bold text-green mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Приклади"}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`name = "Ruby"
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
TEXT`})]}),n.jsxs("div",{className:"slide-grid slide-grid--2col mt-xl",children:[n.jsx("div",{className:"outlined-card outlined-card--green fade-in-delay-3",children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-green font-semibold",children:"✅ Правильно"}),n.jsx("br",{}),n.jsx("code",{className:"font-mono fs-body-sm text-secondary",children:'"Hello, #{name}!"'})]})}),n.jsx("div",{className:"outlined-card outlined-card--red fade-in-delay-4",children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-red font-semibold",children:"❌ Не працює"}),n.jsx("br",{}),n.jsx("code",{className:"font-mono fs-body-sm text-secondary",children:"'Hello, #{name}!'"})]})})]})]})})}function Cf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Ul,title:"Умовні конструкції",subtitle:"Conditionals: if / elsif / else"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{className:"outlined-card outlined-card--blue fade-in-delay-1",children:[n.jsx("h3",{className:"font-heading font-bold text-blue mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Базовий if / elsif / else"}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`age = 20

if age < 13
  puts "Дитина"
elsif age < 18
  puts "Підліток"
elsif age < 65
  puts "Дорослий"
else
  puts "Пенсіонер"
end
# → Дорослий`})]}),n.jsxs("div",{className:"outlined-card outlined-card--purple fade-in-delay-2",children:[n.jsx("h3",{className:"font-heading font-bold text-purple mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Однорядковий if (modifier)"}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`# Класичний спосіб
if user.admin?
  grant_access
end

# Ruby-стиль (modifier form)
grant_access if user.admin?

# Ще приклади modifier form
puts "Повнолітній" if age >= 18
log_error(msg) if debug_mode?`})]})]}),n.jsxs("div",{className:"outlined-card outlined-card--green mt-xl fade-in-delay-3",children:[n.jsx("h3",{className:"font-heading font-bold text-green mb-sm",style:{margin:"0 0 0.5rem 0"},children:"Оператори порівняння"}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`==    рівність          5 == 5      → true
!=    нерівність        5 != 3      → true
<     менше             3 < 5       → true
>     більше            5 > 3       → true
<=    менше або дорівнює
>=    більше або дорівнює
<=>   spaceship          5 <=> 3 → 1,  3 <=> 5 → -1,  5 <=> 5 → 0,  "a" <=> 1 → nil`})]})]})})}function zf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content slide__content--narrow",children:[n.jsx(j,{icon:Gd,title:"unless та тернарний оператор",subtitle:"Alternative conditionals"}),n.jsxs("div",{className:"outlined-card outlined-card--pink mb-xl fade-in-delay-1",children:[n.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[n.jsx(Un,{className:"icon-md text-pink"}),n.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"unless — «якщо НЕ»"})]}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`# unless = if NOT (зворотній if)

unless user.banned?
  allow_access
end

# Або однорядково:
allow_access unless user.banned?
send_email unless email.nil?

# unless зручний, коли умова негативна
# Це читається природніше, ніж:
# if !user.banned?`})]}),n.jsxs("div",{className:"outlined-card outlined-card--cyan mb-xl fade-in-delay-2",children:[n.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[n.jsx(de,{className:"icon-md text-cyan"}),n.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Тернарний оператор"})]}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`# умова ? значення_якщо_true : значення_якщо_false

status = age >= 18 ? "дорослий" : "неповнолітній"
# → "дорослий"

greeting = user ? "Привіт, #{user.name}" : "Гість"

# Використовуйте для простих виборів
# Для складної логіки — if/elsif/else`})]}),n.jsxs("div",{className:"outlined-card outlined-card--orange fade-in-delay-3",children:[n.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[n.jsx(Vl,{className:"icon-md text-orange"}),n.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"case / when"})]}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.8},children:`grade = 85

result = case grade
         when 90..100 then "Відмінно"
         when 75..89  then "Добре"
         when 60..74  then "Задовільно"
         else              "Незадовільно"
         end

puts result  # → "Добре"`})]})]})})}function Tf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content slide__content--narrow",children:[n.jsx(j,{icon:En,title:"Практика: «Вгадай число»",subtitle:"Hands-on: Guess the Number game"}),n.jsxs("div",{className:"outlined-card outlined-card--gradient-blue-purple mb-xl fade-in-delay-1",children:[n.jsxs("div",{className:"flex items-center gap-sm mb-md",children:[n.jsx(Rs,{className:"icon-md text-blue"}),n.jsx("h3",{className:"font-heading font-bold text-primary",style:{margin:0},children:"Завдання"})]}),n.jsx("p",{className:"text-secondary fs-body",style:{margin:"0 0 0.5rem 0"},children:"Написати консольну гру, де комп'ютер загадує число від 1 до 100, а гравець намагається вгадати. Програма дає підказки «більше» або «менше» після кожної спроби."})]}),n.jsxs("div",{className:"outlined-card outlined-card--green fade-in-delay-2",children:[n.jsx("h3",{className:"font-heading font-bold text-green mb-sm",style:{margin:"0 0 0.5rem 0"},children:"💎 Рішення"}),n.jsx("pre",{className:"font-mono fs-body-sm text-secondary",style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.7},children:`# guess_game.rb — Вгадай число!

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
end`})]}),n.jsxs("div",{className:"slide-grid slide-grid--3col mt-xl",children:[n.jsxs("div",{className:"outlined-card outlined-card--blue fade-in-delay-3",style:{textAlign:"center"},children:[n.jsx("p",{className:"font-semibold text-blue",style:{margin:0},children:"rand(1..100)"}),n.jsx("p",{className:"text-muted fs-body-sm",style:{margin:"0.25rem 0 0 0"},children:"Генерація числа"})]}),n.jsxs("div",{className:"outlined-card outlined-card--purple fade-in-delay-4",style:{textAlign:"center"},children:[n.jsx("p",{className:"font-semibold text-purple",style:{margin:0},children:"gets.chomp.to_i"}),n.jsx("p",{className:"text-muted fs-body-sm",style:{margin:"0.25rem 0 0 0"},children:"Введення + конвертація"})]}),n.jsxs("div",{className:"outlined-card outlined-card--orange fade-in-delay-5",style:{textAlign:"center"},children:[n.jsx("p",{className:"font-semibold text-orange",style:{margin:0},children:"loop do ... break"}),n.jsx("p",{className:"text-muted fs-body-sm",style:{margin:"0.25rem 0 0 0"},children:"Нескінченний цикл"})]})]})]})})}function Pf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:De,title:"Підсумки",subtitle:"Summary"}),n.jsxs("div",{className:"summary-list",children:[n.jsxs("div",{className:"summary-list__item fade-in-delay-1",children:[n.jsx(De,{className:"summary-list__icon"}),n.jsxs("p",{className:"summary-list__text",children:[n.jsx("strong",{children:"Ruby"})," — елегантна мова, створена для щастя програмістів (принцип найменшого здивування)"]})]}),n.jsxs("div",{className:"summary-list__item fade-in-delay-2",children:[n.jsx(De,{className:"summary-list__icon"}),n.jsxs("p",{className:"summary-list__text",children:["Встановлення через ",n.jsx("strong",{children:"rbenv"})," або ",n.jsx("strong",{children:"asdf"}),", перевірка через ",n.jsx("code",{className:"font-mono",children:"ruby --version"})]})]}),n.jsxs("div",{className:"summary-list__item fade-in-delay-3",children:[n.jsx(De,{className:"summary-list__icon"}),n.jsxs("p",{className:"summary-list__text",children:[n.jsx("strong",{children:"IRB"})," — інтерактивна консоль для швидких експериментів з кодом"]})]}),n.jsxs("div",{className:"summary-list__item fade-in-delay-4",children:[n.jsx(De,{className:"summary-list__icon"}),n.jsxs("p",{className:"summary-list__text",children:["Базові типи: ",n.jsx("strong",{children:"String, Integer, Float, Boolean, nil"})," — все є об'єктом!"]})]}),n.jsxs("div",{className:"summary-list__item fade-in-delay-5",children:[n.jsx(De,{className:"summary-list__icon"}),n.jsxs("p",{className:"summary-list__text",children:["Змінні, ",n.jsx("strong",{children:"puts/print/p"}),", інтерполяція рядків через ",n.jsx("code",{className:"font-mono",children:"#{...}"})]})]}),n.jsxs("div",{className:"summary-list__item fade-in-delay-6",children:[n.jsx(De,{className:"summary-list__icon"}),n.jsxs("p",{className:"summary-list__text",children:["Умовні конструкції: ",n.jsx("strong",{children:"if/elsif/else"}),", ",n.jsx("strong",{children:"unless"}),", тернарний оператор, ",n.jsx("strong",{children:"case/when"})]})]})]}),n.jsx("div",{className:"outlined-card outlined-card--gradient-purple-pink mt-xl fade-in-delay-7",children:n.jsxs("p",{className:"text-center fs-lg",style:{margin:0},children:[n.jsx("span",{className:"text-pink font-semibold",children:"Наступна лекція:"})," ",n.jsx("span",{className:"text-primary font-semibold",children:"Масиви, хеші, цикли та ітератори"})]})})]})})}function Lf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content slide__content--narrow",children:[n.jsx(j,{icon:Cp,title:"Джерела",subtitle:"Resources & References"}),n.jsxs("div",{className:"numbered-list",children:[n.jsxs("div",{className:"numbered-list__item fade-in-delay-1",children:[n.jsx("div",{className:"numbered-list__number",children:"1"}),n.jsxs("p",{className:"numbered-list__text",children:[n.jsx("strong",{children:"Ruby офіційний сайт"})," — ",n.jsx("a",{href:"https://www.ruby-lang.org",target:"_blank",rel:"noopener noreferrer",children:"ruby-lang.org"})," — документація, завантаження, новини"]})]}),n.jsxs("div",{className:"numbered-list__item fade-in-delay-2",children:[n.jsx("div",{className:"numbered-list__number",children:"2"}),n.jsxs("p",{className:"numbered-list__text",children:[n.jsx("strong",{children:"Try Ruby"})," — ",n.jsx("a",{href:"https://try.ruby-lang.org",target:"_blank",rel:"noopener noreferrer",children:"try.ruby-lang.org"})," — інтерактивний підручник прямо в браузері"]})]}),n.jsxs("div",{className:"numbered-list__item fade-in-delay-3",children:[n.jsx("div",{className:"numbered-list__number",children:"3"}),n.jsxs("p",{className:"numbered-list__text",children:[n.jsx("strong",{children:"The Well-Grounded Rubyist"})," — David A. Black — найкраща книга для початківців"]})]}),n.jsxs("div",{className:"numbered-list__item fade-in-delay-4",children:[n.jsx("div",{className:"numbered-list__number",children:"4"}),n.jsxs("p",{className:"numbered-list__text",children:[n.jsx("strong",{children:"Ruby Style Guide"})," — ",n.jsx("a",{href:"https://rubystyle.guide",target:"_blank",rel:"noopener noreferrer",children:"rubystyle.guide"})," — конвенції написання коду"]})]}),n.jsxs("div",{className:"numbered-list__item fade-in-delay-5",children:[n.jsx("div",{className:"numbered-list__number",children:"5"}),n.jsxs("p",{className:"numbered-list__text",children:[n.jsx("strong",{children:"RubyDoc"})," — ",n.jsx("a",{href:"https://ruby-doc.org",target:"_blank",rel:"noopener noreferrer",children:"ruby-doc.org"})," — повна документація всіх класів та методів"]})]})]})]})})}function Mf(){return n.jsxs("div",{className:"slide slide--centered slide--gradient-purple-pink",children:[n.jsx("div",{className:"questions-slide__emoji",children:"🤔"}),n.jsx("h2",{className:"questions-slide__title",children:"Питання?"}),n.jsx("p",{className:"questions-slide__subtitle",children:"Запитуйте, обговорюємо!"}),n.jsx("div",{className:"questions-slide__next",children:n.jsxs("p",{children:[n.jsx("strong",{children:"Наступна лекція:"})," Масиви, хеші, цикли та ітератори в Ruby"]})})]})}const Af=["puts","print","p","pp","gets","chomp","raise","require","require_relative","push","pop","shift","unshift","delete","include?","flatten","compact","uniq","map","collect","select","filter","reject","find","detect","find_all","reduce","inject","each","each_with_index","each_with_object","times","upto","downto","loop","sort","sort_by","reverse","length","size","first","last","count","sum","min","max","any?","all?","none?","empty?","keys","values","merge","fetch","dig","key?","value?","to_s","to_i","to_f","to_h","to_a","upcase","downcase","capitalize","strip","split","join","gsub","sub","match","freeze","frozen?","nil?","is_a?","respond_to?","even?","odd?","zero?","abs","round","floor","ceil","call","yield"],Of=["def","end","do","if","elsif","else","unless","while","until","for","in","return","class","module","self","super","new","true","false","nil","and","or","not","then","begin","rescue","ensure","raise","break","next","redo","retry","lambda"];function Df(e){const s=[];let t=0;for(;t<e.length;){if(e[t]==="#"){s.push({type:"comment",text:e.slice(t)});break}const l=e[t]==='"'||e[t]==="'"?e[t]:null;if(l){let r=t+1;for(;r<e.length;){if(e[r]==="\\"){r+=2;continue}if(e[r]===l){r++;break}r++}s.push({type:"string",text:e.slice(t,r)}),t=r;continue}if(e[t]==="{"||e[t]==="}"){s.push({type:"block",text:e[t]}),t++;continue}if(e[t]==="|"){let r=t+1;for(;r<e.length&&e[r]!=="|";)r++;r<e.length&&r++,s.push({type:"block",text:e.slice(t,r)}),t=r;continue}if(/[a-zA-Z_]/.test(e[t])){let r=t;for(;r<e.length&&/[\w?!]/.test(e[r]);)r++;const a=e.slice(t,r);Of.includes(a)?s.push({type:"keyword",text:a}):Af.includes(a)?s.push({type:"method",text:a}):s.push({type:"plain",text:a}),t=r;continue}let i=t+1;for(;i<e.length&&e[i]!=="#"&&e[i]!=='"'&&e[i]!=="'"&&e[i]!=="{"&&e[i]!=="}"&&e[i]!=="|"&&!/[a-zA-Z_]/.test(e[i]);)i++;s.push({type:"plain",text:e.slice(t,i)}),t=i}return s.map((l,i)=>{switch(l.type){case"comment":return n.jsx("span",{className:"code-block__comment",children:l.text},i);case"string":return n.jsx("span",{className:"code-block__string",children:l.text},i);case"keyword":return n.jsx("span",{className:"code-block__keyword",children:l.text},i);case"method":return n.jsx("strong",{style:{fontWeight:700,color:"var(--accent-cyan-text, #22d3ee)"},children:l.text},i);case"block":return n.jsx("strong",{style:{fontWeight:700,color:"var(--accent-orange-text, #fb923c)"},children:l.text},i);default:return n.jsx("span",{children:l.text},i)}})}function g({children:e}){const s=(typeof e=="string"?e:"").split(`
`);return n.jsx("pre",{className:"code-block",children:n.jsx("code",{children:s.map((t,l)=>n.jsxs(Do.Fragment,{children:[Df(t),l<s.length-1&&`
`]},l))})})}function If(){return n.jsxs("div",{className:"slide slide--centered slide--gradient-blue-purple",children:[n.jsx("div",{className:"title-slide__icon-wrapper",children:n.jsx(Pe,{})}),n.jsx("h1",{className:"title-slide__title",children:"Ruby глибше"}),n.jsx("h2",{className:"title-slide__subtitle",children:"Колекції, цикли, методи"}),n.jsx("p",{className:"title-slide__english",children:"Ruby Deep Dive: Collections, Loops & Methods"}),n.jsx("div",{className:"title-slide__badge",children:n.jsx("p",{children:"Лекція 2"})})]})}function Hf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Rs,title:"Мета заняття",subtitle:"Learning Objectives"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsx(D,{icon:ws,title:"Масиви",description:"Навчитися створювати масиви та використовувати потужні методи: push, pop, map, select, reject",color:"blue",delay:1}),n.jsx(D,{icon:Ge,title:"Хеші",description:"Зрозуміти хеші та символи (symbols) — основу конфігурацій і структур даних у Ruby та Rails",color:"purple",delay:2}),n.jsx(D,{icon:Un,title:"Ітератори",description:"Освоїти each, map, select, reduce, times — Ruby-спосіб обходу колекцій без традиційних for-циклів",color:"green",delay:3}),n.jsx(D,{icon:Yn,title:"Методи",description:"Створювати власні методи з параметрами, значеннями за замовчуванням та блоками",color:"orange",delay:4})]})]})})}function Bf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:ws,title:"Масиви (Arrays)",subtitle:"Ordered collections"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary mb-base",style:{marginBottom:"1rem"},children:["Масив — впорядкований список будь-яких об'єктів. Індекс починається з ",n.jsx("span",{className:"text-blue font-semibold",children:"0"}),"."]}),n.jsx(g,{children:`# Список симптомів тварини — масив рядків
symptoms = ["кашель", "підвищена температура", "відмова від їжі"]

# Доступ за індексом
symptoms[0]   # => "кашель"
symptoms[-1]  # => "відмова від їжі" (з кінця!)
symptoms[0..1] # => ["кашель", "підвищена температура"]

# Корисні методи
symptoms.length           # => 3
symptoms.first            # => "кашель"
symptoms.last             # => "відмова від їжі"
symptoms.include?("кашель") # => true`})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-base",style:{marginBottom:"1rem"},children:"Модифікація масивів:"}),n.jsx(g,{children:`symptoms = ["кашель", "температура"]

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
symptoms.reverse`}),n.jsx("div",{className:"outlined-card outlined-card--blue mt-xl fade-in-delay-3",style:{marginTop:"1.5rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-blue font-semibold",children:"💡 Tip:"})," ",n.jsxs("span",{className:"text-secondary",children:["Метод ",n.jsx("code",{children:"<<"})," — найпопулярніший спосіб додати елемент у Ruby. Ви побачите його скрізь!"]})]})})]})]})]})})}function $f(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:de,title:"Магічні методи масивів",subtitle:"Functional Array Methods"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsx("div",{children:n.jsx(g,{children:`animals = [
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
# => ["Амур", "Мурчик"]`})}),n.jsxs("div",{children:[n.jsxs("div",{className:"numbered-list",children:[n.jsxs("div",{className:"numbered-list__item",children:[n.jsx("div",{className:"numbered-list__number",children:"1"}),n.jsxs("p",{className:"numbered-list__text",children:[n.jsx("strong",{className:"text-blue",children:"map"})," — трансформує. Повертає новий масив тієї ж довжини."]})]}),n.jsxs("div",{className:"numbered-list__item",children:[n.jsx("div",{className:"numbered-list__number",children:"2"}),n.jsxs("p",{className:"numbered-list__text",children:[n.jsx("strong",{className:"text-green",children:"select"})," — фільтрує. Залишає лише елементи, де блок повертає ",n.jsx("code",{children:"true"}),"."]})]}),n.jsxs("div",{className:"numbered-list__item",children:[n.jsx("div",{className:"numbered-list__number",children:"3"}),n.jsxs("p",{className:"numbered-list__text",children:[n.jsx("strong",{className:"text-orange",children:"reject"})," — протилежність select. Відкидає елементи з ",n.jsx("code",{children:"true"}),"."]})]}),n.jsxs("div",{className:"numbered-list__item",children:[n.jsx("div",{className:"numbered-list__number",children:"4"}),n.jsxs("p",{className:"numbered-list__text",children:[n.jsx("strong",{className:"text-purple",children:"reduce"})," — акумулює. Перетворює колекцію на одне значення (суму, рядок тощо)."]})]})]}),n.jsxs("div",{className:"outlined-card outlined-card--purple fade-in-delay-4",style:{marginTop:"1.25rem"},children:[n.jsx("p",{style:{margin:"0 0 0.6rem 0"},className:"font-semibold text-purple",children:"🔀 Аліаси — те саме, інша назва:"}),n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"1rem"},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem"},children:"Основний"}),n.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem"},children:"Аліас"}),n.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem"},children:"Примітка"})]})}),n.jsx("tbody",{children:[{main:"map",alias:"collect",note:"однакові повністю"},{main:"select",alias:"filter",note:"filter з Ruby 2.5+"},{main:"reduce",alias:"inject",note:"однакові повністю"},{main:"find",alias:"detect",note:"повертає перший збіг"},{main:"find_all",alias:"select",note:"ще один аліас select"}].map(({main:e,alias:s,note:t})=>n.jsxs("tr",{style:{borderTop:"1px solid var(--border-subtle)"},children:[n.jsx("td",{style:{padding:"0.3rem 0.5rem 0.3rem 0"},children:n.jsx("code",{className:"text-blue",children:e})}),n.jsx("td",{style:{padding:"0.3rem 0.5rem"},children:n.jsx("code",{className:"text-purple",children:s})}),n.jsx("td",{style:{padding:"0.3rem 0",color:"var(--text-muted)",fontSize:"1.1rem"},children:t})]},e))})]})]})]})]})]})})}function Ff(){return n.jsx("div",{className:"slide slide--compact",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Ge,title:"Хеші (Hashes)",subtitle:"Key-Value pairs"}),n.jsx(D,{icon:Ge,title:"Символи vs Рядки (Symbol vs String)",description:":name — це Symbol, не String. Незмінний, зберігається в пам'яті один раз. Саме тому символи є стандартом для ключів хешу: { name: 'Амур' } — це сучасний запис { :name => 'Амур' }.",color:"purple",delay:1}),n.jsxs("div",{className:"slide-grid slide-grid--3col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-muted",style:{fontSize:"0.8rem",fontStyle:"italic",marginBottom:"0.5rem"},children:"📝 Картка тварини — хеш"}),n.jsx(g,{children:`# Кожна тварина — хеш
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
patient.keys          # => [:name, :species, ...]`})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-muted",style:{fontSize:"0.8rem",fontStyle:"italic",marginBottom:"0.5rem"},children:"🗂️ База тварин — хеш хешів"}),n.jsx(g,{children:`# ID як ключ — швидкий доступ за номером
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
animals.keys.length    # => 2`})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-muted",style:{fontSize:"0.8rem",fontStyle:"italic",marginBottom:"0.5rem"},children:"⚡ Корисні методи"}),n.jsx(g,{children:`animals = { 1 => { name: "Амур", ... }, ... }

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
animals.fetch(99, "не знайдено")`})]})]})]})})}function Uf(){return n.jsx("div",{className:"slide slide--compact",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Un,title:"Ітератори та Enumerable",subtitle:"Ruby way of looping"}),n.jsxs("div",{className:"slide-grid slide-grid--3col",style:{marginBottom:"1.25rem"},children:[n.jsx(D,{icon:ws,title:"Array",description:"Підключає Enumerable. Дає map, select, reject, reduce, find, each_with_index і ще 50+ методів.",color:"blue",delay:1}),n.jsx(D,{icon:Ge,title:"Hash",description:"Теж включає Enumerable. Ітерує парами [key, value] — тому map на хеші повертає масив пар.",color:"purple",delay:2}),n.jsx(D,{icon:Un,title:"Range",description:"(1..10) також Enumerable. Тому (1..5).map, (1..100).select, (1..10).reduce працюють одразу.",color:"green",delay:3})]}),n.jsx("div",{className:"outlined-card outlined-card--gradient-blue-purple fade-in-delay-3",style:{marginBottom:"1.25rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-blue font-semibold",children:"📦 Модуль Enumerable:"})," ",n.jsxs("span",{className:"text-secondary",children:["Це mixin, який Ruby підключає до будь-якої колекції що реалізує метод ",n.jsx("code",{children:"each"}),". Саме він дає всім колекціям єдиний набір ітераторів — ",n.jsx("code",{children:"map"}),", ",n.jsx("code",{children:"select"}),", ",n.jsx("code",{children:"reduce"})," і ще десятки методів. У Лекції 3 ми побачимо як підключити його до власного класу."]})]})}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"⚡ Enumerable у вет.клініці"}),n.jsx(g,{children:`animals = { 1 => { name: "Амур", species: "кіт",
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
(born_year..Date.today.year).count - 1  # => 6`})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"🔁 Цикли (коли Enumerable не підходить)"}),n.jsx(g,{children:`# times — повторити N разів
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
end`}),n.jsx("div",{className:"outlined-card outlined-card--green",style:{marginTop:"1rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-green font-semibold",children:"✅ Правило:"})," ",n.jsxs("span",{className:"text-secondary",children:["Є колекція → використовуй ",n.jsx("code",{children:"Enumerable"})," (",n.jsx("code",{children:"each"}),", ",n.jsx("code",{children:"map"}),", ",n.jsx("code",{children:"select"}),"). Потрібно повторити N разів → ",n.jsx("code",{children:"times"}),". Умовний цикл → ",n.jsx("code",{children:"while/loop"}),"."]})]})})]})]})]})})}function Vf(){return n.jsx("div",{className:"slide slide--compact",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Rn,title:"Блоки (Blocks)",subtitle:"Anonymous code chunks"}),n.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-1",style:{marginBottom:"1.25rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-blue font-semibold",children:"📌 Що таке блок:"})," ",n.jsx("span",{className:"text-secondary",children:"Блок — це анонімний шматок коду, який передається в метод як аргумент і виконується всередині нього. Блок не є об'єктом і не може бути збережений у змінну — для цього є Proc і Lambda (наступний слайд)."})]})}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"📝 Два синтаксиси блоків"}),n.jsx(g,{children:`# do...end — для багаторядкового блоку
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
# => ["Амур", "Кеша"] — тільки вакциновані`})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"🔧 Власні методи з блоком — yield"}),n.jsx(g,{children:`# yield — викликає переданий блок
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
# 1. Барс (кіт)`}),n.jsxs("div",{className:"outlined-card outlined-card--purple",style:{marginTop:"1rem"},children:[n.jsxs("p",{style:{margin:"0 0 0.5rem 0"},className:"font-semibold text-purple",children:["📎 Іменований блок — ",n.jsx("code",{children:"&block"})]}),n.jsxs("p",{className:"text-secondary",style:{margin:"0 0 0.75rem 0",fontSize:"0.9rem"},children:["Якщо потрібно зберегти блок або передати його далі — використовують ",n.jsx("code",{children:"&block"})," в параметрах. Блок стає об'єктом Proc і викликається через ",n.jsx("code",{children:".call"})," замість ",n.jsx("code",{children:"yield"}),":"]}),n.jsx(g,{children:`# &block — блок як об'єкт, можна передати далі
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
# yield достатньо і працює швидше`})]})]})]})]})})}function Wf(){return n.jsx("div",{className:"slide slide--compact",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:de,title:"Proc і Lambda",subtitle:"Saved blocks & differences"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",style:{marginBottom:"1.25rem"},children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"📦 Proc — збережений блок"}),n.jsx(g,{children:`# Proc — збережений блок, можна перевикористати
is_vaccinated = Proc.new { |_, p| p[:vaccinated] }
is_cat        = Proc.new { |_, p| p[:species] == "кіт" }

# Передаємо в select через &
animals.select(&is_vaccinated)
animals.select(&is_cat)

# Proc м'який — зайві аргументи ігнорує
log = Proc.new { |msg, level| puts "[#{level}] #{msg}" }
log.call("Тварину додано", "INFO")  # => [INFO] Тварину додано
log.call("Помилка")                  # => [] Помилка (level = nil)`})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"⚡ Lambda — строгіший Proc"}),n.jsx(g,{children:`# Lambda для перевірки прострочення вакцинації
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
animals.select { |_, p| filters[:unvaccinated].call(p) }`})]})]}),n.jsxs("div",{className:"outlined-card outlined-card--green fade-in-delay-3",style:{marginBottom:"1rem"},children:[n.jsxs("p",{style:{margin:"0 0 0.5rem 0"},className:"font-semibold text-green",children:["🔀 Symbol to Proc — ",n.jsx("code",{children:"&:method_name"})]}),n.jsxs("p",{className:"text-secondary",style:{margin:"0 0 0.75rem 0"},children:["Коли пишемо ",n.jsx("code",{children:"&:upcase"})," — Ruby перетворює символ ",n.jsx("code",{children:":upcase"})," на Proc через метод ",n.jsx("code",{children:"to_proc"}),". Тобто ",n.jsx("code",{children:"&:upcase"})," — це скорочення для ",n.jsxs("code",{children:["Proc.new ","{ |x| x.upcase }"]}),". Працює лише з методами без аргументів."]}),n.jsx(g,{children:`# Отримати імена всіх тварин
animals.values.map { |p| p[:name] }
animals.values.map(&:to_s)  # якщо метод без аргументів

# Перетворення ключів після JSON (рядки → символи)
data = { "name" => "Амур", "species" => "кіт" }
data.transform_keys(&:to_sym)
# => { name: "Амур", species: "кіт" }

# Фільтрація з predicate-методами
[1, -2, 3, -4].select(&:positive?)  # => [1, 3]
["Амур", "", "Рекс"].reject(&:empty?)  # => ["Амур", "Рекс"]`})]}),n.jsxs("div",{className:"outlined-card outlined-card--purple fade-in-delay-4",children:[n.jsx("p",{style:{margin:"0 0 0.6rem 0"},className:"font-semibold text-purple",children:"⚖️ Proc vs Lambda — ключові відмінності:"}),n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"1rem"},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem",width:"30%"},children:"Поведінка"}),n.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem"},children:"Proc"}),n.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem"},children:"Lambda"})]})}),n.jsx("tbody",{children:[{aspect:"Аргументи",proc:"ігнорує зайві / nil для відсутніх",lambda:"суворо перевіряє кількість"},{aspect:"return",proc:"повертає з методу що викликав",lambda:"повертає тільки з себе"},{aspect:"Синтаксис",proc:"Proc.new { }",lambda:"lambda { } або ->( ) { }"},{aspect:"Використання",proc:"гнучкі фільтри, callbacks",lambda:"валідація, строгі перевірки"}].map(({aspect:e,proc:s,lambda:t})=>n.jsxs("tr",{style:{borderTop:"1px solid var(--border-subtle)"},children:[n.jsx("td",{style:{padding:"0.3rem 0.5rem 0.3rem 0",color:"var(--text-primary)",fontWeight:600},children:e}),n.jsx("td",{style:{padding:"0.3rem 0.5rem",color:"var(--text-secondary)"},children:s}),n.jsx("td",{style:{padding:"0.3rem 0",color:"var(--text-secondary)"},children:t})]},e))})]})]})]})})}function Qf(){return n.jsx("div",{className:"slide slide--compact",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Pe,title:"Деструктуризація",subtitle:"Destructuring assignment"}),n.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-1",style:{marginBottom:"1.25rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-blue font-semibold",children:"📌 Що це таке:"})," ",n.jsx("span",{className:"text-secondary",children:"Деструктуризація — це спосіб розпакувати масив одразу в кілька змінних за одне присвоєння. Ruby дозволяє це робити як у звичайному коді, так і в параметрах блоків та методів."})]})}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"📝 Базова розпаковка"}),n.jsx(g,{children:`# Паралельне присвоєння
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
species # => "кіт"`})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"🔧 Де це зустрічається в Ruby та Rails"}),n.jsx(g,{children:`# В блоках — розпаковка пари хешу
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
end`}),n.jsx("div",{className:"outlined-card outlined-card--green",style:{marginTop:"1rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-green font-semibold",children:"💡 Зв'язок з блоками:"})," ",n.jsxs("span",{className:"text-secondary",children:["Дужки в параметрах блоку ",n.jsx("code",{children:"|(id, p)|"})," — це та сама деструктуризація. Ruby бачить що елемент хешу є парою ",n.jsx("code",{children:"[key, value]"})," і розпаковує її в дві змінні автоматично."]})]})})]})]})]})})}function Gf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Yn,title:"Методи (Methods)",subtitle:"def keyword & parameters"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsx("div",{children:n.jsx(g,{children:`# Базовий метод — додати тварину
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
find_animals(animals, species: "кіт", vaccinated: false)`})}),n.jsxs("div",{children:[n.jsx(g,{children:`# Неявний return — останній вираз
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

add_symptoms(animals[1], "кашель", "апатія", "відмова від їжі")`}),n.jsx("div",{className:"outlined-card outlined-card--orange fade-in-delay-3",style:{marginTop:"1rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-orange font-semibold",children:"📌 Конвенція Ruby:"})," ",n.jsxs("span",{className:"text-secondary",children:[n.jsx("code",{children:"?"})," — повертає boolean. ",n.jsx("code",{children:"!"})," — змінює об'єкт на місці або викидає виняток замість повернення nil."]})]})})]})]})]})})}function Yf(){const[e,s]=I.useState("arrays"),t=[{id:"arrays",label:"Масиви",icon:ws},{id:"hashes",label:"Хеші",icon:Ge},{id:"methods",label:"Методи",icon:Yn}],i={arrays:{title:"Масиви в дії",code:`# Ланцюжок методів — Ruby-стиль
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
4`}}[e];return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:da,title:"Приклади коду",subtitle:"Interactive Code Examples"}),n.jsx("div",{style:{display:"flex",gap:"0.75rem",marginBottom:"1.5rem"},children:t.map(({id:r,label:a,icon:o})=>n.jsxs("button",{onClick:()=>s(r),className:`header__toggle ${e===r?"header__toggle--active":"header__toggle--inactive"}`,style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[n.jsx(o,{style:{width:"1rem",height:"1rem"}}),a]},r))}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-muted",style:{fontSize:"0.8rem",marginBottom:"0.5rem",fontStyle:"italic"},children:i.title}),n.jsx(g,{children:i.code})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-muted",style:{fontSize:"0.8rem",marginBottom:"0.5rem",fontStyle:"italic"},children:"Результат виконання:"}),n.jsx("pre",{className:"code-block",style:{color:"var(--accent-green-text, #4ade80)"},children:i.output}),n.jsx("div",{className:"outlined-card outlined-card--blue",style:{marginTop:"1.5rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-blue font-semibold",children:"💻 Спробуй сам:"})," ",n.jsx("span",{className:"text-secondary",children:"Відкрий IRB або repl.it і запусти ці приклади. Модифікуй їх — що станеться, якщо змінити умову фільтрації?"})]})})]})]})]})})}function qf(){return n.jsx("div",{className:"slide slide--compact",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Yn,title:"Збереження у JSON",subtitle:"Serialization & key nuances"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"💾 Збереження та завантаження"}),n.jsx(g,{children:`require 'json'

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
loaded = load_from_json("clinic.json")`})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"⚠️ Нюанс: що JSON робить з ключами"}),n.jsx(g,{children:`# Вихідний хеш Ruby — символьні ключі
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
loaded[:name]    # => "Амур"  ✓`}),n.jsx("div",{className:"outlined-card outlined-card--orange",style:{marginTop:"1rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-orange font-semibold",children:"⚠️ Запам'ятай:"})," ",n.jsxs("span",{className:"text-secondary",children:["JSON — це текстовий формат для обміну даними між різними мовами. Він не знає про Ruby-символи, тому завжди конвертує ключі в рядки. Після ",n.jsx("code",{children:"JSON.parse"})," — завжди виконуй ",n.jsx("code",{children:"transform_keys(&:to_sym)"}),"."]})]})})]})]})]})})}function Kf(){return n.jsx("div",{className:"slide slide--compact",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Rn,title:"Збереження у YAML",subtitle:"Ruby-native serialization"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",fontSize:"0.8rem",fontStyle:"italic"},children:"💾 Збереження та завантаження"}),n.jsx(g,{children:`require 'yaml'

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
loaded[1][:name]  # => "Амур" ✓ одразу символи`}),n.jsx("p",{className:"text-muted",style:{marginBottom:"0.5rem",marginTop:"1rem",fontSize:"0.8rem",fontStyle:"italic"},children:"📄 Як виглядає YAML-файл:"}),n.jsx(g,{children:`---
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
  :vaccinated: false`})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"outlined-card outlined-card--green",style:{marginBottom:"1rem"},children:[n.jsx("p",{style:{margin:"0 0 0.5rem 0"},className:"font-semibold text-green",children:"✅ Чому YAML — природний формат для Ruby"}),n.jsxs("p",{className:"text-secondary",style:{margin:0},children:["YAML розроблявся з урахуванням Ruby. Він зберігає ",n.jsx("strong",{children:"символи"})," як ",n.jsx("code",{children:":name"}),", розуміє Ruby-типи (",n.jsx("code",{children:"true"}),"/",n.jsx("code",{children:"false"}),"/",n.jsx("code",{children:"nil"}),"), масиви та вкладені хеші. Після ",n.jsx("code",{children:"YAML.load_file"})," отримуєте точно той самий Ruby-об'єкт — без жодних перетворень."]})]}),n.jsxs("div",{className:"outlined-card outlined-card--purple",style:{marginBottom:"1rem"},children:[n.jsx("p",{style:{margin:"0 0 0.6rem 0"},className:"font-semibold text-purple",children:"⚖️ JSON vs YAML — коли що використовувати:"}),n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"1rem"},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem"}}),n.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem"},children:"JSON"}),n.jsx("th",{style:{textAlign:"left",color:"var(--text-muted)",fontWeight:600,paddingBottom:"0.3rem"},children:"YAML"})]})}),n.jsx("tbody",{children:[{aspect:"Ключі",json:"завжди рядки",yaml:"символи збережені"},{aspect:"Читабельність",json:"добра",yaml:"відмінна"},{aspect:"Інші мови",json:"✓ універсальний",yaml:"обмежено"},{aspect:"Rails config",json:"рідко",yaml:"стандарт (database.yml)"},{aspect:"API відповідь",json:"✓ завжди",yaml:"✗ не підходить"}].map(({aspect:e,json:s,yaml:t})=>n.jsxs("tr",{style:{borderTop:"1px solid var(--border-subtle)"},children:[n.jsx("td",{style:{padding:"0.3rem 0.5rem 0.3rem 0",fontWeight:600,color:"var(--text-primary)"},children:e}),n.jsx("td",{style:{padding:"0.3rem 0.5rem",color:"var(--text-secondary)"},children:s}),n.jsx("td",{style:{padding:"0.3rem 0",color:"var(--text-secondary)"},children:t})]},e))})]})]}),n.jsx("div",{className:"outlined-card outlined-card--blue",children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-blue font-semibold",children:"🚀 Rails:"})," ",n.jsxs("span",{className:"text-secondary",children:["У Rails YAML використовується скрізь — ",n.jsx("code",{children:"database.yml"}),", ",n.jsx("code",{children:"config/locales/*.yml"}),", ",n.jsx("code",{children:"credentials.yml.enc"}),". JSON — для API-відповідей і передачі даних між сервісами."]})]})})]})]})]})})}function Jf(){return n.jsx("div",{className:"slide slide--compact",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Vn,title:"Практика: Вет. клініка",subtitle:"Veterinary Clinic CLI App"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:"Консольна система обліку тварин."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.6rem",marginBottom:"1rem"},children:[{icon:ws,title:"list_animals",desc:"Відобразити всіх — each з форматуванням",color:"purple"},{icon:Bp,title:"add_animal",desc:"Додати тварину — хеш з усіма полями, auto-ID",color:"green"},{icon:Hh,title:"find_by_name / filter_by_species",desc:"Пошук через select із блоком",color:"blue"},{icon:Yn,title:"edit_animal",desc:"Оновити дані — merge! з новими полями",color:"orange"},{icon:Zh,title:"delete_animal",desc:"Видалити тварину за ID з перевіркою",color:"red"},{icon:de,title:"overdue_vaccination?",desc:"Lambda-перевірка прострочення вакцинації",color:"yellow"},{icon:Rn,title:"save / load",desc:"JSON + YAML збереження з обробкою помилок",color:"cyan"}].map(({icon:e,title:s,desc:t,color:l},i)=>n.jsxs("div",{className:`info-card info-card--${l}`,style:{padding:"0.5rem 0.75rem",display:"flex",alignItems:"flex-start",gap:"0.6rem"},children:[n.jsx(e,{style:{width:"1rem",height:"1rem",flexShrink:0,marginTop:"0.15rem"}}),n.jsxs("div",{children:[n.jsx("code",{style:{fontSize:"0.85rem",fontWeight:700},children:s}),n.jsx("p",{className:"info-card__text",style:{margin:0},children:t})]})]},i))})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-muted",style:{fontSize:"0.8rem",marginBottom:"0.5rem",fontStyle:"italic"},children:"🎯 Головний цикл програми:"}),n.jsx(g,{children:`require 'date'
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
end`})]})]})]})})}function Xf(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Hl,title:"Підсумок лекції",subtitle:"Key Takeaways"}),n.jsxs("div",{className:"slide-grid slide-grid--3col",children:[n.jsx(en,{icon:ws,title:"Масиви + Хеші",description:"Основні структури даних. map/select/reject/reduce — функціональний стиль Ruby. Символи як ключі хешів.",color:"blue",delay:1}),n.jsx(en,{icon:Un,title:"Enumerable + Блоки",description:"Модуль Enumerable дає ітератори всім колекціям. Блоки, Proc, Lambda — способи передати логіку в метод.",color:"purple",delay:2}),n.jsx(en,{icon:Rn,title:"JSON + YAML",description:"JSON — для API та обміну між мовами, але губить символи. YAML — нативний формат Ruby, зберігає всі типи.",color:"green",delay:3})]}),n.jsx("div",{className:"outlined-card outlined-card--gradient-blue-purple fade-in-delay-4",style:{marginTop:"1.5rem"},children:n.jsxs("p",{className:"text-center",style:{margin:0},children:[n.jsx("span",{className:"text-blue font-semibold",children:"🚀 Наступна лекція:"})," ",n.jsxs("span",{className:"text-secondary",children:["ООП у Ruby — класи, модулі, наслідування. Перетворимо нашу вет.клініку на об'єктно-орієнтовану систему з класами ",n.jsx("code",{children:"Animal"}),", ",n.jsx("code",{children:"Clinic"}),", ",n.jsx("code",{children:"Vaccination"}),"."]})]})}),n.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"1.5rem"},children:n.jsxs("div",{className:"outlined-card outlined-card--green",style:{maxWidth:"600px",width:"100%"},children:[n.jsx("p",{style:{margin:"0 0 0.5rem 0"},className:"font-semibold text-green",children:"✅ Ти вмієш:"}),n.jsxs("ul",{style:{margin:0,paddingLeft:"1.25rem",color:"var(--text-secondary)",lineHeight:1.8},children:[n.jsx("li",{children:"Створювати масиви і хеші та маніпулювати ними"}),n.jsx("li",{children:"Застосовувати ітератори Enumerable замість циклів"}),n.jsx("li",{children:"Писати методи з параметрами, блоками та yield"}),n.jsx("li",{children:"Зберігати та завантажувати дані з JSON і YAML"}),n.jsx("li",{children:"Розрізняти Proc і Lambda та знати &:symbol"})]})]})})]})})}const Zf=[{id:0,title:"Титульний слайд",component:If},{id:1,title:"Мета заняття",component:Hf},{id:2,title:"Масиви",component:Bf},{id:"2_1",title:"Методи масивів",component:$f},{id:3,title:"Хеші",component:Ff},{id:4,title:"Ітератори",component:Uf},{id:"4_1",title:"Деструктуризація",component:Qf},{id:5,title:"Методи",component:Gf},{id:6,title:"Блоки",component:Vf},{id:"6_1",title:"Proc і Lambda",component:Wf},{id:7,title:"Збереження JSON",component:qf},{id:"7_1",title:"Збереження YAML",component:Kf},{id:8,title:"Приклади коду",component:Yf},{id:9,title:"Практика",component:Jf},{id:10,title:"Підсумок",component:Xf}];function ex(){return n.jsx(vt,{slides:Zf})}function nx(){return n.jsxs("div",{className:"slide slide--centered slide--gradient-blue-purple",children:[n.jsx("div",{className:"title-slide__icon-wrapper",children:n.jsx(ht,{})}),n.jsx("h1",{className:"title-slide__title",children:"ООП у Ruby"}),n.jsx("h2",{className:"title-slide__subtitle",children:"Класи, модулі, наслідування"}),n.jsx("p",{className:"title-slide__english",children:"Object-Oriented Programming in Ruby"}),n.jsx("div",{className:"title-slide__badge",children:n.jsx("p",{children:"Лекція 3"})})]})}function sx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Rs,title:"Мета заняття",subtitle:"Learning Objectives"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsx(D,{icon:Rn,title:"Класи та об'єкти",description:"initialize, @змінні, attr_accessor, методи екземпляра та класові методи, @@змінні класу",color:"blue",delay:1}),n.jsx(D,{icon:Pe,title:"Наслідування",description:"Ієрархія класів, super, перевизначення методів, private/protected/public",color:"purple",delay:2}),n.jsx(D,{icon:Yn,title:"Модулі та mixins",description:"include / extend / prepend, ancestors chain, Enumerable, Comparable",color:"green",delay:3}),n.jsx(D,{icon:de,title:"Метапрограмування",description:"freeze, respond_to?, method_missing, define_method, send — Ruby як жива мова",color:"orange",delay:4})]})]})})}function tx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Rn,title:"initialize та @змінні екземпляра",subtitle:"Constructor & instance variables"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"1rem"},children:[n.jsx("code",{children:"initialize"})," — викликається автоматично при"," ",n.jsx("span",{className:"text-blue font-semibold",children:"Animal.new(...)"}),"."," "]}),n.jsx(g,{children:`class Animal
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
# @name у luna = "Луна"`})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary",style:{marginBottom:"1rem"},children:"Різниця між типами змінних:"}),n.jsx(g,{children:`class Demo
  def initialize(value)
    local_var = "я помру після методу"
    @instance_var = value   # живе в об'єкті
  end

  def show
    # local_var тут НЕ доступна — вже мертва
    puts @instance_var      # доступна!
  end
end`}),n.jsx("div",{className:"outlined-card outlined-card--green fade-in-delay-2",style:{marginTop:"1rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-green font-semibold",children:"✅ Ruby vs Python:"})," ",n.jsxs("span",{className:"text-secondary",children:["В Python ",n.jsx("code",{children:"def __init__(self, items=[])"})," — небезпечно: один список на всі об'єкти. В Ruby ",n.jsx("code",{children:"symptoms: []"})," створює"," ",n.jsx("strong",{children:"новий масив"})," при кожному виклику — безпечно."]})]})}),n.jsxs("div",{className:"outlined-card outlined-card--blue fade-in-delay-3",style:{marginTop:"1rem"},children:[n.jsxs("p",{style:{margin:"0 0 0.5rem"},children:[n.jsx("span",{className:"text-blue font-semibold",children:"📌 Правило:"})," ",n.jsxs("span",{className:"text-secondary",children:[n.jsx("code",{children:"@змінна"})," живе в об'єкті — доступна в будь-якому методі екземпляра, але ",n.jsx("strong",{children:"не"})," ззовні без геттера. Технічно можна обійти:"]})]}),n.jsx(g,{children:`rex.instance_variable_get(:@name)  # => "Рекс"
rex.instance_variable_set(:@name, "Бобік")
# Працює, але порушує інкапсуляцію.
# Використовується хіба що в тестах.`}),n.jsx("p",{style:{margin:"0.5rem 0 0"},children:n.jsx("span",{className:"text-secondary",children:"Саме тому і існують геттери — щоб давати контрольований доступ."})})]})]})]})]})})}function lx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:$l,title:"attr_accessor / reader / writer",subtitle:"Getters, Setters & Class-level methods"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[n.jsx("code",{children:"@змінні"})," — приватні за природою. Без геттера ззовні не дістатись:"]}),n.jsx(g,{children:`class Animal
  def initialize(name:)
    @name = name
  end
end

rex = Animal.new(name: "Рекс")
rex.name        # ❌ NoMethodError
rex.@name       # ❌ SyntaxError
rex.instance_variable_get(:@name)  # 😬 є, але некрасиво`}),n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem",marginTop:"1rem"},children:[n.jsx("code",{children:"attr_accessor, attr_reader, attr_writer"})," — це ",n.jsx("span",{className:"text-blue font-semibold",children:"методи класу"}),", які генерують певний код автоматично:"]}),n.jsx(g,{children:`# attr_accessor :name  генерує:
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
end`})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:"Коли потрібно якась логіка при наданні значення змінній інстансу пишемо сеттер вручну:"}),n.jsx(g,{children:`class Animal
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
rex.weight = -1   # ❌ ArgumentError`}),n.jsxs("div",{className:"outlined-card outlined-card--cyan fade-in-delay-3",style:{marginTop:"1rem"},children:[n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-cyan font-semibold",children:"🔗 Зв'язок з Rails:"})," ",n.jsxs("span",{className:"text-secondary",children:[n.jsx("code",{children:"attr_accessor"}),", ",n.jsx("code",{children:"validates"}),", ",n.jsx("code",{children:"belongs_to"}),","," ",n.jsx("code",{children:"has_many"})," — всі це методи класу (іноді їх неформально називають макросами) генерують код. Саме тому в Rails-моделі можна писати декларативно:"]})]}),n.jsx(g,{children:`class User < ApplicationRecord
  has_many :posts        # генерує методи posts, posts=...
  validates :name, presence: true  # генерує валідацію
end`})]})]})]})]})})}function ix(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Yn,title:"Методи екземпляра та self",subtitle:"Instance methods & self keyword"}),n.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-1",style:{marginBottom:"1.5rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-blue font-semibold",children:"self"})," ",n.jsxs("span",{className:"text-secondary",children:["— це посилання на ",n.jsx("strong",{children:"поточний об'єкт"}),", тобто той екземпляр, на якому викликається метод. Якщо пишемо ",n.jsx("code",{children:"rex.update_weight(27)"})," — всередині методу ",n.jsx("code",{children:"self"})," це ",n.jsx("code",{children:"rex"}),". Якщо ",n.jsx("code",{children:"luna.update_weight(4)"})," — ",n.jsx("code",{children:"self"})," це ",n.jsx("code",{children:"luna"}),"."]})]})}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:["Звичайні методи — мають доступ до всіх ",n.jsx("code",{children:"@змінних"}),":"]}),n.jsx(g,{children:`class Animal
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
rex.vaccination_overdue?  # => false`})]}),n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:["Коли ",n.jsx("code",{children:"self"})," ",n.jsx("strong",{children:"обов'язковий"}),":"]}),n.jsx(g,{children:`class Animal
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
# => "Рекс II, 27 кг"`}),n.jsx("div",{className:"outlined-card outlined-card--orange fade-in-delay-3",style:{marginTop:"1rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-orange font-semibold",children:"⚠️ Головна пастка:"})," ",n.jsxs("span",{className:"text-secondary",children:[n.jsx("code",{children:"weight = value"})," всередині методу — це ",n.jsx("strong",{children:"нова локальна змінна"}),", не сеттер. Якщо є сеттер з валідацією — він не викличеться. Завжди пишіть ",n.jsx("code",{children:"self.weight = value"}),"."]})]})})]})]})]})})}function rx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Ud,title:"public / private / protected",subtitle:"Access modifiers"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:["За замовчуванням всі методи — ",n.jsx("span",{className:"text-green font-semibold",children:"public"}),". Модифікатори — це не ключові слова, а"," ",n.jsx("span",{className:"text-blue font-semibold",children:"методи класу"})," які змінюють видимість."]}),n.jsx(g,{children:`class Animal
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
# self.check_vaccines     # ❌ теж NoMethodError — навіть self. не можна!`}),n.jsxs("p",{className:"text-secondary",style:{margin:"1rem 0 0.75rem"},children:[n.jsx("span",{className:"text-purple font-semibold",children:"protected"})," — рідко, але корисно коли треба порівняти ",n.jsx("strong",{children:"два об'єкти одного класу"}),":"]}),n.jsx(g,{children:`class Animal
  def heavier_than?(other)
    weight > other.weight  # other — теж Animal,
  end                      # тому доступ до protected дозволений

  protected
  attr_reader :weight      # ззовні — ні, між собою — так
end

rex.heavier_than?(luna)  # ✅ — обидва Animal
rex.weight               # ❌ NoMethodError ззовні`})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"outlined-card outlined-card--purple fade-in-delay-1",style:{marginBottom:"1rem"},children:[n.jsx("p",{style:{margin:"0 0 0.5rem"},children:n.jsx("span",{className:"text-purple font-semibold",children:"📊 Ключова різниця:"})}),n.jsxs("table",{style:{width:"100%",fontSize:"0.88rem",color:"var(--text-secondary)",borderCollapse:"collapse"},children:[n.jsx("thead",{children:n.jsxs("tr",{style:{borderBottom:"1px solid var(--bg-tertiary)"},children:[n.jsx("th",{style:{padding:"0.3rem 0.5rem",textAlign:"left"},children:"Модифікатор"}),n.jsx("th",{style:{padding:"0.3rem 0.5rem",textAlign:"center"},children:"Ззовні"}),n.jsx("th",{style:{padding:"0.3rem 0.5rem",textAlign:"center"},children:"self."}),n.jsx("th",{style:{padding:"0.3rem 0.5rem",textAlign:"center"},children:"other. (той самий клас)"})]})}),n.jsx("tbody",{children:[["public","✅","✅","✅"],["protected","❌","✅","✅"],["private","❌","❌","❌"]].map(([e,s,t,l],i)=>n.jsxs("tr",{style:{borderBottom:"1px solid var(--bg-tertiary)"},children:[n.jsx("td",{style:{padding:"0.3rem 0.5rem"},children:n.jsx("code",{style:{color:i===0?"var(--accent-green-text)":i===1?"var(--accent-purple-text)":"var(--accent-red-text)"},children:e})}),n.jsx("td",{style:{padding:"0.3rem 0.5rem",textAlign:"center"},children:s}),n.jsx("td",{style:{padding:"0.3rem 0.5rem",textAlign:"center"},children:t}),n.jsx("td",{style:{padding:"0.3rem 0.5rem",textAlign:"center"},children:l})]},i))})]})]}),n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[n.jsx("span",{className:"text-orange font-semibold",children:"protected"})," у Rails — зустрічається рідко, але є класичне місце — ",n.jsx("code",{children:"ApplicationController"}),":"]}),n.jsx(g,{children:`class ApplicationController < ActionController::Base
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
end`}),n.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-4",style:{marginTop:"1rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-blue font-semibold",children:"💡 Правило на практиці:"})," ",n.jsxs("span",{className:"text-secondary",children:["Якщо метод — не частина публічного API класу, робіть ",n.jsx("code",{children:"private"}),"."," ",n.jsx("code",{children:"protected"})," — коли треба доступ між екземплярами того ж класу (порівняння, серіалізація). В Rails це трапляється, але рідко."]})]})})]})]})]})})}function ax(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Pe,title:"Класові методи та @@змінні класу",subtitle:"Class methods & class variables"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:["Методи екземпляра викликаються на об'єкті (",n.jsx("code",{children:"rex.age"}),"). Класові методи — на самому ",n.jsx("strong",{children:"класі"})," (",n.jsx("code",{children:"Animal.from_h(...)"}),"). Позначаються ",n.jsx("span",{className:"text-blue font-semibold",children:"self."})," перед назвою:"]}),n.jsx(g,{children:`class Animal
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
                  species: "Кіт", weight: 4)`}),n.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-2",style:{marginTop:"1rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-blue font-semibold",children:"💡 Типові застосування:"})," ",n.jsxs("span",{className:"text-secondary",children:["фабричні методи (",n.jsx("code",{children:"from_h"}),", ",n.jsx("code",{children:"from_json"}),"), пошук (",n.jsx("code",{children:"Animal.find_by_name"}),"), утиліти які не потребують екземпляра. В Rails — ",n.jsx("code",{children:"User.find"}),", ",n.jsx("code",{children:"Post.where"}),"."]})]})})]}),n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[n.jsx("span",{className:"text-purple font-semibold",children:"@@змінна"})," — належить"," ",n.jsx("strong",{children:"класу"}),", спільна для всіх екземплярів. Корисна коли треба зберігати щось на рівні всього класу:"]}),n.jsx(g,{children:`class Animal
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

Animal.known_species  # => ["Собака", "Кіт"]`}),n.jsxs("div",{className:"outlined-card outlined-card--orange fade-in-delay-3",style:{marginTop:"1rem"},children:[n.jsxs("p",{style:{margin:"0 0 0.5rem"},children:[n.jsx("span",{className:"text-orange font-semibold",children:"⚠️ Обережно з @@:"})," ",n.jsxs("span",{className:"text-secondary",children:["Ділиться між класом і ",n.jsx("strong",{children:"всіма підкласами"})," — ",n.jsx("code",{children:"Dog.new"})," теж додасть вид до списку. В сучасному Ruby частіше використовують ",n.jsx("code",{children:"@змінну на рівні класу"}),":"]})]}),n.jsx(g,{children:`class Animal
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
Dog.known_species     # => []  — окремий!`})]})]})]})]})})}function ox(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Ul,title:"Наслідування та super",subtitle:"Inheritance & method overriding"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[n.jsx("code",{children:"<"})," — успадкувати всі методи батьківського класу. Ruby підтримує тільки ",n.jsx("span",{className:"text-blue font-semibold",children:"одиночне наслідування"})," ","(один батько), але модулі дають решту."]}),n.jsx(g,{children:`class Animal
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
rex.weight  # => 25  (успадкований від Animal)`})]}),n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[n.jsx("code",{children:"super"})," — три варіанти:"]}),n.jsx(g,{children:`class Dog < Animal
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
end`}),n.jsx("p",{className:"text-secondary",style:{margin:"1rem 0 0.75rem"},children:"Перевірка приналежності до класу:"}),n.jsx(g,{children:`rex.is_a?(Dog)        # => true
rex.is_a?(Animal)     # => true  (підклас є батьком!)
rex.is_a?(String)     # => false

rex.class             # => Dog
rex.class.superclass  # => Animal

Dog.ancestors
# => [Dog, Animal, Object, Kernel, BasicObject]`}),n.jsx("div",{className:"outlined-card outlined-card--green fade-in-delay-3",style:{marginTop:"1rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-green font-semibold",children:"💡 В Rails:"})," ",n.jsxs("span",{className:"text-secondary",children:[n.jsx("code",{children:"Наслідування багато. class PostsController < ApplicationController"}),". Кожна модель успадковує від ",n.jsx("code",{children:"ApplicationRecord"}),", кожен контролер від ",n.jsx("code",{children:"ApplicationController"}),"."]})]})})]})]})]})})}function cx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Qd,title:"Модулі як mixins",subtitle:"include / extend / prepend & ancestors chain"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:["Модуль — як клас, але без екземплярів. Використовується як"," ",n.jsx("span",{className:"text-blue font-semibold",children:"mixin"})," — додає методи до класу.",n.jsx("code",{children:"include"})," — методи стають методами ",n.jsx("strong",{children:"екземпляра"}),":"]}),n.jsx(g,{children:`require 'json'
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
rex.to_yaml_string   # ✅`}),n.jsxs("p",{className:"text-secondary",style:{margin:"1rem 0 0.75rem"},children:[n.jsx("code",{children:"extend"})," — методи стають ",n.jsx("strong",{children:"класовими"}),". Зручно для валідації при створенні:"]}),n.jsx(g,{children:`module Validatable
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
Animal.create(name: "",     weight: 25, species: "Собака") # ❌ ArgumentError`})]}),n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[n.jsx("span",{className:"text-orange font-semibold",children:"prepend"})," — вставляє модуль"," ",n.jsx("strong",{children:"перед"})," класом. Метод модуля виконується першим:"]}),n.jsx(g,{children:`module Logging
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
# => "Рекс (Собака)"`}),n.jsxs("p",{className:"text-secondary",style:{margin:"1rem 0 0.75rem"},children:["Порядок пошуку методу — ",n.jsx("span",{className:"text-purple font-semibold",children:"ancestors chain"}),":"]}),n.jsx(g,{children:`class Animal
  include Exportable
  prepend Logging
end

Animal.ancestors
# => [Logging, Animal, Exportable, Object, Kernel, BasicObject]
#      ↑                   ↑
#  prepend — до         include — після
#
# Ruby шукає метод зліва направо.
# Перший хто відповість — той і виконається.`}),n.jsx("div",{className:"outlined-card outlined-card--purple fade-in-delay-4",style:{marginTop:"1rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-purple font-semibold",children:"📌 Коротко:"})," ",n.jsxs("span",{className:"text-secondary",children:[n.jsx("code",{children:"include"})," — методи екземпляру (найчастіше)."," ",n.jsx("code",{children:"extend"})," — класові методи."," ",n.jsx("code",{children:"prepend"})," — перехопити існуючі методи (логування, декоратори)."]})]})})]})]})]})})}function dx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Qd,title:"Модулі як namespace",subtitle:"Organizing code & avoiding name conflicts"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:["Друге призначення модулів — ",n.jsx("span",{className:"text-blue font-semibold",children:"простір імен"}),". Дозволяє мати класи з однаковою назвою в різних контекстах без конфліктів. Доступ через ",n.jsx("code",{children:"::"}),":"]}),n.jsx(g,{children:`module Veterinary
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
zoo_animal.to_s  # => "Мешканець зоопарку"`})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:"Можна вкладати модулі та класи на будь-яку глибину:"}),n.jsx(g,{children:`module Veterinary
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
end`}),n.jsxs("div",{className:"outlined-card outlined-card--cyan fade-in-delay-3",style:{marginTop:"1rem"},children:[n.jsx("p",{style:{margin:"0 0 0.5rem"},children:n.jsx("span",{className:"text-cyan font-semibold",children:"🔗 В Rails — namespace скрізь:"})}),n.jsx(g,{children:`ActiveRecord::Base      # модуль ActiveRecord, клас Base
ActionController::Base  # модуль ActionController, клас Base
ActiveSupport::Concern  # модуль для зручного написання mixins

# Ваші власні namespace в Rails:
# app/controllers/api/v1/posts_controller.rb
module Api
  module V1
    class PostsController < ApplicationController
    end
  end
end`})]}),n.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-4",style:{marginTop:"1rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-blue font-semibold",children:"📌 Підсумок модулів:"})," ",n.jsxs("span",{className:"text-secondary",children:["Модуль в Ruby — це і ",n.jsx("strong",{children:"mixin"})," (додає поведінку), і ",n.jsx("strong",{children:"namespace"})," (організовує код). Два інструменти в одному."]})]})})]})]})]})})}function ux(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Pe,title:"Enumerable та Comparable",subtitle:"Free methods via modules"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[n.jsx("code",{children:"include Enumerable"})," — якщо визначити один метод ",n.jsx("code",{children:"each"}),", отримуєш ",n.jsx("strong",{children:"безкоштовно"})," десятки методів: ",n.jsx("code",{children:"map"}),","," ",n.jsx("code",{children:"select"}),", ",n.jsx("code",{children:"find"}),", ",n.jsx("code",{children:"sort"}),", ",n.jsx("code",{children:"min"}),","," ",n.jsx("code",{children:"count"}),", ",n.jsx("code",{children:"any?"}),", ",n.jsx("code",{children:"all?"})," та інші:"]}),n.jsx(g,{children:`class AnimalManager
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
  manager.sort_by { |a| a.weight }           # за вагою`})]}),n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[n.jsx("code",{children:"include Comparable"})," — якщо визначити ",n.jsx("code",{children:"<=>"}),", отримуєш ",n.jsx("code",{children:"<"}),", ",n.jsx("code",{children:">"}),", ",n.jsx("code",{children:"<="}),","," ",n.jsx("code",{children:">="}),", ",n.jsx("code",{children:"between?"}),", ",n.jsx("code",{children:"clamp"}),":"]}),n.jsx(g,{children:`class Animal
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
  # => true`}),n.jsx("div",{className:"outlined-card outlined-card--green fade-in-delay-3",style:{marginTop:"1rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-green font-semibold",children:"💡 В Rails:"})," ",n.jsxs("span",{className:"text-secondary",children:[n.jsx("code",{children:"ActiveRecord::Base"})," включає ",n.jsx("code",{children:"Enumerable"})," — тому"," ",n.jsx("code",{children:"User.all.map"}),", ",n.jsx("code",{children:"Post.where(...).select"})," працюють саме так. Це не магія Rails — це Ruby модулі."]})]})})]})]})]})})}function mx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Ss,title:"Обробка помилок",subtitle:"begin / rescue / ensure / raise & exception hierarchy"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:"Базова структура обробки помилок:"}),n.jsx(g,{children:`def load_from_json(filename = 'animals.json')
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
  end`}),n.jsxs("p",{className:"text-secondary",style:{margin:"1rem 0 0.75rem"},children:[n.jsx("code",{children:"raise"})," — три варіанти:"]}),n.jsx(g,{children:`# 1. З типом і повідомленням
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
  raise`})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:"Ієрархія винятків у Ruby:"}),n.jsx(g,{children:`Exception                    # корінь всіх помилок
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
      └── JSON::ParserError      # (з гему json)`}),n.jsxs("div",{className:"outlined-card outlined-card--orange fade-in-delay-2",style:{marginTop:"1rem"},children:[n.jsx("p",{style:{margin:"0 0 0.5rem"},children:n.jsx("span",{className:"text-orange font-semibold",children:"⚠️ rescue без типу:"})}),n.jsx(g,{children:`rescue => e   # = rescue StandardError => e
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
  rescue Exception => e   # обережно — ловить і Ctrl+C!`})]}),n.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-3",style:{marginTop:"1rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-blue font-semibold",children:"💡 В Rails:"})," ",n.jsxs("span",{className:"text-secondary",children:[n.jsx("code",{children:"ActiveRecord::RecordNotFound"}),","," ",n.jsx("code",{children:"ActiveRecord::RecordInvalid"})," — наслідують від"," ",n.jsx("code",{children:"StandardError"}),". Rails сам обробляє їх і повертає 404/422 — але знати ієрархію треба щоб писати власні rescue."]})]})})]})]})]})})}function px(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Ud,title:"freeze, frozen?, dup та clone",subtitle:"Immutability in Ruby"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[n.jsx("code",{children:"freeze"})," — робить об'єкт ",n.jsx("strong",{children:"незмінним"}),". Будь-яка спроба змінити — ",n.jsx("code",{children:"FrozenError"}),":"]}),n.jsx(g,{children:`# frozen_string_literal: true
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
  SPECIES_LIST = ["Собака", "Кіт"].map(&:freeze).freeze`})]}),n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[n.jsx("code",{children:"dup"})," і ",n.jsx("code",{children:"clone"})," — копіювання об'єкта. Різниця є, і вона важлива:"]}),n.jsx(g,{children:`original = "Собака".freeze
  
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
  animal3 = Marshal.load(Marshal.dump(animal1))`}),n.jsx("div",{className:"outlined-card outlined-card--purple fade-in-delay-3",style:{marginTop:"1rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-purple font-semibold",children:"📌 Коротко:"})," ",n.jsxs("span",{className:"text-secondary",children:[n.jsx("code",{children:"freeze"})," — захист від випадкових змін (константи, конфіги)."," ",n.jsx("code",{children:"dup"})," — копія без freeze."," ",n.jsx("code",{children:"clone"})," — копія зі збереженням freeze. Обидва поверхневі — для глибокої копії є ",n.jsx("code",{children:"Marshal"}),"."]})]})})]})]})]})})}function hx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Ss,title:"Захисне програмування",subtitle:"nil?, respond_to?, is_a? & friends"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[n.jsx("code",{children:"nil?"})," — єдиний надійний спосіб перевірити nil. В Ruby тільки ",n.jsx("code",{children:"nil"})," і ",n.jsx("code",{children:"false"})," — falsy:"]}),n.jsx(g,{children:`animal = nil
  
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
  rex&.name         # => "Рекс"`}),n.jsxs("p",{className:"text-secondary",style:{margin:"1rem 0 0.75rem"},children:[n.jsx("code",{children:"respond_to?"})," — чи має об'єкт певний метод:"]}),n.jsx(g,{children:`rex.respond_to?(:name)         # => true
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
  end`})]}),n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[n.jsx("code",{children:"is_a?"})," / ",n.jsx("code",{children:"kind_of?"})," — перевірка типу (включаючи батьків):"]}),n.jsx(g,{children:`rex = Dog.new(name: "Рекс", weight: 25, breed: "Лабрадор")
  
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
  rex.is_a?(Comparable)   # => true (якщо включено)`}),n.jsxs("div",{className:"outlined-card outlined-card--orange fade-in-delay-3",style:{marginTop:"1rem"},children:[n.jsxs("p",{style:{margin:"0 0 0.5rem"},children:[n.jsx("span",{className:"text-orange font-semibold",children:"💡 Duck typing:"})," ",n.jsxs("span",{className:"text-secondary",children:["В Ruby рідко перевіряють тип через ",n.jsx("code",{children:"is_a?"})," — частіше використовують ",n.jsx("code",{children:"respond_to?"}),`. "Якщо об'єкт вміє крякати — це качка." Перевіряємо поведінку, а не тип.`]})]}),n.jsx(g,{children:`# Погано — жорстка прив'язка до типу:
  raise TypeError unless animal.is_a?(Animal)
  
  # Краще — duck typing:
  raise TypeError unless animal.respond_to?(:name)`})]})]})]})]})})}function fx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:$l,title:"inspect vs to_s та рівність об'єктів",subtitle:"inspect / to_s / == / eql? / equal?"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[n.jsx("code",{children:"to_s"})," — для людей. ",n.jsx("code",{children:"inspect"})," — для розробника/дебагу. Різниця суттєва:"]}),n.jsx(g,{children:`class Animal
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
  p [1, 2, 3] # => [1, 2, 3]`})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:"Три рівності — три різних питання:"}),n.jsx(g,{children:`# == : рівність за значенням (можна перевизначити)
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
  a.object_id == c.object_id  # => true`}),n.jsx(g,{children:`# Для власних класів — перевизначаємо ==:
  class Animal
    def ==(other)
      other.is_a?(Animal) && id == other.id
    end
  end
  
  rex1 = Animal.new(id: 1, name: "Рекс", ...)
  rex2 = Animal.new(id: 1, name: "Рекс", ...)
  
  rex1 == rex2      # => true   (однаковий id)
  rex1.equal?(rex2) # => false  (різні об'єкти)`}),n.jsx("div",{className:"outlined-card outlined-card--blue fade-in-delay-4",style:{marginTop:"1rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-blue font-semibold",children:"📌 Правило:"})," ",n.jsxs("span",{className:"text-secondary",children:["Майже завжди використовуємо ",n.jsx("code",{children:"=="}),"."," ",n.jsx("code",{children:"eql?"})," — у хешах та множинах (ключі)."," ",n.jsx("code",{children:"equal?"})," — тільки коли справді треба перевірити що це той самий об'єкт в пам'яті."]})]})})]})]})]})})}function xx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:de,title:"Метапрограмування",subtitle:"define_method / method_missing / send"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[n.jsx("code",{children:"send"})," — викликати метод за назвою як рядком або символом:"]}),n.jsx(g,{children:`rex.send(:name)          # => "Рекс"  (те саме що rex.name)
rex.send(:weight=, 27)  # => 27
  
  # Навіть private методи:
  rex.send(:check_vaccines)  # ✅ обходить private!
  
  # Корисно для динамічних викликів:
  [:name, :species, :weight].each do |field|
    puts rex.send(field)
  end`}),n.jsxs("p",{className:"text-secondary",style:{margin:"1rem 0 0.75rem"},children:[n.jsx("code",{children:"define_method"})," — визначити метод динамічно під час виконання. Наприклад — залогувати ",n.jsx("strong",{children:"всі"})," методи класу:"]}),n.jsx(g,{children:`  module Logging
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
  rex.to_s   # [LOG] Animal#to_s викликано  =>  "Рекс (Собака)"`})]}),n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary",style:{marginBottom:"0.75rem"},children:[n.jsx("code",{children:"method_missing"})," — перехопити виклик ",n.jsx("strong",{children:"будь-якого"})," ","невідомого методу:"]}),n.jsx(g,{children:`class Animal
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
  # Post.find_by_title("Hello")`}),n.jsx("div",{className:"outlined-card outlined-card--orange fade-in-delay-3",style:{marginTop:"1rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-orange font-semibold",children:"⚠️ Правила метапрограмування:"})," ",n.jsxs("span",{className:"text-secondary",children:["1. Завжди викликати ",n.jsx("code",{children:"super"})," в кінці ",n.jsx("code",{children:"method_missing"}),"."," ","2. Завжди визначати ",n.jsx("code",{children:"respond_to_missing?"})," поруч."," ","3. ",n.jsx("code",{children:"include Logging"})," — після визначення методів, не до."," ","4. Використовувати обережно — важко дебажити."]})]})}),n.jsx("div",{className:"outlined-card outlined-card--cyan fade-in-delay-4",style:{marginTop:"1rem"},children:n.jsxs("p",{style:{margin:0},children:[n.jsx("span",{className:"text-cyan font-semibold",children:"🔗 В Rails скрізь:"})," ",n.jsxs("span",{className:"text-secondary",children:[n.jsx("code",{children:"find_by_*"}),", ",n.jsx("code",{children:"where"}),", ",n.jsx("code",{children:"has_many"}),","," ",n.jsx("code",{children:"belongs_to"}),", ",n.jsx("code",{children:"validates"})," — все це метапрограмування."]})]})})]})]})]})})}function _x(){return n.jsx("div",{className:"slide slide--centered slide--gradient-blue-purple",children:n.jsxs("div",{className:"slide__content slide__content--narrow",style:{textAlign:"left"},children:[n.jsx(j,{icon:ht,title:"Підсумок лекції",subtitle:"Summary"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"outlined-card outlined-card--blue",style:{marginBottom:"1rem"},children:[n.jsx("p",{className:"text-blue font-semibold",style:{margin:"0 0 0.5rem"},children:"Класи та об'єкти"}),n.jsxs("ul",{style:{margin:0,paddingLeft:"1.2rem",color:"var(--text-secondary)",lineHeight:1.8},children:[n.jsxs("li",{children:[n.jsx("code",{children:"initialize"}),", ",n.jsx("code",{children:"@змінні"}),", keyword args"]}),n.jsxs("li",{children:[n.jsx("code",{children:"attr_accessor/reader/writer"})," — методи класу що генерують код"]}),n.jsxs("li",{children:[n.jsx("code",{children:"public/private/protected"})," — контроль доступу"]}),n.jsxs("li",{children:[n.jsx("code",{children:"self"})," — поточний об'єкт, обов'язковий у сеттерах, chaining, передачі"]}),n.jsxs("li",{children:["Класові методи (",n.jsx("code",{children:"self.метод"}),"), ",n.jsx("code",{children:"@@змінні"})," vs ",n.jsx("code",{children:"@на класі"})]})]})]}),n.jsxs("div",{className:"outlined-card outlined-card--purple",style:{marginBottom:"1rem"},children:[n.jsx("p",{className:"text-purple font-semibold",style:{margin:"0 0 0.5rem"},children:"Наслідування та модулі"}),n.jsxs("ul",{style:{margin:0,paddingLeft:"1.2rem",color:"var(--text-secondary)",lineHeight:1.8},children:[n.jsxs("li",{children:[n.jsx("code",{children:"<"})," — одиночне наслідування, ",n.jsx("code",{children:"super"})," — три варіанти"]}),n.jsxs("li",{children:[n.jsx("code",{children:"include"})," / ",n.jsx("code",{children:"extend"})," / ",n.jsx("code",{children:"prepend"})," + ancestors chain"]}),n.jsxs("li",{children:["Модулі як namespace — ",n.jsx("code",{children:"::"}),", уникнення конфліктів імен"]}),n.jsxs("li",{children:[n.jsx("code",{children:"Enumerable"})," + ",n.jsx("code",{children:"each"})," → десятки методів безкоштовно"]}),n.jsxs("li",{children:[n.jsx("code",{children:"Comparable"})," + ",n.jsx("code",{children:"<=>"})," → сортування та порівняння"]})]})]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"outlined-card outlined-card--green",style:{marginBottom:"1rem"},children:[n.jsx("p",{className:"text-green font-semibold",style:{margin:"0 0 0.5rem"},children:"Надійний код"}),n.jsxs("ul",{style:{margin:0,paddingLeft:"1.2rem",color:"var(--text-secondary)",lineHeight:1.8},children:[n.jsxs("li",{children:[n.jsx("code",{children:"begin/rescue/ensure/raise"}),", ієрархія винятків"]}),n.jsxs("li",{children:[n.jsx("code",{children:"rescue"})," без типу ловить ",n.jsx("code",{children:"StandardError"})," та нащадків"]}),n.jsxs("li",{children:[n.jsx("code",{children:"freeze"}),", ",n.jsx("code",{children:"dup"})," vs ",n.jsx("code",{children:"clone"}),", ",n.jsx("code",{children:"# frozen_string_literal"})]}),n.jsxs("li",{children:[n.jsx("code",{children:"nil?"}),", ",n.jsx("code",{children:"respond_to?"}),", ",n.jsx("code",{children:"is_a?"})," — duck typing"]}),n.jsxs("li",{children:[n.jsx("code",{children:"=="})," vs ",n.jsx("code",{children:"eql?"})," vs ",n.jsx("code",{children:"equal?"})]})]})]}),n.jsxs("div",{className:"outlined-card outlined-card--orange",children:[n.jsx("p",{className:"text-orange font-semibold",style:{margin:"0 0 0.5rem"},children:"Метапрограмування"}),n.jsxs("ul",{style:{margin:0,paddingLeft:"1.2rem",color:"var(--text-secondary)",lineHeight:1.8},children:[n.jsxs("li",{children:[n.jsx("code",{children:"send"})," — виклик методу за назвою"]}),n.jsxs("li",{children:[n.jsx("code",{children:"define_method"})," — визначення методу динамічно"]}),n.jsxs("li",{children:[n.jsx("code",{children:"method_missing"})," + ",n.jsx("code",{children:"respond_to_missing?"})]}),n.jsxs("li",{children:["Саме так працюють ",n.jsx("code",{children:"has_many"}),", ",n.jsx("code",{children:"find_by_*"})," в Rails"]})]})]})]})]})]})})}const gx=[{id:1,title:"Титульний слайд",component:nx},{id:2,title:"Мета заняття",component:sx},{id:3,title:"initialize та @змінні екземпляра",component:tx},{id:4,title:"public / private / protected",component:rx},{id:5,title:"attr_accessor / reader / writer",component:lx},{id:6,title:"Методи екземпляра + self",component:ix},{id:7,title:"Класові методи та @@змінні класу",component:ax},{id:8,title:"Наслідування та super",component:ox},{id:9,title:"Модулі як mixins",component:cx},{id:10,title:"Модулі як namespace",component:dx},{id:11,title:"Enumerable та Comparable",component:ux},{id:12,title:"Обробка помилок та ієрархія винятків",component:mx},{id:13,title:"freeze, frozen?, dup та clone",component:px},{id:14,title:"Захисне програмування",component:hx},{id:15,title:"inspect vs to_s та рівність об'єктів",component:fx},{id:16,title:"Метапрограмування",component:xx},{id:17,title:"Підсумок",component:_x}];function yx(){return n.jsx(vt,{slides:gx})}function jx(){return n.jsxs("div",{className:"slide slide--centered slide--gradient-blue-purple",children:[n.jsx("div",{className:"title-slide__icon-wrapper",children:n.jsx(En,{})}),n.jsx("h1",{className:"title-slide__title",children:"Привіт, Rails!"}),n.jsx("h2",{className:"title-slide__subtitle",children:"Перший додаток за 90 хвилин"}),n.jsx("p",{className:"title-slide__english",children:"Hello, Rails! Your First App in 90 Minutes"}),n.jsx("div",{className:"title-slide__badge",children:n.jsx("p",{children:"Лекція 4"})})]})}function vx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Rs,title:"Мета заняття",subtitle:"Learning Objectives"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsx(D,{icon:Pe,title:"Що таке Rails?",description:"Convention over Configuration — чому Rails такий продуктивний і що відрізняє його від інших фреймворків",color:"green",delay:1}),n.jsx(D,{icon:jt,title:"Встановлення та структура",description:"rails new, структура проєкту — де що лежить і чому саме так",color:"blue",delay:2}),n.jsx(D,{icon:ca,title:"MVC-архітектура",description:"Model-View-Controller: як три компоненти спілкуються і обробляють HTTP-запит",color:"purple",delay:3}),n.jsx(D,{icon:de,title:"Scaffold + WOW-ефект",description:"rails generate scaffold — повноцінний CRUD за одну команду. Від нуля до блогу за 30 хвилин",color:"orange",delay:4})]})]})})}function Nx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Hl,title:"Що таке Rails?",subtitle:"Ruby on Rails — web framework"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"highlight-box highlight-box--green mb-md",children:[n.jsx(ua,{className:"highlight-box__icon"}),n.jsx("div",{children:n.jsxs("p",{className:"highlight-box__text",children:["Rails — веб-фреймворк написаний на Ruby. Створений ",n.jsx("strong",{children:"Девідом Хайнемайером Ганссоном"})," (DHH) у 2004 році під час роботи над Basecamp."]})})]}),n.jsxs("div",{className:"step-list",children:[n.jsxs("div",{className:"step-list__item step-list__item--green",children:[n.jsx("div",{className:"step-list__number step-list__number--green",children:"1"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"GitHub (куплений Microsoft у 2018)"}),n.jsx("p",{className:"step-list__text",children:"Rails-моноліт з 2008 — досі в ядрі платформи"})]})]}),n.jsxs("div",{className:"step-list__item step-list__item--blue",children:[n.jsx("div",{className:"step-list__number step-list__number--blue",children:"2"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"Shopify — $8B+ платформа"}),n.jsx("p",{className:"step-list__text",children:"Мільйони магазинів на Rails"})]})]}),n.jsxs("div",{className:"step-list__item step-list__item--purple",children:[n.jsx("div",{className:"step-list__number step-list__number--purple",children:"3"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"Airbnb, Twitch, SoundCloud"}),n.jsx("p",{className:"step-list__text",children:"Стартували і масштабувались на Rails"})]})]})]})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-md",style:{fontSize:"var(--fs-body-sm)"},children:"Два головних принципи Rails:"}),n.jsxs("div",{className:"info-card info-card--green mb-sm",children:[n.jsx("h3",{className:"info-card__title",children:"CoC — Convention over Configuration"}),n.jsx("p",{className:"info-card__text",children:"Rails знає, як організувати проєкт. Ти не витрачаєш час на налаштування — відразу пишеш бізнес-логіку."})]}),n.jsxs("div",{className:"info-card info-card--blue",children:[n.jsx("h3",{className:"info-card__title",children:"DRY — Don't Repeat Yourself"}),n.jsx("p",{className:"info-card__text",children:"Кожна частина логіки існує в одному місці. Зміна в одному місці — зміна скрізь."})]})]})]})]})})}function bx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Vn,title:"Встановлення Rails",subtitle:"rails new — старт проєкту"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Передумови (маємо з попередніх лекцій):"}),n.jsx(g,{language:"bash",children:`# Перевіряємо Ruby
ruby -v   # >= 3.2

# Встановлюємо Rails
gem install rails

# Перевіряємо
rails -v  # Rails 8.x`}),n.jsx("p",{className:"text-secondary mt-md mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Створюємо перший проєкт:"}),n.jsx(g,{language:"bash",children:`# Новий додаток з SQLite (за замовчуванням)
rails new blog

# Або з PostgreSQL
rails new blog --database=postgresql

# Заходимо в папку
cd blog

# Запускаємо сервер
rails server    # або просто: rails s`})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"highlight-box highlight-box--blue mb-md",children:[n.jsx(Gn,{className:"highlight-box__icon"}),n.jsx("div",{children:n.jsxs("p",{className:"highlight-box__text",children:["Відкрий ",n.jsx("strong",{children:"http://localhost:3000"})," — побачиш стартову сторінку Rails 🎉"]})})]}),n.jsxs("div",{className:"info-card info-card--orange",children:[n.jsx("h3",{className:"info-card__title",children:"💡 Що відбулось?"}),n.jsxs("p",{className:"info-card__text",children:["Одна команда ",n.jsx("code",{children:"rails new"})," створила повноцінний проєкт: веб-сервер, базу даних, систему роутингу, шаблонізатор, asset pipeline — всe готово до роботи."]})]}),n.jsx(g,{language:"bash",children:`blog/
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
└── Gemfile.lock`}),n.jsxs("div",{className:"info-card info-card--purple mt-sm",children:[n.jsx("h3",{className:"info-card__title",children:"🛑 SQLite vs PostgreSQL"}),n.jsx("p",{className:"info-card__text",children:"SQLite — ідеально для розробки (без налаштувань). PostgreSQL — для продакшну. В Rails 8 SQLite підтримується навіть у продакшні!"})]})]})]})]})})}function kx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:ah,title:"Структура проєкту",subtitle:"Де що живе — і чому саме там"}),n.jsxs("div",{className:"slide-grid slide-grid--3col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-caption)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"},children:"🏗 Ядро додатку"}),n.jsx("div",{className:"step-list",children:[{dir:"app/models/",desc:"Класи моделей (Ruby + AR)",color:"blue"},{dir:"app/controllers/",desc:"Контролери — логіка запитів",color:"blue"},{dir:"app/views/",desc:"Шаблони ERB — HTML сторінки",color:"blue"},{dir:"app/helpers/",desc:"Хелпери для views",color:"blue"}].map((e,s)=>n.jsx("div",{className:`step-list__item step-list__item--${e.color}`,children:n.jsxs("div",{className:"step-list__content",children:[n.jsx("code",{style:{fontSize:"var(--fs-caption)",color:"var(--accent-blue-text)"},children:e.dir}),n.jsx("p",{className:"step-list__text",children:e.desc})]})},s))})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-caption)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"},children:"⚙️ Конфігурація"}),n.jsx("div",{className:"step-list",children:[{dir:"config/routes.rb",desc:"Усі URL-маршрути",color:"purple"},{dir:"config/database.yml",desc:"Налаштування БД",color:"purple"},{dir:"db/migrate/",desc:"Міграції — версії схеми",color:"purple"},{dir:"db/schema.rb",desc:"Поточна схема БД",color:"purple"}].map((e,s)=>n.jsx("div",{className:`step-list__item step-list__item--${e.color}`,children:n.jsxs("div",{className:"step-list__content",children:[n.jsx("code",{style:{fontSize:"var(--fs-caption)",color:"var(--accent-purple-text)"},children:e.dir}),n.jsx("p",{className:"step-list__text",children:e.desc})]})},s))})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-caption)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"},children:"📦 Інше"}),n.jsx("div",{className:"step-list",children:[{dir:"Gemfile",desc:"Залежності (як package.json)",color:"green"},{dir:"app/assets/",desc:"CSS, JS, зображення",color:"green"},{dir:"public/",desc:"Статичні файли",color:"green"},{dir:"test/ / spec/",desc:"Тести",color:"green"}].map((e,s)=>n.jsx("div",{className:`step-list__item step-list__item--${e.color}`,children:n.jsxs("div",{className:"step-list__content",children:[n.jsx("code",{style:{fontSize:"var(--fs-caption)",color:"var(--accent-green-text)"},children:e.dir}),n.jsx("p",{className:"step-list__text",children:e.desc})]})},s))})]})]}),n.jsxs("div",{className:"highlight-box highlight-box--yellow mt-md",children:[n.jsx(de,{className:"highlight-box__icon"}),n.jsxs("p",{className:"highlight-box__text",children:[n.jsx("strong",{children:"Конвенція:"})," Rails знає, де шукати контролер для моделі ",n.jsx("code",{children:"Post"})," — це ",n.jsx("code",{children:"app/controllers/posts_controller.rb"}),", а view — ",n.jsx("code",{children:"app/views/posts/index.html.erb"}),". Ніяких налаштувань!"]})]})]})})}function wx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Pe,title:"MVC-архітектура",subtitle:"Model — View — Controller"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsx("div",{children:n.jsxs("div",{className:"step-list",children:[n.jsxs("div",{className:"step-list__item step-list__item--blue",children:[n.jsx("div",{className:"step-list__number step-list__number--blue",children:"1"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"Браузер → Router"}),n.jsx("p",{className:"step-list__text",children:"GET /posts надходить до routes.rb"})]})]}),n.jsxs("div",{className:"step-list__item step-list__item--purple",children:[n.jsx("div",{className:"step-list__number step-list__number--purple",children:"2"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"Router → Controller"}),n.jsx("p",{className:"step-list__text",children:"routes.rb визначає: викликати PostsController#index"})]})]}),n.jsxs("div",{className:"step-list__item step-list__item--green",children:[n.jsx("div",{className:"step-list__number step-list__number--green",children:"3"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"Controller → Model"}),n.jsx("p",{className:"step-list__text",children:"PostsController#index звертається до моделі — Post.all"})]})]}),n.jsxs("div",{className:"step-list__item step-list__item--orange",children:[n.jsx("div",{className:"step-list__number step-list__number--orange",children:"4"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"Model → View → Браузер"}),n.jsx("p",{className:"step-list__text",children:"Модель повертає дані → контролер передає у index.html.erb → браузер отримує HTML"})]})]})]})}),n.jsxs("div",{children:[n.jsxs("div",{className:"info-card info-card--blue mb-sm",children:[n.jsxs("h3",{className:"info-card__title",children:[n.jsx(Bl,{style:{display:"inline",width:16,height:16,marginRight:6}}),"Model"]}),n.jsxs("p",{className:"info-card__text",children:["Бізнес-логіка + робота з БД. Успадковує ",n.jsx("code",{children:"ApplicationRecord"}),". Знає про таблиці, зв'язки, валідації."]})]}),n.jsxs("div",{className:"info-card info-card--purple mb-sm",children:[n.jsxs("h3",{className:"info-card__title",children:[n.jsx(ca,{style:{display:"inline",width:16,height:16,marginRight:6}}),"Controller"]}),n.jsx("p",{className:"info-card__text",children:"Диригент оркестру. Отримує запит, питає Model за даними, передає у View. Логіки — мінімум."})]}),n.jsxs("div",{className:"info-card info-card--green",children:[n.jsxs("h3",{className:"info-card__title",children:[n.jsx($l,{style:{display:"inline",width:16,height:16,marginRight:6}}),"View"]}),n.jsx("p",{className:"info-card__text",children:"ERB-шаблони — HTML з вбудованим Ruby. Тільки відображення, жодної бізнес-логіки."})]})]})]})]})})}function Sx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:de,title:"Scaffold — магія Rails",subtitle:"Повний CRUD за одну команду"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Одна команда генерує все:"}),n.jsx(g,{language:"bash",children:`rails generate scaffold Post \\
  title:string \\
  body:text

# Що створюється:
# ✅ app/models/post.rb
# ✅ app/controllers/posts_controller.rb
# ✅ app/views/posts/ (6 шаблонів!)
# ✅ db/migrate/..._create_posts.rb
# ✅ config/routes.rb (resources :posts)
# ✅ test/...`}),n.jsx("p",{className:"text-secondary mt-md mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Запускаємо міграцію та сервер:"}),n.jsx(g,{language:"bash",children:`rails db:migrate
rails server`}),n.jsxs("div",{className:"highlight-box highlight-box--green mt-sm",children:[n.jsx(Gn,{className:"highlight-box__icon"}),n.jsxs("p",{className:"highlight-box__text",children:[n.jsx("strong",{children:"http://localhost:3000/posts"})," — повноцінний блог!"]})]})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Що ми отримали автоматично:"}),n.jsx("div",{className:"step-list",children:[{label:"GET /posts",desc:"Список усіх постів",color:"blue"},{label:"GET /posts/new",desc:"Форма створення",color:"green"},{label:"POST /posts",desc:"Збереження нового поста",color:"green"},{label:"GET /posts/:id",desc:"Сторінка одного поста",color:"purple"},{label:"GET /posts/:id/edit",desc:"Форма редагування",color:"orange"},{label:"PATCH /posts/:id",desc:"Оновлення поста",color:"orange"},{label:"DELETE /posts/:id",desc:"Видалення поста",color:"red"}].map((e,s)=>n.jsx("div",{className:`step-list__item step-list__item--${e.color}`,style:{padding:"0.4rem 0.75rem"},children:n.jsxs("div",{className:"step-list__content",children:[n.jsx("code",{style:{fontSize:"var(--fs-caption)",color:`var(--accent-${e.color}-text)`},children:e.label}),n.jsx("p",{className:"step-list__text",style:{fontSize:"var(--fs-caption)"},children:e.desc})]})},s))})]})]})]})})}function Rx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:ca,title:"Згенерований контролер",subtitle:"Що всередині posts_controller.rb"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Rails генерує готовий контролер:"}),n.jsx(g,{language:"ruby",children:`class PostsController < ApplicationController
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
end`})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"info-card info-card--blue mb-sm",children:[n.jsx("h3",{className:"info-card__title",children:"before_action"}),n.jsxs("p",{className:"info-card__text",children:["Виконується перед вказаними діями. Тут — знаходить пост по ",n.jsx("code",{children:"params[:id]"})," і зберігає в ",n.jsx("code",{children:"@post"}),"."]})]}),n.jsxs("div",{className:"info-card info-card--purple mb-sm",children:[n.jsx("h3",{className:"info-card__title",children:"Змінні з @ — передаються у View"}),n.jsxs("p",{className:"info-card__text",children:[n.jsx("code",{children:"@posts"})," у контролері автоматично доступна в ",n.jsx("code",{children:"index.html.erb"}),". Магія Rails!"]})]}),n.jsxs("div",{className:"info-card info-card--green mb-sm",children:[n.jsx("h3",{className:"info-card__title",children:"Strong Parameters"}),n.jsxs("p",{className:"info-card__text",children:[n.jsx("code",{children:"post_params"})," — захист від масового присвоєння. Дозволяємо тільки ті поля, які очікуємо."]})]}),n.jsxs("div",{className:"info-card info-card--orange",children:[n.jsx("h3",{className:"info-card__title",children:"redirect_to vs render"}),n.jsxs("p",{className:"info-card__text",children:[n.jsx("code",{children:"redirect_to"})," — новий HTTP-запит після успішної дії. Приймає об'єкт моделі, path- або url-хелпер:"]}),n.jsxs("p",{className:"info-card__text",style:{marginTop:"0.4rem"},children:[n.jsx("code",{children:"redirect_to @post"})," → show",n.jsx("br",{}),n.jsx("code",{children:"redirect_to posts_path"})," → index",n.jsx("br",{}),n.jsx("code",{children:"redirect_to posts_url"})," → index (повний URL)"]}),n.jsxs("p",{className:"info-card__text",style:{marginTop:"0.4rem"},children:[n.jsx("code",{children:"render"})," — рендерить шаблон у поточному запиті, зберігаючи ",n.jsx("code",{children:"@post"})," з помилками валідації. Використовується коли дія не вдалась."]})]})]})]})]})})}function Ex(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Vd,title:"Маршрути — routes.rb",subtitle:"rails routes — дивимось що є"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Один рядок коду — вісім маршрутів:"}),n.jsx(g,{language:"ruby",children:`# config/routes.rb
Rails.application.routes.draw do
  resources :posts
  root "posts#index"
end`}),n.jsx("p",{className:"text-secondary mt-md mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Переглядаємо всі маршрути:"}),n.jsx(g,{language:"bash",children:`rails routes

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
#          DELETE /posts/:id            posts#destroy`})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Використання маршрутів у коді:"}),n.jsx(g,{language:"erb",children:`<%# В шаблонах ERB %>
<%= link_to "Всі пости", posts_path %>
<%= link_to "Новий пост", new_post_path %>
<%= link_to "Редагувати", edit_post_path(@post) %>
<%= link_to "Переглянути", post_path(@post) %>

<%# Або коротше %>
<%= link_to "Переглянути", @post %>`}),n.jsxs("div",{className:"highlight-box highlight-box--blue mt-md",children:[n.jsx(de,{className:"highlight-box__icon"}),n.jsxs("p",{className:"highlight-box__text",children:["Rails автоматично генерує ",n.jsx("strong",{children:"path-хелпери"}),": ",n.jsx("code",{children:"posts_path"}),", ",n.jsx("code",{children:"post_path(@post)"}),", ",n.jsx("code",{children:"new_post_path"})," тощо. Ніяких URL хардкодити не треба!"]})]}),n.jsxs("div",{className:"info-card info-card--purple mt-sm",children:[n.jsx("h3",{className:"info-card__title",children:"root — головна сторінка"}),n.jsxs("p",{className:"info-card__text",children:[n.jsx("code",{children:'root "posts#index"'})," → GET / обробляє ",n.jsx("code",{children:"PostsController#index"})]})]})]})]})]})})}function Cx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:$l,title:"View — ERB-шаблони",subtitle:"HTML + Ruby = ERB"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:n.jsx("code",{children:"app/views/posts/index.html.erb"})}),n.jsx(g,{language:"erb",children:`<h1>Пости блогу</h1>

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
<%= link_to "Новий пост", new_post_path %>`})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"info-card info-card--green mb-sm",children:[n.jsxs("h3",{className:"info-card__title",children:[n.jsx("code",{children:"<% %>"})," — виконати Ruby"]}),n.jsx("p",{className:"info-card__text",children:"Код виконується, але нічого не виводиться. Для циклів, умов, присвоювань."})]}),n.jsxs("div",{className:"info-card info-card--blue mb-sm",children:[n.jsxs("h3",{className:"info-card__title",children:[n.jsx("code",{children:"<%= %>"})," — вивести результат"]}),n.jsx("p",{className:"info-card__text",children:"Результат виразу вставляється в HTML. Rails автоматично екранує небезпечні символи (XSS-захист)."})]}),n.jsxs("div",{className:"info-card info-card--purple mb-sm",children:[n.jsx("h3",{className:"info-card__title",children:"Layout — спільна обгортка"}),n.jsxs("p",{className:"info-card__text",children:[n.jsx("code",{children:"app/views/layouts/application.html.erb"})," — шаблон, де є ",n.jsx("code",{children:"<%= yield %>"}),". Всі сторінки рендеряться всередині layout."]})]}),n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Типи тегів ERB:"}),n.jsx(g,{language:"erb",children:`<% ruby_code %>       <%# виконати %>
<%= ruby_expr %>      <%# вивести %>
<%# коментар %>       <%# ігнорується %>`})]})]})]})})}function zx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Bl,title:"Model — Active Record",subtitle:"Ruby-об'єкти ↔ рядки таблиці"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:["Згенерована модель ",n.jsx("code",{children:"app/models/post.rb"}),":"]}),n.jsx(g,{language:"ruby",children:`class Post < ApplicationRecord
end
# Це ВСЕ, що потрібно!
# Решту знає Active Record автоматично:
# - таблиця "posts" у БД
# - поля title, body, created_at, updated_at
# - CRUD-методи вже є`}),n.jsx("p",{className:"text-secondary mt-md mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Міграція що створює таблицю:"}),n.jsx(g,{language:"ruby",children:`class CreatePosts < ActiveRecord::Migration[8.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.timestamps  # created_at, updated_at
    end
  end
end`})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Active Record в дії (rails console):"}),n.jsx(g,{language:"ruby",children:`# Створення
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
Post.count`}),n.jsxs("div",{className:"highlight-box highlight-box--green mt-sm",children:[n.jsx(De,{className:"highlight-box__icon"}),n.jsxs("p",{className:"highlight-box__text",children:[n.jsx("strong",{children:"Жодного SQL!"})," Active Record перетворює Ruby-методи на ефективні SQL-запити автоматично."]})]})]})]})]})})}function Tx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Vn,title:"Rails Console",subtitle:"Інтерактивна оболонка — найкращий друг розробника"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Запускаємо та досліджуємо:"}),n.jsx(g,{language:"bash",children:`# Запуск консолі
rails console    # або: rails c

# Sandbox — зміни не збережуться
rails console --sandbox`}),n.jsx("p",{className:"text-secondary mt-md mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Практика в консолі:"}),n.jsx(g,{language:"ruby",children:`# Створюємо пости
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
Post.count  # => 2`})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"highlight-box highlight-box--blue mb-md",children:[n.jsx(Vn,{className:"highlight-box__icon"}),n.jsx("p",{className:"highlight-box__text",children:"Rails console — це IRB, але з повним доступом до твого додатку, моделей і бази даних. Незамінний для дебагу та швидкого тестування."})]}),n.jsxs("div",{className:"step-list",children:[n.jsx("div",{className:"step-list__item step-list__item--green",children:n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"reload!"}),n.jsx("p",{className:"step-list__text",children:"Перезавантажує код без перезапуску консолі"})]})}),n.jsx("div",{className:"step-list__item step-list__item--blue",children:n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"app.get('/posts')"}),n.jsx("p",{className:"step-list__text",children:"Симулює HTTP-запит прямо з консолі"})]})}),n.jsx("div",{className:"step-list__item step-list__item--purple",children:n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"helper.link_to"}),n.jsx("p",{className:"step-list__text",children:"Тестує хелпери прямо в консолі"})]})})]}),n.jsxs("div",{className:"info-card info-card--orange mt-sm",children:[n.jsx("h3",{className:"info-card__title",children:"💡 Про середовища"}),n.jsxs("p",{className:"info-card__text",children:["Rails має три середовища: ",n.jsx("code",{children:"development"})," (за замовчуванням), ",n.jsx("code",{children:"test"})," та ",n.jsx("code",{children:"production"}),". Консоль запускається в development."]})]})]})]})]})})}function Px(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Rn,title:"Генератори Rails",subtitle:"rails generate — автоматизація рутини"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Основні генератори:"}),n.jsx(g,{language:"bash",children:`# Scaffold — повний CRUD
rails g scaffold Post title:string body:text

# Тільки модель
rails g model Comment author:string body:text post:references

# Тільки контролер
rails g controller Pages home about contact

# Тільки міграція
rails g migration AddPublishedToPosts published:boolean

# Переглянути що генерує (без створення)
rails g scaffold Comment --pretend`}),n.jsx("p",{className:"text-secondary mt-md mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Скасувати генерацію:"}),n.jsx(g,{language:"bash",children:`# destroy — видаляє все що generate створив
rails destroy scaffold Post
rails d model Comment  # "d" — скорочення`})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Типи полів для міграцій:"}),n.jsx("div",{className:"step-list",children:[{type:"string",desc:"Короткий текст (до 255 символів)",color:"blue"},{type:"text",desc:"Довгий текст (без обмеження)",color:"blue"},{type:"integer",desc:"Ціле число",color:"green"},{type:"float / decimal",desc:"Дробове число",color:"green"},{type:"boolean",desc:"true / false",color:"purple"},{type:"datetime",desc:"Дата і час",color:"purple"},{type:"references",desc:"Зовнішній ключ (belongs_to)",color:"orange"}].map((e,s)=>n.jsx("div",{className:`step-list__item step-list__item--${e.color}`,style:{padding:"0.35rem 0.75rem"},children:n.jsxs("div",{className:"step-list__content",children:[n.jsx("code",{style:{fontSize:"var(--fs-caption)",color:`var(--accent-${e.color}-text)`},children:e.type}),n.jsx("p",{className:"step-list__text",style:{fontSize:"var(--fs-caption)"},children:e.desc})]})},s))})]})]})]})})}function Lx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Un,title:"Міграції та Seeds",subtitle:"Керуємо схемою бази даних"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Основні команди:"}),n.jsx(g,{language:"bash",children:`# Застосувати всі незастосовані міграції
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
rails db:reset  # = drop + create + migrate + seed`}),n.jsx("p",{className:"text-secondary mt-md mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Додаємо поле до існуючої таблиці:"}),n.jsx(g,{language:"bash",children:`rails g migration AddPublishedToPosts published:boolean:index
rails db:migrate`})]}),n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:["Seeds — початкові дані (",n.jsx("code",{children:"db/seeds.rb"}),"):"]}),n.jsx(g,{language:"ruby",children:`# db/seeds.rb
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
# rails db:seed`}),n.jsxs("div",{className:"highlight-box highlight-box--purple mt-sm",children:[n.jsx(Rn,{className:"highlight-box__icon"}),n.jsxs("p",{className:"highlight-box__text",children:["Gem ",n.jsx("strong",{children:"faker"})," генерує реалістичні тестові дані — імена, тексти, адреси. Додай до Gemfile: ",n.jsx("code",{children:'gem "faker", group: :development'})]})]})]})]})]})})}function Mx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:da,title:"Практика: Блог за 30 хвилин",subtitle:"WOW-ефект — від нуля до живого додатку"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Покроковий план:"}),n.jsxs("div",{className:"step-list",children:[n.jsxs("div",{className:"step-list__item step-list__item--green",children:[n.jsx("div",{className:"step-list__number step-list__number--green",children:"1"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"Створюємо проєкт (2 хв)"}),n.jsx(g,{language:"bash",style:{marginTop:"0.25rem"},children:"rails new blog && cd blog"})]})]}),n.jsxs("div",{className:"step-list__item step-list__item--blue",children:[n.jsx("div",{className:"step-list__number step-list__number--blue",children:"2"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"Scaffold для Post (1 хв)"}),n.jsx(g,{language:"bash",style:{marginTop:"0.25rem"},children:`rails g scaffold Post title:string body:text author:string
rails db:migrate`})]})]}),n.jsxs("div",{className:"step-list__item step-list__item--purple",children:[n.jsx("div",{className:"step-list__number step-list__number--purple",children:"3"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"Встановлюємо root (1 хв)"}),n.jsx(g,{language:"ruby",style:{marginTop:"0.25rem"},children:`# config/routes.rb
root "posts#index"`})]})]}),n.jsxs("div",{className:"step-list__item step-list__item--orange",children:[n.jsx("div",{className:"step-list__number step-list__number--orange",children:"4"}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"Додаємо дані та запускаємо"}),n.jsx(g,{language:"bash",style:{marginTop:"0.25rem"},children:`rails db:seed
rails server`})]})]})]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"highlight-box highlight-box--green mb-md",children:[n.jsx(En,{className:"highlight-box__icon"}),n.jsxs("p",{className:"highlight-box__text",children:[n.jsx("strong",{children:"Результат:"})," Повноцінний блог з можливістю створювати, редагувати, видаляти та переглядати пости. Без жодного рядка SQL. За 30 хвилин!"]})]}),n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Додаємо мінімальну валідацію:"}),n.jsx(g,{language:"ruby",children:`# app/models/post.rb
class Post < ApplicationRecord
  validates :title, presence: true,
                    length: { minimum: 5 }
  validates :body, presence: true
  validates :author, presence: true
end`}),n.jsxs("div",{className:"info-card info-card--blue mt-sm",children:[n.jsx("h3",{className:"info-card__title",children:"Що вивчаємо далі (Лекція 5)"}),n.jsx("p",{className:"info-card__text",children:"Маршрутизацію та контролери в деталях — nested routes, before_action, flash messages, respond_to."})]})]})]})]})})}function Ax(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:jt,title:"CoC у дії",subtitle:"Конвенція важливіша за конфігурацію"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:["Rails ",n.jsx("strong",{children:"знає"})," ці речі автоматично:"]}),n.jsx("div",{className:"step-list",children:[{label:"Модель Post",arrow:"→",result:"таблиця posts",color:"blue"},{label:"Модель BlogPost",arrow:"→",result:"таблиця blog_posts",color:"blue"},{label:"PostsController",arrow:"→",result:"posts_controller.rb",color:"purple"},{label:"posts#index",arrow:"→",result:"views/posts/index.html.erb",color:"purple"},{label:"resources :posts",arrow:"→",result:"7 RESTful маршрутів",color:"green"},{label:"Post.find(1)",arrow:"→",result:"SELECT * FROM posts WHERE id=1",color:"green"}].map((e,s)=>n.jsx("div",{className:`step-list__item step-list__item--${e.color}`,style:{padding:"0.4rem 0.75rem"},children:n.jsxs("div",{className:"step-list__content",style:{display:"flex",alignItems:"center",gap:"0.5rem",flexWrap:"wrap"},children:[n.jsx("code",{style:{fontSize:"var(--fs-caption)",color:`var(--accent-${e.color}-text)`},children:e.label}),n.jsx(aa,{style:{width:12,height:12,opacity:.5,flexShrink:0}}),n.jsx("span",{style:{fontSize:"var(--fs-caption)",color:"var(--text-secondary)"},children:e.result})]})},s))})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"info-card info-card--blue mb-sm",children:[n.jsx("h3",{className:"info-card__title",children:"Без Rails (Java/Spring)"}),n.jsx("p",{className:"info-card__text",children:"Потрібно вказати: назву таблиці, маппінг полів, XML або анотації конфігурації, реєстрацію бінів, налаштування ORM..."})]}),n.jsxs("div",{className:"info-card info-card--green mb-sm",children:[n.jsx("h3",{className:"info-card__title",children:"З Rails"}),n.jsxs("p",{className:"info-card__text",children:["Просто назви клас ",n.jsx("code",{children:"Post"})," і успадкуй від ",n.jsx("code",{children:"ApplicationRecord"}),". Rails зробить решту."]})]}),n.jsxs("div",{className:"highlight-box highlight-box--orange",children:[n.jsx(ua,{className:"highlight-box__icon"}),n.jsxs("p",{className:"highlight-box__text",children:[n.jsx("em",{children:'"Rails зробив мене у 10 разів продуктивнішим. Не тому що я став кращим — а тому що фреймворк перестав заважати."'}),n.jsx("br",{}),n.jsx("small",{style:{opacity:.7},children:"— типовий Rails-розробник після місяця на Java"})]})]})]})]})]})})}function Ox(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:jt,title:"CoC: що якщо порушити?",subtitle:"Звідки Rails знає — і що буде якщо не слідувати"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-secondary mb-sm",style:{fontSize:"var(--fs-body-sm)"},children:"Три головні домовленості — і що доведеться писати руками:"}),n.jsxs("div",{className:"info-card info-card--blue mb-sm",children:[n.jsx("h3",{className:"info-card__title",children:"1. Модель → таблиця"}),n.jsxs("p",{className:"info-card__text",children:[n.jsx("code",{children:"Post"})," → таблиця ",n.jsx("code",{children:"posts"})," (автоматично)",n.jsx("br",{}),"Але якщо назвати ",n.jsx("code",{children:"PostModel"}),":"]}),n.jsx(g,{language:"ruby",children:`class PostModel < ApplicationRecord
    # Rails шукає таблицю "post_models"
    # Треба вказати вручну:
    self.table_name = "posts"
  end`})]}),n.jsxs("div",{className:"info-card info-card--purple mb-sm",children:[n.jsx("h3",{className:"info-card__title",children:"2. Контролер → завжди множина"}),n.jsxs("p",{className:"info-card__text",children:[n.jsx("code",{children:"PostsController"})," → норма",n.jsx("br",{}),"Але якщо назвати ",n.jsx("code",{children:"PostController"})," (без s):"]}),n.jsx(g,{language:"ruby",children:`# config/routes.rb
  # треба явно вказати контролер:
  resources :posts, controller: 'post'`})]}),n.jsxs("div",{className:"info-card info-card--green",children:[n.jsx("h3",{className:"info-card__title",children:"3. View → ім'я контролера + ім'я методу"}),n.jsxs("p",{className:"info-card__text",children:[n.jsx("code",{children:"posts#index"})," → шукає ",n.jsx("code",{children:"app/views/posts/index.html.erb"}),n.jsx("br",{}),"Якщо папка ",n.jsx("code",{children:"post/"})," або метод називається інакше:"]}),n.jsx(g,{language:"ruby",children:`def index
    @posts = Post.all
    # треба вказати шаблон явно:
    render 'post/all'
  end`})]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"info-card info-card--orange mb-sm",children:[n.jsx("h3",{className:"info-card__title",children:"Звідки Rails знає ці домовленості?"}),n.jsx("p",{className:"info-card__text",children:"Все це вшито в сам фреймворк і задокументовано в офіційних гайдах. Три ключові механізми:"})]}),n.jsxs("div",{className:"step-list",children:[n.jsx("div",{className:"step-list__item step-list__item--blue",children:n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"ActiveSupport::Inflector"}),n.jsxs("p",{className:"step-list__text",children:["Відповідає за плюралізацію: ",n.jsx("code",{children:"Post"})," → ",n.jsx("code",{children:"posts"}),", ",n.jsx("code",{children:"Person"})," → ",n.jsx("code",{children:"people"}),", ",n.jsx("code",{children:"Sheep"})," → ",n.jsx("code",{children:"sheep"}),". Знає англійські винятки."]})]})}),n.jsx("div",{className:"step-list__item step-list__item--purple",children:n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"Naming Conventions"}),n.jsxs("p",{className:"step-list__text",children:["Контролери — завжди множина (",n.jsx("code",{children:"PostsController"}),"). Моделі — завжди однина (",n.jsx("code",{children:"Post"}),"). Таблиці — завжди множина (",n.jsx("code",{children:"posts"}),")."]})]})}),n.jsx("div",{className:"step-list__item step-list__item--green",children:n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"Implicit Render"}),n.jsxs("p",{className:"step-list__text",children:["Якщо метод контролера не викликає ",n.jsx("code",{children:"render"})," явно — Rails сам шукає шаблон за схемою ",n.jsx("code",{children:"views/контролер/метод.html.erb"}),"."]})]})}),n.jsx("div",{className:"step-list__item step-list__item--orange",children:n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:"Де це прописано?"}),n.jsxs("p",{className:"step-list__text",children:[n.jsx("strong",{children:"guides.rubyonrails.org"})," → Active Record Basics → Naming Conventions. Повна таблиця всіх домовленостей."]})]})})]})]})]})]})})}function Dx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:De,title:"Підсумок лекції",subtitle:"Що ми дізналися сьогодні"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsx("div",{children:n.jsx("div",{className:"step-list",children:[{title:"Rails — фреймворк для швидкої розробки",text:"Convention over Configuration, DRY — два принципи що змінюють все",color:"green"},{title:"rails new → готовий проєкт",text:"Структура, сервер, БД, маршрутизація — з коробки",color:"blue"},{title:"MVC: три ролі, чітке розділення",text:"Model — дані, Controller — логіка, View — відображення",color:"purple"},{title:"Scaffold — CRUD за одну команду",text:"7 маршрутів, контролер, 6 шаблонів, модель, міграція",color:"orange"},{title:"Active Record — SQL без SQL",text:"Post.all, Post.find(1), post.save — Ruby замість запитів",color:"cyan"}].map((e,s)=>n.jsxs("div",{className:`step-list__item step-list__item--${e.color}`,children:[n.jsx("div",{className:`step-list__number step-list__number--${e.color}`,children:s+1}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:e.title}),n.jsx("p",{className:"step-list__text",children:e.text})]})]},s))})}),n.jsxs("div",{children:[n.jsxs("div",{className:"info-card info-card--blue mb-md",children:[n.jsx("h3",{className:"info-card__title",children:"📚 Корисні ресурси"}),n.jsxs("p",{className:"info-card__text",children:[n.jsx("strong",{children:"guides.rubyonrails.org"})," — офіційні гайди (найкраща документація фреймворку)",n.jsx("p",{}),n.jsx("strong",{children:"api.rubyonrails.org"})," — повний API",n.jsx("p",{}),n.jsx("strong",{children:"gorails.com"})," — відеоскрінкасти"]})]}),n.jsxs("div",{className:"highlight-box highlight-box--purple",children:[n.jsx(En,{className:"highlight-box__icon"}),n.jsxs("p",{className:"highlight-box__text",children:[n.jsx("strong",{children:"Наступна лекція:"})," Маршрутизація та контролери — RESTful підхід, nested routes, before_action, strong parameters, flash messages."]})]})]})]})]})})}const Ix=[{id:1,title:"Титульний слайд",component:jx},{id:2,title:"Мета заняття",component:vx},{id:3,title:"Що таке Rails?",component:Nx},{id:4,title:"Встановлення Rails",component:bx},{id:5,title:"Структура проєкту",component:kx},{id:6,title:"MVC-архітектура",component:wx},{id:7,title:"Scaffold — магія Rails",component:Sx},{id:8,title:"Згенерований контролер",component:Rx},{id:9,title:"Маршрути — routes.rb",component:Ex},{id:10,title:"View — ERB-шаблони",component:Cx},{id:11,title:"Model — Active Record",component:zx},{id:12,title:"Rails Console",component:Tx},{id:13,title:"Генератори Rails",component:Px},{id:14,title:"Міграції та Seeds",component:Lx},{id:15,title:"Практика: Блог за 30 хв",component:Mx},{id:16,title:"Convention vs Config",component:Ax},{id:17,title:"CoC: що якщо порушити?",component:Ox},{id:18,title:"Підсумок",component:Dx}];function Hx(){return n.jsx(vt,{slides:Ix})}const Bx=[{id:1,title:"Титульний слайд",component:Fx},{id:2,title:"Мета заняття",component:Ux},{id:3,title:"RuboCop — стиль коду",component:Vx},{id:4,title:"Що таке маршрутизація?",component:Wx},{id:5,title:"HTTP-методи та REST",component:Qx},{id:6,title:"resources — 7 маршрутів",component:Gx},{id:7,title:"Вкладені маршрути",component:Yx},{id:8,title:"member / collection",component:qx},{id:9,title:"namespace та concern",component:Kx},{id:10,title:"Контролер — структура",component:Jx},{id:11,title:"params — параметри запиту",component:Xx},{id:12,title:"before_action",component:Zx},{id:13,title:"Strong Parameters",component:e_},{id:14,title:"render vs redirect_to",component:n_},{id:15,title:"Flash-повідомлення",component:s_},{id:16,title:"respond_to: HTML та JSON",component:t_},{id:17,title:"Підсумок",component:l_}];function $x(){return n.jsx(vt,{slides:Bx})}function Fx(){return n.jsxs("div",{className:"slide slide--centered slide--gradient-blue-purple",children:[n.jsx("div",{className:"title-slide__icon-wrapper",children:n.jsx(Vd,{})}),n.jsx("h1",{className:"title-slide__title",children:"Маршрутизація та контролери"}),n.jsx("h2",{className:"title-slide__subtitle",children:"Routing & Controllers"}),n.jsx("p",{className:"title-slide__english",children:"RESTful підхід, nested routes, before_action, strong parameters"}),n.jsx("div",{className:"title-slide__badge",children:n.jsx("p",{children:"Лекція 5 · Ruby on Rails"})})]})}function Ux(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Rs,title:"Мета заняття",subtitle:"Learning Objectives"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsx(D,{icon:Gn,title:"REST та маршрутизація",description:"Зрозуміти RESTful підхід: чому URL — це ресурс, а HTTP-метод — це дія. resources, nested routes, member/collection",color:"blue",delay:1}),n.jsx(D,{icon:jt,title:"Контролери вручну",description:"Створити контролер Articles без scaffold: всі 7 CRUD-дій, params, render, redirect_to",color:"green",delay:2}),n.jsx(D,{icon:Ss,title:"before_action та Strong Params",description:"DRY-принцип у контролері: уникнути дублювання коду та захистити додаток від масового призначення",color:"purple",delay:3}),n.jsx(D,{icon:de,title:"Flash та respond_to",description:"Сповіщати користувача про результат дії. Повертати HTML або JSON залежно від запиту",color:"orange",delay:4})]})]})})}function Vx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Wh,title:"RuboCop — стиль коду",subtitle:"Linter & formatter built into Rails"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"definition definition--blue mb-md",children:[n.jsx("p",{className:"definition__term definition__term--blue",children:"RuboCop"}),n.jsxs("p",{className:"definition__description",children:["Статичний аналізатор та форматер Ruby-коду. Перевіряє відповідність",n.jsx("strong",{children:" Ruby Style Guide"})," — відступи, довжина рядків, пробіли, найменування та інше."]})]}),n.jsxs("div",{className:"info-card info-card--green mb-md",children:[n.jsx("h3",{className:"info-card__title",children:"🎁 rubocop-rails-omakase"}),n.jsxs("p",{className:"info-card__text mb-md",children:["Починаючи з ",n.jsx("strong",{children:"Rails 8"}),", новий проєкт одразу містить gem",n.jsx("code",{children:" rubocop-rails-omakase"})," у Gemfile — конфігурація від ",n.jsx("strong",{children:"DHH"})," (David Heinemeier Hansson, творець Rails). «Omakase» (おまかせ) — японське «довірся шефу»: не витрачай час на налаштування, просто довірся вибору Rails-команди."]}),n.jsxs("div",{className:"code-block",children:[n.jsx("span",{className:"code-block__comment",children:"# Gemfile (генерується автоматично)"}),`
`,"group ",n.jsx("span",{className:"code-block__string",children:":development"})," ",n.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"  ","gem ",n.jsx("span",{className:"code-block__string",children:'"rubocop-rails-omakase"'}),", require: ",n.jsx("span",{className:"code-block__keyword",children:"false"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"end"})]})]}),n.jsxs("div",{className:"code-block",children:[n.jsx("span",{className:"code-block__comment",children:"# .rubocop.yml (також генерується)"}),`
`,"inherit_gem:",`
`,"  ","rubocop-rails-omakase: rubocop.yml"]}),n.jsxs("div",{className:"outlined-card outlined-card--blue mt-md",style:{padding:"0.75rem 1rem"},children:[n.jsxs("p",{style:{margin:0,fontSize:"0.85rem",color:"var(--text-secondary)"},children:[n.jsx("strong",{style:{color:"var(--accent-blue-text)"},children:"inherit_gem"})," — бере всі правила з gem-а як базові. У локальному ",n.jsx("code",{children:".rubocop.yml"})," можна лише перевизначити або вимкнути окремі з них:"]}),n.jsxs("div",{className:"code-block mt-md",style:{fontSize:"0.8rem"},children:[n.jsx("span",{className:"code-block__comment",children:"# вимкнути конкретне правило"}),`
`,"Style/StringLiterals:",`
`,"  ","Enabled: ",n.jsx("span",{className:"code-block__keyword",children:"false"})]})]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"info-card info-card--purple mb-md",children:[n.jsx("h3",{className:"info-card__title",children:"⌨️ Основні команди"}),n.jsx("div",{className:"step-list",children:[{color:"blue",cmd:"bundle exec rubocop",desc:"Перевірити весь проєкт"},{color:"green",cmd:"bundle exec rubocop app/",desc:"Перевірити конкретну папку"},{color:"orange",cmd:"bundle exec rubocop -a",desc:"Автовиправити безпечні порушення"},{color:"red",cmd:"bundle exec rubocop -A",desc:"Виправити всі (включно з небезпечними)"},{color:"purple",cmd:"bundle exec rubocop --only Style",desc:"Перевірити тільки один cop"}].map((e,s)=>n.jsx("div",{className:`step-list__item step-list__item--${e.color}`,children:n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{style:{fontFamily:"monospace",fontSize:"0.82rem",color:"var(--text-primary)",margin:0},children:e.cmd}),n.jsx("p",{style:{fontSize:"0.82rem",color:"var(--text-muted)",margin:0},children:e.desc})]})},s))})]}),n.jsxs("div",{className:"outlined-card outlined-card--orange",children:[n.jsx("p",{style:{fontWeight:600,color:"var(--accent-orange-text)",marginBottom:"0.5rem"},children:"Типові порушення у Rails-коді"}),n.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[n.jsxs("span",{className:"code-block__comment",children:["# ❌ Довгий рядок (",">"," 120 символів)"]}),`
`,n.jsx("span",{className:"code-block__comment",children:"# ❌ Зайві пробіли в кінці рядка"}),`
`,n.jsx("span",{className:"code-block__comment",children:"# ❌ def без дужок з аргументами"}),`
`,n.jsx("span",{className:"code-block__comment",children:"# ❌ Подвійні лапки замість одинарних"}),`
`,n.jsx("span",{className:"code-block__comment",children:"# ❌ Відсутній порожній рядок після class"})]})]})]})]})]})})}function Wx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Gn,title:"Що таке маршрутизація?",subtitle:"How Rails routes HTTP requests"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"definition definition--blue mb-md",children:[n.jsx("p",{className:"definition__term definition__term--blue",children:"Маршрутизатор (Router)"}),n.jsxs("p",{className:"definition__description",children:["Компонент Rails, який отримує HTTP-запит і вирішує: який контролер і яку дію викликати. Налаштовується у файлі ",n.jsx("code",{children:"config/routes.rb"}),"."]})]}),n.jsx("div",{className:"step-list",children:[{color:"blue",text:"Браузер надсилає GET /articles"},{color:"purple",text:"Router читає routes.rb"},{color:"green",text:"Викликає ArticlesController#index"},{color:"orange",text:"Контролер повертає відповідь"}].map((e,s)=>n.jsxs("div",{className:`step-list__item step-list__item--${e.color}`,children:[n.jsx("div",{className:`step-list__number step-list__number--${e.color}`,children:s+1}),n.jsx("div",{className:"step-list__content",children:n.jsx("p",{className:"step-list__description",children:e.text})})]},s))})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"info-card info-card--blue mb-md",children:[n.jsx("h3",{className:"info-card__title",children:"📄 config/routes.rb"}),n.jsxs("div",{className:"code-block",children:[n.jsx("span",{className:"code-block__keyword",children:"Rails"}),".application.routes.draw ",n.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"  ","resources ",n.jsx("span",{className:"code-block__string",children:":articles"}),`
`,"  ","root ",n.jsx("span",{className:"code-block__string",children:"'articles#index'"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"end"})]})]}),n.jsxs("div",{className:"highlight-box highlight-box--purple",children:[n.jsx(Ge,{className:"highlight-box__icon"}),n.jsxs("p",{className:"highlight-box__text",children:[n.jsx("strong",{children:"rake routes / rails routes"})," — переглянути всі маршрути додатку з префіксами, HTTP-методами та шляхами"]})]})]})]})]})})}function Qx(){const e=[{method:"GET",color:"blue",action:"Отримати дані",example:"GET /articles → список статей"},{method:"POST",color:"green",action:"Створити ресурс",example:"POST /articles → нова стаття"},{method:"PATCH",color:"orange",action:"Оновити частково",example:"PATCH /articles/1 → оновити"},{method:"PUT",color:"yellow",action:"Замінити ресурс",example:"PUT /articles/1 → повна заміна"},{method:"DELETE",color:"red",action:"Видалити ресурс",example:"DELETE /articles/1 → видалити"}];return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:aa,title:"HTTP-методи та REST",subtitle:"RESTful resource-oriented approach"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("p",{className:"info-card__text mb-md",children:[n.jsx("strong",{children:"REST"})," (Representational State Transfer) — підхід, де URL описує ",n.jsx("em",{children:"ресурс"}),", а HTTP-метод описує ",n.jsx("em",{children:"дію"})," над ним. Rails побудований навколо цього принципу."]}),n.jsx("div",{className:"step-list",children:e.map((s,t)=>n.jsxs("div",{className:`step-list__item step-list__item--${s.color}`,children:[n.jsx("span",{className:`badge badge--solid-${s.color}`,style:{minWidth:70,textAlign:"center"},children:s.method}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",style:{margin:0},children:s.action}),n.jsx("p",{className:"step-list__description",style:{fontSize:"0.85rem",color:"var(--text-muted)",margin:0},children:s.example})]})]},t))})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"info-card info-card--green mb-md",children:[n.jsx("h3",{className:"info-card__title",children:"💡 Ключова ідея REST"}),n.jsx("p",{className:"info-card__text",children:"URL — іменник (що?), HTTP-метод — дієслово (як?)."}),n.jsxs("div",{className:"code-block mt-md",children:[n.jsx("span",{className:"code-block__comment",children:"# НЕ-RESTful (старий стиль)"}),`
`,"GET /getArticles",`
`,"GET /deleteArticle?id=1",`

`,n.jsx("span",{className:"code-block__comment",children:"# RESTful (Rails-стиль)"}),`
`,"GET    /articles",`
`,"DELETE /articles/1"]})]}),n.jsxs("div",{className:"highlight-box highlight-box--blue mb-md",children:[n.jsx(Gn,{className:"highlight-box__icon"}),n.jsxs("p",{className:"highlight-box__text",children:["HTML-форми підтримують лише GET і POST. Rails емулює PATCH/DELETE через приховане поле ",n.jsx("strong",{children:"_method"})]})]}),n.jsxs("div",{className:"highlight-box highlight-box--yellow",children:[n.jsx(ma,{className:"highlight-box__icon"}),n.jsxs("p",{className:"highlight-box__text",children:[n.jsx("strong",{children:"PATCH vs PUT у Rails:"})," ",n.jsx("code",{children:"resources :articles"})," генерує маршрут ",n.jsx("strong",{children:"PATCH"})," для update (часткове оновлення). PUT також приймається як аліас, але PATCH — preferred з Rails 4+."]})]})]})]})]})})}function Gx(){const e=[{verb:"GET",path:"/articles",action:"index",desc:"Список всіх статей",color:"blue"},{verb:"GET",path:"/articles/new",action:"new",desc:"Форма нової статті",color:"green"},{verb:"POST",path:"/articles",action:"create",desc:"Створити статтю",color:"green"},{verb:"GET",path:"/articles/:id",action:"show",desc:"Показати одну статтю",color:"blue"},{verb:"GET",path:"/articles/:id/edit",action:"edit",desc:"Форма редагування",color:"orange"},{verb:"PATCH",path:"/articles/:id",action:"update",desc:"Оновити статтю",color:"orange"},{verb:"DELETE",path:"/articles/:id",action:"destroy",desc:"Видалити статтю",color:"red"}],s={blue:"#3b82f6",green:"#22c55e",orange:"#f97316",red:"#ef4444"};return n.jsx("div",{className:"slide slide--compact",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Ge,title:"resources — 7 маршрутів",subtitle:"One line → full CRUD routing"}),n.jsx("div",{className:"info-card info-card--blue mb-md",style:{padding:"0.75rem 1rem"},children:n.jsxs("div",{className:"code-block",style:{margin:0},children:["resources ",n.jsx("span",{className:"code-block__string",children:":articles"}),"  ",n.jsx("span",{className:"code-block__comment",children:"# одна лінія генерує 7 маршрутів"})]})}),n.jsx("div",{style:{overflowX:"auto"},children:n.jsxs("table",{style:{width:"100%",borderCollapse:"separate",borderSpacing:"0 4px",fontSize:"0.9rem"},children:[n.jsx("thead",{children:n.jsx("tr",{children:["HTTP метод","URL","Action","Призначення"].map(t=>n.jsx("th",{style:{textAlign:"left",padding:"4px 10px",color:"var(--text-muted)",fontWeight:600,fontSize:"0.8rem"},children:t},t))})}),n.jsx("tbody",{children:e.map((t,l)=>n.jsxs("tr",{style:{background:"var(--bg-card)",borderRadius:8},children:[n.jsx("td",{style:{padding:"6px 10px",borderLeft:`3px solid ${s[t.color]}`,borderRadius:"6px 0 0 6px"},children:n.jsx("span",{className:`badge badge--solid-${t.color}`,style:{minWidth:60,textAlign:"center",fontSize:"0.75rem"},children:t.verb})}),n.jsx("td",{style:{padding:"6px 10px",fontFamily:"var(--font-mono, monospace)",fontSize:"0.85rem",color:"var(--text-primary)"},children:t.path}),n.jsx("td",{style:{padding:"6px 10px"},children:n.jsx("span",{className:`badge badge--${t.color}`,children:t.action})}),n.jsx("td",{style:{padding:"6px 10px",color:"var(--text-secondary)",fontSize:"0.85rem"},children:t.desc})]},l))})]})}),n.jsxs("div",{className:"slide-grid slide-grid--2col mt-md",children:[n.jsxs("div",{className:"highlight-box highlight-box--green",children:[n.jsx(de,{className:"highlight-box__icon"}),n.jsxs("p",{className:"highlight-box__text",children:[n.jsx("strong",{children:"Prefix-хелпери:"})," articles_path, new_article_path, edit_article_path(@article), article_path(@article) — замість хардкоду URL у шаблонах"]})]}),n.jsxs("div",{className:"info-card info-card--blue",style:{padding:"0.75rem 1rem"},children:[n.jsx("h3",{className:"info-card__title",children:"rails routes"}),n.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[n.jsx("span",{className:"code-block__comment",children:"# Всі маршрути"}),`
`,"rails routes",`

`,n.jsx("span",{className:"code-block__comment",children:"# Фільтр по контролеру"}),`
`,"rails routes -c articles",`

`,n.jsx("span",{className:"code-block__comment",children:"# Пошук по URL"}),`
`,"rails routes -g /articles"]})]})]}),n.jsxs("div",{className:"info-card info-card--orange mt-md",style:{padding:"0.75rem 1rem"},children:[n.jsx("h3",{className:"info-card__title",children:"Не потрібні всі 7?"}),n.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[n.jsx("span",{className:"code-block__comment",children:"# Лише вказані"}),`
`,"resources ",n.jsx("span",{className:"code-block__string",children:":articles"}),",",`
`,"  ","only: [",n.jsx("span",{className:"code-block__string",children:":index"}),", ",n.jsx("span",{className:"code-block__string",children:":show"}),"]",`

`,n.jsx("span",{className:"code-block__comment",children:"# Всі крім вказаних"}),`
`,"resources ",n.jsx("span",{className:"code-block__string",children:":articles"}),",",`
`,"  ","except: [",n.jsx("span",{className:"code-block__string",children:":destroy"}),"]",`

`,n.jsx("span",{className:"code-block__comment",children:"# Або вручну"}),`
`,"get ",n.jsx("span",{className:"code-block__string",children:"'/articles'"}),", to: ",n.jsx("span",{className:"code-block__string",children:"'articles#index'"}),`
`,"post ",n.jsx("span",{className:"code-block__string",children:"'/articles'"}),", to: ",n.jsx("span",{className:"code-block__string",children:"'articles#create'"})]})]})]})})}function Yx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Ul,title:"Вкладені маршрути",subtitle:"Nested routes — ієрархія ресурсів"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"definition definition--purple mb-md",children:[n.jsx("p",{className:"definition__term definition__term--purple",children:"Навіщо nested routes?"}),n.jsxs("p",{className:"definition__description",children:["Коли ресурс логічно належить іншому ресурсу. Наприклад, коментар завжди належить статті: ",n.jsx("code",{children:"/articles/1/comments"})]})]}),n.jsxs("div",{className:"code-block mb-md",children:[n.jsx("span",{className:"code-block__comment",children:"# routes.rb"}),`
`,"resources ",n.jsx("span",{className:"code-block__string",children:":articles"})," ",n.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"  ","resources ",n.jsx("span",{className:"code-block__string",children:":comments"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"end"})]}),n.jsx("div",{className:"step-list",children:[{color:"blue",path:"GET  /articles/:article_id/comments",action:"comments#index"},{color:"green",path:"POST /articles/:article_id/comments",action:"comments#create"},{color:"orange",path:"DELETE /articles/:article_id/comments/:id",action:"comments#destroy"}].map((e,s)=>n.jsx("div",{className:`step-list__item step-list__item--${e.color}`,children:n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{style:{fontFamily:"monospace",fontSize:"0.8rem",color:"var(--text-primary)",margin:0},children:e.path}),n.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",margin:0},children:["→ ",e.action]})]})},s))})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"info-card info-card--green mb-md",children:[n.jsx("h3",{className:"info-card__title",children:"У контролері"}),n.jsxs("div",{className:"code-block",children:[n.jsx("span",{className:"code-block__keyword",children:"class"})," CommentsController ","<"," ApplicationController",`

`,"  ","before_action ",n.jsx("span",{className:"code-block__string",children:":set_article"}),`

`,"  ",n.jsx("span",{className:"code-block__keyword",children:"def"})," create",`
`,"    ","@comment = @article.comments.build(comment_params)",`
`,"    ","@comment.save",`
`,"    ","redirect_to @article",`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,"  ","private",`

`,"  ",n.jsx("span",{className:"code-block__keyword",children:"def"})," set_article",`
`,"    ","@article = Article.find(params[",n.jsx("span",{className:"code-block__string",children:":article_id"}),"])",`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"end"})]})]}),n.jsxs("div",{className:"highlight-box highlight-box--yellow",children:[n.jsx(ma,{className:"highlight-box__icon"}),n.jsxs("p",{className:"highlight-box__text",children:[n.jsx("strong",{children:"Не більше 1 рівня вкладеності"})," — інакше URL стає довгим і незручним. /articles/:article_id/comments/:id — ок. Глибше — погана практика."]})]})]})]})]})})}function qx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:ch,title:"member / collection",subtitle:"Custom routes beyond standard CRUD"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"definition definition--blue mb-md",children:[n.jsx("p",{className:"definition__term definition__term--blue",children:"collection"}),n.jsxs("p",{className:"definition__description",children:["Дія над ",n.jsx("strong",{children:"всією колекцією"})," ресурсів (без :id). Наприклад: всі опубліковані статті."]})]}),n.jsxs("div",{className:"code-block mb-md",children:["resources ",n.jsx("span",{className:"code-block__string",children:":articles"})," ",n.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"  ","collection ",n.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"    ","get ",n.jsx("span",{className:"code-block__string",children:":published"}),`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,n.jsx("span",{className:"code-block__comment",children:"# Генерує:"}),`
`,n.jsx("span",{className:"code-block__comment",children:"# GET /articles/published"}),`
`,n.jsx("span",{className:"code-block__comment",children:"# → articles#published"})]}),n.jsxs("div",{className:"code-block",children:[n.jsx("span",{className:"code-block__comment",children:"# У шаблоні:"}),`
`,"<","%= link_to ",n.jsx("span",{className:"code-block__string",children:"'Опубліковані'"}),",",`
`,"       ","published_articles_path %",">"]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"definition definition--purple mb-md",children:[n.jsx("p",{className:"definition__term definition__term--purple",children:"member"}),n.jsxs("p",{className:"definition__description",children:["Дія над ",n.jsx("strong",{children:"конкретним ресурсом"})," (з :id). Наприклад: опублікувати одну статтю."]})]}),n.jsxs("div",{className:"code-block mb-md",children:["resources ",n.jsx("span",{className:"code-block__string",children:":articles"})," ",n.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"  ","member ",n.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"    ","patch ",n.jsx("span",{className:"code-block__string",children:":publish"}),`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,n.jsx("span",{className:"code-block__comment",children:"# Генерує:"}),`
`,n.jsx("span",{className:"code-block__comment",children:"# PATCH /articles/:id/publish"}),`
`,n.jsx("span",{className:"code-block__comment",children:"# → articles#publish"})]}),n.jsxs("div",{className:"code-block",children:[n.jsx("span",{className:"code-block__comment",children:"# У шаблоні:"}),`
`,"<","%= link_to ",n.jsx("span",{className:"code-block__string",children:"'Опублікувати'"}),",",`
`,"       ","publish_article_path(@article),",`
`,"       ","method: ",n.jsx("span",{className:"code-block__string",children:":patch"})," %",">"]})]})]})]})})}function Kx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Pe,title:"namespace та concern",subtitle:"Grouping routes — адмінка та повторювані блоки"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"definition definition--blue mb-md",children:[n.jsx("p",{className:"definition__term definition__term--blue",children:"namespace"}),n.jsxs("p",{className:"definition__description",children:["Групує маршрути під спільний префікс URL і модуль контролера. Типовий випадок — адмін-панель: ",n.jsx("code",{children:"/admin/articles"}),"."]})]}),n.jsxs("div",{className:"code-block mb-md",children:[n.jsx("span",{className:"code-block__comment",children:"# routes.rb"}),`
`,"namespace ",n.jsx("span",{className:"code-block__string",children:":admin"})," ",n.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"  ","resources ",n.jsx("span",{className:"code-block__string",children:":articles"}),`
`,"  ","resources ",n.jsx("span",{className:"code-block__string",children:":users"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,n.jsx("span",{className:"code-block__comment",children:"# Генерує:"}),`
`,n.jsx("span",{className:"code-block__comment",children:"# GET /admin/articles → Admin::ArticlesController#index"}),`
`,n.jsx("span",{className:"code-block__comment",children:"# GET /admin/users   → Admin::UsersController#index"})]}),n.jsxs("div",{className:"code-block",children:[n.jsx("span",{className:"code-block__comment",children:"# app/controllers/admin/articles_controller.rb"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"module"})," Admin",`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"class"})," ArticlesController ","<"," ApplicationController",`
`,"    ",n.jsx("span",{className:"code-block__keyword",children:"def"})," index",`
`,"      ","@articles = Article.all",`
`,"    ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"end"})]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"definition definition--purple mb-md",children:[n.jsx("p",{className:"definition__term definition__term--purple",children:"concern"}),n.jsxs("p",{className:"definition__description",children:["Виносить повторюваний блок маршрутів у іменований concern — щоб не дублювати однакові ",n.jsx("code",{children:"member/collection"})," у кількох ресурсах."]})]}),n.jsxs("div",{className:"code-block mb-md",children:[n.jsx("span",{className:"code-block__comment",children:"# Визначити concern"}),`
`,"concern ",n.jsx("span",{className:"code-block__string",children:":commentable"})," ",n.jsx("span",{className:"code-block__keyword",children:"do"}),`
`,"  ","resources ",n.jsx("span",{className:"code-block__string",children:":comments"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,n.jsx("span",{className:"code-block__comment",children:"# Використати у кількох ресурсах"}),`
`,"resources ",n.jsx("span",{className:"code-block__string",children:":articles"}),", concerns: ",n.jsx("span",{className:"code-block__string",children:":commentable"}),`
`,"resources ",n.jsx("span",{className:"code-block__string",children:":posts"}),",    concerns: ",n.jsx("span",{className:"code-block__string",children:":commentable"}),`

`,n.jsx("span",{className:"code-block__comment",children:"# Еквівалентно nested routes у обох"})]}),n.jsxs("div",{className:"highlight-box highlight-box--purple",children:[n.jsx(Pe,{className:"highlight-box__icon"}),n.jsxs("p",{className:"highlight-box__text",children:[n.jsx("strong",{children:"namespace"})," стане в нагоді коли будете розмежовувати ролі: звичайний користувач і адміністратор мають різні контролери під різними URL"]})]})]})]})]})})}function Jx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:oa,title:"Контролер — структура",subtitle:"Anatomy of a Rails controller"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsx("div",{children:n.jsxs("div",{className:"code-block",style:{fontSize:"0.82rem"},children:[n.jsx("span",{className:"code-block__keyword",children:"class"})," ArticlesController ","<"," ApplicationController",`

`,"  ","before_action ",n.jsx("span",{className:"code-block__string",children:":set_article"}),",",`
`,"             ","only: [",n.jsx("span",{className:"code-block__string",children:":show"}),", ",n.jsx("span",{className:"code-block__string",children:":edit"}),", ",n.jsx("span",{className:"code-block__string",children:":update"}),", ",n.jsx("span",{className:"code-block__string",children:":destroy"}),"]",`

`,"  ",n.jsx("span",{className:"code-block__comment",children:"# GET /articles"}),`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"def"})," index",`
`,"    ","@articles = Article.all",`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,"  ",n.jsx("span",{className:"code-block__comment",children:"# GET /articles/:id"}),`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"def"})," show; ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,"  ",n.jsx("span",{className:"code-block__comment",children:"# GET /articles/new"}),`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"def"})," new",`
`,"    ","@article = Article.new",`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,"  ",n.jsx("span",{className:"code-block__comment",children:"# POST /articles"}),`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"def"})," create",`
`,"    ","@article = Article.new(article_params)",`
`,"    ",n.jsx("span",{className:"code-block__keyword",children:"if"})," @article.save",`
`,"      ","redirect_to @article, notice: ",n.jsx("span",{className:"code-block__string",children:"'Створено!'"}),`
`,"    ",n.jsx("span",{className:"code-block__keyword",children:"else"}),`
`,"      ","render ",n.jsx("span",{className:"code-block__string",children:":new"}),", status: ",n.jsx("span",{className:"code-block__string",children:":unprocessable_entity"}),`
`,"    ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"end"})]})}),n.jsx("div",{children:n.jsxs("div",{className:"code-block mb-md",style:{fontSize:"0.82rem"},children:["  ",n.jsx("span",{className:"code-block__comment",children:"# PATCH /articles/:id"}),`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"def"})," update",`
`,"    ",n.jsx("span",{className:"code-block__keyword",children:"if"})," @article.update(article_params)",`
`,"      ","redirect_to @article, notice: ",n.jsx("span",{className:"code-block__string",children:"'Оновлено!'"}),`
`,"    ",n.jsx("span",{className:"code-block__keyword",children:"else"}),`
`,"      ","render ",n.jsx("span",{className:"code-block__string",children:":edit"}),", status: ",n.jsx("span",{className:"code-block__string",children:":unprocessable_entity"}),`
`,"    ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,"  ",n.jsx("span",{className:"code-block__comment",children:"# DELETE /articles/:id"}),`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"def"})," destroy",`
`,"    ","@article.destroy",`
`,"    ","redirect_to articles_path, notice: ",n.jsx("span",{className:"code-block__string",children:"'Видалено!'"}),`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,"  ","private",`

`,"  ",n.jsx("span",{className:"code-block__keyword",children:"def"})," set_article",`
`,"    ","@article = Article.find(params[",n.jsx("span",{className:"code-block__string",children:":id"}),"])",`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,"  ",n.jsx("span",{className:"code-block__keyword",children:"def"})," article_params",`
`,"    ",n.jsx("span",{className:"code-block__comment",children:"# Rails 8+"}),`
`,"    ","params.expect(article: [",n.jsx("span",{className:"code-block__string",children:":title"}),", ",n.jsx("span",{className:"code-block__string",children:":body"}),"])",`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"end"})]})})]})]})})}function Xx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Ge,title:"params — параметри запиту",subtitle:"How data reaches the controller"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"definition definition--blue mb-md",children:[n.jsx("p",{className:"definition__term definition__term--blue",children:"params"}),n.jsx("p",{className:"definition__description",children:"Хеш з усіма параметрами поточного запиту: з URL, query string і тіла форми. Доступний у будь-якому action контролера."})]}),n.jsxs("div",{className:"code-block mb-md",children:[n.jsx("span",{className:"code-block__comment",children:"# 1. URL-параметр (з маршруту)"}),`
`,n.jsx("span",{className:"code-block__comment",children:"# GET /articles/42"}),`
`,"params[",n.jsx("span",{className:"code-block__string",children:":id"}),"] ",n.jsx("span",{className:"code-block__comment",children:'# → "42"'}),`

`,n.jsx("span",{className:"code-block__comment",children:"# 2. Query string"}),`
`,n.jsx("span",{className:"code-block__comment",children:"# GET /articles?page=2&q=rails"}),`
`,"params[",n.jsx("span",{className:"code-block__string",children:":page"}),"] ",n.jsx("span",{className:"code-block__comment",children:'# → "2"'}),`
`,"params[",n.jsx("span",{className:"code-block__string",children:":q"}),"]    ",n.jsx("span",{className:"code-block__comment",children:'# → "rails"'}),`

`,n.jsx("span",{className:"code-block__comment",children:"# 3. Тіло форми (POST)"}),`
`,n.jsx("span",{className:"code-block__comment",children:"# article[title]=Hello&article[body]=World"}),`
`,"params[",n.jsx("span",{className:"code-block__string",children:":article"}),"][",n.jsx("span",{className:"code-block__string",children:":title"}),"] ",n.jsx("span",{className:"code-block__comment",children:'# → "Hello"'})]}),n.jsxs("div",{className:"highlight-box highlight-box--yellow",children:[n.jsx(ma,{className:"highlight-box__icon"}),n.jsxs("p",{className:"highlight-box__text",children:["Всі значення params приходять як ",n.jsx("strong",{children:"рядки"})," — навіть числа.",n.jsx("code",{children:" params[:id]"})," → ",n.jsx("code",{children:'"42"'}),", не ",n.jsx("code",{children:"42"}),". ActiveRecord сам конвертує при ",n.jsx("code",{children:"find"}),"."]})]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"info-card info-card--green mb-md",children:[n.jsx("h3",{className:"info-card__title",children:"form_with та params"}),n.jsxs("p",{className:"info-card__text mb-md",style:{fontSize:"0.85rem"},children:[n.jsx("code",{children:"form_with model: @article"})," автоматично групує поля під ключем моделі. Тому params приходять як вкладений хеш — саме тому ",n.jsx("code",{children:"params.expect(article: [...])"})," шукає ключ ",n.jsx("code",{children:":article"}),":"]}),n.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[n.jsx("span",{className:"code-block__comment",children:"# params виглядає так:"}),`
`,"{",`
`,"  ","article: ","{",`
`,"    ","title: ",n.jsx("span",{className:"code-block__string",children:'"Hello"'}),",",`
`,"    ","body: ",n.jsx("span",{className:"code-block__string",children:'"World"'}),`
`,"  ","}",`
`,"}"]})]}),n.jsxs("div",{className:"info-card info-card--purple",children:[n.jsx("h3",{className:"info-card__title",children:"Дебаг params"}),n.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[n.jsx("span",{className:"code-block__comment",children:"# Зупинити і побачити що прийшло"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"def"})," create",`
`,"  ","raise params.inspect",`
`,"  ",n.jsx("span",{className:"code-block__comment",children:"# кидає виняток — у браузері видно хеш"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"end"}),`

`,n.jsx("span",{className:"code-block__comment",children:"# Або просто дивитися логи сервера —"}),`
`,n.jsx("span",{className:"code-block__comment",children:"# rails s виводить params кожного запиту"})]})]})]})]})]})})}function Zx(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Un,title:"before_action",subtitle:"DRY — Don't Repeat Yourself у контролері"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"definition definition--orange mb-md",children:[n.jsx("p",{className:"definition__term definition__term--orange",children:"before_action"}),n.jsxs("p",{className:"definition__description",children:["Метод-фільтр, який виконується ",n.jsx("strong",{children:"перед"})," вказаними (або всіма) діями контролера. Використовується для уникнення дублювання і перевірок."]})]}),n.jsxs("div",{className:"code-block mb-md",children:[n.jsx("span",{className:"code-block__comment",children:"# Без before_action — дублювання"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"def"})," show",`
`,"  ","@article = Article.find(params[",n.jsx("span",{className:"code-block__string",children:":id"}),"])",`
`,n.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"def"})," edit",`
`,"  ","@article = Article.find(params[",n.jsx("span",{className:"code-block__string",children:":id"}),"])",`
`,n.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"def"})," update",`
`,"  ","@article = Article.find(params[",n.jsx("span",{className:"code-block__string",children:":id"}),"])",`
`,n.jsx("span",{className:"code-block__keyword",children:"end"})]}),n.jsxs("div",{className:"code-block",children:[n.jsx("span",{className:"code-block__comment",children:"# З before_action — DRY ✅"}),`
`,"before_action ",n.jsx("span",{className:"code-block__string",children:":set_article"}),",",`
`,"  ","only: [",n.jsx("span",{className:"code-block__string",children:":show"}),", ",n.jsx("span",{className:"code-block__string",children:":edit"}),", ",n.jsx("span",{className:"code-block__string",children:":update"}),", ",n.jsx("span",{className:"code-block__string",children:":destroy"}),"]",`

`,"private",`
`,n.jsx("span",{className:"code-block__keyword",children:"def"})," set_article",`
`,"  ","@article = Article.find(params[",n.jsx("span",{className:"code-block__string",children:":id"}),"])",`
`,n.jsx("span",{className:"code-block__keyword",children:"end"})]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"info-card info-card--purple mb-md",children:[n.jsx("h3",{className:"info-card__title",children:"Параметри before_action"}),n.jsxs("div",{className:"code-block",children:[n.jsx("span",{className:"code-block__comment",children:"# Для конкретних дій"}),`
`,"before_action ",n.jsx("span",{className:"code-block__string",children:":authenticate!"}),",",`
`,"  ","only: [",n.jsx("span",{className:"code-block__string",children:":create"}),", ",n.jsx("span",{className:"code-block__string",children:":update"}),"]",`

`,n.jsx("span",{className:"code-block__comment",children:"# Для всіх дій крім"}),`
`,"before_action ",n.jsx("span",{className:"code-block__string",children:":authenticate!"}),",",`
`,"  ","except: [",n.jsx("span",{className:"code-block__string",children:":index"}),", ",n.jsx("span",{className:"code-block__string",children:":show"}),"]",`

`,n.jsx("span",{className:"code-block__comment",children:"# Для всіх дій"}),`
`,"before_action ",n.jsx("span",{className:"code-block__string",children:":authenticate!"})]})]}),n.jsx("div",{className:"step-list",children:[{color:"blue",title:"set_article",text:"Знайти запис у БД"},{color:"green",title:"authenticate!",text:"Перевірити авторизацію"},{color:"orange",title:"set_locale",text:"Встановити мову"},{color:"purple",title:"log_activity",text:"Логувати запити"}].map((e,s)=>n.jsx("div",{className:`step-list__item step-list__item--${e.color}`,style:{padding:"0.5rem 1rem"},children:n.jsx("div",{className:"step-list__content",children:n.jsxs("p",{className:"step-list__title",style:{margin:0,fontSize:"0.9rem"},children:[n.jsx("code",{children:e.title})," — ",e.text]})})},s))})]})]})]})})}function e_(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Ss,title:"Strong Parameters",subtitle:"Mass assignment protection"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"definition definition--red mb-md",children:[n.jsx("p",{className:"definition__term definition__term--red",children:"Проблема: Mass Assignment"}),n.jsxs("p",{className:"definition__description",children:["Форма реєстрації містить лише ",n.jsx("code",{children:"name"})," і ",n.jsx("code",{children:"email"}),". Але модель ",n.jsx("code",{children:"User"})," також має поле ",n.jsx("code",{children:"role"}),". Зловмисник може вручну додати його у POST-запит — і стати адміном."]})]}),n.jsxs("div",{className:"code-block mb-md",children:[n.jsx("span",{className:"code-block__comment",children:"# Зловмисник надсилає:"}),`
`,n.jsx("span",{className:"code-block__comment",children:"# user[name]=Bob&user[email]=b@b.com&user[role]=admin"}),`

`,n.jsx("span",{className:"code-block__comment",children:"# ✅ Rails 8+ — params.expect"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"def"})," user_params",`
`,"  ","params.expect(user: [",n.jsx("span",{className:"code-block__string",children:":name"}),", ",n.jsx("span",{className:"code-block__string",children:":email"}),", ",n.jsx("span",{className:"code-block__string",children:":password"}),"])",`
`,"  ",n.jsx("span",{className:"code-block__comment",children:"# :role буде проігноровано"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"end"})]}),n.jsxs("div",{className:"outlined-card outlined-card--purple",children:[n.jsx("p",{style:{fontWeight:600,color:"var(--accent-purple-text)",marginBottom:"0.5rem",fontSize:"0.85rem"},children:"Альтернатива — require / permit (всі версії Rails)"}),n.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[n.jsx("span",{className:"code-block__keyword",children:"def"})," user_params",`
`,"  ","params.require(",n.jsx("span",{className:"code-block__string",children:":user"}),")",`
`,"        ",".permit(",n.jsx("span",{className:"code-block__string",children:":name"}),", ",n.jsx("span",{className:"code-block__string",children:":email"}),", ",n.jsx("span",{className:"code-block__string",children:":password"}),")",`
`,n.jsx("span",{className:"code-block__keyword",children:"end"})]}),n.jsx("p",{style:{margin:"0.5rem 0 0",fontSize:"0.8rem",color:"var(--text-muted)"},children:"Працює у всіх версіях Rails — часто зустрінете у документації та Stack Overflow"})]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"info-card info-card--blue mb-md",children:[n.jsx("h3",{className:"info-card__title",children:"Як це працює"}),n.jsx("div",{className:"step-list",children:[{color:"blue",text:"params.expect(user: [...]) — вимагає ключ :user, інакше виняток"},{color:"green",text:"Список у масиві — білий список дозволених полів"},{color:"orange",text:"Решта полів (role, admin тощо) мовчки ігнорується"}].map((e,s)=>n.jsxs("div",{className:`step-list__item step-list__item--${e.color}`,style:{padding:"0.5rem 1rem"},children:[n.jsx("div",{className:`step-list__number step-list__number--${e.color}`,children:s+1}),n.jsx("div",{className:"step-list__content",children:n.jsx("p",{style:{margin:0,fontSize:"0.88rem",color:"var(--text-secondary)"},children:e.text})})]},s))})]}),n.jsxs("div",{className:"info-card info-card--purple",children:[n.jsx("h3",{className:"info-card__title",children:"Вкладені параметри"}),n.jsx("p",{className:"info-card__text mb-md",style:{fontSize:"0.85rem"},children:"Стаття може мати масив тегів та вкладений об'єкт SEO-даних:"}),n.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[n.jsx("span",{className:"code-block__keyword",children:"def"})," article_params",`
`,"  ","params.expect(",`
`,"    ","article: [",`
`,"      ",n.jsx("span",{className:"code-block__string",children:":title"}),", ",n.jsx("span",{className:"code-block__string",children:":body"}),", ",n.jsx("span",{className:"code-block__string",children:":published"}),",",`
`,"      ",n.jsx("span",{className:"code-block__comment",children:"# масив id тегів"}),`
`,"      ","{ ","tag_ids: []"," }",",",`
`,"      ",n.jsx("span",{className:"code-block__comment",children:"# вкладений об'єкт"}),`
`,"      ","{ ","seo_attributes: [",n.jsx("span",{className:"code-block__string",children:":title"}),", ",n.jsx("span",{className:"code-block__string",children:":description"}),"]"," }",`
`,"    ","]",`
`,"  ",")",`
`,n.jsx("span",{className:"code-block__keyword",children:"end"})]})]})]})]})]})})}function n_(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:aa,title:"render vs redirect_to",subtitle:"Two ways to respond to a request"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"info-card info-card--blue mb-md",children:[n.jsx("h3",{className:"info-card__title",children:"render — рендер шаблону"}),n.jsxs("p",{className:"info-card__text mb-md",children:["Повертає HTML у межах ",n.jsx("strong",{children:"одного HTTP-запиту"}),". @змінні контролера доступні у шаблоні."]}),n.jsxs("div",{className:"code-block",style:{fontSize:"0.82rem"},children:[n.jsx("span",{className:"code-block__keyword",children:"def"})," create",`
`,"  ","@article = Article.new(article_params)",`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"if"})," @article.save",`
`,"    ","redirect_to @article",`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"else"}),`
`,"    ",n.jsx("span",{className:"code-block__comment",children:"# @article зі помилками — HTTP 422"}),`
`,"    ","render ",n.jsx("span",{className:"code-block__string",children:":new"}),",",`
`,"           ","status: ",n.jsx("span",{className:"code-block__string",children:":unprocessable_entity"}),`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"end"})]})]}),n.jsxs("div",{className:"info-card info-card--purple",children:[n.jsx("h3",{className:"info-card__title",children:"HTTP-статуси"}),n.jsx("div",{className:"step-list",children:[{color:"green",code:"200 :ok",desc:"render за замовчуванням"},{color:"blue",code:"302 :found",desc:"redirect_to за замовчуванням"},{color:"cyan",code:"303 :see_other",desc:"redirect після POST/PATCH/DELETE (Rails 8+)"},{color:"orange",code:"422 :unprocessable_entity",desc:"render при помилці валідації"}].map((e,s)=>n.jsx("div",{className:`step-list__item step-list__item--${e.color}`,style:{padding:"0.4rem 0.75rem"},children:n.jsx("div",{className:"step-list__content",children:n.jsxs("p",{style:{margin:0,fontSize:"0.82rem"},children:[n.jsx("code",{style:{color:"var(--text-primary)"},children:e.code})," — ",n.jsx("span",{style:{color:"var(--text-muted)"},children:e.desc})]})})},s))})]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"info-card info-card--green mb-md",children:[n.jsx("h3",{className:"info-card__title",children:"redirect_to — варіанти"}),n.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[n.jsx("span",{className:"code-block__comment",children:"# AR-об'єкт → article_url(@article)"}),`
`,"redirect_to @article",`

`,n.jsx("span",{className:"code-block__comment",children:"# _url — повний URL (рекомендовано)"}),`
`,n.jsx("span",{className:"code-block__comment",children:"# HTTP Location має бути абсолютним"}),`
`,"redirect_to article_url(@article)",`

`,n.jsx("span",{className:"code-block__comment",children:"# _path — відносний (теж працює)"}),`
`,"redirect_to article_path(@article)",`

`,n.jsx("span",{className:"code-block__comment",children:"# Зовнішній URL"}),`
`,"redirect_to ",n.jsx("span",{className:"code-block__string",children:'"https://example.com"'}),`

`,n.jsx("span",{className:"code-block__comment",children:"# З flash і статусом (Rails 8+)"}),`
`,"redirect_to articles_url,",`
`,"  ","notice: ",n.jsx("span",{className:"code-block__string",children:"'Видалено!'"}),",",`
`,"  ","status: ",n.jsx("span",{className:"code-block__string",children:":see_other"})]})]}),n.jsxs("div",{className:"outlined-card outlined-card--orange",children:[n.jsx("p",{style:{fontWeight:600,color:"var(--accent-orange-text)",marginBottom:"0.5rem"},children:"_path vs _url"}),n.jsxs("p",{style:{margin:0,fontSize:"0.88rem",color:"var(--text-secondary)"},children:[n.jsx("code",{children:"articles_path"})," → ",n.jsx("code",{children:"/articles"})," — відносний",n.jsx("br",{}),n.jsx("code",{children:"articles_url"})," → ",n.jsx("code",{children:"https://example.com/articles"})," — повний",n.jsx("br",{}),n.jsx("br",{}),"У ",n.jsx("strong",{children:"redirect_to"})," обидва працюють однаково.",n.jsx("br",{}),n.jsx("code",{children:"_url"})," потрібен там де Rails не знає домену:",n.jsx("br",{}),"— ",n.jsx("strong",{children:"Action Mailer"})," — посилання у листах",n.jsx("br",{}),"— ",n.jsx("strong",{children:"API"})," — заголовок ",n.jsx("code",{children:"Location"})," після створення ресурсу"]})]})]})]})]})})}function s_(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:de,title:"Flash-повідомлення",subtitle:"One-time messages between requests"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"definition definition--green mb-md",children:[n.jsx("p",{className:"definition__term definition__term--green",children:"Flash"}),n.jsxs("p",{className:"definition__description",children:["Тимчасове повідомлення, що зберігається у сесії та доступне лише на ",n.jsx("strong",{children:"наступному"})," запиті. Після відображення автоматично видаляється."]})]}),n.jsxs("div",{className:"code-block mb-md",children:[n.jsx("span",{className:"code-block__comment",children:"# У контролері"}),`
`,"redirect_to @article,",`
`,"  ","notice: ",n.jsx("span",{className:"code-block__string",children:"'Статтю створено!'"}),`

`,"redirect_to articles_path,",`
`,"  ","alert: ",n.jsx("span",{className:"code-block__string",children:"'Щось пішло не так'"}),`

`,n.jsx("span",{className:"code-block__comment",children:"# Або явно"}),`
`,"flash[",n.jsx("span",{className:"code-block__string",children:":success"}),"] = ",n.jsx("span",{className:"code-block__string",children:"'Готово!'"}),`
`,"redirect_to root_path"]}),n.jsx(g,{language:"erb",children:`
<% flash.each do |type, msg| %>
  <div class="alert alert-<%= type %>">
    <%= msg %>
  </div>
<% end %>
`})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"info-card info-card--purple mb-md",children:[n.jsx("h3",{className:"info-card__title",children:"Типи flash"}),n.jsx("div",{className:"step-list",children:[{color:"green",key:"notice",desc:"Успішна дія (зелений)"},{color:"red",key:"alert",desc:"Помилка або попередження (червоний)"},{color:"blue",key:"info",desc:"Інформаційне повідомлення"},{color:"orange",key:"warning",desc:"Попередження (жовтий)"}].map((e,s)=>n.jsxs("div",{className:`step-list__item step-list__item--${e.color}`,style:{padding:"0.5rem 1rem"},children:[n.jsxs("span",{className:`badge badge--solid-${e.color}`,style:{minWidth:70,textAlign:"center",fontSize:"0.75rem"},children:[":",e.key]}),n.jsx("div",{className:"step-list__content",children:n.jsx("p",{style:{margin:0,fontSize:"0.88rem"},children:e.desc})})]},s))})]}),n.jsxs("div",{className:"highlight-box highlight-box--green",children:[n.jsx(de,{className:"highlight-box__icon"}),n.jsxs("p",{className:"highlight-box__text",children:[n.jsx("strong",{children:"flash.now[:notice]"})," — показати повідомлення на ",n.jsx("em",{children:"поточному"})," запиті (при render, не redirect_to)"]})]})]})]})]})})}function t_(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:Pe,title:"respond_to: HTML та JSON",subtitle:"One controller — multiple formats"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"definition definition--cyan mb-md",children:[n.jsx("p",{className:"definition__term definition__term--cyan",children:"respond_to"}),n.jsxs("p",{className:"definition__description",children:["Дозволяє одному action повертати різний формат відповіді залежно від заголовка ",n.jsx("code",{children:"Accept"}),"або розширення у URL (",n.jsx("code",{children:"/articles.json"}),")."]})]}),n.jsxs("div",{className:"code-block mb-md",style:{fontSize:"0.8rem"},children:[n.jsx("span",{className:"code-block__comment",children:"# Простий випадок — index"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"def"})," index",`
`,"  ","@articles = Article.all",`
`,"  ","respond_to ",n.jsx("span",{className:"code-block__keyword",children:"do"})," |format|",`
`,"    ","format.html",`
`,"    ",n.jsx("span",{className:"code-block__comment",children:"# рендерить index.html.erb"}),`
`,"    ","format.json ","{"," render json: @articles ","}",`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"end"})]}),n.jsxs("div",{className:"info-card info-card--blue",style:{padding:"0.75rem 1rem"},children:[n.jsx("h3",{className:"info-card__title",children:"Як викликати"}),n.jsxs("div",{className:"code-block",style:{fontSize:"0.8rem"},children:[n.jsx("span",{className:"code-block__comment",children:"# Браузер → HTML"}),`
`,"GET /articles",`

`,n.jsx("span",{className:"code-block__comment",children:"# JSON через розширення"}),`
`,"GET /articles.json",`

`,n.jsx("span",{className:"code-block__comment",children:"# JSON через заголовок"}),`
`,"curl -H ",n.jsx("span",{className:"code-block__string",children:'"Accept: application/json"'})," /articles"]})]})]}),n.jsx("div",{children:n.jsxs("div",{className:"info-card info-card--green",children:[n.jsx("h3",{className:"info-card__title",children:"respond_to у update (Rails 8+)"}),n.jsxs("div",{className:"code-block",style:{fontSize:"0.78rem"},children:[n.jsx("span",{className:"code-block__keyword",children:"def"})," update",`
`,"  ","respond_to ",n.jsx("span",{className:"code-block__keyword",children:"do"})," |format|",`
`,"    ",n.jsx("span",{className:"code-block__keyword",children:"if"})," @article.update(article_params)",`
`,"      ",n.jsx("span",{className:"code-block__comment",children:"# 303 See Other після PATCH"}),`
`,"      ","format.html ","{",`
`,"        ","redirect_to @article,",`
`,"          ","notice: ",n.jsx("span",{className:"code-block__string",children:"'Оновлено!'"}),",",`
`,"          ","status: ",n.jsx("span",{className:"code-block__string",children:":see_other"}),`
`,"      ","}",`
`,"      ",n.jsx("span",{className:"code-block__comment",children:"# рендерить show.json.jbuilder"}),`
`,"      ","format.json ","{",`
`,"        ","render ",n.jsx("span",{className:"code-block__string",children:":show"}),",",`
`,"          ","status: ",n.jsx("span",{className:"code-block__string",children:":ok"}),",",`
`,"          ","location: @article",`
`,"      ","}",`
`,"    ",n.jsx("span",{className:"code-block__keyword",children:"else"}),`
`,"      ","format.html ","{"," render ",n.jsx("span",{className:"code-block__string",children:":edit"}),", status: ",n.jsx("span",{className:"code-block__string",children:":unprocessable_entity"})," ","}",`
`,"      ","format.json ","{"," render json: @article.errors, status: ",n.jsx("span",{className:"code-block__string",children:":unprocessable_entity"})," ","}",`
`,"    ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,"  ",n.jsx("span",{className:"code-block__keyword",children:"end"}),`
`,n.jsx("span",{className:"code-block__keyword",children:"end"})]}),n.jsx("div",{className:"step-list mt-md",children:[{color:"cyan",text:"status: :see_other (303) — правильний статус після PATCH/DELETE у Rails 8+"},{color:"blue",text:"render :show — рендерить show.json.jbuilder, не повертає весь об'єкт напряму"},{color:"purple",text:"location: @article — заголовок Location вказує де знайти оновлений ресурс"}].map((e,s)=>n.jsx("div",{className:`step-list__item step-list__item--${e.color}`,style:{padding:"0.4rem 0.75rem"},children:n.jsx("div",{className:"step-list__content",children:n.jsx("p",{style:{margin:0,fontSize:"0.8rem",color:"var(--text-secondary)"},children:e.text})})},s))})]})})]})]})})}function l_(){return n.jsx("div",{className:"slide",children:n.jsxs("div",{className:"slide__content",children:[n.jsx(j,{icon:De,title:"Підсумок лекції",subtitle:"Що ми дізналися сьогодні"}),n.jsxs("div",{className:"slide-grid slide-grid--2col",children:[n.jsx("div",{children:n.jsx("div",{className:"step-list",children:[{title:"REST: URL — ресурс, метод — дія",text:"GET /articles — отримати список. DELETE /articles/1 — видалити один",color:"blue"},{title:"resources — 7 маршрутів, namespace, concern",text:"Повний CRUD, адмін-простір, DRY для повторюваних блоків маршрутів",color:"green"},{title:"params — три джерела",text:"URL (:id), query string (?page=2), тіло форми (article[title]=...)",color:"cyan"},{title:"before_action — DRY у контролері",text:"Виносимо повторюваний код у фільтри з only:/except:",color:"orange"},{title:"Strong Parameters — безпека",text:"params.expect(model: [:field]) — білий список захищає від mass assignment",color:"red"},{title:"render vs redirect_to та flash",text:"render при помилці (422), redirect після успіху (303) + одноразові повідомлення",color:"purple"}].map((e,s)=>n.jsxs("div",{className:`step-list__item step-list__item--${e.color}`,children:[n.jsx("div",{className:`step-list__number step-list__number--${e.color}`,children:s+1}),n.jsxs("div",{className:"step-list__content",children:[n.jsx("p",{className:"step-list__title",children:e.title}),n.jsx("p",{className:"step-list__text",children:e.text})]})]},s))})}),n.jsxs("div",{children:[n.jsxs("div",{className:"info-card info-card--blue mb-md",children:[n.jsx("h3",{className:"info-card__title",children:"📚 Корисні ресурси"}),n.jsxs("p",{className:"info-card__text",children:[n.jsx("strong",{children:"guides.rubyonrails.org/routing.html"})," — повний гайд по маршрутизації",n.jsx("br",{}),n.jsx("br",{}),n.jsx("strong",{children:"guides.rubyonrails.org/action_controller_overview.html"})," — все про контролери",n.jsx("br",{}),n.jsx("br",{}),n.jsx("strong",{children:"rails routes"})," — завжди під рукою у терміналі"]})]}),n.jsxs("div",{className:"highlight-box highlight-box--purple",children:[n.jsx(En,{className:"highlight-box__icon"}),n.jsxs("p",{className:"highlight-box__text",children:[n.jsx("strong",{children:"Наступна лекція:"})," Views, partials та форми — ERB-шаблони, layout, render partial, helpers, form_with та підключення Bootstrap/Tailwind."]})]})]})]})]})})}const os=[{id:"1",title:"Знайомство з Ruby: мова, філософія, інструменти",icon:Fl,component:mf},{id:"2",title:"Ruby глибше: колекції, цикли, методи",icon:Pe,component:ex},{id:"3",title:"ООП у Ruby: класи, модулі, наслідування",icon:ht,component:yx},{id:"4",title:"Привіт, Rails! Перший додаток за 90 хвилин",icon:En,component:Hx},{id:"5",title:"Маршрутизація та контролери",icon:Jp,component:$x},{id:"6",title:"Views, partials та форми",icon:Wd,component:null},{id:"7",title:"Зв'язки між моделями (Associations)",icon:Ul,component:null},{id:"8",title:"Моделі та Active Record: магія бази даних",icon:Bl,component:null},{id:"9",title:"Автентифікація та авторизація",icon:Ss,component:null},{id:"10",title:"Hotwire: Turbo та Stimulus — сучасний фронтенд без React",icon:de,component:null},{id:"11",title:"Тестування: TDD у Rails",icon:ih,component:null},{id:"12",title:"API-режим: Rails як бекенд",icon:Gn,component:null},{id:"13",title:"Фонові завдання, email, файли",icon:Nh,component:null},{id:"14",title:"Деплой та продакшн",icon:Qp,component:null},{id:"15",title:"Фінальний проєкт: від ідеї до продакшн за 90 хвилин",icon:sf,component:null}],i_=os.length;function So(){const e=window.location.hash.replace("#/","").replace("#","");if(!e)return 0;const s=os.findIndex(t=>t.id===e);return s>=0?s:0}function r_(e){window.location.hash=`#/${e}`}function a_(){const e=localStorage.getItem("theme");return e==="light"||e==="dark"?e:window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function o_(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)}const Ye=[14,15,16,17,18,20],c_=16;function d_(){const e=parseInt(localStorage.getItem("fontSize"),10);return Ye.includes(e)?e:c_}function u_(e){document.documentElement.style.setProperty("--base-font-size",`${e}px`),localStorage.setItem("fontSize",e)}function m_(){var b;const[e,s]=I.useState(So),t=window.location.hash.replace("#/","").replace("#",""),[l,i]=I.useState(!t),[r,a]=I.useState(a_),[o,c]=I.useState(d_);I.useEffect(()=>{o_(r)},[r]),I.useEffect(()=>{u_(o)},[o]);const u=I.useCallback(()=>{a(T=>T==="dark"?"light":"dark")},[]),f=I.useCallback(()=>{c(T=>{const m=Ye.indexOf(T);return m<Ye.length-1?Ye[m+1]:T})},[]),x=I.useCallback(()=>{c(T=>{const m=Ye.indexOf(T);return m>0?Ye[m-1]:T})},[]),h=I.useCallback(T=>{s(T),r_(os[T].id)},[]);I.useEffect(()=>{const T=()=>{s(So())};return window.addEventListener("hashchange",T),()=>window.removeEventListener("hashchange",T)},[]);const v=(b=os[e])==null?void 0:b.component,N=os[e];return n.jsxs("div",{className:"app",children:[n.jsx("header",{className:"header",children:n.jsxs("div",{className:"header__container",children:[n.jsxs("div",{className:"header__brand",children:[n.jsx("div",{className:"header__logo",children:n.jsx(Fl,{})}),n.jsxs("div",{children:[n.jsx("h1",{className:"header__title",children:"Ruby on Rails"}),n.jsx("p",{className:"header__subtitle",children:"Повний курс • 15 лекцій × 90 хвилин"})]})]}),n.jsxs("div",{className:"header__controls",children:[n.jsxs("div",{className:"font-size-controls",children:[n.jsx("button",{onClick:x,disabled:o===Ye[0],className:"font-size-controls__btn",title:"Зменшити шрифт",children:n.jsx(Rh,{})}),n.jsx("button",{onClick:f,disabled:o===Ye[Ye.length-1],className:"font-size-controls__btn",title:"Збільшити шрифт",children:n.jsx(Mh,{})})]}),n.jsx("button",{onClick:u,className:"theme-toggle",title:r==="dark"?"Світла тема":"Темна тема",children:r==="dark"?n.jsx(Yh,{}):n.jsx(zh,{})}),n.jsx("button",{onClick:()=>i(!l),className:`header__toggle ${l?"header__toggle--active":"header__toggle--inactive"}`,children:l?"Сховати меню":"Показати меню"})]})]})}),l&&n.jsx("nav",{className:"lecture-nav",children:n.jsx("div",{className:"lecture-nav__container",children:os.map((T,m)=>{const d=T.icon,p=e===m,_=T.component!==null;let k="lecture-nav__item";return p?k+=" lecture-nav__item--active":_?k+=" lecture-nav__item--available":k+=" lecture-nav__item--unavailable",n.jsxs("button",{onClick:()=>_&&h(m),disabled:!_,className:k,title:T.title,children:[n.jsx(d,{}),n.jsx("span",{children:T.id})]},T.id)})})}),n.jsx("div",{className:"lecture-info",children:n.jsxs("div",{className:"lecture-info__container",children:[n.jsx("div",{className:"lecture-info__icon",children:(()=>{const T=N.icon;return n.jsx(T,{})})()}),n.jsxs("div",{children:[n.jsxs("p",{className:"lecture-info__meta",children:["Лекція ",N.id," з ",i_]}),n.jsx("h2",{className:"lecture-info__title",children:N.title})]})]})}),n.jsx("main",{children:v?n.jsx(v,{}):n.jsx("div",{className:"empty-state",children:n.jsxs("div",{className:"empty-state__card",children:[n.jsx(En,{className:"empty-state__icon"}),n.jsx("h3",{className:"empty-state__title",children:"Лекція в розробці"}),n.jsx("p",{className:"empty-state__text",children:"Ця лекція ще не готова. Поки що доступна тільки Лекція 1."})]})})}),n.jsx("footer",{className:"footer",children:n.jsx("p",{className:"footer__text",children:"Веб розробка на Ruby on Rails • 2026"})})]})}ji.createRoot(document.getElementById("root")).render(n.jsx(Do.StrictMode,{children:n.jsx(m_,{})}));
