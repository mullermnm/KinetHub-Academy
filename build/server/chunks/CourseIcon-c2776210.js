import { c as create_ssr_component, a as add_attribute } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "cbb83e87-027b-4e29-a35a-e50f7a1ba132", e._sentryDebugIdIdentifier = "sentry-dbid-cbb83e87-027b-4e29-a35a-e50f7a1ba132");
  } catch (e2) {
  }
}();
const CourseIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "currentColor" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="dark"><path d="M18 22.5H6C5.60232 22.4995 5.22105 22.3414 4.93984 22.0602C4.65864 21.7789 4.50046 21.3977 4.5 21V3C4.5004 2.6023 4.65856 2.221 4.93978 1.93978C5.221 1.65856 5.6023 1.5004 6 1.5H18C18.3977 1.50046 18.779 1.65864 19.0602 1.93984C19.3414 2.22105 19.4995 2.60232 19.5 3V15.4636L15.75 13.5886L12 15.4636V3H6V21H18V18H19.5V21C19.4995 21.3977 19.3413 21.7789 19.0601 22.0601C18.7789 22.3413 18.3977 22.4995 18 22.5ZM15.75 11.9114L18 13.0364V3H13.5V13.0364L15.75 11.9114Z"${add_attribute("fill", color, 0)}></path></svg>`;
});

export { CourseIcon as C };
//# sourceMappingURL=CourseIcon-c2776210.js.map
