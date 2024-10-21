import { d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, d as spread, h as escape_attribute_value, f as escape_object, e as escape } from './ssr-10c5b872.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "cf0f98cd-2d25-4f0f-a6d3-26ecb3c42fa0", e._sentryDebugIdIdentifier = "sentry-dbid-cf0f98cd-2d25-4f0f-a6d3-26ecb3c42fa0");
  } catch (e2) {
  }
}();
const ChevronDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path></svg>`;
});
const ROUTES = {
  COURSES: "courses",
  LESSONS: "lessons"
};
function getGroupMemberId(people, profileId) {
  const groupMember = people.find((person) => person.profile_id === profileId);
  return groupMember ? groupMember.id : null;
}
function getNavItemRoute(courseId, routeId) {
  const path = `/${ROUTES.COURSES}/${courseId}`;
  if (!routeId) {
    return path;
  }
  return `${path}/${routeId}`;
}
function getLessonsRoute(courseId, lessonId) {
  const path = getNavItemRoute(courseId, ROUTES.LESSONS);
  if (!lessonId) {
    return path;
  }
  return `${path}/${lessonId}`;
}
function getLectureNo(index, initNo = "0") {
  if (index <= 9) {
    return `${initNo}${index}`;
  }
  return index;
}
function formatAnswers(data) {
  const answers = {};
  const questionByIdAndName = {};
  for (const question of data.questions) {
    questionByIdAndName[question.id] = question.name;
  }
  for (const answer of data.answers) {
    const questionName = questionByIdAndName[answer.question_id];
    answers[questionName] = Array.isArray(answer.answers) && answer.answers.length ? answer.answers : answer.open_answer;
  }
  return answers;
}

export { ChevronDown as C, getNavItemRoute as a, getLessonsRoute as b, getGroupMemberId as c, formatAnswers as f, getLectureNo as g };
//# sourceMappingURL=function-efda068b.js.map
