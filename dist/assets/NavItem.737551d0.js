import{j as s,b as c,t as o}from"./main.8abeeeff.js";const d=({containerClassName:a="",className:e="",children:t})=>s("nav",{className:`nc-Nav ${a}`,"data-nc-id":"Nav",children:s("ul",{className:`flex  ${e}`,children:t})}),u=({className:a="px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize",radius:e="rounded-full",children:t,onClick:n=()=>{},isActive:l=!1,renderX:r})=>c("li",{className:"nc-NavItem flex-shrink-0 relative","data-nc-id":"NavItem",children:[r&&r,s("button",{className:`block !leading-none font-medium ${a} ${e} ${l?"bg-secondary-900 text-secondary-50 ":"text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"} ${o()}`,onClick:()=>{n&&n()},children:t})]});export{d as N,u as a};
