import{r as e,R as a,g as r,u as t,a as s}from"./vendor.9a2c2287.js";import{B as n}from"./BackgroundSection.6c11eca0.js";import{H as o}from"./Heading.f2ab429d.js";import{n as c,G as l}from"./ncNanoId.3f36f1af.js";import{C as i,a as d,b as m,c as g,d as u,e as p,f as v,g as E}from"./CardCategory5Skeleton.fe5de436.js";import{D as f}from"./main.243c593f.js";import"./NextPrev.fedaf664.js";const N=({heading:r,subHeading:t,className:s="",itemClassName:n="",categories:f,itemPerRow:N=5,categoryCardType:w="card3",isLoading:h,categoriesLoading:y=[1,1,1,1,1,1,1,1,1]})=>{const x="glide_"+c();e.exports.useEffect((()=>{new l(`.${x}`,{perView:N,gap:32,bound:!0,breakpoints:{1280:{perView:N-1},1024:{gap:24,perView:N-2},768:{gap:20,perView:N-2},640:{gap:20,perView:N-3},500:{gap:20,perView:1}}}).mount()}),[f]);return a.createElement("div",{className:`nc-SectionSliderNewCategories relative ${s}`},a.createElement("div",{className:`${x} flow-root`},a.createElement(o,{desc:t,hasNextPrev:!0},r),a.createElement("div",{className:"glide__track","data-glide-el":"track"},a.createElement("ul",{className:"glide__slides"},h?y.map(((e,r)=>a.createElement("li",{key:r,className:`glide__slide ${n}`},(()=>{switch(w){case"card2":return a.createElement(u,{className:"hover:!shadow-none"});case"card3":return a.createElement(E,null);case"card4":return a.createElement(v,null);case"card5":return a.createElement(p,null);default:return a.createElement(u,{className:"hover:!shadow-none"})}})()))):f.map(((e,r)=>a.createElement("li",{key:r,className:`glide__slide ${n}`},((e,r)=>{const t=r<3?`#${r+1}`:void 0;switch(w){case"card2":return a.createElement(i,{className:"hover:!shadow-none",index:t,taxonomy:e.node});case"card3":return a.createElement(g,{taxonomy:e.node});case"card4":return a.createElement(m,{index:t,taxonomy:e.node});case"card5":return a.createElement(d,{taxonomy:e.node});default:return a.createElement(i,{className:"hover:!shadow-none",index:t,taxonomy:e.node})}})(e,r))))))))},w=({className:e="",domNode:o,apiSettings:c})=>{var l,i;const{graphQLvariables:d,settings:m}=c,g=r`
    ${d.queryString}
  `,{loading:u,error:p,data:v}=t(g,{notifyOnNetworkStatusChange:!0,variables:d.variables}),E=(null==(l=null==v?void 0:v.tags)?void 0:l.edges)||(null==(i=null==v?void 0:v.categories)?void 0:i.edges)||[],w=u&&!E.length;return s.createPortal((()=>{const{hasBackground:r,subHeading:t,heading:s,termCardName:o,itemPerView:c}=m,l=r;return a.createElement("div",{className:`nc-FactoryBlockTermsSlider relative ${l?"py-16":""}  ${e}`},l&&a.createElement(n,null),a.createElement("div",{className:"relative"},a.createElement(N,{categories:E,heading:s,subHeading:t,categoryCardType:o,itemPerRow:c,isLoading:w}),a.createElement(f,{data:E,isSkeleton:w,error:p})))})(),o)};export{w as default};
