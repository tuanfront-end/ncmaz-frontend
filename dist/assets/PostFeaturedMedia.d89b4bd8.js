import{r as n,a as S,j as e,N as w,f as L,g as M,F as z}from"./main.69fc0c0d.js";import{N as g}from"./NcImage.3590ec63.js";import{P}from"./PostTypeFeaturedIcon.66b10922.js";import{R as A}from"./index.f6d086fe.js";import{B as j}from"./ButtonPlayMusicRunningContainer.46292ffb.js";function F(s,o=300){let r;return(...t)=>{clearTimeout(r),r=setTimeout(()=>{s.apply(this,t)},o)}}const V=({galleryImgs:s,postLink:o})=>{var y,R;const r=n.exports.useRef(null),t=n.exports.useRef(null),a=n.exports.useRef(null),[f,c]=n.exports.useState(((y=document.querySelector("html"))==null?void 0:y.getAttribute("dir"))==="rtl"),[u,i]=n.exports.useState(((R=document.querySelector("html"))==null?void 0:R.getAttribute("dir"))!=="rtl"),[d,h]=n.exports.useState(0);n.exports.useEffect(()=>{v()},[]);const v=n.exports.useCallback(b,[s]);function b(){var p,N,U;const l=r.current;if(!l)return;const m=((p=l.querySelector("div"))==null?void 0:p.clientWidth)||0,C=()=>{l.scrollTo(l.scrollLeft+m,0)},T=()=>{l.scrollTo(l.scrollLeft-m,0)};(N=t.current)==null||N.addEventListener("click",C),(U=a.current)==null||U.addEventListener("click",T),l.addEventListener("scroll",function(){_()});const _=F(function(){var k;i(!1),c(!1),((k=document.querySelector("html"))==null?void 0:k.getAttribute("dir"))==="rtl"?(h(Math.floor(-l.scrollLeft/m)),l.clientWidth-l.scrollLeft>=l.scrollWidth?i(!0):l.scrollLeft===0&&c(!0)):(h(Math.floor(l.scrollLeft/m)),l.clientWidth+l.scrollLeft>=l.scrollWidth?c(!0):l.scrollLeft===0&&i(!0))},500)}return S("div",{className:"nc-gallerySlider group relative z-10 xl:z-auto w-full h-full",children:[e("div",{className:" h-full gallery_scroller hiddenScrollbar scrollBehaviorSmooth",ref:r,children:s.map((l,m)=>e("a",{href:o,className:"block h-full w-full flex-shrink-0 ",children:e(g,{src:l,containerClassName:"w-full h-full"})},m))}),S("div",{className:"",children:[e("div",{ref:a,className:"nc-gallerySlider__prevBtn absolute opacity-0 group-hover:opacity-100 z-20 left-2 top-1/2 transform -translate-y-1/2 ",title:w.prev,children:!u&&e(L,{isOfGlide:!1,onlyPrev:!0,btnClassName:"w-8 h-8"})}),e("div",{ref:t,className:"nc-gallerySlider__nextBtn absolute opacity-0 group-hover:opacity-100 z-20 right-2 top-1/2 transform -translate-y-1/2 ",title:w.next,children:!f&&e(L,{isOfGlide:!1,onlyNext:!0,btnClassName:"w-8 h-8"})})]}),e("div",{className:"absolute w-full left-0 bottom-0 h-6 bg-gradient-to-t from-neutral-800/50"}),e("div",{className:"absolute z-10 bottom-3 left-0 w-full flex items-center justify-center glide__bullets",children:s.map((l,m)=>e("div",{className:`glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 ${m===d?"glide__bullet--active":""}`},m))})]})};var E={};Object.defineProperty(E,"__esModule",{value:!0});var x=n.exports;function B(s,o){o===void 0&&(o=0);var r=x.useRef(!1),t=x.useRef(),a=x.useRef(s),f=x.useCallback(function(){return r.current},[]),c=x.useCallback(function(){r.current=!1,t.current&&clearTimeout(t.current),t.current=setTimeout(function(){r.current=!0,a.current()},o)},[o]),u=x.useCallback(function(){r.current=null,t.current&&clearTimeout(t.current)},[]);return x.useEffect(function(){a.current=s},[s]),x.useEffect(function(){return c(),u},[o]),[f,u,c]}var H=E.default=B;const I=({videoUrl:s,isHover:o,featuredImage:r,postLink:t})=>{let a=null;const f=n.exports.useRef(null),[c,u]=n.exports.useState(!0),[i,d]=n.exports.useState(!1),[h,v]=n.exports.useState(!1),[,b,y]=H(()=>v(!0),300),R=n.exports.useCallback(()=>{b(),v(!1)},[]),[l,m]=n.exports.useState(0),[C,T]=n.exports.useState(!1);let _=window.matchMedia("only screen and (max-width: 639px)").matches;const p=M(f,{freezeOnceVisible:!1,threshold:.999,rootMargin:"-10px 0px"});n.exports.useEffect(()=>{if(!o)return u(!0),R();y()},[o]),n.exports.useEffect(()=>{if(!p)return;const k=((p==null?void 0:p.intersectionRatio)||-1)>l;T(k),m((p==null?void 0:p.intersectionRatio)||0)},[p]),n.exports.useEffect(()=>{if(!!i)return a&&clearTimeout(a),a=setTimeout(()=>{d(!1)},2e3),()=>{a&&clearTimeout(a)}},[i]);const N=_?C:h;return e("div",{className:"nc-MediaVideo absolute inset-0",ref:f,children:(()=>S("div",{children:[e(A,{url:s,muted:c,className:"absolute bg-black inset-0",playing:N,width:"100%",height:"100%",onStart:()=>{d(()=>!0)},onPause:()=>{d(()=>!1)},light:N?!1:(r==null?void 0:r.node.sourceUrl)||!0,playIcon:e("span",{className:"absolute inset-0 flex items-center justify-center ",children:e(P,{className:"hover:scale-105 transform cursor-pointer transition-transform ",postType:"post-format-video"})})}),e("a",{className:"absolute block inset-0 ",href:t}),e("div",{className:`absolute z-20 bottom-2 left-2 h-6 rounded-full bg-black bg-opacity-70 text-white flex items-center justify-center text-sm transform transition-transform ${N?"opacity-100":"opacity-0 hidden"} ${i?"pl-[6px] pr-2":"w-6 hover:scale-125"}`,onClick:()=>u(!c),children:c?S(z,{children:[e("i",{className:"las la-volume-off"}),i&&e("span",{className:"ml-1 inline-block text-[9px]",children:"Click here to unmute"})]}):e("i",{className:"las la-volume-up"})})]}))()})},O=({post:s})=>{var r;return S("div",{children:[(()=>s.ncmazAudioUrl.audioUrl?e(j,{className:"absolute bg-neutral-900 bg-opacity-30 flex items-center justify-center inset-0",post:s}):e("span",{className:"absolute inset-0 flex items-center justify-center ",children:e(P,{className:"hover:scale-105 transform cursor-pointer transition-transform ",postType:"post-format-audio"})}))(),e("a",{className:"block absolute inset-0",href:s.link,children:e(g,{containerClassName:"absolute inset-0",src:((r=s.featuredImage)==null?void 0:r.node.sourceUrl)||"."})})]})};function G(s){const{image1:o,image2:r,image3:t,image4:a,image5:f,image6:c,image7:u,image8:i,image9:d,image10:h}=s;return[(o==null?void 0:o.sourceUrl)||"",(r==null?void 0:r.sourceUrl)||"",(t==null?void 0:t.sourceUrl)||"",(a==null?void 0:a.sourceUrl)||"",(f==null?void 0:f.sourceUrl)||"",(c==null?void 0:c.sourceUrl)||"",(u==null?void 0:u.sourceUrl)||"",(i==null?void 0:i.sourceUrl)||"",(d==null?void 0:d.sourceUrl)||"",(h==null?void 0:h.sourceUrl)||""].filter(b=>!!b)}const J=({className:s="w-full h-full",post:o,isHover:r=!1})=>{var v,b;const{featuredImage:t,postFormats:a,ncmazVideoUrl:f,ncmazGalleryImgs:c,link:u}=o,i=(b=(v=a==null?void 0:a.edges[0])==null?void 0:v.node)==null?void 0:b.slug,d=()=>{const y=G(c);return y.length?S(n.exports.Fragment,{children:[e(g,{containerClassName:"absolute inset-0",src:"."}),e(V,{galleryImgs:y,postLink:u})]}):e(g,{containerClassName:"absolute inset-0",src:(t==null?void 0:t.node.sourceUrl)||"."})},h=()=>i==="post-format-gallery"?d():i==="post-format-video"?e(I,{featuredImage:t,isHover:r,videoUrl:f.videoUrl,postLink:u}):i==="post-format-audio"?e(O,{post:o}):e("a",{href:u,className:"absolute inset-0",children:e(g,{containerClassName:"absolute inset-0",src:(t==null?void 0:t.node.sourceUrl)||"."})});return e("div",{className:`nc-PostFeaturedMedia relative ${s}`,"data-nc-id":"PostFeaturedMedia",children:h()})};export{J as P,G as g};
