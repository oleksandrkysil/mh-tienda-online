import{_ as B,a as N,e as v,b as F,c as $,d as V}from"./BMzbiAmO.js";import{d as b,a7 as A,N as q,Z as D,x as E,m as G,I as H,U as O,n as R,b as s,o as t,c as S,h as o,i as c,e as p,a as l,w as T,p as j,f as I}from"./B_MjbVB3.js";import"./DHcnfZOe.js";import"./DuxbHLs9.js";import"./lLhPAuQ-.js";import"./CCcEhoxN.js";const L={key:0,class:"container flex items-start gap-16"},M={class:"w-full"},Q={class:"flex items-center justify-between w-full gap-4 mt-8 md:gap-8"},tt=b({__name:"products",async setup(U){var u,_;let e,a;const{setProducts:f,updateProductList:r}=A(),d=q(),{storeSettings:n}=D(),{isQueryEmpty:h}=E(),{data:y}=([e,a]=G(()=>j("getProducts")),e=await e,a(),e),i=((_=(u=y.value)==null?void 0:u.products)==null?void 0:_.nodes)||[];return f(i),H(()=>{h.value||r()}),O(()=>d.query,()=>{d.name==="products"&&r()}),R({title:"Products",meta:[{hid:"description",name:"description",content:"Products"}]}),(Z,m)=>{const w=F,P=B,g=$,x=V,k=N,C=v;return s(i).length?(t(),S("div",L,[s(n).showFilters?(t(),o(w,{key:0})):c("",!0),p("div",M,[p("div",Q,[l(P),s(n).showOrderByDropdown?(t(),o(g,{key:0,class:"hidden md:inline-flex"})):c("",!0),s(n).showFilters?(t(),o(x,{key:1,class:"md:hidden"})):c("",!0)]),l(k)])])):(t(),o(C,{key:1},{default:T(()=>m[0]||(m[0]=[I("Could not fetch products from your store. Please check your configuration.")])),_:1}))}}});export{tt as default};