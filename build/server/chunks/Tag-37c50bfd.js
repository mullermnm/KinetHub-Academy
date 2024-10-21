import { d as compute_rest_props, f as compute_slots } from './utils-26d532f8.js';
import { c as create_ssr_component, g as createEventDispatcher, v as validate_component, d as spread, h as escape_attribute_value, f as escape_object, i as add_classes, e as escape, a as add_attribute, m as missing_component } from './ssr-10c5b872.js';
import { C as Close$1 } from './Close-73e0af44.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "64445d21-bcec-4b57-a8fb-c1e27f040998", e._sentryDebugIdIdentifier = "sentry-dbid-64445d21-bcec-4b57-a8fb-c1e27f040998");
  } catch (e2) {
  }
}();
const TagSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size"]);
  let { size = "default" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `  <span${spread([escape_object($$restProps)], {
    classes: "bx--tag " + (size === "sm" ? "bx--tag--sm" : "") + " bx--skeleton"
  })}></span>`;
});
const TagSkeleton$1 = TagSkeleton;
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["type", "size", "filter", "disabled", "interactive", "skeleton", "title", "icon", "id"]);
  let $$slots = compute_slots(slots);
  let { type = void 0 } = $$props;
  let { size = "default" } = $$props;
  let { filter = false } = $$props;
  let { disabled = false } = $$props;
  let { interactive = false } = $$props;
  let { skeleton = false } = $$props;
  let { title = "Clear filter" } = $$props;
  let { icon = void 0 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  createEventDispatcher();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0)
    $$bindings.filter(filter);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
    $$bindings.interactive(interactive);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return ` ${skeleton ? `${validate_component(TagSkeleton$1, "TagSkeleton").$$render($$result, Object.assign({}, { size }, $$restProps), {}, {})}` : `${filter ? `<div${spread(
    [
      {
        "aria-label": escape_attribute_value(title)
      },
      { id: escape_attribute_value(id) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--tag " + (disabled ? "bx--tag--disabled" : "") + " " + (filter ? "bx--tag--filter" : "") + " " + (size === "sm" ? "bx--tag--sm" : "") + " " + (type === "red" ? "bx--tag--red" : "") + " " + (type === "magenta" ? "bx--tag--magenta" : "") + " " + (type === "purple" ? "bx--tag--purple" : "") + " " + (type === "blue" ? "bx--tag--blue" : "") + " " + (type === "cyan" ? "bx--tag--cyan" : "") + " " + (type === "teal" ? "bx--tag--teal" : "") + " " + (type === "green" ? "bx--tag--green" : "") + " " + (type === "gray" ? "bx--tag--gray" : "") + " " + (type === "cool-gray" ? "bx--tag--cool-gray" : "") + " " + (type === "warm-gray" ? "bx--tag--warm-gray" : "") + " " + (type === "high-contrast" ? "bx--tag--high-contrast" : "") + " " + (type === "outline" ? "bx--tag--outline" : "")
    }
  )}>${slots.default ? slots.default({ props: { class: "bx--tag__label" } }) : ` <span${add_classes("bx--tag__label".trim())}>${escape(type)}</span> `} <button type="button"${add_attribute("aria-labelledby", id, 0)} ${disabled ? "disabled" : ""}${add_attribute("title", title, 0)}${add_classes("bx--tag__close-icon".trim())}>${validate_component(Close$1, "Close").$$render($$result, {}, {}, {})}</button></div>` : `${interactive ? `<button${spread(
    [
      { type: "button" },
      { id: escape_attribute_value(id) },
      { disabled: disabled || null },
      {
        "aria-disabled": escape_attribute_value(disabled)
      },
      {
        tabindex: escape_attribute_value(disabled ? "-1" : void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--tag bx--tag--interactive " + (disabled ? "bx--tag--disabled" : "") + " " + (size === "sm" ? "bx--tag--sm" : "") + " " + (type === "red" ? "bx--tag--red" : "") + " " + (type === "magenta" ? "bx--tag--magenta" : "") + " " + (type === "purple" ? "bx--tag--purple" : "") + " " + (type === "blue" ? "bx--tag--blue" : "") + " " + (type === "cyan" ? "bx--tag--cyan" : "") + " " + (type === "teal" ? "bx--tag--teal" : "") + " " + (type === "green" ? "bx--tag--green" : "") + " " + (type === "gray" ? "bx--tag--gray" : "") + " " + (type === "cool-gray" ? "bx--tag--cool-gray" : "") + " " + (type === "warm-gray" ? "bx--tag--warm-gray" : "") + " " + (type === "high-contrast" ? "bx--tag--high-contrast" : "") + " " + (type === "outline" ? "bx--tag--outline" : "")
    }
  )}>${$$slots.icon || icon ? `<div${add_classes("bx--tag__custom-icon".trim())}>${slots.icon ? slots.icon({}) : ` ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} `}</div>` : ``} <span>${slots.default ? slots.default({}) : ``}</span></button>` : ` <div${spread([{ id: escape_attribute_value(id) }, escape_object($$restProps)], {
    classes: "bx--tag " + (disabled ? "bx--tag--disabled" : "") + " " + (size === "sm" ? "bx--tag--sm" : "") + " " + (type === "red" ? "bx--tag--red" : "") + " " + (type === "magenta" ? "bx--tag--magenta" : "") + " " + (type === "purple" ? "bx--tag--purple" : "") + " " + (type === "blue" ? "bx--tag--blue" : "") + " " + (type === "cyan" ? "bx--tag--cyan" : "") + " " + (type === "teal" ? "bx--tag--teal" : "") + " " + (type === "green" ? "bx--tag--green" : "") + " " + (type === "gray" ? "bx--tag--gray" : "") + " " + (type === "cool-gray" ? "bx--tag--cool-gray" : "") + " " + (type === "warm-gray" ? "bx--tag--warm-gray" : "") + " " + (type === "high-contrast" ? "bx--tag--high-contrast" : "") + " " + (type === "outline" ? "bx--tag--outline" : "")
  })}>${$$slots.icon || icon ? `<div${add_classes("bx--tag__custom-icon".trim())}>${slots.icon ? slots.icon({}) : ` ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} `}</div>` : ``} <span>${slots.default ? slots.default({}) : ``}</span></div>`}`}`}`;
});
const Tag$1 = Tag;

export { Tag$1 as T };
//# sourceMappingURL=Tag-37c50bfd.js.map
