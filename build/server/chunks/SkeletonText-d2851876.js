import { d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, d as spread, f as escape_object, b as each, i as add_classes, k as add_styles } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b15e7415-045a-4872-9287-bc8543a10a47", e._sentryDebugIdIdentifier = "sentry-dbid-b15e7415-045a-4872-9287-bc8543a10a47");
  } catch (e2) {
  }
}();
const SkeletonText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rows;
  let widthNum;
  let widthPx;
  let $$restProps = compute_rest_props($$props, ["lines", "heading", "paragraph", "width"]);
  let { lines = 3 } = $$props;
  let { heading = false } = $$props;
  let { paragraph = false } = $$props;
  let { width = "100%" } = $$props;
  const RANDOM = [0.973, 0.153, 0.567];
  if ($$props.lines === void 0 && $$bindings.lines && lines !== void 0)
    $$bindings.lines(lines);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.paragraph === void 0 && $$bindings.paragraph && paragraph !== void 0)
    $$bindings.paragraph(paragraph);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  rows = [];
  widthNum = parseInt(width, 10);
  widthPx = width.includes("px");
  {
    if (paragraph) {
      for (let i = 0; i < lines; i++) {
        const min = widthPx ? widthNum - 75 : 0;
        const max = widthPx ? widthNum : 75;
        const rand = Math.floor(RANDOM[i % 3] * (max - min + 1)) + min + "px";
        rows = [
          ...rows,
          {
            width: widthPx ? rand : `calc(${width} - ${rand})`
          }
        ];
      }
    }
  }
  return ` ${paragraph ? ` <div${spread([escape_object($$restProps)], {})}>${each(rows, ({ width: width2 }) => {
    return `<p${add_classes(("bx--skeleton__text " + (heading ? "bx--skeleton__heading" : "")).trim())}${add_styles({ width: width2 })}></p>`;
  })}</div>` : ` <p${spread([escape_object($$restProps)], {
    classes: "bx--skeleton__text " + (heading ? "bx--skeleton__heading" : ""),
    styles: { width }
  })}></p>`}`;
});
const SkeletonText$1 = SkeletonText;

export { SkeletonText$1 as S };
//# sourceMappingURL=SkeletonText-d2851876.js.map
