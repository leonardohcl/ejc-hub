import{aZ as U,g as P,L as E,aW as Ye,aU as ke,aY as Ke,p as y,a_ as Qe,P as Ge,d as v,aa as N,au as we,a$ as de,b0 as Je,b1 as Ze,b2 as et,aQ as L,Q as h,r as ne,O as ae,b3 as tt,N as Y,h as I,b4 as nt,b5 as at,c as u,M as se,af as xe,aX as st,T as Pe,m as Ee,b6 as ie,ax as re,s as z,w as q,aD as it,n as Le,o as Te,a5 as ve,aj as rt,$ as $e,a6 as ot,B as fe,a as oe,u as lt,R as me,I as Be,b7 as ut,b8 as ge,ar as he,ah as ct,a9 as dt,aq as vt,b9 as be}from"./index-eBfPJ-pN.js";const Ve=["top","bottom"],ft=["start","end","left","right"];function mt(e,t){let[n,a]=e.split(" ");return a||(a=U(Ve,n)?"start":U(ft,n)?"top":"center"),{side:ye(n,t),align:ye(a,t)}}function ye(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function Qt(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Gt(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Jt(e){return{side:e.align,align:e.side}}function Zt(e){return U(Ve,e.side)?"y":"x"}function en(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return P()({name:n??Ye(Ke(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...E()},setup(a,i){let{slots:s}=i;return()=>{var r;return ke(a.tag,{class:[e,a.class],style:a.style},(r=s.default)==null?void 0:r.call(s))}}})}const gt=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ht=P(!1)({name:"VDefaultsProvider",props:gt(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:i,reset:s,root:r,scoped:o}=Qe(e);return Ge(a,{reset:s,root:r,scoped:o,disabled:i}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}});function le(e){return we(()=>{const t=[],n={};if(e.value.background)if(de(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&Je(e.value.background)){const a=Ze(e.value.background);if(a.a==null||a.a===1){const i=et(a);n.color=i,n.caretColor=i}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(de(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function Re(e,t){const n=v(()=>({text:N(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:i}=le(n);return{textColorClasses:a,textColorStyles:i}}function X(e,t){const n=v(()=>({background:N(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:i}=le(n);return{backgroundColorClasses:a,backgroundColorStyles:i}}const bt=["x-small","small","default","large","x-large"],ze=y({size:{type:[String,Number],default:"default"}},"size");function Ne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return we(()=>{let n,a;return U(bt,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:h(e.size),height:h(e.size)}),{sizeClasses:n,sizeStyles:a}})}const Q=y({tag:{type:String,default:"div"}},"tag"),yt=y({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:xe,...E(),...ze(),...Q({tag:"i"}),...se()},"VIcon"),Ct=P()({name:"VIcon",props:yt(),setup(e,t){let{attrs:n,slots:a}=t;const i=ne(),{themeClasses:s}=ae(e),{iconData:r}=tt(v(()=>i.value||e.icon)),{sizeClasses:o}=Ne(e),{textColorClasses:l,textColorStyles:c}=Re(Y(e,"color"));return I(()=>{var b,f;const d=(b=a.default)==null?void 0:b.call(a);d&&(i.value=(f=nt(d).filter(_=>_.type===at&&_.children&&typeof _.children=="string")[0])==null?void 0:f.children);const g=!!(n.onClick||n.onClickOnce);return u(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",s.value,o.value,l.value,{"v-icon--clickable":g,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},c.value,e.style],role:g?"button":void 0,"aria-hidden":!g,tabindex:g?e.disabled?-1:0:void 0},{default:()=>[d]})}),{}}}),Ie=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Oe(e){return{dimensionStyles:v(()=>{const n={},a=h(e.height),i=h(e.maxHeight),s=h(e.maxWidth),r=h(e.minHeight),o=h(e.minWidth),l=h(e.width);return a!=null&&(n.height=a),i!=null&&(n.maxHeight=i),s!=null&&(n.maxWidth=s),r!=null&&(n.minHeight=r),o!=null&&(n.minWidth=o),l!=null&&(n.width=l),n})}}function _t(e){return{aspectStyles:v(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const Fe=y({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...E(),...Ie()},"VResponsive"),Ce=P()({name:"VResponsive",props:Fe(),setup(e,t){let{slots:n}=t;const{aspectStyles:a}=_t(e),{dimensionStyles:i}=Oe(e);return I(()=>{var s;return u("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[u("div",{class:"v-responsive__sizer",style:a.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&u("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),ue=y({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function ce(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{roundedClasses:v(()=>{const a=N(e)?e.value:e.rounded,i=N(e)?e.value:e.tile,s=[];if(a===!0||a==="")s.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const r of String(a).split(" "))s.push(`rounded-${r}`);else(i||a===!1)&&s.push("rounded-0");return s})}}const St=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),M=(e,t)=>{let{slots:n}=t;const{transition:a,disabled:i,group:s,...r}=e,{component:o=s?st:Pe,...l}=typeof a=="object"?a:{};return ke(o,Ee(typeof a=="string"?{name:i?"":a}:l,typeof a=="string"?{}:Object.fromEntries(Object.entries({disabled:i,group:s}).filter(c=>{let[d,g]=c;return g!==void 0})),r),n)};function pt(e,t){if(!ie)return;const n=t.modifiers||{},a=t.value,{handler:i,options:s}=typeof a=="object"?a:{handler:a,options:{}},r=new IntersectionObserver(function(){var g;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(g=e._observe)==null?void 0:g[t.instance.$.uid];if(!c)return;const d=o.some(b=>b.isIntersecting);i&&(!n.quiet||c.init)&&(!n.once||d||c.init)&&i(d,o,l),d&&n.once?Ae(e,t):c.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Ae(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const kt={mounted:pt,unmounted:Ae},wt=y({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Fe(),...E(),...ue(),...St()},"VImg"),xt=P()({name:"VImg",directives:{intersect:kt},props:wt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const{backgroundColorClasses:i,backgroundColorStyles:s}=X(Y(e,"color")),{roundedClasses:r}=ce(e),o=re("VImg"),l=z(""),c=ne(),d=z(e.eager?"loading":"idle"),g=z(),b=z(),f=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),_=v(()=>f.value.aspect||g.value/b.value||0);q(()=>e.src,()=>{w(d.value!=="idle")}),q(_,(m,C)=>{!m&&C&&c.value&&p(c.value)}),it(()=>w());function w(m){if(!(e.eager&&m)&&!(ie&&!m&&!e.eager)){if(d.value="loading",f.value.lazySrc){const C=new Image;C.src=f.value.lazySrc,p(C,null)}f.value.src&&Le(()=>{var C;n("loadstart",((C=c.value)==null?void 0:C.currentSrc)||f.value.src),setTimeout(()=>{var k;if(!o.isUnmounted)if((k=c.value)!=null&&k.complete){if(c.value.naturalWidth||T(),d.value==="error")return;_.value||p(c.value,null),d.value==="loading"&&H()}else _.value||p(c.value),W()})})}}function H(){var m;o.isUnmounted||(W(),p(c.value),d.value="loaded",n("load",((m=c.value)==null?void 0:m.currentSrc)||f.value.src))}function T(){var m;o.isUnmounted||(d.value="error",n("error",((m=c.value)==null?void 0:m.currentSrc)||f.value.src))}function W(){const m=c.value;m&&(l.value=m.currentSrc||m.src)}let x=-1;Te(()=>{clearTimeout(x)});function p(m){let C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const k=()=>{if(clearTimeout(x),o.isUnmounted)return;const{naturalHeight:R,naturalWidth:j}=m;R||j?(g.value=j,b.value=R):!m.complete&&d.value==="loading"&&C!=null?x=window.setTimeout(k,C):(m.currentSrc.endsWith(".svg")||m.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,b.value=1)};k()}const $=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),D=()=>{var k;if(!f.value.src||d.value==="idle")return null;const m=u("img",{class:["v-img__img",$.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:f.value.src,srcset:f.value.srcset,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:c,onLoad:H,onError:T},null),C=(k=a.sources)==null?void 0:k.call(a);return u(M,{transition:e.transition,appear:!0},{default:()=>[ve(C?u("picture",{class:"v-img__picture"},[C,m]):m,[[ot,d.value==="loaded"]])]})},B=()=>u(M,{transition:e.transition},{default:()=>[f.value.lazySrc&&d.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",$.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:f.value.lazySrc,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),G=()=>a.placeholder?u(M,{transition:e.transition,appear:!0},{default:()=>[(d.value==="loading"||d.value==="error"&&!a.error)&&u("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,V=()=>a.error?u(M,{transition:e.transition,appear:!0},{default:()=>[d.value==="error"&&u("div",{class:"v-img__error"},[a.error()])]}):null,J=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,O=z(!1);{const m=q(_,C=>{C&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{O.value=!0})}),m())})}return I(()=>{const m=Ce.filterProps(e);return ve(u(Ce,Ee({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!O.value},i.value,r.value,e.class],style:[{width:h(e.width==="auto"?g.value:e.width)},s.value,e.style]},m,{aspectRatio:_.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>u($e,null,[u(D,null,null),u(B,null,null),u(J,null,null),u(G,null,null),u(V,null,null)]),default:a.default}),[[rt("intersect"),{handler:w,options:e.options},null,{once:!0}]])}),{currentSrc:l,image:c,state:d,naturalWidth:g,naturalHeight:b}}}),Pt=y({border:[Boolean,Number,String]},"border");function Et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{borderClasses:v(()=>{const a=N(e)?e.value:e.border,i=[];if(a===!0||a==="")i.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))i.push(`border-${s}`);return i})}}const Lt=[null,"default","comfortable","compact"],Tt=y({density:{type:String,default:"default",validator:e=>Lt.includes(e)}},"density");function $t(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{densityClasses:v(()=>`${t}--density-${e.density}`)}}const Bt=["elevated","flat","tonal","outlined","text","plain"];function Vt(e,t){return u($e,null,[e&&u("span",{key:"overlay",class:`${t}__overlay`},null),u("span",{key:"underlay",class:`${t}__underlay`},null)])}const Rt=y({color:String,variant:{type:String,default:"elevated",validator:e=>Bt.includes(e)}},"variant");function zt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();const n=v(()=>{const{variant:s}=fe(e);return`${t}--variant-${s}`}),{colorClasses:a,colorStyles:i}=le(v(()=>{const{variant:s,color:r}=fe(e);return{[["elevated","flat"].includes(s)?"background":"text"]:r}}));return{colorClasses:a,colorStyles:i,variantClasses:n}}const Nt=y({start:Boolean,end:Boolean,icon:xe,image:String,text:String,...Pt(),...E(),...Tt(),...ue(),...ze(),...Q(),...se(),...Rt({variant:"flat"})},"VAvatar"),tn=P()({name:"VAvatar",props:Nt(),setup(e,t){let{slots:n}=t;const{themeClasses:a}=ae(e),{borderClasses:i}=Et(e),{colorClasses:s,colorStyles:r,variantClasses:o}=zt(e),{densityClasses:l}=$t(e),{roundedClasses:c}=ce(e),{sizeClasses:d,sizeStyles:g}=Ne(e);return I(()=>u(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,i.value,s.value,l.value,c.value,d.value,o.value,e.class],style:[r.value,g.value,e.style]},{default:()=>[n.default?u(ht,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[n.default()]}):e.image?u(xt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?u(Ct,{key:"icon",icon:e.icon},null):e.text,Vt(!1,"v-avatar")]})),{}}}),nn=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function an(e){return{elevationClasses:v(()=>{const n=N(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}function It(e,t){const n=ne(),a=z(!1);if(ie){const i=new IntersectionObserver(s=>{a.value=!!s.find(r=>r.isIntersecting)},t);Te(()=>{i.disconnect()}),q(n,(s,r)=>{r&&(i.unobserve(r),a.value=!1),s&&i.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const _e={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Ot=y({location:String},"location");function Ft(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=oe();return{locationStyles:v(()=>{if(!e.location)return{};const{side:s,align:r}=mt(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function o(c){return n?n(c):0}const l={};return s!=="center"&&(t?l[_e[s]]=`calc(100% - ${o(s)}px)`:l[s]=0),r!=="center"?t?l[_e[r]]=`calc(100% - ${o(r)}px)`:l[r]=0:(s==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),l})}}const At=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...E(),...Ot({location:"top"}),...ue(),...Q(),...se()},"VProgressLinear"),Ht=P()({name:"VProgressLinear",props:At(),emits:{"update:modelValue":e=>!0},setup(e,t){var O;let{slots:n}=t;const a=lt(e,"modelValue"),{isRtl:i,rtlClasses:s}=oe(),{themeClasses:r}=ae(e),{locationStyles:o}=Ft(e),{textColorClasses:l,textColorStyles:c}=Re(e,"color"),{backgroundColorClasses:d,backgroundColorStyles:g}=X(v(()=>e.bgColor||e.color)),{backgroundColorClasses:b,backgroundColorStyles:f}=X(v(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:_,backgroundColorStyles:w}=X(e,"color"),{roundedClasses:H}=ce(e),{intersectionRef:T,isIntersecting:W}=It(),x=v(()=>parseFloat(e.max)),p=v(()=>parseFloat(e.height)),$=v(()=>me(parseFloat(e.bufferValue)/x.value*100,0,100)),D=v(()=>me(parseFloat(a.value)/x.value*100,0,100)),B=v(()=>i.value!==e.reverse),G=v(()=>e.indeterminate?"fade-transition":"slide-x-transition"),V=Be&&((O=window.matchMedia)==null?void 0:O.call(window,"(forced-colors: active)").matches);function J(m){if(!T.value)return;const{left:C,right:k,width:R}=T.value.getBoundingClientRect(),j=B.value?R-m.clientX+(k-R):m.clientX-C;a.value=Math.round(j/R*x.value)}return I(()=>u(e.tag,{ref:T,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&W.value,"v-progress-linear--reverse":B.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},H.value,r.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?h(p.value):0,"--v-progress-linear-height":h(p.value),...e.absolute?o.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:Math.min(parseFloat(a.value),x.value),onClick:e.clickable&&J},{default:()=>[e.stream&&u("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...c.value,[B.value?"left":"right"]:h(-p.value),borderTop:`${h(p.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${h(p.value/4)})`,width:h(100-$.value,"%"),"--v-progress-linear-stream-to":h(p.value*(B.value?1:-1))}},null),u("div",{class:["v-progress-linear__background",V?void 0:d.value],style:[g.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),u("div",{class:["v-progress-linear__buffer",V?void 0:b.value],style:[f.value,{opacity:parseFloat(e.bufferOpacity),width:h($.value,"%")}]},null),u(Pe,{name:G.value},{default:()=>[e.indeterminate?u("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(m=>u("div",{key:m,class:["v-progress-linear__indeterminate",m,V?void 0:_.value],style:w.value},null))]):u("div",{class:["v-progress-linear__determinate",V?void 0:_.value],style:[w.value,{width:h(D.value,"%")}]},null)]}),n.default&&u("div",{class:"v-progress-linear__content"},[n.default({value:D.value,buffer:$.value})])]})),{}}}),sn=y({loading:[Boolean,String]},"loader");function rn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{loaderClasses:v(()=>({[`${t}--loading`]:e.loading}))}}function on(e,t){var a;let{slots:n}=t;return u("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||u(Ht,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Wt=["static","relative","fixed","absolute","sticky"],ln=y({position:{type:String,validator:e=>Wt.includes(e)}},"position");function un(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{positionClasses:v(()=>e.position?`${t}--${e.position}`:void 0)}}function Dt(){const e=re("useRoute");return v(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function cn(){var e,t;return(t=(e=re("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function dn(e,t){var g,b;const n=ut("RouterLink"),a=v(()=>!!(e.href||e.to)),i=v(()=>(a==null?void 0:a.value)||ge(t,"click")||ge(e,"click"));if(typeof n=="string"||!("useLink"in n)){const f=Y(e,"href");return{isLink:a,isClickable:i,href:f,linkProps:he({href:f})}}const s=v(()=>({...e,to:Y(()=>e.to||"")})),r=n.useLink(s.value),o=v(()=>e.to?r:void 0),l=Dt(),c=v(()=>{var f,_,w;return o.value?e.exact?l.value?((w=o.value.isExactActive)==null?void 0:w.value)&&ct(o.value.route.value.query,l.value.query):((_=o.value.isExactActive)==null?void 0:_.value)??!1:((f=o.value.isActive)==null?void 0:f.value)??!1:!1}),d=v(()=>{var f;return e.to?(f=o.value)==null?void 0:f.route.value.href:e.href});return{isLink:a,isClickable:i,isActive:c,route:(g=o.value)==null?void 0:g.route,navigate:(b=o.value)==null?void 0:b.navigate,href:d,linkProps:he({href:d,"aria-current":v(()=>c.value?"page":void 0)})}}const vn=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let Z=!1;function fn(e,t){let n=!1,a,i;Be&&(e!=null&&e.beforeEach)&&(Le(()=>{window.addEventListener("popstate",s),a=e.beforeEach((r,o,l)=>{Z?n?t(l):l():setTimeout(()=>n?t(l):l()),Z=!0}),i=e==null?void 0:e.afterEach(()=>{Z=!1})}),dt(()=>{window.removeEventListener("popstate",s),a==null||a(),i==null||i()}));function s(r){var o;(o=r.state)!=null&&o.replaced||(n=!0,setTimeout(()=>n=!1))}}const ee=Symbol("rippleStop"),jt=80;function Se(e,t){e.style.transform=t,e.style.webkitTransform=t}function te(e){return e.constructor.name==="TouchEvent"}function He(e){return e.constructor.name==="KeyboardEvent"}const Mt=function(e,t){var g;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,i=0;if(!He(e)){const b=t.getBoundingClientRect(),f=te(e)?e.touches[e.touches.length-1]:e;a=f.clientX-b.left,i=f.clientY-b.top}let s=0,r=.3;(g=t._ripple)!=null&&g.circle?(r=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((a-s)**2+(i-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=`${(t.clientWidth-s*2)/2}px`,l=`${(t.clientHeight-s*2)/2}px`,c=n.center?o:`${a-s}px`,d=n.center?l:`${i-s}px`;return{radius:s,scale:r,x:c,y:d,centerX:o,centerY:l}},K={show(e,t){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=t==null?void 0:t._ripple)!=null&&f.enabled))return;const a=document.createElement("span"),i=document.createElement("span");a.appendChild(i),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:s,scale:r,x:o,y:l,centerX:c,centerY:d}=Mt(e,t,n),g=`${s*2}px`;i.className="v-ripple__animation",i.style.width=g,i.style.height=g,t.appendChild(a);const b=window.getComputedStyle(t);b&&b.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Se(i,`translate(${o}, ${l}) scale3d(${r},${r},${r})`),i.dataset.activated=String(performance.now()),requestAnimationFrame(()=>{requestAnimationFrame(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Se(i,`translate(${c}, ${d}) scale3d(1,1,1)`)})})},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),i=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},i)}};function We(e){return typeof e>"u"||!!e}function F(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[ee])){if(e[ee]=!0,te(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||He(e),n._ripple.class&&(t.class=n._ripple.class),te(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{K.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},jt)}else K.show(e,n,t)}}function pe(e){e[ee]=!0}function S(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{S(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),K.hide(t)}}function De(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let A=!1;function je(e){!A&&(e.keyCode===be.enter||e.keyCode===be.space)&&(A=!0,F(e))}function Me(e){A=!1,S(e)}function qe(e){A&&(A=!1,S(e))}function Xe(e,t,n){const{value:a,modifiers:i}=t,s=We(a);if(s||K.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,vt(a)&&a.class&&(e._ripple.class=a.class),s&&!n){if(i.stop){e.addEventListener("touchstart",pe,{passive:!0}),e.addEventListener("mousedown",pe);return}e.addEventListener("touchstart",F,{passive:!0}),e.addEventListener("touchend",S,{passive:!0}),e.addEventListener("touchmove",De,{passive:!0}),e.addEventListener("touchcancel",S),e.addEventListener("mousedown",F),e.addEventListener("mouseup",S),e.addEventListener("mouseleave",S),e.addEventListener("keydown",je),e.addEventListener("keyup",Me),e.addEventListener("blur",qe),e.addEventListener("dragstart",S,{passive:!0})}else!s&&n&&Ue(e)}function Ue(e){e.removeEventListener("mousedown",F),e.removeEventListener("touchstart",F),e.removeEventListener("touchend",S),e.removeEventListener("touchmove",De),e.removeEventListener("touchcancel",S),e.removeEventListener("mouseup",S),e.removeEventListener("mouseleave",S),e.removeEventListener("keydown",je),e.removeEventListener("keyup",Me),e.removeEventListener("dragstart",S),e.removeEventListener("blur",qe)}function qt(e,t){Xe(e,t,!1)}function Xt(e){delete e._ripple,Ue(e)}function Ut(e,t){if(t.value===t.oldValue)return;const n=We(t.oldValue);Xe(e,t,n)}const mn={mounted:qt,unmounted:Xt,updated:Ut},Yt=y({fluid:{type:Boolean,default:!1},...E(),...Ie(),...Q()},"VContainer"),gn=P()({name:"VContainer",props:Yt(),setup(e,t){let{slots:n}=t;const{rtlClasses:a}=oe(),{dimensionStyles:i}=Oe(e);return I(()=>u(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:[i.value,e.style]},n)),{}}});export{Ne as A,dn as B,ze as C,vn as D,Re as E,rn as F,mt as G,Qt as H,Gt as I,Jt as J,Zt as K,on as L,M,cn as N,fn as O,sn as P,kt as Q,mn as R,It as S,ht as V,tn as a,ue as b,nn as c,Pt as d,Et as e,an as f,ce as g,xt as h,gn as i,Oe as j,Ie as k,St as l,Q as m,Ot as n,un as o,zt as p,Vt as q,Ht as r,Rt as s,ln as t,X as u,en as v,$t as w,Ft as x,Tt as y,Ct as z};
