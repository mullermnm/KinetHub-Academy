import{s as M,g as _,a as u,c as h,b as g,d as f,e as m,h as b,i as H,f as c,n as v,j as w,k as p,t as V,l as y,m as E}from"./scheduler.ee52cacd.js";import{g as I}from"./spread.5cc747ed.js";import{S as k,i as C}from"./index.a2391391.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="5906c841-3355-425f-b142-62ea7497f73e",a._sentryDebugIdIdentifier="sentry-dbid-5906c841-3355-425f-b142-62ea7497f73e")}catch{}})();function z(a){let e,s;return{c(){e=u("title"),s=V(a[1])},l(l){e=h(l,"title",{});var t=g(e);s=y(t,a[1]),t.forEach(f)},m(l,t){H(l,e,t),c(e,s)},p(l,t){t&2&&E(s,l[1])},d(l){l&&f(e)}}}function D(a){let e,s,l,t=a[1]&&z(a),d=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:a[0]},{height:a[0]},a[2],a[3]],n={};for(let i=0;i<d.length;i+=1)n=_(n,d[i]);return{c(){e=u("svg"),t&&t.c(),s=u("path"),l=u("path"),this.h()},l(i){e=h(i,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var r=g(e);t&&t.l(r),s=h(r,"path",{d:!0}),g(s).forEach(f),l=h(r,"path",{d:!0}),g(l).forEach(f),r.forEach(f),this.h()},h(){m(s,"d","M12 12H14V24H12zM18 12H20V24H18z"),m(l,"d","M4 6V8H6V28a2 2 0 002 2H24a2 2 0 002-2V8h2V6zM8 28V8H24V28zM12 2H20V4H12z"),b(e,n)},m(i,r){H(i,e,r),t&&t.m(e,null),c(e,s),c(e,l)},p(i,[r]){i[1]?t?t.p(i,r):(t=z(i),t.c(),t.m(e,s)):t&&(t.d(1),t=null),b(e,n=I(d,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},r&1&&{width:i[0]},r&1&&{height:i[0]},r&4&&i[2],r&8&&i[3]]))},i:v,o:v,d(i){i&&f(e),t&&t.d()}}}function A(a,e,s){let l,t;const d=["size","title"];let n=w(e,d),{size:i=16}=e,{title:r=void 0}=e;return a.$$set=o=>{s(5,e=_(_({},e),p(o))),s(3,n=w(e,d)),"size"in o&&s(0,i=o.size),"title"in o&&s(1,r=o.title)},a.$$.update=()=>{s(4,l=e["aria-label"]||e["aria-labelledby"]||r),s(2,t={"aria-hidden":l?void 0:!0,role:l?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=p(e),[i,r,t,n,l]}class S extends k{constructor(e){super(),C(this,e,A,D,M,{size:0,title:1})}}export{S as T};
//# sourceMappingURL=TrashCan.b6b32865.js.map