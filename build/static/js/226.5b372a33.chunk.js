"use strict";(self.webpackChunkecomerce_client=self.webpackChunkecomerce_client||[]).push([[226],{6226:function(e,a,t){t.r(a),t.d(a,{default:function(){return T}});var c=t(885),r=t(2791),l=t(4942),n=t(1413),s=t(9271),i=t(1523),o=t(1845),u=t(4569),d=t.n(u),h=function(e){return d().get("".concat(o.T5,"/api/subcategory/category?category=").concat(e))},m=t(3546),g=t(184),p=[{category:"may-anh",prices:[{label:"D\u01b0\u1edbi 800.000",value:"0,800000"},{label:"T\u1eeb 800.000 - 4.000.000",value:"800000,4000000"},{label:"Tr\xean 4.000.000",value:"4000000,10000000000"}]},{category:"tivi",prices:[{label:"D\u01b0\u1edbi 10.000.000",value:"0,10000000"},{label:"T\u1eeb 10.000.000 - 15.000.000",value:"10000000,15000000"},{label:"T\u1eeb 15.000.000 - 25.000.000",value:"15000000,25000000"},{label:"Tr\xean 25.000.000",value:"25000000,10000000000"}]},{category:"may-giat",prices:[{label:"D\u01b0\u1edbi 6.000.000",value:"0,6000000"},{label:"T\u1eeb 6.000.000 - 10.000.000",value:"6000000,10000000"},{label:"T\u1eeb 10.000.000 - 16.000.000",value:"10000000,16000000"},{label:"Tr\xean 16.000.000",value:"14000000,10000000000"}]},{category:"laptop",prices:[{label:"D\u01b0\u1edbi 5.000.000",value:"0,5000000"},{label:"T\u1eeb 5.000.000 - 10.000.000",value:"5000000,10000000"},{label:"T\u1eeb 10.000.000 - 20.000.000",value:"10000000,20000000"},{label:"Tr\xean 20.000.000",value:"20000000,10000000000"}]},{category:"dien-thoai",prices:[{label:"D\u01b0\u1edbi 500.000",value:"0,500000"},{label:"T\u1eeb 500.000 - 5.000.000",value:"500000,5000000"},{label:"T\u1eeb 5.000.000 - 20.000.000",value:"5000000,20000000"},{label:"Tr\xean 20.000.000",value:"20000000,10000000000"}]},{category:"may-tinh-bang",prices:[{label:"D\u01b0\u1edbi 1.000.000",value:"0,1000000"},{label:"T\u1eeb 1.000.000 - 5.000.000",value:"1000000,5000000"},{label:"T\u1eeb 5.000.000 - 20.000.000",value:"5000000,20000000"},{label:"Tr\xean 20.000.000",value:"20000000,10000000000"}]},{category:"thiet-bi-phu-kien",prices:[{label:"D\u01b0\u1edbi 80.000",value:"0,80000"},{label:"T\u1eeb 80.000 - 200.000",value:"80000,200000"},{label:"T\u1eeb 200.000 - 320.000",value:"200000,3200000"},{label:"Tr\xean 320.000",value:"320000,10000000000"}]}],y=[{label:"Gi\xe1 th\u1ea5p \u0111\u1ebfn cao",sortBy:"price",sortValue:"asc"},{label:"Gi\xe1 cao \u0111\u1ebfn th\u1ea5p",sortBy:"price",sortValue:"desc"},{label:"T\xean A-Z",sortBy:"name",sortValue:"asc"},{label:"T\xean Z-A",sortBy:"name",sortValue:"desc"}];function v(e){var a=e.category,t=(0,s.k6)(),o=(0,r.useState)([]),u=(0,c.Z)(o,2),d=u[0],v=u[1],b=(0,r.useState)([]),_=(0,c.Z)(b,2),x=_[0],j=_[1],f=(0,r.useState)({begin_price:"",end_price:""}),N=(0,c.Z)(f,2),T=N[0],w=N[1],k=new URLSearchParams(window.location.search),Z=k.get("sort_by")?k.get("sort_by"):"",S=k.get("sort_value")?k.get("sort_value"):"",C=k.get("price")?k.get("price"):"",D=k.get("brand")?k.get("brand"):"";(0,r.useEffect)((function(){h(a).then((function(e){return v(e.data)})).catch((function(){return v({})})),(0,m.MF)(a).then((function(e){return j(e.data)})).catch((function(e){return console.log(e)}))}),[a,Z,S,C,D]);var B=function(e,a){var c=window.location.pathname,r=new URLSearchParams(window.location.search);r.set(e,a),t.push({pathname:c,search:r.toString()})},V=function(e){w((0,n.Z)((0,n.Z)({},T),{},(0,l.Z)({},e.target.name,e.target.value)))};return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"col l-2-4 m-0 c-0",style:{paddingBottom:"50px"},children:[(0,g.jsxs)("nav",{className:"filter__bar",children:[(0,g.jsx)("h3",{className:"category__heading",children:"Danh m\u1ee5c s\u1ea3n ph\u1ea9m"}),(0,g.jsx)("ul",{className:"category-list",children:null===d||void 0===d?void 0:d.map((function(e){return(0,g.jsx)("li",{className:"category-item",children:(0,g.jsx)(i.rU,{to:"/".concat(a,"/").concat(e.code),className:"category-item__link",children:e.name})},e.id)}))})]}),(0,g.jsxs)("div",{className:"filter__bar",children:[(0,g.jsx)("h3",{className:"category__heading",children:"S\u1eafp x\u1ebfp"}),(0,g.jsx)("ul",{className:"category-list",children:y.map((function(e,a){return(0,g.jsx)("li",{className:"category-item category-item__filter",children:(0,g.jsx)("div",{className:"item",onClick:function(){B("sort_by",e.sortBy),B("sort_value",e.sortValue)},children:(0,g.jsx)("span",{className:Z===e.sortBy&&S===e.sortValue?"selected":"",children:e.label})})},a)}))})]}),(0,g.jsxs)("div",{className:"filter__bar",children:[(0,g.jsx)("h3",{className:"category__heading",children:"Gi\xe1"}),(0,g.jsxs)("ul",{className:"category-list",children:[p.filter((function(e){return e.category===a}))[0].prices.map((function(e,a){return(0,g.jsx)("li",{className:"category-item category-item__filter",children:(0,g.jsx)("div",{className:"item",onClick:function(){return B("price",e.value)},children:(0,g.jsx)("span",{className:C===e.value?"selected":"",children:e.label})})},a)})),(0,g.jsxs)("li",{className:"category-item category-item__filter category-item__filter-form",children:[(0,g.jsx)("div",{className:"price-small-text",children:"Ch\u1ecdn kho\u1ea3ng gi\xe1"}),(0,g.jsxs)("div",{className:"input-group",children:[(0,g.jsx)("input",{pattern:"[0-9]*",placeholder:"Gi\xe1 t\u1eeb",value:T.begin_price,name:"begin_price",onChange:V}),(0,g.jsx)("span",{children:"-"}),(0,g.jsx)("input",{pattern:"[0-9]*",placeholder:"Gi\xe1 \u0111\u1ebfn",value:T.end_price,name:"end_price",onChange:V})]}),(0,g.jsx)("button",{onClick:function(){var e=T.begin_price,a=T.end_price;""===e?B("price","0,".concat(a)):""===a?B("price","0,".concat(e)):parseInt(e)>parseInt(a)?B("price","".concat(a,",").concat(e)):B("price","".concat(e,",").concat(a))},children:"\xc1p d\u1ee5ng"})]})]})]}),(0,g.jsxs)("div",{className:"filter__bar",children:[(0,g.jsx)("h3",{className:"category__heading",children:"Th\u01b0\u01a1ng Hi\u1ec7u"}),(0,g.jsx)("ul",{className:"category-list",children:x.map((function(e,a){return(0,g.jsx)("li",{className:"category-item category-item__filter",children:(0,g.jsx)("div",{className:"item",onClick:function(){return B("brand",e.code)},children:(0,g.jsx)("span",{className:D===e.code?"selected":"",children:e.name})})},a)}))})]})]})})}function b(e){var a=e.type,t=e.totalProducts,c="";return"sach"===a?c="S\xe1ch":"laptop"===a?c="Laptop":"dien-thoai"===a?c="\u0110i\u1ec7n tho\u1ea1i":"may-tinh-bang"===a?c="M\xe1y t\xednh b\u1ea3ng":"tivi"===a?c="Tivi":"may-anh"===a?c="M\xe1y \u1ea3nh - M\xe1y quay":"may-giat"===a?c="M\xe1y gi\u1eb7t":"thiet-bi-phu-kien"===a&&(c="Thi\u1ebft b\u1ecb - Ph\u1ee5 ki\u1ec7n"),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{className:"col l-12 m-12 c-12",children:(0,g.jsx)("div",{className:"home-product-category-item",children:(0,g.jsxs)("h3",{className:"home-product-title",children:[c,":",(0,g.jsxs)("span",{className:"home-product-subtitle",children:[t," k\u1ebft qu\u1ea3"]})]})})})})}var _=t(2746),x=t(7605),j=t(452),f=t(5504),N=t(6694);var T=function(e){var a=e.match,t=(0,r.useState)([]),l=(0,c.Z)(t,2),n=l[0],s=l[1],i=(0,r.useState)([]),o=(0,c.Z)(i,2),u=o[0],d=o[1],h=(0,r.useState)(!0),m=(0,c.Z)(h,2),p=m[0],y=m[1],T=new URLSearchParams(window.location.search),w=T.get("page"),k=T.get("sort_by")?T.get("sort_by"):"",Z=T.get("sort_value")?T.get("sort_value"):"",S=T.get("keyword")?T.get("keyword"):"",C=T.get("price")?T.get("price"):"",D=T.get("brand")?T.get("brand"):"";return(0,r.useEffect)((function(){document.title="Danh s\xe1ch s\u1ea3n ph\u1ea9m gi\xe1 c\u1ef1c t\u1ed1t";var e={};e.keyword=S||"",e.page=w?parseInt(w):1;var t=a.params.category?a.params.category:"",c=a.params.subcategory?a.params.subcategory:"";e.category=t,e.subcategory=c,e.sortBy=k||"",e.sortValue=Z||"",e.brand=D||"",e.price=C||"",""!==t&&t?(0,j.Rg)(e).then((function(e){s(e.data.content),d(e.data.totalElements)})).catch((function(e){return console.log(e)})):(0,j.jw)(e).then((function(e){s(e.data.content),d(e.data.totalElements)})).catch((function(e){return console.log(e)}))}),[w,a,D,S,k,Z,C]),(0,f.Z)((function(){return y(!1)}),p?1e3:null),(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"row sm-gutter section__content",children:[(0,g.jsx)(v,{category:a.params.category,history:e.history}),(0,g.jsxs)("div",{className:"col l-9-4 m-12 c-12",children:[(0,g.jsx)("div",{className:"home-product",children:(0,g.jsx)("div",{className:"row sm-gutter section__item",children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(b,{type:a.params.category,totalProducts:u}),p?(0,g.jsx)(N.Z,{total:u}):(0,g.jsx)(_.Z,{products:n})]})})}),(0,g.jsx)(x.Z,{totalRows:u,page:w||1,limit:20})]})]})})}}}]);
//# sourceMappingURL=226.5b372a33.chunk.js.map