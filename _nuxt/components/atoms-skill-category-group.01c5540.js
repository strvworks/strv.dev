(window.webpackJsonp=window.webpackJsonp||[]).push([[17,13,18],{375:function(e,t,l){const{ref:n}=l(0);var content=l(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(28).default)("3fadfefb",content,!0,{sourceMap:!1})},376:function(e,t,l){"use strict";l.r(t);l(0),l(104);var n=l(9),r=Object(n.c)({props:{src:{type:String,default:""},alt:{type:String,default:""},duration:{type:Number,default:.2}},setup:function(e){var t=Object(n.h)(!1);return Object(n.f)((function(){document.querySelector("img").style.setProperty("--duration","".concat(e.duration,"s"))})),{loadFinished:function(){t.value=!0},loaded:t}}}),o=(l(377),l(14)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{class:{loaded:e.loaded,unloaded:!e.loaded},attrs:{src:e.src,alt:e.alt},on:{load:e.loadFinished}})}),[],!1,null,"467eb550",null);t.default=component.exports},377:function(e,t,l){"use strict";l(0),l(375)},378:function(e,t,l){var n=l(27)((function(i){return i[1]}));n.push([e.i,"img[data-v-467eb550]{transition-property:opacity;transition-duration:var(--duration)}.unloaded[data-v-467eb550]{opacity:0}.loaded[data-v-467eb550]{opacity:1}",""]),n.locals={},e.exports=n},390:function(e,t,l){const{ref:n}=l(0);var content=l(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(28).default)("4962ef80",content,!0,{sourceMap:!1})},398:function(e,t,l){const{ref:n}=l(0);var content=l(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(28).default)("3b2fd0d1",content,!0,{sourceMap:!1})},402:function(e,t,l){"use strict";l(0),l(390)},403:function(e,t,l){var n=l(27)((function(i){return i[1]}));n.push([e.i,"article[data-v-d1be42c0]{background-color:var(--strvdev-palette-1);border:2px solid #505464;padding:.2em;-webkit-padding-before:.9em;padding-block-start:.9em;border-radius:2px;block-size:100%;display:relative}article header[data-v-d1be42c0]{block-size:80px;display:flex;align-items:center;justify-content:center}article header .img[data-v-d1be42c0]{display:block;inline-size:3.8em;-webkit-margin-after:.5em;margin-block-end:.5em}article .desc[data-v-d1be42c0]{display:absolute;bottom:0;padding:0 .2em;-webkit-margin-after:.3em;margin-block-end:.3em}article .desc p[data-v-d1be42c0]{margin:0}article .desc .name[data-v-d1be42c0]{font-weight:600;-webkit-margin-after:.3em;margin-block-end:.3em}article .desc .comment[data-v-d1be42c0]{font-size:.8em;-webkit-margin-after:.3em;margin-block-end:.3em;word-break:break-all;text-align:justify}",""]),n.locals={},e.exports=n},408:function(e,t,l){"use strict";l.r(t);l(0);var n=l(9),r=l(376),o=Object(n.c)({name:"skill-panel",components:{LazyLoadImage:r.default},props:{skill:{type:Object,required:!0},color:{type:String,default:"#7ac292"}}}),c=(l(402),l(14)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("article",{staticClass:"skill-panel"},[l("header",[l("lazy-load-image",{staticClass:"img",attrs:{src:e.skill.icon,alt:e.skill.name+" icon image"}})],1),e._v(" "),l("div",{staticClass:"desc"},[l("p",{staticClass:"name"},[e._v(e._s(e.skill.name))]),e._v(" "),l("p",{staticClass:"comment"},[e._v(e._s(e.skill.content))])])])}),[],!1,null,"d1be42c0",null);t.default=component.exports},421:function(e,t,l){"use strict";l(0),l(398)},422:function(e,t,l){var n=l(27)((function(i){return i[1]}));n.push([e.i,"ul[data-v-26524931]{display:grid;gap:.3em;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));padding:0}ul li[data-v-26524931]{display:block;list-style:none}",""]),n.locals={},e.exports=n},428:function(e,t,l){"use strict";l.r(t);l(0);var n=l(9),r=l(408),o=Object(n.c)({name:"skill-category-group",components:{SkillPanel:r.default},props:{skillCategoryGroup:{type:Object,required:!0}},setup:function(){}}),c=(l(421),l(14)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("h3",[e._v(e._s(e.skillCategoryGroup.category))]),e._v(" "),l("ul",e._l(e.skillCategoryGroup.skills,(function(e){return l("li",{key:e.name},[l("skill-panel",{attrs:{skill:e}})],1)})),0),e._v(" "),l("div")])}),[],!1,null,"26524931",null);t.default=component.exports}}]);