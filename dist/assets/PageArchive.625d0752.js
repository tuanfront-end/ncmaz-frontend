var K=Object.defineProperty,q=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var B=(d,r,i)=>r in d?K(d,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):d[r]=i,h=(d,r)=>{for(var i in r||(r={}))W.call(r,i)&&B(d,i,r[i]);if(j)for(var i of j(r))Y.call(r,i)&&B(d,i,r[i]);return d},S=(d,r)=>q(d,D(r));import{ag as b,a9 as Q,j as e,a as o,N as l,D as O,r as Z,aH as J}from"./main.952450c4.js";import{N as V}from"./NcModal.9a5887df.js";import{a as X,b as M,P as R,G as ee}from"./queryGraphql.3517b320.js";import{B as v}from"./ButtonPrimary.6c4c6766.js";import{C as se,a as ie}from"./CardCategory1Skeleton.d14725f0.js";import{T as ne}from"./Tag.ada15e82.js";import{S as ae}from"./index.544a54d6.js";import{A as re,S as te}from"./SectionTrendingCategories.56141139.js";import{N as oe}from"./NcImage.13d84177.js";import{C as le}from"./Card11.33c6bfc5.js";import{C as de}from"./Card11Skeleton.12252c98.js";const ce=()=>{const r=b`
    ${X}
  `,[i,{loading:f,error:a,data:n,fetchMore:p}]=Q(r,{notifyOnNetworkStatusChange:!0}),E=()=>{n!=null&&n.categories.edges.length||i({variables:{first:20,orderby:null,hideEmpty:!0}})},N=(t,{fetchMoreResult:s})=>{var C,c,x;return(C=s==null?void 0:s.categories)!=null&&C.edges.length?S(h({},s),{categories:S(h({},s.categories),{edges:[...(c=t==null?void 0:t.categories)==null?void 0:c.edges,...(x=s==null?void 0:s.categories)==null?void 0:x.edges]})}):t},y=()=>{!p||p({variables:{first:20,after:(n==null?void 0:n.categories.pageInfo.endCursor)||null},updateQuery:N})},_=f&&!(n!=null&&n.categories.edges.length),T=()=>o("div",{className:"flex flex-col items-center space-y-8",children:[e(O,{data:(n==null?void 0:n.categories.edges)||[],isSkeleton:_,error:a}),o("div",{className:"w-full grid gap-6 grid-cols-1 sm:grid-cols-2 sm:py-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:md:grid-cols-5",children:[_&&Array.from("iiiiiiiiiiiiiiiiiiii").map((t,s)=>e(se,{},s)),((n==null?void 0:n.categories.edges)||[]).map(t=>e(ie,{taxonomy:t.node,size:"normal"},t.node.id))]}),(n==null?void 0:n.categories.pageInfo.hasNextPage)&&e(v,{loading:f,onClick:y,children:l.showMeMore})]});return e("div",{className:"nc-ModalCats",children:e(V,{onOpenModal:E,triggerText:o("span",{children:[e("span",{className:"hidden sm:inline",children:l.otherCategories})," ",e("span",{className:"inline sm:hidden",children:l.categories})]}),modalTitle:l.discoverOtherCategories,renderContent:T})})},ge=()=>{const r=b`
    ${M}
  `,[i,{error:f,data:a,fetchMore:n,loading:p}]=Q(r,{notifyOnNetworkStatusChange:!0}),E=()=>{a!=null&&a.tags.edges.length||i({variables:{first:30}})},N=(t,{fetchMoreResult:s})=>{var C,c,x;return(C=s==null?void 0:s.tags)!=null&&C.edges.length?S(h({},s),{tags:S(h({},s.tags),{edges:[...(c=t==null?void 0:t.tags)==null?void 0:c.edges,...(x=s==null?void 0:s.tags)==null?void 0:x.edges]})}):t},y=()=>{!n||n({variables:{first:30,after:(a==null?void 0:a.tags.pageInfo.endCursor)||null},updateQuery:N})},_=p&&!(a!=null&&a.tags.edges.length),T=()=>o("div",{className:"flex flex-col items-center space-y-5",children:[e(O,{data:(a==null?void 0:a.tags.edges)||[],isSkeleton:_,error:f}),o("div",{className:"w-full flex flex-wrap dark:text-neutral-200",children:[_&&Array.from("iiiiiiiiiiiiiiiiiiiiiiiiiiii").map((t,s)=>e(ae,{height:"38px",className:"mr-2.5 mb-2",width:"90px"},s)),((a==null?void 0:a.tags.edges)||[]).map(t=>e(ne,{tag:t.node,className:"mr-2 mb-2"},t.node.id))]}),(a==null?void 0:a.tags.pageInfo.hasNextPage)&&e(v,{loading:p,onClick:y,children:l.showMeMore})]});return e("div",{className:"nc-ModalTags",children:e(V,{contentExtraClass:"max-w-screen-md",onOpenModal:E,triggerText:o("span",{children:[e("span",{className:"hidden sm:inline",children:l.otherTags})," ",e("span",{className:"inline sm:hidden",children:l.tags})]}),modalTitle:l.discoverOtherTags,renderContent:T})})},$=[{name:l.mostRecent,value:"DATE"},{name:l.mostLiked,value:"FAVORITES_COUNT"},{name:l.mostDiscussed,value:"COMMENT_COUNT"},{name:l.mostViewed,value:"VIEWS_COUNT"}],F=$,me=({className:d="",termId:r,termData:i,isCategory:f,isFormatAudio:a,isFormatVideo:n,isTag:p,sectionCategoriesTrending:E})=>{var I,k,L;const N=((I=frontendObject.allSettings)==null?void 0:I.readingSettingsPostsPerPage)||20,[y,_]=Z.exports.useState(F[0].value);let T={};p?T={order:"DESC",field:y,tagIn:[r],first:N}:T={order:"DESC",field:y,categoryIn:[r],first:N};const t=b`
    ${R}
  `,{loading:s,error:C,data:c,fetchMore:x}=J(t,{notifyOnNetworkStatusChange:!0,variables:T}),P=(c==null?void 0:c.posts.edges)||[],H=(g,{fetchMoreResult:m})=>{var w,u,G;return(w=m==null?void 0:m.posts)!=null&&w.edges.length?S(h({},m),{posts:S(h({},m.posts),{edges:[...(u=g==null?void 0:g.posts)==null?void 0:u.edges,...(G=m==null?void 0:m.posts)==null?void 0:G.edges]})}):g},U=g=>{_(g.value)},z=()=>{if(!x)return;const g=P.map(m=>m.node.postId);x({variables:{first:N,notIn:g},updateQuery:H})},A=s&&!P.length;return o("div",{className:`nc-PageArchive ${d}`,"data-nc-id":"PageArchive",children:[e("div",{className:"w-full px-2 xl:max-w-screen-2xl mx-auto",children:o("div",{className:"rounded-3xl relative aspect-w-16 aspect-h-12 sm:aspect-h-8 lg:aspect-h-7 xl:aspect-h-5 overflow-hidden ",children:[e(oe,{containerClassName:"absolute inset-0",src:((k=i.ncTaxonomyMeta.featuredImage)==null?void 0:k.sourceUrl)||ee.archivePageCoverImgDefault||"https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",className:"object-cover w-full h-full"}),o("div",{className:"absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center text-center",children:[o("h2",{className:"inline-block align-middle text-4xl sm:text-5xl font-semibold md:text-7xl",children:[p?"#":"",i.name]}),i.description&&e("div",{className:"hidden md:block max-w-xl text-sm mt-3 text-neutral-100",dangerouslySetInnerHTML:{__html:i.description}}),e("span",{className:"block mt-2 sm:mt-4 text-neutral-200",children:`${i.count||0} ${l.articles}`})]})]})}),i.description&&e("div",{className:"container block md:hidden max-w-xl text-sm mt-4",dangerouslySetInnerHTML:{__html:i.description}}),o("div",{className:"container py-16 lg:pb-28 lg:pt-24 space-y-16 lg:space-y-28",children:[o("div",{children:[o("div",{className:"flex flex-col sm:items-center sm:justify-between sm:flex-row",children:[o("div",{className:"flex space-x-2.5",children:[e(ce,{}),e(ge,{})]}),e("div",{className:"block my-4 border-b w-full border-neutral-100 sm:hidden"}),e("div",{className:"flex justify-end",children:e(re,{onChangeSelect:U,lists:F})})]}),e(O,{className:"my-5",data:P,error:C,isSkeleton:A}),A||P.length?o("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8 mt-8 lg:mt-10",children:[A&&Array.from("88888888").map((g,m)=>e(de,{},m)),P.map(g=>e(le,{post:g.node},g.node.id))]}):null,((L=c==null?void 0:c.posts.pageInfo)==null?void 0:L.hasNextPage)&&e("div",{className:"flex justify-center mt-12 lg:mt-16",children:e(v,{onClick:z,loading:s,children:l.showMeMore})})]}),E.enable&&e(te,S(h({},E),{parentId:Number(r),isCategory:!!f}))]})]})};var Ae=Object.freeze(Object.defineProperty({__proto__:null,ARCHIVE_PAGE_FILTERS:$,default:me},Symbol.toStringTag,{value:"Module"}));export{$ as A,ce as M,Ae as P,ge as a};
