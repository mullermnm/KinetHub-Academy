import { s as selectedLocale } from './translations-90190f83.js';
import { j as json } from './index-62ac255a.js';
import './_sentry-release-injection-file-6be6a010.js';
import './index2-aea858a5.js';
import './utils-26d532f8.js';
import './index15-c5761f1e.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "05e33201-9f0a-46f9-8efd-147ef4671a39", e._sentryDebugIdIdentifier = "sentry-dbid-05e33201-9f0a-46f9-8efd-147ef4671a39");
  } catch (e2) {
  }
}();
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    selectedLocale.set(body.locale);
  } catch (e) {
    selectedLocale.set("en");
  }
  return json({ status: 200 });
};

export { POST };
//# sourceMappingURL=_server.ts-82169c3c.js.map
