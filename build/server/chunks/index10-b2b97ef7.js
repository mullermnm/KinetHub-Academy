import { c as create_ssr_component, a as add_attribute, e as escape } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7df2d8cd-b69c-41c2-9084-820f8ada1ad9", e._sentryDebugIdIdentifier = "sentry-dbid-7df2d8cd-b69c-41c2-9084-820f8ada1ad9");
  } catch (e2) {
  }
}();
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { src = "" } = $$props;
  let { className = "" } = $$props;
  let { shape = "rounded-full" } = $$props;
  let { width = "w-10" } = $$props;
  let { height = "h-10" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.shape === void 0 && $$bindings.shape && shape !== void 0)
    $$bindings.shape(shape);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `<img${add_attribute("alt", name, 0)}${add_attribute("src", src, 0)} class="${escape(className, true) + " " + escape(width, true) + " " + escape(height, true) + " " + escape(shape, true)}">`;
});

export { Avatar as A };
//# sourceMappingURL=index10-b2b97ef7.js.map
