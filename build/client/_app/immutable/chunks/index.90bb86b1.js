import{I as f}from"./scheduler.ee52cacd.js";import"./singletons.333ce4a3.js";import{s as u}from"./supabase.2c784bff.js";import{o as p,h as l,R as _,k as y,l as g,m as z}from"./org.1ee4885a.js";import"./index.a2391391.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="f25e985e-30a1-4cd9-be91-c1b3c78cd363",o._sentryDebugIdIdentifier="sentry-dbid-f25e985e-30a1-4cd9-be91-c1b3c78cd363")}catch{}})();async function D(o){const{data:a,error:t}=await u.from("organizationmember").select(`
      id,
      email,
      verified,
      role_id,
      profile(
        id,
        fullname,
        email
      )
    `).eq("organization_id",o).neq("role_id",_.STUDENT).order("id",{ascending:!1}).returns(),s=[];return a!=null&&a.length&&(a.forEach(i=>{var r,n,d;s.push({id:i.id,email:((r=i==null?void 0:i.profile)==null?void 0:r.email)||i.email,verified:i.verified,profileId:(n=i==null?void 0:i.profile)==null?void 0:n.id,fullname:((d=i==null?void 0:i.profile)==null?void 0:d.fullname)||"",role:y[i==null?void 0:i.role_id]||"",isAdmin:(i==null?void 0:i.role_id)===_.ADMIN})}),g.set(s)),{team:f(g),error:t}}async function N(o,a,t){const{data:s,error:i}=await u.from("organizationmember").select(`
      id,
      profile_id,
      role_id,
      created_at,
      organization!organizationmember_organization_id_fkey (
        *,
        organization_plan(
          plan_name,
          is_active,
          subscriptionId:lmz_data->id
        )
      )
    `).eq("profile_id",o).order("id",{ascending:!1}).returns(),r=[];if(Array.isArray(s)&&s.length)if(s.forEach(n=>{var d,e,c;r.push({...(n==null?void 0:n.organization)||{},memberId:n==null?void 0:n.id,role_id:parseInt(n==null?void 0:n.role_id),shortName:((c=(e=(d=n==null?void 0:n.organization)==null?void 0:d.name)==null?void 0:e.substring(0,2))==null?void 0:c.toUpperCase())||""})}),p.set(r),a&&t){const n=r.find(d=>d.siteName===t);n&&l.set(n)}else{if(localStorage){const d=localStorage.getItem("classroomio_org_sitename"),e=r.find(c=>c.siteName===d);e&&l.set(e)}f(l).siteName||l.set(r[0])}return{orgs:r,currentOrg:f(l),error:i}}async function A(o){const{data:a,error:t}=await u.from("profile").select(`
      id,
      fullname,
      email,
      avatar_url,
      created_at,
      groupmember!inner(
        role_id,
        group_id:group!inner(
          organization_id
        )
      )
    `).eq("groupmember.group.organization_id",o).eq("groupmember.role_id",_.STUDENT);console.log("data",a);const s=(a||[]).map(i=>({id:i.id,name:i.fullname,email:i.email,avatar_url:i.avatar_url,date_joined:new Date(i.created_at).toDateString()}));return z.set(s),{audience:s,error:t}}async function E(o){const{data:a,error:t}=await u.from("course").select(`
      *,
      lessons:lesson(count),
      group!inner(
        organization!inner(id, name, siteName, avatar_url)
      )
    `).eq("group.organization.siteName",o).eq("status","ACTIVE").eq("is_published",!0);return t?[]:a}export{N as a,E as b,A as c,D as g};
//# sourceMappingURL=index.90bb86b1.js.map
