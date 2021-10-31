import{G as e,r as a,R as r,i as t,j as s,k as n}from"./vendor.3078d0a1.js";import{E as l,t as o,g as c,B as i,D as d,I as m,J as g,K as E,M as u}from"./main.861acd19.js";import{C as _,a as p,b as v,c as N,d as w,e as h,f as y,g as S}from"./CardCategory5Skeleton.d959edd1.js";const C=({heading:t,subHeading:s,className:n="",itemClassName:c="",categories:i,itemPerRow:d=5,categoryCardType:m="card3",isLoading:g,categoriesLoading:E=[1,1,1,1,1,1,1,1,1]})=>{const u="SectionSliderNewCategories"+l(),C=new e(`.${u}`,{perView:d,gap:32,bound:!0,breakpoints:{1280:{perView:d-1},1024:{gap:24,perView:d-2},768:{gap:20,perView:d-2},640:{gap:20,perView:d-3},500:{gap:20,perView:1.3}}});a.exports.useEffect((()=>{C.mount()}),[i,C]);return r.createElement("div",{className:`nc-SectionSliderNewCategories relative ${n}`},r.createElement("div",{className:`${u} flow-root`},r.createElement(o,{desc:s,hasNextPrev:!0},t),r.createElement("div",{className:"glide__track","data-glide-el":"track"},r.createElement("ul",{className:"glide__slides"},g?E.map(((e,a)=>r.createElement("li",{key:a,className:`glide__slide ${c}`},(()=>{switch(m){case"card2":return r.createElement(w,{className:"hover:!shadow-none"});case"card3":return r.createElement(S,null);case"card4":return r.createElement(y,null);case"card5":return r.createElement(h,null);default:return r.createElement(w,{className:"hover:!shadow-none"})}})()))):i.map(((e,a)=>r.createElement("li",{key:a,className:`glide__slide ${c}`},((e,a)=>{const t=a<3?`#${a+1}`:void 0;switch(m){case"card2":return r.createElement(_,{className:"hover:!shadow-none",index:t,taxonomy:e.node});case"card3":return r.createElement(N,{taxonomy:e.node});case"card4":return r.createElement(v,{index:t,taxonomy:e.node});case"card5":return r.createElement(p,{taxonomy:e.node});default:return r.createElement(_,{className:"hover:!shadow-none",index:t,taxonomy:e.node})}})(e,a))))))))},f=({className:e="",domNode:a,apiSettings:l,sectionIndex:o})=>{var _,p;const{graphQLvariables:v,settings:N}=l;let w="";"GQL_QUERY_GET_CATEGORIES_BY_FILTER"===v.queryString&&(w=m),"GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC"===v.queryString&&(w=g),"GQL_QUERY_GET_TAGS_BY_FILTER"===v.queryString&&(w=E),"GQL_QUERY_GET_TAGS_BY_SPECIFIC"===v.queryString&&(w=u);const h=t`
    ${w}
  `,[y,{loading:S,error:f,data:G,fetchMore:T}]=s(h,{notifyOnNetworkStatusChange:!0,variables:v.variables}),{ref:x}=c(y,o),k=(null==(_=null==G?void 0:G.tags)?void 0:_.edges)||(null==(p=null==G?void 0:G.categories)?void 0:p.edges)||[],R=S&&!k.length;return n.createPortal((()=>{const{hasBackground:a,subHeading:t,heading:s,termCardName:n,itemPerView:l}=N,o=a;return r.createElement("div",{className:`nc-FactoryBlockTermsSlider relative ${o?"py-16":""}  ${e}`,ref:x},o&&r.createElement(i,null),r.createElement("div",{className:"relative"},r.createElement(C,{categories:k,heading:s,subHeading:t,categoryCardType:n,itemPerRow:l,isLoading:R}),r.createElement(d,{data:k,isSkeleton:R,error:f})))})(),a)};export{f as default};