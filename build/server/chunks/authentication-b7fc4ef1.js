import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fca780af-713d-4872-8986-d632578f8ff4", e._sentryDebugIdIdentifier = "sentry-dbid-fca780af-713d-4872-8986-d632578f8ff4");
  } catch (e2) {
  }
}();
const SIGNUP_FIELDS = {
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
};
const RESET_FIELDS = {
  password: "",
  confirmPassword: ""
};
const LOGIN_FIELDS = {
  email: "",
  password: ""
};
const FORGOT_PASSWORD_FIELDS = {
  email: ""
};

export { FORGOT_PASSWORD_FIELDS as F, LOGIN_FIELDS as L, RESET_FIELDS as R, SIGNUP_FIELDS as S };
//# sourceMappingURL=authentication-b7fc4ef1.js.map
