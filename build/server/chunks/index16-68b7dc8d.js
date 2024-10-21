import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, m as missing_component, d as spread, h as escape_attribute_value, f as escape_object, g as createEventDispatcher, j as getContext, s as setContext, i as add_classes } from './ssr-10c5b872.js';
import { S as SkeletonPlaceholder$1 } from './SkeletonPlaceholder-be3b5db2.js';
import { S as SkeletonText$1 } from './SkeletonText-d2851876.js';
import { s as subscribe, c as null_to_empty, d as compute_rest_props, f as compute_slots } from './utils-26d532f8.js';
import { g as getCurrencyFormatter } from './getCurrencyFormatter-56d8d145.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { t as t2 } from './translations-90190f83.js';
import { C as COURSE_TYPE } from './index15-c5761f1e.js';
import { R as RadioButtonChecked } from './RadioButtonChecked-49b8cfed.js';
import { c as calcCourseDiscount } from './course-a9172902.js';
import { w as writable } from './index2-aea858a5.js';
import { C as CaretRight$1 } from './CaretRight-a9e49169.js';
import { I as ImageLoader$1 } from './ImageLoader-d6ed26af.js';
import { T as Tag$1 } from './Tag-37c50bfd.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c69d138c-e4e7-4fe6-8ad7-2819ab4b2ee9", e._sentryDebugIdIdentifier = "sentry-dbid-c69d138c-e4e7-4fe6-8ad7-2819ab4b2ee9");
  } catch (e2) {
  }
}();
let direction = 1;
const ContextMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let level;
  let $$restProps = compute_rest_props($$props, ["target", "open", "x", "y", "ref"]);
  let $$unsubscribe_hasPopup;
  let { target = null } = $$props;
  let { open = false } = $$props;
  let { x = 0 } = $$props;
  let { y = 0 } = $$props;
  let { ref = null } = $$props;
  createEventDispatcher();
  const position = writable([x, y]);
  const currentIndex = writable(-1);
  const hasPopup = writable(false);
  $$unsubscribe_hasPopup = subscribe(hasPopup, (value) => value);
  const menuOffsetX = writable(0);
  const ctx = getContext("ContextMenu");
  let focusIndex = -1;
  function close() {
    open = false;
    x = 0;
    y = 0;
    focusIndex = -1;
  }
  function openMenu(e) {
    const { height, width } = ref.getBoundingClientRect();
    if (open || x === 0) {
      if (window.innerWidth - width < e.x) {
        x = e.x - width;
      } else {
        x = e.x;
      }
    }
    if (open || y === 0) {
      menuOffsetX.set(e.x);
      if (window.innerHeight - height < e.y) {
        y = e.y - height;
      } else {
        y = e.y;
      }
    }
    position.set([x, y]);
    open = true;
    e.target;
  }
  setContext("ContextMenu", {
    menuOffsetX,
    currentIndex,
    position,
    close,
    setPopup: (popup) => {
      hasPopup.set(popup);
    }
  });
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (target != null) {
      if (Array.isArray(target)) {
        target.forEach((node) => node?.addEventListener("contextmenu", openMenu));
      } else {
        target.addEventListener("contextmenu", openMenu);
      }
    }
  }
  level = !ctx ? 1 : 2;
  {
    currentIndex.set(focusIndex);
  }
  $$unsubscribe_hasPopup();
  return `  <ul${spread(
    [
      { role: "menu" },
      { tabindex: "-1" },
      {
        "data-direction": escape_attribute_value(direction)
      },
      {
        "data-level": escape_attribute_value(level)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--menu " + (open ? "bx--menu--open" : "") + " " + (open && x === 0 && y === 0 ? "bx--menu--invisible" : "") + " " + (level === 1 ? "bx--menu--root" : ""),
      styles: { "left": `${x}px`, "top": `${y}px` }
    }
  )}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const ContextMenu$1 = ContextMenu;
const ContextMenuDivider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<li role="separator"${add_classes("bx--menu-divider".trim())}></li>`;
});
const ContextMenuDivider$1 = ContextMenuDivider;
const Checkmark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>`;
});
const Checkmark$1 = Checkmark;
const ContextMenuOption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isSelectable;
  let isRadio;
  let subOptions;
  let $$restProps = compute_rest_props($$props, [
    "kind",
    "disabled",
    "indented",
    "icon",
    "labelText",
    "selected",
    "selectable",
    "shortcutText",
    "id",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let { kind = "default" } = $$props;
  let { disabled = false } = $$props;
  let { indented = false } = $$props;
  let { icon = void 0 } = $$props;
  let { labelText = "" } = $$props;
  let { selected = false } = $$props;
  let { selectable = false } = $$props;
  let { shortcutText = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  createEventDispatcher();
  const ctx = getContext("ContextMenu");
  const ctxGroup = getContext("ContextMenuGroup");
  const ctxRadioGroup = getContext("ContextMenuRadioGroup");
  let role = "menuitem";
  let submenuOpen = false;
  let submenuPosition = [0, 0];
  ctx.position.subscribe((position) => {
  });
  ctx.menuOffsetX.subscribe((_menuOffsetX) => {
  });
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.indented === void 0 && $$bindings.indented && indented !== void 0)
    $$bindings.indented(indented);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.selectable === void 0 && $$bindings.selectable && selectable !== void 0)
    $$bindings.selectable(selectable);
  if ($$props.shortcutText === void 0 && $$bindings.shortcutText && shortcutText !== void 0)
    $$bindings.shortcutText(shortcutText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  isSelectable = !!ctxGroup || selectable;
  isRadio = !!ctxRadioGroup;
  subOptions = $$slots.default;
  {
    ctx.setPopup(submenuOpen);
  }
  {
    {
      if (isSelectable) {
        indented = true;
        role = "menuitemcheckbox";
        if (selected) {
          if (ctxGroup)
            ctxGroup.addOption({ id });
          icon = Checkmark$1;
        } else {
          icon = void 0;
        }
      }
      if (isRadio) {
        indented = true;
        role = "menuitemradio";
        ctxRadioGroup.addOption({ id });
        if (selected) {
          if (ctxRadioGroup)
            ctxRadioGroup.setOption({ id });
          icon = Checkmark$1;
        } else {
          icon = void 0;
        }
      }
    }
  }
  return `<li${spread(
    [
      { role: escape_attribute_value(role) },
      { tabindex: "-1" },
      {
        "aria-disabled": escape_attribute_value(!subOptions && disabled)
      },
      {
        "aria-haspopup": escape_attribute_value(subOptions ? true : void 0)
      },
      {
        "aria-expanded": escape_attribute_value(subOptions ? submenuOpen : void 0)
      },
      {
        indented: escape_attribute_value(indented)
      },
      {
        "aria-checked": escape_attribute_value(isSelectable || isRadio ? selected : void 0)
      },
      {
        "data-nested": escape_attribute_value(ref && ref.closest(".bx--menu").getAttribute("data-level") === "2")
      },
      {
        "data-sub": escape_attribute_value(subOptions)
      },
      { "data-id": escape_attribute_value(id) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--menu-option bx--menu-option--disabled " + (subOptions && submenuOpen ? "bx--menu-option--active" : "") + " " + (!subOptions && kind === "danger" ? "bx--menu-option--danger" : "")
    }
  )}${add_attribute("this", ref, 0)}>${subOptions ? `<div${add_classes(("bx--menu-option__content " + (disabled ? "bx--menu-option__content--disabled" : "")).trim())}>${indented ? `<div${add_classes("bx--menu-option__icon".trim())}>${slots.icon ? slots.icon({}) : ` ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} `}</div>` : ``} <span${add_attribute("title", labelText, 0)}${add_classes("bx--menu-option__label".trim())}>${slots.labelText ? slots.labelText({}) : `${escape(labelText)}`}</span> <div${add_classes("bx--menu-option__info".trim())}>${validate_component(CaretRight$1, "CaretRight").$$render($$result, {}, {}, {})}</div></div> ${validate_component(ContextMenu$1, "ContextMenu").$$render(
    $$result,
    {
      open: submenuOpen,
      x: submenuPosition[0],
      y: submenuPosition[1]
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}` : `<div${add_classes(("bx--menu-option__content " + (disabled ? "bx--menu-option__content--disabled" : "")).trim())}>${indented ? `<div${add_classes("bx--menu-option__icon".trim())}>${slots.icon ? slots.icon({}) : ` ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} `}</div>` : ``} <span${add_attribute("title", labelText, 0)}${add_classes("bx--menu-option__label".trim())}>${slots.labelText ? slots.labelText({}) : `${escape(labelText)}`}</span> <div${add_classes("bx--menu-option__info".trim())}>${slots.shortcutText ? slots.shortcutText({}) : `${escape(shortcutText)}`}</div></div>`}</li>`;
});
const ContextMenuOption$1 = ContextMenuOption;
const CopyFile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M27.4,14.7l-6.1-6.1C21,8.2,20.5,8,20,8h-8c-1.1,0-2,0.9-2,2v18c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V16.1	C28,15.6,27.8,15.1,27.4,14.7z M20,10l5.9,6H20V10z M12,28V10h6v6c0,1.1,0.9,2,2,2h6l0,10H12z"></path><path d="M6,18H4V4c0-1.1,0.9-2,2-2h14v2H6V18z"></path></svg>`;
});
const Growth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M20,8v2h6.5859L18,18.5859,13.707,14.293a.9994.9994,0,0,0-1.414,0L2,24.5859,3.4141,26,13,16.4141l4.293,4.2929a.9994.9994,0,0,0,1.414,0L28,11.4141V18h2V8Z"></path></svg>`;
});
const Share = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"></path></svg>`;
});
const UserFollow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M32 14L28 14 28 10 26 10 26 14 22 14 22 16 26 16 26 20 28 20 28 16 32 16 32 14zM12 4A5 5 0 117 9a5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0012 2zM22 30H20V25a5 5 0 00-5-5H9a5 5 0 00-5 5v5H2V25a7 7 0 017-7h6a7 7 0 017 7z"></path></svg>`;
});
const UserProfile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M12 4A5 5 0 117 9a5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0012 2zM22 30H20V25a5 5 0 00-5-5H9a5 5 0 00-5 5v5H2V25a7 7 0 017-7h6a7 7 0 017 7zM22 4H32V6H22zM22 9H32V11H22zM22 14H29V16H22z"></path></svg>`;
});
const css$1 = {
  code: ".root.svelte-1uhm7vo{min-height:370px}",
  map: null
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="root w-72 border bg-gray-100 dark:bg-black mr-4 mb-4 rounded-md transition ease-in-out relative svelte-1uhm7vo">${validate_component(SkeletonPlaceholder$1, "SkeletonPlaceholder").$$render($$result, { style: "width: 100%; height: 10rem;" }, {}, {})} <div class="p-3 pb-0"> ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { style: "width: 50%;" }, {}, {})}  ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { style: "width: 100%; margin-top: 1rem;" }, {}, {})} ${validate_component(SkeletonText$1, "SkeletonText").$$render(
    $$result,
    {
      style: "width: 100%; margin-bottom: 1rem;"
    },
    {},
    {}
  )} <div class="flex justify-between mb-3">${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { style: "width: 25%" }, {}, {})} ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { style: "width: 25%" }, {}, {})}</div> ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { style: "width: 25%" }, {}, {})}</div> </div>`;
});
const css = {
  code: "a.svelte-t0st72,a.svelte-t0st72:hover{text-decoration:none}.title.svelte-t0st72,.description.svelte-t0st72{height:42px;line-height:20px;display:-webkit-box;-webkit-box-orient:vertical;-moz-box-orient:vertical;-ms-box-orient:vertical;box-orient:vertical;-webkit-line-clamp:2;-moz-line-clamp:2;-ms-line-clamp:2;line-clamp:2;overflow:hidden}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formatter;
  let cost;
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { bannerImage } = $$props;
  let { id = "" } = $$props;
  let { slug = "" } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { isPublished = false } = $$props;
  let { totalLessons = 0 } = $$props;
  let { totalStudents = 0 } = $$props;
  let { currency = "USD" } = $$props;
  let { isOnLandingPage = false } = $$props;
  let { isLMS = false } = $$props;
  let { isExplore = false } = $$props;
  let { progressRate = 45 } = $$props;
  let { type } = $$props;
  let { pricingData = { cost: 0 } } = $$props;
  let target;
  function getCourseUrl() {
    return isOnLandingPage || isExplore ? `/course/${slug}` : `/courses/${id}${isLMS ? "/lessons?next=true" : ""}`;
  }
  const COURSE_TAG = {
    [COURSE_TYPE.LIVE_CLASS]: {
      style: "",
      label: $t("course.navItem.settings.live_class"),
      icon: RadioButtonChecked,
      iconStyle: "text-red-700"
    },
    [COURSE_TYPE.SELF_PACED]: {
      style: "",
      label: $t("course.navItem.settings.self_paced"),
      icon: UserProfile,
      iconStyle: "text-primary-700"
    },
    SPECIALIZATION: {
      style: "",
      label: $t("specialization.course_tag"),
      icon: Growth
    }
  };
  if ($$props.bannerImage === void 0 && $$bindings.bannerImage && bannerImage !== void 0)
    $$bindings.bannerImage(bannerImage);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.isPublished === void 0 && $$bindings.isPublished && isPublished !== void 0)
    $$bindings.isPublished(isPublished);
  if ($$props.totalLessons === void 0 && $$bindings.totalLessons && totalLessons !== void 0)
    $$bindings.totalLessons(totalLessons);
  if ($$props.totalStudents === void 0 && $$bindings.totalStudents && totalStudents !== void 0)
    $$bindings.totalStudents(totalStudents);
  if ($$props.currency === void 0 && $$bindings.currency && currency !== void 0)
    $$bindings.currency(currency);
  if ($$props.isOnLandingPage === void 0 && $$bindings.isOnLandingPage && isOnLandingPage !== void 0)
    $$bindings.isOnLandingPage(isOnLandingPage);
  if ($$props.isLMS === void 0 && $$bindings.isLMS && isLMS !== void 0)
    $$bindings.isLMS(isLMS);
  if ($$props.isExplore === void 0 && $$bindings.isExplore && isExplore !== void 0)
    $$bindings.isExplore(isExplore);
  if ($$props.progressRate === void 0 && $$bindings.progressRate && progressRate !== void 0)
    $$bindings.progressRate(progressRate);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.pricingData === void 0 && $$bindings.pricingData && pricingData !== void 0)
    $$bindings.pricingData(pricingData);
  $$result.css.add(css);
  formatter = getCurrencyFormatter(currency);
  cost = calcCourseDiscount(pricingData.discount, pricingData.cost ?? 0, !!pricingData.showDiscount);
  $$unsubscribe_t();
  return `${!isLMS && !isOnLandingPage ? `${validate_component(ContextMenu$1, "ContextMenu").$$render($$result, { target }, {}, {
    default: () => {
      return `${validate_component(ContextMenuOption$1, "ContextMenuOption").$$render(
        $$result,
        {
          indented: true,
          labelText: $t("courses.course_card.context_menu.clone"),
          icon: CopyFile
        },
        {},
        {}
      )} ${validate_component(ContextMenuOption$1, "ContextMenuOption").$$render(
        $$result,
        {
          indented: true,
          labelText: $t("courses.course_card.context_menu.share"),
          icon: Share
        },
        {},
        {}
      )} ${validate_component(ContextMenuOption$1, "ContextMenuOption").$$render(
        $$result,
        {
          indented: true,
          labelText: $t("courses.course_card.context_menu.invite"),
          icon: UserFollow
        },
        {},
        {}
      )} ${validate_component(ContextMenuDivider$1, "ContextMenuDivider").$$render($$result, {}, {}, {})} ${validate_component(ContextMenuOption$1, "ContextMenuOption").$$render(
        $$result,
        {
          kind: "danger",
          labelText: $t("courses.course_card.context_menu.delete")
        },
        {},
        {}
      )}`;
    }
  })}` : ``} <a rel="prefetch"${add_attribute("href", getCourseUrl(), 0)} class="text-black border border-gray dark:border-neutral-600 rounded w-full max-w-[320px] relative hover:scale-95 transition-all ease-in-out svelte-t0st72"${add_attribute("this", target, 0)}><div class="p-4"><div class="relative mb-5">${validate_component(ImageLoader$1, "ImageLoader").$$render(
    $$result,
    {
      src: bannerImage,
      alt: "Course Logo",
      class: "h-[200px] w-full rounded dark:border dark:border-neutral-600 relative"
    },
    {},
    {
      error: () => {
        return `${escape($t("courses.course_card.error_message"))}`;
      },
      loading: () => {
        return `${validate_component(SkeletonPlaceholder$1, "SkeletonPlaceholder").$$render($$result, { style: "width: 100%; height: 200px;" }, {}, {})}`;
      }
    }
  )} ${type ? (() => {
    let tag = COURSE_TAG[type];
    return ` <span class="absolute bottom-2 left-2 z-10 text-xs capitalize bg-primary-50 rounded-sm p-1 flex items-center gap-1 font-mono">${validate_component(tag.icon || missing_component, "svelte:component").$$render($$result, { size: 16, class: tag.iconStyle }, {}, {})} ${escape(tag.label)}</span>`;
  })() : ``}</div> <h3 class="text-xl dark:text-white title svelte-t0st72">${escape(title)}</h3> <p class="mt-2 text-sm text-gray-500 dark:text-gray-300 description svelte-t0st72">${escape(description)}</p></div> <div class="${"px-4 py-2 border border-gray dark:border-neutral-600 border-b-0 border-l-0 border-r-0 flex justify-between " + escape(isLMS && "items-center", true) + " svelte-t0st72"}"><div><p class="${"text-xs " + escape(!isLMS && "pl-2", true) + " dark:text-white svelte-t0st72"}">${escape(totalLessons)} ${escape($t("courses.course_card.lessons_number"))}</p> <p class="text-xs py-2">${isOnLandingPage ? `<span class="px-2">${!cost ? `${escape($t("course.navItem.landing_page.pricing_section.free"))}` : `${pricingData.showDiscount ? `${escape(formatter.format(cost))} <span class="line-through">${escape(formatter?.format(pricingData?.cost))}</span>` : `${escape(formatter.format(cost))}`}`}</span>` : `${isLMS ? `${!isExplore ? `<div class="flex items-center gap-2"><div class="relative bg-[#EAEAEA] w-[50px] h-1"><div style="${"width:" + escape(progressRate, true) + "%"}" class="${escape(null_to_empty(`absolute top-0 left-0 bg-primary-700 h-full`), true) + " svelte-t0st72"}"></div></div> <p class="text-xs text-[#656565] dark:text-white">${escape(progressRate)}%</p></div>` : ``}` : `${validate_component(Tag$1, "Tag").$$render(
    $$result,
    {
      type: isPublished ? "green" : "cool-gray"
    },
    {},
    {
      default: () => {
        return `${isPublished ? `${escape($t("courses.course_card.published"))}` : `${escape($t("courses.course_card.unpublished"))}`}`;
      }
    }
  )}`}`}</p></div> ${isLMS ? `${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      label: isExplore ? $t("courses.course_card.learn_more") : $t("courses.course_card.continue_course"),
      variant: VARIANTS.OUTLINED,
      className: "rounded-none"
    },
    {},
    {}
  )}` : `${!isOnLandingPage ? `<div class="flex flex-col justify-between"><p class="text-xs pl-2 dark:text-white">${escape(totalStudents)} ${escape($t("courses.course_card.students"))}</p> <div></div></div>` : ``}`}</div> </a>`;
});

export { Card as C, Loader as L };
//# sourceMappingURL=index16-68b7dc8d.js.map
