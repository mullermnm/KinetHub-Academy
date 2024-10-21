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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ab3026c2-133b-46cc-86fd-e29d1973e248", e._sentryDebugIdIdentifier = "sentry-dbid-ab3026c2-133b-46cc-86fd-e29d1973e248");
  } catch (e2) {
  }
}();
const supabase = getSupabase();
async function POST({ request }) {
  const { to, orgName, courseName } = await request.json();
  const accessToken = request.headers.get("Authorization") || "";
  console.log("/POST api/email/course/student_welcome", to, orgName);
  if (!to || !orgName || !courseName) {
    return json({ success: false, message: "Missing required fields" }, { status: 400 });
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
  const emailData = [
    {
      from: `"${orgName} (via ClassroomIO.com)" <notify@mail.classroomio.com>`,
      to,
      subject: `${orgName} - Welcome to Class 🎉`,
      content: `
    <p>Hi there,</p>
      <p>Congratulations 🎉, you’ve successfully joined: <strong>${courseName}</strong></p>
      <p>Everything has been set up for you to have an amazing learning experience.</p>
      <p>If you run into any issues, don’t fail to reach out to your instructor(s).</p>
      <p>Cheers,</p>
      <p>${orgName}</p>
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
//# sourceMappingURL=_server-a9a0d6a2.js.map
