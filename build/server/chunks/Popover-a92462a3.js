import { d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, g as createEventDispatcher, d as spread, f as escape_object, a as add_attribute, i as add_classes } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "37b7cff3-da4a-46dd-936b-fe6ac31a930f", e._sentryDebugIdIdentifier = "sentry-dbid-37b7cff3-da4a-46dd-936b-fe6ac31a930f");
  } catch (e2) {
  }
}();
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "closeOnOutsideClick", "caret", "align", "light", "highContrast", "relative"]);
  let { open = false } = $$props;
  let { closeOnOutsideClick = false } = $$props;
  let { caret = false } = $$props;
  let { align = "top" } = $$props;
  let { light = false } = $$props;
  let { highContrast = false } = $$props;
  let { relative = false } = $$props;
  createEventDispatcher();
  let ref = null;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0)
    $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  if ($$props.caret === void 0 && $$bindings.caret && caret !== void 0)
    $$bindings.caret(caret);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.highContrast === void 0 && $$bindings.highContrast && highContrast !== void 0)
    $$bindings.highContrast(highContrast);
  if ($$props.relative === void 0 && $$bindings.relative && relative !== void 0)
    $$bindings.relative(relative);
  return ` <div${spread([escape_object($$restProps)], {
    classes: "bx--popover " + (caret ? "bx--popover--caret" : "") + " " + (light ? "bx--popover--light" : "") + " " + (highContrast ? "bx--popover--high-contrast" : "") + " " + (align === "top" ? "bx--popover--top" : "") + " " + (align === "top-left" ? "bx--popover--top-left" : "") + " " + (align === "top-right" ? "bx--popover--top-right" : "") + " " + (align === "bottom" ? "bx--popover--bottom" : "") + " " + (align === "bottom-left" ? "bx--popover--bottom-left" : "") + " " + (align === "bottom-right" ? "bx--popover--bottom-right" : "") + " " + (align === "left" ? "bx--popover--left" : "") + " " + (align === "left-bottom" ? "bx--popover--left-bottom" : "") + " " + (align === "left-top" ? "bx--popover--left-top" : "") + " " + (align === "right" ? "bx--popover--right" : "") + " " + (align === "right-bottom" ? "bx--popover--right-bottom" : "") + " " + (align === "right-top" ? "bx--popover--right-top" : "") + " " + (open ? "bx--popover--open" : "") + " " + (relative ? "bx--popover--relative" : ""),
    styles: {
      "position": relative ? "relative" : void 0
    }
  })}${add_attribute("this", ref, 0)}><div${add_classes("bx--popover-contents".trim())}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
const Popover$1 = Popover;

export { Popover$1 as P };
//# sourceMappingURL=Popover-a92462a3.js.map
