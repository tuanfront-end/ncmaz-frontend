import{C as i}from"./Card11.7c86d23b.js";import{C as m}from"./Card11Skeleton.a9a0eaa9.js";import{C as e,a as s}from"./Card2Skeleton.20639b83.js";import{a as c,j as o}from"./main.69fc0c0d.js";import"./CategoryBadgeList.0e0d781b.js";import"./Badge.3ad1da2b.js";import"./PostCardLikeAndComment.37477bee.js";import"./PostCardLikeAction.d57f7280.js";import"./PostCardMeta.89bbec1e.js";import"./formatDate.5c5d9c4d.js";import"./PostFeaturedMedia.d89b4bd8.js";import"./NcImage.3590ec63.js";import"./PostTypeFeaturedIcon.66b10922.js";import"./index.f6d086fe.js";import"./ReactPlayer.8286d711.js";import"./ButtonPlayMusicRunningContainer.46292ffb.js";import"./LoadingVideo.4f8e22cb.js";import"./PostMoreActionDropdown.63996f36.js";import"./NcModal.fbdef1a7.js";import"./ButtonClose.0f8793a4.js";import"./index.bfc87e83.js";import"./CardAuthor2.d473eb27.js";const B=({listPosts:p=[],isLoading:t})=>c("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:[o("div",{className:"grid grid-cols-1 gap-6",children:t?[1,1].map((a,r)=>o(m,{ratio:"aspect-w-5 aspect-h-3"},r)):p.filter((a,r)=>r<3&&r>0).map((a,r)=>o(i,{ratio:"aspect-w-5 aspect-h-3",post:a.node},r))}),o("div",{className:"lg:col-span-2",children:t?o(e,{}):p[0]?o(s,{size:"large",post:p[0].node}):null}),o("div",{className:"grid gap-6 md:grid-cols-2 xl:grid-cols-1 md:col-span-3 xl:col-span-1",children:t?[1,1].map((a,r)=>o(m,{ratio:"aspect-w-5 aspect-h-3"},r)):p.filter((a,r)=>r<5&&r>=3).map((a,r)=>o(i,{ratio:"aspect-w-5 aspect-h-3",post:a.node},r))})]});export{B as default};
