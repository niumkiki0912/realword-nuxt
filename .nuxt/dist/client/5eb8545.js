(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{197:function(t,e,r){"use strict";r.d(e,"e",(function(){return o})),r.d(e,"g",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return f})),r.d(e,"d",(function(){return d})),r.d(e,"f",(function(){return v})),r.d(e,"a",(function(){return m})),r.d(e,"h",(function(){return O}));var n=r(66),o=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},c=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},m=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},O=function(t,data){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t),data:data})}},198:function(t,e,r){"use strict";r.d(e,"d",(function(){return o})),r.d(e,"e",(function(){return c})),r.d(e,"c",(function(){return l})),r.d(e,"g",(function(){return f})),r.d(e,"b",(function(){return d})),r.d(e,"a",(function(){return v})),r.d(e,"f",(function(){return m}));var n=r(66),o=function(data){return Object(n.b)({method:"POST",url:"/api/users/login",data:data})},c=function(data){return Object(n.b)({method:"POST",url:"/api/users",data:data})},l=function(data){return Object(n.b)({method:"GET",url:"/api/user"})},f=function(data){return Object(n.b)({method:"PUT",url:"/api/user",data:data})},d=function(t){return Object(n.b)({method:"GET",url:"/api/profiles/".concat(t)})},v=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t,"/follow")})},m=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})}},276:function(t,e,r){"use strict";r.r(e);var n=r(19),o=r(10),c=r(4),l=(r(36),r(39),r(13),r(40),r(37),r(23),r(24),r(49),r(50),r(198)),f=r(197),d=r(38);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,d,v,m,O,_,h,j,w,C,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=t.query,c=n.tab||"my",d=r.username,v="favorited"===c?d:null,console.log("params===>",r,d),e.next=7,Promise.all([Object(l.b)(d),Object(f.e)({author:d,favorited:v})]);case 7:return m=e.sent,O=Object(o.a)(m,2),_=O[0],h=O[1],console.log("ruserRes===>",_.data,h.data),j=_.data.profile,w=h.data,C=w.articles,k=w.articlesCount,e.abrupt("return",{tab:c,profile:j,articles:C,articlesCount:k,username:d});case 15:case"end":return e.stop()}}),e)})))()},watchQuery:["tab"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.c)(["user"])),methods:{handleFollow:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.profile.following){e.next=6;break}return e.next=3,Object(l.f)(t.username);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,Object(l.a)(t.username);case 8:e.t0=e.sent;case 9:r=e.t0,console.log("res===>",r),t.profile.following=!t.profile.following;case 12:case"end":return e.stop()}}),e)})))()},onFavorite:function(article){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(f.c)(article.slug);case 4:article.favorited=!1,article.favoritesCount-=1,t.next=12;break;case 8:return t.next=10,Object(f.b)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()}}},O=r(30),component=Object(O.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-page"},[r("div",{staticClass:"user-info"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("img",{staticClass:"user-img",attrs:{src:t.profile.image}}),t._v(" "),r("h4",[t._v(t._s(t.profile.username))]),t._v(" "),r("p",[t._v("\n            "+t._s(t.profile.bio)+"\n          ")]),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn",on:{click:t.handleFollow}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n               \n              "),t.profile.following?r("span",[t._v("unFollow "+t._s(t.profile.username))]):r("span",[t._v("Follow "+t._s(t.profile.username))])])])])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("div",{staticClass:"articles-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"my"===t.tab},attrs:{exact:"",to:{name:"profile"}}},[t._v("\n                  My Articles\n              ")])],1),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"favorited"===t.tab},attrs:{exact:"",to:{name:"profile",query:{tab:"favorited"}}}},[t._v("\n                  Favorited Articles\n              ")])],1)])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile"}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile"}}},[t._v("\n                "+t._s(article.author.username)+"\n              ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(article.createdAt))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),t.profile.username!==t.user.username?r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")]),t._v(" "),r("ul",{staticClass:"tag-list"},t._l(article.tagList,(function(e){return r("li",{key:e,staticClass:"tag-default tag-pill tag-outline"},[t._v(t._s(e))])})),0)]):r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"editor",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)}))],2)])])])}),[],!1,null,"aefe297c",null);e.default=component.exports}}]);