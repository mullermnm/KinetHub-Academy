!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6cd58249-e827-4321-bf61-c0cebb6803fd", e._sentryDebugIdIdentifier = "sentry-dbid-6cd58249-e827-4321-bf61-c0cebb6803fd");
  } catch (e2) {
  }
}();
let private_env = {};
let public_env = {};
function set_private_env(environment) {
  private_env = environment;
}
function set_public_env(environment) {
  public_env = environment;
}

export { set_public_env as a, private_env as b, public_env as p, set_private_env as s };
//# sourceMappingURL=shared-server-e0f2abd3.js.map
