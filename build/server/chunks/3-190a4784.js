import { r as redirect } from './index-62ac255a.js';
import { s as supabase, g as getSupabase } from './supabase-cbc58bc2.js';
import { g as getCurrentOrg } from './index6-4a1599e3.js';
import './_sentry-release-injection-file-6be6a010.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './shared-server-e0f2abd3.js';
import './utils-26d532f8.js';
import './navigation-cd282f65.js';
import './org-8fc26a61.js';
import './index2-aea858a5.js';
import 'lodash/cloneDeep.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8392fc56-71fa-40d4-8d85-b810f5953116", e._sentryDebugIdIdentifier = "sentry-dbid-8392fc56-71fa-40d4-8d85-b810f5953116");
  } catch (e2) {
  }
}();
if (!supabase) {
  getSupabase();
}
const load = async ({ params = { hash: "" } }) => {
  try {
    const courseHashData = atob(decodeURIComponent(params.hash));
    console.log("courseHashData", courseHashData);
    const { id, name, description, orgSiteName } = JSON.parse(courseHashData);
    if (!id || !name || !description || !orgSiteName) {
      throw "Validation failed";
    }
    const currentOrg = await getCurrentOrg(orgSiteName, true);
    return {
      id,
      name,
      description,
      currentOrg
    };
  } catch (error) {
    console.error("Error decoding course invite params.hash", error);
    throw redirect(307, "/404");
  }
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-02c35c55.js')).default;
const server_id = "src/routes/invite/s/[hash]/+layout.server.ts";
const imports = ["_app/immutable/nodes/3.3d569f8c.js","_app/immutable/chunks/4.2681e1ca.js","_app/immutable/chunks/index.a2391391.js","_app/immutable/chunks/scheduler.ee52cacd.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-190a4784.js.map
