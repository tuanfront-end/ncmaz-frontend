var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,n=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&o(e,a,t[a]);if(r)for(var a of r(t))l.call(t,a)&&o(e,a,t[a]);return e},i=(e,r)=>t(e,a(r));import{R as c,g as d,as as m,r as u,S as g}from"./vendor.3b208adb.js";import{G as p,P as f,c as v,U as h,A as x,S as E,b as y}from"./PageArchive.5b35f6bd.js";import{t as b,D as N,a as k,N as w,I as C}from"./main.38f90968.js";import{N as j,a as S}from"./NavItem.9196150d.js";import{B as P}from"./ButtonPrimary.02853f4e.js";import{d as T,C as M}from"./CardCategory5Skeleton.03f5b4c8.js";import{C as I}from"./Card11.489c75a7.js";import{C as $}from"./Card11Skeleton.7709eb23.js";import{T as O}from"./Tag.8ef71625.js";import{a as A,C as B}from"./CardAuthorBox2Skeleton.f7a0ddbf.js";import"./ButtonClose.fb2fc9ce.js";import"./CardCategory1Skeleton.f0f23bbe.js";import"./BackgroundSection.30b8e4d0.js";import"./SectionGridCategoryBox.bca2b1ec.js";import"./Heading.ac513da6.js";import"./NextPrev.9a4e713f.js";import"./PostFeaturedMedia.51066710.js";import"./PostCardLikeAction.b4c5e7c8.js";import"./hooks.311923ab.js";import"./index.1eeac341.js";import"./ButtonPlayMusicRunningContainer.ddfdb527.js";import"./PostCardMeta.594360a7.js";import"./formatDate.5c5d9c4d.js";const U=e=>{var t=e,{className:a=" ",size:o=" w-9 h-9 "}=t,i=((e,t)=>{var a={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&r)for(var o of r(e))t.indexOf(o)<0&&l.call(e,o)&&(a[o]=e[o]);return a})(t,["className","size"]);return c.createElement("button",n({className:`ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${a} ${o} `+b(!0)},i))},z=({searchText:e,onUpdateTotal:t})=>{const a=d`
    ${p}
  `;let r={first:20};e&&(r={first:20,search:e});const{loading:s,error:l,data:o,fetchMore:g}=m(a,{notifyOnNetworkStatusChange:!0,variables:r});u.exports.useEffect((()=>{if(!(null==o?void 0:o.categories))return;const e=o.categories.pageInfo.hasNextPage?`${null==o?void 0:o.categories.edges.length}+ categories`:`${null==o?void 0:o.categories.edges.length} categories`;t(e)}),[o]);const f=(e,{fetchMoreResult:t})=>{var a,r,s;return(null==(a=null==t?void 0:t.categories)?void 0:a.edges.length)?i(n({},t),{categories:i(n({},t.categories),{edges:[...null==(r=null==e?void 0:e.categories)?void 0:r.edges,...null==(s=null==t?void 0:t.categories)?void 0:s.edges]})}):e},v=s&&!(null==o?void 0:o.categories.edges.length);return c.createElement("div",{className:"mt-8 lg:mt-10"},c.createElement(N,{data:(null==o?void 0:o.categories.edges)||[],isSkeleton:v,error:l}),c.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 2xl:gap-8 "},v&&Array.from("iiiiiiiiiiiiiiiiiiii").map(((e,t)=>c.createElement(T,{key:t}))),((null==o?void 0:o.categories.edges)||[]).map((e=>c.createElement(M,{key:e.node.id,taxonomy:e.node})))),(null==o?void 0:o.categories.pageInfo.hasNextPage)&&c.createElement("div",{className:"flex justify-center mt-12 lg:mt-16"},c.createElement(P,{loading:s,onClick:()=>{if(!g)return;const e=null==o?void 0:o.categories.edges.map((e=>e.node.categoryId));g({variables:{exclude:e},updateQuery:f})}},k.showMeMore)))},R=({searchText:e,orderByState:t,onUpdateTotal:a})=>{var r,s;const l=(null==(r=frontendObject.allSettings)?void 0:r.readingSettingsPostsPerPage)||20;let o={};o={order:"DESC",field:t,first:l,search:e};const g=d`
    ${f}
  `,{loading:p,error:v,data:h,fetchMore:x}=m(g,{notifyOnNetworkStatusChange:!0,variables:o});u.exports.useEffect((()=>{var e;"number"==typeof(null==(e=null==h?void 0:h.posts.pageInfo)?void 0:e.total)&&a(`${null==h?void 0:h.posts.edges.length} articles`||"0 articles")}),[h]);const E=(null==h?void 0:h.posts.edges)||[],y=(e,{fetchMoreResult:t})=>{var a,r,s;return(null==(a=null==t?void 0:t.posts)?void 0:a.edges.length)?i(n({},t),{posts:i(n({},t.posts),{edges:[...null==(r=null==e?void 0:e.posts)?void 0:r.edges,...null==(s=null==t?void 0:t.posts)?void 0:s.edges]})}):e},b=p&&!E.length;return c.createElement("div",{className:"mt-8 lg:mt-10"},c.createElement(N,{className:"my-5",data:E,error:v,isSkeleton:b}),b||E.length?c.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8 "},b&&Array.from("88888888").map(((e,t)=>c.createElement($,{key:t}))),E.map((e=>c.createElement(I,{key:e.node.id,post:e.node})))):null,(null==(s=null==h?void 0:h.posts.pageInfo)?void 0:s.hasNextPage)&&c.createElement("div",{className:"flex justify-center mt-12 lg:mt-16"},c.createElement(P,{onClick:()=>{if(!x)return;const e=E.map((e=>e.node.postId));x({variables:{first:l,notIn:e},updateQuery:y})},loading:p},k.showMeMore)))},D=({searchText:e,onUpdateTotal:t})=>{const a=d`
    ${v}
  `;let r={first:30};e&&(r={first:30,search:e});const{loading:s,error:l,data:o,fetchMore:p}=m(a,{notifyOnNetworkStatusChange:!0,variables:r});u.exports.useEffect((()=>{if(!(null==o?void 0:o.tags))return;const e=o.tags.pageInfo.hasNextPage?`${null==o?void 0:o.tags.edges.length}+ tags`:`${null==o?void 0:o.tags.edges.length} tags`;t(e)}),[o]);const f=(e,{fetchMoreResult:t})=>{var a,r,s;return(null==(a=null==t?void 0:t.tags)?void 0:a.edges.length)?i(n({},t),{tags:i(n({},t.tags),{edges:[...null==(r=null==e?void 0:e.tags)?void 0:r.edges,...null==(s=null==t?void 0:t.tags)?void 0:s.edges]})}):e},h=s&&!(null==o?void 0:o.tags.edges.length);return c.createElement("div",{className:"mt-8 lg:mt-10"},c.createElement(N,{data:(null==o?void 0:o.tags.edges)||[],isSkeleton:h,error:l}),c.createElement("div",{className:"w-full flex flex-wrap dark:text-neutral-200"},h&&Array.from("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii").map(((e,t)=>c.createElement(g,{key:t,height:"38px",className:"mr-2.5 mb-2",width:"90px"}))),((null==o?void 0:o.tags.edges)||[]).map((e=>c.createElement(O,{key:e.node.id,tag:e.node,className:"mr-2 mb-2"})))),(null==o?void 0:o.tags.pageInfo.hasNextPage)&&c.createElement("div",{className:"flex justify-center mt-12 lg:mt-16"},c.createElement(P,{loading:s,onClick:()=>{if(!p)return;const e=null==o?void 0:o.tags.edges.map((e=>e.node.tagId));p({variables:{exclude:e},updateQuery:f})}},k.showMeMore)))},L=({searchText:e,onUpdateTotal:t})=>{const a=d`
    ${h}
  `;let r={first:10};e&&(r={first:10,search:e});const{loading:s,error:l,data:o,fetchMore:g}=m(a,{notifyOnNetworkStatusChange:!0,variables:r});u.exports.useEffect((()=>{var e;"number"==typeof(null==(e=null==o?void 0:o.users.pageInfo)?void 0:e.total)&&t(`${null==o?void 0:o.users.edges.length} authors`||"0 authors")}),[o]);const p=(e,{fetchMoreResult:t})=>{var a,r,s;return(null==(a=null==t?void 0:t.users)?void 0:a.edges.length)?i(n({},t),{users:i(n({},t.users),{edges:[...null==(r=null==e?void 0:e.users)?void 0:r.edges,...null==(s=null==t?void 0:t.users)?void 0:s.edges]})}):e},f=s&&!(null==o?void 0:o.users.edges.length);return c.createElement("div",{className:"mt-8 lg:mt-10"},c.createElement(N,{data:(null==o?void 0:o.users.edges)||[],isSkeleton:f,error:l}),c.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 2xl:gap-8 "},f&&Array.from("iiiiiiiiiiiiiiiiiiii").map(((e,t)=>c.createElement(A,{key:t}))),((null==o?void 0:o.users.edges)||[]).map((e=>c.createElement(B,{key:e.node.id,author:e.node})))),(null==o?void 0:o.users.pageInfo.hasNextPage)&&c.createElement("div",{className:"flex justify-center mt-12 lg:mt-16"},c.createElement(P,{loading:s,onClick:()=>{if(!g)return;const e=null==o?void 0:o.users.edges.map((e=>e.node.userId));g({variables:{exclude:e},updateQuery:p})}},k.showMeMore)))},Q=y,F=["Articles","Categories","Tags","Authors"],G=({className:e="",sectionCategoriesTrending:t,searchQuery:a,listSuggestions:r,headerBackgroundImg:s})=>{const[l,o]=u.exports.useState(Q[0].value),[d,m]=u.exports.useState(F[0]),[p,f]=u.exports.useState(""),[v,h]=u.exports.useState(a);u.exports.useEffect((()=>{const e=document.getElementById("ncmaz-search-input");e&&(e.value=v)}),[v]);const y=e=>{var t;e.preventDefault();const a=null==(t=document.getElementById("ncmaz-search-input"))?void 0:t.value;h(a)};return c.createElement("div",{className:`nc-PageSearch overflow-hidden ${e}`,"data-nc-id":"PageSearch"},c.createElement("div",{className:"w-screen px-2 max-w-full 2xl:max-w-screen-2xl mx-auto"},c.createElement("div",{className:"rounded-3xl relative aspect-w-16 aspect-h-12 sm:aspect-h-7 xl:aspect-h-5 overflow-hidden "},c.createElement(w,{containerClassName:"absolute inset-0",src:s.url||"https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",className:"object-cover w-full h-full"})),c.createElement("div",{className:"relative container -mt-20 lg:-mt-48"},c.createElement("div",{className:" bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-16 rounded-[40px] shadow-2xl flex items-center"},c.createElement("header",{className:"w-full max-w-3xl mx-auto text-center flex flex-col items-center"},c.createElement("h2",{className:"text-2xl sm:text-4xl font-semibold"},v||'" "'),p?c.createElement("div",{className:"text-xs sm:text-sm mt-4 text-neutral-500 dark:text-neutral-300",dangerouslySetInnerHTML:{__html:p}}):c.createElement("div",{className:"flex-shrink w-full max-w-md mt-4 text-sm"},c.createElement(g,null)),c.createElement("form",{className:"relative w-full mt-8 sm:mt-11 text-left",method:"post",onSubmit:y},c.createElement("label",{htmlFor:"search-input",className:"text-neutral-500 dark:text-neutral-300"},c.createElement("span",{className:"sr-only"},"Search all icons"),c.createElement(C,{id:"ncmaz-search-input",type:"search",placeholder:"Type and press enter",sizeClass:"pl-14 py-5 pr-5 md:pl-16",defaultValue:v}),c.createElement(U,{className:"absolute right-2.5 top-1/2 transform -translate-y-1/2",size:" w-11 h-11",type:"submit"},c.createElement("i",{className:"las la-arrow-right text-xl"})),c.createElement("span",{className:"absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6"},c.createElement("svg",{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},c.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"}))))),r&&r.length?c.createElement("div",{className:"w-full text-sm text-left mt-4 text-neutral-500 dark:text-neutral-300"},c.createElement("div",{className:"inline-block text-primary-500"},c.createElement("span",{className:"mr-2.5 text-neutral-700"},"Suggestions:"),r.map(((e,t)=>c.createElement("p",{key:t,className:"mr-2.5 inline-block cursor-pointer",onClick:()=>h(e)},e))))):null)))),c.createElement("div",{className:"container py-16 lg:py-28 space-y-16 lg:space-y-28"},c.createElement("div",null,c.createElement("div",{className:"flex flex-col sm:items-center sm:justify-between sm:flex-row"},c.createElement(j,{containerClassName:"w-full overflow-x-auto hiddenScrollbar",className:"sm:space-x-2"},F.map(((e,t)=>c.createElement(S,{key:t,isActive:d===e,onClick:()=>(e=>{e!==d&&m(e)})(e)},e)))),c.createElement("div",{className:"block my-4 border-b w-full border-neutral-100 sm:hidden"}),"Articles"===d?c.createElement("div",{className:"flex justify-end"},c.createElement(x,{onChangeSelect:e=>{o(e.value)},lists:Q})):null),(()=>{let e=` were found for keyword <strong>${v||'" "'}</strong>`;switch(d){case"Articles":return c.createElement(R,{orderByState:l,searchText:v,onUpdateTotal:t=>{e=`<strong>${t}</strong>`+e,f(e)}});case"Categories":return c.createElement(z,{onUpdateTotal:t=>{e=`<strong>${t}</strong>`+e,f(e)},searchText:v});case"Tags":return c.createElement(D,{onUpdateTotal:t=>{e=`<strong>${t}</strong>`+e,f(e)},searchText:v});case"Authors":return c.createElement(L,{onUpdateTotal:t=>{e=`<strong>${t}</strong>`+e,f(e),f(e)},searchText:v});default:return null}})()),t.enable&&c.createElement(E,i(n({},t),{isCategory:!1}))))};export{G as default};
