(this["webpackJsonpmovie-trailer"]=this["webpackJsonpmovie-trailer"]||[]).push([[4],{100:function(e,t,a){"use strict";a.r(t);var c=a(19),s=a.n(c),r=a(26),n=a(14),i=a(1),o=a(92),l=a(2),u=a(0);var d=function(e){var t=Object(i.useState)(""),a=Object(n.a)(t,2),c=a[0],s=a[1],r=Object(l.g)();return Object(i.useEffect)((function(){s(e.query?e.query:"")}),[e.query]),Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("form",{className:"search",onSubmit:function(e){return function(e){e.preventDefault();var t="";c.trim().length>0&&(t=c.replace(/\s/g,"+"),r.push("/search/".concat(t)))}(e)},children:[Object(u.jsx)("label",{htmlFor:"search__input",className:"search__label",children:Object(u.jsx)("i",{className:"fas fa-search"})}),Object(u.jsx)("input",{type:"text",className:"search__input",id:"search__input",placeholder:"Search movies, hit album",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(u.jsxs)("div",{className:"account",children:[Object(u.jsx)("i",{className:"far fa-user account__icon"}),Object(u.jsx)("div",{className:"account__option",children:Object(u.jsxs)("ul",{className:"account__option-list",children:[Object(u.jsx)("li",{className:"account__option-item",children:Object(u.jsx)("a",{href:"/home",className:"account__option-link",children:"User"})}),Object(u.jsx)("li",{className:"account__option-item",children:Object(u.jsx)("a",{href:"/home",className:"account__option-link",children:"Option"})}),Object(u.jsx)("li",{className:"account__option-item",children:Object(u.jsx)("a",{href:"/home",className:"account__option-link",children:"Logout"})})]})})]})]})};var j=function(e){var t=e.page,a=e.totalPages,c=e.onPageChange,s=function(e){c&&c(e)},r=[0,1,2,3,4];switch(t){case 1:r=[0,1,2,3,4];break;case 2:r=[-1,0,1,2,3];break;case 3:r=[-2,-1,0,1,2];break;default:r=[-2,-1,0,1,2]}return Object(u.jsxs)("div",{className:"pagination",children:[Object(u.jsx)("button",{className:"prevBtn page ".concat(t<=1?"disabled":""),disabled:t<=1,onClick:function(){return s(t-1)},children:Object(u.jsx)("i",{className:"fas fa-chevron-left"})}),r.map((function(e){return Object(u.jsx)("span",{className:"page ".concat(t+e===t?"active-page":""),onClick:function(){return s(t+e)},children:t+e},e)})),Object(u.jsx)("button",{className:"nextBtn page ".concat(t>=a?"disabled":""),disabled:t>=a,onClick:function(){return s(t+1)},children:Object(u.jsx)("i",{className:"fas fa-chevron-right"})})]})},b=a(95),h=a(11),p=a(17);t.default=function(e){var t=e.location.id,a=e.location.pathname,c=Object(i.useRef)(),m=null,x=Object(l.i)().query,f=Object(i.useState)([]),O=Object(n.a)(f,2),g=O[0],v=O[1],_=Object(i.useState)(!0),N=Object(n.a)(_,2),k=N[0],y=N[1],w=Object(i.useState)(1),C=Object(n.a)(w,2),P=C[0],R=C[1],q=Object(i.useState)(0),E=Object(n.a)(q,2),S=E[0],W=E[1];switch(a){case"/home/top_rated":m=p.b.top_rated;break;case"/home/upcoming":m=p.b.upcoming;break;default:m=p.b.popular}return Object(i.useEffect)((function(){(function(){var e=Object(r.a)(s.a.mark((function e(){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=null,n={},y(!0),c.current!==a&&R(1),void 0!==x){e.next=12;break}return n={page:P,with_genres:t},e.next=9,p.a.getMovieList(m,{params:n});case 9:r=e.sent,e.next=16;break;case 12:return n={page:P,with_genres:t,query:x},e.next=15,p.a.search({params:n});case 15:r=e.sent;case 16:v(r.results),W(r.total_pages),y(!1),c.current=a,e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),console.log(e.t0.massage);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(){return e.apply(this,arguments)}})()()}),[t,x,P,m,a]),Object(u.jsx)("div",{className:"content",children:Object(u.jsxs)("div",{className:"grid",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col l-12 m-12 c-12",children:Object(u.jsx)(d,{query:x})})}),k?Object(u.jsx)(h.a,{}):Object(u.jsx)(b.a,{list:g}),Object(u.jsx)(j,{page:P,onPageChange:function(e){R(e)},totalPages:S}),Object(u.jsx)(o.a,{})]})})}},92:function(e,t,a){"use strict";a(1);var c=a(0);t.a=function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col l-6 m-12 c-12",children:Object(c.jsxs)("div",{className:"contact",children:[Object(c.jsxs)("div",{className:"sub-contact",children:[Object(c.jsx)("i",{className:"fas fa-map-marker-alt"}),Object(c.jsx)("span",{className:"sub-contact__span",children:"Ha Long, Quang Ninh"})]}),Object(c.jsxs)("div",{className:"sub-contact",children:[Object(c.jsx)("i",{className:"fas fa-phone-alt"}),Object(c.jsx)("span",{className:"sub-contact__span",children:"+84 347 748 751"})]}),Object(c.jsxs)("div",{className:"sub-contact",children:[Object(c.jsx)("i",{className:"far fa-envelope"}),Object(c.jsx)("span",{className:"sub-contact__span",children:"hoanghien99qn@gmail.com"})]})]})}),Object(c.jsx)("div",{className:"col l-6 m-12 c-12",children:Object(c.jsxs)("div",{className:"about-me",children:[Object(c.jsx)("h3",{children:"About Me"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),Object(c.jsxs)("div",{className:"social",children:[Object(c.jsx)("i",{className:"fab fa-facebook-square"}),Object(c.jsx)("i",{className:"fab fa-linkedin"}),Object(c.jsx)("i",{className:"fab fa-github-square"})]})]})})]})})}},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a(1),s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};function r(e){var t=e.className,a=e.counterClockwise,s=e.dashRatio,r=e.pathRadius,o=e.strokeWidth,l=e.style;return Object(c.createElement)("path",{className:t,style:Object.assign({},l,i({pathRadius:r,dashRatio:s,counterClockwise:a})),d:n({pathRadius:r,counterClockwise:a}),strokeWidth:o,fillOpacity:0})}function n(e){var t=e.pathRadius,a=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+a+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+a+" 1 1 0,-"+2*t+"\n    "}function i(e){var t=e.counterClockwise,a=e.dashRatio,c=e.pathRadius,s=2*Math.PI*c,r=(1-a)*s;return{strokeDasharray:s+"px "+s+"px",strokeDashoffset:(t?-r:r)+"px"}}var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function a(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,a=e.minValue,c=e.maxValue;return(Math.min(Math.max(t,a),c)-a)/(c-a)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,a=e.className,s=e.classes,n=e.counterClockwise,i=e.styles,o=e.strokeWidth,l=e.text,u=this.getPathRadius(),d=this.getPathRatio();return Object(c.createElement)("svg",{className:s.root+" "+a,style:i.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?Object(c.createElement)("circle",{className:s.background,style:i.background,cx:50,cy:50,r:50}):null,Object(c.createElement)(r,{className:s.trail,counterClockwise:n,dashRatio:t,pathRadius:u,strokeWidth:o,style:i.trail}),Object(c.createElement)(r,{className:s.path,counterClockwise:n,dashRatio:d*t,pathRadius:u,strokeWidth:o,style:i.path}),l?Object(c.createElement)("text",{className:s.text,style:i.text,x:50,y:50},l):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(c.Component)},94:function(e,t,a){},95:function(e,t,a){"use strict";a(1);var c=a(93),s=(a(94),a(8)),r=a(20),n=a(0);t.a=function(e){var t=e.list;return Object(n.jsx)("div",{className:"row list",children:t&&t.map((function(e){return e.poster_path||e.backdrop_path?Object(n.jsx)("div",{className:"col l-2-4 m-4 c-6",children:Object(n.jsx)(s.b,{to:"/detail/".concat(e.id),children:Object(n.jsxs)("div",{className:"product",children:[Object(n.jsxs)("div",{className:"product__head",children:[Object(n.jsx)("img",{src:r.a.w220Image(e.poster_path||e.backdrop_path),alt:e.title,className:"product__img"}),Object(n.jsx)("div",{className:"CircularProgressbar",children:Object(n.jsx)(c.a,{value:e.vote_average,maxValue:10,text:e.vote_average+"/10",styles:{path:{stroke:"".concat(e.vote_average>=7.5?"#21d07a":e.vote_average<=5?"#ca2e2e":"#c7ca2e"),strokeLinecap:"round",transition:"stroke-dashoffset 0.5s ease 0s"},trail:{stroke:"#053752",strokeLinecap:"round"},text:{fill:"".concat(e.vote_average>=7.5?"#21d07a":e.vote_average<=5?"#ca2e2e":"#c7ca2e"),fontSize:"22px"},background:{fill:"".concat(e.vote_average>=7.5?"#21d07a":e.vote_average<=5?"#ca2e2e":"#c7ca2e")}}})})]}),Object(n.jsxs)("div",{className:"product__title",children:[Object(n.jsx)("p",{className:"product__title-name",children:e.title}),Object(n.jsx)("p",{className:"product__title-year",children:e.release_date})]})]})})},e.id):void 0}))})}}}]);
//# sourceMappingURL=4.aa5d825f.chunk.js.map