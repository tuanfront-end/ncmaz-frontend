import{C as p,a as f}from"./CardCategory1Skeleton.c1a824b1.js";import{d as s,e as k,f as h,g as v,C as c,a as x,b as j,c as $}from"./CardCategory5Skeleton.3680f2a6.js";import{a as w,j as a,c as B}from"./main.69fc0c0d.js";const A=({categories:d,categoryCardType:o="card2",headingCenter:n=!0,className:C="",heading:g="",subHeading:l="",gridClass:i="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",isLoadingSkeleton:y,isLoadingSkeletonArr:u=Array.from("iiiiiiiiii")})=>{const m=(e,r)=>{switch(o){case"card1":return a(p,{},r);case"card2":return a(s,{},r);case"card3":return a(v,{},r);case"card4":return a(h,{},r);case"card5":return a(k,{},r);default:return a(s,{},r)}},S=(e,r)=>{const t=r<3?`#${r+1}`:void 0;switch(o){case"card1":return a(f,{taxonomy:e.node},r);case"card2":return a(c,{index:t,taxonomy:e.node},r);case"card3":return a($,{taxonomy:e.node},r);case"card4":return a(j,{index:t,taxonomy:e.node},r);case"card5":return a(x,{taxonomy:e.node},r);default:return a(c,{taxonomy:e.node},r)}};return w("div",{className:`nc-SectionGridCategoryBox relative ${C}`,children:[a(B,{desc:l,isCenter:n,children:g}),a("div",{className:`grid ${i} gap-6 2xl:gap-8`,children:y?u.map(m):d.map(S)})]})};export{A as S};
