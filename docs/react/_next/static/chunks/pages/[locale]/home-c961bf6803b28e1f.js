(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[803],{2823:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/home",function(){return a(9715)}])},9715:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return $},default:function(){return W}});var n=a(2322),i=a(2784);let l=(0,a(4529).Ue)(e=>({progress:[],updateProgress:t=>e({progress:t})})),s=e=>l.getState().updateProgress(e),r={top:0,height:0,overlappingEnter:0,overlappingLeave:0,progress:0,hidden:!1},d=e=>{let t=[];for(let a=0;a<e.children.length;++a){let{offsetTop:n,offsetHeight:i}=e.children[a];t.push(Object.assign({...r},{top:n,height:i}))}return o(t)},o=e=>{let{max:t,min:a}=Math,n=window.scrollY,i=window.innerHeight,[l,s]=[n,n+i];for(let r in e){let d=e[r],{top:o,height:c}=d,[h,x]=[o,o+c],u=(s-h)/i,g=(x-l)/i,p=t(0,a(1,u)),m=t(0,a(1,g)),j=u<-.5||g<-.5,f=t(0,a(1,(n-o)/(c-i))),{progress:b,hidden:v,overlappingEnter:w,overlappingLeave:y}=d;(f!==b||j!==v||w!==p||y!==m)&&(e[r]={...d,progress:f,hidden:j,overlappingEnter:p,overlappingLeave:m})}return[...e]};var c=e=>{let{count:t=1,children:a}=e;return(0,n.jsx)(n.Fragment,{children:Array.from({length:t}).map((e,t)=>a({index:t}))})},h=a(34),x=e=>{let{index:t}=e,{t:a}=(0,h.$G)(["common"]);return(0,n.jsx)("div",{className:"absolute top-0 left-0 w-full h-full overflow-hidden",children:(0,n.jsxs)("div",{style:1===t?{backgroundImage:"url(".concat("/about-me-mix/assets","/polygon-white.jpg)")}:{},className:"".concat(t?"dark:brightness-75 transition-all":""," h-100vh w-full flex flex-col items-center justify-center font-medium text-4 lg:text-5 bg-center bg-cover"),children:[(0,n.jsxs)("svg",{className:"w-auto h-28 lg:h-40 mb-4 lg:mb-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"-11.5 -10.23174 23 20.46348",children:[(0,n.jsx)("title",{children:"React Logo"}),(0,n.jsx)("circle",{cx:"0",cy:"0",r:"2.05",className:"".concat(t?"fill-#61dafb":"fill-white dark:fill-#fefddd")}),(0,n.jsxs)("g",{className:"".concat(t?"stroke-#61dafb":"stroke-white dark:stroke-#fefddd"),strokeWidth:"1",fill:"none",children:[(0,n.jsx)("ellipse",{rx:"11",ry:"4.2"}),(0,n.jsx)("ellipse",{rx:"11",ry:"4.2",transform:"rotate(60)"}),(0,n.jsx)("ellipse",{rx:"11",ry:"4.2",transform:"rotate(120)"})]})]}),(0,n.jsxs)("div",{className:"h-36 text-center",children:[(0,n.jsx)("h1",{className:"text-5 lg:text-7 font-black mb-2 lg:mb-4 ".concat(t?"text-black":"text-white"),children:a("section.opening.title")}),(0,n.jsx)("p",{className:"mb-2 lg:mb-4 ".concat(t?"text-gray-700":"text-white"),children:a("section.opening.desc")}),(0,n.jsx)("p",{className:"mb-2 lg:mb-4 ".concat(t?"text-gray-700":"text-white"),children:a("section.opening.desc2")}),(0,n.jsx)("p",{className:t?"text-gray-700":"text-white",children:a("section.opening.target",["Next 14"])})]})]})},t)};function u(e,t){let a=l(t=>{var a;return null===(a=t.progress)||void 0===a?void 0:a[e]});return a&&(null==t||t(a)),{position:a}}function g(){let{index:e=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{t}=(0,h.$G)(["common"]),a=(0,i.useRef)(null);return u(e,e=>{var t,n;let{progress:i,hidden:l}=e;if(!a.current)return;a.current.style.display=l?"none":"";let s=null===(n=a.current)||void 0===n?void 0:null===(t=n.children)||void 0===t?void 0:t[1];!l&&s&&(s.style.height="".concat((1-i)*100,"%"))}),(0,i.useMemo)(()=>(0,n.jsx)("section",{className:"h-200vh w-full relative",children:(0,n.jsx)("div",{ref:a,className:"sticky top-0 left-0 h-100vh w-full",children:(0,n.jsx)(c,{count:2,children:x})})}),[t])}var p=a(8358),m=a(2484);let j=e=>{let t=p.ZP.timeline({paused:!0}),[a,n,i,l]=[e.querySelectorAll(".dialogue__bg"),e.querySelector(".dialogue__avatar"),e.querySelectorAll(".dialogue__char"),e.querySelector(".dialogue__popup")];return t.to(a,{width:"100%",stagger:.5,duration:10,borderRadius:0,ease:m.EA.easeInOut},0),t.to(n,{scale:1,display:"block",opacity:1,duration:10,ease:m.eJ.easeOut.config(2)},5),t.to(l,{display:"block"},10),t.to(i,{opacity:1,scale:1,stagger:.25,duration:2},11),t.to(i,{y:-10,stagger:.25,duration:1},11),t.to(i,{y:0,stagger:.25,duration:1},12),t.to(n,{opacity:0,y:-200,duration:8,display:"none",ease:m.eJ.easeIn.config(2)},24),t.to(l,{opacity:0,y:50,duration:8,display:"none"},24),t};function f(){let{index:e=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{t}=(0,h.$G)(["common"]),[a,l]=(0,i.useState)();(0,i.useEffect)(()=>()=>{null==a||a.kill()},[a]);let s=(0,i.useRef)(null);(0,i.useEffect)(()=>{s.current&&l(j(s.current))},[]),u(e,e=>{let{hidden:t,progress:n,overlappingEnter:i}=e;s.current&&(s.current.style.display=t?"none":""),t||null==a||a.progress(.8*n+.2*i)});let r=(0,i.useMemo)(()=>Array.from({length:5}).map((e,t)=>(0,n.jsx)("div",{className:"dialogue__bg w-0 h-21vh -mb-1 bg-zinc-700 rounded-br-50px first:rounded-tr-50px"},t)),[]);return(0,i.useMemo)(()=>{let e=t("section.dialogue",{returnObjects:!0}).map((e,t)=>(0,n.jsx)("p",{style:{paddingLeft:"".concat(t,"rem")},className:"mb-2",children:Array.from(e).map((e,a)=>(0,n.jsx)("span",{className:"dialogue__char whitespace-pre inline-block opacity-0 scale-50",children:e},"".concat(t,"_").concat(a)))},t));return(0,n.jsx)("section",{className:"min-h-400vh relative",children:(0,n.jsxs)("div",{ref:s,className:"dialogue w-full h-100vh sticky top-0 text-4 lg:text-6 overflow-hidden",children:[r,(0,n.jsx)("div",{className:"absolute w-40 h-40 lg:w-65 lg:h-65 left-1/2 top-3.5/10 -translate-x-1/2 -translate-y-1/2",children:(0,n.jsxs)("div",{className:"dialogue__avatar hidden opacity-0 scale-50 w-full h-full",children:[(0,n.jsx)("div",{className:"absolute animate-ping rounded-full w-full h-full bg-zinc-700 animate-delay-0.1s animate-duration-3s"}),(0,n.jsx)("div",{className:"absolute animate-ping rounded-full w-full h-full bg-zinc-600 animate-delay-0.3s animate-duration-3s"}),(0,n.jsx)("div",{className:"absolute animate-ping rounded-full w-full h-full bg-zinc-500 animate-delay-0.5s animate-duration-3s"}),(0,n.jsx)("img",{src:"".concat("/about-me-mix/assets","/avatar.png"),alt:"",className:"w-full h-full relative z-10"})]})}),(0,n.jsx)("div",{className:"w-full absolute top-6.5/10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center",children:(0,n.jsx)("div",{className:"dialogue__popup hidden",children:e})})]})})},[t])}let b=e=>{let t=p.ZP.timeline({paused:!0}),a=e.querySelector(".experience__title");t.to(a,{display:"block",opacity:1,duration:16,scale:1,ease:m.eJ.easeInOut.config(5)},0);let n={value:0};t.to(n,{value:1,onUpdate:()=>{e.scrollLeft=(e.scrollWidth-window.innerWidth)*n.value},duration:70,ease:m.qD.easeNone},16);let i=e.querySelector(".experience__title-coding");return t.to(i,{display:"none",opacity:0,duration:16,scale:.5,ease:m.eJ.easeInOut.config(5)},t.totalDuration()),t};var v=e=>{var t;let{details:a}=e,{t:i}=(0,h.$G)();return(0,n.jsxs)("div",{"data-group":a.group,className:"experience__work flex items-start text-white relative ".concat(a.category?"ml-24 -mt-20 text-5 lg:text-6 pr-1 lg:pr-3":"text-4 lg:text-5"),children:[!a.category&&(0,n.jsx)("div",{className:"work__line relative w-3 lg:w-6 h-0 border-t-4 mt-4 lg:mt-5"}),(0,n.jsxs)("div",{className:"flex-1",children:[(0,n.jsxs)("div",{className:"work__head mb-3 flex items-center rounded-1.5",children:[a.date&&(0,n.jsx)("div",{className:"work__head-date inline-block bg-white px-3 py-1.5 rounded-l-1.5 font-bold",children:a.date}),(0,n.jsx)("h1",{className:"inline-block text-white px-3 py-1.5",children:i(a.label)})]}),("end"in a||"team"in a)&&(0,n.jsxs)("div",{className:"pl-4 leading-0 whitespace-nowrap mb-3",children:[(0,n.jsx)("span",{className:"work__end leading-4 inline-block text-4 m-0 px-2 py-1.5 rounded-l","data-color":a.end,children:i("end.".concat(a.end))}),(0,n.jsx)("span",{className:"work__team leading-4 inline-block text-4 m-0 px-2 py-1.5 bg-white rounded-r","data-color":a.team,children:i("team.".concat(a.team))})]}),(null===(t=a.technology)||void 0===t?void 0:t.length)&&(0,n.jsx)("div",{className:"pl-8 max-w-70 flex flex-wrap",children:a.technology.map(e=>(0,n.jsx)("span",{className:"work__tag lg:text-3.5 text-bold px-2 py-0.5 rounded mr-2 mb-2",children:e},e))})]}),!!a.count&&(0,n.jsx)("div",{className:"work__line relative w-4 lg:w-6 h-16.5 rounded-rt-2 border-t-4 border-r-4 mt-4.5 lg:mt-5.5",children:(0,n.jsx)("span",{className:"work__line-end w-4 h-4 border-l-4 border-b-4 inline-block absolute -right-4 -bottom-4 rounded-lb-2"})})]})};a(2613);let w=[{date:"2015",label:"experience.department.title",works:[{label:"experience.department.topic",end:0,team:0,technology:["Java Servlet","Java Android","JSP + HTML4 + CSS"]}]},{date:"2015/09",label:"experience.2015.company",works:[{label:"experience.2015.maintain",end:0,team:0,technology:["PHP Codeigniter","MySql","Apache"]},{label:"experience.2015.cart",end:0,team:1,technology:["PHP Opencart"]},{label:"experience.2015.soap",end:1,team:1,technology:["SOAP","Postman"]}]},{date:"2016/12",label:"experience.2016.company",works:[{label:"experience.2016.flash",end:2,team:1,technology:["HTML5 + CSS3","FabricJS"]},{label:"experience.2016.app",technology:["CoronaSDK","Lua"],end:1,team:1},{label:"experience.2016.dm",end:1,team:1,technology:["HTML5 + CSS3"]},{label:"experience.2016.test",end:0,team:1,technology:["HTML5 + CSS3","ECharts"]},{label:"experience.2016.textbook",end:0,team:1,technology:["PHP Codeigniter","MySql","HTML5 + CSS3"]}]},{date:"2019/01",label:"experience.2019.company",works:[{label:"experience.2019.pay",technology:["Gitlab","SourceTree","Nginx","Ngrok"],end:1,team:1},{label:"experience.2019.source",technology:["Vue2","Vuex","Vue-Router","less"],end:0,team:1},{label:"experience.2019.forum",end:2,team:0,technology:["Webpack4","Vue-Cli"]},{label:"experience.2019.react_h5",end:2,team:0,technology:["React","Hooks","Thunk","SAGA","Ant Design","Sass"]},{label:"experience.2019.website",end:2,team:1,technology:["React"]},{label:"experience.2019.chat",end:1,team:1,technology:["PM2","Node","Socket.IO","Redis"]},{label:"experience.2019.vue_h5",end:2,team:1,technology:["Vue3","Typescript","Pinia","TailwindCSS","Jest"]},{label:"experience.2019.ci",end:0,team:1,technology:["Vite","MongoDB","Jenkins","Telegram Bot","Gradle","Xcode"]}]},{date:"2022/06",label:"experience.2022.company",works:[{label:"experience.2022.sport",end:2,team:0,technology:["Vue 2.7","Puppeteer"]},{label:"experience.2022.chat",end:2,team:1,technology:["Vue 3","Stomp"]}]},{date:"2023/04",label:"experience.2023.company",works:[{label:"experience.2023.vn_pc",end:2,team:0,technology:["Next 10"]},{label:"experience.2023.vn_app_web",end:2,team:0,technology:["Next 13 Pages"]},{label:"experience.2023.vn_app",end:2,team:0,technology:["React Native"]},{label:"experience.2023.vn_live",end:2,team:0,technology:["Next 13 Pages"]},{label:"experience.2023.vn_live2",end:2,team:0,technology:["Next 14 App Directory"]}]},{date:"Now",label:"experience.job"}].map((e,t)=>{let{date:a,label:n,works:i=[]}=e;return[{date:a,label:n,group:t,category:!0,count:i.length},...i.map(e=>({...e,group:t}))]}).flat();function y(){let{index:e=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{max:t,min:a}=Math,{t:l}=(0,h.$G)(),[s,r]=(0,i.useState)();(0,i.useEffect)(()=>()=>{null==s||s.kill()},[s]);let d=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!d.current)return;r(b(d.current));let[e,n,i]=[!1,0,0],l=()=>{if(!d.current||.01>Math.abs(n))return e=!1;e=!0,d.current.style.transform="rotate(".concat((n*=.75).toFixed(2),"deg)"),requestAnimationFrame(l)},s=()=>{var s,r;if((null===(r=d.current)||void 0===r?void 0:null===(s=r.style)||void 0===s?void 0:s.display)==="none")return;let o=window.scrollY-i;n=t(-5,a(5,n-t(-.5,a(.5,.01*o)))),e||l(),i=window.scrollY};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),u(e,e=>{let{progress:n,overlappingEnter:i,overlappingLeave:l,hidden:r}=e;d.current&&(d.current.style.display=r?"none":""),r||null==s||s.progress(.7*n+.15*t(0,i/.8)+.15*a(1,1-l))}),(0,i.useMemo)(()=>(0,n.jsx)("section",{className:"experience w-full h-600vh bg-gradient-to-b from-zinc-700 to-zinc-950",children:(0,n.jsxs)("div",{ref:d,className:"fixed left-0 top-0 w-full h-100vh flex flex-nowrap overflow-hidden whitespace-nowrap",children:[(0,n.jsx)("div",{className:"w-full h-100vh flex items-center justify-center flex-shrink-0 font-bold text-white text-10 lg:text-16",children:(0,n.jsx)("h1",{className:"experience__title hidden opacity-0 scale-50",children:l("section.experience.title")})}),w.map((e,t)=>(0,n.jsx)("div",{className:"flex-shrink-0 inline-block pt-40vh",children:(0,n.jsx)(v,{details:e})},t)),(0,n.jsx)("div",{className:"w-full h-100vh flex items-center justify-center flex-shrink-0 font-bold text-white text-10 lg:text-16",children:(0,n.jsx)("h1",{className:"experience__title-coding",children:l("section.coding.title")})})]})}),[l])}var N=()=>{let{t:e}=(0,h.$G)();return(0,n.jsxs)("div",{className:"coding__code-box flex-1 overflow-x-auto overflow-y-hidden overflow-x-auto overflow-y-hidden",children:[(0,n.jsx)("p",{"data-show":"3","data-g":!0,children:"/**"}),(0,n.jsxs)("p",{"data-show":"3","data-g":!0,children:[(0,n.jsx)("i",{children:"* @desc"}),(0,n.jsx)("i",{"data-l":!0,children:e("section.coding.desc")})]}),(0,n.jsxs)("p",{"data-show":"3","data-g":!0,children:[(0,n.jsxs)("i",{children:["* @param ","{string}"," password"]}),(0,n.jsx)("i",{"data-l":!0,children:e("section.coding.param")})]}),(0,n.jsxs)("p",{"data-show":"3","data-g":!0,children:[(0,n.jsxs)("i",{children:["* @return ","{number}"]}),(0,n.jsx)("i",{"data-l":!0,children:e("section.coding.return")})]}),(0,n.jsx)("p",{"data-show":"3","data-g":!0,children:"*/"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("i",{"data-export":!0,"data-r":!0}),(0,n.jsx)("i",{"data-function":!0,"data-r":!0}),(0,n.jsx)("i",{"data-y":!0,children:"getPasswordStrength"}),(0,n.jsx)("i",{"data-r":!0,children:"(password:"}),(0,n.jsx)("i",{"data-string":!0}),(0,n.jsx)("i",{"data-r":!0,children:"):"}),(0,n.jsx)("i",{"data-number":!0,"data-r":!0}),(0,n.jsx)("i",{children:"{"})]}),(0,n.jsxs)("p",{"data-show":"3",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-mark":!0,children:e("section.coding.comment.0")})]}),(0,n.jsxs)("p",{"data-hide":"4",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-let":!0,"data-r":!0}),(0,n.jsx)("i",{children:"strength"}),(0,n.jsx)("i",{"data-eq":!0,"data-b":!0,children:"0"})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-if":!0,"data-r":!0}),(0,n.jsx)("i",{children:"(!password || password"}),(0,n.jsx)("i",{"data-length":!0,children:"."}),(0,n.jsx)("i",{"data-lt":!0,"data-b":!0,children:"8"}),(0,n.jsx)("i",{"data-r":!0,children:")"}),(0,n.jsx)("i",{"data-hide":"2",children:"{"}),(0,n.jsx)("i",{"data-show":"2","data-return":!0,"data-r":!0}),(0,n.jsx)("i",{"data-hide":"4","data-show":"2",children:"strength"}),(0,n.jsx)("i",{"data-show":"4","data-b":!0,children:"0"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"2"}),(0,n.jsx)("i",{"data-return":!0,"data-r":!0}),(0,n.jsx)("i",{children:"strength"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{children:"}"})]}),(0,n.jsxs)("p",{"data-hide":"4","data-show":"3",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-mark":!0,children:e("section.coding.comment.1")})]}),(0,n.jsxs)("p",{"data-hide":"4",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-if":!0,"data-r":!0}),(0,n.jsx)("i",{children:"("}),(0,n.jsx)("i",{"data-g":!0,children:"/[0-9]/"}),(0,n.jsx)("i",{"data-test":!0,children:"."}),(0,n.jsx)("i",{"data-r":!0,children:"(password))"}),(0,n.jsx)("i",{"data-hide":"2",children:"{"}),(0,n.jsx)("i",{"data-show":"2",children:"strength"}),(0,n.jsx)("i",{"data-show":"2","data-aeq":!0,"data-b":!0,children:"1"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"2"}),(0,n.jsx)("i",{children:"strength"}),(0,n.jsx)("i",{"data-aeq":!0,"data-b":!0,children:"1"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{children:"}"})]}),(0,n.jsxs)("p",{"data-hide":"4","data-show":"3",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-mark":!0,children:e("section.coding.comment.2")})]}),(0,n.jsxs)("p",{"data-hide":"4",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-if":!0,"data-r":!0}),(0,n.jsx)("i",{children:"("}),(0,n.jsx)("i",{"data-g":!0,children:"/[a-z]/"}),(0,n.jsx)("i",{"data-test":!0,children:"."}),(0,n.jsx)("i",{"data-r":!0,children:"(password))"}),(0,n.jsx)("i",{"data-hide":"2",children:"{"}),(0,n.jsx)("i",{"data-show":"2",children:"strength"}),(0,n.jsx)("i",{"data-show":"2","data-aeq":!0,"data-b":!0,children:"1"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"2"}),(0,n.jsx)("i",{children:"strength"}),(0,n.jsx)("i",{"data-aeq":!0,"data-b":!0,children:"1"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{children:"}"})]}),(0,n.jsxs)("p",{"data-hide":"4","data-show":"3",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-mark":!0,children:e("section.coding.comment.3")})]}),(0,n.jsxs)("p",{"data-hide":"4",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-if":!0,"data-r":!0}),(0,n.jsx)("i",{children:"("}),(0,n.jsx)("i",{"data-g":!0,children:"/[A-Z]/"}),(0,n.jsx)("i",{"data-test":!0,children:"."}),(0,n.jsx)("i",{"data-r":!0,children:"(password))"}),(0,n.jsx)("i",{"data-hide":"2",children:"{"}),(0,n.jsx)("i",{"data-show":"2",children:"strength"}),(0,n.jsx)("i",{"data-show":"2","data-aeq":!0,"data-b":!0,children:"1"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"2"}),(0,n.jsx)("i",{children:"strength"}),(0,n.jsx)("i",{"data-aeq":!0,"data-b":!0,children:"1"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{children:"}"})]}),(0,n.jsxs)("p",{"data-hide":"4","data-show":"3",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-mark":!0,children:e("section.coding.comment.4")})]}),(0,n.jsxs)("p",{"data-hide":"4",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-if":!0,"data-r":!0}),(0,n.jsx)("i",{children:"("}),(0,n.jsx)("i",{"data-g":!0,children:"/[^\\w0-9]/"}),(0,n.jsx)("i",{"data-test":!0,children:"."}),(0,n.jsx)("i",{"data-r":!0,children:"(password))"}),(0,n.jsx)("i",{"data-hide":"2",children:"{"}),(0,n.jsx)("i",{"data-show":"2",children:"strength"}),(0,n.jsx)("i",{"data-show":"2","data-aeq":!0,"data-b":!0,children:"1"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"2"}),(0,n.jsx)("i",{children:"strength"}),(0,n.jsx)("i",{"data-aeq":!0,"data-b":!0,children:"1"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{children:"}"})]}),(0,n.jsxs)("p",{"data-hide":"4",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-return":!0,"data-r":!0}),(0,n.jsx)("i",{children:"strength"})]}),(0,n.jsxs)("p",{"data-show":"4",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-mark":!0,children:e("section.coding.comment.5")})]}),(0,n.jsxs)("p",{"data-show":"4",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-return":!0,"data-r":!0}),(0,n.jsx)("i",{children:"["}),(0,n.jsx)("i",{"data-g":!0,"data-co":!0,children:"/[0-9]/"}),(0,n.jsx)("i",{"data-g":!0,"data-co":!0,children:"/[a-z]/"}),(0,n.jsx)("i",{"data-g":!0,"data-co":!0,children:"/[A-Z]/"}),(0,n.jsx)("i",{"data-g":!0,children:"/[^\\w0-9]/"}),(0,n.jsx)("i",{children:"]"}),(0,n.jsx)("i",{"data-filter":!0,children:"."}),(0,n.jsx)("i",{children:"(reg => reg"}),(0,n.jsx)("i",{"data-test":!0,children:"."}),(0,n.jsx)("i",{children:"(password))"}),(0,n.jsx)("i",{"data-length":!0,children:"."})]}),(0,n.jsx)("p",{children:"}"})]})};let _=e=>{if(null==e||e.removeAttribute("style"),(null==e?void 0:e.childNodes.length)>0)for(let n in e.childNodes){var t,a;(null==e?void 0:null===(a=e.childNodes)||void 0===a?void 0:null===(t=a[n])||void 0===t?void 0:t.nodeType)==1&&_(e.childNodes[n])}},k={display:"inline-block",scale:1,opacity:1,duration:5,ease:m.eJ.easeOut.config(2)},S={display:"none",scale:.8,opacity:0,duration:5},q={maxHeight:"100%",duration:10,stagger:1,ease:m.qD.easeNone},A={display:"none",height:0,stagger:1,duration:5,ease:m.qD.easeNone},P=e=>{let t=p.ZP.timeline({paused:!0});_(null==e?void 0:e.querySelector(".coding__code-box")),t.to(e.querySelectorAll(".coding__dialogue[data-step='0']"),S,0);{let a=t.totalDuration(),n=e.querySelectorAll(".coding__dialogue[data-step='1']");t.to(n,k,a),Array.from(e.querySelectorAll("b[data-s]")).map(e=>{let a=e.getAttribute("data-s");t.to(e,{display:"inline-block",width:"".concat(a,"rem"),duration:5,ease:m.qD.easeNone},t.totalDuration()-4)}),t.to(n,S,t.totalDuration()+25)}return Array.from({length:3}).map((e,t)=>t+2).map(a=>{console.log(a);let n=e.querySelectorAll(".coding__dialogue[data-step='".concat(a,"']"));t.to(n,k,t.totalDuration());let i=e.querySelectorAll("[data-hide='".concat(a,"']"));i.length&&t.to(i,A,t.totalDuration());let l=e.querySelectorAll("[data-show='".concat(a,"']"));l.length&&t.to(l,q,t.totalDuration()),t.to(n,S,t.totalDuration()+25)}),t.to(e.querySelectorAll(".coding__dialogue[data-step='5']"),k,t.totalDuration()),t};function C(){let{index:e=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{t}=(0,h.$G)(),[a,l]=(0,i.useState)();(0,i.useEffect)(()=>()=>{null==a||a.kill()},[a]);let s=(0,i.useRef)(null);(0,i.useEffect)(()=>{s.current&&l(P(s.current))},[]),u(e,e=>{let{hidden:t,progress:n,overlappingEnter:i}=e;s.current&&(s.current.style.display=t?"none":""),t||null==a||a.progress(Math.min(n,i))});let r=(0,i.useMemo)(()=>(0,n.jsx)("div",{className:"flex-shrink-0 hidden lg:block mr-2 border-r-2 border-zinc-700 pr-2",children:Array.from({length:20}).map((e,t)=>(0,n.jsx)("p",{className:"text-zinc-600",children:(0,n.jsx)("span",{className:"w-5 text-right inline-block",children:t+1})},t))}),[]);return(0,i.useMemo)(()=>{let e=Array.from({length:5}).map((e,a)=>(0,n.jsx)("p",{"data-step":a+1,className:"coding__dialogue hidden opacity-0 origin-top lg:origin-left scale-80 bg-white rounded-3 shadow-lg px-3 lg:px-5 leading-10 lg:leading-16 inline-block",children:t("section.coding.message.".concat(a+1))},a));return(0,n.jsx)("section",{className:"h-400vh bg-gradient-to-b from-zinc-950 to-zinc-800",children:(0,n.jsxs)("div",{ref:s,className:"coding h-100vh w-full px-2 pb-2 sticky top-0 flex flex-col items-center justify-start lg:justify-center",children:[(0,n.jsxs)("div",{className:"flex items-center justify-center flex-col lg:flex-row pt-18 lg:pt-5 pb-7 lg:pb-5 flex-shrink-0 w-full",children:[(0,n.jsx)("img",{src:"".concat("/about-me-mix/assets","/avatar.png"),alt:"",className:"w-20 h-20 mb-3 lg:mb-0 lg:w-30 lg:h-30 shadow-lg rounded-full"}),(0,n.jsxs)("div",{className:"flex-shrink-0 max-w-100 flex-none lg:flex-1 lg:ml-10 text-4 lg:text-5 relative",children:[(0,n.jsx)("p",{className:"coding__dialogue origin-top lg:origin-left bg-white rounded-3 shadow-lg px-3 lg:px-5 leading-10 lg:leading-16 inline-block","data-step":"0",children:t("section.coding.message.0")}),e]})]}),(0,n.jsxs)("div",{className:"text-3 overflow-hidden lg:text-4 flex text-white w-full h-130 lg:max-w-180 p-2 lg:p-5 flex-1 lg:flex-none rounded-1 lg:rounded-2 bg-zinc-800",children:[r,(0,n.jsx)(N,{})]})]})})},[t])}a(5162);var T=a(9774);let{v3:E,m4:M,primitives:D}=T,{drawBufferInfo:z,createProgramInfo:R,setBuffersAndAttributes:L,setUniforms:H,createTextures:G}=T,O=e=>{let t=Array.from(e.replace(/^#/,"")),a=Array.from({length:3}).map((e,t)=>t).reduce((e,a)=>[...e,parseInt(t.slice(2*a,2*a+2).join(""),16)/255],[]);return E.create(a[0],a[1],a[2])},B=async function(e,t){let{bg:a,bg2:n,noise:i,noise2:l}=t,s=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(!e)return Promise.reject("canvas not exist.");let r=e.getContext("webgl"),d=R(r,["\n// 乾淨滿版一般矩陣\nattribute vec4 position;\nuniform mat4 matrix;\n\n// 相對視窗比\nuniform mat4 uNoiseRatio;\nuniform mat4 uNoise2Ratio;\n\n// 傳遞給著色器的資訊\nvarying vec2 vNoiseTexCoord;\nvarying vec2 vNoise2TexCoord;\n\nvoid main () {\n  gl_Position = matrix * position;\n  vNoiseTexCoord = (uNoiseRatio * position).xy;\n  vNoise2TexCoord = (uNoise2Ratio * position).xy;\n}\n","\nprecision mediump float;\n\n// 溶解判斷圖\nvarying vec2 vNoiseTexCoord;\nuniform sampler2D uNoise;\n\n// 溶解判斷圖2\nvarying vec2 vNoise2TexCoord;\nuniform sampler2D uNoise2;\n\n// 0.0 ~ 1.0\nuniform float uProgress;\nuniform vec3 uBgColor;\nuniform vec3 uBg2Color;\n\nvoid main() {\n	// 溶解效果\n  // 清除低於進度值的顏色 (noise.r + noise.g + noise.b) / 3.0 <= uProgress\n  // RGB灰階圖，三色同數值，也介於 0 ~ 1 之間，剛好當做進度值\n  \n  vec4 color = vec4(uBgColor, 1.0);\n  float progress = uProgress * 2.0; \n  \n  // first  \n  if (progress < 1.0) {\n    vec4 noise = texture2D(uNoise, vNoiseTexCoord);\n    if (noise.r < progress) {\n      color = vec4(uBg2Color, 1.0);\n    }\n  } else {\n    color = vec4(uBg2Color, 1.0);\n  }\n  \n  // second\n  if (progress > 0.8) {\n    vec4 noise2 = texture2D(uNoise2, vNoise2TexCoord);\n    if (noise2.r < (progress - 0.8) / 1.2) discard;\n  }\n\n  // final\n  color.a = 1.0 - uProgress;\n  color.r -= (max(0.5, uProgress) - 0.5) / 0.5;\n  gl_FragColor = color;\n}\n"]);r.useProgram(d.program);let o=D.createXYQuadBufferInfo(r);z(r,o),L(r,d,o);let c=M.identity(),h=O(a),x=O(n),u=M.identity(),g=M.identity();return new Promise((t,a)=>{G(r,{noise:{src:i},noise2:{src:l}},(n,i,l)=>{if(n)return a(n);let p=0,{noise:m,noise2:j}=l,{noise:f,noise2:b}=i,v=window.innerWidth/window.innerHeight,w=t=>{let{min:a}=Math;v=window.innerWidth/window.innerHeight;let n=Math.min(1920,window.innerWidth),i=n/v;r.viewport(0,0,n,i),e.width=n,e.height=i,M.ortho(0,n,i,0,-1,1,c),M.translate(c,[0,0,0],c),M.scale(c,[n,i,1],c);{g=M.identity();let e=v/(m.width/m.height),t=[a(1,e),a(1,1/e),1],n=[.5/t[0]-.5,.5/t[1]-.5,0];M.scale(g,t,g),M.translate(g,n,g)}{u=M.identity();let e=v/(j.width/j.height),t=[a(1,e),a(1,1/e),1],n=[(1-t[0])*.5,(1-t[1])*.5,0];M.scale(u,t,u),M.translate(u,n,u)}requestAnimationFrame(()=>y(t||p))},y=e=>{p=e,H(d,{uBgColor:h,uBg2Color:x,matrix:c,uNoise:f,uNoise2:b,uNoiseRatio:g,uNoise2Ratio:u,uProgress:e}),z(r,o)};s&&w(),t({resetSize:w,kill:()=>{r.deleteProgram(d.program),r.deleteBuffer(o.indices),r.deleteTexture(f),r.deleteTexture(b)},progress:y})})})};var J=a(4518);function I(){let{index:e=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{t}=(0,h.$G)(),[a,l]=(0,i.useState)();(0,i.useEffect)(()=>(null==a||a.resetSize(null==d?void 0:d.progress),()=>{null==a||a.kill()}),[a]);let s=(0,i.useRef)(null);(0,i.useEffect)(()=>{var e;let t=null===(e=s.current)||void 0===e?void 0:e.querySelector("canvas");if(!t)return;let a=!1;return B(t,{bg:"#27272a",bg2:"#61dafb",noise:"".concat("/about-me-mix/assets","/noise.jpg"),noise2:"".concat("/about-me-mix/assets","/noise2.jpg")},!1).then(e=>!a&&l(e)),()=>{a=!0}},[]);let r=(0,J.bf)(e=>e.sizeUpdateTimestamp);(0,i.useEffect)(()=>{null==a||a.resetSize()},[r]);let{position:d}=u(e,e=>{let{hidden:t,progress:n}=e;s.current&&(s.current.style.display=t?"none":""),t||null==a||a.progress(n)});return(0,i.useMemo)(()=>(0,n.jsx)("section",{className:"h-300vh",children:(0,n.jsxs)("div",{ref:s,className:"h-full",children:[(0,n.jsx)("canvas",{className:"h-100vh w-full sticky top-0 z-10 pointer-events-none"}),(0,n.jsx)("div",{className:"h-100vh"}),(0,n.jsx)("div",{className:"w-full h-100vh relative z-0 flex items-center justify-center font-bold text-white text-10 lg:text-16",children:t("thank")})]})}),[t])}function V(){let e=(0,i.useRef)([]),t=()=>s(o(e.current));(0,i.useEffect)(()=>(window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}),[]);let a=(0,J.bf)(e=>e.sizeUpdateTimestamp),l=(0,i.useRef)(null);return(0,i.useEffect)(()=>{l.current&&(e.current=d(l.current),t())},[l,a]),(0,n.jsx)("main",{ref:l,children:[g,f,y,C,I].map((e,t)=>(0,n.jsx)(e,{index:t},t))})}var $=!0;function W(){return(0,n.jsx)(V,{})}},5162:function(){},2613:function(){}},function(e){e.O(0,[722,452,358,888,774,179],function(){return e(e.s=2823)}),_N_E=e.O()}]);