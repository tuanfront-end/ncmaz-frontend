import{an as U,ao as Y}from"./main.85963571.js";import{g as y}from"./useQuery.02694860.js";import{u as c}from"./useLazyQuery.f1e3d5e8.js";function C({graphQLvariables:_,graphQLData:E}){const S=!_&&!!E;let e="";(_==null?void 0:_.queryString)==="GQL_QUERY_GET_USERS_BY_SPECIFIC"&&(e=U),(_==null?void 0:_.queryString)==="GQL_QUERY_GET_USERS_BY_FILTER"&&(e=Y);const s=S?"":y`
        ${e}
      `;let t,o,n,G=()=>{};if(S)t=E;else{const[R,u]=c(s,{notifyOnNetworkStatusChange:!0,variables:_==null?void 0:_.variables});G=R,t=u.data,o=u.loading,n=u.error}const T=(t==null?void 0:t.users.edges)||[],I=o&&!T.length;return{LISTS_DATA:T,IS_SKELETON:I,error:n,loading:o,funcGqlQueryGetUsers:G,DONOT_ANY_THING:!t&&!o&&!n}}export{C as u};