import{c as a}from"../chunks/index.523fac41.js";import{s as c,a as u}from"../chunks/supabase.2c784bff.js";import{S as l,i as g,b as f,d as p,m,t as d,a as _,e as b}from"../chunks/index.a2391391.js";import{s as y}from"../chunks/scheduler.ee52cacd.js";import{C as h}from"../chunks/index.7b07177d.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="9bf3d880-7669-4f25-be1b-12270a21549c",n._sentryDebugIdIdentifier="sentry-dbid-9bf3d880-7669-4f25-be1b-12270a21549c")}catch{}})();c||u();const w=async({params:n={slug:""}})=>{const{data:e}=await a(void 0,n.slug),o=Object.freeze({title:e==null?void 0:e.title,description:e==null?void 0:e.description,openGraph:{title:e==null?void 0:e.title,description:e==null?void 0:e.description,images:[{url:(e==null?void 0:e.logo)||"",alt:e==null?void 0:e.title,width:280,height:200,secureUrl:e==null?void 0:e.logo,type:"image/jpeg"}]},twitter:{handle:"@",site:"@",cardType:"summary_large_image",title:e==null?void 0:e.title,description:e==null?void 0:e.description,image:e==null?void 0:e.logo,imageAlt:"ClassroomIO OG Image"}});return{slug:n.slug,course:e,pageMetaTags:o}},v=Object.freeze(Object.defineProperty({__proto__:null,load:w},Symbol.toStringTag,{value:"Module"}));function D(n){let e,o;return e=new h({props:{courseData:n[0]}}),{c(){f(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,r){m(e,t,r),o=!0},p(t,[r]){const i={};r&1&&(i.courseData=t[0]),e.$set(i)},i(t){o||(d(e.$$.fragment,t),o=!0)},o(t){_(e.$$.fragment,t),o=!1},d(t){b(e,t)}}}function I(n,e,o){let{data:t}=e,r;function i(s){s&&o(0,r={...s})}return n.$$set=s=>{"data"in s&&o(1,t=s.data)},n.$$.update=()=>{n.$$.dirty&2&&i(t.course)},[r,t]}class P extends l{constructor(e){super(),g(this,e,I,D,y,{data:1})}}export{P as component,v as universal};
//# sourceMappingURL=9.61b90dd0.js.map
