import{D as Q}from"./DataStatementBlock.cd636e86.js";import{ah as S,aa as f,b as T,a as y,j as r,c as G,N as L,aM as N}from"./main.69fc0c0d.js";import{C as b}from"./Card11.7c86d23b.js";import"./CategoryBadgeList.0e0d781b.js";import"./Badge.3ad1da2b.js";import"./PostCardLikeAndComment.37477bee.js";import"./PostCardLikeAction.d57f7280.js";import"./PostCardMeta.89bbec1e.js";import"./formatDate.5c5d9c4d.js";import"./PostFeaturedMedia.d89b4bd8.js";import"./NcImage.3590ec63.js";import"./PostTypeFeaturedIcon.66b10922.js";import"./index.f6d086fe.js";import"./ReactPlayer.8286d711.js";import"./ButtonPlayMusicRunningContainer.46292ffb.js";import"./LoadingVideo.4f8e22cb.js";import"./PostMoreActionDropdown.63996f36.js";import"./NcModal.fbdef1a7.js";import"./ButtonClose.0f8793a4.js";const H=({numberOfPosts:i,order:m,orderBy:l,categoriesId:p})=>{var a;let e="",o={};e=N,o={order:m,orderBy:l,first:Number(i),categoryIn:p};const d=S`
    ${e}
  `,[n,{loading:c,error:g,data:t}]=f(d,{variables:o}),{ref:u}=T(n,99,{freezeOnceVisible:!0,rootMargin:"1000px"}),s=((a=t==null?void 0:t.posts)==null?void 0:a.edges)||[];return y("div",{ref:u,children:[r(G,{className:"mb-10 text-neutral-900 dark:text-neutral-50",desc:"",children:L.relatedPosts}),r(Q,{loading:c,error:g,data:s}),r("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8",children:s.map((_,x)=>r(b,{post:_.node},x))})]})};export{H as default};