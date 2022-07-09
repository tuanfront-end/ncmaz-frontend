var Y=Object.defineProperty,R=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var D=(n,t,s)=>t in n?Y(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,p=(n,t)=>{for(var s in t||(t={}))ae.call(t,s)&&D(n,s,t[s]);if(A)for(var s of A(t))re.call(t,s)&&D(n,s,t[s]);return n},S=(n,t)=>R(n,ee(t));import{a as d,j as e,P as te,u as se,r as ne,b as de,R as ce,B as le,H as ie,D as oe,N as H,c as G}from"./main.be12d964.js";import{C as me,a as ue,b as he,c as fe,d as pe,e as Ce,f as xe,g as be}from"./Card14Skeleton.85527f59.js";import{C as ge}from"./Card9.f445fa6e.js";import{C as Ne,a as ke}from"./Card10Skeleton.7e49596c.js";import{C as we}from"./Card11.f57bd986.js";import{C as ve,a as Se}from"./Card15PodcastSkeleton.da3254ee.js";import{N as Q}from"./NcImage.b533d3e4.js";import{P as ye}from"./PostCardMeta.28979e3d.js";import{P as Pe}from"./PostCardLikeAndComment.1dd3a3e2.js";import{C as Te}from"./CategoryBadgeList.e1ddf7ab.js";import{P as Ie}from"./PostTypeFeaturedIcon.001f27bb.js";import{B as j}from"./ButtonPrimary.c03933c8.js";import{S as C}from"./index.6d2dc887.js";import{C as Le}from"./Card9Skeleton.ac79c01c.js";import{C as Be}from"./Card11Skeleton.93758789.js";import"./CardAuthor2.a38efd7d.js";import"./formatDate.5c5d9c4d.js";import"./PostCardLikeAction.c212dd00.js";import"./PostFeaturedMedia.9f2d6481.js";import"./index.f9467a8a.js";import"./ButtonPlayMusicRunningContainer.c755b40b.js";import"./LoadingVideo.1b2284ff.js";import"./PostMoreActionDropdown.583ac23d.js";import"./NcModal.c87514a8.js";import"./ButtonClose.98d37b71.js";import"./Badge.78922191.js";const _e=({className:n="",post:t})=>{var h,i;const{title:s,link:m,featuredImage:c,excerpt:l,categories:f,postFormats:u,ncPostMetaData:x}=t,b=(h=u==null?void 0:u.edges[0])==null?void 0:h.node.slug;return d("div",{className:`nc-Card3 relative flex sm:items-center rounded-3xl group sm:p-5 2xl:p-6 [ sm:nc-box-has-hover ] [ sm:nc-dark-box-bg-has-hover ]  ${n}`,"data-nc-id":"Card3",children:[e("a",{href:m,className:"absolute inset-0"}),d("div",{className:"w-full flex flex-col flex-grow",children:[d("div",{className:"space-y-2 sm:space-y-3.5 mb-3 sm:mb-4",children:[e(Te,{categories:f}),d("div",{children:[e("h3",{className:"nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base lg:text-xl",children:e("a",{href:m,className:"line-clamp-2",title:s,dangerouslySetInnerHTML:{__html:s||""}})}),l&&e("div",{className:"hidden sm:block sm:mt-2",children:e("span",{className:"text-neutral-500 dark:text-neutral-400 text-base line-clamp-1",dangerouslySetInnerHTML:{__html:l}})})]}),e(ye,{className:"w-full",meta:p({},t)})]}),d("div",{className:"flex items-center flex-wrap justify-between mt-auto",children:[e(Pe,{postData:t}),d("div",{className:"flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ",children:[e("span",{dangerouslySetInnerHTML:{__html:x.readingTimeShortcode||""}}),e(te,{href:t.link,image:(i=t.featuredImage)==null?void 0:i.node.sourceUrl})]})]})]}),e("div",{className:"block flex-shrink-0 ml-5 w-20 sm:w-44 2xl:w-56 ",children:d("a",{href:m,className:"w-full block h-0 aspect-h-16 aspect-w-16 rounded-md sm:rounded-2xl overflow-hidden z-0",children:[e(Q,{containerClassName:"absolute inset-0",src:(c==null?void 0:c.node.sourceUrl)||".",alt:s}),e("span",{children:e(Ie,{className:"absolute left-2 bottom-2",postType:b,wrapSize:"w-8 h-8",iconSize:"w-4 h-4"})})]})})]})},Ae=({className:n="h-full"})=>d("div",{className:`nc-Card3Skeleton relative flex items-center rounded-[40px] group ${n}`,"data-nc-id":"Card3Skeleton",children:[d("div",{className:"flex flex-col flex-grow overflow-hidden",children:[d("div",{className:"space-y-3.5 mb-4",children:[e(C,{width:"30%"}),d("div",{children:[e("h3",{className:"nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-xl",children:e(C,{width:"80%"})}),e("div",{className:"hidden sm:block sm:mt-2",children:e("span",{className:"text-neutral-500 dark:text-neutral-400 text-base line-clamp-1",children:e(C,{width:"90%"})})})]}),e(C,{width:"90%"})]}),e("div",{className:"flex items-center flex-wrap justify-between mt-auto opacity-0",children:"zz"})]}),e("div",{className:"block flex-shrink-0 ml-5 w-20 sm:w-44 2xl:w-56 overflow-hidden",children:e("div",{className:"w-full block h-0 aspect-h-16 aspect-w-16 rounded-md sm:rounded-2xl overflow-hidden",children:e(Q,{containerClassName:"absolute inset-0",src:"."})})})]}),da=({className:n="",domNode:t,apiSettings:s,sectionIndex:m})=>{const{graphQLvariables:c,settings:l,graphQLData:f}=s,u=!c&&!!f,{funcGqlQueryGetPosts:x,loading:b,IS_SKELETON:h,LISTS_POSTS:i,data:g,error:z,fetchMore:y,setTabActiveId:P,tabActiveId:T}=se({graphQLData:f,graphQLvariables:c});let N=null;u?N=ne.exports.useRef(null):N=de(x,m).ref;const{hasBackground:F,heading:k,subHeading:w,viewMoreHref:V,gridClass:$,gridClassCustom:I,showFilterTab:E,blockLayoutStyle:M,enableLoadMoreButton:O,loadMoreButtonHref:v,filterDataBy:L}=l,q=a=>{if(a===-1){P(a);return}a.id!==T&&P(a.id)},U=(a,{fetchMoreResult:r})=>{var o,B,_;return(o=r==null?void 0:r.posts)!=null&&o.edges.length?S(p({},r),{posts:S(p({},r.posts),{edges:[...(B=a==null?void 0:a.posts)==null?void 0:B.edges,...(_=r==null?void 0:r.posts)==null?void 0:_.edges]})}):a},K=a=>{if(!y||L==="by_specific"||!!v)return;a.preventDefault();const r=i.map(o=>o.node.postId);y({variables:{notIn:r},updateQuery:U})},W=a=>{switch(s.settings.postCardName){case"card3":return e("div",{className:"w-full",children:e(_e,{post:a,className:"mb-3 sm:mb-0"})},a.id);case"card4":return e(fe,{post:a},a.id);case"card7":return e(he,{post:a,ratio:"aspect-w-5 aspect-h-5"},a.id);case"card9":return e(ge,{post:a},a.id);case"card10":return e(Ne,{post:a},a.id);case"card10V2":return e(ue,{post:a},a.id);case"card11":return e(we,{post:a},a.id);case"card14":return e(me,{post:a},a.id);case"card15Podcast":return e(ve,{post:a},a.id);default:return null}},Z=(a,r)=>{switch(s.settings.postCardName){case"card3":return e(Ae,{className:"p-3 sm:p-5 2xl:p-6 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ]"},r);case"card4":return e(be,{},r);case"card7":return e(xe,{ratio:"aspect-w-5 aspect-h-5"},r);case"card9":return e(Le,{},r);case"card10":return e(ke,{},r);case"card10V2":return e(Ce,{},r);case"card11":return e(Be,{},r);case"card14":return e(pe,{},r);case"card15Podcast":return e(Se,{},r);default:return null}},J=()=>M==="layout-1"?e(G,{desc:w,children:k}):e(G,{desc:w,isCenter:!0,children:k}),X=()=>{var r;const a=F;return d("div",{className:`nc-FactoryBlockPostsGrid relative ${a?"py-16":""}  ${n}`,ref:N,children:[a&&e(le,{}),d("div",{className:"relative",children:[E?e(ie,{tabActiveId:T,tabs:l.categories,viewMoreHref:V,heading:k,subHeading:w,onClickTab:q}):J(),e("div",{className:`grid grid-cols-1 gap-6 2xl:gap-8 ${I||$}`,children:h?Array.from(Array(Number(l.expectedNumberResults||8)||8).keys()).map(Z):i.map(o=>W(o.node))}),e(oe,{className:"my-5",data:i,error:z,isSkeleton:h}),O?v?e("div",{className:"flex mt-12 md:mt-20 justify-center items-center",children:e(j,{href:v,children:H.showMeMore})}):L!=="by_specific"&&((r=g==null?void 0:g.posts.pageInfo)==null?void 0:r.hasNextPage)?e("div",{className:"flex mt-12 md:mt-20 justify-center items-center",children:e(j,{onClick:K,loading:b,children:H.showMeMore})}):null:null]})]})};return ce.createPortal(X(),t)};export{da as default};