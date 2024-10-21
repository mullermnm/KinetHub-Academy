import { s as subscribe, e as set_store_value } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape, v as validate_component, b as each } from './ssr-10c5b872.js';
import { p as profile } from './user-e923b6d4.js';
import { t as fetchCourses } from './index18-b03e5e10.js';
import { C as Courses } from './index31-c26626f1.js';
import { p as page } from './stores-793c1e19.js';
import { V as VARIANTS, P as PrimaryButton } from './index11-4ef8d5a0.js';
import { M as Modal } from './index8-59a07edf.js';
import { C as CheckmarkFilled } from './CheckmarkFilled-36899326.js';
import { C as CheckmarkOutline } from './CheckmarkOutline-377cf09c.js';
import { T as TextField } from './TextField-86164973.js';
import { T as TextArea } from './TextArea-9e2a2a4d.js';
import { a as courses, c as courseMetaDeta, e as createCourseModal } from './store5-4ab63ff0.js';
import './_sentry-release-injection-file-6be6a010.js';
import './config-8c22ba68.js';
import { c as currentOrg, f as currentOrgPath, i as isOrgAdmin } from './org-8fc26a61.js';
import { g as goto } from './navigation-cd282f65.js';
import 'posthog-js';
import { t as t2 } from './translations-90190f83.js';
import { C as COURSE_TYPE } from './index15-c5761f1e.js';
import { C as ComingSoon } from './index20-d8ae68df.js';
import { A as Add } from './Add-78ef4d23.js';
import { G as Grid } from './Grid-88d3c6f5.js';
import { L as List } from './List-6bb638c9.js';
import { i as isMobile } from './useMobile-47eebf4e.js';
import { I as IconButton } from './index9-eea8802c.js';
import { S as Search$1 } from './Search-b1d61a12.js';
import { D as Dropdown$1 } from './Dropdown-08db662d.js';
import './index2-aea858a5.js';
import './supabase-cbc58bc2.js';
import '@supabase/supabase-js';
import './index17-3166eaf0.js';
import './index16-68b7dc8d.js';
import './SkeletonPlaceholder-be3b5db2.js';
import './SkeletonText-d2851876.js';
import './getCurrencyFormatter-56d8d145.js';
import './RadioButtonChecked-49b8cfed.js';
import './course-a9172902.js';
import './CaretRight-a9e49169.js';
import './ImageLoader-d6ed26af.js';
import './Tag-37c50bfd.js';
import './Close-73e0af44.js';
import './StructuredListRow-3dfbce79.js';
import './OverflowMenuItem-10e1618e.js';
import './CoursesEmptyIcon-3e8d3605.js';
import './app-d638cf5d.js';
import './Popover-a92462a3.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import './WarningAltFilled-13a554ec.js';
import './ListBoxMenuItem-e6ef2add.js';
import './ChevronDown-d5b93e8c.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "93424222-b47c-4f3f-81d9-27338ab1e0e0", e._sentryDebugIdIdentifier = "sentry-dbid-93424222-b47c-4f3f-81d9-27338ab1e0e0");
  } catch (e2) {
  }
}();
const NewCourseModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open;
  let $page, $$unsubscribe_page;
  let $$unsubscribe_profile;
  let $$unsubscribe_currentOrg;
  let $createCourseModal, $$unsubscribe_createCourseModal;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_profile = subscribe(profile, (value) => value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => value);
  $$unsubscribe_createCourseModal = subscribe(createCourseModal, (value) => $createCourseModal = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let isLoading = false;
  let errors = { title: "", description: "" };
  let step = 0;
  const options = [
    {
      title: "Live Class",
      subtitle: "This course type is ideal for bootcamps where lessons are time based and you need attendance and grading",
      type: COURSE_TYPE.LIVE_CLASS,
      isDisabled: false
    },
    {
      title: "Self Paced",
      subtitle: "This course type is ideal for courses where students can take lessons on their own pace without a teacher",
      type: COURSE_TYPE.SELF_PACED,
      isDisabled: false
    }
  ];
  let type = options[0].type;
  function onClose(redirectTo) {
    goto(redirectTo);
    createCourseModal.update(() => ({
      title: "",
      description: "",
      type: "",
      emails: "",
      tutors: "",
      students: ""
    }));
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    open = new URLSearchParams($page.url.search).get("create") === "true";
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-wptplf_START -->${$$result.title = `<title>Create a new course</title>`, ""}<!-- HEAD_svelte-wptplf_END -->`, ""} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: () => onClose($page.url.pathname),
        width: "w-4/5 md:w-2/5 md:min-w-[600px]",
        modalHeading: $t("courses.new_course_modal.heading"),
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
          return `${step === 0 ? `<div><h2 class="text-xl font-medium my-5">${escape($t("courses.new_course_modal.type_selector_title"))}</h2> <div class="flex flex-col md:flex-row gap-2 justify-between items-center my-8">${each(options, (option) => {
            return `<button class="${"w-11/12 md:w-[261px] md:h-[240px] p-5 rounded-md dark:bg-neutral-700 border-2 " + escape(
              option.type === type ? "border-primary-400" : `border-gray-200 dark:border-neutral-600 ${!option.isDisabled && "hover:scale-95"}`,
              true
            ) + " flex flex-col " + escape(option.isDisabled && "cursor-not-allowed opacity-60", true) + " transition-all ease-in-out"}" type="button"><div class="w-full flex flex-row-reverse h-[70%]">${option.type === type ? `${validate_component(CheckmarkFilled, "CheckmarkFilledIcon").$$render(
              $$result,
              {
                size: 16,
                class: "carbon-icon text-primary-600 dark:text-primary-200"
              },
              {},
              {}
            )}` : `${!option.isDisabled ? `${validate_component(CheckmarkOutline, "CheckmarkOutlineIcon").$$render($$result, { size: 16, class: "carbon-icon" }, {}, {})}` : ``}`}</div> <div><p class="font-bold text-start flex items-center"><span class="mr-2 text-sm">${escape(option.title)}</span> ${option.isDisabled ? `${validate_component(ComingSoon, "ComingSoon").$$render($$result, {}, {}, {})}` : ``}</p> <p class="text-xs font-light text-start">${escape(option.subtitle)}</p></div> </button>`;
          })}</div> <div class="mt-8 flex items-center flex-row-reverse">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              label: $t("courses.new_course_modal.next"),
              onClick: () => step = 1,
              isDisabled: !type
            },
            {},
            {}
          )}</div></div>` : `<form><div class="flex items-end space-x-2 mb-4">${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: $t("courses.new_course_modal.course_name"),
              placeholder: $t("courses.new_course_modal.course_name_placeholder"),
              className: "w-full ",
              isRequired: true,
              errorMessage: errors.title,
              autoComplete: false,
              value: $createCourseModal.title
            },
            {
              value: ($$value) => {
                $createCourseModal.title = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div> ${validate_component(TextArea, "TextArea").$$render(
            $$result,
            {
              label: $t("courses.new_course_modal.short_description"),
              rows: 4,
              placeholder: $t("courses.new_course_modal.short_description_placeholder"),
              className: "mb-4",
              isRequired: true,
              errorMessage: errors.description,
              isAIEnabled: true,
              initAIPrompt: "Write a 30 word description for a course titled: " + $createCourseModal.title,
              value: $createCourseModal.description
            },
            {
              value: ($$value) => {
                $createCourseModal.description = $$value;
                $$settled = false;
              }
            },
            {}
          )} <div class="mt-5 flex items-center justify-between">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              label: $t("courses.new_course_modal.back"),
              variant: VARIANTS.OUTLINED,
              onClick: () => step = 0
            },
            {},
            {}
          )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              label: $t("courses.new_course_modal.button"),
              type: "submit",
              isDisabled: isLoading,
              isLoading
            },
            {},
            {}
          )}</div></form>`}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_profile();
  $$unsubscribe_currentOrg();
  $$unsubscribe_createCourseModal();
  $$unsubscribe_t();
  return $$rendered;
});
const css = {
  code: ".filter-containter.svelte-rmrddk .bx--dropdown{max-height:unset;height:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrg, $$unsubscribe_currentOrg;
  let $profile, $$unsubscribe_profile;
  let $courses, $$unsubscribe_courses;
  let $courseMetaDeta, $$unsubscribe_courseMetaDeta;
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  let $t, $$unsubscribe_t;
  let $isMobile, $$unsubscribe_isMobile;
  let $isOrgAdmin, $$unsubscribe_isOrgAdmin;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_courses = subscribe(courses, (value) => $courses = value);
  $$unsubscribe_courseMetaDeta = subscribe(courseMetaDeta, (value) => $courseMetaDeta = value);
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_isOrgAdmin = subscribe(isOrgAdmin, (value) => $isOrgAdmin = value);
  let { data } = $$props;
  let { cantFetch } = data;
  let searchValue = "";
  let selectedId;
  let filteredCourses;
  let hasFetched = false;
  async function getCourses(userId, orgId) {
    if (cantFetch && typeof cantFetch === "boolean" && orgId && !hasFetched) {
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
  }
  function filterCourses(searchValue2, _selectedId, courses2) {
    filteredCourses = courses2.filter((course) => {
      if (!searchValue2 || course.title.toLowerCase().includes(searchValue2.toLowerCase())) {
        return true;
      }
      return false;
    });
    if (_selectedId === "0") {
      filteredCourses = filteredCourses.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
    } else if (_selectedId === "1") {
      filteredCourses = filteredCourses.sort((a, b) => b.is_published - a.is_published);
    } else if (_selectedId === "2") {
      filteredCourses = filteredCourses.sort((a, b) => b.total_lessons - a.total_lessons);
    }
  }
  const setViewPreference = (preference) => {
    set_store_value(courseMetaDeta, $courseMetaDeta.view = preference, $courseMetaDeta);
    localStorage.setItem("courseView", preference);
  };
  const openNewCourseModal = () => {
    goto($currentOrgPath + "/courses?create=true");
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      filterCourses(searchValue, selectedId, $courses);
    }
    {
      getCourses($profile.id, $currentOrg.id);
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-a5wz2b_START -->${$$result.title = `<title>Courses - KinetsHub</title>`, ""}<!-- HEAD_svelte-a5wz2b_END -->`, ""} <section class="w-full md:max-w-6xl md:mx-auto"><div class="py-2 md:py-10 px-2 md:px-5"><div class="flex items-center justify-between mb-5"><h1 class="dark:text-white text-2xl md:text-3xl font-bold">${escape($t("courses.heading"))}</h1> ${$isMobile ? `${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        isDisabled: !$isOrgAdmin,
        onClick: openNewCourseModal
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
        label: $t("courses.heading_button"),
        variant: VARIANTS.CONTAINED_DARK,
        isDisabled: !$isOrgAdmin,
        onClick: openNewCourseModal
      },
      {},
      {}
    )}`}</div> <div class="flex flex-row-reverse mb-5"><div class="filter-containter flex items-end justify-start svelte-rmrddk">${validate_component(Search$1, "Search").$$render(
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
        class: "h-full min-w-[150px]",
        items: [
          {
            id: "0",
            text: $t("courses.course_filter.date_created")
          },
          {
            id: "1",
            text: $t("courses.course_filter.published")
          },
          {
            id: "2",
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
    })}`}</div></div> ${validate_component(NewCourseModal, "NewCourseModal").$$render($$result, {}, {}, {})} ${validate_component(Courses, "Courses").$$render(
      $$result,
      { courses: filteredCourses },
      {
        courses: ($$value) => {
          filteredCourses = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> </section>`;
  } while (!$$settled);
  $$unsubscribe_currentOrg();
  $$unsubscribe_profile();
  $$unsubscribe_courses();
  $$unsubscribe_courseMetaDeta();
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_t();
  $$unsubscribe_isMobile();
  $$unsubscribe_isOrgAdmin();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a26c88fc.js.map
