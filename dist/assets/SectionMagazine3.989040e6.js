import{C as m,a as i}from"./Card2Skeleton.31f9aafa.js";import{C as s}from"./Card9.bccc8855.js";import{C as e}from"./Card9Skeleton.9929d022.js";import{b as c,j as p}from"./main.85963571.js";import"./PostCardLikeAndComment.d87c71d1.js";import"./PostCardLikeAction.6310cc12.js";import"./CardAuthor2.a9c62591.js";import"./formatDate.5c5d9c4d.js";import"./CategoryBadgeList.ed943775.js";import"./Badge.29b60f9e.js";import"./PostFeaturedMedia.8d2a5d59.js";import"./NcImage.bea75434.js";import"./NextPrev.2a5236bd.js";import"./PostTypeFeaturedIcon.3109746b.js";import"./useIntersectionObserver.e91dfa75.js";import"./index.665fa695.js";import"./ReactPlayer.88e1718f.js";import"./ButtonPlayMusicRunningContainer.15579732.js";import"./LoadingVideo.a387bd76.js";import"./index.198f6b73.js";const y=({listPosts:o,isLoading:a})=>c("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-8",children:[a?p(m,{}):o[0]?p(i,{size:"large",post:o[0].node}):null,p("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6 2xl:gap-8",children:a?[1,1,1,1].map((t,r)=>p(e,{ratio:"aspect-w-5 aspect-h-4 sm:aspect-w-3 sm:aspect-h-3"},r)):o.filter((t,r)=>r<5&&r>=1).map((t,r)=>p(s,{ratio:"aspect-w-5 aspect-h-4 sm:aspect-w-3 sm:aspect-h-3",post:t.node},r))})]});export{y as default};