import{I as Q}from"./scheduler.ee52cacd.js";import{s}from"./supabase.2c784bff.js";import"./index.a2391391.js";import{g as F}from"./org.1ee4885a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="800d9154-d179-432b-8507-aceeab613a99",e._sentryDebugIdIdentifier="sentry-dbid-800d9154-d179-432b-8507-aceeab613a99")}catch{}})();function P(e){return(""+e).match("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$")!==null}const g={RADIO:1,CHECKBOX:2,TEXTAREA:3},j=[{id:g.RADIO,label:"course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.single"},{id:g.CHECKBOX,label:"course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.multiple"},{id:g.TEXTAREA,label:"course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.paragraph"}],K={id:1,title:"",type:g.RADIO,answers:[],options:[{id:1,value:null}]};var h=(e=>(e[e.ACTIVE=0]="ACTIVE",e[e.ARCHIVE=1]="ARCHIVE",e[e.DELETED=2]="DELETED",e))(h||{});async function M(e,t){if(!t||!e)return;const o={};Q(F)||(o.member_profile_id=e);const{data:r}=await s.rpc("get_courses",{org_id_arg:t,profile_id_arg:e}).match(o);return console.log("allCourses",r),Array.isArray(r)?{allCourses:r}:{allCourses:[]}}async function z(e,t){const{data:o,error:r}=await s.rpc("get_course_progress",{course_id_arg:e,profile_id_arg:t}).returns();return{data:o,error:r}}const B=`
  id,
  title,
  type,
  description,
  overview,
  logo,
  is_published,
  slug,
  cost,
  version,
  currency,
  metadata,
  is_certificate_downloadable,
  certificate_theme,
  lesson_section(id, title, order),
  lessons:lesson(
    id, title, order, section_id
  )
`,H=`
  id,
  title,
  type,
  description,
  overview,
  logo,
  is_published,
  version,
  group(*,
    members:groupmember(*,
      profile(*)
    )
  ),
  slug,
  cost,
  currency,
  metadata,
  is_certificate_downloadable,
  certificate_theme,
  lesson_section(id, title, order, created_at),
  lessons:lesson(
    id, title, public, lesson_at, is_unlocked, order, created_at, section_id,
    note, videos, slide_url, call_url, totalExercises:exercise(count), totalComments:lesson_comment(count),
    profile:teacher_id(id, avatar_url, fullname),
    lesson_completion(id, profile_id, is_complete)
  ),
  attendance:group_attendance(*),
  polls:apps_poll(status)
