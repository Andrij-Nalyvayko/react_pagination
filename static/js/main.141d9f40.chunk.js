(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{16:function(e,c,t){},19:function(e,c,t){"use strict";t.r(c);var a=t(11),n=t.n(a),r=t(8),i=t(3),o=t(0),s=t.n(o);t(16);var l=t(9),j=t.n(l);function u(e,c,t){return[(e-1)*c+1,e*c>t?t:e*c]}var d=t(2),b=s.a.memo((function(e){var c=e.total,t=e.perPage,a=e.currentPage,n=e.onPageChange,r=Math.ceil(c/t),o=1===a,s=a===r,l=function(){for(var e=[],c=function(c){e.push(Object(d.jsx)("li",{className:j()("page-item",{active:c===a}),children:Object(d.jsx)("button",{type:"button","data-cy":"pageLink",onClick:function(){return n(c)},className:"page-link",children:c})},"Switcher key: ".concat(c)))},t=1;t<=r;t+=1)c(t);return Object(d.jsx)(d.Fragment,{children:e})},b=function(){for(var e=[],n=u(a,t,c),r=Object(i.a)(n,2),o=r[0],s=r[1],l=o;l<=s;l+=1)e.push(Object(d.jsx)("li",{"data-cy":"item",children:"Item ".concat(l)},"Item key: ".concat(l)));return Object(d.jsx)("ul",{children:e})};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("ul",{className:"pagination",children:[Object(d.jsx)("li",{className:j()("page-item",{disabled:o}),children:Object(d.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":o,onClick:function(){o||n(a-1)},children:"\xab"})}),Object(d.jsx)(l,{}),Object(d.jsx)("li",{className:j()("page-item",{disabled:s}),children:Object(d.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":s,onClick:function(){s||n(a+1)},children:"\xbb"})})]}),Object(d.jsx)(b,{})]})})),g=function(e,c){for(var t=[],a=e;a<=c;a+=1)t.push(a);return t}(1,42).map((function(e){return"Item ".concat(e)})),p=function(){var e=Object(r.b)(),c=Object(i.a)(e,2),t=c[0],a=c[1],n=t.get("cursor")||1,s=t.get("periodOfPage")||5,l=Object(o.useState)({cursor:+n,periodOfPage:+s}),j=Object(i.a)(l,2),p=j[0],O=p.cursor,h=p.periodOfPage,m=j[1],f=Object(o.useMemo)((function(){return g.length}),[]),x=u(O,h,f),v=Object(i.a)(x,2),P=v[0],k=v[1],N="Page ".concat(O," (items ").concat(P," - ").concat(k," of ").concat(f,")");return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Items with Pagination"}),Object(d.jsx)("p",{className:"lead","data-cy":"info",children:N}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(d.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:h,onChange:function(e){m({cursor:1,periodOfPage:+e.currentTarget.value}),a({cursor:"1",periodOfPage:e.currentTarget.value})},children:[Object(d.jsx)("option",{value:"3",children:"3"}),Object(d.jsx)("option",{value:"5",children:"5"}),Object(d.jsx)("option",{value:"10",children:"10"}),Object(d.jsx)("option",{value:"20",children:"20"})]})}),Object(d.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(d.jsx)(b,{total:f,perPage:h,currentPage:O,onPageChange:function(e){m({periodOfPage:h,cursor:e}),a({periodOfPage:String(h),cursor:String(e)})}})]})};n.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.141d9f40.chunk.js.map