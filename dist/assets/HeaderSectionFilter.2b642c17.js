import{B as h}from"./ButtonSecondary.f276bf76.js";import{H as x}from"./Heading.7fcb7157.js";import{N,a as n}from"./NavItem.f8042f77.js";import{b as e,j as a,N as c}from"./main.85963571.js";const A=({tabActiveId:s,tabs:t,subHeading:m="",viewMoreHref:i="#",heading:o="\u{1F388} Latest Articles",onClickTab:r})=>e("div",{className:"flex flex-col mb-8 relative",children:[a(x,{desc:m,children:o}),e("div",{className:"flex items-center justify-between",children:[e(N,{className:"sm:space-x-2",containerClassName:"relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar",children:[a(n,{isActive:s===-1,onClick:()=>r(-1),children:c.all}),t.map((l,d)=>a(n,{isActive:s===l.id,onClick:()=>r(l),children:l.name},d))]}),i&&a("span",{className:"hidden sm:block flex-shrink-0",children:e(h,{href:i,className:"!leading-none",children:[e("span",{children:[" ",c.viewAll]}),a("i",{className:"ml-3 las la-arrow-right text-xl leading-none"})]})})]})]});export{A as H};