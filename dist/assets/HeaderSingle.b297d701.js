import{r as e}from"./vendor.49c01715.js";const t=()=>{const t=document.querySelector(".nc-SingleHeaderMenu"),o=document.querySelector(".nc-SingleHeaderMenu__progress-bar"),n=document.querySelector("#ncmaz-single-entry-content");if(!t)return null;const[r,s]=e.exports.useState(!1);e.exports.useEffect((()=>{if(r)return t.classList.remove("hidden"),void(t.style.display="block");t.style.display="none"}),[r]),e.exports.useEffect((()=>{setTimeout((()=>{window.addEventListener("scroll",c)}),200)}),[]);const c=()=>{l(),(document.body.scrollTop||document.documentElement.scrollTop)>200?!r&&s(!0):r&&s(!1)},l=()=>{if(!n)return;const e=n.offsetTop+n.offsetHeight;let t=(document.body.scrollTop||document.documentElement.scrollTop)/e*100;!o||t>140||(t=t>100?100:t,o.style.width=t+"%")};return null};export{t as default};