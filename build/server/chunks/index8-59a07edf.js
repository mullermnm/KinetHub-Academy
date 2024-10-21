import { c as create_ssr_component, d as spread, h as escape_attribute_value, f as escape_object, e as escape, v as validate_component } from './ssr-10c5b872.js';
import { d as compute_rest_props } from './utils-26d532f8.js';
import { I as IconButton } from './index9-eea8802c.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ceb9f516-c4d6-414c-9f2d-1cf5afa296bb", e._sentryDebugIdIdentifier = "sentry-dbid-ceb9f516-c4d6-414c-9f2d-1cf5afa296bb");
  } catch (e2) {
  }
}();
const Close$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M17.4141 16L24 9.4141 22.5859 8 16 14.5859 9.4143 8 8 9.4141 14.5859 16 8 22.5859 9.4143 24 16 17.4141 22.5859 24 24 22.5859 17.4141 16z"></path></svg>`;
});
const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick = () => {
  } } = $$props;
  let { contained = false } = $$props;
  let { color = "text-primary-700 bg-primary-200 dark:bg-neutral-500" } = $$props;
  let { size = "small" } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.contained === void 0 && $$bindings.contained && contained !== void 0)
    $$bindings.contained(contained);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `${validate_component(IconButton, "IconButton").$$render($$result, { onClick, color, contained, size }, {}, {
    default: () => {
      return `${size === "large" ? `${validate_component(Close$1, "CloseIcon").$$render(
        $$result,
        {
          size: 24,
          class: "carbon-icon dark:text-black",
          title: "Delete"
        },
        {},
        {}
      )}` : `${validate_component(Close$1, "CloseIcon").$$render(
        $$result,
        {
          size: 20,
          class: "carbon-icon dark:text-black",
          title: "Delete"
        },
        {},
        {}
      )}`}`;
    }
  })} `;
});
const css = {
  code: ".dialog.svelte-fuvmlh{background-color:rgba(0, 0, 0, 0.5)}.container.svelte-fuvmlh{max-width:1000px}.body.svelte-fuvmlh{max-height:60vh}.small.svelte-fuvmlh{max-width:388px}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { onClose = () => {
  } } = $$props;
  let { modalHeading = "" } = $$props;
  let { headerClass = "" } = $$props;
  let { labelClass = "" } = $$props;
  let { width = "" } = $$props;
  let { maxWidth = "" } = $$props;
  let { containerClass = "" } = $$props;
  let { size = "" } = $$props;
  let { isCloseable = true } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  if ($$props.modalHeading === void 0 && $$bindings.modalHeading && modalHeading !== void 0)
    $$bindings.modalHeading(modalHeading);
  if ($$props.headerClass === void 0 && $$bindings.headerClass && headerClass !== void 0)
    $$bindings.headerClass(headerClass);
  if ($$props.labelClass === void 0 && $$bindings.labelClass && labelClass !== void 0)
    $$bindings.labelClass(labelClass);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.maxWidth === void 0 && $$bindings.maxWidth && maxWidth !== void 0)
    $$bindings.maxWidth(maxWidth);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0)
    $$bindings.containerClass(containerClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.isCloseable === void 0 && $$bindings.isCloseable && isCloseable !== void 0)
    $$bindings.isCloseable(isCloseable);
  $$result.css.add(css);
  return `${open ? `<div class="dialog fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-100 bg-opacity-50 svelte-fuvmlh" role="presentation"><div aria-hidden="true" class="backdrop"></div> <div class="${escape(maxWidth || "container", true) + " " + escape(size === "sm" ? "small" : "", true) + " mx-auto bg-white dark:bg-neutral-800 " + escape(width, true) + " rounded-md pt-2 shadow-lg svelte-fuvmlh"}" role="presentation"><div class="${"flex items-center justify-between border border-l-0 border-r-0 border-t-0 border-gray-100 dark:border-neutral-600 p-4 px-5 " + escape(headerClass, true) + " svelte-fuvmlh"}"><p class="${"text-md m-0 font-medium dark:text-white " + escape(labelClass, true) + " svelte-fuvmlh"}">${escape(modalHeading)}</p> ${isCloseable ? `<div class="rounded-full">${validate_component(Close, "CloseButton").$$render(
    $$result,
    {
      onClick: onClose,
      contained: true,
      size: "small"
    },
    {},
    {}
  )}</div>` : ``}</div> <div class="${"body h-4/5 overflow-y-auto p-6 " + escape(containerClass, true) + " svelte-fuvmlh"}">${slots.default ? slots.default({}) : ``}</div></div></div>` : ``}`;
});

export { Close$1 as C, Modal as M, Close as a };
//# sourceMappingURL=index8-59a07edf.js.map
