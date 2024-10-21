import { createClient } from '@supabase/supabase-js';
import { c as config } from './config-8c22ba68.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "09e02c8f-8d3e-4e97-9c4e-7c1d0b2bff5c", e._sentryDebugIdIdentifier = "sentry-dbid-09e02c8f-8d3e-4e97-9c4e-7c1d0b2bff5c");
  } catch (e2) {
  }
}();
let supabase;
const getSupabase = () => {
  if (supabase)
    return supabase;
  supabase = createClient(config.supabaseConfig.url, config.supabaseConfig.anonKey);
  return supabase;
};

export { getSupabase as g, supabase as s };
//# sourceMappingURL=supabase-cbc58bc2.js.map
