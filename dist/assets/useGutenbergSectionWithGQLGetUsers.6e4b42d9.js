import{$ as U,a0 as y,a6 as Y,a7 as c}from"./main.5ffc876d.js";function q({graphQLvariables:t,graphQLData:S}){const u=!t&&!!S;let e="";(t==null?void 0:t.queryString)==="GQL_QUERY_GET_USERS_BY_SPECIFIC"&&(e=Y),(t==null?void 0:t.queryString)==="GQL_QUERY_GET_USERS_BY_FILTER"&&(e=c);const R=u?"":U`
        ${e}
      `;let _,n,o,G=()=>{};if(u)_=S;else{const[T,E]=y(R,{notifyOnNetworkStatusChange:!0,variables:t==null?void 0:t.variables});G=T,_=E.data,n=E.loading,o=E.error}const s=(_==null?void 0:_.users.edges)||[],I=n&&!s.length;return{LISTS_DATA:s,IS_SKELETON:I,error:o,loading:n,funcGqlQueryGetUsers:G}}export{q as u};
