function E(){}const U=t=>t;function $t(t,e){for(const n in e)t[n]=e[n];return t}function st(t){return t()}function it(){return Object.create(null)}function A(t){t.forEach(st)}function D(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let L;function Wt(t,e){return L||(L=document.createElement("a")),L.href=e,t===L.href}function bt(t){return Object.keys(t).length===0}function ot(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t){let e;return ot(t,n=>e=n)(),e}function It(t,e,n){t.$$.on_destroy.push(ot(e,n))}function Jt(t,e,n,i){if(t){const r=ct(t,e,n,i);return t[0](r)}}function ct(t,e,n,i){return t[1]&&i?$t(n.ctx.slice(),t[1](i(e))):n.ctx}function Kt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Qt(t,e,n,i,r,l){if(r){const s=ct(e,n,i,l);t.p(s,r)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Vt(t){return t&&D(t.destroy)?t.destroy:E}const lt=typeof window!="undefined";let V=lt?()=>window.performance.now():()=>Date.now(),X=lt?t=>requestAnimationFrame(t):E;const C=new Set;function at(t){C.forEach(e=>{e.c(t)||(C.delete(e),e.f())}),C.size!==0&&X(at)}function Y(t){let e;return C.size===0&&X(at),{promise:new Promise(n=>{C.add(e={c:t,f:n})}),abort(){C.delete(e)}}}let I=!1;function wt(){I=!0}function xt(){I=!1}function vt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=a?r+1:vt(1,r,h=>e[n[h]].claim_order,a))-1;i[c]=n[f]+1;const d=f+1;n[d]=c,r=Math.max(d,r)}const l=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<s.length;c++){for(;a<l.length&&s[c].claim_order>=l[a].claim_order;)a++;const f=a<l.length?l[a]:null;t.insertBefore(s[c],f)}}function Et(t,e){t.appendChild(e)}function ut(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Nt(t){const e=dt("style");return At(ut(t),e),e.sheet}function At(t,e){return Et(t.head||t,e),e.sheet}function St(t,e){if(I){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Xt(t,e,n){I&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ft(t){t.parentNode&&t.parentNode.removeChild(t)}function Yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function dt(t){return document.createElement(t)}function jt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Z(t){return document.createTextNode(t)}function Zt(){return Z(" ")}function te(){return Z("")}function ee(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ne(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ie(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function re(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ct(t){return Array.from(t.childNodes)}function Mt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function _t(t,e,n,i,r=!1){Mt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ht(t,e,n,i){return _t(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function se(t,e,n){return ht(t,e,n,dt)}function oe(t,e,n){return ht(t,e,n,jt)}function Dt(t,e){return _t(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Z(e),!0)}function ce(t){return Dt(t," ")}function le(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ae(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ue(t,e,n){t.classList[n?"add":"remove"](e)}function Tt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function fe(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function de(t,e){return new t(e)}const H=new Map;let F=0;function Pt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ot(t,e){const n={stylesheet:Nt(e),rules:{}};return H.set(t,n),n}function W(t,e,n,i,r,l,s,o=0){const c=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*l(m);a+=m*100+`%{${s(g,1-g)}}
`}const f=a+`100% {${s(n,1-n)}}
}`,d=`__svelte_${Pt(f)}_${o}`,h=ut(t),{stylesheet:u,rules:_}=H.get(h)||Ot(h,t);_[d]||(_[d]=!0,u.insertRule(`@keyframes ${d} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${d} ${i}ms linear ${r}ms 1 both`,F+=1,d}function G(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),F-=r,F||Rt())}function Rt(){X(()=>{F||(H.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ft(e)}),H.clear())})}let R;function O(t){R=t}function tt(){if(!R)throw new Error("Function called outside component initialization");return R}function _e(t){tt().$$.on_mount.push(t)}function he(t){tt().$$.after_update.push(t)}function me(t){tt().$$.on_destroy.push(t)}const j=[],rt=[],z=[],K=[],mt=Promise.resolve();let Q=!1;function pt(){Q||(Q=!0,mt.then(yt))}function pe(){return pt(),mt}function M(t){z.push(t)}function ye(t){K.push(t)}const J=new Set;let S=0;function yt(){if(S!==0)return;const t=R;do{try{for(;S<j.length;){const e=j[S];S++,O(e),qt(e.$$)}}catch(e){throw j.length=0,S=0,e}for(O(null),j.length=0,S=0;rt.length;)rt.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];J.has(n)||(J.add(n),n())}z.length=0}while(j.length);for(;K.length;)K.pop()();Q=!1,J.clear(),O(t)}function qt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let P;function et(){return P||(P=Promise.resolve(),P.then(()=>{P=null})),P}function N(t,e,n){t.dispatchEvent(Tt(`${e?"intro":"outro"}${n}`))}const B=new Set;let v;function ge(){v={r:0,c:[],p:v}}function $e(){v.r||A(v.c),v=v.p}function gt(t,e){t&&t.i&&(B.delete(t),t.i(e))}function Lt(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),v.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const nt={duration:0};function be(t,e,n){const i={direction:"in"};let r=e(t,n,i),l=!1,s,o,c=0;function a(){s&&G(t,s)}function f(){const{delay:h=0,duration:u=300,easing:_=U,tick:p=E,css:m}=r||nt;m&&(s=W(t,0,1,u,h,_,m,c++)),p(0,1);const g=V()+h,k=g+u;o&&o.abort(),l=!0,M(()=>N(t,!0,"start")),o=Y($=>{if(l){if($>=k)return p(1,0),N(t,!0,"end"),a(),l=!1;if($>=g){const b=_(($-g)/u);p(b,1-b)}}return l})}let d=!1;return{start(){d||(d=!0,G(t),D(r)?(r=r(i),et().then(f)):f())},invalidate(){d=!1},end(){l&&(a(),l=!1)}}}function we(t,e,n){const i={direction:"out"};let r=e(t,n,i),l=!0,s;const o=v;o.r+=1;function c(){const{delay:a=0,duration:f=300,easing:d=U,tick:h=E,css:u}=r||nt;u&&(s=W(t,1,0,f,a,d,u));const _=V()+a,p=_+f;M(()=>N(t,!1,"start")),Y(m=>{if(l){if(m>=p)return h(0,1),N(t,!1,"end"),--o.r||A(o.c),!1;if(m>=_){const g=d((m-_)/f);h(1-g,g)}}return l})}return D(r)?et().then(()=>{r=r(i),c()}):c(),{end(a){a&&r.tick&&r.tick(1,0),l&&(s&&G(t,s),l=!1)}}}function xe(t,e,n,i){const r={direction:"both"};let l=e(t,n,r),s=i?0:1,o=null,c=null,a=null;function f(){a&&G(t,a)}function d(u,_){const p=u.b-s;return _*=Math.abs(p),{a:s,b:u.b,d:p,duration:_,start:u.start,end:u.start+_,group:u.group}}function h(u){const{delay:_=0,duration:p=300,easing:m=U,tick:g=E,css:k}=l||nt,$={start:V()+_,b:u};u||($.group=v,v.r+=1),o||c?c=$:(k&&(f(),a=W(t,s,u,p,_,m,k)),u&&g(0,1),o=d($,p),M(()=>N(t,u,"start")),Y(b=>{if(c&&b>c.start&&(o=d(c,p),c=null,N(t,o.b,"start"),k&&(f(),a=W(t,s,o.b,o.duration,0,m,l.css))),o){if(b>=o.end)g(s=o.b,1-s),N(t,o.b,"end"),c||(o.b?f():--o.group.r||A(o.group.c)),o=null;else if(b>=o.start){const T=b-o.start;s=o.a+o.d*m(T/o.duration),g(s,1-s)}}return!!(o||c)}))}return{run(u){D(l)?et().then(()=>{l=l(r),h(u)}):h(u)},end(){f(),o=c=null}}}const ve=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function ke(t,e){t.d(1),e.delete(t.key)}function Ee(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function Ne(t,e,n,i,r,l,s,o,c,a,f,d){let h=t.length,u=l.length,_=h;const p={};for(;_--;)p[t[_].key]=_;const m=[],g=new Map,k=new Map;for(_=u;_--;){const y=d(r,l,_),w=n(y);let x=s.get(w);x?i&&x.p(y,e):(x=a(w,y),x.c()),g.set(w,m[_]=x),w in p&&k.set(w,Math.abs(_-p[w]))}const $=new Set,b=new Set;function T(y){gt(y,1),y.m(o,f),s.set(y.key,y),f=y.first,u--}for(;h&&u;){const y=m[u-1],w=t[h-1],x=y.key,q=w.key;y===w?(f=y.first,h--,u--):g.has(q)?!s.has(x)||$.has(x)?T(y):b.has(q)?h--:k.get(x)>k.get(q)?(b.add(x),T(y)):($.add(q),h--):(c(w,s),h--)}for(;h--;){const y=t[h];g.has(y.key)||c(y,s)}for(;u;)T(m[u-1]);return m}function Ae(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=e[l];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[l]=o}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Se(t){return typeof t=="object"&&t!==null?t:{}}function je(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ce(t){t&&t.c()}function Me(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||M(()=>{const s=t.$$.on_mount.map(st).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...s):A(s),t.$$.on_mount=[]}),l.forEach(M)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(j.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function De(t,e,n,i,r,l,s,o=[-1]){const c=R;O(t);const a=t.$$={fragment:null,ctx:[],props:l,update:E,not_equal:r,bound:it(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:it(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(d,h,...u)=>{const _=u.length?u[0]:h;return a.ctx&&r(a.ctx[d],a.ctx[d]=_)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](_),f&&Ht(t,d)),h}):[],a.update(),f=!0,A(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){wt();const d=Ct(e.target);a.fragment&&a.fragment.l(d),d.forEach(ft)}else a.fragment&&a.fragment.c();e.intro&&gt(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),xt(),yt()}O(c)}class Te{$destroy(){Bt(this,1),this.$destroy=E}$on(e,n){if(!D(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ve as $,zt as A,Bt as B,U as C,Wt as D,St as E,ee as F,A as G,It as H,ie as I,ne as J,M as K,xe as L,Yt as M,ue as N,E as O,Vt as P,Jt as Q,Qt as R,Te as S,Ut as T,Kt as U,be as V,we as W,$t as X,fe as Y,Ae as Z,Se as _,Zt as a,Ne as a0,Ee as a1,D as a2,jt as a3,oe as a4,ke as a5,je as a6,ye as a7,me as a8,Gt as a9,ot as aa,Xt as b,ce as c,Lt as d,te as e,$e as f,gt as g,ft as h,De as i,he as j,dt as k,se as l,Ct as m,re as n,_e as o,ae as p,Z as q,Dt as r,Ft as s,pe as t,le as u,ge as v,rt as w,de as x,Ce as y,Me as z};
