(function(t){function e(e){for(var n,r,a=e[0],c=e[1],l=e[2],u=0,p=[];u<a.length;u++)r=a[u],s[r]&&p.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,a=1;a<i.length;a++){var c=i[a];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},o=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0927":function(t,e,i){},"0d35":function(t){t.exports={overview_category_all:"Alle",overview_search_placeholder:"Suche...",overview_noResults:"Keine Treffer",details_backToOverview:"Zurück zur Übersicht",details_tags:"Tags",details_layoutOption_headline:"Layout-Optionen",details_layoutOption_description:"Die Layout-Optionen visualisieren die Darstellung der Komponente in den möglichen Spaltenbreiten (Grid). Die aktuelle Darstellung ist grün markiert, weitere mögliche Optionen werden blau und nicht mögliche Optionen grau dargestellt.",details_code_externalLink:"zur Musterseite",details_code_buttonText:"HTML",details_code_copyCode:"Code kopieren",details_code_copyCode_success:"Code kopiert!",details_code_copyCode_error:"Fehler beim kopieren!",details_variants:"Varianten"}},"1fcb":function(t,e,i){"use strict";var n=i("7b5c"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),s=i("f13c"),o=i.n(s),r=i("0363"),a=i.n(r),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"style-guide"},[t.isReady?t._e():i("span",[t._v("Loading...")]),t.isReady?i("router-view"):t._e()],1)},l=[],d={computed:{isReady:function(){return this.$store.getters.getComponentList.length>0}},mounted:function(){this.$store.dispatch("loadComponentList")}},u=d,p=i("2877"),_=Object(p["a"])(u,c,l,!1,null,null,null),v=_.exports,f=i("8c4f"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"styleGuide__overview"},[i("ul",{staticClass:"styleGuide__category"},[i("li",{staticClass:"styleGuide__categoryItem",class:{"is-active":""===t.activeCategory}},[i("a",{attrs:{href:"#"},on:{click:function(e){return t.setActiveCategory()}}},[t._v(t._s(t.$t("overview_category_all")))])]),t._l(t.categories,function(e){return i("li",{key:e,staticClass:"styleGuide__categoryItem",class:{"is-active":t.activeCategory===e}},[i("a",{attrs:{href:"#"},on:{click:function(i){return t.setActiveCategory(e)}}},[t._v(t._s(e))])])})],2),i("div",{staticClass:"styleGuide__searchWrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchString,expression:"searchString"}],staticClass:"styleGuide__search",attrs:{type:"search",autofocus:"",placeholder:t.$t("overview_search_placeholder")},domProps:{value:t.searchString},on:{input:function(e){e.target.composing||(t.searchString=e.target.value)}}})]),i("div",{staticClass:"styleGuide__sort"},t._l(t.listOfSort.slice(0,13),function(e){return i("span",{key:e,staticClass:"styleGuide__sortItem"},[i("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#styleGide-"+e},expression:"{ el: '#styleGide-' + item}"}],attrs:{disabled:t.isSortItemDisabled(e)}},[t._v(t._s(e))])])}),0),i("div",{staticClass:"styleGuide__sort"},t._l(t.listOfSort.slice(13,26),function(e){return i("span",{key:e,staticClass:"styleGuide__sortItem"},[i("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#styleGide-"+e},expression:"{ el: '#styleGide-' + item}"}],attrs:{disabled:t.isSortItemDisabled(e)}},[t._v(t._s(e))])])}),0),t._l(t.filteredComponentList,function(e,n){return i("div",{key:n,attrs:{id:"styleGide-"+n}},[i("h3",{staticClass:"styleGuide__letter"},[t._v(t._s(n))]),i("ul",{staticClass:"styleGuide__items"},t._l(e,function(e){return i("li",{key:e.name,staticClass:"styleGuide__item"},[i("router-link",{attrs:{to:{name:"details",params:{name:e.name}}}},[t._v(t._s(e.keywords[0]))])],1)}),0)])}),0==Object.getOwnPropertyNames(t.filteredComponentList).length?i("div",{staticClass:"styleGuide__noResult"},[t._v(t._s(t.$t("overview_noResults")))]):t._e()],2)},h=[],y=(i("ac6a"),i("bd86")),g=i("cebc"),C=i("a4bb"),w=i.n(C),G=(i("55dd"),i("7f7f"),i("4917"),i("28a5"),{name:"styleGuide",data:function(){return{activeListOfSort:[],categories:[],activeCategory:"",listOfSort:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),searchString:""}},computed:{filteredComponentList:function(){var t=this,e=function(t,e){return e.name.toLowerCase().match(t.toLowerCase())||(e.keywords||[]).some(function(e){return e.toLowerCase().match(t.toLowerCase())})},i=this.groupComponents(this.$store.getters.getComponentList),n={},s=[],o=this.categories,r=function(r){i[r].forEach(function(i){-1===o.indexOf(i.category)&&o.push(i.category),""!==t.activeCategory&&t.activeCategory!==i.category||e(t.searchString,i)&&(n[r]||(s.push(r),n[r]=[]),n[r].push(i))})};for(var a in i)r(a);this.setactiveListOfSort(s),this.setCategories(o);var c=w()(n).sort().reduce(function(t,e){return Object(g["a"])({},t,Object(y["a"])({},e,n[e].sort(function(t,e){return t.keywords[0]<e.keywords[0]?-1:t.keywords[0]>e.keywords[0]?1:0})))},{});return c}},methods:{setactiveListOfSort:function(t){this.activeListOfSort=t},setCategories:function(t){this.categories=t},setActiveCategory:function(t){this.activeCategory=t||""},isSortItemDisabled:function(t){return!(this.activeListOfSort.indexOf(t)>-1)},groupComponents:function(t){var e={};return t.forEach(function(t){var i=t.keywords[0].charAt(0).toUpperCase();e[i]||(e[i]=[]),e[i].push(t)}),e}}}),b=G,O=(i("a9d9"),Object(p["a"])(b,m,h,!1,null,null,null)),k=O.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.component?i("div",{staticClass:"styleGuide__details"},[i("router-link",{staticClass:"styleGuide__goBackLink",attrs:{to:"/"}},[i("span",[t._v(t._s(t.$t("details_backToOverview")))])]),i("h1",{staticClass:"styleGuide__h1"},[t._v(t._s(t.component.keywords[0]))]),t.component.keywords.length>0?i("p",{staticClass:"styleGuide__tags"},[t._v(t._s(t.$t("details_tags"))+":\n     "),t._l(t.component.keywords,function(e){return i("span",{key:e,staticClass:"styleGuide__tag"},[t._v(t._s(e))])})],2):t._e(),i("div",{staticClass:"styleGuide__grid"},[i("div",{staticClass:"styleGuide__col styleGuide__col--50"},[i("p",{staticClass:"styleGuide__description",domProps:{innerHTML:t._s(t.component.description)}})]),i("div",{staticClass:"styleGuide__col styleGuide__col--50"},[Object.keys(t.component.biotope.grid).length>0?i("grid-option",{attrs:{"grid-options":t.component.biotope.grid.allowedColumns}}):t._e()],1)]),"componentVariants"in t.component.biotope&&t.component.biotope.componentVariants.length>0?i("h2",{staticClass:"styleGuide__variantsHeadline"},[t._v(t._s(t.$t("details_variants")))]):t._e(),i("div",{staticClass:"styleGuide__variants"},t._l(t.component.biotope.componentVariants,function(e){return i("Variant",{key:e,attrs:{variant:e,component:t.component}})}),1)],1):t._e()},S=[],$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"styleGuide__variant"},[t.markup?t._e():i("div",[t._v("\n      Loading Component...\n    ")]),t.markup?i("div",[i("h3",{staticClass:"styleGuide__variantHeadline"},[t._v(t._s(t.variant.name))]),t.variant.description?i("div",{staticClass:"styleGuide__variantDescription",domProps:{innerHTML:t._s(t.variant.description)}}):t._e(),t.variant.externalLink?t._e():i("div",{staticClass:"styleGuide__markup",domProps:{innerHTML:t._s(t.getGridMarkup(t.getGrid,t.markup))}}),t.variant.externalLink?i("div",{staticClass:"styleGuide__externalLink"},[i("a",{attrs:{href:t.getExternalUrl(),target:"_blank",rel:"noopener"}},[t._v(t._s(t.$t("details_code_externalLink")))])]):t._e(),t.variant.externalLink?t._e():i("div",{staticClass:"styleGuide__codeSection",class:{"is-active":t.show}},[i("div",{staticClass:"styleGuide__toolbar"},[i("a",{staticClass:"styleGuide__showCode",attrs:{href:"javascript:"},on:{click:function(e){t.show=!t.show}}},[t._v(t._s(t.$t("details_code_buttonText")))]),t.show?i("a",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.markup,expression:"markup",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"styleGuide__copyCode",class:t.currentCopyClass,attrs:{href:"javascript:"}},[t._v(t._s(t.currentCopyText))]):t._e()]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"styleGuide__code"},[i("prism",{attrs:{language:"html"}},[t._v(t._s(t.markup))])],1)])]):t._e()])},x=[],T=(i("a481"),i("c197"),i("fa97"),i("8d51")),j=i.n(T),D=i("bc3a"),E=i.n(D),U={name:"Variant",props:["variant","component"],data:function(){return{item:this.variant,componentMarkup:"",show:!1,currentCopyClass:"",currentCopyText:this.$t("details_code_copyCode")}},methods:{getExternalUrl:function(){return"".concat(this.$store.getters.getUrlRoot).concat(this.component.name,"/styleGuide/").concat(this.variant.outputFileName)},getGridMarkup:function(t,e){var i=this,n=this.$store.getters["getGridGenerateCol"](t,e);return n=n.replace('src="','src="'+this.$store.getters.getResourceUrl),this.$nextTick(function(){i.$parent.markupLoaded=i.$parent.markupLoaded+1}),n},onCopy:function(){var t=this;this.currentCopyClass="is-active",this.currentCopyText=this.$t("details_code_copyCode_success"),setTimeout(function(){t.currentCopyClass="",t.currentCopyText=t.$t("details_code_copyCode")},5e3)},onError:function(){var t=this;this.currentCopyText=this.$t("details_code_copyCode_error"),setTimeout(function(){t.currentCopyText=t.$t("details_code_copyCode")},5e3)}},created:function(){this.$store.dispatch("loadSelectedGrid",12)},computed:{getGrid:function(){return this.$store.getters.getSelectedGrid}},asyncComputed:{markup:function(){return E.a.get("".concat(this.$store.getters.getUrlRoot).concat(this.component.name,"/styleGuide/").concat(this.variant.outputFileName)).then(function(t){return t.data})}},components:{Prism:j.a}},N=U,B=(i("91f4"),Object(p["a"])(N,$,x,!1,null,null,null)),M=B.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.showGrid?i("div",{staticClass:"gridOption"},[i("h3",{staticClass:"gridOption__headline"},[t._v("\n        "+t._s(t.$t("details_layoutOption_headline"))+"\n        "),i("span",{staticClass:"tooltip gridOption__tooltip",attrs:{"data-tooltip":t.$t("details_layoutOption_description")}})]),i("div",{staticClass:"gridOption__grid"},[i("div",{staticClass:"gridOption__row gridOption__row--12",class:{"is-active":t.canBeUsedinGrid(12),"is-selected":12===t.isSelected}},t._l(1,function(e){return i("div",{key:e,staticClass:"gridOption__col",attrs:{title:"12 in 12"},on:{click:function(e){return t.setGrid(12)}}})}),0),i("div",{staticClass:"gridOption__row gridOption__row--6",class:{"is-active":t.canBeUsedinGrid(6),"is-selected":6===t.isSelected}},t._l(2,function(e){return i("div",{key:e,staticClass:"gridOption__col",attrs:{title:"6 in 12"},on:{click:function(e){return t.setGrid(6)}}})}),0),i("div",{staticClass:"gridOption__row gridOption__row--4",class:{"is-active":t.canBeUsedinGrid(4),"is-selected":4===t.isSelected}},t._l(3,function(e){return i("div",{key:e,staticClass:"gridOption__col",attrs:{title:"4 in 12"},on:{click:function(e){return t.setGrid(4)}}})}),0),i("div",{staticClass:"gridOption__row gridOption__row--3",class:{"is-active":t.canBeUsedinGrid(3),"is-selected":3===t.isSelected}},t._l(4,function(e){return i("div",{key:e,staticClass:"gridOption__col",attrs:{title:"3 in 12"},on:{click:function(e){return t.setGrid(3)}}})}),0),i("div",{staticClass:"gridOption__row gridOption__row--2",class:{"is-active":t.canBeUsedinGrid(2),"is-selected":2===t.isSelected}},t._l(6,function(e){return i("div",{key:e,staticClass:"gridOption__col",attrs:{title:"2 in 12"},on:{click:function(e){return t.setGrid(2)}}})}),0),i("div",{staticClass:"gridOption__row gridOption__row--0",class:{"is-active":t.canBeUsedinGrid(0),"is-selected":0===t.isSelected}},[i("div",{staticClass:"gridOption__col gridOption__col--full",attrs:{title:"Fullscreen"},on:{click:function(e){return t.setGrid(0)}}})])])]):t._e()},R=[],V=(i("6762"),i("2fdb"),{name:"GridOption",data:function(){return{showGrid:!0,isSelected:12}},props:{gridOptions:{type:Array,required:!0}},created:function(){if(this.$parent.getComponent){var t=this.$parent.getComponent.biotope.allowedInGrid;t.length?this.$store.dispatch("loadSelectedGrid",t[0]):this.showGrid=!1}},methods:{setGrid:function(t){this.canBeUsedinGrid(t)&&(this.isSelected=t,this.$store.dispatch("loadSelectedGrid",t))},canBeUsedinGrid:function(t){return!!this.gridOptions&&this.gridOptions.includes(t)}}}),I=V,A=(i("1fcb"),Object(p["a"])(I,P,R,!1,null,null,null)),H=A.exports,z={name:"Details",data:function(){return{markupLoaded:0}},watch:{markupLoaded:function(t){if(this.component&&this.component.biotope.componentVariants.length<=t){var e=document.createEvent("Event");e.initEvent("styleGuide-markupLoaded",!0,!0),window.dispatchEvent(e)}}},computed:{component:function(){var t=this.$store.getters.getComponentByName(this.$route.params.name);return t||this.$store.dispatch("loadComponentDetails",this.$route.params.name),this.$store.getters.getComponentByName(this.$route.params.name)}},components:{Variant:M,GridOption:H}},F=z,J=(i("fd4f"),Object(p["a"])(F,L,S,!1,null,null,null)),K=J.exports;n["a"].use(f["a"]);var W=new f["a"]({base:"/",routes:[{path:"/",name:"overview",component:k},{path:"/details/:name",name:"details",component:K}],scrollBehavior:function(){return{x:0,y:0}}}),Z=i("2f62"),q=i("a7fe"),Q=i.n(q),X=i("f2f3"),Y=i("e7ee"),tt=i("0d35"),et=function(t,e){t.use(Q.a,E.a),t.use(Z["a"]);var i=new Z["a"].Store({state:{componentList:[],selectedGrid:12,componentDetails:{}},getters:{getUrlRoot:function(){return e.root||""},getResourceUrl:function(){return e.resourceUrl||""},getGridGenerateCol:function(){return e.gridGenerateCol},getComponentList:function(t){return t.componentList},getComponentByName:function(t){return function(e){return t.componentDetails[e]}},getSelectedGrid:function(t){return t.selectedGrid}},mutations:{setComponentList:function(t,e){t.componentList=e},setSelectedGrid:function(t,e){t.selectedGrid=e},setComponentDetails:function(t,e){var i=e.detail,n=e.componentName;t.componentDetails=Object(g["a"])({},t.componentDetails,Object(y["a"])({},n,i))}},actions:{loadSelectedGrid:function(t,e){var i=t.commit;i("setSelectedGrid",e)},loadComponentList:function(t){var i=t.commit;E.a.get("".concat(e.root,"componentOverview.json")).then(function(t){return t.data}).then(function(t){i("setComponentList",t)})},loadComponentDetails:function(t,i){var n=t.commit;E.a.get("".concat(e.root).concat(i,"/package.json")).then(function(t){return t.data}).then(function(t){n("setComponentDetails",{detail:t,componentName:i})})}}});return t.use(X["a"].plugin,i),t.i18n.add("en",Y),t.i18n.add("de",tt),t.i18n.set(e.locale||"en"),i},it=i("4eb5"),nt=i.n(it),st=i("3003");window.biotope=window.biotope||{},window.biotope.styleGuide=window.biotope.styleGuide||{},window.biotope.styleGuide.init=function(t){n["a"].directive("resize",{inserted:function(t){a()({log:!1,autoResize:!0},t)}}),n["a"].use(o.a,{offset:t.contentOffset.top||0}),n["a"].use(st["a"]),n["a"].use(nt.a),new n["a"]({store:et(n["a"],t),router:W,test:{some:"value"},render:function(t){return t(v)}}).$mount(t.entryPoint||"#style-guide")}},"63c6":function(t,e,i){},"74b0":function(t,e,i){},"7b5c":function(t,e,i){},"91f4":function(t,e,i){"use strict";var n=i("74b0"),s=i.n(n);s.a},a9d9:function(t,e,i){"use strict";var n=i("0927"),s=i.n(n);s.a},e7ee:function(t){t.exports={overview_category_all:"All",overview_search_placeholder:"Search...",overview_noResults:"No results",details_backToOverview:"Back to Overview",details_tags:"Tags",details_layoutOption_headline:"Layout Option",details_layoutOption_description:"The layout options visualize the representation of the component in the possible column widths (Grid). The current display is marked in green, other possible options are displayed in blue and options not possible in gray.",details_code_externalLink:"sample page",details_code_buttonText:"HTML",details_code_copyCode:"Copy Code",details_code_copyCode_success:"Code copied!",details_code_copyCode_error:"Error while copying!",details_variants:"Variants"}},fd4f:function(t,e,i){"use strict";var n=i("63c6"),s=i.n(n);s.a}});
//# sourceMappingURL=style-guide.js.map