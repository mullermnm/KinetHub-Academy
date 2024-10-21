import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "93423a0c-9d5f-4f6a-ad47-92ddffb7ea75", e._sentryDebugIdIdentifier = "sentry-dbid-93423a0c-9d5f-4f6a-ad47-92ddffb7ea75");
  } catch (e2) {
  }
}();
const load = ({ params = { slug: "" } }) => {
  return {
    quizId: params.slug
  };
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 42;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-6c137ed6.js')).default;
const universal_id = "src/routes/org/[slug]/quiz/[slug]/+page.js";
const imports = ["_app/immutable/nodes/42.cef4aa41.js","_app/immutable/chunks/index.a2391391.js","_app/immutable/chunks/scheduler.ee52cacd.js","_app/immutable/chunks/each.4f9c2159.js","_app/immutable/chunks/navigation.4bf4851d.js","_app/immutable/chunks/singletons.333ce4a3.js","_app/immutable/chunks/index.45ef5fca.js","_app/immutable/chunks/cloneDeep.a1cf627e.js","_app/immutable/chunks/supabase.2c784bff.js","_app/immutable/chunks/preload-helper.0639fc73.js","_app/immutable/chunks/org.1ee4885a.js","_app/immutable/chunks/ArrowLeft.eacc72f9.js","_app/immutable/chunks/spread.5cc747ed.js","_app/immutable/chunks/CheckmarkFilled.f7226a63.js","_app/immutable/chunks/index.550ce75a.js","_app/immutable/chunks/DeleteModal.ddab4f06.js","_app/immutable/chunks/index.bf0b6763.js","_app/immutable/chunks/index.e68f3ff9.js","_app/immutable/chunks/translations.f943b7b3.js","_app/immutable/chunks/index.89e0ac82.js","_app/immutable/chunks/index.8c9a3a3e.js","_app/immutable/chunks/ChevronLeft.311fae7e.js","_app/immutable/chunks/ChevronRight.109ff9f8.js","_app/immutable/chunks/CheckmarkOutline.0b1688ef.js","_app/immutable/chunks/TextField.05bb724d.js","_app/immutable/chunks/index.2f8954c4.js","_app/immutable/chunks/store.21c1b842.js","_app/immutable/chunks/SelectItem.b7c50800.js","_app/immutable/chunks/ChevronDown.55b97967.js","_app/immutable/chunks/WarningAltFilled.a18ba147.js"];
const stylesheets = ["_app/immutable/assets/42.7d5f9fa3.css","_app/immutable/assets/index.b04b4802.css","_app/immutable/assets/index.5a0592f8.css","_app/immutable/assets/TextField.963919e0.css","_app/immutable/assets/index.aa635e36.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=42-c2d4c075.js.map
