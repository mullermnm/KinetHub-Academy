import { d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, d as spread, h as escape_attribute_value, f as escape_object, e as escape, a as add_attribute } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "563723cd-50a8-4949-9a1b-cd33b2b58bf5", e._sentryDebugIdIdentifier = "sentry-dbid-563723cd-50a8-4949-9a1b-cd33b2b58bf5");
  } catch (e2) {
  }
}();
const SendAlt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M27.71,4.29a1,1,0,0,0-1.05-.23l-22,8a1,1,0,0,0,0,1.87l9.6,3.84,3.84,9.6A1,1,0,0,0,19,28h0a1,1,0,0,0,.92-.66l8-22A1,1,0,0,0,27.71,4.29ZM19,24.2l-2.79-7L21,12.41,19.59,11l-4.83,4.83L7.8,13,25.33,6.67Z"></path></svg>`;
});
const DateTime = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { value = "" } = $$props;
  let { className = "" } = $$props;
  let { onInput = () => {
  } } = $$props;
  let { isRequired = false } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.onInput === void 0 && $$bindings.onInput && onInput !== void 0)
    $$bindings.onInput(onInput);
  if ($$props.isRequired === void 0 && $$bindings.isRequired && isRequired !== void 0)
    $$bindings.isRequired(isRequired);
  return `<label class="${"block " + escape(className, true)}"><span class="text-gray-700 dark:text-white">${escape(label)} ${isRequired ? `<span class="text-red-700" data-svelte-h="svelte-1qj2sto">*</span>` : ``}</span> <input${add_attribute("placeholder", placeholder, 0)} type="datetime-local" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-neutral-800 dark:text-white"${add_attribute("value", value, 0)}></label>`;
});

export { DateTime as D, SendAlt as S };
//# sourceMappingURL=DateTime-aa1ef45b.js.map
