import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape, v as validate_component, b as each, a as add_attribute } from './ssr-10c5b872.js';
import { T as Text } from './Text-e3f4b18b.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { C as CheckmarkOutline } from './CheckmarkOutline-377cf09c.js';
import { c as currentOrg } from './org-8fc26a61.js';
import { g as goto } from './navigation-cd282f65.js';
import { b as snackbar } from './store2-dc811f17.js';
import { p as profile } from './user-e923b6d4.js';
import { t as t2 } from './translations-90190f83.js';
import './_sentry-release-injection-file-6be6a010.js';
import './index2-aea858a5.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import './index15-c5761f1e.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "74c218d7-3b6f-4283-aec9-99d338e5e4c6", e._sentryDebugIdIdentifier = "sentry-dbid-74c218d7-3b6f-4283-aec9-99d338e5e4c6");
  } catch (e2) {
  }
}();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $profile, $$unsubscribe_profile;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $t, $$unsubscribe_t;
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let setupList = data.setup || [];
  let completed = 0;
  const StepsEnum = {
    UPDATE_PROFILE: "profile",
    UPDATE_ORG_PROFILE: "organization",
    CREATE_COURSE: "course",
    CREATE_LESSON: "lesson",
    CREATE_EXERCISE: "exercise",
    PUBLISH_COURSE: "publish"
  };
  const isCompleted = (id) => {
    return setupList?.find((c) => c.id === id)?.is_completed == true;
  };
  const handleClick = (id) => {
    switch (id) {
      case StepsEnum.CREATE_COURSE:
        goto(`/org/${$currentOrg.siteName}/courses?create=true`);
        break;
      case StepsEnum.CREATE_LESSON:
        if (isCompleted("course")) {
          const courseId = data?.courses[0].id;
          goto(`/courses/${courseId}/lessons`);
        } else {
          snackbar.info("setup.info_course");
        }
        break;
      case StepsEnum.CREATE_EXERCISE:
        if (isCompleted("lesson")) {
          const courseId = data?.courses[0].id;
          const lessonId = data?.lessons[0].id;
          goto(`/courses/${courseId}/lessons/${lessonId}`);
        } else {
          snackbar.info("setup.info_lesson");
        }
        break;
      case StepsEnum.PUBLISH_COURSE:
        if (isCompleted("course")) {
          const courseId = data?.courses[0].id;
          goto(`/courses/${courseId}/settings`);
        } else {
          snackbar.info("setup.info_course");
        }
        break;
      case StepsEnum.UPDATE_PROFILE:
        goto(`/org/${$currentOrg.siteName}/settings`);
        break;
      case StepsEnum.UPDATE_ORG_PROFILE:
        goto(`/org/${$currentOrg.siteName}/settings?tab=org`);
        break;
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  setupList = setupList.map((item) => {
    if (item.id === "profile") {
      item.is_completed = !$profile.avatar_url.includes("avatars/avatar.png");
    }
    return item;
  });
  completed = setupList.filter((list) => list.is_completed).length;
  $$unsubscribe_profile();
  $$unsubscribe_currentOrg();
  $$unsubscribe_t();
  return `<section class="w-full md:max-w-4xl mx-auto"><div class="py-2 md:py-10 px-2 md:px-5"><div class="flex items-center gap-2"><h1 class="dark:text-white text-2xl md:text-3xl font-bold">${escape($t("setup.get_started"))}</h1> ${validate_component(Text, "Chip").$$render(
    $$result,
    {
      value: `${completed}/${setupList.length}`,
      className: "text-[10px] font-semibold px-3 !py-1",
      shape: "rounded-full"
    },
    {},
    {}
  )}</div> <section class="px-4">${each(setupList, (list, i) => {
    return `<div class="flex flex-col lg:flex-row lg:items-center justify-between gap-2 w-full py-8 border-b border-gray-300"><div${add_attribute("class", `space-y-1 flex-1 ${list.is_completed ? "opacity-50" : ""}  lg:max-w-[50%]`, 0)}><div class="flex items-center gap-3">${validate_component(Text, "Chip").$$render(
      $$result,
      {
        value: i + 1,
        className: `text-[10px] font-semibold !py-1 `,
        shape: "rounded-full"
      },
      {},
      {}
    )} <p class="font-medium text-lg">${escape($t(list.title))}</p></div> <p${add_attribute("class", `text-sm`, 0)}>${escape($t(list.desc))} </p></div> <div class="w-full lg:w-[30%]">${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        variant: list.is_completed ? VARIANTS.CONTAINED_DARK : VARIANTS.OUTLINED,
        className: "!w-full font-normal text-sm flex items-center gap-2",
        onClick: () => handleClick(list.id),
        isDisabled: list.is_completed
      },
      {},
      {
        default: () => {
          return `${list.is_completed ? `${validate_component(CheckmarkOutline, "CheckmarkOutline").$$render($$result, {}, {}, {})}` : ``} ${escape($t(list.button_label))} `;
        }
      }
    )}</div> </div>`;
  })}</section></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fa196b43.js.map
