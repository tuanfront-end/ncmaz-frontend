import{h as N,U as v,aL as E,r as T,a as o,j as r,D as I,N as u,k as O}from"./main.2b5abd22.js";import{c as P}from"./queryGraphql.d569fecf.js";import{a as A,C as j}from"./Card3SmallSkeleton.b1dcc274.js";import{B as w}from"./ButtonPrimary.53b1eb4f.js";import"./NcImage.bbb57ae5.js";import"./PostCardMeta.0eb2d614.js";import"./formatDate.5c5d9c4d.js";import"./index.2d0f1964.js";const U=({searchText:x})=>{var c;const y=N.useRef(null),b=N.useRef(null),i=15;let d={},l="";l=P,d={first:i,search:x};const _=v`
    ${l}
  `,{loading:n,error:h,data:s,fetchMore:m}=E(_,{notifyOnNetworkStatusChange:!0,variables:d});T.exports.useEffect(()=>{var e;(e=s==null?void 0:s.posts.pageInfo)==null||e.total},[s]);const t=(s==null?void 0:s.posts.edges)||[],k=(e,{fetchMoreResult:a})=>{var f,g,S;return(f=a==null?void 0:a.posts)!=null&&f.edges.length?{...a,posts:{...a.posts,edges:[...(g=e==null?void 0:e.posts)==null?void 0:g.edges,...(S=a==null?void 0:a.posts)==null?void 0:S.edges]}}:e},C=()=>{if(!m)return;const e=t.map(a=>a.node.postId);m({variables:{first:i,notIn:e},updateQuery:k})},p=n&&!t.length;return o("div",{className:"bg-white dark:bg-neutral-800",children:[o("div",{ref:y,className:"max-h-[70vh] overflow-y-auto border-t border-neutral-200 dark:border-neutral-700",children:[r(I,{className:"my-5 flex justify-center",data:t,error:h,isSkeleton:p}),p||t.length?o("div",{className:"grid grid-cols-1 divide-y divide-neutral-200 dark:divide-neutral-700",children:[t.map(e=>r(A,{className:"p-4 hover:bg-neutral-100 dark:hover:bg-neutral-700",post:e.node},e.node.id)),r("div",{ref:b,className:"hidden"}),n&&Array.from("88888888").map((e,a)=>r(j,{className:"p-4 "},a)),((c=s==null?void 0:s.posts.pageInfo)==null?void 0:c.hasNextPage)&&r("div",{className:"p-4",children:r(w,{className:"inline-flex",sizeClass:"px-4 py-2 sm:py-2.5",fontSize:"text-xs sm:text-sm font-medium",onClick:C,loading:n,children:u.showMeMore})})]}):null]}),r("div",{className:"flex justify-between space-x-1 p-3 sm:p-4 border-t border-neutral-200 dark:border-neutral-700",children:r(O,{className:"ml-auto",sizeClass:"px-4 py-2 sm:py-2.5",fontSize:"text-xs sm:text-sm font-medium",type:"submit",children:u["Go to search page"]})})]})};export{U as default};
