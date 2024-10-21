import { s as subscribe, e as set_store_value } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape, v as validate_component, a as add_attribute, b as each } from './ssr-10c5b872.js';
import { V as VARIANTS, P as PrimaryButton } from './index11-4ef8d5a0.js';
import { g as goto } from './navigation-cd282f65.js';
import { C as CoursesEmptyIcon } from './CoursesEmptyIcon-3e8d3605.js';
import { a as courses, c as courseMetaDeta } from './store5-4ab63ff0.js';
import { t as t2 } from './translations-90190f83.js';
import { p as profile } from './user-e923b6d4.js';
import { c as currentOrg } from './org-8fc26a61.js';
import { t as fetchCourses } from './index18-b03e5e10.js';
import { g as getGreeting } from './date-30c46a0e.js';
import { V as VisitOrgSite } from './VisitOrgSite-0191bbde.js';
import './_sentry-release-injection-file-6be6a010.js';
import './index2-aea858a5.js';
import './index15-c5761f1e.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import './supabase-cbc58bc2.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import './ArrowTopRight-dc8d0443.js';
import './useMobile-47eebf4e.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c55f8179-2c0f-4419-873c-4a6742287f42", e._sentryDebugIdIdentifier = "sentry-dbid-c55f8179-2c0f-4419-873c-4a6742287f42");
  } catch (e2) {
  }
}();
const Learning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let last3Courses;
  let $courses, $$unsubscribe_courses;
  let $t, $$unsubscribe_t;
  $$unsubscribe_courses = subscribe(courses, (value) => $courses = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  const gotoCourse = (id) => {
    if (!id)
      return;
    goto(`/courses/${id}/lessons?next=true`);
  };
  last3Courses = $courses.length > 0 ? $courses.slice(0, 3) : [];
  $$unsubscribe_courses();
  $$unsubscribe_t();
  return `<section class="h-full"><p class="text-base font-semibold text-[#040F2D] pb-3 dark:text-white">${escape($t("dashboard.current_lesson"))}</p> <div class="flex items-center flex-col border border-[#EAEAEA] dark:bg-neutral-800 gap-2 rounded w-full lg:h-[40vh] p-3">${last3Courses.length > 0 ? `<div class="w-full h-full flex flex-col justify-start overflow-y-auto">${each(last3Courses, (course) => {
    return `<div class="p-5"><span class="flex flex-col lg:flex-row gap-3 items-start pb-5"><img${add_attribute("src", course.logo || "/images/classroomio-course-img-template.jpg", 0)} alt="course" class="hidden lg:block lg:w-[60px] lg:h-[60px]"> <div class="w-full"><p class="text-base font-semibold dark:text-white">${escape(course.title)}</p> <p class="line-clamp-2 text-xs font-normal text-[#656565] dark:text-white">${escape(course.description)} </p></div> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $t("dashboard.continue"),
        variant: VARIANTS.OUTLINED,
        className: "rounded-none text-[#0233BD]",
        onClick: () => gotoCourse(course.id)
      },
      {},
      {}
    )}</span> <div class="relative bg-[#EAEAEA] w-full h-1"><div style="${"width: " + escape(Math.round((course?.progress_rate ?? 0) / (course?.total_lessons ?? 0) * 100) || 0, true) + "%"}"${add_attribute("class", `absolute top-0 left-0 bg-primary-700 h-full`, 0)}></div></div> </div>`;
  })}</div>` : `<div class="flex flex-col items-center">${validate_component(CoursesEmptyIcon, "CoursesEmptyIcon").$$render($$result, {}, {}, {})} <h3 class="text-center">${escape($t("dashboard.no_courses"))}</h3> <p class="w-[75%] text-center">${escape($t("dashboard.start_course"))}</p></div>`}</div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $courses, $$unsubscribe_courses;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $profile, $$unsubscribe_profile;
  let $courseMetaDeta, $$unsubscribe_courseMetaDeta;
  let $t, $$unsubscribe_t;
  $$unsubscribe_courses = subscribe(courses, (value) => $courses = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_courseMetaDeta = subscribe(courseMetaDeta, (value) => $courseMetaDeta = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let hasFetched = false;
  let progressPercentage = 0;
  let totalLessons = 0;
  let totalCompleted = 0;
  async function getCourses(userId, orgId) {
    if (hasFetched || !userId || !orgId) {
      return;
    }
    if (!$courses.length) {
      set_store_value(courseMetaDeta, $courseMetaDeta.isLoading = true, $courseMetaDeta);
    }
    const coursesResult = await fetchCourses(userId, orgId);
    console.log(`coursesResult`, coursesResult);
    set_store_value(courseMetaDeta, $courseMetaDeta.isLoading = false, $courseMetaDeta);
    if (!coursesResult)
      return;
    courses.set(coursesResult.allCourses);
    hasFetched = true;
  }
  function calcTotalProgress(courses2) {
    totalCompleted = courses2.reduce((acc, cur) => acc + (cur.progress_rate || 0), 0);
    totalLessons = courses2.reduce((acc, cur) => acc + (cur.total_lessons || 0), 0);
    progressPercentage = Math.round(totalCompleted / totalLessons * 100) || 0;
  }
  {
    getCourses($profile.id, $currentOrg.id);
  }
  {
    calcTotalProgress($courses);
  }
  $$unsubscribe_courses();
  $$unsubscribe_currentOrg();
  $$unsubscribe_profile();
  $$unsubscribe_courseMetaDeta();
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-1xr77q2_START -->${$$result.title = `<title>Student Dashboard - KinetsHub</title>`, ""}<!-- HEAD_svelte-1xr77q2_END -->`, ""} <section class="max-w-6xl gap-5 mx-auto"><div class="m-5"><div class="flex items-center justify-between mb-10"><h1 class="dark:text-white text-2xl md:text-3xl font-bold">${escape($t(getGreeting()))} ${escape($profile.fullname)}!</h1> ${validate_component(VisitOrgSite, "VisitOrgSiteButton").$$render($$result, { isLMS: true }, {}, {})}</div> <div class="w-full h-fit lg:h-[265px] flex md:items-center justify-between flex-col-reverse md:flex-row p-5 lg:p-10 rounded-md bg-primary-900 my-2"><div class="w-full md:w-[75%] lg:w-[80%]"><p class="text-white text-xs lg:text-xl font-normal mb-5">${escape($currentOrg.customization.dashboard.bannerText ? $currentOrg.customization.dashboard.bannerText : $t("dashboard.lms_dashboard_hero"))}</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      label: $t("dashboard.dont"),
      variant: VARIANTS.CONTAINED_WHITE,
      onClick: () => goto("/lms/mylearning")
    },
    {},
    {}
  )}</div> <img${add_attribute(
    "src",
    $currentOrg.customization.dashboard.bannerImage ? $currentOrg.customization.dashboard.bannerImage : "/images/student-learning.svg",
    0
  )} alt="student Learning Pictogram" class="w-28 md:block md:w-1/3 lg:w-[275px] lg:h-[205px] mb-3 md:mb-0"></div> <section class="flex w-full flex-col lg:flex-row md:gap-5"><div class="w-full lg:w-[50%] mt-10 xl:mt-2">${validate_component(Learning, "Learning").$$render($$result, {}, {}, {})}</div> <div class="mt-10 xl:mt-2 w-full lg:w-[50%]"><p class="text-base font-semibold text-[#040F2D] pb-3 dark:text-white">${escape($t("dashboard.your_progress"))}</p> <div class="flex items-center justify-center border border-[#EAEAEA] dark:bg-neutral-800 gap-2 rounded h-fit lg:h-[40vh] lg:overflow-y-auto p-3"><div class="w-full h-full flex flex-col sm:flex-row xl:flex-col items-center justify-between lg:items-center xl:items-start gap-5 lg:justify-around"><div data-svelte-h="svelte-1ohpt79"><img src="/images/target.svg" alt="student Learning score"></div> <span class="text-center xl:text-start"><p class="text-base font-semibold py-2 text-[#040F2D] dark:text-white">${escape($t("dashboard.your_progress"))}</p> ${totalLessons > 0 ? `<p class="text-xs font-normal text-[#656565] dark:text-white">${escape(totalCompleted)}/${escape(totalLessons)} ${escape($t("dashboard.lessons_completed"))}</p>` : `<p class="text-xs font-normal text-[#656565] dark:text-white">${escape($t("dashboard.No_courses_started"))}</p>`}</span> <h1 class="text-5xl lg:text-6xl font-bold text-[#262626] dark:text-white my-0 whitespace-nowrap">${escape(progressPercentage)} %</h1></div></div></div></section></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-90009252.js.map
