import{a as g,j as e,c as x,r as L,b as v,R as b,B as D,D as I}from"./main.69fc0c0d.js";import{C as p,a as Q}from"./CardAuthorBoxSkeleton.7c8d3f85.js";import{C as _,a as f}from"./CardAuthorBox2Skeleton.07a8f8b1.js";import{u as R}from"./useGutenbergSectionWithGQLGetUsers.938c0b63.js";import"./index.bfc87e83.js";import"./NcImage.3590ec63.js";const T=({className:d="",authorNodes:i,authorNodesLoading:u=[1,1,1,1,1,1,1,1,1,1,1,1],heading:l,subHeading:s,authorCardName:t,blockLayoutStyle:o,gridClass:m,isLoading:h})=>{const n=(a,r)=>{switch(t){case"card1":return e(p,{author:a.node},r);case"card2":return e(_,{author:a.node},r);default:return e(p,{author:a.node},r)}},c=(a,r)=>{switch(t){case"card1":return e(Q,{},r);case"card2":return e(f,{},r);default:return e(f,{},r)}};return g("div",{className:`nc-SectionGridAuthorBox relative ${d}`,"data-nc-id":"SectionGridAuthorBox",children:[e(x,{desc:s,isCenter:o==="layout-1",children:l}),e("div",{className:`grid gap-6 2xl:gap-8 ${m}`,children:h?u.map(c):i.map(n)})]})},w=({className:d="",domNode:i,apiSettings:u,sectionIndex:l})=>{const{graphQLvariables:s,graphQLData:t,settings:o}=u,m=!s&&!!t,{funcGqlQueryGetUsers:h,IS_SKELETON:n,LISTS_DATA:c,error:a}=R({graphQLvariables:s,graphQLData:t});let r=null;m?r=L.exports.useRef(null):r=v(h,l).ref;const A=()=>{const{hasBackground:C,subHeading:B,heading:y,gridClass:G,gridClassCustom:S,userCardName:N,blockLayoutStyle:k}=o;return g("div",{className:`nc-FactoryBlockUsersGrid relative ${C?"py-16":""}  ${d}`,ref:r,children:[C&&e(D,{}),g("div",{className:"relative",children:[e(T,{authorCardName:N,blockLayoutStyle:k,authorNodes:c,authorNodesLoading:Array.from(Array(Number(o.expectedNumberResults||8)||8).keys()),heading:y,subHeading:B,gridClass:S||G,isLoading:n}),e(I,{className:"my-5",data:c,error:a,isSkeleton:n})]})]})};return b.createPortal(A(),i)};export{w as default};
