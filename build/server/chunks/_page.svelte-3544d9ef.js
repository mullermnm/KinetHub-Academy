import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component } from './ssr-10c5b872.js';
import { L as LandingPage } from './index7-7ca5be32.js';
import { g as globalStore } from './app-d638cf5d.js';
import { c as currentOrg } from './org-8fc26a61.js';
import 'lodash/get.js';
import './Rocket-f94fd084.js';
import './index16-68b7dc8d.js';
import './SkeletonPlaceholder-be3b5db2.js';
import './SkeletonText-d2851876.js';
import './getCurrencyFormatter-56d8d145.js';
import './_sentry-release-injection-file-6be6a010.js';
import './index11-4ef8d5a0.js';
import './translations-90190f83.js';
import './index2-aea858a5.js';
import './index15-c5761f1e.js';
import './RadioButtonChecked-49b8cfed.js';
import './course-a9172902.js';
import './CaretRight-a9e49169.js';
import './ImageLoader-d6ed26af.js';
import './Tag-37c50bfd.js';
import './Close-73e0af44.js';
import './validator-27ec1d5c.js';
import 'lodash/isNumber.js';
import 'zod';
import './TextField-86164973.js';
import './index9-eea8802c.js';
import './navigation-cd282f65.js';
import './stores-793c1e19.js';
import './user-e923b6d4.js';
import './app2-29b60895.js';
import './index17-3166eaf0.js';
import './CoursesEmptyIcon-3e8d3605.js';
import './supabase-cbc58bc2.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './shared-server-e0f2abd3.js';
import './store5-4ab63ff0.js';
import './index6-4a1599e3.js';
import './TextArea-9e2a2a4d.js';
import './Popover-a92462a3.js';
import './store6-6153cb6b.js';
import './PoweredBy-58475ea5.js';
import './ChevronRight-920dc215.js';
import './Column-ce23f72d.js';
import 'lodash/cloneDeep.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "eded0373-61d9-4483-a79d-76a782a91fc7", e._sentryDebugIdIdentifier = "sentry-dbid-eded0373-61d9-4483-a79d-76a782a91fc7");
  } catch (e2) {
  }
}();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  let $currentOrg, $$unsubscribe_currentOrg;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_globalStore();
  $$unsubscribe_currentOrg();
  return `${validate_component(LandingPage, "OrgLandingPage").$$render(
    $$result,
    {
      orgSiteName: $globalStore.orgSiteName,
      org: $currentOrg
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3544d9ef.js.map
