!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.RecyclerView=e():t.RecyclerView=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=9)}([function(t,e,i){t.exports=!i(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var i=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=i)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},function(t,e,i){var n=i(17),s=i(22),o=i(24),r=Object.defineProperty;e.f=i(0)?Object.defineProperty:function(t,e,i){if(n(t),e=o(e,!0),n(i),s)try{return r(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(10),o=n(s),r=i(8),h=n(r),a=i(11),c={render:function(t){return t("div",{attrs:{class:"recyclerview-loading"}},"Loading...")}},u={render:function(t){return t("div",{attrs:{class:"recyclerview-item tombstone"},style:{height:"100px",width:"100%"}},"")}},l={preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|IMG)$/},distance:50,animation_duration_ms:200,tombstone_class:"tombstone",invisible_class:"invisible",prerender:20,remain:10,preventDefault:!1,column:1};e.default=function(t){return{name:"RecyclerView",props:{fetch:Function,list:Array,item:Object,loading:Object,tombstone:{type:Object,default:function(){return u}},column:Number,prerender:Number,remain:Number,preventDefault:Boolean,options:Object,tag:{type:String,default:"div"}},render:function(t){return t(this.tag,{attrs:{class:"recyclerview-container"}},[t(this.loading||c),t(this.tag,{attrs:{class:"recyclerview"},on:{touchstart:this._start,touchmove:this._move,touchend:this._end,touchcancel:this._end,mousedown:this._start,mousemove:this._move,mouseup:this._end}})])},data:function(){return{startPointer:{x:0,y:0},_options:{},distance:0,pulling:!1,contentSource:new h.default(this.fetch,this.item,this.tombstone,t),scroller:null}},mounted:function(){this.init()},beforeDestroy:function(){this.scroller.destroy()},methods:{init:function(){this._options=(0,a.assign)({},l,{prerender:this.prerender,remain:this.remain,column:this.column},this.options),this.$list=this.$el.querySelector(".recyclerview"),this.scroller=new o.default(this.$list,this.list,this._options.column,this.contentSource,this._options)},scrollToIndex:function(t){var e=this;t=Number(t),this.scroller.scrollToIndex(t),this.$nextTick(function(){e._scrollToBottom()})},_scrollTo:function(t){t=t||0,this.$list.scrollTop=Number(t)},_scrollToBottom:function(){this._scrollTo(this.$list.scrollHeight)},_renderListStyle:function(){this.$list.style.transform="translate3d(0, "+this.distance+"px, 0)"},_start:function(t){this.$list.scrollTop>0||(this.pulling=!0,this.startPointer=(0,a.getEventPosition)(t),this.$list.style.transition="transform .2s",this.preventDefault&&!(0,a.preventDefaultException)(t.target,this._options.preventDefaultException)&&t.preventDefault())},_move:function(t){if(this.pulling){var e=(0,a.getEventPosition)(t),i=e.y-this.startPointer.y;if(i<0)return void this._scrollTo(-i);this.preventDefault&&!(0,a.preventDefaultException)(t.target,this._options.preventDefaultException)&&t.preventDefault(),this.distance=Math.floor(.5*i),this.distance>this._options.distance&&(this.distance=this._options.distance),(0,a.requestAnimationFrame)(this._renderListStyle.bind(this))}},_end:function(t){var e=this;this.pulling&&(this.preventDefault&&!(0,a.preventDefaultException)(t.target,this._options.preventDefaultException)&&t.preventDefault(),this.pulling=!1,this.$list.style.transition="transform .3s",this.$nextTick(function(){e.$list.style.transform=""}),this.distance>=this._options.distance&&(this.distance=0,this.scroller.clear()))}}}}},function(t,e,i){var n=i(26);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(28)("400fffea",n,!0)},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(13),o=n(s),r=i(14),h=n(r),a=function(){function t(e,i,n,s){(0,o.default)(this,t),this.itemRender=i,this.TombstoneRender=n,this.fetch=e,this.Vue=s}return(0,h.default)(t,[{key:"createTombstone",value:function(t){var e=this;return new this.Vue({el:t,render:function(t){return t(e.TombstoneRender)}}).$el}},{key:"render",value:function(t,e,i){var n=this,s=new this.Vue({el:e,render:function(e){return e(n.itemRender,{props:{data:t}})}});return i.vm=s,s.$el}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t){var e=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],(0,o.default)(t));return t.component(e.name,e),e}Object.defineProperty(e,"__esModule",{value:!0});var s=i(6),o=function(t){return t&&t.__esModule?t:{default:t}}(s);i(7),e.default={install:n},"undefined"!=typeof window&&window.Vue&&window.Vue.use(n)},function(t,e,i){"use strict";function n(t,e,i,n,o){this.RUNWAY_ITEMS=o.prerender,this.RUNWAY_ITEMS_OPPOSITE=o.remain,this.ANIMATION_DURATION_MS=o.animation_duration_ms,this.TOMBSTONE_CLASS=o.tombstone_class,this.INVISIBLE_CLASS=o.invisible_class,this.MAX_COUNT=s,this.column=i||1,this.anchorItem={index:0,offset:0},this.firstAttachedItem_=0,this.lastAttachedItem_=0,this.anchorScrollTop=0,this.tombstoneSize_=0,this.tombstoneWidth_=0,this.tombstones_=[],this.scroller_=t,this.source_=n,this.items_=e||[],this.loadedItems_=0,this.requestInProgress_=!1,this.source_.fetch||this.setItems(e),this.curPos=0,this.unusedNodes=[],this.baseNode=document.createElement("div"),this.scroller_.addEventListener("scroll",this.onScroll_.bind(this)),window.addEventListener("resize",this.onResize_.bind(this)),window.addEventListener("orientationchange",this.onResize_.bind(this)),this.onResize_()}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var s=1/0;n.prototype={onResize_:function(){var t=this.source_.createTombstone(this.baseNode.cloneNode(!0));t.style.position="absolute",this.scroller_.appendChild(t),t.classList.remove(this.INVISIBLE_CLASS),this.tombstoneSize_=t.offsetHeight/this.column,this.tombstoneWidth_=t.offsetWidth,this.scroller_.removeChild(t);for(var e=0;e<this.items_.length;e++)this.items_[e].height=this.items_[e].width=0;this.onScroll_()},onScroll_:function(){var t=this.scroller_.scrollTop-this.anchorScrollTop;0==this.scroller_.scrollTop?this.anchorItem={index:0,offset:0}:this.anchorItem=this.calculateAnchoredItem(this.anchorItem,t),this.anchorScrollTop=this.scroller_.scrollTop;var e=this.calculateAnchoredItem(this.anchorItem,this.scroller_.offsetHeight);t<0?this.fill(this.anchorItem.index-this.RUNWAY_ITEMS,e.index+this.RUNWAY_ITEMS_OPPOSITE):this.fill(this.anchorItem.index-this.RUNWAY_ITEMS_OPPOSITE,e.index+this.RUNWAY_ITEMS)},calculateAnchoredItem:function(t,e){if(0==e)return t;e+=t.offset;var i=t.index,n=0;if(e<0){for(;e<0&&i>0&&this.items_[i-1].height;)e+=this.items_[i-1].height,i--;n=Math.max(-i,Math.ceil(Math.min(e,0)/this.tombstoneSize_))}else{for(;e>0&&i<this.items_.length&&this.items_[i].height&&this.items_[i].height<e;)e-=this.items_[i].height,i++;(i>=this.items_.length||!this.items_[i].height)&&(n=Math.floor(Math.max(e,0)/this.tombstoneSize_))}return i+=n,e-=n*this.tombstoneSize_,{index:Math.floor(i/this.column)*this.column,offset:e}},fill:function(t,e){this.firstAttachedItem_=Math.max(0,t),this.lastAttachedItem_=e,this.attachContent()},getTombstone:function(){var t=this.tombstones_.pop();return t?(t.classList.remove(this.INVISIBLE_CLASS),t.style.opacity=1,t.style.transform="",t.style.transition="",t):this.source_.createTombstone(this.baseNode.cloneNode(!0))},getUnUsedNodes:function(){for(var t=0;t<this.items_.length;t++)t!==this.firstAttachedItem_?(this.items_[t].vm?this.clearItem(this.items_[t]):this.clearTombstone(this.items_[t]),this.items_[t].vm=null,this.items_[t].node=null):t=this.lastAttachedItem_-1},clearItem:function(t){t.vm&&(t.vm.$destroy(),t.node&&this.unusedNodes.push(t.node))},clearTombstone:function(t){t.node&&(t.node.classList.contains(this.TOMBSTONE_CLASS)?(this.tombstones_.push(t.node),this.tombstones_[this.tombstones_.length-1].classList.add(this.INVISIBLE_CLASS)):this.unusedNodes.push(t.node))},clearUnUsedNodes:function(){for(;this.unusedNodes.length;)this.scroller_.removeChild(this.unusedNodes.pop())},getNodePosition:function(){this.anchorScrollTop=0;for(var t=0;t<this.anchorItem.index;t++)this.anchorScrollTop+=this.items_[t].height||this.tombstoneSize_;this.anchorScrollTop+=this.anchorItem.offset,this.curPos=this.anchorScrollTop-this.anchorItem.offset;for(var e=this.anchorItem.index;e>this.firstAttachedItem_;)this.curPos-=this.items_[e-1].height||this.tombstoneSize_,e--;for(;e<this.firstAttachedItem_;)this.curPos+=this.items_[e].height||this.tombstoneSize_,e++},tombstoneLayout:function(t){var e=void 0,i=void 0,n=void 0;for(e in t)i=t[e],n=e%this.column*this.items_[e].width,this.items_[e].node.style.transform="translate3d("+n+"px,"+(this.anchorScrollTop+i[1])*this.column+"px, 0) scale("+this.tombstoneWidth_/this.items_[e].width+", "+this.tombstoneSize_/this.items_[e].height+")",this.items_[e].node.offsetTop,i[0].offsetTop,this.items_[e].node.style.transition="transform "+this.ANIMATION_DURATION_MS+"ms"},itemLayout:function(t){var e=void 0,i=void 0,n=0;for(e=this.firstAttachedItem_;e<this.lastAttachedItem_;e++)i=t[e],n=e%this.column*(this.items_[e].width||this.tombstoneWidth_),i&&(i[0].style.transition="transform "+this.ANIMATION_DURATION_MS+"ms, opacity "+this.ANIMATION_DURATION_MS+"ms",i[0].style.transform="translate3d("+n+"px,"+this.curPos+"px, 0) scale("+this.items_[e].width/this.tombstoneWidth_+", "+this.items_[e].height/this.tombstoneSize_+")",i[0].style.opacity=0),this.curPos!==this.items_[e].top&&(i||(this.items_[e].node.style.transition=""),this.items_[e].node.style.transform="translate3d("+n+"px,"+this.curPos+"px, 0)"),this.items_[e].top=this.curPos,(e+1)%this.column==0&&(this.curPos+=(this.items_[e].height|this.tombstoneSize_)*this.column)},setAnimatePosition:function(t){this.tombstoneLayout(t),this.itemLayout(t)},renderItems:function(){var t={},e=void 0,i=[],n=void 0;for(this.lastAttachedItem_>this.MAX_COUNT&&(this.lastAttachedItem_=this.MAX_COUNT-1),n=this.firstAttachedItem_;n<this.lastAttachedItem_;n++){for(;this.items_.length<=n;)this.addItem_();if(this.items_[n].node){if(!this.items_[n].node.classList.contains(this.TOMBSTONE_CLASS)||!this.items_[n].data)continue;this.ANIMATION_DURATION_MS?(this.items_[n].node.style.zIndex=1,t[n]=[this.items_[n].node,this.items_[n].top-this.anchorScrollTop]):(this.items_[n].node.classList.add(this.INVISIBLE_CLASS),this.tombstones_.push(this.items_[n].node)),this.items_[n].node=null}e=this.items_[n].data?this.source_.render(this.items_[n].data,this.unusedNodes.pop()||this.baseNode.cloneNode(!0),this.items_[n]):this.getTombstone(),e.style.position="absolute",this.items_[n].top=-1,this.items_[n].node=e,i.push(e)}var s=i.length;for(n=0;n<s;n++)this.scroller_.appendChild(i[n]);return t},cacheItemHeight:function(){for(var t=this.firstAttachedItem_;t<this.lastAttachedItem_;t++)this.items_[t].data&&!this.items_[t].height&&(this.items_[t].height=this.items_[t].node.offsetHeight/this.column,this.items_[t].width=this.items_[t].node.offsetWidth)},attachContent:function(){var t=this;this.getUnUsedNodes();var e=this.renderItems();this.clearUnUsedNodes(),this.cacheItemHeight(),this.getNodePosition(),this.setAnimatePosition(e),this.ANIMATION_DURATION_MS&&setTimeout(function(){t.tombstoneAnimation(e)},this.ANIMATION_DURATION_MS),this.maybeRequestContent()},setItems:function(t){t=t||[],this.items_=t,this.MAX_COUNT=t.length},scrollToIndex:function(t){this.fill(0,t+1)},setScrollRunway:function(){this.scrollRunwayEnd_=Math.max(this.scrollRunwayEnd_,this.curPos+this.SCROLL_RUNWAY),this.scrollRunway_.style.transform="translate(0, "+this.scrollRunwayEnd_+"px)",this.scroller_.scrollTop=this.anchorScrollTop},tombstoneAnimation:function(t){var e=void 0;for(var i in t)e=t[i],e[0].classList.add(this.INVISIBLE_CLASS),this.tombstones_.push(e[0]);t=null},maybeRequestContent:function(){var t=this;if(!this.requestInProgress_){var e=this.lastAttachedItem_-this.loadedItems_;e<=0||(this.requestInProgress_=!0,this.source_.fetch&&this.source_.fetch(e,this.loadedItems_).then(function(e){t.MAX_COUNT=e.count,t.addContent(e.list)}))}},addItem_:function(){this.items_.push({vm:null,data:null,node:null,height:0,width:0,top:0})},addContent:function(t){this.requestInProgress_=!1;for(var e=void 0,i=0;i<t.length;i++)this.items_.length<=this.loadedItems_&&this.addItem_(),this.loadedItems_<=this.MAX_COUNT&&(e=this.loadedItems_++,this.items_[e].data=t[i]);this.attachContent()},clear:function(){this.loadedItems_=0,this.requestInProgress_=!1,this.firstAttachedItem_=-1,this.lastAttachedItem_=-1,this.getUnUsedNodes(),this.clearUnUsedNodes(),this.items_=[],this.onResize_()},destroy:function(){this.scroller_.removeEventListener("scroll",this.onScroll_),window.removeEventListener("resize",this.onResize_),window.removeEventListener("orientationchange",this.onResize_),this.clear()}}},function(t,e,i){"use strict";function n(t){if(!t)return r;if(a.test(t.type)){var e=t.touches[0];return{x:e.clientX,y:e.clientY}}return h.test(t.type)?{x:t.clientX,y:t.clientY}:r}function s(t,e){for(var i in e)if(e[i].test(t[i]))return!0;return!1}function o(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),n=1;n<arguments.length;n++){var s=arguments[n];if(s)for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(i[o]=s[o])}return i}Object.defineProperty(e,"__esModule",{value:!0}),e.getEventPosition=n,e.preventDefaultException=s,e.assign=o;var r={x:0,y:0},h=/mouse(down|move|up)/,a=/touch(start|move|end)/;e.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}},function(t,e,i){t.exports={default:i(15),__esModule:!0}},function(t,e,i){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,i){"use strict";e.__esModule=!0;var n=i(12),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s.default)(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}()},function(t,e,i){i(25);var n=i(2).Object;t.exports=function(t,e,i){return n.defineProperty(t,e,i)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,i){var n=i(1);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,i){var n=i(16);t.exports=function(t,e,i){if(n(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,s){return t.call(e,i,n,s)}}return function(){return t.apply(e,arguments)}}},function(t,e,i){var n=i(1),s=i(4).document,o=n(s)&&n(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},function(t,e,i){var n=i(4),s=i(2),o=i(18),r=i(21),h=function(t,e,i){var a,c,u,l=t&h.F,f=t&h.G,d=t&h.S,m=t&h.P,p=t&h.B,_=t&h.W,v=f?s:s[e]||(s[e]={}),y=v.prototype,g=f?n:d?n[e]:(n[e]||{}).prototype;f&&(i=e);for(a in i)(c=!l&&g&&void 0!==g[a])&&a in v||(u=c?g[a]:i[a],v[a]=f&&"function"!=typeof g[a]?i[a]:p&&c?o(u,n):_&&g[a]==u?function(t){var e=function(e,i,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,i)}return new t(e,i,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(u):m&&"function"==typeof u?o(Function.call,u):u,m&&((v.virtual||(v.virtual={}))[a]=u,t&h.R&&y&&!y[a]&&r(y,a,u)))};h.F=1,h.G=2,h.S=4,h.P=8,h.B=16,h.W=32,h.U=64,h.R=128,t.exports=h},function(t,e,i){var n=i(5),s=i(23);t.exports=i(0)?function(t,e,i){return n.f(t,e,s(1,i))}:function(t,e,i){return t[e]=i,t}},function(t,e,i){t.exports=!i(0)&&!i(3)(function(){return 7!=Object.defineProperty(i(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,i){var n=i(1);t.exports=function(t,e){if(!n(t))return t;var i,s;if(e&&"function"==typeof(i=t.toString)&&!n(s=i.call(t)))return s;if("function"==typeof(i=t.valueOf)&&!n(s=i.call(t)))return s;if(!e&&"function"==typeof(i=t.toString)&&!n(s=i.call(t)))return s;throw TypeError("Can't convert object to primitive value")}},function(t,e,i){var n=i(20);n(n.S+n.F*!i(0),"Object",{defineProperty:i(5).f})},function(t,e,i){e=t.exports=i(27)(),e.push([t.i,".recyclerview-container{position:relative}.recyclerview-loading{position:absolute;top:0;left:0;width:100%;text-align:center;padding:10px;font-size:14px;color:#9e9e9e}.recyclerview{margin:0;padding:0;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%;position:absolute;box-sizing:border-box;contain:layout;will-change:transform}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(n[o]=!0)}for(s=0;s<e.length;s++){var r=e[s];"number"==typeof r[0]&&n[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),t.push(r))}},t}},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=u[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(o(i.parts[s]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var r=[],s=0;s<i.parts.length;s++)r.push(o(i.parts[s]));u[i.id]={id:i.id,refs:1,parts:r}}}}function s(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function o(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(m)return p;n.parentNode.removeChild(n)}if(_){var o=d++;n=f||(f=s()),e=r.bind(null,n,o,!1),i=r.bind(null,n,o,!0)}else n=s(),e=h.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function r(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=v(e,s);else{var o=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function h(t,e){var i=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=i(29),u={},l=a&&(document.head||document.getElementsByTagName("head")[0]),f=null,d=0,m=!1,p=function(){},_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){m=i;var s=c(t,e);return n(s),function(e){for(var i=[],o=0;o<s.length;o++){var r=s[o],h=u[r.id];h.refs--,i.push(h)}e?(s=c(t,e),n(s)):s=[];for(var o=0;o<i.length;o++){var h=i[o];if(0===h.refs){for(var a=0;a<h.parts.length;a++)h.parts[a]();delete u[h.id]}}}};var v=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],n={},s=0;s<e.length;s++){var o=e[s],r=o[0],h=o[1],a=o[2],c=o[3],u={id:t+":"+s,css:h,media:a,sourceMap:c};n[r]?n[r].parts.push(u):i.push(n[r]={id:r,parts:[u]})}return i}}])});