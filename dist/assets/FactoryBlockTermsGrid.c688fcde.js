import{r as e,a0 as a,R as r}from"./vendor.0f8da6c9.js";import{i as t,B as s,D as o}from"./main.244ac4e8.js";import{S as n}from"./SectionGridCategoryBox.61dffa59.js";import{u as i}from"./useGutenbergSectionWithGQLGetTerms.393fcb1d.js";import"./CardCategory1Skeleton.2296cce8.js";import"./CardCategory5Skeleton.206871ab.js";const l=({className:l="",domNode:c,apiSettings:d,sectionIndex:m})=>{const{graphQLvariables:g,graphQLData:u,settings:p}=d,f=!g&&!!u,{IS_SKELETON:S,LIST_TERMS:C,error:y,funcGqlQueryGetTerms:h}=i({graphQLvariables:g,graphQLData:u});let L=null;L=f?e.exports.useRef(null):t(h,m).ref;return a.createPortal((()=>{const{hasBackground:e,subHeading:a,heading:t,termCardName:i,gridClass:c,gridClassCustom:d,blockLayoutStyle:m}=p,g=e;return r.createElement("div",{className:`nc-FactoryBlockTermsGrid relative  ${g?"py-16":""}  ${l}`,ref:L},g&&r.createElement(s,null),r.createElement("div",{className:"relative"},r.createElement(n,{categories:C,heading:t,subHeading:a,headingCenter:"layout-1"===m,categoryCardType:i,gridClass:d||c,isLoadingSkeleton:S}),r.createElement(o,{data:C,isSkeleton:S,error:y})))})(),c)};export{l as default};
