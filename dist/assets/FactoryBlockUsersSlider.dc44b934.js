import{G as e,r as a,R as t,i as r,j as s,k as n}from"./vendor.3078d0a1.js";import{E as o,t as l,F as i,g as c,B as d,D as m,Q as u,R as h}from"./main.5384b733.js";import{C as g,a as p}from"./CardAuthorBox2Skeleton.d19748a5.js";import{C as E,a as N}from"./CardAuthorBoxSkeleton.394d5df5.js";const w=({heading:r,subHeading:s,className:n="",authorNodes:c,itemPerView:d=5,authorCardName:m,blockLayoutStyle:u,isLoading:h,authorNodesLoading:w=[1,1,1,1,1,1,1,1,1]})=>{const S="SectionSliderNewAuthors"+o(),_=new e(`.${S}`,{perView:d,gap:32,bound:!0,breakpoints:{1280:{perView:d-1},1023:{gap:24,perView:3},767:{gap:20,perView:2},639:{gap:20,perView:2},500:{gap:20,perView:1.3}}});a.exports.useEffect((()=>{_.mount()}),[c,_]);const b="layout-2"===u;return t.createElement("div",{className:`nc-SectionSliderNewAuthors ${n}`},t.createElement("div",{className:`${S}`},t.createElement(l,{isCenter:!b,desc:s,hasNextPrev:b},r),t.createElement("div",{className:"glide__track","data-glide-el":"track"},t.createElement("ul",{className:"glide__slides"},h?w.map(((e,a)=>t.createElement("li",{key:a,className:"glide__slide "+(b?"":"pb-12 md:pb-16")},(()=>{switch(m){case"card1":return t.createElement(N,{className:b?"hover:!shadow-none":""});case"card2":default:return t.createElement(p,{className:b?"hover:!shadow-none":""})}})()))):c.map(((e,a)=>t.createElement("li",{key:a,className:"glide__slide "+(b?"":"pb-12 md:pb-16")},(e=>{switch(m){case"card1":return t.createElement(E,{className:b?"hover:!shadow-none":"",author:e});case"card2":default:return t.createElement(g,{className:b?"hover:!shadow-none":"",author:e})}})(e.node)))))),!b&&t.createElement(i,{btnClassName:"w-12 h-12",containerClassName:"justify-center"})))},S=({className:e="",domNode:a,apiSettings:o,sectionIndex:l})=>{const{graphQLvariables:i,settings:g}=o;let p="";"GQL_QUERY_GET_USERS_BY_SPECIFIC"===i.queryString&&(p=u),"GQL_QUERY_GET_USERS_BY_FILTER"===i.queryString&&(p=h);const E=r`
    ${p}
  `,[N,{loading:S,error:_,data:b,fetchMore:v}]=s(E,{variables:i.variables}),{ref:y}=c(N,l),f=(null==b?void 0:b.users.edges)||[],k=S&&!f.length;return n.createPortal((()=>{const{hasBackground:a,subHeading:r,heading:s,itemPerView:n,userCardName:o,blockLayoutStyle:l}=g;return t.createElement("div",{className:`nc-FactoryBlockUsersSlider relative ${a?"py-16":""}  ${e}`,ref:y},a&&t.createElement(d,null),t.createElement("div",{className:"relative"},t.createElement(w,{authorCardName:o,blockLayoutStyle:l,itemPerView:n,authorNodes:f,heading:s,subHeading:r,isLoading:k}),t.createElement(m,{className:"my-5",data:f,error:_,isSkeleton:k})))})(),a)};export{S as default};
