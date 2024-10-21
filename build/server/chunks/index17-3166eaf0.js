import { c as create_ssr_component, e as escape } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "278648d4-2fb7-48ee-a127-fcefd261ca4a", e._sentryDebugIdIdentifier = "sentry-dbid-278648d4-2fb7-48ee-a127-fcefd261ca4a");
  } catch (e2) {
  }
}();
const Box = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<div class="${escape(className, true) + " w-full h-[517px] flex items-center justify-center flex-col border rounded border-gray-200 dark:border-neutral-600"}">${slots.default ? slots.default({}) : ``}</div>`;
});

export { Box as B };
//# sourceMappingURL=index17-3166eaf0.js.map
