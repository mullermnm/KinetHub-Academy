import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5194f5b9-4dbd-480f-9b3e-86ae8089cca7", e._sentryDebugIdIdentifier = "sentry-dbid-5194f5b9-4dbd-480f-9b3e-86ae8089cca7");
  } catch (e2) {
  }
}();
function generateSitename(orgName) {
  return orgName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "");
}

export { generateSitename as g };
//# sourceMappingURL=org2-00101c59.js.map
