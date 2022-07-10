import{r as m,u as E,b as $,R as q,a as w,j as e,B as M,H as K,D as W,f as Y,c as k}from"./main.6963f843.js";import{G as z}from"./glide.esm.b495f968.js";import{c as y,C as J,a as U,b as X,g as _,d as Z,e as ee,f as re}from"./Card14Skeleton.e88dbbcf.js";import{C as ae}from"./Card9.49876428.js";import{C as te,a as se}from"./Card10Skeleton.dda99ab1.js";import{C as oe}from"./Card11.3aedbf0d.js";import{C as ie}from"./Card9Skeleton.530675b2.js";import{C as ne}from"./Card11Skeleton.1a848029.js";import"./CardAuthor2.e2c79311.js";import"./formatDate.5c5d9c4d.js";import"./CategoryBadgeList.6c0d0692.js";import"./Badge.cc676787.js";import"./PostCardLikeAction.ac74f54f.js";import"./PostFeaturedMedia.3ed3bf64.js";import"./NcImage.a50a6fbd.js";import"./PostTypeFeaturedIcon.6b69a84c.js";import"./index.6b2a6d08.js";import"./ButtonPlayMusicRunningContainer.688e982b.js";import"./LoadingVideo.ab0bac76.js";import"./index.3f4c9966.js";import"./PostCardLikeAndComment.0ebbecec.js";import"./PostCardMeta.f5c65281.js";import"./PostMoreActionDropdown.981856fc.js";import"./ButtonPrimaryDanger.69065814.js";import"./NcModal.10918aea.js";import"./ButtonClose.2e45d2ef.js";const Be=({className:P="",domNode:T,apiSettings:s,sectionIndex:x})=>{var b;const o=m.exports.useRef(null),{graphQLvariables:p,settings:a,graphQLData:h}=s,V=!p&&!!h,{funcGqlQueryGetPosts:A,loading:de,IS_SKELETON:i,LISTS_POSTS:f,DONOT_ANY_THING:C,data:G,error:H,fetchMore:ce,setTabActiveId:g,tabActiveId:v}=E({graphQLData:h,graphQLvariables:p});let c=null;V?c=m.exports.useRef(null):c=$(A,x).ref;const D=r=>{if(r===-1){g(r);return}r.id!==v&&g(r.id)},t=a.blockLayoutStyle==="layout-2"||a.showFilterTab,n=a.itemPerView||5,I={direction:((b=document.querySelector("html"))==null?void 0:b.getAttribute("dir"))==="rtl"?"rtl":"ltr",perView:n,startAt:i||C?0:a.sliderStartAt,hoverpause:a.sliderHoverpause,animationDuration:a.sliderAnimationDuration||void 0,rewind:a.sliderRewind||!0,autoplay:i||C?!1:a.sliderAutoplayTime||!1,gap:32,bound:!0,breakpoints:{1440:{gap:24},1280:{perView:n-1,gap:24},1023:{perView:n-2||1.2,gap:24},767:{perView:n-2||1.2,gap:20},639:{perView:1.2,gap:20}}};m.exports.useEffect(()=>{if(!o.current)return;const r=new z(o.current,I);return r.mount(),()=>r.destroy()},[G,o,a]);const L=r=>{switch(s.settings.postCardName){case"card4":return e(y,{post:r,className:t?void 0:"hover:!shadow-sm"});case"card7":return e(X,{post:r});case"card9":return e(ae,{post:r});case"card10":return e(te,{post:r});case"card10V2":return e(U,{post:r});case"card11":return e(oe,{post:r,className:t?void 0:"hover:!shadow-sm"});case"card14":return e(J,{post:r});default:return e(y,{className:t?void 0:"hover:!shadow-sm",post:r})}},B=()=>{switch(s.settings.postCardName){case"card4":return e(_,{className:t?void 0:"hover:!shadow-sm"});case"card7":return e(re,{});case"card9":return e(ie,{});case"card10":return e(se,{});case"card10V2":return e(ee,{});case"card11":return e(ne,{className:t?void 0:"hover:!shadow-sm"});case"card14":return e(Z,{});default:return e(_,{className:t?void 0:"hover:!shadow-sm"})}},F=()=>{const{heading:r,subHeading:d,blockLayoutStyle:l}=s.settings;return l==="layout-1"?e(k,{desc:d,hasNextPrev:!0,children:r}):e(k,{desc:d,isCenter:!0,children:r})},O=()=>{const{hasBackground:r,subHeading:d,heading:l,showFilterTab:R,categories:Q,viewMoreHref:j}=a,N=r;return w("div",{className:`nc-FactoryBlockPostsSlider relative  ${N?"py-16":""}  ${P}`,ref:c,children:[N&&e(M,{}),w("div",{className:"relative ",ref:o,children:[R?e(K,{tabActiveId:v,tabs:Q,viewMoreHref:j,heading:l,subHeading:d,onClickTab:D}):F(),e("div",{className:"glide__track","data-glide-el":"track",children:e("ul",{className:"glide__slides",children:i?[1,1,1,1,1,1,1,1].map((S,u)=>e("li",{className:`glide__slide ${t?"pb-12 xl:pb-16":""}`,children:B()},u)):f.map((S,u)=>e("li",{className:`glide__slide ${t?"pb-12 xl:pb-16":""}`,children:L(S.node)},u))})}),e(W,{className:"my-5",data:f,error:H,isSkeleton:i}),t&&e(Y,{btnClassName:"w-12 h-12",containerClassName:"justify-center"})]})]})};return q.createPortal(O(),T)};export{Be as default};
