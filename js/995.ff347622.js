(self["webpackChunkhtqdtt"]=self["webpackChunkhtqdtt"]||[]).push([[995],{5538:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return $}});var i=function(){var t=this,n=t._self._c;return n("div",[n("van-nav-bar",{attrs:{fixed:"",title:"文章详情","left-arrow":""},on:{"click-left":function(n){return t.$router.back()}}}),0===Object.keys(t.artObj).length?n("van-loading",{attrs:{color:"#1989fa"}},[t._v("文章加载中...")]):n("div",[n("div",{staticClass:"article-container"},[n("h1",{staticClass:"art-title"},[t._v(t._s(t.artObj.title))]),n("van-cell",{attrs:{center:"",title:t.artObj.aut_name,label:t.formatDate(t.artObj.pubdate)},scopedSlots:t._u([{key:"icon",fn:function(){return[n("img",{staticClass:"avatar",attrs:{src:t.artObj.aut_photo,alt:""}})]},proxy:!0},{key:"default",fn:function(){return[n("div",[!0===t.artObj.is_followed?n("van-button",{attrs:{type:"info",size:"mini"},on:{click:function(n){return t.followedFn(!0)}}},[t._v(" 已关注 ")]):n("van-button",{attrs:{icon:"plus",type:"info",size:"mini",plain:""},on:{click:function(n){return t.followedFn(!1)}}},[t._v(" 关注 ")])],1)]},proxy:!0}])}),n("van-divider"),n("div",{staticClass:"art-content",domProps:{innerHTML:t._s(t.artObj.content)}}),n("van-divider",[t._v("End")]),n("div",{staticClass:"like-box"},[1===t.artObj.attitude?n("van-button",{attrs:{icon:"good-job",type:"danger",size:"small"},on:{click:function(n){return t.loveFn(!0)}}},[t._v("已点赞")]):n("van-button",{attrs:{icon:"good-job-o",type:"danger",plain:"",size:"small"},on:{click:function(n){return t.loveFn(!1)}}},[t._v(" 点赞 ")])],1)],1),n("div",[n("CommentList")],1)])],1)},r=[],a=e(7220),s=e(586),o=function(){var t=this,n=t._self._c;return n("div",[n("div",{staticClass:"cmt-list",class:{"art-cmt-container-1":t.isShowCmtInput,"art-cmt-container-2":!t.isShowCmtInput}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多评论了，请发表评论","immediate-check":!1,offset:"100"},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},t._l(t.commentArr,(function(e){return n("div",{key:e.com_id,staticClass:"cmt-item"},[n("div",{staticClass:"cmt-header"},[n("div",{staticClass:"cmt-header-left"},[n("img",{staticClass:"avatar",attrs:{src:e.aut_photo,alt:""}}),n("span",{staticClass:"uname"},[t._v(t._s(e.aut_name))])]),n("div",{staticClass:"cmt-header-right"},[!0===e.is_liking?n("van-icon",{attrs:{name:"like",size:"16",color:"red"},on:{click:function(n){return t.likeFn(!0,e)}}}):n("van-icon",{attrs:{name:"like-o",size:"16",color:"gray"},on:{click:function(n){return t.likeFn(!1,e)}}})],1)]),n("div",{staticClass:"cmt-body"},[t._v(" "+t._s(e.content)+" ")]),n("div",{staticClass:"cmt-footer"},[t._v(t._s(t.timeAgo(e.pubdate)))])])})),0)],1),!0===t.isShowCmtInput?n("div",{staticClass:"add-cmt-box van-hairline--top"},[n("van-icon",{attrs:{name:"arrow-left",size:"0.48rem"},on:{click:function(n){return t.$router.back()}}}),n("div",{staticClass:"ipt-cmt-div",on:{click:t.toggleShowFn}},[t._v("发表评论")]),n("div",{staticClass:"icon-box"},[n("van-badge",{attrs:{content:0===t.totalCount?"":t.totalCount,max:"99"}},[n("van-icon",{attrs:{name:"comment-o",size:"0.53333334rem"},on:{click:t.commentClickFn}})],1),n("van-icon",{attrs:{name:"star-o",size:"0.53333334rem"}}),n("van-icon",{attrs:{name:"share-o",size:"0.53333334rem"}})],1)],1):n("div",{staticClass:"cmt-box van-hairline--top"},[n("textarea",{directives:[{name:"fofo",rawName:"v-fofo"},{name:"model",rawName:"v-model.trim",value:t.comText,expression:"comText",modifiers:{trim:!0}}],attrs:{placeholder:"友善评论、理性发言、阳光心灵"},domProps:{value:t.comText},on:{blur:[t.blurFn,function(n){return t.$forceUpdate()}],input:function(n){n.target.composing||(t.comText=n.target.value.trim())}}}),n("van-button",{attrs:{type:"default",disabled:0===t.comText.length},on:{click:t.sendFn}},[t._v("发布")])],1)])},u=[],c={data(){return{offset:null,commentArr:[],isShowCmtInput:!0,totalCount:0,comText:"",finished:!1,loading:!1,lastId:null}},methods:{timeAgo:a.S,async likeFn(t,n){if(!0===t){const t=await(0,s.th)({comId:n.com_id});console.log("不点赞",t),n.is_liking=!1}else{const t=await(0,s.Q1)({comId:n.com_id});console.log("点赞",t),n.is_liking=!0}},toggleShowFn(){this.isShowCmtInput=!1},commentClickFn(){document.querySelector(".like-box").scrollIntoView({behavior:"smooth"})},async sendFn(){const t=await(0,s.qQ)({id:this.$route.query.art_id,content:this.comText});console.log("发布评论：",t),this.commentArr.unshift(t.data.data.new_obj),this.comText="",this.totalCount++,this.commentClickFn()},blurFn(){setTimeout((()=>{this.isShowCmtInput=!0}),0)},async onLoad(){if(this.commentArr.length>0){const t=await(0,s.nW)({id:this.$route.query.art_id,offset:this.lastId});console.log("再次请求获取评论：",t),this.commentArr=[...this.commentArr,...t.data.data.results],this.totalCount=t.data.data.total_count,this.lastId=t.data.data.last_id,null===t.data.data.last_id&&(this.finished=!0),this.loading=!1}else this.loading=!1}},async created(){const t=await(0,s.nW)({id:this.$route.query.art_id});console.log("评论：",t),this.commentArr=t.data.data.results,this.totalCount=t.data.data.total_count,this.lastId=t.data.data.last_id,0===t.data.data.results.length&&(this.finished=!0)}},l=c,d=e(1001),h=(0,d.Z)(l,o,u,!1,null,"c4ead28c",null),f=h.exports,m={name:"Detail",data(){return{artObj:{}}},components:{CommentList:f},methods:{formatDate:a.S,async followedFn(t){if(!0===t){this.artObj.is_followed=!1;const t=await(0,s.ij)({autId:this.artObj.aut_id});console.log("取关：",t)}else{this.artObj.is_followed=!0;const t=await(0,s.ty)({autId:this.artObj.aut_id});console.log("关注：",t)}},async loveFn(t){if(!0===t){this.artObj.attitude=0;const t=await(0,s.HB)({artId:this.artObj.art_id});console.log("取消点赞：",t)}else{this.artObj.attitude=1;const t=await(0,s.DO)({artId:this.artObj.art_id});console.log("点赞：",t)}}},async created(){const t=await(0,s.X3)({artId:this.$route.query.art_id});console.log("文章详情：",t),this.artObj=t.data.data}},v=m,_=(0,d.Z)(v,i,r,!1,null,"44483027",null),$=_.exports},5743:function(t){!function(n,e){t.exports=e()}(0,(function(){"use strict";var t=1e3,n=6e4,e=36e5,i="millisecond",r="second",a="minute",s="hour",o="day",u="week",c="month",l="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,n,e){var i=String(t);return!i||i.length>=n?t:""+Array(n+1-i.length).join(e)+t},y={s:$,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),i=Math.floor(e/60),r=e%60;return(n<=0?"+":"-")+$(i,2,"0")+":"+$(r,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var i=12*(e.year()-n.year())+(e.month()-n.month()),r=n.clone().add(i,c),a=e-r<0,s=n.clone().add(i+(a?-1:1),c);return+(-(i+(e-r)/(a?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:u,d:o,D:h,h:s,m:a,s:r,ms:i,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",g={};g[p]=_;var M=function(t){return t instanceof S},w=function t(n,e,i){var r;if(!n)return p;if("string"==typeof n){var a=n.toLowerCase();g[a]&&(r=a),e&&(g[a]=e,r=a);var s=n.split("-");if(!r&&s.length>1)return t(s[0])}else{var o=n.name;g[o]=n,r=o}return!i&&r&&(p=r),r||!i&&p},b=function(t,n){if(M(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new S(e)},D=y;D.l=w,D.i=M,D.w=function(t,n){return b(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var S=function(){function _(t){this.$L=w(t.locale,null,!0),this.parse(t)}var $=_.prototype;return $.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var i=n.match(m);if(i){var r=i[2]-1||0,a=(i[7]||"0").substring(0,3);return e?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return D},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,n){var e=b(t);return this.startOf(n)<=e&&e<=this.endOf(n)},$.isAfter=function(t,n){return b(t)<this.startOf(n)},$.isBefore=function(t,n){return this.endOf(n)<b(t)},$.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,n){var e=this,i=!!D.u(n)||n,l=D.p(t),f=function(t,n){var r=D.w(e.$u?Date.UTC(e.$y,n,t):new Date(e.$y,n,t),e);return i?r:r.endOf(o)},m=function(t,n){return D.w(e.toDate()[t].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(n)),e)},v=this.$W,_=this.$M,$=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case d:return i?f(1,0):f(31,11);case c:return i?f(1,_):f(0,_+1);case u:var p=this.$locale().weekStart||0,g=(v<p?v+7:v)-p;return f(i?$-g:$+(6-g),_);case o:case h:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case a:return m(y+"Seconds",2);case r:return m(y+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,n){var e,u=D.p(t),l="set"+(this.$u?"UTC":""),f=(e={},e[o]=l+"Date",e[h]=l+"Date",e[c]=l+"Month",e[d]=l+"FullYear",e[s]=l+"Hours",e[a]=l+"Minutes",e[r]=l+"Seconds",e[i]=l+"Milliseconds",e)[u],m=u===o?this.$D+(n-this.$W):n;if(u===c||u===d){var v=this.clone().set(h,1);v.$d[f](m),v.init(),this.$d=v.set(h,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},$.set=function(t,n){return this.clone().$set(t,n)},$.get=function(t){return this[D.p(t)]()},$.add=function(i,l){var h,f=this;i=Number(i);var m=D.p(l),v=function(t){var n=b(f);return D.w(n.date(n.date()+Math.round(t*i)),f)};if(m===c)return this.set(c,this.$M+i);if(m===d)return this.set(d,this.$y+i);if(m===o)return v(1);if(m===u)return v(7);var _=(h={},h[a]=n,h[s]=e,h[r]=t,h)[m]||1,$=this.$d.getTime()+i*_;return D.w($,this)},$.subtract=function(t,n){return this.add(-1*t,n)},$.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),a=this.$H,s=this.$m,o=this.$M,u=e.weekdays,c=e.months,l=function(t,e,r,a){return t&&(t[e]||t(n,i))||r[e].slice(0,a)},d=function(t){return D.s(a%12||12,t,"0")},h=e.meridiem||function(t,n,e){var i=t<12?"AM":"PM";return e?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:l(e.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:l(e.weekdaysMin,this.$W,u,2),ddd:l(e.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(a),HH:D.s(a,2,"0"),h:d(1),hh:d(2),a:h(a,s,!0),A:h(a,s,!1),m:String(s),mm:D.s(s,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return i.replace(v,(function(t,n){return n||m[t]||r.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(i,h,f){var m,v=D.p(h),_=b(i),$=(_.utcOffset()-this.utcOffset())*n,y=this-_,p=D.m(this,_);return p=(m={},m[d]=p/12,m[c]=p,m[l]=p/3,m[u]=(y-$)/6048e5,m[o]=(y-$)/864e5,m[s]=y/e,m[a]=y/n,m[r]=y/t,m)[v]||y,f?p:D.a(p)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return g[this.$L]},$.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),i=w(t,n,!0);return i&&(e.$L=i),e},$.clone=function(){return D.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},_}(),Y=S.prototype;return b.prototype=Y,[["$ms",i],["$s",r],["$m",a],["$H",s],["$W",o],["$M",c],["$y",d],["$D",h]].forEach((function(t){Y[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),b.extend=function(t,n){return t.$i||(t(n,S,b),t.$i=!0),b},b.locale=w,b.isDayjs=M,b.unix=function(t){return b(1e3*t)},b.en=g[p],b.Ls=g,b.p={},b}))},3432:function(t,n,e){!function(n,i){t.exports=i(e(5743))}(0,(function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=n(t),i={name:"zh",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,n){return"W"===n?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s后",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,n){var e=100*t+n;return e<600?"凌晨":e<900?"早上":e<1100?"上午":e<1300?"中午":e<1800?"下午":"晚上"}};return e.default.locale(i,null,!0),i}))},893:function(t){!function(n,e){t.exports=e()}(0,(function(){"use strict";return function(t,n,e){t=t||{};var i=n.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(t,n,e,r){return i.fromToBase(t,n,e,r)}e.en.relativeTime=r,i.fromToBase=function(n,i,a,s,o){for(var u,c,l,d=a.$locale().relativeTime||r,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=h.length,m=0;m<f;m+=1){var v=h[m];v.d&&(u=s?e(n).diff(a,v.d,!0):a.diff(n,v.d,!0));var _=(t.rounding||Math.round)(Math.abs(u));if(l=u>0,_<=v.r||!v.r){_<=1&&m>0&&(v=h[m-1]);var $=d[v.l];o&&(_=o(""+_)),c="string"==typeof $?$.replace("%d",_):$(_,i,v.l,l);break}}if(i)return c;var y=l?d.future:d.past;return"function"==typeof y?y(c):y.replace("%s",c)},i.to=function(t,n){return a(t,n,this,!0)},i.from=function(t,n){return a(t,n,this)};var s=function(t){return t.$u?e.utc():e()};i.toNow=function(t){return this.to(s(this),t)},i.fromNow=function(t){return this.from(s(this),t)}}}))},7220:function(t,n,e){"use strict";e.d(n,{S:function(){return o},p:function(){return u}});var i=e(5743),r=e.n(i),a=e(893),s=e.n(a);e(3432);const o=t=>{r().extend(s()),r().locale("zh");const n=r()(),e=r()(t);return n.to(e)},u=t=>r()(t).format("YYYY-MM-DD")}}]);
//# sourceMappingURL=995.ff347622.js.map