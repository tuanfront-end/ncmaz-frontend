import{D as Q}from"./DataStatementBlock.f46d2c27.js";import{U as S,J as f,b as T,a as y,j as r,c as G,N as L,aC as N}from"./main.242e7493.js";import{C as b}from"./Card11.31592357.js";import"./CategoryBadgeList.83b65b50.js";import"./Badge.0c507ae8.js";import"./PostCardLikeAndComment.68282140.js";import"./PostCardLikeAction.7ca04412.js";import"./PostCardMeta.c76a1d0c.js";import"./formatDate.81b7fc4e.js";import"./PostFeaturedMedia.702c00bf.js";import"./NcImage.61d0e16f.js";import"./PostTypeFeaturedIcon.b96fbdb3.js";import"./index.22fd9420.js";import"./ButtonPlayMusicRunningContainer.a93cebb4.js";import"./LoadingVideo.39be27b2.js";import"./PostMoreActionDropdown.e32f0cfe.js";import"./ButtonPrimaryDanger.6ff979f5.js";import"./NcModal.1fe88e44.js";import"./ButtonClose.bd5ef9cf.js";const H=({numberOfPosts:a,order:m,orderBy:l,categoriesId:p})=>{var i;let e="",o={};e=N,o={order:m,orderBy:l,first:Number(a),categoryIn:p};const d=S`
    ${e}
  `,[n,{loading:c,error:g,data:t}]=f(d,{variables:o}),{ref:u}=T(n,99,{freezeOnceVisible:!0,rootMargin:"1000px"}),s=((i=t==null?void 0:t.posts)==null?void 0:i.edges)||[];return y("div",{ref:u,children:[r(G,{className:"mb-10 text-neutral-900 dark:text-neutral-50",desc:"",children:L.relatedPosts}),r(Q,{loading:c,error:g,data:s}),r("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8",children:s.map((_,x)=>r(b,{post:_.node},x))})]})};export{H as default};
