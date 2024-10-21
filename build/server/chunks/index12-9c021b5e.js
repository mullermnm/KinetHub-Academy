import { c as null_to_empty } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a7b9e449-35ee-426d-98d9-56d652313ba9", e._sentryDebugIdIdentifier = "sentry-dbid-a7b9e449-35ee-426d-98d9-56d652313ba9");
  } catch (e2) {
  }
}();
/* empty css                                      */const css = {
  code: "p.svelte-15yyl80{display:inline-block;min-width:20px;font-size:12px;font-weight:500;line-height:18px;text-align:center;border:1px solid transparent;border-radius:2em;width:24px;height:24px;padding-top:2px}.bg-set.svelte-15yyl80{background-color:#d1d5da80}",
  map: null
};
const Chip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = 0 } = $$props;
  let { className = "" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  $$result.css.add(css);
  return `<p class="${escape(null_to_empty(className ? className : "bg-set mt-2"), true) + " svelte-15yyl80"}">${escape(value)}</p>`;
});

export { Chip as C };
//# sourceMappingURL=index12-9c021b5e.js.map
