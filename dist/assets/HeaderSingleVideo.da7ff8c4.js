import{j as e,F as n,a as t,r as d}from"./main.3380b1f5.js";import{R as c}from"./index.00c2f9f3.js";import{i as s,N as o}from"./isSafariBrowser.1c058f68.js";import{N as u}from"./NcImage.b55b9c44.js";import"./ReactPlayer.27b94619.js";const w=({className:m="",videoUrl:i,featuredImage:r})=>e(n,{children:(()=>{const[a,l]=d.exports.useState(!1);return t("div",{className:"aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden z-0 border-4 border-white dark:border-neutral-900 sm:rounded-3xl shadow-2xl",children:[s()&&!!r&&!a&&t("div",{className:"absolute inset-0 z-10 cursor-pointer rounded-[18px] overflow-hidden",onClick:()=>l(!0),children:[e(u,{src:r,containerClassName:"absolute inset-0"}),e("div",{className:"absolute inset-0 flex items-center justify-center",children:e(o,{})})]}),e(c,{url:i,className:"absolute inset-0",style:{borderRadius:18,overflow:"hidden"},playing:s()?a:!0,width:"100%",height:"100%",controls:!0,light:s()?!1:r||!0,playIcon:e(o,{})})]})})()});export{w as default};