var ke=Object.defineProperty,De=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var te=(e,r,t)=>r in e?ke(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,j=(e,r)=>{for(var t in r||(r={}))re.call(r,t)&&te(e,t,r[t]);if(F)for(var t of F(r))ne.call(r,t)&&te(e,t,r[t]);return e},Y=(e,r)=>De(e,Te(r));var H=(e,r)=>{var t={};for(var n in e)re.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&F)for(var n of F(e))r.indexOf(n)<0&&ne.call(e,n)&&(t[n]=e[n]);return t};import{r as l,S as D,E as oe,I,J as le,K as _,L as Se,O as B,Q as de,T as N,U as pe,i as m,V as b,X as w,Y as Ae,Z as fe,_ as Oe,$ as C,a0 as $,a1 as ae,a2 as Fe,a3 as M,a4 as ie,a5 as Ie,a6 as Me,a7 as Le,a as Be,t as Ne,j as se}from"./main.952450c4.js";var T=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(T||{});function je(e,r=30,{initialFocus:t,containers:n}={}){let o=l.exports.useRef(null),a=l.exports.useRef(null),i=Se(),u=Boolean(r&16),f=Boolean(r&2),s=B(e);return l.exports.useEffect(()=>{!u||o.current||(o.current=s==null?void 0:s.activeElement)},[u,s]),l.exports.useEffect(()=>{if(u)return()=>{D(o.current),o.current=null}},[u]),l.exports.useEffect(()=>{if(!f)return;let g=e.current;if(!g)return;let c=s==null?void 0:s.activeElement;if(t!=null&&t.current){if((t==null?void 0:t.current)===c){a.current=c;return}}else if(g.contains(c)){a.current=c;return}t!=null&&t.current?D(t.current):oe(g,I.First)===le.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.current=s==null?void 0:s.activeElement},[e,t,f,s]),_(s==null?void 0:s.defaultView,"keydown",g=>{!(r&4)||!e.current||g.key===de.Tab&&(g.preventDefault(),oe(e.current,(g.shiftKey?I.Previous:I.Next)|I.WrapAround)===le.Success&&(a.current=s==null?void 0:s.activeElement))}),_(s==null?void 0:s.defaultView,"focus",g=>{if(!(r&8))return;let c=new Set(n==null?void 0:n.current);if(c.add(e),!c.size)return;let A=a.current;if(!A||!i.current)return;let h=g.target;h&&h instanceof HTMLElement?Ye(c,h)?(a.current=h,D(h)):(g.preventDefault(),g.stopPropagation(),D(A)):D(a.current)},!0),o}function Ye(e,r){var t;for(let n of e)if((t=n.current)!=null&&t.contains(r))return!0;return!1}let R=new Set,E=new Map;function ue(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function ce(e){let r=E.get(e);!r||(r["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert)}function He(e,r=!0){N(()=>{if(!r||!e.current)return;let t=e.current,n=pe(t);if(n){R.add(t);for(let o of E.keys())o.contains(t)&&(ce(o),E.delete(o));return n.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement){for(let a of R)if(o.contains(a))return;R.size===1&&(E.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),ue(o))}}),()=>{if(R.delete(t),R.size>0)n.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement&&!E.has(o)){for(let a of R)if(o.contains(a))return;E.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),ue(o)}});else for(let o of E.keys())ce(o),E.delete(o)}}},[r])}let ge=l.exports.createContext(!1);function _e(){return l.exports.useContext(ge)}function z(e){return m.createElement(ge.Provider,{value:e.force},e.children)}function ze(e){let r=_e(),t=l.exports.useContext(ve),n=B(e),[o,a]=l.exports.useState(()=>{if(!r&&t!==null||typeof window=="undefined")return null;let i=n==null?void 0:n.getElementById("headlessui-portal-root");if(i)return i;if(n===null)return null;let u=n.createElement("div");return u.setAttribute("id","headlessui-portal-root"),n.body.appendChild(u)});return l.exports.useEffect(()=>{o!==null&&(n!=null&&n.body.contains(o)||n==null||n.body.appendChild(o))},[o,n]),l.exports.useEffect(()=>{r||t!==null&&a(t.current)},[t,a,r]),o}let Ve=l.exports.Fragment,Ge=b(function(e,r){let t=e,n=l.exports.useRef(null),o=w(Ae(s=>{n.current=s}),r),a=B(n),i=ze(n),[u]=l.exports.useState(()=>{var s;return typeof window=="undefined"?null:(s=a==null?void 0:a.createElement("div"))!=null?s:null}),f=fe();return N(()=>{if(!!i&&!!u)return i.appendChild(u),()=>{var s;!i||!u||(i.removeChild(u),i.childNodes.length<=0&&((s=i.parentElement)==null||s.removeChild(i)))}},[i,u]),f?!i||!u?null:Oe.exports.createPortal(C({ourProps:{ref:o},theirProps:t,defaultTag:Ve,name:"Portal"}),u):null}),Ue=l.exports.Fragment,ve=l.exports.createContext(null),We=b(function(e,r){let a=e,{target:t}=a,n=H(a,["target"]),o={ref:w(r)};return m.createElement(ve.Provider,{value:t},C({ourProps:o,theirProps:n,defaultTag:Ue,name:"Popover.Group"}))}),V=Object.assign(Ge,{Group:We}),me=l.exports.createContext(null);function he(){let e=l.exports.useContext(me);if(e===null){let r=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(r,he),r}return e}function Xe(){let[e,r]=l.exports.useState([]);return[e.length>0?e.join(" "):void 0,l.exports.useMemo(()=>function(t){let n=l.exports.useCallback(a=>(r(i=>[...i,a]),()=>r(i=>{let u=i.slice(),f=u.indexOf(a);return f!==-1&&u.splice(f,1),u})),[]),o=l.exports.useMemo(()=>({register:n,slot:t.slot,name:t.name,props:t.props}),[n,t.slot,t.name,t.props]);return m.createElement(me.Provider,{value:o},t.children)},[r])]}let qe="p",Ke=b(function(e,r){let t=he(),n=`headlessui-description-${$()}`,o=w(r);N(()=>t.register(n),[n,t.register]);let a=e,i=Y(j({ref:o},t.props),{id:n});return C({ourProps:i,theirProps:a,slot:t.slot||{},defaultTag:qe,name:t.name||"Description"})}),U=l.exports.createContext(()=>{});U.displayName="StackContext";var G=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(G||{});function Je(){return l.exports.useContext(U)}function Qe({children:e,onUpdate:r,type:t,element:n}){let o=Je(),a=l.exports.useCallback((...i)=>{r==null||r(...i),o(...i)},[o,r]);return N(()=>(a(0,t,n),()=>a(1,t,n)),[a,t,n]),m.createElement(U.Provider,{value:a},e)}var Ze=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ze||{}),et=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(et||{});let tt={[0](e,r){return e.titleId===r.id?e:Y(j({},e),{titleId:r.id})}},L=l.exports.createContext(null);L.displayName="DialogContext";function S(e){let r=l.exports.useContext(L);if(r===null){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,S),t}return r}function rt(e,r){return M(r.type,tt,e,r)}let nt="div",ot=ae.RenderStrategy|ae.Static,lt=b(function(e,r){let ee=e,{open:t,onClose:n,initialFocus:o,__demoMode:a=!1}=ee,i=H(ee,["open","onClose","initialFocus","__demoMode"]),[u,f]=l.exports.useState(0),s=Fe();t===void 0&&s!==null&&(t=M(s,{[ie.Open]:!0,[ie.Closed]:!1}));let g=l.exports.useRef(new Set),c=l.exports.useRef(null),A=w(c,r),h=B(c),W=e.hasOwnProperty("open")||s!==null,X=e.hasOwnProperty("onClose");if(!W&&!X)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!W)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!X)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof t!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${t}`);if(typeof n!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${n}`);let v=t?0:1,[y,q]=l.exports.useReducer(rt,{titleId:null,descriptionId:null,panelRef:l.exports.createRef()}),P=l.exports.useCallback(()=>n(!1),[n]),K=l.exports.useCallback(p=>q({type:0,id:p}),[q]),J=fe()?a?!1:v===0:!1,O=u>1,Q=l.exports.useContext(L)!==null,xe=je(c,J?M(O?"parent":"leaf",{parent:T.RestoreFocus,leaf:T.All&~T.FocusLock}):T.None,{initialFocus:o,containers:g});He(c,O?J:!1),Ie(()=>{var p,x;return[...Array.from((p=h==null?void 0:h.querySelectorAll("body > *"))!=null?p:[]).filter(d=>!(!(d instanceof HTMLElement)||d.contains(xe.current)||y.panelRef.current&&d.contains(y.panelRef.current))),(x=y.panelRef.current)!=null?x:c.current]},()=>{v===0&&(O||P())},Me.IgnoreScrollbars),_(h==null?void 0:h.defaultView,"keydown",p=>{p.key===de.Escape&&v===0&&(O||(p.preventDefault(),p.stopPropagation(),P()))}),l.exports.useEffect(()=>{var p;if(v!==0||Q)return;let x=pe(c);if(!x)return;let d=x.documentElement,k=(p=x.defaultView)!=null?p:window,Pe=d.style.overflow,Re=d.style.paddingRight,$e=k.innerWidth-d.clientWidth;return d.style.overflow="hidden",d.style.paddingRight=`${$e}px`,()=>{d.style.overflow=Pe,d.style.paddingRight=Re}},[v,Q]),l.exports.useEffect(()=>{if(v!==0||!c.current)return;let p=new IntersectionObserver(x=>{for(let d of x)d.boundingClientRect.x===0&&d.boundingClientRect.y===0&&d.boundingClientRect.width===0&&d.boundingClientRect.height===0&&P()});return p.observe(c.current),()=>p.disconnect()},[v,c,P]);let[Ee,be]=Xe(),we=`headlessui-dialog-${$()}`,Ce=l.exports.useMemo(()=>[{dialogState:v,close:P,setTitleId:K},y],[v,y,P,K]),Z=l.exports.useMemo(()=>({open:v===0}),[v]),ye={ref:A,id:we,role:"dialog","aria-modal":v===0?!0:void 0,"aria-labelledby":y.titleId,"aria-describedby":Ee,onClick(p){p.stopPropagation()}};return m.createElement(Qe,{type:"Dialog",element:c,onUpdate:l.exports.useCallback((p,x,d)=>{x==="Dialog"&&M(p,{[G.Add](){g.current.add(d),f(k=>k+1)},[G.Remove](){g.current.add(d),f(k=>k-1)}})},[])},m.createElement(z,{force:!0},m.createElement(V,null,m.createElement(L.Provider,{value:Ce},m.createElement(V.Group,{target:c},m.createElement(z,{force:!1},m.createElement(be,{slot:Z,name:"Dialog.Description"},C({ourProps:ye,theirProps:i,slot:Z,defaultTag:nt,features:ot,visible:v===0,name:"Dialog"}))))))))}),at="div",it=b(function(e,r){let[{dialogState:t,close:n}]=S("Dialog.Overlay"),o=w(r),a=`headlessui-dialog-overlay-${$()}`,i=l.exports.useCallback(f=>{if(f.target===f.currentTarget){if(Le(f.currentTarget))return f.preventDefault();f.preventDefault(),f.stopPropagation(),n()}},[n]),u=l.exports.useMemo(()=>({open:t===0}),[t]);return C({ourProps:{ref:o,id:a,"aria-hidden":!0,onClick:i},theirProps:e,slot:u,defaultTag:at,name:"Dialog.Overlay"})}),st="div",ut=b(function(e,r){let[{dialogState:t},n]=S("Dialog.Backdrop"),o=w(r),a=`headlessui-dialog-backdrop-${$()}`;l.exports.useEffect(()=>{if(n.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[n.panelRef]);let i=l.exports.useMemo(()=>({open:t===0}),[t]);return m.createElement(z,{force:!0},m.createElement(V,null,C({ourProps:{ref:o,id:a,"aria-hidden":!0},theirProps:e,slot:i,defaultTag:st,name:"Dialog.Backdrop"})))}),ct="div",dt=b(function(e,r){let[{dialogState:t},n]=S("Dialog.Panel"),o=w(r,n.panelRef),a=`headlessui-dialog-panel-${$()}`,i=l.exports.useMemo(()=>({open:t===0}),[t]);return C({ourProps:{ref:o,id:a},theirProps:e,slot:i,defaultTag:ct,name:"Dialog.Panel"})}),pt="h2",ft=b(function(e,r){let[{dialogState:t,setTitleId:n}]=S("Dialog.Title"),o=`headlessui-dialog-title-${$()}`,a=w(r);l.exports.useEffect(()=>(n(o),()=>n(null)),[o,n]);let i=l.exports.useMemo(()=>({open:t===0}),[t]);return C({ourProps:{ref:a,id:o},theirProps:e,slot:i,defaultTag:pt,name:"Dialog.Title"})}),Et=Object.assign(lt,{Backdrop:ut,Panel:dt,Overlay:it,Title:ft,Description:Ke});function gt(e,r){return l.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r},e),l.exports.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}))}const vt=l.exports.forwardRef(gt);var mt=vt;const bt=({className:e="",onClick:r=()=>{},iconSize:t="w-5 h-5",title:n="Close"})=>Be("button",{className:`w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 ${e} `+Ne(),onClick:r,title:n,children:[se("span",{className:"sr-only",children:"Close"}),se(mt,{className:t})]});export{bt as B,Xe as M,Ke as O,Et as f};
