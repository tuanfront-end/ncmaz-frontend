import{j as s,t as $,U as y,a6 as w,r as _,N as n,a as l,D as v,aA as L,aB as j,V as B}from"./main.34e66e24.js";import{A as G,S as U}from"./SectionTrendingCategories.7dcf9b2b.js";import{N as F}from"./NcImage.ade98c61.js";import{b as D,P as Q,c as V,a as z,U as K}from"./queryGraphql.09c22fd9.js";import{B as A}from"./ButtonPrimary.de7ce25e.js";import{d as Y,C as q}from"./CardCategory5Skeleton.96124377.js";import{C as H}from"./Card11.e0068d0a.js";import{C as W}from"./Card11Skeleton.bdef37f4.js";import{S as O}from"./index.f687d756.js";import{T as X}from"./Tag.8f81a415.js";import{a as Z,C as J}from"./CardAuthorBox2Skeleton.65449973.js";import"./NcModal.531821de.js";import"./ButtonClose.f5e1f7cb.js";import"./CheckIcon.131ef3e4.js";import"./SectionGridCategoryBox.697c35ee.js";import"./CardCategory1Skeleton.a2bb3343.js";import"./Badge.f199b620.js";import"./CategoryBadgeList.15b49218.js";import"./PostCardLikeAndComment.1a0d1b75.js";import"./PostCardLikeAction.6615aa1b.js";import"./PostCardMeta.ca35dde2.js";import"./formatDate.81b7fc4e.js";import"./PostFeaturedMedia.98acb6e2.js";import"./PostTypeFeaturedIcon.9d6efce0.js";import"./index.349d48d2.js";import"./ButtonPlayMusicRunningContainer.83949867.js";import"./LoadingVideo.27de62c0.js";import"./PostMoreActionDropdown.7e7bb4ee.js";import"./ButtonPrimaryDanger.37c861df.js";const M=({className:m=" ",size:x=" w-9 h-9 ",...E})=>s("button",{className:`ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${m} ${x} `+$(!0),...E}),R=({searchText:m,onUpdateTotal:x})=>{const S=y`
    ${D}
  `;let d={first:20};m&&(d={first:20,search:m});const{loading:p,error:T,data:e,fetchMore:C}=w(S,{notifyOnNetworkStatusChange:!0,variables:d});_.exports.useEffect(()=>{if(!(e!=null&&e.categories))return;const t=e.categories.pageInfo.hasNextPage?`${e==null?void 0:e.categories.edges.length}+ ${n.categories}`:`${e==null?void 0:e.categories.edges.length} ${n.categories}`;x(t)},[e]);const o=(t,{fetchMoreResult:a})=>{var u,f,N;return(u=a==null?void 0:a.categories)!=null&&u.edges.length?{...a,categories:{...a.categories,edges:[...(f=t==null?void 0:t.categories)==null?void 0:f.edges,...(N=a==null?void 0:a.categories)==null?void 0:N.edges]}}:t},h=()=>{if(!C)return;const t=e==null?void 0:e.categories.edges.map(a=>a.node.categoryId);C({variables:{exclude:t},updateQuery:o})},i=p&&!(e!=null&&e.categories.edges.length);return l("div",{className:"mt-8 lg:mt-10",children:[s(v,{data:(e==null?void 0:e.categories.edges)||[],isSkeleton:i,error:T}),l("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 2xl:gap-8 ",children:[i&&Array.from("iiiiiiiiiiiiiiiiiiii").map((t,a)=>s(Y,{},a)),((e==null?void 0:e.categories.edges)||[]).map(t=>s(q,{taxonomy:t.node},t.node.id))]}),(e==null?void 0:e.categories.pageInfo.hasNextPage)&&s("div",{className:"flex justify-center mt-12 lg:mt-16",children:s(A,{loading:p,onClick:h,children:n.showMeMore})})]})},ee=({searchText:m,orderByState:x,onUpdateTotal:E})=>{var f,N;const S=((f=frontendObject.allSettings)==null?void 0:f.readingSettingsPostsPerPage)||20;let d={},p="";x?(p=Q,d={order:"DESC",field:x,first:S,search:m}):(p=V,d={first:S,search:m});const T=y`
    ${p}
  `,{loading:e,error:C,data:o,fetchMore:h}=w(T,{notifyOnNetworkStatusChange:!0,variables:d});_.exports.useEffect(()=>{var g;typeof((g=o==null?void 0:o.posts.pageInfo)==null?void 0:g.total)=="number"&&E(`${o==null?void 0:o.posts.edges.length} ${n.articles}`||`0 ${n.articles}`)},[o]);const i=(o==null?void 0:o.posts.edges)||[],t=(g,{fetchMoreResult:r})=>{var c,P,b;return(c=r==null?void 0:r.posts)!=null&&c.edges.length?{...r,posts:{...r.posts,edges:[...(P=g==null?void 0:g.posts)==null?void 0:P.edges,...(b=r==null?void 0:r.posts)==null?void 0:b.edges]}}:g},a=()=>{if(!h)return;const g=i.map(r=>r.node.postId);h({variables:{first:S,notIn:g},updateQuery:t})},u=e&&!i.length;return l("div",{className:"mt-8 lg:mt-10",children:[s(v,{className:"my-5",data:i,error:C,isSkeleton:u}),u||i.length?l("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8 ",children:[u&&Array.from("88888888").map((g,r)=>s(W,{},r)),i.map(g=>s(H,{post:g.node},g.node.id))]}):null,((N=o==null?void 0:o.posts.pageInfo)==null?void 0:N.hasNextPage)&&s("div",{className:"flex justify-center mt-12 lg:mt-16",children:s(A,{onClick:a,loading:e,children:n.showMeMore})})]})},se=({searchText:m,onUpdateTotal:x})=>{const S=y`
    ${z}
  `;let d={first:30};m&&(d={first:30,search:m});const{loading:p,error:T,data:e,fetchMore:C}=w(S,{notifyOnNetworkStatusChange:!0,variables:d});_.exports.useEffect(()=>{if(!(e!=null&&e.tags))return;const t=e.tags.pageInfo.hasNextPage?`${e==null?void 0:e.tags.edges.length}+ ${n.tags}`:`${e==null?void 0:e.tags.edges.length} ${n.tags}`;x(t)},[e]);const o=(t,{fetchMoreResult:a})=>{var u,f,N;return(u=a==null?void 0:a.tags)!=null&&u.edges.length?{...a,tags:{...a.tags,edges:[...(f=t==null?void 0:t.tags)==null?void 0:f.edges,...(N=a==null?void 0:a.tags)==null?void 0:N.edges]}}:t},h=()=>{if(!C)return;const t=e==null?void 0:e.tags.edges.map(a=>a.node.tagId);C({variables:{exclude:t},updateQuery:o})},i=p&&!(e!=null&&e.tags.edges.length);return l("div",{className:"mt-8 lg:mt-10",children:[s(v,{data:(e==null?void 0:e.tags.edges)||[],isSkeleton:i,error:T}),l("div",{className:"w-full flex flex-wrap dark:text-neutral-200",children:[i&&Array.from("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii").map((t,a)=>s(O,{height:"38px",className:"mr-2.5 mb-2",width:"90px"},a)),((e==null?void 0:e.tags.edges)||[]).map(t=>s(X,{tag:t.node,className:"mr-2 mb-2"},t.node.id))]}),(e==null?void 0:e.tags.pageInfo.hasNextPage)&&s("div",{className:"flex justify-center mt-12 lg:mt-16",children:s(A,{loading:p,onClick:h,children:n.showMeMore})})]})},re=({searchText:m,onUpdateTotal:x})=>{const S=y`
    ${K}
  `;let d={first:10};m&&(d={first:10,search:m});const{loading:p,error:T,data:e,fetchMore:C}=w(S,{notifyOnNetworkStatusChange:!0,variables:d});_.exports.useEffect(()=>{var t;typeof((t=e==null?void 0:e.users.pageInfo)==null?void 0:t.total)=="number"&&x(`${e==null?void 0:e.users.edges.length} ${n.authors}`||`0 ${n.author}`)},[e]);const o=(t,{fetchMoreResult:a})=>{var u,f,N;return(u=a==null?void 0:a.users)!=null&&u.edges.length?{...a,users:{...a.users,edges:[...(f=t==null?void 0:t.users)==null?void 0:f.edges,...(N=a==null?void 0:a.users)==null?void 0:N.edges]}}:t},h=()=>{if(!C)return;const t=e==null?void 0:e.users.edges.map(a=>a.node.userId);C({variables:{exclude:t},updateQuery:o})},i=p&&!(e!=null&&e.users.edges.length);return l("div",{className:"mt-8 lg:mt-10",children:[s(v,{data:(e==null?void 0:e.users.edges)||[],isSkeleton:i,error:T}),l("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 2xl:gap-8 ",children:[i&&Array.from("iiiiiiiiiiiiiiiiiiii").map((t,a)=>s(Z,{},a)),((e==null?void 0:e.users.edges)||[]).map(t=>s(J,{author:t.node},t.node.id))]}),(e==null?void 0:e.users.pageInfo.hasNextPage)&&s("div",{className:"flex justify-center mt-12 lg:mt-16",children:s(A,{loading:p,onClick:h,children:n.showMeMore})})]})},I=window.frontendObject.isActivePluginFavorites?[{name:n.filters,value:""},{name:n.mostRecent,value:"DATE"},{name:n.mostLiked,value:"FAVORITES_COUNT"},{name:n.mostDiscussed,value:"COMMENT_COUNT"},{name:n.mostViewed,value:"VIEWS_COUNT"}]:[{name:n.filters,value:""},{name:n.mostRecent,value:"DATE"},{name:n.mostDiscussed,value:"COMMENT_COUNT"},{name:n.mostViewed,value:"VIEWS_COUNT"}],k=["Articles","Categories","Tags","Authors"],Oe=({className:m="",sectionCategoriesTrending:x,searchQuery:E,listSuggestions:S,headerBackgroundImg:d})=>{const[p,T]=_.exports.useState(I[0].value),[e,C]=_.exports.useState(k[0]),[o,h]=_.exports.useState(""),[i,t]=_.exports.useState(E);_.exports.useEffect(()=>{const r=document.getElementById("ncmaz-search-input");!r||(r.value=i)},[i]);const a=r=>{T(r.value)},u=r=>{r!==e&&C(r)},f=r=>{var b;r.preventDefault();const c=(b=document.getElementById("ncmaz-search-input"))==null?void 0:b.value;t(c);let P=new URLSearchParams(window.location.search);P.set("s",c),history.replaceState(null,"","?"+P.toString())},N=()=>l("div",{className:"w-screen px-2 max-w-full 2xl:max-w-screen-2xl mx-auto",children:[s("div",{className:"rounded-3xl relative aspect-w-16 aspect-h-12 sm:aspect-h-7 xl:aspect-h-5 overflow-hidden ",children:s(F,{containerClassName:"absolute inset-0",src:d.url||frontendObject.authorPageCoverImgDefault||"https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",className:"object-cover w-full h-full"})}),s("div",{className:"relative px-1 sm:container -mt-20 lg:-mt-48",children:s("div",{className:" bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-12 rounded-[40px] shadow-2xl flex items-center",children:l("header",{className:"w-full max-w-3xl mx-auto text-center flex flex-col items-center",children:[s("h1",{className:"text-2xl sm:text-4xl font-semibold",children:i||'" "'}),o?s("div",{className:"text-xs sm:text-sm mt-4 text-neutral-500 dark:text-neutral-300",dangerouslySetInnerHTML:{__html:o}}):s("div",{className:"flex-shrink w-full max-w-md mt-4 text-sm",children:s(O,{})}),s("form",{className:"relative w-full mt-8 sm:mt-11 text-left",method:"post",onSubmit:f,children:l("label",{htmlFor:"search-input",className:"text-neutral-500 dark:text-neutral-300",children:[s("span",{className:"sr-only",children:"Search all icons"}),s(B,{id:"ncmaz-search-input",type:"search",placeholder:n.typeAndPressEnter,sizeClass:"pl-14 py-5 pr-5 md:pl-16",className:"placeholder:text-sm",defaultValue:i}),s(M,{className:"absolute right-2.5 top-1/2 transform -translate-y-1/2",size:" w-11 h-11",type:"submit",children:s("i",{className:"las la-arrow-right text-xl"})}),s("span",{className:"absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6",children:s("svg",{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",children:s("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"})})})]})}),S&&S.length?s("div",{className:"w-full text-sm text-left mt-4 text-neutral-500 dark:text-neutral-300",children:l("div",{className:"inline-block text-primary-500",children:[l("span",{className:"mr-2.5 text-neutral-700 dark:text-neutral-300",children:[n.suggestions,":"]}),S.map((r,c)=>s("p",{className:"mr-2.5 inline-block cursor-pointer",onClick:()=>t(r),children:r},c))]})}):null]})})})]}),g=()=>{let r=` ${n.wereFoundForKeyword} <strong>${i||'" "'}</strong>`;switch(e){case"Articles":return s(ee,{orderByState:p,searchText:i,onUpdateTotal:c=>{r=`<strong>${c}</strong>`+r,h(r)}});case"Categories":return s(R,{onUpdateTotal:c=>{r=`<strong>${c}</strong>`+r,h(r)},searchText:i});case"Tags":return s(se,{onUpdateTotal:c=>{r=`<strong>${c}</strong>`+r,h(r)},searchText:i});case"Authors":return s(re,{onUpdateTotal:c=>{r=`<strong>${c}</strong>`+r,h(r),h(r)},searchText:i});default:return null}};return l("div",{className:`nc-PageSearch overflow-hidden ${m}`,"data-nc-id":"PageSearch",children:[N(),l("div",{className:"container py-16 lg:pb-28 lg:pt-24 space-y-16 lg:space-y-28",children:[l("div",{children:[l("div",{className:"flex flex-col sm:items-center sm:justify-between sm:flex-row",children:[s(L,{containerClassName:"w-full overflow-x-auto hiddenScrollbar",className:"sm:space-x-2",children:k.map((r,c)=>l(j,{isActive:e===r,onClick:()=>u(r),children:[r==="Articles"&&n.articles,r==="Authors"&&n.authors,r==="Categories"&&n.categories,r==="Tags"&&n.tags]},c))}),s("div",{className:"block my-4 border-b w-full border-neutral-100 dark:border-neutral-6000 sm:hidden"}),e==="Articles"?s("div",{className:"flex justify-end",children:s(G,{onChangeSelect:a,lists:I})}):null]}),g()]}),x.enable&&s(U,{...x,isCategory:!1})]})]})};export{Oe as default};
