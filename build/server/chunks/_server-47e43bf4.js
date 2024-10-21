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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "789b3052-0765-4b6d-9d1c-8262701a8b01", e._sentryDebugIdIdentifier = "sentry-dbid-789b3052-0765-4b6d-9d1c-8262701a8b01");
  } catch (e2) {
  }
}();
const supabase = getSupabase();
async function POST({ request }) {
  const { to, name } = await request.json();
  const accessToken = request.headers.get("Authorization");
  console.log("/POST api/email/welcome", to, name);
  if (!to || !name || !accessToken) {
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
  const emailData = [
    {
      from: `"Best from ClassroomIO" <notify@mail.classroomio.com>`,
      to,
      subject: "Welcome to ClassroomIO!",
      content: `
    <p>Dear ${name},</p>
      <p>My name is Best, the founder of ClassroomIO. I saw you signed up, any questions so far?</p>
      <p>
       Would you like to get a walkthrough of the tool in a 30 minutes product demo? It's free and we won't try to sell you anything, just want to learn from your use case and show you all the cool features and flows we thought about.
      </p>
      <p>
        Interested? just book a 30mn demo slot in our calendar!
      </p>
      <div>
        <a href="https://classroomio.com/demo">Book demo</a>
      </div>
      <p>
        PS: I reply personally to every email. We don't have an outsourced support team at the other end of the globe.. ;-)
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
//# sourceMappingURL=_server-47e43bf4.js.map
