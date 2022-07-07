var Q=Object.defineProperty,D=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var L=(n,i,g)=>i in n?Q(n,i,{enumerable:!0,configurable:!0,writable:!0,value:g}):n[i]=g,T=(n,i)=>{for(var g in i||(i={}))$.call(i,g)&&L(n,g,i[g]);if(w)for(var g of w(i))G.call(i,g)&&L(n,g,i[g]);return n},E=(n,i)=>D(n,V(i));var B=(n,i)=>{var g={};for(var l in n)$.call(n,l)&&i.indexOf(l)<0&&(g[l]=n[l]);if(n!=null&&w)for(var l of w(n))i.indexOf(l)<0&&G.call(n,l)&&(g[l]=n[l]);return g};import{j as s,t as z,U as I,aG as k,r as y,N as c,a as d,D as v,V as K,aH as H,aI as Y}from"./main.3380b1f5.js";import{A as q,S as X}from"./SectionTrendingCategories.2fcde7f6.js";import{N as W}from"./NcImage.b55b9c44.js";import{b as Z,P as J,c as M,a as R,U as ee}from"./queryGraphql.89466fe3.js";import{B as O}from"./ButtonPrimary.f9fb09a2.js";import{d as se,C as re}from"./CardCategory5Skeleton.e08d342e.js";import{C as te}from"./Card11.62c11abe.js";import{C as ae}from"./Card11Skeleton.9ff2fe35.js";import{S as F}from"./index.f12587f3.js";import{T as ne}from"./Tag.605783c5.js";import{a as ie,C as oe}from"./CardAuthorBox2Skeleton.c7f644cb.js";import{G as le}from"./globalVariable.a9ea38a3.js";import"./NcModal.ced1a9af.js";import"./ButtonClose.8957fb2e.js";import"./SectionGridCategoryBox.6abb5a32.js";import"./CardCategory1Skeleton.41a61d14.js";import"./Badge.3cf53dd4.js";import"./CategoryBadgeList.521bf5f6.js";import"./PostCardLikeAndComment.443d34b5.js";import"./PostCardLikeAction.1d43f9ab.js";import"./PostCardMeta.86e8f092.js";import"./formatDate.5c5d9c4d.js";import"./PostFeaturedMedia.0347b26f.js";import"./PostTypeFeaturedIcon.0dd313e6.js";import"./index.00c2f9f3.js";import"./ReactPlayer.27b94619.js";import"./ButtonPlayMusicRunningContainer.543a94eb.js";import"./LoadingVideo.7638ad52.js";import"./PostMoreActionDropdown.b93ff3a7.js";const ce=l=>{var p=l,{className:n=" ",size:i=" w-9 h-9 "}=p,g=B(p,["className","size"]);return s("button",T({className:`ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${n} ${i} `+z(!0)},g))},ge=({searchText:n,onUpdateTotal:i})=>{const l=I`
    ${Z}
  `;let p={first:20};n&&(p={first:20,search:n});const{loading:u,error:P,data:e,fetchMore:C}=k(l,{notifyOnNetworkStatusChange:!0,variables:p});y.exports.useEffect(()=>{if(!(e!=null&&e.categories))return;const t=e.categories.pageInfo.hasNextPage?`${e==null?void 0:e.categories.edges.length}+ ${c.categories}`:`${e==null?void 0:e.categories.edges.length} ${c.categories}`;i(t)},[e]);const m=(t,{fetchMoreResult:a})=>{var f,N,_;return(f=a==null?void 0:a.categories)!=null&&f.edges.length?E(T({},a),{categories:E(T({},a.categories),{edges:[...(N=t==null?void 0:t.categories)==null?void 0:N.edges,...(_=a==null?void 0:a.categories)==null?void 0:_.edges]})}):t},S=()=>{if(!C)return;const t=e==null?void 0:e.categories.edges.map(a=>a.node.categoryId);C({variables:{exclude:t},updateQuery:m})},o=u&&!(e!=null&&e.categories.edges.length);return d("div",{className:"mt-8 lg:mt-10",children:[s(v,{data:(e==null?void 0:e.categories.edges)||[],isSkeleton:o,error:P}),d("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 2xl:gap-8 ",children:[o&&Array.from("iiiiiiiiiiiiiiiiiiii").map((t,a)=>s(se,{},a)),((e==null?void 0:e.categories.edges)||[]).map(t=>s(re,{taxonomy:t.node},t.node.id))]}),(e==null?void 0:e.categories.pageInfo.hasNextPage)&&s("div",{className:"flex justify-center mt-12 lg:mt-16",children:s(O,{loading:u,onClick:S,children:c.showMeMore})})]})},me=({searchText:n,orderByState:i,onUpdateTotal:g})=>{var N,_;const l=((N=frontendObject.allSettings)==null?void 0:N.readingSettingsPostsPerPage)||20;let p={},u="";i?(u=J,p={order:"DESC",field:i,first:l,search:n}):(u=M,p={first:l,search:n});const P=I`
    ${u}
  `,{loading:e,error:C,data:m,fetchMore:S}=k(P,{notifyOnNetworkStatusChange:!0,variables:p});y.exports.useEffect(()=>{var x;typeof((x=m==null?void 0:m.posts.pageInfo)==null?void 0:x.total)=="number"&&g(`${m==null?void 0:m.posts.edges.length} ${c.articles}`||`0 ${c.articles}`)},[m]);const o=(m==null?void 0:m.posts.edges)||[],t=(x,{fetchMoreResult:r})=>{var h,b,A;return(h=r==null?void 0:r.posts)!=null&&h.edges.length?E(T({},r),{posts:E(T({},r.posts),{edges:[...(b=x==null?void 0:x.posts)==null?void 0:b.edges,...(A=r==null?void 0:r.posts)==null?void 0:A.edges]})}):x},a=()=>{if(!S)return;const x=o.map(r=>r.node.postId);S({variables:{first:l,notIn:x},updateQuery:t})},f=e&&!o.length;return d("div",{className:"mt-8 lg:mt-10",children:[s(v,{className:"my-5",data:o,error:C,isSkeleton:f}),f||o.length?d("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8 ",children:[f&&Array.from("88888888").map((x,r)=>s(ae,{},r)),o.map(x=>s(te,{post:x.node},x.node.id))]}):null,((_=m==null?void 0:m.posts.pageInfo)==null?void 0:_.hasNextPage)&&s("div",{className:"flex justify-center mt-12 lg:mt-16",children:s(O,{onClick:a,loading:e,children:c.showMeMore})})]})},de=({searchText:n,onUpdateTotal:i})=>{const l=I`
    ${R}
  `;let p={first:30};n&&(p={first:30,search:n});const{loading:u,error:P,data:e,fetchMore:C}=k(l,{notifyOnNetworkStatusChange:!0,variables:p});y.exports.useEffect(()=>{if(!(e!=null&&e.tags))return;const t=e.tags.pageInfo.hasNextPage?`${e==null?void 0:e.tags.edges.length}+ ${c.tags}`:`${e==null?void 0:e.tags.edges.length} ${c.tags}`;i(t)},[e]);const m=(t,{fetchMoreResult:a})=>{var f,N,_;return(f=a==null?void 0:a.tags)!=null&&f.edges.length?E(T({},a),{tags:E(T({},a.tags),{edges:[...(N=t==null?void 0:t.tags)==null?void 0:N.edges,...(_=a==null?void 0:a.tags)==null?void 0:_.edges]})}):t},S=()=>{if(!C)return;const t=e==null?void 0:e.tags.edges.map(a=>a.node.tagId);C({variables:{exclude:t},updateQuery:m})},o=u&&!(e!=null&&e.tags.edges.length);return d("div",{className:"mt-8 lg:mt-10",children:[s(v,{data:(e==null?void 0:e.tags.edges)||[],isSkeleton:o,error:P}),d("div",{className:"w-full flex flex-wrap dark:text-neutral-200",children:[o&&Array.from("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii").map((t,a)=>s(F,{height:"38px",className:"mr-2.5 mb-2",width:"90px"},a)),((e==null?void 0:e.tags.edges)||[]).map(t=>s(ne,{tag:t.node,className:"mr-2 mb-2"},t.node.id))]}),(e==null?void 0:e.tags.pageInfo.hasNextPage)&&s("div",{className:"flex justify-center mt-12 lg:mt-16",children:s(O,{loading:u,onClick:S,children:c.showMeMore})})]})},pe=({searchText:n,onUpdateTotal:i})=>{const l=I`
    ${ee}
  `;let p={first:10};n&&(p={first:10,search:n});const{loading:u,error:P,data:e,fetchMore:C}=k(l,{notifyOnNetworkStatusChange:!0,variables:p});y.exports.useEffect(()=>{var t;typeof((t=e==null?void 0:e.users.pageInfo)==null?void 0:t.total)=="number"&&i(`${e==null?void 0:e.users.edges.length} ${c.authors}`||`0 ${c.author}`)},[e]);const m=(t,{fetchMoreResult:a})=>{var f,N,_;return(f=a==null?void 0:a.users)!=null&&f.edges.length?E(T({},a),{users:E(T({},a.users),{edges:[...(N=t==null?void 0:t.users)==null?void 0:N.edges,...(_=a==null?void 0:a.users)==null?void 0:_.edges]})}):t},S=()=>{if(!C)return;const t=e==null?void 0:e.users.edges.map(a=>a.node.userId);C({variables:{exclude:t},updateQuery:m})},o=u&&!(e!=null&&e.users.edges.length);return d("div",{className:"mt-8 lg:mt-10",children:[s(v,{data:(e==null?void 0:e.users.edges)||[],isSkeleton:o,error:P}),d("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 2xl:gap-8 ",children:[o&&Array.from("iiiiiiiiiiiiiiiiiiii").map((t,a)=>s(ie,{},a)),((e==null?void 0:e.users.edges)||[]).map(t=>s(oe,{author:t.node},t.node.id))]}),(e==null?void 0:e.users.pageInfo.hasNextPage)&&s("div",{className:"flex justify-center mt-12 lg:mt-16",children:s(O,{loading:u,onClick:S,children:c.showMeMore})})]})},j=[{name:c.filters,value:""},{name:c.mostRecent,value:"DATE"},{name:c.mostLiked,value:"FAVORITES_COUNT"},{name:c.mostDiscussed,value:"COMMENT_COUNT"},{name:c.mostViewed,value:"VIEWS_COUNT"}],U=["Articles","Categories","Tags","Authors"],Ke=({className:n="",sectionCategoriesTrending:i,searchQuery:g,listSuggestions:l,headerBackgroundImg:p})=>{const[u,P]=y.exports.useState(j[0].value),[e,C]=y.exports.useState(U[0]),[m,S]=y.exports.useState(""),[o,t]=y.exports.useState(g);y.exports.useEffect(()=>{const r=document.getElementById("ncmaz-search-input");!r||(r.value=o)},[o]);const a=r=>{P(r.value)},f=r=>{r!==e&&C(r)},N=r=>{var A;r.preventDefault();const h=(A=document.getElementById("ncmaz-search-input"))==null?void 0:A.value;t(h);let b=new URLSearchParams(window.location.search);b.set("s",h),history.replaceState(null,"","?"+b.toString())},_=()=>d("div",{className:"w-screen px-2 max-w-full 2xl:max-w-screen-2xl mx-auto",children:[s("div",{className:"rounded-3xl relative aspect-w-16 aspect-h-12 sm:aspect-h-7 xl:aspect-h-5 overflow-hidden ",children:s(W,{containerClassName:"absolute inset-0",src:p.url||le.searchPageCoverImgDefault||"https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",className:"object-cover w-full h-full"})}),s("div",{className:"relative px-1 sm:container -mt-20 lg:-mt-48",children:s("div",{className:" bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-12 rounded-[40px] shadow-2xl flex items-center",children:d("header",{className:"w-full max-w-3xl mx-auto text-center flex flex-col items-center",children:[s("h2",{className:"text-2xl sm:text-4xl font-semibold",children:o||'" "'}),m?s("div",{className:"text-xs sm:text-sm mt-4 text-neutral-500 dark:text-neutral-300",dangerouslySetInnerHTML:{__html:m}}):s("div",{className:"flex-shrink w-full max-w-md mt-4 text-sm",children:s(F,{})}),s("form",{className:"relative w-full mt-8 sm:mt-11 text-left",method:"post",onSubmit:N,children:d("label",{htmlFor:"search-input",className:"text-neutral-500 dark:text-neutral-300",children:[s("span",{className:"sr-only",children:"Search all icons"}),s(K,{id:"ncmaz-search-input",type:"search",placeholder:c.typeAndPressEnter,sizeClass:"pl-14 py-5 pr-5 md:pl-16",className:"placeholder:text-sm",defaultValue:o}),s(ce,{className:"absolute right-2.5 top-1/2 transform -translate-y-1/2",size:" w-11 h-11",type:"submit",children:s("i",{className:"las la-arrow-right text-xl"})}),s("span",{className:"absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6",children:s("svg",{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",children:s("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"})})})]})}),l&&l.length?s("div",{className:"w-full text-sm text-left mt-4 text-neutral-500 dark:text-neutral-300",children:d("div",{className:"inline-block text-primary-500",children:[d("span",{className:"mr-2.5 text-neutral-700 dark:text-neutral-300",children:[c.suggestions,":"]}),l.map((r,h)=>s("p",{className:"mr-2.5 inline-block cursor-pointer",onClick:()=>t(r),children:r},h))]})}):null]})})})]}),x=()=>{let r=` ${c.wereFoundForKeyword} <strong>${o||'" "'}</strong>`;switch(e){case"Articles":return s(me,{orderByState:u,searchText:o,onUpdateTotal:h=>{r=`<strong>${h}</strong>`+r,S(r)}});case"Categories":return s(ge,{onUpdateTotal:h=>{r=`<strong>${h}</strong>`+r,S(r)},searchText:o});case"Tags":return s(de,{onUpdateTotal:h=>{r=`<strong>${h}</strong>`+r,S(r)},searchText:o});case"Authors":return s(pe,{onUpdateTotal:h=>{r=`<strong>${h}</strong>`+r,S(r),S(r)},searchText:o});default:return null}};return d("div",{className:`nc-PageSearch overflow-hidden ${n}`,"data-nc-id":"PageSearch",children:[_(),d("div",{className:"container py-16 lg:pb-28 lg:pt-24 space-y-16 lg:space-y-28",children:[d("div",{children:[d("div",{className:"flex flex-col sm:items-center sm:justify-between sm:flex-row",children:[s(H,{containerClassName:"w-full overflow-x-auto hiddenScrollbar",className:"sm:space-x-2",children:U.map((r,h)=>d(Y,{isActive:e===r,onClick:()=>f(r),children:[r==="Articles"&&c.articles,r==="Authors"&&c.authors,r==="Categories"&&c.categories,r==="Tags"&&c.tags]},h))}),s("div",{className:"block my-4 border-b w-full border-neutral-100 dark:border-neutral-6000 sm:hidden"}),e==="Articles"?s("div",{className:"flex justify-end",children:s(q,{onChangeSelect:a,lists:j})}):null]}),x()]}),i.enable&&s(X,E(T({},i),{isCategory:!1}))]})]})};export{Ke as default};
