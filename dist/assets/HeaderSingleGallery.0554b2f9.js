import{g as u,d as e,ab as f,j as l,ac as v,N as h,X as x,w as N}from"./main.0e7259b4.js";import{G as g}from"./glide.esm.b495f968.js";const b=({imgs:c,isOpen:i,onClose:a,initFocus:d=0})=>{const n="modalPhotos-single-gallery";u.exports.useEffect(()=>{var t;!i||!document.querySelector(`.${n}`)||new g(`.${n}`,{direction:((t=document.querySelector("html"))==null?void 0:t.getAttribute("dir"))==="rtl"?"rtl":"ltr",gap:10,perView:1,startAt:d}).mount()},[i,d]);const m=()=>l("div",{className:`${n} group relative flex flex-col z-10 w-full h-full`,children:[e("div",{className:"controls_nav glide__bullets mt-8 mb-5","data-glide-el":"controls[nav]",children:c.map((t,o)=>l("div",{className:"text-center hidden",children:[l("span",{className:"text-3xl font-semibold",children:[" ",o+1]}),l("span",{children:[" / ",c.length]})]},o))}),e("div",{className:"glide__track max-h-full h-full relative z-50","data-glide-el":"track",children:e("ul",{className:"glide__slides h-full",children:c.map((t,o)=>e("li",{className:"glide__slide relative h-full",children:e(h,{src:t,containerClassName:" w-full h-full",className:"absolute object-contain w-full max-h-screen"})},o))})}),l("div",{className:"xl:absolute z-20 xl:-inset-x-20 max-w-6xl my-2 mx-auto top-full xl:top-1/2 transform xl:-translate-y-1/2 flex xl:justify-between glide__arrows","data-glide-el":"controls",children:[e(x,{onlyPrev:!0,containerClassName:"mr-1.5",btnClassName:"w-8 h-8 sm:w-10 sm:h-10 "}),e(x,{onlyNext:!0,containerClassName:"ml-1.5",btnClassName:"w-8 h-8 sm:w-10 sm:h-10 "})]})]});return(()=>e(f,{as:"div",className:"fixed inset-0 z-max overflow-y-auto dark bg-neutral-800 text-neutral-200 hiddenScrollbar",onClose:a,open:i,children:l("div",{className:"min-h-screen px-4 text-center",children:[e(f.Overlay,{className:"fixed inset-0 bg-white dark:bg-neutral-800"}),e("div",{className:"absolute left-2 top-2 md:top-4 md:left-4 z-max",children:e(v,{iconSize:"w-6 h-6",className:" w-11 h-11",onClick:a})}),e("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200B"}),e("div",{className:"relative inline-block w-full max-w-5xl py-8 h-screen align-middle mx-auto",children:m()})]})}))()},C=({className:c="",photos:i=[]})=>{let a=i.filter(s=>!!s);if(a=a.filter((s,r)=>r<6),!a[0])return null;const[d,n]=u.exports.useState(!1),[m,p]=u.exports.useState(0),t=s=>{n(!0),p(s)},o=()=>n(!1);return l("div",{children:[e("header",{className:"rounded-xl",children:l("div",{className:"relative grid grid-cols-3 sm:grid-cols-4 gap-2 my-10",children:[l("div",{className:"col-span-2 row-span-2 relative rounded-xl overflow-hidden z-0 cursor-pointer",onClick:()=>t(0),children:[e(h,{containerClassName:"absolute inset-0",className:"object-cover w-full h-full rounded-xl",src:a[0]}),e("div",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"})]}),a.filter((s,r)=>r>=1).map((s,r)=>l("div",{className:`relative rounded-xl overflow-hidden z-0 ${r>=2?"hidden sm:block":""}`,children:[e(h,{containerClassName:"aspect-w-6 aspect-h-5",className:"object-cover w-full h-full rounded-xl ",src:s||""}),e("div",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer",onClick:()=>t(r+1)})]},r)),l("div",{className:"absolute hidden md:flex md:items-center md:justify-center right-3 bottom-3 px-4 py-2 rounded-full bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10",onClick:()=>t(0),children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),e("span",{className:"ml-2 text-neutral-800 text-sm font-medium",children:N.showAllPhotos})]})]})}),e(b,{imgs:a,isOpen:d,onClose:o,initFocus:m})]})};export{C as default};