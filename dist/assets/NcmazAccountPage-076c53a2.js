import{r as re,c as ce,N as a,R as s,j as e,A as U}from"./main-76784102.js";import{C as de}from"./CircleLoading-450ba37c.js";import{B as O}from"./ButtonPrimary-96234797.js";import{I as i}from"./Input-100c00f4.js";import{u as me,L as t,T as ue,I as ie}from"./Textarea-4b479fd7.js";import{a as oe}from"./useQuery-7b3c67b8.js";import{u as xe}from"./useLazyQuery-4d0522c4.js";import"./Button-e27db759.js";import"./twFocusClass-d0735f61.js";const he=`mutation MUTAION_UPDATE_PROFILE(
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
  $ncmazTiktokUrl: String = null, 
  $ncmazTelegramUrl: String = null, 
  $ncmazWhatsappUrl: String = null, 
  $ncmazDiscordUrl: String = null, 
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
        ncmazWhatsappUrl: $ncmazWhatsappUrl,
        ncmazTiktokUrl: $ncmazTiktokUrl, 
        ncmazTelegramUrl: $ncmazTelegramUrl, 
        ncmazDiscordUrl: $ncmazDiscordUrl,
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
          tiktokUrl
          telegramUrl
          whatsappUrl
          discordUrl
          featuredImage {
            node {
              id
              databaseId
              sourceUrl
            }
          }
          backgroundImage {
            node {
              id
              sourceUrl
              databaseId
            }
          }
        }
      }
    }
  } `,pe=`query MyQuery($id: ID = "", $idType: UserNodeIdTypeEnum = DATABASE_ID) {
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
          node {
            altText
            id
            sourceUrl
            databaseId
          }
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
        tiktokUrl
        telegramUrl
        whatsappUrl
        discordUrl
        featuredImage {
          node {
            altText
            id
            databaseId
            sourceUrl
          }
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
  }`;function Q(){const r=oe`
    ${he}
  `,[o,{error:b,data:d,loading:p}]=me(r);return re.useEffect(()=>{d&&(ce.success(a["Your account has been updated."]),setTimeout(()=>{window.location.reload()},500))},[d]),{mutationUpdateUser:o,error:b,data:d,loading:p}}const be=({userData:r})=>{const[o,b]=s.useState(""),[d,p]=s.useState(""),m=!!document.querySelector("[data-is-ncmaz-demo-site='yes']"),{data:f,error:h,loading:g,mutationUpdateUser:c}=Q(),n=u=>{if(u.preventDefault(),!m){if(o!==d){ce.error("Passwords do not match.");return}c({variables:{id:r.id,password:o}})}};return e.jsxs("form",{action:"#",onSubmit:n,className:"NcmazAccountPage-ChangePasswordForm space-y-5 sm:space-y-6 md:sm:space-y-7",children:[e.jsxs("div",{className:"ChangePasswordForm__heading",children:[e.jsx("h2",{className:"text-2xl font-semibold capitalize",children:a.password}),e.jsx("span",{className:"block mt-1 text-sm text-neutral-500 dark:text-neutral-400",children:a["Manage your password"]})]}),e.jsx("div",{className:"w-24 border-b border-neutral-200 dark:border-neutral-700"}),e.jsxs("div",{className:"ChangePasswordForm__newPass",children:[e.jsx(t,{children:a["New password"]}),e.jsx(i,{required:!0,defaultValue:o,onChange:u=>b(u.currentTarget.value),type:"password",minLength:6,className:"mt-1.5"}),e.jsx("span",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:a["Password must be at least 6 characters"]})]}),e.jsxs("div",{className:"ChangePasswordForm__ConfirmPass",children:[e.jsx(t,{children:a["Confirm password"]}),e.jsx(i,{defaultValue:d,onChange:u=>p(u.currentTarget.value),required:!0,type:"password",minLength:6,className:"mt-1.5"})]}),h&&e.jsx(U,{type:"error",children:h.message}),m&&e.jsx(U,{type:"error",children:"This feature is not allowed in the demo site."}),e.jsx("div",{className:"ChangePasswordForm__submit pt-2 inline-flex",children:e.jsx(O,{loading:g,disabled:g||m,className:"w-full",type:"submit",children:a["Update password"]})})]})},ge=({userData:r})=>{var W,S,R,z,G,ee,y,_,Y,q,T,P,$,I,C,F,V,M,B;const[o,b]=s.useState(r.description||""),[d,p]=s.useState(((W=r.ncUserMeta)==null?void 0:W.ncBio)||""),[m,f]=s.useState(r.firstName||""),[h,g]=s.useState(r.lastName||""),[c,n]=s.useState(r.nickname||""),[u,j]=s.useState(r.nicename||""),[N,H]=s.useState(r.ncUserMeta.websiteUrl||""),[k,X]=s.useState({id:((z=(R=(S=r.ncUserMeta)==null?void 0:S.featuredImage)==null?void 0:R.node)==null?void 0:z.databaseId)||"",sourceUrl:((y=(ee=(G=r.ncUserMeta)==null?void 0:G.featuredImage)==null?void 0:ee.node)==null?void 0:y.sourceUrl)||"",altText:((q=(Y=(_=r.ncUserMeta)==null?void 0:_.featuredImage)==null?void 0:Y.node)==null?void 0:q.altText)||""}),[w,Z]=s.useState({id:(($=(P=(T=r.ncUserMeta)==null?void 0:T.backgroundImage)==null?void 0:P.node)==null?void 0:$.databaseId)||"",sourceUrl:((F=(C=(I=r.ncUserMeta)==null?void 0:I.backgroundImage)==null?void 0:C.node)==null?void 0:F.sourceUrl)||"",altText:((B=(M=(V=r.ncUserMeta)==null?void 0:V.backgroundImage)==null?void 0:M.node)==null?void 0:B.altText)||""}),{data:J,error:E,loading:v,mutationUpdateUser:K}=Q(),A=x=>{x.preventDefault(),K({variables:{id:r.id,description:o,ncmazBio:d,firstName:m,lastName:h,nickname:c,nicename:u,ncmazWebsiteUrl:N,ncmazFeaturedImage:k.id||0,ncmazBackgroundImage:w.id||0}})},D=()=>e.jsxs("div",{className:"EditProfileForm__Profile-picture inline-flex flex-col",children:[e.jsx(t,{children:a["Profile picture"]}),e.jsx(ie,{defaultImage:k,className:"mt-1.5 ",onChangeImage:X})]}),L=()=>e.jsxs("div",{className:"EditProfileForm__Cover-picture",children:[e.jsx(t,{children:a["Cover photo"]}),e.jsx(ie,{defaultImage:w,className:"mt-1.5 flex-1",onChangeImage:Z})]});return e.jsxs("form",{onSubmit:A,action:"#",className:"NcmazAccountPage-EditProfileForm space-y-5 sm:space-y-6 md:sm:space-y-7",children:[e.jsxs("div",{className:"EditProfileForm__heading",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:a["Edit profile"]}),e.jsx("span",{className:"block mt-1 text-sm text-neutral-500 dark:text-neutral-400",children:a["Set up your profile and manage your account"]})]}),e.jsx("div",{className:"w-24 border-b border-neutral-200 dark:border-neutral-700"}),D(),L(),e.jsxs("div",{className:"EditProfileForm__firstName",children:[e.jsx(t,{children:a["First Name"]}),e.jsx(i,{className:"mt-1.5",defaultValue:m,onChange:x=>f(x.currentTarget.value)})]}),e.jsxs("div",{className:"EditProfileForm__lastName",children:[e.jsx(t,{children:a["Last Name"]}),e.jsx(i,{className:"mt-1.5",defaultValue:h,onChange:x=>g(x.currentTarget.value)})]}),e.jsxs("div",{className:"EditProfileForm__nickName",children:[e.jsxs(t,{children:[a.Nickname," "," ","(",a.required,")"]}),e.jsx(i,{className:"mt-1.5",defaultValue:c,onChange:x=>n(x.currentTarget.value)})]}),e.jsxs("div",{className:"EditProfileForm__Biographical",children:[e.jsx(t,{children:a["Biographical Info"]}),e.jsx("span",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:a["Biographical Info, this will show up in the author page."]}),e.jsx(ue,{rows:5,className:"mt-1.5",placeholder:a["Something about yourself in a few word."],defaultValue:o,onChange:x=>b(x.currentTarget.value)})]}),e.jsxs("div",{className:"EditProfileForm__shortBio",children:[e.jsx(t,{children:a["Short Bio"]}),e.jsx("span",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:a["A short Bio (e.g. occupation), this will show up in the author cards."]}),e.jsx(i,{className:"mt-1.5",placeholder:a["UX/UI Designer"],defaultValue:d,onChange:x=>p(x.currentTarget.value)})]}),e.jsxs("div",{className:"EditProfileForm__Website",children:[e.jsx(t,{children:a.Website}),e.jsxs("div",{className:"mt-1.5 flex",children:[e.jsx("span",{className:"inline-flex items-center px-3 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400",children:e.jsx("i",{className:"las la-link text-xl"})}),e.jsx(i,{className:"!rounded-l-none",placeholder:a["yourwebsite.com"],defaultValue:N,onChange:x=>H(x.currentTarget.value)})]})]}),E&&e.jsx(U,{type:"error",children:E.message}),e.jsx("div",{className:"EditProfileForm__submit inline-flex pt-2",children:e.jsx(O,{loading:v,disabled:v,className:"w-full",type:"submit",children:a["Update profile"]})})]})},fe=({userData:r})=>{const[o,b]=s.useState(r.email||""),[d,p]=s.useState(r.name||""),{data:m,error:f,loading:h,mutationUpdateUser:g}=Q(),c=n=>{n.preventDefault(),g({variables:{id:r.id,email:o,displayName:d}})};return e.jsxs("form",{action:"#",className:"NcmazAccountPage-GeneralForm space-y-5 sm:space-y-6 md:sm:space-y-7",onSubmit:c,children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-semibold",children:a["General settings"]}),e.jsx("span",{className:"block mt-1 text-sm text-neutral-500 dark:text-neutral-400",children:a["Update your username and manage your account"]})]}),e.jsx("div",{className:"w-24 border-b border-neutral-200 dark:border-neutral-700"}),e.jsxs("div",{children:[e.jsx(t,{children:a["Display Name"]}),e.jsx(i,{className:"mt-1.5",defaultValue:d,onChange:n=>p(n.currentTarget.value),required:!0})]}),e.jsxs("div",{children:[e.jsx(t,{children:a.Email}),e.jsxs("div",{className:"mt-1.5 flex",children:[e.jsx("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e.jsx("i",{className:"text-2xl las la-envelope"})}),e.jsx(i,{className:"!rounded-l-none",placeholder:"example@email.com",defaultValue:o,onChange:n=>b(n.currentTarget.value),required:!0})]})]}),f&&e.jsx(U,{type:"error",children:f.message}),e.jsx("div",{className:"inline-flex pt-2",children:e.jsx(O,{type:"submit",className:"w-full",loading:h,disabled:h,children:a["Update profile"]})})]})},Ue=({userData:r})=>{var T,P,$,I,C,F,V,M,B,x,ae,le,se,te,ne;const[o,b]=s.useState(((T=r==null?void 0:r.ncUserMeta)==null?void 0:T.youtubeUrl)||""),[d,p]=s.useState(((P=r==null?void 0:r.ncUserMeta)==null?void 0:P.facebookUrl)||""),[m,f]=s.useState((($=r==null?void 0:r.ncUserMeta)==null?void 0:$.twitterUrl)||""),[h,g]=s.useState(((I=r==null?void 0:r.ncUserMeta)==null?void 0:I.instagramUrl)||""),[c,n]=s.useState(((C=r==null?void 0:r.ncUserMeta)==null?void 0:C.githubUrl)||""),[u,j]=s.useState(((F=r==null?void 0:r.ncUserMeta)==null?void 0:F.linkedinUrl)||""),[N,H]=s.useState(((V=r==null?void 0:r.ncUserMeta)==null?void 0:V.twitchUrl)||""),[k,X]=s.useState(((M=r==null?void 0:r.ncUserMeta)==null?void 0:M.mediumUrl)||""),[w,Z]=s.useState(((B=r==null?void 0:r.ncUserMeta)==null?void 0:B.pinterestUrl)||""),[J,E]=s.useState(((x=r==null?void 0:r.ncUserMeta)==null?void 0:x.buymeacoffeUrl)||""),[v,K]=s.useState(((ae=r==null?void 0:r.ncUserMeta)==null?void 0:ae.vimeoUrl)||""),[A,D]=s.useState(((le=r==null?void 0:r.ncUserMeta)==null?void 0:le.tiktokUrl)||""),[L,W]=s.useState(((se=r==null?void 0:r.ncUserMeta)==null?void 0:se.telegramUrl)||""),[S,R]=s.useState(((te=r==null?void 0:r.ncUserMeta)==null?void 0:te.whatsappUrl)||""),[z,G]=s.useState(((ne=r==null?void 0:r.ncUserMeta)==null?void 0:ne.discordUrl)||""),{data:ee,error:y,loading:_,mutationUpdateUser:Y}=Q(),q=l=>{l.preventDefault(),Y({variables:{id:r.id,ncmazYoutubeUrl:o,ncmazFacebookUrl:d,ncmazTwitterUrl:m,ncmazInstagramUrl:h,ncmazGithubUrl:c,ncmazLinkedinUrl:u,ncmazTwitchUrl:N,ncmazMediumUrl:k,ncmazPinterestUrl:w,ncmazVimeoUrl:v,ncmazBuymeacoffeUrl:J,ncmazTiktokUrl:A,ncmazWhatsappUrl:S,ncmazTelegramUrl:L,ncmazDiscordUrl:z}})};return e.jsxs("form",{action:"#",onSubmit:q,className:"NcmazAccountPage-SocialsProfileForm space-y-5 sm:space-y-6 md:sm:space-y-7",children:[e.jsxs("div",{className:"SocialsProfileForm__heading",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:a["Social profiles"]}),e.jsx("span",{className:"block mt-1 text-sm text-neutral-500 dark:text-neutral-400",children:a["Add elsewhere links to your profile"]})]}),e.jsx("div",{className:"w-24 border-b border-neutral-200 dark:border-neutral-700"}),e.jsxs("div",{className:"SocialsProfileForm__fieldsWrap grid grid-cols-1 sm:grid-cols-2 gap-5 ",children:[e.jsxs("div",{className:"SocialsProfileForm__Youtube",children:[e.jsx(t,{children:a.Youtube}),e.jsxs("div",{className:"mt-1.5 flex",children:[e.jsx("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e.jsx("i",{className:"text-2xl lab la-youtube"})}),e.jsx(i,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://www.youtube.com/channel/yourname",defaultValue:o,onChange:l=>b(l.currentTarget.value)})]})]}),e.jsxs("div",{className:"SocialsProfileForm__Facebook",children:[e.jsx(t,{children:a.Facebook}),e.jsxs("div",{className:"mt-1.5 flex",children:[e.jsx("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e.jsx("i",{className:"text-2xl lab la-facebook-f"})}),e.jsx(i,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://www.facebook.com/yourname",defaultValue:d,onChange:l=>p(l.currentTarget.value)})]})]}),e.jsxs("div",{className:"SocialsProfileForm__Medium",children:[e.jsx(t,{children:a.Medium}),e.jsxs("div",{className:"mt-1.5 flex",children:[e.jsx("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e.jsx("i",{className:"text-2xl lab la-medium"})}),e.jsx(i,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://medium.com/@yourname",defaultValue:k,onChange:l=>X(l.currentTarget.value)})]})]}),e.jsxs("div",{className:"SocialsProfileForm__Github",children:[e.jsxs(t,{children:[a.Github," "]}),e.jsxs("div",{className:"mt-1.5 flex",children:[e.jsx("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e.jsx("i",{className:"text-2xl lab la-github"})}),e.jsx(i,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://github.com/yourname",defaultValue:c,onChange:l=>n(l.currentTarget.value)})]})]}),e.jsxs("div",{className:"SocialsProfileForm__Vimeo",children:[e.jsxs(t,{children:[a.Vimeo," "]}),e.jsxs("div",{className:"mt-1.5 flex",children:[e.jsx("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e.jsx("i",{className:"text-2xl lab la-vimeo"})}),e.jsx(i,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://vimeo.com/yourname",defaultValue:v,onChange:l=>K(l.currentTarget.value)})]})]}),e.jsxs("div",{className:"SocialsProfileForm__Twitter",children:[e.jsx(t,{children:a.Twitter}),e.jsxs("div",{className:"mt-1.5 flex",children:[e.jsx("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e.jsx("i",{className:"text-2xl lab la-twitter"})}),e.jsx(i,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://twitter.com/yourname",defaultValue:m,onChange:l=>f(l.currentTarget.value)})]})]}),e.jsxs("div",{className:"SocialsProfileForm__Instagram",children:[e.jsxs(t,{children:[a.Instagram," "]}),e.jsxs("div",{className:"mt-1.5 flex",children:[e.jsx("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e.jsx("i",{className:"text-2xl lab la-instagram"})}),e.jsx(i,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://instagram.com/yourname",defaultValue:h,onChange:l=>g(l.currentTarget.value)})]})]}),e.jsxs("div",{className:"SocialsProfileForm__Linkedin",children:[e.jsxs(t,{children:[a.Linkedin," "]}),e.jsxs("div",{className:"mt-1.5 flex",children:[e.jsx("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e.jsx("i",{className:"text-2xl lab la-linkedin"})}),e.jsx(i,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://linkedin.com/in/yourname",defaultValue:u,onChange:l=>j(l.currentTarget.value)})]})]}),e.jsxs("div",{className:"SocialsProfileForm__Pinterest",children:[e.jsxs(t,{children:[a.Pinterest," "]}),e.jsxs("div",{className:"mt-1.5 flex",children:[e.jsx("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e.jsx("i",{className:"text-2xl lab la-pinterest"})}),e.jsx(i,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://pinterest.com/yourname",defaultValue:w,onChange:l=>Z(l.currentTarget.value)})]})]}),e.jsxs("div",{className:"SocialsProfileForm__Twitch",children:[e.jsxs(t,{children:[a.Twitch," "]}),e.jsxs("div",{className:"mt-1.5 flex",children:[e.jsx("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e.jsx("i",{className:"text-2xl lab la-twitch"})}),e.jsx(i,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://twitch.com/yourname",defaultValue:N,onChange:l=>H(l.currentTarget.value)})]})]}),e.jsxs("div",{className:"SocialsProfileForm__Tiktok",children:[e.jsxs(t,{children:[a.Tiktok," "]}),e.jsxs("div",{className:"mt-1.5 flex",children:[e.jsx("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e.jsx("svg",{className:"w-5 h-5 opacity-50 dark:opacity-100",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:e.jsx("path",{d:"M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"})})}),e.jsx(i,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://tiktok.com/yourname",defaultValue:A,onChange:l=>D(l.currentTarget.value)})]})]}),e.jsxs("div",{className:"SocialsProfileForm__Telegram",children:[e.jsxs(t,{children:[a.Telegram," "]}),e.jsxs("div",{className:"mt-1.5 flex",children:[e.jsx("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e.jsx("i",{className:"text-2xl lab la-telegram"})}),e.jsx(i,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://telegram.com/yourname",defaultValue:L,onChange:l=>W(l.currentTarget.value)})]})]}),e.jsxs("div",{className:"SocialsProfileForm__Whatsapp",children:[e.jsxs(t,{children:[a.Whatsapp," "]}),e.jsxs("div",{className:"mt-1.5 flex",children:[e.jsx("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e.jsx("i",{className:"text-2xl lab la-whatsapp"})}),e.jsx(i,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://whatsapp.com/yourname",defaultValue:S,onChange:l=>R(l.currentTarget.value)})]})]}),e.jsxs("div",{className:"SocialsProfileForm__Discord",children:[e.jsxs(t,{children:[a.Discord," "]}),e.jsxs("div",{className:"mt-1.5 flex",children:[e.jsx("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e.jsx("i",{className:"text-2xl lab la-discord"})}),e.jsx(i,{className:"!rounded-l-none",sizeClass:"h-11 px-4 pl-2 pr-3",placeholder:"https://discord.com/yourname",defaultValue:z,onChange:l=>G(l.currentTarget.value)})]})]}),e.jsxs("div",{className:"SocialsProfileForm__Buymeacoffe sm:col-span-2",children:[e.jsxs(t,{children:[a.Buymeacoffe," "]}),e.jsxs("span",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:[a["You should have an account here:"]," "," ",a["buymeacoffee.com"]&&e.jsx("a",{href:"https://"+a["buymeacoffee.com"],target:"_blank",rel:"noopener noreferrer",className:"ml-1 underline",children:a["buymeacoffee.com"]})]}),e.jsxs("div",{className:"mt-1.5 flex",children:[e.jsx("span",{className:"inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm",children:e.jsx("i",{className:"text-2xl las la-coffee"})}),e.jsx(i,{className:"!rounded-l-none",placeholder:a["https://buymeacoffee.com/yourname"],sizeClass:"h-11 px-4 pl-2 pr-3",defaultValue:J,onChange:l=>E(l.currentTarget.value)})]})]})]}),y&&e.jsx(U,{type:"error",children:y.message}),e.jsx("div",{className:"SocialsProfileForm__submit pt-2 inline-flex",children:e.jsx(O,{type:"submit",loading:_,disabled:_,className:"w-full",children:a["Update profile"]})})]})},Te=()=>{const[r,o]=s.useState("general"),b=oe`
    ${pe}
  `,[d,{error:p,data:m,loading:f}]=xe(b,{notifyOnNetworkStatusChange:!0});if(re.useEffect(()=>{var c,n;(c=frontendObject.currentUser)!=null&&c.databaseId&&d({variables:{id:Number((n=frontendObject.currentUser)==null?void 0:n.databaseId)}})},[]),re.useEffect(()=>{const c=window.location.search,u=new URLSearchParams(c).get("tab");!u||!["general","profile","password","socials"].includes(u)||(o(u||"general"),window.scrollTo(0,0))},[]),p)return e.jsx(U,{type:"error",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:`${p.message}
          <a
            class="underline ml-2"
            href="javascript:window.location.href=window.location.href"
          >
            Reload
          </a>`}})});if(f)return e.jsx(de,{});if(!m||!m.user)return e.jsx(U,{type:"error",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:` ${a.somethingWentWrong}
          <a
            class="underline ml-2"
            href="javascript:window.location.href=window.location.href"
          >
            Reload
          </a>`}})});const h=(c,n)=>{c.preventDefault(),n!==r&&(o(n),window.scrollTo(0,0),window.history.pushState(null,"",`?tab=${n}`))},g=()=>{const c=["general","profile","password","socials"];return e.jsx("div",{className:"md:sticky md:top-32",children:e.jsxs("ul",{className:"space-y-4 md:space-y-5 md:pr-10",children:[c.map(n=>{const u=r===n;return e.jsx("li",{children:e.jsx("a",{className:`capitalize  ${u?"text-neutral-900 dark:text-neutral-100 font-semibold":"text-neutral-500 dark:text-neutral-400"}`,onClick:j=>h(j,n),href:`#${n}`,children:a[n]})},n)}),e.jsx("div",{className:"w-full border-b-2 border-neutral-100 dark:border-neutral-700"}),e.jsx("li",{className:"warning",children:e.jsx("a",{className:"text-red-500",href:frontendObject.wpLogoutUrl||"#",children:a["Logout Account"]})})]})})};return e.jsxs("div",{className:"nc-NcmazAccountPage__content ",children:[e.jsx("div",{className:"w-full border-b-2 border-neutral-100 dark:border-neutral-700"}),e.jsxs("div",{className:"mt-10 flex flex-col md:flex-row",children:[e.jsx("div",{className:"nc-NcmazAccountPage__content-left flex-shrink-0 md:w-1/4",children:g()}),e.jsxs("div",{className:"nc-NcmazAccountPage__content-right flex-grow mt-10 md:mt-0 xl:pl-16 max-w-3xl ",children:[r==="general"&&e.jsx(fe,{userData:m.user}),r==="profile"&&e.jsx(ge,{userData:m.user}),r==="password"&&e.jsx(be,{userData:m.user}),r==="socials"&&e.jsx(Ue,{userData:m.user})]})]})]})};export{Te as default};
