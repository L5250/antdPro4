(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"14J3":function(A,o,e){"use strict";var i=e("cIOH"),v=e("1GLa")},"6VBw":function(A,o,e){"use strict";var i=e("ODXe"),v=e("rePB"),T=e("Ff2n"),E=e("q1tI"),j=e("TSYQ"),b=e.n(j),U=e("VTBJ"),m=e("Qi1f"),O={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function K(l){var n=l.primaryColor,a=l.secondaryColor;O.primaryColor=n,O.secondaryColor=a||Object(m.b)(n),O.calculated=!!a}function D(){return Object(U.a)({},O)}var p=function(n){var a=n.icon,d=n.className,r=n.onClick,P=n.style,I=n.primaryColor,B=n.secondaryColor,G=Object(T.a)(n,["icon","className","onClick","style","primaryColor","secondaryColor"]),W=O;if(I&&(W={primaryColor:I,secondaryColor:B||Object(m.b)(I)}),Object(m.f)(),Object(m.g)(Object(m.c)(a),"icon should be icon definiton, but got ".concat(a)),!Object(m.c)(a))return null;var R=a;return R&&typeof R.icon=="function"&&(R=Object(U.a)(Object(U.a)({},R),{},{icon:R.icon(W.primaryColor,W.secondaryColor)})),Object(m.a)(R.icon,"svg-".concat(R.name),Object(U.a)({className:d,onClick:r,style:P,"data-icon":R.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},G))};p.displayName="IconReact",p.getTwoToneColors=D,p.setTwoToneColors=K;var N=p;function f(l){var n=Object(m.d)(l),a=Object(i.a)(n,2),d=a[0],r=a[1];return N.setTwoToneColors({primaryColor:d,secondaryColor:r})}function t(){var l=N.getTwoToneColors();return l.calculated?[l.primaryColor,l.secondaryColor]:l.primaryColor}f("#1890ff");var M=E.forwardRef(function(l,n){var a=l.className,d=l.icon,r=l.spin,P=l.rotate,I=l.tabIndex,B=l.onClick,G=l.twoToneColor,W=Object(T.a)(l,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),R=b()("anticon",Object(v.a)({},"anticon-".concat(d.name),Boolean(d.name)),{"anticon-spin":!!r||d.name==="loading"},a),z=I;z===void 0&&B&&(z=-1);var V=P?{msTransform:"rotate(".concat(P,"deg)"),transform:"rotate(".concat(P,"deg)")}:void 0,F=Object(m.d)(G),J=Object(i.a)(F,2),y=J[0],c=J[1];return E.createElement("span",Object.assign({role:"img","aria-label":d.name},W,{ref:n,tabIndex:z,onClick:B,className:R}),E.createElement(N,{icon:d,primaryColor:y,secondaryColor:c,style:V}))});M.displayName="AntdIcon",M.getTwoToneColor=t,M.setTwoToneColor=f;var X=o.a=M},BMrR:function(A,o,e){"use strict";var i=e("qrJ5");o.a=i.a},GZ0F:function(A,o,e){"use strict";var i=e("q1tI"),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},T=v,E=e("6VBw"),j=function(m,O){return i.createElement(E.a,Object.assign({},m,{ref:O,icon:T}))};j.displayName="EllipsisOutlined";var b=o.a=i.forwardRef(j)},HTcj:function(A,o,e){"use strict";var i=e("GNNt"),v=e("wEI+"),T=e("q1tI"),E=e.n(T),j=e("TSYQ"),b=e.n(j),U=e("jYQm"),m=function(D){var p=Object(T.useContext)(U.a),N=D.children,f=D.contentWidth,t=D.className,M=D.style,X=Object(T.useContext)(v.b.ConfigContext),l=X.getPrefixCls,n=D.prefixCls||l("pro"),a=f||p.contentWidth,d="".concat(n,"-grid-content");return E.a.createElement("div",{className:b()(d,t,{wide:a==="Fixed"}),style:M},E.a.createElement("div",{className:"".concat(n,"-grid-content-children")},N))},O=o.a=m},Qi1f:function(A,o,e){"use strict";e.d(o,"g",function(){return O}),e.d(o,"c",function(){return K}),e.d(o,"a",function(){return p}),e.d(o,"b",function(){return N}),e.d(o,"d",function(){return f}),e.d(o,"e",function(){return t}),e.d(o,"f",function(){return l});var i=e("VTBJ"),v=e("U8pU"),T=e("AJpP"),E=e("q1tI"),j=e.n(E),b=e("Kwbf"),U=e("Gu+u"),m=e.n(U);function O(n,a){Object(b.a)(n,"[@ant-design/icons] ".concat(a))}function K(n){return Object(v.a)(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(Object(v.a)(n.icon)==="object"||typeof n.icon=="function")}function D(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(a,d){var r=n[d];switch(d){case"class":a.className=r,delete a.class;break;default:a[d]=r}return a},{})}function p(n,a,d){return d?j.a.createElement(n.tag,Object(i.a)(Object(i.a)({key:a},D(n.attrs)),d),(n.children||[]).map(function(r,P){return p(r,"".concat(a,"-").concat(n.tag,"-").concat(P))})):j.a.createElement(n.tag,Object(i.a)({key:a},D(n.attrs)),(n.children||[]).map(function(r,P){return p(r,"".concat(a,"-").concat(n.tag,"-").concat(P))}))}function N(n){return Object(T.generate)(n)[0]}function f(n){return n?Array.isArray(n)?n:[n]:[]}var t={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},M=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,X=!1,l=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:M;Object(E.useEffect)(function(){X||(Object(U.insertCss)(a,{prepend:!0}),X=!0)},[])}},UXoT:function(A,o,e){"use strict";o.a={iconGroup:"iconGroup___3RiPi",anticon:"anticon___3NFul",rankingList:"rankingList___2GuWM",rankingItemNumber:"rankingItemNumber___31ZrU",active:"active___3Bsi9",rankingItemTitle:"rankingItemTitle___2Yoy1",salesExtra:"salesExtra___3lIXj",currentDate:"currentDate___7lDDb",salesCard:"salesCard___1Iqf3",salesBar:"salesBar___3JP41",salesRank:"salesRank____67l0",salesCardExtra:"salesCardExtra___1yLFX",salesTypeRadio:"salesTypeRadio___2LyMm",offlineCard:"offlineCard___Oqn6V",trendText:"trendText___3J91q",rankingTitle:"rankingTitle___28H5N",salesExtraWrap:"salesExtraWrap___1k1PZ"}},jCWc:function(A,o,e){"use strict";var i=e("cIOH"),v=e("1GLa")},jXcd:function(A,o,e){"use strict";e.r(o);var i=e("14J3"),v=e("BMrR"),T=e("jCWc"),E=e("kPKH"),j=e("qVdP"),b=e("jsC+"),U=e("lUTK"),m=e("BvKs"),O=e("1OyB"),K=e("vuIU"),D=e("Ji7U"),p=e("LK+K"),N=e("GZ0F"),f=e("q1tI"),t=e.n(f),M=e("HTcj"),X=e("9kvl"),l=e("T2oS"),n=e("W9HT"),a=function(){return t.a.createElement("div",{style:{paddingTop:100,textAlign:"center"}},t.a.createElement(n.a,{size:"large"}))},d=e("wd/R"),r=e.n(d);function P(y){return y*1<10?"0".concat(y):y}function I(y){var c=new Date,L=1e3*60*60*24;if(y==="today")return c.setHours(0),c.setMinutes(0),c.setSeconds(0),[r()(c),r()(c.getTime()+(L-1e3))];if(y==="week"){var s=c.getDay();c.setHours(0),c.setMinutes(0),c.setSeconds(0),s===0?s=6:s-=1;var C=c.getTime()-s*L;return[r()(C),r()(C+(7*L-1e3))]}var S=c.getFullYear();if(y==="month"){var x=c.getMonth(),h=r()(c).add(1,"months"),g=h.year(),u=h.month();return[r()("".concat(S,"-").concat(P(x+1),"-01 00:00:00")),r()(r()("".concat(g,"-").concat(P(u+1),"-01 00:00:00")).valueOf()-1e3)]}return[r()("".concat(S,"-01-01 00:00:00")),r()("".concat(S,"-12-31 23:59:59"))]}var B=e("UXoT"),G=t.a.lazy(function(){return Promise.all([e.e(0),e.e(4),e.e(5),e.e(8),e.e(49)]).then(e.bind(null,"CqmX"))}),W=t.a.lazy(function(){return Promise.all([e.e(0),e.e(4),e.e(5),e.e(46),e.e(48)]).then(e.bind(null,"qpEo"))}),R=t.a.lazy(function(){return Promise.all([e.e(0),e.e(2),e.e(4),e.e(5),e.e(45)]).then(e.bind(null,"ceP7"))}),z=t.a.lazy(function(){return Promise.all([e.e(0),e.e(4),e.e(5),e.e(50),e.e(47)]).then(e.bind(null,"8gNO"))}),V=t.a.lazy(function(){return Promise.all([e.e(0),e.e(4),e.e(5),e.e(8),e.e(51)]).then(e.bind(null,"vvVX"))}),F=function(y){Object(D.a)(L,y);var c=Object(p.a)(L);function L(){var s;Object(O.a)(this,L);for(var C=arguments.length,S=new Array(C),x=0;x<C;x++)S[x]=arguments[x];return s=c.call.apply(c,[this].concat(S)),s.state={salesType:"all",currentTabKey:"",rangePickerValue:I("year")},s.reqRef=0,s.timeoutId=0,s.handleChangeSalesType=function(h){s.setState({salesType:h.target.value})},s.handleTabChange=function(h){s.setState({currentTabKey:h})},s.handleRangePickerChange=function(h){var g=s.props.dispatch;s.setState({rangePickerValue:h}),g({type:"dashboardAndanalysis/fetchSalesData"})},s.selectDate=function(h){var g=s.props.dispatch;s.setState({rangePickerValue:I(h)}),g({type:"dashboardAndanalysis/fetchSalesData"})},s.isActive=function(h){var g=s.state.rangePickerValue;if(!g)return"";var u=I(h);return u?!g[0]||!g[1]?"":g[0].isSame(u[0],"day")&&g[1].isSame(u[1],"day")?B.a.currentDate:"":""},s}return Object(K.a)(L,[{key:"componentDidMount",value:function(){var C=this.props.dispatch;this.reqRef=requestAnimationFrame(function(){C({type:"dashboardAndanalysis/fetch"})})}},{key:"componentWillUnmount",value:function(){var C=this.props.dispatch;C({type:"dashboardAndanalysis/clear"}),cancelAnimationFrame(this.reqRef),clearTimeout(this.timeoutId)}},{key:"render",value:function(){var C=this.state,S=C.rangePickerValue,x=C.salesType,h=C.currentTabKey,g=this.props,u=g.dashboardAndanalysis,_=g.loading,Z=u.visitData,$=u.visitData2,w=u.salesData,k=u.searchData,H=u.offlineData,q=u.offlineChartData,ee=u.salesTypeData,ne=u.salesTypeDataOnline,te=u.salesTypeDataOffline,Y;x==="all"?Y=ee:Y=x==="online"?ne:te;var ae=t.a.createElement(m.a,null,t.a.createElement(m.a.Item,null,"\u64CD\u4F5C\u4E00"),t.a.createElement(m.a.Item,null,"\u64CD\u4F5C\u4E8C")),Q=t.a.createElement("span",{className:B.a.iconGroup},t.a.createElement(b.a,{overlay:ae,placement:"bottomRight"},t.a.createElement(N.a,null))),oe=h||H[0]&&H[0].name;return t.a.createElement(M.a,null,t.a.createElement(t.a.Fragment,null,t.a.createElement(f.Suspense,{fallback:t.a.createElement(a,null)},t.a.createElement(G,{loading:_,visitData:Z})),t.a.createElement(f.Suspense,{fallback:null},t.a.createElement(W,{rangePickerValue:S,salesData:w,isActive:this.isActive,handleRangePickerChange:this.handleRangePickerChange,loading:_,selectDate:this.selectDate})),t.a.createElement(v.a,{gutter:24,style:{marginTop:24}},t.a.createElement(E.a,{xl:12,lg:24,md:24,sm:24,xs:24},t.a.createElement(f.Suspense,{fallback:null},t.a.createElement(R,{loading:_,visitData2:$,searchData:k,dropdownGroup:Q}))),t.a.createElement(E.a,{xl:12,lg:24,md:24,sm:24,xs:24},t.a.createElement(f.Suspense,{fallback:null},t.a.createElement(z,{dropdownGroup:Q,salesType:x,loading:_,salesPieData:Y,handleChangeSalesType:this.handleChangeSalesType})))),t.a.createElement(f.Suspense,{fallback:null},t.a.createElement(V,{activeKey:oe,loading:_,offlineData:H,offlineChartData:q,handleTabChange:this.handleTabChange}))))}}]),L}(f.Component),J=o.default=Object(X.c)(function(y){var c=y.dashboardAndanalysis,L=y.loading;return{dashboardAndanalysis:c,loading:L.effects["dashboardAndanalysis/fetch"]}})(F)},jYQm:function(A,o,e){"use strict";var i=e("q1tI"),v=e.n(i),T=Object(i.createContext)({});o.a=T},kPKH:function(A,o,e){"use strict";var i=e("/kpp");o.a=i.a}}]);
