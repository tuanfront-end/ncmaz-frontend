import{D as S}from"./DataStatementBlock.dea674e5.js";import{T,J as f,b as y,a as G,j as r,c as L,N,aB as A}from"./main.e8298863.js";import{C as E}from"./Card11.4f4343bd.js";import"./CategoryBadgeList.6868c8f7.js";import"./Badge.90cfb0a0.js";import"./PostCardLikeAndComment.019e08b7.js";import"./PostCardLikeAction.dd967694.js";import"./PostCardMeta.82e9ad0d.js";import"./formatDate.81b7fc4e.js";import"./PostFeaturedMedia.94413ca2.js";import"./NcImage.ef025992.js";import"./PostTypeFeaturedIcon.6c37a8b4.js";import"./index.5fba03b7.js";import"./ButtonPlayMusicRunningContainer.399afe6f.js";import"./LoadingVideo.ed7ab389.js";import"./PostMoreActionDropdown.64817bf4.js";import"./ButtonPrimaryDanger.675522df.js";import"./NcModal.ea7062e8.js";import"./ButtonClose.b9046a3c.js";const J=({numberOfPosts:m,order:l,orderBy:p,categoriesId:n,currentPostDatabaseId:o})=>{var a;let e="",s={};e=A,s={order:l,orderBy:p,first:Number(m),categoryIn:n,notIn:o?[o]:[]};const d=T`
    ${e}
  `,[c,{loading:g,error:u,data:t}]=f(d,{variables:s}),{ref:_}=y(c,99,void 0,{freezeOnceVisible:!0,rootMargin:"1000px"}),i=((a=t==null?void 0:t.posts)==null?void 0:a.edges)||[];return G("div",{ref:_,children:[r(L,{className:"mb-10 text-neutral-900 dark:text-neutral-50",desc:"",children:N.relatedPosts}),r(S,{loading:g,error:u,data:i}),r("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8",children:i.map((x,Q)=>r(E,{post:x.node},Q))})]})};export{J as default};
