import { p as public_env } from './shared-server-e0f2abd3.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b7a8ce4e-7afd-4232-8dce-7d4730d49067", e._sentryDebugIdIdentifier = "sentry-dbid-b7a8ce4e-7afd-4232-8dce-7d4730d49067");
  } catch (e2) {
  }
}();
const sendEmail = async (emailDataArray) => {
  try {
    const response = await fetch(`${public_env.PUBLIC_SERVER_URL}/sendEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailDataArray)
    });
    if (!response.ok) {
      console.log("Failed to send emails");
      return;
    }
    const responseData = await response.json();
    console.log("Emails sent successfully:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error sending emails:", error);
    return;
  }
};

export { sendEmail as s };
//# sourceMappingURL=sendEmail-2b57c245.js.map
