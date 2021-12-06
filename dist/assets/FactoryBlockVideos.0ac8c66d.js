import{R as e,r as t,_ as r}from"./vendor.d2c483f7.js";import{t as a,N as s,B as l}from"./main.bc64dab2.js";import{N as o}from"./NcPlayIcon.8f318b97.js";const n=({className:t="w-8 h-8 md:w-10 md:h-10",iconClass:r="w-5 h-5"})=>e.createElement("div",{className:`nc-NcPlayIcon2 bg-white relative rounded-full shadow-inner ${t}`,"data-nc-id":"NcPlayIcon2"},e.createElement("span",{className:"absolute inset-0 flex items-center justify-center text-primary-500"},e.createElement("svg",{className:r,width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},e.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",d:"M18.25 12L5.75 5.75V18.25L18.25 12Z"})))),c=({videoIds:r=[],className:l="",heading:c="🎬 The Videos",subHeading:i="Check out our hottest videos. View more and share more new\n  perspectives on just about any topic. Everyone’s welcome."})=>{const[m,d]=t.exports.useState(!1),[u,p]=t.exports.useState(0);return e.createElement("div",{className:`nc-SectionVideos relative ${l}`},e.createElement(a,{desc:i},c),e.createElement("div",{className:"flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row"},e.createElement("div",{className:"absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 bg-opacity-40 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-1/2 dark:bg-neutral-800 dark:bg-opacity-40"}),e.createElement("div",{className:"flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6"},(()=>{const t=r[u];return e.createElement("div",{className:"group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px]"},m?e.createElement("iframe",{src:`https://www.youtube.com/embed/${t}?autoplay=1`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):e.createElement(e.Fragment,null,e.createElement("div",{onClick:()=>d(!0),className:"cursor-pointer absolute inset-0 flex items-center justify-center z-10"},e.createElement(o,null)),e.createElement(s,{containerClassName:"absolute inset-0 ",className:"object-cover w-full h-full transform transition-transform group-hover:scale-105 duration-300 nc-will-change-transform",src:`https://img.youtube.com/vi/${t}/maxresdefault.jpg`})))})()),e.createElement("div",{className:"flex-shrink-0 grid gap-2 grid-cols-4 sm:gap-6 lg:grid-cols-1 lg:w-36 xl:w-40"},r.map(((t,r)=>r===u?null:e.createElement("div",{className:"group relative aspect-h-16 aspect-w-16 rounded-2xl cursor-pointer overflow-hidden sm:aspect-h-12 sm:rounded-3xl lg:aspect-h-9",onClick:()=>{p(r),!m&&d(!0)},key:String(r)},e.createElement("div",{className:"absolute inset-0 flex items-center justify-center z-10"},e.createElement(n,null)),e.createElement(s,{containerClassName:"absolute inset-0 w-full h-full",className:"object-cover w-full h-full transform transition-transform group-hover:scale-110 duration-300 nc-will-change-transform",src:`https://img.youtube.com/vi/${t}/mqdefault.jpg`})))))))},i=({className:t="",domNode:a,apiSettings:s})=>r.createPortal((()=>{const{hasBackground:r,subHeading:a,heading:o,videoIds:n}=s.settings;return e.createElement("div",{className:`nc-FactoryBlockVideos relative  ${r?"py-16":""}  ${t}`},r&&e.createElement(l,null),e.createElement(c,{videoIds:n,heading:o,subHeading:a}))})(),a);export{i as default};
