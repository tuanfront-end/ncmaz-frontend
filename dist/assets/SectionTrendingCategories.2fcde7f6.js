import{r as h,j as e,a as f,G as y,F as v,U as x,aG as T,B as b,D as k}from"./main.3380b1f5.js";import{a as E}from"./NcModal.ced1a9af.js";import{e as o,C as _}from"./globalVariable.a9ea38a3.js";import{S as A}from"./SectionGridCategoryBox.6abb5a32.js";import{G as O,b as C}from"./queryGraphql.89466fe3.js";const F=({className:d="",lists:r,onChangeSelect:l})=>{const[a,s]=h.exports.useState(r[0]);return h.exports.useEffect(()=>{l&&l(a)},[a]),e("div",{className:`nc-ArchiveFilterListBox ${d}`,"data-nc-id":"ArchiveFilterListBox",children:e(o,{value:a,onChange:s,children:f("div",{className:"relative md:min-w-[200px]",children:[e(o.Button,{as:"div",children:e(E,{children:a.name})}),e(y,{as:h.exports.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e(o.Options,{className:"absolute right-0 z-20 w-52 py-1 mt-1 overflow-auto text-sm text-neutral-900 dark:text-neutral-200 bg-white rounded-2xl shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-900 dark:ring-neutral-700",children:r.map((i,u)=>e(o.Option,{className:({active:t})=>`${t?"text-primary-700 dark:text-neutral-200 bg-primary-50 dark:bg-neutral-700":""} cursor-default select-none relative py-2 pl-10 pr-4`,value:i,children:({selected:t})=>f(v,{children:[e("span",{className:`${t?"font-medium":"font-normal"} block truncate`,children:i.name}),t?e("span",{className:"text-primary-700 absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-200",children:e(_,{className:"w-5 h-5","aria-hidden":"true"})}):null]})},u))})})]})})})};let c=[];const R=({enable:d,orderBy:r,heading:l,subHeading:a,itemPerPage:s,parentId:i,isCategory:u})=>{if(!d)return null;let t=x`
    ${O}
  `,n="NAME",m=null;r==="count"&&(n="COUNT"),r==="term_order"&&(n="TERM_ORDER"),r==="is_child"&&(t=x`
      ${C}
    `,u&&i?(n=null,m=i):n="COUNT");const{data:p,error:S,loading:N}=T(t,{notifyOnNetworkStatusChange:!0,variables:m===null?{first:Number(s)||5,orderby:n}:{first:Number(s)||5,orderby:n,parent:m}});c=(p==null?void 0:p.categories.edges)||[];const g=N&&!c.length;return e(v,{children:f("div",{className:"relative py-16",children:[e(b,{}),e(A,{categories:c,heading:l,subHeading:a,isLoadingSkeleton:g}),e("div",{className:"relative mx-auto flex justify-center",children:e(k,{data:c,error:S,isSkeleton:g})})]})})};export{F as A,R as S};
