(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{539:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(51),n(27),n(42);var o=n(11),c=n(371),r=function(){return{makeBlogpostMeta:function(article){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",title=Object(o.h)(""),meta=Object(o.h)([]);return Object(o.n)(article,(function(e){if(void 0!==e){title.value=e.title;var n=""!==t?"".concat("https://strv.dev/images/ogp","/").concat(t):"".concat("https://strv.dev/images/ogp","/generated/").concat(Object(c.a)(e.path),".png");meta.value=[{hid:"description",name:"description",content:e.description},{hid:"og:description",property:"og:description",content:e.description},{hid:"og:url",property:"og:url",content:"".concat("https://strv.dev","/").concat("blog","/").concat(Object(c.a)(e.path))},{hid:"og:title",property:"og:title",content:"".concat(e.title," - ").concat("strv.dev")},{hid:"og:image",property:"og:image",content:n}]}})),{title:title,meta:meta}}}}},585:function(t,e,n){"use strict";n.r(e);n(0);var o=n(15),c=(n(67),n(11)),r=n(555),l=n(16),d=n(539),m=Object(c.c)({name:"about",components:{BlogpostFrame:r.default},setup:function(){var t=Object(c.k)().$content,e=Object(c.h)(void 0),n=(0,Object(d.a)().makeBlogpostMeta)(e,"main.png"),title=n.title,meta=n.meta;return Object(c.j)({title:title,meta:meta}),Object(l.h)(Object(o.a)(regeneratorRuntime.mark((function n(){var p;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t("about").fetch();case 2:p=n.sent,e.value=p;case 4:case"end":return n.stop()}}),n)})))),{page:e}}}),v=n(17),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("blogpost-frame",{attrs:{page:t.page,showComment:!1}},[n("nuxt-content",{attrs:{document:t.page}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);