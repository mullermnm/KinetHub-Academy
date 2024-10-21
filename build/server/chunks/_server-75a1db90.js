import { b as private_env } from './shared-server-e0f2abd3.js';
import { O as OpenAIStream, S as StreamingTextResponse } from './index3-80b47e16.js';
import { Configuration, OpenAIApi } from 'openai-edge';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ac94fa32-9626-4b35-a41e-1076a24f5f97", e._sentryDebugIdIdentifier = "sentry-dbid-ac94fa32-9626-4b35-a41e-1076a24f5f97");
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
        content: "You are a teaching assistant, you only spit out JSON and nothing else, dont give any explanation."
      },
      {
        role: "user",
        content: `
        Given this array of objects below, there are 4 keys , id, question, answer and  points. You are required to come up with a score between 0 and the point for each answer provided to the question and a simple explanation for giving that score, you are to return an array of object in json with the following keys; id which is the id provided for that object in the initial array, score which is the value you gave for that question and then your explanation in this format below:

        {
          id,
          score,
          explanation,
        }
      
        IMPORTANT: DO NOT GIVE ANY OTHER TEXT EXCEPT THE JSON

        The array you need to grade is below: 
        ${prompt}
        `
      }
    ],
    stream: true
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}

export { POST, config };
//# sourceMappingURL=_server-75a1db90.js.map
