import { s as subscribe, d as compute_rest_props, e as set_store_value } from './utils-26d532f8.js';
import { t as tick } from './scheduler-aae59940.js';
import { c as create_ssr_component, v as validate_component, e as escape, g as createEventDispatcher, s as setContext, d as spread, f as escape_object, a as add_attribute, i as add_classes, j as getContext, k as add_styles, h as escape_attribute_value } from './ssr-10c5b872.js';
import { d as derived, w as writable } from './index2-aea858a5.js';
import { C as ChevronDown$1 } from './ChevronDown-d5b93e8c.js';
import './_sentry-release-injection-file-6be6a010.js';
import { t as t2, i as initialized } from './translations-90190f83.js';
import { L as LANGUAGES } from './translation-fd577170.js';
import { L as LOCALE } from './index15-c5761f1e.js';
import { D as Dropdown$1 } from './Dropdown-08db662d.js';
import { C as CheckmarkFilled } from './CheckmarkFilled-36899326.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import { p as profile } from './user-e923b6d4.js';
import { b as snackbar } from './store2-dc811f17.js';
import { T as TextField } from './TextField-86164973.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { S as SectionTitle } from './SectionTitle-d97525be.js';
import { A as ArrowTopRight } from './ArrowTopRight-dc8d0443.js';
import { G as Grid$1, R as Row$1, C as Column$1 } from './Column-ce23f72d.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d7a622c0-a841-4aea-8f6e-e438c55efb53", e._sentryDebugIdIdentifier = "sentry-dbid-d7a622c0-a841-4aea-8f6e-e438c55efb53");
  } catch (e2) {
  }
}();
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentTab;
  let currentContent;
  let $$restProps = compute_rest_props($$props, ["selected", "type", "autoWidth", "iconDescription", "triggerHref"]);
  let $selectedTab, $$unsubscribe_selectedTab;
  let $content, $$unsubscribe_content;
  let $tabs, $$unsubscribe_tabs;
  let $tabsById, $$unsubscribe_tabsById;
  let { selected = 0 } = $$props;
  let { type = "default" } = $$props;
  let { autoWidth = false } = $$props;
  let { iconDescription = "Show menu options" } = $$props;
  let { triggerHref = "#" } = $$props;
  createEventDispatcher();
  const tabs = writable([]);
  $$unsubscribe_tabs = subscribe(tabs, (value) => $tabs = value);
  const tabsById = derived(tabs, (_) => _.reduce((a, c) => ({ ...a, [c.id]: c }), {}));
  $$unsubscribe_tabsById = subscribe(tabsById, (value) => $tabsById = value);
  const useAutoWidth = writable(autoWidth);
  const selectedTab = writable(void 0);
  $$unsubscribe_selectedTab = subscribe(selectedTab, (value) => $selectedTab = value);
  const content = writable([]);
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  const contentById = derived(content, (_) => _.reduce((a, c) => ({ ...a, [c.id]: c }), {}));
  const selectedContent = writable(void 0);
  let refTabList = null;
  setContext("Tabs", {
    tabs,
    contentById,
    selectedTab,
    selectedContent,
    useAutoWidth,
    add: (data) => {
      tabs.update((_) => [..._, { ...data, index: _.length }]);
    },
    addContent: (data) => {
      content.update((_) => [..._, { ...data, index: _.length }]);
    },
    update: (id) => {
      currentIndex = $tabsById[id].index;
    },
    change: async (direction) => {
      let index = currentIndex + direction;
      if (index < 0) {
        index = $tabs.length - 1;
      } else if (index >= $tabs.length) {
        index = 0;
      }
      let disabled = $tabs[index].disabled;
      while (disabled) {
        index = index + direction;
        if (index < 0) {
          index = $tabs.length - 1;
        } else if (index >= $tabs.length) {
          index = 0;
        }
        disabled = $tabs[index].disabled;
      }
      currentIndex = index;
      await tick();
    }
  });
  let dropdownHidden = true;
  let currentIndex = selected;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.autoWidth === void 0 && $$bindings.autoWidth && autoWidth !== void 0)
    $$bindings.autoWidth(autoWidth);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.triggerHref === void 0 && $$bindings.triggerHref && triggerHref !== void 0)
    $$bindings.triggerHref(triggerHref);
  currentIndex = selected;
  currentTab = $tabs[currentIndex] || void 0;
  currentContent = $content[currentIndex] || void 0;
  {
    {
      if (currentTab) {
        selectedTab.set(currentTab.id);
      }
      if (currentContent) {
        selectedContent.set(currentContent.id);
      }
    }
  }
  {
    if ($selectedTab) {
      dropdownHidden = true;
    }
  }
  {
    useAutoWidth.set(autoWidth);
  }
  $$unsubscribe_selectedTab();
  $$unsubscribe_content();
  $$unsubscribe_tabs();
  $$unsubscribe_tabsById();
  return `<div${spread([{ role: "navigation" }, escape_object($$restProps)], {
    classes: "bx--tabs " + (type === "container" ? "bx--tabs--container" : "")
  })}><div role="listbox" tabindex="0"${add_attribute("aria-label", $$props["aria-label"] || "listbox", 0)}${add_classes("bx--tabs-trigger".trim())}><a tabindex="-1"${add_attribute("href", triggerHref, 0)}${add_classes("bx--tabs-trigger-text".trim())}>${currentTab ? `${escape(currentTab.label)}` : ``}</a> ${validate_component(ChevronDown$1, "ChevronDown").$$render(
    $$result,
    {
      "aria-hidden": "true",
      title: iconDescription
    },
    {},
    {}
  )}</div>  <ul role="tablist"${add_classes(("bx--tabs__nav " + (dropdownHidden ? "bx--tabs__nav--hidden" : "")).trim())}${add_attribute("this", refTabList, 0)}>${slots.default ? slots.default({}) : ``}</ul></div> ${slots.content ? slots.content({}) : ``}`;
});
const Tabs$1 = Tabs;
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let $$restProps = compute_rest_props($$props, ["label", "href", "disabled", "tabindex", "id", "ref"]);
  let $selectedTab, $$unsubscribe_selectedTab;
  let $useAutoWidth, $$unsubscribe_useAutoWidth;
  let { label = "" } = $$props;
  let { href = "#" } = $$props;
  let { disabled = false } = $$props;
  let { tabindex = "0" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const { selectedTab, useAutoWidth, add, update, change } = getContext("Tabs");
  $$unsubscribe_selectedTab = subscribe(selectedTab, (value) => $selectedTab = value);
  $$unsubscribe_useAutoWidth = subscribe(useAutoWidth, (value) => $useAutoWidth = value);
  add({ id, label, disabled });
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  selected = $selectedTab === id;
  $$unsubscribe_selectedTab();
  $$unsubscribe_useAutoWidth();
  return ` <li${spread([{ tabindex: "-1" }, { role: "presentation" }, escape_object($$restProps)], {
    classes: "bx--tabs__nav-item " + (disabled ? "bx--tabs__nav-item--disabled" : "") + " " + (selected ? "bx--tabs__nav-item--selected" : "")
  })}><a role="tab"${add_attribute("tabindex", disabled ? "-1" : tabindex, 0)}${add_attribute("aria-selected", selected, 0)}${add_attribute("aria-disabled", disabled, 0)}${add_attribute("id", id, 0)}${add_attribute("href", href, 0)}${add_classes("bx--tabs__nav-link".trim())}${add_styles({
    "width": $useAutoWidth ? "auto" : void 0
  })}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : `${escape(label)}`}</a></li>`;
});
const Tab$1 = Tab;
const TabContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let index;
  let tabId;
  let $$restProps = compute_rest_props($$props, ["id"]);
  let $tabs, $$unsubscribe_tabs;
  let $contentById, $$unsubscribe_contentById;
  let $selectedContent, $$unsubscribe_selectedContent;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  const { selectedContent, addContent, tabs, contentById } = getContext("Tabs");
  $$unsubscribe_selectedContent = subscribe(selectedContent, (value) => $selectedContent = value);
  $$unsubscribe_tabs = subscribe(tabs, (value) => $tabs = value);
  $$unsubscribe_contentById = subscribe(contentById, (value) => $contentById = value);
  addContent({ id });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  selected = $selectedContent === id;
  index = $contentById[id].index;
  tabId = $tabs[index].id;
  $$unsubscribe_tabs();
  $$unsubscribe_contentById();
  $$unsubscribe_selectedContent();
  return `<div${spread(
    [
      { role: "tabpanel" },
      {
        "aria-labelledby": escape_attribute_value(tabId)
      },
      {
        "aria-hidden": escape_attribute_value(!selected)
      },
      {
        hidden: (selected ? void 0 : "") || null
      },
      { id: escape_attribute_value(id) },
      escape_object($$restProps)
    ],
    { classes: "bx--tab-content" }
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const TabContent$1 = TabContent;
function generateUUID() {
  var d = (/* @__PURE__ */ new Date()).getTime();
  var d2 = typeof performance !== "undefined" && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : r & 3 | 8).toString(16);
  });
}
const LanguagePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $initialized, $$unsubscribe_initialized;
  let $t, $$unsubscribe_t;
  $$unsubscribe_initialized = subscribe(initialized, (value2) => $initialized = value2);
  $$unsubscribe_t = subscribe(t2, (value2) => $t = value2);
  let { className = "" } = $$props;
  let { value = LOCALE.EN } = $$props;
  let { hasLangChanged = false } = $$props;
  const dropdownItems = [{ id: "", text: "Pick a Language" }, ...LANGUAGES];
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.hasLangChanged === void 0 && $$bindings.hasLangChanged && hasLangChanged !== void 0)
    $$bindings.hasLangChanged(hasLangChanged);
  $$unsubscribe_initialized();
  $$unsubscribe_t();
  return `${$initialized ? `${validate_component(Dropdown$1, "Dropdown").$$render(
    $$result,
    {
      titleText: $t("content.toggle_label"),
      items: dropdownItems,
      selectedId: value,
      class: "h-full " + className
    },
    {},
    {}
  )}` : ``}`;
});
const Integrations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $profile, $$unsubscribe_profile;
  let $t, $$unsubscribe_t;
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let chatId;
  async function addChatId() {
    if (!chatId || `${chatId}`.length < 5)
      return;
    const { error } = await supabase.from("profile").update({ telegram_chat_id: chatId }).match({ id: $profile.id });
    if (error) {
      console.log(error);
      snackbar.error("snackbar.course_settings.error.failed_integration");
    } else {
      set_store_value(profile, $profile.telegram_chat_id = chatId, $profile);
      chatId = null;
      snackbar.success("snackbar.course_settings.success.successful_integration");
    }
  }
  async function deleteChatId() {
    const { error } = await supabase.from("profile").update({ telegram_chat_id: null }).match({ id: $profile.id });
    if (error) {
      snackbar.error("snackbar.course_settings.error.failed_deletion");
      console.log(error);
    } else {
      set_store_value(profile, $profile.telegram_chat_id = null, $profile);
      snackbar.success("snackbar.course_settings.success.successful_deletion");
    }
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Grid$1, "Grid").$$render(
      $$result,
      {
        class: "border-c rounded border-gray-200 dark:border-neutral-600 w-full mt-5"
      },
      {},
      {
        default: () => {
          return `${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "flex lg:flex-row flex-col justify-center lg:justify-start py-7 border-bottom-c"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column$1, "Column").$$render(
                  $$result,
                  {
                    sm: 4,
                    md: 4,
                    lg: 4,
                    class: "flex items-center justify-center"
                  },
                  {},
                  {
                    default: () => {
                      return `<img src="/telegram-svg.svg" alt="" class="w-10 mr-2"> ${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape($t("settings.integrations.heading"))}`;
                        }
                      })}`;
                    }
                  }
                )} ${validate_component(Column$1, "Column").$$render(
                  $$result,
                  {
                    sm: 8,
                    md: 8,
                    lg: 8,
                    class: "mt-2 lg:mt-0 flex flex-col items-center lg:items-start"
                  },
                  {},
                  {
                    default: () => {
                      return `${$profile.telegram_chat_id !== null ? `<div class="flex flex-col items-center w-full"><div class="flex items-center">${validate_component(CheckmarkFilled, "CheckmarkFilled").$$render(
                        $$result,
                        {
                          size: 32,
                          class: "mr-2",
                          style: "fill: green;"
                        },
                        {},
                        {}
                      )} ${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape($t("settings.integrations.success_message"))}`;
                        }
                      })}</div> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
                        $$result,
                        {
                          className: "mt-3",
                          variant: VARIANTS.CONTAINED_DANGER,
                          onClick: deleteChatId
                        },
                        {},
                        {
                          default: () => {
                            return `${escape($t("settings.integrations.disconnect"))}`;
                          }
                        }
                      )}</div>` : `<div><h3 class="font-normal text-lg">${escape($t("settings.integrations.sub_heading"))}</h3> <h4 class="font-normal">${escape($t("settings.integrations.step_authenticate"))}</h4> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
                        $$result,
                        {
                          className: "mb-5",
                          variant: VARIANTS.OUTLINED,
                          onClick: () => window.open("https://t.me/classroomio_bot", "_blank")
                        },
                        {},
                        {
                          default: () => {
                            return `<span class="mr-2">${escape($t("settings.integrations.open_bot_button"))}</span> ${validate_component(ArrowTopRight, "ArrowUpRightIcon").$$render($$result, {}, {}, {})}`;
                          }
                        }
                      )} <h4 class="font-normal">${escape($t("settings.integrations.step_chatId"))}</h4> ${validate_component(TextField, "TextField").$$render(
                        $$result,
                        {
                          placeholder: "360111",
                          className: "w-full lg:w-60 mb-5",
                          type: "number",
                          isRequired: true,
                          value: chatId
                        },
                        {
                          value: ($$value) => {
                            chatId = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { onClick: addChatId }, {}, {
                        default: () => {
                          return `${escape($t("settings.integrations.connect_button"))}`;
                        }
                      })}</div>`}`;
                    }
                  }
                )}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_profile();
  $$unsubscribe_t();
  return $$rendered;
});

export { Integrations as I, LanguagePicker as L, Tabs$1 as T, TabContent$1 as a, Tab$1 as b, generateUUID as g };
//# sourceMappingURL=Integrations-48d75cd8.js.map
