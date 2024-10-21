import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "521385b2-466d-468a-8ad4-4557b198f28c", e._sentryDebugIdIdentifier = "sentry-dbid-521385b2-466d-468a-8ad4-4557b198f28c");
  } catch (e2) {
  }
}();
const load = ({ params = { slug: "" } }) => {
  return {
    slug: params.slug
  };
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 39;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-64e65307.js')).default;
const universal_id = "src/routes/org/[slug]/community/[slug]/+page.js";
const imports = ["_app/immutable/nodes/39.7a932a0b.js","_app/immutable/chunks/index.a2391391.js","_app/immutable/chunks/scheduler.ee52cacd.js","_app/immutable/chunks/each.4f9c2159.js","_app/immutable/chunks/navigation.4bf4851d.js","_app/immutable/chunks/singletons.333ce4a3.js","_app/immutable/chunks/index.45ef5fca.js","_app/immutable/chunks/pluralize.2d93e111.js","_app/immutable/chunks/supabase.2c784bff.js","_app/immutable/chunks/preload-helper.0639fc73.js","_app/immutable/chunks/TrashCan.b6b32865.js","_app/immutable/chunks/spread.5cc747ed.js","_app/immutable/chunks/ArrowLeft.eacc72f9.js","_app/immutable/chunks/index.9237e2d9.js","_app/immutable/chunks/index.5d9eba69.js","_app/immutable/chunks/index.550ce75a.js","_app/immutable/chunks/index.4cadf3f1.js","_app/immutable/chunks/index.e68f3ff9.js","_app/immutable/chunks/org.1ee4885a.js","_app/immutable/chunks/user.9ccdc884.js","_app/immutable/chunks/index.89e0ac82.js","_app/immutable/chunks/validator.b0d7db8b.js","_app/immutable/chunks/validateEmail.f14e5c64.js","_app/immutable/chunks/translations.f943b7b3.js","_app/immutable/chunks/store.21c1b842.js","_app/immutable/chunks/TextField.05bb724d.js","_app/immutable/chunks/DeleteModal.8a5767a4.js","_app/immutable/chunks/index.bf0b6763.js","_app/immutable/chunks/index.846953bc.js","_app/immutable/chunks/app.bd3189d3.js","_app/immutable/chunks/date.4043184d.js","_app/immutable/chunks/dayjs.min.1a74010f.js","_app/immutable/chunks/index.523fac41.js","_app/immutable/chunks/store.9800a6a8.js","_app/immutable/chunks/SkeletonText.4f748957.js","_app/immutable/chunks/SkeletonPlaceholder.85251fa5.js","_app/immutable/chunks/Dropdown.2e34ff7a.js","_app/immutable/chunks/WarningAltFilled.a18ba147.js","_app/immutable/chunks/ListBoxMenuItem.27f38d05.js","_app/immutable/chunks/ChevronDown.55b97967.js"];
const stylesheets = ["_app/immutable/assets/index.9757e74d.css","_app/immutable/assets/index.1ede2f13.css","_app/immutable/assets/index.5a0592f8.css","_app/immutable/assets/TextField.963919e0.css","_app/immutable/assets/index.b04b4802.css","_app/immutable/assets/index.f4a46859.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=39-05ef2e85.js.map
