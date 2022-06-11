import{r as F,W as J,N as t,M as D,R as n,b as a,j as e,ap as d,aq as N}from"./main.9a4c9a70.js";import{u as ee,L as i,I as Z,T as ae,C as re}from"./Textarea.b918888d.js";import{B as C}from"./ButtonPrimary.575d3118.js";import{a as K}from"./useQuery.242ac0b5.js";import{u as te}from"./useLazyQuery.5ac1e84c.js";import"./Button.30a3d829.js";const le=`mutation MUTAION_UPDATE_USER(
  $description: String = null,
  $websiteUrl: String = null, 
  $ncmazYoutubeUrl: String = null, 
  $ncmazWebsiteUrl: String = null, 
  $nicename: String = null, 
  $nickname: String = null, 
  $password: String = null,
   $ncmazVimeoUrl: String = null, 
  $ncmazTwitterUrl: String = null, 
  $ncmazTwitchUrl: String = null, 
  $ncmazPinterestUrl: String = null,
   $ncmazMediumUrl: String = null, 
  $ncmazLinkedinUrl: String = null, 
  $ncmazInstagramUrl: String = null, 
  $ncmazGithubUrl: String = null, 
  $ncmazFeaturedImage: Int = null, 
  $ncmazFacebookUrl: String = null, 
  $ncmazBuymeacoffeUrl: String = null, 
  $ncmazBio: String = null, 
  $ncmazBackgroundImage: Int = null, 
  $lastName: String = null, 
  $id: ID = "", 
  $firstName: String = null, 
  $email: String = null, 
  $displayName: String = null
  ) {
    updateUser(
      input: {
        id: $id, 
        displayName: $displayName, 
        email: $email, 
        firstName: $firstName, 
        lastName: $lastName, 
        password: $password, 
        ncmazBackgroundImage: $ncmazBackgroundImage, 
        ncmazBio: $ncmazBio, 
        ncmazBuymeacoffeUrl: $ncmazBuymeacoffeUrl, 
        ncmazFacebookUrl: $ncmazFacebookUrl, 
        ncmazFeaturedImage: $ncmazFeaturedImage,
         ncmazGithubUrl: $ncmazGithubUrl,
          ncmazInstagramUrl: $ncmazInstagramUrl,
           ncmazLinkedinUrl: $ncmazLinkedinUrl, 
           ncmazMediumUrl: $ncmazMediumUrl, 
           ncmazPinterestUrl: $ncmazPinterestUrl, 
           ncmazTwitchUrl: $ncmazTwitchUrl,
            ncmazTwitterUrl: $ncmazTwitterUrl, 
            ncmazVimeoUrl: $ncmazVimeoUrl, 
            ncmazWebsiteUrl: $ncmazWebsiteUrl,
             nicename: $nicename, 
             nickname: $nickname, 
             websiteUrl: $websiteUrl, 
             ncmazYoutubeUrl: $ncmazYoutubeUrl,
        description: $description
      }
    ) {
      user {
        url
        slug
        uri
        id
        databaseId
        email
        nickname
        nicename
        ncUserMeta {
          buymeacoffeUrl
          facebookUrl
          githubUrl
          instagramUrl
          linkedinUrl
          mediumUrl
          ncBio
          pinterestUrl
          twitchUrl
          twitterUrl
          vimeoUrl
          websiteUrl
          youtubeUrl
          featuredImage {
            id
            databaseId
            sourceUrl
          }
          backgroundImage {
            id
            sourceUrl
            databaseId
          }
        }
      }
    }
  } `,ne=`query MyQuery($id: ID = "", $idType: UserNodeIdTypeEnum = DATABASE_ID) {
    user(id: $id, idType: $idType) {
      id
      description
      nicename
      registeredDate
      firstName
      lastName
      ncUserMeta {
        buymeacoffeUrl
        facebookUrl
        backgroundImage {
          altText
          id
          sourceUrl
          databaseId
        }
        githubUrl
        instagramUrl
        linkedinUrl
        mediumUrl
        ncBio
        pinterestUrl
        twitchUrl
        twitterUrl
        vimeoUrl
        websiteUrl
        youtubeUrl
        featuredImage {
          altText
          id
          databaseId
          sourceUrl
        }
      }
      email
      databaseId
      locale
      name
      slug
      uri
      url
      userId
      username
      roles {
        edges {
          node {
            id
            name
          }
        }
      }
      nickname
    }
  }`;function V(){const r=K`
    ${le}
  `,[c,{error:x,data:o,loading:g}]=ee(r);return F.exports.useEffect(()=>{!o||(J.success(t["Your account has been updated."],{transition:D}),setTimeout(()=>{window.location.reload()},500))},[o]),{mutationUpdateUser:c,error:x,data:o,loading:g}}const se=({userData:r})=>{const[c,x]=n.useState(""),[o,g]=n.useState(""),u=!!document.querySelector("[data-is-ncmaz-demo-site='yes']"),{data:f,error:b,loading:U,mutationUpdateUser:m}=V();return a("form",{action:"#",onSubmit:h=>{if(h.preventDefault(),!u){if(c!==o){J.error("Passwords do not match.",{autoClose:4e3});return}m({variables:{id:r.id,password:c}})}},className:"space-y-5 sm:space-y-6 md:sm:space-y-7",children:[a("div",{children:[e("h2",{className:"text-2xl font-semibold capitalize",children:t.password}),e("span",{className:"block mt-1 text-sm text-neutral-500 dark:text-neutral-400",children:t["Manage your password"]})]}),e("div",{className:"w-24 border-b border-neutral-200 dark:border-neutral-700"}),a("div",{children:[e(i,{children:t["New password"]}),e(d,{required:!0,defaultValue:c,onChange:h=>x(h.currentTarget.value),type:"password",minLength:6,className:"mt-1.5"}),e("span",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:t["Password must be at least 6 characters"]})]}),a("div",{children:[e(i,{children:t["Confirm password"]}),e(d,{defaultValue:o,onChange:h=>g(h.currentTarget.value),required:!0,type:"password",minLength:6,className:"mt-1.5"})]}),b&&e(N,{type:"error",children:b.message}),u&&e(N,{type:"error",children:"This feature is not allowed in the demo site."}),e("div",{className:"pt-2 inline-flex",children:e(C,{loading:U,disabled:U||u,className:"w-full",children:t["Update password"]})})]})},ie=({userData:r})=>{var $,_,l,R,G,q,W,Y,j,O,Q,H,X;const[c,x]=n.useState(r.description||""),[o,g]=n.useState((($=r.ncUserMeta)==null?void 0:$.ncBio)||""),[u,f]=n.useState(r.firstName||""),[b,U]=n.useState(r.lastName||""),[m,s]=n.useState(r.nickname||""),[h,k]=n.useState(r.nicename||""),[v,M]=n.useState(r.ncUserMeta.websiteUrl||""),[w,B]=n.useState({id:((l=(_=r.ncUserMeta)==null?void 0:_.featuredImage)==null?void 0:l.databaseId)||"",sourceUrl:((G=(R=r.ncUserMeta)==null?void 0:R.featuredImage)==null?void 0:G.sourceUrl)||"",altText:((W=(q=r.ncUserMeta)==null?void 0:q.featuredImage)==null?void 0:W.altText)||""}),[y,L]=n.useState({id:((j=(Y=r.ncUserMeta)==null?void 0:Y.backgroundImage)==null?void 0:j.databaseId)||"",sourceUrl:((Q=(O=r.ncUserMeta)==null?void 0:O.backgroundImage)==null?void 0:Q.sourceUrl)||"",altText:((X=(H=r.ncUserMeta)==null?void 0:H.backgroundImage)==null?void 0:X.altText)||""}),{data:P,error:z,loading:S,mutationUpdateUser:A}=V(),E=p=>{p.preventDefault(),A({variables:{id:r.id,description:c,ncmazBio:o,firstName:u,lastName:b,nickname:m,nicename:h,ncmazWebsiteUrl:v,ncmazFeaturedImage:w.id||0,ncmazBackgroundImage:y.id||0}})},T=()=>a("div",{className:"inline-flex flex-col",children:[e(i,{children:t["Profile picture"]}),e(Z,{defaultImage:w,className:"mt-1.5 ",onChangeImage:B})]}),I=()=>a("div",{children:[e(i,{children:t["Cover photo"]}),e(Z,{defaultImage:y,className:"mt-1.5 flex-1",onChangeImage:L})]});return a("form",{onSubmit:E,action:"#",className:"space-y-5 sm:space-y-6 md:sm:space-y-7",children:[a("div",{children:[e("h2",{className:"text-2xl font-semibold",children:t["Edit profile"]}),e("span",{className:"block mt-1 text-sm text-neutral-500 dark:text-neutral-400",children:t["Set up your profile and manage your account"]})]}),e("div",{className:"w-24 border-b border-neutral-200 dark:border-neutral-700"}),T(),I(),a("div",{children:[e(i,{children:t["First Name"]}),e(d,{className:"mt-1.5",defaultValue:u,onChange:p=>f(p.currentTarget.value)})]}),a("div",{children:[e(i,{children:t["Last Name"]}),e(d,{className:"mt-1.5",defaultValue:b,onChange:p=>U(p.currentTarget.value)})]}),a("div",{children:[a(i,{children:[t.Nickname," "," ","(",t.required,")"]}),e(d,{className:"mt-1.5",defaultValue:m,onChange:p=>s(p.currentTarget.value)})]}),a("div",{children:[e(i,{children:t["Biographical Info"]}),e("span",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:t["Biographical Info, this will show up in the author page."]}),e(ae,{rows:5,className:"mt-1.5",placeholder:t["Something about yourself in a few word."],defaultValue:c,onChange:p=>x(p.currentTarget.value)})]}),a("div",{children:[e(i,{children:t["Short Bio"]}),e("span",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:t["A short Bio (e.g. occupation), this will show up in the author cards."]}),e(d,{className:"mt-1.5",placeholder:t["UX/UI Designer"],defaultValue:o,onChange:p=>g(p.currentTarget.value)})]}),a("div",{className:"",children:[e(i,{children:t.Website}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-3 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400",children:e("i",{className:"las la-link text-xl"})}),e(d,{className:"!rounded-l-none",placeholder:t["yourwebsite.com"],defaultValue:v,onChange:p=>M(p.currentTarget.value)})]})]}),z&&e(N,{type:"error",children:z.message}),e("div",{className:"inline-flex pt-2",children:e(C,{loading:S,disabled:S,className:"w-full",children:t["Update profile"]})})]})},de=({userData:r})=>{const[c,x]=n.useState(r.email||""),[o,g]=n.useState(r.name||""),{data:u,error:f,loading:b,mutationUpdateUser:U}=V();return a("form",{action:"#",className:"space-y-5 sm:space-y-6 md:sm:space-y-7",onSubmit:s=>{s.preventDefault(),U({variables:{id:r.id,email:c,displayName:o}})},children:[a("div",{children:[e("h2",{className:"text-2xl font-semibold",children:t["General settings"]}),e("span",{className:"block mt-1 text-sm text-neutral-500 dark:text-neutral-400",children:t["Update your username and manage your account"]})]}),e("div",{className:"w-24 border-b border-neutral-200 dark:border-neutral-700"}),a("div",{children:[e(i,{children:t["Display Name"]}),e(d,{className:"mt-1.5",defaultValue:o,onChange:s=>g(s.currentTarget.value),required:!0})]}),a("div",{children:[e(i,{children:t.Email}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl las la-envelope"})}),e(d,{className:"!rounded-l-none",placeholder:"example@email.com",defaultValue:c,onChange:s=>x(s.currentTarget.value),required:!0})]})]}),f&&e(N,{type:"error",children:f.message}),e("div",{className:"inline-flex pt-2",children:e(C,{type:"submit",className:"w-full",loading:b,disabled:b,children:t["Update profile"]})})]})},ce=({userData:r})=>{const[c,x]=n.useState(r.ncUserMeta.youtubeUrl||""),[o,g]=n.useState(r.ncUserMeta.facebookUrl||""),[u,f]=n.useState(r.ncUserMeta.twitterUrl||""),[b,U]=n.useState(r.ncUserMeta.instagramUrl||""),[m,s]=n.useState(r.ncUserMeta.githubUrl||""),[h,k]=n.useState(r.ncUserMeta.linkedinUrl||""),[v,M]=n.useState(r.ncUserMeta.twitchUrl||""),[w,B]=n.useState(r.ncUserMeta.mediumUrl||""),[y,L]=n.useState(r.ncUserMeta.pinterestUrl||""),[P,z]=n.useState(r.ncUserMeta.buymeacoffeUrl||""),[S,A]=n.useState(r.ncUserMeta.vimeoUrl||""),{data:E,error:T,loading:I,mutationUpdateUser:$}=V();return a("form",{action:"#",onSubmit:l=>{l.preventDefault(),$({variables:{id:r.id,ncmazYoutubeUrl:c,ncmazFacebookUrl:o,ncmazTwitterUrl:u,ncmazInstagramUrl:b,ncmazGithubUrl:m,ncmazLinkedinUrl:h,ncmazTwitchUrl:v,ncmazMediumUrl:w,ncmazPinterestUrl:y,ncmazVimeoUrl:S,ncmazBuymeacoffeUrl:P}})},className:"space-y-5 sm:space-y-6 md:sm:space-y-7",children:[a("div",{children:[e("h2",{className:"text-2xl font-semibold",children:t["Social profiles"]}),e("span",{className:"block mt-1 text-sm text-neutral-500 dark:text-neutral-400",children:t["Add elsewhere links to your profile"]})]}),e("div",{className:"w-24 border-b border-neutral-200 dark:border-neutral-700"}),a("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5 ",children:[a("div",{children:[e(i,{children:"Youtube"}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-youtube"})}),e(d,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://www.youtube.com/channel/yourname",defaultValue:c,onChange:l=>x(l.currentTarget.value)})]})]}),a("div",{children:[e(i,{children:"Facebook"}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-facebook-f"})}),e(d,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://www.facebook.com/yourname",defaultValue:o,onChange:l=>g(l.currentTarget.value)})]})]}),a("div",{children:[e(i,{children:"Medium"}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-medium"})}),e(d,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://medium.com/@yourname",defaultValue:w,onChange:l=>B(l.currentTarget.value)})]})]}),a("div",{children:[e(i,{children:"Github "}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-github"})}),e(d,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://github.com/yourname",defaultValue:m,onChange:l=>s(l.currentTarget.value)})]})]}),a("div",{children:[e(i,{children:"Vimeo "}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-vimeo"})}),e(d,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://vimeo.com/yourname",defaultValue:S,onChange:l=>A(l.currentTarget.value)})]})]}),a("div",{children:[e(i,{children:"Twitter"}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-twitter"})}),e(d,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://twitter.com/yourname",defaultValue:u,onChange:l=>f(l.currentTarget.value)})]})]}),a("div",{children:[e(i,{children:"Instagram "}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-instagram"})}),e(d,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://instagram.com/yourname",defaultValue:b,onChange:l=>U(l.currentTarget.value)})]})]}),a("div",{children:[e(i,{children:"Linkedin "}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-linkedin"})}),e(d,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://linkedin.com/in/yourname",defaultValue:h,onChange:l=>k(l.currentTarget.value)})]})]}),a("div",{children:[e(i,{children:"Pinterest "}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-pinterest"})}),e(d,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://pinterest.com/yourname",defaultValue:y,onChange:l=>L(l.currentTarget.value)})]})]}),a("div",{children:[e(i,{children:"Twitch "}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-twitch"})}),e(d,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://twitch.com/yourname",defaultValue:v,onChange:l=>M(l.currentTarget.value)})]})]}),a("div",{className:"sm:col-span-2",children:[a(i,{children:[t.Buymeacoffe," "]}),a("span",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:[t["You should have an account here:"]," "," ",t["buymeacoffee.com"]&&e("a",{href:"https://"+t["buymeacoffee.com"],target:"_blank",rel:"noopener noreferrer",className:"ml-1 underline",children:t["buymeacoffee.com"]})]}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl las la-coffee"})}),e(d,{className:"!rounded-l-none",placeholder:t["https://buymeacoffee.com/yourname"],sizeClass:"h-11 px-4 pl-2 pr-3",defaultValue:P,onChange:l=>z(l.currentTarget.value)})]})]})]}),T&&e(N,{type:"error",children:T.message}),e("div",{className:"pt-2 inline-flex",children:e(C,{loading:I,disabled:I,className:"w-full",children:t["Update profile"]})})]})},ge=()=>{const[r,c]=n.useState("general"),x=K`
    ${ne}
  `,[o,{error:g,data:u,loading:f}]=te(x,{notifyOnNetworkStatusChange:!0});if(F.exports.useEffect(()=>{var m,s;(m=frontendObject.currentUser)!=null&&m.databaseId&&o({variables:{id:Number((s=frontendObject.currentUser)==null?void 0:s.databaseId)}})},[]),F.exports.useEffect(()=>{const m=window.location.search,h=new URLSearchParams(m).get("tab");!h||!["general","profile","password","socials"].includes(h)||(c(h||"general"),window.scrollTo(0,0))},[]),g)return e(N,{type:"error",children:e("div",{dangerouslySetInnerHTML:{__html:`${g.message}
          <a
            class="underline ml-2"
            href="javascript:window.location.href=window.location.href"
          >
            Reload
          </a>`}})});if(f)return e(re,{});if(!u||!u.user)return e(N,{type:"error",children:e("div",{dangerouslySetInnerHTML:{__html:` ${t.somethingWentWrong}
          <a
            class="underline ml-2"
            href="javascript:window.location.href=window.location.href"
          >
            Reload
          </a>`}})});const b=(m,s)=>{m.preventDefault(),s!==r&&(c(s),window.scrollTo(0,0),window.history.pushState(null,"",`?tab=${s}`))};return a("div",{className:"nc-NcmazAccountPage__content ",children:[e("div",{className:"w-full border-b-2 border-neutral-100 dark:border-neutral-700"}),a("div",{className:"mt-10 flex flex-col md:flex-row",children:[e("div",{className:"flex-shrink-0 md:w-1/4",children:(()=>e("div",{className:"md:sticky md:top-32",children:a("ul",{className:"space-y-4 md:space-y-5 md:pr-10",children:[["general","profile","password","socials"].map(s=>e("li",{children:e("a",{className:`capitalize  ${r===s?"text-neutral-900 dark:text-neutral-100 font-semibold":"text-neutral-500 dark:text-neutral-400"}`,onClick:k=>b(k,s),href:`#${s}`,children:t[s]})},s)),e("div",{className:"w-full border-b-2 border-neutral-100 dark:border-neutral-700"}),e("li",{className:"warning",children:e("a",{className:"text-red-500",href:frontendObject.wpLogoutUrl||"#",children:t["Logout Account"]})})]})}))()}),a("div",{className:"flex-grow mt-10 md:mt-0 xl:pl-16 max-w-3xl ",children:[r==="general"&&e(de,{userData:u.user}),r==="profile"&&e(ie,{userData:u.user}),r==="password"&&e(se,{userData:u.user}),r==="socials"&&e(ce,{userData:u.user})]})]})]})};export{ge as default};
