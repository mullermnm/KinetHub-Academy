import { j as json } from './index-62ac255a.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fd9c65fe-b742-40ff-95aa-998e5d48b60d", e._sentryDebugIdIdentifier = "sentry-dbid-fd9c65fe-b742-40ff-95aa-998e5d48b60d");
  } catch (e2) {
  }
}();
async function POST({ request }) {
  try {
    const body = await request.json();
    console.log(body);
    return json({ message: "Webhook received" });
  } catch (err) {
    console.error(err);
    return json({ message: "Server error" }, { status: 500 });
  }
}
function GET() {
  return json({
    success: true
  });
}

export { GET, POST };
//# sourceMappingURL=_server-60bb0824.js.map
