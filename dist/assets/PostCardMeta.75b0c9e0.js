import{b as a,j as t,s as o,F as f}from"./main.8abeeeff.js";import{n as u}from"./formatDate.5c5d9c4d.js";const k=({className:x="leading-none",meta:c,hiddenAvatar:i=!1,size:n="normal"})=>{var r,l,m,d;const{date:s,author:e}=c;return a("div",{className:`nc-PostCardMeta inline-flex items-center text-neutral-800 dark:text-neutral-200 ${n==="normal"?"text-xs":"text-base"} ${x}`,"data-nc-id":"PostCardMeta",children:[a("a",{href:frontendObject.homeURL+(e==null?void 0:e.node.uri),className:"relative flex items-center space-x-2 ",children:[!i&&t(o,{radius:"rounded-full",sizeClass:n==="normal"?"h-5 w-5 sm:h-7 sm:w-7 text-xs sm:text-sm":"h-8 w-8 sm:h-10 sm:w-10 text-base sm:text-xl",imgUrl:((l=(r=e==null?void 0:e.node.ncUserMeta)==null?void 0:r.featuredImage)==null?void 0:l.sourceUrl)||((d=(m=e==null?void 0:e.node)==null?void 0:m.avatar)==null?void 0:d.url),userName:e==null?void 0:e.node.username}),t("span",{className:"block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium py-1 ",children:a("span",{className:"line-clamp-1",children:[" ",e==null?void 0:e.node.name]})})]}),a(f,{children:[t("span",{className:"text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium",children:"\xB7"}),t("span",{className:"text-neutral-500 dark:text-neutral-400 font-normal flex-shrink-0",children:s?u(s):null})]})]})};export{k as P};