`;async function S(e,t){const o={};t?o.slug=t:o.id=e,o.status=h[h.ACTIVE];const r=await s.from("course").select(t?B:H).match(o).single(),{data:i,error:n}=r;return console.log("error",n),console.log("data",i),!i||n?(console.log("data",i),console.log("fetchCourse => error",n),{data:i,error:n}):{data:i,error:n}}async function J(e,t){if(!t||!e)return;const{data:o}=await s.rpc("get_explore_courses",{org_id_arg:t,profile_id_arg:e});return Array.isArray(o)?{allCourses:o}:{allCourses:[]}}async function W(e){const{data:t,error:o}=await s.from("group").select("*,members:groupmember(*,profile(*))").match({id:e}).single();return{data:t,error:o}}async function Z(e,t){const o=`course/${e+Date.now()}.webp`;let r;const{data:i}=await s.storage.from("avatars").upload(o,t,{cacheControl:"3600",upsert:!1});if(i){const{data:n}=s.storage.from("avatars").getPublicUrl(o);if(!n.publicUrl)return;r=n.publicUrl}return r}async function ee(e,t,o){if(t&&e){const r=`course/${e+Date.now()}.webp`,{data:i}=await s.storage.from("avatars").upload(r,t,{cacheControl:"3600",upsert:!1});if(i){const{data:n}=s.storage.from("avatars").getPublicUrl(r);if(!n.publicUrl)return;o.logo=n.publicUrl}}return await s.from("course").update(o).match({id:e}),o.logo}async function te(e){return await s.from("course").update({status:"DELETED"}).match({id:e})}function se(e){return s.from("groupmember").insert(e).select()}function oe(e){return s.from("course_newsfeed").insert(e)}function re(e){return s.from("groupmember").delete().match({id:e})}function ie(e){return s.from("lesson").select(`id,
      title,
      note,
      videos,
      slide_url,
      call_url,
      totalExercises:exercise(count),
      totalComments:lesson_comment(count),
      lesson_completion(id, profile_id, is_complete),
      lesson_language(id, content, locale)
    `).eq("id",e).single()}function ne(e,t,o){return s.from("lesson_versions").select("*").range(0,o).eq("lesson_id",e).eq("locale",t).order("timestamp",{ascending:!1})}function ae(e){return s.from("lesson").insert(e).select()}function ce(e){return s.from("lesson_section").insert(e).select()}function le(e,t){return s.from("lesson_section").update({...e,id:void 0}).match({id:t})}async function ue(e,t){return s.from("lesson").update({...e,id:void 0}).match({id:t})}function de(e,t){return t?s.from("lesson_completion").update({is_complete:e.is_complete}).eq("id",e.id):s.from("lesson_completion").insert(e)}function fe(e){return s.from("lesson").delete().match({id:e})}function me(e){return s.from("lesson_section").delete().match({id:e})}function V(e){return s.from("exercise").insert(e).select()}function _e(e){return s.rpc("get_exercises").eq("course_id",e)}function m(e){return isNaN(e)}async function pe(e,t){const{data:o,error:r}=await V({title:t.title,description:t.description,lesson_id:e});if(r){console.error("Something went wrong",r);return}const{id:i}=o[0]||{};if(!i){console.error("Something went wrong, no id",r);return}return await X(t.questionnaire,i),o[0]}async function X(e,t){const{questions:o,title:r,description:i,due_by:n,is_title_dirty:y,is_description_dirty:_,is_due_by_dirty:w}=e;(_||y||w)&&await s.from("exercise").update({title:r,description:i,due_by:n}).match({id:t});const f=[];for(const u of o){const{title:p,id:d,name:A,question_type:E,options:C,deleted_at:x,order:D,points:L,is_dirty:I}=u;if(x){if(!m(d)){await s.from("option").delete().match({question_id:d}),await s.from("question_answer").delete().match({question_id:d});const{error:c}=await s.from("question").delete().match({id:d});if(c){console.error("Cannot delete this question",c);continue}}continue}const a={id:m(d)?void 0:d,name:m(d)?void 0:A,title:p,points:L,order:D,question_type_id:E.id,exercise_id:t};let b;if(I||m(d)){const c=await s.from("question").upsert(a).select();c.error&&console.error("Upsert question",c.error),b=Array.isArray(c.data)?c.data[0]:null}else b=Object.assign(a);if(b){const{question_type_id:c,id:O,name:R,order:T}=b;if(delete a.question_type_id,a.question_type={id:c,label:E.label||""},a.id=O,a.name=R,a.order=T,a.options=[],g.TEXTAREA!==c)for(const l of C){const{deleted_at:U,is_dirty:N}=l;if(U){m(l.id)||s.from("option").delete().match({id:l.id});continue}const q={...l,is_dirty:void 0,id:m(l.id)?void 0:l.id,value:P(l.value)?l.value:void 0,question_id:a.id};if(N||m(l.id)){const{data:v}=await s.from("option").upsert(q).select();Array.isArray(v)&&a.options.push(v[0])}else a.options.push(q)}f.push(a)}}return f}async function ge(e,t,o,r,i){if(!i)return;const n=t.reduce((f,u)=>({...f,[u.name]:u.id}),{}),y=[],{data:_}=await s.from("submission").insert({submitted_by:i,exercise_id:o,course_id:r}).select();for(const f in e){const u=e[f],p={group_member_id:i,question_id:n[f],open_answer:"",answers:[],submission_id:Array.isArray(_)?_[0].id:null};typeof u=="string"?p.open_answer=u:p.answers=u,y.push(p)}const w=await s.from("question_answer").insert(y).select();return console.log("res",w,"submission",_),{submission:_,res:w}}async function ye(e,t){for(const o of e){const{id:r}=o;await s.from("option").delete().match({question_id:r}),await s.from("question_answer").delete().match({question_id:r}),await s.from("question").delete().match({id:r})}await s.from("submission").delete().match({exercise_id:t}),await s.from("exercise").delete().match({id:t})}export{ne as A,ie as B,de as C,g as Q,se as a,M as b,S as c,fe as d,ae as e,J as f,le as g,ce as h,me as i,oe as j,te as k,ee as l,_e as m,Z as n,z as o,W as p,re as q,K as r,P as s,ge as t,ue as u,ye as v,j as w,X as x,pe as y,V as z};
//# sourceMappingURL=index.523fac41.js.map
