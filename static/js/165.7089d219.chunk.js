"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[165],{9536:function(e,n,t){var s=t(8489),r=t(3738),i=t(435),o=t(184),a=["children"];n.Z=function(e){var n=e.children,t=(0,r.Z)(e,a);return(0,o.jsx)(i.Z,(0,s.Z)((0,s.Z)({},t),{},{children:n}))}},3237:function(e,n,t){t.d(n,{b:function(){return a}});var s="InnerPreloader_loader__dTCTp",r="InnerPreloader_spinner__Z0g2F",i=t(8591),o=(t(2791),t(184)),a=function(){return(0,o.jsx)("div",{className:s,children:(0,o.jsx)("div",{className:r,children:(0,o.jsx)("img",{src:i,alt:"loader"})})})}},9165:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var s=t(3430),r=t(2791),i=t(3707),o=t(1402),a=function(e){return e.usersPage},c=t(7929),u="Users_main__cKFkr",l="Users_scrolled__-sCx9",f="Users_filterBlock__0Q5nL",d="Users_searchInput__AXrQB",m="Users_info__IRBqF",_="Common_container__5h0aI",h="UsersList_content__VS7w8",x=t(3237),g=t(1614),v=t(2543),j="UserItem_itemContainer__7PZJ5",p="UserItem_data__oahi7",w="UserItem_name__2U6aR",N="UserItem_status__2+sVs",Z="UserItem_link__NFuTZ",C="UserItem_userPhoto__5CdDo",U="UserItem_button__qj753",k=t(9536),I=t(184),S=function(e){var n=e.u,t=(0,o.T)(),s=(0,o.C)((function(e){return e.usersPage})).isFollowing.some((function(e){return e===n.id}));return(0,I.jsxs)("div",{className:j,children:[(0,I.jsx)(g.OL,{className:Z,to:"/profile/"+n.id,children:(0,I.jsx)("img",{src:n.photos.small?n.photos.small:v,className:C,alt:"user face"})}),(0,I.jsxs)("div",{className:p,children:[(0,I.jsx)("span",{className:w,children:(0,I.jsx)(g.OL,{className:Z,to:"/profile/"+n.id,children:n.name})}),n.status&&(0,I.jsx)("span",{className:N,children:n.status})]}),(0,I.jsx)(k.Z,{className:U,disabled:s,loading:s,onClick:function(){return t((0,i.Gm)({userID:n.id,isFollowed:n.followed}))},children:n.followed?"Unfollow":"Follow"})]})},b=(0,r.memo)((function(){var e=(0,o.C)(a),n=e.users,t=e.isFetching;return(0,I.jsxs)("div",{className:h,children:[t&&(0,I.jsx)(x.b,{}),n.map((function(e){return(0,I.jsx)(S,{u:e},e.id)}))]})})),F=t(42),E="SortSelect_select__7Bo5H",T=t(1753),L=[3,5,7,10,20],P=function(){var e=(0,g.lr)(),n=(0,s.Z)(e,2),t=n[0],r=n[1],i=Number(t.get("count"))||10,o=L.map((function(e){return{value:e,label:e}}));return(0,I.jsx)(F.Z,{className:E,suffixIcon:(0,I.jsx)(T.Z,{}),defaultValue:i||10,onChange:function(e){t.set("count",String(e)),r(t)},options:o})},R=t(4219),y=t(4427),B=(0,c.e)((0,r.memo)((function(){var e=(0,o.C)(a).totalUsersCount,n=(0,g.lr)(),t=(0,s.Z)(n,2),c=t[0],h=t[1],x=Number(c.get("page"))||1,v=Number(c.get("count"))||10,j=function(){var e=(0,r.useRef)(null),n=(0,r.useState)(!1),t=(0,s.Z)(n,2),i=t[0],o=t[1];return(0,r.useEffect)((function(){var n=function(){if(e){var n=window.pageYOffset,t=e.current.getBoundingClientRect().top;o(n>t)}};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}})),{stickyRef:e,isSticky:i}}(),p=j.stickyRef,w=j.isSticky,N=(0,r.useState)(""),Z=(0,s.Z)(N,2),C=Z[0],U=Z[1],k=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,t=(0,r.useState)(e),i=(0,s.Z)(t,2),o=i[0],a=i[1];return(0,r.useEffect)((function(){var t=setTimeout((function(){a(e)}),n);return function(){clearTimeout(t)}}),[n,e]),o}(C,1500);(0,r.useEffect)((function(){C.trim()?(c.set("term",C),h(c)):(c.delete("term"),h(c))}),[k]);var S=(0,o.T)();(0,r.useEffect)((function(){S((0,i.uh)({currentPage:x,pageSize:v,term:C}))}),[x,k,S,v]),(0,r.useEffect)((function(){return function(){S((0,i.Zx)())}}),[S]);return(0,I.jsxs)("div",{className:"".concat(_," ").concat(u),children:[(0,I.jsx)("div",{className:m,children:(0,I.jsxs)("span",{children:["All users: ",e]})}),(0,I.jsxs)("div",{ref:p,className:"".concat(f," ").concat(w?l:""),children:[(0,I.jsx)(R.Z,{placeholder:"Enter name...",className:d,value:C,onChange:function(e){return U(e.currentTarget.value)},type:"text"}),!!e&&(0,I.jsx)(y.Z,{showLessItems:!0,showSizeChanger:!1,showQuickJumper:!1,current:x,total:e,onChange:function(e){c.set("page",String(e)),h(c)}}),(0,I.jsx)(P,{})]}),(0,I.jsx)(b,{})]})})))},7929:function(e,n,t){t.d(n,{e:function(){return a}});var s=t(8489),r=t(6871),i=t(1402),o=t(184);function a(e){return function(n){return(0,i.C)((function(e){return e.auth})).isAuth?(0,o.jsx)(e,(0,s.Z)({},n)):(0,o.jsx)(r.Fg,{to:"/login"})}}},8591:function(e,n,t){e.exports=t.p+"static/media/inner-loader.f533884a34aee881a09e.gif"},2543:function(e,n,t){e.exports=t.p+"static/media/zoolanderDef.fd128b2756fd51491ad5.jpg"}}]);
//# sourceMappingURL=165.7089d219.chunk.js.map