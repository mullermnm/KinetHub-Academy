import { s as subscribe, d as compute_rest_props, f as compute_slots, e as set_store_value } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape, v as validate_component, g as createEventDispatcher, s as setContext, i as add_classes, a as add_attribute, b as each, d as spread, f as escape_object, j as getContext, h as escape_attribute_value } from './ssr-10c5b872.js';
import { P as PrimaryButton } from './index11-4ef8d5a0.js';
import { B as Box } from './index17-3166eaf0.js';
import { h as currentOrgPlan, d as orgAudience, l as currentOrgMaxAudience, P as PLAN, c as currentOrg } from './org-8fc26a61.js';
import { t as t2 } from './translations-90190f83.js';
import { w as writable } from './index2-aea858a5.js';
import { C as ChevronRight$1 } from './ChevronRight-920dc215.js';
import { R as RadioButton$1 } from './RadioButton-4ac24df2.js';
import { g as globals } from './globals-84b16929.js';
import { S as Search$1 } from './Search-b1d61a12.js';
import { P as Pagination$1 } from './Pagination-ecdae900.js';
import { f as getOrgAudience } from './index6-4a1599e3.js';
import { B as Banner } from './Banner-bd19e4d5.js';
import './_sentry-release-injection-file-6be6a010.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import './index15-c5761f1e.js';
import './Close-73e0af44.js';
import './CaretRight-a9e49169.js';
import './Button-f9944a26.js';
import './SelectItem-00c29785.js';
import './ChevronDown-d5b93e8c.js';
import './WarningAltFilled-13a554ec.js';
import './navigation-cd282f65.js';
import './supabase-cbc58bc2.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './FlashFilled-4a89bd75.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "366f17c8-199c-4760-bf6d-376cc7c8f452", e._sentryDebugIdIdentifier = "sentry-dbid-366f17c8-199c-4760-bf6d-376cc7c8f452");
  } catch (e2) {
  }
}();
const InlineCheckbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["checked", "indeterminate", "title", "id", "ref"]);
  let { checked = false } = $$props;
  let { indeterminate = false } = $$props;
  let { title = void 0 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0)
    $$bindings.indeterminate(indeterminate);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<div${add_classes("bx--checkbox--inline".trim())}><input${spread(
    [
      { type: "checkbox" },
      {
        checked: (indeterminate ? false : checked) || null
      },
      {
        indeterminate: escape_attribute_value(indeterminate)
      },
      { id: escape_attribute_value(id) },
      escape_object($$restProps),
      {
        "aria-checked": escape_attribute_value(indeterminate ? void 0 : checked)
      }
    ],
    { classes: "bx--checkbox" }
  )}${add_attribute("this", ref, 0)}> <label${add_attribute("for", id, 0)}${add_attribute("title", title, 0)}${add_attribute("aria-label", $$props["aria-label"], 0)}${add_classes("bx--checkbox-label".trim())}></label></div>`;
});
const InlineCheckbox$1 = InlineCheckbox;
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "zebra", "useStaticWidth", "sortable", "stickyHeader", "tableStyle"]);
  let { size = void 0 } = $$props;
  let { zebra = false } = $$props;
  let { useStaticWidth = false } = $$props;
  let { sortable = false } = $$props;
  let { stickyHeader = false } = $$props;
  let { tableStyle = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.zebra === void 0 && $$bindings.zebra && zebra !== void 0)
    $$bindings.zebra(zebra);
  if ($$props.useStaticWidth === void 0 && $$bindings.useStaticWidth && useStaticWidth !== void 0)
    $$bindings.useStaticWidth(useStaticWidth);
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  if ($$props.stickyHeader === void 0 && $$bindings.stickyHeader && stickyHeader !== void 0)
    $$bindings.stickyHeader(stickyHeader);
  if ($$props.tableStyle === void 0 && $$bindings.tableStyle && tableStyle !== void 0)
    $$bindings.tableStyle(tableStyle);
  return `${stickyHeader ? `<section${spread([escape_object($$restProps)], {
    classes: "bx--data-table_inner-container"
  })}><table${add_attribute("style", tableStyle, 0)}${add_classes(("bx--data-table " + (size === "compact" ? "bx--data-table--compact" : "") + " " + (size === "short" ? "bx--data-table--short" : "") + " " + (size === "tall" ? "bx--data-table--tall" : "") + " " + (size === "medium" ? "bx--data-table--md" : "") + " " + (sortable ? "bx--data-table--sort" : "") + " " + (zebra ? "bx--data-table--zebra" : "") + " " + (useStaticWidth ? "bx--data-table--static" : "") + " " + (stickyHeader ? "bx--data-table--sticky-header" : "")).trim())}>${slots.default ? slots.default({}) : ``}</table></section>` : `<table${spread(
    [
      escape_object($$restProps),
      {
        style: escape_attribute_value(tableStyle)
      }
    ],
    {
      classes: "bx--data-table " + (size === "compact" ? "bx--data-table--compact" : "") + " " + (size === "short" ? "bx--data-table--short" : "") + " " + (size === "tall" ? "bx--data-table--tall" : "") + " " + (size === "medium" ? "bx--data-table--md" : "") + " " + (sortable ? "bx--data-table--sort" : "") + " " + (zebra ? "bx--data-table--zebra" : "") + " " + (useStaticWidth ? "bx--data-table--static" : "") + " " + (stickyHeader ? "bx--data-table--sticky-header" : "")
    }
  )}>${slots.default ? slots.default({}) : ``}</table>`}`;
});
const Table$1 = Table;
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<tbody${spread([{ "aria-live": "polite" }, escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</tbody>`;
});
const TableBody$1 = TableBody;
const TableCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return ` <td${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</td>`;
});
const TableCell$1 = TableCell;
const TableContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "description", "stickyHeader", "useStaticWidth"]);
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { stickyHeader = false } = $$props;
  let { useStaticWidth = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.stickyHeader === void 0 && $$bindings.stickyHeader && stickyHeader !== void 0)
    $$bindings.stickyHeader(stickyHeader);
  if ($$props.useStaticWidth === void 0 && $$bindings.useStaticWidth && useStaticWidth !== void 0)
    $$bindings.useStaticWidth(useStaticWidth);
  return `<div${spread([escape_object($$restProps)], {
    classes: "bx--data-table-container " + (useStaticWidth ? "bx--data-table-container--static" : "") + " " + (stickyHeader ? "bx--data-table--max-width" : "")
  })}>${title ? `<div${add_classes("bx--data-table-header".trim())}><h4${add_classes("bx--data-table-header__title".trim())}>${escape(title)}</h4> <p${add_classes("bx--data-table-header__description".trim())}>${escape(description)}</p></div>` : ``} ${slots.default ? slots.default({}) : ``}</div>`;
});
const TableContainer$1 = TableContainer;
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `  <thead${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</thead>`;
});
const TableHead$1 = TableHead;
const ArrowUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16 4L6 14 7.41 15.41 15 7.83 15 28 17 28 17 7.83 24.59 15.41 26 14 16 4z"></path></svg>`;
});
const ArrowUp$1 = ArrowUp;
const ArrowsVertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M27.6 20.6L24 24.2 24 4 22 4 22 24.2 18.4 20.6 17 22 23 28 29 22zM9 4L3 10 4.4 11.4 8 7.8 8 28 10 28 10 7.8 13.6 11.4 15 10z"></path></svg>`;
});
const ArrowsVertical$1 = ArrowsVertical;
const TableHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let $$restProps = compute_rest_props($$props, ["sortable", "sortDirection", "active", "scope", "translateWithId", "id"]);
  let { sortable = false } = $$props;
  let { sortDirection = "none" } = $$props;
  let { active = false } = $$props;
  let { scope = "col" } = $$props;
  let { translateWithId = () => "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  if ($$props.sortDirection === void 0 && $$bindings.sortDirection && sortDirection !== void 0)
    $$bindings.sortDirection(sortDirection);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.scope === void 0 && $$bindings.scope && scope !== void 0)
    $$bindings.scope(scope);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  ariaLabel = translateWithId();
  return ` ${sortable ? `<th${spread(
    [
      {
        "aria-sort": escape_attribute_value(active ? sortDirection : "none")
      },
      { scope: escape_attribute_value(scope) },
      {
        "data-header": escape_attribute_value(id)
      },
      escape_object($$restProps)
    ],
    {}
  )}><button type="button"${add_classes(("bx--table-sort " + (active ? "bx--table-sort--active" : "") + " " + (active && sortDirection === "descending" ? "bx--table-sort--ascending" : "")).trim())}><div${add_classes("bx--table-header-label".trim())}>${slots.default ? slots.default({}) : ``}</div> ${validate_component(ArrowUp$1, "ArrowUp").$$render(
    $$result,
    {
      size: 20,
      "aria-label": ariaLabel,
      class: "bx--table-sort__icon"
    },
    {},
    {}
  )} ${validate_component(ArrowsVertical$1, "ArrowsVertical").$$render(
    $$result,
    {
      size: 20,
      "aria-label": ariaLabel,
      class: "bx--table-sort__icon-unsorted"
    },
    {},
    {}
  )}</button></th>` : `<th${spread(
    [
      { scope: escape_attribute_value(scope) },
      {
        "data-header": escape_attribute_value(id)
      },
      escape_object($$restProps)
    ],
    {}
  )}><div${add_classes("bx--table-header-label".trim())}>${slots.default ? slots.default({}) : ``}</div></th>`}`;
});
const TableHeader$1 = TableHeader;
const TableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return ` <tr${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</tr>`;
});
const TableRow$1 = TableRow;
const DataTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let expandedRows;
  let rowIds;
  let expandableRowIds;
  let selectableRowIds;
  let selectAll;
  let indeterminate;
  let headerKeys;
  let tableCellsByRowId;
  let sortedRows;
  let ascending;
  let sorting;
  let sortingHeader;
  let displayedRows;
  let displayedSortedRows;
  let hasCustomHeaderWidth;
  let $$restProps = compute_rest_props($$props, [
    "headers",
    "rows",
    "size",
    "title",
    "description",
    "zebra",
    "sortable",
    "sortKey",
    "sortDirection",
    "expandable",
    "batchExpansion",
    "expandedRowIds",
    "nonExpandableRowIds",
    "radio",
    "selectable",
    "batchSelection",
    "selectedRowIds",
    "nonSelectableRowIds",
    "stickyHeader",
    "useStaticWidth",
    "pageSize",
    "page"
  ]);
  let $$slots = compute_slots(slots);
  let $tableRows, $$unsubscribe_tableRows;
  let { headers = [] } = $$props;
  let { rows = [] } = $$props;
  let { size = void 0 } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { zebra = false } = $$props;
  let { sortable = false } = $$props;
  let { sortKey = null } = $$props;
  let { sortDirection = "none" } = $$props;
  let { expandable = false } = $$props;
  let { batchExpansion = false } = $$props;
  let { expandedRowIds = [] } = $$props;
  let { nonExpandableRowIds = [] } = $$props;
  let { radio = false } = $$props;
  let { selectable = false } = $$props;
  let { batchSelection = false } = $$props;
  let { selectedRowIds = [] } = $$props;
  let { nonSelectableRowIds = [] } = $$props;
  let { stickyHeader = false } = $$props;
  let { useStaticWidth = false } = $$props;
  let { pageSize = 0 } = $$props;
  let { page = 0 } = $$props;
  createEventDispatcher();
  const batchSelectedIds = writable(false);
  const tableRows = writable(rows);
  $$unsubscribe_tableRows = subscribe(tableRows, (value) => $tableRows = value);
  const resolvePath = (object, path) => {
    if (path in object)
      return object[path];
    return path.split(/[\.\[\]\'\"]/).filter((p) => p).reduce((o, p) => o && typeof o === "object" ? o[p] : o, object);
  };
  setContext("DataTable", {
    batchSelectedIds,
    tableRows,
    resetSelectedRowIds: () => {
      selectAll = false;
      selectedRowIds = [];
      if (refSelectAll)
        refSelectAll.checked = false;
    }
  });
  let expanded = false;
  let parentRowId = null;
  let refSelectAll = null;
  const getDisplayedRows = (rows2, page2, pageSize2) => page2 && pageSize2 ? rows2.slice((page2 - 1) * pageSize2, page2 * pageSize2) : rows2;
  const formatHeaderWidth = (header) => {
    const styles = [
      header.width && `width: ${header.width}`,
      header.minWidth && `min-width: ${header.minWidth}`
    ].filter(Boolean);
    if (styles.length === 0)
      return void 0;
    return styles.join(";");
  };
  if ($$props.headers === void 0 && $$bindings.headers && headers !== void 0)
    $$bindings.headers(headers);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.zebra === void 0 && $$bindings.zebra && zebra !== void 0)
    $$bindings.zebra(zebra);
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  if ($$props.sortKey === void 0 && $$bindings.sortKey && sortKey !== void 0)
    $$bindings.sortKey(sortKey);
  if ($$props.sortDirection === void 0 && $$bindings.sortDirection && sortDirection !== void 0)
    $$bindings.sortDirection(sortDirection);
  if ($$props.expandable === void 0 && $$bindings.expandable && expandable !== void 0)
    $$bindings.expandable(expandable);
  if ($$props.batchExpansion === void 0 && $$bindings.batchExpansion && batchExpansion !== void 0)
    $$bindings.batchExpansion(batchExpansion);
  if ($$props.expandedRowIds === void 0 && $$bindings.expandedRowIds && expandedRowIds !== void 0)
    $$bindings.expandedRowIds(expandedRowIds);
  if ($$props.nonExpandableRowIds === void 0 && $$bindings.nonExpandableRowIds && nonExpandableRowIds !== void 0)
    $$bindings.nonExpandableRowIds(nonExpandableRowIds);
  if ($$props.radio === void 0 && $$bindings.radio && radio !== void 0)
    $$bindings.radio(radio);
  if ($$props.selectable === void 0 && $$bindings.selectable && selectable !== void 0)
    $$bindings.selectable(selectable);
  if ($$props.batchSelection === void 0 && $$bindings.batchSelection && batchSelection !== void 0)
    $$bindings.batchSelection(batchSelection);
  if ($$props.selectedRowIds === void 0 && $$bindings.selectedRowIds && selectedRowIds !== void 0)
    $$bindings.selectedRowIds(selectedRowIds);
  if ($$props.nonSelectableRowIds === void 0 && $$bindings.nonSelectableRowIds && nonSelectableRowIds !== void 0)
    $$bindings.nonSelectableRowIds(nonSelectableRowIds);
  if ($$props.stickyHeader === void 0 && $$bindings.stickyHeader && stickyHeader !== void 0)
    $$bindings.stickyHeader(stickyHeader);
  if ($$props.useStaticWidth === void 0 && $$bindings.useStaticWidth && useStaticWidth !== void 0)
    $$bindings.useStaticWidth(useStaticWidth);
  if ($$props.pageSize === void 0 && $$bindings.pageSize && pageSize !== void 0)
    $$bindings.pageSize(pageSize);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    headers.reduce((a, c) => ({ ...a, [c.key]: c.key }), {});
    expandedRows = expandedRowIds.reduce((a, id) => ({ ...a, [id]: true }), {});
    {
      batchSelectedIds.set(selectedRowIds);
    }
    headerKeys = headers.map(({ key }) => key);
    tableCellsByRowId = rows.reduce(
      (rows2, row) => {
        rows2[row.id] = headerKeys.map((key, index) => ({
          key,
          value: resolvePath(row, key),
          display: headers[index].display
        }));
        return rows2;
      },
      {}
    );
    set_store_value(tableRows, $tableRows = rows, $tableRows);
    rowIds = $tableRows.map((row) => row.id);
    expandableRowIds = rowIds.filter((id) => !nonExpandableRowIds.includes(id));
    selectableRowIds = rowIds.filter((id) => !nonSelectableRowIds.includes(id));
    selectAll = selectableRowIds.length > 0 && selectedRowIds.length === selectableRowIds.length;
    indeterminate = selectedRowIds.length > 0 && selectedRowIds.length < selectableRowIds.length;
    {
      if (batchExpansion) {
        expandable = true;
        expanded = expandedRowIds.length === expandableRowIds.length;
      }
    }
    {
      if (radio || batchSelection)
        selectable = true;
    }
    sortedRows = [...$tableRows];
    ascending = sortDirection === "ascending";
    sorting = sortable && sortKey != null;
    sortingHeader = headers.find((header) => header.key === sortKey);
    {
      if (sorting) {
        if (sortDirection === "none") {
          sortedRows = $tableRows;
        } else {
          sortedRows = [...$tableRows].sort((a, b) => {
            const itemA = ascending ? resolvePath(a, sortKey) : resolvePath(b, sortKey);
            const itemB = ascending ? resolvePath(b, sortKey) : resolvePath(a, sortKey);
            if (sortingHeader?.sort)
              return sortingHeader.sort(itemA, itemB);
            if (typeof itemA === "number" && typeof itemB === "number")
              return itemA - itemB;
            if ([itemA, itemB].every((item) => !item && item !== 0))
              return 0;
            if (!itemA && itemA !== 0)
              return ascending ? 1 : -1;
            if (!itemB && itemB !== 0)
              return ascending ? -1 : 1;
            return itemA.toString().localeCompare(itemB.toString(), "en", { numeric: true });
          });
        }
      }
    }
    displayedRows = getDisplayedRows($tableRows, page, pageSize);
    displayedSortedRows = getDisplayedRows(sortedRows, page, pageSize);
    hasCustomHeaderWidth = headers.some((header) => header.width || header.minWidth);
    $$rendered = `${validate_component(TableContainer$1, "TableContainer").$$render($$result, Object.assign({}, { useStaticWidth }, $$restProps), {}, {
      default: () => {
        return `${title || $$slots.title || description || $$slots.description ? `<div${add_classes("bx--data-table-header".trim())}>${title || $$slots.title ? `<h4${add_classes("bx--data-table-header__title".trim())}>${slots.title ? slots.title({}) : `${escape(title)}`}</h4>` : ``} ${description || $$slots.description ? `<p${add_classes("bx--data-table-header__description".trim())}>${slots.description ? slots.description({}) : `${escape(description)}`}</p>` : ``}</div>` : ``} ${slots.default ? slots.default({}) : ``} ${validate_component(Table$1, "Table").$$render(
          $$result,
          {
            zebra,
            size,
            stickyHeader,
            sortable,
            useStaticWidth,
            tableStyle: hasCustomHeaderWidth && "table-layout: fixed"
          },
          {},
          {
            default: () => {
              return `${validate_component(TableHead$1, "TableHead").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(TableRow$1, "TableRow").$$render($$result, {}, {}, {
                    default: () => {
                      return `${expandable ? `<th scope="col"${add_attribute("data-previous-value", expanded ? "collapsed" : void 0, 0)}${add_classes("bx--table-expand".trim())}>${batchExpansion ? `<button type="button"${add_classes("bx--table-expand__button".trim())}>${validate_component(ChevronRight$1, "ChevronRight").$$render($$result, { class: "bx--table-expand__svg" }, {}, {})}</button>` : ``}</th>` : ``} ${selectable && !batchSelection ? `<th scope="col"></th>` : ``} ${batchSelection && !radio ? `<th scope="col"${add_classes("bx--table-column-checkbox".trim())}>${validate_component(InlineCheckbox$1, "InlineCheckbox").$$render(
                        $$result,
                        {
                          "aria-label": "Select all rows",
                          checked: selectAll,
                          indeterminate,
                          ref: refSelectAll
                        },
                        {
                          ref: ($$value) => {
                            refSelectAll = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}</th>` : ``} ${each(headers, (header) => {
                        return `${header.empty ? `<th scope="col"${add_attribute("style", formatHeaderWidth(header), 0)}></th>` : `${validate_component(TableHeader$1, "TableHeader").$$render(
                          $$result,
                          {
                            id: header.key,
                            style: formatHeaderWidth(header),
                            sortable: sortable && header.sort !== false,
                            sortDirection: sortKey === header.key ? sortDirection : "none",
                            active: sortKey === header.key
                          },
                          {},
                          {
                            default: () => {
                              return `${slots["cell-header"] ? slots["cell-header"]({ header }) : `${escape(header.value)}`} `;
                            }
                          }
                        )}`}`;
                      })}`;
                    }
                  })}`;
                }
              })} ${validate_component(TableBody$1, "TableBody").$$render($$result, {}, {}, {
                default: () => {
                  return `${each(sorting ? displayedSortedRows : displayedRows, (row, i) => {
                    return `${validate_component(TableRow$1, "TableRow").$$render(
                      $$result,
                      {
                        "data-row": row.id,
                        "data-parent-row": expandable ? true : void 0,
                        class: (selectedRowIds.includes(row.id) ? "bx--data-table--selected" : "") + " " + (expandedRows[row.id] ? "bx--expandable-row" : "") + " " + (expandable ? "bx--parent-row" : "") + " " + (expandable && parentRowId === row.id ? "bx--expandable-row--hover" : "")
                      },
                      {},
                      {
                        default: () => {
                          return `${expandable ? `${validate_component(TableCell$1, "TableCell").$$render(
                            $$result,
                            {
                              class: "bx--table-expand",
                              headers: "expand",
                              "data-previous-value": !nonExpandableRowIds.includes(row.id) && expandedRows[row.id] ? "collapsed" : void 0
                            },
                            {},
                            {
                              default: () => {
                                return `${!nonExpandableRowIds.includes(row.id) ? `<button type="button"${add_attribute(
                                  "aria-label",
                                  expandedRows[row.id] ? "Collapse current row" : "Expand current row",
                                  0
                                )}${add_classes("bx--table-expand__button".trim())}>${validate_component(ChevronRight$1, "ChevronRight").$$render($$result, { class: "bx--table-expand__svg" }, {}, {})} </button>` : ``} `;
                              }
                            }
                          )}` : ``} ${selectable ? `<td${add_classes(("bx--table-column-checkbox " + (radio ? "bx--table-column-radio" : "")).trim())}>${!nonSelectableRowIds.includes(row.id) ? `${radio ? `${validate_component(RadioButton$1, "RadioButton").$$render(
                            $$result,
                            {
                              name: "select-row-" + row.id,
                              checked: selectedRowIds.includes(row.id)
                            },
                            {},
                            {}
                          )}` : `${validate_component(InlineCheckbox$1, "InlineCheckbox").$$render(
                            $$result,
                            {
                              name: "select-row-" + row.id,
                              checked: selectedRowIds.includes(row.id)
                            },
                            {},
                            {}
                          )}`}` : ``} </td>` : ``} ${each(tableCellsByRowId[row.id], (cell, j) => {
                            return `${headers[j].empty ? `<td${add_classes((headers[j].columnMenu ? "bx--table-column-menu" : "").trim())}>${slots.cell ? slots.cell({ row, cell, rowIndex: i, cellIndex: j }) : ` ${escape(cell.display ? cell.display(cell.value) : cell.value)} `} </td>` : `${validate_component(TableCell$1, "TableCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `${slots.cell ? slots.cell({ row, cell, rowIndex: i, cellIndex: j }) : ` ${escape(cell.display ? cell.display(cell.value) : cell.value)} `} `;
                              }
                            })}`}`;
                          })} `;
                        }
                      }
                    )} ${expandable ? `<tr data-child-row${add_classes("bx--expandable-row".trim())}>${expandedRows[row.id] && !nonExpandableRowIds.includes(row.id) ? `${validate_component(TableCell$1, "TableCell").$$render(
                      $$result,
                      {
                        colspan: selectable ? headers.length + 2 : headers.length + 1
                      },
                      {},
                      {
                        default: () => {
                          return `<div${add_classes("bx--child-row-inner-container".trim())}>${slots["expanded-row"] ? slots["expanded-row"]({ row }) : ``}</div> `;
                        }
                      }
                    )}` : ``} </tr>` : ``}`;
                  })}`;
                }
              })}`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_tableRows();
  return $$rendered;
});
const DataTable$1 = DataTable;
const DataTableSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let values;
  let cols;
  let $$restProps = compute_rest_props($$props, ["columns", "rows", "size", "zebra", "showHeader", "headers", "showToolbar"]);
  let { columns = 5 } = $$props;
  let { rows = 5 } = $$props;
  let { size = void 0 } = $$props;
  let { zebra = false } = $$props;
  let { showHeader = true } = $$props;
  let { headers = [] } = $$props;
  let { showToolbar = true } = $$props;
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.zebra === void 0 && $$bindings.zebra && zebra !== void 0)
    $$bindings.zebra(zebra);
  if ($$props.showHeader === void 0 && $$bindings.showHeader && showHeader !== void 0)
    $$bindings.showHeader(showHeader);
  if ($$props.headers === void 0 && $$bindings.headers && headers !== void 0)
    $$bindings.headers(headers);
  if ($$props.showToolbar === void 0 && $$bindings.showToolbar && showToolbar !== void 0)
    $$bindings.showToolbar(showToolbar);
  values = headers.map((header) => header.value !== void 0 ? header.value : header);
  cols = Array.from(
    {
      length: headers.length > 0 ? headers.length : columns
    },
    (_, i) => i
  );
  return ` <div${spread([escape_object($$restProps)], {
    classes: "bx--skeleton bx--data-table-container"
  })}>${showHeader ? `<div${add_classes("bx--data-table-header".trim())}><div${add_classes("bx--data-table-header__title".trim())}></div> <div${add_classes("bx--data-table-header__description".trim())}></div></div>` : ``} ${showToolbar ? `<section aria-label="data table toolbar"${add_classes("bx--table-toolbar".trim())}><div${add_classes("bx--toolbar-content".trim())}><span${add_classes("bx--skeleton bx--btn bx--btn--sm".trim())}></span></div></section>` : ``}   <table${add_classes(("bx--skeleton bx--data-table " + (size === "compact" ? "bx--data-table--compact" : "") + " " + (size === "short" ? "bx--data-table--short" : "") + " " + (size === "tall" ? "bx--data-table--tall" : "") + " " + (zebra ? "bx--data-table--zebra" : "")).trim())}><thead><tr>${each(cols, (col) => {
    return `${typeof values[col] === "object" && values[col].empty === true ? `<th></th>` : `<th>${escape(values[col] || "")}</th>`}`;
  })}</tr></thead> <tbody>${each(Array.from({ length: rows }, (_, i) => i), (row) => {
    return `<tr>${each(cols, (col) => {
      return `<td data-svelte-h="svelte-aicdln"><span></span></td>`;
    })} </tr>`;
  })}</tbody></table></div>`;
});
const DataTableSkeleton$1 = DataTableSkeleton;
const Toolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size"]);
  let { size = "default" } = $$props;
  let ref = null;
  const overflowVisible = writable(false);
  setContext("Toolbar", {
    overflowVisible,
    setOverflowVisible: (visible) => {
      overflowVisible.set(visible);
    }
  });
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<section${spread([{ "aria-label": "data table toolbar" }, escape_object($$restProps)], {
    classes: "bx--table-toolbar " + (size === "sm" ? "bx--table-toolbar--small" : "") + " " + (size === "default" ? "bx--table-toolbar--normal" : ""),
    styles: { "z-index": 1 }
  })}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</section>`;
});
const Toolbar$1 = Toolbar;
const ToolbarContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div${add_classes("bx--toolbar-content".trim())}>${slots.default ? slots.default({}) : ``}</div>`;
});
const ToolbarContent$1 = ToolbarContent;
const { Object: Object_1 } = globals;
const ToolbarSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let originalRows;
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "value",
    "expanded",
    "persistent",
    "disabled",
    "shouldFilterRows",
    "filteredRowIds",
    "tabindex",
    "ref"
  ]);
  let $tableRows, $$unsubscribe_tableRows;
  let { value = "" } = $$props;
  let { expanded = false } = $$props;
  let { persistent = false } = $$props;
  let { disabled = false } = $$props;
  let { shouldFilterRows = false } = $$props;
  let { filteredRowIds = [] } = $$props;
  let { tabindex = "0" } = $$props;
  let { ref = null } = $$props;
  const { tableRows } = getContext("DataTable") ?? {};
  $$unsubscribe_tableRows = subscribe(tableRows, (value2) => $tableRows = value2);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.persistent === void 0 && $$bindings.persistent && persistent !== void 0)
    $$bindings.persistent(persistent);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.shouldFilterRows === void 0 && $$bindings.shouldFilterRows && shouldFilterRows !== void 0)
    $$bindings.shouldFilterRows(shouldFilterRows);
  if ($$props.filteredRowIds === void 0 && $$bindings.filteredRowIds && filteredRowIds !== void 0)
    $$bindings.filteredRowIds(filteredRowIds);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    originalRows = tableRows ? [...$tableRows] : [];
    {
      if (shouldFilterRows) {
        let rows = originalRows;
        if (value.trim().length > 0) {
          if (shouldFilterRows === true) {
            rows = rows.filter((row) => {
              return Object.entries(row).filter(([key]) => key !== "id").some(([key, _value]) => {
                if (typeof _value === "string" || typeof _value === "number") {
                  return (_value + "")?.toLowerCase().includes(value.trim().toLowerCase());
                }
              });
            });
          } else if (typeof shouldFilterRows === "function") {
            rows = rows.filter((row) => shouldFilterRows(row, value) ?? false);
          }
        }
        tableRows.set(rows);
        filteredRowIds = rows.map((row) => row.id);
      }
    }
    expanded = !!value.length;
    classes = [
      expanded && "bx--toolbar-search-container-active",
      persistent ? "bx--toolbar-search-container-persistent" : "bx--toolbar-search-container-expandable",
      disabled && "bx--toolbar-search-container-disabled"
    ].filter(Boolean).join(" ");
    $$rendered = `${validate_component(Search$1, "Search").$$render(
      $$result,
      Object_1.assign(
        {},
        { tabindex },
        { disabled },
        $$restProps,
        {
          searchClass: classes + " " + $$restProps.class
        },
        { ref },
        { value }
      ),
      {
        ref: ($$value) => {
          ref = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_tableRows();
  return $$rendered;
});
const ToolbarSearch$1 = ToolbarSearch;
let searchValue = "";
const AudienceList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $orgAudience, $$unsubscribe_orgAudience;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_orgAudience = subscribe(orgAudience, (value) => $orgAudience = value);
  let { isLoading = false } = $$props;
  const headers = [
    { key: "name", value: $t("audience.name") },
    {
      key: "email",
      value: $t("audience.email")
    },
    {
      key: "date_joined",
      value: $t("audience.date_joined")
    }
  ];
  let pageSize = 5;
  let page = 1;
  let filteredRowIds = [];
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${isLoading ? `${validate_component(DataTableSkeleton$1, "DataTableSkeleton").$$render($$result, { headers, rows: pageSize }, {}, {})}` : `${validate_component(DataTable$1, "DataTable").$$render(
      $$result,
      {
        size: "tall",
        headers,
        rows: $orgAudience,
        pageSize,
        page
      },
      {},
      {
        default: () => {
          return `${validate_component(Toolbar$1, "Toolbar").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(ToolbarContent$1, "ToolbarContent").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(ToolbarSearch$1, "ToolbarSearch").$$render(
                    $$result,
                    {
                      persistent: true,
                      value: searchValue,
                      shouldFilterRows: true,
                      filteredRowIds
                    },
                    {
                      filteredRowIds: ($$value) => {
                        filteredRowIds = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}`} ${validate_component(Pagination$1, "Pagination").$$render(
      $$result,
      {
        totalItems: filteredRowIds.length,
        pageSizeInputDisabled: true,
        pageSize,
        page
      },
      {
        pageSize: ($$value) => {
          pageSize = $$value;
          $$settled = false;
        },
        page: ($$value) => {
          page = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_t();
  $$unsubscribe_orgAudience();
  return $$rendered;
});
const AudienceEmptyIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="79.7922" cy="32.4026" r="12.5649" stroke="#0F62FE" stroke-width="1.67532"></circle><path d="M69.7402 40.7794L74.2444 37.7766C77.6914 35.4786 82.0846 35.1362 85.8461 36.8722L90.6818 39.1041" stroke="#0F62FE" stroke-width="1.67532"></path><circle cx="79.4199" cy="28.68" r="3.81602" stroke="#0F62FE" stroke-width="1.67532"></circle><circle cx="106.597" cy="62.5588" r="12.5649" stroke="#0F62FE" stroke-width="1.67532"></circle><path d="M96.5455 70.9357L101.05 67.9329C104.497 65.6349 108.89 65.2924 112.651 67.0285L117.487 69.2603" stroke="#0F62FE" stroke-width="1.67532"></path><circle cx="106.225" cy="58.8363" r="3.81602" stroke="#0F62FE" stroke-width="1.67532"></circle><circle cx="71.4156" cy="79.3128" r="12.5649" stroke="#0F62FE" stroke-width="1.67532"></circle><path d="M61.3636 87.6896L65.8678 84.6868C69.3148 82.3888 73.708 82.0463 77.4695 83.7824L82.3052 86.0143" stroke="#0F62FE" stroke-width="1.67532"></path><circle cx="71.0433" cy="75.5902" r="3.81602" stroke="#0F62FE" stroke-width="1.67532"></circle><rect x="5.5" y="49.5" width="24.5" height="5" rx="2.5" stroke="#1339A6"></rect><rect x="5.5" y="61.5" width="44" height="5" rx="2.5" stroke="#1339A6"></rect><rect x="5.5" y="73.5" width="44" height="5" rx="2.5" stroke="#1339A6"></rect><rect x="5.5" y="85.5" width="44" height="5" rx="2.5" stroke="#1339A6"></rect></svg>`;
});
const Audience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrg, $$unsubscribe_currentOrg;
  let $orgAudience, $$unsubscribe_orgAudience;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_orgAudience = subscribe(orgAudience, (value) => $orgAudience = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let isLoading = false;
  async function fetchInitData(orgId) {
    if (!orgId)
      return;
    isLoading = true;
    await getOrgAudience(orgId);
    isLoading = false;
  }
  {
    fetchInitData($currentOrg.id);
  }
  $$unsubscribe_currentOrg();
  $$unsubscribe_orgAudience();
  $$unsubscribe_t();
  return `<div class="flex items-center justify-center lg:justify-start flex-wrap my-4 m-auto">${$orgAudience.length || isLoading ? `${validate_component(AudienceList, "AudienceList").$$render($$result, { isLoading }, {}, {})}` : `${validate_component(Box, "Box").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(AudienceEmptyIcon, "AudienceEmptyIcon").$$render($$result, {}, {}, {})} <h3 class="dark:text-white text-2xl text-center my-5">${escape($t("audience.no_audience"))}!</h3> <p class="dark:text-white w-1/3 text-center">${escape($t("audience.manage"))}.</p>`;
    }
  })}`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $currentOrgPlan, $$unsubscribe_currentOrgPlan;
  let $orgAudience, $$unsubscribe_orgAudience;
  let $currentOrgMaxAudience, $$unsubscribe_currentOrgMaxAudience;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_currentOrgPlan = subscribe(currentOrgPlan, (value) => $currentOrgPlan = value);
  $$unsubscribe_orgAudience = subscribe(orgAudience, (value) => $orgAudience = value);
  $$unsubscribe_currentOrgMaxAudience = subscribe(currentOrgMaxAudience, (value) => $currentOrgMaxAudience = value);
  let isLoading = false;
  function exportAudience() {
    isLoading = true;
    alert("This feature is coming soon");
    isLoading = false;
  }
  $$unsubscribe_t();
  $$unsubscribe_currentOrgPlan();
  $$unsubscribe_orgAudience();
  $$unsubscribe_currentOrgMaxAudience();
  return `${$$result.head += `<!-- HEAD_svelte-2d4dy3_START -->${$$result.title = `<title>Audience - KinetsHub</title>`, ""}<!-- HEAD_svelte-2d4dy3_END -->`, ""} <section class="w-full max-w-4xl mx-auto"><div class="py-10 px-5"><div class="flex items-center justify-between mb-10"><div class="flex items-end"><h1 class="dark:text-white text-2xl md:text-3xl font-bold m-0">${escape($t("audience.title"))}</h1> ${$currentOrgPlan?.plan_name !== PLAN.ENTERPRISE ? `<span class="ml-2">(${escape($orgAudience.length)} / ${escape($currentOrgMaxAudience)})</span>` : ``}</div> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      label: $t("audience.export"),
      onClick: exportAudience,
      isDisabled: isLoading,
      isLoading
    },
    {},
    {}
  )}</div> ${$orgAudience.length >= $currentOrgMaxAudience ? `${validate_component(Banner, "UpgradeBanner").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($t("audience.upgrade"))}`;
    }
  })}` : ``} ${validate_component(Audience, "Audience").$$render($$result, {}, {}, {})}</div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e9c54d9d.js.map
