import{d as p,s as v,r as b,a as l,j as e,P as C}from"./main.be12d964.js";import{C as g}from"./CategoryBadgeList.e1ddf7ab.js";import{P}from"./PostCardLikeAndComment.1dd3a3e2.js";import{P as k}from"./PostCardMeta.28979e3d.js";import{P as N}from"./PostFeaturedMedia.9f2d6481.js";import w from"./PostMoreActionDropdown.583ac23d.js";const I=s=>{var r,a;const t=(r=frontendObject.currentUser)==null?void 0:r.roles.edges[0].node.name;return t==="administrator"||t==="editor"||(s==null?void 0:s.node.slug)===((a=frontendObject.currentUser)==null?void 0:a.slug)},U=({className:s="h-full",post:t,hiddenAuthor:r=!1,ratio:a="aspect-w-4 aspect-h-3",onClickLike:i})=>{var c;const{title:n,link:o,categories:m,date:f,author:u}=t,h=p(v),[x,d]=b.exports.useState(!1);return h.includes(t.postId)?null:l("div",{className:`nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${s}`,"data-nc-id":"Card11",onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[e("a",{href:o,className:"block absolute inset-0"}),e("div",{className:`block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden z-0 ${a}`,children:e("div",{children:e(N,{post:t,isHover:x})})}),e("span",{className:"absolute top-3 inset-x-3 z-10",children:e(g,{categories:m})}),l("div",{className:"p-4 h-full flex flex-col flex-grow",children:[r?e("span",{className:"text-xs text-neutral-500",children:f}):e(k,{meta:t}),e("h3",{className:"nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3",children:n?e("a",{href:o,className:"line-clamp-2",dangerouslySetInnerHTML:{__html:n},title:n}):null}),l("div",{className:"flex items-end justify-between mt-auto",children:[e(P,{onClickLike:i,className:"relative",postData:t,hiddenCommentOnMobile:!1}),l("div",{className:"flex items-center space-x-2",children:[e(C,{href:t.link,image:(c=t.featuredImage)==null?void 0:c.node.sourceUrl}),I(u)&&e(w,{postDataBaseId:t.postId,href:t.link})]})]})]})]})};export{U as C};