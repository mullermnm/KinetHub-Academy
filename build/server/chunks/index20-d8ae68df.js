import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape } from './ssr-10c5b872.js';
import { t as t2 } from './translations-90190f83.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "109d3398-0e18-4d56-be00-060554f62714", e._sentryDebugIdIdentifier = "sentry-dbid-109d3398-0e18-4d56-be00-060554f62714");
  } catch (e2) {
  }
}();
const css = {
  code: ".org-avatar.svelte-15mdjtt{width:fit-content}",
  map: null
};
const ComingSoon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { label = $t("course.navItem.lessons.exercises.new_exercise_modal.coming_soon") } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css);
  $$unsubscribe_t();
  return `<p class="org-avatar text-xs bg-primary-200 text-primary-700 font-medium py-1 px-2 rounded-md text-center svelte-15mdjtt">${escape(label)} </p>`;
});

export { ComingSoon as C };
//# sourceMappingURL=index20-d8ae68df.js.map
