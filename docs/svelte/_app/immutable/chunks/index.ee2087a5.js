import{w as T}from"./index.321e3a2b.js";import{K as w}from"./constant.34331e54.js";import{a0 as U}from"./index.01761294.js";var v=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function B(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var O=B,K=typeof v=="object"&&v&&v.Object===Object&&v,H=K,X=H,Y=typeof self=="object"&&self&&self.Object===Object&&self,q=X||Y||Function("return this")(),M=q,J=M,Q=function(){return J.Date.now()},V=Q,Z=/\s/;function ee(e){for(var t=e.length;t--&&Z.test(e.charAt(t)););return t}var te=ee,re=te,ne=/^\s+/;function ie(e){return e&&e.slice(0,re(e)+1).replace(ne,"")}var ae=ie,oe=M,ce=oe.Symbol,A=ce,x=A,C=Object.prototype,se=C.hasOwnProperty,fe=C.toString,g=x?x.toStringTag:void 0;function de(e){var t=se.call(e,g),n=e[g];try{e[g]=void 0;var i=!0}catch(d){}var o=fe.call(e);return i&&(t?e[g]=n:delete e[g]),o}var le=de,ue=Object.prototype,me=ue.toString;function ge(e){return me.call(e)}var be=ge,I=A,ve=le,Te=be,ye="[object Null]",Se="[object Undefined]",k=I?I.toStringTag:void 0;function je(e){return e==null?e===void 0?Se:ye:k&&k in Object(e)?ve(e):Te(e)}var he=je;function we(e){return e!=null&&typeof e=="object"}var Oe=we,$e=he,pe=Oe,_e="[object Symbol]";function Ee(e){return typeof e=="symbol"||pe(e)&&$e(e)==_e}var xe=Ee,Ie=ae,L=O,ke=xe,R=0/0,Le=/^[-+]0x[0-9a-f]+$/i,Re=/^0b[01]+$/i,Ne=/^0o[0-7]+$/i,We=parseInt;function Ge(e){if(typeof e=="number")return e;if(ke(e))return R;if(L(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=L(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Ie(e);var n=Re.test(e);return n||Ne.test(e)?We(e.slice(2),n?2:8):Le.test(e)?R:+e}var Me=Ge,Ae=O,h=V,N=Me,Ce="Expected a function",De=Math.max,Pe=Math.min;function ze(e,t,n){var i,o,d,f,a,s,l=0,$=!1,u=!1,y=!0;if(typeof e!="function")throw new TypeError(Ce);t=N(t)||0,Ae(n)&&($=!!n.leading,u="maxWait"in n,d=u?De(N(n.maxWait)||0,t):d,y="trailing"in n?!!n.trailing:y);function S(r){var c=i,m=o;return i=o=void 0,l=r,f=e.apply(m,c),f}function D(r){return l=r,a=setTimeout(b,t),$?S(r):f}function P(r){var c=r-s,m=r-l,E=t-c;return u?Pe(E,d-m):E}function p(r){var c=r-s,m=r-l;return s===void 0||c>=t||c<0||u&&m>=d}function b(){var r=h();if(p(r))return _(r);a=setTimeout(b,P(r))}function _(r){return a=void 0,y&&i?S(r):(i=o=void 0,f)}function z(){a!==void 0&&clearTimeout(a),l=0,i=s=o=a=void 0}function F(){return a===void 0?f:_(h())}function j(){var r=h(),c=p(r);if(i=arguments,o=this,s=r,c){if(a===void 0)return D(s);if(u)return clearTimeout(a),a=setTimeout(b,t),S(s)}return a===void 0&&(a=setTimeout(b,t)),f}return j.cancel=z,j.flush=F,j}var Fe=ze,Ue=Fe,Be=O,Ke="Expected a function";function He(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(Ke);return Be(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),Ue(e,t,{leading:i,maxWait:t,trailing:o})}var Xe=He;const Ye=T(0),qe=T(0),Je=T(0),W=T(!1),G=()=>{Ye.set(window.innerWidth),qe.set(window.innerHeight),Je.set(Date.now())},tt=()=>{window.addEventListener("resize",Xe(G,333,{leading:!0,trailing:!0})),G();try{const e=!!window.localStorage.getItem(w);Qe(e)}catch(e){}},Qe=e=>{const t=e!=null?e:!U(W);W.set(t);try{t?(document.documentElement.classList.add("dark"),window.localStorage.setItem(w,"1")):(document.documentElement.classList.remove("dark"),window.localStorage.removeItem(w))}catch(n){}};export{Je as a,W as d,tt as i,Qe as s};
