import { d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, d as spread, f as escape_object } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8faa3be3-42e9-49ea-a27d-511b56669f72", e._sentryDebugIdIdentifier = "sentry-dbid-8faa3be3-42e9-49ea-a27d-511b56669f72");
  } catch (e2) {
  }
}();
const SkeletonPlaceholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `  <div${spread([escape_object($$restProps)], {
    classes: "bx--skeleton__placeholder"
  })}></div>`;
});
const SkeletonPlaceholder$1 = SkeletonPlaceholder;

export { SkeletonPlaceholder$1 as S };
//# sourceMappingURL=SkeletonPlaceholder-be3b5db2.js.map
