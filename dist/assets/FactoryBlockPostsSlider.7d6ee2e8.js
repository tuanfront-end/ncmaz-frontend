var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;import{r as n,g as l,u as i,a as m,R as d}from"./vendor.9a2c2287.js";import{H as p}from"./Heading.f2ab429d.js";import{H as u,c as f,b,a as g}from"./Card10Skeleton.72e46501.js";import{B as v}from"./BackgroundSection.6c11eca0.js";import{n as E,G as h}from"./ncNanoId.3f36f1af.js";import{c as j,C as w,a as y,b as N,g as C,d as k,e as P,f as S}from"./Card14Skeleton.496a4261.js";import{C as x}from"./Card9.2f642967.js";import{C as O}from"./Card11.b00b3c97.js";import{N as _}from"./NextPrev.fedaf664.js";import{D as H}from"./main.243c593f.js";import{C as V}from"./Card11Skeleton.43b556f0.js";import"./NavItem.a338fd47.js";import"./formatDate.5c5d9c4d.js";import"./PostFeaturedMedia.b24689e0.js";import"./PostCardLikeAction.9db16b47.js";import"./hooks.f7cf5f07.js";import"./index.5582b8b7.js";import"./ButtonPlayMusicRunningContainer.73e9b9c8.js";import"./PostCardMeta.17191125.js";const I=({className:e="",domNode:I,apiSettings:B})=>{const M="glide_"+E(),{graphQLvariables:$,settings:F}=B,[L,D]=n.exports.useState(-1),[T,A]=n.exports.useState($.variables||{});n.exports.useEffect((()=>{A($.variables)}),[$]);const R=l`
    ${$.queryString}
  `;n.exports.useEffect((()=>{A((e=>{var n,l,i;return l=((e,a)=>{for(var t in a||(a={}))s.call(a,t)&&c(e,t,a[t]);if(r)for(var t of r(a))o.call(a,t)&&c(e,t,a[t]);return e})({},e),i={categoryIn:-1===L?null==(n=$.variables)?void 0:n.categoryIn:[L]},a(l,t(i))}))}),[L]);const{loading:q,error:G,data:Q}=i(R,{notifyOnNetworkStatusChange:!0,variables:T}),z=(null==Q?void 0:Q.posts.edges)||[],J=q&&!z.length,K=e=>{-1!==e?e.id!==L&&D(e.id):D(e)},U="layout-2"===F.blockLayoutStyle||F.showFilterTab,W=F.itemPerView;n.exports.useEffect((()=>{new h(`.${M}`,{perView:W,gap:32,bound:!0,breakpoints:{1280:{perView:W-1},1023:{perView:W-2||1,gap:24},767:{perView:W-2||1,gap:20},639:{perView:1,gap:20}}}).mount()}),[Q]);return m.createPortal((()=>{const{hasBackground:a,subHeading:t,heading:r,showFilterTab:s,categories:o,viewMoreHref:c}=F,n=a;return d.createElement("div",{className:`nc-FactoryBlockPostsSlider relative  ${n?"py-16":""}  ${e}`},n&&d.createElement(v,null),d.createElement("div",{className:`relative ${M}`},s?d.createElement(u,{tabActiveId:L,tabs:o,viewMoreHref:c,heading:r,subHeading:t,onClickTab:K}):(()=>{const{heading:e,subHeading:a,blockLayoutStyle:t}=B.settings;return"layout-1"===t?d.createElement(p,{desc:a,hasNextPrev:!0},e):d.createElement(p,{desc:a,isCenter:!0},e)})(),d.createElement("div",{className:"glide__track","data-glide-el":"track"},d.createElement("ul",{className:"glide__slides"},J?[1,1,1,1,1,1,1,1].map(((e,a)=>d.createElement("li",{key:a,className:"glide__slide "+(U?"pb-12 xl:pb-16":"")},(()=>{switch(B.settings.postCardName){case"card4":return d.createElement(C,{className:U?void 0:"hover:!shadow-sm"});case"card7":return d.createElement(S,null);case"card9":return d.createElement(g,null);case"card10":return d.createElement(b,null);case"card10V2":return d.createElement(P,null);case"card11":return d.createElement(V,{className:U?void 0:"hover:!shadow-sm"});case"card14":return d.createElement(k,null);default:return d.createElement(C,{className:U?void 0:"hover:!shadow-sm"})}})()))):z.map(((e,a)=>d.createElement("li",{key:a,className:"glide__slide "+(U?"pb-12 xl:pb-16":"")},(e=>{switch(B.settings.postCardName){case"card4":return d.createElement(j,{post:e,className:U?void 0:"hover:!shadow-sm"});case"card7":return d.createElement(N,{post:e});case"card9":return d.createElement(x,{post:e});case"card10":return d.createElement(f,{post:e});case"card10V2":return d.createElement(y,{post:e});case"card11":return d.createElement(O,{post:e,className:U?void 0:"hover:!shadow-sm"});case"card14":return d.createElement(w,{post:e});default:return d.createElement(j,{className:U?void 0:"hover:!shadow-sm",post:e})}})(e.node)))))),d.createElement(H,{className:"my-5",data:z,error:G,isSkeleton:J}),U&&d.createElement(_,{btnClassName:"w-12 h-12",containerClassName:"justify-center"})))})(),I)};export{I as default};
