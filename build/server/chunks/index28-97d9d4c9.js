import { t as t2 } from './translations-90190f83.js';
import './_sentry-release-injection-file-6be6a010.js';
import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, b as each, v as validate_component, a as add_attribute, e as escape } from './ssr-10c5b872.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { T as TextField } from './TextField-86164973.js';
import { H as HTMLRender } from './HTMLRender-9a6e04f8.js';
import { b as snackbar } from './store2-dc811f17.js';
import { S as SkeletonText$1 } from './SkeletonText-d2851876.js';
import { S as SkeletonPlaceholder$1 } from './SkeletonPlaceholder-be3b5db2.js';
import { T as TextArea } from './TextArea-9e2a2a4d.js';
import { m as QUESTION_TYPE } from './index18-b03e5e10.js';
import { t as toggleConfetti } from './index25-9c55d031.js';
import { c as course } from './store4-ef39175f.js';
import { C as COURSE_TYPE } from './index15-c5761f1e.js';
import { s as supabase } from './supabase-cbc58bc2.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5c7787af-b5f3-4e59-98e8-0eb92fd1eeaf", e._sentryDebugIdIdentifier = "sentry-dbid-5c7787af-b5f3-4e59-98e8-0eb92fd1eeaf");
  } catch (e2) {
  }
}();
const STATUS = {
  SUBMITTED: 1,
  IN_PROGRESS: 2,
  GRADED: 3
};
const CodeSnippet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { code = "" } = $$props;
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  return `<div class="bg-gray-200 dark:bg-gray-500 p-5 rounded-md mb-3"><!-- HTML_TAG_START -->${code}<!-- HTML_TAG_END --></div>`;
});
const RadioItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { value = "" } = $$props;
  let { checked = false } = $$props;
  let { name = "" } = $$props;
  let { isEditable = false } = $$props;
  let { disabled = false } = $$props;
  let { className = "" } = $$props;
  let { onChange = () => {
  } } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.isEditable === void 0 && $$bindings.isEditable && isEditable !== void 0)
    $$bindings.isEditable(isEditable);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<label class="${escape(className, true) + " inline-flex items-center w-full " + escape(disabled ? "cursor-not-allowed" : "cursor-pointer", true)}"><input class="form-radio" type="radio" ${checked ? "checked" : ""}${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} ${disabled || isEditable ? "disabled" : ""}> ${isEditable ? `<div class="w-2/4">${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        placeholder: "Your option",
        className: "ml-1",
        type: "text",
        onChange,
        value: label
      },
      {
        value: ($$value) => {
          label = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `<span class="dark:text-white ml-2">${escape(label)}</span>`} ${slots.iconbutton ? slots.iconbutton({}) : ``}</label>`;
  } while (!$$settled);
  return $$rendered;
});
const Grade = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { gradeMax = 0 } = $$props;
  let { disableGrading = false } = $$props;
  let { grade = 0 } = $$props;
  if ($$props.gradeMax === void 0 && $$bindings.gradeMax && gradeMax !== void 0)
    $$bindings.gradeMax(gradeMax);
  if ($$props.disableGrading === void 0 && $$bindings.disableGrading && disableGrading !== void 0)
    $$bindings.disableGrading(disableGrading);
  if ($$props.grade === void 0 && $$bindings.grade && grade !== void 0)
    $$bindings.grade(grade);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (grade && grade > gradeMax) {
        snackbar.error("grade cant be more than max value");
        grade = gradeMax;
      }
    }
    $$rendered = `<div class="flex items-center font-semibold">${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        placeholder: $t("course.navItem.lessons.exercises.new_exercise_modal.points"),
        max: gradeMax,
        type: "number",
        className: "w-12",
        inputClassName: "h-10",
        isDisabled: disableGrading,
        value: grade
      },
      {
        value: ($$value) => {
          grade = $$value;
          $$settled = false;
        }
      },
      {}
    )} <p class="dark:text-white ml-2 text-base flex items-center font-semibold"><span class="mr-1" data-svelte-h="svelte-3q8uiv">/</span> <span>${escape(gradeMax)}</span></p></div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const ReasonBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { reason = "" } = $$props;
  let { isLoading = false } = $$props;
  let { rejectGrade = () => {
  } } = $$props;
  let { acceptGrade = () => {
  } } = $$props;
  if ($$props.reason === void 0 && $$bindings.reason && reason !== void 0)
    $$bindings.reason(reason);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  if ($$props.rejectGrade === void 0 && $$bindings.rejectGrade && rejectGrade !== void 0)
    $$bindings.rejectGrade(rejectGrade);
  if ($$props.acceptGrade === void 0 && $$bindings.acceptGrade && acceptGrade !== void 0)
    $$bindings.acceptGrade(acceptGrade);
  $$unsubscribe_t();
  return `<div class="border rounded-md">${isLoading ? `<div class="flex w-full px-2 py-4"><div class="w-full flex flex-row items-start space-x-4"><img src="/ai.svg" alt="alt" class="animate-pulse"> <div class="w-full">${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { width: "100%", paragraph: true, lines: 3 }, {}, {})}</div></div> <div class="flex space-x-2">${validate_component(SkeletonPlaceholder$1, "SkeletonPlaceholder").$$render($$result, { style: "height: 2rem; width: 5rem;" }, {}, {})} ${validate_component(SkeletonPlaceholder$1, "SkeletonPlaceholder").$$render($$result, { style: "height: 2rem; width: 5rem;" }, {}, {})}</div></div>` : `<div class="flex items-start justify-between px-2 py-4"><div class="flex items-center space-x-4"><img src="/ai.svg" alt="alt"> <p class="font-normal text-sm">${escape(reason)}</p></div> <div class="flex space-x-2">${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      variant: VARIANTS.CONTAINED_SUCCESS,
      label: $t("course.navItem.submissions.grading_modal.accept_grade"),
      className: "rounded-none py-1 px-2",
      disablePadding: true,
      onClick: acceptGrade
    },
    {},
    {}
  )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      variant: VARIANTS.CONTAINED_DANGER,
      label: $t("course.navItem.submissions.grading_modal.reject_grade"),
      className: "rounded-none py-1 px-2",
      disablePadding: true,
      onClick: rejectGrade
    },
    {},
    {}
  )}</div></div>`}</div>`;
});
const QuestionTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { title } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<span class="flex gap-2"><p class="text-md font-medium">${escape(index)}</p> <p class="text-md font-medium">${escape(title)}</p></span>`;
});
const RadioQuestion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { title = "" } = $$props;
  let { index = 1 } = $$props;
  let { code = "" } = $$props;
  let { name = "" } = $$props;
  let { options = [] } = $$props;
  let { onSubmit = (a, b) => {
  } } = $$props;
  let { onPrevious = () => {
  } } = $$props;
  let { defaultValue = "" } = $$props;
  let { disablePreviousButton = false } = $$props;
  let { disabled = false } = $$props;
  let { isPreview = false } = $$props;
  let { nextButtonProps = { isDisabled: false, isActive: false } } = $$props;
  let { isLast = false } = $$props;
  let { grade } = $$props;
  let { gradeMax = 0 } = $$props;
  let { disableGrading = false } = $$props;
  let { disableOptContainerMargin = false } = $$props;
  let { isGradeWithAI = false } = $$props;
  let { reason } = $$props;
  let { isLoading = false } = $$props;
  let { hideGrading = false } = $$props;
  let gradeWithAI = false;
  function handlePrevious(event) {
    event.preventDefault();
    onPrevious();
  }
  function getValidationClassName(option) {
    if (defaultValue.includes(option.value)) {
      if (option.is_correct) {
        return "border-green-700";
      } else {
        return "border-red-700";
      }
    }
    return "";
  }
  function acceptGrade() {
    gradeWithAI = false;
  }
  function rejectGrade() {
    gradeWithAI = false;
    grade = 0;
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.onSubmit === void 0 && $$bindings.onSubmit && onSubmit !== void 0)
    $$bindings.onSubmit(onSubmit);
  if ($$props.onPrevious === void 0 && $$bindings.onPrevious && onPrevious !== void 0)
    $$bindings.onPrevious(onPrevious);
  if ($$props.defaultValue === void 0 && $$bindings.defaultValue && defaultValue !== void 0)
    $$bindings.defaultValue(defaultValue);
  if ($$props.disablePreviousButton === void 0 && $$bindings.disablePreviousButton && disablePreviousButton !== void 0)
    $$bindings.disablePreviousButton(disablePreviousButton);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.isPreview === void 0 && $$bindings.isPreview && isPreview !== void 0)
    $$bindings.isPreview(isPreview);
  if ($$props.nextButtonProps === void 0 && $$bindings.nextButtonProps && nextButtonProps !== void 0)
    $$bindings.nextButtonProps(nextButtonProps);
  if ($$props.isLast === void 0 && $$bindings.isLast && isLast !== void 0)
    $$bindings.isLast(isLast);
  if ($$props.grade === void 0 && $$bindings.grade && grade !== void 0)
    $$bindings.grade(grade);
  if ($$props.gradeMax === void 0 && $$bindings.gradeMax && gradeMax !== void 0)
    $$bindings.gradeMax(gradeMax);
  if ($$props.disableGrading === void 0 && $$bindings.disableGrading && disableGrading !== void 0)
    $$bindings.disableGrading(disableGrading);
  if ($$props.disableOptContainerMargin === void 0 && $$bindings.disableOptContainerMargin && disableOptContainerMargin !== void 0)
    $$bindings.disableOptContainerMargin(disableOptContainerMargin);
  if ($$props.isGradeWithAI === void 0 && $$bindings.isGradeWithAI && isGradeWithAI !== void 0)
    $$bindings.isGradeWithAI(isGradeWithAI);
  if ($$props.reason === void 0 && $$bindings.reason && reason !== void 0)
    $$bindings.reason(reason);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  if ($$props.hideGrading === void 0 && $$bindings.hideGrading && hideGrading !== void 0)
    $$bindings.hideGrading(hideGrading);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    gradeWithAI = isGradeWithAI;
    $$rendered = `<form><div class="flex items-center justify-between">${validate_component(HTMLRender, "HtmlRender").$$render(
      $$result,
      {
        className: "mt-4 " + (typeof grade === "number" && "w-4/5"),
        disableMaxWidth: true
      },
      {},
      {
        content: () => {
          return `${validate_component(QuestionTitle, "QuestionTitle").$$render($$result, { index, title }, {}, {})}`;
        }
      }
    )} ${!hideGrading ? `${validate_component(Grade, "Grade").$$render(
      $$result,
      { gradeMax, disableGrading, grade },
      {
        grade: ($$value) => {
          grade = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div> ${code ? `${validate_component(CodeSnippet, "CodeSnippet").$$render($$result, { code }, {}, {})}` : ``} <div${add_attribute("class", disableOptContainerMargin ? "" : "ml-4", 0)}>${each(options, (option) => {
      return `<button class="${"cursor-pointer text-left my-2 border-2 border-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-800 w-full " + escape(getValidationClassName(option), true)}" type="button">${validate_component(RadioItem, "RadioItem").$$render(
        $$result,
        {
          className: "p-2",
          name,
          value: option.value,
          checked: defaultValue.includes(option.value) && option.is_correct,
          label: option.label || option.value,
          disabled
        },
        {},
        {}
      )} </button>`;
    })}</div> ${gradeWithAI ? `${validate_component(ReasonBox, "ReasonBox").$$render(
      $$result,
      {
        reason,
        isLoading,
        acceptGrade,
        rejectGrade
      },
      {},
      {}
    )}` : ``} ${!isPreview ? `<div class="mt-3 flex items-center justify-between w-full">${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        onClick: handlePrevious,
        label: $t("course.navItem.lessons.exercises.all_exercises.previous"),
        isDisabled: disablePreviousButton,
        variant: VARIANTS.OUTLINED
      },
      {},
      {}
    )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        variant: nextButtonProps.isActive ? VARIANTS.CONTAINED : VARIANTS.OUTLINED,
        type: "submit",
        label: isLast ? $t("course.navItem.lessons.exercises.all_exercises.finish") : $t("course.navItem.lessons.exercises.all_exercises.next"),
        isDisabled: nextButtonProps.isDisabled,
        name
      },
      {},
      {}
    )}</div>` : ``}</form>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { value = "" } = $$props;
  let { checked = false } = $$props;
  let { name = "" } = $$props;
  let { isEditable = false } = $$props;
  let { disabled = false } = $$props;
  let { className = "" } = $$props;
  let { onChange = () => {
  } } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.isEditable === void 0 && $$bindings.isEditable && isEditable !== void 0)
    $$bindings.isEditable(isEditable);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<label class="${escape(className, true) + " inline-flex items-center w-full " + escape(disabled ? "cursor-not-allowed" : "cursor-pointer", true)}"><input type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} ${disabled || isEditable ? "disabled" : ""}${add_attribute("checked", checked, 1)}> ${isEditable ? `<div class="w-2/4">${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        placeholder: "Your option",
        className: "ml-1",
        type: "text",
        onChange,
        value: label
      },
      {
        value: ($$value) => {
          label = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `<span class="dark:text-white ml-2">${escape(label)}</span>`} ${slots.iconbutton ? slots.iconbutton({}) : ``}</label>`;
  } while (!$$settled);
  return $$rendered;
});
const CheckboxQuestion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { title = "" } = $$props;
  let { index = 1 } = $$props;
  let { code } = $$props;
  let { name = "" } = $$props;
  let { options = [] } = $$props;
  let { onSubmit = (a, b) => {
  } } = $$props;
  let { onPrevious = () => {
  } } = $$props;
  let { defaultValue = [] } = $$props;
  let { disablePreviousButton = false } = $$props;
  let { isLast = false } = $$props;
  let { disabled = false } = $$props;
  let { isPreview = false } = $$props;
  let { nextButtonProps = { isDisabled: false, isActive: false } } = $$props;
  let { grade } = $$props;
  let { gradeMax = 0 } = $$props;
  let { disableGrading = false } = $$props;
  let { isGradeWithAI = false } = $$props;
  let { reason } = $$props;
  let { isLoading = false } = $$props;
  let { hideGrading = false } = $$props;
  let gradeWithAI = false;
  function handlePrevious(event) {
    event.preventDefault();
    onPrevious();
  }
  function getValidationClassName(option) {
    if (defaultValue.includes(option.value)) {
      if (option.is_correct) {
        return "border-green-700";
      } else {
        return "border-red-700";
      }
    }
    return "";
  }
  function acceptGrade() {
    gradeWithAI = false;
  }
  function rejectGrade() {
    gradeWithAI = false;
    grade = 0;
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.onSubmit === void 0 && $$bindings.onSubmit && onSubmit !== void 0)
    $$bindings.onSubmit(onSubmit);
  if ($$props.onPrevious === void 0 && $$bindings.onPrevious && onPrevious !== void 0)
    $$bindings.onPrevious(onPrevious);
  if ($$props.defaultValue === void 0 && $$bindings.defaultValue && defaultValue !== void 0)
    $$bindings.defaultValue(defaultValue);
  if ($$props.disablePreviousButton === void 0 && $$bindings.disablePreviousButton && disablePreviousButton !== void 0)
    $$bindings.disablePreviousButton(disablePreviousButton);
  if ($$props.isLast === void 0 && $$bindings.isLast && isLast !== void 0)
    $$bindings.isLast(isLast);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.isPreview === void 0 && $$bindings.isPreview && isPreview !== void 0)
    $$bindings.isPreview(isPreview);
  if ($$props.nextButtonProps === void 0 && $$bindings.nextButtonProps && nextButtonProps !== void 0)
    $$bindings.nextButtonProps(nextButtonProps);
  if ($$props.grade === void 0 && $$bindings.grade && grade !== void 0)
    $$bindings.grade(grade);
  if ($$props.gradeMax === void 0 && $$bindings.gradeMax && gradeMax !== void 0)
    $$bindings.gradeMax(gradeMax);
  if ($$props.disableGrading === void 0 && $$bindings.disableGrading && disableGrading !== void 0)
    $$bindings.disableGrading(disableGrading);
  if ($$props.isGradeWithAI === void 0 && $$bindings.isGradeWithAI && isGradeWithAI !== void 0)
    $$bindings.isGradeWithAI(isGradeWithAI);
  if ($$props.reason === void 0 && $$bindings.reason && reason !== void 0)
    $$bindings.reason(reason);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  if ($$props.hideGrading === void 0 && $$bindings.hideGrading && hideGrading !== void 0)
    $$bindings.hideGrading(hideGrading);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    gradeWithAI = isGradeWithAI;
    $$rendered = `<form><div class="flex items-center justify-between">${validate_component(HTMLRender, "HtmlRender").$$render(
      $$result,
      {
        className: "mt-4 " + (typeof grade === "number" && "w-4/5"),
        disableMaxWidth: true
      },
      {},
      {
        content: () => {
          return `${validate_component(QuestionTitle, "QuestionTitle").$$render($$result, { index, title }, {}, {})}`;
        }
      }
    )} ${!hideGrading ? `${validate_component(Grade, "Grade").$$render(
      $$result,
      { gradeMax, disableGrading, grade },
      {
        grade: ($$value) => {
          grade = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div> ${code ? `${validate_component(CodeSnippet, "CodeSnippet").$$render($$result, { code }, {}, {})}` : ``} <div class="ml-4">${each(options, (option) => {
      return `<button class="${"cursor-pointer text-left my-2 border-2 border-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-800 w-full " + escape(getValidationClassName(option), true)}" type="button">${validate_component(Checkbox, "Checkbox").$$render(
        $$result,
        {
          name,
          className: "p-2",
          value: option.value,
          checked: defaultValue.includes(option.value),
          label: option.label || option.value,
          disabled
        },
        {},
        {}
      )} </button>`;
    })}</div> ${gradeWithAI ? `${validate_component(ReasonBox, "ReasonBox").$$render(
      $$result,
      {
        reason,
        isLoading,
        acceptGrade,
        rejectGrade
      },
      {},
      {}
    )}` : ``} ${!isPreview ? `<div class="mt-3 flex items-center justify-between w-full">${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        onClick: handlePrevious,
        label: $t("course.navItem.lessons.exercises.all_exercises.previous"),
        isDisabled: disablePreviousButton,
        variant: VARIANTS.OUTLINED
      },
      {},
      {}
    )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        variant: nextButtonProps.isActive ? VARIANTS.CONTAINED : VARIANTS.OUTLINED,
        type: "submit",
        label: isLast ? $t("course.navItem.lessons.exercises.all_exercises.finish") : $t("course.navItem.lessons.exercises.all_exercises.next"),
        isDisabled: nextButtonProps.isDisabled,
        name
      },
      {},
      {}
    )}</div>` : ``}</form>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const TextareaQuestion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { title = "" } = $$props;
  let { index = 1 } = $$props;
  let { code = "" } = $$props;
  let { name = "" } = $$props;
  let { onSubmit = (a, b) => {
  } } = $$props;
  let { onPrevious = () => {
  } } = $$props;
  let { defaultValue = "" } = $$props;
  let { disablePreviousButton = false } = $$props;
  let { isLast = false } = $$props;
  let { isPreview = false } = $$props;
  let { disabled = false } = $$props;
  let { grade } = $$props;
  let { gradeMax = 0 } = $$props;
  let { disableGrading = false } = $$props;
  let { isGradeWithAI = false } = $$props;
  let { reason } = $$props;
  let { isLoading = false } = $$props;
  let { hideGrading = false } = $$props;
  let gradeWithAI = false;
  function handlePrevious(event) {
    event.preventDefault();
    onPrevious();
  }
  function acceptGrade() {
    gradeWithAI = false;
  }
  function rejectGrade() {
    gradeWithAI = false;
    grade = 0;
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.onSubmit === void 0 && $$bindings.onSubmit && onSubmit !== void 0)
    $$bindings.onSubmit(onSubmit);
  if ($$props.onPrevious === void 0 && $$bindings.onPrevious && onPrevious !== void 0)
    $$bindings.onPrevious(onPrevious);
  if ($$props.defaultValue === void 0 && $$bindings.defaultValue && defaultValue !== void 0)
    $$bindings.defaultValue(defaultValue);
  if ($$props.disablePreviousButton === void 0 && $$bindings.disablePreviousButton && disablePreviousButton !== void 0)
    $$bindings.disablePreviousButton(disablePreviousButton);
  if ($$props.isLast === void 0 && $$bindings.isLast && isLast !== void 0)
    $$bindings.isLast(isLast);
  if ($$props.isPreview === void 0 && $$bindings.isPreview && isPreview !== void 0)
    $$bindings.isPreview(isPreview);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.grade === void 0 && $$bindings.grade && grade !== void 0)
    $$bindings.grade(grade);
  if ($$props.gradeMax === void 0 && $$bindings.gradeMax && gradeMax !== void 0)
    $$bindings.gradeMax(gradeMax);
  if ($$props.disableGrading === void 0 && $$bindings.disableGrading && disableGrading !== void 0)
    $$bindings.disableGrading(disableGrading);
  if ($$props.isGradeWithAI === void 0 && $$bindings.isGradeWithAI && isGradeWithAI !== void 0)
    $$bindings.isGradeWithAI(isGradeWithAI);
  if ($$props.reason === void 0 && $$bindings.reason && reason !== void 0)
    $$bindings.reason(reason);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  if ($$props.hideGrading === void 0 && $$bindings.hideGrading && hideGrading !== void 0)
    $$bindings.hideGrading(hideGrading);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    gradeWithAI = isGradeWithAI;
    $$rendered = `<form><div class="flex items-center justify-between mb-2">${validate_component(HTMLRender, "HtmlRender").$$render(
      $$result,
      {
        className: "mt-4 " + (typeof grade === "number" && "w-4/5"),
        disableMaxWidth: true
      },
      {},
      {
        content: () => {
          return `${validate_component(QuestionTitle, "QuestionTitle").$$render($$result, { index, title }, {}, {})}`;
        }
      }
    )} ${!hideGrading ? `${validate_component(Grade, "Grade").$$render(
      $$result,
      { gradeMax, disableGrading, grade },
      {
        grade: ($$value) => {
          grade = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div> ${code ? `${validate_component(CodeSnippet, "CodeSnippet").$$render($$result, { code }, {}, {})}` : ``} <div class="ml-4">${disabled ? `<div class="bg-gray-200 dark:bg-gray-500 py-3 px-5 rounded-md mb-3">${escape(defaultValue === "" ? $t("course.navItem.lessons.exercises.all_exercises.no_answer") : defaultValue)}</div> ${gradeWithAI ? `${validate_component(ReasonBox, "ReasonBox").$$render(
      $$result,
      {
        reason,
        isLoading,
        acceptGrade,
        rejectGrade
      },
      {},
      {}
    )}` : ``}` : `${validate_component(TextArea, "TextArea").$$render(
      $$result,
      {
        rows: 5,
        placeholder: $t("course.navItem.lessons.exercises.all_exercises.write_your_answer_here"),
        value: defaultValue
      },
      {
        value: ($$value) => {
          defaultValue = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}</div> ${!isPreview ? `<div class="mt-3 flex items-center justify-between w-full">${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        variant: VARIANTS.OUTLINED,
        onClick: handlePrevious,
        label: $t("course.navItem.lessons.exercises.all_exercises.previous"),
        isDisabled: disablePreviousButton
      },
      {},
      {}
    )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        variant: VARIANTS.OUTLINED,
        type: "submit",
        label: isLast ? $t("course.navItem.lessons.exercises.all_exercises.finish") : $t("course.navItem.lessons.exercises.all_exercises.next"),
        name
      },
      {},
      {}
    )}</div>` : ``}</form>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const isAnswerCorrect = (options, answer) => {
  return options.some((option) => option.is_correct && option.value === answer);
};
function wasCorrectAnswerSelected(currentQuestion, answers, isFinished) {
  if (currentQuestion.question_type.id === QUESTION_TYPE.TEXTAREA) {
    return true;
  }
  const answer = answers[currentQuestion.name];
  const formattedAnswers = typeof answer === "string" ? [answer] : answer;
  let isCorrect = false;
  if (currentQuestion.question_type.id === QUESTION_TYPE.CHECKBOX) {
    isCorrect = currentQuestion.options.filter((o) => o.is_correct).every((option) => formattedAnswers?.includes(option.value));
  } else if (currentQuestion.question_type.id === QUESTION_TYPE.RADIO) {
    isCorrect = formattedAnswers?.some(
      (answer2) => isAnswerCorrect(currentQuestion.options, answer2)
    );
  }
  if (isCorrect && !isFinished) {
    toggleConfetti();
    setTimeout(toggleConfetti, 100);
  }
  return isCorrect;
}
function getPropsForQuestion(questions, question, questionnaireMetaData, questionIndex, onSubmit, onPrevious, preview) {
  const { answers, isFinished } = questionnaireMetaData;
  const isLast = questionIndex === questions.length;
  const isOpenQuesiton = question.question_type.id === QUESTION_TYPE.TEXTAREA;
  const isCorrect = wasCorrectAnswerSelected(question, answers, isFinished);
  if (!isCorrect && document && document.getElementById("question")) {
    const questionElement = document.getElementById("question");
    questionElement.classList.toggle("shake");
    setTimeout(() => {
      questionElement.classList.toggle("shake");
    }, 200);
  }
  return {
    index: questionIndex + ". ",
    title: question.title,
    name: `${question.name}`,
    options: question.options,
    code: question.code,
    defaultValue: isOpenQuesiton ? answers[question.name] || "" : answers[question.name] || [],
    onSubmit,
    onPrevious,
    disablePreviousButton: questionIndex === 1,
    isLast,
    isPreview: preview || isFinished,
    isCorrect,
    disabled: isFinished && isCorrect || isFinished,
    nextButtonProps: isOpenQuesiton ? {
      label: "Next",
      isActive: true
    } : isCorrect ? {
      label: isLast ? "Finish" : "Next",
      isActive: true,
      disableOptionSelect: true,
      isDisabled: isLast ? false : true
      // Disable Next button because auto next is enabled
    } : {
      label: "Check",
      isActive: false
    }
  };
}
function filterOutDeleted(array) {
  return array.filter((item) => !item.deleted_at);
}
const Preview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $course, $$unsubscribe_course;
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  let { questions = [] } = $$props;
  let { questionnaireMetaData = {} } = $$props;
  let { grades = {} } = $$props;
  let { onSubmit = () => {
  } } = $$props;
  let { onPrevious = () => {
  } } = $$props;
  let { handleGrade = () => {
  } } = $$props;
  let { disableGrading = true } = $$props;
  let { isGradeWithAI = false } = $$props;
  let { isLoading = false } = $$props;
  let { reasons = {} } = $$props;
  if ($$props.questions === void 0 && $$bindings.questions && questions !== void 0)
    $$bindings.questions(questions);
  if ($$props.questionnaireMetaData === void 0 && $$bindings.questionnaireMetaData && questionnaireMetaData !== void 0)
    $$bindings.questionnaireMetaData(questionnaireMetaData);
  if ($$props.grades === void 0 && $$bindings.grades && grades !== void 0)
    $$bindings.grades(grades);
  if ($$props.onSubmit === void 0 && $$bindings.onSubmit && onSubmit !== void 0)
    $$bindings.onSubmit(onSubmit);
  if ($$props.onPrevious === void 0 && $$bindings.onPrevious && onPrevious !== void 0)
    $$bindings.onPrevious(onPrevious);
  if ($$props.handleGrade === void 0 && $$bindings.handleGrade && handleGrade !== void 0)
    $$bindings.handleGrade(handleGrade);
  if ($$props.disableGrading === void 0 && $$bindings.disableGrading && disableGrading !== void 0)
    $$bindings.disableGrading(disableGrading);
  if ($$props.isGradeWithAI === void 0 && $$bindings.isGradeWithAI && isGradeWithAI !== void 0)
    $$bindings.isGradeWithAI(isGradeWithAI);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  if ($$props.reasons === void 0 && $$bindings.reasons && reasons !== void 0)
    $$bindings.reasons(reasons);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${each(questions, (currentQuestion, currentQuestionIndex) => {
      return `${QUESTION_TYPE.RADIO === currentQuestion.question_type.id ? `${validate_component(RadioQuestion, "RadioQuestion").$$render(
        $$result,
        Object.assign(
          {},
          getPropsForQuestion(questions, currentQuestion, questionnaireMetaData, currentQuestionIndex + 1, onSubmit, onPrevious, true),
          { gradeMax: currentQuestion.points },
          {
            handleGrade: handleGrade(currentQuestion.id)
          },
          { disableGrading },
          { disabled: true },
          {
            hideGrading: $course.type === COURSE_TYPE.SELF_PACED
          },
          { grade: grades[currentQuestion.id] },
          { isGradeWithAI },
          { reason: reasons[currentQuestion.id] },
          { isLoading }
        ),
        {
          grade: ($$value) => {
            grades[currentQuestion.id] = $$value;
            $$settled = false;
          },
          isGradeWithAI: ($$value) => {
            isGradeWithAI = $$value;
            $$settled = false;
          },
          reason: ($$value) => {
            reasons[currentQuestion.id] = $$value;
            $$settled = false;
          },
          isLoading: ($$value) => {
            isLoading = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${QUESTION_TYPE.CHECKBOX === currentQuestion.question_type.id ? `${validate_component(CheckboxQuestion, "CheckboxQuestion").$$render(
        $$result,
        Object.assign(
          {},
          getPropsForQuestion(questions, currentQuestion, questionnaireMetaData, currentQuestionIndex + 1, onSubmit, onPrevious, true),
          { gradeMax: currentQuestion.points },
          {
            handleGrade: handleGrade(currentQuestion.id)
          },
          { disableGrading },
          { disabled: true },
          {
            hideGrading: $course.type === COURSE_TYPE.SELF_PACED
          },
          { grade: grades[currentQuestion.id] },
          { isGradeWithAI },
          { reason: reasons[currentQuestion.id] },
          { isLoading }
        ),
        {
          grade: ($$value) => {
            grades[currentQuestion.id] = $$value;
            $$settled = false;
          },
          isGradeWithAI: ($$value) => {
            isGradeWithAI = $$value;
            $$settled = false;
          },
          reason: ($$value) => {
            reasons[currentQuestion.id] = $$value;
            $$settled = false;
          },
          isLoading: ($$value) => {
            isLoading = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${QUESTION_TYPE.TEXTAREA === currentQuestion.question_type.id ? `${validate_component(TextareaQuestion, "TextareaQuestion").$$render(
        $$result,
        Object.assign(
          {},
          getPropsForQuestion(questions, currentQuestion, questionnaireMetaData, currentQuestionIndex + 1, onSubmit, onPrevious, true),
          { gradeMax: currentQuestion.points },
          {
            handleGrade: handleGrade(currentQuestion.id)
          },
          { disableGrading },
          { disabled: true },
          {
            hideGrading: $course.type === COURSE_TYPE.SELF_PACED
          },
          { grade: grades[currentQuestion.id] },
          { isGradeWithAI },
          { reason: reasons[currentQuestion.id] },
          { isLoading }
        ),
        {
          grade: ($$value) => {
            grades[currentQuestion.id] = $$value;
            $$settled = false;
          },
          isGradeWithAI: ($$value) => {
            isGradeWithAI = $$value;
            $$settled = false;
          },
          reason: ($$value) => {
            reasons[currentQuestion.id] = $$value;
            $$settled = false;
          },
          isLoading: ($$value) => {
            isLoading = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}`}`}`;
    })}`;
  } while (!$$settled);
  $$unsubscribe_course();
  return $$rendered;
});
async function fetchSubmission({
  courseId,
  exerciseId,
  submittedBy
}) {
  const query = {
    exercise_id: exerciseId
  };
  if (courseId) {
    query.course_id = courseId;
  }
  if (submittedBy) {
    query.submitted_by = submittedBy;
  }
  return supabase.from("submission").select(
    `
      id,
      answers:question_answer(*),
      status_id,
      feedback,
      submitted_by:groupmember!inner(
        profile!inner(
          id,
          fullname,
          avatar_url
        )
      )
    `
  ).match(query).returns();
}
async function updateSubmission({
  id,
  status_id,
  total,
  feedback
}, otherArgs) {
  const toUpdate = {
    status_id,
    feedback
  };
  if (typeof total === "number") {
    toUpdate.total = total;
  }
  return supabase.from("submission").update(toUpdate, otherArgs).match({ id });
}
async function deleteSubmission(id) {
  return supabase.from("submission").delete().match({ id });
}
async function updateQuestionAnswer(update, match) {
  return supabase.from("question_answer").update(update).match(match);
}

export { CheckboxQuestion as C, Preview as P, RadioQuestion as R, STATUS as S, TextareaQuestion as T, RadioItem as a, Checkbox as b, fetchSubmission as c, deleteSubmission as d, updateQuestionAnswer as e, filterOutDeleted as f, updateSubmission as u };
//# sourceMappingURL=index28-97d9d4c9.js.map
