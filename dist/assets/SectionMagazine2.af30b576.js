import{C as i}from"./Card11.3aedbf0d.js";import{C as m}from"./Card11Skeleton.1a848029.js";import{C as e,a as s}from"./Card2Skeleton.2f117cc0.js";import{a as c,j as o}from"./main.6963f843.js";import"./CategoryBadgeList.6c0d0692.js";import"./Badge.cc676787.js";import"./PostCardLikeAndComment.0ebbecec.js";import"./PostCardLikeAction.ac74f54f.js";import"./PostCardMeta.f5c65281.js";import"./formatDate.5c5d9c4d.js";import"./PostFeaturedMedia.3ed3bf64.js";import"./NcImage.a50a6fbd.js";import"./PostTypeFeaturedIcon.6b69a84c.js";import"./index.6b2a6d08.js";import"./ButtonPlayMusicRunningContainer.688e982b.js";import"./LoadingVideo.ab0bac76.js";import"./PostMoreActionDropdown.981856fc.js";import"./ButtonPrimaryDanger.69065814.js";import"./NcModal.10918aea.js";import"./ButtonClose.2e45d2ef.js";import"./index.3f4c9966.js";import"./CardAuthor2.e2c79311.js";const B=({listPosts:p=[],isLoading:t})=>c("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:[o("div",{className:"grid grid-cols-1 gap-6",children:t?[1,1].map((a,r)=>o(m,{ratio:"aspect-w-5 aspect-h-3"},r)):p.filter((a,r)=>r<3&&r>0).map((a,r)=>o(i,{ratio:"aspect-w-5 aspect-h-3",post:a.node},r))}),o("div",{className:"lg:col-span-2",children:t?o(e,{}):p[0]?o(s,{size:"large",post:p[0].node}):null}),o("div",{className:"grid gap-6 md:grid-cols-2 xl:grid-cols-1 md:col-span-3 xl:col-span-1",children:t?[1,1].map((a,r)=>o(m,{ratio:"aspect-w-5 aspect-h-3"},r)):p.filter((a,r)=>r<5&&r>=3).map((a,r)=>o(i,{ratio:"aspect-w-5 aspect-h-3",post:a.node},r))})]});export{B as default};
