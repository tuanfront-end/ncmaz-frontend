import{r as e}from"./vendor.dc527a72.js";const t=()=>{const t=document.querySelector(".nc-SingleHeaderMenu"),o=document.querySelector(".nc-SingleHeaderMenu__progress-bar"),n=document.querySelector("#ncmaz-single-entry-content");if(!t)return null;const[r,s]=e.exports.useState(!1);e.exports.useEffect((()=>{if(r)return t.classList.remove("hidden"),void(t.style.display="block");t.style.display="none"}),[r]),e.exports.useEffect((()=>{setTimeout((()=>{window.addEventListener("scroll",l)}),200)}),[]);const l=()=>{c();let e=document.body.scrollTop||document.documentElement.scrollTop;s(e>200)},c=()=>{if(!n)return;const e=n.offsetTop+n.offsetHeight;let t=(document.body.scrollTop||document.documentElement.scrollTop)/e*100;!o||t>140||(t=t>100?100:t,o.style.width=t+"%")};return null};export{t as default};
