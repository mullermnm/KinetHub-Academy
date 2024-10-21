import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component } from './ssr-10c5b872.js';
import { t as t2 } from './translations-90190f83.js';
import { c as currentOrg } from './org-8fc26a61.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8e28e1c7-b9f8-47d5-b965-6cafec09134e", e._sentryDebugIdIdentifier = "sentry-dbid-8e28e1c7-b9f8-47d5-b965-6cafec09134e");
  } catch (e2) {
  }
}();
const PoweredBy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentOrg;
  let $$unsubscribe_t;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => value);
  $$unsubscribe_t = subscribe(t2, (value) => value);
  $$unsubscribe_currentOrg();
  $$unsubscribe_t();
  return `${``}`;
});

export { PoweredBy as P };
//# sourceMappingURL=PoweredBy-58475ea5.js.map
