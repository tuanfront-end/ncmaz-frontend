import{i as ne,h as se,d as N,n as oe,o as ie,aL as ae,a as n,G as K,j as e,x as h,P as X,aM as de,r as p,aN as ue,aO as ce,aP as x,_ as J}from"./main.be12d964.js";import{L as Q}from"./LoadingVideo.1b2284ff.js";import{N as he}from"./NcImage.b533d3e4.js";import{P as fe}from"./PostCardLikeAction.c212dd00.js";import{a as me,Y as ke,R as pe}from"./index.f9467a8a.js";const ge=({isError:f,handleSeekMouseUp:o,handleSeekMouseDown:t,handleSeekChange:d,handleVolumeChange:D,handleSetPlaybackRate:m,handleSetMuted:w,handleClickBackwards10Sec:a,handleClickForwards15Sec:O})=>{var z;const k=ne(),[C,Y]=se.useState(!1),l=N(oe),i=N(ie),j=N(ae),{durationSeconds:b,loaded:E,muted:g,playbackRate:s,played:_,playedSeconds:M,volume:u}=j,B=c=>{let y=Math.floor(c/60),L=`${c-y*60}`;return Number(L)<10&&(L="0"+L),y+":"+L},V=()=>{if(l!=="loading"){if(l==="paused"||l==="ended")return k(h("loading"));if(l==="playing")return k(h("paused"));k(h("playing"))}},G=()=>{k(de())},S=()=>{var q;if(!i)return null;const{postId:c,featuredImage:y,title:L,link:r,ncPostMetaData:v}=i;return n("div",{className:"mr-2 flex items-center flex-grow lg:flex-shrink-0 basis-64 w-64 overflow-hidden z-0 lg:overflow-visible",children:[n("a",{href:r,className:"relative h-16 flex items-center space-x-3 pl-12 overflow-hidden",children:[e(he,{containerClassName:`absolute left-0 w-12 h-12 flex-shrink-0 transform transition-transform nc-animation-spin rounded-full overflow-hidden z-0 ${l==="playing"?"playing":""}`,src:y==null?void 0:y.node.sourceUrl,className:"object-cover w-full h-full rounded-full shadow-md"}),n("div",{className:"flex-grow overflow-hidden ",children:[e("h3",{className:"text-base truncate",children:L}),e("span",{className:"block text-xs text-neutral-500 dark:text-neutral-400 truncate",children:Math.floor((b-M)/60)?`${Math.floor((b-M)/60)} min left`:`${Math.floor((b-M)%60)} sec left`})]})]}),n("div",{className:"hidden xl:flex flex-shrink-0 px-6 space-x-2.5",children:[e(fe,{postId:c,favoriteButtonShortcode:v.favoriteButtonShortcode||""}),e(X,{href:r||"",image:(q=i.featuredImage)==null?void 0:q.node.sourceUrl})]})]})},U=()=>n("div",{className:"absolute w-full inset-x-0 bottom-full",children:[e("input",{className:"slider absolute z-10 opacity-0 inset-y-0 inset-x-1 h-full cursor-pointer",type:"range",min:0,max:.999999,step:"any",value:_,onMouseDown:t,onChange:d,onMouseUp:c=>{k(h("playing")),o(c)},onTouchStart:t,onTouchEnd:c=>{k(h("playing")),o(c)}}),e("div",{className:"absolute left-0 top-1/2 h-0.5 min-w-0 transform -translate-y-1/2 transition-all rounded-full bg-primary-500/30  will-change-contents",style:{width:E*100+"%"}}),e("div",{className:"absolute h-0.5 min-w-0 left-0 top-1/2 transform -translate-y-1/2 rounded-full bg-primary-500 will-change-contents",style:{width:`calc(${_*100+"%"} - 11px)`},children:e("span",{className:"absolute -right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-primary-500"})})]}),P=()=>n("div",{className:"flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-black/10 cursor-pointer ",onClick:V,children:[l==="loading"&&e(Q,{className:"flex-shrink-0 transform scale-50 origin-center ",childClassName:"bg-neutral-500 dark:bg-neutral-100"}),l==="playing"&&n("svg",{className:"w-10 h-10",fill:"currentColor",viewBox:"0 0 24 24",children:[e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M15.25 6.75V17.25"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M8.75 6.75V17.25"})]}),l!=="playing"&&l!=="loading"&&e("svg",{className:"w-10 h-10",fill:"currentColor",viewBox:"0 0 24 24",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M18.25 12L5.75 5.75V18.25L18.25 12Z"})})]}),F=()=>n("div",{className:"flex-shrink-0 flex lg:hidden items-center justify-center w-10 h-10 rounded-full text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-black/10 cursor-pointer ",onClick:V,children:[l==="loading"&&e(Q,{childClassName:"bg-neutral-500 dark:bg-neutral-100",className:"flex-shrink-0 transform scale-50 origin-center"}),l==="playing"&&n("svg",{className:"w-6 h-6 md:w-8 md:h-8",fill:"currentColor",viewBox:"0 0 24 24",children:[e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M15.25 6.75V17.25"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M8.75 6.75V17.25"})]}),l!=="playing"&&l!=="loading"&&e("svg",{className:"w-6 h-6 md:w-8 md:h-8",fill:"currentColor",viewBox:"0 0 24 24",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M18.25 12L5.75 5.75V18.25L18.25 12Z"})})]}),T=()=>e("button",{className:"w-12 h-12 rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-black/10",onClick:O,children:n("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",children:[e("path",{d:"M15.9601 10.8301H12.9001L12.1401 13.1201H14.4301C15.2701 13.1201 15.9601 13.8001 15.9601 14.6501C15.9601 15.4901 15.2801 16.1801 14.4301 16.1801H12.1401",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M9.54004 16.17V10.8301L8.04004 12.5001",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M13.98 4.46997L12 2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M19.0899 7.79999C20.1999 9.27999 20.8899 11.11 20.8899 13.11C20.8899 18.02 16.9099 22 11.9999 22C7.08988 22 3.10986 18.02 3.10986 13.11C3.10986 8.19999 7.08988 4.21997 11.9999 4.21997C12.6799 4.21997 13.3399 4.31002 13.9799 4.46002",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),R=()=>e("button",{className:"w-12 h-12 rounded-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-black/10",onClick:()=>a(),children:n("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",children:[e("path",{d:"M9.54004 15.92V10.5801L8.04004 12.2501",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M10.02 4.46997L12 2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M4.91 7.79999C3.8 9.27999 3.10999 11.11 3.10999 13.11C3.10999 18.02 7.09 22 12 22C16.91 22 20.89 18.02 20.89 13.11C20.89 8.19999 16.91 4.21997 12 4.21997C11.32 4.21997 10.66 4.31002 10.02 4.46002",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M14 10.5801C15.1 10.5801 16 11.4801 16 12.5801V13.9301C16 15.0301 15.1 15.9301 14 15.9301C12.9 15.9301 12 15.0301 12 13.9301V12.5801C12 11.4701 12.9 10.5801 14 10.5801Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),W=()=>e("div",{className:"w-12 flex justify-center items-center",children:e("button",{className:"rounded-lg text-xs leading-6 font-semibold px-2 ring-1 ring-inset ring-neutral-500 transition-all duration-500",onClick:()=>{if(s===1)return m(1.5);if(s===1.5)return m(2);if(s===2)return m(1)},children:`${s===1.5?1.5:s+".0"}x`})}),I=()=>n("div",{className:"flex flex-grow items-center text-neutral-500 dark:text-neutral-300 justify-evenly max-w-xs xl:max-w-md",children:[e("div",{className:"w-12"}),R(),P(),T(),W()]}),H=()=>n("div",{className:"hidden lg:flex items-center justify-end text-neutral-500 dark:text-neutral-300",children:[n("button",{onClick:()=>{if(!u){w(!1),D(.8);return}w(!g)},children:[!!u&&!g&&u>=.5&&n("svg",{className:"w-5 h-5 flex-shrink-0",viewBox:"0 0 24 24",fill:"none",children:[e("path",{d:"M2 10V14C2 16 3 17 5 17H6.43C6.8 17 7.17 17.11 7.49 17.3L10.41 19.13C12.93 20.71 15 19.56 15 16.59V7.41003C15 4.43003 12.93 3.29003 10.41 4.87003L7.49 6.70003C7.17 6.89003 6.8 7.00003 6.43 7.00003H5C3 7.00003 2 8.00003 2 10Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M18 8C19.78 10.37 19.78 13.63 18 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M19.83 5.5C22.72 9.35 22.72 14.65 19.83 18.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),!!u&&!g&&u<.5&&n("svg",{className:"w-5 h-5 flex-shrink-0",viewBox:"0 0 24 24",fill:"none",children:[e("path",{d:"M3.32996 10V14C3.32996 16 4.32996 17 6.32996 17H7.75996C8.12996 17 8.49996 17.11 8.81996 17.3L11.74 19.13C14.26 20.71 16.33 19.56 16.33 16.59V7.41003C16.33 4.43003 14.26 3.29003 11.74 4.87003L8.81996 6.70003C8.49996 6.89003 8.12996 7.00003 7.75996 7.00003H6.32996C4.32996 7.00003 3.32996 8.00003 3.32996 10Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M19.33 8C21.11 10.37 21.11 13.63 19.33 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(!u||g)&&n("svg",{className:"w-5 h-5 flex-shrink-0",viewBox:"0 0 24 24",fill:"none",children:[e("path",{d:"M15 8.37003V7.41003C15 4.43003 12.93 3.29003 10.41 4.87003L7.49 6.70003C7.17 6.89003 6.8 7.00003 6.43 7.00003H5C3 7.00003 2 8.00003 2 10V14C2 16 3 17 5 17H7",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M10.41 19.13C12.93 20.71 15 19.56 15 16.59V12.95",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M18.81 9.41992C19.71 11.5699 19.44 14.0799 18 15.9999",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M21.15 7.80005C22.62 11.29 22.18 15.37 19.83 18.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M22 2L2 22",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),n("div",{className:"ml-3.5 relative w-24 flex-shrink-0",children:[e("input",{className:"slider absolute z-10 opacity-0 inset-0 h-1 w-full cursor-pointer ",type:"range",min:0,max:.999999,step:"any",value:u,onChange:c=>{D(Number(c.currentTarget.value)||0),w(!1)}}),e("div",{className:"absolute left-0 top-1/2 h-0.5 min-w-0 w-full -translate-y-1/2 rounded-full bg-neutral-300 dark:bg-neutral-500"}),e("div",{className:`absolute h-0.5 min-w-0 left-0 top-1/2 -translate-y-1/2 rounded-full ${!u||g?"bg-neutral-400":"bg-primary-500"}`,style:{width:u*100+"%"},children:e("span",{className:`absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full ${!u||g?"bg-neutral-400":"bg-primary-500"}`})})]})]}),$=()=>e("button",{className:"flex-shrink-0 flex items-center justify-center rounded-full focus:outline-none focus:shadow-outline hover:bg-neutral-100 dark:hover:bg-black/10 w-10 h-10 lg:w-12 lg:h-12",onClick:G,children:n("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",children:[e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M17.25 6.75L6.75 17.25"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M6.75 6.75L17.25 17.25"})]})}),Z=()=>n("div",{className:"ml-5 mr-3 hidden lg:flex items-center justify-center flex-shrink-0 text-xs tracking-widest",children:[e("div",{className:"flex-shrink-0 truncate min-w-[40px] text-right",children:B(Math.floor(M))}),"/",e("div",{className:"flex-shrink-0 truncate min-w-[40px]",children:B(Math.floor(b))})]});return n(K,{className:"relative bg-white dark:bg-neutral-800 w-full flex flex-col px-2 sm:px-3 - nc-google-shadow",show:!!i&&!!i.ncmazAudioUrl.audioUrl&&!!l,enter:"transition-transform duration-150",enterFrom:"translate-y-full",enterTo:"translate-y-0",leave:"transition-transform duration-150",leaveFrom:"translate-y-0",leaveTo:"translate-y-full",children:[e("button",{className:"w-[26px] h-6 flex lg:hidden items-center justify-center absolute z-20 right-0 -top-3",onClick:()=>Y(!C),children:e("div",{className:"w-6 h-6 bg-white dark:bg-neutral-800 flex items-center justify-center  rounded-full - nc-google-shadow",children:e("svg",{className:`w-4 h-4 ${C?"rotate-180":""}`,viewBox:"0 0 24 24",fill:"none",children:e("path",{d:"M19.9201 15.0499L13.4001 8.52989C12.6301 7.75989 11.3701 7.75989 10.6001 8.52989L4.08008 15.0499",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})})})}),U(),n("div",{className:"h-20 w-full flex justify-between",children:[S(),e("div",{className:"hidden lg:flex flex-grow px-5 items-center justify-center",children:f?e("span",{className:"flex pl-2 text-xs lg:text-sm text-red-500",children:"This track not found or not supported."}):I()}),n("div",{className:"ml-2 flex-shrink-0 lg:basis-64 lg:flex-grow flex items-center justify-end",children:[H(),Z(),F(),$()]})]}),e(K,{className:"h-16 flex lg:hidden justify-center border-t border-neutral-300 dark:border-neutral-700 transition-all ",show:C,enter:"duration-150",enterFrom:"-mb-16",enterTo:"mb-0",leave:"duration-150",leaveFrom:"mb-0",leaveTo:"-mb-16",children:n("div",{className:"flex flex-grow items-center justify-evenly text-neutral-500 dark:text-neutral-300 max-w-xs sm:max-w-sm md:max-w-md ",children:[e("div",{className:"w-12 flex justify-center",children:i&&e(X,{panelMenusClass:"w-48 left-0 bottom-0 origin-bottom-left",href:i.link||"",image:(z=i.featuredImage)==null?void 0:z.node.sourceUrl})}),R(),P(),T(),W()]})})]})};var le={};Object.defineProperty(le,"__esModule",{value:!0});var ee=p.exports;function ye(f){var o=ee.useRef();return ee.useEffect(function(){o.current=f}),o.current}var ve=le.default=ye,xe=me.createReactPlayer,re=ke.default,Ce=xe([{key:"youtube",canPlay:re.canPlay,lazyPlayer:re}]);function te(f,o){if(f===o)return!0;if(f==null||o==null||f.length!==o.length)return!1;for(var t=0;t<f.length;++t)if(f[t]!==o[t])return!1;return!0}const A=window.frontendObject.musicPlayerMediaSource||["html5"],Se=({className:f=""})=>{const o=p.exports.useRef(null),t=N(ue),d=N(oe),D=N(ae),m=N(ce),w=ve(t),a=ne(),{durationSeconds:O,muted:k,playbackRate:C,played:Y,playedSeconds:l,volume:i}=D,[j,b]=p.exports.useState(!1),[E,g]=p.exports.useState(!1),[s,_]=p.exports.useState(!1);p.exports.useEffect(()=>{!m&&!!t&&!s&&a(h("paused"))},[m,t,d,s]),p.exports.useEffect(()=>{!w||t===w||g(!1)},[t,w]);const M=r=>{a(x({played:parseFloat(r.currentTarget.value)}))},u=r=>{b(!1),o.current&&o.current.seekTo(parseFloat(r.currentTarget.value))},B=()=>{b(!0)},V=()=>{var r;(r=o.current)==null||r.seekTo(l+15,"seconds")},G=()=>{var r;(r=o.current)==null||r.seekTo(l-10||0,"seconds")},S=()=>{const r="https://www.youtube.com/watch?v=KX1_jtVlBtU",v="https://chisnghiax.com/ncmaz_mp3/250-milliseconds-of-silence.mp3";return te(A,["html5"])?{html5:t||v,youtube:"",mediaSelected:"html5"}:te(A,["youtube"])?{html5:"",youtube:t||r,mediaSelected:"youtube"}:t?t.includes("https://www.youtube.com/")?{html5:v,youtube:t,mediaSelected:"youtube"}:{html5:t||v,youtube:r,mediaSelected:"html5"}:{html5:v,youtube:r,mediaSelected:"none"}},U=()=>t?d==="loading"||d==="playing":!1,P=()=>{!t||d==="paused"||a(h("paused"))},F=()=>{a(h("ended")),a(x({loaded:.9999,playedSeconds:O,played:.9999}))},T=r=>{var v;!t||(!s&&_(!0),!m&&!s?((v=o.current)==null||v.seekTo(Y),a(h("paused"))):d==="loading"&&a(h("playing")),a(x({durationSeconds:r.getDuration()})))},R=()=>{d!=="playing"&&a(h("playing"))},W=()=>{a(h("playing"))},I=r=>{a(x({durationSeconds:r}))},H=r=>{!!r.code&&r.code!==20&&(console.log(789,"MyPlayer-error:",{error:r}),g(!0))},$=r=>{d==="ended"||!t||(a(x({loaded:r.loaded,playedSeconds:r.playedSeconds})),!j&&a(x({played:r.played})))},Z=p.exports.useMemo(()=>{if(!A.includes("youtube"))return null;const r=S().mediaSelected==="youtube";return e(Ce,{url:S().youtube,controls:!1,style:{opacity:0,zIndex:-1111,visibility:"hidden"},ref:r?o:void 0,onPause:r?P:void 0,playbackRate:r?C:void 0,playing:r?U():void 0,volume:i,muted:k,playsinline:!0,onEnded:r?F:void 0,onReady:r?T:void 0,onStart:r?W:void 0,onPlay:r?R:void 0,onDuration:r?I:void 0,onError:r?H:void 0,onProgress:r?$:void 0})},[t,d,j,C,i,k,m,s]),z=p.exports.useMemo(()=>{if(!A.includes("html5")&&!A.includes("other"))return null;const r=S().mediaSelected==="html5";return e(pe,{url:S().html5,controls:!1,style:{opacity:0,zIndex:-1111,visibility:"hidden"},ref:r?o:void 0,onPause:r?P:void 0,playbackRate:r?C:void 0,playing:r?U():void 0,volume:i,muted:k,playsinline:!0,onEnded:r?F:void 0,onReady:r?T:void 0,onStart:r?W:void 0,onPlay:r?R:void 0,onDuration:r?I:void 0,onError:r?H:void 0,onProgress:r?$:void 0})},[t,d,j,C,i,k,m,s]),c=p.exports.useMemo(()=>e(ge,{isError:E,handleSetMuted:r=>a(x({muted:r})),handleSeekMouseUp:u,handleSeekMouseDown:B,handleSeekChange:M,handleVolumeChange:r=>a(x({volume:r})),handleSetPlaybackRate:r=>a(x({playbackRate:r})),handleClickBackwards10Sec:J.debounce(G,200),handleClickForwards15Sec:J.debounce(V,200)}),[E,l]);let y=!1;return!m&&!!t&&!s&&d==="playing"&&(y=!0),y?null:n("div",{className:`nc-MediaRunningContainer w-full ${f} ${!m&&!s?"opacity-0 -z-10":""}`,"data-nc-id":"MediaRunningContainer",children:[c,n("div",{className:"fixed top-0 left-0 w-1 h-1 -z-50 opacity-0 overflow-hidden",children:[Z,z]})]})};export{Se as default};