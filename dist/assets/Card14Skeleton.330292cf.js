import{r as e,R as t,S as a}from"./vendor.3b208adb.js";import{C as l,P as s}from"./Card10Skeleton.cdddadb1.js";import{a as r,C as o}from"./PostFeaturedMedia.51066710.js";import{P as c}from"./PostCardLikeAction.b4c5e7c8.js";import{N as n,b as m,A as i}from"./main.38f90968.js";import{n as d}from"./formatDate.5c5d9c4d.js";const u=({className:a="h-full",post:s})=>{const{title:n,link:m,featuredImage:i,categories:d,author:u,date:f,ncPostMetaData:x,postId:p}=s,[h,v]=e.exports.useState(!1);return t.createElement("div",{className:`nc-Card4 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${a}`,"data-nc-id":"Card4",onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1)},t.createElement("div",{className:"block flex-shrink-0 relative w-full aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden"},t.createElement("div",{className:"absolute inset-0"},t.createElement(r,{post:s,isHover:h})),t.createElement("div",null,x.favoriteButtonShortcode&&t.createElement(c,{postId:p,className:"absolute right-2 top-2 z-[1]",favoriteButtonShortcode:x.favoriteButtonShortcode}))),t.createElement("a",{href:m,className:"absolute inset-0"}),t.createElement("div",{className:"p-4 flex flex-col flex-grow"},t.createElement("div",{className:"space-y-2.5 mb-4"},t.createElement(o,{categories:d}),t.createElement("h3",{className:"nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 "},t.createElement("a",{href:m,className:"line-clamp-2",title:n,dangerouslySetInnerHTML:{__html:n||""}}))),t.createElement("div",{className:"flex items-end justify-between mt-auto"},t.createElement(l,{readingTimeShortcode:x.readingTimeShortcode,hoverReadingTime:!1,date:f,author:u}))))},f=({className:e="h-full",ratio:a="aspect-w-5 aspect-h-6 sm:aspect-h-7",post:s,hoverClass:r=""})=>{var i;const{title:d,link:u,featuredImage:f,categories:x,author:p,date:h,postFormats:v,ncPostMetaData:b,postId:E}=s,N=null==(i=null==v?void 0:v.edges[0])?void 0:i.node.slug;return t.createElement("div",{className:`nc-Card7 relative flex flex-col group rounded-3xl overflow-hidden ${r} ${e}`,"data-nc-id":"Card7"},b.favoriteButtonShortcode&&t.createElement(c,{postId:E,className:"absolute top-3 right-3 z-10",favoriteButtonShortcode:b.favoriteButtonShortcode}),t.createElement("a",{href:u,className:`flex items-start relative w-full ${a}`},t.createElement(n,{containerClassName:"absolute inset-0 overflow-hidden",className:"object-cover w-full h-full rounded-3xl ",src:(null==f?void 0:f.node.sourceUrl)||"."}),t.createElement(m,{className:"absolute top-3 left-3",postType:N,wrapSize:"w-7 h-7",iconSize:"w-4 h-4"}),t.createElement("span",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"})),t.createElement("div",{className:"absolute bottom-2 sm:bottom-3 inset-x-2 sm:inset-x-3 p-2.5 sm:p-4 bg-white dark:bg-neutral-900 flex flex-col flex-grow rounded-3xl group-hover:shadow-2xl transition-shadow"},t.createElement("a",{href:u,className:"absolute inset-0"}),t.createElement("div",{className:"space-y-2.5 mb-3"},t.createElement(o,{categories:x}),t.createElement("h3",{className:"block text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 "},t.createElement("a",{href:u,className:"line-clamp-2",title:d},d))),t.createElement(l,{hoverReadingTime:!1,readingTimeShortcode:b.readingTimeShortcode,date:h,author:p})))},x=({className:a="h-full",post:l})=>{const{link:n,categories:m,ncPostMetaData:i,postId:d}=l,[u,f]=e.exports.useState(!1);return t.createElement("div",{className:`nc-Card10V2 relative flex flex-col ${a}`,"data-nc-id":"Card10V2",onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1)},t.createElement("div",{className:"block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden"},t.createElement("div",null,t.createElement(r,{post:l,isHover:u})),t.createElement("a",{href:n,className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity"})),t.createElement("div",{className:"absolute top-3 inset-x-3 flex justify-between items-start space-x-4"},t.createElement(o,{categories:m}),t.createElement(c,{postId:d,favoriteButtonShortcode:i.favoriteButtonShortcode||""})),t.createElement("div",{className:"space-y-2.5 mt-4 px-4"},t.createElement(s,{className:"leading-none",meta:l})))},p=({className:e="h-full",ratio:a="aspect-w-5 aspect-h-5",post:l,hoverClass:s=""})=>{var r,c,u,f;const{title:x,link:p,featuredImage:h,categories:v,author:b,date:E,postFormats:N}=l,g=null==(r=null==N?void 0:N.edges[0])?void 0:r.node.slug;return t.createElement("div",{className:`nc-Card14 relative flex flex-col group rounded-3xl overflow-hidden ${s} ${e}`,"data-nc-id":"Card14"},t.createElement("a",{href:p,className:`flex items-start relative w-full ${a}`},t.createElement(n,{containerClassName:"absolute inset-0 overflow-hidden",className:"object-cover w-full h-full rounded-3xl ",src:(null==h?void 0:h.node.sourceUrl)||"."}),t.createElement("span",{className:"absolute inset-0 bg-black bg-opacity-40"},t.createElement(m,{className:"absolute top-4 right-4",postType:g,wrapSize:"w-8 h-8",iconSize:"w-4 h-4"}))),t.createElement("div",{className:"absolute top-4 inset-x-4 sm:top-5 sm:inset-x-5"},t.createElement(o,{itemClass:"px-3 py-[6px]",categories:v})),t.createElement("div",{className:"dark absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 flex flex-col flex-grow"},t.createElement("h3",{className:"nc-card-title block text-base font-semibold text-white "},t.createElement("a",{href:p,className:"line-clamp-2",title:x},x)),t.createElement("div",{className:"p-2 sm:p-2.5 mt-4 sm:mt-5 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full flex items-center text-neutral-50 text-xs sm:text-sm font-medium"},t.createElement("a",{href:frontendObject.homeURL+(null==b?void 0:b.node.uri),className:"relative flex items-center space-x-2"},t.createElement(i,{radius:"rounded-full",containerClassName:"ring-2 ring-white",sizeClass:"h-7 w-7 text-sm",imgUrl:(null==(u=null==(c=null==b?void 0:b.node.ncUserMeta)?void 0:c.featuredImage)?void 0:u.sourceUrl)||(null==(f=null==b?void 0:b.node.avatar)?void 0:f.url),userName:null==b?void 0:b.node.username}),t.createElement("span",{className:"block text-white truncate"},null==b?void 0:b.node.name)),t.createElement(t.Fragment,null,t.createElement("span",{className:" mx-[6px]"},"·"),t.createElement("span",{className:" font-normal truncate"},d(E||""))))))},h=({className:e="h-full"})=>t.createElement("div",{className:`nc-Card4Skeleton relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${e}`,"data-nc-id":"Card4Skeleton"},t.createElement("span",{className:"block flex-shrink-0 relative w-full aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden"},t.createElement(n,{containerClassName:"absolute inset-0",src:"."}),t.createElement("div",null)),t.createElement("div",{className:"p-4 flex flex-col flex-grow"},t.createElement("div",{className:"space-y-2.5 mb-4"},t.createElement(a,{width:"30%"}),t.createElement("h3",{className:"nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 "},t.createElement(a,{width:"80%"}))),t.createElement("div",{className:"opacity-0 mt-auto"},"aaaa"))),v=({className:e="h-full",ratio:l="aspect-w-5 aspect-h-5 sm:aspect-h-7",hoverClass:s=""})=>t.createElement("div",{className:`nc-Card7Skeleton relative flex flex-col group rounded-3xl overflow-hidden ${s} ${e}`,"data-nc-id":"Card7Skeleton"},t.createElement("div",{className:`flex items-start relative w-full ${l}`},t.createElement(n,{containerClassName:"absolute inset-0 overflow-hidden",className:"object-cover w-full h-full rounded-3xl ",src:"."}),t.createElement("span",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"})),t.createElement("div",{className:"absolute bottom-3 inset-x-3 p-4 bg-white dark:bg-neutral-900 flex flex-col flex-grow rounded-3xl group-hover:shadow-2xl transition-shadow"},t.createElement("div",{className:"space-y-2.5 mb-3"},t.createElement(a,{width:"30%"}),t.createElement("h3",{className:"block text-base font-semibold text-neutral-900 dark:text-neutral-100 "},t.createElement(a,{width:"80%"}))),t.createElement("div",{className:"opacity-0"},"aa"))),b=({className:e="h-full"})=>t.createElement("div",{className:`nc-Card10V2Skeleton relative flex flex-col ${e}`,"data-nc-id":"Card10V2Skeleton"},t.createElement("div",{className:"block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden"},t.createElement(n,{src:"."}),"x"),t.createElement("div",{className:"absolute top-3 inset-x-3 flex justify-between items-start space-x-4"},t.createElement(a,{width:"30%"})),t.createElement("div",{className:"space-y-2.5 mt-4 px-4 flex space-x-3 items-center"},t.createElement("div",{className:"flex-shrink-0 w-10 h-10 bg-neutral-200 dark:bg-neutral-700 rounded-full"}),t.createElement("div",{className:"flex-grow text-sm"},t.createElement(a,{width:"80%"}),t.createElement("span",{className:"text-xs"},t.createElement(a,{width:"50%"}))))),E=({className:e="h-full",ratio:l="aspect-w-5 aspect-h-5",hoverClass:s=""})=>t.createElement("div",{className:`nc-Card14Skeleton relative flex flex-col group rounded-3xl overflow-hidden ${s} ${e}`,"data-nc-id":"Card14Skeleton"},t.createElement("div",{className:`flex items-start relative w-full ${l}`},t.createElement(n,{containerClassName:"absolute inset-0 overflow-hidden",className:"object-cover w-full h-full rounded-3xl ",src:"."})),t.createElement("div",{className:"absolute top-4 inset-x-4 sm:top-5 sm:inset-x-5"},t.createElement(a,{width:"30%"})),t.createElement("div",{className:"dark absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 flex flex-col flex-grow"},t.createElement("h3",{className:"nc-card-title block text-base font-semibold text-white "},t.createElement(a,{width:"80%"})),t.createElement("div",{className:"p-2 sm:p-2.5 mt-4 sm:mt-5 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full flex items-center text-neutral-50 text-xs sm:text-sm font-medium"},t.createElement("div",{className:"relative flex items-center space-x-2"},t.createElement(a,{width:"30%"})),t.createElement(t.Fragment,null,t.createElement("span",{className:" mx-[6px]"},"·"),t.createElement(a,{width:"20%"})))));export{p as C,x as a,f as b,u as c,E as d,b as e,v as f,h as g};
