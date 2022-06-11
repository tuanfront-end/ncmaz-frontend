var X=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var W=(e,a,r)=>a in e?X(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,b=(e,a)=>{for(var r in a||(a={}))B.call(a,r)&&W(e,r,a[r]);if(L)for(var r of L(a))q.call(a,r)&&W(e,r,a[r]);return e},y=(e,a)=>Z(e,ee(a));var A=(e,a)=>{var r={};for(var t in e)B.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&L)for(var t of L(e))a.indexOf(t)<0&&q.call(e,t)&&(r[t]=e[t]);return r};import{a3 as E,r as l,at as te,a5 as T,aa as C,a6 as D,ab as z,az as k,a2 as $,aA as v,ai as re,ar as ae,ac as H,ad as ne,af as F,a4 as oe,ae as _,aB as j,ag as ie,aC as se,aD as le,R as N,aE as ue,as as de,aF as ce,au as fe,aG as U,aH as pe}from"./main.9a4c9a70.js";function V(e,a){let[r,t]=l.exports.useState(e),n=te(e);return E(()=>t(n.current),[n,t,...a]),r}let $e="div",Ie=T(function(e,a){return C({ourProps:{ref:a,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",display:"none"}},theirProps:e,slot:{},defaultTag:$e,name:"VisuallyHidden"})});function Y(e={},a=null,r=[]){for(let[t,n]of Object.entries(e))J(r,K(a,t),n);return r}function K(e,a){return e?e+"["+a+"]":a}function J(e,a,r){if(Array.isArray(r))for(let[t,n]of r.entries())J(e,K(a,t.toString()),n);else r instanceof Date?e.push([a,r.toISOString()]):typeof r=="boolean"?e.push([a,r?"1":"0"]):typeof r=="string"?e.push([a,r]):typeof r=="number"?e.push([a,`${r}`]):r==null?e.push([a,""]):Y(r,a,e)}function Qe(e){var a;let r=(a=e==null?void 0:e.form)!=null?a:e.closest("form");if(r){for(let t of r.elements)if(t.tagName==="INPUT"&&t.type==="submit"||t.tagName==="BUTTON"&&t.type==="submit"||t.nodeName==="INPUT"&&t.type==="image"){t.click();return}}}var ge=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ge||{}),be=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(be||{}),me=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(me||{}),xe=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.SetDisabled=2]="SetDisabled",e[e.SetOrientation=3]="SetOrientation",e[e.GoToOption=4]="GoToOption",e[e.Search=5]="Search",e[e.ClearSearch=6]="ClearSearch",e[e.RegisterOption=7]="RegisterOption",e[e.UnregisterOption=8]="UnregisterOption",e))(xe||{});function G(e,a=r=>r){let r=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,t=fe(a(e.options.slice()),o=>o.dataRef.current.domRef.current),n=r?t.indexOf(r):null;return n===-1&&(n=null),{options:t,activeOptionIndex:n}}let he={[1](e){return e.disabled||e.listboxState===1?e:y(b({},e),{activeOptionIndex:null,listboxState:1})},[0](e){if(e.disabled||e.listboxState===0)return e;let a=e.activeOptionIndex,{value:r,mode:t}=e.propsRef.current,n=e.options.findIndex(o=>{let s=o.dataRef.current.value;return _(t,{[1]:()=>r.includes(s),[0]:()=>r===s})});return n!==-1&&(a=n),y(b({},e),{listboxState:0,activeOptionIndex:a})},[2](e,a){return e.disabled===a.disabled?e:y(b({},e),{disabled:a.disabled})},[3](e,a){return e.orientation===a.orientation?e:y(b({},e),{orientation:a.orientation})},[4](e,a){var r;if(e.disabled||e.listboxState===1)return e;let t=G(e),n=ce(a,{resolveItems:()=>t.options,resolveActiveIndex:()=>t.activeOptionIndex,resolveId:o=>o.id,resolveDisabled:o=>o.dataRef.current.disabled});return y(b(b({},e),t),{searchQuery:"",activeOptionIndex:n,activationTrigger:(r=a.trigger)!=null?r:1})},[5]:(e,a)=>{if(e.disabled||e.listboxState===1)return e;let r=e.searchQuery!==""?0:1,t=e.searchQuery+a.value.toLowerCase(),n=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find(s=>{var u;return!s.dataRef.current.disabled&&((u=s.dataRef.current.textValue)==null?void 0:u.startsWith(t))}),o=n?e.options.indexOf(n):-1;return o===-1||o===e.activeOptionIndex?y(b({},e),{searchQuery:t}):y(b({},e),{searchQuery:t,activeOptionIndex:o,activationTrigger:1})},[6](e){return e.disabled||e.listboxState===1||e.searchQuery===""?e:y(b({},e),{searchQuery:""})},[7]:(e,a)=>{let r={id:a.id,dataRef:a.dataRef},t=G(e,n=>[...n,r]);if(e.activeOptionIndex===null){let{value:n,mode:o}=e.propsRef.current,s=a.dataRef.current.value;_(o,{[1]:()=>n.includes(s),[0]:()=>n===s})&&(t.activeOptionIndex=t.options.indexOf(r))}return b(b({},e),t)},[8]:(e,a)=>{let r=G(e,t=>{let n=t.findIndex(o=>o.id===a.id);return n!==-1&&t.splice(n,1),t});return y(b(b({},e),r),{activationTrigger:1})}},Q=l.exports.createContext(null);Q.displayName="ListboxContext";function P(e){let a=l.exports.useContext(Q);if(a===null){let r=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,P),r}return a}function ye(e,a){return _(a.type,he,e,a)}let ve=l.exports.Fragment,Ee=T(function(e,a){let w=e,{value:r,name:t,onChange:n,disabled:o=!1,horizontal:s=!1,multiple:u=!1}=w,I=A(w,["value","name","onChange","disabled","horizontal","multiple"]);const x=s?"horizontal":"vertical";let h=D(a),S=l.exports.useReducer(ye,{listboxState:1,propsRef:{current:{value:r,onChange:n,mode:u?1:0}},labelRef:l.exports.createRef(),buttonRef:l.exports.createRef(),optionsRef:l.exports.createRef(),disabled:o,orientation:x,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1}),[{listboxState:f,propsRef:m,optionsRef:O,buttonRef:p},i]=S;m.current.value=r,m.current.mode=u?1:0,E(()=>{m.current.onChange=g=>_(m.current.mode,{[0](){return n(g)},[1](){let c=m.current.value.slice(),M=c.indexOf(g);return M===-1?c.push(g):c.splice(M,1),n(c)}})},[n,m]),E(()=>i({type:2,disabled:o}),[o]),E(()=>i({type:3,orientation:x}),[x]),ie([p,O],(g,c)=>{var M;f===0&&(i({type:1}),se(c,le.Loose)||(g.preventDefault(),(M=p.current)==null||M.focus()))});let d=l.exports.useMemo(()=>({open:f===0,disabled:o}),[f,o]),R={ref:h};return N.createElement(Q.Provider,{value:S},N.createElement(ue,{value:_(f,{[0]:F.Open,[1]:F.Closed})},t!=null&&r!=null&&Y({[t]:r}).map(([g,c])=>N.createElement(Ie,b({},de({key:g,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:g,value:c})))),C({ourProps:R,theirProps:I,slot:d,defaultTag:ve,name:"Listbox"})))}),Se="button",Me=T(function(e,a){var r;let[t,n]=P("Listbox.Button"),o=D(t.buttonRef,a),s=`headlessui-listbox-button-${z()}`,u=k(),I=l.exports.useCallback(p=>{switch(p.key){case $.Space:case $.Enter:case $.ArrowDown:p.preventDefault(),n({type:0}),u.nextFrame(()=>{t.propsRef.current.value||n({type:4,focus:v.First})});break;case $.ArrowUp:p.preventDefault(),n({type:0}),u.nextFrame(()=>{t.propsRef.current.value||n({type:4,focus:v.Last})});break}},[n,t,u]),x=l.exports.useCallback(p=>{switch(p.key){case $.Space:p.preventDefault();break}},[]),h=l.exports.useCallback(p=>{if(re(p.currentTarget))return p.preventDefault();t.listboxState===0?(n({type:1}),u.nextFrame(()=>{var i;return(i=t.buttonRef.current)==null?void 0:i.focus({preventScroll:!0})})):(p.preventDefault(),n({type:0}))},[n,u,t]),S=V(()=>{if(t.labelRef.current)return[t.labelRef.current.id,s].join(" ")},[t.labelRef.current,s]),f=l.exports.useMemo(()=>({open:t.listboxState===0,disabled:t.disabled}),[t]),m=e,O={ref:o,id:s,type:ae(e,t.buttonRef),"aria-haspopup":!0,"aria-controls":(r=t.optionsRef.current)==null?void 0:r.id,"aria-expanded":t.disabled?void 0:t.listboxState===0,"aria-labelledby":S,disabled:t.disabled,onKeyDown:I,onKeyUp:x,onClick:h};return C({ourProps:O,theirProps:m,slot:f,defaultTag:Se,name:"Listbox.Button"})}),_e="label",Oe=T(function(e,a){let[r]=P("Listbox.Label"),t=`headlessui-listbox-label-${z()}`,n=D(r.labelRef,a),o=l.exports.useCallback(()=>{var u;return(u=r.buttonRef.current)==null?void 0:u.focus({preventScroll:!0})},[r.buttonRef]),s=l.exports.useMemo(()=>({open:r.listboxState===0,disabled:r.disabled}),[r]);return C({ourProps:{ref:n,id:t,onClick:o},theirProps:e,slot:s,defaultTag:_e,name:"Listbox.Label"})}),Re="ul",Te=H.RenderStrategy|H.Static,Ce=T(function(e,a){var r;let[t,n]=P("Listbox.Options"),o=D(t.optionsRef,a),s=`headlessui-listbox-options-${z()}`,u=k(),I=k(),x=ne(),h=(()=>x!==null?x===F.Open:t.listboxState===0)();l.exports.useEffect(()=>{var i;let d=t.optionsRef.current;!d||t.listboxState===0&&d!==((i=oe(d))==null?void 0:i.activeElement)&&d.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let S=l.exports.useCallback(i=>{switch(I.dispose(),i.key){case $.Space:if(t.searchQuery!=="")return i.preventDefault(),i.stopPropagation(),n({type:5,value:i.key});case $.Enter:if(i.preventDefault(),i.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:d}=t.options[t.activeOptionIndex];t.propsRef.current.onChange(d.current.value)}t.propsRef.current.mode===0&&(n({type:1}),j().nextFrame(()=>{var d;return(d=t.buttonRef.current)==null?void 0:d.focus({preventScroll:!0})}));break;case _(t.orientation,{vertical:$.ArrowDown,horizontal:$.ArrowRight}):return i.preventDefault(),i.stopPropagation(),n({type:4,focus:v.Next});case _(t.orientation,{vertical:$.ArrowUp,horizontal:$.ArrowLeft}):return i.preventDefault(),i.stopPropagation(),n({type:4,focus:v.Previous});case $.Home:case $.PageUp:return i.preventDefault(),i.stopPropagation(),n({type:4,focus:v.First});case $.End:case $.PageDown:return i.preventDefault(),i.stopPropagation(),n({type:4,focus:v.Last});case $.Escape:return i.preventDefault(),i.stopPropagation(),n({type:1}),u.nextFrame(()=>{var d;return(d=t.buttonRef.current)==null?void 0:d.focus({preventScroll:!0})});case $.Tab:i.preventDefault(),i.stopPropagation();break;default:i.key.length===1&&(n({type:5,value:i.key}),I.setTimeout(()=>n({type:6}),350));break}},[u,n,I,t]),f=V(()=>{var i,d,R;return(R=(i=t.labelRef.current)==null?void 0:i.id)!=null?R:(d=t.buttonRef.current)==null?void 0:d.id},[t.labelRef.current,t.buttonRef.current]),m=l.exports.useMemo(()=>({open:t.listboxState===0}),[t]),O=e,p={"aria-activedescendant":t.activeOptionIndex===null||(r=t.options[t.activeOptionIndex])==null?void 0:r.id,"aria-multiselectable":t.propsRef.current.mode===1?!0:void 0,"aria-labelledby":f,"aria-orientation":t.orientation,id:s,onKeyDown:S,role:"listbox",tabIndex:0,ref:o};return C({ourProps:p,theirProps:O,slot:m,defaultTag:Re,features:Te,visible:h,name:"Listbox.Options"})}),we="li",De=T(function(e,a){let w=e,{disabled:r=!1,value:t}=w,n=A(w,["disabled","value"]),[o,s]=P("Listbox.Option"),u=`headlessui-listbox-option-${z()}`,I=o.activeOptionIndex!==null?o.options[o.activeOptionIndex].id===u:!1,x=_(o.propsRef.current.mode,{[1]:()=>o.propsRef.current.value.includes(t),[0]:()=>o.propsRef.current.value===t}),h=l.exports.useRef(null),S=D(a,h);E(()=>{if(o.listboxState!==0||!I||o.activationTrigger===0)return;let g=j();return g.requestAnimationFrame(()=>{var c,M;(M=(c=h.current)==null?void 0:c.scrollIntoView)==null||M.call(c,{block:"nearest"})}),g.dispose},[h,I,o.listboxState,o.activationTrigger,o.activeOptionIndex]);let f=l.exports.useRef({disabled:r,value:t,domRef:h});E(()=>{f.current.disabled=r},[f,r]),E(()=>{f.current.value=t},[f,t]),E(()=>{var g,c;f.current.textValue=(c=(g=h.current)==null?void 0:g.textContent)==null?void 0:c.toLowerCase()},[f,h]);let m=l.exports.useCallback(()=>o.propsRef.current.onChange(t),[o.propsRef,t]);E(()=>(s({type:7,id:u,dataRef:f}),()=>s({type:8,id:u})),[f,u]);let O=l.exports.useCallback(g=>{if(r)return g.preventDefault();m(),o.propsRef.current.mode===0&&(s({type:1}),j().nextFrame(()=>{var c;return(c=o.buttonRef.current)==null?void 0:c.focus({preventScroll:!0})}))},[s,o.buttonRef,r,m]),p=l.exports.useCallback(()=>{if(r)return s({type:4,focus:v.Nothing});s({type:4,focus:v.Specific,id:u})},[r,u,s]),i=l.exports.useCallback(()=>{r||I||s({type:4,focus:v.Specific,id:u,trigger:0})},[r,I,u,s]),d=l.exports.useCallback(()=>{r||!I||s({type:4,focus:v.Nothing})},[r,I,s]),R=l.exports.useMemo(()=>({active:I,selected:x,disabled:r}),[I,x,r]);return C({ourProps:{id:u,ref:S,role:"option",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-selected":x===!0?!0:void 0,disabled:void 0,onClick:O,onFocus:p,onPointerMove:i,onMouseMove:i,onPointerLeave:d,onMouseLeave:d},theirProps:n,slot:R,defaultTag:we,name:"Listbox.Option"})}),We=Object.assign(Ee,{Button:Me,Label:Oe,Options:Ce,Option:De});function Pe(e,a){return l.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a},e),l.exports.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}const Le=l.exports.forwardRef(Pe);var Be=Le;let Ue=`
  query MyQueryPostsOnArchivePageNoFilter(
    $last: Int = null,
    $first: Int = 10,
    $before: String = null,
    $notIn: [ID] = null,
    $after: String = null,
    $search: String = null
    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL
    $featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
  ) {
    posts(
      where: {
        search: $search
        notIn: $notIn,
      },
      last: $last,
      first: $first,
      before: $before,
      after: $after
    ) {
     ${U}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
        total
      }
    }
  }
`,ze=`
  query MyQueryPostsOnArchivePage(
    $status: PostStatusEnum = null
    $field: PostObjectsConnectionOrderbyEnum = AUTHOR,
    $order: OrderEnum = ASC,
    $in: [ID] = null,
    $categoryIn: [ID] = [],
    $tagIn: [ID] = [],
    $authorIn: [ID] = [],
    $last: Int = null,
    $first: Int = 10,
    $before: String = null,
    $after: String = null,
    $notIn: [ID] = null,
    $year: Int = null,
    $month: Int = null,
    $day: Int = null,
    $search: String = null
    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL
    $featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
  ) {
    posts(
      where: {
        status: $status
        in: $in
        orderby: { field: $field, order: $order },
        categoryIn: $categoryIn,
        tagIn: $tagIn,
        authorIn: $authorIn,
        notIn: $notIn,
        dateQuery: {year: $year, month: $month, day: $day},
        search: $search
      },
      last: $last,
      first: $first,
      before: $before,
      after: $after
    ) {
     ${U}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
        total
      }
    }
  }
`,Ae=`query GET_LIST_CATEGORIES(
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $orderby: TermObjectsConnectionOrderbyEnum = NAME,
  $parent: Int = null,
  $search: String = null,
  $exclude: [ID] = "",
  $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
  ) {
  categories(
    after: $after,
    before: $before,
    first: $first,
    last: $last,
    where: {parent: $parent, orderby: $orderby, order: DESC, search: $search, exclude: $exclude }
    ) {
    edges {
      node {
        id
        categoryId
        count
        databaseId
        description
        name
        link
        termTaxonomyId
        parentId
        parentDatabaseId
        ncTaxonomyMeta {
          color
          featuredImage {
            sourceUrl(size: $ncTaxonomyMeta_featuredImage_size)
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasPreviousPage
      hasNextPage
      startCursor
      total
    }
  }
}
`,Ne=`query GET_LIST_CATEGORIES_NO_PARENT(
  $order: OrderEnum = DESC
  $hideEmpty: Boolean = false,
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $orderby: TermObjectsConnectionOrderbyEnum = NAME,
  $search: String = null,
  $exclude: [ID] = "",
  $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
  ) {
  categories(
    after: $after,
    before: $before,
    first: $first,
    last: $last,
    where: { 
      orderby: $orderby 
      order: $order
      search: $search
      exclude: $exclude 
      hideEmpty: $hideEmpty
    }
    ) {
    edges {
      node {
        id
        categoryId
        count
        databaseId
        description
        name
        link
        termTaxonomyId
        parentId
        parentDatabaseId
        ncTaxonomyMeta {
          color
          featuredImage {
            sourceUrl(size: $ncTaxonomyMeta_featuredImage_size)
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasPreviousPage
      hasNextPage
      startCursor
      total
    }
  }
}
`,Ge=`query GET_LIST_TAGS(
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $search: String = null,
  $exclude: [ID] = "",
  $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
  ) {
  tags(
    after: $after,
    before: $before,
    first: $first,
    last: $last,
    where: { search: $search, exclude: $exclude }
    ) {
    edges {
      node {
        id
        count
        databaseId
        description
        link
        name
        slug
        tagId
        termTaxonomyId
        ncTaxonomyMeta {
          color
          featuredImage {
            sourceUrl(size: $ncTaxonomyMeta_featuredImage_size)
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
      total
    }
  }
}
`,ke=!!window.frontendObject.pll_current_language&&!!window.frontendObject.pll_themeoption_actived;ke&&(Ue=`
  query MyQueryPostsOnArchivePageNoFilter(
    $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language},
    $last: Int = null,
    $first: Int = 10,
    $before: String = null,
    $notIn: [ID] = null,
    $after: String = null,
    $search: String = null
    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL
    $featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
  ) {
    posts(
      where: {
        language: $language,
        notIn: $notIn,
        search: $search
      },
      last: $last,
      first: $first,
      before: $before,
      after: $after
    ) {
     ${U}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
        total
      }
    }
  }
`,ze=`
  query MyQueryPostsOnArchivePage(
    $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language},
    $field: PostObjectsConnectionOrderbyEnum = AUTHOR,
    $order: OrderEnum = ASC,
    $in: [ID] = null,
    $categoryIn: [ID] = [],
    $tagIn: [ID] = [],
    $authorIn: [ID] = [],
    $last: Int = null,
    $first: Int = 10,
    $before: String = null,
    $after: String = null,
    $notIn: [ID] = null,
    $year: Int = null,
    $month: Int = null,
    $day: Int = null,
    $search: String = null
    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL
    $featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
  ) {
    posts(
      where: {
        language: $language,
        in: $in,
        orderby: { field: $field, order: $order },
        categoryIn: $categoryIn,
        tagIn: $tagIn,
        authorIn: $authorIn,
        notIn: $notIn,
        dateQuery: {year: $year, month: $month, day: $day},
        search: $search
      },
      last: $last,
      first: $first,
      before: $before,
      after: $after
    ) {
     ${U}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
        total
      }
    }
  }
`,Ae=`query GET_LIST_CATEGORIES(
  $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language},
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $orderby: TermObjectsConnectionOrderbyEnum = NAME,
  $parent: Int = null,
  $search: String = null,
  $exclude: [ID] = "",
  $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
  ) {
  categories(
    after: $after,
    before: $before,
    first: $first,
    last: $last,
    where: {
      language: $language,
      parent: $parent, orderby: $orderby, order: DESC, search: $search, exclude: $exclude 
    }
    ) {
    edges {
      node {
        id
        categoryId
        count
        databaseId
        description
        name
        link
        termTaxonomyId
        parentId
        parentDatabaseId
        ncTaxonomyMeta {
          color
          featuredImage {
            sourceUrl(size: $ncTaxonomyMeta_featuredImage_size)
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasPreviousPage
      hasNextPage
      startCursor
      total
    }
  }
}
`,Ne=`query GET_LIST_CATEGORIES_NO_PARENT(
  $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language},
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $orderby: TermObjectsConnectionOrderbyEnum = NAME,
  $search: String = null,
  $exclude: [ID] = "",
  $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
  ) {
  categories(
    after: $after,
    before: $before,
    first: $first,
    last: $last,
    where: { 
      language: $language,
      orderby: $orderby, order: DESC, search: $search, exclude: $exclude 
    }
    ) {
    edges {
      node {
        id
        categoryId
        count
        databaseId
        description
        name
        link
        termTaxonomyId
        parentId
        parentDatabaseId
        ncTaxonomyMeta {
          color
          featuredImage {
            sourceUrl(size: $ncTaxonomyMeta_featuredImage_size)
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasPreviousPage
      hasNextPage
      startCursor
      total
    }
  }
}
`,Ge=`query GET_LIST_TAGS(
  $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language}
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $search: String = null,
  $exclude: [ID] = "",
  $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
  ) {
  tags(
    after: $after,
    before: $before,
    first: $first,
    last: $last,
    where: { 
      language: $language,
      search: $search, 
      exclude: $exclude
    }
    ) {
    edges {
      node {
        id
        count
        databaseId
        description
        link
        name
        slug
        tagId
        termTaxonomyId
        ncTaxonomyMeta {
          color
          featuredImage {
            sourceUrl(size: $ncTaxonomyMeta_featuredImage_size)
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
      total
    }
  }
}
`);const qe=`query GET_USERS_QUERY_FILTER(
	$after: String = "",
	$before: String = "",
	$first: Int = 10,
	$last: Int = null
	$field: UsersConnectionOrderbyEnum = DISPLAY_NAME,
	$order: OrderEnum = ASC,
	$roleIn: [UserRoleEnum] = [],
  $search: String = null,
  $exclude: [Int] = null,
  $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL,
  $author_ncUserMeta_backgroundImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
) {
	users(
		where: {
      orderby: { field: $field, order: $order },
      roleIn: $roleIn,
      search: $search,
      exclude: $exclude
    }
		last: $last
		first: $first
		before: $before
		after: $after
	) {
		${pe}
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
      total
    }
	}
}`;export{Be as C,Ne as G,ze as P,qe as U,Ge as a,Ae as b,Ue as c,We as e,Ie as h,Qe as p};
