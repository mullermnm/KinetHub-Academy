import { c as create_ssr_component, e as escape, v as validate_component, d as spread, h as escape_attribute_value, f as escape_object } from './ssr-10c5b872.js';
import { d as compute_rest_props } from './utils-26d532f8.js';
import { C as Chip } from './index12-9c021b5e.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4376728f-c7b8-4ad0-a4f8-d9e0a6f09c15", e._sentryDebugIdIdentifier = "sentry-dbid-4376728f-c7b8-4ad0-a4f8-d9e0a6f09c15");
  } catch (e2) {
  }
}();
/* empty css                                      */const ArrowUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16 4L6 14 7.41 15.41 15 7.83 15 28 17 28 17 7.83 24.59 15.41 26 14 16 4z"></path></svg>`;
});
const css = {
  code: ".vote.svelte-1shjk4z{display:flex;flex-direction:column;align-items:center;min-width:25px;width:25px;justify-content:center;margin-right:10px}",
  map: null
};
const Vote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = 0 } = $$props;
  let { upVote = () => {
  } } = $$props;
  let { disabled = false } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.upVote === void 0 && $$bindings.upVote && upVote !== void 0)
    $$bindings.upVote(upVote);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  $$result.css.add(css);
  return `<button class="${"vote border-none " + escape(disabled ? "cursor-not-allowed" : "cursor-pointer", true) + " svelte-1shjk4z"}">${validate_component(ArrowUp, "ArrowUpIcon").$$render($$result, { size: 16 }, {}, {})} ${validate_component(Chip, "Chip").$$render($$result, { value }, {}, {})} </button>`;
});

export { Vote as V };
//# sourceMappingURL=index13-ea3bca06.js.map
