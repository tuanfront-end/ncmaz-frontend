var w=Object.defineProperty,D=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var A=(o,e,r)=>e in o?w(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,l=(o,e)=>{for(var r in e||(e={}))G.call(e,r)&&A(o,r,e[r]);if(_)for(var r of _(e))Q.call(e,r)&&A(o,r,e[r]);return o},d=(o,e)=>D(o,F(e));import{r as q,U as u,aG as H,j as t,a as m,D as V,N as $}from"./main.3380b1f5.js";import{M as K,a as U,A as Y}from"./PageArchive.36667cfc.js";import{B as Z}from"./ButtonPrimary.f9fb09a2.js";import{A as z,S as J}from"./SectionTrendingCategories.2fcde7f6.js";import{C as W}from"./Card11.62c11abe.js";import{P as X}from"./queryGraphql.89466fe3.js";import{C as M}from"./Card11Skeleton.9ff2fe35.js";import"./NcModal.ced1a9af.js";import"./ButtonClose.8957fb2e.js";import"./CardCategory1Skeleton.41a61d14.js";import"./NcImage.b55b9c44.js";import"./index.f12587f3.js";import"./Tag.605783c5.js";import"./globalVariable.a9ea38a3.js";import"./SectionGridCategoryBox.6abb5a32.js";import"./CardCategory5Skeleton.e08d342e.js";import"./Badge.3cf53dd4.js";import"./CategoryBadgeList.521bf5f6.js";import"./PostCardLikeAndComment.443d34b5.js";import"./PostCardLikeAction.1d43f9ab.js";import"./PostCardMeta.86e8f092.js";import"./formatDate.5c5d9c4d.js";import"./PostFeaturedMedia.0347b26f.js";import"./PostTypeFeaturedIcon.0dd313e6.js";import"./index.00c2f9f3.js";import"./ReactPlayer.27b94619.js";import"./ButtonPlayMusicRunningContainer.543a94eb.js";import"./LoadingVideo.7638ad52.js";import"./PostMoreActionDropdown.b93ff3a7.js";const v=Y,ke=({className:o="",day:e,monthnum:r,year:E,sectionCategoriesTrending:p,pageTitle:T})=>{var y,h;const g=((y=frontendObject.allSettings)==null?void 0:y.readingSettingsPostsPerPage)||20,[b,I]=q.exports.useState(v[0].value);let S={};S={order:"DESC",field:b,first:g,month:r,day:e,year:E};const k=u`
    ${X}
  `,{loading:x,error:L,data:i,fetchMore:f}=H(k,{notifyOnNetworkStatusChange:!0,variables:S}),n=(i==null?void 0:i.posts.edges)||[],j=(a,{fetchMoreResult:s})=>{var N,C,P;return(N=s==null?void 0:s.posts)!=null&&N.edges.length?d(l({},s),{posts:d(l({},s.posts),{edges:[...(C=a==null?void 0:a.posts)==null?void 0:C.edges,...(P=s==null?void 0:s.posts)==null?void 0:P.edges]})}):a},B=a=>{I(a.value)},O=()=>{if(!f)return;const a=n.map(s=>s.node.postId);f({variables:{first:g,notIn:a},updateQuery:j})},c=x&&!n.length;return t("div",{className:`nc-PageArchiveDate ${o}`,"data-nc-id":"PageArchiveDate",children:m("div",{className:"container py-16 lg:py-28 space-y-16 lg:space-y-28",children:[m("div",{children:[t("h2",{className:"inline-block max-w-screen-2xl text-4xl font-semibold md:text-5xl",dangerouslySetInnerHTML:{__html:T}}),m("div",{className:"mt-14 flex flex-col sm:items-center sm:justify-between sm:flex-row",children:[m("div",{className:"flex space-x-2.5",children:[t(K,{}),t(U,{})]}),t("div",{className:"block my-4 border-b w-full border-neutral-100 sm:hidden"}),t("div",{className:"flex justify-end",children:t(z,{onChangeSelect:B,lists:v})})]}),t(V,{className:"my-5",data:n,error:L,isSkeleton:c}),c||n.length?m("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8 mt-8 lg:mt-10",children:[c&&Array.from("88888888").map((a,s)=>t(M,{},s)),n.map(a=>t(W,{post:a.node},a.node.id))]}):null,((h=i==null?void 0:i.posts.pageInfo)==null?void 0:h.hasNextPage)&&t("div",{className:"flex justify-center mt-12 lg:mt-16",children:t(Z,{onClick:O,loading:x,children:$.showMeMore})})]}),p.enable&&t(J,d(l({},p),{isCategory:!1}))]})})};export{ke as default};
