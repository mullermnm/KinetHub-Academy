import{w as t}from"./index.45ef5fca.js";import"./index.a2391391.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="73d00cbd-bec8-426a-8fdc-5bbfc933da14",a._sentryDebugIdIdentifier="sentry-dbid-73d00cbd-bec8-426a-8fdc-5bbfc933da14")}catch{}})();const s={ERROR:"ERROR",WARNING:"WARNING",DEFAULT:"DEFAULT",INFO:"INFO",SUCCESS:"SUCCESS"},r={open:!1,message:"",severity:s.DEFAULT,handleClose:()=>{},autoHideDuration:6e3},n=t({...r}),i={success(a="snackbar.success"){n.update(e=>(e.open=!0,e.message=a,e.severity=s.SUCCESS,e))},error(a="snackbar.something"){n.update(e=>(e.open=!0,e.message=a,e.severity=s.ERROR,e))},info(a="snackbar.updates"){n.update(e=>(e.open=!0,e.message=a,e.severity=s.INFO,e))}};export{s as S,n as a,r as b,i as s};
//# sourceMappingURL=store.21c1b842.js.map