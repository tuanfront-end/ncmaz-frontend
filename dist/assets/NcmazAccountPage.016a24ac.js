import{U as Z,r as A,l as K,N as l,S as D,h as n,a,j as e,V as c,X as N,J as ee}from"./main.24165b1f.js";import{C as ae}from"./CircleLoading.af5220ab.js";import{B as I}from"./ButtonPrimary.e69047dd.js";import{u as re,L as i,T as le,I as J}from"./Textarea.f3d85580.js";const te=`mutation MUTAION_UPDATE_USER(
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
  }`;function $(){const r=Z`
    ${te}
  `,[o,{error:g,data:d,loading:f}]=re(r);return A.exports.useEffect(()=>{!d||(K.success(l["Your account has been updated."],{transition:D}),setTimeout(()=>{window.location.reload()},500))},[d]),{mutationUpdateUser:o,error:g,data:d,loading:f}}const se=({userData:r})=>{const[o,g]=n.useState(""),[d,f]=n.useState(""),m=!!document.querySelector("[data-is-ncmaz-demo-site='yes']"),{data:x,error:b,loading:U,mutationUpdateUser:u}=$();return a("form",{action:"#",onSubmit:h=>{if(h.preventDefault(),!m){if(o!==d){K.error("Passwords do not match.",{autoClose:4e3});return}u({variables:{id:r.id,password:o}})}},className:"NcmazAccountPage-ChangePasswordForm space-y-5 sm:space-y-6 md:sm:space-y-7",children:[a("div",{className:"ChangePasswordForm__heading",children:[e("h2",{className:"text-2xl font-semibold capitalize",children:l.password}),e("span",{className:"block mt-1 text-sm text-neutral-500 dark:text-neutral-400",children:l["Manage your password"]})]}),e("div",{className:"w-24 border-b border-neutral-200 dark:border-neutral-700"}),a("div",{className:"ChangePasswordForm__newPass",children:[e(i,{children:l["New password"]}),e(c,{required:!0,defaultValue:o,onChange:h=>g(h.currentTarget.value),type:"password",minLength:6,className:"mt-1.5"}),e("span",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:l["Password must be at least 6 characters"]})]}),a("div",{className:"ChangePasswordForm__ConfirmPass",children:[e(i,{children:l["Confirm password"]}),e(c,{defaultValue:d,onChange:h=>f(h.currentTarget.value),required:!0,type:"password",minLength:6,className:"mt-1.5"})]}),b&&e(N,{type:"error",children:b.message}),m&&e(N,{type:"error",children:"This feature is not allowed in the demo site."}),e("div",{className:"ChangePasswordForm__submit pt-2 inline-flex",children:e(I,{loading:U,disabled:U||m,className:"w-full",type:"submit",children:l["Update password"]})})]})},ie=({userData:r})=>{var P,E,t,G,R,W,Y,q,j,O,Q,H,X;const[o,g]=n.useState(r.description||""),[d,f]=n.useState(((P=r.ncUserMeta)==null?void 0:P.ncBio)||""),[m,x]=n.useState(r.firstName||""),[b,U]=n.useState(r.lastName||""),[u,s]=n.useState(r.nickname||""),[h,w]=n.useState(r.nicename||""),[k,C]=n.useState(r.ncUserMeta.websiteUrl||""),[v,F]=n.useState({id:((t=(E=r.ncUserMeta)==null?void 0:E.featuredImage)==null?void 0:t.databaseId)||"",sourceUrl:((R=(G=r.ncUserMeta)==null?void 0:G.featuredImage)==null?void 0:R.sourceUrl)||"",altText:((Y=(W=r.ncUserMeta)==null?void 0:W.featuredImage)==null?void 0:Y.altText)||""}),[S,V]=n.useState({id:((j=(q=r.ncUserMeta)==null?void 0:q.backgroundImage)==null?void 0:j.databaseId)||"",sourceUrl:((Q=(O=r.ncUserMeta)==null?void 0:O.backgroundImage)==null?void 0:Q.sourceUrl)||"",altText:((X=(H=r.ncUserMeta)==null?void 0:H.backgroundImage)==null?void 0:X.altText)||""}),{data:M,error:_,loading:y,mutationUpdateUser:B}=$(),L=p=>{p.preventDefault(),B({variables:{id:r.id,description:o,ncmazBio:d,firstName:m,lastName:b,nickname:u,nicename:h,ncmazWebsiteUrl:k,ncmazFeaturedImage:v.id||0,ncmazBackgroundImage:S.id||0}})},z=()=>a("div",{className:"EditProfileForm__Profile-picture inline-flex flex-col",children:[e(i,{children:l["Profile picture"]}),e(J,{defaultImage:v,className:"mt-1.5 ",onChangeImage:F})]}),T=()=>a("div",{className:"EditProfileForm__Cover-picture",children:[e(i,{children:l["Cover photo"]}),e(J,{defaultImage:S,className:"mt-1.5 flex-1",onChangeImage:V})]});return a("form",{onSubmit:L,action:"#",className:"NcmazAccountPage-EditProfileForm space-y-5 sm:space-y-6 md:sm:space-y-7",children:[a("div",{className:"EditProfileForm__heading",children:[e("h2",{className:"text-2xl font-semibold",children:l["Edit profile"]}),e("span",{className:"block mt-1 text-sm text-neutral-500 dark:text-neutral-400",children:l["Set up your profile and manage your account"]})]}),e("div",{className:"w-24 border-b border-neutral-200 dark:border-neutral-700"}),z(),T(),a("div",{className:"EditProfileForm__firstName",children:[e(i,{children:l["First Name"]}),e(c,{className:"mt-1.5",defaultValue:m,onChange:p=>x(p.currentTarget.value)})]}),a("div",{className:"EditProfileForm__lastName",children:[e(i,{children:l["Last Name"]}),e(c,{className:"mt-1.5",defaultValue:b,onChange:p=>U(p.currentTarget.value)})]}),a("div",{className:"EditProfileForm__nickName",children:[a(i,{children:[l.Nickname," "," ","(",l.required,")"]}),e(c,{className:"mt-1.5",defaultValue:u,onChange:p=>s(p.currentTarget.value)})]}),a("div",{className:"EditProfileForm__Biographical",children:[e(i,{children:l["Biographical Info"]}),e("span",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:l["Biographical Info, this will show up in the author page."]}),e(le,{rows:5,className:"mt-1.5",placeholder:l["Something about yourself in a few word."],defaultValue:o,onChange:p=>g(p.currentTarget.value)})]}),a("div",{className:"EditProfileForm__shortBio",children:[e(i,{children:l["Short Bio"]}),e("span",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:l["A short Bio (e.g. occupation), this will show up in the author cards."]}),e(c,{className:"mt-1.5",placeholder:l["UX/UI Designer"],defaultValue:d,onChange:p=>f(p.currentTarget.value)})]}),a("div",{className:"EditProfileForm__Website",children:[e(i,{children:l.Website}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-3 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400",children:e("i",{className:"las la-link text-xl"})}),e(c,{className:"!rounded-l-none",placeholder:l["yourwebsite.com"],defaultValue:k,onChange:p=>C(p.currentTarget.value)})]})]}),_&&e(N,{type:"error",children:_.message}),e("div",{className:"EditProfileForm__submit inline-flex pt-2",children:e(I,{loading:y,disabled:y,className:"w-full",type:"submit",children:l["Update profile"]})})]})},ce=({userData:r})=>{const[o,g]=n.useState(r.email||""),[d,f]=n.useState(r.name||""),{data:m,error:x,loading:b,mutationUpdateUser:U}=$();return a("form",{action:"#",className:"NcmazAccountPage-GeneralForm space-y-5 sm:space-y-6 md:sm:space-y-7",onSubmit:s=>{s.preventDefault(),U({variables:{id:r.id,email:o,displayName:d}})},children:[a("div",{children:[e("h2",{className:"text-2xl font-semibold",children:l["General settings"]}),e("span",{className:"block mt-1 text-sm text-neutral-500 dark:text-neutral-400",children:l["Update your username and manage your account"]})]}),e("div",{className:"w-24 border-b border-neutral-200 dark:border-neutral-700"}),a("div",{children:[e(i,{children:l["Display Name"]}),e(c,{className:"mt-1.5",defaultValue:d,onChange:s=>f(s.currentTarget.value),required:!0})]}),a("div",{children:[e(i,{children:l.Email}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl las la-envelope"})}),e(c,{className:"!rounded-l-none",placeholder:"example@email.com",defaultValue:o,onChange:s=>g(s.currentTarget.value),required:!0})]})]}),x&&e(N,{type:"error",children:x.message}),e("div",{className:"inline-flex pt-2",children:e(I,{type:"submit",className:"w-full",loading:b,disabled:b,children:l["Update profile"]})})]})},oe=({userData:r})=>{const[o,g]=n.useState(r.ncUserMeta.youtubeUrl||""),[d,f]=n.useState(r.ncUserMeta.facebookUrl||""),[m,x]=n.useState(r.ncUserMeta.twitterUrl||""),[b,U]=n.useState(r.ncUserMeta.instagramUrl||""),[u,s]=n.useState(r.ncUserMeta.githubUrl||""),[h,w]=n.useState(r.ncUserMeta.linkedinUrl||""),[k,C]=n.useState(r.ncUserMeta.twitchUrl||""),[v,F]=n.useState(r.ncUserMeta.mediumUrl||""),[S,V]=n.useState(r.ncUserMeta.pinterestUrl||""),[M,_]=n.useState(r.ncUserMeta.buymeacoffeUrl||""),[y,B]=n.useState(r.ncUserMeta.vimeoUrl||""),{data:L,error:z,loading:T,mutationUpdateUser:P}=$();return a("form",{action:"#",onSubmit:t=>{t.preventDefault(),P({variables:{id:r.id,ncmazYoutubeUrl:o,ncmazFacebookUrl:d,ncmazTwitterUrl:m,ncmazInstagramUrl:b,ncmazGithubUrl:u,ncmazLinkedinUrl:h,ncmazTwitchUrl:k,ncmazMediumUrl:v,ncmazPinterestUrl:S,ncmazVimeoUrl:y,ncmazBuymeacoffeUrl:M}})},className:"NcmazAccountPage-SocialsProfileForm space-y-5 sm:space-y-6 md:sm:space-y-7",children:[a("div",{className:"SocialsProfileForm__heading",children:[e("h2",{className:"text-2xl font-semibold",children:l["Social profiles"]}),e("span",{className:"block mt-1 text-sm text-neutral-500 dark:text-neutral-400",children:l["Add elsewhere links to your profile"]})]}),e("div",{className:"w-24 border-b border-neutral-200 dark:border-neutral-700"}),a("div",{className:"SocialsProfileForm__fieldsWrap grid grid-cols-1 sm:grid-cols-2 gap-5 ",children:[a("div",{className:"SocialsProfileForm__Youtube",children:[e(i,{children:"Youtube"}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-youtube"})}),e(c,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://www.youtube.com/channel/yourname",defaultValue:o,onChange:t=>g(t.currentTarget.value)})]})]}),a("div",{className:"SocialsProfileForm__Facebook",children:[e(i,{children:"Facebook"}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-facebook-f"})}),e(c,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://www.facebook.com/yourname",defaultValue:d,onChange:t=>f(t.currentTarget.value)})]})]}),a("div",{className:"SocialsProfileForm__Medium",children:[e(i,{children:"Medium"}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-medium"})}),e(c,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://medium.com/@yourname",defaultValue:v,onChange:t=>F(t.currentTarget.value)})]})]}),a("div",{className:"SocialsProfileForm__Github",children:[e(i,{children:"Github "}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-github"})}),e(c,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://github.com/yourname",defaultValue:u,onChange:t=>s(t.currentTarget.value)})]})]}),a("div",{className:"SocialsProfileForm__Vimeo",children:[e(i,{children:"Vimeo "}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-vimeo"})}),e(c,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://vimeo.com/yourname",defaultValue:y,onChange:t=>B(t.currentTarget.value)})]})]}),a("div",{className:"SocialsProfileForm__Twitter",children:[e(i,{children:"Twitter"}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-twitter"})}),e(c,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://twitter.com/yourname",defaultValue:m,onChange:t=>x(t.currentTarget.value)})]})]}),a("div",{className:"SocialsProfileForm__Instagram",children:[e(i,{children:"Instagram "}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-instagram"})}),e(c,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://instagram.com/yourname",defaultValue:b,onChange:t=>U(t.currentTarget.value)})]})]}),a("div",{className:"SocialsProfileForm__Linkedin",children:[e(i,{children:"Linkedin "}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-linkedin"})}),e(c,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://linkedin.com/in/yourname",defaultValue:h,onChange:t=>w(t.currentTarget.value)})]})]}),a("div",{className:"SocialsProfileForm__Pinterest",children:[e(i,{children:"Pinterest "}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-pinterest"})}),e(c,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://pinterest.com/yourname",defaultValue:S,onChange:t=>V(t.currentTarget.value)})]})]}),a("div",{className:"SocialsProfileForm__Twitch",children:[e(i,{children:"Twitch "}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl lab la-twitch"})}),e(c,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://twitch.com/yourname",defaultValue:k,onChange:t=>C(t.currentTarget.value)})]})]}),a("div",{className:"SocialsProfileForm__Buymeacoffe sm:col-span-2",children:[a(i,{children:[l.Buymeacoffe," "]}),a("span",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:[l["You should have an account here:"]," "," ",l["buymeacoffee.com"]&&e("a",{href:"https://"+l["buymeacoffee.com"],target:"_blank",rel:"noopener noreferrer",className:"ml-1 underline",children:l["buymeacoffee.com"]})]}),a("div",{className:"mt-1.5 flex",children:[e("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e("i",{className:"text-2xl las la-coffee"})}),e(c,{className:"!rounded-l-none",placeholder:l["https://buymeacoffee.com/yourname"],sizeClass:"h-11 px-4 pl-2 pr-3",defaultValue:M,onChange:t=>_(t.currentTarget.value)})]})]})]}),z&&e(N,{type:"error",children:z.message}),e("div",{className:"SocialsProfileForm__submit pt-2 inline-flex",children:e(I,{type:"submit",loading:T,disabled:T,className:"w-full",children:l["Update profile"]})})]})},be=()=>{const[r,o]=n.useState("general"),g=Z`
    ${ne}
  `,[d,{error:f,data:m,loading:x}]=ee(g,{notifyOnNetworkStatusChange:!0});if(A.exports.useEffect(()=>{var u,s;(u=frontendObject.currentUser)!=null&&u.databaseId&&d({variables:{id:Number((s=frontendObject.currentUser)==null?void 0:s.databaseId)}})},[]),A.exports.useEffect(()=>{const u=window.location.search,h=new URLSearchParams(u).get("tab");!h||!["general","profile","password","socials"].includes(h)||(o(h||"general"),window.scrollTo(0,0))},[]),f)return e(N,{type:"error",children:e("div",{dangerouslySetInnerHTML:{__html:`${f.message}
          <a
            class="underline ml-2"
            href="javascript:window.location.href=window.location.href"
          >
            Reload
          </a>`}})});if(x)return e(ae,{});if(!m||!m.user)return e(N,{type:"error",children:e("div",{dangerouslySetInnerHTML:{__html:` ${l.somethingWentWrong}
          <a
            class="underline ml-2"
            href="javascript:window.location.href=window.location.href"
          >
            Reload
          </a>`}})});const b=(u,s)=>{u.preventDefault(),s!==r&&(o(s),window.scrollTo(0,0),window.history.pushState(null,"",`?tab=${s}`))};return a("div",{className:"nc-NcmazAccountPage__content ",children:[e("div",{className:"w-full border-b-2 border-neutral-100 dark:border-neutral-700"}),a("div",{className:"mt-10 flex flex-col md:flex-row",children:[e("div",{className:"nc-NcmazAccountPage__content-left flex-shrink-0 md:w-1/4",children:(()=>e("div",{className:"md:sticky md:top-32",children:a("ul",{className:"space-y-4 md:space-y-5 md:pr-10",children:[["general","profile","password","socials"].map(s=>e("li",{children:e("a",{className:`capitalize  ${r===s?"text-neutral-900 dark:text-neutral-100 font-semibold":"text-neutral-500 dark:text-neutral-400"}`,onClick:w=>b(w,s),href:`#${s}`,children:l[s]})},s)),e("div",{className:"w-full border-b-2 border-neutral-100 dark:border-neutral-700"}),e("li",{className:"warning",children:e("a",{className:"text-red-500",href:frontendObject.wpLogoutUrl||"#",children:l["Logout Account"]})})]})}))()}),a("div",{className:"nc-NcmazAccountPage__content-right flex-grow mt-10 md:mt-0 xl:pl-16 max-w-3xl ",children:[r==="general"&&e(ce,{userData:m.user}),r==="profile"&&e(ie,{userData:m.user}),r==="password"&&e(se,{userData:m.user}),r==="socials"&&e(oe,{userData:m.user})]})]})]})};export{be as default};
