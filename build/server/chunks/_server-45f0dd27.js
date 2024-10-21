import { j as json } from './index-62ac255a.js';
import { g as getSupabase } from './supabase-cbc58bc2.js';
import { s as sendEmail } from './sendEmail-2b57c245.js';
import './_sentry-release-injection-file-6be6a010.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './shared-server-e0f2abd3.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "67d9f736-084f-4268-9384-30720c6fc03c", e._sentryDebugIdIdentifier = "sentry-dbid-67d9f736-084f-4268-9384-30720c6fc03c");
  } catch (e2) {
  }
}();
const supabase = getSupabase();
async function POST({ request }) {
  const { to, profileId, orgSiteName, fullname } = await request.json();
  const accessToken = request.headers.get("Authorization");
  console.log("/POST api/email/verify_email", to, profileId);
  if (!to || !profileId || !accessToken) {
    return json({ success: false, message: "Name and To are required fields" }, { status: 400 });
  }
  let user;
  try {
    const { data } = await supabase.auth.getUser(accessToken);
    user = data.user;
  } catch (error) {
    console.error(error);
  }
  if (!user) {
    return json({ success: false, message: "Unauthenticated user" }, { status: 401 });
  }
  const origin = request.headers.get("origin");
  const verificationData = JSON.stringify({
    profileId,
    orgSiteName
  });
  const verificationLink = `${origin}/api/verify?data=${encodeURIComponent(
    btoa(verificationData)
  )}`;
  const emailData = [
    {
      from: `"Best from ClassroomIO" <notify@mail.classroomio.com>`,
      to,
      subject: "Action Required: Confirm your email",
      content: `
  <p><strong>Hi ${fullname} 👋</strong></p>
  <p>Welcome to ClassroomIO, new friend! In order to get your account ready for usage, we need to verify your email. </p>
  <p>We do this to make sure we don't get fake user emails in our signup. To get the best out of our product, we'll need you to verify your email by clicking the <strong>Verify</strong> button below
  </p>
  <div>
  <a class="button" href="${verificationLink}">Verify</a>
  </div>
  `
    }
  ];
  await sendEmail(emailData);
  return json({
    success: true,
    message: `Email sent ${verificationLink}`
  });
}

export { POST };
//# sourceMappingURL=_server-45f0dd27.js.map
