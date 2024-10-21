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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "91ddb80e-cc55-4b91-8c0f-2a12688c7818", e._sentryDebugIdIdentifier = "sentry-dbid-91ddb80e-cc55-4b91-8c0f-2a12688c7818");
  } catch (e2) {
  }
}();
const supabase = getSupabase();
async function POST({ request }) {
  const { to, courseName, studentName, studentEmail } = await request.json();
  const accessToken = request.headers.get("Authorization") || "";
  console.log("/POST api/email/course/teacher_student_joined", to, courseName);
  if (!to || !courseName || !studentName || !studentEmail) {
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
      from: `"ClassroomIO" <notify@mail.classroomio.com>`,
      to,
      subject: `[${courseName}] You've got a new student 🎉!`,
      content: `
      <p>Hi amazing tutor,</p>
      <p>Congratulations 🎉, a new student: <strong>${studentName} (${studentEmail})</strong> has joined a course you are teaching: ${courseName}</p>
      <p>We hope they have a great experience learning from the best (YOU).</p>
      <p>If you run into any issues, please don’t fail to reach out to us, we’d love to make your teaching experience as easy as possible.</p>
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
//# sourceMappingURL=_server-f4b904eb.js.map
