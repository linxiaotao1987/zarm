webpackJsonp([7],{264:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(n(450),n(452)),i=(n(272),n(273)),r=n(64),l=n.n(r),o=n(65),s=n.n(o),c=n(66),u=n.n(c),d=n(67),m=n.n(d),p=n(68),f=n.n(p),v=n(0),h=n.n(v),E=n(270),g=n(274),y=n(271),P=n(454),I=(n.n(P),function(e){function t(e){s()(this,t);var n=m()(this,(t.__proto__||l()(t)).call(this,e));return n.state={activeIndex:0},n}return f()(t,e),u()(t,[{key:"render",value:function(){return h.a.createElement(E.a,{className:"tab-page"},h.a.createElement(g.a,{title:"标签页 Tab"}),h.a.createElement("main",null,h.a.createElement(i.a,null,h.a.createElement(i.a.Header,{title:"基本"}),h.a.createElement(i.a.Body,null,h.a.createElement(a.a,{onChange:function(e){console.log(e)}},h.a.createElement(a.a.Panel,{title:"选项卡1"},h.a.createElement("div",{className:"content"},"选项卡1内容")),h.a.createElement(a.a.Panel,{title:"选项卡2"},h.a.createElement("div",{className:"content"},"选项卡2内容"))))),h.a.createElement(i.a,null,h.a.createElement(i.a.Header,{title:"可滑动"}),h.a.createElement(i.a.Body,null,h.a.createElement(a.a,{canSwipe:!0,onChange:function(e){console.log(e)}},h.a.createElement(a.a.Panel,{title:"选项卡1"},h.a.createElement("div",{className:"content"},"试试点我左滑")),h.a.createElement(a.a.Panel,{title:"选项卡2"},h.a.createElement("div",{className:"content"},"试试点我右滑"))))),h.a.createElement(i.a,null,h.a.createElement(i.a.Header,{title:"指定默认选项"}),h.a.createElement(i.a.Body,null,h.a.createElement(a.a,{defaultValue:1},h.a.createElement(a.a.Panel,{title:"选项卡1"},h.a.createElement("div",{className:"content"},"选项卡1内容")),h.a.createElement(a.a.Panel,{title:"选项卡2"},h.a.createElement("div",{className:"content"},"选项卡2内容")),h.a.createElement(a.a.Panel,{title:"选项卡3"},h.a.createElement("div",{className:"content"},"选项卡3内容"))))),h.a.createElement(i.a,null,h.a.createElement(i.a.Header,{title:"指定线条宽度"}),h.a.createElement(i.a.Body,null,h.a.createElement(a.a,{lineWidth:60},h.a.createElement(a.a.Panel,{title:"选项卡1"},h.a.createElement("div",{className:"content"},"选项卡1内容")),h.a.createElement(a.a.Panel,{title:"选项卡2"},h.a.createElement("div",{className:"content"},"选项卡2内容")),h.a.createElement(a.a.Panel,{title:"选项卡3"},h.a.createElement("div",{className:"content"},"选项卡3内容"))))),h.a.createElement(i.a,null,h.a.createElement(i.a.Header,{title:"禁用指定选项"}),h.a.createElement(i.a.Body,null,h.a.createElement(a.a,null,h.a.createElement(a.a.Panel,{title:"选项卡1"},h.a.createElement("div",{className:"content"},"选项卡1内容")),h.a.createElement(a.a.Panel,{title:"选项卡2",disabled:!0},h.a.createElement("div",{className:"content"},"选项卡2内容")),h.a.createElement(a.a.Panel,{title:"选项卡3"},h.a.createElement("div",{className:"content"},"选项卡3内容")))))),h.a.createElement(y.a,null))}}]),t}(v.Component));t.default=I},340:function(e,t,n){"use strict";var a=(n(267),n(341));n.n(a)},341:function(e,t){},342:function(e,t,n){"use strict";var a=n(268),i=n.n(a),r=n(64),l=n.n(r),o=n(65),s=n.n(o),c=n(66),u=n.n(c),d=n(67),m=n.n(d),p=n(68),f=n.n(p),v=n(0),h=n.n(v),E=n(266),g=n.n(E),y=n(282),P=n(288),I=function(e){function t(e){s()(this,t);var n=m()(this,(t.__proto__||l()(t)).call(this,e));return n.scrolling=!1,n.translateX=0,n.translateY=0,n.onSlideTo=function(e){n.onMoveTo(e,n.props.animationDuration)},n.onJumpTo=function(e){n.onMoveTo(e,0)},n.onMoveTo=function(e,t){var a=n.swipeItems;if(a){var i=n.props,r=i.loop,l=i.children,o=l.length;n.translateX=-a.offsetWidth*(e+r),n.translateY=-a.offsetHeight*(e+r),n.doTransition({x:n.translateX,y:n.translateY},t),e>o-1?e=0:e<0&&(e=o-1),n.setState({activeIndex:e})}},n.onDragStart=function(){n.scrolling=!1;var e=n.state.activeIndex,t=n.props.children.length;e<=0?n.onJumpTo(0):e>=t-1&&n.onJumpTo(t-1),n.pauseAutoPlay()},n.onDragMove=function(e,t){var a=t.offsetX,i=t.offsetY,r=Math.abs(a),l=Math.abs(i);if(n.isDirectionX()&&(r<5||r>=5&&l>=1.73*r))return n.scrolling=!0,!1;if(!n.isDirectionX()&&(l<5||l>=5&&r>=1.73*l))return n.scrolling=!0,!1;if(!n.props.loop){if(n.isLastIndex()&&(n.isDirectionX()&&a<0||!n.isDirectionX()&&i<0))return!1;if(n.isFirstIndex()&&(n.isDirectionX()&&a>0||!n.isDirectionX()&&i>0))return!1}return n.scrolling=!1,e.preventDefault(),n.doTransition({x:n.translateX+a,y:n.translateY+i},0),!0},n.onDragEnd=function(e,a){var i=a.offsetX,r=a.offsetY,l=a.startTime;if(!n.scrolling&&(i||r)){var o=n.props,s=o.moveDistanceRatio,c=void 0===s?t.defaultProps.moveDistanceRatio:s,u=o.moveTimeSpan,d=void 0===u?t.defaultProps.moveTimeSpan:u,m=o.onChange,p=n.state.activeIndex,f=n.swipeItems,v=(new Date).getTime()-l.getTime();if((n.isDirectionX()?Math.abs(i/f.offsetWidth):Math.abs(r/f.offsetHeight))>=c||v<=d){var h=!(n.isDirectionX()&&i>0||!n.isDirectionX()&&r>0);"function"==typeof m&&m(n.parseActiveIndexParse(h)),p=h?p+1:p-1}n.onSlideTo(p),n.startAutoPlay()}},n.parseActiveIndexParse=function(e){var t=n.props,a=t.loop,i=t.children,r=i.length-1,l=n.state.activeIndex;return l=e?l+1>r?a?0:r:l+=1:l-1<0?a?r:0:l-=1},n.startAutoPlay=function(){var e=n.props,t=e.direction,a=void 0===t?"left":t,i=e.loop,r=e.autoPlay,l=e.autoPlayIntervalTime,o=e.children;n.moveInterval=r&&setInterval(function(){var e=n.state.activeIndex,t=o.length;if(e=["left","top"].indexOf(a)>-1?e+1:e-1,!i&&e>t-1)return void n.pauseAutoPlay();n.onSlideTo(e)},l)},n.pauseAutoPlay=function(){n.moveInterval&&clearInterval(n.moveInterval)},n.parseItems=function(e){if(0!==e.children.length){var t=[].concat(e.children),a=t[0],r=t[t.length-1];e.loop&&(t.push(a),t.unshift(r));var l=h.a.Children.map(t,function(t,n){var a;return Object(v.cloneElement)(t,{key:n,className:g()((a={},i()(a,e.prefixCls+"-item",!0),i()(a,t.props.className,!!t.props.className),a))})});n.setState({items:l})}},n.resize=function(){n.onJumpTo(n.state.activeIndex)},n.doTransition=function(e,t){var a=n.swipeItems,i=0,r=0;n.isDirectionX()?i=e.x:r=e.y,a.style.WebkitTransformDuration=t+"ms",a.style.transitionDuration=t+"ms",a.style.WebkitTransform="translate3d("+i+"px, "+r+"px, 0)",a.style.transform="translate3d("+i+"px, "+r+"px, 0)"},n.transitionEnd=function(){var e=n.state.activeIndex,t=n.swipeItems;n.translateX=-t.offsetWidth*(e+n.props.loop),n.translateY=-t.offsetHeight*(e+n.props.loop),n.doTransition({x:n.translateX,y:n.translateY},0);var a=n.props.onChangeEnd;"function"==typeof a&&a(e)},n.isLastIndex=function(){return n.state.activeIndex>=n.props.children.length-1},n.isFirstIndex=function(){return n.state.activeIndex<=0},n.isDirectionX=function(){return["left","right"].indexOf(n.props.direction||t.defaultProps.direction)>-1},n.renderPaginationItem=function(e,t){var a={};return n.isDirectionX()&&(a.display="inline-block"),h.a.createElement("li",{role:"tab",key:"pagination-"+t,className:g()({active:t===n.state.activeIndex}),style:a,onClick:function(){return n.onSlideTo(t)}})},n.renderPagination=function(){var e=n.props,t=e.prefixCls,a=e.children;return h.a.createElement("div",{className:t+"-pagination"},h.a.createElement("ul",null,v.Children.map(a,n.renderPaginationItem)))},n.state={items:[],activeIndex:e.activeIndex},n}return f()(t,e),u()(t,[{key:"componentWillMount",value:function(){this.parseItems(this.props),this.startAutoPlay()}},{key:"componentDidMount",value:function(){y.a.on(window,"resize",this.resize),y.a.on(this.swipeItems,"webkitTransitionEnd",this.transitionEnd),y.a.on(this.swipeItems,"transitionend",this.transitionEnd),this.onJumpTo(this.props.activeIndex)}},{key:"componentWillReceiveProps",value:function(e){"children"in e&&this.parseItems(e),"activeIndex"in e&&this.onJumpTo(e.activeIndex)}},{key:"componentWillUnmount",value:function(){this.pauseAutoPlay(),y.a.off(window,"resize",this.resize),y.a.off(this.swipeItems,"webkitTransitionEnd",this.transitionEnd),y.a.off(this.swipeItems,"transitionend",this.transitionEnd)}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,a=t.className,i=t.height,r=t.showPagination,l=g()(""+n,a),o={};return this.isDirectionX()?o.whiteSpace="nowrap":o.height=i,h.a.createElement("div",{className:l},h.a.createElement(P.a,{onDragStart:this.onDragStart,onDragMove:this.onDragMove,onDragEnd:this.onDragEnd},h.a.createElement("div",{ref:function(t){e.swipeItems=t},className:n+"-items",style:o},this.state.items)),r&&this.renderPagination())}}]),t}(v.Component);t.a=I,I.defaultProps={prefixCls:"za-swipe",direction:"left",height:160,loop:!1,activeIndex:0,animationDuration:300,autoPlay:!1,autoPlayIntervalTime:3e3,moveDistanceRatio:.5,moveTimeSpan:300,showPagination:!0}},343:function(e,t,n){"use strict";var a=n(64),i=n.n(a),r=n(65),l=n.n(r),o=n(66),s=n.n(o),c=n(67),u=n.n(c),d=n(68),m=n.n(d),p=n(0),f=n.n(p),v=n(266),h=n.n(v),E=function(e){function t(e){l()(this,t);var n=u()(this,(t.__proto__||i()(t)).call(this,e));return n.state={selected:e.selected||e.defaultSelected},n}return m()(t,e),s()(t,[{key:"componentWillReceiveProps",value:function(e){"selected"in e&&this.setState({selected:!!e.selected})}},{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,a=e.children,i=h()(t+"-panel-item",n,{active:!!this.state.selected});return f.a.createElement("div",{className:i,role:"tabpanel"},a)}}]),t}(p.PureComponent);t.a=E,E.defaultProps={prefixCls:"za-tab"}},450:function(e,t,n){"use strict";var a=(n(267),n(340),n(451));n.n(a)},451:function(e,t){},452:function(e,t,n){"use strict";var a=n(453),i=n(343);a.a.Panel=i.a,t.a=a.a},453:function(e,t,n){"use strict";function a(e){var t=void 0;return y.a.Children.forEach(e,function(e,n){e.props&&e.props.selected&&(t=n)}),t}var i=n(269),r=n.n(i),l=n(268),o=n.n(l),s=n(64),c=n.n(s),u=n(65),d=n.n(u),m=n(66),p=n.n(m),f=n(67),v=n.n(f),h=n(68),E=n.n(h),g=n(0),y=n.n(g),P=n(266),I=n.n(P),x=n(343),C=n(342),T=function(e){function t(e){d()(this,t);var n=v()(this,(t.__proto__||c()(t)).call(this,e));return n.onSwipeChange=function(e){var t=n.props.onChange;n.setState({value:e}),"function"==typeof t&&t(e)},n.onTabClick=function(e,t){var a=n.props,i=a.disabled,r=a.canSwipe,l=a.onChange;i||e.props.disabled||(n.setState({value:t}),"function"==typeof l&&l(t),r&&n.swipe.onSlideTo(t))},n.renderTabs=function(e,t){var a=n.props,i=a.prefixCls,r=a.disabled,l=I()(i+"-header-item",e.props.className,{disabled:r||e.props.disabled,active:n.state.value===t});return y.a.createElement("li",{role:"tab",key:+t,className:l,onClick:function(){return n.onTabClick(e,t)}},e.props.title)},n.state={value:e.value||e.defaultValue||a(e.children)||0},n}return E()(t,e),p()(t,[{key:"componentWillReceiveProps",value:function(e){("value"in e||a(e.children))&&(this.setState({value:e.value||e.defaultValue||a(e.children)||0}),"function"==typeof e.onChange&&e.onChange(e.value))}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,a=t.className,i=t.theme,l=t.lineWidth,s=t.canSwipe,c=t.children,u=I()(""+n,a,o()({},"theme-"+i,!!i)),d=y.a.Children.map(c,this.renderTabs),m=void 0;m=s?y.a.createElement(C.a,{direction:"left",showPagination:!1,activeIndex:this.state.value,ref:function(t){e.swipe=t},onChange:function(t){return e.onSwipeChange(t)}},y.a.Children.map(c,function(e){return y.a.createElement("div",null,e.props.children)})):y.a.Children.map(c,function(t,n){return y.a.createElement(x.a,r()({},t.props,{selected:e.state.value===n}))});var p={width:100/c.length+"%",left:this.state.value/c.length*100+"%"},f=void 0;return l&&(p.backgroundColor="transparent",f=y.a.createElement("span",{className:n+"-line-inner",style:{width:l}})),y.a.createElement("div",{className:u},y.a.createElement("div",{className:n+"-header"},y.a.createElement("ul",{role:"tablist"},d),y.a.createElement("div",{className:n+"-line",style:p},f)),y.a.createElement("div",{className:n+"-container"},m))}}]),t}(g.PureComponent);t.a=T,T.defaultProps={prefixCls:"za-tab",theme:"primary",disabled:!1,canSwipe:!1}},454:function(e,t){}});