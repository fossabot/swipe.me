(function(e){function t(t){for(var r,c,a=t[0],s=t[1],u=t[2],f=0,d=[];f<a.length;f++)c=a[f],o[c]&&d.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},4870:function(e,t,n){"use strict";var r=n("53d2"),o=n.n(r);o.a},"4d3e":function(e,t,n){},"53d2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=n("bc3a"),i=n.n(o),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Deck",{attrs:{msg:"banana"}})],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"deck"},[e.loading?n("loader"):n("vue-swing",{ref:"vueswing",staticClass:"vueswing",attrs:{config:e.config},on:{throwout:e.onThrowout}},e._l(e.cards,function(e,t){return n("div",{key:e.title,staticClass:"card"},[n("card",{key:e.title,attrs:{index:t,title:e.title,imageURL:e.picture_path,description:e.description}})],1)}))],1)},u=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("img",{staticClass:"card-image",attrs:{src:e.patchURL(e.imageURL)}}),n("h1",[e._v(e._s(e.title))]),n("p",[e._v(e._s(e.description))])])},f=[],d=(n("f559"),{name:"Card",props:{title:String,imageURL:String,description:String},methods:{patchURL:function(e){return e.startsWith("./")?"//cadesalaberry.github.io/lucky-you/"+e:e}}}),p=d,g=(n("a40f"),n("2877")),v=Object(g["a"])(p,l,f,!1,null,"664a8b86",null);v.options.__file="Card.vue";var h=v.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spinner"})},m=[],_={name:"Loader"},y=_,w=(n("4870"),Object(g["a"])(y,b,m,!1,null,"eca9c34a",null));w.options.__file="Loader.vue";var k=w.exports,j=n("634d"),O={name:"Deck",props:{subtitle:String},components:{VueSwing:j["a"],Loader:k,Card:h},data:function(){return{config:{allowedDirections:[j["a"].Direction.LEFT,j["a"].Direction.RIGHT]},loading:!0,cards:[]}},mounted:function(){this.$http.get("//cadesalaberry.github.io/lucky-you/content.json").then(this.replaceCards).catch(function(e){throw console.error("Eror getting content"),e})},methods:{replaceCards:function(e){this.cards=e.data.categories[0].cards,this.loading=!1},add:function(){console.log("add",this.$refs)},remove:function(){console.log("remove",this.$refs)},onThrowout:function(e){var t=e.target;e.throwDirection;this.cards.pop(),console.log("Threw out ".concat(t.textContent,"!"))}}},C=O,x=(n("d4bd"),Object(g["a"])(C,s,u,!1,null,"fcf29276",null));x.options.__file="Deck.vue";var S=x.exports,L={name:"App",components:{Deck:S}},$=L,D=(n("034f"),Object(g["a"])($,c,a,!1,null,null,null));D.options.__file="App.vue";var T=D.exports,E=n("9483");Object(E["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,r["a"].prototype.$http=i.a,new r["a"]({render:function(e){return e(T)}}).$mount("#app")},"5c60":function(e,t,n){},a40f:function(e,t,n){"use strict";var r=n("5c60"),o=n.n(r);o.a},c21b:function(e,t,n){},d4bd:function(e,t,n){"use strict";var r=n("4d3e"),o=n.n(r);o.a}});
//# sourceMappingURL=app.0515d9c1.js.map