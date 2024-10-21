import { Configuration, OpenAIApi } from 'openai-edge';
import { O as OpenAIStream, S as StreamingTextResponse } from './index3-80b47e16.js';
import { b as private_env } from './shared-server-e0f2abd3.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2cd38e00-e7f3-49cc-886e-a781c9bb4edd", e._sentryDebugIdIdentifier = "sentry-dbid-2cd38e00-e7f3-49cc-886e-a781c9bb4edd");
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
  const { questionNumber, optionNumber, lessonNote } = JSON.parse(prompt);
  const refinedPrompt = `
Please note this typescript interface:

interface Question_type {
  id: number;
  label: any;
}
const QuestionTypes: Question_type[] = [
  {
    id: 1,
    label: 'RADIO'
  },
  {
    id: 2,
    label: 'CHECKBOX'
  },
  {
    id: 3,
    label: 'TEXTAREA'
  }
];

interface ExerciseTemplate {
  title: string;
  description: string;
  questionnaire: {
    questions: {
      title: string;
      name: string;
      points: number; // a number out of 10 to score the student if student gets the correct answer
      order: number; // a unique number from 0 to n+1, that orders the question in ascending order
      question_type: Question_type;
      options: {
        label: string;
        is_correct: boolean;
      };
    }[]
  };
}

I am a teacher and I need your help evaluating my students after I have taught a lesson. Please generate a test with ${questionNumber} questions and ${optionNumber} options. The sourse of this test should come from my lesson note in thripple quotes: """${lessonNote}""". Format the quiz to match the ExerciseTemplate interface above and VERY IMPORTANTANTLY: ONLY RETURN JSON FORMAT AND DO NOT EXPLAIN ANTHING.
NB: Ask a mixture of ${optionNumber} options and ${questionNumber} DIFFERENT Question Types(RADIO, CHECKBOX AND TEXTAREA), mark the correct answer.`;
  const response = await openai.createChatCompletion({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You only spit out JSON and nothing else, dont give any explanation."
      },
      {
        role: "user",
        content: refinedPrompt
      }
    ],
    stream: true
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}

export { POST, config };
//# sourceMappingURL=_server-a87a3740.js.map
