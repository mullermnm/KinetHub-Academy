import { b as private_env } from './shared-server-e0f2abd3.js';
import { O as OpenAIStream, S as StreamingTextResponse } from './index3-80b47e16.js';
import { Configuration, OpenAIApi } from 'openai-edge';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ba2aaff7-5320-4104-837f-5794b375fcb7", e._sentryDebugIdIdentifier = "sentry-dbid-ba2aaff7-5320-4104-837f-5794b375fcb7");
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
async function POST({ request }) {
  const { prompt } = await request.json();
  const response = await openai.createChatCompletion({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "Act like an assistant of a lecturer or an educator"
      },
      {
        role: "user",
        content: `${prompt}. DONT ADD ANY CSS STYLE TO THE HTML FORMATTING AND DON'T USE CODE HTML TAG`
      }
    ],
    stream: true
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}

export { POST, config };
//# sourceMappingURL=_server-493cb29a.js.map
