"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[519],{519:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var r=n(885),c=n(791),a=n(871),s=n(235),i={list:"Casts_list__P1sX8",item:"Casts_item__7rWx4",img:"Casts_img__Y1Ox6"},u=n(184);function o(){var t=(0,c.useState)(null),e=(0,r.Z)(t,2),n=e[0],o=e[1],p=(0,a.UO)().movieId;(0,c.useEffect)((function(){(0,s.rc)(p).then((function(t){o(t.cast)}))}),[p]);var f=null===n||void 0===n?void 0:n.map((function(t){var e=t.profile_path?"".concat("https://image.tmdb.org/t/p/w342/").concat(t.profile_path):"https://i.pinimg.com/564x/7c/ce/30/7cce3030a7b2b9a6e2a41213b5547953.jpg";return(0,u.jsxs)("li",{className:i.item,children:[(0,u.jsx)("img",{className:i.img,src:e,alt:t.known_for_department}),(0,u.jsx)("h4",{children:t.name}),(0,u.jsx)("p",{children:t.character})]},t.id)}));return(0,u.jsx)("div",{className:i.container,children:(0,u.jsx)("ul",{className:i.list,children:f})})}},235:function(t,e,n){n.d(e,{NG:function(){return o},Rl:function(){return v},fn:function(){return f},iJ:function(){return i},rc:function(){return l}});var r=n(861),c=n(757),a=n.n(c),s="c842d6df69ab537d9e67db332ce4bf5c";function i(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(s));case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n.results);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("\n    https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("\n    https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=519.e8087eb2.chunk.js.map