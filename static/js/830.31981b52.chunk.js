"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[830],{732:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(8428),a=n(2791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},c=n(2175),i=function(e,t){return a.createElement(c.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};i.displayName="CloseOutlined";var l=a.forwardRef(i)},4587:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(4942),a=n(7462),o=n(1694),c=n.n(o),i=n(4925),l=n(1413),u=n(5671),s=n(3144),f=n(9340),d=n(8557),v=n(2791),p=function(e){(0,f.Z)(n,e);var t=(0,d.Z)(n);function n(e){var r;(0,u.Z)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=r.props,n=t.disabled,a=t.onChange;n||("checked"in r.props||r.setState({checked:e.target.checked}),a&&a({target:(0,l.Z)((0,l.Z)({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var a="checked"in e?e.checked:e.defaultChecked;return r.state={checked:a},r}return(0,s.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,l=t.style,u=t.name,s=t.id,f=t.type,d=t.disabled,p=t.readOnly,b=t.tabIndex,m=t.onClick,y=t.onFocus,h=t.onBlur,g=t.onKeyDown,E=t.onKeyPress,k=t.onKeyUp,C=t.autoFocus,x=t.value,w=t.required,O=(0,i.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),P=Object.keys(O).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=O[t]),e}),{}),Z=this.state.checked,N=c()(n,o,(e={},(0,r.Z)(e,"".concat(n,"-checked"),Z),(0,r.Z)(e,"".concat(n,"-disabled"),d),e));return v.createElement("span",{className:N,style:l},v.createElement("input",(0,a.Z)({name:u,id:s,type:f,required:w,readOnly:p,disabled:d,tabIndex:b,className:"".concat(n,"-input"),checked:!!Z,onClick:m,onFocus:y,onBlur:h,onKeyUp:k,onKeyDown:g,onKeyPress:E,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:x},P)),v.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,l.Z)((0,l.Z)({},t),{},{checked:e.checked}):null}}]),n}(v.Component);p.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var b=p,m=n(1929),y=n(1940),h=n(3433),g=n(9439),E=n(1818),k=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},C=v.createContext(null),x=function(e,t){var n=e.defaultValue,o=e.children,i=e.options,l=void 0===i?[]:i,u=e.prefixCls,s=e.className,f=e.style,d=e.onChange,p=k(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),b=v.useContext(m.E_),y=b.getPrefixCls,x=b.direction,w=v.useState(p.value||n||[]),O=(0,g.Z)(w,2),P=O[0],Z=O[1],N=v.useState([]),I=(0,g.Z)(N,2),j=I[0],R=I[1];v.useEffect((function(){"value"in p&&Z(p.value||[])}),[p.value]);var M=function(){return l.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},T=y("checkbox",u),A="".concat(T,"-group"),B=(0,E.Z)(p,["value","disabled"]);l&&l.length>0&&(o=M().map((function(e){return v.createElement(S,{prefixCls:T,key:e.value.toString(),disabled:"disabled"in e?e.disabled:p.disabled,value:e.value,checked:P.includes(e.value),onChange:e.onChange,className:"".concat(A,"-item"),style:e.style},e.label)})));var D={toggleOption:function(e){var t=P.indexOf(e.value),n=(0,h.Z)(P);-1===t?n.push(e.value):n.splice(t,1),"value"in p||Z(n);var r=M();null===d||void 0===d||d(n.filter((function(e){return j.includes(e)})).sort((function(e,t){return r.findIndex((function(t){return t.value===e}))-r.findIndex((function(e){return e.value===t}))})))},value:P,disabled:p.disabled,name:p.name,registerValue:function(e){R((function(t){return[].concat((0,h.Z)(t),[e])}))},cancelValue:function(e){R((function(t){return t.filter((function(t){return t!==e}))}))}},L=c()(A,(0,r.Z)({},"".concat(A,"-rtl"),"rtl"===x),s);return v.createElement("div",(0,a.Z)({className:L,style:f},B,{ref:t}),v.createElement(C.Provider,{value:D},o))},w=v.forwardRef(x),O=v.memo(w),P=n(9125),Z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},N=function(e,t){var n,o,i=e.prefixCls,l=e.className,u=e.children,s=e.indeterminate,f=void 0!==s&&s,d=e.style,p=e.onMouseEnter,h=e.onMouseLeave,g=e.skipGroup,E=void 0!==g&&g,k=e.disabled,x=Z(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),w=v.useContext(m.E_),O=w.getPrefixCls,N=w.direction,S=v.useContext(C),I=(0,v.useContext)(y.aM).isFormItemInput,j=(0,v.useContext)(P.Z),R=null!==(o=(null===S||void 0===S?void 0:S.disabled)||k)&&void 0!==o?o:j,M=v.useRef(x.value);v.useEffect((function(){null===S||void 0===S||S.registerValue(x.value)}),[]),v.useEffect((function(){if(!E)return x.value!==M.current&&(null===S||void 0===S||S.cancelValue(M.current),null===S||void 0===S||S.registerValue(x.value),M.current=x.value),function(){return null===S||void 0===S?void 0:S.cancelValue(x.value)}}),[x.value]);var T=O("checkbox",i),A=(0,a.Z)({},x);S&&!E&&(A.onChange=function(){x.onChange&&x.onChange.apply(x,arguments),S.toggleOption&&S.toggleOption({label:u,value:x.value})},A.name=S.name,A.checked=S.value.includes(x.value));var B=c()((n={},(0,r.Z)(n,"".concat(T,"-wrapper"),!0),(0,r.Z)(n,"".concat(T,"-rtl"),"rtl"===N),(0,r.Z)(n,"".concat(T,"-wrapper-checked"),A.checked),(0,r.Z)(n,"".concat(T,"-wrapper-disabled"),R),(0,r.Z)(n,"".concat(T,"-wrapper-in-form-item"),I),n),l),D=c()((0,r.Z)({},"".concat(T,"-indeterminate"),f)),L=f?"mixed":void 0;return v.createElement("label",{className:B,style:d,onMouseEnter:p,onMouseLeave:h},v.createElement(b,(0,a.Z)({"aria-checked":L},A,{prefixCls:T,className:D,disabled:R,ref:t})),void 0!==u&&v.createElement("span",null,u))};var S=v.forwardRef(N),I=S;I.Group=O,I.__ANT_CHECKBOX=!0;var j=I},5400:function(e,t,n){n.d(t,{Z:function(){return he}});var r=n(4942),a=n(7462),o=n(732),c=n(5033),i=n(8428),l=n(2791),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},s=n(2175),f=function(e,t){return l.createElement(s.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:u}))};f.displayName="PlusOutlined";var d=l.forwardRef(f),v=n(1694),p=n.n(v);function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(l){i=!0,a=l}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return o}}(e,t)||E(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w=n(3786),O=n(5179),P=n(5207),Z=(0,l.createContext)(null);var N=l.forwardRef((function(e,t){var n=e.prefixCls,r=e.className,a=e.style,o=e.id,c=e.active,i=e.tabKey,u=e.children;return l.createElement("div",{id:o&&"".concat(o,"-panel-").concat(i),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(i),"aria-hidden":!c,style:a,className:p()(n,c&&"".concat(n,"-active"),r),ref:t},u)})),S=["key","forceRender","style","className"];function I(e){var t=e.id,n=e.activeKey,r=e.animated,a=e.tabPosition,o=e.destroyInactiveTabPane,c=l.useContext(Z),i=c.prefixCls,u=c.tabs,s=r.tabPane,f="".concat(i,"-tabpane");return l.createElement("div",{className:p()("".concat(i,"-content-holder"))},l.createElement("div",{className:p()("".concat(i,"-content"),"".concat(i,"-content-").concat(a),m({},"".concat(i,"-content-animated"),s))},u.map((function(e){var a=e.key,c=e.forceRender,i=e.style,u=e.className,d=x(e,S),v=a===n;return l.createElement(P.Z,b({key:a,visible:v,forceRender:c,removeOnLeave:!!o,leavedClassName:"".concat(f,"-hidden")},r.tabPaneMotion),(function(e,n){var r=e.style,o=e.className;return l.createElement(N,b({},d,{prefixCls:f,id:t,tabKey:a,animated:s,active:v,style:h(h({},i),r),className:p()(u,o),ref:n}))}))}))))}function j(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||E(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var R=n(5314),M=n(8834),T=n(8829);function A(e){var t=(0,l.useRef)(),n=(0,l.useRef)(!1);return(0,l.useEffect)((function(){return n.current=!1,function(){n.current=!0,R.Z.cancel(t.current)}}),[]),function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];n.current||(R.Z.cancel(t.current),t.current=(0,R.Z)((function(){e.apply(void 0,a)})))}}var B=n(1354);function D(e,t){var n,r=e.prefixCls,a=e.id,o=e.active,c=e.tab,i=c.key,u=c.label,s=c.disabled,f=c.closeIcon,d=e.closable,v=e.renderWrapper,b=e.removeAriaLabel,y=e.editable,h=e.onClick,g=e.onRemove,E=e.onFocus,k=e.style,C="".concat(r,"-tab");l.useEffect((function(){return g}),[]);var x=y&&!1!==d&&!s;function w(e){s||h(e)}var O=l.createElement("div",{key:i,ref:t,className:p()(C,(n={},m(n,"".concat(C,"-with-remove"),x),m(n,"".concat(C,"-active"),o),m(n,"".concat(C,"-disabled"),s),n)),style:k,onClick:w},l.createElement("div",{role:"tab","aria-selected":o,id:a&&"".concat(a,"-tab-").concat(i),className:"".concat(C,"-btn"),"aria-controls":a&&"".concat(a,"-panel-").concat(i),"aria-disabled":s,tabIndex:s?null:0,onClick:function(e){e.stopPropagation(),w(e)},onKeyDown:function(e){[B.Z.SPACE,B.Z.ENTER].includes(e.which)&&(e.preventDefault(),w(e))},onFocus:E},u),x&&l.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(C,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),y.onEdit("remove",{key:i,event:t})}},f||y.removeIcon||"\xd7"));return v?v(O):O}var L=l.forwardRef(D),K={width:0,height:0,left:0,top:0};var V={width:0,height:0,left:0,top:0,right:0};var F=n(2257),q=n(3241);function _(e,t){var n=e.prefixCls,r=e.editable,a=e.locale,o=e.style;return r&&!1!==r.showAdd?l.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null===a||void 0===a?void 0:a.addAriaLabel)||"Add tab",onClick:function(e){r.onEdit("add",{event:e})}},r.addIcon||"+"):null}var G=l.forwardRef(_);function W(e,t){var n=e.prefixCls,r=e.id,a=e.tabs,o=e.locale,c=e.mobile,i=e.moreIcon,u=void 0===i?"More":i,s=e.moreTransitionName,f=e.style,d=e.className,v=e.editable,b=e.tabBarGutter,y=e.rtl,h=e.removeAriaLabel,g=e.onTabClick,E=e.getPopupContainer,C=e.popupClassName,x=k((0,l.useState)(!1),2),w=x[0],O=x[1],P=k((0,l.useState)(null),2),Z=P[0],N=P[1],S="".concat(r,"-more-popup"),I="".concat(n,"-dropdown"),j=null!==Z?"".concat(S,"-").concat(Z):null,R=null===o||void 0===o?void 0:o.dropdownAriaLabel;var M=l.createElement(F.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;g(t,n),O(!1)},prefixCls:"".concat(I,"-menu"),id:S,tabIndex:-1,role:"listbox","aria-activedescendant":j,selectedKeys:[Z],"aria-label":void 0!==R?R:"expanded dropdown"},a.map((function(e){var t=v&&!1!==e.closable&&!e.disabled;return l.createElement(F.sN,{key:e.key,id:"".concat(S,"-").concat(e.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(e.key),disabled:e.disabled},l.createElement("span",null,e.label),t&&l.createElement("button",{type:"button","aria-label":h||"remove",tabIndex:0,className:"".concat(I,"-menu-item-remove"),onClick:function(t){var n,r;t.stopPropagation(),n=t,r=e.key,n.preventDefault(),n.stopPropagation(),v.onEdit("remove",{key:r,event:n})}},e.closeIcon||v.removeIcon||"\xd7"))})));function T(e){for(var t=a.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===Z}))||0,r=t.length,o=0;o<r;o+=1){var c=t[n=(n+e+r)%r];if(!c.disabled)return void N(c.key)}}(0,l.useEffect)((function(){var e=document.getElementById(j);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[Z]),(0,l.useEffect)((function(){w||N(null)}),[w]);var A=m({},y?"marginRight":"marginLeft",b);a.length||(A.visibility="hidden",A.order=1);var D=p()(m({},"".concat(I,"-rtl"),y)),L=c?null:l.createElement(q.Z,{prefixCls:I,overlay:M,trigger:["hover"],visible:!!a.length&&w,transitionName:s,onVisibleChange:O,overlayClassName:p()(D,C),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:E},l.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:A,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":S,id:"".concat(r,"-more"),"aria-expanded":w,onKeyDown:function(e){var t=e.which;if(w)switch(t){case B.Z.UP:T(-1),e.preventDefault();break;case B.Z.DOWN:T(1),e.preventDefault();break;case B.Z.ESC:O(!1);break;case B.Z.SPACE:case B.Z.ENTER:null!==Z&&g(Z,e)}else[B.Z.DOWN,B.Z.SPACE,B.Z.ENTER].includes(t)&&(O(!0),e.preventDefault())}},u));return l.createElement("div",{className:p()("".concat(n,"-nav-operations"),d),style:f,ref:t},L,l.createElement(G,{prefixCls:n,locale:o,editable:v}))}var z=l.memo(l.forwardRef(W),(function(e,t){return t.tabMoving})),U=Math.pow(.995,20);function H(e,t){var n=l.useRef(e),r=k(l.useState({}),2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}function X(e){var t;return e instanceof Map?(t={},e.forEach((function(e,n){t[n]=e}))):t=e,JSON.stringify(t)}var Y=l.forwardRef((function(e,t){var n,r=e.position,a=e.prefixCls,o=e.extra;if(!o)return null;var c={};return"object"!==C(o)||l.isValidElement(o)?c.right=o:c=o,"right"===r&&(n=c.right),"left"===r&&(n=c.left),n?l.createElement("div",{className:"".concat(a,"-extra-content"),ref:t},n):null})),J=function(e){var t=e.current||{},n=t.offsetWidth,r=void 0===n?0:n,a=t.offsetHeight;return[r,void 0===a?0:a]},$=function(e,t){return e[t?0:1]};function Q(e,t){var n,r=l.useContext(Z),a=r.prefixCls,o=r.tabs,c=e.className,i=e.style,u=e.id,s=e.animated,f=e.activeKey,d=e.rtl,v=e.extra,y=e.editable,g=e.locale,E=e.tabPosition,C=e.tabBarGutter,x=e.children,w=e.onTabClick,O=e.onTabScroll,P=(0,l.useRef)(),N=(0,l.useRef)(),S=(0,l.useRef)(),I=(0,l.useRef)(),B=(0,l.useRef)(),D=(0,l.useRef)(),F=(0,l.useRef)(),q=k(function(){var e=(0,l.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,l.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),2),_=q[0],W=q[1],Q="top"===E||"bottom"===E,ee=k(H(0,(function(e,t){Q&&O&&O({direction:e>t?"left":"right"})})),2),te=ee[0],ne=ee[1],re=k(H(0,(function(e,t){!Q&&O&&O({direction:e>t?"top":"bottom"})})),2),ae=re[0],oe=re[1],ce=k((0,l.useState)([0,0]),2),ie=ce[0],le=ce[1],ue=k((0,l.useState)([0,0]),2),se=ue[0],fe=ue[1],de=k((0,l.useState)([0,0]),2),ve=de[0],pe=de[1],be=k((0,l.useState)([0,0]),2),me=be[0],ye=be[1],he=function(e){var t=(0,l.useRef)([]),n=k((0,l.useState)({}),2)[1],r=(0,l.useRef)("function"===typeof e?e():e),a=A((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,n({})}));return[r.current,function(e){t.current.push(e),a()}]}(new Map),ge=k(he,2),Ee=ge[0],ke=ge[1],Ce=function(e,t,n){return(0,l.useMemo)((function(){for(var n,r=new Map,a=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||K,o=a.left+a.width,c=0;c<e.length;c+=1){var i,l=e[c].key,u=t.get(l);u||(u=t.get(null===(i=e[c-1])||void 0===i?void 0:i.key)||K);var s=r.get(l)||h({},u);s.right=o-s.left-s.width,r.set(l,s)}return r}),[e.map((function(e){return e.key})).join("_"),t,n])}(o,Ee,se[0]),xe=$(ie,Q),we=$(se,Q),Oe=$(ve,Q),Pe=$(me,Q),Ze=xe<we+Oe?xe-Pe:xe-Oe,Ne="".concat(a,"-nav-operations-hidden"),Se=0,Ie=0;function je(e){return e<Se?Se:e>Ie?Ie:e}Q&&d?(Se=0,Ie=Math.max(0,we-Ze)):(Se=Math.min(0,Ze-we),Ie=0);var Re=(0,l.useRef)(),Me=k((0,l.useState)(),2),Te=Me[0],Ae=Me[1];function Be(){Ae(Date.now())}function De(){window.clearTimeout(Re.current)}!function(e,t){var n=k((0,l.useState)(),2),r=n[0],a=n[1],o=k((0,l.useState)(0),2),c=o[0],i=o[1],u=k((0,l.useState)(0),2),s=u[0],f=u[1],d=k((0,l.useState)(),2),v=d[0],p=d[1],b=(0,l.useRef)(),m=(0,l.useRef)(),y=(0,l.useRef)(null);y.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,r=t.screenY;a({x:n,y:r}),window.clearInterval(b.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],o=n.screenX,l=n.screenY;a({x:o,y:l});var u=o-r.x,s=l-r.y;t(u,s);var d=Date.now();i(d),f(d-c),p({x:u,y:s})}},onTouchEnd:function(){if(r&&(a(null),p(null),v)){var e=v.x/s,n=v.y/s,o=Math.abs(e),c=Math.abs(n);if(Math.max(o,c)<.1)return;var i=e,l=n;b.current=window.setInterval((function(){Math.abs(i)<.01&&Math.abs(l)<.01?window.clearInterval(b.current):t(20*(i*=U),20*(l*=U))}),20)}},onWheel:function(e){var n=e.deltaX,r=e.deltaY,a=0,o=Math.abs(n),c=Math.abs(r);o===c?a="x"===m.current?n:r:o>c?(a=n,m.current="x"):(a=r,m.current="y"),t(-a,-a)&&e.preventDefault()}},l.useEffect((function(){function t(e){y.current.onTouchMove(e)}function n(e){y.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){y.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){y.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(I,(function(e,t){function n(e,t){e((function(e){return je(e+t)}))}return!(xe>=we)&&(Q?n(ne,e):n(oe,t),De(),Be(),!0)})),(0,l.useEffect)((function(){return De(),Te&&(Re.current=window.setTimeout((function(){Ae(0)}),100)),De}),[Te]);var Le=function(e,t,n,r,a,o,c){var i,u,s,f=c.tabs,d=c.tabPosition,v=c.rtl;return["top","bottom"].includes(d)?(i="width",u=v?"right":"left",s=Math.abs(n)):(i="height",u="top",s=-n),(0,l.useMemo)((function(){if(!f.length)return[0,0];for(var n=f.length,r=n,a=0;a<n;a+=1){var o=e.get(f[a].key)||V;if(o[u]+o[i]>s+t){r=a-1;break}}for(var c=0,l=n-1;l>=0;l-=1)if((e.get(f[l].key)||V)[u]<s){c=l+1;break}return[c,r]}),[e,t,r,a,o,s,d,f.map((function(e){return e.key})).join("_"),v])}(Ce,Ze,Q?te:ae,we,Oe,Pe,h(h({},e),{},{tabs:o})),Ke=k(Le,2),Ve=Ke[0],Fe=Ke[1],qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=Ce.get(e)||{width:0,height:0,left:0,right:0,top:0};if(Q){var n=te;d?t.right<te?n=t.right:t.right+t.width>te+Ze&&(n=t.right+t.width-Ze):t.left<-te?n=-t.left:t.left+t.width>-te+Ze&&(n=-(t.left+t.width-Ze)),oe(0),ne(je(n))}else{var r=ae;t.top<-ae?r=-t.top:t.top+t.height>-ae+Ze&&(r=-(t.top+t.height-Ze)),ne(0),oe(je(r))}},_e={};"top"===E||"bottom"===E?_e[d?"marginRight":"marginLeft"]=C:_e.marginTop=C;var Ge=o.map((function(e,t){var n=e.key;return l.createElement(L,{id:u,prefixCls:a,key:n,tab:e,style:0===t?void 0:_e,closable:e.closable,editable:y,active:n===f,renderWrapper:x,removeAriaLabel:null===g||void 0===g?void 0:g.removeAriaLabel,ref:_(n),onClick:function(e){w(n,e)},onRemove:function(){W(n)},onFocus:function(){qe(n),Be(),I.current&&(d||(I.current.scrollLeft=0),I.current.scrollTop=0)}})})),We=A((function(){var e=J(P),t=J(N),n=J(S);le([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var r=J(F);pe(r);var a=J(D);ye(a);var c=J(B);fe([c[0]-r[0],c[1]-r[1]]),ke((function(){var e=new Map;return o.forEach((function(t){var n=t.key,r=_(n).current;r&&e.set(n,{width:r.offsetWidth,height:r.offsetHeight,left:r.offsetLeft,top:r.offsetTop})})),e}))})),ze=o.slice(0,Ve),Ue=o.slice(Fe+1),He=[].concat(j(ze),j(Ue)),Xe=k((0,l.useState)(),2),Ye=Xe[0],Je=Xe[1],$e=Ce.get(f),Qe=(0,l.useRef)();function et(){R.Z.cancel(Qe.current)}(0,l.useEffect)((function(){var e={};return $e&&(Q?(d?e.right=$e.right:e.left=$e.left,e.width=$e.width):(e.top=$e.top,e.height=$e.height)),et(),Qe.current=(0,R.Z)((function(){Je(e)})),et}),[$e,Q,d]),(0,l.useEffect)((function(){qe()}),[f,X($e),X(Ce),Q]),(0,l.useEffect)((function(){We()}),[d]);var tt,nt,rt,at,ot=!!He.length,ct="".concat(a,"-nav-wrap");return Q?d?(nt=te>0,tt=te+xe<we):(tt=te<0,nt=-te+xe<we):(rt=ae<0,at=-ae+xe<we),l.createElement(T.Z,{onResize:We},l.createElement("div",{ref:(0,M.x1)(t,P),role:"tablist",className:p()("".concat(a,"-nav"),c),style:i,onKeyDown:function(){Be()}},l.createElement(Y,{ref:N,position:"left",extra:v,prefixCls:a}),l.createElement("div",{className:p()(ct,(n={},m(n,"".concat(ct,"-ping-left"),tt),m(n,"".concat(ct,"-ping-right"),nt),m(n,"".concat(ct,"-ping-top"),rt),m(n,"".concat(ct,"-ping-bottom"),at),n)),ref:I},l.createElement(T.Z,{onResize:We},l.createElement("div",{ref:B,className:"".concat(a,"-nav-list"),style:{transform:"translate(".concat(te,"px, ").concat(ae,"px)"),transition:Te?"none":void 0}},Ge,l.createElement(G,{ref:F,prefixCls:a,locale:g,editable:y,style:h(h({},0===Ge.length?void 0:_e),{},{visibility:ot?"hidden":null})}),l.createElement("div",{className:p()("".concat(a,"-ink-bar"),m({},"".concat(a,"-ink-bar-animated"),s.inkBar)),style:Ye})))),l.createElement(z,b({},e,{removeAriaLabel:null===g||void 0===g?void 0:g.removeAriaLabel,ref:D,prefixCls:a,tabs:He,className:!ot&&Ne,tabMoving:!!Te})),l.createElement(Y,{ref:S,position:"right",extra:v,prefixCls:a})))}var ee=l.forwardRef(Q),te=["renderTabBar"],ne=["label","key"];function re(e){var t=e.renderTabBar,n=x(e,te),r=(0,l.useContext)(Z).tabs;return t?t(h(h({},n),{},{panes:r.map((function(e){var t=e.label,n=e.key,r=x(e,ne);return l.createElement(N,b({tab:t,key:n,tabKey:n},r))}))}),ee):l.createElement(ee,n)}n(632);var ae=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],oe=0;function ce(e,t){var n,r=e.id,a=e.prefixCls,o=void 0===a?"rc-tabs":a,c=e.className,i=e.items,u=e.direction,s=e.activeKey,f=e.defaultActiveKey,d=e.editable,v=e.animated,y=e.tabPosition,g=void 0===y?"top":y,E=e.tabBarGutter,P=e.tabBarStyle,N=e.tabBarExtraContent,S=e.locale,j=e.moreIcon,R=e.moreTransitionName,M=e.destroyInactiveTabPane,T=e.renderTabBar,A=e.onChange,B=e.onTabClick,D=e.onTabScroll,L=e.getPopupContainer,K=e.popupClassName,V=x(e,ae),F=l.useMemo((function(){return(i||[]).filter((function(e){return e&&"object"===C(e)&&"key"in e}))}),[i]),q="rtl"===u,_=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:h({inkBar:!0},"object"===C(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(v),G=k((0,l.useState)(!1),2),W=G[0],z=G[1];(0,l.useEffect)((function(){z((0,w.Z)())}),[]);var U=k((0,O.Z)((function(){var e;return null===(e=F[0])||void 0===e?void 0:e.key}),{value:s,defaultValue:f}),2),H=U[0],X=U[1],Y=k((0,l.useState)((function(){return F.findIndex((function(e){return e.key===H}))})),2),J=Y[0],$=Y[1];(0,l.useEffect)((function(){var e,t=F.findIndex((function(e){return e.key===H}));-1===t&&(t=Math.max(0,Math.min(J,F.length-1)),X(null===(e=F[t])||void 0===e?void 0:e.key));$(t)}),[F.map((function(e){return e.key})).join("_"),H,J]);var Q=k((0,O.Z)(null,{value:r}),2),ee=Q[0],te=Q[1];(0,l.useEffect)((function(){r||(te("rc-tabs-".concat(oe)),oe+=1)}),[]);var ne={id:ee,activeKey:H,animated:_,tabPosition:g,rtl:q,mobile:W},ce=h(h({},ne),{},{editable:d,locale:S,moreIcon:j,moreTransitionName:R,tabBarGutter:E,onTabClick:function(e,t){null===B||void 0===B||B(e,t);var n=e!==H;X(e),n&&(null===A||void 0===A||A(e))},onTabScroll:D,extra:N,style:P,panes:null,getPopupContainer:L,popupClassName:K});return l.createElement(Z.Provider,{value:{tabs:F,prefixCls:o}},l.createElement("div",b({ref:t,id:r,className:p()(o,"".concat(o,"-").concat(g),(n={},m(n,"".concat(o,"-mobile"),W),m(n,"".concat(o,"-editable"),d),m(n,"".concat(o,"-rtl"),q),n),c)},V),undefined,l.createElement(re,b({},ce,{renderTabBar:T})),l.createElement(I,b({destroyInactiveTabPane:M},ne,{animated:_}))))}var ie=l.forwardRef(ce),le=n(1929),ue=n(1815),se=n(1002),fe=n(9464),de={motionAppear:!1,motionEnter:!0,motionLeave:!0};var ve=n(5501),pe=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var be=function(){return null},me=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function ye(e){var t,n=e.type,i=e.className,u=e.size,s=e.onEdit,f=e.hideAdd,v=e.centered,b=e.addIcon,m=e.children,y=e.items,h=e.animated,g=me(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),E=g.prefixCls,k=g.moreIcon,C=void 0===k?l.createElement(c.Z,null):k,x=l.useContext(le.E_),w=x.getPrefixCls,O=x.direction,P=x.getPopupContainer,Z=w("tabs",E);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,r=t.event;null===s||void 0===s||s("add"===e?r:n,e)},removeIcon:l.createElement(o.Z,null),addIcon:b||l.createElement(d,null),showAdd:!0!==f});var N=w(),S=function(e,t){return e||function(e){return e.filter((function(e){return e}))}((0,ve.Z)(t).map((function(e){if(l.isValidElement(e)){var t=e.key,n=e.props||{},r=n.tab,o=pe(n,["tab"]);return(0,a.Z)((0,a.Z)({key:String(t)},o),{label:r})}return null})))}(y,m),I=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:(0,a.Z)({inkBar:!0},"object"===(0,se.Z)(n)?n:{})).tabPane&&(t.tabPaneMotion=(0,a.Z)((0,a.Z)({},de),{motionName:(0,fe.mL)(e,"switch")})),t}(Z,h);return l.createElement(ue.Z.Consumer,null,(function(e){var o,c=void 0!==u?u:e;return l.createElement(ie,(0,a.Z)({direction:O,getPopupContainer:P,moreTransitionName:"".concat(N,"-slide-up")},g,{items:S,className:p()((o={},(0,r.Z)(o,"".concat(Z,"-").concat(c),c),(0,r.Z)(o,"".concat(Z,"-card"),["card","editable-card"].includes(n)),(0,r.Z)(o,"".concat(Z,"-editable-card"),"editable-card"===n),(0,r.Z)(o,"".concat(Z,"-centered"),v),o),i),editable:t,moreIcon:C,prefixCls:Z,animated:I}))}))}ye.TabPane=be;var he=ye}}]);
//# sourceMappingURL=830.31981b52.chunk.js.map