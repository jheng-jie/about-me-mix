var Ve=(r,e,s)=>new Promise((l,t)=>{var a=o=>{try{c(s.next(o))}catch(f){t(f)}},n=o=>{try{c(s.throw(o))}catch(f){t(f)}},c=o=>o.done?l(o.value):Promise.resolve(o.value).then(a,n);c((s=s.apply(r,e)).next())});import{M as Je,a as Y,b as st,c as rt,d as at,e as nt}from"../chunks/public.CuukS3aI.js";import{l as Qe,a as ee,b as ot,e as ze,s as it,c as ct,t as We,L as Ae,i as ut}from"../chunks/initialize.BTfpSApY.js";import{b as ye}from"../chunks/control.8mcX4gXJ.js";import{f as ft,s as X,v as F,r as Ee,c as A,e as dt,n as He,w as ht,x as ue,y as fe,z as de,A as he,B as mt}from"../chunks/scheduler.3JeIkPvM.js";import{S as q,i as K,e as g,s as E,c as v,a as w,f as C,d as _,o as i,g as H,h as m,y as S,n as I,q as xe,l as D,m as et,z as tt,A as lt,B as Ue,C as pt,D as ce,E as Oe,t as je,u as Z,F as Be,b as Ge,v as te,G as ke,w as J,j as _t,x as Q,r as Xe,k as qe,H as gt}from"../chunks/index.DjRcXmjU.js";import{p as Ce}from"../chunks/stores.BumZ9RCh.js";import{g as vt}from"../chunks/entry.BL6zSTS-.js";const bt=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function wt(r,e){const s={},l={},t={$$scope:1};let a=r.length;for(;a--;){const n=r[a],c=e[a];if(c){for(const o in n)o in c||(l[o]=1);for(const o in c)t[o]||(s[o]=c[o],t[o]=1);r[a]=c}else for(const o in n)t[o]=1}for(const n in l)n in s||(s[n]=void 0);return s}function $t(r){return typeof r=="object"&&r!==null?r:{}}const kt=!0,yt="always",Et=e=>Ve(void 0,[e],function*({url:r}){var a,n,c;const{pathname:s}=r,l=((c=(n=(a=s.replace(ye,""))==null?void 0:a.match)==null?void 0:n.call(a,/^\/(\w{2})\/?/))==null?void 0:c[1])||"",t=Qe.get().includes(l)?l:Je;ee.update(()=>t),yield ot(t,s)}),sl=Object.freeze(Object.defineProperty({__proto__:null,load:Et,prerender:kt,trailingSlash:yt},Symbol.toStringTag,{value:"Module"}));function Ke(r,{delay:e=0,duration:s=400,easing:l=ft}={}){const t=+getComputedStyle(r).opacity;return{delay:e,duration:s,easing:l,css:a=>`opacity: ${a*t}`}}function Pe(r,e,s){const l=r.slice();return l[11]=e[s],l[13]=s,l}function Re(r){let e,s,l,t,a,n,c,o,f=ze(r[3]),d=[];for(let u=0;u<f.length;u+=1)d[u]=Ye(Pe(r,f,u));return{c(){e=g("button"),s=E(),l=g("div"),t=g("div");for(let u=0;u<d.length;u+=1)d[u].c();this.h()},l(u){e=v(u,"BUTTON",{class:!0}),w(e).forEach(_),s=C(u),l=v(u,"DIV",{class:!0});var p=w(l);t=v(p,"DIV",{class:!0});var h=w(t);for(let b=0;b<d.length;b+=1)d[b].l(h);h.forEach(_),p.forEach(_),this.h()},h(){i(e,"class","fixed left-0 top-0 w-full h-full z-0"),i(t,"class","bg-white rounded-1.5 py-1 shadow-md"),i(l,"class","absolute top-0 left-1/2 -translate-x-1/2 pt-12 md:pt-11 lg:pt-12 z-10 w-12")},m(u,p){H(u,e,p),H(u,s,p),H(u,l,p),m(l,t);for(let h=0;h<d.length;h+=1)d[h]&&d[h].m(t,null);n=!0,c||(o=S(e,"click",tt(lt(r[8]))),c=!0)},p(u,p){if(r=u,p&56){f=ze(r[3]);let h;for(h=0;h<f.length;h+=1){const b=Pe(r,f,h);d[h]?d[h].p(b,p):(d[h]=Ye(b),d[h].c(),d[h].m(t,null))}for(;h<d.length;h+=1)d[h].d(1);d.length=f.length}},i(u){n||(u&&dt(()=>{n&&(a||(a=Ue(l,Ke,r[6],!0)),a.run(1))}),n=!0)},o(u){u&&(a||(a=Ue(l,Ke,r[6],!1)),a.run(0)),n=!1},d(u){u&&(_(e),_(s),_(l)),pt(d,u),u&&a&&a.end(),c=!1,o()}}}function Ye(r){let e,s,l,t,a,n;function c(){return r[9](r[11])}return{c(){e=g("button"),s=g("img"),t=E(),this.h()},l(o){e=v(o,"BUTTON",{class:!0});var f=w(e);s=v(f,"IMG",{src:!0,alt:!0,class:!0}),t=C(f),f.forEach(_),this.h()},h(){F(s.src,l=r[4].get(r[11])||"")||i(s,"src",l),i(s,"alt",""),i(s,"class","w-9 h-9"),i(e,"class","over:bg-gray-200 transition-colors p-1.5")},m(o,f){H(o,e,f),m(e,s),m(e,t),a||(n=S(e,"click",tt(lt(c))),a=!0)},p(o,f){r=o,f&8&&!F(s.src,l=r[4].get(r[11])||"")&&i(s,"src",l)},d(o){o&&_(e),a=!1,n()}}}function Ct(r){let e,s,l,t,a,n,c,o=r[2]&&Re(r);return{c(){e=g("div"),s=g("img"),t=E(),o&&o.c(),this.h()},l(f){e=v(f,"DIV",{class:!0,tabindex:!0,role:!0});var d=w(e);s=v(d,"IMG",{src:!0,alt:!0,class:!0}),t=C(d),o&&o.l(d),d.forEach(_),this.h()},h(){F(s.src,l=r[1])||i(s,"src",l),i(s,"alt",""),i(s,"class","w-8 lg:w-9 h-8 lg:h-9"),i(e,"class",a=`${r[0]} flex items-center justify-center cursor-pointer relative select-none`),i(e,"tabindex","0"),i(e,"role","button")},m(f,d){H(f,e,d),m(e,s),m(e,t),o&&o.m(e,null),n||(c=[S(e,"click",r[10]),S(e,"keyup",It)],n=!0)},p(f,[d]){d&2&&!F(s.src,l=f[1])&&i(s,"src",l),f[2]?o?(o.p(f,d),d&4&&I(o,1)):(o=Re(f),o.c(),I(o,1),o.m(e,null)):o&&(xe(),D(o,1,1,()=>{o=null}),et()),d&1&&a!==(a=`${f[0]} flex items-center justify-center cursor-pointer relative select-none`)&&i(e,"class",a)},i(f){I(o)},o(f){D(o)},d(f){f&&_(e),o&&o.d(),n=!1,Ee(c)}}}const It=()=>!1;function Tt(r,e,s){let l,t;A(r,ee,b=>s(7,l=b)),A(r,Qe,b=>s(3,t=b));let{class:a=""}=e;const n=new Map([["en",`${Y}/lang/en-US.png`],["zh",`${Y}/lang/zh-CHT.png`]]);let c;const o=b=>{var $;vt(($=location==null?void 0:location.pathname)==null?void 0:$.replace(`/${ee.get()}/`,`/${String(b)}/`)),s(2,f=!1)};let f=!1;const d={duration:300},u=()=>s(2,f=!1),p=b=>o(b),h=()=>s(2,f=!f);return r.$$set=b=>{"class"in b&&s(0,a=b.class)},r.$$.update=()=>{r.$$.dirty&128&&s(1,c=n.get(l))},[a,c,f,t,n,o,d,l,u,p,h]}class Mt extends q{constructor(e){super(),K(this,e,Tt,Ct,X,{class:0})}}function Lt(r){let e,s,l,t,a,n,c,o,f,d,u;return{c(){e=g("div"),s=g("div"),l=g("div"),t=g("div"),a=g("img"),c=E(),o=g("img"),this.h()},l(p){e=v(p,"DIV",{tabindex:!0,role:!0,class:!0});var h=w(e);s=v(h,"DIV",{class:!0});var b=w(s);l=v(b,"DIV",{class:!0});var $=w(l);t=v($,"DIV",{class:!0});var N=w(t);a=v(N,"IMG",{src:!0,alt:!0,class:!0}),c=C(N),o=v(N,"IMG",{src:!0,alt:!0,class:!0}),N.forEach(_),$.forEach(_),b.forEach(_),h.forEach(_),this.h()},h(){F(a.src,n=`${Y}/icon/sun.svg`)||i(a,"src",n),i(a,"alt",""),i(a,"class","w-4 h-4 m-1 transition-margin -mt-4"),ce(a,"-mt-4",r[1]),F(o.src,f=`${Y}/icon/moon.svg`)||i(o,"src",f),i(o,"alt",""),i(o,"class","w-4 h-4 m-1"),i(t,"class","w-6 h-6"),i(l,"class","transition-all group-hover:scale-110 dark:bg-#1d1c19 w-6 h-6 bg-gray-50 overflow-hidden rounded-full shadow-md inline-block ml-4.5"),ce(l,"ml-4.5",r[1]),i(s,"class","w-full h-6 rounded-full relative"),i(e,"tabindex","0"),i(e,"role","button"),i(e,"class","group w-12 rounded-full bg-gray-200 dark:bg-zinc-600 h-7.5 border-1 border-gray-100 dark:border-gray-700 p-0.5 cursor-pointer overflow-hidden select-none")},m(p,h){H(p,e,h),m(e,s),m(s,l),m(l,t),m(t,a),m(t,c),m(t,o),d||(u=[S(e,"click",r[2]),S(e,"keyup",St)],d=!0)},p(p,[h]){h&2&&ce(a,"-mt-4",p[1]),h&2&&ce(l,"ml-4.5",p[1])},i:He,o:He,d(p){p&&_(e),d=!1,Ee(u)}}}const St=()=>!1;function Dt(r,e,s){let l,t;A(r,it,n=>s(0,t=n));const a=()=>ct(!t.dark);return r.$$.update=()=>{r.$$.dirty&1&&s(1,l=t.dark)},[t,l,a]}class Nt extends q{constructor(e){super(),K(this,e,Dt,Lt,X,{})}}function Vt(r){let e,s,l,t,a,n,c,o,f,d,u,p=r[3]("header.title")+"",h,b,$,N,V,k,B,P,T,Ie=`Vue
            <span class="hidden md:inline-block bg-emerald-500 h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"></span>`,me,U,Te=`React
            <span class="hidden md:inline-block bg-sky-500 h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"></span>`,pe,M,_e,W,le,se,ge,x,ve,G,re,be,O,Me='<span class="w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded"></span> <span class="w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded my-1"></span> <span class="w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded"></span>',j,we,Le;return $=new Nt({}),G=new Mt({props:{class:"w-8 h-8 md:w-10 md:h-10 md:ml-2 my-2 md:my-0"}}),{c(){e=g("div"),s=g("div"),l=E(),t=g("div"),a=g("div"),n=g("div"),c=g("a"),o=Oe("svg"),f=Oe("path"),d=E(),u=g("span"),h=je(p),b=E(),Z($.$$.fragment),N=E(),V=g("div"),k=g("div"),B=g("div"),P=E(),T=g("button"),T.innerHTML=Ie,me=E(),U=g("button"),U.innerHTML=Te,pe=E(),M=g("a"),_e=je(`Svelte
            `),W=g("span"),ge=E(),x=g("div"),ve=E(),Z(G.$$.fragment),be=E(),O=g("button"),O.innerHTML=Me,this.h()},l(y){e=v(y,"DIV",{class:!0});var z=w(e);s=v(z,"DIV",{class:!0}),w(s).forEach(_),l=C(z),t=v(z,"DIV",{class:!0});var Se=w(t);a=v(Se,"DIV",{class:!0});var ae=w(a);n=v(ae,"DIV",{class:!0});var ne=w(n);c=v(ne,"A",{href:!0,target:!0,class:!0,"aria-label":!0});var oe=w(c);o=Be(oe,"svg",{class:!0,width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var De=w(o);f=Be(De,"path",{class:!0,"fill-rule":!0,"clip-rule":!0,d:!0,transform:!0}),w(f).forEach(_),De.forEach(_),d=C(oe),u=v(oe,"SPAN",{class:!0});var Ne=w(u);h=Ge(Ne,p),Ne.forEach(_),oe.forEach(_),b=C(ne),te($.$$.fragment,ne),ne.forEach(_),N=C(ae),V=v(ae,"DIV",{class:!0});var ie=w(V);k=v(ie,"DIV",{class:!0});var L=w(k);B=v(L,"DIV",{class:!0}),w(B).forEach(_),P=C(L),T=v(L,"BUTTON",{class:!0,"data-svelte-h":!0}),ke(T)!=="svelte-1bore9i"&&(T.innerHTML=Ie),me=C(L),U=v(L,"BUTTON",{class:!0,"data-svelte-h":!0}),ke(U)!=="svelte-sfpudj"&&(U.innerHTML=Te),pe=C(L),M=v(L,"A",{"data-sveltekit-noscroll":!0,href:!0,class:!0});var $e=w(M);_e=Ge($e,`Svelte
            `),W=v($e,"SPAN",{class:!0}),w(W).forEach(_),$e.forEach(_),ge=C(L),x=v(L,"DIV",{class:!0}),w(x).forEach(_),ve=C(L),te(G.$$.fragment,L),L.forEach(_),be=C(ie),O=v(ie,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),ke(O)!=="svelte-y8rcdg"&&(O.innerHTML=Me),ie.forEach(_),ae.forEach(_),Se.forEach(_),z.forEach(_),this.h()},h(){i(s,"class","progress fixed top-0 h-0.75 rounded-r w-0 bg-rose-600 z-60"),i(f,"class","fill-#1B1F23 dark:fill-#fefddd"),i(f,"fill-rule","evenodd"),i(f,"clip-rule","evenodd"),i(f,"d","M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"),i(f,"transform","scale(64)"),i(o,"class","w-auto h-7 md:h-8 mr-2"),i(o,"width","1024"),i(o,"height","1024"),i(o,"viewBox","0 0 1024 1024"),i(o,"fill","none"),i(o,"xmlns","http://www.w3.org/2000/svg"),i(u,"class","hidden sm:inline-block whitespace-pre"),i(c,"href",st),i(c,"target","_black"),i(c,"class","font-medium text-4 leading-10 lg:leading-12 flex items-center sm:mr-3"),i(c,"aria-label","github"),i(n,"class","flex items-center"),i(B,"class","w-full md:w-0.5 h-0.5 mb-2 md:mb-0 md:h-4 mt-2 md:mt-0 md:mx-3 bg-gray-100 dark:bg-zinc-700"),i(T,"class","cursor-pointer h-10 lg:h-12 mx-3 relative group"),i(U,"class","cursor-pointer h-10 lg:h-12 mx-3 relative group"),i(W,"class","hidden md:inline-block bg-rose-600 h-1 group-hover:h-2 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"),i(M,"data-sveltekit-noscroll",""),i(M,"href",le=`${ye}/${r[0]}/home/`),i(M,"class",se=`${/\/home(\/?)/.test(r[2].url.pathname)?"color-rose-600":""} cursor-pointer h-10 lg:h-12  mx-3 relative group leading-10 lg:leading-12`),i(x,"class","w-full md:w-0.5 h-0.5 mb-2 md:mb-0 md:h-4 mt-2 md:mt-0 md:mx-3 bg-gray-100 dark:bg-zinc-700"),i(k,"class",re=`${r[1]?"flex":"hidden"} shadow-lg md:shadow-none fixed left-0 top-10 w-full pb-3 md:pb-0 md:w-unset md:static bg-#ffffff dark:bg-#1d1c19 dark:md:bg-transparent md:bg-transparent md:flex flex-col md:flex-row items-center`),i(O,"class","flex md:hidden ml-2 w-8 h-8 flex-col items-center justify-center cursor-pointer"),i(O,"aria-label","menu"),i(V,"class","flex items-center font-medium select-none"),i(a,"class","max-w-256 w-full h-full flex justify-between mx-auto relative z-10 px-2 md:px-3"),i(t,"class","header fixed w-full top-0 z-50 h-10 lg:h-12 shadow-lg bg-#ffffff dark:bg-#1d1c19 dark:color-#fefddd transition-all"),i(e,"class","contents")},m(y,z){H(y,e,z),m(e,s),m(e,l),m(e,t),m(t,a),m(a,n),m(n,c),m(c,o),m(o,f),m(c,d),m(c,u),m(u,h),m(n,b),J($,n,null),m(a,N),m(a,V),m(V,k),m(k,B),m(k,P),m(k,T),m(k,me),m(k,U),m(k,pe),m(k,M),m(M,_e),m(M,W),m(k,ge),m(k,x),m(k,ve),J(G,k,null),m(V,be),m(V,O),j=!0,we||(Le=[S(T,"keyup",zt),S(T,"click",r[6]),S(U,"keyup",At),S(U,"click",r[7]),S(M,"click",r[8]),S(O,"click",r[9]),ht(r[5].call(null,e))],we=!0)},p(y,[z]){(!j||z&8)&&p!==(p=y[3]("header.title")+"")&&_t(h,p),(!j||z&1&&le!==(le=`${ye}/${y[0]}/home/`))&&i(M,"href",le),(!j||z&4&&se!==(se=`${/\/home(\/?)/.test(y[2].url.pathname)?"color-rose-600":""} cursor-pointer h-10 lg:h-12  mx-3 relative group leading-10 lg:leading-12`))&&i(M,"class",se),(!j||z&2&&re!==(re=`${y[1]?"flex":"hidden"} shadow-lg md:shadow-none fixed left-0 top-10 w-full pb-3 md:pb-0 md:w-unset md:static bg-#ffffff dark:bg-#1d1c19 dark:md:bg-transparent md:bg-transparent md:flex flex-col md:flex-row items-center`))&&i(k,"class",re)},i(y){j||(I($.$$.fragment,y),I(G.$$.fragment,y),j=!0)},o(y){D($.$$.fragment,y),D(G.$$.fragment,y),j=!1},d(y){y&&_(e),Q($),Q(G),we=!1,Ee(Le)}}}const zt=()=>!1,At=()=>!1;function Ht(r,e,s){let l,t,a;A(r,ee,h=>s(0,l=h)),A(r,Ce,h=>s(2,t=h)),A(r,We,h=>s(3,a=h));const n=h=>location.href=h+t.url.pathname.replace(rt,""),c=h=>{if(!h)return;const b=h==null?void 0:h.querySelector("div.progress"),$=h==null?void 0:h.querySelector("div.header");let N=0;const V=()=>{var P,T;const k=document.body.clientHeight,B=Math.max(0,Math.min(1,scrollY/(k-window.innerHeight)))*100;b&&(b.style.width=`${B}%`),window.scrollY>N?(P=$==null?void 0:$.classList)==null||P.add("-translate-y-100%"):(T=$==null?void 0:$.classList)==null||T.remove("-translate-y-100%"),N=window.scrollY};return window.addEventListener("scroll",V),{destroy(){window.removeEventListener("scroll",V)}}};let o=!1;const f=()=>n(at),d=()=>n(nt),u=()=>s(1,o=!1),p=()=>s(1,o=!o);return r.$$.update=()=>{r.$$.dirty&1&&l&&s(1,o=!1)},[l,o,t,a,n,c,f,d,u,p]}class Ut extends q{constructor(e){super(),K(this,e,Ht,Vt,X,{})}}function Ot(r){let e,s,l;e=new Ut({});const t=r[1].default,a=ue(t,r,r[0],null);return{c(){Z(e.$$.fragment),s=E(),a&&a.c()},l(n){te(e.$$.fragment,n),s=C(n),a&&a.l(n)},m(n,c){J(e,n,c),H(n,s,c),a&&a.m(n,c),l=!0},p(n,[c]){a&&a.p&&(!l||c&1)&&fe(a,t,n,n[0],l?he(t,n[0],c,null):de(n[0]),null)},i(n){l||(I(e.$$.fragment,n),I(a,n),l=!0)},o(n){D(e.$$.fragment,n),D(a,n),l=!1},d(n){n&&_(s),Q(e,n),a&&a.d(n)}}}function jt(r,e,s){let{$$slots:l={},$$scope:t}=e;return r.$$set=a=>{"$$scope"in a&&s(0,t=a.$$scope)},[t,l]}class Fe extends q{constructor(e){super(),K(this,e,jt,Ot,X,{})}}function Bt(r){let e;const s=r[1].default,l=ue(s,r,r[0],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,[a]){l&&l.p&&(!e||a&1)&&fe(l,s,t,t[0],e?he(s,t[0],a,null):de(t[0]),null)},i(t){e||(I(l,t),e=!0)},o(t){D(l,t),e=!1},d(t){l&&l.d(t)}}}function Gt(r,e,s){let{$$slots:l={},$$scope:t}=e;return r.$$set=a=>{"$$scope"in a&&s(0,t=a.$$scope)},[t,l]}class Ze extends q{constructor(e){super(),K(this,e,Gt,Bt,X,{})}}function Xt(r){let e;const s=r[1].default,l=ue(s,r,r[2],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&4)&&fe(l,s,t,t[2],e?he(s,t[2],a,null):de(t[2]),null)},i(t){e||(I(l,t),e=!0)},o(t){D(l,t),e=!1},d(t){l&&l.d(t)}}}function qt(r){let e,s,l;var t=r[0].data.layout===Ae.NORMAL?Ze:Fe;function a(n,c){return{props:{$$slots:{default:[Xt]},$$scope:{ctx:n}}}}return t&&(e=Xe(t,a(r))),{c(){e&&Z(e.$$.fragment),s=qe()},l(n){e&&te(e.$$.fragment,n),s=qe()},m(n,c){e&&J(e,n,c),H(n,s,c),l=!0},p(n,[c]){if(c&1&&t!==(t=n[0].data.layout===Ae.NORMAL?Ze:Fe)){if(e){xe();const o=e;D(o.$$.fragment,1,0,()=>{Q(o,1)}),et()}t?(e=Xe(t,a(n)),Z(e.$$.fragment),I(e.$$.fragment,1),J(e,s.parentNode,s)):e=null}else if(t){const o={};c&4&&(o.$$scope={dirty:c,ctx:n}),e.$set(o)}},i(n){l||(e&&I(e.$$.fragment,n),l=!0)},o(n){e&&D(e.$$.fragment,n),l=!1},d(n){n&&_(s),e&&Q(e,n)}}}function Kt(r,e,s){let l;A(r,Ce,n=>s(0,l=n));let{$$slots:t={},$$scope:a}=e;return r.$$set=n=>{"$$scope"in n&&s(2,a=n.$$scope)},[l,t,a]}class Pt extends q{constructor(e){super(),K(this,e,Kt,qt,X,{})}}const{document:R}=bt;function Rt(r){let e;const s=r[5].default,l=ue(s,r,r[6],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&64)&&fe(l,s,t,t[6],e?he(s,t[6],a,null):de(t[6]),null)},i(t){e||(I(l,t),e=!0)},o(t){D(l,t),e=!1},d(t){l&&l.d(t)}}}function Yt(r){let e,s,l,t,a,n,c,o;R.title=l=r[2]("website.title").replace(/\{0}/,r[1]);const f=[r[0]];let d={$$slots:{default:[Rt]},$$scope:{ctx:r}};for(let u=0;u<f.length;u+=1)d=mt(d,f[u]);return c=new Pt({props:d}),{c(){e=g("link"),s=g("link"),t=g("meta"),n=E(),Z(c.$$.fragment),this.h()},l(u){const p=gt("svelte-182bt16",R.head);e=v(p,"LINK",{rel:!0,type:!0,href:!0}),s=v(p,"LINK",{rel:!0,type:!0,href:!0}),t=v(p,"META",{name:!0,content:!0}),p.forEach(_),n=C(u),te(c.$$.fragment,u),this.h()},h(){i(e,"rel","icon"),i(e,"type","image/svg"),i(e,"href",`${Y}/icon/svelte.svg`),i(s,"rel","shortcut icon"),i(s,"type","image/x-icon"),i(s,"href",`${Y}/icon/svelte.ico`),i(t,"name","description"),i(t,"content",a=r[2]("website.description").replace(/\{0}/,r[1]))},m(u,p){m(R.head,e),m(R.head,s),m(R.head,t),H(u,n,p),J(c,u,p),o=!0},p(u,[p]){(!o||p&6)&&l!==(l=u[2]("website.title").replace(/\{0}/,u[1]))&&(R.title=l),(!o||p&6&&a!==(a=u[2]("website.description").replace(/\{0}/,u[1])))&&i(t,"content",a);const h=p&1?wt(f,[$t(u[0])]):{};p&64&&(h.$$scope={dirty:p,ctx:u}),c.$set(h)},i(u){o||(I(c.$$.fragment,u),o=!0)},o(u){D(c.$$.fragment,u),o=!1},d(u){u&&_(n),_(e),_(s),_(t),Q(c,u)}}}function Ft(r,e,s){let l,t,a;A(r,ee,d=>s(3,l=d)),A(r,Ce,d=>s(4,t=d)),A(r,We,d=>s(2,a=d));let{$$slots:n={},$$scope:c}=e,o="";ut();let{data:f}=e;return r.$$set=d=>{"data"in d&&s(0,f=d.data),"$$scope"in d&&s(6,c=d.$$scope)},r.$$.update=()=>{var d;r.$$.dirty&16&&s(1,o=String(((d=t.route)==null?void 0:d.id)||"").replace(/\/\[locale]\//,"").toUpperCase()),r.$$.dirty&8&&(document.documentElement.lang=String(l||Je))},[f,o,a,l,t,n,c]}class rl extends q{constructor(e){super(),K(this,e,Ft,Yt,X,{data:0})}}export{rl as component,sl as universal};
