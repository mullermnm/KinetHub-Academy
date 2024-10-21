import { j as json, r as redirect } from './index-62ac255a.js';
import { g as getServerSupabase } from './supabase.server-848f790f.js';
import './_sentry-release-injection-file-6be6a010.js';
import './shared-server-e0f2abd3.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5b9b6217-cee8-450e-843a-5d2bc8be5803", e._sentryDebugIdIdentifier = "sentry-dbid-5b9b6217-cee8-450e-843a-5d2bc8be5803");
  } catch (e2) {
  }
}();
const GET = async ({ url }) => {
  const supabase = getServerSupabase();
  const data = url.searchParams.get("data");
  if (!data)
    return json({ message: "data is not found" }, { status: 404 });
  const hashData = decodeURIComponent(data);
  console.log("hashData", hashData);
  const decodedData = atob(hashData);
  console.log("decodedData", decodedData);
  const { profileId, orgSiteName } = JSON.parse(decodedData);
  const { error } = await supabase.from("profile").update({ is_email_verified: true, verified_at: (/* @__PURE__ */ new Date()).toDateString() }).match({ id: profileId });
  if (error) {
    console.log("profile not found", error);
    throw redirect(307, "/404");
  }
  throw redirect(307, `/org/${orgSiteName}?welcomePopup=true`);
};

export { GET };
//# sourceMappingURL=_server-6f8bbd6e.js.map
