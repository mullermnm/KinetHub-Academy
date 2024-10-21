import { d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, d as spread, h as escape_attribute_value, f as escape_object, e as escape } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "75278a5a-417c-47cb-b0e0-3e0312cac374", e._sentryDebugIdIdentifier = "sentry-dbid-75278a5a-417c-47cb-b0e0-3e0312cac374");
  } catch (e2) {
  }
}();
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M12 4H6A2 2 0 004 6v6a2 2 0 002 2h6a2 2 0 002-2V6A2 2 0 0012 4zm0 8H6V6h6zM26 4H20a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V6A2 2 0 0026 4zm0 8H20V6h6zM12 18H6a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V20A2 2 0 0012 18zm0 8H6V20h6zM26 18H20a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V20A2 2 0 0026 18zm0 8H20V20h6z"></path></svg>`;
});

export { Grid as G };
//# sourceMappingURL=Grid-88d3c6f5.js.map
