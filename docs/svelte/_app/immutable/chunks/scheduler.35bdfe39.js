function m(){}const A=t=>t;function j(t,n){for(const e in n)t[e]=n[e];return t}function v(t){return t()}function B(){return Object.create(null)}function E(t){t.forEach(v)}function q(t){return typeof t=="function"}function C(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function F(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function P(t){return Object.keys(t).length===0}function x(t,...n){if(t==null){for(const r of n)r(void 0);return m}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t){let n;return x(t,e=>n=e)(),n}function U(t,n,e){t.$$.on_destroy.push(x(n,e))}function G(t,n,e,r){if(t){const o=k(t,n,e,r);return t[0](o)}}function k(t,n,e,r){return t[1]&&r?j(e.ctx.slice(),t[1](r(n))):e.ctx}function H(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],d=Math.max(n.dirty.length,o.length);for(let s=0;s<d;s+=1)l[s]=n.dirty[s]|o[s];return l}return n.dirty|o}return n.dirty}function I(t,n,e,r,o,l){if(o){const d=k(n,e,r,l);t.p(d,o)}}function J(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function K(t){return t&&q(t.destroy)?t.destroy:m}let f;function _(t){f=t}function g(){if(!f)throw new Error("Function called outside component initialization");return f}function L(t){g().$$.on_mount.push(t)}function N(t){g().$$.after_update.push(t)}function Q(t){g().$$.on_destroy.push(t)}const a=[],b=[];let u=[];const y=[],w=Promise.resolve();let p=!1;function O(){p||(p=!0,w.then(D))}function R(){return O(),w}function z(t){u.push(t)}const h=new Set;let c=0;function D(){if(c!==0)return;const t=f;do{try{for(;c<a.length;){const n=a[c];c++,_(n),M(n.$$)}}catch(n){throw a.length=0,c=0,n}for(_(null),a.length=0,c=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];h.has(e)||(h.add(e),e())}u.length=0}while(a.length);for(;y.length;)y.pop()();p=!1,h.clear(),_(t)}function M(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function T(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{_ as A,v as B,a as C,O as D,N as a,b,F as c,U as d,z as e,K as f,G as g,J as h,A as i,H as j,j as k,q as l,Q as m,m as n,L as o,S as p,x as q,E as r,C as s,R as t,I as u,B as v,D as w,P as x,T as y,f as z};
