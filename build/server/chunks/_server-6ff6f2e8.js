import { j as json } from './index-62ac255a.js';
import { createCheckout } from '@lemonsqueezy/lemonsqueezy.js';
import { b as private_env } from './shared-server-e0f2abd3.js';
import { c as configureLemonSqueezy } from './index5-30d61372.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "628e0570-0960-4779-9942-c2b30dee74c6", e._sentryDebugIdIdentifier = "sentry-dbid-628e0570-0960-4779-9942-c2b30dee74c6");
  } catch (e2) {
  }
}();
async function POST({ request }) {
  const { email, name, orgId, productId, triggeredBy } = await request.json();
  await configureLemonSqueezy();
  if (!productId) {
    return json({ success: false, message: "Product Id is required" }, { status: 400 });
  }
  const checkoutData = {
    email,
    name,
    custom: {
      org_id: orgId,
      triggered_by: `${triggeredBy}`
    }
  };
  console.log({ checkoutData });
  const { data } = await createCheckout(private_env.LEMON_SQUEEZY_STORE_ID, productId, {
    checkoutData
  });
  const checkoutURL = data?.data.attributes.url;
  console.log({ checkoutURL });
  return json({
    success: true,
    checkoutURL
  });
}

export { POST };
//# sourceMappingURL=_server-6ff6f2e8.js.map
