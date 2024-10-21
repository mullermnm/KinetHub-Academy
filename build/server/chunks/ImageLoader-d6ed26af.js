import { d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, g as createEventDispatcher, d as spread, f as escape_object, h as escape_attribute_value, v as validate_component, i as add_classes } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6aa03a34-7b2a-4ce0-8897-adf8e961967f", e._sentryDebugIdIdentifier = "sentry-dbid-6aa03a34-7b2a-4ce0-8897-adf8e961967f");
  } catch (e2) {
  }
}();
const AspectRatio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ratio"]);
  let { ratio = "2x1" } = $$props;
  if ($$props.ratio === void 0 && $$bindings.ratio && ratio !== void 0)
    $$bindings.ratio(ratio);
  return `<div${spread([escape_object($$restProps)], {
    classes: "bx--aspect-ratio " + (ratio === "2x1" ? "bx--aspect-ratio--2x1" : "") + " " + (ratio === "2x3" ? "bx--aspect-ratio--2x3" : "") + " " + (ratio === "16x9" ? "bx--aspect-ratio--16x9" : "") + " " + (ratio === "4x3" ? "bx--aspect-ratio--4x3" : "") + " " + (ratio === "1x1" ? "bx--aspect-ratio--1x1" : "") + " " + (ratio === "3x4" ? "bx--aspect-ratio--3x4" : "") + " " + (ratio === "3x2" ? "bx--aspect-ratio--3x2" : "") + " " + (ratio === "9x16" ? "bx--aspect-ratio--9x16" : "") + " " + (ratio === "1x2" ? "bx--aspect-ratio--1x2" : "")
  })}><div${add_classes("bx--aspect-ratio--object".trim())}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
const AspectRatio$1 = AspectRatio;
const ImageLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "alt", "ratio", "loading", "loaded", "error", "fadeIn", "loadImage"]);
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  let { ratio = void 0 } = $$props;
  let { loading = false } = $$props;
  let { loaded = false } = $$props;
  let { error = false } = $$props;
  let { fadeIn = false } = $$props;
  const loadImage = (url) => {
    if (image != null)
      image = null;
    loaded = false;
    error = false;
    image = new Image();
    image.src = url || src;
    image.onload = () => loaded = true;
    image.onerror = () => error = true;
  };
  const dispatch = createEventDispatcher();
  let image = null;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.ratio === void 0 && $$bindings.ratio && ratio !== void 0)
    $$bindings.ratio(ratio);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.loaded === void 0 && $$bindings.loaded && loaded !== void 0)
    $$bindings.loaded(loaded);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.fadeIn === void 0 && $$bindings.fadeIn && fadeIn !== void 0)
    $$bindings.fadeIn(fadeIn);
  if ($$props.loadImage === void 0 && $$bindings.loadImage && loadImage !== void 0)
    $$bindings.loadImage(loadImage);
  loading = !loaded && !error;
  {
    if (src && typeof window !== "undefined")
      loadImage();
  }
  {
    if (loaded)
      dispatch("load");
  }
  {
    if (error)
      dispatch("error");
  }
  return `${ratio === void 0 ? `${loading ? `${slots.loading ? slots.loading({}) : ``}` : ``} ${loaded ? `<img${spread(
    [
      escape_object($$restProps),
      { src: escape_attribute_value(src) },
      { alt: escape_attribute_value(alt) }
    ],
    { styles: { "width": `100%` } }
  )}>` : ``} ${error ? `${slots.error ? slots.error({}) : ``}` : ``}` : `${validate_component(AspectRatio$1, "AspectRatio").$$render($$result, { ratio }, {}, {
    default: () => {
      return `${loading ? `${slots.loading ? slots.loading({}) : ``}` : ``} ${loaded ? `<img${spread(
        [
          escape_object($$restProps),
          { src: escape_attribute_value(src) },
          { alt: escape_attribute_value(alt) }
        ],
        { styles: { "width": `100%` } }
      )}>` : ``} ${error ? `${slots.error ? slots.error({}) : ``}` : ``}`;
    }
  })}`}`;
});
const ImageLoader$1 = ImageLoader;

export { ImageLoader$1 as I };
//# sourceMappingURL=ImageLoader-d6ed26af.js.map
