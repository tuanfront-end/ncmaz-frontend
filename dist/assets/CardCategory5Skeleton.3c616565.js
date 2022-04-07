import{j as a,d as e,a5 as m,N as c,x as p,S as d}from"./main.5ffc876d.js";const g=({className:t="",taxonomy:s,index:r})=>{const{count:n,name:o,link:i,ncTaxonomyMeta:u}=s,{featuredImage:l}=u;return a("a",{href:i,className:`nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ]  ${t}`,"data-nc-id":"CardCategory2",children:[r&&e(m,{color:r==="#1"?"red":r==="#2"?"purple":"green",name:r,className:"absolute top-3 left-3"}),e(c,{containerClassName:"flex-shrink-0 w-20 h-20 rounded-full overflow-hidden",src:(l==null?void 0:l.sourceUrl)||"."}),a("div",{className:"mt-3 ",children:[e("h4",{className:"text-base sm:text-lg font-semibold ",children:e("span",{className:"line-clamp-1",children:o})}),a("span",{className:"block mt-[2px] text-sm text-neutral-500 dark:text-neutral-400",children:[n," ",p.articles]})]})]})},f=({className:t="",taxonomy:s})=>{const{count:r,name:n,link:o,ncTaxonomyMeta:i}=s,{color:u,featuredImage:l}=i;return a("a",{href:o,className:`nc-CardCategory3 flex flex-col ${t}`,"data-nc-id":"CardCategory3",children:[a("div",{className:"flex-shrink-0 relative w-full aspect-w-5 aspect-h-4 sm:aspect-h-7 h-0 rounded-2xl overflow-hidden group",children:[e(c,{src:(l==null?void 0:l.sourceUrl)||".",className:"object-cover w-full h-full rounded-2xl"}),e("span",{className:"opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"})]}),a("div",{className:"mt-4 truncate",children:[e("h4",{className:"text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-semibold truncate",children:n}),a("span",{className:"block mt-1 text-sm text-neutral-6000 dark:text-neutral-400",children:[r," ",p.articles]})]})]})},y=({className:t="",taxonomy:s,index:r})=>{const{count:n,name:o,link:i,ncTaxonomyMeta:u}=s,{color:l,featuredImage:h}=u,x=()=>{switch(l){case"pink":return"bg-pink-500";case"red":return"bg-red-500";case"gray":return"bg-gray-500";case"green":return"bg-green-500";case"purple":return"bg-purple-500";case"indigo":return"bg-indigo-500";case"yellow":return"bg-yellow-500";case"blue":return"bg-blue-500";default:return"bg-pink-500"}};return a("a",{href:i,className:`nc-CardCategory4 flex flex-col ${t}`,"data-nc-id":"CardCategory4",children:[a("div",{className:"flex-shrink-0 relative w-full aspect-w-7 aspect-h-5 h-0 rounded-3xl overflow-hidden group",children:[e(c,{src:(h==null?void 0:h.sourceUrl)||".",className:"object-cover w-full h-full rounded-2xl"}),e("div",{children:r&&e(m,{color:l,name:r,className:"absolute top-3 left-3"})}),e("span",{className:"opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"})]}),a("div",{className:"flex items-center mt-5",children:[e("div",{className:`flex-shrink-0 w-10 h-10 ${x()} rounded-full`}),a("div",{className:"ml-3 truncate",children:[e("h3",{className:"text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate",children:o}),a("span",{className:"block mt-1 text-sm text-neutral-6000 dark:text-neutral-400",children:[n," ",p.articles]})]})]})]})},N=({className:t="",taxonomy:s})=>{const{count:r,name:n,link:o,ncTaxonomyMeta:i}=s,{color:u,featuredImage:l}=i;return a("a",{href:o,className:`nc-CardCategory5 relative block group ${t}`,"data-nc-id":"CardCategory5",children:[a("div",{className:"flex-shrink-0 relative w-full aspect-w-7 aspect-h-7 sm:aspect-h-5 h-0 rounded-2xl sm:rounded-3xl overflow-hidden group",children:[e(c,{src:(l==null?void 0:l.sourceUrl)||".",className:"object-cover w-full h-full rounded-2xl"}),e("span",{className:"absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"})]}),e(m,{className:"absolute top-3 right-3",color:u,name:a("div",{children:[r,e("i",{className:"ml-3 las la-arrow-right"})]})}),e("div",{className:"absolute inset-0 flex items-center justify-center",children:e("h3",{className:"text-base font-medium px-4 py-2 sm:px-6 sm:py-3 bg-white text-neutral-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-full border-2 border-white border-opacity-60",children:a("span",{className:"line-clamp-1",children:[" ",n]})})})]})},k=({className:t=""})=>a("div",{className:`nc-CardCategory2Skeleton relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ]  ${t}`,"data-nc-id":"CardCategory2Skeleton",children:[e(c,{containerClassName:"flex-shrink-0 w-20 h-20 rounded-full overflow-hidden",src:"."}),a("div",{className:"mt-3 w-full",children:[e("h4",{className:"text-base sm:text-lg font-semibold ",children:e(d,{width:"80%"})}),e("span",{className:"block w-full mt-[2px] text-sm text-neutral-500 dark:text-neutral-400",children:e(d,{width:"60%"})})]})]}),v=({className:t=""})=>a("div",{className:`nc-CardCategory3Skeleton flex flex-col ${t}`,"data-nc-id":"CardCategory3Skeleton",children:[a("div",{className:"flex-shrink-0 relative w-full aspect-w-5 aspect-h-4 sm:aspect-h-7 h-0 rounded-2xl overflow-hidden group",children:[e(c,{src:".",className:"object-cover w-full h-full rounded-2xl"}),e("span",{className:"opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"})]}),a("div",{className:"mt-4 truncate",children:[e("h4",{className:"text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-semibold truncate",children:e(d,{})}),e("span",{className:"block mt-2 text-sm text-neutral-6000 dark:text-neutral-400",children:e(d,{width:"30%"})})]})]}),C=({className:t="",index:s})=>a("div",{className:`nc-CardCategory4Skeleton flex flex-col ${t}`,"data-nc-id":"CardCategory4Skeleton",children:[a("div",{className:"flex-shrink-0 relative w-full aspect-w-7 aspect-h-5 h-0 rounded-3xl overflow-hidden group",children:[e(c,{src:".",className:"object-cover w-full h-full rounded-2xl"}),e("div",{children:s&&e(m,{color:"pink",name:s,className:"absolute top-3 left-3"})}),e("span",{className:"opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"})]}),a("div",{className:"flex items-center mt-5",children:[e("div",{className:"flex-shrink-0 w-10 h-10 bg-pink-500 rounded-full"}),a("div",{className:"ml-3 truncate flex-grow",children:[e("h3",{className:"text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate",children:e(d,{width:"90%"})}),e("span",{className:"block mt-1 text-sm text-neutral-6000 dark:text-neutral-400",children:e(d,{width:"30%"})})]})]})]}),w=({className:t=""})=>a("div",{className:`nc-CardCategory5Skeleton relative block group ${t}`,"data-nc-id":"CardCategory5Skeleton",children:[a("div",{className:"flex-shrink-0 relative w-full aspect-w-7 aspect-h-7 sm:aspect-h-5 h-0 rounded-2xl sm:rounded-3xl overflow-hidden group",children:[e(c,{src:".",className:"object-cover w-full h-full rounded-2xl"}),e("span",{className:"absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"})]}),e(m,{className:"absolute top-3 right-3",color:"pink",name:e("div",{children:e("i",{className:"ml-3 las la-arrow-right"})})}),e("div",{className:"absolute inset-0 flex items-center justify-center",children:e("h4",{className:"text-base font-medium px-4 py-2 sm:px-6 sm:py-3 bg-white text-neutral-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-full border-2 border-white border-opacity-60",children:e(d,{width:"100px"})})})]});export{g as C,N as a,y as b,f as c,k as d,w as e,C as f,v as g};
