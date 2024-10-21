import { s as subscribe, e as set_store_value } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-10c5b872.js';
import { p as profile } from './user-e923b6d4.js';
import './config-8c22ba68.js';
import './_sentry-release-injection-file-6be6a010.js';
import { c as currentOrg } from './org-8fc26a61.js';
import { C as Courses } from './index31-c26626f1.js';
import { c as courseMetaDeta } from './store5-4ab63ff0.js';
import { t as t2 } from './translations-90190f83.js';
import { I as IconButton } from './index9-eea8802c.js';
import { G as Grid } from './Grid-88d3c6f5.js';
import { L as List } from './List-6bb638c9.js';
import { S as Search$1 } from './Search-b1d61a12.js';
import { D as Dropdown$1 } from './Dropdown-08db662d.js';
import './index2-aea858a5.js';
import './index15-c5761f1e.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import './index17-3166eaf0.js';
import './index16-68b7dc8d.js';
import './SkeletonPlaceholder-be3b5db2.js';
import './SkeletonText-d2851876.js';
import './getCurrencyFormatter-56d8d145.js';
import './index11-4ef8d5a0.js';
import './RadioButtonChecked-49b8cfed.js';
import './course-a9172902.js';
import './CaretRight-a9e49169.js';
import './ImageLoader-d6ed26af.js';
import './Tag-37c50bfd.js';
import './Close-73e0af44.js';
import './useMobile-47eebf4e.js';
import './StructuredListRow-3dfbce79.js';
import './OverflowMenuItem-10e1618e.js';
import './CoursesEmptyIcon-3e8d3605.js';
import './app-d638cf5d.js';
import './WarningAltFilled-13a554ec.js';
import './ListBoxMenuItem-e6ef2add.js';
import './ChevronDown-d5b93e8c.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "85997001-1b51-4024-9140-2f310e25b3a7", e._sentryDebugIdIdentifier = "sentry-dbid-85997001-1b51-4024-9140-2f310e25b3a7");
  } catch (e2) {
  }
}();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentOrg;
  let $$unsubscribe_profile;
  let $courseMetaDeta, $$unsubscribe_courseMetaDeta;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => value);
  $$unsubscribe_profile = subscribe(profile, (value) => value);
  $$unsubscribe_courseMetaDeta = subscribe(courseMetaDeta, (value) => $courseMetaDeta = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let searchValue = "";
  let selectedId;
  let filteredExploreCourses;
  let exploreCourseList = [];
  function filterCourses(searchValue2, _selectedId, courses) {
    filteredExploreCourses = courses.filter((course) => {
      if (!searchValue2 || course.title.toLowerCase().includes(searchValue2.toLowerCase())) {
        return true;
      }
      return false;
    });
    if (_selectedId === "0") {
      filteredExploreCourses = filteredExploreCourses.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
    } else if (_selectedId === "1") {
      filteredExploreCourses = filteredExploreCourses.sort((a, b) => b.total_lessons - a.total_lessons);
    }
  }
  const setViewPreference = (preference) => {
    set_store_value(courseMetaDeta, $courseMetaDeta.view = preference, $courseMetaDeta);
    localStorage.setItem("courseView", preference);
  };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      filterCourses(searchValue, selectedId, exploreCourseList);
    }
    $$rendered = `<section class="w-full md:max-w-6xl md:mx-auto"><div class="py-2 md:py-10 px-2 md:px-5"><h1 class="dark:text-white text-3xl font-bold">${escape($t("explore.heading"))}</h1> <div class="flex flex-row-reverse"><div class="filter-container flex items-end justify-start">${validate_component(Search$1, "Search").$$render(
      $$result,
      {
        placeholder: $t("courses.search_placeholder"),
        searchClass: "mr-2",
        class: " bg-gray-100 dark:bg-neutral-800",
        value: searchValue
      },
      {
        value: ($$value) => {
          searchValue = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Dropdown$1, "Dropdown").$$render(
      $$result,
      {
        class: "h-full",
        size: "xl",
        items: [
          {
            id: "0",
            text: $t("courses.course_filter.date_created")
          },
          {
            id: "1",
            text: $t("courses.course_filter.lessons")
          }
        ],
        selectedId
      },
      {
        selectedId: ($$value) => {
          selectedId = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${$courseMetaDeta.view === "list" ? `${validate_component(IconButton, "IconButton").$$render($$result, { onClick: () => setViewPreference("grid") }, {}, {
      default: () => {
        return `${validate_component(Grid, "Grid").$$render($$result, { size: 24 }, {}, {})}`;
      }
    })}` : `${validate_component(IconButton, "IconButton").$$render($$result, { onClick: () => setViewPreference("list") }, {}, {
      default: () => {
        return `${validate_component(List, "List").$$render($$result, { size: 24 }, {}, {})}`;
      }
    })}`}</div></div> ${validate_component(Courses, "Courses").$$render(
      $$result,
      {
        emptyTitle: $t("explore.empty_heading"),
        emptyDescription: $t("explore.empty_description"),
        isExplore: true,
        courses: filteredExploreCourses
      },
      {
        courses: ($$value) => {
          filteredExploreCourses = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></section>`;
  } while (!$$settled);
  $$unsubscribe_currentOrg();
  $$unsubscribe_profile();
  $$unsubscribe_courseMetaDeta();
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-438cfdf2.js.map
