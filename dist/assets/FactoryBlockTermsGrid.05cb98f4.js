import{r as e,a0 as a,R as r}from"./vendor.49c01715.js";import{i as t,B as s,D as o}from"./main.c12a5fcf.js";import{S as n}from"./SectionGridCategoryBox.19f1acfd.js";import{u as i}from"./useGutenbergSectionWithGQLGetTerms.b79cc21f.js";import"./CardCategory1Skeleton.8bbf220f.js";import"./CardCategory5Skeleton.c1adf195.js";const l=({className:l="",domNode:c,apiSettings:d,sectionIndex:m})=>{const{graphQLvariables:g,graphQLData:u,settings:f}=d,p=!g&&!!u,{IS_SKELETON:S,LIST_TERMS:C,error:y,funcGqlQueryGetTerms:b}=i({graphQLvariables:g,graphQLData:u});let h=null;h=p?e.exports.useRef(null):t(b,m).ref;return a.createPortal((()=>{const{hasBackground:e,subHeading:a,heading:t,termCardName:i,gridClass:c,gridClassCustom:d,blockLayoutStyle:m}=f,g=e;return r.createElement("div",{className:`nc-FactoryBlockTermsGrid relative  ${g?"py-16":""}  ${l}`,ref:h},g&&r.createElement(s,null),r.createElement("div",{className:"relative"},r.createElement(n,{categories:C,heading:t,subHeading:a,headingCenter:"layout-1"===m,categoryCardType:i,gridClass:d||c,isLoadingSkeleton:S}),r.createElement(o,{data:C,isSkeleton:S,error:y})))})(),c)};export{l as default};
