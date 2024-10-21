import { s as subscribe, e as set_store_value, d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as each, e as escape, d as spread, h as escape_attribute_value, f as escape_object } from './ssr-10c5b872.js';
import cloneDeep from 'lodash/cloneDeep.js';
import isBoolean from 'lodash/isBoolean.js';
import { A as ArrowLeft } from './ArrowLeft-b60a107c.js';
import { C as CheckmarkFilled } from './CheckmarkFilled-36899326.js';
import { t as themeImages, s as allOptions, f as currentOrgPath, n as quizesStore, q as quizStore, r as deleteModal, v as allThemes, w as optionImage } from './org-8fc26a61.js';
import { V as VARIANTS, P as PrimaryButton } from './index11-4ef8d5a0.js';
import { D as DeleteModal } from './DeleteModal2-9b4c4ba6.js';
import { I as IconButton } from './index9-eea8802c.js';
import { t as t2 } from './translations-90190f83.js';
import './_sentry-release-injection-file-6be6a010.js';
import { C as CheckmarkOutline } from './CheckmarkOutline-377cf09c.js';
import { T as TextField } from './TextField-86164973.js';
import { b as snackbar } from './store2-dc811f17.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import { S as Select$1, a as SelectItem$1 } from './SelectItem-00c29785.js';
import './index2-aea858a5.js';
import './shared-server-e0f2abd3.js';
import './index8-59a07edf.js';
import './index15-c5761f1e.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './ChevronDown-d5b93e8c.js';
import './WarningAltFilled-13a554ec.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2a2738be-c844-48bb-a92c-44870666ff26", e._sentryDebugIdIdentifier = "sentry-dbid-2a2738be-c844-48bb-a92c-44870666ff26");
  } catch (e2) {
  }
}();
const WarningFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14C30,8.3,23.7,2,16,2z M14.9,8h2.2v11h-2.2V8z M16,25	c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22c0.8,0,1.5,0.7,1.5,1.5S16.8,25,16,25z"></path><path fill="none" d="M17.5,23.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22	C16.8,22,17.5,22.7,17.5,23.5z M17.1,8h-2.2v11h2.2V8z" data-icon-path="inner-path" opacity="0"></path></svg>`;
});
const QuizQuestion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { currentQuestion = { label: "" } } = $$props;
  let { currentError = {} } = $$props;
  let { optionHasError: optionHasError2 = () => false } = $$props;
  let { isPreview = false } = $$props;
  if ($$props.currentQuestion === void 0 && $$bindings.currentQuestion && currentQuestion !== void 0)
    $$bindings.currentQuestion(currentQuestion);
  if ($$props.currentError === void 0 && $$bindings.currentError && currentError !== void 0)
    $$bindings.currentError(currentError);
  if ($$props.optionHasError === void 0 && $$bindings.optionHasError && optionHasError2 !== void 0)
    $$bindings.optionHasError(optionHasError2);
  if ($$props.isPreview === void 0 && $$bindings.isPreview && isPreview !== void 0)
    $$bindings.isPreview(isPreview);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${isPreview ? `<h1 class="text-white mb-5 font-bold">${escape(currentQuestion.label)}</h1>` : `${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        placeholder: $t("components.quiz.start_typing"),
        className: "w-full my-4",
        errorMessage: currentError.isLabelEmpty && $t("components.quiz.required_field"),
        isRequired: true,
        bgColor: "bg-white",
        value: currentQuestion.label
      },
      {
        value: ($$value) => {
          currentQuestion.label = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}  <div class="flex justify-between w-full flex-wrap">${each(currentQuestion.options || [], (option) => {
      return `<div class="w-2/5 bg-white dark:bg-neutral-800 rounded p-5 mb-5 relative"><img${add_attribute("src", optionImage[option.id], 0)}${add_attribute("alt", option.id, 0)}> ${isPreview ? `<p class="mt-5">${escape(option.label)}</p>` : `${validate_component(TextField, "TextField").$$render(
        $$result,
        {
          placeholder: $t("components.quiz.type_answer"),
          bgColor: "bg-white",
          className: "mt-3",
          isDisabled: currentQuestion.type === "boolean",
          errorMessage: optionHasError2(option.id, currentError.options) && $t("components.quiz.label"),
          value: option.label
        },
        {
          value: ($$value) => {
            option.label = $$value;
            $$settled = false;
          }
        },
        {}
      )} <div class="flex justify-end absolute top-2 right-2">${validate_component(IconButton, "IconButton").$$render(
        $$result,
        {
          value: option.id,
          onClick: () => option.isCorrect = !option.isCorrect,
          buttonClassName: option.isCorrect && "success"
        },
        {},
        {
          default: () => {
            return `${option.isCorrect ? `${validate_component(CheckmarkFilled, "CheckmarkFilledIcon").$$render(
              $$result,
              {
                size: 24,
                class: "carbon-icon dark:text-white"
              },
              {},
              {}
            )}` : `${validate_component(CheckmarkOutline, "CheckmarkOutlineIcon").$$render(
              $$result,
              {
                size: 24,
                class: "carbon-icon dark:text-white"
              },
              {},
              {}
            )}`} `;
          }
        }
      )} </div>`} </div>`;
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const css$1 = {
  code: ".quiz-body.svelte-kiblu9{width:500px;margin:auto}",
  map: null
};
const Preview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $quizStore, $$unsubscribe_quizStore;
  $$unsubscribe_quizStore = subscribe(quizStore, (value) => $quizStore = value);
  let { exitPreview = () => {
  } } = $$props;
  $quizStore.questions.length;
  $quizStore.questions[0] || {};
  if ($$props.exitPreview === void 0 && $$bindings.exitPreview && exitPreview !== void 0)
    $$bindings.exitPreview(exitPreview);
  $$result.css.add(css$1);
  $$unsubscribe_quizStore();
  return `${``}`;
});
const css = {
  code: ".container.svelte-5zte8a{min-width:696px}.content.svelte-5zte8a{max-width:550px}.theme.svelte-5zte8a{height:120px;max-width:260px}",
  map: null
};
function activeClass(q, cq) {
  if (q.id === cq.id) {
    return "bg-gray-200 dark:bg-black";
  }
  return "";
}
function qHasError(qId, _errs) {
  return _errs.some((qe) => {
    return (qId ? qe.id === qId : true) && (qe.isLabelEmpty || !qe.hasOneAnswer || !!qe.options.length);
  });
}
function optionHasError(eId, _errs) {
  if (Array.isArray(_errs) && _errs.length) {
    return _errs.some((e) => e.id === eId && e.error);
  }
  return false;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  let $$unsubscribe_quizesStore;
  let $quizStore, $$unsubscribe_quizStore;
  let $t, $$unsubscribe_t;
  let $deleteModal, $$unsubscribe_deleteModal;
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  $$unsubscribe_quizesStore = subscribe(quizesStore, (value) => value);
  $$unsubscribe_quizStore = subscribe(quizStore, (value) => $quizStore = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_deleteModal = subscribe(deleteModal, (value) => $deleteModal = value);
  let { data } = $$props;
  const { quizId } = data;
  let currentQuestion = $quizStore.questions[0] || { options: [] };
  let openPreview = false;
  let type = "multichoice";
  let errors = [];
  let currentError = {};
  let selectEl = null;
  function addQuestion() {
    set_store_value(
      quizStore,
      $quizStore.questions = [
        ...$quizStore.questions,
        {
          id: (/* @__PURE__ */ new Date()).getTime(),
          label: "",
          type: "multichoice",
          options: []
        }
      ],
      $quizStore
    );
    type = "multichoice";
  }
  function addOption() {
    const cOptIds = currentQuestion.options.map((o) => o.id);
    const nextOption = cloneDeep(allOptions).find((o) => !cOptIds.includes(o.id));
    if (!nextOption)
      return;
    currentQuestion.options = [...currentQuestion.options, nextOption];
  }
  function deleteOption() {
    const opt = cloneDeep(currentQuestion.options);
    opt.pop();
    currentQuestion.options = opt;
  }
  function deleteQuestion() {
    if ($quizStore.questions.length === 1)
      return;
    set_store_value(quizStore, $quizStore.questions = $quizStore.questions.filter((q) => q.id !== currentQuestion.id), $quizStore);
    currentQuestion = $quizStore.questions[0];
  }
  function previewQuiz() {
    openPreview = !openPreview;
  }
  function validateQuiz() {
    const _errors = [];
    $quizStore.questions.forEach((q) => {
      const labelError = !!((q.label?.length || 0) < 3);
      const options = [];
      let hasOneAnswer = false;
      q.options.forEach((o) => {
        const valLabelError = !!(o.label.length < 3);
        if (valLabelError) {
          options.push({ id: o.id, error: true });
        }
        if (o.isCorrect) {
          hasOneAnswer = true;
        }
      });
      _errors.push({
        isLabelEmpty: labelError,
        hasOneAnswer,
        id: q.id,
        options
      });
    });
    errors = _errors;
    currentError = errors.find((e) => e.id === currentQuestion.id) || {};
    return errors;
  }
  async function saveQuiz() {
    const _errors = validateQuiz();
    if (Array.isArray(_errors) && _errors.length && qHasError(null, _errors)) {
      console.error("Please fix all errors", errors);
      return;
    }
    const { data: data2, error } = await supabase.from("quiz").update({ ...$quizStore, updated_at: /* @__PURE__ */ new Date() }).match({ id: quizId });
    console.log("data", data2);
    console.log("error", error);
    if (error) {
      snackbar.error("snackbar.course_settings.error.not_right");
      return;
    } else {
      snackbar.success("snackbar.course_settings.success.saved");
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1lkpgfm_START -->${$$result.title = `<title>Quiz</title>`, ""}<!-- HEAD_svelte-1lkpgfm_END -->`, ""} ${validate_component(DeleteModal, "DeleteModal").$$render($$result, { onDelete: deleteQuestion }, {}, {})} ${openPreview ? `${validate_component(Preview, "Preview").$$render($$result, { exitPreview: previewQuiz }, {}, {})}` : ``} <section class="w-screen h-full flex justify-between"> <aside class="root w-1/5 p-4 bg-gray-100 dark:bg-neutral-800 h-full"><div class="h-full flex flex-col"><a class="text-gray-500 dark:text-white text-md flex items-center"${add_attribute("href", `${$currentOrgPath}/quiz`, 0)}>${validate_component(ArrowLeft, "ArrowLeftIcon").$$render(
      $$result,
      {
        size: 24,
        class: "carbon-icon dark:text-white"
      },
      {},
      {}
    )} Back to Quizzes</a> <h3 class="my-3" data-svelte-h="svelte-o827a8">Quiz</h3> <div class="mb-3">${each($quizStore.questions, (question, i) => {
      return `<button class="${"w-full rounded p-3 mb-3 font-bold text-left text-gray-500 dark:text-white flex justify-between " + escape(activeClass(question, currentQuestion), true) + " svelte-5zte8a"}">Question ${escape(i + 1)} ${qHasError(question.id, errors) ? `${validate_component(WarningFilled, "WarningFilledIcon").$$render($$result, { size: 20, class: "carbon-icon error" }, {}, {})}` : ``} </button>`;
    })}</div> <div class="w-full flex justify-end">${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: "Add Question",
        variant: VARIANTS.CONTAINED,
        onClick: addQuestion
      },
      {},
      {}
    )}</div></div></aside> <div class="container w-3/6 h-full svelte-5zte8a"><div class="p-5 h-full" style="${"background: url(" + escape(themeImages[$quizStore.theme]?.editor, true) + ") no-repeat center center fixed; -webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;"}"><div class="content m-auto svelte-5zte8a"><h1 class="text-white font-bold my-5">${escape($quizStore.title)}</h1> ${validate_component(QuizQuestion, "QuizQuestion").$$render(
      $$result,
      {
        currentQuestion,
        optionHasError,
        currentError
      },
      {},
      {}
    )} ${isBoolean(currentError.hasOneAnswer) && !currentError.hasOneAnswer ? `<div class="mb-5" data-svelte-h="svelte-1xcoyz9"><p class="text-red-500">Please select at least one correct answer</p></div>` : ``} ${currentQuestion.type !== "boolean" ? `<div class="w-full flex justify-center mb-4">${currentQuestion.options.length < allOptions.length ? `${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $t("components.quiz.add_more"),
        variant: VARIANTS.CONTAINED_WHITE,
        onClick: addOption,
        className: "mr-5"
      },
      {},
      {}
    )}` : ``} ${currentQuestion.options.length > 0 ? `${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $t("components.quiz.remove_last"),
        variant: VARIANTS.CONTAINED_WHITE,
        onClick: deleteOption
      },
      {},
      {}
    )}` : ``}</div>` : ``}</div></div></div>  <aside class="settings w-1/5 p-4 bg-gray-100 dark:bg-neutral-800 h-full"><div class="py-5"><h5 data-svelte-h="svelte-5bhk8c">Quiz settings</h5> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: "Save Changes",
        variant: VARIANTS.CONTAINED,
        onClick: saveQuiz,
        className: "my-3"
      },
      {},
      {}
    )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: "Preview Quiz",
        variant: VARIANTS.OUTLINED,
        onClick: previewQuiz,
        className: "my-3"
      },
      {},
      {}
    )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: "Delete question",
        variant: VARIANTS.TEXT,
        onClick: () => {
          if ($quizStore.questions.length === 1)
            return;
          $deleteModal.open = true;
          $deleteModal.isQuestion = true;
        },
        className: "my-3"
      },
      {},
      {}
    )}</div> <div class="flex flex-col justify-evenly"><div class="my-3"> ${validate_component(Select$1, "Select").$$render(
      $$result,
      {
        labelText: "Question type",
        class: "flex items-center mb-3",
        this: selectEl,
        selected: type
      },
      {
        this: ($$value) => {
          selectEl = $$value;
          $$settled = false;
        },
        selected: ($$value) => {
          type = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(SelectItem$1, "SelectItem").$$render(
            $$result,
            {
              value: "multichoice",
              text: "Multi-choice answers"
            },
            {},
            {}
          )} ${validate_component(SelectItem$1, "SelectItem").$$render($$result, { value: "boolean", text: "True or False" }, {}, {})}`;
        }
      }
    )}  ${validate_component(Select$1, "Select").$$render(
      $$result,
      {
        labelText: "Time limit",
        class: "flex items-center mb-3",
        selected: $quizStore.timelimit
      },
      {
        selected: ($$value) => {
          $quizStore.timelimit = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(SelectItem$1, "SelectItem").$$render($$result, { value: "10 seconds", text: "10s" }, {}, {})} ${validate_component(SelectItem$1, "SelectItem").$$render($$result, { value: "20 seconds", text: "20s" }, {}, {})} ${validate_component(SelectItem$1, "SelectItem").$$render($$result, { value: "30 seconds", text: "30s" }, {}, {})} ${validate_component(SelectItem$1, "SelectItem").$$render($$result, { value: "1 minute", text: "1m" }, {}, {})} ${validate_component(SelectItem$1, "SelectItem").$$render($$result, { value: "2 minute", text: "2m" }, {}, {})} ${validate_component(SelectItem$1, "SelectItem").$$render($$result, { value: "3 minute", text: "3m" }, {}, {})}`;
        }
      }
    )}</div>  <div class="my-3"><p class="mb-2" data-svelte-h="svelte-64vld2">Choose a theme</p> ${each(allThemes, (_theme) => {
      return `<div class="${"theme rounded-md w-full border cursor-pointer mb-5 relative " + escape($quizStore.theme === _theme.id && "border-primary-700", true) + " svelte-5zte8a"}">${$quizStore.theme === _theme.id ? `${validate_component(CheckmarkFilled, "CheckmarkFilledIcon").$$render(
        $$result,
        {
          size: 24,
          class: "carbon-icon absolute top-4 right-4",
          style: "fill:white;"
        },
        {},
        {}
      )}` : ``} <div class="w-full rounded-md h-full border flex flex-col-reverse" style="${"background: url(" + escape(themeImages[_theme.id]?.card, true) + ");"}"><p class="ml-3 mb-3 text-white">${escape(_theme.label)}</p></div> </div>`;
    })}</div></div></aside> </section>`;
  } while (!$$settled);
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_quizesStore();
  $$unsubscribe_quizStore();
  $$unsubscribe_t();
  $$unsubscribe_deleteModal();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6c137ed6.js.map
