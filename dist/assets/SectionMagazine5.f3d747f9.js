var b=Object.defineProperty;var u=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var x=(a,t,l)=>t in a?b(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,f=(a,t)=>{for(var l in t||(t={}))k.call(t,l)&&x(a,l,t[l]);if(u)for(var l of u(t))w.call(t,l)&&x(a,l,t[l]);return a};import{N as m}from"./NcImage.3590ec63.js";import{a as r,j as e,aT as v}from"./main.69fc0c0d.js";import{P as p}from"./PostCardMeta.89bbec1e.js";import{P as N}from"./PostTypeFeaturedIcon.66b10922.js";import{S as i}from"./index.bfc87e83.js";import"./formatDate.5c5d9c4d.js";const g=({className:a="h-full",post:t})=>{var d;const{title:l,link:s,featuredImage:n,excerpt:c,postFormats:o}=t;return r("div",{className:`nc-Card12 group relative flex flex-col ${a}`,"data-nc-id":"Card12",children:[r("a",{href:s,className:"block flex-shrink-0 flex-grow relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden z-0",children:[e(m,{containerClassName:"absolute inset-0",src:(n==null?void 0:n.node.sourceUrl)||".",alt:l}),e("span",{children:e(N,{className:"absolute bottom-2 left-2",postType:(d=o==null?void 0:o.edges[0])==null?void 0:d.node.slug,wrapSize:"w-8 h-8",iconSize:"w-4 h-4"})})]}),e(v,{href:s,className:"absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300"}),r("div",{className:" mt-8 pr-10 flex flex-col",children:[e("h3",{className:"nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl",children:e("a",{href:s,className:"line-clamp-2",title:l,children:l})}),c&&e("span",{className:"hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400",children:e("span",{className:"line-clamp-2",dangerouslySetInnerHTML:{__html:c}})}),e(p,{className:"mt-5",meta:t})]})]})},C=({className:a="h-full"})=>r("div",{className:`nc-Card12Skeleton group relative flex flex-col ${a}`,"data-nc-id":"Card12Skeleton",children:[e("div",{className:"block flex-shrink-0 flex-grow relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden",children:e(m,{containerClassName:"absolute inset-0",src:"."})}),r("div",{className:" mt-8 pr-10 flex flex-col",children:[e("h3",{className:"nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl",children:e(i,{width:"70%"})}),e("span",{className:"hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400",children:e(i,{width:"80%"})}),e("div",{className:"mt-5",children:e(i,{width:"30%"})})]})]}),S=({className:a="",post:t})=>{var h;const{title:l,link:s,excerpt:n,featuredImage:c,date:o,postFormats:d}=t;return r("div",{className:`nc-Card13 relative flex justify-between ${a}`,"data-nc-id":"Card13",children:[r("div",{className:"flex flex-col py-2",children:[e("h3",{className:"nc-card-title block font-semibold text-sm sm:text-base",children:e("a",{href:s,className:"line-clamp-2",title:l,children:l})}),n&&e("span",{className:"hidden sm:block my-3 text-neutral-500 dark:text-neutral-400 ",children:e("span",{className:"line-clamp-2",dangerouslySetInnerHTML:{__html:n}})}),e("span",{className:"mt-4 block sm:hidden text-xs text-neutral-500 ",children:o}),e("div",{className:"mt-auto hidden sm:block",children:e(p,{meta:f({},t)})})]}),r("a",{href:s,className:"block relative flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5",children:[e(m,{containerClassName:"absolute inset-0 ",className:"object-cover w-full h-full rounded-xl sm:rounded-3xl",src:(c==null?void 0:c.node.sourceUrl)||".",alt:l}),e(N,{className:"absolute bottom-2 left-2",postType:(h=d==null?void 0:d.edges[0])==null?void 0:h.node.slug,wrapSize:"w-8 h-8",iconSize:"w-4 h-4"})]})]})},y=({className:a=""})=>r("div",{className:`nc-Card13Skeleton relative flex justify-between ${a}`,"data-nc-id":"Card13Skeleton",children:[r("div",{className:"flex flex-col py-2 flex-grow",children:[e("h3",{className:"nc-card-title block w-full font-semibold text-base",children:e(i,{width:"90%"})}),e("span",{className:"hidden sm:block w-full my-3 text-neutral-500 dark:text-neutral-400 ",children:e(i,{width:"80%"})}),e("div",{className:"mt-auto ",children:e(i,{width:"30%"})})]}),e("div",{className:"block relative flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5",children:e(m,{containerClassName:"absolute inset-0 ",className:"object-cover w-full h-full rounded-xl sm:rounded-3xl",src:"."})})]}),I=({listPosts:a,isLoading:t})=>r("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7",children:[t?e(C,{}):a[0]?e(g,{post:a[0].node}):null,e("div",{className:"grid grid-cols-1 gap-5 md:gap-7",children:t?[1,2,3].map((l,s)=>e(y,{},s)):a.filter((l,s)=>s<4&&s>0).map((l,s)=>e(S,{post:l.node},s))})]});export{I as default};
