import { s as subscribe, e as set_store_value, d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute, d as spread, h as escape_attribute_value, f as escape_object } from './ssr-10c5b872.js';
import { p as page } from './stores-793c1e19.js';
import { P as PageNav } from './index.svelte_svelte_type_style_lang-3a07a684.js';
import { R as RoleBasedSecurity } from './index14-890f60bc.js';
import { B as Box } from './index17-3166eaf0.js';
import { V as VARIANTS, P as PrimaryButton } from './index11-4ef8d5a0.js';
import { h as handleAddLessonWidget, C as CourseContainer, P as PageBody } from './index25-9c55d031.js';
import { h as handleDelete, a as lessonSections, b as lessons, c as course, e as handleSaveLessonSection, f as handleSaveLesson } from './store4-ef39175f.js';
import { M as Modal } from './index8-59a07edf.js';
import { t as t2 } from './translations-90190f83.js';
import { g as goto } from './navigation-cd282f65.js';
import { a as COURSE_VERSION, C as COURSE_TYPE } from './index15-c5761f1e.js';
import { p as profile } from './user-e923b6d4.js';
import { T as TextField } from './TextField-86164973.js';
import { T as Text } from './Text-e3f4b18b.js';
import { g as globalStore } from './app-d638cf5d.js';
import './config-8c22ba68.js';
import './_sentry-release-injection-file-6be6a010.js';
import './org-8fc26a61.js';
import { O as OverflowMenu$1, a as OverflowMenuItem$1 } from './OverflowMenuItem-10e1618e.js';
import { A as Add } from './Add-78ef4d23.js';
import { I as IconButton } from './index9-eea8802c.js';
import { b as snackbar } from './store2-dc811f17.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import './index12-9c021b5e.js';
import './Moon-632bccb1.js';
import './environment-b7cb3169.js';
import './prod-ssr-f02d8713.js';
import './Locked-3612b17f.js';
import './CheckmarkFilled-36899326.js';
import './function-efda068b.js';
import './FlashFilled-4a89bd75.js';
import './reusableClass-512f4804.js';
import './index2-aea858a5.js';
import './Settings-0a14f57d.js';
import './SkeletonText-d2851876.js';
import './useMobile-47eebf4e.js';
import './store-37f0dea3.js';
import 'canvas-confetti';
import './index18-b03e5e10.js';
import './validator-27ec1d5c.js';
import 'lodash/isNumber.js';
import 'zod';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import '@supabase/supabase-js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6c7fc31f-9a60-41bf-99ed-063cd7aab42c", e._sentryDebugIdIdentifier = "sentry-dbid-6c7fc31f-9a60-41bf-99ed-063cd7aab42c");
  } catch (e2) {
  }
}();
const ScreenMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M22 25H30V27H22zM22 21H30V23H22zM18.4141 11L23 11 23 9 15 9 15 17 17 17 17 12.4141 23.5859 19 25 17.5859 18.4141 11z"></path><path d="M28,3H4c-1.1028,0-2,.8975-2,2V21c0,1.1025,.8972,2,2,2H12v4h-4v2h12v-8H4V5H28v14h2V5c0-1.1025-.8972-2-2-2Zm-10,24h-4v-4h4v4Z"></path></svg>`;
});
const DeleteLessonConfirmation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { openDeleteModal = false } = $$props;
  let { deleteLesson = () => {
  } } = $$props;
  async function handleDelete2() {
    deleteLesson();
    openDeleteModal = false;
  }
  if ($$props.openDeleteModal === void 0 && $$bindings.openDeleteModal && openDeleteModal !== void 0)
    $$bindings.openDeleteModal(openDeleteModal);
  if ($$props.deleteLesson === void 0 && $$bindings.deleteLesson && deleteLesson !== void 0)
    $$bindings.deleteLesson(deleteLesson);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: () => openDeleteModal = false,
        width: "w-96",
        containerClass: "px-6 pt-2 pb-6",
        modalHeading: $t("delete_modal.label"),
        open: openDeleteModal
      },
      {
        open: ($$value) => {
          openDeleteModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div><h1 class="dark:text-white text-lg">${escape($t("delete_modal.content"))}?</h1> <div class="mt-5 flex items-center justify-between">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              variant: VARIANTS.OUTLINED,
              label: $t("delete_modal.no"),
              onClick: () => openDeleteModal = false
            },
            {},
            {}
          )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              variant: VARIANTS.OUTLINED,
              label: $t("delete_modal.yes"),
              onClick: handleDelete2
            },
            {},
            {}
          )}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const LessonList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lessons, $$unsubscribe_lessons;
  let $globalStore, $$unsubscribe_globalStore;
  let $page, $$unsubscribe_page;
  let $course, $$unsubscribe_course;
  let $t, $$unsubscribe_t;
  $$unsubscribe_lessons = subscribe(lessons, (value) => $lessons = value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { reorder = false } = $$props;
  let { lessonEditing } = $$props;
  let { lessonToDelete } = $$props;
  let { openDeleteModal = false } = $$props;
  let errors = {};
  function getLessonOrder2(id) {
    const index = $lessons.findIndex((lesson) => lesson.id === id);
    if (index < 9) {
      return "0" + (index + 1);
    } else {
      return index + 1;
    }
  }
  if ($$props.reorder === void 0 && $$bindings.reorder && reorder !== void 0)
    $$bindings.reorder(reorder);
  if ($$props.lessonEditing === void 0 && $$bindings.lessonEditing && lessonEditing !== void 0)
    $$bindings.lessonEditing(lessonEditing);
  if ($$props.lessonToDelete === void 0 && $$bindings.lessonToDelete && lessonToDelete !== void 0)
    $$bindings.lessonToDelete(lessonToDelete);
  if ($$props.openDeleteModal === void 0 && $$bindings.openDeleteModal && openDeleteModal !== void 0)
    $$bindings.openDeleteModal(openDeleteModal);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="m-auto w-full p-3 lg:w-11/12 lg:px-4">${$lessons.length ? each($lessons, (lesson) => {
      return `<div${add_attribute("class", `relative m-auto mb-4 flex max-w-xl items-center rounded-md border-2 border-gray-200 dark:border-neutral-600 p-5 dark:bg-neutral-800`, 0)}> <div class="mr-5">${validate_component(Text, "TextChip").$$render(
        $$result,
        {
          value: getLessonOrder2(lesson.id),
          size: "sm",
          shape: "rounded-full",
          className: "bg-primary-200 text-primary-600 text-xs"
        },
        {},
        {}
      )}</div>  <div class="w-4/5"> ${lessonEditing === lesson.id ? `${validate_component(TextField, "TextField").$$render(
        $$result,
        {
          autoFocus: true,
          className: "max-w-lg",
          errorMessage: errors?.title,
          value: lesson.title
        },
        {
          value: ($$value) => {
            lesson.title = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `<h3 class="m-0 flex items-center text-lg dark:text-white"><a${add_attribute(
        "href",
        $globalStore.isStudent && !lesson.is_unlocked ? $page.url.pathname : `/courses/${$course.id}/lessons/${lesson.id}`,
        0
      )} class="${"font-medium text-black no-underline hover:underline dark:text-white " + escape(
        $globalStore.isStudent && !lesson.is_unlocked ? "cursor-not-allowed" : "",
        true
      )}">${escape(lesson.title)}</a> </h3>`} <div class="mt-2 flex w-4/5 flex-col items-start justify-between lg:flex-row lg:items-center"> <div class="mb-3 flex items-center lg:mb-0">${validate_component(ScreenMap, "ScreenMap").$$render(
        $$result,
        {
          size: 20,
          class: "carbon-icon dark:text-white"
        },
        {},
        {}
      )} <p class="ml-2 text-sm text-gray-500 dark:text-white">${escape(lesson?.totalExercises ? lesson?.totalExercises?.map((c) => c.count) : 0)} ${escape($t("exercises.heading"))} </p></div> </div></div>  <div class="flex flex-row">${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
        default: () => {
          return `${validate_component(OverflowMenu$1, "OverflowMenu").$$render($$result, { size: "xl" }, {}, {
            default: () => {
              return `${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render(
                $$result,
                {
                  text: lesson.is_unlocked ? $t("course.navItem.lessons.add_lesson.lock") : $t("course.navItem.lessons.add_lesson.unlock")
                },
                {},
                {}
              )} ${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render(
                $$result,
                {
                  text: lessonEditing === lesson.id ? $t("course.navItem.lessons.add_lesson.save") : $t("course.navItem.lessons.add_lesson.edit")
                },
                {},
                {}
              )} ${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render(
                $$result,
                {
                  danger: true,
                  text: $t("course.navItem.lessons.add_lesson.delete")
                },
                {},
                {}
              )} `;
            }
          })} `;
        }
      })}</div> </div>`;
    }) : `${validate_component(Box, "Box").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="flex justify-between flex-col items-center w-[90%] md:w-96"><img src="/images/empty-lesson-icon.svg" alt="Lesson" class="my-2.5 mx-auto"> <h2 class="text-xl my-1.5 font-normal">${escape($t("course.navItem.lessons.body_header"))}</h2> <p class="text-sm text-center text-slate-500">${escape($t("course.navItem.lessons.body_content"))} </p></div> `;
      }
    })}`}</section>`;
  } while (!$$settled);
  $$unsubscribe_lessons();
  $$unsubscribe_globalStore();
  $$unsubscribe_page();
  $$unsubscribe_course();
  $$unsubscribe_t();
  return $$rendered;
});
function getLessonOrder(lessons2, id) {
  const index = lessons2.findIndex((lesson) => lesson.id === id);
  if (index < 9) {
    return "0" + (index + 1);
  } else {
    return index + 1;
  }
}
const LessonSectionList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lessonSections, $$unsubscribe_lessonSections;
  let $t, $$unsubscribe_t;
  let $globalStore, $$unsubscribe_globalStore;
  let $page, $$unsubscribe_page;
  let $course, $$unsubscribe_course;
  $$unsubscribe_lessonSections = subscribe(lessonSections, (value) => $lessonSections = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  let { reorder = false } = $$props;
  let { lessonEditing } = $$props;
  let prevTitle;
  let errors;
  let openDeleteModal = false;
  let deletingData = { id: "", isSection: false };
  async function onSave(params, lesson) {
    if (params.sectionId) {
      const section = $lessonSections.find((s) => s.id === params.sectionId);
      if (!section)
        return;
      const validationRes = await handleSaveLessonSection(section, section.course_id);
      if (validationRes && Object.keys(validationRes).length) {
        errors = {
          // @ts-ignore
          title: validationRes?.title
        };
      }
    } else if (lesson) {
      const validationRes = await handleSaveLesson(lesson, lesson.course_id);
      if (validationRes && Object.keys(validationRes).length) {
        errors = {
          // @ts-ignore
          title: validationRes?.title
        };
      }
    }
    if (!errors?.title) {
      resetEdit();
      snackbar.success("snackbar.success_update");
    }
  }
  function deleteLesson() {
    {
      handleDelete(deletingData.id);
    }
  }
  function resetEdit() {
    lessonEditing = void 0;
    prevTitle = void 0;
    errors = {};
  }
  function handleAddLesson(id) {
    handleAddLessonWidget.update(() => ({ open: true, isSection: false, id }));
  }
  if ($$props.reorder === void 0 && $$bindings.reorder && reorder !== void 0)
    $$bindings.reorder(reorder);
  if ($$props.lessonEditing === void 0 && $$bindings.lessonEditing && lessonEditing !== void 0)
    $$bindings.lessonEditing(lessonEditing);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(DeleteLessonConfirmation, "DeleteLessonConfirmation").$$render(
      $$result,
      { deleteLesson, openDeleteModal },
      {
        openDeleteModal: ($$value) => {
          openDeleteModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} <section class="m-auto w-full p-3 lg:w-11/12 lg:px-4">${each($lessonSections, (section) => {
      return `<div class="mb-3 m-auto max-w-xl border-2 border-gray-200 dark:border-neutral-600 dark:bg-neutral-800 rounded-md"><div class="mb-2 px-3 py-1 min-h-[50px] border-b bg-gray-50 dark:bg-neutral-700 rounded-tl-md rounded-tr-md flex justify-between items-center">${lessonEditing === section.id ? `${validate_component(TextField, "TextField").$$render(
        $$result,
        {
          className: "w-4/6",
          errorMessage: errors?.title,
          value: section.title
        },
        {
          value: ($$value) => {
            section.title = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `<p class="w-4/6 font-semibold">${escape(section.title)}</p>`} ${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
        default: () => {
          return `<div class="flex items-center">${lessonEditing === section.id ? `${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              label: $t("course.navItem.lessons.add_lesson.cancel"),
              variant: VARIANTS.OUTLINED,
              onClick: () => {
                section.title = prevTitle ?? section.title;
                resetEdit();
              }
            },
            {},
            {}
          )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              label: $t("course.navItem.lessons.add_lesson.save"),
              onClick: () => onSave({ sectionId: section.id })
            },
            {},
            {}
          )}` : `${validate_component(IconButton, "IconButton").$$render(
            $$result,
            {
              contained: true,
              size: "small",
              onClick: () => handleAddLesson(section.id),
              disabled: !!lessonEditing
            },
            {},
            {
              default: () => {
                return `${validate_component(Add, "Add").$$render($$result, { size: 20 }, {}, {})} `;
              }
            }
          )} ${validate_component(OverflowMenu$1, "OverflowMenu").$$render($$result, { size: "xl", flipped: true }, {}, {
            default: () => {
              return `${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render(
                $$result,
                {
                  text: $t("course.navItem.lessons.add_lesson.edit"),
                  disabled: !!lessonEditing
                },
                {},
                {}
              )} ${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render(
                $$result,
                {
                  danger: true,
                  text: $t("course.navItem.lessons.add_lesson.delete")
                },
                {},
                {}
              )} `;
            }
          })}`}</div> `;
        }
      })}</div> <div class="mx-3 py-1">${section.lessons.length ? each(section.lessons, (lesson) => {
        return `<div class="border max-w-xl border-gray-200 px-3 py-1 min-h-[50px] rounded-md mb-2 flex items-center justify-between">${lessonEditing === lesson.id ? `${validate_component(TextField, "TextField").$$render(
          $$result,
          {
            className: "w-4/6",
            errorMessage: errors?.title,
            value: lesson.title
          },
          {
            value: ($$value) => {
              lesson.title = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : `<div class="w-4/5 flex items-center gap-2">${validate_component(Text, "TextChip").$$render(
          $$result,
          {
            value: getLessonOrder(section.lessons, lesson.id),
            size: "sm",
            shape: "rounded-full",
            className: "bg-primary-200 text-primary-600 text-xs"
          },
          {},
          {}
        )} <div><a${add_attribute(
          "href",
          $globalStore.isStudent && !lesson.is_unlocked ? $page.url.pathname : `/courses/${$course.id}/lessons/${lesson.id}`,
          0
        )} class="${"text-black dark:text-white " + escape(
          $globalStore.isStudent && !lesson.is_unlocked ? "cursor-not-allowed" : "",
          true
        )}" data-sveltekit-preload-data="off">${escape(lesson.title)}</a> <div class="mt-1 mb-3 flex items-center lg:mb-0">${validate_component(ScreenMap, "ScreenMap").$$render(
          $$result,
          {
            size: 16,
            class: "carbon-icon dark:text-white"
          },
          {},
          {}
        )} <p class="ml-2 text-xs text-gray-500 dark:text-white">${escape(lesson?.totalExercises ? lesson?.totalExercises?.map((c) => c.count) : 0)} ${escape($t("exercises.heading"))}</p> </div></div> </div>`} ${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
          default: () => {
            return `<div class="flex items-center gap-1"> ${lessonEditing === lesson.id ? `${validate_component(PrimaryButton, "PrimaryButton").$$render(
              $$result,
              {
                label: $t("course.navItem.lessons.add_lesson.cancel"),
                variant: VARIANTS.OUTLINED,
                onClick: () => {
                  lesson.title = prevTitle ?? lesson.title;
                  resetEdit();
                }
              },
              {},
              {}
            )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
              $$result,
              {
                label: $t("course.navItem.lessons.add_lesson.save"),
                onClick: () => onSave({ lessonId: lesson.id }, lesson)
              },
              {},
              {}
            )}` : `${validate_component(OverflowMenu$1, "OverflowMenu").$$render($$result, { size: "sm", flipped: true }, {}, {
              default: () => {
                return `${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render(
                  $$result,
                  {
                    text: lesson.is_unlocked ? $t("course.navItem.lessons.add_lesson.lock") : $t("course.navItem.lessons.add_lesson.unlock")
                  },
                  {},
                  {}
                )} ${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render(
                  $$result,
                  {
                    text: $t("course.navItem.lessons.add_lesson.edit")
                  },
                  {},
                  {}
                )} ${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render(
                  $$result,
                  {
                    danger: true,
                    text: $t("course.navItem.lessons.add_lesson.delete")
                  },
                  {},
                  {}
                )} `;
              }
            })}`}</div> `;
          }
        })} </div>`;
      }) : `${escape($t("course.navItem.lessons.no_lesson"))}`}</div> </div>`;
    })}</section>`;
  } while (!$$settled);
  $$unsubscribe_lessonSections();
  $$unsubscribe_t();
  $$unsubscribe_globalStore();
  $$unsubscribe_page();
  $$unsubscribe_course();
  return $$rendered;
});
const NewLessonModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $course, $$unsubscribe_course;
  let $handleAddLessonWidget, $$unsubscribe_handleAddLessonWidget;
  let $lessons, $$unsubscribe_lessons;
  let $lessonSections, $$unsubscribe_lessonSections;
  let $t, $$unsubscribe_t;
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  $$unsubscribe_handleAddLessonWidget = subscribe(handleAddLessonWidget, (value) => $handleAddLessonWidget = value);
  $$unsubscribe_lessons = subscribe(lessons, (value) => $lessons = value);
  $$unsubscribe_lessonSections = subscribe(lessonSections, (value) => $lessonSections = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let errors = { title: "" };
  let lesson = {
    id: "",
    course_id: $course.id || "",
    title: "",
    profile: void 0,
    call_url: void 0,
    lesson_at: /* @__PURE__ */ (/* @__PURE__ */ new Date()).toDateString(),
    is_unlocked: true,
    lesson_completion: [],
    created_at: ""
  };
  const handleSave = async () => {
    if (!lesson.title.trim()) {
      errors.title = "title cannot be empty";
      return;
    }
    if ($handleAddLessonWidget.isSection) {
      const savedSection = await handleSaveLessonSection(
        {
          title: lesson.title,
          order: $lessonSections.length
        },
        $course.id
      );
      if (Array.isArray(savedSection) && savedSection[0]) {
        const newLessonSection = savedSection[0];
        lessonSections.update((sections) => {
          return [
            ...sections,
            {
              id: newLessonSection.id,
              title: lesson.title,
              order: newLessonSection.order,
              course_id: newLessonSection.course_id,
              lessons: [],
              created_at: ""
            }
          ];
        });
      }
    } else {
      lesson.section_id = $handleAddLessonWidget.id || void 0;
      const savedLesson = await handleSaveLesson(lesson, $course.id);
      if (Array.isArray(savedLesson) && savedLesson[0]) {
        const newLesson = savedLesson[0];
        lesson.id = newLesson.id;
        set_store_value(lessons, $lessons = [...$lessons, lesson], $lessons);
        lessonSections.update((sections) => sections.map((s) => {
          if (s.id === newLesson.section_id) {
            s.lessons = [...s.lessons, lesson];
          }
          return s;
        }));
        goto("/courses/" + $course.id + "/lessons/" + lesson.id);
      }
    }
    handleClose();
  };
  function handleClose() {
    set_store_value(handleAddLessonWidget, $handleAddLessonWidget.open = false, $handleAddLessonWidget);
    lesson = {
      id: "",
      course_id: $course.id || "",
      title: "",
      profile: void 0,
      call_url: void 0,
      lesson_at: /* @__PURE__ */ (/* @__PURE__ */ new Date()).toDateString(),
      is_unlocked: true,
      lesson_completion: [],
      created_at: ""
    };
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: handleClose,
        width: "w-[80%] md:w-[65%]",
        maxWidth: "max-w-2xl",
        containerClass: "overflow-hidden",
        modalHeading: $t(`course.navItem.lessons.add_lesson.${$handleAddLessonWidget.isSection ? "modal_heading_section" : "modal_heading"}`),
        open: $handleAddLessonWidget.open
      },
      {
        open: ($$value) => {
          $handleAddLessonWidget.open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<form class="relative m-auto py-2 md:py-3 px-2 md:px-5 mb-2 md:mb-4 flex flex-wrap items-center dark:bg-neutral-800"><div class="w-full">${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: $t(`course.navItem.lessons.add_lesson.${$handleAddLessonWidget.isSection ? "lesson_section_title" : "lesson_title"}`),
              autoFocus: true,
              className: "flex-1 min-w-lg max-w-lg",
              isRequired: true,
              errorMessage: errors.title,
              value: lesson.title
            },
            {
              value: ($$value) => {
                lesson.title = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${$course.type == COURSE_TYPE.LIVE_CLASS ? `` : ``}</div></form> <div class="flex flex-row-reverse">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              label: $t("course.navItem.lessons.add_lesson.save"),
              onClick: handleSave
            },
            {},
            {}
          )}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_course();
  $$unsubscribe_handleAddLessonWidget();
  $$unsubscribe_lessons();
  $$unsubscribe_lessonSections();
  $$unsubscribe_t();
  return $$rendered;
});
const ActivateSectionsModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $course, $$unsubscribe_course;
  let $t, $$unsubscribe_t;
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { open = false } = $$props;
  let isActivating = false;
  const activate = async () => {
    isActivating = true;
    const { error } = await supabase.rpc("convert_course_to_v2", { course_id_arg: $course.id });
    if (error) {
      snackbar.error("snackbar.something");
      return;
    }
    window.location.reload();
  };
  function handleClose() {
    open = false;
  }
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: handleClose,
        width: "w-[80%] md:w-[65%]",
        maxWidth: "max-w-xl",
        modalHeading: $t(`course.navItem.lessons.section_prompt.header`),
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
          return `<div class="flex flex-col w-full items-center"><div class="mb-8"><h3 class="text-center text-2xl">${escape($t("course.navItem.lessons.section_prompt.title"))}</h3> <p class="text-center max-w-md">${escape($t("course.navItem.lessons.section_prompt.description"))}</p></div> <div class="flex gap-2">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              variant: VARIANTS.OUTLINED,
              label: $t("course.navItem.lessons.section_prompt.cancel"),
              onClick: handleClose
            },
            {},
            {}
          )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              label: $t("course.navItem.lessons.section_prompt.activate"),
              onClick: activate,
              isLoading: isActivating
            },
            {},
            {}
          )}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_course();
  $$unsubscribe_t();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shouldGoToNextLesson;
  let lessonsLength;
  let $lessonSections, $$unsubscribe_lessonSections;
  let $lessons, $$unsubscribe_lessons;
  let $course, $$unsubscribe_course;
  let $profile, $$unsubscribe_profile;
  let $handleAddLessonWidget, $$unsubscribe_handleAddLessonWidget;
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  $$unsubscribe_lessonSections = subscribe(lessonSections, (value) => $lessonSections = value);
  $$unsubscribe_lessons = subscribe(lessons, (value) => $lessons = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_handleAddLessonWidget = subscribe(handleAddLessonWidget, (value) => $handleAddLessonWidget = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  const query = new URLSearchParams($page.url.search);
  let lessonEditing;
  let lessonToDelete;
  let openDeleteModal = false;
  let isFetching = false;
  let reorder = false;
  let activateSections = false;
  function addLesson() {
    set_store_value(handleAddLessonWidget, $handleAddLessonWidget.open = true, $handleAddLessonWidget);
    set_store_value(handleAddLessonWidget, $handleAddLessonWidget.isSection = $course.version === COURSE_VERSION.V2, $handleAddLessonWidget);
  }
  function hasUserCompletedLesson(completion) {
    return completion?.find((c) => c.profile_id === $profile.id);
  }
  const getLessons = () => {
    if ($course.version === COURSE_VERSION.V1) {
      return $lessons;
    } else {
      const _lessons = [];
      $lessonSections.forEach((section) => {
        _lessons.push(...section.lessons);
      });
      return _lessons;
    }
  };
  function findFirstIncompleteLesson() {
    return getLessons().find((lesson) => !hasUserCompletedLesson(lesson.lesson_completion) && lesson.is_unlocked === true);
  }
  function onNextQuery(lessons2) {
    if (!isFetching && lessons2.length > 0) {
      const incompleteLesson = findFirstIncompleteLesson();
      if (incompleteLesson) {
        goto(`/courses/${data.courseId}/lessons/${incompleteLesson.id}`);
      } else {
        goto(`/courses/${data.courseId}/lessons`);
      }
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    shouldGoToNextLesson = query.get("next") === "true";
    !isFetching && shouldGoToNextLesson && onNextQuery($lessons);
    lessonsLength = $course.version === COURSE_VERSION.V1 ? $lessons.length : $lessonSections.length;
    $$rendered = `${validate_component(NewLessonModal, "NewLessonModal").$$render($$result, {}, {}, {})} ${validate_component(ActivateSectionsModal, "ActivateSectionsModal").$$render(
      $$result,
      { open: activateSections },
      {
        open: ($$value) => {
          activateSections = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(DeleteLessonConfirmation, "DeleteLessonConfirmation").$$render(
      $$result,
      {
        deleteLesson: () => handleDelete(lessonToDelete?.id),
        openDeleteModal
      },
      {
        openDeleteModal: ($$value) => {
          openDeleteModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(CourseContainer, "CourseContainer").$$render(
      $$result,
      { isFetching, courseId: data.courseId },
      {
        isFetching: ($$value) => {
          isFetching = $$value;
          $$settled = false;
        },
        courseId: ($$value) => {
          data.courseId = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(PageNav, "PageNav").$$render(
            $$result,
            {
              title: $t("course.navItem.lessons.heading_v2")
            },
            {},
            {
              widget: () => {
                return `<div slot="widget" class="flex w-full justify-end gap-2">${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
                  default: () => {
                    return `${$course.version === COURSE_VERSION.V1 ? `${validate_component(PrimaryButton, "PrimaryButton").$$render(
                      $$result,
                      {
                        label: $t(`course.navItem.lessons.section_prompt.cta`),
                        variant: VARIANTS.OUTLINED,
                        onClick: () => activateSections = !activateSections,
                        isDisabled: !!lessonEditing
                      },
                      {},
                      {}
                    )}` : ``} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
                      $$result,
                      {
                        label: $t(`course.navItem.lessons.add_lesson.${reorder ? "end_reorder" : "start_reorder"}`),
                        variant: VARIANTS.OUTLINED,
                        onClick: () => reorder = !reorder,
                        isDisabled: !!lessonEditing
                      },
                      {},
                      {}
                    )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
                      $$result,
                      {
                        label: $t("course.navItem.lessons.add_lesson.button_title"),
                        onClick: addLesson,
                        isDisabled: !!lessonEditing
                      },
                      {},
                      {}
                    )}`;
                  }
                })}</div>`;
              }
            }
          )} ${validate_component(PageBody, "PageBody").$$render($$result, { width: "max-w-6xl", padding: "p-0" }, {}, {
            default: () => {
              return `${shouldGoToNextLesson ? `${validate_component(Box, "Box").$$render(
                $$result,
                {
                  className: "w-full lg:w-11/12 lg:px-4 m-auto"
                },
                {},
                {
                  default: () => {
                    return `<div class="flex flex-col items-center justify-between"><img src="/images/empty-lesson-icon.svg" alt="Lesson" class="mx-auto my-2.5"> <h2 class="my-1.5 text-xl font-normal">${escape($t("course.navItem.lessons.no_lesson"))}</h2> <p class="text-center text-sm text-slate-500">${escape($t("course.navItem.lessons.share_your_knowledge"))}</p></div>`;
                  }
                }
              )}` : `${lessonsLength > 0 ? `${reorder ? `<p class="text-gray-400 text-center dark:text-white italic text-xs">${escape($t("course.navItem.lessons.drag"))}</p>` : ``} ${$course.version === COURSE_VERSION.V1 ? `${validate_component(LessonList, "LessonList").$$render(
                $$result,
                {
                  reorder,
                  lessonEditing,
                  lessonToDelete,
                  openDeleteModal
                },
                {
                  lessonToDelete: ($$value) => {
                    lessonToDelete = $$value;
                    $$settled = false;
                  },
                  openDeleteModal: ($$value) => {
                    openDeleteModal = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : `${$course.version === COURSE_VERSION.V2 ? `${validate_component(LessonSectionList, "LessonSectionList").$$render($$result, { reorder, lessonEditing }, {}, {})}` : ``}`}` : `${validate_component(Box, "Box").$$render(
                $$result,
                {
                  className: "w-full lg:w-11/12 lg:px-4 m-auto"
                },
                {},
                {
                  default: () => {
                    return `<div class="flex justify-between flex-col items-center"><img src="/images/empty-lesson-icon.svg" alt="Lesson" class="my-2.5 mx-auto"> <h2 class="text-xl my-1.5 font-normal">${escape($t("course.navItem.lessons.body_header"))}</h2> <p class="text-sm text-center text-slate-500">${escape($t("course.navItem.lessons.body_content"))}</p></div>`;
                  }
                }
              )}`}`}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_lessonSections();
  $$unsubscribe_lessons();
  $$unsubscribe_course();
  $$unsubscribe_profile();
  $$unsubscribe_handleAddLessonWidget();
  $$unsubscribe_page();
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-688e3271.js.map
