import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape, b as each, v as validate_component, a as add_attribute } from './ssr-10c5b872.js';
import cloneDeep from 'lodash/cloneDeep.js';
import { C as Chip } from './index12-9c021b5e.js';
import { p as profile } from './user-e923b6d4.js';
import { c as currentOrg } from './org-8fc26a61.js';
import './_sentry-release-injection-file-6be6a010.js';
import './config-8c22ba68.js';
import './date-30c46a0e.js';
import { t as t2 } from './translations-90190f83.js';
import './index2-aea858a5.js';
import './index15-c5761f1e.js';
import './shared-server-e0f2abd3.js';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "59817497-c4c6-4848-9f58-cf0d67ba96d7", e._sentryDebugIdIdentifier = "sentry-dbid-59817497-c4c6-4848-9f58-cf0d67ba96d7");
  } catch (e2) {
  }
}();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentOrg;
  let $$unsubscribe_profile;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => value);
  $$unsubscribe_profile = subscribe(profile, (value) => value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  const defaultSections = [
    {
      id: 0,
      title: $t("exercises.not_submitted"),
      items: [],
      className: "text-[#E35353] bg-[#FDDFE4]"
    },
    {
      id: 1,
      title: $t("exercises.submitted"),
      items: [],
      className: "text-orange-700 bg-orange-200"
    },
    {
      id: 2,
      title: $t("exercises.in_progress"),
      items: [],
      className: "text-yellow-700 bg-yellow-200"
    },
    {
      id: 3,
      title: $t("exercises.graded"),
      value: 0,
      items: [],
      className: "text-green-700 bg-green-200"
    }
  ];
  let sections = cloneDeep(defaultSections);
  $$unsubscribe_currentOrg();
  $$unsubscribe_profile();
  $$unsubscribe_t();
  return `<section class="w-full max-w-6xl mx-auto"><div class="p-5"><div class="flex items-center justify-between mb-10"><h1 class="dark:text-white text-3xl font-bold">${escape($t("exercises.heading"))}</h1></div> <div><div class="flex items-center w-full">${each(sections, ({ title, items, className, id }) => {
    return `<div class="min-w-[355px] max-w-[355px] h-[70vh] rounded-md bg-gray-100 dark:bg-black border border-gray-50 dark:border-neutral-700 p-3 mr-3 overflow-hidden"><div class="flex items-center mb-2 gap-2"><p class="dark:text-white ml-2 font-bold">${escape(title)}</p> ${validate_component(Chip, "Chip").$$render($$result, { value: items.length, className }, {}, {})}</div> <div class="pr-2 h-full overflow-y-auto pb-3">${each(items, (item) => {
      return `<div class="w-full my-2 mx-0 rounded-md bg-white dark:bg-neutral-800 py-3 px-3"><a class="flex w-full items-center cursor-pointer text-primary-600 mb-2"${add_attribute("href", item.courseURL, 0)}><p class="text-xs">${escape(item.courseTitle)}</p></a> <a class="text-black dark:text-white text-md font-bold"${add_attribute("href", item.exerciseURL, 0)}>${id === 3 ? `(${escape(item.grade)}) -` : ``} ${escape(item.exerciseTitle)}</a> <a class="flex items-center no-underline hover:underline text-black my-2 w-fit"${add_attribute("href", item.lessonURL, 0)}><p class="dark:text-white text-grey text-sm">${escape($t("exercises.lesson"))} <span class="italic">${escape(item.lessonTitle)}</span> </p></a> <p class="dark:text-white text-gray-500 text-xs">${escape(item.submissionUpdatedAt)}</p> </div>`;
    })}</div> </div>`;
  })}</div></div></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-97ebb5cf.js.map
