import{a as u,j as e,u as S,r as f,b as v,R as x,D as b}from"./main.242e7493.js";import{C as h,a as y}from"./Card3SmallSkeleton.f11003f3.js";import{W as k}from"./WidgetHeading1.1d6a8367.js";import"./NcImage.61d0e16f.js";import"./PostCardMeta.c76a1d0c.js";import"./formatDate.81b7fc4e.js";import"./index.58d655af.js";const P=({className:l="bg-neutral-100 dark:bg-neutral-800",heading:r="",posts:n,isLoading:s,postLoading:o=[1,1,1,1]})=>u("div",{className:`nc-WidgetPosts rounded-3xl overflow-hidden ${l}`,"data-nc-id":"WidgetPosts",children:[r&&e(k,{title:r}),e("div",{className:"flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700",children:s?o.map((t,a)=>e(h,{className:"p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"},a)):n.map((t,a)=>e(y,{className:"p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700",post:t.node},a))})]}),j=({domNode:l,apiSettings:r,sectionIndex:n})=>{const{graphQLvariables:s,settings:o,graphQLData:t}=r,a=!s&&!!t,{funcGqlQueryGetPosts:m,loading:N,IS_SKELETON:i,LISTS_POSTS:c,data:I,error:p,fetchMore:L,setTabActiveId:W,tabActiveId:A}=S({graphQLData:t,graphQLvariables:s});let d=null;a?d=f.exports.useRef(null):d=v(m,n).ref;const g=()=>u("div",{ref:d,children:[e(P,{posts:c,isLoading:i,heading:o.heading,postLoading:Array.from(Array(Number(o.expectedNumberResults||8)||8).keys())}),e(b,{className:"my-5",data:c,error:p,isSkeleton:i})]});return x.createPortal(g(),l)};export{j as default};