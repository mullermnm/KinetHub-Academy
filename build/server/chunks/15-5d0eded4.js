import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9e27d0b8-e29a-44d5-8b27-da2ceaaa45a4", e._sentryDebugIdIdentifier = "sentry-dbid-9e27d0b8-e29a-44d5-8b27-da2ceaaa45a4");
  } catch (e2) {
  }
}();
const load = ({ params = { id: "" } }) => {
  const { id: courseId, lessonParams = "" } = params;
  const splitparams = lessonParams.split("/");
  const [lessonId, exerciseRouteName, exerciseId] = splitparams;
  return {
    courseId,
    lessonId,
    exerciseRouteName,
    exerciseId,
    isMaterialsTabActive: !exerciseRouteName
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-06e06fd7.js')).default;
const server_id = "src/routes/courses/[id]/lessons/[...lessonParams]/+page.server.js";
const imports = ["_app/immutable/nodes/15.26a60fc9.js","_app/immutable/chunks/15.329399bd.js","_app/immutable/chunks/scheduler.ee52cacd.js","_app/immutable/chunks/index.a2391391.js","_app/immutable/chunks/navigation.4bf4851d.js","_app/immutable/chunks/singletons.333ce4a3.js","_app/immutable/chunks/index.45ef5fca.js","_app/immutable/chunks/stores.5de49fb7.js","_app/immutable/chunks/index.fc85f1f4.js","_app/immutable/chunks/Moon.7f4aad82.js","_app/immutable/chunks/environment.987b3e32.js","_app/immutable/chunks/each.4f9c2159.js","_app/immutable/chunks/Text.40bcd65a.js","_app/immutable/chunks/Locked.d4110ef1.js","_app/immutable/chunks/spread.5cc747ed.js","_app/immutable/chunks/CheckmarkFilled.f7226a63.js","_app/immutable/chunks/index.8c9a3a3e.js","_app/immutable/chunks/Add.efc40c97.js","_app/immutable/chunks/function.53788a56.js","_app/immutable/chunks/FlashFilled.60689fd0.js","_app/immutable/chunks/index.e68f3ff9.js","_app/immutable/chunks/reusableClass.2ccb5336.js","_app/immutable/chunks/Settings.88886624.js","_app/immutable/chunks/org.1ee4885a.js","_app/immutable/chunks/supabase.2c784bff.js","_app/immutable/chunks/preload-helper.0639fc73.js","_app/immutable/chunks/store.f203a796.js","_app/immutable/chunks/index.523fac41.js","_app/immutable/chunks/index.89e0ac82.js","_app/immutable/chunks/store.21c1b842.js","_app/immutable/chunks/validator.b0d7db8b.js","_app/immutable/chunks/validateEmail.f14e5c64.js","_app/immutable/chunks/translations.f943b7b3.js","_app/immutable/chunks/SkeletonText.4f748957.js","_app/immutable/chunks/useMobile.7962b2bd.js","_app/immutable/chunks/store.0b901476.js","_app/immutable/chunks/user.9ccdc884.js","_app/immutable/chunks/index.691cdcca.js","_app/immutable/chunks/TextField.05bb724d.js","_app/immutable/chunks/index.5d9eba69.js","_app/immutable/chunks/app.bd3189d3.js","_app/immutable/chunks/index.bf0b6763.js","_app/immutable/chunks/index.550ce75a.js","_app/immutable/chunks/CheckmarkOutline.0b1688ef.js","_app/immutable/chunks/axios.49bc0800.js","_app/immutable/chunks/CourseIcon.145b149b.js","_app/immutable/chunks/index.f39bbea9.js","_app/immutable/chunks/globals.f8c38982.js","_app/immutable/chunks/isEmpty.f6f5efd6.js","_app/immutable/chunks/TextArea.af35e63e.js","_app/immutable/chunks/HTMLRender.93b52c11.js","_app/immutable/chunks/Popover.d830a8b5.js","_app/immutable/chunks/TrashCan.b6b32865.js","_app/immutable/chunks/formatYoutubeVideo.9b573f81.js","_app/immutable/chunks/List.e8fcc1c3.js","_app/immutable/chunks/index.79d3b1ae.js","_app/immutable/chunks/index.6649ce47.js","_app/immutable/chunks/Tag.87ac45b2.js","_app/immutable/chunks/Close.999bfca1.js","_app/immutable/chunks/CopyButton.da956267.js","_app/immutable/chunks/Banner.a0824faa.js","_app/immutable/chunks/org.214021e8.js","_app/immutable/chunks/ErrorFilled.c75c44fe.js","_app/immutable/chunks/index.846953bc.js","_app/immutable/chunks/toHtml.5650e1c7.js","_app/immutable/chunks/SkeletonPlaceholder.85251fa5.js","_app/immutable/chunks/index.4b0b47d9.js","_app/immutable/chunks/index.fb010e26.js","_app/immutable/chunks/RadioButtonChecked.77d3c8da.js","_app/immutable/chunks/SelectItem.b7c50800.js","_app/immutable/chunks/ChevronDown.55b97967.js","_app/immutable/chunks/WarningAltFilled.a18ba147.js","_app/immutable/chunks/course.f6cde1df.js","_app/immutable/chunks/OverflowMenuItem.fb1aab9d.js","_app/immutable/chunks/index.d1f5fa28.js","_app/immutable/chunks/dashboard.fbd2f47f.js","_app/immutable/chunks/dayjs.min.1a74010f.js","_app/immutable/chunks/ArrowLeft.eacc72f9.js","_app/immutable/chunks/Download.29bef1b0.js","_app/immutable/chunks/constants.35eea698.js","_app/immutable/chunks/translation.efcfa9d6.js","_app/immutable/chunks/ChevronLeft.311fae7e.js","_app/immutable/chunks/ChevronRight.109ff9f8.js","_app/immutable/chunks/Save.1c35832a.js","_app/immutable/chunks/Dropdown.2e34ff7a.js","_app/immutable/chunks/ListBoxMenuItem.27f38d05.js"];
const stylesheets = ["_app/immutable/assets/15.91e93498.css","_app/immutable/assets/ArrowUp.baf5064f.css","_app/immutable/assets/index.fcec4d91.css","_app/immutable/assets/Text.2eef1a2a.css","_app/immutable/assets/index.5a0592f8.css","_app/immutable/assets/index.f910ccfb.css","_app/immutable/assets/TextField.963919e0.css","_app/immutable/assets/index.1ede2f13.css","_app/immutable/assets/index.b04b4802.css","_app/immutable/assets/TextArea.37048e21.css","_app/immutable/assets/index.f4a46859.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=15-5d0eded4.js.map
