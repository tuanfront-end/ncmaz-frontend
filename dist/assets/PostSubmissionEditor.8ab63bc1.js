import{h as n,a4 as d,U as c,a5 as f,J as p,r as a,j as e,X as i,N as h}from"./main.24165b1f.js";import{C as m}from"./CircleLoading.af5220ab.js";const E=n.lazy(()=>d(()=>import("./CreateNewPostEditor.7977c6b5.js").then(r=>r.c),["assets/CreateNewPostEditor.7977c6b5.js","assets/CreateNewPostEditor.85b7f587.css","assets/main.24165b1f.js","assets/main.fc3239b0.css","assets/ButtonPrimary.e69047dd.js","assets/CircleLoading.af5220ab.js","assets/NcModal.68e8d06c.js","assets/ButtonClose.090f6f33.js","assets/queryGraphql.eb63c63c.js","assets/NcImage.6e2a5f3b.js","assets/index.1bab7e24.js","assets/Textarea.f3d85580.js","assets/CheckIcon.d7ae1f4f.js"])),y=n.lazy(()=>d(()=>import("./UpdatePostEditor.4d2d0594.js"),["assets/UpdatePostEditor.4d2d0594.js","assets/main.24165b1f.js","assets/main.fc3239b0.css","assets/ButtonPrimary.e69047dd.js","assets/CreateNewPostEditor.7977c6b5.js","assets/CreateNewPostEditor.85b7f587.css","assets/CircleLoading.af5220ab.js","assets/NcModal.68e8d06c.js","assets/ButtonClose.090f6f33.js","assets/queryGraphql.eb63c63c.js","assets/NcImage.6e2a5f3b.js","assets/index.1bab7e24.js","assets/Textarea.f3d85580.js","assets/CheckIcon.d7ae1f4f.js","assets/ButtonPrimaryDanger.2f1fc666.js"])),L=({action:r="create",postDatabaseID:t})=>{const l=c`
    ${f}
  `,[_,{error:o,data:s,loading:u}]=p(l,{notifyOnNetworkStatusChange:!0});return a.exports.useEffect(()=>{r==="edit"&&!!t&&_({variables:{postId:Number(t)}})},[]),r==="edit"&&!!t?o?e(i,{type:"error",children:e("div",{dangerouslySetInnerHTML:{__html:`${o.message}
          <a
            class="underline ml-2"
            href="javascript:window.location.href=window.location.href"
          >
            Reload
          </a>`}})}):u?e(m,{}):s?e(a.exports.Suspense,{fallback:e("div",{}),children:e(y,{postNode:s.post})}):e(i,{children:h.somethingWentWrong}):r==="create"?e(a.exports.Suspense,{fallback:e("div",{}),children:e(E,{})}):null};export{L as default};
