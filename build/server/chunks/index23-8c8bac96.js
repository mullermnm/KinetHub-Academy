import posthog from 'posthog-js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7c86d1bb-c4e6-4c42-8aa9-e7db19d86736", e._sentryDebugIdIdentifier = "sentry-dbid-7c86d1bb-c4e6-4c42-8aa9-e7db19d86736");
  } catch (e2) {
  }
}();
const capturePosthogEvent = (event, properties) => {
  posthog.capture(event, properties);
};

export { capturePosthogEvent as c };
//# sourceMappingURL=index23-8c8bac96.js.map
