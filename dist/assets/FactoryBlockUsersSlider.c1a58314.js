import{g as k,d as e,j as y,K as L,X as I,t as T,v as V,B as Q,D as $}from"./main.4ac48045.js";import{G as j}from"./glide.esm.b495f968.js";import{C as A,a as b}from"./CardAuthorBox2Skeleton.d3922503.js";import{C as E,a as O}from"./CardAuthorBoxSkeleton.406e6dc0.js";import{u as R}from"./useGutenbergSectionWithGQLGetUsers.6c3d8ae7.js";const U=({heading:N,subHeading:f,className:S="",authorNodes:d,authorCardName:o,blockLayoutStyle:u,isLoading:v,authorNodesLoading:w=[1,1,1,1,1,1,1,1,1],itemPerView:n=5,sliderAnimationDuration:l,sliderAutoplayTime:i,sliderHoverpause:h,sliderRewind:m,sliderStartAt:s})=>{var g;const t=k.exports.useRef(null),p={direction:((g=document.querySelector("html"))==null?void 0:g.getAttribute("dir"))==="rtl"?"rtl":"ltr",gap:32,bound:!0,perView:n,startAt:s,hoverpause:h,animationDuration:l||void 0,rewind:m||!0,autoplay:i||!1,breakpoints:{1440:{gap:24},1280:{perView:n-1,gap:24},1023:{perView:3,gap:24},767:{gap:20,perView:2},639:{perView:2,gap:20},500:{perView:1.2,gap:20}}};k.exports.useEffect(()=>{!t.current||new j(t.current,p).mount()},[d,t,n,l,i,h,m,s]);const r=u==="layout-2",C=a=>{switch(o){case"card1":return e(E,{className:r?"hover:!shadow-none":"",author:a});case"card2":return e(A,{className:r?"hover:!shadow-none":"",author:a});default:return e(A,{className:r?"hover:!shadow-none":"",author:a})}},_=()=>{switch(o){case"card1":return e(O,{className:r?"hover:!shadow-none":""});case"card2":return e(b,{className:r?"hover:!shadow-none":""});default:return e(b,{className:r?"hover:!shadow-none":""})}};return e("div",{className:`nc-SectionSliderNewAuthors ${S}`,children:y("div",{ref:t,children:[e(L,{isCenter:!r,desc:f,hasNextPrev:r,children:N}),e("div",{className:"glide__track","data-glide-el":"track",children:e("ul",{className:"glide__slides",children:v?w.map((a,c)=>e("li",{className:`glide__slide ${r?"":"pb-12 md:pb-16"}`,children:_()},c)):d.map((a,c)=>e("li",{className:`glide__slide ${r?"":"pb-12 md:pb-16"}`,children:C(a.node)},c))})}),!r&&e(I,{btnClassName:"w-12 h-12",containerClassName:"justify-center"})]})})},M=({className:N="",domNode:f,apiSettings:S,sectionIndex:d})=>{const{graphQLvariables:o,graphQLData:u,settings:v}=S,w=!o&&!!u,{funcGqlQueryGetUsers:n,IS_SKELETON:l,LISTS_DATA:i,error:h,DONOT_ANY_THING:m}=R({graphQLvariables:o,graphQLData:u});let s=null;w?s=k.exports.useRef(null):s=T(n,d).ref;const t=()=>{const{hasBackground:p,subHeading:r,heading:C,userCardName:_,blockLayoutStyle:g,itemPerView:a,sliderAnimationDuration:c,sliderAutoplayTime:x,sliderHoverpause:B,sliderRewind:G,sliderStartAt:D}=v;return y("div",{className:`nc-FactoryBlockUsersSlider relative ${p?"py-16":""}  ${N}`,ref:s,children:[p&&e(Q,{}),y("div",{className:"relative",children:[!m&&e(U,{authorCardName:_,blockLayoutStyle:g,authorNodes:i,heading:C,subHeading:r,isLoading:l,itemPerView:a,sliderAnimationDuration:c,sliderAutoplayTime:x,sliderHoverpause:B,sliderRewind:G,sliderStartAt:D}),e($,{className:"my-5",data:i,error:h,isSkeleton:l})]})]})};return V.createPortal(t(),f)};export{M as default};