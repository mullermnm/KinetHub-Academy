import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c309a523-32a0-40c7-98b1-6181a9d853e9", e._sentryDebugIdIdentifier = "sentry-dbid-c309a523-32a0-40c7-98b1-6181a9d853e9");
  } catch (e2) {
  }
}();
const load = ({ params = { slug: "" } }) => {
  return {
    orgName: params.slug
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-3bb51644.js')).default;
const server_id = "src/routes/org/[slug]/+layout.server.ts";
const imports = ["_app/immutable/nodes/6.6e3c02c1.js","_app/immutable/chunks/scheduler.ee52cacd.js","_app/immutable/chunks/index.a2391391.js","_app/immutable/chunks/stores.5de49fb7.js","_app/immutable/chunks/singletons.333ce4a3.js","_app/immutable/chunks/index.45ef5fca.js","_app/immutable/chunks/index.bf0b6763.js","_app/immutable/chunks/spread.5cc747ed.js","_app/immutable/chunks/index.e68f3ff9.js","_app/immutable/chunks/each.4f9c2159.js","_app/immutable/chunks/TextField.05bb724d.js","_app/immutable/chunks/index.550ce75a.js","_app/immutable/chunks/supabase.2c784bff.js","_app/immutable/chunks/preload-helper.0639fc73.js","_app/immutable/chunks/user.9ccdc884.js","_app/immutable/chunks/index.89e0ac82.js","_app/immutable/chunks/org.214021e8.js","_app/immutable/chunks/navigation.4bf4851d.js","_app/immutable/chunks/index.90bb86b1.js","_app/immutable/chunks/org.1ee4885a.js","_app/immutable/chunks/app.8730492c.js","_app/immutable/chunks/store.0b901476.js","_app/immutable/chunks/store.21c1b842.js","_app/immutable/chunks/validator.b0d7db8b.js","_app/immutable/chunks/validateEmail.f14e5c64.js","_app/immutable/chunks/translations.f943b7b3.js","_app/immutable/chunks/app.0a7d2343.js","_app/immutable/chunks/index.d1fa4a30.js","_app/immutable/chunks/app.bd3189d3.js","_app/immutable/chunks/Rocket.cbc98465.js","_app/immutable/chunks/Settings.88886624.js","_app/immutable/chunks/index.287abee1.js","_app/immutable/chunks/useMobile.7962b2bd.js","_app/immutable/chunks/Popover.d830a8b5.js","_app/immutable/chunks/ChevronRight.109ff9f8.js","_app/immutable/chunks/index.4cadf3f1.js","_app/immutable/chunks/Text.40bcd65a.js","_app/immutable/chunks/index.d1f5fa28.js","_app/immutable/chunks/theme.5ef85a9d.js","_app/immutable/chunks/SkeletonText.4f748957.js","_app/immutable/chunks/CourseIcon.145b149b.js","_app/immutable/chunks/reusableClass.2ccb5336.js","_app/immutable/chunks/index.6649ce47.js"];
const stylesheets = ["_app/immutable/assets/6.877cf016.css","_app/immutable/assets/index.b04b4802.css","_app/immutable/assets/index.5a0592f8.css","_app/immutable/assets/TextField.963919e0.css","_app/immutable/assets/Text.2eef1a2a.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-ec535620.js.map
