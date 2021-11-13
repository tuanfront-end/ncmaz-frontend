var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,o=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&n(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&n(e,a,t[a]);return e},i=(e,l)=>t(e,a(l));import{R as c,_ as d,an as m,r as u,S as g}from"./vendor.cb5650ef.js";import{G as p,P as f,c as v,U as h,A as x,S as E,b as y}from"./PageArchive.05d18fb0.js";import{U as N,D as b,o as k,k as w,N as S,X as C,Y as j,Z as T}from"./main.04c771a4.js";import{B as P}from"./ButtonPrimary.5184b560.js";import{d as I,C as $}from"./CardCategory5Skeleton.39988ce3.js";import{T as O}from"./Tag.314b3d11.js";import{a as A,C as B}from"./CardAuthorBox2Skeleton.0aa96f75.js";import"./ButtonClose.4d1a0f1c.js";import"./SectionGridCategoryBox.74cedc2f.js";const M=e=>{var t=e,{className:a=" ",size:n=" w-9 h-9 "}=t,i=((e,t)=>{var a={};for(var n in e)r.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(t,["className","size"]);return c.createElement("button",o({className:`ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${a} ${n} `+N(!0)},i))},U=({searchText:e,onUpdateTotal:t})=>{const a=d`
    ${p}
  `;let l={first:20};e&&(l={first:20,search:e});const{loading:r,error:s,data:n,fetchMore:g}=m(a,{notifyOnNetworkStatusChange:!0,variables:l});u.exports.useEffect((()=>{if(!(null==n?void 0:n.categories))return;const e=n.categories.pageInfo.hasNextPage?`${null==n?void 0:n.categories.edges.length}+ categories`:`${null==n?void 0:n.categories.edges.length} categories`;t(e)}),[n]);const f=(e,{fetchMoreResult:t})=>{var a,l,r;return(null==(a=null==t?void 0:t.categories)?void 0:a.edges.length)?i(o({},t),{categories:i(o({},t.categories),{edges:[...null==(l=null==e?void 0:e.categories)?void 0:l.edges,...null==(r=null==t?void 0:t.categories)?void 0:r.edges]})}):e},v=r&&!(null==n?void 0:n.categories.edges.length);return c.createElement("div",{className:"mt-8 lg:mt-10"},c.createElement(b,{data:(null==n?void 0:n.categories.edges)||[],isSkeleton:v,error:s}),c.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 "},v&&Array.from("iiiiiiiiiiiiiiiiiiii").map(((e,t)=>c.createElement(I,{key:t}))),((null==n?void 0:n.categories.edges)||[]).map((e=>c.createElement($,{key:e.node.id,taxonomy:e.node})))),(null==n?void 0:n.categories.pageInfo.hasNextPage)&&c.createElement("div",{className:"flex justify-center mt-12 lg:mt-16"},c.createElement(P,{loading:r,onClick:()=>{if(!g)return;const e=null==n?void 0:n.categories.edges.map((e=>e.node.categoryId));g({variables:{exclude:e},updateQuery:f})}},"Show me more")))},z=({searchText:e,orderByState:t,onUpdateTotal:a})=>{var l,r;const s=(null==(l=frontendObject.allSettings)?void 0:l.readingSettingsPostsPerPage)||20;let n={};n={order:"DESC",field:t,first:s,search:e};const g=d`
    ${f}
  `,{loading:p,error:v,data:h,fetchMore:x}=m(g,{notifyOnNetworkStatusChange:!0,variables:n});u.exports.useEffect((()=>{var e;"number"==typeof(null==(e=null==h?void 0:h.posts.pageInfo)?void 0:e.total)&&a(`${null==h?void 0:h.posts.edges.length} articles`||"0 articles")}),[h]);const E=(null==h?void 0:h.posts.edges)||[],y=(e,{fetchMoreResult:t})=>{var a,l,r;return(null==(a=null==t?void 0:t.posts)?void 0:a.edges.length)?i(o({},t),{posts:i(o({},t.posts),{edges:[...null==(l=null==e?void 0:e.posts)?void 0:l.edges,...null==(r=null==t?void 0:t.posts)?void 0:r.edges]})}):e},N=p&&!E.length;return c.createElement("div",{className:"mt-8 lg:mt-10"},c.createElement(b,{className:"my-5",data:E,error:v,isSkeleton:N}),N||E.length?c.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 "},N&&Array.from("88888888").map(((e,t)=>c.createElement(k,{key:t}))),E.map((e=>c.createElement(w,{key:e.node.id,post:e.node})))):null,(null==(r=null==h?void 0:h.posts.pageInfo)?void 0:r.hasNextPage)&&c.createElement("div",{className:"flex justify-center mt-12 lg:mt-16"},c.createElement(P,{onClick:()=>{if(!x)return;const e=E.map((e=>e.node.postId));x({variables:{first:s,notIn:e},updateQuery:y})},loading:p},"Show me more")))},Q=({searchText:e,onUpdateTotal:t})=>{const a=d`
    ${v}
  `;let l={first:30};e&&(l={first:30,search:e});const{loading:r,error:s,data:n,fetchMore:p}=m(a,{notifyOnNetworkStatusChange:!0,variables:l});u.exports.useEffect((()=>{if(!(null==n?void 0:n.tags))return;const e=n.tags.pageInfo.hasNextPage?`${null==n?void 0:n.tags.edges.length}+ tags`:`${null==n?void 0:n.tags.edges.length} tags`;t(e)}),[n]);const f=(e,{fetchMoreResult:t})=>{var a,l,r;return(null==(a=null==t?void 0:t.tags)?void 0:a.edges.length)?i(o({},t),{tags:i(o({},t.tags),{edges:[...null==(l=null==e?void 0:e.tags)?void 0:l.edges,...null==(r=null==t?void 0:t.tags)?void 0:r.edges]})}):e},h=r&&!(null==n?void 0:n.tags.edges.length);return c.createElement("div",{className:"mt-8 lg:mt-10"},c.createElement(b,{data:(null==n?void 0:n.tags.edges)||[],isSkeleton:h,error:s}),c.createElement("div",{className:"w-full flex flex-wrap dark:text-neutral-200"},h&&Array.from("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii").map(((e,t)=>c.createElement(g,{key:t,height:"38px",className:"mr-2.5 mb-2",width:"90px"}))),((null==n?void 0:n.tags.edges)||[]).map((e=>c.createElement(O,{key:e.node.id,tag:e.node,className:"mr-2 mb-2"})))),(null==n?void 0:n.tags.pageInfo.hasNextPage)&&c.createElement("div",{className:"flex justify-center mt-12 lg:mt-16"},c.createElement(P,{loading:r,onClick:()=>{if(!p)return;const e=null==n?void 0:n.tags.edges.map((e=>e.node.tagId));p({variables:{exclude:e},updateQuery:f})}},"Show me more")))},R=({searchText:e,onUpdateTotal:t})=>{const a=d`
    ${h}
  `;let l={first:10};e&&(l={first:10,search:e});const{loading:r,error:s,data:n,fetchMore:g}=m(a,{notifyOnNetworkStatusChange:!0,variables:l});u.exports.useEffect((()=>{var e;"number"==typeof(null==(e=null==n?void 0:n.users.pageInfo)?void 0:e.total)&&t(`${null==n?void 0:n.users.edges.length} authors`||"0 authors")}),[n]);const p=(e,{fetchMoreResult:t})=>{var a,l,r;return(null==(a=null==t?void 0:t.users)?void 0:a.edges.length)?i(o({},t),{users:i(o({},t.users),{edges:[...null==(l=null==e?void 0:e.users)?void 0:l.edges,...null==(r=null==t?void 0:t.users)?void 0:r.edges]})}):e},f=r&&!(null==n?void 0:n.users.edges.length);return c.createElement("div",{className:"mt-8 lg:mt-10"},c.createElement(b,{data:(null==n?void 0:n.users.edges)||[],isSkeleton:f,error:s}),c.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 "},f&&Array.from("iiiiiiiiiiiiiiiiiiii").map(((e,t)=>c.createElement(A,{key:t}))),((null==n?void 0:n.users.edges)||[]).map((e=>c.createElement(B,{key:e.node.id,author:e.node})))),(null==n?void 0:n.users.pageInfo.hasNextPage)&&c.createElement("div",{className:"flex justify-center mt-12 lg:mt-16"},c.createElement(P,{loading:r,onClick:()=>{if(!g)return;const e=null==n?void 0:n.users.edges.map((e=>e.node.userId));g({variables:{exclude:e},updateQuery:p})}},"Show me more")))},D=y,L=["Articles","Categories","Tags","Authors"],_=({className:e="",sectionCategoriesTrending:t,searchQuery:a,listSuggestions:l,headerBackgroundImg:r})=>{const[s,n]=u.exports.useState(D[0].value),[d,m]=u.exports.useState(L[0]),[p,f]=u.exports.useState(""),[v,h]=u.exports.useState(a);u.exports.useEffect((()=>{const e=document.getElementById("ncmaz-search-input");e&&(e.value=v)}),[v]);const y=e=>{var t;e.preventDefault();const a=null==(t=document.getElementById("ncmaz-search-input"))?void 0:t.value;h(a)};return c.createElement("div",{className:`nc-PageSearch overflow-hidden ${e}`,"data-nc-id":"PageSearch"},c.createElement("div",{className:"w-screen px-2 max-w-full 2xl:max-w-screen-2xl mx-auto"},c.createElement("div",{className:"rounded-3xl relative aspect-w-16 aspect-h-12 sm:aspect-h-7 xl:aspect-h-5 overflow-hidden "},c.createElement(S,{containerClassName:"absolute inset-0",src:r.url||"https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",className:"object-cover w-full h-full"})),c.createElement("div",{className:"relative container -mt-20 lg:-mt-48"},c.createElement("div",{className:" bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-16 rounded-[40px] shadow-2xl flex items-center"},c.createElement("header",{className:"w-full max-w-3xl mx-auto text-center flex flex-col items-center"},c.createElement("h2",{className:"text-2xl sm:text-4xl font-semibold"},v||'" "'),p?c.createElement("div",{className:"text-xs sm:text-sm mt-4 text-neutral-500 dark:text-neutral-300",dangerouslySetInnerHTML:{__html:p}}):c.createElement("div",{className:"flex-shrink w-full max-w-md mt-4 text-sm"},c.createElement(g,null)),c.createElement("form",{className:"relative w-full mt-8 sm:mt-11 text-left",method:"post",onSubmit:y},c.createElement("label",{htmlFor:"search-input",className:"text-neutral-500 dark:text-neutral-300"},c.createElement("span",{className:"sr-only"},"Search all icons"),c.createElement(C,{id:"ncmaz-search-input",type:"search",placeholder:"Type and press enter",sizeClass:"pl-14 py-5 pr-5 md:pl-16",defaultValue:v}),c.createElement(M,{className:"absolute right-2.5 top-1/2 transform -translate-y-1/2",size:" w-11 h-11",type:"submit"},c.createElement("i",{className:"las la-arrow-right text-xl"})),c.createElement("span",{className:"absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6"},c.createElement("svg",{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},c.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"}))))),l&&l.length?c.createElement("div",{className:"w-full text-sm text-left mt-4 text-neutral-500 dark:text-neutral-300"},c.createElement("div",{className:"inline-block text-primary-500"},c.createElement("span",{className:"mr-2.5 text-neutral-700"},"Suggestions:"),l.map(((e,t)=>c.createElement("p",{key:t,className:"mr-2.5 inline-block cursor-pointer",onClick:()=>h(e)},e))))):null)))),c.createElement("div",{className:"container py-16 lg:py-28 space-y-16 lg:space-y-28"},c.createElement("div",null,c.createElement("div",{className:"flex flex-col sm:items-center sm:justify-between sm:flex-row"},c.createElement(j,{containerClassName:"w-full overflow-x-auto hiddenScrollbar",className:"sm:space-x-2"},L.map(((e,t)=>c.createElement(T,{key:t,isActive:d===e,onClick:()=>(e=>{e!==d&&m(e)})(e)},e)))),c.createElement("div",{className:"block my-4 border-b w-full border-neutral-100 sm:hidden"}),"Articles"===d?c.createElement("div",{className:"flex justify-end"},c.createElement(x,{onChangeSelect:e=>{n(e.value)},lists:D})):null),(()=>{let e=` were found for keyword <strong>${v||'" "'}</strong>`;switch(d){case"Articles":return c.createElement(z,{orderByState:s,searchText:v,onUpdateTotal:t=>{e=`<strong>${t}</strong>`+e,f(e)}});case"Categories":return c.createElement(U,{onUpdateTotal:t=>{e=`<strong>${t}</strong>`+e,f(e)},searchText:v});case"Tags":return c.createElement(Q,{onUpdateTotal:t=>{e=`<strong>${t}</strong>`+e,f(e)},searchText:v});case"Authors":return c.createElement(R,{onUpdateTotal:t=>{e=`<strong>${t}</strong>`+e,f(e),f(e)},searchText:v});default:return null}})()),t.enable&&c.createElement(E,i(o({},t),{isCategory:!1}))))};export{_ as default};
