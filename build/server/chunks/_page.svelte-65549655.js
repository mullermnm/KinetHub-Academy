import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape } from './ssr-10c5b872.js';
import { g as goto } from './navigation-cd282f65.js';
import { A as ArrowLeft } from './ArrowLeft-b60a107c.js';
import { c as currentOrg, f as currentOrgPath } from './org-8fc26a61.js';
import { V as VARIANTS, P as PrimaryButton } from './index11-4ef8d5a0.js';
import { d as askCommunityValidation } from './validator-27ec1d5c.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import { b as snackbar } from './store2-dc811f17.js';
import { g as generateSlug } from './generateSlug-35858d27.js';
import { T as TextEditor } from './index26-5db2dde8.js';
import { T as TextField } from './TextField-86164973.js';
import { p as profile } from './user-e923b6d4.js';
import { t as fetchCourses } from './index18-b03e5e10.js';
import { t as t2 } from './translations-90190f83.js';
import { a as courses } from './store5-4ab63ff0.js';
import { D as Dropdown$1 } from './Dropdown-08db662d.js';
import './index2-aea858a5.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import './_sentry-release-injection-file-6be6a010.js';
import 'lodash/isNumber.js';
import 'zod';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './app-d638cf5d.js';
import './index9-eea8802c.js';
import './index15-c5761f1e.js';
import './WarningAltFilled-13a554ec.js';
import './ListBoxMenuItem-e6ef2add.js';
import './ChevronDown-d5b93e8c.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d073016b-1b20-44b0-a0d7-0c5161e6295f", e._sentryDebugIdIdentifier = "sentry-dbid-d073016b-1b20-44b0-a0d7-0c5161e6295f");
  } catch (e2) {
  }
}();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrg, $$unsubscribe_currentOrg;
  let $profile, $$unsubscribe_profile;
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  let $courses, $$unsubscribe_courses;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  $$unsubscribe_courses = subscribe(courses, (value) => $courses = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let errors = {};
  let fields = { title: "", body: "", courseId: "" };
  let fetchedCourses = [];
  async function getCourses(userId, orgId) {
    if ($courses.length) {
      fetchedCourses = [...$courses];
      return;
    }
    const coursesResults = await fetchCourses(userId, orgId);
    if (!coursesResults)
      return;
    fetchedCourses = coursesResults.allCourses;
  }
  async function handleSave() {
    errors = askCommunityValidation(fields);
    console.log("handleSave errors", errors);
    if (Object.keys(errors).length) {
      return;
    }
    const { data: question, error } = await supabase.from("community_question").insert({
      title: fields.title,
      body: fields.body,
      organization_id: $currentOrg.id,
      author_profile_id: $profile.id,
      votes: 0,
      slug: generateSlug(fields.title),
      course_id: fields.courseId
    }).select();
    if (error) {
      console.error("Error: asking question", error);
      snackbar.error("snackbar.community.error.try_again");
    } else {
      const slug = question[0]?.slug;
      console.log("Success: asking question", question, slug);
      snackbar.success("snackbar.community.success.question_submitted");
      goto(`${$currentOrgPath}/community/${slug}`);
    }
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if ($profile.id && $currentOrg.id) {
          getCourses($profile.id, $currentOrg.id);
        }
      }
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-igiws2_START -->${$$result.title = `<title>Ask the Community - KinetsHub</title>`, ""}<!-- HEAD_svelte-igiws2_END -->`, ""} <section class="w-full md:max-w-3xl md:mx-auto"><div class="p-5"><a class="text-gray-500 dark:text-white text-md flex items-center"${add_attribute("href", `${$currentOrgPath}/community`, 0)}>${validate_component(ArrowLeft, "ArrowLeftIcon").$$render(
      $$result,
      {
        size: 24,
        class: "carbon-icon dark:text-white"
      },
      {},
      {}
    )} ${escape($t("community.ask.go_back"))}</a> <div class="flex items-center gap-12 justify-between"><h1 class="dark:text-white text-2xl md:text-3xl font-bold">${escape($t("community.ask.ask_the"))}</h1> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $t("community.ask.publish"),
        variant: VARIANTS.CONTAINED_DARK,
        onClick: handleSave
      },
      {},
      {}
    )}</div></div> <div class="mb-3 p-2 flex gap-x-5 justify-between">${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        placeholder: $t("community.ask.title"),
        errorMessage: errors.title,
        className: "w-[75%]",
        value: fields.title
      },
      {
        value: ($$value) => {
          fields.title = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Dropdown$1, "Dropdown").$$render(
      $$result,
      {
        class: "w-[25%] h-full",
        size: "xl",
        label: $t("community.ask.select_course"),
        invalid: !!errors.courseId,
        invalidText: errors.courseId,
        items: fetchedCourses.map((course) => ({ id: course.id, text: course.title })),
        selectedId: fields.courseId
      },
      {
        selectedId: ($$value) => {
          fields.courseId = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="px-2">${validate_component(TextEditor, "TextEditor").$$render(
      $$result,
      {
        placeholder: $t("community.ask.ask_community"),
        onChange: (html) => fields.body = html,
        value: fields.body
      },
      {
        value: ($$value) => {
          fields.body = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></section>`;
  } while (!$$settled);
  $$unsubscribe_currentOrg();
  $$unsubscribe_profile();
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_courses();
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-65549655.js.map
