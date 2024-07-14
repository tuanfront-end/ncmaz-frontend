import{j as t,N as r,R as n,r as b,c as Ga,a7 as N,A as fa}from"./main-1336051d.js";import{B as Da}from"./ButtonPrimary-90650a42.js";import{h as aa,T as Ta,P as _a,C as Ua,a as ha,b as Sa}from"./CreateNewPostEditor-d3fbd999.js";import{B as ea}from"./ButtonSecondary-d8ab891b.js";import{u as $a,L as ja,I as Pa}from"./Textarea-6b574b45.js";import{B as Ca}from"./ButtonPrimaryDanger-76fd3d2d.js";import{N as Fa}from"./NcModal-0d2376e7.js";import{a as Aa}from"./useQuery-cdab2663.js";import"./Button-608d02dc.js";import"./twFocusClass-d0735f61.js";import"./CircleLoading-92a4a546.js";import"./useLazyQuery-7ad81a0a.js";import"./DataStatementBlockV2-438e0cef.js";import"./EmptyState-97a6e2b7.js";import"./queryGraphql-2a3bc518.js";import"./contants-5828f68f.js";import"./contantsCommon-f7fdd476.js";import"./NcImage-ae37738a.js";import"./getImageSizesBySizeName-22c25ac1.js";import"./index-14527550.js";import"./Input-53932cfe.js";import"./dialog-f93195cd.js";import"./use-is-mounted-15fc68cf.js";import"./menu-34fb9f7e.js";import"./useWindowSize-70f08d70.js";import"./transition-aa9406a8.js";import"./ButtonClose-b2f3574e.js";const va=({show:a,onCloseModal:o,onSubmit:m})=>{const i=()=>{m()},g=()=>t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold text-neutral-900 dark:text-neutral-200",children:r["Draft this post"]}),t.jsx("span",{className:"text-sm",children:r["Post will be changed to draft. You can publish it later."]}),t.jsxs("div",{className:"mt-4 space-x-3",children:[t.jsx(Ca,{onClick:i,type:"submit",children:r["Draft this post"]}),t.jsx(ea,{type:"button",onClick:o,children:r.Cancel})]})]});return t.jsx(Fa,{renderTrigger:()=>null,isOpenProp:a,renderContent:g,onCloseModal:o,contentExtraClass:"max-w-screen-sm",modalTitle:""})},oe=({postNode:a})=>{var D,T,_,U,h,S,$,j,P,C,F,A,v,w,E,k,M,O,B,L,V,R,H,q,Y,Z,J,K,Q,W,X;const[o,m]=n.useState(!1),[i,g]=n.useState(a.title),[p,ta]=n.useState(a.content),[c,sa]=n.useState({sourceUrl:((D=a.featuredImage)==null?void 0:D.node.sourceUrl)||"",id:((T=a.featuredImage)==null?void 0:T.node.databaseId)||"",altText:((_=a.featuredImage)==null?void 0:_.node.altText)||""}),[y,la]=n.useState(((U=a.tags)==null?void 0:U.edges.map(e=>e.node))||[]),[x,ra]=n.useState(((h=a.categories)==null?void 0:h.edges.map(e=>e.node))||[]),[z,na]=n.useState({audioUrl:a.ncmazAudioUrl.audioUrl||"",videoUrl:a.ncmazVideoUrl.videoUrl||"",isAllowComments:a.commentStatus==="open",excerptText:a.excerpt||"",postFormatsSelected:(($=(S=a.postFormats)==null?void 0:S.edges[0])==null?void 0:$.node.slug)||"Standard",objGalleryImgs:{1:{sourceUrl:((j=a.ncmazGalleryImgs.image1)==null?void 0:j.sourceUrl)||"",id:((P=a.ncmazGalleryImgs.image1)==null?void 0:P.databaseId)||"",altText:((C=a.ncmazGalleryImgs.image1)==null?void 0:C.altText)||""},2:{sourceUrl:((F=a.ncmazGalleryImgs.image2)==null?void 0:F.sourceUrl)||"",id:((A=a.ncmazGalleryImgs.image2)==null?void 0:A.databaseId)||"",altText:((v=a.ncmazGalleryImgs.image2)==null?void 0:v.altText)||""},3:{sourceUrl:((w=a.ncmazGalleryImgs.image3)==null?void 0:w.sourceUrl)||"",id:((E=a.ncmazGalleryImgs.image3)==null?void 0:E.databaseId)||"",altText:((k=a.ncmazGalleryImgs.image3)==null?void 0:k.altText)||""},4:{sourceUrl:((M=a.ncmazGalleryImgs.image4)==null?void 0:M.sourceUrl)||"",id:((O=a.ncmazGalleryImgs.image4)==null?void 0:O.databaseId)||"",altText:((B=a.ncmazGalleryImgs.image4)==null?void 0:B.altText)||""},5:{sourceUrl:((L=a.ncmazGalleryImgs.image5)==null?void 0:L.sourceUrl)||"",id:((V=a.ncmazGalleryImgs.image5)==null?void 0:V.databaseId)||"",altText:((R=a.ncmazGalleryImgs.image5)==null?void 0:R.altText)||""},6:{sourceUrl:((H=a.ncmazGalleryImgs.image6)==null?void 0:H.sourceUrl)||"",id:((q=a.ncmazGalleryImgs.image6)==null?void 0:q.databaseId)||"",altText:((Y=a.ncmazGalleryImgs.image6)==null?void 0:Y.altText)||""},7:{sourceUrl:((Z=a.ncmazGalleryImgs.image7)==null?void 0:Z.sourceUrl)||"",id:((J=a.ncmazGalleryImgs.image7)==null?void 0:J.databaseId)||"",altText:((K=a.ncmazGalleryImgs.image7)==null?void 0:K.altText)||""},8:{sourceUrl:((Q=a.ncmazGalleryImgs.image8)==null?void 0:Q.sourceUrl)||"",id:((W=a.ncmazGalleryImgs.image8)==null?void 0:W.databaseId)||"",altText:((X=a.ncmazGalleryImgs.image8)==null?void 0:X.altText)||""}}}),ma=Aa`
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
          ncmazGalleryImgs1DatabaseID: $ncmazGalleryImgs_1_databaseID
          ncmazGalleryImgs2DatabaseID: $ncmazGalleryImgs_2_databaseID
          ncmazGalleryImgs3DatabaseID: $ncmazGalleryImgs_3_databaseID
          ncmazGalleryImgs4DatabaseID: $ncmazGalleryImgs_4_databaseID
          ncmazGalleryImgs5DatabaseID: $ncmazGalleryImgs_5_databaseID
          ncmazGalleryImgs6DatabaseID: $ncmazGalleryImgs_6_databaseID
          ncmazGalleryImgs7DatabaseID: $ncmazGalleryImgs_7_databaseID
          ncmazGalleryImgs8DatabaseID: $ncmazGalleryImgs_8_databaseID
          content: $content
          categories: { append: false, nodes: $categoryNodes }
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
  `,[oa,{error:G,data:l,loading:d}]=$a(ma),f=b.useDeferredValue(l==null?void 0:l.updatePost.post.id);b.useEffect(()=>{window.addEventListener("beforeunload",aa,!0)},[]),b.useEffect(()=>{!f||!(l!=null&&l.updatePost.post.link)||(window.removeEventListener("beforeunload",aa,!0),Ga.success(r["Post successful"]+"!"),setTimeout(()=>{window.location.href=l==null?void 0:l.updatePost.post.link},500))},[f]);const ia=N.debounce(function(e){g(e.getText())},300),ca=N.debounce(function(e){ta(e.getHTML())},400),da=e=>{sa(e)},ua=e=>{ra(e)},ga=e=>{la(e)},Ia=e=>{na(e)},ba=e=>{let s={excerpt:e.excerptText,commentStatus:e.isAllowComments?"open":"closed",postFormatNodes:[{slug:e.postFormatsSelected!=="Standard"?e.postFormatsSelected:null}]};return e.postFormatsSelected==="post-format-gallery"&&(s={...s,ncmazGalleryImgs_1_databaseID:e.objGalleryImgs[1].id||0,ncmazGalleryImgs_2_databaseID:e.objGalleryImgs[2].id||0,ncmazGalleryImgs_3_databaseID:e.objGalleryImgs[3].id||0,ncmazGalleryImgs_4_databaseID:e.objGalleryImgs[4].id||0,ncmazGalleryImgs_5_databaseID:e.objGalleryImgs[5].id||0,ncmazGalleryImgs_6_databaseID:e.objGalleryImgs[6].id||0,ncmazGalleryImgs_7_databaseID:e.objGalleryImgs[7].id||0,ncmazGalleryImgs_8_databaseID:e.objGalleryImgs[8].id||0}),e.postFormatsSelected==="post-format-video"&&(s={...s,ncmazVideoUrl:e.videoUrl||null}),e.postFormatsSelected==="post-format-audio"&&(s={...s,ncmazAudioUrl:e.audioUrl||null}),s},u=e=>{const s=ba(z),za={id:a.id,status:e,title:i,ncFeaturedImageDatabaseId:(c==null?void 0:c.id)||0,content:p,categoryNodes:x.map(I=>({id:I.id})),ncTags:y.map(I=>I.name).join(","),...s};oa({variables:za})},pa=()=>{var e,s;if(((s=(e=frontendObject.currentUser)==null?void 0:e.roles.edges[0])==null?void 0:s.node.name)==="contributor"){u("PENDING");return}u("PUBLISH")},ya=()=>{if(a.status==="pending"||a.status==="publish"){m(!0);return}u("DRAFT")},xa=()=>t.jsxs("div",{className:"pb-10 lg:py-10 w-full max-w-screen-md mx-auto ",children:[t.jsxs("div",{className:"flex flex-col w-full",children:[t.jsx(ja,{className:"block !text-base",children:r["Add a cover image"]}),t.jsx(Pa,{defaultImage:c,onChangeImage:da})]}),t.jsx(Ua,{defaultValue:x,onChange:ua}),t.jsx(ha,{defaultTitle:i,onUpdate:ia}),t.jsx(Sa,{defaultValue:y,onChange:ga})]});return t.jsxs("div",{className:"nc-UpdatePostEditor ",children:[t.jsxs("div",{className:"bg-white dark:bg-neutral-900 lg:shadow-xl rounded-2xl dark:ring dark:ring-neutral-50/10",children:[xa(),t.jsx(Ta,{defaultContent:p,onUpdate:ca}),t.jsx("div",{className:"w-full border-b my-2 border-neutral-300 dark:border-neutral-700"}),G&&t.jsx(fa,{containerClassName:"text-sm m-4 mb-0",type:"error",children:G.message}),t.jsxs("div",{className:"w-full max-w-screen-md mx-auto flex py-8",children:[t.jsx(Da,{fontSize:"text-base font-medium",onClick:pa,loading:d,disabled:d,children:r.Publish}),t.jsx(ea,{fontSize:"text-base font-medium",className:"ml-2.5",onClick:ya,loading:d,disabled:d,children:r["Save draft"]}),t.jsx(_a,{defaultData:z,onSubmit:Ia})]})]}),t.jsx(va,{show:o,onCloseModal:()=>m(!1),onSubmit:()=>{u("DRAFT"),m(!1)}})]})};export{oe as default};
