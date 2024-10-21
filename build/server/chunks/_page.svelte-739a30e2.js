import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-10c5b872.js';
import { T as Tabs, a as TabContent } from './index24-7fcbd4fe.js';
import { C as Courses } from './index31-c26626f1.js';
import './config-8c22ba68.js';
import './_sentry-release-injection-file-6be6a010.js';
import { c as currentOrg } from './org-8fc26a61.js';
import { p as profile } from './user-e923b6d4.js';
import { b as coursesComplete, d as coursesInProgress, c as courseMetaDeta, a as courses } from './store5-4ab63ff0.js';
import { t as t2 } from './translations-90190f83.js';
import { S as Search$1 } from './Search-b1d61a12.js';
import './Text-e3f4b18b.js';
import './index17-3166eaf0.js';
import './index16-68b7dc8d.js';
import './SkeletonPlaceholder-be3b5db2.js';
import './SkeletonText-d2851876.js';
import './getCurrencyFormatter-56d8d145.js';
import './index11-4ef8d5a0.js';
import './index15-c5761f1e.js';
import './RadioButtonChecked-49b8cfed.js';
import './course-a9172902.js';
import './index2-aea858a5.js';
import './CaretRight-a9e49169.js';
import './ImageLoader-d6ed26af.js';
import './Tag-37c50bfd.js';
import './Close-73e0af44.js';
import './useMobile-47eebf4e.js';
import './StructuredListRow-3dfbce79.js';
import './OverflowMenuItem-10e1618e.js';
import './CoursesEmptyIcon-3e8d3605.js';
import './app-d638cf5d.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e3048f19-d725-4fbb-9593-80f87a68cbfa", e._sentryDebugIdIdentifier = "sentry-dbid-e3048f19-d725-4fbb-9593-80f87a68cbfa");
  } catch (e2) {
  }
}();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabs;
  let currentTab;
  let $coursesComplete, $$unsubscribe_coursesComplete;
  let $t, $$unsubscribe_t;
  let $coursesInProgress, $$unsubscribe_coursesInProgress;
  let $$unsubscribe_currentOrg;
  let $$unsubscribe_profile;
  let $$unsubscribe_courseMetaDeta;
  let $$unsubscribe_courses;
  $$unsubscribe_coursesComplete = subscribe(coursesComplete, (value) => $coursesComplete = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_coursesInProgress = subscribe(coursesInProgress, (value) => $coursesInProgress = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => value);
  $$unsubscribe_profile = subscribe(profile, (value) => value);
  $$unsubscribe_courseMetaDeta = subscribe(courseMetaDeta, (value) => value);
  $$unsubscribe_courses = subscribe(courses, (value) => value);
  function onChange(tab) {
    return () => currentTab = tab;
  }
  tabs = [
    {
      label: `${$t("my_learning.progress")} (${$coursesInProgress.length})`,
      value: "1"
    },
    {
      label: `${$t("my_learning.complete")} (${$coursesComplete.length})`,
      value: "2"
    }
  ];
  currentTab = tabs[0].value;
  $$unsubscribe_coursesComplete();
  $$unsubscribe_t();
  $$unsubscribe_coursesInProgress();
  $$unsubscribe_currentOrg();
  $$unsubscribe_profile();
  $$unsubscribe_courseMetaDeta();
  $$unsubscribe_courses();
  return `<section class="max-w-6xl mx-auto"><div class="m-2 md:m-5"><div role="searchbox" class="bg-gray-100 w-full md:w-[60%] lg:w-[30%]">${validate_component(Search$1, "Search").$$render(
    $$result,
    {
      placeholder: $t("my_learning.search"),
      class: "dark:text-black"
    },
    {},
    {}
  )}</div> <h1 class="text-3xl font-semibold my-4">${escape($t("my_learning.heading"))}</h1> ${validate_component(Tabs, "Tabs").$$render($$result, { tabs, currentTab, onChange }, {}, {
    content: () => {
      return `<slot:fragment slot="content">${validate_component(TabContent, "TabContent").$$render($$result, { value: tabs[0].value, index: currentTab }, {}, {
        default: () => {
          return `${validate_component(Courses, "Courses").$$render(
            $$result,
            {
              courses: $coursesInProgress,
              emptyTitle: $t("my_learning.not_in_progress"),
              emptyDescription: $t("my_learning.any_progress")
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: tabs[1].value, index: currentTab }, {}, {
        default: () => {
          return `${validate_component(Courses, "Courses").$$render(
            $$result,
            {
              courses: $coursesComplete,
              emptyTitle: $t("my_learning.not_completed"),
              emptyDescription: $t("my_learning.any_course")
            },
            {},
            {}
          )}`;
        }
      })}</slot:fragment>`;
    }
  })}</div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-739a30e2.js.map
