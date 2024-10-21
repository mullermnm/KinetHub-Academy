import { j as json } from './index-62ac255a.js';
import crypto from 'crypto';
import { b as private_env } from './shared-server-e0f2abd3.js';
import { c as createOrgPlan, a as cancelOrgPlan } from './index6-4a1599e3.js';
import { P as PLAN } from './org-8fc26a61.js';
import { g as getServerSupabase } from './supabase.server-848f790f.js';
import './_sentry-release-injection-file-6be6a010.js';
import './utils-26d532f8.js';
import './navigation-cd282f65.js';
import './supabase-cbc58bc2.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './index2-aea858a5.js';
import 'lodash/cloneDeep.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "71b88174-23d1-4cdc-9ec3-d0bc1e79e511", e._sentryDebugIdIdentifier = "sentry-dbid-71b88174-23d1-4cdc-9ec3-d0bc1e79e511");
  } catch (e2) {
  }
}();
async function POST({ request }) {
  try {
    const supabase = getServerSupabase();
    const clonedReq = request.clone();
    const eventType = request.headers.get("X-Event-Name");
    const body = await request.json();
    const secret = private_env.LEMON_SQUEEZY_WEBHOOK_SECRET;
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(hmac.update(await clonedReq.text()).digest("hex"), "utf8");
    const signature = Buffer.from(request.headers.get("X-Signature") || "", "utf8");
    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }
    console.log(body);
    if (eventType === "subscription_created" || eventType === "subscription_resumed") {
      const orgId = body.meta.custom_data.org_id;
      const triggeredBy = body.meta.custom_data.triggered_by;
      const isSuccessful = body.data.attributes.status === "active";
      console.log({
        orgId,
        triggeredBy,
        isSuccessful
      });
      if (isSuccessful && orgId) {
        const { data, error } = await createOrgPlan({
          supabase,
          orgId,
          triggeredBy: parseInt(triggeredBy),
          planName: PLAN.EARLY_ADOPTER,
          data: body.data
        });
        if (error)
          console.error("Error creating org plan", error);
        console.log("Create plan", data);
      }
    }
    if (["subscription_cancelled", "subscription_expired", "subscription_payment_refunded"].includes(
      `${eventType}`
    )) {
      const orgId = body.meta.custom_data.org_id;
      const { data, error } = await cancelOrgPlan({
        orgId,
        planName: PLAN.EARLY_ADOPTER
      });
      if (error)
        console.error("Error canceling org plan", error);
      console.log("Cancel plan", data);
    }
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
//# sourceMappingURL=_server-f2809699.js.map
