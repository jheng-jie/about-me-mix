import{C as Ae,S as z,i as H,s as O,k as g,a as y,l as $,m as v,c as T,h as p,D as R,n as _,b as S,E as h,F as N,g as w,v as he,d as k,f as me,G as Ne,H as M,I as Se,J as Le,K as Me,L as be,M as Ve,q as Q,y as q,r as W,z as ee,A as F,N as De,u as ze,B as Y,O as te,P as le,Q as se,R as ne,e as Z,x as ve,T as He,U as Oe}from"../chunks/index.bef1c4a7.js";import{l as x,a as Ce,c as K,t as Ie}from"../chunks/index.ad3963a8.js";import{L as Pe}from"../chunks/constant.eeeb2bc7.js";import{p as Ue}from"../chunks/stores.dc52d4d4.js";import{h as V}from"../chunks/singletons.ebdedb6b.js";import{i as Be}from"../chunks/index.3dfa8a75.js";function we(r,{delay:e=0,duration:n=400,easing:t=Ae}={}){const l=+getComputedStyle(r).opacity;return{delay:e,duration:n,easing:t,css:s=>`opacity: ${s*l}`}}V.disable_scroll_handling;const Ge=V.goto;V.invalidate;V.invalidateAll;V.preload_data;V.preload_code;V.before_navigate;V.after_navigate;function ke(r,e,n){const t=r.slice();return t[10]=e[n],t[12]=n,t}function Ee(r){let e,n,t,l,s,a,i,o,c=r[2],d=[];for(let u=0;u<c.length;u+=1)d[u]=ye(ke(r,c,u));return{c(){e=g("button"),n=y(),t=g("div"),l=g("div");for(let u=0;u<d.length;u+=1)d[u].c();this.h()},l(u){e=$(u,"BUTTON",{"v-if":!0,class:!0}),v(e).forEach(p),n=T(u),t=$(u,"DIV",{class:!0});var b=v(t);l=$(b,"DIV",{class:!0});var f=v(l);for(let m=0;m<d.length;m+=1)d[m].l(f);f.forEach(p),b.forEach(p),this.h()},h(){_(e,"v-if","show"),_(e,"class","fixed left-0 top-0 w-full h-full z-0"),_(l,"class","bg-white rounded-1.5 py-1 shadow-md"),_(t,"class","absolute top-0 right-0 pt-13 z-10 w-12")},m(u,b){S(u,e,b),S(u,n,b),S(u,t,b),h(t,l);for(let f=0;f<d.length;f+=1)d[f].m(l,null);a=!0,i||(o=N(e,"click",Se(Le(r[7]))),i=!0)},p(u,b){if(r=u,b&28){c=r[2];let f;for(f=0;f<c.length;f+=1){const m=ke(r,c,f);d[f]?d[f].p(m,b):(d[f]=ye(m),d[f].c(),d[f].m(l,null))}for(;f<d.length;f+=1)d[f].d(1);d.length=c.length}},i(u){a||(Me(()=>{s||(s=be(t,we,r[5],!0)),s.run(1)}),a=!0)},o(u){s||(s=be(t,we,r[5],!1)),s.run(0),a=!1},d(u){u&&p(e),u&&p(n),u&&p(t),Ve(d,u),u&&s&&s.end(),i=!1,o()}}}function ye(r){let e,n,t,l,s,a;function i(){return r[8](r[10])}return{c(){e=g("button"),n=g("img"),l=y(),this.h()},l(o){e=$(o,"BUTTON",{":key":!0,class:!0});var c=v(e);n=$(c,"IMG",{src:!0,alt:!0,class:!0}),l=T(c),c.forEach(p),this.h()},h(){R(n.src,t=r[3].get(r[10])||"")||_(n,"src",t),_(n,"alt",""),_(n,"class","w-9 h-9"),_(e,":key","item"),_(e,"class","over:bg-gray-200 transition-colors p-1.5")},m(o,c){S(o,e,c),h(e,n),h(e,l),s||(a=N(e,"click",Se(Le(i))),s=!0)},p(o,c){r=o,c&4&&!R(n.src,t=r[3].get(r[10])||"")&&_(n,"src",t)},d(o){o&&p(e),s=!1,a()}}}function Ke(r){let e,n,t,l,s,a,i,o=r[1]&&Ee(r);return{c(){e=g("div"),n=g("img"),l=y(),o&&o.c(),this.h()},l(c){e=$(c,"DIV",{class:!0,tabindex:!0,role:!0});var d=v(e);n=$(d,"IMG",{src:!0,alt:!0,class:!0}),l=T(d),o&&o.l(d),d.forEach(p),this.h()},h(){R(n.src,t=r[0])||_(n,"src",t),_(n,"alt",""),_(n,"class","w-8 lg:w-9 h-8 lg:h-9 lg:mx-1.5"),_(e,"class","h-full flex items-center cursor-pointer relative select-none"),_(e,"tabindex","0"),_(e,"role","button")},m(c,d){S(c,e,d),h(e,n),h(e,l),o&&o.m(e,null),s=!0,a||(i=[N(e,"click",r[9]),N(e,"keyup",Re)],a=!0)},p(c,[d]){(!s||d&1&&!R(n.src,t=c[0]))&&_(n,"src",t),c[1]?o?(o.p(c,d),d&2&&w(o,1)):(o=Ee(c),o.c(),w(o,1),o.m(e,null)):o&&(he(),k(o,1,1,()=>{o=null}),me())},i(c){s||(w(o),s=!0)},o(c){k(o),s=!1},d(c){c&&p(e),o&&o.d(),a=!1,Ne(i)}}}const Re=()=>!1;function qe(r,e,n){let t,l;M(r,x,f=>n(6,t=f)),M(r,Ce,f=>n(2,l=f));const s=new Map([["en","/assets/lang/en-US.png"],["zh","/assets/lang/zh-CHT.png"]]);let a;const i=f=>{var m;Ge((m=location==null?void 0:location.pathname)==null?void 0:m.replace(`/${x.get()}/`,`/${String(f)}/`)),n(1,o=!1)};let o=!1;const c={duration:300},d=()=>n(1,o=!1),u=f=>i(f),b=()=>n(1,o=!o);return r.$$.update=()=>{r.$$.dirty&64&&n(0,a=s.get(t))},[a,o,l,s,i,c,t,d,u,b]}class Fe extends z{constructor(e){super(),H(this,e,qe,Ke,O,{})}}function Ye(r){let e,n,t,l,s,a,i,o,c,d=r[1]("header.title")+"",u,b,f,m,re,C,ae,L,oe,P,ie,I,ce,B,ue,D,G,fe,ge;return D=new Fe({}),{c(){e=g("div"),n=g("div"),t=y(),l=g("div"),s=g("a"),a=g("img"),o=y(),c=g("span"),u=Q(d),b=y(),f=g("div"),m=g("button"),re=Q(`Vue
        `),C=g("span"),ae=y(),L=g("button"),oe=Q(`React
        `),P=g("span"),ie=y(),I=g("button"),ce=Q(`Svelte
        `),B=g("span"),ue=y(),q(D.$$.fragment),this.h()},l(E){e=$(E,"DIV",{class:!0});var U=v(e);n=$(U,"DIV",{class:!0}),v(n).forEach(p),t=T(U),l=$(U,"DIV",{class:!0});var j=v(l);s=$(j,"A",{href:!0,target:!0,class:!0});var J=v(s);a=$(J,"IMG",{src:!0,alt:!0,class:!0}),o=T(J),c=$(J,"SPAN",{class:!0});var $e=v(c);u=W($e,d),$e.forEach(p),J.forEach(p),b=T(j),f=$(j,"DIV",{class:!0});var A=v(f);m=$(A,"BUTTON",{class:!0});var de=v(m);re=W(de,`Vue
        `),C=$(de,"SPAN",{class:!0}),v(C).forEach(p),de.forEach(p),ae=T(A),L=$(A,"BUTTON",{class:!0});var _e=v(L);oe=W(_e,`React
        `),P=$(_e,"SPAN",{class:!0}),v(P).forEach(p),_e.forEach(p),ie=T(A),I=$(A,"BUTTON",{class:!0});var pe=v(I);ce=W(pe,`Svelte
        `),B=$(pe,"SPAN",{class:!0}),v(B).forEach(p),pe.forEach(p),ue=T(A),ee(D.$$.fragment,A),A.forEach(p),j.forEach(p),U.forEach(p),this.h()},h(){_(n,"class","top-0 absolute h-0.75 rounded-r w-0 bg-rose-600"),R(a.src,i="/assets/icon/github.png")||_(a,"src",i),_(a,"alt",""),_(a,"class","w-9 h-9 mr-2"),_(c,"class","hidden sm:inline-block"),_(s,"href",K.GIT_PATH),_(s,"target","_black"),_(s,"class","font-medium text-4 leading-10 lg:leading-12 flex items-center"),_(C,"class","bg-emerald-500 inline-block h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"),_(m,"class","cursor-pointer h-10 lg:h-12 mx-3 relative group"),_(P,"class","bg-sky-500 inline-block h-0 group-hover:h-1 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"),_(L,"class","cursor-pointer h-10 lg:h-12 mx-3 relative group"),_(B,"class","bg-rose-600 inline-block h-1 group-hover:h-2 w-7 transition-height rounded-t-2 absolute bottom-0 left-1/2 -translate-x-1/2"),_(I,"class","cursor-pointer h-10 lg:h-12 ml-3 mr-5 relative group color-rose-600"),_(f,"class","flex items-center font-medium select-none"),_(l,"class","max-w-256 w-full h-full flex justify-between mx-auto relative z-10 px-3"),_(e,"class","fixed w-full top-0 z-50 h-10 lg:h-12 shadow-lg bg-white")},m(E,U){S(E,e,U),h(e,n),h(e,t),h(e,l),h(l,s),h(s,a),h(s,o),h(s,c),h(c,u),h(l,b),h(l,f),h(f,m),h(m,re),h(m,C),h(f,ae),h(f,L),h(L,oe),h(L,P),h(f,ie),h(f,I),h(I,ce),h(I,B),h(f,ue),F(D,f,null),G=!0,fe||(ge=[De(r[3].call(null,n)),N(m,"keyup",je),N(m,"click",r[5]),N(L,"keyup",Je),N(L,"click",r[6]),N(I,"keyup",Qe),N(I,"click",r[7])],fe=!0)},p(E,[U]){(!G||U&2)&&d!==(d=E[1]("header.title")+"")&&ze(u,d)},i(E){G||(w(D.$$.fragment,E),G=!0)},o(E){k(D.$$.fragment,E),G=!1},d(E){E&&p(e),Y(D),fe=!1,Ne(ge)}}}const je=()=>!1,Je=()=>!1,Qe=()=>!1;function We(r,e,n){let t,l;M(r,x,u=>n(4,t=u)),M(r,Ie,u=>n(1,l=u));let s;const a=u=>{location.href=u},i=u=>{if(!u)return;const b=()=>{const f=document.body.clientHeight,m=Math.max(0,Math.min(1,scrollY/(f-window.innerHeight)))*100;u.style.width=`${m}%`};return window.addEventListener("scroll",b),{destroy(){window.removeEventListener("scroll",b)}}},o=()=>a(s.vue),c=()=>a(s.react),d=()=>a(s.svelte);return r.$$.update=()=>{r.$$.dirty&16&&n(0,s={vue:K.MENU_LINK_VUE.replace(/\{0}/,t),react:K.MENU_LINK_REACT.replace(/\{0}/,t),svelte:K.MENU_LINK_SVELTE.replace(/\{0}/,t)})},[s,l,a,i,t,o,c,d]}class Xe extends z{constructor(e){super(),H(this,e,We,Ye,O,{})}}function Ze(r){let e,n,t;e=new Xe({});const l=r[1].default,s=te(l,r,r[0],null);return{c(){q(e.$$.fragment),n=y(),s&&s.c()},l(a){ee(e.$$.fragment,a),n=T(a),s&&s.l(a)},m(a,i){F(e,a,i),S(a,n,i),s&&s.m(a,i),t=!0},p(a,[i]){s&&s.p&&(!t||i&1)&&le(s,l,a,a[0],t?ne(l,a[0],i,null):se(a[0]),null)},i(a){t||(w(e.$$.fragment,a),w(s,a),t=!0)},o(a){k(e.$$.fragment,a),k(s,a),t=!1},d(a){Y(e,a),a&&p(n),s&&s.d(a)}}}function xe(r,e,n){let{$$slots:t={},$$scope:l}=e;return r.$$set=s=>{"$$scope"in s&&n(0,l=s.$$scope)},[l,t]}class et extends z{constructor(e){super(),H(this,e,xe,Ze,O,{})}}function tt(r){let e;const n=r[1].default,t=te(n,r,r[0],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,s){t&&t.m(l,s),e=!0},p(l,[s]){t&&t.p&&(!e||s&1)&&le(t,n,l,l[0],e?ne(n,l[0],s,null):se(l[0]),null)},i(l){e||(w(t,l),e=!0)},o(l){k(t,l),e=!1},d(l){t&&t.d(l)}}}function lt(r,e,n){let{$$slots:t={},$$scope:l}=e;return r.$$set=s=>{"$$scope"in s&&n(0,l=s.$$scope)},[l,t]}class st extends z{constructor(e){super(),H(this,e,lt,tt,O,{})}}function Te(r){let e,n,t;var l=r[0];function s(a){return{props:{$$slots:{default:[nt]},$$scope:{ctx:a}}}}return l&&(e=ve(l,s(r))),{c(){e&&q(e.$$.fragment),n=Z()},l(a){e&&ee(e.$$.fragment,a),n=Z()},m(a,i){e&&F(e,a,i),S(a,n,i),t=!0},p(a,i){const o={};if(i&8&&(o.$$scope={dirty:i,ctx:a}),l!==(l=a[0])){if(e){he();const c=e;k(c.$$.fragment,1,0,()=>{Y(c,1)}),me()}l?(e=ve(l,s(a)),q(e.$$.fragment),w(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else l&&e.$set(o)},i(a){t||(e&&w(e.$$.fragment,a),t=!0)},o(a){e&&k(e.$$.fragment,a),t=!1},d(a){a&&p(n),e&&Y(e,a)}}}function nt(r){let e;const n=r[2].default,t=te(n,r,r[3],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,s){t&&t.m(l,s),e=!0},p(l,s){t&&t.p&&(!e||s&8)&&le(t,n,l,l[3],e?ne(n,l[3],s,null):se(l[3]),null)},i(l){e||(w(t,l),e=!0)},o(l){k(t,l),e=!1},d(l){t&&t.d(l)}}}function rt(r){let e,n,t=r[0]&&Te(r);return{c(){t&&t.c(),e=Z()},l(l){t&&t.l(l),e=Z()},m(l,s){t&&t.m(l,s),S(l,e,s),n=!0},p(l,[s]){l[0]?t?(t.p(l,s),s&1&&w(t,1)):(t=Te(l),t.c(),w(t,1),t.m(e.parentNode,e)):t&&(he(),k(t,1,1,()=>{t=null}),me())},i(l){n||(w(t),n=!0)},o(l){k(t),n=!1},d(l){t&&t.d(l),l&&p(e)}}}function at(r,e,n){let t;M(r,Ue,i=>n(1,t=i));let{$$slots:l={},$$scope:s}=e,a;return r.$$set=i=>{"$$scope"in i&&n(3,s=i.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&n(0,a=t.data.layout===Pe.SINGLE?st:et)},[a,t,l,s]}let ot=class extends z{constructor(e){super(),H(this,e,at,rt,O,{})}};const{document:X}=Oe;function it(r){let e;const n=r[4].default,t=te(n,r,r[5],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,s){t&&t.m(l,s),e=!0},p(l,s){t&&t.p&&(!e||s&32)&&le(t,n,l,l[5],e?ne(n,l[5],s,null):se(l[5]),null)},i(l){e||(w(t,l),e=!0)},o(l){k(t,l),e=!1},d(l){t&&t.d(l)}}}function ct(r){let e,n,t,l,s,a;return X.title=e=r[1]("website.title").replace(/\{0}/,r[0]),s=new ot({props:{$$slots:{default:[it]},$$scope:{ctx:r}}}),{c(){n=g("meta"),l=y(),q(s.$$.fragment),this.h()},l(i){const o=He("svelte-c7sybn",X.head);n=$(o,"META",{name:!0,content:!0}),o.forEach(p),l=T(i),ee(s.$$.fragment,i),this.h()},h(){_(n,"name","description"),_(n,"content",t=r[1]("website.description").replace(/\{0}/,r[0]))},m(i,o){h(X.head,n),S(i,l,o),F(s,i,o),a=!0},p(i,[o]){(!a||o&3)&&e!==(e=i[1]("website.title").replace(/\{0}/,i[0]))&&(X.title=e),(!a||o&3&&t!==(t=i[1]("website.description").replace(/\{0}/,i[0])))&&_(n,"content",t);const c={};o&32&&(c.$$scope={dirty:o,ctx:i}),s.$set(c)},i(i){a||(w(s.$$.fragment,i),a=!0)},o(i){k(s.$$.fragment,i),a=!1},d(i){p(n),i&&p(l),Y(s,i)}}}function ut(r,e,n){let t,l,s;M(r,x,c=>n(2,t=c)),M(r,Ue,c=>n(3,l=c)),M(r,Ie,c=>n(1,s=c));let{$$slots:a={},$$scope:i}=e,o="";return Be(),r.$$set=c=>{"$$scope"in c&&n(5,i=c.$$scope)},r.$$.update=()=>{var c;r.$$.dirty&8&&n(0,o=String(((c=l.route)==null?void 0:c.id)||"").replace(/\/\[locale]\//,"").toUpperCase()),r.$$.dirty&4&&(document.documentElement.lang=String(t||K.DEFAULT_LOCALE))},[o,s,t,l,a,i]}class $t extends z{constructor(e){super(),H(this,e,ut,ct,O,{})}}export{$t as default};
