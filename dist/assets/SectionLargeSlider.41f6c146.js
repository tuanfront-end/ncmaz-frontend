import{N as f}from"./NcImage.775aecc9.js";import{N as b}from"./NextPrev.207788ff.js";import{P as v}from"./PostCardLikeAndComment.c0680774.js";import{C as N}from"./CardAuthor2.3f123caf.js";import{C as w}from"./CategoryBadgeList.d4036f62.js";import{b as l,j as e,P as C,r as y}from"./main.9a4c9a70.js";import{S as u}from"./index.9e3c451e.js";import"./PostCardLikeAction.dd1ca4b3.js";import"./formatDate.5c5d9c4d.js";import"./Badge.666f2391.js";const k=({className:r="",post:d,onClickNext:p=()=>{},onClickPrev:i=()=>{},hasNext:c,hasPrev:m})=>{var g;const{ncPostMetaData:a,featuredImage:t,title:s,date:o,categories:n,author:h,link:x}=d;return l("div",{className:`nc-CardLarge1 nc-CardLarge1--hasAnimation relative flex flex-col-reverse md:flex-row justify-end ${r}`,children:[l("div",{className:"md:absolute z-10 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full -mt-8 md:mt-0 px-3 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5",children:[l("div",{className:"nc-CardLarge1__left p-4 sm:p-8 xl:py-14 md:px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 --  nc-dark-box-bg",children:[e(w,{categories:n}),e("h2",{className:"nc-card-title text-xl sm:text-2xl font-semibold ",children:e("a",{href:x,className:"line-clamp-2",title:s,children:s})}),e(N,{className:"relative",author:h,date:o,hoverReadingTime:!1,readingTimeShortcode:a.readingTimeShortcode}),l("div",{className:"flex items-center justify-between mt-auto",children:[e(v,{postData:d}),e(C,{href:d.link,image:(g=d.featuredImage)==null?void 0:g.node.sourceUrl})]})]}),c||m?e("div",{className:"p-4 sm:pt-8 sm:px-10",children:e(b,{disablePrev:!m,disableNext:!c,btnClassName:"w-11 h-11 text-xl",onClickNext:p,onClickPrev:i})}):null]}),e("div",{className:"w-full md:w-4/5 lg:w-2/3",children:e("a",{className:"block nc-CardLarge1__right ",href:x,children:e(f,{containerClassName:"aspect-w-16 aspect-h-12 sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9 relative",className:"absolute inset-0 object-cover rounded-3xl",src:(t==null?void 0:t.node.sourceUrl)||".",alt:s})})})]})},S=({className:r=""})=>l("div",{className:`nc-CardLarge1Skeleton relative flex flex-col-reverse md:flex-row justify-end ${r}`,children:[l("div",{className:"md:absolute z-10 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full -mt-8 md:mt-0 px-3 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5",children:[e("div",{children:l("div",{className:"p-4 sm:p-8 xl:py-14 md:px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 --  nc-dark-box-bg",children:[e(u,{width:"20%"}),e("h2",{className:"nc-card-title text-xl sm:text-2xl font-semibold ",children:e(u,{width:"80%"})}),e("div",{children:e("span",{className:"opacity-0",children:"22"})}),e("div",{className:" mt-auto",children:e(u,{width:"100%"})})]})}),e("div",{className:"p-4 sm:pt-8 sm:px-10",children:e(b,{btnClassName:"w-11 h-11 text-xl"})})]}),e("div",{className:"w-full md:w-4/5 lg:w-2/3",children:e("div",{children:e(f,{containerClassName:"aspect-w-16 aspect-h-12 sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9 relative",className:"absolute inset-0 object-cover rounded-3xl",src:"."})})})]}),U=({listPosts:r,isLoading:d})=>{const[p,i]=y.exports.useState(0),c=()=>{i(a=>a>=r.length-1?0:a+1)},m=()=>{i(a=>a===0?r.length-1:a-1)};return e("div",{children:d?e(S,{}):r.map((a,t)=>{var s,o,n,h;return p!==t?null:e(k,{onClickNext:((s=document.querySelector("html"))==null?void 0:s.getAttribute("dir"))==="rtl"?m:c,onClickPrev:((o=document.querySelector("html"))==null?void 0:o.getAttribute("dir"))==="rtl"?c:m,post:a.node,hasNext:((n=document.querySelector("html"))==null?void 0:n.getAttribute("dir"))==="rtl"?t>0:r.length>t+1,hasPrev:((h=document.querySelector("html"))==null?void 0:h.getAttribute("dir"))==="rtl"?r.length>t+1:t>0},t)})})};export{U as default};