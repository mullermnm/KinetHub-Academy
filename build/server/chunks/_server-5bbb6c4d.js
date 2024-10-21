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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "962df44c-fa31-46fb-90f2-0abd1b0cc4f7", e._sentryDebugIdIdentifier = "sentry-dbid-962df44c-fa31-46fb-90f2-0abd1b0cc4f7");
  } catch (e2) {
  }
}();
const supabase = getSupabase();
async function POST({ request }) {
  const { to, content, orgName, exerciseTitle } = await request.json();
  const accessToken = request.headers.get("Authorization") || "";
  if (!to || !content || !orgName) {
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
      subject: `[Submitted]: ${exerciseTitle}`,
      content
    }
  ];
  await sendEmail(emailData);
  return json({
    success: true,
    message: "Email sent"
  });
}

export { POST };
//# sourceMappingURL=_server-5bbb6c4d.js.map
