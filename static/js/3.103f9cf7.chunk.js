(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{228:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialog:"Dialogs_dialog__lk_cw",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",errorBox:"Dialogs_errorBox__2bQSY",invalid:"Dialogs_invalid__1bD92"}},232:function(e,s,a){"use strict";a.r(s);a(0);var t=a(228),i=a.n(t),n=a(11),c=a(1),o=function(e){return Object(c.jsx)(n.b,{to:"/dialogs/".concat(e.id),className:i.a.dialog,children:e.name})},r=function(e){return Object(c.jsx)("div",{className:i.a.message,children:e.message})},l=a(77),d=a(10),g=a(18),u=a(73),m=function(e){var s=u.a().shape({textMessage:u.b().min(2,"Too Short!").max(100,"Too Long!").required("Required")});return Object(c.jsx)(g.d,{initialValues:{textMessage:""},onSubmit:function(s,a){var t=a.setSubmitting;console.log(s),e.addUserMessage(s.textMessage),t(!1)},validationSchema:s,children:function(e){var s=e.isSubmitting,a=e.errors,t=e.touched;return Object(c.jsxs)(g.c,{className:i.a.dialogs,name:"dialogsForm",children:[Object(c.jsx)("button",{type:"submit",disabled:s,children:"Submit"}),Object(c.jsx)(g.b,{className:a.textMessage&&t.textMessage?i.a.invalid:null,component:"textarea",name:"textMessage",placeholder:"textarea"}),a.textMessage&&t.textMessage?Object(c.jsx)("div",{className:i.a.errorBox,children:a.textMessage}):null]})}})},b=function(e){var s=e.messagesPage.dialogs.map((function(e){return Object(c.jsx)(o,{name:e.name,id:e.id})})),a=e.messagesPage.messages.map((function(e){return Object(c.jsx)(r,{message:e.message})}));return!1===e.isAuth?Object(c.jsx)(d.a,{to:"/login"}):Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:i.a.dialogs,children:[Object(c.jsx)("div",{className:i.a.dialogsItems,children:s}),Object(c.jsx)("div",{className:i.a.messages,children:a})]}),Object(c.jsx)(m,{addUserMessage:e.addUserMessage})]})},j=(a(78),a(15)),x=(a(113),a(24));s.default=Object(x.c)(Object(j.b)((function(e){return{messagesPage:e.messagesPage,isAuth:e.auth.isAuth}}),(function(e){return{addUserMessage:function(s){e(Object(l.b)(s))}}})))(b)}}]);
//# sourceMappingURL=3.103f9cf7.chunk.js.map