import { s as subscribe, d as compute_rest_props, e as set_store_value } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as each, e as escape, d as spread, h as escape_attribute_value, f as escape_object } from './ssr-10c5b872.js';
import { p as page } from './stores-793c1e19.js';
import { M as Modal } from './index8-59a07edf.js';
import { T as TextField } from './TextField-86164973.js';
import { P as PrimaryButton } from './index11-4ef8d5a0.js';
import './config-8c22ba68.js';
import './_sentry-release-injection-file-6be6a010.js';
import { p as profile } from './user-e923b6d4.js';
import { g as generateSitename } from './org2-00101c59.js';
import { c as currentOrg, i as isOrgAdmin, f as currentOrgPath, g as isFreePlan, h as currentOrgPlan, o as orgs, j as PLAN_NAMES } from './org-8fc26a61.js';
import { n as newOrgModal, s as sideBar, p as profileMenu } from './store-37f0dea3.js';
import './validator-27ec1d5c.js';
import { t as t2 } from './translations-90190f83.js';
import { d as isQuizPage } from './app2-29b60895.js';
import { H as HomeIcon, a as Help, P as ProfileMenu } from './index19-2a5aa9f3.js';
import { C as ChevronRight } from './ChevronRight2-6f4a443c.js';
import { A as Avatar } from './index10-b2b97ef7.js';
import { T as Text } from './Text-e3f4b18b.js';
import { C as ComingSoon } from './index20-d8ae68df.js';
import { g as goto } from './navigation-cd282f65.js';
import { lighten, darken } from 'color2k';
import { S as SkeletonText$1 } from './SkeletonText-d2851876.js';
import { P as Popover$1 } from './Popover-a92462a3.js';
import { C as CourseIcon } from './CourseIcon-c2776210.js';
import { N as NavClasses } from './reusableClass-512f4804.js';
import { b as snackbar } from './store2-dc811f17.js';
import { B as Box } from './index17-3166eaf0.js';
import './index9-eea8802c.js';
import './shared-server-e0f2abd3.js';
import './index2-aea858a5.js';
import './index15-c5761f1e.js';
import 'lodash/cloneDeep.js';
import 'lodash/isNumber.js';
import 'zod';
import './app-d638cf5d.js';
import './Rocket-f94fd084.js';
import './Settings-0a14f57d.js';
import 'posthog-js';
import './useMobile-47eebf4e.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "97920e6d-b240-4ffa-9c77-f08b4d7c379d", e._sentryDebugIdIdentifier = "sentry-dbid-97920e6d-b240-4ffa-9c77-f08b4d7c379d");
  } catch (e2) {
  }
}();
const ChevronSort = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16 28L9 21 10.41 19.59 16 25.17 21.59 19.59 23 21 16 28zM16 4L23 11 21.59 12.41 16 6.83 10.41 12.41 9 11 16 4z"></path></svg>`;
});
const Forum = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M28,6H8C6.8,6,6,6.8,6,8v14c0,1.2,0.8,2,2,2h8v-2H8V8h20v14h-7.2L16,28.8l1.6,1.2l4.2-6H28c1.2,0,2-0.8,2-2V8	C30,6.8,29.2,6,28,6z"></path><path d="M4,18H2V5c0-1.7,1.3-3,3-3h13v2H5C4.4,4,4,4.4,4,5V18z"></path></svg>`;
});
const SettingsAdjust = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zM21 12c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3S22.7 12 21 12zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2V24zM11 20c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S9.3 20 11 20z"></path></svg>`;
});
function tc(tryFunc, catchFunc) {
  let val;
  try {
    val = tryFunc();
  } catch (e) {
    if (typeof catchFunc === "function") {
      val = catchFunc(e);
    } else {
      val = catchFunc;
    }
  }
  return val;
}
function updateThemeClassInBody(newClass, customRegex) {
  const regex = /theme-[\w]+/gi;
  document.body.className = document.body.className.replace(customRegex ?? regex, newClass);
}
function setTheme(theme) {
  const _theme = theme || "";
  if (theme && !theme.includes("theme-")) {
    injectCustomTheme(theme);
    setCustomTheme("theme-custom");
  } else if (!theme && document.body.className.includes("theme-")) {
    updateThemeClassInBody(_theme);
    return;
  }
  if (document.body.className.includes(_theme))
    return;
  localStorage.setItem("theme", _theme);
  document.body.className = document.body.className.concat(" ", _theme);
}
function setCustomTheme(theme) {
  if (!theme && document.body.className.includes("theme-")) {
    updateThemeClassInBody(theme || "");
    return;
  }
  updateThemeClassInBody("");
  const _theme = theme || "";
  if (!document.body.className.includes(_theme)) {
    localStorage.setItem("theme", _theme);
    document.body.className = document.body.className.concat(" ", _theme);
  }
}
const _lighten = (hex, no) => tc(() => lighten(hex, no), hex);
const _darken = (hex, no) => tc(() => darken(hex, no), hex);
function injectCustomTheme(hex) {
  const styleId = "theme-custom";
  let styleElement = document.getElementById(styleId);
  const shades = {
    50: _lighten(hex, 0.7),
    100: _lighten(hex, 0.6),
    200: _lighten(hex, 0.5),
    300: _lighten(hex, 0.4),
    400: _lighten(hex, 0.3),
    500: _lighten(hex, 0.2),
    600: _lighten(hex, 0.1),
    700: hex,
    800: _darken(hex, 0.1),
    900: _darken(hex, 0.2)
  };
  const styleContent = `
    .theme-custom .bg-primary-50 { background-color: ${shades[50]} !important; }
    .theme-custom .bg-primary-100 { background-color: ${shades[100]} !important; }
    .theme-custom .bg-primary-200 { background-color: ${shades[200]} !important; }
    .theme-custom .bg-primary-300 { background-color: ${shades[300]} !important; }
    .theme-custom .bg-primary-400 { background-color: ${shades[400]} !important; }
    .theme-custom .bg-primary-500 { background-color: ${shades[500]} !important; }
    .theme-custom .bg-primary-600 { background-color: ${shades[600]} !important; }
    .theme-custom .bg-primary-700 { background-color: ${shades[700]} !important; }
    .theme-custom .bg-primary-800 { background-color: ${shades[800]} !important; }
    .theme-custom .bg-primary-900 { background-color: ${shades[900]} !important; }

    .theme-custom .text-primary-50 { color: ${shades[50]} !important; }
    .theme-custom .text-primary-100 { color: ${shades[100]} !important; }
    .theme-custom .text-primary-200 { color: ${shades[200]} !important; }
    .theme-custom .text-primary-300 { color: ${shades[300]} !important; }
    .theme-custom .text-primary-400 { color: ${shades[400]} !important; }
    .theme-custom .text-primary-500 { color: ${shades[500]} !important; }
    .theme-custom .text-primary-600 { color: ${shades[600]} !important; }
    .theme-custom .text-primary-700 { color: ${shades[700]} !important; }
    .theme-custom .text-primary-800 { color: ${shades[800]} !important; }
    .theme-custom .text-primary-900 { color: ${shades[900]} !important; }

    .theme-custom .border-primary-50 { border-color: ${shades[50]} !important; }
    .theme-custom .border-primary-100 { border-color: ${shades[100]} !important; }
    .theme-custom .border-primary-200 { border-color: ${shades[200]} !important; }
    .theme-custom .border-primary-300 { border-color: ${shades[300]} !important; }
    .theme-custom .border-primary-400 { border-color: ${shades[400]} !important; }
    .theme-custom .border-primary-500 { border-color: ${shades[500]} !important; }
    .theme-custom .border-primary-600 { border-color: ${shades[600]} !important; }
    .theme-custom .border-primary-700 { border-color: ${shades[700]} !important; }
    .theme-custom .border-primary-800 { border-color: ${shades[800]} !important; }
    .theme-custom .border-primary-900 { border-color: ${shades[900]} !important; }
  `;
  if (styleElement) {
    styleElement.innerHTML = styleContent;
  } else {
    styleElement = document.createElement("style");
    styleElement.id = styleId;
    styleElement.innerHTML = styleContent;
    document.head.appendChild(styleElement);
  }
}
const AddOrgModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $newOrgModal, $$unsubscribe_newOrgModal;
  let $$unsubscribe_profile;
  let $t, $$unsubscribe_t;
  $$unsubscribe_newOrgModal = subscribe(newOrgModal, (value) => $newOrgModal = value);
  $$unsubscribe_profile = subscribe(profile, (value) => value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let loading = false;
  let orgName = "";
  let siteName = "";
  let errors = { orgName: "", siteName: "" };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    siteName = generateSitename(orgName);
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: () => $newOrgModal.open = false,
        width: "w-96",
        modalHeading: $t("add_org.create_org"),
        open: $newOrgModal.open
      },
      {
        open: ($$value) => {
          $newOrgModal.open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<form class="px-2">${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: $t("add_org.name"),
              autoFocus: true,
              placeholder: "e.g Pepsi Co",
              className: "mb-4",
              isRequired: true,
              errorMessage: errors.orgName,
              autoComplete: false,
              value: orgName
            },
            {
              value: ($$value) => {
                orgName = $$value;
                $$settled = false;
              }
            },
            {}
          )}  ${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: $t("add_org.org_sitename"),
              helperMessage: `https://${siteName || ""}.KinetsHub.com`,
              name: "sitename",
              type: "text",
              placeholder: "e.g edforall",
              className: "mb-5 w-full",
              labelClassName: "text-lg font-normal",
              errorMessage: errors.siteName,
              isRequired: true,
              value: siteName
            },
            {
              value: ($$value) => {
                siteName = $$value;
                $$settled = false;
              }
            },
            {}
          )} <div class="mt-5 flex items-center flex-row-reverse">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              label: $t("add_org.create"),
              type: "submit",
              isLoading: loading
            },
            {},
            {}
          )}</div></form>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_newOrgModal();
  $$unsubscribe_profile();
  $$unsubscribe_t();
  return $$rendered;
});
const css$1 = {
  code: "button.svelte-1i5lgsm{min-height:56px}.coming-soon.svelte-1i5lgsm{position:absolute;top:5px;right:5px}",
  map: null
};
const OrgSelectorItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "" } = $$props;
  let { hasDivider = false } = $$props;
  let { active = false } = $$props;
  let { avatar = "" } = $$props;
  let { avatarText = "" } = $$props;
  let { text = "" } = $$props;
  let { onClick = () => {
  } } = $$props;
  let { disabled = false } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.hasDivider === void 0 && $$bindings.hasDivider && hasDivider !== void 0)
    $$bindings.hasDivider(hasDivider);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.avatar === void 0 && $$bindings.avatar && avatar !== void 0)
    $$bindings.avatar(avatar);
  if ($$props.avatarText === void 0 && $$bindings.avatarText && avatarText !== void 0)
    $$bindings.avatarText(avatarText);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  $$result.css.add(css$1);
  return `<div class="relative"><button class="${"w-full " + escape(disabled && "opacity-25", true) + " flex items-center text-start w-[14rem] py-1.5 px-2.5 " + escape(hasDivider && "border-b border-gray-100 dark:border-neutral-600", true) + " " + escape(active && "bg-gray-200 dark:bg-neutral-700 dark:text-white", true) + " svelte-1i5lgsm"}">${avatar ? `${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      src: avatar,
      name: text,
      shape: "rounded-md",
      width: "w-[1.2rem]",
      height: "h-[1.2rem]",
      className: "mr-2"
    },
    {},
    {}
  )}` : `${avatarText ? `${validate_component(Text, "TextChip").$$render(
    $$result,
    {
      value: avatarText,
      className: "mr-2 bg-primary-200 font-medium text-xs dark:text-black",
      size
    },
    {},
    {}
  )}` : ``}`} ${escape(text)}</button> ${disabled ? `<div class="coming-soon svelte-1i5lgsm">${validate_component(ComingSoon, "ComingSoon").$$render($$result, {}, {}, {})}</div>` : ``} </div>`;
});
const Plan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<p class="w-fit text-xs border font-semibold px-1.5 rounded-md text-center text-blue-700 border-blue-700">${escape(name)}</p>`;
});
const css = {
  code: ".org-selector .bx--popover-contents{width:100%}",
  map: null
};
const OrgSelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  let $newOrgModal, $$unsubscribe_newOrgModal;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $currentOrgPlan, $$unsubscribe_currentOrgPlan;
  let $orgs, $$unsubscribe_orgs;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  $$unsubscribe_newOrgModal = subscribe(newOrgModal, (value) => $newOrgModal = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_currentOrgPlan = subscribe(currentOrgPlan, (value) => $currentOrgPlan = value);
  $$unsubscribe_orgs = subscribe(orgs, (value) => $orgs = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { canAddOrg = true } = $$props;
  let open = false;
  function handleAddOrg() {
    open = false;
    set_store_value(newOrgModal, $newOrgModal.open = true, $newOrgModal);
  }
  function onClick(org) {
    localStorage.setItem("classroomio_org_sitename", org.siteName);
    currentOrg.set(org);
    setTheme(org.theme);
    goto($currentOrgPath);
    open = false;
  }
  if ($$props.canAddOrg === void 0 && $$bindings.canAddOrg && canAddOrg !== void 0)
    $$bindings.canAddOrg(canAddOrg);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="org-selector px-4 py-3 border border-l-0 border-r-0 border-t-0 border-gray-200 dark:border-neutral-600 relative" data-outline>${$currentOrg.name ? `<button class="flex items-center gap-2 w-full">${$currentOrg.avatar_url && $currentOrg.name ? `${validate_component(Avatar, "Avatar").$$render(
      $$result,
      {
        src: $currentOrg.avatar_url,
        name: $currentOrg.name,
        shape: "rounded-md",
        width: "w-7",
        height: "h-7"
      },
      {},
      {}
    )}` : `${$currentOrg.shortName ? `${validate_component(Text, "TextChip").$$render(
      $$result,
      {
        size: "sm",
        value: $currentOrg.shortName,
        className: "bg-primary-200 dark:text-black font-medium"
      },
      {},
      {}
    )}` : ``}`} <div class="flex items-center cursor-pointer max-w-[219px] justify-between w-full"><div class="flex flex-col items-start"><p class="dark:text-white text-sm font-medium whitespace-nowrap truncate mb-1">${escape($currentOrg.name)}</p> ${validate_component(Plan, "Plan").$$render(
      $$result,
      {
        name: $currentOrgPlan ? PLAN_NAMES[$currentOrgPlan.plan_name] : PLAN_NAMES.BASIC
      },
      {},
      {}
    )}</div> ${validate_component(ChevronSort, "ChevronSort").$$render($$result, { size: 16 }, {}, {})}</div></button>` : `<div class="w-[219px] h-[30px]">${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { style: "width: 100%; height: 100%;" }, {}, {})}</div>`} ${canAddOrg ? `${validate_component(Popover$1, "Popover").$$render(
      $$result,
      {
        class: "w-[95%] left-[2%] rounded-md",
        closeOnOutsideClick: true,
        align: "bottom-left",
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
          return `${each($orgs, (org) => {
            return `${validate_component(OrgSelectorItem, "OrgSelectorItem").$$render(
              $$result,
              {
                size: "sm",
                active: $currentOrg.id === org.id,
                avatar: org.avatar_url,
                avatarText: org.shortName,
                text: org.name,
                hasDivider: true,
                onClick: () => onClick(org)
              },
              {},
              {}
            )}`;
          })} ${validate_component(OrgSelectorItem, "OrgSelectorItem").$$render(
            $$result,
            {
              disabled: true,
              size: "",
              text: $t("navigation.add_organization"),
              onClick: handleAddOrg
            },
            {},
            {}
          )}`;
        }
      }
    )}` : ``} </div>`;
  } while (!$$settled);
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_newOrgModal();
  $$unsubscribe_currentOrg();
  $$unsubscribe_currentOrgPlan();
  $$unsubscribe_orgs();
  $$unsubscribe_t();
  return $$rendered;
});
const QuizIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="dark"><path d="M21.75 6H19.5V5.25C19.5 4.85218 19.342 4.47064 19.0607 4.18934C18.7794 3.90804 18.3978 3.75 18 3.75H6C5.60218 3.75 5.22064 3.90804 4.93934 4.18934C4.65804 4.47064 4.5 4.85218 4.5 5.25V6H2.25C1.85218 6 1.47064 6.15804 1.18934 6.43934C0.908035 6.72064 0.75 7.10218 0.75 7.5V9C0.75 9.99456 1.14509 10.9484 1.84835 11.6517C2.19657 11.9999 2.60997 12.2761 3.06494 12.4645C3.51991 12.653 4.00754 12.75 4.5 12.75H4.84219C5.28398 14.1501 6.12634 15.39 7.26516 16.3166C8.40398 17.2431 9.78933 17.8157 11.25 17.9634V20.25H9C8.80109 20.25 8.61032 20.329 8.46967 20.4697C8.32902 20.6103 8.25 20.8011 8.25 21C8.25 21.1989 8.32902 21.3897 8.46967 21.5303C8.61032 21.671 8.80109 21.75 9 21.75H15C15.1989 21.75 15.3897 21.671 15.5303 21.5303C15.671 21.3897 15.75 21.1989 15.75 21C15.75 20.8011 15.671 20.6103 15.5303 20.4697C15.3897 20.329 15.1989 20.25 15 20.25H12.75V17.9606C15.7444 17.6578 18.2288 15.5569 19.1325 12.75H19.5C20.4946 12.75 21.4484 12.3549 22.1516 11.6517C22.8549 10.9484 23.25 9.99456 23.25 9V7.5C23.25 7.10218 23.092 6.72064 22.8107 6.43934C22.5294 6.15804 22.1478 6 21.75 6ZM4.5 11.25C3.90326 11.25 3.33097 11.0129 2.90901 10.591C2.48705 10.169 2.25 9.59674 2.25 9V7.5H4.5V10.5C4.5 10.75 4.51219 11 4.53656 11.25H4.5ZM18 10.4156C18 13.7456 15.3291 16.4756 12.0459 16.5H12C10.4087 16.5 8.88258 15.8679 7.75736 14.7426C6.63214 13.6174 6 12.0913 6 10.5V5.25H18V10.4156ZM21.75 9C21.75 9.59674 21.5129 10.169 21.091 10.591C20.669 11.0129 20.0967 11.25 19.5 11.25H19.4531C19.4839 10.9729 19.4995 10.6944 19.5 10.4156V7.5H21.75V9Z" fill="currentColor"></path></svg>`;
});
const SiteSettingsIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M20.9243 6.00098H22.5001V7.50098H20.9243C20.8276 7.97046 20.6412 8.41687 20.3753 8.81573L21.4928 9.93323L20.4323 10.9937L19.3148 9.87623C18.916 10.1421 18.4696 10.3284 18.0001 10.4252V12.001H16.5001V10.4252C16.0307 10.3284 15.5842 10.142 15.1854 9.87615L14.0679 10.9937L13.0074 9.93315L14.1249 8.81565C13.8591 8.41681 13.6727 7.97043 13.576 7.50098H12.0001V6.00098H13.576C13.6727 5.53149 13.8591 5.08508 14.125 4.68623L13.0075 3.56873L14.068 2.50823L15.1855 3.62573C15.5843 3.35989 16.0307 3.17351 16.5001 3.0768V1.50098H18.0001V3.0768C18.4696 3.17352 18.916 3.35993 19.3149 3.6258L20.4324 2.5083L21.4929 3.5688L20.3754 4.6863C20.6412 5.08514 20.8276 5.53152 20.9243 6.00098ZM16.0001 8.62178C16.3701 8.86902 16.8051 9.00098 17.2501 9.00098C17.8467 9.00032 18.4186 8.76306 18.8404 8.34124C19.2622 7.91943 19.4995 7.34751 19.5001 6.75098C19.5001 6.30597 19.3682 5.87095 19.1209 5.50094C18.8737 5.13093 18.5223 4.84255 18.1112 4.67225C17.7 4.50195 17.2476 4.45739 16.8112 4.54421C16.3747 4.63103 15.9738 4.84532 15.6591 5.15999C15.3445 5.47465 15.1302 5.87557 15.0434 6.31202C14.9566 6.74848 15.0011 7.20088 15.1714 7.61201C15.3417 8.02315 15.6301 8.37455 16.0001 8.62178ZM21 16.5002V12.7502H22.5V16.5002C22.5 16.8981 22.342 17.2796 22.0607 17.5609C21.7794 17.8422 21.3978 18.0002 21 18.0002H15V21.0002H18V22.5002H6V21.0002H9V18.0002H3C2.60218 18.0002 2.22064 17.8422 1.93934 17.5609C1.65804 17.2796 1.5 16.8981 1.5 16.5002V4.50024C1.5 4.10242 1.65804 3.72089 1.93934 3.43958C2.22064 3.15828 2.60218 3.00024 3 3.00024H10.5V4.50024H3V16.5002H21ZM10.5 21.0002H13.5V18.0002H10.5V21.0002Z" fill="currentColor"></path></svg>`;
});
const AudienceIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="dark"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 1.5V3C15.9946 3 16.9484 3.39509 17.6516 4.09835C18.3549 4.80161 18.75 5.75544 18.75 6.75C18.75 7.74456 18.3549 8.69839 17.6516 9.40165C16.9484 10.1049 15.9946 10.5 15 10.5V12C16.3924 12 17.7277 11.4469 18.7123 10.4623C19.6969 9.47774 20.25 8.14239 20.25 6.75C20.25 5.35761 19.6969 4.02226 18.7123 3.03769C17.7277 2.05312 16.3924 1.5 15 1.5ZM15 22.5H16.5V18.75C16.4984 17.3581 15.9447 16.0237 14.9605 15.0395C13.9763 14.0553 12.6419 13.5016 11.25 13.5H6.75C5.35811 13.5016 4.0237 14.0553 3.03949 15.0395C2.05527 16.0237 1.50163 17.3581 1.5 18.75V22.5H3V18.75C3.00117 17.7558 3.39664 16.8027 4.09964 16.0996C4.80265 15.3966 5.7558 15.0012 6.75 15H11.25C12.2442 15.0012 13.1973 15.3966 13.9004 16.0996C14.6034 16.8027 14.9988 17.7558 15 18.75V22.5ZM21 22.5H22.5V18.75C22.4985 17.3581 21.9448 16.0236 20.9606 15.0394C19.9764 14.0552 18.6419 13.5015 17.25 13.5V15C18.2442 15.0011 19.1974 15.3966 19.9004 16.0996C20.6034 16.8026 20.9989 17.7558 21 18.75V22.5ZM11.0834 3.63199C10.4667 3.21993 9.74168 3 9 3C8.00544 3 7.05161 3.39509 6.34835 4.09835C5.64509 4.80161 5.25 5.75544 5.25 6.75C5.25 7.49168 5.46994 8.2167 5.88199 8.83339C6.29405 9.45007 6.87972 9.93072 7.56494 10.2145C8.25016 10.4984 9.00416 10.5726 9.73159 10.4279C10.459 10.2833 11.1272 9.9261 11.6517 9.40165C12.1761 8.8772 12.5333 8.20902 12.6779 7.48159C12.8226 6.75416 12.7484 6.00016 12.4646 5.31494C12.1807 4.62971 11.7001 4.04404 11.0834 3.63199ZM6.08326 2.38478C6.94662 1.80791 7.96165 1.5 9 1.5C10.3924 1.5 11.7277 2.05312 12.7123 3.03769C13.6969 4.02226 14.25 5.35761 14.25 6.75C14.25 7.78835 13.9421 8.80339 13.3652 9.66674C12.7883 10.5301 11.9684 11.203 11.0091 11.6004C10.0498 11.9977 8.99418 12.1017 7.97578 11.8991C6.95738 11.6966 6.02192 11.1965 5.28769 10.4623C4.55347 9.72808 4.05345 8.79262 3.85088 7.77422C3.64831 6.75582 3.75227 5.70022 4.14963 4.74091C4.54699 3.7816 5.2199 2.96166 6.08326 2.38478Z" fill="currentColor"></path></svg>`;
});
function isActive(pagePath, itemPath) {
  const pageLinkItems = pagePath.split("/");
  const itemLinkItems = itemPath.split("/");
  if (itemLinkItems.length !== pageLinkItems.length) {
    return false;
  }
  return pagePath.includes(itemPath);
}
const SideBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isOrgAdmin, $$unsubscribe_isOrgAdmin;
  let $t, $$unsubscribe_t;
  let $sideBar, $$unsubscribe_sideBar;
  let $profileMenu, $$unsubscribe_profileMenu;
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  let $page, $$unsubscribe_page;
  let $isFreePlan, $$unsubscribe_isFreePlan;
  let $profile, $$unsubscribe_profile;
  $$unsubscribe_isOrgAdmin = subscribe(isOrgAdmin, (value) => $isOrgAdmin = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_sideBar = subscribe(sideBar, (value) => $sideBar = value);
  $$unsubscribe_profileMenu = subscribe(profileMenu, (value) => $profileMenu = value);
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_isFreePlan = subscribe(isFreePlan, (value) => $isFreePlan = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  let menuItems = [];
  const openModal = () => {
    goto(window.location.pathname + "?upgrade=true");
  };
  menuItems = [
    {
      path: "",
      label: $t("org_navigation.dashboard"),
      show: true
    },
    {
      path: "/courses",
      label: $t("org_navigation.courses"),
      show: true
    },
    {
      path: "/community",
      label: $t("org_navigation.community"),
      show: true
    },
    {
      path: "/audience",
      label: $t("org_navigation.audience"),
      show: true
    },
    {
      path: "/setup",
      label: $t("org_navigation.setup"),
      show: $isOrgAdmin
    }
  ];
  $$unsubscribe_isOrgAdmin();
  $$unsubscribe_t();
  $$unsubscribe_sideBar();
  $$unsubscribe_profileMenu();
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_page();
  $$unsubscribe_isFreePlan();
  $$unsubscribe_profile();
  return `<div class="static md:relative"${add_attribute("this", $profileMenu.ref, 0)}><aside${add_attribute(
    "class",
    `${$sideBar.hidden ? "absolute z-40 -translate-x-[100%] md:relative md:translate-x-0 top-[48px] md:top-0" : "absolute z-40 translate-x-0 md:relative top-[48px] md:top-0"} border-r-1 h-[calc(100vh-48px)] w-[250px] min-w-[250px] overflow-y-auto border border-b-0 border-l-0 border-t-0 border-gray-100 dark:border-neutral-600 bg-gray-100 transition dark:bg-neutral-900`,
    0
  )}><div class="flex h-full flex-col"><div class="">${validate_component(OrgSelector, "OrgSelector").$$render($$result, {}, {}, {})} <ul class="mt-4 my-2 px-4">${each(menuItems, (menuItem) => {
    return `${menuItem.show ? `<a href="${escape($currentOrgPath, true) + escape(menuItem.path, true)}" class="text-black no-underline"><li class="${"mb-1 flex items-center gap-2.5 px-2.5 py-2 " + escape(NavClasses.item, true) + " " + escape(
      isActive($page.url.pathname, `${$currentOrgPath}${menuItem.path}`) ? NavClasses.active : "dark:text-white",
      true
    )}">${menuItem.path === "" ? `${validate_component(HomeIcon, "HomeIcon").$$render($$result, {}, {}, {})}` : `${menuItem.path === "/courses" ? `${validate_component(CourseIcon, "CourseIcon").$$render($$result, {}, {}, {})}` : `${menuItem.path === "/site" ? `${validate_component(SiteSettingsIcon, "SiteSettingsIcon").$$render($$result, {}, {}, {})}` : `${menuItem.path === "/community" ? `${validate_component(Forum, "ForumIcon").$$render(
      $$result,
      {
        size: 20,
        class: "carbon-icon fill-[#000] dark:fill-[#fff]"
      },
      {},
      {}
    )}` : `${menuItem.path === "/quiz" ? `${validate_component(QuizIcon, "QuizIcon").$$render($$result, {}, {}, {})}` : `${menuItem.path === "/audience" ? `${validate_component(AudienceIcon, "AudienceIcon").$$render($$result, {}, {}, {})}` : `${menuItem.path === "/setup" ? `${validate_component(SettingsAdjust, "SettingsAdjust").$$render($$result, {}, {}, {})}` : ``}`}`}`}`}`}`} <p class="text-sm font-medium">${escape(menuItem.label)}</p></li> </a>` : ``}`;
  })}</ul></div> <span class="flex-grow"></span> ${$isFreePlan ? `<div class="border-primary-700 mx-4 flex flex-col items-center justify-center gap-4 rounded-md border px-2 py-6 text-center hover:scale-95 transition-all ease-in-out"><img src="/upgrade.png" alt="upgrade" class="h-16 w-16"> <span class="flex flex-col gap-1"><p class="text-base font-semibold">${escape($t("org_navigation.early_adopter"))}</p> <p class="text-xs">${escape($t("org_navigation.unlock"))}</p></span> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      label: $t("org_navigation.upgrade"),
      onClick: openModal,
      className: "font-normal"
    },
    {},
    {}
  )}</div>` : ``} <ul class="my-5 px-4 pb-5"><a${add_attribute("href", $currentOrgPath, 0)} class="text-black no-underline"><li class="mb-2 flex items-center rounded px-2.5 py-1.5">${validate_component(Help, "HelpIcon").$$render(
    $$result,
    {
      size: 20,
      class: "carbon-icon dark:text-white"
    },
    {},
    {}
  )} <p class="ml-2.5 dark:text-white text-sm font-medium">${escape($t("org_navigation.help"))}</p></li></a> <button class="w-full"><div class="${"text-black no-underline cursor-pointer flex items-center justify-between gap-2.5 px-2.5 py-2 mb-2 " + escape(NavClasses.item, true) + " " + escape(
    $page.url.pathname.includes("settings") ? NavClasses.active : "dark:text-white",
    true
  )}"><div class="flex text-start items-center justify-start space-x-1 w-full">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      src: $profile.avatar_url,
      name: $profile.username,
      width: "w-[1.2rem]",
      height: "h-[1.2rem]"
    },
    {},
    {}
  )} <p class="text-sm dark:text-white font-medium truncate max-w-full">${escape($profile.fullname)}</p></div> <div>${validate_component(ChevronRight, "ChevronRight").$$render($$result, {}, {}, {})}</div></div></button></ul></div></aside> ${validate_component(ProfileMenu, "ProfileMenu").$$render($$result, {}, {}, {})}</div>`;
});
const WAIT_SEC = 120;
const VerifyEmailModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $profile, $$unsubscribe_profile;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  const WAIT_TIME = WAIT_SEC * 1e3;
  let open = false;
  let loading = false;
  let isSent = false;
  let interval;
  let countDown = WAIT_SEC;
  const resendVerificationCode = async () => {
    loading = true;
    try {
      isSent = true;
    } catch (error) {
      snackbar.error("verify_email_modal.snackbar.error");
    } finally {
      loading = false;
    }
    interval = setInterval(
      () => {
        countDown = countDown - 1;
      },
      1e3
    );
    setTimeout(
      () => {
        isSent = false;
        clearInterval(interval);
      },
      WAIT_TIME
    );
  };
  open = false;
  $$unsubscribe_t();
  $$unsubscribe_profile();
  return `${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      open,
      isCloseable: false,
      width: "w-4/5",
      maxWidth: "w-[500px]",
      containerClass: "p-4"
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-col items-center space-y-6 text-center"><img src="/verify-email.svg" alt="email verification"> <p class="font-bold text-xl">${escape($t("verify_email_modal.heading"))}</p> <p class="text-sm w-[70%] text-gray-700 dark:text-gray-200">${escape($t("verify_email_modal.sent_verification"))} ${escape($profile.email)} ${escape($t("verify_email_modal.to_confirm"))}</p> <div class="flex items-center flex-col">${validate_component(PrimaryButton, "PrimaryButton").$$render(
          $$result,
          {
            isDisabled: loading || isSent,
            className: "font-normal",
            onClick: resendVerificationCode
          },
          {},
          {
            default: () => {
              return `${loading ? `${escape($t("verify_email_modal.loading"))}` : `${escape($t("verify_email_modal.resend"))}`}`;
            }
          }
        )} ${isSent ? `<p class="text-xs text-gray-700">${escape($t("verify_email_modal.resend_in"))} ${escape(countDown)} ${escape($t("verify_email_modal.seconds"))}</p>` : ``}</div></div>`;
      }
    }
  )}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $currentOrg, $$unsubscribe_currentOrg;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    if ($currentOrg.id && data.orgName === "*") {
      const newUrl = $page.url.pathname.replace("*", $currentOrg.siteName);
      goto(newUrl + $page.url.search);
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_currentOrg();
  return `${validate_component(AddOrgModal, "AddOrgModal").$$render($$result, {}, {}, {})} ${validate_component(VerifyEmailModal, "VerifyEmailModal").$$render($$result, {}, {}, {})} <div class="org-root w-full flex items-center justify-between">${!isQuizPage($page.url?.pathname) ? `${validate_component(SideBar, "OrgSideBar").$$render($$result, {}, {}, {})}` : ``} <div class="org-slot bg-white dark:bg-black w-full">${data.orgName === "*" ? `${validate_component(Box, "Box").$$render($$result, {}, {}, {
    default: () => {
      return `Taking you to your organization...`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-3bb51644.js.map
