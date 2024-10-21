import { c as create_ssr_component } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0fcfc1b3-2c9d-4c7d-a96e-c23db84dc47b", e._sentryDebugIdIdentifier = "sentry-dbid-0fcfc1b3-2c9d-4c7d-a96e-c23db84dc47b");
  } catch (e2) {
  }
}();
const SectionTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p class="dark:text-white font-bold">${slots.default ? slots.default({}) : ``}</p>`;
});

export { SectionTitle as S };
//# sourceMappingURL=SectionTitle-d97525be.js.map
