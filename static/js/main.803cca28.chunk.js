(this.webpackJsonpvalidation=this.webpackJsonpvalidation||[]).push([[0],{240:function(e,t,n){},241:function(e,t,n){},242:function(e,t,n){},341:function(e,t){},343:function(e,t){},352:function(e,t){},354:function(e,t){},379:function(e,t){},381:function(e,t){},382:function(e,t){},387:function(e,t){},389:function(e,t){},395:function(e,t){},397:function(e,t){},416:function(e,t){},428:function(e,t){},431:function(e,t){},457:function(e,t){},563:function(e,t){},594:function(e,t,n){"use strict";n.r(t);var c=n(15),i=n.n(c),s=n(233),o=n.n(s),a=(n(240),n(241),n(235)),r=n(32),l=(n(242),n(234)),d=n.n(l),u=n(3);var h=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),i=t[0],s=t[1],o=Object(c.useState)(""),l=Object(r.a)(o,2),h=l[0],b=l[1],j=Object(c.useState)(function(){var e=localStorage.getItem("lists");return console.log(e),e?JSON.parse(localStorage.getItem("lists")):[]}()),f=Object(r.a)(j,2),O=f[0],g=f[1],p=Object(c.useState)(),x=Object(r.a)(p,2),m=x[0],v=x[1],R=Object(c.useState)(),S=Object(r.a)(R,2),I=S[0],N=S[1];n(322)(h).then((function(e){v(e.title),N(e.source)}),(function(e){console.warn(e)}));var w=Object(c.useState)(),E=Object(r.a)(w,2),y=E[0],L=E[1],k=Object(c.useState)(),C=Object(r.a)(k,2),T=C[0],F=C[1],B={backgroundColor:"#058423",padding:"5px 25px",marginRight:"10px",color:"aliceblue",borderRadius:"5px"},U={backgroundColor:"#FC5200",padding:"5px 25px",color:"aliceblue",borderRadius:"5px"};Object(c.useEffect)((function(){localStorage.setItem("lists",JSON.stringify(O))}),[O]);var A=O.length;return Object(c.useEffect)((function(){fetch(h).then((function(e){console.log(e),200===e.status&&!0===e.ok?(L("LIVE"),F(B)):(L("ERROR"),F(U))}))}),[]),Object(u.jsxs)("div",{className:"main-div",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("a",{href:"#default",className:"logo",children:" LIVE WEBSITE TRACKING "}),Object(u.jsxs)("div",{className:"header-right",children:["  Currently tracking ",A," websites"]})]}),Object(u.jsxs)("div",{className:"body-container",children:[Object(u.jsxs)("div",{className:"input-container",children:[Object(u.jsx)("input",{type:"text",placeholder:"    Input with URL Validation",value:h,onChange:function(e){return function(e){d.a.isURL(e)?(s(""),b(e)):s("Error Not Valid URL")}(e.target.value)}}),Object(u.jsx)("button",{title:"Add Item",onClick:function(){h?(g([{title:m,source:I}].concat(Object(a.a)(O))),b("")):alert("Please Input a Valid ")},children:"ADD WEBSITE"}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{style:{fontWeight:"bold",color:"red"},children:i})]}),Object(u.jsx)("div",{className:"body-title",children:"WEBSITES"}),Object(u.jsx)("div",{className:"itemlist",children:O.map((function(e,t){return Object(u.jsx)("div",{className:"itemlist_",children:Object(u.jsxs)("div",{id:"itemlist_inner",children:[Object(u.jsx)("button",{style:{backgroundColor:"#FF2F2F",border:" none",float:"right",padding:"5px 12px",color:"aliceblue",borderRadius:"50%"},onClick:function(){return function(e){console.log(e);var t=O.filter((function(t,n){return n!==e}));g(t)}(t)},children:" X "}),Object(u.jsxs)("p",{style:{color:"#B4B4B4",padding:"5px",marginRight:"10px",borderRadius:"5px",float:"right"},children:[" Status ",Object(u.jsx)("span",{style:T,children:y})," "]}),Object(u.jsxs)("span",{id:"title",children:[" ",e.title]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{id:"source",children:Object(u.jsxs)("a",{href:"#",children:[e.source," "]})}),Object(u.jsx)("br",{})]})},t)}))}),Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)("p",{children:"This application is a test. It lets users add a list of URLs in local storage. Along with the URL it stores the Title of the page returned when fetching the contents of the URL. The Application then fetches the contents of each URL and checks the response type. If the response is 200 OK, it marks the URL as LIVE. If the response when getting the contents of the website throws an error, the application highlights the errored website in the list. The application does this every 5 minutes or ON DEMAND when the URL is clicked by the user. On reload, the website checks the local storage for the list of websites added and loads all of them again"}),Object(u.jsx)("div",{className:"footerTag",children:" Built for Cobold Digital by Adil Anwar "}),Object(u.jsx)("br",{})]})]})]})};var b=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(h,{})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,595)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),s(e),o(e)}))};n(593);o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),j()}},[[594,1,2]]]);
//# sourceMappingURL=main.803cca28.chunk.js.map