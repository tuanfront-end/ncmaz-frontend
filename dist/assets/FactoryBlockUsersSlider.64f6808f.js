import{g as C,d as e,j as y,K as B,X as G,t as D,v as V,B as I,D as Q}from"./main.7162f953.js";import{G as T}from"./glide.esm.b495f968.js";import{C as b}from"./CardAuthorBox2.72067395.js";import{C as j}from"./CardAuthorBox.e279f5ff.js";import{u as E}from"./useGutenbergSectionWithGQLGetUsers.2cc01bdf.js";const R=({heading:p,subHeading:g,className:f="",authorNodes:i,authorCardName:l,blockLayoutStyle:c,isLoading:N,authorNodesLoading:A=[1,1,1,1,1,1,1,1,1],itemPerView:o=5,sliderAnimationDuration:n,sliderAutoplayTime:d,sliderHoverpause:u,sliderRewind:s,sliderStartAt:h})=>{var m;const a=C.exports.useRef(null),S={direction:((m=document.querySelector("html"))==null?void 0:m.getAttribute("dir"))==="rtl"?"rtl":"ltr",gap:32,bound:!0,perView:o,startAt:h,hoverpause:u,animationDuration:n||void 0,rewind:s||!0,breakpoints:{1440:{gap:24},1280:{perView:o-1,gap:24},1023:{perView:3,gap:24},767:{gap:20,perView:2},639:{perView:2,gap:20},500:{perView:1.2,gap:20}}};C.exports.useEffect(()=>{!a.current||new T(a.current,S).mount()},[i,a,o,n,d,u,s,h]);const r=c==="layout-2",v=t=>{switch(l){case"card1":return e(j,{className:r?"hover:!shadow-none":"",author:t});case"card2":return e(b,{className:r?"hover:!shadow-none":"",author:t});default:return e(b,{className:r?"hover:!shadow-none":"",author:t})}};return e("div",{className:`nc-SectionSliderNewAuthors ${f}`,children:y("div",{ref:a,children:[e(B,{isCenter:!r,desc:g,hasNextPrev:r,children:p}),e("div",{className:"glide__track","data-glide-el":"track",children:e("ul",{className:"glide__slides",children:N?null:i.map((t,w)=>e("li",{className:`glide__slide ${r?"":"pb-12 md:pb-16"}`,children:v(t.node)},w))})}),!r&&e(G,{btnClassName:"w-12 h-12",containerClassName:"justify-center"})]})})},H=({className:p="",domNode:g,apiSettings:f,sectionIndex:i})=>{const{graphQLvariables:l,graphQLData:c,settings:N}=f,A=!l&&!!c,{funcGqlQueryGetUsers:o,IS_SKELETON:n,LISTS_DATA:d,error:u}=E({graphQLvariables:l,graphQLData:c});let s=null;A?s=C.exports.useRef(null):s=D(o,i).ref;const h=()=>{const{hasBackground:a,subHeading:S,heading:r,userCardName:v,blockLayoutStyle:m,itemPerView:t,sliderAnimationDuration:w,sliderAutoplayTime:k,sliderHoverpause:x,sliderRewind:_,sliderStartAt:L}=N;return y("div",{className:`nc-FactoryBlockUsersSlider relative ${a?"py-16":""}  ${p}`,ref:s,children:[a&&e(I,{}),y("div",{className:"relative",children:[e(R,{authorCardName:v,blockLayoutStyle:m,authorNodes:d,heading:r,subHeading:S,isLoading:n,itemPerView:t,sliderAnimationDuration:w,sliderAutoplayTime:k,sliderHoverpause:x,sliderRewind:_,sliderStartAt:L}),e(Q,{className:"my-5",data:d,error:u,isSkeleton:n})]})]})};return V.createPortal(h(),g)};export{H as default};
