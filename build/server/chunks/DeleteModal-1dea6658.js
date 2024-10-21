import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-10c5b872.js';
import { M as Modal } from './index8-59a07edf.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { t as t2 } from './translations-90190f83.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ac2ed301-c036-498d-a9b8-be7cdea3178d", e._sentryDebugIdIdentifier = "sentry-dbid-ac2ed301-c036-498d-a9b8-be7cdea3178d");
  } catch (e2) {
  }
}();
const DeleteModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { onDelete = () => {
  } } = $$props;
  let { onCancel = () => {
  } } = $$props;
  let { open = false } = $$props;
  let { isQuestion = false } = $$props;
  let { isDeleting = false } = $$props;
  if ($$props.onDelete === void 0 && $$bindings.onDelete && onDelete !== void 0)
    $$bindings.onDelete(onDelete);
  if ($$props.onCancel === void 0 && $$bindings.onCancel && onCancel !== void 0)
    $$bindings.onCancel(onCancel);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.isQuestion === void 0 && $$bindings.isQuestion && isQuestion !== void 0)
    $$bindings.isQuestion(isQuestion);
  if ($$props.isDeleting === void 0 && $$bindings.isDeleting && isDeleting !== void 0)
    $$bindings.isDeleting(isDeleting);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: () => open = false,
        width: "w-96",
        modalHeading: $t("community.delete.title") + " " + (isQuestion ? $t("community.delete.question") : $t("community.delete.comment")),
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
          return `<div><h1 class="dark:text-white text-lg">${escape($t("community.delete.sure"))} ${escape(isQuestion ? $t("community.delete.question") : $t("community.delete.comment"))}?</h1> <div class="mt-5 flex items-center justify-between">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              variant: VARIANTS.OUTLINED,
              label: $t("community.delete.no"),
              onClick: onCancel
            },
            {},
            {}
          )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              variant: VARIANTS.CONTAINED,
              label: $t("community.delete.yes"),
              onClick: onDelete,
              isLoading: isDeleting
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

export { DeleteModal as D };
//# sourceMappingURL=DeleteModal-1dea6658.js.map
