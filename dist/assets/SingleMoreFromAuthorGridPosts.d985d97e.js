import{ap as e,$ as r,R as a}from"./vendor.0f8da6c9.js";import{D as t}from"./DataStatementBlock.d0266c73.js";import{i as o,t as s,d,m as l,_ as m}from"./main.244ac4e8.js";const n=({numberOfPosts:n,order:c,orderBy:i,authorId:u})=>{var g;let p="",f={};p=m,f={order:c,orderBy:i,first:Number(n),author:Number(u)};const v=e`
    ${p}
  `,[b,{loading:x,error:E,data:N}]=r(v,{variables:f}),{ref:h}=o(b,99),j=(null==(g=null==N?void 0:N.posts)?void 0:g.edges)||[];return a.createElement("div",{ref:h},a.createElement(s,{className:"mb-10 text-neutral-900 dark:text-neutral-50",desc:""},d.moreFromAuthor),a.createElement(t,{loading:x,error:E,data:j}),a.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8"},j.map(((e,r)=>a.createElement(l,{key:r,post:e.node})))))};export{n as default};
