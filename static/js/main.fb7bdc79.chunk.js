(this["webpackJsonptipping-app"]=this["webpackJsonptipping-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),i=n.n(s),l=(n(9),n(2)),r=(n(10),n(0)),u=function(e){var t=e.setTip;return Object(r.jsxs)("div",{className:"tip-buttons",children:[Object(r.jsx)("input",{type:"button",value:"0%",onClick:function(e){var n=e.target;t(n.value)}}),Object(r.jsx)("input",{type:"button",value:"10%",onClick:function(e){var n=e.target;t(n.value)}}),Object(r.jsx)("input",{type:"button",value:"15%",onClick:function(e){var n=e.target;t(n.value)}}),Object(r.jsx)("input",{type:"button",value:"20%",onClick:function(e){var n=e.target;t(n.value)}}),Object(r.jsx)("input",{type:"button",value:"25%",onClick:function(e){var n=e.target;t(n.value)}}),Object(r.jsx)("input",{type:"text",id:"custom",placeholder:"Custom",onChange:function(e){var n=e.target;t(n.value)}})]})},j=function(e){var t=e.bill,n=e.setBill,a=e.tip,c=e.setTip,s=e.split,i=e.setSplit,l=e.badBill,j=e.badSplit;return Object(r.jsxs)("form",{className:"calculator",children:[Object(r.jsxs)("div",{className:"input-title",children:[Object(r.jsx)("p",{children:"Bill"}),Object(r.jsx)("p",{className:"warning",hidden:!l,children:"Bill must be positive value."})]}),Object(r.jsx)("input",{className:"bill-input",type:"number",step:"0.01",value:t,onChange:function(e){var t=e.target;return n(t.value)},required:!0}),Object(r.jsx)("p",{children:"Select Tip %"}),Object(r.jsx)(u,{tip:a,setTip:c,required:!0}),Object(r.jsxs)("div",{className:"input-title",children:[Object(r.jsx)("p",{children:"Number of People"}),Object(r.jsx)("p",{className:"warning",hidden:!j,children:"Split must be whole number > 0."})]}),Object(r.jsx)("input",{className:"split-input",type:"number",value:s,onChange:function(e){var t=e.target;return i(t.value)},required:!0})]})},p=function(e){var t=e.handleReset,n=e.total,a=e.tipTotal;return Object(r.jsxs)("div",{className:"display",children:[Object(r.jsxs)("div",{className:"total",children:[Object(r.jsxs)("div",{className:"info",children:[Object(r.jsx)("p",{className:"primary",children:"Tip Amount"}),Object(r.jsx)("p",{className:"secondary",children:"/ Person"})]}),Object(r.jsx)("p",{className:"cost",children:a})]}),Object(r.jsxs)("div",{className:"total",children:[Object(r.jsxs)("div",{className:"info",children:[Object(r.jsx)("p",{className:"primary",children:"Total"}),Object(r.jsx)("p",{className:"secondary",children:"/ Person"})]}),Object(r.jsx)("p",{className:"cost",children:n})]}),Object(r.jsx)("input",{type:"button",value:"RESET",onClick:t})]})};var o=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),i=Object(l.a)(s,2),u=i[0],o=i[1],b=Object(a.useState)(1),d=Object(l.a)(b,2),O=d[0],v=d[1],x=Object(a.useState)(0),h=Object(l.a)(x,2),m=h[0],f=h[1],N=Object(a.useState)(0),g=Object(l.a)(N,2),S=g[0],y=g[1],T=Object(a.useState)(!1),C=Object(l.a)(T,2),F=C[0],k=C[1],B=Object(a.useState)(!1),E=Object(l.a)(B,2),P=E[0],w=E[1];return Object(a.useEffect)((function(){f(function(e,t,n){var a=parseFloat(e);return((a+a*(parseFloat(t)/100))/parseFloat(n)).toFixed(2)}(u,n,O)),y(function(e,t,n){return(parseFloat(e)*(parseFloat(t)/100)/parseFloat(n)).toFixed(2)}(u,n,O)),(u<0||isNaN(u))&&k(!0),u>0&&k(!1),(O<1||O%1===0)&&w(!0),O>=1&&w(!1)}),[u,n,O]),Object(a.useEffect)((function(){(m<0||isNaN(m)||!isFinite(m))&&(f(0),y(0))}),[m,S]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"S P L I T T E R"}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(j,{tip:n,bill:u,split:O,setTip:c,setBill:o,setSplit:v,badBill:F,badSplit:P}),Object(r.jsx)(p,{handleReset:function(e){e.preventDefault(),c(0),o(0),v(1)},total:m,tipTotal:S})]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(o,{})}),document.getElementById("root")),b()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.fb7bdc79.chunk.js.map