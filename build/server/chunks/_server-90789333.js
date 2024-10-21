import { Configuration, OpenAIApi } from 'openai-edge';
import { O as OpenAIStream, S as StreamingTextResponse } from './index3-80b47e16.js';
import { b as private_env } from './shared-server-e0f2abd3.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e4c31dab-cfc5-497e-8e83-899344609a54", e._sentryDebugIdIdentifier = "sentry-dbid-e4c31dab-cfc5-497e-8e83-899344609a54");
  } catch (e2) {
  }
}();
const openAIConfig = new Configuration({
  apiKey: private_env.OPENAI_API_KEY
});
const openai = new OpenAIApi(openAIConfig);
const config = {
  runtime: "edge"
};
const instruction = {
  outline: "a structured lesson outline",
  note: "a sample lesson note",
  activities: "few interactive lesson activities to my lecture"
};
async function POST({ request }) {
  const { prompt } = await request.json();
  const { courseTitle, lessonTitle, type, locale } = JSON.parse(prompt);
  const response = await openai.createChatCompletion({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "Act like an assistant of a lecturer"
      },
      {
        role: "user",
        content: `Generate ${instruction[type]} given the course title is "${courseTitle}" and the title of the lesson is "${lessonTitle}". Format in HTML without any styling. MOST IMPORTANT DON'T include the title of the course and don't include the lesson title: "${lessonTitle}" in your output. Please make sure the content is well detailed and you output the content in this locale: ${locale}`
      }
    ],
    stream: true
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}

export { POST, config };
//# sourceMappingURL=_server-90789333.js.map
