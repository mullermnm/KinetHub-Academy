import { j as json } from './index-62ac255a.js';
import { g as getServerSupabase } from './supabase.server-848f790f.js';
import { g as getFeedForNotification } from './index4-4ad3d696.js';
import { s as sendEmail } from './sendEmail-2b57c245.js';
import './_sentry-release-injection-file-6be6a010.js';
import './shared-server-e0f2abd3.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './supabase-cbc58bc2.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "46e27c5a-27b5-4b30-954e-26c6c16ab4bd", e._sentryDebugIdIdentifier = "sentry-dbid-46e27c5a-27b5-4b30-954e-26c6c16ab4bd");
  } catch (e2) {
  }
}();
const supabase = getServerSupabase();
const sendEmailNotification = async (feedId, authorId, comment) => {
  const feed = await getFeedForNotification({
    supabase,
    feedId,
    authorId
  });
  console.log({ feed });
  if (!feed)
    return;
  const postLink = `https://${feed.org.siteName}.KinetsHub.com/courses/${feed.courseId}?feedId=${feed.id}`;
  if (comment) {
    const emailData = [
      {
        from: `"${feed.org.name} - KinetsHub" <notify@mail.classroomio.com>`,
        to: feed.teacherEmail,
        subject: `[${feed.courseTitle}] - News feed comment`,
        content: `
      <p>A student left you a comment on your newsfeed post</p>

      <div style="font-style: italic; margin-top: 10px;">${comment}</div>
      <div>
        <a class="button" href="${postLink}">View comment</a>
      </div>
      `,
        replyTo: "noreply@classroomio.com"
      }
    ];
    await sendEmail(emailData);
    return;
  }
  if (!feed.courseMembers.length) {
    return;
  }
  const emailsData = feed.courseMembers.map((member) => ({
    from: `"${feed.org.name} - ClassroomIO" <notify@mail.classroomio.com>`,
    to: member.email,
    replyTo: feed.teacherEmail,
    subject: `[${feed.courseTitle}] - New post in course`,
    content: `
    <p>${feed.teacherName} made a post in a course you are taking: ${feed.courseTitle}.</p>

    <div style="font-style: italic; margin-top: 10px;">${feed.content}</div>
    <div>
      <a class="button" href="${postLink}">View post</a>
    </div>
    `
  }));
  console.log("Sending emails to all students", feed.courseMembers.length);
  await sendEmail(emailsData);
};
async function POST({ request }) {
  const { authorId, feedId, comment } = await request.json();
  const accessToken = request.headers.get("Authorization") || "";
  console.log("/POST api/email/course/newsfeed");
  if (!authorId || !feedId || !accessToken) {
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
  await sendEmailNotification(feedId, authorId, comment);
  return json({
    success: true,
    message: "Email sent"
  });
}

export { POST };
//# sourceMappingURL=_server.ts-3c3b54f6.js.map
