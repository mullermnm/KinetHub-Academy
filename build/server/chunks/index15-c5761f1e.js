import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c4c9a845-f1e6-419b-9037-8dcbf7644a57", e._sentryDebugIdIdentifier = "sentry-dbid-c4c9a845-f1e6-419b-9037-8dcbf7644a57");
  } catch (e2) {
  }
}();
var LOCALE = /* @__PURE__ */ ((LOCALE2) => {
  LOCALE2["EN"] = "en";
  LOCALE2["HI"] = "hi";
  LOCALE2["FR"] = "fr";
  LOCALE2["PT"] = "pt";
  LOCALE2["DE"] = "de";
  LOCALE2["VI"] = "vi";
  LOCALE2["RU"] = "ru";
  LOCALE2["ES"] = "es";
  return LOCALE2;
})(LOCALE || {});
var COURSE_TYPE = /* @__PURE__ */ ((COURSE_TYPE2) => {
  COURSE_TYPE2["SELF_PACED"] = "SELF_PACED";
  COURSE_TYPE2["LIVE_CLASS"] = "LIVE_CLASS";
  return COURSE_TYPE2;
})(COURSE_TYPE || {});
var COURSE_VERSION = /* @__PURE__ */ ((COURSE_VERSION2) => {
  COURSE_VERSION2["V1"] = "V1";
  COURSE_VERSION2["V2"] = "V2";
  return COURSE_VERSION2;
})(COURSE_VERSION || {});

export { COURSE_TYPE as C, LOCALE as L, COURSE_VERSION as a };
//# sourceMappingURL=index15-c5761f1e.js.map
