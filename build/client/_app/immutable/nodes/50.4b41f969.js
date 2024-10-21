import{s as te,w as F,x as S,y as ae,d as w,z as R,i as U,A as Y,p as V,C as z,D as B,b as Q,X as re,e as G,f as C,t as ie,l as oe,m as ne}from"../chunks/scheduler.ee52cacd.js";import{S as le,i as fe,f as H,b as q,d as M,m as N,t as j,a as L,e as O}from"../chunks/index.a2391391.js";import{g as W}from"../chunks/navigation.4bf4851d.js";import{p as ue}from"../chunks/stores.5de49fb7.js";import{T as X}from"../chunks/TextField.05bb724d.js";import{P as me}from"../chunks/index.550ce75a.js";import{a as de}from"../chunks/supabase.2c784bff.js";import{g as pe,a as ge,b as ce}from"../chunks/validator.b0d7db8b.js";import{S as Z}from"../chunks/authentication.9d48b2e5.js";import{A as _e}from"../chunks/index.817dabbc.js";import{p as x}from"../chunks/user.9ccdc884.js";import{h as be}from"../chunks/org.1ee4885a.js";import{c as ee}from"../chunks/index.287abee1.js";import{g as he}from"../chunks/app.bd3189d3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="6ddb6d7f-d4b2-4f52-ab66-6b6219fd7c53",e._sentryDebugIdIdentifier="sentry-dbid-6ddb6d7f-d4b2-4f52-ab66-6b6219fd7c53")}catch{}})();function se(e){let a,t;return{c(){a=z("p"),t=ie(e[3]),this.h()},l(f){a=B(f,"P",{class:!0});var u=Q(a);t=oe(u,e[3]),u.forEach(w),this.h()},h(){G(a,"class","text-sm text-red-500")},m(f,u){U(f,a,u),C(a,t)},p(f,u){u&8&&ne(t,f[3])},d(f){f&&w(a)}}}function we(e){let a,t,f="Create a free account",u,d,b,o,r,p,E,m,P,y,c,$,_,D;function J(s){e[8](s)}let A={label:"Your Email",type:"email",placeholder:"you@domain.com",className:"mb-6",inputClassName:"w-full",isDisabled:e[1],errorMessage:e[2].email,isRequired:!0};e[0].email!==void 0&&(A.value=e[0].email),d=new X({props:A}),F.push(()=>H(d,"value",J));function K(s){e[9](s)}let T={label:"Your Password",type:"password",placeholder:"************",className:"mb-6",inputClassName:"w-full",isDisabled:e[1],errorMessage:e[2].password,helperMessage:"Password must be more than 6 characters",isRequired:!0};e[0].password!==void 0&&(T.value=e[0].password),r=new X({props:T}),F.push(()=>H(r,"value",K));function l(s){e[10](s)}let I={label:"Confirm Password",type:"password",placeholder:"************",className:"mb-6",inputClassName:"w-full",isDisabled:e[1],errorMessage:e[2].confirmPassword,isRequired:!0};e[0].confirmPassword!==void 0&&(I.value=e[0].confirmPassword),m=new X({props:I}),F.push(()=>H(m,"value",l));let n=e[3]&&se(e);return _=new me({props:{label:"Create Account",type:"submit",className:"sm:w-full w-full",isDisabled:e[4]||e[1],isLoading:e[1]}}),{c(){a=z("div"),t=z("p"),t.textContent=f,u=S(),q(d.$$.fragment),o=S(),q(r.$$.fragment),E=S(),q(m.$$.fragment),y=S(),n&&n.c(),c=S(),$=z("div"),q(_.$$.fragment),this.h()},l(s){a=B(s,"DIV",{class:!0});var i=Q(a);t=B(i,"P",{class:!0,"data-svelte-h":!0}),re(t)!=="svelte-10rpjg0"&&(t.textContent=f),u=R(i),M(d.$$.fragment,i),o=R(i),M(r.$$.fragment,i),E=R(i),M(m.$$.fragment,i),y=R(i),n&&n.l(i),i.forEach(w),c=R(s),$=B(s,"DIV",{class:!0});var g=Q($);M(_.$$.fragment,g),g.forEach(w),this.h()},h(){G(t,"class","dark:text-white text-lg font-semibold mb-6"),G(a,"class","mt-4 w-full"),G($,"class","my-4 w-full flex justify-end items-center")},m(s,i){U(s,a,i),C(a,t),C(a,u),N(d,a,null),C(a,o),N(r,a,null),C(a,E),N(m,a,null),C(a,y),n&&n.m(a,null),U(s,c,i),U(s,$,i),N(_,$,null),D=!0},p(s,i){const g={};i&2&&(g.isDisabled=s[1]),i&4&&(g.errorMessage=s[2].email),!b&&i&1&&(b=!0,g.value=s[0].email,Y(()=>b=!1)),d.$set(g);const k={};i&2&&(k.isDisabled=s[1]),i&4&&(k.errorMessage=s[2].password),!p&&i&1&&(p=!0,k.value=s[0].password,Y(()=>p=!1)),r.$set(k);const v={};i&2&&(v.isDisabled=s[1]),i&4&&(v.errorMessage=s[2].confirmPassword),!P&&i&1&&(P=!0,v.value=s[0].confirmPassword,Y(()=>P=!1)),m.$set(v),s[3]?n?n.p(s,i):(n=se(s),n.c(),n.m(a,null)):n&&(n.d(1),n=null);const h={};i&18&&(h.isDisabled=s[4]||s[1]),i&2&&(h.isLoading=s[1]),_.$set(h)},i(s){D||(j(d.$$.fragment,s),j(r.$$.fragment,s),j(m.$$.fragment,s),j(_.$$.fragment,s),D=!0)},o(s){L(d.$$.fragment,s),L(r.$$.fragment,s),L(m.$$.fragment,s),L(_.$$.fragment,s),D=!1},d(s){s&&(w(a),w(c),w($)),O(d),O(r),O(m),n&&n.d(),O(_)}}}function $e(e){let a,t,f,u;function d(o){e[11](o)}let b={supabase:e[6],isLogin:!1,handleSubmit:e[7],isLoading:e[1],$$slots:{default:[we]},$$scope:{ctx:e}};return e[5]!==void 0&&(b.formRef=e[5]),t=new _e({props:b}),F.push(()=>H(t,"formRef",d)),{c(){a=S(),q(t.$$.fragment),this.h()},l(o){ae("svelte-lxd68k",document.head).forEach(w),a=R(o),M(t.$$.fragment,o),this.h()},h(){document.title="Join KinetsHub"},m(o,r){U(o,a,r),N(t,o,r),u=!0},p(o,[r]){const p={};r&2&&(p.isLoading=o[1]),r&524319&&(p.$$scope={dirty:r,ctx:o}),!f&&r&32&&(f=!0,p.formRef=o[5],Y(()=>f=!1)),t.$set(p)},i(o){u||(j(t.$$.fragment,o),u=!0)},o(o){L(t.$$.fragment,o),u=!1},d(o){o&&w(a),O(t,o)}}}function ve(e,a,t){let f,u,d,b;V(e,x,l=>t(13,f=l)),V(e,he,l=>t(14,u=l)),V(e,be,l=>t(15,d=l)),V(e,ue,l=>t(16,b=l));let o=de(),r=Object.assign({},Z),p=!1,E=!1,m={},P,y=!1,c,_=new URLSearchParams(b.url.search).get("redirect");async function D(){var I;const l=ce(r);if(console.log("validationRes",l),Object.keys(l).length){t(2,m=Object.assign(m,l));return}try{t(1,p=!0);const{data:{session:n},error:s}=await o.auth.signUp({email:r.email,password:r.password});if(console.log("session",n),s)throw s;const{user:i}=n||{};if(!i)throw"Error creating user";if(!d.id)return;const[g]=[...((I=i.email)==null?void 0:I.matchAll(/(.*)@/g))||[]],v=await(await fetch("https://api.ipregistry.co/?key=tryout")).json(),h=await o.from("profile").insert({id:i.id,username:g[1]+`${new Date().getTime()}`,fullname:g[1],email:i.email,metadata:v}).select();if(console.log("profileRes",h),h.error)throw h.error;console.log("setting profile",h.data[0]),x.set(h.data[0]),ee("user_signed_up",{distinct_id:f.id||"",email:i.email,username:g[1],metadata:v}),u.isOrgSite&&ee("student_signed_up",{distinct_id:f.id||"",email:i.email,username:g[1],metadata:v}),_?W(_):W("/login"),c==null||c.reset(),E=!0,t(0,r=Object.assign({},Z))}catch(n){t(3,P=(n==null?void 0:n.error_description)||(n==null?void 0:n.message)),t(1,p=!1)}}function J(l){e.$$.not_equal(r.email,l)&&(r.email=l,t(0,r))}function A(l){e.$$.not_equal(r.password,l)&&(r.password=l,t(0,r))}function K(l){e.$$.not_equal(r.confirmPassword,l)&&(r.confirmPassword=l,t(0,r))}function T(l){c=l,t(5,c)}return e.$$.update=()=>{e.$$.dirty&1&&t(2,m.confirmPassword=pe(r),m),e.$$.dirty&1&&t(4,y=ge(r))},[r,p,m,P,y,c,o,D,J,A,K,T]}class Oe extends le{constructor(a){super(),fe(this,a,ve,$e,te,{})}}export{Oe as component};
//# sourceMappingURL=50.4b41f969.js.map