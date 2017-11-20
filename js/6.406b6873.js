webpackJsonp([6],{241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(n(276),n(277)),r=(n(295),n(299)),o=(n(272),n(273)),i=n(64),l=n.n(i),s=n(65),c=n.n(s),u=n(66),p=n.n(u),d=n(67),f=n.n(d),h=n(68),m=n.n(h),y=n(0),v=n.n(y),E=n(270),g=n(274),b=n(271),w=function(e){function t(){return c()(this,t),f()(this,(t.__proto__||l()(t)).apply(this,arguments))}return m()(t,e),p()(t,[{key:"render",value:function(){var e=this;return v.a.createElement(E.a,{className:"input-page"},v.a.createElement(g.a,{title:"文本框 Input"}),v.a.createElement("main",null,v.a.createElement(o.a,null,v.a.createElement(o.a.Header,{title:"普通"}),v.a.createElement(o.a.Body,null,v.a.createElement(a.a,{title:"单行文本"},v.a.createElement(r.a,{ref:function(t){e.focusInput=t},type:"text",placeholder:"请输入"})),v.a.createElement(a.a,{title:"多行文本"},v.a.createElement(r.a,{type:"textarea",rows:3,placeholder:"请输入"})))),v.a.createElement(o.a,null,v.a.createElement(o.a.Header,{title:"输入类型"}),v.a.createElement(o.a.Body,null,v.a.createElement(a.a,{title:"数字"},v.a.createElement(r.a,{type:"number",placeholder:"type is number"})),v.a.createElement(a.a,{title:"金额"},v.a.createElement(r.a,{type:"price",placeholder:"type is price"})),v.a.createElement(a.a,{title:"身份证"},v.a.createElement(r.a,{type:"idcard",placeholder:"type is idcard"})))),v.a.createElement(o.a,null,v.a.createElement(o.a.Header,{title:"高度自适应"}),v.a.createElement(o.a.Body,null,v.a.createElement(a.a,{title:"多行文本"},v.a.createElement(r.a,{autosize:!0,type:"textarea",rows:3,placeholder:"写点啥..."})))),v.a.createElement(o.a,null,v.a.createElement(o.a.Header,{title:"无标签栏"}),v.a.createElement(o.a.Body,null,v.a.createElement(a.a,null,v.a.createElement(r.a,{type:"text",placeholder:"标题"})),v.a.createElement(a.a,null,v.a.createElement(r.a,{autosize:!0,type:"textarea",rows:4,maxLength:200,placeholder:"摘要"})))),v.a.createElement(o.a,null,v.a.createElement(o.a.Header,{title:"显示输入字数"}),v.a.createElement(o.a.Body,null,v.a.createElement(a.a,null,v.a.createElement(r.a,{autosize:!0,showLength:!0,type:"textarea",rows:4,maxLength:200,placeholder:"摘要"}))))),v.a.createElement(b.a,null))}}]),t}(y.Component);t.default=w},295:function(e,t,n){"use strict";var a=(n(267),n(296),n(298));n.n(a)},296:function(e,t,n){"use strict";var a=(n(267),n(280),n(279),n(297));n.n(a)},297:function(e,t){},298:function(e,t){},299:function(e,t,n){"use strict";var a=n(300);t.a=a.a},300:function(e,t,n){"use strict";var a=n(269),r=n.n(a),o=n(64),i=n.n(o),l=n(65),s=n.n(l),c=n(66),u=n.n(c),p=n(67),d=n.n(p),f=n(68),h=n.n(f),m=n(275),y=n.n(m),v=n(0),E=n.n(v),g=n(301),b=n(304),w=n(305),k=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof y.a)for(var r=0,a=y()(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]]);return n},x=function(e){function t(){return s()(this,t),d()(this,(t.__proto__||i()(t)).apply(this,arguments))}return h()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.type,n=e.autosize,a=k(e,["type","autosize"]);switch(t){case"idcard":case"price":case"number":return E.a.createElement(g.a,r()({},a,{type:t}));case"textarea":return E.a.createElement(w.a,r()({},a,{autosize:n}));default:return E.a.createElement(b.a,r()({},a))}}}]),t}(v.PureComponent);t.a=x,x.defaultProps={type:"text",autosize:!1}},301:function(e,t,n){"use strict";var a=n(269),r=n.n(a),o=n(64),i=n.n(o),l=n(65),s=n.n(l),c=n(66),u=n.n(c),p=n(67),d=n.n(p),f=n(68),h=n.n(f),m=n(275),y=n.n(m),v=n(0),E=n.n(v),g=n(266),b=n.n(g),w=n(282),k=n(302),x=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof y.a)for(var r=0,a=y()(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]]);return n},C=function(e){function t(e){s()(this,t);var n=d()(this,(t.__proto__||i()(t)).call(this,e));return n.closest=function(e,t){for(var n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;e;){if(n.call(e,t))return e;e=e.parentElement}return null},n.onClosePicker=function(e){if(n.input&&n.state.visible){n.closest(e.target,".za-keyboard")||n.close()}},n.onFocus=function(){document.activeElement.blur(),n.open()},n.onKeyClick=function(e){var t=n.state.value,a="delete"===e?t.slice(0,t.length-1):t+e;if(a!==t){var r=n.props.onChange;n.setState({value:a}),"function"==typeof r&&r(a)}},n.open=function(){n.setState({visible:!0})},n.close=function(){n.setState({visible:!1})},n.state={visible:!1,value:e.value||e.defaultValue||""},n}return h()(t,e),u()(t,[{key:"componentDidMount",value:function(){w.a.on(document.body,"touchstart",this.onClosePicker)}},{key:"componentWillUnmount",value:function(){w.a.off(document.body,"touchstart",this.onClosePicker)}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,a=t.className,o=t.type,i=t.disabled,l=(t.defaultValue,t.placeholder),s=x(t,["prefixCls","className","type","disabled","defaultValue","placeholder"]),c=this.state,u=c.visible,p=c.value,d=b()(n,n+"-number",a,{disabled:i,focus:u});return E.a.createElement("div",{className:d,ref:function(t){e.input=t},onClick:this.onFocus},!p&&E.a.createElement("div",{className:n+"-placeholder"},l),E.a.createElement("div",{className:n+"-content"},p),E.a.createElement("input",r()({},s,{type:"hidden",value:p,disabled:i,onFocus:this.onFocus})),E.a.createElement(k.a,{type:o,visible:u,onKeyClick:this.onKeyClick}))}}]),t}(v.Component);t.a=C,C.defaultProps={prefixCls:"za-input",disabled:!1}},302:function(e,t,n){"use strict";var a=n(64),r=n.n(a),o=n(65),i=n.n(o),l=n(66),s=n.n(l),c=n(67),u=n.n(c),p=n(68),d=n.n(p),f=n(0),h=n.n(f),m=n(71),y=n.n(m),v=n(303),E=n(283),g=function(e){function t(){i()(this,t);var e=u()(this,(t.__proto__||r()(t)).apply(this,arguments));return e.show=function(t){var n=t.visible,a=t.type;y.a.render(h.a.createElement(E.a,{visible:n,mask:!1,direction:"bottom"},h.a.createElement(v.a,{type:a,onKeyClick:e.onKeyClick})),window.zarmKeyboardPicker)},e.onKeyClick=function(t){if(["ok","close"].indexOf(t)>-1)return void e.close();var n=e.props.onKeyClick;"function"==typeof n&&n(t)},e.close=function(){e.setState({visible:!1})},e}return d()(t,e),s()(t,[{key:"componentDidMount",value:function(){window.zarmKeyboardPicker||(window.zarmKeyboardPicker=document.createElement("div"),document.body.appendChild(window.zarmKeyboardPicker)),this.show(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.show(e)}},{key:"render",value:function(){return null}}]),t}(f.PureComponent);t.a=g,g.defaultProps={prefixCls:"za-keyboard",type:"number"},g.show=function(e){g.show(e)}},303:function(e,t,n){"use strict";var a=n(268),r=n.n(a),o=n(64),i=n.n(o),l=n(65),s=n.n(l),c=n(66),u=n.n(c),p=n(67),d=n.n(p),f=n(68),h=n.n(f),m=n(0),y=n.n(m),v=n(266),E=n.n(v),g=n(278),b=["1","2","3","4","5","6","7","8","9","","0","close"],w=["1","2","3","4","5","6","7","8","9",".","0","close"],k=["1","2","3","4","5","6","7","8","9","x","0","close"],x=function(e){e.stopPropagation()},C=function(e){function t(){s()(this,t);var e=d()(this,(t.__proto__||i()(t)).apply(this,arguments));return e.onKeyClick=function(t){if(0!==t.length){var n=e.props.onKeyClick;"function"==typeof n&&n(t)}},e.getKeys=function(){switch(e.props.type){case"price":return w;case"idcard":return k;default:return b}},e.renderKey=function(t,n){var a=e.props.prefixCls,o=E()(a+"-key-item",r()({},a+"-key-item-disabled",0===t.length));return y.a.createElement("div",{className:o,key:+n,onClick:function(){return e.onKeyClick(t)}},"close"===t?y.a.createElement(g.a,{type:"keyboard"}):t)},e}return h()(t,e),u()(t,[{key:"render",value:function(){var e=this,t=this.props.prefixCls;return y.a.createElement("div",{className:t,onClick:x},y.a.createElement("div",{className:t+"-key"},this.getKeys().map(this.renderKey)),y.a.createElement("div",{className:t+"-handle"},y.a.createElement("div",{className:t+"-handle-item",onClick:function(){return e.onKeyClick("delete")}},y.a.createElement(g.a,{type:"deletekey"})),y.a.createElement("div",{className:t+"-handle-item "+t+"-handle-item-ok",onClick:function(){return e.onKeyClick("ok")}},"确定")))}}]),t}(m.PureComponent);t.a=C,C.defaultProps={prefixCls:"za-keyboard",type:"number"}},304:function(e,t,n){"use strict";var a=n(269),r=n.n(a),o=n(64),i=n.n(o),l=n(65),s=n.n(l),c=n(66),u=n.n(c),p=n(67),d=n.n(p),f=n(68),h=n.n(f),m=n(275),y=n.n(m),v=n(0),E=n.n(v),g=n(266),b=n.n(g),w=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof y.a)for(var r=0,a=y()(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]]);return n},k=function(e){function t(){s()(this,t);var e=d()(this,(t.__proto__||i()(t)).apply(this,arguments));return e.onInputChange=function(t){var n=e.props.onChange;"function"==typeof n&&n(t.target.value)},e}return h()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,a=e.disabled,o=w(e,["prefixCls","className","disabled"]),i=b()(t,t+"-text",n,{disabled:a});return E.a.createElement("div",{className:i},E.a.createElement("input",r()({},o,{type:"text",disabled:a,onChange:this.onInputChange})))}}]),t}(v.PureComponent);t.a=k,k.defaultProps={prefixCls:"za-input",disabled:!1}},305:function(e,t,n){"use strict";var a=n(269),r=n.n(a),o=n(64),i=n.n(o),l=n(65),s=n.n(l),c=n(66),u=n.n(c),p=n(67),d=n.n(p),f=n(68),h=n.n(f),m=n(275),y=n.n(m),v=n(0),E=n.n(v),g=n(266),b=n.n(g),w=n(306),k=n.n(w),x=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof y.a)for(var r=0,a=y()(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]]);return n},C=function(e){function t(e){s()(this,t);var n=d()(this,(t.__proto__||i()(t)).call(this,e));return n.onInputChange=function(e){var t=n.props.onChange,a=e.target.value.length;n.setState({length:a}),"function"==typeof t&&t(e)},n.initAutosize=function(){n.props.autosize&&k()(n.input)},n.updateAutosize=function(e){e.style===n.props.style&&e.className===n.props.className||k.a.update(n.input)},n.destroyAutosize=function(){n.props.autosize&&k.a.destroy(n.input)},n.state={length:(e.value||e.defaultValue||"").length},n}return h()(t,e),u()(t,[{key:"componentDidMount",value:function(){this.initAutosize()}},{key:"componentDidUpdate",value:function(e){this.updateAutosize(e)}},{key:"componentWillUnmount",value:function(){this.destroyAutosize()}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,a=t.className,o=t.maxLength,i=t.disabled,l=(t.autosize,t.showLength),s=x(t,["prefixCls","className","maxLength","disabled","autosize","showLength"]),c=b()(n,n+"-textarea",a,{disabled:i}),u=l&&o&&E.a.createElement("div",{className:n+"-length"},this.state.length+"/"+o);return E.a.createElement("div",{className:c},E.a.createElement("textarea",r()({},s,{ref:function(t){e.input=t},disabled:i,maxLength:o,onChange:this.onInputChange})),u)}}]),t}(v.PureComponent);t.a=C,C.defaultProps={prefixCls:"za-input",disabled:!1,autosize:!1,showLength:!1}},306:function(e,t,n){var a,r,o;!function(n,i){r=[t,e],a=i,void 0!==(o="function"==typeof a?a.apply(t,r):a)&&(e.exports=o)}(0,function(e,t){"use strict";function n(e){function t(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function n(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function a(){var t=e.style.height,a=n(e),r=document.documentElement&&document.documentElement.scrollTop;e.style.height="auto";var o=e.scrollHeight+l;if(0===e.scrollHeight)return void(e.style.height=t);e.style.height=o+"px",s=e.clientWidth,a.forEach(function(e){e.node.scrollTop=e.scrollTop}),r&&(document.documentElement.scrollTop=r)}function r(){a();var n=Math.round(parseFloat(e.style.height)),r=window.getComputedStyle(e,null),o="content-box"===r.boxSizing?Math.round(parseFloat(r.height)):e.offsetHeight;if(o!==n?"hidden"===r.overflowY&&(t("scroll"),a(),o="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==r.overflowY&&(t("hidden"),a(),o="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),c!==o){c=o;var l=i("autosize:resized");try{e.dispatchEvent(l)}catch(e){}}}if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!o.has(e)){var l=null,s=e.clientWidth,c=null,u=function(){e.clientWidth!==s&&r()},p=function(t){window.removeEventListener("resize",u,!1),e.removeEventListener("input",r,!1),e.removeEventListener("keyup",r,!1),e.removeEventListener("autosize:destroy",p,!1),e.removeEventListener("autosize:update",r,!1),Object.keys(t).forEach(function(n){e.style[n]=t[n]}),o.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",p,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",r,!1),window.addEventListener("resize",u,!1),e.addEventListener("input",r,!1),e.addEventListener("autosize:update",r,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",o.set(e,{destroy:p,update:r}),function(){var t=window.getComputedStyle(e,null);"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),l="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(l)&&(l=0),r()}()}}function a(e){var t=o.get(e);t&&t.destroy()}function r(e){var t=o.get(e);t&&t.update()}var o="function"==typeof Map?new Map:function(){var e=[],t=[];return{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,a){-1===e.indexOf(n)&&(e.push(n),t.push(a))},delete:function(n){var a=e.indexOf(n);a>-1&&(e.splice(a,1),t.splice(a,1))}}}(),i=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){i=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(l=function(e){return e},l.destroy=function(e){return e},l.update=function(e){return e}):(l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e)}),e},l.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],a),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],r),e}),t.exports=l})}});