import{B as o,i as s}from"./ButtonPlayMusicRunningContainer.4524591a.js";import{L as c}from"./LoadingVideo.8ae3b112.js";import{j as r,F as d,b as u}from"./main.8abeeeff.js";import"./PostTypeFeaturedIcon.6e20a143.js";const b=({className:m="",featuredImage:a,postData:l})=>{const t=e=>e==="playing"?r("img",{className:"w-7",src:s,alt:""}):e==="loading"?r(c,{className:"transform scale-75"}):r("svg",{className:"w-11 h-11",fill:"currentColor",viewBox:"0 0 24 24",children:r("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M18.25 12L5.75 5.75V18.25L18.25 12Z"})});return r(d,{children:r(o,{renderChildren:(e,i)=>{let n=i;return e||(n=null),u("div",{className:"aspect-w-1 aspect-h-1 rounded-full overflow-hidden z-0 shadow-2xl group cursor-pointer ",children:[a?r("img",{className:`w-full h-full object-cover group-hover:scale-105 transform transition-transform nc-animation-spin ${n==="playing"?"playing":""}`,src:a,alt:"audio"}):r("div",{className:`w-full h-full bg-neutral-300 group-hover:scale-105 transform transition-transform nc-animation-spin ${n==="playing"?"playing":""}`}),r("div",{className:"bg-neutral-900 bg-blend-multiply bg-opacity-75"}),r("div",{className:"flex items-center justify-center",children:r("div",{className:"text-white bg-black bg-blend-multiply bg-opacity-50 w-20 h-20 border-2 border-neutral-300 rounded-full flex items-center justify-center ",children:t(n)})})]})},post:l})})};export{b as default};
