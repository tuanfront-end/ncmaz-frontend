import{r as c}from"./main.952450c4.js";import{_ as d}from"./lodash.63c4e595.js";const y=()=>{const e=document.querySelector(".nc-SingleHeaderMenu"),r=document.querySelector(".nc-SingleHeaderMenu__progress-bar"),o=document.querySelector("#ncmaz-single-entry-content");if(!e)return null;const l=t=>{if(t){e.style.zIndex="1",e.style.opacity="1",e.style.visibility="visible";return}e.style.zIndex="-50",e.style.opacity="0",e.style.visibility="hidden"};c.exports.useEffect(()=>{setTimeout(()=>{window.addEventListener("scroll",function(){window.requestAnimationFrame(i)}),window.addEventListener("scroll",d.debounce(s,100))},100)},[]);const s=()=>{let t=document.body.scrollTop||document.documentElement.scrollTop;l(t>400)},i=()=>{if(!o)return;const t=o.offsetTop+o.offsetHeight;let n=(document.body.scrollTop||document.documentElement.scrollTop)/t*100;!r||n>140||(n=n>100?100:n,r.style.width=n+"%")};return null};export{y as default};
