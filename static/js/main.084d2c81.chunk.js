(this["webpackJsonpmovie-trailer"]=this["webpackJsonpmovie-trailer"]||[]).push([[0],{11:function(e,t,a){"use strict";a(1),a(90);var n=a(0);t.a=function(){return Object(n.jsx)("div",{className:"loading",children:Object(n.jsxs)("div",{className:"loader",children:[Object(n.jsx)("div",{className:"outer"}),Object(n.jsx)("div",{className:"middle"}),Object(n.jsx)("div",{className:"inner"})]})})}},17:function(e,t,a){"use strict";a.d(t,"b",(function(){return h}));var n=a(19),c=a.n(n),i=a(26),r=a(9),s=a(39),o=a.n(s),l=a(40),m=a.n(l),j=a(20),u=o.a.create({baseURL:j.a.baseUrl,headers:{"Content-Type":"application/json"},paramsSerializer:function(e){return m.a.stringify(Object(r.a)(Object(r.a)({},e),{},{api_key:j.a.apiKey}))}});u.interceptors.request.use(function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),u.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var d=u,h={popular:"popular",top_rated:"top_rated",upcoming:"upcoming"},b={getMovieList:function(e,t){var a="movie/"+h[e];return d.get(a,t)},getVideos:function(e){var t="movie/"+e+"/videos";return d.get(t,{params:{}})},getRecommendations:function(e){var t="movie/"+e+"/recommendations";return d.get(t,{params:{}})},detail:function(e,t){var a="movie/"+e;return d.get(a,t)},search:function(e){return d.get("search/movie/",e)}};t.a=b},20:function(e,t,a){"use strict";t.a={baseUrl:"https://api.themoviedb.org/3/",apiKey:"04c35731a5ee918f014970082a0088b1",originalImage:function(e){return"https://www.themoviedb.org/t/p/original/".concat(e)},w220Image:function(e){return"https://www.themoviedb.org/t/p/w220_and_h330_face/".concat(e)},w300Image:function(e){return"https://www.themoviedb.org/t/p/w300/".concat(e)},w1920Image:function(e){return"https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/".concat(e)}}},27:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(42),c=a(14),i=a(1),r=a(0),s=Object(i.createContext)();t.b=function(e){var t=e.children,a="favoriteKey",o=JSON.parse(localStorage.getItem(a))||[],l=Object(i.useState)(o),m=Object(c.a)(l,2),j=m[0],u=m[1];localStorage.setItem(a,JSON.stringify(j));var d={favorites:j,toggleFavorite:function(e){var t=j.find((function(t){return t===e}));u(void 0!==t?j.filter((function(t){return t!==e})):[].concat(Object(n.a)(j),[e]))}};return Object(r.jsx)(s.Provider,{value:d,children:t})}},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(38),r=a.n(i),s=(a(47),a(48),a(49),a(50),a(8)),o=a(2),l=a(14),m=[{pathname:"/home/action",id:28,name:"Action"},{pathname:"/home/adventure",id:12,name:"Adventure"},{pathname:"/home/animation",id:16,name:"Animation"},{pathname:"/home/comedy",id:35,name:"Comedy"},{pathname:"/home/crime",id:80,name:"Crime"},{pathname:"/home/documentary",id:99,name:"Documentary"},{pathname:"/home/drama",id:18,name:"Drama"},{pathname:"/home/family",id:10751,name:"Family"},{pathname:"/home/fantasy",id:14,name:"Fantasy"},{pathname:"/home/history",id:36,name:"History"},{pathname:"/home/horror",id:27,name:"Horror"},{pathname:"/home/music",id:10402,name:"Music"},{pathname:"/home/mystery",id:9648,name:"Mystery"},{pathname:"/home/romance",id:10749,name:"Romance"},{pathname:"/home/science+fiction",id:878,name:"Science Fiction"},{pathname:"/home/tV+movie",id:10770,name:"TV Movie"},{pathname:"/home/thriller",id:53,name:"Thriller"},{pathname:"/home/war",id:10752,name:"War"},{pathname:"/home/western",id:37,name:"Western"}],j=a(17),u=a(0);var d=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(u.jsxs)("section",{className:"category scroll ltr",children:[Object(u.jsx)(s.c,{to:"/home",className:"link no-active",children:Object(u.jsxs)("div",{className:"logo box",children:[Object(u.jsx)("i",{className:"fas fa-film logo__icon"}),Object(u.jsx)("p",{className:"logo__text",children:"Hoang Hien"})]})}),Object(u.jsx)("div",{className:"control box",children:Object(u.jsx)("ul",{className:"control__list",children:Object(u.jsx)("li",{className:"control__item",children:Object(u.jsxs)(s.c,{activeClassName:"active",to:"/favorites",className:"control__link",children:[Object(u.jsx)("i",{className:"far fa-clock"}),"Favorite Movies"]})})})}),Object(u.jsx)("div",{className:"user box",children:Object(u.jsxs)("ul",{className:"user__list",children:[Object(u.jsx)("li",{className:"user__item",children:Object(u.jsxs)(s.c,{activeClassName:"active",to:"/home/".concat(j.b.popular),className:"user__link",children:[Object(u.jsx)("i",{className:"fas fa-tv"}),"Popular"]})}),Object(u.jsx)("li",{className:"user__item",children:Object(u.jsxs)(s.c,{activeClassName:"active",to:"/home/".concat(j.b.top_rated),className:"user__link",children:[Object(u.jsx)("i",{className:"far fa-clock"}),"Top Rated"]})}),Object(u.jsx)("li",{className:"user__item",children:Object(u.jsxs)(s.c,{activeClassName:"active",to:"/home/".concat(j.b.upcoming),className:"user__link",children:[Object(u.jsx)("i",{className:"far fa-clock"}),"Upcoming"]})})]})}),Object(u.jsxs)("div",{className:"setting box",children:[Object(u.jsx)("div",{className:"dropdown",children:Object(u.jsxs)("p",{className:"dropdown-para",onClick:function(){c(!a)},children:["Genres ",Object(u.jsx)("i",{className:"fas fa-caret-down"})]})}),Object(u.jsx)("ul",{className:"setting__list ".concat(a?"activeGenres":""),children:m.map((function(e){return Object(u.jsx)("li",{className:"control__item",children:Object(u.jsxs)(s.c,{activeClassName:"active",to:e,className:"control__link",children:[Object(u.jsx)("i",{className:"far fa-clock"}),e.name]})},e.name)}))})]})]})};function h(){var e=Object(o.h)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var b=a(27),f=a(9),p=a(11),O=c.a.lazy((function(){return a.e(6).then(a.bind(null,97))})),v=c.a.lazy((function(){return a.e(4).then(a.bind(null,100))})),x=c.a.lazy((function(){return a.e(3).then(a.bind(null,98))})),g=function(){return Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"/home",render:function(e){return Object(u.jsx)(c.a.Suspense,{fallback:Object(u.jsx)(p.a,{}),children:Object(u.jsx)(v,Object(f.a)({},e))})}}),Object(u.jsx)(o.b,{path:"/search/:query",render:function(e){return Object(u.jsx)(c.a.Suspense,{fallback:Object(u.jsx)(p.a,{}),children:Object(u.jsx)(v,Object(f.a)({},e))})}}),Object(u.jsx)(o.b,{path:"/detail/:id",exact:!0,render:function(e){return Object(u.jsx)(c.a.Suspense,{fallback:Object(u.jsx)(p.a,{}),children:Object(u.jsx)(O,Object(f.a)({},e))})}}),Object(u.jsx)(o.b,{path:"/favorites",exact:!0,render:function(e){return Object(u.jsx)(c.a.Suspense,{fallback:Object(u.jsx)(p.a,{}),children:Object(u.jsx)(x,Object(f.a)({},e))})}})]})};var N=function(){return Object(u.jsxs)(s.a,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(b.b,{children:Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(d,{}),Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.a,{exact:!0,from:"/movie-trailer",to:"/home"}),Object(u.jsx)(g,{})]})]})})]})},_=function(e){e&&e instanceof Function&&a.e(7).then(a.bind(null,99)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),_()}},[[91,1,2]]]);
//# sourceMappingURL=main.084d2c81.chunk.js.map