import{C as $t,S as j,i as q,s as F,k as g,a as y,l as $,m as v,c as I,h,D as re,n as o,b as z,E as m,F as T,g as S,v as ft,d as L,f as dt,G as Te,H as R,I as mt,J as ht,K as _t,L as Qe,M as vt,N as Se,O as We,P as xe,q as ee,y as H,Q as et,r as te,z as J,A as O,R as bt,u as wt,B as K,T as me,U as he,V as _e,W as pe,X as kt,Y as Et,x as tt,e as lt,Z as yt,_ as It,$ as St,a0 as Ct,a1 as Tt}from"../chunks/index.45361cbc.js";import{l as Ce,a as Lt,t as pt}from"../chunks/index.fc162089.js";import{L as st}from"../chunks/constant.34331e54.js";import{p as je}from"../chunks/stores.3756bbc1.js";import{h as Y}from"../chunks/singletons.f5c36082.js";import{e as G}from"../chunks/public.145996df.js";import{d as Mt,s as At,i as Nt}from"../chunks/index.f9b90a60.js";import{b as le}from"../chunks/paths.63f0e2fc.js";import{i as Dt,o as Ut,e as Vt,b as rt}from"../chunks/constant.5e3db4d8.js";function at(r,{delay:e=0,duration:s=400,easing:t=$t}={}){const l=+getComputedStyle(r).opacity;return{delay:e,duration:s,easing:t,css:a=>`opacity: ${a*l}`}}Y.disable_scroll_handling;const Xt=Y.goto;Y.invalidate;Y.invalidateAll;Y.preload_data;Y.preload_code;Y.before_navigate;Y.after_navigate;function nt(r,e,s){const t=r.slice();return t[11]=e[s],t[13]=s,t}function ot(r){let e,s,t,l,a,n,d,f,i=r[3],u=[];for(let c=0;c<i.length;c+=1)u[c]=it(nt(r,i,c));return{c(){e=g("button"),s=y(),t=g("div"),l=g("div");for(let c=0;c<u.length;c+=1)u[c].c();this.h()},l(c){e=$(c,"BUTTON",{class:!0}),v(e).forEach(h),s=I(c),t=$(c,"DIV",{class:!0});var _=v(t);l=$(_,"DIV",{class:!0});var p=v(l);for(let b=0;b<u.length;b+=1)u[b].l(p);p.forEach(h),_.forEach(h),this.h()},h(){o(e,"class","fixed left-0 top-0 w-full h-full z-0"),o(l,"class","bg-white rounded-1.5 py-1 shadow-md"),o(t,"class","absolute top-0 left-1/2 -translate-x-1/2 pt-12 md:pt-11 lg:pt-12 z-10 w-12")},m(c,_){z(c,e,_),z(c,s,_),z(c,t,_),m(t,l);for(let p=0;p<u.length;p+=1)u[p].m(l,null);n=!0,d||(f=T(e,"click",mt(ht(r[8]))),d=!0)},p(c,_){if(r=c,_&56){i=r[3];let p;for(p=0;p<i.length;p+=1){const b=nt(r,i,p);u[p]?u[p].p(b,_):(u[p]=it(b),u[p].c(),u[p].m(l,null))}for(;p<u.length;p+=1)u[p].d(1);u.length=i.length}},i(c){n||(_t(()=>{a||(a=Qe(t,at,r[6],!0)),a.run(1)}),n=!0)},o(c){a||(a=Qe(t,at,r[6],!1)),a.run(0),n=!1},d(c){c&&h(e),c&&h(s),c&&h(t),vt(u,c),c&&a&&a.end(),d=!1,f()}}}function it(r){let e,s,t,l,a,n;function d(){return r[9](r[11])}return{c(){e=g("button"),s=g("img"),l=y(),this.h()},l(f){e=$(f,"BUTTON",{":key":!0,class:!0});var i=v(e);s=$(i,"IMG",{src:!0,alt:!0,class:!0}),l=I(i),i.forEach(h),this.h()},h(){re(s.src,t=r[4].get(r[11])||"")||o(s,"src",t),o(s,"alt",""),o(s,"class","w-9 h-9"),o(e,":key","item"),o(e,"class","over:bg-gray-200 transition-colors p-1.5")},m(f,i){z(f,e,i),m(e,s),m(e,l),a||(n=T(e,"click",mt(ht(d))),a=!0)},p(f,i){r=f,i&8&&!re(s.src,t=r[4].get(r[11])||"")&&o(s,"src",t)},d(f){f&&h(e),a=!1,n()}}}function zt(r){let e,s,t,l,a,n,d,f,i=r[2]&&ot(r);return{c(){e=g("div"),s=g("img"),l=y(),i&&i.c(),this.h()},l(u){e=$(u,"DIV",{class:!0,tabindex:!0,role:!0});var c=v(e);s=$(c,"IMG",{src:!0,alt:!0,class:!0}),l=I(c),i&&i.l(c),c.forEach(h),this.h()},h(){re(s.src,t=r[1])||o(s,"src",t),o(s,"alt",""),o(s,"class","w-8 lg:w-9 h-8 lg:h-9"),o(e,"class",a=`${r[0]} flex items-center justify-center cursor-pointer relative select-none`),o(e,"tabindex","0"),o(e,"role","button")},m(u,c){z(u,e,c),m(e,s),m(e,l),i&&i.m(e,null),n=!0,d||(f=[T(e,"click",r[10]),T(e,"keyup",Rt)],d=!0)},p(u,[c]){(!n||c&2&&!re(s.src,t=u[1]))&&o(s,"src",t),u[2]?i?(i.p(u,c),c&4&&S(i,1)):(i=ot(u),i.c(),S(i,1),i.m(e,null)):i&&(ft(),L(i,1,1,()=>{i=null}),dt()),(!n||c&1&&a!==(a=`${u[0]} flex items-center justify-center cursor-pointer relative select-none`))&&o(e,"class",a)},i(u){n||(S(i),n=!0)},o(u){L(i),n=!1},d(u){u&&h(e),i&&i.d(),d=!1,Te(f)}}}const Rt=()=>!1;function Pt(r,e,s){let t,l;R(r,Ce,b=>s(7,t=b)),R(r,Lt,b=>s(3,l=b));let{class:a=""}=e;const n=new Map([["en",`${G.MIX_ASSETS_URL}/lang/en-US.png`],["zh",`${G.MIX_ASSETS_URL}/lang/zh-CHT.png`]]);let d;const f=b=>{var U;Xt((U=location==null?void 0:location.pathname)==null?void 0:U.replace(`/${Ce.get()}/`,`/${String(b)}/`)),s(2,i=!1)};let i=!1;const u={duration:300},c=()=>s(2,i=!1),_=b=>f(b),p=()=>s(2,i=!i);return r.$$set=b=>{"class"in b&&s(0,a=b.class)},r.$$.update=()=>{r.$$.dirty&128&&s(1,d=n.get(t))},[a,d,i,l,n,f,u,t,c,_,p]}class Bt extends j{constructor(e){super(),q(this,e,Pt,zt,F,{class:0})}}function Gt(r){let e,s,t,l,a,n,d,f,i,u,c;return{c(){e=g("div"),s=g("div"),t=g("div"),l=g("div"),a=g("img"),d=y(),f=g("img"),this.h()},l(_){e=$(_,"DIV",{class:!0});var p=v(e);s=$(p,"DIV",{class:!0});var b=v(s);t=$(b,"DIV",{class:!0});var U=v(t);l=$(U,"DIV",{class:!0});var C=v(l);a=$(C,"IMG",{src:!0,alt:!0,class:!0}),d=I(C),f=$(C,"IMG",{src:!0,alt:!0,class:!0}),C.forEach(h),U.forEach(h),b.forEach(h),p.forEach(h),this.h()},h(){re(a.src,n=`${G.MIX_ASSETS_URL}/icon/sun.svg`)||o(a,"src",n),o(a,"alt",""),o(a,"class","w-4 h-4 m-1 transition-margin"),Se(a,"-mt-4",r[0]),re(f.src,i=`${G.MIX_ASSETS_URL}/icon/moon.svg`)||o(f,"src",i),o(f,"alt",""),o(f,"class","w-4 h-4 m-1"),o(l,"class","w-6 h-6"),o(t,"class","transition-all group-hover:scale-110 dark:bg-#1d1c19 w-6 h-6 bg-gray-50 overflow-hidden rounded-full shadow-md inline-block"),Se(t,"ml-4.5",r[0]),o(s,"class","w-full h-6 rounded-full relative"),o(e,"class","group w-12 rounded-full bg-gray-200 dark:bg-zinc-600 h-7.5 border-1 border-gray-100 dark:border-gray-700 p-0.5 cursor-pointer overflow-hidden select-none")},m(_,p){z(_,e,p),m(e,s),m(s,t),m(t,l),m(l,a),m(l,d),m(l,f),u||(c=[T(e,"click",r[1]),T(e,"keyup",Ht)],u=!0)},p(_,[p]){p&1&&Se(a,"-mt-4",_[0]),p&1&&Se(t,"ml-4.5",_[0])},i:We,o:We,d(_){_&&h(e),u=!1,Te(c)}}}const Ht=()=>!1;function Ot(r,e,s){let t;return R(r,Mt,a=>s(0,t=a)),[t,()=>At()]}class Kt extends j{constructor(e){super(),q(this,e,Ot,Gt,F,{})}}function jt(r){let e,s,t,l,a,n,d,f,i,u,c=r[3]("header.title")+"",_,p,b,U,C,w,k,Q,W,ae,V,Le,ge,$e,Me,ne,Ae,P,Ne,oe,De,B,Ue,ie,Ve,N,Xe,ce,ve,be,ze,Z,we,Re,D,ue,Pe,fe,Be,de,X,Ge,qe;return b=new Kt({}),Z=new Bt({props:{class:"w-8 h-8 md:w-10 md:h-10 md:ml-2 my-2 md:my-0"}}),{c(){e=g("div"),s=g("div"),t=y(),l=g("div"),a=g("div"),n=g("a"),d=xe("svg"),f=xe("path"),i=y(),u=g("span"),_=ee(c),p=y(),H(b.$$.fragment),U=y(),C=g("div"),w=g("div"),k=g("a"),Q=ee("Empty"),ae=y(),V=g("a"),Le=ee("Record"),Me=y(),ne=g("div"),Ae=y(),P=g("button"),Ne=ee(`Vue
          `),oe=g("span"),De=y(),B=g("button"),Ue=ee(`React
          `),ie=g("span"),Ve=y(),N=g("a"),Xe=ee(`Svelte
          `),ce=g("span"),ze=y(),H(Z.$$.fragment),Re=y(),D=g("button"),ue=g("span"),Pe=y(),fe=g("span"),Be=y(),de=g("span"),this.h()},l(E){e=$(E,"DIV",{class:!0});var M=v(e);s=$(M,"DIV",{class:!0}),v(s).forEach(h),t=I(M),l=$(M,"DIV",{class:!0});var ke=v(l);a=$(ke,"DIV",{class:!0});var Ee=v(a);n=$(Ee,"A",{href:!0,target:!0,class:!0,"aria-label":!0});var ye=v(n);d=et(ye,"svg",{class:!0,width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var Fe=v(d);f=et(Fe,"path",{class:!0,"fill-rule":!0,"clip-rule":!0,d:!0,transform:!0}),v(f).forEach(h),Fe.forEach(h),i=I(ye),u=$(ye,"SPAN",{class:!0});var Ye=v(u);_=te(Ye,c),Ye.forEach(h),ye.forEach(h),p=I(Ee),J(b.$$.fragment,Ee),Ee.forEach(h),U=I(ke),C=$(ke,"DIV",{class:!0});var Ie=v(C);w=$(Ie,"DIV",{class:!0});var A=v(w);k=$(A,"A",{"data-sveltekit-noscroll":!0,href:!0,class:!0});var Ze=v(k);Q=te(Ze,"Empty"),Ze.forEach(h),ae=I(A),V=$(A,"A",{"data-sveltekit-noscroll":!0,href:!0,class:!0});var Je=v(V);Le=te(Je,"Record"),Je.forEach(h),Me=I(A),ne=$(A,"DIV",{class:!0}),v(ne).forEach(h),Ae=I(A),P=$(A,"BUTTON",{class:!0});var He=v(P);Ne=te(He,`Vue
          `),oe=$(He,"SPAN",{class:!0}),v(oe).forEach(h),He.forEach(h),De=I(A),B=$(A,"BUTTON",{class:!0});var Oe=v(B);Ue=te(Oe,`React
          `),ie=$(Oe,"SPAN",{class:!0}),v(ie).forEach(h),Oe.forEach(h),Ve=I(A),N=$(A,"A",{"data-sveltekit-noscroll":!0,href:!0,class:!0});var Ke=v(N);Xe=te(Ke,`Svelte
          `),ce=$(Ke,"SPAN",{class:!0}),v(ce).forEach(h),Ke.forEach(h),ze=I(A),J(Z.$$.fragment,A),A.forEach(h),Re=I(Ie),D=$(Ie,"BUTTON",{class:!0,"aria-label":!0});var x=v(D);ue=$(x,"SPAN",{class:!0}),v(ue).forEach(h),Pe=I(x),fe=$(x,"SPAN",{class:!0}),v(fe).forEach(h),Be=I(x),de=$(x,"SPAN",{class:!0}),v(de).forEach(h),x.forEach(h),Ie.forEach(h),ke.forEach(h),M.forEach(h),this.h()},h(){o(s,"class","top-0 absolute h-0.75 rounded-r w-0 bg-rose-600"),o(f,"class","fill-#1B1F23 dark:fill-#fefddd"),o(f,"fill-rule","evenodd"),o(f,"clip-rule","evenodd"),o(f,"d","M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"),o(f,"transform","scale(64)"),o(d,"class","w-auto h-7 md:h-8 mr-2"),o(d,"width","1024"),o(d,"height","1024"),o(d,"viewBox","0 0 1024 1024"),o(d,"fill","none"),o(d,"xmlns","http://www.w3.org/2000/svg"),o(u,"class","hidden sm:inline-block whitespace-pre"),o(n,"href",G.MIX_GIT_PATH),o(n,"target","_black"),o(n,"class","font-medium text-4 leading-10 lg:leading-12 flex items-center sm:mr-3"),o(n,"aria-label","github"),o(a,"class","flex items-center"),o(k,"data-sveltekit-noscroll",""),o(k,"href",W=`${le}/${r[0]}/empty/`),o(k,"class","md:mx-3 h-10 lg:h-12 leading-10 lg:leading-12"),o(V,"data-sveltekit-noscroll",""),o(V,"href",ge=`${le}/${r[0]}/record/`),o(V,"class",$e=`${/\/record(\/?)/.test(r[2].url.pathname)?"color-rose-600":""} md:mx-3 h-10 lg:h-12 mx-3 relative group md:mx-3 leading-10 lg:leading-12`),o(ne,"class","w-full md:w-0.5 h-0.5 mb-2 md:mb-0 md:h-4 mt-2 md:mt-0 md:mx-3 bg-gray-100 dark:bg-zinc-700"),o(oe,"class","hidden md:inline-block bg-emerald-500 h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"),o(P,"class","cursor-pointer h-10 lg:h-12 mx-3 relative group"),o(ie,"class","hidden md:inline-block bg-sky-500 h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"),o(B,"class","cursor-pointer h-10 lg:h-12 mx-3 relative group"),o(ce,"class","hidden md:inline-block bg-rose-600 h-1 group-hover:h-2 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"),o(N,"data-sveltekit-noscroll",""),o(N,"href",ve=`${le}/${r[0]}/home/`),o(N,"class",be=`${/\/home(\/?)/.test(r[2].url.pathname)?"color-rose-600":""} cursor-pointer h-10 lg:h-12  mx-3 relative group leading-10 lg:leading-12`),o(w,"class",we=`${r[1]?"flex":"hidden"} shadow-lg md:shadow-none fixed left-0 top-10 w-full pb-3 md:pb-0 md:w-unset md:static bg-#ffffff dark:bg-#1d1c19 dark:md:bg-transparent md:bg-transparent md:flex flex-col md:flex-row items-center`),o(ue,"class","w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded"),o(fe,"class","w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded my-1"),o(de,"class","w-5 h-0.75 bg-#1d1c19 dark:bg-#fefddd rounded"),o(D,"class","flex md:hidden ml-2 w-8 h-8 flex-col items-center justify-center cursor-pointer"),o(D,"aria-label","menu"),o(C,"class","flex items-center font-medium select-none"),o(l,"class","max-w-256 w-full h-full flex justify-between mx-auto relative z-10 px-2 md:px-3"),o(e,"class","fixed w-full top-0 z-50 h-10 lg:h-12 shadow-lg bg-#ffffff dark:bg-#1d1c19 dark:color-#fefddd transition-colors")},m(E,M){z(E,e,M),m(e,s),m(e,t),m(e,l),m(l,a),m(a,n),m(n,d),m(d,f),m(n,i),m(n,u),m(u,_),m(a,p),O(b,a,null),m(l,U),m(l,C),m(C,w),m(w,k),m(k,Q),m(w,ae),m(w,V),m(V,Le),m(w,Me),m(w,ne),m(w,Ae),m(w,P),m(P,Ne),m(P,oe),m(w,De),m(w,B),m(B,Ue),m(B,ie),m(w,Ve),m(w,N),m(N,Xe),m(N,ce),m(w,ze),O(Z,w,null),m(C,Re),m(C,D),m(D,ue),m(D,Pe),m(D,fe),m(D,Be),m(D,de),X=!0,Ge||(qe=[bt(r[7].call(null,s)),T(V,"click",r[8]),T(P,"keyup",qt),T(P,"click",r[9]),T(B,"keyup",Ft),T(B,"click",r[10]),T(N,"click",r[11]),T(D,"click",r[12])],Ge=!0)},p(E,[M]){(!X||M&8)&&c!==(c=E[3]("header.title")+"")&&wt(_,c),(!X||M&1&&W!==(W=`${le}/${E[0]}/empty/`))&&o(k,"href",W),(!X||M&1&&ge!==(ge=`${le}/${E[0]}/record/`))&&o(V,"href",ge),(!X||M&4&&$e!==($e=`${/\/record(\/?)/.test(E[2].url.pathname)?"color-rose-600":""} md:mx-3 h-10 lg:h-12 mx-3 relative group md:mx-3 leading-10 lg:leading-12`))&&o(V,"class",$e),(!X||M&1&&ve!==(ve=`${le}/${E[0]}/home/`))&&o(N,"href",ve),(!X||M&4&&be!==(be=`${/\/home(\/?)/.test(E[2].url.pathname)?"color-rose-600":""} cursor-pointer h-10 lg:h-12  mx-3 relative group leading-10 lg:leading-12`))&&o(N,"class",be),(!X||M&2&&we!==(we=`${E[1]?"flex":"hidden"} shadow-lg md:shadow-none fixed left-0 top-10 w-full pb-3 md:pb-0 md:w-unset md:static bg-#ffffff dark:bg-#1d1c19 dark:md:bg-transparent md:bg-transparent md:flex flex-col md:flex-row items-center`))&&o(w,"class",we)},i(E){X||(S(b.$$.fragment,E),S(Z.$$.fragment,E),X=!0)},o(E){L(b.$$.fragment,E),L(Z.$$.fragment,E),X=!1},d(E){E&&h(e),K(b),K(Z),Ge=!1,Te(qe)}}}const qt=()=>!1,Ft=()=>!1;function Yt(r,e,s){let t,l,a;R(r,Ce,k=>s(0,t=k)),R(r,je,k=>s(2,l=k)),R(r,pt,k=>s(3,a=k));const{MIX_GIT_PATH:n,MIX_MENU_LINK_SVELTE:d,MIX_MENU_LINK_VUE:f,MIX_MENU_LINK_REACT:i}=G,u=k=>location.href=k+l.url.pathname.replace(d,""),c=k=>{if(!k)return;const Q=()=>{const W=document.body.clientHeight,ae=Math.max(0,Math.min(1,scrollY/(W-window.innerHeight)))*100;k.style.width=`${ae}%`};return window.addEventListener("scroll",Q),{destroy(){window.removeEventListener("scroll",Q)}}};let _=!1;const p=()=>s(1,_=!1),b=()=>u(f),U=()=>u(i),C=()=>s(1,_=!1),w=()=>s(1,_=!_);return r.$$.update=()=>{r.$$.dirty&1&&t&&s(1,_=!1)},[t,_,l,a,f,i,u,c,p,b,U,C,w]}class Zt extends j{constructor(e){super(),q(this,e,Yt,jt,F,{})}}function Jt(r){let e,s,t,l,a,n;const d=r[1].default,f=me(d,r,r[0],null);return{c(){e=g("div"),f&&f.c()},l(i){e=$(i,"DIV",{});var u=v(e);f&&f.l(u),u.forEach(h)},m(i,u){z(i,e,u),f&&f.m(e,null),l=!0,a||(n=[T(e,"introend",Dt),T(e,"outrostart",Ut)],a=!0)},p(i,[u]){r=i,f&&f.p&&(!l||u&1)&&he(f,d,r,r[0],l?pe(d,r[0],u,null):_e(r[0]),null)},i(i){l||(S(f,i),_t(()=>{t&&t.end(1),s=kt(e,rt,Vt),s.start()}),l=!0)},o(i){L(f,i),s&&s.invalidate(),t=Et(e,rt,{}),l=!1},d(i){i&&h(e),f&&f.d(i),i&&t&&t.end(),a=!1,Te(n)}}}function Qt(r,e,s){let{$$slots:t={},$$scope:l}=e;return r.$$set=a=>{"$$scope"in a&&s(0,l=a.$$scope)},[l,t]}let gt=class extends j{constructor(e){super(),q(this,e,Qt,Jt,F,{})}};function Wt(r){let e,s,t;e=new Zt({});const l=r[0].default,a=me(l,r,r[1],null);return{c(){H(e.$$.fragment),s=y(),a&&a.c()},l(n){J(e.$$.fragment,n),s=I(n),a&&a.l(n)},m(n,d){O(e,n,d),z(n,s,d),a&&a.m(n,d),t=!0},p(n,d){a&&a.p&&(!t||d&2)&&he(a,l,n,n[1],t?pe(l,n[1],d,null):_e(n[1]),null)},i(n){t||(S(e.$$.fragment,n),S(a,n),t=!0)},o(n){L(e.$$.fragment,n),L(a,n),t=!1},d(n){K(e,n),n&&h(s),a&&a.d(n)}}}function xt(r){let e,s;return e=new gt({props:{$$slots:{default:[Wt]},$$scope:{ctx:r}}}),{c(){H(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,l){O(e,t,l),s=!0},p(t,[l]){const a={};l&2&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){L(e.$$.fragment,t),s=!1},d(t){K(e,t)}}}function el(r,e,s){let{$$slots:t={},$$scope:l}=e;return r.$$set=a=>{"$$scope"in a&&s(1,l=a.$$scope)},[t,l]}class ct extends j{constructor(e){super(),q(this,e,el,xt,F,{})}}function tl(r){let e;const s=r[0].default,t=me(s,r,r[1],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&2)&&he(t,s,l,l[1],e?pe(s,l[1],a,null):_e(l[1]),null)},i(l){e||(S(t,l),e=!0)},o(l){L(t,l),e=!1},d(l){t&&t.d(l)}}}function ll(r){let e,s;return e=new gt({props:{$$slots:{default:[tl]},$$scope:{ctx:r}}}),{c(){H(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,l){O(e,t,l),s=!0},p(t,[l]){const a={};l&2&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){L(e.$$.fragment,t),s=!1},d(t){K(e,t)}}}function sl(r,e,s){let{$$slots:t={},$$scope:l}=e;return r.$$set=a=>{"$$scope"in a&&s(1,l=a.$$scope)},[t,l]}class ut extends j{constructor(e){super(),q(this,e,sl,ll,F,{})}}function rl(r){let e;const s=r[1].default,t=me(s,r,r[2],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&4)&&he(t,s,l,l[2],e?pe(s,l[2],a,null):_e(l[2]),null)},i(l){e||(S(t,l),e=!0)},o(l){L(t,l),e=!1},d(l){t&&t.d(l)}}}function al(r){let e,s,t;var l=r[0].data.layout===st.SINGLE?ut:ct;function a(n){return{props:{$$slots:{default:[rl]},$$scope:{ctx:n}}}}return l&&(e=tt(l,a(r))),{c(){e&&H(e.$$.fragment),s=lt()},l(n){e&&J(e.$$.fragment,n),s=lt()},m(n,d){e&&O(e,n,d),z(n,s,d),t=!0},p(n,[d]){const f={};if(d&4&&(f.$$scope={dirty:d,ctx:n}),l!==(l=n[0].data.layout===st.SINGLE?ut:ct)){if(e){ft();const i=e;L(i.$$.fragment,1,0,()=>{K(i,1)}),dt()}l?(e=tt(l,a(n)),H(e.$$.fragment),S(e.$$.fragment,1),O(e,s.parentNode,s)):e=null}else l&&e.$set(f)},i(n){t||(e&&S(e.$$.fragment,n),t=!0)},o(n){e&&L(e.$$.fragment,n),t=!1},d(n){n&&h(s),e&&K(e,n)}}}function nl(r,e,s){let t;R(r,je,n=>s(0,t=n));let{$$slots:l={},$$scope:a}=e;return r.$$set=n=>{"$$scope"in n&&s(2,a=n.$$scope)},[t,l,a]}class ol extends j{constructor(e){super(),q(this,e,nl,al,F,{})}}const{document:se}=Tt;function il(r){let e;const s=r[5].default,t=me(s,r,r[6],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&64)&&he(t,s,l,l[6],e?pe(s,l[6],a,null):_e(l[6]),null)},i(l){e||(S(t,l),e=!0)},o(l){L(t,l),e=!1},d(l){t&&t.d(l)}}}function cl(r){let e,s,t,l,a,n,d,f;se.title=t=r[2]("website.title").replace(/\{0}/,r[1]);const i=[r[0]];let u={$$slots:{default:[il]},$$scope:{ctx:r}};for(let c=0;c<i.length;c+=1)u=yt(u,i[c]);return d=new ol({props:u}),{c(){e=g("link"),s=g("link"),l=g("meta"),n=y(),H(d.$$.fragment),this.h()},l(c){const _=It("svelte-bfyt0q",se.head);e=$(_,"LINK",{rel:!0,type:!0,href:!0}),s=$(_,"LINK",{rel:!0,type:!0,href:!0}),l=$(_,"META",{name:!0,content:!0}),_.forEach(h),n=I(c),J(d.$$.fragment,c),this.h()},h(){o(e,"rel","icon"),o(e,"type","image/svg"),o(e,"href",`${G.MIX_ASSETS_URL}/icon/svelte.svg`),o(s,"rel","shortcut icon"),o(s,"type","image/x-icon"),o(s,"href",`${G.MIX_ASSETS_URL}/icon/svelte.ico`),o(l,"name","description"),o(l,"content",a=r[2]("website.description").replace(/\{0}/,r[1]))},m(c,_){m(se.head,e),m(se.head,s),m(se.head,l),z(c,n,_),O(d,c,_),f=!0},p(c,[_]){(!f||_&6)&&t!==(t=c[2]("website.title").replace(/\{0}/,c[1]))&&(se.title=t),(!f||_&6&&a!==(a=c[2]("website.description").replace(/\{0}/,c[1])))&&o(l,"content",a);const p=_&1?St(i,[Ct(c[0])]):{};_&64&&(p.$$scope={dirty:_,ctx:c}),d.$set(p)},i(c){f||(S(d.$$.fragment,c),f=!0)},o(c){L(d.$$.fragment,c),f=!1},d(c){h(e),h(s),h(l),c&&h(n),K(d,c)}}}function ul(r,e,s){let t,l,a;R(r,Ce,u=>s(3,t=u)),R(r,je,u=>s(4,l=u)),R(r,pt,u=>s(2,a=u));let{$$slots:n={},$$scope:d}=e,f="";Nt();let{data:i}=e;return r.$$set=u=>{"data"in u&&s(0,i=u.data),"$$scope"in u&&s(6,d=u.$$scope)},r.$$.update=()=>{var u;r.$$.dirty&16&&s(1,f=String(((u=l.route)==null?void 0:u.id)||"").replace(/\/\[locale]\//,"").toUpperCase()),r.$$.dirty&8&&(document.documentElement.lang=String(t||G.MIX_DEFAULT_LOCALE))},[i,f,a,t,l,n,d]}class wl extends j{constructor(e){super(),q(this,e,ul,cl,F,{data:0})}}export{wl as default};