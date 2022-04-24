import{j as n,d as e,N as E,p as _,a4 as F,S as w,g as L,a8 as Q,$ as B,t as U,v as G,D as H}from"./main.64e1813d.js";const K=` edges {
  node {
    id
    link
    categories {
      edges {
        node {
          id
          link
          name
          uri
          slug
          count
          categoryId
          ncTaxonomyMeta {
            color 
          } 
        } 
      } 
    }
    commentCount
    date
    excerpt
    featuredImage {
      node {
        id
        altText
        caption
        sourceUrl(size: $featuredImage_size) 
      } 
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
}`,V=`
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
    $featuredImage_size: MediaItemSizeEnum = MEDIUM
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
     ${K}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor 
      } 
    }
  }
`,Y=({className:m="h-full",post:b})=>{var x,d,g,c,p,N,v;const{link:i,categories:a,title:f,featuredImage:o,postFormats:l}=b,$=(x=l==null?void 0:l.edges[0])==null?void 0:x.node.slug;return n("div",{className:`nc-Card18 group relative flex flex-col ${m}`,"data-nc-id":"Card18",children:[n("div",{className:"w-full block h-0 aspect-h-9 aspect-w-10 rounded-2xl overflow-hidden z-0",children:[e(E,{containerClassName:"absolute inset-0 ",src:(o==null?void 0:o.node.sourceUrl)||".",alt:f}),e("div",{children:e(_,{className:"absolute left-1.5 bottom-1.5",postType:$,wrapSize:"w-8 h-8",iconSize:"w-4 h-4"})}),e("div",{className:"bg-transparent group-hover:bg-gray-900/30 transform transition-colors"})]}),e("div",{className:"absolute top-1.5 inset-x-1.5 flex justify-between ",children:e(F,{className:"relative z-10",name:(g=(d=a==null?void 0:a.edges[0])==null?void 0:d.node)==null?void 0:g.name,href:(p=(c=a==null?void 0:a.edges[0])==null?void 0:c.node)==null?void 0:p.link,color:(v=(N=a==null?void 0:a.edges[0])==null?void 0:N.node)==null?void 0:v.ncTaxonomyMeta.color})}),e("h3",{className:"block mt-2 font-medium text-sm",children:e("span",{className:"line-clamp-2",dangerouslySetInnerHTML:{__html:f}})}),e("a",{href:i,className:"absolute inset-0"})]})},J=({className:m="h-full"})=>n("div",{className:`nc-Card18Skeleton group relative flex flex-col ${m}`,"data-nc-id":"Card18Skeleton",children:[n("div",{className:"w-full block h-0 aspect-h-9 aspect-w-10 rounded-2xl overflow-hidden",children:[e(E,{containerClassName:"absolute inset-0 ",src:"."}),e("div",{children:e(_,{className:"absolute left-1.5 bottom-1.5",wrapSize:"w-8 h-8",iconSize:"w-4 h-4"})}),e("div",{className:"bg-transparent group-hover:bg-gray-900/30 transform transition-colors"})]}),e("div",{className:"absolute top-1.5 inset-x-1.5 flex justify-between ",children:e(w,{width:"40%"})}),n("h3",{className:"block mt-2 font-medium text-sm",children:[e(w,{width:"80%"}),e(w,{width:"60%"})]})]}),X=({domNode:m,menuItemData:b})=>{var C,P,T;const{ncmazMenuCustomFields:i}=b,[a,f]=L.exports.useState((P=(C=i==null?void 0:i.taxonomies)==null?void 0:C[0])==null?void 0:P.categoryId),{taxonomies:o,numberOfPosts:l,order:$,orderBy:x,showTabFilter:d}=i;let g={},c=[];d?c=[a]:c=(o==null?void 0:o.map(r=>r.categoryId))||[],g={categoryIn:c,first:Number(l)};const p=Q`
    ${V}
  `,[N,{loading:v,error:z,data:u,fetchMore:y}]=B(p,{notifyOnNetworkStatusChange:!0,variables:g}),{ref:O}=U(N,99),s=(T=u==null?void 0:u.posts)==null?void 0:T.pageInfo,I=(u==null?void 0:u.posts.edges)||[],k=v,j=r=>{f(r.categoryId)},S=(r,{fetchMoreResult:t})=>{var h;return(h=t==null?void 0:t.posts)!=null&&h.edges.length?t:r},D=()=>{if(!(s!=null&&s.hasPreviousPage)&&!(s!=null&&s.hasNextPage))return null;let r="w-10 h-10 bg-white dark:bg-neutral-900 border border-neutral-200 hover:border-neutral-300 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center  -- disabled:opacity-70 disabled:text-gray-500  disabled:cursor-default disabled:hover:border-neutral-200 dark:disabled:hover:border-neutral-6000";return n("div",{className:"nc-NextPrev mt-8 ml-2 relative flex items-center justify-center text-neutral-900 dark:text-neutral-300 space-x-2.5 ",children:[e("button",{className:r,disabled:!s.hasPreviousPage,onClick:()=>{y&&y({variables:{first:null,after:null,last:Number(l),before:s.startCursor||null},updateQuery:S})},children:e("i",{className:"las la-angle-left"})}),e("button",{className:r,disabled:!s.hasNextPage,onClick:()=>{y&&y({variables:{first:Number(l),after:s.endCursor||null,last:null,before:null},updateQuery:S})},children:e("i",{className:"las la-angle-right"})})]})},M=()=>{const{taxonomies:r}=b.ncmazMenuCustomFields;return e("div",{className:"w-1/5 py-8 flex-shrink-0  ",children:e("div",{className:"flow-root",children:e("div",{children:(r||[]).map(t=>{const h=t.categoryId===a;return n("a",{href:t.link,className:`py-2.5 px-5 flex items-center !m-0 relative ${h?"bg-neutral-100 dark:bg-neutral-800 ":""}`,onMouseEnter:()=>j(t),children:[h&&e("span",{className:"absolute left-0 w-1 h-full top-0 bg-primary-500"}),t.name]},t.categoryId)})})})})},A=()=>e("div",{className:`flex-grow ${d?"border-l border-neutral-200 dark:border-neutral-800":""}`,children:n("div",{className:"px-4 py-5 ",children:[e(H,{className:"my-5",data:I,error:z,isSkeleton:k}),k||I.length?e("div",{className:`grid gap-4 ${d?"grid-cols-4":"grid-cols-5"}`,children:k?Array.from(Array(Number(l)||10).keys()).map((r,t)=>e(J,{},t)):I.map(r=>e(Y,{post:r.node},r.node.id))}):null,D()]})}),q=()=>e("div",{ref:O,className:"nc-megamenu-item absolute top-full py-3 -inset-x-10",children:n("div",{className:"w-full flex overflow-hidden rounded-2xl shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 ",children:[d&&M(),A()]})});return G.createPortal(q(),m)};export{X as default};
