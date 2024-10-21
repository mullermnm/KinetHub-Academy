import { d as derived, w as writable } from './index2-aea858a5.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d6ad25c3-71dc-4632-a6a6-a718cd2651b7", e._sentryDebugIdIdentifier = "sentry-dbid-d6ad25c3-71dc-4632-a6a6-a718cd2651b7");
  } catch (e2) {
  }
}();
const courses = writable([]);
const coursesInProgress = derived(
  courses,
  ($courses) => $courses.length > 0 ? $courses.filter((course) => {
    return course.total_lessons !== course.progress_rate;
  }) : []
);
const coursesComplete = derived(
  courses,
  ($courses) => $courses.length > 0 ? $courses.filter((course) => {
    return course.total_lessons === course.progress_rate;
  }) : []
);
const courseMetaDeta = writable({
  isLoading: true,
  view: "grid"
});
const createCourseModal = writable({
  title: "",
  type: "",
  description: "",
  emails: "",
  tutors: "",
  students: ""
});

export { courses as a, coursesComplete as b, courseMetaDeta as c, coursesInProgress as d, createCourseModal as e };
//# sourceMappingURL=store5-4ab63ff0.js.map
