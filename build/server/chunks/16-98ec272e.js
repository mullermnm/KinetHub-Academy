import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4099b461-63f7-4387-9fc2-ed7c8e33438a", e._sentryDebugIdIdentifier = "sentry-dbid-4099b461-63f7-4387-9fc2-ed7c8e33438a");
  } catch (e2) {
  }
}();
const load = ({ params = { id: "" } }) => {
  return {
    courseId: params.id
  };
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-5ad0f8a4.js')).default;
const universal_id = "src/routes/courses/[id]/marks/+page.js";
const imports = ["_app/immutable/nodes/16.b206b279.js","_app/immutable/chunks/16.fcc96f9e.js","_app/immutable/chunks/index.a2391391.js","_app/immutable/chunks/scheduler.ee52cacd.js","_app/immutable/chunks/each.4f9c2159.js","_app/immutable/chunks/navigation.4bf4851d.js","_app/immutable/chunks/singletons.333ce4a3.js","_app/immutable/chunks/index.45ef5fca.js","_app/immutable/chunks/AudioConsole.57dcd3bb.js","_app/immutable/chunks/spread.5cc747ed.js","_app/immutable/chunks/supabase.2c784bff.js","_app/immutable/chunks/preload-helper.0639fc73.js","_app/immutable/chunks/Download.29bef1b0.js","_app/immutable/chunks/index.fc85f1f4.js","_app/immutable/chunks/Moon.7f4aad82.js","_app/immutable/chunks/environment.987b3e32.js","_app/immutable/chunks/stores.5de49fb7.js","_app/immutable/chunks/Text.40bcd65a.js","_app/immutable/chunks/Locked.d4110ef1.js","_app/immutable/chunks/CheckmarkFilled.f7226a63.js","_app/immutable/chunks/index.8c9a3a3e.js","_app/immutable/chunks/Add.efc40c97.js","_app/immutable/chunks/function.53788a56.js","_app/immutable/chunks/FlashFilled.60689fd0.js","_app/immutable/chunks/index.e68f3ff9.js","_app/immutable/chunks/reusableClass.2ccb5336.js","_app/immutable/chunks/Settings.88886624.js","_app/immutable/chunks/org.1ee4885a.js","_app/immutable/chunks/store.f203a796.js","_app/immutable/chunks/index.523fac41.js","_app/immutable/chunks/index.89e0ac82.js","_app/immutable/chunks/store.21c1b842.js","_app/immutable/chunks/validator.b0d7db8b.js","_app/immutable/chunks/validateEmail.f14e5c64.js","_app/immutable/chunks/translations.f943b7b3.js","_app/immutable/chunks/SkeletonText.4f748957.js","_app/immutable/chunks/useMobile.7962b2bd.js","_app/immutable/chunks/store.0b901476.js","_app/immutable/chunks/user.9ccdc884.js","_app/immutable/chunks/index.691cdcca.js","_app/immutable/chunks/TextField.05bb724d.js","_app/immutable/chunks/index.5d9eba69.js","_app/immutable/chunks/app.bd3189d3.js","_app/immutable/chunks/index.bf0b6763.js","_app/immutable/chunks/index.550ce75a.js","_app/immutable/chunks/index.f39bbea9.js","_app/immutable/chunks/index.6649ce47.js","_app/immutable/chunks/OverflowMenuItem.fb1aab9d.js"];
const stylesheets = ["_app/immutable/assets/16.81831bfa.css","_app/immutable/assets/index.fcec4d91.css","_app/immutable/assets/ArrowUp.baf5064f.css","_app/immutable/assets/Text.2eef1a2a.css","_app/immutable/assets/index.5a0592f8.css","_app/immutable/assets/index.f910ccfb.css","_app/immutable/assets/TextField.963919e0.css","_app/immutable/assets/index.1ede2f13.css","_app/immutable/assets/index.b04b4802.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=16-98ec272e.js.map
