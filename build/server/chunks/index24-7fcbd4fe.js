import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, b as each, e as escape, v as validate_component, m as missing_component } from './ssr-10c5b872.js';
import { T as Text } from './Text-e3f4b18b.js';
import { t as t2 } from './translations-90190f83.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7698854e-6122-4f99-a960-92fe6756a5d1", e._sentryDebugIdIdentifier = "sentry-dbid-7698854e-6122-4f99-a960-92fe6756a5d1");
  } catch (e2) {
  }
}();
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { tabs = [] } = $$props;
  let { currentTab } = $$props;
  let { onChange = (v) => () => {
  } } = $$props;
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0)
    $$bindings.tabs(tabs);
  if ($$props.currentTab === void 0 && $$bindings.currentTab && currentTab !== void 0)
    $$bindings.currentTab(currentTab);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  $$unsubscribe_t();
  return `<div class="w-full flex flex-col"><div class="flex items-center border-b w-full overflow-x-auto mb-2">${each(tabs, (tab) => {
    return `${!tab.icon && !tab.badgeValue ? `<button class="${"relative " + escape(
      currentTab === tab.value ? "text-primary-700" : "dark:bg-gray-500 dark:text-white",
      true
    ) + " dark:bg-transparent font-semibold focus:outline-none w-fit mr-4 text-center py-3 px-2"}"><div class="flex items-center justify-center w-full text-center">${escape($t(tab.label))}</div> <span class="${"absolute bottom-0 left-0 h-[2px] bg-primary-700 transition-all ease-in-out duration-500 " + escape(currentTab === tab.value ? "w-full" : "w-0", true)}"></span> </button>` : `<button class="${"relative " + escape(
      currentTab === tab.value ? "text-primary-700" : "dark:bg-gray-500 dark:text-white",
      true
    ) + " dark:bg-transparent font-semibold focus:outline-none w-24 text-left py-3 mr-8 px-2"}"><div class="grid grid-cols-5 md:grid-cols-4 gap-5 md:gap-3 items-center">${tab.icon ? `${validate_component(tab.icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : ``} ${escape($t(tab.label))} ${typeof tab.badgeValue === "number" ? `${validate_component(Text, "TextChip").$$render(
      $$result,
      {
        value: `${tab.badgeValue}`,
        size: "sm",
        shape: "rounded-full",
        className: "bg-gray-300 dark:text-black text-xs absolute -right-2 px-2"
      },
      {},
      {}
    )}` : ``}</div> <span class="${"absolute bottom-0 left-0 h-[2px] bg-primary-700 transition-all ease-in-out duration-500 " + escape(currentTab === tab.value ? "w-full" : "w-0", true)}"></span> </button>`}`;
  })}</div> <div class="mt-5">${slots.content ? slots.content({}) : ``}</div></div>`;
});
const TabContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { index } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  return `${value === index ? `${slots.default ? slots.default({}) : ``}` : ``}`;
});

export { Tabs as T, TabContent as a };
//# sourceMappingURL=index24-7fcbd4fe.js.map
