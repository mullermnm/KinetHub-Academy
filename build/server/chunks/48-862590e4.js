import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "52b0e288-79ff-4e85-a288-6b6d71401641", e._sentryDebugIdIdentifier = "sentry-dbid-52b0e288-79ff-4e85-a288-6b6d71401641");
  } catch (e2) {
  }
}();
const load = ({ params = { id: "" } }) => {
  return {
    profileId: params.id
  };
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 48;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-f070ff42.js')).default;
const universal_id = "src/routes/profile/[id]/+page.js";
const imports = ["_app/immutable/nodes/48.65f29a71.js","_app/immutable/chunks/index.a2391391.js","_app/immutable/chunks/scheduler.ee52cacd.js","_app/immutable/chunks/spread.5cc747ed.js","_app/immutable/chunks/TextField.05bb724d.js","_app/immutable/chunks/index.e68f3ff9.js","_app/immutable/chunks/each.4f9c2159.js","_app/immutable/chunks/index.550ce75a.js","_app/immutable/chunks/index.f360203c.js","_app/immutable/chunks/translations.f943b7b3.js","_app/immutable/chunks/preload-helper.0639fc73.js","_app/immutable/chunks/index.45ef5fca.js","_app/immutable/chunks/index.89e0ac82.js","_app/immutable/chunks/supabase.2c784bff.js","_app/immutable/chunks/user.9ccdc884.js"];
const stylesheets = ["_app/immutable/assets/48.4c9478cc.css","_app/immutable/assets/TextField.963919e0.css","_app/immutable/assets/index.5a0592f8.css","_app/immutable/assets/index.644c5f1d.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=48-862590e4.js.map
