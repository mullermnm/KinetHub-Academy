import { j as json } from './index-62ac255a.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1fc21a4e-43a7-40f2-9125-3bb9950e73b5", e._sentryDebugIdIdentifier = "sentry-dbid-1fc21a4e-43a7-40f2-9125-3bb9950e73b5");
  } catch (e2) {
  }
}();
async function GET({ url }) {
  const museFid = url.searchParams.get("museFid");
  console.log("museFid");
  return json({ success: true, museFid });
}

export { GET };
//# sourceMappingURL=_server-f7f23a71.js.map
