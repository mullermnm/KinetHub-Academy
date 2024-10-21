import{s as pe,w as X,x as T,C as S,t as ne,y as _e,d as g,z as O,D as V,b as N,l as ae,e as I,i as ie,f as u,m as le,A as Y,p as R}from"../chunks/scheduler.ee52cacd.js";import{S as ge,i as he,f as Z,b as H,d as K,m as M,t as B,a as F,e as L}from"../chunks/index.a2391391.js";import{g as be}from"../chunks/navigation.4bf4851d.js";import{A as ye}from"../chunks/ArrowLeft.eacc72f9.js";import{h as ve,j as ke}from"../chunks/org.1ee4885a.js";import{P as we,V as Ie}from"../chunks/index.550ce75a.js";import{c as $e}from"../chunks/validator.b0d7db8b.js";import{s as Ce}from"../chunks/supabase.2c784bff.js";import{s as ue}from"../chunks/store.21c1b842.js";import{g as De}from"../chunks/generateSlug.c8cda6bc.js";import{T as Ee}from"../chunks/index.846953bc.js";import{T as qe}from"../chunks/TextField.05bb724d.js";import{p as Ae}from"../chunks/user.9ccdc884.js";import{b as Te}from"../chunks/index.523fac41.js";import{t as Se}from"../chunks/translations.f943b7b3.js";import{c as Oe}from"../chunks/store.9800a6a8.js";import{D as Ve}from"../chunks/Dropdown.2e34ff7a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},f=new Error().stack;f&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[f]="6b1e60e4-f223-43e0-90f3-6dcf1075aa0c",e._sentryDebugIdIdentifier="sentry-dbid-6b1e60e4-f223-43e0-90f3-6dcf1075aa0c")}catch{}})();function Ne(e){let f,o,l,a,d,D,$=e[4]("community.ask.go_back")+"",h,r,E,p,C,q=e[4]("community.ask.ask_the")+"",P,x,_,s,m,i,j,J,b,Q,U,z,y,W,A;d=new ye({props:{size:24,class:"carbon-icon dark:text-white"}}),_=new we({props:{label:e[4]("community.ask.publish"),variant:Ie.CONTAINED_DARK,onClick:e[5]}});function de(t){e[8](t)}let ee={placeholder:e[4]("community.ask.title"),errorMessage:e[0].title,className:"w-[75%]"};e[1].title!==void 0&&(ee.value=e[1].title),i=new qe({props:ee}),X.push(()=>Z(i,"value",de));function ce(t){e[9](t)}let te={class:"w-[25%] h-full",size:"xl",label:e[4]("community.ask.select_course"),invalid:!!e[0].courseId,invalidText:e[0].courseId,items:e[2].map(me)};e[1].courseId!==void 0&&(te.selectedId=e[1].courseId),b=new Ve({props:te}),X.push(()=>Z(b,"selectedId",ce));function fe(t){e[11](t)}let se={placeholder:e[4]("community.ask.ask_community"),onChange:e[10]};return e[1].body!==void 0&&(se.value=e[1].body),y=new Ee({props:se}),X.push(()=>Z(y,"value",fe)),{c(){f=T(),o=S("section"),l=S("div"),a=S("a"),H(d.$$.fragment),D=T(),h=ne($),E=T(),p=S("div"),C=S("h1"),P=ne(q),x=T(),H(_.$$.fragment),s=T(),m=S("div"),H(i.$$.fragment),J=T(),H(b.$$.fragment),U=T(),z=S("div"),H(y.$$.fragment),this.h()},l(t){_e("svelte-igiws2",document.head).forEach(g),f=O(t),o=V(t,"SECTION",{class:!0});var v=N(o);l=V(v,"DIV",{class:!0});var k=N(l);a=V(k,"A",{class:!0,href:!0});var c=N(a);K(d.$$.fragment,c),D=O(c),h=ae(c,$),c.forEach(g),E=O(k),p=V(k,"DIV",{class:!0});var w=N(p);C=V(w,"H1",{class:!0});var oe=N(C);P=ae(oe,q),oe.forEach(g),x=O(w),K(_.$$.fragment,w),w.forEach(g),k.forEach(g),s=O(v),m=V(v,"DIV",{class:!0});var G=N(m);K(i.$$.fragment,G),J=O(G),K(b.$$.fragment,G),G.forEach(g),U=O(v),z=V(v,"DIV",{class:!0});var re=N(z);K(y.$$.fragment,re),re.forEach(g),v.forEach(g),this.h()},h(){document.title="Ask the Community - KinetsHub",I(a,"class","text-gray-500 dark:text-white text-md flex items-center"),I(a,"href",r=`${e[3]}/community`),I(C,"class","dark:text-white text-2xl md:text-3xl font-bold"),I(p,"class","flex items-center gap-12 justify-between"),I(l,"class","p-5"),I(m,"class","mb-3 p-2 flex gap-x-5 justify-between"),I(z,"class","px-2"),I(o,"class","w-full md:max-w-3xl md:mx-auto")},m(t,n){ie(t,f,n),ie(t,o,n),u(o,l),u(l,a),M(d,a,null),u(a,D),u(a,h),u(l,E),u(l,p),u(p,C),u(C,P),u(p,x),M(_,p,null),u(o,s),u(o,m),M(i,m,null),u(m,J),M(b,m,null),u(o,U),u(o,z),M(y,z,null),A=!0},p(t,[n]){(!A||n&16)&&$!==($=t[4]("community.ask.go_back")+"")&&le(h,$),(!A||n&8&&r!==(r=`${t[3]}/community`))&&I(a,"href",r),(!A||n&16)&&q!==(q=t[4]("community.ask.ask_the")+"")&&le(P,q);const v={};n&16&&(v.label=t[4]("community.ask.publish")),_.$set(v);const k={};n&16&&(k.placeholder=t[4]("community.ask.title")),n&1&&(k.errorMessage=t[0].title),!j&&n&2&&(j=!0,k.value=t[1].title,Y(()=>j=!1)),i.$set(k);const c={};n&16&&(c.label=t[4]("community.ask.select_course")),n&1&&(c.invalid=!!t[0].courseId),n&1&&(c.invalidText=t[0].courseId),n&4&&(c.items=t[2].map(me)),!Q&&n&2&&(Q=!0,c.selectedId=t[1].courseId,Y(()=>Q=!1)),b.$set(c);const w={};n&16&&(w.placeholder=t[4]("community.ask.ask_community")),n&2&&(w.onChange=t[10]),!W&&n&2&&(W=!0,w.value=t[1].body,Y(()=>W=!1)),y.$set(w)},i(t){A||(B(d.$$.fragment,t),B(_.$$.fragment,t),B(i.$$.fragment,t),B(b.$$.fragment,t),B(y.$$.fragment,t),A=!0)},o(t){F(d.$$.fragment,t),F(_.$$.fragment,t),F(i.$$.fragment,t),F(b.$$.fragment,t),F(y.$$.fragment,t),A=!1},d(t){t&&(g(f),g(o)),L(d),L(_),L(i),L(b),L(y)}}}const me=e=>({id:e.id,text:e.title});function Pe(e,f,o){let l,a,d,D,$;R(e,ve,s=>o(6,l=s)),R(e,Ae,s=>o(7,a=s)),R(e,ke,s=>o(3,d=s)),R(e,Oe,s=>o(12,D=s)),R(e,Se,s=>o(4,$=s));let h={},r={title:"",body:"",courseId:""},E=[];async function p(s,m){if(D.length){o(2,E=[...D]);return}const i=await Te(s,m);i&&o(2,E=i.allCourses)}async function C(){var i;if(o(0,h=$e(r)),console.log("handleSave errors",h),Object.keys(h).length)return;const{data:s,error:m}=await Ce.from("community_question").insert({title:r.title,body:r.body,organization_id:l.id,author_profile_id:a.id,votes:0,slug:De(r.title),course_id:r.courseId}).select();if(m)console.error("Error: asking question",m),ue.error("snackbar.community.error.try_again");else{const j=(i=s[0])==null?void 0:i.slug;console.log("Success: asking question",s,j),ue.success("snackbar.community.success.question_submitted"),be(`${d}/community/${j}`)}}function q(s){e.$$.not_equal(r.title,s)&&(r.title=s,o(1,r))}function P(s){e.$$.not_equal(r.courseId,s)&&(r.courseId=s,o(1,r))}const x=s=>o(1,r.body=s,r);function _(s){e.$$.not_equal(r.body,s)&&(r.body=s,o(1,r))}return e.$$.update=()=>{e.$$.dirty&192&&a.id&&l.id&&p(a.id,l.id)},[h,r,E,d,$,C,l,a,q,P,x,_]}class Ze extends ge{constructor(f){super(),he(this,f,Pe,Ne,pe,{})}}export{Ze as component};
//# sourceMappingURL=38.2409b396.js.map