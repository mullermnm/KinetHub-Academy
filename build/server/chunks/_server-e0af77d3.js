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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6ffa6a3b-c962-406a-934a-42369b748cb1", e._sentryDebugIdIdentifier = "sentry-dbid-6ffa6a3b-c962-406a-934a-42369b748cb1");
  } catch (e2) {
  }
}();
const supabase = getSupabase();
async function POST({ request }) {
  const { to, name, orgName, courseName, orgSiteName } = await request.json();
  const accessToken = request.headers.get("Authorization") || "";
  console.log("/POST api/email/course/teacher_welcome", to, name, orgName);
  if (!to || !name || !orgName || !courseName || !orgSiteName) {
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
  const origin = request.headers.get("origin");
  const inviteLink = `${origin}/org/${orgSiteName}/courses`;
  const emailData = [
    {
      from: `"${orgName} (via ClassroomIO.com)" <notify@mail.classroomio.com>`,
      to,
      subject: `You have been invited to a course in ${orgName}!`,
      content: `
    <p>Hey ${name},</p>
      <p> You have been given access to teach a course by ${orgName}</p>
      <p>The course is titled: ${courseName}</p>
      <div>
        <a class="button" href="${inviteLink}">Open Dashboard</a>
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
//# sourceMappingURL=_server-e0af77d3.js.map
