var u=Object.defineProperty;var n=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var d=(l,a,s)=>a in l?u(l,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[a]=s,h=(l,a)=>{for(var s in a||(a={}))v.call(a,s)&&d(l,s,a[s]);if(n)for(var s of n(a))g.call(a,s)&&d(l,s,a[s]);return l};import{C as N,a as w}from"./Card2Skeleton.ca38fc9f.js";import{N as f}from"./NcImage.b55b9c44.js";import{P as k}from"./PostCardMeta.86e8f092.js";import{P as C}from"./PostCardLikeAndComment.443d34b5.js";import{C as S}from"./CategoryBadgeList.521bf5f6.js";import{P as y}from"./PostTypeFeaturedIcon.0dd313e6.js";import{a as t,j as e,P}from"./main.3380b1f5.js";import{S as p}from"./index.f12587f3.js";import"./CardAuthor2.159fd514.js";import"./formatDate.5c5d9c4d.js";import"./PostFeaturedMedia.0347b26f.js";import"./index.00c2f9f3.js";import"./ReactPlayer.27b94619.js";import"./ButtonPlayMusicRunningContainer.543a94eb.js";import"./LoadingVideo.7638ad52.js";import"./PostCardLikeAction.1d43f9ab.js";import"./Badge.3cf53dd4.js";const j=({className:l="h-full",post:a})=>{var i,c;const{title:s,link:o,featuredImage:r,categories:x,postFormats:m,ncPostMetaData:b}=a;return t("div",{className:`nc-Card6 relative flex group flex-row items-center p-0 sm:p-4 mb-2.5 sm:mb-0 [ sm:nc-box-has-hover ] [ sm:nc-dark-box-bg-has-hover ] ${l}`,"data-nc-id":"Card6",children:[e("a",{href:o,className:"absolute inset-0 z-0"}),t("div",{className:"flex flex-col flex-grow",children:[t("div",{className:"space-y-1.5 sm:space-y-3 mb-2 sm:mb-4",children:[e(S,{categories:x}),e("h3",{className:"block font-semibold text-sm sm:text-base",children:e("a",{href:o,className:"line-clamp-2",title:s,children:s})}),e(k,{meta:h({},a)})]}),t("div",{className:"flex items-center flex-wrap justify-between mt-auto",children:[e(C,{className:"relative",postData:a}),t("div",{className:"flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ",children:[e("span",{dangerouslySetInnerHTML:{__html:b.readingTimeShortcode||""}}),e(P,{href:a.link,image:(i=a.featuredImage)==null?void 0:i.node.sourceUrl})]})]})]}),t("a",{href:o,className:"block relative flex-shrink-0 w-20 h-20 sm:w-40 sm:h-full ml-5 rounded-2xl overflow-hidden ",children:[e(f,{containerClassName:"absolute inset-0",className:"object-cover w-full h-full",src:(r==null?void 0:r.node.sourceUrl)||".",alt:s}),e("span",{className:"absolute bottom-1 left-1",children:e(y,{wrapSize:"h-7 w-7",iconSize:"h-4 w-4",postType:(c=m==null?void 0:m.edges[0])==null?void 0:c.node.slug})})]})]})},z=({className:l="h-full"})=>t("div",{className:`nc-Card6Skeleton relative flex group flex-row items-center p-0 sm:p-4 mb-2.5 sm:mb-0 [ sm:nc-box-has-hover ] [ sm:nc-dark-box-bg-has-hover ] ${l}`,"data-nc-id":"Card6Skeleton",children:[t("div",{className:"flex flex-col flex-grow",children:[t("div",{className:"space-y-1.5 sm:space-y-3 mb-2 sm:mb-4",children:[e(p,{width:"30%"}),e("h3",{className:"block font-semibold text-sm sm:text-base",children:e(p,{width:"80%"})}),e("div",{className:"opacity-0",children:"meta"})]}),e("div",{className:"opacity-0",children:"me"})]}),e("div",{className:"block relative flex-shrink-0 w-20 h-20 sm:w-40 sm:h-full ml-5 rounded-2xl overflow-hidden ",children:e(f,{containerClassName:"absolute inset-0",className:"object-cover w-full h-full",src:"."})})]}),Q=({listPosts:l,isLoading:a})=>{var s;return e("div",{children:t("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-8",children:[a?e(N,{}):l[0]?e(w,{size:"large",post:(s=l[0])==null?void 0:s.node}):null,e("div",{className:"grid  grid-cols-1 gap-6 2xl:gap-8",children:a?[1,1,1].map((o,r)=>e(z,{},r)):l.filter((o,r)=>r>0&&r<4).map((o,r)=>e(j,{post:o.node},r))})]})})};export{Q as default};