import { d as compute_rest_props, s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, g as createEventDispatcher, s as setContext, d as spread, f as escape_object, h as escape_attribute_value } from './ssr-10c5b872.js';
import { w as writable } from './index2-aea858a5.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3e8f5e21-dd0a-4840-8724-98693018d172", e._sentryDebugIdIdentifier = "sentry-dbid-3e8f5e21-dd0a-4840-8724-98693018d172");
  } catch (e2) {
  }
}();
const StructuredList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["selected", "condensed", "flush", "selection"]);
  let $selectedValue, $$unsubscribe_selectedValue;
  let { selected = void 0 } = $$props;
  let { condensed = false } = $$props;
  let { flush = false } = $$props;
  let { selection = false } = $$props;
  const dispatch = createEventDispatcher();
  const selectedValue = writable(selected);
  $$unsubscribe_selectedValue = subscribe(selectedValue, (value) => $selectedValue = value);
  setContext("StructuredListWrapper", {
    selectedValue,
    update: (value) => {
      selectedValue.set(value);
    }
  });
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.condensed === void 0 && $$bindings.condensed && condensed !== void 0)
    $$bindings.condensed(condensed);
  if ($$props.flush === void 0 && $$bindings.flush && flush !== void 0)
    $$bindings.flush(flush);
  if ($$props.selection === void 0 && $$bindings.selection && selection !== void 0)
    $$bindings.selection(selection);
  selected = $selectedValue;
  {
    dispatch("change", $selectedValue);
  }
  $$unsubscribe_selectedValue();
  return `  <div${spread([{ role: "table" }, escape_object($$restProps)], {
    classes: "bx--structured-list " + (selection ? "bx--structured-list--selection" : "") + " " + (condensed ? "bx--structured-list--condensed" : "") + " " + (flush ? "bx--structured-list--flush" : "")
  })}>${slots.default ? slots.default({}) : ``}</div>`;
});
const StructuredList$1 = StructuredList;
const StructuredListBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `  <div${spread([{ role: "rowgroup" }, escape_object($$restProps)], {
    classes: "bx--structured-list-tbody"
  })}>${slots.default ? slots.default({}) : ``}</div>`;
});
const StructuredListBody$1 = StructuredListBody;
const StructuredListHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `  <div${spread([{ role: "rowgroup" }, escape_object($$restProps)], {
    classes: "bx--structured-list-thead"
  })}>${slots.default ? slots.default({}) : ``}</div>`;
});
const StructuredListHead$1 = StructuredListHead;
const StructuredListCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["head", "noWrap"]);
  let { head = false } = $$props;
  let { noWrap = false } = $$props;
  if ($$props.head === void 0 && $$bindings.head && head !== void 0)
    $$bindings.head(head);
  if ($$props.noWrap === void 0 && $$bindings.noWrap && noWrap !== void 0)
    $$bindings.noWrap(noWrap);
  return ` <div${spread(
    [
      {
        role: escape_attribute_value(head ? "columnheader" : "cell")
      },
      escape_object($$restProps)
    ],
    {
      classes: (head ? "bx--structured-list-th" : "") + " " + (!head ? "bx--structured-list-td" : "") + " " + (noWrap ? "bx--structured-list-content--nowrap" : "")
    }
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const StructuredListCell$1 = StructuredListCell;
const StructuredListRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["head", "label", "tabindex"]);
  let { head = false } = $$props;
  let { label = false } = $$props;
  let { tabindex = "0" } = $$props;
  if ($$props.head === void 0 && $$bindings.head && head !== void 0)
    $$bindings.head(head);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  return ` ${label ? `   <label${spread(
    [
      {
        tabindex: escape_attribute_value(tabindex)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--structured-list-row " + (head ? "bx--structured-list-row--header-row" : "")
    }
  )}>${slots.default ? slots.default({}) : ``}</label>` : ` <div${spread([{ role: "row" }, escape_object($$restProps)], {
    classes: "bx--structured-list-row " + (head ? "bx--structured-list-row--header-row" : "")
  })}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
const StructuredListRow$1 = StructuredListRow;

export { StructuredList$1 as S, StructuredListHead$1 as a, StructuredListRow$1 as b, StructuredListCell$1 as c, StructuredListBody$1 as d };
//# sourceMappingURL=StructuredListRow-3dfbce79.js.map
