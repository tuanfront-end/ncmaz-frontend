import{r as c,k as e}from"./main.9a4c9a70.js";import{u as M}from"./useQuery.242ac0b5.js";var x=["refetch","fetchMore","updateQuery","startPolling","subscribeToMore"];function j(h,l){var d=c.exports.useState({called:!1}),s=d[0],i=d[1],r=M(h,e(e(e({},l),s.options),{fetchPolicy:s.called?l==null?void 0:l.fetchPolicy:"standby",skip:void 0}));s.called||(r=e(e({},r),{loading:!1,data:void 0,error:void 0,called:!1}));var f=c.exports.useMemo(function(){for(var a={},n=function(v){var b=r[v];a[v]=function(){for(var g=[],u=0;u<arguments.length;u++)g[u]=arguments[u];return i(function(y){return e(e({},y),{called:!0})}),b.apply(void 0,g)}},t=0,o=x;t<o.length;t++){var p=o[t];n(p)}return a},[]);r.error=r.error||void 0,Object.assign(r,f);var m=c.exports.useCallback(function(a){i({called:!0,options:a});var n=r.refetch(a==null?void 0:a.variables).then(function(t){var o=e(e({},r),{data:t.data,error:t.error,called:!0,loading:!1});return Object.assign(o,f),o});return n.catch(function(){}),n},[]);return[m,r]}export{j as u};