import{R as e,_ as a,$ as t,a0 as r}from"./vendor.49610682.js";import{t as s,g as o,B as n,D as d,Q as l,R as i}from"./main.fbb9edbc.js";import{C as c,a as u}from"./CardAuthorBoxSkeleton.df3f1762.js";import{C as m,a as g}from"./CardAuthorBox2Skeleton.0b260bfd.js";const h=({className:a="",authorNodes:t,authorNodesLoading:r=[1,1,1,1,1,1,1,1,1,1,1,1],heading:o,subHeading:n,authorCardName:d,blockLayoutStyle:l,gridClass:i,isLoading:h})=>e.createElement("div",{className:`nc-SectionGridAuthorBox relative ${a}`,"data-nc-id":"SectionGridAuthorBox"},e.createElement(s,{desc:n,isCenter:"layout-1"===l},o),e.createElement("div",{className:`grid gap-6 2xl:gap-8 ${i}`},h?r.map(((a,t)=>{switch(d){case"card1":return e.createElement(u,{key:t});case"card2":default:return e.createElement(g,{key:t})}})):t.map(((a,t)=>{switch(d){case"card1":return e.createElement(c,{key:t,author:a.node});case"card2":return e.createElement(m,{key:t,author:a.node});default:return e.createElement(c,{key:t,author:a.node})}})))),E=({className:s="",domNode:c,apiSettings:u,sectionIndex:m})=>{const{graphQLvariables:g,settings:E}=u;let y="";"GQL_QUERY_GET_USERS_BY_SPECIFIC"===g.queryString&&(y=l),"GQL_QUERY_GET_USERS_BY_FILTER"===g.queryString&&(y=i);const S=a`
    ${y}
  `,[C,{loading:N,error:f,data:b,fetchMore:k}]=t(S,{notifyOnNetworkStatusChange:!0,variables:g.variables}),{ref:p}=o(C,m),v=(null==b?void 0:b.users.edges)||[],L=N&&!v.length;return r.createPortal((()=>{const{hasBackground:a,subHeading:t,heading:r,gridClass:o,gridClassCustom:l,userCardName:i,blockLayoutStyle:c}=E;return e.createElement("div",{className:`nc-FactoryBlockUsersGrid relative ${a?"py-16":""}  ${s}`,ref:p},a&&e.createElement(n,null),e.createElement("div",{className:"relative"},e.createElement(h,{authorCardName:i,blockLayoutStyle:c,authorNodes:v,authorNodesLoading:[1,1,1,1,1,1,1,1,1,1],heading:r,subHeading:t,gridClass:l||o,isLoading:L}),e.createElement(d,{className:"my-5",data:v,error:f,isSkeleton:L})))})(),c)};export{E as default};
