import { c as create_ssr_component, e as escape } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6587bcb2-0b75-43ce-93ef-25d13c9552b9", e._sentryDebugIdIdentifier = "sentry-dbid-6587bcb2-0b75-43ce-93ef-25d13c9552b9");
  } catch (e2) {
  }
}();
const css = {
  code: ".org-avatar.svelte-15mdjtt{width:fit-content}",
  map: null
};
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  let { value = "" } = $$props;
  let { size = "" } = $$props;
  let { shape = "rounded-md" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.shape === void 0 && $$bindings.shape && shape !== void 0)
    $$bindings.shape(shape);
  $$result.css.add(css);
  return `<p class="${escape(className, true) + " " + escape(size === "sm" ? "py-1 px-1" : "py-2 px-2", true) + " org-avatar " + escape(
    className.includes("bg-") ? "" : "bg-gray-200 dark:text-black",
    true
  ) + " " + escape(shape, true) + " text-center svelte-15mdjtt"}">${escape(value)} </p>`;
});

export { Text as T };
//# sourceMappingURL=Text-e3f4b18b.js.map
