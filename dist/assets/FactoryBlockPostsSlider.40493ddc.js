var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;import{r as n,i as o,j as i,G as d,k as m,R as u}from"./vendor.3078d0a1.js";import{E as p,g as E,B as g,H as b,D as v,F as f,G as h,i as y,k as w,l as N,m as S,o as _,p as k,q as P,t as O}from"./main.0153da19.js";import{c as j,C,a as x,b as I,g as T,d as V,e as F,f as B}from"./Card14Skeleton.16e94eba.js";const G=({className:e="",domNode:G,apiSettings:H,sectionIndex:L})=>{const Q="FactoryBlockPostsSlider"+p(),{graphQLvariables:$,settings:R}=H,[Y,q]=n.exports.useState(-1),[D,M]=n.exports.useState($.variables||{});n.exports.useEffect((()=>{M($.variables)}),[$]);let U="";"GQL_QUERY_GET_POSTS_BY_FILTER"===$.queryString&&(U=h),"GQL_QUERY_GET_POSTS_BY_SPECIFIC"===$.queryString&&(U=y);const A=o`
    ${U}
  `;n.exports.useEffect((()=>{M((e=>{var n,o,i;return o=((e,a)=>{for(var t in a||(a={}))s.call(a,t)&&c(e,t,a[t]);if(r)for(var t of r(a))l.call(a,t)&&c(e,t,a[t]);return e})({},e),i={categoryIn:-1===Y?null==(n=$.variables)?void 0:n.categoryIn:[Y]},a(o,t(i))}))}),[Y]);const[z,{loading:J,error:K,data:W}]=i(A,{notifyOnNetworkStatusChange:!0,variables:D}),{ref:X}=E(z,L),Z=(null==W?void 0:W.posts.edges)||[],ee=J&&!Z.length,ae=e=>{-1!==e?e.id!==Y&&q(e.id):q(e)},te="layout-2"===R.blockLayoutStyle||R.showFilterTab,re=R.itemPerView||5;n.exports.useEffect((()=>{new d(`.${Q}`,{perView:re,gap:32,bound:!0,breakpoints:{1280:{perView:re-1},1023:{perView:re-2||1,gap:24},767:{perView:re-2||1,gap:20},639:{perView:1,gap:20}}}).mount()}),[W]);return m.createPortal((()=>{const{hasBackground:a,subHeading:t,heading:r,showFilterTab:s,categories:l,viewMoreHref:c}=R,n=a;return u.createElement("div",{className:`nc-FactoryBlockPostsSlider relative  ${n?"py-16":""}  ${e}`,ref:X},n&&u.createElement(g,null),u.createElement("div",{className:`relative ${Q}`},s?u.createElement(b,{tabActiveId:Y,tabs:l,viewMoreHref:c,heading:r,subHeading:t,onClickTab:ae}):(()=>{const{heading:e,subHeading:a,blockLayoutStyle:t}=H.settings;return"layout-1"===t?u.createElement(O,{desc:a,hasNextPrev:!0},e):u.createElement(O,{desc:a,isCenter:!0},e)})(),u.createElement("div",{className:"glide__track","data-glide-el":"track"},u.createElement("ul",{className:"glide__slides"},ee?[1,1,1,1,1,1,1,1].map(((e,a)=>u.createElement("li",{key:a,className:"glide__slide "+(te?"pb-12 xl:pb-16":"")},(()=>{switch(H.settings.postCardName){case"card4":return u.createElement(T,{className:te?void 0:"hover:!shadow-sm"});case"card7":return u.createElement(B,null);case"card9":return u.createElement(P,null);case"card10":return u.createElement(k,null);case"card10V2":return u.createElement(F,null);case"card11":return u.createElement(_,{className:te?void 0:"hover:!shadow-sm"});case"card14":return u.createElement(V,null);default:return u.createElement(T,{className:te?void 0:"hover:!shadow-sm"})}})()))):Z.map(((e,a)=>u.createElement("li",{key:a,className:"glide__slide "+(te?"pb-12 xl:pb-16":"")},(e=>{switch(H.settings.postCardName){case"card4":return u.createElement(j,{post:e,className:te?void 0:"hover:!shadow-sm"});case"card7":return u.createElement(I,{post:e});case"card9":return u.createElement(S,{post:e});case"card10":return u.createElement(N,{post:e});case"card10V2":return u.createElement(x,{post:e});case"card11":return u.createElement(w,{post:e,className:te?void 0:"hover:!shadow-sm"});case"card14":return u.createElement(C,{post:e});default:return u.createElement(j,{className:te?void 0:"hover:!shadow-sm",post:e})}})(e.node)))))),u.createElement(v,{className:"my-5",data:Z,error:K,isSkeleton:ee}),te&&u.createElement(f,{btnClassName:"w-12 h-12",containerClassName:"justify-center"})))})(),G)};export{G as default};
