var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,r=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;import{B as n}from"./Card11Skeleton.43b556f0.js";import{R as s,S as c,r as o}from"./vendor.9a2c2287.js";import{H as m}from"./Heading.f2ab429d.js";import{N as i,a as d}from"./NavItem.a338fd47.js";import{b as u,A as f,N as v}from"./main.243c593f.js";import{n as x}from"./formatDate.5c5d9c4d.js";import{a as p,C as h}from"./PostFeaturedMedia.b24689e0.js";import{P as b}from"./PostCardLikeAction.9db16b47.js";const E=e=>{var c=e,{className:o=" "}=c,m=((e,r)=>{var n={};for(var s in e)a.call(e,s)&&r.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&t)for(var s of t(e))r.indexOf(s)<0&&l.call(e,s)&&(n[s]=e[s]);return n})(c,["className"]);return s.createElement(n,((e,n)=>{for(var s in n||(n={}))a.call(n,s)&&r(e,s,n[s]);if(t)for(var s of t(n))l.call(n,s)&&r(e,s,n[s]);return e})({className:`ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 ${o}`},m))},N=({tabActiveId:e,tabs:t,subHeading:a="",viewMoreHref:l="#",heading:r="🎈 Latest Articles",onClickTab:n})=>s.createElement("div",{className:"flex flex-col mb-8 relative"},s.createElement(m,{desc:a},r),s.createElement("div",{className:"flex items-center justify-between"},s.createElement(i,{className:"sm:space-x-2",containerClassName:"relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar"},s.createElement(d,{isActive:-1===e,onClick:()=>n(-1)},u.all),t.map(((t,a)=>s.createElement(d,{key:a,isActive:e===t.id,onClick:()=>n(t)},t.name)))),l&&s.createElement("span",{className:"hidden sm:block flex-shrink-0"},s.createElement(E,{href:l,className:"!leading-none"},s.createElement("span",null," ",u.viewAll),s.createElement("i",{className:"ml-3 las la-arrow-right text-xl leading-none"}))))),g=({className:e="",author:t,readingTimeShortcode:a="",date:l,hoverReadingTime:r=!0})=>{var n,c,o;if(!t)return null;const{node:m}=t;return s.createElement("a",{href:frontendObject.homeURL+m.uri,className:`nc-CardAuthor2 relative inline-flex items-center ${e}`,"data-nc-id":"CardAuthor2"},s.createElement(f,{sizeClass:"h-10 w-10 text-base",containerClassName:"flex-shrink-0 mr-3",radius:"rounded-full",imgUrl:(null==(c=null==(n=m.ncUserMeta)?void 0:n.featuredImage)?void 0:c.sourceUrl)||(null==(o=m.avatar)?void 0:o.url),userName:m.username}),s.createElement("div",null,s.createElement("h2",{className:"text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"},m.name),s.createElement("span",{className:"flex items-center mt-1 text-xs text-neutral-500 dark:text-neutral-400"},s.createElement("span",null,x(l||"")),a&&s.createElement(s.Fragment,null,s.createElement("span",{className:"hidden lg:inline mx-1 transition-opacity "+(r?"opacity-0 group-hover:opacity-100":"")},"·"),s.createElement("span",{className:"hidden lg:inline transition-opacity "+(r?"opacity-0 group-hover:opacity-100":""),dangerouslySetInnerHTML:{__html:a}})))))},k=({className:e="h-full",ratio:t="aspect-w-3 aspect-h-3 sm:aspect-h-4",hoverClass:a=""})=>s.createElement("div",{className:`nc-Card9Skeleton relative flex flex-col group rounded-3xl overflow-hidden ${a} ${e}`,"data-nc-id":"Card9Skeleton"},s.createElement("div",{className:`flex items-start relative w-full ${t}`}),s.createElement("div",null,s.createElement(v,{containerClassName:"absolute inset-0 rounded-3xl",className:"object-cover w-full h-full rounded-3xl",src:"."})),s.createElement("div",{className:"absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow"},s.createElement("div",{className:"mb-3"},s.createElement(c,{width:"90%"}),s.createElement(c,{width:"50%"})))),w=({className:e="leading-none",meta:t,hiddenAvatar:a=!1,size:l="normal"})=>{var r,n,c;const{date:o,author:m,title:i,link:d}=t;return s.createElement("div",{className:`nc-PostCardMetaV2 inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${"normal"===l?"text-xs":"text-sm"} ${e}`,"data-nc-id":"PostCardMetaV2"},s.createElement("div",{className:"relative flex items-center space-x-2"},!a&&s.createElement("a",{href:frontendObject.homeURL+(null==m?void 0:m.node.uri)},s.createElement(f,{radius:"rounded-full",sizeClass:"normal"===l?"h-9 w-9 text-base":"h-10 w-10 text-xl",imgUrl:(null==(n=null==(r=null==m?void 0:m.node.ncUserMeta)?void 0:r.featuredImage)?void 0:n.sourceUrl)||(null==(c=null==m?void 0:m.node.avatar)?void 0:c.url),userName:null==m?void 0:m.node.username})),s.createElement("a",{href:d,className:"block"},s.createElement("h2",{className:"block font-semibold "+("normal"===l?"text-base":"text-lg")},s.createElement("span",{className:"line-clamp-1"},i)),s.createElement("div",{className:"flex mt-1.5"},s.createElement("span",{className:"block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"},null==m?void 0:m.node.name),s.createElement("span",{className:"text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"},"·"),s.createElement("span",{className:"text-neutral-500 dark:text-neutral-400 font-normal"},x(o||""))))))},y=({className:e="h-full",post:t})=>{const{link:a,categories:l,ncPostMetaData:r,postId:n}=t,[c,m]=o.exports.useState(!1);return s.createElement("div",{className:`nc-Card10 relative flex flex-col ${e}`,"data-nc-id":"Card10",onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1)},s.createElement("a",{href:a,className:"block  group rounded-3xl flex-shrink-0 relative w-full aspect-w-9 aspect-h-7 sm:aspect-h-10 overflow-hidden"},s.createElement("div",null,s.createElement(p,{post:t,isHover:c})),s.createElement("span",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"})),s.createElement("div",{className:"absolute top-3 inset-x-3 flex justify-between items-start space-x-4"},s.createElement(h,{categories:l}),s.createElement(b,{postId:n,favoriteButtonShortcode:r.favoriteButtonShortcode||""})),s.createElement("div",{className:"space-y-2.5 mt-4"},s.createElement(w,{className:"leading-none",meta:t})))},C=({className:e="h-full"})=>s.createElement("div",{className:`nc-Card10Skeleton relative flex flex-col ${e}`,"data-nc-id":"Card10Skeleton"},s.createElement("div",{className:"block  group rounded-3xl flex-shrink-0 relative w-full aspect-w-9 aspect-h-7 sm:aspect-h-10 overflow-hidden"},s.createElement(v,{src:"."}),s.createElement("span",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"})),s.createElement("div",{className:"absolute top-3 inset-x-3 flex justify-between items-start space-x-4"},s.createElement(c,null)),s.createElement("div",{className:"space-y-2.5 mt-4"},s.createElement(c,null),s.createElement(c,{width:"70%"})));export{g as C,N as H,w as P,k as a,C as b,y as c};
