import { c as create_ssr_component, e as escape, a as add_attribute, b as each, v as validate_component } from './ssr-10c5b872.js';
import { s as subscribe, f as compute_slots } from './utils-26d532f8.js';
import './index9-eea8802c.js';
import { C as Chip } from './index12-9c021b5e.js';
import { t as t2 } from './translations-90190f83.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fabcd74f-519a-4733-9a4f-fc7a45b2fb5f", e._sentryDebugIdIdentifier = "sentry-dbid-fabcd74f-519a-4733-9a4f-fc7a45b2fb5f");
  } catch (e2) {
  }
}();
const css$2 = {
  code: ".root.svelte-1fbqbvy{top:0;left:0;right:0;bottom:0;position:fixed;background-color:rgba(0, 0, 0, 0.3);-webkit-tap-highlight-color:transparent;color:#fff;z-index:1201;transition:opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms}.center.svelte-1fbqbvy{display:flex;align-items:center;justify-content:center}",
  map: null
};
const Backdrop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { disableCenteredContent = false } = $$props;
  let { className = "" } = $$props;
  if ($$props.disableCenteredContent === void 0 && $$bindings.disableCenteredContent && disableCenteredContent !== void 0)
    $$bindings.disableCenteredContent(disableCenteredContent);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  $$result.css.add(css$2);
  return `<div class="${"root " + escape(!className.includes("opacity") && "opacity-100", true) + " " + escape(!disableCenteredContent && "center", true) + " " + escape(className, true) + " svelte-1fbqbvy"}">${slots.default ? slots.default({}) : ``} </div>`;
});
const css$1 = {
  code: ".root.svelte-d6wb4u{height:-moz-fit-content;height:fit-content;border-radius:5px;padding:4px 20px}.root.svelte-d6wb4u:hover{cursor:pointer}@media only screen and (max-width: 1002px){a.svelte-d6wb4u{padding:10px 15px}a.svelte-d6wb4u svg.carbon-icon{margin-right:0}}",
  map: null
};
const PrimaryContainedButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { label = "" } = $$props;
  let { handleClick = () => {
  } } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.handleClick === void 0 && $$bindings.handleClick && handleClick !== void 0)
    $$bindings.handleClick(handleClick);
  $$result.css.add(css$1);
  return `<a class="root bg-primary-700 hover:bg-primary-900 text-white font-bold rounded inline-flex items-center float-right svelte-d6wb4u"${add_attribute("href", href, 0)}> ${escape(label)} </a>`;
});
const css = {
  code: ".header.svelte-9wvp89{border-bottom:1px solid var(--border-color);min-height:61px;z-index:1}.header.sticky.svelte-9wvp89{position:sticky;top:0}.header.bring-down.svelte-9wvp89{flex-direction:column;align-items:flex-start}.editable-title.svelte-9wvp89{font-size:16px;display:flex;align-items:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:10px}@media(max-width: 1024px){.title.svelte-9wvp89{width:fit-content}.hideOnMobile.svelte-9wvp89{display:none}}",
  map: null
};
const PageNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => value);
  let { title = "" } = $$props;
  let { overidableStyle = "" } = $$props;
  let { navItems = [] } = $$props;
  let { addButtonHref = "" } = $$props;
  let { addButtonLabel = "" } = $$props;
  let { disableSticky = false } = $$props;
  let { isTitleEditable = false } = $$props;
  let { onEditComplete = () => {
  } } = $$props;
  let { paddingClass = "px-2" } = $$props;
  let { hideOnMobile = false } = $$props;
  let dynamicRootClass = "";
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.overidableStyle === void 0 && $$bindings.overidableStyle && overidableStyle !== void 0)
    $$bindings.overidableStyle(overidableStyle);
  if ($$props.navItems === void 0 && $$bindings.navItems && navItems !== void 0)
    $$bindings.navItems(navItems);
  if ($$props.addButtonHref === void 0 && $$bindings.addButtonHref && addButtonHref !== void 0)
    $$bindings.addButtonHref(addButtonHref);
  if ($$props.addButtonLabel === void 0 && $$bindings.addButtonLabel && addButtonLabel !== void 0)
    $$bindings.addButtonLabel(addButtonLabel);
  if ($$props.disableSticky === void 0 && $$bindings.disableSticky && disableSticky !== void 0)
    $$bindings.disableSticky(disableSticky);
  if ($$props.isTitleEditable === void 0 && $$bindings.isTitleEditable && isTitleEditable !== void 0)
    $$bindings.isTitleEditable(isTitleEditable);
  if ($$props.onEditComplete === void 0 && $$bindings.onEditComplete && onEditComplete !== void 0)
    $$bindings.onEditComplete(onEditComplete);
  if ($$props.paddingClass === void 0 && $$bindings.paddingClass && paddingClass !== void 0)
    $$bindings.paddingClass(paddingClass);
  if ($$props.hideOnMobile === void 0 && $$bindings.hideOnMobile && hideOnMobile !== void 0)
    $$bindings.hideOnMobile(hideOnMobile);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    dynamicRootClass = Array.isArray(navItems) && navItems.length > 4 ? "bring-down" : "";
    $$rendered = `<div class="${escape(hideOnMobile && "hideOnMobile", true) + " header dark:bg-black dark:border-neutral-600 bg-white " + escape(!disableSticky && "sticky", true) + " " + escape(dynamicRootClass, true) + " svelte-9wvp89"}"${add_attribute("style", overidableStyle, 0)}><div class="${escape(hideOnMobile ? "hidden lg:flex" : "", true) + " " + escape(paddingClass, true) + " max-w-4xl m-auto flex items-center justify-between min-h-[61px] svelte-9wvp89"}">${!!title ? `${isTitleEditable ? `${`<button class="w-full"><h4 class="editable-title hover:bg-gray-100 dark:bg-black px-3 rounded-md overflow-ellipsis svelte-9wvp89">${escape(title)}</h4></button>`}` : `<div class="flex items-center w-full"${add_attribute("title", title, 0)}>${slots.image ? slots.image({}) : ``} <h4 class="${escape($$slots.image ? "ml-2" : "", true) + " dark:text-white whitespace-nowrap truncate text-lg font-semibold"}">${escape(title)}</h4></div>`}` : ``} ${Array.isArray(navItems) && navItems.length ? `<div class="flex justify-evenly items-center">${each(navItems, (item) => {
      return `<a class="${"mr-5 pb-2 text-sm font-bold flex items-center relative " + escape(
        item.isActive ? "text-primary-700" : "dark:text-white text-black",
        true
      ) + " hover:no-underline"}"${add_attribute("href", item.href, 0)}>${escape(item.label)} ${typeof item.badgeValue === "number" ? `${validate_component(Chip, "Chip").$$render(
        $$result,
        {
          value: item.badgeValue,
          className: "ml-1 bg-gray-300 dark:text-black"
        },
        {},
        {}
      )}` : ``} <span class="${"absolute bottom-0 left-0 h-1 bg-primary-700 transition-all ease-in-out duration-500 " + escape(item.isActive ? "w-full" : "w-0", true)}"></span> </a>`;
    })} ${addButtonHref ? `${validate_component(PrimaryContainedButton, "NewButton").$$render(
      $$result,
      {
        href: addButtonHref,
        label: addButtonLabel
      },
      {},
      {}
    )}` : ``}</div>` : ``} ${slots.widget ? slots.widget({}) : ``}</div> </div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});

export { Backdrop as B, PageNav as P };
//# sourceMappingURL=index.svelte_svelte_type_style_lang-3a07a684.js.map
