import{g as k,j as a,d as e,f as w,M as C,C as N,O as S,N as x,p as y,Q as z,T as M,U as $,V as j,S as c}from"./main.64e1813d.js";const T=({className:l="h-full",post:s})=>{const{title:r,link:d,featuredImage:h,categories:n,author:o,date:m,ncPostMetaData:t,postId:f}=s,[i,u]=k.exports.useState(!1);return a("div",{className:`nc-Card4 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${l}`,"data-nc-id":"Card4",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[e("a",{href:d,className:"absolute block inset-0 "}),a("div",{className:"block flex-shrink-0 relative w-full aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden z-0",children:[e("div",{children:t.favoriteButtonShortcode&&e(w,{postId:f,className:"absolute right-2 top-2 z-[1]",favoriteButtonShortcode:t.favoriteButtonShortcode})}),e("div",{className:"absolute inset-0",children:e(C,{post:s,isHover:i})})]}),a("div",{className:"p-4 flex flex-col flex-grow",children:[a("div",{className:"space-y-2.5 mb-4",children:[e(N,{categories:n}),e("h3",{className:"nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 ",children:e("a",{href:d,className:"line-clamp-2",title:r,dangerouslySetInnerHTML:{__html:r||""}})})]}),e("div",{className:"flex items-end justify-between mt-auto",children:e(S,{readingTimeShortcode:t.readingTimeShortcode,hoverReadingTime:!1,date:m,author:o})})]})]})},I=({className:l="h-full",ratio:s="aspect-w-5 aspect-h-6 sm:aspect-h-7",post:r,hoverClass:d=""})=>{var p;const{title:h,link:n,featuredImage:o,categories:m,author:t,date:f,postFormats:i,ncPostMetaData:u,postId:v}=r,b=(p=i==null?void 0:i.edges[0])==null?void 0:p.node.slug;return a("div",{className:`nc-Card7 relative flex flex-col group rounded-3xl z-0 overflow-hidden ${d} ${l}`,"data-nc-id":"Card7",children:[u.favoriteButtonShortcode&&e(w,{postId:v,className:"absolute top-3 right-3 z-10",favoriteButtonShortcode:u.favoriteButtonShortcode}),a("a",{href:n,className:`flex items-start relative w-full ${s}`,children:[e(x,{containerClassName:"absolute inset-0 overflow-hidden z-0",className:"object-cover w-full h-full rounded-3xl ",src:(o==null?void 0:o.node.sourceUrl)||"."}),e(y,{className:"absolute top-3 left-3",postType:b,wrapSize:"w-7 h-7",iconSize:"w-4 h-4"}),e("span",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"})]}),a("div",{className:"absolute bottom-2 sm:bottom-3 inset-x-2 sm:inset-x-3 p-2.5 sm:p-4 bg-white dark:bg-neutral-900 flex flex-col flex-grow rounded-3xl group-hover:shadow-2xl transition-shadow",children:[e("a",{href:n,className:"absolute inset-0"}),a("div",{className:"space-y-2.5 mb-3",children:[e(N,{categories:m}),e("h3",{className:"block text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 ",children:e("a",{href:n,className:"line-clamp-2",title:h,children:h})})]}),e(S,{hoverReadingTime:!1,readingTimeShortcode:u.readingTimeShortcode,date:f,author:t})]})]})},V=({className:l="h-full",post:s})=>{const{link:r,categories:d,ncPostMetaData:h,postId:n}=s,[o,m]=k.exports.useState(!1);return a("div",{className:`nc-Card10V2 relative flex flex-col ${l}`,"data-nc-id":"Card10V2",onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:[a("div",{className:"block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden z-0",children:[e("div",{children:e(C,{post:s,isHover:o})}),e("a",{href:r,className:"absolute block inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity"})]}),a("div",{className:"absolute top-3 inset-x-3 flex justify-between items-start space-x-4 z-10",children:[e(N,{categories:d}),e(w,{postId:n,favoriteButtonShortcode:h.favoriteButtonShortcode||""})]}),e("div",{className:"space-y-2.5 mt-4 px-4",children:e(z,{className:"leading-none",meta:s})})]})},P=({className:l="h-full",ratio:s="aspect-w-5 aspect-h-5",post:r,hoverClass:d=""})=>{var v,b,p,g;const{title:h,link:n,featuredImage:o,categories:m,author:t,date:f,postFormats:i}=r,u=(v=i==null?void 0:i.edges[0])==null?void 0:v.node.slug;return a("div",{className:`nc-Card14 relative flex flex-col group rounded-3xl overflow-hidden z-0 ${d} ${l}`,"data-nc-id":"Card14",children:[a("a",{href:n,className:`flex items-start relative w-full ${s}`,children:[e(x,{containerClassName:"absolute inset-0 overflow-hidden z-0",className:"object-cover w-full h-full rounded-3xl ",src:(o==null?void 0:o.node.sourceUrl)||"."}),e("span",{className:"absolute inset-0 bg-black bg-opacity-40",children:e(y,{className:"absolute top-4 right-4",postType:u,wrapSize:"w-8 h-8",iconSize:"w-4 h-4"})})]}),e("div",{className:"absolute top-4 inset-x-4 sm:top-5 sm:inset-x-5",children:e(N,{itemClass:"px-3 py-[6px]",categories:m})}),a("div",{className:"dark absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 flex flex-col flex-grow",children:[e("h3",{className:"nc-card-title block text-base font-semibold text-white ",children:e("a",{href:n,className:"line-clamp-2",title:h,children:h})}),a("div",{className:"p-2 sm:p-2.5 mt-4 sm:mt-5 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full flex items-center text-neutral-50 text-xs sm:text-sm font-medium",children:[a("a",{href:frontendObject.homeURL+(t==null?void 0:t.node.uri),className:"relative flex items-center space-x-2",children:[e(M,{radius:"rounded-full",containerClassName:"ring-2 ring-white",sizeClass:"h-7 w-7 text-sm",imgUrl:((p=(b=t==null?void 0:t.node.ncUserMeta)==null?void 0:b.featuredImage)==null?void 0:p.sourceUrl)||((g=t==null?void 0:t.node.avatar)==null?void 0:g.url),userName:t==null?void 0:t.node.username}),e("span",{className:"block text-white truncate",children:t==null?void 0:t.node.name})]}),a($,{children:[e("span",{className:" mx-[6px]",children:"\xB7"}),e("span",{className:" font-normal truncate",children:j(f||"")})]})]})]})]})},U=({className:l="h-full"})=>a("div",{className:`nc-Card4Skeleton relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${l}`,"data-nc-id":"Card4Skeleton",children:[a("span",{className:"block flex-shrink-0 relative w-full aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden",children:[e(x,{containerClassName:"absolute inset-0",src:"."}),e("div",{})]}),a("div",{className:"p-4 flex flex-col flex-grow",children:[a("div",{className:"space-y-2.5 mb-4",children:[e(c,{width:"30%"}),e("h3",{className:"nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 ",children:e(c,{width:"80%"})})]}),e("div",{className:"opacity-0 mt-auto",children:"aaaa"})]})]}),L=({className:l="h-full",ratio:s="aspect-w-5 aspect-h-5 sm:aspect-h-7",hoverClass:r=""})=>a("div",{className:`nc-Card7Skeleton relative flex flex-col group rounded-3xl overflow-hidden ${r} ${l}`,"data-nc-id":"Card7Skeleton",children:[a("div",{className:`flex items-start relative w-full ${s}`,children:[e(x,{containerClassName:"absolute inset-0 overflow-hidden",className:"object-cover w-full h-full rounded-3xl ",src:"."}),e("span",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"})]}),a("div",{className:"absolute bottom-3 inset-x-3 p-4 bg-white dark:bg-neutral-900 flex flex-col flex-grow rounded-3xl group-hover:shadow-2xl transition-shadow",children:[a("div",{className:"space-y-2.5 mb-3",children:[e(c,{width:"30%"}),e("h3",{className:"block text-base font-semibold text-neutral-900 dark:text-neutral-100 ",children:e(c,{width:"80%"})})]}),e("div",{className:"opacity-0",children:"aa"})]})]}),H=({className:l="h-full"})=>a("div",{className:`nc-Card10V2Skeleton relative flex flex-col ${l}`,"data-nc-id":"Card10V2Skeleton",children:[a("div",{className:"block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden",children:[e(x,{src:"."}),"x"]}),e("div",{className:"absolute top-3 inset-x-3 flex justify-between items-start space-x-4",children:e(c,{width:"30%"})}),a("div",{className:"space-y-2.5 mt-4 px-4 flex space-x-3 items-center",children:[e("div",{className:"flex-shrink-0 w-10 h-10 bg-neutral-200 dark:bg-neutral-700 rounded-full"}),a("div",{className:"flex-grow text-sm",children:[e(c,{width:"80%"}),e("span",{className:"text-xs",children:e(c,{width:"50%"})})]})]})]}),D=({className:l="h-full",ratio:s="aspect-w-5 aspect-h-5",hoverClass:r=""})=>a("div",{className:`nc-Card14Skeleton relative flex flex-col group rounded-3xl overflow-hidden ${r} ${l}`,"data-nc-id":"Card14Skeleton",children:[e("div",{className:`flex items-start relative w-full ${s}`,children:e(x,{containerClassName:"absolute inset-0 overflow-hidden",className:"object-cover w-full h-full rounded-3xl ",src:"."})}),e("div",{className:"absolute top-4 inset-x-4 sm:top-5 sm:inset-x-5",children:e(c,{width:"30%"})}),a("div",{className:"dark absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 flex flex-col flex-grow",children:[e("h3",{className:"nc-card-title block text-base font-semibold text-white ",children:e(c,{width:"80%"})}),a("div",{className:"p-2 sm:p-2.5 mt-4 sm:mt-5 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full flex items-center text-neutral-50 text-xs sm:text-sm font-medium",children:[e("div",{className:"relative flex items-center space-x-2",children:e(c,{width:"30%"})}),a($,{children:[e("span",{className:" mx-[6px]",children:"\xB7"}),e(c,{width:"20%"})]})]})]})]});export{P as C,V as a,I as b,T as c,D as d,H as e,L as f,U as g};
