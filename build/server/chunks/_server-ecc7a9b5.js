import { j as json } from './index-62ac255a.js';
import { s as sendEmail } from './sendEmail-2b57c245.js';
import './_sentry-release-injection-file-6be6a010.js';
import './shared-server-e0f2abd3.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3669c0fd-f97e-4cbf-a875-3e3e72615d3f", e._sentryDebugIdIdentifier = "sentry-dbid-3669c0fd-f97e-4cbf-a875-3e3e72615d3f");
  } catch (e2) {
  }
}();
async function POST({ request }) {
  const { to, courseName, studentEmail, studentFullname } = await request.json();
  console.log(
    "/POST api/email/course/teacher_student_buycourse",
    to,
    courseName,
    studentEmail,
    studentFullname
  );
  if (!to || !courseName || !studentEmail || !studentFullname) {
    return json({ success: false, message: "Missing required fields" }, { status: 400 });
  }
  const emailData = [
    {
      from: `"ClassroomIO" <notify@mail.classroomio.com>`,
      to,
      subject: `[${courseName}] Request to Join Course!`,
      content: `
    <p>Hi amazing tutor,</p>
      <p> A new student has requested to join a course you are teaching: “${courseName}"</p>
      <p style="font: bold;">Student details</p>
      <p>
        Name: ${studentFullname}<br />
       Email: ${studentEmail}
      </p>
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
//# sourceMappingURL=_server-ecc7a9b5.js.map
