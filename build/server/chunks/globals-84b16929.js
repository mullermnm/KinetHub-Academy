!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "95f0d855-bace-4e78-838f-37e1746f5206", e._sentryDebugIdIdentifier = "sentry-dbid-95f0d855-bace-4e78-838f-37e1746f5206");
  } catch (e2) {
  }
}();
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);

export { globals as g };
//# sourceMappingURL=globals-84b16929.js.map
