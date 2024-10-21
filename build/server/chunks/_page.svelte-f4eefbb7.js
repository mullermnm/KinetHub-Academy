import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-10c5b872.js';
import { g as goto } from './navigation-cd282f65.js';
import { C as Community } from './index30-341ac786.js';
import { V as VARIANTS, P as PrimaryButton } from './index11-4ef8d5a0.js';
import { f as currentOrgPath } from './org-8fc26a61.js';
import { i as isMobile } from './useMobile-47eebf4e.js';
import { A as Add } from './Add-78ef4d23.js';
import { t as t2 } from './translations-90190f83.js';
import './SkeletonPlaceholder-be3b5db2.js';
import './SkeletonText-d2851876.js';
import './index13-ea3bca06.js';
import './index12-9c021b5e.js';
import './index17-3166eaf0.js';
import './CoursesEmptyIcon-3e8d3605.js';
import './supabase-cbc58bc2.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './shared-server-e0f2abd3.js';
import './_sentry-release-injection-file-6be6a010.js';
import './date-30c46a0e.js';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import './index18-b03e5e10.js';
import './user-e923b6d4.js';
import './index2-aea858a5.js';
import './index15-c5761f1e.js';
import './store5-4ab63ff0.js';
import './Search-b1d61a12.js';
import './Close-73e0af44.js';
import './Dropdown-08db662d.js';
import './WarningAltFilled-13a554ec.js';
import './ListBoxMenuItem-e6ef2add.js';
import './ChevronDown-d5b93e8c.js';
import 'lodash/cloneDeep.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "44c508a0-f7a3-431c-86da-657a26b44313", e._sentryDebugIdIdentifier = "sentry-dbid-44c508a0-f7a3-431c-86da-657a26b44313");
  } catch (e2) {
  }
}();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  let $t, $$unsubscribe_t;
  let $isMobile, $$unsubscribe_isMobile;
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  function askCommunity() {
    goto(`${$currentOrgPath}/community/ask`);
  }
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_t();
  $$unsubscribe_isMobile();
  return `${$$result.head += `<!-- HEAD_svelte-dwsvu4_START -->${$$result.title = `<title>Community - KinetsHub</title>`, ""}<!-- HEAD_svelte-dwsvu4_END -->`, ""} <section class="w-full md:max-w-4xl md:mx-auto"><div class="w-full py-10 px-5"><div class="flex items-center justify-between mb-10 w-full"><h1 class="dark:text-white text-2xl md:text-3xl font-bold">${escape($t("community.title"))}</h1> ${$isMobile ? `${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { onClick: askCommunity }, {}, {
    default: () => {
      return `${validate_component(Add, "Add").$$render($$result, { size: 24 }, {}, {})}`;
    }
  })}` : `${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      label: $t("community.ask_button"),
      variant: VARIANTS.CONTAINED_DARK,
      onClick: askCommunity
    },
    {},
    {}
  )}`}</div> ${validate_component(Community, "Community").$$render($$result, {}, {}, {})}</div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f4eefbb7.js.map
