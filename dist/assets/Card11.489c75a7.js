import{r as e,R as t}from"./vendor.3b208adb.js";import{a,C as l,P as s}from"./PostFeaturedMedia.51066710.js";import{P as r}from"./PostCardMeta.594360a7.js";import{P as n}from"./main.38f90968.js";const o=({className:o="h-full",post:c,hiddenAuthor:m=!1,ratio:i="aspect-w-4 aspect-h-3",onClickLike:d})=>{const{title:f,link:u,categories:x,date:p}=c,[h,E]=e.exports.useState(!1);return t.createElement("div",{className:`nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${o}`,"data-nc-id":"Card11",onMouseEnter:()=>E(!0),onMouseLeave:()=>E(!1)},t.createElement("div",{className:`block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden ${i}`},t.createElement("div",null,t.createElement(a,{post:c,isHover:h}))),t.createElement("span",{className:"absolute top-3 inset-x-3 z-10"},t.createElement(l,{categories:x})),t.createElement("a",{href:u,className:"absolute inset-0"}),t.createElement("div",{className:"p-4 h-full flex flex-col flex-grow"},m?t.createElement("span",{className:"text-xs text-neutral-500"},p):t.createElement(r,{meta:c}),t.createElement("h3",{className:"nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3"},f?t.createElement("a",{href:u,className:"line-clamp-2",dangerouslySetInnerHTML:{__html:f},title:f}):null),t.createElement("div",{className:"flex items-end justify-between mt-auto"},t.createElement(s,{onClickLike:d,className:"relative",postData:c}),t.createElement(n,{href:c.link}))))};export{o as C};
