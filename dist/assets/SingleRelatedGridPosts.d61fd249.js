import{_ as e,$ as r,R as a}from"./vendor.cb5650ef.js";import{D as t}from"./DataStatementBlock.8fb47db4.js";import{g as s,t as o,h as d,k as l,G as n}from"./main.bd90d0eb.js";const m=({numberOfPosts:m,order:i,orderBy:c,categoriesId:g})=>{var f;let b="",p={};b=n,p={order:i,orderBy:c,first:Number(m),categoryIn:g};const u=e`
    ${b}
  `,[v,{loading:x,error:E,data:k}]=r(u,{variables:p}),{ref:y}=s(v,99,{freezeOnceVisible:!0,rootMargin:"1000px"}),j=(null==(f=null==k?void 0:k.posts)?void 0:f.edges)||[];return a.createElement("div",{ref:y},a.createElement(o,{className:"mb-10 text-neutral-900 dark:text-neutral-50",desc:""},d.relatedPosts),a.createElement(t,{loading:x,error:E,data:j}),a.createElement("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"},j.map(((e,r)=>a.createElement(l,{key:r,post:e.node})))))};export{m as default};
