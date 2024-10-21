import { s as subscribe, e as set_store_value, c as null_to_empty } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute } from './ssr-10c5b872.js';
import { a as lessonSections, b as lessons, c as course } from './store4-ef39175f.js';
import { C as CourseLandingPage, N as NAV_ITEM_KEY } from './index21-6643701c.js';
import { g as goto } from './navigation-cd282f65.js';
import cloneDeep from 'lodash/cloneDeep.js';
import set from 'lodash/set.js';
import { C as ChevronRight } from './ChevronRight2-6f4a443c.js';
import { A as ArrowLeft } from './ArrowLeft-b60a107c.js';
import { A as ArrowUpRight } from './ArrowUpRight-85da17be.js';
import { C as ChevronLeft } from './ChevronLeft-3be359ab.js';
import { e as currentOrgDomain } from './org-8fc26a61.js';
import { I as IconButton } from './index9-eea8802c.js';
import { a as Close } from './index8-59a07edf.js';
import { C as CustomPromptBtn, T as TextArea } from './TextArea-9e2a2a4d.js';
import { T as TextField } from './TextField-86164973.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { h as handleOpenWidget } from './index22-747425c4.js';
import { t as t2 } from './translations-90190f83.js';
import { T as TextEditor } from './index26-5db2dde8.js';
import get from 'lodash/get.js';
import isEmpty from 'lodash/isEmpty.js';
import { T as Toggle$1 } from './Toggle-e0c8f3da.js';
import { i as isCourseFree } from './course-a9172902.js';
import { S as Select$1, a as SelectItem$1 } from './SelectItem-00c29785.js';
import z from 'zod';
import { C as ChevronDown } from './function-efda068b.js';
import { i as isMobile } from './useMobile-47eebf4e.js';
import { S as Save } from './Save-257b9640.js';
import { T as TrashCan } from './TrashCan-54bce261.js';
import { U as UploadImage } from './index27-5501584c.js';
import { e as updateCourse, g as uploadAvatar } from './index18-b03e5e10.js';
import { A as Avatar } from './index10-b2b97ef7.js';
import { p as processErrors } from './validator-27ec1d5c.js';
import { g as generateSlug } from './generateSlug-35858d27.js';
import './index2-aea858a5.js';
import './index15-c5761f1e.js';
import './_sentry-release-injection-file-6be6a010.js';
import './store2-dc811f17.js';
import 'pluralize';
import './stores-793c1e19.js';
import './date-30c46a0e.js';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import './index12-9c021b5e.js';
import './getCurrencyFormatter-56d8d145.js';
import './HTMLRender-9a6e04f8.js';
import './config-8c22ba68.js';
import './shared-server-e0f2abd3.js';
import './index23-8c8bac96.js';
import 'posthog-js';
import './PoweredBy-58475ea5.js';
import './formatYoutubeVideo-86462462.js';
import './ImageLoader-d6ed26af.js';
import './ErrorFilled-1371f254.js';
import './Popover-a92462a3.js';
import './index24-7fcbd4fe.js';
import './Text-e3f4b18b.js';
import './supabase-cbc58bc2.js';
import '@supabase/supabase-js';
import './app-d638cf5d.js';
import './ChevronDown-d5b93e8c.js';
import './WarningAltFilled-13a554ec.js';
import 'lodash/isNumber.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "97c938a6-955c-46e2-a77c-0b6234d4940e", e._sentryDebugIdIdentifier = "sentry-dbid-97c938a6-955c-46e2-a77c-0b6234d4940e");
  } catch (e2) {
  }
}();
const HeaderForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $handleOpenWidget, $$unsubscribe_handleOpenWidget;
  let $t, $$unsubscribe_t;
  $$unsubscribe_handleOpenWidget = subscribe(handleOpenWidget, (value) => $handleOpenWidget = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { course: course2 = {} } = $$props;
  function widgetControl() {
    set_store_value(handleOpenWidget, $handleOpenWidget.open = !$handleOpenWidget.open, $handleOpenWidget);
  }
  if ($$props.course === void 0 && $$bindings.course && course2 !== void 0)
    $$bindings.course(course2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        className: "mt-5",
        labelClassName: "font-bold",
        label: $t("course.navItem.landing_page.editor.header_form.title"),
        value: course2.title
      },
      {
        value: ($$value) => {
          course2.title = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(TextArea, "TextArea").$$render(
      $$result,
      {
        label: $t("course.navItem.landing_page.editor.header_form.description"),
        rows: "6",
        className: "mt-5",
        labelClassName: "font-bold",
        value: course2.description
      },
      {
        value: ($$value) => {
          course2.description = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        className: "mt-5",
        labelClassName: "font-bold",
        label: $t("course.navItem.landing_page.editor.header_form.short_video"),
        placeholder: "www.youtube.com/watch?v=uYRq60G5XTk",
        helperMessage: $t("course.navItem.landing_page.editor.header_form.helper"),
        type: "text",
        value: course2.metadata.videoUrl
      },
      {
        value: ($$value) => {
          course2.metadata.videoUrl = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="mt-7"><p class="font-bold mb-3">${escape($t("course.navItem.landing_page.editor.header_form.replace_cover"))}</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $t("course.navItem.landing_page.editor.header_form.replace"),
        variant: VARIANTS.OUTLINED,
        onClick: widgetControl
      },
      {},
      {}
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_handleOpenWidget();
  $$unsubscribe_t();
  return $$rendered;
});
const RequirementForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { course: course2 } = $$props;
  let show;
  let hasBeenSet = false;
  function setter(value, setterKey) {
    if (typeof value === "undefined")
      return;
    const _course = cloneDeep(course2);
    set(_course, setterKey, value);
    course2 = _course;
  }
  function setDefaults(course22) {
    if (isEmpty(course22) || hasBeenSet)
      return;
    hasBeenSet = true;
    show = get(course22, `metadata.sectionDisplay.${NAV_ITEM_KEY.REQUIREMENT}`) ?? true;
  }
  if ($$props.course === void 0 && $$bindings.course && course2 !== void 0)
    $$bindings.course(course2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      setter(show, `metadata.sectionDisplay.${NAV_ITEM_KEY.REQUIREMENT}`);
    }
    {
      setDefaults(course2);
    }
    $$rendered = `<div>${validate_component(TextEditor, "TextEditor").$$render(
      $$result,
      { value: course2.metadata.requirements },
      {
        value: ($$value) => {
          course2.metadata.requirements = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="mt-5"><p class="font-bold">${escape($t("course.navItem.landing_page.editor.display_section"))}</p> ${validate_component(Toggle$1, "Toggle").$$render(
      $$result,
      { size: "sm", toggled: show },
      {
        toggled: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        labelB: () => {
          return `<span slot="labelB" style="color: gray">${escape($t("settings.landing_page.show_section"))}</span>`;
        },
        labelA: () => {
          return `<span slot="labelA" style="color: gray">${escape($t("settings.landing_page.hide_section"))}</span>`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const DescriptionForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { course: course2 } = $$props;
  let show;
  let hasBeenSet = false;
  function setter(value, setterKey) {
    if (typeof value === "undefined")
      return;
    const _course = cloneDeep(course2);
    set(_course, setterKey, value);
    course2 = _course;
  }
  function setDefaults(course22) {
    if (isEmpty(course22) || hasBeenSet)
      return;
    hasBeenSet = true;
    show = get(course22, `metadata.sectionDisplay.${NAV_ITEM_KEY.DESCRIPTION}`) ?? true;
  }
  if ($$props.course === void 0 && $$bindings.course && course2 !== void 0)
    $$bindings.course(course2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      setter(show, `metadata.sectionDisplay.${NAV_ITEM_KEY.DESCRIPTION}`);
    }
    {
      setDefaults(course2);
    }
    $$rendered = `<div>${validate_component(TextEditor, "TextEditor").$$render(
      $$result,
      { value: course2.metadata.description },
      {
        value: ($$value) => {
          course2.metadata.description = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="mt-5"><p class="font-bold">${escape($t("course.navItem.landing_page.editor.display_section"))}</p> ${validate_component(Toggle$1, "Toggle").$$render(
      $$result,
      { size: "sm", toggled: show },
      {
        toggled: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        labelB: () => {
          return `<span slot="labelB" style="color: gray">${escape($t("settings.landing_page.show_section"))}</span>`;
        },
        labelA: () => {
          return `<span slot="labelA" style="color: gray">${escape($t("settings.landing_page.hide_section"))}</span>`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const PricingForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { course: course2 } = $$props;
  let discount = 0;
  let paymentLink = "";
  let showDiscount = void 0;
  let giftToggled = void 0;
  let hasBeenSet = false;
  function setDefaults(course22) {
    console.log("\n\nsetDefaults course", course22);
    if (isEmpty(course22) || hasBeenSet)
      return;
    hasBeenSet = true;
    paymentLink = get(course22, "metadata.paymentLink", "");
    discount = get(course22, "metadata.discount", 0);
    showDiscount = get(course22, "metadata.showDiscount", false);
    giftToggled = get(course22, "metadata.reward.show", false);
  }
  function setter(value, setterKey) {
    if (typeof value !== "boolean" && !value)
      return;
    const _course = cloneDeep(course2);
    set(_course, setterKey, value);
    course2 = _course;
  }
  function handleChange(html) {
    const _course = cloneDeep(course2);
    set(_course, "metadata.reward.description", html);
    course2 = _course;
  }
  if ($$props.course === void 0 && $$bindings.course && course2 !== void 0)
    $$bindings.course(course2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      setter(showDiscount, "metadata.showDiscount");
    }
    {
      setter(paymentLink, "metadata.paymentLink");
    }
    {
      setter(discount, "metadata.discount");
    }
    {
      setter(giftToggled, "metadata.reward.show");
    }
    {
      setDefaults(course2);
    }
    $$rendered = `${typeof course2 !== "undefined" ? `${validate_component(Select$1, "Select").$$render(
      $$result,
      {
        labelText: $t("course.navItem.landing_page.editor.pricing_form.currency"),
        selected: course2.currency
      },
      {
        selected: ($$value) => {
          course2.currency = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(SelectItem$1, "SelectItem").$$render($$result, { value: "NGN" }, {}, {})} ${validate_component(SelectItem$1, "SelectItem").$$render($$result, { value: "USD" }, {}, {})}`;
        }
      }
    )} ${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        className: "mt-5",
        labelClassName: "font-bold",
        label: $t("course.navItem.landing_page.editor.pricing_form.cost"),
        type: "number",
        value: course2.cost
      },
      {
        value: ($$value) => {
          course2.cost = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${!isCourseFree(course2.cost || 0) ? `${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        className: "mt-5",
        labelClassName: "font-bold",
        label: $t("course.navItem.landing_page.editor.pricing_form.payment"),
        helperMessage: "Stripe, Lemon Squeezy or any payment link",
        value: paymentLink
      },
      {
        value: ($$value) => {
          paymentLink = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <div class="mt-5"> ${validate_component(Toggle$1, "Toggle").$$render(
      $$result,
      {
        labelText: $t("course.navItem.landing_page.editor.pricing_form.discount"),
        toggled: showDiscount
      },
      {
        toggled: ($$value) => {
          showDiscount = $$value;
          $$settled = false;
        }
      },
      {
        labelB: () => {
          return `<span slot="labelB">${escape($t("course.navItem.landing_page.editor.pricing_form.yes"))}</span>`;
        },
        labelA: () => {
          return `<span slot="labelA">${escape($t("course.navItem.landing_page.editor.pricing_form.no"))}</span>`;
        }
      }
    )}</div> ${showDiscount ? `${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        className: "mt-5",
        labelClassName: "font-bold",
        label: $t("course.navItem.landing_page.editor.pricing_form.percent"),
        type: "number",
        helperMessage: "In Percentage %",
        value: discount
      },
      {
        value: ($$value) => {
          discount = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <div class="mt-5"> ${validate_component(Toggle$1, "Toggle").$$render(
      $$result,
      {
        labelText: "Gift on Completion",
        toggled: giftToggled
      },
      {
        toggled: ($$value) => {
          giftToggled = $$value;
          $$settled = false;
        }
      },
      {
        labelB: () => {
          return `<span slot="labelB">${escape($t("course.navItem.landing_page.editor.pricing_form.yes"))}</span>`;
        },
        labelA: () => {
          return `<span slot="labelA">${escape($t("course.navItem.landing_page.editor.pricing_form.no"))}</span>`;
        }
      }
    )}</div> ${giftToggled ? `<p class="dark:text-white font-bold mt-5">${escape($t("course.navItem.landing_page.editor.pricing_form.gift"))}</p> <div class="h-2/5">${validate_component(TextEditor, "TextEditor").$$render(
      $$result,
      {
        value: get(course2, "metadata.reward.description", ""),
        onChange: handleChange
      },
      {},
      {}
    )}</div>` : ``}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const GoalsForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { course: course2 } = $$props;
  let show;
  let hasBeenSet = false;
  function setter(value, setterKey) {
    if (typeof value === "undefined")
      return;
    const _course = cloneDeep(course2);
    set(_course, setterKey, value);
    course2 = _course;
  }
  function setDefaults(course22) {
    if (isEmpty(course22) || hasBeenSet)
      return;
    hasBeenSet = true;
    show = get(course22, `metadata.sectionDisplay.${NAV_ITEM_KEY.GOALS}`) ?? true;
  }
  if ($$props.course === void 0 && $$bindings.course && course2 !== void 0)
    $$bindings.course(course2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      setter(show, `metadata.sectionDisplay.${NAV_ITEM_KEY.GOALS}`);
    }
    {
      setDefaults(course2);
    }
    $$rendered = `<div class="">${validate_component(TextEditor, "TextEditor").$$render(
      $$result,
      { value: course2.metadata.goals },
      {
        value: ($$value) => {
          course2.metadata.goals = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="mt-5"><p class="font-bold">${escape($t("course.navItem.landing_page.editor.display_section"))}</p> ${validate_component(Toggle$1, "Toggle").$$render(
      $$result,
      { size: "sm", toggled: show },
      {
        toggled: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        labelB: () => {
          return `<span slot="labelB" style="color: gray">${escape($t("settings.landing_page.show_section"))}</span>`;
        },
        labelA: () => {
          return `<span slot="labelA" style="color: gray">${escape($t("settings.landing_page.hide_section"))}</span>`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const ReviewFormEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { courseId } = $$props;
  let { reviews = [] } = $$props;
  let { review = {} } = $$props;
  let { errors = {} } = $$props;
  let { onExpand = () => {
  } } = $$props;
  let avatar;
  function deleteReviewData() {
    reviews = reviews.filter((r) => r.id !== review.id);
  }
  async function onAvatarChange(_avatar) {
    if (!_avatar)
      return;
    review.avatar_url = await uploadAvatar(courseId, _avatar);
  }
  if ($$props.courseId === void 0 && $$bindings.courseId && courseId !== void 0)
    $$bindings.courseId(courseId);
  if ($$props.reviews === void 0 && $$bindings.reviews && reviews !== void 0)
    $$bindings.reviews(reviews);
  if ($$props.review === void 0 && $$bindings.review && review !== void 0)
    $$bindings.review(review);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  if ($$props.onExpand === void 0 && $$bindings.onExpand && onExpand !== void 0)
    $$bindings.onExpand(onExpand);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      onAvatarChange(avatar);
    }
    review.rating = parseInt(review.rating);
    $$rendered = `<div class="flex items-center flex-col w-full">${validate_component(UploadImage, "UploadImage").$$render(
      $$result,
      {
        src: review.avatar_url,
        widthHeight: "w-20 h-20",
        errorMessage: errors.avatar_url,
        avatar
      },
      {
        avatar: ($$value) => {
          avatar = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        className: "mt-2 w-full",
        labelClassName: "font-normal",
        label: $t("course.navItem.landing_page.editor.reviews_form.fullname"),
        placeholder: "",
        type: "text",
        errorMessage: errors.name,
        value: review.name
      },
      {
        value: ($$value) => {
          review.name = $$value;
          $$settled = false;
        }
      },
      {}
    )}  ${validate_component(TextArea, "TextArea").$$render(
      $$result,
      {
        label: $t("course.navItem.landing_page.editor.reviews_form.description"),
        rows: "4",
        className: "mt-2 w-full",
        labelClassName: "font-normal",
        placeholder: "",
        errorMessage: errors.description,
        isAIEnabled: true,
        initAIPrompt: "Generate a 20 word review from a student saying good things about me teaching",
        aiAlignPopover: "top-right",
        value: review.description
      },
      {
        value: ($$value) => {
          review.description = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex justify-between w-full items-center mt-2"> ${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        className: "mt-2 w-20",
        labelClassName: "font-normal",
        label: $t("course.navItem.landing_page.editor.reviews_form.rating"),
        type: "number",
        min: 1,
        max: 5,
        errorMessage: errors.rating,
        value: review.rating
      },
      {
        value: ($$value) => {
          review.rating = $$value;
          $$settled = false;
        }
      },
      {}
    )}  <div class="w-24">${validate_component(Toggle$1, "Toggle").$$render(
      $$result,
      {
        labelText: $t("course.navItem.landing_page.editor.reviews_form.hide"),
        size: "sm",
        toggled: review.hide
      },
      {
        toggled: ($$value) => {
          review.hide = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="mt-8 flex justify-between items-center w-full">${validate_component(IconButton, "IconButton").$$render(
      $$result,
      {
        contained: true,
        value: "delete",
        onClick: deleteReviewData,
        size: "large"
      },
      {},
      {
        default: () => {
          return `${validate_component(TrashCan, "TrashCanIcon").$$render(
            $$result,
            {
              size: 24,
              class: "carbon-icon dark:text-white"
            },
            {},
            {}
          )}`;
        }
      }
    )} ${validate_component(IconButton, "IconButton").$$render(
      $$result,
      {
        contained: true,
        value: "save",
        onClick: () => onExpand(review.id),
        size: "large"
      },
      {},
      {
        default: () => {
          return `${validate_component(Save, "SaveIcon").$$render(
            $$result,
            {
              size: 24,
              class: "carbon-icon dark:text-white"
            },
            {},
            {}
          )}`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const ReviewsForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $isMobile, $$unsubscribe_isMobile;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  let { course: course2 = {} } = $$props;
  let reviews = get(course2, "metadata.reviews", []);
  let reviewToExpand = null;
  let errors = {};
  function setter(value, setterKey) {
    if (!value)
      return;
    const _course = cloneDeep(course2);
    set(_course, setterKey, value);
    course2 = _course;
  }
  function addReviewForm() {
    const _review = {
      id: (/* @__PURE__ */ new Date()).getTime(),
      hide: false,
      name: "",
      avatar_url: "",
      rating: 1,
      created_at: (/* @__PURE__ */ new Date()).getTime(),
      description: ""
    };
    reviews = [...reviews, _review];
    reviewToExpand = _review.id;
  }
  function validateReviews(id) {
    const review = reviews.find((r) => r.id === id);
    const reviewSchema = z.object({
      name: z.string().min(5, {
        message: `${$t("course.navItem.landing_page.editor.reviews_form.validations.name.min_char")}`,
        invalid_type_error: `${$t("course.navItem.landing_page.editor.reviews_form.validations.invalid_type_error")}`
      }),
      avatar_url: z.string().min(6, {
        message: `${$t("course.navItem.landing_page.editor.reviews_form.validations.avatar_url.message")}`,
        invalid_type_error: `${$t("course.navItem.landing_page.editor.reviews_form.validations.invalid_type_error")}`
      }),
      rating: z.number().min(1, {
        message: `${$t("course.navItem.landing_page.editor.reviews_form.validations.rating.message")}`,
        invalid_type_error: `${$t("course.navItem.landing_page.editor.reviews_form.validations.invalid_type_error")}`
      }).max(5, {
        message: `${$t("course.navItem.landing_page.editor.reviews_form.validations.rating.message")}`,
        invalid_type_error: `${$t("course.navItem.landing_page.editor.reviews_form.validations.invalid_type_error")}`
      }),
      description: z.string().min(10, {
        message: `${$t("course.navItem.landing_page.editor.reviews_form.validations.description.min_char")}`,
        invalid_type_error: `${$t("course.navItem.landing_page.editor.reviews_form.validations.invalid_type_error")}`
      })
    });
    const { error } = reviewSchema.safeParse(review);
    return processErrors(error);
  }
  function onExpand(id) {
    errors = {};
    if (reviewToExpand) {
      const validationRes = validateReviews(reviewToExpand);
      if (Object.keys(validationRes).length) {
        errors = Object.assign(errors, validationRes);
        return;
      }
    }
    if (id === reviewToExpand) {
      reviewToExpand = null;
      return;
    }
    reviewToExpand = id;
  }
  if ($$props.course === void 0 && $$bindings.course && course2 !== void 0)
    $$bindings.course(course2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      setter(reviews, "metadata.reviews");
    }
    $$rendered = ` <section id="reviews"><div class="">${each(reviews || [], (review) => {
      return `<div${add_attribute("id", review.id, 0)} class="relative flex items-center flex-col border border-gray-300 rounded-lg p-2 my-2.5">${review.id !== reviewToExpand ? ` <div class="flex w-full justify-between items-center">${validate_component(Avatar, "Avatar").$$render(
        $$result,
        {
          src: review.avatar_url,
          name: review.name,
          className: "mt-1"
        },
        {},
        {}
      )} <p class="text-sm">${escape(review.name)}</p> ${validate_component(IconButton, "IconButton").$$render(
        $$result,
        {
          value: "expand",
          onClick: () => onExpand(review.id),
          size: $isMobile ? "large" : "small"
        },
        {},
        {
          default: () => {
            return `${validate_component(ChevronDown, "ChevronDownIcon").$$render(
              $$result,
              {
                size: 16,
                class: "carbon-icon dark:text-white"
              },
              {},
              {}
            )} `;
          }
        }
      )} </div>` : ``}  ${review.id === reviewToExpand ? `${validate_component(ReviewFormEditor, "ReviewFormEditor").$$render(
        $$result,
        {
          errors,
          courseId: course2.id,
          onExpand,
          reviews,
          review
        },
        {
          reviews: ($$value) => {
            reviews = $$value;
            $$settled = false;
          },
          review: ($$value) => {
            review = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``} </div>`;
    })}  ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $t("course.navItem.landing_page.editor.reviews_form.add_reviews"),
        variant: VARIANTS.CONTAINED,
        onClick: addReviewForm,
        className: "w-5 rounded-md mt-8"
      },
      {},
      {}
    )}</div></section>`;
  } while (!$$settled);
  $$unsubscribe_t();
  $$unsubscribe_isMobile();
  return $$rendered;
});
const CertificateForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { course: course2 } = $$props;
  let avatar;
  let show;
  let templateUrl;
  let hasBeenSet = false;
  let isUploading = false;
  function setter(value, setterKey) {
    if (typeof value === "undefined")
      return;
    const _course = cloneDeep(course2);
    set(_course, setterKey, value);
    course2 = _course;
  }
  async function onTemplateChange(_avatar) {
    if (!_avatar || !course2.id)
      return;
    isUploading = true;
    const logo = await uploadAvatar(course2.id, _avatar);
    if (logo) {
      templateUrl = logo;
      setter(templateUrl, "metadata.certificate.templateUrl");
    }
    isUploading = false;
  }
  function setDefaults(course22) {
    if (isEmpty(course22) || hasBeenSet)
      return;
    hasBeenSet = true;
    show = get(course22, `metadata.sectionDisplay.${NAV_ITEM_KEY.CERTIFICATE}`) ?? true;
    templateUrl = get(course22, "metadata.certificate.templateUrl", "/images/certificate-template.svg");
  }
  if ($$props.course === void 0 && $$bindings.course && course2 !== void 0)
    $$bindings.course(course2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      onTemplateChange(avatar);
    }
    {
      setter(show, `metadata.sectionDisplay.${NAV_ITEM_KEY.CERTIFICATE}`);
    }
    {
      setDefaults(course2);
    }
    $$rendered = `<div class="mt-5 border-bottom-c"><p class="font-bold">${escape($t("course.navItem.landing_page.editor.certificate_form.upload_template"))}</p> ${validate_component(UploadImage, "UploadImage").$$render(
      $$result,
      {
        src: templateUrl,
        shape: "rounded-none",
        avatar,
        isUploading
      },
      {
        avatar: ($$value) => {
          avatar = $$value;
          $$settled = false;
        },
        isUploading: ($$value) => {
          isUploading = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="mt-5"><p class="font-bold">${escape($t("course.navItem.landing_page.editor.display_section"))}</p> ${validate_component(Toggle$1, "Toggle").$$render(
      $$result,
      { size: "sm", toggled: show },
      {
        toggled: ($$value) => {
          show = $$value;
          $$settled = false;
        }
      },
      {
        labelB: () => {
          return `<span slot="labelB" style="color: gray">${escape($t("settings.landing_page.show_section"))}</span>`;
        },
        labelA: () => {
          return `<span slot="labelA" style="color: gray">${escape($t("settings.landing_page.hide_section"))}</span>`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const InstructorForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { course: course2 } = $$props;
  let name;
  let role;
  let imgUrl;
  let description;
  let courseNo;
  let avatar;
  let hasBeenSet = false;
  let isUploading = false;
  function setter(value, setterKey) {
    if (!value)
      return;
    const _course = cloneDeep(course2);
    set(_course, setterKey, value);
    course2 = _course;
  }
  async function onAvatarChange(_avatar) {
    if (!_avatar || !course2.id)
      return;
    isUploading = true;
    const logo = await uploadAvatar(course2.id, _avatar);
    if (!logo)
      return;
    imgUrl = logo;
    isUploading = false;
  }
  function setDefaults(course22) {
    if (isEmpty(course22) || hasBeenSet)
      return;
    hasBeenSet = true;
    name = get(course22, "metadata.instructor.name");
    role = get(course22, "metadata.instructor.role");
    imgUrl = get(course22, "metadata.instructor.imgUrl");
    description = get(course22, "metadata.instructor.description");
    courseNo = get(course22, "metadata.instructor.courseNo");
  }
  if ($$props.course === void 0 && $$bindings.course && course2 !== void 0)
    $$bindings.course(course2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      setter(name, "metadata.instructor.name");
    }
    {
      setter(role, "metadata.instructor.role");
    }
    {
      setter(imgUrl, "metadata.instructor.imgUrl");
    }
    {
      setter(description, "metadata.instructor.description");
    }
    {
      setter(courseNo, "metadata.instructor.courseNo");
    }
    {
      onAvatarChange(avatar);
    }
    {
      setDefaults(course2);
    }
    $$rendered = `<div class="mt-5 w-full"><label for="upload" class="font-bold">${escape($t("course.navItem.landing_page.editor.instructor_form.upload"))}</label> <div class="w-full flex justify-center">${validate_component(UploadImage, "UploadImage").$$render(
      $$result,
      { src: imgUrl, avatar, isUploading },
      {
        avatar: ($$value) => {
          avatar = $$value;
          $$settled = false;
        },
        isUploading: ($$value) => {
          isUploading = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> ${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        className: "mt-5",
        labelClassName: "font-bold",
        label: $t("course.navItem.landing_page.editor.instructor_form.name"),
        placeholder: $t("course.navItem.landing_page.editor.instructor_form.name_placeholder"),
        value: name
      },
      {
        value: ($$value) => {
          name = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        className: "mt-5",
        labelClassName: "font-bold",
        label: $t("course.navItem.landing_page.editor.instructor_form.role"),
        placeholder: "e.g Software developer",
        value: role
      },
      {
        value: ($$value) => {
          role = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(TextArea, "TextArea").$$render(
      $$result,
      {
        label: $t("course.navItem.landing_page.editor.instructor_form.about"),
        placeholder: $t("course.navItem.landing_page.editor.instructor_form.about_placeholder"),
        rows: 6,
        className: "mt-5",
        labelClassName: "font-bold",
        value: description
      },
      {
        value: ($$value) => {
          description = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        className: "mt-5",
        labelClassName: "font-bold",
        label: $t("course.navItem.landing_page.editor.instructor_form.total"),
        type: "number",
        value: courseNo
      },
      {
        value: ($$value) => {
          courseNo = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const css$1 = {
  code: ".title-content.svelte-rjb3tw{height:90%}.toggler.svelte-rjb3tw{right:-15px;z-index:10;border:1px solid var(--border-color);top:50px;height:fit-content;background:var(--border-color)}@media screen and (max-width: 767px){.toggler.svelte-rjb3tw{right:-25px}}",
  map: null
};
let borderBottomGrey = "border-r-0 border-b border-l-0 border-gray-300";
const Editor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrgDomain, $$unsubscribe_currentOrgDomain;
  let $t, $$unsubscribe_t;
  let $isMobile, $$unsubscribe_isMobile;
  $$unsubscribe_currentOrgDomain = subscribe(currentOrgDomain, (value) => $currentOrgDomain = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  let { course: course2 } = $$props;
  let { courseId } = $$props;
  let { syncCourseStore } = $$props;
  let loading = false;
  let show = false;
  const sections = [
    {
      key: 1,
      path: "",
      title: $t("course.navItem.landing_page.editor.title.header")
    },
    {
      key: 2,
      path: "metadata.requirements",
      title: $t("course.navItem.landing_page.editor.title.requirement"),
      enableAIWriter: true,
      initPrompt: $t("course.navItem.landing_page.editor.title.requirement")
    },
    {
      key: 3,
      path: "metadata.description",
      title: $t("course.navItem.landing_page.editor.title.description"),
      enableAIWriter: true,
      initPrompt: "Please write a detailed course description for this course:"
    },
    {
      key: 4,
      path: "metadata.goals",
      title: $t("course.navItem.landing_page.editor.title.goals"),
      enableAIWriter: true,
      initPrompt: "What should a student expect to learn from this course:"
    },
    {
      key: 5,
      path: "",
      title: $t("course.navItem.landing_page.editor.title.certificate")
    },
    {
      key: 6,
      path: "",
      title: $t("course.navItem.landing_page.editor.title.reviews")
    },
    {
      key: 7,
      path: "",
      title: $t("course.navItem.landing_page.editor.title.instructor")
    },
    {
      key: 8,
      path: "",
      title: $t("course.navItem.landing_page.editor.title.pricing")
    }
  ];
  let selectedSection = null;
  function handleClose() {
    if (!selectedSection) {
      goto(`/courses/${courseId}`);
    }
    selectedSection = null;
  }
  async function handleSave() {
    loading = true;
    course2.slug = course2.slug || generateSlug(course2.title);
    await updateCourse(courseId, void 0, {
      ...course2,
      attendance: void 0,
      group: void 0,
      lessons: void 0,
      lesson_section: void 0,
      polls: void 0,
      slug: course2.slug
    });
    loading = false;
    syncCourseStore(course2);
  }
  async function handlePreview() {
    const link = `${$currentOrgDomain}/course/${course2.slug}`;
    window.open(link, "_blank");
  }
  if ($$props.course === void 0 && $$bindings.course && course2 !== void 0)
    $$bindings.course(course2);
  if ($$props.courseId === void 0 && $$bindings.courseId && courseId !== void 0)
    $$bindings.courseId(courseId);
  if ($$props.syncCourseStore === void 0 && $$bindings.syncCourseStore && syncCourseStore !== void 0)
    $$bindings.syncCourseStore(syncCourseStore);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<aside class="${escape(
      null_to_empty(`${show ? "-translate-x-[100%] fixed md:absolute z-[50]" : "translate-x-0 fixed md:relative z-[50]"}left-0 z-[50] transition w-[90vw] min-w-[300px] max-w-[350px] bg-gray-100 dark:bg-neutral-800 h-full border border-l-0 border-t-0 border-b-0 border-r-1`),
      true
    ) + " svelte-rjb3tw"}"><div class="toggler rounded-full shadow-lg absolute svelte-rjb3tw">${validate_component(IconButton, "IconButton").$$render(
      $$result,
      {
        value: "toggle",
        onClick: () => show = !show,
        size: $isMobile ? "large" : "small",
        color: "text-black",
        toolTipProps: $isMobile ? void 0 : {
          title: "Toggle editor",
          direction: "right",
          hotkeys: []
        }
      },
      {},
      {
        default: () => {
          return `${show ? `${validate_component(ChevronRight, "ChevronRightIcon").$$render($$result, { size: 16 }, {}, {})}` : `${validate_component(ChevronLeft, "ChevronLeftIcon").$$render($$result, { size: 16 }, {}, {})}`}`;
        }
      }
    )}</div> <div class="h-full flex flex-col">${!selectedSection ? `<div class="flex justify-between items-center px-2 w-full">${validate_component(Close, "CloseButton").$$render($$result, { onClick: handleClose }, {}, {})} <div class="flex items-center">${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $t("course.navItem.landing_page.editor.save"),
        type: "button",
        className: "mr-1",
        variant: VARIANTS.OUTLINED,
        onClick: handleSave,
        isLoading: loading
      },
      {},
      {}
    )} ${validate_component(IconButton, "IconButton").$$render(
      $$result,
      {
        onClick: handlePreview,
        disabled: loading || !course2.slug
      },
      {},
      {
        default: () => {
          return `${validate_component(ArrowUpRight, "ArrowUpRightIcon").$$render(
            $$result,
            {
              size: 24,
              class: "carbon-icon dark:text-white",
              title: "Preview"
            },
            {},
            {}
          )}`;
        }
      }
    )}</div></div> <div class="flex justify-between items-center px-2 w-full mb-2"><h3 class="dark:text-white">${escape($t("course.navItem.landing_page.editor.page_builder"))}</h3></div> ${each(sections, (section, index) => {
      return `<button class="${"w-full flex items-center justify-between px-2 py-3 border border-l-0 " + escape(index + 1 < sections.length && "border-b-0", true) + " border-gray-300 svelte-rjb3tw"}"><p class="dark:text-white mr-2">${escape(section.title)} ${escape($t("course.navItem.landing_page.editor.section"))}</p> ${validate_component(ChevronRight, "ChevronRightIcon").$$render($$result, { size: 24, class: "carbon-class" }, {}, {})} </button>`;
    })}` : ` <div class="${"flex items-center " + escape(borderBottomGrey, true) + " w-full svelte-rjb3tw"}">${validate_component(IconButton, "IconButton").$$render($$result, { onClick: handleClose }, {}, {
      default: () => {
        return `${validate_component(ArrowLeft, "ArrowLeftIcon").$$render(
          $$result,
          {
            size: 24,
            class: "carbon-icon dark:text-white",
            title: "Go back"
          },
          {},
          {}
        )}`;
      }
    })} <div class="flex items-center"><h3 class="dark:text-white">${escape(selectedSection.title)}</h3> ${selectedSection.enableAIWriter ? `${validate_component(CustomPromptBtn, "CustomPromptBtn").$$render(
      $$result,
      {
        className: "w-fit ml-2",
        alignPopover: "bottom-left",
        defaultPrompt: `${selectedSection.initPrompt} ${course2.title}. Please format in html`,
        isHTML: true,
        handleInsert: (v) => {
          if (!selectedSection)
            return;
          const _course = cloneDeep(course2);
          set(_course, selectedSection.path, v);
          course2 = _course;
        }
      },
      {},
      {}
    )}` : ``}</div></div> <div class="title-content p-2 overflow-y-auto svelte-rjb3tw">${selectedSection.key === 1 ? `${validate_component(HeaderForm, "HeaderForm").$$render(
      $$result,
      { course: course2 },
      {
        course: ($$value) => {
          course2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${selectedSection.key === 2 ? `${validate_component(RequirementForm, "RequirementForm").$$render(
      $$result,
      { course: course2 },
      {
        course: ($$value) => {
          course2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${selectedSection.key === 3 ? `${validate_component(DescriptionForm, "DescriptionForm").$$render(
      $$result,
      { course: course2 },
      {
        course: ($$value) => {
          course2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${selectedSection.key === 4 ? `${validate_component(GoalsForm, "GoalsForm").$$render(
      $$result,
      { course: course2 },
      {
        course: ($$value) => {
          course2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${selectedSection.key === 5 ? `${validate_component(CertificateForm, "CertificateForm").$$render(
      $$result,
      { course: course2 },
      {
        course: ($$value) => {
          course2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${selectedSection.key === 6 ? `${validate_component(ReviewsForm, "ReviewsForm").$$render(
      $$result,
      { course: course2 },
      {
        course: ($$value) => {
          course2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${selectedSection.key === 7 ? `${validate_component(InstructorForm, "InstructorForm").$$render(
      $$result,
      { course: course2 },
      {
        course: ($$value) => {
          course2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${selectedSection.key === 8 ? `${validate_component(PricingForm, "PricingForm").$$render(
      $$result,
      { course: course2 },
      {
        course: ($$value) => {
          course2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`}`}`}`}`}`}`}</div>`}</div> </aside>`;
  } while (!$$settled);
  $$unsubscribe_currentOrgDomain();
  $$unsubscribe_t();
  $$unsubscribe_isMobile();
  return $$rendered;
});
const css = {
  code: ".rightBar.svelte-1h91818{flex-grow:1;width:100%;height:100%;overflow-x:hidden;overflow-y:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lessonSections, $$unsubscribe_lessonSections;
  let $lessons, $$unsubscribe_lessons;
  let $course, $$unsubscribe_course;
  $$unsubscribe_lessonSections = subscribe(lessonSections, (value) => $lessonSections = value);
  $$unsubscribe_lessons = subscribe(lessons, (value) => $lessons = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  let { data } = $$props;
  const { courseId } = data;
  let courseData = $course;
  function setCourseData(course2, lessons2, lesson_section) {
    courseData = {
      ...course2,
      lessons: lessons2,
      lesson_section
    };
  }
  function syncCourseStore(_courseData) {
    set_store_value(course, $course = _courseData, $course);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      setCourseData($course, $lessons, $lessonSections);
    }
    $$rendered = `<div class="absolute flex inset-0 z-50 bg-white">${validate_component(Editor, "Editor").$$render(
      $$result,
      {
        courseId,
        syncCourseStore,
        course: courseData
      },
      {
        course: ($$value) => {
          courseData = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="rightBar svelte-1h91818">${validate_component(CourseLandingPage, "CourseLandingPage").$$render(
      $$result,
      { editMode: true, courseData },
      {
        courseData: ($$value) => {
          courseData = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> </div>`;
  } while (!$$settled);
  $$unsubscribe_lessonSections();
  $$unsubscribe_lessons();
  $$unsubscribe_course();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2c7c1400.js.map
