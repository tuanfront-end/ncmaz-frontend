import{r as i,j as o}from"./main.24165b1f.js";let e={};const f=({favoriteButtonShortcode:u,className:a="relative",onClick:l=()=>{},postId:t})=>{const r=i.exports.useRef(null);let n=null;i.exports.useEffect(()=>()=>{n&&clearTimeout(n)},[]);const c=()=>{!r.current||!jQuery||(l&&l(),jQuery(document).one("ajaxStop",function(){n=setTimeout(()=>{var s;e={...e,[t]:((s=r.current)==null?void 0:s.innerHTML)||""}},200)}))};return!e[t]&&!u?null:o("div",{ref:r,className:`ncmaz-button-like-post ${a}`,onClick:c,dangerouslySetInnerHTML:{__html:e[t]||u}})};export{f as P};
