(this["webpackJsonpmovie-trailer"]=this["webpackJsonpmovie-trailer"]||[]).push([[5],{93:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a(1),s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};function r(e){var t=e.className,a=e.counterClockwise,s=e.dashRatio,r=e.pathRadius,o=e.strokeWidth,l=e.style;return Object(c.createElement)("path",{className:t,style:Object.assign({},l,i({pathRadius:r,dashRatio:s,counterClockwise:a})),d:n({pathRadius:r,counterClockwise:a}),strokeWidth:o,fillOpacity:0})}function n(e){var t=e.pathRadius,a=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+a+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+a+" 1 1 0,-"+2*t+"\n    "}function i(e){var t=e.counterClockwise,a=e.dashRatio,c=e.pathRadius,s=2*Math.PI*c,r=(1-a)*s;return{strokeDasharray:s+"px "+s+"px",strokeDashoffset:(t?-r:r)+"px"}}var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function a(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,a=e.minValue,c=e.maxValue;return(Math.min(Math.max(t,a),c)-a)/(c-a)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,a=e.className,s=e.classes,n=e.counterClockwise,i=e.styles,o=e.strokeWidth,l=e.text,d=this.getPathRadius(),u=this.getPathRatio();return Object(c.createElement)("svg",{className:s.root+" "+a,style:i.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?Object(c.createElement)("circle",{className:s.background,style:i.background,cx:50,cy:50,r:50}):null,Object(c.createElement)(r,{className:s.trail,counterClockwise:n,dashRatio:t,pathRadius:d,strokeWidth:o,style:i.trail}),Object(c.createElement)(r,{className:s.path,counterClockwise:n,dashRatio:u*t,pathRadius:d,strokeWidth:o,style:i.path}),l?Object(c.createElement)("text",{className:s.text,style:i.text,x:50,y:50},l):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(c.Component)},94:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var c=a(19),s=a.n(c),r=a(26),n=a(14),i=a(1),o=a(93),l=(a(94),a(8)),d=a(0);function u(e){var t=e.recommends;return Object(d.jsxs)("div",{className:"recommend-container",children:[Object(d.jsx)("h3",{className:"recommend__title",children:"Recommendations"}),Object(d.jsx)("div",{className:"recommend scroll",children:t&&t.map((function(e){return Object(d.jsxs)("div",{className:"recommend__movie",children:[Object(d.jsx)("div",{className:"recommend__movie-banner",children:Object(d.jsx)(l.b,{to:"/detail/".concat(e.id),children:Object(d.jsx)("img",{src:"https://www.themoviedb.org/t/p/w250_and_h141_face"+e.backdrop_path,alt:e.title})})}),Object(d.jsx)("div",{className:"recommend__movie-title",children:e.title})]},e.id)}))})]})}u.defaultProps={recommends:[]};var h=u,m=a(27),j=a(11),p=a(17),b=a(20);var v=function(e){var t=Object(i.useState)(!1),a=Object(n.a)(t,2),c=a[0],s=a[1],r=e.video,o=e.toggleVideo;return void 0===r&&(r=""),Object(i.useEffect)((function(){s(e.active)}),[e.active]),Object(d.jsx)("div",{id:e.id,className:"modal ".concat(c?"active":""),onClick:function(){return o(c)},children:Object(d.jsx)("div",{className:"modal_content ".concat(c?"active":""),children:Object(d.jsx)("iframe",{src:c?"https://www.youtube.com/embed/".concat(r.key,"?autoplay=1"):"",width:"80%",height:"500px",title:"trailer"})})})};function f(e){var t=Object(i.useContext)(m.a),a=t.toggleFavorite,c=t.favorites,l=e.id,u=Object(i.useState)({}),f=Object(n.a)(u,2),O=f[0],x=f[1],g=Object(i.useState)(),k=Object(n.a)(g,2),_=k[0],w=k[1],y=Object(i.useState)(!0),N=Object(n.a)(y,2),C=N[0],P=N[1],R=Object(i.useState)(),E=Object(n.a)(R,2),V=E[0],S=E[1],W=Object(i.useState)(!1),I=Object(n.a)(W,2),M=I[0],A=I[1],B=c.find((function(e){return e===O.id}));Object(i.useEffect)((function(){(function(){var e=Object(r.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},e.next=4,p.a.detail(l,{params:t});case 4:a=e.sent,x(a),P(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.massage);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[l]),Object(i.useEffect)((function(){(function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.getRecommendations(l);case 3:t=e.sent,w(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.massage);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[l]),Object(i.useEffect)((function(){(function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.getVideos(l);case 3:t=e.sent,S(t.results[0]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.massage);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[l]);return Object(d.jsxs)("div",{className:"detail-page row",children:[C?Object(d.jsx)(j.a,{}):Object(d.jsx)("div",{className:"detail-container",children:Object(d.jsx)("div",{className:"detail-before",style:{backgroundImage:"url(".concat(b.a.w1920Image(O.backdrop_path),")")},children:Object(d.jsxs)("div",{className:"detail",children:[Object(d.jsx)("div",{className:"detail__img",children:Object(d.jsx)("img",{src:b.a.w300Image(O.poster_path),alt:O.title})}),Object(d.jsxs)("div",{className:"detail__content",children:[Object(d.jsxs)("div",{className:"detail__content-name color-white",children:[Object(d.jsx)("h3",{children:O.title}),Object(d.jsx)("p",{children:O.release_date})]}),Object(d.jsxs)("div",{className:"detail__content-summary",children:[Object(d.jsxs)("div",{className:"detail__content-summary-top",children:[Object(d.jsx)("div",{className:"detail__content-summary-top-left",children:Object(d.jsx)(o.a,{value:O.vote_average,maxValue:10,text:O.vote_average+"/10",styles:{path:{stroke:"".concat(O.vote_average>=7.5?"#21d07a":"#c7ca2e"),strokeLinecap:"round",transition:"stroke-dashoffset 0.5s ease 0s"},trail:{stroke:"#053752",strokeLinecap:"round"},text:{fill:"".concat(O.vote_average>=7.5?"#21d07a":"#c7ca2e"),fontSize:"22px"},background:{fill:"".concat(O.vote_average>=7.5?"#21d07a":"#c7ca2e")}}})}),Object(d.jsxs)("div",{className:"detail__content-summary-top-right",children:[Object(d.jsxs)("span",{className:"like-movie",children:[Object(d.jsx)("i",{className:"icon fas fa-heart ".concat(B?"liked":""),onClick:function(){return a(O.id)}}),Object(d.jsx)("div",{className:"detail__content-summary-top-right-icon",children:"Add this movie to your favorite list"})]}),Object(d.jsxs)("span",{className:"wrap-icon",onClick:function(){return A(!0)},children:[Object(d.jsx)("i",{className:"icon fas fa-play no-bg"}),"Play Trailer"]}),Object(d.jsx)(v,{video:V,active:M,toggleVideo:function(e){A(!M)}})]})]}),Object(d.jsxs)("div",{className:"detail__content-summary-bottom",children:[Object(d.jsxs)("p",{className:"color-white",children:["Status: ",O.status]}),Object(d.jsxs)("p",{className:"color-white",children:["Language: ",O.original_language]}),Object(d.jsxs)("p",{className:"color-white",children:["Vote Average: ",O.vote_average]}),Object(d.jsxs)("p",{className:"color-white",children:["Vote Count: ",O.vote_count]})]})]}),Object(d.jsxs)("div",{className:"detail__content-overview color-white",children:[Object(d.jsx)("h3",{children:"Overview"}),Object(d.jsx)("p",{children:O.overview})]})]})]})})}),Object(d.jsx)(h,{recommends:_})]})}f.defaultProps={id:""};t.default=f}}]);
//# sourceMappingURL=5.0471c226.chunk.js.map