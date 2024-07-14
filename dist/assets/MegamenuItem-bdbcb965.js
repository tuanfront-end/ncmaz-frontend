import{r as s,b as F,j as e,N as $}from"./main-1336051d.js";import{F as R}from"./contantsCommon-f7fdd476.js";import{C as q,a as B}from"./Card18Skeleton-c17d2358.js";import{D as Q}from"./DataStatementBlockV2-438e0cef.js";import{u as G}from"./useGqlQuerySection-f35a54ce.js";import{a as z}from"./useQuery-cdab2663.js";import{u as U}from"./useLazyQuery-7ad81a0a.js";import"./NcImage-ae37738a.js";import"./getImageSizesBySizeName-22c25ac1.js";import"./PostTypeFeaturedIcon-93c9f6fb.js";import"./formatDate-dfe39bf7.js";import"./index-14527550.js";import"./EmptyState-97a6e2b7.js";import"./useIntersectionObserver-546e9850.js";const W=` edges {
  node {
    id
    link
    date
    featuredImage {
        ${R}
    }
    postFormats {
      edges {
        node {
          id
          name 
        } 
      } 
    }
    postId
    slug
    title 
  } 
}`,H=`
  query Megamenu_Filter(
    $field: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $categoryIn: [ID] = []
    $tagIn: [ID] = []
    $authorIn: [ID] = []
    $last: Int = null
    $first: Int = 10
    $before: String = null
    $after: String = null
  ) {
    posts(
      where: {
        orderby: { field: $field, order: $order }
        categoryIn: $categoryIn
        tagIn: $tagIn
        authorIn: $authorIn
      }
      last: $last
      first: $first
      before: $before
      after: $after
    ) {
     ${W}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor 
      } 
    }
  }
`;function K({title:l,titleId:n,...o},d){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:d,"aria-labelledby":n},o),l?s.createElement("title",{id:n},l):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))}const V=s.forwardRef(K),Y=V;function Z({title:l,titleId:n,...o},d){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:d,"aria-labelledby":n},o),l?s.createElement("title",{id:n},l):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}))}const J=s.forwardRef(Z),E=J,fe=({domNode:l,menuItemData:n})=>{var y,w,N,j,I;const{ncmazMenuCustomFields:o}=n,[d,C]=s.useState((N=(w=(y=o==null?void 0:o.taxonomies)==null?void 0:y.nodes)==null?void 0:w[0])==null?void 0:N.databaseId),{taxonomies:b,numberOfPosts:u,order:X,orderBy:ee,showTabFilter:m}=o;let v={},f=[];m?f=[d]:f=((j=b==null?void 0:b.nodes)==null?void 0:j.map(r=>r.databaseId))||[],v={categoryIn:f,first:Number(u)};const S=z`
    ${H}
  `,[P,{loading:p,error:A,data:i,fetchMore:g}]=U(S,{notifyOnNetworkStatusChange:!0,variables:v}),{ref:O}=G(P,999),a=(I=i==null?void 0:i.posts)==null?void 0:I.pageInfo,h=(i==null?void 0:i.posts.edges)||[],x=p,T=r=>{C(r.databaseId)},k=(r,{fetchMoreResult:t})=>{var c;return(c=t==null?void 0:t.posts)!=null&&c.edges.length?t:r},L=()=>{if(!(a!=null&&a.hasPreviousPage)&&!(a!=null&&a.hasNextPage))return null;let r="px-4 py-1.5 text-xs bg-white dark:bg-neutral-900 border border-neutral-200 hover:border-neutral-300 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center  -- disabled:opacity-70 disabled:text-gray-500  disabled:cursor-default disabled:hover:border-neutral-200 dark:disabled:hover:border-neutral-6000";return e.jsxs("div",{className:"nc-NextPrev mt-6 relative flex items-center justify-center text-neutral-900 dark:text-neutral-300 space-x-2.5 ",children:[e.jsxs("button",{className:r,disabled:!a.hasPreviousPage||p,onClick:()=>{g&&g({variables:{first:null,after:null,last:Number(u),before:a.startCursor||null},updateQuery:k})},children:[e.jsx(Y,{className:"w-3.5 h-3.5"}),e.jsx("span",{className:"ml-1.5",children:$.prev})]}),e.jsxs("button",{className:r,disabled:!a.hasNextPage||p,onClick:()=>{g&&g({variables:{first:Number(u),after:a.endCursor||null,last:null,before:null},updateQuery:k})},children:[e.jsx("span",{className:"mr-1.5",children:$.next}),e.jsx(E,{className:"w-3.5 h-3.5"})]})]})},_=()=>{const{taxonomies:r}=n.ncmazMenuCustomFields;return e.jsx("div",{className:"w-1/5 py-6 pr-4 flex-shrink-0",children:((r==null?void 0:r.nodes)||[]).map(t=>{const c=t.databaseId===d;return e.jsxs("div",{className:`group py-2.5 pl-8 flex items-center justify-between relative rounded-r-full cursor-pointer ${c?"bg-primary-50 dark:bg-neutral-800 text-primary-900 font-medium dark:text-primary-50":"hover:bg-neutral-100/80 dark:hover:bg-neutral-800/50"}`,onClick:()=>T(t),children:[e.jsx("span",{children:t.name}),e.jsx("a",{className:`pr-5 pl-2 ${c?"block":"hidden group-hover:block"}`,href:t.link,children:e.jsx(E,{className:"w-4 h-4"})})]},t.databaseId)})})},M=()=>e.jsx("div",{className:`flex-grow ${m?"border-l border-neutral-200 dark:border-neutral-800":""}`,children:e.jsxs("div",{className:"p-6",children:[e.jsx(Q,{className:"my-5",data:h,error:A,isSkeleton:x}),x||h.length?e.jsx("div",{className:`grid gap-6 ${m?"grid-cols-4":"grid-cols-5"}`,children:x?Array.from(Array(Number(u)||10).keys()).map((r,t)=>e.jsx(q,{},t)):h.map(r=>e.jsx(B,{imageSizes:"MEDIUM",post:r.node},r.node.id))}):null,L()]})}),D=()=>e.jsx("div",{ref:O,className:"nc-megamenu-item absolute top-full inset-x-0 ",children:e.jsxs("div",{className:"w-full flex overflow-hidden rounded-xl shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 ",children:[m&&_(),M()]})});return F.createPortal(D(),l)};export{fe as default};
