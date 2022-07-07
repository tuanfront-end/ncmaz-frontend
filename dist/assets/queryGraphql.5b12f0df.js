var J=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var B=(e,a,r)=>a in e?J(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,m=(e,a)=>{for(var r in a||(a={}))W.call(a,r)&&B(e,r,a[r]);if(L)for(var r of L(a))q.call(a,r)&&B(e,r,a[r]);return e},y=(e,a)=>Z(e,ee(a));var z=(e,a)=>{var r={};for(var t in e)W.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&L)for(var t of L(e))a.indexOf(t)<0&&q.call(e,t)&&(r[t]=e[t]);return r};import{T as E,r as l,at as te,V as R,a0 as C,X as D,a1 as A,aA as k,Q as $,aB as v,a8 as re,ar as ae,a2 as H,a3 as ne,a5 as F,U as oe,a4 as _,aC as j,a6 as se,aD as ie,aE as le,h as G,aF as ue,as as de,aG as ce,au as pe,aH as U,aI as fe}from"./main.6c48ddcb.js";function V(e,a){let[r,t]=l.exports.useState(e),n=te(e);return E(()=>t(n.current),[n,t,...a]),r}let $e="div",ge=R(function(e,a){return C({ourProps:{ref:a,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",display:"none"}},theirProps:e,slot:{},defaultTag:$e,name:"VisuallyHidden"})});function Y(e={},a=null,r=[]){for(let[t,n]of Object.entries(e))X(r,K(a,t),n);return r}function K(e,a){return e?e+"["+a+"]":a}function X(e,a,r){if(Array.isArray(r))for(let[t,n]of r.entries())X(e,K(a,t.toString()),n);else r instanceof Date?e.push([a,r.toISOString()]):typeof r=="boolean"?e.push([a,r?"1":"0"]):typeof r=="string"?e.push([a,r]):typeof r=="number"?e.push([a,`${r}`]):r==null?e.push([a,""]):Y(r,a,e)}function Qe(e){var a;let r=(a=e==null?void 0:e.form)!=null?a:e.closest("form");if(r){for(let t of r.elements)if(t.tagName==="INPUT"&&t.type==="submit"||t.tagName==="BUTTON"&&t.type==="submit"||t.nodeName==="INPUT"&&t.type==="image"){t.click();return}}}var Ie=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ie||{}),me=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(me||{}),be=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(be||{}),he=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.SetDisabled=2]="SetDisabled",e[e.SetOrientation=3]="SetOrientation",e[e.GoToOption=4]="GoToOption",e[e.Search=5]="Search",e[e.ClearSearch=6]="ClearSearch",e[e.RegisterOption=7]="RegisterOption",e[e.UnregisterOption=8]="UnregisterOption",e))(he||{});function N(e,a=r=>r){let r=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,t=pe(a(e.options.slice()),o=>o.dataRef.current.domRef.current),n=r?t.indexOf(r):null;return n===-1&&(n=null),{options:t,activeOptionIndex:n}}let xe={[1](e){return e.disabled||e.listboxState===1?e:y(m({},e),{activeOptionIndex:null,listboxState:1})},[0](e){if(e.disabled||e.listboxState===0)return e;let a=e.activeOptionIndex,{value:r,mode:t}=e.propsRef.current,n=e.options.findIndex(o=>{let i=o.dataRef.current.value;return _(t,{[1]:()=>r.includes(i),[0]:()=>r===i})});return n!==-1&&(a=n),y(m({},e),{listboxState:0,activeOptionIndex:a})},[2](e,a){return e.disabled===a.disabled?e:y(m({},e),{disabled:a.disabled})},[3](e,a){return e.orientation===a.orientation?e:y(m({},e),{orientation:a.orientation})},[4](e,a){var r;if(e.disabled||e.listboxState===1)return e;let t=N(e),n=ce(a,{resolveItems:()=>t.options,resolveActiveIndex:()=>t.activeOptionIndex,resolveId:o=>o.id,resolveDisabled:o=>o.dataRef.current.disabled});return y(m(m({},e),t),{searchQuery:"",activeOptionIndex:n,activationTrigger:(r=a.trigger)!=null?r:1})},[5]:(e,a)=>{if(e.disabled||e.listboxState===1)return e;let r=e.searchQuery!==""?0:1,t=e.searchQuery+a.value.toLowerCase(),n=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find(i=>{var u;return!i.dataRef.current.disabled&&((u=i.dataRef.current.textValue)==null?void 0:u.startsWith(t))}),o=n?e.options.indexOf(n):-1;return o===-1||o===e.activeOptionIndex?y(m({},e),{searchQuery:t}):y(m({},e),{searchQuery:t,activeOptionIndex:o,activationTrigger:1})},[6](e){return e.disabled||e.listboxState===1||e.searchQuery===""?e:y(m({},e),{searchQuery:""})},[7]:(e,a)=>{let r={id:a.id,dataRef:a.dataRef},t=N(e,n=>[...n,r]);if(e.activeOptionIndex===null){let{value:n,mode:o}=e.propsRef.current,i=a.dataRef.current.value;_(o,{[1]:()=>n.includes(i),[0]:()=>n===i})&&(t.activeOptionIndex=t.options.indexOf(r))}return m(m({},e),t)},[8]:(e,a)=>{let r=N(e,t=>{let n=t.findIndex(o=>o.id===a.id);return n!==-1&&t.splice(n,1),t});return y(m(m({},e),r),{activationTrigger:1})}},Q=l.exports.createContext(null);Q.displayName="ListboxContext";function P(e){let a=l.exports.useContext(Q);if(a===null){let r=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,P),r}return a}function ye(e,a){return _(a.type,xe,e,a)}let ve=l.exports.Fragment,Ee=R(function(e,a){let w=e,{value:r,name:t,onChange:n,disabled:o=!1,horizontal:i=!1,multiple:u=!1}=w,g=z(w,["value","name","onChange","disabled","horizontal","multiple"]);const h=i?"horizontal":"vertical";let x=D(a),S=l.exports.useReducer(ye,{listboxState:1,propsRef:{current:{value:r,onChange:n,mode:u?1:0}},labelRef:l.exports.createRef(),buttonRef:l.exports.createRef(),optionsRef:l.exports.createRef(),disabled:o,orientation:h,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1}),[{listboxState:p,propsRef:b,optionsRef:O,buttonRef:f},s]=S;b.current.value=r,b.current.mode=u?1:0,E(()=>{b.current.onChange=I=>_(b.current.mode,{[0](){return n(I)},[1](){let c=b.current.value.slice(),M=c.indexOf(I);return M===-1?c.push(I):c.splice(M,1),n(c)}})},[n,b]),E(()=>s({type:2,disabled:o}),[o]),E(()=>s({type:3,orientation:h}),[h]),se([f,O],(I,c)=>{var M;p===0&&(s({type:1}),ie(c,le.Loose)||(I.preventDefault(),(M=f.current)==null||M.focus()))});let d=l.exports.useMemo(()=>({open:p===0,disabled:o}),[p,o]),T={ref:x};return G.createElement(Q.Provider,{value:S},G.createElement(ue,{value:_(p,{[0]:F.Open,[1]:F.Closed})},t!=null&&r!=null&&Y({[t]:r}).map(([I,c])=>G.createElement(ge,m({},de({key:I,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:I,value:c})))),C({ourProps:T,theirProps:g,slot:d,defaultTag:ve,name:"Listbox"})))}),Se="button",Me=R(function(e,a){var r;let[t,n]=P("Listbox.Button"),o=D(t.buttonRef,a),i=`headlessui-listbox-button-${A()}`,u=k(),g=l.exports.useCallback(f=>{switch(f.key){case $.Space:case $.Enter:case $.ArrowDown:f.preventDefault(),n({type:0}),u.nextFrame(()=>{t.propsRef.current.value||n({type:4,focus:v.First})});break;case $.ArrowUp:f.preventDefault(),n({type:0}),u.nextFrame(()=>{t.propsRef.current.value||n({type:4,focus:v.Last})});break}},[n,t,u]),h=l.exports.useCallback(f=>{switch(f.key){case $.Space:f.preventDefault();break}},[]),x=l.exports.useCallback(f=>{if(re(f.currentTarget))return f.preventDefault();t.listboxState===0?(n({type:1}),u.nextFrame(()=>{var s;return(s=t.buttonRef.current)==null?void 0:s.focus({preventScroll:!0})})):(f.preventDefault(),n({type:0}))},[n,u,t]),S=V(()=>{if(t.labelRef.current)return[t.labelRef.current.id,i].join(" ")},[t.labelRef.current,i]),p=l.exports.useMemo(()=>({open:t.listboxState===0,disabled:t.disabled}),[t]),b=e,O={ref:o,id:i,type:ae(e,t.buttonRef),"aria-haspopup":!0,"aria-controls":(r=t.optionsRef.current)==null?void 0:r.id,"aria-expanded":t.disabled?void 0:t.listboxState===0,"aria-labelledby":S,disabled:t.disabled,onKeyDown:g,onKeyUp:h,onClick:x};return C({ourProps:O,theirProps:b,slot:p,defaultTag:Se,name:"Listbox.Button"})}),_e="label",Oe=R(function(e,a){let[r]=P("Listbox.Label"),t=`headlessui-listbox-label-${A()}`,n=D(r.labelRef,a),o=l.exports.useCallback(()=>{var u;return(u=r.buttonRef.current)==null?void 0:u.focus({preventScroll:!0})},[r.buttonRef]),i=l.exports.useMemo(()=>({open:r.listboxState===0,disabled:r.disabled}),[r]);return C({ourProps:{ref:n,id:t,onClick:o},theirProps:e,slot:i,defaultTag:_e,name:"Listbox.Label"})}),Te="ul",Re=H.RenderStrategy|H.Static,Ce=R(function(e,a){var r;let[t,n]=P("Listbox.Options"),o=D(t.optionsRef,a),i=`headlessui-listbox-options-${A()}`,u=k(),g=k(),h=ne(),x=(()=>h!==null?h===F.Open:t.listboxState===0)();l.exports.useEffect(()=>{var s;let d=t.optionsRef.current;!d||t.listboxState===0&&d!==((s=oe(d))==null?void 0:s.activeElement)&&d.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let S=l.exports.useCallback(s=>{switch(g.dispose(),s.key){case $.Space:if(t.searchQuery!=="")return s.preventDefault(),s.stopPropagation(),n({type:5,value:s.key});case $.Enter:if(s.preventDefault(),s.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:d}=t.options[t.activeOptionIndex];t.propsRef.current.onChange(d.current.value)}t.propsRef.current.mode===0&&(n({type:1}),j().nextFrame(()=>{var d;return(d=t.buttonRef.current)==null?void 0:d.focus({preventScroll:!0})}));break;case _(t.orientation,{vertical:$.ArrowDown,horizontal:$.ArrowRight}):return s.preventDefault(),s.stopPropagation(),n({type:4,focus:v.Next});case _(t.orientation,{vertical:$.ArrowUp,horizontal:$.ArrowLeft}):return s.preventDefault(),s.stopPropagation(),n({type:4,focus:v.Previous});case $.Home:case $.PageUp:return s.preventDefault(),s.stopPropagation(),n({type:4,focus:v.First});case $.End:case $.PageDown:return s.preventDefault(),s.stopPropagation(),n({type:4,focus:v.Last});case $.Escape:return s.preventDefault(),s.stopPropagation(),n({type:1}),u.nextFrame(()=>{var d;return(d=t.buttonRef.current)==null?void 0:d.focus({preventScroll:!0})});case $.Tab:s.preventDefault(),s.stopPropagation();break;default:s.key.length===1&&(n({type:5,value:s.key}),g.setTimeout(()=>n({type:6}),350));break}},[u,n,g,t]),p=V(()=>{var s,d,T;return(T=(s=t.labelRef.current)==null?void 0:s.id)!=null?T:(d=t.buttonRef.current)==null?void 0:d.id},[t.labelRef.current,t.buttonRef.current]),b=l.exports.useMemo(()=>({open:t.listboxState===0}),[t]),O=e,f={"aria-activedescendant":t.activeOptionIndex===null||(r=t.options[t.activeOptionIndex])==null?void 0:r.id,"aria-multiselectable":t.propsRef.current.mode===1?!0:void 0,"aria-labelledby":p,"aria-orientation":t.orientation,id:i,onKeyDown:S,role:"listbox",tabIndex:0,ref:o};return C({ourProps:f,theirProps:O,slot:b,defaultTag:Te,features:Re,visible:x,name:"Listbox.Options"})}),we="li",De=R(function(e,a){let w=e,{disabled:r=!1,value:t}=w,n=z(w,["disabled","value"]),[o,i]=P("Listbox.Option"),u=`headlessui-listbox-option-${A()}`,g=o.activeOptionIndex!==null?o.options[o.activeOptionIndex].id===u:!1,h=_(o.propsRef.current.mode,{[1]:()=>o.propsRef.current.value.includes(t),[0]:()=>o.propsRef.current.value===t}),x=l.exports.useRef(null),S=D(a,x);E(()=>{if(o.listboxState!==0||!g||o.activationTrigger===0)return;let I=j();return I.requestAnimationFrame(()=>{var c,M;(M=(c=x.current)==null?void 0:c.scrollIntoView)==null||M.call(c,{block:"nearest"})}),I.dispose},[x,g,o.listboxState,o.activationTrigger,o.activeOptionIndex]);let p=l.exports.useRef({disabled:r,value:t,domRef:x});E(()=>{p.current.disabled=r},[p,r]),E(()=>{p.current.value=t},[p,t]),E(()=>{var I,c;p.current.textValue=(c=(I=x.current)==null?void 0:I.textContent)==null?void 0:c.toLowerCase()},[p,x]);let b=l.exports.useCallback(()=>o.propsRef.current.onChange(t),[o.propsRef,t]);E(()=>(i({type:7,id:u,dataRef:p}),()=>i({type:8,id:u})),[p,u]);let O=l.exports.useCallback(I=>{if(r)return I.preventDefault();b(),o.propsRef.current.mode===0&&(i({type:1}),j().nextFrame(()=>{var c;return(c=o.buttonRef.current)==null?void 0:c.focus({preventScroll:!0})}))},[i,o.buttonRef,r,b]),f=l.exports.useCallback(()=>{if(r)return i({type:4,focus:v.Nothing});i({type:4,focus:v.Specific,id:u})},[r,u,i]),s=l.exports.useCallback(()=>{r||g||i({type:4,focus:v.Specific,id:u,trigger:0})},[r,g,u,i]),d=l.exports.useCallback(()=>{r||!g||i({type:4,focus:v.Nothing})},[r,g,i]),T=l.exports.useMemo(()=>({active:g,selected:h,disabled:r}),[g,h,r]);return C({ourProps:{id:u,ref:S,role:"option",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-selected":h===!0?!0:void 0,disabled:void 0,onClick:O,onFocus:f,onPointerMove:s,onMouseMove:s,onPointerLeave:d,onMouseLeave:d},theirProps:n,slot:T,defaultTag:we,name:"Listbox.Option"})}),Be=Object.assign(Ee,{Button:Me,Label:Oe,Options:Ce,Option:De});function Pe(e,a){return l.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a},e),l.exports.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}const Le=l.exports.forwardRef(Pe);var We=Le;let qe={maxTagsLengSubmit:5,maxCategoriesLengSubmit:5,authorPageCoverImgDefault:"https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",archivePageCoverImgDefault:"https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",searchPageCoverImgDefault:"https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},Ue=`
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
`,Ae=`
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
`,ze=`query GET_LIST_CATEGORIES(
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
`,Ge=`query GET_LIST_CATEGORIES_NO_PARENT(
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
`,Ne=`query GET_LIST_TAGS(
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
`,Ae=`
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
`,ze=`query GET_LIST_CATEGORIES(
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
`,Ge=`query GET_LIST_CATEGORIES_NO_PARENT(
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
`,Ne=`query GET_LIST_TAGS(
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
`);const He=`query GET_USERS_QUERY_FILTER(
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
		${fe}
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
      total
    }
	}
}`;export{We as C,qe as G,Ae as P,He as U,Ge as a,Ne as b,ze as c,Ue as d,Be as e,ge as h,Qe as p};
