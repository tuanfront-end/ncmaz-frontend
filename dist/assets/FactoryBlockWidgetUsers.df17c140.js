import{j as n,d as e,U as x,S as m,h as N,v as b,w as p,D as v}from"./main.5ffc876d.js";import{W as S}from"./WidgetHeading1.cd68b246.js";import{u as A}from"./useGutenbergSectionWithGQLGetUsers.6e4b42d9.js";const C=({className:a="",author:d})=>{var i;const{name:s,username:o,uri:l,avatar:r,ncUserMeta:t}=d;return n("a",{href:frontendObject.homeURL+l,className:`nc-CardAuthor flex items-center ${a}`,"data-nc-id":"CardAuthor",children:[e(x,{sizeClass:"h-10 w-10 text-base",containerClassName:"flex-shrink-0 mr-4",radius:"rounded-full",imgUrl:((i=t==null?void 0:t.featuredImage)==null?void 0:i.sourceUrl)||(r==null?void 0:r.url),userName:o}),n("div",{children:[e("h4",{className:"text-base text-neutral-900 dark:text-neutral-100 font-semibold",children:s}),e("span",{className:"block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400",children:t.ncBio})]})]})},w=({className:a=""})=>n("div",{className:`nc-CardAuthorSkeleton flex items-center ${a}`,"data-nc-id":"CardAuthorSkeleton",children:[e(x,{sizeClass:"h-10 w-10 text-base",containerClassName:"flex-shrink-0 mr-4",radius:"rounded-full",userName:"d"}),n("div",{className:"flex-grow",children:[e("h4",{className:"text-base text-neutral-900 dark:text-neutral-100 font-semibold",children:e(m,{width:"70%"})}),e("span",{className:"block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400",children:e(m,{width:"40%"})})]})]}),L=({className:a="bg-neutral-100 dark:bg-neutral-800",authors:d,heading:s,isLoading:o,authorsLoading:l=[1,1,1,1]})=>n("div",{className:`nc-WidgetAuthors rounded-3xl overflow-hidden ${a}`,"data-nc-id":"WidgetAuthors",children:[s&&e(S,{title:s}),e("div",{className:"flow-root",children:e("div",{className:"flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700",children:o?l.map((r,t)=>e(w,{className:"p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"},t)):d.map((r,t)=>e(C,{className:"p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700",author:r.node},t))})})]}),I=({className:a="",domNode:d,apiSettings:s,sectionIndex:o})=>{const{graphQLvariables:l,graphQLData:r,settings:t}=s,i=!l&&!!r,{funcGqlQueryGetUsers:f,IS_SKELETON:u,LISTS_DATA:h,error:g}=A({graphQLvariables:l,graphQLData:r});let c=null;i?c=N.exports.useRef(null):c=b(f,o).ref;const k=()=>n("div",{ref:c,children:[e(L,{authors:h,heading:t.heading,isLoading:u}),e(v,{className:"my-5",data:h,error:g,isSkeleton:u})]});return p.createPortal(k(),d)};export{I as default};
