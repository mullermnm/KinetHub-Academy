import { s as subscribe, e as set_store_value } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-10c5b872.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { M as Modal } from './index8-59a07edf.js';
import { r as deleteModal, n as quizesStore } from './org-8fc26a61.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import { t as t2 } from './translations-90190f83.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b5c6db05-7511-4f8d-9532-dccad2f97ac1", e._sentryDebugIdIdentifier = "sentry-dbid-b5c6db05-7511-4f8d-9532-dccad2f97ac1");
  } catch (e2) {
  }
}();
const DeleteModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $deleteModal, $$unsubscribe_deleteModal;
  let $quizesStore, $$unsubscribe_quizesStore;
  let $t, $$unsubscribe_t;
  $$unsubscribe_deleteModal = subscribe(deleteModal, (value) => $deleteModal = value);
  $$unsubscribe_quizesStore = subscribe(quizesStore, (value) => $quizesStore = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { onDelete = () => {
  } } = $$props;
  function closeModal() {
    deleteModal.update((m) => ({
      ...m,
      open: false,
      id: null,
      isQuestion: false
    }));
  }
  async function deleteQuiz() {
    const { data, error } = await supabase.from("quiz").delete().match({ id: $deleteModal.id });
    console.log("data", data);
    console.log("error", error);
    if (error) {
      return;
    }
    set_store_value(quizesStore, $quizesStore = $quizesStore.filter((q) => q.id !== $deleteModal.id), $quizesStore);
    closeModal();
  }
  if ($$props.onDelete === void 0 && $$bindings.onDelete && onDelete !== void 0)
    $$bindings.onDelete(onDelete);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: closeModal,
        width: "w-2/5",
        modalHeading: $deleteModal.isQuestion ? $t("components.quiz.question_delete") : $t("components.quiz.quiz_delete"),
        size: "sm",
        open: $deleteModal.open
      },
      {
        open: ($$value) => {
          $deleteModal.open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="w-full flex flex-col items-center my-10"><h1 class="dark:text-white text-lg text-center">${$deleteModal.isQuestion ? `${escape($t("components.quiz.delete_question"))}` : `${escape($t("components.quiz.delete_quiz"))}`} ${escape($t("components.quiz.lose_content"))}</h1> <div class="mt-5">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              variant: VARIANTS.CONTAINED,
              label: $t("components.quiz.delete"),
              onClick: () => {
                if ($deleteModal.isQuestion) {
                  onDelete();
                  $deleteModal.open = false;
                } else {
                  deleteQuiz();
                }
              }
            },
            {},
            {}
          )}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_deleteModal();
  $$unsubscribe_quizesStore();
  $$unsubscribe_t();
  return $$rendered;
});

export { DeleteModal as D };
//# sourceMappingURL=DeleteModal2-9b4c4ba6.js.map
