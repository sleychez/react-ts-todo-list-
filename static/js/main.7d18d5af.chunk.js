(this["webpackJsonpreact-ts-todo"]=this["webpackJsonpreact-ts-todo"]||[]).push([[0],{26:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),i=c(19),l=c.n(i),a=(c(26),c(9)),r=c(1),s=function(){return Object(r.jsx)("nav",{className:"header purple darken-1",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)(a.b,{to:"/",className:"brand-logo",children:"React + Typescript Todo"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{to:"/",children:"Todos"})})})]})})},d=c(2),j=c(17),u=c(21),b=c(11),p=function(e){var t=e.placeholder,c=e.iconName,o=e.onKeyPress,i=Object(n.useState)(""),l=Object(b.a)(i,2),a=l[0],s=l[1],d="input-".concat(t.split(" ").join("-"),"-").concat(Date.now());return Object(r.jsxs)("div",{className:"input-field addInput",children:[Object(r.jsx)("i",{className:"material-icons prefix",children:c}),Object(r.jsx)("input",{onKeyPress:function(e){"Enter"===e.key&&(o(a),s(""))},value:a,onChange:function(e){return s(e.target.value)},id:d,type:"text",className:"validate",placeholder:t}),Object(r.jsx)("label",{htmlFor:d})]})},m=function(e){var t=e.todo,c=e.deleteHandler,n=e.completeHandler;return Object(r.jsxs)("li",{className:"todo",onClick:n.bind(null,t.id),children:[Object(r.jsx)("input",{type:"checkbox",checked:t.completed}),Object(r.jsx)("span",{className:t.completed?"completed":void 0,children:t.text}),Object(r.jsx)("i",{onClick:c.bind(null,t.id),className:"material-icons prefix delete",children:"delete"})]})},O=function(e){var t=e.todos,c=e.deleteHandler,n=e.completeHandler,o=t.map((function(e){return Object(r.jsx)(m,{todo:e,deleteHandler:c,completeHandler:n},e.id)}));return Object(r.jsx)("ul",{children:o})},f=function(e){var t=e.onClick,c=e.text,n=e.isActive;return Object(r.jsx)("button",{className:"button ".concat(n?"active":""," "),onClick:t,children:c})},x=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],o=t[1],i=Object(n.useState)("all"),l=Object(b.a)(i,2),a=l[0],s=l[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");o(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]);var d=function(e){s(e)},m=c;return"completed"===a&&(m=c.filter((function(e){return!0===e.completed}))),"active"===a&&(m=c.filter((function(e){return!1===e.completed}))),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p,{placeholder:"Add todo",iconName:"create",onKeyPress:function(e){var t={id:Date.now(),text:e,completed:!1};o((function(e){return[t].concat(Object(u.a)(e))}))}}),c.length?Object(r.jsxs)("div",{className:"filters",children:[Object(r.jsx)(f,{onClick:function(){d("all")},text:"All",isActive:"all"===a}),Object(r.jsx)(f,{onClick:function(){d("active")},text:"Active",isActive:"active"===a}),Object(r.jsx)(f,{onClick:function(){d("completed")},text:"Completed",isActive:"completed"===a})]}):"",Object(r.jsx)(O,{todos:m,deleteHandler:function(e){o((function(t){return t.filter((function(t){return t.id!==e}))}))},completeHandler:function(e){o((function(t){return t.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{completed:!t.completed}):t}))}))}})]})},h=function(){return Object(r.jsxs)(a.a,{children:[Object(r.jsx)(s,{}),Object(r.jsx)(d.a,{exact:!0,path:"/",component:x})]})};l.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7d18d5af.chunk.js.map