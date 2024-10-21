import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "44517bfe-3727-4faf-8877-9e5251b85600", e._sentryDebugIdIdentifier = "sentry-dbid-44517bfe-3727-4faf-8877-9e5251b85600");
  } catch (e2) {
  }
}();
function toggleBodyByMode(isDark) {
  if (!document)
    return;
  if (isDark) {
    document.body.className = document.body.className.concat(" ", "dark");
  } else {
    document.body.className = document.body.className.replace(" dark", "");
  }
}
function isCoursesPage(path) {
  return /courses\/[a-z 0-9 -]/.test(path);
}
function isCoursePage(path) {
  return /course\/[a-z 0-9 -]/.test(path);
}
function isOrgPage(path) {
  return /org\/[a-z 0-9 -]/.test(path);
}
function isQuizPage(path) {
  return /org\/[a-z 0-9 -]+\/quiz\/[a-z 0-9 -]/.test(path);
}
function isLMSPage(path) {
  return /lms[\/a-z 0-9 -]*/.test(path);
}

export { isCoursesPage as a, isLMSPage as b, isCoursePage as c, isQuizPage as d, isOrgPage as i, toggleBodyByMode as t };
//# sourceMappingURL=app2-29b60895.js.map
