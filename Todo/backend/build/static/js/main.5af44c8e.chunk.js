(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{41:function(e,t,a){},43:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),s=a.n(c),o=(a(41),a(10)),i=a.n(o),l=a(15),u=a(6),d=(a(43),a(70),a(71)),p=a(72),j=a(14),b=(a(44),a(13)),h=a.n(b),m=a(1);var O=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),o=s[0],b=s[1],O=Object(n.useState)(""),f=Object(u.a)(O,2),x=f[0],v=f[1],g=Object(n.useState)(""),w=Object(u.a)(g,2),y=w[0],k=w[1],N=Object(n.useState)(null),S=Object(u.a)(N,2),C=S[0],L=S[1],B=Object(n.useState)(""),D=Object(u.a)(B,2),I=D[0],P=D[1],E=Object(n.useState)(""),A=Object(u.a)(E,2),G=A[0],J=A[1],T=Object(n.useState)(null),U=Object(u.a)(T,2),z=U[0],M=U[1],R="https://todo-app-0212.herokuapp.com/todos";Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);L(t),q(t.token),t||window.location.reload(!1),t&&F(t)}}),[]);var q=function(e){M("bearer ".concat(e))};function F(e){return H.apply(this,arguments)}function H(){return(H=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("===================================="),console.log(t.id),console.log("===================================="),t||window.location.reload(!1),e.next=7,h.a.get("".concat(R,"/").concat(t.id));case 7:a=e.sent,console.log(a.data),r(a.data),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),window.location.reload(!0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}var K=function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!G||!I){e.next=9;break}return e.next=5,h.a.post("https://todo-app-0212.herokuapp.com/user",{username:G,password:I});case 5:a=e.sent,console.log(a),J(""),P("");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(l.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,h.a.delete("".concat(R,"/").concat(t));case 3:F(C);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),V=function(){var e=Object(l.a)(i.a.mark((function e(t,a,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=prompt("Type the corrected form "),e.next=4,h.a.put("".concat(R,"/").concat(a),{text:r});case 4:F(C);case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),W=function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,console.log("logging in with",x,y),e.next=5,h.a.post("https://todo-app-0212.herokuapp.com/login",{username:x,password:y});case 5:a=e.sent,window.localStorage.setItem("loggedUser",JSON.stringify(a.data)),q(a.data.token),L(a.data),v(""),k(""),F(),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(1);case 16:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"App",children:[null===C?Object(m.jsxs)("div",{className:"auth",children:[Object(m.jsxs)("div",{className:"register",children:[Object(m.jsx)("h3",{children:"Register"})," ",Object(m.jsxs)(d.a,{onSubmit:K,children:[Object(m.jsxs)(d.a.Group,{className:"mb-3",children:[Object(m.jsx)(d.a.Label,{children:"Email Address"}),Object(m.jsx)(d.a.Control,{class:"padding",type:"name",placeholder:"enter your username",onChange:function(e){return J(e.target.value)}})]}),Object(m.jsxs)(d.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(m.jsx)(d.a.Label,{children:"Password"}),Object(m.jsx)(d.a.Control,{class:"padding",onChange:function(e){return P(e.target.value)},type:"password",placeholder:"Password"})]}),Object(m.jsx)(j.a,{variant:"primary",type:"submit",children:"Submit"})]})]}),Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)("h3",{children:"Login"}),Object(m.jsxs)(d.a,{onSubmit:W,children:[Object(m.jsxs)(d.a.Group,{className:"mb-3",children:[Object(m.jsx)(d.a.Label,{children:"Email Address"}),Object(m.jsx)(d.a.Control,{type:"name",placeholder:"enter your username",onChange:function(e){return v(e.target.value)}})]}),Object(m.jsxs)(d.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(m.jsx)(d.a.Label,{children:"Password"}),Object(m.jsx)(d.a.Control,{onChange:function(e){return k(e.target.value)},type:"password",placeholder:"Password"})]}),Object(m.jsx)(j.a,{variant:"primary",type:"submit",children:"Submit"})]})]})]}):Object(m.jsx)(p.a,{children:Object(m.jsxs)(p.a.Body,{className:"d-flex justify-content-between",children:["Logged in as ",C.username,Object(m.jsx)(j.a,{variant:"danger",onClick:function(e){e.preventDefault(),window.localStorage.removeItem("loggedUser"),window.location.reload(!1)},children:"Logout"})]})}),Object(m.jsxs)("div",{className:"top",children:[Object(m.jsx)("h2",{className:"top-header",children:"Todo list"}),Object(m.jsxs)("form",{className:"top-form",onSubmit:function(e){!function(e){e.preventDefault();var t=o,a={headers:{Authorization:z}};h.a.post(R,{text:t},a).then((function(e){window.location.reload(!0),F(C),b(""),console.log(e)}))}(e)},children:[Object(m.jsx)("input",{className:"top-input",type:"text",value:o,onChange:function(e){return b(e.target.value)},placeholder:"Enter a task..."}),Object(m.jsx)(j.a,{type:"submit",variant:"outline-success",children:"\u2713"})," "]})]}),a.length>0&&a.map((function(e){return Object(m.jsx)(p.a,{style:{width:"100%"},children:Object(m.jsxs)(p.a.Body,{className:"task",children:[Object(m.jsx)(p.a.Title,{className:"textTitle",children:e.text}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)(j.a,{variant:"outline-primary",onClick:function(t){return V(t,e.id,e.text)},children:"\u270e"}),Object(m.jsx)(j.a,{className:"removeButton",variant:"outline-danger",onClick:function(t){return Q(e.id,t)},children:"\u2715"})]})]})},e.id)}))]})};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.5af44c8e.chunk.js.map