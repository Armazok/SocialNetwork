"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[700],{3237:function(n,e,a){a.d(e,{b:function(){return c}});var s="InnerPreloader_loader__dTCTp",r="InnerPreloader_spinner__Z0g2F",t=a(8591),i=(a(2791),a(184)),c=function(){return(0,i.jsx)("div",{className:s,children:(0,i.jsx)("div",{className:r,children:(0,i.jsx)("img",{src:t,alt:"loader"})})})}},5926:function(n,e,a){a.r(e);var s=a(1790),r=(a(2791),a(1402)),t=a(7929),i=a(6871),c=a(3237),o=a(184);e.default=(0,t.e)((function(){var n=(0,r.C)((function(n){return n.auth})),e=n.authProfile,a=n.status,t="/"===(0,i.TH)().pathname;return e?(0,o.jsx)(s.O,{status:a,profile:e,isOwner:t}):(0,o.jsx)(c.b,{})}))},1790:function(n,e,a){a.d(e,{O:function(){return W}});var s=a(2791),r="ProfileData_container__1G3yo",t="ProfileData_fullName__oLyay",i="ProfileData_dataGrid__RAyHk",c="ProfileData_contacts__dF6h0",o="ProfileData_links__Yzeqs",l="ProfileData_label__HPI01",u=a(3430),d=a(1402),_=a(4820),f="ProfileStatus_container__L8joB",j="ProfileStatus_owner__+9+yW",h="ProfileStatus_status__+njM-",m=a(4219),x=a(184),v=(0,s.memo)((function(n){var e=n.isOwner,a=(0,d.C)((function(n){return n.auth.status})),r=(0,d.T)(),t=(0,s.useState)(!1),i=(0,u.Z)(t,2),c=i[0],o=i[1],l=(0,s.useState)(a||""),v=(0,u.Z)(l,2),p=v[0],N=v[1];(0,s.useEffect)((function(){N(a)}),[a]);return(0,x.jsx)("div",{className:"".concat(f," ").concat(e?j:""),onClick:function(){e&&o(!0)},children:c?(0,x.jsx)(m.Z,{onChange:function(n){N(n.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),p&&p!==a&&r((0,_.OL)(p))},value:p}):(0,x.jsx)("div",{className:h,children:p||"Enter your status"})})})),p=function(n){var e=n.isOwner,a=n.profile,u=a.contacts,d=a.aboutMe,_=a.lookingForAJob,f=a.lookingForAJobDescription,j=a.fullName,h=Object.keys(u),m=Object.values(u),p=m.some((function(n){return null!==n})),N=h.map((function(n,e){return(0,x.jsxs)(s.Fragment,{children:[(0,x.jsxs)("span",{className:l,children:[n,":"]}),(0,x.jsxs)("a",{target:"_blank",rel:"noreferrer",href:m[e],children:[" ",m[e]]})]},h[e])}));return(0,x.jsxs)("div",{className:r,children:[(0,x.jsx)("span",{className:t,children:j}),(0,x.jsx)(v,{isOwner:e}),(0,x.jsxs)("div",{className:i,children:[(0,x.jsx)("span",{className:l,children:"Looking for a job:"}),(0,x.jsx)("span",{children:_?"Yes":"No"}),_&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{className:l,children:"My professional skills:"}),(0,x.jsx)("span",{children:f})]}),(0,x.jsx)("span",{className:l,children:"Full name: "}),(0,x.jsx)("span",{children:j}),d&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{className:l,children:"About me: "}),(0,x.jsx)("span",{children:d})]})]}),p&&(0,x.jsxs)("div",{className:c,children:[(0,x.jsx)("span",{className:l,children:"Contacts:"}),(0,x.jsx)("div",{className:o,children:N})]})]})},N=a(2543),g="Avatar_container__ngJhg",b="Avatar_avatar__ALGUE",k="Avatar_active__2zc6z",F="Avatar_uploader__Tf+7l",P="Avatar_input__uwot-",C="Avatar_button__a7jgd",O=function(n){var e=n.avatar,a=n.isOwner,r=(0,s.useState)(!1),t=(0,u.Z)(r,2),i=t[0],c=t[1],o=(0,d.T)(),l="".concat(F," ").concat(i&&k);return(0,x.jsxs)("div",{className:g,onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},children:[(0,x.jsx)("div",{role:"presentation",style:{backgroundImage:"url(".concat(e||N,")")},className:b}),a&&(0,x.jsx)("div",{className:l,children:(0,x.jsxs)("label",{children:[(0,x.jsx)("input",{accept:".jpg, .jpeg, .png",className:P,onChange:function(n){n.target.files.length&&o((0,_.mJ)(n.target.files[0]))},type:"file"}),(0,x.jsx)("span",{className:C,children:"Upload photo"})]})})]})},w="ProfileInfo_profileInfoContainer__MSnFX",A="ProfileInfo_leftContainer__9+RDq",y="ProfileInfo_rightContainer__dnA8a",I="ProfileInfo_container__pib2O",D="FriendItems_container__g1ytj",T="Friend_friend__GWKLH",L="Friend_name__bKDVF",M="Friend_avatar__VgTbv",S=a(6871);function Z(n){var e=n.avatar,a=n.name,s=n.id,r=(0,S.s0)();return(0,x.jsxs)("div",{className:T,onClick:function(){return r("profile/".concat(s))},children:[(0,x.jsx)("div",{className:M,style:{backgroundImage:"url(".concat(e,")")}}),"\n",(0,x.jsx)("span",{className:L,children:a})]})}var B=a(6245),z=function(){var n=(0,d.C)((function(n){return n.sidebar})).friends.map((function(n){var e=n.photos,a=n.name,s=n.id;return(0,x.jsx)(Z,{id:s,avatar:e.small||B.Z,name:a},s)}));return(0,x.jsx)("div",{className:D,children:n})},E="FriendsBlock_friends__P8o4W",G="FriendsBlock_header__N0+6u",H="FriendsBlock_count__FOMkm";function J(){var n=(0,d.C)((function(n){return n.sidebar.totalFriendsCount}));return(0,x.jsxs)("div",{className:E,children:[(0,x.jsx)("span",{className:G,children:"Friends"}),n&&(0,x.jsxs)("span",{className:H,children:["Total: ",n]}),(0,x.jsx)(z,{})]})}var W=function(n){var e=n.isOwner,a=n.profile,s="".concat(y),r="".concat(A);return(0,x.jsxs)("div",{className:w,children:[(0,x.jsxs)("div",{className:r,children:[(0,x.jsx)("div",{className:I,children:(0,x.jsx)(O,{avatar:a.photos.large,isOwner:e})}),(0,x.jsx)("div",{className:I,children:(0,x.jsx)(J,{})})]}),(0,x.jsx)("div",{className:s,children:(0,x.jsx)("div",{className:I,children:(0,x.jsx)(p,{profile:a,isOwner:e})})})]})}},7929:function(n,e,a){a.d(e,{e:function(){return c}});var s=a(8489),r=a(6871),t=a(1402),i=a(184);function c(n){return function(e){return(0,t.C)((function(n){return n.auth})).isAuth?(0,i.jsx)(n,(0,s.Z)({},e)):(0,i.jsx)(r.Fg,{to:"/login"})}}},8591:function(n,e,a){n.exports=a.p+"static/media/inner-loader.f533884a34aee881a09e.gif"},2543:function(n,e,a){n.exports=a.p+"static/media/zoolanderDef.fd128b2756fd51491ad5.jpg"}}]);
//# sourceMappingURL=700.82e32c7a.chunk.js.map