import{d as i,J as c,I as p,C as d,c as t,t as l,i as g,o as n}from"./B_MjbVB3.js";const u=i({setup(){const e=c(""),o=c(""),a=c(!0);return p(async()=>{try{const r=await(await fetch("https://next-wp-store.x10.mx/wp/graphql/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
              query {
                page(id: "contact", idType: URI) {
                  title
                  content
                }
              }
            `})})).json();e.value=r.data.page.title,o.value=r.data.page.content}catch(s){console.error("Error fetching page content:",s)}finally{a.value=!1}}),{pageTitle:e,pageContent:o,loading:a}}}),y={class:"container my-8"},f={key:0,class:"mb-8 text-3xl font-semibold text-primary"},m=["innerHTML"],_={key:2};function h(e,o,a,s,r,v){return n(),t("div",y,[e.loading?g("",!0):(n(),t("h1",f,l(e.pageTitle),1)),e.loading?(n(),t("div",_,"Loading...")):(n(),t("div",{key:1,class:"my-8 prose",innerHTML:e.pageContent},null,8,m))])}const C=d(u,[["render",h],["__scopeId","data-v-3a2d08f4"]]);export{C as default};
