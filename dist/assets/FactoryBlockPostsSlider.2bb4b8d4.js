import{g as m,q,t as E,v as $,j as w,d as e,B as M,H as K,D as z,X as J,y as W,z as X,A as Y,G as U,I as Z,J as ee,K as k}from"./main.4ac48045.js";import{G as ae}from"./glide.esm.b495f968.js";import{c as y,C as re,a as se,b as te,g as _,d as ne,e as de,f as oe}from"./Card14Skeleton.633346dd.js";const he=({className:P="",domNode:T,apiSettings:t,sectionIndex:x})=>{var N;const n=m.exports.useRef(null),{graphQLvariables:h,settings:r,graphQLData:g}=t,A=!h&&!!g,{funcGqlQueryGetPosts:V,loading:ce,IS_SKELETON:d,LISTS_POSTS:v,DONOT_ANY_THING:C,data:G,error:H,fetchMore:ie,setTabActiveId:f,tabActiveId:p}=q({graphQLData:g,graphQLvariables:h});let i=null;A?i=m.exports.useRef(null):i=E(V,x).ref;const I=a=>{if(a===-1){f(a);return}a.id!==p&&f(a.id)},s=r.blockLayoutStyle==="layout-2"||r.showFilterTab,o=r.itemPerView||5,D={direction:((N=document.querySelector("html"))==null?void 0:N.getAttribute("dir"))==="rtl"?"rtl":"ltr",perView:o,startAt:d||C?0:r.sliderStartAt,hoverpause:r.sliderHoverpause,animationDuration:r.sliderAnimationDuration||void 0,rewind:r.sliderRewind||!0,autoplay:d||C?!1:r.sliderAutoplayTime||!1,gap:32,bound:!0,breakpoints:{1440:{gap:24},1280:{perView:o-1,gap:24},1023:{perView:o-2||1.2,gap:24},767:{perView:o-2||1.2,gap:20},639:{perView:1.2,gap:20}}};m.exports.useEffect(()=>{!n.current||new ae(n.current,D).mount()},[G,n,r]);const L=a=>{switch(t.settings.postCardName){case"card4":return e(y,{post:a,className:s?void 0:"hover:!shadow-sm"});case"card7":return e(te,{post:a});case"card9":return e(Y,{post:a});case"card10":return e(X,{post:a});case"card10V2":return e(se,{post:a});case"card11":return e(W,{post:a,className:s?void 0:"hover:!shadow-sm"});case"card14":return e(re,{post:a});default:return e(y,{className:s?void 0:"hover:!shadow-sm",post:a})}},B=()=>{switch(t.settings.postCardName){case"card4":return e(_,{className:s?void 0:"hover:!shadow-sm"});case"card7":return e(oe,{});case"card9":return e(ee,{});case"card10":return e(Z,{});case"card10V2":return e(de,{});case"card11":return e(U,{className:s?void 0:"hover:!shadow-sm"});case"card14":return e(ne,{});default:return e(_,{className:s?void 0:"hover:!shadow-sm"})}},F=()=>{const{heading:a,subHeading:c,blockLayoutStyle:l}=t.settings;return l==="layout-1"?e(k,{desc:c,hasNextPrev:!0,children:a}):e(k,{desc:c,isCenter:!0,children:a})},O=()=>{const{hasBackground:a,subHeading:c,heading:l,showFilterTab:Q,categories:R,viewMoreHref:j}=r,S=a;return w("div",{className:`nc-FactoryBlockPostsSlider relative  ${S?"py-16":""}  ${P}`,ref:i,children:[S&&e(M,{}),w("div",{className:"relative ",ref:n,children:[Q?e(K,{tabActiveId:p,tabs:R,viewMoreHref:j,heading:l,subHeading:c,onClickTab:I}):F(),e("div",{className:"glide__track","data-glide-el":"track",children:e("ul",{className:"glide__slides",children:d?[1,1,1,1,1,1,1,1].map((b,u)=>e("li",{className:`glide__slide ${s?"pb-12 xl:pb-16":""}`,children:B()},u)):v.map((b,u)=>e("li",{className:`glide__slide ${s?"pb-12 xl:pb-16":""}`,children:L(b.node)},u))})}),e(z,{className:"my-5",data:v,error:H,isSkeleton:d}),s&&e(J,{btnClassName:"w-12 h-12",containerClassName:"justify-center"})]})]})};return $.createPortal(O(),T)};export{he as default};