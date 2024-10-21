import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7a1065aa-8b2e-44c8-b248-c3d1e965e807", e._sentryDebugIdIdentifier = "sentry-dbid-7a1065aa-8b2e-44c8-b248-c3d1e965e807");
  } catch (e2) {
  }
}();
const load = ({ params = { slug: "" } }) => {
  return {
    orgName: params.slug
  };
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 35;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-f1ede7b0.js')).default;
const universal_id = "src/routes/org/[slug]/+page.js";
const imports = ["_app/immutable/nodes/35.fc387bf6.js","_app/immutable/chunks/index.a2391391.js","_app/immutable/chunks/scheduler.ee52cacd.js","_app/immutable/chunks/globals.f8c38982.js","_app/immutable/chunks/each.4f9c2159.js","_app/immutable/chunks/user.9ccdc884.js","_app/immutable/chunks/index.45ef5fca.js","_app/immutable/chunks/index.89e0ac82.js","_app/immutable/chunks/Add.efc40c97.js","_app/immutable/chunks/spread.5cc747ed.js","_app/immutable/chunks/Locked.d4110ef1.js","_app/immutable/chunks/navigation.4bf4851d.js","_app/immutable/chunks/singletons.333ce4a3.js","_app/immutable/chunks/dayjs.min.1a74010f.js","_app/immutable/chunks/supabase.2c784bff.js","_app/immutable/chunks/preload-helper.0639fc73.js","_app/immutable/chunks/index.8c9a3a3e.js","_app/immutable/chunks/index.550ce75a.js","_app/immutable/chunks/dashboard.fbd2f47f.js","_app/immutable/chunks/useMobile.7962b2bd.js","_app/immutable/chunks/index.bf0b6763.js","_app/immutable/chunks/index.e68f3ff9.js","_app/immutable/chunks/stores.5de49fb7.js","_app/immutable/chunks/org.1ee4885a.js","_app/immutable/chunks/translations.f943b7b3.js","_app/immutable/chunks/VisitOrgSite.0bbe83c6.js","_app/immutable/chunks/ArrowTopRight.6dda917f.js","_app/immutable/chunks/date.4043184d.js","_app/immutable/chunks/app.bd3189d3.js"];
const stylesheets = ["_app/immutable/assets/35.dc423179.css","_app/immutable/assets/index.b04b4802.css","_app/immutable/assets/index.5a0592f8.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=35-d9c46464.js.map
