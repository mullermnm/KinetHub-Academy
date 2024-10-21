import { d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, g as createEventDispatcher, d as spread, h as escape_attribute_value, f as escape_object, i as add_classes, e as escape, v as validate_component, b as each } from './ssr-10c5b872.js';
import { C as CaretRight$1 } from './CaretRight-a9e49169.js';
import { B as Button$1 } from './Button-f9944a26.js';
import { S as Select$1, a as SelectItem$1 } from './SelectItem-00c29785.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "313913f9-370a-4b95-9a84-130f8c3edf6e", e._sentryDebugIdIdentifier = "sentry-dbid-313913f9-370a-4b95-9a84-130f8c3edf6e");
  } catch (e2) {
  }
}();
const CaretLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M20 24L10 16 20 8z"></path></svg>`;
});
const CaretLeft$1 = CaretLeft;
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalPages;
  let selectItems;
  let backButtonDisabled;
  let forwardButtonDisabled;
  let $$restProps = compute_rest_props($$props, [
    "page",
    "totalItems",
    "disabled",
    "forwardText",
    "backwardText",
    "itemsPerPageText",
    "itemText",
    "itemRangeText",
    "pageInputDisabled",
    "pageSizeInputDisabled",
    "pageSize",
    "pageSizes",
    "pagesUnknown",
    "pageText",
    "pageRangeText",
    "id"
  ]);
  let { page = 1 } = $$props;
  let { totalItems = 0 } = $$props;
  let { disabled = false } = $$props;
  let { forwardText = "Next page" } = $$props;
  let { backwardText = "Previous page" } = $$props;
  let { itemsPerPageText = "Items per page:" } = $$props;
  let { itemText = (min, max) => `${min}–${max} item${max === 1 ? "" : "s"}` } = $$props;
  let { itemRangeText = (min, max, total) => `${min}–${max} of ${total} item${max === 1 ? "" : "s"}` } = $$props;
  let { pageInputDisabled = false } = $$props;
  let { pageSizeInputDisabled = false } = $$props;
  let { pageSize = 10 } = $$props;
  let { pageSizes = [10] } = $$props;
  let { pagesUnknown = false } = $$props;
  let { pageText = (page2) => `page ${page2}` } = $$props;
  let { pageRangeText = (current, total) => `of ${total} page${total === 1 ? "" : "s"}` } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.totalItems === void 0 && $$bindings.totalItems && totalItems !== void 0)
    $$bindings.totalItems(totalItems);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.forwardText === void 0 && $$bindings.forwardText && forwardText !== void 0)
    $$bindings.forwardText(forwardText);
  if ($$props.backwardText === void 0 && $$bindings.backwardText && backwardText !== void 0)
    $$bindings.backwardText(backwardText);
  if ($$props.itemsPerPageText === void 0 && $$bindings.itemsPerPageText && itemsPerPageText !== void 0)
    $$bindings.itemsPerPageText(itemsPerPageText);
  if ($$props.itemText === void 0 && $$bindings.itemText && itemText !== void 0)
    $$bindings.itemText(itemText);
  if ($$props.itemRangeText === void 0 && $$bindings.itemRangeText && itemRangeText !== void 0)
    $$bindings.itemRangeText(itemRangeText);
  if ($$props.pageInputDisabled === void 0 && $$bindings.pageInputDisabled && pageInputDisabled !== void 0)
    $$bindings.pageInputDisabled(pageInputDisabled);
  if ($$props.pageSizeInputDisabled === void 0 && $$bindings.pageSizeInputDisabled && pageSizeInputDisabled !== void 0)
    $$bindings.pageSizeInputDisabled(pageSizeInputDisabled);
  if ($$props.pageSize === void 0 && $$bindings.pageSize && pageSize !== void 0)
    $$bindings.pageSize(pageSize);
  if ($$props.pageSizes === void 0 && $$bindings.pageSizes && pageSizes !== void 0)
    $$bindings.pageSizes(pageSizes);
  if ($$props.pagesUnknown === void 0 && $$bindings.pagesUnknown && pagesUnknown !== void 0)
    $$bindings.pagesUnknown(pagesUnknown);
  if ($$props.pageText === void 0 && $$bindings.pageText && pageText !== void 0)
    $$bindings.pageText(pageText);
  if ($$props.pageRangeText === void 0 && $$bindings.pageRangeText && pageRangeText !== void 0)
    $$bindings.pageRangeText(pageRangeText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      dispatch("update", { pageSize, page });
    }
    totalPages = Math.max(Math.ceil(totalItems / pageSize), 1);
    selectItems = Array.from({ length: totalPages }, (_, i) => i);
    backButtonDisabled = disabled || page === 1;
    forwardButtonDisabled = disabled || page === totalPages;
    $$rendered = `<div${spread([{ id: escape_attribute_value(id) }, escape_object($$restProps)], { classes: "bx--pagination" })}><div${add_classes("bx--pagination__left".trim())}>${!pageSizeInputDisabled ? `<label id="${"bx--pagination-select-" + escape(id, true) + "-count-label"}" for="${"bx--pagination-select-" + escape(id, true)}"${add_classes("bx--pagination__text".trim())}>${escape(itemsPerPageText)}</label> ${validate_component(Select$1, "Select").$$render(
      $$result,
      {
        id: "bx--pagination-select-" + id,
        class: "bx--select__item-count",
        hideLabel: true,
        noLabel: true,
        inline: true,
        selected: pageSize
      },
      {
        selected: ($$value) => {
          pageSize = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(pageSizes, (size, i) => {
            return `${validate_component(SelectItem$1, "SelectItem").$$render($$result, { value: size, text: size.toString() }, {}, {})}`;
          })}`;
        }
      }
    )}` : ``} <span${add_classes((!pageSizeInputDisabled ? "bx--pagination__text" : "").trim())}>${pagesUnknown ? `${escape(itemText(pageSize * (page - 1) + 1, page * pageSize))}` : `${escape(itemRangeText(Math.min(pageSize * (page - 1) + 1, totalItems), Math.min(page * pageSize, totalItems), totalItems))}`}</span></div> <div${add_classes("bx--pagination__right".trim())}>${!pageInputDisabled ? `${validate_component(Select$1, "Select").$$render(
      $$result,
      {
        id: "bx--pagination-select-" + (id + 2),
        class: "bx--select__page-number",
        labelText: "Page number, of " + totalPages + " pages",
        inline: true,
        hideLabel: true,
        selected: page
      },
      {
        selected: ($$value) => {
          page = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(selectItems, (size, i) => {
            return `${validate_component(SelectItem$1, "SelectItem").$$render(
              $$result,
              {
                value: size + 1,
                text: (size + 1).toString()
              },
              {},
              {}
            )}`;
          })}`;
        }
      }
    )} <span${add_classes("bx--pagination__text".trim())}>${pagesUnknown ? `${escape(pageText(page))}` : `${escape(pageRangeText(page, totalPages))}`}</span>` : ``} ${validate_component(Button$1, "Button").$$render(
      $$result,
      {
        kind: "ghost",
        tooltipAlignment: "center",
        tooltipPosition: "top",
        icon: CaretLeft$1,
        iconDescription: backwardText,
        disabled: backButtonDisabled,
        class: "bx--pagination__button bx--pagination__button--backward " + (backButtonDisabled ? "bx--pagination__button--no-index" : "")
      },
      {},
      {}
    )} ${validate_component(Button$1, "Button").$$render(
      $$result,
      {
        kind: "ghost",
        tooltipAlignment: "end",
        tooltipPosition: "top",
        icon: CaretRight$1,
        iconDescription: forwardText,
        disabled: forwardButtonDisabled,
        class: "bx--pagination__button bx--pagination__button--forward " + (forwardButtonDisabled ? "bx--pagination__button--no-index" : "")
      },
      {},
      {}
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Pagination$1 = Pagination;

export { Pagination$1 as P };
//# sourceMappingURL=Pagination-ecdae900.js.map
