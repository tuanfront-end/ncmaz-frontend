import{r as e,Q as a,R as t,ao as l}from"./vendor.49610682.js";import{N as s,F as n,h as r}from"./main.fbb9edbc.js";import{B as o}from"./ButtonClose.4aa7dc35.js";const c=({imgs:r,isOpen:c,onClose:i,initFocus:m=0})=>{const d="modalPhotos-single-gallery";e.exports.useEffect((()=>{c&&document.querySelector(`.${d}`)&&new a(`.${d}`,{gap:10,perView:1,startAt:m}).mount()}),[c,m]);return t.createElement(l,{as:"div",className:"fixed inset-0 z-max overflow-y-auto dark bg-neutral-800 text-neutral-200 hiddenScrollbar",onClose:i,open:c},t.createElement("div",{className:"min-h-screen px-4 text-center"},t.createElement(l.Overlay,{className:"fixed inset-0 bg-white dark:bg-neutral-800"}),t.createElement("div",{className:"absolute left-2 top-2 md:top-4 md:left-4 z-max"},t.createElement(o,{iconSize:"w-6 h-6",className:" w-11 h-11",onClick:i})),t.createElement("span",{className:"inline-block h-screen align-middle","aria-hidden":"true"},"​"),t.createElement("div",{className:"relative inline-block w-full max-w-5xl py-8 h-screen align-middle mx-auto"},t.createElement("div",{className:`${d} group relative flex flex-col z-10 w-full h-full`},t.createElement("div",{className:"controls_nav glide__bullets mt-8 mb-5","data-glide-el":"controls[nav]"},r.map(((e,a)=>t.createElement("div",{key:a,className:"text-center hidden"},t.createElement("span",{className:"text-3xl font-semibold"}," ",a+1),t.createElement("span",null," / ",r.length))))),t.createElement("div",{className:"glide__track max-h-full h-full relative z-50","data-glide-el":"track"},t.createElement("ul",{className:"glide__slides h-full"},r.map(((e,a)=>t.createElement("li",{className:"glide__slide relative h-full",key:a},t.createElement(s,{src:e,containerClassName:" w-full h-full",className:"absolute object-contain w-full max-h-screen"})))))),t.createElement("div",{className:"xl:absolute z-20 xl:-inset-x-20 max-w-6xl my-2 mx-auto top-full xl:top-1/2 transform xl:-translate-y-1/2 flex xl:justify-between glide__arrows","data-glide-el":"controls"},t.createElement(n,{onlyPrev:!0,containerClassName:"mr-1.5",btnClassName:"w-8 h-8 sm:w-10 sm:h-10 "}),t.createElement(n,{onlyNext:!0,containerClassName:"ml-1.5",btnClassName:"w-8 h-8 sm:w-10 sm:h-10 "}))))))},i=({className:a="",photos:l=[]})=>{let n=l.filter((e=>!!e));if(n=n.filter(((e,a)=>a<6)),!n[0])return null;const[o,i]=e.exports.useState(!1),[m,d]=e.exports.useState(0),u=e=>{i(!0),d(e)};return t.createElement("div",null,t.createElement("header",{className:"rounded-xl"},t.createElement("div",{className:"relative grid grid-cols-3 sm:grid-cols-4 gap-2 my-10"},t.createElement("div",{className:"col-span-2 row-span-2 relative rounded-xl overflow-hidden cursor-pointer",onClick:()=>u(0)},t.createElement(s,{containerClassName:"absolute inset-0",className:"object-cover w-full h-full rounded-xl",src:n[0]}),t.createElement("div",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"})),n.filter(((e,a)=>a>=1)).map(((e,a)=>t.createElement("div",{key:a,className:"relative rounded-xl overflow-hidden "+(a>=2?"hidden sm:block":"")},t.createElement(s,{containerClassName:"aspect-w-6 aspect-h-5",className:"object-cover w-full h-full rounded-xl ",src:e||""}),t.createElement("div",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer",onClick:()=>u(a+1)})))),t.createElement("div",{className:"absolute hidden md:flex md:items-center md:justify-center right-3 bottom-3 px-4 py-2 rounded-full bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10",onClick:()=>u(0)},t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})),t.createElement("span",{className:"ml-2 text-neutral-800 text-sm font-medium"},r.showAllPhotos)))),t.createElement(c,{imgs:n,isOpen:o,onClose:()=>i(!1),initFocus:m}))};export{i as default};
