(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[803],{2823:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/home",function(){return a(4906)}])},4906:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return $},default:function(){return F}});var n=a(2322),i=a(2784),l=a(3997),s=a(6480);let r={top:0,height:0,overlappingEnter:0,overlappingLeave:0,progress:0,hidden:!1},d=e=>{let t=[];for(let a=0;a<e.children.length;++a){let{offsetTop:n,offsetHeight:i}=e.children[a];t.push(Object.assign({...r},{top:n,height:i}))}return o(t)},o=e=>{let{max:t,min:a}=Math,n=window.scrollY,i=window.innerHeight,[l,s]=[n,n+i];for(let r in e){let d=e[r],{top:o,height:c}=d,[h,x]=[o,o+c],u=(s-h)/i,g=(x-l)/i,p=t(0,a(1,u)),m=t(0,a(1,g)),j=u<-.5||g<-.5,f=t(0,a(1,(n-o)/(c-i))),{progress:b,hidden:w,overlappingEnter:v,overlappingLeave:y}=d;(f!==b||j!==w||v!==p||y!==m)&&(e[r]={...d,progress:f,hidden:j,overlappingEnter:p,overlappingLeave:m})}return[...e]};var c=a(1702),h=a(3838);a(1935);let x=e=>{if(e.removeAttribute("style"),e.childNodes.length>0)for(let t in e.childNodes)1==e.childNodes[t].nodeType&&x(e.childNodes[t])},u={display:"inline-block",scale:1,opacity:1,duration:5,ease:c.eJ.easeOut.config(2)},g={display:"none",scale:.8,opacity:0,duration:5},p={maxHeight:"100%",duration:10,stagger:1,ease:c.qD.easeNone},m={display:"none",height:0,stagger:1,duration:5,ease:c.qD.easeNone},j=e=>{let t=h.ZP.timeline({paused:!0});x(null==e?void 0:e.querySelector(".coding__code-box")),t.to(e.querySelectorAll(".coding__dialogue[data-step='0']"),g,0);{let a=t.totalDuration(),n=e.querySelectorAll(".coding__dialogue[data-step='1']");t.to(n,u,a),Array.from(e.querySelectorAll("b[data-s]")).map(e=>{let a=e.getAttribute("data-s");t.to(e,{display:"inline-block",width:"".concat(a,"rem"),duration:5,ease:c.qD.easeNone},t.totalDuration()-4)}),t.to(n,g,t.totalDuration()+25)}return Array.from({length:3}).map((e,t)=>t+2).map(a=>{let n=e.querySelectorAll(".coding__dialogue[data-step='".concat(a,"']"));t.to(n,u,t.totalDuration());let i=e.querySelectorAll("[data-hide='".concat(a,"']"));i.length&&t.to(i,m,t.totalDuration());let l=e.querySelectorAll("[data-show='".concat(a,"']"));l.length&&t.to(l,p,t.totalDuration()),t.to(n,g,t.totalDuration()+25)}),t.to(e.querySelectorAll(".coding__dialogue[data-step='5']"),u,t.totalDuration()),t},f=e=>{let t=h.ZP.timeline({paused:!0}),[a,n,i,l]=[e.querySelectorAll(".dialogue__bg"),e.querySelector(".dialogue__avatar"),e.querySelectorAll(".dialogue__char"),e.querySelector(".dialogue__popup")];return t.to(a,{width:"100%",stagger:.5,duration:10,borderRadius:0,ease:c.EA.easeInOut},0),t.to(n,{scale:1,display:"block",opacity:1,duration:10,ease:c.eJ.easeOut.config(2)},5),t.to(l,{display:"block"},10),t.to(i,{opacity:1,scale:1,stagger:.25,duration:2},11),t.to(i,{y:-10,stagger:.25,duration:1},11),t.to(i,{y:0,stagger:.25,duration:1},12),t.to(n,{opacity:0,y:-200,duration:8,display:"none",ease:c.eJ.easeIn.config(2)},24),t.to(l,{opacity:0,y:50,duration:8,display:"none"},24),t};a(1917);let b=e=>{let t=h.ZP.timeline({paused:!0}),a=e.querySelector(".experience__title");t.to(a,{display:"block",opacity:1,duration:16,scale:1,ease:c.eJ.easeInOut.config(5)},0);let n={value:0},i=()=>{e.scrollLeft=(e.scrollWidth-window.innerWidth)*n.value};t.to(n,{value:1,onUpdate:i,duration:70,ease:c.qD.easeNone},16);let l=e.querySelector(".experience__title-coding");return t.to(l,{display:"none",opacity:0,duration:16,scale:.5,ease:c.eJ.easeInOut.config(5)},t.totalDuration()),t};var w=a(9774);let{v3:v,m4:y,primitives:N}=w,{drawBufferInfo:_,createProgramInfo:k,setBuffersAndAttributes:S,setUniforms:A,createTextures:q}=w,C=e=>{let t=Array.from(e.replace(/^#/,"")),a=Array.from({length:3}).map((e,t)=>t).reduce((e,a)=>[...e,parseInt(t.slice(2*a,2*a+2).join(""),16)/255],[]);return v.create(a[0],a[1],a[2])},P=async function(e,t){let{bg:a,bg2:n,noise:i,noise2:l}=t,s=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(!e)return Promise.reject("canvas not exist.");let r=e.getContext("webgl"),d=k(r,["\n// 乾淨滿版一般矩陣\nattribute vec4 position;\nuniform mat4 matrix;\n\n// 相對視窗比\nuniform mat4 uNoiseRatio;\nuniform mat4 uNoise2Ratio;\n\n// 傳遞給著色器的資訊\nvarying vec2 vNoiseTexCoord;\nvarying vec2 vNoise2TexCoord;\n\nvoid main () {\n  gl_Position = matrix * position;\n  vNoiseTexCoord = (uNoiseRatio * position).xy;\n  vNoise2TexCoord = (uNoise2Ratio * position).xy;\n}\n","\nprecision mediump float;\n\n// 溶解判斷圖\nvarying vec2 vNoiseTexCoord;\nuniform sampler2D uNoise;\n\n// 溶解判斷圖2\nvarying vec2 vNoise2TexCoord;\nuniform sampler2D uNoise2;\n\n// 0.0 ~ 1.0\nuniform float uProgress;\nuniform vec3 uBgColor;\nuniform vec3 uBg2Color;\n\nvoid main() {\n	// 溶解效果\n  // 清除低於進度值的顏色 (noise.r + noise.g + noise.b) / 3.0 <= uProgress\n  // RGB灰階圖，三色同數值，也介於 0 ~ 1 之間，剛好當做進度值\n  \n  vec4 color = vec4(uBgColor, 1.0);\n  float progress = uProgress * 2.0; \n  \n  // first  \n  if (progress < 1.0) {\n    vec4 noise = texture2D(uNoise, vNoiseTexCoord);\n    if (noise.r < progress) {\n      color = vec4(uBg2Color, 1.0);\n    }\n  } else {\n    color = vec4(uBg2Color, 1.0);\n  }\n  \n  // second\n  if (progress > 0.8) {\n    vec4 noise2 = texture2D(uNoise2, vNoise2TexCoord);\n    if (noise2.r < (progress - 0.8) / 1.2) discard;\n  }\n\n  // final\n  color.a = 1.0 - uProgress;\n  color.r -= (max(0.5, uProgress) - 0.5) / 0.5;\n  gl_FragColor = color;\n}\n"]);r.useProgram(d.program);let o=N.createXYQuadBufferInfo(r);_(r,o),S(r,d,o);let c=y.identity(),h=C(a),x=C(n),u=y.identity(),g=y.identity();return new Promise((t,a)=>{q(r,{noise:{src:i},noise2:{src:l}},(n,i,l)=>{if(n)return a(n);let p=0,{noise:m,noise2:j}=l,{noise:f,noise2:b}=i,w=window.innerWidth/window.innerHeight,v=t=>{let{min:a}=Math;w=window.innerWidth/window.innerHeight;let n=Math.min(1920,window.innerWidth),i=n/w;r.viewport(0,0,n,i),e.width=n,e.height=i,y.ortho(0,n,i,0,-1,1,c),y.translate(c,[0,0,0],c),y.scale(c,[n,i,1],c);{g=y.identity();let e=w/(m.width/m.height),t=[a(1,e),a(1,1/e),1],n=[.5/t[0]-.5,.5/t[1]-.5,0];y.scale(g,t,g),y.translate(g,n,g)}{u=y.identity();let e=w/(j.width/j.height),t=[a(1,e),a(1,1/e),1],n=[(1-t[0])*.5,(1-t[1])*.5,0];y.scale(u,t,u),y.translate(u,n,u)}requestAnimationFrame(()=>N(t||p))},N=e=>{p=e,A(d,{uBgColor:h,uBg2Color:x,matrix:c,uNoise:f,uNoise2:b,uNoiseRatio:g,uNoise2Ratio:u,uProgress:e}),_(r,o)},k=()=>{r.deleteProgram(d.program),r.deleteBuffer(o.indices),r.deleteTexture(f)};s&&v(),t({resetSize:v,kill:k,progress:N})})})};var E=e=>{let{count:t=1,children:a}=e;return(0,n.jsx)(n.Fragment,{children:Array.from({length:t}).map((e,t)=>a({index:t}))})},T=a(343);a(3542);var R=e=>{let{index:t}=e,{t:a}=(0,T.$G)(["common"]);return(0,n.jsx)("div",{className:"absolute top-0 left-0 w-full h-full overflow-hidden",children:(0,n.jsxs)("div",{style:1===t?{backgroundImage:"url(".concat("/about-me-mix/assets","/polygon-white.jpg)")}:{},className:"".concat(1===t?"dark:brightness-75 transition-all":""," h-100vh w-full flex flex-col items-center justify-center font-medium text-4 lg:text-5 bg-center bg-cover"),children:[(0,n.jsx)("img",{src:"".concat("/about-me-mix/assets","/icon/react.svg"),className:"w-auto h-28 lg:h-40 mb-4 lg:mb-6 ".concat(!t&&"brightness-0 invert-100"),alt:""}),(0,n.jsxs)("div",{className:"h-36 text-center",children:[(0,n.jsx)("h1",{className:"text-5 lg:text-7 font-black mb-2 lg:mb-4 ".concat(t?"text-black":"text-white"),children:a("section.opening.title")}),(0,n.jsx)("p",{className:"mb-2 lg:mb-4 ".concat(t?"text-gray-700":"text-white"),children:a("section.opening.desc")}),(0,n.jsx)("p",{className:t?"text-gray-700":"text-white",children:a("section.opening.target",["Next 13"])})]})]})},t)},z=a(4982),D=(e,t)=>{let a=(0,z.CG)(t=>{var a;return null===(a=t.progress.position)||void 0===a?void 0:a[e]});return a&&(null==t||t(a)),{position:a}};function G(){let{index:e=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{t}=(0,T.$G)(["common"]),a=(0,i.useRef)(null);return D(e,e=>{var t,n;let{progress:i,hidden:l}=e;if(!a.current)return;a.current.style.display=l?"none":"";let s=null===(t=a.current)||void 0===t?void 0:null===(n=t.children)||void 0===n?void 0:n[1];!l&&s&&(s.style.height="".concat((1-i)*100,"%"))}),(0,i.useMemo)(()=>(0,n.jsx)("section",{className:"h-200vh w-full relative",children:(0,n.jsx)("div",{ref:a,className:"sticky top-0 left-0 h-100vh w-full",children:(0,n.jsx)(E,{count:2,children:R})})}),[t])}function M(){let{index:e=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{t}=(0,T.$G)(["common"]),[a,l]=(0,i.useState)();(0,i.useEffect)(()=>()=>{null==a||a.kill()},[a]);let s=(0,i.useRef)(null);(0,i.useEffect)(()=>{s.current&&l(f(s.current))},[]),D(e,e=>{let{hidden:t,progress:n,overlappingEnter:i}=e;s.current&&(s.current.style.display=t?"none":""),t||null==a||a.progress(.8*n+.2*i)});let r=(0,i.useMemo)(()=>Array.from({length:5}).map((e,t)=>(0,n.jsx)("div",{className:"dialogue__bg w-0 h-21vh -mb-1 bg-zinc-800 rounded-br-50px first:rounded-tr-50px"},t)),[]);return(0,i.useMemo)(()=>{let e=t("section.dialogue",{returnObjects:!0}),a=e.map((e,t)=>(0,n.jsx)("p",{style:{paddingLeft:"".concat(t,"rem")},className:"mb-2",children:Array.from(e).map((e,a)=>(0,n.jsx)("span",{className:"dialogue__char whitespace-pre inline-block opacity-0 scale-50",children:e},"".concat(t,"_").concat(a)))},t));return(0,n.jsx)("section",{className:"min-h-400vh relative",children:(0,n.jsxs)("div",{ref:s,className:"dialogue w-full h-100vh sticky top-0 text-4 lg:text-6 overflow-hidden",children:[r,(0,n.jsx)("div",{className:"absolute w-40 h-40 lg:w-65 lg:h-65 left-1/2 top-3.5/10 -translate-x-1/2 -translate-y-1/2",children:(0,n.jsxs)("div",{className:"dialogue__avatar hidden opacity-0 scale-50 w-full h-full",children:[(0,n.jsx)("div",{className:"absolute animate-ping rounded-full w-full h-full bg-zinc-700 animate-delay-0.1s animate-duration-3s"}),(0,n.jsx)("div",{className:"absolute animate-ping rounded-full w-full h-full bg-zinc-600 animate-delay-0.3s animate-duration-3s"}),(0,n.jsx)("div",{className:"absolute animate-ping rounded-full w-full h-full bg-zinc-500 animate-delay-0.5s animate-duration-3s"}),(0,n.jsx)("img",{src:"".concat("/about-me-mix/assets","/avatar.png"),alt:"",className:"w-full h-full relative z-10"})]})}),(0,n.jsx)("div",{className:"w-full absolute top-6.5/10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center",children:(0,n.jsx)("div",{className:"dialogue__popup hidden",children:a})})]})})},[t])}var O=JSON.parse('{"b":[{"date":"2015","label":"experience.department.title","works":[{"label":"experience.department.topic","end":0,"team":0,"technology":["Java Servlet","Java Android","JSP","HTML","CSS"]}]},{"date":"2015/09","label":"experience.2015.company","works":[{"label":"experience.2015.maintain","end":0,"team":0,"technology":["PHP Codeigniter","MySql","Apache","JQuery"]},{"label":"experience.2015.cart","end":0,"team":1,"technology":["PHP Opencart"]},{"label":"experience.2015.soap","end":1,"team":1,"technology":["SOAP","Postman"]}]},{"date":"2016/12","label":"experience.2016.company","works":[{"label":"experience.2016.flash","end":2,"team":1,"technology":["HTML5","CSS3","FabricJS"]},{"label":"experience.2016.app","technology":["Lua"],"end":1,"team":1},{"label":"experience.2016.dm","end":1,"team":1,"technology":["Bootstrap","Owl Carousel","AOS","SweetAlert","GSAP","Swiper"]},{"label":"experience.2016.test","end":0,"team":1,"technology":["ECharts"]},{"label":"experience.2016.manage","end":0,"team":1},{"label":"experience.2016.textbook","end":0,"team":1},{"label":"experience.2016.online","end":0,"team":1}]},{"date":"2019/01","label":"experience.2019.company","works":[{"label":"experience.2019.pay","technology":["Gitlab","SourceTree","Nginx","Ngrok"],"end":1,"team":1},{"label":"experience.2019.source","technology":["Node","Vue2","Vuex","Vue Router","Less CSS"],"end":0,"team":1},{"label":"experience.2019.forum","end":2,"team":0,"technology":["Webpack","Eslint","Prettier"]},{"label":"experience.2019.react_h5","end":2,"team":0,"technology":["React","React Hooks","Redux Thunk","Redux SAGA","React Router","Ant Design","Sass CSS"]},{"label":"experience.2019.website","end":2,"team":1,"technology":["Redux Toolkit"]},{"label":"experience.2019.chat","end":1,"team":1,"technology":["PM2","Express","Socket.IO","Redis","WebSocket","Polling"]},{"label":"experience.2019.vue_h5","end":2,"team":1,"technology":["Vue3","Composition API","Typescript","VueI18n","Pinia","TailwindCSS","Jest"]},{"label":"experience.2019.ci","end":0,"team":1,"technology":["Vite","MongoDB","Jenkins","Telegram Bot","Gradle Walle","Xcode Build CLI"]}]},{"date":"2022/06","label":"experience.2022.company","works":[{"label":"experience.2022.sport","end":2,"team":0,"technology":["Puppeteer","UnoCSS","SSG"]},{"label":"experience.2022.chat","end":2,"team":1,"technology":["Stomp","Protocol Buffers"]}]},{"date":"2023/03","label":"experience.leave"}]}'),B=e=>{var t;let{details:a}=e,{t:i}=(0,T.$G)();return(0,n.jsxs)("div",{"data-group":a.group,className:"experience__work flex items-start text-white relative ".concat(a.category?"ml-24 -mt-20 text-5 lg:text-6 pr-1 lg:pr-3":"text-4 lg:text-5"),children:[!a.category&&(0,n.jsx)("div",{className:"work__line relative w-3 lg:w-6 h-0 border-t-4 mt-4 lg:mt-5"}),(0,n.jsxs)("div",{className:"flex-1",children:[(0,n.jsxs)("div",{className:"work__head mb-3 flex items-center rounded-1.5",children:[a.date&&(0,n.jsx)("div",{className:"work__head-date inline-block bg-white px-3 py-1.5 rounded-l-1.5 font-bold",children:a.date}),(0,n.jsx)("h1",{className:"inline-block text-white px-3 py-1.5",children:i(a.label)})]}),("end"in a||"team"in a)&&(0,n.jsxs)("div",{className:"pl-4 leading-0 whitespace-nowrap mb-3",children:[(0,n.jsx)("span",{className:"work__end leading-4 inline-block text-4 m-0 px-2 py-1.5 rounded-l","data-color":a.end,children:i("end.".concat(a.end))}),(0,n.jsx)("span",{className:"work__team leading-4 inline-block text-4 m-0 px-2 py-1.5 bg-white rounded-r","data-color":a.team,children:i("team.".concat(a.team))})]}),(null===(t=a.technology)||void 0===t?void 0:t.length)&&(0,n.jsx)("div",{className:"pl-8 max-w-70 flex flex-wrap",children:a.technology.map(e=>(0,n.jsx)("span",{className:"work__tag lg:text-3.5 text-bold px-2 py-0.5 rounded mr-2 mb-2",children:e},e))})]}),!!a.count&&(0,n.jsx)("div",{className:"work__line relative w-4 lg:w-6 h-16.5 rounded-rt-2 border-t-4 border-r-4 mt-4.5 lg:mt-5.5",children:(0,n.jsx)("span",{className:"work__line-end w-4 h-4 border-l-4 border-b-4 inline-block absolute -right-4 -bottom-4 rounded-lb-2"})})]})};let J=O.b.map((e,t)=>{let{date:a,label:n,works:i=[]}=e;return[{date:a,label:n,group:t,category:!0,count:i.length},...i.map(e=>({...e,group:t}))]}).flat();function L(){let{index:e=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{max:t,min:a}=Math,{t:l}=(0,T.$G)(),[s,r]=(0,i.useState)();(0,i.useEffect)(()=>()=>{null==s||s.kill()},[s]);let d=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!d.current)return;r(b(d.current));let[e,n,i]=[!1,0,0],l=()=>{if(!d.current||.01>Math.abs(n))return e=!1;e=!0,d.current.style.transform="rotate(".concat((n*=.75).toFixed(2),"deg)"),requestAnimationFrame(l)},s=()=>{var s,r;if((null===(s=d.current)||void 0===s?void 0:null===(r=s.style)||void 0===r?void 0:r.display)==="none")return;let o=window.scrollY-i;n=t(-5,a(5,n-t(-.5,a(.5,.01*o)))),e||l(),i=window.scrollY};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),D(e,e=>{let{progress:n,overlappingEnter:i,overlappingLeave:l,hidden:r}=e;d.current&&(d.current.style.display=r?"none":""),r||null==s||s.progress(.7*n+.15*t(0,i/.8)+.15*a(1,1-l))}),(0,i.useMemo)(()=>(0,n.jsx)("section",{className:"experience w-full h-600vh bg-gradient-to-b from-zinc-800 to-zinc-600",children:(0,n.jsxs)("div",{ref:d,className:"fixed left-0 top-0 w-full h-100vh flex flex-nowrap overflow-hidden whitespace-nowrap",children:[(0,n.jsx)("div",{className:"w-full h-100vh flex items-center justify-center flex-shrink-0 font-bold text-white text-10 lg:text-16",children:(0,n.jsx)("h1",{className:"experience__title hidden opacity-0 scale-50",children:l("section.experience.title")})}),J.map((e,t)=>(0,n.jsx)("div",{className:"flex-shrink-0 inline-block pt-40vh",children:(0,n.jsx)(B,{details:e})},t)),(0,n.jsx)("div",{className:"w-full h-100vh flex items-center justify-center flex-shrink-0 font-bold text-white text-10 lg:text-16",children:(0,n.jsx)("h1",{className:"experience__title-coding",children:l("section.coding.title")})})]})}),[l])}var I=()=>{let{t:e}=(0,T.$G)();return(0,n.jsxs)("div",{className:"coding__code-box flex-1 overflow-x-auto overflow-y-hidden overflow-x-auto overflow-y-hidden",children:[(0,n.jsx)("p",{"data-show":"3","data-g":!0,children:"/**"}),(0,n.jsxs)("p",{"data-show":"3","data-g":!0,children:[(0,n.jsx)("i",{children:"* @desc"}),(0,n.jsx)("i",{"data-l":!0,children:e("section.coding.desc")})]}),(0,n.jsxs)("p",{"data-show":"3","data-g":!0,children:[(0,n.jsxs)("i",{children:["* @param ","{string}"," password"]}),(0,n.jsx)("i",{"data-l":!0,children:e("section.coding.param")})]}),(0,n.jsxs)("p",{"data-show":"3","data-g":!0,children:[(0,n.jsxs)("i",{children:["* @return ","{number}"]}),(0,n.jsx)("i",{"data-l":!0,children:e("section.coding.return")})]}),(0,n.jsx)("p",{"data-show":"3","data-g":!0,children:"*/"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("i",{"data-export":!0,"data-r":!0}),(0,n.jsx)("i",{"data-function":!0,"data-r":!0}),(0,n.jsx)("i",{"data-y":!0,children:"getPasswordStrength"}),(0,n.jsx)("i",{"data-r":!0,children:"(password:"}),(0,n.jsx)("i",{"data-string":!0}),(0,n.jsx)("i",{"data-r":!0,children:"):"}),(0,n.jsx)("i",{"data-number":!0,"data-r":!0}),(0,n.jsx)("i",{children:"{"})]}),(0,n.jsxs)("p",{"data-show":"3",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-mark":!0,children:e("section.coding.comment.0")})]}),(0,n.jsxs)("p",{"data-hide":"4",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-let":!0,"data-r":!0}),(0,n.jsx)("i",{children:"strength"}),(0,n.jsx)("i",{"data-eq":!0,"data-b":!0,children:"0"})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-if":!0,"data-r":!0}),(0,n.jsx)("i",{children:"(!password || password"}),(0,n.jsx)("i",{"data-length":!0,children:"."}),(0,n.jsx)("i",{"data-lt":!0,"data-b":!0,children:"8"}),(0,n.jsx)("i",{"data-r":!0,children:")"}),(0,n.jsx)("i",{"data-hide":"2",children:"{"}),(0,n.jsx)("i",{"data-show":"2","data-return":!0,"data-r":!0}),(0,n.jsx)("i",{"data-hide":"4","data-show":"2",children:"strength"}),(0,n.jsx)("i",{"data-show":"4","data-b":!0,children:"0"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"2"}),(0,n.jsx)("i",{"data-return":!0,"data-r":!0}),(0,n.jsx)("i",{children:"strength"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{children:"}"})]}),(0,n.jsxs)("p",{"data-hide":"4","data-show":"3",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-mark":!0,children:e("section.coding.comment.1")})]}),(0,n.jsxs)("p",{"data-hide":"4",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-if":!0,"data-r":!0}),(0,n.jsx)("i",{children:"("}),(0,n.jsx)("i",{"data-g":!0,children:"/[0-9]/"}),(0,n.jsx)("i",{"data-test":!0,children:"."}),(0,n.jsx)("i",{"data-r":!0,children:"(password))"}),(0,n.jsx)("i",{"data-hide":"2",children:"{"}),(0,n.jsx)("i",{"data-show":"2",children:"strength"}),(0,n.jsx)("i",{"data-show":"2","data-aeq":!0,"data-b":!0,children:"1"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"2"}),(0,n.jsx)("i",{children:"strength"}),(0,n.jsx)("i",{"data-aeq":!0,"data-b":!0,children:"1"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{children:"}"})]}),(0,n.jsxs)("p",{"data-hide":"4","data-show":"3",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-mark":!0,children:e("section.coding.comment.2")})]}),(0,n.jsxs)("p",{"data-hide":"4",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-if":!0,"data-r":!0}),(0,n.jsx)("i",{children:"("}),(0,n.jsx)("i",{"data-g":!0,children:"/[a-z]/"}),(0,n.jsx)("i",{"data-test":!0,children:"."}),(0,n.jsx)("i",{"data-r":!0,children:"(password))"}),(0,n.jsx)("i",{"data-hide":"2",children:"{"}),(0,n.jsx)("i",{"data-show":"2",children:"strength"}),(0,n.jsx)("i",{"data-show":"2","data-aeq":!0,"data-b":!0,children:"1"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"2"}),(0,n.jsx)("i",{children:"strength"}),(0,n.jsx)("i",{"data-aeq":!0,"data-b":!0,children:"1"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{children:"}"})]}),(0,n.jsxs)("p",{"data-hide":"4","data-show":"3",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-mark":!0,children:e("section.coding.comment.3")})]}),(0,n.jsxs)("p",{"data-hide":"4",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-if":!0,"data-r":!0}),(0,n.jsx)("i",{children:"("}),(0,n.jsx)("i",{"data-g":!0,children:"/[A-Z]/"}),(0,n.jsx)("i",{"data-test":!0,children:"."}),(0,n.jsx)("i",{"data-r":!0,children:"(password))"}),(0,n.jsx)("i",{"data-hide":"2",children:"{"}),(0,n.jsx)("i",{"data-show":"2",children:"strength"}),(0,n.jsx)("i",{"data-show":"2","data-aeq":!0,"data-b":!0,children:"1"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"2"}),(0,n.jsx)("i",{children:"strength"}),(0,n.jsx)("i",{"data-aeq":!0,"data-b":!0,children:"1"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{children:"}"})]}),(0,n.jsxs)("p",{"data-hide":"4","data-show":"3",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-mark":!0,children:e("section.coding.comment.4")})]}),(0,n.jsxs)("p",{"data-hide":"4",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-if":!0,"data-r":!0}),(0,n.jsx)("i",{children:"("}),(0,n.jsx)("i",{"data-g":!0,children:"/[^\\w0-9]/"}),(0,n.jsx)("i",{"data-test":!0,children:"."}),(0,n.jsx)("i",{"data-r":!0,children:"(password))"}),(0,n.jsx)("i",{"data-hide":"2",children:"{"}),(0,n.jsx)("i",{"data-show":"2",children:"strength"}),(0,n.jsx)("i",{"data-show":"2","data-aeq":!0,"data-b":!0,children:"1"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"2"}),(0,n.jsx)("i",{children:"strength"}),(0,n.jsx)("i",{"data-aeq":!0,"data-b":!0,children:"1"})]}),(0,n.jsxs)("p",{"data-hide":"2",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{children:"}"})]}),(0,n.jsxs)("p",{"data-hide":"4",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-return":!0,"data-r":!0}),(0,n.jsx)("i",{children:"strength"})]}),(0,n.jsxs)("p",{"data-show":"4",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-mark":!0,children:e("section.coding.comment.5")})]}),(0,n.jsxs)("p",{"data-show":"4",children:[(0,n.jsx)("b",{"data-s":"1"}),(0,n.jsx)("i",{"data-return":!0,"data-r":!0}),(0,n.jsx)("i",{children:"["}),(0,n.jsx)("i",{"data-g":!0,"data-co":!0,children:"/[0-9]/"}),(0,n.jsx)("i",{"data-g":!0,"data-co":!0,children:"/[a-z]/"}),(0,n.jsx)("i",{"data-g":!0,"data-co":!0,children:"/[A-Z]/"}),(0,n.jsx)("i",{"data-g":!0,children:"/[^\\w0-9]/"}),(0,n.jsx)("i",{children:"]"}),(0,n.jsx)("i",{"data-filter":!0,children:"."}),(0,n.jsx)("i",{children:"(reg => reg"}),(0,n.jsx)("i",{"data-test":!0,children:"."}),(0,n.jsx)("i",{children:"(password))"}),(0,n.jsx)("i",{"data-length":!0,children:"."})]}),(0,n.jsx)("p",{children:"}"})]})};function H(){let{index:e=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{t}=(0,T.$G)(),[a,l]=(0,i.useState)();(0,i.useEffect)(()=>()=>{null==a||a.kill()},[a]);let s=(0,i.useRef)(null);(0,i.useEffect)(()=>{s.current&&l(j(s.current))},[]),D(e,e=>{let{hidden:t,progress:n,overlappingEnter:i}=e;s.current&&(s.current.style.display=t?"none":""),t||null==a||a.progress(Math.min(n,i))});let r=(0,i.useMemo)(()=>(0,n.jsx)("div",{className:"flex-shrink-0 hidden lg:block mr-2 border-r-2 border-zinc-700 pr-2",children:Array.from({length:20}).map((e,t)=>(0,n.jsx)("p",{className:"text-zinc-600",children:(0,n.jsx)("span",{className:"w-5 text-right inline-block",children:t+1})},t))}),[]);return(0,i.useMemo)(()=>{let e=Array.from({length:5}).map((e,a)=>(0,n.jsx)("p",{"data-step":a+1,className:"coding__dialogue hidden opacity-0 origin-top lg:origin-left scale-80 bg-white rounded-3 shadow-lg px-3 lg:px-5 leading-10 lg:leading-16 inline-block",children:t("section.coding.message.".concat(a+1))},a));return(0,n.jsx)("section",{className:"h-400vh bg-gradient-to-b from-zinc-600 to-neutral-500",children:(0,n.jsxs)("div",{ref:s,className:"coding h-100vh w-full px-2 pb-2 sticky top-0 flex flex-col items-center justify-start lg:justify-center",children:[(0,n.jsxs)("div",{className:"flex items-center justify-center flex-col lg:flex-row pt-18 lg:pt-5 pb-7 lg:pb-5 flex-shrink-0 w-full",children:[(0,n.jsx)("img",{src:"".concat("/about-me-mix/assets","/avatar.png"),alt:"",className:"w-20 h-20 mb-3 lg:mb-0 lg:w-30 lg:h-30 shadow-lg rounded-full"}),(0,n.jsxs)("div",{className:"flex-shrink-0 max-w-100 flex-none lg:flex-1 lg:ml-10 text-4 lg:text-5 relative",children:[(0,n.jsx)("p",{className:"coding__dialogue origin-top lg:origin-left bg-white rounded-3 shadow-lg px-3 lg:px-5 leading-10 lg:leading-16 inline-block","data-step":"0",children:t("section.coding.message.0")}),e]})]}),(0,n.jsxs)("div",{className:"text-3 overflow-hidden lg:text-4 flex text-white w-full h-130 lg:max-w-180 p-2 lg:p-5 flex-1 lg:flex-none rounded-1 lg:rounded-2 bg-zinc-800",children:[r,(0,n.jsx)(I,{})]})]})})},[t])}function W(){let{index:e=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{t}=(0,T.$G)(),[a,l]=(0,i.useState)();(0,i.useEffect)(()=>(null==a||a.resetSize(null==d?void 0:d.progress),()=>{null==a||a.kill()}),[a]);let s=(0,i.useRef)(null);(0,i.useEffect)(()=>{var e;let t=null===(e=s.current)||void 0===e?void 0:e.querySelector("canvas");if(!t)return;let a=!1;return P(t,{bg:"#737373",bg2:"#fcd34d",noise:"".concat("/about-me-mix/assets","/noise.jpg"),noise2:"".concat("/about-me-mix/assets","/noise2.jpg")},!1).then(e=>!a&&l(e)),()=>{a=!0}},[]);let r=(0,z.CG)(e=>e.website.sizeUpdateTimestamp);(0,i.useEffect)(()=>{null==a||a.resetSize()},[r]);let{position:d}=D(e,e=>{let{hidden:t,progress:n}=e;s.current&&(s.current.style.display=t?"none":""),t||null==a||a.progress(n)});return(0,i.useMemo)(()=>(0,n.jsx)("section",{className:"h-300vh",children:(0,n.jsxs)("div",{ref:s,className:"h-full",children:[(0,n.jsx)("canvas",{className:"h-100vh w-full sticky top-0 z-10 pointer-events-none"}),(0,n.jsx)("div",{className:"h-100vh"}),(0,n.jsx)("div",{className:"w-full h-100vh relative z-0 flex items-center justify-center font-bold text-white text-10 lg:text-16",children:t("thank")})]})}),[t])}var $=!0,F=()=>{let e=(0,l.I0)(),t=(0,i.useRef)([]),a=(0,z.CG)(e=>e.website.sizeUpdateTimestamp),r=(0,i.useRef)(null);(0,i.useEffect)(()=>{r.current&&(t.current=d(r.current),c())},[r,a]);let c=()=>e((0,s.c)(o(t.current)));return(0,i.useEffect)(()=>(window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}),[]),(0,n.jsx)("main",{ref:r,children:[G,M,L,H,W].map((e,t)=>(0,n.jsx)(e,{index:t},t))})}},1935:function(){},1917:function(){}},function(e){e.O(0,[722,452,838,774,888,179],function(){return e(e.s=2823)}),_N_E=e.O()}]);