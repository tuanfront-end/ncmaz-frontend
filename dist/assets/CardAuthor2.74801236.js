import{b as a,j as t,s as m,F as u}from"./main.8abeeeff.js";import{n as h}from"./formatDate.5c5d9c4d.js";const f=({className:o="overflow-hidden",author:r,readingTimeShortcode:n="",date:d,hoverReadingTime:s=!0})=>{var l,i,c;if(!r)return null;const{node:e}=r;return a("a",{href:frontendObject.homeURL+e.uri,className:`nc-CardAuthor2 relative inline-flex items-center ${o}`,"data-nc-id":"CardAuthor2",children:[t(m,{sizeClass:"h-10 w-10 text-base",containerClassName:"flex-shrink-0 mr-3",radius:"rounded-full",imgUrl:((i=(l=e.ncUserMeta)==null?void 0:l.featuredImage)==null?void 0:i.sourceUrl)||((c=e.avatar)==null?void 0:c.url),userName:e.username}),a("div",{className:"overflow-hidden",children:[t("h4",{className:"text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium truncate",children:e==null?void 0:e.name}),a("span",{className:"flex items-center mt-1 text-xs text-neutral-500 dark:text-neutral-400 truncate",children:[t("span",{children:h(d||"")}),n&&a(u,{children:[t("span",{className:`hidden lg:inline mx-1 transition-opacity ${s?"opacity-0 group-hover:opacity-100":""}`,children:"\xB7"}),t("span",{className:`hidden lg:inline transition-opacity truncate ${s?"opacity-0 group-hover:opacity-100":""}`,dangerouslySetInnerHTML:{__html:n}})]})]})]})]})};export{f as C};
