(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,t,n){"use strict";n.d(t,"e",(function(){return h})),n.d(t,"b",(function(){return m})),n.d(t,"i",(function(){return A})),n.d(t,"d",(function(){return x})),n.d(t,"j",(function(){return g})),n.d(t,"h",(function(){return v})),n.d(t,"g",(function(){return I})),n.d(t,"f",(function(){return E})),n.d(t,"c",(function(){return _}));var r=n(9),s=n.n(r),a=n(20),i=n(2),c=n(16),u=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},o="FOLLOW",l="UNFOLLOW",d="SETUSERS",f="SETPAGE",b="TOGGLEFETCHING",j="FOLLOW_IN_PROPGRESS",p={users:[],pageSize:5,totalUsersCount:100,currentPage:1,isFetching:!1,followInPropgress:[]},h=function(e,t){return function(){var n=Object(a.a)(s.a.mark((function n(r){var a,i;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(E(!0)),n.next=3,c.a.getAllUsers(e,t);case 3:return a=n.sent,n.next=6,a.json();case 6:i=n.sent,r(E(!1)),r(v(i.items,i.totalCount));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},O=function(){var e=Object(a.a)(s.a.mark((function e(t,n,r,a){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_(n,!0)),e.next=3,c.a.followUser(n,r);case 3:return i=e.sent,e.next=6,i.json();case 6:0===e.sent.resultCode&&t(a),t(_(n,!1));case 9:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),m=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O(n,e,"POST",x(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O(n,e,"DELETE",g(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return{type:o,userId:e}},g=function(e){return{type:l,userId:e}},v=function(e,t){return{type:d,users:e,totalUsersCount:t}},I=function(e){return{type:f,page:e}},E=function(e){return{type:b,isFetching:e}},_=function(e,t){return{type:j,userId:e,isFetching:t}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,["id"],{followed:!0})});case l:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,["id"],{followed:!1})});case d:return Object(i.a)(Object(i.a)({},e),{},{users:t.users,totalUsersCount:t.totalUsersCount});case f:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.page});case b:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case j:return Object(i.a)(Object(i.a)({},e),{},{followInPropgress:t.isFetching?[e.followInPropgress,t.userId]:e.followInPropgress.filter((function(e){return e!==t.userId}))});default:return e}}},106:function(e,t,n){e.exports={friendsList:"Friends_friendsList__1yYy2"}},107:function(e,t,n){e.exports={friendsList:"FriendItem_friendsList__2ys3T",friendItem:"FriendItem_friendItem__1o6Pz"}},111:function(e,t){},112:function(e,t,n){e.exports={statusBox:"Login_statusBox__2Urq_"}},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(2),s=n(3),a=n(4),i=n(7),c=n(8),u=n(15),o=n(10),l=n(0),d=n.n(l),f=n(1),b=function(e){return{isAuth:e.auth.isAuth}},j=function(e){var t=function(t){Object(i.a)(u,t);var n=Object(c.a)(u);function u(){return Object(s.a)(this,u),n.apply(this,arguments)}return Object(a.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(f.jsx)(e,Object(r.a)({},this.props)):Object(f.jsx)(o.a,{to:"/login"})}}]),u}(d.a.Component);return Object(u.b)(b)(t)}},120:function(e,t,n){},14:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE",friendsLink:"Navbar_friendsLink__3qsoK"}},16:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r="https://social-network.samuraijs.com/api/1.0",s={getAllUsers:function(e,t){return fetch("".concat(r,"/users?page=").concat(e,"&count=").concat(t),{credentials:"include",headers:{"API-KEY":"7ed1a18b-da95-467c-8ff8-12eb66b13f4e"}})},followUser:function(e,t){return fetch("".concat(r,"/follow/").concat(e),{credentials:"include",method:t,headers:{"API-KEY":"7ed1a18b-da95-467c-8ff8-12eb66b13f4e"}})},getAuth:function(){return fetch("".concat(r,"/auth/me"),{credentials:"include",headers:{"API-KEY":"7ed1a18b-da95-467c-8ff8-12eb66b13f4e"}})},getProfile:function(e){return fetch("".concat(r,"/profile/").concat(e))},loginAuth:function(e,t,n){return fetch("".concat(r,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json","API-KEY":"7ed1a18b-da95-467c-8ff8-12eb66b13f4e"},credentials:"include",body:JSON.stringify({email:e,password:t,rememberMe:n})})},logout:function(){return fetch("".concat(r,"/auth/login"),{method:"DELETE"})}},a={getStatus:function(e){return fetch("".concat(r,"/profile/status/").concat(e))},updateStatus:function(e){return fetch("".concat(r,"/profile/status/"),{method:"PUT",headers:{"Content-Type":"application/json","API-KEY":"7ed1a18b-da95-467c-8ff8-12eb66b13f4e"},credentials:"include",body:JSON.stringify({status:e})})}};t.a=s},223:function(e,t,n){},224:function(e,t,n){},225:function(e,t,n){},226:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(53),i=n.n(a),c=n(36),u=(n(120),n(3)),o=n(4),l=n(7),d=n(8),f=n(2),b=n(61),j=n.n(b),p=n(11),h=n(1),O=function(e){return Object(h.jsxs)("header",{className:j.a.header,children:[Object(h.jsx)("a",{href:"#",children:"LOGO"}),Object(h.jsxs)("div",{className:j.a.loginBlock,children:[e.auth.isAuth&&Object(h.jsxs)("div",{children:[e.auth.login+" ",Object(h.jsx)("button",{onClick:function(){e.logout()},children:"logout"})]}),!e.auth.isAuth&&Object(h.jsx)(p.b,{to:"/login",children:"Login"})]})]})},m=n(15),A=n(26),x=(n(16),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)(O,Object(f.a)({},this.props))}}]),n}(s.a.Component)),g=Object(m.b)((function(e){return{auth:e.auth}}),{getAuth:A.b,logout:A.d})(x),v=n(14),I=n.n(v),E=(n(106),n(107),function(e){return Object(h.jsxs)("nav",{className:I.a.nav,children:[Object(h.jsx)("div",{className:"".concat(I.a.item," ").concat(I.a.active),children:Object(h.jsx)(p.b,{to:"/profile",activeClassName:I.a.activeLink,children:"Profile"})}),Object(h.jsx)("div",{className:I.a.item,children:Object(h.jsx)(p.b,{to:"/dialogs",activeClassName:I.a.activeLink,children:"Messages"})}),Object(h.jsx)("div",{className:I.a.item,children:Object(h.jsx)(p.b,{to:"/news",activeClassName:I.a.activeLink,children:"News"})}),Object(h.jsx)("div",{className:I.a.item,children:Object(h.jsx)(p.b,{to:"/music",activeClassName:I.a.activeLink,children:"Music"})}),Object(h.jsx)("div",{className:I.a.item,children:Object(h.jsx)(p.b,{to:"/settings",activeClassName:I.a.activeLink,children:"Settings"})}),Object(h.jsx)("div",{className:I.a.item,children:Object(h.jsx)(p.b,{to:"/users",activeClassName:I.a.activeLink,children:"Users"})})]})}),_=(n(79),n(40)),w=n.n(_),P=n(46),S=n.n(P),k=function(e){return Object(h.jsxs)("div",{className:S.a.item,children:[Object(h.jsxs)("div",{className:S.a.imgWrapper,children:[Object(h.jsx)("img",{src:"https://i.pravatar.cc/50"}),Object(h.jsx)("span",{className:S.a.itemMessage,children:e.message})]}),Object(h.jsx)("div",{className:S.a.likes,children:Object(h.jsxs)("span",{children:["Likes ",e.likeCount]})})]})},y=n(18),L=n(73),C=function(e){var t=L.a().shape({textMessage:L.b().min(2,"Too Short!").max(100,"Too Long!").required("Required")});return Object(h.jsx)(y.d,{initialValues:{},onSubmit:function(t,n){var r=n.setSubmitting;e.addPostItem(t.textMessage),r(!1)},validationSchema:t,children:function(e){var t=e.isSubmitting,n=e.errors,r=e.touched;return Object(h.jsxs)(y.c,{name:"profilePostForm",children:[Object(h.jsx)(y.b,{className:n.textMessage&&r.textMessage?w.a.invalid:null,component:"textarea",name:"textMessage",placeholder:"add post"}),n.textMessage&&r.textMessage?Object(h.jsx)("div",{className:w.a.errorBox,children:n.textMessage}):null,Object(h.jsx)("div",{}),Object(h.jsx)("button",{type:"submit",disabled:t,children:"Add Post"})]})}})},N=function(e){var t=e.profilePage.posts.map((function(e){return Object(h.jsx)(k,{message:e.message,likeCount:e.likeCount})}));return Object(h.jsxs)("div",{className:w.a.posts,children:[Object(h.jsx)("h3",{children:"My Posts"}),Object(h.jsx)("div",{children:Object(h.jsx)(C,{addPostItem:function(t){e.addPostItem(t)}})}),Object(h.jsx)("div",{className:w.a.allPosts,children:t})]})},B=n(44),M=n.n(B),U=n(111),D=n.n(U),H=(s.a.Component,n(32)),F=function(e){var t=Object(r.useState)(!1),n=Object(H.a)(t,2),s=n[0],a=n[1],i=Object(r.useState)(e.status),c=Object(H.a)(i,2),u=c[0],o=c[1];return Object(r.useEffect)((function(){o(e.status)}),[e.status]),Object(h.jsx)("div",{children:s?Object(h.jsx)("div",{onBlur:function(){a(!1)},children:Object(h.jsx)("input",{onChange:function(t){var n=t.target.value;o(n),e.updateProfileStatus(n)},autoFocus:!0,value:u})}):Object(h.jsx)("div",{onDoubleClick:function(){a(!0)},children:Object(h.jsx)("span",{children:e.status||"Enter status"})})})},Y=function(e){return e.profile?Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:M.a.banner,src:"https://images.freeimages.com/images/large-previews/bd7/falloxbow-1058032.jpg",alt:""})}),Object(h.jsx)(F,{status:e.status,updateProfileStatus:e.updateProfileStatus}),Object(h.jsx)("div",{className:M.a.decriptionBlock,children:e.profile.aboutMe})]}):Object(h.jsx)("img",{src:D.a})},T=(n(78),n(27)),K=Object(m.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPostItem:function(t){e(Object(T.d)(t))}}}))(N),J=n(10),Q=function(e){return!1===e.isAuth?Object(h.jsx)(J.a,{to:"/login"}):Object(h.jsxs)("div",{children:[Object(h.jsx)(Y,{profile:e.profile,status:e.status,updateProfileStatus:e.updateProfileStatus}),Object(h.jsx)(K,{})]})},R=(n(223),function(e){return Object(h.jsx)("div",{children:"News"})}),z=(n(224),function(e){return Object(h.jsx)("div",{children:"Music"})}),G=(n(225),function(e){return Object(h.jsx)("div",{children:"Settings"})}),W=(n(113),n(24)),V=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserId),this.props.getProfileUser(e),this.props.getProfileStatus(e)}},{key:"render",value:function(){return Object(h.jsx)(Q,Object(f.a)({},this.props))}}]),n}(s.a.PureComponent),Z=Object(W.c)(Object(m.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserId:e.auth.id,isAuth:e.auth.isAuth}}),{setUserProfile:T.e,getProfileUser:T.c,getProfileStatus:T.b,updateProfileStatus:T.f}),J.f)(V),q=n(112),X=n.n(q),$=function(e){return Object(h.jsx)(y.d,{initialValues:{email:"",password:"",rememberMe:!0},validate:function(e){return{}},onSubmit:function(t,n){var r=n.setSubmitting,s=n.setStatus;e.login(t.email,t.password,t.rememberMe,s),r(!1)},children:function(e){var t=e.isSubmitting,n=e.status;e.errors;return Object(h.jsxs)(y.c,{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:X.a.statusBox,children:n}),Object(h.jsx)(y.b,{type:"email",name:"email",placeholder:"Email"}),Object(h.jsx)(y.a,{name:"email",component:"div"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(y.b,{type:"password",name:"password",placeholder:"Password"}),Object(h.jsx)(y.a,{name:"password",component:"div"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(y.b,{type:"checkbox",name:"rememberMe",placeholder:"Remember me",checked:!0}),Object(h.jsx)("span",{children:"Remember Me"}),Object(h.jsx)(y.a,{name:"password",component:"div"})]}),Object(h.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})},ee=Object(m.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:A.c})((function(e){return e.isAuth?Object(h.jsx)(J.a,{to:"/profile"}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsx)($,{login:e.login})]})})),te=n(58),ne=(n(226),n(55)),re=function(e){return function(t){return Object(h.jsx)(s.a.Suspense,{fallback:Object(h.jsx)("img",{src:ne.a}),children:Object(h.jsx)(e,Object(f.a)({},t))})}},se=s.a.lazy((function(){return n.e(3).then(n.bind(null,232))})),ae=s.a.lazy((function(){return n.e(4).then(n.bind(null,231))})),ie=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(h.jsxs)("div",{className:"app-wrapper",children:[Object(h.jsx)(g,{}),Object(h.jsx)(E,{}),Object(h.jsxs)("div",{className:"app-wrapper-content",children:[Object(h.jsx)(J.b,{path:"/dialogs",render:re(se)}),Object(h.jsx)(J.b,{path:"/profile/:userId?",render:function(){return Object(h.jsx)(Z,{})}}),Object(h.jsx)(J.b,{path:"/users",render:re(ae)}),Object(h.jsx)(J.b,{path:"/music",component:z}),Object(h.jsx)(J.b,{path:"/settings",component:G}),Object(h.jsx)(J.b,{path:"/login",component:ee}),Object(h.jsx)(J.b,{path:"/news",component:R})]})]}):Object(h.jsx)("img",{src:ne.a})}}]),n}(s.a.Component),ce=Object(m.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:te.b})(ie),ue=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,230)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),a(e),i(e)}))},oe=function(e){i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(p.a,{children:Object(h.jsx)(m.a,{store:c.a,children:Object(h.jsx)(ce,{})})})}),document.getElementById("root"))};oe(c.a.getState()),c.a.subscribe((function(){c.a.getState();oe()})),ue()},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return b}));var r=n(9),s=n.n(r),a=n(20),i=n(2),c=n(16),u=(n(18),"SET_USER_DATA"),o={id:null,email:null,login:null,isAuth:!1},l=function(e,t,n,r){return{type:u,data:{id:e,login:t,email:n,isAuth:r}}},d=function(){return function(){var e=Object(a.a)(s.a.mark((function e(t){var n,r,a,i,u,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.getAuth();case 2:return n=e.sent,e.next=5,n.json();case 5:0===(r=e.sent).resultCode&&(a=r.data,i=a.id,u=a.login,o=a.email,t(l(i,u,o,!0)));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(e,t,n,r){return function(){var i=Object(a.a)(s.a.mark((function a(i){var u,o,l;return s.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,c.a.loginAuth(e,t,n);case 2:return u=s.sent,s.next=5,u.json();case 5:0===(o=s.sent).resultCode?i(d()):0!==o.resultCode&&(l=[],o.messages.forEach((function(e){return l.push(e+"! ")})),r(l));case 7:case"end":return s.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}()},b=function(){return function(){var e=Object(a.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.logout();case 2:return n=e.sent,e.next=5,n.json();case 5:0==e.sent.resultCode&&t(l(null,null,null,!1));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),t.data);default:return e}}},27:function(e,t,n){"use strict";n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"f",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return O}));var r=n(9),s=n.n(r),a=n(20),i=n(13),c=n(2),u=n(16),o="ADD_POST",l="SET_USER_PROFILE",d="GET_STATUS",f={posts:[{message:"Hi, how are you?",id:1,likeCount:24},{message:"My cat, yoo",id:2,likeCount:13},{message:"lalala",id:1,likeCount:64}],newPostText:"enter message",profile:null,status:""},b=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.getProfile(e);case 2:return r=t.sent,t.next=5,r.json();case 5:a=t.sent,n(O(a));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:return r=t.sent,t.next=5,r.json();case 5:a=t.sent,n(m(a));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:return r=t.sent,t.next=5,r.json();case 5:0===t.sent.resultCode&&n(m(e));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return{type:o,text:e}},O=function(e){return{type:l,profile:e}},m=function(e){return{type:d,status:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;function n(t){var n={message:t,id:0,likeCount:2};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n])})}switch(t.type){case o:return n(t.text);case l:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case d:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});default:return e}}},36:function(e,t,n){"use strict";var r=n(24),s=n(27),a=n(77),i={friends:[{name:"Stepan",id:1},{name:"Sasha",id:2},{name:"Stepan",id:3},{name:"Alyona",id:4},{name:"Alex",id:5}]},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return e},u=n(102),o=n(26),l=n(58),d=n(105),f=Object(r.b)({profilePage:s.a,messagesPage:a.a,sideBar:c,usersPage:u.a,auth:o.a,app:l.a}),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.c,j=Object(r.d)(f,b(Object(r.a)(d.a)));window.store=j;t.a=j},40:function(e,t,n){e.exports={posts:"Posts_posts__1djyJ",allPosts:"Posts_allPosts__OsXss",errorBox:"Posts_errorBox__1sqrK",invalid:"Posts_invalid__1KIxu"}},44:function(e,t,n){e.exports={banner:"ProfileInfo_banner__1uWel",decriptionBlock:"ProfileInfo_decriptionBlock__3hq0w"}},46:function(e,t,n){e.exports={item:"Post_item__ihtu9",imgWrapper:"Post_imgWrapper__1yi6H"}},55:function(e,t,n){"use strict";t.a="data:image/gif;base64,R0lGODlhFAAUAPMIAIeHhz8/P1dXVycnJ8/Pz7e3t5+fn29vb////wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAIACwAAAAAFAAUAEAEUxDJSatFxtwaggWAdIyHJAhXoRYSQUhDPGx0TbmujahbXGWZWqdDAYEsp5NupLPkdDwE7oXwWVasimzWrAE1tKFHErQRK8eL8mMUlRBJVI307uoiACH5BAUHAAgALAEAAQASABIAAAROEMkpS6E4W5upMdUmEQT2feFIltMJYivbvhnZ3R0A4NMwIDodz+cL7nDEn5CH8DGZh8MtEMBEoxkqlXKVIgQCibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpjaE4W5spANUmFQX2feFIltMJYivbvhnZ3d1x4BNBIDodz+cL7nDEn5CH8DGZAsFtMMBEoxkqlXKVIgIBibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpAaA4W5vpOdUmGQb2feFIltMJYivbvhnZ3Z0g4FNRIDodz+cL7nDEn5CH8DGZgcCNQMBEoxkqlXKVIgYDibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpz6E4W5upENUmAQD2feFIltMJYivbvhnZ3V0Q4JNhIDodz+cL7nDEn5CH8DGZg8GtUMBEoxkqlXKVIggEibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkphaA4W5tpCNUmHQf2feFIltMJYivbvhnZ3d0w4BMAIDodz+cL7nDEn5CH8DGZBMLNYMBEoxkqlXKVIgoFibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpQ6A4W5vpGNUmCQL2feFIltMJYivbvhnZ3R1B4NNxIDodz+cL7nDEn5CH8DGZhcINAMBEoxkqlXKVIgwGibbK9YLBYvLtHH5K0J0IACH5BAUHAAcALAEAAQASABIAAANCeLo6wzA6FxkhbaoQ4L3ZxnXLh0EjWZ4RV71VUcCLIByyTNt2PsO8m452sBGJBsNxkUwuD03lAQBASqnUJ7aq5UYSADs="},58:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(2),s=n(26),a="SET_INITIALIZED",i={initialized:!1},c=function(){return function(e){e(Object(s.b)()).then((function(){e({type:a})}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:return Object(r.a)(Object(r.a)({},e),{},{initialized:!0});default:return e}}},61:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},77:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(13),s=n(2),a="ADD_NEW_MESSAGE",i={messages:[{message:"How are You",id:1},{message:"Im Fine Boi",id:2},{message:"Wanna some react?",id:3},{message:"Yes, I do!",id:4},{message:"Check this link",id:5}],dialogs:[{name:"Sasha",id:1},{name:"Dimon",id:2},{name:"Pokemon",id:3},{name:"Vitalik",id:4},{name:"Anton",id:5}]},c=function(e){return{type:a,message:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;function n(t){var n={message:t,id:e.messages+1};return Object(s.a)(Object(s.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])})}switch(t.type){case a:return n(t.message);default:return e}return e}},78:function(e,t,n){"use strict";n(0),n(36),n(1)},79:function(e,t,n){e.exports={banner:"Profile_banner__2Yg2C"}}},[[227,1,2]]]);
//# sourceMappingURL=main.87063aee.chunk.js.map