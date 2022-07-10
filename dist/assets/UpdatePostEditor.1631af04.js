import{j as t,a as m,N as n,k as te,h as r,U as Ge,r as b,W as fe,M as xe,aV as ee,X as Te}from"./main.6963f843.js";import{B as De}from"./ButtonPrimary.7e733f4e.js";import{h as ae,C as Ue,T as he,a as Se,b as $e,P as Pe}from"./CreateNewPostEditor.58310cfa.js";import{u as Ce,L as Fe,I as Ae}from"./Textarea.087265e5.js";import{B as ve}from"./ButtonPrimaryDanger.69065814.js";import{N as we}from"./NcModal.10918aea.js";import"./CircleLoading.5c89dfb2.js";import"./queryGraphql.f657ad42.js";import"./NcImage.a50a6fbd.js";import"./index.3f4c9966.js";import"./CheckIcon.7be3a174.js";import"./ButtonClose.2e45d2ef.js";const ke=({show:e,onCloseModal:c,onSubmit:o})=>{const i=()=>{o()};return t(we,{renderTrigger:()=>null,isOpenProp:e,renderContent:()=>m("div",{children:[t("h3",{className:"text-lg font-semibold text-neutral-900 dark:text-neutral-200",children:n["Draft this post"]}),t("span",{className:"text-sm",children:n["Post will be changed to draft. You can publish it later."]}),m("div",{className:"mt-4 space-x-3",children:[t(ve,{onClick:i,type:"submit",children:n["Draft this post"]}),t(te,{type:"button",onClick:c,children:n.Cancel})]})]}),onCloseModal:c,contentExtraClass:"max-w-screen-sm",modalTitle:""})},Ze=({postNode:e})=>{var T,D,U,h,S,$,P,C,F,A,v,w,k,j,E,M,O,V,B,L,H,R,q,W,X,Y,Z,J,K,Q,N;const[c,o]=r.useState(!1),[i,y]=r.useState(e.title),[p,le]=r.useState(e.content),[d,se]=r.useState({sourceUrl:((T=e.featuredImage)==null?void 0:T.node.sourceUrl)||"",id:((D=e.featuredImage)==null?void 0:D.node.databaseId)||"",altText:((U=e.featuredImage)==null?void 0:U.node.altText)||""}),[_,ne]=r.useState(((h=e.tags)==null?void 0:h.edges.map(a=>a.node))||[]),[z,re]=r.useState(((S=e.categories)==null?void 0:S.edges.map(a=>a.node))||[]),[G,me]=r.useState({audioUrl:e.ncmazAudioUrl.audioUrl||"",videoUrl:e.ncmazVideoUrl.videoUrl||"",isAllowComments:e.commentStatus==="open",excerptText:e.excerpt||"",postFormatsSelected:((P=($=e.postFormats)==null?void 0:$.edges[0])==null?void 0:P.node.slug)||"Standard",objGalleryImgs:{1:{sourceUrl:((C=e.ncmazGalleryImgs.image1)==null?void 0:C.sourceUrl)||"",id:((F=e.ncmazGalleryImgs.image1)==null?void 0:F.databaseId)||"",altText:((A=e.ncmazGalleryImgs.image1)==null?void 0:A.altText)||""},2:{sourceUrl:((v=e.ncmazGalleryImgs.image2)==null?void 0:v.sourceUrl)||"",id:((w=e.ncmazGalleryImgs.image2)==null?void 0:w.databaseId)||"",altText:((k=e.ncmazGalleryImgs.image2)==null?void 0:k.altText)||""},3:{sourceUrl:((j=e.ncmazGalleryImgs.image3)==null?void 0:j.sourceUrl)||"",id:((E=e.ncmazGalleryImgs.image3)==null?void 0:E.databaseId)||"",altText:((M=e.ncmazGalleryImgs.image3)==null?void 0:M.altText)||""},4:{sourceUrl:((O=e.ncmazGalleryImgs.image4)==null?void 0:O.sourceUrl)||"",id:((V=e.ncmazGalleryImgs.image4)==null?void 0:V.databaseId)||"",altText:((B=e.ncmazGalleryImgs.image4)==null?void 0:B.altText)||""},5:{sourceUrl:((L=e.ncmazGalleryImgs.image5)==null?void 0:L.sourceUrl)||"",id:((H=e.ncmazGalleryImgs.image5)==null?void 0:H.databaseId)||"",altText:((R=e.ncmazGalleryImgs.image5)==null?void 0:R.altText)||""},6:{sourceUrl:((q=e.ncmazGalleryImgs.image6)==null?void 0:q.sourceUrl)||"",id:((W=e.ncmazGalleryImgs.image6)==null?void 0:W.databaseId)||"",altText:((X=e.ncmazGalleryImgs.image6)==null?void 0:X.altText)||""},7:{sourceUrl:((Y=e.ncmazGalleryImgs.image7)==null?void 0:Y.sourceUrl)||"",id:((Z=e.ncmazGalleryImgs.image7)==null?void 0:Z.databaseId)||"",altText:((J=e.ncmazGalleryImgs.image7)==null?void 0:J.altText)||""},8:{sourceUrl:((K=e.ncmazGalleryImgs.image8)==null?void 0:K.sourceUrl)||"",id:((Q=e.ncmazGalleryImgs.image8)==null?void 0:Q.databaseId)||"",altText:((N=e.ncmazGalleryImgs.image8)==null?void 0:N.altText)||""}}}),oe=Ge`
    mutation MUTATION_UPDATE_POST(
      $commentStatus: String = "open"
      $id: ID = ""
      $status: PostStatusEnum = null
      $title: String = ""
      $excerpt: String = ""
      $ncFeaturedImageDatabaseId: Int = null
      $ncmazAudioUrl: String = null
      $ncmazGalleryImgs_1_databaseID: Int = null
      $ncmazGalleryImgs_2_databaseID: Int = null
      $ncmazGalleryImgs_3_databaseID: Int = null
      $ncmazGalleryImgs_4_databaseID: Int = null
      $ncmazGalleryImgs_5_databaseID: Int = null
      $ncmazGalleryImgs_6_databaseID: Int = null
      $ncmazGalleryImgs_7_databaseID: Int = null
      $ncmazGalleryImgs_8_databaseID: Int = null
      $content: String = ""
      $ncmazVideoUrl: String = null
      $postFormatNodes: [PostPostFormatsNodeInput] = []
      $postFormatNodesAppend: Boolean = false
      $categoryNodes: [PostCategoriesNodeInput] = {}
      $ncTags: String = null
    ) {
      updatePost(
        input: {
          id: $id
          commentStatus: $commentStatus
          status: $status
          title: $title
          excerpt: $excerpt
          ncFeaturedImageDatabaseId: $ncFeaturedImageDatabaseId
          ncmazAudioUrl: $ncmazAudioUrl
          ncmazGalleryImgs_1_databaseID: $ncmazGalleryImgs_1_databaseID
          ncmazGalleryImgs_2_databaseID: $ncmazGalleryImgs_2_databaseID
          ncmazGalleryImgs_3_databaseID: $ncmazGalleryImgs_3_databaseID
          ncmazGalleryImgs_4_databaseID: $ncmazGalleryImgs_4_databaseID
          ncmazGalleryImgs_5_databaseID: $ncmazGalleryImgs_5_databaseID
          ncmazGalleryImgs_6_databaseID: $ncmazGalleryImgs_6_databaseID
          ncmazGalleryImgs_7_databaseID: $ncmazGalleryImgs_7_databaseID
          ncmazGalleryImgs_8_databaseID: $ncmazGalleryImgs_8_databaseID
          content: $content
          categories: { nodes: $categoryNodes }
          ncTags: $ncTags
          ncmazVideoUrl: $ncmazVideoUrl
          postFormats: {
            nodes: $postFormatNodes
            append: $postFormatNodesAppend
          }
        }
      ) {
        post {
          title
          link
          id
          postId
          postFormats {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
        }
      }
    }
  `,[ce,{error:f,data:s,loading:u}]=Ce(oe),x=b.exports.useDeferredValue(s==null?void 0:s.updatePost.post.id);b.exports.useEffect(()=>{window.addEventListener("beforeunload",ae,!0)},[]),b.exports.useEffect(()=>{!x||!(s!=null&&s.updatePost.post.link)||(window.removeEventListener("beforeunload",ae,!0),fe.success(n["Post successful"]+"!",{transition:xe}),setTimeout(()=>{window.location.href=s==null?void 0:s.updatePost.post.link},500))},[x]);const ie=ee.exports.debounce(function(a){y(a.getText())},300),de=ee.exports.debounce(function(a){le(a.getHTML())},400),ue=a=>{se(a)},ge=a=>{re(a)},Ie=a=>{ne(a)},be=a=>{me(a)},ye=a=>{let l={excerpt:a.excerptText,commentStatus:a.isAllowComments?"open":"closed",postFormatNodes:[{slug:a.postFormatsSelected!=="Standard"?a.postFormatsSelected:null}]};return a.postFormatsSelected==="post-format-gallery"&&(l={...l,ncmazGalleryImgs_1_databaseID:a.objGalleryImgs[1].id||0,ncmazGalleryImgs_2_databaseID:a.objGalleryImgs[2].id||0,ncmazGalleryImgs_3_databaseID:a.objGalleryImgs[3].id||0,ncmazGalleryImgs_4_databaseID:a.objGalleryImgs[4].id||0,ncmazGalleryImgs_5_databaseID:a.objGalleryImgs[5].id||0,ncmazGalleryImgs_6_databaseID:a.objGalleryImgs[6].id||0,ncmazGalleryImgs_7_databaseID:a.objGalleryImgs[7].id||0,ncmazGalleryImgs_8_databaseID:a.objGalleryImgs[8].id||0}),a.postFormatsSelected==="post-format-video"&&(l={...l,ncmazVideoUrl:a.videoUrl||null}),a.postFormatsSelected==="post-format-audio"&&(l={...l,ncmazAudioUrl:a.audioUrl||null}),l},g=a=>{const l=ye(G),ze={id:e.id,status:a,title:i,ncFeaturedImageDatabaseId:(d==null?void 0:d.id)||0,content:p,categoryNodes:z.map(I=>({id:I.id})),ncTags:_.map(I=>I.name).join(","),...l};ce({variables:ze})},pe=()=>{var a,l;if(((l=(a=frontendObject.currentUser)==null?void 0:a.roles.edges[0])==null?void 0:l.node.name)==="contributor"){g("PENDING");return}g("PUBLISH")},_e=()=>{if(e.status==="pending"||e.status==="publish"){o(!0);return}g("DRAFT")};return m("div",{className:"nc-UpdatePostEditor ",children:[m("div",{className:"bg-white dark:bg-neutral-900 lg:shadow-xl rounded-2xl dark:ring dark:ring-neutral-50/10",children:[(()=>m("div",{className:"pb-10 lg:py-10 w-full max-w-screen-md mx-auto ",children:[m("div",{className:"flex flex-col w-full",children:[t(Fe,{className:"block !text-base",children:n["Add a cover image"]}),t(Ae,{defaultImage:d,onChangeImage:ue})]}),t(Ue,{defaultValue:z,onChange:ge}),t(he,{defaultTitle:i,onUpdate:ie}),t(Se,{defaultValue:_,onChange:Ie})]}))(),t($e,{defaultContent:p,onUpdate:de}),t("div",{className:"w-full border-b my-2 border-neutral-300 dark:border-neutral-700"}),f&&t(Te,{containerClassName:"text-sm m-4 mb-0",type:"error",children:f.message}),m("div",{className:"w-full max-w-screen-md mx-auto flex py-8",children:[t(De,{fontSize:"text-base font-medium",onClick:pe,loading:u,disabled:u,children:n.Publish}),t(te,{fontSize:"text-base font-medium",className:"ml-2.5",onClick:_e,loading:u,disabled:u,children:n["Save draft"]}),t(Pe,{defaultData:G,onSubmit:be})]})]}),t(ke,{show:c,onCloseModal:()=>o(!1),onSubmit:()=>{g("DRAFT"),o(!1)}})]})};export{Ze as default};
