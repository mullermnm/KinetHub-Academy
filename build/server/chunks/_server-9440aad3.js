import { j as json } from './index-62ac255a.js';
import { s as sendEmail } from './sendEmail-2b57c245.js';
import './_sentry-release-injection-file-6be6a010.js';
import './shared-server-e0f2abd3.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c437cf2a-9285-4ced-9f7f-004bca94fe5f", e._sentryDebugIdIdentifier = "sentry-dbid-c437cf2a-9285-4ced-9f7f-004bca94fe5f");
  } catch (e2) {
  }
}();
async function POST({ request }) {
  const { to, courseName, teacherEmail, studentFullname, orgName } = await request.json();
  console.log(
    "/POST api/email/course/student_prove_payment",
    to,
    courseName,
    teacherEmail,
    studentFullname,
    orgName
  );
  if (!to || !courseName || !teacherEmail || !studentFullname || !orgName) {
    return json({ success: false, message: "Missing required fields" }, { status: 400 });
  }
  const emailData = [
    {
      from: `"${orgName} - ClassroomIO" <notify@mail.classroomio.com>`,
      to,
      replyTo: teacherEmail,
      subject: `[${courseName}] One more step left`,
      content: `
    <p>Hi ${studentFullname},</p>
      <p>You are one step closer to joining: <strong>${courseName}</strong></p>
      <p>Please send your proof of payment to: <strong>${teacherEmail}</strong>, in order to join the course.</p>
      <p>Talk to you soon and see you in class.</p>
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
//# sourceMappingURL=_server-9440aad3.js.map
