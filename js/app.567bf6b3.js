(function(e){function t(t){for(var o,s,n=t[0],r=t[1],l=t[2],p=0,v=[];p<n.length;p++)s=n[p],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&v.push(c[s][0]),c[s]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);d&&d(t);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],o=!0,n=1;n<a.length;n++){var r=a[n];0!==c[r]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var o={},c={app:0},i=[];function s(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=o,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(a,o,function(t){return e[t]}.bind(null,o));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],r=n.push.bind(n);n.push=t,n=n.slice();for(var l=0;l<n.length;l++)t(n[l]);var d=r;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0aa3":function(e,t,a){e.exports=a.p+"img/20.a878d93e.png"},"0ff4":function(e,t,a){e.exports=a.p+"img/carrinho.32cc2627.png"},1:function(e,t){},"16c3":function(e,t,a){e.exports=a.p+"img/site-eucatur.a5dced8d.png"},2:function(e,t){},2552:function(e,t,a){e.exports=a.p+"img/7.96c55ed2.png"},2559:function(e,t,a){e.exports=a.p+"img/4.b6a36cbe.jpg"},3221:function(e,t,a){},"443a":function(e,t,a){e.exports=a.p+"img/11.436964b0.jpg"},"446d":function(e,t,a){e.exports=a.p+"img/18.9c910a96.png"},4978:function(e,t,a){e.exports=a.p+"img/17.40baab8c.png"},"4ccc":function(e,t,a){"use strict";a("b532")},"51ac":function(e,t,a){e.exports=a.p+"img/15.a3534f06.png"},"55f8":function(e,t,a){e.exports=a.p+"img/sso-eucatur.e0ad1c14.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("7a23");function c(e,t,a,c,i,s){var n=Object(o["z"])("Header"),r=Object(o["z"])("Home"),l=Object(o["z"])("Footer");return Object(o["r"])(),Object(o["d"])("div",null,[Object(o["g"])(n),Object(o["g"])(r),Object(o["g"])(l)])}a("9911");var i={class:"navbar navbar-expand-lg bg-light navbar-light"},s={class:"container-fluid header"},n=Object(o["e"])("span",{class:"fas fa-times-circle"},null,-1),r=[n],l=Object(o["e"])("span",{class:"fas fa-bars"},null,-1),d=[l],p={class:"collapse navbar-collapse justify-content-between",id:"navbarCollapse"},v={class:"navbar-nav ml-auto"};function b(e,t,a,c,n,l){return Object(o["r"])(),Object(o["d"])("header",i,[Object(o["e"])("div",s,[Object(o["e"])("a",{class:Object(o["m"])(["/"===l.link?"active":"","navbar-brand"]),href:"/"},"DevFolio",2),n.isOpen?(Object(o["r"])(),Object(o["d"])("button",{key:0,onClick:t[0]||(t[0]=function(e){return l.open()}),class:"navbar-toggler"},r)):(Object(o["r"])(),Object(o["d"])("button",{key:1,onClick:t[1]||(t[1]=function(e){return l.open()}),class:"navbar-toggler"},d)),Object(o["e"])("div",p,[Object(o["e"])("div",v,[Object(o["e"])("a",{class:Object(o["m"])(["/"===l.link?"active":"#home","nav-item nav-link active"]),href:"#home"},"Home",2),Object(o["e"])("a",{class:Object(o["m"])(["/"===l.link?"active":"#about","nav-item nav-link"]),href:"#about"},"About",2),Object(o["e"])("a",{class:Object(o["m"])(["/"===l.link?"active":"#service","nav-item nav-link"]),href:"#service"},"Service",2),Object(o["e"])("a",{class:Object(o["m"])(["/"===l.link?"active":"#experience","nav-item nav-link"]),href:"#experience"},"Experience",2),Object(o["e"])("a",{class:Object(o["m"])(["/"===l.link?"active":"#portfolio","nav-item nav-link"]),href:"#portfolio"},"Portfolio",2),Object(o["e"])("a",{class:Object(o["m"])(["/"===l.link?"active":"#courses","nav-item nav-link"]),href:"#courses"},"Courses",2)])])])])}var u={name:"Header",data:function(){return{isOpen:!1}},computed:{link:{get:function(){return this.$route.path}}},methods:{open:function(){this.isOpen=!this.isOpen,this.isOpen?(document.getElementById("navbarCollapse").classList.remove("hide"),document.getElementById("navbarCollapse").classList.add("show")):(document.getElementById("navbarCollapse").classList.remove("show"),document.getElementById("navbarCollapse").classList.add("hide"))}}},f=a("6b0d"),m=a.n(f);const g=m()(u,[["render",b]]);var O=g,j={"data-spy":"scroll","data-target":".navbar","data-offset":"51"};function h(e,t,a,c,i,s){var n=Object(o["z"])("Hero"),r=Object(o["z"])("About"),l=Object(o["z"])("Services"),d=Object(o["z"])("Experience"),p=Object(o["z"])("Portfolio"),v=Object(o["z"])("Courses");return Object(o["r"])(),Object(o["d"])("div",j,[Object(o["g"])(n),Object(o["g"])(r),Object(o["g"])(l),Object(o["g"])(d),Object(o["g"])(p),Object(o["g"])(v)])}var w=a("9358"),x=a.n(w),y={class:"hero",id:"home"},k=Object(o["e"])("div",{class:"container-fluid"},[Object(o["e"])("div",{class:"row align-items-center"},[Object(o["e"])("div",{class:"col-sm-12 col-md-6"},[Object(o["e"])("div",{class:"hero-content"},[Object(o["e"])("div",{class:"hero-text"},[Object(o["e"])("p",null,"I'm"),Object(o["e"])("h1",null,"Eder Antonio"),Object(o["e"])("h2"),Object(o["e"])("div",{class:"typed-text"}," Web Developer, Front-End Developer, Apps Developer ")])])]),Object(o["e"])("div",{class:"col-sm-12 col-md-6 d-none d-md-block"},[Object(o["e"])("div",{class:"hero-image"},[Object(o["e"])("img",{src:x.a,alt:"Hero Image"})])])])],-1),I=[k];function E(e,t,a,c,i,s){return Object(o["r"])(),Object(o["d"])("div",y,I)}a("ac1f"),a("1276");var S=a("1157"),P=a.n(S),C=a("10b3"),A=a.n(C),T=P.a,U={name:"Hero",mounted:function(){if(1==T(".hero .hero-text h2").length){var e=T(".hero .hero-text .typed-text").text();new A.a(".hero .hero-text h2",{strings:e.split(", "),typeSpeed:100,backSpeed:20,smartBackspace:!1,loop:!0})}}};a("a74c");const M=m()(U,[["render",E]]);var H=M,R={class:"about wow fadeInUp","data-wow-delay":"0.1s",id:"about"},B={class:"container-fluid"},L={class:"row align-items-center"},z={class:"col-lg-12 row"},F={class:"container"},_=Object(o["f"])('<div class="section-header text-left"><h2>About Me</h2></div><div class="about-text"><div> Hi! My name is Eder Antonio and here I share my projects in development. <br> I am developer Pleno Front-End Developer at Eulabs and Bachelors degree in systems developmentcomputer at (Faculdade Rolim de Moura - FAROL(RO)). </div><p>My Tech Stacks is: <br></p><p><b>Front-End</b>: Vuejs, NodeJs, Sass, QuasarJs, Cordova <br><b>Back-End</b>: Golang, PHP, MySql, PostgreSQL<br></p></div>',2),D={class:"skills"},N=Object(o["e"])("div",{class:"skill-name"},[Object(o["e"])("p",null,"Front-End"),Object(o["e"])("p",null,"70%")],-1),W={class:""},V=Object(o["e"])("div",{class:"skill-name"},[Object(o["e"])("p",null,"Back-End"),Object(o["e"])("p",null,"30%")],-1),q={class:""};function J(e,t,a,c,i,s){var n=Object(o["z"])("base-progress");return Object(o["r"])(),Object(o["d"])("div",R,[Object(o["e"])("div",B,[Object(o["e"])("div",L,[Object(o["e"])("div",z,[Object(o["e"])("div",F,[_,Object(o["e"])("div",D,[N,Object(o["e"])("div",W,[Object(o["g"])(n,{key:1,color:"blue",percentage:70,class:"mx-2 mb-2"})]),V,Object(o["e"])("div",q,[Object(o["g"])(n,{key:2,color:"blue",percentage:30,class:"mx-2 mb-2"})])])])])])])])}var G=["aria-valuenow"],Q={class:"flex items-center h-full"};function X(e,t,a,c,i,s){return Object(o["r"])(),Object(o["d"])("div",{class:Object(o["m"])(["w-full bg-gray-200 h-2 relative overflow-hidden",[{"rounded-full":a.rounded},{indeterminate:a.indeterminate}]])},[Object(o["e"])("div",{class:Object(o["m"])(["h-full progressbar",["bg-".concat(a.color,"-500"),{"absolute top-0":a.indeterminate},{"rounded-full":a.rounded}]]),role:"progressbar",style:Object(o["n"])({width:"".concat(a.percentage,"%")}),"aria-valuenow":a.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[Object(o["e"])("span",Q,[Object(o["y"])(e.$slots,"default",{},void 0,!0)])],14,G)],2)}a("a9e3");var $={name:"BaseProgress",inheritAttrs:!1,props:{color:{type:String,default:"teal"},percentage:{type:Number,default:0},rounded:{type:Boolean,default:!0},indeterminate:Boolean}};a("c007");const K=m()($,[["render",X],["__scopeId","data-v-28d3fc1f"]]);var Y=K,Z={name:"About",components:{BaseProgress:Y},data:function(){return{colors:["gray","yellow","orange","red","green","teal","blue","indigo","purple","pink"]}}};a("a831");const ee=m()(Z,[["render",J]]);var te=ee,ae={class:"service wow fadeInUp","data-wow-delay":"0.1s",id:"service"},oe=Object(o["f"])('<div class="container-fluid" data-v-2c9d08e4><div class="row align-items-center" data-v-2c9d08e4><div class="col-lg-12 row" data-v-2c9d08e4><div class="container" data-v-2c9d08e4><div class="section-header text-left wow zoomIn" data-wow-delay="0.1s" data-v-2c9d08e4><h2 data-v-2c9d08e4>What I do</h2></div><div class="row" data-v-2c9d08e4><div class="col-lg-6 wow fadeInUp" data-wow-delay="0.0s" data-v-2c9d08e4><div class="service-item" data-v-2c9d08e4><div class="service-icon" data-v-2c9d08e4><i class="fa fa-laptop" data-v-2c9d08e4></i></div><div class="service-text" data-v-2c9d08e4><h3 data-v-2c9d08e4>UX — User Experience </h3></div></div></div><div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s" data-v-2c9d08e4><div class="service-item" data-v-2c9d08e4><div class="service-icon" data-v-2c9d08e4><i class="fa fa-laptop-code" data-v-2c9d08e4></i></div><div class="service-text" data-v-2c9d08e4><h3 data-v-2c9d08e4>Web Development</h3></div></div></div><div class="col-lg-6 wow fadeInUp" data-wow-delay="0.4s" data-v-2c9d08e4><div class="service-item" data-v-2c9d08e4><div class="service-icon" data-v-2c9d08e4><i class="fa fa-cog" data-v-2c9d08e4></i></div><div class="service-text" data-v-2c9d08e4><h3 data-v-2c9d08e4>RESTful API with GOLANG</h3></div></div></div><div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s" data-v-2c9d08e4><div class="service-item" data-v-2c9d08e4><div class="service-icon" data-v-2c9d08e4><i class="fab fa-android" data-v-2c9d08e4></i></div><div class="service-text" data-v-2c9d08e4><h3 data-v-2c9d08e4>Apps Development</h3></div></div></div></div></div></div></div></div>',1),ce=[oe];function ie(e,t,a,c,i,s){return Object(o["r"])(),Object(o["d"])("div",ae,ce)}var se={name:"Services"};a("9543");const ne=m()(se,[["render",ie],["__scopeId","data-v-2c9d08e4"]]);var re=ne,le=Object(o["f"])('<div class="experience" id="experience"><div class="container"><header class="section-header text-center wow zoomIn" data-wow-delay="0.1s"><p>My Resume</p><h2>Working Experience</h2></header><div class="timeline"><div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s"><div class="timeline-text"><div class="timeline-date">May 2016 - Present</div><h2>Web Developer</h2><h4>EUCATUR - Empresa União Cascavel de Transportes e Turismo, JiParaná - RO</h4><p>‑ Desenvolver Front‑End dos sites da empresa.</p><p>‑ Gerar App Android e IOS Híbrido usando Cordova.</p><p>‑ Seguir Padrão do Layout criado pelo UX e UI. </p><p>‑ Integrar front as apis‑rest. </p><p>‑ Treinar novos desenvolvedores front‑end com padrões de escrita e cultura do departamento.</p></div></div><div class="timeline-item right wow slideInRight" data-wow-delay="0.1s"><div class="timeline-text"><div class="timeline-date">Jan 2013 - Apr 2016</div><h2>Técnico de Suporte em Campo</h2><h4>HSF SOFTWARE, Rolim de Moura - RO</h4><p>- Treinar novos clientes com o sistemas de automação comercial.</p><p>‑ Instalar Sistema em ambiente Window.</p><p>‑ Suporte e instalação as impressoras fiscais.</p></div></div><div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s"><div class="timeline-text"><div class="timeline-date">Oct 2012 - Nov 2012</div><h2>Tecnico de Urna</h2><h4>ENGETEC TECNOLOGICA, Rolim de Moura - RO</h4><p>‑ Suporte a urna Eletrônica durante as eleições de 2012.</p><p>‑ Orientar os mesários e eleitores sobre funcionamento das urnas.</p><p>‑ Enviar dados da urna ONLINE com sistema da justiça eleitoral.</p></div></div></div></div></div>',1),de=[le];function pe(e,t,a,c,i,s){return Object(o["r"])(),Object(o["d"])("div",null,de)}var ve={name:"Experience"};const be=m()(ve,[["render",pe]]);var ue=be,fe=a("16c3"),me=a.n(fe),ge=a("55f8"),Oe=a.n(ge),je=a("f6cb"),he=a.n(je),we=a("ba97"),xe=a.n(we),ye=a("817c"),ke=a.n(ye),Ie=a("0ff4"),Ee=a.n(Ie),Se={class:"portfolio",id:"portfolio"},Pe=Object(o["e"])("div",{class:"container"},[Object(o["e"])("div",{class:"section-header text-center wow zoomIn","data-wow-delay":"0.1s"},[Object(o["e"])("p",null,"My Portfolio"),Object(o["e"])("h2",null,"My Excellent Portfolio")]),Object(o["e"])("div",{class:"row portfolio-container"},[Object(o["e"])("div",{class:"col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp","data-wow-delay":"0.0s"},[Object(o["e"])("div",{class:"portfolio-wrap"},[Object(o["e"])("div",{class:"portfolio-img"},[Object(o["e"])("img",{src:me.a,alt:"Image"})]),Object(o["e"])("div",{class:"portfolio-text"},[Object(o["e"])("h3",null,"eCommerce Eucatur"),Object(o["e"])("a",{class:"btn",href:"https://www.eucatur.com.br/",target:"new","data-lightbox":"portfolio"},"+")])])]),Object(o["e"])("div",{class:"col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp","data-wow-delay":"0.2s"},[Object(o["e"])("div",{class:"portfolio-wrap"},[Object(o["e"])("div",{class:"portfolio-img"},[Object(o["e"])("img",{src:Oe.a,alt:"Image"})]),Object(o["e"])("div",{class:"portfolio-text"},[Object(o["e"])("h3",null,"SSO KeyCloak"),Object(o["e"])("a",{class:"btn",href:"https://accounts.eucatur.com.br/saml/sso",target:"new","data-lightbox":"portfolio"},"+")])])]),Object(o["e"])("div",{class:"col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp","data-wow-delay":"0.4s"},[Object(o["e"])("div",{class:"portfolio-wrap"},[Object(o["e"])("div",{class:"portfolio-img"},[Object(o["e"])("img",{src:he.a,alt:"Image"})]),Object(o["e"])("div",{class:"portfolio-text"},[Object(o["e"])("h3",null,"Marketplace QOP "),Object(o["e"])("a",{class:"btn",href:"https://qop.net.br/","data-lightbox":"portfolio",target:"new"},"+")])])]),Object(o["e"])("div",{class:"col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp","data-wow-delay":"0.6s"},[Object(o["e"])("div",{class:"portfolio-wrap"},[Object(o["e"])("div",{class:"portfolio-img"},[Object(o["e"])("img",{src:xe.a,alt:"Image"})]),Object(o["e"])("div",{class:"portfolio-text"},[Object(o["e"])("h3",null,"APP Eucatur Android"),Object(o["e"])("a",{class:"btn",href:"https://play.google.com/store/apps/details?id=br.com.eucatur&hl=pt_BR&gl=US","data-lightbox":"portfolio",target:"new"},"+")])])]),Object(o["e"])("div",{class:"col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp","data-wow-delay":"0.8s"},[Object(o["e"])("div",{class:"portfolio-wrap"},[Object(o["e"])("div",{class:"portfolio-img"},[Object(o["e"])("img",{src:ke.a,alt:"Image"})]),Object(o["e"])("div",{class:"portfolio-text"},[Object(o["e"])("h3",null,"NPS"),Object(o["e"])("a",{class:"btn","data-lightbox":"portfolio"},"+")])])]),Object(o["e"])("div",{class:"col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp","data-wow-delay":"1s"},[Object(o["e"])("div",{class:"portfolio-wrap"},[Object(o["e"])("div",{class:"portfolio-img"},[Object(o["e"])("img",{src:Ee.a,alt:"Image"})]),Object(o["e"])("div",{class:"portfolio-text"},[Object(o["e"])("h3",null,"Serviço de Carrinho abandonado"),Object(o["e"])("a",{class:"btn","data-lightbox":"portfolio"},"+")])])])])],-1),Ce=[Pe];function Ae(e,t,a,c,i,s){return Object(o["r"])(),Object(o["d"])("div",Se,Ce)}var Te={name:"Portfolio"};const Ue=m()(Te,[["render",Ae]]);var Me=Ue,He={class:"portfolio",id:"courses"},Re={class:"container"},Be=Object(o["e"])("div",{class:"section-header text-center wow zoomIn","data-wow-delay":"0.1s"},[Object(o["e"])("p",null,"My courses"),Object(o["e"])("h2",null,"Never stop studying")],-1),Le={class:"row portfolio-container"},ze={class:"portfolio-wrap"},Fe={class:"portfolio-img"},_e=["src"],De={class:"portfolio-text"},Ne=["href"];function We(e,t,a,c,i,s){return Object(o["r"])(),Object(o["d"])("div",He,[Object(o["e"])("div",Re,[Be,Object(o["e"])("div",Le,[(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["x"])(i.list,(function(e,t){return Object(o["r"])(),Object(o["d"])("div",{class:"col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp","data-wow-delay":"0.0s",key:t},[Object(o["e"])("div",ze,[Object(o["e"])("div",Fe,[Object(o["e"])("img",{src:e.img,alt:"Image"},null,8,_e)]),Object(o["e"])("div",De,[Object(o["e"])("h3",null,Object(o["B"])(e.course),1),Object(o["e"])("a",{class:"btn",href:e.img,target:"new","data-lightbox":"portfolio"},"+",8,Ne)])])])})),128))])])])}var Ve={name:"courses",data:function(){return{list:[{course:"Vuejs 3, Vuex e Vue Router",img:a("b0c8")},{course:"Analytics para iniciantes",img:a("6166")},{course:"Scrum",img:a("6ce7")},{course:"Vuejs 2",img:a("2559")},{course:"Vuejs com PWA",img:a("9de1")},{course:"Docker",img:a("de94")},{course:"Levantamento de requisitos",img:a("2552")},{course:"Liderança",img:a("fac0")},{course:"HTML5 Web Storage",img:a("d58c")},{course:"HTML Básico",img:a("ee05")},{course:"CSS/Sass",img:a("443a")},{course:"Vuejs 01",img:a("8f94")},{course:"Vuejs 02",img:a("b4dd")},{course:"Fundamentos do JavaScript",img:a("a58d")},{course:"Introdução ao JavaScript",img:a("51ac")},{course:"O que é .NET",img:a("fc49")},{course:"O que é NPM",img:a("4978")},{course:"O que é Vuejs",img:a("446d")},{course:"O que é PHP",img:a("63fa")},{course:"PHP iniciantes",img:a("0aa3")}]}}};const qe=m()(Ve,[["render",We]]);var Je=qe,Ge={name:"home",components:{Hero:H,About:te,Services:re,Experience:ue,Portfolio:Me,Courses:Je}};const Qe=m()(Ge,[["render",h]]);var Xe=Qe,$e=Object(o["f"])('<footer class="footer wow fadeIn" data-wow-delay="0.3s"><div class="container-fluid footer"><div class="container"><div class="footer-info"><h2>Eder Antonio</h2><h3>Rolim de Moura - RO Brazil</h3><div class="footer-menu"><p>+55 069 98479-3758</p><p>antonioeder007@gmail.com</p></div><div class="footer-social"><a target="blank" href="https://www.facebook.com/Ederantonio1993/"><i class="fab fa-facebook-f"></i></a><a target="blank" href="https://www.instagram.com/eder_antoniio/"><i class="fab fa-instagram"></i></a><a target="blank" href="https://www.linkedin.com/in/eder-antonio-3b7021122/"><i class="fab fa-linkedin-in"></i></a><a target="blank" href="https://github.com/antonioEDER"><i class="fab fa-github"></i></a></div></div></div><div class="container copyright"><p></p></div></div></footer><a href="#" class="btn back-to-top"><i class="fa fa-chevron-up"></i></a><div id="loader" class="show"><div class="loader"></div></div>',3),Ke=[$e];function Ye(e,t,a,c,i,s){return Object(o["r"])(),Object(o["d"])("div",null,Ke)}var Ze={name:"Footer"};const et=m()(Ze,[["render",Ye]]);var tt=et,at={name:"App",data:function(){return{text:void 0}},components:{Header:O,Home:Xe,Footer:tt}};a("4ccc");const ot=m()(at,[["render",c],["__scopeId","data-v-44369d17"]]);var ct=ot,it=a("5502"),st=Object(it["a"])({state:{},mutations:{},actions:{},modules:{}}),nt=a("bc3a"),rt=a.n(nt),lt=a("130e"),dt=a("6c02"),pt=[{path:"/",name:"Home",component:Xe}],vt=Object(dt["a"])({history:Object(dt["b"])(),routes:pt}),bt=vt,ut=(a("78a7"),a("f9e3"),a("2dd8"),a("9dbe"),a("15f5"),a("7051"),a("bb9d"),a("4989"),a("6a5c"),a("84d3"),a("8a60"),a("bc1b")),ft=a.n(ut),mt=P.a,gt=function(){setTimeout((function(){mt("#loader").length>0&&mt("#loader").removeClass("show")}),1)};if(gt(),(new ft.a.WOW).init(),mt(window).scroll((function(){mt(this).scrollTop()>200?mt(".back-to-top").fadeIn("slow"):mt(".back-to-top").fadeOut("slow")})),mt(".back-to-top").click((function(){return mt("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),mt(window).scroll((function(){mt(this).scrollTop()>0?mt(".navbar").addClass("nav-sticky"):mt(".navbar").removeClass("nav-sticky")})),mt(".navbar-nav a").on("click",(function(e){""!==this.hash&&(e.preventDefault(),mt("html, body").animate({scrollTop:mt(this.hash).offset().top-45},1e3,"easeInOutExpo"),mt(this).parents(".navbar-nav").length&&(mt(".navbar-nav .active").removeClass("active"),mt(this).closest("a").addClass("active")))})),1==mt(".hero .hero-text h2").length){var Ot=mt(".hero .hero-text .typed-text").text();new A.a(".hero .hero-text h2",{strings:Ot.split(", "),typeSpeed:100,backSpeed:20,smartBackspace:!1,loop:!0})}Object(o["c"])(ct).use(st).use(bt).use(lt["a"],rt.a).mount("#app")},6166:function(e,t,a){e.exports=a.p+"img/2.04ef0637.png"},"63fa":function(e,t,a){e.exports=a.p+"img/19.9b45b6a3.png"},"6ce7":function(e,t,a){e.exports=a.p+"img/3.ce08c09a.png"},"78a7":function(e,t,a){},"817c":function(e,t,a){e.exports=a.p+"img/nps.a6dccbaf.png"},"8f94":function(e,t,a){e.exports=a.p+"img/12.7af480e7.jpg"},9358:function(e,t,a){e.exports=a.p+"img/i.546e147e.jpg"},9543:function(e,t,a){"use strict";a("e2a3")},"9de1":function(e,t,a){e.exports=a.p+"img/5.e6675fb5.jpg"},"9fd8":function(e,t,a){},a58d:function(e,t,a){e.exports=a.p+"img/14.cd88c711.png"},a74c:function(e,t,a){"use strict";a("e004")},a831:function(e,t,a){"use strict";a("9fd8")},b0c8:function(e,t,a){e.exports=a.p+"img/1.b9f902cd.jpg"},b4dd:function(e,t,a){e.exports=a.p+"img/13.dc25421a.jpg"},b532:function(e,t,a){},ba97:function(e,t,a){e.exports=a.p+"img/app-eucatur.c8985ae4.png"},c007:function(e,t,a){"use strict";a("3221")},d58c:function(e,t,a){e.exports=a.p+"img/9.8594abfc.png"},de94:function(e,t,a){e.exports=a.p+"img/6.b567f146.png"},e004:function(e,t,a){},e2a3:function(e,t,a){},ee05:function(e,t,a){e.exports=a.p+"img/10.da44419b.jpg"},f6cb:function(e,t,a){e.exports=a.p+"img/qop.4d3dd644.png"},fac0:function(e,t,a){e.exports=a.p+"img/8.6c17f1b5.png"},fc49:function(e,t,a){e.exports=a.p+"img/16.9b9bd20a.png"}});
//# sourceMappingURL=app.567bf6b3.js.map