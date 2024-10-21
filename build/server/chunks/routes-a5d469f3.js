import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "adbfa626-97e8-41c2-98b5-f3c18204213a", e._sentryDebugIdIdentifier = "sentry-dbid-adbfa626-97e8-41c2-98b5-f3c18204213a");
  } catch (e2) {
  }
}();
const ROUTE = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  LMS_HOME: "/home",
  ONBOARDING: "/onboarding",
  COURSES: "/courses",
  PAGES: "/pages",
  COURSE: "/course",
  LOGIN: "/login",
  SIGN_UP: "/signup",
  INVITE_TEACHER: "/invite/t",
  INVITE_STUDENT: "/invite/s",
  PROFILE: "/profile",
  PEOPLE: "/people",
  DISCUSSIONS: "/discussions",
  ASK: "/ask",
  FORGOT: "/forgot",
  RESET: "/reset"
};
const ROUTES_TO_HIDE_NAV = [
  ROUTE.LOGIN,
  ROUTE.SIGN_UP,
  ROUTE.LMS_HOME,
  `^${ROUTE.INVITE_TEACHER}/.*`,
  `^${ROUTE.INVITE_STUDENT}/.*`,
  ROUTE.FORGOT,
  ROUTE.RESET,
  ROUTE.ONBOARDING
];

export { ROUTES_TO_HIDE_NAV as R, ROUTE as a };
//# sourceMappingURL=routes-a5d469f3.js.map
