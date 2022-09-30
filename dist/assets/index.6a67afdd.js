(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function bs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const bl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vl=bs(bl);function yo(t){return!!t||t===""}function vs(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=le(r)?Il(r):vs(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(le(t))return t;if(re(t))return t}}const El=/;(?![^(]*\))/g,wl=/:(.+)/;function Il(t){const e={};return t.split(El).forEach(n=>{if(n){const r=n.split(wl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ht(t){let e="";if(le(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=ht(t[n]);r&&(e+=r+" ")}else if(re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ei=t=>le(t)?t:t==null?"":H(t)||re(t)&&(t.toString===wo||!B(t.toString))?JSON.stringify(t,bo,2):String(t),bo=(t,e)=>e&&e.__v_isRef?bo(t,e.value):Kt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:vo(e)?{[`Set(${e.size})`]:[...e.values()]}:re(e)&&!H(e)&&!Io(e)?String(e):e,X={},zt=[],ke=()=>{},Tl=()=>!1,Sl=/^on[^a-z]/,yr=t=>Sl.test(t),Es=t=>t.startsWith("onUpdate:"),ge=Object.assign,ws=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Rl=Object.prototype.hasOwnProperty,j=(t,e)=>Rl.call(t,e),H=Array.isArray,Kt=t=>br(t)==="[object Map]",vo=t=>br(t)==="[object Set]",B=t=>typeof t=="function",le=t=>typeof t=="string",Is=t=>typeof t=="symbol",re=t=>t!==null&&typeof t=="object",Eo=t=>re(t)&&B(t.then)&&B(t.catch),wo=Object.prototype.toString,br=t=>wo.call(t),Cl=t=>br(t).slice(8,-1),Io=t=>br(t)==="[object Object]",Ts=t=>le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qn=bs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Al=/-(\w)/g,Ke=vr(t=>t.replace(Al,(e,n)=>n?n.toUpperCase():"")),Ol=/\B([A-Z])/g,on=vr(t=>t.replace(Ol,"-$1").toLowerCase()),Er=vr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lr=vr(t=>t?`on${Er(t)}`:""),Tn=(t,e)=>!Object.is(t,e),Ur=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ir=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Pl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ti;const kl=()=>ti||(ti=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Be;class To{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Be&&(this.parent=Be,this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Be;try{return Be=this,e()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Nl(t){return new To(t)}function Ml(t,e=Be){e&&e.active&&e.effects.push(t)}const Ss=t=>{const e=new Set(t);return e.w=0,e.n=0,e},So=t=>(t.w&_t)>0,Ro=t=>(t.n&_t)>0,Dl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=_t},xl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];So(s)&&!Ro(s)?s.delete(t):e[n++]=s,s.w&=~_t,s.n&=~_t}e.length=n}},Xr=new WeakMap;let mn=0,_t=1;const Zr=30;let Oe;const At=Symbol(""),es=Symbol("");class Rs{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ml(this,r)}run(){if(!this.active)return this.fn();let e=Oe,n=pt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Oe,Oe=this,pt=!0,_t=1<<++mn,mn<=Zr?Dl(this):ni(this),this.fn()}finally{mn<=Zr&&xl(this),_t=1<<--mn,Oe=this.parent,pt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Oe===this?this.deferStop=!0:this.active&&(ni(this),this.onStop&&this.onStop(),this.active=!1)}}function ni(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let pt=!0;const Co=[];function an(){Co.push(pt),pt=!1}function ln(){const t=Co.pop();pt=t===void 0?!0:t}function we(t,e,n){if(pt&&Oe){let r=Xr.get(t);r||Xr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ss()),Ao(s)}}function Ao(t,e){let n=!1;mn<=Zr?Ro(t)||(t.n|=_t,n=!So(t)):n=!t.has(Oe),n&&(t.add(Oe),Oe.deps.push(t))}function et(t,e,n,r,s,i){const o=Xr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?Ts(n)&&a.push(o.get("length")):(a.push(o.get(At)),Kt(t)&&a.push(o.get(es)));break;case"delete":H(t)||(a.push(o.get(At)),Kt(t)&&a.push(o.get(es)));break;case"set":Kt(t)&&a.push(o.get(At));break}if(a.length===1)a[0]&&ts(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ts(Ss(l))}}function ts(t,e){const n=H(t)?t:[...t];for(const r of n)r.computed&&ri(r);for(const r of n)r.computed||ri(r)}function ri(t,e){(t!==Oe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ll=bs("__proto__,__v_isRef,__isVue"),Oo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Is)),Ul=Cs(),Fl=Cs(!1,!0),Bl=Cs(!0),si=Hl();function Hl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)we(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){an();const r=K(this)[e].apply(this,n);return ln(),r}}),t}function Cs(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?nc:Do:e?Mo:No).get(r))return r;const o=H(r);if(!t&&o&&j(si,s))return Reflect.get(si,s,i);const a=Reflect.get(r,s,i);return(Is(s)?Oo.has(s):Ll(s))||(t||we(r,"get",s),e)?a:de(a)?o&&Ts(s)?a:a.value:re(a)?t?xo(a):cn(a):a}}const $l=Po(),Wl=Po(!0);function Po(t=!1){return function(n,r,s,i){let o=n[r];if(Zt(o)&&de(o)&&!de(s))return!1;if(!t&&(!or(s)&&!Zt(s)&&(o=K(o),s=K(s)),!H(n)&&de(o)&&!de(s)))return o.value=s,!0;const a=H(n)&&Ts(r)?Number(r)<n.length:j(n,r),l=Reflect.set(n,r,s,i);return n===K(i)&&(a?Tn(s,o)&&et(n,"set",r,s):et(n,"add",r,s)),l}}function jl(t,e){const n=j(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&et(t,"delete",e,void 0),r}function Vl(t,e){const n=Reflect.has(t,e);return(!Is(e)||!Oo.has(e))&&we(t,"has",e),n}function zl(t){return we(t,"iterate",H(t)?"length":At),Reflect.ownKeys(t)}const ko={get:Ul,set:$l,deleteProperty:jl,has:Vl,ownKeys:zl},Kl={get:Bl,set(t,e){return!0},deleteProperty(t,e){return!0}},ql=ge({},ko,{get:Fl,set:Wl}),As=t=>t,wr=t=>Reflect.getPrototypeOf(t);function zn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(e!==i&&we(s,"get",e),we(s,"get",i));const{has:o}=wr(s),a=r?As:n?Ns:Sn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Kn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(t!==s&&we(r,"has",t),we(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function qn(t,e=!1){return t=t.__v_raw,!e&&we(K(t),"iterate",At),Reflect.get(t,"size",t)}function ii(t){t=K(t);const e=K(this);return wr(e).has.call(e,t)||(e.add(t),et(e,"add",t,t)),this}function oi(t,e){e=K(e);const n=K(this),{has:r,get:s}=wr(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Tn(e,o)&&et(n,"set",t,e):et(n,"add",t,e),this}function ai(t){const e=K(this),{has:n,get:r}=wr(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&et(e,"delete",t,void 0),i}function li(){const t=K(this),e=t.size!==0,n=t.clear();return e&&et(t,"clear",void 0,void 0),n}function Gn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),l=e?As:t?Ns:Sn;return!t&&we(a,"iterate",At),o.forEach((c,d)=>r.call(s,l(c),l(d),i))}}function Jn(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=Kt(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),d=n?As:e?Ns:Sn;return!e&&we(i,"iterate",l?es:At),{next(){const{value:h,done:p}=c.next();return p?{value:h,done:p}:{value:a?[d(h[0]),d(h[1])]:d(h),done:p}},[Symbol.iterator](){return this}}}}function st(t){return function(...e){return t==="delete"?!1:this}}function Gl(){const t={get(i){return zn(this,i)},get size(){return qn(this)},has:Kn,add:ii,set:oi,delete:ai,clear:li,forEach:Gn(!1,!1)},e={get(i){return zn(this,i,!1,!0)},get size(){return qn(this)},has:Kn,add:ii,set:oi,delete:ai,clear:li,forEach:Gn(!1,!0)},n={get(i){return zn(this,i,!0)},get size(){return qn(this,!0)},has(i){return Kn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Gn(!0,!1)},r={get(i){return zn(this,i,!0,!0)},get size(){return qn(this,!0)},has(i){return Kn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Jn(i,!1,!1),n[i]=Jn(i,!0,!1),e[i]=Jn(i,!1,!0),r[i]=Jn(i,!0,!0)}),[t,n,e,r]}const[Jl,Yl,Ql,Xl]=Gl();function Os(t,e){const n=e?t?Xl:Ql:t?Yl:Jl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(j(n,s)&&s in r?n:r,s,i)}const Zl={get:Os(!1,!1)},ec={get:Os(!1,!0)},tc={get:Os(!0,!1)},No=new WeakMap,Mo=new WeakMap,Do=new WeakMap,nc=new WeakMap;function rc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sc(t){return t.__v_skip||!Object.isExtensible(t)?0:rc(Cl(t))}function cn(t){return Zt(t)?t:Ps(t,!1,ko,Zl,No)}function ic(t){return Ps(t,!1,ql,ec,Mo)}function xo(t){return Ps(t,!0,Kl,tc,Do)}function Ps(t,e,n,r,s){if(!re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=sc(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function qt(t){return Zt(t)?qt(t.__v_raw):!!(t&&t.__v_isReactive)}function Zt(t){return!!(t&&t.__v_isReadonly)}function or(t){return!!(t&&t.__v_isShallow)}function Lo(t){return qt(t)||Zt(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function ks(t){return ir(t,"__v_skip",!0),t}const Sn=t=>re(t)?cn(t):t,Ns=t=>re(t)?xo(t):t;function Uo(t){pt&&Oe&&(t=K(t),Ao(t.dep||(t.dep=Ss())))}function Fo(t,e){t=K(t),t.dep&&ts(t.dep)}function de(t){return!!(t&&t.__v_isRef===!0)}function Bo(t){return Ho(t,!1)}function oc(t){return Ho(t,!0)}function Ho(t,e){return de(t)?t:new ac(t,e)}class ac{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:Sn(e)}get value(){return Uo(this),this._value}set value(e){const n=this.__v_isShallow||or(e)||Zt(e);e=n?e:K(e),Tn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Sn(e),Fo(this))}}function Gt(t){return de(t)?t.value:t}const lc={get:(t,e,n)=>Gt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return de(s)&&!de(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $o(t){return qt(t)?t:new Proxy(t,lc)}var Wo;class cc{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Wo]=!1,this._dirty=!0,this.effect=new Rs(e,()=>{this._dirty||(this._dirty=!0,Fo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return Uo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Wo="__v_isReadonly";function uc(t,e,n=!1){let r,s;const i=B(t);return i?(r=t,s=ke):(r=t.get,s=t.set),new cc(r,s,i||!s,n)}function gt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ir(i,e,n)}return s}function Ne(t,e,n,r){if(B(t)){const i=gt(t,e,n,r);return i&&Eo(i)&&i.catch(o=>{Ir(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ne(t[i],e,n,r));return s}function Ir(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){gt(l,null,10,[t,o,a]);return}}dc(t,n,s,r)}function dc(t,e,n,r=!0){console.error(t)}let Rn=!1,ns=!1;const ue=[];let We=0;const Jt=[];let Ye=null,Tt=0;const jo=Promise.resolve();let Ms=null;function Vo(t){const e=Ms||jo;return t?e.then(this?t.bind(this):t):e}function fc(t){let e=We+1,n=ue.length;for(;e<n;){const r=e+n>>>1;Cn(ue[r])<t?e=r+1:n=r}return e}function Ds(t){(!ue.length||!ue.includes(t,Rn&&t.allowRecurse?We+1:We))&&(t.id==null?ue.push(t):ue.splice(fc(t.id),0,t),zo())}function zo(){!Rn&&!ns&&(ns=!0,Ms=jo.then(qo))}function hc(t){const e=ue.indexOf(t);e>We&&ue.splice(e,1)}function pc(t){H(t)?Jt.push(...t):(!Ye||!Ye.includes(t,t.allowRecurse?Tt+1:Tt))&&Jt.push(t),zo()}function ci(t,e=Rn?We+1:0){for(;e<ue.length;e++){const n=ue[e];n&&n.pre&&(ue.splice(e,1),e--,n())}}function Ko(t){if(Jt.length){const e=[...new Set(Jt)];if(Jt.length=0,Ye){Ye.push(...e);return}for(Ye=e,Ye.sort((n,r)=>Cn(n)-Cn(r)),Tt=0;Tt<Ye.length;Tt++)Ye[Tt]();Ye=null,Tt=0}}const Cn=t=>t.id==null?1/0:t.id,gc=(t,e)=>{const n=Cn(t)-Cn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function qo(t){ns=!1,Rn=!0,ue.sort(gc);const e=ke;try{for(We=0;We<ue.length;We++){const n=ue[We];n&&n.active!==!1&&gt(n,null,14)}}finally{We=0,ue.length=0,Ko(),Rn=!1,Ms=null,(ue.length||Jt.length)&&qo()}}function mc(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||X;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[d]||X;p&&(s=n.map(_=>_.trim())),h&&(s=n.map(Pl))}let a,l=r[a=Lr(e)]||r[a=Lr(Ke(e))];!l&&i&&(l=r[a=Lr(on(e))]),l&&Ne(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ne(c,t,6,s)}}function Go(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const l=c=>{const d=Go(c,e,!0);d&&(a=!0,ge(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(re(t)&&r.set(t,null),null):(H(i)?i.forEach(l=>o[l]=null):ge(o,i),re(t)&&r.set(t,o),o)}function Tr(t,e){return!t||!yr(e)?!1:(e=e.slice(2).replace(/Once$/,""),j(t,e[0].toLowerCase()+e.slice(1))||j(t,on(e))||j(t,e))}let pe=null,Sr=null;function ar(t){const e=pe;return pe=t,Sr=t&&t.type.__scopeId||null,e}function Vg(t){Sr=t}function zg(){Sr=null}function _c(t,e=pe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&bi(-1);const i=ar(e),o=t(...s);return ar(i),r._d&&bi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Fr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:d,renderCache:h,data:p,setupState:_,ctx:R,inheritAttrs:U}=t;let A,C;const x=ar(t);try{if(n.shapeFlag&4){const z=s||r;A=$e(d.call(z,z,h,i,_,p,R)),C=l}else{const z=e;A=$e(z.length>1?z(i,{attrs:l,slots:a,emit:c}):z(i,null)),C=e.props?l:yc(l)}}catch(z){vn.length=0,Ir(z,t,1),A=ye(yt)}let W=A;if(C&&U!==!1){const z=Object.keys(C),{shapeFlag:ie}=W;z.length&&ie&7&&(o&&z.some(Es)&&(C=bc(C,o)),W=en(W,C))}return n.dirs&&(W=en(W),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&(W.transition=n.transition),A=W,ar(x),A}const yc=t=>{let e;for(const n in t)(n==="class"||n==="style"||yr(n))&&((e||(e={}))[n]=t[n]);return e},bc=(t,e)=>{const n={};for(const r in t)(!Es(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function vc(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ui(r,o,c):!!o;if(l&8){const d=e.dynamicProps;for(let h=0;h<d.length;h++){const p=d[h];if(o[p]!==r[p]&&!Tr(c,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ui(r,o,c):!0:!!o;return!1}function ui(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Tr(n,i))return!0}return!1}function Ec({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const wc=t=>t.__isSuspense;function Ic(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):pc(t)}function Xn(t,e){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[t]=e}}function Ze(t,e,n=!1){const r=ae||pe;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r.proxy):e}}const di={};function Zn(t,e,n){return Jo(t,e,n)}function Jo(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=X){const a=ae;let l,c=!1,d=!1;if(de(t)?(l=()=>t.value,c=or(t)):qt(t)?(l=()=>t,r=!0):H(t)?(d=!0,c=t.some(C=>qt(C)||or(C)),l=()=>t.map(C=>{if(de(C))return C.value;if(qt(C))return Rt(C);if(B(C))return gt(C,a,2)})):B(t)?e?l=()=>gt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ne(t,a,3,[p])}:l=ke,e&&r){const C=l;l=()=>Rt(C())}let h,p=C=>{h=A.onStop=()=>{gt(C,a,4)}};if(Pn)return p=ke,e?n&&Ne(e,a,3,[l(),d?[]:void 0,p]):l(),ke;let _=d?[]:di;const R=()=>{if(!!A.active)if(e){const C=A.run();(r||c||(d?C.some((x,W)=>Tn(x,_[W])):Tn(C,_)))&&(h&&h(),Ne(e,a,3,[C,_===di?void 0:_,p]),_=C)}else A.run()};R.allowRecurse=!!e;let U;s==="sync"?U=R:s==="post"?U=()=>_e(R,a&&a.suspense):(R.pre=!0,a&&(R.id=a.uid),U=()=>Ds(R));const A=new Rs(l,U);return e?n?R():_=A.run():s==="post"?_e(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&ws(a.scope.effects,A)}}function Tc(t,e,n){const r=this.proxy,s=le(t)?t.includes(".")?Yo(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=ae;tn(this);const a=Jo(s,i.bind(r),n);return o?tn(o):Ot(),a}function Yo(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Rt(t,e){if(!re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),de(t))Rt(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Rt(t[n],e);else if(vo(t)||Kt(t))t.forEach(n=>{Rt(n,e)});else if(Io(t))for(const n in t)Rt(t[n],e);return t}function Qo(t){return B(t)?{setup:t,name:t.name}:t}const bn=t=>!!t.type.__asyncLoader,Xo=t=>t.type.__isKeepAlive;function Sc(t,e){Zo(t,"a",e)}function Rc(t,e){Zo(t,"da",e)}function Zo(t,e,n=ae){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Rr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Xo(s.parent.vnode)&&Cc(r,e,n,s),s=s.parent}}function Cc(t,e,n,r){const s=Rr(e,t,r,!0);ea(()=>{ws(r[e],s)},n)}function Rr(t,e,n=ae,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;an(),tn(n);const a=Ne(e,n,t,o);return Ot(),ln(),a});return r?s.unshift(i):s.push(i),i}}const nt=t=>(e,n=ae)=>(!Pn||t==="sp")&&Rr(t,e,n),Ac=nt("bm"),Oc=nt("m"),Pc=nt("bu"),kc=nt("u"),Nc=nt("bum"),ea=nt("um"),Mc=nt("sp"),Dc=nt("rtg"),xc=nt("rtc");function Lc(t,e=ae){Rr("ec",t,e)}function Uc(t,e){const n=pe;if(n===null)return t;const r=Ar(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=X]=e[i];B(o)&&(o={mounted:o,updated:o}),o.deep&&Rt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function vt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(an(),Ne(l,n,8,[t.el,a,t,e]),ln())}}const ta="components",Fc="directives";function Bc(t,e){return na(ta,t,!0,e)||t}const Hc=Symbol();function $c(t){return na(Fc,t)}function na(t,e,n=!0,r=!1){const s=pe||ae;if(s){const i=s.type;if(t===ta){const a=_u(i,!1);if(a&&(a===e||a===Ke(e)||a===Er(Ke(e))))return i}const o=fi(s[t]||i[t],e)||fi(s.appContext[t],e);return!o&&r?i:o}}function fi(t,e){return t&&(t[e]||t[Ke(e)]||t[Er(Ke(e))])}function Wt(t,e,n={},r,s){if(pe.isCE||pe.parent&&bn(pe.parent)&&pe.parent.isCE)return ye("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),Ee();const o=i&&ra(i(n)),a=Fs(Ae,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ra(t){return t.some(e=>ur(e)?!(e.type===yt||e.type===Ae&&!ra(e.children)):!0)?t:null}const rs=t=>t?pa(t)?Ar(t)||t.proxy:rs(t.parent):null,lr=ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>rs(t.parent),$root:t=>rs(t.root),$emit:t=>t.emit,$options:t=>xs(t),$forceUpdate:t=>t.f||(t.f=()=>Ds(t.update)),$nextTick:t=>t.n||(t.n=Vo.bind(t.proxy)),$watch:t=>Tc.bind(t)}),Wc={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==X&&j(r,e))return o[e]=1,r[e];if(s!==X&&j(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&j(c,e))return o[e]=3,i[e];if(n!==X&&j(n,e))return o[e]=4,n[e];ss&&(o[e]=0)}}const d=lr[e];let h,p;if(d)return e==="$attrs"&&we(t,"get",e),d(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==X&&j(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,j(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==X&&j(s,e)?(s[e]=n,!0):r!==X&&j(r,e)?(r[e]=n,!0):j(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==X&&j(t,o)||e!==X&&j(e,o)||(a=i[0])&&j(a,o)||j(r,o)||j(lr,o)||j(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:j(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ss=!0;function jc(t){const e=xs(t),n=t.proxy,r=t.ctx;ss=!1,e.beforeCreate&&hi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:d,beforeMount:h,mounted:p,beforeUpdate:_,updated:R,activated:U,deactivated:A,beforeDestroy:C,beforeUnmount:x,destroyed:W,unmounted:z,render:ie,renderTracked:oe,renderTriggered:Ie,errorCaptured:rt,serverPrefetch:me,expose:xe,inheritAttrs:qe,components:Re,directives:Lt,filters:Ut}=e;if(c&&Vc(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Z in o){const J=o[Z];B(J)&&(r[Z]=J.bind(n))}if(s){const Z=s.call(n,n);re(Z)&&(t.data=cn(Z))}if(ss=!0,i)for(const Z in i){const J=i[Z],be=B(J)?J.bind(n,n):B(J.get)?J.get.bind(n,n):ke,Bt=!B(J)&&B(J.set)?J.set.bind(n):ke,Ge=Se({get:be,set:Bt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Le=>Ge.value=Le})}if(a)for(const Z in a)sa(a[Z],r,n,Z);if(l){const Z=B(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(J=>{Xn(J,Z[J])})}d&&hi(d,t,"c");function se(Z,J){H(J)?J.forEach(be=>Z(be.bind(n))):J&&Z(J.bind(n))}if(se(Ac,h),se(Oc,p),se(Pc,_),se(kc,R),se(Sc,U),se(Rc,A),se(Lc,rt),se(xc,oe),se(Dc,Ie),se(Nc,x),se(ea,z),se(Mc,me),H(xe))if(xe.length){const Z=t.exposed||(t.exposed={});xe.forEach(J=>{Object.defineProperty(Z,J,{get:()=>n[J],set:be=>n[J]=be})})}else t.exposed||(t.exposed={});ie&&t.render===ke&&(t.render=ie),qe!=null&&(t.inheritAttrs=qe),Re&&(t.components=Re),Lt&&(t.directives=Lt)}function Vc(t,e,n=ke,r=!1){H(t)&&(t=is(t));for(const s in t){const i=t[s];let o;re(i)?"default"in i?o=Ze(i.from||s,i.default,!0):o=Ze(i.from||s):o=Ze(i),de(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function hi(t,e,n){Ne(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function sa(t,e,n,r){const s=r.includes(".")?Yo(n,r):()=>n[r];if(le(t)){const i=e[t];B(i)&&Zn(s,i)}else if(B(t))Zn(s,t.bind(n));else if(re(t))if(H(t))t.forEach(i=>sa(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&Zn(s,i,t)}}function xs(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>cr(l,c,o,!0)),cr(l,e,o)),re(e)&&i.set(e,l),l}function cr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&cr(t,i,n,!0),s&&s.forEach(o=>cr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=zc[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const zc={data:pi,props:wt,emits:wt,methods:wt,computed:wt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:wt,directives:wt,watch:qc,provide:pi,inject:Kc};function pi(t,e){return e?t?function(){return ge(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Kc(t,e){return wt(is(t),is(e))}function is(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function he(t,e){return t?[...new Set([].concat(t,e))]:e}function wt(t,e){return t?ge(ge(Object.create(null),t),e):e}function qc(t,e){if(!t)return e;if(!e)return t;const n=ge(Object.create(null),t);for(const r in e)n[r]=he(t[r],e[r]);return n}function Gc(t,e,n,r=!1){const s={},i={};ir(i,Cr,1),t.propsDefaults=Object.create(null),ia(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ic(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Jc(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let h=0;h<d.length;h++){let p=d[h];if(Tr(t.emitsOptions,p))continue;const _=e[p];if(l)if(j(i,p))_!==i[p]&&(i[p]=_,c=!0);else{const R=Ke(p);s[R]=os(l,a,R,_,t,!1)}else _!==i[p]&&(i[p]=_,c=!0)}}}else{ia(t,e,s,i)&&(c=!0);let d;for(const h in a)(!e||!j(e,h)&&((d=on(h))===h||!j(e,d)))&&(l?n&&(n[h]!==void 0||n[d]!==void 0)&&(s[h]=os(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!j(e,h)&&!0)&&(delete i[h],c=!0)}c&&et(t,"set","$attrs")}function ia(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Qn(l))continue;const c=e[l];let d;s&&j(s,d=Ke(l))?!i||!i.includes(d)?n[d]=c:(a||(a={}))[d]=c:Tr(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=K(n),c=a||X;for(let d=0;d<i.length;d++){const h=i[d];n[h]=os(s,l,h,c[h],t,!j(c,h))}}return o}function os(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=j(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&B(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(tn(s),r=c[n]=l.call(null,e),Ot())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===on(n))&&(r=!0))}return r}function oa(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!B(t)){const d=h=>{l=!0;const[p,_]=oa(h,e,!0);ge(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return re(t)&&r.set(t,zt),zt;if(H(i))for(let d=0;d<i.length;d++){const h=Ke(i[d]);gi(h)&&(o[h]=X)}else if(i)for(const d in i){const h=Ke(d);if(gi(h)){const p=i[d],_=o[h]=H(p)||B(p)?{type:p}:p;if(_){const R=yi(Boolean,_.type),U=yi(String,_.type);_[0]=R>-1,_[1]=U<0||R<U,(R>-1||j(_,"default"))&&a.push(h)}}}const c=[o,a];return re(t)&&r.set(t,c),c}function gi(t){return t[0]!=="$"}function mi(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function _i(t,e){return mi(t)===mi(e)}function yi(t,e){return H(e)?e.findIndex(n=>_i(n,t)):B(e)&&_i(e,t)?0:-1}const aa=t=>t[0]==="_"||t==="$stable",Ls=t=>H(t)?t.map($e):[$e(t)],Yc=(t,e,n)=>{if(e._n)return e;const r=_c((...s)=>Ls(e(...s)),n);return r._c=!1,r},la=(t,e,n)=>{const r=t._ctx;for(const s in t){if(aa(s))continue;const i=t[s];if(B(i))e[s]=Yc(s,i,r);else if(i!=null){const o=Ls(i);e[s]=()=>o}}},ca=(t,e)=>{const n=Ls(e);t.slots.default=()=>n},Qc=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),ir(e,"_",n)):la(e,t.slots={})}else t.slots={},e&&ca(t,e);ir(t.slots,Cr,1)},Xc=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=X;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ge(s,e),!n&&a===1&&delete s._):(i=!e.$stable,la(e,s)),o=e}else e&&(ca(t,e),o={default:1});if(i)for(const a in s)!aa(a)&&!(a in o)&&delete s[a]};function ua(){return{app:null,config:{isNativeTag:Tl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zc=0;function eu(t,e){return function(r,s=null){B(r)||(r=Object.assign({},r)),s!=null&&!re(s)&&(s=null);const i=ua(),o=new Set;let a=!1;const l=i.app={_uid:Zc++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bu,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&B(c.install)?(o.add(c),c.install(l,...d)):B(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,h){if(!a){const p=ye(r,s);return p.appContext=i,d&&e?e(p,c):t(p,c,h),a=!0,l._container=c,c.__vue_app__=l,Ar(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function as(t,e,n,r,s=!1){if(H(t)){t.forEach((p,_)=>as(p,e&&(H(e)?e[_]:e),n,r,s));return}if(bn(r)&&!s)return;const i=r.shapeFlag&4?Ar(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,d=a.refs===X?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(le(c)?(d[c]=null,j(h,c)&&(h[c]=null)):de(c)&&(c.value=null)),B(l))gt(l,a,12,[o,d]);else{const p=le(l),_=de(l);if(p||_){const R=()=>{if(t.f){const U=p?d[l]:l.value;s?H(U)&&ws(U,i):H(U)?U.includes(i)||U.push(i):p?(d[l]=[i],j(h,l)&&(h[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else p?(d[l]=o,j(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(d[t.k]=o))};o?(R.id=-1,_e(R,n)):R()}}}const _e=Ic;function tu(t){return nu(t)}function nu(t,e){const n=kl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:d,parentNode:h,nextSibling:p,setScopeId:_=ke,cloneNode:R,insertStaticContent:U}=t,A=(u,f,g,b=null,y=null,w=null,S=!1,E=null,I=!!f.dynamicChildren)=>{if(u===f)return;u&&!pn(u,f)&&(b=k(u),Te(u,y,w,!0),u=null),f.patchFlag===-2&&(I=!1,f.dynamicChildren=null);const{type:v,ref:N,shapeFlag:O}=f;switch(v){case Us:C(u,f,g,b);break;case yt:x(u,f,g,b);break;case Br:u==null&&W(f,g,b,S);break;case Ae:Lt(u,f,g,b,y,w,S,E,I);break;default:O&1?oe(u,f,g,b,y,w,S,E,I):O&6?Ut(u,f,g,b,y,w,S,E,I):(O&64||O&128)&&v.process(u,f,g,b,y,w,S,E,I,ee)}N!=null&&y&&as(N,u&&u.ref,w,f||u,!f)},C=(u,f,g,b)=>{if(u==null)r(f.el=a(f.children),g,b);else{const y=f.el=u.el;f.children!==u.children&&c(y,f.children)}},x=(u,f,g,b)=>{u==null?r(f.el=l(f.children||""),g,b):f.el=u.el},W=(u,f,g,b)=>{[u.el,u.anchor]=U(u.children,f,g,b,u.el,u.anchor)},z=({el:u,anchor:f},g,b)=>{let y;for(;u&&u!==f;)y=p(u),r(u,g,b),u=y;r(f,g,b)},ie=({el:u,anchor:f})=>{let g;for(;u&&u!==f;)g=p(u),s(u),u=g;s(f)},oe=(u,f,g,b,y,w,S,E,I)=>{S=S||f.type==="svg",u==null?Ie(f,g,b,y,w,S,E,I):xe(u,f,y,w,S,E,I)},Ie=(u,f,g,b,y,w,S,E)=>{let I,v;const{type:N,props:O,shapeFlag:M,transition:L,patchFlag:V,dirs:Y}=u;if(u.el&&R!==void 0&&V===-1)I=u.el=R(u.el);else{if(I=u.el=o(u.type,w,O&&O.is,O),M&8?d(I,u.children):M&16&&me(u.children,I,null,b,y,w&&N!=="foreignObject",S,E),Y&&vt(u,null,b,"created"),O){for(const ne in O)ne!=="value"&&!Qn(ne)&&i(I,ne,null,O[ne],w,u.children,b,y,T);"value"in O&&i(I,"value",null,O.value),(v=O.onVnodeBeforeMount)&&Fe(v,b,u)}rt(I,u,u.scopeId,S,b)}Y&&vt(u,null,b,"beforeMount");const Q=(!y||y&&!y.pendingBranch)&&L&&!L.persisted;Q&&L.beforeEnter(I),r(I,f,g),((v=O&&O.onVnodeMounted)||Q||Y)&&_e(()=>{v&&Fe(v,b,u),Q&&L.enter(I),Y&&vt(u,null,b,"mounted")},y)},rt=(u,f,g,b,y)=>{if(g&&_(u,g),b)for(let w=0;w<b.length;w++)_(u,b[w]);if(y){let w=y.subTree;if(f===w){const S=y.vnode;rt(u,S,S.scopeId,S.slotScopeIds,y.parent)}}},me=(u,f,g,b,y,w,S,E,I=0)=>{for(let v=I;v<u.length;v++){const N=u[v]=E?at(u[v]):$e(u[v]);A(null,N,f,g,b,y,w,S,E)}},xe=(u,f,g,b,y,w,S)=>{const E=f.el=u.el;let{patchFlag:I,dynamicChildren:v,dirs:N}=f;I|=u.patchFlag&16;const O=u.props||X,M=f.props||X;let L;g&&Et(g,!1),(L=M.onVnodeBeforeUpdate)&&Fe(L,g,f,u),N&&vt(f,u,g,"beforeUpdate"),g&&Et(g,!0);const V=y&&f.type!=="foreignObject";if(v?qe(u.dynamicChildren,v,E,g,b,V,w):S||be(u,f,E,null,g,b,V,w,!1),I>0){if(I&16)Re(E,f,O,M,g,b,y);else if(I&2&&O.class!==M.class&&i(E,"class",null,M.class,y),I&4&&i(E,"style",O.style,M.style,y),I&8){const Y=f.dynamicProps;for(let Q=0;Q<Y.length;Q++){const ne=Y[Q],Ce=O[ne],Ht=M[ne];(Ht!==Ce||ne==="value")&&i(E,ne,Ce,Ht,y,u.children,g,b,T)}}I&1&&u.children!==f.children&&d(E,f.children)}else!S&&v==null&&Re(E,f,O,M,g,b,y);((L=M.onVnodeUpdated)||N)&&_e(()=>{L&&Fe(L,g,f,u),N&&vt(f,u,g,"updated")},b)},qe=(u,f,g,b,y,w,S)=>{for(let E=0;E<f.length;E++){const I=u[E],v=f[E],N=I.el&&(I.type===Ae||!pn(I,v)||I.shapeFlag&70)?h(I.el):g;A(I,v,N,null,b,y,w,S,!0)}},Re=(u,f,g,b,y,w,S)=>{if(g!==b){for(const E in b){if(Qn(E))continue;const I=b[E],v=g[E];I!==v&&E!=="value"&&i(u,E,v,I,S,f.children,y,w,T)}if(g!==X)for(const E in g)!Qn(E)&&!(E in b)&&i(u,E,g[E],null,S,f.children,y,w,T);"value"in b&&i(u,"value",g.value,b.value)}},Lt=(u,f,g,b,y,w,S,E,I)=>{const v=f.el=u?u.el:a(""),N=f.anchor=u?u.anchor:a("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:L}=f;L&&(E=E?E.concat(L):L),u==null?(r(v,g,b),r(N,g,b),me(f.children,g,N,y,w,S,E,I)):O>0&&O&64&&M&&u.dynamicChildren?(qe(u.dynamicChildren,M,g,y,w,S,E),(f.key!=null||y&&f===y.subTree)&&da(u,f,!0)):be(u,f,g,N,y,w,S,E,I)},Ut=(u,f,g,b,y,w,S,E,I)=>{f.slotScopeIds=E,u==null?f.shapeFlag&512?y.ctx.activate(f,g,b,S,I):Ft(f,g,b,y,w,S,I):se(u,f,I)},Ft=(u,f,g,b,y,w,S)=>{const E=u.component=fu(u,b,y);if(Xo(u)&&(E.ctx.renderer=ee),hu(E),E.asyncDep){if(y&&y.registerDep(E,Z),!u.el){const I=E.subTree=ye(yt);x(null,I,f,g)}return}Z(E,u,f,g,y,w,S)},se=(u,f,g)=>{const b=f.component=u.component;if(vc(u,f,g))if(b.asyncDep&&!b.asyncResolved){J(b,f,g);return}else b.next=f,hc(b.update),b.update();else f.el=u.el,b.vnode=f},Z=(u,f,g,b,y,w,S)=>{const E=()=>{if(u.isMounted){let{next:N,bu:O,u:M,parent:L,vnode:V}=u,Y=N,Q;Et(u,!1),N?(N.el=V.el,J(u,N,S)):N=V,O&&Ur(O),(Q=N.props&&N.props.onVnodeBeforeUpdate)&&Fe(Q,L,N,V),Et(u,!0);const ne=Fr(u),Ce=u.subTree;u.subTree=ne,A(Ce,ne,h(Ce.el),k(Ce),u,y,w),N.el=ne.el,Y===null&&Ec(u,ne.el),M&&_e(M,y),(Q=N.props&&N.props.onVnodeUpdated)&&_e(()=>Fe(Q,L,N,V),y)}else{let N;const{el:O,props:M}=f,{bm:L,m:V,parent:Y}=u,Q=bn(f);if(Et(u,!1),L&&Ur(L),!Q&&(N=M&&M.onVnodeBeforeMount)&&Fe(N,Y,f),Et(u,!0),O&&F){const ne=()=>{u.subTree=Fr(u),F(O,u.subTree,u,y,null)};Q?f.type.__asyncLoader().then(()=>!u.isUnmounted&&ne()):ne()}else{const ne=u.subTree=Fr(u);A(null,ne,g,b,u,y,w),f.el=ne.el}if(V&&_e(V,y),!Q&&(N=M&&M.onVnodeMounted)){const ne=f;_e(()=>Fe(N,Y,ne),y)}(f.shapeFlag&256||Y&&bn(Y.vnode)&&Y.vnode.shapeFlag&256)&&u.a&&_e(u.a,y),u.isMounted=!0,f=g=b=null}},I=u.effect=new Rs(E,()=>Ds(v),u.scope),v=u.update=()=>I.run();v.id=u.uid,Et(u,!0),v()},J=(u,f,g)=>{f.component=u;const b=u.vnode.props;u.vnode=f,u.next=null,Jc(u,f.props,b,g),Xc(u,f.children,g),an(),ci(),ln()},be=(u,f,g,b,y,w,S,E,I=!1)=>{const v=u&&u.children,N=u?u.shapeFlag:0,O=f.children,{patchFlag:M,shapeFlag:L}=f;if(M>0){if(M&128){Ge(v,O,g,b,y,w,S,E,I);return}else if(M&256){Bt(v,O,g,b,y,w,S,E,I);return}}L&8?(N&16&&T(v,y,w),O!==v&&d(g,O)):N&16?L&16?Ge(v,O,g,b,y,w,S,E,I):T(v,y,w,!0):(N&8&&d(g,""),L&16&&me(O,g,b,y,w,S,E,I))},Bt=(u,f,g,b,y,w,S,E,I)=>{u=u||zt,f=f||zt;const v=u.length,N=f.length,O=Math.min(v,N);let M;for(M=0;M<O;M++){const L=f[M]=I?at(f[M]):$e(f[M]);A(u[M],L,g,null,y,w,S,E,I)}v>N?T(u,y,w,!0,!1,O):me(f,g,b,y,w,S,E,I,O)},Ge=(u,f,g,b,y,w,S,E,I)=>{let v=0;const N=f.length;let O=u.length-1,M=N-1;for(;v<=O&&v<=M;){const L=u[v],V=f[v]=I?at(f[v]):$e(f[v]);if(pn(L,V))A(L,V,g,null,y,w,S,E,I);else break;v++}for(;v<=O&&v<=M;){const L=u[O],V=f[M]=I?at(f[M]):$e(f[M]);if(pn(L,V))A(L,V,g,null,y,w,S,E,I);else break;O--,M--}if(v>O){if(v<=M){const L=M+1,V=L<N?f[L].el:b;for(;v<=M;)A(null,f[v]=I?at(f[v]):$e(f[v]),g,V,y,w,S,E,I),v++}}else if(v>M)for(;v<=O;)Te(u[v],y,w,!0),v++;else{const L=v,V=v,Y=new Map;for(v=V;v<=M;v++){const ve=f[v]=I?at(f[v]):$e(f[v]);ve.key!=null&&Y.set(ve.key,v)}let Q,ne=0;const Ce=M-V+1;let Ht=!1,Qs=0;const hn=new Array(Ce);for(v=0;v<Ce;v++)hn[v]=0;for(v=L;v<=O;v++){const ve=u[v];if(ne>=Ce){Te(ve,y,w,!0);continue}let Ue;if(ve.key!=null)Ue=Y.get(ve.key);else for(Q=V;Q<=M;Q++)if(hn[Q-V]===0&&pn(ve,f[Q])){Ue=Q;break}Ue===void 0?Te(ve,y,w,!0):(hn[Ue-V]=v+1,Ue>=Qs?Qs=Ue:Ht=!0,A(ve,f[Ue],g,null,y,w,S,E,I),ne++)}const Xs=Ht?ru(hn):zt;for(Q=Xs.length-1,v=Ce-1;v>=0;v--){const ve=V+v,Ue=f[ve],Zs=ve+1<N?f[ve+1].el:b;hn[v]===0?A(null,Ue,g,Zs,y,w,S,E,I):Ht&&(Q<0||v!==Xs[Q]?Le(Ue,g,Zs,2):Q--)}}},Le=(u,f,g,b,y=null)=>{const{el:w,type:S,transition:E,children:I,shapeFlag:v}=u;if(v&6){Le(u.component.subTree,f,g,b);return}if(v&128){u.suspense.move(f,g,b);return}if(v&64){S.move(u,f,g,ee);return}if(S===Ae){r(w,f,g);for(let O=0;O<I.length;O++)Le(I[O],f,g,b);r(u.anchor,f,g);return}if(S===Br){z(u,f,g);return}if(b!==2&&v&1&&E)if(b===0)E.beforeEnter(w),r(w,f,g),_e(()=>E.enter(w),y);else{const{leave:O,delayLeave:M,afterLeave:L}=E,V=()=>r(w,f,g),Y=()=>{O(w,()=>{V(),L&&L()})};M?M(w,V,Y):Y()}else r(w,f,g)},Te=(u,f,g,b=!1,y=!1)=>{const{type:w,props:S,ref:E,children:I,dynamicChildren:v,shapeFlag:N,patchFlag:O,dirs:M}=u;if(E!=null&&as(E,null,g,u,!0),N&256){f.ctx.deactivate(u);return}const L=N&1&&M,V=!bn(u);let Y;if(V&&(Y=S&&S.onVnodeBeforeUnmount)&&Fe(Y,f,u),N&6)P(u.component,g,b);else{if(N&128){u.suspense.unmount(g,b);return}L&&vt(u,null,f,"beforeUnmount"),N&64?u.type.remove(u,f,g,y,ee,b):v&&(w!==Ae||O>0&&O&64)?T(v,f,g,!1,!0):(w===Ae&&O&384||!y&&N&16)&&T(I,f,g),b&&fn(u)}(V&&(Y=S&&S.onVnodeUnmounted)||L)&&_e(()=>{Y&&Fe(Y,f,u),L&&vt(u,null,f,"unmounted")},g)},fn=u=>{const{type:f,el:g,anchor:b,transition:y}=u;if(f===Ae){m(g,b);return}if(f===Br){ie(u);return}const w=()=>{s(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:E}=y,I=()=>S(g,w);E?E(u.el,w,I):I()}else w()},m=(u,f)=>{let g;for(;u!==f;)g=p(u),s(u),u=g;s(f)},P=(u,f,g)=>{const{bum:b,scope:y,update:w,subTree:S,um:E}=u;b&&Ur(b),y.stop(),w&&(w.active=!1,Te(S,u,f,g)),E&&_e(E,f),_e(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},T=(u,f,g,b=!1,y=!1,w=0)=>{for(let S=w;S<u.length;S++)Te(u[S],f,g,b,y)},k=u=>u.shapeFlag&6?k(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),q=(u,f,g)=>{u==null?f._vnode&&Te(f._vnode,null,null,!0):A(f._vnode||null,u,f,null,null,null,g),ci(),Ko(),f._vnode=u},ee={p:A,um:Te,m:Le,r:fn,mt:Ft,mc:me,pc:be,pbc:qe,n:k,o:t};let $,F;return e&&([$,F]=e(ee)),{render:q,hydrate:$,createApp:eu(q,$)}}function Et({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function da(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=at(s[i]),a.el=o.el),n||da(o,a))}}function ru(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const su=t=>t.__isTeleport,Ae=Symbol(void 0),Us=Symbol(void 0),yt=Symbol(void 0),Br=Symbol(void 0),vn=[];let Pe=null;function Ee(t=!1){vn.push(Pe=t?null:[])}function iu(){vn.pop(),Pe=vn[vn.length-1]||null}let An=1;function bi(t){An+=t}function fa(t){return t.dynamicChildren=An>0?Pe||zt:null,iu(),An>0&&Pe&&Pe.push(t),t}function je(t,e,n,r,s,i){return fa(On(t,e,n,r,s,i,!0))}function Fs(t,e,n,r,s){return fa(ye(t,e,n,r,s,!0))}function ur(t){return t?t.__v_isVNode===!0:!1}function pn(t,e){return t.type===e.type&&t.key===e.key}const Cr="__vInternal",ha=({key:t})=>t!=null?t:null,er=({ref:t,ref_key:e,ref_for:n})=>t!=null?le(t)||de(t)||B(t)?{i:pe,r:t,k:e,f:!!n}:t:null;function On(t,e=null,n=null,r=0,s=null,i=t===Ae?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ha(e),ref:e&&er(e),scopeId:Sr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Bs(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=le(n)?8:16),An>0&&!o&&Pe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pe.push(l),l}const ye=ou;function ou(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Hc)&&(t=yt),ur(t)){const a=en(t,e,!0);return n&&Bs(a,n),An>0&&!i&&Pe&&(a.shapeFlag&6?Pe[Pe.indexOf(t)]=a:Pe.push(a)),a.patchFlag|=-2,a}if(yu(t)&&(t=t.__vccOpts),e){e=au(e);let{class:a,style:l}=e;a&&!le(a)&&(e.class=ht(a)),re(l)&&(Lo(l)&&!H(l)&&(l=ge({},l)),e.style=vs(l))}const o=le(t)?1:wc(t)?128:su(t)?64:re(t)?4:B(t)?2:0;return On(t,e,n,r,s,o,i,!0)}function au(t){return t?Lo(t)||Cr in t?ge({},t):t:null}function en(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?cu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ha(a),ref:e&&e.ref?n&&s?H(s)?s.concat(er(e)):[s,er(e)]:er(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ae?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&en(t.ssContent),ssFallback:t.ssFallback&&en(t.ssFallback),el:t.el,anchor:t.anchor}}function lu(t=" ",e=0){return ye(Us,null,t,e)}function Ct(t="",e=!1){return e?(Ee(),Fs(yt,null,t)):ye(yt,null,t)}function $e(t){return t==null||typeof t=="boolean"?ye(yt):H(t)?ye(Ae,null,t.slice()):typeof t=="object"?at(t):ye(Us,null,String(t))}function at(t){return t.el===null||t.memo?t:en(t)}function Bs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Bs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Cr in e)?e._ctx=pe:s===3&&pe&&(pe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:pe},n=32):(e=String(e),r&64?(n=16,e=[lu(e)]):n=8);t.children=e,t.shapeFlag|=n}function cu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ht([e.class,r.class]));else if(s==="style")e.style=vs([e.style,r.style]);else if(yr(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Fe(t,e,n,r=null){Ne(t,e,7,[n,r])}const uu=ua();let du=0;function fu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||uu,i={uid:du++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new To(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oa(r,s),emitsOptions:Go(r,s),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=mc.bind(null,i),t.ce&&t.ce(i),i}let ae=null;const tn=t=>{ae=t,t.scope.on()},Ot=()=>{ae&&ae.scope.off(),ae=null};function pa(t){return t.vnode.shapeFlag&4}let Pn=!1;function hu(t,e=!1){Pn=e;const{props:n,children:r}=t.vnode,s=pa(t);Gc(t,n,s,e),Qc(t,r);const i=s?pu(t,e):void 0;return Pn=!1,i}function pu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ks(new Proxy(t.ctx,Wc));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?mu(t):null;tn(t),an();const i=gt(r,t,0,[t.props,s]);if(ln(),Ot(),Eo(i)){if(i.then(Ot,Ot),e)return i.then(o=>{vi(t,o,e)}).catch(o=>{Ir(o,t,0)});t.asyncDep=i}else vi(t,i,e)}else ga(t,e)}function vi(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:re(e)&&(t.setupState=$o(e)),ga(t,n)}let Ei;function ga(t,e,n){const r=t.type;if(!t.render){if(!e&&Ei&&!r.render){const s=r.template||xs(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=ge(ge({isCustomElement:i,delimiters:a},o),l);r.render=Ei(s,c)}}t.render=r.render||ke}tn(t),an(),jc(t),ln(),Ot()}function gu(t){return new Proxy(t.attrs,{get(e,n){return we(t,"get","$attrs"),e[n]}})}function mu(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=gu(t))},slots:t.slots,emit:t.emit,expose:e}}function Ar(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($o(ks(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in lr)return lr[n](t)}}))}function _u(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function yu(t){return B(t)&&"__vccOpts"in t}const Se=(t,e)=>uc(t,e,Pn);function ma(t,e,n){const r=arguments.length;return r===2?re(e)&&!H(e)?ur(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ur(n)&&(n=[n]),ye(t,e,n))}const bu="3.2.39",vu="http://www.w3.org/2000/svg",St=typeof document<"u"?document:null,wi=St&&St.createElement("template"),Eu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?St.createElementNS(vu,t):St.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>St.createTextNode(t),createComment:t=>St.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>St.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{wi.innerHTML=r?`<svg>${t}</svg>`:t;const a=wi.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function wu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Iu(t,e,n){const r=t.style,s=le(n);if(n&&!s){for(const i in n)ls(r,i,n[i]);if(e&&!le(e))for(const i in e)n[i]==null&&ls(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ii=/\s*!important$/;function ls(t,e,n){if(H(n))n.forEach(r=>ls(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Tu(t,e);Ii.test(n)?t.setProperty(on(r),n.replace(Ii,""),"important"):t[r]=n}}const Ti=["Webkit","Moz","ms"],Hr={};function Tu(t,e){const n=Hr[e];if(n)return n;let r=Ke(e);if(r!=="filter"&&r in t)return Hr[e]=r;r=Er(r);for(let s=0;s<Ti.length;s++){const i=Ti[s]+r;if(i in t)return Hr[e]=i}return e}const Si="http://www.w3.org/1999/xlink";function Su(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Si,e.slice(6,e.length)):t.setAttributeNS(Si,e,n);else{const i=vl(e);n==null||i&&!yo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ru(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=yo(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[_a,Cu]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let cs=0;const Au=Promise.resolve(),Ou=()=>{cs=0},Pu=()=>cs||(Au.then(Ou),cs=_a());function ku(t,e,n,r){t.addEventListener(e,n,r)}function Nu(t,e,n,r){t.removeEventListener(e,n,r)}function Mu(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Du(e);if(r){const c=i[e]=xu(r,s);ku(t,a,c,l)}else o&&(Nu(t,a,o,l),i[e]=void 0)}}const Ri=/(?:Once|Passive|Capture)$/;function Du(t){let e;if(Ri.test(t)){e={};let r;for(;r=t.match(Ri);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):on(t.slice(2)),e]}function xu(t,e){const n=r=>{const s=r.timeStamp||_a();(Cu||s>=n.attached-1)&&Ne(Lu(r,n.value),e,5,[r])};return n.value=t,n.attached=Pu(),n}function Lu(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ci=/^on[a-z]/,Uu=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?wu(t,r,s):e==="style"?Iu(t,n,r):yr(e)?Es(e)||Mu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fu(t,e,r,s))?Ru(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Su(t,e,r,s))};function Fu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ci.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ci.test(e)&&le(n)?!1:e in t}const Bu=ge({patchProp:Uu},Eu);let Ai;function Hu(){return Ai||(Ai=tu(Bu))}const $u=(...t)=>{const e=Hu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Wu(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Wu(t){return le(t)?document.querySelector(t):t}var ju=!1;/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Vu=Symbol();var Oi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Oi||(Oi={}));function zu(){const t=Nl(!0),e=t.run(()=>Bo({}));let n=[],r=[];const s=ks({install(i){s._a=i,i.provide(Vu,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!ju?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ku=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},qu={};function Gu(t,e){const n=Bc("RouterView");return Ee(),Fs(n)}const Ju=Ku(qu,[["render",Gu]]),Yu="modulepreload",Qu=function(t){return"/"+t},Pi={},$r=function(e,n,r){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=Qu(s),s in Pi)return;Pi[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":Yu,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof window<"u";function Xu(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const G=Object.assign;function Wr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Me(s)?s.map(t):t(s)}return n}const En=()=>{},Me=Array.isArray,Zu=/\/$/,ed=t=>t.replace(Zu,"");function jr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=sd(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function td(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ki(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function nd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&nn(e.matched[r],n.matched[s])&&ya(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function nn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ya(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rd(t[n],e[n]))return!1;return!0}function rd(t,e){return Me(t)?Ni(t,e):Me(e)?Ni(e,t):t===e}function Ni(t,e){return Me(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function sd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var kn;(function(t){t.pop="pop",t.push="push"})(kn||(kn={}));var wn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(wn||(wn={}));function id(t){if(!t)if(jt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ed(t)}const od=/^[^#]+#/;function ad(t,e){return t.replace(od,"#")+e}function ld(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Or=()=>({left:window.pageXOffset,top:window.pageYOffset});function cd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ld(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Mi(t,e){return(history.state?history.state.position-e:-1)+t}const us=new Map;function ud(t,e){us.set(t,e)}function dd(t){const e=us.get(t);return us.delete(t),e}let fd=()=>location.protocol+"//"+location.host;function ba(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),ki(l,"")}return ki(n,t)+r+s}function hd(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=ba(t,location),R=n.value,U=e.value;let A=0;if(p){if(n.value=_,e.value=p,o&&o===R){o=null;return}A=U?p.position-U.position:0}else r(_);s.forEach(C=>{C(n.value,R,{delta:A,type:kn.pop,direction:A?A>0?wn.forward:wn.back:wn.unknown})})};function l(){o=n.value}function c(p){s.push(p);const _=()=>{const R=s.indexOf(p);R>-1&&s.splice(R,1)};return i.push(_),_}function d(){const{history:p}=window;!p.state||p.replaceState(G({},p.state,{scroll:Or()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d),{pauseListeners:l,listen:c,destroy:h}}function Di(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Or():null}}function pd(t){const{history:e,location:n}=window,r={value:ba(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,d){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:fd()+t+l;try{e[d?"replaceState":"pushState"](c,"",p),s.value=c}catch(_){console.error(_),n[d?"replace":"assign"](p)}}function o(l,c){const d=G({},e.state,Di(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,d,!0),r.value=l}function a(l,c){const d=G({},s.value,e.state,{forward:l,scroll:Or()});i(d.current,d,!0);const h=G({},Di(r.value,l,null),{position:d.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function gd(t){t=id(t);const e=pd(t),n=hd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=G({location:"",base:t,go:r,createHref:ad.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function md(t){return typeof t=="string"||t&&typeof t=="object"}function va(t){return typeof t=="string"||typeof t=="symbol"}const it={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ea=Symbol("");var xi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xi||(xi={}));function rn(t,e){return G(new Error,{type:t,[Ea]:!0},e)}function Je(t,e){return t instanceof Error&&Ea in t&&(e==null||!!(t.type&e))}const Li="[^/]+?",_d={sensitive:!1,strict:!1,start:!0,end:!0},yd=/[.+*?^${}()[\]/\\]/g;function bd(t,e){const n=G({},_d,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const d=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const p=c[h];let _=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(yd,"\\$&"),_+=40;else if(p.type===1){const{value:R,repeatable:U,optional:A,regexp:C}=p;i.push({name:R,repeatable:U,optional:A});const x=C||Li;if(x!==Li){_+=10;try{new RegExp(`(${x})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${R}" (${x}): `+z.message)}}let W=U?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(W=A&&c.length<2?`(?:/${W})`:"/"+W),A&&(W+="?"),s+=W,_+=20,A&&(_+=-8),U&&(_+=-20),x===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const d=c.match(o),h={};if(!d)return null;for(let p=1;p<d.length;p++){const _=d[p]||"",R=i[p-1];h[R.name]=_&&R.repeatable?_.split("/"):_}return h}function l(c){let d="",h=!1;for(const p of t){(!h||!d.endsWith("/"))&&(d+="/"),h=!1;for(const _ of p)if(_.type===0)d+=_.value;else if(_.type===1){const{value:R,repeatable:U,optional:A}=_,C=R in c?c[R]:"";if(Me(C)&&!U)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const x=Me(C)?C.join("/"):C;if(!x)if(A)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):h=!0);else throw new Error(`Missing required param "${R}"`);d+=x}}return d||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function vd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ed(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vd(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ui(r))return 1;if(Ui(s))return-1}return s.length-r.length}function Ui(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wd={type:0,value:""},Id=/[a-zA-Z0-9_]/;function Td(t){if(!t)return[[]];if(t==="/")return[[wd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",d="";function h(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:Id.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function Sd(t,e,n){const r=bd(Td(t.path),n),s=G(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Rd(t,e){const n=[],r=new Map;e=Hi({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,h,p){const _=!p,R=Cd(d);R.aliasOf=p&&p.record;const U=Hi(e,d),A=[R];if("alias"in d){const W=typeof d.alias=="string"?[d.alias]:d.alias;for(const z of W)A.push(G({},R,{components:p?p.record.components:R.components,path:z,aliasOf:p?p.record:R}))}let C,x;for(const W of A){const{path:z}=W;if(h&&z[0]!=="/"){const ie=h.record.path,oe=ie[ie.length-1]==="/"?"":"/";W.path=h.record.path+(z&&oe+z)}if(C=Sd(W,h,U),p?p.alias.push(C):(x=x||C,x!==C&&x.alias.push(C),_&&d.name&&!Bi(C)&&o(d.name)),R.children){const ie=R.children;for(let oe=0;oe<ie.length;oe++)i(ie[oe],C,p&&p.children[oe])}p=p||C,l(C)}return x?()=>{o(x)}:En}function o(d){if(va(d)){const h=r.get(d);h&&(r.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){let h=0;for(;h<n.length&&Ed(d,n[h])>=0&&(d.record.path!==n[h].record.path||!wa(d,n[h]));)h++;n.splice(h,0,d),d.record.name&&!Bi(d)&&r.set(d.record.name,d)}function c(d,h){let p,_={},R,U;if("name"in d&&d.name){if(p=r.get(d.name),!p)throw rn(1,{location:d});U=p.record.name,_=G(Fi(h.params,p.keys.filter(x=>!x.optional).map(x=>x.name)),d.params&&Fi(d.params,p.keys.map(x=>x.name))),R=p.stringify(_)}else if("path"in d)R=d.path,p=n.find(x=>x.re.test(R)),p&&(_=p.parse(R),U=p.record.name);else{if(p=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!p)throw rn(1,{location:d,currentLocation:h});U=p.record.name,_=G({},h.params,d.params),R=p.stringify(_)}const A=[];let C=p;for(;C;)A.unshift(C.record),C=C.parent;return{name:U,path:R,params:_,matched:A,meta:Od(A)}}return t.forEach(d=>i(d)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Fi(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Cd(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ad(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ad(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Bi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Od(t){return t.reduce((e,n)=>G(e,n.meta),{})}function Hi(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function wa(t,e){return e.children.some(n=>n===t||wa(t,n))}const Ia=/#/g,Pd=/&/g,kd=/\//g,Nd=/=/g,Md=/\?/g,Ta=/\+/g,Dd=/%5B/g,xd=/%5D/g,Sa=/%5E/g,Ld=/%60/g,Ra=/%7B/g,Ud=/%7C/g,Ca=/%7D/g,Fd=/%20/g;function Hs(t){return encodeURI(""+t).replace(Ud,"|").replace(Dd,"[").replace(xd,"]")}function Bd(t){return Hs(t).replace(Ra,"{").replace(Ca,"}").replace(Sa,"^")}function ds(t){return Hs(t).replace(Ta,"%2B").replace(Fd,"+").replace(Ia,"%23").replace(Pd,"%26").replace(Ld,"`").replace(Ra,"{").replace(Ca,"}").replace(Sa,"^")}function Hd(t){return ds(t).replace(Nd,"%3D")}function $d(t){return Hs(t).replace(Ia,"%23").replace(Md,"%3F")}function Wd(t){return t==null?"":$d(t).replace(kd,"%2F")}function dr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function jd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ta," "),o=i.indexOf("="),a=dr(o<0?i:i.slice(0,o)),l=o<0?null:dr(i.slice(o+1));if(a in e){let c=e[a];Me(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function $i(t){let e="";for(let n in t){const r=t[n];if(n=Hd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Me(r)?r.map(i=>i&&ds(i)):[r&&ds(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Vd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Me(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const zd=Symbol(""),Wi=Symbol(""),Pr=Symbol(""),Aa=Symbol(""),fs=Symbol("");function gn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function lt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(rn(4,{from:n,to:e})):h instanceof Error?a(h):md(h)?a(rn(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let d=Promise.resolve(c);t.length<3&&(d=d.then(l)),d.catch(h=>a(h))})}function Vr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Kd(a)){const c=(a.__vccOpts||a)[e];c&&s.push(lt(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const d=Xu(c)?c.default:c;i.components[o]=d;const p=(d.__vccOpts||d)[e];return p&&lt(p,n,r,i,o)()}))}}return s}function Kd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ji(t){const e=Ze(Pr),n=Ze(Aa),r=Se(()=>e.resolve(Gt(t.to))),s=Se(()=>{const{matched:l}=r.value,{length:c}=l,d=l[c-1],h=n.matched;if(!d||!h.length)return-1;const p=h.findIndex(nn.bind(null,d));if(p>-1)return p;const _=Vi(l[c-2]);return c>1&&Vi(d)===_&&h[h.length-1].path!==_?h.findIndex(nn.bind(null,l[c-2])):p}),i=Se(()=>s.value>-1&&Yd(n.params,r.value.params)),o=Se(()=>s.value>-1&&s.value===n.matched.length-1&&ya(n.params,r.value.params));function a(l={}){return Jd(l)?e[Gt(t.replace)?"replace":"push"](Gt(t.to)).catch(En):Promise.resolve()}return{route:r,href:Se(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const qd=Qo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ji,setup(t,{slots:e}){const n=cn(ji(t)),{options:r}=Ze(Pr),s=Se(()=>({[zi(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[zi(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ma("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Gd=qd;function Jd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Yd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Me(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Vi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zi=(t,e,n)=>t!=null?t:e!=null?e:n,Qd=Qo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ze(fs),s=Se(()=>t.route||r.value),i=Ze(Wi,0),o=Se(()=>{let c=Gt(i);const{matched:d}=s.value;let h;for(;(h=d[c])&&!h.components;)c++;return c}),a=Se(()=>s.value.matched[o.value]);Xn(Wi,Se(()=>o.value+1)),Xn(zd,a),Xn(fs,s);const l=Bo();return Zn(()=>[l.value,a.value,t.name],([c,d,h],[p,_,R])=>{d&&(d.instances[h]=c,_&&_!==d&&c&&c===p&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),c&&d&&(!_||!nn(d,_)||!p)&&(d.enterCallbacks[h]||[]).forEach(U=>U(c))},{flush:"post"}),()=>{const c=s.value,d=t.name,h=a.value,p=h&&h.components[d];if(!p)return Ki(n.default,{Component:p,route:c});const _=h.props[d],R=_?_===!0?c.params:typeof _=="function"?_(c):_:null,A=ma(p,G({},R,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[d]=null)},ref:l}));return Ki(n.default,{Component:A,route:c})||A}}});function Ki(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Xd=Qd;function Zd(t){const e=Rd(t.routes,t),n=t.parseQuery||jd,r=t.stringifyQuery||$i,s=t.history,i=gn(),o=gn(),a=gn(),l=oc(it);let c=it;jt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Wr.bind(null,m=>""+m),h=Wr.bind(null,Wd),p=Wr.bind(null,dr);function _(m,P){let T,k;return va(m)?(T=e.getRecordMatcher(m),k=P):k=m,e.addRoute(k,T)}function R(m){const P=e.getRecordMatcher(m);P&&e.removeRoute(P)}function U(){return e.getRoutes().map(m=>m.record)}function A(m){return!!e.getRecordMatcher(m)}function C(m,P){if(P=G({},P||l.value),typeof m=="string"){const F=jr(n,m,P.path),u=e.resolve({path:F.path},P),f=s.createHref(F.fullPath);return G(F,u,{params:p(u.params),hash:dr(F.hash),redirectedFrom:void 0,href:f})}let T;if("path"in m)T=G({},m,{path:jr(n,m.path,P.path).path});else{const F=G({},m.params);for(const u in F)F[u]==null&&delete F[u];T=G({},m,{params:h(m.params)}),P.params=h(P.params)}const k=e.resolve(T,P),q=m.hash||"";k.params=d(p(k.params));const ee=td(r,G({},m,{hash:Bd(q),path:k.path})),$=s.createHref(ee);return G({fullPath:ee,hash:q,query:r===$i?Vd(m.query):m.query||{}},k,{redirectedFrom:void 0,href:$})}function x(m){return typeof m=="string"?jr(n,m,l.value.path):G({},m)}function W(m,P){if(c!==m)return rn(8,{from:P,to:m})}function z(m){return Ie(m)}function ie(m){return z(G(x(m),{replace:!0}))}function oe(m){const P=m.matched[m.matched.length-1];if(P&&P.redirect){const{redirect:T}=P;let k=typeof T=="function"?T(m):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=x(k):{path:k},k.params={}),G({query:m.query,hash:m.hash,params:"path"in k?{}:m.params},k)}}function Ie(m,P){const T=c=C(m),k=l.value,q=m.state,ee=m.force,$=m.replace===!0,F=oe(T);if(F)return Ie(G(x(F),{state:typeof F=="object"?G({},q,F.state):q,force:ee,replace:$}),P||T);const u=T;u.redirectedFrom=P;let f;return!ee&&nd(r,k,T)&&(f=rn(16,{to:u,from:k}),Bt(k,k,!0,!1)),(f?Promise.resolve(f):me(u,k)).catch(g=>Je(g)?Je(g,2)?g:be(g):Z(g,u,k)).then(g=>{if(g){if(Je(g,2))return Ie(G({replace:$},x(g.to),{state:typeof g.to=="object"?G({},q,g.to.state):q,force:ee}),P||u)}else g=qe(u,k,!0,$,q);return xe(u,k,g),g})}function rt(m,P){const T=W(m,P);return T?Promise.reject(T):Promise.resolve()}function me(m,P){let T;const[k,q,ee]=ef(m,P);T=Vr(k.reverse(),"beforeRouteLeave",m,P);for(const F of k)F.leaveGuards.forEach(u=>{T.push(lt(u,m,P))});const $=rt.bind(null,m,P);return T.push($),$t(T).then(()=>{T=[];for(const F of i.list())T.push(lt(F,m,P));return T.push($),$t(T)}).then(()=>{T=Vr(q,"beforeRouteUpdate",m,P);for(const F of q)F.updateGuards.forEach(u=>{T.push(lt(u,m,P))});return T.push($),$t(T)}).then(()=>{T=[];for(const F of m.matched)if(F.beforeEnter&&!P.matched.includes(F))if(Me(F.beforeEnter))for(const u of F.beforeEnter)T.push(lt(u,m,P));else T.push(lt(F.beforeEnter,m,P));return T.push($),$t(T)}).then(()=>(m.matched.forEach(F=>F.enterCallbacks={}),T=Vr(ee,"beforeRouteEnter",m,P),T.push($),$t(T))).then(()=>{T=[];for(const F of o.list())T.push(lt(F,m,P));return T.push($),$t(T)}).catch(F=>Je(F,8)?F:Promise.reject(F))}function xe(m,P,T){for(const k of a.list())k(m,P,T)}function qe(m,P,T,k,q){const ee=W(m,P);if(ee)return ee;const $=P===it,F=jt?history.state:{};T&&(k||$?s.replace(m.fullPath,G({scroll:$&&F&&F.scroll},q)):s.push(m.fullPath,q)),l.value=m,Bt(m,P,T,$),be()}let Re;function Lt(){Re||(Re=s.listen((m,P,T)=>{if(!fn.listening)return;const k=C(m),q=oe(k);if(q){Ie(G(q,{replace:!0}),k).catch(En);return}c=k;const ee=l.value;jt&&ud(Mi(ee.fullPath,T.delta),Or()),me(k,ee).catch($=>Je($,12)?$:Je($,2)?(Ie($.to,k).then(F=>{Je(F,20)&&!T.delta&&T.type===kn.pop&&s.go(-1,!1)}).catch(En),Promise.reject()):(T.delta&&s.go(-T.delta,!1),Z($,k,ee))).then($=>{$=$||qe(k,ee,!1),$&&(T.delta&&!Je($,8)?s.go(-T.delta,!1):T.type===kn.pop&&Je($,20)&&s.go(-1,!1)),xe(k,ee,$)}).catch(En)}))}let Ut=gn(),Ft=gn(),se;function Z(m,P,T){be(m);const k=Ft.list();return k.length?k.forEach(q=>q(m,P,T)):console.error(m),Promise.reject(m)}function J(){return se&&l.value!==it?Promise.resolve():new Promise((m,P)=>{Ut.add([m,P])})}function be(m){return se||(se=!m,Lt(),Ut.list().forEach(([P,T])=>m?T(m):P()),Ut.reset()),m}function Bt(m,P,T,k){const{scrollBehavior:q}=t;if(!jt||!q)return Promise.resolve();const ee=!T&&dd(Mi(m.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return Vo().then(()=>q(m,P,ee)).then($=>$&&cd($)).catch($=>Z($,m,P))}const Ge=m=>s.go(m);let Le;const Te=new Set,fn={currentRoute:l,listening:!0,addRoute:_,removeRoute:R,hasRoute:A,getRoutes:U,resolve:C,options:t,push:z,replace:ie,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ft.add,isReady:J,install(m){const P=this;m.component("RouterLink",Gd),m.component("RouterView",Xd),m.config.globalProperties.$router=P,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>Gt(l)}),jt&&!Le&&l.value===it&&(Le=!0,z(s.location).catch(q=>{}));const T={};for(const q in it)T[q]=Se(()=>l.value[q]);m.provide(Pr,P),m.provide(Aa,cn(T)),m.provide(fs,l);const k=m.unmount;Te.add(m),m.unmount=function(){Te.delete(m),Te.size<1&&(c=it,Re&&Re(),Re=null,l.value=it,Le=!1,se=!1),k()}}};return fn}function $t(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function ef(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>nn(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>nn(c,l))||s.push(l))}return[n,r,s]}function Kg(){return Ze(Pr)}const tf=Zd({history:gd("/"),routes:[{path:"",name:"home",component:()=>$r(()=>import("./main.c9b377d1.js"),[])},{path:"/login",name:"login",component:()=>$r(()=>import("./login.7bbddedb.js"),["assets/login.7bbddedb.js","assets/login.a93e458f.css"])},{path:"/register",name:"register",component:()=>$r(()=>import("./register.789fb689.js"),["assets/register.789fb689.js","assets/register.dfcbba43.css"])}]});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Oa=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},nf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Pa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,d=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(p=64)),r.push(n[d],n[h],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Oa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw Error();const p=i<<2|a>>4;if(r.push(p),c!==64){const _=a<<4&240|c>>2;if(r.push(_),h!==64){const R=c<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},rf=function(t){const e=Oa(t);return Pa.encodeByteArray(e,!0)},ka=function(t){return rf(t).replace(/\./g,"")},sf=function(t){try{return Pa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function af(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function lf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uf(){const t=fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function df(){return typeof indexedDB=="object"}function ff(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="FirebaseError";class bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hf,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Un.prototype.create)}}class Un{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?pf(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new bt(s,a,r)}}function pf(t,e){return t.replace(gf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gf=/\{\$([^}]+)}/g;function mf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(qi(i)&&qi(o)){if(!fr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function qi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _n(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function yn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _f(t,e){const n=new yf(t,e);return n.subscribe.bind(n)}class yf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=zr),s.error===void 0&&(s.error=zr),s.complete===void 0&&(s.complete=zr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zr(){}/**
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
 */function un(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const It="[DEFAULT]";/**
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
 */class vf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new of;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wf(e))try{this.getOrInitializeService({instanceIdentifier:It})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=It){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=It){return this.instances.has(e)}getOptions(e=It){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ef(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=It){return this.component?this.component.multipleInstances?e:It:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ef(t){return t===It?void 0:t}function wf(t){return t.instantiationMode==="EAGER"}/**
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
 */class If{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Tf={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Sf=te.INFO,Rf={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Cf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Rf[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Na{constructor(e){this.name=e,this._logLevel=Sf,this._logHandler=Cf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Af=(t,e)=>e.some(n=>t instanceof n);let Gi,Ji;function Of(){return Gi||(Gi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pf(){return Ji||(Ji=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ma=new WeakMap,hs=new WeakMap,Da=new WeakMap,Kr=new WeakMap,$s=new WeakMap;function kf(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(mt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ma.set(n,t)}).catch(()=>{}),$s.set(e,t),e}function Nf(t){if(hs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});hs.set(t,e)}let ps={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Da.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Mf(t){ps=t(ps)}function Df(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qr(this),e,...n);return Da.set(r,e.sort?e.sort():[e]),mt(r)}:Pf().includes(t)?function(...e){return t.apply(qr(this),e),mt(Ma.get(this))}:function(...e){return mt(t.apply(qr(this),e))}}function xf(t){return typeof t=="function"?Df(t):(t instanceof IDBTransaction&&Nf(t),Af(t,Of())?new Proxy(t,ps):t)}function mt(t){if(t instanceof IDBRequest)return kf(t);if(Kr.has(t))return Kr.get(t);const e=xf(t);return e!==t&&(Kr.set(t,e),$s.set(e,t)),e}const qr=t=>$s.get(t);function Lf(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=mt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(mt(o.result),l.oldVersion,l.newVersion,mt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Uf=["get","getKey","getAll","getAllKeys","count"],Ff=["put","add","delete","clear"],Gr=new Map;function Yi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gr.get(e))return Gr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ff.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Uf.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Gr.set(e,i),i}Mf(t=>({...t,get:(e,n,r)=>Yi(e,n)||t.get(e,n,r),has:(e,n)=>!!Yi(e,n)||t.has(e,n)}));/**
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
 */class Bf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Hf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gs="@firebase/app",Qi="0.7.33";/**
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
 */const kt=new Na("@firebase/app"),$f="@firebase/app-compat",Wf="@firebase/analytics-compat",jf="@firebase/analytics",Vf="@firebase/app-check-compat",zf="@firebase/app-check",Kf="@firebase/auth",qf="@firebase/auth-compat",Gf="@firebase/database",Jf="@firebase/database-compat",Yf="@firebase/functions",Qf="@firebase/functions-compat",Xf="@firebase/installations",Zf="@firebase/installations-compat",eh="@firebase/messaging",th="@firebase/messaging-compat",nh="@firebase/performance",rh="@firebase/performance-compat",sh="@firebase/remote-config",ih="@firebase/remote-config-compat",oh="@firebase/storage",ah="@firebase/storage-compat",lh="@firebase/firestore",ch="@firebase/firestore-compat",uh="firebase",dh="9.10.0";/**
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
 */const xa="[DEFAULT]",fh={[gs]:"fire-core",[$f]:"fire-core-compat",[jf]:"fire-analytics",[Wf]:"fire-analytics-compat",[zf]:"fire-app-check",[Vf]:"fire-app-check-compat",[Kf]:"fire-auth",[qf]:"fire-auth-compat",[Gf]:"fire-rtdb",[Jf]:"fire-rtdb-compat",[Yf]:"fire-fn",[Qf]:"fire-fn-compat",[Xf]:"fire-iid",[Zf]:"fire-iid-compat",[eh]:"fire-fcm",[th]:"fire-fcm-compat",[nh]:"fire-perf",[rh]:"fire-perf-compat",[sh]:"fire-rc",[ih]:"fire-rc-compat",[oh]:"fire-gcs",[ah]:"fire-gcs-compat",[lh]:"fire-fst",[ch]:"fire-fst-compat","fire-js":"fire-js",[uh]:"fire-js-all"};/**
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
 */const hr=new Map,ms=new Map;function hh(t,e){try{t.container.addComponent(e)}catch(n){kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nn(t){const e=t.name;if(ms.has(e))return kt.debug(`There were multiple attempts to register component ${e}.`),!1;ms.set(e,t);for(const n of hr.values())hh(n,t);return!0}function La(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ph={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nt=new Un("app","Firebase",ph);/**
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
 */class gh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
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
 */const kr=dh;function mh(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:xa,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Nt.create("bad-app-name",{appName:String(r)});const s=hr.get(r);if(s){if(fr(t,s.options)&&fr(n,s.config))return s;throw Nt.create("duplicate-app",{appName:r})}const i=new If(r);for(const a of ms.values())i.addComponent(a);const o=new gh(t,n,i);return hr.set(r,o),o}function _h(t=xa){const e=hr.get(t);if(!e)throw Nt.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let s=(r=fh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kt.warn(a.join(" "));return}Nn(new sn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const yh="firebase-heartbeat-database",bh=1,Mn="firebase-heartbeat-store";let Jr=null;function Ua(){return Jr||(Jr=Lf(yh,bh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mn)}}}).catch(t=>{throw Nt.create("idb-open",{originalErrorMessage:t.message})})),Jr}async function vh(t){var e;try{return(await Ua()).transaction(Mn).objectStore(Mn).get(Fa(t))}catch(n){if(n instanceof bt)kt.warn(n.message);else{const r=Nt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});kt.warn(r.message)}}}async function Xi(t,e){var n;try{const s=(await Ua()).transaction(Mn,"readwrite");return await s.objectStore(Mn).put(e,Fa(t)),s.done}catch(r){if(r instanceof bt)kt.warn(r.message);else{const s=Nt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});kt.warn(s.message)}}}function Fa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Eh=1024,wh=30*24*60*60*1e3;class Ih{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=wh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zi(),{heartbeatsToSend:n,unsentEntries:r}=Th(this._heartbeatsCache.heartbeats),s=ka(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Zi(){return new Date().toISOString().substring(0,10)}function Th(t,e=Eh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),eo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),eo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return df()?ff().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function eo(t){return ka(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Rh(t){Nn(new sn("platform-logger",e=>new Bf(e),"PRIVATE")),Nn(new sn("heartbeat",e=>new Ih(e),"PRIVATE")),Yt(gs,Qi,t),Yt(gs,Qi,"esm2017"),Yt("fire-js","")}Rh("");var Ch="firebase",Ah="9.10.0";/**
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
 */Yt(Ch,Ah,"app");function Ws(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ba(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oh=Ba,Ha=new Un("auth","Firebase",Ba());/**
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
 */const to=new Na("@firebase/auth");function tr(t,...e){to.logLevel<=te.ERROR&&to.error(`Auth (${kr}): ${t}`,...e)}/**
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
 */function De(t,...e){throw js(t,...e)}function Ve(t,...e){return js(t,...e)}function Ph(t,e,n){const r=Object.assign(Object.assign({},Oh()),{[e]:n});return new Un("auth","Firebase",r).create(e,{appName:t.name})}function js(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ha.create(t,...e)}function D(t,e,...n){if(!t)throw js(e,...n)}function Qe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tr(e),new Error(e)}function tt(t,e){t||Qe(e)}/**
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
 */const no=new Map;function Xe(t){tt(t instanceof Function,"Expected a class definition");let e=no.get(t);return e?(tt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,no.set(t,e),e)}/**
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
 */function kh(t,e){const n=La(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fr(i,e!=null?e:{}))return s;De(s,"already-initialized")}return n.initialize({options:e})}function Nh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function _s(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Mh(){return ro()==="http:"||ro()==="https:"}function ro(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Dh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mh()||lf()||"connection"in navigator)?navigator.onLine:!0}function xh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Bn{constructor(e,n){this.shortDelay=e,this.longDelay=n,tt(n>e,"Short delay should be less than long delay!"),this.isMobile=af()||cf()}get(){return Dh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vs(t,e){tt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $a{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Uh=new Bn(3e4,6e4);function Hn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $n(t,e,n,r,s={}){return Wa(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Fn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),$a.fetch()(ja(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Wa(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Lh),e);try{const s=new Fh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Yn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yn(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yn(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yn(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ph(t,d,c);De(t,d)}}catch(s){if(s instanceof bt)throw s;De(t,"network-request-failed")}}async function Wn(t,e,n,r,s={}){const i=await $n(t,e,n,r,s);return"mfaPendingCredential"in i&&De(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ja(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Vs(t.config,s):`${t.config.apiScheme}://${s}`}class Fh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ve(this.auth,"network-request-failed")),Uh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ve(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Bh(t,e){return $n(t,"POST","/v1/accounts:delete",e)}async function Hh(t,e){return $n(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function In(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $h(t,e=!1){const n=un(t),r=await n.getIdToken(e),s=zs(r);D(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:In(Yr(s.auth_time)),issuedAtTime:In(Yr(s.iat)),expirationTime:In(Yr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Yr(t){return Number(t)*1e3}function zs(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return tr("JWT malformed, contained fewer than 3 sections"),null;try{const i=sf(r);return i?JSON.parse(i):(tr("Failed to decode base64 JWT payload"),null)}catch(i){return tr("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Wh(t){const e=zs(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Dn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bt&&jh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Vh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Va{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=In(this.lastLoginAt),this.creationTime=In(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Dn(t,Hh(n,{idToken:r}));D(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?qh(i.providerUserInfo):[],a=Kh(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Va(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function zh(t){const e=un(t);await pr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function qh(t){return t.map(e=>{var{providerId:n}=e,r=Ws(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Gh(t,e){const n=await Wa(t,{},async()=>{const r=Fn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ja(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$a.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Gh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new xn;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(D(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(D(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xn,this.toJSON())}_performRefresh(){return Qe("not implemented")}}/**
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
 */function ot(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ws(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Va(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Dn(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $h(this,e)}reload(){return zh(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dn(this,Bh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,U=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,x=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:W,emailVerified:z,isAnonymous:ie,providerData:oe,stsTokenManager:Ie}=n;D(W&&Ie,e,"internal-error");const rt=xn.fromJSON(this.name,Ie);D(typeof W=="string",e,"internal-error"),ot(h,e.name),ot(p,e.name),D(typeof z=="boolean",e,"internal-error"),D(typeof ie=="boolean",e,"internal-error"),ot(_,e.name),ot(R,e.name),ot(U,e.name),ot(A,e.name),ot(C,e.name),ot(x,e.name);const me=new Pt({uid:W,auth:e,email:p,emailVerified:z,displayName:h,isAnonymous:ie,photoURL:R,phoneNumber:_,tenantId:U,stsTokenManager:rt,createdAt:C,lastLoginAt:x});return oe&&Array.isArray(oe)&&(me.providerData=oe.map(xe=>Object.assign({},xe))),A&&(me._redirectEventId=A),me}static async _fromIdTokenResponse(e,n,r=!1){const s=new xn;s.updateFromServerResponse(n);const i=new Pt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await pr(i),i}}/**
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
 */class za{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}za.type="NONE";const so=za;/**
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
 */function nr(t,e,n){return`firebase:${t}:${e}:${n}`}class Qt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=nr(this.userKey,s.apiKey,i),this.fullPersistenceKey=nr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qt(Xe(so),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Xe(so);const o=nr(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const h=Pt._fromJSON(e,d);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Qt(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Qt(i,e,r))}}/**
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
 */function io(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ga(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ka(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ya(e))return"Blackberry";if(Qa(e))return"Webos";if(Ks(e))return"Safari";if((e.includes("chrome/")||qa(e))&&!e.includes("edge/"))return"Chrome";if(Ja(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ka(t=fe()){return/firefox\//i.test(t)}function Ks(t=fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qa(t=fe()){return/crios\//i.test(t)}function Ga(t=fe()){return/iemobile/i.test(t)}function Ja(t=fe()){return/android/i.test(t)}function Ya(t=fe()){return/blackberry/i.test(t)}function Qa(t=fe()){return/webos/i.test(t)}function Nr(t=fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Jh(t=fe()){var e;return Nr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yh(){return uf()&&document.documentMode===10}function Xa(t=fe()){return Nr(t)||Ja(t)||Qa(t)||Ya(t)||/windows phone/i.test(t)||Ga(t)}function Qh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Za(t,e=[]){let n;switch(t){case"Browser":n=io(fe());break;case"Worker":n=`${io(fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${kr}/${r}`}/**
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
 */class Xh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class Zh{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oo(this),this.idTokenSubscription=new oo(this),this.beforeStateQueue=new Xh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ha,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xe(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Qt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await pr(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?un(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xe(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Un("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xe(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Qt.create(this,[Xe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Za(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Mr(t){return un(t)}class oo{constructor(e){this.auth=e,this.observer=null,this.addObserver=_f(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class qs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qe("not implemented")}_getIdTokenResponse(e){return Qe("not implemented")}_linkToIdToken(e,n){return Qe("not implemented")}_getReauthenticationResolver(e){return Qe("not implemented")}}async function ep(t,e){return $n(t,"POST","/v1/accounts:update",e)}/**
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
 */async function tp(t,e){return Wn(t,"POST","/v1/accounts:signInWithPassword",Hn(t,e))}/**
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
 */async function np(t,e){return Wn(t,"POST","/v1/accounts:signInWithEmailLink",Hn(t,e))}async function rp(t,e){return Wn(t,"POST","/v1/accounts:signInWithEmailLink",Hn(t,e))}/**
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
 */class Ln extends qs{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ln(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ln(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return tp(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return np(e,{email:this._email,oobCode:this._password});default:De(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ep(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rp(e,{idToken:n,email:this._email,oobCode:this._password});default:De(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xt(t,e){return Wn(t,"POST","/v1/accounts:signInWithIdp",Hn(t,e))}/**
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
 */const sp="http://localhost";class Mt extends qs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):De("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ws(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Mt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xt(e,n)}buildRequest(){const e={requestUri:sp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fn(n)}return e}}/**
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
 */function ip(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function op(t){const e=_n(yn(t)).link,n=e?_n(yn(e)).deep_link_id:null,r=_n(yn(t)).deep_link_id;return(r?_n(yn(r)).link:null)||r||n||e||t}class Gs{constructor(e){var n,r,s,i,o,a;const l=_n(yn(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=ip((s=l.mode)!==null&&s!==void 0?s:null);D(c&&d&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=op(e);try{return new Gs(n)}catch{return null}}}/**
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
 */class dn{constructor(){this.providerId=dn.PROVIDER_ID}static credential(e,n){return Ln._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gs.parseLink(n);return D(r,"argument-error"),Ln._fromEmailAndCode(e,r.code,r.tenantId)}}dn.PROVIDER_ID="password";dn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";dn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class el{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jn extends el{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ct extends jn{constructor(){super("facebook.com")}static credential(e){return Mt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
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
 */class ut extends jn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ut.credential(n,r)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
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
 */class dt extends jn{constructor(){super("github.com")}static credential(e){return Mt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch{return null}}}dt.GITHUB_SIGN_IN_METHOD="github.com";dt.PROVIDER_ID="github.com";/**
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
 */class ft extends jn{constructor(){super("twitter.com")}static credential(e,n){return Mt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ft.credential(n,r)}catch{return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
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
 */async function ap(t,e){return Wn(t,"POST","/v1/accounts:signUp",Hn(t,e))}/**
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
 */class Dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Pt._fromIdTokenResponse(e,r,s),o=ao(r);return new Dt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ao(r);return new Dt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ao(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class gr extends bt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,gr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new gr(e,n,r,s)}}function tl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?gr._fromErrorAndOperation(t,i,e,r):i})}async function lp(t,e,n=!1){const r=await Dn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dt._forOperation(t,"link",r)}/**
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
 */async function cp(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await Dn(t,tl(s,i,e,t),n);D(o.idToken,s,"internal-error");const a=zs(o.idToken);D(a,s,"internal-error");const{sub:l}=a;return D(t.uid===l,s,"user-mismatch"),Dt._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&De(s,"user-mismatch"),o}}/**
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
 */async function nl(t,e,n=!1){const r="signIn",s=await tl(t,r,e),i=await Dt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function up(t,e){return nl(Mr(t),e)}async function qg(t,e,n){const r=Mr(t),s=await ap(r,{returnSecureToken:!0,email:e,password:n}),i=await Dt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Gg(t,e,n){return up(un(t),dn.credential(e,n))}function Jg(t){return un(t).signOut()}const mr="__sak";/**
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
 */class rl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mr,"1"),this.storage.removeItem(mr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function dp(){const t=fe();return Ks(t)||Nr(t)}const fp=1e3,hp=10;class sl extends rl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dp()&&Qh(),this.fallbackToPolling=Xa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Yh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,hp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sl.type="LOCAL";const pp=sl;/**
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
 */class il extends rl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}il.type="SESSION";const ol=il;/**
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
 */function gp(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Dr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Dr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await gp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dr.receivers=[];/**
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
 */function Js(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class mp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Js("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ze(){return window}function _p(t){ze().location.href=t}/**
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
 */function al(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function yp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vp(){return al()?self:null}/**
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
 */const ll="firebaseLocalStorageDb",Ep=1,_r="firebaseLocalStorage",cl="fbase_key";class Vn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xr(t,e){return t.transaction([_r],e?"readwrite":"readonly").objectStore(_r)}function wp(){const t=indexedDB.deleteDatabase(ll);return new Vn(t).toPromise()}function ys(){const t=indexedDB.open(ll,Ep);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_r,{keyPath:cl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_r)?e(r):(r.close(),await wp(),e(await ys()))})})}async function lo(t,e,n){const r=xr(t,!0).put({[cl]:e,value:n});return new Vn(r).toPromise()}async function Ip(t,e){const n=xr(t,!1).get(e),r=await new Vn(n).toPromise();return r===void 0?null:r.value}function co(t,e){const n=xr(t,!0).delete(e);return new Vn(n).toPromise()}const Tp=800,Sp=3;class ul{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ys(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Sp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return al()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dr._getInstance(vp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yp(),!this.activeServiceWorker)return;this.sender=new mp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ys();return await lo(e,mr,"1"),await co(e,mr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ip(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>co(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xr(s,!1).getAll();return new Vn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ul.type="LOCAL";const Rp=ul;/**
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
 */function Cp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ap(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ve("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Cp().appendChild(r)})}function Op(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Bn(3e4,6e4);/**
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
 */function Pp(t,e){return e?Xe(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ys extends qs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kp(t){return nl(t.auth,new Ys(t),t.bypassAuthState)}function Np(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),cp(n,new Ys(t),t.bypassAuthState)}async function Mp(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),lp(n,new Ys(t),t.bypassAuthState)}/**
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
 */class dl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kp;case"linkViaPopup":case"linkViaRedirect":return Mp;case"reauthViaPopup":case"reauthViaRedirect":return Np;default:De(this.auth,"internal-error")}}resolve(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Dp=new Bn(2e3,1e4);class Vt extends dl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vt.currentPopupAction&&Vt.currentPopupAction.cancel(),Vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){tt(this.filter.length===1,"Popup operations only handle one event");const e=Js();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ve(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ve(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Dp.get())};e()}}Vt.currentPopupAction=null;/**
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
 */const xp="pendingRedirect",rr=new Map;class Lp extends dl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rr.get(this.auth._key());if(!e){try{const r=await Up(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rr.set(this.auth._key(),e)}return this.bypassAuthState||rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Up(t,e){const n=Hp(e),r=Bp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Fp(t,e){rr.set(t._key(),e)}function Bp(t){return Xe(t._redirectPersistence)}function Hp(t){return nr(xp,t.config.apiKey,t.name)}async function $p(t,e,n=!1){const r=Mr(t),s=Pp(r,e),o=await new Lp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Wp=10*60*1e3;class jp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Vp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ve(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wp&&this.cachedEventUids.clear(),this.cachedEventUids.has(uo(e))}saveEventToCache(e){this.cachedEventUids.add(uo(e)),this.lastProcessedEventTime=Date.now()}}function uo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Vp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fl(t);default:return!1}}/**
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
 */async function zp(t,e={}){return $n(t,"GET","/v1/projects",e)}/**
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
 */const Kp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qp=/^https?/;async function Gp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zp(t);for(const n of e)try{if(Jp(n))return}catch{}De(t,"unauthorized-domain")}function Jp(t){const e=_s(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qp.test(n))return!1;if(Kp.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Yp=new Bn(3e4,6e4);function fo(){const t=ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Qp(t){return new Promise((e,n)=>{var r,s,i;function o(){fo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fo(),n(Ve(t,"network-request-failed"))},timeout:Yp.get()})}if(!((s=(r=ze().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ze().gapi)===null||i===void 0)&&i.load)o();else{const a=Op("iframefcb");return ze()[a]=()=>{gapi.load?o():n(Ve(t,"network-request-failed"))},Ap(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw sr=null,e})}let sr=null;function Xp(t){return sr=sr||Qp(t),sr}/**
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
 */const Zp=new Bn(5e3,15e3),eg="__/auth/iframe",tg="emulator/auth/iframe",ng={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sg(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vs(e,tg):`https://${t.config.authDomain}/${eg}`,r={apiKey:e.apiKey,appName:t.name,v:kr},s=rg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Fn(r).slice(1)}`}async function ig(t){const e=await Xp(t),n=ze().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:sg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ng,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ve(t,"network-request-failed"),a=ze().setTimeout(()=>{i(o)},Zp.get());function l(){ze().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const og={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ag=500,lg=600,cg="_blank",ug="http://localhost";class ho{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dg(t,e,n,r=ag,s=lg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},og),{width:r.toString(),height:s.toString(),top:i,left:o}),c=fe().toLowerCase();n&&(a=qa(c)?cg:n),Ka(c)&&(e=e||ug,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[_,R])=>`${p}${_}=${R},`,"");if(Jh(c)&&a!=="_self")return fg(e||"",a),new ho(null);const h=window.open(e||"",a,d);D(h,t,"popup-blocked");try{h.focus()}catch{}return new ho(h)}function fg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const hg="__/auth/handler",pg="emulator/auth/handler";function po(t,e,n,r,s,i){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:kr,eventId:s};if(e instanceof el){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof jn){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${gg(t)}?${Fn(a).slice(1)}`}function gg({config:t}){return t.emulator?Vs(t,pg):`https://${t.authDomain}/${hg}`}/**
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
 */const Qr="webStorageSupport";class mg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ol,this._completeRedirectFn=$p,this._overrideRedirectResult=Fp}async _openPopup(e,n,r,s){var i;tt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=po(e,n,r,_s(),s);return dg(e,o,Js())}async _openRedirect(e,n,r,s){return await this._originValidation(e),_p(po(e,n,r,_s(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(tt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ig(e),r=new jp(e);return n.register("authEvent",s=>(D(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qr,{type:Qr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Qr];o!==void 0&&n(!!o),De(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Gp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xa()||Ks()||Nr()}}const _g=mg;var go="@firebase/auth",mo="0.20.7";/**
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
 */class yg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vg(t){Nn(new sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,l)=>{D(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),D(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Za(t)},d=new Zh(a,l,c);return Nh(d,n),d})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nn(new sn("auth-internal",e=>{const n=Mr(e.getProvider("auth").getImmediate());return(r=>new yg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(go,mo,bg(t)),Yt(go,mo,"esm2017")}/**
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
 */function Yg(t=_h()){const e=La(t,"auth");return e.isInitialized()?e.getImmediate():kh(t,{popupRedirectResolver:_g,persistence:[Rp,pp,ol]})}vg("Browser");var He={innerWidth(t){if(t){let e=t.offsetWidth,n=getComputedStyle(t);return e+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}return 0},width(t){if(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}return 0},getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)},getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)},getOuterWidth(t,e){if(t){let n=t.offsetWidth;if(e){let r=getComputedStyle(t);n+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return n}return 0},getOuterHeight(t,e){if(t){let n=t.offsetHeight;if(e){let r=getComputedStyle(t);n+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return n}return 0},getClientHeight(t,e){if(t){let n=t.clientHeight;if(e){let r=getComputedStyle(t);n+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return n}return 0},getViewport(){let t=window,e=document,n=e.documentElement,r=e.getElementsByTagName("body")[0],s=t.innerWidth||n.clientWidth||r.clientWidth,i=t.innerHeight||n.clientHeight||r.clientHeight;return{width:s,height:i}},getOffset(t){if(t){let e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}},index(t){if(t){let e=t.parentNode.childNodes,n=0;for(let r=0;r<e.length;r++){if(e[r]===t)return n;e[r].nodeType===1&&n++}}return-1},addMultipleClasses(t,e){if(t&&e)if(t.classList){let n=e.split(" ");for(let r=0;r<n.length;r++)t.classList.add(n[r])}else{let n=e.split(" ");for(let r=0;r<n.length;r++)t.className+=" "+n[r]}},addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=" "+e)},removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass(t,e){return t?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1},find(t,e){return t?t.querySelectorAll(e):[]},findSingle(t,e){return t?t.querySelector(e):null},getHeight(t){if(t){let e=t.offsetHeight,n=getComputedStyle(t);return e-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),e}return 0},getWidth(t){if(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),e}return 0},absolutePosition(t,e){if(t){let n=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=n.height,s=n.width,i=e.offsetHeight,o=e.offsetWidth,a=e.getBoundingClientRect(),l=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),d=this.getViewport(),h,p;a.top+i+r>d.height?(h=a.top+l-r,t.style.transformOrigin="bottom",h<0&&(h=l)):(h=i+a.top+l,t.style.transformOrigin="top"),a.left+s>d.width?p=Math.max(0,a.left+c+o-s):p=a.left+c,t.style.top=h+"px",t.style.left=p+"px"}},relativePosition(t,e){if(t){let n=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t);const r=e.offsetHeight,s=e.getBoundingClientRect(),i=this.getViewport();let o,a;s.top+r+n.height>i.height?(o=-1*n.height,t.style.transformOrigin="bottom",s.top+o<0&&(o=-1*s.top)):(o=r,t.style.transformOrigin="top"),n.width>i.width?a=s.left*-1:s.left+n.width>i.width?a=(s.left+n.width-i.width)*-1:a=0,t.style.top=o+"px",t.style.left=a+"px"}},getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))},getScrollableParents(t){let e=[];if(t){let n=this.getParents(t);const r=/(auto|scroll)/,s=i=>{let o=window.getComputedStyle(i,null);return r.test(o.getPropertyValue("overflow"))||r.test(o.getPropertyValue("overflowX"))||r.test(o.getPropertyValue("overflowY"))};for(let i of n){let o=i.nodeType===1&&i.dataset.scrollselectors;if(o){let a=o.split(",");for(let l of a){let c=this.findSingle(i,l);c&&s(c)&&e.push(c)}}i.nodeType!==9&&s(i)&&e.push(i)}}return e},getHiddenElementOuterHeight(t){if(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e}return 0},getHiddenElementOuterWidth(t){if(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e}return 0},getHiddenElementDimensions(t){if(t){let e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e}return 0},fadeIn(t,e){if(t){t.style.opacity=0;let n=+new Date,r=0,s=function(){r=+t.style.opacity+(new Date().getTime()-n)/e,t.style.opacity=r,n=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}},fadeOut(t,e){if(t){let n=1,r=50,s=e,i=r/s,o=setInterval(()=>{n-=i,n<=0&&(n=0,clearInterval(o)),t.style.opacity=n},r)}},getUserAgent(){return navigator.userAgent},appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e.el&&e.elElement)e.elElement.appendChild(t);else throw new Error("Cannot append "+e+" to "+t)},scrollInView(t,e){let n=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=n?parseFloat(n):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),i=s?parseFloat(s):0,o=t.getBoundingClientRect(),l=e.getBoundingClientRect().top+document.body.scrollTop-(o.top+document.body.scrollTop)-r-i,c=t.scrollTop,d=t.clientHeight,h=this.getOuterHeight(e);l<0?t.scrollTop=c+l:l+h>d&&(t.scrollTop=c+l-d+h)},clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},calculateScrollbarWidth(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e},getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ ]([\w.]+)/.exec(t)||/(webkit)[ ]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}},isVisible(t){return t&&t.offsetParent!=null},invokeElementMethod(t,e,n){t[e].apply(t,n)},isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode},isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},focus(t,e){t&&document.activeElement!==t&&t.focus(e)},getFocusableElements(t,e=""){let n=this.find(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`),r=[];for(let s of n)getComputedStyle(s).display!="none"&&getComputedStyle(s).visibility!="hidden"&&r.push(s);return r},getFirstFocusableElement(t,e){const n=this.getFocusableElements(t,e);return n.length>0?n[0]:null},isClickable(t){const e=t.nodeName,n=t.parentElement&&t.parentElement.nodeName;return e=="INPUT"||e=="BUTTON"||e=="A"||n=="INPUT"||n=="BUTTON"||n=="A"||this.hasClass(t,"p-button")||this.hasClass(t.parentElement,"p-button")||this.hasClass(t.parentElement,"p-checkbox")||this.hasClass(t.parentElement,"p-radiobutton")},applyStyle(t,e){if(typeof e=="string")t.style.cssText=e;else for(let n in e)t.style[n]=e[n]},isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid(){return/(android)/i.test(navigator.userAgent)},isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},exportCSV(t,e){let n=new Blob([t],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(n,e+".csv");else{let r=document.createElement("a");r.download!==void 0?(r.setAttribute("href",URL.createObjectURL(n)),r.setAttribute("download",e+".csv"),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)):(t="data:text/csv;charset=utf-8,"+t,window.open(encodeURI(t)))}}};const ce={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},_o={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next"}},filterMatchModeOptions:{text:[ce.STARTS_WITH,ce.CONTAINS,ce.NOT_CONTAINS,ce.ENDS_WITH,ce.EQUALS,ce.NOT_EQUALS],numeric:[ce.EQUALS,ce.NOT_EQUALS,ce.LESS_THAN,ce.LESS_THAN_OR_EQUAL_TO,ce.GREATER_THAN,ce.GREATER_THAN_OR_EQUAL_TO],date:[ce.DATE_IS,ce.DATE_IS_NOT,ce.DATE_BEFORE,ce.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100}},Eg=Symbol();var wg={install:(t,e)=>{let n=e?{..._o,...e}:{..._o};const r={config:cn(n)};t.config.globalProperties.$primevue=r,t.provide(Eg,r)}},hl={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(t){this.$emit("update:modelValue",t.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const Ig=["value"];function Tg(t,e,n,r,s,i){return Ee(),je("input",{class:ht(["p-inputtext p-component",{"p-filled":i.filled}]),value:n.modelValue,onInput:e[0]||(e[0]=(...o)=>i.onInput&&i.onInput(...o))},null,42,Ig)}hl.render=Tg;var pl={name:"Card"};const Sg={class:"p-card p-component"},Rg={key:0,class:"p-card-header"},Cg={class:"p-card-body"},Ag={key:0,class:"p-card-title"},Og={key:1,class:"p-card-subtitle"},Pg={class:"p-card-content"},kg={key:2,class:"p-card-footer"};function Ng(t,e,n,r,s,i){return Ee(),je("div",Sg,[t.$slots.header?(Ee(),je("div",Rg,[Wt(t.$slots,"header")])):Ct("",!0),On("div",Cg,[t.$slots.title?(Ee(),je("div",Ag,[Wt(t.$slots,"title")])):Ct("",!0),t.$slots.subtitle?(Ee(),je("div",Og,[Wt(t.$slots,"subtitle")])):Ct("",!0),On("div",Pg,[Wt(t.$slots,"content")]),t.$slots.footer?(Ee(),je("div",kg,[Wt(t.$slots,"footer")])):Ct("",!0)])])}function Mg(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var Dg=`
.p-card-header img {
    width: 100%;
}
`;Mg(Dg);pl.render=Ng;function xg(t){t.addEventListener("mousedown",gl)}function Lg(t){t.removeEventListener("mousedown",gl)}function Ug(t){let e=document.createElement("span");e.className="p-ink",e.setAttribute("role","presentation"),t.appendChild(e),e.addEventListener("animationend",ml)}function Fg(t){let e=_l(t);e&&(Lg(t),e.removeEventListener("animationend",ml),e.remove())}function gl(t){let e=t.currentTarget,n=_l(e);if(!n||getComputedStyle(n,null).display==="none")return;if(He.removeClass(n,"p-ink-active"),!He.getHeight(n)&&!He.getWidth(n)){let o=Math.max(He.getOuterWidth(e),He.getOuterHeight(e));n.style.height=o+"px",n.style.width=o+"px"}let r=He.getOffset(e),s=t.pageX-r.left+document.body.scrollTop-He.getWidth(n)/2,i=t.pageY-r.top+document.body.scrollLeft-He.getHeight(n)/2;n.style.top=i+"px",n.style.left=s+"px",He.addClass(n,"p-ink-active")}function ml(t){He.removeClass(t.currentTarget,"p-ink-active")}function _l(t){for(let e=0;e<t.children.length;e++)if(typeof t.children[e].className=="string"&&t.children[e].className.indexOf("p-ink")!==-1)return t.children[e];return null}const Bg={mounted(t,e){e.instance.$primevue&&e.instance.$primevue.config&&e.instance.$primevue.config.ripple&&(Ug(t),xg(t))},unmounted(t){Fg(t)}};var yl={name:"Button",props:{label:{type:String},icon:{type:String},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconStyleClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",this.iconClass,{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading},defaultAriaLabel(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs["aria-label"]}},directives:{ripple:Bg}};const Hg=["aria-label","disabled"],$g={class:"p-button-label"};function Wg(t,e,n,r,s,i){const o=$c("ripple");return Uc((Ee(),je("button",{class:ht(i.buttonClass),type:"button","aria-label":i.defaultAriaLabel,disabled:i.disabled},[Wt(t.$slots,"default",{},()=>[n.loading&&!n.icon?(Ee(),je("span",{key:0,class:ht(i.iconStyleClass)},null,2)):Ct("",!0),n.icon?(Ee(),je("span",{key:1,class:ht(i.iconStyleClass)},null,2)):Ct("",!0),On("span",$g,ei(n.label||"\xA0"),1),n.badge?(Ee(),je("span",{key:2,class:ht(i.badgeStyleClass)},ei(n.badge),3)):Ct("",!0)])],10,Hg)),[[o]])}yl.render=Wg;const jg={apiKey:"AIzaSyA-_Mv6q4nDouEHeFyY_qIwp70nH6rNGoU",authDomain:"dashboard-udi.firebaseapp.com",projectId:"dashboard-udi",storageBucket:"dashboard-udi.appspot.com",messagingSenderId:"849741078840",appId:"1:849741078840:web:a7e39d196c602a1517a1cd",measurementId:"G-E9PR3N0T2W"};mh(jg);const xt=$u(Ju);xt.use(wg);xt.component("InputText",hl);xt.component("Card",pl);xt.component("Button",yl);xt.use(zu());xt.use(tf);xt.mount("#app");export{Ku as _,Ee as a,je as b,Se as c,On as d,ye as e,Bo as f,Yg as g,Gg as h,zg as i,qg as j,Oc as o,Vg as p,Bc as r,Jg as s,ei as t,Kg as u,_c as w};
