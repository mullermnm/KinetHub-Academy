import{s as fe,p as H,x as N,z as T,i as D,d as w,E as $e,C as A,t as Z,D as V,b as R,l as x,e as S,f as P,m as ee,w as K,A as j,o as te,Q as pe}from"../chunks/scheduler.ee52cacd.js";import{S as oe,i as ie,b as g,d as c,m as _,t as m,a as p,e as d,f as B,g as ge,c as ce}from"../chunks/index.a2391391.js";import{e as ae}from"../chunks/each.4f9c2159.js";import{p as _e}from"../chunks/stores.5de49fb7.js";import{T as M}from"../chunks/TextField.05bb724d.js";import{P as de,V as be}from"../chunks/index.550ce75a.js";import{U as he}from"../chunks/index.f360203c.js";import{s as X}from"../chunks/supabase.2c784bff.js";import{p as y}from"../chunks/user.9ccdc884.js";import{s as ne}from"../chunks/store.21c1b842.js";import{g as we,L as ve,T as ke,a as le,b as Ce,I as Ie}from"../chunks/Integrations.c0dec383.js";import{t as ue,h as De}from"../chunks/translations.f943b7b3.js";import{G as Le,R as Y,C as O}from"../chunks/Column.85a33c57.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="7598a1b7-cd69-4e27-b330-bceac005758b",r._sentryDebugIdIdentifier="sentry-dbid-7598a1b7-cd69-4e27-b330-bceac005758b")}catch{}})();function Ee(r){let t,l=r[4]("settings.profile.profile_picture.heading")+"",e;return{c(){t=A("p"),e=Z(l),this.h()},l(n){t=V(n,"P",{class:!0});var a=R(t);e=x(a,l),a.forEach(w),this.h()},h(){S(t,"class","dark:text-white font-bold")},m(n,a){D(n,t,a),P(t,e)},p(n,a){a&16&&l!==(l=n[4]("settings.profile.profile_picture.heading")+"")&&ee(e,l)},d(n){n&&w(t)}}}function Ne(r){let t,l,e;function n(s){r[6](s)}let a={src:r[0].avatar_url,widthHeight:"w-16 h-16 lg:w-24 lg:h-24"};return r[1]!==void 0&&(a.avatar=r[1]),t=new he({props:a}),K.push(()=>B(t,"avatar",n)),{c(){g(t.$$.fragment)},l(s){c(t.$$.fragment,s)},m(s,f){_(t,s,f),e=!0},p(s,f){const o={};f&1&&(o.src=s[0].avatar_url),!l&&f&2&&(l=!0,o.avatar=s[1],j(()=>l=!1)),t.$set(o)},i(s){e||(m(t.$$.fragment,s),e=!0)},o(s){p(t.$$.fragment,s),e=!1},d(s){d(t,s)}}}function Te(r){let t,l,e,n;return t=new O({props:{sm:4,md:8,lg:4,class:"mt-2 md:mt-0",$$slots:{default:[Ee]},$$scope:{ctx:r}}}),e=new O({props:{sm:2,md:4,lg:8,class:"mt-2 lg:mt-0",$$slots:{default:[Ne]},$$scope:{ctx:r}}}),{c(){g(t.$$.fragment),l=N(),g(e.$$.fragment)},l(a){c(t.$$.fragment,a),l=T(a),c(e.$$.fragment,a)},m(a,s){_(t,a,s),D(a,l,s),_(e,a,s),n=!0},p(a,s){const f={};s&8208&&(f.$$scope={dirty:s,ctx:a}),t.$set(f);const o={};s&8195&&(o.$$scope={dirty:s,ctx:a}),e.$set(o)},i(a){n||(m(t.$$.fragment,a),m(e.$$.fragment,a),n=!0)},o(a){p(t.$$.fragment,a),p(e.$$.fragment,a),n=!1},d(a){a&&w(l),d(t,a),d(e,a)}}}function Pe(r){let t,l=r[4]("settings.profile.personal_information.heading")+"",e;return{c(){t=A("p"),e=Z(l),this.h()},l(n){t=V(n,"P",{class:!0});var a=R(t);e=x(a,l),a.forEach(w),this.h()},h(){S(t,"class","dark:text-white font-bold")},m(n,a){D(n,t,a),P(t,e)},p(n,a){a&16&&l!==(l=n[4]("settings.profile.personal_information.heading")+"")&&ee(e,l)},d(n){n&&w(t)}}}function Ue(r){let t,l,e,n,a,s,f,o,$,b,k,U,L;function h(i){r[7](i)}let C={label:r[4]("settings.profile.personal_information.full_name"),className:"w-full lg:w-60 mb-4"};r[0].fullname!==void 0&&(C.value=r[0].fullname),t=new M({props:C}),K.push(()=>B(t,"value",h));function u(i){r[8](i)}let I={label:r[4]("settings.profile.personal_information.username"),className:"w-full lg:w-60 mb-4"};r[0].username!==void 0&&(I.value=r[0].username),n=new M({props:I}),K.push(()=>B(n,"value",u));function E(i){r[9](i)}let q={label:r[4]("settings.profile.personal_information.email"),className:"w-full lg:w-60 mb-4"};r[0].email!==void 0&&(q.value=r[0].email),f=new M({props:q}),K.push(()=>B(f,"value",E));function G(i){r[10](i)}function me(i){r[11](i)}let z={className:"w-full lg:w-60 mb-4"};return r[3]!==void 0&&(z.hasLangChanged=r[3]),r[0].locale!==void 0&&(z.value=r[0].locale),b=new ve({props:z}),K.push(()=>B(b,"hasLangChanged",G)),K.push(()=>B(b,"value",me)),{c(){g(t.$$.fragment),e=N(),g(n.$$.fragment),s=N(),g(f.$$.fragment),$=N(),g(b.$$.fragment)},l(i){c(t.$$.fragment,i),e=T(i),c(n.$$.fragment,i),s=T(i),c(f.$$.fragment,i),$=T(i),c(b.$$.fragment,i)},m(i,v){_(t,i,v),D(i,e,v),_(n,i,v),D(i,s,v),_(f,i,v),D(i,$,v),_(b,i,v),L=!0},p(i,v){const F={};v&16&&(F.label=i[4]("settings.profile.personal_information.full_name")),!l&&v&1&&(l=!0,F.value=i[0].fullname,j(()=>l=!1)),t.$set(F);const Q={};v&16&&(Q.label=i[4]("settings.profile.personal_information.username")),!a&&v&1&&(a=!0,Q.value=i[0].username,j(()=>a=!1)),n.$set(Q);const W={};v&16&&(W.label=i[4]("settings.profile.personal_information.email")),!o&&v&1&&(o=!0,W.value=i[0].email,j(()=>o=!1)),f.$set(W);const J={};!k&&v&8&&(k=!0,J.hasLangChanged=i[3],j(()=>k=!1)),!U&&v&1&&(U=!0,J.value=i[0].locale,j(()=>U=!1)),b.$set(J)},i(i){L||(m(t.$$.fragment,i),m(n.$$.fragment,i),m(f.$$.fragment,i),m(b.$$.fragment,i),L=!0)},o(i){p(t.$$.fragment,i),p(n.$$.fragment,i),p(f.$$.fragment,i),p(b.$$.fragment,i),L=!1},d(i){i&&(w(e),w(s),w($)),d(t,i),d(n,i),d(f,i),d(b,i)}}}function qe(r){let t,l,e,n;return t=new O({props:{sm:4,md:4,lg:4,$$slots:{default:[Pe]},$$scope:{ctx:r}}}),e=new O({props:{sm:8,md:8,lg:8,class:"mt-2 lg:mt-0",$$slots:{default:[Ue]},$$scope:{ctx:r}}}),{c(){g(t.$$.fragment),l=N(),g(e.$$.fragment)},l(a){c(t.$$.fragment,a),l=T(a),c(e.$$.fragment,a)},m(a,s){_(t,a,s),D(a,l,s),_(e,a,s),n=!0},p(a,s){const f={};s&8208&&(f.$$scope={dirty:s,ctx:a}),t.$set(f);const o={};s&8217&&(o.$$scope={dirty:s,ctx:a}),e.$set(o)},i(a){n||(m(t.$$.fragment,a),m(e.$$.fragment,a),n=!0)},o(a){p(t.$$.fragment,a),p(e.$$.fragment,a),n=!1},d(a){a&&w(l),d(t,a),d(e,a)}}}function ye(r){let t,l;return t=new de({props:{label:r[4]("settings.profile.update_profile"),variant:be.CONTAINED_DARK,className:"mr-5",isLoading:r[2],isDisabled:r[2],onClick:r[5]}}),{c(){g(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,n){_(t,e,n),l=!0},p(e,n){const a={};n&16&&(a.label=e[4]("settings.profile.update_profile")),n&4&&(a.isLoading=e[2]),n&4&&(a.isDisabled=e[2]),t.$set(a)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){p(t.$$.fragment,e),l=!1},d(e){d(t,e)}}}function Ae(r){let t,l,e,n,a,s;return t=new Y({props:{class:"flex flex-col lg:flex-row items-center lg:items-start py-7 border-bottom-c ",$$slots:{default:[Te]},$$scope:{ctx:r}}}),e=new Y({props:{class:"flex flex-col lg:flex-row py-7 border-bottom-c",$$slots:{default:[qe]},$$scope:{ctx:r}}}),a=new Y({props:{class:"m-5 w-full flex items-center gap-2 lg:justify-center",$$slots:{default:[ye]},$$scope:{ctx:r}}}),{c(){g(t.$$.fragment),l=N(),g(e.$$.fragment),n=N(),g(a.$$.fragment)},l(f){c(t.$$.fragment,f),l=T(f),c(e.$$.fragment,f),n=T(f),c(a.$$.fragment,f)},m(f,o){_(t,f,o),D(f,l,o),_(e,f,o),D(f,n,o),_(a,f,o),s=!0},p(f,o){const $={};o&8211&&($.$$scope={dirty:o,ctx:f}),t.$set($);const b={};o&8217&&(b.$$scope={dirty:o,ctx:f}),e.$set(b);const k={};o&8212&&(k.$$scope={dirty:o,ctx:f}),a.$set(k)},i(f){s||(m(t.$$.fragment,f),m(e.$$.fragment,f),m(a.$$.fragment,f),s=!0)},o(f){p(t.$$.fragment,f),p(e.$$.fragment,f),p(a.$$.fragment,f),s=!1},d(f){f&&(w(l),w(n)),d(t,f),d(e,f),d(a,f)}}}function Ve(r){let t,l;return t=new Le({props:{class:"border-c rounded border-gray-200 dark:border-neutral-600 w-full mt-5",$$slots:{default:[Ae]},$$scope:{ctx:r}}}),{c(){g(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,n){_(t,e,n),l=!0},p(e,[n]){const a={};n&8223&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){p(t.$$.fragment,e),l=!1},d(e){d(t,e)}}}function Re(r,t,l){let e,n;H(r,y,u=>l(0,e=u)),H(r,ue,u=>l(4,n=u));let a="",s=!1,f=!1,o="";async function $(){try{l(2,s=!0);const u={fullname:e.fullname,username:e.username,email:e.email,locale:o};if(a){const E=`user/${we()}.webp`,{data:q}=await X.storage.from("avatars").upload(E,a,{cacheControl:"3600",upsert:!1});if(q){const{data:G}=await X.storage.from("avatars").getPublicUrl(E);u.avatar_url=G.publicUrl,$e(y,e.avatar_url=G.publicUrl,e)}l(1,a=void 0)}let{error:I}=await X.from("profile").update(u).match({id:e.id});if(y.update(E=>({...E,...u})),ne.success(),f&&De(o),I)throw I}catch(u){let I=u.message;I.includes("profile_username_key")&&(I=n("username already exists")),ne.error(`snackbar.lms.error.update: ${I}`),l(2,s=!1)}finally{l(2,s=!1)}}function b(u){a=u,l(1,a)}function k(u){r.$$.not_equal(e.fullname,u)&&(e.fullname=u,y.set(e))}function U(u){r.$$.not_equal(e.username,u)&&(e.username=u,y.set(e))}function L(u){r.$$.not_equal(e.email,u)&&(e.email=u,y.set(e))}function h(u){f=u,l(3,f)}function C(u){r.$$.not_equal(e.locale,u)&&(e.locale=u,y.set(e))}return r.$$.update=()=>{r.$$.dirty&1&&(o=e.locale)},[e,a,s,f,n,$,b,k,U,L,h,C]}class Se extends oe{constructor(t){super(),ie(this,t,Re,Ve,fe,{})}}function se(r,t,l){const e=r.slice();return e[5]=t[l],e}function re(r){let t,l;return t=new Ce({props:{label:r[5].label,href:r[5].href}}),{c(){g(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,n){_(t,e,n),l=!0},p(e,n){const a={};n&4&&(a.label=e[5].label),n&4&&(a.href=e[5].href),t.$set(a)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){p(t.$$.fragment,e),l=!1},d(e){d(t,e)}}}function Ke(r){let t,l,e=ae(r[2]),n=[];for(let s=0;s<e.length;s+=1)n[s]=re(se(r,e,s));const a=s=>p(n[s],1,1,()=>{n[s]=null});return{c(){for(let s=0;s<n.length;s+=1)n[s].c();t=te()},l(s){for(let f=0;f<n.length;f+=1)n[f].l(s);t=te()},m(s,f){for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(s,f);D(s,t,f),l=!0},p(s,f){if(f&4){e=ae(s[2]);let o;for(o=0;o<e.length;o+=1){const $=se(s,e,o);n[o]?(n[o].p($,f),m(n[o],1)):(n[o]=re($),n[o].c(),m(n[o],1),n[o].m(t.parentNode,t))}for(ge(),o=e.length;o<n.length;o+=1)a(o);ce()}},i(s){if(!l){for(let f=0;f<e.length;f+=1)m(n[f]);l=!0}},o(s){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)p(n[f]);l=!1},d(s){s&&w(t),pe(n,s)}}}function je(r){let t,l;return t=new Se({}),{c(){g(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,n){_(t,e,n),l=!0},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){p(t.$$.fragment,e),l=!1},d(e){d(t,e)}}}function Be(r){let t,l;return t=new Ie({}),{c(){g(t.$$.fragment)},l(e){c(t.$$.fragment,e)},m(e,n){_(t,e,n),l=!0},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){p(t.$$.fragment,e),l=!1},d(e){d(t,e)}}}function Ge(r){let t,l,e,n;return t=new le({props:{$$slots:{default:[je]},$$scope:{ctx:r}}}),e=new le({props:{$$slots:{default:[Be]},$$scope:{ctx:r}}}),{c(){g(t.$$.fragment),l=N(),g(e.$$.fragment)},l(a){c(t.$$.fragment,a),l=T(a),c(e.$$.fragment,a)},m(a,s){_(t,a,s),D(a,l,s),_(e,a,s),n=!0},p(a,s){const f={};s&256&&(f.$$scope={dirty:s,ctx:a}),t.$set(f);const o={};s&256&&(o.$$scope={dirty:s,ctx:a}),e.$set(o)},i(a){n||(m(t.$$.fragment,a),m(e.$$.fragment,a),n=!0)},o(a){p(t.$$.fragment,a),p(e.$$.fragment,a),n=!1},d(a){a&&w(l),d(t,a),d(e,a)}}}function He(r){let t,l,e,n,a=r[0]("settings.heading")+"",s,f,o,$,b,k;function U(h){r[4](h)}let L={autoWidth:!0,$$slots:{content:[Ge],default:[Ke]},$$scope:{ctx:r}};return r[1]!==void 0&&(L.selected=r[1]),$=new ke({props:L}),K.push(()=>B($,"selected",U)),{c(){t=A("section"),l=A("div"),e=A("div"),n=A("h1"),s=Z(a),f=N(),o=A("div"),g($.$$.fragment),this.h()},l(h){t=V(h,"SECTION",{class:!0});var C=R(t);l=V(C,"DIV",{class:!0});var u=R(l);e=V(u,"DIV",{class:!0});var I=R(e);n=V(I,"H1",{class:!0});var E=R(n);s=x(E,a),E.forEach(w),I.forEach(w),f=T(u),o=V(u,"DIV",{class:!0});var q=R(o);c($.$$.fragment,q),q.forEach(w),u.forEach(w),C.forEach(w),this.h()},h(){S(n,"class","dark:text-white text-3xl font-bold"),S(e,"class","flex items-center justify-between mb-10"),S(o,"class",""),S(l,"class","py-10 px-5"),S(t,"class","w-full max-w-6xl mx-auto")},m(h,C){D(h,t,C),P(t,l),P(l,e),P(e,n),P(n,s),P(l,f),P(l,o),_($,o,null),k=!0},p(h,[C]){(!k||C&1)&&a!==(a=h[0]("settings.heading")+"")&&ee(s,a);const u={};C&260&&(u.$$scope={dirty:C,ctx:h}),!b&&C&2&&(b=!0,u.selected=h[1],j(()=>b=!1)),$.$set(u)},i(h){k||(m($.$$.fragment,h),k=!0)},o(h){p($.$$.fragment,h),k=!1},d(h){h&&w(t),d($)}}}function Oe(r,t,l){let e,n;H(r,_e,o=>l(3,e=o)),H(r,ue,o=>l(0,n=o));let a=0,s=[];function f(o){a=o,l(1,a)}return r.$$.update=()=>{r.$$.dirty&9&&l(2,s=[{key:0,label:n("settings.tabs.profile_tab"),tabKey:"",href:e.url.pathname},{key:1,label:n("settings.tabs.integrations_tab"),tabKey:"integrations",href:`${e.url.pathname}?tab=integrations`,disabled:!1}])},[n,a,s,e,f]}class nt extends oe{constructor(t){super(),ie(this,t,Oe,He,fe,{})}}export{nt as component};
//# sourceMappingURL=31.c13bf9a8.js.map