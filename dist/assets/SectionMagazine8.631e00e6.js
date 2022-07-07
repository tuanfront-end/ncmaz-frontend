import{C}from"./CategoryBadgeList.0e0d781b.js";import{P as b}from"./PostCardLikeAndComment.37477bee.js";import{B as v}from"./ButtonPlayMusicRunningContainer.46292ffb.js";import{N as x}from"./NcImage.3590ec63.js";import{a,j as e,P as y}from"./main.69fc0c0d.js";import{S as h}from"./index.bfc87e83.js";import"./Badge.3ad1da2b.js";import"./PostCardLikeAction.d57f7280.js";import"./LoadingVideo.4f8e22cb.js";import"./PostTypeFeaturedIcon.66b10922.js";var A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAAdCAYAAAAAaUg8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADZSURBVHgB7drLDoIwFEXRhi/XL6+PCTNPSS8gYa2pid2TkyKxtUm990e7AJ21dG7wjujtAnTWulPn0oCfjAQCI4EgjmT2h89RP5x01tK57Uv6np9X0VlL58rjFgTL2e+RR8/XOUZnre/5e19XVdeyzprP/6XjSp0etyAwEgiMBAIjgcBIIDASCIwEAiOBwEggMBIIPiN5tnONnq+z9nydVecf9R+dWTpr6Vx53IJgZCSz191R16XOWjqrHHWtztJZ606dHrcgMBIIjASCipGc/R57lM5at+l8Ab6JZwjCaizRAAAAAElFTkSuQmCC";const w=({className:r="h-full",post:l,ratio:t="aspect-w-3 xl:aspect-w-4 aspect-h-3"})=>{var g,k;const{title:n,link:s,categories:i,excerpt:m,featuredImage:c,postFormats:u}=l,d=(g=u==null?void 0:u.edges[0])==null?void 0:g.node.slug,p=f=>f?a("svg",{className:" w-9 h-9",fill:"none",viewBox:"0 0 24 24",children:[e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M15.25 6.75V17.25"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M8.75 6.75V17.25"})]}):e("svg",{className:"ml-0.5 w-9 h-9",fill:"currentColor",viewBox:"0 0 24 24",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M18.25 12L5.75 5.75V18.25L18.25 12Z"})}),o=f=>e("div",{className:"w-14 h-14 flex items-center justify-center rounded-full bg-neutral-50 text-primary-500 cursor-pointer",children:p(f)});return a("div",{className:`nc-Card16Podcast relative flex flex-col ${r}`,"data-nc-id":"Card16Podcast",children:[a("a",{href:s,className:`block flex-shrink-0 relative w-full rounded-3xl overflow-hidden z-0 ${t}`,children:[e(x,{src:(c==null?void 0:c.node.sourceUrl)||"."}),e("span",{className:"bg-neutral-900 bg-opacity-30"})]}),e("a",{href:s,className:"absolute inset-0"}),e("span",{className:"absolute top-3 inset-x-3",children:e(C,{categories:i})}),a("div",{className:"w-11/12 transform -mt-32 ",children:[a("div",{className:`px-5 flex items-center space-x-4 ${d==="post-format-video"||d==="post-format-audio"?"":"opacity-0 z-[-1]"}`,children:[e("div",{className:"flex-grow ",children:e("img",{src:A,alt:"musicWave"})}),e(v,{post:l,renderDefaultBtn:()=>o(),renderPlayingBtn:()=>o("playing"),renderLoadingBtn:()=>o("loading")})]}),a("div",{className:"p-5 mt-5 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl rounded-3xl rounded-tl-none flex flex-col flex-grow ",children:[e("h3",{className:"nc-card-title block text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 ",children:e("a",{href:s,className:"line-clamp-1",title:n,children:n})}),e("span",{className:"block text-sm text-neutral-500 dark:text-neutral-400 mt-3 mb-5",children:m&&e("span",{className:"line-clamp-2",dangerouslySetInnerHTML:{__html:m}})}),a("div",{className:"flex items-end justify-between mt-auto",children:[e(b,{className:"relative",postData:l}),e(y,{href:l.link,image:(k=l.featuredImage)==null?void 0:k.node.sourceUrl})]})]})]})]})},N=({className:r="h-full",ratio:l="aspect-w-3 xl:aspect-w-4 aspect-h-3"})=>a("div",{className:`nc-Card16PodcastSkeleton relative flex flex-col ${r}`,"data-nc-id":"Card16PodcastSkeleton",children:[a("div",{className:`block flex-shrink-0 relative w-full rounded-3xl overflow-hidden ${l}`,children:[e(x,{src:"."}),e("span",{className:"bg-neutral-900 bg-opacity-30"})]}),e("span",{className:"absolute top-3 inset-x-3",children:e(h,{width:"30%"})}),a("div",{className:"w-11/12 transform -mt-32 ",children:[e("div",{className:"px-5 flex items-center space-x-4",children:e("div",{className:"flex-grow ",children:e("img",{src:A,alt:"musicWave"})})}),a("div",{className:"p-5 mt-5 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl rounded-3xl rounded-tl-none flex flex-col flex-grow ",children:[e("h3",{className:"nc-card-title block text-xl font-semibold text-neutral-900 dark:text-neutral-100 ",children:e(h,{})}),e("span",{className:"block text-sm text-neutral-500 dark:text-neutral-400 mt-3 mb-5",children:e(h,{width:"80%"})}),e("div",{className:"opacity-0",children:"aa"})]})]})]}),j=({className:r="",post:l})=>{var p;const{title:t,link:n,featuredImage:s,postFormats:i,excerpt:m}=l,c=(p=i==null?void 0:i.edges[0])==null?void 0:p.node.slug,u=o=>{switch(o){case"loading":return a("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",children:[e("path",{fill:"currentColor",d:"M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"}),e("path",{fill:"currentColor",d:"M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"}),e("path",{fill:"currentColor",d:"M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"})]});case"playing":return a("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",children:[e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M15.25 6.75V17.25"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M8.75 6.75V17.25"})]});default:return e("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M18.25 12L5.75 5.75V18.25L18.25 12Z"})})}},d=o=>e("span",{className:"w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-neutral-800 text-primary-6000 dark:text-primary-200 shadow-lg cursor-pointer",children:u(o)});return a("div",{className:`nc-Card17Podcast relative flex items-center justify-between p-2.5 space-x-5 rounded-full bg-neutral-100 dark:bg-neutral-800 dark:bg-opacity-30 hover:shadow-xl transition-shadow ${r}`,"data-nc-id":"Card17Podcast",children:[a("a",{href:n,className:"flex  items-center space-x-4",children:[e("div",{className:"block flex-shrink-0 w-11 h-11 sm:w-16 sm:h-16 relative rounded-full overflow-hidden shadow-lg",children:e(x,{containerClassName:"absolute inset-0",className:"object-cover w-full h-full ",src:(s==null?void 0:s.node.sourceUrl)||".",alt:t})}),a("div",{className:"flex flex-col flex-grow",children:[e("h3",{className:"block font-semibold text-sm sm:text-lg",children:e("span",{className:"line-clamp-1",title:t,children:t})}),m?e("span",{className:"text-xs text-neutral-500 dark:text-neutral-400 mt-1 ",children:e("span",{className:"line-clamp-1",dangerouslySetInnerHTML:{__html:m}})}):null]})]}),(c==="post-format-video"||c==="post-format-audio")&&e(v,{post:l,className:"",renderDefaultBtn:()=>d(),renderLoadingBtn:()=>d("loading"),renderPlayingBtn:()=>d("playing")})]})},L=({className:r=""})=>e("div",{className:`nc-Card17PodcastSkeleton relative flex items-center justify-between p-2.5 space-x-5 rounded-full bg-neutral-100 dark:bg-neutral-800 dark:bg-opacity-30 hover:shadow-xl transition-shadow ${r}`,"data-nc-id":"Card17PodcastSkeleton",children:a("div",{className:"flex  items-center space-x-4",children:[e("div",{className:"block flex-shrink-0 w-11 h-11 sm:w-16 sm:h-16 relative rounded-full overflow-hidden shadow-lg",children:e(x,{containerClassName:"absolute inset-0",className:"object-cover w-full h-full ",src:"."})}),a("div",{className:"flex flex-col flex-grow",children:[e("h3",{className:"block font-semibold text-lg",children:e(h,{})}),e("span",{className:"text-xs text-neutral-500 dark:text-neutral-400 mt-1",children:e(h,{width:"40%"})})]})]})}),X=({listPosts:r,isLoading:l})=>a("div",{className:"grid grid-cols-1 sm:grid-cols-6 gap-6 2xl:gap-8",children:[l?e(N,{className:"sm:col-span-3 lg:col-span-2"}):r[0]?e(w,{className:"sm:col-span-3 lg:col-span-2",post:r[0].node}):null,l?e(N,{className:"sm:col-span-3 lg:col-span-2"}):r[1]?e(w,{className:"sm:col-span-3 lg:col-span-2",post:r[1].node}):null,e("div",{className:"flex flex-col space-y-6 md:space-y-8 sm:col-span-6 lg:col-span-2",children:l?[1,1,1,1].map((t,n)=>e(L,{},n)):r.filter((t,n)=>n>1&&n<6).map(t=>e(j,{post:t.node},t.node.id))})]});export{X as default};