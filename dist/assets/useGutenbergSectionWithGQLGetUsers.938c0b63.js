import{a9 as U,aa as Y,af as y,ag as c}from"./main.69fc0c0d.js";function q({graphQLvariables:_,graphQLData:o}){const u=!_&&!!o;let n="";(_==null?void 0:_.queryString)==="GQL_QUERY_GET_USERS_BY_SPECIFIC"&&(n=y),(_==null?void 0:_.queryString)==="GQL_QUERY_GET_USERS_BY_FILTER"&&(n=c);const s=u?"":U`
        ${n}
      `;let t,e,E,G=()=>{};if(u)t=o;else{const[R,S]=Y(s,{notifyOnNetworkStatusChange:!0,variables:_==null?void 0:_.variables});G=R,t=S.data,e=S.loading,E=S.error}const T=(t==null?void 0:t.users.edges)||[],I=e&&!T.length;return{LISTS_DATA:T,IS_SKELETON:I,error:E,loading:e,funcGqlQueryGetUsers:G,DONOT_ANY_THING:!t&&!e&&!E}}export{q as u};
