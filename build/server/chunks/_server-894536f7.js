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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "04c99095-105c-4fa6-9c32-3ffa2a611d2e", e._sentryDebugIdIdentifier = "sentry-dbid-04c99095-105c-4fa6-9c32-3ffa2a611d2e");
  } catch (e2) {
  }
}();
const supabase = getSupabase();
async function POST({ request }) {
  const body = await request.json();
  const { org, email } = body;
  const accessToken = request.headers.get("Authorization");
  console.log("/POST api/email/invite", body);
  if (!org || !Object.keys(org).length || !email || !accessToken) {
    return json(
      { success: false, message: "Org data and Teacher name are required" },
      { status: 400 }
    );
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
  const { id, name, siteName } = org;
  const origin = request.headers.get("origin");
  const inviteData = JSON.stringify({
    email,
    orgId: id,
    orgSiteName: siteName
  });
  const inviteLink = `${origin}/invite/t/${encodeURIComponent(btoa(inviteData))}`;
  console.log("inviteData", inviteData);
  const emailData = [
    {
      from: `"Best from ClassroomIO" <notify@mail.classroomio.com>`,
      to: email,
      subject: `Join ${name} on ClassroomIO 😃`,
      content: `
    <p>Hey there,</p>
      <p> You have been invited to join ${name} on ClassroomIO 🎉🎉🎉.</p>
      <div>
        <a class="button" href="${inviteLink}">Accept Invitation</a>
      </div>
    `
    }
  ];
  await sendEmail(emailData);
  return json({
    success: true,
    message: "Email sent"
  });
}

export { POST };
//# sourceMappingURL=_server-894536f7.js.map
