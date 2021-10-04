var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;import{r as n,J as l,K as i,h as m,R as d}from"./vendor.061fbf51.js";import{H as p}from"./Heading.8b8253c2.js";import{H as u,c as b,b as f,a as g}from"./Card10Skeleton.1174441b.js";import{B as E}from"./BackgroundSection.7e357db3.js";import{n as v,G as j}from"./ncNanoId.025eca4e.js";import{c as y,C as h,a as N,b as w,g as S,d as C,e as k,f as P}from"./Card14Skeleton.055e6599.js";import{C as _}from"./Card9.615d904a.js";import{C as x}from"./Card11.f4148bfc.js";import{N as O}from"./NextPrev.496f13cc.js";import{D as I}from"./DataStatementBlockV2.eabe0a43.js";import{C as B}from"./Card11Skeleton.a81f7c1d.js";import{G as V,a as H}from"./main.b42e1bb2.js";import{u as T}from"./useGqlQuerySection.bffb6faf.js";import"./NavItem.0af45266.js";import"./formatDate.5c5d9c4d.js";import"./NcImage.8e407e46.js";import"./PostFeaturedMedia.890b02aa.js";import"./PostCardLikeAction.d5fb4b97.js";import"./Badge.470ee4ad.js";import"./hooks.ea7513ac.js";import"./index.87904adc.js";import"./ButtonPlayMusicRunningContainer.7a0e7bf7.js";import"./PostCardMeta.78843450.js";import"./EmptyState.98e2bbcc.js";const F=({className:e="",domNode:F,apiSettings:G,sectionIndex:L})=>{const Q="FactoryBlockPostsSlider"+v(),{graphQLvariables:M,settings:R}=G,[$,D]=n.exports.useState(-1),[Y,q]=n.exports.useState(M.variables||{});n.exports.useEffect((()=>{q(M.variables)}),[M]);let A="";"GQL_QUERY_GET_POSTS_BY_FILTER"===M.queryString&&(A=V),"GQL_QUERY_GET_POSTS_BY_SPECIFIC"===M.queryString&&(A=H);const U=l`
    ${A}
  `;n.exports.useEffect((()=>{q((e=>{var n,l,i;return l=((e,a)=>{for(var t in a||(a={}))s.call(a,t)&&c(e,t,a[t]);if(r)for(var t of r(a))o.call(a,t)&&c(e,t,a[t]);return e})({},e),i={categoryIn:-1===$?null==(n=M.variables)?void 0:n.categoryIn:[$]},a(l,t(i))}))}),[$]);const[J,{loading:K,error:z,data:W}]=i(U,{notifyOnNetworkStatusChange:!0,variables:Y}),{ref:X}=T(J,L),Z=(null==W?void 0:W.posts.edges)||[],ee=K&&!Z.length,ae=e=>{-1!==e?e.id!==$&&D(e.id):D(e)},te="layout-2"===R.blockLayoutStyle||R.showFilterTab,re=R.itemPerView||5;n.exports.useEffect((()=>{new j(`.${Q}`,{perView:re,gap:32,bound:!0,breakpoints:{1280:{perView:re-1},1023:{perView:re-2||1,gap:24},767:{perView:re-2||1,gap:20},639:{perView:1,gap:20}}}).mount()}),[W]);return m.createPortal((()=>{const{hasBackground:a,subHeading:t,heading:r,showFilterTab:s,categories:o,viewMoreHref:c}=R,n=a;return d.createElement("div",{className:`nc-FactoryBlockPostsSlider relative  ${n?"py-16":""}  ${e}`,ref:X},n&&d.createElement(E,null),d.createElement("div",{className:`relative ${Q}`},s?d.createElement(u,{tabActiveId:$,tabs:o,viewMoreHref:c,heading:r,subHeading:t,onClickTab:ae}):(()=>{const{heading:e,subHeading:a,blockLayoutStyle:t}=G.settings;return"layout-1"===t?d.createElement(p,{desc:a,hasNextPrev:!0},e):d.createElement(p,{desc:a,isCenter:!0},e)})(),d.createElement("div",{className:"glide__track","data-glide-el":"track"},d.createElement("ul",{className:"glide__slides"},ee?[1,1,1,1,1,1,1,1].map(((e,a)=>d.createElement("li",{key:a,className:"glide__slide "+(te?"pb-12 xl:pb-16":"")},(()=>{switch(G.settings.postCardName){case"card4":return d.createElement(S,{className:te?void 0:"hover:!shadow-sm"});case"card7":return d.createElement(P,null);case"card9":return d.createElement(g,null);case"card10":return d.createElement(f,null);case"card10V2":return d.createElement(k,null);case"card11":return d.createElement(B,{className:te?void 0:"hover:!shadow-sm"});case"card14":return d.createElement(C,null);default:return d.createElement(S,{className:te?void 0:"hover:!shadow-sm"})}})()))):Z.map(((e,a)=>d.createElement("li",{key:a,className:"glide__slide "+(te?"pb-12 xl:pb-16":"")},(e=>{switch(G.settings.postCardName){case"card4":return d.createElement(y,{post:e,className:te?void 0:"hover:!shadow-sm"});case"card7":return d.createElement(w,{post:e});case"card9":return d.createElement(_,{post:e});case"card10":return d.createElement(b,{post:e});case"card10V2":return d.createElement(N,{post:e});case"card11":return d.createElement(x,{post:e,className:te?void 0:"hover:!shadow-sm"});case"card14":return d.createElement(h,{post:e});default:return d.createElement(y,{className:te?void 0:"hover:!shadow-sm",post:e})}})(e.node)))))),d.createElement(I,{className:"my-5",data:Z,error:z,isSkeleton:ee}),te&&d.createElement(O,{btnClassName:"w-12 h-12",containerClassName:"justify-center"})))})(),F)};export{F as default};
