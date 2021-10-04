import{R as e,H as t}from"./vendor.061fbf51.js";import{N as r}from"./NcImage.8e407e46.js";import{B as a}from"./ButtonPlayMusicRunningContainer.7a0e7bf7.js";const l=({className:t="h-full",post:l})=>{var n;const{title:o,link:s,featuredImage:c,postFormats:i,excerpt:m}=l,d=null==(n=null==i?void 0:i.edges[0])?void 0:n.node.name,u=t=>e.createElement("div",{className:"inline-flex items-center mt-3 pr-4 py-0.5 cursor-pointer rounded-full transition-all hover:pl-0.5 hover:bg-primary-50 dark:hover:bg-neutral-900"},e.createElement("span",{className:"w-8 h-8 flex items-center justify-center rounded-full bg-primary-50 dark:bg-neutral-800 text-primary-6000 dark:text-primary-200"},(t=>{switch(t){case"loading":return e.createElement("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24"},e.createElement("path",{fill:"currentColor",d:"M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"}),e.createElement("path",{fill:"currentColor",d:"M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"}),e.createElement("path",{fill:"currentColor",d:"M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"}));case"playing":return e.createElement("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24"},e.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M15.25 6.75V17.25"}),e.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M8.75 6.75V17.25"}));default:return e.createElement("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24"},e.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M18.25 12L5.75 5.75V18.25L18.25 12Z"}))}})(t)),e.createElement("span",{className:"ml-3 text-sm font-medium"},"playing"===t?"Now playing":"Listen now"));return e.createElement("div",{className:`nc-Card15Podcast relative flex group items-center p-3 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${t}`,"data-nc-id":"Card15Podcast"},e.createElement("div",{className:"w-1/4 flex-shrink-0"},e.createElement("a",{href:s,className:"block h-0 aspect-w-1 aspect-h-1 relative rounded-full overflow-hidden shadow-lg "},e.createElement(r,{containerClassName:"absolute inset-0",className:"object-cover w-full h-full ",src:(null==c?void 0:c.node.sourceUrl)||".",alt:o}))),e.createElement("div",{className:"flex flex-col flex-grow ml-4 overflow-hidden"},e.createElement("h2",{className:"nc-card-title block font-semibold text-lg"},e.createElement("a",{href:s,className:"line-clamp-1",title:o},o)),m?e.createElement("span",{className:"text-xs text-neutral-500 dark:text-neutral-400 mt-1 "},e.createElement("span",{className:"line-clamp-1",dangerouslySetInnerHTML:{__html:m}})):null,("Video"===d||"Audio"===d)&&e.createElement(a,{post:l,className:"",renderDefaultBtn:()=>u(),renderLoadingBtn:()=>u("loading"),renderPlayingBtn:()=>u("playing")})))},n=({className:a="h-full"})=>{return e.createElement("div",{className:`nc-Card15PodcastSkeleton relative flex group items-center p-3 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${a}`,"data-nc-id":"Card15PodcastSkeleton"},e.createElement("div",{className:"w-1/4 flex-shrink-0"},e.createElement("div",{className:"block h-0 aspect-w-1 aspect-h-1 relative rounded-full overflow-hidden shadow-lg "},e.createElement(r,{containerClassName:"absolute inset-0",className:"object-cover w-full h-full ",src:"."}))),e.createElement("div",{className:"flex flex-col flex-grow ml-4 overflow-hidden"},e.createElement("h2",{className:"nc-card-title block font-semibold text-lg"},e.createElement(t,null)),e.createElement("span",{className:"text-xs text-neutral-500 dark:text-neutral-400 mt-1"},e.createElement(t,{width:"40%"})),e.createElement("div",{className:"inline-flex items-center mt-3 pr-4 py-0.5 cursor-pointer rounded-full transition-all hover:pl-0.5 hover:bg-primary-50 dark:hover:bg-neutral-900"},e.createElement("span",{className:"w-8 h-8 flex items-center justify-center rounded-full bg-primary-50 dark:bg-neutral-800 text-primary-6000 dark:text-primary-200"},(t=>{switch(t){case"loading":return e.createElement("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24"},e.createElement("path",{fill:"currentColor",d:"M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"}),e.createElement("path",{fill:"currentColor",d:"M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"}),e.createElement("path",{fill:"currentColor",d:"M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"}));case"playing":return e.createElement("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24"},e.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M15.25 6.75V17.25"}),e.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M8.75 6.75V17.25"}));default:return e.createElement("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24"},e.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M18.25 12L5.75 5.75V18.25L18.25 12Z"}))}})(l)),e.createElement("span",{className:"ml-3 text-sm font-medium"},"playing"===l?"Now playing":"Listen now"))));var l};export{n as C,l as a};
