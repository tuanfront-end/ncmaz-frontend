import{D as Q}from"./DataStatementBlock.b9e58bd1.js";import{U as S,J as f,b as T,a as y,j as r,c as G,N as L,aC as N}from"./main.24165b1f.js";import{C as b}from"./Card11.1b3ea4cd.js";import"./CategoryBadgeList.78a20282.js";import"./Badge.30b73aae.js";import"./PostCardLikeAndComment.a1c4e6dd.js";import"./PostCardLikeAction.21e7db78.js";import"./PostCardMeta.21704c11.js";import"./formatDate.81b7fc4e.js";import"./PostFeaturedMedia.61502b9a.js";import"./NcImage.6e2a5f3b.js";import"./PostTypeFeaturedIcon.766fe817.js";import"./index.caa5d361.js";import"./ButtonPlayMusicRunningContainer.409ee567.js";import"./LoadingVideo.ee2cb9ed.js";import"./PostMoreActionDropdown.1aa9ed1f.js";import"./ButtonPrimaryDanger.2f1fc666.js";import"./NcModal.68e8d06c.js";import"./ButtonClose.090f6f33.js";const H=({numberOfPosts:a,order:m,orderBy:l,categoriesId:p})=>{var i;let e="",o={};e=N,o={order:m,orderBy:l,first:Number(a),categoryIn:p};const d=S`
    ${e}
  `,[n,{loading:c,error:g,data:t}]=f(d,{variables:o}),{ref:u}=T(n,99,{freezeOnceVisible:!0,rootMargin:"1000px"}),s=((i=t==null?void 0:t.posts)==null?void 0:i.edges)||[];return y("div",{ref:u,children:[r(G,{className:"mb-10 text-neutral-900 dark:text-neutral-50",desc:"",children:L.relatedPosts}),r(Q,{loading:c,error:g,data:s}),r("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8",children:s.map((_,x)=>r(b,{post:_.node},x))})]})};export{H as default};
