import{C as m,a as i}from"./Card2Skeleton.ca38fc9f.js";import{C as s}from"./Card9.f2142799.js";import{C as e}from"./Card9Skeleton.2c1c61d6.js";import{a as c,j as a}from"./main.3380b1f5.js";import"./PostCardLikeAndComment.443d34b5.js";import"./PostCardLikeAction.1d43f9ab.js";import"./CardAuthor2.159fd514.js";import"./formatDate.5c5d9c4d.js";import"./CategoryBadgeList.521bf5f6.js";import"./Badge.3cf53dd4.js";import"./PostFeaturedMedia.0347b26f.js";import"./NcImage.b55b9c44.js";import"./PostTypeFeaturedIcon.0dd313e6.js";import"./index.00c2f9f3.js";import"./ReactPlayer.27b94619.js";import"./ButtonPlayMusicRunningContainer.543a94eb.js";import"./LoadingVideo.7638ad52.js";import"./index.f12587f3.js";const b=({listPosts:p,isLoading:t})=>c("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-8",children:[t?a(m,{}):p[0]?a(i,{size:"large",post:p[0].node}):null,a("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6 2xl:gap-8",children:t?[1,1,1,1].map((o,r)=>a(e,{ratio:"aspect-w-5 aspect-h-4 sm:aspect-w-3 sm:aspect-h-3"},r)):p.filter((o,r)=>r<5&&r>=1).map((o,r)=>a(s,{ratio:"aspect-w-5 aspect-h-4 sm:aspect-w-3 sm:aspect-h-3",post:o.node},r))})]});export{b as default};