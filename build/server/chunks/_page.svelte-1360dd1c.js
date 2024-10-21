import { s as subscribe, e as set_store_value, d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, b as each, e as escape, d as spread, h as escape_attribute_value, f as escape_object } from './ssr-10c5b872.js';
import { B as Box } from './index17-3166eaf0.js';
import { S as SkeletonPlaceholder$1 } from './SkeletonPlaceholder-be3b5db2.js';
import { S as SkeletonText$1 } from './SkeletonText-d2851876.js';
import pluralize from 'pluralize';
import { m as createQuizModal, c as currentOrg, n as quizesStore, f as currentOrgPath, t as themeImages, r as deleteModal } from './org-8fc26a61.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import './_sentry-release-injection-file-6be6a010.js';
import { c as calDateDiff } from './date-30c46a0e.js';
import { t as t2 } from './translations-90190f83.js';
import { I as ImageLoader$1 } from './ImageLoader-d6ed26af.js';
import { C as CoursesEmptyIcon } from './CoursesEmptyIcon-3e8d3605.js';
import { b as snackbar } from './store2-dc811f17.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import { M as Modal } from './index8-59a07edf.js';
import { T as TextField } from './TextField-86164973.js';
import './config-8c22ba68.js';
import './validator-27ec1d5c.js';
import { D as DeleteModal } from './DeleteModal2-9b4c4ba6.js';
import { i as isMobile } from './useMobile-47eebf4e.js';
import { A as Add } from './Add-78ef4d23.js';
import './index2-aea858a5.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import './index15-c5761f1e.js';
import '@supabase/supabase-js';
import './index9-eea8802c.js';
import 'lodash/isNumber.js';
import 'zod';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "19564b74-b03f-4411-8267-5d7748ddace7", e._sentryDebugIdIdentifier = "sentry-dbid-19564b74-b03f-4411-8267-5d7748ddace7");
  } catch (e2) {
  }
}();
const OverflowMenuHorizontal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<circle cx="8" cy="16" r="2"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="24" cy="16" r="2"></circle></svg>`;
});
const css$2 = {
  code: ".root.svelte-50f6f4{height:180px}",
  map: null
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="root w-full border border-gray-100 dark:border-neutral-600 dark:bg-neutral-800 mr-4 mb-4 rounded-md transition ease-in-out relative flex p-3 svelte-50f6f4">${validate_component(SkeletonPlaceholder$1, "SkeletonPlaceholder").$$render($$result, { style: "width: 20%; height: 100%;" }, {}, {})} <div class="w-full mx-5 flex justify-evenly flex-col"> ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { style: "width: 50%;" }, {}, {})}  ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { style: "width: 50%; height: 4rem;" }, {}, {})}</div> </div>`;
});
const css$1 = {
  code: ".dropdown.svelte-roo133{box-shadow:0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%),\n      0px 3px 14px 2px rgb(0 0 0 / 12%);right:0px;top:20px;left:unset}",
  map: null
};
const notIconClass = "border rounded-lg border-grey p-3 focus:outline-none focus:border-gray-400 focus:bg-gray-200";
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options = [] } = $$props;
  let { classNames = "relative" } = $$props;
  let { isIcon = false } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  if ($$props.isIcon === void 0 && $$bindings.isIcon && isIcon !== void 0)
    $$bindings.isIcon(isIcon);
  $$result.css.add(css$1);
  return `<div class="${escape(classNames, true) + " z-10 " + escape(!options.length && "hidden", true) + " svelte-roo133"}"><button class="${"flex flex-row items-center " + escape(!isIcon && notIconClass, true) + " svelte-roo133"}">${slots.default ? slots.default({}) : ``}</button> ${``} </div>`;
});
function onRename(quiz) {
  createQuizModal.update((m) => ({
    ...m,
    id: quiz.id,
    title: quiz.title,
    openEdit: true
  }));
}
function onDelete(quiz) {
  deleteModal.update((m) => ({
    ...m,
    open: true,
    id: quiz.id
  }));
}
const css = {
  code: ".root.svelte-sj2nhp{min-height:180px}",
  map: null
};
function startQuiz() {
}
const QuizCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  let { quiz } = $$props;
  let { totalQuestions } = $$props;
  function getOptions() {
    return [
      // {
      //   label: 'Edit',
      //   onClick: onEdit(quiz),
      // },
      // {
      //   label: 'Share',
      //   onClick: onShare(quiz),
      // },
      // {
      //   label: 'Report',
      //   onClick: onReport(quiz),
      // },
      {
        label: $t("components.quiz.rename"),
        onClick() {
          onRename(quiz);
        }
      },
      // {
      //   label: 'Make a copy',
      //   onClick() {
      //     onMakeCopy(quiz);
      //   },
      // },
      {
        label: $t("components.quiz.delete"),
        onClick() {
          onDelete(quiz);
        }
      }
    ];
  }
  if ($$props.quiz === void 0 && $$bindings.quiz && quiz !== void 0)
    $$bindings.quiz(quiz);
  if ($$props.totalQuestions === void 0 && $$bindings.totalQuestions && totalQuestions !== void 0)
    $$bindings.totalQuestions(totalQuestions);
  $$result.css.add(css);
  $$unsubscribe_t();
  $$unsubscribe_currentOrgPath();
  return `${quiz ? `<div class="root w-full border hover:shadow-2xl transition ease-in-out rounded-lg bg-gray-100 dark:bg-black mb-5 relative flex flex-col lg:flex-row p-3 svelte-sj2nhp">${validate_component(ImageLoader$1, "ImageLoader").$$render(
    $$result,
    {
      src: themeImages[quiz.theme]?.card || themeImages.standard.card,
      alt: "quiz-card",
      style: "max-width:300px, min-width: 200px;"
    },
    {},
    {}
  )} <div class="p-2 md:p-5 flex flex-col justify-between w-full"><div class="flex justify-between"><h4 class="dark:text-white title text-md font-bold capitalize"><a href="${escape($currentOrgPath, true) + "/quiz/" + escape(quiz.id, true)}">${escape(quiz.title)}</a></h4> ${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      options: getOptions(),
      classNames: "absolute top-4 right-4",
      isIcon: true
    },
    {},
    {
      default: () => {
        return `<div class="p-1 rounded-full bg-gray-200 dark:bg-gray-600">${validate_component(OverflowMenuHorizontal, "OverflowMenuHorizontalIcon").$$render($$result, { size: 20, class: "carbon-icon active" }, {}, {})}</div>`;
      }
    }
  )}</div> <div class="flex md:flex-row flex-col justify-between"><div><p class="mb-2">${escape(pluralize("question", totalQuestions, true))}</p> <p class="mb-2 md:mb-0">${escape($t("components.quiz.updated"))} ${escape(calDateDiff(quiz.updated_at))}</p></div> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      className: "px-6 py-3",
      variant: VARIANTS.OUTLINED,
      label: $t("components.quiz.start"),
      onClick: startQuiz
    },
    {},
    {}
  )}</div></div></div>` : ``}`;
});
const Quizzes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrg, $$unsubscribe_currentOrg;
  let $quizesStore, $$unsubscribe_quizesStore;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_quizesStore = subscribe(quizesStore, (value) => $quizesStore = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let isLoading = false;
  async function fetchQuizes(id) {
    if (!id)
      return;
    isLoading = true;
    const { data, error } = await supabase.from("quiz").select(`*`).eq("organization_id", id).order("updated_at", { ascending: false });
    if (error) {
      snackbar.error();
      return;
    }
    console.log("data", data);
    quizesStore.set(data);
    isLoading = false;
  }
  {
    fetchQuizes($currentOrg.id);
  }
  $$unsubscribe_currentOrg();
  $$unsubscribe_quizesStore();
  $$unsubscribe_t();
  return `<div class="flex items-center justify-center lg:justify-start flex-wrap my-4 m-auto">${isLoading ? `${validate_component(Loader, "QuizLoader").$$render($$result, {}, {}, {})} ${validate_component(Loader, "QuizLoader").$$render($$result, {}, {}, {})} ${validate_component(Loader, "QuizLoader").$$render($$result, {}, {}, {})}` : `${$quizesStore.length ? each($quizesStore, (quiz) => {
    return `${validate_component(QuizCard, "QuizCard").$$render(
      $$result,
      {
        quiz,
        totalQuestions: quiz.questions?.length || 0
      },
      {},
      {}
    )}`;
  }) : `${validate_component(Box, "Box").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CoursesEmptyIcon, "CoursesEmptyIcon").$$render($$result, {}, {}, {})} <h3 class="dark:text-white text-2xl my-5">${escape($t("components.quiz.no_quizz"))}</h3> <p class="dark:text-white w-1/3 text-center">${escape($t("components.quiz.interactive"))}</p> `;
    }
  })}`}`}</div>`;
});
const NewQuizModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $createQuizModal, $$unsubscribe_createQuizModal;
  let $$unsubscribe_currentOrgPath;
  let $$unsubscribe_quizesStore;
  let $$unsubscribe_currentOrg;
  let $t, $$unsubscribe_t;
  $$unsubscribe_createQuizModal = subscribe(createQuizModal, (value) => $createQuizModal = value);
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => value);
  $$unsubscribe_quizesStore = subscribe(quizesStore, (value) => value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let open = false;
  let errors = { title: "" };
  let isLoading = false;
  function handleClose() {
    set_store_value(createQuizModal, $createQuizModal.id = null, $createQuizModal);
    set_store_value(createQuizModal, $createQuizModal.title = "", $createQuizModal);
    set_store_value(createQuizModal, $createQuizModal.open = false, $createQuizModal);
    set_store_value(createQuizModal, $createQuizModal.openEdit = false, $createQuizModal);
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    open = $createQuizModal.openEdit || $createQuizModal.open;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1jaqk7z_START -->${$$result.title = `<title>${escape($t("components.quiz.title"))} - KinetsHub</title>`, ""}<!-- HEAD_svelte-1jaqk7z_END -->`, ""} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: handleClose,
        width: "w-4/5 md:w-2/5",
        modalHeading: ($createQuizModal.openEdit ? $t("components.quiz.update") : $t("components.quiz.create")) + " " + $t("components.quiz.a_quiz"),
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<form>${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: $t("components.quiz.quiz_title"),
              autofocus: true,
              placeholder: $t("components.quiz.placehoolder"),
              className: "mb-4",
              isRequired: true,
              errorMessage: errors.title,
              autoComplete: false,
              value: $createQuizModal.title
            },
            {
              value: ($$value) => {
                $createQuizModal.title = $$value;
                $$settled = false;
              }
            },
            {}
          )} <div class="mt-5 flex items-center justify-end">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              label: $createQuizModal.openEdit ? $t("components.quiz.save") : $t("components.quiz.continue"),
              type: "submit",
              isDisabled: isLoading,
              isLoading
            },
            {},
            {}
          )}</div></form>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_createQuizModal();
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_quizesStore();
  $$unsubscribe_currentOrg();
  $$unsubscribe_t();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobile, $$unsubscribe_isMobile;
  let $createQuizModal, $$unsubscribe_createQuizModal;
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_createQuizModal = subscribe(createQuizModal, (value) => $createQuizModal = value);
  $$unsubscribe_isMobile();
  $$unsubscribe_createQuizModal();
  return `${$$result.head += `<!-- HEAD_svelte-1pgsj1g_START -->${$$result.title = `<title>Interactive Quizzes - KinetsHub</title>`, ""}<!-- HEAD_svelte-1pgsj1g_END -->`, ""} <section class="w-full max-w-6xl mx-auto"><div class="py-10 px-5"><div class="flex items-center justify-between mb-10"><h1 class="dark:text-white text-2xl md:text-3xl font-bold" data-svelte-h="svelte-15ykun8">Interactive Quizzes</h1> ${$isMobile ? `${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      onClick: () => $createQuizModal.open = true
    },
    {},
    {
      default: () => {
        return `${validate_component(Add, "Add").$$render($$result, { size: 24 }, {}, {})}`;
      }
    }
  )}` : `${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      label: "Create Quiz",
      onClick: () => $createQuizModal.open = true
    },
    {},
    {}
  )}`}</div> ${validate_component(NewQuizModal, "NewQuizModal").$$render($$result, {}, {}, {})} ${validate_component(DeleteModal, "DeleteModal").$$render($$result, {}, {}, {})} ${validate_component(Quizzes, "Quizzes").$$render($$result, {}, {}, {})}</div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1360dd1c.js.map
