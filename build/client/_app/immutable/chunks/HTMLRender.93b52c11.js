import{s as p,C as I,D,b as M,d as u,e as d,L as b,i as w,R as v,S as H,o as g,T as N,n as y,q as T,u as W,r as C,v as E}from"./scheduler.ee52cacd.js";import{S as L,i as R,g as S,a as m,c as q,t as h}from"./index.a2391391.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[e]="43d80dc6-ce21-4fc3-a3f1-4e9860b8e9cd",i._sentryDebugIdIdentifier="sentry-dbid-43d80dc6-ce21-4fc3-a3f1-4e9860b8e9cd")}catch{}})();const A=i=>({}),k=i=>({});function j(i){let e,s;return{c(){e=new H(!1),s=g(),this.h()},l(t){e=N(t,!1),s=g(),this.h()},h(){e.a=s},m(t,n){e.m(i[0],t,n),w(t,s,n)},p(t,n){n&1&&e.p(t[0])},i:y,o:y,d(t){t&&(u(s),e.d())}}}function z(i){let e;const s=i[6].content,t=T(s,i,i[5],k);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&32)&&W(t,s,n,n[5],e?E(s,n[5],o,A):C(n[5]),k)},i(n){e||(h(t,n),e=!0)},o(n){m(t,n),e=!1},d(n){t&&t.d(n)}}}function B(i){let e,s,t,n,o;const r=[z,j],c=[];function f(a,l){return a[4].content?0:1}return s=f(i),t=c[s]=r[s](i),{c(){e=I("article"),t.c(),this.h()},l(a){e=D(a,"ARTICLE",{id:!0,class:!0});var l=M(e);t.l(l),l.forEach(u),this.h()},h(){d(e,"id",i[2]),d(e,"class",n="preview prose prose-sm sm:prose "+i[1]+" dark:text-white"),b(e,"max-width",i[3]?"unset":void 0)},m(a,l){w(a,e,l),c[s].m(e,null),o=!0},p(a,[l]){let _=s;s=f(a),s===_?c[s].p(a,l):(S(),m(c[_],1,1,()=>{c[_]=null}),q(),t=c[s],t?t.p(a,l):(t=c[s]=r[s](a),t.c()),h(t,1),t.m(e,null)),(!o||l&4)&&d(e,"id",a[2]),(!o||l&2&&n!==(n="preview prose prose-sm sm:prose "+a[1]+" dark:text-white"))&&d(e,"class",n),l&8&&b(e,"max-width",a[3]?"unset":void 0)},i(a){o||(h(t),o=!0)},o(a){m(t),o=!1},d(a){a&&u(e),c[s].d()}}}function F(i,e,s){let{$$slots:t={},$$scope:n}=e;const o=v(t);let{content:r=""}=e,{className:c=""}=e,{id:f=""}=e,{disableMaxWidth:a=!1}=e;return i.$$set=l=>{"content"in l&&s(0,r=l.content),"className"in l&&s(1,c=l.className),"id"in l&&s(2,f=l.id),"disableMaxWidth"in l&&s(3,a=l.disableMaxWidth),"$$scope"in l&&s(5,n=l.$$scope)},[r,c,f,a,o,n,t]}class K extends L{constructor(e){super(),R(this,e,F,B,p,{content:0,className:1,id:2,disableMaxWidth:3})}}export{K as H};
//# sourceMappingURL=HTMLRender.93b52c11.js.map
