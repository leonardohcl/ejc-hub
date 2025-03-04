const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/default-BQplxbor.js","assets/ssrBoot-Dlj6Uwxx.js","assets/index-C9XieiP9.js","assets/VContainer-BL2umRMR.js","assets/VContainer-86XHr9wO.css","assets/index-Br4CDULP.css","assets/VOverlay-CpD8swN-.js","assets/forwardRefs-DWGaNmQL.js","assets/VOverlay-CJZCRGWG.css","assets/VList-Fd-eVPRf.js","assets/VList-i-22bMcD.css","assets/default-BeyRP98d.css","assets/index-I6QYtNTe.js","assets/VCard-DypwHk8V.js","assets/VCard-Ckq9XVQu.css","assets/collection-BFWqaTGH.js","assets/cards-C5yEbXOr.js","assets/cards-CgkIFNCO.css","assets/VLabel-Co2i3oNy.js","assets/VLabel-CJ7y27R9.css","assets/route-block-B_A1xBdJ.js","assets/collection-Bufc1RW9.css","assets/matches-BG7PQjmc.js","assets/matches-BlK8uFkX.css","assets/settings-DCI_1dWj.js","assets/settings-BIH_AWWP.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function uf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ue={},Xs=[],Mn=()=>{},EA=()=>!1,oc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),hf=t=>t.startsWith("onUpdate:"),it=Object.assign,ff=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},TA=Object.prototype.hasOwnProperty,De=(t,e)=>TA.call(t,e),he=Array.isArray,Js=t=>ac(t)==="[object Map]",Vy=t=>ac(t)==="[object Set]",de=t=>typeof t=="function",Ye=t=>typeof t=="string",Gr=t=>typeof t=="symbol",je=t=>t!==null&&typeof t=="object",Fy=t=>(je(t)||de(t))&&de(t.then)&&de(t.catch),Uy=Object.prototype.toString,ac=t=>Uy.call(t),wA=t=>ac(t).slice(8,-1),By=t=>ac(t)==="[object Object]",df=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,co=uf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},IA=/-(\w)/g,un=lc(t=>t.replace(IA,(e,n)=>n?n.toUpperCase():"")),AA=/\B([A-Z])/g,Rs=lc(t=>t.replace(AA,"-$1").toLowerCase()),Xo=lc(t=>t.charAt(0).toUpperCase()+t.slice(1)),gu=lc(t=>t?`on${Xo(t)}`:""),Or=(t,e)=>!Object.is(t,e),_u=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$y=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},bA=t=>{const e=parseFloat(t);return isNaN(e)?t:e},CA=t=>{const e=Ye(t)?Number(t):NaN;return isNaN(e)?t:e};let zp;const cc=()=>zp||(zp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pf(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ye(r)?kA(r):pf(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ye(t)||je(t))return t}const RA=/;(?![^(]*\))/g,SA=/:([^]+)/,PA=/\/\*[^]*?\*\//g;function kA(t){const e={};return t.replace(PA,"").split(RA).forEach(n=>{if(n){const r=n.split(SA);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function mf(t){let e="";if(Ye(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const r=mf(t[n]);r&&(e+=r+" ")}else if(je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const NA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",DA=uf(NA);function jy(t){return!!t||t===""}const Hy=t=>!!(t&&t.__v_isRef===!0),OA=t=>Ye(t)?t:t==null?"":he(t)||je(t)&&(t.toString===Uy||!de(t.toString))?Hy(t)?OA(t.value):JSON.stringify(t,Wy,2):String(t),Wy=(t,e)=>Hy(e)?Wy(t,e.value):Js(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[yu(r,i)+" =>"]=s,n),{})}:Vy(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>yu(n))}:Gr(e)?yu(e):je(e)&&!he(e)&&!By(e)?String(e):e,yu=(t,e="")=>{var n;return Gr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class qy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){Lt=this}off(){Lt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function uc(t){return new qy(t)}function Ky(){return Lt}function Gy(t,e=!1){Lt&&Lt.cleanups.push(t)}let Be;const vu=new WeakSet;class zy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Lt&&Lt.active&&Lt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vu.has(this)&&(vu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yy(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qp(this),Xy(this);const e=Be,n=yn;Be=this,yn=!0;try{return this.fn()}finally{Jy(this),Be=e,yn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)yf(e);this.deps=this.depsTail=void 0,Qp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){th(this)&&this.run()}get dirty(){return th(this)}}let Qy=0,uo,ho;function Yy(t,e=!1){if(t.flags|=8,e){t.next=ho,ho=t;return}t.next=uo,uo=t}function gf(){Qy++}function _f(){if(--Qy>0)return;if(ho){let e=ho;for(ho=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;uo;){let e=uo;for(uo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Xy(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Jy(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),yf(r),MA(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function th(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Zy(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Zy(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Po))return;t.globalVersion=Po;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!th(t)){t.flags&=-3;return}const n=Be,r=yn;Be=t,yn=!0;try{Xy(t);const s=t.fn(t._value);(e.version===0||Or(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Be=n,yn=r,Jy(t),t.flags&=-3}}function yf(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)yf(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function MA(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let yn=!0;const ev=[];function zr(){ev.push(yn),yn=!1}function Qr(){const t=ev.pop();yn=t===void 0?!0:t}function Qp(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Be;Be=void 0;try{e()}finally{Be=n}}}let Po=0;class xA{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Be||!yn||Be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Be)n=this.activeLink=new xA(Be,this),Be.deps?(n.prevDep=Be.depsTail,Be.depsTail.nextDep=n,Be.depsTail=n):Be.deps=Be.depsTail=n,tv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Be.depsTail,n.nextDep=void 0,Be.depsTail.nextDep=n,Be.depsTail=n,Be.deps===n&&(Be.deps=r)}return n}trigger(e){this.version++,Po++,this.notify(e)}notify(e){gf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{_f()}}}function tv(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)tv(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const dl=new WeakMap,ds=Symbol(""),nh=Symbol(""),ko=Symbol("");function bt(t,e,n){if(yn&&Be){let r=dl.get(t);r||dl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new vf),s.map=r,s.key=n),s.track()}}function Yn(t,e,n,r,s,i){const o=dl.get(t);if(!o){Po++;return}const a=c=>{c&&c.trigger()};if(gf(),e==="clear")o.forEach(a);else{const c=he(t),u=c&&df(n);if(c&&n==="length"){const h=Number(r);o.forEach((f,m)=>{(m==="length"||m===ko||!Gr(m)&&m>=h)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(ko)),e){case"add":c?u&&a(o.get("length")):(a(o.get(ds)),Js(t)&&a(o.get(nh)));break;case"delete":c||(a(o.get(ds)),Js(t)&&a(o.get(nh)));break;case"set":Js(t)&&a(o.get(ds));break}}_f()}function LA(t,e){const n=dl.get(t);return n&&n.get(e)}function Fs(t){const e=Ee(t);return e===t?e:(bt(e,"iterate",ko),ln(t)?e:e.map(Ct))}function hc(t){return bt(t=Ee(t),"iterate",ko),t}const VA={__proto__:null,[Symbol.iterator](){return Eu(this,Symbol.iterator,Ct)},concat(...t){return Fs(this).concat(...t.map(e=>he(e)?Fs(e):e))},entries(){return Eu(this,"entries",t=>(t[1]=Ct(t[1]),t))},every(t,e){return Gn(this,"every",t,e,void 0,arguments)},filter(t,e){return Gn(this,"filter",t,e,n=>n.map(Ct),arguments)},find(t,e){return Gn(this,"find",t,e,Ct,arguments)},findIndex(t,e){return Gn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Gn(this,"findLast",t,e,Ct,arguments)},findLastIndex(t,e){return Gn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Gn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Tu(this,"includes",t)},indexOf(...t){return Tu(this,"indexOf",t)},join(t){return Fs(this).join(t)},lastIndexOf(...t){return Tu(this,"lastIndexOf",t)},map(t,e){return Gn(this,"map",t,e,void 0,arguments)},pop(){return Ki(this,"pop")},push(...t){return Ki(this,"push",t)},reduce(t,...e){return Yp(this,"reduce",t,e)},reduceRight(t,...e){return Yp(this,"reduceRight",t,e)},shift(){return Ki(this,"shift")},some(t,e){return Gn(this,"some",t,e,void 0,arguments)},splice(...t){return Ki(this,"splice",t)},toReversed(){return Fs(this).toReversed()},toSorted(t){return Fs(this).toSorted(t)},toSpliced(...t){return Fs(this).toSpliced(...t)},unshift(...t){return Ki(this,"unshift",t)},values(){return Eu(this,"values",Ct)}};function Eu(t,e,n){const r=hc(t),s=r[e]();return r!==t&&!ln(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const FA=Array.prototype;function Gn(t,e,n,r,s,i){const o=hc(t),a=o!==t&&!ln(t),c=o[e];if(c!==FA[e]){const f=c.apply(t,i);return a?Ct(f):f}let u=n;o!==t&&(a?u=function(f,m){return n.call(this,Ct(f),m,t)}:n.length>2&&(u=function(f,m){return n.call(this,f,m,t)}));const h=c.call(o,u,r);return a&&s?s(h):h}function Yp(t,e,n,r){const s=hc(t);let i=n;return s!==t&&(ln(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,Ct(a),c,t)}),s[e](i,...r)}function Tu(t,e,n){const r=Ee(t);bt(r,"iterate",ko);const s=r[e](...n);return(s===-1||s===!1)&&If(n[0])?(n[0]=Ee(n[0]),r[e](...n)):s}function Ki(t,e,n=[]){zr(),gf();const r=Ee(t)[e].apply(t,n);return _f(),Qr(),r}const UA=uf("__proto__,__v_isRef,__isVue"),nv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gr));function BA(t){Gr(t)||(t=String(t));const e=Ee(this);return bt(e,"has",t),e.hasOwnProperty(t)}class rv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?YA:av:i?ov:iv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=he(e);if(!s){let c;if(o&&(c=VA[n]))return c;if(n==="hasOwnProperty")return BA}const a=Reflect.get(e,n,Qe(e)?e:r);return(Gr(n)?nv.has(n):UA(n))||(s||bt(e,"get",n),i)?a:Qe(a)?o&&df(n)?a:a.value:je(a)?s?Tf(a):jt(a):a}}class sv extends rv{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=_s(i);if(!ln(r)&&!_s(r)&&(i=Ee(i),r=Ee(r)),!he(e)&&Qe(i)&&!Qe(r))return c?!1:(i.value=r,!0)}const o=he(e)&&df(n)?Number(n)<e.length:De(e,n),a=Reflect.set(e,n,r,Qe(e)?e:s);return e===Ee(s)&&(o?Or(r,i)&&Yn(e,"set",n,r):Yn(e,"add",n,r)),a}deleteProperty(e,n){const r=De(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Gr(n)||!nv.has(n))&&bt(e,"has",n),r}ownKeys(e){return bt(e,"iterate",he(e)?"length":ds),Reflect.ownKeys(e)}}class $A extends rv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const jA=new sv,HA=new $A,WA=new sv(!0);const rh=t=>t,Na=t=>Reflect.getPrototypeOf(t);function qA(t,e,n){return function(...r){const s=this.__v_raw,i=Ee(s),o=Js(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),h=n?rh:e?sh:Ct;return!e&&bt(i,"iterate",c?nh:ds),{next(){const{value:f,done:m}=u.next();return m?{value:f,done:m}:{value:a?[h(f[0]),h(f[1])]:h(f),done:m}},[Symbol.iterator](){return this}}}}function Da(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function KA(t,e){const n={get(s){const i=this.__v_raw,o=Ee(i),a=Ee(s);t||(Or(s,a)&&bt(o,"get",s),bt(o,"get",a));const{has:c}=Na(o),u=e?rh:t?sh:Ct;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&bt(Ee(s),"iterate",ds),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ee(i),a=Ee(s);return t||(Or(s,a)&&bt(o,"has",s),bt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Ee(a),u=e?rh:t?sh:Ct;return!t&&bt(c,"iterate",ds),a.forEach((h,f)=>s.call(i,u(h),u(f),o))}};return it(n,t?{add:Da("add"),set:Da("set"),delete:Da("delete"),clear:Da("clear")}:{add(s){!e&&!ln(s)&&!_s(s)&&(s=Ee(s));const i=Ee(this);return Na(i).has.call(i,s)||(i.add(s),Yn(i,"add",s,s)),this},set(s,i){!e&&!ln(i)&&!_s(i)&&(i=Ee(i));const o=Ee(this),{has:a,get:c}=Na(o);let u=a.call(o,s);u||(s=Ee(s),u=a.call(o,s));const h=c.call(o,s);return o.set(s,i),u?Or(i,h)&&Yn(o,"set",s,i):Yn(o,"add",s,i),this},delete(s){const i=Ee(this),{has:o,get:a}=Na(i);let c=o.call(i,s);c||(s=Ee(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&Yn(i,"delete",s,void 0),u},clear(){const s=Ee(this),i=s.size!==0,o=s.clear();return i&&Yn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=qA(s,t,e)}),n}function Ef(t,e){const n=KA(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(De(n,s)&&s in r?n:r,s,i)}const GA={get:Ef(!1,!1)},zA={get:Ef(!1,!0)},QA={get:Ef(!0,!1)};const iv=new WeakMap,ov=new WeakMap,av=new WeakMap,YA=new WeakMap;function XA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function JA(t){return t.__v_skip||!Object.isExtensible(t)?0:XA(wA(t))}function jt(t){return _s(t)?t:wf(t,!1,jA,GA,iv)}function lv(t){return wf(t,!1,WA,zA,ov)}function Tf(t){return wf(t,!0,HA,QA,av)}function wf(t,e,n,r,s){if(!je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=JA(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function rr(t){return _s(t)?rr(t.__v_raw):!!(t&&t.__v_isReactive)}function _s(t){return!!(t&&t.__v_isReadonly)}function ln(t){return!!(t&&t.__v_isShallow)}function If(t){return t?!!t.__v_raw:!1}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function Af(t){return!De(t,"__v_skip")&&Object.isExtensible(t)&&$y(t,"__v_skip",!0),t}const Ct=t=>je(t)?jt(t):t,sh=t=>je(t)?Tf(t):t;function Qe(t){return t?t.__v_isRef===!0:!1}function Kt(t){return cv(t,!1)}function xn(t){return cv(t,!0)}function cv(t,e){return Qe(t)?t:new ZA(t,e)}class ZA{constructor(e,n){this.dep=new vf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ee(e),this._value=n?e:Ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||ln(e)||_s(e);e=r?e:Ee(e),Or(e,n)&&(this._rawValue=e,this._value=r?e:Ct(e),this.dep.trigger())}}function pn(t){return Qe(t)?t.value:t}const eb={get:(t,e,n)=>e==="__v_raw"?t:pn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Qe(s)&&!Qe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function uv(t){return rr(t)?t:new Proxy(t,eb)}function bf(t){const e=he(t)?new Array(t.length):{};for(const n in t)e[n]=hv(t,n);return e}class tb{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return LA(Ee(this._object),this._key)}}class nb{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function rb(t,e,n){return Qe(t)?t:de(t)?new nb(t):je(t)&&arguments.length>1?hv(t,e,n):Kt(t)}function hv(t,e,n){const r=t[e];return Qe(r)?r:new tb(t,e,n)}class sb{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new vf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Po-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Be!==this)return Yy(this,!0),!0}get value(){const e=this.dep.track();return Zy(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ib(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new sb(r,s,n)}const Oa={},pl=new WeakMap;let os;function ob(t,e=!1,n=os){if(n){let r=pl.get(n);r||pl.set(n,r=[]),r.push(t)}}function ab(t,e,n=Ue){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=j=>s?j:ln(j)||s===!1||s===0?Xn(j,1):Xn(j);let h,f,m,g,E=!1,R=!1;if(Qe(t)?(f=()=>t.value,E=ln(t)):rr(t)?(f=()=>u(t),E=!0):he(t)?(R=!0,E=t.some(j=>rr(j)||ln(j)),f=()=>t.map(j=>{if(Qe(j))return j.value;if(rr(j))return u(j);if(de(j))return c?c(j,2):j()})):de(t)?e?f=c?()=>c(t,2):t:f=()=>{if(m){zr();try{m()}finally{Qr()}}const j=os;os=h;try{return c?c(t,3,[g]):t(g)}finally{os=j}}:f=Mn,e&&s){const j=f,Z=s===!0?1/0:s;f=()=>Xn(j(),Z)}const P=Ky(),O=()=>{h.stop(),P&&P.active&&ff(P.effects,h)};if(i&&e){const j=e;e=(...Z)=>{j(...Z),O()}}let x=R?new Array(t.length).fill(Oa):Oa;const $=j=>{if(!(!(h.flags&1)||!h.dirty&&!j))if(e){const Z=h.run();if(s||E||(R?Z.some((q,b)=>Or(q,x[b])):Or(Z,x))){m&&m();const q=os;os=h;try{const b=[Z,x===Oa?void 0:R&&x[0]===Oa?[]:x,g];c?c(e,3,b):e(...b),x=Z}finally{os=q}}}else h.run()};return a&&a($),h=new zy(f),h.scheduler=o?()=>o($,!1):$,g=j=>ob(j,!1,h),m=h.onStop=()=>{const j=pl.get(h);if(j){if(c)c(j,4);else for(const Z of j)Z();pl.delete(h)}},e?r?$(!0):x=h.run():o?o($.bind(null,!0),!0):h.run(),O.pause=h.pause.bind(h),O.resume=h.resume.bind(h),O.stop=O,O}function Xn(t,e=1/0,n){if(e<=0||!je(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Qe(t))Xn(t.value,e,n);else if(he(t))for(let r=0;r<t.length;r++)Xn(t[r],e,n);else if(Vy(t)||Js(t))t.forEach(r=>{Xn(r,e,n)});else if(By(t)){for(const r in t)Xn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Xn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jo(t,e,n,r){try{return r?t(...r):t()}catch(s){fc(s,e,n)}}function Tn(t,e,n,r){if(de(t)){const s=Jo(t,e,n,r);return s&&Fy(s)&&s.catch(i=>{fc(i,e,n)}),s}if(he(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Tn(t[i],e,n,r));return s}}function fc(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ue;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}a=a.parent}if(i){zr(),Jo(i,null,10,[t,c,u]),Qr();return}}lb(t,n,s,r,o)}function lb(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Vt=[];let Pn=-1;const Zs=[];let Ar=null,Hs=0;const fv=Promise.resolve();let ml=null;function dc(t){const e=ml||fv;return t?e.then(this?t.bind(this):t):e}function cb(t){let e=Pn+1,n=Vt.length;for(;e<n;){const r=e+n>>>1,s=Vt[r],i=No(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Cf(t){if(!(t.flags&1)){const e=No(t),n=Vt[Vt.length-1];!n||!(t.flags&2)&&e>=No(n)?Vt.push(t):Vt.splice(cb(e),0,t),t.flags|=1,dv()}}function dv(){ml||(ml=fv.then(mv))}function ub(t){he(t)?Zs.push(...t):Ar&&t.id===-1?Ar.splice(Hs+1,0,t):t.flags&1||(Zs.push(t),t.flags|=1),dv()}function Xp(t,e,n=Pn+1){for(;n<Vt.length;n++){const r=Vt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Vt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function pv(t){if(Zs.length){const e=[...new Set(Zs)].sort((n,r)=>No(n)-No(r));if(Zs.length=0,Ar){Ar.push(...e);return}for(Ar=e,Hs=0;Hs<Ar.length;Hs++){const n=Ar[Hs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ar=null,Hs=0}}const No=t=>t.id==null?t.flags&2?-1:1/0:t.id;function mv(t){try{for(Pn=0;Pn<Vt.length;Pn++){const e=Vt[Pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Jo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pn<Vt.length;Pn++){const e=Vt[Pn];e&&(e.flags&=-2)}Pn=-1,Vt.length=0,pv(),ml=null,(Vt.length||Zs.length)&&mv()}}let Ft=null,gv=null;function gl(t){const e=Ft;return Ft=t,gv=t&&t.type.__scopeId||null,e}function _v(t,e=Ft,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&hm(-1);const i=gl(e);let o;try{o=t(...s)}finally{gl(i),r._d&&hm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function nU(t,e){if(Ft===null)return t;const n=wc(Ft),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=Ue]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&Xn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function ns(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(zr(),Tn(c,n,8,[t.el,a,t,e]),Qr())}}const yv=Symbol("_vte"),vv=t=>t.__isTeleport,fo=t=>t&&(t.disabled||t.disabled===""),Jp=t=>t&&(t.defer||t.defer===""),Zp=t=>typeof SVGElement<"u"&&t instanceof SVGElement,em=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,ih=(t,e)=>{const n=t&&t.to;return Ye(n)?e?e(n):null:n},Ev={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,c,u){const{mc:h,pc:f,pbc:m,o:{insert:g,querySelector:E,createText:R,createComment:P}}=u,O=fo(e.props);let{shapeFlag:x,children:$,dynamicChildren:j}=e;if(t==null){const Z=e.el=R(""),q=e.anchor=R("");g(Z,n,r),g(q,n,r);const b=(y,w)=>{x&16&&(s&&s.isCE&&(s.ce._teleportTarget=y),h($,y,w,s,i,o,a,c))},v=()=>{const y=e.target=ih(e.props,E),w=Tv(y,e,R,g);y&&(o!=="svg"&&Zp(y)?o="svg":o!=="mathml"&&em(y)&&(o="mathml"),O||(b(y,w),Ja(e,!1)))};O&&(b(n,q),Ja(e,!0)),Jp(e.props)?xt(()=>{v(),e.el.__isMounted=!0},i):v()}else{if(Jp(e.props)&&!t.el.__isMounted){xt(()=>{Ev.process(t,e,n,r,s,i,o,a,c,u),delete t.el.__isMounted},i);return}e.el=t.el,e.targetStart=t.targetStart;const Z=e.anchor=t.anchor,q=e.target=t.target,b=e.targetAnchor=t.targetAnchor,v=fo(t.props),y=v?n:q,w=v?Z:b;if(o==="svg"||Zp(q)?o="svg":(o==="mathml"||em(q))&&(o="mathml"),j?(m(t.dynamicChildren,j,y,s,i,o,a),Df(t,e,!0)):c||f(t,e,y,w,s,i,o,a,!1),O)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ma(e,n,Z,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const S=e.target=ih(e.props,E);S&&Ma(e,S,null,u,0)}else v&&Ma(e,q,b,u,1);Ja(e,O)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:c,targetStart:u,targetAnchor:h,target:f,props:m}=t;if(f&&(s(u),s(h)),i&&s(c),o&16){const g=i||!fo(m);for(let E=0;E<a.length;E++){const R=a[E];r(R,e,n,g,!!R.dynamicChildren)}}},move:Ma,hydrate:hb};function Ma(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:h}=t,f=i===2;if(f&&r(o,e,n),(!f||fo(h))&&c&16)for(let m=0;m<u.length;m++)s(u[m],e,n,2);f&&r(a,e,n)}function hb(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:u,createText:h}},f){const m=e.target=ih(e.props,c);if(m){const g=fo(e.props),E=m._lpa||m.firstChild;if(e.shapeFlag&16)if(g)e.anchor=f(o(t),e,a(t),n,r,s,i),e.targetStart=E,e.targetAnchor=E&&o(E);else{e.anchor=o(t);let R=E;for(;R;){if(R&&R.nodeType===8){if(R.data==="teleport start anchor")e.targetStart=R;else if(R.data==="teleport anchor"){e.targetAnchor=R,m._lpa=e.targetAnchor&&o(e.targetAnchor);break}}R=o(R)}e.targetAnchor||Tv(m,e,h,u),f(E&&o(E),e,m,n,r,s,i)}Ja(e,g)}return e.anchor&&o(e.anchor)}const rU=Ev;function Ja(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Tv(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[yv]=i,t&&(r(s,t),r(i,t)),i}const br=Symbol("_leaveCb"),xa=Symbol("_enterCb");function wv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Sf(()=>{t.isMounted=!0}),_c(()=>{t.isUnmounting=!0}),t}const rn=[Function,Array],Iv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rn,onEnter:rn,onAfterEnter:rn,onEnterCancelled:rn,onBeforeLeave:rn,onLeave:rn,onAfterLeave:rn,onLeaveCancelled:rn,onBeforeAppear:rn,onAppear:rn,onAfterAppear:rn,onAppearCancelled:rn},Av=t=>{const e=t.subTree;return e.component?Av(e.component):e},fb={name:"BaseTransition",props:Iv,setup(t,{slots:e}){const n=Tc(),r=wv();return()=>{const s=e.default&&Rf(e.default(),!0);if(!s||!s.length)return;const i=bv(s),o=Ee(t),{mode:a}=o;if(r.isLeaving)return wu(i);const c=tm(i);if(!c)return wu(i);let u=Do(c,o,r,n,f=>u=f);c.type!==Ht&&ys(c,u);let h=n.subTree&&tm(n.subTree);if(h&&h.type!==Ht&&!cs(c,h)&&Av(n).type!==Ht){let f=Do(h,o,r,n);if(ys(h,f),a==="out-in"&&c.type!==Ht)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,h=void 0},wu(i);a==="in-out"&&c.type!==Ht?f.delayLeave=(m,g,E)=>{const R=Cv(r,h);R[String(h.key)]=h,m[br]=()=>{g(),m[br]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{E(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function bv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ht){e=n;break}}return e}const db=fb;function Cv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Do(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:m,onLeave:g,onAfterLeave:E,onLeaveCancelled:R,onBeforeAppear:P,onAppear:O,onAfterAppear:x,onAppearCancelled:$}=e,j=String(t.key),Z=Cv(n,t),q=(y,w)=>{y&&Tn(y,r,9,w)},b=(y,w)=>{const S=w[1];q(y,w),he(y)?y.every(A=>A.length<=1)&&S():y.length<=1&&S()},v={mode:o,persisted:a,beforeEnter(y){let w=c;if(!n.isMounted)if(i)w=P||c;else return;y[br]&&y[br](!0);const S=Z[j];S&&cs(t,S)&&S.el[br]&&S.el[br](),q(w,[y])},enter(y){let w=u,S=h,A=f;if(!n.isMounted)if(i)w=O||u,S=x||h,A=$||f;else return;let T=!1;const ve=y[xa]=ze=>{T||(T=!0,ze?q(A,[y]):q(S,[y]),v.delayedLeave&&v.delayedLeave(),y[xa]=void 0)};w?b(w,[y,ve]):ve()},leave(y,w){const S=String(t.key);if(y[xa]&&y[xa](!0),n.isUnmounting)return w();q(m,[y]);let A=!1;const T=y[br]=ve=>{A||(A=!0,w(),ve?q(R,[y]):q(E,[y]),y[br]=void 0,Z[S]===t&&delete Z[S])};Z[S]=t,g?b(g,[y,T]):T()},clone(y){const w=Do(y,e,n,r,s);return s&&s(w),w}};return v}function wu(t){if(mc(t))return t=Ur(t),t.children=null,t}function tm(t){if(!mc(t))return vv(t.type)&&t.children?bv(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function ys(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ys(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Rf(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===sn?(o.patchFlag&128&&s++,r=r.concat(Rf(o.children,e,a))):(e||o.type!==Ht)&&r.push(a!=null?Ur(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function pc(t,e){return de(t)?it({name:t.name},e,{setup:t}):t}function Rv(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function _l(t,e,n,r,s=!1){if(he(t)){t.forEach((E,R)=>_l(E,e&&(he(e)?e[R]:e),n,r,s));return}if(po(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&_l(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?wc(r.component):r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,h=a.refs===Ue?a.refs={}:a.refs,f=a.setupState,m=Ee(f),g=f===Ue?()=>!1:E=>De(m,E);if(u!=null&&u!==c&&(Ye(u)?(h[u]=null,g(u)&&(f[u]=null)):Qe(u)&&(u.value=null)),de(c))Jo(c,a,12,[o,h]);else{const E=Ye(c),R=Qe(c);if(E||R){const P=()=>{if(t.f){const O=E?g(c)?f[c]:h[c]:c.value;s?he(O)&&ff(O,i):he(O)?O.includes(i)||O.push(i):E?(h[c]=[i],g(c)&&(f[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else E?(h[c]=o,g(c)&&(f[c]=o)):R&&(c.value=o,t.k&&(h[t.k]=o))};o?(P.id=-1,xt(P,n)):P()}}}cc().requestIdleCallback;cc().cancelIdleCallback;const po=t=>!!t.type.__asyncLoader,mc=t=>t.type.__isKeepAlive;function Sv(t,e){kv(t,"a",e)}function Pv(t,e){kv(t,"da",e)}function kv(t,e,n=lt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(gc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)mc(s.parent.vnode)&&pb(r,e,n,s),s=s.parent}}function pb(t,e,n,r){const s=gc(e,t,r,!0);Dv(()=>{ff(r[e],s)},n)}function gc(t,e,n=lt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{zr();const a=Zo(n),c=Tn(e,n,t,o);return a(),Qr(),c});return r?s.unshift(i):s.push(i),i}}const fr=t=>(e,n=lt)=>{(!Mo||t==="sp")&&gc(t,(...r)=>e(...r),n)},mb=fr("bm"),Sf=fr("m"),gb=fr("bu"),Nv=fr("u"),_c=fr("bum"),Dv=fr("um"),_b=fr("sp"),yb=fr("rtg"),vb=fr("rtc");function Eb(t,e=lt){gc("ec",t,e)}const Pf="components",Tb="directives";function wb(t,e){return kf(Pf,t,!0,e)||t}const Ib=Symbol.for("v-ndc");function sU(t){return Ye(t)&&kf(Pf,t,!1)||t}function iU(t){return kf(Tb,t)}function kf(t,e,n=!0,r=!1){const s=Ft||lt;if(s){const i=s.type;if(t===Pf){const a=uC(i,!1);if(a&&(a===e||a===un(e)||a===Xo(un(e))))return i}const o=nm(s[t]||i[t],e)||nm(s.appContext[t],e);return!o&&r?i:o}}function nm(t,e){return t&&(t[e]||t[un(e)]||t[Xo(un(e))])}function oU(t,e,n,r){let s;const i=n,o=he(t);if(o||Ye(t)){const a=o&&rr(t);let c=!1;a&&(c=!ln(t),t=hc(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(c?Ct(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(je(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}const oh=t=>t?tE(t)?wc(t):oh(t.parent):null,mo=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>oh(t.parent),$root:t=>oh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Mv(t),$forceUpdate:t=>t.f||(t.f=()=>{Cf(t.update)}),$nextTick:t=>t.n||(t.n=dc.bind(t.proxy)),$watch:t=>qb.bind(t)}),Iu=(t,e)=>t!==Ue&&!t.__isScriptSetup&&De(t,e),Ab={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Iu(r,e))return o[e]=1,r[e];if(s!==Ue&&De(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&De(u,e))return o[e]=3,i[e];if(n!==Ue&&De(n,e))return o[e]=4,n[e];ah&&(o[e]=0)}}const h=mo[e];let f,m;if(h)return e==="$attrs"&&bt(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Ue&&De(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,De(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Iu(s,e)?(s[e]=n,!0):r!==Ue&&De(r,e)?(r[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ue&&De(t,o)||Iu(e,o)||(a=i[0])&&De(a,o)||De(r,o)||De(mo,o)||De(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rm(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ah=!0;function bb(t){const e=Mv(t),n=t.proxy,r=t.ctx;ah=!1,e.beforeCreate&&sm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:m,beforeUpdate:g,updated:E,activated:R,deactivated:P,beforeDestroy:O,beforeUnmount:x,destroyed:$,unmounted:j,render:Z,renderTracked:q,renderTriggered:b,errorCaptured:v,serverPrefetch:y,expose:w,inheritAttrs:S,components:A,directives:T,filters:ve}=e;if(u&&Cb(u,r,null),o)for(const ae in o){const _e=o[ae];de(_e)&&(r[ae]=_e.bind(n))}if(s){const ae=s.call(n,n);je(ae)&&(t.data=jt(ae))}if(ah=!0,i)for(const ae in i){const _e=i[ae],ut=de(_e)?_e.bind(n,n):de(_e.get)?_e.get.bind(n,n):Mn,Gt=!de(_e)&&de(_e.set)?_e.set.bind(n):Mn,Ut=ce({get:ut,set:Gt});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:xe=>Ut.value=xe})}if(a)for(const ae in a)Ov(a[ae],r,n,ae);if(c){const ae=de(c)?c.call(n):c;Reflect.ownKeys(ae).forEach(_e=>{sr(_e,ae[_e])})}h&&sm(h,t,"c");function ke(ae,_e){he(_e)?_e.forEach(ut=>ae(ut.bind(n))):_e&&ae(_e.bind(n))}if(ke(mb,f),ke(Sf,m),ke(gb,g),ke(Nv,E),ke(Sv,R),ke(Pv,P),ke(Eb,v),ke(vb,q),ke(yb,b),ke(_c,x),ke(Dv,j),ke(_b,y),he(w))if(w.length){const ae=t.exposed||(t.exposed={});w.forEach(_e=>{Object.defineProperty(ae,_e,{get:()=>n[_e],set:ut=>n[_e]=ut})})}else t.exposed||(t.exposed={});Z&&t.render===Mn&&(t.render=Z),S!=null&&(t.inheritAttrs=S),A&&(t.components=A),T&&(t.directives=T),y&&Rv(t)}function Cb(t,e,n=Mn){he(t)&&(t=lh(t));for(const r in t){const s=t[r];let i;je(s)?"default"in s?i=Ze(s.from||r,s.default,!0):i=Ze(s.from||r):i=Ze(s),Qe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function sm(t,e,n){Tn(he(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ov(t,e,n,r){let s=r.includes(".")?Kv(n,r):()=>n[r];if(Ye(t)){const i=e[t];de(i)&&cn(s,i)}else if(de(t))cn(s,t.bind(n));else if(je(t))if(he(t))t.forEach(i=>Ov(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&cn(s,i,t)}}function Mv(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>yl(c,u,o,!0)),yl(c,e,o)),je(e)&&i.set(e,c),c}function yl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&yl(t,i,n,!0),s&&s.forEach(o=>yl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Rb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Rb={data:im,props:om,emits:om,methods:eo,computed:eo,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:eo,directives:eo,watch:Pb,provide:im,inject:Sb};function im(t,e){return e?t?function(){return it(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function Sb(t,e){return eo(lh(t),lh(e))}function lh(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Mt(t,e){return t?[...new Set([].concat(t,e))]:e}function eo(t,e){return t?it(Object.create(null),t,e):e}function om(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:it(Object.create(null),rm(t),rm(e??{})):e}function Pb(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=Mt(t[r],e[r]);return n}function xv(){return{app:null,config:{isNativeTag:EA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kb=0;function Nb(t,e){return function(r,s=null){de(r)||(r=it({},r)),s!=null&&!je(s)&&(s=null);const i=xv(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:kb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:fC,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&de(h.install)?(o.add(h),h.install(u,...f)):de(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,m){if(!c){const g=u._ceVNode||$e(r,s);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(g,h,m),c=!0,u._container=h,h.__vue_app__=u,wc(g.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Tn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=ps;ps=u;try{return h()}finally{ps=f}}};return u}}let ps=null;function sr(t,e){if(lt){let n=lt.provides;const r=lt.parent&&lt.parent.provides;r===n&&(n=lt.provides=Object.create(r)),n[t]=e}}function Ze(t,e,n=!1){const r=lt||Ft;if(r||ps){const s=ps?ps._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function Db(){return!!(lt||Ft||ps)}const Lv={},Vv=()=>Object.create(Lv),Fv=t=>Object.getPrototypeOf(t)===Lv;function Ob(t,e,n,r=!1){const s={},i=Vv();t.propsDefaults=Object.create(null),Uv(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:lv(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Mb(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ee(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let m=h[f];if(vc(t.emitsOptions,m))continue;const g=e[m];if(c)if(De(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const E=un(m);s[E]=ch(c,a,E,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{Uv(t,e,s,i)&&(u=!0);let h;for(const f in a)(!e||!De(e,f)&&((h=Rs(f))===f||!De(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(s[f]=ch(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!De(e,f))&&(delete i[f],u=!0)}u&&Yn(t.attrs,"set","")}function Uv(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(co(c))continue;const u=e[c];let h;s&&De(s,h=un(c))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:vc(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ee(n),u=a||Ue;for(let h=0;h<i.length;h++){const f=i[h];n[f]=ch(s,c,f,u[f],t,!De(u,f))}}return o}function ch(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=De(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&de(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Zo(s);r=u[n]=c.call(null,e),h()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Rs(n))&&(r=!0))}return r}const xb=new WeakMap;function Bv(t,e,n=!1){const r=n?xb:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!de(t)){const h=f=>{c=!0;const[m,g]=Bv(f,e,!0);it(o,m),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return je(t)&&r.set(t,Xs),Xs;if(he(i))for(let h=0;h<i.length;h++){const f=un(i[h]);am(f)&&(o[f]=Ue)}else if(i)for(const h in i){const f=un(h);if(am(f)){const m=i[h],g=o[f]=he(m)||de(m)?{type:m}:it({},m),E=g.type;let R=!1,P=!0;if(he(E))for(let O=0;O<E.length;++O){const x=E[O],$=de(x)&&x.name;if($==="Boolean"){R=!0;break}else $==="String"&&(P=!1)}else R=de(E)&&E.name==="Boolean";g[0]=R,g[1]=P,(R||De(g,"default"))&&a.push(f)}}const u=[o,a];return je(t)&&r.set(t,u),u}function am(t){return t[0]!=="$"&&!co(t)}const $v=t=>t[0]==="_"||t==="$stable",Nf=t=>he(t)?t.map(Nn):[Nn(t)],Lb=(t,e,n)=>{if(e._n)return e;const r=_v((...s)=>Nf(e(...s)),n);return r._c=!1,r},jv=(t,e,n)=>{const r=t._ctx;for(const s in t){if($v(s))continue;const i=t[s];if(de(i))e[s]=Lb(s,i,r);else if(i!=null){const o=Nf(i);e[s]=()=>o}}},Hv=(t,e)=>{const n=Nf(e);t.slots.default=()=>n},Wv=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Vb=(t,e,n)=>{const r=t.slots=Vv();if(t.vnode.shapeFlag&32){const s=e._;s?(Wv(r,e,n),n&&$y(r,"_",s,!0)):jv(e,r)}else e&&Hv(t,e)},Fb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ue;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Wv(s,e,n):(i=!e.$stable,jv(e,s)),o=e}else e&&(Hv(t,e),o={default:1});if(i)for(const a in s)!$v(a)&&o[a]==null&&delete s[a]},xt=Jb;function Ub(t){return Bb(t)}function Bb(t,e){const n=cc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:m,setScopeId:g=Mn,insertStaticContent:E}=t,R=(I,C,k,L=null,B=null,V=null,Y=void 0,K=null,W=!!C.dynamicChildren)=>{if(I===C)return;I&&!cs(I,C)&&(L=M(I),xe(I,B,V,!0),I=null),C.patchFlag===-2&&(W=!1,C.dynamicChildren=null);const{type:H,ref:ie,shapeFlag:J}=C;switch(H){case Ec:P(I,C,k,L);break;case Ht:O(I,C,k,L);break;case bu:I==null&&x(C,k,L,Y);break;case sn:A(I,C,k,L,B,V,Y,K,W);break;default:J&1?Z(I,C,k,L,B,V,Y,K,W):J&6?T(I,C,k,L,B,V,Y,K,W):(J&64||J&128)&&H.process(I,C,k,L,B,V,Y,K,W,ne)}ie!=null&&B&&_l(ie,I&&I.ref,V,C||I,!C)},P=(I,C,k,L)=>{if(I==null)r(C.el=a(C.children),k,L);else{const B=C.el=I.el;C.children!==I.children&&u(B,C.children)}},O=(I,C,k,L)=>{I==null?r(C.el=c(C.children||""),k,L):C.el=I.el},x=(I,C,k,L)=>{[I.el,I.anchor]=E(I.children,C,k,L,I.el,I.anchor)},$=({el:I,anchor:C},k,L)=>{let B;for(;I&&I!==C;)B=m(I),r(I,k,L),I=B;r(C,k,L)},j=({el:I,anchor:C})=>{let k;for(;I&&I!==C;)k=m(I),s(I),I=k;s(C)},Z=(I,C,k,L,B,V,Y,K,W)=>{C.type==="svg"?Y="svg":C.type==="math"&&(Y="mathml"),I==null?q(C,k,L,B,V,Y,K,W):y(I,C,B,V,Y,K,W)},q=(I,C,k,L,B,V,Y,K)=>{let W,H;const{props:ie,shapeFlag:J,transition:re,dirs:le}=I;if(W=I.el=o(I.type,V,ie&&ie.is,ie),J&8?h(W,I.children):J&16&&v(I.children,W,null,L,B,Au(I,V),Y,K),le&&ns(I,null,L,"created"),b(W,I,I.scopeId,Y,L),ie){for(const ge in ie)ge!=="value"&&!co(ge)&&i(W,ge,null,ie[ge],V,L);"value"in ie&&i(W,"value",null,ie.value,V),(H=ie.onVnodeBeforeMount)&&Rn(H,L,I)}le&&ns(I,null,L,"beforeMount");const oe=$b(B,re);oe&&re.beforeEnter(W),r(W,C,k),((H=ie&&ie.onVnodeMounted)||oe||le)&&xt(()=>{H&&Rn(H,L,I),oe&&re.enter(W),le&&ns(I,null,L,"mounted")},B)},b=(I,C,k,L,B)=>{if(k&&g(I,k),L)for(let V=0;V<L.length;V++)g(I,L[V]);if(B){let V=B.subTree;if(C===V||zv(V.type)&&(V.ssContent===C||V.ssFallback===C)){const Y=B.vnode;b(I,Y,Y.scopeId,Y.slotScopeIds,B.parent)}}},v=(I,C,k,L,B,V,Y,K,W=0)=>{for(let H=W;H<I.length;H++){const ie=I[H]=K?Cr(I[H]):Nn(I[H]);R(null,ie,C,k,L,B,V,Y,K)}},y=(I,C,k,L,B,V,Y)=>{const K=C.el=I.el;let{patchFlag:W,dynamicChildren:H,dirs:ie}=C;W|=I.patchFlag&16;const J=I.props||Ue,re=C.props||Ue;let le;if(k&&rs(k,!1),(le=re.onVnodeBeforeUpdate)&&Rn(le,k,C,I),ie&&ns(C,I,k,"beforeUpdate"),k&&rs(k,!0),(J.innerHTML&&re.innerHTML==null||J.textContent&&re.textContent==null)&&h(K,""),H?w(I.dynamicChildren,H,K,k,L,Au(C,B),V):Y||_e(I,C,K,null,k,L,Au(C,B),V,!1),W>0){if(W&16)S(K,J,re,k,B);else if(W&2&&J.class!==re.class&&i(K,"class",null,re.class,B),W&4&&i(K,"style",J.style,re.style,B),W&8){const oe=C.dynamicProps;for(let ge=0;ge<oe.length;ge++){const Ae=oe[ge],vt=J[Ae],ht=re[Ae];(ht!==vt||Ae==="value")&&i(K,Ae,vt,ht,B,k)}}W&1&&I.children!==C.children&&h(K,C.children)}else!Y&&H==null&&S(K,J,re,k,B);((le=re.onVnodeUpdated)||ie)&&xt(()=>{le&&Rn(le,k,C,I),ie&&ns(C,I,k,"updated")},L)},w=(I,C,k,L,B,V,Y)=>{for(let K=0;K<C.length;K++){const W=I[K],H=C[K],ie=W.el&&(W.type===sn||!cs(W,H)||W.shapeFlag&70)?f(W.el):k;R(W,H,ie,null,L,B,V,Y,!0)}},S=(I,C,k,L,B)=>{if(C!==k){if(C!==Ue)for(const V in C)!co(V)&&!(V in k)&&i(I,V,C[V],null,B,L);for(const V in k){if(co(V))continue;const Y=k[V],K=C[V];Y!==K&&V!=="value"&&i(I,V,K,Y,B,L)}"value"in k&&i(I,"value",C.value,k.value,B)}},A=(I,C,k,L,B,V,Y,K,W)=>{const H=C.el=I?I.el:a(""),ie=C.anchor=I?I.anchor:a("");let{patchFlag:J,dynamicChildren:re,slotScopeIds:le}=C;le&&(K=K?K.concat(le):le),I==null?(r(H,k,L),r(ie,k,L),v(C.children||[],k,ie,B,V,Y,K,W)):J>0&&J&64&&re&&I.dynamicChildren?(w(I.dynamicChildren,re,k,B,V,Y,K),(C.key!=null||B&&C===B.subTree)&&Df(I,C,!0)):_e(I,C,k,ie,B,V,Y,K,W)},T=(I,C,k,L,B,V,Y,K,W)=>{C.slotScopeIds=K,I==null?C.shapeFlag&512?B.ctx.activate(C,k,L,Y,W):ve(C,k,L,B,V,Y,W):ze(I,C,W)},ve=(I,C,k,L,B,V,Y)=>{const K=I.component=iC(I,L,B);if(mc(I)&&(K.ctx.renderer=ne),oC(K,!1,Y),K.asyncDep){if(B&&B.registerDep(K,ke,Y),!I.el){const W=K.subTree=$e(Ht);O(null,W,C,k)}}else ke(K,I,C,k,B,V,Y)},ze=(I,C,k)=>{const L=C.component=I.component;if(Yb(I,C,k))if(L.asyncDep&&!L.asyncResolved){ae(L,C,k);return}else L.next=C,L.update();else C.el=I.el,L.vnode=C},ke=(I,C,k,L,B,V,Y)=>{const K=()=>{if(I.isMounted){let{next:J,bu:re,u:le,parent:oe,vnode:ge}=I;{const Et=qv(I);if(Et){J&&(J.el=ge.el,ae(I,J,Y)),Et.asyncDep.then(()=>{I.isUnmounted||K()});return}}let Ae=J,vt;rs(I,!1),J?(J.el=ge.el,ae(I,J,Y)):J=ge,re&&_u(re),(vt=J.props&&J.props.onVnodeBeforeUpdate)&&Rn(vt,oe,J,ge),rs(I,!0);const ht=cm(I),tn=I.subTree;I.subTree=ht,R(tn,ht,f(tn.el),M(tn),I,B,V),J.el=ht.el,Ae===null&&Xb(I,ht.el),le&&xt(le,B),(vt=J.props&&J.props.onVnodeUpdated)&&xt(()=>Rn(vt,oe,J,ge),B)}else{let J;const{el:re,props:le}=C,{bm:oe,m:ge,parent:Ae,root:vt,type:ht}=I,tn=po(C);rs(I,!1),oe&&_u(oe),!tn&&(J=le&&le.onVnodeBeforeMount)&&Rn(J,Ae,C),rs(I,!0);{vt.ce&&vt.ce._injectChildStyle(ht);const Et=I.subTree=cm(I);R(null,Et,k,L,I,B,V),C.el=Et.el}if(ge&&xt(ge,B),!tn&&(J=le&&le.onVnodeMounted)){const Et=C;xt(()=>Rn(J,Ae,Et),B)}(C.shapeFlag&256||Ae&&po(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&I.a&&xt(I.a,B),I.isMounted=!0,C=k=L=null}};I.scope.on();const W=I.effect=new zy(K);I.scope.off();const H=I.update=W.run.bind(W),ie=I.job=W.runIfDirty.bind(W);ie.i=I,ie.id=I.uid,W.scheduler=()=>Cf(ie),rs(I,!0),H()},ae=(I,C,k)=>{C.component=I;const L=I.vnode.props;I.vnode=C,I.next=null,Mb(I,C.props,L,k),Fb(I,C.children,k),zr(),Xp(I),Qr()},_e=(I,C,k,L,B,V,Y,K,W=!1)=>{const H=I&&I.children,ie=I?I.shapeFlag:0,J=C.children,{patchFlag:re,shapeFlag:le}=C;if(re>0){if(re&128){Gt(H,J,k,L,B,V,Y,K,W);return}else if(re&256){ut(H,J,k,L,B,V,Y,K,W);return}}le&8?(ie&16&&yt(H,B,V),J!==H&&h(k,J)):ie&16?le&16?Gt(H,J,k,L,B,V,Y,K,W):yt(H,B,V,!0):(ie&8&&h(k,""),le&16&&v(J,k,L,B,V,Y,K,W))},ut=(I,C,k,L,B,V,Y,K,W)=>{I=I||Xs,C=C||Xs;const H=I.length,ie=C.length,J=Math.min(H,ie);let re;for(re=0;re<J;re++){const le=C[re]=W?Cr(C[re]):Nn(C[re]);R(I[re],le,k,null,B,V,Y,K,W)}H>ie?yt(I,B,V,!0,!1,J):v(C,k,L,B,V,Y,K,W,J)},Gt=(I,C,k,L,B,V,Y,K,W)=>{let H=0;const ie=C.length;let J=I.length-1,re=ie-1;for(;H<=J&&H<=re;){const le=I[H],oe=C[H]=W?Cr(C[H]):Nn(C[H]);if(cs(le,oe))R(le,oe,k,null,B,V,Y,K,W);else break;H++}for(;H<=J&&H<=re;){const le=I[J],oe=C[re]=W?Cr(C[re]):Nn(C[re]);if(cs(le,oe))R(le,oe,k,null,B,V,Y,K,W);else break;J--,re--}if(H>J){if(H<=re){const le=re+1,oe=le<ie?C[le].el:L;for(;H<=re;)R(null,C[H]=W?Cr(C[H]):Nn(C[H]),k,oe,B,V,Y,K,W),H++}}else if(H>re)for(;H<=J;)xe(I[H],B,V,!0),H++;else{const le=H,oe=H,ge=new Map;for(H=oe;H<=re;H++){const ft=C[H]=W?Cr(C[H]):Nn(C[H]);ft.key!=null&&ge.set(ft.key,H)}let Ae,vt=0;const ht=re-oe+1;let tn=!1,Et=0;const mr=new Array(ht);for(H=0;H<ht;H++)mr[H]=0;for(H=le;H<=J;H++){const ft=I[H];if(vt>=ht){xe(ft,B,V,!0);continue}let nn;if(ft.key!=null)nn=ge.get(ft.key);else for(Ae=oe;Ae<=re;Ae++)if(mr[Ae-oe]===0&&cs(ft,C[Ae])){nn=Ae;break}nn===void 0?xe(ft,B,V,!0):(mr[nn-oe]=H+1,nn>=Et?Et=nn:tn=!0,R(ft,C[nn],k,null,B,V,Y,K,W),vt++)}const Oi=tn?jb(mr):Xs;for(Ae=Oi.length-1,H=ht-1;H>=0;H--){const ft=oe+H,nn=C[ft],ma=ft+1<ie?C[ft+1].el:L;mr[H]===0?R(null,nn,k,ma,B,V,Y,K,W):tn&&(Ae<0||H!==Oi[Ae]?Ut(nn,k,ma,2):Ae--)}}},Ut=(I,C,k,L,B=null)=>{const{el:V,type:Y,transition:K,children:W,shapeFlag:H}=I;if(H&6){Ut(I.component.subTree,C,k,L);return}if(H&128){I.suspense.move(C,k,L);return}if(H&64){Y.move(I,C,k,ne);return}if(Y===sn){r(V,C,k);for(let J=0;J<W.length;J++)Ut(W[J],C,k,L);r(I.anchor,C,k);return}if(Y===bu){$(I,C,k);return}if(L!==2&&H&1&&K)if(L===0)K.beforeEnter(V),r(V,C,k),xt(()=>K.enter(V),B);else{const{leave:J,delayLeave:re,afterLeave:le}=K,oe=()=>r(V,C,k),ge=()=>{J(V,()=>{oe(),le&&le()})};re?re(V,oe,ge):ge()}else r(V,C,k)},xe=(I,C,k,L=!1,B=!1)=>{const{type:V,props:Y,ref:K,children:W,dynamicChildren:H,shapeFlag:ie,patchFlag:J,dirs:re,cacheIndex:le}=I;if(J===-2&&(B=!1),K!=null&&_l(K,null,k,I,!0),le!=null&&(C.renderCache[le]=void 0),ie&256){C.ctx.deactivate(I);return}const oe=ie&1&&re,ge=!po(I);let Ae;if(ge&&(Ae=Y&&Y.onVnodeBeforeUnmount)&&Rn(Ae,C,I),ie&6)Bt(I.component,k,L);else{if(ie&128){I.suspense.unmount(k,L);return}oe&&ns(I,null,C,"beforeUnmount"),ie&64?I.type.remove(I,C,k,ne,L):H&&!H.hasOnce&&(V!==sn||J>0&&J&64)?yt(H,C,k,!1,!0):(V===sn&&J&384||!B&&ie&16)&&yt(W,C,k),L&&Ve(I)}(ge&&(Ae=Y&&Y.onVnodeUnmounted)||oe)&&xt(()=>{Ae&&Rn(Ae,C,I),oe&&ns(I,null,C,"unmounted")},k)},Ve=I=>{const{type:C,el:k,anchor:L,transition:B}=I;if(C===sn){Cn(k,L);return}if(C===bu){j(I);return}const V=()=>{s(k),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(I.shapeFlag&1&&B&&!B.persisted){const{leave:Y,delayLeave:K}=B,W=()=>Y(k,V);K?K(I.el,V,W):W()}else V()},Cn=(I,C)=>{let k;for(;I!==C;)k=m(I),s(I),I=k;s(C)},Bt=(I,C,k)=>{const{bum:L,scope:B,job:V,subTree:Y,um:K,m:W,a:H}=I;lm(W),lm(H),L&&_u(L),B.stop(),V&&(V.flags|=8,xe(Y,I,C,k)),K&&xt(K,C),xt(()=>{I.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},yt=(I,C,k,L=!1,B=!1,V=0)=>{for(let Y=V;Y<I.length;Y++)xe(I[Y],C,k,L,B)},M=I=>{if(I.shapeFlag&6)return M(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const C=m(I.anchor||I.el),k=C&&C[yv];return k?m(k):C};let z=!1;const Q=(I,C,k)=>{I==null?C._vnode&&xe(C._vnode,null,null,!0):R(C._vnode||null,I,C,null,null,null,k),C._vnode=I,z||(z=!0,Xp(),pv(),z=!1)},ne={p:R,um:xe,m:Ut,r:Ve,mt:ve,mc:v,pc:_e,pbc:w,n:M,o:t};return{render:Q,hydrate:void 0,createApp:Nb(Q)}}function Au({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function rs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function $b(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Df(t,e,n=!1){const r=t.children,s=e.children;if(he(r)&&he(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Cr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Df(o,a)),a.type===Ec&&(a.el=o.el)}}function jb(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function qv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qv(e)}function lm(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Hb=Symbol.for("v-scx"),Wb=()=>Ze(Hb);function yc(t,e){return Of(t,null,e)}function cn(t,e,n){return Of(t,e,n)}function Of(t,e,n=Ue){const{immediate:r,deep:s,flush:i,once:o}=n,a=it({},n),c=e&&r||!e&&i!=="post";let u;if(Mo){if(i==="sync"){const g=Wb();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Mn,g.resume=Mn,g.pause=Mn,g}}const h=lt;a.call=(g,E,R)=>Tn(g,h,E,R);let f=!1;i==="post"?a.scheduler=g=>{xt(g,h&&h.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,E)=>{E?g():Cf(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const m=ab(t,e,a);return Mo&&(u?u.push(m):c&&m()),m}function qb(t,e,n){const r=this.proxy,s=Ye(t)?t.includes(".")?Kv(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=Zo(this),a=Of(s,i.bind(r),n);return o(),a}function Kv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Kb=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${un(e)}Modifiers`]||t[`${Rs(e)}Modifiers`];function Gb(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ue;let s=n;const i=e.startsWith("update:"),o=i&&Kb(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>Ye(h)?h.trim():h)),o.number&&(s=n.map(bA)));let a,c=r[a=gu(e)]||r[a=gu(un(e))];!c&&i&&(c=r[a=gu(Rs(e))]),c&&Tn(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Tn(u,t,6,s)}}function Gv(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!de(t)){const c=u=>{const h=Gv(u,e,!0);h&&(a=!0,it(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(je(t)&&r.set(t,null),null):(he(i)?i.forEach(c=>o[c]=null):it(o,i),je(t)&&r.set(t,o),o)}function vc(t,e){return!t||!oc(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,Rs(e))||De(t,e))}function cm(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:m,setupState:g,ctx:E,inheritAttrs:R}=t,P=gl(t);let O,x;try{if(n.shapeFlag&4){const j=s||r,Z=j;O=Nn(u.call(Z,j,h,f,g,m,E)),x=a}else{const j=e;O=Nn(j.length>1?j(f,{attrs:a,slots:o,emit:c}):j(f,null)),x=e.props?a:zb(a)}}catch(j){go.length=0,fc(j,t,1),O=$e(Ht)}let $=O;if(x&&R!==!1){const j=Object.keys(x),{shapeFlag:Z}=$;j.length&&Z&7&&(i&&j.some(hf)&&(x=Qb(x,i)),$=Ur($,x,!1,!0))}return n.dirs&&($=Ur($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&ys($,n.transition),O=$,gl(P),O}const zb=t=>{let e;for(const n in t)(n==="class"||n==="style"||oc(n))&&((e||(e={}))[n]=t[n]);return e},Qb=(t,e)=>{const n={};for(const r in t)(!hf(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Yb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?um(r,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const m=h[f];if(o[m]!==r[m]&&!vc(u,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?um(r,o,u):!0:!!o;return!1}function um(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!vc(n,i))return!0}return!1}function Xb({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const zv=t=>t.__isSuspense;function Jb(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):ub(t)}const sn=Symbol.for("v-fgt"),Ec=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),bu=Symbol.for("v-stc"),go=[];let Xt=null;function Qv(t=!1){go.push(Xt=t?null:[])}function Zb(){go.pop(),Xt=go[go.length-1]||null}let Oo=1;function hm(t,e=!1){Oo+=t,t<0&&Xt&&e&&(Xt.hasOnce=!0)}function Yv(t){return t.dynamicChildren=Oo>0?Xt||Xs:null,Zb(),Oo>0&&Xt&&Xt.push(t),t}function aU(t,e,n,r,s,i){return Yv(Zv(t,e,n,r,s,i,!0))}function Xv(t,e,n,r,s){return Yv($e(t,e,n,r,s,!0))}function vl(t){return t?t.__v_isVNode===!0:!1}function cs(t,e){return t.type===e.type&&t.key===e.key}const Jv=({key:t})=>t??null,Za=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||Qe(t)||de(t)?{i:Ft,r:t,k:e,f:!!n}:t:null);function Zv(t,e=null,n=null,r=0,s=null,i=t===sn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Jv(e),ref:e&&Za(e),scopeId:gv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ft};return a?(Mf(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ye(n)?8:16),Oo>0&&!o&&Xt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Xt.push(c),c}const $e=eC;function eC(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ib)&&(t=Ht),vl(t)){const a=Ur(t,e,!0);return n&&Mf(a,n),Oo>0&&!i&&Xt&&(a.shapeFlag&6?Xt[Xt.indexOf(t)]=a:Xt.push(a)),a.patchFlag=-2,a}if(hC(t)&&(t=t.__vccOpts),e){e=tC(e);let{class:a,style:c}=e;a&&!Ye(a)&&(e.class=mf(a)),je(c)&&(If(c)&&!he(c)&&(c=it({},c)),e.style=pf(c))}const o=Ye(t)?1:zv(t)?128:vv(t)?64:je(t)?4:de(t)?2:0;return Zv(t,e,n,r,s,o,i,!0)}function tC(t){return t?If(t)||Fv(t)?it({},t):t:null}function Ur(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?eE(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Jv(u),ref:e&&e.ref?n&&i?he(i)?i.concat(Za(e)):[i,Za(e)]:Za(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==sn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ur(t.ssContent),ssFallback:t.ssFallback&&Ur(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ys(h,c.clone(h)),h}function nC(t=" ",e=0){return $e(Ec,null,t,e)}function lU(t="",e=!1){return e?(Qv(),Xv(Ht,null,t)):$e(Ht,null,t)}function Nn(t){return t==null||typeof t=="boolean"?$e(Ht):he(t)?$e(sn,null,t.slice()):vl(t)?Cr(t):$e(Ec,null,String(t))}function Cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ur(t)}function Mf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Mf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Fv(e)?e._ctx=Ft:s===3&&Ft&&(Ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:Ft},n=32):(e=String(e),r&64?(n=16,e=[nC(e)]):n=8);t.children=e,t.shapeFlag|=n}function eE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=mf([e.class,r.class]));else if(s==="style")e.style=pf([e.style,r.style]);else if(oc(s)){const i=e[s],o=r[s];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Rn(t,e,n,r=null){Tn(t,e,7,[n,r])}const rC=xv();let sC=0;function iC(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||rC,i={uid:sC++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bv(r,s),emitsOptions:Gv(r,s),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:r.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Gb.bind(null,i),t.ce&&t.ce(i),i}let lt=null;const Tc=()=>lt||Ft;let El,uh;{const t=cc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};El=e("__VUE_INSTANCE_SETTERS__",n=>lt=n),uh=e("__VUE_SSR_SETTERS__",n=>Mo=n)}const Zo=t=>{const e=lt;return El(t),t.scope.on(),()=>{t.scope.off(),El(e)}},fm=()=>{lt&&lt.scope.off(),El(null)};function tE(t){return t.vnode.shapeFlag&4}let Mo=!1;function oC(t,e=!1,n=!1){e&&uh(e);const{props:r,children:s}=t.vnode,i=tE(t);Ob(t,r,i,e),Vb(t,s,n);const o=i?aC(t,e):void 0;return e&&uh(!1),o}function aC(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ab);const{setup:r}=n;if(r){zr();const s=t.setupContext=r.length>1?cC(t):null,i=Zo(t),o=Jo(r,t,0,[t.props,s]),a=Fy(o);if(Qr(),i(),(a||t.sp)&&!po(t)&&Rv(t),a){if(o.then(fm,fm),e)return o.then(c=>{dm(t,c)}).catch(c=>{fc(c,t,0)});t.asyncDep=o}else dm(t,o)}else nE(t)}function dm(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:je(e)&&(t.setupState=uv(e)),nE(t)}function nE(t,e,n){const r=t.type;t.render||(t.render=r.render||Mn);{const s=Zo(t);zr();try{bb(t)}finally{Qr(),s()}}}const lC={get(t,e){return bt(t,"get",""),t[e]}};function cC(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,lC),slots:t.slots,emit:t.emit,expose:e}}function wc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(uv(Af(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in mo)return mo[n](t)},has(e,n){return n in e||n in mo}})):t.proxy}function uC(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function hC(t){return de(t)&&"__vccOpts"in t}const ce=(t,e)=>ib(t,e,Mo);function Ic(t,e,n){const r=arguments.length;return r===2?je(e)&&!he(e)?vl(e)?$e(t,null,[e]):$e(t,e):$e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&vl(n)&&(n=[n]),$e(t,e,n))}const fC="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hh;const pm=typeof window<"u"&&window.trustedTypes;if(pm)try{hh=pm.createPolicy("vue",{createHTML:t=>t})}catch{}const rE=hh?t=>hh.createHTML(t):t=>t,dC="http://www.w3.org/2000/svg",pC="http://www.w3.org/1998/Math/MathML",Qn=typeof document<"u"?document:null,mm=Qn&&Qn.createElement("template"),mC={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Qn.createElementNS(dC,t):e==="mathml"?Qn.createElementNS(pC,t):n?Qn.createElement(t,{is:n}):Qn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Qn.createTextNode(t),createComment:t=>Qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mm.innerHTML=rE(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=mm.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},vr="transition",Gi="animation",oi=Symbol("_vtc"),sE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},iE=it({},Iv,sE),gC=t=>(t.displayName="Transition",t.props=iE,t),cU=gC((t,{slots:e})=>Ic(db,oE(t),e)),ss=(t,e=[])=>{he(t)?t.forEach(n=>n(...e)):t&&t(...e)},gm=t=>t?he(t)?t.some(e=>e.length>1):t.length>1:!1;function oE(t){const e={};for(const A in t)A in sE||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,E=_C(s),R=E&&E[0],P=E&&E[1],{onBeforeEnter:O,onEnter:x,onEnterCancelled:$,onLeave:j,onLeaveCancelled:Z,onBeforeAppear:q=O,onAppear:b=x,onAppearCancelled:v=$}=e,y=(A,T,ve,ze)=>{A._enterCancelled=ze,wr(A,T?h:a),wr(A,T?u:o),ve&&ve()},w=(A,T)=>{A._isLeaving=!1,wr(A,f),wr(A,g),wr(A,m),T&&T()},S=A=>(T,ve)=>{const ze=A?b:x,ke=()=>y(T,A,ve);ss(ze,[T,ke]),_m(()=>{wr(T,A?c:i),Sn(T,A?h:a),gm(ze)||ym(T,r,R,ke)})};return it(e,{onBeforeEnter(A){ss(O,[A]),Sn(A,i),Sn(A,o)},onBeforeAppear(A){ss(q,[A]),Sn(A,c),Sn(A,u)},onEnter:S(!1),onAppear:S(!0),onLeave(A,T){A._isLeaving=!0;const ve=()=>w(A,T);Sn(A,f),A._enterCancelled?(Sn(A,m),fh()):(fh(),Sn(A,m)),_m(()=>{A._isLeaving&&(wr(A,f),Sn(A,g),gm(j)||ym(A,r,P,ve))}),ss(j,[A,ve])},onEnterCancelled(A){y(A,!1,void 0,!0),ss($,[A])},onAppearCancelled(A){y(A,!0,void 0,!0),ss(v,[A])},onLeaveCancelled(A){w(A),ss(Z,[A])}})}function _C(t){if(t==null)return null;if(je(t))return[Cu(t.enter),Cu(t.leave)];{const e=Cu(t);return[e,e]}}function Cu(t){return CA(t)}function Sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[oi]||(t[oi]=new Set)).add(e)}function wr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[oi];n&&(n.delete(e),n.size||(t[oi]=void 0))}function _m(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let yC=0;function ym(t,e,n,r){const s=t._endId=++yC,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=aE(t,e);if(!o)return r();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,m),i()},m=g=>{g.target===t&&++h>=c&&f()};setTimeout(()=>{h<c&&f()},a+1),t.addEventListener(u,m)}function aE(t,e){const n=window.getComputedStyle(t),r=E=>(n[E]||"").split(", "),s=r(`${vr}Delay`),i=r(`${vr}Duration`),o=vm(s,i),a=r(`${Gi}Delay`),c=r(`${Gi}Duration`),u=vm(a,c);let h=null,f=0,m=0;e===vr?o>0&&(h=vr,f=o,m=i.length):e===Gi?u>0&&(h=Gi,f=u,m=c.length):(f=Math.max(o,u),h=f>0?o>u?vr:Gi:null,m=h?h===vr?i.length:c.length:0);const g=h===vr&&/\b(transform|all)(,|$)/.test(r(`${vr}Property`).toString());return{type:h,timeout:f,propCount:m,hasTransform:g}}function vm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Em(n)+Em(t[r])))}function Em(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function fh(){return document.body.offsetHeight}function vC(t,e,n){const r=t[oi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Tl=Symbol("_vod"),lE=Symbol("_vsh"),uU={beforeMount(t,{value:e},{transition:n}){t[Tl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):zi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),zi(t,!0),r.enter(t)):r.leave(t,()=>{zi(t,!1)}):zi(t,e))},beforeUnmount(t,{value:e}){zi(t,e)}};function zi(t,e){t.style.display=e?t[Tl]:"none",t[lE]=!e}const EC=Symbol(""),TC=/(^|;)\s*display\s*:/;function wC(t,e,n){const r=t.style,s=Ye(n);let i=!1;if(n&&!s){if(e)if(Ye(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&el(r,a,"")}else for(const o in e)n[o]==null&&el(r,o,"");for(const o in n)o==="display"&&(i=!0),el(r,o,n[o])}else if(s){if(e!==n){const o=r[EC];o&&(n+=";"+o),r.cssText=n,i=TC.test(n)}}else e&&t.removeAttribute("style");Tl in t&&(t[Tl]=i?r.display:"",t[lE]&&(r.display="none"))}const Tm=/\s*!important$/;function el(t,e,n){if(he(n))n.forEach(r=>el(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=IC(t,e);Tm.test(n)?t.setProperty(Rs(r),n.replace(Tm,""),"important"):t[r]=n}}const wm=["Webkit","Moz","ms"],Ru={};function IC(t,e){const n=Ru[e];if(n)return n;let r=un(e);if(r!=="filter"&&r in t)return Ru[e]=r;r=Xo(r);for(let s=0;s<wm.length;s++){const i=wm[s]+r;if(i in t)return Ru[e]=i}return e}const Im="http://www.w3.org/1999/xlink";function Am(t,e,n,r,s,i=DA(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Im,e.slice(6,e.length)):t.setAttributeNS(Im,e,n):n==null||i&&!jy(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Gr(n)?String(n):n)}function bm(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?rE(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=jy(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function AC(t,e,n,r){t.addEventListener(e,n,r)}function bC(t,e,n,r){t.removeEventListener(e,n,r)}const Cm=Symbol("_vei");function CC(t,e,n,r,s=null){const i=t[Cm]||(t[Cm]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=RC(e);if(r){const u=i[e]=kC(r,s);AC(t,a,u,c)}else o&&(bC(t,a,o,c),i[e]=void 0)}}const Rm=/(?:Once|Passive|Capture)$/;function RC(t){let e;if(Rm.test(t)){e={};let r;for(;r=t.match(Rm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rs(t.slice(2)),e]}let Su=0;const SC=Promise.resolve(),PC=()=>Su||(SC.then(()=>Su=0),Su=Date.now());function kC(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Tn(NC(r,n.value),e,5,[r])};return n.value=t,n.attached=PC(),n}function NC(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Sm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,DC=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?vC(t,r,o):e==="style"?wC(t,n,r):oc(e)?hf(e)||CC(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):OC(t,e,r,o))?(bm(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Am(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ye(r))?bm(t,un(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Am(t,e,r,o))};function OC(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Sm(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Sm(e)&&Ye(n)?!1:e in t}const cE=new WeakMap,uE=new WeakMap,wl=Symbol("_moveCb"),Pm=Symbol("_enterCb"),MC=t=>(delete t.props.mode,t),xC=MC({name:"TransitionGroup",props:it({},iE,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Tc(),r=wv();let s,i;return Nv(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!UC(s[0].el,n.vnode.el,o))return;s.forEach(LC),s.forEach(VC);const a=s.filter(FC);fh(),a.forEach(c=>{const u=c.el,h=u.style;Sn(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const f=u[wl]=m=>{m&&m.target!==u||(!m||/transform$/.test(m.propertyName))&&(u.removeEventListener("transitionend",f),u[wl]=null,wr(u,o))};u.addEventListener("transitionend",f)})}),()=>{const o=Ee(t),a=oE(o);let c=o.tag||sn;if(s=[],i)for(let u=0;u<i.length;u++){const h=i[u];h.el&&h.el instanceof Element&&(s.push(h),ys(h,Do(h,a,r,n)),cE.set(h,h.el.getBoundingClientRect()))}i=e.default?Rf(e.default()):[];for(let u=0;u<i.length;u++){const h=i[u];h.key!=null&&ys(h,Do(h,a,r,n))}return $e(c,null,i)}}}),hU=xC;function LC(t){const e=t.el;e[wl]&&e[wl](),e[Pm]&&e[Pm]()}function VC(t){uE.set(t,t.el.getBoundingClientRect())}function FC(t){const e=cE.get(t),n=uE.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function UC(t,e,n){const r=t.cloneNode(),s=t[oi];s&&s.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=aE(r);return i.removeChild(r),o}const BC=["ctrl","shift","alt","meta"],$C={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>BC.some(n=>t[`${n}Key`]&&!e.includes(n))},fU=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=$C[e[o]];if(a&&a(s,e))return}return t(s,...i)})},jC=it({patchProp:DC},mC);let km;function HC(){return km||(km=Ub(jC))}const WC=(...t)=>{const e=HC().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=KC(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,qC(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function qC(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function KC(t){return Ye(t)?document.querySelector(t):t}function GC(t,e){let n;function r(){n=uc(),n.run(()=>e.length?e(()=>{n==null||n.stop(),r()}):e())}cn(t,s=>{s&&!n?r():s||(n==null||n.stop(),n=void 0)},{immediate:!0}),Gy(()=>{n==null||n.stop()})}const Wt=typeof window<"u",dU=Wt&&"IntersectionObserver"in window,zC=Wt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function hE(t,e,n){const r=e.length-1;if(r<0)return t===void 0?n:t;for(let s=0;s<r;s++){if(t==null)return n;t=t[e[s]]}return t==null||t[e[r]]===void 0?n:t[e[r]]}function QC(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(r=>QC(t[r],e[r]))}function dh(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),hE(t,e.split("."),n))}function pU(t,e,n){if(e===!0)return t===void 0?n:t;if(e==null||typeof e=="boolean")return n;if(t!==Object(t)){if(typeof e!="function")return n;const s=e(t,n);return typeof s>"u"?n:s}if(typeof e=="string")return dh(t,e,n);if(Array.isArray(e))return hE(t,e,n);if(typeof e!="function")return n;const r=e(t,n);return typeof r>"u"?n:r}function fE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,r)=>e+r)}function La(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function mU(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function Nm(t){let e;return t!==null&&typeof t=="object"&&((e=Object.getPrototypeOf(t))===Object.prototype||e===null)}function dE(t){if(t&&"$el"in t){const e=t.$el;return(e==null?void 0:e.nodeType)===Node.TEXT_NODE?e.nextElementSibling:e}return t}const gU=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),_U=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function yU(t){return Object.keys(t)}function Pu(t,e){return e.every(n=>t.hasOwnProperty(n))}function YC(t,e){const n={};for(const r of e)Object.hasOwn(t,r)&&(n[r]=t[r]);return n}function Dm(t,e,n){const r=Object.create(null),s=Object.create(null);for(const i in t)e.some(o=>o instanceof RegExp?o.test(i):o===i)?r[i]=t[i]:s[i]=t[i];return[r,s]}function XC(t,e){const n={...t};return e.forEach(r=>delete n[r]),n}const pE=/^on[^a-z]/,vU=t=>pE.test(t),JC=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"];function EU(t){const[e,n]=Dm(t,[pE]),r=XC(e,JC),[s,i]=Dm(n,["class","style","id",/^data-/]);return Object.assign(s,e),Object.assign(i,r),[s,i]}function TU(t){return t==null?[]:Array.isArray(t)?t:[t]}function mE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function Om(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function Mm(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function ZC(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<t.length;)n.push(t.substr(r,e)),r+=e;return n}function kt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in t)r[s]=t[s];for(const s in e){const i=t[s],o=e[s];if(Nm(i)&&Nm(o)){r[s]=kt(i,o,n);continue}if(n&&Array.isArray(i)&&Array.isArray(o)){r[s]=n(i,o);continue}r[s]=o}return r}function eR(t){return t.map(e=>e.type===sn?eR(e.children):e).flat()}function ms(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(ms.cache.has(t))return ms.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return ms.cache.set(t,e),e}ms.cache=new Map;function to(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>to(t,n)).flat(1);if(e.suspense)return to(t,e.ssContent);if(Array.isArray(e.children))return e.children.map(n=>to(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return to(t,e.component.subTree).flat(1)}return[]}function wU(t){const e=jt({}),n=ce(t);return yc(()=>{for(const r in n.value)e[r]=n.value[r]},{flush:"sync"}),bf(e)}function IU(t,e){return t.includes(e)}function AU(t){return t[2].toLowerCase()+t.slice(3)}const bU=()=>[Function,Array];function CU(t,e){return e="on"+Xo(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function RU(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(Array.isArray(t))for(const s of t)s(...n);else typeof t=="function"&&t(...n)}function tR(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(r=>`${r}${e?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...t.querySelectorAll(n)]}function nR(t,e,n){let r,s=t.indexOf(document.activeElement);const i=e==="next"?1:-1;do s+=i,r=t[s];while((!r||r.offsetParent==null||!((n==null?void 0:n(r))??!0))&&s<t.length&&s>=0);return r}function rR(t,e){var r,s,i,o;const n=tR(t);if(!e)(t===document.activeElement||!t.contains(document.activeElement))&&((r=n[0])==null||r.focus());else if(e==="first")(s=n[0])==null||s.focus();else if(e==="last")(i=n.at(-1))==null||i.focus();else if(typeof e=="number")(o=n[e])==null||o.focus();else{const a=nR(n,e);a?a.focus():rR(t,e==="next"?"first":"last")}}function SU(t,e){if(!(Wt&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${e})`)))return null;try{return!!t&&t.matches(e)}catch{return null}}function PU(t,e){if(!Wt||t===0)return e(),()=>{};const n=window.setTimeout(e,t);return()=>window.clearTimeout(n)}function kU(t,e){const n=t.clientX,r=t.clientY,s=e.getBoundingClientRect(),i=s.left,o=s.top,a=s.right,c=s.bottom;return n>=i&&n<=a&&r>=o&&r<=c}function sR(){const t=xn(),e=n=>{t.value=n};return Object.defineProperty(e,"value",{enumerable:!0,get:()=>t.value,set:n=>t.value=n}),Object.defineProperty(e,"el",{enumerable:!0,get:()=>dE(t.value)}),e}function NU(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"||typeof t=="bigint"}const Us=2.4,xm=.2126729,Lm=.7151522,Vm=.072175,iR=.55,oR=.58,aR=.57,lR=.62,Va=.03,Fm=1.45,cR=5e-4,uR=1.25,hR=1.25,fR=.078,Um=12.82051282051282,Fa=.06,dR=.001;function Bm(t,e){const n=(t.r/255)**Us,r=(t.g/255)**Us,s=(t.b/255)**Us,i=(e.r/255)**Us,o=(e.g/255)**Us,a=(e.b/255)**Us;let c=n*xm+r*Lm+s*Vm,u=i*xm+o*Lm+a*Vm;if(c<=Va&&(c+=(Va-c)**Fm),u<=Va&&(u+=(Va-u)**Fm),Math.abs(u-c)<cR)return 0;let h;if(u>c){const f=(u**iR-c**oR)*uR;h=f<dR?0:f<fR?f-f*Um*Fa:f-Fa}else{const f=(u**lR-c**aR)*hR;h=f>-.001?0:f>-.078?f-f*Um*Fa:f+Fa}return h*100}function DU(t,e){e=Array.isArray(e)?e.slice(0,-1).map(n=>`'${n}'`).join(", ")+` or '${e.at(-1)}'`:`'${e}'`}const Il=.20689655172413793,pR=t=>t>Il**3?Math.cbrt(t):t/(3*Il**2)+4/29,mR=t=>t>Il?t**3:3*Il**2*(t-4/29);function gE(t){const e=pR,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function _E(t){const e=mR,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const gR=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],_R=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,yR=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],vR=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function yE(t){const e=Array(3),n=_R,r=gR;for(let s=0;s<3;++s)e[s]=Math.round(mE(n(r[s][0]*t[0]+r[s][1]*t[1]+r[s][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function xf(t){let{r:e,g:n,b:r}=t;const s=[0,0,0],i=vR,o=yR;e=i(e/255),n=i(n/255),r=i(r/255);for(let a=0;a<3;++a)s[a]=o[a][0]*e+o[a][1]*n+o[a][2]*r;return s}function ER(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function OU(t){return ER(t)&&!/^((rgb|hsl)a?\()?var\(--/.test(t)}const $m=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,TR={rgb:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),rgba:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),hsl:(t,e,n,r)=>jm({h:t,s:e,l:n,a:r}),hsla:(t,e,n,r)=>jm({h:t,s:e,l:n,a:r}),hsv:(t,e,n,r)=>xo({h:t,s:e,v:n,a:r}),hsva:(t,e,n,r)=>xo({h:t,s:e,v:n,a:r})};function Jn(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&$m.test(t)){const{groups:e}=t.match($m),{fn:n,values:r}=e,s=r.split(/,\s*/).map(i=>i.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(i)/100:parseFloat(i));return TR[n](...s)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),IR(e)}else if(typeof t=="object"){if(Pu(t,["r","g","b"]))return t;if(Pu(t,["h","s","l"]))return xo(vE(t));if(Pu(t,["h","s","v"]))return xo(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function xo(t){const{h:e,s:n,v:r,a:s}=t,i=a=>{const c=(a+e/60)%6;return r-r*n*Math.max(Math.min(c,4-c,1),0)},o=[i(5),i(3),i(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:s}}function jm(t){return xo(vE(t))}function vE(t){const{h:e,s:n,l:r,a:s}=t,i=r+n*Math.min(r,1-r),o=i===0?0:2-2*r/i;return{h:e,s:o,v:i,a:s}}function Ua(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function wR(t){let{r:e,g:n,b:r,a:s}=t;return`#${[Ua(e),Ua(n),Ua(r),s!==void 0?Ua(Math.round(s*255)):""].join("")}`}function IR(t){t=AR(t);let[e,n,r,s]=ZC(t,2).map(i=>parseInt(i,16));return s=s===void 0?s:s/255,{r:e,g:n,b:r,a:s}}function AR(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=Om(Om(t,6),8,"F")),t}function bR(t,e){const n=gE(xf(t));return n[0]=n[0]+e*10,yE(_E(n))}function CR(t,e){const n=gE(xf(t));return n[0]=n[0]-e*10,yE(_E(n))}function RR(t){const e=Jn(t);return xf(e)[1]}function SR(t){const e=Math.abs(Bm(Jn(0),Jn(t)));return Math.abs(Bm(Jn(16777215),Jn(t)))>Math.min(e,50)?"#fff":"#000"}function Yr(t,e){return n=>Object.keys(t).reduce((r,s)=>{const o=typeof t[s]=="object"&&t[s]!=null&&!Array.isArray(t[s])?t[s]:{type:t[s]};return n&&s in n?r[s]={...o,default:n[s]}:r[s]=o,e&&!r[s].source&&(r[s].source=e),r},{})}const PR=Yr({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function dr(t,e){const n=Tc();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}function kR(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=dr(t).type;return ms((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let EE=0,tl=new WeakMap;function Lf(){const t=dr("getUid");if(tl.has(t))return tl.get(t);{const e=EE++;return tl.set(t,e),e}}Lf.reset=()=>{EE=0,tl=new WeakMap};function NR(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:dr("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}const ai=Symbol.for("vuetify:defaults");function DR(t){return Kt(t)}function Vf(){const t=Ze(ai);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function MU(t,e){const n=Vf(),r=Kt(t),s=ce(()=>{if(pn(e==null?void 0:e.disabled))return n.value;const o=pn(e==null?void 0:e.scoped),a=pn(e==null?void 0:e.reset),c=pn(e==null?void 0:e.root);if(r.value==null&&!(o||a||c))return n.value;let u=kt(r.value,{prev:n.value});if(o)return u;if(a||c){const h=Number(a||1/0);for(let f=0;f<=h&&!(!u||!("prev"in u));f++)u=u.prev;return u&&typeof c=="string"&&c in u&&(u=kt(kt(u,{prev:u}),u[c])),u}return u.prev?kt(u.prev,u):u});return sr(ai,s),s}function OR(t,e){var n,r;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((r=t.props)==null?void 0:r[ms(e)])<"u"}function MR(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Vf();const r=dr("useDefaults");if(e=e??r.type.name??r.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const s=ce(()=>{var c;return(c=n.value)==null?void 0:c[t._as??e]}),i=new Proxy(t,{get(c,u){var f,m,g,E,R,P,O;const h=Reflect.get(c,u);return u==="class"||u==="style"?[(f=s.value)==null?void 0:f[u],h].filter(x=>x!=null):typeof u=="string"&&!OR(r.vnode,u)?((m=s.value)==null?void 0:m[u])!==void 0?(g=s.value)==null?void 0:g[u]:((R=(E=n.value)==null?void 0:E.global)==null?void 0:R[u])!==void 0?(O=(P=n.value)==null?void 0:P.global)==null?void 0:O[u]:h:h}}),o=xn();yc(()=>{if(s.value){const c=Object.entries(s.value).filter(u=>{let[h]=u;return h.startsWith(h[0].toUpperCase())});o.value=c.length?Object.fromEntries(c):void 0}else o.value=void 0});function a(){const c=NR(ai,r);sr(ai,ce(()=>o.value?kt((c==null?void 0:c.value)??{},o.value):c==null?void 0:c.value))}return{props:i,provideSubDefaults:a}}function ea(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=Yr(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(r){return YC(r,e)},t.props._as=String,t.setup=function(r,s){const i=Vf();if(!i.value)return t._setup(r,s);const{props:o,provideSubDefaults:a}=MR(r,r._as??t.name,i),c=t._setup(o,s);return a(),c}}return t}function TE(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?ea:pc)(e)}function xR(t){const e=dr("useRender");e.render=t}function LR(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const i=dr("useProxiedModel"),o=Kt(t[e]!==void 0?t[e]:n),a=ms(e),u=ce(a!==e?()=>{var f,m,g,E;return t[e],!!(((f=i.vnode.props)!=null&&f.hasOwnProperty(e)||(m=i.vnode.props)!=null&&m.hasOwnProperty(a))&&((g=i.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${e}`)||(E=i.vnode.props)!=null&&E.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var f,m;return t[e],!!((f=i.vnode.props)!=null&&f.hasOwnProperty(e)&&((m=i.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${e}`)))});GC(()=>!u.value,()=>{cn(()=>t[e],f=>{o.value=f})});const h=ce({get(){const f=t[e];return r(u.value?f:o.value)},set(f){const m=s(f),g=Ee(u.value?t[e]:o.value);g===m||r(g)===f||(o.value=m,i==null||i.emit(`update:${e}`,m))}});return Object.defineProperty(h,"externalValue",{get:()=>u.value?t[e]:o.value}),h}const VR={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},fileUpload:{title:"Drag and drop files here",divider:"or",browse:"Browse Files"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},Hm="$vuetify.",Wm=(t,e)=>t.replace(/\{(\d+)\}/g,(n,r)=>String(e[+r])),wE=(t,e,n)=>function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];if(!r.startsWith(Hm))return Wm(r,i);const a=r.replace(Hm,""),c=t.value&&n.value[t.value],u=e.value&&n.value[e.value];let h=dh(c,a,null);return h||(`${r}${t.value}`,h=dh(u,a,null)),h||(h=r),typeof h!="string"&&(h=r),Wm(h,i)};function IE(t,e){return(n,r)=>new Intl.NumberFormat([t.value,e.value],r).format(n)}function ku(t,e,n){const r=LR(t,e,t[e]??n.value);return r.value=t[e]??n.value,cn(n,s=>{t[e]==null&&(r.value=n.value)}),r}function AE(t){return e=>{const n=ku(e,"locale",t.current),r=ku(e,"fallback",t.fallback),s=ku(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:r,messages:s,t:wE(n,r,s),n:IE(n,r),provide:AE({current:n,fallback:r,messages:s})}}}function FR(t){const e=xn((t==null?void 0:t.locale)??"en"),n=xn((t==null?void 0:t.fallback)??"en"),r=Kt({en:VR,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:r,t:wE(e,n,r),n:IE(e,n),provide:AE({current:e,fallback:n,messages:r})}}const Al=Symbol.for("vuetify:locale");function UR(t){return t.name!=null}function BR(t){const e=t!=null&&t.adapter&&UR(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:FR(t),n=jR(e,t);return{...e,...n}}function xU(){const t=Ze(Al);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function $R(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function jR(t,e){const n=Kt((e==null?void 0:e.rtl)??$R()),r=ce(()=>n.value[t.current.value]??!1);return{isRtl:r,rtl:n,rtlClasses:ce(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}function bE(){const t=Ze(Al);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const Ac={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function HR(t,e,n){const r=[];let s=[];const i=CE(t),o=RE(t),a=n??Ac[e.slice(-2).toUpperCase()]??0,c=(i.getDay()-a+7)%7,u=(o.getDay()-a+7)%7;for(let h=0;h<c;h++){const f=new Date(i);f.setDate(f.getDate()-(c-h)),s.push(f)}for(let h=1;h<=o.getDate();h++){const f=new Date(t.getFullYear(),t.getMonth(),h);s.push(f),s.length===7&&(r.push(s),s=[])}for(let h=1;h<7-u;h++){const f=new Date(o);f.setDate(f.getDate()+h),s.push(f)}return s.length>0&&r.push(s),r}function WR(t,e,n){const r=n??Ac[e.slice(-2).toUpperCase()]??0,s=new Date(t);for(;s.getDay()!==r;)s.setDate(s.getDate()-1);return s}function qR(t,e){const n=new Date(t),r=((Ac[e.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==r;)n.setDate(n.getDate()+1);return n}function CE(t){return new Date(t.getFullYear(),t.getMonth(),1)}function RE(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function KR(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const GR=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function SE(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(GR.test(t))return KR(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const qm=new Date(2e3,0,2);function zR(t,e){const n=e??Ac[t.slice(-2).toUpperCase()]??0;return fE(7).map(r=>{const s=new Date(qm);return s.setDate(qm.getDate()+n+r),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(s)})}function QR(t,e,n,r){const s=SE(t)??new Date,i=r==null?void 0:r[e];if(typeof i=="function")return i(s,e,n);let o={};switch(e){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=s.getDate(),c=new Intl.DateTimeFormat(n,{month:"long"}).format(s);return`${a} ${c}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(s.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric"};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"};break;case"fullDateTime12h":o={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":return o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric"},new Intl.DateTimeFormat(n,o).format(s).replace(/, /g," ");case"keyboardDateTime12h":return o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",hour12:!0},new Intl.DateTimeFormat(n,o).format(s).replace(/, /g," ");case"keyboardDateTime24h":return o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",hour12:!1},new Intl.DateTimeFormat(n,o).format(s).replace(/, /g," ");default:o=i??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(s)}function YR(t,e){const n=t.toJsDate(e),r=n.getFullYear(),s=Mm(String(n.getMonth()+1),2,"0"),i=Mm(String(n.getDate()),2,"0");return`${r}-${s}-${i}`}function XR(t){const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)}function JR(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function ZR(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function eS(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function tS(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function nS(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function rS(t){return t.getFullYear()}function sS(t){return t.getMonth()}function iS(t){return t.getDate()}function oS(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function aS(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function lS(t){return t.getHours()}function cS(t){return t.getMinutes()}function uS(t){return new Date(t.getFullYear(),0,1)}function hS(t){return new Date(t.getFullYear(),11,31)}function fS(t,e){return bl(t,e[0])&&mS(t,e[1])}function dS(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function bl(t,e){return t.getTime()>e.getTime()}function pS(t,e){return bl(ph(t),ph(e))}function mS(t,e){return t.getTime()<e.getTime()}function Km(t,e){return t.getTime()===e.getTime()}function gS(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function _S(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function yS(t,e){return t.getFullYear()===e.getFullYear()}function vS(t,e,n){const r=new Date(t),s=new Date(e);switch(n){case"years":return r.getFullYear()-s.getFullYear();case"quarters":return Math.floor((r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12)/4);case"months":return r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12;case"weeks":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24));case"hours":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60));case"minutes":return Math.floor((r.getTime()-s.getTime())/(1e3*60));case"seconds":return Math.floor((r.getTime()-s.getTime())/1e3);default:return r.getTime()-s.getTime()}}function ES(t,e){const n=new Date(t);return n.setHours(e),n}function TS(t,e){const n=new Date(t);return n.setMinutes(e),n}function wS(t,e){const n=new Date(t);return n.setMonth(e),n}function IS(t,e){const n=new Date(t);return n.setDate(e),n}function AS(t,e){const n=new Date(t);return n.setFullYear(e),n}function ph(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function bS(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class CS{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return SE(e)}toJsDate(e){return e}toISO(e){return YR(this,e)}parseISO(e){return XR(e)}addMinutes(e,n){return JR(e,n)}addHours(e,n){return ZR(e,n)}addDays(e,n){return eS(e,n)}addWeeks(e,n){return tS(e,n)}addMonths(e,n){return nS(e,n)}getWeekArray(e,n){return HR(e,this.locale,n?Number(n):void 0)}startOfWeek(e,n){return WR(e,this.locale,n?Number(n):void 0)}endOfWeek(e){return qR(e,this.locale)}startOfMonth(e){return CE(e)}endOfMonth(e){return RE(e)}format(e,n){return QR(e,n,this.locale,this.formats)}isEqual(e,n){return Km(e,n)}isValid(e){return dS(e)}isWithinRange(e,n){return fS(e,n)}isAfter(e,n){return bl(e,n)}isAfterDay(e,n){return pS(e,n)}isBefore(e,n){return!bl(e,n)&&!Km(e,n)}isSameDay(e,n){return gS(e,n)}isSameMonth(e,n){return _S(e,n)}isSameYear(e,n){return yS(e,n)}setMinutes(e,n){return TS(e,n)}setHours(e,n){return ES(e,n)}setMonth(e,n){return wS(e,n)}setDate(e,n){return IS(e,n)}setYear(e,n){return AS(e,n)}getDiff(e,n,r){return vS(e,n,r)}getWeekdays(e){return zR(this.locale,e?Number(e):void 0)}getYear(e){return rS(e)}getMonth(e){return sS(e)}getDate(e){return iS(e)}getNextMonth(e){return oS(e)}getPreviousMonth(e){return aS(e)}getHours(e){return lS(e)}getMinutes(e){return cS(e)}startOfDay(e){return ph(e)}endOfDay(e){return bS(e)}startOfYear(e){return uS(e)}endOfYear(e){return hS(e)}}const RS=Symbol.for("vuetify:date-options"),Gm=Symbol.for("vuetify:date-adapter");function SS(t,e){const n=kt({adapter:CS,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:PS(n,e)}}function PS(t,e){const n=jt(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return cn(e.current,r=>{n.locale=t.locale[r]??r??n.locale}),n}const LU=["sm","md","lg","xl","xxl"],mh=Symbol.for("vuetify:display"),zm={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},kS=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:zm;return kt(zm,t)};function Qm(t){return Wt&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function Ym(t){return Wt&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function Xm(t){const e=Wt&&!t?window.navigator.userAgent:"ssr";function n(E){return!!e.match(E)}const r=n(/android/i),s=n(/iphone|ipad|ipod/i),i=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),c=n(/edge/i),u=n(/firefox/i),h=n(/opera/i),f=n(/win/i),m=n(/mac/i),g=n(/linux/i);return{android:r,ios:s,cordova:i,electron:o,chrome:a,edge:c,firefox:u,opera:h,win:f,mac:m,linux:g,touch:zC,ssr:e==="ssr"}}function NS(t,e){const{thresholds:n,mobileBreakpoint:r}=kS(t),s=xn(Ym(e)),i=xn(Xm(e)),o=jt({}),a=xn(Qm(e));function c(){s.value=Ym(),a.value=Qm()}function u(){c(),i.value=Xm()}return yc(()=>{const h=a.value<n.sm,f=a.value<n.md&&!h,m=a.value<n.lg&&!(f||h),g=a.value<n.xl&&!(m||f||h),E=a.value<n.xxl&&!(g||m||f||h),R=a.value>=n.xxl,P=h?"xs":f?"sm":m?"md":g?"lg":E?"xl":"xxl",O=typeof r=="number"?r:n[r],x=a.value<O;o.xs=h,o.sm=f,o.md=m,o.lg=g,o.xl=E,o.xxl=R,o.smAndUp=!h,o.mdAndUp=!(h||f),o.lgAndUp=!(h||f||m),o.xlAndUp=!(h||f||m||g),o.smAndDown=!(m||g||E||R),o.mdAndDown=!(g||E||R),o.lgAndDown=!(E||R),o.xlAndDown=!R,o.name=P,o.height=s.value,o.width=a.value,o.mobile=x,o.mobileBreakpoint=r,o.platform=i.value,o.thresholds=n}),Wt&&window.addEventListener("resize",c,{passive:!0}),{...bf(o),update:u,ssr:!!e}}const VU=Yr({mobile:{type:Boolean,default:!1},mobileBreakpoint:[Number,String]},"display");function FU(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{mobile:null},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:kR();const n=Ze(mh);if(!n)throw new Error("Could not find Vuetify display injection");const r=ce(()=>t.mobile?!0:typeof t.mobileBreakpoint=="number"?n.width.value<t.mobileBreakpoint:t.mobileBreakpoint?n.width.value<n.thresholds.value[t.mobileBreakpoint]:t.mobile===null?n.mobile.value:!1),s=ce(()=>e?{[`${e}--mobile`]:r.value}:{});return{...n,displayClasses:s,mobile:r}}const PE=Symbol.for("vuetify:goto");function kE(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function DS(t){return Ff(t)??(document.scrollingElement||document.body)}function Ff(t){return typeof t=="string"?document.querySelector(t):dE(t)}function Nu(t,e,n){if(typeof t=="number")return e&&n?-t:t;let r=Ff(t),s=0;for(;r;)s+=e?r.offsetLeft:r.offsetTop,r=r.offsetParent;return s}function OS(t,e){return{rtl:e.isRtl,options:kt(kE(),t)}}async function Jm(t,e,n,r){const s=n?"scrollLeft":"scrollTop",i=kt((r==null?void 0:r.options)??kE(),e),o=r==null?void 0:r.rtl.value,a=(typeof t=="number"?t:Ff(t))??0,c=i.container==="parent"&&a instanceof HTMLElement?a.parentElement:DS(i.container),u=typeof i.easing=="function"?i.easing:i.patterns[i.easing];if(!u)throw new TypeError(`Easing function "${i.easing}" not found.`);let h;if(typeof a=="number")h=Nu(a,n,o);else if(h=Nu(a,n,o)-Nu(c,n,o),i.layout){const E=window.getComputedStyle(a).getPropertyValue("--v-layout-top");E&&(h-=parseInt(E,10))}h+=i.offset,h=MS(c,h,!!o,!!n);const f=c[s]??0;if(h===f)return Promise.resolve(h);const m=performance.now();return new Promise(g=>requestAnimationFrame(function E(R){const O=(R-m)/i.duration,x=Math.floor(f+(h-f)*u(mE(O,0,1)));if(c[s]=x,O>=1&&Math.abs(x-c[s])<10)return g(h);if(O>2)return g(c[s]);requestAnimationFrame(E)}))}function UU(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=Ze(PE),{isRtl:n}=bE();if(!e)throw new Error("[Vuetify] Could not find injected goto instance");const r={...e,rtl:ce(()=>e.rtl.value||n.value)};async function s(i,o){return Jm(i,kt(t,o),!1,r)}return s.horizontal=async(i,o)=>Jm(i,kt(t,o),!0,r),s}function MS(t,e,n,r){const{scrollWidth:s,scrollHeight:i}=t,[o,a]=t===document.scrollingElement?[window.innerWidth,window.innerHeight]:[t.offsetWidth,t.offsetHeight];let c,u;return r?n?(c=-(s-o),u=0):(c=0,u=s-o):(c=0,u=i+-a),Math.max(Math.min(e,u),c)}const xS={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper",upload:"mdi-cloud-upload"},LS={component:t=>Ic(DE,{...t,class:"mdi"})},VS=[String,Function,Object,Array],gh=Symbol.for("vuetify:icons"),bc=Yr({icon:{type:VS},tag:{type:String,required:!0}},"icon"),Zm=TE()({name:"VComponentIcon",props:bc(),setup(t,e){let{slots:n}=e;return()=>{const r=t.icon;return $e(t.tag,null,{default:()=>{var s;return[t.icon?$e(r,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}}),NE=ea({name:"VSvgIcon",inheritAttrs:!1,props:bc(),setup(t,e){let{attrs:n}=e;return()=>$e(t.tag,eE(n,{style:null}),{default:()=>[$e("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(r=>Array.isArray(r)?$e("path",{d:r[0],"fill-opacity":r[1]},null):$e("path",{d:r},null)):$e("path",{d:t.icon},null)])]})}});ea({name:"VLigatureIcon",props:bc(),setup(t){return()=>$e(t.tag,null,{default:()=>[t.icon]})}});const DE=ea({name:"VClassIcon",props:bc(),setup(t){return()=>$e(t.tag,{class:t.icon},null)}});function FS(){return{svg:{component:NE},class:{component:DE}}}function US(t){const e=FS(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=LS),kt({defaultSet:n,sets:e,aliases:{...xS,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}const BU=t=>{const e=Ze(gh);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:ce(()=>{var c;const r=pn(t);if(!r)return{component:Zm};let s=r;if(typeof s=="string"&&(s=s.trim(),s.startsWith("$")&&(s=(c=e.aliases)==null?void 0:c[s.slice(1)])),Array.isArray(s))return{component:NE,icon:s};if(typeof s!="string")return{component:Zm,icon:s};const i=Object.keys(e.sets).find(u=>typeof s=="string"&&s.startsWith(`${u}:`)),o=i?s.slice(i.length+1):s;return{component:e.sets[i??e.defaultSet].component,icon:o}})}},Cl=Symbol.for("vuetify:theme"),BS=Yr({theme:String},"theme");function eg(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function $S(){var r,s;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:eg();const e=eg();if(!t)return{...e,isDisabled:!0};const n={};for(const[i,o]of Object.entries(t.themes??{})){const a=o.dark||i==="dark"?(r=e.themes)==null?void 0:r.dark:(s=e.themes)==null?void 0:s.light;n[i]=kt(a,o)}return kt(e,{...t,themes:n})}function jS(t){const e=$S(t),n=Kt(e.defaultTheme),r=Kt(e.themes),s=ce(()=>{const h={};for(const[f,m]of Object.entries(r.value)){const g=h[f]={...m,colors:{...m.colors}};if(e.variations)for(const E of e.variations.colors){const R=g.colors[E];if(R)for(const P of["lighten","darken"]){const O=P==="lighten"?bR:CR;for(const x of fE(e.variations[P],1))g.colors[`${E}-${P}-${x}`]=wR(O(Jn(R),x))}}for(const E of Object.keys(g.colors)){if(/^on-[a-z]/.test(E)||g.colors[`on-${E}`])continue;const R=`on-${E}`,P=Jn(g.colors[E]);g.colors[R]=SR(P)}}return h}),i=ce(()=>s.value[n.value]),o=ce(()=>{var E;const h=[];(E=i.value)!=null&&E.dark&&is(h,":root",["color-scheme: dark"]),is(h,":root",tg(i.value));for(const[R,P]of Object.entries(s.value))is(h,`.v-theme--${R}`,[`color-scheme: ${P.dark?"dark":"normal"}`,...tg(P)]);const f=[],m=[],g=new Set(Object.values(s.value).flatMap(R=>Object.keys(R.colors)));for(const R of g)/^on-[a-z]/.test(R)?is(m,`.${R}`,[`color: rgb(var(--v-theme-${R})) !important`]):(is(f,`.bg-${R}`,[`--v-theme-overlay-multiplier: var(--v-theme-${R}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${R})) !important`,`color: rgb(var(--v-theme-on-${R})) !important`]),is(m,`.text-${R}`,[`color: rgb(var(--v-theme-${R})) !important`]),is(m,`.border-${R}`,[`--v-border-color: var(--v-theme-${R})`]));return h.push(...f,...m),h.map((R,P)=>P===0?R:`    ${R}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function c(h){if(e.isDisabled)return;const f=h._context.provides.usehead;if(f)if(f.push){const m=f.push(a);Wt&&cn(o,()=>{m.patch(a)})}else Wt?(f.addHeadObjs(ce(a)),yc(()=>f.updateDOM())):f.addHeadObjs(a());else{let g=function(){if(typeof document<"u"&&!m){const E=document.createElement("style");E.type="text/css",E.id="vuetify-theme-stylesheet",e.cspNonce&&E.setAttribute("nonce",e.cspNonce),m=E,document.head.appendChild(m)}m&&(m.innerHTML=o.value)},m=Wt?document.getElementById("vuetify-theme-stylesheet"):null;Wt?cn(o,g,{immediate:!0}):g()}}const u=ce(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:c,isDisabled:e.isDisabled,name:n,themes:r,current:i,computedThemes:s,themeClasses:u,styles:o,global:{name:n,current:i}}}function HS(t){dr("provideTheme");const e=Ze(Cl,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=ce(()=>t.theme??e.name.value),r=ce(()=>e.themes.value[n.value]),s=ce(()=>e.isDisabled?void 0:`v-theme--${n.value}`),i={...e,name:n,current:r,themeClasses:s};return sr(Cl,i),i}function is(t,e,n){t.push(`${e} {
`,...n.map(r=>`  ${r};
`),`}
`)}function tg(t){const e=t.dark?2:1,n=t.dark?1:2,r=[];for(const[s,i]of Object.entries(t.colors)){const o=Jn(i);r.push(`--v-theme-${s}: ${o.r},${o.g},${o.b}`),s.startsWith("on-")||r.push(`--v-theme-${s}-overlay-multiplier: ${RR(i)>.18?e:n}`)}for(const[s,i]of Object.entries(t.variables)){const o=typeof i=="string"&&i.startsWith("#")?Jn(i):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;r.push(`--v-${s}: ${a??i}`)}return r}function WS(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=sR(),r=Kt();if(Wt){const s=new ResizeObserver(i=>{t==null||t(i,s),i.length&&(e==="content"?r.value=i[0].contentRect:r.value=i[0].target.getBoundingClientRect())});_c(()=>{s.disconnect()}),cn(()=>n.el,(i,o)=>{o&&(s.unobserve(o),r.value=void 0),i&&s.observe(i)},{flush:"post"})}return{resizeRef:n,contentRect:Tf(r)}}const Rl=Symbol.for("vuetify:layout"),OE=Symbol.for("vuetify:layout-item"),ng=1e3,qS=Yr({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),$U=Yr({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function jU(){const t=Ze(Rl);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}function HU(t){const e=Ze(Rl);if(!e)throw new Error("[Vuetify] Could not find injected layout");const n=t.id??`layout-item-${Lf()}`,r=dr("useLayoutItem");sr(OE,{id:n});const s=xn(!1);Pv(()=>s.value=!0),Sv(()=>s.value=!1);const{layoutItemStyles:i,layoutItemScrimStyles:o}=e.register(r,{...t,active:ce(()=>s.value?!1:t.active.value),id:n});return _c(()=>e.unregister(n)),{layoutItemStyles:i,layoutRect:e.layoutRect,layoutItemScrimStyles:o}}const KS=(t,e,n,r)=>{let s={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...s}}];for(const o of t){const a=e.get(o),c=n.get(o),u=r.get(o);if(!a||!c||!u)continue;const h={...s,[a.value]:parseInt(s[a.value],10)+(u.value?parseInt(c.value,10):0)};i.push({id:o,layer:h}),s=h}return i};function GS(t){const e=Ze(Rl,null),n=ce(()=>e?e.rootZIndex.value-100:ng),r=Kt([]),s=jt(new Map),i=jt(new Map),o=jt(new Map),a=jt(new Map),c=jt(new Map),{resizeRef:u,contentRect:h}=WS(),f=ce(()=>{const q=new Map,b=t.overlaps??[];for(const v of b.filter(y=>y.includes(":"))){const[y,w]=v.split(":");if(!r.value.includes(y)||!r.value.includes(w))continue;const S=s.get(y),A=s.get(w),T=i.get(y),ve=i.get(w);!S||!A||!T||!ve||(q.set(w,{position:S.value,amount:parseInt(T.value,10)}),q.set(y,{position:A.value,amount:-parseInt(ve.value,10)}))}return q}),m=ce(()=>{const q=[...new Set([...o.values()].map(v=>v.value))].sort((v,y)=>v-y),b=[];for(const v of q){const y=r.value.filter(w=>{var S;return((S=o.get(w))==null?void 0:S.value)===v});b.push(...y)}return KS(b,s,i,a)}),g=ce(()=>!Array.from(c.values()).some(q=>q.value)),E=ce(()=>m.value[m.value.length-1].layer),R=ce(()=>({"--v-layout-left":La(E.value.left),"--v-layout-right":La(E.value.right),"--v-layout-top":La(E.value.top),"--v-layout-bottom":La(E.value.bottom),...g.value?void 0:{transition:"none"}})),P=ce(()=>m.value.slice(1).map((q,b)=>{let{id:v}=q;const{layer:y}=m.value[b],w=i.get(v),S=s.get(v);return{id:v,...y,size:Number(w.value),position:S.value}})),O=q=>P.value.find(b=>b.id===q),x=dr("createLayout"),$=xn(!1);Sf(()=>{$.value=!0}),sr(Rl,{register:(q,b)=>{let{id:v,order:y,position:w,layoutSize:S,elementSize:A,active:T,disableTransitions:ve,absolute:ze}=b;o.set(v,y),s.set(v,w),i.set(v,S),a.set(v,T),ve&&c.set(v,ve);const ae=to(OE,x==null?void 0:x.vnode).indexOf(q);ae>-1?r.value.splice(ae,0,v):r.value.push(v);const _e=ce(()=>P.value.findIndex(xe=>xe.id===v)),ut=ce(()=>n.value+m.value.length*2-_e.value*2),Gt=ce(()=>{const xe=w.value==="left"||w.value==="right",Ve=w.value==="right",Cn=w.value==="bottom",Bt=A.value??S.value,yt=Bt===0?"%":"px",M={[w.value]:0,zIndex:ut.value,transform:`translate${xe?"X":"Y"}(${(T.value?0:-(Bt===0?100:Bt))*(Ve||Cn?-1:1)}${yt})`,position:ze.value||n.value!==ng?"absolute":"fixed",...g.value?void 0:{transition:"none"}};if(!$.value)return M;const z=P.value[_e.value];if(!z)throw new Error(`[Vuetify] Could not find layout item "${v}"`);const Q=f.value.get(v);return Q&&(z[Q.position]+=Q.amount),{...M,height:xe?`calc(100% - ${z.top}px - ${z.bottom}px)`:A.value?`${A.value}px`:void 0,left:Ve?void 0:`${z.left}px`,right:Ve?`${z.right}px`:void 0,top:w.value!=="bottom"?`${z.top}px`:void 0,bottom:w.value!=="top"?`${z.bottom}px`:void 0,width:xe?A.value?`${A.value}px`:void 0:`calc(100% - ${z.left}px - ${z.right}px)`}}),Ut=ce(()=>({zIndex:ut.value-1}));return{layoutItemStyles:Gt,layoutItemScrimStyles:Ut,zIndex:ut}},unregister:q=>{o.delete(q),s.delete(q),i.delete(q),a.delete(q),c.delete(q),r.value=r.value.filter(b=>b!==q)},mainRect:E,mainStyles:R,getLayoutItem:O,items:P,layoutRect:h,rootZIndex:n});const j=ce(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),Z=ce(()=>({zIndex:e?n.value:void 0,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:j,layoutStyles:Z,getLayoutItem:O,items:P,layoutRect:h,layoutRef:u}}function ME(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,r=kt(e,n),{aliases:s={},components:i={},directives:o={}}=r,a=DR(r.defaults),c=NS(r.display,r.ssr),u=jS(r.theme),h=US(r.icons),f=BR(r.locale),m=SS(r.date,f),g=OS(r.goTo,f);return{install:R=>{for(const P in o)R.directive(P,o[P]);for(const P in i)R.component(P,i[P]);for(const P in s)R.component(P,ea({...s[P],name:P,aliasName:s[P].name}));if(u.install(R),R.provide(ai,a),R.provide(mh,c),R.provide(Cl,u),R.provide(gh,h),R.provide(Al,f),R.provide(RS,m.options),R.provide(Gm,m.instance),R.provide(PE,g),Wt&&r.ssr)if(R.$nuxt)R.$nuxt.hook("app:suspense:resolve",()=>{c.update()});else{const{mount:P}=R;R.mount=function(){const O=P(...arguments);return dc(()=>c.update()),R.mount=P,O}}Lf.reset(),R.mixin({computed:{$vuetify(){return jt({defaults:Bs.call(this,ai),display:Bs.call(this,mh),theme:Bs.call(this,Cl),icons:Bs.call(this,gh),locale:Bs.call(this,Al),date:Bs.call(this,Gm)})}}})},defaults:a,display:c,theme:u,icons:h,locale:f,date:m,goTo:g}}const zS="3.7.14";ME.version=zS;function Bs(t){var r,s;const e=this.$,n=((r=e.parent)==null?void 0:r.provides)??((s=e.vnode.appContext)==null?void 0:s.provides);if(n&&t in n)return n[t]}const QS=ME({theme:{defaultTheme:"dark"}});/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let xE;const Cc=t=>xE=t,LE=Symbol();function _h(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var _o;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(_o||(_o={}));function YS(){const t=uc(!0),e=t.run(()=>Kt({}));let n=[],r=[];const s=Af({install(i){Cc(s),s._a=i,i.provide(LE,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const VE=()=>{};function rg(t,e,n,r=VE){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ky()&&Gy(s),s}function $s(t,...e){t.slice().forEach(n=>{n(...e)})}const XS=t=>t(),sg=Symbol(),Du=Symbol();function yh(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];_h(s)&&_h(r)&&t.hasOwnProperty(n)&&!Qe(r)&&!rr(r)?t[n]=yh(s,r):t[n]=r}return t}const JS=Symbol();function ZS(t){return!_h(t)||!t.hasOwnProperty(JS)}const{assign:Ir}=Object;function eP(t){return!!(Qe(t)&&t.effect)}function tP(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const h=bf(n.state.value[t]);return Ir(h,i,Object.keys(o||{}).reduce((f,m)=>(f[m]=Af(ce(()=>{Cc(n);const g=n._s.get(t);return o[m].call(g,g)})),f),{}))}return c=FE(t,u,e,n,r,!0),c}function FE(t,e,n={},r,s,i){let o;const a=Ir({actions:{}},n),c={deep:!0};let u,h,f=[],m=[],g;const E=r.state.value[t];!i&&!E&&(r.state.value[t]={}),Kt({});let R;function P(v){let y;u=h=!1,typeof v=="function"?(v(r.state.value[t]),y={type:_o.patchFunction,storeId:t,events:g}):(yh(r.state.value[t],v),y={type:_o.patchObject,payload:v,storeId:t,events:g});const w=R=Symbol();dc().then(()=>{R===w&&(u=!0)}),h=!0,$s(f,y,r.state.value[t])}const O=i?function(){const{state:y}=n,w=y?y():{};this.$patch(S=>{Ir(S,w)})}:VE;function x(){o.stop(),f=[],m=[],r._s.delete(t)}const $=(v,y="")=>{if(sg in v)return v[Du]=y,v;const w=function(){Cc(r);const S=Array.from(arguments),A=[],T=[];function ve(ae){A.push(ae)}function ze(ae){T.push(ae)}$s(m,{args:S,name:w[Du],store:Z,after:ve,onError:ze});let ke;try{ke=v.apply(this&&this.$id===t?this:Z,S)}catch(ae){throw $s(T,ae),ae}return ke instanceof Promise?ke.then(ae=>($s(A,ae),ae)).catch(ae=>($s(T,ae),Promise.reject(ae))):($s(A,ke),ke)};return w[sg]=!0,w[Du]=y,w},j={_p:r,$id:t,$onAction:rg.bind(null,m),$patch:P,$reset:O,$subscribe(v,y={}){const w=rg(f,v,y.detached,()=>S()),S=o.run(()=>cn(()=>r.state.value[t],A=>{(y.flush==="sync"?h:u)&&v({storeId:t,type:_o.direct,events:g},A)},Ir({},c,y)));return w},$dispose:x},Z=jt(j);r._s.set(t,Z);const b=(r._a&&r._a.runWithContext||XS)(()=>r._e.run(()=>(o=uc()).run(()=>e({action:$}))));for(const v in b){const y=b[v];if(Qe(y)&&!eP(y)||rr(y))i||(E&&ZS(y)&&(Qe(y)?y.value=E[v]:yh(y,E[v])),r.state.value[t][v]=y);else if(typeof y=="function"){const w=$(y,v);b[v]=w,a.actions[v]=y}}return Ir(Z,b),Ir(Ee(Z),b),Object.defineProperty(Z,"$state",{get:()=>r.state.value[t],set:v=>{P(y=>{Ir(y,v)})}}),r._p.forEach(v=>{Ir(Z,o.run(()=>v({store:Z,app:r._a,pinia:r,options:a})))}),E&&i&&n.hydrate&&n.hydrate(Z.$state,E),u=!0,h=!0,Z}/*! #__NO_SIDE_EFFECTS__ */function WU(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(a,c){const u=Db();return a=a||(u?Ze(LE,null):null),a&&Cc(a),a=xE,a._s.has(r)||(i?FE(r,e,s,a):tP(r,s,a)),a._s.get(r)}return o.$id=r,o}function qU(t){{const e=Ee(t),n={};for(const r in e){const s=e[r];s.effect?n[r]=ce({get:()=>t[r],set(i){t[r]=i}}):(Qe(s)||rr(s))&&(n[r]=rb(t,r))}return n}}const nP=YS();/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ws=typeof document<"u";function UE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function rP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&UE(t.default)}const Ne=Object.assign;function Ou(t,e){const n={};for(const r in e){const s=e[r];n[r]=wn(s)?s.map(t):t(s)}return n}const yo=()=>{},wn=Array.isArray,BE=/#/g,sP=/&/g,iP=/\//g,oP=/=/g,aP=/\?/g,$E=/\+/g,lP=/%5B/g,cP=/%5D/g,jE=/%5E/g,uP=/%60/g,HE=/%7B/g,hP=/%7C/g,WE=/%7D/g,fP=/%20/g;function Uf(t){return encodeURI(""+t).replace(hP,"|").replace(lP,"[").replace(cP,"]")}function dP(t){return Uf(t).replace(HE,"{").replace(WE,"}").replace(jE,"^")}function vh(t){return Uf(t).replace($E,"%2B").replace(fP,"+").replace(BE,"%23").replace(sP,"%26").replace(uP,"`").replace(HE,"{").replace(WE,"}").replace(jE,"^")}function pP(t){return vh(t).replace(oP,"%3D")}function mP(t){return Uf(t).replace(BE,"%23").replace(aP,"%3F")}function gP(t){return t==null?"":mP(t).replace(iP,"%2F")}function Lo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const _P=/\/$/,yP=t=>t.replace(_P,"");function Mu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=wP(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Lo(o)}}function vP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ig(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function EP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&li(e.matched[r],n.matched[s])&&qE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function li(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!TP(t[n],e[n]))return!1;return!0}function TP(t,e){return wn(t)?og(t,e):wn(e)?og(e,t):t===e}function og(t,e){return wn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function wP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Er={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Vo;(function(t){t.pop="pop",t.push="push"})(Vo||(Vo={}));var vo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vo||(vo={}));function IP(t){if(!t)if(Ws){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),yP(t)}const AP=/^[^#]+#/;function bP(t,e){return t.replace(AP,"#")+e}function CP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Rc=()=>({left:window.scrollX,top:window.scrollY});function RP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=CP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ag(t,e){return(history.state?history.state.position-e:-1)+t}const Eh=new Map;function SP(t,e){Eh.set(t,e)}function PP(t){const e=Eh.get(t);return Eh.delete(t),e}let kP=()=>location.protocol+"//"+location.host;function KE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),ig(c,"")}return ig(n,t)+r+s}function NP(t,e,n,r){let s=[],i=[],o=null;const a=({state:m})=>{const g=KE(t,location),E=n.value,R=e.value;let P=0;if(m){if(n.value=g,e.value=m,o&&o===E){o=null;return}P=R?m.position-R.position:0}else r(g);s.forEach(O=>{O(n.value,E,{delta:P,type:Vo.pop,direction:P?P>0?vo.forward:vo.back:vo.unknown})})};function c(){o=n.value}function u(m){s.push(m);const g=()=>{const E=s.indexOf(m);E>-1&&s.splice(E,1)};return i.push(g),g}function h(){const{history:m}=window;m.state&&m.replaceState(Ne({},m.state,{scroll:Rc()}),"")}function f(){for(const m of i)m();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function lg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Rc():null}}function DP(t){const{history:e,location:n}=window,r={value:KE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const f=t.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:kP()+t+c;try{e[h?"replaceState":"pushState"](u,"",m),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](m)}}function o(c,u){const h=Ne({},e.state,lg(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,h,!0),r.value=c}function a(c,u){const h=Ne({},s.value,e.state,{forward:c,scroll:Rc()});i(h.current,h,!0);const f=Ne({},lg(r.value,c,null),{position:h.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function OP(t){t=IP(t);const e=DP(t),n=NP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ne({location:"",base:t,go:r,createHref:bP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function MP(t){return typeof t=="string"||t&&typeof t=="object"}function GE(t){return typeof t=="string"||typeof t=="symbol"}const zE=Symbol("");var cg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cg||(cg={}));function ci(t,e){return Ne(new Error,{type:t,[zE]:!0},e)}function zn(t,e){return t instanceof Error&&zE in t&&(e==null||!!(t.type&e))}const ug="[^/]+?",xP={sensitive:!1,strict:!1,start:!0,end:!0},LP=/[.+*?^${}()[\]/\\]/g;function VP(t,e){const n=Ne({},xP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const m=u[f];let g=40+(n.sensitive?.25:0);if(m.type===0)f||(s+="/"),s+=m.value.replace(LP,"\\$&"),g+=40;else if(m.type===1){const{value:E,repeatable:R,optional:P,regexp:O}=m;i.push({name:E,repeatable:R,optional:P});const x=O||ug;if(x!==ug){g+=10;try{new RegExp(`(${x})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${E}" (${x}): `+j.message)}}let $=R?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||($=P&&u.length<2?`(?:/${$})`:"/"+$),P&&($+="?"),s+=$,g+=20,P&&(g+=-8),R&&(g+=-20),x===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let m=1;m<h.length;m++){const g=h[m]||"",E=i[m-1];f[E.name]=g&&E.repeatable?g.split("/"):g}return f}function c(u){let h="",f=!1;for(const m of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const g of m)if(g.type===0)h+=g.value;else if(g.type===1){const{value:E,repeatable:R,optional:P}=g,O=E in u?u[E]:"";if(wn(O)&&!R)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const x=wn(O)?O.join("/"):O;if(!x)if(P)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);h+=x}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function FP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function QE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=FP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(hg(r))return 1;if(hg(s))return-1}return s.length-r.length}function hg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const UP={type:0,value:""},BP=/[a-zA-Z0-9_]/;function $P(t){if(!t)return[[]];if(t==="/")return[[UP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",h="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:BP.test(c)?m():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function jP(t,e,n){const r=VP($P(t.path),n),s=Ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function HP(t,e){const n=[],r=new Map;e=mg({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,m,g){const E=!g,R=dg(f);R.aliasOf=g&&g.record;const P=mg(e,f),O=[R];if("alias"in f){const j=typeof f.alias=="string"?[f.alias]:f.alias;for(const Z of j)O.push(dg(Ne({},R,{components:g?g.record.components:R.components,path:Z,aliasOf:g?g.record:R})))}let x,$;for(const j of O){const{path:Z}=j;if(m&&Z[0]!=="/"){const q=m.record.path,b=q[q.length-1]==="/"?"":"/";j.path=m.record.path+(Z&&b+Z)}if(x=jP(j,m,P),g?g.alias.push(x):($=$||x,$!==x&&$.alias.push(x),E&&f.name&&!pg(x)&&o(f.name)),YE(x)&&c(x),R.children){const q=R.children;for(let b=0;b<q.length;b++)i(q[b],x,g&&g.children[b])}g=g||x}return $?()=>{o($)}:yo}function o(f){if(GE(f)){const m=r.get(f);m&&(r.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const m=KP(f,n);n.splice(m,0,f),f.record.name&&!pg(f)&&r.set(f.record.name,f)}function u(f,m){let g,E={},R,P;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw ci(1,{location:f});P=g.record.name,E=Ne(fg(m.params,g.keys.filter($=>!$.optional).concat(g.parent?g.parent.keys.filter($=>$.optional):[]).map($=>$.name)),f.params&&fg(f.params,g.keys.map($=>$.name))),R=g.stringify(E)}else if(f.path!=null)R=f.path,g=n.find($=>$.re.test(R)),g&&(E=g.parse(R),P=g.record.name);else{if(g=m.name?r.get(m.name):n.find($=>$.re.test(m.path)),!g)throw ci(1,{location:f,currentLocation:m});P=g.record.name,E=Ne({},m.params,f.params),R=g.stringify(E)}const O=[];let x=g;for(;x;)O.unshift(x.record),x=x.parent;return{name:P,path:R,params:E,matched:O,meta:qP(O)}}t.forEach(f=>i(f));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function fg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function dg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:WP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function WP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function pg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qP(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function mg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function KP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;QE(t,e[i])<0?r=i:n=i+1}const s=GP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function GP(t){let e=t;for(;e=e.parent;)if(YE(e)&&QE(t,e)===0)return e}function YE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function zP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace($E," "),o=i.indexOf("="),a=Lo(o<0?i:i.slice(0,o)),c=o<0?null:Lo(i.slice(o+1));if(a in e){let u=e[a];wn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function gg(t){let e="";for(let n in t){const r=t[n];if(n=pP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(wn(r)?r.map(i=>i&&vh(i)):[r&&vh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function QP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=wn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const YP=Symbol(""),_g=Symbol(""),Bf=Symbol(""),XE=Symbol(""),Th=Symbol("");function Qi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=m=>{m===!1?c(ci(4,{from:n,to:e})):m instanceof Error?c(m):MP(m)?c(ci(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(m=>c(m))})}function xu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(UE(c)){const h=(c.__vccOpts||c)[e];h&&i.push(Rr(h,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=rP(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&Rr(g,n,r,o,a,s)()}))}}return i}function yg(t){const e=Ze(Bf),n=Ze(XE),r=ce(()=>{const c=pn(t.to);return e.resolve(c)}),s=ce(()=>{const{matched:c}=r.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const m=f.findIndex(li.bind(null,h));if(m>-1)return m;const g=vg(c[u-2]);return u>1&&vg(h)===g&&f[f.length-1].path!==g?f.findIndex(li.bind(null,c[u-2])):m}),i=ce(()=>s.value>-1&&tk(n.params,r.value.params)),o=ce(()=>s.value>-1&&s.value===n.matched.length-1&&qE(n.params,r.value.params));function a(c={}){if(ek(c)){const u=e[pn(t.replace)?"replace":"push"](pn(t.to)).catch(yo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function XP(t){return t.length===1?t[0]:t}const JP=pc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yg,setup(t,{slots:e}){const n=jt(yg(t)),{options:r}=Ze(Bf),s=ce(()=>({[Eg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Eg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&XP(e.default(n));return t.custom?i:Ic("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ZP=JP;function ek(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function tk(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!wn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function vg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Eg=(t,e,n)=>t??e??n,nk=pc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ze(Th),s=ce(()=>t.route||r.value),i=Ze(_g,0),o=ce(()=>{let u=pn(i);const{matched:h}=s.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=ce(()=>s.value.matched[o.value]);sr(_g,ce(()=>o.value+1)),sr(YP,a),sr(Th,s);const c=Kt();return cn(()=>[c.value,a.value,t.name],([u,h,f],[m,g,E])=>{h&&(h.instances[f]=u,g&&g!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!li(h,g)||!m)&&(h.enterCallbacks[f]||[]).forEach(R=>R(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,f=a.value,m=f&&f.components[h];if(!m)return Tg(n.default,{Component:m,route:u});const g=f.props[h],E=g?g===!0?u.params:typeof g=="function"?g(u):g:null,P=Ic(m,Ne({},E,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return Tg(n.default,{Component:P,route:u})||P}}});function Tg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rk=nk;function sk(t){const e=HP(t.routes,t),n=t.parseQuery||zP,r=t.stringifyQuery||gg,s=t.history,i=Qi(),o=Qi(),a=Qi(),c=xn(Er);let u=Er;Ws&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Ou.bind(null,M=>""+M),f=Ou.bind(null,gP),m=Ou.bind(null,Lo);function g(M,z){let Q,ne;return GE(M)?(Q=e.getRecordMatcher(M),ne=z):ne=M,e.addRoute(ne,Q)}function E(M){const z=e.getRecordMatcher(M);z&&e.removeRoute(z)}function R(){return e.getRoutes().map(M=>M.record)}function P(M){return!!e.getRecordMatcher(M)}function O(M,z){if(z=Ne({},z||c.value),typeof M=="string"){const k=Mu(n,M,z.path),L=e.resolve({path:k.path},z),B=s.createHref(k.fullPath);return Ne(k,L,{params:m(L.params),hash:Lo(k.hash),redirectedFrom:void 0,href:B})}let Q;if(M.path!=null)Q=Ne({},M,{path:Mu(n,M.path,z.path).path});else{const k=Ne({},M.params);for(const L in k)k[L]==null&&delete k[L];Q=Ne({},M,{params:f(k)}),z.params=f(z.params)}const ne=e.resolve(Q,z),Se=M.hash||"";ne.params=h(m(ne.params));const I=vP(r,Ne({},M,{hash:dP(Se),path:ne.path})),C=s.createHref(I);return Ne({fullPath:I,hash:Se,query:r===gg?QP(M.query):M.query||{}},ne,{redirectedFrom:void 0,href:C})}function x(M){return typeof M=="string"?Mu(n,M,c.value.path):Ne({},M)}function $(M,z){if(u!==M)return ci(8,{from:z,to:M})}function j(M){return b(M)}function Z(M){return j(Ne(x(M),{replace:!0}))}function q(M){const z=M.matched[M.matched.length-1];if(z&&z.redirect){const{redirect:Q}=z;let ne=typeof Q=="function"?Q(M):Q;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=x(ne):{path:ne},ne.params={}),Ne({query:M.query,hash:M.hash,params:ne.path!=null?{}:M.params},ne)}}function b(M,z){const Q=u=O(M),ne=c.value,Se=M.state,I=M.force,C=M.replace===!0,k=q(Q);if(k)return b(Ne(x(k),{state:typeof k=="object"?Ne({},Se,k.state):Se,force:I,replace:C}),z||Q);const L=Q;L.redirectedFrom=z;let B;return!I&&EP(r,ne,Q)&&(B=ci(16,{to:L,from:ne}),Ut(ne,ne,!0,!1)),(B?Promise.resolve(B):w(L,ne)).catch(V=>zn(V)?zn(V,2)?V:Gt(V):_e(V,L,ne)).then(V=>{if(V){if(zn(V,2))return b(Ne({replace:C},x(V.to),{state:typeof V.to=="object"?Ne({},Se,V.to.state):Se,force:I}),z||L)}else V=A(L,ne,!0,C,Se);return S(L,ne,V),V})}function v(M,z){const Q=$(M,z);return Q?Promise.reject(Q):Promise.resolve()}function y(M){const z=Cn.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(M):M()}function w(M,z){let Q;const[ne,Se,I]=ik(M,z);Q=xu(ne.reverse(),"beforeRouteLeave",M,z);for(const k of ne)k.leaveGuards.forEach(L=>{Q.push(Rr(L,M,z))});const C=v.bind(null,M,z);return Q.push(C),yt(Q).then(()=>{Q=[];for(const k of i.list())Q.push(Rr(k,M,z));return Q.push(C),yt(Q)}).then(()=>{Q=xu(Se,"beforeRouteUpdate",M,z);for(const k of Se)k.updateGuards.forEach(L=>{Q.push(Rr(L,M,z))});return Q.push(C),yt(Q)}).then(()=>{Q=[];for(const k of I)if(k.beforeEnter)if(wn(k.beforeEnter))for(const L of k.beforeEnter)Q.push(Rr(L,M,z));else Q.push(Rr(k.beforeEnter,M,z));return Q.push(C),yt(Q)}).then(()=>(M.matched.forEach(k=>k.enterCallbacks={}),Q=xu(I,"beforeRouteEnter",M,z,y),Q.push(C),yt(Q))).then(()=>{Q=[];for(const k of o.list())Q.push(Rr(k,M,z));return Q.push(C),yt(Q)}).catch(k=>zn(k,8)?k:Promise.reject(k))}function S(M,z,Q){a.list().forEach(ne=>y(()=>ne(M,z,Q)))}function A(M,z,Q,ne,Se){const I=$(M,z);if(I)return I;const C=z===Er,k=Ws?history.state:{};Q&&(ne||C?s.replace(M.fullPath,Ne({scroll:C&&k&&k.scroll},Se)):s.push(M.fullPath,Se)),c.value=M,Ut(M,z,Q,C),Gt()}let T;function ve(){T||(T=s.listen((M,z,Q)=>{if(!Bt.listening)return;const ne=O(M),Se=q(ne);if(Se){b(Ne(Se,{replace:!0,force:!0}),ne).catch(yo);return}u=ne;const I=c.value;Ws&&SP(ag(I.fullPath,Q.delta),Rc()),w(ne,I).catch(C=>zn(C,12)?C:zn(C,2)?(b(Ne(x(C.to),{force:!0}),ne).then(k=>{zn(k,20)&&!Q.delta&&Q.type===Vo.pop&&s.go(-1,!1)}).catch(yo),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),_e(C,ne,I))).then(C=>{C=C||A(ne,I,!1),C&&(Q.delta&&!zn(C,8)?s.go(-Q.delta,!1):Q.type===Vo.pop&&zn(C,20)&&s.go(-1,!1)),S(ne,I,C)}).catch(yo)}))}let ze=Qi(),ke=Qi(),ae;function _e(M,z,Q){Gt(M);const ne=ke.list();return ne.length?ne.forEach(Se=>Se(M,z,Q)):console.error(M),Promise.reject(M)}function ut(){return ae&&c.value!==Er?Promise.resolve():new Promise((M,z)=>{ze.add([M,z])})}function Gt(M){return ae||(ae=!M,ve(),ze.list().forEach(([z,Q])=>M?Q(M):z()),ze.reset()),M}function Ut(M,z,Q,ne){const{scrollBehavior:Se}=t;if(!Ws||!Se)return Promise.resolve();const I=!Q&&PP(ag(M.fullPath,0))||(ne||!Q)&&history.state&&history.state.scroll||null;return dc().then(()=>Se(M,z,I)).then(C=>C&&RP(C)).catch(C=>_e(C,M,z))}const xe=M=>s.go(M);let Ve;const Cn=new Set,Bt={currentRoute:c,listening:!0,addRoute:g,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:R,resolve:O,options:t,push:j,replace:Z,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ke.add,isReady:ut,install(M){const z=this;M.component("RouterLink",ZP),M.component("RouterView",rk),M.config.globalProperties.$router=z,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>pn(c)}),Ws&&!Ve&&c.value===Er&&(Ve=!0,j(s.location).catch(Se=>{}));const Q={};for(const Se in Er)Object.defineProperty(Q,Se,{get:()=>c.value[Se],enumerable:!0});M.provide(Bf,z),M.provide(XE,lv(Q)),M.provide(Th,c);const ne=M.unmount;Cn.add(M),M.unmount=function(){Cn.delete(M),Cn.size<1&&(u=Er,T&&T(),T=null,c.value=Er,Ve=!1,ae=!1),ne()}}};function yt(M){return M.reduce((z,Q)=>z.then(()=>y(Q)),Promise.resolve())}return Bt}function ik(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>li(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>li(u,c))||s.push(c))}return[n,r,s]}function ok(t){const{extendRoutes:e,routes:n}=t;return e&&console.warn('"extendRoutes()" is deprecated, please modify the routes directly. See https://uvr.esm.is/guide/extending-routes.html#extending-routes-at-runtime for an alternative.'),sk(Object.assign(t,{routes:typeof e=="function"&&e(n)||n}))}const ak="modulepreload",lk=function(t){return"/ejc-hub/"+t},wg={},no=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=lk(c),c in wg)return;wg[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":ak,u||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((m,g)=>{f.addEventListener("load",m),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},ck=t=>{const e={};Object.entries(Object.assign({"/src/layouts/default.vue":()=>no(()=>import("./default-BQplxbor.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))})).forEach(([s,i])=>{let o=s.replace("/src/layouts/","").replace(".vue","");e[o]=i});function r(s,i=!0){return s.map(o=>{var a,c,u,h,f,m;if(((a=o.children)==null?void 0:a.length)>0&&(o.children=r(o.children,!1)),i){if(!o.component&&((c=o.children)==null?void 0:c.find(E=>{var R;return(E.path===""||E.path==="/")&&((R=E.meta)==null?void 0:R.isLayout)})))return o;if(((u=o.meta)==null?void 0:u.layout)!==!1)return{path:o.path,component:e[((h=o.meta)==null?void 0:h.layout)||"default"],children:o.path==="/"?[o]:[{...o,path:""}],meta:{isLayout:!0}}}return(f=o.meta)!=null&&f.layout?{path:o.path,component:e[(m=o.meta)==null?void 0:m.layout],children:[{...o,path:""}],meta:{isLayout:!0}}:o})}return r(t)},uk=[{path:"/",name:"/",component:()=>no(()=>import("./index-I6QYtNTe.js"),__vite__mapDeps([12,13,3,4,14]))},{path:"/collection",name:"/collection",component:()=>no(()=>import("./collection-BFWqaTGH.js"),__vite__mapDeps([15,1,2,3,4,5,6,7,8,16,13,14,17,18,19,20,21])),meta:{requiresAuth:!0}},{path:"/matches",name:"/matches",component:()=>no(()=>import("./matches-BG7PQjmc.js"),__vite__mapDeps([22,16,1,13,3,4,14,2,5,17,9,10,20,23])),meta:{requiresAuth:!0}},{path:"/settings",name:"/settings",component:()=>no(()=>import("./settings-DCI_1dWj.js"),__vite__mapDeps([24,18,3,4,2,5,19,7,13,14,20,25])),meta:{requiresAuth:!0}}],hk=()=>{};var Ig={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=function(t,e){if(!t)throw Ti(e)},Ti=function(t){return new Error("Firebase Database ("+JE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),r.push(n[h],n[f],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ZE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new dk;const m=i<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const E=u<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eT=function(t){const e=ZE(t);return Sc.encodeByteArray(e,!0)},Sl=function(t){return eT(t).replace(/\./g,"")},Pl=function(t){try{return Sc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(t){return tT(void 0,t)}function tT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!mk(n)||(t[n]=tT(t[n],e[n]));return t}function mk(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=()=>gk().__FIREBASE_DEFAULTS__,yk=()=>{if(typeof process>"u"||typeof Ig>"u")return;const t=Ig.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pl(t[1]);return e&&JSON.parse(e)},Pc=()=>{try{return hk()||_k()||yk()||vk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ek=t=>{var e,n;return(n=(e=Pc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Tk=t=>{const e=Ek(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nT=()=>{var t;return(t=Pc())===null||t===void 0?void 0:t.config},wk=t=>{var e;return(e=Pc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Sl(JSON.stringify(n)),Sl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $f(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function Ak(){var t;const e=(t=Pc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ck(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rk(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sk(){return JE.NODE_ADMIN===!0}function Pk(){return!Ak()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sT(){try{return typeof indexedDB=="object"}catch{return!1}}function kk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk="FirebaseError";class Hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Nk,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wi.prototype.create)}}class wi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Dk(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Hn(s,a,r)}}function Dk(t,e){return t.replace(Ok,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ok=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t){return JSON.parse(t)}function mt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Uo(Pl(i[0])||""),n=Uo(Pl(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},Mk=function(t){const e=iT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},xk=function(t){const e=iT(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ui(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function wh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kl(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Bo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ag(i)&&Ag(o)){if(!Bo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ag(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):f<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const m=(s<<5|s>>>27)+u+c+h+r[f]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Vk(t,e){const n=new Fk(t,e);return n.subscribe.bind(n)}class Fk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Uk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Lu),s.error===void 0&&(s.error=Lu),s.complete===void 0&&(s.complete=Lu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Uk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lu(){}function Bk(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,X(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t){return t&&t._delegate?t._delegate:t}class In{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wk(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hk(t){return t===as?void 0:t}function Wk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const Kk={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},Gk=ye.INFO,zk={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},Qk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=zk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ta{constructor(e){this.name=e,this._logLevel=Gk,this._logHandler=Qk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const Yk=(t,e)=>e.some(n=>t instanceof n);let bg,Cg;function Xk(){return bg||(bg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jk(){return Cg||(Cg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oT=new WeakMap,Ih=new WeakMap,aT=new WeakMap,Vu=new WeakMap,jf=new WeakMap;function Zk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oT.set(n,t)}).catch(()=>{}),jf.set(e,t),e}function eN(t){if(Ih.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ih.set(t,e)}let Ah={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ih.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tN(t){Ah=t(Ah)}function nN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fu(this),e,...n);return aT.set(r,e.sort?e.sort():[e]),Mr(r)}:Jk().includes(t)?function(...e){return t.apply(Fu(this),e),Mr(oT.get(this))}:function(...e){return Mr(t.apply(Fu(this),e))}}function rN(t){return typeof t=="function"?nN(t):(t instanceof IDBTransaction&&eN(t),Yk(t,Xk())?new Proxy(t,Ah):t)}function Mr(t){if(t instanceof IDBRequest)return Zk(t);if(Vu.has(t))return Vu.get(t);const e=rN(t);return e!==t&&(Vu.set(t,e),jf.set(e,t)),e}const Fu=t=>jf.get(t);function sN(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Mr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Mr(o.result),c.oldVersion,c.newVersion,Mr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const iN=["get","getKey","getAll","getAllKeys","count"],oN=["put","add","delete","clear"],Uu=new Map;function Rg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uu.get(e))return Uu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=oN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||iN.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Uu.set(e,i),i}tN(t=>({...t,get:(e,n,r)=>Rg(e,n)||t.get(e,n,r),has:(e,n)=>!!Rg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bh="@firebase/app",Sg="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new ta("@firebase/app"),cN="@firebase/app-compat",uN="@firebase/analytics-compat",hN="@firebase/analytics",fN="@firebase/app-check-compat",dN="@firebase/app-check",pN="@firebase/auth",mN="@firebase/auth-compat",gN="@firebase/database",_N="@firebase/data-connect",yN="@firebase/database-compat",vN="@firebase/functions",EN="@firebase/functions-compat",TN="@firebase/installations",wN="@firebase/installations-compat",IN="@firebase/messaging",AN="@firebase/messaging-compat",bN="@firebase/performance",CN="@firebase/performance-compat",RN="@firebase/remote-config",SN="@firebase/remote-config-compat",PN="@firebase/storage",kN="@firebase/storage-compat",NN="@firebase/firestore",DN="@firebase/vertexai",ON="@firebase/firestore-compat",MN="firebase",xN="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="[DEFAULT]",LN={[bh]:"fire-core",[cN]:"fire-core-compat",[hN]:"fire-analytics",[uN]:"fire-analytics-compat",[dN]:"fire-app-check",[fN]:"fire-app-check-compat",[pN]:"fire-auth",[mN]:"fire-auth-compat",[gN]:"fire-rtdb",[_N]:"fire-data-connect",[yN]:"fire-rtdb-compat",[vN]:"fire-fn",[EN]:"fire-fn-compat",[TN]:"fire-iid",[wN]:"fire-iid-compat",[IN]:"fire-fcm",[AN]:"fire-fcm-compat",[bN]:"fire-perf",[CN]:"fire-perf-compat",[RN]:"fire-rc",[SN]:"fire-rc-compat",[PN]:"fire-gcs",[kN]:"fire-gcs-compat",[NN]:"fire-fst",[ON]:"fire-fst-compat",[DN]:"fire-vertex","fire-js":"fire-js",[MN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=new Map,VN=new Map,Rh=new Map;function Pg(t,e){try{t.container.addComponent(e)}catch(n){lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Un(t){const e=t.name;if(Rh.has(e))return lr.debug(`There were multiple attempts to register component ${e}.`),!1;Rh.set(e,t);for(const n of Nl.values())Pg(n,t);for(const n of VN.values())Pg(n,t);return!0}function lT(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new wi("app","Firebase",FN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=xN;function cT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ch,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw xr.create("bad-app-name",{appName:String(s)});if(n||(n=nT()),!n)throw xr.create("no-options");const i=Nl.get(s);if(i){if(Bo(n,i.options)&&Bo(r,i.config))return i;throw xr.create("duplicate-app",{appName:s})}const o=new qk(s);for(const c of Rh.values())o.addComponent(c);const a=new UN(n,r,o);return Nl.set(s,a),a}function uT(t=Ch){const e=Nl.get(t);if(!e&&t===Ch&&nT())return cT();if(!e)throw xr.create("no-app",{appName:t});return e}function Jt(t,e,n){var r;let s=(r=LN[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lr.warn(a.join(" "));return}Un(new In(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN="firebase-heartbeat-database",$N=1,$o="firebase-heartbeat-store";let Bu=null;function hT(){return Bu||(Bu=sN(BN,$N,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($o)}catch(n){console.warn(n)}}}}).catch(t=>{throw xr.create("idb-open",{originalErrorMessage:t.message})})),Bu}async function jN(t){try{const n=(await hT()).transaction($o),r=await n.objectStore($o).get(fT(t));return await n.done,r}catch(e){if(e instanceof Hn)lr.warn(e.message);else{const n=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lr.warn(n.message)}}}async function kg(t,e){try{const r=(await hT()).transaction($o,"readwrite");await r.objectStore($o).put(e,fT(t)),await r.done}catch(n){if(n instanceof Hn)lr.warn(n.message);else{const r=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lr.warn(r.message)}}}function fT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=1024,WN=30;class qN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ng();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>WN){const o=zN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){lr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ng(),{heartbeatsToSend:r,unsentEntries:s}=KN(this._heartbeatsCache.heartbeats),i=Sl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return lr.warn(n),""}}}function Ng(){return new Date().toISOString().substring(0,10)}function KN(t,e=HN){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Dg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Dg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sT()?kk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Dg(t){return Sl(JSON.stringify({version:2,heartbeats:t})).length}function zN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(t){Un(new In("platform-logger",e=>new aN(e),"PRIVATE")),Un(new In("heartbeat",e=>new qN(e),"PRIVATE")),Jt(bh,Sg,t),Jt(bh,Sg,"esm2017"),Jt("fire-js","")}QN("");function Hf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function dT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YN=dT,pT=new wi("auth","Firebase",dT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new ta("@firebase/auth");function XN(t,...e){Dl.logLevel<=ye.WARN&&Dl.warn(`Auth (${Xr}): ${t}`,...e)}function nl(t,...e){Dl.logLevel<=ye.ERROR&&Dl.error(`Auth (${Xr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,...e){throw qf(t,...e)}function vn(t,...e){return qf(t,...e)}function Wf(t,e,n){const r=Object.assign(Object.assign({},YN()),{[e]:n});return new wi("auth","Firebase",r).create(e,{appName:t.name})}function gs(t){return Wf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function JN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Bn(t,"argument-error"),Wf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pT.create(t,...e)}function pe(t,e,...n){if(!t)throw qf(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nl(e),new Error(e)}function cr(t,e){t||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ZN(){return Og()==="http:"||Og()==="https:"}function Og(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZN()||Ck()||"connection"in navigator)?navigator.onLine:!0}function tD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){this.shortDelay=e,this.longDelay=n,cr(n>e,"Short delay should be less than long delay!"),this.isMobile=$f()||rT()}get(){return eD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t,e){cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD=new na(3e4,6e4);function Gf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ai(t,e,n,r,s={}){return gT(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ii(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return bk()||(u.referrerPolicy="no-referrer"),mT.fetch()(_T(t,t.config.apiHost,n,a),u)})}async function gT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nD),e);try{const s=new iD(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ba(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ba(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ba(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ba(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Wf(t,h,u);Bn(t,h)}}catch(s){if(s instanceof Hn)throw s;Bn(t,"network-request-failed",{message:String(s)})}}async function sD(t,e,n,r,s={}){const i=await Ai(t,e,n,r,s);return"mfaPendingCredential"in i&&Bn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function _T(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Kf(t.config,s):`${t.config.apiScheme}://${s}`}class iD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),rD.get())})}}function Ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=vn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oD(t,e){return Ai(t,"POST","/v1/accounts:delete",e)}async function yT(t,e){return Ai(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aD(t,e=!1){const n=en(t),r=await n.getIdToken(e),s=zf(r);pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Eo($u(s.auth_time)),issuedAtTime:Eo($u(s.iat)),expirationTime:Eo($u(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $u(t){return Number(t)*1e3}function zf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pl(n);return s?JSON.parse(s):(nl("Failed to decode base64 JWT payload"),null)}catch(s){return nl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Mg(t){const e=zf(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hn&&lD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eo(this.lastLoginAt),this.creationTime=Eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(t){var e;const n=t.auth,r=await t.getIdToken(),s=await jo(t,yT(n,{idToken:r}));pe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?vT(i.providerUserInfo):[],a=hD(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ph(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function uD(t){const e=en(t);await Ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hD(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function vT(t){return t.map(e=>{var{providerId:n}=e,r=Hf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fD(t,e){const n=await gT(t,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=_T(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dD(t,e){return Ai(t,"POST","/v2/accounts:revokeToken",Gf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=Mg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fD(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ei;return r&&(pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(pe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class er{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Hf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ph(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await jo(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aD(this,e)}reload(){return uD(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ol(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(gs(this.auth));const e=await this.getIdToken();return await jo(this,oD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:$,emailVerified:j,isAnonymous:Z,providerData:q,stsTokenManager:b}=n;pe($&&b,e,"internal-error");const v=ei.fromJSON(this.name,b);pe(typeof $=="string",e,"internal-error"),Tr(f,e.name),Tr(m,e.name),pe(typeof j=="boolean",e,"internal-error"),pe(typeof Z=="boolean",e,"internal-error"),Tr(g,e.name),Tr(E,e.name),Tr(R,e.name),Tr(P,e.name),Tr(O,e.name),Tr(x,e.name);const y=new er({uid:$,auth:e,email:m,emailVerified:j,displayName:f,isAnonymous:Z,photoURL:E,phoneNumber:g,tenantId:R,stsTokenManager:v,createdAt:O,lastLoginAt:x});return q&&Array.isArray(q)&&(y.providerData=q.map(w=>Object.assign({},w))),P&&(y._redirectEventId=P),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new ei;s.updateFromServerResponse(n);const i=new er({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ol(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];pe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?vT(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new ei;a.updateFromIdToken(r);const c=new er({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ph(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=new Map;function tr(t){cr(t instanceof Function,"Expected a class definition");let e=xg.get(t);return e?(cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ET.type="NONE";const Lg=ET;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=rl(this.userKey,s.apiKey,i),this.fullPersistenceKey=rl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ti(tr(Lg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||tr(Lg);const o=rl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=er._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ti(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ti(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(AT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(TT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CT(e))return"Blackberry";if(RT(e))return"Webos";if(wT(e))return"Safari";if((e.includes("chrome/")||IT(e))&&!e.includes("edge/"))return"Chrome";if(bT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function TT(t=Dt()){return/firefox\//i.test(t)}function wT(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function IT(t=Dt()){return/crios\//i.test(t)}function AT(t=Dt()){return/iemobile/i.test(t)}function bT(t=Dt()){return/android/i.test(t)}function CT(t=Dt()){return/blackberry/i.test(t)}function RT(t=Dt()){return/webos/i.test(t)}function Qf(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pD(t=Dt()){var e;return Qf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mD(){return Rk()&&document.documentMode===10}function ST(t=Dt()){return Qf(t)||bT(t)||RT(t)||CT(t)||/windows phone/i.test(t)||AT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t,e=[]){let n;switch(t){case"Browser":n=Vg(Dt());break;case"Worker":n=`${Vg(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _D(t,e={}){return Ai(t,"GET","/v2/passwordPolicy",Gf(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=6;class vD{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fg(this),this.idTokenSubscription=new Fg(this),this.beforeStateQueue=new gD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yT(this,{idToken:e}),r=await er._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yt(this.app))return Promise.reject(gs(this));const n=e?en(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(gs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yt(this.app)?Promise.reject(gs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _D(this),n=new vD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tr(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=PT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&XN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yf(t){return en(t)}class Fg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vk(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TD(t){Xf=t}function wD(t){return Xf.loadJS(t)}function ID(){return Xf.gapiScript}function AD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(t,e){const n=lT(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Bo(i,e??{}))return s;Bn(s,"already-initialized")}return n.initialize({options:e})}function CD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t,e){return sD(t,"POST","/v1/accounts:signInWithIdp",Gf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD="http://localhost";class vs extends kT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Hf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new vs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:RD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends Jf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends ra{constructor(){super("facebook.com")}static credential(e){return vs._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vs._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.GOOGLE_SIGN_IN_METHOD="google.com";Pr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends ra{constructor(){super("github.com")}static credential(e){return vs._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends ra{constructor(){super("twitter.com")}static credential(e,n){return vs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.TWITTER_SIGN_IN_METHOD="twitter.com";Nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await er._fromIdTokenResponse(e,r,s),o=Ug(r);return new hi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ug(r);return new hi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ug(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends Hn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ml.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ml(e,n,r,s)}}function NT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ml._fromErrorAndOperation(t,i,e,r):i})}async function SD(t,e,n=!1){const r=await jo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PD(t,e,n=!1){const{auth:r}=t;if(Yt(r.app))return Promise.reject(gs(r));const s="reauthenticate";try{const i=await jo(t,NT(r,s,e,t),n);pe(i.idToken,r,"internal-error");const o=zf(i.idToken);pe(o,r,"internal-error");const{sub:a}=o;return pe(t.uid===a,r,"user-mismatch"),hi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Bn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kD(t,e,n=!1){if(Yt(t.app))return Promise.reject(gs(t));const r="signIn",s=await NT(t,r,e),i=await hi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function ND(t,e,n,r){return en(t).onIdTokenChanged(e,n,r)}function KU(t){return en(t).signOut()}const xl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xl,"1"),this.storage.removeItem(xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD=1e3,OD=10;class OT extends DT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ST(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);mD()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,OD):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}OT.type="LOCAL";const MD=OT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT extends DT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}MT.type="SESSION";const xT=MT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Nc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await xD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Zf("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return window}function VD(t){Ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(){return typeof Ln().WorkerGlobalScope<"u"&&typeof Ln().importScripts=="function"}async function FD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BD(){return LT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="firebaseLocalStorageDb",$D=1,Ll="firebaseLocalStorage",FT="fbase_key";class sa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dc(t,e){return t.transaction([Ll],e?"readwrite":"readonly").objectStore(Ll)}function jD(){const t=indexedDB.deleteDatabase(VT);return new sa(t).toPromise()}function kh(){const t=indexedDB.open(VT,$D);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ll,{keyPath:FT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ll)?e(r):(r.close(),await jD(),e(await kh()))})})}async function Bg(t,e,n){const r=Dc(t,!0).put({[FT]:e,value:n});return new sa(r).toPromise()}async function HD(t,e){const n=Dc(t,!1).get(e),r=await new sa(n).toPromise();return r===void 0?null:r.value}function $g(t,e){const n=Dc(t,!0).delete(e);return new sa(n).toPromise()}const WD=800,qD=3;class UT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return LT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nc._getInstance(BD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await FD(),!this.activeServiceWorker)return;this.sender=new LD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kh();return await Bg(e,xl,"1"),await $g(e,xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$g(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Dc(s,!1).getAll();return new sa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}UT.type="LOCAL";const KD=UT;new na(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t,e){return e?tr(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends kT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GD(t){return kD(t.auth,new ed(t),t.bypassAuthState)}function zD(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),PD(n,new ed(t),t.bypassAuthState)}async function QD(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),SD(n,new ed(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GD;case"linkViaPopup":case"linkViaRedirect":return QD;case"reauthViaPopup":case"reauthViaRedirect":return zD;default:Bn(this.auth,"internal-error")}}resolve(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD=new na(2e3,1e4);async function GU(t,e,n){if(Yt(t.app))return Promise.reject(vn(t,"operation-not-supported-in-this-environment"));const r=Yf(t);JN(t,e,Jf);const s=BT(r,n);return new us(r,"signInViaPopup",e,s).executeNotNull()}class us extends $T{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){cr(this.filter.length===1,"Popup operations only handle one event");const e=Zf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YD.get())};e()}}us.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD="pendingRedirect",sl=new Map;class JD extends $T{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sl.get(this.auth._key());if(!e){try{const r=await ZD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sl.set(this.auth._key(),e)}return this.bypassAuthState||sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZD(t,e){const n=nO(e),r=tO(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function eO(t,e){sl.set(t._key(),e)}function tO(t){return tr(t._redirectPersistence)}function nO(t){return rl(XD,t.config.apiKey,t.name)}async function rO(t,e,n=!1){if(Yt(t.app))return Promise.reject(gs(t));const r=Yf(t),s=BT(r,e),o=await new JD(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=10*60*1e3;class iO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sO&&this.cachedEventUids.clear(),this.cachedEventUids.has(jg(e))}saveEventToCache(e){this.cachedEventUids.add(jg(e)),this.lastProcessedEventTime=Date.now()}}function jg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aO(t,e={}){return Ai(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cO=/^https?/;async function uO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aO(t);for(const n of e)try{if(hO(n))return}catch{}Bn(t,"unauthorized-domain")}function hO(t){const e=Sh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cO.test(n))return!1;if(lO.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO=new na(3e4,6e4);function Hg(){const t=Ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dO(t){return new Promise((e,n)=>{var r,s,i;function o(){Hg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hg(),n(vn(t,"network-request-failed"))},timeout:fO.get()})}if(!((s=(r=Ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ln().gapi)===null||i===void 0)&&i.load)o();else{const a=AD("iframefcb");return Ln()[a]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},wD(`${ID()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw il=null,e})}let il=null;function pO(t){return il=il||dO(t),il}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=new na(5e3,15e3),gO="__/auth/iframe",_O="emulator/auth/iframe",yO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EO(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kf(e,_O):`https://${t.config.authDomain}/${gO}`,r={apiKey:e.apiKey,appName:t.name,v:Xr},s=vO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ii(r).slice(1)}`}async function TO(t){const e=await pO(t),n=Ln().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:EO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),a=Ln().setTimeout(()=>{i(o)},mO.get());function c(){Ln().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IO=500,AO=600,bO="_blank",CO="http://localhost";class Wg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RO(t,e,n,r=IO,s=AO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},wO),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Dt().toLowerCase();n&&(a=IT(u)?bO:n),TT(u)&&(e=e||CO,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[g,E])=>`${m}${g}=${E},`,"");if(pD(u)&&a!=="_self")return SO(e||"",a),new Wg(null);const f=window.open(e||"",a,h);pe(f,t,"popup-blocked");try{f.focus()}catch{}return new Wg(f)}function SO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO="__/auth/handler",kO="emulator/auth/handler",NO=encodeURIComponent("fac");async function qg(t,e,n,r,s,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xr,eventId:s};if(e instanceof Jf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof ra){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${NO}=${encodeURIComponent(c)}`:"";return`${DO(t)}?${Ii(a).slice(1)}${u}`}function DO({config:t}){return t.emulator?Kf(t,kO):`https://${t.authDomain}/${PO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="webStorageSupport";class OO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xT,this._completeRedirectFn=rO,this._overrideRedirectResult=eO}async _openPopup(e,n,r,s){var i;cr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await qg(e,n,r,Sh(),s);return RO(e,o,Zf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await qg(e,n,r,Sh(),s);return VD(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(cr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TO(e),r=new iO(e);return n.register("authEvent",s=>(pe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ju,{type:ju},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ju];o!==void 0&&n(!!o),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ST()||wT()||Qf()}}const MO=OO;var Kg="@firebase/auth",Gg="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VO(t){Un(new In("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:PT(t)},u=new ED(r,s,i,c);return CD(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Un(new In("auth-internal",e=>{const n=Yf(e.getProvider("auth").getImmediate());return(r=>new xO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(Kg,Gg,LO(t)),Jt(Kg,Gg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=5*60;wk("authIdTokenMaxAge");function UO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}TD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=vn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",UO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VO("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=new Map,$O={activated:!1,tokenObservers:[]};function An(t){return BO.get(t)||Object.assign({},$O)}const zg={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Fo,this.pending.promise.catch(n=>{}),await HO(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Fo,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function HO(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Vl=new wi("appCheck","AppCheck",WO);function HT(t){if(!An(t).activated)throw Vl.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO="firebase-app-check-database",KO=1,Nh="firebase-app-check-store";let $a=null;function GO(){return $a||($a=new Promise((t,e)=>{try{const n=indexedDB.open(qO,KO);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Vl.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Nh,{keyPath:"compositeKey"})}}}catch(n){e(Vl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),$a)}function zO(t,e){return QO(YO(t),e)}async function QO(t,e){const r=(await GO()).transaction(Nh,"readwrite"),i=r.objectStore(Nh).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=c=>{o()},r.onerror=c=>{var u;a(Vl.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function YO(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=new ta("@firebase/app-check");function Qg(t,e){return sT()?zO(t,e).catch(n=>{Dh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO={error:"UNKNOWN_ERROR"};function JO(t){return Sc.encodeString(JSON.stringify(t),!1)}async function Oh(t,e=!1){const n=t.app;HT(n);const r=An(n);let s=r.token,i;if(s&&!ro(s)&&(r.token=void 0,s=void 0),!s){const c=await r.cachedTokenPromise;c&&(ro(c)?s=c:await Qg(n,void 0))}if(!e&&s&&ro(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await An(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Dh.warn(c.message):Dh.error(c),i=c}let a;return s?i?ro(s)?a={token:s.token,internalError:i}:a=Xg(i):(a={token:s.token},r.token=s,await Qg(n,s)):a=Xg(i),o&&n1(n,a),a}async function ZO(t){const e=t.app;HT(e);const{provider:n}=An(e);{const{token:r}=await n.getToken();return{token:r}}}function e1(t,e,n,r){const{app:s}=t,i=An(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&ro(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),Yg(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Yg(t))}function WT(t,e){const n=An(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Yg(t){const{app:e}=t,n=An(e);let r=n.tokenRefresher;r||(r=t1(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function t1(t){const{app:e}=t;return new jO(async()=>{const n=An(e);let r;if(n.token?r=await Oh(t,!0):r=await Oh(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=An(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},zg.RETRIAL_MIN_WAIT,zg.RETRIAL_MAX_WAIT)}function n1(t,e){const n=An(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function ro(t){return t.expireTimeMillis-Date.now()>0}function Xg(t){return{token:JO(XO),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=An(this.app);for(const n of e)WT(this.app,n.next);return Promise.resolve()}}function s1(t,e){return new r1(t,e)}function i1(t){return{getToken:e=>Oh(t,e),getLimitedUseToken:()=>ZO(t),addTokenListener:e=>e1(t,"INTERNAL",e),removeTokenListener:e=>WT(t.app,e)}}const o1="@firebase/app-check",a1="0.8.12",l1="app-check",Jg="app-check-internal";function c1(){Un(new In(l1,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return s1(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Jg).initialize()})),Un(new In(Jg,t=>{const e=t.getProvider("app-check").getImmediate();return i1(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Jt(o1,a1)}c1();var u1="firebase",h1="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(u1,h1,"app");const qT=Symbol("firebaseApp");function KT(t){return Tc()&&Ze(qT,null)||uT(t)}const f1=typeof window<"u",ja=new WeakMap;function d1(t,e){if(!ja.has(t)){const n=uc(!0);ja.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),ja.delete(t)}}return ja.get(t)}const GT=new WeakMap;function zU(t){return GT.get(KT(t))}const Ha=new WeakMap;function zT(t){const e=KT(t);if(!Ha.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{Ha.set(e,i),n(i.value)}];Ha.set(e,s)}return Ha.get(e)}function p1(t){const e=zT(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function m1(t,e){ND(e,n=>{const r=zT();t.value=n,Array.isArray(r)&&r[1](t)})}var Zg={};const e_="@firebase/database",t_="1.0.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QT="";function g1(t){QT=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),mt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Uo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return pr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _1(e)}}catch{}return new y1},hs=YT("localStorage"),v1=YT("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new ta("@firebase/database"),E1=function(){let t=1;return function(){return t++}}(),XT=function(t){const e=$k(t),n=new Lk;n.update(e);const r=n.digest();return Sc.encodeByteArray(r)},ia=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ia.apply(null,r):typeof r=="object"?e+=mt(r):e+=r,e+=" "}return e};let To=null,n_=!0;const T1=function(t,e){X(!0,"Can't turn on custom loggers persistently."),ri.logLevel=ye.VERBOSE,To=ri.log.bind(ri)},Rt=function(...t){if(n_===!0&&(n_=!1,To===null&&v1.get("logging_enabled")===!0&&T1()),To){const e=ia.apply(null,t);To(e)}},oa=function(t){return function(...e){Rt(t,...e)}},Mh=function(...t){const e="FIREBASE INTERNAL ERROR: "+ia(...t);ri.error(e)},Es=function(...t){const e=`FIREBASE FATAL ERROR: ${ia(...t)}`;throw ri.error(e),new Error(e)},Zt=function(...t){const e="FIREBASE WARNING: "+ia(...t);ri.warn(e)},w1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Zt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},JT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},I1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fi="[MIN_NAME]",Ts="[MAX_NAME]",bi=function(t,e){if(t===e)return 0;if(t===fi||e===Ts)return-1;if(e===fi||t===Ts)return 1;{const n=r_(t),r=r_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},A1=function(t,e){return t===e?0:t<e?-1:1},Yi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+mt(e))},td=function(t){if(typeof t!="object"||t===null)return mt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=mt(e[r]),n+=":",n+=td(t[e[r]]);return n+="}",n},ZT=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function hn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ew=function(t){X(!JT(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,c;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let m=parseInt(h.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},b1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},C1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},R1=new RegExp("^-?(0*)\\d{1,10}$"),S1=-2147483648,P1=2147483647,r_=function(t){if(R1.test(t)){const e=Number(t);if(e>=S1&&e<=P1)return e}return null},aa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Zt("Exception was thrown by user callback.",n),e},Math.floor(0))}},k1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Yt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Zt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Rt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Zt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="5",tw="v",nw="s",rw="r",sw="f",iw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ow="ls",aw="p",xh="ac",lw="websocket",cw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n,r,s,i=!1,o="",a=!1,c=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=hs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&hs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function M1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function uw(t,e,n){X(typeof e=="string","typeof type must == string"),X(typeof n=="object","typeof params must == object");let r;if(e===lw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===cw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);M1(t)&&(n.ns=t.namespace);const s=[];return hn(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(){this.counters_={}}incrementCounter(e,n=1){pr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return pk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu={},Wu={};function rd(t){const e=t.toString();return Hu[e]||(Hu[e]=new x1),Hu[e]}function L1(t,e){const n=t.toString();return Wu[n]||(Wu[n]=e()),Wu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&aa(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="start",F1="close",U1="pLPCommand",B1="pRTLPCB",hw="id",fw="pw",dw="ser",$1="cb",j1="seg",H1="ts",W1="d",q1="dframe",pw=1870,mw=30,K1=pw-mw,G1=25e3,z1=3e4;class Qs{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=oa(e),this.stats_=rd(n),this.urlFn=c=>(this.appCheckToken&&(c[xh]=this.appCheckToken),uw(n,cw,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new V1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(z1)),I1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sd((...i)=>{const[o,a,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===s_)this.id=a,this.password=c;else if(o===F1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[s_]="t",r[dw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[$1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[tw]=nd,this.transportSessionId&&(r[nw]=this.transportSessionId),this.lastSessionId&&(r[ow]=this.lastSessionId),this.applicationId&&(r[aw]=this.applicationId),this.appCheckToken&&(r[xh]=this.appCheckToken),typeof location<"u"&&location.hostname&&iw.test(location.hostname)&&(r[rw]=sw);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qs.forceAllow_=!0}static forceDisallow(){Qs.forceDisallow_=!0}static isAvailable(){return Qs.forceAllow_?!0:!Qs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!b1()&&!C1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=mt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=eT(n),s=ZT(r,K1);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[q1]="t",r[hw]=e,r[fw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=mt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class sd{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=E1(),window[U1+this.uniqueCallbackIdentifier]=e,window[B1+this.uniqueCallbackIdentifier]=n,this.myIFrame=sd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Rt("frame writing exception"),a.stack&&Rt(a.stack),Rt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Rt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[hw]=this.myID,e[fw]=this.myPW,e[dw]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+mw+r.length<=pw;){const o=this.pendingSegs.shift();r=r+"&"+j1+s+"="+o.seg+"&"+H1+s+"="+o.ts+"&"+W1+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(G1)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Rt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=16384,Y1=45e3;let Fl=null;typeof MozWebSocket<"u"?Fl=MozWebSocket:typeof WebSocket<"u"&&(Fl=WebSocket);class dn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=oa(this.connId),this.stats_=rd(n),this.connURL=dn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[tw]=nd,typeof location<"u"&&location.hostname&&iw.test(location.hostname)&&(o[rw]=sw),n&&(o[nw]=n),r&&(o[ow]=r),s&&(o[xh]=s),i&&(o[aw]=i),uw(e,lw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,hs.set("previous_websocket_failure",!0);try{let r;Sk(),this.mySock=new Fl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Fl!==null&&!dn.forceDisallow_}static previouslyFailed(){return hs.isInMemoryStorage||hs.get("previous_websocket_failure")===!0}markConnectionHealthy(){hs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Uo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(X(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=mt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ZT(n,Q1);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Y1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dn.responsesRequiredToBeHealthy=2;dn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{static get ALL_TRANSPORTS(){return[Qs,dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=dn&&dn.isAvailable();let r=n&&!dn.previouslyFailed();if(e.webSocketOnly&&(n||Zt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[dn];else{const s=this.transports_=[];for(const i of Ho.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ho.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ho.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=6e4,J1=5e3,Z1=10*1024,eM=100*1024,qu="t",i_="d",tM="s",o_="r",nM="e",a_="o",l_="a",c_="n",u_="p",rM="h";class sM{constructor(e,n,r,s,i,o,a,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=oa("c:"+this.id+":"),this.transportManager_=new Ho(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=wo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>eM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Z1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qu in e){const n=e[qu];n===l_?this.upgradeIfSecondaryHealthy_():n===o_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===a_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Yi("t",e),r=Yi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:u_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:l_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:c_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Yi("t",e),r=Yi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Yi(qu,e);if(i_ in e){const r=e[i_];if(n===rM){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===c_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===tM?this.onConnectionShutdown_(r):n===o_?this.onReset_(r):n===nM?Mh("Server Error: "+r):n===a_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),nd!==r&&Zt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),wo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(X1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(J1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:u_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(hs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.allowedEvents_=e,this.listeners_={},X(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){X(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends _w{static getInstance(){return new Ul}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$f()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return X(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=32,f_=768;class Ge{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Le(){return new Ge("")}function Ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Br(t){return t.pieces_.length-t.pieceNum_}function qe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ge(t.pieces_,e)}function yw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function iM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function vw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ew(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ge(e,0)}function ct(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ge)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Ge(n,0)}function Ie(t){return t.pieceNum_>=t.pieces_.length}function an(t,e){const n=Ce(t),r=Ce(e);if(n===null)return e;if(n===r)return an(qe(t),qe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Tw(t,e){if(Br(t)!==Br(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function mn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Br(t)>Br(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class oM{constructor(e,n){this.errorPrefix_=n,this.parts_=vw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=kc(this.parts_[r]);ww(this)}}function aM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=kc(e),ww(t)}function lM(t){const e=t.parts_.pop();t.byteLength_-=kc(e),t.parts_.length>0&&(t.byteLength_-=1)}function ww(t){if(t.byteLength_>f_)throw new Error(t.errorPrefix_+"has a key path longer than "+f_+" bytes ("+t.byteLength_+").");if(t.parts_.length>h_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+h_+") or object contains a cycle "+ls(t))}function ls(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id extends _w{static getInstance(){return new id}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return X(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=1e3,cM=60*5*1e3,d_=30*1e3,uM=1.3,hM=3e4,fM="server_kill",p_=3;class ir extends gw{constructor(e,n,r,s,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=ir.nextPersistentConnectionId_++,this.log_=oa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xi,this.maxReconnectDelay_=cM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");id.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ul.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(mt(i)),X(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Fo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),X(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;ir.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&pr(e,"w")){const r=ui(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Zt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||xk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=d_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Mk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+mt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Mh("Unrecognized action received from server: "+mt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){X(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hM&&(this.reconnectDelay_=Xi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ir.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},u=function(f){X(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Rt("getToken() completed but was canceled"):(Rt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new sM(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Zt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(fM)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Zt(f),c())}}}interrupt(e){Rt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Rt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],wh(this.interruptReasons_)&&(this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>td(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Ge(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Rt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=p_&&(this.reconnectDelay_=d_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Rt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=p_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+QT.replace(/\./g,"-")]=1,$f()?e["framework.cordova"]=1:rT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ul.getInstance().currentlyOnline();return wh(this.interruptReasons_)&&e}}ir.nextPersistentConnectionId_=0;ir.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Re(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Re(fi,e),s=new Re(fi,n);return this.compare(r,s)!==0}minPost(){return Re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa;class Iw extends Oc{static get __EMPTY_NODE(){return Wa}static set __EMPTY_NODE(e){Wa=e}compare(e,n){return bi(e.name,n.name)}isDefinedOn(e){throw Ti("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Re.MIN}maxPost(){return new Re(Ts,Wa)}makePost(e,n){return X(typeof e=="string","KeyIndex indexValue must always be a string."),new Re(e,Wa)}toString(){return".key"}}const si=new Iw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa=class{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Qt=class so{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??so.RED,this.left=s??Dn.EMPTY_NODE,this.right=i??Dn.EMPTY_NODE}copy(e,n,r,s,i){return new so(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Dn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,so.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,so.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Qt.RED=!0;Qt.BLACK=!1;class dM{copy(e,n,r,s,i){return this}insert(e,n,r){return new Qt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Dn=class ol{constructor(e,n=ol.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ol(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Qt.BLACK,null,null))}remove(e){return new ol(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qa(this.root_,null,this.comparator_,!0,e)}};Dn.EMPTY_NODE=new dM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(t,e){return bi(t.name,e.name)}function od(t,e){return bi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lh;function mM(t){Lh=t}const Aw=function(t){return typeof t=="number"?"number:"+ew(t):"string:"+t},bw=function(t){if(t.isLeafNode()){const e=t.val();X(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pr(e,".sv"),"Priority must be a string or number.")}else X(t===Lh||t.isEmpty(),"priority of unexpected type.");X(t===Lh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m_;class ot{static set __childrenNodeConstructor(e){m_=e}static get __childrenNodeConstructor(){return m_}constructor(e,n=ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,X(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),bw(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ot(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ie(e)?this:Ce(e)===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ce(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(X(r!==".priority"||Br(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(qe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Aw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ew(this.value_):e+=this.value_,this.lazyHash_=XT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ot.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ot.__childrenNodeConstructor?-1:(X(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=ot.VALUE_TYPE_ORDER.indexOf(n),i=ot.VALUE_TYPE_ORDER.indexOf(r);return X(s>=0,"Unknown leaf type: "+n),X(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cw,Rw;function gM(t){Cw=t}function _M(t){Rw=t}class yM extends Oc{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?bi(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Re.MIN}maxPost(){return new Re(Ts,new ot("[PRIORITY-POST]",Rw))}makePost(e,n){const r=Cw(e);return new Re(n,new ot("[PRIORITY-POST]",r))}toString(){return".priority"}}const Nt=new yM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vM=Math.log(2);class EM{constructor(e){const n=i=>parseInt(Math.log(i)/vM,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bl=function(t,e,n,r){t.sort(e);const s=function(c,u){const h=u-c;let f,m;if(h===0)return null;if(h===1)return f=t[c],m=n?n(f):f,new Qt(m,f.node,Qt.BLACK,null,null);{const g=parseInt(h/2,10)+c,E=s(c,g),R=s(g+1,u);return f=t[g],m=n?n(f):f,new Qt(m,f.node,Qt.BLACK,E,R)}},i=function(c){let u=null,h=null,f=t.length;const m=function(E,R){const P=f-E,O=f;f-=E;const x=s(P+1,O),$=t[P],j=n?n($):$;g(new Qt(j,$.node,R,null,x))},g=function(E){u?(u.left=E,u=E):(h=E,u=E)};for(let E=0;E<c.count;++E){const R=c.nextBitIsOne(),P=Math.pow(2,c.count-(E+1));R?m(P,Qt.BLACK):(m(P,Qt.BLACK),m(P,Qt.RED))}return h},o=new EM(t.length),a=i(o);return new Dn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ku;const js={};class nr{static get Default(){return X(js&&Nt,"ChildrenNode.ts has not been loaded"),Ku=Ku||new nr({".priority":js},{".priority":Nt}),Ku}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ui(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Dn?n:null}hasIndex(e){return pr(this.indexSet_,e.toString())}addIndex(e,n){X(e!==si,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Re.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Bl(r,e.getCompare()):a=js;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new nr(h,u)}addToIndexes(e,n){const r=kl(this.indexes_,(s,i)=>{const o=ui(this.indexSet_,i);if(X(o,"Missing index implementation for "+i),s===js)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(Re.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),Bl(a,o.getCompare())}else return js;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new Re(e.name,a))),c.insert(e,e.node)}});return new nr(r,this.indexSet_)}removeFromIndexes(e,n){const r=kl(this.indexes_,s=>{if(s===js)return s;{const i=n.get(e.name);return i?s.remove(new Re(e.name,i)):s}});return new nr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji;class Oe{static get EMPTY_NODE(){return Ji||(Ji=new Oe(new Dn(od),null,nr.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&bw(this.priorityNode_),this.children_.isEmpty()&&X(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ji}updatePriority(e){return this.children_.isEmpty()?this:new Oe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ji:n}}getChild(e){const n=Ce(e);return n===null?this:this.getImmediateChild(n).getChild(qe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(X(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Re(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Ji:this.priorityNode_;return new Oe(s,o,i)}}updateChild(e,n){const r=Ce(e);if(r===null)return n;{X(Ce(e)!==".priority"||Br(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(qe(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Nt,(o,a)=>{n[o]=a.val(e),r++,i&&Oe.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Aw(this.getPriority().val())+":"),this.forEachChild(Nt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":XT(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Re(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Re(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Re.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Re.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===la?-1:0}withIndex(e){if(e===si||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Oe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===si||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Nt),s=n.getIterator(Nt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===si?null:this.indexMap_.get(e.toString())}}Oe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class TM extends Oe{constructor(){super(new Dn(od),Oe.EMPTY_NODE,nr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Oe.EMPTY_NODE}isEmpty(){return!1}}const la=new TM;Object.defineProperties(Re,{MIN:{value:new Re(fi,Oe.EMPTY_NODE)},MAX:{value:new Re(Ts,la)}});Iw.__EMPTY_NODE=Oe.EMPTY_NODE;ot.__childrenNodeConstructor=Oe;mM(la);_M(la);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM=!0;function St(t,e=null){if(t===null)return Oe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),X(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ot(n,St(e))}if(!(t instanceof Array)&&wM){const n=[];let r=!1;if(hn(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=St(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new Re(o,c)))}}),n.length===0)return Oe.EMPTY_NODE;const i=Bl(n,pM,o=>o.name,od);if(r){const o=Bl(n,Nt.getCompare());return new Oe(i,St(e),new nr({".priority":o},{".priority":Nt}))}else return new Oe(i,St(e),nr.Default)}else{let n=Oe.EMPTY_NODE;return hn(t,(r,s)=>{if(pr(t,r)&&r.substring(0,1)!=="."){const i=St(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(St(e))}}gM(St);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM extends Oc{constructor(e){super(),this.indexPath_=e,X(!Ie(e)&&Ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?bi(e.name,n.name):i}makePost(e,n){const r=St(e),s=Oe.EMPTY_NODE.updateChild(this.indexPath_,r);return new Re(n,s)}maxPost(){const e=Oe.EMPTY_NODE.updateChild(this.indexPath_,la);return new Re(Ts,e)}toString(){return vw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM extends Oc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?bi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Re.MIN}maxPost(){return Re.MAX}makePost(e,n){const r=St(e);return new Re(n,r)}toString(){return".value"}}const bM=new AM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(t){return{type:"value",snapshotNode:t}}function RM(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function SM(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function g_(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function PM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Nt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return X(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return X(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fi}hasEnd(){return this.endSet_}getIndexEndValue(){return X(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return X(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ts}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return X(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Nt}copy(){const e=new ad;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function __(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Nt?n="$priority":t.index_===bM?n="$value":t.index_===si?n="$key":(X(t.index_ instanceof IM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=mt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=mt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+mt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=mt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+mt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function y_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Nt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l extends gw{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(X(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=oa("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=$l.getListenId_(e,r),a={};this.listens_[o]=a;const c=__(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,r),ui(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",s(m,null)}})}unlisten(e,n){const r=$l.getListenId_(e,n);delete this.listens_[r]}get(e){const n=__(e._queryParams),r=e._path.toString(),s=new Fo;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ii(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Uo(a.responseText)}catch{Zt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&Zt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(){this.rootNode_=Oe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(){return{value:null,children:new Map}}function Sw(t,e,n){if(Ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ce(e);t.children.has(r)||t.children.set(r,jl());const s=t.children.get(r);e=qe(e),Sw(s,e,n)}}function Vh(t,e,n){t.value!==null?n(e,t.value):NM(t,(r,s)=>{const i=new Ge(e.toString()+"/"+r);Vh(s,i,n)})}function NM(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&hn(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=10*1e3,OM=30*1e3,MM=5*60*1e3;class xM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new DM(e);const r=v_+(OM-v_)*Math.random();wo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;hn(e,(s,i)=>{i>0&&pr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),wo(this.reportStats_.bind(this),Math.floor(Math.random()*2*MM))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var On;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(On||(On={}));function Pw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Nw(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=On.ACK_USER_WRITE,this.source=Pw()}operationForChild(e){if(Ie(this.path)){if(this.affectedTree.value!=null)return X(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ge(e));return new Hl(Le(),n,this.revert)}}else return X(Ce(this.path)===e,"operationForChild called for unrelated child."),new Hl(qe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=On.OVERWRITE}operationForChild(e){return Ie(this.path)?new ws(this.source,Le(),this.snap.getImmediateChild(e)):new ws(this.source,qe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=On.MERGE}operationForChild(e){if(Ie(this.path)){const n=this.children.subtree(new Ge(e));return n.isEmpty()?null:n.value?new ws(this.source,Le(),n.value):new Wo(this.source,Le(),n)}else return X(Ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wo(this.source,qe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function LM(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(PM(o.childName,o.snapshotNode))}),Zi(t,s,"child_removed",e,r,n),Zi(t,s,"child_added",e,r,n),Zi(t,s,"child_moved",i,r,n),Zi(t,s,"child_changed",e,r,n),Zi(t,s,"value",e,r,n),s}function Zi(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,c)=>FM(t,a,c)),o.forEach(a=>{const c=VM(t,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function VM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function FM(t,e,n){if(e.childName==null||n.childName==null)throw Ti("Should only compare child_ events.");const r=new Re(e.childName,e.snapshotNode),s=new Re(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(t,e){return{eventCache:t,serverCache:e}}function Io(t,e,n,r){return Dw(new ld(e,n,r),t.serverCache)}function Ow(t,e,n,r){return Dw(t.eventCache,new ld(e,n,r))}function Fh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Is(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gu;const UM=()=>(Gu||(Gu=new Dn(A1)),Gu);class We{static fromObject(e){let n=new We(null);return hn(e,(r,s)=>{n=n.set(new Ge(r),s)}),n}constructor(e,n=UM()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Le(),value:this.value};if(Ie(e))return null;{const r=Ce(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(qe(e),n);return i!=null?{path:ct(new Ge(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ie(e))return this;{const n=Ce(e),r=this.children.get(n);return r!==null?r.subtree(qe(e)):new We(null)}}set(e,n){if(Ie(e))return new We(n,this.children);{const r=Ce(e),i=(this.children.get(r)||new We(null)).set(qe(e),n),o=this.children.insert(r,i);return new We(this.value,o)}}remove(e){if(Ie(e))return this.children.isEmpty()?new We(null):new We(null,this.children);{const n=Ce(e),r=this.children.get(n);if(r){const s=r.remove(qe(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new We(null):new We(this.value,i)}else return this}}get(e){if(Ie(e))return this.value;{const n=Ce(e),r=this.children.get(n);return r?r.get(qe(e)):null}}setTree(e,n){if(Ie(e))return n;{const r=Ce(e),i=(this.children.get(r)||new We(null)).setTree(qe(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new We(this.value,o)}}fold(e){return this.fold_(Le(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(ct(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Le(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(Ie(e))return null;{const i=Ce(e),o=this.children.get(i);return o?o.findOnPath_(qe(e),ct(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Le(),n)}foreachOnPath_(e,n,r){if(Ie(e))return this;{this.value&&r(n,this.value);const s=Ce(e),i=this.children.get(s);return i?i.foreachOnPath_(qe(e),ct(n,s),r):new We(null)}}foreach(e){this.foreach_(Le(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(ct(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.writeTree_=e}static empty(){return new En(new We(null))}}function Ao(t,e,n){if(Ie(e))return new En(new We(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=an(s,e);return i=i.updateChild(o,n),new En(t.writeTree_.set(s,i))}else{const s=new We(n),i=t.writeTree_.setTree(e,s);return new En(i)}}}function E_(t,e,n){let r=t;return hn(n,(s,i)=>{r=Ao(r,ct(e,s),i)}),r}function T_(t,e){if(Ie(e))return En.empty();{const n=t.writeTree_.setTree(e,new We(null));return new En(n)}}function Uh(t,e){return Ss(t,e)!=null}function Ss(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(an(n.path,e)):null}function w_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Nt,(r,s)=>{e.push(new Re(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Re(r,s.value))}),e}function Lr(t,e){if(Ie(e))return t;{const n=Ss(t,e);return n!=null?new En(new We(n)):new En(t.writeTree_.subtree(e))}}function Bh(t){return t.writeTree_.isEmpty()}function di(t,e){return Mw(Le(),t.writeTree_,e)}function Mw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(X(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Mw(ct(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ct(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(t,e){return Bw(e,t)}function BM(t,e,n,r,s){X(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Ao(t.visibleWrites,e,n)),t.lastWriteId=r}function $M(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function jM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);X(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&HM(a,r.path)?s=!1:mn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return WM(t),!0;if(r.snap)t.visibleWrites=T_(t.visibleWrites,r.path);else{const a=r.children;hn(a,c=>{t.visibleWrites=T_(t.visibleWrites,ct(r.path,c))})}return!0}else return!1}function HM(t,e){if(t.snap)return mn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&mn(ct(t.path,n),e))return!0;return!1}function WM(t){t.visibleWrites=Lw(t.allWrites,qM,Le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function qM(t){return t.visible}function Lw(t,e,n){let r=En.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)mn(n,o)?(a=an(n,o),r=Ao(r,a,i.snap)):mn(o,n)&&(a=an(o,n),r=Ao(r,Le(),i.snap.getChild(a)));else if(i.children){if(mn(n,o))a=an(n,o),r=E_(r,a,i.children);else if(mn(o,n))if(a=an(o,n),Ie(a))r=E_(r,Le(),i.children);else{const c=ui(i.children,Ce(a));if(c){const u=c.getChild(qe(a));r=Ao(r,Le(),u)}}}else throw Ti("WriteRecord should have .snap or .children")}}return r}function Vw(t,e,n,r,s){if(!r&&!s){const i=Ss(t.visibleWrites,e);if(i!=null)return i;{const o=Lr(t.visibleWrites,e);if(Bh(o))return n;if(n==null&&!Uh(o,Le()))return null;{const a=n||Oe.EMPTY_NODE;return di(o,a)}}}else{const i=Lr(t.visibleWrites,e);if(!s&&Bh(i))return n;if(!s&&n==null&&!Uh(i,Le()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(mn(u.path,e)||mn(e,u.path))},a=Lw(t.allWrites,o,e),c=n||Oe.EMPTY_NODE;return di(a,c)}}}function KM(t,e,n){let r=Oe.EMPTY_NODE;const s=Ss(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Nt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Lr(t.visibleWrites,e);return n.forEachChild(Nt,(o,a)=>{const c=di(Lr(i,new Ge(o)),a);r=r.updateImmediateChild(o,c)}),w_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Lr(t.visibleWrites,e);return w_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function GM(t,e,n,r,s){X(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=ct(e,n);if(Uh(t.visibleWrites,i))return null;{const o=Lr(t.visibleWrites,i);return Bh(o)?s.getChild(n):di(o,s.getChild(n))}}function zM(t,e,n,r){const s=ct(e,n),i=Ss(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Lr(t.visibleWrites,s);return di(o,r.getNode().getImmediateChild(n))}else return null}function QM(t,e){return Ss(t.visibleWrites,e)}function YM(t,e,n,r,s,i,o){let a;const c=Lr(t.visibleWrites,e),u=Ss(c,Le());if(u!=null)a=u;else if(n!=null)a=di(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=m.getNext();for(;g&&h.length<s;)f(g,r)!==0&&h.push(g),g=m.getNext();return h}else return[]}function XM(){return{visibleWrites:En.empty(),allWrites:[],lastWriteId:-1}}function $h(t,e,n,r){return Vw(t.writeTree,t.treePath,e,n,r)}function Fw(t,e){return KM(t.writeTree,t.treePath,e)}function I_(t,e,n,r){return GM(t.writeTree,t.treePath,e,n,r)}function Wl(t,e){return QM(t.writeTree,ct(t.treePath,e))}function JM(t,e,n,r,s,i){return YM(t.writeTree,t.treePath,e,n,r,s,i)}function cd(t,e,n){return zM(t.writeTree,t.treePath,e,n)}function Uw(t,e){return Bw(ct(t.treePath,e),t.writeTree)}function Bw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;X(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),X(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,g_(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,SM(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,RM(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,g_(r,e.snapshotNode,s.oldSnap));else throw Ti("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const $w=new ex;class ud{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ld(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Is(this.viewCache_),i=JM(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function tx(t,e){X(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),X(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nx(t,e,n,r,s){const i=new ZM;let o,a;if(n.type===On.OVERWRITE){const u=n;u.source.fromUser?o=jh(t,e,u.path,u.snap,r,s,i):(X(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ie(u.path),o=ql(t,e,u.path,u.snap,r,s,a,i))}else if(n.type===On.MERGE){const u=n;u.source.fromUser?o=sx(t,e,u.path,u.children,r,s,i):(X(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Hh(t,e,u.path,u.children,r,s,a,i))}else if(n.type===On.ACK_USER_WRITE){const u=n;u.revert?o=ax(t,e,u.path,r,s,i):o=ix(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===On.LISTEN_COMPLETE)o=ox(t,e,n.path,r,i);else throw Ti("Unknown operation type: "+n.type);const c=i.getChanges();return rx(e,o,c),{viewCache:o,changes:c}}function rx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Fh(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(CM(Fh(e)))}}function jw(t,e,n,r,s,i){const o=e.eventCache;if(Wl(r,n)!=null)return e;{let a,c;if(Ie(n))if(X(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Is(e),h=u instanceof Oe?u:Oe.EMPTY_NODE,f=Fw(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=$h(r,Is(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Ce(n);if(u===".priority"){X(Br(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=I_(r,n,h,c);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=qe(n);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=I_(r,n,o.getNode(),c);m!=null?f=o.getNode().getImmediateChild(u).updateChild(h,m):f=o.getNode().getImmediateChild(u)}else f=cd(r,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,h,s,i):a=o.getNode()}}return Io(e,a,o.isFullyInitialized()||Ie(n),t.filter.filtersNodes())}}function ql(t,e,n,r,s,i,o,a){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Ie(n))u=h.updateFullNode(c.getNode(),r,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,r);u=h.updateFullNode(c.getNode(),g,null)}else{const g=Ce(n);if(!c.isCompleteForPath(n)&&Br(n)>1)return e;const E=qe(n),P=c.getNode().getImmediateChild(g).updateChild(E,r);g===".priority"?u=h.updatePriority(c.getNode(),P):u=h.updateChild(c.getNode(),g,P,E,$w,null)}const f=Ow(e,u,c.isFullyInitialized()||Ie(n),h.filtersNodes()),m=new ud(s,f,i);return jw(t,f,n,s,m,a)}function jh(t,e,n,r,s,i,o){const a=e.eventCache;let c,u;const h=new ud(s,e,i);if(Ie(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=Io(e,u,!0,t.filter.filtersNodes());else{const f=Ce(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),c=Io(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=qe(n),g=a.getNode().getImmediateChild(f);let E;if(Ie(m))E=r;else{const R=h.getCompleteChild(f);R!=null?yw(m)===".priority"&&R.getChild(Ew(m)).isEmpty()?E=R:E=R.updateChild(m,r):E=Oe.EMPTY_NODE}if(g.equals(E))c=e;else{const R=t.filter.updateChild(a.getNode(),f,E,m,h,o);c=Io(e,R,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function A_(t,e){return t.eventCache.isCompleteForChild(e)}function sx(t,e,n,r,s,i,o){let a=e;return r.foreach((c,u)=>{const h=ct(n,c);A_(e,Ce(h))&&(a=jh(t,a,h,u,s,i,o))}),r.foreach((c,u)=>{const h=ct(n,c);A_(e,Ce(h))||(a=jh(t,a,h,u,s,i,o))}),a}function b_(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Hh(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Ie(n)?u=r:u=new We(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),E=b_(t,g,m);c=ql(t,c,new Ge(f),E,s,i,o,a)}}),u.children.inorderTraversal((f,m)=>{const g=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!g){const E=e.serverCache.getNode().getImmediateChild(f),R=b_(t,E,m);c=ql(t,c,new Ge(f),R,s,i,o,a)}}),c}function ix(t,e,n,r,s,i,o){if(Wl(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(Ie(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ql(t,e,n,c.getNode().getChild(n),s,i,a,o);if(Ie(n)){let u=new We(null);return c.getNode().forEachChild(si,(h,f)=>{u=u.set(new Ge(h),f)}),Hh(t,e,n,u,s,i,a,o)}else return e}else{let u=new We(null);return r.foreach((h,f)=>{const m=ct(n,h);c.isCompleteForPath(m)&&(u=u.set(h,c.getNode().getChild(m)))}),Hh(t,e,n,u,s,i,a,o)}}function ox(t,e,n,r,s){const i=e.serverCache,o=Ow(e,i.getNode(),i.isFullyInitialized()||Ie(n),i.isFiltered());return jw(t,o,n,r,$w,s)}function ax(t,e,n,r,s,i){let o;if(Wl(r,n)!=null)return e;{const a=new ud(r,e,s),c=e.eventCache.getNode();let u;if(Ie(n)||Ce(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=$h(r,Is(e));else{const f=e.serverCache.getNode();X(f instanceof Oe,"serverChildren would be complete if leaf node"),h=Fw(r,f)}h=h,u=t.filter.updateFullNode(c,h,i)}else{const h=Ce(n);let f=cd(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=t.filter.updateChild(c,h,f,qe(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,Oe.EMPTY_NODE,qe(n),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$h(r,Is(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Wl(r,Le())!=null,Io(e,u,o,t.filter.filtersNodes())}}function lx(t,e){const n=Is(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ie(e)&&!n.getImmediateChild(Ce(e)).isEmpty())?n.getChild(e):null}function C_(t,e,n,r){e.type===On.MERGE&&e.source.queryId!==null&&(X(Is(t.viewCache_),"We should always have a full cache before handling merges"),X(Fh(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=nx(t.processor_,s,e,n,r);return tx(t.processor_,i.viewCache),X(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,cx(t,i.changes,i.viewCache.eventCache.getNode())}function cx(t,e,n,r){const s=t.eventRegistrations_;return LM(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let R_;function ux(t){X(!R_,"__referenceConstructor has already been defined"),R_=t}function hd(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return X(i!=null,"SyncTree gave us an op for an invalid query."),C_(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(C_(o,e,n,r));return i}}function fd(t,e){let n=null;for(const r of t.views.values())n=n||lx(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S_;function hx(t){X(!S_,"__referenceConstructor has already been defined"),S_=t}class P_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new We(null),this.pendingWriteTree_=XM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fx(t,e,n,r,s){return BM(t.pendingWriteTree_,e,n,r,s),s?xc(t,new ws(Pw(),e,n)):[]}function Ys(t,e,n=!1){const r=$M(t.pendingWriteTree_,e);if(jM(t.pendingWriteTree_,e)){let i=new We(null);return r.snap!=null?i=i.set(Le(),!0):hn(r.children,o=>{i=i.set(new Ge(o),!0)}),xc(t,new Hl(r.path,i,n))}else return[]}function Mc(t,e,n){return xc(t,new ws(kw(),e,n))}function dx(t,e,n){const r=We.fromObject(n);return xc(t,new Wo(kw(),e,r))}function px(t,e,n,r){const s=Kw(t,r);if(s!=null){const i=Gw(s),o=i.path,a=i.queryId,c=an(o,e),u=new ws(Nw(a),c,n);return zw(t,o,u)}else return[]}function mx(t,e,n,r){const s=Kw(t,r);if(s){const i=Gw(s),o=i.path,a=i.queryId,c=an(o,e),u=We.fromObject(n),h=new Wo(Nw(a),c,u);return zw(t,o,h)}else return[]}function Hw(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=an(o,e),u=fd(a,c);if(u)return u});return Vw(s,e,i,n,!0)}function xc(t,e){return Ww(e,t.syncPointTree_,null,xw(t.pendingWriteTree_,Le()))}function Ww(t,e,n,r){if(Ie(t.path))return qw(t,e,n,r);{const s=e.get(Le());n==null&&s!=null&&(n=fd(s,Le()));let i=[];const o=Ce(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,h=Uw(r,o);i=i.concat(Ww(a,c,u,h))}return s&&(i=i.concat(hd(s,t,r,n))),i}}function qw(t,e,n,r){const s=e.get(Le());n==null&&s!=null&&(n=fd(s,Le()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=Uw(r,o),h=t.operationForChild(o);h&&(i=i.concat(qw(h,a,c,u)))}),s&&(i=i.concat(hd(s,t,r,n))),i}function Kw(t,e){return t.tagToQueryMap.get(e)}function Gw(t){const e=t.indexOf("$");return X(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ge(t.substr(0,e))}}function zw(t,e,n){const r=t.syncPointTree_.get(e);X(r,"Missing sync point for query tag that we're tracking");const s=xw(t.pendingWriteTree_,e);return hd(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new dd(n)}node(){return this.node_}}class pd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ct(this.path_,e);return new pd(this.syncTree_,n)}node(){return Hw(this.syncTree_,this.path_)}}const gx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},k_=function(t,e,n){if(!t||typeof t!="object")return t;if(X(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _x(t[".sv"],e,n);if(typeof t[".sv"]=="object")return yx(t[".sv"],e);X(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_x=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:X(!1,"Unexpected server value: "+t)}},yx=function(t,e,n){t.hasOwnProperty("increment")||X(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&X(!1,"Unexpected increment value: "+r);const s=e.node();if(X(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},vx=function(t,e,n,r){return md(e,new pd(n,t),r)},Ex=function(t,e,n){return md(t,new dd(e),n)};function md(t,e,n){const r=t.getPriority().val(),s=k_(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=k_(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new ot(a,St(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new ot(s))),o.forEachChild(Nt,(a,c)=>{const u=md(c,e.getImmediateChild(a),n);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function _d(t,e){let n=e instanceof Ge?e:new Ge(e),r=t,s=Ce(n);for(;s!==null;){const i=ui(r.node.children,s)||{children:{},childCount:0};r=new gd(s,r,i),n=qe(n),s=Ce(n)}return r}function Ci(t){return t.node.value}function Qw(t,e){t.node.value=e,Wh(t)}function Yw(t){return t.node.childCount>0}function Tx(t){return Ci(t)===void 0&&!Yw(t)}function Lc(t,e){hn(t.node.children,(n,r)=>{e(new gd(n,t,r))})}function Xw(t,e,n,r){n&&e(t),Lc(t,s=>{Xw(s,e,!0)})}function wx(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ca(t){return new Ge(t.parent===null?t.name:ca(t.parent)+"/"+t.name)}function Wh(t){t.parent!==null&&Ix(t.parent,t.name,t)}function Ix(t,e,n){const r=Tx(n),s=pr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Wh(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Wh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax=/[\[\].#$\/\u0000-\u001F\u007F]/,bx=/[\[\].#$\u0000-\u001F\u007F]/,zu=10*1024*1024,Jw=function(t){return typeof t=="string"&&t.length!==0&&!Ax.test(t)},Cx=function(t){return typeof t=="string"&&t.length!==0&&!bx.test(t)},Rx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Cx(t)},Zw=function(t,e,n){const r=n instanceof Ge?new oM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ls(r));if(typeof e=="function")throw new Error(t+"contains a function "+ls(r)+" with contents = "+e.toString());if(JT(e))throw new Error(t+"contains "+e.toString()+" "+ls(r));if(typeof e=="string"&&e.length>zu/3&&kc(e)>zu)throw new Error(t+"contains a string greater than "+zu+" utf8 bytes "+ls(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(hn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Jw(o)))throw new Error(t+" contains an invalid key ("+o+") "+ls(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);aM(r,o),Zw(t,a,r),lM(r)}),s&&i)throw new Error(t+' contains ".value" child '+ls(r)+" in addition to actual children.")}},Sx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Rx(n))throw new Error(Bk(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kx(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Tw(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Ps(t,e,n){kx(t,n),Nx(t,r=>mn(r,e)||mn(e,r))}function Nx(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(Dx(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Dx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();To&&Rt("event: "+n.toString()),aa(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox="repo_interrupt",Mx=25;class xx{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Px,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jl(),this.transactionQueueTree_=new gd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Lx(t,e,n){if(t.stats_=rd(t.repoInfo_),t.forceRestClient_||k1())t.server_=new $l(t.repoInfo_,(r,s,i,o)=>{N_(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>D_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{mt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new ir(t.repoInfo_,e,(r,s,i,o)=>{N_(t,r,s,i,o)},r=>{D_(t,r)},r=>{Fx(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=L1(t.repoInfo_,()=>new xM(t.stats_,t.server_)),t.infoData_=new kM,t.infoSyncTree_=new P_({startListening:(r,s,i,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=Mc(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),yd(t,"connected",!1),t.serverSyncTree_=new P_({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,c)=>{const u=o(a,c);Ps(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function Vx(t){const n=t.infoData_.getNode(new Ge(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function eI(t){return gx({timestamp:Vx(t)})}function N_(t,e,n,r,s){t.dataUpdateCount++;const i=new Ge(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const c=kl(n,u=>St(u));o=mx(t.serverSyncTree_,i,c,s)}else{const c=St(n);o=px(t.serverSyncTree_,i,c,s)}else if(r){const c=kl(n,u=>St(u));o=dx(t.serverSyncTree_,i,c)}else{const c=St(n);o=Mc(t.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=Ed(t,i)),Ps(t.eventQueue_,a,o)}function D_(t,e){yd(t,"connected",e),e===!1&&Bx(t)}function Fx(t,e){hn(e,(n,r)=>{yd(t,n,r)})}function yd(t,e,n){const r=new Ge("/.info/"+e),s=St(n);t.infoData_.updateSnapshot(r,s);const i=Mc(t.infoSyncTree_,r,s);Ps(t.eventQueue_,r,i)}function Ux(t){return t.nextWriteId_++}function Bx(t){tI(t,"onDisconnectEvents");const e=eI(t),n=jl();Vh(t.onDisconnect_,Le(),(s,i)=>{const o=vx(s,i,t.serverSyncTree_,e);Sw(n,s,o)});let r=[];Vh(n,Le(),(s,i)=>{r=r.concat(Mc(t.serverSyncTree_,s,i));const o=Wx(t,s);Ed(t,o)}),t.onDisconnect_=jl(),Ps(t.eventQueue_,Le(),r)}function $x(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Ox)}function tI(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Rt(n,...e)}function nI(t,e,n){return Hw(t.serverSyncTree_,e,n)||Oe.EMPTY_NODE}function vd(t,e=t.transactionQueueTree_){if(e||Vc(t,e),Ci(e)){const n=sI(t,e);X(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&jx(t,ca(e),n)}else Yw(e)&&Lc(e,n=>{vd(t,n)})}function jx(t,e,n){const r=n.map(u=>u.currentWriteId),s=nI(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];X(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=an(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;t.server_.put(c.toString(),a,u=>{tI(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(Ys(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Vc(t,_d(t.transactionQueueTree_,e)),vd(t,t.transactionQueueTree_),Ps(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)aa(f[m])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Zt("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Ed(t,e)}},o)}function Ed(t,e){const n=rI(t,e),r=ca(n),s=sI(t,n);return Hx(t,s,r),r}function Hx(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=an(n,c.path);let h=!1,f;if(X(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,s=s.concat(Ys(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Mx)h=!0,f="maxretry",s=s.concat(Ys(t.serverSyncTree_,c.currentWriteId,!0));else{const m=nI(t,c.path,o);c.currentInputSnapshot=m;const g=e[a].update(m.val());if(g!==void 0){Zw("transaction failed: Data returned ",g,c.path);let E=St(g);typeof g=="object"&&g!=null&&pr(g,".priority")||(E=E.updatePriority(m.getPriority()));const P=c.currentWriteId,O=eI(t),x=Ex(E,m,O);c.currentOutputSnapshotRaw=E,c.currentOutputSnapshotResolved=x,c.currentWriteId=Ux(t),o.splice(o.indexOf(P),1),s=s.concat(fx(t.serverSyncTree_,c.path,x,c.currentWriteId,c.applyLocally)),s=s.concat(Ys(t.serverSyncTree_,P,!0))}else h=!0,f="nodata",s=s.concat(Ys(t.serverSyncTree_,c.currentWriteId,!0))}Ps(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Vc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)aa(r[a]);vd(t,t.transactionQueueTree_)}function rI(t,e){let n,r=t.transactionQueueTree_;for(n=Ce(e);n!==null&&Ci(r)===void 0;)r=_d(r,n),e=qe(e),n=Ce(e);return r}function sI(t,e){const n=[];return iI(t,e,n),n.sort((r,s)=>r.order-s.order),n}function iI(t,e,n){const r=Ci(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Lc(e,s=>{iI(t,s,n)})}function Vc(t,e){const n=Ci(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,Qw(e,n.length>0?n:void 0)}Lc(e,r=>{Vc(t,r)})}function Wx(t,e){const n=ca(rI(t,e)),r=_d(t.transactionQueueTree_,e);return wx(r,s=>{Qu(t,s)}),Qu(t,r),Xw(r,s=>{Qu(t,s)}),n}function Qu(t,e){const n=Ci(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(X(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(X(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ys(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Qw(e,void 0):n.length=i+1,Ps(t.eventQueue_,ca(e),s);for(let o=0;o<r.length;o++)aa(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Kx(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Zt(`Invalid query segment '${n}' in query '${t}'`)}return e}const O_=function(t,e){const n=Gx(t),r=n.namespace;n.domain==="firebase.com"&&Es(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Es("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||w1();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new O1(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Ge(n.pathString)}},Gx=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(s=qx(t.substring(h,f)));const m=Kx(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const E=e.indexOf(".");r=e.substring(0,E).toLowerCase(),n=e.substring(E+1),i=r}"ns"in m&&(i=m.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return Ie(this._path)?null:yw(this._path)}get ref(){return new Ri(this._repo,this._path)}get _queryIdentifier(){const e=y_(this._queryParams),n=td(e);return n==="{}"?"default":n}get _queryObject(){return y_(this._queryParams)}isEqual(e){if(e=en(e),!(e instanceof Td))return!1;const n=this._repo===e._repo,r=Tw(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+iM(this._path)}}class Ri extends Td{constructor(e,n){super(e,n,new ad,!1)}get parent(){const e=Ew(this._path);return e===null?null:new Ri(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}ux(Ri);hx(Ri);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx="FIREBASE_DATABASE_EMULATOR_HOST",qh={};let Qx=!1;function Yx(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Es("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Rt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=O_(i,s),a=o.repoInfo,c;typeof process<"u"&&Zg&&(c=Zg[zx]),c?(i=`http://${c}?ns=${a.namespace}`,o=O_(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new D1(t.name,t.options,e);Sx("Invalid Firebase Database URL",o),Ie(o.path)||Es("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Jx(a,t,u,new N1(t,n));return new Zx(h,t)}function Xx(t,e){const n=qh[e];(!n||n[t.key]!==t)&&Es(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$x(t),delete n[t.key]}function Jx(t,e,n,r){let s=qh[e.name];s||(s={},qh[e.name]=s);let i=s[t.toURLString()];return i&&Es("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new xx(t,Qx,n,r),s[t.toURLString()]=i,i}class Zx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Lx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ri(this._repo,Le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Xx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Es("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eL(t){g1(Xr),Un(new In("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Yx(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Jt(e_,t_,t),Jt(e_,t_,"esm2017")}ir.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ir.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};eL();var M_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vr,oI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function y(){}y.prototype=v.prototype,b.D=v.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(w,S,A){for(var T=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)T[ve-2]=arguments[ve];return v.prototype[S].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,y){y||(y=0);var w=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)w[S]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(S=0;16>S;++S)w[S]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=b.g[0],y=b.g[1],S=b.g[2];var A=b.g[3],T=v+(A^y&(S^A))+w[0]+3614090360&4294967295;v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+w[1]+3905402710&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+w[2]+606105819&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+w[3]+3250441966&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(A^y&(S^A))+w[4]+4118548399&4294967295,v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+w[5]+1200080426&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+w[6]+2821735955&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+w[7]+4249261313&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(A^y&(S^A))+w[8]+1770035416&4294967295,v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+w[9]+2336552879&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+w[10]+4294925233&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+w[11]+2304563134&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(A^y&(S^A))+w[12]+1804603682&4294967295,v=y+(T<<7&4294967295|T>>>25),T=A+(S^v&(y^S))+w[13]+4254626195&4294967295,A=v+(T<<12&4294967295|T>>>20),T=S+(y^A&(v^y))+w[14]+2792965006&4294967295,S=A+(T<<17&4294967295|T>>>15),T=y+(v^S&(A^v))+w[15]+1236535329&4294967295,y=S+(T<<22&4294967295|T>>>10),T=v+(S^A&(y^S))+w[1]+4129170786&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+w[6]+3225465664&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+w[11]+643717713&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+w[0]+3921069994&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(S^A&(y^S))+w[5]+3593408605&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+w[10]+38016083&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+w[15]+3634488961&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+w[4]+3889429448&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(S^A&(y^S))+w[9]+568446438&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+w[14]+3275163606&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+w[3]+4107603335&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+w[8]+1163531501&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(S^A&(y^S))+w[13]+2850285829&4294967295,v=y+(T<<5&4294967295|T>>>27),T=A+(y^S&(v^y))+w[2]+4243563512&4294967295,A=v+(T<<9&4294967295|T>>>23),T=S+(v^y&(A^v))+w[7]+1735328473&4294967295,S=A+(T<<14&4294967295|T>>>18),T=y+(A^v&(S^A))+w[12]+2368359562&4294967295,y=S+(T<<20&4294967295|T>>>12),T=v+(y^S^A)+w[5]+4294588738&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+w[8]+2272392833&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+w[11]+1839030562&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+w[14]+4259657740&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(y^S^A)+w[1]+2763975236&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+w[4]+1272893353&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+w[7]+4139469664&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+w[10]+3200236656&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(y^S^A)+w[13]+681279174&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+w[0]+3936430074&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+w[3]+3572445317&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+w[6]+76029189&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(y^S^A)+w[9]+3654602809&4294967295,v=y+(T<<4&4294967295|T>>>28),T=A+(v^y^S)+w[12]+3873151461&4294967295,A=v+(T<<11&4294967295|T>>>21),T=S+(A^v^y)+w[15]+530742520&4294967295,S=A+(T<<16&4294967295|T>>>16),T=y+(S^A^v)+w[2]+3299628645&4294967295,y=S+(T<<23&4294967295|T>>>9),T=v+(S^(y|~A))+w[0]+4096336452&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+w[7]+1126891415&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+w[14]+2878612391&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+w[5]+4237533241&4294967295,y=S+(T<<21&4294967295|T>>>11),T=v+(S^(y|~A))+w[12]+1700485571&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+w[3]+2399980690&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+w[10]+4293915773&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+w[1]+2240044497&4294967295,y=S+(T<<21&4294967295|T>>>11),T=v+(S^(y|~A))+w[8]+1873313359&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+w[15]+4264355552&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+w[6]+2734768916&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+w[13]+1309151649&4294967295,y=S+(T<<21&4294967295|T>>>11),T=v+(S^(y|~A))+w[4]+4149444226&4294967295,v=y+(T<<6&4294967295|T>>>26),T=A+(y^(v|~S))+w[11]+3174756917&4294967295,A=v+(T<<10&4294967295|T>>>22),T=S+(v^(A|~y))+w[2]+718787259&4294967295,S=A+(T<<15&4294967295|T>>>17),T=y+(A^(S|~v))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+S&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var y=v-this.blockSize,w=this.B,S=this.h,A=0;A<v;){if(S==0)for(;A<=y;)s(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<v;)if(w[S++]=b.charCodeAt(A++),S==this.blockSize){s(this,w),S=0;break}}else for(;A<v;)if(w[S++]=b[A++],S==this.blockSize){s(this,w),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var y=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=y&255,y/=256;for(this.u(b),b=Array(16),v=y=0;4>v;++v)for(var w=0;32>w;w+=8)b[y++]=this.g[v]>>>w&255;return b};function i(b,v){var y=a;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=v(b)}function o(b,v){this.h=v;for(var y=[],w=!0,S=b.length-1;0<=S;S--){var A=b[S]|0;w&&A==v||(y[S]=A,w=!1)}this.g=y}var a={};function c(b){return-128<=b&&128>b?i(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return f;if(0>b)return P(u(-b));for(var v=[],y=1,w=0;b>=y;w++)v[w]=b/y|0,y*=4294967296;return new o(v,0)}function h(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return P(h(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),w=f,S=0;S<b.length;S+=8){var A=Math.min(8,b.length-S),T=parseInt(b.substring(S,S+A),v);8>A?(A=u(Math.pow(v,A)),w=w.j(A).add(u(T))):(w=w.j(y),w=w.add(u(T)))}return w}var f=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(R(this))return-P(this).m();for(var b=0,v=1,y=0;y<this.g.length;y++){var w=this.i(y);b+=(0<=w?w:4294967296+w)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(E(this))return"0";if(R(this))return"-"+P(this).toString(b);for(var v=u(Math.pow(b,6)),y=this,w="";;){var S=j(y,v).g;y=O(y,S.j(v));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=S,E(y))return A+w;for(;6>A.length;)A="0"+A;w=A+w}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function E(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function R(b){return b.h==-1}t.l=function(b){return b=O(this,b),R(b)?-1:E(b)?0:1};function P(b){for(var v=b.g.length,y=[],w=0;w<v;w++)y[w]=~b.g[w];return new o(y,~b.h).add(m)}t.abs=function(){return R(this)?P(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],w=0,S=0;S<=v;S++){var A=w+(this.i(S)&65535)+(b.i(S)&65535),T=(A>>>16)+(this.i(S)>>>16)+(b.i(S)>>>16);w=T>>>16,A&=65535,T&=65535,y[S]=T<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function O(b,v){return b.add(P(v))}t.j=function(b){if(E(this)||E(b))return f;if(R(this))return R(b)?P(this).j(P(b)):P(P(this).j(b));if(R(b))return P(this.j(P(b)));if(0>this.l(g)&&0>b.l(g))return u(this.m()*b.m());for(var v=this.g.length+b.g.length,y=[],w=0;w<2*v;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var S=0;S<b.g.length;S++){var A=this.i(w)>>>16,T=this.i(w)&65535,ve=b.i(S)>>>16,ze=b.i(S)&65535;y[2*w+2*S]+=T*ze,x(y,2*w+2*S),y[2*w+2*S+1]+=A*ze,x(y,2*w+2*S+1),y[2*w+2*S+1]+=T*ve,x(y,2*w+2*S+1),y[2*w+2*S+2]+=A*ve,x(y,2*w+2*S+2)}for(w=0;w<v;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=v;w<2*v;w++)y[w]=0;return new o(y,0)};function x(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function $(b,v){this.g=b,this.h=v}function j(b,v){if(E(v))throw Error("division by zero");if(E(b))return new $(f,f);if(R(b))return v=j(P(b),v),new $(P(v.g),P(v.h));if(R(v))return v=j(b,P(v)),new $(P(v.g),v.h);if(30<b.g.length){if(R(b)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var y=m,w=v;0>=w.l(b);)y=Z(y),w=Z(w);var S=q(y,1),A=q(w,1);for(w=q(w,2),y=q(y,2);!E(w);){var T=A.add(w);0>=T.l(b)&&(S=S.add(y),A=T),w=q(w,1),y=q(y,1)}return v=O(b,S.j(v)),new $(S,v)}for(S=f;0<=b.l(v);){for(y=Math.max(1,Math.floor(b.m()/v.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),A=u(y),T=A.j(v);R(T)||0<T.l(b);)y-=w,A=u(y),T=A.j(v);E(A)&&(A=m),S=S.add(A),b=O(b,T)}return new $(S,b)}t.A=function(b){return j(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)&b.i(w);return new o(y,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)|b.i(w);return new o(y,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],w=0;w<v;w++)y[w]=this.i(w)^b.i(w);return new o(y,this.h^b.h)};function Z(b){for(var v=b.g.length+1,y=[],w=0;w<v;w++)y[w]=b.i(w)<<1|b.i(w-1)>>>31;return new o(y,b.h)}function q(b,v){var y=v>>5;v%=32;for(var w=b.g.length-y,S=[],A=0;A<w;A++)S[A]=0<v?b.i(A+y)>>>v|b.i(A+y+1)<<32-v:b.i(A+y);return new o(S,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,oI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Vr=o}).apply(typeof M_<"u"?M_:typeof self<"u"?self:typeof window<"u"?window:{});var Ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aI,io,lI,al,Kh,cI,uI,hI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ka=="object"&&Ka];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(l,d){if(d)e:{var p=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var N=l[_];if(!(N in p))break e;p=p[N]}l=l[l.length-1],_=p[l],d=d(_),d!=_&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var p=0,_=!1,N={next:function(){if(!_&&p<l.length){var D=p++;return{value:d(D,l[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(l){return l||function(){return i(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),l.apply(d,N)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function g(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function E(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,N,D){for(var G=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)G[Fe-2]=arguments[Fe];return d.prototype[N].apply(_,G)}}function R(l){const d=l.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=l[_];return p}return[]}function P(l,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const N=l.length||0,D=_.length||0;l.length=N+D;for(let G=0;G<D;G++)l[N+G]=_[G]}else l.push(_)}}class O{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function x(l){return/^[\s\xa0]*$/.test(l)}function $(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function j(l){return j[" "](l),l}j[" "]=function(){};var Z=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function q(l,d,p){for(const _ in l)d.call(p,l[_],_,l)}function b(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function v(l){const d={};for(const p in l)d[p]=l[p];return d}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(l,d){let p,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(p in _)l[p]=_[p];for(let D=0;D<y.length;D++)p=y[D],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function S(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function A(l){a.setTimeout(()=>{throw l},0)}function T(){var l=ut;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class ve{constructor(){this.h=this.g=null}add(d,p){const _=ze.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var ze=new O(()=>new ke,l=>l.reset());class ke{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,_e=!1,ut=new ve,Gt=()=>{const l=a.Promise.resolve(void 0);ae=()=>{l.then(Ut)}};var Ut=()=>{for(var l;l=T();){try{l.h.call(l.g)}catch(p){A(p)}var d=ze;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}_e=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ve(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var Cn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function Bt(l,d){if(Ve.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(Z){e:{try{j(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:yt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Bt.aa.h.call(this)}}E(Bt,Ve);var yt={2:"touch",3:"pen",4:"mouse"};Bt.prototype.h=function(){Bt.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),z=0;function Q(l,d,p,_,N){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=N,this.key=++z,this.da=this.fa=!1}function ne(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Se(l){this.src=l,this.g={},this.h=0}Se.prototype.add=function(l,d,p,_,N){var D=l.toString();l=this.g[D],l||(l=this.g[D]=[],this.h++);var G=C(l,d,_,N);return-1<G?(d=l[G],p||(d.fa=!1)):(d=new Q(d,this.src,D,!!_,N),d.fa=p,l.push(d)),d};function I(l,d){var p=d.type;if(p in l.g){var _=l.g[p],N=Array.prototype.indexOf.call(_,d,void 0),D;(D=0<=N)&&Array.prototype.splice.call(_,N,1),D&&(ne(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function C(l,d,p,_){for(var N=0;N<l.length;++N){var D=l[N];if(!D.da&&D.listener==d&&D.capture==!!p&&D.ha==_)return N}return-1}var k="closure_lm_"+(1e6*Math.random()|0),L={};function B(l,d,p,_,N){if(Array.isArray(d)){for(var D=0;D<d.length;D++)B(l,d[D],p,_,N);return null}return p=le(p),l&&l[M]?l.K(d,p,u(_)?!!_.capture:!1,N):V(l,d,p,!1,_,N)}function V(l,d,p,_,N,D){if(!d)throw Error("Invalid event type");var G=u(N)?!!N.capture:!!N,Fe=J(l);if(Fe||(l[k]=Fe=new Se(l)),p=Fe.add(d,p,_,G,D),p.proxy)return p;if(_=Y(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)Cn||(N=G),N===void 0&&(N=!1),l.addEventListener(d.toString(),_,N);else if(l.attachEvent)l.attachEvent(H(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Y(){function l(p){return d.call(l.src,l.listener,p)}const d=ie;return l}function K(l,d,p,_,N){if(Array.isArray(d))for(var D=0;D<d.length;D++)K(l,d[D],p,_,N);else _=u(_)?!!_.capture:!!_,p=le(p),l&&l[M]?(l=l.i,d=String(d).toString(),d in l.g&&(D=l.g[d],p=C(D,p,_,N),-1<p&&(ne(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete l.g[d],l.h--)))):l&&(l=J(l))&&(d=l.g[d.toString()],l=-1,d&&(l=C(d,p,_,N)),(p=-1<l?d[l]:null)&&W(p))}function W(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[M])I(d.i,l);else{var p=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(p,_,l.capture):d.detachEvent?d.detachEvent(H(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=J(d))?(I(p,l),p.h==0&&(p.src=null,d[k]=null)):ne(l)}}}function H(l){return l in L?L[l]:L[l]="on"+l}function ie(l,d){if(l.da)l=!0;else{d=new Bt(d,this);var p=l.listener,_=l.ha||l.src;l.fa&&W(l),l=p.call(_,d)}return l}function J(l){return l=l[k],l instanceof Se?l:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(l){return typeof l=="function"?l:(l[re]||(l[re]=function(d){return l.handleEvent(d)}),l[re])}function oe(){xe.call(this),this.i=new Se(this),this.M=this,this.F=null}E(oe,xe),oe.prototype[M]=!0,oe.prototype.removeEventListener=function(l,d,p,_){K(this,l,d,p,_)};function ge(l,d){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new Ve(d,l);else if(d instanceof Ve)d.target=d.target||l;else{var N=d;d=new Ve(_,l),w(d,N)}if(N=!0,p)for(var D=p.length-1;0<=D;D--){var G=d.g=p[D];N=Ae(G,_,!0,d)&&N}if(G=d.g=l,N=Ae(G,_,!0,d)&&N,N=Ae(G,_,!1,d)&&N,p)for(D=0;D<p.length;D++)G=d.g=p[D],N=Ae(G,_,!1,d)&&N}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],_=0;_<p.length;_++)ne(p[_]);delete l.g[d],l.h--}}this.F=null},oe.prototype.K=function(l,d,p,_){return this.i.add(String(l),d,!1,p,_)},oe.prototype.L=function(l,d,p,_){return this.i.add(String(l),d,!0,p,_)};function Ae(l,d,p,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,D=0;D<d.length;++D){var G=d[D];if(G&&!G.da&&G.capture==p){var Fe=G.listener,dt=G.ha||G.src;G.fa&&I(l.i,G),N=Fe.call(dt,_)!==!1&&N}}return N&&!_.defaultPrevented}function vt(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function ht(l){l.g=vt(()=>{l.g=null,l.i&&(l.i=!1,ht(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class tn extends xe{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ht(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Et(l){xe.call(this),this.h=l,this.g={}}E(Et,xe);var mr=[];function Oi(l){q(l.g,function(d,p){this.g.hasOwnProperty(p)&&W(d)},l),l.g={}}Et.prototype.N=function(){Et.aa.N.call(this),Oi(this)},Et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ft=a.JSON.stringify,nn=a.JSON.parse,ma=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function tu(){}tu.prototype.h=null;function rp(l){return l.h||(l.h=l.i())}function sp(){}var Mi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nu(){Ve.call(this,"d")}E(nu,Ve);function ru(){Ve.call(this,"c")}E(ru,Ve);var Jr={},ip=null;function ga(){return ip=ip||new oe}Jr.La="serverreachability";function op(l){Ve.call(this,Jr.La,l)}E(op,Ve);function xi(l){const d=ga();ge(d,new op(d))}Jr.STAT_EVENT="statevent";function ap(l,d){Ve.call(this,Jr.STAT_EVENT,l),this.stat=d}E(ap,Ve);function Ot(l){const d=ga();ge(d,new ap(d,l))}Jr.Ma="timingevent";function lp(l,d){Ve.call(this,Jr.Ma,l),this.size=d}E(lp,Ve);function Li(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Vi(){this.g=!0}Vi.prototype.xa=function(){this.g=!1};function X0(l,d,p,_,N,D){l.info(function(){if(l.g)if(D)for(var G="",Fe=D.split("&"),dt=0;dt<Fe.length;dt++){var Pe=Fe[dt].split("=");if(1<Pe.length){var Tt=Pe[0];Pe=Pe[1];var wt=Tt.split("_");G=2<=wt.length&&wt[1]=="type"?G+(Tt+"="+Pe+"&"):G+(Tt+"=redacted&")}}else G=null;else G=D;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+d+`
`+p+`
`+G})}function J0(l,d,p,_,N,D,G){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+d+`
`+p+`
`+D+" "+G})}function Ms(l,d,p,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+eA(l,p)+(_?" "+_:"")})}function Z0(l,d){l.info(function(){return"TIMEOUT: "+d})}Vi.prototype.info=function(){};function eA(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var D=N[0];if(D!="noop"&&D!="stop"&&D!="close")for(var G=1;G<N.length;G++)N[G]=""}}}}return ft(p)}catch{return d}}var _a={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},su;function ya(){}E(ya,tu),ya.prototype.g=function(){return new XMLHttpRequest},ya.prototype.i=function(){return{}},su=new ya;function gr(l,d,p,_){this.j=l,this.i=d,this.l=p,this.R=_||1,this.U=new Et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new up}function up(){this.i=null,this.g="",this.h=!1}var hp={},iu={};function ou(l,d,p){l.L=1,l.v=wa(qn(d)),l.m=p,l.P=!0,fp(l,null)}function fp(l,d){l.F=Date.now(),va(l),l.A=qn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),Cp(p.i,"t",_),l.C=0,p=l.j.J,l.h=new up,l.g=Wp(l.j,p?d:null,!l.m),0<l.O&&(l.M=new tn(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,_=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(mr[0]=N.toString()),N=mr);for(var D=0;D<N.length;D++){var G=B(p,N[D],_||d.handleEvent,!1,d.h||d);if(!G)break;d.g[G.key]=G}d=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),xi(),X0(l.i,l.u,l.A,l.l,l.R,l.m)}gr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Kn(l)==3?d.j():this.Y(l)},gr.prototype.Y=function(l){try{if(l==this.g)e:{const wt=Kn(this.g);var d=this.g.Ba();const Vs=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||Op(this.g)))){this.J||wt!=4||d==7||(d==8||0>=Vs?xi(3):xi(2)),au(this);var p=this.g.Z();this.X=p;t:if(dp(this)){var _=Op(this.g);l="";var N=_.length,D=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zr(this),Fi(this);var G="";break t}this.h.i=new a.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(D&&d==N-1)});_.length=0,this.h.g+=l,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,J0(this.i,this.u,this.A,this.l,this.R,wt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,dt=this.g;if((Fe=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Fe)){var Pe=Fe;break t}}Pe=null}if(p=Pe)Ms(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lu(this,p);else{this.o=!1,this.s=3,Ot(12),Zr(this),Fi(this);break e}}if(this.P){p=!0;let fn;for(;!this.J&&this.C<G.length;)if(fn=tA(this,G),fn==iu){wt==4&&(this.s=4,Ot(14),p=!1),Ms(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==hp){this.s=4,Ot(15),Ms(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else Ms(this.i,this.l,fn,null),lu(this,fn);if(dp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||G.length!=0||this.h.h||(this.s=1,Ot(16),p=!1),this.o=this.o&&p,!p)Ms(this.i,this.l,G,"[Invalid Chunked Response]"),Zr(this),Fi(this);else if(0<G.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),pu(Tt),Tt.M=!0,Ot(11))}}else Ms(this.i,this.l,G,null),lu(this,G);wt==4&&Zr(this),this.o&&!this.J&&(wt==4?Bp(this.j,this):(this.o=!1,va(this)))}else yA(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Zr(this),Fi(this)}}}catch{}finally{}};function dp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function tA(l,d){var p=l.C,_=d.indexOf(`
`,p);return _==-1?iu:(p=Number(d.substring(p,_)),isNaN(p)?hp:(_+=1,_+p>d.length?iu:(d=d.slice(_,_+p),l.C=_+p,d)))}gr.prototype.cancel=function(){this.J=!0,Zr(this)};function va(l){l.S=Date.now()+l.I,pp(l,l.I)}function pp(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Li(m(l.ba,l),d)}function au(l){l.B&&(a.clearTimeout(l.B),l.B=null)}gr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Z0(this.i,this.A),this.L!=2&&(xi(),Ot(17)),Zr(this),this.s=2,Fi(this)):pp(this,this.S-l)};function Fi(l){l.j.G==0||l.J||Bp(l.j,l)}function Zr(l){au(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Oi(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function lu(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||cu(p.h,l))){if(!l.K&&cu(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Sa(p),Ca(p);else break e;du(p),Ot(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=Li(m(p.Za,p),6e3));if(1>=_p(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ts(p,11)}else if((l.K||p.g==l)&&Sa(p),!x(d))for(N=p.Da.g.parse(d),d=0;d<N.length;d++){let Pe=N[d];if(p.T=Pe[0],Pe=Pe[1],p.G==2)if(Pe[0]=="c"){p.K=Pe[1],p.ia=Pe[2];const Tt=Pe[3];Tt!=null&&(p.la=Tt,p.j.info("VER="+p.la));const wt=Pe[4];wt!=null&&(p.Aa=wt,p.j.info("SVER="+p.Aa));const Vs=Pe[5];Vs!=null&&typeof Vs=="number"&&0<Vs&&(_=1.5*Vs,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const fn=l.g;if(fn){const ka=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ka){var D=_.h;D.g||ka.indexOf("spdy")==-1&&ka.indexOf("quic")==-1&&ka.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(uu(D,D.h),D.h=null))}if(_.D){const mu=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;mu&&(_.ya=mu,He(_.I,_.D,mu))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var G=l;if(_.qa=Hp(_,_.J?_.ia:null,_.W),G.K){yp(_.h,G);var Fe=G,dt=_.L;dt&&(Fe.I=dt),Fe.B&&(au(Fe),va(Fe)),_.g=G}else Fp(_);0<p.i.length&&Ra(p)}else Pe[0]!="stop"&&Pe[0]!="close"||ts(p,7);else p.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?ts(p,7):fu(p):Pe[0]!="noop"&&p.l&&p.l.ta(Pe),p.v=0)}}xi(4)}catch{}}var nA=class{constructor(l,d){this.g=l,this.map=d}};function mp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gp(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function _p(l){return l.h?1:l.g?l.g.size:0}function cu(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function uu(l,d){l.g?l.g.add(d):l.h=d}function yp(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}mp.prototype.cancel=function(){if(this.i=vp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function vp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return R(l.i)}function rA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],p=l.length,_=0;_<p;_++)d.push(l[_]);return d}d=[],p=0;for(_ in l)d[p++]=l[_];return d}function sA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const _ in l)d[p++]=_;return d}}}function Ep(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=sA(l),_=rA(l),N=_.length,D=0;D<N;D++)d.call(void 0,_[D],p&&p[D],l)}var Tp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function iA(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),N=null;if(0<=_){var D=l[p].substring(0,_);N=l[p].substring(_+1)}else D=l[p];d(D,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function es(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof es){this.h=l.h,Ea(this,l.j),this.o=l.o,this.g=l.g,Ta(this,l.s),this.l=l.l;var d=l.i,p=new $i;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),wp(this,p),this.m=l.m}else l&&(d=String(l).match(Tp))?(this.h=!1,Ea(this,d[1]||"",!0),this.o=Ui(d[2]||""),this.g=Ui(d[3]||"",!0),Ta(this,d[4]),this.l=Ui(d[5]||"",!0),wp(this,d[6]||"",!0),this.m=Ui(d[7]||"")):(this.h=!1,this.i=new $i(null,this.h))}es.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Bi(d,Ip,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Bi(d,Ip,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Bi(p,p.charAt(0)=="/"?lA:aA,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Bi(p,uA)),l.join("")};function qn(l){return new es(l)}function Ea(l,d,p){l.j=p?Ui(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Ta(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function wp(l,d,p){d instanceof $i?(l.i=d,hA(l.i,l.h)):(p||(d=Bi(d,cA)),l.i=new $i(d,l.h))}function He(l,d,p){l.i.set(d,p)}function wa(l){return He(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ui(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Bi(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,oA),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function oA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ip=/[#\/\?@]/g,aA=/[#\?:]/g,lA=/[#\?]/g,cA=/[#\?@]/g,uA=/#/g;function $i(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function _r(l){l.g||(l.g=new Map,l.h=0,l.i&&iA(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=$i.prototype,t.add=function(l,d){_r(this),this.i=null,l=xs(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function Ap(l,d){_r(l),d=xs(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function bp(l,d){return _r(l),d=xs(l,d),l.g.has(d)}t.forEach=function(l,d){_r(this),this.g.forEach(function(p,_){p.forEach(function(N){l.call(d,N,_,this)},this)},this)},t.na=function(){_r(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const N=l[_];for(let D=0;D<N.length;D++)p.push(d[_])}return p},t.V=function(l){_r(this);let d=[];if(typeof l=="string")bp(this,l)&&(d=d.concat(this.g.get(xs(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return _r(this),this.i=null,l=xs(this,l),bp(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Cp(l,d,p){Ap(l,d),0<p.length&&(l.i=null,l.g.set(xs(l,d),R(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const D=encodeURIComponent(String(_)),G=this.V(_);for(_=0;_<G.length;_++){var N=D;G[_]!==""&&(N+="="+encodeURIComponent(String(G[_]))),l.push(N)}}return this.i=l.join("&")};function xs(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function hA(l,d){d&&!l.j&&(_r(l),l.i=null,l.g.forEach(function(p,_){var N=_.toLowerCase();_!=N&&(Ap(this,_),Cp(this,N,p))},l)),l.j=d}function fA(l,d){const p=new Vi;if(a.Image){const _=new Image;_.onload=g(yr,p,"TestLoadImage: loaded",!0,d,_),_.onerror=g(yr,p,"TestLoadImage: error",!1,d,_),_.onabort=g(yr,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=g(yr,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function dA(l,d){const p=new Vi,_=new AbortController,N=setTimeout(()=>{_.abort(),yr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(D=>{clearTimeout(N),D.ok?yr(p,"TestPingServer: ok",!0,d):yr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),yr(p,"TestPingServer: error",!1,d)})}function yr(l,d,p,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(p)}catch{}}function pA(){this.g=new ma}function mA(l,d,p){const _=p||"";try{Ep(l,function(N,D){let G=N;u(N)&&(G=ft(N)),d.push(_+D+"="+encodeURIComponent(G))})}catch(N){throw d.push(_+"type="+encodeURIComponent("_badmap")),N}}function Ia(l){this.l=l.Ub||null,this.j=l.eb||!1}E(Ia,tu),Ia.prototype.g=function(){return new Aa(this.l,this.j)},Ia.prototype.i=function(l){return function(){return l}}({});function Aa(l,d){oe.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Aa,oe),t=Aa.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Hi(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ji(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Hi(this)),this.g&&(this.readyState=3,Hi(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rp(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rp(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?ji(this):Hi(this),this.readyState==3&&Rp(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ji(this))},t.Qa=function(l){this.g&&(this.response=l,ji(this))},t.ga=function(){this.g&&ji(this)};function ji(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Hi(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function Hi(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Aa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Sp(l){let d="";return q(l,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function hu(l,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Sp(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):He(l,d,p))}function Je(l){oe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Je,oe);var gA=/^https?$/i,_A=["POST","PUT"];t=Je.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():su.g(),this.v=this.o?rp(this.o):rp(su),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(D){Pp(this,D);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)p.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())p.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(_A,d,void 0))||_||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,G]of p)this.g.setRequestHeader(D,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dp(this),this.u=!0,this.g.send(l),this.u=!1}catch(D){Pp(this,D)}};function Pp(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,kp(l),ba(l)}function kp(l){l.A||(l.A=!0,ge(l,"complete"),ge(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ge(this,"complete"),ge(this,"abort"),ba(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ba(this,!0)),Je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Np(this):this.bb())},t.bb=function(){Np(this)};function Np(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Kn(l)!=4||l.Z()!=2)){if(l.u&&Kn(l)==4)vt(l.Ea,0,l);else if(ge(l,"readystatechange"),Kn(l)==4){l.h=!1;try{const G=l.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=G===0){var N=String(l.D).match(Tp)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),_=!gA.test(N?N.toLowerCase():"")}p=_}if(p)ge(l,"complete"),ge(l,"success");else{l.m=6;try{var D=2<Kn(l)?l.g.statusText:""}catch{D=""}l.l=D+" ["+l.Z()+"]",kp(l)}}finally{ba(l)}}}}function ba(l,d){if(l.g){Dp(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||ge(l,"ready");try{p.onreadystatechange=_}catch{}}}function Dp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Kn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),nn(d)}};function Op(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function yA(l){const d={};l=(l.g&&2<=Kn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(x(l[_]))continue;var p=S(l[_]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=d[N]||[];d[N]=D,D.push(p)}b(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wi(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function Mp(l){this.Aa=0,this.i=[],this.j=new Vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wi("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wi("baseRetryDelayMs",5e3,l),this.cb=Wi("retryDelaySeedMs",1e4,l),this.Wa=Wi("forwardChannelMaxRetries",2,l),this.wa=Wi("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new mp(l&&l.concurrentRequestLimit),this.Da=new pA,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Mp.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,_){Ot(0),this.W=l,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Hp(this,null,this.W),Ra(this)};function fu(l){if(xp(l),l.G==3){var d=l.U++,p=qn(l.I);if(He(p,"SID",l.K),He(p,"RID",d),He(p,"TYPE","terminate"),qi(l,p),d=new gr(l,l.j,d),d.L=2,d.v=wa(qn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=Wp(d.j,null),d.g.ea(d.v)),d.F=Date.now(),va(d)}jp(l)}function Ca(l){l.g&&(pu(l),l.g.cancel(),l.g=null)}function xp(l){Ca(l),l.u&&(a.clearTimeout(l.u),l.u=null),Sa(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ra(l){if(!gp(l.h)&&!l.s){l.s=!0;var d=l.Ga;ae||Gt(),_e||(ae(),_e=!0),ut.add(d,l),l.B=0}}function vA(l,d){return _p(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Li(m(l.Ga,l,d),$p(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new gr(this,this.j,l);let D=this.o;if(this.S&&(D?(D=v(D),w(D,this.S)):D=this.S),this.m!==null||this.O||(N.H=D,D=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Vp(this,N,d),p=qn(this.I),He(p,"RID",l),He(p,"CVER",22),this.D&&He(p,"X-HTTP-Session-Id",this.D),qi(this,p),D&&(this.O?d="headers="+encodeURIComponent(String(Sp(D)))+"&"+d:this.m&&hu(p,this.m,D)),uu(this.h,N),this.Ua&&He(p,"TYPE","init"),this.P?(He(p,"$req",d),He(p,"SID","null"),N.T=!0,ou(N,p,null)):ou(N,p,d),this.G=2}}else this.G==3&&(l?Lp(this,l):this.i.length==0||gp(this.h)||Lp(this))};function Lp(l,d){var p;d?p=d.l:p=l.U++;const _=qn(l.I);He(_,"SID",l.K),He(_,"RID",p),He(_,"AID",l.T),qi(l,_),l.m&&l.o&&hu(_,l.m,l.o),p=new gr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Vp(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),uu(l.h,p),ou(p,_,d)}function qi(l,d){l.H&&q(l.H,function(p,_){He(d,_,p)}),l.l&&Ep({},function(p,_){He(d,_,p)})}function Vp(l,d,p){p=Math.min(l.i.length,p);var _=l.l?m(l.l.Na,l.l,l):null;e:{var N=l.i;let D=-1;for(;;){const G=["count="+p];D==-1?0<p?(D=N[0].g,G.push("ofs="+D)):D=0:G.push("ofs="+D);let Fe=!0;for(let dt=0;dt<p;dt++){let Pe=N[dt].g;const Tt=N[dt].map;if(Pe-=D,0>Pe)D=Math.max(0,N[dt].g-100),Fe=!1;else try{mA(Tt,G,"req"+Pe+"_")}catch{_&&_(Tt)}}if(Fe){_=G.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,_}function Fp(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;ae||Gt(),_e||(ae(),_e=!0),ut.add(d,l),l.v=0}}function du(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Li(m(l.Fa,l),$p(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Up(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Li(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),Ca(this),Up(this))};function pu(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Up(l){l.g=new gr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=qn(l.qa);He(d,"RID","rpc"),He(d,"SID",l.K),He(d,"AID",l.T),He(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&He(d,"TO",l.ja),He(d,"TYPE","xmlhttp"),qi(l,d),l.m&&l.o&&hu(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=wa(qn(d)),p.m=null,p.P=!0,fp(p,l)}t.Za=function(){this.C!=null&&(this.C=null,Ca(this),du(this),Ot(19))};function Sa(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Bp(l,d){var p=null;if(l.g==d){Sa(l),pu(l),l.g=null;var _=2}else if(cu(l.h,d))p=d.D,yp(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var N=l.B;_=ga(),ge(_,new lp(_,p)),Ra(l)}else Fp(l);else if(N=d.s,N==3||N==0&&0<d.X||!(_==1&&vA(l,d)||_==2&&du(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),N){case 1:ts(l,5);break;case 4:ts(l,10);break;case 3:ts(l,6);break;default:ts(l,2)}}}function $p(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function ts(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),_=l.Xa;const N=!_;_=new es(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ea(_,"https"),wa(_),N?fA(_.toString(),p):dA(_.toString(),p)}else Ot(2);l.G=0,l.l&&l.l.sa(d),jp(l),xp(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function jp(l){if(l.G=0,l.ka=[],l.l){const d=vp(l.h);(d.length!=0||l.i.length!=0)&&(P(l.ka,d),P(l.ka,l.i),l.h.i.length=0,R(l.i),l.i.length=0),l.l.ra()}}function Hp(l,d,p){var _=p instanceof es?qn(p):new es(p);if(_.g!="")d&&(_.g=d+"."+_.g),Ta(_,_.s);else{var N=a.location;_=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var D=new es(null);_&&Ea(D,_),d&&(D.g=d),N&&Ta(D,N),p&&(D.l=p),_=D}return p=l.D,d=l.ya,p&&d&&He(_,p,d),He(_,"VER",l.la),qi(l,_),_}function Wp(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Je(new Ia({eb:p})):new Je(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qp(){}t=qp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Pa(){}Pa.prototype.g=function(l,d){return new zt(l,d)};function zt(l,d){oe.call(this),this.g=new Mp(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!x(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!x(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Ls(this)}E(zt,oe),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){fu(this.g)},zt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=ft(l),l=p);d.i.push(new nA(d.Ya++,l)),d.G==3&&Ra(d)},zt.prototype.N=function(){this.g.l=null,delete this.j,fu(this.g),delete this.g,zt.aa.N.call(this)};function Kp(l){nu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}E(Kp,nu);function Gp(){ru.call(this),this.status=1}E(Gp,ru);function Ls(l){this.g=l}E(Ls,qp),Ls.prototype.ua=function(){ge(this.g,"a")},Ls.prototype.ta=function(l){ge(this.g,new Kp(l))},Ls.prototype.sa=function(l){ge(this.g,new Gp)},Ls.prototype.ra=function(){ge(this.g,"b")},Pa.prototype.createWebChannel=Pa.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,hI=function(){return new Pa},uI=function(){return ga()},cI=Jr,Kh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_a.NO_ERROR=0,_a.TIMEOUT=8,_a.HTTP_ERROR=6,al=_a,cp.COMPLETE="complete",lI=cp,sp.EventType=Mi,Mi.OPEN="a",Mi.CLOSE="b",Mi.ERROR="c",Mi.MESSAGE="d",oe.prototype.listen=oe.prototype.K,io=sp,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,aI=Je}).apply(typeof Ka<"u"?Ka:typeof self<"u"?self:typeof window<"u"?window:{});const x_="@firebase/firestore",L_="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new ta("@firebase/firestore");function qs(){return As.logLevel}function ee(t,...e){if(As.logLevel<=ye.DEBUG){const n=e.map(wd);As.debug(`Firestore (${Si}): ${t}`,...n)}}function ur(t,...e){if(As.logLevel<=ye.ERROR){const n=e.map(wd);As.error(`Firestore (${Si}): ${t}`,...n)}}function pi(t,...e){if(As.logLevel<=ye.WARN){const n=e.map(wd);As.warn(`Firestore (${Si}): ${t}`,...n)}}function wd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${Si}) INTERNAL ASSERTION FAILED: `+t;throw ur(e),new Error(e)}function Me(t,e){t||ue()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class nL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rL{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new or;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new or,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new fI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new At(e)}}class sL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class iL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new sL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class V_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oL{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Yt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Me(this.o===void 0);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new V_(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new V_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=aL(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function mi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=-62135596800,U_=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*U_);return new rt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<F_)throw new te(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/U_}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-F_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new rt(0,0))}static max(){return new fe(new rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="__name__";class kn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return kn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=kn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=kn.isNumericId(e),s=kn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?kn.extractNumericId(e).compare(kn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vr.fromString(e.substring(4,e.length-2))}}class Ke extends kn{construct(e,n,r){return new Ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ke(n)}static emptyPath(){return new Ke([])}}const lL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends kn{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return lL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===B_}static keyField(){return new gt([B_])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new te(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new te(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Ke.fromString(e))}static fromName(e){return new se(Ke.fromString(e).popFirst(5))}static empty(){return new se(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Ke(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=-1;function cL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new $r(s,se.empty(),e)}function uL(t){return new $r(t.readTime,t.key,qo)}class $r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $r(fe.min(),se.empty(),qo)}static max(){return new $r(fe.max(),se.empty(),qo)}}function hL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==fL)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function pL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ki(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Fc.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=-1;function Uc(t){return t==null}function Kl(t){return t===0&&1/t==-1/0}function mL(t){return typeof t=="number"&&Number.isInteger(t)&&!Kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI="";function gL(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=$_(e)),e=_L(t.get(n),e);return $_(e)}function _L(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case pI:n+="";break;default:n+=i}}return n}function $_(t){return t+pI+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ks(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new Xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ga(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ga(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ga(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ga(this.root,e,this.comparator,!0)}}class Ga{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new pt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new H_(this.data.getIterator())}getIteratorFrom(e){return new H_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class H_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new gn([])}unionWith(e){let n=new st(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new gn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gI("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const yL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(t){if(Me(!!t),typeof t=="string"){let e=0;const n=yL.exec(t);if(Me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:et(t.seconds),nanos:et(t.nanos)}}function et(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hr(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="server_timestamp",yI="__type__",vI="__previous_value__",EI="__local_write_time__";function Ad(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[yI])===null||n===void 0?void 0:n.stringValue)===_I}function Bc(t){const e=t.mapValue.fields[vI];return Ad(e)?Bc(e):e}function Ko(t){const e=jr(t.mapValue.fields[EI].timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(e,n,r,s,i,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}const Gl="(default)";class Go{constructor(e,n){this.projectId=e,this.database=n||Gl}static empty(){return new Go("","")}get isDefaultDatabase(){return this.database===Gl}isEqual(e){return e instanceof Go&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="__type__",EL="__max__",za={mapValue:{}},wI="__vector__",zl="value";function Wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ad(t)?4:wL(t)?9007199254740991:TL(t)?10:11:ue()}function $n(t,e){if(t===e)return!0;const n=Wr(t);if(n!==Wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ko(t).isEqual(Ko(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=jr(s.timestampValue),a=jr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Hr(s.bytesValue).isEqual(Hr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return et(s.geoPointValue.latitude)===et(i.geoPointValue.latitude)&&et(s.geoPointValue.longitude)===et(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return et(s.integerValue)===et(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=et(s.doubleValue),a=et(i.doubleValue);return o===a?Kl(o)===Kl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return mi(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(j_(o)!==j_(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!$n(o[c],a[c])))return!1;return!0}(t,e);default:return ue()}}function zo(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function gi(t,e){if(t===e)return 0;const n=Wr(t),r=Wr(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=et(i.integerValue||i.doubleValue),c=et(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return W_(t.timestampValue,e.timestampValue);case 4:return W_(Ko(t),Ko(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Hr(i),c=Hr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=we(a[u],c[u]);if(h!==0)return h}return we(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=we(et(i.latitude),et(o.latitude));return a!==0?a:we(et(i.longitude),et(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return q_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,h;const f=i.fields||{},m=o.fields||{},g=(a=f[zl])===null||a===void 0?void 0:a.arrayValue,E=(c=m[zl])===null||c===void 0?void 0:c.arrayValue,R=we(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0);return R!==0?R:q_(g,E)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===za.mapValue&&o===za.mapValue)return 0;if(i===za.mapValue)return 1;if(o===za.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const m=we(c[f],h[f]);if(m!==0)return m;const g=gi(a[c[f]],u[h[f]]);if(g!==0)return g}return we(c.length,h.length)}(t.mapValue,e.mapValue);default:throw ue()}}function W_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=jr(t),r=jr(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function q_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=gi(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function _i(t){return Gh(t)}function Gh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Hr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Gh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gh(n.fields[o])}`;return s+"}"}(t.mapValue):ue()}function ll(t){switch(Wr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bc(t);return e?16+ll(e):16;case 5:return 2*t.stringValue.length;case 6:return Hr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ll(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ks(r.fields,(i,o)=>{s+=i.length+ll(o)}),s}(t.mapValue);default:throw ue()}}function K_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zh(t){return!!t&&"integerValue"in t}function bd(t){return!!t&&"arrayValue"in t}function G_(t){return!!t&&"nullValue"in t}function z_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function cl(t){return!!t&&"mapValue"in t}function TL(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[TI])===null||n===void 0?void 0:n.stringValue)===wI}function bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ks(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===EL}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.value=e}static empty(){return new on({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!cl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(n)}setAll(e){let n=gt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=bo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());cl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];cl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ks(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new on(bo(this.value))}}function II(t){const e=[];return ks(t.fields,(n,r)=>{const s=new gt([n]);if(cl(r)){const i=II(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Pt(e,0,fe.min(),fe.min(),fe.min(),on.empty(),0)}static newFoundDocument(e,n,r,s){return new Pt(e,1,n,fe.min(),r,s,0)}static newNoDocument(e,n){return new Pt(e,2,n,fe.min(),fe.min(),on.empty(),0)}static newUnknownDocument(e,n){return new Pt(e,3,n,fe.min(),fe.min(),on.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n){this.position=e,this.inclusive=n}}function Q_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=gi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Y_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n="asc"){this.field=e,this.dir=n}}function IL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{}class nt extends AI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bL(e,n,r):n==="array-contains"?new SL(e,r):n==="in"?new PL(e,r):n==="not-in"?new kL(e,r):n==="array-contains-any"?new NL(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CL(e,r):new RL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(gi(n,this.value)):n!==null&&Wr(this.value)===Wr(n)&&this.matchesComparison(gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bn extends AI{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new bn(e,n)}matches(e){return bI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function bI(t){return t.op==="and"}function CI(t){return AL(t)&&bI(t)}function AL(t){for(const e of t.filters)if(e instanceof bn)return!1;return!0}function Qh(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+_i(t.value);if(CI(t))return t.filters.map(e=>Qh(e)).join(",");{const e=t.filters.map(n=>Qh(n)).join(",");return`${t.op}(${e})`}}function RI(t,e){return t instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&$n(r.value,s.value)}(t,e):t instanceof bn?function(r,s){return s instanceof bn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&RI(o,s.filters[a]),!0):!1}(t,e):void ue()}function SI(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${_i(n.value)}`}(t):t instanceof bn?function(n){return n.op.toString()+" {"+n.getFilters().map(SI).join(" ,")+"}"}(t):"Filter"}class bL extends nt{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class CL extends nt{constructor(e,n){super(e,"in",n),this.keys=PI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class RL extends nt{constructor(e,n){super(e,"not-in",n),this.keys=PI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function PI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class SL extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bd(n)&&zo(n.arrayValue,this.value)}}class PL extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zo(this.value.arrayValue,n)}}class kL extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(zo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!zo(this.value.arrayValue,n)}}class NL extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>zo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.le=null}}function X_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new DL(t,e,n,r,s,i,o)}function Cd(t){const e=me(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Qh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_i(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_i(r)).join(",")),e.le=n}return e.le}function Rd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!RI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Y_(t.startAt,e.startAt)&&Y_(t.endAt,e.endAt)}function Yh(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function OL(t,e,n,r,s,i,o,a){return new ua(t,e,n,r,s,i,o,a)}function Sd(t){return new ua(t)}function J_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kI(t){return t.collectionGroup!==null}function Co(t){const e=me(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new st(gt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new Yl(i,r))}),n.has(gt.keyField().canonicalString())||e.he.push(new Yl(gt.keyField(),r))}return e.he}function Vn(t){const e=me(t);return e.Pe||(e.Pe=ML(e,Co(t))),e.Pe}function ML(t,e){if(t.limitType==="F")return X_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Yl(s.field,i)});const n=t.endAt?new Ql(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ql(t.startAt.position,t.startAt.inclusive):null;return X_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xh(t,e){const n=t.filters.concat([e]);return new ua(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Jh(t,e,n){return new ua(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $c(t,e){return Rd(Vn(t),Vn(e))&&t.limitType===e.limitType}function NI(t){return`${Cd(Vn(t))}|lt:${t.limitType}`}function Ks(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>SI(s)).join(", ")}]`),Uc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>_i(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>_i(s)).join(",")),`Target(${r})`}(Vn(t))}; limitType=${t.limitType})`}function jc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Co(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=Q_(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Co(r),s)||r.endAt&&!function(o,a,c){const u=Q_(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Co(r),s))}(t,e)}function xL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function DI(t){return(e,n)=>{let r=!1;for(const s of Co(t)){const i=LL(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function LL(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?gi(c,u):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ks(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return mI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VL=new Xe(se.comparator);function hr(){return VL}const OI=new Xe(se.comparator);function oo(...t){let e=OI;for(const n of t)e=e.insert(n.key,n);return e}function MI(t){let e=OI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function fs(){return Ro()}function xI(){return Ro()}function Ro(){return new Ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const FL=new Xe(se.comparator),UL=new st(se.comparator);function Te(...t){let e=UL;for(const n of t)e=e.add(n);return e}const BL=new st(we);function $L(){return BL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kl(e)?"-0":e}}function LI(t){return{integerValue:""+t}}function jL(t,e){return mL(e)?LI(e):Pd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this._=void 0}}function HL(t,e,n){return t instanceof Xl?function(s,i){const o={fields:{[yI]:{stringValue:_I},[EI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ad(i)&&(i=Bc(i)),i&&(o.fields[vI]=i),{mapValue:o}}(n,e):t instanceof Qo?FI(t,e):t instanceof Yo?UI(t,e):function(s,i){const o=VI(s,i),a=Z_(o)+Z_(s.Ie);return zh(o)&&zh(s.Ie)?LI(a):Pd(s.serializer,a)}(t,e)}function WL(t,e,n){return t instanceof Qo?FI(t,e):t instanceof Yo?UI(t,e):n}function VI(t,e){return t instanceof Jl?function(r){return zh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Xl extends Hc{}class Qo extends Hc{constructor(e){super(),this.elements=e}}function FI(t,e){const n=BI(e);for(const r of t.elements)n.some(s=>$n(s,r))||n.push(r);return{arrayValue:{values:n}}}class Yo extends Hc{constructor(e){super(),this.elements=e}}function UI(t,e){let n=BI(e);for(const r of t.elements)n=n.filter(s=>!$n(s,r));return{arrayValue:{values:n}}}class Jl extends Hc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Z_(t){return et(t.integerValue||t.doubleValue)}function BI(t){return bd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qL(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Qo&&s instanceof Qo||r instanceof Yo&&s instanceof Yo?mi(r.elements,s.elements,$n):r instanceof Jl&&s instanceof Jl?$n(r.Ie,s.Ie):r instanceof Xl&&s instanceof Xl}(t.transform,e.transform)}class KL{constructor(e,n){this.version=e,this.transformResults=n}}class ar{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ar}static exists(e){return new ar(void 0,e)}static updateTime(e){return new ar(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ul(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wc{}function $I(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new HI(t.key,ar.none()):new ha(t.key,t.data,ar.none());{const n=t.data,r=on.empty();let s=new st(gt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ds(t.key,r,new gn(s.toArray()),ar.none())}}function GL(t,e,n){t instanceof ha?function(s,i,o){const a=s.value.clone(),c=ty(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ds?function(s,i,o){if(!ul(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=ty(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(jI(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function So(t,e,n,r){return t instanceof ha?function(i,o,a,c){if(!ul(i.precondition,o))return a;const u=i.value.clone(),h=ny(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ds?function(i,o,a,c){if(!ul(i.precondition,o))return a;const u=ny(i.fieldTransforms,c,o),h=o.data;return h.setAll(jI(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return ul(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function zL(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=VI(r.transform,s||null);i!=null&&(n===null&&(n=on.empty()),n.set(r.field,i))}return n||null}function ey(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&mi(r,s,(i,o)=>qL(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ha extends Wc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ds extends Wc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ty(t,e,n){const r=new Map;Me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,WL(o,a,n[s]))}return r}function ny(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,HL(i,o,e))}return r}class HI extends Wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class QL extends Wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&GL(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=$I(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,(n,r)=>ey(n,r))&&mi(this.baseMutations,e.baseMutations,(n,r)=>ey(n,r))}}class kd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Me(e.mutations.length===r.length);let s=function(){return FL}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new kd(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,be;function ZL(t){switch(t){case U.OK:return ue();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return ue()}}function WI(t){if(t===void 0)return ur("GRPC error has no .code"),U.UNKNOWN;switch(t){case tt.OK:return U.OK;case tt.CANCELLED:return U.CANCELLED;case tt.UNKNOWN:return U.UNKNOWN;case tt.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case tt.INTERNAL:return U.INTERNAL;case tt.UNAVAILABLE:return U.UNAVAILABLE;case tt.UNAUTHENTICATED:return U.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case tt.NOT_FOUND:return U.NOT_FOUND;case tt.ALREADY_EXISTS:return U.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return U.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case tt.ABORTED:return U.ABORTED;case tt.OUT_OF_RANGE:return U.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return U.UNIMPLEMENTED;case tt.DATA_LOSS:return U.DATA_LOSS;default:return ue()}}(be=tt||(tt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eV(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tV=new Vr([4294967295,4294967295],0);function ry(t){const e=eV().encode(t),n=new oI;return n.update(e),new Uint8Array(n.digest())}function sy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vr([n,r],0),new Vr([s,i],0)]}class Nd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ao(`Invalid padding: ${n}`);if(r<0)throw new ao(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ao(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ao(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Vr.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(Vr.fromNumber(r)));return s.compare(tV)===1&&(s=new Vr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=ry(e),[r,s]=sy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Nd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=ry(e),[r,s]=sy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ao extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,fa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qc(fe.min(),s,new Xe(we),hr(),Te())}}class fa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fa(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class qI{constructor(e,n){this.targetId=e,this.ge=n}}class KI{constructor(e,n,r=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class iy{constructor(){this.pe=0,this.ye=oy(),this.we=_t.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=Te(),n=Te(),r=Te();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}}),new fa(this.we,this.be,e,n,r)}Me(){this.Se=!1,this.ye=oy()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Me(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class nV{constructor(e){this.ke=e,this.qe=new Map,this.Qe=hr(),this.$e=Qa(),this.Ke=Qa(),this.Ue=new Xe(we)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(Yh(i))if(r===0){const o=new se(i.path);this.ze(n,o,Pt.newNoDocument(o,fe.min()))}else Me(r===1);else{const o=this.et(n);if(o!==r){const a=this.tt(e),c=a?this.nt(a,e,o):1;if(c!==0){this.Ye(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,u)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Hr(r).toUint8Array()}catch(c){if(c instanceof gI)return pi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Nd(o,s,i)}catch(c){return pi(c instanceof ao?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ee===0?null:a}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&Yh(a.target)){const c=new se(a.target.path);this._t(c).has(o)||this.ut(o,c)||this.ze(o,c,Pt.newNoDocument(c,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let r=Te();this.Ke.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new qc(e,n,this.Ue,this.Qe,r);return this.Qe=hr(),this.$e=Qa(),this.Ke=Qa(),this.Ue=new Xe(we),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new iy,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new st(we),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new st(we),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new iy),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Qa(){return new Xe(se.comparator)}function oy(){return new Xe(se.comparator)}const rV={asc:"ASCENDING",desc:"DESCENDING"},sV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iV={and:"AND",or:"OR"};class oV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zh(t,e){return t.useProto3Json||Uc(e)?e:{value:e}}function Zl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function aV(t,e){return Zl(t,e.toTimestamp())}function Fn(t){return Me(!!t),fe.fromTimestamp(function(n){const r=jr(n);return new rt(r.seconds,r.nanos)}(t))}function Dd(t,e){return ef(t,e).canonicalString()}function ef(t,e){const n=function(s){return new Ke(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function zI(t){const e=Ke.fromString(t);return Me(ZI(e)),e}function tf(t,e){return Dd(t.databaseId,e.path)}function Yu(t,e){const n=zI(e);if(n.get(1)!==t.databaseId.projectId)throw new te(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(YI(n))}function QI(t,e){return Dd(t.databaseId,e)}function lV(t){const e=zI(t);return e.length===4?Ke.emptyPath():YI(e)}function nf(t){return new Ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function YI(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ay(t,e,n){return{name:tf(t,e),fields:n.value.mapValue.fields}}function cV(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Me(h===void 0||typeof h=="string"),_t.fromBase64String(h||"")):(Me(h===void 0||h instanceof Buffer||h instanceof Uint8Array),_t.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?U.UNKNOWN:WI(u.code);return new te(h,u.message||"")}(o);n=new KI(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Yu(t,r.document.name),i=Fn(r.document.updateTime),o=r.document.createTime?Fn(r.document.createTime):fe.min(),a=new on({mapValue:{fields:r.document.fields}}),c=Pt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new hl(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Yu(t,r.document),i=r.readTime?Fn(r.readTime):fe.min(),o=Pt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new hl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Yu(t,r.document),i=r.removedTargetIds||[];n=new hl([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new JL(s,i),a=r.targetId;n=new qI(a,o)}}return n}function uV(t,e){let n;if(e instanceof ha)n={update:ay(t,e.key,e.value)};else if(e instanceof HI)n={delete:tf(t,e.key)};else if(e instanceof Ds)n={update:ay(t,e.key,e.data),updateMask:vV(e.fieldMask)};else{if(!(e instanceof QL))return ue();n={verify:tf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Xl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Qo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Yo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Jl)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:aV(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function hV(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Fn(s.updateTime):Fn(i);return o.isEqual(fe.min())&&(o=Fn(i)),new KL(o,s.transformResults||[])}(n,e))):[]}function fV(t,e){return{documents:[QI(t,e.path)]}}function dV(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=QI(t,s);const i=function(u){if(u.length!==0)return JI(bn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:Gs(m.field),direction:gV(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Zh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:n,parent:s}}function pV(t){let e=lV(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Me(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const m=XI(f);return m instanceof bn&&CI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(E){return new Yl(zs(E.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Uc(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(f){const m=!!f.before,g=f.values||[];return new Ql(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,g=f.values||[];return new Ql(g,m)}(n.endAt)),OL(e,s,o,i,a,"F",c,u)}function mV(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function XI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zs(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=zs(n.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zs(n.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=zs(n.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return nt.create(zs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return bn.create(n.compositeFilter.filters.map(r=>XI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function gV(t){return rV[t]}function _V(t){return sV[t]}function yV(t){return iV[t]}function Gs(t){return{fieldPath:t.canonicalString()}}function zs(t){return gt.fromServerFormat(t.fieldPath)}function JI(t){return t instanceof nt?function(n){if(n.op==="=="){if(z_(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NAN"}};if(G_(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(z_(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NAN"}};if(G_(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gs(n.field),op:_V(n.op),value:n.value}}}(t):t instanceof bn?function(n){const r=n.getFilters().map(s=>JI(s));return r.length===1?r[0]:{compositeFilter:{op:yV(n.op),filters:r}}}(t):ue()}function vV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ZI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r,s,i=fe.min(),o=fe.min(),a=_t.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(e){this.Tt=e}}function TV(t){const e=pV({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(){this.Tn=new IV}addToCollectionParentIndex(e,n){return this.Tn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve($r.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve($r.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class IV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new st(Ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(Ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},e0=41943040;class $t{static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t.DEFAULT_COLLECTION_PERCENTILE=10,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$t.DEFAULT=new $t(e0,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$t.DISABLED=new $t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new yi(0)}static Un(){return new yi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="LruGarbageCollector",AV=1048576;function uy([t,e],[n,r]){const s=we(t,n);return s===0?we(e,r):s}class bV{constructor(e){this.Hn=e,this.buffer=new st(uy),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();uy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class CV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ee(cy,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ki(n)?ee(cy,"Ignoring IndexedDB error during garbage collection: ",n):await Pi(n)}await this.er(3e5)})}}class RV{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Fc.ae);const r=new bV(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(ly)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ly):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),qs()<=ye.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function SV(t,e){return new RV(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PV{constructor(){this.changes=new Ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&So(r.mutation,s,gn.empty(),rt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=fs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=oo();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=fs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=hr();const o=Ro(),a=function(){return Ro()}();return n.forEach((c,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Ds)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),So(h.mutation,u,h.mutation.getFieldMask(),rt.now())):o.set(u.key,gn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new kV(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ro();let s=new Xe((o,a)=>o-a),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||gn.empty();h=a.applyToLocalView(u,h),r.set(c,h);const f=(s.get(a.batchId)||Te()).add(c);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=xI();h.forEach(m=>{if(!i.has(m)){const g=$I(n.get(m),r.get(m));g!==null&&f.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(fs());let a=qo,c=i;return o.next(u=>F.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Te())).next(h=>({batchId:a,changes:MI(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=oo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=oo();return this.indexManager.getCollectionParents(e,i).next(a=>F.forEach(a,c=>{const u=function(f,m){return new ua(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Pt.newInvalidDocument(h)))});let a=oo();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&So(h.mutation,u,gn.empty(),rt.now()),jc(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return F.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Fn(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:TV(s.bundledQuery),readTime:Fn(s.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{constructor(){this.overlays=new Xe(se.comparator),this.Rr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fs();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=fs(),i=n.length+1,o=new se(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Xe((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=fs(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=fs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return F.resolve(a)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new XL(n,r));let i=this.Rr.get(n);i===void 0&&(i=Te(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.Vr=new st(at.mr),this.gr=new st(at.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new at(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new at(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new se(new Ke([])),r=new at(n,e),s=new at(n,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new se(new Ke([])),r=new at(n,e),s=new at(n,e+1);let i=Te();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new at(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return se.comparator(e.key,n.key)||we(e.Cr,n.Cr)}static pr(e,n){return we(e.Cr,n.Cr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new st(at.mr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new YL(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Mr=this.Mr.add(new at(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Id:this.Fr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),s=new at(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const a=this.Or(o.Cr);i.push(a)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(we);return n.forEach(s=>{const i=new at(s,0),o=new at(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],a=>{r=r.add(a.Cr)})}),F.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new at(new se(i),0);let a=new st(we);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.Cr)),!0)},o),F.resolve(this.Br(a))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Me(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return F.forEach(n.mutations,s=>{const i=new at(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new at(n,0),s=this.Mr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LV{constructor(e){this.kr=e,this.docs=function(){return new Xe(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Pt.newInvalidDocument(n))}getEntries(e,n){let r=hr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Pt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=hr();const o=n.path,a=new se(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||hL(uL(h),r)<=0||(s.has(h.key)||jc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}qr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new VV(this)}getSize(e){return F.resolve(this.size)}}class VV extends PV{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FV{constructor(e){this.persistence=e,this.Qr=new Ns(n=>Cd(n),Rd),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Od,this.targetCount=0,this.Ur=yi.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),F.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new yi(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.zn(n),F.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Fc(0),this.zr=!1,this.zr=!0,this.jr=new MV,this.referenceDelegate=e(this),this.Hr=new FV(this),this.indexManager=new wV,this.remoteDocumentCache=function(s){return new LV(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new EV(n),this.Yr=new DV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new OV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new xV(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new UV(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return F.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class UV extends dL{constructor(e){super(),this.currentSequenceNumber=e}}class Md{constructor(e){this.persistence=e,this.ti=new Od,this.ni=null}static ri(e){return new Md(e)}get ii(){if(this.ni)return this.ni;throw ue()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),F.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ii,r=>{const s=se.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,fe.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return F.or([()=>F.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class ec{constructor(e,n){this.persistence=e,this.oi=new Ns(r=>gL(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=SV(this,n)}static ri(e,n){return new ec(e,n)}Zr(){}Xr(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return F.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(a=>{a||(r++,i.removeEntry(o,fe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),F.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ll(e.data.value)),n}ar(e,n,r){return F.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new xd(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $V{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Pk()?8:pL(Dt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new BV;return this._s(e,n,o).next(a=>{if(i.result=a,this.Xi)return this.us(e,n,o,a.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(qs()<=ye.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),F.resolve()):(qs()<=ye.DEBUG&&ee("QueryEngine","Query:",Ks(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(qs()<=ye.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(n))):F.resolve())}rs(e,n){if(J_(n))return F.resolve(null);let r=Vn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Jh(n,null,"F"),r=Vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.ns.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.cs(n,a);return this.ls(n,u,o,c.readTime)?this.rs(e,Jh(n,null,"F")):this.hs(e,u,n,c)}))})))}ss(e,n,r,s){return J_(n)||s.isEqual(fe.min())?F.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(n,i);return this.ls(n,o,r,s)?F.resolve(null):(qs()<=ye.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ks(n)),this.hs(e,o,n,cL(s,qo)).next(a=>a))})}cs(e,n){let r=new st(DI(e));return n.forEach((s,i)=>{jc(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return qs()<=ye.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Ks(n)),this.ns.getDocumentsMatchingQuery(e,n,$r.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="LocalStore",jV=3e8;class HV{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new Xe(we),this.Is=new Ns(i=>Cd(i),Rd),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NV(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function WV(t,e,n,r){return new HV(t,e,n,r)}async function n0(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Te();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function qV(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,m=f.keys();let g=F.resolve();return m.forEach(E=>{g=g.next(()=>h.getEntry(c,E)).next(R=>{const P=u.docVersions.get(E);Me(P!==null),R.version.compareTo(P)<0&&(f.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),h.addEntry(R)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function r0(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function KV(t,e){const n=me(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const a=[];e.targetChanges.forEach((h,f)=>{const m=s.get(f);if(!m)return;a.push(n.Hr.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.Hr.addMatchingKeys(i,h.addedDocuments,f)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(_t.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(f,g),function(R,P,O){return R.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=jV?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(m,g,h)&&a.push(n.Hr.updateTargetData(i,g))});let c=hr(),u=Te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(GV(i,o,e.documentUpdates).next(h=>{c=h.Vs,u=h.fs})),!r.isEqual(fe.min())){const h=n.Hr.getLastRemoteSnapshotVersion(i).next(f=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ts=s,i))}function GV(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=hr();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ee(Ld,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Vs:o,fs:s}})}function zV(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Id),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QV(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.Hr.allocateTargetId(r).next(o=>(s=new Dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function rf(t,e,n){const r=me(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ki(o))throw o;ee(Ld,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function hy(t,e,n){const r=me(t);let s=fe.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=me(c),m=f.Is.get(h);return m!==void 0?F.resolve(f.Ts.get(m)):f.Hr.getTargetData(u,h)}(r,o,Vn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?i:Te())).next(a=>(YV(r,xL(e),a),{documents:a,gs:i})))}function YV(t,e,n){let r=t.Es.get(e)||fe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class fy{constructor(){this.activeTargetIds=$L()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XV{constructor(){this.ho=new fy,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new fy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JV{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="ConnectivityMonitor";class py{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ee(dy,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ee(dy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya=null;function sf(){return Ya===null?Ya=function(){return 268435456+Math.round(2147483648*Math.random())}():Ya++,"0x"+Ya.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="RestConnection",ZV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class eF{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Gl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}bo(e,n,r,s,i){const o=sf(),a=this.So(e,n.toUriEncodedString());ee(Xu,`Sending RPC '${e}' ${o}:`,a,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,a,c,r).then(u=>(ee(Xu,`Received RPC '${e}' ${o}: `,u),u),u=>{throw pi(Xu,`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Co(e,n,r,s,i,o){return this.bo(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Si}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}So(e,n){const r=ZV[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="WebChannelConnection";class nF extends eF{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=sf();return new Promise((o,a)=>{const c=new aI;c.setWithCredentials(!0),c.listenOnce(lI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case al.NO_ERROR:const h=c.getResponseJson();ee(It,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case al.TIMEOUT:ee(It,`RPC '${e}' ${i} timed out`),a(new te(U.DEADLINE_EXCEEDED,"Request time out"));break;case al.HTTP_ERROR:const f=c.getStatus();if(ee(It,`RPC '${e}' ${i} failed with status:`,f,"response text:",c.getResponseText()),f>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const E=function(P){const O=P.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(O)>=0?O:U.UNKNOWN}(g.status);a(new te(E,g.message))}else a(new te(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new te(U.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{ee(It,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ee(It,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Wo(e,n,r){const s=sf(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=hI(),a=uI(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=i.join("");ee(It,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=o.createWebChannel(h,c);let m=!1,g=!1;const E=new tF({Fo:P=>{g?ee(It,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(ee(It,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),ee(It,`RPC '${e}' stream ${s} sending:`,P),f.send(P))},Mo:()=>f.close()}),R=(P,O,x)=>{P.listen(O,$=>{try{x($)}catch(j){setTimeout(()=>{throw j},0)}})};return R(f,io.EventType.OPEN,()=>{g||(ee(It,`RPC '${e}' stream ${s} transport opened.`),E.Qo())}),R(f,io.EventType.CLOSE,()=>{g||(g=!0,ee(It,`RPC '${e}' stream ${s} transport closed`),E.Ko())}),R(f,io.EventType.ERROR,P=>{g||(g=!0,pi(It,`RPC '${e}' stream ${s} transport errored:`,P),E.Ko(new te(U.UNAVAILABLE,"The operation could not be completed")))}),R(f,io.EventType.MESSAGE,P=>{var O;if(!g){const x=P.data[0];Me(!!x);const $=x,j=($==null?void 0:$.error)||((O=$[0])===null||O===void 0?void 0:O.error);if(j){ee(It,`RPC '${e}' stream ${s} received error:`,j);const Z=j.status;let q=function(y){const w=tt[y];if(w!==void 0)return WI(w)}(Z),b=j.message;q===void 0&&(q=U.INTERNAL,b="Unknown error status: "+Z+" with message "+j.message),g=!0,E.Ko(new te(q,b)),f.close()}else ee(It,`RPC '${e}' stream ${s} received:`,x),E.Uo(x)}}),R(a,cI.STAT_EVENT,P=>{P.stat===Kh.PROXY?ee(It,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Kh.NOPROXY&&ee(It,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.$o()},0),E}}function Ju(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(t){return new oV(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="PersistentStream";class i0{constructor(e,n,r,s,i,o,a,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new s0(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(ur(n.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new te(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ee(my,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(ee(my,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rF extends i0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=cV(this.serializer,e),r=function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?Fn(o.readTime):fe.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=nf(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Yh(c)?{documents:fV(i,c)}:{query:dV(i,c).ht},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=GI(i,o.resumeToken);const u=Zh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){a.readTime=Zl(i,o.snapshotVersion.toTimestamp());const u=Zh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=mV(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=nf(this.serializer),n.removeTarget=e,this.I_(n)}}class sF extends i0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=hV(e.writeResults,e.commitTime),r=Fn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=nf(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>uV(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{}class oF extends iF{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new te(U.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.bo(e,ef(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(U.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,ef(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(U.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class aF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(ur(n),this.N_=!1):ee("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="RemoteStore";class lF{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{Os(this)&&(ee(bs,"Restarting streams for network reachability change."),await async function(c){const u=me(c);u.W_.add(4),await da(u),u.j_.set("Unknown"),u.W_.delete(4),await Gc(u)}(this))})}),this.j_=new aF(r,s)}}async function Gc(t){if(Os(t))for(const e of t.G_)await e(!0)}async function da(t){for(const e of t.G_)await e(!1)}function o0(t,e){const n=me(t);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),Bd(n)?Ud(n):Ni(n).c_()&&Fd(n,e))}function Vd(t,e){const n=me(t),r=Ni(n);n.U_.delete(e),r.c_()&&a0(n,e),n.U_.size===0&&(r.c_()?r.P_():Os(n)&&n.j_.set("Unknown"))}function Fd(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ni(t).y_(e)}function a0(t,e){t.H_.Ne(e),Ni(t).w_(e)}function Ud(t){t.H_=new nV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.U_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Ni(t).start(),t.j_.B_()}function Bd(t){return Os(t)&&!Ni(t).u_()&&t.U_.size>0}function Os(t){return me(t).W_.size===0}function l0(t){t.H_=void 0}async function cF(t){t.j_.set("Online")}async function uF(t){t.U_.forEach((e,n)=>{Fd(t,e)})}async function hF(t,e){l0(t),Bd(t)?(t.j_.q_(e),Ud(t)):t.j_.set("Unknown")}async function fF(t,e,n){if(t.j_.set("Online"),e instanceof KI&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.U_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.U_.delete(a),s.H_.removeTarget(a))}(t,e)}catch(r){ee(bs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await tc(t,r)}else if(e instanceof hl?t.H_.We(e):e instanceof qI?t.H_.Ze(e):t.H_.je(e),!n.isEqual(fe.min()))try{const r=await r0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.H_.ot(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.U_.get(u);h&&i.U_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=i.U_.get(c);if(!h)return;i.U_.set(c,h.withResumeToken(_t.EMPTY_BYTE_STRING,h.snapshotVersion)),a0(i,c);const f=new Dr(h.target,c,u,h.sequenceNumber);Fd(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ee(bs,"Failed to raise snapshot:",r),await tc(t,r)}}async function tc(t,e,n){if(!ki(e))throw e;t.W_.add(1),await da(t),t.j_.set("Offline"),n||(n=()=>r0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(bs,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Gc(t)})}function c0(t,e){return e().catch(n=>tc(t,n,e))}async function zc(t){const e=me(t),n=qr(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:Id;for(;dF(e);)try{const s=await zV(e.localStore,r);if(s===null){e.K_.length===0&&n.P_();break}r=s.batchId,pF(e,s)}catch(s){await tc(e,s)}u0(e)&&h0(e)}function dF(t){return Os(t)&&t.K_.length<10}function pF(t,e){t.K_.push(e);const n=qr(t);n.c_()&&n.b_&&n.S_(e.mutations)}function u0(t){return Os(t)&&!qr(t).u_()&&t.K_.length>0}function h0(t){qr(t).start()}async function mF(t){qr(t).C_()}async function gF(t){const e=qr(t);for(const n of t.K_)e.S_(n.mutations)}async function _F(t,e,n){const r=t.K_.shift(),s=kd.from(r,e,n);await c0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await zc(t)}async function yF(t,e){e&&qr(t).b_&&await async function(r,s){if(function(o){return ZL(o)&&o!==U.ABORTED}(s.code)){const i=r.K_.shift();qr(r).h_(),await c0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await zc(r)}}(t,e),u0(t)&&h0(t)}async function gy(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),ee(bs,"RemoteStore received new credentials");const r=Os(n);n.W_.add(3),await da(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Gc(n)}async function vF(t,e){const n=me(t);e?(n.W_.delete(2),await Gc(n)):e||(n.W_.add(2),await da(n),n.j_.set("Unknown"))}function Ni(t){return t.J_||(t.J_=function(n,r,s){const i=me(n);return i.M_(),new rF(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:cF.bind(null,t),No:uF.bind(null,t),Lo:hF.bind(null,t),p_:fF.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),Bd(t)?Ud(t):t.j_.set("Unknown")):(await t.J_.stop(),l0(t))})),t.J_}function qr(t){return t.Y_||(t.Y_=function(n,r,s){const i=me(n);return i.M_(),new sF(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:mF.bind(null,t),Lo:yF.bind(null,t),D_:gF.bind(null,t),v_:_F.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await zc(t)):(await t.Y_.stop(),t.K_.length>0&&(ee(bs,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new $d(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jd(t,e){if(ur("AsyncQueue",`${e}: ${t}`),ki(t))return new te(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{static emptySet(e){return new ii(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=oo(),this.sortedSet=new Xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(){this.Z_=new Xe(se.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):ue():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class vi{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new vi(e,n,ii.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EF{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class TF{constructor(){this.queries=yy(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=yy(),i.forEach((o,a)=>{for(const c of a.ta)c.onError(r)})})(this,new te(U.ABORTED,"Firestore shutting down"))}}function yy(){return new Ns(t=>NI(t),$c)}async function f0(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new EF,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=jd(o,`Initialization of query '${Ks(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&Hd(n)}async function d0(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function wF(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.ta)a.oa(s)&&(r=!0);o.ea=s}}r&&Hd(n)}function IF(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function Hd(t){t.ia.forEach(e=>{e.next()})}var of,vy;(vy=of||(of={}))._a="default",vy.Cache="cache";class p0{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==of.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e){this.key=e}}class g0{constructor(e){this.key=e}}class AF{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Te(),this.mutatedKeys=Te(),this.ya=DI(e),this.wa=new ii(this.ya)}get ba(){return this.fa}Sa(e,n){const r=n?n.Da:new _y,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const m=s.get(h),g=jc(this.query,f)?f:null,E=!!m&&this.mutatedKeys.has(m.key),R=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;m&&g?m.data.isEqual(g.data)?E!==R&&(r.track({type:3,doc:g}),P=!0):this.va(m,g)||(r.track({type:2,doc:g}),P=!0,(c&&this.ya(g,c)>0||u&&this.ya(g,u)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),P=!0):m&&!g&&(r.track({type:1,doc:m}),P=!0,(c||u)&&(a=!0)),P&&(g?(o=o.add(g),i=R?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{wa:o,Da:r,ls:a,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((h,f)=>function(g,E){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return R(g)-R(E)}(h.type,f.type)||this.ya(h.doc,f.doc)),this.Ca(r),s=s!=null&&s;const a=n&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,u=c!==this.ga;return this.ga=c,o.length!==0||u?{snapshot:new vi(this.query,e.wa,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:a}:{Ma:a}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new _y,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Te(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new g0(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new m0(r))}),n}Oa(e){this.fa=e.gs,this.pa=Te();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return vi.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Wd="SyncEngine";class bF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CF{constructor(e){this.key=e,this.Ba=!1}}class RF{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Ns(a=>NI(a),$c),this.qa=new Map,this.Qa=new Set,this.$a=new Xe(se.comparator),this.Ka=new Map,this.Ua=new Od,this.Wa={},this.Ga=new Map,this.za=yi.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function SF(t,e,n=!0){const r=w0(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await _0(r,e,n,!0),s}async function PF(t,e){const n=w0(t);await _0(n,e,!0,!1)}async function _0(t,e,n,r){const s=await QV(t.localStore,Vn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await kF(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&o0(t.remoteStore,s),a}async function kF(t,e,n,r,s){t.Ha=(f,m,g)=>async function(R,P,O,x){let $=P.view.Sa(O);$.ls&&($=await hy(R.localStore,P.query,!1).then(({documents:b})=>P.view.Sa(b,$)));const j=x&&x.targetChanges.get(P.targetId),Z=x&&x.targetMismatches.get(P.targetId)!=null,q=P.view.applyChanges($,R.isPrimaryClient,j,Z);return Ty(R,P.targetId,q.Ma),q.snapshot}(t,f,m,g);const i=await hy(t.localStore,e,!0),o=new AF(e,i.gs),a=o.Sa(i.documents),c=fa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);Ty(t,n,u.Ma);const h=new bF(e,n,o);return t.ka.set(e,h),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}async function NF(t,e,n){const r=me(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!$c(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await rf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Vd(r.remoteStore,s.targetId),af(r,s.targetId)}).catch(Pi)):(af(r,s.targetId),await rf(r.localStore,s.targetId,!0))}async function DF(t,e){const n=me(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Vd(n.remoteStore,r.targetId))}async function OF(t,e,n){const r=BF(t);try{const s=await function(o,a){const c=me(o),u=rt.now(),h=a.reduce((g,E)=>g.add(E.key),Te());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let E=hr(),R=Te();return c.ds.getEntries(g,h).next(P=>{E=P,E.forEach((O,x)=>{x.isValidDocument()||(R=R.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,E)).next(P=>{f=P;const O=[];for(const x of a){const $=zL(x,f.get(x.key).overlayedDocument);$!=null&&O.push(new Ds(x.key,$,II($.value.mapValue),ar.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,O,a)}).next(P=>{m=P;const O=P.applyToLocalDocumentSet(f,R);return c.documentOverlayCache.saveOverlays(g,P.batchId,O)})}).then(()=>({batchId:m.batchId,changes:MI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Wa[o.currentUser.toKey()];u||(u=new Xe(we)),u=u.insert(a,c),o.Wa[o.currentUser.toKey()]=u}(r,s.batchId,n),await pa(r,s.changes),await zc(r.remoteStore)}catch(s){const i=jd(s,"Failed to persist write");n.reject(i)}}async function y0(t,e){const n=me(t);try{const r=await KV(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ka.get(i);o&&(Me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?Me(o.Ba):s.removedDocuments.size>0&&(Me(o.Ba),o.Ba=!1))}),await pa(n,r,e)}catch(r){await Pi(r)}}function Ey(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,o)=>{const a=o.view.sa(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=me(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const m of f.ta)m.sa(a)&&(u=!0)}),u&&Hd(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MF(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ka.get(e),i=s&&s.key;if(i){let o=new Xe(se.comparator);o=o.insert(i,Pt.newNoDocument(i,fe.min()));const a=Te().add(i),c=new qc(fe.min(),new Map,new Xe(we),o,a);await y0(r,c),r.$a=r.$a.remove(i),r.Ka.delete(e),qd(r)}else await rf(r.localStore,e,!1).then(()=>af(r,e,n)).catch(Pi)}async function xF(t,e){const n=me(t),r=e.batch.batchId;try{const s=await qV(n.localStore,e);E0(n,r,null),v0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pa(n,s)}catch(s){await Pi(s)}}async function LF(t,e,n){const r=me(t);try{const s=await function(o,a){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(Me(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);E0(r,e,n),v0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pa(r,s)}catch(s){await Pi(s)}}function v0(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function E0(t,e,n){const r=me(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function af(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ua.Sr(e).forEach(r=>{t.Ua.containsKey(r)||T0(t,r)})}function T0(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(Vd(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ka.delete(n),qd(t))}function Ty(t,e,n){for(const r of n)r instanceof m0?(t.Ua.addReference(r.key,e),VF(t,r)):r instanceof g0?(ee(Wd,"Document no longer in limbo: "+r.key),t.Ua.removeReference(r.key,e),t.Ua.containsKey(r.key)||T0(t,r.key)):ue()}function VF(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(ee(Wd,"New document in limbo: "+n),t.Qa.add(r),qd(t))}function qd(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new se(Ke.fromString(e)),r=t.za.next();t.Ka.set(r,new CF(n)),t.$a=t.$a.insert(n,r),o0(t.remoteStore,new Dr(Vn(Sd(n.path)),r,"TargetPurposeLimboResolution",Fc.ae))}}async function pa(t,e,n){const r=me(t),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((a,c)=>{o.push(r.Ha(c,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=xd.Yi(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.La.p_(s),await async function(c,u){const h=me(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(u,m=>F.forEach(m.Hi,g=>h.persistence.referenceDelegate.addReference(f,m.targetId,g)).next(()=>F.forEach(m.Ji,g=>h.persistence.referenceDelegate.removeReference(f,m.targetId,g)))))}catch(f){if(!ki(f))throw f;ee(Ld,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const g=h.Ts.get(m),E=g.snapshotVersion,R=g.withLastLimboFreeSnapshotVersion(E);h.Ts=h.Ts.insert(m,R)}}}(r.localStore,i))}async function FF(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){ee(Wd,"User change. New user:",e.toKey());const r=await n0(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(a=>{a.forEach(c=>{c.reject(new te(U.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pa(n,r.Rs)}}function UF(t,e){const n=me(t),r=n.Ka.get(e);if(r&&r.Ba)return Te().add(r.key);{let s=Te();const i=n.qa.get(e);if(!i)return s;for(const o of i){const a=n.ka.get(o);s=s.unionWith(a.view.ba)}return s}}function w0(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=y0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MF.bind(null,e),e.La.p_=wF.bind(null,e.eventManager),e.La.Ja=IF.bind(null,e.eventManager),e}function BF(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LF.bind(null,e),e}class nc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Kc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return WV(this.persistence,new $V,e.initialUser,this.serializer)}Xa(e){return new t0(Md.ri,this.serializer)}Za(e){return new XV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nc.provider={build:()=>new nc};class $F extends nc{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Me(this.persistence.referenceDelegate instanceof ec);const r=this.persistence.referenceDelegate.garbageCollector;return new CV(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new t0(r=>ec.ri(r,n),this.serializer)}}class lf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ey(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FF.bind(null,this.syncEngine),await vF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new TF}()}createDatastore(e){const n=Kc(e.databaseInfo.databaseId),r=function(i){return new nF(i)}(e.databaseInfo);return function(i,o,a,c){return new oF(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new lF(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ey(this.syncEngine,n,0),function(){return py.D()?new py:new JV}())}createSyncEngine(e,n){return function(s,i,o,a,c,u,h){const f=new RF(s,i,o,a,c,u);return h&&(f.ja=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=me(s);ee(bs,"RemoteStore shutting down."),i.W_.add(5),await da(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}lf.provider={build:()=>new lf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):ur("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="FirestoreClient";class jF{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=At.UNAUTHENTICATED,this.clientId=dI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee(Kr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee(Kr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zu(t,e){t.asyncQueue.verifyOperationInProgress(),ee(Kr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await n0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function wy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HF(t);ee(Kr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>gy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>gy(e.remoteStore,s)),t._onlineComponents=e}async function HF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(Kr,"Using user provided OfflineComponentProvider");try{await Zu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;pi("Error using user provided cache. Falling back to memory cache: "+n),await Zu(t,new nc)}}else ee(Kr,"Using default OfflineComponentProvider"),await Zu(t,new $F(void 0));return t._offlineComponents}async function A0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(Kr,"Using user provided OnlineComponentProvider"),await wy(t,t._uninitializedComponentsProvider._online)):(ee(Kr,"Using default OnlineComponentProvider"),await wy(t,new lf))),t._onlineComponents}function WF(t){return A0(t).then(e=>e.syncEngine)}async function b0(t){const e=await A0(t),n=e.eventManager;return n.onListen=SF.bind(null,e.syncEngine),n.onUnlisten=NF.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=PF.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=DF.bind(null,e.syncEngine),n}function qF(t,e,n={}){const r=new or;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new I0({next:m=>{h.su(),o.enqueueAndForget(()=>d0(i,f));const g=m.docs.has(a);!g&&m.fromCache?u.reject(new te(U.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new te(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new p0(Sd(a.path),h,{includeMetadataChanges:!0,Ta:!0});return f0(i,f)}(await b0(t),t.asyncQueue,e,n,r)),r.promise}function KF(t,e,n={}){const r=new or;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new I0({next:m=>{h.su(),o.enqueueAndForget(()=>d0(i,f)),m.fromCache&&c.source==="server"?u.reject(new te(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new p0(a,h,{includeMetadataChanges:!0,Ta:!0});return f0(i,f)}(await b0(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t,e,n){if(!n)throw new te(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function GF(t,e,n,r){if(e===!0&&r===!0)throw new te(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ay(t){if(!se.isDocumentKey(t))throw new te(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function by(t){if(se.isDocumentKey(t))throw new te(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function Cs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qc(t);throw new te(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="firestore.googleapis.com",Cy=!0;class Ry{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=S0,this.ssl=Cy}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Cy;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=e0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<AV)throw new te(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=C0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ry({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ry(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tL;switch(r.type){case"firstParty":return new iL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Iy.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Iy.delete(n),r.terminate())}(this),Promise.resolve()}}function zF(t,e,n,r={}){var s;const i=(t=Cs(t,Yc))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),a=`${e}:${n}`;i.host!==S0&&i.host!==a&&pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:a,ssl:!1,emulatorOptions:r});if(!Bo(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=At.MOCK_USER;else{u=Ik(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new te(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new At(f)}t._authCredentials=new nL(new fI(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Di(this.firestore,e,this._query)}}class qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}}class Fr extends Di{constructor(e,n,r){super(e,n,Sd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new se(e))}withConverter(e){return new Fr(this.firestore,e,this._path)}}function QF(t,e,...n){if(t=en(t),R0("collection","path",e),t instanceof Yc){const r=Ke.fromString(e,...n);return by(r),new Fr(t,null,r)}{if(!(t instanceof qt||t instanceof Fr))throw new te(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ke.fromString(e,...n));return by(r),new Fr(t.firestore,null,r)}}function Kd(t,e,...n){if(t=en(t),arguments.length===1&&(e=dI.newId()),R0("doc","path",e),t instanceof Yc){const r=Ke.fromString(e,...n);return Ay(r),new qt(t,null,new se(r))}{if(!(t instanceof qt||t instanceof Fr))throw new te(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ke.fromString(e,...n));return Ay(r),new qt(t.firestore,t instanceof Fr?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="AsyncQueue";class Py{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new s0(this,"async_queue_retry"),this.bu=()=>{const r=Ju();r&&ee(Sy,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=Ju();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Ju();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new or;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ki(e))throw e;ee(Sy,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ur("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=$d.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&ue()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Xc extends Yc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Py,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Py(e),this._firestoreClient=void 0,await e}}}function YF(t,e){const n=typeof t=="object"?t:uT(),r=typeof t=="string"?t:Gl,s=lT(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Tk("firestore");i&&zF(s,...i)}return s}function Gd(t){if(t._terminated)throw new te(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||XF(t),t._firestoreClient}function XF(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,u,h){return new vL(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,C0(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new jF(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ei(_t.fromBase64String(e))}catch(n){throw new te(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ei(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JF=/^__.*__$/;class ZF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ds(e,this.data,this.fieldMask,n,this.fieldTransforms):new ha(e,this.data,n,this.fieldTransforms)}}function k0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class Xd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Xd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return rc(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(k0(this.Lu)&&JF.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class e2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Kc(e)}ju(e,n,r,s=!1){return new Xd({Lu:e,methodName:n,zu:r,path:gt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function N0(t){const e=t._freezeSettings(),n=Kc(t._databaseId);return new e2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function t2(t,e,n,r,s,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,s);M0("Data must be an object, but it was:",o,r);const a=D0(r,o);let c,u;if(i.merge)c=new gn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const m=r2(e,f,n);if(!o.contains(m))throw new te(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);i2(h,m)||h.push(m)}c=new gn(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new ZF(new on(a),c,u)}function n2(t,e,n,r=!1){return Jd(n,t.ju(r?4:3,e))}function Jd(t,e){if(O0(t=en(t)))return M0("Unsupported field value:",e,t),D0(t,e);if(t instanceof P0)return function(r,s){if(!k0(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Jd(a,s.Uu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=en(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jL(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=rt.fromDate(r);return{timestampValue:Zl(s.serializer,i)}}if(r instanceof rt){const i=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zl(s.serializer,i)}}if(r instanceof Qd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ei)return{bytesValue:GI(s.serializer,r._byteString)};if(r instanceof qt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Dd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Yd)return function(o,a){return{mapValue:{fields:{[TI]:{stringValue:wI},[zl]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Wu("VectorValues must only contain numeric values.");return Pd(a.serializer,u)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Qc(r)}`)}(t,e)}function D0(t,e){const n={};return mI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ks(t,(r,s)=>{const i=Jd(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function O0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof Qd||t instanceof Ei||t instanceof qt||t instanceof P0||t instanceof Yd)}function M0(t,e,n){if(!O0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Qc(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function r2(t,e,n){if((e=en(e))instanceof zd)return e._internalPath;if(typeof e=="string")return x0(t,e);throw rc("Field path arguments must be of type string or ",t,!1,void 0,n)}const s2=new RegExp("[~\\*/\\[\\]]");function x0(t,e,n){if(e.search(s2)>=0)throw rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zd(...e.split("."))._internalPath}catch{throw rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new te(U.INVALID_ARGUMENT,a+t+c)}function i2(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new o2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class o2 extends L0{data(){return super.data()}}function Zd(t,e){return typeof e=="string"?x0(t,e):e instanceof zd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ep{}class l2 extends ep{}function c2(t,e,...n){let r=[];e instanceof ep&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof tp).length,a=i.filter(c=>c instanceof Jc).length;if(o>1||o>0&&a>0)throw new te(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Jc extends l2{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Jc(e,n,r)}_apply(e){const n=this._parse(e);return V0(e._query,n),new Di(e.firestore,e.converter,Xh(e._query,n))}_parse(e){const n=N0(e.firestore);return function(i,o,a,c,u,h,f){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new te(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Ny(f,h);const E=[];for(const R of f)E.push(ky(c,i,R));m={arrayValue:{values:E}}}else m=ky(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Ny(f,h),m=n2(a,o,f,h==="in"||h==="not-in");return nt.create(u,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function u2(t,e,n){const r=e,s=Zd("where",t);return Jc._create(s,r,n)}class tp extends ep{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new tp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:bn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)V0(o,c),o=Xh(o,c)}(e._query,n),new Di(e.firestore,e.converter,Xh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ky(t,e,n){if(typeof(n=en(n))=="string"){if(n==="")throw new te(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kI(e)&&n.indexOf("/")!==-1)throw new te(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ke.fromString(n));if(!se.isDocumentKey(r))throw new te(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return K_(t,new se(r))}if(n instanceof qt)return K_(t,n._key);throw new te(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qc(n)}.`)}function Ny(t,e){if(!Array.isArray(t)||t.length===0)throw new te(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function V0(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class h2{convertValue(e,n="none"){switch(Wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ks(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[zl].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>et(o.doubleValue));return new Yd(i)}convertGeoPoint(e){return new Qd(et(e.latitude),et(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ko(e));default:return null}}convertTimestamp(e){const n=jr(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ke.fromString(e);Me(ZI(r));const s=new Go(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||ur(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f2(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class F0 extends L0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Zd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class fl extends F0{data(e={}){return super.data(e)}}class d2{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new lo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fl(this._firestore,this._userDataWriter,r.key,r,new lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new fl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new lo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new fl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new lo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:p2(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function p2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(t){t=Cs(t,qt);const e=Cs(t.firestore,Xc);return qF(Gd(e),t._key).then(n=>_2(e,t,n))}class B0 extends h2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ei(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function m2(t){t=Cs(t,Di);const e=Cs(t.firestore,Xc),n=Gd(e),r=new B0(e);return a2(t._query),KF(n,t._query).then(s=>new d2(e,r,t,s))}function $0(t,e,n){t=Cs(t,qt);const r=Cs(t.firestore,Xc),s=f2(t.converter,e);return g2(r,[t2(N0(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ar.none())])}function g2(t,e){return function(r,s){const i=new or;return r.asyncQueue.enqueueAndForget(async()=>OF(await WF(r),s,i)),i.promise}(Gd(t),e)}function _2(t,e,n){const r=n.docs.get(e._key),s=new B0(t);return new F0(t,s,e._key,r,new lo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Si=s})(Xr),Un(new In("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Xc(new rL(r.getProvider("auth-internal")),new oL(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new te(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Go(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Jt(x_,L_,e),Jt(x_,L_,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="firebasestorage.googleapis.com",y2="storageBucket",v2=2*60*1e3,E2=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Hn{constructor(e,n,r=0){super(eh(e),`Firebase Storage: ${n} (${eh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Wn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return eh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var jn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(jn||(jn={}));function eh(t){return"storage/"+t}function T2(){const t="An unknown error occurred, please check the error payload for server response.";return new Wn(jn.UNKNOWN,t)}function w2(){return new Wn(jn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function I2(){return new Wn(jn.CANCELED,"User canceled the upload/download.")}function A2(t){return new Wn(jn.INVALID_URL,"Invalid URL '"+t+"'.")}function b2(t){return new Wn(jn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Dy(t){return new Wn(jn.INVALID_ARGUMENT,t)}function H0(){return new Wn(jn.APP_DELETED,"The Firebase app was deleted.")}function C2(t){return new Wn(jn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=_n.makeFromUrl(e,n)}catch{return new _n(e,"")}if(r.path==="")return r;throw b2(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(j){j.path_=decodeURIComponent(j.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${s}/o${m}`,"i"),E={bucket:1,path:3},R=n===j0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",O=new RegExp(`^https?://${R}/${s}/${P}`,"i"),$=[{regex:a,indices:c,postModify:i},{regex:g,indices:E,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let j=0;j<$.length;j++){const Z=$[j],q=Z.regex.exec(e);if(q){const b=q[Z.indices.bucket];let v=q[Z.indices.path];v||(v=""),r=new _n(b,v),Z.postModify(r);break}}if(r==null)throw A2(e);return r}}class R2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...P){u||(u=!0,e.apply(null,P))}function f(P){s=setTimeout(()=>{s=null,t(g,c())},P)}function m(){i&&clearTimeout(i)}function g(P,...O){if(u){m();return}if(P){m(),h.call(null,P,...O);return}if(c()||o){m(),h.call(null,P,...O);return}r<64&&(r*=2);let $;a===1?(a=2,$=0):$=(r+Math.random())*1e3,f($)}let E=!1;function R(P){E||(E=!0,m(),!u&&(s!==null?(P||(a=2),clearTimeout(s),f(0)):P||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,R(!0)},n),R}function P2(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(t){return t!==void 0}function Oy(t,e,n,r){if(r<e)throw Dy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Dy(`Invalid value for '${t}'. Expected ${n} or less.`)}function N2(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var sc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(sc||(sc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,n,r,s,i,o,a,c,u,h,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,E)=>{this.resolve_=g,this.reject_=E,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Xa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===sc.NO_ERROR,c=i.getStatus();if(!a||D2(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===sc.ABORT;r(!1,new Xa(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Xa(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());k2(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=T2();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?H0():I2();o(c)}else{const c=w2();o(c)}};this.canceled_?n(!1,new Xa(!1,null,!0)):this.backoffId_=S2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&P2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Xa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function M2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function x2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function L2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function V2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function F2(t,e,n,r,s,i,o=!0){const a=N2(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return L2(u,e),M2(u,n),x2(u,i),V2(u,r),new O2(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function B2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n){this._service=e,n instanceof _n?this._location=n:this._location=_n.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ic(e,n)}get root(){const e=new _n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return B2(this._location.path)}get storage(){return this._service}get parent(){const e=U2(this._location.path);if(e===null)return null;const n=new _n(this._location.bucket,e);return new ic(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw C2(e)}}function My(t,e){const n=e==null?void 0:e[y2];return n==null?null:_n.makeFromBucketSpec(n,t)}class $2{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=j0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=v2,this._maxUploadRetryTime=E2,this._requests=new Set,s!=null?this._bucket=_n.makeFromBucketSpec(s,this._host):this._bucket=My(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_n.makeFromBucketSpec(this._url,e):this._bucket=My(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Oy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Oy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ic(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new R2(H0());{const o=F2(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const xy="@firebase/storage",Ly="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2="storage";function H2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new $2(n,r,s,e,Xr)}function W2(){Un(new In(j2,H2,"PUBLIC").setMultipleInstances(!0)),Jt(xy,Ly,""),Jt(xy,Ly,"esm2017")}W2();function q2(t){return K2({initialUser:t,dependencies:{popupRedirectResolver:MO,persistence:[KD,MD,xT]}})}const W0=Symbol("VueFireAuth");function K2({dependencies:t,initialUser:e}){return(n,r)=>{const[s,i]=G2(n,r,e,t);m1(s,i)}}function G2(t,e,n,r,s=bD(t,r)){const i=d1(t,e).run(()=>Kt(n));return GT.set(t,i),e.provide(W0,s),[i,s]}function XU(t){return f1?Ze(W0):null}function z2(t,{firebaseApp:e,modules:n=[]}){t.provide(qT,e);for(const r of n)r(e,t)}const Zc=ok({history:OP("/ejc-hub/"),routes:ck(uk)});Zc.onError((t,e)=>{var n,r;(r=(n=t==null?void 0:t.message)==null?void 0:n.includes)!=null&&r.call(n,"Failed to fetch dynamically imported module")?localStorage.getItem("vuetify:dynamic-reload")?console.error("Dynamic import error, reloading page did not fix it",t):(console.log("Reloading page to fix dynamic import error"),localStorage.setItem("vuetify:dynamic-reload","true"),location.assign(e.fullPath)):console.error(t)});Zc.isReady().then(()=>{localStorage.removeItem("vuetify:dynamic-reload")});Zc.beforeEach(async t=>{if(t.meta.requiresAuth&&!await p1())return{path:"/"}});const q0={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0};console.log(q0);const K0=cT(q0),eu=YF(K0);function Q2(t){t.use(z2,{firebaseApp:K0,modules:[q2()]})}const Y2="pokemon-tcgp-cards",G0="pokemon-tcgp-lists",X2="pokemon-tcgp-players";function np(t){return Kd(eu,X2,t)}function cf(t){return Kd(eu,Y2,t)}function z0(t){return Kd(eu,G0,t)}const Q0={toFirestore:t=>({list:t}),fromFirestore:(t,e)=>{const n=t.data(e);return n.player=n.player.id,n.haves=n.haves.map(r=>r.id),n.wants=n.wants.map(r=>r.id),n}};async function JU(t){const e=t.haves.map(cf),n=t.wants.map(cf);await $0(z0(t.player),{...t,player:np(t.player),wants:n,haves:e})}async function ZU(t){const e=z0(t).withConverter(Q0),n=await U0(e);return n.exists()?n.data():null}async function e4(t){if(!t.length)return[];const e=c2(QF(eu,G0),u2("haves","array-contains-any",t.map(cf))).withConverter(Q0),n=await m2(e),r=[];return n.forEach(s=>{r.push(s.data())}),r}async function t4(t){const e=await U0(np(t));return e.exists()?e.data():null}async function n4(t){await $0(np(t.id),t)}function J2(t){t.use(QS).use(Zc).use(nP),Q2(t)}const Z2=Yr({...PR(),...qS({fullHeight:!0}),...BS()},"VApp"),eU=TE()({name:"VApp",props:Z2(),setup(t,e){let{slots:n}=e;const r=HS(t),{layoutClasses:s,getLayoutItem:i,items:o,layoutRef:a}=GS(t),{rtlClasses:c}=bE();return xR(()=>{var u;return $e("div",{ref:a,class:["v-application",r.themeClasses.value,s.value,c.value,t.class],style:[t.style]},[$e("div",{class:"v-application__wrap"},[(u=n.default)==null?void 0:u.call(n)])])}),{getLayoutItem:i,items:o,theme:r}}}),tU=pc({__name:"App",setup(t){return(e,n)=>{const r=wb("router-view");return Qv(),Xv(eU,null,{default:_v(()=>[$e(r)]),_:1})}}}),Y0=WC(tU);J2(Y0);Y0.mount("#app");export{sn as $,Xv as A,pn as B,Qv as C,_v as D,Zv as E,OA as F,Pr as G,nC as H,Wt as I,KU as J,GU as K,PR as L,BS as M,rb as N,HS as O,MU as P,La as Q,mE as R,Sf as S,cU as T,GC as U,yc as V,HU as W,$U as X,lU as Y,aU as Z,oU as _,bE as a,ER as a$,jU as a0,ZU as a1,t4 as a2,wb as a3,WS as a4,nU as a5,uU as a6,Rl as a7,dE as a8,Gy as a9,Tf as aA,rU as aB,e4 as aC,mb as aD,ea as aE,DU as aF,pU as aG,NU as aH,gb as aI,fE as aJ,_U as aK,WU as aL,Ur as aM,RU as aN,fU as aO,n4 as aP,kR as aQ,Af as aR,Nv as aS,to as aT,Ic as aU,LU as aV,Xo as aW,hU as aX,un as aY,IU as aZ,bf as a_,Qe as aa,p1 as ab,JU as ac,FU as ad,VU as ae,VS as af,UU as ag,QC as ah,xU as ai,iU as aj,bU as ak,YC as al,EU as am,TU as an,SU as ao,yU as ap,mU as aq,jt as ar,vU as as,AU as at,wU as au,uc as av,PU as aw,dr as ax,sR as ay,Ee as az,Lf as b,OU as b0,Jn as b1,SR as b2,BU as b3,eR as b4,Ec as b5,dU as b6,sU as b7,CU as b8,gU as b9,$e as c,ce as d,Pv as e,tR as f,TE as g,xR as h,Ze as i,XC as j,rR as k,nR as l,eE as m,dc as n,_c as o,Yr as p,sr as q,Kt as r,xn as s,kU as t,LR as u,pc as v,cn as w,XU as x,zU as y,qU as z};
