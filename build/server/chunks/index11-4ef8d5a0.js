import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, d as spread, f as escape_object, i as add_classes, h as escape_attribute_value } from './ssr-10c5b872.js';
import './_sentry-release-injection-file-6be6a010.js';
import { d as compute_rest_props } from './utils-26d532f8.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "cfe75b2a-7b1b-4cd5-881b-d01fdbb11232", e._sentryDebugIdIdentifier = "sentry-dbid-cfe75b2a-7b1b-4cd5-881b-d01fdbb11232");
  } catch (e2) {
  }
}();
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let spinnerRadius;
  let $$restProps = compute_rest_props($$props, ["small", "active", "withOverlay", "description"]);
  let { small = false } = $$props;
  let { active = true } = $$props;
  let { withOverlay = true } = $$props;
  let { description = "loading" } = $$props;
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.withOverlay === void 0 && $$bindings.withOverlay && withOverlay !== void 0)
    $$bindings.withOverlay(withOverlay);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  spinnerRadius = small ? "42" : "44";
  return `${withOverlay ? `<div${spread([escape_object($$restProps)], {
    classes: "bx--loading-overlay " + (!active ? "bx--loading-overlay--stop" : "")
  })}><div aria-atomic="true"${add_attribute("aria-live", active ? "assertive" : "off", 0)}${add_classes(("bx--loading " + (small ? "bx--loading--small" : "") + " " + (!active ? "bx--loading--stop" : "")).trim())}><svg viewBox="0 0 100 100"${add_classes("bx--loading__svg".trim())}><title>${escape(description)}</title>${small ? `<circle cx="50%" cy="50%"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__background".trim())}></circle>` : ``}<circle cx="50%" cy="50%"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__stroke".trim())}></circle></svg></div></div>` : `<div${spread(
    [
      { "aria-atomic": "true" },
      {
        "aria-live": escape_attribute_value(active ? "assertive" : "off")
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--loading " + (small ? "bx--loading--small" : "") + " " + (!active ? "bx--loading--stop" : "")
    }
  )}><svg viewBox="0 0 100 100"${add_classes("bx--loading__svg".trim())}><title>${escape(description)}</title>${small ? `<circle cx="50%" cy="50%"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__background".trim())}></circle>` : ``}<circle cx="50%" cy="50%"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__stroke".trim())}></circle></svg></div>`}`;
});
const Loading$1 = Loading;
const VARIANTS = {
  CONTAINED: "CONTAINED",
  CONTAINED_DARK: "CONTAINED_DARK",
  CONTAINED_LIGHT: "CONTAINED_LIGHT",
  CONTAINED_INFO: "CONTAINED_INFO",
  CONTAINED_WHITE: "CONTAINED_WHITE",
  CONTAINED_DANGER: "CONTAINED_DANGER",
  CONTAINED_SUCCESS: "CONTAINED_SUCCESS",
  OUTLINED: "OUTLINED",
  NONE: "NONE",
  LINK: "LINK",
  TEXT: "TEXT",
  TEXT_DANGER: "TEXT_DANGER"
};
const VARIANTS_CLASS = {
  [VARIANTS.CONTAINED]: "border-none bg-primary-700 hover:bg-primary-900 text-white font-bold",
  [VARIANTS.CONTAINED_DARK]: "border-none bg-black hover:bg-neutral-600 text-white dark:bg-white dark:text-black font-bold",
  [VARIANTS.CONTAINED_LIGHT]: "border-none bg-primary-600 hover:bg-primary-900 text-white font-bold",
  [VARIANTS.CONTAINED_WHITE]: "border-none bg-white hover:border-black-300 hover:bg-primary-700 dark:hover:bg-primary-900 text-black",
  [VARIANTS.CONTAINED_INFO]: "border-none bg-gray-400 hover:bg-gray-600 text-white",
  [VARIANTS.CONTAINED_SUCCESS]: "bg-green-700 hover:bg-green-900 text-white",
  [VARIANTS.CONTAINED_DANGER]: "bg-red-700 hover:bg-red-900 text-white",
  [VARIANTS.OUTLINED]: "border border-black dark:border-white hover:bg-neutral-600 hover:text-white text-black dark:text-white",
  [VARIANTS.NONE]: "border-none hover:border-black-300 hover:bg-gray-200 dark:hover:bg-neutral-800 text-black",
  [VARIANTS.TEXT]: "text-black dark:text-white hover:underline",
  [VARIANTS.LINK]: "text-primary-500 dark:text-primary-500 hover:underline",
  [VARIANTS.TEXT_DANGER]: "text-red-500 hover:border border-t-0 border-l-0 border-r-0 border-red-300"
};
const PrimaryButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { className = "" } = $$props;
  let { onClick = (e) => {
  } } = $$props;
  let { name = "" } = $$props;
  let { type = "button" } = $$props;
  let { variant = VARIANTS.CONTAINED } = $$props;
  let { disablePadding = false } = $$props;
  let { isDisabled = false } = $$props;
  let { isLoading = false } = $$props;
  let { disableScale = false } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.disablePadding === void 0 && $$bindings.disablePadding && disablePadding !== void 0)
    $$bindings.disablePadding(disablePadding);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  if ($$props.disableScale === void 0 && $$bindings.disableScale && disableScale !== void 0)
    $$bindings.disableScale(disableScale);
  return `<button class="${escape(
    isLoading || isDisabled ? "opacity-25 cursor-not-allowed" : `cursor-pointer ${!disableScale && "hover:scale-95"}`,
    true
  ) + " flex items-center h-auto " + escape(VARIANTS_CLASS[isLoading ? VARIANTS.OUTLINED : variant], true) + " " + escape(!disablePadding && "py-[0.5rem] px-6", true) + " rounded-md " + escape(className, true) + " w-fit min-h-[36px] justify-center sm:w-auto " + escape(variant !== VARIANTS.TEXT && "hover:shadow-xl", true) + " transition-all delay-150 duration-300 ease-in-out"}"${add_attribute("name", name, 0)}${add_attribute("type", type, 0)} ${isLoading || isDisabled ? "disabled" : ""}>${isLoading ? `${validate_component(Loading$1, "Loading").$$render(
    $$result,
    {
      withOverlay: false,
      small: true,
      class: "mr-2"
    },
    {},
    {}
  )} ` : ``} ${!!label ? `${escape(label)}` : `${slots.default ? slots.default({}) : ``}`}</button>`;
});

export { Loading$1 as L, PrimaryButton as P, VARIANTS as V };
//# sourceMappingURL=index11-4ef8d5a0.js.map
