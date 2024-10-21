import { s as subscribe, e as set_store_value, d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, b as each, g as createEventDispatcher, d as spread, f as escape_object, h as escape_attribute_value, i as add_classes, k as add_styles } from './ssr-10c5b872.js';
import { C as CourseContainer, P as PageBody } from './index25-9c55d031.js';
import { P as PageNav } from './index.svelte_svelte_type_style_lang-3a07a684.js';
import { g as goto } from './navigation-cd282f65.js';
import { A as ArrowUpRight } from './ArrowUpRight-85da17be.js';
import { R as Restart } from './Restart-b417cb0d.js';
import { p as public_env } from './shared-server-e0f2abd3.js';
import { S as SectionTitle } from './SectionTitle-d97525be.js';
import { T as TextField } from './TextField-86164973.js';
import { T as TextArea } from './TextArea-9e2a2a4d.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { C as COURSE_TYPE } from './index15-c5761f1e.js';
import { w as writable } from './index2-aea858a5.js';
import './_sentry-release-injection-file-6be6a010.js';
import { t as t2 } from './translations-90190f83.js';
import { c as course, b as lessons } from './store4-ef39175f.js';
import { r as deleteCourse, e as updateCourse } from './index18-b03e5e10.js';
import { e as currentOrgDomain, f as currentOrgPath, c as currentOrg, g as isFreePlan } from './org-8fc26a61.js';
import { b as snackbar } from './store2-dc811f17.js';
import { h as handleOpenWidget, U as UploadWidget } from './index22-747425c4.js';
import { B as Banner } from './Banner-bd19e4d5.js';
import { I as IconButton } from './index9-eea8802c.js';
import { g as generateSlug } from './generateSlug-35858d27.js';
import { G as Grid$1, R as Row$1, C as Column$1 } from './Column-ce23f72d.js';
import { t as tick } from './scheduler-aae59940.js';
import { C as ChevronDown$1 } from './ChevronDown-d5b93e8c.js';
import { B as Button$1 } from './Button-f9944a26.js';
import { C as CopyButton$1 } from './CopyButton-ab4baaa4.js';
import { T as Toggle$1 } from './Toggle-e0c8f3da.js';
import { R as RadioButtonGroup$1 } from './RadioButtonGroup-e57fe635.js';
import { R as RadioButton$1 } from './RadioButton-4ac24df2.js';
import './Moon-632bccb1.js';
import './environment-b7cb3169.js';
import './prod-ssr-f02d8713.js';
import './stores-793c1e19.js';
import './Text-e3f4b18b.js';
import './Locked-3612b17f.js';
import './CheckmarkFilled-36899326.js';
import './Add-78ef4d23.js';
import './function-efda068b.js';
import './FlashFilled-4a89bd75.js';
import './reusableClass-512f4804.js';
import './Settings-0a14f57d.js';
import './SkeletonText-d2851876.js';
import './useMobile-47eebf4e.js';
import './store-37f0dea3.js';
import './user-e923b6d4.js';
import 'canvas-confetti';
import './app-d638cf5d.js';
import './index8-59a07edf.js';
import './index12-9c021b5e.js';
import './Popover-a92462a3.js';
import './validator-27ec1d5c.js';
import 'lodash/isNumber.js';
import 'zod';
import './supabase-cbc58bc2.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import 'lodash/cloneDeep.js';
import './index24-7fcbd4fe.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4df38d55-8dcf-4af6-a56d-0200406102a1", e._sentryDebugIdIdentifier = "sentry-dbid-4df38d55-8dcf-4af6-a56d-0200406102a1");
  } catch (e2) {
  }
}();
const CodeSnippetSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["type"]);
  let { type = "single" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `  <div${spread([escape_object($$restProps)], {
    classes: "bx--skeleton bx--snippet " + (type === "single" ? "bx--snippet--single" : "") + " " + (type === "multi" ? "bx--snippet--multi" : "")
  })}><div${add_classes("bx--snippet-container".trim())}>${type === "single" ? `<span></span>` : `${type === "multi" ? `<span></span> <span></span> <span></span>` : ``}`}</div></div>`;
});
const CodeSnippetSkeleton$1 = CodeSnippetSkeleton;
const CodeSnippet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let expandText;
  let minHeight;
  let maxHeight;
  let $$restProps = compute_rest_props($$props, [
    "type",
    "code",
    "copy",
    "expanded",
    "hideCopyButton",
    "disabled",
    "wrapText",
    "light",
    "skeleton",
    "copyButtonDescription",
    "copyLabel",
    "feedback",
    "feedbackTimeout",
    "showLessText",
    "showMoreText",
    "showMoreLess",
    "id",
    "ref"
  ]);
  let { type = "single" } = $$props;
  let { code = void 0 } = $$props;
  let { copy = async (code2) => {
    try {
      await navigator.clipboard.writeText(code2);
    } catch (e) {
      console.log(e);
    }
  } } = $$props;
  let { expanded = false } = $$props;
  let { hideCopyButton = false } = $$props;
  let { disabled = false } = $$props;
  let { wrapText = false } = $$props;
  let { light = false } = $$props;
  let { skeleton = false } = $$props;
  let { copyButtonDescription = void 0 } = $$props;
  let { copyLabel = void 0 } = $$props;
  let { feedback = "Copied!" } = $$props;
  let { feedbackTimeout = 2e3 } = $$props;
  let { showLessText = "Show less" } = $$props;
  let { showMoreText = "Show more" } = $$props;
  let { showMoreLess = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const dispatch = createEventDispatcher();
  function setShowMoreLess() {
    const { height } = ref.getBoundingClientRect();
    if (height > 0)
      showMoreLess = ref.getBoundingClientRect().height > 255;
  }
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.copy === void 0 && $$bindings.copy && copy !== void 0)
    $$bindings.copy(copy);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.hideCopyButton === void 0 && $$bindings.hideCopyButton && hideCopyButton !== void 0)
    $$bindings.hideCopyButton(hideCopyButton);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.wrapText === void 0 && $$bindings.wrapText && wrapText !== void 0)
    $$bindings.wrapText(wrapText);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  if ($$props.copyButtonDescription === void 0 && $$bindings.copyButtonDescription && copyButtonDescription !== void 0)
    $$bindings.copyButtonDescription(copyButtonDescription);
  if ($$props.copyLabel === void 0 && $$bindings.copyLabel && copyLabel !== void 0)
    $$bindings.copyLabel(copyLabel);
  if ($$props.feedback === void 0 && $$bindings.feedback && feedback !== void 0)
    $$bindings.feedback(feedback);
  if ($$props.feedbackTimeout === void 0 && $$bindings.feedbackTimeout && feedbackTimeout !== void 0)
    $$bindings.feedbackTimeout(feedbackTimeout);
  if ($$props.showLessText === void 0 && $$bindings.showLessText && showLessText !== void 0)
    $$bindings.showLessText(showLessText);
  if ($$props.showMoreText === void 0 && $$bindings.showMoreText && showMoreText !== void 0)
    $$bindings.showMoreText(showMoreText);
  if ($$props.showMoreLess === void 0 && $$bindings.showMoreLess && showMoreLess !== void 0)
    $$bindings.showMoreLess(showMoreLess);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  expandText = expanded ? showLessText : showMoreText;
  minHeight = expanded ? 16 * 15 : 48;
  maxHeight = expanded ? "none" : 16 * 15 + "px";
  {
    if (type === "multi" && ref) {
      if (code === void 0)
        setShowMoreLess();
      if (code)
        tick().then(setShowMoreLess);
    }
  }
  {
    if (type === "multi")
      dispatch(expanded ? "expand" : "collapse");
  }
  return ` ${skeleton ? `${validate_component(CodeSnippetSkeleton$1, "CodeSnippetSkeleton").$$render($$result, Object.assign({}, { type }, $$restProps), {}, {})}` : `${type === "inline" ? `${hideCopyButton ? `<span${spread([escape_object($$restProps)], {
    classes: "bx--snippet " + (expanded ? "bx--snippet--expand" : "") + " " + (light ? "bx--snippet--light" : "") + " " + (hideCopyButton ? "bx--snippet--no-copy" : "") + " " + (wrapText ? "bx--snippet--wraptext" : "") + " " + (type === "single" ? "bx--snippet--single" : "") + " " + (type === "inline" ? "bx--snippet--inline" : "") + " " + (type === "multi" ? "bx--snippet--multi" : "")
  })}><code${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : `${escape(code)}`}</code></span>` : `<button${spread(
    [
      { type: "button" },
      { "aria-live": "polite" },
      {
        "aria-label": escape_attribute_value(copyLabel)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--copy bx--btn--copy    bx--snippet " + (type === "inline" ? "bx--snippet--inline" : "") + " " + (expanded ? "bx--snippet--expand" : "") + " " + (light ? "bx--snippet--light" : "") + " " + (wrapText ? "bx--snippet--wraptext" : "")
    }
  )}><code${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : `${escape(code)}`}</code> <span aria-hidden="true"${add_classes("bx--assistive-text bx--copy-btn__feedback".trim())}>${escape(feedback)}</span></button>`}` : ` <div${spread([escape_object($$restProps)], {
    classes: "bx--snippet " + (expanded ? "bx--snippet--expand" : "") + " " + (light ? "bx--snippet--light" : "") + " " + (hideCopyButton ? "bx--snippet--no-copy" : "") + " " + (wrapText ? "bx--snippet--wraptext" : "") + " " + (type === "single" ? "bx--snippet--single" : "") + " " + (type === "inline" ? "bx--snippet--inline" : "") + " " + (type === "multi" ? "bx--snippet--multi" : "") + " " + (type !== "inline" && disabled ? "bx--snippet--disabled" : "")
  })}> <div${add_attribute("role", type === "single" ? "textbox" : void 0, 0)}${add_attribute("tabindex", type === "single" && !disabled ? "0" : void 0, 0)}${add_attribute("aria-label", $$restProps["aria-label"] || copyLabel || "code-snippet", 0)}${add_classes("bx--snippet-container".trim())}${add_styles({
    "width": `100%`,
    "min-height": `${minHeight}px`,
    "max-height": maxHeight
  })}><pre${add_attribute("this", ref, 0)}><code>${slots.default ? slots.default({}) : `${escape(code)}`}</code></pre></div> ${!hideCopyButton ? `${validate_component(CopyButton$1, "CopyButton").$$render(
    $$result,
    {
      text: code,
      copy,
      disabled,
      feedback,
      feedbackTimeout,
      iconDescription: copyButtonDescription
    },
    {},
    {}
  )}` : ``} ${showMoreLess ? `${validate_component(Button$1, "Button").$$render(
    $$result,
    {
      kind: "ghost",
      size: "small",
      class: "bx--snippet-btn--expand",
      disabled
    },
    {},
    {
      default: () => {
        return `<span${add_classes("bx--snippet-btn--text".trim())}>${escape(expandText)}</span> ${validate_component(ChevronDown$1, "ChevronDown").$$render(
          $$result,
          {
            class: "bx--icon-chevron--down bx--snippet__icon",
            "aria-label": expandText
          },
          {},
          {}
        )}`;
      }
    }
  )}` : ``}</div>`}`}`;
});
const CodeSnippet$1 = CodeSnippet;
const Draggable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M10 6H14V10H10zM18 6H22V10H18zM10 14H14V18H10zM18 14H22V18H18zM10 22H14V26H10zM18 22H22V26H18z"></path></svg>`;
});
const settings = writable({
  logo: "",
  course_title: "",
  course_description: "",
  grading: false,
  type: COURSE_TYPE.LIVE_CLASS,
  allow_new_students: false,
  tabs: [
    { id: 1, name: "course.navItem.lessons.materials.tabs.note.title" },
    { id: 2, name: "course.navItem.lessons.materials.tabs.slide.title" },
    { id: 3, name: "course.navItem.lessons.materials.tabs.video.title" }
  ],
  lesson_download: false,
  is_published: false
});
const DragAndDrop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $settings, $$unsubscribe_settings;
  let $t, $$unsubscribe_t;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_settings();
  $$unsubscribe_t();
  return `<section class="w-fit flex gap-1 md:gap-3 p-1">${each($settings.tabs, (item) => {
    return `<div class="flex items-center justify-start text-center text-xs md:text-base gap-1 md:gap-2 dark:text-white bg-slate-100 dark:bg-slate-700 p-2 rounded-md">${validate_component(Draggable, "Draggable").$$render($$result, { size: 16 }, {}, {})} ${escape($t(item.name))} </div>`;
  })}</section>`;
});
function isObject(obj) {
  return obj === Object(obj);
}
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let courseLink;
  let $course, $$unsubscribe_course;
  let $currentOrgDomain, $$unsubscribe_currentOrgDomain;
  let $settings, $$unsubscribe_settings;
  let $t, $$unsubscribe_t;
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $lessons, $$unsubscribe_lessons;
  let $handleOpenWidget, $$unsubscribe_handleOpenWidget;
  let $isFreePlan, $$unsubscribe_isFreePlan;
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  $$unsubscribe_currentOrgDomain = subscribe(currentOrgDomain, (value) => $currentOrgDomain = value);
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_lessons = subscribe(lessons, (value) => $lessons = value);
  $$unsubscribe_handleOpenWidget = subscribe(handleOpenWidget, (value) => $handleOpenWidget = value);
  $$unsubscribe_isFreePlan = subscribe(isFreePlan, (value) => $isFreePlan = value);
  let isSaving = false;
  let isLoading = false;
  let isDeleting = false;
  let errors = { title: void 0, description: void 0 };
  let avatar;
  function widgetControl() {
    set_store_value(handleOpenWidget, $handleOpenWidget.open = !$handleOpenWidget.open, $handleOpenWidget);
  }
  function getLessonOrder(id) {
    const index = $lessons.findIndex((lesson) => lesson.id === id);
    if (index < 9) {
      return "0" + (index + 1);
    } else {
      return index + 1;
    }
  }
  const downloadCourse = async () => {
    isLoading = true;
    try {
      const lessonsList = $lessons.map((lesson) => ({
        lessonTitle: lesson.title,
        lessonNumber: getLessonOrder(lesson.id),
        lessonNote: lesson.note,
        slideUrl: lesson.slide_url || "",
        video: lesson.videos || ""
      }));
      const response = await fetch(public_env.PUBLIC_SERVER_URL + "/downloadCourse", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          courseTitle: $course.title,
          orgName: $currentOrg.name,
          orgTheme: $currentOrg.theme || "",
          lessons: lessonsList
        })
      });
      if (!response.ok) {
        throw new Error(await response.text());
      }
      const data = await response.blob();
      const file = new Blob([data], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      let a = document.createElement("a");
      document.body.append(a);
      a.download = $course.title + " - Course ";
      a.href = fileURL;
      a.click();
      a.remove();
      snackbar.success("snackbar.course_settings.success.download");
    } catch (error) {
      snackbar.error("snackbar.course_settings.error.not_right");
    }
    isLoading = false;
  };
  const deleteBannerImage = () => {
    set_store_value(course, $course.logo = "", $course);
  };
  async function handleDeleteCourse() {
    isDeleting = true;
    try {
      await deleteCourse($course.id);
      isDeleting = false;
      goto($currentOrgPath + "/courses");
    } catch (error) {
      snackbar.error("snackbar.course_settings.error.went_wrong");
      isDeleting = false;
    }
  }
  const handleSave = async () => {
    if (!$settings.course_title) {
      errors.title = $t("snackbar.course_settings.error.title");
      return;
    }
    if (!$settings.course_description) {
      errors.description = $t("snackbar.course_settings.error.description");
      return;
    }
    isSaving = true;
    try {
      const updatedCourse = {
        title: $settings.course_title,
        description: $settings.course_description,
        type: $settings.type,
        logo: $settings.logo,
        is_published: $settings.is_published,
        metadata: {
          ...isObject($course.metadata) ? $course.metadata : {},
          lessonTabsOrder: $settings.tabs,
          grading: $settings.grading,
          lessonDownload: $settings.lesson_download,
          allowNewStudent: $settings.allow_new_students
        },
        slug: $course.slug
      };
      await updateCourse($course.id, avatar, updatedCourse);
      set_store_value(course, $course = { ...$course, ...updatedCourse }, $course);
      snackbar.success("snackbar.course_settings.success.saved");
    } catch (error) {
      snackbar.error();
    }
    isSaving = false;
  };
  function setDefault(course2) {
    if (course2 && Object.keys(course2).length && $settings.course_title !== course2.title) {
      set_store_value(
        settings,
        $settings = {
          course_title: course2.title,
          type: course2.type,
          course_description: course2.description,
          logo: course2.logo || "",
          tabs: course2.metadata.lessonTabsOrder || $settings.tabs,
          grading: !!course2.metadata.grading,
          lesson_download: !!course2.metadata.lessonDownload,
          is_published: !!course2.is_published,
          allow_new_students: course2.metadata.allowNewStudent
        },
        $settings
      );
    }
  }
  const generateNewCourseLink = () => {
    set_store_value(course, $course.slug = generateSlug($course.title), $course);
  };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      setDefault($course);
    }
    courseLink = `${$currentOrgDomain}/course/${$course.slug}`;
    $$rendered = `${validate_component(Grid$1, "Grid").$$render(
      $$result,
      {
        class: "border-c rounded border-gray-200 dark:border-neutral-600"
      },
      {},
      {
        default: () => {
          return `${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "flex lg:flex-row flex-col py-7 border-bottom-c"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape($t("course.navItem.settings.cover_image"))}`;
                      }
                    })} <p>${escape($t("course.navItem.settings.optional_image"))}</p> <span class="flex items-center justify-start">${validate_component(PrimaryButton, "PrimaryButton").$$render(
                      $$result,
                      {
                        variant: VARIANTS.OUTLINED,
                        label: $t("course.navItem.settings.replace"),
                        className: "mr-2",
                        onClick: widgetControl
                      },
                      {},
                      {}
                    )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
                      $$result,
                      {
                        variant: VARIANTS.CONTAINED_DANGER,
                        label: $t("course.navItem.settings.del"),
                        onClick: deleteBannerImage
                      },
                      {},
                      {}
                    )}</span> ${$handleOpenWidget.open ? `${validate_component(UploadWidget, "UploadWidget").$$render(
                      $$result,
                      { imageURL: $settings.logo },
                      {
                        imageURL: ($$value) => {
                          $settings.logo = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}` : ``}`;
                  }
                })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 6 }, {}, {
                  default: () => {
                    return `<div class="w-fit relative z-[20]"><img style="min-width:280px; min-height:200px" alt="About us"${add_attribute(
                      "src",
                      $settings.logo ? $settings.logo : "/images/classroomio-course-img-template.jpg",
                      0
                    )} class="mt-2 md:mt-0 w-[280px] h-[200px] rounded-md relative"></div>`;
                  }
                })}`;
              }
            }
          )} ${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "flex lg:flex-row flex-col py-7 border-bottom-c"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape($t("course.navItem.settings.course_details"))}`;
                      }
                    })}`;
                  }
                })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${validate_component(TextField, "TextField").$$render(
                      $$result,
                      {
                        label: $t("course.navItem.settings.course_title"),
                        placeholder: "Write the course title here",
                        className: "w-full mb-5",
                        errorMessage: errors.title,
                        value: $settings.course_title
                      },
                      {
                        value: ($$value) => {
                          $settings.course_title = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} ${validate_component(TextArea, "TextArea").$$render(
                      $$result,
                      {
                        label: $t("course.navItem.settings.course_description"),
                        placeholder: $t("course.navItem.settings.placeholder"),
                        className: "w-full mb-5",
                        errorMessage: errors.description,
                        value: $settings.course_description
                      },
                      {
                        value: ($$value) => {
                          $settings.course_description = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} <div class=""><p class="text-md flex items-center gap-2 mb-2">${escape($t("course.navItem.settings.link"))} ${validate_component(IconButton, "IconButton").$$render(
                      $$result,
                      {
                        contained: true,
                        size: "small",
                        onClick: generateNewCourseLink
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(Restart, "Restart").$$render($$result, { size: 16 }, {}, {})}`;
                        }
                      }
                    )} <span class="grow"></span> ${validate_component(IconButton, "IconButton").$$render(
                      $$result,
                      {
                        contained: true,
                        size: "small",
                        onClick: () => goto(courseLink)
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(ArrowUpRight, "ArrowUpRight").$$render($$result, { size: 16 }, {}, {})}`;
                        }
                      }
                    )}</p> ${$course.slug ? `${validate_component(CodeSnippet$1, "CodeSnippet").$$render(
                      $$result,
                      {
                        wrapText: true,
                        type: "multi",
                        code: courseLink
                      },
                      {},
                      {}
                    )}` : `${validate_component(CodeSnippet$1, "CodeSnippet").$$render(
                      $$result,
                      {
                        code: "Setup landing page to get course link"
                      },
                      {},
                      {}
                    )}`}</div>`;
                  }
                })}`;
              }
            }
          )}  ${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "flex lg:flex-row flex-col py-7 border-bottom-c"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape($t("course.navItem.settings.order"))}`;
                      }
                    })} <p>${escape($t("course.navItem.settings.drag"))}</p>`;
                  }
                })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${validate_component(DragAndDrop, "DragAndDrop").$$render($$result, {}, {}, {})}`;
                  }
                })}`;
              }
            }
          )} ${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "flex lg:flex-row flex-col py-7 border-bottom-c"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape($t("course.navItem.settings.lesson_download"))}`;
                      }
                    })} <p>${escape($t("course.navItem.settings.available"))}</p>`;
                  }
                })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${$isFreePlan ? `${validate_component(Banner, "UpgradeBanner").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape($t("upgrade.download_lessons"))}`;
                      }
                    })}` : `${validate_component(Toggle$1, "Toggle").$$render(
                      $$result,
                      {
                        size: "sm",
                        toggled: $settings.lesson_download
                      },
                      {
                        toggled: ($$value) => {
                          $settings.lesson_download = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        labelB: () => {
                          return `<span slot="labelB" style="color: gray">${escape($t("course.navItem.settings.enabled"))}</span>`;
                        },
                        labelA: () => {
                          return `<span slot="labelA" style="color: gray">${escape($t("course.navItem.settings.disabled"))}</span>`;
                        }
                      }
                    )}`}`;
                  }
                })}`;
              }
            }
          )} ${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "flex lg:flex-row flex-col py-7 border-bottom-c"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape($t("course.navItem.settings.course_download"))}`;
                      }
                    })} <p>${escape($t("course.navItem.settings.course_avail"))}</p>`;
                  }
                })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${$isFreePlan ? `${validate_component(Banner, "UpgradeBanner").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape($t("upgrade.download_course"))}`;
                      }
                    })}` : `${validate_component(PrimaryButton, "PrimaryButton").$$render(
                      $$result,
                      {
                        variant: VARIANTS.OUTLINED,
                        label: $t("course.navItem.settings.download"),
                        onClick: downloadCourse,
                        isDisabled: isLoading || !public_env.PUBLIC_SERVER_URL,
                        isLoading
                      },
                      {},
                      {}
                    )}`}`;
                  }
                })}`;
              }
            }
          )} ${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "flex lg:flex-row flex-col py-7 border-bottom-c"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape($t("course.navItem.settings.type"))}`;
                      }
                    })} <p>${escape($t("course.navItem.settings.course_type_desc"))}</p>`;
                  }
                })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${validate_component(RadioButtonGroup$1, "RadioButtonGroup").$$render(
                      $$result,
                      {
                        hideLegend: true,
                        selected: $settings.type
                      },
                      {
                        selected: ($$value) => {
                          $settings.type = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `${validate_component(RadioButton$1, "RadioButton").$$render(
                            $$result,
                            {
                              labelText: $t("course.navItem.settings.live_class"),
                              value: COURSE_TYPE.LIVE_CLASS
                            },
                            {},
                            {}
                          )} ${validate_component(RadioButton$1, "RadioButton").$$render(
                            $$result,
                            {
                              labelText: $t("course.navItem.settings.self_paced"),
                              value: COURSE_TYPE.SELF_PACED
                            },
                            {},
                            {}
                          )}`;
                        }
                      }
                    )}`;
                  }
                })}`;
              }
            }
          )} ${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "flex lg:flex-row flex-col py-7 border-bottom-c"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape($t("course.navItem.settings.allow"))}`;
                      }
                    })} <p>${escape($t("course.navItem.settings.access"))}</p>`;
                  }
                })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${validate_component(Toggle$1, "Toggle").$$render(
                      $$result,
                      {
                        size: "sm",
                        toggled: $settings.allow_new_students
                      },
                      {
                        toggled: ($$value) => {
                          $settings.allow_new_students = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        labelB: () => {
                          return `<span slot="labelB" style="color: gray">${escape($t("course.navItem.settings.enabled"))}</span>`;
                        },
                        labelA: () => {
                          return `<span slot="labelA" style="color: gray">${escape($t("course.navItem.settings.disabled"))}</span>`;
                        }
                      }
                    )}`;
                  }
                })}`;
              }
            }
          )}  ${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "flex lg:flex-row flex-col py-7 border-bottom-c"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape($t("course.navItem.settings.publish"))}`;
                      }
                    })} <p>${escape($t("course.navItem.settings.determines"))}</p>`;
                  }
                })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${validate_component(Toggle$1, "Toggle").$$render(
                      $$result,
                      {
                        size: "sm",
                        toggled: $settings.is_published
                      },
                      {
                        toggled: ($$value) => {
                          $settings.is_published = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        labelB: () => {
                          return `<span slot="labelB" style="color: gray">${escape($t("course.navItem.settings.published"))}</span>`;
                        },
                        labelA: () => {
                          return `<span slot="labelA" style="color: gray">${escape($t("course.navItem.settings.unpublished"))}</span>`;
                        }
                      }
                    )}`;
                  }
                })}`;
              }
            }
          )} ${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "flex lg:flex-row flex-col py-7 border-bottom-c"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape($t("course.navItem.settings.delete"))}`;
                      }
                    })} <p>${escape($t("course.navItem.settings.delete_text"))}</p>`;
                  }
                })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${validate_component(PrimaryButton, "PrimaryButton").$$render(
                      $$result,
                      {
                        variant: VARIANTS.CONTAINED_DANGER,
                        label: $t("course.navItem.settings.delete"),
                        onClick: handleDeleteCourse,
                        isLoading: isDeleting,
                        isDisabled: isDeleting
                      },
                      {},
                      {}
                    )}`;
                  }
                })}`;
              }
            }
          )} ${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "p-5 w-full flex items-center justify-end"
            },
            {},
            {
              default: () => {
                return `${validate_component(PrimaryButton, "PrimaryButton").$$render(
                  $$result,
                  {
                    label: $t("course.navItem.settings.save"),
                    isLoading: isSaving,
                    isDisabled: isSaving,
                    onClick: handleSave
                  },
                  {},
                  {}
                )}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_course();
  $$unsubscribe_currentOrgDomain();
  $$unsubscribe_settings();
  $$unsubscribe_t();
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_currentOrg();
  $$unsubscribe_lessons();
  $$unsubscribe_handleOpenWidget();
  $$unsubscribe_isFreePlan();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(CourseContainer, "CourseContainer").$$render(
      $$result,
      { courseId: data.courseId },
      {
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
              title: $t("course.navItem.settings.heading")
            },
            {},
            {}
          )} ${validate_component(PageBody, "PageBody").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Settings, "Settings").$$render($$result, {}, {}, {})}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1f73cf79.js.map
