import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ba604ecc-3273-4235-84aa-596dde9cf3a3", e._sentryDebugIdIdentifier = "sentry-dbid-ba604ecc-3273-4235-84aa-596dde9cf3a3");
  } catch (e2) {
  }
}();
function generateSlug(title) {
  return title.match(/[^\W\s\d]*/g, "").filter((v = "") => !!v.trim()).join("-").toLowerCase().concat(`-${( new Date()).getTime()}`);
}

export { generateSlug as g };
//# sourceMappingURL=generateSlug-35858d27.js.map
