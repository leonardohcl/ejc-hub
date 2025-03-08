const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/default-CQj4ezP8.js","assets/ssrBoot-cywEzHpc.js","assets/VNavigationDrawer-DLpu23iS.js","assets/VGrid-BYzztG6h.js","assets/VGrid-Dw9qbg5u.css","assets/delay-DPvD8lzn.js","assets/scopeId-BHbkof3w.js","assets/scopeId-Br4CDULP.css","assets/VNavigationDrawer-CXz5AW6C.css","assets/default-aJl6Aq0_.css","assets/index-eC3bj0EJ.js","assets/VCard-CkzHUz-b.js","assets/VCard-Ckq9XVQu.css","assets/collection-UdKpEPXN.js","assets/VTextField-D4Yq6fRY.js","assets/route-block-CDHfvDbu.js","assets/route-block-BkCXTJZC.css","assets/VTextField-Cd94Gsfm.css","assets/VTabs-gtXvoXgk.js","assets/VTabs-JrGthzVy.css","assets/collection-C0ykCWfl.css","assets/lists-BswrdEDp.js","assets/lists-Mm7Rd7At.css","assets/settings-BRxRIJHl.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function mp(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const qe={},$i=[],Qn=()=>{},hC=()=>!1,Gu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),gp=n=>n.startsWith("onUpdate:"),ut=Object.assign,_p=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},dC=Object.prototype.hasOwnProperty,Oe=(n,e)=>dC.call(n,e),fe=Array.isArray,ji=n=>zu(n)==="[object Map]",BT=n=>zu(n)==="[object Set]",pe=n=>typeof n=="function",st=n=>typeof n=="string",ds=n=>typeof n=="symbol",Ke=n=>n!==null&&typeof n=="object",$T=n=>(Ke(n)||pe(n))&&pe(n.then)&&pe(n.catch),jT=Object.prototype.toString,zu=n=>jT.call(n),fC=n=>zu(n).slice(8,-1),qT=n=>zu(n)==="[object Object]",yp=n=>st(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ga=mp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qu=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},pC=/-(\w)/g,wn=Qu(n=>n.replace(pC,(e,t)=>t?t.toUpperCase():"")),mC=/\B([A-Z])/g,ci=Qu(n=>n.replace(mC,"-$1").toLowerCase()),ml=Qu(n=>n.charAt(0).toUpperCase()+n.slice(1)),ad=Qu(n=>n?`on${ml(n)}`:""),Zr=(n,e)=>!Object.is(n,e),ld=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},WT=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},gC=n=>{const e=parseFloat(n);return isNaN(e)?n:e},_C=n=>{const e=st(n)?Number(n):NaN;return isNaN(e)?n:e};let w_;const Yu=()=>w_||(w_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vp(n){if(fe(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=st(r)?TC(r):vp(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(st(n)||Ke(n))return n}const yC=/;(?![^(]*\))/g,vC=/:([^]+)/,EC=/\/\*[^]*?\*\//g;function TC(n){const e={};return n.replace(EC,"").split(yC).forEach(t=>{if(t){const r=t.split(vC);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ep(n){let e="";if(st(n))e=n;else if(fe(n))for(let t=0;t<n.length;t++){const r=Ep(n[t]);r&&(e+=r+" ")}else if(Ke(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const IC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wC=mp(IC);function HT(n){return!!n||n===""}const KT=n=>!!(n&&n.__v_isRef===!0),bC=n=>st(n)?n:n==null?"":fe(n)||Ke(n)&&(n.toString===jT||!pe(n.toString))?KT(n)?bC(n.value):JSON.stringify(n,GT,2):String(n),GT=(n,e)=>KT(e)?GT(n,e.value):ji(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[cd(r,i)+" =>"]=s,t),{})}:BT(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>cd(t))}:ds(e)?cd(e):Ke(e)&&!fe(e)&&!qT(e)?String(e):e,cd=(n,e="")=>{var t;return ds(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class zT{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=$t;try{return $t=this,e()}finally{$t=t}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function gl(n){return new zT(n)}function Tp(){return $t}function Ip(n,e=!1){$t&&$t.cleanups.push(n)}let We;const ud=new WeakSet;class QT{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ud.has(this)&&(ud.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||XT(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,b_(this),JT(this);const e=We,t=kn;We=this,kn=!0;try{return this.fn()}finally{ZT(this),We=e,kn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ap(e);this.deps=this.depsTail=void 0,b_(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ud.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xd(this)&&this.run()}get dirty(){return Xd(this)}}let YT=0,_a,ya;function XT(n,e=!1){if(n.flags|=8,e){n.next=ya,ya=n;return}n.next=_a,_a=n}function wp(){YT++}function bp(){if(--YT>0)return;if(ya){let e=ya;for(ya=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;_a;){let e=_a;for(_a=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function JT(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ZT(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Ap(r),AC(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Xd(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(eI(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function eI(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===La))return;n.globalVersion=La;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Xd(n)){n.flags&=-3;return}const t=We,r=kn;We=n,kn=!0;try{JT(n);const s=n.fn(n._value);(e.version===0||Zr(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{We=t,kn=r,ZT(n),n.flags&=-3}}function Ap(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Ap(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function AC(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let kn=!0;const tI=[];function fs(){tI.push(kn),kn=!1}function ps(){const n=tI.pop();kn=n===void 0?!0:n}function b_(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=We;We=void 0;try{e()}finally{We=t}}}let La=0;class RC{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rp{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!We||!kn||We===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==We)t=this.activeLink=new RC(We,this),We.deps?(t.prevDep=We.depsTail,We.depsTail.nextDep=t,We.depsTail=t):We.deps=We.depsTail=t,nI(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=We.depsTail,t.nextDep=void 0,We.depsTail.nextDep=t,We.depsTail=t,We.deps===t&&(We.deps=r)}return t}trigger(e){this.version++,La++,this.notify(e)}notify(e){wp();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bp()}}}function nI(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)nI(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const zc=new WeakMap,js=Symbol(""),Jd=Symbol(""),Fa=Symbol("");function Dt(n,e,t){if(kn&&We){let r=zc.get(n);r||zc.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Rp),s.map=r,s.key=t),s.track()}}function dr(n,e,t,r,s,i){const o=zc.get(n);if(!o){La++;return}const a=l=>{l&&l.trigger()};if(wp(),e==="clear")o.forEach(a);else{const l=fe(n),u=l&&yp(t);if(l&&t==="length"){const h=Number(r);o.forEach((d,p)=>{(p==="length"||p===Fa||!ds(p)&&p>=h)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(Fa)),e){case"add":l?u&&a(o.get("length")):(a(o.get(js)),ji(n)&&a(o.get(Jd)));break;case"delete":l||(a(o.get(js)),ji(n)&&a(o.get(Jd)));break;case"set":ji(n)&&a(o.get(js));break}}bp()}function SC(n,e){const t=zc.get(n);return t&&t.get(e)}function Ei(n){const e=we(n);return e===n?e:(Dt(e,"iterate",Fa),Tn(n)?e:e.map(Nt))}function Xu(n){return Dt(n=we(n),"iterate",Fa),n}const CC={__proto__:null,[Symbol.iterator](){return hd(this,Symbol.iterator,Nt)},concat(...n){return Ei(this).concat(...n.map(e=>fe(e)?Ei(e):e))},entries(){return hd(this,"entries",n=>(n[1]=Nt(n[1]),n))},every(n,e){return lr(this,"every",n,e,void 0,arguments)},filter(n,e){return lr(this,"filter",n,e,t=>t.map(Nt),arguments)},find(n,e){return lr(this,"find",n,e,Nt,arguments)},findIndex(n,e){return lr(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return lr(this,"findLast",n,e,Nt,arguments)},findLastIndex(n,e){return lr(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return lr(this,"forEach",n,e,void 0,arguments)},includes(...n){return dd(this,"includes",n)},indexOf(...n){return dd(this,"indexOf",n)},join(n){return Ei(this).join(n)},lastIndexOf(...n){return dd(this,"lastIndexOf",n)},map(n,e){return lr(this,"map",n,e,void 0,arguments)},pop(){return Ko(this,"pop")},push(...n){return Ko(this,"push",n)},reduce(n,...e){return A_(this,"reduce",n,e)},reduceRight(n,...e){return A_(this,"reduceRight",n,e)},shift(){return Ko(this,"shift")},some(n,e){return lr(this,"some",n,e,void 0,arguments)},splice(...n){return Ko(this,"splice",n)},toReversed(){return Ei(this).toReversed()},toSorted(n){return Ei(this).toSorted(n)},toSpliced(...n){return Ei(this).toSpliced(...n)},unshift(...n){return Ko(this,"unshift",n)},values(){return hd(this,"values",Nt)}};function hd(n,e,t){const r=Xu(n),s=r[e]();return r!==n&&!Tn(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const PC=Array.prototype;function lr(n,e,t,r,s,i){const o=Xu(n),a=o!==n&&!Tn(n),l=o[e];if(l!==PC[e]){const d=l.apply(n,i);return a?Nt(d):d}let u=t;o!==n&&(a?u=function(d,p){return t.call(this,Nt(d),p,n)}:t.length>2&&(u=function(d,p){return t.call(this,d,p,n)}));const h=l.call(o,u,r);return a&&s?s(h):h}function A_(n,e,t,r){const s=Xu(n);let i=t;return s!==n&&(Tn(n)?t.length>3&&(i=function(o,a,l){return t.call(this,o,a,l,n)}):i=function(o,a,l){return t.call(this,o,Nt(a),l,n)}),s[e](i,...r)}function dd(n,e,t){const r=we(n);Dt(r,"iterate",Fa);const s=r[e](...t);return(s===-1||s===!1)&&kp(t[0])?(t[0]=we(t[0]),r[e](...t)):s}function Ko(n,e,t=[]){fs(),wp();const r=we(n)[e].apply(n,t);return bp(),ps(),r}const kC=mp("__proto__,__v_isRef,__isVue"),rI=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ds));function DC(n){ds(n)||(n=String(n));const e=we(this);return Dt(e,"has",n),e.hasOwnProperty(n)}class sI{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?$C:lI:i?aI:oI).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=fe(e);if(!s){let l;if(o&&(l=CC[t]))return l;if(t==="hasOwnProperty")return DC}const a=Reflect.get(e,t,Ze(e)?e:r);return(ds(t)?rI.has(t):kC(t))||(s||Dt(e,"get",t),i)?a:Ze(a)?o&&yp(t)?a:a.value:Ke(a)?s?Cp(a):Yt(a):a}}class iI extends sI{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const l=Qs(i);if(!Tn(r)&&!Qs(r)&&(i=we(i),r=we(r)),!fe(e)&&Ze(i)&&!Ze(r))return l?!1:(i.value=r,!0)}const o=fe(e)&&yp(t)?Number(t)<e.length:Oe(e,t),a=Reflect.set(e,t,r,Ze(e)?e:s);return e===we(s)&&(o?Zr(r,i)&&dr(e,"set",t,r):dr(e,"add",t,r)),a}deleteProperty(e,t){const r=Oe(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&dr(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!ds(t)||!rI.has(t))&&Dt(e,"has",t),r}ownKeys(e){return Dt(e,"iterate",fe(e)?"length":js),Reflect.ownKeys(e)}}class NC extends sI{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const xC=new iI,OC=new NC,VC=new iI(!0);const Zd=n=>n,sc=n=>Reflect.getPrototypeOf(n);function MC(n,e,t){return function(...r){const s=this.__v_raw,i=we(s),o=ji(i),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=s[n](...r),h=t?Zd:e?ef:Nt;return!e&&Dt(i,"iterate",l?Jd:js),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function ic(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function LC(n,e){const t={get(s){const i=this.__v_raw,o=we(i),a=we(s);n||(Zr(s,a)&&Dt(o,"get",s),Dt(o,"get",a));const{has:l}=sc(o),u=e?Zd:n?ef:Nt;if(l.call(o,s))return u(i.get(s));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!n&&Dt(we(s),"iterate",js),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=we(i),a=we(s);return n||(Zr(s,a)&&Dt(o,"has",s),Dt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=we(a),u=e?Zd:n?ef:Nt;return!n&&Dt(l,"iterate",js),a.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return ut(t,n?{add:ic("add"),set:ic("set"),delete:ic("delete"),clear:ic("clear")}:{add(s){!e&&!Tn(s)&&!Qs(s)&&(s=we(s));const i=we(this);return sc(i).has.call(i,s)||(i.add(s),dr(i,"add",s,s)),this},set(s,i){!e&&!Tn(i)&&!Qs(i)&&(i=we(i));const o=we(this),{has:a,get:l}=sc(o);let u=a.call(o,s);u||(s=we(s),u=a.call(o,s));const h=l.call(o,s);return o.set(s,i),u?Zr(i,h)&&dr(o,"set",s,i):dr(o,"add",s,i),this},delete(s){const i=we(this),{has:o,get:a}=sc(i);let l=o.call(i,s);l||(s=we(s),l=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return l&&dr(i,"delete",s,void 0),u},clear(){const s=we(this),i=s.size!==0,o=s.clear();return i&&dr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=MC(s,n,e)}),t}function Sp(n,e){const t=LC(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Oe(t,s)&&s in r?t:r,s,i)}const FC={get:Sp(!1,!1)},UC={get:Sp(!1,!0)},BC={get:Sp(!0,!1)};const oI=new WeakMap,aI=new WeakMap,lI=new WeakMap,$C=new WeakMap;function jC(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qC(n){return n.__v_skip||!Object.isExtensible(n)?0:jC(fC(n))}function Yt(n){return Qs(n)?n:Pp(n,!1,xC,FC,oI)}function cI(n){return Pp(n,!1,VC,UC,aI)}function Cp(n){return Pp(n,!0,OC,BC,lI)}function Pp(n,e,t,r,s){if(!Ke(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=s.get(n);if(i)return i;const o=qC(n);if(o===0)return n;const a=new Proxy(n,o===2?r:t);return s.set(n,a),a}function Er(n){return Qs(n)?Er(n.__v_raw):!!(n&&n.__v_isReactive)}function Qs(n){return!!(n&&n.__v_isReadonly)}function Tn(n){return!!(n&&n.__v_isShallow)}function kp(n){return n?!!n.__v_raw:!1}function we(n){const e=n&&n.__v_raw;return e?we(e):n}function Dp(n){return!Oe(n,"__v_skip")&&Object.isExtensible(n)&&WT(n,"__v_skip",!0),n}const Nt=n=>Ke(n)?Yt(n):n,ef=n=>Ke(n)?Cp(n):n;function Ze(n){return n?n.__v_isRef===!0:!1}function ct(n){return uI(n,!1)}function Dn(n){return uI(n,!0)}function uI(n,e){return Ze(n)?n:new WC(n,e)}class WC{constructor(e,t){this.dep=new Rp,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:we(e),this._value=t?e:Nt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Tn(e)||Qs(e);e=r?e:we(e),Zr(e,t)&&(this._rawValue=e,this._value=r?e:Nt(e),this.dep.trigger())}}function an(n){return Ze(n)?n.value:n}function ur(n){return pe(n)?n():an(n)}const HC={get:(n,e,t)=>e==="__v_raw"?n:an(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return Ze(s)&&!Ze(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function hI(n){return Er(n)?n:new Proxy(n,HC)}function Np(n){const e=fe(n)?new Array(n.length):{};for(const t in n)e[t]=fI(n,t);return e}class KC{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return SC(we(this._object),this._key)}}class GC{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function dI(n,e,t){return Ze(n)?n:pe(n)?new GC(n):Ke(n)&&arguments.length>1?fI(n,e,t):ct(n)}function fI(n,e,t){const r=n[e];return Ze(r)?r:new KC(n,e,t)}class zC{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Rp(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=La-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&We!==this)return XT(this,!0),!0}get value(){const e=this.dep.track();return eI(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function QC(n,e,t=!1){let r,s;return pe(n)?r=n:(r=n.get,s=n.set),new zC(r,s,t)}const oc={},Qc=new WeakMap;let Ps;function YC(n,e=!1,t=Ps){if(t){let r=Qc.get(t);r||Qc.set(t,r=[]),r.push(n)}}function XC(n,e,t=qe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=t,u=M=>s?M:Tn(M)||s===!1||s===0?fr(M,1):fr(M);let h,d,p,g,v=!1,T=!1;if(Ze(n)?(d=()=>n.value,v=Tn(n)):Er(n)?(d=()=>u(n),v=!0):fe(n)?(T=!0,v=n.some(M=>Er(M)||Tn(M)),d=()=>n.map(M=>{if(Ze(M))return M.value;if(Er(M))return u(M);if(pe(M))return l?l(M,2):M()})):pe(n)?e?d=l?()=>l(n,2):n:d=()=>{if(p){fs();try{p()}finally{ps()}}const M=Ps;Ps=h;try{return l?l(n,3,[g]):n(g)}finally{Ps=M}}:d=Qn,e&&s){const M=d,W=s===!0?1/0:s;d=()=>fr(M(),W)}const P=Tp(),O=()=>{h.stop(),P&&P.active&&_p(P.effects,h)};if(i&&e){const M=e;e=(...W)=>{M(...W),O()}}let V=T?new Array(n.length).fill(oc):oc;const x=M=>{if(!(!(h.flags&1)||!h.dirty&&!M))if(e){const W=h.run();if(s||v||(T?W.some((j,b)=>Zr(j,V[b])):Zr(W,V))){p&&p();const j=Ps;Ps=h;try{const b=[W,V===oc?void 0:T&&V[0]===oc?[]:V,g];l?l(e,3,b):e(...b),V=W}finally{Ps=j}}}else h.run()};return a&&a(x),h=new QT(d),h.scheduler=o?()=>o(x,!1):x,g=M=>YC(M,!1,h),p=h.onStop=()=>{const M=Qc.get(h);if(M){if(l)l(M,4);else for(const W of M)W();Qc.delete(h)}},e?r?x(!0):V=h.run():o?o(x.bind(null,!0),!0):h.run(),O.pause=h.pause.bind(h),O.resume=h.resume.bind(h),O.stop=O,O}function fr(n,e=1/0,t){if(e<=0||!Ke(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ze(n))fr(n.value,e,t);else if(fe(n))for(let r=0;r<n.length;r++)fr(n[r],e,t);else if(BT(n)||ji(n))n.forEach(r=>{fr(r,e,t)});else if(qT(n)){for(const r in n)fr(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&fr(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _l(n,e,t,r){try{return r?n(...r):n()}catch(s){Ju(s,e,t)}}function On(n,e,t,r){if(pe(n)){const s=_l(n,e,t,r);return s&&$T(s)&&s.catch(i=>{Ju(i,e,t)}),s}if(fe(n)){const s=[];for(let i=0;i<n.length;i++)s.push(On(n[i],e,t,r));return s}}function Ju(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||qe;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](n,l,u)===!1)return}a=a.parent}if(i){fs(),_l(i,null,10,[n,l,u]),ps();return}}JC(n,t,s,r,o)}function JC(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const jt=[];let $n=-1;const qi=[];let qr=null,Ni=0;const pI=Promise.resolve();let Yc=null;function Zu(n){const e=Yc||pI;return n?e.then(this?n.bind(this):n):e}function ZC(n){let e=$n+1,t=jt.length;for(;e<t;){const r=e+t>>>1,s=jt[r],i=Ua(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function xp(n){if(!(n.flags&1)){const e=Ua(n),t=jt[jt.length-1];!t||!(n.flags&2)&&e>=Ua(t)?jt.push(n):jt.splice(ZC(e),0,n),n.flags|=1,mI()}}function mI(){Yc||(Yc=pI.then(_I))}function eP(n){fe(n)?qi.push(...n):qr&&n.id===-1?qr.splice(Ni+1,0,n):n.flags&1||(qi.push(n),n.flags|=1),mI()}function R_(n,e,t=$n+1){for(;t<jt.length;t++){const r=jt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;jt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function gI(n){if(qi.length){const e=[...new Set(qi)].sort((t,r)=>Ua(t)-Ua(r));if(qi.length=0,qr){qr.push(...e);return}for(qr=e,Ni=0;Ni<qr.length;Ni++){const t=qr[Ni];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}qr=null,Ni=0}}const Ua=n=>n.id==null?n.flags&2?-1:1/0:n.id;function _I(n){try{for($n=0;$n<jt.length;$n++){const e=jt[$n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_l(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$n<jt.length;$n++){const e=jt[$n];e&&(e.flags&=-2)}$n=-1,jt.length=0,gI(),Yc=null,(jt.length||qi.length)&&_I()}}let Ht=null,yI=null;function Xc(n){const e=Ht;return Ht=n,yI=n&&n.type.__scopeId||null,e}function vI(n,e=Ht,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&B_(-1);const i=Xc(e);let o;try{o=n(...s)}finally{Xc(i),r._d&&B_(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function G9(n,e){if(Ht===null)return n;const t=ah(Ht),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=qe]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&fr(o),r.push({dir:i,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ws(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(fs(),On(l,t,8,[n.el,a,n,e]),ps())}}const EI=Symbol("_vte"),TI=n=>n.__isTeleport,va=n=>n&&(n.disabled||n.disabled===""),S_=n=>n&&(n.defer||n.defer===""),C_=n=>typeof SVGElement<"u"&&n instanceof SVGElement,P_=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,tf=(n,e)=>{const t=n&&n.to;return st(t)?e?e(t):null:t},II={name:"Teleport",__isTeleport:!0,process(n,e,t,r,s,i,o,a,l,u){const{mc:h,pc:d,pbc:p,o:{insert:g,querySelector:v,createText:T,createComment:P}}=u,O=va(e.props);let{shapeFlag:V,children:x,dynamicChildren:M}=e;if(n==null){const W=e.el=T(""),j=e.anchor=T("");g(W,t,r),g(j,t,r);const b=(E,I)=>{V&16&&(s&&s.isCE&&(s.ce._teleportTarget=E),h(x,E,I,s,i,o,a,l))},_=()=>{const E=e.target=tf(e.props,v),I=wI(E,e,T,g);E&&(o!=="svg"&&C_(E)?o="svg":o!=="mathml"&&P_(E)&&(o="mathml"),O||(b(E,I),Cc(e,!1)))};O&&(b(t,j),Cc(e,!0)),S_(e.props)?Bt(()=>{_(),e.el.__isMounted=!0},i):_()}else{if(S_(e.props)&&!n.el.__isMounted){Bt(()=>{II.process(n,e,t,r,s,i,o,a,l,u),delete n.el.__isMounted},i);return}e.el=n.el,e.targetStart=n.targetStart;const W=e.anchor=n.anchor,j=e.target=n.target,b=e.targetAnchor=n.targetAnchor,_=va(n.props),E=_?t:j,I=_?W:b;if(o==="svg"||C_(j)?o="svg":(o==="mathml"||P_(j))&&(o="mathml"),M?(p(n.dynamicChildren,M,E,s,i,o,a),Up(n,e,!0)):l||d(n,e,E,I,s,i,o,a,!1),O)_?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):ac(e,t,W,u,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const C=e.target=tf(e.props,v);C&&ac(e,C,null,u,0)}else _&&ac(e,j,b,u,1);Cc(e,O)}},remove(n,e,t,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:l,targetStart:u,targetAnchor:h,target:d,props:p}=n;if(d&&(s(u),s(h)),i&&s(l),o&16){const g=i||!va(p);for(let v=0;v<a.length;v++){const T=a[v];r(T,e,t,g,!!T.dynamicChildren)}}},move:ac,hydrate:tP};function ac(n,e,t,{o:{insert:r},m:s},i=2){i===0&&r(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:u,props:h}=n,d=i===2;if(d&&r(o,e,t),(!d||va(h))&&l&16)for(let p=0;p<u.length;p++)s(u[p],e,t,2);d&&r(a,e,t)}function tP(n,e,t,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:u,createText:h}},d){const p=e.target=tf(e.props,l);if(p){const g=va(e.props),v=p._lpa||p.firstChild;if(e.shapeFlag&16)if(g)e.anchor=d(o(n),e,a(n),t,r,s,i),e.targetStart=v,e.targetAnchor=v&&o(v);else{e.anchor=o(n);let T=v;for(;T;){if(T&&T.nodeType===8){if(T.data==="teleport start anchor")e.targetStart=T;else if(T.data==="teleport anchor"){e.targetAnchor=T,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}T=o(T)}e.targetAnchor||wI(p,e,h,u),d(v&&o(v),e,p,t,r,s,i)}Cc(e,g)}return e.anchor&&o(e.anchor)}const z9=II;function Cc(n,e){const t=n.ctx;if(t&&t.ut){let r,s;for(e?(r=n.el,s=n.anchor):(r=n.targetStart,s=n.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function wI(n,e,t,r){const s=e.targetStart=t(""),i=e.targetAnchor=t("");return s[EI]=i,n&&(r(s,n),r(i,n)),i}const Wr=Symbol("_leaveCb"),lc=Symbol("_enterCb");function bI(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vp(()=>{n.isMounted=!0}),rh(()=>{n.isUnmounting=!0}),n}const _n=[Function,Array],AI={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_n,onEnter:_n,onAfterEnter:_n,onEnterCancelled:_n,onBeforeLeave:_n,onLeave:_n,onAfterLeave:_n,onLeaveCancelled:_n,onBeforeAppear:_n,onAppear:_n,onAfterAppear:_n,onAppearCancelled:_n},RI=n=>{const e=n.subTree;return e.component?RI(e.component):e},nP={name:"BaseTransition",props:AI,setup(n,{slots:e}){const t=yl(),r=bI();return()=>{const s=e.default&&Op(e.default(),!0);if(!s||!s.length)return;const i=SI(s),o=we(n),{mode:a}=o;if(r.isLeaving)return fd(i);const l=k_(i);if(!l)return fd(i);let u=Ba(l,o,r,t,d=>u=d);l.type!==qt&&Ys(l,u);let h=t.subTree&&k_(t.subTree);if(h&&h.type!==qt&&!Os(l,h)&&RI(t).type!==qt){let d=Ba(h,o,r,t);if(Ys(h,d),a==="out-in"&&l.type!==qt)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,h=void 0},fd(i);a==="in-out"&&l.type!==qt?d.delayLeave=(p,g,v)=>{const T=CI(r,h);T[String(h.key)]=h,p[Wr]=()=>{g(),p[Wr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{v(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function SI(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==qt){e=t;break}}return e}const rP=nP;function CI(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function Ba(n,e,t,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:v,onLeaveCancelled:T,onBeforeAppear:P,onAppear:O,onAfterAppear:V,onAppearCancelled:x}=e,M=String(n.key),W=CI(t,n),j=(E,I)=>{E&&On(E,r,9,I)},b=(E,I)=>{const C=I[1];j(E,I),fe(E)?E.every(R=>R.length<=1)&&C():E.length<=1&&C()},_={mode:o,persisted:a,beforeEnter(E){let I=l;if(!t.isMounted)if(i)I=P||l;else return;E[Wr]&&E[Wr](!0);const C=W[M];C&&Os(n,C)&&C.el[Wr]&&C.el[Wr](),j(I,[E])},enter(E){let I=u,C=h,R=d;if(!t.isMounted)if(i)I=O||u,C=V||h,R=x||d;else return;let w=!1;const Ie=E[lc]=nt=>{w||(w=!0,nt?j(R,[E]):j(C,[E]),_.delayedLeave&&_.delayedLeave(),E[lc]=void 0)};I?b(I,[E,Ie]):Ie()},leave(E,I){const C=String(n.key);if(E[lc]&&E[lc](!0),t.isUnmounting)return I();j(p,[E]);let R=!1;const w=E[Wr]=Ie=>{R||(R=!0,I(),Ie?j(T,[E]):j(v,[E]),E[Wr]=void 0,W[C]===n&&delete W[C])};W[C]=n,g?b(g,[E,w]):w()},clone(E){const I=Ba(E,e,t,r,s);return s&&s(I),I}};return _}function fd(n){if(th(n))return n=os(n),n.children=null,n}function k_(n){if(!th(n))return TI(n.type)&&n.children?SI(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&pe(t.default))return t.default()}}function Ys(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ys(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Op(n,e=!1,t){let r=[],s=0;for(let i=0;i<n.length;i++){let o=n[i];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:i);o.type===sn?(o.patchFlag&128&&s++,r=r.concat(Op(o.children,e,a))):(e||o.type!==qt)&&r.push(a!=null?os(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function eh(n,e){return pe(n)?ut({name:n.name},e,{setup:n}):n}function PI(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Jc(n,e,t,r,s=!1){if(fe(n)){n.forEach((v,T)=>Jc(v,e&&(fe(e)?e[T]:e),t,r,s));return}if(Ea(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Jc(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?ah(r.component):r.el,o=s?null:i,{i:a,r:l}=n,u=e&&e.r,h=a.refs===qe?a.refs={}:a.refs,d=a.setupState,p=we(d),g=d===qe?()=>!1:v=>Oe(p,v);if(u!=null&&u!==l&&(st(u)?(h[u]=null,g(u)&&(d[u]=null)):Ze(u)&&(u.value=null)),pe(l))_l(l,a,12,[o,h]);else{const v=st(l),T=Ze(l);if(v||T){const P=()=>{if(n.f){const O=v?g(l)?d[l]:h[l]:l.value;s?fe(O)&&_p(O,i):fe(O)?O.includes(i)||O.push(i):v?(h[l]=[i],g(l)&&(d[l]=h[l])):(l.value=[i],n.k&&(h[n.k]=l.value))}else v?(h[l]=o,g(l)&&(d[l]=o)):T&&(l.value=o,n.k&&(h[n.k]=o))};o?(P.id=-1,Bt(P,t)):P()}}}Yu().requestIdleCallback;Yu().cancelIdleCallback;const Ea=n=>!!n.type.__asyncLoader,th=n=>n.type.__isKeepAlive;function kI(n,e){NI(n,"a",e)}function DI(n,e){NI(n,"da",e)}function NI(n,e,t=mt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(nh(e,r,t),t){let s=t.parent;for(;s&&s.parent;)th(s.parent.vnode)&&sP(r,e,t,s),s=s.parent}}function sP(n,e,t,r){const s=nh(e,n,r,!0);OI(()=>{_p(r[e],s)},t)}function nh(n,e,t=mt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{fs();const a=vl(t),l=On(e,t,n,o);return a(),ps(),l});return r?s.unshift(i):s.push(i),i}}const Sr=n=>(e,t=mt)=>{(!qa||n==="sp")&&nh(n,(...r)=>e(...r),t)},iP=Sr("bm"),Vp=Sr("m"),oP=Sr("bu"),xI=Sr("u"),rh=Sr("bum"),OI=Sr("um"),VI=Sr("sp"),aP=Sr("rtg"),lP=Sr("rtc");function cP(n,e=mt){nh("ec",n,e)}const Mp="components",uP="directives";function hP(n,e){return Lp(Mp,n,!0,e)||n}const dP=Symbol.for("v-ndc");function Q9(n){return st(n)&&Lp(Mp,n,!1)||n}function Y9(n){return Lp(uP,n)}function Lp(n,e,t=!0,r=!1){const s=Ht||mt;if(s){const i=s.type;if(n===Mp){const a=ZP(i,!1);if(a&&(a===e||a===wn(e)||a===ml(wn(e))))return i}const o=D_(s[n]||i[n],e)||D_(s.appContext[n],e);return!o&&r?i:o}}function D_(n,e){return n&&(n[e]||n[wn(e)]||n[ml(wn(e))])}function X9(n,e,t,r){let s;const i=t,o=fe(n);if(o||st(n)){const a=o&&Er(n);let l=!1;a&&(l=!Tn(n),n=Xu(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?Nt(n[u]):n[u],u,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,i)}else if(Ke(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];s[l]=e(n[h],h,l,i)}}else s=[];return s}const nf=n=>n?sw(n)?ah(n):nf(n.parent):null,Ta=ut(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>nf(n.parent),$root:n=>nf(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>LI(n),$forceUpdate:n=>n.f||(n.f=()=>{xp(n.update)}),$nextTick:n=>n.n||(n.n=Zu.bind(n.proxy)),$watch:n=>OP.bind(n)}),pd=(n,e)=>n!==qe&&!n.__isScriptSetup&&Oe(n,e),fP={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=n;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(pd(r,e))return o[e]=1,r[e];if(s!==qe&&Oe(s,e))return o[e]=2,s[e];if((u=n.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(t!==qe&&Oe(t,e))return o[e]=4,t[e];rf&&(o[e]=0)}}const h=Ta[e];let d,p;if(h)return e==="$attrs"&&Dt(n.attrs,"get",""),h(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==qe&&Oe(t,e))return o[e]=4,t[e];if(p=l.config.globalProperties,Oe(p,e))return p[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return pd(s,e)?(s[e]=t,!0):r!==qe&&Oe(r,e)?(r[e]=t,!0):Oe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!t[o]||n!==qe&&Oe(n,o)||pd(e,o)||(a=i[0])&&Oe(a,o)||Oe(r,o)||Oe(Ta,o)||Oe(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Oe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function N_(n){return fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let rf=!0;function pP(n){const e=LI(n),t=n.proxy,r=n.ctx;rf=!1,e.beforeCreate&&x_(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:g,updated:v,activated:T,deactivated:P,beforeDestroy:O,beforeUnmount:V,destroyed:x,unmounted:M,render:W,renderTracked:j,renderTriggered:b,errorCaptured:_,serverPrefetch:E,expose:I,inheritAttrs:C,components:R,directives:w,filters:Ie}=e;if(u&&mP(u,r,null),o)for(const ue in o){const ve=o[ue];pe(ve)&&(r[ue]=ve.bind(t))}if(s){const ue=s.call(t,t);Ke(ue)&&(n.data=Yt(ue))}if(rf=!0,i)for(const ue in i){const ve=i[ue],_t=pe(ve)?ve.bind(t,t):pe(ve.get)?ve.get.bind(t,t):Qn,en=!pe(ve)&&pe(ve.set)?ve.set.bind(t):Qn,zt=de({get:_t,set:en});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>zt.value,set:Le=>zt.value=Le})}if(a)for(const ue in a)MI(a[ue],r,t,ue);if(l){const ue=pe(l)?l.call(t):l;Reflect.ownKeys(ue).forEach(ve=>{Tr(ve,ue[ve])})}h&&x_(h,n,"c");function Ne(ue,ve){fe(ve)?ve.forEach(_t=>ue(_t.bind(t))):ve&&ue(ve.bind(t))}if(Ne(iP,d),Ne(Vp,p),Ne(oP,g),Ne(xI,v),Ne(kI,T),Ne(DI,P),Ne(cP,_),Ne(lP,j),Ne(aP,b),Ne(rh,V),Ne(OI,M),Ne(VI,E),fe(I))if(I.length){const ue=n.exposed||(n.exposed={});I.forEach(ve=>{Object.defineProperty(ue,ve,{get:()=>t[ve],set:_t=>t[ve]=_t})})}else n.exposed||(n.exposed={});W&&n.render===Qn&&(n.render=W),C!=null&&(n.inheritAttrs=C),R&&(n.components=R),w&&(n.directives=w),E&&PI(n)}function mP(n,e,t=Qn){fe(n)&&(n=sf(n));for(const r in n){const s=n[r];let i;Ke(s)?"default"in s?i=Ye(s.from||r,s.default,!0):i=Ye(s.from||r):i=Ye(s),Ze(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function x_(n,e,t){On(fe(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function MI(n,e,t,r){let s=r.includes(".")?QI(t,r):()=>t[r];if(st(n)){const i=e[n];pe(i)&&hn(s,i)}else if(pe(n))hn(s,n.bind(t));else if(Ke(n))if(fe(n))n.forEach(i=>MI(i,e,t,r));else{const i=pe(n.handler)?n.handler.bind(t):e[n.handler];pe(i)&&hn(s,i,n)}}function LI(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(u=>Zc(l,u,o,!0)),Zc(l,e,o)),Ke(e)&&i.set(e,l),l}function Zc(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Zc(n,i,t,!0),s&&s.forEach(o=>Zc(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=gP[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const gP={data:O_,props:V_,emits:V_,methods:oa,computed:oa,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:oa,directives:oa,watch:yP,provide:O_,inject:_P};function O_(n,e){return e?n?function(){return ut(pe(n)?n.call(this,this):n,pe(e)?e.call(this,this):e)}:e:n}function _P(n,e){return oa(sf(n),sf(e))}function sf(n){if(fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ut(n,e){return n?[...new Set([].concat(n,e))]:e}function oa(n,e){return n?ut(Object.create(null),n,e):e}function V_(n,e){return n?fe(n)&&fe(e)?[...new Set([...n,...e])]:ut(Object.create(null),N_(n),N_(e??{})):e}function yP(n,e){if(!n)return e;if(!e)return n;const t=ut(Object.create(null),n);for(const r in e)t[r]=Ut(n[r],e[r]);return t}function FI(){return{app:null,config:{isNativeTag:hC,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vP=0;function EP(n,e){return function(r,s=null){pe(r)||(r=ut({},r)),s!=null&&!Ke(s)&&(s=null);const i=FI(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:vP++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:tk,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&pe(h.install)?(o.add(h),h.install(u,...d)):pe(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,p){if(!l){const g=u._ceVNode||He(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),n(g,h,p),l=!0,u._container=h,h.__vue_app__=u,ah(g.component)}},onUnmount(h){a.push(h)},unmount(){l&&(On(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=qs;qs=u;try{return h()}finally{qs=d}}};return u}}let qs=null;function Tr(n,e){if(mt){let t=mt.provides;const r=mt.parent&&mt.parent.provides;r===t&&(t=mt.provides=Object.create(r)),t[n]=e}}function Ye(n,e,t=!1){const r=mt||Ht;if(r||qs){const s=qs?qs._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&pe(e)?e.call(r&&r.proxy):e}}function TP(){return!!(mt||Ht||qs)}const UI={},BI=()=>Object.create(UI),$I=n=>Object.getPrototypeOf(n)===UI;function IP(n,e,t,r=!1){const s={},i=BI();n.propsDefaults=Object.create(null),jI(n,e,s,i);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=r?s:cI(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function wP(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=n,a=we(s),[l]=n.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(ih(n.emitsOptions,p))continue;const g=e[p];if(l)if(Oe(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const v=wn(p);s[v]=of(l,a,v,g,n,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{jI(n,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!Oe(e,d)&&((h=ci(d))===d||!Oe(e,h)))&&(l?t&&(t[d]!==void 0||t[h]!==void 0)&&(s[d]=of(l,a,d,void 0,n,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Oe(e,d))&&(delete i[d],u=!0)}u&&dr(n.attrs,"set","")}function jI(n,e,t,r){const[s,i]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(ga(l))continue;const u=e[l];let h;s&&Oe(s,h=wn(l))?!i||!i.includes(h)?t[h]=u:(a||(a={}))[h]=u:ih(n.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=we(t),u=a||qe;for(let h=0;h<i.length;h++){const d=i[h];t[d]=of(s,l,d,u[d],n,!Oe(u,d))}}return o}function of(n,e,t,r,s,i){const o=n[t];if(o!=null){const a=Oe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(t in u)r=u[t];else{const h=vl(s);r=u[t]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(t,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ci(t))&&(r=!0))}return r}const bP=new WeakMap;function qI(n,e,t=!1){const r=t?bP:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,o={},a=[];let l=!1;if(!pe(n)){const h=d=>{l=!0;const[p,g]=qI(d,e,!0);ut(o,p),g&&a.push(...g)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!i&&!l)return Ke(n)&&r.set(n,$i),$i;if(fe(i))for(let h=0;h<i.length;h++){const d=wn(i[h]);M_(d)&&(o[d]=qe)}else if(i)for(const h in i){const d=wn(h);if(M_(d)){const p=i[h],g=o[d]=fe(p)||pe(p)?{type:p}:ut({},p),v=g.type;let T=!1,P=!0;if(fe(v))for(let O=0;O<v.length;++O){const V=v[O],x=pe(V)&&V.name;if(x==="Boolean"){T=!0;break}else x==="String"&&(P=!1)}else T=pe(v)&&v.name==="Boolean";g[0]=T,g[1]=P,(T||Oe(g,"default"))&&a.push(d)}}const u=[o,a];return Ke(n)&&r.set(n,u),u}function M_(n){return n[0]!=="$"&&!ga(n)}const WI=n=>n[0]==="_"||n==="$stable",Fp=n=>fe(n)?n.map(qn):[qn(n)],AP=(n,e,t)=>{if(e._n)return e;const r=vI((...s)=>Fp(e(...s)),t);return r._c=!1,r},HI=(n,e,t)=>{const r=n._ctx;for(const s in n){if(WI(s))continue;const i=n[s];if(pe(i))e[s]=AP(s,i,r);else if(i!=null){const o=Fp(i);e[s]=()=>o}}},KI=(n,e)=>{const t=Fp(e);n.slots.default=()=>t},GI=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},RP=(n,e,t)=>{const r=n.slots=BI();if(n.vnode.shapeFlag&32){const s=e._;s?(GI(r,e,t),t&&WT(r,"_",s,!0)):HI(e,r)}else e&&KI(n,e)},SP=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,o=qe;if(r.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:GI(s,e,t):(i=!e.$stable,HI(e,s)),o=e}else e&&(KI(n,e),o={default:1});if(i)for(const a in s)!WI(a)&&o[a]==null&&delete s[a]},Bt=$P;function CP(n){return PP(n)}function PP(n,e){const t=Yu();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:g=Qn,insertStaticContent:v}=n,T=(A,S,k,B=null,q=null,$=null,Z=void 0,z=null,G=!!S.dynamicChildren)=>{if(A===S)return;A&&!Os(A,S)&&(B=U(A),Le(A,q,$,!0),A=null),S.patchFlag===-2&&(G=!1,S.dynamicChildren=null);const{type:H,ref:le,shapeFlag:ne}=S;switch(H){case oh:P(A,S,k,B);break;case qt:O(A,S,k,B);break;case gd:A==null&&V(S,k,B,Z);break;case sn:R(A,S,k,B,q,$,Z,z,G);break;default:ne&1?W(A,S,k,B,q,$,Z,z,G):ne&6?w(A,S,k,B,q,$,Z,z,G):(ne&64||ne&128)&&H.process(A,S,k,B,q,$,Z,z,G,se)}le!=null&&q&&Jc(le,A&&A.ref,$,S||A,!S)},P=(A,S,k,B)=>{if(A==null)r(S.el=a(S.children),k,B);else{const q=S.el=A.el;S.children!==A.children&&u(q,S.children)}},O=(A,S,k,B)=>{A==null?r(S.el=l(S.children||""),k,B):S.el=A.el},V=(A,S,k,B)=>{[A.el,A.anchor]=v(A.children,S,k,B,A.el,A.anchor)},x=({el:A,anchor:S},k,B)=>{let q;for(;A&&A!==S;)q=p(A),r(A,k,B),A=q;r(S,k,B)},M=({el:A,anchor:S})=>{let k;for(;A&&A!==S;)k=p(A),s(A),A=k;s(S)},W=(A,S,k,B,q,$,Z,z,G)=>{S.type==="svg"?Z="svg":S.type==="math"&&(Z="mathml"),A==null?j(S,k,B,q,$,Z,z,G):E(A,S,q,$,Z,z,G)},j=(A,S,k,B,q,$,Z,z)=>{let G,H;const{props:le,shapeFlag:ne,transition:oe,dirs:he}=A;if(G=A.el=o(A.type,$,le&&le.is,le),ne&8?h(G,A.children):ne&16&&_(A.children,G,null,B,q,md(A,$),Z,z),he&&ws(A,null,B,"created"),b(G,A,A.scopeId,Z,B),le){for(const ye in le)ye!=="value"&&!ga(ye)&&i(G,ye,null,le[ye],$,B);"value"in le&&i(G,"value",null,le.value,$),(H=le.onVnodeBeforeMount)&&Un(H,B,A)}he&&ws(A,null,B,"beforeMount");const ce=kP(q,oe);ce&&oe.beforeEnter(G),r(G,S,k),((H=le&&le.onVnodeMounted)||ce||he)&&Bt(()=>{H&&Un(H,B,A),ce&&oe.enter(G),he&&ws(A,null,B,"mounted")},q)},b=(A,S,k,B,q)=>{if(k&&g(A,k),B)for(let $=0;$<B.length;$++)g(A,B[$]);if(q){let $=q.subTree;if(S===$||XI($.type)&&($.ssContent===S||$.ssFallback===S)){const Z=q.vnode;b(A,Z,Z.scopeId,Z.slotScopeIds,q.parent)}}},_=(A,S,k,B,q,$,Z,z,G=0)=>{for(let H=G;H<A.length;H++){const le=A[H]=z?Hr(A[H]):qn(A[H]);T(null,le,S,k,B,q,$,Z,z)}},E=(A,S,k,B,q,$,Z)=>{const z=S.el=A.el;let{patchFlag:G,dynamicChildren:H,dirs:le}=S;G|=A.patchFlag&16;const ne=A.props||qe,oe=S.props||qe;let he;if(k&&bs(k,!1),(he=oe.onVnodeBeforeUpdate)&&Un(he,k,S,A),le&&ws(S,A,k,"beforeUpdate"),k&&bs(k,!0),(ne.innerHTML&&oe.innerHTML==null||ne.textContent&&oe.textContent==null)&&h(z,""),H?I(A.dynamicChildren,H,z,k,B,md(S,q),$):Z||ve(A,S,z,null,k,B,md(S,q),$,!1),G>0){if(G&16)C(z,ne,oe,k,q);else if(G&2&&ne.class!==oe.class&&i(z,"class",null,oe.class,q),G&4&&i(z,"style",ne.style,oe.style,q),G&8){const ce=S.dynamicProps;for(let ye=0;ye<ce.length;ye++){const Re=ce[ye],At=ne[Re],yt=oe[Re];(yt!==At||Re==="value")&&i(z,Re,At,yt,q,k)}}G&1&&A.children!==S.children&&h(z,S.children)}else!Z&&H==null&&C(z,ne,oe,k,q);((he=oe.onVnodeUpdated)||le)&&Bt(()=>{he&&Un(he,k,S,A),le&&ws(S,A,k,"updated")},B)},I=(A,S,k,B,q,$,Z)=>{for(let z=0;z<S.length;z++){const G=A[z],H=S[z],le=G.el&&(G.type===sn||!Os(G,H)||G.shapeFlag&70)?d(G.el):k;T(G,H,le,null,B,q,$,Z,!0)}},C=(A,S,k,B,q)=>{if(S!==k){if(S!==qe)for(const $ in S)!ga($)&&!($ in k)&&i(A,$,S[$],null,q,B);for(const $ in k){if(ga($))continue;const Z=k[$],z=S[$];Z!==z&&$!=="value"&&i(A,$,z,Z,q,B)}"value"in k&&i(A,"value",S.value,k.value,q)}},R=(A,S,k,B,q,$,Z,z,G)=>{const H=S.el=A?A.el:a(""),le=S.anchor=A?A.anchor:a("");let{patchFlag:ne,dynamicChildren:oe,slotScopeIds:he}=S;he&&(z=z?z.concat(he):he),A==null?(r(H,k,B),r(le,k,B),_(S.children||[],k,le,q,$,Z,z,G)):ne>0&&ne&64&&oe&&A.dynamicChildren?(I(A.dynamicChildren,oe,k,q,$,Z,z),(S.key!=null||q&&S===q.subTree)&&Up(A,S,!0)):ve(A,S,k,le,q,$,Z,z,G)},w=(A,S,k,B,q,$,Z,z,G)=>{S.slotScopeIds=z,A==null?S.shapeFlag&512?q.ctx.activate(S,k,B,Z,G):Ie(S,k,B,q,$,Z,G):nt(A,S,G)},Ie=(A,S,k,B,q,$,Z)=>{const z=A.component=zP(A,B,q);if(th(A)&&(z.ctx.renderer=se),QP(z,!1,Z),z.asyncDep){if(q&&q.registerDep(z,Ne,Z),!A.el){const G=z.subTree=He(qt);O(null,G,S,k)}}else Ne(z,A,S,k,q,$,Z)},nt=(A,S,k)=>{const B=S.component=A.component;if(UP(A,S,k))if(B.asyncDep&&!B.asyncResolved){ue(B,S,k);return}else B.next=S,B.update();else S.el=A.el,B.vnode=S},Ne=(A,S,k,B,q,$,Z)=>{const z=()=>{if(A.isMounted){let{next:ne,bu:oe,u:he,parent:ce,vnode:ye}=A;{const Rt=zI(A);if(Rt){ne&&(ne.el=ye.el,ue(A,ne,Z)),Rt.asyncDep.then(()=>{A.isUnmounted||z()});return}}let Re=ne,At;bs(A,!1),ne?(ne.el=ye.el,ue(A,ne,Z)):ne=ye,oe&&ld(oe),(At=ne.props&&ne.props.onVnodeBeforeUpdate)&&Un(At,ce,ne,ye),bs(A,!0);const yt=F_(A),mn=A.subTree;A.subTree=yt,T(mn,yt,d(mn.el),U(mn),A,q,$),ne.el=yt.el,Re===null&&BP(A,yt.el),he&&Bt(he,q),(At=ne.props&&ne.props.onVnodeUpdated)&&Bt(()=>Un(At,ce,ne,ye),q)}else{let ne;const{el:oe,props:he}=S,{bm:ce,m:ye,parent:Re,root:At,type:yt}=A,mn=Ea(S);bs(A,!1),ce&&ld(ce),!mn&&(ne=he&&he.onVnodeBeforeMount)&&Un(ne,Re,S),bs(A,!0);{At.ce&&At.ce._injectChildStyle(yt);const Rt=A.subTree=F_(A);T(null,Rt,k,B,A,q,$),S.el=Rt.el}if(ye&&Bt(ye,q),!mn&&(ne=he&&he.onVnodeMounted)){const Rt=S;Bt(()=>Un(ne,Re,Rt),q)}(S.shapeFlag&256||Re&&Ea(Re.vnode)&&Re.vnode.shapeFlag&256)&&A.a&&Bt(A.a,q),A.isMounted=!0,S=k=B=null}};A.scope.on();const G=A.effect=new QT(z);A.scope.off();const H=A.update=G.run.bind(G),le=A.job=G.runIfDirty.bind(G);le.i=A,le.id=A.uid,G.scheduler=()=>xp(le),bs(A,!0),H()},ue=(A,S,k)=>{S.component=A;const B=A.vnode.props;A.vnode=S,A.next=null,wP(A,S.props,B,k),SP(A,S.children,k),fs(),R_(A),ps()},ve=(A,S,k,B,q,$,Z,z,G=!1)=>{const H=A&&A.children,le=A?A.shapeFlag:0,ne=S.children,{patchFlag:oe,shapeFlag:he}=S;if(oe>0){if(oe&128){en(H,ne,k,B,q,$,Z,z,G);return}else if(oe&256){_t(H,ne,k,B,q,$,Z,z,G);return}}he&8?(le&16&&bt(H,q,$),ne!==H&&h(k,ne)):le&16?he&16?en(H,ne,k,B,q,$,Z,z,G):bt(H,q,$,!0):(le&8&&h(k,""),he&16&&_(ne,k,B,q,$,Z,z,G))},_t=(A,S,k,B,q,$,Z,z,G)=>{A=A||$i,S=S||$i;const H=A.length,le=S.length,ne=Math.min(H,le);let oe;for(oe=0;oe<ne;oe++){const he=S[oe]=G?Hr(S[oe]):qn(S[oe]);T(A[oe],he,k,null,q,$,Z,z,G)}H>le?bt(A,q,$,!0,!1,ne):_(S,k,B,q,$,Z,z,G,ne)},en=(A,S,k,B,q,$,Z,z,G)=>{let H=0;const le=S.length;let ne=A.length-1,oe=le-1;for(;H<=ne&&H<=oe;){const he=A[H],ce=S[H]=G?Hr(S[H]):qn(S[H]);if(Os(he,ce))T(he,ce,k,null,q,$,Z,z,G);else break;H++}for(;H<=ne&&H<=oe;){const he=A[ne],ce=S[oe]=G?Hr(S[oe]):qn(S[oe]);if(Os(he,ce))T(he,ce,k,null,q,$,Z,z,G);else break;ne--,oe--}if(H>ne){if(H<=oe){const he=oe+1,ce=he<le?S[he].el:B;for(;H<=oe;)T(null,S[H]=G?Hr(S[H]):qn(S[H]),k,ce,q,$,Z,z,G),H++}}else if(H>oe)for(;H<=ne;)Le(A[H],q,$,!0),H++;else{const he=H,ce=H,ye=new Map;for(H=ce;H<=oe;H++){const vt=S[H]=G?Hr(S[H]):qn(S[H]);vt.key!=null&&ye.set(vt.key,H)}let Re,At=0;const yt=oe-ce+1;let mn=!1,Rt=0;const Dr=new Array(yt);for(H=0;H<yt;H++)Dr[H]=0;for(H=he;H<=ne;H++){const vt=A[H];if(At>=yt){Le(vt,q,$,!0);continue}let gn;if(vt.key!=null)gn=ye.get(vt.key);else for(Re=ce;Re<=oe;Re++)if(Dr[Re-ce]===0&&Os(vt,S[Re])){gn=Re;break}gn===void 0?Le(vt,q,$,!0):(Dr[gn-ce]=H+1,gn>=Rt?Rt=gn:mn=!0,T(vt,S[gn],k,null,q,$,Z,z,G),At++)}const xo=mn?DP(Dr):$i;for(Re=xo.length-1,H=yt-1;H>=0;H--){const vt=ce+H,gn=S[vt],jl=vt+1<le?S[vt+1].el:B;Dr[H]===0?T(null,gn,k,jl,q,$,Z,z,G):mn&&(Re<0||H!==xo[Re]?zt(gn,k,jl,2):Re--)}}},zt=(A,S,k,B,q=null)=>{const{el:$,type:Z,transition:z,children:G,shapeFlag:H}=A;if(H&6){zt(A.component.subTree,S,k,B);return}if(H&128){A.suspense.move(S,k,B);return}if(H&64){Z.move(A,S,k,se);return}if(Z===sn){r($,S,k);for(let ne=0;ne<G.length;ne++)zt(G[ne],S,k,B);r(A.anchor,S,k);return}if(Z===gd){x(A,S,k);return}if(B!==2&&H&1&&z)if(B===0)z.beforeEnter($),r($,S,k),Bt(()=>z.enter($),q);else{const{leave:ne,delayLeave:oe,afterLeave:he}=z,ce=()=>r($,S,k),ye=()=>{ne($,()=>{ce(),he&&he()})};oe?oe($,ce,ye):ye()}else r($,S,k)},Le=(A,S,k,B=!1,q=!1)=>{const{type:$,props:Z,ref:z,children:G,dynamicChildren:H,shapeFlag:le,patchFlag:ne,dirs:oe,cacheIndex:he}=A;if(ne===-2&&(q=!1),z!=null&&Jc(z,null,k,A,!0),he!=null&&(S.renderCache[he]=void 0),le&256){S.ctx.deactivate(A);return}const ce=le&1&&oe,ye=!Ea(A);let Re;if(ye&&(Re=Z&&Z.onVnodeBeforeUnmount)&&Un(Re,S,A),le&6)Qt(A.component,k,B);else{if(le&128){A.suspense.unmount(k,B);return}ce&&ws(A,null,S,"beforeUnmount"),le&64?A.type.remove(A,S,k,se,B):H&&!H.hasOnce&&($!==sn||ne>0&&ne&64)?bt(H,S,k,!1,!0):($===sn&&ne&384||!q&&le&16)&&bt(G,S,k),B&&$e(A)}(ye&&(Re=Z&&Z.onVnodeUnmounted)||ce)&&Bt(()=>{Re&&Un(Re,S,A),ce&&ws(A,null,S,"unmounted")},k)},$e=A=>{const{type:S,el:k,anchor:B,transition:q}=A;if(S===sn){Fn(k,B);return}if(S===gd){M(A);return}const $=()=>{s(k),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(A.shapeFlag&1&&q&&!q.persisted){const{leave:Z,delayLeave:z}=q,G=()=>Z(k,$);z?z(A.el,$,G):G()}else $()},Fn=(A,S)=>{let k;for(;A!==S;)k=p(A),s(A),A=k;s(S)},Qt=(A,S,k)=>{const{bum:B,scope:q,job:$,subTree:Z,um:z,m:G,a:H}=A;L_(G),L_(H),B&&ld(B),q.stop(),$&&($.flags|=8,Le(Z,A,S,k)),z&&Bt(z,S),Bt(()=>{A.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},bt=(A,S,k,B=!1,q=!1,$=0)=>{for(let Z=$;Z<A.length;Z++)Le(A[Z],S,k,B,q)},U=A=>{if(A.shapeFlag&6)return U(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const S=p(A.anchor||A.el),k=S&&S[EI];return k?p(k):S};let X=!1;const J=(A,S,k)=>{A==null?S._vnode&&Le(S._vnode,null,null,!0):T(S._vnode||null,A,S,null,null,null,k),S._vnode=A,X||(X=!0,R_(),gI(),X=!1)},se={p:T,um:Le,m:zt,r:$e,mt:Ie,mc:_,pc:ve,pbc:I,n:U,o:n};return{render:J,hydrate:void 0,createApp:EP(J)}}function md({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function bs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function kP(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Up(n,e,t=!1){const r=n.children,s=e.children;if(fe(r)&&fe(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Hr(s[i]),a.el=o.el),!t&&a.patchFlag!==-2&&Up(o,a)),a.type===oh&&(a.el=o.el)}}function DP(n){const e=n.slice(),t=[0];let r,s,i,o,a;const l=n.length;for(r=0;r<l;r++){const u=n[r];if(u!==0){if(s=t[t.length-1],n[s]<u){e[r]=s,t.push(r);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,n[t[a]]<u?i=a+1:o=a;u<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function zI(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:zI(e)}function L_(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const NP=Symbol.for("v-scx"),xP=()=>Ye(NP);function sh(n,e){return Bp(n,null,e)}function hn(n,e,t){return Bp(n,e,t)}function Bp(n,e,t=qe){const{immediate:r,deep:s,flush:i,once:o}=t,a=ut({},t),l=e&&r||!e&&i!=="post";let u;if(qa){if(i==="sync"){const g=xP();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Qn,g.resume=Qn,g.pause=Qn,g}}const h=mt;a.call=(g,v,T)=>On(g,h,v,T);let d=!1;i==="post"?a.scheduler=g=>{Bt(g,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,v)=>{v?g():xp(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=XC(n,e,a);return qa&&(u?u.push(p):l&&p()),p}function OP(n,e,t){const r=this.proxy,s=st(n)?n.includes(".")?QI(r,n):()=>r[n]:n.bind(r,r);let i;pe(e)?i=e:(i=e.handler,t=e);const o=vl(this),a=Bp(s,i.bind(r),t);return o(),a}function QI(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const VP=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${wn(e)}Modifiers`]||n[`${ci(e)}Modifiers`];function MP(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||qe;let s=t;const i=e.startsWith("update:"),o=i&&VP(r,e.slice(7));o&&(o.trim&&(s=t.map(h=>st(h)?h.trim():h)),o.number&&(s=t.map(gC)));let a,l=r[a=ad(e)]||r[a=ad(wn(e))];!l&&i&&(l=r[a=ad(ci(e))]),l&&On(l,n,6,s);const u=r[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,On(u,n,6,s)}}function YI(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let o={},a=!1;if(!pe(n)){const l=u=>{const h=YI(u,e,!0);h&&(a=!0,ut(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!a?(Ke(n)&&r.set(n,null),null):(fe(i)?i.forEach(l=>o[l]=null):ut(o,i),Ke(n)&&r.set(n,o),o)}function ih(n,e){return!n||!Gu(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(n,e[0].toLowerCase()+e.slice(1))||Oe(n,ci(e))||Oe(n,e))}function F_(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:p,setupState:g,ctx:v,inheritAttrs:T}=n,P=Xc(n);let O,V;try{if(t.shapeFlag&4){const M=s||r,W=M;O=qn(u.call(W,M,h,d,g,p,v)),V=a}else{const M=e;O=qn(M.length>1?M(d,{attrs:a,slots:o,emit:l}):M(d,null)),V=e.props?a:LP(a)}}catch(M){Ia.length=0,Ju(M,n,1),O=He(qt)}let x=O;if(V&&T!==!1){const M=Object.keys(V),{shapeFlag:W}=x;M.length&&W&7&&(i&&M.some(gp)&&(V=FP(V,i)),x=os(x,V,!1,!0))}return t.dirs&&(x=os(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&Ys(x,t.transition),O=x,Xc(P),O}const LP=n=>{let e;for(const t in n)(t==="class"||t==="style"||Gu(t))&&((e||(e={}))[t]=n[t]);return e},FP=(n,e)=>{const t={};for(const r in n)(!gp(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function UP(n,e,t){const{props:r,children:s,component:i}=n,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?U_(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==r[p]&&!ih(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?U_(r,o,u):!0:!!o;return!1}function U_(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!ih(t,i))return!0}return!1}function BP({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const XI=n=>n.__isSuspense;function $P(n,e){e&&e.pendingBranch?fe(n)?e.effects.push(...n):e.effects.push(n):eP(n)}const sn=Symbol.for("v-fgt"),oh=Symbol.for("v-txt"),qt=Symbol.for("v-cmt"),gd=Symbol.for("v-stc"),Ia=[];let ln=null;function JI(n=!1){Ia.push(ln=n?null:[])}function jP(){Ia.pop(),ln=Ia[Ia.length-1]||null}let $a=1;function B_(n,e=!1){$a+=n,n<0&&ln&&e&&(ln.hasOnce=!0)}function ZI(n){return n.dynamicChildren=$a>0?ln||$i:null,jP(),$a>0&&ln&&ln.push(n),n}function J9(n,e,t,r,s,i){return ZI(nw(n,e,t,r,s,i,!0))}function ew(n,e,t,r,s){return ZI(He(n,e,t,r,s,!0))}function ja(n){return n?n.__v_isVNode===!0:!1}function Os(n,e){return n.type===e.type&&n.key===e.key}const tw=({key:n})=>n??null,Pc=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?st(n)||Ze(n)||pe(n)?{i:Ht,r:n,k:e,f:!!t}:n:null);function nw(n,e=null,t=null,r=0,s=null,i=n===sn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&tw(e),ref:e&&Pc(e),scopeId:yI,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ht};return a?($p(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=st(t)?8:16),$a>0&&!o&&ln&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ln.push(l),l}const He=qP;function qP(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===dP)&&(n=qt),ja(n)){const a=os(n,e,!0);return t&&$p(a,t),$a>0&&!i&&ln&&(a.shapeFlag&6?ln[ln.indexOf(n)]=a:ln.push(a)),a.patchFlag=-2,a}if(ek(n)&&(n=n.__vccOpts),e){e=WP(e);let{class:a,style:l}=e;a&&!st(a)&&(e.class=Ep(a)),Ke(l)&&(kp(l)&&!fe(l)&&(l=ut({},l)),e.style=vp(l))}const o=st(n)?1:XI(n)?128:TI(n)?64:Ke(n)?4:pe(n)?2:0;return nw(n,e,t,r,s,o,i,!0)}function WP(n){return n?kp(n)||$I(n)?ut({},n):n:null}function os(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=n,u=e?rw(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&tw(u),ref:e&&e.ref?t&&i?fe(i)?i.concat(Pc(e)):[i,Pc(e)]:Pc(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==sn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&os(n.ssContent),ssFallback:n.ssFallback&&os(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&Ys(h,l.clone(h)),h}function HP(n=" ",e=0){return He(oh,null,n,e)}function Z9(n="",e=!1){return e?(JI(),ew(qt,null,n)):He(qt,null,n)}function qn(n){return n==null||typeof n=="boolean"?He(qt):fe(n)?He(sn,null,n.slice()):ja(n)?Hr(n):He(oh,null,String(n))}function Hr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:os(n)}function $p(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(fe(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),$p(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!$I(e)?e._ctx=Ht:s===3&&Ht&&(Ht.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:Ht},t=32):(e=String(e),r&64?(t=16,e=[HP(e)]):t=8);n.children=e,n.shapeFlag|=t}function rw(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ep([e.class,r.class]));else if(s==="style")e.style=vp([e.style,r.style]);else if(Gu(s)){const i=e[s],o=r[s];o&&i!==o&&!(fe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Un(n,e,t,r=null){On(n,e,7,[t,r])}const KP=FI();let GP=0;function zP(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||KP,i={uid:GP++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zT(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qI(r,s),emitsOptions:YI(r,s),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:r.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=MP.bind(null,i),n.ce&&n.ce(i),i}let mt=null;const yl=()=>mt||Ht;let eu,af;{const n=Yu(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};eu=e("__VUE_INSTANCE_SETTERS__",t=>mt=t),af=e("__VUE_SSR_SETTERS__",t=>qa=t)}const vl=n=>{const e=mt;return eu(n),n.scope.on(),()=>{n.scope.off(),eu(e)}},$_=()=>{mt&&mt.scope.off(),eu(null)};function sw(n){return n.vnode.shapeFlag&4}let qa=!1;function QP(n,e=!1,t=!1){e&&af(e);const{props:r,children:s}=n.vnode,i=sw(n);IP(n,r,i,e),RP(n,s,t);const o=i?YP(n,e):void 0;return e&&af(!1),o}function YP(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,fP);const{setup:r}=t;if(r){fs();const s=n.setupContext=r.length>1?JP(n):null,i=vl(n),o=_l(r,n,0,[n.props,s]),a=$T(o);if(ps(),i(),(a||n.sp)&&!Ea(n)&&PI(n),a){if(o.then($_,$_),e)return o.then(l=>{j_(n,l)}).catch(l=>{Ju(l,n,0)});n.asyncDep=o}else j_(n,o)}else iw(n)}function j_(n,e,t){pe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ke(e)&&(n.setupState=hI(e)),iw(n)}function iw(n,e,t){const r=n.type;n.render||(n.render=r.render||Qn);{const s=vl(n);fs();try{pP(n)}finally{ps(),s()}}}const XP={get(n,e){return Dt(n,"get",""),n[e]}};function JP(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,XP),slots:n.slots,emit:n.emit,expose:e}}function ah(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(hI(Dp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ta)return Ta[t](n)},has(e,t){return t in e||t in Ta}})):n.proxy}function ZP(n,e=!0){return pe(n)?n.displayName||n.name:n.name||e&&n.__name}function ek(n){return pe(n)&&"__vccOpts"in n}const de=(n,e)=>QC(n,e,qa);function lh(n,e,t){const r=arguments.length;return r===2?Ke(e)&&!fe(e)?ja(e)?He(n,null,[e]):He(n,e):He(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&ja(t)&&(t=[t]),He(n,e,t))}const tk="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lf;const q_=typeof window<"u"&&window.trustedTypes;if(q_)try{lf=q_.createPolicy("vue",{createHTML:n=>n})}catch{}const ow=lf?n=>lf.createHTML(n):n=>n,nk="http://www.w3.org/2000/svg",rk="http://www.w3.org/1998/Math/MathML",hr=typeof document<"u"?document:null,W_=hr&&hr.createElement("template"),sk={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?hr.createElementNS(nk,n):e==="mathml"?hr.createElementNS(rk,n):t?hr.createElement(n,{is:t}):hr.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>hr.createTextNode(n),createComment:n=>hr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>hr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const o=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{W_.innerHTML=ow(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const a=W_.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Vr="transition",Go="animation",Yi=Symbol("_vtc"),aw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},lw=ut({},AI,aw),ik=n=>(n.displayName="Transition",n.props=lw,n),e6=ik((n,{slots:e})=>lh(rP,cw(n),e)),As=(n,e=[])=>{fe(n)?n.forEach(t=>t(...e)):n&&n(...e)},H_=n=>n?fe(n)?n.some(e=>e.length>1):n.length>1:!1;function cw(n){const e={};for(const R in n)R in aw||(e[R]=n[R]);if(n.css===!1)return e;const{name:t="v",type:r,duration:s,enterFromClass:i=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:p=`${t}-leave-active`,leaveToClass:g=`${t}-leave-to`}=n,v=ok(s),T=v&&v[0],P=v&&v[1],{onBeforeEnter:O,onEnter:V,onEnterCancelled:x,onLeave:M,onLeaveCancelled:W,onBeforeAppear:j=O,onAppear:b=V,onAppearCancelled:_=x}=e,E=(R,w,Ie,nt)=>{R._enterCancelled=nt,$r(R,w?h:a),$r(R,w?u:o),Ie&&Ie()},I=(R,w)=>{R._isLeaving=!1,$r(R,d),$r(R,g),$r(R,p),w&&w()},C=R=>(w,Ie)=>{const nt=R?b:V,Ne=()=>E(w,R,Ie);As(nt,[w,Ne]),K_(()=>{$r(w,R?l:i),Bn(w,R?h:a),H_(nt)||G_(w,r,T,Ne)})};return ut(e,{onBeforeEnter(R){As(O,[R]),Bn(R,i),Bn(R,o)},onBeforeAppear(R){As(j,[R]),Bn(R,l),Bn(R,u)},onEnter:C(!1),onAppear:C(!0),onLeave(R,w){R._isLeaving=!0;const Ie=()=>I(R,w);Bn(R,d),R._enterCancelled?(Bn(R,p),cf()):(cf(),Bn(R,p)),K_(()=>{R._isLeaving&&($r(R,d),Bn(R,g),H_(M)||G_(R,r,P,Ie))}),As(M,[R,Ie])},onEnterCancelled(R){E(R,!1,void 0,!0),As(x,[R])},onAppearCancelled(R){E(R,!0,void 0,!0),As(_,[R])},onLeaveCancelled(R){I(R),As(W,[R])}})}function ok(n){if(n==null)return null;if(Ke(n))return[_d(n.enter),_d(n.leave)];{const e=_d(n);return[e,e]}}function _d(n){return _C(n)}function Bn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Yi]||(n[Yi]=new Set)).add(e)}function $r(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[Yi];t&&(t.delete(e),t.size||(n[Yi]=void 0))}function K_(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let ak=0;function G_(n,e,t,r){const s=n._endId=++ak,i=()=>{s===n._endId&&r()};if(t!=null)return setTimeout(i,t);const{type:o,timeout:a,propCount:l}=uw(n,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{n.removeEventListener(u,p),i()},p=g=>{g.target===n&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},a+1),n.addEventListener(u,p)}function uw(n,e){const t=window.getComputedStyle(n),r=v=>(t[v]||"").split(", "),s=r(`${Vr}Delay`),i=r(`${Vr}Duration`),o=z_(s,i),a=r(`${Go}Delay`),l=r(`${Go}Duration`),u=z_(a,l);let h=null,d=0,p=0;e===Vr?o>0&&(h=Vr,d=o,p=i.length):e===Go?u>0&&(h=Go,d=u,p=l.length):(d=Math.max(o,u),h=d>0?o>u?Vr:Go:null,p=h?h===Vr?i.length:l.length:0);const g=h===Vr&&/\b(transform|all)(,|$)/.test(r(`${Vr}Property`).toString());return{type:h,timeout:d,propCount:p,hasTransform:g}}function z_(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>Q_(t)+Q_(n[r])))}function Q_(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function cf(){return document.body.offsetHeight}function lk(n,e,t){const r=n[Yi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const tu=Symbol("_vod"),hw=Symbol("_vsh"),t6={beforeMount(n,{value:e},{transition:t}){n[tu]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):zo(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:r}){!e!=!t&&(r?e?(r.beforeEnter(n),zo(n,!0),r.enter(n)):r.leave(n,()=>{zo(n,!1)}):zo(n,e))},beforeUnmount(n,{value:e}){zo(n,e)}};function zo(n,e){n.style.display=e?n[tu]:"none",n[hw]=!e}const ck=Symbol(""),uk=/(^|;)\s*display\s*:/;function hk(n,e,t){const r=n.style,s=st(t);let i=!1;if(t&&!s){if(e)if(st(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&kc(r,a,"")}else for(const o in e)t[o]==null&&kc(r,o,"");for(const o in t)o==="display"&&(i=!0),kc(r,o,t[o])}else if(s){if(e!==t){const o=r[ck];o&&(t+=";"+o),r.cssText=t,i=uk.test(t)}}else e&&n.removeAttribute("style");tu in n&&(n[tu]=i?r.display:"",n[hw]&&(r.display="none"))}const Y_=/\s*!important$/;function kc(n,e,t){if(fe(t))t.forEach(r=>kc(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=dk(n,e);Y_.test(t)?n.setProperty(ci(r),t.replace(Y_,""),"important"):n[r]=t}}const X_=["Webkit","Moz","ms"],yd={};function dk(n,e){const t=yd[e];if(t)return t;let r=wn(e);if(r!=="filter"&&r in n)return yd[e]=r;r=ml(r);for(let s=0;s<X_.length;s++){const i=X_[s]+r;if(i in n)return yd[e]=i}return e}const J_="http://www.w3.org/1999/xlink";function Z_(n,e,t,r,s,i=wC(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(J_,e.slice(6,e.length)):n.setAttributeNS(J_,e,t):t==null||i&&!HT(t)?n.removeAttribute(e):n.setAttribute(e,i?"":ds(t)?String(t):t)}function ey(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ow(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=HT(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function fk(n,e,t,r){n.addEventListener(e,t,r)}function pk(n,e,t,r){n.removeEventListener(e,t,r)}const ty=Symbol("_vei");function mk(n,e,t,r,s=null){const i=n[ty]||(n[ty]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=gk(e);if(r){const u=i[e]=vk(r,s);fk(n,a,u,l)}else o&&(pk(n,a,o,l),i[e]=void 0)}}const ny=/(?:Once|Passive|Capture)$/;function gk(n){let e;if(ny.test(n)){e={};let r;for(;r=n.match(ny);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ci(n.slice(2)),e]}let vd=0;const _k=Promise.resolve(),yk=()=>vd||(_k.then(()=>vd=0),vd=Date.now());function vk(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;On(Ek(r,t.value),e,5,[r])};return t.value=n,t.attached=yk(),t}function Ek(n,e){if(fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ry=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Tk=(n,e,t,r,s,i)=>{const o=s==="svg";e==="class"?lk(n,r,o):e==="style"?hk(n,t,r):Gu(e)?gp(e)||mk(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ik(n,e,r,o))?(ey(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Z_(n,e,r,o,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!st(r))?ey(n,wn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Z_(n,e,r,o))};function Ik(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&ry(e)&&pe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ry(e)&&st(t)?!1:e in n}const dw=new WeakMap,fw=new WeakMap,nu=Symbol("_moveCb"),sy=Symbol("_enterCb"),wk=n=>(delete n.props.mode,n),bk=wk({name:"TransitionGroup",props:ut({},lw,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=yl(),r=bI();let s,i;return xI(()=>{if(!s.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!Ck(s[0].el,t.vnode.el,o))return;s.forEach(Ak),s.forEach(Rk);const a=s.filter(Sk);cf(),a.forEach(l=>{const u=l.el,h=u.style;Bn(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const d=u[nu]=p=>{p&&p.target!==u||(!p||/transform$/.test(p.propertyName))&&(u.removeEventListener("transitionend",d),u[nu]=null,$r(u,o))};u.addEventListener("transitionend",d)})}),()=>{const o=we(n),a=cw(o);let l=o.tag||sn;if(s=[],i)for(let u=0;u<i.length;u++){const h=i[u];h.el&&h.el instanceof Element&&(s.push(h),Ys(h,Ba(h,a,r,t)),dw.set(h,h.el.getBoundingClientRect()))}i=e.default?Op(e.default()):[];for(let u=0;u<i.length;u++){const h=i[u];h.key!=null&&Ys(h,Ba(h,a,r,t))}return He(l,null,i)}}}),n6=bk;function Ak(n){const e=n.el;e[nu]&&e[nu](),e[sy]&&e[sy]()}function Rk(n){fw.set(n,n.el.getBoundingClientRect())}function Sk(n){const e=dw.get(n),t=fw.get(n),r=e.left-t.left,s=e.top-t.top;if(r||s){const i=n.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",n}}function Ck(n,e,t){const r=n.cloneNode(),s=n[Yi];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),t.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=uw(r);return i.removeChild(r),o}const Pk=["ctrl","shift","alt","meta"],kk={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Pk.some(t=>n[`${t}Key`]&&!e.includes(t))},r6=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=kk[e[o]];if(a&&a(s,e))return}return n(s,...i)})},Dk=ut({patchProp:Tk},sk);let iy;function Nk(){return iy||(iy=CP(Dk))}const xk=(...n)=>{const e=Nk().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Vk(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Ok(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ok(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Vk(n){return st(n)?document.querySelector(n):n}function Mk(n,e){let t;function r(){t=gl(),t.run(()=>e.length?e(()=>{t==null||t.stop(),r()}):e())}hn(n,s=>{s&&!t?r():s||(t==null||t.stop(),t=void 0)},{immediate:!0}),Ip(()=>{t==null||t.stop()})}const Jt=typeof window<"u",s6=Jt&&"IntersectionObserver"in window,Lk=Jt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function oy(n,e,t){Fk(n,e),e.set(n,t)}function Fk(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Uk(n,e,t){return n.set(pw(n,e),t),t}function Rs(n,e){return n.get(pw(n,e))}function pw(n,e,t){if(typeof n=="function"?n===e:n.has(e))return arguments.length<3?e:t;throw new TypeError("Private element is not present on this object")}function mw(n,e,t){const r=e.length-1;if(r<0)return n===void 0?t:n;for(let s=0;s<r;s++){if(n==null)return t;n=n[e[s]]}return n==null||n[e[r]]===void 0?t:n[e[r]]}function Bk(n,e){if(n===e)return!0;if(n instanceof Date&&e instanceof Date&&n.getTime()!==e.getTime()||n!==Object(n)||e!==Object(e))return!1;const t=Object.keys(n);return t.length!==Object.keys(e).length?!1:t.every(r=>Bk(n[r],e[r]))}function uf(n,e,t){return n==null||!e||typeof e!="string"?t:n[e]!==void 0?n[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),mw(n,e.split("."),t))}function i6(n,e,t){if(e===!0)return n===void 0?t:n;if(e==null||typeof e=="boolean")return t;if(n!==Object(n)){if(typeof e!="function")return t;const s=e(n,t);return typeof s>"u"?t:s}if(typeof e=="string")return uf(n,e,t);if(Array.isArray(e))return mw(n,e,t);if(typeof e!="function")return t;const r=e(n,t);return typeof r>"u"?t:r}function gw(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:n},(t,r)=>e+r)}function cc(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(n==null||n===""))return isNaN(+n)?String(n):isFinite(+n)?`${Number(n)}${e}`:void 0}function o6(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)}function ay(n){let e;return n!==null&&typeof n=="object"&&((e=Object.getPrototypeOf(n))===Object.prototype||e===null)}function _w(n){if(n&&"$el"in n){const e=n.$el;return(e==null?void 0:e.nodeType)===Node.TEXT_NODE?e.nextElementSibling:e}return n}const a6=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),l6=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function c6(n){return Object.keys(n)}function Ed(n,e){return e.every(t=>n.hasOwnProperty(t))}function $k(n,e){const t={};for(const r of e)Object.hasOwn(n,r)&&(t[r]=n[r]);return t}function ly(n,e,t){const r=Object.create(null),s=Object.create(null);for(const i in n)e.some(o=>o instanceof RegExp?o.test(i):o===i)?r[i]=n[i]:s[i]=n[i];return[r,s]}function jk(n,e){const t={...n};return e.forEach(r=>delete t[r]),t}const yw=/^on[^a-z]/,u6=n=>yw.test(n),qk=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"];function h6(n){const[e,t]=ly(n,[yw]),r=jk(e,qk),[s,i]=ly(t,["class","style","id",/^data-/]);return Object.assign(s,e),Object.assign(i,r),[s,i]}function d6(n){return n==null?[]:Array.isArray(n)?n:[n]}function f6(n,e){let t=0;const r=function(){for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];clearTimeout(t),t=setTimeout(()=>n(...i),an(e))};return r.clear=()=>{clearTimeout(t)},r.immediate=n,r}function vw(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(t,n))}function cy(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return n+t.repeat(Math.max(0,e-n.length))}function uy(n,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-n.length))+n}function Wk(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const t=[];let r=0;for(;r<n.length;)t.push(n.substr(r,e)),r+=e;return t}function Vt(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const r={};for(const s in n)r[s]=n[s];for(const s in e){const i=n[s],o=e[s];if(ay(i)&&ay(o)){r[s]=Vt(i,o,t);continue}if(t&&Array.isArray(i)&&Array.isArray(o)){r[s]=t(i,o);continue}r[s]=o}return r}function Hk(n){return n.map(e=>e.type===sn?Hk(e.children):e).flat()}function Ws(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Ws.cache.has(n))return Ws.cache.get(n);const e=n.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Ws.cache.set(n,e),e}Ws.cache=new Map;function aa(n,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(t=>aa(n,t)).flat(1);if(e.suspense)return aa(n,e.ssContent);if(Array.isArray(e.children))return e.children.map(t=>aa(n,t)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(n))return[e.component];if(e.component.subTree)return aa(n,e.component.subTree).flat(1)}return[]}var uc=new WeakMap,Ti=new WeakMap;class p6{constructor(e){oy(this,uc,[]),oy(this,Ti,0),this.size=e}push(e){Rs(uc,this)[Rs(Ti,this)]=e,Uk(Ti,this,(Rs(Ti,this)+1)%this.size)}values(){return Rs(uc,this).slice(Rs(Ti,this)).concat(Rs(uc,this).slice(0,Rs(Ti,this)))}}function m6(n){const e=Yt({}),t=de(n);return sh(()=>{for(const r in t.value)e[r]=t.value[r]},{flush:"sync"}),Np(e)}function g6(n,e){return n.includes(e)}function _6(n){return n[2].toLowerCase()+n.slice(3)}const y6=()=>[Function,Array];function v6(n,e){return e="on"+ml(e),!!(n[e]||n[`${e}Once`]||n[`${e}Capture`]||n[`${e}OnceCapture`]||n[`${e}CaptureOnce`])}function E6(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];if(Array.isArray(n))for(const s of n)s(...t);else typeof n=="function"&&n(...t)}function Kk(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const t=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(r=>`${r}${e?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...n.querySelectorAll(t)]}function Gk(n,e,t){let r,s=n.indexOf(document.activeElement);const i=e==="next"?1:-1;do s+=i,r=n[s];while((!r||r.offsetParent==null||!((t==null?void 0:t(r))??!0))&&s<n.length&&s>=0);return r}function zk(n,e){var r,s,i,o;const t=Kk(n);if(!e)(n===document.activeElement||!n.contains(document.activeElement))&&((r=t[0])==null||r.focus());else if(e==="first")(s=t[0])==null||s.focus();else if(e==="last")(i=t.at(-1))==null||i.focus();else if(typeof e=="number")(o=t[e])==null||o.focus();else{const a=Gk(t,e);a?a.focus():zk(n,e==="next"?"first":"last")}}function T6(n,e){if(!(Jt&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${e})`)))return null;try{return!!n&&n.matches(e)}catch{return null}}function Qk(n){return n.some(e=>ja(e)?e.type===qt?!1:e.type!==sn||Qk(e.children):!0)?n:null}function I6(n,e){if(!Jt||n===0)return e(),()=>{};const t=window.setTimeout(e,n);return()=>window.clearTimeout(t)}function w6(n,e){const t=n.clientX,r=n.clientY,s=e.getBoundingClientRect(),i=s.left,o=s.top,a=s.right,l=s.bottom;return t>=i&&t<=a&&r>=o&&r<=l}function Yk(){const n=Dn(),e=t=>{n.value=t};return Object.defineProperty(e,"value",{enumerable:!0,get:()=>n.value,set:t=>n.value=t}),Object.defineProperty(e,"el",{enumerable:!0,get:()=>_w(n.value)}),e}function b6(n){const e=n.key.length===1,t=!n.ctrlKey&&!n.metaKey&&!n.altKey;return e&&t}function A6(n){return typeof n=="string"||typeof n=="number"||typeof n=="boolean"||typeof n=="bigint"}const Ii=2.4,hy=.2126729,dy=.7151522,fy=.072175,Xk=.55,Jk=.58,Zk=.57,eD=.62,hc=.03,py=1.45,tD=5e-4,nD=1.25,rD=1.25,sD=.078,my=12.82051282051282,dc=.06,iD=.001;function gy(n,e){const t=(n.r/255)**Ii,r=(n.g/255)**Ii,s=(n.b/255)**Ii,i=(e.r/255)**Ii,o=(e.g/255)**Ii,a=(e.b/255)**Ii;let l=t*hy+r*dy+s*fy,u=i*hy+o*dy+a*fy;if(l<=hc&&(l+=(hc-l)**py),u<=hc&&(u+=(hc-u)**py),Math.abs(u-l)<tD)return 0;let h;if(u>l){const d=(u**Xk-l**Jk)*nD;h=d<iD?0:d<sD?d-d*my*dc:d-dc}else{const d=(u**eD-l**Zk)*rD;h=d>-.001?0:d>-.078?d-d*my*dc:d+dc}return h*100}function R6(n,e){e=Array.isArray(e)?e.slice(0,-1).map(t=>`'${t}'`).join(", ")+` or '${e.at(-1)}'`:`'${e}'`}const ru=.20689655172413793,oD=n=>n>ru**3?Math.cbrt(n):n/(3*ru**2)+4/29,aD=n=>n>ru?n**3:3*ru**2*(n-4/29);function Ew(n){const e=oD,t=e(n[1]);return[116*t-16,500*(e(n[0]/.95047)-t),200*(t-e(n[2]/1.08883))]}function Tw(n){const e=aD,t=(n[0]+16)/116;return[e(t+n[1]/500)*.95047,e(t),e(t-n[2]/200)*1.08883]}const lD=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],cD=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055,uD=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],hD=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4;function Iw(n){const e=Array(3),t=cD,r=lD;for(let s=0;s<3;++s)e[s]=Math.round(vw(t(r[s][0]*n[0]+r[s][1]*n[1]+r[s][2]*n[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function jp(n){let{r:e,g:t,b:r}=n;const s=[0,0,0],i=hD,o=uD;e=i(e/255),t=i(t/255),r=i(r/255);for(let a=0;a<3;++a)s[a]=o[a][0]*e+o[a][1]*t+o[a][2]*r;return s}function dD(n){return!!n&&/^(#|var\(--|(rgb|hsl)a?\()/.test(n)}function S6(n){return dD(n)&&!/^((rgb|hsl)a?\()?var\(--/.test(n)}const _y=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,fD={rgb:(n,e,t,r)=>({r:n,g:e,b:t,a:r}),rgba:(n,e,t,r)=>({r:n,g:e,b:t,a:r}),hsl:(n,e,t,r)=>yy({h:n,s:e,l:t,a:r}),hsla:(n,e,t,r)=>yy({h:n,s:e,l:t,a:r}),hsv:(n,e,t,r)=>Wa({h:n,s:e,v:t,a:r}),hsva:(n,e,t,r)=>Wa({h:n,s:e,v:t,a:r})};function pr(n){if(typeof n=="number")return{r:(n&16711680)>>16,g:(n&65280)>>8,b:n&255};if(typeof n=="string"&&_y.test(n)){const{groups:e}=n.match(_y),{fn:t,values:r}=e,s=r.split(/,\s*/).map(i=>i.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(t)?parseFloat(i)/100:parseFloat(i));return fD[t](...s)}else if(typeof n=="string"){let e=n.startsWith("#")?n.slice(1):n;return[3,4].includes(e.length)?e=e.split("").map(t=>t+t).join(""):[6,8].includes(e.length),mD(e)}else if(typeof n=="object"){if(Ed(n,["r","g","b"]))return n;if(Ed(n,["h","s","l"]))return Wa(ww(n));if(Ed(n,["h","s","v"]))return Wa(n)}throw new TypeError(`Invalid color: ${n==null?n:String(n)||n.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Wa(n){const{h:e,s:t,v:r,a:s}=n,i=a=>{const l=(a+e/60)%6;return r-r*t*Math.max(Math.min(l,4-l,1),0)},o=[i(5),i(3),i(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:s}}function yy(n){return Wa(ww(n))}function ww(n){const{h:e,s:t,l:r,a:s}=n,i=r+t*Math.min(r,1-r),o=i===0?0:2-2*r/i;return{h:e,s:o,v:i,a:s}}function fc(n){const e=Math.round(n).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function pD(n){let{r:e,g:t,b:r,a:s}=n;return`#${[fc(e),fc(t),fc(r),s!==void 0?fc(Math.round(s*255)):""].join("")}`}function mD(n){n=gD(n);let[e,t,r,s]=Wk(n,2).map(i=>parseInt(i,16));return s=s===void 0?s:s/255,{r:e,g:t,b:r,a:s}}function gD(n){return n.startsWith("#")&&(n=n.slice(1)),n=n.replace(/([^0-9a-f])/gi,"F"),(n.length===3||n.length===4)&&(n=n.split("").map(e=>e+e).join("")),n.length!==6&&(n=cy(cy(n,6),8,"F")),n}function _D(n,e){const t=Ew(jp(n));return t[0]=t[0]+e*10,Iw(Tw(t))}function yD(n,e){const t=Ew(jp(n));return t[0]=t[0]-e*10,Iw(Tw(t))}function vD(n){const e=pr(n);return jp(e)[1]}function ED(n){const e=Math.abs(gy(pr(0),pr(n)));return Math.abs(gy(pr(16777215),pr(n)))>Math.min(e,50)?"#fff":"#000"}function ms(n,e){return t=>Object.keys(n).reduce((r,s)=>{const o=typeof n[s]=="object"&&n[s]!=null&&!Array.isArray(n[s])?n[s]:{type:n[s]};return t&&s in t?r[s]={...o,default:t[s]}:r[s]=o,e&&!r[s].source&&(r[s].source=e),r},{})}const TD=ms({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function rr(n,e){const t=yl();if(!t)throw new Error(`[Vuetify] ${n} must be called from inside a setup function`);return t}function ID(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=rr(n).type;return Ws((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let bw=0,Dc=new WeakMap;function qp(){const n=rr("getUid");if(Dc.has(n))return Dc.get(n);{const e=bw++;return Dc.set(n,e),e}}qp.reset=()=>{bw=0,Dc=new WeakMap};function wD(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:rr("injectSelf");const{provides:t}=e;if(t&&n in t)return t[n]}const Xi=Symbol.for("vuetify:defaults");function bD(n){return ct(n)}function Wp(){const n=Ye(Xi);if(!n)throw new Error("[Vuetify] Could not find defaults instance");return n}function C6(n,e){const t=Wp(),r=ct(n),s=de(()=>{if(an(e==null?void 0:e.disabled))return t.value;const o=an(e==null?void 0:e.scoped),a=an(e==null?void 0:e.reset),l=an(e==null?void 0:e.root);if(r.value==null&&!(o||a||l))return t.value;let u=Vt(r.value,{prev:t.value});if(o)return u;if(a||l){const h=Number(a||1/0);for(let d=0;d<=h&&!(!u||!("prev"in u));d++)u=u.prev;return u&&typeof l=="string"&&l in u&&(u=Vt(Vt(u,{prev:u}),u[l])),u}return u.prev?Vt(u.prev,u):u});return Tr(Xi,s),s}function AD(n,e){var t,r;return typeof((t=n.props)==null?void 0:t[e])<"u"||typeof((r=n.props)==null?void 0:r[Ws(e)])<"u"}function RD(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Wp();const r=rr("useDefaults");if(e=e??r.type.name??r.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const s=de(()=>{var l;return(l=t.value)==null?void 0:l[n._as??e]}),i=new Proxy(n,{get(l,u){var d,p,g,v,T,P,O;const h=Reflect.get(l,u);return u==="class"||u==="style"?[(d=s.value)==null?void 0:d[u],h].filter(V=>V!=null):typeof u=="string"&&!AD(r.vnode,u)?((p=s.value)==null?void 0:p[u])!==void 0?(g=s.value)==null?void 0:g[u]:((T=(v=t.value)==null?void 0:v.global)==null?void 0:T[u])!==void 0?(O=(P=t.value)==null?void 0:P.global)==null?void 0:O[u]:h:h}}),o=Dn();sh(()=>{if(s.value){const l=Object.entries(s.value).filter(u=>{let[h]=u;return h.startsWith(h[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function a(){const l=wD(Xi,r);Tr(Xi,de(()=>o.value?Vt((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:i,provideSubDefaults:a}}function El(n){if(n._setup=n._setup??n.setup,!n.name)return n;if(n._setup){n.props=ms(n.props??{},n.name)();const e=Object.keys(n.props).filter(t=>t!=="class"&&t!=="style");n.filterProps=function(r){return $k(r,e)},n.props._as=String,n.setup=function(r,s){const i=Wp();if(!i.value)return n._setup(r,s);const{props:o,provideSubDefaults:a}=RD(r,r._as??n.name,i),l=n._setup(o,s);return a(),l}}return n}function Aw(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(n?El:eh)(e)}function SD(n){const e=rr("useRender");e.render=n}function CD(n,e,t){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:d=>d,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:d=>d;const i=rr("useProxiedModel"),o=ct(n[e]!==void 0?n[e]:t),a=Ws(e),u=de(a!==e?()=>{var d,p,g,v;return n[e],!!(((d=i.vnode.props)!=null&&d.hasOwnProperty(e)||(p=i.vnode.props)!=null&&p.hasOwnProperty(a))&&((g=i.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${e}`)||(v=i.vnode.props)!=null&&v.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var d,p;return n[e],!!((d=i.vnode.props)!=null&&d.hasOwnProperty(e)&&((p=i.vnode.props)!=null&&p.hasOwnProperty(`onUpdate:${e}`)))});Mk(()=>!u.value,()=>{hn(()=>n[e],d=>{o.value=d})});const h=de({get(){const d=n[e];return r(u.value?d:o.value)},set(d){const p=s(d),g=we(u.value?n[e]:o.value);g===p||r(g)===d||(o.value=p,i==null||i.emit(`update:${e}`,p))}});return Object.defineProperty(h,"externalValue",{get:()=>u.value?n[e]:o.value}),h}const PD={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},fileUpload:{title:"Drag and drop files here",divider:"or",browse:"Browse Files"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},vy="$vuetify.",Ey=(n,e)=>n.replace(/\{(\d+)\}/g,(t,r)=>String(e[+r])),Rw=(n,e,t)=>function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];if(!r.startsWith(vy))return Ey(r,i);const a=r.replace(vy,""),l=n.value&&t.value[n.value],u=e.value&&t.value[e.value];let h=uf(l,a,null);return h||(`${r}${n.value}`,h=uf(u,a,null)),h||(h=r),typeof h!="string"&&(h=r),Ey(h,i)};function Sw(n,e){return(t,r)=>new Intl.NumberFormat([n.value,e.value],r).format(t)}function Td(n,e,t){const r=CD(n,e,n[e]??t.value);return r.value=n[e]??t.value,hn(t,s=>{n[e]==null&&(r.value=t.value)}),r}function Cw(n){return e=>{const t=Td(e,"locale",n.current),r=Td(e,"fallback",n.fallback),s=Td(e,"messages",n.messages);return{name:"vuetify",current:t,fallback:r,messages:s,t:Rw(t,r,s),n:Sw(t,r),provide:Cw({current:t,fallback:r,messages:s})}}}function kD(n){const e=Dn((n==null?void 0:n.locale)??"en"),t=Dn((n==null?void 0:n.fallback)??"en"),r=ct({en:PD,...n==null?void 0:n.messages});return{name:"vuetify",current:e,fallback:t,messages:r,t:Rw(e,t,r),n:Sw(e,t),provide:Cw({current:e,fallback:t,messages:r})}}const su=Symbol.for("vuetify:locale");function DD(n){return n.name!=null}function ND(n){const e=n!=null&&n.adapter&&DD(n==null?void 0:n.adapter)?n==null?void 0:n.adapter:kD(n),t=OD(e,n);return{...e,...t}}function P6(){const n=Ye(su);if(!n)throw new Error("[Vuetify] Could not find injected locale instance");return n}function xD(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function OD(n,e){const t=ct((e==null?void 0:e.rtl)??xD()),r=de(()=>t.value[n.current.value]??!1);return{isRtl:r,rtl:t,rtlClasses:de(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}function Pw(){const n=Ye(su);if(!n)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:n.isRtl,rtlClasses:n.rtlClasses}}const ch={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function VD(n,e,t){const r=[];let s=[];const i=kw(n),o=Dw(n),a=t??ch[e.slice(-2).toUpperCase()]??0,l=(i.getDay()-a+7)%7,u=(o.getDay()-a+7)%7;for(let h=0;h<l;h++){const d=new Date(i);d.setDate(d.getDate()-(l-h)),s.push(d)}for(let h=1;h<=o.getDate();h++){const d=new Date(n.getFullYear(),n.getMonth(),h);s.push(d),s.length===7&&(r.push(s),s=[])}for(let h=1;h<7-u;h++){const d=new Date(o);d.setDate(d.getDate()+h),s.push(d)}return s.length>0&&r.push(s),r}function MD(n,e,t){const r=t??ch[e.slice(-2).toUpperCase()]??0,s=new Date(n);for(;s.getDay()!==r;)s.setDate(s.getDate()-1);return s}function LD(n,e){const t=new Date(n),r=((ch[e.slice(-2).toUpperCase()]??0)+6)%7;for(;t.getDay()!==r;)t.setDate(t.getDate()+1);return t}function kw(n){return new Date(n.getFullYear(),n.getMonth(),1)}function Dw(n){return new Date(n.getFullYear(),n.getMonth()+1,0)}function FD(n){const e=n.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const UD=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function Nw(n){if(n==null)return new Date;if(n instanceof Date)return n;if(typeof n=="string"){let e;if(UD.test(n))return FD(n);if(e=Date.parse(n),!isNaN(e))return new Date(e)}return null}const Ty=new Date(2e3,0,2);function BD(n,e){const t=e??ch[n.slice(-2).toUpperCase()]??0;return gw(7).map(r=>{const s=new Date(Ty);return s.setDate(Ty.getDate()+t+r),new Intl.DateTimeFormat(n,{weekday:"narrow"}).format(s)})}function $D(n,e,t,r){const s=Nw(n)??new Date,i=r==null?void 0:r[e];if(typeof i=="function")return i(s,e,t);let o={};switch(e){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=s.getDate(),l=new Intl.DateTimeFormat(t,{month:"long"}).format(s);return`${a} ${l}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(t).format(s.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric"};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"};break;case"fullDateTime12h":o={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":return o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric"},new Intl.DateTimeFormat(t,o).format(s).replace(/, /g," ");case"keyboardDateTime12h":return o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",hour12:!0},new Intl.DateTimeFormat(t,o).format(s).replace(/, /g," ");case"keyboardDateTime24h":return o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",hour12:!1},new Intl.DateTimeFormat(t,o).format(s).replace(/, /g," ");default:o=i??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(t,o).format(s)}function jD(n,e){const t=n.toJsDate(e),r=t.getFullYear(),s=uy(String(t.getMonth()+1),2,"0"),i=uy(String(t.getDate()),2,"0");return`${r}-${s}-${i}`}function qD(n){const[e,t,r]=n.split("-").map(Number);return new Date(e,t-1,r)}function WD(n,e){const t=new Date(n);return t.setMinutes(t.getMinutes()+e),t}function HD(n,e){const t=new Date(n);return t.setHours(t.getHours()+e),t}function KD(n,e){const t=new Date(n);return t.setDate(t.getDate()+e),t}function GD(n,e){const t=new Date(n);return t.setDate(t.getDate()+e*7),t}function zD(n,e){const t=new Date(n);return t.setDate(1),t.setMonth(t.getMonth()+e),t}function QD(n){return n.getFullYear()}function YD(n){return n.getMonth()}function XD(n){return n.getDate()}function JD(n){return new Date(n.getFullYear(),n.getMonth()+1,1)}function ZD(n){return new Date(n.getFullYear(),n.getMonth()-1,1)}function eN(n){return n.getHours()}function tN(n){return n.getMinutes()}function nN(n){return new Date(n.getFullYear(),0,1)}function rN(n){return new Date(n.getFullYear(),11,31)}function sN(n,e){return iu(n,e[0])&&aN(n,e[1])}function iN(n){const e=new Date(n);return e instanceof Date&&!isNaN(e.getTime())}function iu(n,e){return n.getTime()>e.getTime()}function oN(n,e){return iu(hf(n),hf(e))}function aN(n,e){return n.getTime()<e.getTime()}function Iy(n,e){return n.getTime()===e.getTime()}function lN(n,e){return n.getDate()===e.getDate()&&n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear()}function cN(n,e){return n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear()}function uN(n,e){return n.getFullYear()===e.getFullYear()}function hN(n,e,t){const r=new Date(n),s=new Date(e);switch(t){case"years":return r.getFullYear()-s.getFullYear();case"quarters":return Math.floor((r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12)/4);case"months":return r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12;case"weeks":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24));case"hours":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60));case"minutes":return Math.floor((r.getTime()-s.getTime())/(1e3*60));case"seconds":return Math.floor((r.getTime()-s.getTime())/1e3);default:return r.getTime()-s.getTime()}}function dN(n,e){const t=new Date(n);return t.setHours(e),t}function fN(n,e){const t=new Date(n);return t.setMinutes(e),t}function pN(n,e){const t=new Date(n);return t.setMonth(e),t}function mN(n,e){const t=new Date(n);return t.setDate(e),t}function gN(n,e){const t=new Date(n);return t.setFullYear(e),t}function hf(n){return new Date(n.getFullYear(),n.getMonth(),n.getDate(),0,0,0,0)}function _N(n){return new Date(n.getFullYear(),n.getMonth(),n.getDate(),23,59,59,999)}class yN{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return Nw(e)}toJsDate(e){return e}toISO(e){return jD(this,e)}parseISO(e){return qD(e)}addMinutes(e,t){return WD(e,t)}addHours(e,t){return HD(e,t)}addDays(e,t){return KD(e,t)}addWeeks(e,t){return GD(e,t)}addMonths(e,t){return zD(e,t)}getWeekArray(e,t){return VD(e,this.locale,t?Number(t):void 0)}startOfWeek(e,t){return MD(e,this.locale,t?Number(t):void 0)}endOfWeek(e){return LD(e,this.locale)}startOfMonth(e){return kw(e)}endOfMonth(e){return Dw(e)}format(e,t){return $D(e,t,this.locale,this.formats)}isEqual(e,t){return Iy(e,t)}isValid(e){return iN(e)}isWithinRange(e,t){return sN(e,t)}isAfter(e,t){return iu(e,t)}isAfterDay(e,t){return oN(e,t)}isBefore(e,t){return!iu(e,t)&&!Iy(e,t)}isSameDay(e,t){return lN(e,t)}isSameMonth(e,t){return cN(e,t)}isSameYear(e,t){return uN(e,t)}setMinutes(e,t){return fN(e,t)}setHours(e,t){return dN(e,t)}setMonth(e,t){return pN(e,t)}setDate(e,t){return mN(e,t)}setYear(e,t){return gN(e,t)}getDiff(e,t,r){return hN(e,t,r)}getWeekdays(e){return BD(this.locale,e?Number(e):void 0)}getYear(e){return QD(e)}getMonth(e){return YD(e)}getDate(e){return XD(e)}getNextMonth(e){return JD(e)}getPreviousMonth(e){return ZD(e)}getHours(e){return eN(e)}getMinutes(e){return tN(e)}startOfDay(e){return hf(e)}endOfDay(e){return _N(e)}startOfYear(e){return nN(e)}endOfYear(e){return rN(e)}}const vN=Symbol.for("vuetify:date-options"),wy=Symbol.for("vuetify:date-adapter");function EN(n,e){const t=Vt({adapter:yN,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},n);return{options:t,instance:TN(t,e)}}function TN(n,e){const t=Yt(typeof n.adapter=="function"?new n.adapter({locale:n.locale[e.current.value]??e.current.value,formats:n.formats}):n.adapter);return hn(e.current,r=>{t.locale=n.locale[r]??r??t.locale}),t}const k6=["sm","md","lg","xl","xxl"],df=Symbol.for("vuetify:display"),by={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},IN=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:by;return Vt(by,n)};function Ay(n){return Jt&&!n?window.innerWidth:typeof n=="object"&&n.clientWidth||0}function Ry(n){return Jt&&!n?window.innerHeight:typeof n=="object"&&n.clientHeight||0}function Sy(n){const e=Jt&&!n?window.navigator.userAgent:"ssr";function t(v){return!!e.match(v)}const r=t(/android/i),s=t(/iphone|ipad|ipod/i),i=t(/cordova/i),o=t(/electron/i),a=t(/chrome/i),l=t(/edge/i),u=t(/firefox/i),h=t(/opera/i),d=t(/win/i),p=t(/mac/i),g=t(/linux/i);return{android:r,ios:s,cordova:i,electron:o,chrome:a,edge:l,firefox:u,opera:h,win:d,mac:p,linux:g,touch:Lk,ssr:e==="ssr"}}function wN(n,e){const{thresholds:t,mobileBreakpoint:r}=IN(n),s=Dn(Ry(e)),i=Dn(Sy(e)),o=Yt({}),a=Dn(Ay(e));function l(){s.value=Ry(),a.value=Ay()}function u(){l(),i.value=Sy()}return sh(()=>{const h=a.value<t.sm,d=a.value<t.md&&!h,p=a.value<t.lg&&!(d||h),g=a.value<t.xl&&!(p||d||h),v=a.value<t.xxl&&!(g||p||d||h),T=a.value>=t.xxl,P=h?"xs":d?"sm":p?"md":g?"lg":v?"xl":"xxl",O=typeof r=="number"?r:t[r],V=a.value<O;o.xs=h,o.sm=d,o.md=p,o.lg=g,o.xl=v,o.xxl=T,o.smAndUp=!h,o.mdAndUp=!(h||d),o.lgAndUp=!(h||d||p),o.xlAndUp=!(h||d||p||g),o.smAndDown=!(p||g||v||T),o.mdAndDown=!(g||v||T),o.lgAndDown=!(v||T),o.xlAndDown=!T,o.name=P,o.height=s.value,o.width=a.value,o.mobile=V,o.mobileBreakpoint=r,o.platform=i.value,o.thresholds=t}),Jt&&window.addEventListener("resize",l,{passive:!0}),{...Np(o),update:u,ssr:!!e}}const D6=ms({mobile:{type:Boolean,default:!1},mobileBreakpoint:[Number,String]},"display");function N6(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{mobile:null},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ID();const t=Ye(df);if(!t)throw new Error("Could not find Vuetify display injection");const r=de(()=>n.mobile?!0:typeof n.mobileBreakpoint=="number"?t.width.value<n.mobileBreakpoint:n.mobileBreakpoint?t.width.value<t.thresholds.value[n.mobileBreakpoint]:n.mobile===null?t.mobile.value:!1),s=de(()=>e?{[`${e}--mobile`]:r.value}:{});return{...t,displayClasses:s,mobile:r}}const xw=Symbol.for("vuetify:goto");function Ow(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:n=>n,easeInQuad:n=>n**2,easeOutQuad:n=>n*(2-n),easeInOutQuad:n=>n<.5?2*n**2:-1+(4-2*n)*n,easeInCubic:n=>n**3,easeOutCubic:n=>--n**3+1,easeInOutCubic:n=>n<.5?4*n**3:(n-1)*(2*n-2)*(2*n-2)+1,easeInQuart:n=>n**4,easeOutQuart:n=>1- --n**4,easeInOutQuart:n=>n<.5?8*n**4:1-8*--n**4,easeInQuint:n=>n**5,easeOutQuint:n=>1+--n**5,easeInOutQuint:n=>n<.5?16*n**5:1+16*--n**5}}}function bN(n){return Hp(n)??(document.scrollingElement||document.body)}function Hp(n){return typeof n=="string"?document.querySelector(n):_w(n)}function Id(n,e,t){if(typeof n=="number")return e&&t?-n:n;let r=Hp(n),s=0;for(;r;)s+=e?r.offsetLeft:r.offsetTop,r=r.offsetParent;return s}function AN(n,e){return{rtl:e.isRtl,options:Vt(Ow(),n)}}async function Cy(n,e,t,r){const s=t?"scrollLeft":"scrollTop",i=Vt((r==null?void 0:r.options)??Ow(),e),o=r==null?void 0:r.rtl.value,a=(typeof n=="number"?n:Hp(n))??0,l=i.container==="parent"&&a instanceof HTMLElement?a.parentElement:bN(i.container),u=typeof i.easing=="function"?i.easing:i.patterns[i.easing];if(!u)throw new TypeError(`Easing function "${i.easing}" not found.`);let h;if(typeof a=="number")h=Id(a,t,o);else if(h=Id(a,t,o)-Id(l,t,o),i.layout){const v=window.getComputedStyle(a).getPropertyValue("--v-layout-top");v&&(h-=parseInt(v,10))}h+=i.offset,h=RN(l,h,!!o,!!t);const d=l[s]??0;if(h===d)return Promise.resolve(h);const p=performance.now();return new Promise(g=>requestAnimationFrame(function v(T){const O=(T-p)/i.duration,V=Math.floor(d+(h-d)*u(vw(O,0,1)));if(l[s]=V,O>=1&&Math.abs(V-l[s])<10)return g(h);if(O>2)return g(l[s]);requestAnimationFrame(v)}))}function x6(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=Ye(xw),{isRtl:t}=Pw();if(!e)throw new Error("[Vuetify] Could not find injected goto instance");const r={...e,rtl:de(()=>e.rtl.value||t.value)};async function s(i,o){return Cy(i,Vt(n,o),!1,r)}return s.horizontal=async(i,o)=>Cy(i,Vt(n,o),!0,r),s}function RN(n,e,t,r){const{scrollWidth:s,scrollHeight:i}=n,[o,a]=n===document.scrollingElement?[window.innerWidth,window.innerHeight]:[n.offsetWidth,n.offsetHeight];let l,u;return r?t?(l=-(s-o),u=0):(l=0,u=s-o):(l=0,u=i+-a),Math.max(Math.min(e,u),l)}const SN={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper",upload:"mdi-cloud-upload"},CN={component:n=>lh(Mw,{...n,class:"mdi"})},PN=[String,Function,Object,Array],ff=Symbol.for("vuetify:icons"),uh=ms({icon:{type:PN},tag:{type:String,required:!0}},"icon"),Py=Aw()({name:"VComponentIcon",props:uh(),setup(n,e){let{slots:t}=e;return()=>{const r=n.icon;return He(n.tag,null,{default:()=>{var s;return[n.icon?He(r,null,null):(s=t.default)==null?void 0:s.call(t)]}})}}}),Vw=El({name:"VSvgIcon",inheritAttrs:!1,props:uh(),setup(n,e){let{attrs:t}=e;return()=>He(n.tag,rw(t,{style:null}),{default:()=>[He("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(n.icon)?n.icon.map(r=>Array.isArray(r)?He("path",{d:r[0],"fill-opacity":r[1]},null):He("path",{d:r},null)):He("path",{d:n.icon},null)])]})}});El({name:"VLigatureIcon",props:uh(),setup(n){return()=>He(n.tag,null,{default:()=>[n.icon]})}});const Mw=El({name:"VClassIcon",props:uh(),setup(n){return()=>He(n.tag,{class:n.icon},null)}});function kN(){return{svg:{component:Vw},class:{component:Mw}}}function DN(n){const e=kN(),t=(n==null?void 0:n.defaultSet)??"mdi";return t==="mdi"&&!e.mdi&&(e.mdi=CN),Vt({defaultSet:t,sets:e,aliases:{...SN,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},n)}const O6=n=>{const e=Ye(ff);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:de(()=>{var l;const r=an(n);if(!r)return{component:Py};let s=r;if(typeof s=="string"&&(s=s.trim(),s.startsWith("$")&&(s=(l=e.aliases)==null?void 0:l[s.slice(1)])),Array.isArray(s))return{component:Vw,icon:s};if(typeof s!="string")return{component:Py,icon:s};const i=Object.keys(e.sets).find(u=>typeof s=="string"&&s.startsWith(`${u}:`)),o=i?s.slice(i.length+1):s;return{component:e.sets[i??e.defaultSet].component,icon:o}})}},Ha=Symbol.for("vuetify:theme"),NN=ms({theme:String},"theme");function ky(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function xN(){var r,s;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ky();const e=ky();if(!n)return{...e,isDisabled:!0};const t={};for(const[i,o]of Object.entries(n.themes??{})){const a=o.dark||i==="dark"?(r=e.themes)==null?void 0:r.dark:(s=e.themes)==null?void 0:s.light;t[i]=Vt(a,o)}return Vt(e,{...n,themes:t})}function ON(n){const e=xN(n),t=ct(e.defaultTheme),r=ct(e.themes),s=de(()=>{const h={};for(const[d,p]of Object.entries(r.value)){const g=h[d]={...p,colors:{...p.colors}};if(e.variations)for(const v of e.variations.colors){const T=g.colors[v];if(T)for(const P of["lighten","darken"]){const O=P==="lighten"?_D:yD;for(const V of gw(e.variations[P],1))g.colors[`${v}-${P}-${V}`]=pD(O(pr(T),V))}}for(const v of Object.keys(g.colors)){if(/^on-[a-z]/.test(v)||g.colors[`on-${v}`])continue;const T=`on-${v}`,P=pr(g.colors[v]);g.colors[T]=ED(P)}}return h}),i=de(()=>s.value[t.value]),o=de(()=>{var v;const h=[];(v=i.value)!=null&&v.dark&&Ss(h,":root",["color-scheme: dark"]),Ss(h,":root",Dy(i.value));for(const[T,P]of Object.entries(s.value))Ss(h,`.v-theme--${T}`,[`color-scheme: ${P.dark?"dark":"normal"}`,...Dy(P)]);const d=[],p=[],g=new Set(Object.values(s.value).flatMap(T=>Object.keys(T.colors)));for(const T of g)/^on-[a-z]/.test(T)?Ss(p,`.${T}`,[`color: rgb(var(--v-theme-${T})) !important`]):(Ss(d,`.bg-${T}`,[`--v-theme-overlay-multiplier: var(--v-theme-${T}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${T})) !important`,`color: rgb(var(--v-theme-on-${T})) !important`]),Ss(p,`.text-${T}`,[`color: rgb(var(--v-theme-${T})) !important`]),Ss(p,`.border-${T}`,[`--v-border-color: var(--v-theme-${T})`]));return h.push(...d,...p),h.map((T,P)=>P===0?T:`    ${T}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(h){if(e.isDisabled)return;const d=h._context.provides.usehead;if(d)if(d.push){const p=d.push(a);Jt&&hn(o,()=>{p.patch(a)})}else Jt?(d.addHeadObjs(de(a)),sh(()=>d.updateDOM())):d.addHeadObjs(a());else{let g=function(){if(typeof document<"u"&&!p){const v=document.createElement("style");v.type="text/css",v.id="vuetify-theme-stylesheet",e.cspNonce&&v.setAttribute("nonce",e.cspNonce),p=v,document.head.appendChild(p)}p&&(p.innerHTML=o.value)},p=Jt?document.getElementById("vuetify-theme-stylesheet"):null;Jt?hn(o,g,{immediate:!0}):g()}}const u=de(()=>e.isDisabled?void 0:`v-theme--${t.value}`);return{install:l,isDisabled:e.isDisabled,name:t,themes:r,current:i,computedThemes:s,themeClasses:u,styles:o,global:{name:t,current:i}}}function VN(n){rr("provideTheme");const e=Ye(Ha,null);if(!e)throw new Error("Could not find Vuetify theme injection");const t=de(()=>n.theme??e.name.value),r=de(()=>e.themes.value[t.value]),s=de(()=>e.isDisabled?void 0:`v-theme--${t.value}`),i={...e,name:t,current:r,themeClasses:s};return Tr(Ha,i),i}function V6(){rr("useTheme");const n=Ye(Ha,null);if(!n)throw new Error("Could not find Vuetify theme injection");return n}function Ss(n,e,t){n.push(`${e} {
`,...t.map(r=>`  ${r};
`),`}
`)}function Dy(n){const e=n.dark?2:1,t=n.dark?1:2,r=[];for(const[s,i]of Object.entries(n.colors)){const o=pr(i);r.push(`--v-theme-${s}: ${o.r},${o.g},${o.b}`),s.startsWith("on-")||r.push(`--v-theme-${s}-overlay-multiplier: ${vD(i)>.18?e:t}`)}for(const[s,i]of Object.entries(n.variables)){const o=typeof i=="string"&&i.startsWith("#")?pr(i):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;r.push(`--v-${s}: ${a??i}`)}return r}function MN(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const t=Yk(),r=ct();if(Jt){const s=new ResizeObserver(i=>{n==null||n(i,s),i.length&&(e==="content"?r.value=i[0].contentRect:r.value=i[0].target.getBoundingClientRect())});rh(()=>{s.disconnect()}),hn(()=>t.el,(i,o)=>{o&&(s.unobserve(o),r.value=void 0),i&&s.observe(i)},{flush:"post"})}return{resizeRef:t,contentRect:Cp(r)}}const ou=Symbol.for("vuetify:layout"),Lw=Symbol.for("vuetify:layout-item"),Ny=1e3,LN=ms({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),M6=ms({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function L6(){const n=Ye(ou);if(!n)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:n.getLayoutItem,mainRect:n.mainRect,mainStyles:n.mainStyles}}function F6(n){const e=Ye(ou);if(!e)throw new Error("[Vuetify] Could not find injected layout");const t=n.id??`layout-item-${qp()}`,r=rr("useLayoutItem");Tr(Lw,{id:t});const s=Dn(!1);DI(()=>s.value=!0),kI(()=>s.value=!1);const{layoutItemStyles:i,layoutItemScrimStyles:o}=e.register(r,{...n,active:de(()=>s.value?!1:n.active.value),id:t});return rh(()=>e.unregister(t)),{layoutItemStyles:i,layoutRect:e.layoutRect,layoutItemScrimStyles:o}}const FN=(n,e,t,r)=>{let s={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...s}}];for(const o of n){const a=e.get(o),l=t.get(o),u=r.get(o);if(!a||!l||!u)continue;const h={...s,[a.value]:parseInt(s[a.value],10)+(u.value?parseInt(l.value,10):0)};i.push({id:o,layer:h}),s=h}return i};function UN(n){const e=Ye(ou,null),t=de(()=>e?e.rootZIndex.value-100:Ny),r=ct([]),s=Yt(new Map),i=Yt(new Map),o=Yt(new Map),a=Yt(new Map),l=Yt(new Map),{resizeRef:u,contentRect:h}=MN(),d=de(()=>{const j=new Map,b=n.overlaps??[];for(const _ of b.filter(E=>E.includes(":"))){const[E,I]=_.split(":");if(!r.value.includes(E)||!r.value.includes(I))continue;const C=s.get(E),R=s.get(I),w=i.get(E),Ie=i.get(I);!C||!R||!w||!Ie||(j.set(I,{position:C.value,amount:parseInt(w.value,10)}),j.set(E,{position:R.value,amount:-parseInt(Ie.value,10)}))}return j}),p=de(()=>{const j=[...new Set([...o.values()].map(_=>_.value))].sort((_,E)=>_-E),b=[];for(const _ of j){const E=r.value.filter(I=>{var C;return((C=o.get(I))==null?void 0:C.value)===_});b.push(...E)}return FN(b,s,i,a)}),g=de(()=>!Array.from(l.values()).some(j=>j.value)),v=de(()=>p.value[p.value.length-1].layer),T=de(()=>({"--v-layout-left":cc(v.value.left),"--v-layout-right":cc(v.value.right),"--v-layout-top":cc(v.value.top),"--v-layout-bottom":cc(v.value.bottom),...g.value?void 0:{transition:"none"}})),P=de(()=>p.value.slice(1).map((j,b)=>{let{id:_}=j;const{layer:E}=p.value[b],I=i.get(_),C=s.get(_);return{id:_,...E,size:Number(I.value),position:C.value}})),O=j=>P.value.find(b=>b.id===j),V=rr("createLayout"),x=Dn(!1);Vp(()=>{x.value=!0}),Tr(ou,{register:(j,b)=>{let{id:_,order:E,position:I,layoutSize:C,elementSize:R,active:w,disableTransitions:Ie,absolute:nt}=b;o.set(_,E),s.set(_,I),i.set(_,C),a.set(_,w),Ie&&l.set(_,Ie);const ue=aa(Lw,V==null?void 0:V.vnode).indexOf(j);ue>-1?r.value.splice(ue,0,_):r.value.push(_);const ve=de(()=>P.value.findIndex(Le=>Le.id===_)),_t=de(()=>t.value+p.value.length*2-ve.value*2),en=de(()=>{const Le=I.value==="left"||I.value==="right",$e=I.value==="right",Fn=I.value==="bottom",Qt=R.value??C.value,bt=Qt===0?"%":"px",U={[I.value]:0,zIndex:_t.value,transform:`translate${Le?"X":"Y"}(${(w.value?0:-(Qt===0?100:Qt))*($e||Fn?-1:1)}${bt})`,position:nt.value||t.value!==Ny?"absolute":"fixed",...g.value?void 0:{transition:"none"}};if(!x.value)return U;const X=P.value[ve.value];if(!X)throw new Error(`[Vuetify] Could not find layout item "${_}"`);const J=d.value.get(_);return J&&(X[J.position]+=J.amount),{...U,height:Le?`calc(100% - ${X.top}px - ${X.bottom}px)`:R.value?`${R.value}px`:void 0,left:$e?void 0:`${X.left}px`,right:$e?`${X.right}px`:void 0,top:I.value!=="bottom"?`${X.top}px`:void 0,bottom:I.value!=="top"?`${X.bottom}px`:void 0,width:Le?R.value?`${R.value}px`:void 0:`calc(100% - ${X.left}px - ${X.right}px)`}}),zt=de(()=>({zIndex:_t.value-1}));return{layoutItemStyles:en,layoutItemScrimStyles:zt,zIndex:_t}},unregister:j=>{o.delete(j),s.delete(j),i.delete(j),a.delete(j),l.delete(j),r.value=r.value.filter(b=>b!==j)},mainRect:v,mainStyles:T,getLayoutItem:O,items:P,layoutRect:h,rootZIndex:t});const M=de(()=>["v-layout",{"v-layout--full-height":n.fullHeight}]),W=de(()=>({zIndex:e?t.value:void 0,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:M,layoutStyles:W,getLayoutItem:O,items:P,layoutRect:h,layoutRef:u}}function Fw(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...t}=n,r=Vt(e,t),{aliases:s={},components:i={},directives:o={}}=r,a=bD(r.defaults),l=wN(r.display,r.ssr),u=ON(r.theme),h=DN(r.icons),d=ND(r.locale),p=EN(r.date,d),g=AN(r.goTo,d);return{install:T=>{for(const P in o)T.directive(P,o[P]);for(const P in i)T.component(P,i[P]);for(const P in s)T.component(P,El({...s[P],name:P,aliasName:s[P].name}));if(u.install(T),T.provide(Xi,a),T.provide(df,l),T.provide(Ha,u),T.provide(ff,h),T.provide(su,d),T.provide(vN,p.options),T.provide(wy,p.instance),T.provide(xw,g),Jt&&r.ssr)if(T.$nuxt)T.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:P}=T;T.mount=function(){const O=P(...arguments);return Zu(()=>l.update()),T.mount=P,O}}qp.reset(),T.mixin({computed:{$vuetify(){return Yt({defaults:wi.call(this,Xi),display:wi.call(this,df),theme:wi.call(this,Ha),icons:wi.call(this,ff),locale:wi.call(this,su),date:wi.call(this,wy)})}}})},defaults:a,display:l,theme:u,icons:h,locale:d,date:p,goTo:g}}const BN="3.7.14";Fw.version=BN;function wi(n){var r,s;const e=this.$,t=((r=e.parent)==null?void 0:r.provides)??((s=e.vnode.appContext)==null?void 0:s.provides);if(t&&n in t)return t[n]}const $N=Fw({theme:{defaultTheme:"dark"}});/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Uw;const hh=n=>Uw=n,Bw=Symbol();function pf(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var wa;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(wa||(wa={}));function jN(){const n=gl(!0),e=n.run(()=>ct({}));let t=[],r=[];const s=Dp({install(i){hh(s),s._a=i,i.provide(Bw,s),i.config.globalProperties.$pinia=s,r.forEach(o=>t.push(o)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const $w=()=>{};function xy(n,e,t,r=$w){n.push(e);const s=()=>{const i=n.indexOf(e);i>-1&&(n.splice(i,1),r())};return!t&&Tp()&&Ip(s),s}function bi(n,...e){n.slice().forEach(t=>{t(...e)})}const qN=n=>n(),Oy=Symbol(),wd=Symbol();function mf(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],s=n[t];pf(s)&&pf(r)&&n.hasOwnProperty(t)&&!Ze(r)&&!Er(r)?n[t]=mf(s,r):n[t]=r}return n}const WN=Symbol();function HN(n){return!pf(n)||!n.hasOwnProperty(WN)}const{assign:jr}=Object;function KN(n){return!!(Ze(n)&&n.effect)}function GN(n,e,t,r){const{state:s,actions:i,getters:o}=e,a=t.state.value[n];let l;function u(){a||(t.state.value[n]=s?s():{});const h=Np(t.state.value[n]);return jr(h,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Dp(de(()=>{hh(t);const g=t._s.get(n);return o[p].call(g,g)})),d),{}))}return l=jw(n,u,e,t,r,!0),l}function jw(n,e,t={},r,s,i){let o;const a=jr({actions:{}},t),l={deep:!0};let u,h,d=[],p=[],g;const v=r.state.value[n];!i&&!v&&(r.state.value[n]={}),ct({});let T;function P(_){let E;u=h=!1,typeof _=="function"?(_(r.state.value[n]),E={type:wa.patchFunction,storeId:n,events:g}):(mf(r.state.value[n],_),E={type:wa.patchObject,payload:_,storeId:n,events:g});const I=T=Symbol();Zu().then(()=>{T===I&&(u=!0)}),h=!0,bi(d,E,r.state.value[n])}const O=i?function(){const{state:E}=t,I=E?E():{};this.$patch(C=>{jr(C,I)})}:$w;function V(){o.stop(),d=[],p=[],r._s.delete(n)}const x=(_,E="")=>{if(Oy in _)return _[wd]=E,_;const I=function(){hh(r);const C=Array.from(arguments),R=[],w=[];function Ie(ue){R.push(ue)}function nt(ue){w.push(ue)}bi(p,{args:C,name:I[wd],store:W,after:Ie,onError:nt});let Ne;try{Ne=_.apply(this&&this.$id===n?this:W,C)}catch(ue){throw bi(w,ue),ue}return Ne instanceof Promise?Ne.then(ue=>(bi(R,ue),ue)).catch(ue=>(bi(w,ue),Promise.reject(ue))):(bi(R,Ne),Ne)};return I[Oy]=!0,I[wd]=E,I},M={_p:r,$id:n,$onAction:xy.bind(null,p),$patch:P,$reset:O,$subscribe(_,E={}){const I=xy(d,_,E.detached,()=>C()),C=o.run(()=>hn(()=>r.state.value[n],R=>{(E.flush==="sync"?h:u)&&_({storeId:n,type:wa.direct,events:g},R)},jr({},l,E)));return I},$dispose:V},W=Yt(M);r._s.set(n,W);const b=(r._a&&r._a.runWithContext||qN)(()=>r._e.run(()=>(o=gl()).run(()=>e({action:x}))));for(const _ in b){const E=b[_];if(Ze(E)&&!KN(E)||Er(E))i||(v&&HN(E)&&(Ze(E)?E.value=v[_]:mf(E,v[_])),r.state.value[n][_]=E);else if(typeof E=="function"){const I=x(E,_);b[_]=I,a.actions[_]=E}}return jr(W,b),jr(we(W),b),Object.defineProperty(W,"$state",{get:()=>r.state.value[n],set:_=>{P(E=>{jr(E,_)})}}),r._p.forEach(_=>{jr(W,o.run(()=>_({store:W,app:r._a,pinia:r,options:a})))}),v&&i&&t.hydrate&&t.hydrate(W.$state,v),u=!0,h=!0,W}/*! #__NO_SIDE_EFFECTS__ */function U6(n,e,t){let r,s;const i=typeof e=="function";typeof n=="string"?(r=n,s=i?t:e):(s=n,r=n.id);function o(a,l){const u=TP();return a=a||(u?Ye(Bw,null):null),a&&hh(a),a=Uw,a._s.has(r)||(i?jw(r,e,s,a):GN(r,s,a)),a._s.get(r)}return o.$id=r,o}function B6(n){{const e=we(n),t={};for(const r in e){const s=e[r];s.effect?t[r]=de({get:()=>n[r],set(i){n[r]=i}}):(Ze(s)||Er(s))&&(t[r]=dI(n,r))}return t}}const zN=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,QN=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,YN=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function XN(n,e){if(n==="__proto__"||n==="constructor"&&e&&typeof e=="object"&&"prototype"in e){JN(n);return}return e}function JN(n){console.warn(`[destr] Dropping "${n}" key to prevent prototype pollution.`)}function ZN(n,e={}){if(typeof n!="string")return n;const t=n.trim();if(n[0]==='"'&&n.endsWith('"')&&!n.includes("\\"))return t.slice(1,-1);if(t.length<=9){const r=t.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!YN.test(n)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return n}try{if(zN.test(n)||QN.test(n)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(n,XN)}return JSON.parse(n)}catch(r){if(e.strict)throw r;return n}}function ex(n,e){if(n==null)return;let t=n;for(let r=0;r<e.length;r++){if(t==null||t[e[r]]==null)return;t=t[e[r]]}return t}function Kp(n,e,t){if(t.length===0)return e;const r=t[0];return t.length>1&&(e=Kp(typeof n!="object"||n===null||!Object.prototype.hasOwnProperty.call(n,r)?Number.isInteger(Number(t[1]))?[]:{}:n[r],e,Array.prototype.slice.call(t,1))),Number.isInteger(Number(r))&&Array.isArray(n)?n.slice()[r]:Object.assign({},n,{[r]:e})}function qw(n,e){if(n==null||e.length===0)return n;if(e.length===1){if(n==null)return n;if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.slice.call(n,0).splice(e[0],1);const t={};for(const r in n)t[r]=n[r];return delete t[e[0]],t}if(n[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.concat.call([],n);const t={};for(const r in n)t[r]=n[r];return t}return Kp(n,qw(n[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function Ww(n,e){return e.map(t=>t.split(".")).map(t=>[t,ex(n,t)]).filter(t=>t[1]!==void 0).reduce((t,r)=>Kp(t,r[1],r[0]),{})}function Hw(n,e){return e.map(t=>t.split(".")).reduce((t,r)=>qw(t,r),n)}function Vy(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:o,beforeHydrate:a,afterHydrate:l},u,h=!0){try{h&&(a==null||a(u));const d=e.getItem(r);if(d){const p=t.deserialize(d),g=i?Ww(p,i):p,v=o?Hw(g,o):g;n.$patch(v)}h&&(l==null||l(u))}catch(d){s&&console.error("[pinia-plugin-persistedstate]",d)}}function My(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:o}){try{const a=i?Ww(n,i):n,l=o?Hw(a,o):a,u=t.serialize(l);e.setItem(r,u)}catch(a){s&&console.error("[pinia-plugin-persistedstate]",a)}}function tx(n,e,t){const{pinia:r,store:s,options:{persist:i=t}}=n;if(!i)return;if(!(s.$id in r.state.value)){const l=r._s.get(s.$id.replace("__hot:",""));l&&Promise.resolve().then(()=>l.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:l=!0}={})=>{a.forEach(u=>{Vy(s,u,n,l)})},s.$persist=()=>{a.forEach(l=>{My(s.$state,l)})},a.forEach(l=>{Vy(s,l,n),s.$subscribe((u,h)=>My(h,l),{detached:!0})})}function nx(n={}){return function(e){tx(e,t=>({key:(n.key?n.key:r=>r)(t.key??e.store.$id),debug:t.debug??n.debug??!1,serializer:t.serializer??n.serializer??{serialize:r=>JSON.stringify(r),deserialize:r=>ZN(r)},storage:t.storage??n.storage??window.localStorage,beforeHydrate:t.beforeHydrate,afterHydrate:t.afterHydrate,pick:t.pick,omit:t.omit}),n.auto??!1)}}var rx=nx();const Kw=jN();Kw.use(rx);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const xi=typeof document<"u";function Gw(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function sx(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Gw(n.default)}const xe=Object.assign;function bd(n,e){const t={};for(const r in e){const s=e[r];t[r]=Vn(s)?s.map(n):n(s)}return t}const ba=()=>{},Vn=Array.isArray,zw=/#/g,ix=/&/g,ox=/\//g,ax=/=/g,lx=/\?/g,Qw=/\+/g,cx=/%5B/g,ux=/%5D/g,Yw=/%5E/g,hx=/%60/g,Xw=/%7B/g,dx=/%7C/g,Jw=/%7D/g,fx=/%20/g;function Gp(n){return encodeURI(""+n).replace(dx,"|").replace(cx,"[").replace(ux,"]")}function px(n){return Gp(n).replace(Xw,"{").replace(Jw,"}").replace(Yw,"^")}function gf(n){return Gp(n).replace(Qw,"%2B").replace(fx,"+").replace(zw,"%23").replace(ix,"%26").replace(hx,"`").replace(Xw,"{").replace(Jw,"}").replace(Yw,"^")}function mx(n){return gf(n).replace(ax,"%3D")}function gx(n){return Gp(n).replace(zw,"%23").replace(lx,"%3F")}function _x(n){return n==null?"":gx(n).replace(ox,"%2F")}function Ka(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const yx=/\/$/,vx=n=>n.replace(yx,"");function Ad(n,e,t="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=n(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=wx(r??e,t),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ka(o)}}function Ex(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Ly(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Tx(n,e,t){const r=e.matched.length-1,s=t.matched.length-1;return r>-1&&r===s&&Ji(e.matched[r],t.matched[s])&&Zw(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ji(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Zw(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Ix(n[t],e[t]))return!1;return!0}function Ix(n,e){return Vn(n)?Fy(n,e):Vn(e)?Fy(e,n):n===e}function Fy(n,e){return Vn(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function wx(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Mr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ga;(function(n){n.pop="pop",n.push="push"})(Ga||(Ga={}));var Aa;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Aa||(Aa={}));function bx(n){if(!n)if(xi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),vx(n)}const Ax=/^[^#]+#/;function Rx(n,e){return n.replace(Ax,"#")+e}function Sx(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const dh=()=>({left:window.scrollX,top:window.scrollY});function Cx(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Sx(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Uy(n,e){return(history.state?history.state.position-e:-1)+n}const _f=new Map;function Px(n,e){_f.set(n,e)}function kx(n){const e=_f.get(n);return _f.delete(n),e}let Dx=()=>location.protocol+"//"+location.host;function eb(n,e){const{pathname:t,search:r,hash:s}=e,i=n.indexOf("#");if(i>-1){let a=s.includes(n.slice(i))?n.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Ly(l,"")}return Ly(t,n)+r+s}function Nx(n,e,t,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=eb(n,location),v=t.value,T=e.value;let P=0;if(p){if(t.value=g,e.value=p,o&&o===v){o=null;return}P=T?p.position-T.position:0}else r(g);s.forEach(O=>{O(t.value,v,{delta:P,type:Ga.pop,direction:P?P>0?Aa.forward:Aa.back:Aa.unknown})})};function l(){o=t.value}function u(p){s.push(p);const g=()=>{const v=s.indexOf(p);v>-1&&s.splice(v,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(xe({},p.state,{scroll:dh()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function By(n,e,t,r=!1,s=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:s?dh():null}}function xx(n){const{history:e,location:t}=window,r={value:eb(n,t)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=n.indexOf("#"),p=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:Dx()+n+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),t[h?"replace":"assign"](p)}}function o(l,u){const h=xe({},e.state,By(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=xe({},s.value,e.state,{forward:l,scroll:dh()});i(h.current,h,!0);const d=xe({},By(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function Ox(n){n=bx(n);const e=xx(n),t=Nx(n,e.state,e.location,e.replace);function r(i,o=!0){o||t.pauseListeners(),history.go(i)}const s=xe({location:"",base:n,go:r,createHref:Rx.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Vx(n){return typeof n=="string"||n&&typeof n=="object"}function tb(n){return typeof n=="string"||typeof n=="symbol"}const nb=Symbol("");var $y;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})($y||($y={}));function Zi(n,e){return xe(new Error,{type:n,[nb]:!0},e)}function cr(n,e){return n instanceof Error&&nb in n&&(e==null||!!(n.type&e))}const jy="[^/]+?",Mx={sensitive:!1,strict:!1,start:!0,end:!0},Lx=/[.+*?^${}()[\]/\\]/g;function Fx(n,e){const t=xe({},Mx,e),r=[];let s=t.start?"^":"";const i=[];for(const u of n){const h=u.length?[]:[90];t.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(t.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(Lx,"\\$&"),g+=40;else if(p.type===1){const{value:v,repeatable:T,optional:P,regexp:O}=p;i.push({name:v,repeatable:T,optional:P});const V=O||jy;if(V!==jy){g+=10;try{new RegExp(`(${V})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${v}" (${V}): `+M.message)}}let x=T?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;d||(x=P&&u.length<2?`(?:/${x})`:"/"+x),P&&(x+="?"),s+=x,g+=20,P&&(g+=-8),T&&(g+=-20),V===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(t.strict&&t.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",v=i[p-1];d[v.name]=g&&v.repeatable?g.split("/"):g}return d}function l(u){let h="",d=!1;for(const p of n){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:v,repeatable:T,optional:P}=g,O=v in u?u[v]:"";if(Vn(O)&&!T)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const V=Vn(O)?O.join("/"):O;if(!V)if(P)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);h+=V}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function Ux(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function rb(n,e){let t=0;const r=n.score,s=e.score;for(;t<r.length&&t<s.length;){const i=Ux(r[t],s[t]);if(i)return i;t++}if(Math.abs(s.length-r.length)===1){if(qy(r))return 1;if(qy(s))return-1}return s.length-r.length}function qy(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Bx={type:0,value:""},$x=/[a-zA-Z0-9_]/;function jx(n){if(!n)return[[]];if(n==="/")return[[Bx]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(g){throw new Error(`ERR (${t})/"${u}": ${g}`)}let t=0,r=t;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(t===0?i.push({type:0,value:u}):t===1||t===2||t===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),t=1):p();break;case 4:p(),t=r;break;case 1:l==="("?t=2:$x.test(l)?p():(d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:t=3:h+=l;break;case 3:d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function qx(n,e,t){const r=Fx(jx(n.path),t),s=xe(r,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Wx(n,e){const t=[],r=new Map;e=Gy({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const v=!g,T=Hy(d);T.aliasOf=g&&g.record;const P=Gy(e,d),O=[T];if("alias"in d){const M=typeof d.alias=="string"?[d.alias]:d.alias;for(const W of M)O.push(Hy(xe({},T,{components:g?g.record.components:T.components,path:W,aliasOf:g?g.record:T})))}let V,x;for(const M of O){const{path:W}=M;if(p&&W[0]!=="/"){const j=p.record.path,b=j[j.length-1]==="/"?"":"/";M.path=p.record.path+(W&&b+W)}if(V=qx(M,p,P),g?g.alias.push(V):(x=x||V,x!==V&&x.alias.push(V),v&&d.name&&!Ky(V)&&o(d.name)),sb(V)&&l(V),T.children){const j=T.children;for(let b=0;b<j.length;b++)i(j[b],V,g&&g.children[b])}g=g||V}return x?()=>{o(x)}:ba}function o(d){if(tb(d)){const p=r.get(d);p&&(r.delete(d),t.splice(t.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=t.indexOf(d);p>-1&&(t.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return t}function l(d){const p=Gx(d,t);t.splice(p,0,d),d.record.name&&!Ky(d)&&r.set(d.record.name,d)}function u(d,p){let g,v={},T,P;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Zi(1,{location:d});P=g.record.name,v=xe(Wy(p.params,g.keys.filter(x=>!x.optional).concat(g.parent?g.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),d.params&&Wy(d.params,g.keys.map(x=>x.name))),T=g.stringify(v)}else if(d.path!=null)T=d.path,g=t.find(x=>x.re.test(T)),g&&(v=g.parse(T),P=g.record.name);else{if(g=p.name?r.get(p.name):t.find(x=>x.re.test(p.path)),!g)throw Zi(1,{location:d,currentLocation:p});P=g.record.name,v=xe({},p.params,d.params),T=g.stringify(v)}const O=[];let V=g;for(;V;)O.unshift(V.record),V=V.parent;return{name:P,path:T,params:v,matched:O,meta:Kx(O)}}n.forEach(d=>i(d));function h(){t.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function Wy(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function Hy(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Hx(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Hx(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="object"?t[r]:t;return e}function Ky(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Kx(n){return n.reduce((e,t)=>xe(e,t.meta),{})}function Gy(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function Gx(n,e){let t=0,r=e.length;for(;t!==r;){const i=t+r>>1;rb(n,e[i])<0?r=i:t=i+1}const s=zx(n);return s&&(r=e.lastIndexOf(s,r-1)),r}function zx(n){let e=n;for(;e=e.parent;)if(sb(e)&&rb(n,e)===0)return e}function sb({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Qx(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Qw," "),o=i.indexOf("="),a=Ka(o<0?i:i.slice(0,o)),l=o<0?null:Ka(i.slice(o+1));if(a in e){let u=e[a];Vn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function zy(n){let e="";for(let t in n){const r=n[t];if(t=mx(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(Vn(r)?r.map(i=>i&&gf(i)):[r&&gf(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function Yx(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=Vn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Xx=Symbol(""),Qy=Symbol(""),fh=Symbol(""),ib=Symbol(""),yf=Symbol("");function Qo(){let n=[];function e(r){return n.push(r),()=>{const s=n.indexOf(r);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Kr(n,e,t,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Zi(4,{from:t,to:e})):p instanceof Error?l(p):Vx(p)?l(Zi(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>n.call(r&&r.instances[s],e,t,u));let d=Promise.resolve(h);n.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function Rd(n,e,t,r,s=i=>i()){const i=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Gw(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Kr(h,t,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=sx(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Kr(g,t,r,o,a,s)()}))}}return i}function Yy(n){const e=Ye(fh),t=Ye(ib),r=de(()=>{const l=an(n.to);return e.resolve(l)}),s=de(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=t.matched;if(!h||!d.length)return-1;const p=d.findIndex(Ji.bind(null,h));if(p>-1)return p;const g=Xy(l[u-2]);return u>1&&Xy(h)===g&&d[d.length-1].path!==g?d.findIndex(Ji.bind(null,l[u-2])):p}),i=de(()=>s.value>-1&&nO(t.params,r.value.params)),o=de(()=>s.value>-1&&s.value===t.matched.length-1&&Zw(t.params,r.value.params));function a(l={}){if(tO(l)){const u=e[an(n.replace)?"replace":"push"](an(n.to)).catch(ba);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:de(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Jx(n){return n.length===1?n[0]:n}const Zx=eh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yy,setup(n,{slots:e}){const t=Yt(Yy(n)),{options:r}=Ye(fh),s=de(()=>({[Jy(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[Jy(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&Jx(e.default(t));return n.custom?i:lh("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},i)}}}),eO=Zx;function tO(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function nO(n,e){for(const t in e){const r=e[t],s=n[t];if(typeof r=="string"){if(r!==s)return!1}else if(!Vn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Xy(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Jy=(n,e,t)=>n??e??t,rO=eh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=Ye(yf),s=de(()=>n.route||r.value),i=Ye(Qy,0),o=de(()=>{let u=an(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=de(()=>s.value.matched[o.value]);Tr(Qy,de(()=>o.value+1)),Tr(Xx,a),Tr(yf,s);const l=ct();return hn(()=>[l.value,a.value,n.name],([u,h,d],[p,g,v])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!Ji(h,g)||!p)&&(h.enterCallbacks[d]||[]).forEach(T=>T(u))},{flush:"post"}),()=>{const u=s.value,h=n.name,d=a.value,p=d&&d.components[h];if(!p)return Zy(t.default,{Component:p,route:u});const g=d.props[h],v=g?g===!0?u.params:typeof g=="function"?g(u):g:null,P=lh(p,xe({},v,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return Zy(t.default,{Component:P,route:u})||P}}});function Zy(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const sO=rO;function iO(n){const e=Wx(n.routes,n),t=n.parseQuery||Qx,r=n.stringifyQuery||zy,s=n.history,i=Qo(),o=Qo(),a=Qo(),l=Dn(Mr);let u=Mr;xi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=bd.bind(null,U=>""+U),d=bd.bind(null,_x),p=bd.bind(null,Ka);function g(U,X){let J,se;return tb(U)?(J=e.getRecordMatcher(U),se=X):se=U,e.addRoute(se,J)}function v(U){const X=e.getRecordMatcher(U);X&&e.removeRoute(X)}function T(){return e.getRoutes().map(U=>U.record)}function P(U){return!!e.getRecordMatcher(U)}function O(U,X){if(X=xe({},X||l.value),typeof U=="string"){const k=Ad(t,U,X.path),B=e.resolve({path:k.path},X),q=s.createHref(k.fullPath);return xe(k,B,{params:p(B.params),hash:Ka(k.hash),redirectedFrom:void 0,href:q})}let J;if(U.path!=null)J=xe({},U,{path:Ad(t,U.path,X.path).path});else{const k=xe({},U.params);for(const B in k)k[B]==null&&delete k[B];J=xe({},U,{params:d(k)}),X.params=d(X.params)}const se=e.resolve(J,X),ke=U.hash||"";se.params=h(p(se.params));const A=Ex(r,xe({},U,{hash:px(ke),path:se.path})),S=s.createHref(A);return xe({fullPath:A,hash:ke,query:r===zy?Yx(U.query):U.query||{}},se,{redirectedFrom:void 0,href:S})}function V(U){return typeof U=="string"?Ad(t,U,l.value.path):xe({},U)}function x(U,X){if(u!==U)return Zi(8,{from:X,to:U})}function M(U){return b(U)}function W(U){return M(xe(V(U),{replace:!0}))}function j(U){const X=U.matched[U.matched.length-1];if(X&&X.redirect){const{redirect:J}=X;let se=typeof J=="function"?J(U):J;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=V(se):{path:se},se.params={}),xe({query:U.query,hash:U.hash,params:se.path!=null?{}:U.params},se)}}function b(U,X){const J=u=O(U),se=l.value,ke=U.state,A=U.force,S=U.replace===!0,k=j(J);if(k)return b(xe(V(k),{state:typeof k=="object"?xe({},ke,k.state):ke,force:A,replace:S}),X||J);const B=J;B.redirectedFrom=X;let q;return!A&&Tx(r,se,J)&&(q=Zi(16,{to:B,from:se}),zt(se,se,!0,!1)),(q?Promise.resolve(q):I(B,se)).catch($=>cr($)?cr($,2)?$:en($):ve($,B,se)).then($=>{if($){if(cr($,2))return b(xe({replace:S},V($.to),{state:typeof $.to=="object"?xe({},ke,$.to.state):ke,force:A}),X||B)}else $=R(B,se,!0,S,ke);return C(B,se,$),$})}function _(U,X){const J=x(U,X);return J?Promise.reject(J):Promise.resolve()}function E(U){const X=Fn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(U):U()}function I(U,X){let J;const[se,ke,A]=oO(U,X);J=Rd(se.reverse(),"beforeRouteLeave",U,X);for(const k of se)k.leaveGuards.forEach(B=>{J.push(Kr(B,U,X))});const S=_.bind(null,U,X);return J.push(S),bt(J).then(()=>{J=[];for(const k of i.list())J.push(Kr(k,U,X));return J.push(S),bt(J)}).then(()=>{J=Rd(ke,"beforeRouteUpdate",U,X);for(const k of ke)k.updateGuards.forEach(B=>{J.push(Kr(B,U,X))});return J.push(S),bt(J)}).then(()=>{J=[];for(const k of A)if(k.beforeEnter)if(Vn(k.beforeEnter))for(const B of k.beforeEnter)J.push(Kr(B,U,X));else J.push(Kr(k.beforeEnter,U,X));return J.push(S),bt(J)}).then(()=>(U.matched.forEach(k=>k.enterCallbacks={}),J=Rd(A,"beforeRouteEnter",U,X,E),J.push(S),bt(J))).then(()=>{J=[];for(const k of o.list())J.push(Kr(k,U,X));return J.push(S),bt(J)}).catch(k=>cr(k,8)?k:Promise.reject(k))}function C(U,X,J){a.list().forEach(se=>E(()=>se(U,X,J)))}function R(U,X,J,se,ke){const A=x(U,X);if(A)return A;const S=X===Mr,k=xi?history.state:{};J&&(se||S?s.replace(U.fullPath,xe({scroll:S&&k&&k.scroll},ke)):s.push(U.fullPath,ke)),l.value=U,zt(U,X,J,S),en()}let w;function Ie(){w||(w=s.listen((U,X,J)=>{if(!Qt.listening)return;const se=O(U),ke=j(se);if(ke){b(xe(ke,{replace:!0,force:!0}),se).catch(ba);return}u=se;const A=l.value;xi&&Px(Uy(A.fullPath,J.delta),dh()),I(se,A).catch(S=>cr(S,12)?S:cr(S,2)?(b(xe(V(S.to),{force:!0}),se).then(k=>{cr(k,20)&&!J.delta&&J.type===Ga.pop&&s.go(-1,!1)}).catch(ba),Promise.reject()):(J.delta&&s.go(-J.delta,!1),ve(S,se,A))).then(S=>{S=S||R(se,A,!1),S&&(J.delta&&!cr(S,8)?s.go(-J.delta,!1):J.type===Ga.pop&&cr(S,20)&&s.go(-1,!1)),C(se,A,S)}).catch(ba)}))}let nt=Qo(),Ne=Qo(),ue;function ve(U,X,J){en(U);const se=Ne.list();return se.length?se.forEach(ke=>ke(U,X,J)):console.error(U),Promise.reject(U)}function _t(){return ue&&l.value!==Mr?Promise.resolve():new Promise((U,X)=>{nt.add([U,X])})}function en(U){return ue||(ue=!U,Ie(),nt.list().forEach(([X,J])=>U?J(U):X()),nt.reset()),U}function zt(U,X,J,se){const{scrollBehavior:ke}=n;if(!xi||!ke)return Promise.resolve();const A=!J&&kx(Uy(U.fullPath,0))||(se||!J)&&history.state&&history.state.scroll||null;return Zu().then(()=>ke(U,X,A)).then(S=>S&&Cx(S)).catch(S=>ve(S,U,X))}const Le=U=>s.go(U);let $e;const Fn=new Set,Qt={currentRoute:l,listening:!0,addRoute:g,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:T,resolve:O,options:n,push:M,replace:W,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ne.add,isReady:_t,install(U){const X=this;U.component("RouterLink",eO),U.component("RouterView",sO),U.config.globalProperties.$router=X,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>an(l)}),xi&&!$e&&l.value===Mr&&($e=!0,M(s.location).catch(ke=>{}));const J={};for(const ke in Mr)Object.defineProperty(J,ke,{get:()=>l.value[ke],enumerable:!0});U.provide(fh,X),U.provide(ib,cI(J)),U.provide(yf,l);const se=U.unmount;Fn.add(U),U.unmount=function(){Fn.delete(U),Fn.size<1&&(u=Mr,w&&w(),w=null,l.value=Mr,$e=!1,ue=!1),se()}}};function bt(U){return U.reduce((X,J)=>X.then(()=>E(J)),Promise.resolve())}return Qt}function oO(n,e){const t=[],r=[],s=[],i=Math.max(e.matched.length,n.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(n.matched.find(u=>Ji(u,a))?r.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(u=>Ji(u,l))||s.push(l))}return[t,r,s]}function $6(){return Ye(fh)}function aO(n){const{extendRoutes:e,routes:t}=n;return e&&console.warn('"extendRoutes()" is deprecated, please modify the routes directly. See https://uvr.esm.is/guide/extending-routes.html#extending-routes-at-runtime for an alternative.'),iO(Object.assign(n,{routes:typeof e=="function"&&e(t)||t}))}const lO="modulepreload",cO=function(n){return"/ejc-hub/"+n},ev={},la=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=cO(l),l in ev)return;ev[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":lO,u||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((p,g)=>{d.addEventListener("load",p),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},uO=n=>{const e={};Object.entries(Object.assign({"/src/layouts/default.vue":()=>la(()=>import("./default-CQj4ezP8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))})).forEach(([s,i])=>{let o=s.replace("/src/layouts/","").replace(".vue","");e[o]=i});function r(s,i=!0){return s.map(o=>{var a,l,u,h,d,p;if(((a=o.children)==null?void 0:a.length)>0&&(o.children=r(o.children,!1)),i){if(!o.component&&((l=o.children)==null?void 0:l.find(v=>{var T;return(v.path===""||v.path==="/")&&((T=v.meta)==null?void 0:T.isLayout)})))return o;if(((u=o.meta)==null?void 0:u.layout)!==!1)return{path:o.path,component:e[((h=o.meta)==null?void 0:h.layout)||"default"],children:o.path==="/"?[o]:[{...o,path:""}],meta:{isLayout:!0}}}return(d=o.meta)!=null&&d.layout?{path:o.path,component:e[(p=o.meta)==null?void 0:p.layout],children:[{...o,path:""}],meta:{isLayout:!0}}:o})}return r(n)},hO=[{path:"/",name:"/",component:()=>la(()=>import("./index-eC3bj0EJ.js"),__vite__mapDeps([10,11,3,4,12]))},{path:"/collection",name:"/collection",component:()=>la(()=>import("./collection-UdKpEPXN.js"),__vite__mapDeps([13,1,6,3,4,7,14,15,16,5,17,18,11,12,19,2,8,20])),meta:{requiresAuth:!0}},{path:"/lists",name:"/lists",component:()=>la(()=>import("./lists-BswrdEDp.js"),__vite__mapDeps([21,18,1,3,4,11,12,6,7,15,16,19,22])),meta:{requiresAuth:!0}},{path:"/settings",name:"/settings",component:()=>la(()=>import("./settings-BRxRIJHl.js"),__vite__mapDeps([23,14,15,3,4,6,7,16,5,17,11,12])),meta:{requiresAuth:!0}}],dO=()=>{};var tv={};/**
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
 */const ob={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const ee=function(n,e){if(!n)throw Io(e)},Io=function(n){return new Error("Firebase Database ("+ob.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const ab=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},fO=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ph={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(t[h],t[d],t[p],t[g])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ab(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):fO(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new pO;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lb=function(n){const e=ab(n);return ph.encodeByteArray(e,!0)},au=function(n){return lb(n).replace(/\./g,"")},lu=function(n){try{return ph.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mO(n){return cb(void 0,n)}function cb(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!gO(t)||(n[t]=cb(n[t],e[t]));return n}function gO(n){return n!=="__proto__"}/**
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
 */function _O(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yO=()=>_O().__FIREBASE_DEFAULTS__,vO=()=>{if(typeof process>"u"||typeof tv>"u")return;const n=tv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},EO=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&lu(n[1]);return e&&JSON.parse(e)},mh=()=>{try{return dO()||yO()||vO()||EO()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},TO=n=>{var e,t;return(t=(e=mh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},IO=n=>{const e=TO(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ub=()=>{var n;return(n=mh())===null||n===void 0?void 0:n.config},wO=n=>{var e;return(e=mh())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class za{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function bO(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[au(JSON.stringify(t)),au(JSON.stringify(o)),""].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function AO(){var n;const e=(n=mh())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RO(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SO(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function hb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CO(){const n=ht();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function PO(){return ob.NODE_ADMIN===!0}function db(){return!AO()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qp(){try{return typeof indexedDB=="object"}catch{return!1}}function kO(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const DO="FirebaseError";class sr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=DO,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wo.prototype.create)}}class wo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?NO(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new sr(s,a,r)}}function NO(n,e){return n.replace(xO,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xO=/\{\$([^}]+)}/g;/**
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
 */function Qa(n){return JSON.parse(n)}function wt(n){return JSON.stringify(n)}/**
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
 */const fb=function(n){let e={},t={},r={},s="";try{const i=n.split(".");e=Qa(lu(i[0])||""),t=Qa(lu(i[1])||""),s=i[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},OO=function(n){const e=fb(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},VO=function(n){const e=fb(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Cr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function eo(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function vf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function cu(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function to(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(nv(i)&&nv(o)){if(!to(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function nv(n){return n!==null&&typeof n=="object"}/**
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
 */function bo(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class MO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)r[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const p=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(p<<1|p>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):d<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(s<<5|s>>>27)+u+l+h+r[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=p}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<t;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function LO(n,e){const t=new FO(n,e);return t.subscribe.bind(t)}class FO{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");UO(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Sd),s.error===void 0&&(s.error=Sd),s.complete===void 0&&(s.complete=Sd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UO(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Sd(){}function BO(n,e){return`${n} failed: ${e} argument `}/**
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
 */const $O=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,ee(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},gh=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Zt(n){return n&&n._delegate?n._delegate:n}class Mn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ks="[DEFAULT]";/**
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
 */class jO{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new za;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WO(e))try{this.getOrInitializeService({instanceIdentifier:ks})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ks){return this.instances.has(e)}getOptions(e=ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qO(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ks){return this.component?this.component.multipleInstances?e:ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qO(n){return n===ks?void 0:n}function WO(n){return n.instantiationMode==="EAGER"}/**
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
 */class HO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jO(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Te||(Te={}));const KO={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},GO=Te.INFO,zO={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},QO=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=zO[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tl{constructor(e){this.name=e,this._logLevel=GO,this._logHandler=QO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const YO=(n,e)=>e.some(t=>n instanceof t);let rv,sv;function XO(){return rv||(rv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JO(){return sv||(sv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pb=new WeakMap,Ef=new WeakMap,mb=new WeakMap,Cd=new WeakMap,Yp=new WeakMap;function ZO(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(es(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&pb.set(t,n)}).catch(()=>{}),Yp.set(e,n),e}function e1(n){if(Ef.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Ef.set(n,e)}let Tf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ef.get(n);if(e==="objectStoreNames")return n.objectStoreNames||mb.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return es(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function t1(n){Tf=n(Tf)}function n1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Pd(this),e,...t);return mb.set(r,e.sort?e.sort():[e]),es(r)}:JO().includes(n)?function(...e){return n.apply(Pd(this),e),es(pb.get(this))}:function(...e){return es(n.apply(Pd(this),e))}}function r1(n){return typeof n=="function"?n1(n):(n instanceof IDBTransaction&&e1(n),YO(n,XO())?new Proxy(n,Tf):n)}function es(n){if(n instanceof IDBRequest)return ZO(n);if(Cd.has(n))return Cd.get(n);const e=r1(n);return e!==n&&(Cd.set(n,e),Yp.set(e,n)),e}const Pd=n=>Yp.get(n);function s1(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=es(o);return r&&o.addEventListener("upgradeneeded",l=>{r(es(o.result),l.oldVersion,l.newVersion,es(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const i1=["get","getKey","getAll","getAllKeys","count"],o1=["put","add","delete","clear"],kd=new Map;function iv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(kd.get(e))return kd.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=o1.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||i1.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&l.done]))[0]};return kd.set(e,i),i}t1(n=>({...n,get:(e,t,r)=>iv(e,t)||n.get(e,t,r),has:(e,t)=>!!iv(e,t)||n.has(e,t)}));/**
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
 */class a1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(l1(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function l1(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const If="@firebase/app",ov="0.11.2";/**
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
 */const wr=new Tl("@firebase/app"),c1="@firebase/app-compat",u1="@firebase/analytics-compat",h1="@firebase/analytics",d1="@firebase/app-check-compat",f1="@firebase/app-check",p1="@firebase/auth",m1="@firebase/auth-compat",g1="@firebase/database",_1="@firebase/data-connect",y1="@firebase/database-compat",v1="@firebase/functions",E1="@firebase/functions-compat",T1="@firebase/installations",I1="@firebase/installations-compat",w1="@firebase/messaging",b1="@firebase/messaging-compat",A1="@firebase/performance",R1="@firebase/performance-compat",S1="@firebase/remote-config",C1="@firebase/remote-config-compat",P1="@firebase/storage",k1="@firebase/storage-compat",D1="@firebase/firestore",N1="@firebase/vertexai",x1="@firebase/firestore-compat",O1="firebase",V1="11.4.0";/**
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
 */const wf="[DEFAULT]",M1={[If]:"fire-core",[c1]:"fire-core-compat",[h1]:"fire-analytics",[u1]:"fire-analytics-compat",[f1]:"fire-app-check",[d1]:"fire-app-check-compat",[p1]:"fire-auth",[m1]:"fire-auth-compat",[g1]:"fire-rtdb",[_1]:"fire-data-connect",[y1]:"fire-rtdb-compat",[v1]:"fire-fn",[E1]:"fire-fn-compat",[T1]:"fire-iid",[I1]:"fire-iid-compat",[w1]:"fire-fcm",[b1]:"fire-fcm-compat",[A1]:"fire-perf",[R1]:"fire-perf-compat",[S1]:"fire-rc",[C1]:"fire-rc-compat",[P1]:"fire-gcs",[k1]:"fire-gcs-compat",[D1]:"fire-fst",[x1]:"fire-fst-compat",[N1]:"fire-vertex","fire-js":"fire-js",[O1]:"fire-js-all"};/**
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
 */const uu=new Map,L1=new Map,bf=new Map;function av(n,e){try{n.container.addComponent(e)}catch(t){wr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Zn(n){const e=n.name;if(bf.has(e))return wr.debug(`There were multiple attempts to register component ${e}.`),!1;bf.set(e,n);for(const t of uu.values())av(t,n);for(const t of L1.values())av(t,n);return!0}function Xp(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function on(n){return n==null?!1:n.settings!==void 0}/**
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
 */const F1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ts=new wo("app","Firebase",F1);/**
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
 */class U1{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}/**
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
 */const gs=V1;function gb(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wf,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ts.create("bad-app-name",{appName:String(s)});if(t||(t=ub()),!t)throw ts.create("no-options");const i=uu.get(s);if(i){if(to(t,i.options)&&to(r,i.config))return i;throw ts.create("duplicate-app",{appName:s})}const o=new HO(s);for(const l of bf.values())o.addComponent(l);const a=new U1(t,r,o);return uu.set(s,a),a}function _b(n=wf){const e=uu.get(n);if(!e&&n===wf&&ub())return gb();if(!e)throw ts.create("no-app",{appName:n});return e}function dn(n,e,t){var r;let s=(r=M1[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wr.warn(a.join(" "));return}Zn(new Mn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const B1="firebase-heartbeat-database",$1=1,Ya="firebase-heartbeat-store";let Dd=null;function yb(){return Dd||(Dd=s1(B1,$1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ya)}catch(t){console.warn(t)}}}}).catch(n=>{throw ts.create("idb-open",{originalErrorMessage:n.message})})),Dd}async function j1(n){try{const t=(await yb()).transaction(Ya),r=await t.objectStore(Ya).get(vb(n));return await t.done,r}catch(e){if(e instanceof sr)wr.warn(e.message);else{const t=ts.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wr.warn(t.message)}}}async function lv(n,e){try{const r=(await yb()).transaction(Ya,"readwrite");await r.objectStore(Ya).put(e,vb(n)),await r.done}catch(t){if(t instanceof sr)wr.warn(t.message);else{const r=ts.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});wr.warn(r.message)}}}function vb(n){return`${n.name}!${n.options.appId}`}/**
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
 */const q1=1024,W1=30;class H1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new G1(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>W1){const o=z1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=cv(),{heartbeatsToSend:r,unsentEntries:s}=K1(this._heartbeatsCache.heartbeats),i=au(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return wr.warn(t),""}}}function cv(){return new Date().toISOString().substring(0,10)}function K1(n,e=q1){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),uv(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),uv(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class G1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qp()?kO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await j1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return lv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return lv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function uv(n){return au(JSON.stringify({version:2,heartbeats:n})).length}function z1(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Q1(n){Zn(new Mn("platform-logger",e=>new a1(e),"PRIVATE")),Zn(new Mn("heartbeat",e=>new H1(e),"PRIVATE")),dn(If,ov,n),dn(If,ov,"esm2017"),dn("fire-js","")}Q1("");function Jp(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Eb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Y1=Eb,Tb=new wo("auth","Firebase",Eb());/**
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
 */const hu=new Tl("@firebase/auth");function X1(n,...e){hu.logLevel<=Te.WARN&&hu.warn(`Auth (${gs}): ${n}`,...e)}function Nc(n,...e){hu.logLevel<=Te.ERROR&&hu.error(`Auth (${gs}): ${n}`,...e)}/**
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
 */function er(n,...e){throw em(n,...e)}function Nn(n,...e){return em(n,...e)}function Zp(n,e,t){const r=Object.assign(Object.assign({},Y1()),{[e]:t});return new wo("auth","Firebase",r).create(e,{appName:n.name})}function Hs(n){return Zp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function J1(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&er(n,"argument-error"),Zp(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function em(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Tb.create(n,...e)}function _e(n,e,...t){if(!n)throw em(e,...t)}function mr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Nc(e),new Error(e)}function br(n,e){n||mr(e)}/**
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
 */function Af(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Z1(){return hv()==="http:"||hv()==="https:"}function hv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function eV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Z1()||SO()||"connection"in navigator)?navigator.onLine:!0}function tV(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Il{constructor(e,t){this.shortDelay=e,this.longDelay=t,br(t>e,"Short delay should be less than long delay!"),this.isMobile=zp()||hb()}get(){return eV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tm(n,e){br(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ib{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const nV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const rV=new Il(3e4,6e4);function nm(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ao(n,e,t,r,s={}){return wb(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=bo(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:l},i);return RO()||(u.referrerPolicy="no-referrer"),Ib.fetch()(bb(n,n.config.apiHost,t,a),u)})}async function wb(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},nV),e);try{const s=new iV(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pc(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pc(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pc(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw pc(n,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zp(n,h,u);er(n,h)}}catch(s){if(s instanceof sr)throw s;er(n,"network-request-failed",{message:String(s)})}}async function sV(n,e,t,r,s={}){const i=await Ao(n,e,t,r,s);return"mfaPendingCredential"in i&&er(n,"multi-factor-auth-required",{_serverResponse:i}),i}function bb(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?tm(n.config,s):`${n.config.apiScheme}://${s}`}class iV{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),rV.get())})}}function pc(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Nn(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function oV(n,e){return Ao(n,"POST","/v1/accounts:delete",e)}async function Ab(n,e){return Ao(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ra(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aV(n,e=!1){const t=Zt(n),r=await t.getIdToken(e),s=rm(r);_e(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ra(Nd(s.auth_time)),issuedAtTime:Ra(Nd(s.iat)),expirationTime:Ra(Nd(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Nd(n){return Number(n)*1e3}function rm(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Nc("JWT malformed, contained fewer than 3 sections"),null;try{const s=lu(t);return s?JSON.parse(s):(Nc("Failed to decode base64 JWT payload"),null)}catch(s){return Nc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function dv(n){const e=rm(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xa(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof sr&&lV(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function lV({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class cV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Rf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ra(this.lastLoginAt),this.creationTime=Ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function du(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Xa(n,Ab(t,{idToken:r}));_e(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Rb(i.providerUserInfo):[],a=hV(n.providerData,o),l=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Rf(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function uV(n){const e=Zt(n);await du(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hV(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Rb(n){return n.map(e=>{var{providerId:t}=e,r=Jp(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function dV(n,e){const t=await wb(n,{},async()=>{const r=bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=bb(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ib.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function fV(n,e){return Ao(n,"POST","/v2/accounts:revokeToken",nm(n,e))}/**
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
 */class Wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=dv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await dV(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Wi;return r&&(_e(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(_e(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(_e(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wi,this.toJSON())}_performRefresh(){return mr("not implemented")}}/**
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
 */function Lr(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class gr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Jp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Rf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Xa(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return aV(this,e)}reload(){return uV(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await du(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(on(this.auth.app))return Promise.reject(Hs(this.auth));const e=await this.getIdToken();return await Xa(this,oV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,l,u,h;const d=(r=t.displayName)!==null&&r!==void 0?r:void 0,p=(s=t.email)!==null&&s!==void 0?s:void 0,g=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=t.photoURL)!==null&&o!==void 0?o:void 0,T=(a=t.tenantId)!==null&&a!==void 0?a:void 0,P=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,O=(u=t.createdAt)!==null&&u!==void 0?u:void 0,V=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:x,emailVerified:M,isAnonymous:W,providerData:j,stsTokenManager:b}=t;_e(x&&b,e,"internal-error");const _=Wi.fromJSON(this.name,b);_e(typeof x=="string",e,"internal-error"),Lr(d,e.name),Lr(p,e.name),_e(typeof M=="boolean",e,"internal-error"),_e(typeof W=="boolean",e,"internal-error"),Lr(g,e.name),Lr(v,e.name),Lr(T,e.name),Lr(P,e.name),Lr(O,e.name),Lr(V,e.name);const E=new gr({uid:x,auth:e,email:p,emailVerified:M,displayName:d,isAnonymous:W,photoURL:v,phoneNumber:g,tenantId:T,stsTokenManager:_,createdAt:O,lastLoginAt:V});return j&&Array.isArray(j)&&(E.providerData=j.map(I=>Object.assign({},I))),P&&(E._redirectEventId=P),E}static async _fromIdTokenResponse(e,t,r=!1){const s=new Wi;s.updateFromServerResponse(t);const i=new gr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await du(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];_e(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Rb(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Wi;a.updateFromIdToken(r);const l=new gr({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Rf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const fv=new Map;function _r(n){br(n instanceof Function,"Expected a class definition");let e=fv.get(n);return e?(br(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fv.set(n,e),e)}/**
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
 */class Sb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Sb.type="NONE";const pv=Sb;/**
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
 */function xc(n,e,t){return`firebase:${n}:${e}:${t}`}class Hi{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xc(this.userKey,s.apiKey,i),this.fullPersistenceKey=xc("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Hi(_r(pv),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||_r(pv);const o=xc(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){const d=gr._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Hi(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Hi(i,e,r))}}/**
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
 */function mv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Db(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xb(e))return"Blackberry";if(Ob(e))return"Webos";if(Pb(e))return"Safari";if((e.includes("chrome/")||kb(e))&&!e.includes("edge/"))return"Chrome";if(Nb(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cb(n=ht()){return/firefox\//i.test(n)}function Pb(n=ht()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kb(n=ht()){return/crios\//i.test(n)}function Db(n=ht()){return/iemobile/i.test(n)}function Nb(n=ht()){return/android/i.test(n)}function xb(n=ht()){return/blackberry/i.test(n)}function Ob(n=ht()){return/webos/i.test(n)}function sm(n=ht()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function pV(n=ht()){var e;return sm(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mV(){return CO()&&document.documentMode===10}function Vb(n=ht()){return sm(n)||Nb(n)||Ob(n)||xb(n)||/windows phone/i.test(n)||Db(n)}/**
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
 */function Mb(n,e=[]){let t;switch(n){case"Browser":t=mv(ht());break;case"Worker":t=`${mv(ht())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${gs}/${r}`}/**
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
 */class gV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _V(n,e={}){return Ao(n,"GET","/v2/passwordPolicy",nm(n,e))}/**
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
 */const yV=6;class vV{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:yV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class EV{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gv(this),this.idTokenSubscription=new gv(this),this.beforeStateQueue=new gV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_r(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ab(this,{idToken:e}),r=await gr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(on(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await du(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(on(this.app))return Promise.reject(Hs(this));const t=e?Zt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return on(this.app)?Promise.reject(Hs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return on(this.app)?Promise.reject(Hs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_r(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _V(this),t=new vV(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await fV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_r(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[_r(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(on(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&X1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function im(n){return Zt(n)}class gv{constructor(e){this.auth=e,this.observer=null,this.addObserver=LO(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let om={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TV(n){om=n}function IV(n){return om.loadJS(n)}function wV(){return om.gapiScript}function bV(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function AV(n,e){const t=Xp(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(to(i,e??{}))return s;er(s,"already-initialized")}return t.initialize({options:e})}function RV(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_r);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */class Lb{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mr("not implemented")}_getIdTokenResponse(e){return mr("not implemented")}_linkToIdToken(e,t){return mr("not implemented")}_getReauthenticationResolver(e){return mr("not implemented")}}/**
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
 */async function Ki(n,e){return sV(n,"POST","/v1/accounts:signInWithIdp",nm(n,e))}/**
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
 */const SV="http://localhost";class Xs extends Lb{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):er("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Jp(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Xs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ki(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ki(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ki(e,t)}buildRequest(){const e={requestUri:SV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bo(t)}return e}}/**
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
 */class am{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wl extends am{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gr extends wl{constructor(){super("facebook.com")}static credential(e){return Xs._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gr.PROVIDER_ID="facebook.com";/**
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
 */class zr extends wl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xs._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return zr.credential(t,r)}catch{return null}}}zr.GOOGLE_SIGN_IN_METHOD="google.com";zr.PROVIDER_ID="google.com";/**
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
 */class Qr extends wl{constructor(){super("github.com")}static credential(e){return Xs._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.GITHUB_SIGN_IN_METHOD="github.com";Qr.PROVIDER_ID="github.com";/**
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
 */class Yr extends wl{constructor(){super("twitter.com")}static credential(e,t){return Xs._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Yr.credential(t,r)}catch{return null}}}Yr.TWITTER_SIGN_IN_METHOD="twitter.com";Yr.PROVIDER_ID="twitter.com";/**
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
 */class no{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await gr._fromIdTokenResponse(e,r,s),o=_v(r);return new no({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=_v(r);return new no({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function _v(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class fu extends sr{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,fu.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new fu(e,t,r,s)}}function Fb(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?fu._fromErrorAndOperation(n,i,e,r):i})}async function CV(n,e,t=!1){const r=await Xa(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return no._forOperation(n,"link",r)}/**
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
 */async function PV(n,e,t=!1){const{auth:r}=n;if(on(r.app))return Promise.reject(Hs(r));const s="reauthenticate";try{const i=await Xa(n,Fb(r,s,e,n),t);_e(i.idToken,r,"internal-error");const o=rm(i.idToken);_e(o,r,"internal-error");const{sub:a}=o;return _e(n.uid===a,r,"user-mismatch"),no._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&er(r,"user-mismatch"),i}}/**
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
 */async function kV(n,e,t=!1){if(on(n.app))return Promise.reject(Hs(n));const r="signIn",s=await Fb(n,r,e),i=await no._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function DV(n,e,t,r){return Zt(n).onIdTokenChanged(e,t,r)}function j6(n){return Zt(n).signOut()}const pu="__sak";/**
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
 */class Ub{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pu,"1"),this.storage.removeItem(pu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const NV=1e3,xV=10;class Bb extends Ub{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);mV()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xV):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},NV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bb.type="LOCAL";const OV=Bb;/**
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
 */class $b extends Ub{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$b.type="SESSION";const jb=$b;/**
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
 */function VV(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _h{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new _h(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),l=await VV(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_h.receivers=[];/**
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
 */function lm(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class MV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=lm("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Yn(){return window}function LV(n){Yn().location.href=n}/**
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
 */function qb(){return typeof Yn().WorkerGlobalScope<"u"&&typeof Yn().importScripts=="function"}async function FV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UV(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function BV(){return qb()?self:null}/**
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
 */const Wb="firebaseLocalStorageDb",$V=1,mu="firebaseLocalStorage",Hb="fbase_key";class bl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yh(n,e){return n.transaction([mu],e?"readwrite":"readonly").objectStore(mu)}function jV(){const n=indexedDB.deleteDatabase(Wb);return new bl(n).toPromise()}function Sf(){const n=indexedDB.open(Wb,$V);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(mu,{keyPath:Hb})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(mu)?e(r):(r.close(),await jV(),e(await Sf()))})})}async function yv(n,e,t){const r=yh(n,!0).put({[Hb]:e,value:t});return new bl(r).toPromise()}async function qV(n,e){const t=yh(n,!1).get(e),r=await new bl(t).toPromise();return r===void 0?null:r.value}function vv(n,e){const t=yh(n,!0).delete(e);return new bl(t).toPromise()}const WV=800,HV=3;class Kb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>HV)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_h._getInstance(BV()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await FV(),!this.activeServiceWorker)return;this.sender=new MV(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sf();return await yv(e,pu,"1"),await vv(e,pu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>yv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>qV(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=yh(s,!1).getAll();return new bl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kb.type="LOCAL";const KV=Kb;new Il(3e4,6e4);/**
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
 */function Gb(n,e){return e?_r(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class cm extends Lb{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ki(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ki(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function GV(n){return kV(n.auth,new cm(n),n.bypassAuthState)}function zV(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),PV(t,new cm(n),n.bypassAuthState)}async function QV(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),CV(t,new cm(n),n.bypassAuthState)}/**
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
 */class zb{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GV;case"linkViaPopup":case"linkViaRedirect":return QV;case"reauthViaPopup":case"reauthViaRedirect":return zV;default:er(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const YV=new Il(2e3,1e4);async function q6(n,e,t){if(on(n.app))return Promise.reject(Nn(n,"operation-not-supported-in-this-environment"));const r=im(n);J1(n,e,am);const s=Gb(r,t);return new Us(r,"signInViaPopup",e,s).executeNotNull()}class Us extends zb{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Us.currentPopupAction&&Us.currentPopupAction.cancel(),Us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=lm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YV.get())};e()}}Us.currentPopupAction=null;/**
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
 */const XV="pendingRedirect",Oc=new Map;class JV extends zb{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Oc.get(this.auth._key());if(!e){try{const r=await ZV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Oc.set(this.auth._key(),e)}return this.bypassAuthState||Oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZV(n,e){const t=nM(e),r=tM(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function eM(n,e){Oc.set(n._key(),e)}function tM(n){return _r(n._redirectPersistence)}function nM(n){return xc(XV,n.config.apiKey,n.name)}async function rM(n,e,t=!1){if(on(n.app))return Promise.reject(Hs(n));const r=im(n),s=Gb(r,e),o=await new JV(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const sM=10*60*1e3;class iM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oM(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Qb(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Nn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ev(e))}saveEventToCache(e){this.cachedEventUids.add(Ev(e)),this.lastProcessedEventTime=Date.now()}}function Ev(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Qb({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oM(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qb(n);default:return!1}}/**
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
 */async function aM(n,e={}){return Ao(n,"GET","/v1/projects",e)}/**
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
 */const lM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cM=/^https?/;async function uM(n){if(n.config.emulator)return;const{authorizedDomains:e}=await aM(n);for(const t of e)try{if(hM(t))return}catch{}er(n,"unauthorized-domain")}function hM(n){const e=Af(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!cM.test(t))return!1;if(lM.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const dM=new Il(3e4,6e4);function Tv(){const n=Yn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function fM(n){return new Promise((e,t)=>{var r,s,i;function o(){Tv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tv(),t(Nn(n,"network-request-failed"))},timeout:dM.get()})}if(!((s=(r=Yn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Yn().gapi)===null||i===void 0)&&i.load)o();else{const a=bV("iframefcb");return Yn()[a]=()=>{gapi.load?o():t(Nn(n,"network-request-failed"))},IV(`${wV()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Vc=null,e})}let Vc=null;function pM(n){return Vc=Vc||fM(n),Vc}/**
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
 */const mM=new Il(5e3,15e3),gM="__/auth/iframe",_M="emulator/auth/iframe",yM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EM(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?tm(e,_M):`https://${n.config.authDomain}/${gM}`,r={apiKey:e.apiKey,appName:n.name,v:gs},s=vM.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${bo(r).slice(1)}`}async function TM(n){const e=await pM(n),t=Yn().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:EM(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yM,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Nn(n,"network-request-failed"),a=Yn().setTimeout(()=>{i(o)},mM.get());function l(){Yn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const IM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wM=500,bM=600,AM="_blank",RM="http://localhost";class Iv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SM(n,e,t,r=wM,s=bM){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},IM),{width:r.toString(),height:s.toString(),top:i,left:o}),u=ht().toLowerCase();t&&(a=kb(u)?AM:t),Cb(u)&&(e=e||RM,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,v])=>`${p}${g}=${v},`,"");if(pV(u)&&a!=="_self")return CM(e||"",a),new Iv(null);const d=window.open(e||"",a,h);_e(d,n,"popup-blocked");try{d.focus()}catch{}return new Iv(d)}function CM(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const PM="__/auth/handler",kM="emulator/auth/handler",DM=encodeURIComponent("fac");async function wv(n,e,t,r,s,i){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:gs,eventId:s};if(e instanceof am){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",vf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof wl){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),u=l?`#${DM}=${encodeURIComponent(l)}`:"";return`${NM(n)}?${bo(a).slice(1)}${u}`}function NM({config:n}){return n.emulator?tm(n,kM):`https://${n.authDomain}/${PM}`}/**
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
 */const xd="webStorageSupport";class xM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jb,this._completeRedirectFn=rM,this._overrideRedirectResult=eM}async _openPopup(e,t,r,s){var i;br((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await wv(e,t,r,Af(),s);return SM(e,o,lm())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await wv(e,t,r,Af(),s);return LV(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(br(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await TM(e),r=new iM(e);return t.register("authEvent",s=>(_e(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xd,{type:xd},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[xd];o!==void 0&&t(!!o),er(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uM(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Vb()||Pb()||sm()}}const OM=xM;var bv="@firebase/auth",Av="1.9.1";/**
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
 */class VM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function MM(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LM(n){Zn(new Mn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;_e(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mb(n)},u=new EV(r,s,i,l);return RV(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Zn(new Mn("auth-internal",e=>{const t=im(e.getProvider("auth").getImmediate());return(r=>new VM(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(bv,Av,MM(n)),dn(bv,Av,"esm2017")}/**
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
 */const FM=5*60;wO("authIdTokenMaxAge");function UM(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}TV({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Nn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",UM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LM("Browser");/**
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
 */const BM=new Map,$M={activated:!1,tokenObservers:[]};function Ln(n){return BM.get(n)||Object.assign({},$M)}const Rv={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class jM{constructor(e,t,r,s,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new za,this.pending.promise.catch(t=>{}),await qM(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new za,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function qM(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */const WM={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},gu=new wo("appCheck","AppCheck",WM);function Yb(n){if(!Ln(n).activated)throw gu.create("use-before-activation",{appName:n.name})}/**
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
 */const HM="firebase-app-check-database",KM=1,Cf="firebase-app-check-store";let mc=null;function GM(){return mc||(mc=new Promise((n,e)=>{try{const t=indexedDB.open(HM,KM);t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var s;e(gu.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},t.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Cf,{keyPath:"compositeKey"})}}}catch(t){e(gu.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),mc)}function zM(n,e){return QM(YM(n),e)}async function QM(n,e){const r=(await GM()).transaction(Cf,"readwrite"),i=r.objectStore(Cf).put({compositeKey:n,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var u;a(gu.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}function YM(n){return`${n.options.appId}-${n.name}`}/**
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
 */const Pf=new Tl("@firebase/app-check");function Sv(n,e){return Qp()?zM(n,e).catch(t=>{Pf.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
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
 */const XM={error:"UNKNOWN_ERROR"};function JM(n){return ph.encodeString(JSON.stringify(n),!1)}async function kf(n,e=!1){const t=n.app;Yb(t);const r=Ln(t);let s=r.token,i;if(s&&!ca(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(ca(l)?s=l:await Sv(t,void 0))}if(!e&&s&&ca(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await Ln(t).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Pf.warn(l.message):Pf.error(l),i=l}let a;return s?i?ca(s)?a={token:s.token,internalError:i}:a=Pv(i):(a={token:s.token},r.token=s,await Sv(t,s)):a=Pv(i),o&&nL(t,a),a}async function ZM(n){const e=n.app;Yb(e);const{provider:t}=Ln(e);{const{token:r}=await t.getToken();return{token:r}}}function eL(n,e,t,r){const{app:s}=n,i=Ln(s),o={next:t,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&ca(i.token)){const a=i.token;Promise.resolve().then(()=>{t({token:a.token}),Cv(n)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Cv(n))}function Xb(n,e){const t=Ln(n),r=t.tokenObservers.filter(s=>s.next!==e);r.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=r}function Cv(n){const{app:e}=n,t=Ln(e);let r=t.tokenRefresher;r||(r=tL(n),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function tL(n){const{app:e}=n;return new jM(async()=>{const t=Ln(e);let r;if(t.token?r=await kf(n,!0):r=await kf(n),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const t=Ln(e);if(t.token){let r=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const s=t.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},Rv.RETRIAL_MIN_WAIT,Rv.RETRIAL_MAX_WAIT)}function nL(n,e){const t=Ln(n).tokenObservers;for(const r of t)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function ca(n){return n.expireTimeMillis-Date.now()>0}function Pv(n){return{token:JM(XM),error:n}}/**
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
 */class rL{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Ln(this.app);for(const t of e)Xb(this.app,t.next);return Promise.resolve()}}function sL(n,e){return new rL(n,e)}function iL(n){return{getToken:e=>kf(n,e),getLimitedUseToken:()=>ZM(n),addTokenListener:e=>eL(n,"INTERNAL",e),removeTokenListener:e=>Xb(n.app,e)}}const oL="@firebase/app-check",aL="0.8.12",lL="app-check",kv="app-check-internal";function cL(){Zn(new Mn(lL,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return sL(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(kv).initialize()})),Zn(new Mn(kv,n=>{const e=n.getProvider("app-check").getImmediate();return iL(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),dn(oL,aL)}cL();var uL="firebase",hL="11.4.0";/**
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
 */dn(uL,hL,"app");const Jb=Symbol("firebaseApp");function Al(n){return yl()&&Ye(Jb,null)||_b(n)}const Wn=()=>{},dL=typeof window<"u";function um(n,e){return e.split(".").reduce((t,r)=>t&&t[r],n)}function fL(n,e,t){const r=(""+e).split("."),s=r.pop(),i=r.reduce((o,a)=>o&&o[a],n);if(i!=null)return Array.isArray(i)?i.splice(Number(s),1,t):i[s]=t}function ui(n){return!!n&&typeof n=="object"}const pL=Object.prototype;function mL(n){return ui(n)&&Object.getPrototypeOf(n)===pL}function hm(n){return ui(n)&&n.type==="document"}function gL(n){return ui(n)&&n.type==="collection"}function _L(n){return hm(n)||gL(n)}function yL(n){return ui(n)&&n.type==="query"}function vL(n){return ui(n)&&"ref"in n}function EL(n){return ui(n)&&typeof n.bucket=="string"}function TL(n,e){let t;return()=>{if(!t)return t=!0,n(e())}}const IL=Symbol.for("v-scx");function wL(){return!!Ye(IL,0)}const gc=new WeakMap;function Zb(n,e){if(!gc.has(n)){const t=gl(!0);gc.set(n,t);const{unmount:r}=e;e.unmount=()=>{r.call(e),t.stop(),gc.delete(n)}}return gc.get(n)}const e0=new WeakMap;function W6(n){return e0.get(Al(n))}const _c=new WeakMap;function t0(n){const e=Al(n);if(!_c.has(e)){let t;const s=[new Promise(i=>{t=i}),i=>{_c.set(e,i),t(i.value)}];_c.set(e,s)}return _c.get(e)}function bL(n){const e=t0(n);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function AL(n,e){DV(e,t=>{const r=t0();n.value=t,Array.isArray(r)&&r[1](n)})}var Dv={};const Nv="@firebase/database",xv="1.0.13";/**
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
 */let n0="";function RL(n){n0=n}/**
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
 */class SL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),wt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Qa(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class CL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Cr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const r0=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new SL(e)}}catch{}return new CL},Bs=r0("localStorage"),PL=r0("sessionStorage");/**
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
 */const Gi=new Tl("@firebase/database"),kL=function(){let n=1;return function(){return n++}}(),s0=function(n){const e=$O(n),t=new MO;t.update(e);const r=t.digest();return ph.encodeByteArray(r)},Rl=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Rl.apply(null,r):typeof r=="object"?e+=wt(r):e+=r,e+=" "}return e};let Sa=null,Ov=!0;const DL=function(n,e){ee(!0,"Can't turn on custom loggers persistently."),Gi.logLevel=Te.VERBOSE,Sa=Gi.log.bind(Gi)},xt=function(...n){if(Ov===!0&&(Ov=!1,Sa===null&&PL.get("logging_enabled")===!0&&DL()),Sa){const e=Rl.apply(null,n);Sa(e)}},Sl=function(n){return function(...e){xt(n,...e)}},Df=function(...n){const e="FIREBASE INTERNAL ERROR: "+Rl(...n);Gi.error(e)},Js=function(...n){const e=`FIREBASE FATAL ERROR: ${Rl(...n)}`;throw Gi.error(e),new Error(e)},fn=function(...n){const e="FIREBASE WARNING: "+Rl(...n);Gi.warn(e)},NL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&fn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},i0=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},xL=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ro="[MIN_NAME]",Zs="[MAX_NAME]",Ro=function(n,e){if(n===e)return 0;if(n===ro||e===Zs)return-1;if(e===ro||n===Zs)return 1;{const t=Vv(n),r=Vv(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},OL=function(n,e){return n===e?0:n<e?-1:1},Yo=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+wt(e))},dm=function(n){if(typeof n!="object"||n===null)return wt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=wt(e[r]),t+=":",t+=dm(n[e[r]]);return t+="}",t},o0=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function bn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const a0=function(n){ee(!i0(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,i,o,a,l;n===0?(i=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),i=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-r-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let p=parseInt(h.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),d=d+p}return d.toLowerCase()},VL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ML=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},LL=new RegExp("^-?(0*)\\d{1,10}$"),FL=-2147483648,UL=2147483647,Vv=function(n){if(LL.test(n)){const e=Number(n);if(e>=FL&&e<=UL)return e}return null},Cl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw fn("Exception was thrown by user callback.",t),e},Math.floor(0))}},BL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ca=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class $L{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,on(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){fn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class jL{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(xt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',fn(e)}}/**
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
 */const fm="5",l0="v",c0="s",u0="r",h0="f",d0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,f0="ls",p0="p",Nf="ac",m0="websocket",g0="long_polling";/**
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
 */class qL{constructor(e,t,r,s,i=!1,o="",a=!1,l=!1,u=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function WL(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function _0(n,e,t){ee(typeof e=="string","typeof type must == string"),ee(typeof t=="object","typeof params must == object");let r;if(e===m0)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===g0)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);WL(n)&&(t.ns=n.namespace);const s=[];return bn(t,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class HL{constructor(){this.counters_={}}incrementCounter(e,t=1){Cr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return mO(this.counters_)}}/**
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
 */const Od={},Vd={};function pm(n){const e=n.toString();return Od[e]||(Od[e]=new HL),Od[e]}function KL(n,e){const t=n.toString();return Vd[t]||(Vd[t]=e()),Vd[t]}/**
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
 */class GL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Cl(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Mv="start",zL="close",QL="pLPCommand",YL="pRTLPCB",y0="id",v0="pw",E0="ser",XL="cb",JL="seg",ZL="ts",eF="d",tF="dframe",T0=1870,I0=30,nF=T0-I0,rF=25e3,sF=3e4;class Ui{constructor(e,t,r,s,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Sl(e),this.stats_=pm(t),this.urlFn=l=>(this.appCheckToken&&(l[Nf]=this.appCheckToken),_0(t,g0,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new GL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sF)),xL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mm((...i)=>{const[o,a,l,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Mv)this.id=a,this.password=l;else if(o===zL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Mv]="t",r[E0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[XL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[l0]=fm,this.transportSessionId&&(r[c0]=this.transportSessionId),this.lastSessionId&&(r[f0]=this.lastSessionId),this.applicationId&&(r[p0]=this.applicationId),this.appCheckToken&&(r[Nf]=this.appCheckToken),typeof location<"u"&&location.hostname&&d0.test(location.hostname)&&(r[u0]=h0);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ui.forceAllow_=!0}static forceDisallow(){Ui.forceDisallow_=!0}static isAvailable(){return Ui.forceAllow_?!0:!Ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!VL()&&!ML()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=lb(t),s=o0(r,nF);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[tF]="t",r[y0]=e,r[v0]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=wt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class mm{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=kL(),window[QL+this.uniqueCallbackIdentifier]=e,window[YL+this.uniqueCallbackIdentifier]=t,this.myIFrame=mm.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){xt("frame writing exception"),a.stack&&xt(a.stack),xt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[y0]=this.myID,e[v0]=this.myPW,e[E0]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+I0+r.length<=T0;){const o=this.pendingSegs.shift();r=r+"&"+JL+s+"="+o.seg+"&"+ZL+s+"="+o.ts+"&"+eF+s+"="+o.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(rF)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{xt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const iF=16384,oF=45e3;let _u=null;typeof MozWebSocket<"u"?_u=MozWebSocket:typeof WebSocket<"u"&&(_u=WebSocket);class Sn{constructor(e,t,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Sl(this.connId),this.stats_=pm(t),this.connURL=Sn.connectionURL_(t,o,a,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,i){const o={};return o[l0]=fm,typeof location<"u"&&location.hostname&&d0.test(location.hostname)&&(o[u0]=h0),t&&(o[c0]=t),r&&(o[f0]=r),s&&(o[Nf]=s),i&&(o[p0]=i),_0(e,m0,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bs.set("previous_websocket_failure",!0);try{let r;PO(),this.mySock=new _u(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&_u!==null&&!Sn.forceDisallow_}static previouslyFailed(){return Bs.isInMemoryStorage||Bs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Qa(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ee(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=o0(t,iF);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(oF))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Sn.responsesRequiredToBeHealthy=2;Sn.healthyTimeout=3e4;/**
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
 */class Ja{static get ALL_TRANSPORTS(){return[Ui,Sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Sn&&Sn.isAvailable();let r=t&&!Sn.previouslyFailed();if(e.webSocketOnly&&(t||fn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Sn];else{const s=this.transports_=[];for(const i of Ja.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ja.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ja.globalTransportInitialized_=!1;/**
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
 */const aF=6e4,lF=5e3,cF=10*1024,uF=100*1024,Md="t",Lv="d",hF="s",Fv="r",dF="e",Uv="o",Bv="a",$v="n",jv="p",fF="h";class pF{constructor(e,t,r,s,i,o,a,l,u,h){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Sl("c:"+this.id+":"),this.transportManager_=new Ja(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ca(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>uF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Md in e){const t=e[Md];t===Bv?this.upgradeIfSecondaryHealthy_():t===Fv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Uv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Yo("t",e),r=Yo("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$v,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Yo("t",e),r=Yo("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Yo(Md,e);if(Lv in e){const r=e[Lv];if(t===fF){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===$v){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===hF?this.onConnectionShutdown_(r):t===Fv?this.onReset_(r):t===dF?Df("Server Error: "+r):t===Uv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Df("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),fm!==r&&fn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Ca(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ca(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class w0{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class b0{constructor(e){this.allowedEvents_=e,this.listeners_={},ee(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){ee(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class yu extends b0{static getInstance(){return new yu}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!zp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ee(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const qv=32,Wv=768;class Xe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Be(){return new Xe("")}function Ce(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function as(n){return n.pieces_.length-n.pieceNum_}function Qe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Xe(n.pieces_,e)}function A0(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function mF(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function R0(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function S0(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Xe(e,0)}function gt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Xe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new Xe(t,0)}function Ae(n){return n.pieceNum_>=n.pieces_.length}function yn(n,e){const t=Ce(n),r=Ce(e);if(t===null)return e;if(t===r)return yn(Qe(n),Qe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function C0(n,e){if(as(n)!==as(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Cn(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(as(n)>as(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class gF{constructor(e,t){this.errorPrefix_=t,this.parts_=R0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=gh(this.parts_[r]);P0(this)}}function _F(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=gh(e),P0(n)}function yF(n){const e=n.parts_.pop();n.byteLength_-=gh(e),n.parts_.length>0&&(n.byteLength_-=1)}function P0(n){if(n.byteLength_>Wv)throw new Error(n.errorPrefix_+"has a key path longer than "+Wv+" bytes ("+n.byteLength_+").");if(n.parts_.length>qv)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qv+") or object contains a cycle "+Ds(n))}function Ds(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class gm extends b0{static getInstance(){return new gm}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return ee(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Xo=1e3,vF=60*5*1e3,Hv=30*1e3,EF=1.3,TF=3e4,IF="server_kill",Kv=3;class Ir extends w0{constructor(e,t,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ir.nextPersistentConnectionId_++,this.log_=Sl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xo,this.maxReconnectDelay_=vF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,i={r:s,a:e,b:t};this.log_(wt(i)),ee(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new za,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ee(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;Ir.warnOnListenWarnings_(l,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Cr(e,"w")){const r=eo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();fn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||VO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=OO(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const i={p:t,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,i){this.initConnection_();const o={p:t,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+wt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Df("Unrecognized action received from server: "+wt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ee(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>TF&&(this.reconnectDelay_=Xo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*EF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ir.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){ee(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?xt("getToken() completed but was canceled"):(xt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,a=new pF(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,g=>{fn(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(IF)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&fn(d),l())}}}interrupt(e){xt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vf(this.interruptReasons_)&&(this.reconnectDelay_=Xo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(i=>dm(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new Xe(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(t),i.delete(t),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){xt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Kv&&(this.reconnectDelay_=Hv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){xt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Kv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+n0.replace(/\./g,"-")]=1,zp()?e["framework.cordova"]=1:hb()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yu.getInstance().currentlyOnline();return vf(this.interruptReasons_)&&e}}Ir.nextPersistentConnectionId_=0;Ir.nextConnectionId_=0;/**
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
 */class Pe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Pe(e,t)}}/**
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
 */class vh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Pe(ro,e),s=new Pe(ro,t);return this.compare(r,s)!==0}minPost(){return Pe.MIN}}/**
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
 */let yc;class k0 extends vh{static get __EMPTY_NODE(){return yc}static set __EMPTY_NODE(e){yc=e}compare(e,t){return Ro(e.name,t.name)}isDefinedOn(e){throw Io("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Pe.MIN}maxPost(){return new Pe(Zs,yc)}makePost(e,t){return ee(typeof e=="string","KeyIndex indexValue must always be a string."),new Pe(e,yc)}toString(){return".key"}}const zi=new k0;/**
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
 */let vc=class{constructor(e,t,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},nn=class ua{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ua.RED,this.left=s??Hn.EMPTY_NODE,this.right=i??Hn.EMPTY_NODE}copy(e,t,r,s,i){return new ua(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Hn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Hn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ua.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ua.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};nn.RED=!0;nn.BLACK=!1;class wF{copy(e,t,r,s,i){return this}insert(e,t,r){return new nn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Hn=class Mc{constructor(e,t=Mc.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Mc(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,nn.BLACK,null,null))}remove(e){return new Mc(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,nn.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new vc(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new vc(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new vc(this.root_,null,this.comparator_,!0,e)}};Hn.EMPTY_NODE=new wF;/**
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
 */function bF(n,e){return Ro(n.name,e.name)}function _m(n,e){return Ro(n,e)}/**
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
 */let xf;function AF(n){xf=n}const D0=function(n){return typeof n=="number"?"number:"+a0(n):"string:"+n},N0=function(n){if(n.isLeafNode()){const e=n.val();ee(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Cr(e,".sv"),"Priority must be a string or number.")}else ee(n===xf||n.isEmpty(),"priority of unexpected type.");ee(n===xf||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Gv;class ft{static set __childrenNodeConstructor(e){Gv=e}static get __childrenNodeConstructor(){return Gv}constructor(e,t=ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ee(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),N0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ft(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ae(e)?this:Ce(e)===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Ce(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(ee(r!==".priority"||as(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(Qe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+D0(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=a0(this.value_):e+=this.value_,this.lazyHash_=s0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ft.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ft.__childrenNodeConstructor?-1:(ee(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=ft.VALUE_TYPE_ORDER.indexOf(t),i=ft.VALUE_TYPE_ORDER.indexOf(r);return ee(s>=0,"Unknown leaf type: "+t),ee(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let x0,O0;function RF(n){x0=n}function SF(n){O0=n}class CF extends vh{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),i=r.compareTo(s);return i===0?Ro(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Pe.MIN}maxPost(){return new Pe(Zs,new ft("[PRIORITY-POST]",O0))}makePost(e,t){const r=x0(e);return new Pe(t,new ft("[PRIORITY-POST]",r))}toString(){return".priority"}}const Mt=new CF;/**
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
 */const PF=Math.log(2);class kF{constructor(e){const t=i=>parseInt(Math.log(i)/PF,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vu=function(n,e,t,r){n.sort(e);const s=function(l,u){const h=u-l;let d,p;if(h===0)return null;if(h===1)return d=n[l],p=t?t(d):d,new nn(p,d.node,nn.BLACK,null,null);{const g=parseInt(h/2,10)+l,v=s(l,g),T=s(g+1,u);return d=n[g],p=t?t(d):d,new nn(p,d.node,nn.BLACK,v,T)}},i=function(l){let u=null,h=null,d=n.length;const p=function(v,T){const P=d-v,O=d;d-=v;const V=s(P+1,O),x=n[P],M=t?t(x):x;g(new nn(M,x.node,T,null,V))},g=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<l.count;++v){const T=l.nextBitIsOne(),P=Math.pow(2,l.count-(v+1));T?p(P,nn.BLACK):(p(P,nn.BLACK),p(P,nn.RED))}return h},o=new kF(n.length),a=i(o);return new Hn(r||e,a)};/**
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
 */let Ld;const Ai={};class yr{static get Default(){return ee(Ai&&Mt,"ChildrenNode.ts has not been loaded"),Ld=Ld||new yr({".priority":Ai},{".priority":Mt}),Ld}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=eo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Hn?t:null}hasIndex(e){return Cr(this.indexSet_,e.toString())}addIndex(e,t){ee(e!==zi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=t.getIterator(Pe.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=vu(r,e.getCompare()):a=Ai;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new yr(h,u)}addToIndexes(e,t){const r=cu(this.indexes_,(s,i)=>{const o=eo(this.indexSet_,i);if(ee(o,"Missing index implementation for "+i),s===Ai)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(Pe.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),vu(a,o.getCompare())}else return Ai;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new Pe(e.name,a))),l.insert(e,e.node)}});return new yr(r,this.indexSet_)}removeFromIndexes(e,t){const r=cu(this.indexes_,s=>{if(s===Ai)return s;{const i=t.get(e.name);return i?s.remove(new Pe(e.name,i)):s}});return new yr(r,this.indexSet_)}}/**
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
 */let Jo;class Me{static get EMPTY_NODE(){return Jo||(Jo=new Me(new Hn(_m),null,yr.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&N0(this.priorityNode_),this.children_.isEmpty()&&ee(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Jo}updatePriority(e){return this.children_.isEmpty()?this:new Me(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Jo:t}}getChild(e){const t=Ce(e);return t===null?this:this.getImmediateChild(t).getChild(Qe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ee(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Pe(e,t);let s,i;t.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Jo:this.priorityNode_;return new Me(s,o,i)}}updateChild(e,t){const r=Ce(e);if(r===null)return t;{ee(Ce(e)!==".priority"||as(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Qe(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,i=!0;if(this.forEachChild(Mt,(o,a)=>{t[o]=a.val(e),r++,i&&Me.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+D0(this.getPriority().val())+":"),this.forEachChild(Mt,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":s0(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Pe(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Pe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Pe(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Pe.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Pe.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Pl?-1:0}withIndex(e){if(e===zi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Me(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===zi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(Mt),s=t.getIterator(Mt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===zi?null:this.indexMap_.get(e.toString())}}Me.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class DF extends Me{constructor(){super(new Hn(_m),Me.EMPTY_NODE,yr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Me.EMPTY_NODE}isEmpty(){return!1}}const Pl=new DF;Object.defineProperties(Pe,{MIN:{value:new Pe(ro,Me.EMPTY_NODE)},MAX:{value:new Pe(Zs,Pl)}});k0.__EMPTY_NODE=Me.EMPTY_NODE;ft.__childrenNodeConstructor=Me;AF(Pl);SF(Pl);/**
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
 */const NF=!0;function Ot(n,e=null){if(n===null)return Me.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ee(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ft(t,Ot(e))}if(!(n instanceof Array)&&NF){const t=[];let r=!1;if(bn(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ot(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),t.push(new Pe(o,l)))}}),t.length===0)return Me.EMPTY_NODE;const i=vu(t,bF,o=>o.name,_m);if(r){const o=vu(t,Mt.getCompare());return new Me(i,Ot(e),new yr({".priority":o},{".priority":Mt}))}else return new Me(i,Ot(e),yr.Default)}else{let t=Me.EMPTY_NODE;return bn(n,(r,s)=>{if(Cr(n,r)&&r.substring(0,1)!=="."){const i=Ot(s);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(r,i))}}),t.updatePriority(Ot(e))}}RF(Ot);/**
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
 */class xF extends vh{constructor(e){super(),this.indexPath_=e,ee(!Ae(e)&&Ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),i=r.compareTo(s);return i===0?Ro(e.name,t.name):i}makePost(e,t){const r=Ot(e),s=Me.EMPTY_NODE.updateChild(this.indexPath_,r);return new Pe(t,s)}maxPost(){const e=Me.EMPTY_NODE.updateChild(this.indexPath_,Pl);return new Pe(Zs,e)}toString(){return R0(this.indexPath_,0).join("/")}}/**
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
 */class OF extends vh{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Ro(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Pe.MIN}maxPost(){return Pe.MAX}makePost(e,t){const r=Ot(e);return new Pe(t,r)}toString(){return".value"}}const VF=new OF;/**
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
 */function MF(n){return{type:"value",snapshotNode:n}}function LF(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function FF(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function zv(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function UF(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class ym{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Mt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ee(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ee(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ro}hasEnd(){return this.endSet_}getIndexEndValue(){return ee(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ee(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ee(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Mt}copy(){const e=new ym;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Qv(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Mt?t="$priority":n.index_===VF?t="$value":n.index_===zi?t="$key":(ee(n.index_ instanceof xF,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=wt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=wt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+wt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=wt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+wt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Yv(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Mt&&(e.i=n.index_.toString()),e}/**
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
 */class Eu extends w0{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ee(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Sl("p:rest:"),this.listens_={}}listen(e,t,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Eu.getListenId_(e,r),a={};this.listens_[o]=a;const l=Qv(e._queryParams);this.restRequest_(i+".json",l,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,r),eo(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",s(p,null)}})}unlisten(e,t){const r=Eu.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Qv(e._queryParams),r=e._path.toString(),s=new za;return this.restRequest_(r+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(t.auth=s.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bo(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Qa(a.responseText)}catch{fn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&fn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class BF{constructor(){this.rootNode_=Me.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Tu(){return{value:null,children:new Map}}function V0(n,e,t){if(Ae(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Ce(e);n.children.has(r)||n.children.set(r,Tu());const s=n.children.get(r);e=Qe(e),V0(s,e,t)}}function Of(n,e,t){n.value!==null?t(e,n.value):$F(n,(r,s)=>{const i=new Xe(e.toString()+"/"+r);Of(s,i,t)})}function $F(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class jF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&bn(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
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
 */const Xv=10*1e3,qF=30*1e3,WF=5*60*1e3;class HF{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new jF(e);const r=Xv+(qF-Xv)*Math.random();Ca(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;bn(e,(s,i)=>{i>0&&Cr(this.statsToReport_,s)&&(t[s]=i,r=!0)}),r&&this.server_.reportStats(t),Ca(this.reportStats_.bind(this),Math.floor(Math.random()*2*WF))}}/**
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
 */var Kn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Kn||(Kn={}));function M0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function L0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function F0(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Iu{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Kn.ACK_USER_WRITE,this.source=M0()}operationForChild(e){if(Ae(this.path)){if(this.affectedTree.value!=null)return ee(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Xe(e));return new Iu(Be(),t,this.revert)}}else return ee(Ce(this.path)===e,"operationForChild called for unrelated child."),new Iu(Qe(this.path),this.affectedTree,this.revert)}}/**
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
 */class ei{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Kn.OVERWRITE}operationForChild(e){return Ae(this.path)?new ei(this.source,Be(),this.snap.getImmediateChild(e)):new ei(this.source,Qe(this.path),this.snap)}}/**
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
 */class Za{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Kn.MERGE}operationForChild(e){if(Ae(this.path)){const t=this.children.subtree(new Xe(e));return t.isEmpty()?null:t.value?new ei(this.source,Be(),t.value):new Za(this.source,Be(),t)}else return ee(Ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Za(this.source,Qe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class vm{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ae(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ce(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function KF(n,e,t,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(UF(o.childName,o.snapshotNode))}),Zo(n,s,"child_removed",e,r,t),Zo(n,s,"child_added",e,r,t),Zo(n,s,"child_moved",i,r,t),Zo(n,s,"child_changed",e,r,t),Zo(n,s,"value",e,r,t),s}function Zo(n,e,t,r,s,i){const o=r.filter(a=>a.type===t);o.sort((a,l)=>zF(n,a,l)),o.forEach(a=>{const l=GF(n,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,n.query_))})})}function GF(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function zF(n,e,t){if(e.childName==null||t.childName==null)throw Io("Should only compare child_ events.");const r=new Pe(e.childName,e.snapshotNode),s=new Pe(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
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
 */function U0(n,e){return{eventCache:n,serverCache:e}}function Pa(n,e,t,r){return U0(new vm(e,t,r),n.serverCache)}function B0(n,e,t,r){return U0(n.eventCache,new vm(e,t,r))}function Vf(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ti(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Fd;const QF=()=>(Fd||(Fd=new Hn(OL)),Fd);class ze{static fromObject(e){let t=new ze(null);return bn(e,(r,s)=>{t=t.set(new Xe(r),s)}),t}constructor(e,t=QF()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Be(),value:this.value};if(Ae(e))return null;{const r=Ce(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Qe(e),t);return i!=null?{path:gt(new Xe(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ae(e))return this;{const t=Ce(e),r=this.children.get(t);return r!==null?r.subtree(Qe(e)):new ze(null)}}set(e,t){if(Ae(e))return new ze(t,this.children);{const r=Ce(e),i=(this.children.get(r)||new ze(null)).set(Qe(e),t),o=this.children.insert(r,i);return new ze(this.value,o)}}remove(e){if(Ae(e))return this.children.isEmpty()?new ze(null):new ze(null,this.children);{const t=Ce(e),r=this.children.get(t);if(r){const s=r.remove(Qe(e));let i;return s.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,s),this.value===null&&i.isEmpty()?new ze(null):new ze(this.value,i)}else return this}}get(e){if(Ae(e))return this.value;{const t=Ce(e),r=this.children.get(t);return r?r.get(Qe(e)):null}}setTree(e,t){if(Ae(e))return t;{const r=Ce(e),i=(this.children.get(r)||new ze(null)).setTree(Qe(e),t);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new ze(this.value,o)}}fold(e){return this.fold_(Be(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(gt(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Be(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Ae(e))return null;{const i=Ce(e),o=this.children.get(i);return o?o.findOnPath_(Qe(e),gt(t,i),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Be(),t)}foreachOnPath_(e,t,r){if(Ae(e))return this;{this.value&&r(t,this.value);const s=Ce(e),i=this.children.get(s);return i?i.foreachOnPath_(Qe(e),gt(t,s),r):new ze(null)}}foreach(e){this.foreach_(Be(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(gt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class xn{constructor(e){this.writeTree_=e}static empty(){return new xn(new ze(null))}}function ka(n,e,t){if(Ae(e))return new xn(new ze(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=yn(s,e);return i=i.updateChild(o,t),new xn(n.writeTree_.set(s,i))}else{const s=new ze(t),i=n.writeTree_.setTree(e,s);return new xn(i)}}}function Jv(n,e,t){let r=n;return bn(t,(s,i)=>{r=ka(r,gt(e,s),i)}),r}function Zv(n,e){if(Ae(e))return xn.empty();{const t=n.writeTree_.setTree(e,new ze(null));return new xn(t)}}function Mf(n,e){return hi(n,e)!=null}function hi(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(yn(t.path,e)):null}function eE(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Mt,(r,s)=>{e.push(new Pe(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Pe(r,s.value))}),e}function ns(n,e){if(Ae(e))return n;{const t=hi(n,e);return t!=null?new xn(new ze(t)):new xn(n.writeTree_.subtree(e))}}function Lf(n){return n.writeTree_.isEmpty()}function so(n,e){return $0(Be(),n.writeTree_,e)}function $0(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(ee(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):t=$0(gt(n,s),i,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(gt(n,".priority"),r)),t}}/**
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
 */function j0(n,e){return G0(e,n)}function YF(n,e,t,r,s){ee(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=ka(n.visibleWrites,e,t)),n.lastWriteId=r}function XF(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function JF(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);ee(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,i=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&ZF(a,r.path)?s=!1:Cn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return e2(n),!0;if(r.snap)n.visibleWrites=Zv(n.visibleWrites,r.path);else{const a=r.children;bn(a,l=>{n.visibleWrites=Zv(n.visibleWrites,gt(r.path,l))})}return!0}else return!1}function ZF(n,e){if(n.snap)return Cn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Cn(gt(n.path,t),e))return!0;return!1}function e2(n){n.visibleWrites=q0(n.allWrites,t2,Be()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function t2(n){return n.visible}function q0(n,e,t){let r=xn.empty();for(let s=0;s<n.length;++s){const i=n[s];if(e(i)){const o=i.path;let a;if(i.snap)Cn(t,o)?(a=yn(t,o),r=ka(r,a,i.snap)):Cn(o,t)&&(a=yn(o,t),r=ka(r,Be(),i.snap.getChild(a)));else if(i.children){if(Cn(t,o))a=yn(t,o),r=Jv(r,a,i.children);else if(Cn(o,t))if(a=yn(o,t),Ae(a))r=Jv(r,Be(),i.children);else{const l=eo(i.children,Ce(a));if(l){const u=l.getChild(Qe(a));r=ka(r,Be(),u)}}}else throw Io("WriteRecord should have .snap or .children")}}return r}function W0(n,e,t,r,s){if(!r&&!s){const i=hi(n.visibleWrites,e);if(i!=null)return i;{const o=ns(n.visibleWrites,e);if(Lf(o))return t;if(t==null&&!Mf(o,Be()))return null;{const a=t||Me.EMPTY_NODE;return so(o,a)}}}else{const i=ns(n.visibleWrites,e);if(!s&&Lf(i))return t;if(!s&&t==null&&!Mf(i,Be()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(Cn(u.path,e)||Cn(e,u.path))},a=q0(n.allWrites,o,e),l=t||Me.EMPTY_NODE;return so(a,l)}}}function n2(n,e,t){let r=Me.EMPTY_NODE;const s=hi(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Mt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(t){const i=ns(n.visibleWrites,e);return t.forEachChild(Mt,(o,a)=>{const l=so(ns(i,new Xe(o)),a);r=r.updateImmediateChild(o,l)}),eE(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=ns(n.visibleWrites,e);return eE(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function r2(n,e,t,r,s){ee(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=gt(e,t);if(Mf(n.visibleWrites,i))return null;{const o=ns(n.visibleWrites,i);return Lf(o)?s.getChild(t):so(o,s.getChild(t))}}function s2(n,e,t,r){const s=gt(e,t),i=hi(n.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(t)){const o=ns(n.visibleWrites,s);return so(o,r.getNode().getImmediateChild(t))}else return null}function i2(n,e){return hi(n.visibleWrites,e)}function o2(n,e,t,r,s,i,o){let a;const l=ns(n.visibleWrites,e),u=hi(l,Be());if(u!=null)a=u;else if(t!=null)a=so(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),p=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=p.getNext();for(;g&&h.length<s;)d(g,r)!==0&&h.push(g),g=p.getNext();return h}else return[]}function a2(){return{visibleWrites:xn.empty(),allWrites:[],lastWriteId:-1}}function Ff(n,e,t,r){return W0(n.writeTree,n.treePath,e,t,r)}function H0(n,e){return n2(n.writeTree,n.treePath,e)}function tE(n,e,t,r){return r2(n.writeTree,n.treePath,e,t,r)}function wu(n,e){return i2(n.writeTree,gt(n.treePath,e))}function l2(n,e,t,r,s,i){return o2(n.writeTree,n.treePath,e,t,r,s,i)}function Em(n,e,t){return s2(n.writeTree,n.treePath,e,t)}function K0(n,e){return G0(gt(n.treePath,e),n.writeTree)}function G0(n,e){return{treePath:n,writeTree:e}}/**
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
 */class c2{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;ee(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ee(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(r,zv(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(r,FF(r,s.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(r,LF(r,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(r,zv(r,e.snapshotNode,s.oldSnap));else throw Io("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class u2{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const z0=new u2;class Tm{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new vm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Em(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ti(this.viewCache_),i=l2(this.writes_,s,t,1,r,e);return i.length===0?null:i[0]}}function h2(n,e){ee(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ee(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function d2(n,e,t,r,s){const i=new c2;let o,a;if(t.type===Kn.OVERWRITE){const u=t;u.source.fromUser?o=Uf(n,e,u.path,u.snap,r,s,i):(ee(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ae(u.path),o=bu(n,e,u.path,u.snap,r,s,a,i))}else if(t.type===Kn.MERGE){const u=t;u.source.fromUser?o=p2(n,e,u.path,u.children,r,s,i):(ee(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Bf(n,e,u.path,u.children,r,s,a,i))}else if(t.type===Kn.ACK_USER_WRITE){const u=t;u.revert?o=_2(n,e,u.path,r,s,i):o=m2(n,e,u.path,u.affectedTree,r,s,i)}else if(t.type===Kn.LISTEN_COMPLETE)o=g2(n,e,t.path,r,i);else throw Io("Unknown operation type: "+t.type);const l=i.getChanges();return f2(e,o,l),{viewCache:o,changes:l}}function f2(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Vf(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&t.push(MF(Vf(e)))}}function Q0(n,e,t,r,s,i){const o=e.eventCache;if(wu(r,t)!=null)return e;{let a,l;if(Ae(t))if(ee(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ti(e),h=u instanceof Me?u:Me.EMPTY_NODE,d=H0(r,h);a=n.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=Ff(r,ti(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Ce(t);if(u===".priority"){ee(as(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=tE(r,t,h,l);d!=null?a=n.filter.updatePriority(h,d):a=o.getNode()}else{const h=Qe(t);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const p=tE(r,t,o.getNode(),l);p!=null?d=o.getNode().getImmediateChild(u).updateChild(h,p):d=o.getNode().getImmediateChild(u)}else d=Em(r,u,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),u,d,h,s,i):a=o.getNode()}}return Pa(e,a,o.isFullyInitialized()||Ae(t),n.filter.filtersNodes())}}function bu(n,e,t,r,s,i,o,a){const l=e.serverCache;let u;const h=o?n.filter:n.filter.getIndexedFilter();if(Ae(t))u=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(t,r);u=h.updateFullNode(l.getNode(),g,null)}else{const g=Ce(t);if(!l.isCompleteForPath(t)&&as(t)>1)return e;const v=Qe(t),P=l.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=h.updatePriority(l.getNode(),P):u=h.updateChild(l.getNode(),g,P,v,z0,null)}const d=B0(e,u,l.isFullyInitialized()||Ae(t),h.filtersNodes()),p=new Tm(s,d,i);return Q0(n,d,t,s,p,a)}function Uf(n,e,t,r,s,i,o){const a=e.eventCache;let l,u;const h=new Tm(s,e,i);if(Ae(t))u=n.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Pa(e,u,!0,n.filter.filtersNodes());else{const d=Ce(t);if(d===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),r),l=Pa(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=Qe(t),g=a.getNode().getImmediateChild(d);let v;if(Ae(p))v=r;else{const T=h.getCompleteChild(d);T!=null?A0(p)===".priority"&&T.getChild(S0(p)).isEmpty()?v=T:v=T.updateChild(p,r):v=Me.EMPTY_NODE}if(g.equals(v))l=e;else{const T=n.filter.updateChild(a.getNode(),d,v,p,h,o);l=Pa(e,T,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function nE(n,e){return n.eventCache.isCompleteForChild(e)}function p2(n,e,t,r,s,i,o){let a=e;return r.foreach((l,u)=>{const h=gt(t,l);nE(e,Ce(h))&&(a=Uf(n,a,h,u,s,i,o))}),r.foreach((l,u)=>{const h=gt(t,l);nE(e,Ce(h))||(a=Uf(n,a,h,u,s,i,o))}),a}function rE(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Bf(n,e,t,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Ae(t)?u=r:u=new ze(null).setTree(t,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,p)=>{if(h.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),v=rE(n,g,p);l=bu(n,l,new Xe(d),v,s,i,o,a)}}),u.children.inorderTraversal((d,p)=>{const g=!e.serverCache.isCompleteForChild(d)&&p.value===null;if(!h.hasChild(d)&&!g){const v=e.serverCache.getNode().getImmediateChild(d),T=rE(n,v,p);l=bu(n,l,new Xe(d),T,s,i,o,a)}}),l}function m2(n,e,t,r,s,i,o){if(wu(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Ae(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return bu(n,e,t,l.getNode().getChild(t),s,i,a,o);if(Ae(t)){let u=new ze(null);return l.getNode().forEachChild(zi,(h,d)=>{u=u.set(new Xe(h),d)}),Bf(n,e,t,u,s,i,a,o)}else return e}else{let u=new ze(null);return r.foreach((h,d)=>{const p=gt(t,h);l.isCompleteForPath(p)&&(u=u.set(h,l.getNode().getChild(p)))}),Bf(n,e,t,u,s,i,a,o)}}function g2(n,e,t,r,s){const i=e.serverCache,o=B0(e,i.getNode(),i.isFullyInitialized()||Ae(t),i.isFiltered());return Q0(n,o,t,r,z0,s)}function _2(n,e,t,r,s,i){let o;if(wu(r,t)!=null)return e;{const a=new Tm(r,e,s),l=e.eventCache.getNode();let u;if(Ae(t)||Ce(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Ff(r,ti(e));else{const d=e.serverCache.getNode();ee(d instanceof Me,"serverChildren would be complete if leaf node"),h=H0(r,d)}h=h,u=n.filter.updateFullNode(l,h,i)}else{const h=Ce(t);let d=Em(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?u=n.filter.updateChild(l,h,d,Qe(t),a,i):e.eventCache.getNode().hasChild(h)?u=n.filter.updateChild(l,h,Me.EMPTY_NODE,Qe(t),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ff(r,ti(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||wu(r,Be())!=null,Pa(e,u,o,n.filter.filtersNodes())}}function y2(n,e){const t=ti(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ae(e)&&!t.getImmediateChild(Ce(e)).isEmpty())?t.getChild(e):null}function sE(n,e,t,r){e.type===Kn.MERGE&&e.source.queryId!==null&&(ee(ti(n.viewCache_),"We should always have a full cache before handling merges"),ee(Vf(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,i=d2(n.processor_,s,e,t,r);return h2(n.processor_,i.viewCache),ee(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,v2(n,i.changes,i.viewCache.eventCache.getNode())}function v2(n,e,t,r){const s=n.eventRegistrations_;return KF(n.eventGenerator_,e,t,s)}/**
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
 */let iE;function E2(n){ee(!iE,"__referenceConstructor has already been defined"),iE=n}function Im(n,e,t,r){const s=e.source.queryId;if(s!==null){const i=n.views.get(s);return ee(i!=null,"SyncTree gave us an op for an invalid query."),sE(i,e,t,r)}else{let i=[];for(const o of n.views.values())i=i.concat(sE(o,e,t,r));return i}}function wm(n,e){let t=null;for(const r of n.views.values())t=t||y2(r,e);return t}/**
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
 */let oE;function T2(n){ee(!oE,"__referenceConstructor has already been defined"),oE=n}class aE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ze(null),this.pendingWriteTree_=a2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function I2(n,e,t,r,s){return YF(n.pendingWriteTree_,e,t,r,s),s?Th(n,new ei(M0(),e,t)):[]}function Bi(n,e,t=!1){const r=XF(n.pendingWriteTree_,e);if(JF(n.pendingWriteTree_,e)){let i=new ze(null);return r.snap!=null?i=i.set(Be(),!0):bn(r.children,o=>{i=i.set(new Xe(o),!0)}),Th(n,new Iu(r.path,i,t))}else return[]}function Eh(n,e,t){return Th(n,new ei(L0(),e,t))}function w2(n,e,t){const r=ze.fromObject(t);return Th(n,new Za(L0(),e,r))}function b2(n,e,t,r){const s=Z0(n,r);if(s!=null){const i=eA(s),o=i.path,a=i.queryId,l=yn(o,e),u=new ei(F0(a),l,t);return tA(n,o,u)}else return[]}function A2(n,e,t,r){const s=Z0(n,r);if(s){const i=eA(s),o=i.path,a=i.queryId,l=yn(o,e),u=ze.fromObject(t),h=new Za(F0(a),l,u);return tA(n,o,h)}else return[]}function Y0(n,e,t){const s=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=yn(o,e),u=wm(a,l);if(u)return u});return W0(s,e,i,t,!0)}function Th(n,e){return X0(e,n.syncPointTree_,null,j0(n.pendingWriteTree_,Be()))}function X0(n,e,t,r){if(Ae(n.path))return J0(n,e,t,r);{const s=e.get(Be());t==null&&s!=null&&(t=wm(s,Be()));let i=[];const o=Ce(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const u=t?t.getImmediateChild(o):null,h=K0(r,o);i=i.concat(X0(a,l,u,h))}return s&&(i=i.concat(Im(s,n,r,t))),i}}function J0(n,e,t,r){const s=e.get(Be());t==null&&s!=null&&(t=wm(s,Be()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,u=K0(r,o),h=n.operationForChild(o);h&&(i=i.concat(J0(h,a,l,u)))}),s&&(i=i.concat(Im(s,n,r,t))),i}function Z0(n,e){return n.tagToQueryMap.get(e)}function eA(n){const e=n.indexOf("$");return ee(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Xe(n.substr(0,e))}}function tA(n,e,t){const r=n.syncPointTree_.get(e);ee(r,"Missing sync point for query tag that we're tracking");const s=j0(n.pendingWriteTree_,e);return Im(r,t,s,null)}/**
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
 */class bm{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new bm(t)}node(){return this.node_}}class Am{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=gt(this.path_,e);return new Am(this.syncTree_,t)}node(){return Y0(this.syncTree_,this.path_)}}const R2=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},lE=function(n,e,t){if(!n||typeof n!="object")return n;if(ee(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return S2(n[".sv"],e,t);if(typeof n[".sv"]=="object")return C2(n[".sv"],e);ee(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},S2=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ee(!1,"Unexpected server value: "+n)}},C2=function(n,e,t){n.hasOwnProperty("increment")||ee(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&ee(!1,"Unexpected increment value: "+r);const s=e.node();if(ee(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},P2=function(n,e,t,r){return Rm(e,new Am(t,n),r)},k2=function(n,e,t){return Rm(n,new bm(e),t)};function Rm(n,e,t){const r=n.getPriority().val(),s=lE(r,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=lE(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new ft(a,Ot(s)):n}else{const o=n;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new ft(s))),o.forEachChild(Mt,(a,l)=>{const u=Rm(l,e.getImmediateChild(a),t);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class Sm{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Cm(n,e){let t=e instanceof Xe?e:new Xe(e),r=n,s=Ce(t);for(;s!==null;){const i=eo(r.node.children,s)||{children:{},childCount:0};r=new Sm(s,r,i),t=Qe(t),s=Ce(t)}return r}function So(n){return n.node.value}function nA(n,e){n.node.value=e,$f(n)}function rA(n){return n.node.childCount>0}function D2(n){return So(n)===void 0&&!rA(n)}function Ih(n,e){bn(n.node.children,(t,r)=>{e(new Sm(t,n,r))})}function sA(n,e,t,r){t&&e(n),Ih(n,s=>{sA(s,e,!0)})}function N2(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function kl(n){return new Xe(n.parent===null?n.name:kl(n.parent)+"/"+n.name)}function $f(n){n.parent!==null&&x2(n.parent,n.name,n)}function x2(n,e,t){const r=D2(t),s=Cr(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,$f(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,$f(n))}/**
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
 */const O2=/[\[\].#$\/\u0000-\u001F\u007F]/,V2=/[\[\].#$\u0000-\u001F\u007F]/,Ud=10*1024*1024,iA=function(n){return typeof n=="string"&&n.length!==0&&!O2.test(n)},M2=function(n){return typeof n=="string"&&n.length!==0&&!V2.test(n)},L2=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),M2(n)},oA=function(n,e,t){const r=t instanceof Xe?new gF(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ds(r));if(typeof e=="function")throw new Error(n+"contains a function "+Ds(r)+" with contents = "+e.toString());if(i0(e))throw new Error(n+"contains "+e.toString()+" "+Ds(r));if(typeof e=="string"&&e.length>Ud/3&&gh(e)>Ud)throw new Error(n+"contains a string greater than "+Ud+" utf8 bytes "+Ds(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(bn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!iA(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ds(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_F(r,o),oA(n,a,r),yF(r)}),s&&i)throw new Error(n+' contains ".value" child '+Ds(r)+" in addition to actual children.")}},F2=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!iA(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!L2(t))throw new Error(BO(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class U2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function B2(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();t!==null&&!C0(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(s)}t&&n.eventLists_.push(t)}function di(n,e,t){B2(n,t),$2(n,r=>Cn(r,e)||Cn(e,r))}function $2(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const i=s.path;e(i)?(j2(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function j2(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Sa&&xt("event: "+t.toString()),Cl(r)}}}/**
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
 */const q2="repo_interrupt",W2=25;class H2{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new U2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Tu(),this.transactionQueueTree_=new Sm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function K2(n,e,t){if(n.stats_=pm(n.repoInfo_),n.forceRestClient_||BL())n.server_=new Eu(n.repoInfo_,(r,s,i,o)=>{cE(n,r,s,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>uE(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{wt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Ir(n.repoInfo_,e,(r,s,i,o)=>{cE(n,r,s,i,o)},r=>{uE(n,r)},r=>{z2(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=KL(n.repoInfo_,()=>new HF(n.stats_,n.server_)),n.infoData_=new BF,n.infoSyncTree_=new aE({startListening:(r,s,i,o)=>{let a=[];const l=n.infoData_.getNode(r._path);return l.isEmpty()||(a=Eh(n.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Pm(n,"connected",!1),n.serverSyncTree_=new aE({startListening:(r,s,i,o)=>(n.server_.listen(r,i,s,(a,l)=>{const u=o(a,l);di(n.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function G2(n){const t=n.infoData_.getNode(new Xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function aA(n){return R2({timestamp:G2(n)})}function cE(n,e,t,r,s){n.dataUpdateCount++;const i=new Xe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(r){const l=cu(t,u=>Ot(u));o=A2(n.serverSyncTree_,i,l,s)}else{const l=Ot(t);o=b2(n.serverSyncTree_,i,l,s)}else if(r){const l=cu(t,u=>Ot(u));o=w2(n.serverSyncTree_,i,l)}else{const l=Ot(t);o=Eh(n.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Dm(n,i)),di(n.eventQueue_,a,o)}function uE(n,e){Pm(n,"connected",e),e===!1&&Y2(n)}function z2(n,e){bn(e,(t,r)=>{Pm(n,t,r)})}function Pm(n,e,t){const r=new Xe("/.info/"+e),s=Ot(t);n.infoData_.updateSnapshot(r,s);const i=Eh(n.infoSyncTree_,r,s);di(n.eventQueue_,r,i)}function Q2(n){return n.nextWriteId_++}function Y2(n){lA(n,"onDisconnectEvents");const e=aA(n),t=Tu();Of(n.onDisconnect_,Be(),(s,i)=>{const o=P2(s,i,n.serverSyncTree_,e);V0(t,s,o)});let r=[];Of(t,Be(),(s,i)=>{r=r.concat(Eh(n.serverSyncTree_,s,i));const o=eU(n,s);Dm(n,o)}),n.onDisconnect_=Tu(),di(n.eventQueue_,Be(),r)}function X2(n){n.persistentConnection_&&n.persistentConnection_.interrupt(q2)}function lA(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),xt(t,...e)}function cA(n,e,t){return Y0(n.serverSyncTree_,e,t)||Me.EMPTY_NODE}function km(n,e=n.transactionQueueTree_){if(e||wh(n,e),So(e)){const t=hA(n,e);ee(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&J2(n,kl(e),t)}else rA(e)&&Ih(e,t=>{km(n,t)})}function J2(n,e,t){const r=t.map(u=>u.currentWriteId),s=cA(n,e,r);let i=s;const o=s.hash();for(let u=0;u<t.length;u++){const h=t[u];ee(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=yn(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;n.server_.put(l.toString(),a,u=>{lA(n,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let p=0;p<t.length;p++)t[p].status=2,h=h.concat(Bi(n.serverSyncTree_,t[p].currentWriteId)),t[p].onComplete&&d.push(()=>t[p].onComplete(null,!0,t[p].currentOutputSnapshotResolved)),t[p].unwatcher();wh(n,Cm(n.transactionQueueTree_,e)),km(n,n.transactionQueueTree_),di(n.eventQueue_,e,h);for(let p=0;p<d.length;p++)Cl(d[p])}else{if(u==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{fn("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=u}Dm(n,e)}},o)}function Dm(n,e){const t=uA(n,e),r=kl(t),s=hA(n,t);return Z2(n,s,r),r}function Z2(n,e,t){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=yn(t,l.path);let h=!1,d;if(ee(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,s=s.concat(Bi(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=W2)h=!0,d="maxretry",s=s.concat(Bi(n.serverSyncTree_,l.currentWriteId,!0));else{const p=cA(n,l.path,o);l.currentInputSnapshot=p;const g=e[a].update(p.val());if(g!==void 0){oA("transaction failed: Data returned ",g,l.path);let v=Ot(g);typeof g=="object"&&g!=null&&Cr(g,".priority")||(v=v.updatePriority(p.getPriority()));const P=l.currentWriteId,O=aA(n),V=k2(v,p,O);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=V,l.currentWriteId=Q2(n),o.splice(o.indexOf(P),1),s=s.concat(I2(n.serverSyncTree_,l.path,V,l.currentWriteId,l.applyLocally)),s=s.concat(Bi(n.serverSyncTree_,P,!0))}else h=!0,d="nodata",s=s.concat(Bi(n.serverSyncTree_,l.currentWriteId,!0))}di(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}wh(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)Cl(r[a]);km(n,n.transactionQueueTree_)}function uA(n,e){let t,r=n.transactionQueueTree_;for(t=Ce(e);t!==null&&So(r)===void 0;)r=Cm(r,t),e=Qe(e),t=Ce(e);return r}function hA(n,e){const t=[];return dA(n,e,t),t.sort((r,s)=>r.order-s.order),t}function dA(n,e,t){const r=So(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);Ih(e,s=>{dA(n,s,t)})}function wh(n,e){const t=So(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,nA(e,t.length>0?t:void 0)}Ih(e,r=>{wh(n,r)})}function eU(n,e){const t=kl(uA(n,e)),r=Cm(n.transactionQueueTree_,e);return N2(r,s=>{Bd(n,s)}),Bd(n,r),sA(r,s=>{Bd(n,s)}),t}function Bd(n,e){const t=So(e);if(t){const r=[];let s=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(ee(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(ee(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Bi(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?nA(e,void 0):t.length=i+1,di(n.eventQueue_,kl(e),s);for(let o=0;o<r.length;o++)Cl(r[o])}}/**
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
 */function tU(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function nU(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):fn(`Invalid query segment '${t}' in query '${n}'`)}return e}const hE=function(n,e){const t=rU(n),r=t.namespace;t.domain==="firebase.com"&&Js(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Js("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||NL();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new qL(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new Xe(t.pathString)}},rU=function(n){let e="",t="",r="",s="",i="",o=!0,a="https",l=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let h=n.indexOf("/");h===-1&&(h=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(h,d)),h<d&&(s=tU(n.substring(h,d)));const p=nU(n.substring(Math.min(n.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")t="localhost";else if(g.split(".").length<=2)t=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),t=e.substring(v+1),i=r}"ns"in p&&(i=p.ns)}return{host:e,port:l,domain:t,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */class Nm{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Ae(this._path)?null:A0(this._path)}get ref(){return new Co(this._repo,this._path)}get _queryIdentifier(){const e=Yv(this._queryParams),t=dm(e);return t==="{}"?"default":t}get _queryObject(){return Yv(this._queryParams)}isEqual(e){if(e=Zt(e),!(e instanceof Nm))return!1;const t=this._repo===e._repo,r=C0(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+mF(this._path)}}class Co extends Nm{constructor(e,t){super(e,t,new ym,!1)}get parent(){const e=S0(this._path);return e===null?null:new Co(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}E2(Co);T2(Co);/**
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
 */const sU="FIREBASE_DATABASE_EMULATOR_HOST",jf={};let iU=!1;function oU(n,e,t,r,s){let i=r||n.options.databaseURL;i===void 0&&(n.options.projectId||Js("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xt("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=hE(i,s),a=o.repoInfo,l;typeof process<"u"&&Dv&&(l=Dv[sU]),l?(i=`http://${l}?ns=${a.namespace}`,o=hE(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new jL(n.name,n.options,e);F2("Invalid Firebase Database URL",o),Ae(o.path)||Js("Database URL must point to the root of a Firebase Database (not including a child path).");const h=lU(a,n,u,new $L(n,t));return new cU(h,n)}function aU(n,e){const t=jf[e];(!t||t[n.key]!==n)&&Js(`Database ${e}(${n.repoInfo_}) has already been deleted.`),X2(n),delete t[n.key]}function lU(n,e,t,r){let s=jf[e.name];s||(s={},jf[e.name]=s);let i=s[n.toURLString()];return i&&Js("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new H2(n,iU,t,r),s[n.toURLString()]=i,i}class cU{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(K2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Co(this._repo,Be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(aU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Js("Cannot call "+e+" on a deleted database.")}}/**
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
 */function uU(n){RL(gs),Zn(new Mn("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return oU(r,s,i,t)},"PUBLIC").setMultipleInstances(!0)),dn(Nv,xv,n),dn(Nv,xv,"esm2017")}Ir.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ir.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};uU();var dE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rs,fA;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function E(){}E.prototype=_.prototype,b.D=_.prototype,b.prototype=new E,b.prototype.constructor=b,b.C=function(I,C,R){for(var w=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)w[Ie-2]=arguments[Ie];return _.prototype[C].apply(I,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,_,E){E||(E=0);var I=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)I[C]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(C=0;16>C;++C)I[C]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=b.g[0],E=b.g[1],C=b.g[2];var R=b.g[3],w=_+(R^E&(C^R))+I[0]+3614090360&4294967295;_=E+(w<<7&4294967295|w>>>25),w=R+(C^_&(E^C))+I[1]+3905402710&4294967295,R=_+(w<<12&4294967295|w>>>20),w=C+(E^R&(_^E))+I[2]+606105819&4294967295,C=R+(w<<17&4294967295|w>>>15),w=E+(_^C&(R^_))+I[3]+3250441966&4294967295,E=C+(w<<22&4294967295|w>>>10),w=_+(R^E&(C^R))+I[4]+4118548399&4294967295,_=E+(w<<7&4294967295|w>>>25),w=R+(C^_&(E^C))+I[5]+1200080426&4294967295,R=_+(w<<12&4294967295|w>>>20),w=C+(E^R&(_^E))+I[6]+2821735955&4294967295,C=R+(w<<17&4294967295|w>>>15),w=E+(_^C&(R^_))+I[7]+4249261313&4294967295,E=C+(w<<22&4294967295|w>>>10),w=_+(R^E&(C^R))+I[8]+1770035416&4294967295,_=E+(w<<7&4294967295|w>>>25),w=R+(C^_&(E^C))+I[9]+2336552879&4294967295,R=_+(w<<12&4294967295|w>>>20),w=C+(E^R&(_^E))+I[10]+4294925233&4294967295,C=R+(w<<17&4294967295|w>>>15),w=E+(_^C&(R^_))+I[11]+2304563134&4294967295,E=C+(w<<22&4294967295|w>>>10),w=_+(R^E&(C^R))+I[12]+1804603682&4294967295,_=E+(w<<7&4294967295|w>>>25),w=R+(C^_&(E^C))+I[13]+4254626195&4294967295,R=_+(w<<12&4294967295|w>>>20),w=C+(E^R&(_^E))+I[14]+2792965006&4294967295,C=R+(w<<17&4294967295|w>>>15),w=E+(_^C&(R^_))+I[15]+1236535329&4294967295,E=C+(w<<22&4294967295|w>>>10),w=_+(C^R&(E^C))+I[1]+4129170786&4294967295,_=E+(w<<5&4294967295|w>>>27),w=R+(E^C&(_^E))+I[6]+3225465664&4294967295,R=_+(w<<9&4294967295|w>>>23),w=C+(_^E&(R^_))+I[11]+643717713&4294967295,C=R+(w<<14&4294967295|w>>>18),w=E+(R^_&(C^R))+I[0]+3921069994&4294967295,E=C+(w<<20&4294967295|w>>>12),w=_+(C^R&(E^C))+I[5]+3593408605&4294967295,_=E+(w<<5&4294967295|w>>>27),w=R+(E^C&(_^E))+I[10]+38016083&4294967295,R=_+(w<<9&4294967295|w>>>23),w=C+(_^E&(R^_))+I[15]+3634488961&4294967295,C=R+(w<<14&4294967295|w>>>18),w=E+(R^_&(C^R))+I[4]+3889429448&4294967295,E=C+(w<<20&4294967295|w>>>12),w=_+(C^R&(E^C))+I[9]+568446438&4294967295,_=E+(w<<5&4294967295|w>>>27),w=R+(E^C&(_^E))+I[14]+3275163606&4294967295,R=_+(w<<9&4294967295|w>>>23),w=C+(_^E&(R^_))+I[3]+4107603335&4294967295,C=R+(w<<14&4294967295|w>>>18),w=E+(R^_&(C^R))+I[8]+1163531501&4294967295,E=C+(w<<20&4294967295|w>>>12),w=_+(C^R&(E^C))+I[13]+2850285829&4294967295,_=E+(w<<5&4294967295|w>>>27),w=R+(E^C&(_^E))+I[2]+4243563512&4294967295,R=_+(w<<9&4294967295|w>>>23),w=C+(_^E&(R^_))+I[7]+1735328473&4294967295,C=R+(w<<14&4294967295|w>>>18),w=E+(R^_&(C^R))+I[12]+2368359562&4294967295,E=C+(w<<20&4294967295|w>>>12),w=_+(E^C^R)+I[5]+4294588738&4294967295,_=E+(w<<4&4294967295|w>>>28),w=R+(_^E^C)+I[8]+2272392833&4294967295,R=_+(w<<11&4294967295|w>>>21),w=C+(R^_^E)+I[11]+1839030562&4294967295,C=R+(w<<16&4294967295|w>>>16),w=E+(C^R^_)+I[14]+4259657740&4294967295,E=C+(w<<23&4294967295|w>>>9),w=_+(E^C^R)+I[1]+2763975236&4294967295,_=E+(w<<4&4294967295|w>>>28),w=R+(_^E^C)+I[4]+1272893353&4294967295,R=_+(w<<11&4294967295|w>>>21),w=C+(R^_^E)+I[7]+4139469664&4294967295,C=R+(w<<16&4294967295|w>>>16),w=E+(C^R^_)+I[10]+3200236656&4294967295,E=C+(w<<23&4294967295|w>>>9),w=_+(E^C^R)+I[13]+681279174&4294967295,_=E+(w<<4&4294967295|w>>>28),w=R+(_^E^C)+I[0]+3936430074&4294967295,R=_+(w<<11&4294967295|w>>>21),w=C+(R^_^E)+I[3]+3572445317&4294967295,C=R+(w<<16&4294967295|w>>>16),w=E+(C^R^_)+I[6]+76029189&4294967295,E=C+(w<<23&4294967295|w>>>9),w=_+(E^C^R)+I[9]+3654602809&4294967295,_=E+(w<<4&4294967295|w>>>28),w=R+(_^E^C)+I[12]+3873151461&4294967295,R=_+(w<<11&4294967295|w>>>21),w=C+(R^_^E)+I[15]+530742520&4294967295,C=R+(w<<16&4294967295|w>>>16),w=E+(C^R^_)+I[2]+3299628645&4294967295,E=C+(w<<23&4294967295|w>>>9),w=_+(C^(E|~R))+I[0]+4096336452&4294967295,_=E+(w<<6&4294967295|w>>>26),w=R+(E^(_|~C))+I[7]+1126891415&4294967295,R=_+(w<<10&4294967295|w>>>22),w=C+(_^(R|~E))+I[14]+2878612391&4294967295,C=R+(w<<15&4294967295|w>>>17),w=E+(R^(C|~_))+I[5]+4237533241&4294967295,E=C+(w<<21&4294967295|w>>>11),w=_+(C^(E|~R))+I[12]+1700485571&4294967295,_=E+(w<<6&4294967295|w>>>26),w=R+(E^(_|~C))+I[3]+2399980690&4294967295,R=_+(w<<10&4294967295|w>>>22),w=C+(_^(R|~E))+I[10]+4293915773&4294967295,C=R+(w<<15&4294967295|w>>>17),w=E+(R^(C|~_))+I[1]+2240044497&4294967295,E=C+(w<<21&4294967295|w>>>11),w=_+(C^(E|~R))+I[8]+1873313359&4294967295,_=E+(w<<6&4294967295|w>>>26),w=R+(E^(_|~C))+I[15]+4264355552&4294967295,R=_+(w<<10&4294967295|w>>>22),w=C+(_^(R|~E))+I[6]+2734768916&4294967295,C=R+(w<<15&4294967295|w>>>17),w=E+(R^(C|~_))+I[13]+1309151649&4294967295,E=C+(w<<21&4294967295|w>>>11),w=_+(C^(E|~R))+I[4]+4149444226&4294967295,_=E+(w<<6&4294967295|w>>>26),w=R+(E^(_|~C))+I[11]+3174756917&4294967295,R=_+(w<<10&4294967295|w>>>22),w=C+(_^(R|~E))+I[2]+718787259&4294967295,C=R+(w<<15&4294967295|w>>>17),w=E+(R^(C|~_))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(C+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+C&4294967295,b.g[3]=b.g[3]+R&4294967295}r.prototype.u=function(b,_){_===void 0&&(_=b.length);for(var E=_-this.blockSize,I=this.B,C=this.h,R=0;R<_;){if(C==0)for(;R<=E;)s(this,b,R),R+=this.blockSize;if(typeof b=="string"){for(;R<_;)if(I[C++]=b.charCodeAt(R++),C==this.blockSize){s(this,I),C=0;break}}else for(;R<_;)if(I[C++]=b[R++],C==this.blockSize){s(this,I),C=0;break}}this.h=C,this.o+=_},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;var E=8*this.o;for(_=b.length-8;_<b.length;++_)b[_]=E&255,E/=256;for(this.u(b),b=Array(16),_=E=0;4>_;++_)for(var I=0;32>I;I+=8)b[E++]=this.g[_]>>>I&255;return b};function i(b,_){var E=a;return Object.prototype.hasOwnProperty.call(E,b)?E[b]:E[b]=_(b)}function o(b,_){this.h=_;for(var E=[],I=!0,C=b.length-1;0<=C;C--){var R=b[C]|0;I&&R==_||(E[C]=R,I=!1)}this.g=E}var a={};function l(b){return-128<=b&&128>b?i(b,function(_){return new o([_|0],0>_?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return d;if(0>b)return P(u(-b));for(var _=[],E=1,I=0;b>=E;I++)_[I]=b/E|0,E*=4294967296;return new o(_,0)}function h(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return P(h(b.substring(1),_));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(_,8)),I=d,C=0;C<b.length;C+=8){var R=Math.min(8,b.length-C),w=parseInt(b.substring(C,C+R),_);8>R?(R=u(Math.pow(_,R)),I=I.j(R).add(u(w))):(I=I.j(E),I=I.add(u(w)))}return I}var d=l(0),p=l(1),g=l(16777216);n=o.prototype,n.m=function(){if(T(this))return-P(this).m();for(var b=0,_=1,E=0;E<this.g.length;E++){var I=this.i(E);b+=(0<=I?I:4294967296+I)*_,_*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(v(this))return"0";if(T(this))return"-"+P(this).toString(b);for(var _=u(Math.pow(b,6)),E=this,I="";;){var C=M(E,_).g;E=O(E,C.j(_));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(b);if(E=C,v(E))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function v(b){if(b.h!=0)return!1;for(var _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function T(b){return b.h==-1}n.l=function(b){return b=O(this,b),T(b)?-1:v(b)?0:1};function P(b){for(var _=b.g.length,E=[],I=0;I<_;I++)E[I]=~b.g[I];return new o(E,~b.h).add(p)}n.abs=function(){return T(this)?P(this):this},n.add=function(b){for(var _=Math.max(this.g.length,b.g.length),E=[],I=0,C=0;C<=_;C++){var R=I+(this.i(C)&65535)+(b.i(C)&65535),w=(R>>>16)+(this.i(C)>>>16)+(b.i(C)>>>16);I=w>>>16,R&=65535,w&=65535,E[C]=w<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function O(b,_){return b.add(P(_))}n.j=function(b){if(v(this)||v(b))return d;if(T(this))return T(b)?P(this).j(P(b)):P(P(this).j(b));if(T(b))return P(this.j(P(b)));if(0>this.l(g)&&0>b.l(g))return u(this.m()*b.m());for(var _=this.g.length+b.g.length,E=[],I=0;I<2*_;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var C=0;C<b.g.length;C++){var R=this.i(I)>>>16,w=this.i(I)&65535,Ie=b.i(C)>>>16,nt=b.i(C)&65535;E[2*I+2*C]+=w*nt,V(E,2*I+2*C),E[2*I+2*C+1]+=R*nt,V(E,2*I+2*C+1),E[2*I+2*C+1]+=w*Ie,V(E,2*I+2*C+1),E[2*I+2*C+2]+=R*Ie,V(E,2*I+2*C+2)}for(I=0;I<_;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=_;I<2*_;I++)E[I]=0;return new o(E,0)};function V(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function x(b,_){this.g=b,this.h=_}function M(b,_){if(v(_))throw Error("division by zero");if(v(b))return new x(d,d);if(T(b))return _=M(P(b),_),new x(P(_.g),P(_.h));if(T(_))return _=M(b,P(_)),new x(P(_.g),_.h);if(30<b.g.length){if(T(b)||T(_))throw Error("slowDivide_ only works with positive integers.");for(var E=p,I=_;0>=I.l(b);)E=W(E),I=W(I);var C=j(E,1),R=j(I,1);for(I=j(I,2),E=j(E,2);!v(I);){var w=R.add(I);0>=w.l(b)&&(C=C.add(E),R=w),I=j(I,1),E=j(E,1)}return _=O(b,C.j(_)),new x(C,_)}for(C=d;0<=b.l(_);){for(E=Math.max(1,Math.floor(b.m()/_.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=u(E),w=R.j(_);T(w)||0<w.l(b);)E-=I,R=u(E),w=R.j(_);v(R)&&(R=p),C=C.add(R),b=O(b,w)}return new x(C,b)}n.A=function(b){return M(this,b).h},n.and=function(b){for(var _=Math.max(this.g.length,b.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)&b.i(I);return new o(E,this.h&b.h)},n.or=function(b){for(var _=Math.max(this.g.length,b.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)|b.i(I);return new o(E,this.h|b.h)},n.xor=function(b){for(var _=Math.max(this.g.length,b.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)^b.i(I);return new o(E,this.h^b.h)};function W(b){for(var _=b.g.length+1,E=[],I=0;I<_;I++)E[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(E,b.h)}function j(b,_){var E=_>>5;_%=32;for(var I=b.g.length-E,C=[],R=0;R<I;R++)C[R]=0<_?b.i(R+E)>>>_|b.i(R+E+1)<<32-_:b.i(R+E);return new o(C,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fA=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,rs=o}).apply(typeof dE<"u"?dE:typeof self<"u"?self:typeof window<"u"?window:{});var Ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pA,ha,mA,Lc,qf,gA,_A,yA;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,m){return c==Array.prototype||c==Object.prototype||(c[f]=m.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ec=="object"&&Ec];for(var f=0;f<c.length;++f){var m=c[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=t(this);function s(c,f){if(f)e:{var m=r;c=c.split(".");for(var y=0;y<c.length-1;y++){var N=c[y];if(!(N in m))break e;m=m[N]}c=c[c.length-1],y=m[c],f=f(y),f!=y&&f!=null&&e(m,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var m=0,y=!1,N={next:function(){if(!y&&m<c.length){var L=m++;return{value:f(L,c[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(c){return c||function(){return i(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,m){return c.call.apply(c.bind,arguments)}function d(c,f,m){if(!c)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),c.apply(f,N)}}return function(){return c.apply(f,arguments)}}function p(c,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function g(c,f){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),c.apply(this,y)}}function v(c,f){function m(){}m.prototype=f.prototype,c.aa=f.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(y,N,L){for(var Q=Array(arguments.length-2),je=2;je<arguments.length;je++)Q[je-2]=arguments[je];return f.prototype[N].apply(y,Q)}}function T(c){const f=c.length;if(0<f){const m=Array(f);for(let y=0;y<f;y++)m[y]=c[y];return m}return[]}function P(c,f){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(l(y)){const N=c.length||0,L=y.length||0;c.length=N+L;for(let Q=0;Q<L;Q++)c[N+Q]=y[Q]}else c.push(y)}}class O{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function V(c){return/^[\s\xa0]*$/.test(c)}function x(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function M(c){return M[" "](c),c}M[" "]=function(){};var W=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function j(c,f,m){for(const y in c)f.call(m,c[y],y,c)}function b(c,f){for(const m in c)f.call(void 0,c[m],m,c)}function _(c){const f={};for(const m in c)f[m]=c[m];return f}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(c,f){let m,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(m in y)c[m]=y[m];for(let L=0;L<E.length;L++)m=E[L],Object.prototype.hasOwnProperty.call(y,m)&&(c[m]=y[m])}}function C(c){var f=1;c=c.split(":");const m=[];for(;0<f&&c.length;)m.push(c.shift()),f--;return c.length&&m.push(c.join(":")),m}function R(c){a.setTimeout(()=>{throw c},0)}function w(){var c=_t;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class Ie{constructor(){this.h=this.g=null}add(f,m){const y=nt.get();y.set(f,m),this.h?this.h.next=y:this.g=y,this.h=y}}var nt=new O(()=>new Ne,c=>c.reset());class Ne{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,ve=!1,_t=new Ie,en=()=>{const c=a.Promise.resolve(void 0);ue=()=>{c.then(zt)}};var zt=()=>{for(var c;c=w();){try{c.h.call(c.g)}catch(m){R(m)}var f=nt;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}ve=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var Fn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return c}();function Qt(c,f){if($e.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,y=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(W){e:{try{M(f.nodeName);var N=!0;break e}catch{}N=!1}N||(f=null)}}else m=="mouseover"?f=c.fromElement:m=="mouseout"&&(f=c.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:bt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Qt.aa.h.call(this)}}v(Qt,$e);var bt={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(c,f,m,y,N){this.listener=c,this.proxy=null,this.src=f,this.type=m,this.capture=!!y,this.ha=N,this.key=++X,this.da=this.fa=!1}function se(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function ke(c){this.src=c,this.g={},this.h=0}ke.prototype.add=function(c,f,m,y,N){var L=c.toString();c=this.g[L],c||(c=this.g[L]=[],this.h++);var Q=S(c,f,y,N);return-1<Q?(f=c[Q],m||(f.fa=!1)):(f=new J(f,this.src,L,!!y,N),f.fa=m,c.push(f)),f};function A(c,f){var m=f.type;if(m in c.g){var y=c.g[m],N=Array.prototype.indexOf.call(y,f,void 0),L;(L=0<=N)&&Array.prototype.splice.call(y,N,1),L&&(se(f),c.g[m].length==0&&(delete c.g[m],c.h--))}}function S(c,f,m,y){for(var N=0;N<c.length;++N){var L=c[N];if(!L.da&&L.listener==f&&L.capture==!!m&&L.ha==y)return N}return-1}var k="closure_lm_"+(1e6*Math.random()|0),B={};function q(c,f,m,y,N){if(Array.isArray(f)){for(var L=0;L<f.length;L++)q(c,f[L],m,y,N);return null}return m=he(m),c&&c[U]?c.K(f,m,u(y)?!!y.capture:!1,N):$(c,f,m,!1,y,N)}function $(c,f,m,y,N,L){if(!f)throw Error("Invalid event type");var Q=u(N)?!!N.capture:!!N,je=ne(c);if(je||(c[k]=je=new ke(c)),m=je.add(f,m,y,Q,L),m.proxy)return m;if(y=Z(),m.proxy=y,y.src=c,y.listener=m,c.addEventListener)Fn||(N=Q),N===void 0&&(N=!1),c.addEventListener(f.toString(),y,N);else if(c.attachEvent)c.attachEvent(H(f.toString()),y);else if(c.addListener&&c.removeListener)c.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Z(){function c(m){return f.call(c.src,c.listener,m)}const f=le;return c}function z(c,f,m,y,N){if(Array.isArray(f))for(var L=0;L<f.length;L++)z(c,f[L],m,y,N);else y=u(y)?!!y.capture:!!y,m=he(m),c&&c[U]?(c=c.i,f=String(f).toString(),f in c.g&&(L=c.g[f],m=S(L,m,y,N),-1<m&&(se(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete c.g[f],c.h--)))):c&&(c=ne(c))&&(f=c.g[f.toString()],c=-1,f&&(c=S(f,m,y,N)),(m=-1<c?f[c]:null)&&G(m))}function G(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[U])A(f.i,c);else{var m=c.type,y=c.proxy;f.removeEventListener?f.removeEventListener(m,y,c.capture):f.detachEvent?f.detachEvent(H(m),y):f.addListener&&f.removeListener&&f.removeListener(y),(m=ne(f))?(A(m,c),m.h==0&&(m.src=null,f[k]=null)):se(c)}}}function H(c){return c in B?B[c]:B[c]="on"+c}function le(c,f){if(c.da)c=!0;else{f=new Qt(f,this);var m=c.listener,y=c.ha||c.src;c.fa&&G(c),c=m.call(y,f)}return c}function ne(c){return c=c[k],c instanceof ke?c:null}var oe="__closure_events_fn_"+(1e9*Math.random()>>>0);function he(c){return typeof c=="function"?c:(c[oe]||(c[oe]=function(f){return c.handleEvent(f)}),c[oe])}function ce(){Le.call(this),this.i=new ke(this),this.M=this,this.F=null}v(ce,Le),ce.prototype[U]=!0,ce.prototype.removeEventListener=function(c,f,m,y){z(this,c,f,m,y)};function ye(c,f){var m,y=c.F;if(y)for(m=[];y;y=y.F)m.push(y);if(c=c.M,y=f.type||f,typeof f=="string")f=new $e(f,c);else if(f instanceof $e)f.target=f.target||c;else{var N=f;f=new $e(y,c),I(f,N)}if(N=!0,m)for(var L=m.length-1;0<=L;L--){var Q=f.g=m[L];N=Re(Q,y,!0,f)&&N}if(Q=f.g=c,N=Re(Q,y,!0,f)&&N,N=Re(Q,y,!1,f)&&N,m)for(L=0;L<m.length;L++)Q=f.g=m[L],N=Re(Q,y,!1,f)&&N}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var m=c.g[f],y=0;y<m.length;y++)se(m[y]);delete c.g[f],c.h--}}this.F=null},ce.prototype.K=function(c,f,m,y){return this.i.add(String(c),f,!1,m,y)},ce.prototype.L=function(c,f,m,y){return this.i.add(String(c),f,!0,m,y)};function Re(c,f,m,y){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var N=!0,L=0;L<f.length;++L){var Q=f[L];if(Q&&!Q.da&&Q.capture==m){var je=Q.listener,Et=Q.ha||Q.src;Q.fa&&A(c.i,Q),N=je.call(Et,y)!==!1&&N}}return N&&!y.defaultPrevented}function At(c,f,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function yt(c){c.g=At(()=>{c.g=null,c.i&&(c.i=!1,yt(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class mn extends Le{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:yt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rt(c){Le.call(this),this.h=c,this.g={}}v(Rt,Le);var Dr=[];function xo(c){j(c.g,function(f,m){this.g.hasOwnProperty(m)&&G(f)},c),c.g={}}Rt.prototype.N=function(){Rt.aa.N.call(this),xo(this)},Rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vt=a.JSON.stringify,gn=a.JSON.parse,jl=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Kh(){}Kh.prototype.h=null;function Ng(c){return c.h||(c.h=c.i())}function xg(){}var Oo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gh(){$e.call(this,"d")}v(Gh,$e);function zh(){$e.call(this,"c")}v(zh,$e);var vs={},Og=null;function ql(){return Og=Og||new ce}vs.La="serverreachability";function Vg(c){$e.call(this,vs.La,c)}v(Vg,$e);function Vo(c){const f=ql();ye(f,new Vg(f))}vs.STAT_EVENT="statevent";function Mg(c,f){$e.call(this,vs.STAT_EVENT,c),this.stat=f}v(Mg,$e);function Ft(c){const f=ql();ye(f,new Mg(f,c))}vs.Ma="timingevent";function Lg(c,f){$e.call(this,vs.Ma,c),this.size=f}v(Lg,$e);function Mo(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function Lo(){this.g=!0}Lo.prototype.xa=function(){this.g=!1};function jS(c,f,m,y,N,L){c.info(function(){if(c.g)if(L)for(var Q="",je=L.split("&"),Et=0;Et<je.length;Et++){var De=je[Et].split("=");if(1<De.length){var St=De[0];De=De[1];var Ct=St.split("_");Q=2<=Ct.length&&Ct[1]=="type"?Q+(St+"="+De+"&"):Q+(St+"=redacted&")}}else Q=null;else Q=L;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+f+`
`+m+`
`+Q})}function qS(c,f,m,y,N,L,Q){c.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+f+`
`+m+`
`+L+" "+Q})}function gi(c,f,m,y){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+HS(c,m)+(y?" "+y:"")})}function WS(c,f){c.info(function(){return"TIMEOUT: "+f})}Lo.prototype.info=function(){};function HS(c,f){if(!c.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var y=m[c];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var L=N[0];if(L!="noop"&&L!="stop"&&L!="close")for(var Q=1;Q<N.length;Q++)N[Q]=""}}}}return vt(m)}catch{return f}}var Wl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qh;function Hl(){}v(Hl,Kh),Hl.prototype.g=function(){return new XMLHttpRequest},Hl.prototype.i=function(){return{}},Qh=new Hl;function Nr(c,f,m,y){this.j=c,this.i=f,this.l=m,this.R=y||1,this.U=new Rt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ug}function Ug(){this.i=null,this.g="",this.h=!1}var Bg={},Yh={};function Xh(c,f,m){c.L=1,c.v=Ql(or(f)),c.m=m,c.P=!0,$g(c,null)}function $g(c,f){c.F=Date.now(),Kl(c),c.A=or(c.v);var m=c.A,y=c.R;Array.isArray(y)||(y=[String(y)]),t_(m.i,"t",y),c.C=0,m=c.j.J,c.h=new Ug,c.g=v_(c.j,m?f:null,!c.m),0<c.O&&(c.M=new mn(p(c.Y,c,c.g),c.O)),f=c.U,m=c.g,y=c.ca;var N="readystatechange";Array.isArray(N)||(N&&(Dr[0]=N.toString()),N=Dr);for(var L=0;L<N.length;L++){var Q=q(m,N[L],y||f.handleEvent,!1,f.h||f);if(!Q)break;f.g[Q.key]=Q}f=c.H?_(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),Vo(),jS(c.i,c.u,c.A,c.l,c.R,c.m)}Nr.prototype.ca=function(c){c=c.target;const f=this.M;f&&ar(c)==3?f.j():this.Y(c)},Nr.prototype.Y=function(c){try{if(c==this.g)e:{const Ct=ar(this.g);var f=this.g.Ba();const vi=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||l_(this.g)))){this.J||Ct!=4||f==7||(f==8||0>=vi?Vo(3):Vo(2)),Jh(this);var m=this.g.Z();this.X=m;t:if(jg(this)){var y=l_(this.g);c="";var N=y.length,L=ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Es(this),Fo(this);var Q="";break t}this.h.i=new a.TextDecoder}for(f=0;f<N;f++)this.h.h=!0,c+=this.h.i.decode(y[f],{stream:!(L&&f==N-1)});y.length=0,this.h.g+=c,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=m==200,qS(this.i,this.u,this.A,this.l,this.R,Ct,m),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Et=this.g;if((je=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(je)){var De=je;break t}}De=null}if(m=De)gi(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zh(this,m);else{this.o=!1,this.s=3,Ft(12),Es(this),Fo(this);break e}}if(this.P){m=!0;let An;for(;!this.J&&this.C<Q.length;)if(An=KS(this,Q),An==Yh){Ct==4&&(this.s=4,Ft(14),m=!1),gi(this.i,this.l,null,"[Incomplete Response]");break}else if(An==Bg){this.s=4,Ft(15),gi(this.i,this.l,Q,"[Invalid Chunk]"),m=!1;break}else gi(this.i,this.l,An,null),Zh(this,An);if(jg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||Q.length!=0||this.h.h||(this.s=1,Ft(16),m=!1),this.o=this.o&&m,!m)gi(this.i,this.l,Q,"[Invalid Chunked Response]"),Es(this),Fo(this);else if(0<Q.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),id(St),St.M=!0,Ft(11))}}else gi(this.i,this.l,Q,null),Zh(this,Q);Ct==4&&Es(this),this.o&&!this.J&&(Ct==4?m_(this.j,this):(this.o=!1,Kl(this)))}else cC(this.g),m==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Ft(12)):(this.s=0,Ft(13)),Es(this),Fo(this)}}}catch{}finally{}};function jg(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function KS(c,f){var m=c.C,y=f.indexOf(`
`,m);return y==-1?Yh:(m=Number(f.substring(m,y)),isNaN(m)?Bg:(y+=1,y+m>f.length?Yh:(f=f.slice(y,y+m),c.C=y+m,f)))}Nr.prototype.cancel=function(){this.J=!0,Es(this)};function Kl(c){c.S=Date.now()+c.I,qg(c,c.I)}function qg(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Mo(p(c.ba,c),f)}function Jh(c){c.B&&(a.clearTimeout(c.B),c.B=null)}Nr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(WS(this.i,this.A),this.L!=2&&(Vo(),Ft(17)),Es(this),this.s=2,Fo(this)):qg(this,this.S-c)};function Fo(c){c.j.G==0||c.J||m_(c.j,c)}function Es(c){Jh(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,xo(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function Zh(c,f){try{var m=c.j;if(m.G!=0&&(m.g==c||ed(m.h,c))){if(!c.K&&ed(m.h,c)&&m.G==3){try{var y=m.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)tc(m),Zl(m);else break e;sd(m),Ft(18)}}else m.za=N[1],0<m.za-m.T&&37500>N[2]&&m.F&&m.v==0&&!m.C&&(m.C=Mo(p(m.Za,m),6e3));if(1>=Kg(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Is(m,11)}else if((c.K||m.g==c)&&tc(m),!V(f))for(N=m.Da.g.parse(f),f=0;f<N.length;f++){let De=N[f];if(m.T=De[0],De=De[1],m.G==2)if(De[0]=="c"){m.K=De[1],m.ia=De[2];const St=De[3];St!=null&&(m.la=St,m.j.info("VER="+m.la));const Ct=De[4];Ct!=null&&(m.Aa=Ct,m.j.info("SVER="+m.Aa));const vi=De[5];vi!=null&&typeof vi=="number"&&0<vi&&(y=1.5*vi,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const An=c.g;if(An){const rc=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rc){var L=y.h;L.g||rc.indexOf("spdy")==-1&&rc.indexOf("quic")==-1&&rc.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(td(L,L.h),L.h=null))}if(y.D){const od=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;od&&(y.ya=od,Ge(y.I,y.D,od))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var Q=c;if(y.qa=y_(y,y.J?y.ia:null,y.W),Q.K){Gg(y.h,Q);var je=Q,Et=y.L;Et&&(je.I=Et),je.B&&(Jh(je),Kl(je)),y.g=Q}else f_(y);0<m.i.length&&ec(m)}else De[0]!="stop"&&De[0]!="close"||Is(m,7);else m.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?Is(m,7):rd(m):De[0]!="noop"&&m.l&&m.l.ta(De),m.v=0)}}Vo(4)}catch{}}var GS=class{constructor(c,f){this.g=c,this.map=f}};function Wg(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hg(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Kg(c){return c.h?1:c.g?c.g.size:0}function ed(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function td(c,f){c.g?c.g.add(f):c.h=f}function Gg(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}Wg.prototype.cancel=function(){if(this.i=zg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function zg(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const m of c.g.values())f=f.concat(m.D);return f}return T(c.i)}function zS(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],m=c.length,y=0;y<m;y++)f.push(c[y]);return f}f=[],m=0;for(y in c)f[m++]=c[y];return f}function QS(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var m=0;m<c;m++)f.push(m);return f}f=[],m=0;for(const y in c)f[m++]=y;return f}}}function Qg(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var m=QS(c),y=zS(c),N=y.length,L=0;L<N;L++)f.call(void 0,y[L],m&&m[L],c)}var Yg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YS(c,f){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var y=c[m].indexOf("="),N=null;if(0<=y){var L=c[m].substring(0,y);N=c[m].substring(y+1)}else L=c[m];f(L,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Ts(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Ts){this.h=c.h,Gl(this,c.j),this.o=c.o,this.g=c.g,zl(this,c.s),this.l=c.l;var f=c.i,m=new $o;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Xg(this,m),this.m=c.m}else c&&(f=String(c).match(Yg))?(this.h=!1,Gl(this,f[1]||"",!0),this.o=Uo(f[2]||""),this.g=Uo(f[3]||"",!0),zl(this,f[4]),this.l=Uo(f[5]||"",!0),Xg(this,f[6]||"",!0),this.m=Uo(f[7]||"")):(this.h=!1,this.i=new $o(null,this.h))}Ts.prototype.toString=function(){var c=[],f=this.j;f&&c.push(Bo(f,Jg,!0),":");var m=this.g;return(m||f=="file")&&(c.push("//"),(f=this.o)&&c.push(Bo(f,Jg,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(Bo(m,m.charAt(0)=="/"?ZS:JS,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",Bo(m,tC)),c.join("")};function or(c){return new Ts(c)}function Gl(c,f,m){c.j=m?Uo(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function zl(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function Xg(c,f,m){f instanceof $o?(c.i=f,nC(c.i,c.h)):(m||(f=Bo(f,eC)),c.i=new $o(f,c.h))}function Ge(c,f,m){c.i.set(f,m)}function Ql(c){return Ge(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Uo(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Bo(c,f,m){return typeof c=="string"?(c=encodeURI(c).replace(f,XS),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function XS(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Jg=/[#\/\?@]/g,JS=/[#\?:]/g,ZS=/[#\?]/g,eC=/[#\?@]/g,tC=/#/g;function $o(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function xr(c){c.g||(c.g=new Map,c.h=0,c.i&&YS(c.i,function(f,m){c.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}n=$o.prototype,n.add=function(c,f){xr(this),this.i=null,c=_i(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(f),this.h+=1,this};function Zg(c,f){xr(c),f=_i(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function e_(c,f){return xr(c),f=_i(c,f),c.g.has(f)}n.forEach=function(c,f){xr(this),this.g.forEach(function(m,y){m.forEach(function(N){c.call(f,N,y,this)},this)},this)},n.na=function(){xr(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let y=0;y<f.length;y++){const N=c[y];for(let L=0;L<N.length;L++)m.push(f[y])}return m},n.V=function(c){xr(this);let f=[];if(typeof c=="string")e_(this,c)&&(f=f.concat(this.g.get(_i(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)f=f.concat(c[m])}return f},n.set=function(c,f){return xr(this),this.i=null,c=_i(this,c),e_(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},n.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function t_(c,f,m){Zg(c,f),0<m.length&&(c.i=null,c.g.set(_i(c,f),T(m)),c.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var y=f[m];const L=encodeURIComponent(String(y)),Q=this.V(y);for(y=0;y<Q.length;y++){var N=L;Q[y]!==""&&(N+="="+encodeURIComponent(String(Q[y]))),c.push(N)}}return this.i=c.join("&")};function _i(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function nC(c,f){f&&!c.j&&(xr(c),c.i=null,c.g.forEach(function(m,y){var N=y.toLowerCase();y!=N&&(Zg(this,y),t_(this,N,m))},c)),c.j=f}function rC(c,f){const m=new Lo;if(a.Image){const y=new Image;y.onload=g(Or,m,"TestLoadImage: loaded",!0,f,y),y.onerror=g(Or,m,"TestLoadImage: error",!1,f,y),y.onabort=g(Or,m,"TestLoadImage: abort",!1,f,y),y.ontimeout=g(Or,m,"TestLoadImage: timeout",!1,f,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=c}else f(!1)}function sC(c,f){const m=new Lo,y=new AbortController,N=setTimeout(()=>{y.abort(),Or(m,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:y.signal}).then(L=>{clearTimeout(N),L.ok?Or(m,"TestPingServer: ok",!0,f):Or(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(N),Or(m,"TestPingServer: error",!1,f)})}function Or(c,f,m,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(m)}catch{}}function iC(){this.g=new jl}function oC(c,f,m){const y=m||"";try{Qg(c,function(N,L){let Q=N;u(N)&&(Q=vt(N)),f.push(y+L+"="+encodeURIComponent(Q))})}catch(N){throw f.push(y+"type="+encodeURIComponent("_badmap")),N}}function Yl(c){this.l=c.Ub||null,this.j=c.eb||!1}v(Yl,Kh),Yl.prototype.g=function(){return new Xl(this.l,this.j)},Yl.prototype.i=function(c){return function(){return c}}({});function Xl(c,f){ce.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(Xl,ce),n=Xl.prototype,n.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,qo(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jo(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,qo(this)),this.g&&(this.readyState=3,qo(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;n_(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function n_(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?jo(this):qo(this),this.readyState==3&&n_(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,jo(this))},n.Qa=function(c){this.g&&(this.response=c,jo(this))},n.ga=function(){this.g&&jo(this)};function jo(c){c.readyState=4,c.l=null,c.j=null,c.v=null,qo(c)}n.setRequestHeader=function(c,f){this.u.append(c,f)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=f.next();return c.join(`\r
`)};function qo(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Xl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function r_(c){let f="";return j(c,function(m,y){f+=y,f+=":",f+=m,f+=`\r
`}),f}function nd(c,f,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=r_(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):Ge(c,f,m))}function it(c){ce.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(it,ce);var aC=/^https?$/i,lC=["POST","PUT"];n=it.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,f,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qh.g(),this.v=this.o?Ng(this.o):Ng(Qh),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(L){s_(this,L);return}if(c=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)m.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())m.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),N=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(lC,f,void 0))||y||N||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,Q]of m)this.g.setRequestHeader(L,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{a_(this),this.u=!0,this.g.send(c),this.u=!1}catch(L){s_(this,L)}};function s_(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,i_(c),Jl(c)}function i_(c){c.A||(c.A=!0,ye(c,"complete"),ye(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,ye(this,"complete"),ye(this,"abort"),Jl(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jl(this,!0)),it.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?o_(this):this.bb())},n.bb=function(){o_(this)};function o_(c){if(c.h&&typeof o<"u"&&(!c.v[1]||ar(c)!=4||c.Z()!=2)){if(c.u&&ar(c)==4)At(c.Ea,0,c);else if(ye(c,"readystatechange"),ar(c)==4){c.h=!1;try{const Q=c.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var y;if(y=Q===0){var N=String(c.D).match(Yg)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),y=!aC.test(N?N.toLowerCase():"")}m=y}if(m)ye(c,"complete"),ye(c,"success");else{c.m=6;try{var L=2<ar(c)?c.g.statusText:""}catch{L=""}c.l=L+" ["+c.Z()+"]",i_(c)}}finally{Jl(c)}}}}function Jl(c,f){if(c.g){a_(c);const m=c.g,y=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||ye(c,"ready");try{m.onreadystatechange=y}catch{}}}function a_(c){c.I&&(a.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function ar(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<ar(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),gn(f)}};function l_(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function cC(c){const f={};c=(c.g&&2<=ar(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<c.length;y++){if(V(c[y]))continue;var m=C(c[y]);const N=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=f[N]||[];f[N]=L,L.push(m)}b(f,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wo(c,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||f}function c_(c){this.Aa=0,this.i=[],this.j=new Lo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wo("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wo("baseRetryDelayMs",5e3,c),this.cb=Wo("retryDelaySeedMs",1e4,c),this.Wa=Wo("forwardChannelMaxRetries",2,c),this.wa=Wo("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Wg(c&&c.concurrentRequestLimit),this.Da=new iC,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=c_.prototype,n.la=8,n.G=1,n.connect=function(c,f,m,y){Ft(0),this.W=c,this.H=f||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=y_(this,null,this.W),ec(this)};function rd(c){if(u_(c),c.G==3){var f=c.U++,m=or(c.I);if(Ge(m,"SID",c.K),Ge(m,"RID",f),Ge(m,"TYPE","terminate"),Ho(c,m),f=new Nr(c,c.j,f),f.L=2,f.v=Ql(or(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=v_(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Kl(f)}__(c)}function Zl(c){c.g&&(id(c),c.g.cancel(),c.g=null)}function u_(c){Zl(c),c.u&&(a.clearTimeout(c.u),c.u=null),tc(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function ec(c){if(!Hg(c.h)&&!c.s){c.s=!0;var f=c.Ga;ue||en(),ve||(ue(),ve=!0),_t.add(f,c),c.B=0}}function uC(c,f){return Kg(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Mo(p(c.Ga,c,f),g_(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const N=new Nr(this,this.j,c);let L=this.o;if(this.S&&(L?(L=_(L),I(L,this.S)):L=this.S),this.m!==null||this.O||(N.H=L,L=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=d_(this,N,f),m=or(this.I),Ge(m,"RID",c),Ge(m,"CVER",22),this.D&&Ge(m,"X-HTTP-Session-Id",this.D),Ho(this,m),L&&(this.O?f="headers="+encodeURIComponent(String(r_(L)))+"&"+f:this.m&&nd(m,this.m,L)),td(this.h,N),this.Ua&&Ge(m,"TYPE","init"),this.P?(Ge(m,"$req",f),Ge(m,"SID","null"),N.T=!0,Xh(N,m,null)):Xh(N,m,f),this.G=2}}else this.G==3&&(c?h_(this,c):this.i.length==0||Hg(this.h)||h_(this))};function h_(c,f){var m;f?m=f.l:m=c.U++;const y=or(c.I);Ge(y,"SID",c.K),Ge(y,"RID",m),Ge(y,"AID",c.T),Ho(c,y),c.m&&c.o&&nd(y,c.m,c.o),m=new Nr(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),f&&(c.i=f.D.concat(c.i)),f=d_(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),td(c.h,m),Xh(m,y,f)}function Ho(c,f){c.H&&j(c.H,function(m,y){Ge(f,y,m)}),c.l&&Qg({},function(m,y){Ge(f,y,m)})}function d_(c,f,m){m=Math.min(c.i.length,m);var y=c.l?p(c.l.Na,c.l,c):null;e:{var N=c.i;let L=-1;for(;;){const Q=["count="+m];L==-1?0<m?(L=N[0].g,Q.push("ofs="+L)):L=0:Q.push("ofs="+L);let je=!0;for(let Et=0;Et<m;Et++){let De=N[Et].g;const St=N[Et].map;if(De-=L,0>De)L=Math.max(0,N[Et].g-100),je=!1;else try{oC(St,Q,"req"+De+"_")}catch{y&&y(St)}}if(je){y=Q.join("&");break e}}}return c=c.i.splice(0,m),f.D=c,y}function f_(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;ue||en(),ve||(ue(),ve=!0),_t.add(f,c),c.v=0}}function sd(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Mo(p(c.Fa,c),g_(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,p_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Mo(p(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ft(10),Zl(this),p_(this))};function id(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function p_(c){c.g=new Nr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=or(c.qa);Ge(f,"RID","rpc"),Ge(f,"SID",c.K),Ge(f,"AID",c.T),Ge(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ge(f,"TO",c.ja),Ge(f,"TYPE","xmlhttp"),Ho(c,f),c.m&&c.o&&nd(f,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=Ql(or(f)),m.m=null,m.P=!0,$g(m,c)}n.Za=function(){this.C!=null&&(this.C=null,Zl(this),sd(this),Ft(19))};function tc(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function m_(c,f){var m=null;if(c.g==f){tc(c),id(c),c.g=null;var y=2}else if(ed(c.h,f))m=f.D,Gg(c.h,f),y=1;else return;if(c.G!=0){if(f.o)if(y==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var N=c.B;y=ql(),ye(y,new Lg(y,m)),ec(c)}else f_(c);else if(N=f.s,N==3||N==0&&0<f.X||!(y==1&&uC(c,f)||y==2&&sd(c)))switch(m&&0<m.length&&(f=c.h,f.i=f.i.concat(m)),N){case 1:Is(c,5);break;case 4:Is(c,10);break;case 3:Is(c,6);break;default:Is(c,2)}}}function g_(c,f){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*f}function Is(c,f){if(c.j.info("Error code "+f),f==2){var m=p(c.fb,c),y=c.Xa;const N=!y;y=new Ts(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Gl(y,"https"),Ql(y),N?rC(y.toString(),m):sC(y.toString(),m)}else Ft(2);c.G=0,c.l&&c.l.sa(f),__(c),u_(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Ft(2)):(this.j.info("Failed to ping google.com"),Ft(1))};function __(c){if(c.G=0,c.ka=[],c.l){const f=zg(c.h);(f.length!=0||c.i.length!=0)&&(P(c.ka,f),P(c.ka,c.i),c.h.i.length=0,T(c.i),c.i.length=0),c.l.ra()}}function y_(c,f,m){var y=m instanceof Ts?or(m):new Ts(m);if(y.g!="")f&&(y.g=f+"."+y.g),zl(y,y.s);else{var N=a.location;y=N.protocol,f=f?f+"."+N.hostname:N.hostname,N=+N.port;var L=new Ts(null);y&&Gl(L,y),f&&(L.g=f),N&&zl(L,N),m&&(L.l=m),y=L}return m=c.D,f=c.ya,m&&f&&Ge(y,m,f),Ge(y,"VER",c.la),Ho(c,y),y}function v_(c,f,m){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new it(new Yl({eb:m})):new it(c.pa),f.Ha(c.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function E_(){}n=E_.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function nc(){}nc.prototype.g=function(c,f){return new tn(c,f)};function tn(c,f){ce.call(this),this.g=new c_(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!V(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!V(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new yi(this)}v(tn,ce),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){rd(this.g)},tn.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=vt(c),c=m);f.i.push(new GS(f.Ya++,c)),f.G==3&&ec(f)},tn.prototype.N=function(){this.g.l=null,delete this.j,rd(this.g),delete this.g,tn.aa.N.call(this)};function T_(c){Gh.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const m in f){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}v(T_,Gh);function I_(){zh.call(this),this.status=1}v(I_,zh);function yi(c){this.g=c}v(yi,E_),yi.prototype.ua=function(){ye(this.g,"a")},yi.prototype.ta=function(c){ye(this.g,new T_(c))},yi.prototype.sa=function(c){ye(this.g,new I_)},yi.prototype.ra=function(){ye(this.g,"b")},nc.prototype.createWebChannel=nc.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,yA=function(){return new nc},_A=function(){return ql()},gA=vs,qf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wl.NO_ERROR=0,Wl.TIMEOUT=8,Wl.HTTP_ERROR=6,Lc=Wl,Fg.COMPLETE="complete",mA=Fg,xg.EventType=Oo,Oo.OPEN="a",Oo.CLOSE="b",Oo.ERROR="c",Oo.MESSAGE="d",ce.prototype.listen=ce.prototype.K,ha=xg,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,pA=it}).apply(typeof Ec<"u"?Ec:typeof self<"u"?self:typeof window<"u"?window:{});const fE="@firebase/firestore",pE="4.7.9";/**
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
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
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
 */let Po="11.4.0";/**
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
 */const ni=new Tl("@firebase/firestore");function Oi(){return ni.logLevel}function K(n,...e){if(ni.logLevel<=Te.DEBUG){const t=e.map(xm);ni.debug(`Firestore (${Po}): ${n}`,...t)}}function Wt(n,...e){if(ni.logLevel<=Te.ERROR){const t=e.map(xm);ni.error(`Firestore (${Po}): ${n}`,...t)}}function io(n,...e){if(ni.logLevel<=Te.WARN){const t=e.map(xm);ni.warn(`Firestore (${Po}): ${n}`,...t)}}function xm(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function re(n="Unexpected state"){const e=`FIRESTORE (${Po}) INTERNAL ASSERTION FAILED: `+n;throw Wt(e),new Error(e)}function ie(n,e){n||re()}function me(n,e){return n}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends sr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class vA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hU{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Tt.UNAUTHENTICATED))}shutdown(){}}class dU{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class fU{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ie(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new vA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Tt(e)}}class pU{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class mU{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new pU(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gU{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,on(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ie(this.o===void 0);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new mE(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ie(typeof t.token=="string"),this.R=t.token,new mE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function _U(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class EA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=_U(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ge(n,e){return n<e?-1:n>e?1:0}function oo(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function TA(n){return n+"\0"}/**
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
 */const gE=-62135596800,_E=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*_E);return new et(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Y(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Y(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<gE)throw new Y(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_E}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-gE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ae{static fromTimestamp(e){return new ae(e)}static min(){return new ae(new et(0,0))}static max(){return new ae(new et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const yE="__name__";class jn{constructor(e,t,r){t===void 0?t=0:t>e.length&&re(),r===void 0?r=e.length-t:r>e.length-t&&re(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return jn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof jn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=jn.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=jn.isNumericId(e),s=jn.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?jn.extractNumericId(e).compare(jn.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rs.fromString(e.substring(4,e.length-2))}}class Ve extends jn{construct(e,t,r){return new Ve(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ve(t)}static emptyPath(){return new Ve([])}}const yU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends jn{construct(e,t,r){return new rt(e,t,r)}static isValidIdentifier(e){return yU.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yE}static keyField(){return new rt([yE])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new Y(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new Y(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(t)}static emptyPath(){return new rt([])}}/**
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
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Ve.fromString(e))}static fromName(e){return new te(Ve.fromString(e).popFirst(5))}static empty(){return new te(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ve.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Ve(e.slice()))}}/**
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
 */const el=-1;class Au{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function Wf(n){return n.fields.find(e=>e.kind===2)}function Ns(n){return n.fields.filter(e=>e.kind!==2)}Au.UNKNOWN_ID=-1;class Fc{constructor(e,t){this.fieldPath=e,this.kind=t}}class tl{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new tl(0,pn.min())}}function vU(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new et(t+1,0):new et(t,r));return new pn(s,te.empty(),e)}function IA(n){return new pn(n.readTime,n.key,el)}class pn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new pn(ae.min(),te.empty(),el)}static max(){return new pn(ae.max(),te.empty(),el)}}function Om(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=te.comparator(n.documentKey,e.documentKey),t!==0?t:ge(n.largestBatchId,e.largestBatchId))}/**
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
 */const wA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function fi(n){if(n.code!==F.FAILED_PRECONDITION||n.message!==wA)throw n;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(s=>s?D.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new D((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,t){return new D((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
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
 */const rn="SimpleDb";class bh{static open(e,t,r,s){try{return new bh(t,e.transaction(s,r))}catch(i){throw new Da(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new Xn,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new Da(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const s=Vm(r.target.error);this.m.reject(new Da(e,s))}}get p(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(K(rn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new TU(t)}}class ss{static delete(e){return K(rn,"Removing database:",e),Vs(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Qp())return!1;if(ss.v())return!0;const e=ht(),t=ss.C(e),r=0<t&&t<10,s=AA(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static C(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.O=r,ss.C(ht())===12.2&&Wt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(e){return this.db||(K(rn,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Da(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new Y(F.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new Y(F.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Da(e,o))},s.onupgradeneeded=i=>{K(rn,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.O.B(o,s.transaction,i.oldVersion,this.version).next(()=>{K(rn,"Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=bh.open(this.db,e,i?"readonly":"readwrite",r),l=s(a).next(u=>(a.S(),u)).catch(u=>(a.abort(u),D.reject(u))).toPromise();return l.catch(()=>{}),await a.p,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(K(rn,"Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function AA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class EU{constructor(e){this.q=e,this.$=!1,this.K=null}get isDone(){return this.$}get U(){return this.K}set cursor(e){this.q=e}done(){this.$=!0}W(e){this.K=e}delete(){return Vs(this.q.delete())}}class Da extends Y{constructor(e,t){super(F.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function _s(n){return n.name==="IndexedDbTransactionError"}class TU{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(K(rn,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(K(rn,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Vs(r)}add(e){return K(rn,"ADD",this.store.name,e,e),Vs(this.store.add(e))}get(e){return Vs(this.store.get(e)).next(t=>(t===void 0&&(t=null),K(rn,"GET",this.store.name,e,t),t))}delete(e){return K(rn,"DELETE",this.store.name,e),Vs(this.store.delete(e))}count(){return K(rn,"COUNT",this.store.name),Vs(this.store.count())}G(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new D((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.j(i,(a,l)=>{o.push(l)}).next(()=>o)}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new D((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}J(e,t){K(rn,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const s=this.cursor(r);return this.j(s,(i,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.j(s,t)}X(e){const t=this.cursor({});return new D((r,s)=>{t.onerror=i=>{const o=Vm(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,t){const r=[];return new D((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new EU(a),u=t(a.primaryKey,a.value,l);if(u instanceof D){const h=u.catch(d=>(l.done(),D.reject(d)));r.push(h)}l.isDone?s():l.U===null?a.continue():a.continue(l.U)}}).next(()=>D.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Vs(n){return new D((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Vm(r.target.error);t(s)}})}let vE=!1;function Vm(n){const e=ss.C(ht());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new Y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return vE||(vE=!0,setTimeout(()=>{throw r},0)),r}}return n}const Na="IndexBackfiller";class IU{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){K(Na,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.ee.ne();K(Na,`Documents written: ${t}`)}catch(t){_s(t)?K(Na,"Ignoring IndexedDB error during index backfill: ",t):await fi(t)}await this.te(6e4)})}}class wU{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let s=t,i=!0;return D.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return K(Na,`Processing collection: ${o}`),this.ie(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>t-s)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(s,i)).next(a=>(K(Na,`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}se(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=IA(i);Om(o,r)>0&&(r=o)}),new pn(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class vn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}vn.ae=-1;/**
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
 */const Ks=-1;function Ah(n){return n==null}function nl(n){return n===0&&1/n==-1/0}function bU(n){return typeof n=="number"&&Number.isInteger(n)&&!nl(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ru="";function Lt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=EE(e)),e=AU(n.get(t),e);return EE(e)}function AU(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Ru:t+="";break;default:t+=i}}return t}function EE(n){return n+Ru+""}function Gn(n){const e=n.length;if(ie(e>=2),e===2)return ie(n.charAt(0)===Ru&&n.charAt(1)===""),Ve.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf(Ru,i);switch((o<0||o>t)&&re(),n.charAt(o+1)){case"":const a=n.substring(i,o);let l;s.length===0?l=a:(s+=a,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:re()}i=o+2}return new Ve(r)}/**
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
 */const xs="remoteDocuments",Dl="owner",Ri="owner",rl="mutationQueues",RU="userId",Rn="mutations",TE="batchId",$s="userMutationsIndex",IE=["userId","batchId"];/**
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
 */function Uc(n,e){return[n,Lt(e)]}function RA(n,e,t){return[n,Lt(e),t]}const SU={},ao="documentMutations",Su="remoteDocumentsV14",CU=["prefixPath","collectionGroup","readTime","documentId"],Bc="documentKeyIndex",PU=["prefixPath","collectionGroup","documentId"],SA="collectionGroupIndex",kU=["collectionGroup","readTime","prefixPath","documentId"],sl="remoteDocumentGlobal",Hf="remoteDocumentGlobalKey",lo="targets",CA="queryTargetsIndex",DU=["canonicalId","targetId"],co="targetDocuments",NU=["targetId","path"],Mm="documentTargetsIndex",xU=["path","targetId"],Cu="targetGlobalKey",Gs="targetGlobal",il="collectionParents",OU=["collectionId","parent"],uo="clientMetadata",VU="clientId",Rh="bundles",MU="bundleId",Sh="namedQueries",LU="name",Lm="indexConfiguration",FU="indexId",Kf="collectionGroupIndex",UU="collectionGroup",Pu="indexState",BU=["indexId","uid"],PA="sequenceNumberIndex",$U=["uid","sequenceNumber"],ku="indexEntries",jU=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],kA="documentKeyIndex",qU=["indexId","uid","orderedDocumentKey"],Ch="documentOverlays",WU=["userId","collectionPath","documentId"],Gf="collectionPathOverlayIndex",HU=["userId","collectionPath","largestBatchId"],DA="collectionGroupOverlayIndex",KU=["userId","collectionGroup","largestBatchId"],Fm="globals",GU="name",NA=[rl,Rn,ao,xs,lo,Dl,Gs,co,uo,sl,il,Rh,Sh],zU=[...NA,Ch],xA=[rl,Rn,ao,Su,lo,Dl,Gs,co,uo,sl,il,Rh,Sh,Ch],OA=xA,Um=[...OA,Lm,Pu,ku],QU=Um,YU=[...Um,Fm];/**
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
 */class zf extends bA{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function dt(n,e){const t=me(n);return ss.M(t.ue,e)}/**
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
 */function wE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function pi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function VA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class tt{constructor(e,t){this.comparator=e,this.root=t||It.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,It.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,It.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tc(this.root,e,this.comparator,!0)}}class Tc{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class It{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??It.RED,this.left=s??It.EMPTY,this.right=i??It.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new It(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return It.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return It.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}It.EMPTY=null,It.RED=!0,It.BLACK=!1;It.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,t,r,s,i){return this}insert(e,t,r){return new It(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ue{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bE(this.data.getIterator())}getIteratorFrom(e){return new bE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ue(this.comparator);return t.data=e,t}}class bE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Si(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class En{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new En([])}unionWith(e){let t=new Ue(rt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new En(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return oo(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class MA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new MA("Invalid base64 string: "+i):i}}(e);return new lt(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new lt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const XU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(n){if(ie(!!n),typeof n=="string"){let e=0;const t=XU.exec(n);if(ie(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(n.seconds),nanos:Je(n.nanos)}}function Je(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Rr(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
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
 */const LA="server_timestamp",FA="__type__",UA="__previous_value__",BA="__local_write_time__";function Bm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[FA])===null||t===void 0?void 0:t.stringValue)===LA}function Ph(n){const e=n.mapValue.fields[UA];return Bm(e)?Ph(e):e}function ol(n){const e=Ar(n.mapValue.fields[BA].timestampValue);return new et(e.seconds,e.nanos)}/**
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
 */class JU{constructor(e,t,r,s,i,o,a,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}const al="(default)";class ri{constructor(e,t){this.projectId=e,this.database=t||al}static empty(){return new ri("","")}get isDefaultDatabase(){return this.database===al}isEqual(e){return e instanceof ri&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const $m="__type__",$A="__max__",Jr={mapValue:{fields:{__type__:{stringValue:$A}}}},jm="__vector__",ho="value",$c={nullValue:"NULL_VALUE"};function ls(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Bm(n)?4:jA(n)?9007199254740991:kh(n)?10:11:re()}function tr(n,e){if(n===e)return!0;const t=ls(n);if(t!==ls(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ol(n).isEqual(ol(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ar(s.timestampValue),a=Ar(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Rr(s.bytesValue).isEqual(Rr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Je(s.geoPointValue.latitude)===Je(i.geoPointValue.latitude)&&Je(s.geoPointValue.longitude)===Je(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Je(s.integerValue)===Je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Je(s.doubleValue),a=Je(i.doubleValue);return o===a?nl(o)===nl(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return oo(n.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(wE(o)!==wE(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!tr(o[l],a[l])))return!1;return!0}(n,e);default:return re()}}function ll(n,e){return(n.values||[]).find(t=>tr(t,e))!==void 0}function cs(n,e){if(n===e)return 0;const t=ls(n),r=ls(e);if(t!==r)return ge(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ge(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Je(i.integerValue||i.doubleValue),l=Je(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return AE(n.timestampValue,e.timestampValue);case 4:return AE(ol(n),ol(e));case 5:return ge(n.stringValue,e.stringValue);case 6:return function(i,o){const a=Rr(i),l=Rr(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=ge(a[u],l[u]);if(h!==0)return h}return ge(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ge(Je(i.latitude),Je(o.latitude));return a!==0?a:ge(Je(i.longitude),Je(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return RE(n.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const d=i.fields||{},p=o.fields||{},g=(a=d[ho])===null||a===void 0?void 0:a.arrayValue,v=(l=p[ho])===null||l===void 0?void 0:l.arrayValue,T=ge(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0);return T!==0?T:RE(g,v)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Jr.mapValue&&o===Jr.mapValue)return 0;if(i===Jr.mapValue)return 1;if(o===Jr.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=ge(l[d],h[d]);if(p!==0)return p;const g=cs(a[l[d]],u[h[d]]);if(g!==0)return g}return ge(l.length,h.length)}(n.mapValue,e.mapValue);default:throw re()}}function AE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ge(n,e);const t=Ar(n),r=Ar(e),s=ge(t.seconds,r.seconds);return s!==0?s:ge(t.nanos,r.nanos)}function RE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=cs(t[s],r[s]);if(i)return i}return ge(t.length,r.length)}function fo(n){return Qf(n)}function Qf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ar(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Rr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return te.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Qf(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Qf(t.fields[o])}`;return s+"}"}(n.mapValue):re()}function jc(n){switch(ls(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ph(n);return e?16+jc(e):16;case 5:return 2*n.stringValue.length;case 6:return Rr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+jc(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return pi(r.fields,(i,o)=>{s+=i.length+jc(o)}),s}(n.mapValue);default:throw re()}}function cl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Yf(n){return!!n&&"integerValue"in n}function ul(n){return!!n&&"arrayValue"in n}function SE(n){return!!n&&"nullValue"in n}function CE(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function qc(n){return!!n&&"mapValue"in n}function kh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[$m])===null||t===void 0?void 0:t.stringValue)===jm}function xa(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return pi(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=xa(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xa(n.arrayValue.values[t]);return e}return Object.assign({},n)}function jA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===$A}const qA={mapValue:{fields:{[$m]:{stringValue:jm},[ho]:{arrayValue:{}}}}};function ZU(n){return"nullValue"in n?$c:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?cl(ri.empty(),te.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?kh(n)?qA:{mapValue:{}}:re()}function eB(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?cl(ri.empty(),te.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?qA:"mapValue"in n?kh(n)?{mapValue:{}}:Jr:re()}function PE(n,e){const t=cs(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function kE(n,e){const t=cs(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class Xt{constructor(e){this.value=e}static empty(){return new Xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!qc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xa(t)}setAll(e){let t=rt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=xa(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());qc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];qc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){pi(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Xt(xa(this.value))}}function WA(n){const e=[];return pi(n.fields,(t,r)=>{const s=new rt([t]);if(qc(r)){const i=WA(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new En(e)}/**
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
 */class ot{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ot(e,0,ae.min(),ae.min(),ae.min(),Xt.empty(),0)}static newFoundDocument(e,t,r,s){return new ot(e,1,t,ae.min(),r,s,0)}static newNoDocument(e,t){return new ot(e,2,t,ae.min(),ae.min(),Xt.empty(),0)}static newUnknownDocument(e,t){return new ot(e,3,t,ae.min(),ae.min(),Xt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class po{constructor(e,t){this.position=e,this.inclusive=t}}function DE(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),t.key):r=cs(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function NE(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!tr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class hl{constructor(e,t="asc"){this.field=e,this.dir=t}}function tB(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class HA{}class be extends HA{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new nB(e,t,r):t==="array-contains"?new iB(e,r):t==="in"?new XA(e,r):t==="not-in"?new oB(e,r):t==="array-contains-any"?new aB(e,r):new be(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new rB(e,r):new sB(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(cs(t,this.value)):t!==null&&ls(this.value)===ls(t)&&this.matchesComparison(cs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fe extends HA{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Fe(e,t)}matches(e){return mo(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function mo(n){return n.op==="and"}function Xf(n){return n.op==="or"}function qm(n){return KA(n)&&mo(n)}function KA(n){for(const e of n.filters)if(e instanceof Fe)return!1;return!0}function Jf(n){if(n instanceof be)return n.field.canonicalString()+n.op.toString()+fo(n.value);if(qm(n))return n.filters.map(e=>Jf(e)).join(",");{const e=n.filters.map(t=>Jf(t)).join(",");return`${n.op}(${e})`}}function GA(n,e){return n instanceof be?function(r,s){return s instanceof be&&r.op===s.op&&r.field.isEqual(s.field)&&tr(r.value,s.value)}(n,e):n instanceof Fe?function(r,s){return s instanceof Fe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&GA(o,s.filters[a]),!0):!1}(n,e):void re()}function zA(n,e){const t=n.filters.concat(e);return Fe.create(t,n.op)}function QA(n){return n instanceof be?function(t){return`${t.field.canonicalString()} ${t.op} ${fo(t.value)}`}(n):n instanceof Fe?function(t){return t.op.toString()+" {"+t.getFilters().map(QA).join(" ,")+"}"}(n):"Filter"}class nB extends be{constructor(e,t,r){super(e,t,r),this.key=te.fromName(r.referenceValue)}matches(e){const t=te.comparator(e.key,this.key);return this.matchesComparison(t)}}class rB extends be{constructor(e,t){super(e,"in",t),this.keys=YA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class sB extends be{constructor(e,t){super(e,"not-in",t),this.keys=YA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function YA(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>te.fromName(r.referenceValue))}class iB extends be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ul(t)&&ll(t.arrayValue,this.value)}}class XA extends be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ll(this.value.arrayValue,t)}}class oB extends be{constructor(e,t){super(e,"not-in",t)}matches(e){if(ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ll(this.value.arrayValue,t)}}class aB extends be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ul(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ll(this.value.arrayValue,r))}}/**
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
 */class lB{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.le=null}}function Zf(n,e=null,t=[],r=[],s=null,i=null,o=null){return new lB(n,e,t,r,s,i,o)}function si(n){const e=me(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Jf(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ah(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>fo(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>fo(r)).join(",")),e.le=t}return e.le}function Nl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!tB(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!GA(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!NE(n.startAt,e.startAt)&&NE(n.endAt,e.endAt)}function Du(n){return te.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Nu(n,e){return n.filters.filter(t=>t instanceof be&&t.field.isEqual(e))}function xE(n,e,t){let r=$c,s=!0;for(const i of Nu(n,e)){let o=$c,a=!0;switch(i.op){case"<":case"<=":o=ZU(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=$c}PE({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];PE({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function OE(n,e,t){let r=Jr,s=!0;for(const i of Nu(n,e)){let o=Jr,a=!0;switch(i.op){case">=":case">":o=eB(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Jr}kE({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];kE({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class ko{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function cB(n,e,t,r,s,i,o,a){return new ko(n,e,t,r,s,i,o,a)}function xl(n){return new ko(n)}function VE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function JA(n){return n.collectionGroup!==null}function Oa(n){const e=me(n);if(e.he===null){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ue(rt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new hl(i,r))}),t.has(rt.keyField().canonicalString())||e.he.push(new hl(rt.keyField(),r))}return e.he}function In(n){const e=me(n);return e.Pe||(e.Pe=uB(e,Oa(n))),e.Pe}function uB(n,e){if(n.limitType==="F")return Zf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new hl(s.field,i)});const t=n.endAt?new po(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new po(n.startAt.position,n.startAt.inclusive):null;return Zf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ep(n,e){const t=n.filters.concat([e]);return new ko(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function xu(n,e,t){return new ko(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Dh(n,e){return Nl(In(n),In(e))&&n.limitType===e.limitType}function ZA(n){return`${si(In(n))}|lt:${n.limitType}`}function Vi(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>QA(s)).join(", ")}]`),Ah(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>fo(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>fo(s)).join(",")),`Target(${r})`}(In(n))}; limitType=${n.limitType})`}function Ol(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Oa(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=DE(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Oa(r),s)||r.endAt&&!function(o,a,l){const u=DE(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Oa(r),s))}(n,e)}function hB(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function eR(n){return(e,t)=>{let r=!1;for(const s of Oa(n)){const i=dB(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function dB(n,e,t){const r=n.field.isKeyField()?te.comparator(e.key,t.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?cs(l,u):re()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
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
 */class Pr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){pi(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return VA(this.inner)}size(){return this.innerSize}}/**
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
 */const fB=new tt(te.comparator);function cn(){return fB}const tR=new tt(te.comparator);function da(...n){let e=tR;for(const t of n)e=e.insert(t.key,t);return e}function nR(n){let e=tR;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function zn(){return Va()}function rR(){return Va()}function Va(){return new Pr(n=>n.toString(),(n,e)=>n.isEqual(e))}const pB=new tt(te.comparator),mB=new Ue(te.comparator);function Ee(...n){let e=mB;for(const t of n)e=e.add(t);return e}const gB=new Ue(ge);function _B(){return gB}/**
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
 */function Wm(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nl(e)?"-0":e}}function sR(n){return{integerValue:""+n}}function yB(n,e){return bU(e)?sR(e):Wm(n,e)}/**
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
 */class Nh{constructor(){this._=void 0}}function vB(n,e,t){return n instanceof dl?function(s,i){const o={fields:{[FA]:{stringValue:LA},[BA]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Bm(i)&&(i=Ph(i)),i&&(o.fields[UA]=i),{mapValue:o}}(t,e):n instanceof go?oR(n,e):n instanceof _o?aR(n,e):function(s,i){const o=iR(s,i),a=ME(o)+ME(s.Ie);return Yf(o)&&Yf(s.Ie)?sR(a):Wm(s.serializer,a)}(n,e)}function EB(n,e,t){return n instanceof go?oR(n,e):n instanceof _o?aR(n,e):t}function iR(n,e){return n instanceof fl?function(r){return Yf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class dl extends Nh{}class go extends Nh{constructor(e){super(),this.elements=e}}function oR(n,e){const t=lR(e);for(const r of n.elements)t.some(s=>tr(s,r))||t.push(r);return{arrayValue:{values:t}}}class _o extends Nh{constructor(e){super(),this.elements=e}}function aR(n,e){let t=lR(e);for(const r of n.elements)t=t.filter(s=>!tr(s,r));return{arrayValue:{values:t}}}class fl extends Nh{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function ME(n){return Je(n.integerValue||n.doubleValue)}function lR(n){return ul(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class TB{constructor(e,t){this.field=e,this.transform=t}}function IB(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof go&&s instanceof go||r instanceof _o&&s instanceof _o?oo(r.elements,s.elements,tr):r instanceof fl&&s instanceof fl?tr(r.Ie,s.Ie):r instanceof dl&&s instanceof dl}(n.transform,e.transform)}class wB{constructor(e,t){this.version=e,this.transformResults=t}}class un{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class xh{}function cR(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Hm(n.key,un.none()):new Do(n.key,n.data,un.none());{const t=n.data,r=Xt.empty();let s=new Ue(rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ys(n.key,r,new En(s.toArray()),un.none())}}function bB(n,e,t){n instanceof Do?function(s,i,o){const a=s.value.clone(),l=FE(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof ys?function(s,i,o){if(!Wc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=FE(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(uR(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ma(n,e,t,r){return n instanceof Do?function(i,o,a,l){if(!Wc(i.precondition,o))return a;const u=i.value.clone(),h=UE(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof ys?function(i,o,a,l){if(!Wc(i.precondition,o))return a;const u=UE(i.fieldTransforms,l,o),h=o.data;return h.setAll(uR(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(n,e,t,r):function(i,o,a){return Wc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function AB(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=iR(r.transform,s||null);i!=null&&(t===null&&(t=Xt.empty()),t.set(r.field,i))}return t||null}function LE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&oo(r,s,(i,o)=>IB(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Do extends xh{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ys extends xh{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function uR(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function FE(n,e,t){const r=new Map;ie(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,EB(o,a,t[s]))}return r}function UE(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,vB(i,o,e))}return r}class Hm extends xh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hR extends xh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Km{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&bB(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ma(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ma(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=rR();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const l=cR(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ee())}isEqual(e){return this.batchId===e.batchId&&oo(this.mutations,e.mutations,(t,r)=>LE(t,r))&&oo(this.baseMutations,e.baseMutations,(t,r)=>LE(t,r))}}class Gm{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ie(e.mutations.length===r.length);let s=function(){return pB}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Gm(e,t,r,s)}}/**
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
 */class zm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class RB{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var at,Se;function SB(n){switch(n){case F.OK:return re();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return re()}}function dR(n){if(n===void 0)return Wt("GRPC error has no .code"),F.UNKNOWN;switch(n){case at.OK:return F.OK;case at.CANCELLED:return F.CANCELLED;case at.UNKNOWN:return F.UNKNOWN;case at.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case at.INTERNAL:return F.INTERNAL;case at.UNAVAILABLE:return F.UNAVAILABLE;case at.UNAUTHENTICATED:return F.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case at.NOT_FOUND:return F.NOT_FOUND;case at.ALREADY_EXISTS:return F.ALREADY_EXISTS;case at.PERMISSION_DENIED:return F.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case at.ABORTED:return F.ABORTED;case at.OUT_OF_RANGE:return F.OUT_OF_RANGE;case at.UNIMPLEMENTED:return F.UNIMPLEMENTED;case at.DATA_LOSS:return F.DATA_LOSS;default:return re()}}(Se=at||(at={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function CB(){return new TextEncoder}/**
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
 */const PB=new rs([4294967295,4294967295],0);function BE(n){const e=CB().encode(n),t=new fA;return t.update(e),new Uint8Array(t.digest())}function $E(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new rs([t,r],0),new rs([s,i],0)]}class Qm{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new fa(`Invalid padding: ${t}`);if(r<0)throw new fa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fa(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new fa(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=rs.fromNumber(this.Ee)}Ae(e,t,r){let s=e.add(t.multiply(rs.fromNumber(r)));return s.compare(PB)===1&&(s=new rs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=BE(e),[r,s]=$E(t);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Qm(i,s,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const t=BE(e),[r,s]=$E(t);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class fa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Oh{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Vl.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Oh(ae.min(),s,new tt(ge),cn(),Ee())}}class Vl{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Vl(r,t,Ee(),Ee(),Ee())}}/**
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
 */class Hc{constructor(e,t,r,s){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=s}}class fR{constructor(e,t){this.targetId=e,this.ge=t}}class pR{constructor(e,t,r=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class jE{constructor(){this.pe=0,this.ye=qE(),this.we=lt.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=Ee(),t=Ee(),r=Ee();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:re()}}),new Vl(this.we,this.be,e,t,r)}Me(){this.Se=!1,this.ye=qE()}xe(e,t){this.Se=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ie(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class kB{constructor(e){this.ke=e,this.qe=new Map,this.Qe=cn(),this.$e=Ic(),this.Ke=Ic(),this.Ue=new tt(ge)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:re()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,s)=>{this.Je(s)&&t(s)})}Ze(e){const t=e.targetId,r=e.ge.count,s=this.Xe(t);if(s){const i=s.target;if(Du(i))if(r===0){const o=new te(i.path);this.ze(t,o,ot.newNoDocument(o,ae.min()))}else ie(r===1);else{const o=this.et(t);if(o!==r){const a=this.tt(e),l=a?this.nt(a,e,o):1;if(l!==0){this.Ye(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,u)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=Rr(r).toUint8Array()}catch(l){if(l instanceof MA)return io("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Qm(o,s,i)}catch(l){return io(l instanceof fa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ee===0?null:a}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.ke.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.ze(t,i,null),s++)}),s}ot(e){const t=new Map;this.qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&Du(a.target)){const l=new te(a.target.path);this._t(l).has(o)||this.ut(o,l)||this.ze(o,l,ot.newNoDocument(l,e))}i.ve&&(t.set(o,i.Fe()),i.Me())}});let r=Ee();this.Ke.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new Oh(e,t,this.Ue,this.Qe,r);return this.Qe=cn(),this.$e=Ic(),this.Ke=Ic(),this.Ue=new tt(ge),s}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,t)?s.xe(t,1):s.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new jE,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new Ue(ge),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Ue(ge),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||K("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new jE),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Ic(){return new tt(te.comparator)}function qE(){return new tt(te.comparator)}const DB={asc:"ASCENDING",desc:"DESCENDING"},NB={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xB={and:"AND",or:"OR"};class OB{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function tp(n,e){return n.useProto3Json||Ah(e)?e:{value:e}}function yo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mR(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function VB(n,e){return yo(n,e.toTimestamp())}function Kt(n){return ie(!!n),ae.fromTimestamp(function(t){const r=Ar(t);return new et(r.seconds,r.nanos)}(n))}function Ym(n,e){return np(n,e).canonicalString()}function np(n,e){const t=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function gR(n){const e=Ve.fromString(n);return ie(AR(e)),e}function Ou(n,e){return Ym(n.databaseId,e.path)}function zs(n,e){const t=gR(e);if(t.get(1)!==n.databaseId.projectId)throw new Y(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Y(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new te(vR(t))}function _R(n,e){return Ym(n.databaseId,e)}function yR(n){const e=gR(n);return e.length===4?Ve.emptyPath():vR(e)}function rp(n){return new Ve(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vR(n){return ie(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function WE(n,e,t){return{name:Ou(n,e),fields:t.value.mapValue.fields}}function MB(n,e,t){const r=zs(n,e.name),s=Kt(e.updateTime),i=e.createTime?Kt(e.createTime):ae.min(),o=new Xt({mapValue:{fields:e.fields}}),a=ot.newFoundDocument(r,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function LB(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(ie(h===void 0||typeof h=="string"),lt.fromBase64String(h||"")):(ie(h===void 0||h instanceof Buffer||h instanceof Uint8Array),lt.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?F.UNKNOWN:dR(u.code);return new Y(h,u.message||"")}(o);t=new pR(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=zs(n,r.document.name),i=Kt(r.document.updateTime),o=r.document.createTime?Kt(r.document.createTime):ae.min(),a=new Xt({mapValue:{fields:r.document.fields}}),l=ot.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];t=new Hc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=zs(n,r.document),i=r.readTime?Kt(r.readTime):ae.min(),o=ot.newNoDocument(s,i),a=r.removedTargetIds||[];t=new Hc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=zs(n,r.document),i=r.removedTargetIds||[];t=new Hc([],i,s,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new RB(s,i),a=r.targetId;t=new fR(a,o)}}return t}function Vu(n,e){let t;if(e instanceof Do)t={update:WE(n,e.key,e.value)};else if(e instanceof Hm)t={delete:Ou(n,e.key)};else if(e instanceof ys)t={update:WE(n,e.key,e.data),updateMask:qB(e.fieldMask)};else{if(!(e instanceof hR))return re();t={verify:Ou(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof dl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof go)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof fl)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw re()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:VB(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(n,e.precondition)),t}function sp(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?un.updateTime(Kt(i.updateTime)):i.exists!==void 0?un.exists(i.exists):un.none()}(e.currentDocument):un.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,a){let l=null;if("setToServerValue"in a)ie(a.setToServerValue==="REQUEST_TIME"),l=new dl;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];l=new go(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];l=new _o(h)}else"increment"in a?l=new fl(o,a.increment):re();const u=rt.fromServerFormat(a.fieldPath);return new TB(u,l)}(n,s)):[];if(e.update){e.update.name;const s=zs(n,e.update.name),i=new Xt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new En(u.map(h=>rt.fromServerFormat(h)))}(e.updateMask);return new ys(s,i,o,t,r)}return new Do(s,i,t,r)}if(e.delete){const s=zs(n,e.delete);return new Hm(s,t)}if(e.verify){const s=zs(n,e.verify);return new hR(s,t)}return re()}function FB(n,e){return n&&n.length>0?(ie(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?Kt(s.updateTime):Kt(i);return o.isEqual(ae.min())&&(o=Kt(i)),new wB(o,s.transformResults||[])}(t,e))):[]}function ER(n,e){return{documents:[_R(n,e.path)]}}function TR(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=_R(n,s);const i=function(u){if(u.length!==0)return bR(Fe.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Mi(p.field),direction:BB(p.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=tp(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:t,parent:s}}function IR(n){let e=yR(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ie(r===1);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(d){const p=wR(d);return p instanceof Fe&&qm(p)?p.getFilters():[p]}(t.where));let o=[];t.orderBy&&(o=function(d){return d.map(p=>function(v){return new hl(Li(v.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(p))}(t.orderBy));let a=null;t.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Ah(p)?null:p}(t.limit));let l=null;t.startAt&&(l=function(d){const p=!!d.before,g=d.values||[];return new po(g,p)}(t.startAt));let u=null;return t.endAt&&(u=function(d){const p=!d.before,g=d.values||[];return new po(g,p)}(t.endAt)),cB(e,s,o,i,a,"F",l,u)}function UB(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wR(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Li(t.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Li(t.unaryFilter.field);return be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Li(t.unaryFilter.field);return be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Li(t.unaryFilter.field);return be.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(n):n.fieldFilter!==void 0?function(t){return be.create(Li(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Fe.create(t.compositeFilter.filters.map(r=>wR(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re()}}(t.compositeFilter.op))}(n):re()}function BB(n){return DB[n]}function $B(n){return NB[n]}function jB(n){return xB[n]}function Mi(n){return{fieldPath:n.canonicalString()}}function Li(n){return rt.fromServerFormat(n.fieldPath)}function bR(n){return n instanceof be?function(t){if(t.op==="=="){if(CE(t.value))return{unaryFilter:{field:Mi(t.field),op:"IS_NAN"}};if(SE(t.value))return{unaryFilter:{field:Mi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(CE(t.value))return{unaryFilter:{field:Mi(t.field),op:"IS_NOT_NAN"}};if(SE(t.value))return{unaryFilter:{field:Mi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mi(t.field),op:$B(t.op),value:t.value}}}(n):n instanceof Fe?function(t){const r=t.getFilters().map(s=>bR(s));return r.length===1?r[0]:{compositeFilter:{op:jB(t.op),filters:r}}}(n):re()}function qB(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function AR(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class vr{constructor(e,t,r,s,i=ae.min(),o=ae.min(),a=lt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class RR{constructor(e){this.Tt=e}}function WB(n,e){let t;if(e.document)t=MB(n.Tt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=te.fromSegments(e.noDocument.path),s=oi(e.noDocument.readTime);t=ot.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return re();{const r=te.fromSegments(e.unknownDocument.path),s=oi(e.unknownDocument.version);t=ot.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new et(s[0],s[1]);return ae.fromTimestamp(i)}(e.readTime)),t}function HE(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Mu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:Ou(i,o.key),fields:o.data.value.mapValue.fields,updateTime:yo(i,o.version.toTimestamp()),createTime:yo(i,o.createTime.toTimestamp())}}(n.Tt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:ii(e.version)};else{if(!e.isUnknownDocument())return re();r.unknownDocument={path:t.path.toArray(),version:ii(e.version)}}return r}function Mu(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function ii(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function oi(n){const e=new et(n.seconds,n.nanoseconds);return ae.fromTimestamp(e)}function Ms(n,e){const t=(e.baseMutations||[]).map(i=>sp(n.Tt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>sp(n.Tt,i)),s=et.fromMillis(e.localWriteTimeMs);return new Km(e.batchId,s,t,r)}function pa(n){const e=oi(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?oi(n.lastLimboFreeSnapshotVersion):ae.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return ie(i.documents.length===1),In(xl(yR(i.documents[0])))}(n.query):function(i){return In(IR(i))}(n.query),new vr(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,lt.fromBase64String(n.resumeToken))}function SR(n,e){const t=ii(e.snapshotVersion),r=ii(e.lastLimboFreeSnapshotVersion);let s;s=Du(e.target)?ER(n.Tt,e.target):TR(n.Tt,e.target).ht;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:si(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function CR(n){const e=IR({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?xu(e,e.limit,"L"):e}function $d(n,e){return new zm(e.largestBatchId,sp(n.Tt,e.overlayMutation))}function KE(n,e){const t=e.path.lastSegment();return[n,Lt(e.path.popLast()),t]}function GE(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:ii(r.readTime),documentKey:Lt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class HB{getBundleMetadata(e,t){return zE(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:oi(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return zE(e).put(function(s){return{bundleId:s.id,createTime:ii(Kt(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return QE(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:CR(i.bundledQuery),readTime:oi(i.readTime)}}(r)})}saveNamedQuery(e,t){return QE(e).put(function(s){return{name:s.name,readTime:ii(Kt(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function zE(n){return dt(n,Rh)}function QE(n){return dt(n,Sh)}/**
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
 */class Vh{constructor(e,t){this.serializer=e,this.userId=t}static It(e,t){const r=t.uid||"";return new Vh(e,r)}getOverlay(e,t){return ea(e).get(KE(this.userId,t)).next(r=>r?$d(this.serializer,r):null)}getOverlays(e,t){const r=zn();return D.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const a=new zm(t,o);s.push(this.Et(e,a))}),D.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(Lt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(ea(e).J(Gf,a))}),D.waitFor(i)}getOverlaysForCollection(e,t,r){const s=zn(),i=Lt(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ea(e).G(Gf,o).next(a=>{for(const l of a){const u=$d(this.serializer,l);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=zn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ea(e).Z({index:DA,range:a},(l,u,h)=>{const d=$d(this.serializer,u);i.size()<s||d.largestBatchId===o?(i.set(d.getKey(),d),o=d.largestBatchId):h.done()}).next(()=>i)}Et(e,t){return ea(e).put(function(s,i,o){const[a,l,u]=KE(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Vu(s.Tt,o.mutation)}}(this.serializer,this.userId,t))}}function ea(n){return dt(n,Ch)}/**
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
 */class KB{dt(e){return dt(e,Fm)}getSessionToken(e){return this.dt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?lt.fromUint8Array(r):lt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Ls{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(e.booleanValue?1:0);else if("integerValue"in e)this.ft(t,15),t.gt(Je(e.integerValue));else if("doubleValue"in e){const r=Je(e.doubleValue);isNaN(r)?this.ft(t,13):(this.ft(t,15),nl(r)?t.gt(0):t.gt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ft(t,20),typeof r=="string"&&(r=Ar(r)),t.yt(`${r.seconds||""}`),t.gt(r.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.bt(t);else if("bytesValue"in e)this.ft(t,30),t.St(Rr(e.bytesValue)),this.bt(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ft(t,45),t.gt(r.latitude||0),t.gt(r.longitude||0)}else"mapValue"in e?jA(e)?this.ft(t,Number.MAX_SAFE_INTEGER):kh(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.bt(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.bt(t)):re()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){const r=e.fields||{};this.ft(t,55);for(const s of Object.keys(r))this.wt(s,t),this.Rt(r[s],t)}vt(e,t){var r,s;const i=e.fields||{};this.ft(t,53);const o=ho,a=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.ft(t,15),t.gt(Je(a)),this.wt(o,t),this.Rt(i[o],t)}Ft(e,t){const r=e.values||[];this.ft(t,50);for(const s of r)this.Rt(s,t)}Dt(e,t){this.ft(t,37),te.fromName(e).path.forEach(r=>{this.ft(t,60),this.Mt(r,t)})}ft(e,t){e.gt(t)}bt(e){e.gt(2)}}Ls.xt=new Ls;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=255;function GB(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function YE(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=GB(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class zB{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Nt(r.value),r=t.next();this.Bt()}Lt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.kt(r.value),r=t.next();this.qt()}Qt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Nt(r);else if(r<2048)this.Nt(960|r>>>6),this.Nt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Nt(480|r>>>12),this.Nt(128|63&r>>>6),this.Nt(128|63&r);else{const s=t.codePointAt(0);this.Nt(240|s>>>18),this.Nt(128|63&s>>>12),this.Nt(128|63&s>>>6),this.Nt(128|63&s)}}this.Bt()}$t(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.kt(r);else if(r<2048)this.kt(960|r>>>6),this.kt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.kt(480|r>>>12),this.kt(128|63&r>>>6),this.kt(128|63&r);else{const s=t.codePointAt(0);this.kt(240|s>>>18),this.kt(128|63&s>>>12),this.kt(128|63&s>>>6),this.kt(128|63&s)}}this.qt()}Kt(e){const t=this.Ut(e),r=YE(t);this.Wt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Gt(e){const t=this.Ut(e),r=YE(t);this.Wt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}zt(){this.jt(Ci),this.jt(255)}Ht(){this.Jt(Ci),this.Jt(255)}reset(){this.position=0}seed(e){this.Wt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Yt(){return this.buffer.slice(0,this.position)}Ut(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Nt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===Ci?(this.jt(Ci),this.jt(0)):this.jt(t)}kt(e){const t=255&e;t===0?(this.Jt(0),this.Jt(255)):t===Ci?(this.Jt(Ci),this.Jt(0)):this.Jt(e)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(e){this.Wt(1),this.buffer[this.position++]=e}Jt(e){this.Wt(1),this.buffer[this.position++]=~e}Wt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class QB{constructor(e){this.Zt=e}St(e){this.Zt.Ot(e)}yt(e){this.Zt.Qt(e)}gt(e){this.Zt.Kt(e)}Vt(){this.Zt.zt()}}class YB{constructor(e){this.Zt=e}St(e){this.Zt.Lt(e)}yt(e){this.Zt.$t(e)}gt(e){this.Zt.Gt(e)}Vt(){this.Zt.Ht()}}class ta{constructor(){this.Zt=new zB,this.Xt=new QB(this.Zt),this.en=new YB(this.Zt)}seed(e){this.Zt.seed(e)}tn(e){return e===0?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
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
 */class Fs{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}nn(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Fs(this.indexId,this.documentKey,this.arrayValue,r)}}function Fr(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=XE(n.arrayValue,e.arrayValue),t!==0?t:(t=XE(n.directionalValue,e.directionalValue),t!==0?t:te.comparator(n.documentKey,e.documentKey)))}function XE(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class JE{constructor(e){this.rn=new Ue((t,r)=>rt.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.sn=e.orderBy,this._n=[];for(const t of e.filters){const r=t;r.isInequality()?this.rn=this.rn.add(r):this._n.push(r)}}get an(){return this.rn.size>1}un(e){if(ie(e.collectionGroup===this.collectionId),this.an)return!1;const t=Wf(e);if(t!==void 0&&!this.cn(t))return!1;const r=Ns(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.cn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.rn.size>0){const a=this.rn.getIterator().getNext();if(!s.has(a.field.canonicalString())){const l=r[i];if(!this.ln(a,l)||!this.hn(this.sn[o++],l))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.sn.length||!this.hn(this.sn[o++],a))return!1}return!0}Pn(){if(this.an)return null;let e=new Ue(rt.comparator);const t=[];for(const r of this._n)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Fc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Fc(r.field,0))}for(const r of this.sn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Fc(r.field,r.dir==="asc"?0:1)));return new Au(Au.UNKNOWN_ID,this.collectionId,t,tl.empty())}cn(e){for(const t of this._n)if(this.ln(t,e))return!0;return!1}ln(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}hn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function PR(n){var e,t;if(ie(n instanceof be||n instanceof Fe),n instanceof be){if(n instanceof XA){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>be.create(n.field,"==",i)))||[];return Fe.create(s,"or")}return n}const r=n.filters.map(s=>PR(s));return Fe.create(r,n.op)}function XB(n){if(n.getFilters().length===0)return[];const e=ap(PR(n));return ie(kR(e)),ip(e)||op(e)?[e]:e.getFilters()}function ip(n){return n instanceof be}function op(n){return n instanceof Fe&&qm(n)}function kR(n){return ip(n)||op(n)||function(t){if(t instanceof Fe&&Xf(t)){for(const r of t.getFilters())if(!ip(r)&&!op(r))return!1;return!0}return!1}(n)}function ap(n){if(ie(n instanceof be||n instanceof Fe),n instanceof be)return n;if(n.filters.length===1)return ap(n.filters[0]);const e=n.filters.map(r=>ap(r));let t=Fe.create(e,n.op);return t=Lu(t),kR(t)?t:(ie(t instanceof Fe),ie(mo(t)),ie(t.filters.length>1),t.filters.reduce((r,s)=>Xm(r,s)))}function Xm(n,e){let t;return ie(n instanceof be||n instanceof Fe),ie(e instanceof be||e instanceof Fe),t=n instanceof be?e instanceof be?function(s,i){return Fe.create([s,i],"and")}(n,e):ZE(n,e):e instanceof be?ZE(e,n):function(s,i){if(ie(s.filters.length>0&&i.filters.length>0),mo(s)&&mo(i))return zA(s,i.getFilters());const o=Xf(s)?s:i,a=Xf(s)?i:s,l=o.filters.map(u=>Xm(u,a));return Fe.create(l,"or")}(n,e),Lu(t)}function ZE(n,e){if(mo(e))return zA(e,n.getFilters());{const t=e.filters.map(r=>Xm(n,r));return Fe.create(t,"or")}}function Lu(n){if(ie(n instanceof be||n instanceof Fe),n instanceof be)return n;const e=n.getFilters();if(e.length===1)return Lu(e[0]);if(KA(n))return n;const t=e.map(s=>Lu(s)),r=[];return t.forEach(s=>{s instanceof be?r.push(s):s instanceof Fe&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:Fe.create(r,n.op)}/**
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
 */class JB{constructor(){this.Tn=new Jm}addToCollectionParentIndex(e,t){return this.Tn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(pn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(pn.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Jm{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ue(Ve.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ue(Ve.comparator)).toArray()}}/**
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
 */const eT="IndexedDbIndexManager",wc=new Uint8Array(0);class ZB{constructor(e,t){this.databaseId=t,this.In=new Jm,this.En=new Pr(r=>si(r),(r,s)=>Nl(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.In.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.In.add(t)});const i={collectionId:r,parent:Lt(s)};return tT(e).put(i)}return D.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[TA(t),""],!1,!0);return tT(e).G(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(Gn(o.parent))}return r})}addFieldIndex(e,t){const r=na(e),s=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=ki(e);return i.next(a=>{o.put(GE(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=na(e),s=ki(e),i=Pi(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=na(e),r=Pi(e),s=ki(e);return t.J().next(()=>r.J()).next(()=>s.J())}createTargetIndexes(e,t){return D.forEach(this.dn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new JE(r).Pn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=Pi(e);let s=!0;const i=new Map;return D.forEach(this.dn(t),o=>this.An(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=Ee();const a=[];return D.forEach(i,(l,u)=>{K(eT,`Using index ${function(x){return`id=${x.indexId}|cg=${x.collectionGroup}|f=${x.fields.map(M=>`${M.fieldPath}:${M.kind}`).join(",")}`}(l)} to execute ${si(t)}`);const h=function(x,M){const W=Wf(M);if(W===void 0)return null;for(const j of Nu(x,W.fieldPath))switch(j.op){case"array-contains-any":return j.value.arrayValue.values||[];case"array-contains":return[j.value]}return null}(u,l),d=function(x,M){const W=new Map;for(const j of Ns(M))for(const b of Nu(x,j.fieldPath))switch(b.op){case"==":case"in":W.set(j.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return W.set(j.fieldPath.canonicalString(),b.value),Array.from(W.values())}return null}(u,l),p=function(x,M){const W=[];let j=!0;for(const b of Ns(M)){const _=b.kind===0?xE(x,b.fieldPath,x.startAt):OE(x,b.fieldPath,x.startAt);W.push(_.value),j&&(j=_.inclusive)}return new po(W,j)}(u,l),g=function(x,M){const W=[];let j=!0;for(const b of Ns(M)){const _=b.kind===0?OE(x,b.fieldPath,x.endAt):xE(x,b.fieldPath,x.endAt);W.push(_.value),j&&(j=_.inclusive)}return new po(W,j)}(u,l),v=this.Rn(l,u,p),T=this.Rn(l,u,g),P=this.Vn(l,u,d),O=this.mn(l.indexId,h,v,p.inclusive,T,g.inclusive,P);return D.forEach(O,V=>r.H(V,t.limit).next(x=>{x.forEach(M=>{const W=te.fromSegments(M.documentKey);o.has(W)||(o=o.add(W),a.push(W))})}))}).next(()=>a)}return D.resolve(null)})}dn(e){let t=this.En.get(e);return t||(e.filters.length===0?t=[e]:t=XB(Fe.create(e.filters,"and")).map(r=>Zf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.En.set(e,t),t)}mn(e,t,r,s,i,o,a){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),u=l/(t!=null?t.length:1),h=[];for(let d=0;d<l;++d){const p=t?this.fn(t[d/u]):wc,g=this.gn(e,p,r[d%u],s),v=this.pn(e,p,i[d%u],o),T=a.map(P=>this.gn(e,p,P,!0));h.push(...this.createRange(g,v,T))}return h}gn(e,t,r,s){const i=new Fs(e,te.empty(),t,r);return s?i:i.nn()}pn(e,t,r,s){const i=new Fs(e,te.empty(),t,r);return s?i.nn():i}An(e,t){const r=new JE(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.un(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const s=this.dn(t);return D.forEach(s,i=>this.An(e,i).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new Ue(rt.comparator),h=!1;for(const d of l.filters)for(const p of d.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?h=!0:u=u.add(p.field));for(const d of l.orderBy)d.field.isKeyField()||(u=u.add(d.field));return u.size+(h?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}yn(e,t){const r=new ta;for(const s of Ns(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.tn(s.kind);Ls.xt.At(i,o)}return r.Yt()}fn(e){const t=new ta;return Ls.xt.At(e,t.tn(0)),t.Yt()}wn(e,t){const r=new ta;return Ls.xt.At(cl(this.databaseId,t),r.tn(function(i){const o=Ns(i);return o.length===0?0:o[o.length-1].kind}(e))),r.Yt()}Vn(e,t,r){if(r===null)return[];let s=[];s.push(new ta);let i=0;for(const o of Ns(e)){const a=r[i++];for(const l of s)if(this.bn(t,o.fieldPath)&&ul(a))s=this.Sn(s,o,a);else{const u=l.tn(o.kind);Ls.xt.At(a,u)}}return this.Dn(s)}Rn(e,t,r){return this.Vn(e,t,r.position)}Dn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Yt();return t}Sn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const l=new ta;l.seed(a.Yt()),Ls.xt.At(o,l.tn(t.kind)),i.push(l)}return i}bn(e,t){return!!e.filters.find(r=>r instanceof be&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=na(e),s=ki(e);return(t?r.G(Kf,IDBKeyRange.bound(t,t)):r.G()).next(i=>{const o=[];return D.forEach(i,a=>s.get([a.indexId,this.uid]).next(l=>{o.push(function(h,d){const p=d?new tl(d.sequenceNumber,new pn(oi(d.readTime),new te(Gn(d.documentKey)),d.largestBatchId)):tl.empty(),g=h.fields.map(([v,T])=>new Fc(rt.fromServerFormat(v),T));return new Au(h.indexId,h.collectionGroup,g,p)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:ge(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=na(e),i=ki(e);return this.vn(e).next(o=>s.G(Kf,IDBKeyRange.bound(t,t)).next(a=>D.forEach(a,l=>i.put(GE(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return D.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?D.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),D.forEach(a,l=>this.Cn(e,s,l).next(u=>{const h=this.Fn(i,l);return u.isEqual(h)?D.resolve():this.Mn(e,i,l,u,h)}))))})}xn(e,t,r,s){return Pi(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.wn(r,t.key),documentKey:t.key.path.toArray()})}On(e,t,r,s){return Pi(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.wn(r,t.key),t.key.path.toArray()])}Cn(e,t,r){const s=Pi(e);let i=new Ue(Fr);return s.Z({index:kA,range:IDBKeyRange.only([r.indexId,this.uid,this.wn(r,t)])},(o,a)=>{i=i.add(new Fs(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}Fn(e,t){let r=new Ue(Fr);const s=this.yn(t,e);if(s==null)return r;const i=Wf(t);if(i!=null){const o=e.data.field(i.fieldPath);if(ul(o))for(const a of o.arrayValue.values||[])r=r.add(new Fs(t.indexId,e.key,this.fn(a),s))}else r=r.add(new Fs(t.indexId,e.key,wc,s));return r}Mn(e,t,r,s,i){K(eT,"Updating index entries for document '%s'",t.key);const o=[];return function(l,u,h,d,p){const g=l.getIterator(),v=u.getIterator();let T=Si(g),P=Si(v);for(;T||P;){let O=!1,V=!1;if(T&&P){const x=h(T,P);x<0?V=!0:x>0&&(O=!0)}else T!=null?V=!0:O=!0;O?(d(P),P=Si(v)):V?(p(T),T=Si(g)):(T=Si(g),P=Si(v))}}(s,i,Fr,a=>{o.push(this.xn(e,t,r,a))},a=>{o.push(this.On(e,t,r,a))}),D.waitFor(o)}vn(e){let t=1;return ki(e).Z({index:PA,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Fr(o,a)).filter((o,a,l)=>!a||Fr(o,l[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=Fr(o,e),l=Fr(o,t);if(a===0)s[0]=e.nn();else if(a>0&&l<0)s.push(o),s.push(o.nn());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Nn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,wc,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,wc,[]];i.push(IDBKeyRange.bound(a,l))}return i}Nn(e,t){return Fr(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(nT)}getMinOffset(e,t){return D.mapArray(this.dn(t),r=>this.An(e,r).next(s=>s||re())).next(nT)}}function tT(n){return dt(n,il)}function Pi(n){return dt(n,ku)}function na(n){return dt(n,Lm)}function ki(n){return dt(n,Pu)}function nT(n){ie(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Om(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new pn(e.readTime,e.documentKey,t)}/**
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
 */const rT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},DR=41943040;class kt{static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function NR(n,e,t){const r=n.store(Rn),s=n.store(ao),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const l=r.Z({range:o},(h,d,p)=>(a++,p.delete()));i.push(l.next(()=>{ie(a===1)}));const u=[];for(const h of t.mutations){const d=RA(e,h.key.path,t.batchId);i.push(s.delete(d)),u.push(h.key)}return D.waitFor(i).next(()=>u)}function Fu(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw re();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(DR,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);class Mh{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Bn={}}static It(e,t,r,s){ie(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Mh(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ur(e).Z({index:$s,range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=Fi(e),o=Ur(e);return o.add({}).next(a=>{ie(typeof a=="number");const l=new Km(a,t,r,s),u=function(g,v,T){const P=T.baseMutations.map(V=>Vu(g.Tt,V)),O=T.mutations.map(V=>Vu(g.Tt,V));return{userId:v,batchId:T.batchId,localWriteTimeMs:T.localWriteTime.toMillis(),baseMutations:P,mutations:O}}(this.serializer,this.userId,l),h=[];let d=new Ue((p,g)=>ge(p.canonicalString(),g.canonicalString()));for(const p of s){const g=RA(this.userId,p.key.path,a);d=d.add(p.key.path.popLast()),h.push(o.put(u)),h.push(i.put(g,SU))}return d.forEach(p=>{h.push(this.indexManager.addToCollectionParentIndex(e,p))}),e.addOnCommittedListener(()=>{this.Bn[a]=l.keys()}),D.waitFor(h).next(()=>l)})}lookupMutationBatch(e,t){return Ur(e).get(t).next(r=>r?(ie(r.userId===this.userId),Ms(this.serializer,r)):null)}Ln(e,t){return this.Bn[t]?D.resolve(this.Bn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Bn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Ur(e).Z({index:$s,range:s},(o,a,l)=>{a.userId===this.userId&&(ie(a.batchId>=r),i=Ms(this.serializer,a)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Ks;return Ur(e).Z({index:$s,range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Ks],[this.userId,Number.POSITIVE_INFINITY]);return Ur(e).G($s,t).next(r=>r.map(s=>Ms(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Uc(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Fi(e).Z({range:s},(o,a,l)=>{const[u,h,d]=o,p=Gn(h);if(u===this.userId&&t.path.isEqual(p))return Ur(e).get(d).next(g=>{if(!g)throw re();ie(g.userId===this.userId),i.push(Ms(this.serializer,g))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ue(ge);const s=[];return t.forEach(i=>{const o=Uc(this.userId,i.path),a=IDBKeyRange.lowerBound(o),l=Fi(e).Z({range:a},(u,h,d)=>{const[p,g,v]=u,T=Gn(g);p===this.userId&&i.path.isEqual(T)?r=r.add(v):d.done()});s.push(l)}),D.waitFor(s).next(()=>this.kn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=Uc(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new Ue(ge);return Fi(e).Z({range:o},(l,u,h)=>{const[d,p,g]=l,v=Gn(p);d===this.userId&&r.isPrefixOf(v)?v.length===s&&(a=a.add(g)):h.done()}).next(()=>this.kn(e,a))}kn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Ur(e).get(i).next(o=>{if(o===null)throw re();ie(o.userId===this.userId),r.push(Ms(this.serializer,o))}))}),D.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return NR(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.qn(t.batchId)}),D.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}qn(e){delete this.Bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return D.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Fi(e).Z({range:r},(i,o,a)=>{if(i[0]===this.userId){const l=Gn(i[1]);s.push(l)}else a.done()}).next(()=>{ie(s.length===0)})})}containsKey(e,t){return xR(e,this.userId,t)}Qn(e){return OR(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Ks,lastStreamToken:""})}}function xR(n,e,t){const r=Uc(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Fi(n).Z({range:i,Y:!0},(a,l,u)=>{const[h,d,p]=a;h===e&&d===s&&(o=!0),u.done()}).next(()=>o)}function Ur(n){return dt(n,Rn)}function Fi(n){return dt(n,ao)}function OR(n){return dt(n,rl)}/**
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
 */class ai{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new ai(0)}static Un(){return new ai(-1)}}/**
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
 */class e4{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Wn(e).next(t=>{const r=new ai(t.highestTargetId);return t.highestTargetId=r.next(),this.Gn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Wn(e).next(t=>ae.fromTimestamp(new et(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Wn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Wn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Gn(e,s)))}addTargetData(e,t){return this.zn(e,t).next(()=>this.Wn(e).next(r=>(r.targetCount+=1,this.jn(t,r),this.Gn(e,r))))}updateTargetData(e,t){return this.zn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Di(e).delete(t.targetId)).next(()=>this.Wn(e)).next(r=>(ie(r.targetCount>0),r.targetCount-=1,this.Gn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return Di(e).Z((o,a)=>{const l=pa(a);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>D.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Di(e).Z((r,s)=>{const i=pa(s);t(i)})}Wn(e){return sT(e).get(Cu).next(t=>(ie(t!==null),t))}Gn(e,t){return sT(e).put(Cu,t)}zn(e,t){return Di(e).put(SR(this.serializer,t))}jn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Wn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=si(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Di(e).Z({range:s,index:CA},(o,a,l)=>{const u=pa(a);Nl(t,u.target)&&(i=u,l.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Xr(e);return t.forEach(o=>{const a=Lt(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),D.waitFor(s)}removeMatchingKeys(e,t,r){const s=Xr(e);return D.forEach(t,i=>{const o=Lt(i.path);return D.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Xr(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Xr(e);let i=Ee();return s.Z({range:r,Y:!0},(o,a,l)=>{const u=Gn(o[1]),h=new te(u);i=i.add(h)}).next(()=>i)}containsKey(e,t){const r=Lt(t.path),s=IDBKeyRange.bound([r],[TA(r)],!1,!0);let i=0;return Xr(e).Z({index:Mm,Y:!0,range:s},([o,a],l,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}lt(e,t){return Di(e).get(t).next(r=>r?pa(r):null)}}function Di(n){return dt(n,lo)}function sT(n){return dt(n,Gs)}function Xr(n){return dt(n,co)}/**
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
 */const iT="LruGarbageCollector",VR=1048576;function oT([n,e],[t,r]){const s=ge(n,t);return s===0?ge(e,r):s}class t4{constructor(e){this.Hn=e,this.buffer=new Ue(oT),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();oT(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class MR{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){K(iT,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){_s(t)?K(iT,"Ignoring IndexedDB error during garbage collection: ",t):await fi(t)}await this.er(3e5)})}}class n4{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return D.resolve(vn.ae);const r=new t4(t);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(rT)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rT):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,s,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,t))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Oi()<=Te.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function LR(n,e){return new n4(n,e)}/**
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
 */class r4{constructor(e,t){this.db=e,this.garbageCollector=LR(this,t)}nr(e){const t=this.sr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}rr(e,t){return this._r(e,(r,s)=>t(s))}addReference(e,t,r){return bc(e,r)}removeReference(e,t,r){return bc(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return bc(e,t)}ar(e,t){return function(s,i){let o=!1;return OR(s).X(a=>xR(s,a,i).next(l=>(l&&(o=!0),D.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this._r(e,(o,a)=>{if(a<=t){const l=this.ar(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ae.min()),Xr(e).delete(function(d){return[0,Lt(d.path)]}(o))))});s.push(l)}}).next(()=>D.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return bc(e,t)}_r(e,t){const r=Xr(e);let s,i=vn.ae;return r.Z({index:Mm},([o,a],{path:l,sequenceNumber:u})=>{o===0?(i!==vn.ae&&t(new te(Gn(s)),i),i=u,s=l):i=vn.ae}).next(()=>{i!==vn.ae&&t(new te(Gn(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function bc(n,e){return Xr(n).put(function(r,s){return{targetId:0,path:Lt(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class FR{constructor(){this.changes=new Pr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class s4{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Cs(e).put(r)}removeEntry(e,t,r){return Cs(e).delete(function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Mu(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.ur(e,r)))}getEntry(e,t){let r=ot.newInvalidDocument(t);return Cs(e).Z({index:Bc,range:IDBKeyRange.only(ra(t))},(s,i)=>{r=this.cr(t,i)}).next(()=>r)}lr(e,t){let r={size:0,document:ot.newInvalidDocument(t)};return Cs(e).Z({index:Bc,range:IDBKeyRange.only(ra(t))},(s,i)=>{r={document:this.cr(t,i),size:Fu(i)}}).next(()=>r)}getEntries(e,t){let r=cn();return this.hr(e,t,(s,i)=>{const o=this.cr(s,i);r=r.insert(s,o)}).next(()=>r)}Pr(e,t){let r=cn(),s=new tt(te.comparator);return this.hr(e,t,(i,o)=>{const a=this.cr(i,o);r=r.insert(i,a),s=s.insert(i,Fu(o))}).next(()=>({documents:r,Tr:s}))}hr(e,t,r){if(t.isEmpty())return D.resolve();let s=new Ue(cT);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(ra(s.first()),ra(s.last())),o=s.getIterator();let a=o.getNext();return Cs(e).Z({index:Bc,range:i},(l,u,h)=>{const d=te.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&cT(a,d)<0;)r(a,null),a=o.getNext();a&&a.isEqual(d)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?h.W(ra(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),Mu(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Cs(e).G(IDBKeyRange.bound(a,l,!0)).next(u=>{i==null||i.incrementDocumentReadCount(u.length);let h=cn();for(const d of u){const p=this.cr(te.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);p.isFoundDocument()&&(Ol(t,p)||s.has(p.key))&&(h=h.insert(p.key,p))}return h})}getAllFromCollectionGroup(e,t,r,s){let i=cn();const o=lT(t,r),a=lT(t,pn.max());return Cs(e).Z({index:SA,range:IDBKeyRange.bound(o,a,!0)},(l,u,h)=>{const d=this.cr(te.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(d.key,d),i.size===s&&h.done()}).next(()=>i)}newChangeBuffer(e){return new i4(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return aT(e).get(Hf).next(t=>(ie(!!t),t))}ur(e,t){return aT(e).put(Hf,t)}cr(e,t){if(t){const r=WB(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(ae.min())))return r}return ot.newInvalidDocument(e)}}function UR(n){return new s4(n)}class i4 extends FR{constructor(e,t){super(),this.Ir=e,this.trackRemovals=t,this.Er=new Pr(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new Ue((i,o)=>ge(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Er.get(i);if(t.push(this.Ir.removeEntry(e,i,a.readTime)),o.isValidDocument()){const l=HE(this.Ir.serializer,o);s=s.add(i.path.popLast());const u=Fu(l);r+=u-a.size,t.push(this.Ir.addEntry(e,i,l))}else if(r-=a.size,this.trackRemovals){const l=HE(this.Ir.serializer,o.convertToNoDocument(ae.min()));t.push(this.Ir.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.Ir.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Ir.updateMetadata(e,r)),D.waitFor(t)}getFromCache(e,t){return this.Ir.lr(e,t).next(r=>(this.Er.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Ir.Pr(e,t).next(({documents:r,Tr:s})=>(s.forEach((i,o)=>{this.Er.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function aT(n){return dt(n,sl)}function Cs(n){return dt(n,Su)}function ra(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function lT(n,e){const t=e.documentKey.path.toArray();return[n,Mu(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function cT(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=ge(t[i],r[i]),s)return s;return s=ge(t.length,r.length),s||(s=ge(t[t.length-2],r[r.length-2]),s||ge(t[t.length-1],r[r.length-1]))}/**
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
 */class o4{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class BR{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ma(r.mutation,s,En.empty(),et.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Ee()){const s=zn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=da();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=zn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Ee()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=cn();const o=Va(),a=function(){return Va()}();return t.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof ys)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ma(h.mutation,u,h.mutation.getFieldMask(),et.now())):o.set(u.key,En.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var d;return a.set(u,new o4(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Va();let s=new tt((o,a)=>o-a),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let h=r.get(l)||En.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||Ee()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=rR();h.forEach(p=>{if(!i.has(p)){const g=cR(t.get(p),r.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):JA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(zn());let a=el,l=i;return o.next(u=>D.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?D.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ee())).next(h=>({batchId:a,changes:nR(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new te(t)).next(r=>{let s=da();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=da();return this.indexManager.getCollectionParents(e,i).next(a=>D.forEach(a,l=>{const u=function(d,p){return new ko(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,ot.newInvalidDocument(h)))});let a=da();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&Ma(h.mutation,u,En.empty(),et.now()),Ol(t,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class a4{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return D.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Kt(s.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(s){return{name:s.name,query:CR(s.bundledQuery),readTime:Kt(s.readTime)}}(t)),D.resolve()}}/**
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
 */class l4{constructor(){this.overlays=new tt(te.comparator),this.Rr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=zn();return D.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Et(e,t,i)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=zn(),i=t.length+1,o=new te(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new tt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=zn(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=zn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return D.resolve(a)}Et(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zm(t,r));let i=this.Rr.get(t);i===void 0&&(i=Ee(),this.Rr.set(t,i)),this.Rr.set(t,i.add(r.key))}}/**
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
 */class c4{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class Zm{constructor(){this.Vr=new Ue(pt.mr),this.gr=new Ue(pt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new pt(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new pt(e,t))}br(e,t){e.forEach(r=>this.removeReference(r,t))}Sr(e){const t=new te(new Ve([])),r=new pt(t,e),s=new pt(t,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new te(new Ve([])),r=new pt(t,e),s=new pt(t,e+1);let i=Ee();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new pt(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return te.comparator(e.key,t.key)||ge(e.Cr,t.Cr)}static pr(e,t){return ge(e.Cr,t.Cr)||te.comparator(e.key,t.key)}}/**
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
 */class u4{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Ue(pt.mr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Km(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.Mr=this.Mr.add(new pt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,t){return D.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Nr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Ks:this.Fr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pt(t,0),s=new pt(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const a=this.Or(o.Cr);i.push(a)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ue(ge);return t.forEach(s=>{const i=new pt(s,0),o=new pt(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],a=>{r=r.add(a.Cr)})}),D.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new pt(new te(i),0);let a=new Ue(ge);return this.Mr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.Cr)),!0)},o),D.resolve(this.Br(a))}Br(e){const t=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ie(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return D.forEach(t.mutations,s=>{const i=new pt(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new pt(t,0),s=this.Mr.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class h4{constructor(e){this.kr=e,this.docs=function(){return new tt(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(t))}getEntries(e,t){let r=cn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ot.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=cn();const o=t.path,a=new te(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Om(IA(h),r)<=0||(s.has(h.key)||Ol(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){re()}qr(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new d4(this)}getSize(e){return D.resolve(this.size)}}class d4 extends FR{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class f4{constructor(e){this.persistence=e,this.Qr=new Pr(t=>si(t),Nl),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Zm,this.targetCount=0,this.Ur=ai.Kn()}forEachTarget(e,t){return this.Qr.forEach((r,s)=>t(s)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),D.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new ai(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.zn(t),D.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Qr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Kr.yr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Kr.br(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Kr.vr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Kr.containsKey(t))}}/**
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
 */class eg{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new vn(0),this.zr=!1,this.zr=!0,this.jr=new c4,this.referenceDelegate=e(this),this.Hr=new f4(this),this.indexManager=new JB,this.remoteDocumentCache=function(s){return new h4(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new RR(t),this.Yr=new a4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new l4,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new u4(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){K("MemoryPersistence","Starting transaction:",e);const s=new p4(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,t){return D.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class p4 extends bA{constructor(e){super(),this.currentSequenceNumber=e}}class Lh{constructor(e){this.persistence=e,this.ti=new Zm,this.ni=null}static ri(e){return new Lh(e)}get ii(){if(this.ni)return this.ni;throw re()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),D.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.ii,r=>{const s=te.fromPath(r);return this.si(e,s).next(i=>{i||t.removeEntry(s,ae.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return D.or([()=>D.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Uu{constructor(e,t){this.persistence=e,this.oi=new Pr(r=>Lt(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=LR(this,t)}static ri(e,t){return new Uu(e,t)}Zr(){}Xr(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return D.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?D.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,t).next(a=>{a||(r++,i.removeEntry(o,ae.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),D.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=jc(e.data.value)),t}ar(e,t,r){return D.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.oi.get(t);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class m4{constructor(e){this.serializer=e}B(e,t,r,s){const i=new bh("createOrUpgrade",t);r<1&&s>=1&&(function(l){l.createObjectStore(Dl)}(e),function(l){l.createObjectStore(rl,{keyPath:RU}),l.createObjectStore(Rn,{keyPath:TE,autoIncrement:!0}).createIndex($s,IE,{unique:!0}),l.createObjectStore(ao)}(e),uT(e),function(l){l.createObjectStore(xs)}(e));let o=D.resolve();return r<3&&s>=3&&(r!==0&&(function(l){l.deleteObjectStore(co),l.deleteObjectStore(lo),l.deleteObjectStore(Gs)}(e),uT(e)),o=o.next(()=>function(l){const u=l.store(Gs),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ae.min().toTimestamp(),targetCount:0};return u.put(Cu,h)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store(Rn).G().next(d=>{l.deleteObjectStore(Rn),l.createObjectStore(Rn,{keyPath:TE,autoIncrement:!0}).createIndex($s,IE,{unique:!0});const p=u.store(Rn),g=d.map(v=>p.put(v));return D.waitFor(g)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore(uo,{keyPath:VU})})(e)})),r<5&&s>=5&&(o=o.next(()=>this._i(i))),r<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore(sl)}(e),this.ai(i)))),r<7&&s>=7&&(o=o.next(()=>this.ui(i))),r<8&&s>=8&&(o=o.next(()=>this.ci(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.li(i))),r<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore(Rh,{keyPath:MU})})(e),function(l){l.createObjectStore(Sh,{keyPath:LU})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore(Ch,{keyPath:WU});u.createIndex(Gf,HU,{unique:!1}),u.createIndex(DA,KU,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore(Su,{keyPath:CU});u.createIndex(Bc,PU),u.createIndex(SA,kU)}(e)).next(()=>this.hi(e,i)).next(()=>e.deleteObjectStore(xs))),r<14&&s>=14&&(o=o.next(()=>this.Pi(e,i))),r<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore(Lm,{keyPath:FU,autoIncrement:!0}).createIndex(Kf,UU,{unique:!1}),l.createObjectStore(Pu,{keyPath:BU}).createIndex(PA,$U,{unique:!1}),l.createObjectStore(ku,{keyPath:jU}).createIndex(kA,qU,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore(Pu).clear()}).next(()=>{t.objectStore(ku).clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore(Fm,{keyPath:GU})})(e)})),o}ai(e){let t=0;return e.store(xs).Z((r,s)=>{t+=Fu(s)}).next(()=>{const r={byteSize:t};return e.store(sl).put(Hf,r)})}_i(e){const t=e.store(rl),r=e.store(Rn);return t.G().next(s=>D.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,Ks],[i.userId,i.lastAcknowledgedBatchId]);return r.G($s,o).next(a=>D.forEach(a,l=>{ie(l.userId===i.userId);const u=Ms(this.serializer,l);return NR(e,i.userId,u).next(()=>{})}))}))}ui(e){const t=e.store(co),r=e.store(xs);return e.store(Gs).get(Cu).next(s=>{const i=[];return r.Z((o,a)=>{const l=new Ve(o),u=function(d){return[0,Lt(d)]}(l);i.push(t.get(u).next(h=>h?D.resolve():(d=>t.put({targetId:0,path:Lt(d),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>D.waitFor(i))})}ci(e,t){e.createObjectStore(il,{keyPath:OU});const r=t.store(il),s=new Jm,i=o=>{if(s.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Lt(l)})}};return t.store(xs).Z({Y:!0},(o,a)=>{const l=new Ve(o);return i(l.popLast())}).next(()=>t.store(ao).Z({Y:!0},([o,a,l],u)=>{const h=Gn(a);return i(h.popLast())}))}li(e){const t=e.store(lo);return t.Z((r,s)=>{const i=pa(s),o=SR(this.serializer,i);return t.put(o)})}hi(e,t){const r=t.store(xs),s=[];return r.Z((i,o)=>{const a=t.store(Su),l=function(d){return d.document?new te(Ve.fromString(d.document.name).popFirst(5)):d.noDocument?te.fromSegments(d.noDocument.path):d.unknownDocument?te.fromSegments(d.unknownDocument.path):re()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(u))}).next(()=>D.waitFor(s))}Pi(e,t){const r=t.store(Rn),s=UR(this.serializer),i=new eg(Lh.ri,this.serializer.Tt);return r.G().next(o=>{const a=new Map;return o.forEach(l=>{var u;let h=(u=a.get(l.userId))!==null&&u!==void 0?u:Ee();Ms(this.serializer,l).keys().forEach(d=>h=h.add(d)),a.set(l.userId,h)}),D.forEach(a,(l,u)=>{const h=new Tt(u),d=Vh.It(this.serializer,h),p=i.getIndexManager(h),g=Mh.It(h,this.serializer,p,i.referenceDelegate);return new BR(s,g,d,p).recalculateAndSaveOverlaysForDocumentKeys(new zf(t,vn.ae),l).next()})})}}function uT(n){n.createObjectStore(co,{keyPath:NU}).createIndex(Mm,xU,{unique:!0}),n.createObjectStore(lo,{keyPath:"targetId"}).createIndex(CA,DU,{unique:!0}),n.createObjectStore(Gs)}const Br="IndexedDbPersistence",jd=18e5,qd=5e3,Wd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",g4="main";class tg{constructor(e,t,r,s,i,o,a,l,u,h,d=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ti=i,this.window=o,this.document=a,this.Ii=u,this.Ei=h,this.di=d,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=p=>Promise.resolve(),!tg.D())throw new Y(F.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new r4(this,s),this.gi=t+g4,this.serializer=new RR(l),this.pi=new ss(this.gi,this.di,new m4(this.serializer)),this.jr=new KB,this.Hr=new e4(this.referenceDelegate,this.serializer),this.remoteDocumentCache=UR(this.serializer),this.Yr=new HB,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,h===!1&&Wt(Br,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Y(F.FAILED_PRECONDITION,Wd);return this.bi(),this.Si(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Hr.getHighestSequenceNumber(e))}).then(e=>{this.Gr=new vn(e,this.Ii)}).then(()=>{this.zr=!0}).catch(e=>(this.pi&&this.pi.close(),Promise.reject(e)))}Ci(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.pi.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ti.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ac(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Fi(e).next(t=>{t||(this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Mi(e)).next(t=>this.isPrimary&&!t?this.xi(e).next(()=>!1):!!t&&this.Oi(e).next(()=>!0))).catch(e=>{if(_s(e))return K(Br,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return K(Br,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ti.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Fi(e){return sa(e).get(Ri).next(t=>D.resolve(this.Ni(t)))}Bi(e){return Ac(e).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,jd)){this.mi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=dt(t,uo);return r.G().next(s=>{const i=this.qi(s,jd),o=s.filter(a=>i.indexOf(a)===-1);return D.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.yi)for(const t of e)this.yi.removeItem(this.Qi(t.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Li()).then(()=>this.Di()))}Ni(e){return!!e&&e.ownerId===this.clientId}Mi(e){return this.Ei?D.resolve(!0):sa(e).get(Ri).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,qd)&&!this.$i(t.ownerId)){if(this.Ni(t)&&this.networkEnabled)return!0;if(!this.Ni(t)){if(!t.allowTabSynchronization)throw new Y(F.FAILED_PRECONDITION,Wd);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ac(e).G().next(r=>this.qi(r,qd).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&K(Br,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.zr=!1,this.Ki(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ui(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[Dl,uo],e=>{const t=new zf(e,vn.ae);return this.xi(t).next(()=>this.Bi(t))}),this.pi.close(),this.Gi()}qi(e,t){return e.filter(r=>this.ki(r.updateTimeMs,t)&&!this.$i(r.clientId))}zi(){return this.runTransaction("getActiveClients","readonly",e=>Ac(e).G().next(t=>this.qi(t,jd).map(r=>r.clientId)))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(e,t){return Mh.It(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ZB(e,this.serializer.Tt.databaseId)}getDocumentOverlayCache(e){return Vh.It(this.serializer,e)}getBundleCache(){return this.Yr}runTransaction(e,t,r){K(Br,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?YU:l===16?QU:l===15?Um:l===14?OA:l===13?xA:l===12?zU:l===11?NA:void re()}(this.di);let o;return this.pi.runTransaction(e,s,i,a=>(o=new zf(a,this.Gr?this.Gr.next():vn.ae),t==="readwrite-primary"?this.Fi(o).next(l=>!!l||this.Mi(o)).next(l=>{if(!l)throw Wt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)),new Y(F.FAILED_PRECONDITION,wA);return r(o)}).next(l=>this.Oi(o).next(()=>l)):this.ji(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ji(e){return sa(e).get(Ri).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,qd)&&!this.$i(t.ownerId)&&!this.Ni(t)&&!(this.Ei||this.allowTabSynchronization&&t.allowTabSynchronization))throw new Y(F.FAILED_PRECONDITION,Wd)})}Oi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return sa(e).put(Ri,t)}static D(){return ss.D()}xi(e){const t=sa(e);return t.get(Ri).next(r=>this.Ni(r)?(K(Br,"Releasing primary lease."),t.delete(Ri)):D.resolve())}ki(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Wt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}bi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ri=()=>{this.Ti.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground=this.document.visibilityState==="visible")}Ui(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}Si(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ai=()=>{this.Ki();const t=/(?:Version|Mobile)\/1[456]/;db()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(e){var t;try{const r=((t=this.yi)===null||t===void 0?void 0:t.getItem(this.Qi(e)))!==null;return K(Br,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Wt(Br,"Failed to get zombied client id.",r),!1}}Ki(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(e){Wt("Failed to set zombie client id.",e)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch{}}Qi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function sa(n){return dt(n,Dl)}function Ac(n){return dt(n,uo)}function _4(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class ng{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=s}static Yi(e,t){let r=Ee(),s=Ee();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ng(e,t.fromCache,r,s)}}/**
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
 */class y4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $R{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return db()?8:AA(ht())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.rs(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new y4;return this._s(e,t,o).next(a=>{if(i.result=a,this.Xi)return this.us(e,t,o,a.size)})}).next(()=>i.result)}us(e,t,r,s){return r.documentReadCount<this.es?(Oi()<=Te.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Vi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),D.resolve()):(Oi()<=Te.DEBUG&&K("QueryEngine","Query:",Vi(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Oi()<=Te.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Vi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(t))):D.resolve())}rs(e,t){if(VE(t))return D.resolve(null);let r=In(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=xu(t,null,"F"),r=In(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.ns.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.cs(t,a);return this.ls(t,u,o,l.readTime)?this.rs(e,xu(t,null,"F")):this.hs(e,u,t,l)}))})))}ss(e,t,r,s){return VE(t)||s.isEqual(ae.min())?D.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(t,i);return this.ls(t,o,r,s)?D.resolve(null):(Oi()<=Te.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Vi(t)),this.hs(e,o,t,vU(s,el)).next(a=>a))})}cs(e,t){let r=new Ue(eR(e));return t.forEach((s,i)=>{Ol(e,i)&&(r=r.add(i))}),r}ls(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,t,r){return Oi()<=Te.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Vi(t)),this.ns.getDocumentsMatchingQuery(e,t,pn.min(),r)}hs(e,t,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const rg="LocalStore",v4=3e8;class E4{constructor(e,t,r,s){this.persistence=e,this.Ps=t,this.serializer=s,this.Ts=new tt(ge),this.Is=new Pr(i=>si(i),Nl),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BR(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function jR(n,e,t,r){return new E4(n,e,t,r)}async function qR(n,e){const t=me(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Ee();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(r,l).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function T4(n,e){const t=me(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.ds.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,p=d.keys();let g=D.resolve();return p.forEach(v=>{g=g.next(()=>h.getEntry(l,v)).next(T=>{const P=u.docVersions.get(v);ie(P!==null),T.version.compareTo(P)<0&&(d.applyToRemoteDocument(T,u),T.isValidDocument()&&(T.setReadTime(u.commitVersion),h.addEntry(T)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Ee();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function WR(n){const e=me(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function I4(n,e){const t=me(n),r=e.snapshotVersion;let s=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.ds.newChangeBuffer({trackRemovals:!0});s=t.Ts;const a=[];e.targetChanges.forEach((h,d)=>{const p=s.get(d);if(!p)return;a.push(t.Hr.removeMatchingKeys(i,h.removedDocuments,d).next(()=>t.Hr.addMatchingKeys(i,h.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(lt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(d,g),function(T,P,O){return T.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=v4?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(p,g,h)&&a.push(t.Hr.updateTargetData(i,g))});let l=cn(),u=Ee();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(w4(i,o,e.documentUpdates).next(h=>{l=h.Vs,u=h.fs})),!r.isEqual(ae.min())){const h=t.Hr.getLastRemoteSnapshotVersion(i).next(d=>t.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return D.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(t.Ts=s,i))}function w4(n,e,t){let r=Ee(),s=Ee();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=cn();return t.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):K(rg,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Vs:o,fs:s}})}function b4(n,e){const t=me(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ks),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function A4(n,e){const t=me(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Hr.getTargetData(r,e).next(i=>i?(s=i,D.resolve(s)):t.Hr.allocateTargetId(r).next(o=>(s=new vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function lp(n,e,t){const r=me(n),s=r.Ts.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!_s(o))throw o;K(rg,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function hT(n,e,t){const r=me(n);let s=ae.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=me(l),p=d.Is.get(h);return p!==void 0?D.resolve(d.Ts.get(p)):d.Hr.getTargetData(u,h)}(r,o,In(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,t?s:ae.min(),t?i:Ee())).next(a=>(R4(r,hB(e),a),{documents:a,gs:i})))}function R4(n,e,t){let r=n.Es.get(e)||ae.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Es.set(e,r)}class dT{constructor(){this.activeTargetIds=_B()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class HR{constructor(){this.ho=new dT,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new dT,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class S4{To(e){}shutdown(){}}/**
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
 */const fT="ConnectivityMonitor";class pT{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){K(fT,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){K(fT,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rc=null;function cp(){return Rc===null?Rc=function(){return 268435456+Math.round(2147483648*Math.random())}():Rc++,"0x"+Rc.toString(16)}/**
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
 */const Hd="RestConnection",C4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class P4{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===al?`project_id=${r}`:`project_id=${r}&database_id=${s}`}bo(e,t,r,s,i){const o=cp(),a=this.So(e,t.toUriEncodedString());K(Hd,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,s,i),this.vo(e,a,l,r).then(u=>(K(Hd,`Received RPC '${e}' ${o}: `,u),u),u=>{throw io(Hd,`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Co(e,t,r,s,i,o){return this.bo(e,t,r,s,i)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Po}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}So(e,t){const r=C4[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
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
 */class k4{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const Pt="WebChannelConnection";class D4 extends P4{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,s){const i=cp();return new Promise((o,a)=>{const l=new pA;l.setWithCredentials(!0),l.listenOnce(mA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Lc.NO_ERROR:const h=l.getResponseJson();K(Pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Lc.TIMEOUT:K(Pt,`RPC '${e}' ${i} timed out`),a(new Y(F.DEADLINE_EXCEEDED,"Request time out"));break;case Lc.HTTP_ERROR:const d=l.getStatus();if(K(Pt,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const v=function(P){const O=P.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(O)>=0?O:F.UNKNOWN}(g.status);a(new Y(v,g.message))}else a(new Y(F.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Y(F.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{K(Pt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);K(Pt,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",u,r,15)})}Wo(e,t,r){const s=cp(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yA(),a=_A(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");K(Pt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,g=!1;const v=new k4({Fo:P=>{g?K(Pt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(p||(K(Pt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),K(Pt,`RPC '${e}' stream ${s} sending:`,P),d.send(P))},Mo:()=>d.close()}),T=(P,O,V)=>{P.listen(O,x=>{try{V(x)}catch(M){setTimeout(()=>{throw M},0)}})};return T(d,ha.EventType.OPEN,()=>{g||(K(Pt,`RPC '${e}' stream ${s} transport opened.`),v.Qo())}),T(d,ha.EventType.CLOSE,()=>{g||(g=!0,K(Pt,`RPC '${e}' stream ${s} transport closed`),v.Ko())}),T(d,ha.EventType.ERROR,P=>{g||(g=!0,io(Pt,`RPC '${e}' stream ${s} transport errored:`,P),v.Ko(new Y(F.UNAVAILABLE,"The operation could not be completed")))}),T(d,ha.EventType.MESSAGE,P=>{var O;if(!g){const V=P.data[0];ie(!!V);const x=V,M=(x==null?void 0:x.error)||((O=x[0])===null||O===void 0?void 0:O.error);if(M){K(Pt,`RPC '${e}' stream ${s} received error:`,M);const W=M.status;let j=function(E){const I=at[E];if(I!==void 0)return dR(I)}(W),b=M.message;j===void 0&&(j=F.INTERNAL,b="Unknown error status: "+W+" with message "+M.message),g=!0,v.Ko(new Y(j,b)),d.close()}else K(Pt,`RPC '${e}' stream ${s} received:`,V),v.Uo(V)}}),T(a,gA.STAT_EVENT,P=>{P.stat===qf.PROXY?K(Pt,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===qf.NOPROXY&&K(Pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{v.$o()},0),v}}/**
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
 */function N4(){return typeof window<"u"?window:null}function Kc(){return typeof document<"u"?document:null}/**
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
 */function Fh(n){return new OB(n,!0)}/**
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
 */class KR{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,t-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const mT="PersistentStream";class GR{constructor(e,t,r,s,i,o,a,l){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new KR(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(Wt(t.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===t&&this.V_(r,s)},r=>{e(()=>{const s=new Y(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return K(mT,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(K(mT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class x4 extends GR{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=LB(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?Kt(o.readTime):ae.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=rp(this.serializer),t.addTarget=function(i,o){let a;const l=o.target;if(a=Du(l)?{documents:ER(i,l)}:{query:TR(i,l).ht},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=mR(i,o.resumeToken);const u=tp(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ae.min())>0){a.readTime=yo(i,o.snapshotVersion.toTimestamp());const u=tp(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=UB(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=rp(this.serializer),t.removeTarget=e,this.I_(t)}}class O4 extends GR{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ie(!!e.streamToken),this.lastStreamToken=e.streamToken,ie(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=FB(e.writeResults,e.commitTime),r=Kt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=rp(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Vu(this.serializer,r))};this.I_(t)}}/**
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
 */class V4{}class M4 extends V4{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new Y(F.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.bo(e,np(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(F.UNKNOWN,i.toString())})}Co(e,t,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,np(t,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(F.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class L4{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Wt(t),this.N_=!1):K("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const li="RemoteStore";class F4{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{mi(this)&&(K(li,"Restarting streams for network reachability change."),await async function(l){const u=me(l);u.W_.add(4),await Ml(u),u.j_.set("Unknown"),u.W_.delete(4),await Uh(u)}(this))})}),this.j_=new L4(r,s)}}async function Uh(n){if(mi(n))for(const e of n.G_)await e(!0)}async function Ml(n){for(const e of n.G_)await e(!1)}function zR(n,e){const t=me(n);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),ag(t)?og(t):No(t).c_()&&ig(t,e))}function sg(n,e){const t=me(n),r=No(t);t.U_.delete(e),r.c_()&&QR(t,e),t.U_.size===0&&(r.c_()?r.P_():mi(t)&&t.j_.set("Unknown"))}function ig(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}No(n).y_(e)}function QR(n,e){n.H_.Ne(e),No(n).w_(e)}function og(n){n.H_=new kB({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.U_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),No(n).start(),n.j_.B_()}function ag(n){return mi(n)&&!No(n).u_()&&n.U_.size>0}function mi(n){return me(n).W_.size===0}function YR(n){n.H_=void 0}async function U4(n){n.j_.set("Online")}async function B4(n){n.U_.forEach((e,t)=>{ig(n,e)})}async function $4(n,e){YR(n),ag(n)?(n.j_.q_(e),og(n)):n.j_.set("Unknown")}async function j4(n,e,t){if(n.j_.set("Online"),e instanceof pR&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.U_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.U_.delete(a),s.H_.removeTarget(a))}(n,e)}catch(r){K(li,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bu(n,r)}else if(e instanceof Hc?n.H_.We(e):e instanceof fR?n.H_.Ze(e):n.H_.je(e),!t.isEqual(ae.min()))try{const r=await WR(n.localStore);t.compareTo(r)>=0&&await function(i,o){const a=i.H_.ot(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.U_.get(u);h&&i.U_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.U_.get(l);if(!h)return;i.U_.set(l,h.withResumeToken(lt.EMPTY_BYTE_STRING,h.snapshotVersion)),QR(i,l);const d=new vr(h.target,l,u,h.sequenceNumber);ig(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){K(li,"Failed to raise snapshot:",r),await Bu(n,r)}}async function Bu(n,e,t){if(!_s(e))throw e;n.W_.add(1),await Ml(n),n.j_.set("Offline"),t||(t=()=>WR(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{K(li,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Uh(n)})}function XR(n,e){return e().catch(t=>Bu(n,t,e))}async function Ll(n){const e=me(n),t=us(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:Ks;for(;q4(e);)try{const s=await b4(e.localStore,r);if(s===null){e.K_.length===0&&t.P_();break}r=s.batchId,W4(e,s)}catch(s){await Bu(e,s)}JR(e)&&ZR(e)}function q4(n){return mi(n)&&n.K_.length<10}function W4(n,e){n.K_.push(e);const t=us(n);t.c_()&&t.b_&&t.S_(e.mutations)}function JR(n){return mi(n)&&!us(n).u_()&&n.K_.length>0}function ZR(n){us(n).start()}async function H4(n){us(n).C_()}async function K4(n){const e=us(n);for(const t of n.K_)e.S_(t.mutations)}async function G4(n,e,t){const r=n.K_.shift(),s=Gm.from(r,e,t);await XR(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ll(n)}async function z4(n,e){e&&us(n).b_&&await async function(r,s){if(function(o){return SB(o)&&o!==F.ABORTED}(s.code)){const i=r.K_.shift();us(r).h_(),await XR(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ll(r)}}(n,e),JR(n)&&ZR(n)}async function gT(n,e){const t=me(n);t.asyncQueue.verifyOperationInProgress(),K(li,"RemoteStore received new credentials");const r=mi(t);t.W_.add(3),await Ml(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Uh(t)}async function Q4(n,e){const t=me(n);e?(t.W_.delete(2),await Uh(t)):e||(t.W_.add(2),await Ml(t),t.j_.set("Unknown"))}function No(n){return n.J_||(n.J_=function(t,r,s){const i=me(t);return i.M_(),new x4(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:U4.bind(null,n),No:B4.bind(null,n),Lo:$4.bind(null,n),p_:j4.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),ag(n)?og(n):n.j_.set("Unknown")):(await n.J_.stop(),YR(n))})),n.J_}function us(n){return n.Y_||(n.Y_=function(t,r,s){const i=me(t);return i.M_(),new O4(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:H4.bind(null,n),Lo:z4.bind(null,n),D_:K4.bind(null,n),v_:G4.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await Ll(n)):(await n.Y_.stop(),n.K_.length>0&&(K(li,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
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
 */class lg{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new lg(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cg(n,e){if(Wt("AsyncQueue",`${e}: ${n}`),_s(n))return new Y(F.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Qi{static emptySet(e){return new Qi(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||te.comparator(t.key,r.key):(t,r)=>te.comparator(t.key,r.key),this.keyedMap=da(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Qi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Qi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class _T{constructor(){this.Z_=new tt(te.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):re():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class vo{constructor(e,t,r,s,i,o,a,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new vo(e,t,Qi.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Y4{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class X4{constructor(){this.queries=yT(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const s=me(t),i=s.queries;s.queries=yT(),i.forEach((o,a)=>{for(const l of a.ta)l.onError(r)})})(this,new Y(F.ABORTED,"Firestore shutting down"))}}function yT(){return new Pr(n=>ZA(n),Dh)}async function ug(n,e){const t=me(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new Y4,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await t.onListen(s,!0);break;case 1:i.ea=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=cg(o,`Initialization of query '${Vi(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.ta.push(e),e.sa(t.onlineState),i.ea&&e.oa(i.ea)&&dg(t)}async function hg(n,e){const t=me(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function J4(n,e){const t=me(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.ta)a.oa(s)&&(r=!0);o.ea=s}}r&&dg(t)}function Z4(n,e,t){const r=me(n),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(t);r.queries.delete(e)}function dg(n){n.ia.forEach(e=>{e.next()})}var up,vT;(vT=up||(up={}))._a="default",vT.Cache="cache";class fg{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==up.Cache}}/**
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
 */class eS{constructor(e){this.key=e}}class tS{constructor(e){this.key=e}}class e${constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ee(),this.mutatedKeys=Ee(),this.ya=eR(e),this.wa=new Qi(this.ya)}get ba(){return this.fa}Sa(e,t){const r=t?t.Da:new _T,s=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const p=s.get(h),g=Ol(this.query,d)?d:null,v=!!p&&this.mutatedKeys.has(p.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;p&&g?p.data.isEqual(g.data)?v!==T&&(r.track({type:3,doc:g}),P=!0):this.va(p,g)||(r.track({type:2,doc:g}),P=!0,(l&&this.ya(g,l)>0||u&&this.ya(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),P=!0):p&&!g&&(r.track({type:1,doc:p}),P=!0,(l||u)&&(a=!0)),P&&(g?(o=o.add(g),i=T?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{wa:o,Da:r,ls:a,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((h,d)=>function(g,v){const T=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return T(g)-T(v)}(h.type,d.type)||this.ya(h.doc,d.doc)),this.Ca(r),s=s!=null&&s;const a=t&&!s?this.Fa():[],l=this.pa.size===0&&this.current&&!s?1:0,u=l!==this.ga;return this.ga=l,o.length!==0||u?{snapshot:new vo(this.query,e.wa,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:a}:{Ma:a}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new _T,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Ee(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new tS(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new eS(r))}),t}Oa(e){this.fa=e.gs,this.pa=Ee();const t=this.Sa(e.documents);return this.applyChanges(t,!0)}Na(){return vo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const pg="SyncEngine";class t${constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class n${constructor(e){this.key=e,this.Ba=!1}}class r${constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Pr(a=>ZA(a),Dh),this.qa=new Map,this.Qa=new Set,this.$a=new tt(te.comparator),this.Ka=new Map,this.Ua=new Zm,this.Wa={},this.Ga=new Map,this.za=ai.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function s$(n,e,t=!0){const r=aS(n);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await nS(r,e,t,!0),s}async function i$(n,e){const t=aS(n);await nS(t,e,!0,!1)}async function nS(n,e,t,r){const s=await A4(n.localStore,In(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return r&&(a=await o$(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&zR(n.remoteStore,s),a}async function o$(n,e,t,r,s){n.Ha=(d,p,g)=>async function(T,P,O,V){let x=P.view.Sa(O);x.ls&&(x=await hT(T.localStore,P.query,!1).then(({documents:b})=>P.view.Sa(b,x)));const M=V&&V.targetChanges.get(P.targetId),W=V&&V.targetMismatches.get(P.targetId)!=null,j=P.view.applyChanges(x,T.isPrimaryClient,M,W);return TT(T,P.targetId,j.Ma),j.snapshot}(n,d,p,g);const i=await hT(n.localStore,e,!0),o=new e$(e,i.gs),a=o.Sa(i.documents),l=Vl.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(a,n.isPrimaryClient,l);TT(n,t,u.Ma);const h=new t$(e,t,o);return n.ka.set(e,h),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),u.snapshot}async function a$(n,e,t){const r=me(n),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!Dh(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await lp(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&sg(r.remoteStore,s.targetId),hp(r,s.targetId)}).catch(fi)):(hp(r,s.targetId),await lp(r.localStore,s.targetId,!0))}async function l$(n,e){const t=me(n),r=t.ka.get(e),s=t.qa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),sg(t.remoteStore,r.targetId))}async function c$(n,e,t){const r=lS(n);try{const s=await function(o,a){const l=me(o),u=et.now(),h=a.reduce((g,v)=>g.add(v.key),Ee());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let v=cn(),T=Ee();return l.ds.getEntries(g,h).next(P=>{v=P,v.forEach((O,V)=>{V.isValidDocument()||(T=T.add(O))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,v)).next(P=>{d=P;const O=[];for(const V of a){const x=AB(V,d.get(V.key).overlayedDocument);x!=null&&O.push(new ys(V.key,x,WA(x.value.mapValue),un.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,O,a)}).next(P=>{p=P;const O=P.applyToLocalDocumentSet(d,T);return l.documentOverlayCache.saveOverlays(g,P.batchId,O)})}).then(()=>({batchId:p.batchId,changes:nR(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.Wa[o.currentUser.toKey()];u||(u=new tt(ge)),u=u.insert(a,l),o.Wa[o.currentUser.toKey()]=u}(r,s.batchId,t),await Fl(r,s.changes),await Ll(r.remoteStore)}catch(s){const i=cg(s,"Failed to persist write");t.reject(i)}}async function rS(n,e){const t=me(n);try{const r=await I4(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ka.get(i);o&&(ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?ie(o.Ba):s.removedDocuments.size>0&&(ie(o.Ba),o.Ba=!1))}),await Fl(t,r,e)}catch(r){await fi(r)}}function ET(n,e,t){const r=me(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ka.forEach((i,o)=>{const a=o.view.sa(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=me(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.ta)p.sa(a)&&(u=!0)}),u&&dg(l)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function u$(n,e,t){const r=me(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ka.get(e),i=s&&s.key;if(i){let o=new tt(te.comparator);o=o.insert(i,ot.newNoDocument(i,ae.min()));const a=Ee().add(i),l=new Oh(ae.min(),new Map,new tt(ge),o,a);await rS(r,l),r.$a=r.$a.remove(i),r.Ka.delete(e),mg(r)}else await lp(r.localStore,e,!1).then(()=>hp(r,e,t)).catch(fi)}async function h$(n,e){const t=me(n),r=e.batch.batchId;try{const s=await T4(t.localStore,e);iS(t,r,null),sS(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Fl(t,s)}catch(s){await fi(s)}}async function d$(n,e,t){const r=me(n);try{const s=await function(o,a){const l=me(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(ie(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);iS(r,e,t),sS(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Fl(r,s)}catch(s){await fi(s)}}function sS(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function iS(n,e,t){const r=me(n);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function hp(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ua.Sr(e).forEach(r=>{n.Ua.containsKey(r)||oS(n,r)})}function oS(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(sg(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ka.delete(t),mg(n))}function TT(n,e,t){for(const r of t)r instanceof eS?(n.Ua.addReference(r.key,e),f$(n,r)):r instanceof tS?(K(pg,"Document no longer in limbo: "+r.key),n.Ua.removeReference(r.key,e),n.Ua.containsKey(r.key)||oS(n,r.key)):re()}function f$(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(K(pg,"New document in limbo: "+t),n.Qa.add(r),mg(n))}function mg(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new te(Ve.fromString(e)),r=n.za.next();n.Ka.set(r,new n$(t)),n.$a=n.$a.insert(t,r),zR(n.remoteStore,new vr(In(xl(t.path)),r,"TargetPurposeLimboResolution",vn.ae))}}async function Fl(n,e,t){const r=me(n),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((a,l)=>{o.push(r.Ha(l,e,t).then(u=>{var h;if((u||t)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=ng.Yi(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.La.p_(s),await async function(l,u){const h=me(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>D.forEach(u,p=>D.forEach(p.Hi,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>D.forEach(p.Ji,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!_s(d))throw d;K(rg,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=h.Ts.get(p),v=g.snapshotVersion,T=g.withLastLimboFreeSnapshotVersion(v);h.Ts=h.Ts.insert(p,T)}}}(r.localStore,i))}async function p$(n,e){const t=me(n);if(!t.currentUser.isEqual(e)){K(pg,"User change. New user:",e.toKey());const r=await qR(t.localStore,e);t.currentUser=e,function(i,o){i.Ga.forEach(a=>{a.forEach(l=>{l.reject(new Y(F.CANCELLED,o))})}),i.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fl(t,r.Rs)}}function m$(n,e){const t=me(n),r=t.Ka.get(e);if(r&&r.Ba)return Ee().add(r.key);{let s=Ee();const i=t.qa.get(e);if(!i)return s;for(const o of i){const a=t.ka.get(o);s=s.unionWith(a.view.ba)}return s}}function aS(n){const e=me(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=rS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=m$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=u$.bind(null,e),e.La.p_=J4.bind(null,e.eventManager),e.La.Ja=Z4.bind(null,e.eventManager),e}function lS(n){const e=me(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=h$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=d$.bind(null,e),e}class pl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fh(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return jR(this.persistence,new $R,e.initialUser,this.serializer)}Xa(e){return new eg(Lh.ri,this.serializer)}Za(e){return new HR}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pl.provider={build:()=>new pl};class g$ extends pl{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ie(this.persistence.referenceDelegate instanceof Uu);const r=this.persistence.referenceDelegate.garbageCollector;return new MR(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new eg(r=>Uu.ri(r,t),this.serializer)}}class _$ extends pl{constructor(e,t,r){super(),this.ru=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ru.initialize(this,e),await lS(this.ru.syncEngine),await Ll(this.ru.remoteStore),await this.persistence.Ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}eu(e){return jR(this.persistence,new $R,e.initialUser,this.serializer)}tu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new MR(r,e.asyncQueue,t)}nu(e,t){const r=new wU(t,this.persistence);return new IU(e.asyncQueue,r)}Xa(e){const t=_4(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new tg(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,N4(),Kc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(e){return new HR}}class $u{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ET(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=p$.bind(null,this.syncEngine),await Q4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new X4}()}createDatastore(e){const t=Fh(e.databaseInfo.databaseId),r=function(i){return new D4(i)}(e.databaseInfo);return function(i,o,a,l){return new M4(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,a){return new F4(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>ET(this.syncEngine,t,0),function(){return pT.D()?new pT:new S4}())}createSyncEngine(e,t){return function(s,i,o,a,l,u,h){const d=new r$(s,i,o,a,l,u);return h&&(d.ja=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=me(s);K(li,"RemoteStore shutting down."),i.W_.add(5),await Ml(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}$u.provider={build:()=>new $u};/**
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
 */class gg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const hs="FirestoreClient";class y${constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=EA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{K(hs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(hs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=cg(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kd(n,e){n.asyncQueue.verifyOperationInProgress(),K(hs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qR(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function IT(n,e){n.asyncQueue.verifyOperationInProgress();const t=await v$(n);K(hs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>gT(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>gT(e.remoteStore,s)),n._onlineComponents=e}async function v$(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){K(hs,"Using user provided OfflineComponentProvider");try{await Kd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;io("Error using user provided cache. Falling back to memory cache: "+t),await Kd(n,new pl)}}else K(hs,"Using default OfflineComponentProvider"),await Kd(n,new g$(void 0));return n._offlineComponents}async function cS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(K(hs,"Using user provided OnlineComponentProvider"),await IT(n,n._uninitializedComponentsProvider._online)):(K(hs,"Using default OnlineComponentProvider"),await IT(n,new $u))),n._onlineComponents}function E$(n){return cS(n).then(e=>e.syncEngine)}async function ju(n){const e=await cS(n),t=e.eventManager;return t.onListen=s$.bind(null,e.syncEngine),t.onUnlisten=a$.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=i$.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=l$.bind(null,e.syncEngine),t}function T$(n,e,t={}){const r=new Xn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new gg({next:p=>{h.su(),o.enqueueAndForget(()=>hg(i,d));const g=p.docs.has(a);!g&&p.fromCache?u.reject(new Y(F.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&l&&l.source==="server"?u.reject(new Y(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new fg(xl(a.path),h,{includeMetadataChanges:!0,Ta:!0});return ug(i,d)}(await ju(n),n.asyncQueue,e,t,r)),r.promise}function I$(n,e,t={}){const r=new Xn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new gg({next:p=>{h.su(),o.enqueueAndForget(()=>hg(i,d)),p.fromCache&&l.source==="server"?u.reject(new Y(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new fg(a,h,{includeMetadataChanges:!0,Ta:!0});return ug(i,d)}(await ju(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function uS(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const wT=new Map;/**
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
 */function hS(n,e,t){if(!t)throw new Y(F.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function w$(n,e,t,r){if(e===!0&&r===!0)throw new Y(F.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function bT(n){if(!te.isDocumentKey(n))throw new Y(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function AT(n){if(te.isDocumentKey(n))throw new Y(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Bh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":re()}function Jn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Y(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bh(n);throw new Y(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function b$(n,e){if(e<=0)throw new Y(F.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */const dS="firestore.googleapis.com",RT=!0;class ST{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dS,this.ssl=RT}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:RT;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=DR;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<VR)throw new Y(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}w$("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $h{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ST({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ST(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hU;switch(r.type){case"firstParty":return new mU(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=wT.get(t);r&&(K("ComponentProvider","Removing Datastore"),wT.delete(t),r.terminate())}(this),Promise.resolve()}}function A$(n,e,t,r={}){var s;const i=(n=Jn(n,$h))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:n._getEmulatorOptions()}),a=`${e}:${t}`;i.host!==dS&&i.host!==a&&io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:a,ssl:!1,emulatorOptions:r});if(!to(l,o)&&(n._setSettings(l),r.mockUserToken)){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=Tt.MOCK_USER;else{u=bO(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new Y(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Tt(d)}n._authCredentials=new dU(new vA(u,h))}}/**
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
 */class kr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kr(this.firestore,e,this._query)}}class Gt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new is(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gt(this.firestore,e,this._key)}}class is extends kr{constructor(e,t,r){super(e,t,xl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gt(this.firestore,null,new te(e))}withConverter(e){return new is(this.firestore,e,this._path)}}function fS(n,e,...t){if(n=Zt(n),hS("collection","path",e),n instanceof $h){const r=Ve.fromString(e,...t);return AT(r),new is(n,null,r)}{if(!(n instanceof Gt||n instanceof is))throw new Y(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ve.fromString(e,...t));return AT(r),new is(n.firestore,null,r)}}function _g(n,e,...t){if(n=Zt(n),arguments.length===1&&(e=EA.newId()),hS("doc","path",e),n instanceof $h){const r=Ve.fromString(e,...t);return bT(r),new Gt(n,null,new te(r))}{if(!(n instanceof Gt||n instanceof is))throw new Y(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ve.fromString(e,...t));return bT(r),new Gt(n.firestore,n instanceof is?n.converter:null,new te(r))}}/**
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
 */const CT="AsyncQueue";class PT{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new KR(this,"async_queue_retry"),this.bu=()=>{const r=Kc();r&&K(CT,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const t=Kc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Kc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Xn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!_s(e))throw e;K(CT,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Wt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.Su=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const s=lg.createAndSchedule(this,e,t,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&re()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function kT(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Eo extends $h{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new PT,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new PT(e),this._firestoreClient=void 0,await e}}}function R$(n,e,t){t||(t=al);const r=Xp(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(to(i,e))return s;throw new Y(F.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new Y(F.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<VR)throw new Y(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function S$(n,e){const t=typeof n=="object"?n:_b(),r=typeof n=="string"?n:al,s=Xp(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=IO("firestore");i&&A$(s,...i)}return s}function jh(n){if(n._terminated)throw new Y(F.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||C$(n),n._firestoreClient}function C$(n){var e,t,r;const s=n._freezeSettings(),i=function(a,l,u,h){return new JU(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,uS(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new y$(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
 */class To{constructor(e){this._byteString=e}static fromBase64String(e){try{return new To(lt.fromBase64String(e))}catch(t){throw new Y(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new To(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class yg{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Y(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pS{constructor(e){this._methodName=e}}/**
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
 */class qh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Y(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Y(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */class vg{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const P$=/^__.*__$/;class k${constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ys(e,this.data,this.fieldMask,t,this.fieldTransforms):new Do(e,this.data,t,this.fieldTransforms)}}function mS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Eg{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Eg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Ku(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return qu(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(mS(this.Lu)&&P$.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class D${constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Fh(e)}ju(e,t,r,s=!1){return new Eg({Lu:e,methodName:t,zu:r,path:rt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gS(n){const e=n._freezeSettings(),t=Fh(n._databaseId);return new D$(n._databaseId,!!e.ignoreUndefinedProperties,t)}function N$(n,e,t,r,s,i={}){const o=n.ju(i.merge||i.mergeFields?2:0,e,t,s);vS("Data must be an object, but it was:",o,r);const a=_S(r,o);let l,u;if(i.merge)l=new En(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=O$(e,d,t);if(!o.contains(p))throw new Y(F.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);M$(h,p)||h.push(p)}l=new En(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new k$(new Xt(a),l,u)}function x$(n,e,t,r=!1){return Tg(t,n.ju(r?4:3,e))}function Tg(n,e){if(yS(n=Zt(n)))return vS("Unsupported field value:",e,n),_S(n,e);if(n instanceof pS)return function(r,s){if(!mS(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Tg(a,s.Uu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yB(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=et.fromDate(r);return{timestampValue:yo(s.serializer,i)}}if(r instanceof et){const i=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yo(s.serializer,i)}}if(r instanceof qh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof To)return{bytesValue:mR(s.serializer,r._byteString)};if(r instanceof Gt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ym(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof vg)return function(o,a){return{mapValue:{fields:{[$m]:{stringValue:jm},[ho]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Wu("VectorValues must only contain numeric values.");return Wm(a.serializer,u)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Bh(r)}`)}(n,e)}function _S(n,e){const t={};return VA(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pi(n,(r,s)=>{const i=Tg(s,e.qu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function yS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof et||n instanceof qh||n instanceof To||n instanceof Gt||n instanceof pS||n instanceof vg)}function vS(n,e,t){if(!yS(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Bh(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function O$(n,e,t){if((e=Zt(e))instanceof yg)return e._internalPath;if(typeof e=="string")return ES(n,e);throw qu("Field path arguments must be of type string or ",n,!1,void 0,t)}const V$=new RegExp("[~\\*/\\[\\]]");function ES(n,e,t){if(e.search(V$)>=0)throw qu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new yg(...e.split("."))._internalPath}catch{throw qu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function qu(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Y(F.INVALID_ARGUMENT,a+n+l)}function M$(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class TS{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new L$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Wh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class L$ extends TS{data(){return super.data()}}function Wh(n,e){return typeof e=="string"?ES(n,e):e instanceof yg?e._internalPath:e._delegate._internalPath}/**
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
 */function IS(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Y(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ig{}class wg extends Ig{}function wS(n,e,...t){let r=[];e instanceof Ig&&r.push(e),r=r.concat(t),function(i){const o=i.filter(l=>l instanceof Bl).length,a=i.filter(l=>l instanceof Ul).length;if(o>1||o>0&&a>0)throw new Y(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Ul extends wg{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ul(e,t,r)}_apply(e){const t=this._parse(e);return bS(e._query,t),new kr(e.firestore,e.converter,ep(e._query,t))}_parse(e){const t=gS(e.firestore);return function(i,o,a,l,u,h,d){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Y(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){NT(d,h);const v=[];for(const T of d)v.push(DT(l,i,T));p={arrayValue:{values:v}}}else p=DT(l,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||NT(d,h),p=x$(a,o,d,h==="in"||h==="not-in");return be.create(u,h,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Gd(n,e,t){const r=e,s=Wh("where",n);return Ul._create(s,r,t)}class Bl extends Ig{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Bl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Fe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)bS(o,l),o=ep(o,l)}(e._query,t),new kr(e.firestore,e.converter,ep(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function F$(...n){return n.forEach(e=>$$("and",e)),Bl._create("and",n)}class bg extends wg{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new bg(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new Y(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new hl(i,o)}(e._query,this._field,this._direction);return new kr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ko(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function U$(n,e="asc"){const t=e,r=Wh("orderBy",n);return bg._create(r,t)}class Ag extends wg{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ag(e,t,r)}_apply(e){return new kr(e.firestore,e.converter,xu(e._query,this._limit,this._limitType))}}function B$(n){return b$("limit",n),Ag._create("limit",n,"F")}function DT(n,e,t){if(typeof(t=Zt(t))=="string"){if(t==="")throw new Y(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!JA(e)&&t.indexOf("/")!==-1)throw new Y(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ve.fromString(t));if(!te.isDocumentKey(r))throw new Y(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cl(n,new te(r))}if(t instanceof Gt)return cl(n,t._key);throw new Y(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bh(t)}.`)}function NT(n,e){if(!Array.isArray(n)||n.length===0)throw new Y(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bS(n,e){const t=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Y(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function $$(n,e){if(!(e instanceof Ul||e instanceof Bl))throw new Y(F.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class j${convertValue(e,t="none"){switch(ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return pi(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[ho].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Je(o.doubleValue));return new vg(i)}convertGeoPoint(e){return new qh(Je(e.latitude),Je(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ph(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ol(e));default:return null}}convertTimestamp(e){const t=Ar(e);return new et(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ve.fromString(e);ie(AR(r));const s=new ri(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(t)||Wt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function q$(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class ma{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class AS extends TS{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Wh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Gc extends AS{data(e={}){return super.data(e)}}class RS{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ma(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Gc(this._firestore,this._userDataWriter,r.key,r,new ma(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Y(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Gc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ma(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Gc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ma(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:W$(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function W$(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
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
 */function SS(n){n=Jn(n,Gt);const e=Jn(n.firestore,Eo);return T$(jh(e),n._key).then(t=>PS(e,n,t))}class Rg extends j${constructor(e){super(),this.firestore=e}convertBytes(e){return new To(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Gt(this.firestore,null,t)}}function H$(n){n=Jn(n,kr);const e=Jn(n.firestore,Eo),t=jh(e),r=new Rg(e);return IS(n._query),I$(t,n._query).then(s=>new RS(e,r,n,s))}function CS(n,e,t){n=Jn(n,Gt);const r=Jn(n.firestore,Eo),s=q$(n.converter,e);return K$(r,[N$(gS(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,un.none())])}function Sg(n,...e){var t,r,s;n=Zt(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||kT(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(kT(e[o])){const d=e[o];e[o]=(t=d.next)===null||t===void 0?void 0:t.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(s=d.complete)===null||s===void 0?void 0:s.bind(d)}let l,u,h;if(n instanceof Gt)u=Jn(n.firestore,Eo),h=xl(n._key.path),l={next:d=>{e[o]&&e[o](PS(u,n,d))},error:e[o+1],complete:e[o+2]};else{const d=Jn(n,kr);u=Jn(d.firestore,Eo),h=d._query;const p=new Rg(u);l={next:g=>{e[o]&&e[o](new RS(u,p,d,g))},error:e[o+1],complete:e[o+2]},IS(n._query)}return function(p,g,v,T){const P=new gg(T),O=new fg(g,P,v);return p.asyncQueue.enqueueAndForget(async()=>ug(await ju(p),O)),()=>{P.su(),p.asyncQueue.enqueueAndForget(async()=>hg(await ju(p),O))}}(jh(u),h,a,l)}function K$(n,e){return function(r,s){const i=new Xn;return r.asyncQueue.enqueueAndForget(async()=>c$(await E$(r),s,i)),i.promise}(jh(n),e)}function PS(n,e,t){const r=t.docs.get(e._key),s=new Rg(n);return new AS(n,s,e._key,r,new ma(t.hasPendingWrites,t.fromCache),e.converter)}class G${constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Y$(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function z$(n){return new G$(n)}class Q${constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=$u.provider,this._offlineComponentProvider={build:t=>new _$(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}function Y$(n){return new Q$(void 0)}(function(e,t=!0){(function(s){Po=s})(gs),Zn(new Mn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Eo(new fU(r.getProvider("auth-internal")),new gU(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ri(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),dn(fE,pE,e),dn(fE,pE,"esm2017")})();/**
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
 */const kS="firebasestorage.googleapis.com",X$="storageBucket",J$=2*60*1e3,Z$=10*60*1e3;/**
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
 */class ir extends sr{constructor(e,t,r=0){super(zd(e),`Firebase Storage: ${t} (${zd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ir.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return zd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nr||(nr={}));function zd(n){return"storage/"+n}function e9(){const n="An unknown error occurred, please check the error payload for server response.";return new ir(nr.UNKNOWN,n)}function t9(){return new ir(nr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function n9(){return new ir(nr.CANCELED,"User canceled the upload/download.")}function r9(n){return new ir(nr.INVALID_URL,"Invalid URL '"+n+"'.")}function s9(n){return new ir(nr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function xT(n){return new ir(nr.INVALID_ARGUMENT,n)}function DS(){return new ir(nr.APP_DELETED,"The Firebase app was deleted.")}function i9(n){return new ir(nr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Pn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Pn.makeFromUrl(e,t)}catch{return new Pn(e,"")}if(r.path==="")return r;throw s9(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(M){M.path_=decodeURIComponent(M.path)}const h="v[A-Za-z0-9_]+",d=t.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${s}/o${p}`,"i"),v={bucket:1,path:3},T=t===kS?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",O=new RegExp(`^https?://${T}/${s}/${P}`,"i"),x=[{regex:a,indices:l,postModify:i},{regex:g,indices:v,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let M=0;M<x.length;M++){const W=x[M],j=W.regex.exec(e);if(j){const b=j[W.indices.bucket];let _=j[W.indices.path];_||(_=""),r=new Pn(b,_),W.postModify(r);break}}if(r==null)throw r9(e);return r}}class o9{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function a9(n,e,t){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...P){u||(u=!0,e.apply(null,P))}function d(P){s=setTimeout(()=>{s=null,n(g,l())},P)}function p(){i&&clearTimeout(i)}function g(P,...O){if(u){p();return}if(P){p(),h.call(null,P,...O);return}if(l()||o){p(),h.call(null,P,...O);return}r<64&&(r*=2);let x;a===1?(a=2,x=0):x=(r+Math.random())*1e3,d(x)}let v=!1;function T(P){v||(v=!0,p(),!u&&(s!==null?(P||(a=2),clearTimeout(s),d(0)):P||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,T(!0)},t),T}function l9(n){n(!1)}/**
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
 */function c9(n){return n!==void 0}function OT(n,e,t,r){if(r<e)throw xT(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw xT(`Invalid value for '${n}'. Expected ${t} or less.`)}function u9(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Wu;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Wu||(Wu={}));/**
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
 */function h9(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class d9{constructor(e,t,r,s,i,o,a,l,u,h,d,p=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Sc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Wu.NO_ERROR,l=i.getStatus();if(!a||h9(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Wu.ABORT;r(!1,new Sc(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Sc(u,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());c9(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=e9();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?DS():n9();o(l)}else{const l=t9();o(l)}};this.canceled_?t(!1,new Sc(!1,null,!0)):this.backoffId_=a9(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&l9(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Sc{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function f9(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function p9(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function m9(n,e){e&&(n["X-Firebase-GMPID"]=e)}function g9(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function _9(n,e,t,r,s,i,o=!0){const a=u9(n.urlParams),l=n.url+a,u=Object.assign({},n.headers);return m9(u,e),f9(u,t),p9(u,i),g9(u,r),new d9(l,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
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
 */function y9(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function v9(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Hu{constructor(e,t){this._service=e,t instanceof Pn?this._location=t:this._location=Pn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Hu(e,t)}get root(){const e=new Pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return v9(this._location.path)}get storage(){return this._service}get parent(){const e=y9(this._location.path);if(e===null)return null;const t=new Pn(this._location.bucket,e);return new Hu(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw i9(e)}}function VT(n,e){const t=e==null?void 0:e[X$];return t==null?null:Pn.makeFromBucketSpec(t,n)}class E9{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=kS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=J$,this._maxUploadRetryTime=Z$,this._requests=new Set,s!=null?this._bucket=Pn.makeFromBucketSpec(s,this._host):this._bucket=VT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pn.makeFromBucketSpec(this._url,e):this._bucket=VT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){OT("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){OT("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(on(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hu(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new o9(DS());{const o=_9(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const MT="@firebase/storage",LT="0.13.7";/**
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
 */const T9="storage";function I9(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new E9(t,r,s,e,gs)}function w9(){Zn(new Mn(T9,I9,"PUBLIC").setMultipleInstances(!0)),dn(MT,LT,""),dn(MT,LT,"esm2017")}w9();const Qd=new WeakMap;function NS(n,e){return Qd.has(e)||Qd.set(e,{f:{},r:{},s:{},u:{}}),Qd.get(e)}function b9(n,e,t,r){if(!n)return t;const[s,i]=xS(n);if(!s)return t;const o=NS(void 0,r)[s]||{},a=e||i;return a&&a in o?o[a]:t}function A9(n,e,t,r){if(!n)return;const[s,i]=xS(n);if(!s)return;const o=NS(void 0,r)[s],a=e||i;if(a)return t.then(l=>{o[a]=l}).catch(Wn),a}function xS(n){return _L(n)||yL(n)?["f",n.path]:vL(n)?["r",n.toString()]:EL(n)?["s",n.toString()]:[]}const Yd=new WeakMap;function R9(n,e,t){const r=Al();Yd.has(r)||Yd.set(r,new Map);const s=Yd.get(r),i=A9(e,t,n,r);return i&&s.set(i,n),i?()=>s.delete(i):Wn}const S9={toFirestore(n){return n},fromFirestore(n,e){return n.exists()?Object.defineProperties(n.data(e),{id:{value:n.id}}):null}};function dp(n,e,t,r){if(!mL(n))return[n,{}];const s=[{},{}],i=Object.keys(t).reduce((a,l)=>{const u=t[l];return a[u.path]=u.data(),a},{});function o(a,l,u,h){l=l||{};const[d,p]=h;Object.getOwnPropertyNames(a).forEach(g=>{const v=Object.getOwnPropertyDescriptor(a,g);v&&!v.enumerable&&Object.defineProperty(d,g,v)});for(const g in a){const v=a[g];if(v==null||v instanceof Date||v instanceof et||v instanceof qh)d[g]=v;else if(hm(v)){const T=u+g;d[g]=T in t?l[g]:v.path,p[T]=v.converter?v:v.withConverter(r.converter)}else if(Array.isArray(v)){d[g]=Array(v.length);for(let T=0;T<v.length;T++){const P=v[T];P&&P.path in i&&(d[g][T]=i[P.path])}o(v,l[g]||d[g],u+g+".",[d[g],p])}else ui(v)?(d[g]={},o(v,l[g],u+g+".",[d[g],p])):d[g]=v}}return o(n,e,"",s),s}const Cg={reset:!1,wait:!0,maxRefDepth:2,converter:S9,snapshotOptions:{serverTimestamps:"estimate"}};function Ku(n){for(const e in n)n[e].unsub()}function fp(n,e,t,r,s,i,o,a,l){const[u,h]=dp(r.data(n.snapshotOptions),um(e,t),s,n);i.set(e,t,u),pp(n,e,t,s,h,i,o,a,l)}function C9({ref:n,target:e,path:t,depth:r,resolve:s,reject:i,ops:o},a){const l=Object.create(null);let u=Wn;return a.once?SS(n).then(h=>{h.exists()?fp(a,e,t,h,l,o,r,s,i):(o.set(e,t,null),s())}).catch(i):u=Sg(n,h=>{h.exists()?fp(a,e,t,h,l,o,r,s,i):(o.set(e,t,null),s())},i),()=>{u(),Ku(l)}}function pp(n,e,t,r,s,i,o,a,l){const u=Object.keys(s);if(Object.keys(r).filter(T=>u.indexOf(T)<0).forEach(T=>{r[T].unsub(),delete r[T]}),!u.length||++o>n.maxRefDepth)return a(t);let d=0;const p=u.length,g=Object.create(null);function v(T){T in g&&++d>=p&&a(t)}u.forEach(T=>{const P=r[T],O=s[T],V=`${t}.${T}`;if(g[V]=!0,P)if(P.path!==O.path)P.unsub();else return;r[T]={data:()=>um(e,V),unsub:C9({ref:O,target:e,path:V,depth:o,ops:i,resolve:v.bind(null,V),reject:l},n),path:O.path}})}function P9(n,e,t,r,s,i){const o=Object.assign({},Cg,i),{snapshotListenOptions:a,snapshotOptions:l,wait:u,once:h}=o,d="value";let p=ct(u?[]:n.value);u||t.set(n,d,[]);const g=r;let v,T=Wn;const P=[],O={added:({newIndex:x,doc:M})=>{P.splice(x,0,Object.create(null));const W=P[x],[j,b]=dp(M.data(l),void 0,W,o);t.add(ur(p),x,j),pp(o,p,`${d}.${x}`,W,b,t,0,r.bind(null,M),s)},modified:({oldIndex:x,newIndex:M,doc:W})=>{const j=ur(p),b=P[x],_=j[x],[E,I]=dp(W.data(l),_,b,o);P.splice(M,0,b),t.remove(j,x),t.add(j,M,E),pp(o,p,`${d}.${M}`,b,I,t,0,r,s)},removed:({oldIndex:x})=>{const M=ur(p);t.remove(M,x),Ku(P.splice(x,1)[0])}};function V(x){const M=x.docChanges(a);if(!v&&M.length){v=!0;let W=0;const j=M.length,b=Object.create(null);for(let _=0;_<j;_++)b[M[_].doc.id]=!0;r=_=>{_&&_.id in b&&++W>=j&&(u&&(t.set(n,d,ur(p)),p=n),g(ur(p)),r=Wn)}}M.forEach(W=>{O[W.type](W)}),M.length||(u&&(t.set(n,d,ur(p)),p=n),r(ur(p)))}return h?H$(e).then(V).catch(s):T=Sg(e,V,s),x=>{if(T(),x){const M=typeof x=="function"?x():[];t.set(n,d,M)}P.forEach(Ku)}}function k9(n,e,t,r,s,i){const o=Object.assign({},Cg,i),a="value",l=Object.create(null);r=TL(r,()=>um(n,a));let u=Wn;function h(d){d.exists()?fp(o,n,a,d,l,t,0,r,s):(t.set(n,a,null),r(null))}return o.once?SS(e).then(h).catch(s):u=Sg(e,h,s),d=>{if(u(),d){const p=typeof d=="function"?d():null;t.set(n,a,p)}Ku(l)}}const FT=Symbol();function Pg(n,e){let t=Wn;const r=Object.assign({},Cg,e),s=ur(n),i=r.target||ct();wL()&&(r.once=!0);const o=b9(s,r.ssrKey,FT,Al()),a=o!==FT;a&&(i.value=o);let l=!a;const u=ct(!1),h=ct(),d=Dn(),p=Tp();let g=Wn;function v(){let O=ur(n);const V=new Promise((x,M)=>{if(t(r.reset),!O)return t=Wn,x(null);u.value=l,l=!0,O.converter||(O=O.withConverter(r.converter)),t=(hm(O)?k9:P9)(i,O,D9,x,M,r)}).catch(x=>(d.value===V&&(h.value=x),Promise.reject(x))).finally(()=>{d.value===V&&(u.value=!1)});d.value=V}let T=Wn;(Ze(n)||typeof n=="function")&&(T=hn(n,v)),v(),s&&(g=R9(d.value,s,r.ssrKey)),yl()&&VI(()=>d.value),p&&Ip(P);function P(O=r.reset){T(),g(),t(O)}return Object.defineProperties(i,{error:{get:()=>h},data:{get:()=>i},pending:{get:()=>u},promise:{get:()=>d},stop:{get:()=>P}})}const D9={set:(n,e,t)=>fL(n,e,t),add:(n,e,t)=>n.splice(e,0,t),remove:(n,e)=>n.splice(e,1)};function OS(n,e){return Pg(n,{target:ct([]),...e})}function VS(n,e){return Pg(n,e)}const ia=new WeakMap;function N9(n,e,t){e&&e[n]&&(e[n](t),delete e[n])}const x9={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},O9=function(e,t,r){const s=Object.assign({},x9,t),{bindName:i,unbindName:o}=s,a=e.config.globalProperties;a[o]=function(u,h){N9(u,ia.get(this),h),delete this.$firestoreRefs[u]},a[i]=function(u,h,d){const p=Object.assign({},s,d),g=dI(this.$data,u);ia.has(this)||ia.set(this,{});const v=ia.get(this);v[u]&&v[u](p.reset);const T=Zb(r||Al(),e).run(()=>gl()),{promise:P,stop:O}=e.runWithContext(()=>T.run(()=>Pg(h,{target:g,...p}))),V=x=>{O(x),T.stop()};return v[u]=V,this.$firestoreRefs[u]=h,P.value},e.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:l}=this.$options,u=typeof l=="function"?l.call(this):l;if(u)for(const h in u)this[i](h,u[h],s)},beforeUnmount(){const l=ia.get(this);if(l)for(const u in l)l[u]();this.$firestoreRefs=null}})};function V9(n){return(e,t)=>O9(t,n,e)}function M9(n){return L9({initialUser:n,dependencies:{popupRedirectResolver:OM,persistence:[KV,OV,jb]}})}const MS=Symbol("VueFireAuth");function L9({dependencies:n,initialUser:e}){return(t,r)=>{const[s,i]=F9(t,r,e,n);AL(s,i)}}function F9(n,e,t,r,s=AV(n,r)){const i=Zb(n,e).run(()=>ct(t));return e0.set(n,i),e.provide(MS,s),[i,s]}function G6(n){return dL?Ye(MS):null}function U9(n,{firebaseApp:e,modules:t=[]}){n.provide(Jb,e);for(const r of t)r(e,n)}const Hh=aO({history:Ox("/ejc-hub/"),routes:uO(hO)});Hh.onError((n,e)=>{var t,r;(r=(t=n==null?void 0:n.message)==null?void 0:t.includes)!=null&&r.call(t,"Failed to fetch dynamically imported module")?localStorage.getItem("vuetify:dynamic-reload")?console.error("Dynamic import error, reloading page did not fix it",n):(console.log("Reloading page to fix dynamic import error"),localStorage.setItem("vuetify:dynamic-reload","true"),location.assign(e.fullPath)):console.error(n)});Hh.isReady().then(()=>{localStorage.removeItem("vuetify:dynamic-reload")});Hh.beforeEach(async n=>{if(n.meta.requiresAuth&&!await bL())return{path:"/"}});const kg=gb({apiKey:"AIzaSyADpflgJR7JUtpzPtBlfC8Rms5hUNTliMc",authDomain:"ejc-wants-and-haves.firebaseapp.com",projectId:"ejc-wants-and-haves",storageBucket:"ejc-wants-and-haves.firebasestorage.app",messagingSenderId:"482707728138",appId:"1:482707728138:web:610c874d53a2a9acc2bcf3"});R$(kg,{localCache:z$()});const $l=S$(kg);function B9(n){n.use(U9,{firebaseApp:kg,modules:[M9(),V9({once:!0})]})}const LS="pokemon-tcgp-cards",FS="pokemon-tcgp-lists",$9="pokemon-tcgp-players";function Dg(n){return _g($l,$9,n)}function UT(n){return _g($l,LS,n)}function US(n){return _g($l,FS,n)}const BS={toFirestore:n=>({list:n}),fromFirestore:(n,e)=>{const t=n.data(e);return t.player=t.player.id,t.haves=t.haves.map(r=>r.id),t.wants=t.wants.map(r=>r.id),t}};async function z6(n){const e=n.haves.map(UT),t=n.wants.map(UT);await CS(US(n.player),{...n,player:Dg(n.player),wants:t,haves:e})}async function Q6(n){const t=await VS(US(n).withConverter(BS),{once:!0}).promise.value;return t||null}async function Y6(){return await OS(wS(fS($l,FS)).withConverter(BS),{once:!0}).promise.value}function j9({number:n,pageSize:e,order:t,expansion:r,rarity:s}){const i=[],o=[];n&&o.push(Gd("number","==",n)),r!==void 0&&o.push(Gd("expansion","in",r)),s!==void 0&&o.push(Gd("rarity","in",s)),t!==void 0&&i.push(U$(t)),e&&i.push(B$(e));const a=o.length>1?F$(...o):o.pop(),l=a?[a,...i]:i;return OS(wS(fS($l,LS),...l),{once:!0})}async function X6(n){try{return await j9(n).promise.value}catch(e){return console.error(e),[]}}async function J6(n){const t=await VS(Dg(n),{once:!0}).promise.value;return t||null}async function Z6(n){await CS(Dg(n.id),n)}function q9(n){n.use($N).use(Hh).use(Kw),B9(n)}const W9=ms({...TD(),...LN({fullHeight:!0}),...NN()},"VApp"),H9=Aw()({name:"VApp",props:W9(),setup(n,e){let{slots:t}=e;const r=VN(n),{layoutClasses:s,getLayoutItem:i,items:o,layoutRef:a}=UN(n),{rtlClasses:l}=Pw();return SD(()=>{var u;return He("div",{ref:a,class:["v-application",r.themeClasses.value,s.value,l.value,n.class],style:[n.style]},[He("div",{class:"v-application__wrap"},[(u=t.default)==null?void 0:u.call(t)])])}),{getLayoutItem:i,items:o,theme:r}}}),K9=eh({__name:"App",setup(n){return(e,t)=>{const r=hP("router-view");return JI(),ew(H9,null,{default:vI(()=>[He(r)]),_:1})}}}),$S=xk(K9);q9($S);$S.mount("#app");export{PN as $,cc as A,vw as B,hn as C,Vp as D,rh as E,sn as F,zr as G,CD as H,Mk as I,sh as J,F6 as K,M6 as L,rw as M,N6 as N,r6 as O,Z9 as P,X9 as Q,Ze as R,bC as S,L6 as T,Q6 as U,J6 as V,hP as W,e6 as X,El as Y,G9 as Z,t6 as _,W6 as a,ml as a$,A6 as a0,$k as a1,Bk as a2,i6 as a3,jk as a4,y6 as a5,zk as a6,bL as a7,z6 as a8,X6 as a9,Y9 as aA,p6 as aB,h6 as aC,Y6 as aD,U6 as aE,Ep as aF,oP as aG,gw as aH,l6 as aI,x6 as aJ,c6 as aK,Cp as aL,Z6 as aM,u6 as aN,_6 as aO,m6 as aP,gl as aQ,Yk as aR,Yt as aS,z9 as aT,ou as aU,_w as aV,os as aW,E6 as aX,I6 as aY,lh as aZ,k6 as a_,P6 as aa,V6 as ab,ly as ac,D6 as ad,MN as ae,qp as af,Ye as ag,DI as ah,Zu as ai,Kk as aj,Jt as ak,Gk as al,Tr as am,w6 as an,f6 as ao,Ip as ap,o6 as aq,rr as ar,d6 as as,Qk as at,b6 as au,T6 as av,nw as aw,we as ax,iP as ay,R6 as az,$6 as b,ID as b0,Dp as b1,xI as b2,aa as b3,n6 as b4,wn as b5,g6 as b6,dD as b7,S6 as b8,pr as b9,ED as ba,Np as bb,O6 as bc,Hk as bd,oh as be,s6 as bf,Q9 as bg,v6 as bh,a6 as bi,J9 as c,eh as d,ew as e,an as f,He as g,HP as h,q6 as i,j6 as j,Aw as k,SD as l,TD as m,NN as n,JI as o,ms as p,VN as q,ct as r,B6 as s,dI as t,G6 as u,Pw as v,vI as w,Dn as x,de as y,C6 as z};
