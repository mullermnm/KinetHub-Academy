import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component } from './ssr-10c5b872.js';
import { s as sideBar } from './store-37f0dea3.js';
import { a as apps } from './store3-2785033c.js';
import { g as globalStore } from './app-d638cf5d.js';
import './_sentry-release-injection-file-6be6a010.js';
import 'hotkeys-js';
import './index2-aea858a5.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "122cce2d-5e5b-48bf-b7da-d2d9da5c7084", e._sentryDebugIdIdentifier = "sentry-dbid-122cce2d-5e5b-48bf-b7da-d2d9da5c7084");
  } catch (e2) {
  }
}();
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_sideBar;
  let $$unsubscribe_apps;
  let $$unsubscribe_globalStore;
  $$unsubscribe_sideBar = subscribe(sideBar, (value) => value);
  $$unsubscribe_apps = subscribe(apps, (value) => value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => value);
  $$unsubscribe_sideBar();
  $$unsubscribe_apps();
  $$unsubscribe_globalStore();
  return `${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-64dd5014.js.map
