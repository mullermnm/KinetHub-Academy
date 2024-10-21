import { d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, d as spread, h as escape_attribute_value, f as escape_object, e as escape } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "bd2a446d-304a-47f0-aa80-9629ba2cafba", e._sentryDebugIdIdentifier = "sentry-dbid-bd2a446d-304a-47f0-aa80-9629ba2cafba");
  } catch (e2) {
  }
}();
const AudioConsole = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M28 14H27V2H25V14H24a2.0019 2.0019 0 00-2 2v2a2.0023 2.0023 0 002 2h1V30h2V20h1a2.0027 2.0027 0 002-2V16A2.0023 2.0023 0 0028 14zm0 4H24V16h4zM18 6H17V2H15V6H14a2.0019 2.0019 0 00-2 2v2a2.0019 2.0019 0 002 2h1V30h2V12h1a2.002 2.002 0 002-2V8A2.002 2.002 0 0018 6zm0 4H14V8h4zM8 20H7V2H5V20H4a2.0023 2.0023 0 00-2 2v2a2.0023 2.0023 0 002 2H5v4H7V26H8a2.0023 2.0023 0 002-2V22A2.0023 2.0023 0 008 20zm0 4H4V22H8z" transform="translate(0 .005)"></path></svg>`;
});

export { AudioConsole as A };
//# sourceMappingURL=AudioConsole-151cda47.js.map
