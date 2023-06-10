(this["webpackJsonpreact-ts-todo"]=this["webpackJsonpreact-ts-todo"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),i=c(7),l=c.n(i),a=(c(13),c(0)),r=function(){return Object(a.jsx)("nav",{className:"header purple darken-1",children:Object(a.jsx)("div",{className:"nav-wrapper",children:Object(a.jsx)("span",{className:"brand-logo",children:"React + Typescript Todo"})})})},s=c(6),d=c(8),u=c(3),j=function(e){var t=e.placeholder,c=e.iconName,o=e.onKeyPress,i=Object(n.useState)(""),l=Object(u.a)(i,2),r=l[0],s=l[1],d="input-".concat(t.split(" ").join("-"),"-").concat(Date.now());return Object(a.jsxs)("div",{className:"input-field addInput",children:[Object(a.jsx)("i",{className:"material-icons prefix",children:c}),Object(a.jsx)("input",{onKeyPress:function(e){"Enter"===e.key&&(o(r),s(""))},value:r,onChange:function(e){return s(e.target.value)},id:d,type:"text",className:"validate",placeholder:t}),Object(a.jsx)("label",{htmlFor:d})]})},b=function(e){var t=e.todo,c=e.deleteHandler,n=e.completeHandler;return Object(a.jsxs)("li",{className:"todo",onClick:n.bind(null,t.id),children:[Object(a.jsx)("input",{type:"checkbox",checked:t.completed}),Object(a.jsx)("span",{className:t.completed?"completed":void 0,children:t.text}),Object(a.jsx)("i",{onClick:c.bind(null,t.id),className:"material-icons prefix delete",children:"delete"})]})},p=function(e){var t=e.todos,c=e.deleteHandler,n=e.completeHandler,o=t.map((function(e){return Object(a.jsx)(b,{todo:e,deleteHandler:c,completeHandler:n},e.id)}));return Object(a.jsx)("ul",{children:o})},f=function(e){var t=e.onClick,c=e.text,n=e.isActive;return Object(a.jsx)("button",{className:"button ".concat(n?"active":""," "),onClick:t,children:c})},m=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],o=t[1],i=Object(n.useState)("all"),l=Object(u.a)(i,2),r=l[0],b=l[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");o(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]);var m=function(e){b(e)},O=c;return"completed"===r&&(O=c.filter((function(e){return!0===e.completed}))),"active"===r&&(O=c.filter((function(e){return!1===e.completed}))),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{placeholder:"Add todo",iconName:"create",onKeyPress:function(e){var t={id:Date.now(),text:e,completed:!1};o((function(e){return[t].concat(Object(d.a)(e))}))}}),c.length?Object(a.jsxs)("div",{className:"filters",children:[Object(a.jsx)(f,{onClick:function(){m("all")},text:"All",isActive:"all"===r}),Object(a.jsx)(f,{onClick:function(){m("active")},text:"Active",isActive:"active"===r}),Object(a.jsx)(f,{onClick:function(){m("completed")},text:"Completed",isActive:"completed"===r})]}):"",Object(a.jsx)(p,{todos:O,deleteHandler:function(e){o((function(t){return t.filter((function(t){return t.id!==e}))}))},completeHandler:function(e){o((function(t){return t.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{completed:!t.completed}):t}))}))}})]})},O=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r,{}),Object(a.jsx)(m,{})]})};l.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c84e046d.chunk.js.map