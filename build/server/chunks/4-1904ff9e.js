import { r as redirect } from './index-62ac255a.js';
import { g as getCurrentOrg } from './index6-4a1599e3.js';
import { s as supabase, g as getSupabase } from './supabase-cbc58bc2.js';
import './_sentry-release-injection-file-6be6a010.js';
import './utils-26d532f8.js';
import './navigation-cd282f65.js';
import './org-8fc26a61.js';
import './index2-aea858a5.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "da27ff9e-77a4-4c1f-85b0-d533bc36668b", e._sentryDebugIdIdentifier = "sentry-dbid-da27ff9e-77a4-4c1f-85b0-d533bc36668b");
  } catch (e2) {
  }
}();
async function getProfile(email) {
  const { data } = await supabase.from("profile").select("*").eq("email", email).single();
  console.log("getProfile data", data);
  return data;
}
if (!supabase) {
  getSupabase();
}
const load = async ({ params = { hash: "" } }) => {
  try {
    const hashData = atob(decodeURIComponent(params.hash));
    console.log("hashData", hashData);
    const { orgId, email, orgSiteName } = JSON.parse(hashData);
    const currentOrg = await getCurrentOrg(orgSiteName, true);
    const profile = await getProfile(email);
    console.log("profile data", profile);
    return {
      invite: {
        orgId,
        email,
        currentOrg,
        profile
      }
    };
  } catch (error) {
    console.error("Error decoding invite params.hash", error);
    throw redirect(307, "/404");
  }
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-02c35c55.js')).default;
const server_id = "src/routes/invite/t/[hash]/+layout.server.ts";
const imports = ["_app/immutable/nodes/4.3d569f8c.js","_app/immutable/chunks/4.2681e1ca.js","_app/immutable/chunks/index.a2391391.js","_app/immutable/chunks/scheduler.ee52cacd.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-1904ff9e.js.map
