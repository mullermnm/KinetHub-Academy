import { d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, d as spread, h as escape_attribute_value, f as escape_object, e as escape } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a4e74e9f-e818-4359-8749-65fd4b0d8256", e._sentryDebugIdIdentifier = "sentry-dbid-a4e74e9f-e818-4359-8749-65fd4b0d8256");
  } catch (e2) {
  }
}();
const ChevronDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path></svg>`;
});
const ChevronDown$1 = ChevronDown;

export { ChevronDown$1 as C };
//# sourceMappingURL=ChevronDown-d5b93e8c.js.map
