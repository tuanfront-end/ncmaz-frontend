import{R as e,r as t,S as a}from"./vendor.49610682.js";import{N as l,P as s,C as r,v as c,f as o,w as n,x as m,A as i,y as d}from"./main.fbb9edbc.js";const u=({className:t="h-full",post:a})=>{const{title:o,link:n,featuredImage:m,categories:i,author:d,date:u,ncPostMetaData:f,postId:x}=a;return e.createElement("div",{className:`nc-Card4 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${t}`,"data-nc-id":"Card4"},e.createElement("span",{className:"block flex-shrink-0 relative w-full aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden"},e.createElement(l,{containerClassName:"absolute inset-0",src:(null==m?void 0:m.node.sourceUrl)||"."}),e.createElement("div",null,f.favoriteButtonShortcode&&e.createElement(s,{postId:x,className:"absolute right-2 top-2 z-[1]",favoriteButtonShortcode:f.favoriteButtonShortcode}))),e.createElement("a",{href:n,className:"absolute inset-0"}),e.createElement("div",{className:"p-4 flex flex-col flex-grow"},e.createElement("div",{className:"space-y-2.5 mb-4"},e.createElement(r,{categories:i}),e.createElement("h2",{className:"nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 "},e.createElement("a",{href:n,className:"line-clamp-2",title:o},o))),e.createElement("div",{className:"flex items-end justify-between mt-auto"},e.createElement(c,{readingTimeShortcode:f.readingTimeShortcode,hoverReadingTime:!1,date:u,author:d}))))},f=({className:t="h-full",ratio:a="aspect-w-5 aspect-h-6 sm:aspect-h-7",post:n,hoverClass:m=""})=>{var i;const{title:d,link:u,featuredImage:f,categories:x,author:p,date:h,postFormats:v,ncPostMetaData:b,postId:E}=n,N=null==(i=null==v?void 0:v.edges[0])?void 0:i.node.slug;return e.createElement("div",{className:`nc-Card7 relative flex flex-col group rounded-3xl overflow-hidden ${m} ${t}`,"data-nc-id":"Card7"},b.favoriteButtonShortcode&&e.createElement(s,{postId:E,className:"absolute top-3 right-3 z-10",favoriteButtonShortcode:b.favoriteButtonShortcode}),e.createElement("a",{href:u,className:`flex items-start relative w-full ${a}`},e.createElement(l,{containerClassName:"absolute inset-0 overflow-hidden",className:"object-cover w-full h-full rounded-3xl ",src:(null==f?void 0:f.node.sourceUrl)||"."}),e.createElement(o,{className:"absolute top-3 left-3",postType:N,wrapSize:"w-7 h-7",iconSize:"w-4 h-4"}),e.createElement("span",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"})),e.createElement("div",{className:"absolute bottom-2 sm:bottom-3 inset-x-2 sm:inset-x-3 p-2.5 sm:p-4 bg-white dark:bg-neutral-900 flex flex-col flex-grow rounded-3xl group-hover:shadow-2xl transition-shadow"},e.createElement("a",{href:u,className:"absolute inset-0"}),e.createElement("div",{className:"space-y-2.5 mb-3"},e.createElement(r,{categories:x}),e.createElement("h2",{className:"block text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 "},e.createElement("a",{href:u,className:"line-clamp-2",title:d},d))),e.createElement(c,{hoverReadingTime:!1,readingTimeShortcode:b.readingTimeShortcode,date:h,author:p})))},x=({className:a="h-full",post:l})=>{const{link:c,categories:o,ncPostMetaData:i,postId:d}=l,[u,f]=t.exports.useState(!1);return e.createElement("div",{className:`nc-Card10V2 relative flex flex-col ${a}`,"data-nc-id":"Card10V2",onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1)},e.createElement("div",{className:"block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden"},e.createElement("div",null,e.createElement(n,{post:l,isHover:u})),e.createElement("a",{href:c,className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity"})),e.createElement("div",{className:"absolute top-3 inset-x-3 flex justify-between items-start space-x-4"},e.createElement(r,{categories:o}),e.createElement(s,{postId:d,favoriteButtonShortcode:i.favoriteButtonShortcode||""})),e.createElement("div",{className:"space-y-2.5 mt-4 px-4"},e.createElement(m,{className:"leading-none",meta:l})))},p=({className:t="h-full",ratio:a="aspect-w-5 aspect-h-5",post:s,hoverClass:c=""})=>{var n,m,u,f;const{title:x,link:p,featuredImage:h,categories:v,author:b,date:E,postFormats:N}=s,w=null==(n=null==N?void 0:N.edges[0])?void 0:n.node.slug;return e.createElement("div",{className:`nc-Card14 relative flex flex-col group rounded-3xl overflow-hidden ${c} ${t}`,"data-nc-id":"Card14"},e.createElement("a",{href:p,className:`flex items-start relative w-full ${a}`},e.createElement(l,{containerClassName:"absolute inset-0 overflow-hidden",className:"object-cover w-full h-full rounded-3xl ",src:(null==h?void 0:h.node.sourceUrl)||"."}),e.createElement("span",{className:"absolute inset-0 bg-black bg-opacity-40"},e.createElement(o,{className:"absolute top-4 right-4",postType:w,wrapSize:"w-8 h-8",iconSize:"w-4 h-4"}))),e.createElement("div",{className:"absolute top-4 inset-x-4 sm:top-5 sm:inset-x-5"},e.createElement(r,{itemClass:"px-3 py-[6px]",categories:v})),e.createElement("div",{className:"dark absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 flex flex-col flex-grow"},e.createElement("h2",{className:"nc-card-title block text-base font-semibold text-white "},e.createElement("a",{href:p,className:"line-clamp-2",title:x},x)),e.createElement("div",{className:"p-2 sm:p-2.5 mt-4 sm:mt-5 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full flex items-center text-neutral-50 text-xs sm:text-sm font-medium"},e.createElement("a",{href:frontendObject.homeURL+(null==b?void 0:b.node.uri),className:"relative flex items-center space-x-2"},e.createElement(i,{radius:"rounded-full",containerClassName:"ring-2 ring-white",sizeClass:"h-7 w-7 text-sm",imgUrl:(null==(u=null==(m=null==b?void 0:b.node.ncUserMeta)?void 0:m.featuredImage)?void 0:u.sourceUrl)||(null==(f=null==b?void 0:b.node.avatar)?void 0:f.url),userName:null==b?void 0:b.node.username}),e.createElement("span",{className:"block text-white truncate"},null==b?void 0:b.node.name)),e.createElement(e.Fragment,null,e.createElement("span",{className:" mx-[6px]"},"·"),e.createElement("span",{className:" font-normal truncate"},d(E||""))))))},h=({className:t="h-full"})=>e.createElement("div",{className:`nc-Card4Skeleton relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${t}`,"data-nc-id":"Card4Skeleton"},e.createElement("span",{className:"block flex-shrink-0 relative w-full aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden"},e.createElement(l,{containerClassName:"absolute inset-0",src:"."}),e.createElement("div",null)),e.createElement("div",{className:"p-4 flex flex-col flex-grow"},e.createElement("div",{className:"space-y-2.5 mb-4"},e.createElement(a,{width:"30%"}),e.createElement("h2",{className:"nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 "},e.createElement(a,{width:"80%"}))),e.createElement("div",{className:"opacity-0 mt-auto"},"aaaa"))),v=({className:t="h-full",ratio:s="aspect-w-5 aspect-h-5 sm:aspect-h-7",hoverClass:r=""})=>e.createElement("div",{className:`nc-Card7Skeleton relative flex flex-col group rounded-3xl overflow-hidden ${r} ${t}`,"data-nc-id":"Card7Skeleton"},e.createElement("div",{className:`flex items-start relative w-full ${s}`},e.createElement(l,{containerClassName:"absolute inset-0 overflow-hidden",className:"object-cover w-full h-full rounded-3xl ",src:"."}),e.createElement("span",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"})),e.createElement("div",{className:"absolute bottom-3 inset-x-3 p-4 bg-white dark:bg-neutral-900 flex flex-col flex-grow rounded-3xl group-hover:shadow-2xl transition-shadow"},e.createElement("div",{className:"space-y-2.5 mb-3"},e.createElement(a,{width:"30%"}),e.createElement("h2",{className:"block text-base font-semibold text-neutral-900 dark:text-neutral-100 "},e.createElement(a,{width:"80%"}))),e.createElement("div",{className:"opacity-0"},"aa"))),b=({className:t="h-full"})=>e.createElement("div",{className:`nc-Card10V2Skeleton relative flex flex-col ${t}`,"data-nc-id":"Card10V2Skeleton"},e.createElement("div",{className:"block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden"},e.createElement(l,{src:"."}),"x"),e.createElement("div",{className:"absolute top-3 inset-x-3 flex justify-between items-start space-x-4"},e.createElement(a,{width:"30%"})),e.createElement("div",{className:"space-y-2.5 mt-4 px-4 flex space-x-3 items-center"},e.createElement("div",{className:"flex-shrink-0 w-10 h-10 bg-neutral-200 dark:bg-neutral-700 rounded-full"}),e.createElement("div",{className:"flex-grow text-sm"},e.createElement(a,{width:"80%"}),e.createElement("span",{className:"text-xs"},e.createElement(a,{width:"50%"}))))),E=({className:t="h-full",ratio:s="aspect-w-5 aspect-h-5",hoverClass:r=""})=>e.createElement("div",{className:`nc-Card14Skeleton relative flex flex-col group rounded-3xl overflow-hidden ${r} ${t}`,"data-nc-id":"Card14Skeleton"},e.createElement("div",{className:`flex items-start relative w-full ${s}`},e.createElement(l,{containerClassName:"absolute inset-0 overflow-hidden",className:"object-cover w-full h-full rounded-3xl ",src:"."})),e.createElement("div",{className:"absolute top-4 inset-x-4 sm:top-5 sm:inset-x-5"},e.createElement(a,{width:"30%"})),e.createElement("div",{className:"dark absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 flex flex-col flex-grow"},e.createElement("h2",{className:"nc-card-title block text-base font-semibold text-white "},e.createElement(a,{width:"80%"})),e.createElement("div",{className:"p-2 sm:p-2.5 mt-4 sm:mt-5 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full flex items-center text-neutral-50 text-xs sm:text-sm font-medium"},e.createElement("div",{className:"relative flex items-center space-x-2"},e.createElement(a,{width:"30%"})),e.createElement(e.Fragment,null,e.createElement("span",{className:" mx-[6px]"},"·"),e.createElement(a,{width:"20%"})))));export{p as C,x as a,f as b,u as c,E as d,b as e,v as f,h as g};
