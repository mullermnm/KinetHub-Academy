import { s as subscribe, d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, o as onDestroy, v as validate_component, e as escape, a as add_attribute, b as each, d as spread, h as escape_attribute_value, f as escape_object, g as createEventDispatcher, i as add_classes } from './ssr-10c5b872.js';
import get from 'lodash/get.js';
import pluralize from 'pluralize';
import { p as page } from './stores-793c1e19.js';
import { g as getLectureNo, C as ChevronDown } from './function-efda068b.js';
import { c as currentOrg, e as currentOrgDomain, R as ROLE } from './org-8fc26a61.js';
import { c as course } from './store4-ef39175f.js';
import { t as t2 } from './translations-90190f83.js';
import { c as calDateDiff } from './date-30c46a0e.js';
import { h as handleOpenWidget, r as reviewsModalStore, U as UploadWidget } from './index22-747425c4.js';
import { P as PrimaryButton, V as VARIANTS, L as Loading$1 } from './index11-4ef8d5a0.js';
import { a as COURSE_VERSION } from './index15-c5761f1e.js';
import { C as Chip } from './index12-9c021b5e.js';
import { M as Modal } from './index8-59a07edf.js';
import { A as Avatar } from './index10-b2b97ef7.js';
import { g as getCurrencyFormatter } from './getCurrencyFormatter-56d8d145.js';
import { c as calcCourseDiscount, g as getStudentInviteLink, i as isCourseFree } from './course-a9172902.js';
import { g as goto } from './navigation-cd282f65.js';
import { H as HTMLRender } from './HTMLRender-9a6e04f8.js';
import { T as TextField } from './TextField-86164973.js';
import './validator-27ec1d5c.js';
import './config-8c22ba68.js';
import './_sentry-release-injection-file-6be6a010.js';
import { c as capturePosthogEvent } from './index23-8c8bac96.js';
import { P as PoweredBy } from './PoweredBy-58475ea5.js';
import { g as getEmbedId } from './formatYoutubeVideo-86462462.js';
import { I as ImageLoader$1 } from './ImageLoader-d6ed26af.js';
import { E as ErrorFilled$1, C as CheckmarkFilled$1 } from './ErrorFilled-1371f254.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4aa25a01-6ae3-40af-9ac3-8a31353d944e", e._sentryDebugIdIdentifier = "sentry-dbid-4aa25a01-6ae3-40af-9ac3-8a31353d944e");
  } catch (e2) {
  }
}();
const InlineLoading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["status", "description", "iconDescription", "successDelay"]);
  let { status = "active" } = $$props;
  let { description = void 0 } = $$props;
  let { iconDescription = void 0 } = $$props;
  let { successDelay = 1500 } = $$props;
  createEventDispatcher();
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.successDelay === void 0 && $$bindings.successDelay && successDelay !== void 0)
    $$bindings.successDelay(successDelay);
  return `  <div${spread([{ "aria-live": "assertive" }, escape_object($$restProps)], {
    classes: "bx--inline-loading"
  })}><div${add_classes("bx--inline-loading__animation".trim())}>${status === "error" ? `${validate_component(ErrorFilled$1, "ErrorFilled").$$render(
    $$result,
    {
      class: "bx--inline-loading--error",
      title: iconDescription || status
    },
    {},
    {}
  )}` : `${status === "finished" ? `${validate_component(CheckmarkFilled$1, "CheckmarkFilled").$$render(
    $$result,
    {
      class: "bx--inline-loading__checkmark-container",
      title: iconDescription || status
    },
    {},
    {}
  )}` : `${status === "inactive" || status === "active" ? `${validate_component(Loading$1, "Loading").$$render(
    $$result,
    {
      small: true,
      description: iconDescription,
      withOverlay: false,
      active: status === "active"
    },
    {},
    {}
  )}` : ``}`}`}</div> ${description ? `<div${add_classes("bx--inline-loading__text".trim())}>${escape(description)}</div>` : ``}</div>`;
});
const InlineLoading$1 = InlineLoading;
const PlayFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path fill="none" d="M11,23a1,1,0,0,1-1-1V10a1,1,0,0,1,1.4473-.8945l12,6a1,1,0,0,1,0,1.789l-12,6A1.001,1.001,0,0,1,11,23Z"></path><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm7.4473,14.8945-12,6A1,1,0,0,1,10,22V10a1,1,0,0,1,1.4473-.8945l12,6a1,1,0,0,1,0,1.789Z"></path></svg>`;
});
const PaymentModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { paymentLink = "" } = $$props;
  let { teacherEmail = "" } = $$props;
  let { courseName = "" } = $$props;
  let fields = { fullname: "", email: "" };
  let errors = { fullname: "", email: "" };
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.paymentLink === void 0 && $$bindings.paymentLink && paymentLink !== void 0)
    $$bindings.paymentLink(paymentLink);
  if ($$props.teacherEmail === void 0 && $$bindings.teacherEmail && teacherEmail !== void 0)
    $$bindings.teacherEmail(teacherEmail);
  if ($$props.courseName === void 0 && $$bindings.courseName && courseName !== void 0)
    $$bindings.courseName(courseName);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: () => open = false,
        width: "w-96",
        modalHeading: "Process course payment",
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
          return `${`<form>${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: "Your Fullname",
              autoFocus: true,
              placeholder: "John Doe",
              className: "mb-4",
              isRequired: true,
              autoComplete: false,
              errorMessage: errors.fullname,
              value: fields.fullname
            },
            {
              value: ($$value) => {
                fields.fullname = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: "Your Email",
              placeholder: "johndoe@email.com",
              className: "mb-4",
              isRequired: true,
              autoComplete: false,
              errorMessage: errors.email,
              value: fields.email
            },
            {
              value: ($$value) => {
                fields.email = $$value;
                $$settled = false;
              }
            },
            {}
          )} <div class="mt-5 flex items-center flex-row-reverse">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              label: paymentLink ? "Next" : "Finish",
              type: "submit"
            },
            {},
            {}
          )}</div></form>`}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css$1 = {
  code: '.banner.svelte-1637xmd{background-color:#040f2d;min-height:472px}.author.svelte-1637xmd{color:#7888b7}.banner-image.svelte-1637xmd{max-width:559px}.backdrop.svelte-1637xmd{background-color:rgba(0, 0, 0, 0.5)}.active.svelte-1637xmd{position:relative;display:inline-block}.active.svelte-1637xmd::after{position:absolute;content:"";width:100%;height:3px;background-color:var(--main-primary-color);display:block;bottom:-14px;left:0px}.price-container.svelte-1637xmd{width:90%;max-width:405px;height:-moz-fit-content;height:fit-content}@media screen and (min-width: 768px){.price-container.svelte-1637xmd{width:50%;height:-moz-fit-content;height:fit-content}}@media screen and (min-width: 1024px){.price-container.svelte-1637xmd{width:350px;min-width:250px}}@media screen and (min-width: 1280px){.price-container.svelte-1637xmd{width:405px;min-width:330px;height:-moz-fit-content;height:fit-content}}.course-content.svelte-1637xmd{max-width:608px}.list ul li{margin-left:1rem;list-style-type:disc}.plyr{width:100% !important}',
  map: null
};
const PricingSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrgDomain, $$unsubscribe_currentOrgDomain;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentOrgDomain = subscribe(currentOrgDomain, (value) => $currentOrgDomain = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { className = "" } = $$props;
  let { editMode = false } = $$props;
  let { courseData } = $$props;
  let { startCoursePayment = false } = $$props;
  let { mobile = false } = $$props;
  let openModal = false;
  let calculatedCost = 0;
  let discount = 0;
  let formatter;
  let isFree = false;
  function handleJoinCourse() {
    if (editMode)
      return;
    capturePosthogEvent("join_course", {
      course_id: courseData.id,
      course_title: courseData.title,
      course_cost: courseData.cost,
      course_free: isFree
    });
    if (isFree) {
      const link = getStudentInviteLink(courseData, $currentOrg.siteName, $currentOrgDomain);
      goto(link);
    } else {
      openModal = true;
    }
    startCoursePayment = false;
  }
  function setFormatter(currency) {
    if (!currency)
      return;
    formatter = getCurrencyFormatter(currency);
  }
  function getTeacherEmail(group) {
    const firstTutor = group?.members?.find((m) => m.role_id === ROLE.TUTOR);
    return firstTutor?.profile?.email || "";
  }
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.editMode === void 0 && $$bindings.editMode && editMode !== void 0)
    $$bindings.editMode(editMode);
  if ($$props.courseData === void 0 && $$bindings.courseData && courseData !== void 0)
    $$bindings.courseData(courseData);
  if ($$props.startCoursePayment === void 0 && $$bindings.startCoursePayment && startCoursePayment !== void 0)
    $$bindings.startCoursePayment(startCoursePayment);
  if ($$props.mobile === void 0 && $$bindings.mobile && mobile !== void 0)
    $$bindings.mobile(mobile);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      setFormatter(courseData.currency);
    }
    discount = get(courseData, "metadata.discount", 0);
    calculatedCost = calcCourseDiscount(discount, courseData.cost || 0, !!courseData.metadata.showDiscount);
    isFree = isCourseFree(calculatedCost);
    startCoursePayment && handleJoinCourse();
    $$rendered = `${validate_component(PaymentModal, "PaymentModal").$$render(
      $$result,
      {
        paymentLink: get(courseData, "metadata.paymentLink", ""),
        courseName: courseData.title,
        teacherEmail: getTeacherEmail(courseData.group),
        open: openModal
      },
      {
        open: ($$value) => {
          openModal = $$value;
          $$settled = false;
        }
      },
      {}
    )}  ${mobile ? `<div class="sticky w-full flex items-center justify-center transition duration-300 h-fit bottom-0 lg:hidden bg-gray-50 dark:bg-neutral-800"><aside class="${"price-container sticky lg:hidden " + escape(editMode ? "lg:bottom-2" : "lg:top-10", true) + " lg:shadow-2xl lg:rounded-lg m-h-fit bg-gray-50 dark:bg-neutral-800 z-0 " + escape(className, true) + " svelte-1637xmd"}"><div class="flex items-center justify-center gap-3 px-3 py-3"> <div class="text-center">${courseData?.metadata?.allowNewStudent ? `<p class="dark:text-white font-medium text-sm flex items-center gap-1">${escape(formatter?.format(calculatedCost) || calculatedCost)} ${isFree ? `<span class="text-xs">(${escape($t("course.navItem.landing_page.pricing_section.free"))})</span>` : ``}</p> ${courseData?.metadata?.showDiscount ? `<p class="dark:text-white font-light text-sm text-gray-500">${escape(discount)}% ${escape($t("course.navItem.landing_page.pricing_section.discount"))}.
                <span class="line-through">${escape(formatter?.format(courseData?.cost || 0) || courseData.cost)}</span></p>` : ``}` : `<p class="dark:text-white text-lg">${escape($t("course.navItem.landing_page.pricing_section.not_accepting"))}</p>`}</div>  <div class="flex flex-col w-full h-full items-center">${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: isFree ? $t("course.navItem.landing_page.pricing_section.enroll") : $t("course.navItem.landing_page.pricing_section.buy"),
        className: "w-full sm:w-full h-[40px]",
        onClick: handleJoinCourse,
        isDisabled: !courseData.metadata.allowNewStudent
      },
      {},
      {}
    )}</div></div></aside></div>` : `<aside class="${"price-container lg:sticky " + escape(editMode ? "lg:top-0" : "lg:top-10", true) + " lg:shadow-2xl lg:rounded-lg m-h-fit dark:bg-neutral-800 " + escape(className, true) + " svelte-1637xmd"}"><div class="p-2 lg:p-10"> <div class="mb-6">${courseData?.metadata?.allowNewStudent ? `<p class="dark:text-white font-medium text-lg">${escape(formatter?.format(calculatedCost) || calculatedCost)} ${isFree ? `<span class="text-sm">(${escape($t("course.navItem.landing_page.pricing_section.free"))})</span>` : ``}</p> ${courseData?.metadata?.showDiscount ? `<p class="dark:text-white font-light text-sm text-gray-500">${escape(discount)}% ${escape($t("course.navItem.landing_page.pricing_section.discount"))}.
              <span class="line-through">${escape(formatter?.format(courseData?.cost || 0) || courseData.cost)}</span></p>` : ``}` : `<p class="dark:text-white text-lg">${escape($t("course.navItem.landing_page.pricing_section.not_accepting"))}</p>`}</div>  <div class="flex flex-col w-full items-center">${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: isFree ? $t("course.navItem.landing_page.pricing_section.enroll") : $t("course.navItem.landing_page.pricing_section.buy"),
        className: "w-full sm:w-full py-3 mb-3",
        onClick: handleJoinCourse,
        isDisabled: !courseData.metadata.allowNewStudent
      },
      {},
      {}
    )} ${courseData?.metadata?.showDiscount && courseData.metadata.allowNewStudent ? `<p class="dark:text-white font-light text-sm text-gray-500">${escape($t("course.navItem.landing_page.pricing_section.bird"))}</p>` : ``}</div></div>  ${courseData?.metadata?.reward?.show ? `<div class="p-10 flex items-center flex-col border-t border-b border-gray-300">${validate_component(HTMLRender, "HtmlRender").$$render(
      $$result,
      {
        content: get(courseData, "metadata.reward.description", "")
      },
      {},
      {}
    )}</div>` : ``}</aside>`}`;
  } while (!$$settled);
  $$unsubscribe_currentOrgDomain();
  $$unsubscribe_currentOrg();
  $$unsubscribe_t();
  return $$rendered;
});
const SectionsDisplay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { title } = $$props;
  let { lessonCount } = $$props;
  let { exerciseCount } = $$props;
  let { lessons } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.lessonCount === void 0 && $$bindings.lessonCount && lessonCount !== void 0)
    $$bindings.lessonCount(lessonCount);
  if ($$props.exerciseCount === void 0 && $$bindings.exerciseCount && exerciseCount !== void 0)
    $$bindings.exerciseCount(exerciseCount);
  if ($$props.lessons === void 0 && $$bindings.lessons && lessons !== void 0)
    $$bindings.lessons(lessons);
  $$unsubscribe_t();
  return `<div class="w-full rounded-md my-3"> <button class="py-3 pl-3 pr-4 bg-[#F7F7F7] dark:bg-neutral-700 text-sm font-medium flex items-center justify-between w-full"><span class="flex items-center gap-2">${`${validate_component(ChevronDown, "ChevronDown").$$render($$result, {}, {}, {})}`} ${escape(title)}</span> <span class="text-xs font-normal">${escape(pluralize($t("course.navItem.landing_page.lessons"), lessonCount, true))},
      ${escape(pluralize($t("course.navItem.landing_page.exercises"), exerciseCount, true))}</span></button> ${``}</div>`;
});
const NAV_ITEM_KEY = {
  HEADER: "header",
  REQUIREMENT: "#requirement",
  DESCRIPTION: "#description",
  GOALS: "#goals",
  CERTIFICATE: "#certificate",
  LESSONS: "#lessons",
  REVIEWS: "#reviews",
  INSTRUCTOR: "#instructor"
};
const NAV_ITEMS = [
  {
    key: NAV_ITEM_KEY.REQUIREMENT,
    label: "course.navItem.landing_page.editor.title.requirement"
  },
  {
    key: NAV_ITEM_KEY.DESCRIPTION,
    label: "course.navItem.landing_page.editor.title.description"
  },
  {
    key: NAV_ITEM_KEY.GOALS,
    label: "course.navItem.landing_page.editor.title.goals"
  },
  {
    key: NAV_ITEM_KEY.CERTIFICATE,
    label: "course.navItem.landing_page.editor.title.certificate"
  },
  {
    key: NAV_ITEM_KEY.LESSONS,
    label: "course.navItems.nav_content"
  },
  {
    key: NAV_ITEM_KEY.REVIEWS,
    label: "course.navItem.landing_page.editor.title.reviews"
  },
  {
    key: NAV_ITEM_KEY.INSTRUCTOR,
    label: "course.navItem.landing_page.editor.title.instructor"
  }
];
function getExerciseCount(lessons) {
  return lessons.reduce((total, lesson) => total + (lesson.totalExercises?.[0]?.count || 0), 0);
}
function getLessonSections(data) {
  const sections = data?.lesson_section?.map((section) => {
    return {
      ...section,
      lessons: data.lessons.filter((lesson) => lesson.section_id === section.id)
    };
  }) || [];
  return sections || [];
}
function getTotalLessons(sections) {
  return sections.reduce((total, section) => {
    return total + section.lessons.length;
  }, 0);
}
function filterNavItems(course2, reviews) {
  const rules = get(course2, "metadata.sectionDisplay", {});
  return NAV_ITEMS.filter((item) => {
    const key = item.key;
    if (typeof rules[key] === "boolean") {
      return !!rules[key];
    }
    if (key === NAV_ITEM_KEY.REVIEWS) {
      return reviews.length > 0;
    }
    return true;
  });
}
const css = {
  code: '.banner.svelte-1ffao03{background-color:#040f2d;min-height:472px}.author.svelte-1ffao03{color:#7888b7}.banner-image.svelte-1ffao03{max-width:559px}.backdrop.svelte-1ffao03{background-color:rgba(0, 0, 0, 0.5)}.certificate-img{width:unset !important}.active.svelte-1ffao03{position:relative;display:inline-block}.active.svelte-1ffao03::after{position:absolute;content:"";width:100%;height:3px;background-color:var(--main-primary-color);display:block;bottom:-14px;left:0px}.price-container.svelte-1ffao03{width:405px;min-width:330px;height:-moz-fit-content;height:fit-content;position:sticky;top:0}.course-content.svelte-1ffao03{max-width:608px;min-width:60%}nav.svelte-1ffao03{overflow:auto;margin:0;overflow-y:hidden;width:100%}.list ul li{margin-left:1rem;list-style-type:disc}.plyr{width:100% !important}.read-more-content.svelte-1ffao03{max-height:100px;overflow:hidden;transition:max-height 0.3s ease;text-overflow:ellipsis}.read-more-button.svelte-1ffao03{cursor:pointer;color:blue;text-decoration:underline}.lesson-section.svelte-1ffao03:not(:last-child){border-bottom:1px solid #f7f7f7}@media screen and (max-width: 1023px){.course-content.svelte-1ffao03{min-width:80%}}',
  map: null
};
const CourseLandingPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let allowNewStudent;
  let bannerImage;
  let navItems;
  let navItemKeys;
  let $t, $$unsubscribe_t;
  let $handleOpenWidget, $$unsubscribe_handleOpenWidget;
  let $course, $$unsubscribe_course;
  let $page, $$unsubscribe_page;
  let $reviewsModalStore, $$unsubscribe_reviewsModalStore;
  let $currentOrg, $$unsubscribe_currentOrg;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_handleOpenWidget = subscribe(handleOpenWidget, (value) => $handleOpenWidget = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_reviewsModalStore = subscribe(reviewsModalStore, (value) => $reviewsModalStore = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  let { editMode = false } = $$props;
  let { courseData } = $$props;
  const ratingsImg = [
    "/images/rating-1.svg",
    "/images/rating-2.svg",
    "/images/rating-3.svg",
    "/images/rating-4.svg",
    "/images/rating-5.svg"
  ];
  let lessons = [];
  let reviews = [];
  let player;
  let averageRating = 0;
  let totalRatings = 0;
  let startCoursePayment = false;
  let certificate = {
    templateUrl: "/images/certificate-template.svg"
  };
  let expandDescription = Array(reviews.length).fill(false);
  let activeNav = NAV_ITEMS[0].key;
  let instructor = {};
  let video;
  const lessonSections = getLessonSections(courseData);
  const totalLessons = getTotalLessons(lessonSections);
  onDestroy(() => {
  });
  if ($$props.editMode === void 0 && $$bindings.editMode && editMode !== void 0)
    $$bindings.editMode(editMode);
  if ($$props.courseData === void 0 && $$bindings.courseData && courseData !== void 0)
    $$bindings.courseData(courseData);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    video = get(courseData, "metadata.videoUrl");
    allowNewStudent = get(courseData, "metadata.allowNewStudent");
    bannerImage = get(courseData, "logo");
    lessons = get(courseData, "lessons", []).sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    instructor = get(courseData, "metadata.instructor") || {};
    certificate = get(courseData, "metadata.certificate", certificate);
    {
      {
        reviews = get(courseData, "metadata.reviews") || [];
        totalRatings = reviews?.reduce((acc = 0, review) => acc + (review?.rating || 0), 0);
        averageRating = totalRatings / reviews?.length;
      }
    }
    navItems = filterNavItems(courseData, reviews);
    navItemKeys = navItems.map((item) => item.key);
    $$rendered = `${!editMode ? `${validate_component(PoweredBy, "PoweredBy").$$render($$result, {}, {}, {})}` : ``} <div class="flex w-full flex-col items-center bg-white dark:bg-black"> <header id="header" class="banner p- flex w-full items-center justify-center svelte-1ffao03"><div class="flex w-full flex-col-reverse items-center justify-between md:w-5/6 md:flex-row"> <div class="w-11/12 py-10 md:w-2/5"><h1 class="my-4 text-5xl font-bold text-white dark:text-white">${escape(get(courseData, "title", ""))}</h1> <p class="text-md mb-6 text-white dark:text-white">${escape(get(courseData, "description", ""))}</p> <p class="author my-3 text-sm dark:text-white svelte-1ffao03">${escape(get(courseData, "metadata.instructor.name", ""))}</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $t("course.navItem.landing_page.start_course"),
        className: "px-6 py-5 mt-6 sm:w-fit hidden md:block",
        onClick: () => {
          if (editMode)
            return;
          startCoursePayment = true;
        },
        isDisabled: !allowNewStudent
      },
      {},
      {}
    )} ${$handleOpenWidget.open ? `${validate_component(UploadWidget, "UploadWidget").$$render(
      $$result,
      { imageURL: $course.logo },
      {
        imageURL: ($$value) => {
          $course.logo = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div>  ${video ? `<div class="banner-image flex w-full md:w-2/3 svelte-1ffao03"><div id="player" data-plyr-provider="youtube"${add_attribute("data-plyr-embed-id", getEmbedId(video), 0)}${add_attribute("this", player, 0)}></div></div> ` : `<div class="banner-image relative overflow-hidden rounded-md md:w-2/3 svelte-1ffao03"><img style="min-width:280px; min-height:200px" alt="About us"${add_attribute(
      "src",
      bannerImage ? bannerImage : "/images/classroomio-course-img-template.jpg",
      0
    )} class="relative mt-2 h-full max-h-[400px] w-full max-w-[500px] rounded-md md:mt-0"></div> `}</div></header>  <div class="w-full bg-white dark:bg-black"><div class="mx-0 my-2 flex w-full max-w-[1200px] flex-col-reverse items-center justify-between lg:m-auto lg:w-11/12 lg:flex-row lg:items-start lg:py-8"> <div class="course-content w-full p-3 lg:mr-10 lg:w-10/12 svelte-1ffao03"> <nav class="${"sticky top-0 flex items-center border-b border-gray-300 py-3 " + escape(!editMode && "lg:top-11", true) + " bg-white dark:bg-neutral-800 svelte-1ffao03"}">${each(navItems, (navItem) => {
      return `<a href="${escape($page.url.pathname, true) + escape(navItem.key, true)}" class="${escape(navItem.key === activeNav && "active text-primary-700", true) + " z-0 mr-6 rounded-lg px-2 font-normal text-slate-700 hover:bg-gray-200 dark:text-white dark:hover:text-slate-900 svelte-1ffao03"}">${escape($t(navItem.label))} </a>`;
    })}</nav>  ${navItemKeys.includes(NAV_ITEM_KEY.REQUIREMENT) ? `<section id="requirement" class="mt-8 border-b border-gray-300 pb-10"><h3 class="mb-3 mt-0 text-2xl font-bold">${escape($t("course.navItem.landing_page.requirement"))}</h3> <ul class="list font-light">${validate_component(HTMLRender, "HtmlRender").$$render(
      $$result,
      {
        content: get(courseData, "metadata.requirements", "")
      },
      {},
      {}
    )}</ul></section>` : ``}  ${navItemKeys.includes(NAV_ITEM_KEY.DESCRIPTION) ? `<section id="description" class="mt-8 border-b border-gray-300 pb-10"><h3 class="mb-3 mt-0 text-2xl font-bold">${escape($t("course.navItem.landing_page.description"))}</h3> ${validate_component(HTMLRender, "HtmlRender").$$render(
      $$result,
      {
        className: "dark:text-white text-sm font-light",
        content: get(courseData, "metadata.description", "")
      },
      {},
      {}
    )}</section>` : ``}  ${navItemKeys.includes(NAV_ITEM_KEY.GOALS) ? `<section id="goals" class="mt-8 pb-10"><h3 class="text-2xl font-bold mt-0 mb-3">${escape($t("course.navItem.landing_page.learn"))}</h3> <ul class="list font-light">${validate_component(HTMLRender, "HtmlRender").$$render(
      $$result,
      {
        content: get(courseData, "metadata.goals", "")
      },
      {},
      {}
    )}</ul></section>` : ``}  ${navItemKeys.includes(NAV_ITEM_KEY.CERTIFICATE) ? `<section id="certificate" class="border-b border-gray-300 mt-8 pb-10"><h3 class="text-2xl font-bold mt-0">${escape($t("course.navItem.landing_page.certificate"))}</h3> <p class="dark:text-white text-sm font-light mb-3">${escape($t("course.navItem.landing_page.certificate_text"))}</p> ${validate_component(ImageLoader$1, "ImageLoader").$$render(
      $$result,
      {
        class: "certificate-img max-h-[215px]",
        src: certificate?.templateUrl,
        alt: "certificate template"
      },
      {},
      {
        error: () => {
          return `An error occurred.`;
        },
        loading: () => {
          return `${validate_component(InlineLoading$1, "InlineLoading").$$render($$result, {}, {}, {})}`;
        }
      }
    )}</section>` : ``}  ${courseData.version === COURSE_VERSION.V1 ? `<section id="lessons" class="border-b border-gray-300 mt-8 pb-10"><div class="flex items-center justify-between w-full mb-3"><h3 class="text-2xl font-bold mt-0 mb-3">${escape($t("course.navItem.landing_page.content"))}</h3> <p class="dark:text-white text-sm font-light">${escape(pluralize("lesson", lessons.length, true))}</p></div> <div class="flex flex-wrap">${each(lessons, (lesson, index) => {
      return `<div class="px-2 py-1 m-2 border rounded">${validate_component(Chip, "Chip").$$render(
        $$result,
        {
          value: getLectureNo(index + 1, "0"),
          className: "bg-primary-100 text-primary-700 inline "
        },
        {},
        {}
      )} <p class="ml-2 text-xs font-light dark:text-white inline">${escape(lesson.title)}</p> </div>`;
    })}</div></section>` : `${courseData.version === COURSE_VERSION.V2 ? `<section id="lessons"> <div class="flex items-center justify-between"><h1>${escape($t("course.navItem.landing_page.course_content"))}</h1> <span class="text-xs font-normal">${escape(pluralize($t("course.navItem.landing_page.modules"), lessonSections.length, true))},
                ${escape(pluralize($t("course.navItem.landing_page.lessons"), totalLessons, true))}</span></div> ${each(lessonSections, (section) => {
      return `${validate_component(SectionsDisplay, "SectionsDisplay").$$render(
        $$result,
        {
          exerciseCount: getExerciseCount(section.lessons),
          lessonCount: section.lessons?.length,
          lessons: section.lessons,
          title: section.title
        },
        {},
        {}
      )}`;
    })}</section>` : ``}`}  ${navItemKeys.includes(NAV_ITEM_KEY.REVIEWS) ? `<section id="reviews"><h2 class="my-16 mr-0 mb-6 ml-0 font-semibold">${escape($t("course.navItem.landing_page.reviews"))}</h2> <div class="flex flex-wrap">${each(reviews.slice(0, 4), (review, id) => {
      return `${!review.hide ? ` <div class="item-start my-2 flex w-2/4 flex-row"> ${review.avatar_url ? `${validate_component(Avatar, "Avatar").$$render(
        $$result,
        {
          src: review.avatar_url,
          name: "Avatar",
          className: "mt-1"
        },
        {},
        {}
      )}` : ``}  <div class="w-11/12 pl-2.5"><p class="mb-0.5 font-medium">${escape(review.name)}</p>  <div class="flex flex-row items-center">${review.rating ? `<img${add_attribute("src", ratingsImg[review.rating - 1], 0)} class="mr-4 mt-1 w-24" alt="">` : ``}</div> <div class="read-more-content mb-2 svelte-1ffao03" style="${"max-height: " + escape(expandDescription[id] ? "none" : "50px", true)}"><p class="my-2 text-sm leading-5 text-gray-600">${escape(review.description)} </p></div> ${!expandDescription[id] && review.description.split(" ").length > 9 ? `<button class="text-primary-700 mt-2 font-normal underline" data-svelte-h="svelte-lfpco4">See More</button>` : ``} ${expandDescription[id] ? `<button class="text-primary-700 mt-2 font-normal underline" data-svelte-h="svelte-oj2y18">See Less</button>` : ``}</div> </div>` : ``}`;
    })}</div> ${reviews.length > 4 ? `${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $t("course.navItem.landing_page.see_all"),
        className: "w-3/12 p-4 mt-2",
        variant: VARIANTS.OUTLINED,
        onClick: () => $reviewsModalStore.open = true
      },
      {},
      {}
    )}` : ``}  ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: () => $reviewsModalStore.open = false,
        width: "w-9/12",
        modalHeading: $t("course.navItem.landing_page.reviews_modal.title"),
        open: $reviewsModalStore.open
      },
      {
        open: ($$value) => {
          $reviewsModalStore.open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex"> <div class="w-1/3"><h2 class="text-xl font-bold">${escape(averageRating)} ${escape($t("course.navItem.landing_page.reviews_modal.rating"))}</h2> <h2 class="text-lg font-semibold mt-2">${escape(reviews.length)} ${escape($t("course.navItem.landing_page.reviews_modal.ratings"))}</h2></div>  <div class="flex w-4/6 flex-wrap">${each(reviews, (review, id) => {
            return ` <div class="item-start my-2 flex w-full flex-row"> ${review.avatar_url ? `${validate_component(Avatar, "Avatar").$$render(
              $$result,
              {
                src: review.avatar_url,
                name: review.name,
                className: "mt-1"
              },
              {},
              {}
            )}` : ``}  <div class="w-11/12 pl-2.5"><p class="mb-0.5 font-medium">${escape(review.name)}</p>  <div class="flex flex-row"><img src="/images/rating-full.svg" alt="" class="mr-2"> <p class="text-xs text-gray-600">${escape(calDateDiff(review.created_at))} </p></div> <div class="read-more-content mb-2 svelte-1ffao03" style="${"max-height: " + escape(expandDescription[id] ? "none" : "50px", true)}"><p class="my-2 text-sm leading-5 text-gray-600">${escape(review.description)}</p> </div></div> </div>`;
          })}</div></div>`;
        }
      }
    )}</section>` : ``}  <section id="instructor" class="mt-8 pb-10"><h3 class="text-2xl font-bold mt-0 mb-3">${escape($t("course.navItem.landing_page.instructor"))}</h3> <div class="flex items-center mb-4"><img alt="Author Avatar" class="mr-3 block h-20 w-20 rounded-full"${add_attribute("src", get(instructor, "imgUrl", $currentOrg.avatar_url || "/logo-512.png"), 0)}> <div><p class="text-md font-light dark:text-white">${escape(get(instructor, "name", $currentOrg.name))}</p> <p class="text-xs font-light dark:text-white">${escape(get(instructor, "role", ""))}</p> <p class="text-md flex items-center font-light dark:text-white">${validate_component(PlayFilled, "PlayFilled").$$render($$result, { size: 16, class: "text-primary-700" }, {}, {})} <span class="ml-1">${escape(get(instructor, "courseNo", ""))} ${escape($t("course.navItem.landing_page.courses"))}</span></p></div></div> <p class="text-sm font-light dark:text-white">${escape(get(instructor, "description", ""))}</p></section></div>  ${validate_component(PricingSection, "PricingSection").$$render(
      $$result,
      {
        courseData,
        editMode,
        className: "target-component",
        startCoursePayment
      },
      {
        startCoursePayment: ($$value) => {
          startCoursePayment = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${`${validate_component(PricingSection, "PricingSection").$$render(
      $$result,
      {
        courseData,
        editMode,
        mobile: true,
        className: "w-full",
        startCoursePayment
      },
      {
        startCoursePayment: ($$value) => {
          startCoursePayment = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}</div> </div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  $$unsubscribe_handleOpenWidget();
  $$unsubscribe_course();
  $$unsubscribe_page();
  $$unsubscribe_reviewsModalStore();
  $$unsubscribe_currentOrg();
  return $$rendered;
});

export { CourseLandingPage as C, NAV_ITEM_KEY as N };
//# sourceMappingURL=index21-6643701c.js.map
