import { d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, d as spread, h as escape_attribute_value, f as escape_object, e as escape } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f7041d62-d1e5-498d-adb8-b9662c64f0ab", e._sentryDebugIdIdentifier = "sentry-dbid-f7041d62-d1e5-498d-adb8-b9662c64f0ab");
  } catch (e2) {
  }
}();
const Save = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M27.71,9.29l-5-5A1,1,0,0,0,22,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V10A1,1,0,0,0,27.71,9.29ZM12,6h8v4H12Zm8,20H12V18h8Zm2,0V18a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v8H6V6h4v4a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V6.41l4,4V26Z"></path></svg>`;
});

export { Save as S };
//# sourceMappingURL=Save-257b9640.js.map
