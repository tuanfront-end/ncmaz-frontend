import{r as e,R as a,_ as r}from"./vendor.d2c483f7.js";import{t,E as s,i as o,B as n,D as l}from"./main.bc64dab2.js";import{G as c}from"./glide.esm.699249e3.js";import{n as i}from"./ncNanoId.f3b5fafb.js";import{C as d,a as m}from"./CardAuthorBox2Skeleton.c9bda6d4.js";import{C as u,a as p}from"./CardAuthorBoxSkeleton.29b0fcd8.js";import{u as h}from"./useGutenbergSectionWithGQLGetUsers.e0c36ede.js";const g=({heading:r,subHeading:o,className:n="",authorNodes:l,itemPerView:h=5,authorCardName:g,blockLayoutStyle:N,isLoading:b,authorNodesLoading:f=[1,1,1,1,1,1,1,1,1]})=>{const E="SectionSliderNewAuthors"+i(),w=new c(`.${E}`,{perView:h,gap:32,bound:!0,breakpoints:{1440:{gap:24},1280:{perView:h-1,gap:24},1023:{perView:3,gap:24},767:{gap:20,perView:2},639:{perView:2,gap:20},500:{perView:1.2,gap:20}}});e.exports.useEffect((()=>{w.mount()}),[l,w]);const S="layout-2"===N;return a.createElement("div",{className:`nc-SectionSliderNewAuthors ${n}`},a.createElement("div",{className:`${E}`},a.createElement(t,{isCenter:!S,desc:o,hasNextPrev:S},r),a.createElement("div",{className:"glide__track","data-glide-el":"track"},a.createElement("ul",{className:"glide__slides"},b?f.map(((e,r)=>a.createElement("li",{key:r,className:"glide__slide "+(S?"":"pb-12 md:pb-16")},(()=>{switch(g){case"card1":return a.createElement(p,{className:S?"hover:!shadow-none":""});case"card2":default:return a.createElement(m,{className:S?"hover:!shadow-none":""})}})()))):l.map(((e,r)=>a.createElement("li",{key:r,className:"glide__slide "+(S?"":"pb-12 md:pb-16")},(e=>{switch(g){case"card1":return a.createElement(u,{className:S?"hover:!shadow-none":"",author:e});case"card2":default:return a.createElement(d,{className:S?"hover:!shadow-none":"",author:e})}})(e.node)))))),!S&&a.createElement(s,{btnClassName:"w-12 h-12",containerClassName:"justify-center"})))},N=({className:t="",domNode:s,apiSettings:c,sectionIndex:i})=>{const{graphQLvariables:d,graphQLData:m,settings:u}=c,p=!d&&!!m,{funcGqlQueryGetUsers:N,IS_SKELETON:b,LISTS_DATA:f,error:E}=h({graphQLvariables:d,graphQLData:m});let w=null;w=p?e.exports.useRef(null):o(N,i).ref;return r.createPortal((()=>{const{hasBackground:e,subHeading:r,heading:s,itemPerView:o,userCardName:c,blockLayoutStyle:i}=u;return a.createElement("div",{className:`nc-FactoryBlockUsersSlider relative ${e?"py-16":""}  ${t}`,ref:w},e&&a.createElement(n,null),a.createElement("div",{className:"relative"},a.createElement(g,{authorCardName:c,blockLayoutStyle:i,itemPerView:o,authorNodes:f,heading:s,subHeading:r,isLoading:b}),a.createElement(l,{className:"my-5",data:f,error:E,isSkeleton:b})))})(),s)};export{N as default};
