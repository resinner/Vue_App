(function(){"use strict";var t={4620:function(t,e,n){n.d(e,{Z:function(){return c}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._t("default",(function(){return[t._v("Default value")]}))],2)},r=[],a={name:"container"},i=a,s=n(1001),u=(0,s.Z)(i,o,r,!1,null,"41070092",null),c=u.exports},6674:function(t,e,n){var o=n(144),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Notification"),e("div",{staticClass:"content"},[e("AppHeader"),e("router-view")],1),e("AppFooter")],1)},a=[],i=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"})},s=[],u={name:"Footer"},c=u,l=n(1001),f=(0,l.Z)(c,i,s,!1,null,"af152f12",null),p=f.exports,d=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("Container",[e("div",{staticClass:"header__content"},[e("router-link",{attrs:{to:"/"}},[e("Logo")],1),t.isLoggedIn?e("AccountActions"):e("AuthActions")],1)])],1)},h=[],m=n(4620),g=function(){var t=this,e=t._self._c;return e("img",{attrs:{src:n(3925),alt:"logo"}})},v=[],_={name:"Logo"},b=_,y=(0,l.Z)(b,g,v,!1,null,null,null),C=y.exports,k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"auth-actions"},[e("router-link",{staticClass:"auth-actions__link",attrs:{to:{name:"login-page"}}},[t._v("Вхід ")]),t._v(" / "),e("router-link",{staticClass:"auth-actions__link",attrs:{to:{name:"registration-page"}}},[t._v(" Реєстрація ")])],1)},A=[],w={},O=w,Z=(0,l.Z)(O,k,A,!1,null,"f05146ec",null),x=Z.exports,L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"account-actions",on:{mouseover:t.open,mouseleave:t.close}},[e("button",{staticClass:"account-actions__btn",on:{click:t.toggle}},[e("span",{staticClass:"account-actions__text"},[t._v("Профіль")]),e("svg",{staticClass:"account-actions__icon",attrs:{width:"16",height:"18",viewBox:"0 0 16 18",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M8 0C5.38286 0 3.25391 2.12896 3.25391 4.74609C3.25391 7.36323 5.38286 9.49219 8 9.49219C10.6171 9.49219 12.7461 7.36323 12.7461 4.74609C12.7461 2.12896 10.6171 0 8 0Z"}}),e("path",{attrs:{d:"M15.8216 14.0161C14.4028 11.8877 12.0282 10.6172 9.4708 10.6172H6.5292C3.9718 10.6172 1.5972 11.8877 0.178438 14.0161L0.0898438 14.1489V18H15.9102H15.9102V14.1489L15.8216 14.0161Z"}})])]),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"account-actions__list"},[e("li",{staticClass:"account-actions__item"},[e("router-link",{staticClass:"account-actions__link",attrs:{to:{name:"my-orders"}}},[t._v("Мої замовлення")])],1),e("li",{staticClass:"account-actions__item"},[e("button",{staticClass:"account-actions__logout",on:{click:t.handleLogout}},[t._v(" Вийти ")])])])])},j=[],E=(n(7658),n(629)),N={name:"AccountActions",data(){return{isOpen:!1}},methods:{...(0,E.nv)("auth",["logout"]),open(){this.isOpen=!0},close(){this.isOpen=!1},toggle(){this.isOpen=!this.isOpen},async handleLogout(){try{await this.logout();const{requiresAuth:t}=this.$route.meta;t&&this.$router.push({name:"login-page"})}catch(t){this.$notify({type:"error",title:"Логаут не вдався"})}}}},P=N,S=(0,l.Z)(P,L,j,!1,null,"02b76762",null),T=S.exports,F={name:"Header",components:{Container:m.Z,Logo:C,AuthActions:x,AccountActions:T},computed:{...(0,E.Se)("auth",["isLoggedIn"])}},D=F,U=(0,l.Z)(D,d,h,!1,null,"f1236e9e",null),q=U.exports,B=function(){var t=this,e=t._self._c;return e("notifications",{attrs:{classes:"vue-notification"}})},H=[],I={name:"Notification"},M=I,$=(0,l.Z)(M,B,H,!1,null,"4dc7c99e",null),V=$.exports,z={name:"App",components:{AppFooter:p,AppHeader:q,Notification:V}},K=z,R=(0,l.Z)(K,r,a,!1,null,"5f53a638",null),G=R.exports,J=n(8345),Q=function(){var t=this;t._self._c;return t._m(0)},W=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"error-container"},[e("section",{staticClass:"error"},[e("h1",{staticClass:"error__title"},[t._v("Такої сторінки не існує!")])])])}],X={name:"ErrorPage"},Y=X,tt=(0,l.Z)(Y,Q,W,!1,null,"a8a8052c",null),et=tt.exports,nt=n(4399);const ot=()=>n.e(139).then(n.bind(n,4139)),rt=()=>n.e(606).then(n.bind(n,606)),at=()=>n.e(195).then(n.bind(n,3195)),it=()=>n.e(755).then(n.bind(n,6755)),st=()=>n.e(397).then(n.bind(n,2397)),ut=[{path:"/",component:ot,name:"homepage"},{path:"/apartments/:id",component:rt,name:"apartment",meta:{requiresAuth:!0}},{path:"/my-orders",component:st,name:"my-orders",meta:{requiresAuth:!0}},{path:"/login",component:at,name:"login-page",meta:{hideForAuth:!0}},{path:"/registration",component:it,name:"registration-page",meta:{hideForAuth:!0}},{path:"*",component:et,name:"error-page"}],ct=new J.ZP({routes:ut,mode:"history"});ct.beforeEach(((t,e,n)=>{const o=nt["default"].getters["auth/isLoggedIn"];t.matched.some((t=>t.meta.requiresAuth))&&(o||n({name:"login-page"})),t.matched.some((t=>t.meta.hideForAuth))&&o&&n({name:"homepage"}),n()}));var lt=ct,ft=n(4765),pt=n.n(ft);o["default"].config.productionTip=!1,o["default"].use(J.ZP),o["default"].use(pt()),new o["default"]({render:t=>t(G),router:lt,store:nt["default"]}).$mount("#app")},4399:function(t,e,n){n.d(e,{default:function(){return h}});var o=n(144),r=n(629),a=n(8042);const i=t=>a.Z.post("/users/login",t),s=t=>a.Z.post("/users/register",t),u=()=>a.Z.post("/users/logout"),c={user:null,token:""};var l={namespaced:!0,state:{...c},getters:{isLoggedIn(t){return Boolean(t.token)}},mutations:{setUserData(t,e){t.user=e},setToken(t,e){t.token=e},clearUserData(t){Object.assign(t,{...c})}},actions:{async login({commit:t},e){const{data:n}=await i(e),{user:o,token:r}=n;t("setUserData",o),t("setToken",r)},async registerUSer({commit:t},e){const{data:n}=await s(e),{user:o,token:r}=n;t("setUserData",o),t("setToken",r)},async logout({commit:t}){await u(),t("clearUserData")}}},f=n(4702);o["default"].use(r.ZP);const p=(0,f.Z)({paths:["auth.token"]}),d=new r.ZP.Store({modules:{auth:l},plugins:[p]});var h=d},8042:function(t,e,n){var o=n(6154),r=n(4399);const a=o.Z.create({baseURL:"https://apt-booking-api.herokuapp.com/"});a.interceptors.request.use((t=>{const{token:e}=r["default"].state.auth;return e&&(t.headers.Authorization=`Bearer ${e}`),t}),(t=>Promise.reject(t))),e.Z=a},3925:function(t,e,n){t.exports=n.p+"img/logo.34eb265e.svg"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{139:"a1cba705",195:"d7e6f55c",397:"40a5abc4",606:"cb22d6ff",755:"f0bee665"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{139:"e43aefad",195:"c79fce87",397:"6d29d3eb",606:"07524641",755:"38c79cf8"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="my-first-app:";n.l=function(o,r,a,i){if(t[o])t[o].push(r);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==e+a){s=f;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=o),t[o]=[r];var p=function(e,n){s.onerror=s.onload=null,clearTimeout(d);var r=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/Vue_App/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode&&a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=i,a.href=e,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===t||a===e))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===t||a===e)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(e(i,s))return r();t(o,s,null,r,a)}))},r={143:0};n.f.miniCss=function(t,e){var n={139:1,195:1,397:1,606:1,755:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(e),s=new Error,u=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],s=o[1],u=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var l=u(n)}for(e&&e(o);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},o=self["webpackChunkmy_first_app"]=self["webpackChunkmy_first_app"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6674)}));o=n.O(o)})();
//# sourceMappingURL=app.c1758fb2.js.map