(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{540:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(51),n(27),n(42);var r=n(11),c=n(371),o=function(){var title=Object(r.h)(""),meta=Object(r.h)([]);Object(r.j)({title:title,meta:meta});return{setBlogpostMeta:function(article){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=""!==t?"".concat("https://strv.dev/images/ogp","/").concat(t):"".concat("https://strv.dev/images/ogp","/generated/").concat(Object(c.a)(article.path),".png");meta.value=[{hid:"description",name:"description",content:article.description},{hid:"og:description",property:"og:description",content:article.description},{hid:"og:url",property:"og:url",content:"".concat("https://strv.dev","/").concat("blog","/").concat(Object(c.a)(article.path))},{hid:"og:title",property:"og:title",content:"".concat(article.title," - ").concat("strv.dev")},{hid:"og:image",property:"og:image",content:e}],title.value=article.title}}}},589:function(t,e,n){"use strict";n.r(e);n(0);var r=n(15),c=(n(67),n(11)),o=n(16),f=n(559),d=n(371),h=n(540),l=Object(c.c)({components:{BlogpostFrame:f.default},setup:function(){var t=function(t){var e=Object(c.h)(),n=Object(c.k)().$content,path=Object(c.h)(Object(d.b)(t)),o=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){var p;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(path.value).fetch();case 2:if(p=t.sent,!Array.isArray(p)){t.next=5;break}return t.abrupt("return",p[0]);case 5:return t.abrupt("return",p);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o();case 2:return e.value=t.sent,t.abrupt("return",{page:e,path:path});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.f)(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.$nuxt.$on("content:update",Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:case"end":return t.stop()}}),t)}))));case 1:case"end":return t.stop()}}),t)})))),Object(c.e)(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.$nuxt.$off("content:update");case 1:case"end":return t.stop()}}),t)})))),{page:e,path:path,fetch:f}}(Object(c.l)().params.blogpost),e=t.page,path=t.path,n=t.fetch,f=Object(h.a)().setBlogpostMeta;return Object(o.h)(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:f(e.value);case 3:case"end":return t.stop()}}),t)})))),{page:e,path:path}}}),v=l,m=n(17),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[void 0!==t.page?n("blogpost-frame",{attrs:{page:t.page,path:t.path}},[n("nuxt-content",{attrs:{document:t.page}})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);