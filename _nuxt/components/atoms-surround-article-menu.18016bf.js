(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{376:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return l}));r(61),r(79),r(30),r(51);var n="articles",c=function(path){for(;path.includes("//");)path=path.replace("//","/");return path},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;return c("/"+t+"/"+e.replace("--","/"))},l=function(path){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;return(path=c(path)).substr(e.length+2).replace("/","--")}},536:function(e,t,r){const{ref:n}=r(0);var content=r(544);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("1e24ad00",content,!0,{sourceMap:!1})},543:function(e,t,r){"use strict";r(0),r(536)},544:function(e,t,r){var n=r(35)((function(i){return i[1]}));n.push([e.i,".wrapper[data-v-08b63208]{display:grid;grid-auto-flow:column;justify-content:space-between;gap:.5rem;grid-template-columns:minmax(-webkit-max-content,auto) auto minmax(-webkit-max-content,auto);grid-template-columns:minmax(max-content,auto) auto minmax(max-content,auto);align-items:center}.wrapper .prev[data-v-08b63208]{justify-self:flex-start}.wrapper .seriesname[data-v-08b63208]{text-align:center}.wrapper .next[data-v-08b63208]{-webkit-margin-start:auto;margin-inline-start:auto;text-align:right}.button[data-v-08b63208]{display:block}",""]),n.locals={},e.exports=n},554:function(e,t,r){"use strict";r.r(t);r(0);var n=r(16),c=(r(69),r(23)),o=r(11),l=r(376),v=Object(c.b)({props:{path:{type:String,required:!0},useSeries:{type:Boolean,default:!1},series:{type:String}},setup:function(e){var t=Object(c.j)().$content,r=function(){var r=Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,content;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t("articles",{deep:!0}),!e.useSeries||void 0!==e.series){r.next=3;break}return r.abrupt("return",[null,null]);case 3:return c=e.useSeries?n.where({series:{$eq:e.series}}):n,content=c.sortBy("seriesIndex","asc").only(["title","path"]).surround(e.path),r.next=7,content.fetch();case 7:return r.abrupt("return",r.sent);case 8:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),v=Object(c.a)((function(){return e.series})),f=Object(c.g)(""),x=Object(c.g)(""),d=Object(c.g)(!1),m=Object(c.g)(!1),w=Object(c.g)(""),j=Object(c.g)(""),h=Object(c.g)(""),O=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:t=e.sent,d.value=null!==t[0],m.value=null!==t[1],d.value&&(f.value=t[0].title,w.value="/blog/"+Object(l.a)(t[0].path)),m.value&&(x.value=t[1].title,j.value="/blog/"+Object(l.a)(t[1].path));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.g)(O),Object(c.m)((function(){return e.series}),Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:case"end":return e.stop()}}),e)})))),{prevTitle:f,nextTitle:x,existPrev:d,existNext:m,prevSlug:w,nextSlug:j,seriesTitle:v,seriesPage:h}}}),f=v,x=(r(543),r(17)),component=Object(x.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"wrapper"},[r("div",{staticClass:"prev button"},[e.existPrev?r("nuxt-link",{attrs:{title:e.prevTitle,to:e.prevSlug}},[e._v("＜＜ PREV")]):e._e()],1),e._v(" "),r("div",{staticClass:"seriesname button"},[e.useSeries?r("nuxt-link",{attrs:{title:e.seriesTitle,to:"/blog/series/"+e.seriesTitle}},[e._v("\n      "+e._s(e.seriesTitle)+"\n    ")]):e._e()],1),e._v(" "),r("div",{staticClass:"next button"},[e.existNext?r("nuxt-link",{attrs:{title:e.nextTitle,to:e.nextSlug}},[e._v("NEXT ＞＞")]):e._e()],1)])}),[],!1,null,"08b63208",null);t.default=component.exports}}]);