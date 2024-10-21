import { d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, d as spread, h as escape_attribute_value, f as escape_object, e as escape } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3fece17d-2372-4c91-bfb3-b3dc3b8bb5e4", e._sentryDebugIdIdentifier = "sentry-dbid-3fece17d-2372-4c91-bfb3-b3dc3b8bb5e4");
  } catch (e2) {
  }
}();
const ChevronRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"></path></svg>`;
});
const ChevronRight$1 = ChevronRight;

export { ChevronRight$1 as C };
//# sourceMappingURL=ChevronRight-920dc215.js.map
