import{r as e}from"./vendor.061fbf51.js";function r(r,t,n={freezeOnceVisible:!0,rootMargin:"1000px"}){e.exports.useEffect((()=>{t<=6&&r()}),[]);const o=e.exports.useRef(null),s=function(r,{threshold:t=0,root:n=null,rootMargin:o="0%",freezeOnceVisible:s=!1}){const[i,c]=e.exports.useState(),u=(null==i?void 0:i.isIntersecting)&&s,f=([e])=>{c(e)};return e.exports.useEffect((()=>{const e=null==r?void 0:r.current;if(!window.IntersectionObserver||u||!e)return;const s=new IntersectionObserver(f,{threshold:t,root:n,rootMargin:o});return s.observe(e),()=>s.disconnect()}),[r,t,n,o,u]),i}(o,n),i=t>6&&!!(null==s?void 0:s.isIntersecting);return e.exports.useEffect((()=>{i&&r()}),[i]),{ref:o,isVisible:i}}export{r as u};
