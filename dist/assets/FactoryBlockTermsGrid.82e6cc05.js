import{g as e,u as a,a as r,R as t}from"./vendor.9a2c2287.js";import{B as s}from"./BackgroundSection.6c11eca0.js";import{S as o}from"./SectionGridCategoryBox.61b7244a.js";import{D as i}from"./main.a49fa266.js";import"./CardCategory5Skeleton.f1b45035.js";import"./Heading.dd3f8bc9.js";import"./NextPrev.c3bc864e.js";const n=({className:n="",domNode:l,apiSettings:d})=>{var c,g;const{graphQLvariables:m,settings:u}=d,v=e`
    ${m.queryString}
  `,{loading:p,error:y,data:C}=a(v,{notifyOnNetworkStatusChange:!0,variables:m.variables}),b=(null==(c=null==C?void 0:C.tags)?void 0:c.edges)||(null==(g=null==C?void 0:C.categories)?void 0:g.edges)||[],S=p&&!b.length;return r.createPortal((()=>{const{hasBackground:e,subHeading:a,heading:r,termCardName:l,gridClass:d,gridClassCustom:c,blockLayoutStyle:g}=u,m=e;return t.createElement("div",{className:`nc-FactoryBlockTermsGrid relative  ${m?"py-16":""}  ${n}`},m&&t.createElement(s,null),t.createElement("div",{className:"relative"},t.createElement(o,{categories:b,heading:r,subHeading:a,headingCenter:"layout-1"===g,categoryCardType:l,gridClass:c||d,isLoadingSkeleton:S}),t.createElement(i,{data:b,isSkeleton:S,error:y})))})(),l)};export{n as default};
