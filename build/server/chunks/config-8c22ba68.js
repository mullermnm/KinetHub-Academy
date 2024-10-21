import { p as public_env } from './shared-server-e0f2abd3.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4afde6ad-8634-4e23-8de2-930face52a04", e._sentryDebugIdIdentifier = "sentry-dbid-4afde6ad-8634-4e23-8de2-930face52a04");
  } catch (e2) {
  }
}();
const config = {
  supabaseConfig: {
    url: public_env.PUBLIC_SUPABASE_URL || "http://147.79.102.35:8000",
    anonKey: public_env.PUBLIC_SUPABASE_ANON_KEY || "anon-key"
  }
};

export { config as c };
//# sourceMappingURL=config-8c22ba68.js.map
