import { b as private_env } from './shared-server-e0f2abd3.js';
import { lemonSqueezySetup } from '@lemonsqueezy/lemonsqueezy.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d45b1d02-fb3b-45a8-b1e3-e53751aa531c", e._sentryDebugIdIdentifier = "sentry-dbid-d45b1d02-fb3b-45a8-b1e3-e53751aa531c");
  } catch (e2) {
  }
}();
function configureLemonSqueezy() {
  return lemonSqueezySetup({
    apiKey: private_env.LEMON_SQUEEZY_API_KEY,
    onError: (error) => {
      throw new Error(`Lemon Squeezy API error: ${error.message}`);
    }
  });
}

export { configureLemonSqueezy as c };
//# sourceMappingURL=index5-30d61372.js.map
