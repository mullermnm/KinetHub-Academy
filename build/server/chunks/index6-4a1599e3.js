import { g as get_store_value } from './utils-26d532f8.js';
import { g as goto } from './navigation-cd282f65.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import { c as currentOrg, o as orgs, R as ROLE, a as ROLE_LABEL, b as orgTeam, d as orgAudience } from './org-8fc26a61.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "48de6e1e-8632-49e1-a77c-4b0d42cb7e61", e._sentryDebugIdIdentifier = "sentry-dbid-48de6e1e-8632-49e1-a77c-4b0d42cb7e61");
  } catch (e2) {
  }
}();
async function getOrgTeam(orgId) {
  const { data, error } = await supabase.from("organizationmember").select(
    `
      id,
      email,
      verified,
      role_id,
      profile(
        id,
        fullname,
        email
      )
    `
  ).eq("organization_id", orgId).neq("role_id", ROLE.STUDENT).order("id", { ascending: false }).returns();
  const team = [];
  if (data?.length) {
    data.forEach((teamMember) => {
      team.push({
        id: teamMember.id,
        email: teamMember?.profile?.email || teamMember.email,
        verified: teamMember.verified,
        profileId: teamMember?.profile?.id,
        fullname: teamMember?.profile?.fullname || "",
        role: ROLE_LABEL[teamMember?.role_id] || "",
        isAdmin: teamMember?.role_id === ROLE.ADMIN
      });
    });
    orgTeam.set(team);
  }
  return {
    team: get_store_value(orgTeam),
    error
  };
}
async function getOrganizations(userId, isOrgSite, orgSiteName) {
  const { data, error } = await supabase.from("organizationmember").select(
    `
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
    `
  ).eq("profile_id", userId).order("id", { ascending: false }).returns();
  const orgsArray = [];
  if (Array.isArray(data) && data.length) {
    data.forEach((orgMember) => {
      orgsArray.push({
        ...orgMember?.organization || {},
        memberId: orgMember?.id,
        role_id: parseInt(orgMember?.role_id),
        shortName: orgMember?.organization?.name?.substring(0, 2)?.toUpperCase() || ""
      });
    });
    orgs.set(orgsArray);
    if (isOrgSite && orgSiteName) {
      const orgData = orgsArray.find((org) => org.siteName === orgSiteName);
      if (orgData) {
        currentOrg.set(orgData);
      }
    } else {
      if (localStorage) {
        const lastOrgSiteName = localStorage.getItem("classroomio_org_sitename");
        const lastOrg = orgsArray.find((org) => org.siteName === lastOrgSiteName);
        if (lastOrg) {
          currentOrg.set(lastOrg);
        }
      }
      const _currentOrg = get_store_value(currentOrg);
      if (!_currentOrg.siteName) {
        currentOrg.set(orgsArray[0]);
      }
    }
  }
  return {
    orgs: orgsArray,
    currentOrg: get_store_value(currentOrg),
    error
  };
}
async function getOrgAudience(orgId) {
  const { data, error } = await supabase.from("profile").select(
    `
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
    `
  ).eq("groupmember.group.organization_id", orgId).eq("groupmember.role_id", ROLE.STUDENT);
  console.log("data", data);
  const audience = (data || []).map((profile) => ({
    id: profile.id,
    name: profile.fullname,
    email: profile.email,
    avatar_url: profile.avatar_url,
    date_joined: new Date(profile.created_at).toDateString()
  }));
  orgAudience.set(audience);
  return {
    audience,
    error
  };
}
async function getCourseBySiteName(siteName) {
  const { data, error } = await supabase.from("course").select(
    `
      *,
      lessons:lesson(count),
      group!inner(
        organization!inner(id, name, siteName, avatar_url)
      )
    `
  ).eq("group.organization.siteName", siteName).eq("status", "ACTIVE").eq("is_published", true);
  if (error) {
    return [];
  }
  return data;
}
const CURRENT_ORG_QUERY = `
  id,
  name,
  siteName,
  avatar_url,
  landingpage,
  is_restricted,
  customization,
  theme,
  favicon,
  customDomain,
  isCustomDomainVerified,
  customCode,
  organization_plan(
    plan_name,
    is_active
  )
`;
async function getCurrentOrg(siteName, justGet = false, isCustomDomain = false) {
  let response = null;
  if (isCustomDomain) {
    response = await supabase.from("organization").select(CURRENT_ORG_QUERY).eq("customDomain", siteName).filter("isCustomDomainVerified", "eq", true).returns();
  } else {
    response = await supabase.from("organization").select(CURRENT_ORG_QUERY).eq("siteName", siteName).returns();
  }
  const { data, error } = response;
  const isDataEmpty = !data?.[0];
  if (!justGet && (error || isDataEmpty)) {
    console.error("Error getOrganization", error);
    return goto("/404");
  }
  if (!justGet) {
    if (isDataEmpty)
      return;
    currentOrg.set(data[0]);
  } else if (!isDataEmpty) {
    return data[0];
  }
}
async function createOrgPlan(params) {
  return await params.supabase.from("organization_plan").insert({
    activated_at: (/* @__PURE__ */ new Date()).toDateString(),
    org_id: params.orgId,
    triggered_by: params.triggeredBy,
    plan_name: params.planName,
    is_active: true,
    lmz_data: params.data
  });
}
async function cancelOrgPlan(params) {
  return await supabase.from("organization_plan").update({
    is_active: false,
    deactivated_at: (/* @__PURE__ */ new Date()).toDateString()
  }).match({
    plan_name: params.planName,
    org_id: params.orgId
  });
}

export { cancelOrgPlan as a, getCourseBySiteName as b, createOrgPlan as c, getOrgTeam as d, getOrganizations as e, getOrgAudience as f, getCurrentOrg as g };
//# sourceMappingURL=index6-4a1599e3.js.map
