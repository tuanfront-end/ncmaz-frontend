import{r as _,j as e,a as w,c as $,b as I,R as L,B as Q,D as R}from"./main.e8298863.js";import{G as E}from"./glide.esm.b495f968.js";import{C as G,a as O,b as j,c as q,d as T,e as A,f as H,g as V}from"./CardCategory5Skeleton.e40dafa3.js";import{u as F}from"./useGutenbergSectionWithGQLGetTerms.2f180144.js";import"./NcImage.ef025992.js";import"./Badge.90cfb0a0.js";import"./index.7d8e0d1b.js";const M=({heading:h,subHeading:C,className:S="",itemClassName:l="",categories:i,categoryCardType:u="card3",isLoading:o,categoriesLoading:f=[1,1,1,1,1,1,1,1,1],itemPerView:a=5,sliderAnimationDuration:n,sliderAutoplayTime:g,sliderHoverpause:p,sliderRewind:y,sliderStartAt:d})=>{var m;const s=_.exports.useRef(null),N={direction:((m=document.querySelector("html"))==null?void 0:m.getAttribute("dir"))==="rtl"?"rtl":"ltr",gap:32,bound:!0,perView:a,startAt:o?0:d,hoverpause:p,animationDuration:n||void 0,rewind:y||!0,autoplay:o?!1:g||!1,breakpoints:{1440:{gap:24},1280:{perView:a-1,gap:24},1024:{perView:a-2,gap:24},768:{gap:20,perView:a-2},640:{perView:a-3,gap:20},500:{perView:1.2,gap:20}}};_.exports.useEffect(()=>{if(!s.current)return;const r=new E(s.current,N);return r.mount(),()=>r.destroy()},[i,s,a,n,g,p,y,d]);const v=(r,t)=>{const c=t<3?`#${t+1}`:void 0;switch(u){case"card2":return e(G,{className:"hover:!shadow-none",index:c,taxonomy:r.node});case"card3":return e(q,{taxonomy:r.node});case"card4":return e(j,{index:c,taxonomy:r.node});case"card5":return e(O,{taxonomy:r.node});default:return e(G,{className:"hover:!shadow-none",index:c,taxonomy:r.node})}},k=()=>{switch(u){case"card2":return e(T,{className:"hover:!shadow-none"});case"card3":return e(V,{});case"card4":return e(H,{});case"card5":return e(A,{});default:return e(T,{className:"hover:!shadow-none"})}};return e("div",{className:`nc-SectionSliderNewCategories relative ${S}`,children:w("div",{className:"flow-root",ref:s,children:[e($,{desc:C,hasNextPrev:!0,children:h}),e("div",{className:"glide__track","data-glide-el":"track",children:e("ul",{className:"glide__slides",children:o?f.map((r,t)=>e("li",{className:`glide__slide ${l}`,children:k()},t)):i.map((r,t)=>e("li",{className:`glide__slide ${l}`,children:v(r,t)},t))})})]})})},Z=({className:h="",domNode:C,apiSettings:S,sectionIndex:l})=>{const{graphQLvariables:i,graphQLData:u,settings:o,hasSSrInitData:f}=S,{IS_SKELETON:a,LIST_TERMS:n,error:g,funcGqlQueryGetTerms:p,DONOT_ANY_THING:y}=F({graphQLvariables:i,graphQLData:u,hasSSrInitData:f});let d=null;d=I(p,l).ref;const s=()=>{const{hasBackground:N,subHeading:v,heading:k,termCardName:m,itemPerView:r,sliderAnimationDuration:t,sliderAutoplayTime:c,sliderHoverpause:b,sliderRewind:B,sliderStartAt:D}=o,x=N;return w("div",{className:`nc-FactoryBlockTermsSlider relative ${x?"py-16":""} ${h}`,ref:d,children:[x&&e(Q,{}),w("div",{className:"relative",children:[e(M,{categories:n,heading:k,subHeading:v,categoryCardType:m,isLoading:a,itemPerView:r,sliderAnimationDuration:t,sliderAutoplayTime:c,sliderHoverpause:b,sliderRewind:B,sliderStartAt:D}),e(R,{data:n,isSkeleton:a,error:g})]})]})};return L.createPortal(s(),C)};export{Z as default};
