import{j as t,d as e,T as c,S as o}from"./main.64e1813d.js";import{A as d}from"./CardAuthorBox2Skeleton.2176d925.js";const p=({className:r="",author:m})=>{var n;const{name:x,username:i,uri:u,avatar:s,ncUserMeta:a,posts:l}=m;return t("a",{href:frontendObject.homeURL+u,className:`nc-CardAuthorBox flex flex-col items-center justify-center text-center px-3 py-5 sm:px-6 sm:py-7  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${r}`,"data-nc-id":"CardAuthorBox",children:[e(c,{sizeClass:"w-20 h-20 text-2xl",radius:"rounded-full",imgUrl:((n=a==null?void 0:a.featuredImage)==null?void 0:n.sourceUrl)||(s==null?void 0:s.url),userName:i}),t("div",{className:"mt-3",children:[e("h4",{className:"text-base font-medium",children:e("span",{className:"line-clamp-1",children:x})}),e("span",{className:"block mt-1 text-sm text-neutral-500 dark:text-neutral-400",children:a.ncBio||" - "})]}),t("div",{className:"py-2 px-4 mt-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium",children:[l==null?void 0:l.pageInfo.total,e(d,{className:"w-5 h-5 text-yellow-600 ml-3"})]})]})},b=({className:r=""})=>t("div",{className:`nc-CardAuthorBoxSkeleton flex flex-col items-center justify-center text-center px-3 py-5 sm:px-6 sm:py-7  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${r}`,"data-nc-id":"CardAuthorBoxSkeleton",children:[e(c,{sizeClass:"w-20 h-20 text-2xl",radius:"rounded-full",userName:"d"}),t("div",{className:"mt-3",children:[e("h4",{className:"text-base font-medium",children:e(o,{})}),e("span",{className:"block mt-1 text-sm text-neutral-500 dark:text-neutral-400",children:e(o,{})})]}),e("div",{className:"py-2 px-4 mt-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium",children:e(d,{className:"w-5 h-5 text-yellow-600 "})})]});export{p as C,b as a};