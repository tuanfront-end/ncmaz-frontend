import{i as e,j as r,R as a}from"./vendor.3078d0a1.js";import{D as t}from"./DataStatementBlock.4a570f14.js";import{g as o,t as s,h as d,m,G as l}from"./main.861acd19.js";const n=({numberOfPosts:n,order:i,orderBy:c,authorId:u})=>{var g;let f="",p={};f=l,p={order:i,orderBy:c,first:Number(n),author:Number(u)};const v=e`
    ${f}
  `,[b,{loading:E,error:h,data:j}]=r(v,{variables:p}),{ref:x}=o(b,99),N=(null==(g=null==j?void 0:j.posts)?void 0:g.edges)||[];return a.createElement("div",{ref:x},a.createElement(s,{className:"mb-10 text-neutral-900 dark:text-neutral-50",desc:""},d.moreFromAuthor),a.createElement(t,{loading:E,error:h,data:N}),a.createElement("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"},N.map(((e,r)=>a.createElement(m,{key:r,post:e.node})))))};export{n as default};