var w=Object.defineProperty,k=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var h=(t,e,n)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e)=>{for(var n in e||(e={}))R.call(e,n)&&h(t,n,e[n]);if(d)for(var n of d(e))I.call(e,n)&&h(t,n,e[n]);return t},g=(t,e)=>k(t,A(e));var b=(t,e,n)=>new Promise((o,s)=>{var r=l=>{try{i(n.next(l))}catch(c){s(c)}},a=l=>{try{i(n.throw(l))}catch(c){s(c)}},i=l=>l.done?o(l.value):Promise.resolve(l.value).then(r,a);i((n=n.apply(t,e)).next())});import{w as f}from"./index.ad80aa40.js";import{a as S}from"./paths.ee925adb.js";const y="1678264412195",V="sveltekit:snapshot",P="sveltekit:scroll",Y="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1};function $(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function K(){return{x:pageXOffset,y:pageYOffset}}function u(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const v=g(p({},_),{"":_.hover});function E(t){var n;let e=(n=t.assignedSlot)!=null?n:t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function j(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=E(t)}}function C(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch(r){}const o=t instanceof SVGAElement?t.target.baseVal:t.target,s=!n||!!o||x(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external")||t.hasAttribute("download");return{url:n,external:s,target:o}}function D(t){let e=null,n=null,o=null,s=null,r=t;for(;r&&r!==document.documentElement;)n===null&&(n=u(r,"preload-code")),o===null&&(o=u(r,"preload-data")),e===null&&(e=u(r,"noscroll")),s===null&&(s=u(r,"reload")),r=E(r);return{preload_code:v[n!=null?n:"off"],preload_data:v[o!=null?o:"off"],noscroll:e==="off"?!1:e===""?!0:null,reload:s==="off"?!1:s===""?!0:null}}function m(t){const e=f(t);let n=!0;function o(){n=!0,e.update(a=>a)}function s(a){n=!1,e.set(a)}function r(a){let i;return e.subscribe(l=>{(i===void 0||n&&l!==i)&&a(i=l)})}return{notify:o,set:s,subscribe:r}}function T(){const{set:t,subscribe:e}=f(!1);let n;function o(){return b(this,null,function*(){clearTimeout(n);const s=yield fetch(`${S}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const a=(yield s.json()).version!==y;return a&&(t(!0),clearTimeout(n)),a}else throw new Error(`Version check failed: ${s.status}`)})}return{subscribe:e,check:o}}function x(t,e){return t.origin!==location.origin||!t.pathname.startsWith(e)}let O;function G(t){O=t.client}const X={url:m({}),page:m({}),navigating:f(null),updated:T()};export{Y as I,_ as P,P as S,V as a,C as b,D as c,K as d,G as e,j as f,$ as g,O as h,x as i,X as s};
