(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{122:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),o=t(65),i=t.n(o),c=t(15),s=t(25),l=t(68),d=t(69),p=t(10),u="GET_NETFLIX_ORIGINALS",b="GET_TRENDING_MOVIES",h="GET_TOP_RATED_MOVIES",x="GET_ACTION_MOVIES",j="GET_COMEDY_MOVIES",v="GET_HORROR_MOVIES",m="GET_ROMANCE_MOVIES",f="GET_DOCUMENTARIES",g="GET_SEARCH_MOVIES",O="SET_MOVIE_DETAILS",w={NetflixOriginals:null,TrendingMovies:null,TopRatedMovies:null,ActionMovies:null,ComedyMovies:null,HorrorMovies:null,RomanceMovies:null,Documentaries:null,MoviesDetail:null,SearchMovies:null},y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0,t=e.type,r=e.payload;switch(t){case u:return Object(p.a)(Object(p.a)({},n),{},{NetflixOriginals:r});case b:return Object(p.a)(Object(p.a)({},n),{},{TrendingMovies:r});case x:return Object(p.a)(Object(p.a)({},n),{},{ActionMovies:r});case j:return Object(p.a)(Object(p.a)({},n),{},{ComedyMovies:r});case f:return Object(p.a)(Object(p.a)({},n),{},{Documentaries:r});case v:return Object(p.a)(Object(p.a)({},n),{},{HorrorMovies:r});case h:return Object(p.a)(Object(p.a)({},n),{},{TopRatedMovies:r});case m:return Object(p.a)(Object(p.a)({},n),{},{RomanceMovies:r});case O:return Object(p.a)(Object(p.a)({},n),{},{MoviesDetail:r});case g:return Object(p.a)(Object(p.a)({},n),{},{SearchMovies:r});default:return n}},k=Object(s.combineReducers)({infoMovies:y}),M=[d.a],_=Object(s.createStore)(k,Object(l.composeWithDevTools)(s.applyMiddleware.apply(void 0,M))),S=(t(87),t(12)),E=t(6),N=t.p+"static/media/logooo.1051c193.png",T=t(44),I=t(13);function R(){var n=Object(r.useState)(0),e=Object(E.a)(n,2),t=e[0],a=e[1],o=function(){var n=window.scrollY||document.documentElement.scrollTop;a(n)};return Object(r.useEffect)((function(){return o(),window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[]),[t]}var z,C=function(){var n=Object(r.useState)(window.innerWidth||document.documentElement.clientWidth),e=Object(E.a)(n,2),t=e[0],a=e[1];return Object(r.useEffect)((function(){var n=function(){var n=window.innerWidth||document.documentElement.clientWidth;a(n)};return n(),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),[t]},D=t(5),G=t(3);var L=function(n){var e=R(),t=Object(E.a)(e,1)[0],a=Object(r.useState)(""),o=Object(E.a)(a,2),i=o[0],c=o[1],s=Object(D.l)();return Object(G.jsx)(A,{style:t<50?{backgroundColor:"transparent"}:{backgroundColor:"var(--color-background)"},children:Object(G.jsxs)("div",{className:"navContainer",children:[Object(G.jsx)("div",{className:"logo",onClick:function(){s("/netflix-clone"),c("")},children:Object(G.jsx)("img",{src:N,alt:""})}),Object(G.jsxs)("div",{className:"navSearch",children:[Object(G.jsx)(T.a,{className:"iconSearch"}),Object(G.jsx)("input",{type:"text",placeholder:"Input title, genres, people",onChange:function(n){var e=n.target.value;c(e),e.length>0?s("/search?keywords=".concat(e.trim())):s("/netflix-clone")},value:i})]})]})})},A=I.a.div(z||(z=Object(S.a)(["\n    width: 100%;\n    height: 80px;\n    position: fixed;\n    top: 0;\n    transition: all 1s ease-in;\n    z-index: 50;\n\n    media only screen and (max-width:600px) {\n        height: 100px;\n    }\n\n        .navContainer {\n            background-color: transparent;\n            display: flex;\n            align-items: center;\n            justify-content: flex-start;\n            height: 100%;\n            flex-direction: row;\n\n            media only screen and (max-width:600px) {\n                flex-direction: column;\n            }\n\n            .logo{\n                width: 120px;\n                cursor: pointer;\n                img {\n                    width:50%;\n                    margin-left:20px\n                }\n            }\n        \n\n            .navSearch {\n                color:var(--color-white);\n                padding-right: 20px;\n                display: flex;\n                justify-content: flex-end;\n                \n                &:hover .iconSearch {\n                    color: var(--color-white);\n                }\n                \n                .iconSearch {\n                    width:20px;\n                    height:20px;\n                    cursor:pointer;\n                    transform:translateX(24px) translateY(10px);\n                    color: #bbb;\n\n                }\n\n                input {\n                    font-size:14px;\n                    border: 1px solid #fff;\n                    color: white;\n                    outline:none;\n                    width: 0;\n                    padding:10px;\n                    cursor: pointer;\n                    opacity: 0;\n                    background:var(--color-background);\n                    transition: width 0.5s;\n\n                    &:focus {\n                        padding-left: 26px;\n                        width: 300px;\n                        cursor: text;\n                        opacity: 1;\n                        border-radius:4px;\n\n                    }\n                }\n            }\n        }\n"]))),V=t(54);function W(n,e,t,r){for(var a=t/100,o=0,i=0,c=window.scrollY;o<=e;)window.setTimeout(Y,o,n,i,a,r,c),o+=e/100,i++;window.scrollTo(0,c)}function Y(n,e,t,r,a){n.scrollLeft=t*e+r}function H(n){var e=Math.round(256*Math.random()),t=Math.round(256*Math.random()),r=Math.round(256*Math.random());return"rgba(".concat(e,", ").concat(t,", ").concat(r,", ").concat(n,")")}var B,P,X=t(7),U=t(9),F=t(124),J=(t(30),"74d1111ff793d2c86a4104bab872bc34"),q="https://api.themoviedb.org/3",K=function(n){return function(e){e({type:O,payload:n})}};var Q,Z=function(n){var e=n.movies,t=n.title,a=n.isPoster,o=n.idSection,i=Object(r.useRef)(),s=Object(r.useRef)(),l=Object(r.useState)(0),d=Object(E.a)(l,2),p=d[0],u=d[1],b=Object(r.useState)(0),h=Object(E.a)(b,2),x=h[0],j=h[1],v=Object(r.useState)(!1),m=Object(E.a)(v,2),f=m[0],g=m[1],O=C(),w=Object(E.a)(O,1)[0],y=Object(c.b)(),k=function(){var n=i.current.scrollWidth-i.current.clientWidth;i.current.scrollLeft<n&&W(i.current,250,2*s.current.clientWidth,i.current.scrollLeft)},M=function(){i.current.scrollLeft>0&&W(i.current,250,2*-s.current.clientWidth,i.current.scrollLeft)};return Object(r.useEffect)((function(){f&&(x<p&&k(),x>p&&M())}),[p,x,f]),Object(G.jsxs)($,{draggable:"false",id:o,children:[Object(G.jsx)("h1",{className:"heading",children:t}),Object(G.jsx)(nn,{ref:i,draggable:"true",onDragStart:function(n){g(!0),u(n.screenX)},onDragEnd:function(n){g(!1)},onDragEnter:function(n){j(n.screenX)},style:e&&e.length>0?{gridTemplateColumns:"repeat(".concat(e.length,", \n                                ").concat(w>1200?"360px":w>992?"300px":w>768?"250px":"200px","\n\n                            )")}:{},children:e&&e.length>0&&e.map((function(n,e){if(n.poster_path&&null!==n.backdrop_path){var t=a?"https://image.tmdb.org/t/p/original/".concat(n.poster_path):"https://image.tmdb.org/t/p/w500/".concat(n.backdrop_path);return Object(G.jsxs)("div",{className:"movieItem",ref:s,onClick:function(){return function(n){y(K(n))}(n)},children:[Object(G.jsx)("img",{src:t,alt:""}),Object(G.jsx)("div",{className:"movieName",children:n.title||n.name})]},e)}}))}),Object(G.jsxs)("div",{children:[Object(G.jsx)(V.a,{className:"btn btnLeft ".concat(a&&"isPoster"),onClick:M}),Object(G.jsx)(V.b,{className:"btn btnRight  ".concat(a&&"isPoster"),onClick:k})]})]})},$=I.a.div(B||(B=Object(S.a)(["\n    background-color: var(--color-background);\n    color: var(--color-white);\n    padding: 20px 20px 0;\n    position: relative;\n    width: 100%;\n    height: 100%;\n\n    .heading {\n        font-size: 18px;\n        margin-bottom: 12px;\n        user-select: none;\n    }\n\n    .btn {\n        position: absolute;\n        top: 50%;\n        z-index: 20;\n        transform-origin: center;\n        cursor: pointer;\n        background-color: rgba(0, 0, 0, 0.6 );\n        height: 50px;\n        width: 40px;\n        border-radius: 4px;\n        display: flex;\n        align-items: center;\n        transform: translateY(-20%);\n\n        &:hover {\n            background-color: rgba(0, 0, 0, 0.8);\n        }\n\n        %hover svg {\n            opacity: 1;\n            transform: scale(1.2);\n        }\n\n        svg {\n            opacity: 0.7;\n            font-size: 50px;\n            transition: all 0.3s linear;\n        }\n\n    }\n    \n    .btnLeft {\n        left: 30px;\n    }\n    \n    .btnRight {\n        right: 30px;\n    }\n    \n    .isPoster {\n        height: 80px;\n        width: 50px;\n    }\n"]))),nn=I.a.div(P||(P=Object(S.a)(["\n    display: grid;\n    gap: 6px;\n    transition: all 0.3s linear;\n    user-select: none;\n    overflow-y: hidden;\n    overflow-x: auto;\n    overflow: hidden;\n    padding-top: 28px;\n    padding-bottom: 28px;\n    scroll-behavior: smooth ;\n\n    &:hover .movieItem{\n        opacity: 0.5;\n    }\n\n    .movieItem {\n        transform: scale(1);\n        max-width: 400px;\n        max-height:500px;\n        width: 100%;\n        height: 100%;\n        transition: all 0.3s ease-out;\n        user-select: none;\n        overflow: hidden;\n        border-radius: 6px;\n        transform: center left;\n\n        &:hover{\n            opacity: 1;\n            transform: scale(1.1);\n            z-index:10;\n        }\n\n        img {\n            height: 100%;\n            width: 100%;\n            object-fit:cover;\n        }\n\n        .movieName {\n            position: absolute;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            padding:4px;\n            text-align: center;\n            font-size: 14px;\n            background-color: rgba(0, 0, 0, 0.65);\n        }\n    }\n\n"]))),en=t(28),tn=t(46);var rn,an=function(n){var e=Object(c.b)(),t=R(),a=Object(E.a)(t,1)[0],o=Object(c.c)((function(n){return n.infoMovies})),i=o.NetflixOriginals,s=o.TrendingMovies,l=o.ActionMovies,d=o.ComedyMovies,p=o.Documentaries,g=o.HorrorMovies,O=o.TopRatedMovies,w=o.RomanceMovies;return Object(r.useEffect)((function(){e(function(){var n=Object(U.a)(Object(X.a)().mark((function n(e){var t;return Object(X.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,F.a.get("".concat(q,"/discover/tv?api_key=").concat(J,"&with_networks=213"));case 3:t=n.sent,e({type:u,payload:t.data.results}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Get Netflix Originals error: ",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()),e(function(){var n=Object(U.a)(Object(X.a)().mark((function n(e){var t;return Object(X.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,F.a.get("".concat(q,"/trending/all/week?api_key=").concat(J,"&language=en-US"));case 3:t=n.sent,e({type:b,payload:t.data.results}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Get Trending movies error: ",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()),e(function(){var n=Object(U.a)(Object(X.a)().mark((function n(e){var t;return Object(X.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,F.a.get("".concat(q,"/discover/movie?api_key=").concat(J,"&with_genres=28"));case 3:t=n.sent,e({type:x,payload:t.data.results}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Get Action movies error: ",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()),e(function(){var n=Object(U.a)(Object(X.a)().mark((function n(e){var t;return Object(X.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,F.a.get("".concat(q,"/discover/movie?api_key=").concat(J,"&with_genres=99"));case 3:t=n.sent,e({type:f,payload:t.data.results}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Get Documentaries error: ",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()),e(function(){var n=Object(U.a)(Object(X.a)().mark((function n(e){var t;return Object(X.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,F.a.get("".concat(q,"/discover/movie?api_key=").concat(J,"&with_genres=27"));case 3:t=n.sent,e({type:v,payload:t.data.results}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Get Horror Movies error: ",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()),e(function(){var n=Object(U.a)(Object(X.a)().mark((function n(e){var t;return Object(X.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,F.a.get("".concat(q,"/discover/movie?api_key=").concat(J,"&with_genres=10749"));case 3:t=n.sent,e({type:m,payload:t.data.results}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Get Romance Movies error: ",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()),e(function(){var n=Object(U.a)(Object(X.a)().mark((function n(e){var t;return Object(X.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,F.a.get("".concat(q,"/discover/movie?api_key=").concat(J,"&with_genres=35"));case 3:t=n.sent,e({type:j,payload:t.data.results}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Get Comedy Movies error: ",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()),e(function(){var n=Object(U.a)(Object(X.a)().mark((function n(e){var t;return Object(X.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,F.a.get("".concat(q,"/movie/top_rated?api_key=").concat(J,"&language=en-US"));case 3:t=n.sent,e({type:h,payload:t.data.results}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Get Top rate movies error: ",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}())}),[e]),Object(G.jsxs)("div",{children:[Object(G.jsx)(Z,{movies:i,title:"Netflix Originals",isPoster:!0,idSection:"netflix"}),Object(G.jsx)(Z,{movies:s,title:"Trending Movies",idSection:"trending"}),Object(G.jsx)(Z,{movies:O,title:"Top Rated Movies",idSection:"topRated"}),Object(G.jsx)(Z,{movies:l,title:"Action Movies",idSection:"action"}),Object(G.jsx)(Z,{movies:d,title:"Comedy Movies",idSection:"comedy"}),Object(G.jsx)(Z,{movies:g,title:"Horror Movies",idSection:"horror"}),Object(G.jsx)(Z,{movies:w,title:"Romance Movies",idSection:"romance"}),Object(G.jsx)(Z,{movies:p,title:"Documentaries",idSection:"documentaries"}),Object(G.jsx)(on,{onClick:function(){tn.animateScroll.scrollToTop()},style:{visibility:"".concat(a>600?"visible":"hidden","\t")},children:Object(G.jsx)(en.a,{})})]})},on=I.a.div(Q||(Q=Object(S.a)(["\n    position: fixed;\n    z-index: 10;\n    right: 70px;\n    bottom: 50px;\n    font-size: 50px;\n    color: rgba(255, 255, 255, 0.4);\n    transition: all 0.3s linear;\n\n    &:hover {\n        color: rgba(255, 255, 255, 0.8);\n    }\n\n    @media screen and (min-width: 600px) {\n        right: 40px\n    }\n"]))),cn=t(75),sn=t.n(cn),ln=t(55);var dn,pn,un=function(n){var e=Object(r.useState)(!0),t=Object(E.a)(e,2),a=t[0],o=t[1];return Object(G.jsxs)(bn,{children:[Object(G.jsx)(sn.a,{playing:!0,loop:!0,width:"100%",height:"100%",volume:1,mutex:a,url:"https://vimeo.com/769839588",className:"videoIntro"}),Object(G.jsxs)("div",{className:"infoIntro",children:[Object(G.jsx)("h1",{className:"heading",children:"ORANGE x NETFLIX"}),Object(G.jsx)("p",{class:"overView",children:"ORANGE x NETFLIX Directed by Luisa Kracht"})]}),a?Object(G.jsx)(ln.a,{className:"btnVolume",onClick:function(){return o((function(n){return!n}))}}):Object(G.jsx)(ln.b,{className:"btnVolume",onClick:function(){return o((function(n){return!n}))}}),Object(G.jsx)("div",{className:"fadeBottom"})]})},bn=I.a.div(rn||(rn=Object(S.a)(["\n    background-color: var(--color-background);\n    position: relative;\n    color: var(--color-white);\n    padding-top:56%;\n\n    .videoIntro {\n        position: absolute;\n        top: -10px;\n        left: 0;\n    }\n\n    .infoIntro {\n        position: absolute;\n        top: 200px;\n        left: 30px;\n\n        @media screen and (max-width:800px) {\n            top: 150px;\n            left: 25px;\n        }\n\n        @media screen and (max-width:600px) {\n            top: 120px;\n            left: 15px;\n        }\n\n        .heading {\n            font-size: 60px;\n            transition: all 0.3s;\n\n            @media screen and (max-width:800px) {\n                font-size: 40px;\n            }\n\n            @media screen and (max-width:800px) {\n                font-size: 24px;\n            }\n        }\n\n        .overView {\n            max-Width:550px;\n            width: 100%;\n            line-height: 1.3;\n            padding-top:25px;\n            font-size:18px;\n\n            @media screen and (max-width:800px) {\n                font-size: 14px;\n                max-width:300px;\n            }\n\n            @media screen and (max-width:600px) {\n                font-size: 10px;\n                max-width: 180px;\n            }\n        }\n    }\n\n    .btnVolume {\n        position: absolute;\n        height: 35px;\n        width: 35px;\n        right: 10%;\n        top: 40%;\n        cursor: pointer;\n        border-radius: 50%;\n        padding: 6px;\n        color: #bbb;\n        border: #fff solid 1px;\n        transition: all 0.3s ease;\n        transform: scale(1);\n        z-index:2;\n        &:hover {\n            color: #fff;\n            transform: scale(1.2);\n            background-color: rgba(255, 255, 211, 0.18);\n        }\n\n        @media screen and (max-width:800px) {\n            height: 28px;\n            width:28px;\n            padding: 4px;\n        }\n\n        @media screen and (max-width:600px) {\n            height: 24px;\n            width:24px;\n            padding: 1px;\n        }\n    }\n\n    .fadeBottom {\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n        height: 100%;\n        background-image: linear-gradient(\n            180deg,\n            transparent,\n            rgba(15,15, 15, 0.6) 80%,\n            rgb(17,17,17),\n            rgb(17,17,17)\n        )\n    }\n"]))),hn=t(56),xn=t.n(hn);var jn=function(n){var e=n.movie,t=n.showModal,r=Object(c.b)();return Object(G.jsxs)(mn,{children:[Object(G.jsx)("div",{className:"backdrop ".concat(t?"showBackdrop":"hideBackdrop"),onClick:function(){r(K(null))}}),Object(G.jsx)("div",{className:"modal ".concat(t?"showModal":"hideModal"),style:e?{backgroundImage:"url(https://images.tmdb.org/t/p/original/".concat(e.backdrop_path||e.poster_path,")"),backgroundSize:"cover"}:{},children:Object(G.jsx)("div",{className:"container",children:Object(G.jsxs)("div",{className:"movieInfo",children:[Object(G.jsx)("h1",{className:"movieTitle",children:e&&(e.title||e.name)}),Object(G.jsxs)("p",{className:"statistical",children:[Object(G.jsxs)("span",{className:"rating",children:["Rating: ",e&&10*e.vote_average,"%"]}),Object(G.jsxs)("span",{className:"popular",children:["Popular: ",e&&e.popularity]})]}),Object(G.jsxs)("p",{className:"releaseDate",children:["Release Date:",e&&(xn()(e.release_date).format("DD/MM/YY")||xn()(e.first_air_date).format("DD/MM/YY"))]}),Object(G.jsxs)("p",{className:"runTime",children:["Runtime: ",e&&(e.runtime||e.episode_run_time)]}),Object(G.jsx)("p",{className:"overView",children:e&&e.overview})]})})})]})},vn=Object(I.b)(dn||(dn=Object(S.a)(["\n    0%: {\n        background: rgba(0,0,0,0)\n    }\n\n    100% {\n        background: rgba(0, 0, 0, 0.6)\n    }\n"]))),mn=I.a.div(pn||(pn=Object(S.a)(["\n    .backdrop {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 200;\n        background-color:rgba(0, 0, 0, 0.6 );\n        animation: "," 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;\n    }\n\n    .showBackdrop {\n        display: block;\n    }\n\n    .hideBackdrop {\n        display: none;\n    }\n\n    .modal {\n        position: fixed;\n        top: 25%;\n        left: 0;\n        z-index:250;\n        width: 100%;\n        height: 80%;\n        margin: 0 auto;\n        color: var(--color-white);\n        box-shadow: 0 15px 40px rgba(var(--color-dark), 0.2);\n        transition: all 0.3s ease;\n\n        @media screen and (min-width:1184px) {\n            height: 70%;\n        }\n        @media screen and (min-width:600px) {\n            height: 80%;\n        }\n\n        .container {\n            position:relative;\n            width: 70%;\n            height: 100%;\n            background: linear-gradient(90deg, rgba(0, 0, 0, 0.94) 60%, transparent);\n\n            @media screen and (min-width:1184px) {\n                background: linear-gradient(\n                    90deg,\n                    rgba(0, 0, 0, 0.95) 45%,\n                    rgba(0, 0, 0, 0.733)\n                    transparent\n                );\n                width: 88%;\n            }\n\n            @media screen and (min-width:980px) {\n                background: linear-gradient(\n                    90deg,\n                    rgba(0, 0, 0, 0.95) 50%,\n                    transparent\n                );\n                width: 100%;\n            }\n\n            @media screen and (min-width:600px) {\n                background: linear-gradient(\n                    90deg,\n                    rgba(0, 0, 0, 0.88) 60%,\n                    transparent\n                );\n            }\n\n            .movieInfo {\n                width: 65%;\n                height: 100%;\n                padding-left: 24px;\n                color: var(--color-white);\n                font-size: 20px;\n                padding-top: 30px;\n\n                @media screen and (min-width:600px) {\n                    font-size: 16px;\n                    width: 100%;\n                }\n\n                .movieTitle {\n                    margin-top: 30px;\n                }\n\n                .statistical {\n                    margin-top: 20px;\n                    display: flex;\n\n                    .rating {\n                        color: var(--color-green);\n                    }\n\n                    .popular {\n                        color: yellow;\n                        margin-left: 12px;\n                    }\n                }\n\n                .releaseDate .runTime {\n                    margin-top: 12px;\n                }\n\n                .overView {\n                    margin-top: 20px;\n                    color: rgba(255, 255, 255, 0.6);\n                    line-height: 1.4;\n                    font-size: 18px; \n                    width: 60%;\n\n                    @media screen and (min-width: 600px) {\n                        font-size: 14px;\n                    }   \n                }\n            }\n        }\n\n    }\n\n    .showModal {\n        opacity: 1;\n        left: 0;\n        top: 25%;\n        visibility: visible;\n        transition: 0.3s ease-in-out;\n    }\n\n    .hideModal {\n        top: 0;\n        opacity: 0;\n        visibility: hidden;\n        transition: 0.3s ease-in-out;\n    }\n"])),vn),fn=t(36);var gn,On=function(n){var e=n.name,t=n.Icon,r=n.to;return Object(G.jsxs)(tn.Link,{className:"subMenu",to:r,spy:!0,hashSpy:!0,offset:-70,duration:500,activeClass:"active",children:[Object(G.jsx)(t,{className:"icon",style:{color:H(1)}}),Object(G.jsx)("span",{children:e})]})};var wn=function(n){return Object(G.jsxs)(yn,{children:[Object(G.jsx)(On,{name:"Home",Icon:en.b,to:"netflix"}),Object(G.jsx)(On,{name:"Trending",Icon:en.c,to:"trending"}),Object(G.jsx)(On,{name:"Top rated",Icon:en.d,to:"topRated"}),Object(G.jsx)(On,{name:"Actions Movies",Icon:fn.c,to:"action"}),Object(G.jsx)(On,{name:"Comedy Movies",Icon:T.b,to:"comedy"}),Object(G.jsx)(On,{name:"Horror Movies",Icon:fn.b,to:"horror"}),Object(G.jsx)(On,{name:"Romance Movies",Icon:fn.d,to:"romance"}),Object(G.jsx)(On,{name:"Documentaries",Icon:fn.a,to:"documentaries"})]})},yn=I.a.div(gn||(gn=Object(S.a)(["\n    position: fixed;\n    left: 0;\n    top: 20%;\n    width: 40px;\n    padding: 5px 0;\n    background: rgba(0, 0 , 0, 0.3);\n    z-index: 50;\n    display: flex;\n    flex-direction: column;\n    transform-origin: left center;\n    transition: all 0.3s linear;\n    overflow: hidden;\n\n    &:hover {\n        width: 180px;\n        background: rgba(0, 0 , 0, 0.5);\n    }\n\n    .subMenu {\n        display: flex;\n        align-items: center;\n        width: max-content;\n        margin-left: 2px;\n        padding: 4px 6px;\n        cursor: pointer;\n\n        .icon {\n            font-size: 25px;\n            margin-right: 8px;\n        }\n\n        span {\n            font-size: 16px;\n            font-weight: 400;\n            color: rgba(255, 255, 255, 0.6);\n\n            &:hover {\n                color: #fff;\n            }\n        }\n    }\n"])));var kn,Mn,_n=function(n){var e=Object(c.c)((function(n){return n.infoMovies})).MoviesDetail,t=Object(r.useState)(!1),a=Object(E.a)(t,2),o=a[0],i=a[1];return Object(r.useEffect)((function(){i(!!e)}),[e]),Object(G.jsxs)("div",{children:[Object(G.jsx)(un,{}),Object(G.jsx)(an,{}),Object(G.jsx)(wn,{}),Object(G.jsx)(jn,{movie:e,showModal:o})]})};var Sn=function(n){var e=C(),t=Object(E.a)(e,1)[0],a=Object(c.b)(),o=Object(c.c)((function(n){return n.infoMovies})).SearchMovies,i=new URLSearchParams(Object(D.j)().search).get("keywords");return Object(r.useEffect)((function(){i&&a(function(n){return function(){var e=Object(U.a)(Object(X.a)().mark((function e(t){var r;return Object(X.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("".concat(q,"/search/multi?api_key=").concat(J,"&language=en-US&include_adult=false&query=").concat(n));case 3:r=e.sent,t({type:g,payload:r.data.results}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("GET Search Movies error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}(i))}),[i]),Object(G.jsx)(En,{children:o&&o.length>0?Object(G.jsx)("div",{className:"searchContent",style:{gridTemplateColumns:"repeat(".concat(t>1200?5:t>992?4:t>768?3:t>600?2:1,", auto)")},children:o.map((function(n,e){if(null!==n.backdrop_path&&"person"!==n.media_type){var t="https://images.tmdb.org/t/p/w500/".concat(n.backdrop_path);return Object(G.jsxs)("div",{className:"searchItem",onClick:function(){return a(K(n))},children:[Object(G.jsx)("img",{src:t,alt:""}),Object(G.jsx)("span",{children:n.title||n.name})]},e)}}))}):Object(G.jsx)(Nn,{children:Object(G.jsx)("h1",{children:'You search for "keywords" did not have any matches.'})})})},En=I.a.div(kn||(kn=Object(S.a)(["\n    width: 100%;\n    min-height: 92vh;\n    padding-top: 80px;\n    background-color: var(--color-background);\n    transition: all 0.3s linear;\n\n    .searchContent {\n        padding: 40px 60px;\n        display: grid;\n        gap: 8px;\n\n        &:hover .searchItem {\n            opacity: 0.7;\n        }\n\n        .searchItem {\n            position: relative;\n            max-width: 400px;\n            width: 100%;\n            height: 200px;\n            border-radius: 12px;\n            margin: 20px 0;\n            overflow: hidden;\n            transform: scale(1)\n            transition: all 0.3 linear;\n\n            &:hover {\n                transform: scale(1.15);\n                z-index: 10;\n                opacity: 1;\n            }\n\n            img {\n                width: 100%;\n                height: 100%;\n                object-fit: cover;\n            }\n\n            span {\n                position: absolute;\n                left: 0;\n                bottom: 0;\n                right: 0;\n                text-align: center;\n                padding: 4px;\n                background: rgba(0, 0, 0, 0.5);\n                color: var(--color-white);\n                font-weight: bold;\n            }\n        }\n    }\n"]))),Nn=I.a.div(Mn||(Mn=Object(S.a)(["\n    padding: 5rem 8rem;\n    color: var(--color-white);\n"]))),Tn=t(39);var In,Rn=function(n){var e=Object(c.c)((function(n){return n.infoMovies})).MoviesDetail;return Object(G.jsxs)("div",{children:[Object(G.jsx)(Sn,{}),Object(G.jsx)(jn,{showModal:!!e,movie:e})]})};var zn=function(n){return Object(G.jsx)(Cn,{children:Object(G.jsx)("div",{children:Object(G.jsxs)("h1",{children:["Build by",Object(G.jsx)("a",{href:"https://github.com/Sonn01coder",children:"Sonn01coder"}),"base on Reactjs"]})})})},Cn=I.a.div(In||(In=Object(S.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 80px;\n    background-color:var(--color-background);\n    color: var(--color-white);\n    font-size: 10px;\n    border-top: 1px solid #fff;\n\n    a {\n        padding-left: 10px;\n        color: var(--color-green);\n    }\n"])));var Dn=function(){return Object(G.jsx)("div",{children:Object(G.jsxs)(Tn.a,{children:[Object(G.jsx)(L,{}),Object(G.jsxs)(D.c,{children:[Object(G.jsx)(D.a,{exact:!0,path:"/netflix-clone",element:Object(G.jsx)(_n,{})}),Object(G.jsx)(D.a,{path:"/search",element:Object(G.jsx)(Rn,{})})]}),Object(G.jsx)(zn,{})]})})};i.a.createRoot(document.getElementById("root")).render(Object(G.jsx)(a.a.StrictMode,{children:Object(G.jsx)(c.a,{store:_,children:Object(G.jsx)(Dn,{})})}))},87:function(n,e,t){}},[[122,1,2]]]);
//# sourceMappingURL=main.f57e1f8e.chunk.js.map