import{_ as B,a as C,b as v,c as F,d as N}from"./ItiJchr4.js";import{d as $,a7 as b,x as A,Z as V,N as q,m as D,I as E,U as G,n as H,b as t,o as s,c as I,h as c,i as o,e as m,a as p,p as O}from"./BQsMxEgi.js";import"./CMSwMSeU.js";import"./B2EML-2N.js";import"./CDBd4BCr.js";import"./CJhYWWQG.js";const R={key:0,class:"container flex items-start gap-16"},S={class:"w-full"},j={class:"flex items-center justify-between w-full gap-4 mt-8 md:gap-8"},W=$({__name:"[slug]",async setup(L){var d,_;let e,r;const{setProducts:l,updateProductList:i}=b(),{isQueryEmpty:f}=A(),{storeSettings:n}=V(),a=q(),g=a.params.slug,{data:h}=([e,r]=D(()=>O("getProducts",{slug:g})),e=await e,r(),e),u=((_=(d=h.value)==null?void 0:d.products)==null?void 0:_.nodes)||[];return l(u),E(()=>{f.value||i()}),G(()=>a.query,()=>{a.name==="product-category-slug"&&i()}),H({title:"Products",meta:[{hid:"description",name:"description",content:"Products"}]}),(M,Q)=>{const y=v,w=B,x=F,P=N,k=C;return t(u).length?(s(),I("div",R,[t(n).showFilters?(s(),c(y,{key:0,"hide-categories":!0})):o("",!0),m("div",S,[m("div",j,[p(w),t(n).showOrderByDropdown?(s(),c(x,{key:0,class:"hidden md:inline-flex"})):o("",!0),t(n).showFilters?(s(),c(P,{key:1,class:"md:hidden"})):o("",!0)]),p(k)])])):o("",!0)}}});export{W as default};
