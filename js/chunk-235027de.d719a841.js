(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-235027de"],{"25f0":function(e,t,r){"use strict";var a=r("6eeb"),n=r("825a"),s=r("577e"),i=r("d039"),c=r("ad6d"),o="toString",u=RegExp.prototype,l=u[o],p=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),h=l.name!=o;(p||h)&&a(RegExp.prototype,o,(function(){var e=n(this),t=s(e.source),r=e.flags,a=s(void 0===r&&e instanceof RegExp&&!("flags"in u)?c.call(e):r);return"/"+t+"/"+a}),{unsafe:!0})},7767:function(e,t,r){},bb51:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container"},[r("form",{staticClass:"flex flex-nowrap",on:{submit:function(t){return t.preventDefault(),e.handleSubmit()}}},[r("label",{staticClass:"sr-only mb-1"},[e._v("Ключевое слово")]),r("div",{staticClass:"form-item d-flex justify-content-between"},[r("b-form-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 w-50",attrs:{id:"inline-form-input-name",placeholder:"Липецк"},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.handleSubmit()}}},[e._v("Скопировать")])],1)]),e.time?r("div",{staticClass:"info d-flex flex-column mt-5"},[r("p",{staticClass:"mb-3"},[e._v("Импорт завершен")]),r("ul",[r("li",[e._v("Найдена статья по адресу - "),r("span",[r("a",{attrs:{href:e.url}},[e._v(e._s(e.url))])])]),r("li",[e._v("Время обработки - "),r("span",[e._v(e._s(e.time)+" ms")])]),r("li",[e._v("Размер статьи - "),r("span",[e._v(e._s(e.size)+" Кб")])]),r("li",[e._v("Количество слов - "),r("span",[e._v(e._s(e.wordCounter))])])])]):e._e(),r("hr"),0==e.articles.length?r("p",[e._v("Список статей пуст")]):e._e(),0!==e.articles.length?r("table",{staticClass:"table mt-5"},[e._m(0),r("tbody",e._l(e.articles,(function(t){return r("tr",[r("th",[e._v(e._s(t.title))]),r("td",[r("a",{attrs:{href:t.url}},[e._v(e._s(t.url))])]),r("td",[e._v(e._s(t.size)+" Kb")]),r("td",[e._v(e._s(t.count_words))])])})),0)]):e._e()])])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[e._v("Название статьи")]),r("th",{attrs:{scope:"col"}},[e._v("Ссылка")]),r("th",{attrs:{scope:"col"}},[e._v("Размер статьи")]),r("th",{attrs:{scope:"col"}},[e._v("Количество слов")])])])}],s=r("1da1"),i=(r("96cf"),r("d3b7"),r("498a"),r("ac1f"),r("841c"),r("25f0"),{data:function(){return{searchValue:"",title:"",body:"",url:"",size:"",wordCounter:""}},computed:{articles:function(){return this.$store.getters["articles/getArticles"]},time:function(){return this.$store.getters["articles/getTime"]}},created:function(){this.$store.dispatch("articles/getAll")},methods:{searchWikipedia:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=".concat(e),t.next=3,fetch(r);case 3:if(a=t.sent,a.ok){t.next=6;break}throw Error(a.statusText);case 6:return t.next=8,a.json();case 8:return n=t.sent,t.abrupt("return",n);case 10:case"end":return t.stop()}}),t)})))()},handleSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,n,s,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=e.searchValue.trim()){t.next=4;break}return e.searchValue="",alert("Пустая строка"),t.abrupt("return");case 4:return e.$store.commit("setPreloader",!0),r=e.searchValue,a=r.trim(),t.prev=7,t.next=10,e.searchWikipedia(a);case 10:return n=t.sent,e.title=n.query.search[0].title,e.url="https://ru.wikipedia.org/?curid=".concat(n.query.search[0].pageid),s=n.query.search[0].pageid.toString(),e.size=n.query.search[0].size/1024,e.wordCounter=n.query.search[0].wordcount,t.next=18,e.takeText(n.query.search[0].title);case 18:i=t.sent,c=document.createElement("div"),c.innerHTML=i.query.pages[s].extract,e.body=c.innerText,e.$store.dispatch("articles/create",{title:e.title,body:e.body,url:e.url,size:e.size,wordCounter:e.wordCounter}),n.length<1&&alert("Ничего не найдено!"),t.next=31;break;case 26:t.prev=26,t.t0=t["catch"](7),console.log(t.t0),alert("Ошибка поиска"),e.$store.commit("setPreloader",!1);case 31:e.searchValue="";case 32:case"end":return t.stop()}}),t,null,[[7,26]])})))()},takeText:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://ru.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&titles=".concat(e,"&redirects=true"));case 3:return r=t.sent,console.log("https://ru.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&titles=".concat(e,"&redirects=true")),t.next=7,r.json();case 7:return a=t.sent,console.log(a),t.abrupt("return",a);case 12:throw t.prev=12,t.t0=t["catch"](0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()}}}),c=i,o=(r("e063"),r("2877")),u=Object(o["a"])(c,a,n,!1,null,"1caedd80",null);t["default"]=u.exports},e063:function(e,t,r){"use strict";r("7767")}}]);
//# sourceMappingURL=chunk-235027de.d719a841.js.map