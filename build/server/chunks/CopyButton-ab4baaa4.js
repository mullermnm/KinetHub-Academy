import { d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, g as createEventDispatcher, d as spread, h as escape_attribute_value, f as escape_object, v as validate_component, i as add_classes, e as escape } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "48ac012b-7833-4be4-94ed-2eab47568e9d", e._sentryDebugIdIdentifier = "sentry-dbid-48ac012b-7833-4be4-94ed-2eab47568e9d");
  } catch (e2) {
  }
}();
const Copy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"></path><path d="M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"></path></svg>`;
});
const Copy$1 = Copy;
const CopyButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["feedback", "feedbackTimeout", "iconDescription", "text", "copy"]);
  let { feedback = "Copied!" } = $$props;
  let { feedbackTimeout = 2e3 } = $$props;
  let { iconDescription = "Copy to clipboard" } = $$props;
  let { text } = $$props;
  let { copy = async (text2) => {
    try {
      await navigator.clipboard.writeText(text2);
    } catch (e) {
      console.log(e);
    }
  } } = $$props;
  createEventDispatcher();
  if ($$props.feedback === void 0 && $$bindings.feedback && feedback !== void 0)
    $$bindings.feedback(feedback);
  if ($$props.feedbackTimeout === void 0 && $$bindings.feedbackTimeout && feedbackTimeout !== void 0)
    $$bindings.feedbackTimeout(feedbackTimeout);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.copy === void 0 && $$bindings.copy && copy !== void 0)
    $$bindings.copy(copy);
  return `<button${spread(
    [
      { type: "button" },
      { "aria-live": "polite" },
      {
        "aria-label": escape_attribute_value(iconDescription)
      },
      {
        title: escape_attribute_value(iconDescription)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--copy-btn bx--copy   "
    }
  )}>${validate_component(Copy$1, "Copy").$$render($$result, { class: "bx--snippet__icon" }, {}, {})} <span aria-hidden="true"${add_classes("bx--assistive-text bx--copy-btn__feedback".trim())}>${escape(feedback)}</span></button>`;
});
const CopyButton$1 = CopyButton;

export { CopyButton$1 as C };
//# sourceMappingURL=CopyButton-ab4baaa4.js.map
