import{s as B,g as m,a as _,c as h,b as c,d as f,e as g,h as w,i as b,f as v,n as y,j as z,k,t as R,l as S,m as T,C as U,x as Y,D as q,z as H,N as L,H as O}from"./scheduler.ee52cacd.js";import{S as j,i as N,b as C,d as V,m as D,t as E,a as I,e as M}from"./index.a2391391.js";import{g as P}from"./spread.5cc747ed.js";import{C as F}from"./index.5d9eba69.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="9ea2fe0d-0f02-48b2-b7c7-95387b3a936b",n._sentryDebugIdIdentifier="sentry-dbid-9ea2fe0d-0f02-48b2-b7c7-95387b3a936b")}catch{}})();function A(n){let e,i;return{c(){e=_("title"),i=R(n[1])},l(t){e=h(t,"title",{});var a=c(e);i=S(a,n[1]),a.forEach(f)},m(t,a){b(t,e,a),v(e,i)},p(t,a){a&2&&T(i,t[1])},d(t){t&&f(e)}}}function G(n){let e,i,t=n[1]&&A(n),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],o={};for(let s=0;s<a.length;s+=1)o=m(o,a[s]);return{c(){e=_("svg"),t&&t.c(),i=_("path"),this.h()},l(s){e=h(s,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var r=c(e);t&&t.l(r),i=h(r,"path",{d:!0}),c(i).forEach(f),r.forEach(f),this.h()},h(){g(i,"d","M16 4L6 14 7.41 15.41 15 7.83 15 28 17 28 17 7.83 24.59 15.41 26 14 16 4z"),w(e,o)},m(s,r){b(s,e,r),t&&t.m(e,null),v(e,i)},p(s,[r]){s[1]?t?t.p(s,r):(t=A(s),t.c(),t.m(e,i)):t&&(t.d(1),t=null),w(e,o=P(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},r&1&&{width:s[0]},r&1&&{height:s[0]},r&4&&s[2],r&8&&s[3]]))},i:y,o:y,d(s){s&&f(e),t&&t.d()}}}function J(n,e,i){let t,a;const o=["size","title"];let s=z(e,o),{size:r=16}=e,{title:d=void 0}=e;return n.$$set=l=>{i(5,e=m(m({},e),k(l))),i(3,s=z(e,o)),"size"in l&&i(0,r=l.size),"title"in l&&i(1,d=l.title)},n.$$.update=()=>{i(4,t=e["aria-label"]||e["aria-labelledby"]||d),i(2,a={"aria-hidden":t?void 0:!0,role:t?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=k(e),[r,d,a,s,t]}class K extends j{constructor(e){super(),N(this,e,J,G,B,{size:0,title:1})}}function Q(n){let e,i,t,a,o,s,r,d;return i=new K({props:{size:16}}),a=new F({props:{value:n[0]}}),{c(){e=U("button"),C(i.$$.fragment),t=Y(),C(a.$$.fragment),this.h()},l(l){e=q(l,"BUTTON",{class:!0});var u=c(e);V(i.$$.fragment,u),t=H(u),V(a.$$.fragment,u),u.forEach(f),this.h()},h(){g(e,"class",o="vote border-none "+(n[2]?"cursor-not-allowed":"cursor-pointer")+" svelte-1shjk4z")},m(l,u){b(l,e,u),D(i,e,null),v(e,t),D(a,e,null),s=!0,r||(d=L(e,"click",function(){O(n[2]?void 0:n[1])&&(n[2]?void 0:n[1]).apply(this,arguments)}),r=!0)},p(l,[u]){n=l;const p={};u&1&&(p.value=n[0]),a.$set(p),(!s||u&4&&o!==(o="vote border-none "+(n[2]?"cursor-not-allowed":"cursor-pointer")+" svelte-1shjk4z"))&&g(e,"class",o)},i(l){s||(E(i.$$.fragment,l),E(a.$$.fragment,l),s=!0)},o(l){I(i.$$.fragment,l),I(a.$$.fragment,l),s=!1},d(l){l&&f(e),M(i),M(a),r=!1,d()}}}function W(n,e,i){let{value:t=0}=e,{upVote:a=()=>{}}=e,{disabled:o=!1}=e;return n.$$set=s=>{"value"in s&&i(0,t=s.value),"upVote"in s&&i(1,a=s.upVote),"disabled"in s&&i(2,o=s.disabled)},[t,a,o]}class ee extends j{constructor(e){super(),N(this,e,W,Q,B,{value:0,upVote:1,disabled:2})}}export{ee as V};
//# sourceMappingURL=index.9237e2d9.js.map