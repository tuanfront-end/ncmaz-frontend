import{R as e}from"./vendor.9a2c2287.js";import{A as t}from"./main.243c593f.js";import{n as a}from"./formatDate.5c5d9c4d.js";const n=({className:n="leading-none",meta:l,hiddenAvatar:r=!1,size:o="normal"})=>{var m,s,d,u;const{date:i,author:c}=l;return e.createElement("div",{className:`nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${"normal"===o?"text-xs":"text-base"} ${n}`,"data-nc-id":"PostCardMeta"},e.createElement("a",{href:frontendObject.homeURL+(null==c?void 0:c.node.uri),className:"relative flex items-center space-x-2"},!r&&e.createElement(t,{radius:"rounded-full",sizeClass:"normal"===o?"h-7 w-7 text-sm":"h-10 w-10 text-xl",imgUrl:(null==(s=null==(m=null==c?void 0:c.node.ncUserMeta)?void 0:m.featuredImage)?void 0:s.sourceUrl)||(null==(u=null==(d=null==c?void 0:c.node)?void 0:d.avatar)?void 0:u.url),userName:null==c?void 0:c.node.username}),e.createElement("span",{className:"block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"},null==c?void 0:c.node.name)),e.createElement(e.Fragment,null,e.createElement("span",{className:"text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"},"·"),e.createElement("span",{className:"text-neutral-500 dark:text-neutral-400 font-normal"},i?a(i):null)))};export{n as P};
