(this.webpackJsonphexiguessimal=this.webpackJsonphexiguessimal||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(3),s=n.n(o),a=(n(14),n(15),n(4)),i=n(2),u="UPDATE_GUESS",l=n(1);var j=function(e){var t=e.mappedColor,n=e.correctColor,r=Object(c.useState)(!1),o=Object(a.a)(r,2),s=o[0],j=o[1],d=Object(i.b)();return Object(l.jsx)("li",{className:s?"hidden colorDiv":"colorDiv",onClick:function(){var e;(e=t)===n?d({type:u,guessValue:"correct"}):e!==n&&j(!0)},style:{backgroundColor:t}})};var d=function(){var e=Object(i.c)((function(e){return e.guessValue})),t=Object(c.useState)(2),n=Object(a.a)(t,2),r=n[0],o=n[1],s=Object(i.b)();"correct"===e&&s({type:u,guessValue:"none"});var d=function(){for(var e="#";e.length<7;)e+=Math.round(15*Math.random()).toString(16);return e},b=d(),O=[];!function(){for(var e=0;e<r;e++){var t=d();O.push(t)}}(),O.push(b);var h=O.sort((function(){return Math.random()-.5})),m=function(e){o(e)};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"header",children:"HEXIGUESSIMAL"}),Object(l.jsxs)("ul",{className:"modeList",children:[Object(l.jsx)("li",{className:"mode",onClick:function(){return m(2)},children:"easy"}),Object(l.jsx)("li",{className:"mode",onClick:function(){return m(5)},children:"medium"}),Object(l.jsx)("li",{className:"mode",onClick:function(){return m(8)},children:"hard"})]}),Object(l.jsx)("h1",{className:"hexcode",children:b}),Object(l.jsx)("div",{children:Object(l.jsx)("ul",{className:"colorList",children:h.map((function(e){return Object(l.jsx)(j,{mappedColor:e,correctColor:b},e)}))})})]})},b=n(9),O=n(8),h=function(e,t){return t.type===u?Object(O.a)(Object(O.a)({},e),{},{guessValue:t.guessValue}):e};var m=Object(b.a)(h,{guessValue:"none"},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var f=function(){return Object(l.jsx)(i.a,{store:m,children:Object(l.jsx)(d,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),o(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),v()}},[[21,1,2]]]);
//# sourceMappingURL=main.d1fb4af6.chunk.js.map