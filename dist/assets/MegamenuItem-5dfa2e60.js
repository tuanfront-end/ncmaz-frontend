import{r as a,b as M,j as e,N as j}from"./main-76784102.js";import{F as D}from"./contantsCommon-f7fdd476.js";import{C as F,a as R}from"./Card18Skeleton-be2bbe35.js";import{D as q}from"./DataStatementBlockV2-34fa3659.js";import{u as B}from"./useGqlQuerySection-ec246888.js";import{a as Q}from"./useQuery-7b3c67b8.js";import{u as G}from"./useLazyQuery-4d0522c4.js";import"./NcImage-17b8ad45.js";import"./getImageSizesBySizeName-22c25ac1.js";import"./PostTypeFeaturedIcon-7c14454f.js";import"./formatDate-dfe39bf7.js";import"./index-b91427d8.js";import"./EmptyState-6e9986bd.js";import"./useIntersectionObserver-657e54d7.js";const z=` edges {
  node {
    id
    link
    date
    featuredImage {
        ${D}
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
}`,U=`
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
     ${z}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor 
      } 
    }
  }
`;function W({title:l,titleId:n,...o},i){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":n},o),l?a.createElement("title",{id:n},l):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))}const H=a.forwardRef(W),K=H;function V({title:l,titleId:n,...o},i){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":n},o),l?a.createElement("title",{id:n},l):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}))}const Y=a.forwardRef(V),I=Y,ge=({domNode:l,menuItemData:n})=>{var k,w,N;const{ncmazMenuCustomFields:o}=n,[i,$]=a.useState((w=(k=o==null?void 0:o.taxonomies)==null?void 0:k[0])==null?void 0:w.categoryId),{taxonomies:f,numberOfPosts:u,order:Z,orderBy:J,showTabFilter:m}=o;let y={},p=[];m?p=[i]:p=(f==null?void 0:f.map(r=>r.categoryId))||[],y={categoryIn:p,first:Number(u)};const E=Q`
    ${U}
  `,[C,{loading:b,error:S,data:d,fetchMore:g}]=G(E,{notifyOnNetworkStatusChange:!0,variables:y}),{ref:P}=B(C,999),s=(N=d==null?void 0:d.posts)==null?void 0:N.pageInfo,h=(d==null?void 0:d.posts.edges)||[],x=b,A=r=>{$(r.categoryId)},v=(r,{fetchMoreResult:t})=>{var c;return(c=t==null?void 0:t.posts)!=null&&c.edges.length?t:r},O=()=>{if(!(s!=null&&s.hasPreviousPage)&&!(s!=null&&s.hasNextPage))return null;let r="px-4 py-1.5 text-xs bg-white dark:bg-neutral-900 border border-neutral-200 hover:border-neutral-300 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center  -- disabled:opacity-70 disabled:text-gray-500  disabled:cursor-default disabled:hover:border-neutral-200 dark:disabled:hover:border-neutral-6000";return e.jsxs("div",{className:"nc-NextPrev mt-6 relative flex items-center justify-center text-neutral-900 dark:text-neutral-300 space-x-2.5 ",children:[e.jsxs("button",{className:r,disabled:!s.hasPreviousPage||b,onClick:()=>{g&&g({variables:{first:null,after:null,last:Number(u),before:s.startCursor||null},updateQuery:v})},children:[e.jsx(K,{className:"w-3.5 h-3.5"}),e.jsx("span",{className:"ml-1.5",children:j.prev})]}),e.jsxs("button",{className:r,disabled:!s.hasNextPage||b,onClick:()=>{g&&g({variables:{first:Number(u),after:s.endCursor||null,last:null,before:null},updateQuery:v})},children:[e.jsx("span",{className:"mr-1.5",children:j.next}),e.jsx(I,{className:"w-3.5 h-3.5"})]})]})},T=()=>{const{taxonomies:r}=n.ncmazMenuCustomFields;return e.jsx("div",{className:"w-1/5 py-6 pr-4 flex-shrink-0",children:(r||[]).map(t=>{const c=t.categoryId===i;return e.jsxs("div",{className:`group py-2.5 pl-8 flex items-center justify-between relative rounded-r-full cursor-pointer ${c?"bg-primary-50 dark:bg-neutral-800 text-primary-900 font-medium dark:text-primary-50":"hover:bg-neutral-100/80 dark:hover:bg-neutral-800/50"}`,onClick:()=>A(t),children:[e.jsx("span",{children:t.name}),e.jsx("a",{className:`pr-5 pl-2 ${c?"block":"hidden group-hover:block"}`,href:t.link,children:e.jsx(I,{className:"w-4 h-4"})})]},t.categoryId)})})},L=()=>e.jsx("div",{className:`flex-grow ${m?"border-l border-neutral-200 dark:border-neutral-800":""}`,children:e.jsxs("div",{className:"p-6",children:[e.jsx(q,{className:"my-5",data:h,error:S,isSkeleton:x}),x||h.length?e.jsx("div",{className:`grid gap-6 ${m?"grid-cols-4":"grid-cols-5"}`,children:x?Array.from(Array(Number(u)||10).keys()).map((r,t)=>e.jsx(F,{},t)):h.map(r=>e.jsx(R,{imageSizes:"MEDIUM",post:r.node},r.node.id))}):null,O()]})}),_=()=>e.jsx("div",{ref:P,className:"nc-megamenu-item absolute top-full inset-x-0 ",children:e.jsxs("div",{className:"w-full flex overflow-hidden rounded-xl shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 ",children:[m&&T(),L()]})});return M.createPortal(_(),l)};export{ge as default};
