import{N as i}from"./NcImage.bbb57ae5.js";import{P as o}from"./PostCardMeta.0eb2d614.js";import{a as l,j as e}from"./main.2b5abd22.js";import{S as c}from"./index.2d0f1964.js";const u=({className:t="h-full",post:n})=>{const{title:a,link:r,featuredImage:s}=n;return l("div",{className:`nc-Card3Small relative flex justify-between sm:items-center ${t}`,"data-nc-id":"Card3Small",children:[e("a",{href:r,className:" absolute inset-0",title:a}),l("div",{className:"grid grid-cols-1 relative space-y-2 overflow-hidden flex-grow",children:[e(o,{meta:{...n}}),e("h3",{className:"nc-card-title block text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100",children:e("a",{href:r,className:"line-clamp-2",title:a,dangerouslySetInnerHTML:{__html:a||""}})})]}),e("a",{href:r,title:a,className:"block w-16 sm:w-20 flex-shrink-0 relative ml-4 ",children:e(i,{containerClassName:"",className:"object-cover aspect-1 rounded-lg hover:opacity-90 transition-opacity",src:(s==null?void 0:s.node.sourceUrl)||".",title:a})})]})},v=({className:t="h-full"})=>l("div",{className:`nc-Card3SmallSkeleton relative flex justify-between sm:items-center ${t}`,"data-nc-id":"Card3SmallSkeleton",children:[l("div",{className:"relative  space-y-2 flex-grow overflow-hidden",children:[e(c,{width:"50%"}),e("h3",{className:"nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100",children:e(c,{width:"80%"})})]}),e("div",{className:"block w-16 sm:w-20 flex-shrink-0 relative ml-4 group",children:e(i,{containerClassName:"",className:"object-cover aspect-1 group-hover:scale-110 transform transition-transform duration-300 rounded-lg",src:"."})})]});export{v as C,u as a};
