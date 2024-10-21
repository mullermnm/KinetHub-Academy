import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-10c5b872.js';
import './_sentry-release-injection-file-6be6a010.js';
import { F as FlashFilled } from './FlashFilled-4a89bd75.js';
import { g as isFreePlan } from './org-8fc26a61.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c94b0d1e-1a1f-42c5-97b3-f77ee387178c", e._sentryDebugIdIdentifier = "sentry-dbid-c94b0d1e-1a1f-42c5-97b3-f77ee387178c");
  } catch (e2) {
  }
}();
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isFreePlan, $$unsubscribe_isFreePlan;
  $$unsubscribe_isFreePlan = subscribe(isFreePlan, (value) => $isFreePlan = value);
  let { className = "" } = $$props;
  let { onClick = () => {
  } } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  $$unsubscribe_isFreePlan();
  return `${$isFreePlan ? `<button class="${"w-full border bg-blue-50 border-blue-700 flex items-center gap-2 px-2 py-2 rounded-md hover:scale-95 transition-all ease-in-out " + escape(className, true)}">${validate_component(FlashFilled, "FlashFilled").$$render($$result, { size: 16, class: "text-blue-700" }, {}, {})} <p class="font-semibold text-blue-700 text-sm">${slots.default ? slots.default({}) : ``}</p></button>` : ``}`;
});

export { Banner as B };
//# sourceMappingURL=Banner-bd19e4d5.js.map
