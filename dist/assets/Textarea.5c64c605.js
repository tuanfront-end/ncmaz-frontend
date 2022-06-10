var A=Object.defineProperty,G=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var U=(e,r,t)=>r in e?A(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,R=(e,r)=>{for(var t in r||(r={}))S.call(r,t)&&U(e,t,r[t]);if(C)for(var t of C(r))D.call(r,t)&&U(e,t,r[t]);return e},T=(e,r)=>G(e,$(r));var W=(e,r)=>{var t={};for(var n in e)S.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&C)for(var n of C(e))r.indexOf(n)<0&&D.call(e,n)&&(t[n]=e[n]);return t};import{k as M,r as c,q as H,A as P,n as _,j as a,b as k,N as y,aq as V,R as B}from"./main.8abeeeff.js";import{b as F,v as O,D as q}from"./useQuery.fe519250.js";function Z(e,r){var t=F(r==null?void 0:r.client);O(e,q.Mutation);var n=c.exports.useState({called:!1,loading:!1,client:t}),s=n[0],d=n[1],l=c.exports.useRef({result:s,mutationId:0,isMounted:!0,client:t,mutation:e,options:r});Object.assign(l.current,{client:t,options:r,mutation:e});var w=c.exports.useCallback(function(u){u===void 0&&(u={});var g=l.current,v=g.client,j=g.options,E=g.mutation,p=M(M({},j),{mutation:E});!l.current.result.loading&&!p.ignoreResults&&d(l.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:v});var h=++l.current.mutationId,x=H(p,u);return v.mutate(x).then(function(o){var f,m,i=o.data,b=o.errors,N=b&&b.length>0?new P({graphQLErrors:b}):void 0;if(h===l.current.mutationId&&!x.ignoreResults){var I={called:!0,loading:!1,data:i,error:N,client:v};l.current.isMounted&&!_(l.current.result,I)&&d(l.current.result=I)}return(f=p.onCompleted)===null||f===void 0||f.call(p,o.data),(m=u.onCompleted)===null||m===void 0||m.call(u,o.data),o}).catch(function(o){var f,m;if(h===l.current.mutationId&&l.current.isMounted){var i={loading:!1,error:o,data:void 0,called:!0,client:v};_(l.current.result,i)||d(l.current.result=i)}if(p.onError||x.onError)return(f=p.onError)===null||f===void 0||f.call(p,o),(m=u.onError)===null||m===void 0||m.call(u,o),{data:void 0,errors:o};throw o})},[]),L=c.exports.useCallback(function(){d({called:!1,loading:!1,client:t})},[]);return c.exports.useEffect(function(){return function(){l.current.isMounted=!1}},[]),[w,M({reset:L},s)]}const J=({className:e="text-primary-500",childClassName:r="w-8 h-8"})=>a("div",{className:`CircleLoading inline-flex items-center justify-center ${e}`,children:k("svg",{className:`animate-spin ${r}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[a("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3"}),a("path",{className:"opacity-90",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),K=({className:e="block",children:r})=>a("span",{className:`nc-Label ${e} text-neutral-800 font-medium text-sm dark:text-neutral-300`,"data-nc-id":"Label",children:r}),Y=({className:e="flex-1",contentClassName:r="px-6 pt-5 pb-6 ",onChangeImage:t=()=>{},defaultImage:n={sourceUrl:"",id:""}})=>{const[s,d]=c.exports.useState(n),[l,w]=c.exports.useState(!1),[L,u]=c.exports.useState(""),g=c.exports.useId()+"_fileUpload",v=c.exports.useDeferredValue(s.id);c.exports.useEffect(()=>{d(n)},[n.id]),c.exports.useEffect(()=>{t(s)},[v]);const j=async o=>{d({sourceUrl:"",id:"",altText:""})};function E(o){return/(\.jpg|\.jpeg|\.png|\.gif|\.ico|\.webp|\.JPG|\.JPEG|\.PNG|\.GIF)$/i.exec(o)}const p=o=>{if(u(""),o.target.files&&o.target.files[0]){w(!0);const f=o.target.files[0];if(!E(f.name)){u(`${y["File type is not allowed"]}. ${y["Only image files are permitted"]}.`),w(!1);return}const m=new FormData;m.append("file",f),jQuery.ajax({url:window.frontendObject.restVarsEndpoint,method:"POST",processData:!1,contentType:!1,beforeSend:function(i){i.setRequestHeader("X-WP-Nonce",window.frontendObject.restVarsNonce)},data:m}).done(function(i){d({sourceUrl:i.source_url,id:i.id,altText:i.alt_text})}).fail(function(i){var N;const b=((N=i.responseJSON)==null?void 0:N.message)||y.somethingWentWrong;u(b)}).always(function(){w(!1)})}},h=l,x=L;return k("div",{className:e,children:[a("label",{htmlFor:g,className:`block group ${h?"cursor-not-allowed animate-pulse":"cursor-pointer"}`,children:k("div",{className:`relative mt-1 flex justify-center border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-xl ${r}`,children:[!!s.sourceUrl&&!h&&a("div",{className:"opacity-0 group-hover:opacity-100 absolute right-2.5 top-2.5 z-10 p-1.5 bg-neutral-900 dark:bg-neutral-700 text-white rounded-md cursor-pointer \r transition-opacity duration-300 ",title:"Delete image",onClick:o=>{o.preventDefault(),j(String(s.id))},children:k("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",children:[a("path",{d:"M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a("path",{d:"M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a("path",{d:"M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a("path",{d:"M10.33 16.5H13.66",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a("path",{d:"M9.5 12.5H14.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),k("div",{className:"flex-1 space-y-1 text-center",children:[s.sourceUrl&&a("div",{className:"w-full max-w-md mx-auto",children:a("div",{className:"w-full aspect-w-16 aspect-h-8",children:a("img",{src:s.sourceUrl,className:"rounded-lg object-cover shadow-lg",alt:""})})}),!s.sourceUrl&&a("svg",{className:"mx-auto h-12 w-12 text-neutral-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:a("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),a("div",{className:"flex justify-center text-sm text-neutral-6000 dark:text-neutral-300",children:k("label",{className:"relative flex-shrink-0 cursor-pointer  rounded-md font-medium text-primary-6000 dark:text-primary-400 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500",children:[h?a(J,{className:"ml-3 text-blue-600 ",childClassName:"w-5 h-5"}):a("span",{children:s.sourceUrl?y["Click to change"]:y["Upload a file"]}),a("input",{disabled:h,id:g,name:"fileUpload",type:"file",className:"sr-only",onChange:p})]})}),a("p",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:"PNG, JPG, GIF, WEBP, SVG ..."})]})]})}),x&&a(V,{containerClassName:"text-sm mt-4",type:"error",children:x})]})},ee=B.forwardRef((s,n)=>{var d=s,{className:e="",children:r}=d,t=W(d,["className","children"]);return a("textarea",T(R({ref:n,className:`block w-full text-sm rounded-xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 ${e}`,rows:4},t),{children:r}))});export{J as C,Y as I,K as L,ee as T,Z as u};
