function E(){}const Q=t=>t;function wt(t,e){for(const n in e)t[n]=e[n];return t}function st(t){return t()}function nt(){return Object.create(null)}function A(t){t.forEach(st)}function D(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let L;function Wt(t,e){return L||(L=document.createElement("a")),L.href=e,t===L.href}function bt(t){return Object.keys(t).length===0}function ot(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t){let e;return ot(t,n=>e=n)(),e}function It(t,e,n){t.$$.on_destroy.push(ot(e,n))}function Jt(t,e,n,r){if(t){const i=ct(t,e,n,r);return t[0](i)}}function ct(t,e,n,r){return t[1]&&r?wt(n.ctx.slice(),t[1](r(e))):n.ctx}function Kt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],s=Math.max(e.dirty.length,i.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|i[o];return l}return e.dirty|i}return e.dirty}function Qt(t,e,n,r,i,l){if(i){const s=ct(e,n,r,l);t.p(s,i)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Vt(t){return t&&D(t.destroy)?t.destroy:E}const lt=typeof window!="undefined";let U=lt?()=>window.performance.now():()=>Date.now(),V=lt?t=>requestAnimationFrame(t):E;const C=new Set;function at(t){C.forEach(e=>{e.c(t)||(C.delete(e),e.f())}),C.size!==0&&V(at)}function X(t){let e;return C.size===0&&V(at),{promise:new Promise(n=>{C.add(e={c:t,f:n})}),abort(){C.delete(e)}}}let I=!1;function $t(){I=!0}function xt(){I=!1}function vt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(i>0&&e[n[i]].claim_order<=a?i+1:vt(1,i,h=>e[n[h]].claim_order,a))-1;r[c]=n[f]+1;const _=f+1;n[_]=c,i=Math.max(_,i)}const l=[],s=[];let o=e.length-1;for(let c=n[i]+1;c!=0;c=r[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<s.length;c++){for(;a<l.length&&s[c].claim_order>=l[a].claim_order;)a++;const f=a<l.length?l[a]:null;t.insertBefore(s[c],f)}}function Et(t,e){t.appendChild(e)}function ut(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Nt(t){const e=_t("style");return At(ut(t),e),e.sheet}function At(t,e){return Et(t.head||t,e),e.sheet}function St(t,e){if(I){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Xt(t,e,n){I&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ft(t){t.parentNode&&t.parentNode.removeChild(t)}function Yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _t(t){return document.createElement(t)}function jt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Y(t){return document.createTextNode(t)}function Zt(){return Y(" ")}function te(){return Y("")}function ee(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function ne(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ie(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function re(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ct(t){return Array.from(t.childNodes)}function Mt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function dt(t,e,n,r,i=!1){Mt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,i||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,i?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ht(t,e,n,r){return dt(t,i=>i.nodeName===e,i=>{const l=[];for(let s=0;s<i.attributes.length;s++){const o=i.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>i.removeAttribute(s))},()=>r(e))}function se(t,e,n){return ht(t,e,n,_t)}function oe(t,e,n){return ht(t,e,n,jt)}function Dt(t,e){return dt(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>Y(e),!0)}function ce(t){return Dt(t," ")}function le(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ae(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function ue(t,e,n){t.classList[n?"add":"remove"](e)}function Tt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function fe(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const l=i.textContent.trim();l===`HEAD_${t}_END`?(r-=1,n.push(i)):l===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function _e(t,e){return new t(e)}const H=new Map;let F=0;function Pt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ot(t,e){const n={stylesheet:Nt(e),rules:{}};return H.set(t,n),n}function W(t,e,n,r,i,l,s,o=0){const c=16.666/r;let a=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*l(m);a+=m*100+`%{${s(g,1-g)}}
`}const f=a+`100% {${s(n,1-n)}}
}`,_=`__svelte_${Pt(f)}_${o}`,h=ut(t),{stylesheet:u,rules:d}=H.get(h)||Ot(h,t);d[_]||(d[_]=!0,u.insertRule(`@keyframes ${_} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${r}ms linear ${i}ms 1 both`,F+=1,_}function G(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),F-=i,F||Rt())}function Rt(){V(()=>{F||(H.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ft(e)}),H.clear())})}let R;function O(t){R=t}function Z(){if(!R)throw new Error("Function called outside component initialization");return R}function de(t){Z().$$.on_mount.push(t)}function he(t){Z().$$.after_update.push(t)}function me(t){Z().$$.on_destroy.push(t)}const j=[],it=[],z=[],rt=[],mt=Promise.resolve();let K=!1;function pt(){K||(K=!0,mt.then(yt))}function pe(){return pt(),mt}function M(t){z.push(t)}const J=new Set;let S=0;function yt(){if(S!==0)return;const t=R;do{try{for(;S<j.length;){const e=j[S];S++,O(e),qt(e.$$)}}catch(e){throw j.length=0,S=0,e}for(O(null),j.length=0,S=0;it.length;)it.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];J.has(n)||(J.add(n),n())}z.length=0}while(j.length);for(;rt.length;)rt.pop()();K=!1,J.clear(),O(t)}function qt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let P;function tt(){return P||(P=Promise.resolve(),P.then(()=>{P=null})),P}function N(t,e,n){t.dispatchEvent(Tt(`${e?"intro":"outro"}${n}`))}const B=new Set;let v;function ye(){v={r:0,c:[],p:v}}function ge(){v.r||A(v.c),v=v.p}function gt(t,e){t&&t.i&&(B.delete(t),t.i(e))}function Lt(t,e,n,r){if(t&&t.o){if(B.has(t))return;B.add(t),v.c.push(()=>{B.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const et={duration:0};function we(t,e,n){const r={direction:"in"};let i=e(t,n,r),l=!1,s,o,c=0;function a(){s&&G(t,s)}function f(){const{delay:h=0,duration:u=300,easing:d=Q,tick:p=E,css:m}=i||et;m&&(s=W(t,0,1,u,h,d,m,c++)),p(0,1);const g=U()+h,k=g+u;o&&o.abort(),l=!0,M(()=>N(t,!0,"start")),o=X(w=>{if(l){if(w>=k)return p(1,0),N(t,!0,"end"),a(),l=!1;if(w>=g){const b=d((w-g)/u);p(b,1-b)}}return l})}let _=!1;return{start(){_||(_=!0,G(t),D(i)?(i=i(r),tt().then(f)):f())},invalidate(){_=!1},end(){l&&(a(),l=!1)}}}function be(t,e,n){const r={direction:"out"};let i=e(t,n,r),l=!0,s;const o=v;o.r+=1;function c(){const{delay:a=0,duration:f=300,easing:_=Q,tick:h=E,css:u}=i||et;u&&(s=W(t,1,0,f,a,_,u));const d=U()+a,p=d+f;M(()=>N(t,!1,"start")),X(m=>{if(l){if(m>=p)return h(0,1),N(t,!1,"end"),--o.r||A(o.c),!1;if(m>=d){const g=_((m-d)/f);h(1-g,g)}}return l})}return D(i)?tt().then(()=>{i=i(r),c()}):c(),{end(a){a&&i.tick&&i.tick(1,0),l&&(s&&G(t,s),l=!1)}}}function $e(t,e,n,r){const i={direction:"both"};let l=e(t,n,i),s=r?0:1,o=null,c=null,a=null;function f(){a&&G(t,a)}function _(u,d){const p=u.b-s;return d*=Math.abs(p),{a:s,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:m=Q,tick:g=E,css:k}=l||et,w={start:U()+d,b:u};u||(w.group=v,v.r+=1),o||c?c=w:(k&&(f(),a=W(t,s,u,p,d,m,k)),u&&g(0,1),o=_(w,p),M(()=>N(t,u,"start")),X(b=>{if(c&&b>c.start&&(o=_(c,p),c=null,N(t,o.b,"start"),k&&(f(),a=W(t,s,o.b,o.duration,0,m,l.css))),o){if(b>=o.end)g(s=o.b,1-s),N(t,o.b,"end"),c||(o.b?f():--o.group.r||A(o.group.c)),o=null;else if(b>=o.start){const T=b-o.start;s=o.a+o.d*m(T/o.duration),g(s,1-s)}}return!!(o||c)}))}return{run(u){D(l)?tt().then(()=>{l=l(i),h(u)}):h(u)},end(){f(),o=c=null}}}const xe=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function ve(t,e){t.d(1),e.delete(t.key)}function ke(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function Ee(t,e,n,r,i,l,s,o,c,a,f,_){let h=t.length,u=l.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const m=[],g=new Map,k=new Map;for(d=u;d--;){const y=_(i,l,d),$=n(y);let x=s.get($);x?r&&x.p(y,e):(x=a($,y),x.c()),g.set($,m[d]=x),$ in p&&k.set($,Math.abs(d-p[$]))}const w=new Set,b=new Set;function T(y){gt(y,1),y.m(o,f),s.set(y.key,y),f=y.first,u--}for(;h&&u;){const y=m[u-1],$=t[h-1],x=y.key,q=$.key;y===$?(f=y.first,h--,u--):g.has(q)?!s.has(x)||w.has(x)?T(y):b.has(q)?h--:k.get(x)>k.get(q)?(b.add(x),T(y)):(w.add(q),h--):(c($,s),h--)}for(;h--;){const y=t[h];g.has(y.key)||c(y,s)}for(;u;)T(m[u-1]);return m}function Ne(t,e){const n={},r={},i={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=e[l];if(o){for(const c in s)c in o||(r[c]=1);for(const c in o)i[c]||(n[c]=o[c],i[c]=1);t[l]=o}else for(const c in s)i[c]=1}for(const s in r)s in n||(n[s]=void 0);return n}function Ae(t){return typeof t=="object"&&t!==null?t:{}}function Se(t){t&&t.c()}function je(t,e){t&&t.l(e)}function zt(t,e,n,r){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),r||M(()=>{const s=t.$$.on_mount.map(st).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...s):A(s),t.$$.on_mount=[]}),l.forEach(M)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(j.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ce(t,e,n,r,i,l,s,o=[-1]){const c=R;O(t);const a=t.$$={fragment:null,ctx:[],props:l,update:E,not_equal:i,bound:nt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:nt(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(_,h,...u)=>{const d=u.length?u[0]:h;return a.ctx&&i(a.ctx[_],a.ctx[_]=d)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](d),f&&Ht(t,_)),h}):[],a.update(),f=!0,A(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){$t();const _=Ct(e.target);a.fragment&&a.fragment.l(_),_.forEach(ft)}else a.fragment&&a.fragment.c();e.intro&&gt(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),xt(),yt()}O(c)}class Me{$destroy(){Bt(this,1),this.$destroy=E}$on(e,n){if(!D(n))return E;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{xe as $,zt as A,Bt as B,Q as C,Wt as D,St as E,ee as F,A as G,It as H,ie as I,ne as J,M as K,$e as L,Yt as M,ue as N,E as O,Vt as P,Jt as Q,Qt as R,Me as S,Ut as T,Kt as U,we as V,be as W,wt as X,fe as Y,Ne as Z,Ae as _,Zt as a,Ee as a0,ke as a1,D as a2,jt as a3,oe as a4,ve as a5,me as a6,Gt as a7,ot as a8,Xt as b,ce as c,Lt as d,te as e,ge as f,gt as g,ft as h,Ce as i,he as j,_t as k,se as l,Ct as m,re as n,de as o,ae as p,Y as q,Dt as r,Ft as s,pe as t,le as u,ye as v,it as w,_e as x,Se as y,je as z};
