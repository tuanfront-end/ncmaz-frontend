import{C as i}from"./Card11.f57bd986.js";import{C as m}from"./Card11Skeleton.93758789.js";import{C as e,a as s}from"./Card2Skeleton.56b864f9.js";import{a as c,j as a}from"./main.be12d964.js";import"./CategoryBadgeList.e1ddf7ab.js";import"./Badge.78922191.js";import"./PostCardLikeAndComment.1dd3a3e2.js";import"./PostCardLikeAction.c212dd00.js";import"./PostCardMeta.28979e3d.js";import"./formatDate.5c5d9c4d.js";import"./PostFeaturedMedia.9f2d6481.js";import"./NcImage.b533d3e4.js";import"./PostTypeFeaturedIcon.001f27bb.js";import"./index.f9467a8a.js";import"./ButtonPlayMusicRunningContainer.c755b40b.js";import"./LoadingVideo.1b2284ff.js";import"./PostMoreActionDropdown.583ac23d.js";import"./NcModal.c87514a8.js";import"./ButtonClose.98d37b71.js";import"./index.6d2dc887.js";import"./CardAuthor2.a38efd7d.js";const A=({listPosts:p=[],isLoading:t})=>c("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:[a("div",{className:"grid grid-cols-1 gap-6",children:t?[1,1].map((o,r)=>a(m,{ratio:"aspect-w-5 aspect-h-3"},r)):p.filter((o,r)=>r<3&&r>0).map((o,r)=>a(i,{ratio:"aspect-w-5 aspect-h-3",post:o.node},r))}),a("div",{className:"lg:col-span-2",children:t?a(e,{}):p[0]?a(s,{size:"large",post:p[0].node}):null}),a("div",{className:"grid gap-6 md:grid-cols-2 xl:grid-cols-1 md:col-span-3 xl:col-span-1",children:t?[1,1].map((o,r)=>a(m,{ratio:"aspect-w-5 aspect-h-3"},r)):p.filter((o,r)=>r<5&&r>=3).map((o,r)=>a(i,{ratio:"aspect-w-5 aspect-h-3",post:o.node},r))})]});export{A as default};