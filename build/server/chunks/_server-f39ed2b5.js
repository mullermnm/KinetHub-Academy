import { j as json } from './index-62ac255a.js';
import { getSubscription } from '@lemonsqueezy/lemonsqueezy.js';
import { c as configureLemonSqueezy } from './index5-30d61372.js';
import './_sentry-release-injection-file-6be6a010.js';
import './shared-server-e0f2abd3.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "55a422c7-fee8-4c81-ad93-97354182a1bc", e._sentryDebugIdIdentifier = "sentry-dbid-55a422c7-fee8-4c81-ad93-97354182a1bc");
  } catch (e2) {
  }
}();
async function GET({ url }) {
  const subscriptionId = url.searchParams.get("subscriptionId");
  await configureLemonSqueezy();
  if (!subscriptionId) {
    return json({ success: false, message: "Subscription id is required" }, { status: 400 });
  }
  const response = await getSubscription(subscriptionId);
  const customerPortal = response?.data?.data?.attributes?.urls?.customer_portal;
  console.log({ customerPortal });
  return json({
    success: true,
    customerPortal
  });
}

export { GET };
//# sourceMappingURL=_server-f39ed2b5.js.map
