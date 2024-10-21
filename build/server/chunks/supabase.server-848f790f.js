import { b as private_env } from './shared-server-e0f2abd3.js';
import { createClient } from '@supabase/supabase-js';
import { c as config } from './config-8c22ba68.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "86c8a4d7-2b0c-49b8-b107-137d6c27bd3a", e._sentryDebugIdIdentifier = "sentry-dbid-86c8a4d7-2b0c-49b8-b107-137d6c27bd3a");
  } catch (e2) {
  }
}();
let supabase;
const getServerSupabase = () => {
  if (supabase)
    return supabase;
  supabase = createClient(
    config.supabaseConfig.url,
    private_env.PRIVATE_SUPABASE_SERVICE_ROLE || "some-key-here",
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
      }
    }
  );
  return supabase;
};

export { getServerSupabase as g };
//# sourceMappingURL=supabase.server-848f790f.js.map
