import{r as m,j as e,G as x,a as l,f as p,N as v}from"./main.34e66e24.js";import{N as h}from"./NcImage.ade98c61.js";import{B as N}from"./ButtonClose.f5e1f7cb.js";import{G as g}from"./glide.esm.b495f968.js";const w=({imgs:n,isOpen:o,onClose:r,initFocus:d=0})=>{const i="glidejs"+m.exports.useId().replace(/:/g,"_");m.exports.useEffect(()=>{var a;!o||!document.querySelector(`.${i}`)||new g(`.${i}`,{direction:((a=document.querySelector("html"))==null?void 0:a.getAttribute("dir"))==="rtl"?"rtl":"ltr",gap:10,perView:1,startAt:d}).mount()},[o,d,n]),console.log(111,{imgs:n});const u=()=>l("div",{className:`modalPhotos-single-gallery ${i} group relative flex flex-col z-10 w-full h-full`,children:[e("div",{className:"controls_nav glide__bullets mt-8 mb-5","data-glide-el":"controls[nav]",children:n.map((a,c)=>l("div",{className:"text-center hidden",children:[l("span",{className:"text-3xl font-semibold",children:[" ",c+1]}),l("span",{children:[" / ",n.length]})]},c))}),e("div",{className:"glide__track max-h-full h-full relative z-50","data-glide-el":"track",children:e("ul",{className:"glide__slides h-full",children:n.map((a,c)=>e("li",{className:"glide__slide relative h-full",children:e(h,{src:a,containerClassName:" w-full h-full rounded-2xl flex justify-center items-center",className:" rounded-2xl max-h-full max-w-full"})},c))})}),l("div",{className:"xl:absolute z-20 xl:-inset-x-20 max-w-6xl mt-4 mx-auto top-full xl:top-1/2 transform xl:-translate-y-1/2 flex rtl:flex-row-reverse xl:justify-between glide__arrows",children:[e(p,{onlyPrev:!0,containerClassName:"mx-1.5",btnClassName:"w-8 h-8 sm:w-10 sm:h-10 "}),e(p,{onlyNext:!0,containerClassName:"mx-1.5",btnClassName:"w-8 h-8 sm:w-10 sm:h-10 "})]})]});return(()=>e(x,{as:"div",className:"fixed inset-0 z-max overflow-y-auto dark bg-neutral-800 text-neutral-200 hiddenScrollbar",onClose:r,open:o,children:l("div",{className:"min-h-screen px-4 text-center",children:[e(x.Overlay,{className:"fixed inset-0 bg-white dark:bg-neutral-800"}),e("div",{className:"absolute left-2 top-2 md:top-4 md:left-4 z-max",children:e(N,{iconSize:"w-6 h-6",className:" w-11 h-11",onClick:r})}),e("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200B"}),e("div",{className:"relative inline-block w-full max-w-5xl py-8 h-screen align-middle mx-auto",children:u()})]})}))()},k=({className:n="",photos:o=[]})=>{let r=o.filter(t=>!!t);if(r=r.filter((t,s)=>s<5),!r[0])return null;const[d,i]=m.exports.useState(!1),[u,f]=m.exports.useState(0),a=t=>{i(!0),f(t)},c=()=>i(!1);return l("div",{children:[e("header",{className:"rounded-xl",children:l("div",{className:"relative grid grid-cols-3 sm:grid-cols-4 gap-2 my-10",children:[l("div",{className:"col-span-2 row-span-2 relative rounded-xl overflow-hidden z-0 cursor-pointer",onClick:()=>a(0),children:[e(h,{containerClassName:"absolute inset-0",className:"object-cover w-full h-full rounded-xl",src:r[0]}),e("div",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"})]}),r.filter((t,s)=>s>=1).map((t,s)=>l("div",{className:`relative rounded-xl overflow-hidden z-0 ${s>=2?"hidden sm:block":""}`,children:[e(h,{containerClassName:"aspect-w-6 aspect-h-5",className:"object-cover w-full h-full rounded-xl ",src:t||""}),e("div",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer",onClick:()=>a(s+1)})]},s)),l("div",{className:"absolute hidden md:flex md:items-center md:justify-center right-3 bottom-3 px-4 py-2 rounded-full bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10",onClick:()=>a(0),children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),e("span",{className:"ml-2 text-neutral-800 text-sm font-medium",children:v.showAllPhotos})]})]})}),e(w,{imgs:o.filter(t=>!!t),isOpen:d,onClose:c,initFocus:u})]})};export{k as default};