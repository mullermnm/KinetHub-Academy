import { w as writable } from './index2-aea858a5.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "bd8c0bd9-147c-46d9-98db-030f585d6392", e._sentryDebugIdIdentifier = "sentry-dbid-bd8c0bd9-147c-46d9-98db-030f585d6392");
  } catch (e2) {
  }
}();
const newOrgModal = writable({
  open: false
});
const sideBar = writable({
  hidden: true
});
const profileMenu = writable({
  ref: void 0,
  open: false
});

export { newOrgModal as n, profileMenu as p, sideBar as s };
//# sourceMappingURL=store-37f0dea3.js.map
