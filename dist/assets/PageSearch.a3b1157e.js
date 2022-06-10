var Q=Object.defineProperty,D=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var $=(a,n,m)=>n in a?Q(a,n,{enumerable:!0,configurable:!0,writable:!0,value:m}):a[n]=m,T=(a,n)=>{for(var m in n||(n={}))L.call(n,m)&&$(a,m,n[m]);if(A)for(var m of A(n))B.call(n,m)&&$(a,m,n[m]);return a},E=(a,n)=>D(a,V(n));var G=(a,n)=>{var m={};for(var l in a)L.call(a,l)&&n.indexOf(l)<0&&(m[l]=a[l]);if(a!=null&&A)for(var l of A(a))n.indexOf(l)<0&&B.call(a,l)&&(m[l]=a[l]);return m};import{j as s,t as z,r as y,N as c,b as d,ap as K}from"./main.8abeeeff.js";import{A as Y,S as q}from"./SectionTrendingCategories.0bf529a3.js";import{N as H}from"./NcImage.026c7f82.js";import{N as X,a as W}from"./NavItem.737551d0.js";import{b as Z,P as J,c as M,a as R,U as ee}from"./queryGraphql.f27c5105.js";import{B as I}from"./ButtonPrimary.95eb811f.js";import{D as k}from"./DataStatementBlockV2.7e9dae2f.js";import{d as se,C as re}from"./CardCategory5Skeleton.e57432d9.js";import{a as v,u as O}from"./useQuery.fe519250.js";import{C as te}from"./Card11.60190940.js";import{C as ie}from"./Card11Skeleton.80c3145f.js";import{S as U}from"./index.3d396dd3.js";import{T as ae}from"./Tag.a6fd9c4a.js";import{a as ne,C as oe}from"./CardAuthorBox2Skeleton.30cbe5c7.js";import"./NcModal.a652ff7e.js";import"./Button.e29c9ef7.js";import"./ButtonClose.9123dfd5.js";import"./BackgroundSection.349d0f20.js";import"./SectionGridCategoryBox.34ddbffc.js";import"./CardCategory1Skeleton.46029e39.js";import"./Heading.038abcf6.js";import"./NextPrev.8d76ec03.js";import"./EmptyState.344d6b90.js";import"./Badge.216dcd73.js";import"./CategoryBadgeList.4f1ad982.js";import"./PostCardLikeAndComment.d832d028.js";import"./PostCardLikeAction.e7853a5e.js";import"./PostCardMeta.75b0c9e0.js";import"./formatDate.5c5d9c4d.js";import"./PostFeaturedMedia.779a48d7.js";import"./PostTypeFeaturedIcon.6e20a143.js";import"./useIntersectionObserver.6afb6db3.js";import"./index.890a970e.js";import"./ReactPlayer.ef7834cb.js";import"./ButtonPlayMusicRunningContainer.4524591a.js";import"./LoadingVideo.8ae3b112.js";import"./PostMoreActionDropdown.7f5c24c8.js";import"./ButtonSecondary.cbcbe840.js";const le=l=>{var p=l,{className:a=" ",size:n=" w-9 h-9 "}=p,m=G(p,["className","size"]);return s("button",T({className:`ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${a} ${n} `+z(!0)},m))},ce=({searchText:a,onUpdateTotal:n})=>{const l=v`
    ${Z}
  `;let p={first:20};a&&(p={first:20,search:a});const{loading:u,error:P,data:e,fetchMore:C}=O(l,{notifyOnNetworkStatusChange:!0,variables:p});y.exports.useEffect(()=>{if(!(e!=null&&e.categories))return;const t=e.categories.pageInfo.hasNextPage?`${e==null?void 0:e.categories.edges.length}+ ${c.categories}`:`${e==null?void 0:e.categories.edges.length} ${c.categories}`;n(t)},[e]);const g=(t,{fetchMoreResult:i})=>{var f,N,_;return(f=i==null?void 0:i.categories)!=null&&f.edges.length?E(T({},i),{categories:E(T({},i.categories),{edges:[...(N=t==null?void 0:t.categories)==null?void 0:N.edges,...(_=i==null?void 0:i.categories)==null?void 0:_.edges]})}):t},S=()=>{if(!C)return;const t=e==null?void 0:e.categories.edges.map(i=>i.node.categoryId);C({variables:{exclude:t},updateQuery:g})},o=u&&!(e!=null&&e.categories.edges.length);return d("div",{className:"mt-8 lg:mt-10",children:[s(k,{data:(e==null?void 0:e.categories.edges)||[],isSkeleton:o,error:P}),d("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 2xl:gap-8 ",children:[o&&Array.from("iiiiiiiiiiiiiiiiiiii").map((t,i)=>s(se,{},i)),((e==null?void 0:e.categories.edges)||[]).map(t=>s(re,{taxonomy:t.node},t.node.id))]}),(e==null?void 0:e.categories.pageInfo.hasNextPage)&&s("div",{className:"flex justify-center mt-12 lg:mt-16",children:s(I,{loading:u,onClick:S,children:c.showMeMore})})]})},me=({searchText:a,orderByState:n,onUpdateTotal:m})=>{var N,_;const l=((N=frontendObject.allSettings)==null?void 0:N.readingSettingsPostsPerPage)||20;let p={},u="";n?(u=J,p={order:"DESC",field:n,first:l,search:a}):(u=M,p={first:l,search:a});const P=v`
    ${u}
  `,{loading:e,error:C,data:g,fetchMore:S}=O(P,{notifyOnNetworkStatusChange:!0,variables:p});y.exports.useEffect(()=>{var x;typeof((x=g==null?void 0:g.posts.pageInfo)==null?void 0:x.total)=="number"&&m(`${g==null?void 0:g.posts.edges.length} ${c.articles}`||`0 ${c.articles}`)},[g]);const o=(g==null?void 0:g.posts.edges)||[],t=(x,{fetchMoreResult:r})=>{var h,b,w;return(h=r==null?void 0:r.posts)!=null&&h.edges.length?E(T({},r),{posts:E(T({},r.posts),{edges:[...(b=x==null?void 0:x.posts)==null?void 0:b.edges,...(w=r==null?void 0:r.posts)==null?void 0:w.edges]})}):x},i=()=>{if(!S)return;const x=o.map(r=>r.node.postId);S({variables:{first:l,notIn:x},updateQuery:t})},f=e&&!o.length;return d("div",{className:"mt-8 lg:mt-10",children:[s(k,{className:"my-5",data:o,error:C,isSkeleton:f}),f||o.length?d("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8 ",children:[f&&Array.from("88888888").map((x,r)=>s(ie,{},r)),o.map(x=>s(te,{post:x.node},x.node.id))]}):null,((_=g==null?void 0:g.posts.pageInfo)==null?void 0:_.hasNextPage)&&s("div",{className:"flex justify-center mt-12 lg:mt-16",children:s(I,{onClick:i,loading:e,children:c.showMeMore})})]})},ge=({searchText:a,onUpdateTotal:n})=>{const l=v`
    ${R}
  `;let p={first:30};a&&(p={first:30,search:a});const{loading:u,error:P,data:e,fetchMore:C}=O(l,{notifyOnNetworkStatusChange:!0,variables:p});y.exports.useEffect(()=>{if(!(e!=null&&e.tags))return;const t=e.tags.pageInfo.hasNextPage?`${e==null?void 0:e.tags.edges.length}+ ${c.tags}`:`${e==null?void 0:e.tags.edges.length} ${c.tags}`;n(t)},[e]);const g=(t,{fetchMoreResult:i})=>{var f,N,_;return(f=i==null?void 0:i.tags)!=null&&f.edges.length?E(T({},i),{tags:E(T({},i.tags),{edges:[...(N=t==null?void 0:t.tags)==null?void 0:N.edges,...(_=i==null?void 0:i.tags)==null?void 0:_.edges]})}):t},S=()=>{if(!C)return;const t=e==null?void 0:e.tags.edges.map(i=>i.node.tagId);C({variables:{exclude:t},updateQuery:g})},o=u&&!(e!=null&&e.tags.edges.length);return d("div",{className:"mt-8 lg:mt-10",children:[s(k,{data:(e==null?void 0:e.tags.edges)||[],isSkeleton:o,error:P}),d("div",{className:"w-full flex flex-wrap dark:text-neutral-200",children:[o&&Array.from("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii").map((t,i)=>s(U,{height:"38px",className:"mr-2.5 mb-2",width:"90px"},i)),((e==null?void 0:e.tags.edges)||[]).map(t=>s(ae,{tag:t.node,className:"mr-2 mb-2"},t.node.id))]}),(e==null?void 0:e.tags.pageInfo.hasNextPage)&&s("div",{className:"flex justify-center mt-12 lg:mt-16",children:s(I,{loading:u,onClick:S,children:c.showMeMore})})]})},de=({searchText:a,onUpdateTotal:n})=>{const l=v`
    ${ee}
  `;let p={first:10};a&&(p={first:10,search:a});const{loading:u,error:P,data:e,fetchMore:C}=O(l,{notifyOnNetworkStatusChange:!0,variables:p});y.exports.useEffect(()=>{var t;typeof((t=e==null?void 0:e.users.pageInfo)==null?void 0:t.total)=="number"&&n(`${e==null?void 0:e.users.edges.length} ${c.authors}`||`0 ${c.author}`)},[e]);const g=(t,{fetchMoreResult:i})=>{var f,N,_;return(f=i==null?void 0:i.users)!=null&&f.edges.length?E(T({},i),{users:E(T({},i.users),{edges:[...(N=t==null?void 0:t.users)==null?void 0:N.edges,...(_=i==null?void 0:i.users)==null?void 0:_.edges]})}):t},S=()=>{if(!C)return;const t=e==null?void 0:e.users.edges.map(i=>i.node.userId);C({variables:{exclude:t},updateQuery:g})},o=u&&!(e!=null&&e.users.edges.length);return d("div",{className:"mt-8 lg:mt-10",children:[s(k,{data:(e==null?void 0:e.users.edges)||[],isSkeleton:o,error:P}),d("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 2xl:gap-8 ",children:[o&&Array.from("iiiiiiiiiiiiiiiiiiii").map((t,i)=>s(ne,{},i)),((e==null?void 0:e.users.edges)||[]).map(t=>s(oe,{author:t.node},t.node.id))]}),(e==null?void 0:e.users.pageInfo.hasNextPage)&&s("div",{className:"flex justify-center mt-12 lg:mt-16",children:s(I,{loading:u,onClick:S,children:c.showMeMore})})]})},j=[{name:c.filters,value:""},{name:c.mostRecent,value:"DATE"},{name:c.mostLiked,value:"FAVORITES_COUNT"},{name:c.mostDiscussed,value:"COMMENT_COUNT"},{name:c.mostViewed,value:"VIEWS_COUNT"}],F=["Articles","Categories","Tags","Authors"],Me=({className:a="",sectionCategoriesTrending:n,searchQuery:m,listSuggestions:l,headerBackgroundImg:p})=>{const[u,P]=y.exports.useState(j[0].value),[e,C]=y.exports.useState(F[0]),[g,S]=y.exports.useState(""),[o,t]=y.exports.useState(m);y.exports.useEffect(()=>{const r=document.getElementById("ncmaz-search-input");!r||(r.value=o)},[o]);const i=r=>{P(r.value)},f=r=>{r!==e&&C(r)},N=r=>{var w;r.preventDefault();const h=(w=document.getElementById("ncmaz-search-input"))==null?void 0:w.value;t(h);let b=new URLSearchParams(window.location.search);b.set("s",h),history.replaceState(null,"","?"+b.toString())},_=()=>d("div",{className:"w-screen px-2 max-w-full 2xl:max-w-screen-2xl mx-auto",children:[s("div",{className:"rounded-3xl relative aspect-w-16 aspect-h-12 sm:aspect-h-7 xl:aspect-h-5 overflow-hidden ",children:s(H,{containerClassName:"absolute inset-0",src:p.url||"https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",className:"object-cover w-full h-full"})}),s("div",{className:"relative container -mt-20 lg:-mt-48",children:s("div",{className:" bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-12 rounded-[40px] shadow-2xl flex items-center",children:d("header",{className:"w-full max-w-3xl mx-auto text-center flex flex-col items-center",children:[s("h2",{className:"text-2xl sm:text-4xl font-semibold",children:o||'" "'}),g?s("div",{className:"text-xs sm:text-sm mt-4 text-neutral-500 dark:text-neutral-300",dangerouslySetInnerHTML:{__html:g}}):s("div",{className:"flex-shrink w-full max-w-md mt-4 text-sm",children:s(U,{})}),s("form",{className:"relative w-full mt-8 sm:mt-11 text-left",method:"post",onSubmit:N,children:d("label",{htmlFor:"search-input",className:"text-neutral-500 dark:text-neutral-300",children:[s("span",{className:"sr-only",children:"Search all icons"}),s(K,{id:"ncmaz-search-input",type:"search",placeholder:c.typeAndPressEnter,sizeClass:"pl-14 py-5 pr-5 md:pl-16",defaultValue:o}),s(le,{className:"absolute right-2.5 top-1/2 transform -translate-y-1/2",size:" w-11 h-11",type:"submit",children:s("i",{className:"las la-arrow-right text-xl"})}),s("span",{className:"absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6",children:s("svg",{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",children:s("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"})})})]})}),l&&l.length?s("div",{className:"w-full text-sm text-left mt-4 text-neutral-500 dark:text-neutral-300",children:d("div",{className:"inline-block text-primary-500",children:[d("span",{className:"mr-2.5 text-neutral-700",children:[c.suggestions,":"]}),l.map((r,h)=>s("p",{className:"mr-2.5 inline-block cursor-pointer",onClick:()=>t(r),children:r},h))]})}):null]})})})]}),x=()=>{let r=` ${c.wereFoundForKeyword} <strong>${o||'" "'}</strong>`;switch(e){case"Articles":return s(me,{orderByState:u,searchText:o,onUpdateTotal:h=>{r=`<strong>${h}</strong>`+r,S(r)}});case"Categories":return s(ce,{onUpdateTotal:h=>{r=`<strong>${h}</strong>`+r,S(r)},searchText:o});case"Tags":return s(ge,{onUpdateTotal:h=>{r=`<strong>${h}</strong>`+r,S(r)},searchText:o});case"Authors":return s(de,{onUpdateTotal:h=>{r=`<strong>${h}</strong>`+r,S(r),S(r)},searchText:o});default:return null}};return d("div",{className:`nc-PageSearch overflow-hidden ${a}`,"data-nc-id":"PageSearch",children:[_(),d("div",{className:"container py-16 lg:pb-28 lg:pt-24 space-y-16 lg:space-y-28",children:[d("div",{children:[d("div",{className:"flex flex-col sm:items-center sm:justify-between sm:flex-row",children:[s(X,{containerClassName:"w-full overflow-x-auto hiddenScrollbar",className:"sm:space-x-2",children:F.map((r,h)=>d(W,{isActive:e===r,onClick:()=>f(r),children:[r==="Articles"&&c.articles,r==="Authors"&&c.authors,r==="Categories"&&c.categories,r==="Tags"&&c.tags]},h))}),s("div",{className:"block my-4 border-b w-full border-neutral-100 sm:hidden"}),e==="Articles"?s("div",{className:"flex justify-end",children:s(Y,{onChangeSelect:i,lists:j})}):null]}),x()]}),n.enable&&s(q,E(T({},n),{isCategory:!1}))]})]})};export{Me as default};
