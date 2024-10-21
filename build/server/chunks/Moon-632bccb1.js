import { c as create_ssr_component, e as escape } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6d44eff6-d15f-407a-8c45-7746ae878c3f", e._sentryDebugIdIdentifier = "sentry-dbid-6d44eff6-d15f-407a-8c45-7746ae878c3f");
  } catch (e2) {
  }
}();
/* empty css                                       */const css = {
  code: ".wrapper.svelte-e653jg{height:var(--size);width:var(--size);border-radius:100%;animation:svelte-e653jg-moonStretchDelay var(--duration) 0s infinite linear;animation-fill-mode:forwards;position:relative}.circle-one.svelte-e653jg{top:var(--moonSize);background-color:var(--color);width:calc(var(--size) / 7);height:calc(var(--size) / 7);border-radius:100%;animation:svelte-e653jg-moonStretchDelay var(--duration) 0s infinite linear;animation-fill-mode:forwards;opacity:0.8;position:absolute}.circle-two.svelte-e653jg{opacity:0.1;border:calc(var(--size) / 7) solid var(--color);height:var(--size);width:var(--size);border-radius:100%;box-sizing:border-box}.pause-animation.svelte-e653jg{animation-play-state:paused}@keyframes svelte-e653jg-moonStretchDelay{100%{transform:rotate(360deg)}}",
  map: null
};
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#FF3E00" } = $$props;
  let { unit = "px" } = $$props;
  let { duration = "0.6s" } = $$props;
  let { size = "60" } = $$props;
  let { pause = false } = $$props;
  let moonSize = +size / 7;
  let top = +size / 2 - moonSize / 2;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  $$result.css.add(css);
  return `<div class="${["wrapper svelte-e653jg", pause ? "pause-animation" : ""].join(" ").trim()}" style="${"--size: " + escape(size, true) + escape(unit, true) + "; --color: " + escape(color, true) + "; --moonSize: " + escape(top, true) + escape(unit, true) + "; --duration: " + escape(duration, true) + ";"}"><div class="${["circle-one svelte-e653jg", pause ? "pause-animation" : ""].join(" ").trim()}"></div> <div class="${["circle-two svelte-e653jg", pause ? "pause-animation" : ""].join(" ").trim()}"></div> </div>`;
});

export { Moon as M };
//# sourceMappingURL=Moon-632bccb1.js.map
