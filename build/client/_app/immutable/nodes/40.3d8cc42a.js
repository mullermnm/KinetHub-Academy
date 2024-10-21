import{S as Ie,i as Se,f as se,b as P,d as L,m as R,t as k,a as y,e as z,g as ie,c as ue}from"../chunks/index.a2391391.js";import{s as Oe,w as oe,x as B,y as Te,d as D,z as G,i as x,A as ne,p as K,o as ve,C as F,D as j,b as q,e as U,f as v,N as Ve,a4 as qe,t as _e,l as me,m as Ae,Q as He,H as Ue,B as Be,E as fe,n as ge}from"../chunks/scheduler.ee52cacd.js";import{p as Me}from"../chunks/user.9ccdc884.js";import{a as Ge,j as We,b as Ke}from"../chunks/index.523fac41.js";import{C as Qe}from"../chunks/index.8b6a9222.js";import{e as ke}from"../chunks/each.4f9c2159.js";import{p as Ye}from"../chunks/stores.5de49fb7.js";import{P as ce,V as Ne}from"../chunks/index.550ce75a.js";import{M as Je}from"../chunks/index.bf0b6763.js";import{C as Xe}from"../chunks/CheckmarkFilled.f7226a63.js";import{C as Ze}from"../chunks/CheckmarkOutline.0b1688ef.js";import{T as xe}from"../chunks/TextField.05bb724d.js";import{T as et}from"../chunks/TextArea.af35e63e.js";import{e as de,c as pe,a as ae}from"../chunks/store.9800a6a8.js";import{h as Pe,R as tt,j as rt,g as st}from"../chunks/org.1ee4885a.js";import{s as ye}from"../chunks/supabase.2c784bff.js";import{g as Le}from"../chunks/navigation.4bf4851d.js";import{c as ot}from"../chunks/index.287abee1.js";import{t as Re}from"../chunks/translations.f943b7b3.js";import{C as Ce,a as nt}from"../chunks/index.89e0ac82.js";import{C as lt}from"../chunks/index.d1f5fa28.js";import{A as at}from"../chunks/Add.efc40c97.js";import{G as it}from"../chunks/Grid.b8506fdc.js";import{L as ut}from"../chunks/List.e8fcc1c3.js";import{i as ct}from"../chunks/useMobile.7962b2bd.js";import{I as ze}from"../chunks/index.e68f3ff9.js";import{S as ft}from"../chunks/Search.5626c3fe.js";import{D as dt}from"../chunks/Dropdown.2e34ff7a.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="758e623b-8a44-45a8-8637-a9985822fe12",s._sentryDebugIdIdentifier="sentry-dbid-758e623b-8a44-45a8-8637-a9985822fe12")}catch{}})();const _t=()=>({cantFetch:!0}),ar=Object.freeze(Object.defineProperty({__proto__:null,load:_t},Symbol.toStringTag,{value:"Module"}));function mt(s){let t=!1;const{title:r,description:e}=s,o={title:"",description:""};return r||(o.title="Title is required",t=!0),e||(o.description="Description is required",t=!0),{hasError:t,fieldErrors:o}}function De(s,t,r){const e=s.slice();return e[20]=t[r],e}function pt(s){let t,r,e,o,_,n,l,u,f,b,E,d,w,a,p;function I(c){s[13](c)}let $={label:s[7]("courses.new_course_modal.course_name"),placeholder:s[7]("courses.new_course_modal.course_name_placeholder"),className:"w-full ",isRequired:!0,errorMessage:s[2].title,autoComplete:!1};s[6].title!==void 0&&($.value=s[6].title),e=new xe({props:$}),oe.push(()=>se(e,"value",I));function A(c){s[14](c)}let M={label:s[7]("courses.new_course_modal.short_description"),rows:4,placeholder:s[7]("courses.new_course_modal.short_description_placeholder"),className:"mb-4",isRequired:!0,errorMessage:s[2].description,isAIEnabled:!0,initAIPrompt:"Write a 30 word description for a course titled: "+s[6].title};return s[6].description!==void 0&&(M.value=s[6].description),n=new et({props:M}),oe.push(()=>se(n,"value",A)),b=new ce({props:{className:"px-6 py-3",label:s[7]("courses.new_course_modal.back"),variant:Ne.OUTLINED,onClick:s[15]}}),d=new ce({props:{className:"px-6 py-3",label:s[7]("courses.new_course_modal.button"),type:"submit",isDisabled:s[1],isLoading:s[1]}}),{c(){t=F("form"),r=F("div"),P(e.$$.fragment),_=B(),P(n.$$.fragment),u=B(),f=F("div"),P(b.$$.fragment),E=B(),P(d.$$.fragment),this.h()},l(c){t=j(c,"FORM",{});var h=q(t);r=j(h,"DIV",{class:!0});var O=q(r);L(e.$$.fragment,O),O.forEach(D),_=G(h),L(n.$$.fragment,h),u=G(h),f=j(h,"DIV",{class:!0});var m=q(f);L(b.$$.fragment,m),E=G(m),L(d.$$.fragment,m),m.forEach(D),h.forEach(D),this.h()},h(){U(r,"class","flex items-end space-x-2 mb-4"),U(f,"class","mt-5 flex items-center justify-between")},m(c,h){x(c,t,h),v(t,r),R(e,r,null),v(t,_),R(n,t,null),v(t,u),v(t,f),R(b,f,null),v(f,E),R(d,f,null),w=!0,a||(p=Ve(t,"submit",qe(s[10])),a=!0)},p(c,h){const O={};h&128&&(O.label=c[7]("courses.new_course_modal.course_name")),h&128&&(O.placeholder=c[7]("courses.new_course_modal.course_name_placeholder")),h&4&&(O.errorMessage=c[2].title),!o&&h&64&&(o=!0,O.value=c[6].title,ne(()=>o=!1)),e.$set(O);const m={};h&128&&(m.label=c[7]("courses.new_course_modal.short_description")),h&128&&(m.placeholder=c[7]("courses.new_course_modal.short_description_placeholder")),h&4&&(m.errorMessage=c[2].description),h&64&&(m.initAIPrompt="Write a 30 word description for a course titled: "+c[6].title),!l&&h&64&&(l=!0,m.value=c[6].description,ne(()=>l=!1)),n.$set(m);const T={};h&128&&(T.label=c[7]("courses.new_course_modal.back")),h&8&&(T.onClick=c[15]),b.$set(T);const V={};h&128&&(V.label=c[7]("courses.new_course_modal.button")),h&2&&(V.isDisabled=c[1]),h&2&&(V.isLoading=c[1]),d.$set(V)},i(c){w||(k(e.$$.fragment,c),k(n.$$.fragment,c),k(b.$$.fragment,c),k(d.$$.fragment,c),w=!0)},o(c){y(e.$$.fragment,c),y(n.$$.fragment,c),y(b.$$.fragment,c),y(d.$$.fragment,c),w=!1},d(c){c&&D(t),z(e),z(n),z(b),z(d),a=!1,p()}}}function gt(s){let t,r,e=s[7]("courses.new_course_modal.type_selector_title")+"",o,_,n,l,u,f,b,E=ke(s[8]),d=[];for(let a=0;a<E.length;a+=1)d[a]=Ee(De(s,E,a));const w=a=>y(d[a],1,1,()=>{d[a]=null});return f=new ce({props:{className:"px-6 py-3",label:s[7]("courses.new_course_modal.next"),onClick:s[12],isDisabled:!s[4]}}),{c(){t=F("div"),r=F("h2"),o=_e(e),_=B(),n=F("div");for(let a=0;a<d.length;a+=1)d[a].c();l=B(),u=F("div"),P(f.$$.fragment),this.h()},l(a){t=j(a,"DIV",{});var p=q(t);r=j(p,"H2",{class:!0});var I=q(r);o=me(I,e),I.forEach(D),_=G(p),n=j(p,"DIV",{class:!0});var $=q(n);for(let M=0;M<d.length;M+=1)d[M].l($);$.forEach(D),l=G(p),u=j(p,"DIV",{class:!0});var A=q(u);L(f.$$.fragment,A),A.forEach(D),p.forEach(D),this.h()},h(){U(r,"class","text-xl font-medium my-5"),U(n,"class","flex flex-col md:flex-row gap-2 justify-between items-center my-8"),U(u,"class","mt-8 flex items-center flex-row-reverse")},m(a,p){x(a,t,p),v(t,r),v(r,o),v(t,_),v(t,n);for(let I=0;I<d.length;I+=1)d[I]&&d[I].m(n,null);v(t,l),v(t,u),R(f,u,null),b=!0},p(a,p){if((!b||p&128)&&e!==(e=a[7]("courses.new_course_modal.type_selector_title")+"")&&Ae(o,e),p&272){E=ke(a[8]);let $;for($=0;$<E.length;$+=1){const A=De(a,E,$);d[$]?(d[$].p(A,p),k(d[$],1)):(d[$]=Ee(A),d[$].c(),k(d[$],1),d[$].m(n,null))}for(ie(),$=E.length;$<d.length;$+=1)w($);ue()}const I={};p&128&&(I.label=a[7]("courses.new_course_modal.next")),p&8&&(I.onClick=a[12]),p&16&&(I.isDisabled=!a[4]),f.$set(I)},i(a){if(!b){for(let p=0;p<E.length;p+=1)k(d[p]);k(f.$$.fragment,a),b=!0}},o(a){d=d.filter(Boolean);for(let p=0;p<d.length;p+=1)y(d[p]);y(f.$$.fragment,a),b=!1},d(a){a&&D(t),He(d,a),z(f)}}}function ht(s){let t,r;return t=new Ze({props:{size:16,class:"carbon-icon"}}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,o){R(t,e,o),r=!0},i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){y(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function bt(s){let t,r;return t=new Xe({props:{size:16,class:"carbon-icon text-primary-600 dark:text-primary-200"}}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,o){R(t,e,o),r=!0},i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){y(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function $t(s){let t,r;return t=new lt({}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,o){R(t,e,o),r=!0},i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){y(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function Ee(s){let t,r,e,o,_,n,l,u,f=s[20].title+"",b,E,d,w,a=s[20].subtitle+"",p,I,$,A,M,c;const h=[bt,ht],O=[];function m(i,C){return i[20].type===i[4]?0:i[20].isDisabled?-1:1}~(e=m(s))&&(o=O[e]=h[e](s));let T=s[20].isDisabled&&$t();function V(){return s[11](s[20])}return{c(){t=F("button"),r=F("div"),o&&o.c(),_=B(),n=F("div"),l=F("p"),u=F("span"),b=_e(f),E=B(),T&&T.c(),d=B(),w=F("p"),p=_e(a),I=B(),this.h()},l(i){t=j(i,"BUTTON",{class:!0,type:!0});var C=q(t);r=j(C,"DIV",{class:!0});var H=q(r);o&&o.l(H),H.forEach(D),_=G(C),n=j(C,"DIV",{});var S=q(n);l=j(S,"P",{class:!0});var N=q(l);u=j(N,"SPAN",{class:!0});var J=q(u);b=me(J,f),J.forEach(D),E=G(N),T&&T.l(N),N.forEach(D),d=G(S),w=j(S,"P",{class:!0});var Y=q(w);p=me(Y,a),Y.forEach(D),S.forEach(D),I=G(C),C.forEach(D),this.h()},h(){U(r,"class","w-full flex flex-row-reverse h-[70%]"),U(u,"class","mr-2 text-sm"),U(l,"class","font-bold text-start flex items-center"),U(w,"class","text-xs font-light text-start"),U(t,"class",$="w-11/12 md:w-[261px] md:h-[240px] p-5 rounded-md dark:bg-neutral-700 border-2 "+(s[20].type===s[4]?"border-primary-400":`border-gray-200 dark:border-neutral-600 ${!s[20].isDisabled&&"hover:scale-95"}`)+" flex flex-col "+(s[20].isDisabled&&"cursor-not-allowed opacity-60")+" transition-all ease-in-out"),U(t,"type","button")},m(i,C){x(i,t,C),v(t,r),~e&&O[e].m(r,null),v(t,_),v(t,n),v(n,l),v(l,u),v(u,b),v(l,E),T&&T.m(l,null),v(n,d),v(n,w),v(w,p),v(t,I),A=!0,M||(c=Ve(t,"click",function(){Ue(s[20].isDisabled?void 0:V)&&(s[20].isDisabled?void 0:V).apply(this,arguments)}),M=!0)},p(i,C){s=i;let H=e;e=m(s),e!==H&&(o&&(ie(),y(O[H],1,1,()=>{O[H]=null}),ue()),~e?(o=O[e],o||(o=O[e]=h[e](s),o.c()),k(o,1),o.m(r,null)):o=null),(!A||C&16&&$!==($="w-11/12 md:w-[261px] md:h-[240px] p-5 rounded-md dark:bg-neutral-700 border-2 "+(s[20].type===s[4]?"border-primary-400":`border-gray-200 dark:border-neutral-600 ${!s[20].isDisabled&&"hover:scale-95"}`)+" flex flex-col "+(s[20].isDisabled&&"cursor-not-allowed opacity-60")+" transition-all ease-in-out"))&&U(t,"class",$)},i(i){A||(k(o),k(T),A=!0)},o(i){y(o),y(T),A=!1},d(i){i&&D(t),~e&&O[e].d(),T&&T.d(),M=!1,c()}}}function wt(s){let t,r,e,o;const _=[gt,pt],n=[];function l(u,f){return u[3]===0?0:1}return t=l(s),r=n[t]=_[t](s),{c(){r.c(),e=ve()},l(u){r.l(u),e=ve()},m(u,f){n[t].m(u,f),x(u,e,f),o=!0},p(u,f){let b=t;t=l(u),t===b?n[t].p(u,f):(ie(),y(n[b],1,1,()=>{n[b]=null}),ue(),r=n[t],r?r.p(u,f):(r=n[t]=_[t](u),r.c()),k(r,1),r.m(e.parentNode,e))},i(u){o||(k(r),o=!0)},o(u){y(r),o=!1},d(u){u&&D(e),n[t].d(u)}}}function vt(s){let t,r,e,o;function _(l){s[17](l)}let n={onClose:s[16],width:"w-4/5 md:w-2/5 md:min-w-[600px]",modalHeading:s[7]("courses.new_course_modal.heading"),$$slots:{default:[wt]},$$scope:{ctx:s}};return s[5]!==void 0&&(n.open=s[5]),r=new Je({props:n}),oe.push(()=>se(r,"open",_)),{c(){t=B(),P(r.$$.fragment),this.h()},l(l){Te("svelte-wptplf",document.head).forEach(D),t=G(l),L(r.$$.fragment,l),this.h()},h(){document.title="Create a new course"},m(l,u){x(l,t,u),R(r,l,u),o=!0},p(l,[u]){const f={};u&1&&(f.onClose=l[16]),u&128&&(f.modalHeading=l[7]("courses.new_course_modal.heading")),u&8388830&&(f.$$scope={dirty:u,ctx:l}),!e&&u&32&&(e=!0,f.open=l[5],ne(()=>e=!1)),r.$set(f)},i(l){o||(k(r.$$.fragment,l),o=!0)},o(l){y(r.$$.fragment,l),o=!1},d(l){l&&D(t),z(r,l)}}}function kt(s,t,r){let e,o,_,n,l,u;K(s,Ye,m=>r(0,o=m)),K(s,Me,m=>r(18,_=m)),K(s,Pe,m=>r(19,n=m)),K(s,de,m=>r(6,l=m)),K(s,Re,m=>r(7,u=m));let f=!1,b={title:"",description:""},E=0;const d=[{title:"Live Class",subtitle:"This course type is ideal for bootcamps where lessons are time based and you need attendance and grading",type:Ce.LIVE_CLASS,isDisabled:!1},{title:"Self Paced",subtitle:"This course type is ideal for courses where students can take lessons on their own pace without a teacher",type:Ce.SELF_PACED,isDisabled:!1}];let w=d[0].type;function a(m){Le(m),de.update(()=>({title:"",description:"",type:"",emails:"",tutors:"",students:""}))}async function p(){r(1,f=!0);const{hasError:m,fieldErrors:T}=mt(l);if(r(2,b=T),m)return;const{title:V,description:i}=l,{data:C}=await ye.from("group").insert({name:V,description:i,organization_id:n.id}).select();if(console.log("newGroup",C),!C)return;const{id:H}=C[0],{data:S}=await ye.from("course").insert({title:V,description:i,type:w,version:nt.V2,group_id:H}).select();if(console.log("newCourse data",S),!S)return;const N=S[0];pe.update(Y=>[...Y,N]),ot("course_created",{course_id:N.id,course_title:N.title,course_description:N.description,organization_id:n.id,organization_name:n.name,user_id:_.id,user_email:_.email});const{data:J}=await Ge({profile_id:_.id,email:_.email,group_id:H,role_id:tt.TUTOR});if(Array.isArray(J)&&J.length){const{id:Y}=J[0];console.log("Add news feed into course"),await We({content:`<h2>Welcome to this course 🎉&nbsp;</h2>
<p>Thank you for joining this course and I hope you get the best out of it.</p>`,course_id:N.id,is_pinned:!0,author_id:Y})}a(`/courses/${N.id}`),r(1,f=!1)}const I=m=>r(4,w=m.type),$=()=>r(3,E=1);function A(m){s.$$.not_equal(l.title,m)&&(l.title=m,de.set(l))}function M(m){s.$$.not_equal(l.description,m)&&(l.description=m,de.set(l))}const c=()=>r(3,E=0),h=()=>a(o.url.pathname);function O(m){e=m,r(5,e),r(0,o)}return s.$$.update=()=>{s.$$.dirty&1&&r(5,e=new URLSearchParams(o.url.search).get("create")==="true")},[o,f,b,E,w,e,l,u,d,a,p,I,$,A,M,c,h,O]}class yt extends Ie{constructor(t){super(),Se(this,t,kt,vt,Oe,{})}}function Ct(s){let t,r;return t=new ce({props:{label:s[4]("courses.heading_button"),variant:Ne.CONTAINED_DARK,isDisabled:!s[6],onClick:s[8]}}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,o){R(t,e,o),r=!0},p(e,o){const _={};o&16&&(_.label=e[4]("courses.heading_button")),o&64&&(_.isDisabled=!e[6]),t.$set(_)},i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){y(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function Dt(s){let t,r;return t=new ce({props:{isDisabled:!s[6],onClick:s[8],$$slots:{default:[Et]},$$scope:{ctx:s}}}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,o){R(t,e,o),r=!0},p(e,o){const _={};o&64&&(_.isDisabled=!e[6]),o&8388608&&(_.$$scope={dirty:o,ctx:e}),t.$set(_)},i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){y(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function Et(s){let t,r;return t=new at({props:{size:24}}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,o){R(t,e,o),r=!0},p:ge,i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){y(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function It(s){let t,r;return t=new ze({props:{onClick:s[16],$$slots:{default:[Ot]},$$scope:{ctx:s}}}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,o){R(t,e,o),r=!0},p(e,o){const _={};o&8388608&&(_.$$scope={dirty:o,ctx:e}),t.$set(_)},i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){y(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function St(s){let t,r;return t=new ze({props:{onClick:s[15],$$slots:{default:[Tt]},$$scope:{ctx:s}}}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,o){R(t,e,o),r=!0},p(e,o){const _={};o&8388608&&(_.$$scope={dirty:o,ctx:e}),t.$set(_)},i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){y(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function Ot(s){let t,r;return t=new ut({props:{size:24}}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,o){R(t,e,o),r=!0},p:ge,i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){y(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function Tt(s){let t,r;return t=new it({props:{size:24}}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,o){R(t,e,o),r=!0},p:ge,i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){y(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function Vt(s){let t,r,e,o,_,n=s[4]("courses.heading")+"",l,u,f,b,E,d,w,a,p,I,$,A,M,c,h,O,m,T,V,i,C;const H=[Dt,Ct],S=[];function N(g,W){return g[5]?0:1}f=N(s),b=S[f]=H[f](s);function J(g){s[13](g)}let Y={placeholder:s[4]("courses.search_placeholder"),searchClass:"mr-2",class:" bg-gray-100 dark:bg-neutral-800"};s[0]!==void 0&&(Y.value=s[0]),a=new ft({props:Y}),oe.push(()=>se(a,"value",J));function Fe(g){s[14](g)}let he={class:"h-full min-w-[150px]",items:[{id:"0",text:s[4]("courses.course_filter.date_created")},{id:"1",text:s[4]("courses.course_filter.published")},{id:"2",text:s[4]("courses.course_filter.lessons")}]};s[1]!==void 0&&(he.selectedId=s[1]),$=new dt({props:he}),oe.push(()=>se($,"selectedId",Fe));const be=[St,It],X=[];function $e(g,W){return g[3].view==="list"?0:1}c=$e(s),h=X[c]=be[c](s),m=new yt({});function je(g){s[17](g)}let we={};return s[2]!==void 0&&(we.courses=s[2]),V=new Qe({props:we}),oe.push(()=>se(V,"courses",je)),{c(){t=B(),r=F("section"),e=F("div"),o=F("div"),_=F("h1"),l=_e(n),u=B(),b.c(),E=B(),d=F("div"),w=F("div"),P(a.$$.fragment),I=B(),P($.$$.fragment),M=B(),h.c(),O=B(),P(m.$$.fragment),T=B(),P(V.$$.fragment),this.h()},l(g){Te("svelte-a5wz2b",document.head).forEach(D),t=G(g),r=j(g,"SECTION",{class:!0});var ee=q(r);e=j(ee,"DIV",{class:!0});var Q=q(e);o=j(Q,"DIV",{class:!0});var Z=q(o);_=j(Z,"H1",{class:!0});var te=q(_);l=me(te,n),te.forEach(D),u=G(Z),b.l(Z),Z.forEach(D),E=G(Q),d=j(Q,"DIV",{class:!0});var le=q(d);w=j(le,"DIV",{class:!0});var re=q(w);L(a.$$.fragment,re),I=G(re),L($.$$.fragment,re),M=G(re),h.l(re),re.forEach(D),le.forEach(D),O=G(Q),L(m.$$.fragment,Q),T=G(Q),L(V.$$.fragment,Q),Q.forEach(D),ee.forEach(D),this.h()},h(){document.title="Courses - KinetsHub",U(_,"class","dark:text-white text-2xl md:text-3xl font-bold"),U(o,"class","flex items-center justify-between mb-5"),U(w,"class","filter-containter flex items-end justify-start svelte-rmrddk"),U(d,"class","flex flex-row-reverse mb-5"),U(e,"class","py-2 md:py-10 px-2 md:px-5"),U(r,"class","w-full md:max-w-6xl md:mx-auto")},m(g,W){x(g,t,W),x(g,r,W),v(r,e),v(e,o),v(o,_),v(_,l),v(o,u),S[f].m(o,null),v(e,E),v(e,d),v(d,w),R(a,w,null),v(w,I),R($,w,null),v(w,M),X[c].m(w,null),v(e,O),R(m,e,null),v(e,T),R(V,e,null),C=!0},p(g,[W]){(!C||W&16)&&n!==(n=g[4]("courses.heading")+"")&&Ae(l,n);let ee=f;f=N(g),f===ee?S[f].p(g,W):(ie(),y(S[ee],1,1,()=>{S[ee]=null}),ue(),b=S[f],b?b.p(g,W):(b=S[f]=H[f](g),b.c()),k(b,1),b.m(o,null));const Q={};W&16&&(Q.placeholder=g[4]("courses.search_placeholder")),!p&&W&1&&(p=!0,Q.value=g[0],ne(()=>p=!1)),a.$set(Q);const Z={};W&16&&(Z.items=[{id:"0",text:g[4]("courses.course_filter.date_created")},{id:"1",text:g[4]("courses.course_filter.published")},{id:"2",text:g[4]("courses.course_filter.lessons")}]),!A&&W&2&&(A=!0,Z.selectedId=g[1],ne(()=>A=!1)),$.$set(Z);let te=c;c=$e(g),c===te?X[c].p(g,W):(ie(),y(X[te],1,1,()=>{X[te]=null}),ue(),h=X[c],h?h.p(g,W):(h=X[c]=be[c](g),h.c()),k(h,1),h.m(w,null));const le={};!i&&W&4&&(i=!0,le.courses=g[2],ne(()=>i=!1)),V.$set(le)},i(g){C||(k(b),k(a.$$.fragment,g),k($.$$.fragment,g),k(h),k(m.$$.fragment,g),k(V.$$.fragment,g),C=!0)},o(g){y(b),y(a.$$.fragment,g),y($.$$.fragment,g),y(h),y(m.$$.fragment,g),y(V.$$.fragment,g),C=!1},d(g){g&&(D(t),D(r)),S[f].d(),z(a),z($),X[c].d(),z(m),z(V)}}}function At(s,t,r){let e,o,_,n,l,u,f,b;K(s,Pe,i=>r(10,e=i)),K(s,Me,i=>r(11,o=i)),K(s,pe,i=>r(12,_=i)),K(s,ae,i=>r(3,n=i)),K(s,rt,i=>r(19,l=i)),K(s,Re,i=>r(4,u=i)),K(s,ct,i=>r(5,f=i)),K(s,st,i=>r(6,b=i));let{data:E}=t,{cantFetch:d}=E,w="",a,p,I=!1;async function $(i,C){if(d&&typeof d=="boolean"&&C&&!I){_.length||fe(ae,n.isLoading=!0,n);const H=await Ke(i,C);if(console.log("coursesResult",H),fe(ae,n.isLoading=!1,n),!H)return;pe.set(H.allCourses),I=!0}}function A(i,C,H){a?localStorage.setItem("classroomio_filter_course_key",C):r(1,a=localStorage.getItem("classroomio_filter_course_key")||"0"),r(2,p=H.filter(S=>!!(!i||S.title.toLowerCase().includes(i.toLowerCase())))),C==="0"?r(2,p=p.sort((S,N)=>new Date(S.created_at).getTime()-new Date(N.created_at).getTime())):C==="1"?r(2,p=p.sort((S,N)=>N.is_published-S.is_published)):C==="2"&&r(2,p=p.sort((S,N)=>N.total_lessons-S.total_lessons))}const M=i=>{fe(ae,n.view=i,n),localStorage.setItem("courseView",i)},c=()=>{Le(l+"/courses?create=true")};Be(()=>{const i=localStorage.getItem("courseView");i&&fe(ae,n.view=i,n)});function h(i){w=i,r(0,w)}function O(i){a=i,r(1,a)}const m=()=>M("grid"),T=()=>M("list");function V(i){p=i,r(2,p)}return s.$$set=i=>{"data"in i&&r(9,E=i.data)},s.$$.update=()=>{s.$$.dirty&4099&&A(w,a,_),s.$$.dirty&3072&&$(o.id,e.id)},[w,a,p,n,u,f,b,M,c,E,e,o,_,h,O,m,T,V]}class ir extends Ie{constructor(t){super(),Se(this,t,At,Vt,Oe,{data:9})}}export{ir as component,ar as universal};
//# sourceMappingURL=40.3d8cc42a.js.map
