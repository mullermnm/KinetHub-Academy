import { w as writable } from './index2-aea858a5.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3cb4b633-a68e-4005-8e5f-78dc12049f42", e._sentryDebugIdIdentifier = "sentry-dbid-3cb4b633-a68e-4005-8e5f-78dc12049f42");
  } catch (e2) {
  }
}();
const globalStore = writable({
  isDark: false,
  isOrgSite: false,
  orgSiteName: "",
  isStudent: void 0
});

export { globalStore as g };
//# sourceMappingURL=app-d638cf5d.js.map
