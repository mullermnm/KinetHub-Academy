import { d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, d as spread, h as escape_attribute_value, f as escape_object, e as escape } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c7b57868-6e2c-4443-a739-00577189d662", e._sentryDebugIdIdentifier = "sentry-dbid-c7b57868-6e2c-4443-a739-00577189d662");
  } catch (e2) {
  }
}();
const FlashFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M11.61,29.92a1,1,0,0,1-.6-1.07L12.83,17H8a1,1,0,0,1-1-1.23l3-13A1,1,0,0,1,11,2H21a1,1,0,0,1,.78.37,1,1,0,0,1,.2.85L20.25,11H25a1,1,0,0,1,.9.56,1,1,0,0,1-.11,1l-13,17A1,1,0,0,1,12,30,1.09,1.09,0,0,1,11.61,29.92Z"></path></svg>`;
});

export { FlashFilled as F };
//# sourceMappingURL=FlashFilled-4a89bd75.js.map
