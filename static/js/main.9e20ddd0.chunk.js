(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var r=e(5),o=e.n(r),a=e(3),c=e(6),s=e(1),u=e.n(s),i=e(2),d=e.n(i),f=(e(12),e(0)),p=d.a.memo((function(t){var n=t.goods;return Object(f.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.name,r=t.color;return Object(f.jsx)("li",{"data-cy":"good",style:{color:r},children:e},n)}))})})),l="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json";function b(){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(l);case 2:return n=t.sent,t.abrupt("return",n.ok?n.json():Promise.reject(new Error("Server is not answering, Please try later")));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var h=function(){var t=Object(a.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:return n=t.sent,t.abrupt("return",n.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:return n=t.sent,t.abrupt("return",n.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(i.useState)([]),n=Object(c.a)(t,2),e=n[0],r=n[1],o=function(){var t=Object(a.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,n;case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Dynamic list of Goods"}),Object(f.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){o(b())},children:"Load all goods"}),Object(f.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){o(h())},children:"Load 5 first goods"}),Object(f.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){o(m())},children:"Load red goods"}),Object(f.jsx)(p,{goods:e})]})};o.a.render(Object(f.jsx)(y,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9e20ddd0.chunk.js.map