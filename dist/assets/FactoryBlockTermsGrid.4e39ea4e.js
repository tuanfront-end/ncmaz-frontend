import{r as L,a as b,b as c,j as e}from"./main.8abeeeff.js";import{B as x}from"./BackgroundSection.349d0f20.js";import{S as N}from"./SectionGridCategoryBox.34ddbffc.js";import{D as v}from"./DataStatementBlockV2.7e9dae2f.js";import{u as A}from"./useGqlQuerySection.07559ab9.js";import{u as D}from"./useGutenbergSectionWithGQLGetTerms.4e33949a.js";import"./CardCategory1Skeleton.46029e39.js";import"./NcImage.026c7f82.js";import"./index.3d396dd3.js";import"./CardCategory5Skeleton.e57432d9.js";import"./Badge.216dcd73.js";import"./Heading.038abcf6.js";import"./NextPrev.8d76ec03.js";import"./EmptyState.344d6b90.js";import"./useIntersectionObserver.6afb6db3.js";import"./useQuery.fe519250.js";import"./useLazyQuery.05ec0b94.js";const z=({className:l="",domNode:p,apiSettings:d,sectionIndex:u})=>{const{graphQLvariables:t,graphQLData:o,settings:a}=d,g=!t&&!!o,{IS_SKELETON:s,LIST_TERMS:i,error:S,funcGqlQueryGetTerms:y}=D({graphQLvariables:t,graphQLData:o});let r=null;g?r=L.exports.useRef(null):r=A(y,u).ref;const f=()=>{const{hasBackground:C,subHeading:k,heading:G,termCardName:T,gridClass:h,gridClassCustom:m,blockLayoutStyle:B}=a,n=C;return c("div",{className:`nc-FactoryBlockTermsGrid relative  ${n?"py-16":""}  ${l}`,ref:r,children:[n&&e(x,{}),c("div",{className:"relative",children:[e(N,{categories:i,heading:G,subHeading:k,headingCenter:B==="layout-1",categoryCardType:T,gridClass:m||h,isLoadingSkeleton:s,isLoadingSkeletonArr:Array.from(Array(Number(a.expectedNumberResults||8)||8).keys())}),e(v,{data:i,isSkeleton:s,error:S})]})]})};return b.createPortal(f(),p)};export{z as default};
