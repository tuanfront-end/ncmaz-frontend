import{d as e,e as a,f as r,g as t,C as n,a as c,b as s,c as d}from"./CardCategory5Skeleton.4d560652.js";import{t as o}from"./main.0153da19.js";import{R as i}from"./vendor.3078d0a1.js";const m=({categories:m,categoryCardType:l="card2",headingCenter:y=!0,className:g="",heading:k="",subHeading:u="",gridClass:E="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",isLoadingSkeleton:x,isLoadingSkeletonArr:p=Array.from("iiiiiiiiii")})=>i.createElement("div",{className:`nc-SectionGridCategoryBox relative ${g}`},i.createElement(o,{desc:u,isCenter:y},k),i.createElement("div",{className:`grid ${E} gap-6 md:gap-8`},x?p.map(((n,c)=>{switch(l){case"card2":return i.createElement(e,{key:c});case"card3":return i.createElement(t,{key:c});case"card4":return i.createElement(r,{key:c});case"card5":return i.createElement(a,{key:c});default:return i.createElement(e,{key:c})}})):m.map(((e,a)=>{const r=a<3?`#${a+1}`:void 0;switch(l){case"card2":return i.createElement(n,{key:a,index:r,taxonomy:e.node});case"card3":return i.createElement(d,{key:a,taxonomy:e.node});case"card4":return i.createElement(s,{key:a,index:r,taxonomy:e.node});case"card5":return i.createElement(c,{key:a,taxonomy:e.node});default:return i.createElement(n,{key:a,taxonomy:e.node})}}))));export{m as S};
