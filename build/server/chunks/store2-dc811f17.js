import { w as writable } from './index2-aea858a5.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "12ca4c03-dec6-416e-b246-ce506c7c3909", e._sentryDebugIdIdentifier = "sentry-dbid-12ca4c03-dec6-416e-b246-ce506c7c3909");
  } catch (e2) {
  }
}();
const SNACKBAR_SEVERITY = {
  ERROR: "ERROR",
  WARNING: "WARNING",
  DEFAULT: "DEFAULT",
  INFO: "INFO",
  SUCCESS: "SUCCESS"
};
const snackbarStoreInitialState = {
  open: false,
  message: "",
  severity: SNACKBAR_SEVERITY.DEFAULT,
  handleClose: () => {
  },
  autoHideDuration: 6e3
};
const snackbarStore = writable({ ...snackbarStoreInitialState });
const snackbar = {
  success(message = "snackbar.success") {
    snackbarStore.update((store) => {
      store.open = true;
      store.message = message;
      store.severity = SNACKBAR_SEVERITY.SUCCESS;
      return store;
    });
  },
  error(message = "snackbar.something") {
    snackbarStore.update((store) => {
      store.open = true;
      store.message = message;
      store.severity = SNACKBAR_SEVERITY.ERROR;
      return store;
    });
  },
  info(message = "snackbar.updates") {
    snackbarStore.update((store) => {
      store.open = true;
      store.message = message;
      store.severity = SNACKBAR_SEVERITY.INFO;
      return store;
    });
  }
};

export { SNACKBAR_SEVERITY as S, snackbarStoreInitialState as a, snackbar as b, snackbarStore as s };
//# sourceMappingURL=store2-dc811f17.js.map
