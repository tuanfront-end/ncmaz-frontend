import{N as u}from"./NcImage.775aecc9.js";import{b as r,j as e,aN as b}from"./main.9a4c9a70.js";import{C as N}from"./CategoryBadgeList.d4036f62.js";import{P as g}from"./PostTypeFeaturedIcon.796acd0c.js";import{S as m}from"./index.9e3c451e.js";import{C as i}from"./Card9.c7db4630.js";import{C as d}from"./Card9Skeleton.655e09a6.js";import"./Badge.666f2391.js";import"./PostCardLikeAndComment.c0680774.js";import"./PostCardLikeAction.dd1ca4b3.js";import"./PostFeaturedMedia.ea9be166.js";import"./NextPrev.207788ff.js";import"./useIntersectionObserver.98765581.js";import"./index.4ac0cf93.js";import"./ReactPlayer.f6e83d21.js";import"./ButtonPlayMusicRunningContainer.a5fdd3cb.js";import"./LoadingVideo.6a1ac3e8.js";import"./formatDate.5c5d9c4d.js";const p=({className:o="h-full",post:t})=>{var c;const{title:l,link:a,featuredImage:s,excerpt:f,categories:x,postFormats:n}=t;return r("div",{className:`nc-Card8 group relative [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden z-0 ${o}`,"data-nc-id":"Card8",children:[e(b,{href:a,className:"absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300"}),r("a",{href:a,className:"block w-full h-0 pt-[100%] sm:pt-[55%] rounded-xl overflow-hidden",children:[e(u,{containerClassName:"absolute inset-0",src:(s==null?void 0:s.node.sourceUrl)||".",alt:l}),e(g,{className:"absolute top-4 left-4",postType:(c=n==null?void 0:n.edges[0])==null?void 0:c.node.slug,wrapSize:"w-8 h-8",iconSize:"w-4 h-4"})]}),e("a",{href:a,className:"absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-neutral-900 "}),r("div",{className:"absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col",children:[e("a",{href:a,className:"absolute inset-0"}),e(N,{categories:x}),e("h3",{className:"mt-3 relative block font-semibold text-neutral-50 text-lg sm:text-xl",children:e("a",{href:a,className:"line-clamp-2",title:l,children:l})}),e("div",{className:"hidden sm:block mt-2",children:e("span",{className:"text-neutral-300 text-sm line-clamp-1",dangerouslySetInnerHTML:{__html:f||""}})})]})]})},h=({className:o="h-full"})=>r("div",{className:`nc-Card8Skeleton group relative [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${o}`,"data-nc-id":"Card8Skeleton",children:[e("div",{className:"block w-full h-0 pt-[100%] sm:pt-[55%] rounded-xl overflow-hidden",children:e(u,{containerClassName:"absolute inset-0",src:"."})}),r("div",{className:"absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col",children:[e(m,{width:"30%"}),e("h3",{className:"mt-3 relative block font-semibold text-neutral-50 text-lg sm:text-xl",children:e(m,{width:"90%"})}),e("div",{className:"hidden sm:block mt-2",children:e("span",{className:"opacity-0",children:"dd"})})]})]}),D=({listPosts:o,isLoading:t})=>r("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8",children:[t?e(h,{className:"sm:col-span-2"}):o[0]?e(p,{className:"sm:col-span-2",post:o[0].node}):null,t?[1,1].map((l,a)=>e(d,{},a)):o.filter((l,a)=>a<3&&a>=1).map((l,a)=>e(i,{post:l.node},a)),t?[1,1].map((l,a)=>e(d,{},a)):o.filter((l,a)=>a<5&&a>=3).map((l,a)=>e(i,{post:l.node},a)),t?e(h,{className:"sm:col-span-2"}):o[5]?e(p,{className:"sm:col-span-2",post:o[5].node}):null]});export{D as default};