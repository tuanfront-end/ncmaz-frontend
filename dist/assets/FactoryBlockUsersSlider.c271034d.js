import{r as y,j as e,b,a as I}from"./main.85963571.js";import{B as L}from"./BackgroundSection.8495b948.js";import{H as T}from"./Heading.7fcb7157.js";import{G as V}from"./glide.esm.b495f968.js";import{C as k,a as A}from"./CardAuthorBox2Skeleton.4310e0db.js";import{N as Q}from"./NextPrev.2a5236bd.js";import{C as $,a as j}from"./CardAuthorBoxSkeleton.b97c01df.js";import{D as E}from"./DataStatementBlockV2.f13bb1a3.js";import{u as H}from"./useGqlQuerySection.603be7ff.js";import{u as O}from"./useGutenbergSectionWithGQLGetUsers.b66f296b.js";import"./NcImage.bea75434.js";import"./index.198f6b73.js";import"./EmptyState.a9cc8fa3.js";import"./useIntersectionObserver.e91dfa75.js";import"./useQuery.02694860.js";import"./useLazyQuery.f1e3d5e8.js";const R=({heading:g,subHeading:S,className:v="",authorNodes:u,authorCardName:o,blockLayoutStyle:m,isLoading:n,authorNodesLoading:w=[1,1,1,1,1,1,1,1,1],itemPerView:i=5,sliderAnimationDuration:l,sliderAutoplayTime:c,sliderHoverpause:p,sliderRewind:h,sliderStartAt:t})=>{var N;const s=y.exports.useRef(null),f={direction:((N=document.querySelector("html"))==null?void 0:N.getAttribute("dir"))==="rtl"?"rtl":"ltr",gap:32,bound:!0,perView:i,startAt:n?0:t,hoverpause:p,animationDuration:l||void 0,rewind:h||!0,autoplay:n?!1:c||!1,breakpoints:{1440:{gap:24},1280:{perView:i-1,gap:24},1023:{perView:3,gap:24},767:{gap:20,perView:2},639:{perView:2,gap:20},500:{perView:1.2,gap:20}}};y.exports.useEffect(()=>{if(!s.current)return;const a=new V(s.current,f);return a.mount(),()=>a.destroy()},[u,s,i,l,c,p,h,t]);const r=m==="layout-2",C=a=>{switch(o){case"card1":return e($,{className:r?"hover:!shadow-none":"",author:a});case"card2":return e(k,{className:r?"hover:!shadow-none":"",author:a});default:return e(k,{className:r?"hover:!shadow-none":"",author:a})}},_=()=>{switch(o){case"card1":return e(j,{className:r?"hover:!shadow-none":""});case"card2":return e(A,{className:r?"hover:!shadow-none":""});default:return e(A,{className:r?"hover:!shadow-none":""})}};return e("div",{className:`nc-SectionSliderNewAuthors ${v}`,children:b("div",{ref:s,children:[e(T,{isCenter:!r,desc:S,hasNextPrev:r,children:g}),e("div",{className:"glide__track","data-glide-el":"track",children:e("ul",{className:"glide__slides",children:n?w.map((a,d)=>e("li",{className:`glide__slide ${r?"":"pb-12 md:pb-16"}`,children:_()},d)):u.map((a,d)=>e("li",{className:`glide__slide ${r?"":"pb-12 md:pb-16"}`,children:C(a.node)},d))})}),!r&&e(Q,{btnClassName:"w-12 h-12",containerClassName:"justify-center"})]})})},se=({className:g="",domNode:S,apiSettings:v,sectionIndex:u})=>{const{graphQLvariables:o,graphQLData:m,settings:n}=v,w=!o&&!!m,{funcGqlQueryGetUsers:i,IS_SKELETON:l,LISTS_DATA:c,error:p,DONOT_ANY_THING:h}=O({graphQLvariables:o,graphQLData:m});let t=null;w?t=y.exports.useRef(null):t=H(i,u).ref;const s=()=>{const{hasBackground:f,subHeading:r,heading:C,userCardName:_,blockLayoutStyle:N,itemPerView:a,sliderAnimationDuration:d,sliderAutoplayTime:x,sliderHoverpause:B,sliderRewind:G,sliderStartAt:D}=n;return b("div",{className:`nc-FactoryBlockUsersSlider relative ${f?"py-16":""}  ${g}`,ref:t,children:[f&&e(L,{}),b("div",{className:"relative",children:[!h&&e(R,{authorCardName:_,blockLayoutStyle:N,authorNodes:c,heading:C,subHeading:r,isLoading:l,itemPerView:a,sliderAnimationDuration:d,sliderAutoplayTime:x,sliderHoverpause:B,sliderRewind:G,sliderStartAt:D}),e(E,{className:"my-5",data:c,error:p,isSkeleton:l})]})]})};return I.createPortal(s(),S)};export{se as default};